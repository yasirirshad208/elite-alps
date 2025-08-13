import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const SortBy = ({ list }: { list: string[] }) => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [value, setValue] = useState("")



    useEffect(() => {
        if (openDropdown) setOpenDropdown(true);
        else {
            const timeout = setTimeout(() => setOpenDropdown(false), 300); // match duration
            return () => clearTimeout(timeout);
        }
    }, [openDropdown]);
    return (
        <div className='relative'>
            <button onClick={() => { setOpenDropdown(!openDropdown) }} className='border border-[#e3e3e3] cursor-pointer outline-none flex items-center gap-2 px-4 py-3 rounded-[12px] bg-white border-[#e3e3e3]'>
                <span className="text-[16px] font-[600] whitespace-nowrap">Sort By</span>
                <IoIosArrowDown className='w-[23px] h-[23px] text-[#666D80]' />
            </button>


            <div
                className={`absolute top-[calc(100%+6px)] shadow-sm border border-[#e3e3e3] z-[10000] rounded-[10px] right-0 bg-white p-1.5
        transform-gpu transition-all duration-300 ease-in-out
        origin-top-right min-w-max
        ${openDropdown
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                style={{ display: openDropdown ? "block" : "none" }}
            >
                {list.map((item) => (
                    <div
                        key={item}
                        className='hover:bg-[#DFE1E7] px-6 py-3 rounded-[12px] text-[#121212] cursor-pointer whitespace-nowrap'
                        onClick={() => {
                            setValue(item)
                            setOpenDropdown(false)
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>

        </div >
    )
}

export default SortBy