/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT_Box = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (par_name, par_animal, par_color, par_bling) {
  const nft = {
    name: par_name,
    animal: par_animal,
    color: par_color,
    bling: par_bling
};
NFT_Box.push(nft);
console.log ("Succesfully minted: "+ par_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for (let i = 0; i < NFT_Box.length; i++)
    {
        console.log("Name: " + NFT_Box[i].name);
        console.log("Animal: " + NFT_Box[i].animal);
        console.log("Color: " + NFT_Box[i].color);
        console.log("Bling: " + NFT_Box[i].bling);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\n" + "Total number of minted NFTs = " + NFT_Box.length);
}

// call your functions below this line
mintNFT("Simba", "Lion", "Yellow", "Gold Crown");
mintNFT("Nemo", "Fish", "Red", "White Pearl");
mintNFT("Bolt", "Dog", "White", "Emerald Ring");
listNFTs();
getTotalSupply()
