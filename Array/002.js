function soal2(param)
{
    // your code here 
  let obj = {
    
  }
  
  obj.firstName = param[0][0];
  obj.lastName = param[0][1];
  obj.hobbies = param[0][2];
  obj.profesi = param[0][3];
 
  return obj;
}



// console.log([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] , 
// ['Radit','Dika',['manga','gaming'],'Web Developer'] ]);

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]
*/ 

console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]));
