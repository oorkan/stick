((dom, bom) => {
    let container = dom.createElement('div'),
    moveable = dom.createElement('div'),
    x0 = 0, y0 = 0;

    container.classList.add('container', 'full-x', 'full-y', 'fixed');
    moveable.classList.add('moveable', 'absolute');

    container = dom.body.appendChild(container);
    moveable = container.appendChild(moveable);

    const move = (e) => {
        moveable.style.left = `${e.pageX - x0}px`;
        moveable.style.top = `${e.pageY - y0}px`;
    };
    
    moveable.addEventListener('mousedown', (e) => {
        x0 = e.pageX - e.target.offsetLeft;
        y0 = e.pageY - e.target.offsetTop;
        bom.addEventListener('mousemove', move );
    });

    bom.addEventListener('mouseup', (e) => {
        bom.removeEventListener('mousemove', move);
    });
})(document, window);
