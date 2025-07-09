import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ArticleCardTypes = {
    image:string,
    title:string,
    description:string,
    category:string
    slug?:string
}

const ArticleCard = ({image, title, description, category, slug}:ArticleCardTypes) => {
 const truncate = (input: string, maxWords: number) => {
    const words = input.split(" ");
    return words.length > maxWords ? words.slice(0, maxWords).join(" ") + "..." : input;
  };
  return (
    <Link href={`/magazine/${slug}`}>
      <div className='p-3 rounded-[12px] bg-white border border-[#e3e3e3]'>
        <div className='relative md:h-[322px] sm:[280px] h-[230px] w-full'>
            <img src={image} className='rounded-[4px] object-cover w-full h-full' alt="Magazine"/>
        </div>

        <div className='mt-4.5 px-2'>
            <button className='rounded-[24px] bg-[#e3e3e3] text-[#666D80] font-medium font-[600] py-1 px-4'>{category}</button>

            <div className='text-[#121212] font-[600] font-large mt-2'>{truncate(title, 14)}</div>
            <div className='text-[#666D80] font-medium mt-1 mb-3'>{truncate(description, 10)}</div>
        </div>
    </div>
    </Link>
  )
}

export default ArticleCard