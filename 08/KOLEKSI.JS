// Menggunakan List (Array)
let listMahasiswa = ["Agus", "Dilah", "Nanda"];
listMahasiswa.push("Abel"); // Menambahkan elemen baru
console.log(listMahasiswa); // Output: ["Budi", "Siti", "Agus", "Ani"]

// Menggunakan Set
let setMahasiswa = new Set(["Agus", "Dilah", "Nanda"]);
setMahasiswa.add("Abel");
setMahasiswa.add("Dilah"); // Tidak akan menambahkan karena Budi sudah ada
console.log(setMahasiswa); // Output: Set(4) {"Budi", "Siti", "Agus", "Ani"}

// Menggunakan Map
let mapNilai = new Map();
mapNilai.set("Dilah", 90);
mapNilai.set("Nanda", 85);
console.log(mapNilai.get("Dilah")); // Output: 90
