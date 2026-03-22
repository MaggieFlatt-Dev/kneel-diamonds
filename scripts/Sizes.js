import { setSize } from "./TransientState.js"

export const SizeOptions = async () => {
    //fetch styles
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    //generate styles HTML
    let sizesHTML = ""
    
    //Use map() to generate new array of strings
    const sizesArray = sizes.map(
        (size) => {
            return `<div>
                <input type="radio" name="size" value="${size.id}" /> ${size.carets}
            </div>`
        }
    )

    //This function needs to return a single string, not an array of strings
    sizesHTML += sizesArray.join("")

    return sizesHTML
}

export const handleSizeChoice = (event) => {
    if (event.target.name === "size") {
        setSize(parseInt(event.target.value))
    }
}