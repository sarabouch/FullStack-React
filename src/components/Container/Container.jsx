import React from 'react';
import "./Container.scss"

const Container = props => {
    return (
        <section className="container">
            <div className="content">
                <span className="overline">For who and why?</span>
                <h2>Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Atque cum accusamus ducimus vel
                     nostrum et odit natus iusto, earum hic. This is created by <a href="/">Sara Bouchnak.</a></h2>
                <hr />
                {props.children}
            </div>
        </section>
    )
}


export default Container;
