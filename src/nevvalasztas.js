const jatekos1_kijelzo = document.getElementById('jatekos1_kijelzo');
const jatekos2_kijelzo = document.getElementById('jatekos2_kijelzo');
const inditas_gomb = document.querySelector('button')
const bejelentkezo_kepernyo = document.getElementById('bejelentkezes')
const jatek_ter = document.getElementById('jatek_ter')
var jatekosok = {}

inditas_gomb.addEventListener('click', function() {
    let jatekos1 = document.getElementById('jatekos1').value
    let jatekos2 = document.getElementById('jatekos2').value
    if (jatekos1 != '') {
        if (jatekos2 != '') {
            jatek_inditasa()
        }
    }
});


function jatek_inditasa() {
    let jatekos1 = document.getElementById('jatekos1').value
    let jatekos2 = document.getElementById('jatekos2').value
    jatekosok = {
        X: jatekos1,
        O: jatekos2
    }
    bejelentkezo_kepernyo.style.display = 'none';
    jatek_ter.style.display = 'block';
    jatekos1_kijelzo.innerHTML = '0 - ' + jatekosok.X
    jatekos2_kijelzo.innerHTML = jatekosok.O + ' - 0'
    kovetkezo_jatekos_kijelzo.innerHTML = 'A játékot <strong>' + jatekosok.X + '</strong> kezdi. Sok szerencsét!'
}