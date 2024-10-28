import { StyledNavigation } from "./styled/Navigation.styled";

interface NavigationProps {
  activeNav: string;
  setActiveNav: (value: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeNav,
  setActiveNav,
}) => {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => setActiveNav("feed")}
            className={activeNav === "feed" ? "active" : ""}
          >
            feed
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setActiveNav("explore")}
            className={activeNav === "explore" ? "active" : ""}
          >
            explore
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => setActiveNav("discussions")}
            className={activeNav === "discussions" ? "active" : ""}
          >
            discussions
          </a>
        </li>
      </ul>
    </StyledNavigation>
  );
};
