import "./ChevronDown.css";

export const ChevronDown = ({ className, ...props }) => {
  return <img className={"chevron-down " + className} src="chevron-down.svg" />;
};
