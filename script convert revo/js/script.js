function konversi() {
    // Mengambil nilai dari inputCelcius
    var celcius = parseFloat(document.getElementById('inputCelcius').value);
    
    // Melakukan konversi ke Fahrenheit
    var fahrenheit = (celcius * 9/5) + 32;
    
    // Menampilkan hasil konversi pada input dengan id 'hasilKonversi'
    document.getElementById('hasilKonversi').value = fahrenheit.toFixed(2);

    // Menampilkan cara kalkulasi atau rumus
    document.getElementById('caraKalkulasi').innerHTML = 'Cara Kalkulasi: (' + celcius + ' °C * 9/5) + 32 = ' + fahrenheit;

    // Deskripsi konversi
    var Deskripsi = "Cara Konversi Dari Celcius(°C) ke Fahrenheit (°F)"
    document.getElementById('Deskripsi').innerHTML = Deskripsi;
    
    // Penjelasan Rumus
    var judulpenjelasan = "Berikut rumus mengubah celcius menjadi fahrenheit :"
    document.getElementById('judulPenjelasanRumus').innerHTML = judulpenjelasan;
    var penjelasanrumus = "°F = (°C * 9/5) + 32"
    document.getElementById('penjelasanRumus').innerHTML = penjelasanrumus;
    var penjelasanrumus2 = "atau"
    document.getElementById('atau').innerHTML = penjelasanrumus2;
    var penjelasanrumus3 = "°F = (°C * 1.8) + 32"
    document.getElementById('penjelasanRumuske2').innerHTML = penjelasanrumus3;
}

function resetForm() {
    // Mengosongkan nilai input dan hasil konversi
    document.getElementById('inputCelcius').value = '';
    document.getElementById('hasilKonversi').value = '';
    document.getElementById('caraKalkulasi').innerHTML = '';
    document.getElementById('Deskripsi').innerHTML = '';
    document.getElementById('judulPenjelasanRumus').innerHTML = '';
    document.getElementById('penjelasanRumus').innerHTML = '';
    document.getElementById('atau').innerHTML = '';
    document.getElementById('penjelasanRumuske2').innerHTML = '';
}