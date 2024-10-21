class Kendaraan {
    constructor(jenis) {
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas Kendaraan adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Mobil extends Kendaraan {
    constructor() {
        super('Mobil');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak dengan roda.`);
    }
}

class Kapal extends Kendaraan {
    constructor() {
        super('Kapal');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di atas air.`);
    }
}

class Pesawat extends Kendaraan {
    constructor() {
        super('Pesawat');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di udara.`);
    }
}

class kereta extends Kendaraan {
    constructor() {
        super('Kereta');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak dengan roda.`);
    }
}

class jet extends Kendaraan {
    constructor() {
        super('Kapal_Selam');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak Di udara.`);
    }
}

// Penggunaan
const mobil = new Mobil();
mobil.bergerak(); // Output: Mobil bergerak dengan roda.

const kapal = new Kapal();
kapal.bergerak(); // Output: Kapal bergerak di atas air.

const pesawat = new Pesawat();
pesawat.bergerak(); // Output: pesawat bergerak di udara.

const Kereta = new kereta();
Kereta.bergerak(); // Output: kereta bergerak dengan roda.

const Jet = new jet();
Jet.bergerak(); // Output: jet selam bergerak di udara.
