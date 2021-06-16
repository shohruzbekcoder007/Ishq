import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import MediaCard from './MediaCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      padding: 10
    },
    miniContainer: {
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    formControl: {
      minWidth: 120,
      width: "100%"
    },
    imagsBox: {
        display: "flex",
        flexWrap: "wrap",
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
    },
});

function UploadImages(props) {

  const classes = useStyles();
  const [selectedFile,setSelectedFile] = React.useState(null);
  const [images,setImages] = React.useState(null);
//   const [fileId,setFileId] = React.useState("");
//   const [fileName,setFileName] = React.useState("");

  React.useEffect(() => {
        fetch('http://localhost:8080/allImages')
        .then(response => response.json())
        .then(data => {
            setImages(data);
            console.log(data);
        })
        .catch(error => {
            console.error(error)
        })
    },[]);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleClick = async () => {

      const formData = new FormData(); 
     
      formData.append( 
        "file", 
        selectedFile
      ); 
          
      
      try{
        const res = await axios.post('http://localhost:8080/upload',formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      } catch (error){
        console.log(error)
      }
  }

  
  return (
    <div className={classes.root}>
        <div className={classes.miniContainer}>
            <span>Mavzuga mos rasmni tanlang</span>
            <input id="outlined-basic" type="file" accept=".jpg, .jpeg, .png" onChange={handleChange}/>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleClick}
            >
            Rasmni qo'shish
            </Button>
        </div>
        <div className={classes.imagsBox}>
            {(images)?(
                images.map(elem => {
                  return  <MediaCard key={elem.filename} url={`http://localhost:8080/image/${elem.filename}`} filename={elem.filename} id={elem._id}/>
                })
            ):(<p>Rasmlar yuklanmoqda</p>)}
        </div>
    </div>
  );
}

export default UploadImages;
