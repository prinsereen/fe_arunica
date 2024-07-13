import { BigButton } from "../components/Elements/Button/BigButton";
import { SectionTile } from "../components/Elements/Tile/SectionTile";
import { SmallButton } from "../components/Elements/Button/SmallButton";
import { StudentSummary } from "../components/Fragments/Summary/StudentSummary";
import { TeacherLayout } from "../components/Layouts/TeacherLayout";
import UserPhoto from "../assets/RingkasanHasil/unsplash_g5_XkcUrlyg.png";

const RingkasanHasil = () => {
  return (
    <TeacherLayout breadcrumb="Kingdom Protista">
      <div className="flex justify-center items-center mb-5 space-x-5">
        <img className="w-[50px]" src={UserPhoto} alt="" />
        <span>
          <strong>Anna</strong> (15/10/2024)
        </span>
      </div>
      <SectionTile title="Soal Pilihan Ganda" />
      <section className="my-5 space-y-5 lg:mx-20">
        <StudentSummary
          need_grading={undefined}
          blank={2}
          correct={3}
          wrong={10}
        />
        <section className="my-5 space-y-5 lg:mx-20 text-center">
          <SmallButton
            type="primary"
            label="Lihat Jawaban"
            onClick={() => {}}
            isExpanded={false}
          />
        </section>
      </section>
      <SectionTile title="Soal Isian Singkat" />
      <section className="my-5 space-y-5 lg:mx-20">
        <StudentSummary need_grading={5} blank={2} correct={3} wrong={10} />
        <section className="my-5 space-y-5 lg:mx-20 text-center">
          <SmallButton
            type="primary"
            label="Lihat Jawaban"
            onClick={() => {}}
            isExpanded={false}
          />
        </section>
      </section>
      <SectionTile title="Soal Esai" />
      <section className="my-5 space-y-5 lg:mx-20">
        <StudentSummary need_grading={5} blank={2} correct={3} wrong={10} />
        <section className="my-5 space-y-5 lg:mx-20 text-center">
          <SmallButton
            type="primary"
            label="Lihat Jawaban"
            onClick={() => {}}
            isExpanded={false}
          />
        </section>
        <BigButton label="Simpan Skor" onClick={() => {}} isExpanded={true} />
      </section>
    </TeacherLayout>
  );
};

export default RingkasanHasil;
