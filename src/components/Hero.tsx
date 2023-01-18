import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Feature from "./card/Feature";
import WebDesktop from '/images/image-web-3-desktop.jpg';
import WebMobile from '/images/image-web-3-mobile.jpg';
import RetroPCImage from '/images/image-retro-pcs.jpg';
import TopLaptop from '/images/image-top-laptops.jpg';
import GamingGrowth from '/images/image-gaming-growth.jpg';
import Article from "./card/Article";

const features = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?"
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation?"
  },
  {
    id: 3,
    title: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
  },
];

const articles = [
  {
    alt: "Retro Pcs",
    img: RetroPCImage,
    number: "01",
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?"
  },
  {
    alt: "Top Laptops",
    img: TopLaptop,
    number: "02",
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets."
  },
  {
    alt: "Hand tossing a gaming controller",
    img: GamingGrowth,
    number: "03",
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities."
  },
];

const tabletWidth = 768;

const DisplayImage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimension = () => setWidth(window.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDimension);
      return () => window.removeEventListener("resize", updateDimension);
    }
  }, [])

  return (
    <div>
      {width >= tabletWidth ? (
        <img src={WebDesktop} alt="Web 3.0" />
      ) : (
        <img src={WebMobile} alt="Web 3.0" />
      )}
    </div>
  );
}

const Divider = () => {
  return (
    <div className="w-full h-[1px] bg-gun-memtal my-[29px]" />
  );
}

const NewsArticle = () => {
  return (
    <div className="mt-16 flex flex-col lg:flex-row gap-4 lg:gap-[30px] mb-20">
      {articles.map(({ alt, img, number, title, text }) => (
        <Article key={number} alt={alt} src={img} number={number} title={title} text={text} />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <div>
      <div className="lg:grid gap-x-16 mt-8 lg:grid-cols-3 lg:gap-x-[30px] lg:mt-12">
        <div className="col-span-2">
          <DisplayImage />
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 lg:gap-[30px]">
            <h1 className="w-10/12 lg:w-full text-[40px] leading-10 lg:leading-[56px] lg:text-56 font-extrabold text-dark-space-blue">The Bright Future of Web 3.0?</h1>
            <div>
              <p className="mb-7 text-gun-memtal mt-4 lg:mt-0">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <Button text="Read More" />
            </div>
          </div>
        </div>
        <div className="mt-16 bg-dark-space-blue pt-12 px-6 pb-8 lg:pb-0 lg:mt-0 xl:pt-14">
          <h2 className="mb-[34px] text-soft-orange font-bold text-[40px]">New</h2>
          <div>
            {features.map(({ id, title, text }, index) => (
              <>
                <Feature key={id} title={title} text={text} />
                {index !== features.length - 1 && <Divider />}
              </>
            ))}
          </div>
        </div>
      </div>
      <NewsArticle />
    </div>
  );
}