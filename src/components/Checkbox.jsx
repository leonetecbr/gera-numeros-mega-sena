import React from "react"

class Checkbox extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.props.onChange(this.props.context)
  }

  render() {
    return <input type="checkbox" name={this.props.title} id={this.props.title} onChange={this.handleChange} />
  }
}

export default Checkbox