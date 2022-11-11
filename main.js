document.getElementById("default").click();

var prevInside = false;

function openCity(evt, cityName, inside) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    tabcontenti = document.getElementsByClassName("tabcontentinside");
    if (inside == false){
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        for (i = 0; i < tabcontenti.length; i++) {
            tabcontenti[i].style.display = "none";
        }
        // Get all elements with class="tablinks" and remove the class "active"
        tablinksi = document.getElementsByClassName("tablinksinside");
        for (i = 0; i < tablinksi.length; i++) {
          tablinksi[i].className = tablinksi[i].className.replace(" active", "");
        }
    }
    else{
        for (i = 0; i < tabcontenti.length; i++) {
            tabcontenti[i].style.display = "none";
        }
        // Get all elements with class="tablinks" and remove the class "active"
        tablinksi = document.getElementsByClassName("tablinksinside");
        for (i = 0; i < tablinksi.length; i++) {
          tablinksi[i].className = tablinksi[i].className.replace(" active", "");
        }
    }

    prevInside=inside;
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}