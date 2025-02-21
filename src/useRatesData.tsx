import { useState, useEffect } from "react";
import axios from "axios";

interface CurrencyData {
  [key: string]: {
    code: string;
    value: number;
  };
}
interface ApiResponse {
  meta: {
    last_updated_at: string;
  };
  data: CurrencyData;
}

type Status =
  | { status: "loading"; data?: CurrencyData }
  | { status: "success"; data: CurrencyData; date: string }
  | { status: "error"; data?: CurrencyData };

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState<Status>({
    status: "loading",
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://api.currencyapi.com/v3/latest?apikey=cur_live_nWs6fc91YllPpvFWEnlCJ4b93mEhsWHDew0NC9Pv&base_currency=PLN"
        );
        const date = new Date(
          response.data.meta.last_updated_at
        ).toLocaleDateString();

        setRatesData({
          status: "success",
          data: response.data.data,
          date: date,
        });
      } catch (error) {
        setRatesData({
          status: "error",
        });
      }
    };

    setTimeout(axiosData, 1000);
  }, []);

  return ratesData;
};
