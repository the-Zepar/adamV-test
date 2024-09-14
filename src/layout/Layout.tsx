import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200 font-sans">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
