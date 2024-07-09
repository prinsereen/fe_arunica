import PropTypes from "prop-types";
import { TextField } from "../Field/TextField";

export const RadioGreenTick = (props) => {
  const { id, value, isSelected, onChange, label } = props;
  return (
    <div className="flex items-center mb-2">
      <input
        type="radio"
        id={id}
        name="option"
        value={value}
        checked={isSelected}
        onChange={onChange}
        className="hidden"
      />
      <label htmlFor={id} className="flex-1 flex items-center cursor-pointer">
        <div
          className={`w-[28px] h-[28px] rounded-full flex items-center justify-center mr-2 
                                ${isSelected ? "bg-green-500" : "bg-white"}`}
        >
          {isSelected && (
            <div className="w-[18px] h-[12px] rounded-full">
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 5.7948L5.72144 10.0163C5.86993 10.1666 6.04677 10.286 6.24172 10.3674C6.43668 10.4488 6.64586 10.4908 6.85715 10.4908C7.0685 10.4908 7.2776 10.4488 7.4726 10.3674C7.6675 10.286 7.8443 10.1666 7.9929 10.0163L16.5 1.50916"
                  stroke="#F5F5FA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex-1">
          <TextField
            color="white"
            id="input_judul"
            placeholder="Masukkan judul soal"
            value={label}
            onChange={() => {}}
            isRequired={true}
            isDisabled={false}
          />
        </div>
      </label>
    </div>
  );
};

RadioGreenTick.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
