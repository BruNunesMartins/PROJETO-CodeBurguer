const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const sumAll = document.querySelector(".sum-all")
const filterAll = document.querySelector(".filter-all")


function formatCurrency(value) {
    const newValue = value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",


    })
    return newValue

}





function showAll(productsArray) {
    let li = ""/*variavel zerada para nao duplicar quando eu aperto no botao*/


    productsArray.forEach(product => {
        li = li + ` 
        <li >
    <img src=${product.src}>
    <p>${product.name}</p>
    <p class="item-price">R$${formatCurrency(product.price)}</p>
    </li>
    `

    })

    list.innerHTML = li

}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product, /*esparrama em todas opçoes que nao mudam--SPREAD OPERATOR*/
        price: product.price * 0.9, /*10% de desconto*/

    }))

    showAll(newPrices)

}



function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = ` 
    <li >
<p>O valor total dos ítens é: R$ ${formatCurrency(totalValue)}</p>
</li>`


}
function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan) /*=== true//////product.price > 30*/
    showAll(filterJustVegan)


}



buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAllItems)
sumAll.addEventListener("click", sumAllItems)
filterAll.addEventListener("click", filterAllItems)