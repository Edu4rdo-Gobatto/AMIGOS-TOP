import { useState } from "react";
import styles from "./cadastro.module.css";

function Cadastro (){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [description, setDescription] = useState("");


    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("document", file);
    formData.append("description", description);

    console.log("Dados enviados:");
    for (const [key, value] of formData.entries()) 
        {console.log(`${key}:`, value);};

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("===== Dados do formulário =====");
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Descrição:", description);
        console.log("Arquivo:", file ? file.name : "Nenhum arquivo selecionado");
        console.log("================================");
    };


    return(

        <div className={styles.home}>
            
            <section className={styles.topic}>
                <div>
                    <h1 className={styles.title}>CADASTRE-SE</h1>
                    <p className={styles.subtitle}>Cadastre o seu Currículo e participe de nosso processo seletivo!</p>
                </div>
            </section>

            <section className={styles.container}>

                <div className={styles.form}>
                    <div className={styles.inputText}>
                        <div>
                            <input type="text" placeholder="Nome Completo" 
                                className={styles.name} value={name} onChange={(e) => setName(e.target.value)}
                            /><br />
                            <span className={styles.obrigatorio}>Esse campo é obrigatório!</span>
                        </div>
                       
                       <div>
                            <input type="email" placeholder="E-mail"
                                className={styles.email} value={email} onChange={(e) => setEmail(e.target.value)}
                            /><br />
                            <span className={styles.obrigatorio}>Esse campo é obrigatório!</span>
                       </div>
                    </div>

                    <div className={styles.inputFile}>
                        
                        <select className={styles.select}>
                            <option>Gestao de Contrato</option>
                            <option value="">TESTE</option>
                        </select>

                        <div>
                            <input type="file" className={styles.document}
                             onChange={(e) => {const file = e.target.files?.[0];  if (file) {setFile(file);}}}
                            />
                        </div>

                        <div  className={styles.description}>
                            <textarea placeholder="Descreva por que se interessou pela oportunidade"
                                className={styles.textarea} value={description} onChange={(e) => setDescription(e.target.value)}
                             /><br />
                            <span className={styles.obrigatorio}>Este campo é obrigatório</span>
                        </div>

                        <div className={styles.submitRow}>
                            <button type="submit" className={styles.submitCard} onClick={handleSubmit}>
                                CADASTRAR
                            </button>
                        </div>
           
                    </div>

                </div>

                <div className={styles.image}>
                    <img src="/imagens/Amigos-Top_13.png" alt="Pessoa sorrindo" className={styles.photo}/>
                </div>
            </section>

        </div>

    );
}

export default Cadastro;