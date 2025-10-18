"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isWorkPage = pathname.startsWith("/work");
  const isHomePage = pathname === "/";

  // Toggle mobile menu
  const toggleMenu = () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-sidebar-overlay');
    
    if (isMenuOpen) {
      document.body.style.overflow = '';
      overlay?.classList.add('hidden');
      sidebar?.classList.add('-translate-x-full');
    } else {
      document.body.style.overflow = 'hidden';
      overlay?.classList.remove('hidden');
      sidebar?.classList.remove('-translate-x-full');
    }
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    const closeMenu = () => {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('mobile-sidebar-overlay');
      
      document.body.style.overflow = '';
      overlay?.classList.add('hidden');
      sidebar?.classList.add('-translate-x-full');
      setIsMenuOpen(false);
    };

    // Close menu on route change
    const handleRouteChange = () => closeMenu();
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [pathname]);

  const handleNavigation = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    // If we're not on the about page, navigate to the about page with the section hash
    if (!pathname.startsWith('/about')) {
      window.location.href = `/about#${sectionId}`;
      return;
    }

    // Close mobile menu if open
    if (isMenuOpen) {
      toggleMenu();
    }

    // Scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      // Small timeout to ensure the menu is closed before scrolling
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update the URL without triggering a page reload
        window.history.pushState({}, '', `#${sectionId}`);
      }, 100);
    }
  };

  const mainNavItems = [
    { 
      name: "About", 
      href: "/about#about-section",
      sectionId: "about-section",
      onClick: (e: React.MouseEvent) => handleNavigation(e, 'about-section')
    },
    { 
      name: "Work", 
      href: "/work"
    },
    { 
      name: "Read", 
      href: "/about#read-section",
      sectionId: "read-section",
      onClick: (e: React.MouseEvent) => handleNavigation(e, 'read-section')
    },
    { 
      name: "Contact", 
      href: "/about#contact-section",
      sectionId: "contact-section",
      onClick: (e: React.MouseEvent) => handleNavigation(e, 'contact-section')
    },
  ];

  const workNavItems = [
    { name: "Go back", type: "back", id: "" },
    { name: "Commercial", type: "section", id: "commercial" },
    { name: "Conservation", type: "section", id: "conservation" },
    { name: "Consulting", type: "section", id: "consulting" },
    { name: "Houses Interiors", type: "section", id: "interiors" },
    { name: "Landscaping", type: "section", id: "landscaping" },
    { name: "Objects", type: "section", id: "objects" },
    { name: "Publications", type: "section", id: "publications" },
    { name: "Reports", type: "section", id: "reports" },
    { name: "Residential", type: "section", id: "residential" },
    { name: "Restoration", type: "section", id: "restoration" },
  ] as const;

  return (
    <div className="min-h-screen bg-[#E4EEF4] flex flex-col">
      {/* Mobile Menu Button - Hidden on desktop */}
      {!isHomePage && (
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white h-[50px] flex items-center justify-between px-4 border-b border-[#ddd]">
          {isWorkPage ? (
            <Link href="/about" className="flex items-center text-[#3C3C34] hover:opacity-70 transition-opacity">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
          ) : (
            <button className="p-2" id="mobile-menu-button" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          )}
          <div className="text-xs text-[#3C3C34]">
            <span className="underline">CEIM DIGITAL</span>
          </div>
        </div>
      )}

      {/* Fixed Top Bar - Hidden on Home Page and mobile */}
      {!isHomePage && (
        <div className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-white h-[50px] items-center justify-between px-8 border-b border-[#ddd]">
          <div className="w-6 h-6 bg-black"></div>
          <div className="text-xs text-[#3C3C34]">
            This website was created by{" "}
            <span className="underline">CEIM DIGITAL</span>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className={`flex flex-col lg:flex-row ${isHomePage ? "" : "pt-[50px]"} min-h-screen`}>
        {/* Mobile Sidebar Overlay */}
        <div id="mobile-sidebar-overlay" className="hidden fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        
        
        <div className="fixed top-0 left-0 h-screen w-[240px] bg-[#E4EEF4] z-40 transform -translate-x-full lg:translate-x-0 lg:top-[50px] lg:h-[calc(100vh-50px)] transition-transform duration-300" 
             id="sidebar">
          <div className="h-full overflow-y-auto no-scrollbar">
            <div className="p-6 pl-10 pt-8 pb-8 flex flex-col h-full">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6 lg:mb-16">
                  <Link href="/" className="block">
                    <h1 className={`${isWorkPage ? "text-[32px] lg:text-[40px]" : "mt-8 text-[40px] lg:text-[48px]"} font-light text-[#3C3C34] leading-none tracking-tight`}>                      Fourem
                    </h1>
                  </Link>
                  <button className="lg:hidden p-2" id="close-sidebar" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                
                <nav className={`flex flex-col ${isWorkPage ? "space-y-8 lg:space-y-16 mt-4 lg:mt-6" : "space-y-4 lg:space-y-6 mt-2"}`}>
                  {isWorkPage ? (
                    <>
                      
                      <Link href="/about" className="block -mt-4 lg:-mt-8 text-[18px] lg:text-[20px] font-light text-[#3C3C34] hover:opacity-70 transition-opacity">
                        ← Go back
                      </Link>

                      {/* Section links (scroll within Work page) */}
                      {workNavItems
                        .filter((i) => i.type === "section")
                        .map((item) => {
                          const defaultHref = pathname === "/work" ? `#${item.id}` : `/work#${item.id}`;
                          return (
                            <Link
                              key={item.id}
                              href={defaultHref}
                              prefetch={false}
                              onClick={(e) => {
                                // If user is on the work page, intercept and do smooth scrolling
                                if (pathname === "/work") {
                                  e.preventDefault();
                                  const target = document.getElementById(item.id);
                                  if (!target) return;

                                  // Scroll the target into view with smooth behavior
                                  target.scrollIntoView({ 
                                    behavior: 'smooth', 
                                    block: 'start',
                                    inline: 'nearest'
                                  });

                                  // Add a brief highlight to the heading for feedback
                                  target.classList.add('scroll-highlight');
                                  setTimeout(() => target.classList.remove('scroll-highlight'), 1000);
                                }
                              }}
                              className="block text-[18px] lg:text-[23px] font-light text-[#3C3C34] hover:opacity-70 transition-opacity font-['Times_New_Roman']"
                              style={{ margin: '0.35rem 0' }}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                    </>
                  ) : (
                    mainNavItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={item.onClick || ((e) => {
                          // Close the mobile menu if open, but allow navigation to proceed
                          if (isMenuOpen) {
                            toggleMenu();
                          }
                        })}
                        className={`block text-[18px] lg:text-[20px] font-light text-[#3C3C34] hover:opacity-70 transition-opacity ${
                          pathname.startsWith(item.href.split('#')[0]) ? "opacity-60" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))
                  )}
                </nav>
              </div>
              
              
              <div className="hidden lg:block mt-auto pt-8 text-xs text-[#3C3C34] opacity-60">
                © {new Date().getFullYear()} Fourem
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Main Content */}
        <main id="work-content" className="flex-1 w-full lg:ml-[240px] px-4 lg:pl-8 lg:pr-16 py-4 lg:py-8">
          {children}
        </main>
      </div>

      {/* Mobile Menu Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const menuButton = document.getElementById('mobile-menu-button');
            const closeButton = document.getElementById('close-sidebar');
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-sidebar-overlay');
            
            function openSidebar() {
              sidebar.classList.remove('-translate-x-full');
              overlay.classList.remove('hidden');
              document.body.style.overflow = 'hidden';
            }
            
            function closeSidebar() {
              sidebar.classList.add('-translate-x-full');
              overlay.classList.add('hidden');
              document.body.style.overflow = '';
            }
            
            if (menuButton) menuButton.addEventListener('click', openSidebar);
            if (closeButton) closeButton.addEventListener('click', closeSidebar);
            if (overlay) overlay.addEventListener('click', closeSidebar);
            
            // Close sidebar when clicking on a link
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
              link.addEventListener('click', () => {
                if (window.innerWidth < 1024) {
                  closeSidebar();
                }
              });
            });
            
            // Handle window resize
            function handleResize() {
              if (window.innerWidth >= 1024) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.add('hidden');
                document.body.style.overflow = '';
              } else if (!sidebar.classList.contains('-translate-x-full') && !overlay.classList.contains('hidden')) {
                closeSidebar();
              }
            }
            
            window.addEventListener('resize', handleResize);
            
            // Initialize sidebar state
            if (window.innerWidth < 1024) {
              closeSidebar();
            }
          });
        `
      }} />
    </div>
  );
}