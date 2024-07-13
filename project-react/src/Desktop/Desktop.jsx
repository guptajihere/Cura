import "./Desktop.css";
import { Placeholder } from "../Placeholder/Placeholder.jsx";
import { ButtonsButtonSize2XlHierarchyLinkGrayIconDefaultStateDefault } from "../ButtonsButtonSize2XlHierarchyLinkGrayIconDefaultStateDefault/ButtonsButtonSize2XlHierarchyLinkGrayIconDefaultStateDefault.jsx";
import { ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault } from "../ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault/ButtonsButtonSizeLgHierarchyLinkGrayIconDefaultStateDefault.jsx";
import { DropdownHeaderNavigationTriggerOpenFalseTypeSimple } from "../DropdownHeaderNavigationTriggerOpenFalseTypeSimple/DropdownHeaderNavigationTriggerOpenFalseTypeSimple.jsx";
import { ChevronDown } from "../ChevronDown/ChevronDown.jsx";
import { Placeholder2 } from "../Placeholder2/Placeholder2.jsx";
import { ChevronLeft } from "../ChevronLeft/ChevronLeft.jsx";
import { ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled } from "../ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled/ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled.jsx";
import { ChevronRight } from "../ChevronRight/ChevronRight.jsx";
import { ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault } from "../ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault/ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault.jsx";
import { Au } from "../Au/Au.jsx";
import { TagSizeMdIconFalseActionTextOnlyCheckboxFalse } from "../TagSizeMdIconFalseActionTextOnlyCheckboxFalse/TagSizeMdIconFalseActionTextOnlyCheckboxFalse.jsx";
import { SocialIconPlatformXTwitterStyleGrayStateDefault } from "../SocialIconPlatformXTwitterStyleGrayStateDefault/SocialIconPlatformXTwitterStyleGrayStateDefault.jsx";
import { SocialIconPlatformLinkedInStyleGrayStateDefault } from "../SocialIconPlatformLinkedInStyleGrayStateDefault/SocialIconPlatformLinkedInStyleGrayStateDefault.jsx";
import { SocialIconPlatformGoogleStyleGrayStateDefault } from "../SocialIconPlatformGoogleStyleGrayStateDefault/SocialIconPlatformGoogleStyleGrayStateDefault.jsx";
import { ArrowRight } from "../ArrowRight/ArrowRight.jsx";
import { ArrowUp } from "../ArrowUp/ArrowUp.jsx";
import { BadgeSizeLgTypePillColorIconFalseColorBrand } from "../BadgeSizeLgTypePillColorIconFalseColorBrand/BadgeSizeLgTypePillColorIconFalseColorBrand.jsx";
import { BadgeSizeLgTypePillOutlineIconFalseColorGray } from "../BadgeSizeLgTypePillOutlineIconFalseColorGray/BadgeSizeLgTypePillOutlineIconFalseColorGray.jsx";
import { SocialIconPlatformTwitterStyleGrayStateDefault } from "../SocialIconPlatformTwitterStyleGrayStateDefault/SocialIconPlatformTwitterStyleGrayStateDefault.jsx";
import { SocialIconPlatformFacebookStyleGrayStateDefault } from "../SocialIconPlatformFacebookStyleGrayStateDefault/SocialIconPlatformFacebookStyleGrayStateDefault.jsx";
import { HeartRounded } from "../HeartRounded/HeartRounded.jsx";
import { useRef } from "react";

export const Desktop = ({ className, ...props }) => {
  const MentalHealthAndFocusRef = useRef(null);
  const expertsDivRef = useRef(null);
  const energyRef = useRef(null);
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={"desktop " + className}>
      <div className="hero-header-section">
        <div className="dropdown-header-navigation">
          <div className="header">
            <div className="container">
              <div className="content">
                <img className="logo" src="logo0.svg" />
                <div className="navigation">
                  <ButtonsButtonSize2XlHierarchyLinkGrayIconDefaultStateDefault
                    iconLeadingSwap={
                      <Placeholder className="placeholder-instance" />
                    }
                    iconTrailing={false}
                    iconTrailingSwap={
                      <Placeholder className="placeholder-instance" />
                    }
                    iconLeading={false}
                    size="2-xl"
                    hierarchy="link-gray"
                    icon="default"
                    text="Mental health and Focus"
                    onClick={() => scrollToSection(MentalHealthAndFocusRef)}
                    className="buttons-button-instance"
                  ></ButtonsButtonSize2XlHierarchyLinkGrayIconDefaultStateDefault>
                  <ButtonsButtonSize2XlHierarchyLinkGrayIconDefaultStateDefault
                    iconLeadingSwap={
                      <Placeholder className="placeholder-instance" />
                    }
                    iconTrailing={false}
                    iconTrailingSwap={
                      <Placeholder className="placeholder-instance" />
                    }
                    iconLeading={false}
                    size="2-xl"
                    hierarchy="link-gray"
                    icon="default"
                    text="Energy and Vitality"
                    onClick={() => scrollToSection(energyRef)}
                    className="buttons-button-instance"
                  ></ButtonsButtonSize2XlHierarchyLinkGrayIconDefaultStateDefault>

                  <ButtonsButtonSize2XlHierarchyLinkGrayIconDefaultStateDefault
                    iconLeadingSwap={
                      <Placeholder className="placeholder-instance" />
                    }
                    iconTrailing={false}
                    iconTrailingSwap={
                      <Placeholder className="placeholder-instance" />
                    }
                    iconLeading={false}
                    size="2-xl"
                    hierarchy="link-gray"
                    icon="default"
                    className="buttons-button-instance"
                    text="Experts"
                    onClick={() => scrollToSection(expertsDivRef)}
                  ></ButtonsButtonSize2XlHierarchyLinkGrayIconDefaultStateDefault>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-section">
          <div className="section">
            <div className="container2">
              <div className="content2">
                <div className="heading-and-supporting-text">
                  <div className="heading-and-badge">
                    <div className="heading">
                      Take charge of your health
                      <br />
                      with expert advice{" "}
                    </div>
                  </div>
                  <div className="supporting-text">
                    Get the best, most innovative supplements, plus expert tips
                    from the <br />
                    world&#039;s top researchers and doctors.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="background-pattern">
              <img className="background" src="background0.svg" />
              <img className="right-vectors" src="right-vectors0.svg" />
              <img className="left-vectors" src="left-vectors0.svg" />
            </div>
            <img className="rectangle-8" src="rectangle-80.svg" />
            <img className="rectangle-7" src="rectangle-70.png" />
          </div>
          <div className="section2">
            <div className="content3">
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="hair">Hair </div>
              </div>
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="skin">Skin </div>
              </div>
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="aging">Aging </div>
              </div>
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="stress">Stress </div>
              </div>
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="brain">Brain </div>
              </div>
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="immune">Immune </div>
              </div>
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="fatigue">Fatigue </div>
              </div>
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="joints">Joints </div>
              </div>
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="muscle">Muscle </div>
              </div>
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="sleep">Sleep </div>
              </div>
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="focus">Focus </div>
              </div>
              <div className="category">
                <div className="ellipse-1"></div>
                <div className="show-all">Show all </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rail">
        <div className="header2" ref={MentalHealthAndFocusRef}>
          <div className="heading2">
            <div className="supplements-to-improve">
              Supplements to improve{" "}
            </div>
            <div className="mental-health-and-focus">
              Mental health and Focus{" "}
            </div>
          </div>
          <div className="carousel-buttons">
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronLeft className="chevron-left-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              state="disabled"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled>
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronRight className="chevron-right-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault>
          </div>
        </div>
        <div className="content4">
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-40.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-16" src="rectangle-160.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar0.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar1.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-41.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-162" src="rectangle-161.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar2.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar3.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-42.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-163" src="rectangle-162.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar4.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar5.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-43.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-164" src="rectangle-163.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar6.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar7.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-44.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-165" src="rectangle-164.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar8.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar9.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-45.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-166" src="rectangle-165.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar10.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar11.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-46.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-167" src="rectangle-166.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar12.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar13.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-47.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-168" src="rectangle-167.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar14.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar15.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-48.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-169" src="rectangle-168.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar16.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar17.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-49.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1610" src="rectangle-169.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar18.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar19.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-410.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1611" src="rectangle-1610.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar20.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar21.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-411.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1612" src="rectangle-1611.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar22.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar23.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-412.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1613" src="rectangle-1612.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar24.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar25.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rail2">
        <div className="header2">
          <div className="heading2">
            <div className="supplements-to-improve">
              Supplements to improve{" "}
            </div>
            <div className="skin-hair-and-nail-health">
              Skin, Hair, and Nail Health{" "}
            </div>
          </div>
          <div className="carousel-buttons">
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronLeft className="chevron-left-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              state="disabled"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled>
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronRight className="chevron-right-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault>
          </div>
        </div>
        <div className="content4">
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-413.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1614" src="rectangle-1613.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar26.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar27.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-414.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1615" src="rectangle-1614.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar28.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar29.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-415.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1616" src="rectangle-1615.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar30.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar31.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-416.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1617" src="rectangle-1616.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar32.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar33.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-417.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1618" src="rectangle-1617.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar34.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar35.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-418.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1619" src="rectangle-1618.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar36.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar37.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-419.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1620" src="rectangle-1619.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar38.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar39.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-420.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1621" src="rectangle-1620.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar40.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar41.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-421.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1622" src="rectangle-1621.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar42.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar43.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-422.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1623" src="rectangle-1622.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar44.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar45.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-423.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1624" src="rectangle-1623.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar46.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar47.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-424.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1625" src="rectangle-1624.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar48.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar49.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-425.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1626" src="rectangle-1625.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar50.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar51.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rail3" ref={expertsDivRef}>
        <div className="header3">
          <div className="heading2">
            <div className="know-more-about-the">Know more about the </div>
            <div className="experts">Experts </div>
          </div>
          <div className="subtext">
            Cura is not affiliated with or endorsed by Bryan Johnson or <br />
            Dr. Andrew Huberman. <br />
            Any references to their names, images, or recommendations are solely
            for informational purposes.{" "}
          </div>
        </div>
        <div className="content7">
          <div className="bryan-johnson">
            <img className="image" src="image0.png" />
            <div className="text-and-social-links">
              <div className="name-and-supporting-text">
                <div className="name-and-role">
                  <div className="am-lie-laurent">Bryan Johnson </div>
                </div>
                <div className="supporting-text2">
                  A visionary entrepreneur, founder of Braintree and Kernel, and
                  an investor through OS Fund, committed to advancing human
                  potential through innovation and scientific research.{" "}
                </div>
              </div>
            </div>
            <div className="social-icons">
              <SocialIconPlatformXTwitterStyleGrayStateDefault
                platform="x-twitter"
                styleVariant="gray"
                className="social-icon-instance"
              ></SocialIconPlatformXTwitterStyleGrayStateDefault>
              <SocialIconPlatformLinkedInStyleGrayStateDefault
                platform="linked-in"
                styleVariant="gray"
                className="social-icon-instance2"
              ></SocialIconPlatformLinkedInStyleGrayStateDefault>
              <SocialIconPlatformGoogleStyleGrayStateDefault
                platform="google"
                styleVariant="gray"
                className="social-icon-instance2"
              ></SocialIconPlatformGoogleStyleGrayStateDefault>
            </div>
          </div>
          <div className="bryan-johnson">
            <img className="image" src="image1.png" />
            <div className="text-and-social-links">
              <div className="name-and-supporting-text">
                <div className="name-and-role">
                  <div className="am-lie-laurent">Dr. Andrew Huberman </div>
                </div>
                <div className="supporting-text2">
                  Professor of Neurobiology &amp; Ophthalmology at Stanford
                  Medicine • Host of the Huberman Lab podcast • Focused on
                  science &amp; health research &amp; public education{" "}
                </div>
              </div>
            </div>
            <div className="social-icons">
              <SocialIconPlatformXTwitterStyleGrayStateDefault
                platform="x-twitter"
                styleVariant="gray"
                className="social-icon-instance2"
              ></SocialIconPlatformXTwitterStyleGrayStateDefault>
              <SocialIconPlatformLinkedInStyleGrayStateDefault
                platform="linked-in"
                styleVariant="gray"
                className="social-icon-instance2"
              ></SocialIconPlatformLinkedInStyleGrayStateDefault>
              <SocialIconPlatformGoogleStyleGrayStateDefault
                platform="google"
                styleVariant="gray"
                className="social-icon-instance2"
              ></SocialIconPlatformGoogleStyleGrayStateDefault>
            </div>
          </div>
        </div>
      </div>
      <div className="rail4">
        <div className="header2">
          <div className="heading2">
            <div className="supplements-to-improve">
              Supplements to improve{" "}
            </div>
            <div className="sleep-and-relaxation">Sleep and Relaxation </div>
          </div>
          <div className="carousel-buttons">
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronLeft className="chevron-left-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              state="disabled"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled>
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronRight className="chevron-right-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault>
          </div>
        </div>
        <div className="content4">
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-426.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1627" src="rectangle-1626.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar52.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar53.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-427.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1628" src="rectangle-1627.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar54.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar55.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-428.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1629" src="rectangle-1628.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar56.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar57.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-429.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1630" src="rectangle-1629.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar58.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar59.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-430.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1631" src="rectangle-1630.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar60.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar61.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-431.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1632" src="rectangle-1631.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar62.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar63.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-432.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1633" src="rectangle-1632.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar64.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar65.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-433.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1634" src="rectangle-1633.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar66.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar67.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-434.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1635" src="rectangle-1634.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar68.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar69.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-435.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1636" src="rectangle-1635.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar70.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar71.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-436.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1637" src="rectangle-1636.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar72.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar73.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-437.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1638" src="rectangle-1637.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar74.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar75.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-438.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1639" src="rectangle-1638.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar76.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar77.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rail5">
        <div className="header2">
          <div className="heading2">
            <div className="supplements-to-improve">
              Supplements to improve{" "}
            </div>
            <div className="digestive-health">Digestive Health </div>
          </div>
          <div className="carousel-buttons">
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronLeft className="chevron-left-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              state="disabled"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled>
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronRight className="chevron-right-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault>
          </div>
        </div>
        <div className="content4">
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-439.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1640" src="rectangle-1639.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar78.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar79.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-440.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1641" src="rectangle-1640.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar80.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar81.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-441.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1642" src="rectangle-1641.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar82.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar83.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-442.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1643" src="rectangle-1642.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar84.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar85.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-443.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1644" src="rectangle-1643.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar86.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar87.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-444.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1645" src="rectangle-1644.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar88.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar89.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-445.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1646" src="rectangle-1645.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar90.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar91.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-446.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1647" src="rectangle-1646.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar92.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar93.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-447.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1648" src="rectangle-1647.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar94.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar95.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-448.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1649" src="rectangle-1648.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar96.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar97.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-449.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1650" src="rectangle-1649.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar98.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar99.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-450.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1651" src="rectangle-1650.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar100.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar101.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-451.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1652" src="rectangle-1651.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar102.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar103.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rail6">
        <div className="header4">
          <div className="heading3">
            <div className="supplements-to-improve2">
              Supplements to improve{" "}
            </div>
            <div className="frame-13">
              <BadgeSizeLgTypePillColorIconFalseColorBrand
                flagSwap={<Au className="au-instance" />}
                iconTrailingSwap={
                  <ArrowRight className="arrow-right-instance" />
                }
                iconLeadingSwap={<ArrowUp className="arrow-up-instance" />}
                size="lg"
                className="badge-instance"
              ></BadgeSizeLgTypePillColorIconFalseColorBrand>
              <BadgeSizeLgTypePillOutlineIconFalseColorGray
                flagSwap={<Au className="au-instance" />}
                iconTrailingSwap={
                  <ArrowRight className="arrow-right-instance" />
                }
                iconLeadingSwap={<ArrowUp className="arrow-up-instance" />}
                size="lg"
                type="pill-outline"
                color="gray"
                className="badge-instance2"
              ></BadgeSizeLgTypePillOutlineIconFalseColorGray>
              <BadgeSizeLgTypePillOutlineIconFalseColorGray
                flagSwap={<Au className="au-instance" />}
                iconTrailingSwap={
                  <ArrowRight className="arrow-right-instance" />
                }
                iconLeadingSwap={<ArrowUp className="arrow-up-instance" />}
                size="lg"
                type="pill-outline"
                color="gray"
                className="badge-instance2"
              ></BadgeSizeLgTypePillOutlineIconFalseColorGray>
              <BadgeSizeLgTypePillOutlineIconFalseColorGray
                flagSwap={<Au className="au-instance" />}
                iconTrailingSwap={
                  <ArrowRight className="arrow-right-instance" />
                }
                iconLeadingSwap={<ArrowUp className="arrow-up-instance" />}
                size="lg"
                type="pill-outline"
                color="gray"
                className="badge-instance2"
              ></BadgeSizeLgTypePillOutlineIconFalseColorGray>
              <BadgeSizeLgTypePillOutlineIconFalseColorGray
                flagSwap={<Au className="au-instance" />}
                iconTrailingSwap={
                  <ArrowRight className="arrow-right-instance" />
                }
                iconLeadingSwap={<ArrowUp className="arrow-up-instance" />}
                size="lg"
                type="pill-outline"
                color="gray"
                className="badge-instance2"
              ></BadgeSizeLgTypePillOutlineIconFalseColorGray>
            </div>
          </div>
          <div className="carousel-buttons">
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronLeft className="chevron-left-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              state="disabled"
              className="buttons-button-instance3"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled>
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronRight className="chevron-right-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              className="buttons-button-instance4"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault>
          </div>
        </div>
        <div className="content4">
          <div className="card2">
            <div className="thumbnail2">
              <div className="b-complex2">B Complex </div>
              <img className="image-4" src="image-452.png" />
              <div className="rectangle-152"></div>
              <img className="rectangle-1653" src="rectangle-1652.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by3">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar104.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar105.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                </div>
              </div>
              <div className="pricing2">
                <div className="divider2"></div>
                <div className="content6">
                  <div className="starting-at2">Starting at </div>
                  <div className="price">
                    <div className="_1002">$100 </div>
                    <div className="_60-capsules2">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="thumbnail2">
              <div className="b-complex2">B Complex </div>
              <img className="image-4" src="image-453.png" />
              <div className="rectangle-152"></div>
              <img className="rectangle-1654" src="rectangle-1653.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by3">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar106.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar107.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                </div>
              </div>
              <div className="pricing2">
                <div className="divider2"></div>
                <div className="content6">
                  <div className="starting-at2">Starting at </div>
                  <div className="price">
                    <div className="_1002">$100 </div>
                    <div className="_60-capsules2">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="thumbnail2">
              <div className="b-complex2">B Complex </div>
              <img className="image-4" src="image-454.png" />
              <div className="rectangle-152"></div>
              <img className="rectangle-1655" src="rectangle-1654.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by3">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar108.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar109.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                </div>
              </div>
              <div className="pricing2">
                <div className="divider2"></div>
                <div className="content6">
                  <div className="starting-at2">Starting at </div>
                  <div className="price">
                    <div className="_1002">$100 </div>
                    <div className="_60-capsules2">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="thumbnail2">
              <div className="b-complex2">B Complex </div>
              <img className="image-4" src="image-455.png" />
              <div className="rectangle-152"></div>
              <img className="rectangle-1656" src="rectangle-1655.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by3">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar110.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar111.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                </div>
              </div>
              <div className="pricing2">
                <div className="divider2"></div>
                <div className="content6">
                  <div className="starting-at2">Starting at </div>
                  <div className="price">
                    <div className="_1002">$100 </div>
                    <div className="_60-capsules2">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="thumbnail2">
              <div className="b-complex2">B Complex </div>
              <img className="image-4" src="image-456.png" />
              <div className="rectangle-152"></div>
              <img className="rectangle-1657" src="rectangle-1656.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by3">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar112.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar113.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                </div>
              </div>
              <div className="pricing2">
                <div className="divider2"></div>
                <div className="content6">
                  <div className="starting-at2">Starting at </div>
                  <div className="price">
                    <div className="_1002">$100 </div>
                    <div className="_60-capsules2">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="thumbnail2">
              <div className="b-complex2">B Complex </div>
              <img className="image-4" src="image-457.png" />
              <div className="rectangle-152"></div>
              <img className="rectangle-1658" src="rectangle-1657.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by3">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar114.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar115.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                </div>
              </div>
              <div className="pricing2">
                <div className="divider2"></div>
                <div className="content6">
                  <div className="starting-at2">Starting at </div>
                  <div className="price">
                    <div className="_1002">$100 </div>
                    <div className="_60-capsules2">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="thumbnail2">
              <div className="b-complex2">B Complex </div>
              <img className="image-4" src="image-458.png" />
              <div className="rectangle-152"></div>
              <img className="rectangle-1659" src="rectangle-1658.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by3">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar116.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar117.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                </div>
              </div>
              <div className="pricing2">
                <div className="divider2"></div>
                <div className="content6">
                  <div className="starting-at2">Starting at </div>
                  <div className="price">
                    <div className="_1002">$100 </div>
                    <div className="_60-capsules2">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="thumbnail2">
              <div className="b-complex2">B Complex </div>
              <img className="image-4" src="image-459.png" />
              <div className="rectangle-152"></div>
              <img className="rectangle-1660" src="rectangle-1659.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by3">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar118.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar119.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                </div>
              </div>
              <div className="pricing2">
                <div className="divider2"></div>
                <div className="content6">
                  <div className="starting-at2">Starting at </div>
                  <div className="price">
                    <div className="_1002">$100 </div>
                    <div className="_60-capsules2">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="thumbnail2">
              <div className="b-complex2">B Complex </div>
              <img className="image-4" src="image-460.png" />
              <div className="rectangle-152"></div>
              <img className="rectangle-1661" src="rectangle-1660.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by3">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar120.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar121.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                </div>
              </div>
              <div className="pricing2">
                <div className="divider2"></div>
                <div className="content6">
                  <div className="starting-at2">Starting at </div>
                  <div className="price">
                    <div className="_1002">$100 </div>
                    <div className="_60-capsules2">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="thumbnail2">
              <div className="b-complex2">B Complex </div>
              <img className="image-4" src="image-461.png" />
              <div className="rectangle-152"></div>
              <img className="rectangle-1662" src="rectangle-1661.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance2"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by3">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar122.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar123.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border2"></div>
                  </div>
                </div>
              </div>
              <div className="pricing2">
                <div className="divider2"></div>
                <div className="content6">
                  <div className="starting-at2">Starting at </div>
                  <div className="price">
                    <div className="_1002">$100 </div>
                    <div className="_60-capsules2">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rail7" ref={energyRef}>
        <div className="header2">
          <div className="heading2">
            <div className="supplements-to-improve">
              Supplements to improve{" "}
            </div>
            <div className="energy-and-vitality">Energy and Vitality </div>
          </div>
          <div className="carousel-buttons">
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronLeft className="chevron-left-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              state="disabled"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled>
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronRight className="chevron-right-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault>
          </div>
        </div>
        <div className="content4">
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-462.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1663" src="rectangle-1662.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar124.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar125.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-463.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1664" src="rectangle-1663.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar126.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar127.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-464.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1665" src="rectangle-1664.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar128.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar129.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-465.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1666" src="rectangle-1665.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar130.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar131.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-466.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1667" src="rectangle-1666.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar132.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar133.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-467.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1668" src="rectangle-1667.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar134.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar135.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-468.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1669" src="rectangle-1668.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar136.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar137.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-469.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1670" src="rectangle-1669.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar138.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar139.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-470.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1671" src="rectangle-1670.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar140.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar141.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-471.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1672" src="rectangle-1671.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar142.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar143.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-472.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1673" src="rectangle-1672.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar144.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar145.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-473.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1674" src="rectangle-1673.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar146.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar147.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-474.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1675" src="rectangle-1674.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar148.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar149.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rail8">
        <div className="header2">
          <div className="heading2">
            <div className="supplements-to-improve">
              Supplements to improve{" "}
            </div>
            <div className="heart-health">Heart Health </div>
          </div>
          <div className="carousel-buttons">
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronLeft className="chevron-left-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              state="disabled"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDisabled>
            <ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault
              iconTrailingSwap={
                <Placeholder2 className="placeholder-instance2" />
              }
              iconLeadingSwap={
                <ChevronRight className="chevron-right-instance" />
              }
              iconTrailing={false}
              iconLeading={false}
              size="xl"
              hierarchy="secondary-color"
              icon="only"
              className="buttons-button-instance"
            ></ButtonsButtonSizeXlHierarchySecondaryColorIconOnlyStateDefault>
          </div>
        </div>
        <div className="content4">
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-475.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1676" src="rectangle-1675.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar150.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar151.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-476.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1677" src="rectangle-1676.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar152.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar153.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-477.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1678" src="rectangle-1677.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar154.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar155.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-478.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1679" src="rectangle-1678.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar156.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar157.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-479.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1680" src="rectangle-1679.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar158.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar159.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-480.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1681" src="rectangle-1680.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar160.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar161.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-481.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1682" src="rectangle-1681.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar162.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar163.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-482.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1683" src="rectangle-1682.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar164.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar165.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-483.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1684" src="rectangle-1683.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar166.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar167.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-484.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1685" src="rectangle-1684.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar168.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar169.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-485.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1686" src="rectangle-1685.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar170.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar171.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-486.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1687" src="rectangle-1686.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar172.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar173.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="thumbnail">
              <div className="b-complex">B Complex </div>
              <img className="image-4" src="image-487.png" />
              <div className="rectangle-15"></div>
              <img className="rectangle-1688" src="rectangle-1687.svg" />
            </div>
            <div className="content5">
              <div className="categories">
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
                <TagSizeMdIconFalseActionTextOnlyCheckboxFalse
                  flagSwap={<Au className="au-instance" />}
                  size="md"
                  className="tag-instance"
                ></TagSizeMdIconFalseActionTextOnlyCheckboxFalse>
              </div>
              <div className="recommended-by">
                <div className="recommended-by2">Recommended by </div>
                <div className="frame-7">
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar174.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                  <div
                    className="avatar"
                    style={{
                      background: "url(avatar175.png) center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="contrast-border"></div>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <div className="divider"></div>
                <div className="content6">
                  <div className="starting-at">Starting at </div>
                  <div className="price">
                    <div className="_100">$100 </div>
                    <div className="_60-capsules">/ 60 capsules </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-text">
          The statements above have not been evaluated by the Food and Drug
          Administration. <br />
          This product is not intended to diagnose, treat, cure, or prevent any
          disease.{" "}
        </div>
        <div className="container3">
          <div className="content8">
            <div className="social-icons2">
              <SocialIconPlatformTwitterStyleGrayStateDefault
                platform="twitter"
                styleVariant="gray"
                className="social-icon-instance3"
              ></SocialIconPlatformTwitterStyleGrayStateDefault>
              <SocialIconPlatformLinkedInStyleGrayStateDefault
                platform="linked-in"
                styleVariant="gray"
                className="social-icon-instance4"
              ></SocialIconPlatformLinkedInStyleGrayStateDefault>
              <SocialIconPlatformFacebookStyleGrayStateDefault
                styleVariant="gray"
                className="social-icon-instance4"
              ></SocialIconPlatformFacebookStyleGrayStateDefault>
            </div>
            <img className="logo2" src="logo1.svg" />
            <div className="frame-14">
              <div className="footer-text2">Curated with </div>
              <HeartRounded className="heart-rounded-instance"></HeartRounded>
              <div className="footer-text2">by Team Cura. </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
