import AccommodationHeader from "@/components/ui/Accommodation/AccommodationHeader";
import ChaletListing from "@/components/ui/Accommodation/ChaletListing";
import ChaletsSlider from "@/components/ui/ChaletsSlider";
import MagazineListing from "@/components/ui/MagazineListing";

export default async function Chalets({ searchParams }: { searchParams: Promise<{ location?: string; minPrice?: string; maxPrice?: string; guest?: string; feature?: string; page?: string; checkin?: string; checkout?: string }> }) {
  const params = await searchParams;

  const location = params.location || "";
  const minPrice = params.minPrice || "";
  const maxPrice = params.maxPrice || "300000";
  const guest = params.guest || "0";
  const feature = params.feature || ""
  const checkin = params.checkin || ""
  const checkout = params.checkout || ""
  const page = params.page || ""



  return (
    <>
      <AccommodationHeader location={location} minPrice={minPrice} maxPrice={maxPrice} guest={guest} checkin={checkin} checkout={checkout} page="chalets" image='/chalet-hero.webp' text="Chalet Living in Harmony with Nature" />

      <ChaletListing location={location} minPrice={minPrice} maxPrice={maxPrice} guest={guest} feature={feature} checkin={checkin} checkout={checkout} page={page} />

      <ChaletsSlider />

      <MagazineListing bgColor={false} />
    </>
  )
}