import { StyledMenu, Btn } from "./MobileMenu.styled";
import { IoMdClose } from 'react-icons/io';
import { theme } from "style-helper/variables";

const MobileMenu = ({ children, setIsOpened }) => {
    
    

    return <StyledMenu>
        <Btn onClick={() => setIsOpened(false)}><IoMdClose size={35} fill={theme.color.accentColorThird}/></Btn>
        {children }
    </StyledMenu>
}

export default MobileMenu;