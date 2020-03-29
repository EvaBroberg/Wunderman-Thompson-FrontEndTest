document.documentElement.addEventListener("click",function(e) {
    if (e.target && e.target.matches("li.question")) {
        e.target.classList.toggle('active');
    }
});


window.onload =function getQuestion(){
    fetch('https://api.myjson.com/bins/jw3rg')
    .then(res => res.json())
    .then(data => {
        data = data.faqs;
        let output = '';
        data.forEach(function(question){
            output += 
            `<ul class="guestion-answer">
            
            <li class="question">${question.question}</li>
            <li class="answer">
            <p class="answer-content">${question.answer}</p>
            </li>
            
            </ul>`
        });
        
        document.querySelector('.questions').innerHTML = output;
    })
    .catch(err => console.log(err));
}


