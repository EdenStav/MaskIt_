var slideIndex = 1;
showSlides(slideIndex);
//מפעיל את הפונקציה שוב ושוב בהתאם למספר הרצוי

//  תמונה קדימה/אחורה - משנה את המספר בהתאם
function plusSlides(num) {
    showSlides(slideIndex += num);
}

// פונקציה להרחבת התמונות הקטנות לתמונה המרכזית
function makemain(num) {
    showSlides(slideIndex = num);
}

function showSlides(num) {
    var topimages = document.getElementsByClassName("myimages");
    var sliderimages = document.getElementsByClassName("slider");
    if (num > topimages.length) { slideIndex = 1 }
    //אם ה num עובר את מספר התמונות 5 אז חוזרים להתחלה 
    if (num < 1) { slideIndex = topimages.length }
    //אם ה num עובר את מספר התמונות -1 אז חוזרים להתחלה 
    //לולאה חוזרת שעוברת על כל התמונות ומחזירה אותם להגדרות הבסיס
    for (var i = 0; i < topimages.length; i++) {
        topimages[i].style.display = "none";
        sliderimages[i].className = sliderimages[i].className.replace(" addopacity", "");
    }
    //כשרוצים להחליף CLASS יש להקפיד על רווח לפני 
    topimages[slideIndex - 1].style.display = "block";
    sliderimages[slideIndex - 1].className += " addopacity";
    document.getElementById('caption').innerHTML = sliderimages[slideIndex - 1].alt;
}