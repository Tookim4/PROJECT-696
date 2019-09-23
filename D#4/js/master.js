let sliderimages = document.querySelectorAll('.slide'),
arrownext = document.querySelectorAll('#next'),
arrowback = document.querySelectorAll('#back'),
current = 0;

function reset() {
  for(let i = 0; i < sliderimages.length; i++ ){
    sliderimages[i].style.display = 'none';
  }
}

// init slider
function startslide(){
  reset();
  sliderimages[0].style.display = 'block';
}

//show next
function slideright(){
  reset();
  sliderimages[current + 1].style.display = 'block';
  current++;
}
z
//show next
function slideleft(){
  reset();
  sliderimages[current - 1].style.display = 'block';
  current--;
}

next.addevent

startslide();
