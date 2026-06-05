
import { useState } from "react";

interface Props {
    onSearch: (city: string) => void;
}


const SearchBar = ({onSearch}: Props) => {
    const [city, setCity] = useState("");
    return (
        <div className="flex gap-2">
            <input
                className="border rounded p-3 flex-1"
                value={city}
                placeholder="Search location"
                onChange={(e) =>
                    setCity(e.target.value)
                }
            />

            <button
                onClick={() => onSearch(city)}
                className="bg-blue-600 text-white px-5 rounded"
            >
                Search
            </button>
        </div>
    );
}
export default SearchBar
