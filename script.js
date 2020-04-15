(function(){
  function addStash(event) {
    imgStash.style.top = `${event.pageY}px`;
    imgStash.style.left = `${event.pageX}px`;

    if(!imgStash.style.transform) {
      imgStash.style.transform = 'translate(-50%)';
    }
    console.log(imgStash.style.transform);
  }  
  let imgCat = document.getElementById('cat-pic');
  imgCat.addEventListener('click', addStash);
  let imgStash = document.getElementById('stash-pic');
})();