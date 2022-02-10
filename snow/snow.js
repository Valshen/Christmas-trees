const creareSow = n => {


    const style = document.createElement('style');

    style.textContent = `
        body {
            position: relative;
        }
        .snow {
            width: 40px;
            height: 40px;
            position: fixed;
            top: -40px;
            pointer-events: none;
            animation: fall linear;
            background-repeat: no-repeat;
        }
        @keyframes fall {
            100% {
                transform: translateY(100vh);
            }
        }
    `;

    document.head.append(style);

    let i = 1;
    const count = 4;

   const createSnowFlake = () => {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    i += 1;
    if (i > count) i = 1;
    
    snow.style.left = (Math.random() * window.innerWidth) + 'px';
    snow.style.opacity = Math.random();
    snow.style.animationDuration = (Math.random() + n + 2) + 's';
    snow.style.backgroundImage = `url('snow/img/snowflake${i}.svg')`;
    const size = i * 10;
    console.log('size: ', size);
    snow.style.width = size + 'px';
    snow.style.height = size + 'px';
    document.body.append(snow);

    setTimeout(() => {
        snow.remove();
    }, (n + 2) * 1000)
    
   };

   setInterval(createSnowFlake, 300);
};


creareSow(6);