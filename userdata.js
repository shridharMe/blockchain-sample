
 class UserData{
    constructor(name = "genesisblock", ssn = Math.floor(Math.random() * 90000) + 10000, dob = "01-01-1900") {
        this.name = name;
        this.ssn = this.ssn;
        this.dob=dob
        /*this.address = validAddress();
        this.passport = validPassport();
        this.birthCertificate = validBirthcertificate();*/
    }

   /* validAddress(){
    }
    validBirthcertificate(){
    }
    validPassport(){
    }*/
}


module.exports = UserData;