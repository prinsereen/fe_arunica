import { PieChart, Pie } from "recharts";

const DonutChart = () => {
    // Sample data
    const data = [
        { name: "Geeksforgeeks", students: 400 },
        { name: "Technical scripter", students: 700 },
        { name: "Geek-i-knack", students: 200 },
        { name: "Geek-o-mania", students: 1000 },
        { name: "Geek-o-mania", students: 1000 },
    ];

    const colors = ["#79AB23", "#6E78FF", "#663399", "#D62CCF", "#C74634"];

    // Function to map each data point to a color
    const getColor = (index) => {
        return colors[index % colors.length];
    };

    return (
        <div className="border-2 h-52">
            <PieChart width={208} height={208}>
                <Pie
                    data={data}
                    dataKey="students"
                    outerRadius={100}
                    innerRadius={75}
                    fill={(datum, index) => getColor(index)}
                />
            </PieChart>
        </div>
    );
};

export default DonutChart;
