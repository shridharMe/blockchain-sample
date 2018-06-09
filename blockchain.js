const UserData = require("./userdata");
const Block = require("./block");

  /*
      This class creates the chain of blocks which consists of userdata
   */

 class Blockchain {
    constructor(){
        this.chain =[this.createGenesisBlock()];
    }

    createGenesisBlock(){         
        var genesisData = new UserData(); 
        return new Block(genesisData,0,"0")       
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock){
         newBlock.previousHash=this.getLatestBlock().hash;
         newBlock.index=this.chain.length;
         this.chain.push(newBlock);
    }


}


module.exports = Blockchain;