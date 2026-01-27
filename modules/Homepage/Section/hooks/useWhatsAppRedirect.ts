import { useCallback } from 'react'

interface WhatsAppConfig {
  message?: string
}

/**
 * Hook untuk menangani redirect ke WhatsApp
 * @param config - Konfigurasi WhatsApp (nomor telepon dan pesan default)
 * @returns Function untuk membuka WhatsApp
 */
export const useWhatsAppRedirect = (config: WhatsAppConfig) => {
  const { message = '' } = config
  const phoneNumber = '6288277450792'

  const openWhatsApp = useCallback(() => {
    // Format nomor telepon (hapus karakter non-digit)
    const formattedPhone = phoneNumber.replace(/\D/g, '')

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message)

    // Buat WhatsApp URL
    // Gunakan api.whatsapp.com untuk desktop dan mobile
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodedMessage}`

    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }, [phoneNumber, message])

  return { openWhatsApp }
}
