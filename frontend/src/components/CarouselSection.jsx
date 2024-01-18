import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import sliderDetails from '../data/sliderDetails'
import "../css/globals.css"
import { sliderSettings } from '../data/sliderSettings'

export default function Slider() {
  return (
    <div className='relative'>
        <Swiper {...sliderSettings}>
            <SliderButtons />
            {
                sliderDetails.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className='w-[25rem] opp-card hover:scale-[1.025] hover:cursor-pointer flex flex-col px-[1rem] pb-[1rem] pt-[1.3rem] m-auto'>
                            <img className='w-[25rem] h-[20rem] rounded-tr-[15px] rounded-tl-[15px]' src={card.imgUrl} alt="cardImg" />
                            <div className='flex flex-col rounded-br-[15px] rounded-bl-[15px] bg-slate-200 px-5 pb-5 pt-3'>
                              <p className='text-[1.5rem] w-full font-bold'>{card.title}</p>
                              <p>{card.place}</p>
                              <p>{card.rating}/10 ({card.review} reviews)</p>
                              <p>${card.price}/night</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))   
            }
        </Swiper>
    </div>
  )
}


const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='flex justify-center gap-[1rem] pt-4'>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-600 border-none rounded-[5px] bg-blue-100 cursor-pointer' onClick={() => swiper.slidePrev()}>❰</button>
            <button className='text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-600 border-none rounded-[5px] bg-blue-100 cursor-pointer' onClick={() => swiper.slideNext()}>❱</button>
        </div>
    )
}