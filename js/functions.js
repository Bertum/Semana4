function paintHud() {
    
    contextHud.font = "30px Arial";

    contextHud.drawImage(imgHudCemento, 20, 0, 125, 75);
    contextHud.fillText("x 0", 150, 50);

    contextHud.drawImage(imgHudMadera, 220, 0, 125, 75);
    contextHud.fillText("x 0", 350, 50);

    contextHud.drawImage(imgHudLadrillos, 420, 0, 125, 75);
    contextHud.fillText("x 0", 550, 50);

    contextHud.drawImage(imgHudTela, 620, 0, 125, 75);
    contextHud.fillText("x 0", 750, 50);

    contextHud.drawImage(imgHudTacha, 820, 0, 125, 75);
    contextHud.fillText("x 0", 950, 50);
}

function paintBubble(){
    //bocadillo
    contextBubblesNpc.drawImage(imgBocadillo,0,625);
    contextBubblesNpc.font = "30px Arial";
    contextBubblesNpc.fillText("- O me construyes una buena piscina o voy a mojarme con el vecino, y te recuerdo que el tampoco tiene piscina",50,725)
    //Aqui deberiamos meter un boton continuar si sigue habiendo mas texto
    
}