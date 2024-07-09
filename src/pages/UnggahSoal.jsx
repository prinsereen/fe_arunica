import { BigButton } from "../components/Elements/Button/BigButton";
import { InputLabel } from "../components/Elements/Label/InputLabel";
import { NumberField } from "../components/Elements/Field/NumberField";
import { SectionTile } from "../components/Elements/Tile/SectionTile";
import { SelectField } from "../components/Elements/Field/SelectField";
import { SmallButton } from "../components/Elements/Button/SmallButton";
import { TeacherLayout } from "../components/Layouts/TeacherLayout";
import { TextAreaField } from "../components/Elements/Field/TextAreaField";
import { TextField } from "../components/Elements/Field/TextField";
import { UploadField } from "../components/Elements/Field/UploadField";
import { useState } from "react";

const UnggahSoal = () => {
  const [judul, setJudul] = useState("");
  const [bab, setBab] = useState("");
  const [durasi, setDurasi] = useState("");
  const [batas, setBatas] = useState("");
  const [exp, setExp] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [jmlSoal, setJmlSoal] = useState("");
  const [skorSoal, setSkorSoal] = useState("");
  const [jmlIsian, setJmlIsian] = useState("");
  const [skorIsian, setSkorIsian] = useState("");
  const [jmlEsai, setJmlEsai] = useState("");
  const [skorEsai, setSkorEsai] = useState("");

  const babOptions = [
    {
      label: "Bab 1",
      value: "Bab 1",
    },
    {
      label: "Bab 2",
      value: "Bab 2",
    },
    {
      label: "Bab 3",
      value: "Bab 3",
    },
  ];

  const batasOptions = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
  ];

  return (
    <TeacherLayout breadcrumb="IPA / MyQuiz / Tambah Soal Baru">
      <SectionTile title="Deskripsi Umum Soal" />
      <section className="my-5 space-y-5 lg:mx-20">
        <InputLabel id="input_judul" label="Masukan judul">
          <TextField
            id="input_judul"
            placeholder="Masukkan judul soal"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
        <InputLabel id="input_bab" label="Bab Pelajaran">
          <SelectField
            options={babOptions}
            id="input_bab"
            placeholder="Pilih bab pelajaran"
            value={bab}
            onChange={(e) => setBab(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
        <InputLabel id="input_durasi" label="Durasi" unit="Menit">
          <NumberField
            id="input_durasi"
            placeholder="Masukkan durasi"
            value={durasi}
            min={1}
            max={360}
            onChange={(e) => setDurasi(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
        <InputLabel id="input_batas" label="Batas Pengerjaan Siswa">
          <SelectField
            options={batasOptions}
            id="input_batas"
            placeholder="Pilih batas pengerjaan"
            value={batas}
            onChange={(e) => setBatas(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
        <InputLabel id="input_exp" label="Total EXP">
          <NumberField
            id="input_exp"
            placeholder="Masukkan total EXP yang akan didapatkan siswa"
            value={exp}
            min={1}
            max={360}
            onChange={(e) => setExp(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
        <InputLabel id="input_thumbnail" label="Unggah Thumbnail">
          <UploadField
            id="input_thumbnail"
            placeholder="Unggah"
            value={thumbnail.name}
            onChange={(e) => setThumbnail(e.target.files[0])}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
        <InputLabel id="input_deskripsi" label="Deskripsi Soal">
          <TextAreaField
            id="input_deskripsi"
            placeholder="Tulis deskripsi soal"
            value={deskripsi}
            rows={4}
            min={10}
            max={250}
            onChange={(e) => setDeskripsi(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
      </section>
      <SectionTile title="Jenis-Jenis Soal" />
      <section className="my-5 space-y-5 lg:mx-20">
        <InputLabel id="input_jml_soal" label="Jumlah pilihan ganda">
          <NumberField
            id="input_jml_soal"
            placeholder="Masukkan jumlah soal"
            value={jmlSoal}
            min={1}
            max={360}
            onChange={(e) => setJmlSoal(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
        <InputLabel id="input_skor_soal" label="Skor tiap pilihan ganda">
          <NumberField
            id="input_skor_soal"
            placeholder="Masukkan skor tiap pilihan ganda"
            value={skorSoal}
            min={1}
            max={360}
            onChange={(e) => setSkorSoal(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
        <InputLabel id="input_jml_isian" label="Jumlah isian singkat">
          <NumberField
            id="input_jml_isian"
            placeholder="Masukkan jumlah isian"
            value={jmlIsian}
            min={1}
            max={360}
            onChange={(e) => setJmlIsian(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
        <InputLabel id="input_skor_isian" label="Skor tiap isian singkat">
          <NumberField
            id="input_skor_isian"
            placeholder="Masukkan skor tiap isian singkat"
            value={skorIsian}
            min={1}
            max={360}
            onChange={(e) => setSkorIsian(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
        <InputLabel id="input_jml_esai" label="Jumlah Esai">
          <NumberField
            id="input_jml_esai"
            placeholder="Masukkan jumlah esail"
            value={jmlEsai}
            min={1}
            max={360}
            onChange={(e) => setJmlEsai(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
        <InputLabel id="input_skor_esai" label="Skor tiap esai">
          <NumberField
            id="input_skor_esai"
            placeholder="Masukkan skor tiap esai"
            value={skorEsai}
            min={1}
            max={360}
            onChange={(e) => setSkorEsai(e.target.value)}
            isRequired={true}
            isDisabled={false}
          />
        </InputLabel>
      </section>
      <section className="my-5 space-y-5 lg:mx-20 text-center">
        <SmallButton
          type="primary"
          label="Edit Soal"
          onClick={() => {}}
          isExpanded={false}
        />
        <SmallButton
          type="secondary"
          label="Generate Soal dengan AI"
          onClick={() => {}}
          isExpanded={false}
        />
        <BigButton label="Unggah Soal" onClick={() => {}} isExpanded={true} />
      </section>
    </TeacherLayout>
  );
};

export default UnggahSoal;
