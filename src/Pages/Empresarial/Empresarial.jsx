import React, { useEffect, useState } from 'react';
import empresasData from './empresas.json';

function Empresarial() {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    // Carregar os dados das empresas do arquivo JSON
    setEmpresas(empresasData);
  }, []);

  return (
    <div className="bg-blue-300 min-h-screen">

      
      <main className="pt-24 px-10 pb-4">
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

const Card = ({ bgColor, borderColor, textColor, text, strongText, description, points }) => (
  <div className={`bg-no-repeat ${bgColor} ${borderColor} border rounded-xl p-6 w-full`}>
    <p className={`text-3xl ${textColor}`}>{text} <br /><strong>{strongText}</strong></p>
    <p className="text-gray-700 mt-4">{description}</p>
    <span className="bg-blue-500 text-xl text-white inline-block rounded-full mt-4 px-8 py-2"><strong>{points}</strong></span>
  </div>
);

export default Empresarial;
