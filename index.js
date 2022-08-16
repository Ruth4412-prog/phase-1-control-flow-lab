function scuberGreetingForFeet(sample){
if( sample<=400 ){
  return `This one is on me!`;

}
else if(sample >2000 && sample <2500){
  return `I will gladly take your thirty bucks.`;
}
else if(sample >2500){
  return `No can do.`;
}
}

function ternaryCheckCity(city){
  const getCity = city ==="NYC" ? "Ok, sounds good." : "No go.";
  return getCity;
  
  
}

function switchOnCharmFromTip(msg){
switch (msg){
  case (msg= "generous"):
    return "Thank you so much.";
    break;
    case (msg="not as generous"):
      return"Thank you.";
      break;
      default:
        return "Bye.";
}
}