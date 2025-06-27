// alert("Connected Successfully");

document.getElementById('changeTextButton').addEventListener('click', function () {
    let text = document.getElementById('myParagraph');
    text.textContent = 'paragraph has changed';
})


document.getElementById('highlightFirstCity').addEventListener('click', function(){
   let text2 =  document.getElementById('citiesList').firstElementChild;
   text2.classList.add('highlight');
})


document.getElementById('changeOrder').addEventListener('click', function(){
   let hold2 = document.getElementById('coffeeType');
   hold2.textContent = 'Espresso';
   hold2.style.backgroundColor = "red";
})


document.getElementById('addNewItem').addEventListener('click', function(){
    let hold3 = document.createElement('li');
    hold3.textContent = "Eggs";
    document.getElementById('shoppingList').appendChild(hold3);
})

//challenge 5
document.getElementById('removeLastTask').addEventListener('click', function(){
    let hold4 = document.getElementById('taskList');
    hold4.lastElementChild.remove();
})



//challenge 6
document.getElementById('clickMeButton').addEventListener('dblclick', function(){
    alert('chaicode');
})


//challenge 7
document.getElementById('teaList').addEventListener('click', function(event) {
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected " + event.target.textContent);
    }
});

// challenge 8
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let feedback = document.getElementById('feedbackInput').value;
    let text2 = document.getElementById('feedbackDisplay');
    text2.textContent = `Feedback is : ${feedback}`;
    text2.style.backgroundColor = "red";
    text2.style.fontSize = "18px";
    text2.style.color = "black";
    text2.style.fontWeight = "bold";
});


//example 9

document.addEventListener("DOMContentLoaded", function ()
{
document.getElementById("domStatus").textContent = "DOM fully loaded";
});


//example 10
document.getElementById("toggleHighlight").addEventListener("click", function () {
let descriptionText = document.getElementById("descriptionText");
descriptionText.classList.toggle("highlight");
});
