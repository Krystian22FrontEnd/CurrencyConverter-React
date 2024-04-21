import "./style.css";

const Form = () => {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator Walut</legend>
        <p>
          <label>
            <span className="form__labelText">Kwota w zł*:</span>
            <input
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
            <select className="form__field" name="Currency">
              <option title="Euro" value="EUR">
                EUR
              </option>
              <option title="Dolar Amerykański" value="USD">
                USD
              </option>
              <option title="Funt Brytyjski" value="GBP">
                GBP
              </option>
              <option title="Frank Szwajcarski" value="CHF">
                CHF
              </option>
            </select>
          </label>
        </p>
      </fieldset>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
      <p className="paragraph">
        <strong className="result">N/A</strong>
      </p>
    </form>
  );
};

export default Form;
