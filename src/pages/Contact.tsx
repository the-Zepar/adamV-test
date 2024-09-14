import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

import { MapPin, Phone, Mail } from "lucide-react";

import { motion } from "framer-motion";

function Contact() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4 md:px-6"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Contact Us
          </h1>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We'd love to hear from you. Whether you have a question about
                our products, need advice on vermicomposting, or want to explore
                partnership opportunities, our team is here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-green-600" />
                  <span>123 Compost Lane, Green City, EC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-green-600" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-green-600" />
                  <span>info@adamsvp.com</span>
                </div>
              </div>
            </div>
            <Card className="bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Send Us a Message
                </h2>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100/50 dark:bg-gray-800/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
            Visit Our Facility
          </h2>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
            We offer guided tours of our vermicomposting facility. See firsthand
            how we transform organic waste into nutrient-rich compost. Book a
            tour to learn more about our sustainable practices and the magic of
            worm farming!
          </p>
          <div className="flex justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm">
              Book a Tour
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
