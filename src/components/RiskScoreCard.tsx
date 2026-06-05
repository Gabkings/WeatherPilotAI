
interface Props {
    score: number;
}

const RiskScoreCard = ({score}: Props) => {
    const getRisk = () => {
        if (score > 75) return "High";
        if (score > 50) return "Moderate";
        return "Low";
    };

    return (
        <div className="bg-red-50 rounded-xl p-5 shadow">
            <h3 className="font-semibold text-lg">
                Weather Risk
            </h3>

            <div className="text-4xl font-bold mt-3">
                {score}
            </div>

            <p className="text-gray-600 mt-2">
                {getRisk()} Risk Level
            </p>
        </div>
    );
}
export default RiskScoreCard
