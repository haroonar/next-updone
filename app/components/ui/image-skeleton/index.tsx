"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isHeroImg?:boolean;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({ src, alt, width, height,isHeroImg }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
   
    <div style={isLoaded ? { width, borderRadius:'40%' }:{ width, height, borderRadius:'40%' }} >
      {!isLoaded && <Skeleton  style={{borderRadius:'60% 60% 0 0',height:'100vh',width:'100%'}} className='rounded-full animate-pulse bg-gray-50' />}
      <Image
       layout="responsive" objectFit='fill' quality={100} 
        src={src}
        alt={alt}
        width={1000}
        className='w-full'
        height={height}
        onLoad={() => setIsLoaded(true)}
        // style={{ display: isLoaded ? 'block' : 'none', position: 'absolute', top: 0, left: 0 }}
      />
    </div>
    </>
  );
};

export default ImageWithSkeleton;
