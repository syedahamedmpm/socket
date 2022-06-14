let users = []
console.log(users)
const addUsers = ({id,name,room}) =>{
    console.log(id,name,room)
if(!name | !room){
    return {error : "Name Room Required"}
}
name = name.trim().toLowerCase();
room = room.trim().toLowerCase();
if(users.length){
    const existingUser = users.find(each=>each.name === name && each.room === room)
    if(existingUser){
        return {error : "User Already Exist"}
    }
}
const user  ={id,name,room}

users.push(user)
return {user}
}
const removeUser = (id) =>{
    console.log(id)
    const findIdx = users.findIndex(each=>each.id == id);
    if(findIdx>=0){
        return users.splice(findIdx,1)[0]
    }
}
const getUser = (id) =>{
    console.log("NEE",id)
    return users.find(each=>each.id == id)
    
    
}
module.exports = {addUsers,removeUser,getUser}