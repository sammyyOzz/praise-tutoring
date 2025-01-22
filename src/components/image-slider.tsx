"use client";

import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface ImageSliderProps {
  images: StaticImageData[];
  rtl?: boolean;
}

function ImageSlider({ images, rtl }: ImageSliderProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    rtl: rtl || false,
    responsive: [
      {
        breakpoint: 1280,  // Chakra's `xl` (≥1280px)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,  // Chakra's `md` (≥768px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,  // Chakra's `sm` (≥480px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Box w="full" px={{ base: 4, md: 8, xl: 16 }} py={{ base: 6, md: 10 }}>
      <Slider {...settings}>
        {images
          .map((image, i) => (
            <Box key={i} display="flex" justifyContent="center">
              <Box 
                w={{ base: "250px", md: "300px", xl: "350px" }} 
                h={{ base: "350px", md: "400px", xl: "450px" }} 
                pos="relative"
              >
                <Image 
                  src={image.src} 
                  alt="" 
                  fill 
                />
              </Box>
            </Box>
          ))}
      </Slider>
    </Box>
  );
}

export default ImageSlider;
