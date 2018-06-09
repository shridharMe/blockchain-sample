const UserData = require("./userdata");
const Block = require("./block");

  /*
      This class creates the chain of blocks which consists of userdata
   */

 class Blockchain {
    constructor(){
        this.chain =[this.createGenesisBlock()];
        this.difficulty=4;
    }

    createGenesisBlock(){         
        var genesisData = new UserData();        
        return new Block(genesisData, new Date(),0, "0")       
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }

    
    addBlock(newBlock){
         newBlock.previousHash=this.getLatestBlock().hash;
         newBlock.index=this.chain.length;
         //newBlock.hash = newBlock.calculateHash() 
        newBlock.mineBlock(this.difficulty)        
         this.chain.push(newBlock);
    }

    isBlockChainValid(){
        for (let i=1; i < this.chain.length; i++){
            const currentBlock =this.chain[i];
            const previousBlock  = this.chain[i-1];          
            if (currentBlock.hash !== currentBlock.calculateHash()){

                return false
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false
            }
            return true;

        }
    }


}


module.exports = Blockchain;