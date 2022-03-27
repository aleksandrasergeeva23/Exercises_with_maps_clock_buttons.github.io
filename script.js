(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            

            if (h < 10) {
                h = "0" + h;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }
            if (h == 13){
                h = "0" + 1;
            }
            if (h == 14){
                h = "0" + 2;
            }
            if (h == 15){
                h = "0" + 3;
            }
            if (h == 16){
                h = "0" + 4;
            }
            if (h == 17){
                h = "0" + 5;
            }
            if (h == 18){
                h = "0" + 6;
            }
            if (h == 19){
                h = "0" + 7;
            }
            if (h == 20){
                h = "0" + 8;
            }
            if (h == 21){
                h = "0" + 9;
            }
            if (h == 22){
                h = 10;
            }
            if (h == 23){
                h = 11;
            }
            if (h == 24){
                h = 12;
            }

            c.innerHTML = h + ":" + m + ":" + s;
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0.00 &euro;";
    let hind = 0;
    function estimateDelivery(event) {
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");
        if ((fname.value === "") || (lname.value === "")) {
            alert("Palun sisestage teksti");
        }


        event.preventDefault();
        if(document.getElementById('contactChoice1').checked || document.getElementById('contactChoice2').checked) {
        } else {
            alert("Palun valige kontakti viis");
        }
        
        
        let linn = document.getElementById("linn");
        if (document.getElementById("v1").checked){ 
            hind = 0;
            hind = hind + 5; 
        } 
        if (document.getElementById("v2").checked){ 
            hind = 0;
            hind = hind + 1; 
        }
        if (document.getElementById("v1").checked && document.getElementById("v2").checked){ 
            hind = 0;
            hind = hind + 6; 
        }
        
        if (linn.value === "") {
            alert("Palun valige linn nimekirjast");
            linn.focus();
            return;
        }
        if (linn.value == "tln"){
            linn.focus();
            e.innerHTML = hind + ".00 &euro;";
            console.log("Tarne hind on arvutatud");
            
        }
        if (linn.value == "trt"){
            linn.focus();
            e.innerHTML = (hind + 2.5) + "0 &euro;";
            console.log("Tarne hind on arvutatud");
        }
        if (linn.value == "nrv"){
            linn.focus();
            e.innerHTML = (hind + 2.5) + "0 &euro;";
            console.log("Tarne hind on arvutatud");
        }
        if (linn.value == "prn"){
            linn.focus();
            e.innerHTML = (hind + 3) + " &euro;";
            console.log("Tarne hind on arvutatud");
        }       
        return e.innerHTML;
    }
    
})();


// map

let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

let map;

function GetMap() {

    let centerPoint = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );
    let newPoint = new Microsoft.Maps.Location(
        58.396150, 
        24.526201
    );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: new Microsoft.Maps.Location (58.354564, 25.393089),
        zoom: 8,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
   
    let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Tartu Ülikool'
        });
    let newpin = new Microsoft.Maps.Pushpin(newPoint, {
            title: 'Pärnu'
    });

    map.entities.push(pushpin);
    map.entities.push(newpin);
}

/*var pinInfobox;

function GetMap() {

    var pushpinInfos = [];
    pushpinInfos[0] = { 'lat': 58.38104, 'lng': 26.71992, 'title': 'Tartu ülikool'};
    pushpinInfos[1] = { 'lat': 58.396150, 'lng': 24.526201, 'title': 'Pärnu'};

    var infoboxLayer = new Microsoft.Maps.EntityCollection();
    var pinLayer = new Microsoft.Maps.EntityCollection();
    var apiKey = "<api key>";

    var map = new Microsoft.Maps.Map(document.getElementById("map"), { credentials: apiKey });

    var locs = [];
    for (var i = 0 ; i < pushpinInfos.length; i++) {
        locs[i] = new Microsoft.Maps.Location(pushpinInfos[i].lat, pushpinInfos[i].lng);
        var pin = new Microsoft.Maps.Pushpin(locs[i]);
        pin.Title = pushpinInfos[i].title;
        pin.Description = pushpinInfos[i].description;
        pinLayer.push(pin); 
        Microsoft.Maps.Events.addHandler(pin, 'click', displayInfobox);
    }

    map.entities.push(pinLayer);
    map.entities.push(infoboxLayer);

    var bestview = Microsoft.Maps.LocationRect.fromLocations(locs);
    map.setView({ center: bestview.center, zoom: 8 });
}

function displayInfobox(e) {
    pinInfobox.setOptions({ title: e.target.Title, description: e.target.Description, visible: true, offset: new Microsoft.Maps.Point(0, 25) });
    pinInfobox.setLocation(e.target.getLocation());
}

function hideInfobox(e) {
    pinInfobox.setOptions({ visible: false });
}*/

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

