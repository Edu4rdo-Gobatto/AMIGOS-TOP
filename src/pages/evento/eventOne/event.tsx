import styles from "./event.module.css";

function Event({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <h2>Desenvolvedor(a) Web Sênior</h2>
        <p className={styles.paragrafo}><strong>Local:</strong> Sinop - MT</p>

        <p className={styles.paragrafo}><strong>Descrição da vaga:</strong></p>
        <p className={styles.paragrafo}>
          Estamos em busca de um(a) Desenvolvedor(a) Web Sênior com perfil proativo e colaborativo, 
          que possua experiência sólida em tecnologias front-end e back-end. 
          O profissional atuará no desenvolvimento e manutenção de aplicações web modernas 
          para atender demandas internas e de clientes externos.
        </p>

        <p className={styles.paragrafo}><strong>Requisitos técnicos:</strong></p>
        <ul>
          <li>JavaScript (avançado)</li>
          <li>JQuery</li>
          <li>AJAX</li>
          <li>HTML5, CSS3</li>
          <li>PHP</li>
          <li>Banco de dados PostgreSQL (PGSQL)</li>
          <li>Integrações com APIs REST e manipulação de dados em JSON</li>
        </ul>

        <p className={styles.paragrafo}><strong>Diferenciais:</strong></p>
        <ul>
          <li>Experiência com frameworks modernos (ex: React, Vue, Laravel)</li>
          <li>Noções de UX/UI</li>
          <li>Versionamento com Git</li>
          <li>Trabalho com metodologias ágeis (Scrum/Kanban)</li>
        </ul>

        <p className={styles.paragrafo}><strong>Benefícios:</strong></p>
        <ul>
          <li>Salário compatível com o mercado</li>
          <li>Vale-alimentação</li>
          <li>Plano de saúde</li>
          <li>Horário flexível</li>
          <li>Ambiente descontraído e colaborativo</li>
        </ul>

        <p className={styles.paragrafo}><strong>Tipo de contrato:</strong> CLT ou PJ</p>
        <p className={styles.paragrafo}><strong>Horário:</strong> Segunda a sexta-feira – 08h às 17h</p>
      </div>
    </div>
  );
}

export default Event;
