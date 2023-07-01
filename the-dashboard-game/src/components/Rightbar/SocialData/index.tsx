import { iSocialData } from "../../../data/database";
import { StyledTitle, StyledParagraph } from "../../../styles/typography";
import { StyledSocialAreaData } from "./styles";

interface iSocialAreaDataProps {
  socialData: iSocialData;
}

export const SocialData = ({ socialData }: iSocialAreaDataProps) => {
  return (
    <StyledSocialAreaData>
      <img src={socialData.image} alt={socialData.name} />
      <div>
        <StyledTitle fontSize="md" fontWeight={700} tag="h3">
          {socialData.name}
        </StyledTitle>
        <StyledParagraph fontSize="sm">{socialData.subject}</StyledParagraph>
      </div>
    </StyledSocialAreaData>
  );
};
