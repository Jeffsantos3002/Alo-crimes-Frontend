import TabelaGraficos from '../components/TabelaGraficos';
import municipios from "../../data/municipios"
import ocorrencias from "../../data/ocorrencias"
import vitimas from "../../data/vitimas"


function Graficos(){
  
  // Verifica se os dados de municípios está vazio, se não estiver suas colunas são passadas para ColMunicipios
  let muni = null;
  if (municipios.length > 0) {
    muni = municipios[0];
  }
  const colMunicipios = muni ? Object.keys(muni) : null;
  console.log(colMunicipios);

   // Verifica se os dados de ocorrencias está vazio, se não estiver suas colunas são passadas para colOcorrencias
   let ocor = null;
   if (ocorrencias.length > 0) {
     ocor = ocorrencias[0];
   }
   const colOcorrencias = ocor ? Object.keys(ocor) : null;
   console.log('ocorrencias: ' + colOcorrencias);

    // Verifica se os dados de vítimas está vazio, se não estiver suas colunas são passadas para ColVítimas
  let vit = null;
  if (vitimas.length > 0) {
    vit = vitimas[0];
  }
  const colVitimas = muni ? Object.keys(vit) : null;
  console.log('vitimas: ' + colVitimas);

  return(
    <div className="py-14 space-y-14 flex flex-col items-center justify-center px-6 bg-bgPage">
      <h2 className="font-bold text-2xl text-blue">GRÁFICOS</h2>
      <div className="grid grid-cols-5 gap-6">
      </div>
      <TabelaGraficos
        colMunicipios={colMunicipios}
        colOcorrencias={colOcorrencias}
        colVitimas={colVitimas}
        ocorrencias={ocorrencias}
        vitimas={vitimas}
        municipios={municipios}
        />
    </div>    
  )
}

export default Graficos;
