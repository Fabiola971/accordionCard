const questions = document.querySelectorAll('.question');

          
questions.forEach(function (question){
    const spanArrow = question.querySelector('span');
    const paragraph = question.querySelector('p');
    const picture = question.querySelector('img')
        spanArrow.addEventListener('click', function(){
            question.children[1].classList.toggle('hidden'); 
            paragraph.classList.toggle('fontWeight');
            picture.classList.toggle('arrowSpinning');       
        });
});

questions.forEach(function (item){
    const paragraph = item.querySelector('p');
    const picture = item.querySelector('img')
        paragraph.addEventListener('click', function(){
            item.children[1].classList.toggle('hidden'); 
            paragraph.classList.toggle('fontWeight');
            picture.classList.toggle('arrowSpinning');        
        });
});

