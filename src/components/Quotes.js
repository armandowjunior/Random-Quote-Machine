import React from 'react';
import twitterIcon from '../twitter.svg';
import tumblrIcon from '../tumblr.svg';

const Quotes = (props) => {
    return (
        <div id="quote-box">
            <div id="quote-text">
                <i className="fa fa-quote-left"> </i><span id="text">{props.quote}</span> <i id="quote-right" className="fa fa-quote-right" > </i>
            </div>
            <div id="author"><p>{props.author}</p></div>

            <div id="buttons">

                <div className="social-media">

                    <a id="tweet-quote"
                    target="_blank"
                    rel="noreferrer"
                    title="Tweet this quote!"
                    href={encodeURI(`https://twitter.com/intent/tweet?text=${props.quote}%0D%0A  - ${props.author}`)} >
                        <span><img src={twitterIcon} alt="Tweet this quote!" /></span>
                    </a>

                    <a id="tumblr-quote"
                    target="_blank"
                    rel="noreferrer"
                    title="Post this quote on Tumblr!"
                    href={encodeURI(`http://tumblr.com/widgets/share/tool?canonicalUrl=http://agitated-kirch-8b8d24.netlify.app/&content=${props.quote}&caption=${props.author}`)} >
                        <span><img src={tumblrIcon} alt="Post this quote on Tumblr!" /></span>
                    </a>

                </div>

                <button onClick={props.handleClick} id="new-quote">New Quote</button>
            </div>
        </div>
    );
}

export default Quotes;