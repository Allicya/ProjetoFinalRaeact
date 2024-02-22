import { useState } from 'react';
import styles from './coments.module.css';

const Comentarios = () => {
  const [comentario, setComentario] = useState('');

  const typeComment = (event) => {
    setComentario(event.target.value);
  };

  const clickButton = () => {
    setComentario('');
  };

  return (
    <>
      <div className={styles.header}>
        <h1>
            Deixe o seu comentário abaixo
            </h1>
        <img src={Comentario} alt="Comentário" />
      </div>
      <div className={styles.comentario}>
        <input
          type="text"
          value={comentario}
          onChange={typeComment}
          placeholder="Digite aqui..."
        />
        <button className={styles.button} onClick={clickButton}>+</button>
      </div>
    </>
  );
};

export default Comentarios;