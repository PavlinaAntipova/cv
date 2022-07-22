import MobileMenu from "components/MobileMenu/MobileMenu";
import Burger from "components/Burger/Burger";
import { useMediaQuery } from 'react-responsive'
import Navigation from "components/Navigation";
import { BsCursorFill } from 'react-icons/bs';
import { theme } from "style-helper/variables";

import { Header, Logo } from "./AppBar.styled";
import { useEffect, useRef, useState } from "react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const AppBar = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [isOpened, setIsOpened] = useState(false);
    const root = useRef(document.getElementsByTagName('body'));

    useEffect(() => {
         if (isOpened) {
            disableBodyScroll(root);
         } else {
             enableBodyScroll(root);
         }

         return () => { clearAllBodyScrollLocks(root) };
        
    }, [isOpened]);
    
    return <Header>
        <Logo to='/'><BsCursorFill fill={theme.color.accentColorFirst} /> Pavlina Antipova</Logo>
        {isMobile ? <>
            <Burger setIsOpened={setIsOpened}/>
            {isOpened && <MobileMenu setIsOpened={setIsOpened}><Navigation setIsOpened={setIsOpened}/></MobileMenu>}
             </> : <Navigation />}
        
    </Header>
}

export default AppBar;