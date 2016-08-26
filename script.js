Script will//Script that will create ad like id
var adBlock;
var adElement=document.createElement('div');
adElement.id='xeaYOgAjzpMG';
adElement.style.display='none';
document.body.appendChild(adElement);
//


 


//Script that will identify if the ad like id is blocked or not
if(document.getElementById('xeaYOgAjzpMG')){
  alert('You are not blocking ads!');
  adBlock = false;
} else {
  alert('You are blocking advertisements.');
  adBlock = true;
}

//Set Cookie Function
function setCookie(cname, cvalue, exdays) {
    var date = new Date();
    date.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ date.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
} 
//

function addtoCookie() { 
if (adBlock === true) {
//Creating cookie detect if person used adblock detectors for more than 10 years.
setCookie("isBlock", true,3650)

}

}





