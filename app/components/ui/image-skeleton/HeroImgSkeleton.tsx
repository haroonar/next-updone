"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface HeroImageWithSkeletonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isHeroImg?: boolean;
}

const HeroImageWithSkeleton: React.FC<HeroImageWithSkeletonProps> = ({ src, alt, width, height, isHeroImg }) => {
  const [isLoaded, setIsLoaded] = useState(false);


  return (
    <div >
      {!isLoaded && (
        <Skeleton
          height={510}
          width={532}
          style={{width: '100%', height: '60%' }}
          className="rounded-full animate-pulse bg-gray-50"
        />
      )}
      <Image
        layout="responsive"
        objectFit="fill"
        quality={100}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default React.memo(HeroImageWithSkeleton);
