import React from "react";
import ReactDOM from "react-dom";
import { PencilLine } from "phosphor-react";

import styles from './Sidebar.module.css'
import bg from '../assets/bg-florest.jpeg'
import {Avatar} from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={bg} alt=""/>

            <div className={styles.profile}>
                <Avatar  src="https://avatars.githubusercontent.com/u/1480579?v=4" alt=""/>
                <strong>Carlos Clayton</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
}
