import { LogoText, StyledLink, StyledList, StyledLogo, StyledLogoWrapper } from './Header.styled';

export const Header = () => {
    return (
        <nav>
        <StyledList>
            <li>
                    <StyledLink to = "/">
                        <LogoText>
                            Car
                        </LogoText>
                        <StyledLogo/>
                        <LogoText>
                            Rental
                        </LogoText>
                    </StyledLink>
            </li>
            <li>
                <StyledLink to="/catalog">
                    Catalog
                </StyledLink>
            </li>
            <li>
                <StyledLink to="/favorites">
                    Favorites
                </StyledLink>
            </li>
        </StyledList>
    </nav>
    )
}