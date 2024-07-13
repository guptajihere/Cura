import "./ChevronLeft.css";

export const ChevronLeft = ({ className, ...props }) => {
  return <img className={"chevron-left " + className} src="chevron-left.svg" />;
};
