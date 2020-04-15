(function(){
  function addStash(event) {
    imgStash.style.top = `${event.pageY}px`;
    imgStash.style.left = `${event.pageX}px`;

    if(!imgStash.style.transform) {
      imgStash.style.transform = 'translate(-50%)';
    }
    // imgStash.style.transform = 'translate(-50%)';
    console.log(imgStash.style.transform);
    // console.log(`${event.pageX}px;`);
    // console.log(`${event.pageY}px;`);
    // console.log(imgStash);
    // console.log(event);
  }
  
  // Add an event listener to the correct DOM node here - using your addStash function, and firing on click.
  let imgCat = document.getElementById('cat-pic');
  imgCat.addEventListener('click', addStash);
  let imgStash = document.getElementById('stash-pic');
})();