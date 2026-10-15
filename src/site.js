// Site-wide settings. Values come from .env (see .env for what each one does).
export const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')

// Digits only, international format, no "+" — used to build wa.me links.
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '237652370882'

// Form service endpoint (e.g. Formspree). When empty, the quote form falls back to WhatsApp.
export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''

export function whatsappLink(text) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
