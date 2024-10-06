import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
export default function ImageComponent({ src, blur_hash, style, class_name }) {
  //console.log(src, blur_hash, style, class_name);
  const [imgLoaded, setImgLoaded] = useState(false);
  //console.log(imgLoaded);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };
    img.src = src;
    //console.log(img);
  }, [src]);
  return (
    <>
      {!imgLoaded && (
        <Blurhash
          hash={blur_hash}
          width={"100%"}
          height={"300px"}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="mt-4"
        />
      )}

      {imgLoaded && (
        <img
          src={src}
          alt="hello"
          data-aos="fade-up"
          style={style}
          className={class_name}
        />
      )}
    </>
  );
}
