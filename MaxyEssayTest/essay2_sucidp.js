function hitungKembalian(totalBelanja, jumlahBayar) {
    // Daftar pecahan uang yang tersedia (dalam urutan dari yang terbesar ke terkecil)
    const pecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    
    // Hitung kembalian
    let kembalian = jumlahBayar - totalBelanja;

    // Jika jumlah bayar kurang dari total belanja, return false
    if (kembalian < 0) {
        return "False, Duit Kurang buat Bayar";
    }

    // Bulatkan kembalian ke bawah ke kelipatan Rp. 100
    kembalian = Math.floor(kembalian / 100) * 100;

    // Buat string untuk output
    let output = `Kembalian yang harus diberikan kasir: Rp ${(jumlahBayar - totalBelanja).toLocaleString()}\nDibulatkan menjadi: Rp ${kembalian.toLocaleString()}\n\nPecahan Uang:\n`;
    
    // Objek untuk menyimpan jumlah pecahan yang harus diberikan
    const hasilKembalian = {};

    // Hitung pecahan yang harus diberikan
    for (const pecahanNominal of pecahan) {
        if (kembalian >= pecahanNominal) {
            const jumlahPecahan = Math.floor(kembalian / pecahanNominal);
            hasilKembalian[pecahanNominal] = jumlahPecahan;
            kembalian -= jumlahPecahan * pecahanNominal;
        }
    }

    // Format output untuk pecahan uang
    for (const pecahanNominal of pecahan) {
        if (hasilKembalian[pecahanNominal]) {
            const jumlah = hasilKembalian[pecahanNominal];
            const satuan = pecahanNominal >= 1000 ? 'Lembar' : 'koin';
            output += `${jumlah} ${satuan} Rp ${pecahanNominal.toLocaleString()}\n`;
        }
    }

    return output.trim();
}

// Contoh penggunaan
console.log(hitungKembalian(700649, 800000));
console.log('\n'); 
console.log(hitungKembalian(657650, 600000));
console.log('\n'); 
console.log(hitungKembalian(575650, 580000));
