import "./style.css";
import { useState } from "react";
import currencies from "../currencies";
import Result from "../Result";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [selectedCurrencyValue, setSelectedCurrencyValue] = useState({
    worth: currencies[0].worth,
    shrt: currencies[0].shrt,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    const foundCurrency = currencies.find(it => it.worth === parseFloat(selectedCurrencyValue.worth));
    if (foundCurrency) {
      setResult({
        targetAmount: +amount,
        myResult: amount / foundCurrency.worth,
        selectedCurrency: foundCurrency.shrt,
      });
      setAmount("");
    }
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
        <p className="form__paragraph">
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
        <p className="form__paragraph">
          <label>
            <span className="form__labelText">Waluta:</span>
            <select
              className="form__field"
              value={selectedCurrencyValue.worth}
              onChange={({ target }) => {
                const selectedCurrency = currencies.find(currency => currency.worth === parseFloat(target.value));
                setSelectedCurrencyValue({
                  worth: selectedCurrency.worth,
                  shrt: selectedCurrency.shrt,
                });
              }}
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
      </p>
      <p className="paragraph">
      {result && (
        <strong>
          <Result
            targetAmount={result.targetAmount}
            myResult={result.myResult}
            selectedCurrency={result.selectedCurrency}
          />
          </strong>
      )}
      </p>
    </form>
  );
};

export default Form;
