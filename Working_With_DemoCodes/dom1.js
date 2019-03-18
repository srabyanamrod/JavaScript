
// Using Demo GetElementsByClassName Function
var classElemanlari = document.getElementsByClassName("intro1");
alert(classElemanlari[1].innerHTML);
// Using Demo QuerySelectorAll Function
var queryElemanları = document.querySelectorAll("p.intro1");
alert(queryElemanları.length);
// Using Demo GetElementsByName
var isimelemanlari = document.getElementsByName("musteri_adi");
alert(isimelemanlari[0].value);

// function isimyazdir(){
// var butonyazdir = document.getElementById("click");
// alert(document.getElementById("click").value);}

// Using Demo AddEventListener
    var aybars = document.getElementById("aybars",).addEventListener("click",rengidegistir);

    function rengidegistir()
    {
        document.getElementById("ogr_no").style.color="red";
    }

    // Working with Demo Nods

    // var node  = document.getElementById("okul");
    // alert(node.childNodes[0].nodeValue);

    var baslik = document.createElement("h2");
    var node = document.createTextNode("Merhaba JavaScript")
    baslik.appendChild(node)

    var div1 = document.getElementById("div1")
    var p2  = document.getElementById("p2")

    div1.insertBefore(baslik,p2)
    
    // How to delete a child object
    alert("P2 Siliniyor")
    div1.removeChild(p2);




    
    



