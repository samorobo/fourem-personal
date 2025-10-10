import SidebarLayout from '@/components/SidebarLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <SidebarLayout>
      <div className="max-w-[1440px] mx-auto">
        {/* About Us Section */}
        <div className="mb-20 relative">
          <h4 className="text-right text-[20px] font-normal text-[#3C3C34] mb-10 pr-4">
            About Us
          </h4>
          <div className="w-full max-w-[650px] ml-auto relative">
            <div className="relative w-full h-[500px] bg-gray-100">
              <Image
                src="/images/About.avif"  // Replace with your actual image path
                alt="Architecture Detail"
                fill
                className="object-cover"
                priority
                
              />
            </div>
          </div>
        </div>

        {/* Architecture Section */}
        <div className="mb-20">
          <h2 className="text-right mr-44 text-[40px] font-light text-[#3C3C34] mb-10 pr-4">
            Architecture
          </h2>
          <div className="text-right">
            <div>
            <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>Fourem creates rigorous design solutions, rooted in context, that are balanced, 
              economical and</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>authentic. Fourem seek opportunity to create multiple benefits for 
              their clients in every design</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>decision. The results are of exceptional benefit, economy, 
              beauty and wellbeing. Fourem create</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2 mr-24'>beautiful works from large scale residential projects to small buildings</p>
              </div>

              <div className='mt-8'>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>Good design begins with economy. All elements of nature represent economy as all things exist to</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>suit their purpose. 
              Economy pares down elements to their true necessity and combines focused</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>consideration to create a final form. 
              Beauty is the result. Everybody recognises good design.</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2 mr-[244px]'>Fourem produce it</p>
              </div>
          </div>
        </div>

        {/* Consultancy Section */}
        <div className="mb-20">
          <h2 className="text-right text-[40px] font-light text-[#3C3C34] mb-10 pr-4">
            Consultancy
          </h2>
          <div className="text-right">
            <p className='text-[15px] leading-[1.4] text-[#848484] mb-2 mr-6'>
            The practice provides consultancy and specifications for works relating to protected structures and
            </p>
            <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>protected 
              urban landscapes. They provide relevant experience in the area of regeneration, urban</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2 ml-2'>landscaping, domestic and 
              non-domestic building design, commissioning of works, feasibility,</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>impact assessment & planning.</p>
          </div>
        </div>

        {/* Read Section */}
        <div className="mb-20">
          <h2 className="text-right text-[20px] font-normal text-[#3C3C34] mb-10 pr-4">
            Read
          </h2>
          <div className="text-right">
            <h3 className="text-[26px] font-sans font-semibold text-[#3C3C34] mb-4">
              Ireland and the New Architecture
            </h3>
            <p className="text-[13px] text-[#848484] mb-8">
              Hegarty, John, Streetscapes of County Cork, Cork County Council, 2023 - page 7 - 9
            </p>
            <a href="/read" className="inline-block bg-[#4A4A3E] text-white px-6 py-2.5 rounded-full text-[13px] hover:bg-[#3C3C34] transition-colors">
              See all → 
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="pb-20">
          <h2 className="text-right  text-[40px] font-light text-[#3C3C34] mb-10 pr-0 -mr-8">
            Contact Us
          </h2>
          <div className="text-right">
            <h3 className="text-[32px] font-light text-[#3C3C34] mb-8">
              Fourem
            </h3>
            <div className="text-[15px] text-[#848484] space-y-0 leading-[1.6]">
              <p>9 Sidney Place</p>
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
              <p className="mt-4 text-[13px] leading-[1.5]">Form Four Limited, t/a Fourem</p>
              <p className="text-[13px] leading-[1.5]">
                Registered In Ireland No: 337573 at 9a Sidney Place, Wellington Road, Cork T23 KX89 Director: John Hegarty
              </p>
              <p className="text-[13px] mt-1 leading-[1.5]">TIN: IE 6357573T</p>
            </div>
          </div>
        </div>



        {/* <div className="mb-40">
          <h2 className="text-right mr-44 text-[40px] font-light text-[#3C3C34] mb-10 pr-4">
            Architecture
          </h2>
          <div className="text-right">
            <div>
            <p className='text-[15px] leading-[1.4] text-[#848484] mb-2 '>Fourem creates rigorous design solutions, rooted in context, that are balanced, 
              economical and</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>authentic. Fourem seek opportunity to create multiple benefits for 
              their clients in every design</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>decision. The results are of exceptional benefit, economy, 
              beauty and wellbeing. Fourem create</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2 mr-24'>beautiful works from large scale residential projects to small buildings</p>
              </div>

              <div className='mt-8'>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>Good design begins with economy. All elements of nature represent economy as all things exist to</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>suit their purpose. 
              Economy pares down elements to their true necessity and combines focused</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2'>consideration to create a final form. 
              Beauty is the result. Everybody recognises good design.</p>
              <p className='text-[15px] leading-[1.4] text-[#848484] mb-2 mr-[244px]'>Fourem produce it</p>
              </div>
          </div>
        </div> */}
      </div>
    </SidebarLayout>
  );
}