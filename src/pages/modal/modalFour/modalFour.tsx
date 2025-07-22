import styles from "./modalFour.module.css";

function EventSeven({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <h2>Suporte ao Cliente</h2>
        <p><strong>Local:</strong> Sinop - MT</p>

        <p><strong>Descrição:</strong></p>
        <p>Maior de 18 anos; Boa comunicação; Didática compreensível; Trabalhar bem em equipe; Ensino médio completo; Não é necessário experiência; Possuir informática básica.</p>

        <p><strong>Requisitos:</strong></p>
        <ul>
          <li>Boa comunicação escrita e falada</li>
          <li>Didática para explicar sistemas e processos</li>
          <li>Pacote Office básico</li>
        </ul>

        <p><strong>Tipo de contrato:</strong> CLT</p>
      </div>
    </div>
  );
}

export default EventSeven;
