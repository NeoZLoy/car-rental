import { LogoText, StyledLink, StyledList, StyledLogo, StyledNav } from './Header.styled';

export const Header = () => {
    return (
        <StyledNav>
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
    </StyledNav>
    )
}