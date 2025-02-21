interface ResultProps {
  result?: {
    targetAmount: number;
    myResult: number;
    currency: string;
  };
}

export const Result = ({ result }: ResultProps) => {
  if (!result) {
    return null;
  }

  return (
    <span>
      {result.targetAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
      <strong>
        {result.myResult.toFixed(2)}&nbsp;{result.currency}
      </strong>
    </span>
  );
};

export default Result;
