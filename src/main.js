const gombok = document.querySelectorAll('.sorok div')
const kovetkezo_jatekos_kijelzo = document.querySelector('#kovetkezo_jatekos_kijelzo')
var kiKovetkezik = 'X'
var folyamatban = true
var lerakva = 0

var palya = [
    null, null, null,
    null, null, null,
    null, null
]


// Kattintás
kattintas_kezelo();

function kattintas_kezelo() {
    for (let i = 0; i < gombok.length; i++) {
        gombok[i].addEventListener('click', function(e) {
            e.preventDefault();
            if (folyamatban == true) {
                if (lerakva != 8) {
                    if (gombok[i].querySelector('h2') == null) {
                        lerakva++
                        palya[i] = kiKovetkezik
                        let kijelzo = document.createElement('h2')
                        kijelzo.setAttribute('class', kiKovetkezik)
                        kijelzo.innerText = kiKovetkezik
                        gombok[i].append(kijelzo)
                        kovetkezo_jatekos();
                        palya_ellenorzes_X();
                        palya_ellenorzes_O();
                        palya_ellenorzes_Keresztben();
                    } else {
                        alert('Ide már rakott az ' + jatekosok.gombok[i].querySelector('h2').innerText + ' játékos.')
                    }
                } else {
                    alert('Döntetlen')
                }
            }
        });
    }
};

function kovetkezo_jatekos() {
    if (kiKovetkezik == 'X') {
        kiKovetkezik = 'O'
        kovetkezo_jatekos_kijelzo.innerHTML = 'Következik: <strong>' + jatekosok.O + ' </strong>'
    } else {
        kiKovetkezik = 'X'
        kovetkezo_jatekos_kijelzo.innerHTML = 'Következik: <strong>' + jatekosok.X + ' </strong>'
    }
}

var X_nyeresei = 0
var O_nyeresei = 0

function jatek_vege(nyert) {
    let gyoztes = jatekosok[nyert]
    kovetkezo_jatekos_kijelzo.innerHTML = 'Forduló vége! Győztes: <strong>' + gyoztes + '</strong>'
    folyamatban = false
    if (nyert == 'X') {
        X_nyeresei = X_nyeresei + 1
        jatekos1_kijelzo.innerHTML = X_nyeresei + ' - ' + jatekosok.X
    }
    if (nyert == 'O') {
        O_nyeresei = O_nyeresei + 1
        jatekos2_kijelzo.innerHTML = jatekosok.O + ' - ' + O_nyeresei
    }
};