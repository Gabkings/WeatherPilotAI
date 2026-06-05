


interface Props {
    score: number;
}

const FarmingScoreCard = ({score}: Props) => {
    const getRecommendation = () => {
        if (score > 80)
            return "Ideal farming conditions";
        if (score > 60)
            return "Good growing conditions";

        return "Monitor weather closely";
    };

    return (
        <div className="bg-green-50 rounded-xl p-5 shadow">
            <h3 className="font-semibold text-lg">
                Farming Score
            </h3>

            <div className="text-4xl font-bold mt-3">
                {score}
            </div>

            <p className="text-gray-600 mt-2">
                {getRecommendation()}
            </p>
        </div>
    );
}
export default FarmingScoreCard
