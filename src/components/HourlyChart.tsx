
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";




const HourlyChart = ({data} :any) => {
    return (
        <ResponsiveContainer
            width="100%"
            height={300}
        >
            <LineChart data={data}>
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line dataKey="temperature" />
            </LineChart>
        </ResponsiveContainer>
    );
}
export default HourlyChart
