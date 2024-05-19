const Result = ({amount, result, selectedCurrency}) => {
  return (
    `${amount} PLN = ${result} ${selectedCurrency}`
  );
};

export default Result;
