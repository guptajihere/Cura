import "./HeartRounded.css";

export const HeartRounded = ({ className, ...props }) => {
  return (
    <img className={"heart-rounded " + className} src="heart-rounded.svg" />
  );
};
