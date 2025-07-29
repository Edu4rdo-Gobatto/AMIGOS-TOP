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
          <div className={styles.topCard}>
            <div className={styles.number}>1</div>
            <div className={styles.cargo}>{CargoOne}</div>
          </div>
          <div className={styles.cardOne}>
            <br />
            <span className={styles.local}>Sinop-MT</span><br />
             <span className={styles.descricao}>{description}</span>
            <span>
              <button className={styles.vermais} onClick={()=> abrirModal(<Event onClose={closeModal}/>)}>Ver mais...</button>
            </span>
          </div>
        </div>

        <div>
          <div className={styles.topCard}>
            <div className={styles.number}>2</div>
            <div className={styles.cargo}>{CargoTwo}</div>
          </div>
          <div className={styles.cardTwo}>
            <br />
            <span className={styles.local}>Sorriso-MT</span><br />
              <span className={styles.descricao}>{descriptionTwo}</span>
            <span>
              <button className={styles.vermais} onClick={()=> abrirModal(<EventTwo onClose={closeModal}/>)}>Ver mais...</button>
            </span>
          </div>
        </div>

        <div>
          <div className={styles.topCard}>
            <div className={styles.number}>3</div>
            <div className={styles.cargo}>{CargoThree}</div>
          </div>
          <div className={styles.cardThree}>
            <br />
            <span className={styles.local}>Lucas do Rio Verde - MT</span><br />
              <span className={styles.descricao}>{descriptionThree}</span>
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
