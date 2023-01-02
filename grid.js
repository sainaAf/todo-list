let $ = document

let toDoListUl = $.querySelector('.toDo')
let input = $.querySelector('.input')
let btn = $.querySelector('.btnAdd')
let spanText = $.querySelector('.spanText')
let trashIcon = $.querySelector('.icon')
let inputValue
let colorsBox = $.querySelectorAll('.color-box')
let background
let btnRemove = $.querySelector('.btnRemove')




input.addEventListener('keydown', function (event) {

    if (event.code == 'Enter') {

        addNewToDo()
        input.value = ''
    }
})

btn.addEventListener('click', function () {

    addNewToDo()
    input.value = ''
})

btnRemove.addEventListener('click', function () {
    input.value = ''
    input.style.backgroundColor = 'white'
    background = 'white'

})

function addNewToDo() {
    inputValue = input.value.trim()

    let newLi = $.createElement('li')
    let newSpan = $.createElement('span')
    let newI = $.createElement('i')

    newLi.setAttribute('class', 'listItem')
    newSpan.setAttribute('class', 'spanText')
    newI.className = 'fas fa-trash icon'

    newLi.append(newSpan, newI)

    if (inputValue != '') {

        newSpan.innerHTML = inputValue
        newLi.style.background = background

        toDoListUl.append(newLi)
    }

    newI.addEventListener('click', function (event) {
        event.target.parentElement.remove()
    })


}



colorsBox.forEach(function (color) {
    color.addEventListener('click', function (event) {
        background = event.target.style.backgroundColor
        input.style.backgroundColor = background
    })
})


