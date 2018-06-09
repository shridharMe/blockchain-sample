const BlockChain = require("./blockchain");
const Block = require("./block");
const  UserData =  require("./userdata");

let blockchain_sample = new BlockChain();
user=new UserData("john","12323231","01-01-1980"); 
newBlock = new Block("",user,"");

blockchain_sample.addBlock(newBlock);
console.log(JSON.stringify(blockchain_sample,null,4))