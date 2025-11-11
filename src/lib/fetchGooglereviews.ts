// lib/fetchGoogleReviews.ts
export interface GoogleReview {
  user: string;
  rating: number;
  text: string;
  date: string;
}

export async function fetchGoogleReviews(dataId: string): Promise<GoogleReview[]> {
  const apiKey = process.env.NEXT_PUBLIC_SERPAPI_KEY;
  if (!apiKey) throw new Error("Missing NEXT_PUBLIC_SERPAPI_KEY in environment variables");

  const url = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${dataId}&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error fetching reviews: ${response.statusText}`);

    const data = await response.json();

    

    const reviews: GoogleReview[] = (data.reviews || []).map((r: any) => ({
      user: r.user?.name || "Anonymous",
      rating: r.rating || 0,
      text: r.snippet || "",
      date: r.date || "",
    }));

    return reviews;
  } catch (err) {
    console.error("Failed to fetch Google reviews:", err);
    return [];
  }
}
