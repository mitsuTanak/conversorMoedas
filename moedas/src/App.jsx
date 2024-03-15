import { useEffect, useState } from 'react';
import axios from "axios";
import CurrancyConverter from './components/CurrencyConverter.css';



function App() {

  // Estado das moesdas
  const [rates, setRates] = useState(null);

  // Estado para armazernar moeda de origem
  const [FromCurrancy, setFromCurrancy] = useState("USD")

  // Estado para armazenar moeda de destino
  const [ToCurrancy, setToCurrancy] = useState("EUR")

  // Estado para armazenar a ser convertido
  const [amount, setAmount] = useState("1")

  // Estado para armazenar a ser convertido
  const [convertedAmount, setConvertedAmount] = useState(null)

  useEffect(()=>{
    axio
     .get("https://v6.exchangerate-api.com/v6/e7533784c48e675c0452c2da/latest/USD")
     .them((response) =>{
      setRates(response.data.conversion_rates);
     })
     .catch((error)=>{
      console.log("Deu ruim ao obter dados da API",error);
     });
  }, []);

  // Calcular o valor convertido e corrigido Delays (Atraso)
  useEffect(() =>{
    // Verifica se o objeto rates não é nulo ou indefinido
    if(rates) {
      // Obtem a taxa da moeda origem se não existir atribuir 0
      const rateFrom = rates[FromCurrancy] || 0;

      // Obtem a taxa da moeda destino se não existir atribuir 0
      const rateTo = rates[ToCurrancy] || 0;

      setConvertedAmount(((amount / rateFrom * rateTo).toFixed(2)))
    }
    // Este efeito será executado sempre que qualquer um dos itens
    // [amount, rates, FromCurrancy, ToCurrancy] for atualizado
    // Isso é conhecido como (lista de dependências)
  }, [amount, rates, FromCurrancy, ToCurrancy]);  

  if (rates) {
    return <div>Carregando</div>
  }

  return (
    <>
      <CurrancyConverter/>
    </>
  )
}

export default App
