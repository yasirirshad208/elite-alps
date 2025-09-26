"use client"
// import { blogs } from "@/Data";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import {
    FaFacebookF,
} from "react-icons/fa";
import { IoIosArrowForward, IoIosLink } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import MagazineListing from "@/components/ui/MagazineListing";
import { AiFillInstagram } from "react-icons/ai";
import { PiTelegramLogoDuotone, PiWhatsappLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { useExperienceStore } from "@/stores/ExperienceStore";
import SocialShare from "@/components/ui/SocialShare";

export default function Magazine({ params }: { params: { slug: string } }) {
    const [data, setData] = useState<any>(null);
    const [blogs, setBlogs] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [magazineResponse] = await Promise.all([
                    axios.get(`http://localhost:5000/api/magazine/${params.slug}`)
                ]);

                setData(magazineResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params.slug]);

     const {
                magazines,
                fetchMagazines,
            } = useExperienceStore();
        
            useEffect(() => {
                if (magazines.length === 0) {
                    fetchMagazines();
                }
            }, [fetchMagazines, magazines.length]);

    const truncate = (input: string, maxWords: number) => {
        const words = input.split(" ");
        return words.length > maxWords ? words.slice(0, maxWords).join(" ") + "..." : input;
    };

    if (loading) {
        return <div className="text-center md:mt-20 mt-12">Loading...</div>;
    }
    return (
        <>
            <section className="md:mt-[120px] mt-[100px]">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center gap-1 font-inter">
                        <Link href="/">
                            <span className=" text-[16px] text-[#666D80] hover:underline">
                                Home
                            </span>
                        </Link>
                        <IoIosArrowForward className="w-[14px] h-[14px]" />
                        <Link href="/magazine">
                            <span className=" text-[16px] text-[#666D80] hover:underline">
                                Magazine
                            </span>
                        </Link>
                        <IoIosArrowForward className="w-[14px] h-[14px]" />
                        <span className=" text-[16px] text-[#121212] hover:underline">
                            {data.title}
                        </span>
                    </div>

                    <div className=" w-full flex flex-col items-center mt-[24px]">
                        <h2 className="heading-h1 text-black font-[700] max-w-[833px] text-center leading-[120%]">
                            {data.title}
                        </h2>

                        <div className="font-inter flex items-center gap-3 mt-6">
                            <img
                                src={"http://localhost:5000/" + data.author.image}
                                className="w-[32px] h-[32px] rounded-full"
                                alt=""
                            />
                            <div className="sm:text-[16px] text-[14px]">
                                {" "}
                                <span className="text-[#666D80]">By</span>{" "}
                                <span className="text-black font-semibold text-black">
                                    {data.author.name}
                                </span>{" "}
                            </div>

                            <div className="sm:text-[16px] text-[14px] text-black sm:ml-2 ml-1">
                                {new Intl.DateTimeFormat("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                }).format(new Date(data.createdAt))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="md:mt-[50px] mt-[40px]">
                <div className="container mx-auto flex lg:justify-between lg:flex-row flex-col">
                    <div className="lg:w-[66%] w-full">
                        <div className="w-full">
                            <img
                                src={"http://localhost:5000/" + data.image}
                                className="w-full h-[420px] object-cover rounded-[20px]"
                                alt=""
                            />
                        </div>

                        <div className="font-inter md:mt-10 mt-8">
                            <div className="prose prose-lg max-w-none article-blocks">
                                <ReactMarkdown
                                >
                                    {data.blogDetails}
                                </ReactMarkdown>
                            </div>
                        </div>


                        <SocialShare/>
                    </div>
                    <div className="lg:w-[33%] w-full ">
                        <div className="p-3 bg-white border border-[#e3e3e3] rounded-[12px]">
                            <div className="text-[20px] font-semibold mb-6">
                                Trending Articles
                            </div>

                            <div className=" flex flex-col gap-y-6 bg-[#fff]">

                                {magazines.slice(0, 4).map((item: any) => {
                                    const readTime = Math.floor(Math.random() * (10 - 4 + 1)) + 4;

                                    return (
                                        <Link href={`/magazine/${item.slug}`}>
                                            <div className="flex gap-3" key={item._id}>
                                            <div>
                                                <img
                                                    src={"http://localhost:5000/" + item.image}
                                                    className="w-[120px] h-[80px] rounded-[8px] object-cover"
                                                />
                                            </div>

                                            <div className="flex flex-col justify-center">
                                                <div className="text-[14px] font-inter">
                                                    <span className="text-[#0074ec]">{item.category}</span>
                                                    <span className="text-[#3d3d3d]"> - {readTime} min read</span>
                                                </div>

                                                <div
                                                    className="text-[16px] text-[#121212] mt-2"
                                                    style={{ letterSpacing: "1px" }}
                                                >
                                                    {truncate(item.title, 7)}
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    );
                                })}



                            </div>
                        </div>

                        <div className="mt-6 bg-white border border-[#e3e3e3] rounded-[12px] p-3">
                            <div className="text-[18px] font-semibold mb-6">
                                Post Tags
                            </div>

                            <div className="font-inter flex items-center gap-4">
                                {data.postTags.map((tag: string, index: number) => {
                                    // Array of predefined colors
                                    const textColors = ["text-[#267DFF]", "text-[#6941c6]", "text-[#4189c6]"];
                                    const bgColors = ["bg-[#eef4ff]", "bg-[#f9f5ff]", "bg-[#eef4ff]"];

                                    // Calculate the color based on the index
                                    const textColor = textColors[index % textColors.length];
                                    const bgColor = bgColors[index % bgColors.length];

                                    return (
                                        <div
                                            key={index}
                                            className={`px-4 py-1 rounded-[50px] ${textColor} ${bgColor}`}
                                        >
                                            {tag}
                                        </div>
                                    );
                                })}
                            </div>


                        </div>


                    </div>
                </div>
            </section>

            <section className="mt-[40px] md:mt-[50px] lg:mt-[60px]">
                <MagazineListing
                    heading="Pickup where you left off"
                    headline="Join us as we uncover the perfect blend of comfort and adventure for your next alpine getaway"
                />
            </section>


        </>
    );
}

