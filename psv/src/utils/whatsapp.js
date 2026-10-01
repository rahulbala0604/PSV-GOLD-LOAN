export function createWhatsAppUrl(phone, message) {
  const cleanPhone = phone.replace(/\D/g, "");
  // Ensure the phone number has the country code
  const formattedPhone = cleanPhone.startsWith("91") ? cleanPhone : `91${cleanPhone}`;
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
}
