let userName = prompt("adınız nedir ?") // prompt ile adımızı aldık username'e eşitledik. ve 2 satırda prompt ile aldığımız bilgiyi myName adlı etikete verdik eşitledik. 
document.getElementById('myName').innerHTML = userName

let myClock = document.getElementById('myClock');
function currentTime()  // kendimiz bir fonksiyon yazdık.
{
    var today = new Date(); // yeni tarih oluşturur ve todaya eşitler.
    var second = today.getSeconds(); // today değşkenindeki bilgiyi seconda eşitledik. ve alttaki m,h,d gibi tarihlerde aynı şeyi yaptık.
    var minute = today.getMinutes();
    var hours = today.getHours();
    var day = today.getDay();
    var currentDay = ""

    if( day == 0)
    {
        currentDay = "pazar"
    }
    else if (day == 1)
    {
        currentDay = "pazartesi"
    }
    else if (day == 2)
    {
        currentDay = "salı"
    }
    else if(day == 3)
    {
        currentDay = "çarşamba"
    }
    else if (day == 4)
    {
        currentDay = "perşembe"
    }
    else if (day == 5)
    {
        currentDay = "cuma"
    }
    else if (day == 6)
    {
        currentDay = "cumartesi"
    }
    else
    {
        currentDay = "Null" // javascriptte günler pazardan başlar ve 0-6 arası sayılarla belirtilir ör; pazar=0 pazartesi=1
    }
    myClock.innerHTML = `${hours}:${minute}:${second} ${currentDay}`
}
currentTime() // saatin daha hızlı yüklenmesi için currenttime fonksiyonu oluşturulduktan sonra birdaha kodlarımıza yazıyoruz. ama bu olmasada genede çalışır.
setInterval(currentTime, 1000); // setınterval belirli aralıklarla (1 saniye = 1000milisaniye) parametresine yazılan işlevi çağrır.