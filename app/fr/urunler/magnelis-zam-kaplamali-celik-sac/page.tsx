import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tôle d\'acier revêtue Magnelis (ZAM) - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Tôle d\'acier revêtue Magnelis (ZAM). Longue durée de vie dans des conditions environnementales difficiles, haute résistance à la corrosion et faibles besoins d\'entretien.',
};

export default function MagnelisZAMPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/ZAM.jpg" 
            alt="Tôle d'acier revêtue Magnelis (ZAM)"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Tôle d'acier revêtue Magnelis (ZAM)
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Longue durée de vie dans des conditions environnementales difficiles, haute résistance à la corrosion et faibles besoins d'entretien.
          </p>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mt-2">
            Metal X Steel – La puissance de l'acier industriel
          </p>
        </div>
      </section>

      {/* About Product */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative h-[300px] md:h-[400px]">
              <img 
                src="/ZAM.jpg" 
                alt="Tôle d'acier revêtue Magnelis (ZAM)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              À propos du produit
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                La tôle d'acier revêtue ZAM (zinc-aluminium-magnésium) est une solution de revêtement de nouvelle génération 
                qui offre une protection avancée contre la corrosion grâce à une structure de revêtement composée d'un alliage 
                de zinc, d'aluminium et de magnésium. Elle vise à prolonger la durée de vie dans les structures extérieures; 
                offrant un avantage de coût total en réduisant les besoins de maintenance et de réparation.
              </p>
              <p>
                Les tôles revêtues ZAM sont préférées pour les applications durables, en particulier dans des conditions 
                environnementales difficiles, des atmosphères humides/corrosives, les effets côtiers, les sites industriels 
                et d'autres environnements à haut risque. Elles sont largement utilisées dans l'automobile, la construction, 
                les machines agricoles et les applications industrielles générales.
              </p>
              <p>
                En tant que Metal X Endüstriyel San. ve Tic. Ltd. Şti., nous offrons nos solutions de tôles revêtues ZAM 
                en conformité avec les exigences techniques et les normes de qualité; nous gérons la sélection taille/qualité 
                basée sur le projet, la planification de la livraison et l'organisation de l'expédition de bout en bout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ZAM? */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6 text-center">
              Pourquoi ZAM ? (Magnelis)
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                La différence critique du revêtement ZAM est son comportement de protection active soutenu par 
                la contribution du magnésium. Il aide à contrôler le risque de corrosion sur les surfaces formées 
                après la coupe, le perçage et le façonnage. Cela permet une utilisation plus sûre et plus durable 
                dans les projets extérieurs.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#3d4f5f] mb-6 mt-12">
              Avantages clés
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Haute résistance à la corrosion</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Longue durée de vie et faibles besoins d'entretien</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Performance fiable dans les applications extérieures</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Avantage de coût total (à long terme)</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Durabilité soutenant la continuité du projet</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production / Supply Limits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Limites de production / approvisionnement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Épaisseur</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum : 0,4 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maximum : 3,0 mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Épaisseurs standard : 0,5 / 0,7 / 0,8 / 1,0 / 1,2 / 1,5 / 2,0 / 2,5 / 3,0 mm</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Largeur</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum : 600 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maximum : 1500 mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Largeurs personnalisées : Contactez notre équipe client pour les demandes basées sur le projet.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Poids du revêtement</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum : 100 g/m²</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maximum : 350 g/m²</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Quantité de commande</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Commande minimum : 3 tonnes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Commande maximum : 300 tonnes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Normes de qualité
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Normes internationales</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>EN 10346:</strong> Produits en acier revêtus par immersion à chaud en continu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>ASTM A653:</strong> Norme pour l'acier revêtu de zinc</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>JIS G 3315:</strong> Norme japonaise de revêtement d'acier</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Performance de protection contre la corrosion</h3>
                <p className="text-gray-700 mb-4">
                  La tôle d'acier revêtue ZAM est une alternative solide dans les environnements à risque de corrosion. 
                  Avec une sélection appropriée et un poids de revêtement correct, elle soutient les objectifs suivants :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Performance de revêtement visant une résistance à la corrosion minimale de 25 ans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Protection 3 à 4 fois supérieure par rapport au galvanisé traditionnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Comportement de protection fort même sur les bords coupés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Haute résistance aux conditions environnementales</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-4 italic">
                  <strong>Note :</strong> La performance peut varier en fonction de la classe d'environnement, des détails de conception, 
                  de l'assemblage/qualité d'exécution, du poids du revêtement et des conditions d'utilisation. 
                  Nous fournissons des conseils techniques pour des projets spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Domaines d'application
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              Les tôles revêtues ZAM se distinguent dans les applications nécessitant une durabilité élevée et de faibles besoins d'entretien :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Automobile et industrie automobile</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Construction et applications de structures en acier</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Machines agricoles et structures agricoles</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Fabrication industrielle générale</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Équipements et systèmes extérieurs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZAM Supply with Metal X Steel */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6 text-center">
              Approvisionnement ZAM avec Metal X Steel
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Pour nous, ZAM n'est pas seulement un produit ; c'est l'intégrité du bon produit + la bonne livraison + la bonne logistique. 
                Selon les besoins de votre projet, nous fournissons un soutien dans :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>guidance qualité/épaisseur/poids du revêtement,</li>
                <li>optimisation de la taille,</li>
                <li>planification de la livraison,</li>
                <li>organisation de l'expédition</li>
              </ul>
              <p className="font-semibold">
                sujets.
              </p>
              <p className="text-center text-lg font-bold text-[#3d4f5f] mt-6">
                Metal X Steel – la puissance de l'acier industriel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Quote / Technical Consultation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6 text-center">
              Obtenir un devis / Consultation technique
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                Pour vos besoins en tôles revêtues ZAM, envoyez-nous les informations suivantes, clarifions le même jour :
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Domaine d'application (construction / automobile / agriculture / industrie)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Épaisseur – largeur – poids du revêtement</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Attentes de norme de qualité</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Quantité (tonnage) et calendrier de livraison</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Lieu de livraison / plan d'expédition</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a href="/fr/teklif-al" className="px-8 py-4 bg-[#3d4f5f] text-white font-bold rounded-lg hover:bg-[#1a1a5e] transition-colors text-center">
                  Obtenir un devis
                </a>
                <a href="/fr/iletisim" className="px-8 py-4 bg-transparent border-2 border-[#3d4f5f] text-[#3d4f5f] font-bold rounded-lg hover:bg-[#3d4f5f]/10 transition-colors text-center">
                  Consultation technique
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Questions fréquemment posées (FAQ)
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  Quelle est la principale différence entre ZAM et galvanisé ?
                </h3>
                <p className="text-gray-700">
                  Le revêtement ZAM vise une résistance à la corrosion plus élevée et une durée de vie plus longue dans les environnements extérieurs 
                  avec un alliage zinc-aluminium-magnésium.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  La protection continue-t-elle après la coupe/le perçage ?
                </h3>
                <p className="text-gray-700">
                  Le comportement de protection active de ZAM aide à réduire le risque de corrosion dans les sections coupées.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  Dans quelles tailles peut-il être fourni ?
                </h3>
                <p className="text-gray-700">
                  Les options d'approvisionnement sont disponibles dans la plage d'épaisseur de 0,4 à 3,0 mm ; largeur de 600 à 1500 mm ; 
                  poids de revêtement de 100 à 350 g/m².
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  Quelle est la quantité de commande minimum ?
                </h3>
                <p className="text-gray-700">
                  L'approvisionnement peut être planifié dans la plage de commande minimum de 3 tonnes ; maximum de 300 tonnes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  Sous quelles normes est-il offert ?
                </h3>
                <p className="text-gray-700">
                  Les solutions sont fournies en conformité avec des références standard telles que EN 10346, ASTM A653 et JIS G 3315.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  Quelles informations sont nécessaires pour un devis ?
                </h3>
                <p className="text-gray-700">
                  Épaisseur–largeur–poids du revêtement, attentes de qualité, quantité, lieu de livraison et calendrier de livraison.
                </p>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-8 text-lg">
              Si vous recherchez une solution durable dans des conditions difficiles, clarifions ensemble le choix ZAM approprié pour votre projet.
            </p>
            <p className="text-center text-lg font-bold text-[#3d4f5f] mt-4">
              Metal X Steel – la puissance de l'acier industriel.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/bizimleiletisimegecin.jpg" 
            alt="Contactez-nous"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3d4f5f]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Contactez-nous pour des informations détaillées et des devis sur nos produits de tôles revêtues Magnelis (ZAM).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/fr/iletisim" className="px-8 py-4 bg-white text-[#3d4f5f] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Contact
              </a>
              <a href="/fr/teklif-al" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Obtenir un devis
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
