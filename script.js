/*

//This part is not running due to an error. If you fix this you are welcome to use this part.

function addtoCookie() { 
if (adBlock === true) {

//Alerting if the person will disable advertisements the next time:
function noadCommit() { 
var firstTime = getCookie("firstTime");
if (firstTime === true) {
var willBlock = prompt("This is first time visiting website or you have cleared cookies. Will you block ads next time")
if (willBlock === "Yes" || willBlock === "yes" || willBlock === "YES"|| willBlock === "YeS"|| willBlock === "yEs"|| willBlock === "yES"|| willBlock === "YEs" || willBlock === "yeS" ) {
setCookie("Commit", true, 3650)
alert("Okay. thanks!")
}
}
else {
alert("You have visited this site multiple times and still didn't block advertisements. We will redirect you to 'www.beansarecool.org' ")
window.location = "http://www.Beansarecool.org"; //change this to whatever you want.

}


}
//Creating cookie detect if person used adblock detectors..
setCookie("isBlock", true,3650)
noadCommit();
}
else {

alert ("hello")
}

}




//Set Cookie Function
function setCookie(cname, cvalue, exdays) {
    var date = new Date();
    date.setTime(date.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ date.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
} 
//
//Get Cookie Function

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//

//FirstTime Visit?
setCookie("firstTime", true,3650)

*/

//Script that will create ad like id


var adBlock;
var adElement=document.createElement('div');
adElement.id='xeaYOgAjzpMG';
adElement.style.display='none';
document.body.appendChild(adElement);
//


//Script that will identify if the ad like id is blocked or not
if(adElement ==! "null" || adElement ==! ""){
  alert('You are not blocking ads!');
  adBlock = false;
  addtoCookie();
  noadCommit();
} else {
  alert('You are blocking advertisements.');
  adBlock = true;
}









