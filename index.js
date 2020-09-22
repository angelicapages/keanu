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
        for (let card of cards) {
            card.classList.add("hidden")
        for (let boton2 of botones) {
                if (boton2.checked) {
                    if ((card.dataset.color) == (boton2.dataset.color)) {
                        card.classList.remove("hidden")
                    }
                }
            }
        }

    }
}

