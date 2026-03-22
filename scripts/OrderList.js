export const OrdersList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=size&_expand=style")
    const orders = await response.json()
    
    
    let html = ''
    
    const ordersHTML = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `
            <div>Order #${order.id} cost $${orderPrice.toFixed(2)}</div>
            `
        }
    )

    html += ordersHTML.join("")

    return html
}