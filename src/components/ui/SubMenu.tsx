"use client";
import React from "react";

type SubMenuItem = {
  id: string;
  label: string;
};

type SubMenuProps = {
  items: SubMenuItem[];
  activeId: string;
  onClick: (id: string) => void;
};

const SubMenu: React.FC<SubMenuProps> = ({ items, activeId, onClick }) => {
  return (
    <div
      className="
        flex items-center sm:my-[24px] mb-[20px]
        w-full sm:w-auto
        overflow-x-auto
        scrollbar-hide
      "
    >
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onClick(item.id)}
          className={`flex-1 sm:flex-none     /* ✅ full width only on mobile */
            px-4 py-2 cursor-pointer border-b-2 text-center whitespace-nowrap
            ${
              activeId === item.id
                ? "border-b-[#0074ec] text-[#0074ec]"
                : "border-b-[#e3e3e3] text-[#121212]"
            }`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
