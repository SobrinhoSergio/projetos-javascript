const open = document.querySelector('#btn-open'),
close = document.querySelector("#btn-close")
modal = document.querySelector('.modal')
toggle = modal.classList

open.addEventListener('click', () =>{
    toggle.add("active")
})

close.addEventListener('click', () =>{
    toggle.remove("active")
})
