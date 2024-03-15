import { useEffect, useState } from 'react';
import axios from "axios";
import './CurrencyConverter.css'

const CurrancyConverter = () => {

    // Estado das moesdas
  const [rates, setRates] = useState(null);

  // Estado para armazernar moeda de origem
  const [FromCurrency, setFromCurrency] = useState("USD")

  // Estado para armazenar moeda de destino
  const [ToCurrency, setToCurrency] = useState("EUR")

  // Estado para armazenar a ser convertido
  const [amount, setAmount] = useState("1")

  // Estado para armazenar a ser convertido
  const [convertedAmount, setConvertedAmount] = useState(null)

  useEffect(()=>{
    axios
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
      const rateFrom = rates[FromCurrency] || 0;

      // Obtem a taxa da moeda destino se não existir atribuir 0
      const rateTo = rates[ToCurrency] || 0;

      setConvertedAmount(((amount / rateFrom * rateTo).toFixed(2)))
    }
    // Este efeito será executado sempre que qualquer um dos itens
    // [amount, rates, FromCurrancy, ToCurrancy] for atualizado
    // Isso é conhecido como (lista de dependências)
  }, [amount, rates, FromCurrency, ToCurrency]);  


    if (!rates) {
        return<div>Carregando...</div>
    }
  return (
    <div className='converter'>
        
        <h2>Conversor de Moeda</h2>

        <input type="number" placeholder='Digite o valor...' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <span>Selecione as moedas</span>

        {/* Dropdown para selecionar a moeda de inicio */}
        <select value={FromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}
        </select>

        <span>para</span>

        {/* Dropdown para selecionar a moeda de destino */}
        <select value={ToCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}
        </select>

        <h3>BRL USD</h3>
        <p>{amount} {FromCurrancy} valem {convertedAmount} {ToCurrancy}</p>

    </div>
  )
}

export default CurrancyConverter