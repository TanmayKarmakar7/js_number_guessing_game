function getvalue(){
    const input = document.querySelector(".input").value;
    
    return Number(input)
}

const button = document.querySelector(".button")
const result = document.querySelector(".result")

button.addEventListener("click", () => {
    const value = getvalue()
    const correct = 21

    if (value < 1 || value > 25){
        result.innerText = "* Your number is not between 1 to 25 *"
        result.style.color = "red"
    }
    else if (value > correct){
        result.innerText = "* Your number is high *"
        result.style.color = "yellow"
    }
    else if (value < correct){
        result.innerText = "* Your number is low *"
        result.style.color = "#08A3BF"
    }
    else{
        result.innerText = "* You guessed it right *"
        result.style.color = "green"
    }    
})
