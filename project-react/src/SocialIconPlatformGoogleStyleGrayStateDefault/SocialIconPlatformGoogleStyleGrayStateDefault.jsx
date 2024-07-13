import "./SocialIconPlatformGoogleStyleGrayStateDefault.css";

export const SocialIconPlatformGoogleStyleGrayStateDefault = ({
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
    <img
      className={
        "social-icon-platform-google-style-gray-state-default " +
        className +
        " " +
        variantsClassName
      }
      src="social-icon-platform-google-style-gray-state-default.svg"
    />
  );
};
