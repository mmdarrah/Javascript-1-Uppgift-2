let hiss = {
plan : "0",
goTo : function (par){
    console.log("Hissen åker till plan " + par + ".");
    this.plan = par;
},

where : function (){
    console.log("Hissen är i plan " + this.plan + ".")
},
}

hiss.goTo(5);
hiss.where();
    
    