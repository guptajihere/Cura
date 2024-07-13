import "./ChevronRight.css";

export const ChevronRight = ({ className, ...props }) => {
  return (
    <img className={"chevron-right " + className} src="chevron-right.svg" />
  );
};
