import { setStyle } from "./TransientState.js"

export const StyleOptions = async () => {
    //fetch styles
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    //build HTML
    let stylesHTML = ""
    
    //Use map() to generate new array of strings
    const stylesArray = styles.map(
        (style) => {
            return `<div>
                <input type="radio" name="style" value="${style.id}" /> ${style.style}
            </div>`
        }
    )

    //This function needs to return a single string, not an array of strings
    stylesHTML += stylesArray.join("")

    return stylesHTML
}

export const handleStyleChoice = (event) => {
    if (event.target.name === "style") {
        setStyle(parseInt(event.target.value))
    }
}