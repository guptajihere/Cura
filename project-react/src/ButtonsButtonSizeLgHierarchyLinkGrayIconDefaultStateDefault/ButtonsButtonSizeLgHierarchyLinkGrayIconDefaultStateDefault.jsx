import "./ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault.css";
import { Placeholder2 } from "../Placeholder2/Placeholder2.jsx";
import { Placeholder } from "../Placeholder/Placeholder.jsx";

export const ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault = ({
  iconTrailingSwap = <Placeholder2 className="placeholder-instance" />,
  iconLeadingSwap = <Placeholder2 className="placeholder-instance" />,
  iconTrailing = true,
  iconLeading = true,
  size = "md",
  hierarchy = "primary",
  icon = "dot-leading",
  state = "default",
  className,
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
      className={
        "buttons-button-size-lg-hierarchy-link-gray-icon-default-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      {iconLeading && <>{iconLeadingSwap}</>}
      <div className="text">Button CTA </div>
      {iconTrailing && <>{iconTrailingSwap}</>}
    </div>
  );
};
