import style from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'sdsdsdsdkfjslkdfn;f aewiufhnvaosdndicewbvncaweinvbce'}/>
                    <Skill title={'CSS'} description={'s64324832245ds5431c3s5d4 354sdf1sd3 3e4f 03s5f4dsdsd44444'}/>
                    <Skill title={'React'} description={'sdsdsdsfs644 4d65f4 4 +64f4 4 sddds'}/>
                </div>

            </div>

        </div>
    )
}