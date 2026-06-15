'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    country: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        city: '',
        country: '',
        subject: '',
        message: '',
      })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#6b7280] mb-3">Get in touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0e0e]">Contact Me</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[#0f0e0e] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0f0e0e] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-[#0f0e0e] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-[#0f0e0e] mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="Your city"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-[#0f0e0e] mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="Your country"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#0f0e0e] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#0f0e0e] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f0e0e] focus:border-transparent resize-none"
                placeholder="Your message"
              />
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-[#0f0e0e] text-white rounded-lg font-semibold hover:opacity-90 transition-all ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
