'use client';

import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { LuSendHorizontal } from 'react-icons/lu';
import { useRouter } from 'next/navigation';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    const params = new URLSearchParams(window.location.search);

    if (search.trim()) {
      params.set('search', search.trim());
    } else {
      params.delete('search'); // Optional: remove param if empty
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div
      className="flex items-center absolute rounded-[12px] left-1/2 bottom-0 border border-[#e3e3e3] transform -translate-x-1/2 translate-y-1/2 w-full bg-white max-w-[650px] px-3"
      style={{ boxShadow: '0px 11.65px 39.88px 0px #00000012' }}
    >
      <div className="py-3 pr-3">
        <IoMdSearch className="w-[24px] h-[24px] text-[#121212]" />
      </div>

      <input
        type="text"
        className="w-full py-3 px-3 outline-none text-[16px] text-[#121212] placeholder:text-[#666D80] bg-white"
        placeholder="Search anything what do you want"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="p-2 rounded-[8px] bg-[#0074ec] text-white cursor-pointer"
        onClick={handleSubmit}
      >
        <LuSendHorizontal className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SearchInput;
