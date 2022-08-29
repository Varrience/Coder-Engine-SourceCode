function CameraMovement(direction, CamSpeed, directionStart, directionEnd) {

    ResetCam();

    var camera = camera;

    if (Settings.CameraMovement == true) {
        if (direction == "x") {
            var Start = setInterval(function() {
                if (directionEnd > directionStart) {
                    camera.x += CamSpeed;

                leftarrow.x += CamSpeed;
                downarrow.x += CamSpeed;
                uparrow.x += CamSpeed;
                rightarrow.x += CamSpeed;

                for (var lncam = 0; lncam < 15; lncam++) {
                    var gimmeleftnote = lphgroup.get(lncam);
                    
                    if (gimmeleftnote) {
                        gimmeleftnote.x += CamSpeed;
                    } else {
                        continue;
                    }
                }

                for (var dncam = 0; dncam < 15; dncam++) {
                    var gimmedownnote = dphgroup.get(dncam);
                    
                    if (gimmedownnote) {
                        gimmedownnote.x += CamSpeed;
                    } else {
                        continue;
                    }
                }

                for (var uncam = 0; uncam < 15; uncam++) {
                    var gimmeupnote = uphgroup.get(uncam);
                    
                    if (gimmeupnote) {
                        gimmeupnote.x += CamSpeed;
                    } else {
                        continue;
                    }
                }


                for (var rncam = 0; rncam < 15; rncam++) {
                    var gimmerightnote = rphgroup.get(rncam);
                    
                    if (gimmerightnote) {
                        gimmerightnote.x += CamSpeed;
                    } else {
                        continue;
                    }
                }
                } else if (directionEnd < directionStart) {
                    camera.x -= CamSpeed;
                
                leftarrow.x -= CamSpeed;
                downarrow.x -= CamSpeed;
                uparrow.x -= CamSpeed;
                rightarrow.x -= CamSpeed;
                
                for (var lncam = 0; lncam < 15; lncam++) {
                    var gimmeleftnote = lphgroup.get(lncam);
                    
                    if (gimmeleftnote) {
                        gimmeleftnote.x -= CamSpeed;
                    } else {
                        continue;
                    }
                }
                
                for (var dncam = 0; dncam < 15; dncam++) {
                    var gimmedownnote = dphgroup.get(dncam);
                    
                    if (gimmedownnote) {
                        gimmedownnote.x -= CamSpeed;
                    } else {
                        continue;
                    }
                }
                
                for (var uncam = 0; uncam < 15; uncam++) {
                    var gimmeupnote = uphgroup.get(uncam);
                    
                    if (gimmeupnote) {
                        gimmeupnote.x -= CamSpeed;
                    } else {
                        continue;
                    }
                }
                
                
                for (var rncam = 0; rncam < 15; rncam++) {
                    var gimmerightnote = rphgroup.get(rncam);
                    
                    if (gimmerightnote) {
                        gimmerightnote.x -= CamSpeed;
                    } else {
                        continue;
                    }
                }
                }

                    if (Math.round(camera.x) == directionEnd) {
                        stopInterval(Start);
                        camera.x == directionEnd
                    }

            }, 50)
        } else if (direction == "y") {
            var Start = setInterval(function() {
                if (directionEnd > directionStart) {
                    camera.y += CamSpeed;
        
                leftarrow.y += CamSpeed;
                downarrow.y += CamSpeed;
                uparrow.y += CamSpeed;
                rightarrow.y += CamSpeed;
        
                for (var lncaam = 0; lncaam < 15; lncaam++) {
                    var gimmmeleftnote = lphgroup.get(lncaam);
                    
                    if (gimmmeleftnote) {
                        gimmmeleftnote.y += CamSpeed;
                    } else {
                        continue;
                    }
                }
        
                for (var dncaam = 0; dncaam < 15; dncaam++) {
                    var gimmmedownnote = dphgroup.get(dncaam);
                    
                    if (gimmmedownnote) {
                        gimmmedownnote.y += CamSpeed;
                    } else {
                        continue;
                    }
                }
        
                for (var uncaam = 0; uncaam < 15; uncaam++) {
                    var gimmmeupnote = uphgroup.get(uncaam);
                    
                    if (gimmmeupnote) {
                        gimmmeupnote.y += CamSpeed;
                    } else {
                        continue;
                    }
                }
        
        
                for (var rncaam = 0; rncaam < 15; rncaam++) {
                    var gimmmerightnote = rphgroup.get(rncaam);
                    
                    if (gimmmerightnote) {
                        gimmmerightnote.y += CamSpeed;
                    } else {
                        continue;
                    }
                }
                } else if (directionEnd < directionStart) {
                    camera.y -= CamSpeed;
                
                leftarrow.y -= CamSpeed;
                downarrow.y -= CamSpeed;
                uparrow.y -= CamSpeed;
                rightarrow.y -= CamSpeed;
                
                for (var lncaam2 = 0; lncaam2 < 15; lncaam2++) {
                    var gimmmeleftnote2 = lphgroup.get(lncaam2);
                    
                    if (gimmmeleftnote2) {
                        gimmmeleftnote2.y -= CamSpeed;
                    } else {
                        continue;
                    }
                }
                
                for (var dncaam2 = 0; dncaam2 < 15; dncaam2++) {
                    var gimmmedownnote2 = dphgroup.get(dncaam2);
                    
                    if (gimmmedownnote2) {
                        gimmmedownnote2.y -= CamSpeed;
                    } else {
                        continue;
                    }
                }
                
                for (var uncaam2 = 0; uncaam2 < 15; uncaam2++) {
                    var gimmmeupnote2 = uphgroup.get(uncaam2);
                    
                    if (gimmmeupnote2) {
                        gimmmeupnote2.y -= CamSpeed;
                    } else {
                        continue;
                    }
                }
                
                
                for (var rncaam2 = 0; rncaam2 < 15; rncaam2++) {
                    var gimmmerightnote2 = rphgroup.get(rncaam2);
                    
                    if (gimmmerightnote2) {
                        gimmmerightnote2.y -= CamSpeed;
                    } else {
                        continue;
                    }
                }
                }
        
                    if (Math.round(camera.y) == directionEnd) {
                        clearInterval(Start);
                        camera.y == directionEnd;
                    }
        
            }, 50);
        }
    }
}