import React from 'react'

import {states} from '../courses'

class Course extends React.Component {
  constructor(props) {
    super(props)
    this.state = {buttonClicked: false}
  }

  render() {
    const {course, handleClick} = this.props
    const {code, name, moreInformation, state, taken} = course

    return (
      <div className={this.className(state)}>
        <input type="checkbox" checked={taken === true} onClick={_ => handleClick(code)}/>
        <div className="course--indicator"></div>
        {code}: {name}
        {this.button(moreInformation, this.handleMoreClick.bind(this))}
        {this.extras(this.state.buttonClicked, moreInformation)}
      </div>
    )
  }

  handleMoreClick() {
    this.setState({buttonClicked: !this.state.buttonClicked})
  }

  className(state) {
    switch (state) {
      case states.CURRENT:
        return 'course course--current'
      case states.PREVIOUS:
        return 'course course--previous'
      case states.FUTURE:
        return 'course course--future'
    }
  }

  button(moreInformation, clickHandler) {
    const buttonText = this.state.buttonClicked ? 'Less' : 'More'
    return moreInformation ?
      <small className="more" onClick={clickHandler}>{buttonText}</small> :
      <div></div>
  }

  extras(buttonClicked, moreInformation) {
    if (buttonClicked && moreInformation) {
      return (
        <div className="inset">
          <a href={moreInformation.reviewLink} target="_blank">Course reviews</a>
        </div>
      )
    }

    return (
      <div></div>
    )
  }
}

export default Course