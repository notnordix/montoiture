"use server"

import nodemailer from "nodemailer"

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Type for contact form data
type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

// Type for quote form data
type QuoteFormData = {
  name: string
  phone: string
  email?: string
  service: string
  message: string
}

// Function to send contact form email
export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return { success: false, message: "Tous les champs sont obligatoires" }
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Nouveau message de contact: ${formData.subject}`,
      html: `
        <h1>Nouveau message de contact</h1>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Sujet:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)
    return { success: true, message: "Message envoyé avec succès" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Erreur lors de l'envoi du message" }
  }
}

// Function to send quote form email
export async function sendQuoteEmail(formData: QuoteFormData) {
  try {
    // Validate form data
    if (!formData.name || !formData.phone || !formData.service || !formData.message) {
      return { success: false, message: "Tous les champs sont obligatoires" }
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Nouvelle demande de devis: ${formData.service}`,
      html: `
        <h1>Nouvelle demande de devis</h1>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Téléphone:</strong> ${formData.phone}</p>
        ${formData.email ? `<p><strong>Email:</strong> ${formData.email}</p>` : ""}
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)
    return { success: true, message: "Demande de devis envoyée avec succès" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Erreur lors de l'envoi de la demande de devis" }
  }
}
