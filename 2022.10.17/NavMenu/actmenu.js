let linksArr = document.links
for(let obj of linksArr){
    console.log('Tömb: '+obj.href)
    console.log('URL: '+document.URL)
    if(obj.href == document.URL){
        obj.style.color = "red"
    }
}