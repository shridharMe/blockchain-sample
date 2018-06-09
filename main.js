const BlockChain = require("./src/blockchain");
const Block = require("./src/block");
const  UserData =  require("./src/userdata");

let blockchain_sample = new BlockChain();

// create   userdata to add in the block
user1=new UserData("john","12323231","01-01-1980"); 
newBlock1 = new Block(user1, new Date());
// added newly created userdata into the block
blockchain_sample.addBlock(newBlock1);



user2 = new UserData("marry", "3433323", "30-11-1980");
newBlock2 = new Block(user2, new Date());
blockchain_sample.addBlock(newBlock2);


//display entire chain of blocks chain
console.log(" is blockchain valid? : " + blockchain_sample.isBlockChainValid());
console.log(JSON.stringify(blockchain_sample,null,4))


//tampering with data
blockchain_sample.chain[1].data = new UserData("tom", "4343423", "29-11-1980");
console.log(" is blockchain valid?  : " + blockchain_sample.isBlockChainValid());
console.log(JSON.stringify(blockchain_sample, null, 4))
 
