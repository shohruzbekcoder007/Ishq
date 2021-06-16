import React, {Component} from 'react';
import CanvasJSReact from '../charts/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
function ChartOne(props) {
    // constructor(props){
	// 	super(props);
	// 	this.state = {type: props.shakil}
	// }
	// render() {
		const options = {
			animationEnabled: true,
            theme: "dark2",
			title: {
				text: "Malumotlar grafiklarda"
            },
            axisX: {
                crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				// title: "Capacity (in MWp)",
                logarithmic: true,
                crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			data: [{
				// type: "bar",
				// type: props.shakil,
				type: (props.shakil)?props.shakil:"bar",
				showInLegend: true,
                legendText: "{label}",
				dataPoints: [
				  { label: "lola", y: 1615},
				  { label: "lola1", y: 2069},
				  { label: "lola2", y: 405000},
				  { label: "lola3", y: 405000},
				  { label: "lola4", y: 5112},
				  { label: "lola5", y: 6660},
				  { label: "lola6", y: 405000},
				  { label: "lola7", y: 15844},
				  { label: "lola8", y: 23185},
				  { label: "lola9", y: 40336},
				  { label: "lola10", y: 70469},
				  { label: "lola11", y: 100504},
				  { label: "lola12", y: 138856},
				  { label: "lola13", y: 178391},
				  { label: "lola14", y: 229300},
				  { label: "lola15", y: 302300},
				  { label: "lola16", y: 405000}   
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
// }
// line bar pie scatter 
 
export default ChartOne;