//homework7
const origin = {
    contry: "Ukraine",
    city: "Odessa",
    disrtict: "Poskot",
    lastWorks: "yesterday"
}

const target = {}

function copy(target, origin) {
    const change = Object.assign(target, origin);
    console.log(change)
    for (const key in target) {
        const value = target[key];
        console.log("key" + ":" + key + " " + "Value" + ":" + value);

    }

}
copy(target, origin)
console.log("target", target)

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
const anotherUser ={
    id: 1,
    firstName: "Ihor",
    lastName: "Svitlyi"

}
function getUser(meUser, anotherUser){
    if(meUser === anotherUser && Object.keys[meUser]!== Object.keys[anotherUser]){
        return true;
    }else{
        return false
    }
} 
const result = getUser(meUser, anotherUser);
console.log(result)
