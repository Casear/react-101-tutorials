import React, { Component } from 'react';
import Thermometer from './components/Thermometer';
export class App extends Component {
  constructor(props){
    super(props);
    this.state = {temp:0,temp_max:30,temp_min:0}
    $.get('http://api.openweathermap.org/data/2.5/weather?q=Taipei&units=metric&appid=2de143494c0b295cca9337e1e96b00e0',
        function(data){
            this.setState({temp:data.main.temp})
        }.bind(this)
    )

  }
  render() {
    console.dir(this.state)
    return (
      <div className='ui text container'>
        <Thermometer 
            min={this.state.temp_min}
            max={this.state.temp_max}
            width={20}
            height={300}
            backgroundColor={'blue'}
            fillColor={'green'}
            current={this.state.temp}
        />
      </div>
    );
  }
}