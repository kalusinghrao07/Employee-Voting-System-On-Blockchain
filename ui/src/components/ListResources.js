import React, { Fragment, useEffect, useState } from "react";

let ListResources = ({ resourceData, contract }) => {
    const [isVoted, setIsVoted] = useState(false);

    async function vote(id) {
        await contract.voteResource(id);
        setIsVoted(true);
    }
    
  useEffect(() => {
    // We are getting update data of employees with their votes
    if (typeof window.ethereum !== 'undefined' && isVoted) {
      (async function getResourcesCount() {
         const resourcedata = await contract.getResources()
         const resources = [...resourcedata]
         console.log(resources);
         setIsVoted(false);
      })()
    }
  });
    
    return (
        <Fragment>
            {resourceData.map((resource, id) => {
                return (
            <div key={id} className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card list-group-item-danger shadow-lg my-2">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-sm-4">
                                        <img className="contact-img" alt="" src={resource.photo} />
                                    </div>
                                    <div className="col-sm-7">
                                        <ul className="list-group">
                                            <li className="list-group-item">Name : <span className="fw-bold">{resource.name}</span></li>
                                            <li className="list-group-item">Designation : <span className="fw-bold">{resource.designation}</span></li>
                                            <li className="list-group-item">Email : <span className="fw-bold">{resource.email}</span></li>
                                            <li className="list-group-item"><button onClick={(id) => vote(resource.id)}>Vote</button> : <span className="fw-bold">{resource.total_votes}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
                )
            })};
        </Fragment >
    );
}

export default ListResources;