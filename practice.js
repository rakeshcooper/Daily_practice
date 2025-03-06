// reverse string
let Str = "cooper"
function reversestr(d){
   const newD = d.split("").reverse().join("")
    console.log(newD);
    
}
reversestr(Str)

// reverse string without reverse()
function manualStr(d){
    let newStr = []
    for (let i = d.length - 1; i >= 0; i--) {
            newStr.push(d[i])
    }
    let newrval = newStr.join("")
    console.log(newrval);
}
manualStr(Str)


//WithoutInbuild methods

function revStrMan(r){
    let reversed = ""
    for (let i = r.length - 1; i >= 0 ; i--) {
        reversed += r[i] 
    }
    console.log(reversed);
    
}

revStrMan(Str)


// reverse array
let arrayValue = ["c","o","o","p","e","r"]
function revArray(r){
let newR = r.reverse()
console.log(newR);
  
}
revArray(arrayValue)

// manual reverse array
function revArrayMan(r){
  let newRev = []  
  for (let i = r.length - 1; i >= 0; i--) {
    newRev.unshift(r[i])
  }
  console.log(newRev);
}

revArrayMan(arrayValue)

// man
function revArrayManNew(r){
  let newRev = []  
  for (let i = r.length - 1; i >= 0; i--) {
    newRev[i] = r[i] 
  }
  console.log(newRev);
}
revArrayManNew(arrayValue)


function URLtoobject(){
    history.pushState({}, "", "/profile?lang=FR");
    let obj = { lang: {EN: 'English_title', FR: 'French_title'} }
    console.log(window.location.href); 
    let URL = window.location.href 
    let link = URL.slice(35)
    let linkIndex = obj.lang[link]
    console.log(linkIndex);
    
    
    console.log();
    
}

// URLtoobject()