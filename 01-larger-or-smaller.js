var int1, int2;

int1 = window.prompt("Enter the first number", "0");
int2 = window.prompt("Enter the second number", "0");

if(parseInt(int1, 10) > parseInt(int2, 10)) 
  { 
  console.log(int1+ " is larger than "+ int2);
  }   
else
  if(parseInt(int2, 10) > parseInt(int1, 10)) 
  {
  console.log(int2+" is larger than "+ int1);
  }                  
else
  {
   console.log( int1 + " and "+ int2 + " are equal.")};
