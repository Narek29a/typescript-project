const users = [
    {
        name: 'aaa',
        age: 20
    },
    {
        name: 'sss',
        age: 20
    },
    {
        name: 'ddd',
        age: 35
    },
    {
        name: 'fff',
        age: 30
    }
]

const usersMapped = users.map((user)=> {
    if (user.age === 20) {
        return {
            ...user,
            age: user.age + 20,
        }
    }
    return user;
})


console.log(usersMapped)


