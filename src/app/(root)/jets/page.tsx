import MagazineListing from "@/components/ui/MagazineListing";
import TransferHero from "@/components/ui/Transfer/TransferHero";
import VehicleListing from "@/components/ui/Transfer/VehicleListing";

export default async function Jet({ searchParams }: { searchParams: Promise<{ departure?: string; destination?: string; passengers?: string; feature?: string; page?: string }> }) {
  const params = await searchParams;

  const departure = params.departure || "";
  const destination = params.destination || "";
  const passengers = params.passengers || "";
    return (
        <>
            <TransferHero page="jets" image="jet-hero.webp" text="Arrive in Style with Our Private Jet Services" />
            <VehicleListing departure={departure} destination={destination} passengers={passengers} page="1" current="jets" />

            
                <MagazineListing />



        </>
    )
}