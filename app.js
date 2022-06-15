const topRocket = document.querySelector('.top-rocket');
const midRocket = document.querySelector('.mid-rocket');
const rocket = document.querySelector('.bot-rocket');
const supply = document.querySelector('.supply');
const allBlocs = document.querySelector('.bloc');

const allOffsets = [105, 206, 848];

gsap.utils.to(['.bloc2', '.bloc3', '.bloc4']).forEach((bloc, index) => {
   gsap.to(bloc, {
        y: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".container-scroll",
            start: "top bottom-=370px",
            end: `+=${allOffsets[index]}`,
            markers: true,
            scrub: true,
        }
    })
});

allBlocs.forEach((bloc, index) => {

    if(index === 3){
        gsap.set(bloc, {

            scrollTrigger: {
                trigger: bloc,
                start: 'top+=150 center',
                onEnter: () => {
                    bloc.classList.add('active')
                },
                onLeaveBACK: () => {
                    bloc.classList.remove('active')
                },
                markers: true
            }
        })
    }

    gsap.set(bloc, {

        scrollTrigger: {
            trigger: bloc,
            start: 'top center+=100',
            onEnter: () => {
                bloc.classList.add('active')
            },
            onLeaveBACK: () => {
                bloc.classList.remove('active')
            },
            markers: true
        }
    })
})