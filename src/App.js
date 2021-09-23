import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      date: new Date()
    }; // this is the component state property object
  }

  componentDidMount () {
    this.timer = setInterval(
      () => this.updateTime(),
      1000
    );
  }

  updateTime () {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount () {
    // run code just before component is removed from the DOM
    clearInterval(this.timer);
  }

  render () {
    return (
      <div>
        <h2 className="mx-2 my-2">
          The time now is {this.state.date.toLocaleTimeString()}.
        </h2>
      </div>
    )
  }
}

export default Clock;
