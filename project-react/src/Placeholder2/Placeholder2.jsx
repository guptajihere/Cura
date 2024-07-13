import "./Placeholder2.css";

export const Placeholder2 = ({ className, ...props }) => {
  return (
    <img className={"placeholder-2 " + className} src="placeholder-2.svg" />
  );
};
