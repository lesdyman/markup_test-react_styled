import { StyledCard } from "./styled/Card.styled";

interface CardStyle {
  topStyle?: "to" | "via" | "none";
  bottomStyle: "share-button" | "likes";
}

export const Card: React.FC<CardStyle> = ({ bottomStyle, topStyle }) => {
  return (
    <StyledCard>
      {topStyle !== "none" &&
        (topStyle === "to" ? (
          <div className="card-top">
            <span className="text">Shared to</span>
            <span className="tag">#discussionaboutanimgttdds…</span>
          </div>
        ) : (
          <div className="card-top">
            <img src="src/assets/icon_link copy.svg" alt="link icon" />
            <span>Shared via weblink</span>
          </div>
        ))}

      <span className="card-messege">
        New air routes that promise cheap flights in
      </span>
      <div className="card-bottom">
        <div className="wrapper">
          <div className="round"></div>
          <span className="name">Gregory Watkins</span>
        </div>

        {bottomStyle === "share-button" ? (
          <a href="#" className="share-button">
            Share
          </a>
        ) : (
          <div className="stat-wrapper">
            <div className="stat-item">
              <img src="src/assets/icon_view.svg" alt="view icon" />
              <span>88</span>
            </div>
            <div className="stat-item">
              <img src="src/assets/icon_like.svg" alt="heart icon" />
              <span>24</span>
            </div>
          </div>
        )}
      </div>
    </StyledCard>
  );
};
