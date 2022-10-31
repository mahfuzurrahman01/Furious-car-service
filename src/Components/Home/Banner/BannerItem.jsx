import React from 'react';
import './Banner.css'
const BannerItem = ({bnr}) => {
    const {id,image,prev,next} = bnr;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-0 right-20 bottom-14">
                <a href={`#slide${prev}`} className="btn btn-circle h-14 w-14">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle w-14 h-14 bg-red-500 bg-opacity-80 border-none">❯</a>
            </div>
            <div className="absolute flex flex-col gap-7 transform -translate-y-1/2 left-52 top-1/2">
                <div>
                    <h1 className='text-6xl text-white font-semibold'>
                        Affordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div>
                    <p className='text-xl text-gray-200 w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className='flex gap-5'>
                    <button className="bg-red-500 hover:bg-opacity-80 duration-300 border-2 border-transparent w-40 h-14 text-lg font-semibold rounded-none text-white" >Discover More</button>
                    <button className='border-2 border-white w-40 h-14 font-semibold hover:bg-black hover:bg-opacity-60 hover:text-gray-100 duration-500 text-white text-lg'>Latest project</button>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;