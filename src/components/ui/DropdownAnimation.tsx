import { useState, useEffect, ReactNode } from "react";

interface DropdownProps {
  isOpen: boolean;
  children: ReactNode;
  top?: string;
  border?: boolean
}

function Dropdown({ top, isOpen, children, border }: DropdownProps) {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShow(true);
    else {
      const timeout = setTimeout(() => setShow(false), 300); // match duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <div
      className={`absolute ${top ? top : "top-full"}  ${border ? "shadow-sm border border-[#e3e3e3]" : ""} z-[10000] rounded-[10px] left-0 bg-white p-1.5
        transform-gpu transition-all duration-300 ease-in-out
        origin-top-left w-full
        ${isOpen
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      style={{ display: show ? "block" : "none" }}
    >
      {children}
    </div>
  );
}

export default Dropdown;
