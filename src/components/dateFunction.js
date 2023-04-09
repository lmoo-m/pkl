const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
];
const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

const dates = new Date();

export const generateDate = () => {
    const day = dates.getDay();
    const date = dates.getDate();
    const month = dates.getMonth();
    const year = dates.getFullYear();

    return `${days[day]}, ${date} ${months[month]} ${year}`;
};
