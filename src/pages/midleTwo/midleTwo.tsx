import { useState, type JSX } from "react";
import styles from "./midleTwo.module.css";
import ModalOne from "../modal/modalOne/modalOne";
import ModalTwo from "../modal/modalTwo/modalTwo";
import ModalThree from "../modal/modalThree/modalThree";
import ModalFour from "../modal/modalFour/modalFour";

function MidleTwo() {

  const CargoOne = "Instalador com CNH";
  const description = <h5 className={styles.descricao}>
      Disponibilidade de horários, Não é necessário experiência, Possuir informática básica, 
      Focado e determinado, Trabalhar bem em equipe, E possuir ensino médio completo.
  </h5>

  const CargoTwo = "Instalador sem CNH"
  const descriptionTwo = <h5 className={styles.descricao}>
      Disponibilidade de horários, Não é necessário experiência, Possuir informática básica, 
      Focado e determinado, Trabalhar bem em equipe, E possuir ensino médio completo.
  </h5>

  const CargoThree = "Consultor(a) de vendas";
  const descriptionThree = <h5 className={styles.descricao}>
      Maior de 18 anos, Boa comunicação, Focado(a) e determinado(a) Trabalhar bem em equipe, 
      Ensino médio completo, Não é necessário experiência, Possuir informática básica.
  </h5>

  const CargoFour = "Suporte ao Cliente";
  const descriptionFour = <h5 className={styles.descricao}>
      Maior de 18 anos; Boa comunicação, Didática compreensível, Trabalhar em equipe, 
      Ensino médio completo, Não é necessário experiência; Possuir informática básica.
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

    <div className={styles.boxOne}>

      <div>
        <span className={styles.cargo}>
          <span className={styles.number}>4</span>{CargoOne}
        </span>
        <div className={styles.cardOne}>
          <br />
          <span className={styles.local}>Peixoto de Azevedo - MT</span><br />
          <h5 className={styles.descricao}>
            {description}
          </h5>
          <span>
            <button className={styles.vermais} onClick={()=> abrirModal(<ModalOne onClose={closeModal}/>)}>Ver mais...</button>
          </span>
        </div>
      </div>

      <div>
        <span className={styles.cargo}>
          <span className={styles.number}>5</span>{CargoTwo}
        </span>
        <div className={styles.cardTwo}>
          <br />
          <span className={styles.local}>Claudia-MT</span><br />
          <h5 className={styles.descricao}>
            {descriptionTwo}
          </h5>
          <span>
            <button className={styles.vermais} onClick={()=> abrirModal(<ModalTwo onClose={closeModal}/>)}>Ver mais...</button>
          </span>
        </div>
      </div>

      <div>
        <span className={styles.cargo}>
          <span className={styles.number}>6</span>{CargoThree}
        </span>
        <div className={styles.cardThree}>
          <br />
          <span className={styles.local}>Sinop-MT</span><br />
          <h5 className={styles.descricao}>
            {descriptionThree}
          </h5>
          <span>
            <button className={styles.vermais} onClick={()=> abrirModal(<ModalThree onClose={closeModal}/>)}>Ver mais...</button>
          </span>
        </div>
      </div>

      <div>
        <span className={styles.cargo}>
          <span className={styles.number}>7</span>{CargoFour}
        </span>
        <div className={styles.cardFour}>
          <br />
          <span className={styles.local}>Sinop-MT</span><br />
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
