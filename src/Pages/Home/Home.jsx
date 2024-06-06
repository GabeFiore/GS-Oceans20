import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/_home.scss";
import Carrosel from "../../Components/Carrosel/Carrosel";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="intro">
            <h2 className="title">Bem-vindo à plataforma OceanGuard!</h2>
            <p>
              Nossa missão é promover a conservação dos oceanos através da
              conscientização, educação e ações sustentáveis. Junte-se a nós na
              luta para proteger nossos preciosos recursos marinhos e garantir
              um futuro saudável para as próximas gerações e para o planeta
              Terra.
            </p>
          </div>
          <div className="carrosel">
            <Carrosel />
          </div>
        </div>
        <article className="info">
          <h2>Entenda um pouco mais sobre a situação dos nossos oceanos:</h2>
          <div className="overview">
            <img
              src="../src/assets/plastico-oceano.jpg"
              alt="Poluição nos oceanos"
            />
            <div className="texto">
              <div className="paragrafos">
                <p>
                  Os oceanos enfrentam diversos desafios críticos, como a
                  destruição de habitats, poluição e mudanças climáticas. A
                  conservação e sustentabilidade dos oceanos são essenciais para
                  manter a saúde dos ecossistemas marinhos e garantir a
                  sobrevivência das espécies que dependem deles, incluindo os
                  seres humanos.
                </p>
                <p>
                  A poluição marinha, proveniente de resíduos plásticos,
                  produtos químicos e derramamentos de óleo, afeta a qualidade
                  da água e ameaça a vida marinha. As mudanças climáticas estão
                  alterando as temperaturas dos oceanos, afetando os padrões de
                  migração e reprodução das espécies marinhas.
                </p>
                <p>
                  Para descobrir como você pode fazer a diferença e ajudar na
                  conservação dos oceanos:{" "}
                  <Link to="geral#imagem">Clique Aqui!</Link>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Home;
