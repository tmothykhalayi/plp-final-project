import React, { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Card } from '../components/ui/Card'
import { MailIcon, MessageSquareIcon, ClockIcon } from 'lucide-react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <>
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-white to-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-slate-600">
            Have questions about our vehicles or rentals? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <MailIcon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600 text-sm">support@carrental.com</p>
              </Card>

              <Card>
                <MessageSquareIcon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Live Chat</h3>
                <p className="text-slate-600 text-sm">
                  Available 24/7 for booking assistance
                </p>
              </Card>

              <Card>
                <ClockIcon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">
                  Business Hours
                </h3>
                <p className="text-slate-600 text-sm">
                  Mon-Sun: 8:00 AM - 10:00 PM
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MailIcon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Message sent!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for contacting us. Our team will respond within 24 hours.
                    </p>
                    <Button variant="ghost" onClick={() => setSubmitted(false)}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />

                      <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <Input
                      label="Subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />

                    <Input
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your question or feedback..."
                      multiline
                      rows={6}
                      required
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <h3 className="font-semibold text-slate-900 mb-2">
                What documents do I need to rent a car?
              </h3>
              <p className="text-slate-600">
                You'll need a valid driver's license, a credit card in your name,
                and proof of insurance. International renters may need an
                International Driving Permit.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-slate-900 mb-2">
                Can I modify or cancel my reservation?
              </h3>
              <p className="text-slate-600">
                Yes! You can modify or cancel your reservation up to 24 hours
                before your pickup time for a full refund. Changes made within
                24 hours may incur fees.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-slate-900 mb-2">
                What's included in the rental price?
              </h3>
              <p className="text-slate-600">
                Our rental prices include basic insurance, unlimited mileage,
                24/7 roadside assistance, and free cancellation up to 24 hours
                before pickup. Additional coverage is available.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-slate-900 mb-2">
                Do you offer long-term rentals?
              </h3>
              <p className="text-slate-600">
                Yes! We offer special rates for weekly and monthly rentals.
                Long-term rentals include free vehicle swaps, priority maintenance,
                and dedicated customer support.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  )
}
