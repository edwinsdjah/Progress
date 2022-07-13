let n = true;
    while(n){
        let c = Math.random(),
            s = '';
            p = prompt('Silahkan masukkan pilihan : gajah, semut, atau orang')
            
            //DECLARE ANGKA TERLEBIH DAHULU
            if(c < 0.33){
                c = 'gajah'
            } else if (c >= 0.34 && c < 0.66){
                c = 'orang'
            } else {
                c = 'semut'
            }
            
            //MEMULAI PERMAINAN
            if (p == c){
                s = 'seri'
            } else if ( p == 'gajah'){
                s = (c == 'orang') ? 'MENANG !' : 'KALAH !'
            } else if ( p == 'orang'){
                s = (c == 'gajah') ? 'KALAH !' : 'MENANG !'
            } else if ( p == 'semut') {
                s = (c == 'orang') ? 'KALAH !' : 'MENANG !'
            } else {
                s = 'memasukan input yang salah'
            }
            
        alert('Kamu memilih ' + p + ', Komputer memilih ' + c + '\nMaka Kamu ' + s );
            
        n = confirm('Apakah mau main lagi?');
        
        }
        
    alert('terimakasih sudah bermain');