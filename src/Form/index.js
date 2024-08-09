import { useState } from "react";
import currencies from "../currencies";
import Result from "../Result";
import { Fieledset, Legend, LabelText, Input, Button, Paragraph, StyledParagraph } from "./styled";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [selectedCurrencyValue, setSelectedCurrencyValue] = useState({
    worth: currencies[0].worth,
    shrt: currencies[0].shrt,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    const foundCurrency = currencies.find(
      (it) => it.worth === parseFloat(selectedCurrencyValue.worth)
    );
    if (foundCurrency) {
      setResult({
        targetAmount: +amount,
        myResult: amount / foundCurrency.worth,
        selectedCurrency: foundCurrency.shrt,
      });
    }
  };

  const selectOption = currencies.map((currency) => (
    <option key={currency.id} value={currency.worth}>
      {currency.shrt}
    </option>
  ));

  return (
    <form onSubmit={onFormSubmit}>
      <Fieledset>
        <Legend>Kalkulator Walut</Legend>
        <StyledParagraph>
          <label>
            <LabelText>Kwota w zł*:</LabelText>
            <Input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              name="value"
              required
              placeholder="Mam"
              step="0.01"
              min={"0"}
            />
          </label>
        </StyledParagraph>
        <StyledParagraph>
          <label>
            <LabelText>Waluta:</LabelText>
            <Input
              as="select"
              value={selectedCurrencyValue.worth}
              onChange={({ target }) => {
                const selectedCurrency = currencies.find(
                  (currency) => currency.worth === parseFloat(target.value)
                );
                setSelectedCurrencyValue({
                  worth: selectedCurrency.worth,
                  shrt: selectedCurrency.shrt,
                });
              }}
            >
              {selectOption}
            </Input>
          </label>
        </StyledParagraph>
      </Fieledset>
      <p>
        <Button type="submit">
          Przelicz
        </Button>
      </p>
      <Paragraph>
        {result && (
          <strong>
            <Result
              targetAmount={result.targetAmount}
              myResult={result.myResult}
              selectedCurrency={result.selectedCurrency}
            />
          </strong>
        )}
      </Paragraph>
    </form>
  );
};

export default Form;
