import PropTypes from "prop-types";
import CKEditor from "ckeditor4-react";
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

class TwoWayBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "<p>React is really <em>nice</em>!</p>",
      radioValueMavzu: 'boshqa',
      radioValueUrin: 'post',
      miniText: 'To\'liq tanishing'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSabmit = this.handleSabmit.bind(this);
    this.handleChangeRadioMavzu = this.handleChangeRadioMavzu.bind(this);
    this.handleChangeRadioUrin = this.handleChangeRadioUrin.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
    this.textChange = this.textChange.bind(this);
    
  }

  onEditorChange(evt) {
    // console.log(this.state.data);
    this.setState({
      data: evt.editor.getData()
    });
  }

  handleChange(changeEvent) {
    // console.log(this.props.data);
    this.setState({
      data: changeEvent.target.value
    });
  }

  // const [value, setValue] = React.useState('female');

  handleChangeRadioMavzu(changeEvent) {
    // setValue(event.target.value);
    this.setState({
      radioValueMavzu: changeEvent.target.value
    });
  };

  handleChangeRadioUrin(changeEvent) {
    // setValue(event.target.value);
    this.setState({
      radioValueUrin: changeEvent.target.value
    });
  };

  textChange(changeEvent){
    this.setState({
      miniText: changeEvent.target.value
    });
  }
  
  handleSabmit() {
    let one = this.state.data;
    let start = one.search(/src/i);
    let src = "";
    for(let i = start + 5; i < one.length; i++){
      if(one[i] == "\"") break;
      src = src + one[i];
    }
    // console.log(one.search(/src/i),"<>",src);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // data: "<p>React is really <em>nice</em>!</p>",
      // radioValueMavzu: 'boshqa',
      // radioValueUrin: 'post'
      body: JSON.stringify({
        data: this.state.data,
        mavzu: this.state.radioValueMavzu,
        urni: this.state.radioValueUrin,
        postMiniText: this.state.miniText,
        postImage: src
      })
      };
      fetch('http://localhost:8080/createPost', requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log({data});
            
          });
    // alert("ishladiku")
  };

  render() {
    // console.log('salom')
    return (
      <>
        <div>
            <CKEditor data={this.state.data} onChange={this.onEditorChange} />
            {/* <EditorPreview data={this.state.data} /> */}
        </div>
        <h4 style={{
            textAlign: "center",
            paddingBottom: "15px",
            paddingTop: "15px"
          }}>
            Tayyorlangan maqolaning saytdagi o'rini va mavzusi
        </h4>
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
        <TextField 
          id="outlined-basic"
          label="Maqola haqida qisqacha"
          variant="outlined"
          onChange={this.textChange}
          style={{width: "100%", marginBottom: "15px"}}
        />
          <FormControl component="fieldset1">
            <FormLabel component="legend">Maqolaning mavzusi</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={this.state.radioValueMavzu} onChange={this.handleChangeRadioMavzu}>
              <FormControlLabel value="iqtisod" control={<Radio />} label="Iqtisod" />
              <FormControlLabel value="siyosat" control={<Radio />} label="Siyosat" />
              <FormControlLabel value="ijtimoiy" control={<Radio />} label="Ijtimoiy" />
              <FormControlLabel value="sport" control={<Radio />} label="Sport" />
              <FormControlLabel value="boshqa" control={<Radio />} label="Aralash" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset2">
            <FormLabel component="legend">Joylashish o'rni</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={this.state.radioValueUrin} onChange={this.handleChangeRadioUrin}>
              <FormControlLabel value="post" control={<Radio />} label="Post" />
              <FormControlLabel value="leftMini" control={<Radio />} label="LeftMini" />
              <FormControlLabel value="newPost" control={<Radio />} label="NewPost" />
              {/* <FormControlLabel value="disabled" control={<Radio />} label="(Disabled option)" /> */}
            </RadioGroup>
          </FormControl>
          
        </div>
        <div style={{textAlign:"right",padding: "10px"}}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={this.handleSabmit}
            >
                Save
            </Button>
        </div>
      </>
    );
  }
}

class EditorPreview extends Component {
  render() {
    return (
      <div className="editor-preview">
        <h4 style={{paddingTop: "10px", textAlign: "center"}}>Maqolaning kurisnishi</h4>
        <hr/>
        <div style={{padding:"10px"}} dangerouslySetInnerHTML={{ __html: this.props.data }}></div>
        <hr/>
      </div>
    );
  }
}

EditorPreview.defaultProps = {
  data: ""
};

EditorPreview.propTypes = {
  data: PropTypes.string
};

export default TwoWayBinding;
