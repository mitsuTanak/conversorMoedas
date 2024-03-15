import './CurrencyConverter.css'

const CurrancyConverter = () => {
  return (
    <div className='converter'>
        
        <h2>Conversor de Moeda</h2>

        <input type="number" placeholder='Digite o valor...' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <span>Selecione as moedas</span>

        {/* Dropdown para selecionar a moeda de inicio */}
        <select value={FromCurrancy}>
            {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}
        </select>

        <span>para</span>

        {/* Dropdown para selecionar a moeda de destino */}
        <select value={toCurrancy}>
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