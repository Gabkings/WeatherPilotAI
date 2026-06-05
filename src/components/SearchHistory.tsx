

interface Props {
    history: string[];
    onSelect: (location: string) => void;
}

const SearchHistory = ({history, onSelect,}: Props) => {
    if (!history.length) return null;
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5">
            <h3 className="font-semibold text-lg mb-3">
                Recent Searches
            </h3>

            <div className="flex flex-wrap gap-2">
                {history.map((item) => (
                    <button
                        key={item}
                        onClick={() => onSelect(item)}
                        className="px-3 py-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default SearchHistory
