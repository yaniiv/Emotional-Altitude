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
          labelArray.push(object.x)
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
            <VictoryAxis
    style={{
      axis: {stroke: "black"},
      grid: {strokeWidth: 2},
      ticks: {stroke: "red", size: 4},
      tickLabels: {fontSize: 12},
      axisLabel: {fontsize: 16}
    }}
    // label="Planets"
    tickValues={xArray}/>
        </svg>
    );
  }
}

module.exports = Victory;



//   <VictoryCandlestick
//       data={this.props.dater}

//         x={"date"}

//         // data={[
//         //     {date: new Date(2016, 8, 2), open: 5},
//         //     {date: new Date(2016, 8, 3), open: 15},
//         //     {date: new Date(2016, 8, 4), open: 15},
//         //     {date: new Date(2016, 8, 5), open: 25},
//         //     {date: new Date(2016, 8, 6), open: 25}
//         // ]}

//         close={(d) => d.open / 2 + 10}
//         high={(d) => d.open + 10}
//         low={(d) => d.open - 5}
//         />

// <VictoryScatter
//     width={500}
//     height={300}
//     standalone={false}
//     style={{
//       data: {
//         fill: "teal",
//       },
//       labels: {
//         fill: "teal",
//         fontSize: 14,
//         padding: 12
//       }
//     }}
//     size={4}
//     labels={[
//      "a", "b", "c", "d", "e", "f"
//     ]}
//     data={[
//       {x: 0, y: 0},
//       {x: 1, y: 3},
//       {x: 2, y: 2},      
//       {x: 3, y: 4},
//       {x: 4, y: 3},
//       {x: 5, y: 5}
//     ]}
//   />