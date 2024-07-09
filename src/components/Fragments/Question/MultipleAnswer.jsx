import { RadioGreenTick } from "../../Elements/Radio/RadioGreenTick";
import { SmallButton } from "../../Elements/Button/SmallButton";
import { TextAreaField } from "../../Elements/Field/TextAreaField";
import { TextField } from "../../Elements/Field/TextField";
import { useState } from "react";

export const MultipleAnswer = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-[#E8E8E8] rounded-[24px]">
      <div className="flex items-center justify-center">
        <div className="mb-4 flex-1">
          <div className="py-4">
            <TextField
              id="input_judul"
              placeholder="Masukkan judul soal"
              value={"1. soal"}
              onChange={() => {}}
              isRequired={true}
              isDisabled={false}
            />
          </div>
          <div className="px-6">
            <div>
              {[
                { value: "Escherichia coli", label: "Escherichia coli" },
                { value: "Streptococcus", label: "Streptococcus" },
                { value: "Plasmodium", label: "Plasmodium" },
                { value: "Cyanobacteria", label: "Cyanobacteria" },
              ].map((option) => (
                <RadioGreenTick
                  key={option.value}
                  id={option.value}
                  value={option.value}
                  isSelected={selectedOption === option.value}
                  onChange={handleOptionChange}
                  label={option.label}
                />
              ))}
            </div>
            <div>
              <h3 className="font-semibold">Pembahasan</h3>
              <TextAreaField
                color="white"
                id="input_deskripsi"
                placeholder="Tulis deskripsi soal"
                value={"deskripsi"}
                rows={2}
                min={10}
                max={250}
                onChange={() => {}}
                isRequired={true}
                isDisabled={false}
              />
            </div>
          </div>
        </div>
        <div className="pr-6 max-w-[250px] space-y-4 my-4">
          <SmallButton
            type="secondary"
            label="Generate Jawaban dengan AI"
            onClick={() => {}}
            isExpanded={true}
          />
          <SmallButton
            type="warning"
            label="Tambah Gambar"
            onClick={() => {}}
            isExpanded={true}
          />
          <SmallButton
            type="danger"
            label="Hapus Soal"
            onClick={() => {}}
            isExpanded={true}
          />
        </div>
      </div>
    </div>
  );
};
