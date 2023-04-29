'use strict'

const userPtofileObj = {
    name: 'Michael',
    age: 23,
    "year-active": '2020 - present'
}
console.log("-> userPtofileObj", userPtofileObj);

const UserProfArr = [
   [ 'name', 'Michael'],
   ['age', 23],
   ["year-active", '2020 - present']
] 

console.log("-> UserProfArr", UserProfArr);
console.clear()

console.log(Object.entries(userPtofileObj))
console.clear()
 
const map = new Map()
console.log("-> map", map);

const mapUserData = new Map(UserProfArr)

console.log("->mapUserData", mapUserData);

console.clear() 





const mapCamesDate = new Map()

mapCamesDate
    .set('name', 'Half-Life')
    .set('name', 'FallOut')
    .set('name', 'Portai2')