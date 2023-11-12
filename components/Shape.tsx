// TODO: remove any

export const Shape1 = ({ color = "white" }: any) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    stroke="#5a0c25"
    fill="none"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      stroke="none"
      transform="translate(-10,-10)"
      d="m63.11 62.11 37.39-15.486 37.389 15.487L153.376 99.5l-15.487 37.389-37.389 15.487-37.39-15.487L47.625 99.5 63.11 62.11Z"
    />
    <path d="m63.11 62.11 37.39-15.486 37.389 15.487L153.376 99.5l-15.487 37.389-37.389 15.487-37.39-15.487L47.625 99.5 63.11 62.11Z" />
  </svg>
);
