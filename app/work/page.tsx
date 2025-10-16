import SidebarLayout from '@/components/SidebarLayout';
import ImageCarousel from '@/components/ImageCarousel';

const houseImages = [
  '/images/01 Houses (1).jpg',
  '/images/02 Houses (1).jpg',
  '/images/003 Houses (1).jpg',
  '/images/04 Houses (1).JPG',
  '/images/05 Houses (1).jpg',
  '/images/06 Houses (1).jpg',
];

// const residentialImages = [
//   '/images/residential.avif',
//   '/images/residential-2.avif',
//   '/images/residential-3.avif',
//   '/images/residential-4.avif',
// ];

// const commercialImages = [
//   '/images/commercial.avif',
//   '/images/commercial-2.avif',
//   '/images/commercial-3.avif',
//   '/images/commercial-4.avif',
// ];

const conservationImages = [
  '/images/01 Conservation (1).jpg',
  '/images/02 Conservation.jpg',
  '/images/03 Conservation.jpg',
  '/images/04 conservation.jpg',
  '/images/05 Conservation.jpg',
  '/images/06 Conservation.jpg',
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
  'images/W H 2 PHOTO 15 (Edited).jpg'
];

// const urbanDesignImages = [
//   '/images/urban.avif',
//   '/images/urban-2.avif',
//   '/images/urban-3.avif',
//   '/images/urban-4.avif',
// ];

const landscapingImages = [
  '/images/03 Landscape.JPG',
];

// const consultingImages = [
//   '/images/consulting.avif',
//   '/images/consulting-2.avif',
//   '/images/consulting-3.avif',
//   '/images/consulting-4.avif',
// ];

const reportsImages = [
  '/images/01 reports.jpg',
  '/images/02 reports.jpg',
  '/images/03 reports.jpg',
  '/images/04 reports.jpg',
  '/images/05 reports.jpg',
];

const publicationsImages = [
  'images/Innishannon Report Cover.jpg',
  'images/Streetscapes of County Cork.JPG'
];

const interiorsImages = [
  '/images/interiors 01.jpg',
  '/images/interiors 02.jpg',
  '/images/interiors 03.jpg',
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

export default function WorkPage() {
  return (
    <SidebarLayout>
      <div className="-pr-12 py-16 pl-20">
        <div className="mb-20">
          <h2 id="houses" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
            Houses
          </h2>
          <div className="text-right">
            <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem seek design solutions that ensure economical results, balancing approach to</p>
            <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>create inspiring places to live. They create enduring architecture that promotes</p>
            <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>wellbeing, is grounded in the landscape and focuses on peace and serenity internally.</p>
          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          <ImageCarousel images={houseImages} />
        </div>

        <div className="mb-20 mt-12">
          <h2 id="residential" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
            Residential
          </h2>
          <div className="text-right">
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem achieve exceptional outcomes for residential development projects. The practice</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>understands the requirement to achieve a return from investment in all its forms. They</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>listen to the requirements of any commercial venture, enhancing the outcome of the brief</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>through every design consideration. Fourem understand the process of achieving the</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>goals of a development and the permissions required to carry out works seeking</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>opportunity in every aspect of a project.</p>

          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          {/* <ImageCarousel images={residentialImages} /> */}
        </div>

        <div className="mb-20 mt-12">
          <h2 id="commercial" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
            Commercial
          </h2>
          <div className="text-right">
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem understand the process of achieving the goals of a commercial project and the</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>permissions required to carry out works. They listen to the requirements of the brief</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>maintaining the commercial identity of a project to the last detail balancing economy</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>with practicality and always achieving the impact required.</p>
          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          {/* <ImageCarousel images={commercialImages} /> */}
        </div>

        <div className="mb-20 mt-12">
          <h2 id="conservation" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
            Conservation
          </h2>
          <div className="text-right">
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem are experts in Architectural Conservation employing a balanced, economical and</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>informed approach to the conservation of existing buildings; often combining their work</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>with sensitive new intervention. In conservation they aim to maintain as much of the</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>existing fabric of any significant structure or setting as is possible. When intervention is</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>required, they know how to protect the integrity of an existing place while achieving the</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>project goals and presenting historic places with great skill.</p>

          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          <ImageCarousel images={conservationImages} />
        </div>
        
        <div className="mb-20 mt-12">
          <h2 id="restoration" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
            Restoration
          </h2>
          <div className="text-right">
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem have expert knowledge of the development of Irish Architecture through the</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>centuries. Fourem produce rigorous, informed and accurate restoration of historic</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>architecture. In restoration they maintain an academic level of cultural accuracy and</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>authenticity combined with a deep understanding of the presentation of historic</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>architecture. Fourem catalogue and study specific detail elements of historic design to</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>inform their work. They closely question the possibility of current bias to ensure they</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>only produce accurate restoration.</p>
          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          <ImageCarousel images={restorationImages} />
        </div>

        <div className="mb-20 mt-12">
          <h2 id="urban-design" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
            Urban Design
          </h2>
          <div className="text-right">
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem understand the development of historic towns and cities and reinterpret these</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>places with great care. An expert knowledge of urban space and the detail of historic</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>urban construction allows Fourem to reinterpret historic space and develop new</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>architecture economically resulting in exceptional civic benefit and better returns for</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>investment. Fourem understand the urban context and detail of Irish towns and cities</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>with specific knowledge of the Munster area.</p>
          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          {/* <ImageCarousel images={urbanDesignImages} /> */}
        </div>
          
        <div className="mb-20 mt-12">
          <h2 id="landscaping" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
            LandScaping
          </h2>
          <div className="text-right">
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem are experts in urban landscaping and understand the intangible character of the</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>historic context of urban space and detail. They take an economical approach, informed</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>by knowledge of landscape forms and soft intervention. The practice understands design</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>that is appropriate to context and getting the best from resources.</p>
          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          <ImageCarousel images={landscapingImages} />
        </div>


        <div className="mb-20 mt-12">
          <h2 id="consulting" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
          Consulting
          </h2>
          <div className="text-right">
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem have a unique overview of design and investment requirements. They</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>collaborate to support successful outcomes for private and public projects of greatly</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>varying scale and requirements. Fourem seek opportunity for design teams, advising on</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>conservation and development that is part of protected landscapes and structures.</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem create a route to exceptional returns by awareness of what makes a project</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>successful, combining that awareness with expertise and exceptional service that enables</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>projects to reach multi benefit, economical solutions.</p>
          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          {/* <ImageCarousel images={consultingImages} /> */}
        </div>


        <div className="mb-20 mt-12">
          <h2 id="reports" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
            Reports
          </h2>
          <div className="text-right">
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem provide reporting services based on grade 1 conservation and architectural and</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>landscaping expertise for private works and public projects. Fourem ensure that their</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>reports are concise, informative and reflect project outcomes, supported by rigorous</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>expert knowledge. Fourem consulting create reports that are organised clearly with</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>exceptional benefit in the planning and construction process. They have an evolved</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>awareness of economic realities and negotiation backed up by vast knowledge of</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>conservation, restoration and building in context.</p>
          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          <ImageCarousel images={reportsImages} />
        </div>


        <div className="mb-20 mt-12">
          <h2 id="publications" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
            Publications
          </h2>
          <div className="text-right">
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem create publications based on their unique expertise and outlook for private and</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>public interests. Their rigour in the process of research, writing, editing and an attention</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>to detail combined with a balanced and ingenious approach creates exceptional</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>publications. The practice edits and presents publications ready for printing and presents</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>the work of others as required.</p>
          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          <ImageCarousel images={publicationsImages} />
        </div>


        <div className="mb-20 mt-12">
          <h2 id="interiors" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
            Interiors
          </h2>
          <div className="text-right">
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem create enduring interiors for homes and commercial projects. Their work</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>carefully reflects the ambition of their clients seeking more than expectations within</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>defined resources. Fourem understand what creates impact and how to achieve a desired</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>result with great subtlety and lasting authenticity rooted in the desires of the people they</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>represent.</p>
          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          <ImageCarousel images={interiorsImages} />
        </div>

        <div className="mb-20 mt-12">
          <h2 id="objects" className="text-right text-[40px] font-light text-[#3C3C34] mb-10 scroll-mt-24">
            Objects
          </h2>
          <div className="text-right">
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>Fourem have expert knowledge of the development of Irish Architecture through the</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>centuries. Fourem produce rigorous, informed and accurate restoration of historic</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>architecture. In restoration they maintain an academic level of cultural accuracy and</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>authenticity combined with a deep understanding of the presentation of historic</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>architecture. Fourem catalogue and study specific detail elements of historic design to</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>inform their work. They closely question the possibility of current bias to ensure they</p>
          <p className='text-[15px] leading-[1.2] text-[#848484] mb-2'>only produce accurate restoration.</p>
          </div>
        </div>

        <div className="w-full mt-12 max-w-[650px] ml-auto relative">
          <ImageCarousel images={objectsImages} />
        </div>


      </div>
    </SidebarLayout>
  );
}