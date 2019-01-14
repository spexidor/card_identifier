import React from 'react';
import ReactDOM from 'react-dom';
import Webcam from 'react-webcam';
 
class MyWebcam extends React.Component {
  render() {
    return <Webcam />;
  }
}


class MainPage extends React.Component {
    render() {
        return (
            <div>
             <div>Hello Jonas</div>
             <button onClick={ShowAlert}>Show alert</button>
             <MyWebcam/>
             </div>
        )
    }
}

class WebcamCapture extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };
  
 
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    //return "TEST";
    alert("image data: " +imageSrc);
  };
 
  render() {
    let dynamicText = "JONAS!";
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
 
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
        <div>{dynamicText}</div>
      </div>
    );
  }
}

function ShowAlert() {
    //alert(true? "hi there":"");
    alert("hi there!");
}


ReactDOM.render(<WebcamCapture/>, document.getElementById('root'));
