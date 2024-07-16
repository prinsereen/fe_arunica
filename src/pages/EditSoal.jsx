import { BigButton } from "../components/Elements/Button/BigButton";
import { EsaiAnswer } from "../components/Fragments/Question/EsaiAnswer";
import { MultipleAnswer } from "../components/Fragments/Question/MultipleAnswer";
import { SectionTile } from "../components/Elements/Tile/SectionTile";
import { ShortAnswer } from "../components/Fragments/Question/ShortAnswer";
import { SmallButton } from "../components/Elements/Button/SmallButton";
import { TeacherLayout } from "../components/Layouts/TeacherLayout";

const EditSoal = () => {
  return (
    <TeacherLayout breadcrumb="IPA / MyQuiz / Tambah Soal Baru / Edit Soal">
      <SectionTile title="Edit Soal Pilihan Ganda" />
      <section className="my-5 space-y-5 lg:mx-20">
        <MultipleAnswer role="guru" />
        <div className="my-5 space-x-5 lg:mx-20 flex items-center justify-center">
          <SmallButton
            type="primary"
            label="Tambah Soal"
            onClick={() => {}}
            isExpanded={false}
          />
          <SmallButton
            type="secondary"
            label="Tambah Soal dengan AI"
            onClick={() => {}}
            isExpanded={false}
          />
        </div>
      </section>
      <SectionTile title="Edit Soal Isian Singkat" />
      <section className="my-5 space-y-5 lg:mx-20">
        <ShortAnswer role="guru"/>
        <div className="my-5 space-x-5 lg:mx-20 flex items-center justify-center">
          <SmallButton
            type="primary"
            label="Tambah Soal"
            onClick={() => {}}
            isExpanded={false}
          />
          <SmallButton
            type="secondary"
            label="Tambah Soal dengan AI"
            onClick={() => {}}
            isExpanded={false}
          />
        </div>
      </section>
      <SectionTile title="Edit Soal Esai" />
      <section className="my-5 space-y-5 lg:mx-20">
        <EsaiAnswer role="guru"/>
        <div className="my-5 space-x-5 lg:mx-20 flex items-center justify-center">
          <SmallButton
            type="primary"
            label="Tambah Soal"
            onClick={() => {}}
            isExpanded={false}
          />
          <SmallButton
            type="secondary"
            label="Tambah Soal dengan AI"
            onClick={() => {}}
            isExpanded={false}
          />
        </div>
        <BigButton label="Simpan Soal" onClick={() => {}} isExpanded={true} />
      </section>
    </TeacherLayout>
  );
};

export default EditSoal;
