"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const pathname = usePathname();

  const isWorkPage = pathname.startsWith('/work');
  
  const mainNavItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Read", href: "/read" },
    { name: "Contact", href: "/contact" },
  ];

  const workNavItems = [
    { name: "Go back", href: "/" },
    { name: "Commercial", href: "/work/commercial" },
    { name: "Conservation", href: "/work/conservation" },
    { name: "Consulting", href: "/work/consulting" },
    { name: "Houses Interiors", href: "/work/houses-interiors" },
    { name: "Landscaping", href: "/work/landscaping" },
    { name: "Objects", href: "/work/objects" },
    { name: "Publications", href: "/work/publications" },
    { name: "Reports", href: "/work/reports" },
    { name: "Residential", href: "/work/residential" },
    { name: "Restoration", href: "/work/restoration" },
  ];

  return (
    <div className="min-h-screen bg-[#E4EEF4] flex flex-col">
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white h-[50px] flex items-center justify-between px-8 border-b border-[#ddd]">
        <div className="w-6 h-6 bg-black"></div>
        <div className="text-xs text-[#3C3C34]">
          This website was created by{" "}
          <span className="underline">CEIM DIGITAL</span>
        </div>
      </div>

      <div className="flex-1 flex pt-[50px]">
        {/* Fixed Sidebar */}
        <aside className="w-[240px] pl-10 pt-8 fixed top-[50px] left-0 bottom-0 overflow-y-auto">
          <Link href="/" className="block mb-20">
            <h1 className={`${isWorkPage ? 'text-[40px]' : 'text-[48px]'} font-light text-[#3C3C34] leading-none tracking-tight`}>
              Fourem
            </h1>
          </Link>

          <nav className={`-mt-12 space-y-${isWorkPage ? '6' : '8'}`}>
            {isWorkPage ? (
              <>
                <Link
                  href="/"
                  className="block text-[20px] font-light text-[#3C3C34] hover:opacity-70 transition-opacity mb-2"
                >
                  ← Go back
                </Link>
                {workNavItems.slice(1).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-[23px] font-light text-[#3C3C34] hover:opacity-70 transition-opacity ${
                      pathname === item.href ? "opacity-60" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </>
            ) : (
              mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-[30px] font-light text-[#3C3C34] hover:opacity-70 transition-opacity ${
                    pathname === item.href ? "opacity-60" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))
            )}
          </nav>
        </aside>

        {/* Scrollable Main Content */}
        <main className="flex-1 ml-[240px] pl-8 pr-16 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
