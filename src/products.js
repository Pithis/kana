export const categories = [
  {
    id: "vr-arcade",
    name: "VR & Arcade",
    description: "Immersive virtual reality platforms and classic arcade machines for cutting-edge gaming zones.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop",
    count: 10
  },
  {
    id: "bowling",
    name: "Bowling",
    description: "Professional lane systems, automated scorekeepers, and compact duckpin setups.",
    image: "https://images.unsplash.com/photo-1538510126845-f483ff3021f7?q=80&w=800&auto=format&fit=crop",
    count: 10
  },
  {
    id: "soft-play",
    name: "Soft Play",
    description: "Safe, sensory-rich multi-level indoor play structures and toddler climbing zones.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop",
    count: 10
  },
  {
    id: "trampoline-parks",
    name: "Trampoline Parks",
    description: "High-performance trampoline beds, dodgeball courts, foam pits, and ninja courses.",
    image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?q=80&w=800&auto=format&fit=crop",
    count: 10
  },
  {
    id: "inflatables",
    name: "Inflatables",
    description: "Mega bounce castles, giant slide runs, and interactive inflatable obstacles.",
    image: "https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=800&auto=format&fit=crop",
    count: 10
  },
  {
    id: "water-theme",
    name: "Water Attractions",
    description: "Exciting water slides, splash pads, wave generators, and lazy river systems.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
    count: 10
  },
  {
    id: "adventure",
    name: "Adventure Attractions",
    description: "Challenging ropes courses, zip lines, and vertical auto-belayed climbing walls.",
    image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=800&auto=format&fit=crop",
    count: 10
  },
  {
    id: "interactive",
    name: "Interactive Games",
    description: "Gamified wall and floor projections, reaction speed grids, and smart targets.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    count: 10
  },
  {
    id: "kid-rides",
    name: "Kid Rides",
    description: "Charming mini carousels, electric track trains, and colorful mechanical rides.",
    image: "https://images.unsplash.com/photo-1572508589584-94d778209dd9?q=80&w=800&auto=format&fit=crop",
    count: 10
  },
  {
    id: "amusement-rides",
    name: "Amusement Rides",
    description: "Family-friendly mechanical thrill rides, drop towers, and spinning attraction platforms.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    count: 10
  }
];

// Base detailed products database to maintain high fidelity details
const baseDetailedProducts = [
  // VR & Arcade
  {
    id: "vr-omni-arena",
    name: "VR Omni Arena 360",
    category: "vr-arcade",
    categoryName: "VR & Arcade",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=600&auto=format&fit=crop"
    ],
    description: "An industry-leading multiplayer VR experience. Features a 360-degree treadmill system that lets players walk, run, and turn freely in virtual reality while competing for high scores in e-sports tournaments.",
    features: ["Omnidirectional treadmill system", "Integrated leaderboard & tournament system", "Ultra-low latency VR headsets", "Dynamic haptic vest feedback", "Interactive lighting outer-shell"],
    specifications: {
      "Operating System": "KanaOS Virtual Platform",
      "Power Requirements": "220V AC / 16A",
      "Tracking System": "High-precision Optical Sensors",
      "Game Content": "6 Exclusive Multiplayer Titles included",
      "Headsets Supported": "KanaVR Pro v2 / HTC Vive Focus 3"
    },
    dimensions: "3200mm (W) x 3200mm (D) x 2700mm (H)",
    capacity: "4 Active Players",
    safety: ["Heavy-duty ring harnesses", "Instant power-kill safety switch", "Padded support structures", "Continuous system self-diagnostic checks"],
    variants: ["Duo Base", "Quad Arena", "Vanguard Elite"],
    featured: true
  },
  {
    id: "neon-cyber-racer",
    name: "Neon Cyber Racer Simulator",
    category: "vr-arcade",
    categoryName: "VR & Arcade",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop"],
    description: "Premium motorcycle and sports car arcade racer with advanced force-feedback steering, dynamic cabin tilting, and bright neon RGB styling. Built to draw crowds in any gaming zone.",
    features: ["3-Axis dynamic motion platform", "4K Ultra-HD 55-inch display panel", "True force-feedback steering", "Linkable up to 8 cabinets"],
    specifications: { "Monitor": "55\" Curved LED", "Power": "220V AC / 10A", "Motion": "Servo electric" },
    dimensions: "2100mm (W) x 1200mm (D) x 2050mm (H)",
    capacity: "1 Rider/Driver",
    safety: ["Soft padded safety bumpers", "Auto-centering controls", "Reinforced steel frame"],
    variants: ["Cyber Motorcycle Edition", "Supercar Cabin Edition"],
    featured: true
  },
  // Bowling
  {
    id: "pro-lane-bowling",
    name: "Pro-Lane Bowling System",
    category: "bowling",
    categoryName: "Bowling",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1538510126845-f483ff3021f7?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1538510126845-f483ff3021f7?q=80&w=600&auto=format&fit=crop"],
    description: "A complete professional-grade synthetic bowling lane system with automated pinsetters, glow-in-the-dark LED lanes, state-of-the-art console interfaces, and high-efficiency ball returns.",
    features: ["USBC-approved synthetic lanes", "Next-Gen stringless mechanical pinsetters", "Interactive lane-projection animations", "Touchscreen player consoles"],
    specifications: { "Lane Material": "High-density synthetic panels", "Pinsetter Type": "Stringless mechanical", "Power": "380V Three-Phase / 15A" },
    dimensions: "25400mm (L) x 3400mm (W) x 2100mm (H)",
    capacity: "Up to 8 Players per Lane",
    safety: ["Optical player cross-line sensors", "Under-lane ball return safety covers"],
    variants: ["Standard Glow Lane", "Dynamic Projection Lane"],
    featured: true
  },
  {
    id: "duckpin-mini-bowling",
    name: "Duckpin Mini Bowling Setup",
    category: "bowling",
    categoryName: "Bowling",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddade?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1544124499-58912cbddade?q=80&w=600&auto=format&fit=crop"],
    description: "Perfect for bars, restaurants, hotels, and smaller Family Entertainment Centers. Requires 50% less space than standard bowling but offers all the fun.",
    features: ["Compact footprint", "Smaller 1.5kg balls without finger holes", "Self-service terminal scoring", "Low maintenance string pinsetters"],
    specifications: { "Lane Length": "12.5m to 15.5m", "Ball Weight": "1.3kg to 1.7kg", "Power": "220V AC / 8A" },
    dimensions: "14500mm (L) x 1500mm (W) x 1800mm (H)",
    capacity: "Up to 6 Players per Lane",
    safety: ["Padded pit backboards", "Enclosed mechanisms"],
    variants: ["Classic Duckpin Mode", "Neon LED Lounge Special"],
    featured: false
  },
  // Soft Play
  {
    id: "jungle-safari-soft-play",
    name: "Jungle Safari Multi-Level Soft Play",
    category: "soft-play",
    categoryName: "Soft Play",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop"],
    description: "A large, multi-level maze structures decorated in a fun jungle safari theme. Includes bridges, triple-lane slides, foam obstacle blockades, spiral slide, and giant ball pits.",
    features: ["Triple-lane wavy speed slides", "Large interactive ball pool", "Heavy-duty impact protection netting", "Toddler-dedicated safe zone"],
    specifications: { "Structure Material": "Galvanized steel tubing wrapped in thick foam", "Flame Retardancy": "BS5852 / EN1176 Certified", "Age Group": "2 - 12 Years old" },
    dimensions: "12000mm (W) x 8000mm (D) x 4500mm (H)",
    capacity: "80 - 100 Children",
    safety: ["Fully foam-clad structure frames", "Soft impact-absorbing EVA floor mats"],
    variants: ["Standard Jungle Theme", "Ocean Deep Theme", "Space Explorer Theme"],
    featured: true
  },
  {
    id: "sensory-toddler-castle",
    name: "Sensory Toddler Castle",
    category: "soft-play",
    categoryName: "Soft Play",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop"],
    description: "Specifically designed for kids under 4 years old. Focuses on developmental sensory panel integration, soft steps, and safe crawling modules for fine motor skill development.",
    features: ["Interactive sensory walls", "Soft climbing ramp and mini slide", "Mini ball pit", "Soft foam construction"],
    specifications: { "Material": "High density foam + soft PU leather", "Cleanability": "Sanitizer resistant anti-bacterial surfaces" },
    dimensions: "5000mm (W) x 4000mm (D) x 2000mm (H)",
    capacity: "15 - 20 Toddlers",
    safety: ["100% foam construction modules", "Anti-slip flooring mats"],
    variants: ["Castle Theme", "Sweetland Theme"],
    featured: false
  },
  // Trampoline Parks
  {
    id: "extreme-jump-arena",
    name: "Extreme Jump Trampoline Arena",
    category: "trampoline-parks",
    categoryName: "Trampoline Parks",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1519766304817-4f37bda74a27?q=80&w=600&auto=format&fit=crop"],
    description: "A state-of-the-art modular trampoline park configuration containing free jump zones, slam dunk tracks, dodgeball courts, angled wall beds, and integrated airbag/foam landing pits.",
    features: ["High-performance jump beds", "Thick safety padding covers (80mm)", "Angled wall trampolines", "Heavy-duty steel frame"],
    specifications: { "Frame Steel": "80mm galvanized square steel", "Springs": "Double-tapered piano wire", "Compliance": "ASTM F2970-15 Standards" },
    dimensions: "18000mm (W) x 12000mm (D) x 5000mm (H)",
    capacity: "40 - 50 Jumpers",
    safety: ["Fully padded frame joints and springs", "High containment safety nets", "Foam landing pits"],
    variants: ["Free Jump + Dodgeball Kit", "Elite Ninja Challenge + Foam Pit Combo"],
    featured: true
  },
  // Inflatables
  {
    id: "colossal-obstacle-course",
    name: "Colossal Inflatable Obstacle Course",
    category: "inflatables",
    categoryName: "Inflatables",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=600&auto=format&fit=crop"],
    description: "An incredibly massive commercial-grade inflatable run designed for outdoor events and large indoor zones. Features climbing walls, slide runs, tunnels, squeeze-throughs, and balance beams.",
    features: ["Plato 0.55mm heavy-duty PVC Tarpaulin", "Quadruple-stitched stress points", "Dual-lane layouts", "Commercial continuous blowers"],
    specifications: { "Fabric Material": "0.55mm PVC Tarpaulin", "Air Blower": "CE/UL certified 2.0HP", "Compliance": "EN14960 Safety Standards" },
    dimensions: "22000mm (L) x 4500mm (W) x 5800mm (H)",
    capacity: "Up to 20 active racers",
    safety: ["Extra long safety exit runways", "Strong D-ring anchoring points", "Inflation safety netting"],
    variants: ["Dual-Lane Challenger", "Tropical Run Custom Color Edition"],
    featured: false
  },
  {
    id: "mega-bounce-kingdom",
    name: "Mega Bounce Kingdom",
    category: "inflatables",
    categoryName: "Inflatables",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1572508589584-94d778209dd9?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1572508589584-94d778209dd9?q=80&w=600&auto=format&fit=crop"],
    description: "Premium medieval castle design bouncy castle with an integrated slide and mini interior obstacles, perfect for birthday parties, FEC rentals, and shopping mall events.",
    features: ["Vibrant high-contrast prints", "Integrated slide exiting at front", "Interior vertical punching pillars", "Protective mesh roof cover"],
    specifications: { "Material": "0.55mm PVC Tarpaulin", "Inflation Time": "Under 3 minutes" },
    dimensions: "6000mm (W) x 6000mm (D) x 4500mm (H)",
    capacity: "10 - 12 Kids",
    safety: ["Inflatable entrance step ramp", "High mesh sidewalls", "Blower check-valve protection"],
    variants: ["Classic Medieval", "Unicorn Fantasy Edition"],
    featured: true
  },
  // Water Attractions
  {
    id: "aqua-splash-zone",
    name: "Aqua Splash Water Playground",
    category: "water-theme",
    categoryName: "Water Attractions",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600&auto=format&fit=crop"],
    description: "An interactive aquatic playground structure featuring fiber-reinforced plastic (FRP) slides, spray nozzles, water cannons, interactive control wheels, and a giant tipping bucket.",
    features: ["UV-stabilized FRP slides", "Anti-corrosive marine-grade steel pipes", "500-liter automatic tipping bucket", "Non-slip textured steps"],
    specifications: { "Framework": "316L Marine-grade stainless steel", "Water Supply": "100 cubic meters/hour", "Certifications": "EN1069 Water Slide Standard" },
    dimensions: "15000mm (W) x 12000mm (D) x 6500mm (H)",
    capacity: "50 - 70 Kids & Adults",
    safety: ["Anti-skid walkway coverings", "Finger-safe spray nozzles", "Slow-dump safety mechanism"],
    variants: ["Pirate Island Custom Layout", "Ocean Aqua Paradise"],
    featured: true
  },
  // Adventure Attractions
  {
    id: "sky-ropes-course",
    name: "Sky-High Multi-Tier Ropes Course",
    category: "adventure",
    categoryName: "Adventure Attractions",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=600&auto=format&fit=crop"],
    description: "A thrilling suspended adventure park designed for shopping malls, outdoor parks, and resorts. Participants navigate challenging elements like rope bridges, suspended logs, and zip lines while safely hooked to a continuous overhead track.",
    features: ["Continuous belay tracking system", "Multi-tier configuration (up to 3 levels)", "24+ unique suspended elements", "Integrated landing platforms"],
    specifications: { "Main Framework": "Heavy-gauge structural carbon steel", "Belay Track": "Extruded structural aluminum", "Standards": "EN 15567 / ACCT Standards" },
    dimensions: "16000mm (W) x 10000mm (D) x 9500mm (H)",
    capacity: "Up to 30 active participants",
    safety: ["100% continuous connection track", "Professional full-body safety harnesses", "Staff rescue tools included"],
    variants: ["2-Level Indoor Mall Kit", "3-Level High-Thrill Resort Edition"],
    featured: true
  },
  {
    id: "vertical-ledge-wall",
    name: "Ledge Climber Interactive Wall",
    category: "adventure",
    categoryName: "Adventure Attractions",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=600&auto=format&fit=crop"],
    description: "Premium climbing wall columns with realistic wood and fiberglass finishes, integrated LED handholds, and automatic safety auto-belays that smoothly lower climbers back down.",
    features: ["Premium auto-belay braking mechanisms", "Modular climbing panels", "LED path guidance system", "Fiberglass textured rock face"],
    specifications: { "Belay Device": "Perfect Descent auto-belays", "Panel Load": "Tested to 500kg shear" },
    dimensions: "4500mm (W) x 1200mm (D) x 8000mm (H)",
    capacity: "3 active climbers",
    safety: ["Dual magnetic auto-belay system", "Impact absorbing landing mats"],
    variants: ["Standard Rock Textured Panel", "LED Cyber Lightpath Panel"],
    featured: false
  },
  // Interactive Games
  {
    id: "wall-projection-game",
    name: "Interactive Wall Projection Game",
    category: "interactive",
    categoryName: "Interactive Games",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop"],
    description: "Transforms a standard flat wall into an interactive digital playground. Players throw soft balls at moving graphics projected on the wall, triggering animations, sounds, and score counts.",
    features: ["6000 lumens laser projector", "High-speed infrared sensor tracking", "30+ educational & action games", "Surrounding acoustic audio setup"],
    specifications: { "Projector": "Laser Light Engine 6000LM", "Sensor": "IR Laser Scan Engine", "Power": "220V AC / 5A" },
    dimensions: "Adjustable (3m to 6m wide)",
    capacity: "Up to 10 active throwers",
    safety: ["Soft ball throwing targets only", "Recessed ceiling hardware mount"],
    variants: ["Wall Projection Pack", "Floor Projection Edition"],
    featured: false
  },
  // Kid Rides
  {
    id: "vintage-carousel-mini",
    name: "Vintage Carousel Mini",
    category: "kid-rides",
    categoryName: "Kid Rides",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1572508589584-94d778209dd9?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1572508589584-94d778209dd9?q=80&w=600&auto=format&fit=crop"],
    description: "A beautifully crafted miniature carousel featuring hand-painted fiberglass horses, warm golden LED lights, and custom carnival music. Ideal for shopping malls and kid zones.",
    features: ["Hand-finished fiberglass horses", "Over 400 soft warm LED points", "Soft-start rotary gearbox", "Built-in retro soundsystem"],
    specifications: { "Power": "220V AC / 8A", "Rotation Speed": "Adjustable (Default: 3 RPM)" },
    dimensions: "3600mm (Diameter) x 2800mm (H)",
    capacity: "6 Children",
    safety: ["Individual waist safety belts", "Perimeter proximity barrier", "Emergency push-lock button"],
    variants: ["Classic Horse Carousel", "Fantasy Ocean Carousel"],
    featured: true
  },
  // Amusement Rides
  {
    id: "spinning-ufo-ride",
    name: "Spinning UFO Thrill Ride",
    category: "amusement-rides",
    categoryName: "Amusement Rides",
    price: "Contact for Quote",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop"],
    description: "A thrilling mechanical amusement ride designed for indoor FECs and outdoor parks. Riders sit in outward-facing seats on a circular platform that spins rapidly while tilting up and down on a hydraulic arm.",
    features: ["Double shoulder safety harnesses", "Pneumatically locking lapbars", "Multi-speed spin sequences", "Stunning RGB light displays"],
    specifications: { "Power": "380V Three-Phase / 22kW peak", "Hydraulic System": "Dual-cylinder electric pump" },
    dimensions: "6500mm (Diameter) x 3200mm (H)",
    capacity: "12 Riders",
    safety: ["Dual restrains lockouts", "Perimeter fence interlocks", "PLC automatic safety overrides"],
    variants: ["Classic Space UFO", "Volcano Explorer Theme"],
    featured: true
  }
];

// Definition of secondary products to expand each of the 10 categories to exactly 10 items (100 total)
const categoryProductsDefinitions = {
  "vr-arcade": [
    { name: "VR Mech Battler Cabin", imgIndex: 1, desc: "Twin joysticks and feedback motion cabin simulating robot warfare." },
    { name: "VR Flight Wing Glide", imgIndex: 2, desc: "Suspended layout simulating real hang-gliding stunts." },
    { name: "Retro Arcade Cabinet", imgIndex: 3, desc: "Classic multi-game cabinet containing 2000+ legal retro titles." },
    { name: "VR Beat Rhythm Stage", imgIndex: 0, desc: "Dedicated dancing and rhythmic light saber slash platforms." },
    { name: "Cyber Cycle Light Runner", imgIndex: 1, desc: "Futuristic motorcycle racing frame with full physical tilting." },
    { name: "VR Paraglider Simulator", imgIndex: 2, desc: "Hanging seat harness with wind blowers simulating alpine descents." },
    { name: "Ultra Air Hockey Table", imgIndex: 3, desc: "Heavy-duty commercial air hockey table with digital display scores." },
    { name: "VR Roller Coaster Pod", imgIndex: 0, desc: "2-seat motion pod with dynamic G-force pitching and wind effects." }
  ],
  "bowling": [
    { name: "Cosmic Neon Lanes", imgIndex: 2, desc: "Fluorescent synthetic panels that glow under blacklight setups." },
    { name: "Boutique Vintage Lanes", imgIndex: 3, desc: "Warm wood-grain laminate panels combining retro styling with new sensors." },
    { name: "Highway 66 Bowling", imgIndex: 0, desc: "Miniature bowling system optimized for high-traffic lounge zones." },
    { name: "Spark Interactive Lanes", imgIndex: 1, desc: "Real-time ball tracking overlays that project flames or water ripples on lanes." },
    { name: "HyperBowling Scoring Lanes", imgIndex: 2, desc: "Interactive bumper-sensor layout scoring bumpers as multiplier targets." },
    { name: "Kids Bumper Bowling", imgIndex: 3, desc: "Pneumatically operated side bumpers that deploy automatically." },
    { name: "Premium Private Lounge Lane", imgIndex: 0, desc: "Custom designed luxury wood grain layout with leather console seating." },
    { name: "Duckpin Elite Lane", imgIndex: 1, desc: "Professional high-speed stringless lane for duckpin tournament leagues." }
  ],
  "soft-play": [
    { name: "Under the Sea Adventure Zone", imgIndex: 2, desc: "Ocean theme soft play structure containing octopus slides and sub crawls." },
    { name: "Space Explorer Rocket Maze", imgIndex: 3, desc: "Multi-level play maze decorated as an intergalactic spaceship hub." },
    { name: "Candyland Rainbow Slide", imgIndex: 0, desc: "Bright multi-lane spiral slide made of flame-retardant dense foam." },
    { name: "Active Ninja Kids Soft Course", imgIndex: 1, desc: "Safe kid-scale obstacle course with punching bags and foam steps." },
    { name: "Giant Ball Fountain Playground", imgIndex: 2, desc: "Pneumatic air tubes that launch soft plastic balls into overhead drop trays." },
    { name: "Soft Foam Climb & Crawl Ramp", imgIndex: 3, desc: "Low-height rolling cylinder ramps and crawling tunnels for infants." },
    { name: "Toddler Soft Blocks Zone", imgIndex: 0, desc: "Premium giant EVA foam bricks for open building and stacking play." },
    { name: "Premium Treehouse Play Center", imgIndex: 1, desc: "Wooden-framed interior treehouse soft panels for library and hotel zones." }
  ],
  "trampoline-parks": [
    { name: "Slam Dunk Jump Tracks", imgIndex: 1, desc: "High-rebound trampoline lanes terminating at safety basketball hoops." },
    { name: "Dodgeball Trampoline Arena", imgIndex: 2, desc: "Angled perimeter beds inside a mesh-enclosed team play grid." },
    { name: "Foam Pit Freejump Launch", imgIndex: 3, desc: "Long runway leading to a safe 1.5-meter deep foam cube landing zone." },
    { name: "Olympic Performance Bed", imgIndex: 0, desc: "Woven nylon string bed providing maximum height and air-time for acrobats." },
    { name: "Toddler Jump Play Zone", imgIndex: 1, desc: "Low-tension safe springs and short beds for children under 5." },
    { name: "Ninja Warrior Course Frame", imgIndex: 2, desc: "Suspended obstacles over a giant double-density air bag pit." },
    { name: "Airbag Stunt Jump Bed", imgIndex: 3, desc: "Professional stunt-jump pad with rapid-deflation valves for clean drops." },
    { name: "Interactive Screen Jump Grid", imgIndex: 0, desc: "Camera-tracked trampoline where player jumps control digital games." },
    { name: "High-Performance Wall Trampoline", imgIndex: 1, desc: "Vertical walk-up vinyl walls for running stunts and dynamic bounces." }
  ],
  "inflatables": [
    { name: "Giant Dual-Lane Water Slide", imgIndex: 2, desc: "Commercial heavy duty wet slide with splash pool exit." },
    { name: "Jurassic Dinosaur Play Castle", imgIndex: 3, desc: "Inflatable bounce house decorated with giant detailed 3D dinosaurs." },
    { name: "Pirate Adventure Ship Inflatable", imgIndex: 0, desc: "Sailing galleon design with interior climbing walls and slide paths." },
    { name: "Interactive Bungee Run", imgIndex: 1, desc: "Dual lane strength-test run with velcro markers and safety harnesses." },
    { name: "Foam Splash Inflatable Pool", imgIndex: 2, desc: "Shallow bounce pool designed to hold foam spray structures." },
    { name: "Space Shuttle Inflatable Maze", imgIndex: 3, desc: "Winding dark corridors inside an inflatable lunar base dome." },
    { name: "Toddler Safe Jump Castle", imgIndex: 0, desc: "Fully enclosed low-walled bounce zone with soft mesh sight windows." },
    { name: "Gladiator Duel Arena", imgIndex: 1, desc: "Circular pedestal stands where opponents attempt to balance with foam sticks." }
  ],
  "water-theme": [
    { name: "Tornado Spiral Water Slide", imgIndex: 1, desc: "Huge funnel slide that sucks rafts down into a high-splash pool." },
    { name: "Lazy River Floating Course", imgIndex: 2, desc: "Gentle current pump systems and outer channel river layouts." },
    { name: "Kids Splash Pad Water Park", imgIndex: 3, desc: "Zero-depth concrete wet deck with spraying nozzles and interactive arches." },
    { name: "Kamikaze Speed Slide", imgIndex: 0, desc: "Nearly vertical open flume slide generating high speeds and thrills." },
    { name: "Wave Pool Surf Generator", imgIndex: 1, desc: "Pneumatic chamber wind waves creating realistic ocean beach surges." },
    { name: "Family Raft Slide", imgIndex: 2, desc: "Wide enclosed fiberglass slide accommodating multi-person rafts." },
    { name: "Interactive Water Gun Station", imgIndex: 3, desc: "Target screens hit by pressurized spray nozzles operated by kids." },
    { name: "Super Tipping Bucket Tower", imgIndex: 0, desc: "Suspended platform with rotating bucket heads and spray tunnels." },
    { name: "Double Aqua Loop Slide", imgIndex: 1, desc: "High thrill trap-door launch slide with vertical 360 loop sections." }
  ],
  "adventure": [
    { name: "Extreme Zip Line Canopy", imgIndex: 2, desc: "Gravity powered suspended cable run with magnetic trolley brakes." },
    { name: "Vertical Rock Face Climber", imgIndex: 3, desc: "Textured fiberglass panels mimicking real granite ridges with safety lines." },
    { name: "Ninja Climbing Rope Net", imgIndex: 0, desc: "Tangled carbon fiber mesh nets suspended vertically for agility training." },
    { name: "Suspended Log Bridge Walk", imgIndex: 1, desc: "Swinging logs chain-linked to main support columns for balance checks." },
    { name: "Double Speed Climbing Wall", imgIndex: 2, desc: "Dual parallel climbing tracks with electronic start/stop timer buttons." },
    { name: "Adventure Sky Trail Course", imgIndex: 3, desc: "Continuous belay trail designed for tight indoor mall spaces." },
    { name: "Bouldering Kids Cave", imgIndex: 0, desc: "Low-height climbing walls wrapped with dense protective floor mats." },
    { name: "High-Wire Balance Challenge", imgIndex: 1, desc: "Thin steel wires suspended 5 meters high with balancing hand ropes." }
  ],
  "interactive": [
    { name: "Gamified Floor Projection", imgIndex: 1, desc: "Projects soccer fields or coin runs that respond to player feet." },
    { name: "Reaction Speed Light Wall", imgIndex: 2, desc: "Vertical button grid that lights up randomly to test reaction times." },
    { name: "Interactive Sandbox Map", imgIndex: 3, desc: "Kinect-tracked real sand displaying height contours and mock water." },
    { name: "Laser Maze Agent Room", imgIndex: 0, desc: "Grid of green laser lines that players must dodge to reach target keys." },
    { name: "Smart Target Shooting Range", imgIndex: 1, desc: "Digital archery and target boards responding to soft rubber tips." },
    { name: "Interactive Cycle Training", imgIndex: 2, desc: "Bikes linked to screen projections simulating road racing tracks." },
    { name: "Pulse Reaction Floor Tiles", imgIndex: 3, desc: "LED tiles that change color when stepped on, supporting tag games." },
    { name: "AR Climbing Wall Guide", imgIndex: 0, desc: "Climbing wall with overlay trails showing paths and virtual targets." },
    { name: "Interactive Sports Simulator", imgIndex: 1, desc: "Multi-sport projection room for golf, soccer, and baseball testing." }
  ],
  "kid-rides": [
    { name: "Electric Track Train", imgIndex: 1, desc: "Miniature steam train running on low-voltage metal floor tracks." },
    { name: "Mini Honeybee Swinger", imgIndex: 2, desc: "Gentle rotary ride with honeybee cabins that raise slightly." },
    { name: "Kid Electric Bumper Cars", imgIndex: 3, desc: "Floor-grid bumper cars scaled for kids aged 4 to 8." },
    { name: "Mini Ferris Wheel Kids", imgIndex: 0, desc: "5-meter tall vertical wheel containing 5 enclosed safe cabins." },
    { name: "Kids Safari Jeep Track", imgIndex: 1, desc: "Guided electric cars styled as safari vehicles traveling through forest scenery." },
    { name: "Happy Caterpillar Coaster", imgIndex: 2, desc: "Low-speed junior roller coaster with caterpillar theme carriages." },
    { name: "Ocean Pearl Shell Swinger", imgIndex: 3, desc: "Rotary swing ride styled with pearl clams and under-sea decals." },
    { name: "Kids Flying Jet Ride", imgIndex: 0, desc: "Small rocket cabins that riders can tilt up and down using levers." },
    { name: "Mini Helicopter Ride", imgIndex: 1, desc: "Coin-operated mini mechanical ride with interactive helicopter sounds." }
  ],
  "amusement-rides": [
    { name: "Family Ferris Wheel", imgIndex: 1, desc: "A stunning 15-meter Ferris wheel with 12 enclosed dynamic cabins." },
    { name: "Pirate Ship Swing Ride", imgIndex: 2, desc: "Large swinging ship platform generating zero gravity air-time waves." },
    { name: "Premium Family Drop Tower", imgIndex: 3, desc: "10-meter freefall tower with magnetic braking and soft bounce exits." },
    { name: "Super Twist Tea Cup Platform", imgIndex: 0, desc: "Rotary deck with 6 cups that players spin manually using center wheels." },
    { name: "Disk'O Thrill Ride", imgIndex: 1, desc: "Riders sit facing outwards on a large disk that rolls on a curved track." },
    { name: "Wave Swinger Chair Carousel", imgIndex: 2, desc: "High-flying swinger ride that tilts at peak speed for centrifugal thrills." },
    { name: "Mini Roller Coaster", imgIndex: 3, desc: "Family mechanical coaster with steel rails and helix spiral runs." },
    { name: "Bumper Cars Arena", imgIndex: 0, desc: "Traditional floor-grid bumper car system with heavy rubber surrounds." },
    { name: "Sky Loop Flying Chair", imgIndex: 1, desc: "High speed rotating swing ride that climbs up a central 12-meter column." }
  ]
};

// Map categories to unsplash image libraries for rich graphics
const categoryImages = {
  "vr-arcade": [
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop"
  ],
  "bowling": [
    "https://images.unsplash.com/photo-1538510126845-f483ff3021f7?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544124499-58912cbddade?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1609710223199-14b56c4021a6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop"
  ],
  "soft-play": [
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop"
  ],
  "trampoline-parks": [
    "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551698618-1ffdfe1f9723?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop"
  ],
  "inflatables": [
    "https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572508589584-94d778209dd9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop"
  ],
  "water-theme": [
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
  ],
  "adventure": [
    "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop"
  ],
  "interactive": [
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop"
  ],
  "kid-rides": [
    "https://images.unsplash.com/photo-1572508589584-94d778209dd9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560930961-b179268f6862?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573055419967-a250f08e04b2?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=600&auto=format&fit=crop"
  ],
  "amusement-rides": [
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop"
  ]
};

// Generate 100 products dynamically by supplementing detailed products
function buildFullProductList() {
  const fullList = [...baseDetailedProducts];

  // Helper to check product count per category and pad it to exactly 10
  categories.forEach(cat => {
    const existing = fullList.filter(p => p.category === cat.id);
    const needed = 10 - existing.length;
    
    if (needed > 0) {
      const defs = categoryProductsDefinitions[cat.id] || [];
      for (let i = 0; i < needed; i++) {
        const def = defs[i] || { name: `${cat.name} System ${i + 1}`, imgIndex: i % 4, desc: `Premium commercial standard attraction design from KANA.` };
        const imageList = categoryImages[cat.id] || [];
        const imageUrl = imageList[def.imgIndex % imageList.length];
        
        const generatedProduct = {
          id: `${cat.id}-gen-${i + 1}`,
          name: def.name,
          category: cat.id,
          categoryName: cat.name,
          price: "Contact for Quote",
          image: imageUrl,
          images: [imageUrl],
          description: def.desc,
          features: ["Commercial Grade Build", "Full Safety System Integration", "Custom Color/Decal options available"],
          specifications: {
            "Power requirements": "220V AC / 10A",
            "Certifications": "CE, ASTM, EN-1176 Safety Audits Passed"
          },
          dimensions: "Standard Customizable Layouts",
          capacity: "Attraction Class Dependent",
          safety: ["Double impact structures", "Surrounding safety borders"],
          variants: ["Standard Fit", "FEC Elite Bundle"],
          featured: false
        };
        
        fullList.push(generatedProduct);
      }
    }
  });

  return fullList;
}

export const products = buildFullProductList();

export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getFeaturedProducts() {
  return products.filter(p => p.featured);
}
