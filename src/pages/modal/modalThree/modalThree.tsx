import styles from "./modalThree.module.css";

function EventSix({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <h2>Consultor(a) de Vendas</h2>
        <p><strong>Local:</strong> Sinop - MT</p>

        <p><strong>Descrição:</strong></p>
        <p>Maior de 18 anos; Boa comunicação; Focado(a) e determinado(a); Trabalhar bem em equipe; Ensino médio completo; Não é necessário experiência; Possuir informática básica.</p>

        <p><strong>Requisitos:</strong></p>
        <ul>
          <li>Boa comunicação verbal</li>
          <li>Facilidade de persuasão</li>
          <li>Conhecimentos básicos de informática</li>
        </ul>

        <p><strong>Tipo de contrato:</strong> CLT ou Comissão</p>
      </div>
    </div>
  );
}

export default EventSix;
