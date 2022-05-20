let currentUser = localStorage.getItem('currentUserDataId');

const usersBaseUrl = 'https://crypto-portfolio-spa-default-rtdb.europe-west1.firebasedatabase.app/users';

export const newUserData = (email, uid) => {

    fetch(`${usersBaseUrl}.json`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            uid
        })
    }).then(res => res.json())
}

export const addAsset = (asset, ammount) => {

    fetch(`${usersBaseUrl}.json`).then(res => res.json()).then(data => {
        let loggedUserUID = JSON.parse(localStorage.getItem('auth'))
        console.log(loggedUserUID.uid);

        let user = Object.entries(data).find(user => user[1].uid == loggedUserUID.uid);
        return user;

    }).then(data => {
        const currentUserUrl = `${usersBaseUrl}/${data[0]}`

        fetch(`${currentUserUrl}/assets.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                [asset]: Number(ammount)
            })
        })
    })
}