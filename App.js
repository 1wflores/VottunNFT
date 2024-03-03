window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.vottun.io/erc1155/contractAddress"); // replace contractAddress with actual one
  xhr.onload = function() {
    if (xhr.status === 200) {
      var nfts = JSON.parse(xhr.responseText);
      nfts.forEach(nft => {
        var div = document.createElement("div");

        var title = document.createElement("h2");
        title.textContent = nft.name;

        var img = document.createElement("img");
        img.src = nft.image;
        img.alt = nft.name;

        var desc = document.createElement("p");
        desc.textContent = nft.description;
        
        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(desc);
        
        document.getElementById("nft").appendChild(div);
      });
    }
  };
  xhr.send();
};
