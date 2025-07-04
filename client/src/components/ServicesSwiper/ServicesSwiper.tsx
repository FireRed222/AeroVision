import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import s from "./ServicesSwiper.module.scss";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const swiperInfo = [
  {
    id: 1,
    ttl: "Website / App Design UX / UI Design",
    subttl:
      "Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design",
    src: "/brushiconblue.svg",
    srcAlt: "/brushicon.svg",
  },
  {
    id: 2,
    ttl: "Strategic Marketing and Creative Content",
    subttl:
      "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    src: "/brushiconblue.svg",
    srcAlt: "/brushicon.svg",
  },
  {
    id: 3,
    ttl: "Multivendor eCommerce Website Solutions",
    subttl: "Unlocking the World of Multivendor eCommerce Websites",
    src: "/brushiconblue.svg",
    srcAlt: "/brushicon.svg",
  },
  {
    id: 4,
    ttl: "Crafting Brand Strategies and Artistic Direction",
    subttl:
      "Delving Deep into Crafting Comprehensive Brand Strategies and Offering Expert Guidance",
    src: "/brushiconblue.svg",
    srcAlt: "/brushicon.svg",
  },
];

const ServicesSwiper = () => {
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);

  const alterLeftArrow = (boolean: boolean) => setLeftArrow(() => boolean);
  const alterRightArrow = (boolean: boolean) => setRightArrow(() => boolean);

  return (
    <section className={s.services}>
      <div className={s.info}>
        <h2 className={s.ttl}>Services</h2>
        <h1 className={s.subttl}>
          Exploring My Design <b className={s.bold}>Skills</b>
        </h1>
        <p className={s.text}>
          We transform your ideas into a distinctive web project that both
          inspires you and captivates your customers
        </p>
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
            spaceBetween: 10,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {swiperInfo.map((slide) => (
          <SwiperSlide>
            {({ isActive }) => (
              <div className={`${s.container} ${isActive && s.active}`}>
                <div className={s.icon}>
                  <img
                    src={isActive ? slide.srcAlt : slide.src}
                    alt={slide.src}
                  />
                </div>

                <div className={s.swiperText}>
                  <h1 className={s.swiperTtl}>{slide.ttl}</h1>
                  <p className={s.swiperSubttl}>{slide.subttl}</p>
                  <div className={s.learnMore}>
                    <Link to={"*"} className={s.mainLink}>
                      <p className={s.link}>Learn More</p>
                      <img
                        src={isActive ? "/arrowwhite.svg" : "/arrowblue.svg"}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesSwiper;
