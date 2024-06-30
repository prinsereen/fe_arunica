import QuickCard from "./QuickCard.jsx";

const Quick = () => {
  const dataQuick = {
    url: [
      "https://www.youtube.com/watch?v=Wqrr2ba3dU0",
      "https://www.youtube.com/watch?v=nAz0SeVHZzA",
      "https://www.youtube.com/watch?v=87aqpfPJdlI"
    ],
    label: ["Himpunan", "Fungsi", "Limit"]
  };

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
