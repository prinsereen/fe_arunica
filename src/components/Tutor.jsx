import TutorCard from "./TutorCard.jsx";

const Tutor = () => {
  const dataTutor = {
    url: [
      "https://www.youtube.com/watch?v=vF8uWdrVorg",
      "https://www.youtube.com/watch?v=124ivGoFuQg",
      "https://www.youtube.com/watch?v=EAEQ7TaNdWk"
    ],
    label: ["Fotosintesis", "Sejarah VOC", "Koperasi"]
  };

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
