import SidebarLayout from '@/components/SidebarLayout';

export default function ContactPage() {
  return (
    <SidebarLayout>
      <div className="relative pr-16 py-16 pl-20 -mr-24">
        {/* Floating See all button */}
        <div className="fixed top-[70px] right-16 z-10">
          <a href="/read" className="inline-block bg-[#3C3C34] text-white px-7 py-2.5 rounded-full text-[13px] hover:bg-[#2C2C24] transition-colors">
            See all →
          </a>
        </div>

        <div className="mb-20">
          <h2 className="text-right text-[40px] font-light text-[#3C3C34] mb-10">
            Contact Us
          </h2>
          <div className="text-right">
            <h3 className="text-[32px] font-light text-[#3C3C34] mb-8">
              Fourem
            </h3>
            <div className="text-[15px] text-[#848484] space-y-1 leading-relaxed">
              <p>9 Sidney Place</p>
              <p>Wellington Road</p>
              <p>Cork</p>
              <p>Ireland</p>
              <p>T23KX89</p>
              <p className="mt-3">Phone Number: 021 4550322</p>
              <p className="mt-3">
                <a href="mailto:post@fourem.ie" className="underline hover:text-[#3C3C34]">
                  post@fourem.ie
                </a>
              </p>
              <p className="mt-6 text-[13px]">Form Four Limited, t/a Fourem</p>
              <p className="text-[13px]">
                Registered In Ireland No: 337573 at 9a Sidney Place, Wellington Road, Cork T23 KX89 Director:
                John Hegarty
              </p>
              <p className="text-[13px] mt-1">TIN: IE 6357573T</p>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
