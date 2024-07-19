import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import BangunDatar from "../assets/Challenges/BangunDatar.png";
import BangunRuang from "../assets/Challenges/BangunRuang.png";
import LuasDanVolume from "../assets/Challenges/LuasDanVolume.png";
import HorizontalPaginationCard from "../components/HorizontalPaginationCard";
import { useParams } from "react-router-dom";
import HorizontalVideoPaginationCard from "../components/HorizontalVideoPaginationCard";
import api from "../utils/api";
import { formatDataFromApi } from "../utils/formatApi";
import PersonalAssistance from "../components/personalAssistance";

const SearchKnowledgeKingdom = () => {
    const [query, setQuery] = useState("");
    const [dataVideo, setDataVideo] = useState([])
    const { tipe, mapel } = useParams()
    let datas;
    let filteredSectionCard;
    let typeCard;
    let type

    if (tipe == 'MyBank' || tipe == 'MyRead'){
        type = tipe === 'MyBank' ? 'bank' : 'read';
    }else if (tipe == 'MyTutor' || tipe == 'MyQuick'){
        type = tipe === 'MyTutor' ? 'tutor' : 'quick';
    }

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await api.getAllKnowledge({type, mapel})
                const formattedData = formatDataFromApi(response)
                setDataVideo(formattedData)
            } catch (error) {
                console.error('Error fetching progress data:', error);
            }
        }
        fetchVideoData()
    })

    if (tipe == 'MyBank' || tipe == 'MyRead') {
        if (tipe == 'MyBank'){
            typeCard = 'bank'
        }else if (tipe == 'MyRead'){
            typeCard = 'read'
        }
        datas = {
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
        filteredSectionCard = datas.sectionCard.map(section => ({
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
    }else if (tipe == 'MyTutor' || tipe == 'MyQuick'){

        datas = {
            placeholder: "Explorasi Quiz yang ingin kamu taklukkan",
        };
        datas.sectionCard = dataVideo
        // console.log(datas)
        
        filteredSectionCard = datas.sectionCard.map(section => {
            const filteredUrlsAndLabels = section.card.url.reduce((acc, url, index) => {
                if (section.card.label[index].toLowerCase().includes(query.toLowerCase())) {
                    acc.urls.push(url);
                    acc.labels.push(section.card.label[index]);
                }
                return acc;
            }, { urls: [], labels: [] });
        
            return {
                ...section,
                card: {
                    ...section.card,
                    url: filteredUrlsAndLabels.urls,
                    label: filteredUrlsAndLabels.labels
                }
            };
        });
        console.log("Coba Ini", datas.placeholder)
    }

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };


    return (
        <>
            <Navbar />
            <SearchForm datas={datas} onSearch={handleSearch} />
            {(tipe == 'MyBank' || tipe == 'MyRead') &&
            <div>
                {filteredSectionCard.map((card, index) => (
                    <HorizontalPaginationCard key={index} datas={card} type={typeCard}/>
                ))}
            </div>}
            {(tipe == 'MyTutor' || tipe == 'MyQuick') &&
            <div>
                {filteredSectionCard.map((card, index) => (
                    <HorizontalVideoPaginationCard key={index} datas={card} />
                ))}
            </div>}
            <PersonalAssistance/>
            <Footer />
        </>
    );
};

export default SearchKnowledgeKingdom;
