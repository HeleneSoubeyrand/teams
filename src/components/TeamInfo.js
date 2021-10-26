import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'



class TeamInfo extends React.Component {
    render() {
        const { shortName, crestUrl, venue, address, email, phone, founded } = this.props.team
        
        return (
            <div className="col-6 my-4">
                <div className="p-3 border bg-light rounded" style={{height: 400, boxShadow: "5px 5px 15px 5px #9E9E9E"}}>
                    <div className="d-flex justify-content-around">
                        <div className="col">
                            <h2 className="text-uppercase">{shortName}</h2>
                            <p style={{ fontStyle: "italic", paddingTop: 10 }}>Since {founded}</p>
                        </div>
                        <img style={{ height: 80 }} src={crestUrl} />
                    </div>
                    <p>{venue}</p>
                    <p>{address}</p>
                    <div className="pt-4" style={{ fontSize: 14}}>
                        <p style={{ borderTop: "solid 1px black", fontWeight: "bold", paddingTop: 10 }}>Contacts</p>
                        <p>{email}</p>
                        <p>{phone}</p> 
                    </div>  
                </div>
            </div>
        )
    }
}

export default TeamInfo;