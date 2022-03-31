import React, {useState} from 'react'

const Footer = () => {

  const initialState = {
    like: false,
    likeCount: 0,
    save: false
  }

  const [state, setState] = useState(initialState)

  const changeState = () => {
    setState(prevState => ({
      ...prevState,
      like: !prevState.like, // if i put only true, it will not toggle
      likeCount: prevState.like === false
      ? prevState.likeCount + 1
      : prevState.likeCount -1
    }))
  }

  const changeSaveState = () => {
    setState(prevState=>({
      ...prevState,
      save: !prevState.save
    }))
  }

  const likeState = state.like === false ? "like" : "like_active"

  const saveState = state.save === false ? "save" : "save_active"

  return (
    <div>
      <div className="footer">
        <div className="footer-icons">
          <span  className={likeState} onClick={changeState} id="like"></span>
          <span className="comment" id=""></span>
          <span className="send" id=""></span>
          <div className="save-icon-container">
            <span
              className={saveState}
              onClick={changeSaveState}
              id="save"></span>
          </div>
        </div>
        <div className="caption-container">
          <h4><span>{state.likeCount}</span> Likes </h4>
          <div className="caption">
            <h4>Andrew Scott</h4> <span>A walk under the stars✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
