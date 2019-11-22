import React from 'react';
import Location from './Location';

class Product extends React.Component {

    onAddToCard(text) {
        alert(text);
    };
    showProductDetails(iphone) {
        console.log(iphone.name);
        
    };



    render() {
        var elementIphones = this.props.iphones.map((iphone, index) => {
            console.log(iphone.name);
            if (iphone.isInventory) {
                return <div key={index} className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                        <img data-src="" alt="Iphone X" src={iphone.image} className="img-fluid menu-image"></img>
                        <div className="caption">
                            <h3>{iphone.name}</h3>
                            <p>
                                {iphone.price}
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary" onClick={this.onAddToCard.bind(this, iphone.name)}>Buy</a>
                                <a href="#" className="btn btn-default">Detail</a>
                            </p>
                        </div>
                    </div>
                </div>
            }
        });
    return <div>
            {elementIphones}
        </div>;
    }
  }

export default Product;
