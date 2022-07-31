// CONTOH LATIHAN ARRAY DENGAN MENGGUNAKAN KASUS NAIK ANGKOT

// Deklarasi variable awal array
let arrPenumpang = [];

// Function utk menambahkan parameter ke dalam array
function tambah(nama) {
    // Jika isi array masih kosong, maka data langsung masuk
    if (arrPenumpang.length === 0) {
        arrPenumpang.push(nama)
        return arrPenumpang
    } else {
        // Fungsi utk mencari apakah nama penumpang sudah ada atau belum
        // arrow function untuk membuat variabel yg di isi dengan fungsi
        let = cari = nama => {
            // Looping value array
            for( i = 0 ; i < arrPenumpang.length ; i++){
                // Jika value nama sama dgn isi array maka variabel s = true
                if (nama === arrPenumpang[i]){
                    return cari = true
                } 
                // Jika value nama tidak ada di dalam array maka variabel s = false,
                // looping hingga nilai i = isi array paling terakhir
                else if (i === arrPenumpang.length - 1) { 
                    return cari = false
                }
            }
        }
        // Menjalankan fungsi nama
        cari(nama);
        // looping array untuk mengisi nilai
        for (i = 0; i < arrPenumpang.length; i++) {
            // Jika isi array ada yg undefined dan namanya belum ada di dalam array. langsung masuk ke array kosong tersebut
            if (arrPenumpang[i] === undefined && cari === false) {
                arrPenumpang[i] = nama
                return arrPenumpang
            } 
            // Jika namanya sudah ada, maka loop berakhir
            else if (cari === true) {
                console.log(`${nama} sudah naik`)
                return arrPenumpang
            }
            // Jika nama blm ada, dan array penuh semua, maka otomatis masuk ke paling belakang
            else if (i === arrPenumpang.length - 1) {
                arrPenumpang.push(nama)
                return arrPenumpang
            }
        }
    }
}

// Fungsi utk menghapus nama di dalam array
function turun(nama) {
    // Jika array masih kosong maka fungsi berakhir
    if (arrPenumpang.length === 0) {
        console.log(`Arraynya kosong`);
    } else if (nama == undefined) {
        console.log(`goblok`)
    } else {
        // looping array
        for (i = 0; i < arrPenumpang.length; i++) {
            // Jika menemukan nama yg sama dgn isi array maka langsung ubah menjadi undefined
            if (arrPenumpang[i] === nama) {
                arrPenumpang[i] = undefined;
                return arrPenumpang
            } 
            // Jika nama tidak ada, fungsi berakhir
            // looping sampai nilai terakhir array
            else if (i === arrPenumpang.length - 1) {
                console.log(`${nama} tidak ada`);
            }
        }
    }
    return arrPenumpang;
}