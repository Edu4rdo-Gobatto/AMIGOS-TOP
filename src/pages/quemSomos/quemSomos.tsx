import styles from "./somos.module.css";

function QuemSomos (){
    return(
        <div className={styles.home}>
            <div><img src="./imagens/Amigos-Top_10.png" alt="Curioso" className={styles.image}/></div>

            <div className={styles.text}>
                <h1>QUEM <br />SOMOS</h1><br />
                <h4>Movidos por tecnologia: Sempre com um olhar para o futuro!<br /><br />
                    Em meados do ano 2000, foi criado pelo empresário Adenilson Rocha o TopSinop, pimeiro site de entretenimento
                    do norte de Mato Grosso. A visão empreendedora de Adenilson mostrava um caminho de sucesso e logo em 2002,
                    Adenilson criou a MultiWare Tecnologia, com sede em Sinop/MT, a empresa inicialmente era voltada em assistência
                    técnica de computadores com atendimento domiciliar. O empreendedor enxergou uma lacuna a ser no mercado,
                    então surgiu a ideia de criar um sistema de gestão para empresas de telecomunicação, sendo atualmente 
                    umas das principais marcas deste segmento nacional, o TopSapp.
                </h4>

            
            
            </div>
        </div>
    );
}

export default QuemSomos;