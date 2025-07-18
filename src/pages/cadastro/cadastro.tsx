import styles from "./cadastro.module.css"

function Cadastro (){
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
                            <input type="text" placeholder="  Nome Completo" className={styles.name} /><br />
                            <span>Esse campo é obrigatório!</span>
                        </div>
                       
                       <div>
                            <input type="email" placeholder="  E-mail"className={styles.email}/><br />
                            <span>Esse campo é obrigatório!</span>
                       </div>
                    </div>

                    <div className={styles.inputFile}>
                        
                        <select className={styles.select}>
                            <option>Gestao de Contrato</option>
                            <option value="">TESTE</option>
                        </select>

                        <div>
                            <input type="file" className={styles.document}/>
                        </div>

                        <div  className={styles.description}>
                            <textarea placeholder="Descreva porque se interessou pela oportunidade" className={styles.textarea} /><br />
                            <span>Este campo é obrigatório</span>
                        </div>

                        <div className={styles.submitRow}>
                            <button type="submit" className={styles.submitCard}>
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