import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/_geral.scss";

function Geral() {
  return (
    <>
      <div className="geral">
        <div className="container-intro">
          <div className="imagem">
            <img src="../src/assets/ecossistema.jpg" alt="Oceano" />
          </div>
          <div className="intro">
            <h2>Oceano para Todos</h2>
            <p>
              Os oceanos desempenham um papel crucial na manutenção da vida na
              Terra. Eles cobrem mais de 70% da superfície do planeta e são
              fundamentais para regular o clima, produzir oxigênio e sustentar
              uma grande diversidade de vida marinha. Além disso, os oceanos são
              uma fonte vital de alimentos e recursos para bilhões de pessoas,
              se tornando essencial para o comércio global e para economia
              mundial.
            </p>
          </div>
        </div>
        <div className="impactos">
          <h2>Como pequenas ações diárias impactam os oceanos?</h2>
          <p>
            As ações cotidianas de cada ser humano têm um impacto significativo
            sobre os oceanos, muitas vezes de maneiras que nem sempre são
            evidentes. Desde a escolha de produtos que consumimos até a forma
            como descartamos nossos resíduos, nossas atividades diárias
            contribuem para a saúde ou a degradação dos ecossistemas marinhos.
          </p>
          <ul>
            <li>
              <strong>Utilização de produtos plásticos:</strong>
              <br />➙ Produtos plásticos descartáveis, como garrafas, sacolas e
              embalagens, frequentemente acabam nos oceanos. Esses plásticos
              podem levar centenas de anos para se decompor, prejudicando a vida
              marinha que os confunde com alimento e causando a morte de
              diversas espécies.
            </li>
            <li>
              <strong>
                Descarte e manejo inadequado de resíduos e esgoto doméstico:
              </strong>
              <br />➙ O descarte inadequado de resíduos e o manejo inadequado de
              esgoto doméstico têm efeitos devastadores. Produtos químicos,
              medicamentos e outros poluentes presentes nos esgotos chegam aos
              oceanos, contaminando a água e os organismos que ali vivem.
            </li>
            <li>
              <strong>
                Escolhas alimentares; A demanda por frutos do mar:
              </strong>
              <br />➙ A demanda por frutos do mar pode levar à sobrepesca, que
              esgota populações de peixes e destrói habitats marinhos. Práticas
              de pesca insustentáveis, como o uso de redes de arrasto, danificam
              gravemente os ecossistemas marinhos, destruindo recifes de corais
              e capturando espécies não desejadas.
            </li>
            <li>
              <strong>Consumismo e Moda Rápida:</strong>
              <br />➙ A indústria da moda é uma grande fonte de poluição da
              água, tanto pela fabricação de roupas quanto pelo descarte de
              tecidos. Lavar roupas feitas de materiais sintéticos libera
              microfibras plásticas nos cursos de água, que acabam nos oceanos.
            </li>
          </ul>
        </div>
        <article>
          <div className="video">
            <span>
              Assista ao vídeo e compreenda as consequências dos plásticos nos
              ecossistemas marinhos!
            </span>
            <iframe
              src="https://www.youtube.com/embed/84cIXzrfwe8?si=i139A1FVjgwdfKlv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className="infograficos">
              <h2>Infográficos Educativos</h2>
              <p>
                Visualize dados importantes, previsões e dicas de conservação
                através de infográficos e mapas:
              </p>
              <Link to="/dashboard">Clique para ver Dashboard!</Link>
            </div>
          </div>
          <div className="guia-acoes">
            <h2>Guia de Ações:</h2>
            <p>
              Aqui estão algumas ações simples que você pode adotar diariamente
              para ajudar a proteger a saúde dos oceanos:
            </p>
            <ul>
              <li>
                <strong>Reduzir o Uso de Plástico:</strong>
                <br />➙ Utilize sacolas reutilizáveis, garrafas de água, e
                recipientes de armazenamento. <br />➙ Evite produtos plásticos
                descartáveis, como canudos, talheres e pratos.
              </li>
              <li>
                <strong>Reciclar Corretamente:</strong>
                <br />➙ Separe os resíduos recicláveis e orgânicos.
              </li>
              <li>
                <strong>Escolher Produtos Sustentáveis:</strong>
                <br />➙ Compre produtos com certificações ambientais, como MSC
                para frutos do mar.
                <br />➙ Opte por cosméticos e produtos de higiene sem
                microplásticos.
              </li>
              <li>
                <strong>Reduzir o Consumo de Energia:</strong>
                <br />➙ Utilize lâmpadas de LED e eletrodomésticos eficientes.
                <br />➙ Desligue aparelhos eletrônicos quando não estiverem em
                uso.
              </li>
              <li>
                <strong>Apoiar a Pesca Sustentável:</strong>
                <br />➙ Escolha frutos do mar de fontes sustentáveis.
                <br />➙ Informe-se sobre práticas de pesca que preservam os
                ecossistemas marinhos.
              </li>
              <li>
                <strong>Utilizar Produtos de Limpeza Ecológicos:</strong>
                <br />➙ Escolha produtos biodegradáveis e sem químicos nocivos.
              </li>
              <li>
                <strong>Participar de Limpezas de Praias:</strong>
                <br />➙ Se possível, junte-se a eventos de limpeza de praias na
                sua região.
                <br />➙ Caso contrário, certifique-se de recolher seu próprio
                lixo ao visitar a praia.
              </li>
              <li>
                <strong>Apoiar Organizações e Campanhas Ambientais:</strong>
                <br />➙ Doe para organizações que trabalham na conservação dos
                oceanos.
                <br />➙ Veja abaixo alguns links de organizações confiáveis onde
                você pode doar:
                <ul>
                  <li>
                    <a href="https://www.worldwildlife.org/" target="_blank">
                      • World Wildlife Fund
                    </a>
                  </li>
                  <li>
                    <a href="https://theoceancleanup.com/" target="_blank">
                      • The Ocean Cleanup
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.plasticpollutioncoalition.org/"
                      target="_blank"
                    >
                      • Plastic Pollution Coalition
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
}

export default Geral;
