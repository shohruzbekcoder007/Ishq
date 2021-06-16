import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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
    selectEmpty: {
    },
});

function Questions(props) {

  const classes = useStyles();
  const [fileId,setFileId] = React.useState("");
  const [fileName,setFileName] = React.useState("");
  const [postType,setPostType] = React.useState(50);
  const [postPosition,setPostPosition] = React.useState(1);
  const [postMiniText,setPostMiniText] = React.useState("");
  const [selectedFile,setSelectedFile] = React.useState(null);

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
        setFileId(res.data._id);
        setFileName(res.data.filename);
      } catch (error){
        console.log(error)
      }
  }

  const handleChangeType = (event) => {
    setPostType(event.target.value);
    let malumot = {
      _fileId: fileId,
      _fileName: fileName,
      _postType: event.target.value,
      _postMiniText: postMiniText,
      _postPosition: postPosition
    }
    props.malumotlar(malumot);
  };

  const handleChangePosition = (event) => {
    setPostPosition(event.target.value);
    let malumot = {
      _fileId: fileId,
      _fileName: fileName,
      _postType: postType,
      _postMiniText: postMiniText,
      _postPosition: event.target.value
    }
    props.malumotlar(malumot);
  }

  const onchangeText = (event) => {
    setPostMiniText(event.target.value);
    let malumot = {
      _fileId: fileId,
      _fileName: fileName,
      _postType: postType,
      _postMiniText: event.target.value,
      _postPosition: postPosition
    }
    props.malumotlar(malumot);
  }

  return (
    <div className={classes.root}>
        <div className={classes.miniContainer}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="filled-age-native-simple">Maqola qaysi sohaga tegishli?</InputLabel>
              <Select
                native
                onChange={handleChangeType}
              >
                <option aria-label="None" value="" />
                <option value={10}>Iqtisodiyot</option>
                <option value={20}>Siyosat</option>
                <option value={30}>Sport</option>
                <option value={40}>Ijtimoiy</option>
                <option value={50}>Boshqa</option>
              </Select>
            </FormControl>
        </div>
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
      <div className={classes.miniContainer}>
          <TextField
              id="outlined-secondary"
                label="Maqolaning qisqacha mazmuni nima haqida"
                variant="outlined"
                color="secondary"
                style={{width: "100%"}}
                onChange={onchangeText}
            />
        </div>
        <div className={classes.miniContainer}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="filled-age-native-simple">Maqolaning saytdagi joylashuvi</InputLabel>
              <Select
                native
                onChange={handleChangePosition}
              >
                <option aria-label="None" value="" />
                <option value={1}>Post</option>
                <option value={2}>LeftMini</option>
                <option value={3}>NewPost</option>
              </Select>
            </FormControl>
        </div>
    </div>
  );
}

export default Questions;
