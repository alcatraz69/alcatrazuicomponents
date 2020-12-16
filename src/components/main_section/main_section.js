import classes from './main_section.module.css'


const MainSection=(props)=>{
    return (
        <div className={classes.main_sec}>
            <div><h1>Hi, my name is</h1></div>
            <div><h2 className={classes.big_heading}>Prem Kantikar.</h2></div>
            <div><h3 className={classes.big_heading}>I build things for the web.</h3></div>
            <div><p>I'm a software engineer based in Bangalore, KA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p></div>
            <div><a href="mailto:prkantikar69@gmail.com" className={classes.email_link}>Get In Touch</a></div>
           
        </div>
    );
}

export default MainSection;