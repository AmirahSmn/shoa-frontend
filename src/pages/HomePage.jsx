import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "../components/card/Card";
import Hero from "../components/Hero";
import SmallCard from "../components/card/SmallCard";
import MapComponent from "../components/MapComponent";
import SwiperComponent from "../components/SwiperComponent";
import ContactComponent from "../components/Contact/ContactComponent";
import ImageCarousel from "../components/Image Carousel/ImageCarousel";
import Carousel from "../components/Image Carousel/Carousel";
// Icons
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import LocationName from "../components/LocationName";
import PageBanner from "../components/PageBanner";
import LinkBoxHomePage from "../components/LinkBoxHomePage";
import axios from "axios";

const h2Style = " px-8 text-center capitalize text-[28px] xl:text-4xl";

function HomePage() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/blog")
      .then((res) => res.data.blogs)
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <h1 className="px-6 text-center capitalize text-[40px] xl:text-[80px]">
        Opening doors, <br /> building communities!
      </h1>

      <section id="slider_section">
        <div className="h-[620px] md:hidden ">
          <SwiperComponent slides="1" />
        </div>
        <div className="hidden md:block lg:hidden h-[470px] ">
          <SwiperComponent slides="1" />
        </div>
        <div className="hidden lg:block h-[400px] ">
          <SwiperComponent slides="2" />
        </div>
      </section>

      <h2 className={h2Style}>Why choose shoa Homes?</h2>
      <Hero />

      <section id="featured_properties_section">
        <h2 className={h2Style}>Featured properties</h2>
        <div className=" flex flex-col gap-11 justify-center items-center xl:flex-row ">
          <SmallCard onSaleBadge />
          <SmallCard discountBadge />
        </div>
      </section>

      <section id="blog_section">
        <h2 className={h2Style}>Blog</h2>
        <div className="container mx-auto px-7 gap-y-4 flex flex-col text-center text-[28px]  auto-rows-fr md:text-2xl md:grid md:grid-cols-2 xl:flex xl:flex-row xl:text-4xl xl:h-[323px] xl:items-stretch">
          {blogs &&
            blogs.map((blog) => (
              <div key={blog._id}>
                <LinkBoxHomePage content={blog.title} id={blog._id} />
              </div>
            ))}
        </div>
      </section>

      <section>
        <h2 className={h2Style}>Our sites</h2>
        <div className="flex flex-col gap-14 px-4 md:px-20 ">
          {/* First Listed Location */}
          <div className="container flex items-center justify-center mx-auto relative">
            <div className="ml-3 w-[136px] h-[204px] xl:w-[506px] xl:h-[527px]">
              <LocationName name="Jackros" rounded />
            </div>

            <div className="w-[200px] h-[170px] relative -left-3 md:w-[300px] xl:w-[600px] xl:h-[400px]">
              <MapComponent />
            </div>
          </div>

          {/* Second Listed Location */}
          <div className="container flex items-center justify-center mx-auto relative">
            <div className="w-[200px] h-[170px] relative left-3 z-10 md:w-[300px] xl:w-[600px] xl:h-[400px]">
              <MapComponent />
            </div>

            <div className="w-[136px] h-[204px] mr-3 xl:w-[506px] xl:h-[527px] ">
              <LocationName name="Bulbula" rounded />
            </div>
          </div>

          <div className="container flex items-center justify-center mx-auto relative">
            <div className="w-[136px] h-[204px]  xl:w-[506px] xl:h-[527px] ">
              <LocationName name="Mekanisa" rounded />
            </div>

            <div className="w-[200px] h-[170px] relative -left-3 md:w-[300px] xl:w-[600px] xl:h-[400px]">
              <MapComponent />
            </div>
          </div>

          <div className="container flex items-center justify-center mx-auto relative">
            <div className="w-[200px] h-[170px] relative left-3 z-10 md:w-[300px] xl:w-[600px] xl:h-[400px]">
              <MapComponent />
            </div>

            <div className="w-[136px] h-[204px] mr-3 xl:h-[527px] xl:w-[506px]">
              <LocationName
                name="Welo Sefer"
                message="(Coming Soon)"
                rounded
                closed
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <h2 className={h2Style}>Our sites</h2>
        <div className="flex flex-col gap-14 px-4 md:px-20">
          <div className="container  flex flex-col  mx-auto relative xl:flex-row xl:items-center">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary xl:hidden">
              Jackros
            </p>

            <div className="hidden xl:w-[527px] xl:block ">
              <LocationName name="Jackros" />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20 xl:right-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>

          <div className="container  flex flex-col  mx-auto relative xl:flex-row-reverse xl:items-center">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary xl:hidden">
              Bulbula
            </p>

            <div className="hidden xl:w-[527px] xl:block">
              <LocationName name="Bulbula" />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20  xl:left-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>

          <div className="container  flex flex-col  mx-auto relative xl:flex-row xl:items-center">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary xl:hidden">
              Mekanisa
            </p>

            <div className="hidden xl:w-[527px] xl:block">
              <LocationName name="Mekanisa" />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20  xl:right-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>

          <div className="container  flex flex-col  mx-auto relative xl:flex-row-reverse xl:items-center">
            <p className="py-4 px-8 text-white text-lg font-medium rounded-2xl mb-3 bg-primary xl:hidden">
              Welo Sefer <span className="opacity-50">(Coming Soon)</span>
            </p>

            <div className="hidden xl:w-[527px] xl:block">
              <LocationName name="Wolo Sefer" message="(Coming Soon)" closed />
            </div>

            <div className="h-[300px] xl:absolute xl:z-20  xl:left-0 xl:w-[806px] xl:h-[418px] ">
              <MapComponent />
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section>
        <div className="px-4 md:px-20">
          <h2 className={h2Style}>Contact us</h2>
          <ContactComponent />
        </div>
      </section>

      {/* Office Location */}
      <section id="location_section">
        <h2 className={h2Style}>Office Location</h2>

        {/* <LocationMap /> */}
        <div className=" container px-4 h-[250px]  mx-auto md:px-20 md:h-[450px] xl:w-[994px]">
          <MapComponent />
        </div>
      </section>
    </>
  );
}

export default HomePage;
