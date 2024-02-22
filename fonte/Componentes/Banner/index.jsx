//Criando meu compononente Banner
import styles from "./banner.module.css"
import banner from "\projeto_final_react\fonte\assets\Allícya Rocha.png"
const Banner = () => {
    return (
        <div className={styles.banner}>
            <img src={banner} alt="Banner principal da minha aplicação"/>
        </div>
    )
}

export default Banner;