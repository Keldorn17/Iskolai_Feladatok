const show = (obj) =>{
    document.querySelector('#pontErtek').innerHTML = obj.value
}
let person = []
const kuldes = () =>{
    let hibak = []
    document.querySelector('.msg').innerHTML = ""
    console.log('Adatok küldése')
    
    //nev
    let nev = document.getElementById('Nev').value
    nev.length > 2 ? person.nev = nev : hibak.push("Helytelen vagy hiányos név. (3 karakter)")
    
    //szulEv
    let szev = document.querySelector('#szulEv').value
    szev > 1930 ? person.szev = szev : hibak.push("Helytelen vagy hiányos évszám. (>1930)")
    
    //email
    let email = document.querySelector('#Email').value
    email.length > 2 ? person.email = email : hibak.push("Helytelen vagy hiányos email. (3 karakter)")
    
    //password
    let password = document.querySelector('#Jelszo').value
    password.length > 5 ? person.password = password : hibak.push("Helytelen vagy hiányos jelszó. (6 karakter)")

    //szulDate
    let szulDate = document.querySelector('#szulDate').value
    szulDate.length > 0 ? person.szulDate = szulDate : hibak.push("Helytelen vagy hiányos születési dátum.")
    
    //pont
    person.pont = document.querySelector('#pont').value
    
    //velemeny
    let velemeny = document.querySelector('#Velemeny').value
    velemeny.length > 10 ? person.velemeny = velemeny : hibak.push("Hiányos vélemény.")

    //agazat
    let agazat = document.querySelector('#agazat').value
    agazat != 0 ? person.agazat = agazat : hibak.push("Ágazat kiválasztása kötelező.")

    //végzettség-radiógombok:
    let radioArr = document.getElementsByName('legmagasabb')
    for(let obj of radioArr){
        console.log(obj, obj.checked)
        if(obj.checked)
            person.vegzettseg = obj.value
    }
    if(!person?.vegzettseg)
        hibak.push("Kötelező a végzettség kiválasztása.")

    //ha nincs hiba küldjük az adatokat:
    if(hibak.length == 0)
        document.querySelector('.msg').innerHTML = "Sikeres adatküldés."
    else{
        errors(hibak)
    }
    console.log(person)
}

const errors = (arr) =>{
    let strUL = "<ul>"
    for(let hiba of arr)
        strUL += `<li>${hiba}</li>`
    strUL += "</ul>"
    document.querySelector('.msg').innerHTML = strUL
}