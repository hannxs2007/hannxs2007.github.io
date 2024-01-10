function ausklappen(){
    const TextWoche1 = document.getElementById("text_woche_1")
    TextWoche1.innerHTML= "text_woche_1"

    const button = document.getElementById("Button_Text");
    button.addEventListener("click", ausklappen)

}