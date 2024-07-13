import "./Au.css";

export const Au = ({ className, ...props }) => {
  return (
    <div className={"au " + className}>
      <img className="vector" src="vector0.svg" />
      <img className="group" src="group0.svg" />
      <img className="group2" src="group1.svg" />
      <img className="group3" src="group2.svg" />
    </div>
  );
};
