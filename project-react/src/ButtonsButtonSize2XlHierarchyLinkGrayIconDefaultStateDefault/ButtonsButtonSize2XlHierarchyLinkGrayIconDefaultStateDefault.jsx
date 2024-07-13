import "./ButtonsButtonSize2XlHierarchyLinkGrayIconDefaultStateDefault.css";
import { Placeholder2 } from "../Placeholder2/Placeholder2.jsx";
import { Placeholder } from "../Placeholder/Placeholder.jsx";

export const ButtonsButtonSize2XlHierarchyLinkGrayIconDefaultStateDefault = ({
  iconTrailingSwap = <Placeholder2 className="placeholder-instance" />,
  iconLeadingSwap = <Placeholder2 className="placeholder-instance" />,
  iconTrailing = true,
  iconLeading = true,
  size = "md",
  hierarchy = "primary",
  icon = "dot-leading",
  state = "default",
  className,
  onClick,
  text = "Button",
  ...props
}) => {
  const variantsClassName =
    "size-" +
    size +
    " hierarchy-" +
    hierarchy +
    " icon-" +
    icon +
    " state-" +
    state;

  return (
    <div
      onClick={onClick}
      className={
        "buttons-button-size-2-xl-hierarchy-link-gray-icon-default-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      {iconLeading && <>{iconLeadingSwap}</>}
      <div className="text">{text}</div>
      {iconTrailing && <>{iconTrailingSwap}</>}
    </div>
  );
};
