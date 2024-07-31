fetch('https://reqres.in/api/users?page=2', {
    method: 'GET',
    body: JSON.stringify(),
    headers: { 'Content-Type': 'application/json' },
}).then(res => res.json()).then(data => posts(data.data)).catch(err => console.log(err))



const body = document.querySelector('body')

function posts(arr) {
    const row = document.createElement('div')
    row.classList.add('row')



    arr.map(item => {
        const card = document.createElement('div')
        const title = document.createElement('h2')
        const link = document.createElement('a')
        const img = document.createElement('img')

        title.innerHTML = item.first_name
        img.src = item.avatar
        link.href = item.email
        link.textContent = item.email

        card.classList.add('card')
        card.appendChild(img)
        card.appendChild(title)
        card.appendChild(link)
        row.append(card)
    })
    body.appendChild(row)
}


