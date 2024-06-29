import Image from "next/image";

const RenderLoader = () => {
    return (
       <div className="h-screen w-full flex justify-center items-center">
         <div className='grid grid-cols-2 items-center justify-center h-26 w-26 mx-auto'>
            <div className="flex items-center justify-center">
                <Image src='/images/gallery/bartender.gif' width={100} className="relative left-1 top-2" height={100} alt='Loader 1' />
            </div>
            <div className="flex items-center justify-center">
                <Image src='/images/gallery/food-delivery.gif' className="relative top-2" width={100} height={100} alt='Loader 2' />
            </div>
            <div className="flex items-center justify-center">
                <Image src='/images/gallery/bar-counter.gif' width={100} height={100} alt='Loader 3' />
            </div>
            <div className="flex items-center justify-center">
                <Image src='/images/gallery/beer-tap.gif' width={100} height={100} alt='Loader 4' />
            </div>
        </div>
       </div>
    );
};

export default RenderLoader;
