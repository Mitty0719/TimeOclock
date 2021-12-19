(function(){
    const backImage = document.querySelector('.backImage');
    let x = 0, y = 0;
    let currentX = 0, currentY = 0;
    let speed = 0.0005;

    function backImageMove(e){
        x = e.clientX - window.innerWidth / 2;
        y = e.clientY - window.innerHeight / 2;
    }

    window.addEventListener('mousemove', backImageMove);

    function backImageMoveRaf(){
        currentX += (x - currentX) * speed;
        currentY += (y - currentY) * speed;
        console.log(x, currentX);
        console.log(y, currentY);

        backImage.style.transform = 'translate(-' + (currentX * 0.2) + 'px, -' + (currentY * 0.2) + 'px)';
        window.requestAnimationFrame(backImageMoveRaf);
    }

    window.requestAnimationFrame(backImageMoveRaf)

})()