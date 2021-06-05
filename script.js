let cont = document.getElementById('container');
cont.onclick = function(event) {
    if (event.target.className != 'remove') {
      alert('Вам следует сходить на курсы меткости!');
      return;
    } else {
    let pane = event.target.closest('.pane');
    pane.remove();
    
  }
};

