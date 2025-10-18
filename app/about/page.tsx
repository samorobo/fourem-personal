import SidebarLayout from '@/components/SidebarLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <SidebarLayout>
  
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          <div className="mb-12">
            <h4 className="text-left text-[18px] font-normal text-[#3C3C34] mb-6 px-2">
              About Us
            </h4>
            <div className="relative w-full h-[200px] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/About.avif"
                alt="Architecture Detail"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          
          <div className="mb-12">
            <h2 className="text-left text-[24px] font-medium text-[#3C3C34] mb-6 px-2">
              Architecture
            </h2>
            <div className="text-left px-2">
              <p className='text-[14px] leading-[1.6] text-[#848484] mb-4'>
                Fourem creates rigorous design solutions, rooted in context, that are balanced, 
                economical and authentic. Fourem seek opportunity to create multiple benefits for 
                their clients in every design decision. The results are of exceptional benefit, 
                economy, beauty and wellbeing. Fourem create beautiful works from large scale 
                residential projects to small buildings
              </p>
              <p className='text-[14px] leading-[1.6] text-[#848484]'>
                Good design begins with economy. All elements of nature represent economy as all things exist to 
                suit their purpose. Economy pares down elements to their true necessity and combines focused 
                consideration to create a final form. Beauty is the result. Everybody recognises good design. 
                Fourem produce it
              </p>
            </div>
          </div>

         
          <div className="mb-12">
            <h2 className="text-left text-[24px] font-medium text-[#3C3C34] mb-6 px-2">
              Consultancy
            </h2>
            <div className="text-left px-2">
              <p className='text-[14px] leading-[1.6] text-[#848484]'>
                The practice provides consultancy and specifications for works relating to protected structures and 
                protected urban landscapes. They provide relevant experience in the area of regeneration, urban 
                landscaping, domestic and non-domestic building design, commissioning of works, feasibility, 
                impact assessment & planning.
              </p>
            </div>
          </div>

         
          <div id="read-section" className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[18px] font-medium text-[#3C3C34] px-2">
                Read
              </h2>
              <a href="/read" className="text-[13px] text-[#3C3C34] hover:opacity-70">
                See all →
              </a>
            </div>
            <div className="bg-whimte p-4 rounded-lg">
              <h3 className="text-[20px] font-normal text-[#3C3C34] mb-2">
                Ireland and the New Architecture
              </h3>
              <p className="text-[14px] text-[#848484] mb-4">
                Hegarty, John, Streetscapes of County Cork, Cork County Council, 2023 - page 7 - 9
              </p>
            </div>
          </div>

          
          <div id="contact-section" className="pb-12">
            <h2 className="text-left text-[24px] font-light text-[#3C3C34] mb-6 px-2">
              Contact Us
            </h2>
            <div className="bg-whiote p-4 rounded-lg">
              <h3 className="text-[24px] font-light text-[#3C3C34] mb-4">
                Fourem
              </h3>
              <div className="text-[#848484] space-y-2">
                <p>9 Sidney Place</p>
                <p>Wellington Road</p>
                <p>Cork</p>
                <p>Ireland</p>
                <p>T23KX89</p>
                <p className="pt-2">Phone Number: 021 4550322</p>
                <p>
                  <a href="mailto:post@fourem.ie" className="text-[#3C3C34] hover:opacity-70">
                    post@fourem.ie
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View - Visible only on desktop devices */}
      <div className="hidden md:block max-w-[1440px] mx-auto">
        
        <div id="about-section" className="mb-20 relative -mr-6">
          <h4 className="text-right text-[20px] -mr-6 font-normal text-[#3C3C34] mb-10 pr-4">
            About Us
          </h4>
          <div className="w-full max-w-[650px] ml-auto relative">
            <div className="relative -mt-4 w-full h-[300px] bg-gray-100 ">
              <Image
                src="/images/About.avif"  
                alt="Architecture Detail"
                fill
                className="object-cover"
                priority
                
              />
            </div>
          </div>
        </div>

       
        <div className="mb-20 -mt-12">
          <h2 className="text-right mr-44 text-[30px] font-medium text-[#3C3C34] mb-10 pr-4">
            Architecture
          </h2>
          <div className="text-right -mt-8 -mr-4">
            <div>
            <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>Fourem creates rigorous design solutions, rooted in context, that are balanced, 
              economical and</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>authentic. Fourem seek opportunity to create multiple benefits for 
              their clients in every design</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>decision. The results are of exceptional benefit, economy, 
              beauty and wellbeing. Fourem create</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2 mr-[76px]'>beautiful works from large scale residential projects to small buildings</p>
              </div>

              <div className='mt-8'>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>Good design begins with economy. All elements of nature represent economy as all things exist to</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>suit their purpose. 
              Economy pares down elements to their true necessity and combines focused</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>consideration to create a final form. 
              Beauty is the result. Everybody recognises good design.</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2 mr-[222px]'>Fourem produce it</p>
              </div>
          </div>
        </div>

        
        <div className="mb-20">
          <h2 className="text-right text-[30px] font-light text-[#3C3C34] mb-10 pr-4 -mr-7">
            Consultancy
          </h2>
          <div className="text-right -mr-4 -mt-8">
            <p className='text-[15px] leading-[1.4] text-[#848484] mb-2 mr-1'>
            The practice provides consultancy and specifications for works relating to protected structures and
            </p>
            <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>protected 
              urban landscapes. They provide relevant experience in the area of regeneration, urban</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2 ml-2'>landscaping, domestic and 
              non-domestic building design, commissioning of works, feasibility,</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>impact assessment & planning.</p>
          </div>
        </div>

        
        <div id="read-section" className="mb-20 mt-12 px-4 lg:px-0 lg:-mr-8">
          <h2 className="text-right text-[20px]  font-medium text-[#3C3C34] mb-10 pr-4 mr-2">
            Read
          </h2>
          <div className="text-right -mt-4">
            <h3 className="text-[30px] font-sans font-normal text-[#3C3C34] mb-4 mr-4">
              Ireland and the New Architecture
            </h3>
            <p className="text-[16px] text-[#848484] mb-8 -mt-2 mr-4">
              Hegarty, John, Streetscapes of County Cork, Cork County Council, 2023 - page 7 - 9
            </p>
            <a href="/read" className="inline-block  mr-4 bg-[#4A4A3E] text-white px-6 py-3 rounded-full text-[13px] hover:bg-[#3C3C34] transition-colors">
              See all → 
            </a>
          </div>
        </div>

        
        <div id="contact-section" className="pb-20 -mr-4 mt-36">
          <h2 className="text-right text-[40px] font-light text-[#3C3C34] mb-10 pr-0 -mr-1">
            Contact Us
          </h2>
          <div className="text-right">
            <h3 className="text-[32px] -mt-4 font-light text-[#3C3C34] mb-8 ">
              Fourem
            </h3>
            <div className=" text-[#848484] space-y-0 leading-[1.6] ">
              <p className='text-[16px]'>9 Sidney Place</p>
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
    </SidebarLayout>
  );
}