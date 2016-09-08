import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryCandlestick} from 'victory';
import { VictoryLine} from 'victory';
import { VictoryScatter} from 'victory';
import { VictoryArea} from 'victory';
import { VictoryAxis} from 'victory';


class Victory extends Component {
  render() {
      var labelArray = [];
      var xArray = []
      this.props.dater.forEach(function(object){
          labelArray.push(object.label)
      })
      this.props.dater.forEach(function(object){
          xArray.push(object.x)
      })
    
      console.log("array of labels is ", labelArray);

    console.log("data for chart is", this.props.dater)
    return (
        <svg height={300} width={1000}>
            <VictoryArea
                animate={{duration: 2000}}
                width={1000}
                height={300}
                standalone={false}
                style={{
                data: {
                    fill: "teal",
                    opacity: 0.3
                }
                }}
                data={this.props.dater}
            />
            <VictoryScatter
                animate={{duration: 2000}}
                width={1000}
                height={300}
                standalone={false}
                style={{
                data: {
                    fill: "teal",
                },
                labels: {
                    fill: "teal",
                    fontSize: 14,
                    padding: 12
                }
                }}
                size={4}
                labels={labelArray}
                data={this.props.dater}
            />  
          
        </svg>
        
    );
  }
}

module.exports = Victory;