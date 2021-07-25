import React from "react";
class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <span>It is {this.state.date.toLocaleTimeString()}.</span>
      </div>
    );
  }
}
export default State;
