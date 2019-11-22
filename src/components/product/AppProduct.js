import React from 'react';
import './App.css';
import Header from './components/product/Header';
import Product from './components/product/Product';
import Location from './components/product/Location';

class App extends React.Component {
	addProduct(iphones) {
		alert("Add product" + "\r\n"
		+ "Name: " + this.refs.name.value + "\r\n"
		+ "Price: " + this.refs.price.value + "\r\n"
		+ "Link: " + this.refs.link.value + "\r\n");
	}
	render() {
		var iphones = [
			{
				id : 1,
				image : "https://tudeptrai.s3-ap-southeast-1.amazonaws.com/image/xr.png",
				name: "Iphone X",
				price: "15.000.000",
				isInventory: true
			},
			{
				id : 2,
				image : "https://tudeptrai.s3-ap-southeast-1.amazonaws.com/image/iphonex.png",
				name: "Iphone XR",
				price: "16.000.000",
				isInventory: true
			},
			{
				id : 3,
				image : "https://tudeptrai.s3-ap-southeast-1.amazonaws.com/image/11.png",
				name: "Iphone XS",
				price: "17.000.000",
				isInventory: true
			}
		];
		return (
			<div className="App">
				  <Header/>
				  
				<div class="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="panel panel-warning">
								<div className="panel-heading">
									<h3 className="panel-title">Add product</h3>
								</div>
								<div className="panel-body">
									
									<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
										<div className="form-group text-left">
											<label className="">Name</label>
											<input type="text" className="form-control" id="" placeholder="Input name" ref="name"/>
										</div>
										<div className="form-group text-left">
											<label className="">Price</label>
											<input type="text" className="form-control" id="" placeholder="Input price" ref="price"/>
										</div>
										<div className="form-group text-left">
											<label className="">Image</label>
											<input type="text" className="form-control" id="" placeholder="Input link" ref="link"/>
										</div>
										<button type="submit" className="btn btn-primary" onClick={this.addProduct.bind(this, iphones)}>Add</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<Product iphones={iphones}/>
						</div>
					</div>
					
					<div className="row">
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<Location/>
						</div>
					</div>
				</div>
				
			</div>
		  );
	}
}

export default App;
