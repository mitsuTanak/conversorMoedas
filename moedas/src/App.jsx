import { useState } from 'react'
import './App.css'
import CurrancyConverter from './components/CurrancyConverter.jsx'


function App() {

  // Estado das moesdas
  const [rates, setRAtes] = useState(null);

  // Estado para armazernar moeda de origem
  const [FromCurrancy, setFromCurrancy] = useState("USD")

  // Estado para armazenar moeda de destino
  const [ToCurrancy, setToCurrancy] = useState("EUR")

  // Estado para armazenar a ser convertido
  const [amount, setAmount] = useState("1")

  // Estado para armazenar a ser convertido
  const [convertedAmount, setConvertedAmount] = useState(null)

  return (
    <>
      <CurrancyConverter/>
    </>
  )
}

export default App
