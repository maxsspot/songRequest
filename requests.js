let inputFields=document.getElementsByTagName("input")
let banStudent=document.getElementById("banStudent");
let banOpen=false;

function attatchEvents() {
    document.getElementById("submitPass").addEventListener("click",logIn)
    banStudent.addEventListener("click",controlBanState)
    document.getElementById("closeBan").addEventListener("click",controlBanState)

    for(let i=0;i<inputFields.length;i++) {
        inputFields[i].addEventListener("input",removeBorders)
    }
}

function logIn() {
    let passField=document.getElementById("password");

    if(passField.value=="gymclassep312") {
        allowAccess()
    } else {
        passField.style.border="red solid 2px"
    }
}

function controlBanState() {
    let coverBg=document.getElementById("coverBg");
    let banArea=document.getElementById("banArea");

    if(!banOpen) {
        openBan(coverBg,banArea);
        banOpen=true;
    } else {
        closeBan(coverBg,banArea);
        banOpen=false;
    }
}

function openBan(coverBg,banArea) {
    coverBg.style.backgroundColor="rgba(0,0,0,0.5)";
    coverBg.style.pointerEvents="all";
    banArea.style.top="20px";
}

function closeBan(coverBg,banArea) {
    coverBg.style.backgroundColor="rgba(0,0,0,0)";
    coverBg.style.pointerEvents="none";
    banArea.style.top="-350px";
}

/***** Lesser Used Functions *****/

function removeBorders() {
    this.style.border="transparent solid 2px";
}

function allowAccess() {
    document.getElementById("passwordArea").style.display="none"
    document.getElementById("mainContent").style.display="block"
    banStudent.style.display="block";
}

allowAccess()
