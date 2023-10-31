function MultiplicationFunction(p1, p2) {
    return p1 * p2;
  }


  console.log(MultiplicationFunction(10,5));

  //Q2

  function AdditionFunction(p1, p2) {
    return p1 + p2;
  }

  console.log(AdditionFunction(3,5));

  //Q3

  function QuotientFunction(p1, p2) {
    return p1 + p2;
  }

  console.log(QuotientFunction(2,6));

  //Q4 

  function SubtractionFunction(p1, p2) {
    return p1 + p2;
  }

  console.log(SubtractionFunction(3,5));
  console.log("Next");



//Q6

let arrya1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
SubtractionFunction(arrya1)
function SubtractionFunction(arrya) {
for( let i = 0 ; i <arrya.length ; i++){
    if([i] % 2 ==0){
     console.log(arrya1[i]);
    }
}
}
console.log("Next");

//Q7

let arrya2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
AddFunction(arrya2)
function AddFunction(arrya2){
    for( let i = 0 ; i <arrya2.length ; i++){
        if([i] % 2 !==0){
         console.log(arrya2[i]);
        }
    }
}

//Q8

let ar=  [
    [ "amed",27,"man","reed"],
    ["sami",28 , "fimel", "blu"]
];
console.log(ar.map(function(a){
    return a[0] 
    
}));

console.log(ar.map(function(a){
    return a[1]
}));


console.log(ar.reduce(function(a, b){
  
    return a[1] + b[1]
}));

console.log(ar.filter(function (a){
  
    
   if(a[1]< 200) {
   return a;
}

}));
console.log(ar.filter(function (a){
    if (a[1]== "man"){
    return a;
}
}));



console.log(ar.every(function (a){
  
    return a[2] >40

}));
console.log(ar.every(function (a){
  
    return a[2] < 200

}));

console.log(ar.some(function (a){
  
    return a[3]== "blu" 

}));


// Lap3

let characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

//Q1


let ahmed=characters.find(function(x){
  
    return x.eye_color === "blue"
      
    
 

});
console.log(ahmed.name);
//Q2
let x = characters.find(function(x){
    return x.mass > 50
});
 console.log(x)

//Q3
console.log(characters.filter(function(x){
  
    if(x. height < 200 ){
        return x.name;
    }
 

}));
//Q4
console.log(characters.filter(function(x){
  
    if(x.gender == "male" ){
        return x.name;
    }
 

}));
//Q5
console.log(characters.map(function(x){
    return x.name 
    
}));
//Q6
console.log(characters.map(function(x){
    return x.name.height
    
}));
//Q7
console.log(characters.sort(function(a,b){
    
    return a.mass - b.mass;
 
}));
//Q8
console.log(characters.sort(function(a,b){
    
    return b.mass - a.mass;
    
}));
//Q9
console.log(characters.every(function (x){
  
    return x.mass >40;

}));
//Q10
console.log(characters.every(function (x){
  
    return x.mass < 200;

}));
//Q11
console.log(characters.some(function (x){
  
    return x.eye_color === "blue";

}));
//Q12
console.log(characters.some(function (x){
  
    return x.height > 210;

}));










