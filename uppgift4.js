/* Ett program som beskriver en hiss
det finns två metoder som man kan använda gotTo och Where()
så när man lägga till plan numer programmet ska returnera vilken plan hissen åker till 
och på vilken plan hissen är i.
*/ 

let hiss = {
plan : "0",
goTo : function (par){ // Denna metod flyttar hissen till det valda numret.
    console.log("Hissen åker till plan " + par + ".");
    this.plan = par;
},

where : function (){  // Denna metod vissa vilken plan hissen är i.
    console.log("Hissen är i plan " + this.plan + ".")
},
}

hiss.goTo(5);
hiss.where();
    
    