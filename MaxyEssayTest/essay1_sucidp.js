function findMatchingStrings(N, strings) {
    // Mengubah semua string menjadi huruf kecil untuk case insensitive
    for (let i = 0; i < N; i++) {
        strings[i] = strings[i].toLowerCase();
    }

    let maxMatchCount = 0;
    let result = [];

    // Algoritma untuk menemukan set string dengan kecocokan terbanyak
    for (let i = 0; i < N; i++) {
        let currentMatch = [];
        let currentMatchCount = 0;

        for (let j = i + 1; j < N; j++) {
            if (strings[i] === strings[j]) {
                if (currentMatchCount === 0) {
                    currentMatch.push(i + 1);
                    currentMatchCount++;
                }
                currentMatch.push(j + 1);
                currentMatchCount++;
            }
        }

        // Update hasil jika ditemukan set dengan lebih banyak kecocokan
        if (currentMatchCount > maxMatchCount) {
            maxMatchCount = currentMatchCount;
            result = currentMatch;
        }
    }

    // Tampilkan hasil jika ada kecocokan, 
    //jika tidak maka kembalikan false
    if (result.length > 0) {
        console.log(result.join(" "));
    } else {
        console.log(false);
    }
}

// Contoh pertama
let N1 = 4;
let strings1 = ["abcd", "acbd", "aaab", "acbd"];
findMatchingStrings(N1, strings1); // Output: 2 4

// Contoh kedua
let N2 = 5;
let strings2 = ["pisang", "goreng", "enak", "sekali", "rasanya"];
findMatchingStrings(N2, strings2); // Output: false

// Contoh ketiga
let N3 = 11;
let strings3 = ["satu", "sate", "tujuh", "tusuk", "tujuh", "sate", "bonus", "tiga", "puluh", "tujuh", "tusuk"];
findMatchingStrings(N3, strings3); // Output: 3 5 10
