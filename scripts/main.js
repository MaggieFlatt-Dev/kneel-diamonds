import { MetalOptions, handleMetalChoice } from "./Metals.js"
import { SizeOptions, handleSizeChoice } from "./Sizes.js"
import { StyleOptions, handleStyleChoice } from "./Styles.js"
import { SubmissionButton, handleOrderSubmission } from "./SubmitButton.js"
import { OrdersList } from "./OrderList.js"

const mainContainer = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const submissionButtonHTML = SubmissionButton()
    const ordersHTML = await OrdersList()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${submissionButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                ${ordersHTML}
        </article>
    `

    mainContainer.innerHTML = composedHTML
}

//Add event listeners
document.addEventListener("change", handleMetalChoice)
document.addEventListener("change", handleSizeChoice)
document.addEventListener("change", handleStyleChoice)
document.addEventListener("click", handleOrderSubmission)
document.addEventListener("newOrderCreated", event => {
    render()
})

//Render page by calling render function 
render()