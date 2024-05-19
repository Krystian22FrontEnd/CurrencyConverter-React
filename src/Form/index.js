import "./style.css";
import { useState } from "react";
import currencies from "../currencies";
import Result from "../Result";

const Form = () => {
  const [amount, setAmount] = useState("");

  const [result, setResult] = useState(null);

  const [selectedCurrencyValue, setSelectedCurrencyValue] = useState({
    shrt: currencies[0].shrt,
    worth: currencies[0].worth,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    setResult(amount / selectedCurrencyValue.worth);
  };

  const selectOption = currencies.map((currency) => (
    <option key={currency.id} value={currency.worth}>
      {currency.shrt}
    </option>
  ));

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator Walut</legend>
        <p>
          <label>
            <span className="form__labelText">Kwota w zł*:</span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="form__field"
              type="number"
              name="value"
              required
              placeholder="Mam"
              step="0.01"
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">Waluta:</span>
            <select
              className="form__field"
              value={selectedCurrencyValue.worth}
              onChange={({ target }) =>
                setSelectedCurrencyValue({
                  worth: target.value,
                 
                })
              }
            >
              {selectOption}
            </select>
          </label>
        </p>
      </fieldset>
      <p>
        <button type="submit" className="form__button">
          Przelicz
        </button>
        <label>Waluta: {selectedCurrencyValue.shrt}</label>
      </p>
      <p className="paragraph">
        {result !== null && (
          <b>
            {" "}
            <Result
              amount={amount}
              result={result}
              selectedCurrency={selectedCurrencyValue.shrt}
            />
          </b>
        )}
      </p>
    </form>
  );
};

export default Form;
