"use client"
// import ChaletsForm from "@/components/ChaletsForm";
import ExperienceMedia from "@/components/ExperienceMedia";
import MapComponent from "@/components/MapComponent";
import ShareBtn from "@/components/ShareBtn";
import BookAccommodationSkeleton from "@/components/skeletons/BookAccommodationSkeleton";
import AccommodationForm from "@/components/ui/Accommodation/AccommodationForm";
import ApartmentSlider from "@/components/ui/ApartmentsSlider";
import ChaletsKeyFeatures from "@/components/ui/ChaletsKeyFeatures";
import Faqs from "@/components/ui/Faqs";
import SubMenu from "@/components/ui/SubMenu";
import { getAddressFromCoords } from "@/lib/getAddressFormCoods";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { LuWarehouse } from "react-icons/lu";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


interface Sejour {
    date_debut: string[];
    date_fin: string[];
    montant: string[];
}

export default function BookApartment({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [openForm, setOpenForm] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [activeId, setActiveId] = useState('details');
        const [address, setAddress] = useState<string>('');
    useEffect(() => {
        const fetchData = async () => {
            try {


                // Fetch property details
                const { data: propertyData } = await axios.get(
                    `https://elite-experience-backend.onrender.com/api/accommodations/property/detail/${slug}`
                );



                setData(propertyData);
            } catch (err) {
                setError("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params.slug]);

      useEffect(() => {
            if (
                data &&
                data.data &&
                data.data.propertyDetail &&
                data.data.propertyDetail.message &&
                data.data.propertyDetail.message.detail &&
                data.data.propertyDetail.message.detail[0]?.latitude &&
                data.data.propertyDetail.message.detail[0]?.longitude
            ) {
                async function fetchAddress() {
                    const { latitude, longitude } = data.data.propertyDetail.message.detail[0];
                    const addr = await getAddressFromCoords(latitude[0], longitude[0]);
                    setAddress(addr);
                }
    
                fetchAddress();
            }
        }, [data]);

   if (loading) return <BookAccommodationSkeleton/>;
    if (error) return <p className="text-red-500 md:mt-20 mt-10 text-center">{error}</p>;


    const detail = data.data.propertyDetail.message.detail[0]
    const featuresArray = [
        ...(detail.node_equipement_general?.[0]?.equipement_general || []).map((item: any) => {
            const englishLabel = item?.libelle?.find((l: any) => l?.$?.lang === "en");
            return englishLabel?._ || "";
        }),
        ...(detail.node_espace_loisir?.[0]?.espace_loisir || []).map((item: any) => {
            const englishLabel = item?.libelle?.find((l: any) => l?.$?.lang === "en");
            return englishLabel?._ || "";
        }),
        ...(detail.node_situation?.[0]?.situation || []).map((item: any) => {
            const englishLabel = item?.libelle?.find((l: any) => l?.$?.lang === "en");
            return englishLabel?._ || "";
        })
    ]

    const fileOrderString =
        data.data.propertyDetail.message.detail[0].fileorder[0];
    const fileOrderArray = fileOrderString.split(",");

    const dateData: Sejour[] =
        data.data.extraPropertyData.message.sejours[0].sejour;

    const dateRanges = dateData
        .filter((sejour) => sejour.montant[0] !== "0.00" && sejour.montant[0] !== "")
        .map((sejour, index) => ({
            id: index,
            start: sejour.date_debut[0]?.trim() || "",
            end: sejour.date_fin[0]?.trim() || "",
            price: sejour.montant[0]?.trim() || "0.00",
        }));

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short', // use 'long' if you want full month name
        });
    };

    const sections = [
        { id: 'details', label: 'Details' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'location', label: 'Location' },
        { id: 'faqs', label: 'FAQ' },
    ];

    const handleScrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveId(id);
        }
    };

    const faqs = [
        {
            question: "What utilities are included in the apartment rent?",
            answer: "Utilities included vary by apartment. Some may cover water, electricity, and internet, while others require tenants to pay separately."
        },
        {
            question: "Is parking available for tenants?",
            answer: "Many apartments offer on-site parking or a dedicated parking space, but availability depends on the building. Some may charge extra for parking."
        },
        {
            question: "Are apartments furnished or unfurnished?",
            answer: "This depends on the property. Some apartments come fully furnished, while others may be semi-furnished or unfurnished."
        },
        {
            question: "Can I keep pets in the apartment?",
            answer: "Pet policies vary by landlord and building. Some allow pets with an additional deposit, while others have restrictions on size or breed."
        },
        {
            question: "How does the security deposit work?",
            answer: "A security deposit is collected before moving in and is typically refunded after the lease ends, provided there is no damage to the property."
        }
    ];
    if (openForm) {
        return (
            <div className="mt-[115px] px-4">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-[40px] w-[40px] rounded-[10000px] border-2 border-[#e3e3e3] flex justify-center items-center cursor-pointer" onClick={() => { setOpenForm(false) }}><FaArrowLeft className="text-[16px] text-[#121212]" /></div>
                    <div>Back</div>
                </div>

                <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-4 " style={{ "boxShadow": "0px 4px 12px 0px #9A9A9A1A" }}>


                    <AccommodationForm accommodationType="Chalet" dateRanges={dateRanges} name={data.data.propertyDetail.message.detail[0].nom_bien_en[0]} location={data.data.propertyDetail.message.detail[0].secteur[1]._} id={data.data.propertyDetail.message.detail[0].id_bien} />

                </div>
            </div>
        )
    }


    return (
        <>
            <div
                className="sm:hidden fixed bottom-0 left-0 w-full z-50 bg-white px-4 py-3 border-t border-gray-200 flex items-center justify-between"

            >
                <div className="flex flex-col gap-1">
                    <span className="text-[#666D80] text-[16px]">Starts from</span>
                    <span className="text-[#121212] text-[16px] font-[600]">
                        €{parseFloat(dateRanges[0].price)
                            .toFixed(0)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / Week
                    </span>
                </div>

                <button className="cursor-pointer py-[10px] px-3 bg-[#0074ec] rounded-[12px] text-[16px] font-[600] text-white" onClick={() => {
                    setOpenForm(true)
                    window.scrollTo({ top: 30, behavior: 'smooth' }) // ⬅ Scroll to top smoothly
                }}>
                    Make an Enquiry
                </button>
            </div>
            <section className="md:mt-[140px] mt-[80px]">
                <div className="sm:container mx-auto">

                    <div className="sm:block hidden">
                        <div className="flex items-center gap-1 container">
                            <Link href={"/apartments"} className="text-[#666d86] font-regular underline">Apartments</Link>
                            <IoIosArrowBack className="text-[#121212]" />
                            <span className="text-[#121212] font-regular">Detailed Apartment</span>
                        </div>
                    </div>

                    <div className="absolute w-full left-0 sm:pt-7 sm:pb-2 px-4 sm:px-0 sm:static top-[110px] z-19 sm:top-auto">
                        <div className="flex justify-between items-center">
                            <div className=" sm:hidden block">
                                <Link href="/chalets">
                                    <div className="h-[40px] w-[40px] rounded-[10000px] bg-white border border-[#e3e3e3] flex justify-center items-center cursor-pointer">
                                        <FaArrowLeft className="text-[16px] text-[#121212]" />
                                    </div>
                                </Link>
                            </div>
                            <div className="sm:flex justify-start items-start gap-3 flex-col gap-0 hidden md:mb-5 mb-3.5">
                                <h2 className="font-[600] text-[32px] text-[#121212] md:text-[40px] leading-[120%]">
                                    {data.data.propertyDetail.message.detail[0].nom_bien_en[0]}
                                </h2>
                                <div className="flex items-center gap-1  text-[#272835] ">
                                   {address ? (
                                                                          <>
                                                                          <GrLocation className="w-[21px] h-[21px]" />
                                                                          <span className="text-[20px] text-[#272835] md:block hidden">{address}</span>
                                                                      </>
                                                                      ) : (
                                                                          <SkeletonTheme baseColor="#d4d4d4" highlightColor="#e5e5e5">
                                                                              <Skeleton width={180} height={18} />
                                                                          </SkeletonTheme>
                                                                      )}
                                                                       </div>
                            </div>
                            <div>
                                <ShareBtn />
                            </div>
                        </div>
                    </div>



                    <ExperienceMedia images={fileOrderArray} url={`https://admin.cimalpes.com/photos/bien/${slug}/`} />
                </div>
            </section>

             <div className="flex flex-col justify-start items-start gap-3 sm:hidden px-4 mt-[24px] mb-[20px]">
                            <h2 className="font-[600] text-[20px] text-[#121212] leading-[120%] ">
                                {data.data.propertyDetail.message.detail[0].nom_bien_en[0]}
                            </h2>
                            <div className="flex gap-1  text-[#272835] ">
                               {address ? (
                                                                      <>
                                                                      <GrLocation className="w-[21px] h-[21px]" />
                                                                      <span className="text-[20px] text-[#272835] md:block hidden">{address}</span>
                                                                  </>
                                                                  ) : (
                                                                      <SkeletonTheme baseColor="#d4d4d4" highlightColor="#e5e5e5">
                                                                          <Skeleton width={180} height={18} />
                                                                      </SkeletonTheme>
                                                                  )}</div>
                        </div>

            

            <section id="details">
                <div className="container mx-auto">
                    <div className="flex gap-10 md:justify-between   md:flex-row flex-col">
                        <div className=" w-full md:max-w-[888px]">
<SubMenu items={sections} activeId={activeId} onClick={handleScrollTo} />
                            <div className="font-inter ">
                                <h2 className="text-[#121212] font-large font-semibold mb-4">
                                    About The Apartment
                                </h2>

                                {/* {dynamicParagraphs.map((paragraph: string, index: number) => ( */}
                                <p
                                    // key={index}
                                    className="font-medium text-[#666D80] md:mb-4 sm:mb-3 mb-3 text-justify"
                                >
                                    {data.data.propertyDetail.message.detail[0].descriptif_court_en[0]}
                                </p>
                                {/* ))} */}
                            </div>
                            <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>
                            <div >
                                <ChaletsKeyFeatures data={featuresArray} />

                            </div>
                            <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>
                            <div >
                                <h2 className="text-[#121212] font-large font-semibold mb-4">
                                    Service Included
                                </h2>

                                <div className="flex justify-between gap-6">

                                    <div className="flex sm:gap-4 gap-3">
                                        <div>
                                            <LuWarehouse className="text-[26px] text-[#3d3d3d]" />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="text-[#121212] font-regular font-[600]">
                                                Housekeeping & Linen
                                            </div>
                                            {data.data.propertyDetail.message.detail[0].node_bien_service_personnel[0].bien_service_personnel.map((item: any, index: any) => {
                                                // Find the English label in the `libelle` array
                                                const englishLabel = item.libelle.find((label: any) => label.$.lang === "en");

                                                if (!englishLabel) {
                                                    return null; // Skip if no English label is found
                                                }

                                                return (
                                                    <div key={index} className="text-[#666D80] font-regular">
                                                        {englishLabel._} {/* Render the English label text */}
                                                    </div>
                                                );
                                            })}


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>
                            <div >
                                <h2 className="text-[#121212] font-large font-semibold mb-4" id="pricing">
                                    Price and Availability
                                </h2>
                                <div className="flex flex-col gap-3">

                                    {dateData
                                        .map((sejour, index) => {
                                            return sejour.montant[0] !== "0.00" && sejour.montant[0] !== "" ? (
                                                <div
                                                    key={index}
                                                    className="border border-[#DDF3EF] rounded-[12px] p-3 flex items-center justify-between"
                                                >
                                                    <span className="text-[#121212] font-medium font-[700]">{formatDate(sejour.date_debut[0])} - {formatDate(sejour.date_fin[0])}</span>
                                                    <button className="px-4 py-2 rounded-[12px] border-[#40C4AA] border text-[#40C4AA] bg-[#DDF3EF] font-medium font-[600]">
                                                        €
                                                        {parseFloat(sejour.montant[0])
                                                            .toFixed(0) // remove decimal
                                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} {/* add commas */}
                                                    </button>
                                                </div>
                                            ) : (
                                                <div
                                                    key={index}
                                                    className="border border-[#FADBE1] rounded-[12px] p-3 flex items-center justify-between"
                                                >
                                                    <span className="text-[#DF1C41] font-medium font-[700]">{formatDate(sejour.date_debut[0])} - {formatDate(sejour.date_fin[0])}</span>
                                                    <button className="px-4 py-2 rounded-[12px] border-[#DF1C41] border text-[#DF1C41] bg-[#FADBE1] font-medium font-[600]">
                                                        Booked
                                                    </button>
                                                </div>
                                            );
                                        })}






                                </div>
                            </div>

                            <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>

                            <div id="faqs">
                                <h2 className="text-[#121212] font-semibold mb-4 font-large">
                                    FAQ
                                </h2>
                                <Faqs faqs={faqs} />
                            </div>
                        </div>

                        <div className="md:max-w-[444px] sm:block hidden w-full mt-[30px]">
                            <div
                                className="border border-[#e3e3e3] bg-white rounded-[12px] p-3.5 md:sticky md:top-[10px]"
                                style={{ boxShadow: "0px 4px 12px 0px #9A9A9A1A" }}
                            >

                                <AccommodationForm accommodationType="Apartment" dateRanges={dateRanges} name={data.data.propertyDetail.message.detail[0].nom_bien_en[0]} location={data.data.propertyDetail.message.detail[0].secteur[1]._} id={data.data.propertyDetail.message.detail[0].id_bien} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>
            <section
                id="location"
            >
                <div className="container mx-auto">
                    <h2 className="text-[#121212] font-medium font-semibold lg:mb-5 mb-4">
                        Chalet Location
                    </h2>

                    <MapComponent addresss={data.data.propertyDetail.message.detail[0].nom_station2} latitude={data.data.propertyDetail.message.detail[0].latitude[0]} longitude={data.data.propertyDetail.message.detail[0].longitude[0]} />


                </div>
            </section>


            <section className="md:mt-[50px] mt-[40px]">
                <ApartmentSlider
                />
            </section>
        </>
    );
}
