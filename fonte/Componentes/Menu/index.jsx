import { Link } from "react-router-dom"
import styles from "./menu.module.css"
const Menu = () =>{
    return (
        <nav>
            <ul className={styles.menu}>
                <li>
                    <Link className={styles.itemMenu} to="/">
                        Inicio
                    </Link>
                </li>

                <li>
                    <Link className={styles.itemMenu} to="/sobre">
                        Sobre
                    </Link>
                </li>

                <li>
                    <Link className={styles.itemMenu} to="/contato">
                        Contato
                    </Link>
                </li>
                <li>
                    <Link className={styles.itemMenu} to="/comentario">
                        Comentarios
                    </Link>
                </li>
            </ul>
        </nav>
    )
   


}
export default Menu;