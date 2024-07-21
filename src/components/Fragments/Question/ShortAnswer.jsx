import { SmallButton } from "../../Elements/Button/SmallButton";
import { TextAreaField } from "../../Elements/Field/TextAreaField";
import { TextField } from "../../Elements/Field/TextField";
import PropTypes from 'prop-types';

export const ShortAnswer = ({ role, title, answer, discussion }) => {
  return (
    <div className="bg-[#E8E8E8] rounded-[24px]">
      <div className="flex items-center justify-center">
        <div className="mb-4 flex-1">
          <div className="py-4">
            <TextField
              id="input_judul"
              placeholder="Masukkan judul soal"
              value={title}
              onChange={() => {}}
              isRequired={true}
              isDisabled={false}
            />
          </div>
          <div className="px-6">
            <div>
              <h3 className="font-semibold">Jawaban</h3>
              <TextField
                color="white"
                id="input_jawaban"
                placeholder="Masukkan jawaban"
                value={answer}
                onChange={() => {}}
                isRequired={true}
                isDisabled={false}
              />
            </div>
            <div>
              <h3 className="font-semibold">Pembahasan</h3>
              <TextAreaField
                color="white"
                id="input_deskripsi"
                placeholder="Tulis deskripsi soal"
                value={discussion}
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
        {role === 'guru' && (
          <div className="pr-6 max-w-[250px] space-y-4">
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
        )}
      </div>
    </div>
  );
};

ShortAnswer.propTypes = {
  role: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  discussion: PropTypes.string.isRequired,
};
