export const getCoordinates = async (
    city: string
) => {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`
    );

    const data = await response.json();

    return {
        lat: Number(data[0].lat),
        lon: Number(data[0].lon),
    };
};