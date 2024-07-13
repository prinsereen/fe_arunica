import Blank from "../../../assets/RingkasanHasil/blank.png";
import Correct from "../../../assets/RingkasanHasil/correct.png";
import Grading from "../../../assets/RingkasanHasil/grading.png";
import PropTypes from "prop-types";
import Wrong from "../../../assets/RingkasanHasil/wrong.png";

export const StudentSummary = (props) => {
  const { need_grading, blank, correct, wrong } = props;

  return (
    <div className="flex justify-center items-center space-x-6">
      <div className="flex flex-col justify-center items-end">
        <p className="font-bold">Jumlah soal: 15 soal</p>
        <div className="flex justify-center items-end space-x-6">
          <p>Score: 35</p>
          <p>EXP: 7</p>
        </div>
      </div>
      <div className="space-y-2">
        {need_grading && (
          <div className="flex items-center space-x-2">
            <img className="w-[25px]" src={Grading} alt="" />
            <span>Jumlah soal perlu dinilai: {need_grading} soal</span>
          </div>
        )}
        <div className="flex items-center space-x-2">
          <img className="w-[25px]" src={Correct} alt="" />
          <span>Jumlah soal tidak terjawab: {blank || "-"} soal</span>
        </div>

        <div className="flex items-center space-x-2">
          <img className="w-[25px]" src={Wrong} alt="" />
          <span>Jumlah soal benar: {correct || "-"} soal</span>
        </div>

        <div className="flex items-center space-x-2">
          <img className="w-[25px]" src={Blank} alt="" />
          <span>Jumlah soal salah: {wrong || "-"} soal</span>
        </div>
      </div>
    </div>
  );
};

StudentSummary.propTypes = {
  need_grading: PropTypes.number.isRequired,
  blank: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
};
