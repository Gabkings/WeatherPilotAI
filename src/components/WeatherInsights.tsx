

interface Props {
    insight: string;
}

const WeatherInsights = ({insight}:Props) => {
    return (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-2">
                AI Weather Insight
            </h3>

            <p className="text-gray-700">
                {insight}
            </p>
        </div>
    );
}
export default WeatherInsights
