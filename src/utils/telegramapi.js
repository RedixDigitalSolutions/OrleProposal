// src/utils/telegramApi.js

/**
 * Sends a message to Telegram using the Bot API
 * @param {string} packageName - The selected package name
 * @param {string} packagePrice - The package price
 * @returns {Promise<Object>} Response from Telegram API
 */
export const sendPackageSelectionToTelegram = async (packageName, packagePrice) => {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID
  
  if (!botToken || !chatId) {
    console.error('Telegram credentials not found in environment variables')
    throw new Error('Telegram configuration missing')
  }

  const clientName = 'ORLE Men\'s Skincare & Haircare Brand'
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Africa/Tunis',
    dateStyle: 'full',
    timeStyle: 'short'
  })

  // Format message with proper line breaks
  const message = `
🎯 *NEW PACKAGE SELECTION*

👤 *Client:* ${clientName}

📦 *Package:* ${packageName}
💰 *Price:* ${packagePrice} TND

📅 *Date & Time:* ${timestamp}

🔔 *Action Required:* Please contact the client as soon as possible to confirm their selection and next steps.

---
_Automated notification from ORLE Marketing Proposal Website_
  `.trim()

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    })

    const data = await response.json()

    if (!data.ok) {
      throw new Error(`Telegram API Error: ${data.description}`)
    }

    return data
  } catch (error) {
    console.error('Failed to send Telegram message:', error)
    throw error
  }
}
