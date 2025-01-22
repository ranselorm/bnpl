"use client";

import Image from "next/image";

const ClippedImages = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
      {/* Image 1 */}
      <div className="relative w-full h-72 rounded-2xl bg-blue-100 overflow-hidden">
        <Image
          src="/images/mac.jpg"
          alt="Sofa"
          layout="fill"
          objectFit="cover"
          className="clip-circle"
        />
      </div>

      {/* Image 2 */}
      <div className="relative w-full flex gap-x-6 h-72 overflow-hidden">
        <div className="relative w-1/2 h-full rounded-2xl overflow-hidden">
          <Image
            src="/images/phone.webp"
            alt="phone"
            layout="fill"
            objectFit="cover"
            className="clip-circle"
          />
        </div>
        <div className="relative w-1/2 h-full rounded-2xl overflow-hidden">
          <Image
            src="/images/sew.webp"
            alt="Sewing Machine"
            layout="fill"
            objectFit="cover"
            className="clip-circle"
          />
        </div>
      </div>

      {/* Image 3 */}
      <div className="relative w-full h-72 rounded-2xl bg-blue-100 overflow-hidden">
        <Image
          src="/images/head.webp"
          alt="Sofa"
          layout="fill"
          objectFit="cover"
          className="clip-circle"
        />
      </div>

      {/* Add more items as needed */}
    </div>
  );
};

export default ClippedImages;
