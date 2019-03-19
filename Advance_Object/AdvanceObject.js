// const urunServis =
// {
//     ekle: function()
//     {
//         console.log(this);
//     }
// }

// urunServis.ekle();

class Personel
{
    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
    }
    kaydet()
    {
        console.log(`Personel kayıt edildi: ${this.ad}`);
    }
}   
    const personel = new Personel("Engin","Demirog")
    const personel1= new Personel("Aybars","Dorman")
    const personel2= new Personel("Murat","Çeliktepe")
    personel.kaydet();

    personel.ad="Engin"
    console.log(personel.ad);
    console.log("Personel Bilgileri: "  + personel.ad,personel.soyad)
    console.log("Diğer Personeller:  " + personel1.ad,personel1.soyad,personel2.ad,personel.soyad)
