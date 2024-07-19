import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import BangunDatar from "../assets/Challenges/BangunDatar.png";
import BangunRuang from "../assets/Challenges/BangunRuang.png";
import LuasDanVolume from "../assets/Challenges/LuasDanVolume.png";
import HorizontalPaginationCard from "../components/HorizontalPaginationCard";
import PersonalAssistance from "../components/personalAssistance";

const SearchChallenge = () => {
    const [query, setQuery] = useState("");

    const datas = {
        placeholder: "Explorasi Quiz yang ingin kamu taklukkan",
        sectionCard: [
            {
                card: {
                    sectionTitle: 'Geometri',
                    imageSrc: [BangunDatar, BangunRuang, LuasDanVolume, LuasDanVolume],
                    title: ["Bangun Datar", "Bangun Ruang", "Luas Dan Volume", "Luas Dan Volume"],
                    description: ["10 pilihan ganda, 10 isian singkat", "10 pilihan ganda, 10 isian singkat", "10 pilihan ganda, 10 isian singkat", "10 pilihan ganda, 10 isian singkat"],
                    deadline: ["15 Oktober 2023", "15 Oktober 2023", "15 Oktober 2023", "15 Oktober 2023"],
                    exp: [15, 15, 15, 15]
                }
            },
            {
                card: {
                    sectionTitle: 'Aritmatika',
                    imageSrc: [BangunDatar, BangunRuang, LuasDanVolume],
                    title: ["Bangun Datar", "Bangun Ruang", "Buas Dan Volume"],
                    description: ["10 pilihan ganda, 10 isian singkat", "10 pilihan ganda, 10 isian singkat", "10 pilihan ganda, 10 isian singkat"],
                    deadline: ["15 Oktober 2023", "15 Oktober 2023", "15 Oktober 2023"],
                    exp: [15, 15, 15]
                }
            }
        ]
    };

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };

    const filteredSectionCard = datas.sectionCard.map(section => ({
        ...section,
        card: {
            ...section.card,
            imageSrc: section.card.imageSrc.filter((_, index) => 
                section.card.title[index].toLowerCase().includes(query.toLowerCase())
            ),
            title: section.card.title.filter(title => 
                title.toLowerCase().includes(query.toLowerCase())
            ),
            description: section.card.description.filter((_, index) => 
                section.card.title[index].toLowerCase().includes(query.toLowerCase())
            ),
            deadline: section.card.deadline.filter((_, index) => 
                section.card.title[index].toLowerCase().includes(query.toLowerCase())
            ),
            exp: section.card.exp.filter((_, index) => 
                section.card.title[index].toLowerCase().includes(query.toLowerCase())
            )
        }
    }));

    return (
        <>
            <Navbar />
            <SearchForm datas={datas} onSearch={handleSearch} />
            <div>
                {filteredSectionCard.map((card, index) => (
                    <HorizontalPaginationCard key={index} datas={card} type="quiz" />
                ))}
            </div>
            <PersonalAssistance/>
            <Footer />
        </>
    );
};

export default SearchChallenge;
