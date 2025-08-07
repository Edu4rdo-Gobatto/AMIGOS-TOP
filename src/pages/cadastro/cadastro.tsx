import { useState } from "react";
import styles from "./cadastro.module.css";

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

const handleOptionSelect = (value: string) => {
  setSelectedOption(value);
  setDropdownOpen(false);
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("document", file || "");
    formData.append("description", description);
    formData.append("option", selectedOption);

    console.log("===== Dados do formulário =====");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    console.log("Arquivo:", file ? file.name : "Nenhum arquivo selecionado");
    console.log("================================");
  };

  return (
    <div className={styles.home}>
      <section className={styles.topic}>
        <div>
          <h1 className={styles.title}>CADASTRE-SE</h1>
          <p className={styles.subtitle}>
            Cadastre o seu Currículo e participe de nosso processo seletivo!
          </p>
        </div>
      </section>

      <section className={styles.container}>

        <div className={styles.divForm}>

          <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputText}>
            <div>
              <input
                type="text"
                placeholder="Nome Completo"
                required
                className={styles.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <div className={styles.obrigatorio}>Este campo é obrigatório</div>
            </div>

            <div>
              <input
                type="email"
                placeholder="E-Mail"
                required
                className={styles.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <div className={styles.obrigatorio}>Este campo é obrigatório</div>
            </div>
          </div>

          <div className={styles.inputFile}>
    
              <div
                className={styles.select}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {selectedOption ? selectedOption : "Gestão de Contrato"}
                <span className={styles.arrow}>{dropdownOpen ? "▲" : "▼"}</span>
                  <ul
                    className={`${styles.dropdownList} ${dropdownOpen ? styles.open : ""}`}
                  >
                    <li onClick={() => handleOptionSelect("Contrato - CLT")}>Consolidação das leis de Trabalho - CLT</li>
                    <li onClick={() => handleOptionSelect("Contrato - PJ")}>Pessoa jurídica - PJ</li>
                  </ul>
              </div>

              <div className={styles.divDoc}> 
                  <label htmlFor="Arquivo" className={styles.document}>
                    {file ? file.name : "Selecionar o seu currículo"}
                  </label>
                  <label htmlFor="Arquivo" className={styles.fileButton}>Arquivo</label>
                  <input
                    type="file"
                    id="Arquivo"
                    name="Arquivo"
                    className={styles.fileDoc}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setFile(file);
                    }}
                  />
              </div>

            <div className={styles.description}>
              <textarea
                placeholder="Descreva por que se interessou pela oportunidade"
                required
                className={styles.textarea}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />
              <span className={styles.obrigatorio}>Este campo é obrigatório</span>
            </div>

            <div className={styles.submitRow}>
              <button type="submit" className={styles.submitCard}>
                CADASTRAR
              </button>
            </div>
          </div>
        </form>

        </div>

        <div className={styles.image}>
          <img
            src="/imagens/Amigos-Top_13.png"
            alt="Pessoa sorrindo"
            className={styles.photo}
          />
        </div>
      </section>
    </div>
  );
}

export default Cadastro;
