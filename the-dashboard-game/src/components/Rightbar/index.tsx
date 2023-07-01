import { socialAreaData } from "../../data/database";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { SocialData } from "./SocialData";
import { StyledRightbar } from "./styles";

export const Rightbar = () => {
  const newSocialAreaData = [...socialAreaData];
  return (
    <StyledRightbar>
      <StyledTitle tag="h2" fontWeight={700} fontSize="slg">
        Social
      </StyledTitle>
      <div>
        <StyledParagraph fontSize="md">
          <strong>ONLINE</strong>
        </StyledParagraph>

        {newSocialAreaData.map((socialAreaData) => (
          <SocialData socialData={socialAreaData} />
        ))}
      </div>
      <div>
        <StyledParagraph fontSize="md">
          <strong>OFFLINE</strong>
        </StyledParagraph>
        <div className="offline">
          {newSocialAreaData.map((socialAreaData) => (
            <SocialData socialData={socialAreaData} />
          ))}
        </div>
      </div>
    </StyledRightbar>
  );
};
