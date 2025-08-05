
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

                    <div className={style.pronunciation}>
                        "Hoje eu consigo dormir mas antes eu acordava uma, duas horas da manhã,<br/>
                        e eu não conseguia dormir porque eu ficava pensando nos problemas."

                        <p className={style.name}>Nome funcionário</p>
                    </div>

            </div>

        </section>

        <section className={`${style.socialTeam} ${style.afterCircle}`}>

          <div className={style.social}>
            <div className={style.socialIcons}><img src="./imagens/Amigos-Top_22.png" alt="Telefone" className={style.socialImage}/><p className={style.contact}> <br/>(66) 3211-0010</p></div>

            <div className={style.socialIcons}><img src="./imagens/Amigos-Top_24.png" alt="E-mail" className={style.socialImage}/><p className={style.contactTwo}> <br/>COMERCIAL@TOPSAPP.COM.BR</p></div>

            <div className={style.socialIcons}><a href="https://www.facebook.com/adbrax" target="blank" rel="noopener noreferrer"><img src="./imagens/Amigos-Top_27.png" alt="Facebook" className={style.socialImage}/></a><p> <br/>Facebook</p></div>

            <div className={style.socialIcons}><a href="https://www.instagram.com/accounts/login/?next=%2Fgrupoadbrax%2F&source=omni_redirect" target="blank" rel="noopener noreferrer"><img src="./imagens/Amigos-Top_30.png" alt="Instagram" className={style.socialImage}/><p> <br/>Instagram</p></a></div>

            <div className={style.socialIcons}><a href="https://x.com/topsapp?s=11" target="blank" rel="noopener noreferrer"><img src="./imagens/Amigos-Top_32.png" alt="Twitter / X" className={style.socialImage}/><p> <br/>Twitter</p></a></div>
          </div>

          <div className={style.copyright}>
            <span>COPYRIGHT 2025 - TODOS OS DIREITOS RESERVADOS A AMIGOS TOP</span>
          </div>

        </section>

    </div>

  );
}

export default Rodape;
