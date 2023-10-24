


const accordians = document.querySelectorAll('.accordian')

accordians.forEach(accordian => {
    const question = accordian.querySelector('.question')
    const answer = accordian.querySelector('.answer')
    const downArrow = accordian.querySelector('.icon')
    const upArrow = accordian.querySelector('.icon2')

    question.addEventListener('click', () => {
        answer.classList.toggle('active')

        if (answer.style.display == 'none') {
            answer.style.display = 'block'
            downArrow.style.display = 'none';
            upArrow.style.display = 'block';
        } else {
            answer.style.display = 'none'
            downArrow.style.display = 'block';
            upArrow.style.display = 'none';
        }

    })


}

);




