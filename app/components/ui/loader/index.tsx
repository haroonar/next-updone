import Image from "next/image";

const RenderLoader = () => {
    // Simulate a 2-second delay (remove this in production)
    setTimeout(() => {
        // Set a state to indicate that RenderLoader is complete
        // You can use a state management library like Redux or React Context
    }, 2000);

    return (
        <div className='flex items-center justify-center h-screen'>
            <Image src='/images/gallery/bartender.gif' width={500} height={500} alt='Loader' />
        </div>
    );
};
export default RenderLoader;