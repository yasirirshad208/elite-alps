"use client"
// import ChaletsForm from "@/components/ChaletsForm";
import ExperienceMedia from "@/components/ExperienceMedia";
import MapComponent from "@/components/MapComponent";
import ShareBtn from "@/components/ShareBtn";
import AccommodationForm from "@/components/ui/Accommodation/AccommodationForm";
import HotelRoom from "@/components/ui/Accommodation/HotelRoom";
import ChaletsKeyFeatures from "@/components/ui/ChaletsKeyFeatures";
import ChaletsSlider from "@/components/ui/ChaletsSlider";
import Faqs from "@/components/ui/Faqs";
import SubMenu from "@/components/ui/SubMenu";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { LuWarehouse } from "react-icons/lu";




export default function BookChalet({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    // const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [openForm, setOpenForm] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [activeId, setActiveId] = useState('details');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `http://localhost:5000/api/accommodations/${slug}`
    //             );
    //             setData(response.data);
    //             console.log(response.data.price.highSeason)
    //         } catch (err) {
    //             setError("Failed to fetch data.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, [params.slug]);

    // if (loading) return <div className="text-center md:mt-20 mt-12">Loading...</div>;
    // if (error) return <p className="text-red-500 md:mt-20 mt-10 text-center">{error}</p>;



    const CategoryIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <mask
                id="mask0_1385_8460"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
            >
                <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1385_8460)">
                <path
                    d="M16.7 14.5L20.5 11.25L23.5 11.5L19.1 15.325L20.4 21L17.85 19.45L16.7 14.5ZM14.35 7.2L13.3 4.75L14.45 2L16.75 7.425L14.35 7.2ZM4.325 21L5.95 13.975L0.5 9.25L7.7 8.625L10.5 2L13.3 8.625L20.5 9.25L15.05 13.975L16.675 21L10.5 17.275L4.325 21Z"
                    fill="#1C1B1F"
                />
            </g>
        </svg>
    );


    const categories = [
        { id: 1, title: "Category", subtitle: "★★★★★ Luxury Hotel", icon: CategoryIcon },
        { id: 2, title: "42 Suits", subtitle: "Rooms & premium suites", icon: CategoryIcon },
        { id: 3, title: "3 Restaurants", subtitle: "Michelin-starred dining", icon: CategoryIcon },
        { id: 4, title: "Alpine Spa", subtitle: "Resort & Spa", icon: CategoryIcon },
    ];

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short', // use 'long' if you want full month name
        });
    };

    const features = [
        {
            id: 1,
            text: "Direct ski-in/ski-out access to Bellecôte slope",
        },
        {
            id: 2,
            text: "Luxury spa and wellness center with heated pools",
        },
        {
            id: 3,
            text: "Fine dining restaurants offering gourmet cuisine",
        },
        {
            id: 4,
            text: "Panoramic mountain views from every suite",
        },
    ];

    const hotels = [
        {
            name: "Mountain View Hotel",
            features: ["Free WiFi", "Luxury Spa", "Ski-in/Ski-out"],
            description:
                "Experience breathtaking mountain views with modern amenities and cozy rooms.",
            image: "/hotel-3.jpg",
        },
        {
            name: "Seaside Resort",
            features: ["Private Beach", "Fine Dining", "Infinity Pool"],
            description:
                "Relax by the ocean in our luxurious seaside resort with world-class facilities.",
            image: "/hotel-2.png",
        },
        {
            name: "City Center Inn",
            features: ["Central Location", "Business Lounge", "24/7 Service"],
            description:
                "Stay in the heart of the city with easy access to shopping, dining, and nightlife.",
            image: "/hotel-1.jpg",
        },
    ];

    const dining = [
        {
            name: "Le Sommet",
            image: "/hotel-1.jpg",
            description:
                "Michelin-starred fine dining with innovative Alpine cuisine and panoramic mountain views.",
        },
        {
            name: "Chalet du Lac",
            image: "/hotel-2.png",
            description:
                "A lakeside retreat offering authentic Savoyard cuisine with cozy interiors and stunning views.",
        },
        {
            name: "Mont Blanc Suite",
            image: "/hotel-3.jpg",
            description:
                "Luxury suite with modern alpine decor, private spa, and breathtaking Mont Blanc vistas.",
        },
    ];

    const hotelImages: string[] = [
  "/hotel-1.jpg",
  "/hotel-2.png",
  "/hotel-3.jpg",
  "/hotel-1.jpg",
  "/hotel-2.png",
  "/hotel-3.jpg",
];

    const keyFeatures = [
  "Spa",
  "Pool",
  "Sauna",
  "Fireplace",
  "Balcony",
  "Gym",
  "Wi-Fi",
  "Parking",
  "Butler",
  "Concierge",
  "Wine Cellar",
  "Helipad",
  "Jacuzzi",
  "Terrace",
  "Lounge",
];



    const sections = [
        { id: 'details', label: 'Details' },
        { id: 'rooms', label: 'Rooms & Suits' },
        { id: 'location', label: 'Location' },
    ];

    const handleScrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveId(id);
        }
    };



    if (openForm) {
        return (
            <div className="mt-[115px] px-4">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-[40px] w-[40px] rounded-[10000px] border-2 border-[#e3e3e3] flex justify-center items-center cursor-pointer" onClick={() => { setOpenForm(false) }}><FaArrowLeft className="text-[16px] text-[#121212]" /></div>
                    <div>Back</div>
                </div>

                <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-4 " style={{ "boxShadow": "0px 4px 12px 0px #9A9A9A1A" }}>


                    <AccommodationForm accommodationType="Hotel" dateRanges={[
                        {
                            price: "200",
                            start: "2025-06-20",
                            end: "2025-06-25",
                        },
                        {
                            price: "300",
                            start: "2025-07-01",
                            end: "2025-07-05",
                        },
                    ]} name="L’Apogée Courchevel" location="Courchevel 1850, France" id="78347832" />

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
                    <span className="text-[#666D80] text-[16px]">Start from</span>
                    <span className="text-[#121212] text-[16px] font-[600]">
                        Check You Rates
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
                            <Link href={"/hotels"} className="text-[#666d86] font-regular underline">Hotel</Link>
                            <IoIosArrowBack className="text-[#121212]" />
                            <span className="text-[#121212] font-regular">Detailed Hotel</span>
                        </div>
                    </div>

                    <div className="absolute w-full left-0 sm:pt-7 sm:pb-2 px-4 sm:px-0 sm:static top-[110px] z-19 sm:top-auto">
                        <div className="flex justify-between items-center">
                            <div className="mb-1 sm:hidden block">
                                <Link href="/chalets">
                                    <div className="h-[40px] w-[40px] rounded-[10000px] bg-white border border-[#e3e3e3] flex justify-center items-center cursor-pointer">
                                        <FaArrowLeft className="text-[16px] text-[#121212]" />
                                    </div>
                                </Link>
                            </div>
                            <div className="sm:flex items-center gap-3 hidden">
                                <h2 className="font-[600] text-[32px] text-[#121212] md:text-[40px] md:mb-3 mb-2">
                                    L’Apogée Courchevel
                                </h2>
                                <span className="text-[20px] text-[#272835] md:block hidden">
                                    Courchevel 1850, France
                                </span>
                            </div>
                            <div>
                                <ShareBtn />
                            </div>
                        </div>
                    </div>



                    <ExperienceMedia images={hotelImages} url={``} />
                </div>
            </section>

           

             <div className="flex flex-col gap-3 sm:hidden px-4 my-[18px]">
                <h2 className="font-[600] text-[20px] text-[#121212] ">
                     L’Apogée Courchevel
                </h2>
                <span className="font-large text-[#272835] ">
                     Courchevel 1850, France
                </span>
            </div>



            

            <section id="details">
                <div className="container mx-auto">
                    <div className="flex gap-10  md:flex-row flex-col">
                        <div className=" w-full ">
<SubMenu items={sections} activeId={activeId} onClick={handleScrollTo} />
                            <div>
                                <h2 className="text-[#121212] font-large font-semibold mb-4">
                                    About The Hotel
                                </h2>

                                {/* {dynamicParagraphs.map((paragraph: string, index: number) => ( */}
                                <p
                                    // key={index}
                                    className="font-medium text-[#666D80] md:mb-4 sm:mb-3 mb-3"
                                >
                                    Welcome to Serenity Chalet, the ultimate retreat nestled in the heart of [location]. Our charming chalet offers a tranquil haven for couples, families, and friends seeking relaxation and adventure. Step into our warm and inviting space, crafted to provide a home-away-from-home experience with soft wood accents, plush furnishings, and a stone fireplace. Unwind in our spacious living areas, complete with comfortable seating, a fully-equipped kitchen, and [number] bedrooms with plush bedding and en-suite bathrooms.
                                    <br />
                                    Enjoy breathtaking views of [nearby landmark/landscape] from our expansive deck, perfect for sunrise coffee breaks, al fresco dining, and stargazing. Relax in our private hot tub, gather around the outdoor BBQ and fire pit, or explore nearby hiking trails, skiing, and water sports. Whether seeking relaxation, adventure, or quality time with loved ones, Serenity Chalet is your perfect haven. Our amenities include [list amenities]. Book your stay and experience the ultimate getaway. Contact us for rates, packages, and availability. Come and escape to Serenity Chalet, where every moment is a chance to unwind, reconnect, and create lasting memories.
                                </p>
                                {/* ))} */}
                            </div>

                            <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>

                            <div className=" font-inter md:mt-[50px] mt-[40px]" id="details">

                                <div>
                                    <h2 className="text-[#121212] font-semibold mb-4 font-large">
                                        At Glance
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                        {categories.map((item) => (
                                            <div
                                                key={item.id}
                                                className="p-3 border border-[#e3e3e3] rounded-[24px]"
                                            >
                                                <div className="px-3 py-2">{item.icon}</div>

                                                <div className="mt-6">
                                                    <div className="text-[#121212] text-[20px] font-semibold leading-[120%]">
                                                        {item.title}
                                                    </div>

                                                    <div className="text-[#666D80] text-[16px] leading-[140%]">
                                                        {item.subtitle}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>

                                <div id="faqs">
                                    <h2 className="text-[#121212] font-semibold mb-4 font-large">
                                        Why Stay Here
                                    </h2>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {features.map((feature) => (
                                            <div
                                                key={feature.id}
                                                className="p-2 flex items-center self-stretch gap-3 bg-[#F8FAFB] rounded-[12px]"
                                            >
                                                <div className="px-3 py-2 bg-white">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <mask
                                                            id={`mask-${feature.id}`}
                                                            style={{ maskType: "alpha" }}
                                                            maskUnits="userSpaceOnUse"
                                                            x="0"
                                                            y="0"
                                                            width="24"
                                                            height="24"
                                                        >
                                                            <rect width="24" height="24" fill="#D9D9D9" />
                                                        </mask>
                                                        <g mask={`url(#mask-${feature.id})`}>
                                                            <path
                                                                d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                                                                fill="#1C1B1F"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>

                                                <div className="text-[18px] text-[#121212] bg-transparent">
                                                    {feature.text}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>

                                <div id="rooms">

                                    <div className="flex justify-between gap-4 flex-wrap items-center mb-4 w-full">
                                        <h2 className="text-[#121212] font-semibold font-large">
                                            Rooms & Suites Information
                                        </h2>

                                        <button className="px-4 py-2 text-[#121212] rounded-[12px] border border-[#E3E3E3]">
                                            Ask About Availibity
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6">
                                        {hotels.map((hotel, index) => (
                                            <HotelRoom key={index} {...hotel} />
                                        ))}
                                    </div>

                                </div>

                               
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 mt-[24px]">
                                    <div>
                                        <div className="text-[18px] text-[#121212] text-semibold leading-[120%]">
                                            Dining
                                        </div>

                                        <div className="mt-4 flex flex-col gap-4">
                                            {dining.map((hotel, index) => (
                                                <div key={index} className="flex gap-2">
                                                    <div>
                                                        <img
                                                            src={hotel.image}
                                                            className="w-[128px] h-[64px] rounded-[12px] object-cover"
                                                            alt={hotel.name}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="text-[18px] text-[#121212] font-semibold leading-[120%]">
                                                            {hotel.name}
                                                        </div>
                                                        <div className="text-[#666D80] leading-[140%] text-[14px]">
                                                            {hotel.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-4 sm:mt-0">
                                        <div className="text-[18px] text-[#121212] text-semibold leading-[120%]">
                                            Spa
                                        </div>

                                        <div className="mt-4 flex flex-col gap-4">
                                            {dining.map((hotel, index) => (
                                                <div key={index} className="flex gap-2">
                                                    <div>
                                                        <img
                                                            src={hotel.image}
                                                            className="w-[128px] h-[64px] rounded-[12px] object-cover"
                                                            alt={hotel.name}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="text-[18px] text-[#121212] font-semibold leading-[120%]">
                                                            {hotel.name}
                                                        </div>
                                                        <div className="text-[#666D80] leading-[140%] text-[14px]">
                                                            {hotel.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>


                                 <div className="my-[20px] my-[24px] h-[1px] w-full bg-[#e3e3e3]"></div>

                                             <div>
                                    <h2 className="text-[#121212] font-semibold mb-4 font-large">
                                        Key Features
                                    </h2>
                                    <div className="grid grid-cols-2 gap-6">
                                        {keyFeatures.map((item: string, index: number) => {


                                            return (
                                                <div key={index} className="flex gap-3 items-center">
                                                    {/* Render the English feature name */}
                                                    <span className="text-[#666D80] font-regular font-semibold">
                                                        {item}
                                                    </span>
                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="md:max-w-[420px] sm:block hidden w-full mt-[30px]">
                            <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-3.5 md:sticky md:top-[10px]" style={{ "boxShadow": "0px 4px 12px 0px #9A9A9A1A" }}>


                                <AccommodationForm accommodationType="Hotel" dateRanges={[
                                    {
                                        price: "200",
                                        start: "2025-06-20",
                                        end: "2025-06-25",
                                    },
                                    {
                                        price: "300",
                                        start: "2025-07-01",
                                        end: "2025-07-05",
                                    },
                                ]} name="L’Apogée Courchevel" location="Courchevel 1850, France" id="78347832" />

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
                        Hotel Location
                    </h2>

                    <MapComponent addresss="Courchevel 1850, France" latitude="47.6062" longitude="-122.3321" />


                </div>
            </section>


            <section className="md:mt-[50px] mt-[40px]">
                <ChaletsSlider
                />
            </section>
        </>
    );
}
