const bookstoreList = document.querySelector(".bookstore-list");
fetch('https://658681bd468ef171392e5320.mockapi.io/bachquangminh/bookstore', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(bookstores => {
  // Do something with the list of tasks
  console.log(bookstores);
  bookstores.forEach((bookstore) => {
    const bookstoreItem = document.createElement('div')
    bookstoreItem.classList.add('bookstore-item')
    bookstoreItem.innerHTML = 
    `<img src='${bookstore.image}'/>
    <h3>${bookstore.title}</h3>
    <span>${bookstore.price}</span>
    `
    bookstoreList.appendChild(bookstoreItem);
    
  });
}).catch(error => {
  // handle error
})
