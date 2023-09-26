let container1 = document.getElementById("container1")
 let namee =document.getElementById('namein')
 let fathername = document.getElementById('fnamein')
 let score = document.getElementById('scorein')
 let cerial = parseFloat(0)
 let total = parseFloat(0)

 function edit_info () {

    let newrow = document.createElement('tr')
    newrow.className = "newrow"

    let cerialnum = document.createElement('td')
    cerialnum.className = "cerialn"
    cerialnum.innerText = ++cerial

    let sname = document.createElement('td')
    sname.className = "ssname"
    sname.innerText = namee.value
    

    let fname = document.createElement('td')
    fname.className = "ffname"
    fname.innerText = fathername.value

    let Scoree = document.createElement('td')
    Scoree.className = "sscore"
    let updatedScore = parseFloat(Scoree.innerText = score.value)

    let totalscore = document.createElement('td')
    totalscore.className = "tscore"
    total += updatedScore ;
    totalscore.innerText = total

    
    container1.appendChild(newrow)
    newrow.appendChild(cerialnum)
    newrow.appendChild(sname)
    newrow.appendChild(fname)
    newrow.appendChild(Scoree)
    newrow.appendChild(totalscore)

document.getElementById('namein').value = "";
document.getElementById('fnamein').value = "";
document.getElementById('scorein').value = "";
 }




