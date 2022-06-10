let users = []

const addUsers = ({id,name,room}) =>{
if(!name | !room){
    return {error : "Name Room Required"}
}
name = name.trim().toLowerCase();
room = room.trim().toLowerCase();
if(users.length){
    const existingUser = users.find(each=>each.user === name && each.room === room)
    if(existingUser){
        return {error : "User Already Exist"}
    }
}
const user  ={id,name,room}
users.push(user)
return user
}

module.exports = {addUsers}