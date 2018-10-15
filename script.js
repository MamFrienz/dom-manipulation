/* Task 1 */
var heading =document.getElementById('heading')
console.log(heading.innerText);


/* Task 2 using plain JavaScript */

var textBtn = document.getElementById('addText2');
textBtn.addEventListener('click',function(event){
    var task2=document.getElementById('task2a');
   var paragraph=document.createElement('p');
   
    paragraph.innerText="Hello World";
    task2.appendChild(paragraph);
    
});

  //task2b
  function  changeBGcolor(event){
      var body = document.getElementsByTagName('body')[0];
      body.style.backgroundColor=event.target.innrerText.toLowerCase();
     // if(event.target.innerText=="Red"){
        //  body.style.backgroundColor='red';
    //  }
     // if(event.target.innerText== "Green"){
     //     body.style.backgroundColor='green';
    //  }
  }

//task 2c
function redirectToGoogle(event){
    window.location.assign("http://www.google.com")
}
/* Task 4 using jQuery */
