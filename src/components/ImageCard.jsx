import PropTypes from 'prop-types';

function ImageCard({ datas }) {
  return (
    <div>
      <div className="w-72 relative">
        <img className="rounded-lg" src={datas.imageSrc} alt="img" />
        <div className="rounded-b-lg absolute bottom-0 left-0 right-0 flex items-center justify-between bg-[#515151] opacity-75 h-10">
          <button className="border ml-auto text-md px-4 mr-2 rounded-lg border-white text-white font-medium">PLAY</button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="items text-center">
          <h1 className="font-bold">{datas.title}</h1>
          {datas.description && <h2 className="text-light">{datas.description}</h2>}
          {datas.deadline && <h2 className="text-light">{datas.deadline}</h2>}
          {datas.exp && <h2>{datas.exp} EXP</h2>}
        </div>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  datas: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    deadline: PropTypes.string,
    exp: PropTypes.number
  }).isRequired
};

export default ImageCard;
