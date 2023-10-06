interface HeartProps {
  width: number;
  color: string;
  height?: number;
  className?: string;
}

export function Heart({ width, height, color, className }: HeartProps) {
  return (
    <svg
      className={`${className} absolute`}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 256 256"
    >
      <path d="M176,32a60,60,0,0,0-48,24A60,60,0,0,0,20,92c0,71.9,99.9,128.6,104.1,131a7.8,7.8,0,0,0,3.9,1,7.6,7.6,0,0,0,3.9-1,314.3,314.3,0,0,0,51.5-37.6C218.3,154,236,122.6,236,92A60,60,0,0,0,176,32Z"></path>
    </svg>
  );
}
