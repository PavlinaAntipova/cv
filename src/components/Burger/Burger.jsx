import { FiMenu } from "react-icons/fi";
import { theme } from "style-helper/variables";
import { Btn } from "./Burger.styled";

const Burger = ({setIsOpened}) => {

    return <Btn onClick={() => setIsOpened(true)}>
        
        <FiMenu size={35} stroke={theme.color.accentColorThird}/>
    </Btn>
}

export default Burger;