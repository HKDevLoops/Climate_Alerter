import React from 'react'
import classes from "./news.module.css";

const News = () => {
  return (
    <div className={classes.container}>
    <div className={classes.wrapper}>
    <div>
    <h1>title</h1>
    </div>
    <div>
    <p>description</p>
    </div>
    <div>
    <button>Link</button>
    </div>

    </div>


    </div>
  )
}

export default News
