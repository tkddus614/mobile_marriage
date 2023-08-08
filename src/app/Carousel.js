import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css'; // Swiper 스타일을 불러옵니다.
import img_1 from '../../public/img_1.png';
import img_2 from '../../public/img_2.png';
import img_3 from '../../public/img_3.png';
import img_4 from '../../public/img_4.png';
import img_5 from '../../public/img_5.png';
import img_6 from '../../public/img_6.png';
import img_7 from '../../public/img_7.png';
import img_8 from '../../public/img_8.png';

import styled from 'styled-components';

const Container = styled.div`
    margin-top: 10px;
`;

const ThumbSlideContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
`;

const ThumbSlideWrapper = styled.div`
    width: 22%;
`;

const ThumbSlide = styled.div`
    img {
        border-radius: 5px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const CustomSwiper = styled(Swiper)`    
    .swiper-button-prev {
        left: 10px;
        color: black;
        font-size: 30px;
    }
    
    .swiper-button-next {
        right: 10px;
        color: black;
        font-size: 30px;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        font-size: 20px;
    }
`;

const Carousel = () => {
    SwiperCore.use([Navigation, Thumbs]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];

    const mainSwiperRef = React.useRef(null);

    const mainImageRender = images.map((item, index) => (
        <SwiperSlide key={`swiper-${index}`}>
            <Image src={item} />
        </SwiperSlide>
    ));

    const thumbsImageRender = images.map((item, index) => (
        <ThumbSlideWrapper key={`thumb-${index}`}>
            <ThumbSlide>
                <Image
                    src={item}
                    onClick={() => {
                        if (mainSwiperRef.current) {
                            mainSwiperRef.current.swiper.slideTo(index);
                        }
                    }}
                />
            </ThumbSlide>
        </ThumbSlideWrapper>
    ));

    return (
        <>
            <CustomSwiper
                ref={mainSwiperRef}
                slidesPerView={1}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
                loop
            >
                {mainImageRender}
            </CustomSwiper>
            <Container>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode
                    watchSlidesVisibility
                    watchSlidesProgress
                >
                    <ThumbSlideContainer>
                        {thumbsImageRender}
                    </ThumbSlideContainer>
                </Swiper>
            </Container>
        </>
    );
}

export default Carousel;
