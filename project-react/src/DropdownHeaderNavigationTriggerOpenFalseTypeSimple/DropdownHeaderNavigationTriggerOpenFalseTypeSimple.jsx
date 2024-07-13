import "./DropdownHeaderNavigationTriggerOpenFalseTypeSimple.css";
import { Placeholder } from "../Placeholder/Placeholder.jsx";
import { ChevronDown } from "../ChevronDown/ChevronDown.jsx";
import { ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault } from "../ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault/ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault.jsx";

export const DropdownHeaderNavigationTriggerOpenFalseTypeSimple = ({
  open = "true",
  type = "simple-2-col-with-footer",
  component0 = (
    <ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault
      iconLeadingSwap={<undefined />}
      iconTrailing={true}
      iconTrailingSwap={<undefined />}
      iconLeading={false}
      size="lg"
      hierarchy="link-gray"
      icon="default"
      state="default"
    />
  ),
  className,
  ...props
}) => {
  const variantsClassName = "open-" + open + " type-" + type;

  return (
    <div
      className={
        "dropdown-header-navigation-trigger-open-false-type-simple " +
        className +
        " " +
        variantsClassName
      }
    >
      {component0}
    </div>
  );
};
