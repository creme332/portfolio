declare module "*.css";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
// https://stackoverflow.com/a/56458070/17627866
interface Window {
  workbox: any;
  grecaptcha: any;
}
