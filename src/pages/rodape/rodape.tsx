
import style from "./rodape.module.css";

function Rodape() {

  return (

    <div className={style.footer}>
        <section className={style.main}>

            <div className={style.title}>
                    <div><span className={style.titlefocus}>HISTÓRIAS</span> QUE NOS MOTIVAM <br />
                    A FAZER <span className={style.titlefocus}>CADA VEZ MAIS</span></div>
            </div>

            <div className={style.memorial}>

                    <div className={style.photo}><img src="/imagens/Amigos-Top_18.png" alt="perfil_photo" className={style.photoOne} /></div>

                    <blockquote className={style.pronunciation}>
                        "Hoje eu consigo dormir mas antes eu acordava uma, duas horas da manhã,<br/>
                        e eu não conseguia dormir porque eu ficava pensando nos problemas."

                        <p className={style.name}>Nome funcionário</p>
                    </blockquote>

            </div>

        </section>

        <section className={style.socialTeam}>

          <div className={style.social}>
            <div className={style.socialIcons}><img src="./imagens/Amigos-Top_22.png" alt="Telefone"/></div>

            <div className={style.socialIcons}><img src="./imagens/Amigos-Top_24.png" alt="Telefone"/></div>

            <div className={style.socialIcons}><img src="./imagens/Amigos-Top_27.png" alt="Telefone"/></div>

            <div className={style.socialIcons}><img src="./imagens/Amigos-Top_30.png" alt="Telefone"/></div>

            <div className={style.socialIcons}><img src="./imagens/Amigos-Top_32.png" alt="Telefone"/></div>
          </div>

          <div className={style.copyright}>
            <h1>COPYRIGHT 2025 - TODOS OS DIREITOS RESERVADOS À AMIGOS TOP</h1>
          </div>

        </section>

    </div>

  );
}

export default Rodape;
