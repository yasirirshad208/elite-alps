import AccommodationHeader from "@/components/ui/Accommodation/AccommodationHeader";
import ApartmentListing from "@/components/ui/Accommodation/ApartmentListing";
import ApartmentSlider from "@/components/ui/ApartmentsSlider";
import MagazineListing from "@/components/ui/MagazineListing";

export default async function Apartment({ searchParams }: { searchParams: Promise<{ location?: string; minPrice?: string; maxPrice?: string; guest?: string; feature?: string; page?: string; checkin?: string; checkout?: string }> }) {
  const params = await searchParams;

  const location = params.location || "";
  const minPrice = params.minPrice || "0";
  const maxPrice = params.maxPrice || "300000";
  const guest = params.guest || "0";
  const feature = params.feature || ""
  const checkin = params.checkin || ""
  const checkout = params.checkout || ""
  const page = params.page || ""


    return(
        <>
        <AccommodationHeader location={location} minPrice={minPrice} maxPrice={maxPrice} guest={guest} checkin={checkin} checkout={checkout} page="apartments" image='/apartment-hero.webp' text="Elevate Your Stay in our Luxury Apartments"/>

        <ApartmentListing location={location} minPrice={minPrice} maxPrice={maxPrice} guest={guest} feature={feature} checkin={checkin} checkout={checkout} page={page} />

        <ApartmentSlider/>

        <MagazineListing bgColor={false}/>
        </>
    )
}