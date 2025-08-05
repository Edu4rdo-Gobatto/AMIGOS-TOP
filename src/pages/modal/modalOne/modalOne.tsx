import styles from "./modalOne.module.css";

function ModalOne({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <h2>Instalador com CNH</h2>
        <p><strong>Local:</strong> Sinop - MT</p>

        <p><strong>Descrição:</strong></p>
        <p>Disponibilidade de horários, não é necessário experiência, possuir informática básica. Focado e determinado, trabalhar bem em equipe; E possuir ensino médio completo.</p>

        <p><strong>Requisitos:</strong></p>
        <ul>
          <li>Ensino médio completo</li>
          <li>CNH ativa</li>
          <li>Comprometimento com horários</li>
          <li>Boa comunicação</li>
        </ul>

        <p><strong>Tipo de contrato:</strong> CLT</p>
      </div>
    </div>
  );
}

export default ModalOne;
