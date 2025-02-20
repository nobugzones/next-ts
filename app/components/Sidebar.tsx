"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"; // Import arrow icons

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest("#sidebar, #toggle-button")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* 🟢 Minimal Arrow Button for Sidebar Toggle */}
      <button
        id="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-16 left-2 z-50 p-1 bg-gray-900 text-white rounded-full transition-transform ${
          isOpen ? "translate-x-64" : "translate-x-0"
        }`}
      >
        {isOpen ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
      </button>

      {/* 🟢 Sidebar (Collapsible with Arrow Toggle) */}
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 h-full w-64 bg-[#90Aead] shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 pt-20">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Menu</h2>
          <nav className="flex flex-col space-y-4">
            <Link href="/home" className="text-lg text-gray-900 hover:text-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="text-lg text-gray-900 hover:text-gray-700" onClick={() => setIsOpen(false)}>Pickleball</Link>
            <Link href="/projects" className="text-lg text-gray-900 hover:text-gray-700" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/music" className="text-lg text-gray-900 hover:text-gray-700" onClick={() => setIsOpen(false)}>Music</Link>
            {/* <Link href="/store" className="text-lg text-gray-900 hover:text-gray-700" onClick={() => setIsOpen(false)}>Store</Link> */}
          </nav>
        </div>
      </aside>
    </>
  );
}
