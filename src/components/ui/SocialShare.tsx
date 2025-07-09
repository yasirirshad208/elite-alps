'use client';

import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { PiWhatsappLogoFill, PiTelegramLogoDuotone } from 'react-icons/pi';
import { IoIosLink } from 'react-icons/io';

const SocialShare = () => {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = document.title;

    switch (platform) {
      case 'instagram':
        alert("Instagram doesn't support direct sharing via URL.");
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`, '_blank');
        break;
      case 'link':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} - ${url}`)}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${url}&text=${title}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white border border-[#e3e3e3] md:mt-8 mt-6 flex justify-between items-center gap-4 flex-wrap rounded-[12px] p-4 gap-y-3">
      <div className="text-[20px] font-semibold">
        Like what you see? Share with <br /> your family & friends
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => handleShare('instagram')}
          className="cursor-pointer w-[48px] h-[48px] rounded-full flex items-center justify-center border border-[#ddd]"
        >
          <AiFillInstagram className="text-[#0691FF] text-[20px]" />
        </button>

        <button
          onClick={() => handleShare('facebook')}
          className="cursor-pointer w-[48px] h-[48px] rounded-full flex items-center justify-center border border-[#ddd]"
        >
          <FaFacebookF className="text-[#0691FF] text-[20px]" />
        </button>

        <button
          onClick={() => handleShare('whatsapp')}
          className="cursor-pointer w-[48px] h-[48px] rounded-full flex items-center justify-center border border-[#ddd]"
        >
          <PiWhatsappLogoFill className="text-[#0691FF] text-[20px]" />
        </button>

        <button
          onClick={() => handleShare('link')}
          className="cursor-pointer w-[48px] h-[48px] rounded-full flex items-center justify-center border border-[#ddd]"
        >
          <IoIosLink className="text-[#0691FF] text-[20px]" />
        </button>

        <button
          onClick={() => handleShare('twitter')}
          className="cursor-pointer w-[48px] h-[48px] rounded-full flex items-center justify-center border border-[#ddd]"
        >
          <FaXTwitter className="text-[#0691FF] text-[20px]" />
        </button>

        <button
          onClick={() => handleShare('telegram')}
          className="cursor-pointer w-[48px] h-[48px] rounded-full flex items-center justify-center border border-[#ddd]"
        >
          <PiTelegramLogoDuotone className="text-[#0691FF] text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
