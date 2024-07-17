import { useState } from 'react';
import PropTypes from 'prop-types';
import ImageCard from "./ImageCard";

const HorizontalPaginationCard = ({ datas,  type}) => {
    const { sectionTitle, imageSrc, title, description, exp, deadline } = datas.card;
    const [currentIndex, setCurrentIndex] = useState(0);

    const cardsPerPage = 3;
    const totalPages = Math.ceil(imageSrc.length / cardsPerPage);

    const next = () => {
        if (currentIndex + cardsPerPage < imageSrc.length) {
            setCurrentIndex(currentIndex + cardsPerPage);
        }
    };

    const prev = () => {
        if (currentIndex - cardsPerPage >= 0) {
            setCurrentIndex(currentIndex - cardsPerPage);
        }
    };

    const displayedCards = imageSrc.slice(currentIndex, currentIndex + cardsPerPage);

    return (
        <>
            <div className="mx-44 text-xl font-bold mt-4">{sectionTitle}</div>
            <div className="mx-44 mt-4 flex justify-first items-center">
                <div className="flex justify-start gap-6">
                    {displayedCards.map((image, index) => (
                        <ImageCard
                            key={currentIndex + index}
                            datas={{
                                type,
                                imageSrc: image,
                                title: title[currentIndex + index],
                                description: description[currentIndex + index],
                                exp: exp[currentIndex + index],
                                deadline: deadline[currentIndex + index]
                            }}
                        />
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
                    disabled={currentIndex + cardsPerPage >= imageSrc.length}
                    className=" px-2 rounded-full shadow-2xl border-2 disabled:opacity-50"
                >
                    {">"}
                </button>
            </div>}

        </>
    );
}

HorizontalPaginationCard.propTypes = {
    type: PropTypes.string.isRequired,
    datas: PropTypes.shape({
        card: PropTypes.shape({
            sectionTitle: PropTypes.string.isRequired,
            imageSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
            title: PropTypes.arrayOf(PropTypes.string).isRequired,
            description: PropTypes.arrayOf(PropTypes.string).isRequired,
            exp: PropTypes.arrayOf(PropTypes.string).isRequired,
            deadline: PropTypes.arrayOf(PropTypes.string).isRequired,
        }).isRequired,
    }).isRequired,
};

export default HorizontalPaginationCard;
