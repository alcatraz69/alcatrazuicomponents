import React from 'react';
import DropdownItem from './DropdownItem/DropdownItem'
import classes from './DropdownItems.module.css'

const DropdownItems=(props)=>{
    const items=[
        "Home",
        "About",
        "Projects",
        "Blogs",
        "Contact"
    ]
    
    return(
        <ul className={classes.dropdownList}>
            {
                items.map(item=>(<DropdownItem
                    key={item}
                >
                    {item}
                </DropdownItem>))
            }
        </ul>
    )
}

export default DropdownItems;