"use client"
import { useRouter } from 'next/navigation';

interface WorkSidebarProps {
  isVisible: boolean;
  onNavigate: (id: string) => void;
}

const workCategories = [
  { id: 'commercial', label: 'Commercial' },
  { id: 'conservation', label: 'Conservation' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'houses', label: 'Houses' },
  { id: 'interiors', label: 'Interiors' },
  { id: 'landscaping', label: 'Landscaping' },
  { id: 'objects', label: 'Objects' },
  { id: 'publications', label: 'Publications' },
  { id: 'reports', label: 'Reports' },
  { id: 'residential', label: 'Residential' },
  { id: 'restoration', label: 'Restoration' },
];

export default function WorkSidebar({ isVisible, onNavigate }: WorkSidebarProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <aside
      className={`transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col py-8 px-6">
        {/* Fourem Branding */}
        {/* <h1 
          className="text-[28px] mb-8 cursor-pointer hover:opacity-70 transition-opacity"
          style={{ 
            fontFamily: '"Times New Roman", Times, serif',
            color: '#3C3C34',
            fontWeight: 400
          }}
          onClick={handleGoBack}
        >
          Fourem
        </h1> */}

        {/* Go Back Link */}
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 mb-8 text-[15px] hover:opacity-70 transition-opacity"
          style={{ 
            fontFamily: '"Times New Roman", Times, serif',
            color: '#6B6B6B'
          }}
        >
          <span>←</span>
          <span>Go back</span>
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4">
          {workCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onNavigate(category.id)}
              className="text-left text-[20px] hover:opacity-70 transition-opacity"
              style={{ 
                fontFamily: '"Times New Roman", Times, serif',
                color: '#3C3C34',
                fontWeight: 400,
                lineHeight: '1.4'
              }}
            >
              {category.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}





// components/WorkSidebar.tsx
// "use client"

// interface WorkSidebarProps {
//   isVisible: boolean;
//   onNavigate: (id: string) => void;
// }

// const workCategories = [
//   { id: 'houses', label: 'Houses' },
//   { id: 'residential', label: 'Residential' },
//   { id: 'commercial', label: 'Commercial' },
//   { id: 'conservation', label: 'Conservation' },
//   { id: 'restoration', label: 'Restoration' },
//   { id: 'urban-design', label: 'Urban Design' },
//   { id: 'landscaping', label: 'Landscaping' },
//   { id: 'consulting', label: 'Consulting' },
//   { id: 'reports', label: 'Reports' },
//   { id: 'publications', label: 'Publications' },
//   { id: 'interiors', label: 'Interiors' },
//   { id: 'objects', label: 'Objects' }
// ];

// export default function WorkSidebar({ isVisible, onNavigate }: WorkSidebarProps) {
//   return (
//     <div
//       className={`hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ease-in-out ${
//         isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none'
//       }`}
//       style={{ fontFamily: "'Times New Roman', Times, serif" }}
//     >
//       <nav className="flex flex-col gap-0">
//         {workCategories.map((category) => (
//           <button
//             key={category.id}
//             onClick={() => onNavigate(category.id)}
//             className="text-left text-[15px] text-black hover:opacity-60 py-1.5 transition-opacity cursor-pointer"
//             style={{ 
//               fontFamily: "'Times New Roman', Times, serif",
//               fontWeight: 400,
//               letterSpacing: '0.01em'
//             }}
//           >
//             {category.label}
//           </button>
//         ))}
//       </nav>
//     </div>
//   );
// }
