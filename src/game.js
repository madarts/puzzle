// FUNCIONES DEL JUEGO //
	function rand(l,u){
		return Math.floor((Math.random() * (u-l+1))+l);
	}

// PARAMETROS DEL JUEGO //
	var juegoIniciado 	= 1;
	var modoJuego 		= 1;
	var version 		= '1.1 Alfa';
	var pantalla		= Array(0,0);

$(window).addEvent('keydown',function(event){
	if(juegoIniciado == 2){
		keyPress = event.key;
		
		
	}
});


$(window).addEvent('load',function(){
	ctx = document.getElementById('canvas').getContext('2d');

	x = document.getElementById('canvas').width;
	y = document.getElementById('canvas').height;

	juegoIniciado = 2;

	
	
	// 1º FUNCION PARA GENERAR LA PANTALLA PRINCIPAL //
		var mainMenu = Function.from(function(){
			ctx.shadowOffsetX 	= 0;
			ctx.shadowOffsetY 	= 1;
			ctx.shadowBlur 		= 5;
			ctx.shadowColor 	= "rgba(0, 0, 0, 0.6)";
			
				ctx.lineWidth = 10;
				ctx.font = "50px comic sans ms";
				ctx.strokeStyle = "#fff";
				ctx.strokeText("PUZZLE GAME", 230, 56);
				
			ctx.shadowOffsetX 	= 0;
			ctx.shadowOffsetY 	= 0;
			ctx.shadowBlur 		= 0;
				
				
			ctx.font = "50px comic sans ms";
			ctx.fillStyle = "#36393D";
			ctx.fillText("PUZZLE GAME", 230, 56);
			
			
			ctx.font = "14px arial";
			ctx.fillStyle = "#fff";
			ctx.fillText("version "+ version, x-110, y-14);
			
			ctx.font = "14px arial";
			ctx.fillStyle = "#73880A";
			ctx.fillText("version "+ version, x-110, y-15);
		});
	// 1º FINAL FUNCION PARA GENERAR LA PANTALLA PRINCIPAL //
	
	
	// 2º FUNCION PARA GENERAR EL MENU DE NIVELES //
		var menOpacity = Array(0.3,0.3,0.3);
		var levelMenu = Function.from(function(){
			ctx.font = "30px lucida sans unicode";
			ctx.fillStyle = "#36393D";
			ctx.fillText("EASY", 20, 125);
				ctx.font = "12px lucida sans unicode";
				ctx.fillStyle = "#73880A";
				ctx.fillText("3x3 ("+ levelEasy.length +" niveles)", 95, 125);
					ctx.fillStyle = "rgba(115,136,10,"+ menOpacity[0] +")";
					ctx.fillRect(0, 130, x, 85);
			
			ctx.font = "30px lucida sans unicode";
			ctx.fillStyle = "#36393D";
			ctx.fillText("MEDIUM", 20, 270);
			ctx.font = "12px lucida sans unicode";
				ctx.fillStyle = "#73880A";
				ctx.fillText("6x6 ("+ levelMedium.length +" niveles)", 145, 270);
					ctx.fillStyle = "rgba(115,136,10,"+ menOpacity[1] +")";
					ctx.fillRect(0, 275, x, 85);
			
			ctx.font = "30px lucida sans unicode";
			ctx.fillStyle = "#36393D";
			ctx.fillText("HARD", 20, 415);
				ctx.fillStyle = "#73880A";
				ctx.font = "12px lucida sans unicode";
				ctx.fillText("9x9 ("+ levelHard.length +" niveles)", 110, 415);
					ctx.fillStyle = "rgba(115,136,10,"+ menOpacity[2] +")";
					ctx.fillRect(0, 420, x, 85);
		});
	// 2º FINAL FUNCION PARA GENERAR EL MENU DE NIVELES //
	
	
	// 3º FUNCION PARA GENERAR LAS DIAPOSITIVAS DE LOS NIVELES //
		var levelEasy 			= Array(Array(1,1,2,1),
										Array(2,1,1,1),
										Array(3,1,1,1),
										Array(4,1,1,1),
										Array(5,1,1,1),
										Array(6,1,1,1),
										Array(7,1,1,1),
										Array(8,1,1,1),
										Array(9,1,1,1),
										Array(10,1,1,1));
			var levelEasyX 		= 0;
		var levelMedium 		= Array(Array(1,1,2,1),
										Array(2,1,1,1),
										Array(3,1,1,1),
										Array(4,1,1,1),
										Array(5,1,1,1),
										Array(6,1,1,1),
										Array(7,1,1,1),
										Array(8,1,1,1),
										Array(9,1,1,1),
										Array(10,1,1,1));
			var levelMediumX 	= 0;
		var levelHard 			= Array(Array(1,1,2,1),
										Array(2,1,1,1),
										Array(3,1,1,1),
										Array(4,1,1,1),
										Array(5,1,1,1),
										Array(6,1,1,1),
										Array(7,1,1,1),
										Array(8,1,1,1));
			var levelHardX 		= 0;
		var levelBox = Function.from(function(){
			ctx.fillStyle = "#B02B2C";
			ctx.fillRect(levelEasyX-10, 130, 5, 85);
			for(i=0;i<levelEasy.length;i++){
				if(levelEasy[i][2] == 1) ctx.fillStyle = "rgba(54,57,61,0.3)";
				if(levelEasy[i][2] == 2) ctx.fillStyle = "rgba(54,57,61,0.6)";
				if(levelEasy[i][1] == 2) ctx.fillStyle = "rgba(54,57,61,1)";
				
				ctx.fillRect(levelEasyX+10+(i*110), 140, 100, 65);
				
				if(levelEasy[i][2] == 1){
					var img = new Image();
					img.src = 'images/candado.png';
					ctx.drawImage(img,levelEasyX+35+(i*110), 147);
				}
				if(levelEasy[i][3] == 2){
					var img = new Image();
					img.src = 'images/complete.png';
					ctx.drawImage(img,levelEasyX+44+(i*110), 160);
				}
				
				ctx.font = "12px lucida sans unicode";
				ctx.fillStyle = "#fff";
				if(i < 9) ctx.fillText(i+1, levelEasyX+98+(i*110), 153);
				else ctx.fillText(i+1, levelEasyX+90+(i*110), 153);
			}
			ctx.fillStyle = "#B02B2C";
			ctx.fillRect(levelEasyX+(levelEasy.length*110)+15, 130, 5, 85);
			
			
			ctx.fillStyle = "#B02B2C";
			ctx.fillRect(levelMediumX-10, 275, 5, 85);
			for(i=0;i<levelMedium.length;i++){
				if(levelMedium[i][2] == 1) ctx.fillStyle = "rgba(54,57,61,0.3)";
				if(levelMedium[i][2] == 2) ctx.fillStyle = "rgba(54,57,61,0.6)";
				if(levelMedium[i][1] == 2) ctx.fillStyle = "rgba(54,57,61,1)";
				
				ctx.fillRect(levelMediumX+10+(i*110), 285, 100, 65);
				
				if(levelMedium[i][2] == 1){
					var img = new Image();
					img.src = 'images/candado.png';
					ctx.drawImage(img,levelMediumX+35+(i*110), 289);
				}
				
				ctx.font = "12px lucida sans unicode";
				ctx.fillStyle = "#fff";
				if(i < 9) ctx.fillText(i+1, levelMediumX+98+(i*110), 298);
				else ctx.fillText(i+1, levelMediumX+90+(i*110), 298);
			}
			ctx.fillStyle = "#B02B2C";
			ctx.fillRect(levelMediumX+(levelMedium.length*110)+15, 275, 5, 85);
			
			
			ctx.fillStyle = "#B02B2C";
			ctx.fillRect(levelHardX-10, 420, 5, 85);
			for(i=0;i<levelHard.length;i++){
				if(levelHard[i][2] == 1) ctx.fillStyle = "rgba(54,57,61,0.3)";
				if(levelHard[i][2] == 2) ctx.fillStyle = "rgba(54,57,61,0.6)";
				if(levelHard[i][1] == 2) ctx.fillStyle = "rgba(54,57,61,1)";
				
				ctx.fillRect(levelHardX+10+(i*110), 430, 100, 65);
				
				if(levelHard[i][2] == 1){
					var img = new Image();
					img.src = 'images/candado.png';
					ctx.drawImage(img,levelHardX+35+(i*110), 434);
				}
				
				ctx.font = "12px lucida sans unicode";
				ctx.fillStyle = "#fff";
				if(i < 9) ctx.fillText(i+1, levelHardX+98+(i*110), 443);
				else ctx.fillText(i+1, levelHardX+90+(i*110), 443);
			}
			ctx.fillStyle = "#B02B2C";
			ctx.fillRect(levelHardX+(levelHard.length*110)+15, 420, 5, 85);
		});
	// 3º FUNCION PARA GENERAR LAS DIAPOSITIVAS DE LOS NIVELES //
	
	
	// 4º FUNCION PARA MOVER LOS NIVELES //
		var levelMove = Function.from(function(){
			if(active[0] == 2 && levelEasy.length > 7){
				if(userPosX > mouseX) levelEasyX -= (mouseX-userPosX)/10;
				if(userPosX < mouseX) levelEasyX += (userPosX-mouseX)/10;
				
				if(levelEasyX > 0) levelEasyX = 10;

				if(levelEasyX < (800-(levelEasy.length*110)-10)) levelEasyX = (800-(levelEasy.length*110)-10)-10;

			}
			
			if(active[1] == 2 && levelMedium.length > 7){
				if(userPosX > mouseX) levelMediumX -= (mouseX-userPosX)/10;
				if(userPosX < mouseX) levelMediumX += (userPosX-mouseX)/10;
				
				if(levelMediumX > 0) levelMediumX = 10;

				if(levelMediumX < (800-(levelMedium.length*110)-10)) levelMediumX = (800-(levelMedium.length*110)-10)-10;

			}
			
			if(active[2] == 2 && levelHard.length > 7){
				if(userPosX > mouseX) levelHardX -= (mouseX-userPosX)/10;
				if(userPosX < mouseX) levelHardX += (userPosX-mouseX)/10;
				
				if(levelHardX > 0) levelHardX = 10;

				if(levelHardX < (800-(levelHard.length*110)-10)) levelHardX = (800-(levelHard.length*110)-10)-10;

			}
		});
	// 4º FINAL FUNCION PARA MOVER LOS NIVELES //
	
	// 5º FUNCION PARA GENERAR EL BOTON PARA VOLVER AL MENU PRINCIPAL //
		var btnVolverMouse = 1;
		var volverBtn = Function.from(function(){
			if(btnVolverMouse == 2){
				ctx.shadowOffsetX 	= 0;
				ctx.shadowOffsetY 	= 1;
				ctx.shadowBlur 		= 5;
				ctx.shadowColor 	= "rgba(0, 0, 0, 0.6)";
			}
				ctx.lineWidth = 5;
				ctx.font = "20px comic sans ms";
				ctx.strokeStyle = "#fff";
				ctx.strokeText("< volver", 22, 40);
			
			if(btnVolverMouse == 2){
				ctx.shadowOffsetX 	= 0;
				ctx.shadowOffsetY 	= 0;
				ctx.shadowBlur 		= 0;
			}
			
			ctx.font = "20px comic sans ms";
			ctx.fillStyle = "#36393D";
			ctx.fillText("< volver", 22, 40);
		});
	// 5º FINAL FUNCION PARA GENERAR EL BOTON PARA VOLVER AL MENU PRINCIPAL //
	
	
	
	

	
	// 6º FUNCION PARA GENERAR LOS MAPAS //
		var pos3x3  = Array(Array(1,'puzzle1x1'),
										  
							Array(2,'puzzle1x2'),
							
							Array(3,'puzzle1x3'));
		
		var pos3x3Piezas 	= Array();
		
		var pos6x6  = Array(Array(1,'puzzle2x1'),
										  
							Array(2,'puzzle2x2'),
							
							Array(3,'puzzle2x3'));
		
		var pos6x6Piezas 	= Array();
									
		var loadPuzzle = Function.from(function(){
			// FONDO DEL PUZZLE //
			switch(pantalla[0]){
				case 1: ctx.fillStyle = "#F9F7ED";
						ctx.fillRect(x/2-135, y/2-135+20, 270, 270);
						
						break;
						
				case 2: ctx.fillStyle = "#F9F7ED";
						ctx.fillRect(x/2-195, y/2-195+20, 390, 390);
						
						break;
						
				case 3: ctx.fillStyle = "#F9F7ED";
						ctx.fillRect(x/2-247, y/2-247+20, 495, 495);
						
						break;
			}
			
			
			
			
			
			if(pantalla[0] == 1){
				for(i=0;i<pos3x3Piezas.length;i++){
					for(e=0;e<pos3x3Piezas[i].length;e++){
						if(pos3x3Piezas[i][e][2] != 0){
							switch(pos3x3Piezas[i][e][2]){
								case 1: piezaName = 'pieza1x1'; break;
								case 2: piezaName = 'pieza1x2'; break;
								case 3: piezaName = 'pieza1x3'; break;
								
								case 4: piezaName = 'pieza2x1'; break;
								case 5: piezaName = 'pieza2x2'; break;
								case 6: piezaName = 'pieza2x3'; break;
								
								case 7: piezaName = 'pieza3x1'; break;
								case 8: piezaName = 'pieza3x2'; break;
								
								default: piezaName = ''; break;
							}
							
							var img = new Image();
							img.src = 'images/'+ pos3x3[pantalla[1]-1][1] +'/'+ piezaName +'.png';
							ctx.drawImage(img,pos3x3Piezas[i][e][0], pos3x3Piezas[i][e][1]);
							
							ctx.lineWidth = 0.5;
							ctx.strokeStyle = "rgba(0,0,0,0.4)";
							ctx.strokeRect(pos3x3Piezas[i][e][0], pos3x3Piezas[i][e][1], 90, 90);
						}
					}
				}
				
				var img = new Image();
				img.src = 'images/'+ pos3x3[pantalla[1]-1][1] +'/fondo.png';
				ctx.drawImage(img, x/2-135+270+15,y/2-135+20, 90,90);
			}
			
			if(pantalla[0] == 2){
				for(i=0;i<pos6x6Piezas.length;i++){
					for(e=0;e<pos6x6Piezas[i].length;e++){
						if(pos6x6Piezas[i][e] != 0){
							
						}
					}
				}
				
				var img = new Image();
				img.src = 'images/'+ pos6x6[pantalla[1]-1][1] +'/fondo.png';
				ctx.drawImage(img, x/2-135+270+15,y/2-135+20, 90,90);
			}
			

			
			
			
			
			
			
			
			
			
			
			
			// MARCO DEL PUZZLE //
			ctx.lineWidth = 4;
			switch(pantalla[0]){
				case 1: ctx.strokeStyle = "#36393D";
						ctx.strokeRect(x/2-135, y/2-135+20, 270, 270);
						
						ctx.lineWidth = 2;
						ctx.strokeStyle = "#36393D";
						ctx.strokeRect(x/2-135+270+15, y/2-135+20, 90, 90);
						
						break;
						
				case 2: ctx.strokeStyle = "#36393D";
						ctx.strokeRect(x/2-195, y/2-195+20, 390, 390);
						
						ctx.lineWidth = 2;
						ctx.strokeStyle = "#36393D";
						ctx.strokeRect(x/2-195+390+15, y/2-195+20, 90, 90);
						
						break;
						
				case 3: ctx.strokeStyle = "#36393D";
						ctx.strokeRect(x/2-247, y/2-247+20, 495, 495);
						
						ctx.lineWidth = 2;
						ctx.strokeStyle = "#36393D";
						ctx.strokeRect(x/2-247+495+15, y/2-247+20, 90, 90);
						
						break;
			}
		});
	// FINAL 6º FUNCION PARA GENERAR LOS MAPAS //
	
	
	
	// 7º FUNCION PARA CONTROLAR SI EL PUZZLE SE A REALIZADO //
		var checkPuzzle = Function.from(function(){
			if(pantalla[0] == 1){
				puzzleFinish = Array(1,1,1,1,1,1,1,1);
				
				sum = 0;
				for(i=0;i<pos3x3Piezas.length;i++){
					for(e=0;e<pos3x3Piezas[i].length;e++){
						sum += 1;
						
						
						if(pos3x3Piezas[i][e][2] == sum) puzzleFinish[sum-1] = 2;
					}
				}
				
				finish = 1;
				for(i=0;i<puzzleFinish.length;i++){
					if(puzzleFinish[i] == 1) finish = 2;
				}
				
				
				if(finish == 1){
					switch(pantalla[0]){
						case 1: levelEasy[pantalla[1]][2] = 2; levelEasy[pantalla[1]-1][3] = 2;  break;
					}
					
					modoJuego = 3;
				}
			}
			if(pantalla[0] == 2){
				puzzleFinish = Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
				
				sum = 0;
				for(i=0;i<pos6x6Piezas.length;i++){
					for(e=0;e<pos6x6Piezas[i].length;e++){
						sum += 1;
						
						if(pos6x6Piezas[i][e][2] == sum){ puzzleFinish[sum-1] = 2; }
						
					}
				}
				
				finish = 1;
				for(i=0;i<puzzleFinish.length;i++){
					if(puzzleFinish[i] == 1) finish = 2;
				}
				
				
				if(finish == 1){
					switch(pantalla[0]){
						case 1: levelMedium[pantalla[1]][2] = 2; levelMedium[pantalla[1]-1][3] = 2;  break;
					}
					
					modoJuego = 3;
				}
			}
			
			
		});
	// 7º FINAL FUNCION CONTROLAR SI EL PUZZLE SE A REALIZADO //
	
	
	// 8º FUNCION PARA GENERAR LA PANTALLA DE SIGUIENTE NIVEL //
		var backNext = Array(1,1,1);
		var nextPuzzle = Function.from(function(){
			ctx.fillStyle = "#fff";
			ctx.fillRect(x/2-200, y/2-100, 400, 200);
			
			ctx.lineWidth = 8;
			ctx.strokeStyle = "rgba(63,76,107,0.5)";
			ctx.strokeRect(x/2-204, y/2-104, 408, 208);
						
			ctx.font = "35px lucida sans unicode";
			ctx.fillStyle = "#3F4C6B";
			ctx.fillText("Siguiente PUZZLE", x/2-185, y/2-60);
			
				
			for(i=0;i<backNext.length;i++){
				ctx.lineWidth = 2;
				switch(backNext[i]){
					case 1: ctx.strokeStyle = "rgba(63,76,107,0.1)"; break;
					case 2: ctx.strokeStyle = "rgba(63,76,107,0.8)"; break;
				}
				
				ctx.strokeRect(x/2-200+10+(i*130), y/2-40, 120, 125);
	
				ctx.font = "15px lucida sans unicode";
				ctx.fillStyle = "#3F4C6B";
				
				switch(i+1){
					case 1: txtNext = 'Siguiente'; break;
					case 2: txtNext = 'Menu Principal'; break;
					case 3: txtNext = 'Repetir'; break;
				}
				
				ctx.fillText(txtNext, x/2-200+10+(i*130)+4, y/2-23);
			}

		});
	// 8º FINAL FUNCION PARA GENERAR LA PANTALLA DE SIGUIENTE NIVEL //
	
	
	// 9º FUNCION PARA CONTROLAR EL AUDIO //
		var audioStat = 1;
		var colorBTN = Array('green', 'red');
		var musicControl = Function.from(function(){
			
			ctx.fillStyle = colorBTN[audioStat-1];
			ctx.fillRect(x-35, 10, 25, 25);
		});
	// 9º FINAL FUNCION PARA CONTROLAR EL AUDIO //
	
	
	// 10º FUNCION PARA DESORDENAR LOS PUZZLES //
		var mezclaPuzzle = Function.from(function(){
			sum = 1;
			posIni = Array(pos3x3Piezas.length-1,pos3x3Piezas[0].length-1);
			for(i=0;i<sum;i++){
				newDats = Array(rand(0,2),rand(0,2));
				
				datos = pos3x3Piezas[newDats[0]][newDats[1]][2];
				pos3x3Piezas[newDats[0]][newDats[1]][2] = pos3x3Piezas[posIni[0]][posIni[1]][2];
				pos3x3Piezas[posIni[0]][posIni[1]][2] = datos;
				
				posIni = Array(newDats[0],newDats[1]);
			}
			pantalla[1] += 1;
			modoJuego = 2;
		});
	// 10º FINAL FUNCION PARA DESORDENAR LOS PUZZLE //
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// 95º CONTROLES PARA ACCIONES DEL CLICK DEL RATON //
		$('canvas').addEvent('click', function(event){
			userX = event.page.x - event.target.getPosition().x;
			userY = event.page.y - event.target.getPosition().y;
			
			switch(modoJuego){
				// 1 MENU PRINCIPAL //
				case 1: if(mouseX == userX){
							for(i=0;i<levelEasy.length;i++){
								recX = levelEasyX+10;
								recY = 140;
								
								if(userX > recX+(i*110) && userX < recX+(i*110)+100 && userY > recY && userY < recY+65 && levelEasy[i][2] == 2){
									pantalla = Array(1,i+1);
									
									pos3x3Piezas 	= Array(Array(Array(x/2-135+(0*90),y/2-135+20+(0*90), 1,1),Array(x/2-135+(1*90),y/2-135+20+(0*90), 2,1),Array(x/2-135+(2*90),y/2-135+20+(0*90), 3,1)),
															Array(Array(x/2-135+(0*90),y/2-135+20+(1*90), 4,1),Array(x/2-135+(1*90),y/2-135+20+(1*90), 5,1),Array(x/2-135+(2*90),y/2-135+20+(1*90), 6,1)),
															Array(Array(x/2-135+(0*90),y/2-135+20+(2*90), 7,1),Array(x/2-135+(1*90),y/2-135+20+(2*90), 8,1),Array(x/2-135+(2*90),y/2-135+20+(2*90), 0,1)));
									
									sum = 1;
									posIni = Array(pos3x3Piezas.length-1,pos3x3Piezas[0].length-1);
									for(i=0;i<sum;i++){
										newDats = Array(rand(0,2),rand(0,2));
										
										datos = pos3x3Piezas[newDats[0]][newDats[1]][2];
										pos3x3Piezas[newDats[0]][newDats[1]][2] = pos3x3Piezas[posIni[0]][posIni[1]][2];
										pos3x3Piezas[posIni[0]][posIni[1]][2] = datos;
										
										posIni = Array(newDats[0],newDats[1]);
									}
									
									modoJuego = 2;
								}
							}
							
							for(i=0;i<levelMedium.length;i++){
								recX = levelMediumX+10;
								recY = 285;
								
								if(userX > recX+(i*110) && userX < recX+(i*110)+100 && userY > recY && userY < recY+65 && levelMedium[i][2] == 2){
									pantalla = Array(2,i+1);
									
									
									modoJuego = 2;
								}
							}
							
							for(i=0;i<levelHard.length;i++){
								recX = levelHardX+10;
								recY = 430;
								
								if(userX > recX+(i*110) && userX < recX+(i*110)+100 && userY > recY && userY < recY+65 && levelHard[i][2] == 2){
									pantalla = Array(3,i+1);
									
									modoJuego = 2;
								}
							}
						}
						
						
						if(userX >= x-35 && userX <= x-10 && userY >= 10 && userY <= 35){
							if(audioStat == 1){
								$('audioId').volume = 0;
								audioStat = 2;
							}
							else{
								$('audioId').volume = 1;
								audioStat = 1;
							}
						}
						
						
						break;
						
				// 2 PANTALLA PUZZLE //
				case 2: if(userX >= 22 && userX <= 90 && userY >= 20 && userY <= 45){
							pantalla = Array(0,0);
							modoJuego = 1;
						}
						
						if(pantalla[0] == 1){
							for(i=0;i<pos3x3Piezas.length;i++){
								for(e=0;e<pos3x3Piezas[i].length;e++){
									if(pos3x3Piezas[i][e][2] != 0){
										if(userX >= pos3x3Piezas[i][e][0] && userX <= pos3x3Piezas[i][e][0]+90 &&userY >= pos3x3Piezas[i][e][1] && userY <= pos3x3Piezas[i][e][1]+90){
											if(i > 0){
												if(pos3x3Piezas[i-1][e][2] == 0){
													pos3x3Piezas[i-1][e][2] = pos3x3Piezas[i][e][2];
													pos3x3Piezas[i][e][2] = 0;
													
													break;
												}
											}
											if(i < pos3x3Piezas.length-1){
												if(pos3x3Piezas[i+1][e][2] == 0){
													pos3x3Piezas[i+1][e][2] = pos3x3Piezas[i][e][2];
													pos3x3Piezas[i][e][2] = 0;
													
													break;
												}
											}
											if(e > 0){
												if(pos3x3Piezas[i][e-1][2] == 0){
													pos3x3Piezas[i][e-1][2] = pos3x3Piezas[i][e][2];
													pos3x3Piezas[i][e][2] = 0;
													
													break;
												}
											}
											if(e < pos3x3Piezas[i].length-1){
												if(pos3x3Piezas[i][e+1][2] == 0){
													pos3x3Piezas[i][e+1][2] = pos3x3Piezas[i][e][2];
													pos3x3Piezas[i][e][2] = 0;
													
													break;
												}
											}
											
										}
									}
								}
							}
						}
						if(pantalla[0] == 2){
							for(i=0;i<pos6x6Piezas.length;i++){
								for(e=0;e<pos6x6Piezas[i].length;e++){
									if(pos6x6Piezas[i][e] != 0){
										if(userX >= pos6x6Piezas[i][e][0] && userX <= pos6x6Piezas[i][e][0]+90 &&userY >= pos6x6Piezas[i][e][1] && userY <= pos6x6Piezas[i][e][1]+90){
											if(i > 0){
												if(pos6x6Piezas[i-1][e] == 0){
													pos6x6Piezas[i-1][e] = Array(pos6x6Piezas[i][e][0],pos6x6Piezas[i][e][1]-90,pos6x6Piezas[i][e][2],pos6x6Piezas[i][e][3]);
													pos6x6Piezas[i][e] = 0;
													
													break;
												}
											}
											if(i < 5){
												if(pos6x6Piezas[i+1][e] == 0){
													pos6x6Piezas[i+1][e] = Array(pos6x6Piezas[i][e][0],pos6x6Piezas[i][e][1]+90,pos6x6Piezas[i][e][2],pos6x6Piezas[i][e][3]);
													pos6x6Piezas[i][e] = 0;
													
													break;
												}
											}
											if(e > 0){
												if(pos6x6Piezas[i][e-1] == 0){
													pos6x6Piezas[i][e-1] = Array(pos6x6Piezas[i][e][0]-90,pos6x6Piezas[i][e][1],pos6x6Piezas[i][e][2],pos6x6Piezas[i][e][3]);
													pos6x6Piezas[i][e] = 0;
													
													break;
												}
											}
											if(e < 5){
												if(pos6x6Piezas[i][e+1] == 0){
													pos6x6Piezas[i][e+1] = Array(pos6x6Piezas[i][e][0]+90,pos6x6Piezas[i][e][1],pos6x6Piezas[i][e][2],pos6x6Piezas[i][e][3]);
													pos6x6Piezas[i][e] = 0;
													
													break;
												}
											}
											
										}
									}
								}
							}
						}
						
						break;
				
				// 3 PANTALLA SIGUIENTE NIVEL //
				case 3: btnClicked = 0;
						
						for(i=0;i<backNext.length;i++){
							if(userX >= x/2-200+10+(i*130) && userX <= x/2-200+10+(i*130)+120 && userY >= y/2-40 && userY <= y/2-40+125) btnClicked = i+1;
						}
						
						switch(btnClicked){
							case 1: mezclaPuzzle(); break;
							case 2: modoJuego = 1; break;
							case 3: break;
						}
						
						break;
			}
		});
	// 95º CONTROLES PARA ACCIONES DEL CLICK DEL RATON //
	
	// 96º CONTROLES PARA ACCIONES CUANDO EL RATON SALE DEL CANVAS //
		$('canvas').addEvent('mouseout', function(event){
			userX = event.page.x - event.target.getPosition().x;
			userY = event.page.y - event.target.getPosition().y;
			
			switch(modoJuego){
				// 1 MENU PRINCIPAL //
				case 1: active = Array(1,1,1);
						
						break;
			}
		});
	// 96º CONTROLES PARA ACCIONES CUANDO EL RATON SALE DEL CANVAS //
	
	// 97º CONTROLES PARA ACCIONES MIENTRAS SE LEVANTA EL BOTON CLICK //
		$('canvas').addEvent('mouseup', function(event){
			userX = event.page.x - event.target.getPosition().x;
			userY = event.page.y - event.target.getPosition().y;
			
			switch(modoJuego){
				// 1 MENU PRINCIPAL //
				case 1: active = Array(1,1,1);
						
						break;
			}
		});
	// 97º FINAL CONTROLES PARA ACCIONES MIENTRAS SE LEVANTA EL BOTON CLICK //
	
	// 97º CONTROLES PARA ACCIONES MIENTRAS SE MANTIENE EL BOTON CLICK PULSADO //
		var active 		= Array(1,1,1);
		var mouseX 		= 0;
		$('canvas').addEvent('mousedown', function(event){
			userX = event.page.x - event.target.getPosition().x;
			userY = event.page.y - event.target.getPosition().y;
			
			switch(modoJuego){
				// 1 MENU PRINCIPAL //
				case 1: for(i=0;i<3;i++){
							if(userY >= 130+(i*145) && userY <= 130+85+(i*145)){
								switch(i){
									case 0: active = Array(2,1,1); break;
									case 1: active = Array(1,2,1); break;
									case 2: active = Array(1,1,2); break;
								}
								
								mouseX = userX;
								
								break;
							}
						}
						
						break;
			}
		});
	// 97º FINAL CONTROLES PARA ACCIONES MIENTRAS SE MANTIENE EL BOTON CLICK PULSADO //
	
	// 98º CONTROLES PARA ACCIONES DE MOVIMIENTO DEL RATON //
		var userPosX = 0;
		$('canvas').addEvent('mousemove', function(event){
			userX = event.page.x - event.target.getPosition().x;
			userY = event.page.y - event.target.getPosition().y;
			
			switch(modoJuego){
				// 1 MENU PRINCIPAL //
				case 1: for(i=0;i<3;i++){
							if(userY >= 130+(i*145) && userY <= 130+85+(i*145)){
								switch(i){
									case 0: menOpacity = Array(0.4,0.2,0.2); break;
									case 1: menOpacity = Array(0.2,0.4,0.2); break;
									case 2: menOpacity = Array(0.2,0.2,0.4); break;
								}
								$('canvas').setStyle('cursor', 'pointer');
								
								break;
							}
							else{
								$('canvas').setStyle('cursor', 'default');
								menOpacity = Array(0.2,0.2,0.2);
							}
						}
						
						userPosX = userX;
						
						
						
						for(i=0;i<levelEasy.length;i++){
							recX = levelEasyX+10;
							recY = 140;
							
							if(userX > recX+(i*110) && userX < recX+(i*110)+100 && userY > recY && userY < recY+65 && levelEasy[i][2] == 2){
								levelEasy[i][1] = 2;
							}
							else levelEasy[i][1] = 1;
						}
						
						for(i=0;i<levelMedium.length;i++){
							recX = levelMediumX+10;
							recY = 285;
							
							if(userX > recX+(i*110) && userX < recX+(i*110)+100 && userY > recY && userY < recY+65 && levelMedium[i][2] == 2){
								levelMedium[i][1] = 2;
							}
							else levelMedium[i][1] = 1;
						}
						
						for(i=0;i<levelHard.length;i++){
							recX = levelHardX+10;
							recY = 430;
							
							if(userX > recX+(i*110) && userX < recX+(i*110)+100 && userY > recY && userY < recY+65 && levelHard[i][2] == 2){
								levelHard[i][1] = 2;
							}
							else levelHard[i][1] = 1;
						}
						
						if(userX >= x-35 && userX <= x-10 && userY >= 10 && userY <= 35) $('canvas').setStyle('cursor', 'pointer');

						break;
						
				// 2 PANTALLA PUZZLE //
				case 2: if(userX >= 22 && userX <= 90 && userY >= 20 && userY <= 45) btnVolverMouse = 2;
						else btnVolverMouse = 1;
						
						break;
						
				// 3 PANTALLA SIGUIENTE NIVEL //
				case 3: for(i=0;i<backNext.length;i++){
							if(userX >= x/2-200+10+(i*130) && userX <= x/2-200+10+(i*130)+120 && userY >= y/2-40 && userY <= y/2-40+125) backNext[i] = 2;
							else backNext[i] = 1;
						}
			
						break;
			}
		});
	// 98º FINAL CONTROLES PARA ACCIONES DE MOVIMIENTO DEL RATON //
	
	// 99º RELOAD SCREEN //
		var maxfps = 60;
		var drawInterval = 1 / maxfps * 1000;
		
		var reloadGraph = Function.from(function(){
			ctx.clearRect (0,0, x,y); //limpiamos pantalla
			
			switch(modoJuego){
				// 1 MENU PRINCIPAL DEL JUEGO //
				case 1: mainMenu(); 
						levelMenu();
						levelBox();
						levelMove();
						musicControl();
						break;
				// 2 PANTALLA DEL PUZZLE //
				case 2: mainMenu();
						volverBtn();
						
						loadPuzzle();
						
						checkPuzzle();
						break;
				// 3 SIGUIENTE PANTALLA //
				case 3: mainMenu();
						volverBtn();
						
						loadPuzzle();
						
						nextPuzzle();
						
						break;
			}
			
		}).periodical(drawInterval);
	// 99º FINAL RELOAD SCREEN //
});