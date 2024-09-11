import { useState, useEffect } from "react";
import axios from "axios";

export const useAsyncFunction = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get("currencies.json");
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
