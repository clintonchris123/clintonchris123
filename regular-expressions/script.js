  
  let regexInputClinton = document.getElementById("input");
        let clintonValidasi = document.getElementById("validasi");
        const REGEX_CLINTON = new RegExp("^[a-z0-9]+@gmail\\.com$", "i");
        regexInputClinton.addEventListener("input", function () {
        if (regexInputClinton.value === "") {
            clintonValidasi.innerHTML = "Coba isi";
            clintonValidasi.classList.add("text-blue-600");
            clintonValidasi.classList.remove("text-red-600");
            clintonValidasi.classList.remove("text-green-600");
        } else if (REGEX_CLINTON.test(regexInputClinton.value)) {
            clintonValidasi.innerHTML = "Sesuai";
            clintonValidasi.classList.add("text-green-600");
            clintonValidasi.classList.remove("text-red-600");
            clintonValidasi.classList.remove("text-blue-600");
        } else {
            clintonValidasi.innerHTML = "Coba lagi (akhirannya harus @gmail.com)";
            clintonValidasi.classList.add("text-red-600");
            clintonValidasi.classList.remove("text-blue-600");
            clintonValidasi.classList.remove("text-green-600");
        }
        });

        let regexInputnamaClinton = document.getElementById("inputnama");
        let clintonValidasinama = document.getElementById("validasinama");
        const REGEX_NAME = new RegExp("^[a-zA-Z ]{2,}$");
        regexInputnamaClinton.addEventListener("input", function () {
        if (regexInputnamaClinton.value === "") {
            clintonValidasinama.innerHTML = "Coba isi";
            clintonValidasinama.classList.add("text-blue-600");
            clintonValidasinama.classList.remove("text-red-600");
            clintonValidasinama.classList.remove("text-green-600");
        } else if (REGEX_NAME.test(regexInputnamaClinton.value)) {
            clintonValidasinama.innerHTML = "Sesuai";
            clintonValidasinama.classList.add("text-green-600");
            clintonValidasinama.classList.remove("text-red-600");
            clintonValidasinama.classList.remove("text-blue-600");
        } else {
            clintonValidasinama.innerHTML = "Coba lagi, harus menggunakan minimal 2 huruf tidak boleh angka atau karakter";
            clintonValidasinama.classList.add("text-red-600");
            clintonValidasinama.classList.remove("text-blue-600");
            clintonValidasinama.classList.remove("text-green-600");
        }
        });

        let regexInputpassClinton = document.getElementById("pass");
        let clintonValidasipass = document.getElementById("pw");
        const REGEX_PASSWORD = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$");
        regexInputpassClinton.addEventListener("input", function () {
        if (regexInputpassClinton.value === "") {
            clintonValidasipass.innerHTML = "Coba isi";
            clintonValidasipass.classList.add("text-blue-600");
            clintonValidasipass.classList.remove("text-red-600");
            clintonValidasipass.classList.remove("text-green-600");
        } else if (REGEX_PASSWORD.test(regexInputpassClinton.value)) {
            clintonValidasipass.innerHTML = "Sesuai";
            clintonValidasipass.classList.add("text-green-600");
            clintonValidasipass.classList.remove("text-red-600");
            clintonValidasipass.classList.remove("text-blue-600");
        } else {
            clintonValidasipass.innerHTML = "Coba lagi, Password harus memiliki panjang minimal 8 karakter dan minimal mengandung satu huruf besar, satu huruf kecil, dan satu angka.";
            clintonValidasipass.classList.add("text-red-600");
            clintonValidasipass.classList.remove("text-blue-600");
            clintonValidasipass.classList.remove("text-green-600");
        }
        });

        let regexInputhpClinton = document.getElementById("nohp");
        let clintonValidasihp = document.getElementById("hp");
        const REGEX_PHONE = new RegExp(/^\d{12}$/);
        regexInputhpClinton.addEventListener("input", function () {
        if (regexInputhpClinton.value === "") {
            clintonValidasihp.innerHTML = "Coba isi";
            clintonValidasihp.classList.add("text-blue-600");
            clintonValidasihp.classList.remove("text-red-600");
            clintonValidasihp.classList.remove("text-green-600");
        } else if (REGEX_PHONE.test(regexInputhpClinton.value)) {
            clintonValidasihp.innerHTML = "Sesuai";
            clintonValidasihp.classList.add("text-green-600");
            clintonValidasihp.classList.remove("text-red-600");
            clintonValidasihp.classList.remove("text-blue-600");
        } else {
            clintonValidasihp.innerHTML = "Coba lagi, harus ada 12 angka.";
            clintonValidasihp.classList.add("text-red-600");
            clintonValidasihp.classList.remove("text-blue-600");
            clintonValidasihp.classList.remove("text-green-600");
        }
        });

        let regexInputjkClinton = document.getElementById("jk");
        let clintonValidasijk = document.getElementById("jeniskelamin");
        const REGEX_GENDER = new RegExp(/^(laki-laki|perempuan)$/i);
        regexInputjkClinton.addEventListener("input", function () {
            if (regexInputjkClinton.value === "") {
                clintonValidasijk.innerHTML = "Coba isi";
                clintonValidasijk.classList.add("text-blue-600");
                clintonValidasijk.classList.remove("text-red-600");
                clintonValidasijk.classList.remove("text-green-600");
            } else if (REGEX_GENDER.test(regexInputjkClinton.value)) {
                clintonValidasijk.innerHTML = "Sesuai";
                clintonValidasijk.classList.add("text-green-600");
                clintonValidasijk.classList.remove("text-red-600");
                clintonValidasijk.classList.remove("text-blue-600");
            } else {
                clintonValidasijk.innerHTML = "Coba lagi, jenis kelamin harus 'laki-laki' atau 'perempuan'.";
                clintonValidasijk.classList.add("text-red-600");
                clintonValidasijk.classList.remove("text-blue-600");
                clintonValidasijk.classList.remove("text-green-600");
            }
        });
