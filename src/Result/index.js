const Result = ({targetAmount, myResult, selectedCurrency}) => {
  return (
    `${targetAmount} PLN = ${myResult.toFixed(2)} ${selectedCurrency}`
    );
};

export default Result;
