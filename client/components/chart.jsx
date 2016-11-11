import React from 'react';
import { render } from 'react-dom';
import { VictoryCandlestick } from 'victory';
import { VictoryLine } from 'victory';
import { VictoryScatter } from 'victory';
import { VictoryArea } from 'victory';
import { VictoryAxis } from 'victory';
import { VictoryChart } from 'victory';
import { VictoryBar } from 'victory';
import moment from 'moment';


export default class Victory extends React.Component {
	render() {
		let dateTicks = this.props.emotionData.map((feelsObj) => {
			return moment(feelsObj.feelingDate).calendar()
		});

		let emotionTicks = this.props.emotionData.map((feelsObj) => {
			return feelsObj.feelingNum;
		})

		console.log('dateTicks ', dateTicks);
		console.log('emotionTicks ', emotionTicks);
		console.log('emotionData, ', this.props.emotionData);

		return (		
			<VictoryChart   >
			<svg width={600} height={600}> 

				<VictoryAxis
					tickValues={dateTicks}	
					label={"Date"}
				/>

				<VictoryScatter
					animate={{duration: 2000}}	
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
          size={2}     
					data={this.props.emotionData}
					labels={(data)=>data.feelingText}
					x={"feelingDate"}
					y={"feelingNum"}
        />  


				<VictoryArea
			  	animate={{duration: 2000}}
        	style={{
          data: {
            fill: "teal",
            opacity: 0.3
            }
        	}}		
					data={this.props.emotionData}
					x={"feelingDate"}
					y={"feelingNum"}
				/>
			</svg>
			</VictoryChart>
		)
	}
}

								
				// <VictoryAxis
				// dependentAxis		
				// 	orientation='left'	
				// 	label={"Emotional Altitude"}
				// 	tickCount={1}	
				// 	// tickValues={[]}
				// 	// tickFormat={["first", "second", "third"]}
				// />



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