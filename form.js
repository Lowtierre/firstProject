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

    if ((day>0 && day<32) && (month>0 && month<13) && (year>0 && year<2023) && yyyy.value.length==4) {
        formDiv.style.visibility = "hidden"
        window.scrollTo(top)
    } else if (!(day>0 && day<32)) {
        console.log("bad day")
        dd.classList.add("error");
        var badDay = document.createTextNode("invalid day value");
        spanError.appendChild(badDay)
    } else if (!(month>0 && month<13)) {
        console.log("bad month")
        mm.classList.add("error")
        var badMonth = document.createTextNode("invalid month value");
        spanError.appendChild(badMonth)
    } else if (!(year>0 && year<2023) || yyyy.value.length!=4) {
        console.log("bad year")
        yy.classList.add("error")
        var badYear = document.createTextNode("invalid year value");
        spanError.appendChild(badYear)
    }
    
})