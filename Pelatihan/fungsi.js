// fungsi yang berdiri sendiri 
function sapa() {
    return "Selamat Pagi!"; 
}

console.log(sapa()); //output Selamat 

// fungsi yang disimpan di dalam variabel
    let berkenalan = function() {
        return "Hallo, nama saya Sarah.";
    };

    console.log(berkenalan()); //output hallo nama saya Sarah.

    let umur = 21;

    function ulangTahun() {
        umur +=1;
    }

    console.log(ulangTahun()); //output underfined

