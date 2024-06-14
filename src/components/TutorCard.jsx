import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const TutorCard = ({ url, label }) => {
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const videoId = url.split("v=")[1];
    setThumbnail(`https://img.youtube.com/vi/${videoId}/default.jpg`);
  }, [url]);

  return (
    <div className="mx-44 flex flex-col items-center border-2 p-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-500 hover:text-blue-700"
      >
        <img src={thumbnail} alt="Video Thumbnail" className="mb-2" />
      </a>
      <div className="font-bold text-xl mb-2">{label}</div>
    </div>
  );
};

TutorCard.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default TutorCard;
