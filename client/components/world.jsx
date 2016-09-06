import React from 'react';
import ReactDOM from 'react-dom';
 
class World extends React.Component {
  render() {
    return <h1>World</h1>
  }
}
 
ReactDOM.render(<World/>, document.getElementById('world'));

//     //
// class Calendar extends React.Component {

//     constructor() {
//         super();
//         this.state = {};
//         // this.returnsDayNum = this.returnsDayNum.bind(this);
//         //this.processAndSetData = this.processAndSetData.bind(this);
//     }

//     componentWillMount() {
//         $.ajax({
//             url: this.props.url,
//             dataType: 'json',
//             success: function (data) {
//                 //  console.log(data)
//                 this.processAndSetWeeks(data);
//                 //this.state = {data: data};
//                 //   console.log(this.state);
//             }.bind(this)
//         });
//     }

//     returnsDayNum(daykey) {
//         let res = daykey.substring(4, 7);
//         let resnum = '';
//         if (res[0] == '0') {
//             resnum = JSON.parse(res[1])
//         }
//         else {
//             resnum = JSON.parse(res);
//         }
//         return resnum;
//     }

//     processAndSetWeeks(data) {
//         //console.log(data)
//         var week1 = [];
//         var week2 = [];
//         var week3 = [];
//         var week4 = [];
//         // var dayNum;
//         for (let daykey in data) {
//             //  console.log(daykey)
//             var dayNum = this.returnsDayNum(daykey);
//             if (dayNum <= 7) {
//                 week1.push(data[daykey])
//             }
//             else if (dayNum > 7 && dayNum <= 14) {
//                 week2.push(data[daykey])
//             }
//             else if (dayNum > 14 && dayNum <= 21) {
//                 week3.push(data[daykey])
//             }         // if(res[0] === '0') {
//             else if (dayNum > 21 && dayNum <= 31) {
//                 week4.push(data[daykey])
//             }
//         }

//         //console.log(week1)
//         var temp = {week1: week1, week2: week2; week3: week3, week4:week4}
//         this.setState(temp);
//         //console.log(this.state)
//         // this.ProcessWeekToDay(week1);

//     }

//     // ProcessWeekToDay(singleWeekArray){ 
//     //     var x = singleWeekArray[0][0].start.dateTime
//     //     var dayName = moment(x).format('dddd')
//     //     console.log(dayName)
//     //     console.log(x)

//     // }




//   render(){
//       return (
//        <div className = "calendar">
//         This is a Calendar, now rendering a Weeks
//         <Week weekData = {this.state.week1} />
//         <Week weekData = {this.state.week2} />
//         <Week weekData = {this.state.week3} />
//         <Week weekData = {this.state.week4} />
//        </div>
//     );
//   }
// }