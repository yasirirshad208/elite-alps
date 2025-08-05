import AccommodationHeader from "@/components/ui/Accommodation/AccommodationHeader";
import ApartmentListing from "@/components/ui/Accommodation/ApartmentListing";
import ApartmentSlider from "@/components/ui/ApartmentsSlider";
import MagazineListing from "@/components/ui/MagazineListing";

export default async function Apartment({ searchParams }: { searchParams: Promise<{ location?: string; price?: string; guest?: string; feature?: string; page?: string; checkin?: string; checkout?: string }> }) {
  const params = await searchParams;

  const location = params.location || "";
  const price = params.price || "";
  const guest = params.guest || "1";
  const feature = params.feature || ""
  const checkin = params.checkin || ""
  const checkout = params.checkout || ""
  const page = params.page || ""
    return(
        <>
        <AccommodationHeader page="apartments" image='/apartment-hero.webp' text="Elevate Your Stay in our Luxury Apartments"/>

        <ApartmentListing location={location} price={price} guest={guest} feature={feature} checkin={checkin} checkout={checkout} page={page} />

        <ApartmentSlider/>

        <MagazineListing bgColor={false}/>
        </>
    )
}