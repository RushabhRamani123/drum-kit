// document.querySelector("button").addEventListener("click", handleclick);

// function handleclick()
// {
//     alert("i got click ");
// }
// you can even write the code in this manner
// document.querySelector("button").addEventListener("click", function () {
//     alert("i got click ");
    
// });




// this call the function when the script is being load , even if the click has not happen
//document.querySelector("button").addEventListener("click", handleclick());
// function handleclick()
// {
//     alert("i got click ");
// }


// for (var i = 0; i <7; i++)
// {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         alert("i got click ");
        
//     });
// }


// for (var i = 0; i < document.querySelectorAll(".drum").length; i++){  // this helps to specific button and not the other button
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         alert("i got click ");
        
//     });
// }
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

  // this helps to specific button and not the other button
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var beta = this.innerHTML;
        makeSound(beta);
        buttonanimation(beta);
    });
    
   
}
  
document.addEventListener("keydown", function (event) {
        

    makeSound(event.key);
    buttonanimation(event.key);
    
});
    

function makeSound(key)
{
    switch (key)
    {
        case "w": var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break; 
        case "a": var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s": var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d": var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j": var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "l": var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k": var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default: console.log();
            break; 
    }
}
    

function buttonanimation(currentkey)
{
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function () {
        activebutton.classList.remove("pressed");
    }, 100); // THE SETTIMEOUT IS IMPORTANT FOR THE FUNCTION AS REGAIN THE  ORIGINAL FORM 
}