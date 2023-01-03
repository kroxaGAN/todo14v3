import React from "react";
import style from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={style.nav}>
            <a href="">Главная</a>
            <a href="">Скилы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    )
}