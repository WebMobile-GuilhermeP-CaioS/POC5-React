import styles from "./quadro.module.css";

export default function Quadro({url, titulo, autor, ano}){
    return (
        <figure className={styles.quadro}>
            <img alt={titulo + '. ' + autor + ', ' + ano + '.'} src={url}/>
            <figcaption>{titulo + '. ' + autor + ', ' + ano + '.'}</figcaption>
        </figure>
    );
}