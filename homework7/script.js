//homework7
const origin = {
    contry: "Ukraine",
    city: "Odessa",
    disrtict: "Poskot",
    lastWorks: "yesterday"
}

const target = {}



function copy(target, origin) {
    for (const key in origin) {
        const value = origin[key]
        console.log(key + ":" + value)
    }
    for (let key of Object.getOwnPropertyNames(origin)) {
        target[key] = origin[key];
    }

    if (origin !== target) {
        console.log("Don not mach")
    } else {
        console.log("All is good")
    }
}
copy(target, origin)







const meUser = {
    id: 1,
    firstName: "Ihor",
    lastName: "Svitlyi"


}
const anotherUser = {
    id: 1,
    firstName: "Ihor",
    lastName: "Svitlyi"



}
function getCheck(meUser, anotherUser) {

   if(Object.keys(meUser).length !== Object.keys(anotherUser).length){
       return false;
   }for(let propName in meUser){
       if(! anotherUser.hasOwnProperty(propName)){
           return false;
       }
       if(meUser[propName]!==anotherUser[propName]){
           return false;
       }else{
           return true
       }
   }

}


console.log(getCheck(meUser, anotherUser))

