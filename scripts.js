let Inputti = document.getElementById('Kentta');
let Nappi = document.getElementsByName('nappi')[0];
let Kontaineri = document.getElementById('todoot');

window.onload = function(){
    // localStorage.clear();
    console.log(localStorage);
    haeStoragesta();
};

// Haetaan localstoragesta todo-asioita
function haeStoragesta() {
    for (let i = 0; i < localStorage.length; i++){
        let p = document.createElement('p');
        p.textContent = localStorage[i];
        annaEventit(p);
        Kontaineri.appendChild(p);
    }
}

// Lisätään uusi todo-asia, annetaan sille sisältö ja eventit
Nappi.addEventListener("click", function(){
    let inp = Inputti.value.trim();
    if(inp.length > 2) {
        let p = document.createElement('p');
        p.textContent = Inputti.value;
        Kontaineri.appendChild(p);
        Inputti.value = "";     // Tyhjennetään input-kenttä
        annaEventit(p);
        lisaaStorageen();
    }
});

// Annetaan todo-asioille eventit klikkaamista ja tuplaklikkaamista varten
function annaEventit(p) {
    p.addEventListener('click', function(){
        p.style.textDecoration = "line-through";    // Klikkaamalla saa todo-asian yliviivattua, eli merkitty tehdyksi
    });
    p.addEventListener('dblclick', function(){
        Kontaineri.removeChild(p);          // Tuplaklikkaamalla saadaan todo-asia poistettua
        for (let i = 0; i < localStorage.length; i++){
            if(localStorage[i] == p.textContent){   // Poistetaan kyseinen todo-asia myös localstoragesta
                localStorage.removeItem(i);
                console.log(localStorage);
            }
        }
    });
}

// Lisätään todo-asiat localstorageen 
function lisaaStorageen() {
    for (i = 0; i < Kontaineri.childElementCount; i++){
        localStorage.setItem(i, Kontaineri.children[i].textContent);
    }
    console.log(localStorage);
}