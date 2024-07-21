import { MultipleAnswer } from "../components/Fragments/Question/MultipleAnswer";
import { SectionTile } from "../components/Elements/Tile/SectionTile";
import { ShortAnswer } from "../components/Fragments/Question/ShortAnswer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import api from "../utils/api";

const DetailSoal = () => {

  useEffect(() => {
    api.tambahNilaiMath();
  }, []);

  const multipleChoiceData = [
    {
      title: "1. Berapakah luas persegi dengan panjang sisi 4 cm?",
      options: [
        { value: "12 cm²", label: "12 cm²" },
        { value: "16 cm²", label: "16 cm²" },
        { value: "18 cm²", label: "18 cm²" },
        { value: "20 cm²", label: "20 cm²" },
      ],
      correctAnswer: "16 cm²",
      discussion: "Luas persegi adalah sisi x sisi, jadi 4 x 4 = 16 cm².",
    },
    {
      title: "2. Berapakah keliling persegi dengan panjang sisi 7 cm?",
      options: [
        { value: "21 cm", label: "21 cm" },
        { value: "28 cm", label: "28 cm" },
        { value: "30 cm", label: "30 cm" },
        { value: "35 cm", label: "35 cm" },
      ],
      correctAnswer: "28 cm",
      discussion: "Keliling persegi adalah 4 x sisi, jadi 4 x 7 = 28 cm.",
    },
    {
      title: "3. Berapakah luas segitiga dengan alas 5 cm dan tinggi 8 cm?",
      options: [
        { value: "20 cm²", label: "20 cm²" },
        { value: "30 cm²", label: "30 cm²" },
        { value: "40 cm²", label: "40 cm²" },
        { value: "50 cm²", label: "50 cm²" },
      ],
      correctAnswer: "20 cm²",
      discussion: "Luas segitiga adalah 1/2 x alas x tinggi, jadi 1/2 x 5 x 8 = 20 cm².",
    },
    {
      title: "4. Berapakah keliling lingkaran dengan diameter 10 cm?",
      options: [
        { value: "10π cm", label: "10π cm" },
        { value: "20π cm", label: "20π cm" },
        { value: "30π cm", label: "30π cm" },
        { value: "40π cm", label: "40π cm" },
      ],
      correctAnswer: "10π cm",
      discussion: "Keliling lingkaran adalah π x diameter, jadi π x 10 = 10π cm.",
    },
    {
      title: "5. Berapakah luas jajar genjang dengan alas 6 cm dan tinggi 4 cm?",
      options: [
        { value: "20 cm²", label: "20 cm²" },
        { value: "24 cm²", label: "24 cm²" },
        { value: "28 cm²", label: "28 cm²" },
        { value: "32 cm²", label: "32 cm²" },
      ],
      correctAnswer: "24 cm²",
      discussion: "Luas jajar genjang adalah alas x tinggi, jadi 6 x 4 = 24 cm².",
    },
    {
      title: "6. Berapakah luas trapesium dengan panjang sisi sejajar 8 cm dan 6 cm, serta tinggi 5 cm?",
      options: [
        { value: "30 cm²", label: "30 cm²" },
        { value: "35 cm²", label: "35 cm²" },
        { value: "40 cm²", label: "40 cm²" },
        { value: "45 cm²", label: "45 cm²" },
      ],
      correctAnswer: "35 cm²",
      discussion: "Luas trapesium adalah 1/2 x (jumlah sisi sejajar) x tinggi, jadi 1/2 x (8 + 6) x 5 = 35 cm².",
    },
    {
      title: "7. Berapakah keliling belah ketupat dengan panjang sisi 9 cm?",
      options: [
        { value: "27 cm", label: "27 cm" },
        { value: "36 cm", label: "36 cm" },
        { value: "45 cm", label: "45 cm" },
        { value: "54 cm", label: "54 cm" },
      ],
      correctAnswer: "36 cm",
      discussion: "Keliling belah ketupat adalah 4 x sisi, jadi 4 x 9 = 36 cm.",
    },
    {
      title: "8. Berapakah luas lingkaran dengan jari-jari 7 cm?",
      options: [
        { value: "49π cm²", label: "49π cm²" },
        { value: "77π cm²", label: "77π cm²" },
        { value: "98π cm²", label: "98π cm²" },
        { value: "154π cm²", label: "154π cm²" },
      ],
      correctAnswer: "49π cm²",
      discussion: "Luas lingkaran adalah π x jari-jari x jari-jari, jadi π x 7 x 7 = 49π cm².",
    },
    {
      title: "9. Berapakah keliling persegi panjang dengan panjang 10 cm dan lebar 5 cm?",
      options: [
        { value: "15 cm", label: "15 cm" },
        { value: "20 cm", label: "20 cm" },
        { value: "25 cm", label: "25 cm" },
        { value: "30 cm", label: "30 cm" },
      ],
      correctAnswer: "30 cm",
      discussion: "Keliling persegi panjang adalah 2 x (panjang + lebar), jadi 2 x (10 + 5) = 30 cm.",
    },
    {
      title: "10. Berapakah luas persegi panjang dengan panjang 8 cm dan lebar 3 cm?",
      options: [
        { value: "16 cm²", label: "16 cm²" },
        { value: "24 cm²", label: "24 cm²" },
        { value: "30 cm²", label: "30 cm²" },
        { value: "36 cm²", label: "36 cm²" },
      ],
      correctAnswer: "24 cm²",
      discussion: "Luas persegi panjang adalah panjang x lebar, jadi 8 x 3 = 24 cm².",
    },
  ];
  

  const shortAnswerData = [
    {
      title: "1. Berapakah keliling segitiga sama sisi dengan panjang sisi 5 cm?",
      answer: "15 cm",
      discussion: "Keliling segitiga sama sisi adalah 3 x sisi, jadi 3 x 5 = 15 cm.",
    },
    {
      title: "2. Berapakah luas persegi dengan panjang sisi 6 cm?",
      answer: "36 cm²",
      discussion: "Luas persegi adalah sisi x sisi, jadi 6 x 6 = 36 cm².",
    },
    {
      title: "3. Berapakah keliling lingkaran dengan jari-jari 7 cm?",
      answer: "14π cm",
      discussion: "Keliling lingkaran adalah 2π x jari-jari, jadi 2π x 7 = 14π cm.",
    },
    {
      title: "4. Berapakah luas segitiga dengan alas 10 cm dan tinggi 5 cm?",
      answer: "25 cm²",
      discussion: "Luas segitiga adalah 1/2 x alas x tinggi, jadi 1/2 x 10 x 5 = 25 cm².",
    },
    {
      title: "5. Berapakah keliling persegi panjang dengan panjang 8 cm dan lebar 4 cm?",
      answer: "24 cm",
      discussion: "Keliling persegi panjang adalah 2 x (panjang + lebar), jadi 2 x (8 + 4) = 24 cm.",
    },
    {
      title: "6. Berapakah luas jajar genjang dengan alas 9 cm dan tinggi 4 cm?",
      answer: "36 cm²",
      discussion: "Luas jajar genjang adalah alas x tinggi, jadi 9 x 4 = 36 cm².",
    },
    {
      title: "7. Berapakah keliling trapesium dengan panjang sisi-sisinya 5 cm, 7 cm, 5 cm, dan 7 cm?",
      answer: "24 cm",
      discussion: "Keliling trapesium adalah jumlah semua sisi, jadi 5 + 7 + 5 + 7 = 24 cm.",
    },
    {
      title: "8. Berapakah luas lingkaran dengan diameter 14 cm?",
      answer: "49π cm²",
      discussion: "Luas lingkaran adalah π x jari-jari x jari-jari. Jari-jari = 14/2 = 7 cm, jadi π x 7 x 7 = 49π cm².",
    },
    {
      title: "9. Berapakah keliling belah ketupat dengan panjang sisi 6 cm?",
      answer: "24 cm",
      discussion: "Keliling belah ketupat adalah 4 x sisi, jadi 4 x 6 = 24 cm.",
    },
    {
      title: "10. Berapakah luas persegi panjang dengan panjang 7 cm dan lebar 3 cm?",
      answer: "21 cm²",
      discussion: "Luas persegi panjang adalah panjang x lebar, jadi 7 x 3 = 21 cm².",
    },
  ];
  

  return (
    <>
      <Navbar />
      <h1 className="text-center text-[22px] font-bold py-[32px]">
        Matematika / Bangun Datar
      </h1>
      <div className="mx-44">
        <SectionTile title="Soal Pilihan Ganda" />
        <section className="my-5 space-y-5 lg:mx-20">
          {multipleChoiceData.map((data, index) => (
            <MultipleAnswer
              key={index}
              role="siswa"
              title={data.title}
              options={data.options}
              correctAnswer={data.correctAnswer}
              discussion={data.discussion}
            />
          ))}
        </section>
        <SectionTile title="Soal Isian Singkat" />
        <section className="my-5 space-y-5 lg:mx-20">
          {shortAnswerData.map((data, index) => (
            <ShortAnswer
              key={index}
              role="siswa"
              title={data.title}
              answer={data.answer}
              discussion={data.discussion}
            />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DetailSoal;
