// src/components/ServiceImageWithSkeleton.tsx

import Image from 'next/image';
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ServiceImageWithSkeletonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isHeroImg?:boolean;
  setIsServiceLoaded:any
  isServiceLoaded:boolean
}

const ServiceImageWithSkeleton: React.FC<ServiceImageWithSkeletonProps> = ({ src, alt, width, height,isServiceLoaded ,setIsServiceLoaded}) => {

  return (
    <>
   
    <div style={ { height}} >
      {!isServiceLoaded && <Skeleton width={width} height={height}  className='animate-pulse bg-gray-50' />}
      <Image
       layout="responsive"  quality={100} 
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsServiceLoaded(true)}
        className='shadow-stone-300'
        
        // style={{ display: isLoaded ? 'block' : 'none', position: 'absolute', top: 0, left: 0 }}
      />
      
    </div>
    </>
  );
};

export default ServiceImageWithSkeleton;
