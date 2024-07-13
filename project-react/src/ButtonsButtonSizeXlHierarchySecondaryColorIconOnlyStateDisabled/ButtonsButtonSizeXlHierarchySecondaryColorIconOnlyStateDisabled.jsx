import "./ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled.css";
import { Placeholder2 } from "../Placeholder2/Placeholder2.jsx";
import { Placeholder } from "../Placeholder/Placeholder.jsx";

export const ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled =
  ({
    iconTrailingSwap = <Placeholder2 className="placeholder-instance" />,
    iconLeadingSwap = <Placeholder2 className="placeholder-instance2" />,
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
          "buttons-button-size-xl-hierarchy-secondary-color-icon-only-state-disabled " +
          className +
          " " +
          variantsClassName
        }
      >
        {iconLeadingSwap}
      </div>
    );
  };
