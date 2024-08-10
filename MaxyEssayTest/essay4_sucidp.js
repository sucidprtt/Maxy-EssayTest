function canTakeLeave(jumlahCutiBersama, tanggalJoin, tanggalRencanaCuti, durasiCuti) {
    const totalCutiKantor = 14;
    const cutiPribadi = totalCutiKantor - jumlahCutiBersama;
    
    const joinDate = new Date(tanggalJoin);
    const leaveDate = new Date(tanggalRencanaCuti);

    // Karyawan baru tidak boleh mengambil cuti dalam 180 hari pertama
    const startDateEligibleForLeave = new Date(joinDate);
    startDateEligibleForLeave.setDate(joinDate.getDate() + 180);
    
    if (leaveDate < startDateEligibleForLeave) {
        return "false, karena belum 180 hari sejak tanggal join karyawan";
    }

    // Hitung sisa hari di tahun pertama
    const endOfYear = new Date(leaveDate.getFullYear(), 11, 31);
    const remainingDaysInYear = (endOfYear - startDateEligibleForLeave) / (1000 * 60 * 60 * 24) + 1;
    
    // Hitung kuota cuti pribadi untuk karyawan baru
    const maxLeaveForNewEmployee = Math.floor((remainingDaysInYear / 365) * cutiPribadi);

    if (maxLeaveForNewEmployee === 0) {
        return "false, karena tidak ada kuota cuti pribadi untuk tahun pertama ini";
    }

    // Cuti pribadi max 3 hari berturut-turut
    if (durasiCuti > 3) {
        return "false, karena cuti pribadi tidak boleh lebih dari 3 hari berturutan";
    }

    // Cek apakah durasi cuti melebihi sisa cuti yang tersedia
    if (durasiCuti > maxLeaveForNewEmployee) {
        return `false, karena kamu hanya boleh mengambil ${maxLeaveForNewEmployee} hari cuti`;
    }

    return "true, kamu bisa cuti";
}

// Contoh penggunaan:

const hasil1 = canTakeLeave(7, '2021-05-01', '2021-07-05', 1);
console.log(hasil1); // Output: false, karena belum 180 hari sejak tanggal join karyawan

const hasil2 = canTakeLeave(7, '2021-01-05', '2021-12-18', 1);
console.log(hasil2); // Output: true, kamu bisa cuti

const hasil3 = canTakeLeave(7, '2021-05-01', '2021-11-05', 3);
console.log(hasil3); // Output: false, karena kamu hanya boleh mengambil 1 hari cuti

const hasil4 = canTakeLeave(7, '2021-01-05', '2021-12-18', 3);
console.log(hasil4); // Output: true, kamu bisa cuti
