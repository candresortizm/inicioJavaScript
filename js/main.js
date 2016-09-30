console.log("Helo world");

var saludar = function(param){
  var n = Number.isNaN(param);
  if(n){
    param=param.toLowerCase();
  }
  if(param=="dia" || 0<=param && param<=12){
    console.log("Buenos días");
  }else{
    if(param=="noche"){
      console.log("Buenas noches");
    }else{
      console.log("Hola");
    }
  }
};

var suerte = function(param){
  if(param==="13"){
    console.log("Sentido pesame");
  }
  if(param===7){
    console.log("Buena suerte");
  }
};

var i=0;
while(i<10){
  console.log(i+=1);
}

var casa={altura:100,ancho:100};
var casota = Object.create(casa);
casota.ventanas=100;
for(var prop in casota){
  console.log(prop);
}

for(var pr in casota){
  console.log(casota[pr]);
}

var arreglo=["a",5,true,"abc"];
for(var pr in arreglo){
  console.log(arreglo[pr]);
}

var entrada = prompt("Mensaje");
console.log(entrada);
