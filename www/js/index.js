"use strict";

var canCapture = false;

var phonegap = {};

phonegap.app = {
	
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        StatusBar.hide();
		FastClick.attach(document.body);
        
        canCapture = true;
    },

    takePhoto: function() {
        if (!canCapture) {
            alert('La camara aun no esta disponible');
        }

        navigator.camera.getPicture(phonegap.app.onPhotoDataSuccess, phonegap.app.onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.DATA_URL,
            sourceType: navigator.camera.PictureSourceType.CAMERA
        });
    },

    takePhotoByURI: function() {
        if (!canCapture) {
            alert('La camara aun no esta disponible');
        }

        navigator.camera.getPicture(phonegap.app.onPhotoURISuccess, phonegap.app.onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URL,
            sourceType: navigator.camera.PictureSourceType.CAMERA
        });
    },

    getPhotoFromLibrary: function() {
        if (!canCapture) {
            alert('La camara aun no esta disponible');
        }

        navigator.camera.getPicture(phonegap.app.onPhotoDataSuccess, phonegap.app.onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.DATA_URL,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        });
    },

    onPhotoDataSuccess: function(imageData) {
        $("#image_locator").prepend("<img src='data:image/jpeg;base64," + imageData + 
                                    "' style='display:block; width:90%;border:1px solid black;" +
                                    "margin:5%;box-shadow: 10px 10px 10px #888;-moz-box-shadow: 10px 10px 10px #888;" +
                                    "-webkit-box-shadow: 10px 10px 10px #888;'/>");
    },

    getPhotoFromLibraryByURI: function() {
        if (!canCapture) {
            alert('La camara aun no esta disponible');
        }

        navigator.camera.getPicture(phonegap.app.onPhotoURISuccess, phonegap.app.onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URL,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        });
    },

    onPhotoURISuccess: function(imageURI) {
        $("#image_locator").prepend("<img src='" + imageURI + "' style='display:block; width:90%;" +
                                    "border:1px solid black;margin:5%;box-shadow: 10px 10px 10px #888;" + 
                                    "-moz-box-shadow: 10px 10px 10px #888;-webkit-box-shadow: 10px 10px 10px #888;'/>");
    },

    onFail: function(message) {
        alert("Failed because: " + message);
    }

};
