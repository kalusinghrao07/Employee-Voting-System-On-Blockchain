import './App.css';
import ResourceArtifact from '../src/artifacts/contracts/resource.sol/ResourceVoting.json';
import { ethers } from 'ethers';
import { useState, useEffect, Fragment } from 'react';
import Menu from './components/Menu';

const tokenAddress = ''; // Use Deployed Token Address

function App() {
  const [resourceData, setResourceData] = useState([]);
  const [contract, setContract] = useState();

  let provider;
  let signer;

  async function requestAccount() {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
  }

  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();

  async function _intializeContract(signer) {
    const contract = new ethers.Contract(
      tokenAddress,
      ResourceArtifact.abi,
      signer,
    )
    return contract
  }

  useEffect(() => {
    // in this case, we only care to query the contract when signed in
    if (typeof window.ethereum !== 'undefined') {
      (async function getResourcesCount() {
        await requestAccount()
        const contract = await _intializeContract(signer)
        const resourcedata = await contract.getResources()
        const resources = [...resourcedata]
        setContract(contract);
        setResourceData(resources);
      })()
    }
  });

  return (
    <Fragment>
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <div className="container text-center">
          <div className='row'>
            <div className='col'>
              <span className="navbar-brand">Employee Voting On Blockchain</span>
            </div>
          </div>
        </div>
      </nav>
      <Menu resourceData={resourceData} contract={contract} />
    </Fragment>
  )
}
export default App