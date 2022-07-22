import { NavLinkStyled, Link, Nav } from './Navigation.styled';

const Navigation = ({setIsOpened}) => {
    return <Nav onClick={() => setIsOpened(false)}>
        <NavLinkStyled to='/'>Home</NavLinkStyled>
        <NavLinkStyled to='/about'>About</NavLinkStyled>
        <NavLinkStyled to='/projects'>All Projects</NavLinkStyled>
        <Link target='_blank' href="https://drive.google.com/file/d/1M-_mzzF9pYCpMF2wv8VGoUNMAew4oGYb/view?usp=sharing">CV</Link>
    </Nav>
}

export default Navigation;