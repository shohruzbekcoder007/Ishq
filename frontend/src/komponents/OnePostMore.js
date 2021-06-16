import React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

function OnePostMore(props) {
    let location = useLocation();
    let history = useHistory();
    console.log(location,"<-lockation")
  return (
    <div style={{padding: "0 15px 15px 15px"}}>
        <div dangerouslySetInnerHTML={{ __html: location.state.data}} ></div>
        <div style={{display: "flex", justifyContent:"right", width: "100%"}}>
          <Button  onClick={() => history.goBack()}>
            Orqaga
          </Button>
        </div>
    </div>
  );
}

export default OnePostMore;