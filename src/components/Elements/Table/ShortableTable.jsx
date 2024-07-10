import PropTypes from "prop-types";
import { useState } from "react";

export const SortableTable = (props) => {
  const { data } = props;

  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    const sortedData = [...tableData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    setTableData(sortedData);
  };

  return (
    <table className="w-full">
      <thead>
        <tr className="bg-[#EFD595]">
          <th
            className="py-2 px-4 border-2 border-white text-left"
            onClick={() => handleSort("name")}
          >
            Name
          </th>
          <th
            className="py-2 px-4 border-2 border-white"
            onClick={() => handleSort("status")}
          >
            Status
          </th>
          <th
            className="py-2 px-4 border-2 border-white"
            onClick={() => handleSort("date")}
          >
            Date
          </th>
          <th
            className="py-2 px-4 border-2 border-white"
            onClick={() => handleSort("score")}
          >
            Score
          </th>
          <th
            className="py-2 px-4 border-2 border-white"
            onClick={() => handleSort("exp")}
          >
            Experience
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4 text-center">
                {item.status === "Sudah Dinilai" ? (
                  <span className="px-3 py-1 rounded bg-[#40B14F] text-white">
                    {item.status}
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded bg-[#9F9F9F]">
                    {item.status}
                  </span>
                )}
              </td>
              <td className="py-2 px-4 text-center">{item.date}</td>
              <td className="py-2 px-4 text-center">{item.score}</td>
              <td className="py-2 px-4 text-center">{item.exp}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

SortableTable.propTypes = {
  data: PropTypes.array.isRequired,
};
