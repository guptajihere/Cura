import "./Placeholder.css";

export const Placeholder = ({ className, ...props }) => {
  return <img className={"placeholder " + className} src="placeholder.svg" />;
};
