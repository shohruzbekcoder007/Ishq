import React from 'react';
import ChartOne from './ChartOne';

function MainPost(props) {
  return (
    <>
        <div className="trending-top mb-30">
            {/* <div className="trend-top-img">
                <img src="assets/img/trending/trending_top.jpg" alt=""/>
                <div className="trend-top-cap">
                    <span>Appetizers</span>
                    <h2><a href="details.html">Welcome To The Best Model Winner Contest At Look of the year</a></h2>
                </div>
            </div> */}
            <ChartOne shakil={props.shakil}/>
        </div>
    </>
  );
}

export default MainPost;
