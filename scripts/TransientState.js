//Set up transient state data structure and provide initial values 
const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0,
    orderDate: null
}

//Setter functions to modify each property of transient state
export const setMetal = (chosenMetal) => {
    transientState.metalId = chosenMetal
}

export const setSize = (chosenSize) => {
    transientState.sizeId = chosenSize
}

export const setStyle = (chosenStyle) => {
    transientState.styleId = chosenStyle
}

export const placeOrder = async () => {
    //check if all three options have been chosen
    if (transientState.metalId === 0 || transientState.sizeId === 0 || transientState.styleId === 0) {
        window.alert("Incomplete Order!")
    } else {
    //if not, window alert "missing information"
    //build POST request
    transientState.orderDate = new Date()
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    //Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)
   
    //Dispatch a custom event when submission is complete
    const newOrderSubmittedEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(newOrderSubmittedEvent)
    }
}