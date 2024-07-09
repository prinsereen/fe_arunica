import { QuestionTile } from "../components/Elements/Tile/QuestionTile";
import { SectionTile } from "../components/Elements/Tile/SectionTile";
import { SmallButton } from "../components/Elements/Button/SmallButton";
import { TeacherLayout } from "../components/Layouts/TeacherLayout";

const DaftarSoal = () => {
  return (
    <TeacherLayout breadcrumb="IPA / MyQuiz / Tambah Soal Baru / Edit Soal">
      <SectionTile title="Ilmu Taksonomi" color="yellow" />
      <section className="my-5 space-y-5 lg:mx-20">
        <QuestionTile title="Kingdom Monera">
          <SmallButton
            type="secondary"
            label="Edit Soal"
            onClick={() => {}}
            isExpanded={true}
          />
          <SmallButton
            type="danger"
            label="Hapus Soal"
            onClick={() => {}}
            isExpanded={true}
          />
          <SmallButton
            type="warning"
            label="Daftar Siswa"
            onClick={() => {}}
            isExpanded={true}
          />
        </QuestionTile>
      </section>
      <SectionTile title="Energi" color="yellow" />
      <section className="my-5 space-y-5 lg:mx-20">
        <QuestionTile title="Kingdom Monera">
          <SmallButton
            type="secondary"
            label="Edit Soal"
            onClick={() => {}}
            isExpanded={true}
          />
          <SmallButton
            type="danger"
            label="Hapus Soal"
            onClick={() => {}}
            isExpanded={true}
          />
          <SmallButton
            type="warning"
            label="Daftar Siswa"
            onClick={() => {}}
            isExpanded={true}
          />
        </QuestionTile>
      </section>
    </TeacherLayout>
  );
};

export default DaftarSoal;
