		document.addEventListener("click", (function () {
                  var divs = [];
                  var newdiv = document.createElement('div');

                  document.body.appendChild(newdiv);
                  newdiv.setAttribute('class', 'trafficLight');
                  newdiv.innerHTML = "<div class='light'></div>\
                  <div class='light'></div>\
                  <div class='light'></div>";
                  divs.push(newdiv);
                  function trafficlight(light){
            	// var light = document.getElementsByClassName('light');
            	light[0].style.background = 'red';
            	light[1].style.background = 'gray';
            	light[2].style.background = 'gray';
            	setTimeout(function () {
            		changeToYellow(light)
            	}, 2000);
            	setTimeout(function () {
            		changeToGreen(light)
            	}, 4000);
            }
            function changeToYellow (light){
            	console.log(light)
            	light[0].style.background = 'gray';
            	light[1].style.background = 'yellow';
            	light[2].style.background = 'gray';
            }
            function changeToGreen (light){
            	console.log(light)
            	light[0].style.background = 'gray';
            	light[1].style.background = 'gray';
            	light[2].style.background = 'green';
            }

            function restart() {
            	var lighter = document.getElementsByClassName('trafficLight');
            	for (i=0; i < lighter.length; i++) {
            		var light = lighter[i].getElementsByClassName('light');
            		trafficlight(light);
            	}
            }
            restart()
            setInterval(function(){
            	restart()
            }, 6000)
            
      }));