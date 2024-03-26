let btn=document.querySelector("button")
let image=document.querySelector("img")
let body=document.querySelector("body")
let on=false;
function lightOn(){
    if(on==false){
        btn.innerHTML="OFF"
        image.src= "./assets/light-on.png";
        image.src.boxShadow="0px 0px 20px #ffd500"
        image.style.filter = `drop-shadow(0px 0px 30px #ffd500)`;
        body.style.backgroundColor = "darkblue";
        btn.style.backgroundColor="#94acf1"
        btn.style.color="darkblue"
        on=true;
    }
    else{
        btn.innerHTML="ON"
        image.src="./assets/light-off.png";
        body.style.backgroundColor="#94acf1";
        image.style.filter = `drop-shadow(0px 0px 30px black)`;
        btn.style.backgroundColor="white"
        btn.style.color="black"
        on=false;
    }
}