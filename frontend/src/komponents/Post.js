import React from 'react';
import { Link } from 'react-router-dom';

function MainPost(props) {

    // console.log(props,"<<-----")
  return (
    <>
        <div className="col-lg-4">
            <div className="single-bottom mb-35">
                <div className="trend-bottom-img mb-30">
                    <img src={props.src} alt="post img"/>
                </div>
                <div className="trend-bottom-cap">
                    {
                        (props.type == 'iqtisod')?
                            (<span className="color1">{"Iqtisodiyot"}</span>):
                        (props.type == 'siyosat')?
                            (<span className="color1">{"Siyosat"}</span>):
                        (props.type == 'sport')?
                            (<span className="color2">{"Sport"}</span>):
                        (props.type == 'ijtimoiy')?
                            (<span className="color3">{"Ijtimoiy soha"}</span>):
                        (props.type == 'boshqa')?
                            (<span className="color4">{"Boshqa"}</span>):(<></>)
                    }
                    <h4>
                        <Link
                            to={{
                                pathname: "/onePostMore",
                                search: "",
                                hash: "",
                                state: { data: props.data }
                            }}
                            data={props.data}
                            >{props.minText}
                        </Link>
                     </h4>
                </div>
            </div>
        </div>
    </>
  );
}

export default MainPost;
