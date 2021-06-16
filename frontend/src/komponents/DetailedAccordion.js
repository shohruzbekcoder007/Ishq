import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Questions from "./Questions"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 10
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export function DetailedAccordion() {
  const classes = useStyles();
  const [post,setPost] = React.useState({});
  {console.log(post)}
  return (
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Location</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
          </div>
        </AccordionSummary>
            <Questions malumotlar={(newPost)=>{setPost(newPost)}}/>
        <Divider />
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button 
            size="small" 
            color="primary"
            onClick={()=>{
              // console.log(post,post._fileId)
              if(post == {} || post._fileId == ""){
                console.log("yozilmadi")
              }else{
                fetch('http://localhost:8080/createPost', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    // selectedFile: post._selectedFile,
                    fileId: post._fileId,
                    fileName: post._fileName,
                    postType: post._postType,
                    postMiniText: post._postMiniText,
                    postPosition: post._postPosition
                  })
                })
                .then(response => response.json())
                .then(data => {
                  console.log(data);
                })
                .catch(error => {
                  console.error(error)
                })
                console.log("yozildi")
              }
            }}
            // disabled={post._fileId?"true":"false"}
            
            // style={(post == {} || post._fileId == "")?{display: "none"}:{display: "block"}}
          >
            Save
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
