import React from 'react';
import { render } from 'react-dom';
import { VictoryCandlestick} from 'victory';
import { VictoryLine} from 'victory';
import { VictoryScatter} from 'victory';
import { VictoryArea} from 'victory';
import { VictoryAxis } from 'victory';
import { VictoryChart } from 'victory';
import { VictoryBar } from 'victory';
import moment from 'moment';


class Victory extends React.Component {
  render() {
      let dateTicks = this.props.emotionData.map((feelsObj) => {
         return moment(feelsObj.feelingDate).format("MMM Do YY")
      });
        console.log('dateTicks ', dateTicks);
        console.log('emotionData, ', this.props.emotionData);

        return(
          <VictoryChart>
            <VictoryAxis
             tickValues = {[dateTicks]}
          // tickFormat specifies how ticks should be displayed
          />

        <VictoryBar
          data={this.props.emotionData}       
          x={"feelingDate"}
          y={"feelingNum"}
        />
        
      </VictoryChart>      
    );
  }
}

module.exports = Victory;


//  <svg height={300} width={1000}>
//             <VictoryArea
//                 animate={{duration: 2000}}
//                 width={1000}
//                 height={300}
//                 standalone={false}
//                 style={{
//                 data: {
//                     fill: "teal",
//                     opacity: 0.3
//                 }
//                 }}
//                 data={this.props.dater}
//             />
//             <VictoryScatter
//                 animate={{duration: 2000}}
//                 width={1000}
//                 height={300}
//                 standalone={false}
//                 style={{
//                 data: {
//                     fill: "teal",
//                 },
//                 labels: {
//                     fill: "teal",
//                     fontSize: 14,
//                     padding: 12
//                 }
//                 }}
//                 size={4}
//                 labels={labelArray}
//                 data={this.props.dater}
//             />  
          
//         </svg>