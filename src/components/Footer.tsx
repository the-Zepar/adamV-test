import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full py-6 bg-white/10 dark:bg-gray-950/10 text-gray-800 dark:text-gray-200 backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              We are committed to providing the highest quality vermicompost for
              sustainable agriculture.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm">123 Compost Lane, A.A, Ethiopia</p>
            <p className="text-sm">Phone: (251) 1334-3663/(251) 0046-0923</p>
            <p className="text-sm">Email: temebekele021@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link to="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-sm mb-2">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/50 dark:bg-gray-700/50 border-none shadow-inner backdrop-blur-sm"
              />
              <Button
                type="submit"
                className="bg-green-600/90 hover:bg-green-700/90 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© 2023 Adam's VP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
