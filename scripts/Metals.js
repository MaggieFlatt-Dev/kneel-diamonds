import { setMetal } from "./TransientState.js"

export const MetalOptions = async () => {
    //fetch metals
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    //build HTML
    let metalsHTML = ""
    
    //Use map() to generate new array of strings
    const metalsArray = metals.map(
        (metal) => {
            return `<div>
                <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
            </div>`
        }
    )

    //This function needs to return a single string, not an array of strings
    metalsHTML += metalsArray.join("")

    return metalsHTML
}

export const handleMetalChoice = (event) => {
    if (event.target.name === "metal") {
        setMetal(parseInt(event.target.value))
    }
}

