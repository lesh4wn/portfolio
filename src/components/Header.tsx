import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link
              href="#education-experience"
              className="text-gray-600 hover:text-gray-900"
            >
              Education
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-gray-900"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
