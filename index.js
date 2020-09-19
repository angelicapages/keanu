const tarjeta = document.querySelector(".tarjetas")
const botones = document.querySelectorAll(".boton")
const cards = document.querySelectorAll(".card")


for (let boton of botones) {

    boton.onclick = () => {
        for (let card of cards) {

            if ((card.dataset.color) == (boton.dataset.color)) {
                card.classList.add("card")
            }
            else if ((card.dataset.color) !== (boton.dataset.color)) {
                card.classList.remove("card")
                card.classList.add("hidden")
            }
            else {
                card.classList.toggle("hidden")
        }
    }

}
}
