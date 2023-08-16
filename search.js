const originView = document.querySelector('.links');
const currentView = document.querySelector('.currentview');
const allLinks = document.querySelectorAll('.link'); 
function search(v) {
    if (v == "") {
        originView.classList.remove('dpnone')
        currentView.classList.add('dpnone');
    } else {
        originView.classList.add('dpnone');
        currentView.classList.remove('dpnone')
    };
    const n = document.querySelector('.item-name');

    for (var i = 0; i < n.lenght)
}