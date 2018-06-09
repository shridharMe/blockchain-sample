const SHA256 = require('crypto-js/sha256');


  /*
      This class created the hash block of userdata  
   */
class Block {
    constructor(data, timestamp, index = 0,  previousHash='' ) {
        this.index = index;
        this.timestamp = timestamp; 
        this.data = data;
        this.previousHash=previousHash;
        this.hash=this.calculateHash(); 
        this.nonce = Math.floor(Math.random() * 90000) + 10000;  
    }
 
    calculateHash(){       
        return SHA256(this.index+ this.previousHash +this.timestamp+ JSON.stringify(this.data)+ this.nonce).toString();
    }

    //secured the block with proof of concept 
    mineBlock(difficulty){
        while (this.hash.substring(0, difficulty) !== Array(difficulty+1).join("0")){
            this.nonce = Math.floor(Math.random() * 90000) + 10000;
            this.hash = this.calculateHash(); 
        }
        
    }
}

module.exports = Block;