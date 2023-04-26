/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
    let out = usersArray.find(function(value,index,array){
        // console.log("value.username:"+value.username);
        // console.log("username:"+username);
        // console.log("value");
        // console.log(value);
        let bool = value.username == username;
        //if(bool){console.log('bool true');}
        return bool;
    });

    return out;
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
    console.log("usersArray:IN:");
    console.log(usersArray);

    let remove = usersArray.findIndex(function(value){
        console.log("value:"+value);
        console.log(value);
        console.log('value.username:'+value.username);
        console.log('username:'+username);
        return(value.username==username);
    });

    console.log('remove:'+remove);
    let out = undefined;
    if(remove != -1){
        out=usersArray[remove];
        usersArray.splice(remove,1);
    };
    console.log("OUT:obj");
    console.log(out);
    console.log('usersArray:OUT:');
    console.log(usersArray);
    return out;
}