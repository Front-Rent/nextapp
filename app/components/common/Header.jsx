"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct import for App Router

export default function Header() {
  const pathname = usePathname(); // Correct hook for App Router

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex gap-4">
          {navItems.map(({ name, path }) => (
              <Link
                  key={path}
                  href={path}
                  className={`${
                      pathname === path ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-300`}
              >
                {name}
              </Link>
          ))}
        </nav>
      </header>
  );
}
