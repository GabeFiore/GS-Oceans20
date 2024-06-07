import React from "react";
import "../../styles/pages/_dashboard.scss";
import Mapa from "../../Components/Mapa/Mapa";
import WeatherInfo from "../../Components/whaterinfo/whather";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Dashboard de Saúde Oceânica</h1>
        <p>
          Através da coleta contínua de dados e do monitoramento constante dos
          principais indicadores de saúde dos oceanos, podemos identificar áreas
          críticas e tomar ações efetivas para preservar e melhorar a saúde dos
          nossos oceanos.
        </p>
      </div>
      <div className="graficos">
        <img
          src="../../src/assets/tempMar.png"
          alt="Temperatura média anual da superfície do mar"
        />
        <img
          src="../../src/assets/biodiversidade.png"
          alt="Perda de biodiversidade em recifes de coral"
        />
        <img
          src="../../src/assets/brasilMundo.png"
          alt="Quantidade de plásticos do Brasil em relação ao mundo"
        />
      </div>
      <div className="grafico-mapa">
        <img
          className="linhas"
          src="../../src/assets/nivel-mar-2.0.png"
          alt="Gráfico dos cenários de elevação do nível do mar"
        />
        <img
          src="../../src/assets/mapatemp.png"
          alt="Mapa de calor da temparatura da superfície do oceano"
        />
      </div>
      <div className="maps">
        <Mapa title="Mapa Interativo: Poluição Global" />
      </div>
      <div>
        <WeatherInfo/>
      </div>
    </div>
  );
}

export default Dashboard;
