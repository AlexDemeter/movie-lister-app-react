import React from "react";
import "./newest.css"
const images = ["https://th.bing.com/th/id/R.005ce1a3265219580297ae2b928403ba?rik=rP4bcaz0q9ZGEw&riu=http%3a%2f%2fwww.hdwallpaperslife.com%2fwp-content%2fuploads%2f2017%2f11%2fstranger_things-HD.jpg&ehk=N%2fBXbrgJY%2bnnZv%2bOCpQ0hHrFNGxuArStnfuJQLfVCJA%3d&risl=&pid=ImgRaw&r=0", 
"https://wallpapercave.com/wp/wp8345840.jpg", 
"https://cdn.amazfeed.com/wp-content/uploads/2021/09/Download-Full-HD-or-4K-Squid-Games-Wallpaper-Poster.jpg",
"https://th.bing.com/th/id/R.104e184d8124c8c23695a73c7bbc3be0?rik=Nc8sgp8akgMRRw&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-21%2fMoney-Heist-HD-Background-Wallpaper-53021.png&ehk=tUiL%2fySSvWkocz7A4PRQMtw0zRB3akN%2fX2pWXmi5tGY%3d&risl=&pid=ImgRaw&r=0",
"https://th.bing.com/th/id/R.a83c481fdc69f47d9f09538a3f816912?rik=D03LeqqxZJbZLQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f0%2fb%2f9%2f1099082-peaky-blinders-wallpapers-1920x1080-for-4k.jpg&ehk=hv7wTdGOoZ1el1IYguDvrIaUdK1l8ZOFcaOqv2Q5aDg%3d&risl=&pid=ImgRaw&r=0"];
const delay = 4000;

function Newest() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((backgroundImage, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Newest;