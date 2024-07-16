import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuicCard = ({ url, label }) => {
  const [thumbnail, setThumbnail] = useState("");
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const videoId = url.split("v=")[1];
    setThumbnail(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
    setVideoId(videoId)
  }, [url]);

  return (
    <Link to={`/knowledge/video/${videoId}`} className="flex flex-col items-center  ">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-500 hover:text-blue-700"
      >
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="mb-2 rounded-lg"
          style={{ width: "480px", height: "128px" }}
        />
      </a>
      <div className="font-bold text-xl mb-2">{label}</div>
    </Link>
  );
};

QuicCard.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default QuicCard;
