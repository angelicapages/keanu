const botones = document.querySelectorAll(".boton")
const cards = document.querySelectorAll(".card")

// for (let boton of botones) {
//     const filtros = () => {
//         for (let card of cards) {
//             card.classList.add("hidden")
//             if ((boton.dataset.color) === (card.dataset.color)) {
//                 return card.classList.remove("hidden")
//             }
//         }
//     }
// boton.onchange = () => {
//     filtros(boton.checked)
// }

// }

for (let boton of botones) {
    boton.onchange = () => {
        for (let boton2 of botones) {
            if (boton2.checked) {
                for (let card of cards) {
                    if ((card.dataset.color) === (boton2.dataset.color)) {
                        for (let card2 of cards) {
                        card2.classList.add("card")
                        card2.classList.remove("hidden")
                    }
                }

                    else {
                        console.log("Estoy chequeado")
                        card.classList.remove("card")
                        card.classList.add("hidden")
                    }
                }
            }
        }
    }
}
