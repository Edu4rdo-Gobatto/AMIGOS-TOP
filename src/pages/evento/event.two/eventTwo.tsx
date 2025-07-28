import styles from "./eventTwo.module.css";

function EventTwo({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <h2>Desenvolvedor(a) Mobile</h2>
        <p><strong>Local:</strong> <span className={styles.p}>Sorriso - MT</span></p>

        <p><strong>Descrição da vaga:</strong></p>
        <p className={styles.p}>
          Procuramos um(a) Desenvolvedor(a) Mobile motivado(a) para se juntar ao nosso time
          e colaborar no desenvolvimento de aplicativos robustos e intuitivos para Android e iOS.
          O profissional atuará com foco em inovação e performance, trabalhando junto a uma equipe multidisciplinar.
        </p>

        <p><strong>Requisitos técnicos:</strong></p>
        <ul>
          <li>Experiência com React Native ou Flutter</li>
          <li>Conhecimentos em JavaScript ou Dart</li>
          <li>Integração com APIs REST/JSON</li>
          <li>Publicação de apps nas lojas (App Store / Play Store)</li>
          <li>Git e controle de versão</li>
        </ul>

        <p><strong>Diferenciais:</strong></p>
        <ul>
          <li>Noções de UX/UI voltadas para mobile</li>
          <li>Experiência com Firebase</li>
          <li>Conhecimento em testes automatizados</li>
          <li>Boas práticas de segurança mobile</li>
        </ul>

        <p><strong>Benefícios:</strong></p>
        <ul>
          <li>Salário competitivo</li>
          <li>Vale-alimentação e transporte</li>
          <li>Plano de saúde</li>
          <li>Horário flexível e trabalho híbrido</li>
        </ul>

        <p><strong>Tipo de contrato:</strong> CLT ou PJ</p>
        <p><strong>Horário:</strong> Segunda a sexta-feira – 08h às 17h</p>
      </div>
    </div>
  );
}

export default EventTwo;
