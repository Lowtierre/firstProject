const formDiv = document.querySelector(".formDiv");
const dd = document.querySelector(".input-dd");
const mm = document.querySelector(".input-mm");
const yyyy = document.querySelector(".input-yyyy");
const enter = document.querySelector(".enter");
const spanError = document.querySelector(".access-denied");

// CALCOLO ETA'

enter.addEventListener("click", function() {
    var day = parseInt(dd.value)
    var month = parseInt(mm.value)
    var year = parseInt(yyyy.value)

    var now = new Date();
    var nowDay = now.getDate();
    var nowMonth = now.getMonth();
    var nowYear = now.getFullYear();

    var shortmonth = [4, 6, 9, 11];

    if ((day>0 && day<32) && (month>0 && month<13) && (year>1900 && year<2023)) {
        dd.classList.remove("error");
        mm.classList.remove("error");
        yyyy.classList.remove("error");

        if (((day>30) && shortmonth.includes(month))) {
            spanError.innerHTML = "Trenta dì conta novembre, con april, giugno e settembre..."
        } else if (month==2 && (day>29 || (day>28 && plusday(year)==false))) {
            spanError.innerHTML = "Di ventotto ce n'è uno, di ventinove uno ogni quattr'anni..."
        }
// SE ANNO ATTUALE - ANNO DI NASCITA > 18 --> ENTRI
    // SE ANNO ATTUALE - A.D.N. = 18 --> SE MESE ATTUALE - MESE DI NASCITA > 0 --> ENTRI
                                        // SE MESE ATTUALE - MESE DI NASCITA = 0 --> SE GIORNO ATTUALE - GIORNO DI NASCITA >= -1 --> ENTRI
        else if((nowYear - year)>18) {
            formDiv.style.visibility = "hidden"
            window.scrollTo(top)
        }
        else if ((nowYear - year)==18){
            if((nowMonth + 1)>month) {
                formDiv.style.visibility = "hidden"
                window.scrollTo(top)
            }
            else if ((nowMonth + 1) == month) {
                if (nowDay>day || nowDay==day) {
                    formDiv.style.visibility = "hidden"
                    window.scrollTo(top)
                } else {spanError.innerHTML = "Non sei abbastanza grande"}
            } else {spanError.innerHTML = "Non sei abbastanza grande"}
        } else {spanError.innerHTML = "Non sei abbastanza grande"}
        } else if (!(day>0 && day<32)) {
            mm.classList.remove("error");
            yyyy.classList.remove("error");
            dd.classList.add("error");
            spanError.innerHTML = "Non esiste questo giorno"
        } else if (!(month>0 && month<13)) {
            dd.classList.remove("error");
            yyyy.classList.remove("error");
            mm.classList.add("error")
            spanError.innerHTML = "Non esiste questo mese"
        } else if (year>2022) {
            dd.classList.remove("error");
            mm.classList.remove("error");
            yyyy.classList.add("error")
            spanError.innerHTML = "Non esiste quest'anno, non ancora..."
        } else if (year<1901) {
            dd.classList.remove("error");
            mm.classList.remove("error");
            yyyy.classList.add("error")
            spanError.innerHTML = "Sei troppo vecchio, non me la dai a bere..."
        }
})

// FUNZIONE ANNO BISESTILE

function plusday(numyear) {
    if (numyear % 4 == 0) {
        return true
    } else {
        return false
    }
}