import "./SocialIconPlatformXTwitterStyleGrayStateDefault.css";

export const SocialIconPlatformXTwitterStyleGrayStateDefault = ({
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
        "social-icon-platform-x-twitter-style-gray-state-default " +
        className +
        " " +
        variantsClassName
      }
      src="social-icon-platform-x-twitter-style-gray-state-default.svg"
    />
  );
};
