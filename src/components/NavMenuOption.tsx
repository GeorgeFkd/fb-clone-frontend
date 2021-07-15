import React from 'react'
import { IconContext } from 'react-icons/lib'
import "./NavMenuOption.css"

interface Props{
    //todo implement the open close stuff the old way and add dropdowns
    // any bcs icons are from different libs
    Icon:React.FC,
    tooltipText:string,
    dropdown?:React.FC

}

const NavMenuOption:React.FC<Props> = ({Icon,tooltipText,dropdown}) => {
    return (
        <div className="navmenu-option">
            <IconContext.Provider value={{className:"navmenu-option-icon"}}>

            <Icon />
            </IconContext.Provider>
            {/* tooltip */}
            <span className="navmenu-option-tooltip">{tooltipText}</span>
        </div>
    )
}

export default NavMenuOption
