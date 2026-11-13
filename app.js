const SPORTX_DATA = {
  products: [

    {
      id: 'crick-1',
      name: 'MRF Genius Grand Edition Cricket Bat',
      sport: 'cricket',
      subcategory: 'bats',
      brand: 'MRF',
      price: 499,
      originalPrice: 599,
      rating: 4.9,
      reviewsCount: 142,
      badge: 'VIRAT EDITION',
      isProChoice: true,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
      description: 'Handcrafted from the rarest Grade 1+ English Willow. Massive edges, exquisite balance, and explosive ping trusted at international levels.',
      specs: {
        'Willow Grade': 'Grade 1+ Super Selected English Willow',
        'Grains': '9 - 13 Straight Even Grains',
        'Profile': 'Full modern concaved profile with huge sweet spot',
        'Edge Profile': '38mm to 42mm massive edges',
        'Handle': '12-piece cane handle with premium spiral grip',
        'Weight Options': '2lb 8oz to 2lb 11oz'
      },
      sizes: ['2lb 8oz', '2lb 9oz', '2lb 10oz', 'Short Handle (Standard)']
    },
    {
      id: 'crick-2',
      name: 'SS Master 5000 English Willow Bat',
      sport: 'cricket',
      subcategory: 'bats',
      brand: 'SS',
      price: 389,
      originalPrice: 460,
      rating: 4.8,
      reviewsCount: 98,
      badge: 'TOP CHOICE',
      isProChoice: true,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
      description: 'Engineered for aggressive strokemakers. Mid-to-low sweet spot engineered for punchy drives and aerial lofting on hard pitches.',
      specs: {
        'Willow Grade': 'Premium Grade 1 English Willow',
        'Grains': '8 - 11 Clean Grains',
        'Sweet Spot': 'Mid to Low for power hitting',
        'Handle': 'Round Sarawak 9-piece Cane',
        'Finish': 'Natural finish with anti-scuff toe guard'
      },
      sizes: ['2lb 8oz', '2lb 9oz', '2lb 10oz']
    },
    {
      id: 'crick-3',
      name: 'SG Player Edition English Willow Bat',
      sport: 'cricket',
      subcategory: 'bats',
      brand: 'SG',
      price: 449,
      originalPrice: 520,
      rating: 5.0,
      reviewsCount: 76,
      badge: 'PRO SERIES',
      isProChoice: true,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=800&q=80',
      description: 'Used and endorsed by top test players. Air dried willow with supreme balance and laser-etched SG authenticity hologram.',
      specs: {
        'Willow Grade': 'Grade 1+ Unbleached English Willow',
        'Profile': 'Thick contour edge, minimal concaving',
        'Toe': 'Hardened toe guard with moisture seal',
        'Includes': 'Padded bat cover + knock-in certificate'
      },
      sizes: ['2lb 8.5oz', '2lb 9.5oz', 'Full Size SH']
    },
    {
      id: 'crick-4',
      name: 'Kookaburra Kahuna Pro Batting Gloves',
      sport: 'cricket',
      subcategory: 'protective',
      brand: 'Kookaburra',
      price: 79,
      originalPrice: 95,
      rating: 4.8,
      reviewsCount: 88,
      badge: '20% OFF',
      isProChoice: false,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1562077772-3ab1218634fa?auto=format&fit=crop&w=800&q=80',
      description: 'Multi-flex ergonomic finger chambers with high-density Poron XRD shock absorption foam and Pittards sheepskin leather palm.',
      specs: {
        'Palm': 'Pittards Cougar Leather with breathable thumb mesh',
        'Protection': 'Tri-layer Poron XRD impact absorption',
        'Wrist': '50mm double sided towel wristband'
      },
      sizes: ['Mens Right Hand', 'Mens Left Hand', 'Youth RH']
    },
    {
      id: 'crick-5',
      name: 'SS Gladiator Pro Batting Legguards',
      sport: 'cricket',
      subcategory: 'protective',
      brand: 'SS',
      price: 119,
      originalPrice: 145,
      rating: 4.9,
      reviewsCount: 64,
      badge: 'ELITE GEAR',
      isProChoice: true,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
      description: 'Ultra-lightweight cane construction with molded gel knee cup and memory foam side bolsters for 145km/h+ ball protection.',
      specs: {
        'Construction': 'Traditional 7-cane reinforced face',
        'Knee Protection': 'Molded Gel cup with knee socket locator',
        'Weight': 'Just 820g per pad (featherlight)'
      },
      sizes: ['Standard Mens RH', 'Standard Mens LH']
    },
    {
      id: 'crick-6',
      name: 'SG Club Leather White Cricket Balls (Box of 6)',
      sport: 'cricket',
      subcategory: 'balls',
      brand: 'SG',
      price: 89,
      originalPrice: 110,
      rating: 4.7,
      reviewsCount: 112,
      badge: 'CLUB FAVORITE',
      isProChoice: false,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
      description: 'Four-piece alum tanned high-grade leather with Portuguese cork core. Outstanding seam retention for up to 50 overs.',
      specs: {
        'Pack Size': 'Box of 6 balls',
        'Color': 'Regulation White with green seam thread',
        'Durability': 'High abrasion resistance for turf wickets'
      },
      sizes: ['Box of 6 (5.5 oz / 156g)']
    },
    {
      id: 'crick-7',
      name: 'Kookaburra Pro Wheelie Kit Bag 2.0',
      sport: 'cricket',
      subcategory: 'bags',
      brand: 'Kookaburra',
      price: 149,
      originalPrice: 180,
      rating: 4.9,
      reviewsCount: 51,
      badge: 'TOURNAMENT READY',
      isProChoice: true,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      description: 'Massive heavy-duty Cordura kit bag with triple bat internal padded sleeve, ventilated footwear tunnel, and tractor all-terrain wheels.',
      specs: {
        'Volume': '145 Liters',
        'Bat Capacity': 'Stores 3 full-size bats internally',
        'Wheels': 'Triple all-terrain heavy-duty bearings',
        'Material': '1680D Ballistic Diamond ripstop'
      },
      sizes: ['100cm x 40cm x 42cm']
    },
    {
      id: 'crick-8',
      name: 'Shrey Master Class Air Titanium Cricket Helmet',
      sport: 'cricket',
      subcategory: 'protective',
      brand: 'Shrey',
      price: 195,
      originalPrice: 235,
      rating: 5.0,
      reviewsCount: 89,
      badge: 'OFFICIAL ICC GRADE',
      isProChoice: true,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80',
      description: 'The lightest titanium grille helmet in the world. Dual retention system and extended rear neck protection certified to BS 7928:2013 standard.',
      specs: {
        'Grille': 'Ultra-tensile Grade 5 Titanium',
        'Weight': 'Approx 740 grams',
        'Air Vents': '12 Flow-Thru Aerodynamic vents'
      },
      sizes: ['Small (54-57cm)', 'Medium (58-61cm)', 'Large (62-65cm)']
    },

    {
      id: 'foot-1',
      name: 'Nike Zoom Mercurial Superfly 10 Elite FG',
      sport: 'football',
      subcategory: 'footwear',
      brand: 'Nike',
      price: 285,
      originalPrice: 310,
      rating: 4.9,
      reviewsCount: 215,
      badge: 'PRO DROP',
      isProChoice: true,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=800&q=80',
      description: 'Featuring 3/4-length football-specific Air Zoom unit and tacky Gripknit upper for pinpoint control at breakaway speed.',
      specs: {
        'Soleplate': 'Tri-star stud pattern for explosive acceleration',
        'Upper': 'Nike Gripknit micro-textured thread',
        'Collar': 'Dynamic Fit Flyknit ankle wrap',
        'Pitch': 'Firm Ground (Natural grass)'
      },
      sizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11']
    },
    {
      id: 'foot-2',
      name: 'Adidas Predator Elite FT Firm Ground Cleats',
      sport: 'football',
      subcategory: 'footwear',
      brand: 'Adidas',
      price: 270,
      originalPrice: 299,
      rating: 4.8,
      reviewsCount: 178,
      badge: 'STRIKER PICK',
      isProChoice: true,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80',
      description: 'Iconic fold-over tongue with strikeskin rubber fins engineered for lethal swerve and unstoppable curl on direct shots.',
      specs: {
        'Striking Elements': 'Precision rubber Strikeskin ribs',
        'Outsole': 'Controlframe 2.0 full-length stability plate',
        'Closure': 'Traditional laces with tongue strap'
      },
      sizes: ['US 8', 'US 9', 'US 9.5', 'US 10', 'US 10.5']
    },
    {
      id: 'foot-3',
      name: 'Adidas UEFA Champions League Pro Official Match Ball',
      sport: 'football',
      subcategory: 'balls',
      brand: 'Adidas',
      price: 165,
      originalPrice: 190,
      rating: 5.0,
      reviewsCount: 94,
      badge: 'FIFA QUALITY PRO',
      isProChoice: true,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?auto=format&fit=crop&w=800&q=80',
      description: 'The genuine match ball used under European stadium lights. Seamless thermally bonded star-panel construction for true flight trajectory.',
      specs: {
        'Surface': '100% polyurethane textured cover',
        'Bladder': 'Butyl bladder for best air retention',
        'Certification': 'FIFA Quality Pro Stamp'
      },
      sizes: ['Official Size 5']
    },
    {
      id: 'foot-4',
      name: 'Puma Future 7 Ultimate FG/AG Cleats',
      sport: 'football',
      subcategory: 'footwear',
      brand: 'Puma',
      price: 239,
      originalPrice: 270,
      rating: 4.7,
      reviewsCount: 62,
      badge: 'NEW ARRIVAL',
      isProChoice: false,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80',
      description: 'FUZIONFIT360 dual-mesh upper combines engineered tape and PWRTAPE for adaptive lock-down that adjusts to your feet without laces.',
      specs: {
        'Lockdown': 'PWRTAPE targeted reinforcement',
        'Outsole': 'Dynamic Motion System with dual density studs',
        'Weight': 'Approx 215g'
      },
      sizes: ['US 8', 'US 9', 'US 10', 'US 10.5']
    },
    {
      id: 'foot-5',
      name: 'Nike Premier SGT Goalkeeper Pro Match Gloves',
      sport: 'football',
      subcategory: 'protective',
      brand: 'Nike',
      price: 125,
      originalPrice: 145,
      rating: 4.8,
      reviewsCount: 47,
      badge: 'ELITE GRIP',
      isProChoice: true,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
      description: '4mm Contact Foam palm engineered to absorb rocket shots with micro-siped Grip3 technology wrapping thumb and fingers.',
      specs: {
        'Latex': '4mm Contact Plus All-Weather German Latex',
        'Cut': 'Hybrid Roll Finger & Flat Palm',
        'Wrist': 'Wraparound tunnel strap'
      },
      sizes: ['Size 8', 'Size 9', 'Size 10', 'Size 11']
    },

    {
      id: 'bad-1',
      name: 'Yonex Astrox 100 ZZ Kurenai Carbon Racket',
      sport: 'badminton',
      subcategory: 'rackets',
      brand: 'Yonex',
      price: 269,
      originalPrice: 310,
      rating: 5.0,
      reviewsCount: 310,
      badge: 'VIKTOR AXELSEN CHOICE',
      isProChoice: true,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
      description: 'Hyper-slim solid core shaft made with Namd graphite gives extreme snapback and 10% steeper smash angles for overwhelming offensive plays.',
      specs: {
        'Frame': 'HM Graphite + Namd + Tungsten + Black Micro Core',
        'Balance': 'Head-Heavy for steep downhill smash',
        'Flex': 'Extra Stiff for laser accuracy',
        'Weight / Grip': '4U (Avg. 83g) G5',
        'String Tension': 'Recommended 20 - 28 lbs'
      },
      sizes: ['3U (88g) G4', '4U (83g) G5', 'Strung with BG66 Ultimax (26lbs)']
    },
    {
      id: 'bad-2',
      name: 'Yonex Nanoflare 1000 Z Lightning Speed Racket',
      sport: 'badminton',
      subcategory: 'rackets',
      brand: 'Yonex',
      price: 255,
      originalPrice: 295,
      rating: 4.9,
      reviewsCount: 140,
      badge: 'WORLD SMASH RECORD',
      isProChoice: true,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&w=800&q=80',
      description: 'Holds the official world smash speed record (565 km/h). Wide profile AERO Frame with Sonic Flare System for unbelievable shuttle repulsion.',
      specs: {
        'Frame': 'HM Graphite + Nanocell NEO + EX-HYPER MG',
        'Balance': 'Head-Light / Fast Defense & Drive',
        'Shaft': 'Ultra PE Fiber Extra Stiff'
      },
      sizes: ['4U (83g) G5', 'Strung 27lbs']
    },
    {
      id: 'bad-3',
      name: 'Li-Ning Axforce 90 Max Badminton Racket',
      sport: 'badminton',
      subcategory: 'rackets',
      brand: 'Li-Ning',
      price: 245,
      originalPrice: 280,
      rating: 4.8,
      reviewsCount: 89,
      badge: 'PRO SERIES',
      isProChoice: true,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1521537634581-0dced2fedc42?auto=format&fit=crop&w=800&q=80',
      description: 'Built with TB Nano and M50 Super Carbon. Explosive kinetic energy transfer for uncompromising backcourt smashes.',
      specs: {
        'Balance': 'Head Heavy (305mm)',
        'Weight': '4U (82g)',
        'Max Tension': '31 lbs'
      },
      sizes: ['3U G5 (Heavy Smash)', '4U G5 (Agile Power)']
    },
    {
      id: 'bad-4',
      name: 'Yonex Aerosensa 50 Feather Shuttles (Tube of 12)',
      sport: 'badminton',
      subcategory: 'shuttlecocks',
      brand: 'Yonex',
      price: 45,
      originalPrice: 52,
      rating: 4.9,
      reviewsCount: 220,
      badge: 'BWF APPROVED',
      isProChoice: true,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&w=800&q=80',
      description: 'The official shuttlecock of BWF World Tour and Olympic Games. Hand-sorted goose feathers with solid natural Portuguese cork.',
      specs: {
        'Feather': '100% Goose Feathers (A-grade)',
        'Base': 'Natural 3-layer laminated cork',
        'Flight Consistency': 'Grade A Tournament Tolerance'
      },
      sizes: ['Speed 77 (Standard)', 'Speed 78 (Fast / Cold climate)']
    },
    {
      id: 'bad-5',
      name: 'Yonex Power Cushion 65 Z3 Men Court Shoes',
      sport: 'badminton',
      subcategory: 'footwear',
      brand: 'Yonex',
      price: 159,
      originalPrice: 185,
      rating: 4.8,
      reviewsCount: 165,
      badge: 'PLAYER FAVORITE',
      isProChoice: false,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
      description: 'Equipped with Power Cushion+ technology which absorbs 28% more shock and converts impact into 62% more explosive footwork propulsion.',
      specs: {
        'Sole': 'Radial blade non-marking gum rubber',
        'Upper': 'Seamless double russel mesh + synthetic leather',
        'Midsole': 'Power Graphite sheet insertion'
      },
      sizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11']
    },

    {
      id: 'fit-1',
      name: 'Rogue Ohio Competition Olympic Barbell (20KG)',
      sport: 'fitness',
      subcategory: 'weights',
      brand: 'Rogue',
      price: 375,
      originalPrice: 420,
      rating: 5.0,
      reviewsCount: 290,
      badge: 'GOLD STANDARD',
      isProChoice: true,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      description: 'Manufactured in Columbus, Ohio. Precision needle bearings with 190,000 PSI tensile strength and refined dual knurl marks.',
      specs: {
        'Weight': '20KG (44.1 lbs)',
        'Shaft Diameter': '28.5mm',
        'Tensile Strength': '190,000 PSI minimum',
        'Bushings/Bearings': 'Bronze bushings with composite friction rings',
        'Finish': 'Black Zinc shaft with Bright Chrome sleeves'
      },
      sizes: ['Standard 20KG Barbell']
    },
    {
      id: 'fit-2',
      name: 'Rogue Echo Color Bumper Plates (160LB Set)',
      sport: 'fitness',
      subcategory: 'weights',
      brand: 'Rogue',
      price: 415,
      originalPrice: 480,
      rating: 4.9,
      reviewsCount: 180,
      badge: 'GYM ESSENTIAL',
      isProChoice: false,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
      description: 'IWF standard 450mm diameter virgin rubber bumper plates with stainless steel center hubs. Minimal dead bounce for garage and box gyms.',
      specs: {
        'Includes': 'Pairs of 45LB, 25LB, 10LB plates',
        'Collar Opening': '50.4mm Olympic standard',
        'Durometer': '88 Shore A for low controlled bounce'
      },
      sizes: ['160lb Complete Set', 'Pair of 45lbs', 'Pair of 25lbs']
    },
    {
      id: 'fit-3',
      name: 'Bowflex SelectTech 552 Adjustable Dumbbells',
      sport: 'fitness',
      subcategory: 'dumbbells',
      brand: 'Bowflex',
      price: 429,
      originalPrice: 499,
      rating: 4.8,
      reviewsCount: 230,
      badge: 'SPACE SAVER',
      isProChoice: true,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
      description: 'Replaces 15 pairs of weights. Smooth selector dial adjusts from 5 to 52.5 lbs instantly with whisper-quiet molding around metal plates.',
      specs: {
        'Weight Range': '5 to 52.5 lbs (2.5 to 24 kg) per dumbbell',
        'Adjustment Steps': '15 distinct weight settings',
        'Trays': 'Includes 2 custom molded docking stations'
      },
      sizes: ['Pair (Up to 52.5 lbs each)']
    },
    {
      id: 'fit-4',
      name: 'Under Armour Project Rock 6 Training Shoes',
      sport: 'fitness',
      subcategory: 'footwear',
      brand: 'Under Armour',
      price: 150,
      originalPrice: 175,
      rating: 4.8,
      reviewsCount: 140,
      badge: 'THE ROCK EDITION',
      isProChoice: false,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
      description: 'Engineered in collaboration with Dwayne Johnson. UA HOVR cushioning reduces impact while the UA TriBase maximizes floor contact during heavy lifts.',
      specs: {
        'Support': 'Midfoot TPU strap locks heel in place',
        'Cushioning': 'Zero-gravity UA HOVR responsive foam',
        'Traction': 'Full rubber outsole with lateral outriggers'
      },
      sizes: ['US 8', 'US 9', 'US 10', 'US 10.5', 'US 11', 'US 12']
    },
    {
      id: 'fit-5',
      name: 'Everlast Powerlock 2 Pro Laced Boxing Gloves',
      sport: 'fitness',
      subcategory: 'combat',
      brand: 'Everlast',
      price: 119,
      originalPrice: 140,
      rating: 4.7,
      reviewsCount: 88,
      badge: 'PRO SPARRING',
      isProChoice: false,
      isBestSeller: false,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
      description: 'Crafted from full-grain leather with ergonomic 5-layer foam core that naturally guides fists into anatomical power position.',
      specs: {
        'Material': '100% full-grain cowhide leather',
        'Padding': '5-layer foam core combination',
        'Lace System': 'Turnback lace track for locked-in wrist support'
      },
      sizes: ['12 oz (Speed)', '14 oz (Bagwork)', '16 oz (Sparring)']
    },
    {
      id: 'fit-6',
      name: 'SportX Elite Heavy-Duty Power Bands (Set of 5)',
      sport: 'fitness',
      subcategory: 'accessories',
      brand: 'SportX',
      price: 49,
      originalPrice: 65,
      rating: 4.9,
      reviewsCount: 160,
      badge: 'TOP VALUE',
      isProChoice: false,
      isBestSeller: true,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      description: 'Continuous layered Malaysian latex bands tested up to 175 lbs resistance. Perfect for assisted pull-ups, powerlifting warmup, and mobility work.',
      specs: {
        'Includes': '5 resistance levels: Red (15-35lb), Black (25-65lb), Purple (35-85lb), Green (50-125lb), Blue (65-175lb)',
        'Extras': 'Door anchor, foam travel pouch, exercise wall chart'
      },
      sizes: ['Set of 5 Bands + Bag']
    }
  ],

  brands: [
    {
      name: 'SG (Sanspareils Greenlands)',
      sport: 'Cricket',
      country: 'India',
      logoText: 'SG',
      tagline: 'Believe. Become.',
      featuredGear: 'White Match Balls, Test Bats & Legguards',
      description: 'The definitive name in cricket since 1931. Supplier of official test match balls to BCCI and trusted by legendary batters globally.',
      linkFilter: 'SG'
    },
    {
      name: 'SS Sunridges',
      sport: 'Cricket',
      country: 'India',
      logoText: 'SS',
      tagline: 'The Champions Choice',
      featuredGear: 'Master 5000, Gladiator Pads, TON Willow',
      description: 'One of the world’s most dominant cricket equipment producers. Renowned for supreme ping, balanced pick-up, and razor sharp toe shaping.',
      linkFilter: 'SS'
    },
    {
      name: 'MRF Sports',
      sport: 'Cricket',
      country: 'India',
      logoText: 'MRF',
      tagline: 'Pace, Power & Precision',
      featuredGear: 'Genius Grand Edition & Virat Kohli signature bats',
      description: 'Synonymous with world cricket royalty from Sachin Tendulkar to Brian Lara and Virat Kohli. Unmatched Grade 1+ cleft selection.',
      linkFilter: 'MRF'
    },
    {
      name: 'Kookaburra',
      sport: 'Cricket & Turf',
      country: 'Australia',
      logoText: 'KOOKABURRA',
      tagline: 'Established 1890',
      featuredGear: 'Kahuna Bats, Turf Pink/Red Balls, Wheelie Bags',
      description: 'Over 130 years of Australian sports heritage. The benchmark ball and protective gear manufacturer across Test-playing nations.',
      linkFilter: 'Kookaburra'
    },
    {
      name: 'Yonex',
      sport: 'Badminton & Tennis',
      country: 'Japan',
      logoText: 'YONEX',
      tagline: 'Far Beyond Ordinary',
      featuredGear: 'Astrox 100ZZ, Nanoflare 1000Z, AS-50 Shuttles',
      description: 'Dominating 80%+ of Olympic badminton courts. Pioneer in Namd graphite, ISOMETRIC head shapes, and Power Cushion dynamics.',
      linkFilter: 'Yonex'
    },
    {
      name: 'Li-Ning',
      sport: 'Badminton & Athletic',
      country: 'China',
      logoText: 'LI-NING',
      tagline: 'Anything Is Possible',
      featuredGear: 'Axforce Series, 3D Calibar, High-Tension Rackets',
      description: 'Cutting edge aerospace-grade carbon fiber equipment crafted for explosive speed, fast court transition, and aggressive smash attack.',
      linkFilter: 'Li-Ning'
    },
    {
      name: 'Nike Football',
      sport: 'Football & Training',
      country: 'USA',
      logoText: 'NIKE',
      tagline: 'Just Do It',
      featuredGear: 'Mercurial Superfly, Phantom GX, Grip3 Gloves',
      description: 'World football’s most progressive performance innovators. Pushing boundary-breaking traction and dynamic speed upper engineering.',
      linkFilter: 'Nike'
    },
    {
      name: 'Adidas Sports',
      sport: 'Football & Multi-Sport',
      country: 'Germany',
      logoText: 'ADIDAS',
      tagline: 'Impossible Is Nothing',
      featuredGear: 'Predator Elite, UCL Pro Balls, F50 Speed',
      description: 'Iconic three stripes delivering UEFA Champions League match balls and game-defining football boots for world-class strikers.',
      linkFilter: 'Adidas'
    },
    {
      name: 'Puma',
      sport: 'Football & Running',
      country: 'Germany',
      logoText: 'PUMA',
      tagline: 'Forever Faster',
      featuredGear: 'Future 7 Ultimate, Ultra Match, Carbon Guards',
      description: 'Ultra-lightweight velocity gear engineered for unpredictable playmakers and electrifying wingers who dominate the touchline.',
      linkFilter: 'Puma'
    },
    {
      name: 'Rogue Fitness',
      sport: 'Strength & Conditioning',
      country: 'USA',
      logoText: 'ROGUE',
      tagline: 'Forged in Ohio',
      featuredGear: 'Ohio Barbell, Color Bumper Plates, Power Racks',
      description: 'The official equipment provider of the CrossFit Games and World’s Strongest Man. Unbreakable American-made steel standard.',
      linkFilter: 'Rogue'
    },
    {
      name: 'Under Armour',
      sport: 'Training & Apparel',
      country: 'USA',
      logoText: 'UNDER ARMOUR',
      tagline: 'The Only Way Is Through',
      featuredGear: 'Project Rock Footwear, HeatGear Compression',
      description: 'Performance-driven athletic apparel and heavy lift training gear designed to withstand the highest training intensities.',
      linkFilter: 'Under Armour'
    },
    {
      name: 'Bowflex',
      sport: 'Fitness & Home Gym',
      country: 'USA',
      logoText: 'BOWFLEX',
      tagline: 'Be Your Best',
      featuredGear: 'SelectTech Dumbbells, Kettlebells & Benches',
      description: 'Pioneers in high-efficiency home gym solutions, space-saving selector dials, and ergonomic progressive resistance technology.',
      linkFilter: 'Bowflex'
    }
  ]
};

let appState = {
  currentView: 'home',
  cart: [],
  wishlist: [],
  theme: 'dark',
  appliedPromo: null,
  activeFilter: {
    sport: 'all',
    brand: 'all',
    search: '',
    sort: 'featured',
    maxPrice: 600
  },
  modalProduct: null
};

function initStorage() {
  try {
    const savedTheme = localStorage.getItem('sportx_theme') || 'light';
    appState.theme = savedTheme;
    applyTheme(appState.theme);

    const savedCart = localStorage.getItem('sportx_cart');
    if (savedCart) {
      appState.cart = JSON.parse(savedCart);
    }

    const savedWish = localStorage.getItem('sportx_wishlist');
    if (savedWish) {
      appState.wishlist = JSON.parse(savedWish);
    }
  } catch (e) {
    console.warn('Storage init failed:', e);
  }
}

function saveCart() {
  try {
    localStorage.setItem('sportx_cart', JSON.stringify(appState.cart));
  } catch (e) {}
  updateCartBadges();
  renderCartDrawer();
}

function saveWishlist() {
  try {
    localStorage.setItem('sportx_wishlist', JSON.stringify(appState.wishlist));
  } catch (e) {}
  updateWishlistBadges();
}

function applyTheme(theme) {
  const html = document.documentElement;
  const themeIcon = document.getElementById('theme-toggle-icon');
  const themeLabel = document.getElementById('theme-toggle-label');

  if (theme === 'dark') {
    html.classList.add('dark');
    if (themeIcon) themeIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`;
    if (themeLabel) themeLabel.textContent = 'Light';
  } else {
    html.classList.remove('dark');
    if (themeIcon) themeIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
    if (themeLabel) themeLabel.textContent = 'Dark';
  }
  localStorage.setItem('sportx_theme', theme);
  appState.theme = theme;
}

function toggleTheme() {
  const newTheme = appState.theme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  showToast(`Switched to ${newTheme.toUpperCase()} mode!`, 'info');
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';

  let icon = `
    <svg class="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
    </svg>
  `;
  if (type === 'info') {
    icon = `
      <svg class="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    `;
  }

  toast.innerHTML = `
    ${icon}
    <span class="text-sm font-semibold">${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px) scale(0.95)';
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

function addToCart(productId, size = null, qty = 1) {
  const product = SPORTX_DATA.products.find(p => p.id === productId);
  if (!product) return;

  const selectedSize = size || (product.sizes && product.sizes[0]) || 'Standard';

  const existingIndex = appState.cart.findIndex(
    item => item.id === productId && item.selectedSize === selectedSize
  );

  if (existingIndex > -1) {
    appState.cart[existingIndex].qty += qty;
  } else {
    appState.cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      sport: product.sport,
      brand: product.brand,
      image: product.image,
      selectedSize: selectedSize,
      qty: qty
    });
  }

  saveCart();
  showToast(`Added "${product.name}" to your gear bag!`);
  openCartDrawer();
}

function removeFromCart(index) {
  if (index >= 0 && index < appState.cart.length) {
    const item = appState.cart[index];
    appState.cart.splice(index, 1);
    saveCart();
    showToast(`Removed "${item.name}" from bag.`, 'info');
  }
}

function updateCartQty(index, change) {
  if (index >= 0 && index < appState.cart.length) {
    appState.cart[index].qty += change;
    if (appState.cart[index].qty <= 0) {
      removeFromCart(index);
    } else {
      saveCart();
    }
  }
}

function updateCartBadges() {
  const totalCount = appState.cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(badge => {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountEl = document.getElementById('cart-discount');
  const totalEl = document.getElementById('cart-total');
  const freeShipBar = document.getElementById('free-shipping-progress');
  const freeShipText = document.getElementById('free-shipping-text');
  const emptyState = document.getElementById('cart-empty-state');
  const filledState = document.getElementById('cart-filled-state');

  if (!container) return;

  if (appState.cart.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (filledState) filledState.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (filledState) filledState.classList.remove('hidden');

  let subtotal = 0;
  container.innerHTML = appState.cart.map((item, idx) => {
    const lineTotal = item.price * item.qty;
    subtotal += lineTotal;
    return `
      <div class="flex gap-4 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm transition-all hover:border-blue-500/40">
        <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg flex-shrink-0 bg-slate-100 dark:bg-slate-800">
        <div class="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">${item.brand} • ${item.sport}</h4>
              <button type="button" onclick="removeFromCart(${idx})" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-red-50 dark:bg-slate-800 dark:hover:bg-red-950/40 text-slate-400 hover:text-red-500 flex items-center justify-center transition-all duration-200 cursor-pointer border border-transparent hover:border-red-500/30" title="Remove item">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <h3 class="text-sm font-semibold truncate text-slate-900 dark:text-white mt-0.5">${item.name}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Spec / Size: <span class="font-medium text-slate-700 dark:text-slate-300">${item.selectedSize}</span></p>
          </div>
          <div class="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <div class="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800 text-xs">
              <button onclick="updateCartQty(${idx}, -1)" class="px-2.5 py-1 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-colors">-</button>
              <span class="px-2.5 font-bold text-slate-800 dark:text-slate-100">${item.qty}</span>
              <button onclick="updateCartQty(${idx}, 1)" class="px-2.5 py-1 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-colors">+</button>
            </div>
            <span class="text-sm font-bold text-blue-600 dark:text-blue-400">$${lineTotal}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  let discount = 0;
  if (appState.appliedPromo) {
    discount = Math.round(subtotal * (appState.appliedPromo.percent / 100));
  }

  const finalTotal = Math.max(0, subtotal - discount);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal}`;
  if (discountEl) discountEl.textContent = discount > 0 ? `-$${discount}` : '$0';
  if (totalEl) totalEl.textContent = `$${finalTotal}`;

  const freeThreshold = 150;
  const progressPercent = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
  if (freeShipBar) freeShipBar.style.width = `${progressPercent}%`;

  if (freeShipText) {
    if (subtotal >= freeThreshold) {
      freeShipText.innerHTML = `<svg class="w-4 h-4 text-blue-500 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="font-bold text-blue-500">You unlocked FREE Express Shipping!</span>`;
    } else {
      const remaining = freeThreshold - subtotal;
      freeShipText.innerHTML = `Add <span class="font-bold text-blue-500">$${remaining}</span> more for <span class="font-bold">FREE Express Delivery</span>`;
    }
  }
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.add('open');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.remove('open');
}

function applyPromoCode() {
  const input = document.getElementById('promo-code-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (!code) return;

  if (code === 'SPORTX10') {
    appState.appliedPromo = { code: 'SPORTX10', percent: 10 };
    showToast('Applied coupon SPORTX10: 10% Discount!');
    renderCartDrawer();
  } else if (code === 'CHAMPION' || code === 'PRO20') {
    appState.appliedPromo = { code: code, percent: 15 };
    showToast('Elite Pro Code Applied: 15% OFF your bag!');
    renderCartDrawer();
  } else {
    showToast('Invalid promo code. Try "SPORTX10"', 'info');
  }
}

function toggleWishlist(productId) {
  const idx = appState.wishlist.indexOf(productId);
  const product = SPORTX_DATA.products.find(p => p.id === productId);
  if (idx > -1) {
    appState.wishlist.splice(idx, 1);
    showToast(`Removed from your wishlist.`, 'info');
  } else {
    appState.wishlist.push(productId);
    showToast(`Saved "${product ? product.name : 'Item'}" to your wishlist!`);
  }
  saveWishlist();
  renderProducts();
  renderWishlistModal();
}

function updateWishlistBadges() {
  const count = appState.wishlist.length;
  const badges = document.querySelectorAll('.wishlist-count-badge');
  badges.forEach(badge => {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

function openWishlistModal() {
  renderWishlistModal();
  const modal = document.getElementById('wishlist-modal');
  if (modal) modal.classList.add('open');
}

function closeWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  if (modal) modal.classList.remove('open');
}

function renderWishlistModal() {
  const listContainer = document.getElementById('wishlist-items-container');
  if (!listContainer) return;

  if (appState.wishlist.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-12">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </div>
        <h4 class="text-base font-bold text-slate-800 dark:text-slate-100">Your Wishlist is Empty</h4>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">Click the heart icon on any bat, racket, or cleats to save them for later.</p>
        <button onclick="closeWishlistModal(); navigateTo('products');" class="mt-5 px-5 py-2.5 bg-gradient-orange text-white rounded-lg text-sm font-bold shadow-md hover:opacity-90">Browse Pro Gear</button>
      </div>
    `;
    return;
  }

  const items = appState.wishlist
    .map(id => SPORTX_DATA.products.find(p => p.id === id))
    .filter(Boolean);

  listContainer.innerHTML = items.map(product => `
    <div class="flex items-center justify-between p-3.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/40">
      <div class="flex items-center gap-3.5 min-w-0">
        <img src="${product.image}" alt="${product.name}" class="w-14 h-14 object-cover rounded-lg bg-slate-200 dark:bg-slate-800 flex-shrink-0">
        <div class="min-w-0">
          <span class="text-[10px] font-bold uppercase tracking-wider text-blue-500">${product.sport}</span>
          <h4 class="text-sm font-bold truncate text-slate-900 dark:text-white">${product.name}</h4>
          <span class="text-sm font-extrabold text-blue-600 dark:text-blue-400">$${product.price}</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="addToCart('${product.id}'); toggleWishlist('${product.id}');" class="px-3.5 py-1.5 bg-gradient-orange text-white rounded-lg text-xs font-bold hover:shadow-orange transition-all">Add to Cart</button>
        <button onclick="toggleWishlist('${product.id}')" class="p-2 text-slate-400 hover:text-blue-500 transition-colors" title="Remove">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

function openQuickView(productId) {
  const product = SPORTX_DATA.products.find(p => p.id === productId);
  if (!product) return;

  appState.modalProduct = product;
  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;

  document.getElementById('qv-sport').textContent = product.sport.toUpperCase();
  document.getElementById('qv-brand').textContent = product.brand;
  document.getElementById('qv-title').textContent = product.name;
  document.getElementById('qv-price').textContent = `$${product.price}`;
  document.getElementById('qv-original-price').textContent = `$${product.originalPrice}`;
  document.getElementById('qv-description').textContent = product.description;
  document.getElementById('qv-image').src = product.image;
  document.getElementById('qv-rating').textContent = `${product.rating} / 5.0`;
  document.getElementById('qv-reviews-count').textContent = `(${product.reviewsCount} verified athlete reviews)`;

  const specsContainer = document.getElementById('qv-specs-container');
  if (specsContainer && product.specs) {
    specsContainer.innerHTML = Object.entries(product.specs).map(([key, val]) => `
      <div class="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800 text-xs">
        <span class="text-slate-500 dark:text-slate-400 font-medium">${key}</span>
        <span class="text-slate-900 dark:text-slate-200 font-bold">${val}</span>
      </div>
    `).join('');
  }

  const sizesContainer = document.getElementById('qv-sizes-container');
  if (sizesContainer) {
    sizesContainer.innerHTML = (product.sizes || ['Standard']).map((size, idx) => `
      <label class="cursor-pointer">
        <input type="radio" name="qv-size" value="${size}" class="hidden peer" ${idx === 0 ? 'checked' : ''}>
        <span class="inline-block px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 peer-checked:border-blue-500 peer-checked:bg-blue-500/10 peer-checked:text-blue-500 text-slate-700 dark:text-slate-300 transition-all">
          ${size}
        </span>
      </label>
    `).join('');
  }

  modal.classList.add('open');
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.remove('open');
}

function addCurrentModalToCart() {
  if (!appState.modalProduct) return;
  const selectedSizeEl = document.querySelector('input[name="qv-size"]:checked');
  const size = selectedSizeEl ? selectedSizeEl.value : null;
  addToCart(appState.modalProduct.id, size);
  closeQuickView();
}

function navigateTo(viewName, filterSport = null, filterBrand = null) {

  appState.currentView = viewName;
  window.location.hash = viewName;

  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.view === viewName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const views = ['home', 'products', 'brands', 'team-orders', 'contact', 'about'];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      if (v === viewName) {
        el.classList.remove('hidden');
        el.classList.add('animate-fade-in');
      } else {
        el.classList.add('hidden');
      }
    }
  });

  if (viewName === 'products') {
    if (filterSport) {
      appState.activeFilter.sport = filterSport;
    }
    if (filterBrand) {
      appState.activeFilter.brand = filterBrand;
    }
    renderProducts();
    syncFilterUI();
  } else if (viewName === 'home') {
    renderHomeHighlights();
  } else if (viewName === 'brands') {
    renderBrands();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  closeMobileMenu();
}

function renderProductCard(p) {
  const isWish = appState.wishlist.includes(p.id);
  const discountPercent = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);

  return `
    <div class="product-card group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#1E1E26] p-4 shadow-sm hover:shadow-xl transition-all duration-300 card-hover-effect">
      <div class="relative product-img-wrapper rounded-xl bg-slate-100 dark:bg-slate-900/80 h-56 flex items-center justify-center p-3">
        <img src="${p.image}" alt="${p.name}" class="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500">

        <div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          ${p.badge ? `<span class="px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide rounded-md bg-gradient-orange text-white shadow-sm">${p.badge}</span>` : ''}
          ${discountPercent > 0 ? `<span class="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-900/80 dark:bg-black/80 text-blue-400 backdrop-blur-md">-${discountPercent}%</span>` : ''}
        </div>

        <button onclick="toggleWishlist('${p.id}')" aria-label="Save to Wishlist" class="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-400 hover:text-blue-500 shadow-md backdrop-blur-sm transition-all transform hover:scale-110">
          <svg class="w-4 h-4 ${isWish ? 'fill-red-500 text-blue-500' : 'fill-none'}" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <div class="absolute inset-x-4 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          <button onclick="openQuickView('${p.id}')" class="flex-1 py-2 rounded-lg bg-slate-900/90 dark:bg-slate-800/95 text-white text-xs font-bold backdrop-blur-md hover:bg-blue-600 transition-colors shadow-lg flex items-center justify-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Quick Specs
          </button>
        </div>
      </div>
      <div class="pt-4 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span class="font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">${p.sport} • ${p.brand}</span>
            <div class="flex items-center gap-1 font-semibold text-blue-500">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span>${p.rating}</span>
            </div>
          </div>

          <h3 class="font-heading text-base font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-500 transition-colors" title="${p.name}">
            ${p.name}
          </h3>

          <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
            ${p.description}
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <div>
            <div class="flex items-baseline gap-2">
              <span class="text-lg font-extrabold text-slate-900 dark:text-white">$${p.price}</span>
              ${p.originalPrice > p.price ? `<span class="text-xs text-slate-400 line-through">$${p.originalPrice}</span>` : ''}
            </div>
            <span class="text-[10px] text-blue-500 dark:text-blue-400 font-semibold">● Ready to Dispatch</span>
          </div>

          <button onclick="addToCart('${p.id}')" class="px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-gradient-orange text-white text-xs font-bold transition-all duration-200 shadow-sm flex items-center gap-1.5 group/btn">
            <svg class="w-3.5 h-3.5 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            Add
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('products-matched-count');
  if (!grid) return;

  let filtered = SPORTX_DATA.products.filter(item => {

    if (appState.activeFilter.sport !== 'all' && item.sport !== appState.activeFilter.sport) {
      return false;
    }

    if (appState.activeFilter.brand !== 'all' && item.brand.toLowerCase() !== appState.activeFilter.brand.toLowerCase()) {
      return false;
    }

    if (item.price > appState.activeFilter.maxPrice) {
      return false;
    }

    if (appState.activeFilter.search) {
      const q = appState.activeFilter.search.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchBrand = item.brand.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchSport = item.sport.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchDesc && !matchSport) {
        return false;
      }
    }
    return true;
  });

  switch (appState.activeFilter.sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'popular':
      filtered.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
      break;
    default:

      filtered.sort((a, b) => (b.isProChoice ? 1 : 0) - (a.isProChoice ? 1 : 0));
  }

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${SPORTX_DATA.products.length} Products`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">No Matching Pro Gear Found</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try resetting your sport, brand, or price filters to see more results.</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-gradient-orange text-white rounded-lg text-xs font-bold shadow-md">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(renderProductCard).join('');
}

function syncFilterUI() {

  document.querySelectorAll('.filter-sport-btn').forEach(btn => {
    if (btn.dataset.sport === appState.activeFilter.sport) {
      btn.className = 'filter-sport-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-gradient-orange text-white shadow-orange';
    } else {
      btn.className = 'filter-sport-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700';
    }
  });

  const brandSelect = document.getElementById('filter-brand-select');
  if (brandSelect) brandSelect.value = appState.activeFilter.brand;

  const priceDisplay = document.getElementById('price-slider-value');
  const priceSlider = document.getElementById('price-slider');
  if (priceSlider) priceSlider.value = appState.activeFilter.maxPrice;
  if (priceDisplay) priceDisplay.textContent = `$${appState.activeFilter.maxPrice}`;
}

function filterBySport(sportName) {
  appState.activeFilter.sport = sportName;
  syncFilterUI();
  renderProducts();
}

function filterByBrand(brandName) {
  appState.activeFilter.brand = brandName;
  syncFilterUI();
  renderProducts();
}

function filterBySearch(query) {
  appState.activeFilter.search = query;
  renderProducts();
}

function filterByPrice(val) {
  appState.activeFilter.maxPrice = parseInt(val, 10);
  const priceDisplay = document.getElementById('price-slider-value');
  if (priceDisplay) priceDisplay.textContent = `$${val}`;
  renderProducts();
}

function filterBySort(sortVal) {
  appState.activeFilter.sort = sortVal;
  renderProducts();
}

function resetFilters() {
  appState.activeFilter = {
    sport: 'all',
    brand: 'all',
    search: '',
    sort: 'featured',
    maxPrice: 600
  };
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) searchInput.value = '';
  syncFilterUI();
  renderProducts();
}

function renderHomeHighlights() {
  const container = document.getElementById('home-featured-grid');
  if (!container) return;

  const cricket = SPORTX_DATA.products.filter(p => p.sport === 'cricket').slice(0, 2);
  const football = SPORTX_DATA.products.filter(p => p.sport === 'football').slice(0, 2);
  const badminton = SPORTX_DATA.products.filter(p => p.sport === 'badminton').slice(0, 2);
  const fitness = SPORTX_DATA.products.filter(p => p.sport === 'fitness').slice(0, 2);

  const featured = [...cricket, ...football, ...badminton, ...fitness];
  container.innerHTML = featured.map(renderProductCard).join('');
}

function renderBrands() {
  const container = document.getElementById('brands-grid');
  if (!container) return;

  container.innerHTML = SPORTX_DATA.brands.map(b => `
    <div class="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1E1E26] p-6 shadow-sm hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-col justify-between">
      <div>
        <div class="flex items-start justify-between">
          <div class="w-14 h-14 rounded-xl bg-slate-900 dark:bg-black/60 border border-slate-800 flex items-center justify-center font-heading font-extrabold text-xl text-blue-500 shadow-inner">
            ${b.logoText.slice(0, 4)}
          </div>
          <span class="px-2.5 py-1 text-[10px] font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            ${b.sport} • ${b.country}
          </span>
        </div>

        <h3 class="text-xl font-heading font-extrabold text-slate-900 dark:text-white mt-4">${b.name}</h3>
        <p class="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mt-0.5">"${b.tagline}"</p>

        <p class="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
          ${b.description}
        </p>

        <div class="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80">
          <span class="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Flagship Gear:</span>
          <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">${b.featuredGear}</span>
        </div>
      </div>

      <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <span class="text-xs font-semibold text-blue-500 dark:text-blue-400 flex items-center gap-1">
          <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          100% Authorized Dealer
        </span>

        <button onclick="navigateTo('products', null, '${b.linkFilter}')" class="px-4 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-gradient-orange text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 group">
          <span>Shop ${b.logoText}</span>
          <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

function updateTeamCalculator() {
  const sportType = document.getElementById('calc-sport-type')?.value || 'cricket';
  const qtyInput = document.getElementById('calc-qty-input');
  const qtySlider = document.getElementById('calc-qty-slider');
  const qty = parseInt(qtySlider?.value || 30, 10);

  if (qtyInput) qtyInput.value = qty;

  const basePrices = {
    cricket: 48,
    football: 38,
    badminton: 32,
    fitness: 28
  };

  const basePrice = basePrices[sportType] || 40;

  const addPlayerNames = document.getElementById('calc-addon-names')?.checked || false;
  const addEmbroidery = document.getElementById('calc-addon-embroidery')?.checked || false;
  const addSocks = document.getElementById('calc-addon-socks')?.checked || false;

  let unitAddon = 0;
  if (addPlayerNames) unitAddon += 5;
  if (addEmbroidery) unitAddon += 4;
  if (addSocks) unitAddon += 6;

  const unitBeforeDiscount = basePrice + unitAddon;

  let discountTierPercent = 0;
  if (qty >= 100) {
    discountTierPercent = 35;
  } else if (qty >= 50) {
    discountTierPercent = 25;
  } else if (qty >= 25) {
    discountTierPercent = 15;
  } else if (qty >= 15) {
    discountTierPercent = 10;
  }

  const finalUnitPrice = Math.round(unitBeforeDiscount * (1 - discountTierPercent / 100));
  const estimatedTotal = finalUnitPrice * qty;
  const savings = (unitBeforeDiscount * qty) - estimatedTotal;

  const unitPriceEl = document.getElementById('calc-unit-price');
  const totalEl = document.getElementById('calc-total-price');
  const discountTierEl = document.getElementById('calc-discount-badge');
  const savingsEl = document.getElementById('calc-savings-amount');

  if (unitPriceEl) unitPriceEl.textContent = `$${finalUnitPrice} / kit`;
  if (totalEl) totalEl.textContent = `$${estimatedTotal.toLocaleString()}`;
  if (savingsEl) savingsEl.textContent = `Save $${savings.toLocaleString()} with team discount!`;
  if (discountTierEl) {
    discountTierEl.textContent = `${discountTierPercent}% TIER DISCOUNT APPLIED`;
  }
}

function syncCalcSliderFromInput(val) {
  const slider = document.getElementById('calc-qty-slider');
  if (slider) {
    slider.value = Math.max(15, Math.min(500, parseInt(val, 10) || 15));
    updateTeamCalculator();
  }
}

function handleTeamFormSubmit(e) {
  e.preventDefault();
  const teamName = document.getElementById('team-order-name')?.value || 'Your Team';
  const email = document.getElementById('team-order-email')?.value || '';

  showToast(`Team Quote Request sent for "${teamName}"! Our custom kit director will email you within 2 hours.`, 'success');
  e.target.reset();
}

function handleContactFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name')?.value || 'Valued Athlete';
  showToast(`Thanks ${name}! We've received your message and will reply shortly.`, 'success');
  e.target.reset();
}

function runGearQuiz() {
  const sport = document.getElementById('quiz-sport')?.value;
  const level = document.getElementById('quiz-level')?.value;
  const resultCard = document.getElementById('quiz-result');
  const resultText = document.getElementById('quiz-result-text');
  const resultBtn = document.getElementById('quiz-result-btn');

  if (!resultCard || !resultText || !resultBtn) return;

  const matches = SPORTX_DATA.products.filter(p => p.sport === sport);
  let recommended = matches[0];
  if (level === 'pro' && matches.find(p => p.isProChoice)) {
    recommended = matches.find(p => p.isProChoice);
  }

  resultText.innerHTML = `
    Based on your <span class="font-bold text-blue-500 capitalize">${level}</span> level in <span class="font-bold text-blue-500 capitalize">${sport}</span>, we recommend the
    <span class="font-bold text-slate-900 dark:text-white">${recommended.name}</span>!
  `;
  resultBtn.onclick = () => {
    openQuickView(recommended.id);
  };
  resultCard.classList.remove('hidden');
}

function openMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.remove('hidden');
}
function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.add('hidden');
}

function openCheckoutModal() {
  if (appState.cart.length === 0) {
    showToast('Your gear bag is empty!', 'info');
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    const totalEl = document.getElementById('checkout-modal-total');
    let subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    if (appState.appliedPromo) {
      subtotal -= Math.round(subtotal * (appState.appliedPromo.percent / 100));
    }
    if (totalEl) totalEl.textContent = `$${subtotal}`;
    modal.classList.add('open');
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('open');
}

function completeCheckoutSimulation(e) {
  e.preventDefault();
  closeCheckoutModal();
  appState.cart = [];
  saveCart();
  showToast('Order Placed Successfully! Tracking details dispatched to your email.', 'success');
}

window.addEventListener('DOMContentLoaded', () => {
  initStorage();

  const hash = window.location.hash.replace('#', '');
  if (hash && ['home', 'products', 'brands', 'team-orders', 'contact', 'about'].includes(hash)) {
    navigateTo(hash);
  } else {
    navigateTo('home');
  }

  renderHomeHighlights();
  renderProducts();
  renderBrands();
  updateTeamCalculator();
  updateCartBadges();
  updateWishlistBadges();
});

