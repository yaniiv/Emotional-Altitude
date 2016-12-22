import React from 'react';

const MyForm = (props) => {
  var taglineStyle = { width: '400px' };
  var descriptionStyle = {width: '400px', height: '150px', resize: "none" };
  
  return (
    <form id="input-form" onSubmit={props.handleCommentSubmit}>

      <label className="pt-label .modifier">
        Emotion Tagline
        <input
          className="pt-input"
          type="text"
          placeholder="Your General Vibe"
          dir="auto"/>
      </label>

      <label className="pt-label .modifier">
        Description
        <textarea
          style={descriptionStyle}
          className="pt-input .modifier"
          dir="auto">
      </textarea>
      </label>

      <input
        className="pt-button pt-intent-primary"
        type="submit"
        value="Submit State"/>
    </form>
  )
}

export default MyForm;