let isOpen;
let requestInputs=document.getElementsByClassName("requestInput");

function bindEvents() {
    document.getElementById("linkRules").addEventListener("click",openOrClose);
    document.getElementById("agreeRules").addEventListener("click",openOrClose);
    document.getElementById("requestSongs").addEventListener("click",requestSong);

    for (i=0;i<requestInputs.length;i++) {
        requestInputs[i].addEventListener("input",removeBorders)
    }
}

function loadLocalStorage() {
    if(localStorage.getItem("classPeriod")) {
        document.getElementById("classPeriod").value=localStorage.getItem("classPeriod");
    }
    if(localStorage.getItem("gradeLevel")) {
        document.getElementById("gradeLevel").value=localStorage.getItem("gradeLevel");
    }
}

/*function checkAllowed() {
    alert(Math.floor(Math.random() * 9999999) + 1000000) 
}*/

function openOrClose() {
    let coverBg=document.getElementById("coverBg");
    let rulesArea=document.getElementById("rules");

    if(!isOpen) {
        openRules(coverBg,rulesArea);
        isOpen=true;
    } else {
        closeRules(coverBg,rulesArea);
        isOpen=false;
    }
}

function openRules(coverBg,rulesArea) {
    coverBg.style.backgroundColor="rgba(0,0,0,0.5)";
    coverBg.style.pointerEvents="all";
    rulesArea.style.top="20px";
}

function closeRules(coverBg,rulesArea) {
    coverBg.style.backgroundColor="rgba(0,0,0,0)";
    coverBg.style.pointerEvents="none";
    rulesArea.style.top="-250px";
}

function requestSong() {
    let period=document.getElementById("classPeriod");
    let gradeLevel=document.getElementById("gradeLevel");
    let artistName=document.getElementById("songArtist");
    let songName=document.getElementById("songName");
    let inputsValid=0;

    checkValidity(period,gradeLevel,artistName,songName);

    for (let i=0;i<requestInputs.length;i++) {
        if(requestInputs[i].style.border=="2px solid transparent") {
            inputsValid+=1;
        }
    }

    if(inputsValid==4) {
        setLocalStorage(period,gradeLevel)
    }
}

function checkValidity(period,gradeLevel,artistName,songName) {
    let periodList=["1","2","3","4","5","6","7"];
    let gradeList=["9","10","11","12"];

    if(!periodList.includes(period.value)) {
        period.style.border="red solid 2px";
    }
    if(!gradeList.includes(gradeLevel.value)) {
        gradeLevel.style.border="red solid 2px";
    }
    if(artistName.value.trim().length==0) {
        artistName.style.border="red solid 2px";
    }
    if(songName.value.trim().length==0) {
        songName.style.border="red solid 2px";
    }
}

function setLocalStorage(period,gradeLevel) {
    localStorage.setItem("classPeriod",period)
    localStorage.setItem("gradeLevel",gradeLevel)
}

/***** LESSER USED FUNCTIONS *****/

function removeBorders() {
    this.style.border="transparent solid 2px";
}
