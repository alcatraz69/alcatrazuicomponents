import react from 'react';
import classes from './navbar.module.css'

const navbar=(props)=>{
    return(
        <nav className={classes.navbar}>
            <div className={classes.logo}>

            </div>
            <div className={classes.navigationItemsDesktop}>
                <p className={`${classes.navButton} ${classes.activeDesktop}`}>
                    Home
                </p>
                <p className={classes.navButton}>
                    About
                </p>
                <p className={classes.navButton}>
                    Projects
                </p>
                <p className={classes.navButton}>
                    Blogs
                </p>
                <p className={classes.navButton}>
                    Contact
                </p>
            </div>
        </nav>
    )

}

export default navbar;