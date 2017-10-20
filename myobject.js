function Nhl(p,t,s,k,n){
  //all of the variables are either true or false
this.puck = p;
this.stick = t;
this.skate = s;
this.kick = k;
this.net = n;

this.goal = function(){}
  if(this.puck == true && this.stick == true){
    //good case
    console.log("Good Goal!!!!!");
  }
  else if(this.puck == true && this.kick == false ){
    //bad case
    console.log("No Goal!!!!!");
  }

}


function main(p,t,s,k,n){

}
