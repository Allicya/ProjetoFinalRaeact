import { useState } from 'react'
import contatoImg from '\projeto_final_react\fonte\assets\icone.jpeg'

import styles from './contacts.module.css'

function Contato() {
  const [mensagem, setMensagem] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value)
  }

  function handleInputValueNome(event) {
    setNome(event.target.value)
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value)
  }

  function handleCreateMessage(event) {
    event.preventDefault();
  
    const messageData = {
      textMessage: mensagem,
      email: email,
      nome: nome,
    };
  
    setMensagem('');
    setNome('');
    setEmail('');
  }

  return(
    <>
      <div className={styles.header}>
        <h1>
          Entre em contato comigo!
        </h1>
        <img src={contatoImg} />
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleCreateMessage} className={styles.form}>
          <input className={styles.formInput} placeholder="Digite seu nome completo" onChange={handleInputValueNome} value={nome} />
          <input className={styles.formInput} placeholder="Digite um e-mail válido" onChange={handleInputValueEmail} value={email} />
          <textarea className={styles.formTextArea} placeholder="Em que posso te ajudar?" onChange={handleInputValueMensagem} value={mensagem} />
          <button className={styles.formButton} type="submit">Enviar mensagem</button>
        </form>
      </div>
    </>
  )
}

export default Contato;