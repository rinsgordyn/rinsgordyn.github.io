function beli(namaProduk) {
  const nomorWA = "6281384990679"; // Ganti dengan nomor WhatsApp Anda
  const pesan = `Halo, saya ingin membeli produk ${namaProduk}. Apakah masih tersedia?`;
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
  return false;
}