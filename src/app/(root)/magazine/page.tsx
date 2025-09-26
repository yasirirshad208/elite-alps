import ArticleCard from "@/components/ui/ArticleCard";
import CategoriesFilter from "@/components/ui/catagoriesFilter";
import SearchInput from "@/components/ui/SearchInput";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{
        search?: string;
        category?: string;
        page?: string;
    }>;
}) {
    const params = await searchParams;

    const query = new URLSearchParams({
        ...(params || {}),
        isPublic: 'true', // ensure it's a string
    });

    const response = await fetch(
        `http://localhost:5000/api/magazine?${query.toString()}`,
        { cache: 'no-store' }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch magazine data');
    }

    const data = await response.json();


    return (
        <>
            <section >
                <div
                    className="container-padding relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("/magazine.webp")` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 z-0"></div>

                    {/* Content */}
                    <div className="flex items-center justify-center gap-3 flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10">
                        <div className=" text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-[600] !text-white text-center leading-[120%] max-w-[650px]">
                            The latest and greatest from our team
                        </div>

                        <div className=" font-medium !text-white text-center leading-[120%] max-w-[650px]">
                            Get the latest insights, trends, and expert advice in our blog. Stay informed, inspired, and ahead of the curve.
                        </div>
                    </div>

                    <SearchInput />
                </div>
            </section>


            <section className="sm:mt-[60px] mt-[50px] mb-16 md:mb-12 mb-10">
                <div className="container">
                    <CategoriesFilter/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-3 gap-y-6 sm:mt-[50px] mt-[40px]">
                        {data.data.map((item:any) => {
                           return <ArticleCard key={item._id}
                                description={item.blogDetails}
                                image={`http://localhost:5000/${item.image}`}
                                category={item.category}
                                title={item.title}
                                slug={item.slug} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}