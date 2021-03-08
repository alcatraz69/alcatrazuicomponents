import React from 'react';
import classes from './blogContainer.module.css'
import github from '../../socialsites/icons/github.svg';
import exportsvg from '../../socialsites/icons/export.svg';

const BlogContainer=(props)=>{
    return(
        <div className={classes.blogContainer}>
            <div className={classes.cards}>
            <div className={classes.card}>
                <div className={classes.cardImg}>
                    <img className={classes.cardimage} src="https://unsplash.it/800/600?image=59" alt="blog-img"/>
                </div>
                <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                    <h4 className={classes.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={classes.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={classes.blogiconcontainer}>
                        <img className={classes.blogicon} src={github} alt=""/>
                        <img className={classes.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            
            <div className={classes.card}>
                <div className={classes.cardImg}>
                    <img className={classes.cardimage} src="https://unsplash.it/800/600?image=82" alt="blog-img"/>
                </div>
                <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                    <h4 className={classes.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={classes.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={classes.blogiconcontainer}>
                        <img className={classes.blogicon} src={github} alt=""/>
                        <img className={classes.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardImg}>
                    <img className={classes.cardimage} src="https://unsplash.it/800/600?image=39" alt="blog-img"/>
                </div>
                <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                    <h4 className={classes.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={classes.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={classes.blogiconcontainer}>
                        <img className={classes.blogicon} src={github} alt=""/>
                        <img className={classes.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardImg}>
                    <img className={classes.cardimage} src="https://unsplash.it/800/600?image=11" alt="blog-img"/>
                </div>
                <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                    <h4 className={classes.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={classes.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={classes.blogiconcontainer}>
                        <img className={classes.blogicon} src={github} alt=""/>
                        <img className={classes.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardImg}>
                    <img className={classes.cardimage} src="https://unsplash.it/800/600?image=18" alt="blog-img"/>
                </div>
                <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                    <h4 className={classes.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={classes.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={classes.blogiconcontainer}>
                        <img className={classes.blogicon} src={github} alt=""/>
                        <img className={classes.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardImg}>
                    <img className={classes.cardimage} src="https://unsplash.it/800/600?image=69" alt="blog-img"/>
                </div>
                <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                    <h4 className={classes.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={classes.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={classes.blogiconcontainer}>
                        <img className={classes.blogicon} src={github} alt=""/>
                        <img className={classes.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default BlogContainer;