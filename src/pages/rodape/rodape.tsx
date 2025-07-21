
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
            <div className={style.socialIcons}><a href="https://www.google.com/maps/place/Amigos+Top/@-11.8638554,-55.5189406,17z/data=!3m1!4b1!4m6!3m5!1s0x93a77f8d7fde4733:0xe4567264703e25a7!8m2!3d-11.8638554!4d-55.5163657!16s%2Fg%2F11h_cxtk8q?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" 
            target="blank" rel="noopener noreferrer"><img src="./imagens/Amigos-Top_22.png" alt="Telefone" className={style.socialImage}/></a></div>

            <div className={style.socialIcons}><a href="https://www.google.com/maps/place/Amigos+Top/@-11.8638554,-55.5189406,17z/data=!3m1!4b1!4m6!3m5!1s0x93a77f8d7fde4733:0xe4567264703e25a7!8m2!3d-11.8638554!4d-55.5163657!16s%2Fg%2F11h_cxtk8q?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" 
            target="blank" rel="noopener noreferrer"><img src="./imagens/Amigos-Top_24.png" alt="E-mail" className={style.socialImage}/></a></div>

            <div className={style.socialIcons}><a href="https://www.facebook.com/adbrax" target="blank" rel="noopener noreferrer"><img src="./imagens/Amigos-Top_27.png" alt="Facebook" className={style.socialImage}/></a></div>

            <div className={style.socialIcons}><a href="https://www.instagram.com/accounts/login/?next=%2Fgrupoadbrax%2F&source=omni_redirect" target="blank" rel="noopener noreferrer"><img src="./imagens/Amigos-Top_30.png" alt="Instagram" className={style.socialImage}/></a></div>

            <div className={style.socialIcons}><a href="https://x.com/topsapp?s=11" target="blank" rel="noopener noreferrer"><img src="./imagens/Amigos-Top_32.png" alt="Twitter / X" className={style.socialImage}/></a></div>
          </div>

          <div className={style.copyright}>
            <h1>COPYRIGHT 2025 - TODOS OS DIREITOS RESERVADOS À AMIGOS TOP</h1>
          </div>

        </section>

    </div>

  );
}

export default Rodape;
