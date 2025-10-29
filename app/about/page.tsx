"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import WorkSidebar from '@/components/WorkSidebar';

// Image arrays
const houseImages = [
  '/images/01 Houses (1).jpg',
  '/images/02 Houses (1).jpg',
  '/images/003 Houses (1).jpg',
  '/images/04 Houses (1).JPG',
  '/images/05 Houses (1).jpg',
  '/images/06 Houses (1).jpg',
];

const conservationImages = [
  '/images/01 Conservation  (1).jpg',
  '/images/02 Conservation.jpg',
  '/images/03 Conservation.jpg',
  '/images/04 conservation.jpg',
  '/images/05 Conservation.jpg',
  '/images/06 conservation.jpg',
  '/images/07 Conservation.jpg',
  '/images/08 Conservation.jpg',
];

const restorationImages = [
  '/images/01 Restoration.jpg',
  '/images/02 Restoration.jpg',
  '/images/03 Restoration.jpg',
  '/images/04 Restoration.jpg',
  '/images/05 Restoration.jpg',
  '/images/06 Restoration.jpg',
  '/images/07 Restoration.jpg',
  '/images/W H 2 PHOTO 15 (Edited).jpg'
];

const landscapingImages = [
  '/images/03 Landscape.JPG',
];

const reportsImages = [
  '/images/01 reports.jpg',
  '/images/02 reports.jpg',
  '/images/03 reports.jpg',
  '/images/04 reports.jpg',
  '/images/05 reports.jpg',
];

const publicationsImages = [
  '/images/Innishannon Report Cover.jpg',
  '/images/Streetscapes of County Cork.JPG'
];

const interiorsImages = [
  '/images/interiors 01.jpg',
  '/images/interiors 02.jpg',
  '/images/interiors 004.jpg',
  '/images/interiors 05.jpg',
  '/images/interiors 06.jpg',
  '/images/interiors 07.jpg',
];

const objectsImages = [
  '/images/01 Object.jpg',
  '/images/02 Object.jpg',
  '/images/03 Object.jpg',
  '/images/Ballinora church18.jpg',
];

function ImageCarousel({ images }: { images: string[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'prev' | 'next') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Approximate width of one image + gap
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'next' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-[#E8E8E8] w-full h-[200px] group">
      {/* Scrollable container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 bg-[#E8E8E8] overflow-x-auto h-full scrollbar-hide"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="flex-shrink-0 h-full"
            style={{ width: 'calc(33.333% - 11px)' }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {images.length > 3 && (
        <>
          <button
            onClick={() => scroll('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            style={{ fontSize: '20px' }}
          >
            ‹
          </button>
          <button
            onClick={() => scroll('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            style={{ fontSize: '20px' }}
          >
            ›
          </button>
        </>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default function UnifiedAboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReadModalOpen, setIsReadModalOpen] = useState(false);

  const workCategories = [
    { id: 'houses', label: 'Houses' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'conservation', label: 'Conservation' },
    { id: 'restoration', label: 'Restoration' },
    { id: 'urban-design', label: 'Urban Design' },
    { id: 'landscaping', label: 'Landscaping' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'reports', label: 'Reports' },
    { id: 'publications', label: 'Publications' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'objects', label: 'Objects' }
  ];


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#E8E8E8]">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-6 py-4">
          <h1 
            className="text-[24px] text-[#3C3C34] cursor-pointer hover:opacity-70 transition-opacity"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
            onClick={() => window.location.href = '/'}
          >
            Fourem
          </h1>
        </div>

        {/* Desktop Header */}
        <nav className="hidden lg:flex max-w-[1440px] mx-auto px-6 lg:px-12 py-4 justify-between items-center">
          <h1 
            className="text-[24px] ml-6 text-[#3C3C34] cursor-pointer hover:opacity-70 transition-opacity"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
            onClick={() => window.location.href = '/'}
          >
            Fourem
          </h1>
          <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about-section')}
            className="text-black hover:opacity-70 text-[14px] font-medium transition-opacity"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('read-section')}
            className="text-black hover:opacity-70 text-[14px] font-medium transition-opacity"
          >
            Read
          </button>
          <button
            onClick={() => scrollToSection('houses')}
            className="text-black hover:opacity-70 text-[14px] font-medium transition-opacity"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="text-black hover:opacity-70 text-[14px] font-medium transition-opacity"
          >
            Contact
          </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Button - Hidden when modal is open */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`lg:hidden fixed top-4 right-6 z-[60] bg-white text-black px-4 py-2.5 rounded-full text-sm shadow-md flex items-center gap-2 hover:bg-gray-50 transition-colors ${
          isReadModalOpen ? 'hidden' : ''
        }`}
        aria-label="Open menu"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-16 right-6 bg-white rounded-lg shadow-lg p-6" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => scrollToSection('about-section')} className="block w-full text-left py-2 text-black hover:opacity-70">About</button>
            <button onClick={() => scrollToSection('read-section')} className="block w-full text-left py-2 text-black hover:opacity-70">Read</button>
            <button onClick={() => scrollToSection('houses')} className="block w-full text-left py-2 text-black hover:opacity-70">Work</button>
            <button onClick={() => scrollToSection('contact-section')} className="block w-full text-left py-2 text-black hover:opacity-70">Contact</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 pb-20">
        <div id="about-section" className="mb-20 relative">
          <h4 className="text-left lg:text-right text-[20px] font-normal lg:-mr-[34px] text-[#3C3C34] mb-10 lg:pr-4">
            About Us
          </h4>
          <div className="w-full lg:max-w-[650px] lg:ml-auto relative">
            {/* <div className="relative w-full h-[300px] bg-gray-100 overflow-hidden">
              <Image
                src="/images/About.avif"
                alt="Architecture Detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 650px"
                priority
              />
            </div> */}
          </div>
        </div>

        <div className="mb-20 lg:-mr-[16px]">
          <h2 className="text-left lg:text-right text-[30px] font-medium text-[#3C3C34] mb-10 lg:pr-4 lg:-mr-[18px]">
            Architecture
          </h2>
          {/* Mobile view - flowing paragraphs */}
          <div className="lg:hidden text-left">
            <p className="text-[15px] leading-[1.6] text-[#848484] mb-4">
              Fourem creates rigorous design solutions, rooted in context, that are balanced, economical and authentic. Fourem seek opportunity to create multiple benefits for their clients in every design decision. The results are of exceptional benefit, economy, beauty and wellbeing. Fourem create beautiful works from large scale residential projects to small buildings
            </p>
            <p className="text-[15px] leading-[1.6] text-[#848484]">
              Good design begins with economy. All elements of nature represent economy as all things exist to suit their purpose. Economy pares down elements to their true necessity and combines focused consideration to create a final form. Beauty is the result. Everybody recognises good design. Fourem produce it
            </p>
          </div>
          {/* Desktop view - original split lines */}
          <div className="hidden lg:block text-right">
            <p className="text-[15px] leading-[1.4] text-[#848484] mb-2">
              Fourem creates rigorous design solutions, rooted in context, that are balanced, economical and
            </p>
            <p className="text-[15px] leading-[1.4] text-[#848484] mb-2">
              authentic. Fourem seek opportunity to create multiple benefits for their clients in every design
            </p>
            <p className="text-[15px] leading-[1.4] text-[#848484] mb-2">
              decision. The results are of exceptional benefit, economy, beauty and wellbeing. Fourem create
            </p>
            <p className="text-[15px] leading-[1.4] text-[#848484] mb-8">
              beautiful works from large scale residential projects to small buildings
            </p>
            <p className="text-[15px] leading-[1.4] text-[#848484] mb-2">
              Good design begins with economy. All elements of nature represent economy as all things exist to
            </p>
            <p className="text-[15px] leading-[1.4] text-[#848484] mb-2">
              suit their purpose. Economy pares down elements to their true necessity and combines focused
            </p>
            <p className="text-[15px] leading-[1.4] text-[#848484] mb-2">
              consideration to create a final form. Beauty is the result. Everybody recognises good design.
            </p>
            <p className="text-[15px] leading-[1.4] text-[#848484]">
              Fourem produce it
            </p>
          </div>
        </div>

        <div className="mb-20 lg:-mr-[16px]">
          <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10 lg:pr-4">
            Consultancy
          </h2>
          {/* Mobile view */}
          <div className="lg:hidden text-left">
            <p className="text-[15px] leading-[1.6] text-[#848484]">
              The practice provides consultancy and specifications for works relating to protected structures and protected urban landscapes. They provide relevant experience in the area of regeneration, urban landscaping, domestic and non-domestic building design, commissioning of works, feasibility, impact assessment & planning.
            </p>
          </div>
          {/* Desktop view */}
          <div className="hidden lg:block text-right">
            <p className="text-[15px] leading-[1.4] text-[#848484] mb-2">
              The practice provides consultancy and specifications for works relating to protected structures and
            </p>
            <p className="text-[15px] leading-[1.4] text-[#848484] mb-2">
              protected urban landscapes. They provide relevant experience in the area of regeneration, urban
            </p>
            <p className="text-[15px] leading-[1.4] text-[#848484] mb-2">
              landscaping, domestic and non-domestic building design, commissioning of works, feasibility,
            </p>
            <p className="text-[15px] leading-[1.4] text-[#848484]">
              impact assessment and planning.
            </p>
          </div>
        </div>

        {/* Work Section with Sidebar */}
        <div id="work-section" className="scroll-mt-24 relative">
          <div className="flex gap-8">
            {/* Sticky Sidebar - Only visible on desktop */}
            <div className="hidden lg:block w-[220px] flex-shrink-0">
              <div className="sticky top-24">
                <WorkSidebar 
                  isVisible={true} 
                  onNavigate={scrollToSection}
                />
              </div>
            </div>

            {/* Work Content */}
            <div className="flex-1 lg:-mr-[16px]">
              <h2 className="text-left lg:text-right text-[20px] font-normal text-[#3C3C34] mb-7">
                Work
              </h2>
              <div id="houses" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Houses
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left mb-8">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem seek design solutions that ensure economical results, balancing approach to create inspiring places to live. They create enduring architecture that promotes wellbeing, is grounded in the landscape and focuses on peace and serenity internally.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right mb-8">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem seek design solutions that ensure economical results, balancing approach to
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                create inspiring places to live. They create enduring architecture that promotes
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                wellbeing, is grounded in the landscape and focuses on peace and serenity internally.
              </p>
            </div>
            <div className="w-full lg:max-w-[650px] lg:ml-auto">
              <ImageCarousel images={houseImages} />
            </div>
          </div>

          <div id="residential" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Residential
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem achieve exceptional outcomes for residential development projects. The practice understands the requirement to achieve a return from investment in all its forms. They listen to the requirements of any commercial venture, enhancing the outcome of the brief through every design consideration. Fourem understand the process of achieving the goals of a development and the permissions required to carry out works seeking opportunity in every aspect of a project.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem achieve exceptional outcomes for residential development projects. The practice
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                understands the requirement to achieve a return from investment in all its forms. They
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                listen to the requirements of any commercial venture, enhancing the outcome of the brief
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                through every design consideration. Fourem understand the process of achieving the
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                goals of a development and the permissions required to carry out works seeking
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                opportunity in every aspect of a project.
              </p>
            </div>
          </div>

          <div id="commercial" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Commercial
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem understand the process of achieving the goals of a commercial project and the permissions required to carry out works. They listen to the requirements of the brief maintaining the commercial identity of a project to the last detail balancing economy with practicality and always achieving the impact required.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem understand the process of achieving the goals of a commercial project and the
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                permissions required to carry out works. They listen to the requirements of the brief
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                maintaining the commercial identity of a project to the last detail balancing economy
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                with practicality and always achieving the impact required.
              </p>
            </div>
          </div>

          <div id="conservation" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Conservation
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left mb-8">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem are experts in Architectural Conservation employing a balanced, economical and informed approach to the conservation of existing buildings; often combining their work with sensitive new intervention. In conservation they aim to maintain as much of the existing fabric of any significant structure or setting as is possible. When intervention is required, they know how to protect the integrity of an existing place while achieving the project goals and presenting historic places with great skill.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right mb-8">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem are experts in Architectural Conservation employing a balanced, economical and
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                informed approach to the conservation of existing buildings; often combining their work
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                with sensitive new intervention. In conservation they aim to maintain as much of the
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                existing fabric of any significant structure or setting as is possible. When intervention is
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                required, they know how to protect the integrity of an existing place while achieving the
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                project goals and presenting historic places with great skill.
              </p>
            </div>
            <div className="w-full lg:max-w-[650px] lg:ml-auto">
              <ImageCarousel images={conservationImages} />
            </div>
          </div>

          <div id="restoration" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Restoration
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left mb-8">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem have expert knowledge of the development of Irish Architecture through the centuries. Fourem produce rigorous, informed and accurate restoration of historic architecture. In restoration they maintain an academic level of cultural accuracy and authenticity combined with a deep understanding of the presentation of historic architecture. Fourem catalogue and study specific detail elements of historic design to inform their work. They closely question the possibility of current bias to ensure they only produce accurate restoration.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right mb-8">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem have expert knowledge of the development of Irish Architecture through the
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                centuries. Fourem produce rigorous, informed and accurate restoration of historic
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                architecture. In restoration they maintain an academic level of cultural accuracy and
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                authenticity combined with a deep understanding of the presentation of historic
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                architecture. Fourem catalogue and study specific detail elements of historic design to
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                inform their work. They closely question the possibility of current bias to ensure they
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                only produce accurate restoration.
              </p>
            </div>
            <div className="w-full lg:max-w-[650px] lg:ml-auto">
              <ImageCarousel images={restorationImages} />
            </div>
          </div>

          <div id="urban-design" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Urban Design
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem understand the development of historic towns and cities and reinterpret these places with great care. An expert knowledge of urban space and the detail of historic urban construction allows Fourem to reinterpret historic space and develop new architecture economically resulting in exceptional civic benefit and better returns for investment. Fourem understand the urban context and detail of Irish towns and cities with specific knowledge of the Munster area.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem understand the development of historic towns and cities and reinterpret these
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                places with great care. An expert knowledge of urban space and the detail of historic
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                urban construction allows Fourem to reinterpret historic space and develop new
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                architecture economically resulting in exceptional civic benefit and better returns for
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                investment. Fourem understand the urban context and detail of Irish towns and cities
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                with specific knowledge of the Munster area.
              </p>
            </div>
          </div>

          <div id="landscaping" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Landscaping
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left mb-8">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem are experts in urban landscaping and understand the intangible character of the historic context of urban space and detail. They take an economical approach, informed by knowledge of landscape forms and soft intervention. The practice understands design that is appropriate to context and getting the best from resources.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right mb-8">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem are experts in urban landscaping and understand the intangible character of the
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                historic context of urban space and detail. They take an economical approach, informed
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                by knowledge of landscape forms and soft intervention. The practice understands design
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                that is appropriate to context and getting the best from resources.
              </p>
            </div>
            <div className="w-full lg:max-w-[650px] lg:ml-auto">
              <ImageCarousel images={landscapingImages} />
            </div>
          </div>

          <div id="consulting" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Consulting
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem have a unique overview of design and investment requirements. They collaborate to support successful outcomes for private and public projects of greatly varying scale and requirements. Fourem seek opportunity for design teams, advising on conservation and development that is part of protected landscapes and structures. Fourem create a route to exceptional returns by awareness of what makes a project successful, combining that awareness with expertise and exceptional service that enables projects to reach multi benefit, economical solutions.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem have a unique overview of design and investment requirements. They
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                collaborate to support successful outcomes for private and public projects of greatly
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                varying scale and requirements. Fourem seek opportunity for design teams, advising on
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                conservation and development that is part of protected landscapes and structures.
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem create a route to exceptional returns by awareness of what makes a project
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                successful, combining that awareness with expertise and exceptional service that enables
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                projects to reach multi benefit, economical solutions.
              </p>
            </div>
          </div>

          <div id="reports" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Reports
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left mb-8">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem provide reporting services based on grade 1 conservation and architectural and landscaping expertise for private works and public projects. Fourem ensure that their reports are concise, informative and reflect project outcomes, supported by rigorous expert knowledge. Fourem consulting create reports that are organised clearly with exceptional benefit in the planning and construction process. They have an evolved awareness of economic realities and negotiation backed up by vast knowledge of conservation, restoration and building in context.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right mb-8">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem provide reporting services based on grade 1 conservation and architectural and
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                landscaping expertise for private works and public projects. Fourem ensure that their
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                reports are concise, informative and reflect project outcomes, supported by rigorous
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                expert knowledge. Fourem consulting create reports that are organised clearly with
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                exceptional benefit in the planning and construction process. They have an evolved
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                awareness of economic realities and negotiation backed up by vast knowledge of
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                conservation, restoration and building in context.
              </p>
            </div>
            <div className="w-full lg:max-w-[650px] lg:ml-auto">
              <ImageCarousel images={reportsImages} />
            </div>
          </div>

          <div id="publications" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Publications
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left mb-8">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem create publications based on their unique expertise and outlook for private and public interests. Their rigour in the process of research, writing, editing and an attention to detail combined with a balanced and ingenious approach creates exceptional publications. The practice edits and presents publications ready for printing and presents the work of others as required.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right mb-8">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem create publications based on their unique expertise and outlook for private and
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                public interests. Their rigour in the process of research, writing, editing and an attention
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                to detail combined with a balanced and ingenious approach creates exceptional
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                publications. The practice edits and presents publications ready for printing and presents
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                the work of others as required.
              </p>
            </div>
            <div className="w-full lg:max-w-[650px] lg:ml-auto">
              <ImageCarousel images={publicationsImages} />
            </div>
          </div>

          <div id="interiors" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Interiors
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left mb-8">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem create enduring interiors for homes and commercial projects. Their work carefully reflects the ambition of their clients seeking more than expectations within defined resources. Fourem understand what creates impact and how to achieve a desired result with great subtlety and lasting authenticity rooted in the desires of the people they represent.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right mb-8">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem create enduring interiors for homes and commercial projects. Their work
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                carefully reflects the ambition of their clients seeking more than expectations within
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                defined resources. Fourem understand what creates impact and how to achieve a desired
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                result with great subtlety and lasting authenticity rooted in the desires of the people they
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                represent.
              </p>
            </div>
            <div className="w-full lg:max-w-[650px] lg:ml-auto">
              <ImageCarousel images={interiorsImages} />
            </div>
          </div>

          <div id="objects" className="mb-20 scroll-mt-24">
            <h2 className="text-left lg:text-right text-[30px] font-light text-[#3C3C34] mb-10">
              Objects
            </h2>
            {/* Mobile */}
            <div className="lg:hidden text-left mb-8">
              <p className="text-[15px] leading-[1.6] text-[#848484]">
                Fourem have expert knowledge of the development of Irish Architecture through the centuries. Fourem produce rigorous, informed and accurate restoration of historic architecture. In restoration they maintain an academic level of cultural accuracy and authenticity combined with a deep understanding of the presentation of historic architecture. Fourem catalogue and study specific detail elements of historic design to inform their work. They closely question the possibility of current bias to ensure they only produce accurate restoration.
              </p>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block text-right mb-8">
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                Fourem have expert knowledge of the development of Irish Architecture through the
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                centuries. Fourem produce rigorous, informed and accurate restoration of historic
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                architecture. In restoration they maintain an academic level of cultural accuracy and
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                authenticity combined with a deep understanding of the presentation of historic
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                architecture. Fourem catalogue and study specific detail elements of historic design to
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                inform their work. They closely question the possibility of current bias to ensure they
              </p>
              <p className="text-[15px] leading-[1.2] text-[#848484] mb-2">
                only produce accurate restoration.
              </p>
            </div>
            <div className="w-full lg:max-w-[650px] lg:ml-auto">
              <ImageCarousel images={objectsImages} />
            </div>
          </div>
            </div>
          </div>
        </div>

        <div id="read-section" className="mb-20 scroll-mt-24 lg:-mr-[30px]">
          <h2 className="text-left lg:text-right text-[20px] font-medium text-[#3C3C34] mb-10 lg:pr-4">
            Read
          </h2>
          <div className="text-left lg:text-right">
            <h3 className="text-[30px] font-sans font-normal text-[#3C3C34] mb-4 lg:mr-4">
              Ireland and the New Architecture
            </h3>
            <p className="text-[16px] text-[#848484] mb-8 -mt-2 lg:mr-4">
              Hegarty, John, Streetscapes of County Cork, Cork County Council, 2023 - page 7 - 9
            </p>
            <button 
              onClick={() => setIsReadModalOpen(true)}
              className="inline-block lg:mr-4 bg-[#4A4A3E] text-white px-6 py-3 rounded-full text-[13px] hover:bg-[#3C3C34] transition-colors"
            >
              See all →
            </button>
          </div>
        </div>

        <div id="contact-section" className="pb-20 scroll-mt-24 lg:-mr-[16px]">
          <h2 className="text-left lg:text-right text-[20px] -mt-[2px] font-light text-[#3C3C34] mb-10 lg:pr-0">
            Contact Us
          </h2>
          <div className="text-left lg:text-right">
            <h3 className="text-[32px] -mt-[18px] font-light text-[#3C3C34] mb-8">
              Fourem
            </h3>
            <div className="text-[#848484] space-y-0 leading-[1.6]">
              <p className="text-[15px]">9 Sidney Place</p>
              <p>Wellington Road</p>
              <p>Cork</p>
              <p>Ireland</p>
              <p>T23KX89</p>
              <p className="mt-3">Phone Number: 021 4550322</p>
              <p className="mt-2">
                <a href="mailto:post@fourem.ie" className="hover:text-[#3C3C34]">
                  post@fourem.ie
                </a>
              </p>
              <p className="mt-4 text-[16px] leading-[1.5]">Form Four Limited, t/a Fourem</p>
              <p className="text-[16px] leading-[1.5]">
                Registered In Ireland No: 337573 at 9a Sidney Place, Wellington Road, Cork T23 KX89 Director: John Hegarty
              </p>
              <p className="text-[16px] mt-1 leading-[1.5]">TIN: IE 6357573T</p>
            </div>
          </div>
        </div>
      </div>

      {/* Read Modal - Full width on mobile, right half on desktop */}
      {isReadModalOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Left half - semi-transparent overlay (hidden on mobile) */}
          <div 
            className="hidden lg:block lg:w-1/2 bg-black/20"
            onClick={() => setIsReadModalOpen(false)}
          />
          
          {/* Modal content - full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 bg-white h-screen overflow-y-auto relative">
            {/* Close button - visible on mobile */}
            <button
              onClick={() => setIsReadModalOpen(false)}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 text-gray-600
               hover:text-gray-800 text-3xl lg:text-2xl z-10 w-10 h-10 flex items-center justify-center"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Modal content */}
            <div className="px-8 pt-16 pb-16 lg:px-16 lg:py-20 max-w-3xl lg:ml-auto">
              {/* Read heading aligned right - below close button */}
              <div className="text-right mb-12 lg:mb-16 mt-2">
                <h2 className="text-[20px]  font-medium text-[#3C3C34]">
                  Read
                </h2>
              </div>

              {/* Article 1 */}
              <div className="mb-20">
                <h3 className="text-[26px] font-normal text-[#3C3C34] mb-8 text-right">
                  Ireland and the New Architecture
                </h3>
                <div className="text-[13px] leading-[1.8] text-[#848484] text-right space-y-6">
                  <p>
                    A new architectural expression arrived in Ireland in the 18th century. Clean simple lines were introduced in architecture and detail inspired by the Palladian style. Dublin from the Westlin Hotel of the 17th Century, Irish towns and cities began to represent a built form of the age of Enlightenment that was sweeping across Europe. Dublin&apos;s work greatly influenced Ireland. This was the &apos;Irish Age of Reason&apos; in architecture and formed the greatest period of architectural development in Ireland. It was a period of growth and optimism, brought about by relative peace and trade. In the period between 1750 and 1840, the population of Ireland grew from 2.5 million to 8.5 million. This resulted in a period of plenty and of optimism. Villages, towns and cities were almost entirely rebuilt and, in some cases, redesigned to Classical Plan form. Civic buildings in Ireland which had to be built, provided the design and architectural inspiration in many parts after the 18th century. The architecture of Ireland was a form of manifestations in many parts after the 18th century. The architecture of Ireland was greatly preserved until late in the 20th century.
                  </p>
                  <p>
                    Economy of thought and ingenious consideration of design produced great beauty effortlessly. In the Irish Age of Reason, the composition of the art of reason of the architecture clearly demonstrates the &apos;Specific simplicity&apos; and practicality of an ambitious age of explosion in Ireland and in County Cork.
                  </p>  
                </div>
              </div>

              {/* Article 2 */}
              <div className="mb-20">
                <h3 className="text-[26px] font-normal text-[#3C3C34] mb-8 text-right">
                  The Specific Architecture of County Cork
                </h3>
                <div className="text-[13px] leading-[1.8] text-[#848484] text-right space-y-6">
                
                    <p>County Cork towns were greatly influenced by ideas for building that came from northern Europe</p> 
                    <p>combined with local circumstances and available materials. Dutch architecture heavily influenced</p> 
                    <p>Youghal Cork and Kinsale in the 16th and 17th Century. This is seen in the steeply pitched roofs</p> 
                    <p>and curved Dutch gables employed in each of the three places. All three also used slate hanging to</p> 
                    <p>keep buildings dry which is stiil seen in Normandy and in Devon, Cornwall and Somerset. Trade</p> 
                    <p>and new ideas came quickly across the County Cork by sea and these new ideas in architecture translated </p>
                    <p>quickly across the county.</p>
                  
                  <div>
          <div className="text-[13px] leading-[1.8] text-[#848484] text-right space-y-6">
                    
                    <p>In the 17th, 18th and 19th centuries people travelled to the birthplace of Classicism in Greek and</p> 
                    <p>Italian states to examine  classical details and proportions and they published their studies. Classical</p> 
                    <p></p>language was then reinterpreted for use in new expression of irish architecture often based on 
                    <p>the principle of Andrea Palladio who had written his Four Books on Architecture in the 17th</p>
                    <p>century. Classicism based on symmetry and plain exteral detail became the architectural language</p> 
                    <p>of a modern, progressive Ireland. The country took this design ethic on board with great enthusiasm</p> 
                    <p>in the latter 18th century in more peaceful times.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}