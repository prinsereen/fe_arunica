import { useState } from 'react';
import PropTypes from 'prop-types';
import TutorCard from './TutorCard';

const HorizontalVideoPaginationCard = ({ datas }) => {
    console.log("Kalo bener ya ini", datas)
    const { sectionTitle, label, url } = datas.card;
    const [currentIndex, setCurrentIndex] = useState(0);

    const cardsPerPage = 3;
    const totalPages = Math.ceil(label.length / cardsPerPage);

    const next = () => {
        if (currentIndex + cardsPerPage < label.length) {
            setCurrentIndex(currentIndex + cardsPerPage);
        }
    };

    const prev = () => {
        if (currentIndex - cardsPerPage >= 0) {
            setCurrentIndex(currentIndex - cardsPerPage);
        }
    };

    const displayedCards = label.slice(currentIndex, currentIndex + cardsPerPage);

    return (
        <>
            <div className="mx-44 text-xl font-bold mt-4">{sectionTitle}</div>
            <div className="mx-44 mt-4 flex justify-first items-center">
                <div className="flex justify-start gap-6">
                    {displayedCards.map((data, index) => (
                        <TutorCard key={currentIndex + index} url={url[currentIndex + index]} label={label[currentIndex + index]} />
                    ))}
                </div>
            </div>
            {totalPages > 1 && <div className='flex justify-center items-center mt-4'>
                <button
                    onClick={prev}
                    disabled={currentIndex === 0}
                    className="px-2 rounded-full shadow-2xl border-2 disabled:opacity-50"
                >
                    {"<"}
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <div
                        key={index}
                        className={`p-2 mx-1 rounded-full shadow-2xl border ${index === Math.floor(currentIndex / cardsPerPage) ? 'bg-[#1450A3]' : ''}`}
                    ></div>
                ))}
                <button
                    onClick={next}
                    disabled={currentIndex + cardsPerPage >= url.length}
                    className="px-2 rounded-full shadow-2xl border-2 disabled:opacity-50"
                >
                    {">"}
                </button>
            </div>}
        </>
    );
}

HorizontalVideoPaginationCard.propTypes = {
    datas: PropTypes.shape({
        card: PropTypes.shape({
            sectionTitle: PropTypes.string.isRequired,
            label: PropTypes.arrayOf(PropTypes.string).isRequired,
            url: PropTypes.arrayOf(PropTypes.string).isRequired
        }).isRequired
    }).isRequired
};

export default HorizontalVideoPaginationCard;
