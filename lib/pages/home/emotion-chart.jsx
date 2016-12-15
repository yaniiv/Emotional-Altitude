import React from 'react';
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
		// 
		console.log('dateTicks ', dateTicks);
		console.log('emotionTicks ', emotionTicks);
		console.log('emotionData, ', this.props.emotionData);

		return (		
			// <VictoryChart   >
			<div id="eChart">
			<svg > 

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
				</div>	
			// </VictoryChart>
		)
	}
}
