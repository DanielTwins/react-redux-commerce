import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => {
  const items = [
    {
      image: "https://source.unsplash.com/1600x900/?electronics",
      alt: "Electronics",
    },
    {
      image: "https://source.unsplash.com/1600x900/?cosmetics",
      alt: "Cosmetics",
    },
    {
      image: "https://source.unsplash.com/1600x900/?laptop",
      alt: "Laptop",
    },
    {
      image: "https://source.unsplash.com/1600x900/?mobile",
      alt: "Mobile",
    },
  ];

  // put white color for background carousel 
  const carouselWrapper = {
    backgroundColor: "#fff" 
  }

  return (
    <div style={carouselWrapper}>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        {items.map((item, index) => (
          <div key={index}>
            <img
              style={{ height: "480px", objectFit: "contain" }}
              src={item.image}
              alt={item.alt}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
