const king = document.querySelector('.chess-piece')
const squares = document.querySelectorAll('.square')
const displayInfo = document.querySelector('#info')

king,addEventListener('drag', dragging)
king.addEventListener('dragstart', dragStart)

squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragend', dragEnd)
})


let beingDragged

function dragging() {
    displayInfo.textContent = 'You are dragging a ' + beingDragged.id
}

function dragStart(a) {
    beingDragged = a.target
    console.log(beingDragged)
}

function dragOver(a) {
    a.preventDefault()
}

function dragEnter(a) {
    a.target.classList.add('highlight')
}

function dragLeave(a) {
    a.target.classList.remove('highlight')
}

function dragDrop(a) {
    a.target.append(beingDragged)
    a.target.classList.remove('highlight')
}

function dragEnd(a) {
    a.target.classList.add('target')
    setTimeout(() => a.target.classList.remove('target'), 100)
    displayInfo.textContent = ''
}