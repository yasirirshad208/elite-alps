export async function getAddressFromCoords(latitude: string, longitude: string): Promise<string> {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1&accept-language=en`;

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Elite-Alps (yasirirshad208@gmail.com)", // required by Nominatim
      },
    });

    const data = await res.json();

    if (!data?.address) return "Address not found";

    const addr = data.address;

    const house = addr.house_number || "";
    const road = addr.road || addr.pedestrian || addr.neighbourhood || "";
    const city =
      addr.city || addr.town || addr.village || addr.municipality || "";
    const state = addr.state || "";
    const postcode = addr.postcode || "";
    const country = addr.country_code
      ? addr.country_code.toUpperCase()
      : addr.country || "";

    const shortAddress = [
      [house, road].filter(Boolean).join(" "),
      city,
      [state, postcode].filter(Boolean).join(" "),
      country,
    ]
      .filter(Boolean)
      .join(", ");

    return shortAddress || "Address not found";
  } catch (error) {
    console.error("Reverse geocoding error:", error);
    return "Unable to fetch address";
  }
}
