import React from 'react';

const MyForm = (props) => {
  return (
    <form id="input-form" onSubmit={props.handleCommentSubmit}>
        
      <label className="pt-label .modifier">
        Emotion Tagline
        <input className="pt-input" type="text" placeholder="Text input" dir="auto" />
      </label>
        
      <label className="pt-label .modifier">
        Description
        <input className="pt-input" type="text" placeholder="Input group" dir="auto" />
      </label>

          <input type="submit" value="Submit State" />
        </form>
  )
}

export default MyForm; 