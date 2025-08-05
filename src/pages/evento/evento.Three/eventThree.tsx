import styles from "./eventThree.module.css";

function EventThree({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <h2>Desenvolvedor(a) Java Pleno</h2>
        <p className={styles.paragrafo}><strong>Local:</strong> Lucas do Rio Verde - MT</p>

        <p className={styles.paragrafo}><strong>Descrição da vaga:</strong></p>
        <p className={styles.paragrafo}>
          Estamos contratando um(a) Desenvolvedor(a) Java Pleno com sólidos conhecimentos em desenvolvimento backend,
          para atuar em projetos robustos, com foco em performance, escalabilidade e boas práticas.
        </p>

        <p className={styles.paragrafo}><strong>Requisitos técnicos:</strong></p>
        <ul>
          <li>Experiência com Java (8 ou superior)</li>
          <li>Spring Framework (Boot, Data, Security)</li>
          <li>APIs RESTful</li>
          <li>Banco de dados relacionais (PostgreSQL ou MySQL)</li>
          <li>Versionamento com Git</li>
          <li>Boas práticas de orientação a objetos</li>
        </ul>

        <p className={styles.paragrafo}><strong>Diferenciais:</strong></p>
        <ul>
          <li>Conhecimentos em microsserviços</li>
          <li>Mensageria com RabbitMQ ou Kafka</li>
          <li>Experiência com testes unitários (JUnit, Mockito)</li>
          <li>Docker e CI/CD</li>
        </ul>

        <p className={styles.paragrafo}><strong>Benefícios:</strong></p>
        <ul>
          <li>Salário atrativo</li>
          <li>Plano de saúde</li>
          <li>Vale-refeição e transporte</li>
          <li>Ambiente de aprendizado contínuo</li>
        </ul>

        <p className={styles.paragrafo}><strong>Tipo de contrato:</strong> CLT</p>
        <p className={styles.paragrafo}><strong>Horário:</strong> Segunda a sexta-feira – 08h às 17h</p>
      </div>
    </div>
  );
}

export default EventThree;
