var images = document.querySelectorAll('.outside');
var imagePopup = document.getElementById('imageBigger');
images.forEach(item => {
    item.addEventListener('click', event => {
        const clone = item.cloneNode(true);
        imagePopup.appendChild(clone);
        imagePopup.classList.add('modal');    
    })
  });

  document.onclick = function(event) {
    if (imagePopup.contains(event.target)){
        imagePopup.innerHTML='';
        imagePopup.classList.remove('modal');
    }
  } 