import { useState, useEffect, useRef, ReactNode } from "react";

interface DropdownProps {
  isOpen: boolean;
  children: ReactNode;
  top?: string;
  border?: boolean;
  onClose?: () => void;
}

function Dropdown({ top, isOpen, children, border, onClose }: DropdownProps) {
  const [show, setShow] = useState(isOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setShow(true);
    else {
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    }

    if (isOpen && onClose) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={dropdownRef}
      className={`absolute ${top ? top : "top-full"}  
        ${border ? "shadow-sm border border-[#e3e3e3]" : ""} 
        z-[10000] rounded-[10px] left-0 bg-white p-1.5
        transform-gpu transition-all duration-300 ease-in-out
        origin-top-left
        min-w-full w-max  <!-- ✅ ensures min 100%, grows if needed -->
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
