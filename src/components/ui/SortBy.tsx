import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface SortByOption {
  label: string
  value: string // query param value
}

interface SortByProps {
  list: SortByOption[]
  onChange: (value: string) => void 
}

const SortBy: React.FC<SortByProps> = ({ list, onChange }) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [selected, setSelected] = useState<SortByOption | null>(null)

  useEffect(() => {
    if (openDropdown) {
      setOpenDropdown(true)
    } else {
      const timeout = setTimeout(() => setOpenDropdown(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [openDropdown])

  return (
    <div className="relative">
      <button
        onClick={() => setOpenDropdown(!openDropdown)}
        className="border border-[#e3e3e3] cursor-pointer outline-none flex items-center gap-2 px-4 py-3 rounded-[12px] bg-white"
      >
        <span className="text-[15px] font-[600] whitespace-nowrap">
          {selected ? selected.label : 'Sort By'}
        </span>
        <IoIosArrowDown className="w-[23px] h-[23px] text-[#666D80]" />
      </button>

      <div
        className={`absolute top-[calc(100%+6px)] shadow-sm border border-[#e3e3e3] z-[10000] rounded-[10px] right-0 bg-white p-1.5
          transform-gpu transition-all duration-300 ease-in-out
          origin-top-right min-w-max
          ${openDropdown ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
        `}
        style={{ display: openDropdown ? 'block' : 'none' }}
      >
        {list.map((item) => (
          <div
            key={item.value}
            className="hover:bg-[#DFE1E7] px-6 py-3 rounded-[12px] text-[#121212] cursor-pointer whitespace-nowrap"
            onClick={() => {
              setSelected(item)
              onChange(item.value) // send query name to parent
              setOpenDropdown(false)
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SortBy
