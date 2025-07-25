import { useState, type JSX } from "react";
import styles from "./midle.module.css";
import Event from "../evento/eventOne/event";
import EventTwo from "../evento/event.two/eventTwo";
import EventThree from "../evento/evento.Three/eventThree";

function Midle() {

  const CargoOne = " Desenvolvedor WEB Sênior";
  const description = <h5 className={styles.descricao}>
      Experiência e conhecimentos JavaScript, JQUERY, AJAX, HTML5, CSS3, PHP,
      Banco de dados PGSQL e REST/JSON, para desenvolvimento de aplicações web...
  </h5>

  const CargoTwo = " Desenvolvedor Mobile pleno"
  const descriptionTwo = <h5 className={styles.descricao}>
      React Native ou Flutter, JavaScript ou Dart,Integração com APIs REST/JSON
      Publicação de apps nas lojas (App Store / Play Store), Git e controle de versão...
  </h5>

  const CargoThree = " Desenvolvedor Java pleno";
  const descriptionThree = <h5 className={styles.descricao}>
      Experiência com Java, Spring Framework (Boot, Data, Security), APIs RESTful, 
      Banco de dados relacionais (PostgreSQL ou MySQL), Versionamento com Git...
  </h5>

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null); 

  function abrirModal(content: JSX.Element) {
    setModalContent(content);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalContent(null);
  }

  return (
    <div className={styles.topMidle}>

      <h1>OPORTUNIDADES</h1>

      <div className={styles.boxOne}>

        <div>
          <span className={styles.cargo}>
            <span className={styles.number}>1</span>{CargoOne}
          </span>
          <div className={styles.cardOne}>
            <br />
            <span className={styles.local}>Sinop-MT</span><br />
             {description}
            <span>
              <button className={styles.vermais} onClick={()=> abrirModal(<Event onClose={closeModal}/>)}>Ver mais...</button>
            </span>
          </div>
        </div>

        <div>
          <span className={styles.cargo}>
            <span className={styles.number}>2</span>{CargoTwo}
          </span>
          <div className={styles.cardTwo}>
            <br />
            <span className={styles.local}>Sorriso-MT</span><br />
              {descriptionTwo}
            <span>
              <button className={styles.vermais} onClick={()=> abrirModal(<EventTwo onClose={closeModal}/>)}>Ver mais...</button>
            </span>
          </div>
        </div>

        <div>
          <span className={styles.cargo}>
            <span className={styles.number}>3</span>{CargoThree}
          </span>
          <div className={styles.cardThree}>
            <br />
            <span className={styles.local}>Lucas do Rio Verde - MT</span><br />
              {descriptionThree}
            <span>
              <button className={styles.vermais} onClick={()=> abrirModal(<EventThree onClose={closeModal}/>)}>Ver mais...</button>
            </span>
          </div>
        </div>

        {modalOpen && modalContent}

      </div>
    </div>
  );
}

export default Midle;
