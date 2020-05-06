//homework7
const origin = {
    contry: "Ukraine",
    city: "Odessa",
    disrtict: "Poskot",
    lastWorks: "yesterday"
}

const target = {}
for (const key in origin) {
    const value = origin[key]
    console.log(key + ":" + value)
}


function copy(target, origin) {
    for (let key of Object.getOwnPropertyNames(origin)) {
        target[key] = origin[key];
    }


}
copy(target, origin)
console.log(target)

for (const key in target) {
    const value = target[key]
    console.log(key + ":" + value)
}



if (origin !== target) {
    console.log("Don not mach")
} else {
    console.log("All is good")
}



const meUser = {
    id: 1,
    firstName: "Ihor",
    lastName: "Svitlyi"

    
}
const anotherUser = {
    id: 1,
    firstName: "Ihor",
    lastName: "Svitlyi",
    
    

}
function getCheck(meUser, anotherUser){
     
        if( JSON.stringify(meUser) === JSON.stringify(anotherUser)){
            console.log("Well done")
        }else{
            console.log("Not good")
        }
    
}
    

getCheck(meUser, anotherUser)

