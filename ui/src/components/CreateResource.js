import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateResource = ({ toggle, contract }) => {
    const navigate = useNavigate();
   

    const [data, updateData] = useState({
        name:'',
        desgination:'',
        email:'',
        photo:''
    })

    const onChange = (e) => {
        updateData({...data, [e.target.name] : e.target.value})
    }
   // we are creating new employee on blockchain
    const handleSubmit = async (event) => {
        event.preventDefault();
        await contract.addResource(name, desgination, email, photo);
        setTimeout(() => {
            navigate('/');
        }, 10000);
    }
    // de-structure the object in single variable
    const {name,desgination,email,photo} = data;

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-2">
                        <img className="contact-img" alt="" src={photo} />
                    </div>
                    <div className="col-sm-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={onChange} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Designation" name="desgination" value={desgination} onChange={onChange} />
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={onChange}/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Photo Url" name="photo" value={photo} onChange={onChange} />
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-danger" value="Save" />
                                <input type="button" onClick={() => navigate('/')} className="btn btn-dark ms-2" value="Back" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CreateResource;