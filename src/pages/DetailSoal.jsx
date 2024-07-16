import { EsaiAnswer } from "../components/Fragments/Question/EsaiAnswer";
import { MultipleAnswer } from "../components/Fragments/Question/MultipleAnswer";
import { SectionTile } from "../components/Elements/Tile/SectionTile";
import { ShortAnswer } from "../components/Fragments/Question/ShortAnswer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DetailSoal = () => {
  return (
    <>
    <Navbar/>
        <h1 className="text-center text-[22px] font-bold py-[32px]">
          IPA
        </h1>
        <div className="mx-44">
        <SectionTile title="Soal Pilihan Ganda" />
        <section className="my-5 space-y-5 lg:mx-20">
            <MultipleAnswer />
        </section>
        <SectionTile title="Soal Isian Singkat" />
        <section className="my-5 space-y-5 lg:mx-20">
            <ShortAnswer />
        </section>
        <SectionTile title="Soal Esai" />
        <section className="my-5 space-y-5 lg:mx-20">
            <EsaiAnswer />
        </section>
        </div>
    <Footer/>
    </>
  );
};

export default DetailSoal;
