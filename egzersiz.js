//proje 1 girilen 3 sayının ortalaması


// let sayı1 = Number(prompt("birinci sayınızı giriniz!"))
// let sayı2 = Number(prompt("ikinci sayınızı giriniz!"))
// let sayı3 = Number(prompt("üçüncü sayınızı giriniz!"))

// let toplamSayı = sayı1 + sayı2 + sayı3 ;

// let ortalama = toplamSayı/3 ; 

// alert("Girdiğiniz sayıların ortalaması  --> " + "" + ortalama)





// ----------------------------------------------------------------






// proje 2 üçgen türü verren uygulama 

// let kenar1 = Number(prompt("Türünü öğrenmek istediğiniz üçgenin 1.kenarının uzunluğunu giriniz!")) 
// let kenar2 = Number(prompt("Türünü öğrenmek istediğiniz üçgenin 2.kenarının uzunluğunu giriniz!"))
// let kenar3 = Number(prompt("Türünü öğrenmek istediğiniz üçgenin 3.kenarının uzunluğunu giriniz!"))

// if(kenar1 === kenar2 && kenar2 === kenar3 && kenar1 === kenar3) { 

//     alert("Eşkenar Üçgen" )
// } else if ( kenar1 === kenar2 || kenar1 === kenar3 || kenar2 === kenar3) { 

//     alert("İkizkenar Üçgen ")
// }
//   else{
//     alert("Çeşitkenar Üçgen")
//   }




// ----------------------------------------------------------------






//proje 3 vize final ortalaması 

// let vize = Number(prompt("Vize notunuzu giriniz!"))

// let final = Number(prompt("Final notunuzu giriniz!"))

// let ortalama = vize*0.4 + final*0.6  

// if(ortalama >= 50) { 

//     alert("Dersi başarıyla geçtiniz! Ortalamanız >>>" + ortalama )
// } else { 
//     alert("Dersi geçebilmeniz için gereken ortalamayı yapamadınız :( Ortalamanız >>>" + ortalama )
// }






// ----------------------------------------------------------------





// proje 4 ismini ekrana 5 kez yazdıran uygulama 

//  for (let i=1 ; i<=5; i++)
//  {
//     console.log("bedirhan üçbaş" )
//  }





// ----------------------------------------------------------------







// proje 5  1'den 100' e kadar olan sayıların toplamını bulan uygulama let x = 0


// let toplam = 0 ;

// for (let i=1; i<=100; i++ ) 
// {
// toplam = toplam+i 
// }
// console.log(toplam)





// ----------------------------------------------------------------






// proje 6 1'den 10'a kadar olan sayıları sırsıyla virgüllü olarak yazdıran uygulama 



// for (i=1; i<=10; i++) {

// }

// let x = []
// console.log(x)




// ----------------------------------------------------------------





//  proje 7 (x,y)'li fonksiyon projesi 

// let x = Number(prompt("X değerini giriniz"))
// let y = Number(prompt("Y değerini giriniz"))

// if (x > 0 && y < 0) {

//     let toplam = (x * 4 + 2 * y + 4)

//     alert(toplam)

// } else if (x > 0 && y == 0) {

//     let toplam2 = (2 * x - y + 3)---

//     alert(toplam2)

// } else if  (x<0 && y>0) { 

//     let toplam3 = ( x*3 + y*4 + 3)

//     alert(toplam3)
// }





// ----------------------------------------------------------------






// proje 8 günü ve saati gösteren uygulama yapımı 


// let today = new Date () ; 
//     let day = today.getDay(); 
//     let dayList = ["Pazartesi", "Salı","Çarşamba", "Perşembe","Cuma", "Cumartesi", "Pazar"]
// console.log("Bugün günlerden : " + dayList[FileSystemDirectoryReader] + "." ) ; 

// let hour = today.getHours() ; 
// let minute = today.getMinutes();
// let second = today.getSeconds() ; 
// console.log("Şu an :" + hour +"." + minute + "." +  second)





// ----------------------------------------------------------------







// Proje 9 üçgenin kenar uzunluklarına göre alanını bulan uygulama 

// let kenar1 = 5 
// let kenar2 = 6 
// let kenar3 = 7 

// let cevre = kenar1 + kenar2 + kenar3 
// let s = cevre/2 
// console.log(s)

// let alan = s * ((s-kenar1) * (s-kenar2) * (s-kenar3)) ;
// let karekök = Math.sqrt (alan) ;

// console.log(karekök)





// ----------------------------------------------------------------





// Proje 10 kullanıcının girdiği değerlere göre çarpma ya da bölme yapan uygulama

// function multiplyBy() {

//     num1 = document.getElementById("firstNumber").value;
//     num2 = document.getElementById("secondNumber").value;
//     document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() {
//     num1 = document.getElementById("firstNumber").value;
//     num2 = document.getElementById("secondNumber").value;
//     document.getElementById("result").innerHTML = num1 / num2;

// }





// ----------------------------------------------------------------






// Proje 11 Vize Notlarını harf ile bildiren uygulama 

// let vize = Number(prompt("Vize notunuzu giriniz"))
// let final = Number(prompt("Final notunuzu giriniz"))
// let toplam = (vize*0.4 + final*0.6)

// if (toplam>= 90 && toplam <=100) {88
//     alert("Harf Notunuz AA")
// } else if (toplam>= 85 && toplam <= 89) {
//     alert("Harf Notunuz BA")
// } else if (toplam>=80 && toplam <= 84) {
//     alert("Harf Notunuz BB")
// }




// ----------------------------------------------------------------





// Proje 12 Faktöriyel Hesaplama Uygulaması 


// let sayı = Number(prompt("Bir sayı giriniz"));
// let çarpma = 1;


// for (let i = 1; i <= sayı; i++) {

//     çarpma = çarpma * i
// }
// alert(çarpma)





// ----------------------------------------------------------------




// Proje 13 Prompt ile Basit Hesap Makinesi Uygulaması 

// let işlem = String(prompt("Yapmak istediğiniz işlemi yazin"))
// let num1 = Number(prompt("İlk sayiyiyi giriniz"))
// let num2 = Number(prompt("İkinci sayiyi giriniz"))

// if (işlem == "çarpma") {
//     alert(num1 * num2)
// } else if (işlem == "toplama") {
//     alert(num1 + num2)
// } else if (işlem == "çıkarma") {
//     alert(num1 - num2)
// } else if (işlem == "bölme") {
//     alert(num1 / num2)
// }







