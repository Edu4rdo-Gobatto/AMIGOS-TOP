import { useEffect, useState, type JSX } from "react";
import styles from "./midleTwo.module.css";
import ModalOne from "../modal/modalOne/modalOne";
import ModalTwo from "../modal/modalTwo/modalTwo";
import ModalThree from "../modal/modalThree/modalThree";
import ModalFour from "../modal/modalFour/modalFour";

function MidleTwo() {

  const CargoFour = "Instalador sem CNH";
  const description = <span className={styles.descricao}>
      Disponibilidade de horários, não é necessário experiência, possuir informática básica...
  </span>

  const CargoFive = "Instalador sem CNH"
  const descriptionTwo = <span className={styles.descricao}>
      Disponibilidade de horários, não é necessário experiência, possuir informática básica...
  </span>

  const CargoSix = "Consultor(a) de vendas";
  const descriptionThree = <span className={styles.descricao}>
      Maior de 18 anos, Boa comunicação, determinado(a), Trabalhar bem em equipe...
  </span>

  const CargoSeven = "Suporte ao Cliente";
  const descriptionFour = <span className={styles.descricao}>
      Maior de 18 anos; Boa comunicação, Didática compreensível, Trabalhar em equipe... 
      
  </span>

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

  useEffect(() => {
  if (modalOpen) {
    document.body.style.overflow = "hidden"; 
  } else {
    document.body.style.overflow = "auto";  
  }
  return () => {
    document.body.style.overflow = "auto";
  };
}, [modalOpen]);


  return (

    <div className={styles.boxOne}>

      <div>
        <div className={styles.topCard}>
            <div className={styles.number}>4</div>
            <div className={styles.cargo}>{CargoFour}</div>
        </div>
        <div className={styles.cardOne}>
          <span className={styles.local}>Sinop-MT</span>
          <h5 className={styles.descricao}>
            {description}
          </h5>
          <span>
            <button className={styles.vermais} onClick={()=> abrirModal(<ModalOne onClose={closeModal}/>)}>Ver mais...</button>
          </span>
        </div>
      </div>

      <div>
        <div className={styles.topCard}>
            <div className={styles.number}>5</div>
            <div className={styles.cargo}>{CargoFive}</div>
        </div>
        <div className={styles.cardTwo}>
          <span className={styles.local}>Claudia-MT</span>
          <h5 className={styles.descricao}>
            {descriptionTwo}
          </h5>
          <span>
            <button className={styles.vermais} onClick={()=> abrirModal(<ModalTwo onClose={closeModal}/>)}>Ver mais...</button>
          </span>
        </div>
      </div>

      <div>
        <div className={styles.topCard}>
            <div className={styles.number}>6</div>
            <div className={styles.cargo}>{CargoSix}</div>
        </div>
        <div className={styles.cardThree}>
          <span className={styles.local}>Peixoto de Azevedo-MT</span>
          <h5 className={styles.descricao}>
            {descriptionThree}
          </h5>
          <span>
            <button className={styles.vermais} onClick={()=> abrirModal(<ModalThree onClose={closeModal}/>)}>Ver mais...</button>
          </span>
        </div>
      </div>

      <div>
        <div className={styles.topCard}>
            <div className={styles.number}>7</div>
            <div className={styles.cargo}>{CargoSeven}</div>
        </div>
        <div className={styles.cardFour}>
          <span className={styles.local}>Sinop-MT</span>
          <h5 className={styles.descricao}>
            {descriptionFour}
          </h5>
          <span>
            <button className={styles.vermais} onClick={()=> abrirModal(<ModalFour onClose={closeModal}/>)}>Ver mais...</button>
          </span>
        </div>
      </div>

      {modalOpen && modalContent}

    </div>
  );
}

export default MidleTwo;
