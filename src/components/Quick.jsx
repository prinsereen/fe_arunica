import { useEffect, useState } from "react";
import QuickCard from "./QuickCard.jsx";
import api from "../utils/api.js"; 

const Quick = () => {
  const [dataQuick, setDataQuick] = useState({ url: [], label: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const type = 'quick'
        const response = await api.getThreeKnowledge({type});
        const urls = response.map(item => item.url);
        const labels = response.map(item => item.judul);
        setDataQuick({ url: urls, label: labels });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-44 pt-4">
      <div className="grid grid-cols-3 gap-4">
        {dataQuick.url.map((url, index) => (
          <QuickCard key={index} url={url} label={dataQuick.label[index]} />
        ))}
      </div>
    </div>
  );
};

export default Quick;
