import { FormEventHandler, useState } from "react";
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
import { Loading } from "../Loading";
import { Error } from "../Error";
import { useRatesData } from "../useRatesData";

interface FormProps {
  targetAmount: number;
  myResult: number;
  currency: string;
}

const Form = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState<FormProps>({
    targetAmount: 0,
    myResult: 0,
    currency: "",
  });
  const [currency, setCurrency] = useState("EUR");

  const ratesData = useRatesData();

  const calculateResult = (currency: string, amount: number) => {
    const currencies = ratesData.data![currency].value;

    setResult({
      targetAmount: +amount,
      myResult: amount * currencies,
      currency,
    });
  };

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    calculateResult(currency, Number(amount));
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
