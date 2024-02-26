import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NFT() {
  const [nftData, setNftData] = useState([]);

  useEffect(() => {
    axios.get('https://api.vottun.io/erc1155/contractAddress') // replace contractAddress with actual one
      .then(response => {
        setNftData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  }, []);

  return (
    <div>
      {nftData.map((nft, index) => (
        <div key={index}>
          <h2>{nft.name}</h2>
          <img src={nft.image} alt={nft.name} />
          <p>{nft.description}</p>
        </div>
      ))}
    </div>
  );
}

export default NFT;
