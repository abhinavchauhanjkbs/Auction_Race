import { useEffect } from "react";

import heroCollage from "@/assets/hero-collage.png";
import BMWImage from "@/assets/BMW.png";
import bannerImg from "@/assets/banner.png";
import logo from "@/assets/logo.png";

const assetsToPreload = [heroCollage, BMWImage, bannerImg, logo];

const AssetPreloader = () => {
  useEffect(() => {
    const createdLinks: HTMLLinkElement[] = [];

    assetsToPreload.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
      createdLinks.push(link);

      const img = new Image();
      img.decoding = "async";
      img.loading = "eager";
      img.src = src;
    });

    return () => {
      createdLinks.forEach((link) => document.head.removeChild(link));
    };
  }, []);

  return null;
};

export default AssetPreloader;
