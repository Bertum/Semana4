function bucle() {
    contextBackground.clearRect(0, 0, 1775, 825)
    contextInteractiveObjects.clearRect(0, 0, 1775, 825)
    contextHud.clearRect(0, 0, 1775, 825)
    contextBubblesNpc.clearRect(0, 0, 1775, 825)



    //Dibujar hud
    paintHud();
    
    //Dibujar bocadillo de texto
    paintBubble();
    


    clearTimeout(temporizador)
    temporizador = setTimeout("bucle()", 33);

}
