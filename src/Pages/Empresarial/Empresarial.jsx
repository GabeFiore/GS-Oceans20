import React, { useEffect, useState } from "react";
import empresasData from "./empresas.json";

function Empresarial() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    // Carregar os dados das empresas do arquivo JSON
    setEmpresas(empresasData);
  }, []);

  return (
    <div className="dashboard min-h-screen">
      <main className="pt-24 px-10 pb-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800">
            Leis de Sustentabilidade no Brasil para Empresas
          </h2>
        </div>

        <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
          <div className="flex flex-col md:flex-row">
            <div className="mr-0 md:mr-8 mb-6 md:mb-0">
           </div>

            <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
              <LeiCard
                nome="Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010)"
                descricao="Estabelece a responsabilidade compartilhada pelo ciclo de vida dos produtos, incentivando a redução, reutilização e reciclagem de resíduos sólidos."
              />
              <LeiCard
                nome="Sustentabilidade Empresarial e o Código Florestal (Lei nº 12.651/2012)"
                descricao="Regula a proteção da vegetação nativa e estabelece regras para a reserva florestal em propriedades rurais."
              />
              <LeiCard
                nome="Lei de Incentivo à Inovação (Lei nº 13.243/2016)"
                descricao="Prevê incentivos fiscais para empresas que investem em pesquisa, desenvolvimento e inovação tecnológica com foco em soluções sustentáveis."
              />
              <LeiCard
                nome="Lei da Biodiversidade (Lei nº 13.123/2015)"
                descricao="Regula o acesso aos recursos genéticos e a repartição de benefícios, incentivando as empresas a respeitar a biodiversidade brasileira em suas atividades."
              />
              <LeiCard
                nome="Lei de Pagamento por Serviços Ambientais (Lei nº 14.119/2021)"
                descricao="Estabelece diretrizes para a remuneração de serviços ambientais prestados por agricultores, comunidades tradicionais e proprietários de terras que contribuem para a conservação e restauração de ecossistemas."
              />
              <LeiCard
                nome="Acordo de Paris"
                descricao="Compromisso do Brasil em reduzir as emissões de gases de efeito estufa, impactando as empresas que devem adotar medidas de redução de carbono e investir em fontes de energia limpa."
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800">
            Empresas Sustentáveis
          </h2>
        </div>

        <div className="flex flex-wrap -mx-2">
          {empresas.map((empresa, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <Card
                bgColor={empresa.bgColor}
                borderColor={empresa.borderColor}
                textColor={empresa.textColor}
                text={empresa.text}
                strongText={empresa.strongText}
                description={empresa.description}
                points={empresa.points}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const Card = ({
  bgColor,
  borderColor,
  textColor,
  text,
  strongText,
  description,
  points,
}) => (
  <div
    className={`bg-no-repeat ${bgColor} ${borderColor} border rounded-xl p-6 w-full`}
  >
    <p className={`text-3xl ${textColor}`}>
      {text} <br />
      <strong>{strongText}</strong>
    </p>
    <p className="text-gray-300 mt-4">{description}</p>
    <span className="bg-blue-500 text-xl text-white inline-block rounded-full mt-4 px-8 py-2">
      <strong>{points}</strong>
    </span>
  </div>
);

const LeiCard = ({ nome, descricao }) => (
  <div className="w-full sm:w-1/2 mb-4 px-2">
    <div className="h-full py-4 px-6 border border-t-white-500 border-t-0 border-l-0 rounded-br-xl">
      <h3 className="text-2xl font-bold text-md mb-6">{nome}</h3>
      <p className="text-sm">{descricao}</p>
    </div>
  </div>
);

export default Empresarial;
