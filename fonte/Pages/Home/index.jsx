import styles from './home.module.css'

const Inicio = () => {
  return (
    <>
        <div className={styles.header}>
          <h1>
              Projeto Final Pretalab 2024! 💜
          </h1>
          <img src={homeImg} />
        </div>
        <div className={styles.subtitulo}>
          <p>
          Este site representa o meu projeto final do módulo de React do Ciclo Formativo Básico do Pretalab. 
Desenvolvi-o utilizando React e ele aborda muitos tópicos discutidos durante nossas aulas. Desde componentes
básicos até conceitos mais avançados, como props, estados , listas e chaves, ganchos e manipulação de eventos
como onChange e onClick, este projeto serviu como um marco significativo no meu aprendizado.

Ao longo do desenvolvimento deste site, pude aplicar de forma prática e aprofundada os conceitos essenciais
 do React, consolidando assim meu conhecimento na linguagem. Além disso, explorei diversas funcionalidades e
técnicas para criar uma experiência interativa e envolvente para os usuários.

Estou muito orgulhoso do resultado final e acredito que este projeto não apenas demonstra minha compreensão
 do React, mas também minha capacidade de criar aplicações web robustas e funcionais. Espero que este trabalho
 seja um reflexo do meu progresso e dedicação durante o Ciclo Formativo Básico da Pretalab. 

          </p>
        </div>

        <div className={styles.header}>
          <h1>
              Sobre a Formação
              
          </h1>
          <img src={formacao} />
        </div>
        
        <div className={styles.subtitulo}>
          <p>
          Participar deste ciclo formativo dedicado a mulheres negras é uma jornada transformadora
que vai muito além do aprendizado técnico. É uma oportunidade única de empoderamento, de
construção de novas perspectivas e de fortalecimento da identidade.

Ao longo desse ciclo, não apenas adquirimos habilidades práticas em áreas como React, mas também
mergulhamos em discussões significativas sobre representatividade, equidade e diversidade. Somos
encorajadas a ocupar espaços que tradicionalmente nos foram negados e a fazer ouvir nossas vozes
em um mundo muitas vezes dominado por visões limitadas.

Cada aula, cada projeto, representa um passo em direção a um futuro mais inclusivo e igualitário.
É um processo de autodescoberta e de construção de uma comunidade forte e solidária, onde podemos
compartilhar experiências, aprender umas com as outras e nos apoiar mutuamente em nossa jornada.

Participar deste ciclo formativo é mais do que apenas adquirir habilidades técnicas; é fazer parte
de uma revolução silenciosa, onde as mulheres negras estão se levantando, reivindicando seu lugar
e moldando o futuro da tecnologia com suas próprias mãos. É uma jornada de empoderamento, de crescimento
pessoal e de inspiração para todas as mulheres que sonham em alcançar seus objetivos, independentemente
das barreiras que enfrentem.

💜
          </p>
        </div>
     </>
  )
}
export default Inicio;