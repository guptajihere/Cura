import "./TagSizeMdIconFalseActionTextOnlyCheckboxFalse.css";
import { Au } from "../Au/Au.jsx";

export const TagSizeMdIconFalseActionTextOnlyCheckboxFalse = ({
  flagSwap = <Au className="au-instance" />,
  size = "sm",
  icon = "false",
  action = "text-only",
  checkbox = "false",
  className,
  ...props
}) => {
  const variantsClassName =
    "size-" +
    size +
    " icon-" +
    icon +
    " action-" +
    action +
    " checkbox-" +
    checkbox;

  return (
    <div
      className={
        "tag-size-md-icon-false-action-text-only-checkbox-false " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="content">
        <div className="text">Label </div>
      </div>
    </div>
  );
};
