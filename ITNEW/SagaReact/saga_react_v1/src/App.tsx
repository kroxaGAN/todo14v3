import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

    export interface ImageType {
        url: string;
        width: number;
        height: number;
        fileSize: number;
    }

    export interface ImagesType {
        main: ImageType[];
    }

    export interface TodolistType {
        isImportant: boolean;
        id: string;
        title: string;
        description: string;
        addedDate: Date;
        order: number;
        images: ImagesType;
    }

    export interface GetResponseTodolistsType {
        pagesCount: number;
        page: number;
        pageSize: number;
        totalCount: number;
        items: TodolistType[];
    }


function App() {
    let [todolists, setTodolists] = useState<TodolistType[]>([])
    useEffect(() => {
        axios.get<GetResponseTodolistsType>("https://todolists.samuraijs.com/api/1.0/todolists")
            .then((res) => {
                setTodolists(res.data.items)
            })
    }, [])
    return (
        <div className="App">
            <h1> Start for SAGA</h1>
            {
                todolists.map((el) => {
                        const imgUrl = el.images.main.length > 1 ? el.images.main[1].url: 'https://placehold.co/48'
                        return <div key={el.id}>
                            <img src={imgUrl}/>
                            <h3>
                                <input type={"checkbox"} checked={el.isImportant} readOnly/>
                                {el.title}
                            </h3>
                            <div>{el.description}</div>
                        </div>
                    }
                )
            }
        </div>
    );
}

export default App;
