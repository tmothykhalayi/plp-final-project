
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Card } from '../components/ui/Card'
import { HeartIcon, TargetIcon, UsersIcon } from 'lucide-react'
export function About() {
  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-white to-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your trusted car rental partner
          </h1>
          <p className="text-xl text-slate-600">
            We're committed to providing exceptional vehicle rental experiences
            with quality cars, transparent pricing, and outstanding service.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <HeartIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Our Mission
              </h3>
              <p className="text-slate-600">
                To provide convenient, affordable, and reliable car rental
                services that make every journey comfortable and stress-free.
              </p>
            </Card>

            <Card>
              <TargetIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Our Fleet
              </h3>
              <p className="text-slate-600">
                A diverse selection of well-maintained, modern vehicles ranging
                from compact cars to luxury SUVs, all regularly serviced and
                sanitized.
              </p>
            </Card>

            <Card>
              <UsersIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Our Promise
              </h3>
              <p className="text-slate-600">
                Transparent pricing, exceptional customer service, and flexible
                rental options that adapt to your needs, whether business or
                leisure.
              </p>
            </Card>
          </div>

          {/* Story Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our story
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Founded in 2020, our car rental service was born from a simple
                idea: make vehicle rental as easy and stress-free as possible.
                We saw how complicated and expensive traditional car rental
                could be, and we knew there was a better way.
              </p>
              <p>
                Starting with just a handful of vehicles, we've grown into a
                trusted service with a diverse fleet of over 500 cars across
                multiple locations. But growth hasn't changed our core values—we
                still believe in transparent pricing, quality vehicles, and
                treating every customer like family.
              </p>
              <p>
                Our team is passionate about cars and even more passionate about
                service. We carefully maintain every vehicle in our fleet,
                ensuring you get a reliable, clean car every time. From routine
                maintenance to thorough cleaning between rentals, we take pride
                in the quality we deliver.
              </p>
              <p>
                Whether you need a car for a business trip, family vacation, or
                just a weekend getaway, we're here to make your rental
                experience smooth, affordable, and enjoyable. Thank you for
                choosing us as your travel companion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            What sets us apart
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Quality Fleet
              </h3>
              <p className="text-slate-600">
                Every vehicle in our fleet is less than 3 years old, regularly
                serviced, and thoroughly inspected before each rental. We
                maintain the highest standards of quality and cleanliness.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Transparent Pricing
              </h3>
              <p className="text-slate-600">
                No hidden fees, no surprises. Our pricing includes all taxes,
                insurance, and unlimited mileage. What you see when booking is
                exactly what you'll pay.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-slate-600">
                Our customer service team and roadside assistance are available
                around the clock. Whether you need help with your booking or
                emergency support on the road, we're always here.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Flexible Options
              </h3>
              <p className="text-slate-600">
                From hourly to monthly rentals, one-way trips to airport
                pickups, we offer flexible rental options to suit every need.
                Free cancellation up to 24 hours before pickup.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
