import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get('https://api.currencyapi.com/v3/latest?apikey=cur_live_nWs6fc91YllPpvFWEnlCJ4b93mEhsWHDew0NC9Pv&base_currency=PLN');
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
