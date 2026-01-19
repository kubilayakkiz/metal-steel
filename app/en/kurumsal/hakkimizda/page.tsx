import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Metal X Steel (Metal Steel) - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X Steel (Metal Steel) with over 15 years of industry experience in steel supply: reliability, right product selection and timely delivery.',
};

export default function HakkimizdaPageEN() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hakkimizda.jpg" 
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            ABOUT US – METAL X STEEL (Metal Steel)
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Reliability, right product selection and timely delivery in steel supply
          </p>
        </div>
      </section>

      {/* About Us Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              About Us
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                As Metal X Steel (Metal Steel), we combine reliability, right product selection and timely delivery approach in steel 
                supply with over 15 years of industry experience. With our wide range of activities extending from flat steel to pipe–profile, 
                from coated steel products to project-based supply solutions; we add sustainable value to industry, construction, energy and 
                infrastructure projects.
              </p>
              <p>
                In the steel sector, we act with the awareness that each project's technical requirements are different. We evaluate product 
                selection not only price-focused; but together with criteria such as usage location, environmental conditions, processability, 
                surface quality, dimensional accuracy and supply continuity. This approach ensures that our customers both do not experience 
                problems in the field and optimize their long-term costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Below */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#261dcf]">
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                Value in steel supply; is created not only in the material, but in the right decision and timely delivery.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Metal X Steel works with disciplined supply and reliable solution approach that makes your projects strong in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Groups */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Our Product Groups
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              Metal X Steel's product range is structured to meet the needs of different sectors:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Cold rolled sheet (CRS)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Hot rolled pickled sheet (HRP)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Black sheet</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Galvanized sheet</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Special coated sheet solutions (Magnelis / ZAM, etc.)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Pipe–profile groups (project-based)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Project-based supply and delivery management</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-center">
              Our sheet products have a wide range of applications from automotive to white goods, from energy equipment to structural steel. 
              We base our principles on quality, continuity and traceability in the process from production to shipping.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Product in Coated Steel: Magnelis (ZAM) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Strategic Product in Coated Steel: Magnelis (ZAM)
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Among our coated steel solutions, Magnelis (ZAM) is one of the product groups that Metal X Steel strategically values. 
                This next-generation coating technology with zinc–aluminum–magnesium alloy targets long life and low maintenance needs 
                in outdoor applications by providing higher corrosion resistance compared to standard galvanized.
              </p>
              <p>
                The reason for choosing Magnelis; is that it contributes to extending service life in projects with its coating behavior 
                that supports protection even in surface/cut sections that may occur after field operations. Therefore, it stands out as 
                a strong alternative in challenging application areas such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Solar power plant carrier structures</li>
                <li>industrial facilities</li>
                <li>infrastructure projects</li>
                <li>outdoor applications</li>
              </ul>
              <p className="font-semibold">
                As Metal X Steel, we position Magnelis not only as a type of coating; but as a strategic structural component that offers 
                long-term performance, sustainability and total cost advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal X Steel Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Metal X Steel Approach
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Steel aims to be not just a company that supplies products, but a business partner that manages the process end-to-end:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right product guidance</li>
                <li>Technical support and project-based planning</li>
                <li>Strong logistics and delivery discipline</li>
                <li>Transparent and sustainable supply management</li>
              </ul>
              <p>
                With our structure that can make quick decisions in changing market conditions, we offer our customers reliable supply and long-term value.
              </p>
              <p className="text-center text-lg font-bold text-[#261dcf] mt-6">
                Metal X Steel – the power of industrial steel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal X Steel in Numbers */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-12 text-center">
              Metal X Steel in Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">15+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Years</div>
                <p className="text-sm text-gray-600">Field experience in iron-steel supply</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">200+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Customers / Partners</div>
                <p className="text-sm text-gray-600">Continuous customer network</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">8+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Groups</div>
                <p className="text-sm text-gray-600">Flat steel, coated products, pipe–profile, etc.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">3,000</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Tons/Month</div>
                <p className="text-sm text-gray-600">Supply and shipping capacity (scalable project-based)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">0–1</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Day</div>
                <p className="text-sm text-gray-600">Same-day response for most requests</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-lg font-semibold text-gray-800 mb-2">Turkey Wide</div>
                <p className="text-sm text-gray-600">Delivery planning and shipping organization</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">95%+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Target</div>
                <p className="text-sm text-gray-600">With planned shipping and process tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
                  Mission
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Metal X Steel's mission is to provide our customers with reliable supply, right product selection and sustainable 
                    solutions with our over 15 years of iron-steel experience.
                  </p>
                  <p>
                    With our wide product range and strong supply network; in flat steel, pipe–profile and coated steel groups, we support 
                    our customers' operational continuity by providing quality–delivery–logistics management suitable for projects.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="/mission.jpg" 
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#261dcf]/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="/vision.jpg" 
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#261dcf]/30"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
                  Vision
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Our vision is to strengthen the identity of a reliable business partner in steel supply, and to be among the reference 
                    companies in the sector with a competitive, traceable and sustainable supply approach in Turkey and the international market.
                  </p>
                  <p>
                    By correctly analyzing our customers' needs; we aim to produce measurable added value in every project with the principles 
                    of high quality, competitive conditions and timely delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Metal X Steel? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Why Metal X Steel?
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              The reason our customers prefer us is simple: we act with a supply approach that solves the job in the field.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#261dcf]">Right product selection</h3>
                    <p className="text-gray-700">Quality/coating/size guidance according to project conditions</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#261dcf]">Delivery discipline</h3>
                    <p className="text-gray-700">Process tracking, planned shipping and clear delivery schedule</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#261dcf]">Strong supply network</h3>
                    <p className="text-gray-700">Continuity and alternative source management</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#261dcf]">Transparent communication</h3>
                    <p className="text-gray-700">Clear information, realistic delivery time and quick response</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#261dcf]">Long-term partnership</h3>
                    <p className="text-gray-700">Not a one-time sale, but a sustainable business relationship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Our Values
            </h2>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/values.jpg" 
                alt="Our Values"
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-[#261dcf]/30"></div>
            </div>
            <p className="text-center text-gray-700 mb-8 text-lg">
              Metal X Steel's work culture is built on trust and continuity rather than short-term gains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Trust</h3>
                <p className="text-gray-700">
                  An approach that does what it says and keeps its commitments
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Quality</h3>
                <p className="text-gray-700">
                  Standard-compliant, traceable and controlled supply
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Speed</h3>
                <p className="text-gray-700">
                  Agile operations in quotes, approvals, delivery and shipping
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Transparency</h3>
                <p className="text-gray-700">
                  Open communication, realistic planning, accurate information
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  Long-lasting solutions, right product selection, right cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Founder's Message
            </h2>
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#261dcf]">
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  We positioned Metal X Steel as a solution partner that delivers the right material to the project at the right time, 
                  rather than "talking about price and moving on" in steel supply. Because real value in the field emerges through product 
                  performance, delivery reliability and process management.
                </p>
                <p>
                  At the point we have reached today, we combine our 15 years of experience with a stronger supply network and a more 
                  disciplined logistics approach; we continue to produce continuity and trust in our customers' projects.
                </p>
                <p className="text-center text-lg font-bold text-[#261dcf] mt-6">
                  Metal X Steel – the power of industrial steel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/bizimleiletisimegecin.jpg" 
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#261dcf]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact us to learn more about us or to explore collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/en/iletisim" className="px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Contact
              </a>
              <a href="/en/teklif-al" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
