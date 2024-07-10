import { SortableTable } from "../components/Elements/Table/ShortableTable";
import { TeacherLayout } from "../components/Layouts/TeacherLayout";
import Thumbnail from "../assets/DaftarSiswa/Thumbnail.png";

const DaftarSiswa = () => {
  const data = [
    {
      name: "Budi",
      status: "Sudah Dinilai",
      date: "31/12/2024",
      score: "80/100",
      exp: 24,
    },
    {
      name: "Anton",
      status: "Perlu Dinilai",
      date: "21/11/2024",
      score: "-",
      exp: 25,
    },
    {
      name: "Dono",
      status: "Perlu Dinilai",
      date: "05/05/2024",
      score: "-",
      exp: 26,
    },
    {
      name: "Anna",
      status: "Perlu Dinilai",
      date: "15/10/2024",
      score: "-",
      exp: 30,
    },
  ];

  return (
    <TeacherLayout breadcrumb="IPA / MyQuiz / Daftar Soal / Daftar Siswa">
      <h2 className="text-center text-[22px] font-bold">Kingdom Protista</h2>
      <img className="w-[350px] mx-auto my-6" src={Thumbnail} alt="" />
      <SortableTable data={data} />
    </TeacherLayout>
  );
};

export default DaftarSiswa;
