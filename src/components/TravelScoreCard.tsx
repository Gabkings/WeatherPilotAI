


interface Props {
    score: number;
}

const TravelScoreCard = ({score}: Props) => {
    const getStatus = () => {
        if (score > 80) return "Excellent";
        if (score > 60) return "Good";
        if (score > 40) return "Fair";
        return "Poor";
    };

    return (
        <div className="bg-blue-50 rounded-xl p-5 shadow">
            <h3 className="font-semibold text-lg">
                Travel Score
            </h3>

            <div className="text-4xl font-bold mt-3">
                {score}
            </div>

            <p className="text-gray-600 mt-2">
                {getStatus()} conditions for travel
            </p>
        </div>
    );
}
export default TravelScoreCard
