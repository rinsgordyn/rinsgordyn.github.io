function beli(namaProduk) {
  const nomorWA = "6281234567890"; // Ganti dengan nomor WhatsApp Anda (format internasional, tanpa +)
  const pesan = `Halo, saya ingin membeli produk ${namaProduk}. Apakah masih tersedia?`;
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
  return false; // Mencegah link default
}