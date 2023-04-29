const btn = document.querySelector('#load')
btn.addEventListener('clik', Req)

function Req () {
    const url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
    .then(response => {
        console.log('Res',response );
        btn.setAttribute('disabled', tru)
        return response.json()
    })
    .then(data => {
        console.log('Data', data);
        const list = document.querySelector('.list')

        let counter = 0

        const elem = data.map(ietm => {
            counter++
            localStorage.setItem("User" + counter, item.id + " "  + item.name + " " + item.email)

            return `<li>${item.id} ${item.name} ${item.email}</li>`
        })
        list.insertAdjacentHTML('afterbegin', elem.join(' '))
    })
    .catch(error => console.error("Error",error))
}