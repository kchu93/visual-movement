import React from 'react';
import { Link } from 'react-router-dom';
import * as ApiUtil from '../../utils/image_api_util';


class ImageForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      author_id: this.props.currentUser.id,
      description: "",
      image_url: 'aklsdjkflaj',
      imageFile: null,
      imageUrl: ""
    };

    this.updateDescription = this.updateDescription.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateDescription(e){
    e.preventDefault();
    this.setState({
      description: e.target.value
    });
  }

  updateFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = function(){
      this.setState({
        imageFile: file, imageUrl: fileReader.result
      });
    }.bind(this);

    if (file){
      fileReader.readAsDataURL(file);
    }
  }


  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("image[description]", this.state.description);
    formData.append("image[image]", this.state.imageFile);
    formData.append("image[image_url]", this.state.image_url);
    ApiUtil.createImage(formData, this.goBack);
  }


  render() {
    return (
      <div>
        Upload Image!

        <input type="text" onChange={this.updateDescription} />
        <input type="file" onChange={this.updateFile} />
        <button onClick={this.handleSubmit}>Create Image</button>
        <img src={this.state.imageUrl} />
      </div>
    );
  }
}


export default ImageForm;
