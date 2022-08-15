/* Buttons declaration */

const yepA = document.getElementById("yepa");
const yepB = document.getElementById("yepb");
const yepC = document.getElementById("yepc");
const yepD = document.getElementById("yepd");
const nopA = document.getElementById("nopa");
const nopB = document.getElementById("nopb");
const nopC = document.getElementById("nopc");
const nopD = document.getElementById("nopd");

/* Buttons event */

yepA.addEventListener("click", function() {
    yepA.classList.toggle("btOn")
    nopA.classList.remove("btOn")
});

yepB.addEventListener("click", function() {
    yepB.classList.toggle("btOn")
    nopB.classList.remove("btOn")
});

yepC.addEventListener("click", function() {
    yepC.classList.toggle("btOn")
    nopC.classList.remove("btOn")
});

yepD.addEventListener("click", function() {
    yepD.classList.toggle("btOn")
    nopD.classList.remove("btOn")
});

nopA.addEventListener("click", function() {
    nopA.classList.toggle("btOn")
    yepA.classList.remove("btOn")
});

nopB.addEventListener("click", function() {
    nopB.classList.toggle("btOn")
    yepB.classList.remove("btOn")
});

nopC.addEventListener("click", function() {
    nopC.classList.toggle("btOn")
    yepC.classList.remove("btOn")
});

nopD.addEventListener("click", function() {
    nopD.classList.toggle("btOn")
    yepD.classList.remove("btOn")
});

/* Beer Panel */

const result = document.querySelector(".result");
const close = document.querySelector(".close");
const panel = document.querySelector(".beer");
const blanket = document.querySelector(".blanket");
const bName = document.querySelector(".beer-name")
const btype = document.querySelector(".typo")
const btaste = document.querySelector(".taste")
const bcolor = document.querySelector(".color")
const bgrad = document.querySelector(".grad")
const bImg = document.querySelector(".beer-img")

let arr1 = [null,null,null,null]
const buttonY = [yepA, yepB, yepC, yepD]
const buttonN = [nopA, nopB, nopC, nopD]

function answerY(x,y) {
    for (i=0; i<(x.length); i++) {
        if (x[i].classList.contains("btOn")) {
            y[i] = true;
        }
    }
    console.log(y)
}

function answerN(x,y) {
    for (i=0; i<(x.length); i++) {
        if (x[i].classList.contains("btOn")) {
            y[i] = false;
        }
    }
    console.log(y)
}

result.addEventListener("click", function() {
    panel.style.display="block";
    blanket.style.display="block";
    window.scrollTo(top);
    answerY(x = buttonY, y = arr1);
    answerN(x = buttonN, y = arr1);
    insert(arr1);
});
 
function insert(arr1) {

    if (arr1[0] == true && arr1[1] == true && arr1[2] == true && arr1[3] == true) { 
          bName.innerHTML = "Ichnusa";
          btype.innerHTML = "Lager";
          btaste.innerHTML = "Leggermente amaro";
          bcolor.innerHTML = "Dorata";
          bgrad.innerHTML = "4,7 %";
          bImg.style.backgroundImage = "url(img/Birre/Ichnusa.png)";
        } else if (arr1[0] == true && arr1[1] == true && arr1[2] == true && arr1[3] == false) { 
            bName.innerHTML = "Tennent's Super";
            btype.innerHTML = "Strong Lager";
            btaste.innerHTML = "Dolce, ma robusto";
            bcolor.innerHTML = "Giallo intenso";
            bgrad.innerHTML = "9 %";
            bImg.style.backgroundImage = "url(img/Birre/Tennents.png)";
          } else if (arr1[0] == true && arr1[1] == true && arr1[2] == false && arr1[3] == true) { 
            bName.innerHTML = "Franziskaner Weiss Dunkel";
            btype.innerHTML = "Dunkel";
            btaste.innerHTML = "Note raffinate di pane fresco, noci e caramello";
            bcolor.innerHTML = "Ambrata scura";
            bgrad.innerHTML = "4,6 %";
            bImg.style.backgroundImage = "url(img/Birre/Franziskaner_Weiss_Dunkel.png)";
          } else if (arr1[0] == true && arr1[1] == false && arr1[2] == true && arr1[3] == true) { 
            bName.innerHTML = "Pedavena Dolomiti";
          btype.innerHTML = "Pils";
          btaste.innerHTML = "Rotondo, con note floreali";
          bcolor.innerHTML = "Chiara";
          bgrad.innerHTML = "4,9 %";
          bImg.style.backgroundImage = "url(img/Birre/Pedavena.png)";
          } else if (arr1[0] == true && arr1[1] == true && arr1[2] == false && arr1[3] == false) { 
            bName.innerHTML = "Moretti rossa";
          btype.innerHTML = "Bock";
          btaste.innerHTML = "Morbido, con note di caramello e liquirizia";
          bcolor.innerHTML = "Ambrata";
          bgrad.innerHTML = "7,2 %";
          bImg.style.backgroundImage = "url(img/Birre/Moretti_rossa.jpeg)";
          } else if (arr1[0] == true && arr1[1] == false && arr1[2] == true && arr1[3] == false) { 
            bName.innerHTML = "Leffe Blonde";
          btype.innerHTML = "Pale Ale";
          btaste.innerHTML = "Biscottosa e saporita";
          bcolor.innerHTML = "Dorata";
          bgrad.innerHTML = "6,7 %";
          bImg.style.backgroundImage = "url(img/Birre/Leffe.png)";
          } else if (arr1[0] == true && arr1[1] == false && arr1[2] == false && arr1[3] == true) { 
            bName.innerHTML = "Peroni rossa Gran Riserva";
          btype.innerHTML = "Vienna Style";
          btaste.innerHTML = "Leggero, con lievi note di caramello";
          bcolor.innerHTML = "Rosso rubino";
          bgrad.innerHTML = "5,2 %";
          bImg.style.backgroundImage = "url(img/Birre/Peroni_gran_riserva.png)";
          } else if (arr1[0] == true && arr1[1] == false && arr1[2] == false && arr1[3] == false) { 
            bName.innerHTML = "Grimbergen Double Ambrée";
          btype.innerHTML = "Birra d'abbazia";
          btaste.innerHTML = "Vago retrogusto torrefatto";
          bcolor.innerHTML = "Dorata";
          bgrad.innerHTML = "6,5 %";
          bImg.style.backgroundImage = "url(img/Birre/Grimbergen.png)";
          } else if (arr1[0] == false && arr1[1] == false && arr1[2] == false && arr1[3] == false) { 
            bName.innerHTML = "Chimay bleue";
          btype.innerHTML = "Strong Ale";
          btaste.innerHTML = "Fruttata e speziata";
          bcolor.innerHTML = "Scura";
          bgrad.innerHTML = "9 %";
          bImg.style.backgroundImage = "url(img/Birre/Chimay.png)";
          } else if (arr1[0] == false && arr1[1] == false && arr1[2] == false && arr1[3] == true) { 
            bName.innerHTML = "O'hara's Irish red";
          btype.innerHTML = "Ale";
          btaste.innerHTML = "Corposo e fruttato";
          bcolor.innerHTML = "Ambrata";
          bgrad.innerHTML = "4,3 %";
          bImg.style.backgroundImage = "url(img/Birre/OHaraS.png)";
          } else if (arr1[0] == false && arr1[1] == false && arr1[2] == true && arr1[3] == false) { 
            bName.innerHTML = "Duvel";
          btype.innerHTML = "Strong Ale";
          btaste.innerHTML = "Aromi fruttati e floreali, note speziate di lievito";
          bcolor.innerHTML = "Dorata";
          bgrad.innerHTML = "8,5 %";
          bImg.style.backgroundImage = "url(img/Birre/Duvel.png)";
          } else if (arr1[0] == false && arr1[1] == true && arr1[2] == false && arr1[3] == false) { 
            bName.innerHTML = "Cères Red Erik";
          btype.innerHTML = "Doppio malto";
          btaste.innerHTML = "Aroma di frutta, malto e caramello";
          bcolor.innerHTML = "Rossa";
          bgrad.innerHTML = "6,5 %";
          bImg.style.backgroundImage = "url(img/Birre/CeresRed.png)";
          } else if (arr1[0] == false && arr1[1] == false && arr1[2] == true && arr1[3] == true) { 
            bName.innerHTML = "Brewdog Punk Ipa";
          btype.innerHTML = "Ipa";
          btaste.innerHTML = "Note caramellate e retrogusto di luppoli";
          bcolor.innerHTML = "Bionda";
          bgrad.innerHTML = "5 %";
          bImg.style.backgroundImage = "url(img/Birre/Punk_ipa.png)";
          } else if (arr1[0] == false && arr1[1] == true && arr1[2] == true && arr1[3] == false) { 
            bName.innerHTML = "Cères Strong Ale";
          btype.innerHTML = "Strong Ale";
          btaste.innerHTML = "Ricco e intenso con sentori di malto";
          bcolor.innerHTML = "Dorata";
          bgrad.innerHTML = "7,7 %";
          bImg.style.backgroundImage = "url(img/Birre/Ceres.png)";
          } else if (arr1[0] == false && arr1[1] == true && arr1[2] == false && arr1[3] == true) { 
            bName.innerHTML = "Guinness Drought Stout";
          btype.innerHTML = "Stout";
          btaste.innerHTML = "Intenso retrogusto di malto e caffè";
          bcolor.innerHTML = "Scura";
          bgrad.innerHTML = "4,2 %";
          bImg.style.backgroundImage = "url(img/Birre/Guinnes_Drought_Stout.png)";
          } else if (arr1[0] == false && arr1[1] == true && arr1[2] == true && arr1[3] == true) { 
            bName.innerHTML = "Carlsberg Pilsner";
          btype.innerHTML = "Lager";
          btaste.innerHTML = "Aromi erbacei e resinosi";
          bcolor.innerHTML = "Chiara";
          bgrad.innerHTML = "5 %";
          bImg.style.backgroundImage = "url(img/Birre/Carlsberg.png)";
          } else if (arr1[0] == null || arr1[1] == null || arr1[2] == null || arr1[3] == null) {
            bName.style.fontSize = "1.2em";
            bName.innerHTML = "Devi rispondere a tutte le domande se vuoi sorseggiare la birra che fa per te";
          btype.innerHTML = "n/d";
          btaste.innerHTML = "n/d";
          bcolor.innerHTML = "n/d";
          bgrad.innerHTML = "n/d";
          bImg.style.backgroundImage = "url(img/Birre/Birra_vuota.png)";

          }
}

close.addEventListener("click", function() {
    yepA.classList.remove("btOn")
    yepB.classList.remove("btOn")
    yepC.classList.remove("btOn")
    yepD.classList.remove("btOn")
    nopA.classList.remove("btOn")
    nopB.classList.remove("btOn")
    nopC.classList.remove("btOn")
    nopD.classList.remove("btOn")
    arr1[0] = null
    arr1[1] = null
    arr1[2] = null
    arr1[3] = null
    panel.style.display="none";
    blanket.style.display="none";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
});