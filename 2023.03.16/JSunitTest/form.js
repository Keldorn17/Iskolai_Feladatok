let hibak=[]

const pontotMutat=(e)=>{
    console.log(e.target.value)
    document.getElementById("pontErtek").value=e.target.value
}


const ellenoriz=(e)=>{
    hibak=[]
    document.getElementById("hibalista").innerHTML=""

    if(document.getElementById("email").value.length<4)
        hibak.push("helytelen e-mail cim")

    //jelszo:
    let jszo=document.getElementById("passw").value
    if(checkJelszo(jszo).length>0)
        hibak=[...hibak,...checkJelszo(jszo)]
    
    //erdeklodesi kor:
    let erdeklodesIndex=document.getElementById("sel").selectedIndex
    console.log("erdeklodes="+erdeklodesIndex+" "+document.getElementById("sel").options[erdeklodesIndex].text)
    let erdeklodes=document.getElementById("sel").options[erdeklodesIndex].text
    if(erdeklodesIndex<=0)
        hibak.push("valassz egy erdeklodesi kort")

    //checkbox:
    if(!document.querySelector('input[name=nyelv]:checked'))
      hibak.push("ki kell valasztani legalabb egy nyelvet")     
      
    //radio:
    if(!document.querySelector('input[name=rOp]:checked'))
      hibak.push("ki kell valasztani a hovatartozasi kategoriat")     

    document.getElementById("hibalista").innerHTML=hibak.reduce((s,e)=>s+"<li>"+e+"</li>","")

    if(hibak.length>0)
        e.preventDefault();
}

const checkJelszo=(jszo)=>{
    console.log(jszo)
    let err=[]
    if(jszo.length<8)
        err.push("a jelszo tul rovid")
    let hasNumber = /\d/;   
    if(!hasNumber.test(jszo))
        err.push("a jelszonak kell tartalmaznia szamot is")
    console.log(err)
    return err;
}

module.exports = {checkJelszo}
