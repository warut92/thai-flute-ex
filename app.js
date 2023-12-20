let button = document.querySelector('input');

//onclick btn change value and display style
button.onclick = function() {
  let fluteImgDiv = document.getElementById('flute-img')
  let tipsDiv = document.getElementById('tips');
  if (fluteImgDiv.style.display === "none") {
    fluteImgDiv.style.display = "block";
    tipsDiv.style.display = "block";
    button.value = "x";
  } else {
    fluteImgDiv.style.display = "none";
    tipsDiv.style.display = "none";
    button.value = "/";
  }
}

let fluteImage;

function addBgColor(x) {
  x.style.backgroundColor = "red"
  if (x.innerHTML === "---ดํ") {
    fluteImage = "1h";
  } else if (x.innerHTML === "---ท") {
    fluteImage = "7";
  } else if  (x.innerHTML === "---ล") {
    fluteImage = "6";
  } else if  (x.innerHTML === "---ซ") {
    fluteImage = "5";
  } else if  (x.innerHTML === "---ฟ") {
    fluteImage = "4";
  } else if  (x.innerHTML === "---ม") {
    fluteImage = "3";
  } else if  (x.innerHTML === "---ร") {
    fluteImage = "2";
  } else if  (x.innerHTML === "---ด") {
    fluteImage = "1";
  }
  document.getElementById('flute-img').innerHTML = '<img src="./img/' + fluteImage + '.png" />';
}


function whiteBgColor(x) {
  x.style.backgroundColor = "white";
  document.getElementById('flute-img').innerHTML = '<img src="./img/0.png" />';
}

let i = 0;
addEventListener("keydown", (e) => {
  console.log('E', e)
  if (e.keyCode == "39") {
    i++
  } else if (e.keyCode == "37") {
    i--
  }
  if (i > 8) {
    i = 1;
  } else if (i < 1) {
    i = 8;
  }
  document.getElementById(`bar_${i}`).style.backgroundColor = "red";
  let moreThan_i = i + 1;
  if (moreThan_i > 8) {
    moreThan_i = 1;
  }
  document.getElementById(`bar_${moreThan_i}`).style.backgroundColor = "white";
  let lessThan_i = i - 1;
  if (lessThan_i < 1) {
    lessThan_i = 8;
  }
  document.getElementById(`bar_${lessThan_i}`).style.backgroundColor = "white";

  let innerNote = document.getElementById(`bar_${i}`).innerHTML;
  console.log(innerNote);

  if (innerNote === "---ดํ") {
    fluteImage = "1h";
  } else if (innerNote === "---ท") {
    fluteImage = "7";
  } else if  (innerNote === "---ล") {
    fluteImage = "6";
  } else if  (innerNote === "---ซ") {
    fluteImage = "5";
  } else if  (innerNote === "---ฟ") {
    fluteImage = "4";
  } else if  (innerNote === "---ม") {
    fluteImage = "3";
  } else if  (innerNote === "---ร") {
    fluteImage = "2";
  } else if  (innerNote === "---ด") {
    fluteImage = "1";
  }
  document.getElementById('flute-img').innerHTML = '<img src="./img/' + fluteImage + '.png" />';
})

addEventListener("keyup", (e) => {
    if (e.keyCode == "40") {
      document.getElementById(`bar_${i}`).style.backgroundColor = "red";
    }
  })
  addEventListener("keydown", (e) => {
    //press arrow down to winking
      if (e.keyCode == "40") {
        document.getElementById(`bar_${i}`).style.backgroundColor = "white";
      }
    })
