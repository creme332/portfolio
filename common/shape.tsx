import React from "react";

const Octagon = ({ color }: { color: string }) => (
  <svg
    width="100%"
    viewBox="0 0 200 200"
    preserveAspectRatio="none"
    stroke="black"
    fill="none"
    strokeWidth="4.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      stroke="none"
      d="m63.11 62.11 37.39-15.486 37.389 15.487L153.376 99.5l-15.487 37.389-37.389 15.487-37.39-15.487L47.625 99.5 63.11 62.11Z"
    />
    <path d="m63.11 62.11 37.39-15.486 37.389 15.487L153.376 99.5l-15.487 37.389-37.389 15.487-37.39-15.487L47.625 99.5 63.11 62.11Z" />
  </svg>
);

const Parallelogram = ({ color }: { color: string }) => (
  <svg
    width="100%"
    viewBox="0 0 200 200"
    stroke="black"
    fill="none"
    strokeWidth="4.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      width="100%"
      fill={color}
      stroke="none"
      d="M159.5 40 41 80.5l7.5 80 111-26V40Z"
    />
    <path width="100%" d="M159.5 40 41 80.5l7.5 80 111-26V40Z" />
  </svg>
);

const Flower = ({ color }: { color: string }) => (
  <svg
    width="100%"
    viewBox="0 0 200 200"
    stroke="black"
    fill="none"
    strokeWidth="4.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      stroke="none"
      d="m70.062 98.54-.352-.767m0 0C48.693 84.578 44.373 73.843 47.715 49.76c23.376 3.958 34.468 8.647 42.767 31.111-.716-18.425 6.36-25.968 25.815-36.872 10.272 15.942 10.455 25.635 1.541 44.17 17.308-13.676 27.777-15.382 48.162-5.378-15.1 23.283-25.566 28.69-46.621 29.191 19.671 9.502 22.776 19.22 24.274 38.792-25.341-4.837-36.348-10.643-43.924-32.647-3.776 19.736-12.435 27.384-35.832 36.872-2.596-16.282-.626-24.635 14.641-36.872-16.072 8.733-25.578 9.428-43.538 2.305 8.26-14.079 14.511-20.37 34.71-22.66Z"
    />
    <path d="m70.062 98.54-.352-.767m0 0C48.693 84.578 44.373 73.843 47.715 49.76c23.376 3.958 34.468 8.647 42.767 31.111-.716-18.425 6.36-25.968 25.815-36.872 10.272 15.942 10.455 25.635 1.541 44.17 17.308-13.676 27.777-15.382 48.162-5.378-15.1 23.283-25.566 28.69-46.621 29.191 19.671 9.502 22.776 19.22 24.274 38.792-25.341-4.837-36.348-10.643-43.924-32.647-3.776 19.736-12.435 27.384-35.832 36.872-2.596-16.282-.626-24.635 14.641-36.872-16.072 8.733-25.578 9.428-43.538 2.305 8.26-14.079 14.511-20.37 34.71-22.66Z" />
  </svg>
);

const Heart = ({ color }: { color: string }) => (
  <svg
    width="100%"
    viewBox="0 0 200 200"
    stroke="black"
    fill="none"
    transform="translate(-20, 0)"
    strokeWidth="4.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      stroke="none"
      d="m100.148 73.812 1.485 3.167 1.271-3.26c5.639-14.465 13.744-22.412 22.179-25.902 8.449-3.495 17.448-2.611 25.056 1.007 7.625 3.627 13.739 9.947 16.429 17.146 2.659 7.118 2.006 15.156-3.962 22.54l-65.071 65.7-60.123-65.624C31.057 79 30.296 69.998 32.91 62.718c2.636-7.345 8.781-13.145 16.591-16.095 15.505-5.858 37.688-.442 50.647 27.189Z"
    />
    <path d="m100.148 73.812 1.485 3.167 1.271-3.26c5.639-14.465 13.744-22.412 22.179-25.902 8.449-3.495 17.448-2.611 25.056 1.007 7.625 3.627 13.739 9.947 16.429 17.146 2.659 7.118 2.006 15.156-3.962 22.54l-65.071 65.7-60.123-65.624C31.057 79 30.296 69.998 32.91 62.718c2.636-7.345 8.781-13.145 16.591-16.095 15.505-5.858 37.688-.442 50.647 27.189Z" />
  </svg>
);

export default function getShape(name: string, color?: string) {
  const finalColor = color ?? "white";
  const AllShapes: Record<string, React.ReactNode> = {
    octagon: <Octagon color={finalColor} />,
    parallelogram: <Parallelogram color={finalColor} />,
    flower: <Flower color={finalColor} />,
    heart: <Heart color={finalColor} />,
  };
  if (!AllShapes[name]) return AllShapes["octagon"];

  return AllShapes[name];
}
