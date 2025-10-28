const input = document.getElementById("camp")
const botao = document.getElementById("botao")
const lista = document.getElementById("lista")
const footer = document.querySelector("footer")
const close = document.getElementById("close")

function configurarItem(li) {
  const checkbox = li.querySelector('input[type="checkbox"]')
  const btnDelete = li.querySelector(".delete-btn")

  if (checkbox) {
    checkbox.addEventListener("change", () => {
      li.classList.toggle("concluido", checkbox.checked)
    })
  }

  if (btnDelete) {
    btnDelete.addEventListener("click", () => {
      li.remove()
      footer.classList.add("result")
      setTimeout(() => {
        footer.classList.remove("result")
      }, 4000)
    })
  }
}

document.querySelectorAll("#lista li").forEach(configurarItem)

botao.addEventListener("click", () => {
  const valor = input.value.trim()
  if (valor === "") return

  const li = document.createElement("li")
  li.classList.add("item-lista")

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"

  const texto = document.createElement("span")
  texto.textContent = valor

  const btnDelete = document.createElement("button")
  btnDelete.classList.add("delete-btn")
  btnDelete.innerHTML = `<ion-icon name="trash"></ion-icon>`

  li.appendChild(checkbox)
  li.appendChild(texto)
  li.appendChild(btnDelete)
  lista.appendChild(li)

  configurarItem(li) 

  input.value = ""
  input.focus()
})


input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    botao.click()
  }
})

lista.addEventListener("click", (e) => {
  if (e.target.closest(".delete-btn")) {
    e.target.closest("li").remove()
    footer.classList.add("result")

    setTimeout(() => {
      footer.classList.remove("result")
    }, 4000)
  }
})

close.addEventListener("click", () => {
  footer.classList.remove("result")
})