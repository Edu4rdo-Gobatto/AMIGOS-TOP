import styles from "./midle.module.css";

function Midle() {
  return (
    <div className={styles.topMidle}>

      <h1>Oportunidades</h1>

      <div className={styles.boxOne}>

        <div>
          <span className={styles.cargo}>
            <span className={styles.number}>1</span>Desenvolvedor WEB Sênior
          </span>
          <div className={styles.cardOne}>
            <br />
            <span className={styles.local}>Sinop-MT</span><br />
            <h5 className={styles.descricao}>
              Experiência e conhecimentos JavaScript, JQUERY, AJAX, HTML5, CSS3, PHP,
              Banco de dados PGSQL e REST/JSON, para desenvolvimento de aplicações web...
            </h5>
            <span>
              <button className={styles.vermais}>Ver mais...</button>
            </span>
          </div>
        </div>

        <div>
          <span className={styles.cargo}>
            <span className={styles.number}>1</span>Desenvolvedor WEB Sênior
          </span>
          <div className={styles.cardTwo}>
            <br />
            <span className={styles.local}>Sinop-MT</span><br />
            <h5 className={styles.descricao}>
              Experiência e conhecimentos JavaScript, JQUERY, AJAX, HTML5, CSS3, PHP,
              Banco de dados PGSQL e REST/JSON, para desenvolvimento de aplicações web...
            </h5>
            <span>
              <button className={styles.vermais}>Ver mais...</button>
            </span>
          </div>
        </div>

        <div>
          <span className={styles.cargo}>
            <span className={styles.number}>1</span>Desenvolvedor WEB Sênior
          </span>
          <div className={styles.cardThree}>
            <br />
            <span className={styles.local}>Sinop-MT</span><br />
            <h5 className={styles.descricao}>
              Experiência e conhecimentos JavaScript, JQUERY, AJAX, HTML5, CSS3, PHP,
              Banco de dados PGSQL e REST/JSON, para desenvolvimento de aplicações web...
            </h5>
            <span>
              <button className={styles.vermais}>Ver mais...</button>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Midle;
