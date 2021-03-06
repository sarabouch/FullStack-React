import React from 'react';
import "./List.scss";
import { Button } from "reactstrap"


const EpisodeList = () => {
    return (
        <div className="episodeList">
            <div className="episodecontainer">
                <div className="episod-number">
                    <img className="episode-img" src="/undraw_interview_rmcf.svg" alt="" />
                </div>
                <div className="episode">
                    <h5>episode #1</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                        inventore! ipsum dolor sit amet consectetur adipisicing elit. Accusamus, inventore!</p>
                    <div className="guest">
                        <img src="/ee0e70b2ae91f7209f3a78247986e280--disney-princes-disney-cruiseplan.jpg" alt="" />
                        <h4> <span> Guest:</span> gsghhsd gdsg from <a href="/">jkjk</a></h4>
                    </div>
                    <Button>Listen on Soundcloud  →</Button>
                    <a href="/">or jump to iTunes</a>
                </div>

            </div>

        </div>
    )
}


export default EpisodeList;
