var kullanicilar =[
  {email:"aybars.dorman@hotmail.com", sifre:"123456"},
  {email:"aybars.dorman@bahcesehir.edu.tr",sifre:"12345678"}
]

var twitler = [
  {email:"engindemiroglu@gmail.com",tivit:"bugün hava çok güzel"},
  {email:"engindemiroglu@gmail.com",tivit:"bugün hava çok güneşli"},
  {email:"derindemiroglu@gmail.com",tivit:"kapıyı ben açacağım!"}
]

  var email = prompt("e-mail?")
  var sifre = prompt("Şifre?")

  function giris(){
  if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)||)
  (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre))
  { console.log(twitler)}
  else{
    console.log("Kullancı adı veya şifre hatalı")
  }
}
  giris(email,sifre)
