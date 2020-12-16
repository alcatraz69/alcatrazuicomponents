
import classes from './DesktopNavMenu.module.css'

const desktopNavMenu=(props)=>{
    return(
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
    )
}

export default desktopNavMenu