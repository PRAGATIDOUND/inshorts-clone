import {Container} from "@material-ui/core" ;

import "./newsContent.css";
import NewsCard from "../NewsCard/NewsCard";
import React from 'react';

const NewsContent = ({newsArray,newsResults ,loadMore, setLoadMore}) => {
    return (
    
        <Container maxWidth="md">
            <div className="content">
                <div className="downloadMessage">
                    <span className="downloadText">
                        for the best experience use inshort app for smartphone
                    </span>
                    <img src="https://assets.inshorts.com/website_assets/images/appstore.png" height="80%" alt="app-store" />
                    <img src="https://assets.inshorts.com/website_assets/images/playstore.png" height="80%" alt="play-store" />
                </div>
                
                  
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        
        {loadMore <= newsResults && (
          <>
            <hr />
            <div className="btn">
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
            </div>

          </>
        )}
                
                
            </div>
        </Container>
        
    )
}

export default NewsContent
