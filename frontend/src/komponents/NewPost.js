import React from 'react';
import { Link } from 'react-router-dom';

function NewPost(props) {
  return (
    <>
        <div className="col-lg-6 col-md-6">
                <div className="single-what-news mb-100">
                    <div className="what-img">
                        {/* <img src="assets/img/news/whatNews1.jpg" alt=""/> */}
                        <img src={props.src} alt="post img"/>
                    </div>
                    <div className="what-cap">
                        {/* <span className="color1">Night party</span> */}
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

export default NewPost;
