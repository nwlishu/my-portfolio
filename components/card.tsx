"use client";
import React from "react";
import Image from "next/image";
import arrowRight from "@/public/ep--d-arrow-right.svg";
import Link from "next/link";

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, title, subtitle, image }) => {
  // Validate required props
  if (!id || !title || !image) {
    console.error("Card component missing required props:", { id, title, image });
    return null;
  }

  return (
    <div className="bg-[#F5F5F7] rounded-2xl p-4 flex flex-col">
      <Image
        src={image}
        alt={`${title} - blog post cover image`}
        width={500}
        height={500}
        className="max-w-full max-h-90 object-cover rounded"
      />
      <h3 className="text-base font-bold mt-4">{title}</h3>
      <p className="text-gray-600 text-base flex-grow">{subtitle}</p>
      <div className="flex justify-end">
        <Link href={`/blog/${id}`}>
          <button aria-label={`Read more about ${title}`}>
            <div className="flex">
              <p className="font-bold">More</p>
              <Image
                src={arrowRight}
                width={15}
                height={15}
                className="font-bold"
                alt="Arrow icon"
              />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
