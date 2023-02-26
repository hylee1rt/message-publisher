import React, { Component } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import Drafts from '../components/Drafts';
import handleSubmit from '../handles/HandleSubmit';
import { useRef } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './editor.css';


const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

const editorblock = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

class NewFile extends Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
    }
  }
  

  onContentStateChange = (contentState) => {
    this.setState({
      contentState,
    });
  };

  render() {
    const { contentState } = this.state;
    return (
      <div style={editorblock}>
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          localization={{
            locale: 'ko',
          }}
          onContentStateChange={this.onContentStateChange}
          // create a Blob from the JSON-string
          value={JSON.stringify(contentState, null, 4)}
          //var blob = new Blob([value], {type: "application/json"})
        />
        <textarea
          disabled
          value={JSON.stringify(contentState, null, 4)}
        />
        <div className='button-wrapper'>
          <button className='button-save'>Save</button>
          <button className='button-save'>Submit</button>
        </div>
      </div>
    );
  }
}

export default NewFile;


