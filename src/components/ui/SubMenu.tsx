"use client"
import React from 'react';

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
    //    <div className="container ">
         <div className='flex items-center sm:my-[24px] mb-[20px]'>
            {items.map((item) => (
                <div
                    key={item.id}
                    onClick={() => onClick(item.id)}
                    className={`px-4 py-2 cursor-pointer border-b-2 ${activeId === item.id
                            ? 'border-b-[#0074ec] text-[#0074ec]'
                            : 'border-b-[#e3e3e3] text-[#121212]'
                        }`}
                >
                    {item.label}
                </div>
            ))}
        {/* </div> */}
       </div>

    );
};

export default SubMenu;
