import MagazineListing from "@/components/ui/MagazineListing";
import TransferHero from "@/components/ui/Transfer/TransferHero";
import VehicleListing from "@/components/ui/Transfer/VehicleListing";

export default async function Helicopters({ searchParams }: { searchParams: Promise<{ departure?: string; destination?: string; passengers?: string; feature?: string; page?: string }> }) {
  const params = await searchParams;

  const departure = params.departure || "";
  const destination = params.destination || "";
  const passengers = params.passengers || "";
    return (
        <>
            <TransferHero page="helicopters" image="helicopter-hero.webp" text="Reach New Altitudes Helicopter Transportation" />
            <VehicleListing departure={departure} destination={destination} passengers={passengers} page="1" current="helicopters" />

            <MagazineListing />



        </>
    )
}