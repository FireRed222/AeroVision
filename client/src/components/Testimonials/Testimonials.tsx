import { useState } from "react";
import s from "./Testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { useGetData } from "../../hooks/useGetData";

const Testimonials = () => {
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);

  const alterLeftArrow = (boolean: boolean) => setLeftArrow(() => boolean);
  const alterRightArrow = (boolean: boolean) => setRightArrow(() => boolean);

  const { data, isLoading, error } = useQuery({
    queryKey: ["swiperInfo"],
    queryFn: useGetData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <section className={s.testimonials}>
      <div className={s.container}>
        <div className={s.info}>
          <h2 className={s.ttl}>Testimonials</h2>
          <h1 className={s.subttl}>The Trust From Clients</h1>
        </div>

        <div className={s.btns}>
          <div
            className={`${s.leftArrow} leftArrow ${leftArrow && s.active}`}
            onClick={() => {
              alterLeftArrow(true);
              alterRightArrow(false);
            }}
          >
            <svg
              width="27"
              height="16"
              viewBox="0 0 27 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.792893 7.29289C0.402369 7.68342 0.402369 8.31658 0.792893 8.7071L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34314C8.96159 1.95262 8.96159 1.31945 8.57107 0.928931C8.18054 0.538406 7.54738 0.538406 7.15685 0.92893L0.792893 7.29289ZM26.5 7L14 7L14 9L26.5 9L26.5 7ZM14 7L1.5 7L1.5 9L14 9L14 7Z"
                fill="#0077FF"
              />
            </svg>
          </div>
          <div
            className={`${s.rightArrow} rightArrow ${rightArrow && s.active}`}
            onClick={() => {
              alterLeftArrow(false);
              alterRightArrow(true);
            }}
          >
            <svg
              width="27"
              height="16"
              viewBox="0 0 27 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.2071 8.70711C26.5976 8.31658 26.5976 7.68342 26.2071 7.29289L19.8431 0.928932C19.4526 0.538408 18.8195 0.538408 18.4289 0.928932C18.0384 1.31946 18.0384 1.95262 18.4289 2.34315L24.0858 8L18.4289 13.6569C18.0384 14.0474 18.0384 14.6805 18.4289 15.0711C18.8195 15.4616 19.4526 15.4616 19.8431 15.0711L26.2071 8.70711ZM0.5 9H13V7H0.5V9ZM13 9H25.5V7H13V9Z"
                fill="#0077FF"
              />
            </svg>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          centeredSlides={true}
          className={s.MySwiper}
          navigation={{
            nextEl: ".rightArrow",
            prevEl: ".leftArrow",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1162: {
              slidesPerView: 3,
            },
            1235: {
              slidesPerView: 4,
            },
          }}
        >
          {data?.map((slide: any) => (
            <SwiperSlide>
              {({ isActive }) => (
                <div className={`${s.swiperContainer} ${isActive && s.active}`}>
                  <img className={s.img} src={slide.src} alt={slide.src} />
                  <div className={s.stars}>
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        width="27"
                        height="25"
                        viewBox="0 0 27 25"
                        fill={index < slide.starRating ? "#FFB400" : "#E0E0E0"}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9259 0.978455C12.5698 -0.326145 14.4301 -0.326158 15.074 0.978455L18.1399 7.19047L24.9952 8.18661C26.4349 8.39582 27.0098 10.1651 25.968 11.1806L21.0074 16.0159L22.1785 22.8437C22.4243 24.2776 20.9193 25.371 19.6316 24.694L13.5 21.4704L7.36836 24.694C6.08065 25.371 4.57561 24.2776 4.82155 22.8437L5.99259 16.0159L1.03199 11.1806C-0.00979716 10.1651 0.565076 8.39582 2.00479 8.18661L8.86017 7.19047L11.9259 0.978455Z"
                          fill={
                            index < slide.starRating ? "#FFB400" : "#E0E0E0"
                          }
                        />
                      </svg>
                    ))}
                  </div>
                  <p className={s.swiperText}>{slide.text}</p>
                  <div className={s.personalInfo}>
                    <h2 className={s.swiperName}>{slide.name}</h2>
                    <h3 className={s.swiperJob}>{slide.job}</h3>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
