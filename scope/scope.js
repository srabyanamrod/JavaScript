// defined variables  as 2 quantities
var sayi = 10;
var sehir ="ankara";
// code here can use sayi

// ın general,if we use another programming language ,in following code line causes an error
// yet thanks to java script we dont get an error.
var sehir = "İstanbul";

let il="Ankara";
il="Bursa";

//let il="İzmir";

// var & let concept
function mesajVer()
{   var Id_Number="1806594";
    console.log(sayi);
    console.log(sehir);
    console.log(Id_Number);
    // code here CAN use [Id_Number]
    // code here can use sayi
}

// code here CANT use [Id_Number]

// this variables written on console frame
// console.log(sayi);
// console.log(sehir);
// console.log(il);

mesajVer();

// How to Works (const)

    const soyad ="Dorman"
    // soyad="10"; this code line will demonstrate TypeError
    const sehirler["İstanbul","Ankara","Bursa"]
    sehirler.push("İzmir");
    // we can use push function to change variables with other even if it is const term.
    console.log(sehirler);

    