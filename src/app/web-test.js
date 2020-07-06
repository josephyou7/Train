
const house =["a","b","c"];

for (let i=0; i < house.length ; i++){
         console.log(house[i]);
        }

for (let name of house){
    console.log(name);
    }

house.forEach((house,index)=> console.log(house,index));
  
house.push("d");

  