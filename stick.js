(dom => {
    let container = dom.createElement('div'),
    moveable = dom.createElement('div');

    container.classList.add('container', 'full-x', 'full-y', 'fixed');
    moveable.classList.add('moveable', 'absolute');

    container = document.body.appendChild(container);
    moveable = container.appendChild(moveable);

    moveable.addEventListener('mousedown', () => {
        moveable.addEventListener('mousemove', () => {
            console.log('drag');
        });        
    });
})(document);