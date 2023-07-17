var myMusic;

window.onload = function() {
    init();
    document.getElementById('startButton').addEventListener('click', function() {
        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('container').style.display = 'block';
    });
};

function init(){
    console.log("window has loaded");
    state.i=0;
    state.j=0;
}

var state= {
    i:0,
    j:0
};
function nexthair()
{
    console.log("setting next hair");

    console.log(state.i);
    var hair=document.getElementById("hair");

    if(state.i===0){
        hair.setAttribute("class","hair1");
        state.i++;
        console.log(state.i);
    }

    else if(state.i===1){
        hair.setAttribute("class","hair2");
        state.i++;
    }
    else if(state.i===2){
        hair.setAttribute("class","hair3");
        state.i++;
    }
    else if(state.i===3){
        hair.setAttribute("class","hair4");
        state.i++;
    }
    else if(state.i===4){
        hair.setAttribute("class","");
        state.i=0;
    }
}

function prevhair()
{
    console.log("setting previous hair");

    console.log(state.i);
    var hair=document.getElementById("hair");

    if(state.i===0){
        hair.setAttribute("class","hair4");
        state.i=3;
        console.log(state.i);
    }

    else if(state.i===1){
        hair.setAttribute("class","");
        state.i--;
        console.log(state.i);
    }

    else if(state.i===2){
        hair.setAttribute("class","hair1");
        state.i--;
        console.log(state.i);
    }
    else if(state.i===3){
        hair.setAttribute("class","hair2");
        state.i--;
        console.log(state.i);
    }
    else if(state.i===4){
        hair.setAttribute("class","hair3");
        state.i--;
        console.log(state.i);
    }
}



function nextdress(){
    console.log("setting next dress");

    console.log(state.j);
    var dress=document.getElementById("dress");

    if(state.j===0){
        dress.setAttribute("class","dress1");
        state.j++;
    }

    else if(state.j===1){
        dress.setAttribute("class","dress2");
        state.j++;
    }
    
    else if(state.j===2){
        dress.setAttribute("class","dress3");
        state.j++;
    }

    else if(state.j===3){
        dress.setAttribute("class","dress4");
        state.j++;
    }

    else if(state.j===4){
        dress.setAttribute("class","dress5");
        state.j++;
    }

    else if(state.j===5){
        dress.setAttribute("class","dress6");
        state.j++;
    }
    else if(state.j===6){
        dress.setAttribute("class","");
        state.j=0;
    }
}

function prevdress(){
    console.log("setting previous dress");

    console.log(state.j);
    var dress=document.getElementById("dress");

    if (state.j===0){
        dress.setAttribute("class","dress6");
        state.j=6;
    }

    else if(state.j===1){
        dress.setAttribute("class","");
        state.j--;
    }
    else if(state.j===2){
        dress.setAttribute("class","dress1");
        state.j--;
    }
    else if(state.j===3){
        dress.setAttribute("class","dress2");
        state.j--;
    }
    else if(state.j===4){
        dress.setAttribute("class","dress3");
        state.j--;
    }
    else if(state.j===5){
        dress.setAttribute("class","dress4");
        state.j--;
    }
    else if(state.j===6){
        dress.setAttribute("class","dress5");
        state.j--;
    }
}
