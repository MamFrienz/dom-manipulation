/* Task 1 */
var heading =document.getElementById('heading')
console.log(heading.innerText);


/* Task 2 using plain JavaScript */

//var test
var textBtn = document.getElementById('addText2');
textBtn.addEventListener('click',function(event){
    var task2=document.getElementById('task2a');
   var paragraph=document.createElement('p');
   
    paragraph.innerText="Hello World";
    task2.appendChild(paragraph);
   // test= 3;
    
});
//console.log(test);

  //task2b
  function changeBGcolor(event)
{
    var body = document.getElementsByTagName('body')[0];
    
    body.style.backgroundColor = event.target.innerText.toLowerCase();
    
     // if(event.target.innerText=="Red"){
        //  body.style.backgroundColor='red';
    //  }
     // if(event.target.innerText== "Green"){
     //     body.style.backgroundColor='green';
    //  }
  }

//task 2c
function redirectToGoogle(event){
    window.location.assign("http://www.google.com/");
}


/* Task 4 using jQuery */
//Task 4a
$('#addText4').click(function(event)
{
    var paragraph = $('<p>').text('Hello World');  
    $('#task4a').append(paragraph);  
});

//Task 4b
function changeBG(event){
    var color= event.target.innerText.toLowerCase()
    $('body').css('background-color',color)
}


//Task 4c
$("#sum").click(function(event)
{
    var sum = Number($("#num1").val()) + Number($('#num2').val());
    $('#result').text(sum);
});