import AccommodationHeader from "@/components/ui/Accommodation/AccommodationHeader";
import ChaletListing from "@/components/ui/Accommodation/ChaletListing";
import ChaletsSlider from "@/components/ui/ChaletsSlider";
import MagazineListing from "@/components/ui/MagazineListing";

export default async function Chalets({ searchParams }: { searchParams: Promise<{ location?: string; price?: string; guest?: string; feature?: string; page?: string }> }) {
  const params = await searchParams;

  const location = params.location || "";
  const price = params.price || "";
  const guest = params.guest || "1";
  const feature = params.feature || ""
    return(
        <>
        <AccommodationHeader page="chalets" image='/chalet-hero.webp' text="Chalet Living in Harmony with Nature"/>

        <ChaletListing location={location} price={price} guest={guest} feature={feature}/>

        <ChaletsSlider />

        <MagazineListing bgColor={false}/>
        </>
    )
}