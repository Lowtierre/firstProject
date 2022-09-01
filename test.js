const body = document.querySelector('body')

// beer list 

var birre = [
  {
    nome: "Ichnusa",
    tipo: "Lager",
    gusto:"Leggermente amaro",
    colore: "Dorata",
    gradazione: "4,7%",
    immagine: "url(img/Birre/Ichnusa.png)"
  },
  {
    nome: "Tennent's Super",
    tipo: "Strong Lager",
    gusto: "Dolce, ma robusto",
    colore: "Giallo intenso",
    gradazione: "9 %",
    immagine: "url(img/Birre/Tennents.png)"
  },
  {
    nome: "Franziskaner Weiss Dunkel",
    tipo: "Dunkel",
    gusto: "Note raffinate di pane fresco, noci e caramello",
    colore: "Ambrata scura",
    gradazione: "4,6 %",
    immagine: "url(img/Birre/Franziskaner_Weiss_Dunkel.png)"
  },
  {
    nome: "Pedavena Dolomiti",
    tipo: "Pils",
    gusto: "Rotondo, con note floreali",
    colore: "Chiara",
    gradazione: "4,9 %",
    immagine: "url(img/Birre/Pedavena.png)"
  },
  {
    nome: "Moretti rossa",
    tipo: "Bock",
    gusto: "Morbido, con note di caramello e liquirizia",
    colore: "Ambrata",
    gradazione: "7,2 %",
    immagine: "url(img/Birre/Moretti_rossa.jpeg)"
  },
  {
    nome: "Leffe Blonde",
    tipo: "Pale Ale",
    gusto: "Biscottosa e saporita",
    colore: "Dorata",
    gradazione: "6,7 %",
    immagine: "url(img/Birre/Leffe.png)"
  },
  {
    nome: "Peroni rossa Gran Riserva",
    tipo: "Vienna Style",
    gusto: "Leggero, con lievi note di caramello",
    colore: "Rosso rubino",
    gradazione: "5,2 %",
    immagine: "url(img/Birre/Peroni_gran_riserva.png)"
  },
  {
    nome: "Grimbergen Double Ambrée",
    tipo: "Birra d'abbazia",
    gusto: "Vago retrogusto torrefatto",
    colore: "Dorata",
    gradazione: "6,5 %",
    immagine: "url(img/Birre/Grimbergen.png)"
  },
  {
    nome: "Chimay bleue",
    tipo: "Strong Ale",
    gusto: "Fruttata e speziata",
    colore: "Scura",
    gradazione: "9 %",
    immagine: "url(img/Birre/Chimay.png)"
  },
  {
    nome: "O'hara's Irish red",
    tipo: "Ale",
    gusto: "Corposo e fruttato",
    colore: "Ambrata",
    gradazione: "4,3 %",
    immagine: "url(img/Birre/OHaraS.png)"
  },
  {
    nome: "Duvel",
    tipo: "Strong Ale",
    gusto: "Aromi fruttati e floreali, note speziate di lievito",
    colore: "Dorata",
    gradazione: "8,5 %",
    immagine: "url(img/Birre/Duvel.png)"
  },
  {
    nome: "Cères Red Erik",
    tipo: "Doppio malto",
    gusto: "Aroma di frutta, malto e caramello",
    colore: "Rossa",
    gradazione: "6,5 %",
    immagine: "url(img/Birre/CeresRed.png)"
  },
  {
    nome: "Brewdog Punk Ipa",
    tipo: "Ipa",
    gusto: "Note caramellate e retrogusto di luppoli",
    colore: "Bionda",
    gradazione: "5 %",
    immagine: "url(img/Birre/Punk_ipa.png)"
  },
  {
    nome: "Cères Strong Ale",
    tipo: "Strong Ale",
    gusto: "Ricco e intenso con sentori di malto",
    colore: "Dorata",
    gradazione: "7,7 %",
    immagine: "url(img/Birre/Ceres.png)"
  },
  {
    nome: "Guinness Drought Stout",
    tipo: "Stout",
    gusto: "Intenso retrogusto di malto e caffè",
    colore: "Scura",
    gradazione: "4,2 %",
    immagine: "url(img/Birre/Guinnes_Drought_Stout.png)"
  },
  {
    nome: "Carlsberg Pilsner",
    tipo: "Lager",
    gusto: "Aromi erbacei e resinosi",
    colore: "Chiara",
    gradazione: "5 %",
    immagine: "url(img/Birre/Carlsberg.png)"
  },
  {
    nome: "Devi rispondere a tutte le domande se vuoi sorseggiare la birra che fa per te",
    tipo: "null",
    gusto: "null",
    colore: "null",
    gradazione: "null",
    immagine: "url(img/Birre/Birra_vuota.png)"
  }
]

// Buttons declaration

const yepA = document.getElementById("yepa");
const yepB = document.getElementById("yepb");
const yepC = document.getElementById("yepc");
const yepD = document.getElementById("yepd");
const nopA = document.getElementById("nopa");
const nopB = document.getElementById("nopb");
const nopC = document.getElementById("nopc");
const nopD = document.getElementById("nopd");

// Buttons event

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

// Beer Panel

function createPanel(index) {

  try{
    const panel = document.createElement("div");
    panel.setAttribute('class', 'beer');
    body.appendChild(panel);

    const close = document.createElement("button");
    close.setAttribute('class', 'close');
    panel.appendChild(close);

    const ics = document.createElement("i");
    ics.setAttribute('class', 'fa-solid fa-xmark');
    close.appendChild(ics)

    const bImg = document.createElement("div");
    bImg.setAttribute('class', 'beer-img');
    panel.appendChild(bImg)

    const bName = document.createElement("p");
    bName.setAttribute('class', 'beer-name');
    panel.appendChild(bName)

    const bDescr = document.createElement("div");
    bDescr.setAttribute('class', 'beer-description');
    panel.appendChild(bDescr)

    //table one
    const table1 = document.createElement("table");
    table1.setAttribute('class', 'beer-table1');
    const tr1 = document.createElement('tr');
    const tr2 = document.createElement('tr');
    table1.appendChild(tr1)
    table1.appendChild(tr2)
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const div1 = document.createElement('div');
    div1.setAttribute('class', 'property');
    div1.textContent = "TIPO"
    th1.appendChild(div1);
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'property');
    div2.textContent = "GUSTO"
    th2.appendChild(div2);
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const btype = document.createElement("p");
    btype.setAttribute('class', 'typo');
    td1.appendChild(btype);
    const btaste = document.createElement("p");
    btaste.setAttribute('class', 'taste');
    td2.appendChild(btaste);
    tr2.appendChild(td1);
    tr2.appendChild(td2);

    //table two
    const table2 = document.createElement("table");
    table2.setAttribute('class', 'beer-table2');
    const tr3 = document.createElement('tr');
    const tr4 = document.createElement('tr');
    table2.appendChild(tr3)
    table2.appendChild(tr4)
    const th3 = document.createElement('th');
    const th4 = document.createElement('th');
    const div3 = document.createElement('div');
    div3.setAttribute('class', 'property');
    div3.textContent = "COLORE"
    th3.appendChild(div3);
    const div4 = document.createElement('div');
    div4.setAttribute('class', 'property');
    div4.textContent = "GRADI"
    th4.appendChild(div4);
    tr3.appendChild(th3);
    tr3.appendChild(th4);
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const bcolor = document.createElement("p");
    bcolor.setAttribute('class', 'color');
    td3.appendChild(bcolor);
    const bgrad = document.createElement("p");
    bgrad.setAttribute('class', 'grad');
    td4.appendChild(bgrad);
    tr4.appendChild(td3);
    tr4.appendChild(td4);

    bDescr.appendChild(table1);
    bDescr.appendChild(table2);
    
    //fill modal

    bImg.style.backgroundImage = birre[index].immagine
    bName.textContent = birre[index].nome
    btype.textContent = birre[index].tipo
    btaste.textContent = birre[index].gusto
    bcolor.textContent = birre[index].colore
    bgrad.textContent = birre[index].gradazione

    // close modal

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
    panel.remove()
    blanket.style.display="none";
    window.scrollTo({
      top: 720,
      left: 0,
      behavior: "smooth"
    });
  });
  } catch(e) {
    alert('createPanel' + e)
  }
}

// button control

let arr1 = [null,null,null,null]
const buttonY = [yepA, yepB, yepC, yepD]
const buttonN = [nopA, nopB, nopC, nopD]

function answerY(x,y) {
  try{
    for (i=0; i<(x.length); i++) {
        if (x[i].classList.contains("btOn")) {
            y[i] = true;
        }
    }
  } catch(e){
    alert('answerY' + e)
  }
    console.log(y)
}

function answerN(x,y) {
  try{
    for (i=0; i<(x.length); i++) {
        if (x[i].classList.contains("btOn")) {
            y[i] = false;
        }
    }
  } catch(e){
    alert('answerN' + e)
  }
    console.log(y)
}


// fill modal with the right beer

function insert(arr1) {

  try{
    if (arr1[0] == true && arr1[1] == true && arr1[2] == true && arr1[3] == true) { 
        createPanel(0)
      } else if (arr1[0] == true && arr1[1] == true && arr1[2] == true && arr1[3] == false) { 
        createPanel(1)
      } else if (arr1[0] == true && arr1[1] == true && arr1[2] == false && arr1[3] == true) { 
        createPanel(2)
      } else if (arr1[0] == true && arr1[1] == false && arr1[2] == true && arr1[3] == true) { 
        createPanel(3)
      } else if (arr1[0] == true && arr1[1] == true && arr1[2] == false && arr1[3] == false) { 
        createPanel(4)
      } else if (arr1[0] == true && arr1[1] == false && arr1[2] == true && arr1[3] == false) { 
        createPanel(5)
      } else if (arr1[0] == true && arr1[1] == false && arr1[2] == false && arr1[3] == true) { 
        createPanel(6)
      } else if (arr1[0] == true && arr1[1] == false && arr1[2] == false && arr1[3] == false) { 
        createPanel(7)
      } else if (arr1[0] == false && arr1[1] == false && arr1[2] == false && arr1[3] == false) { 
        createPanel(8)
      } else if (arr1[0] == false && arr1[1] == false && arr1[2] == false && arr1[3] == true) { 
        createPanel(9)
      } else if (arr1[0] == false && arr1[1] == false && arr1[2] == true && arr1[3] == false) { 
        createPanel(10)
      } else if (arr1[0] == false && arr1[1] == true && arr1[2] == false && arr1[3] == false) { 
        createPanel(11)
      } else if (arr1[0] == false && arr1[1] == false && arr1[2] == true && arr1[3] == true) { 
        createPanel(12)
      } else if (arr1[0] == false && arr1[1] == true && arr1[2] == true && arr1[3] == false) { 
        createPanel(13)
      } else if (arr1[0] == false && arr1[1] == true && arr1[2] == false && arr1[3] == true) { 
        createPanel(14)
      } else if (arr1[0] == false && arr1[1] == true && arr1[2] == true && arr1[3] == true) { 
        createPanel(15)
      } else if (arr1[0] == null || arr1[1] == null || arr1[2] == null || arr1[3] == null) {
        createPanel(16)
        //bName.style.fontSize = "1.2em";
      }
  } catch(e) {
    alert('insert' + e)
  }
}

const result = document.querySelector(".result");
const close = document.querySelector(".close");
// const panel = document.querySelector(".beer");
const blanket = document.querySelector(".blanket");
// const bName = document.querySelector(".beer-name")
// const btype = document.querySelector(".typo")
// const btaste = document.querySelector(".taste")
// const bcolor = document.querySelector(".color")
// const bgrad = document.querySelector(".grad")
// const bImg = document.querySelector(".beer-img")
const gancio = document.querySelector(".inizio")

// result button

result.addEventListener("click", function() {
  // panel.style.display="block";
  blanket.style.display="block";
  window.scrollTo(0, 720);
  answerY(x = buttonY, y = arr1);
  answerN(x = buttonN, y = arr1);
  insert(arr1);
});



