"use client"
import React, { useState, useEffect, useRef } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaFacebook, FaPinterest, FaReddit } from "react-icons/fa";
import { BsSnapchat, BsTelegram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const ShareBtn = ({iconSize}:{iconSize?:string}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false); // State to handle copied state
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const shareOnSocialMedia = (platform: string) => {
    const url = encodeURIComponent(currentUrl);
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case "pinterest":
        shareUrl = `https://pinterest.com/pin/create/button/?url=${url}`;
        break;
      case "snapchat":
        shareUrl = `https://www.snapchat.com/scan?attachmentUrl=${url}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${url}`;
        break;
      case "reddit":
        shareUrl = `https://www.reddit.com/submit?url=${url}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000); // Reset the copied state after 3 seconds
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Share Icon */}
      <div onClick={toggleDropdown} className="cursor-pointer w-[40px] bg-white h-[40px] rounded-[10000px] border border-[#e3e3e3] flex justify-center items-center">
        <IoShareSocialOutline className={` text-[#121212] ${iconSize ? iconSize:"text-[20px]"}`} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg p-4 z-20">
          
          <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold ">Spread the Experience</h3>
          <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
          <RxCross2 className="text-black text-[22px]" />
          </div>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Help others experience the comfort and luxury of this retreat.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-2 mb-4">
            <div
              className="w-[50px] h-[50px] rounded-lg border border-[#D0D5DD] flex items-center justify-center cursor-pointer"
              onClick={() => shareOnSocialMedia("facebook")}
            >
              <FaFacebook className="text-[#237FFE] w-[25px] h-[25px]" />
            </div>
            <div
              className="w-[50px] h-[50px] rounded-lg border border-[#D0D5DD] flex items-center justify-center cursor-pointer"
              onClick={() => shareOnSocialMedia("snapchat")}
            >
              <BsSnapchat className="text-black w-[25px] h-[25px]" />
            </div>
            <div
              className="w-[50px] h-[50px] rounded-lg border border-[#D0D5DD] flex items-center justify-center cursor-pointer"
              onClick={() => shareOnSocialMedia("twitter")}
            >
              <FaXTwitter className="text-[#000] w-[25px] h-[25px]" />
            </div>
            <div
              className="w-[50px] h-[50px] rounded-lg border border-[#D0D5DD] flex items-center justify-center cursor-pointer"
              onClick={() => shareOnSocialMedia("telegram")}
            >
              <BsTelegram className="text-blue-400 w-[25px] h-[25px]" />
            </div>
            <div
              className="w-[50px] h-[50px] rounded-lg border border-[#D0D5DD] flex items-center justify-center cursor-pointer"
              onClick={() => shareOnSocialMedia("pinterest")}
            >
              <FaPinterest className="text-[#E60019] w-[25px] h-[25px]" />
            </div>
            <div
              className="w-[50px] h-[50px] rounded-lg border border-[#D0D5DD] flex items-center justify-center cursor-pointer"
              onClick={() => shareOnSocialMedia("reddit")}
            >
              <FaReddit className="text-[#FF4500] w-[25px] h-[25px]" />
            </div>
          </div>

          {/* Copy Link Section */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={currentUrl}
              readOnly
              className="flex-1 bg-gray-100 text-sm px-2 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
            <button
              className="bg-blue-600 text-white text-sm px-3 py-2 rounded-md"
              onClick={handleCopyLink}
            >
              {copied ? "Copied" : "Copy Link"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareBtn;
