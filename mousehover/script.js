var body = document.querySelector('body')


body.addEventListener('mousemove', function (e) {
    var a = e.clientX;
    var b = e.clientY;
    var x = document.querySelector('.xContainer h2').textContent = `x : ${a}`;
    var y = document.querySelector('.yContainer h2').textContent = `y : ${b}`;
})
