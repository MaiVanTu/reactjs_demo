import React from 'react';
import './App.css';
import Header from '../Menu/Header';
import Product from './components/Product';
import Location from './components/Location';
import ColorPicker from './ColorPicker';
import Reset from './Reset';
import Result from './Result';
import Size from './Size';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'red',
			size :12
		}
	}
	
	receviceColor(params) {
		this.setState({
			color:params
		});
	}

	receviceSize(params) {
		this.setState({
			size:params
		});
	}

	reset(params) {
		this.setState({
			color: 'red',
			size :12
		});
	}

	render() {
		return (
			
			<div className="container mt-5">
				
				<div className="row">
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						
						<ColorPicker 
							color={this.state.color}
							onRecevice={this.receviceColor.bind(this)}
							/>
						
					</div>
					
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						
						<Size 
							size={this.state.size} 
							onRecevice={this.receviceSize.bind(this)}
							/>
						<Reset reset={this.reset.bind(this)}/>
					</div>
					
				</div>
				
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<Result color={this.state.color} size={this.state.size}/>
					</div>
				</div>
				
				
			</div>
			
		);
	}
}

export default App;
