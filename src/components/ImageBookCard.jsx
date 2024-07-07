import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ImageBookCard({ datas }) {
  return (
    <Link to={`/imagination/MyLiterature/abstrak/${datas.id}`}>
      <div className="relative">
        <img className="rounded-lg  p-2 bg-[#EFD595] h-[240px] w-[160px]" src={datas.imageSrc} alt="img" />
      </div>
      <div className="flex justify-center items-center">
        <div className="items text-center">
          <h1 className="font-bold">{datas.title}</h1>
        </div>
      </div>
    </Link>
  );
}

ImageBookCard.propTypes = {
  datas: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired
};

export default ImageBookCard;
