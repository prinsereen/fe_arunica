import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ImageComicCard({ datas }) {
  return (
    <Link to={`/imagination/comic/${datas.id}`}>
      <div className="relative mt-4">
        <img className="rounded-lg  h-[320px] w-[220px]" src={datas.imageSrc} alt="img" />
      </div>
      <div className="flex justify-center items-center">
        <div className="items text-center">
          <h1 className="font-bold">{datas.title}</h1>
          {datas.description && <h2 className="text-light">{datas.description}</h2>}
          {datas.author && <h2 className="text-light">{datas.author}</h2>}
        </div>
      </div>
    </Link>
  );
}

ImageComicCard.propTypes = {
  datas: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.string,
  }).isRequired
};

export default ImageComicCard;
