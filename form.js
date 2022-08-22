const formDiv = document.querySelector(".formDiv");

const dd = document.querySelector(".input-dd");
const mm = document.querySelector(".input-mm");
const yyyy = document.querySelector(".input-yyyy");

const enter = document.querySelector(".enter");
const spanError = document.querySelector(".access-denied");

enter.addEventListener("click", function() {
    var day = parseInt(dd.value)
    var month = parseInt(mm.value)
    var year = parseInt(yyyy.value)

    var now = new Date();
    var nowDay = now.getDate();
    var nowMonth = now.getMonth();
    var nowYear = now.getFullYear();

    if ((day>0 && day<32) && (month>0 && month<13) && (year>0 && year<2023) && yyyy.value.length==4) {
        dd.classList.remove("error");
        mm.classList.remove("error");
        yyyy.classList.remove("error");
        if((nowYear - year)>18) {
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
                } else {spanError.innerHTML = "sei piccino"}
            } else {spanError.innerHTML = "sei piccino"}
        } else {spanError.innerHTML = "sei piccino"}
    } else if (!(day>0 && day<32)) {
        mm.classList.remove("error");
        yyyy.classList.remove("error");
        dd.classList.add("error");
        spanError.innerHTML = "invalid day value"
    } else if (!(month>0 && month<13)) {
        dd.classList.remove("error");
        yyyy.classList.remove("error");
        mm.classList.add("error")
        spanError.innerHTML = "invalid month value"
    } else if (!(year>0 && year<2023) || yyyy.value.length!=4) {
        dd.classList.remove("error");
        mm.classList.remove("error");
        yyyy.classList.add("error")
        spanError.innerHTML = "invalid year value"
    }
    
})