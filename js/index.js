/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function loadHeader (id) {
    
}

function save() {
    var lecturaAnterior = document.getElementById("lecturaAnt").value;
    localStorage.setItem("LectAnt", lecturaAnterior);
    document.getElementById("lecturaAnt").value = "";
    window.location = "lectura1.html";
}

function saveLectura1() {
    var lecturaUno = document.getElementById("lectura1").value;
    localStorage.setItem("Lect1", lecturaUno);
    document.getElementById("lectura1").value = "";
    window.location = "lectura2.html";
}

function saveLectura2() {
    var lecturaDos = document.getElementById("lectura2").value;
    localStorage.setItem("Lect2", lecturaDos);
    document.getElementById("lectura2").value = "";
    window.location = "lectura3.html";
}

function saveLectura3() {
    var lecturaTres = document.getElementById("lectura3").value;
    localStorage.setItem("Lect3", lecturaTres);
    document.getElementById("lectura3").value = "";
    window.location = "lectura4.html";
}

function saveLectura4() {
    var lecturaCuatro = document.getElementById("lectura4").value;
    localStorage.setItem("Lect4", lecturaCuatro);
    document.getElementById("lectura4").value = "";
    window.location = "lectura5.html";
}

function saveLectura5() {
    var lecturaCinco = document.getElementById("lectura5").value;
    localStorage.setItem("Lect5", lecturaCinco);
    document.getElementById("lectura5").value = "";
    window.location = "resultado.html";
}

function resultado() {
    var lectAnte = localStorage.getItem("LectAnt");
    var lectUno = localStorage.getItem("Lect1");
    var lectDos = localStorage.getItem("Lect2");
    var lectTres = localStorage.getItem("Lect3");
    var lectCuatro = localStorage.getItem("Lect4");
    var lectCinco = localStorage.getItem("Lect5");
    
    var lectActual = parseInt(lectUno + lectDos + lectTres + lectCuatro + lectCinco);
    
    var kwh = lectActual - parseInt(lectAnte);
    
    document.getElementById('output').innerHTML = kwh;
}