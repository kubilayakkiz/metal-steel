import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos de nous - Metal X Steel (Metal Steel) - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X Steel (Metal Steel) avec plus de 15 ans d\'expérience dans l\'industrie de l\'approvisionnement en acier : fiabilité, bon choix de produit et livraison en temps voulu.',
};

export default function HakkimizdaPageFR() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hakkimizda.jpg" 
            alt="À propos de nous"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d4f5f]/90 via-[#3d4f5f]/80 to-[#3d4f5f]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            À PROPOS DE NOUS – METAL X STEEL (Metal Steel)
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Fiabilité, bon choix de produit et livraison en temps voulu dans l'approvisionnement en acier
          </p>
        </div>
      </section>

      {/* About Us Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              À propos de nous
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                En tant que Metal X Steel (Metal Steel), nous combinons la fiabilité, le bon choix de produit et l'approche de livraison 
                en temps voulu dans l'approvisionnement en acier avec plus de 15 ans d'expérience dans l'industrie. Avec notre large gamme 
                d'activités s'étendant de l'acier plat aux tubes–profilés, des produits en acier revêtus aux solutions d'approvisionnement 
                basées sur des projets ; nous ajoutons une valeur durable aux projets industriels, de construction, d'énergie et d'infrastructure.
              </p>
              <p>
                Dans le secteur de l'acier, nous agissons avec la conscience que les exigences techniques de chaque projet sont différentes. 
                Nous évaluons le choix du produit non seulement axé sur le prix ; mais avec des critères tels que le lieu d'utilisation, 
                les conditions environnementales, l'usinabilité, la qualité de surface, la précision dimensionnelle et la continuité de l'approvisionnement. 
                Cette approche garantit que nos clients n'ont pas de problèmes sur le terrain et optimisent leurs coûts à long terme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Below */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#3d4f5f]">
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                La valeur dans l'approvisionnement en acier ; n'est pas créée seulement dans le matériau, mais dans la bonne décision et la livraison en temps voulu.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Metal X Steel travaille avec une approche d'approvisionnement disciplinée et des solutions fiables qui rendent vos projets forts sur le terrain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Groups */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Nos groupes de produits
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              La gamme de produits de Metal X Steel est structurée pour répondre aux besoins de différents secteurs :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Tôle laminée à froid (TLF)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Tôle laminée à chaud décapée (TLCD)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Tôle noire</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Tôle galvanisée</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Solutions de tôles revêtues spéciales (Magnelis / ZAM, etc.)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Groupes de tubes–profilés (basés sur projet)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Approvisionnement basé sur projet et gestion des délais</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-center">
              Nos produits en tôle ont un large éventail d'applications de l'automobile aux appareils électroménagers, 
              des équipements énergétiques à l'acier de construction. Nous basons nos principes sur la qualité, la continuité 
              et la traçabilité dans le processus de la production à l'expédition.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Product in Coated Steel: Magnelis (ZAM) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              Produit stratégique en acier revêtu : Magnelis (ZAM)
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Parmi nos solutions en acier revêtu, Magnelis (ZAM) est l'un des groupes de produits auxquels Metal X Steel attache 
                une importance stratégique. Cette technologie de revêtement de nouvelle génération avec alliage zinc–aluminium–magnésium 
                vise une longue durée de vie et de faibles besoins d'entretien dans les applications extérieures en offrant une résistance 
                à la corrosion plus élevée par rapport au galvanisé standard.
              </p>
              <p>
                La raison du choix de Magnelis ; est qu'elle contribue à prolonger la durée de vie dans les projets grâce à son comportement 
                de revêtement qui soutient la protection même dans les zones de surface/coupe qui peuvent survenir après les opérations sur le terrain. 
                Par conséquent, elle se distingue comme une alternative solide dans des domaines d'application difficiles tels que :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Structures porteuses de centrales solaires</li>
                <li>installations industrielles</li>
                <li>projets d'infrastructure</li>
                <li>applications en plein air</li>
              </ul>
              <p className="font-semibold">
                En tant que Metal X Steel, nous positionnons Magnelis non seulement comme un type de revêtement ; mais comme un composant structurel 
                stratégique qui offre des performances à long terme, la durabilité et un avantage de coût total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal X Steel Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              Approche Metal X Steel
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Steel vise à être non seulement une entreprise qui fournit des produits, mais un partenaire commercial qui gère le processus de bout en bout :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Guidance du bon produit</li>
                <li>Support technique et planification basée sur projet</li>
                <li>Logistique forte et discipline des délais</li>
                <li>Gestion d'approvisionnement transparente et durable</li>
              </ul>
              <p>
                Avec notre structure capable de prendre des décisions rapides dans des conditions de marché changeantes, nous offrons à nos clients 
                un approvisionnement fiable et une valeur à long terme.
              </p>
              <p className="text-center text-lg font-bold text-[#3d4f5f] mt-6">
                Metal X Steel – la puissance de l'acier industriel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal X Steel in Numbers */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-12 text-center">
              Metal X Steel en chiffres
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">15+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Ans</div>
                <p className="text-sm text-gray-600">Expérience sur le terrain dans l'approvisionnement en fer-acier</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">200+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Clients / Partenaires</div>
                <p className="text-sm text-gray-600">Réseau client continu</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">8+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Groupes</div>
                <p className="text-sm text-gray-600">Acier plat, produits revêtus, tubes–profilés, etc.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">3,000</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Tonnes/Mois</div>
                <p className="text-sm text-gray-600">Capacité d'approvisionnement et d'expédition (évolutive basée sur projet)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">0–1</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Jour</div>
                <p className="text-sm text-gray-600">Réponse le jour même pour la plupart des demandes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-lg font-semibold text-gray-800 mb-2">Toute la Turquie</div>
                <p className="text-sm text-gray-600">Planification des délais et organisation de l'expédition</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">95%+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Objectif</div>
                <p className="text-sm text-gray-600">Avec expédition planifiée et suivi du processus</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
                  Mission
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    La mission de Metal X Steel est de fournir à nos clients un approvisionnement fiable, le bon choix de produit et des solutions 
                    durables avec notre plus de 15 ans d'expérience en fer-acier.
                  </p>
                  <p>
                    Avec notre large gamme de produits et notre réseau d'approvisionnement solide ; dans les groupes d'acier plat, tubes–profilés 
                    et acier revêtu, nous soutenons la continuité opérationnelle de nos clients en fournissant une gestion qualité–délais–logistique 
                    adaptée aux projets.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="/mission.jpg" 
                  alt="Notre mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
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
                  alt="Notre vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
                  Vision
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Notre vision est de renforcer l'identité d'un partenaire commercial fiable dans l'approvisionnement en acier, et d'être parmi 
                    les entreprises de référence du secteur avec une approche d'approvisionnement compétitive, traçable et durable en Turquie et 
                    sur le marché international.
                  </p>
                  <p>
                    En analysant correctement les besoins de nos clients ; nous visons à produire une valeur ajoutée mesurable dans chaque projet 
                    avec les principes de haute qualité, conditions compétitives et livraison en temps voulu.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Pourquoi Metal X Steel ?
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              La raison pour laquelle nos clients nous préfèrent est simple : nous agissons avec une approche d'approvisionnement qui résout le travail sur le terrain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Bon choix de produit</h3>
                    <p className="text-gray-700">Guidance qualité/revêtement/taille selon les conditions du projet</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Discipline des délais</h3>
                    <p className="text-gray-700">Suivi du processus, expédition planifiée et calendrier de livraison clair</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Réseau d'approvisionnement solide</h3>
                    <p className="text-gray-700">Continuité et gestion des sources alternatives</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Communication transparente</h3>
                    <p className="text-gray-700">Informations claires, délais réalistes et réponse rapide</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Partenariat à long terme</h3>
                    <p className="text-gray-700">Pas une vente unique, mais une relation commerciale durable</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Nos valeurs
            </h2>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/values.jpg" 
                alt="Nos valeurs"
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
            </div>
            <p className="text-center text-gray-700 mb-8 text-lg">
              La culture de travail de Metal X Steel est construite sur la confiance et la continuité plutôt que sur les gains à court terme.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Confiance</h3>
                <p className="text-gray-700">
                  Une approche qui fait ce qu'elle dit et tient ses engagements
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Qualité</h3>
                <p className="text-gray-700">
                  Approvisionnement conforme aux normes, traçable et contrôlé
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Vitesse</h3>
                <p className="text-gray-700">
                  Opérations agiles dans les devis, approbations, livraisons et expéditions
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Transparence</h3>
                <p className="text-gray-700">
                  Communication ouverte, planification réaliste, informations précises
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Durabilité</h3>
                <p className="text-gray-700">
                  Solutions durables, bon choix de produit, bon coût
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Message du fondateur
            </h2>
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#3d4f5f]">
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Nous avons positionné Metal X Steel comme un partenaire de solutions qui livre le bon matériau au projet au bon moment, 
                  plutôt que de "parler de prix et passer à autre chose" dans l'approvisionnement en acier. Parce que la vraie valeur sur 
                  le terrain émerge à travers la performance du produit, la fiabilité de la livraison et la gestion du processus.
                </p>
                <p>
                  Au point où nous sommes arrivés aujourd'hui, nous combinons notre expérience de 15 ans avec un réseau d'approvisionnement 
                  plus fort et une approche logistique plus disciplinée ; nous continuons à produire continuité et confiance dans les projets de nos clients.
                </p>
                <p className="text-center text-lg font-bold text-[#3d4f5f] mt-6">
                  Metal X Steel – la puissance de l'acier industriel.
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
              Contactez-nous pour en savoir plus sur nous ou explorer les opportunités de collaboration.
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
