function drawTree (sizeTree) {
    for (let i = 1; i <= sizeTree; i++) { //zaczynam od 1 zęby wyświetliło tyle wierszy ile podaje parametr "sizeTree", jężeli zacznę od 0 to choinka będzie o jeden wiersz(pierwszy pusty) większa.
        let star = ''; //zmienna do przechowywania gwiazdek
        for (let k = sizeTree; k > i; k--) {
            star += ' ';
        }
        for (let j = 0; j < i; j++) { //pętla wykonuje się tyle razy ile jest wierszy. W pierwszym wykonaniu i = 1 a j = 0 więc zmienna "star" otryzzyma gwiazdkę, w kolejnym wykonaniu pętli i = 2 a j = 1 wiec zimenna "star" otrzyma gwiazdę będzie miała ich już 2 itd
            star += '*';
        }
        for (let l = 1; l < i; l++) {
            star += '*';
        }
        console.log(star); //wyświetla zmienną "star" z aktualną liczbą gwiazdek w danym wykonaniu głównej pętli
    }
}

drawTree(10);