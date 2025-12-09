const ordersUrl = 'http://localhost:3030/jsonstore/orders/';

const divList = document.querySelector('section#order-info > div#list');
const createOrderForm = document.querySelector('div#form > form');
createOrderForm.addEventListener('submit', orderFormHandler)

const loadOrdersBtn = document.querySelector('button#load-orders');
loadOrdersBtn.addEventListener('click', loadOrders);


async function loadOrders() {
    const res = await fetch(ordersUrl);
    const data = await res.json();

    divList.innerHTML = '';

    for (const order of Object.values(data)) {
        const divContainer = document.createElement('div');
        divContainer.classList.add('container');
        divContainer.id = order._id;

        const h2NameEl = document.createElement('h2');
        h2NameEl.textContent = order.name;
        divContainer.appendChild(h2NameEl);

        const h3DateEl = document.createElement('h3');
        h3DateEl.textContent = order.date;
        divContainer.appendChild(h3DateEl);

        const h3QuantityEl = document.createElement('h3');
        h3QuantityEl.textContent = order.quantity;
        divContainer.appendChild(h3QuantityEl);

        const changeBtnEl = document.createElement('button');
        changeBtnEl.classList.add('change-btn');
        changeBtnEl.id = order._id;
        changeBtnEl.textContent = 'Change';
        divContainer.appendChild(changeBtnEl);

        changeBtnEl.addEventListener('click', changeOrder)


        const doneBtnEl = document.createElement('button');
        doneBtnEl.classList.add('done-btn');
        doneBtnEl.id = order._id
        doneBtnEl.textContent = 'Done';
        divContainer.appendChild(doneBtnEl);

        doneBtnEl.addEventListener('click', async (e) => {
            const id = e.target.id
            await fetch(`${ordersUrl}${id}`, {
                method: "DELETE"
            });

            await loadOrders();
        })

        divList.appendChild(divContainer);

    };

}


async function orderFormHandler(e) {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(createOrderForm);
    const body = Object.fromEntries(formData.entries());

    for (const key in body) {
        if (body[key] === '') return;
    }



    await fetch(ordersUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })

    createOrderForm.reset();

    await loadOrders();

}


async function changeOrder(e) {
    const editBtn = document.querySelector('form > button#edit-order');
    const orderBtn = document.querySelector('form > button#order-btn');

    editBtn.disabled = false;
    orderBtn.disabled = true;

    
    const nameInput = document.querySelector('form > input#name');
    const quantityInput = document.querySelector('form > input#quantity');
    const dateInput = document.querySelector('form > input#date');

    const parentDiv = e.target.parentNode
    const name = parentDiv.querySelector('h2').textContent
    const quantity = parentDiv.querySelector('h3:nth-child(3)').textContent;
    const date = parentDiv.querySelector('h3').textContent;

    nameInput.value = name;
    quantityInput.value = quantity;
    dateInput.value = date;

    createOrderForm.id = parentDiv.id

    parentDiv.remove();

    editBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target.parentNode);
        const body = Object.fromEntries(formData.entries());
        const id = e.target.parentNode.id
        console.log(id);
        
        const res = await fetch(`${ordersUrl}${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
        
        e.target.parentNode.id = ''
        e.target.parentNode.reset()

        await loadOrders();
    })


}


// async function changeOrder(e) {
//     const parentDiv = e.target.parentNode
//     const id = parentDiv.id
    

//     const res = await fetch(`${ordersUrl}${id}`);
//     const currentOrder = await res.json()

//     const nameInput = document.querySelector('form > input#name');
//     const quantityInput = document.querySelector('form > input#quantity');
//     const dateInput = document.querySelector('form > input#date');

//     nameInput.value = currentOrder.name;
//     quantityInput.value = currentOrder.quantity;
//     dateInput.value = currentOrder.date;

//     const editBtn = document.querySelector('form > button#edit-order');
//     const orderBtn = document.querySelector('form > button#order-btn');

//     editBtn.disabled = false;
//     orderBtn.disabled = true;

//     parentDiv.remove()

//     editBtn.addEventListener('click', async (e) => {
//         e.preventDefault();
//         e.stopPropagation();

//         const formData = new FormData(createOrderForm);
//         const body = Object.fromEntries(formData.entries());

//         await fetch(`${ordersUrl}${id}`, {
//             method: "PATCH",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(body)
//         })

//         createOrderForm.reset();

//         editBtn.disabled = true;
//         orderBtn.disabled = false;

//         await loadOrders();
//     })


// }

