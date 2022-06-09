import React, { Fragment } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import ListResources from "./ListResources";
import CreateResource from './CreateResource';

let Menu = ({resourceData, contract}) => {
    
    return (
        <Fragment>
            <Router>
                <nav className='navbar navbar-dark bg-info navbar-expand-sm'>
                    <div className="container text-center">
                        <div className='row'>
                            <div className='col-sm-3'>
                                <Link className="navbar-brand" to="/">Home</Link>
                            </div>
                            <div className='col-sm-3'>
                                <Link className="navbar-brand" to="/CreateResource" >Create Resource</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<ListResources resourceData={resourceData} contract={contract} />}></Route>
                    <Route path="/CreateResource" element={<CreateResource contract={contract}/>}></Route>
                </Routes>
            </Router>

        </Fragment>
    )
}

export default Menu;