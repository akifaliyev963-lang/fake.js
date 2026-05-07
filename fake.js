



// ──────────────────────────────────────────────────────────
//   TAPŞIRIQ 1 — Düzbucaqlının sahəsi
// ──────────────────────────────────────────────────────────
// Tapşırıq:
//   • en = 8, boy = 5 dəyişənlərini yarat
//   • Sahəni hesabla: sahe = en * boy
//   • Nəticəni console.log ilə çap et:
//     "Düzbucaqlının sahəsi: 40"

// Həllin buraya yaz:

let en =8

let boy =5

let sahe=(en*boy)

console.log("Düzbucaqlının sahəsi: 40");






// ──────────────────────────────────────────────────────────
//   TAPŞIRIQ 2 — Qiymət hesablayıcı
// ──────────────────────────────────────────────────────────
// Tapşırıq:
//   • mehsulAdi = "Noutbuk", qiymet = 1200, endirim = 15 yarat
//     (endirim faizdir, yəni 15%)
//   • Endirim məbləğini hesabla
//   • Son qiyməti hesabla
//   • console.log ilə çap et:
//     "Noutbuk — Əvvəlki qiymət: 1200 AZN"
//     "Endirim: 180 AZN"
//     "Son qiymət: 1020 AZN"

// Həllin buraya yaz:

let mehsulAdi = "Noutbuk";

let qiymet = 1200;

let endirim = 15;

let endirimliqiymet = (qiymet*endirim)/100;

let sonqiymet =qiymet-endirimliqiymet;

console.log(`${mehsulAdi}- Əvvəlki qiymət ${qiymet}azn`);

console.log(`endirimli ${endirimliqiymet}azn`);
console.log(`son qiymet ${sonqiymet}azn`);






// ──────────────────────────────────────────────────────────
//   TAPŞIRIQ 3 — Orta hesab və qiymət
// ──────────────────────────────────────────────────────────
// Tapşırıq:
//   • 3 fənn balı yarat: riyaziyyat = 85, ingilis = 72, fizika = 90
//   • Orta balı hesabla
//   • else if ilə qiymət ver:
//     orta >= 91  → "Əla"
//     orta >= 81  → "Yaxşı"
//     orta >= 71  → "Kafi"
//     orta >= 51  → "Qənaətbəxş"
//     digər       → "Qeyri-kafi"
//   • Çap et: "Orta bal: 82.3 — Qiymət: Yaxşı"

// Həllin buraya yaz:

let riy =85
let ing =72
let fiz =90

let ortabal =(riy+ing+fiz)/3

if(ortabal>= 91)
{qiymet="Ela"}

else if (ortabal>= 81 ) {
    qiymet="Yaxşı"
}
else if (ortabal>= 71) {
    qiymet="Kafi"
}
else if (ortabal >= 51) {
    qiymet="Qənaətbəxş"
}
else  {
    qiymet="Qeyri-kafi"
}
console.log(`ortabal ${ortabal.toFixed(1)}-qiymet ${qiymet}`);





// ──────────────────────────────────────────────────────────
//   TAPŞIRIQ 4 — Giriş yoxlaması
// ──────────────────────────────────────────────────────────
// Tapşırıq:
//   • istifadeciAdi = "admin"  və  sifre = "abc123"  yarat
//   • && operatoru ilə yoxla:
//     Əgər istifadeciAdi === "admin" VƏ sifre === "abc123" isə
//       → "✅ Giriş uğurlu! Xoş gəldiniz, admin."
//     Əks halda
//       → "❌ İstifadəçi adı və ya şifrə yanlışdır."
//   • Sifrenin dəyərini dəyişib yenidən yoxla

// Həllin buraya yaz:

let istifadeciAdi = "admin"
let sifre = "abc123"

if (istifadeciAdi === "admin" && sifre === "abc123" ) {
console.log("✅ Giriş uğurlu! Xoş gəldiniz, admin.")}
    
else{
console.log("❌ İstifadəçi adı və ya şifrə yanlışdır.");}











// ──────────────────────────────────────────────────────────
//  TAPŞIRIQ 5 — Fəsil tayini
// ──────────────────────────────────────────────────────────
// Tapşırıq:
//   • ay = 4  dəyişəni yarat (1=Yanvar ... 12=Dekabr)
//   • switch/case ilə fəsli müəyyən et:
//     12, 1, 2  → "Qış"
//     3, 4, 5   → "Yaz"
//     6, 7, 8   → "Yay"
//     9, 10, 11 → "Payız"
//   • Çap et: "4-cü ay: Yaz fəslidir."
//   • ay dəyərini dəyişib digər ayları da yoxla

// Həllin buraya yaz:


let ay = 4;

switch (ay) {
    case 12:
    case 1:
    case 2:
        console.log(`ay + "-cü ay: Qış fəslidir.`);
        break;

    case 3:
    case 4:
    case 5:
        console.log(`ay + -cü ay: Yaz fəslidir.`);
        break;

    case 6:
    case 7:
    case 8:
        console.log(`ay + "-cü ay: Yay fəslidir.`);
        break;

    case 9:
    case 10:
    case 11:
        console.log(`ay + "-cü ay: Payız fəslidir.`);
        break;

    default:
        console.log(`Yanlış ay daxil edilib.`);
}



// ──────────────────────────────────────────────────────────
//   TAPŞIRIQ 6 — Çatdırılma hesablayıcı
// ──────────────────────────────────────────────────────────
// Tapşırıq:
//   • siparisMetri = 250  (məsafə, km)
//   • siparisAgirliqi = 12  (çəki, kq)
//   • Aşağıdakı qaydaları if/else if ilə tətbiq et:
//
//     📦 ÇƏKI qaydası:
//        10 kq-dan az   → çatdırılma = 5 AZN
//        10-25 kq arası → çatdırılma = 10 AZN
//        25 kq-dan çox  → çatdırılma = 20 AZN
//
//     🚗 MƏSAFƏ əlavəsi (çatdırılma qiymətinə əlavə olunur):
//        100 km-dən az  → +0 AZN (pulsuz)
//        100-300 km     → +5 AZN
//        300 km-dən çox → +15 AZN
//
//   • Ümumi çatdırılma qiymətini hesabla
//   • Çap et:
//     "Çəki: 12 kq | Məsafə: 250 km"
//     "Çatdırılma haqqı: 15 AZN"

// Həllin buraya yaz:

let siparisMetri = 250

let siparisAgirliqi = 12


if(siparisAgirliqi<10)
{çatdırılma = 5}

else if (siparisAgirliqi<=25) {
    çatdırılma = 10;
}
else   {
    çatdırılma = 20
}

 if (siparisMetri>100) {
    çatdırılma+=0;
 }
else if (siparisMetri<=100-300) {
     çatdırılma = +5;
}
else {
    çatdırılma +=15;
}

console.log(`ceki ${siparisAgirliqi}|Məsafə ${siparisMetri}`);
console.log(`catdirilma haqqi ${qiymet}`);







// Task 7 
// suret dəyişəni təyin edin. Əgər sürət 65-dən böyükdürsə "Cərimə yazıldı", kiçikdirsə "Normal sürət" mesajı verin.

let suret =80


if (suret>65){
console.log(`cerime yazildi`);
}
else{
console.log(`normal suret`);
}


// Task 8
// ATM-dən Pul Çıxarma
// balans və mebleg adlı dəyişənlər yaradın.

// Əgər mebleg balansdan çoxdursa: "Kifayət qədər vəsait yoxdur".

// Əgər mebleg 10-un misli deyilsə (məsələn 15 və ya 23-dürsə): "Yalnız 10-luq əskinaslar çıxarmaq mümkündür".

// Hər iki şərt ödənirsə: "Pulunuz verilir. Yeni balans: [qalıq]" yazdırın.

let balans = 200;
let mebleg = 50;

// Balans yoxlanılır
if (mebleg > balans) {
    console.log(`Kifayət qədər vəsait yoxdur`);
}

// Məbləğin 10-un misli olub-olmaması yoxlanılır
else if (mebleg % 10 !== 0) {
    console.log(`Yalnız 10-luq əskinaslar çıxarmaq mümkündür`);
}

// Şərtlər ödənirsə
else {
    balans = balans - mebleg;
    console.log(`Pulunuz verilir. Yeni balans: ` + balans);
}






// Task 9
// Bir kinoteatrda qiymətlər aşağıdakı kimidir:

// Baza qiymət: 10 AZN.

// Əgər tamaşaçı 18 yaşdan kiçikdirsə — 50% endirim.

// Əgər tamaşaçı 60 yaşdan böyükdürsə — 30% endirim.

// Əgər bu gün "Çərşənbə" günüdürsə — əlavə olaraq bütün biletlərə 2 AZN endirim tətbiq olunur.
// yas və gun dəyişənlərinə görə yekun qiyməti hesablayın.



let yas = 16;
let gun = "Çərşənbə";

let qiymet = 10;

// 18 yaşdan kiçiklərə 50% endirim
if (yas < 18) {
    qiymet = qiymet * 0.5;
}

// 60 yaşdan böyüklərə 30% endirim
else if (yas > 60) {
    qiymet = qiymet * 0.7;
}

// Çərşənbə günü əlavə 2 AZN endirim
if (gun === "Çərşənbə") {
    qiymet = qiymet - 2;
}

// Mənfi qiymətin qarşısını almaq üçün
if (qiymet < 0) {
    qiymet = 0;
}

console.log(`Yekun qiymət: ${qiymet}`);



// Task 10

// Bankdan kredit almaq üçün:

// yas 20 ilə 65 arası olmalıdır.

// ayliqGelir minimum 500 AZN olmalıdır.

// isTecrubesi (aylarla) minimum 6 ay olmalıdır.
// Bütün şərtlər ödənilirsə "Kredit təsdiqləndi", hər hansı biri ödənilmirsə konkret hansı səbəbdən imtina edildiyini yazdırın.



// console.log() - neticeleri yazin

// Task 10

let yas = 30;
let ayliqGelir = 700;
let isTecrubesi = 12;

if (yas < 20 || yas > 65) {
    console.log(`İmtina edildi: Yaş 20 ilə 65 arasında olmalıdır.`);
} 
else if (ayliqGelir < 500) {
    console.log(`İmtina edildi: Aylıq gəlir minimum 500 AZN olmalıdır.`);
} 
else if (isTecrubesi < 6) {
    console.log(`İmtina edildi: İş təcrübəsi minimum 6 ay olmalıdır.`);
} 
else {
    console.log(`Kredit təsdiqləndi`);
}











