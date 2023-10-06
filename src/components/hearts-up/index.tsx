import { useEffect, useState } from "react";
import { Heart } from "../heart";
import "./styles.css";

function getRandomInt(max: number, min: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

interface HeartsGeneratorProps {
  numberOfHearts?: number;
}

export function Hearts({ numberOfHearts = 20 }: HeartsGeneratorProps) {
  const [displayWidth, setDisplayWidth] = useState(screen.width);

  //@ts-ignore
  window.addEventListener("resize", function (event) {
    setDisplayWidth(screen.width);
  });

  useEffect(() => {
    const heartsElementsRoot = document.querySelectorAll(".up");

    for (const item of heartsElementsRoot) {
      const heartElement = item as HTMLImageElement;
      heartElement.style.animationDuration = `${getRandomInt(10000, 7000)}ms`;
      heartElement.style.left = `${getRandomInt(displayWidth, -20)}px`;
      heartElement.style.filter = `brightness(${getRandomInt(4, 1)})`;
    }

    console.log(displayWidth);
  });

  //@ts-ignore
  const hearts = Array.from({ length: numberOfHearts }, (_, index) => {
    return (
      <Heart
        className="up z-10"
        width={getRandomInt(150, 10)}
        color="#FF0000"
      />
    );
  });

  return <>{hearts}</>;
}
