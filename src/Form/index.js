import { useState } from "react";
import Result from "./Result";
import {
  Fieledset,
  Legend,
  LabelText,
  Input,
  Button,
  Paragraph,
  StyledParagraph,
  PrimaryParagraph,
} from "./styled";
import { useAsyncFunction } from "../useAsyncFunction";
import { Loading } from "../Loading";
import { Error } from "../Error";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [currency, setCurrency] = useState("EUR");

  const ratesData = useAsyncFunction();

  const calculateResult = (currency, amount) => {
    const currencies = ratesData.data[currency].value;

    setResult({
      targetAmount: +amount,
      myResult: amount * currencies,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <>
      {ratesData.status === "loading" ? (
        <Loading />
      ) : ratesData.status === "error" ? (
        <Error />
      ) : (
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
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {Object.keys(ratesData.data).map((currencyCode) => (
                    <option key={currencyCode} value={currencyCode}>
                      {currencyCode}
                    </option>
                  ))}
                </Input>
              </label>
            </StyledParagraph>
          </Fieledset>
          <p>
            <Button type="submit">Przelicz</Button>
          </p>
          <PrimaryParagraph>
            Dane pochodzą z róznych instytucji finansowych. <br />
            Aktualne na dzień: <b>{ratesData.date}</b>
          </PrimaryParagraph>
          <Paragraph>
            <Result result={result} />
          </Paragraph>
        </form>
      )}
    </>
  );
};

export default Form;
