import PropTypes from 'prop-types';

function ImageComicCard({ datas }) {
  return (
    <div>
      <div className="relative">
        <img className="rounded-lg  h-[320px] w-[220px]" src={datas.imageSrc} alt="img" />
      </div>
      <div className="flex justify-center items-center">
        <div className="items text-center">
          <h1 className="font-bold">{datas.title}</h1>
          {datas.description && <h2 className="text-light">{datas.description}</h2>}
          {datas.author && <h2 className="text-light">{datas.author}</h2>}
        </div>
      </div>
    </div>
  );
}

ImageComicCard.propTypes = {
  datas: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.string,
  }).isRequired
};

export default ImageComicCard;
