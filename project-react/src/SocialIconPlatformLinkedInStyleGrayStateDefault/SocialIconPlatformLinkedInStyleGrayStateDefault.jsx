import "./SocialIconPlatformLinkedInStyleGrayStateDefault.css";

export const SocialIconPlatformLinkedInStyleGrayStateDefault = ({
  platform = "facebook",
  styleVariant = "brand",
  state = "default",
  className,
  ...props
}) => {
  const variantsClassName =
    "platform-" +
    platform +
    " style-variant-" +
    styleVariant +
    " state-" +
    state;

  return (
    <div
      className={
        "social-icon-platform-linked-in-style-gray-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <img className="group" src="group0.svg" />
    </div>
  );
};
