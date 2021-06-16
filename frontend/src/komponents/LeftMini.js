import React from 'react';
import { Link } from 'react-router-dom';

function LeftMini(props) {
  return (
    <>
        <div className="trand-right-single d-flex">
            <div className="trand-right-img" style={{width: "30%"}}>
                {/* <img src="assets/img/trending/right1.jpg" alt=""/> */}
                <img src={props.src} alt="post img" style={{width:"100%"}}/>
            </div>
            <div className="trand-right-cap" style={{width: "70%"}}>
                {/* <span className="color3">Concert</span> */}
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
                {/* <h4><Link to="linkgaalmashtir">{props.minText}</Link></h4> */}
                <h4>
                    <Link
                        to={{
                            pathname: "/onePostMore",
                            search: "",
                            hash: "",
                            state: { data: props.data }
                        }}
                    >
                        {props.minText}
                    </Link>
                </h4>
            </div>
        </div>
    </>
  );
}

export default LeftMini;
