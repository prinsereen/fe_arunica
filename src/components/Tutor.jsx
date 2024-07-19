import { useEffect, useState } from "react";
import TutorCard from "./TutorCard.jsx";
import api from "../utils/api.js"; // Make sure this points to the correct path of your API utility

const Tutor = () => {
  const [dataTutor, setDataTutor] = useState({ url: [], label: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const type = 'tutor'
        const response = await api.getThreeKnowledge({type});
        const urls = response.map(item => item.url);
        const labels = response.map(item => item.judul);
        setDataTutor({ url: urls, label: labels });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-44 pt-4">
      <div className="grid grid-cols-3 gap-4">
        {dataTutor.url.map((url, index) => (
          <TutorCard key={index} url={url} label={dataTutor.label[index]} />
        ))}
      </div>
    </div>
  );
};

export default Tutor;
