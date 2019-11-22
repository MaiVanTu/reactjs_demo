import React from "react";

class Location extends React.Component {
    
    render() {
        var location = [
            {
                id : 1,
                name : "Mobile Hoang Hoa Tham",
                address : "179 Truong Cong Dinh"
            },
            {
                id : 2,
                name : "Mobile Hoang Hoa Hoan",
                address : "1909 Le Duan"
            },
            {
                id : 3,
                name : "Mobile Hoang Hoa Hau",
                address : "909 Tu Dep Trai"
            },
        ];
        var elementsLocation = location.map((location, index) => {
            return <div key={index}>
                <h3>{location.name}</h3>
                <br/>
                <h4>{location.address}</h4>
            </div>
        });
        return (
            <div>
                {elementsLocation}
            </div>
        );
    }
}

export default Location;