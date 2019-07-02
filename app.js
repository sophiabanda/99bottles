

/// Listen for a click on any bottle

/// When clicked, ask the user if they want to take it down and pass it around

//If they say yes, add a class of drank to the bottle

//and decrement the count by 1

const bottles = document.querySelectorAll('.bottle')
const counters = document.querySelectorAll('.count')

function drink(){
    if(confirm("Take one down, pass it around?")){
    this.classList.add('drank')
    counters.forEach(counter => counter.textContent--)}}

bottles.forEach(bottle => bottle.addEventListener('click', drink))
