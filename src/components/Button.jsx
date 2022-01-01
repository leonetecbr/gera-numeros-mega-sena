import React from "react"

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick()
  }

  render() {
    return <button onClick={this.handleClick}>{this.props
      .title}</button>
  }
}

export default Button