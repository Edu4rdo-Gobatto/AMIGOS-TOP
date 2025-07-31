import styles from "./somos.module.css";

function QuemSomos (){
    return(

        <div className={styles.home}>
            <div><img src="./imagens/Amigos-Top_10.png" alt="Curioso" className={styles.image}/></div>

            <div className={styles.text}>

                <div className={styles.title}><span>QUEM <br />SOMOS</span><br /></div>

                <div className={styles.mainText}>
                    <span>
                        Movidos por tecnologia: Sempre com um olhar para o futuro!<br /><br />
                        Em meados do ano 2000, foi criado pelo empresário Adenilson Rocha o TopSinop, pimeiro site de entretenimento 
                        do norte de Mato Grosso. A visão empreendedora de Adenilson mostrava um caminho de sucesso e logo em 2002,
                        Adenilson criou a MultiWare Tecnologia, com sede em Sinop/MT, a empresa inicialmente era voltada em assistência
                        técnica de computadores com atendimento domiciliar. O empreendedor enxergou uma lacuna a ser no mercado,
                        então surgiu a ideia de criar um sistema de gestão para empresas de telecomunicação, sendo atualmente 
                        umas das principais marcas deste segmento nacional, o TopSapp.
                    </span> <br /><br/>

                    <span>
                        A partir do TopSapp a Multiware Tecnologia cresceu rapidamente e surgem outras marcas como TwSpeed Telecom, <br/>A Folha Notícias, 
                        TopDNS e TopCabo. Em 2019 um novo capítulo na história passa a ser escrito, surge o Grupo AdBrax.
                    </span><br/><br/>

                    <span>
                        Ao longo de sua existência, Grupo Ad Brax ampliou seu rol de serviços para a área de Tecnologia da Informação. Assim, nós, do
                        Grupo Ad Brax, desenvolvemos o nosso jeito de ser movidos por tecnologia, investindo em empresas que vão ao encontro das
                        necessidades de empresas e da sociedade.<br/>
                    </span> <br/>

                    <span>O grupo Ad Brax é um sonho que se tornou realidade.</span>
                </div>
                
            </div>
        </div>
    );
}

export default QuemSomos;