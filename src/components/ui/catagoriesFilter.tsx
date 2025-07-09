'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const categories = [
  'All category',
  'Restaurants',
  'Experience',
  'Accommodation',
  'Art & Culture',
  'Festivity',
];

const CategoriesFilter = () => {
  const [selected, setSelected] = useState('All category');
  const router = useRouter();

  const handleClick = (category: string) => {
    setSelected(category);

    const params = new URLSearchParams(window.location.search);

    if (category === 'All category') {
      params.delete('category');
    } else {
      params.set('category', category);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-1.5 flex-wrap justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`px-4 py-3 border border-[#e3e3e3] cursor-pointer rounded-[12px] ${
            selected === category
              ? 'bg-[#121212] text-white'
              : 'bg-white text-[#121212]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoriesFilter;
