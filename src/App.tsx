import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateEmail(email)) {
      setMessage("Successfully Subscribed!");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="font-sans bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md p-4">
        <h1 className="text-green-600 text-xl font-bold">Internee.pk</h1>
        <nav>
          <ul className={`md:flex space-x-6 ${menuOpen ? "block" : "hidden"} md:block`}>
            <li><a href="#" className="hover:text-green-500">Home</a></li>
            <li><a href="#" className="hover:text-green-500">Internship</a></li>
            <li><a href="#" className="hover:text-green-500">Graduate Program</a></li>
            <li><a href="#" className="hover:text-green-500">Company Collaboration</a></li>
            <li><a href="#" className="hover:text-green-500">Contact</a></li>
          </ul>
          <button className="md:hidden text-2xl" onClick={toggleMenu}>☰</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center text-white p-20 text-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology')" }}>
        <h2 className="text-3xl font-bold">Looking for a Dream Internship?</h2>
        <p className="mt-2">Kickstart your career with hands-on industry experience.</p>
        <a href="#" className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">Explore Opportunities</a>
      </section>

      {/* About Section */}
      <section className="p-10 text-center bg-white">
        <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
        <p className="mt-2">We provide hands-on training, expert mentorship, and real-world experience to prepare you for your dream job.</p>
      </section>

      {/* Contact Section */}
      <section className="p-10 text-center bg-green-600 text-white">
        <h3 className="text-2xl font-semibold">Get in Touch</h3>
        <form className="mt-4" onSubmit={handleSubmit}>
          <input
            type="email"
            className="p-2 w-64 rounded text-black"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="p-2 bg-white text-green-600 ml-2 rounded hover:bg-gray-200">Subscribe</button>
        </form>
        <p className="mt-2">{message && <span className="text-lg">{message}</span>}</p>
      </section>
    </div>
  );
}
