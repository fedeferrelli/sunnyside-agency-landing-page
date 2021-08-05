const nav = document.getElementById("nav")

const hamburguer = document.getElementById("hamburguer")

const nav_elements = document.querySelectorAll(".nav-element")


hamburguer.addEventListener("click", (e)=> {
    nav.classList.toggle("nav-visibility")
})

nav_elements.forEach(nav_element => {
    nav_element.addEventListener("click", (e)=> {
        nav.classList.remove("nav-visibility")
    })
})