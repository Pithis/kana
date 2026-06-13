const categories = [
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
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop"],
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
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop"],
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
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?q=80&w=600&auto=format&fit=crop",
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

const products = buildFullProductList();




// ==========================================================================
// KANA Entertainment Template Engines (Hash SPA Version)
// ==========================================================================

const categoryDetails = {
  "vr-arcade": {
    general: "Virtual Reality and arcade systems represent the cutting edge of digital amusement. These installations feature motion platforms, haptic feedback, and immersive headsets that transport players into fully interactive virtual worlds.",
    history: "Arcades began in the 1970s with simple mechanical and pixel-art cabinets. The 2010s saw a revolution with the introduction of commercial-grade VR, transitioning arcades from single-screen players to full-scale multiplayer virtual reality arenas.",
    fun: "Extremely high. The thrill of physical motion combined with 360-degree visuals creates a suspension of disbelief that home gaming cannot replicate. From competitive shooter tournaments to immersive roller coasters, these rides are high-earning anchor attractions.",
    bestSellers: ["vr-omni-arena", "neon-cyber-racer"]
  },
  "bowling": {
    general: "Professional bowling lane installations designed for Family Entertainment Centers, hotels, and luxury lounges. Utilizing synthetic oil-resistant lanes, automated stringless pinsetters, and interactive lane projection overlays.",
    history: "Bowling dates back thousands of years but was modernized in the 19th century. Today, mechanical advancements have eliminated high-maintenance pin cables, replacing them with computer-controlled stringless pinsetters and reactive lane animations.",
    fun: "Perfect for group social dynamics. It brings families, friends, and corporate groups together. The interactive mapping tracks balls and triggers custom animations (fireworks, water ripples) on the lanes, elevating the excitement.",
    bestSellers: ["pro-lane-bowling", "duckpin-mini-bowling"]
  },
  "soft-play": {
    general: "Sensory-rich, multi-level soft play structures designed to keep young children active and safe. Featuring slides, ball fountains, suspension bridges, and crawling tunnels constructed from high-density foam and anti-bacterial PU wraps.",
    history: "Soft play emerged in the late 1980s as safety standards pushed away from hard outdoor metal structures. Padded indoor playground structures became key crowd pullers for shopping malls, prioritizing child safety and parent comfort.",
    fun: "Highly interactive for kids aged 2–12. It provides endless exploration, builds motor skills, and keeps kids engaged for hours in a safe, soft-cushioned castle maze.",
    bestSellers: ["jungle-safari-soft-play", "sensory-toddler-castle"]
  },
  "trampoline-parks": {
    general: "Modular, high-performance trampoline arenas, dodgeball courts, slam-dunk zones, and foam landing pits. Engineered using heavy structural steel columns and double-tapered piano wire springs.",
    history: "Originally built for gymnast training and military pilot coordination, trampolines became massive commercial parks in the early 2000s, leading to strict ASTM standards for safety padding and containment netting.",
    fun: "Exhilarating physical thrill. Bouncing off angled wall beds and launching into massive soft foam pits or airbags provides a gravity-defying workout and high-octane fun.",
    bestSellers: ["extreme-jump-arena"]
  },
  "inflatables": {
    general: "Commercial-grade bouncing castles, slides, and obstacles built from double-stitched Plato PVC Tarpaulin. Configured for quick setup with continuous high-volume air blowers.",
    history: "Invented by mechanical engineer John Scurlock in 1959, inflatables evolved from simple air mattresses into massive modular obstacle courses and multi-tiered theme structures with safety netting.",
    fun: "Energetic, fast-paced jumping and racing. Running head-to-head through climbing tunnels and slide exits is a favorite for kids' parties and events.",
    bestSellers: ["colossal-obstacle-course", "mega-bounce-kingdom"]
  },
  "water-theme": {
    general: "Precision-molded fiberglass water slides, splash pads, lazy rivers, and wave generators built to marine-grade anti-corrosive standards for resorts and water parks.",
    history: "Water slides evolved from wooden slides in the early 1900s to computer-modeled fiberglass tubes in the 1980s that optimize water lubrication, speed, and safety G-forces.",
    fun: "Refreshing, high-speed thrills. Standing under a tipping bucket or riding down twisty flumes provides instant relief and sensory thrills for guests of all ages.",
    bestSellers: ["aqua-splash-zone"]
  },
  "adventure": {
    general: "Suspended ropes courses, zip lines, and vertical auto-belayed climbing walls. Constructed using structural carbon steel columns and continuous-connection safety tracks.",
    history: "Derived from military obstacle courses, adventure attractions entered commercial malls and hotels with the introduction of magnetic auto-belay braking and continuous safety tracking.",
    fun: "Thrilling and empowering. Navigating narrow rope obstacles high above the ground or climbing rock panels tests a player's resolve, leaving them with an adrenaline rush of success.",
    bestSellers: ["sky-ropes-course", "vertical-ledge-wall"]
  },
  "interactive": {
    general: "Gamified floor and wall projection systems that track player movements using high-intensity laser scanners and infrared camera sensors.",
    history: "Emerging in the 2010s alongside advanced short-throw projectors and computer vision, interactive systems turned standard drywall or floors into responsive digital touchscreens.",
    fun: "High engagement. Combines physical exercise (throwing balls, stomping on projections) with video game progression and scoreboards, creating a highly interactive playground.",
    bestSellers: ["wall-projection-game"]
  },
  "kid-rides": {
    general: "Charming mechanical kid rides, track trains, and mini carousels. Outfitted with hand-painted fiberglass horses, warm light LEDs, and soft-start gearboxes.",
    history: "Mechanical coin-operated rides have been a staple since the late 19th century. Today's updates replace heavy cast iron with lightweight fiberglass and programmable music cards.",
    fun: "Gentle, magical, and comforting. The rhythmic bobbing of horses, carousel tunes, and soft lights create a wonderland experience for toddlers and younger children.",
    bestSellers: ["vintage-carousel-mini"]
  },
  "amusement-rides": {
    general: "Family mechanical thrill rides, spinning platforms, and drop towers designed with advanced PLC diagnostics and industrial hydraulics.",
    history: "Born in Victorian pleasure gardens, mechanical rides evolved into high-end attractions governed by strict global safety checks, combining hydraulic lifters and spinning platforms.",
    fun: "Exhilarating physical G-forces. Rapid spinning, elevation drops, and tilts make these rides the visual centerpieces of gaming zones and malls.",
    bestSellers: ["spinning-ufo-ride"]
  }
};

function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

function getProductById(id) {
  return products.find(p => p.id === id);
}

function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

function renderStars(count = 5) {
  let stars = "";
  for (let i = 0; i < count; i++) {
    stars += '<svg class="star-icon" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
  }
  return stars;
}

// Renders the Home Page
function renderHome() {
  const featured = getFeaturedProducts();
  
  const slides = [
    {
      title: "VR Experience Arena",
      desc: "Step into the future of digital competition with multiplayer VR treadmills.",
      img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1600&auto=format&fit=crop",
      btnText: "Explore VR Systems",
      btnLink: "#/products/vr-arcade"
    },
    {
      title: "Professional Bowling Systems",
      desc: "World-class synthetic lanes, interactive projection, and robust mechanics.",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
      btnText: "Browse Lanes",
      btnLink: "#/products/bowling"
    },
    {
      title: "Soft Play Masterpieces",
      desc: "Multi-level obstacle mazes designed with absolute safety and sensory joy.",
      img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1600&auto=format&fit=crop",
      btnText: "See Playgrounds",
      btnLink: "#/products/soft-play"
    },
    {
      title: "Adventure Ropes & Climbing",
      desc: "Suspended obstacles and auto-belay vertical climbing walls for shopping malls.",
      img: "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1600&auto=format&fit=crop",
      btnText: "View Adventure Rides",
      btnLink: "#/products/adventure"
    }
  ];

  const slidesHtml = slides.map((slide, index) => `
    <div class="hero-slide ${index === 0 ? 'active' : ''}">
      <div class="hero-slide-image-wrap">
        <img src="${slide.img}" alt="${slide.title}" class="hero-slide-image">
      </div>
      <div class="container hero-content-wrapper">
        <div class="hero-content">
          <span class="badge">KANA ENTERTAINMENT</span>
          <h1 class="hero-heading animated-text">${slide.title}</h1>
          <p class="hero-description">${slide.desc}</p>
          <div class="hero-actions">
            <a href="${slide.btnLink}" class="btn btn-primary">
              ${slide.btnText}
              <svg viewBox="0 0 24 24" class="arrow-icon"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </a>
            <a href="#/catalog" class="btn btn-secondary">
              Download Catalogues
              <svg viewBox="0 0 24 24" class="arrow-icon"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  const featuredHtml = featured.map(prod => `
    <div class="product-card reveal-on-scroll">
      <div class="product-card-badge">Top Attraction</div>
      <div class="product-card-image-wrap">
        <img class="product-card-image" src="${prod.image}" alt="${prod.name}">
      </div>
      <div class="product-card-body">
        <span class="product-card-category">${prod.categoryName}</span>
        <h3 class="product-card-title">${prod.name}</h3>
        <p class="product-card-desc">${prod.description.substring(0, 85)}...</p>
        <div class="product-card-footer">
          <span class="product-card-price">${prod.price}</span>
          <a href="#/products/${prod.category}/${prod.id}" class="btn btn-sm btn-outline">Details</a>
        </div>
        <button class="btn btn-primary btn-full-width quote-trigger-btn" data-product="${prod.name}" style="margin-top: 15px;">
          Request Quote
        </button>
      </div>
    </div>
  `).join("");

  const worksImages = [
    { title: "FEC Trampoline Installation", url: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-2" },
    { title: "Boutique 8-Lane Bowling Center", url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Multi-level Indoor Soft Play Zone", url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Shopping Mall Rope Adventure", url: "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=600&auto=format&fit=crop", spanClass: "span-1-2" },
    { title: "Futuristic VR Arcade Hub", url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-1" },
    { title: "Resort Splash Water Slider", url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Theme Park Swing Carousel", url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-2" },
    { title: "Bumper Cars Arena", url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Carousel Golden Lights", url: "https://images.unsplash.com/photo-1560930961-b179268f6862?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Inflatable Mega Castle", url: "https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=600&auto=format&fit=crop", spanClass: "span-1-2" },
    { title: "VR Combat Platform", url: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-1" },
    { title: "Racer Cockpit Simulator", url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Duckpin Bowling Setup", url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Toddler Castle Soft Blocks", url: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-2" },
    { title: "Ninja Warrior Jump Nets", url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Vertical Ledge Climber", url: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Interactive Sensory Fountain", url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-1" },
    { title: "Dinosaur Slide Inflatable", url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Kids Safari Jeep Track", url: "https://images.unsplash.com/photo-1576085898312-911163fd41d2?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "AR Climbing Wall Guide", url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop", spanClass: "" }
  ];

  const galleryHtml = worksImages.map(item => `
    <div class="our-works-item ${item.spanClass} reveal-on-scroll">
      <img src="${item.url}" alt="${item.title}" class="gallery-image">
    </div>
  `).join("");

  return `
    <section class="hero-slider-section">
      <div class="hero-slides-container">
        ${slidesHtml}
      </div>
      <div class="slider-controls">
        <button class="slider-arrow prev-slide">
          <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <div class="slider-dots">
          ${slides.map((_, i) => `<span class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join("")}
        </div>
        <button class="slider-arrow next-slide">
          <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
        </button>
      </div>
    </section>

    <section id="who-we-are" class="section who-we-are-section">
      <div class="container">
        <div class="about-intro-grid">
          <div>
            <span class="section-subtitle">Attraction Solutions Architect</span>
            <h2 class="section-title">Who <span class="serif-italic-accent text-orange">We</span> Are</h2>
            <div class="divider align-left"></div>
            <p class="about-p" style="font-size: 1.15rem; line-height: 1.7; margin-top: 25px; color: var(--text-secondary);">
              KANA Entertainment supplies, sources, designs, and delivers high-performance entertainment products and turn-key attractions for global developers. We are the engineering backbone behind elite FEC setups, resorts, theme parks, and corporate play zones.
            </p>
            <p class="about-p" style="font-size: 1.05rem; line-height: 1.65; margin-top: 15px; color: var(--text-secondary);">
              From initial 3D spacing layouts to local regulatory compliance, customs logistics, and direct structural engineering support, we provide developers with end-to-end investment peace of mind.
            </p>
          </div>
          <div class="about-stats-panel">
            <div class="stat-pill reveal-on-scroll stagger-1">
              <h3 style="font-size: 2.8rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 5px;" class="counter-animated" data-target="2500">0</h3>
              <p style="font-size: 0.75rem; letter-spacing: 0.1em; font-weight: 600; color: var(--text-secondary);">Trusted Customers</p>
            </div>
            <div class="stat-pill reveal-on-scroll stagger-2">
              <h3 style="font-size: 2.8rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 5px;" class="counter-animated" data-target="100">0</h3>
              <p style="font-size: 0.75rem; letter-spacing: 0.1em; font-weight: 600; color: var(--text-secondary);">FEC Installations</p>
            </div>
            <div class="stat-pill reveal-on-scroll stagger-3">
              <h3 style="font-size: 2.8rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 5px;" class="counter-animated" data-target="10">0</h3>
              <p style="font-size: 0.75rem; letter-spacing: 0.1em; font-weight: 600; color: var(--text-secondary);">Attraction Divisions</p>
            </div>
            <div class="stat-pill reveal-on-scroll stagger-4">
              <h3 style="font-size: 2.8rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 5px;" class="counter-animated" data-target="100">0%</h3>
              <p style="font-size: 0.75rem; letter-spacing: 0.1em; font-weight: 600; color: var(--text-secondary);">Safety Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section why-choose-section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">Global Solutions Partner</span>
          <h2 class="section-title">Why Choose <span class="serif-italic-accent text-gold">KANA</span> Entertainment</h2>
          <div class="divider"></div>
          <p class="section-desc">We deliver end-to-end entertainment solutions with unmatched quality, global sourcing, and dedicated engineering support.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card reveal-on-scroll stagger-1">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
            </div>
            <h3 class="feature-title">Certified Quality Assurance</h3>
            <p class="feature-desc">Every product undergoes rigorous quality checks. We are fully compliant with ASTM F2970, CE, EN1176, and USBC international safety standards.</p>
          </div>
          <div class="feature-card reveal-on-scroll stagger-2">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <h3 class="feature-title">Global Sourcing Network</h3>
            <p class="feature-desc">Direct manufacturing partnerships across China, Hong Kong, Europe, and North America ensure competitive pricing and reliable delivery timelines.</p>
          </div>
          <div class="feature-card reveal-on-scroll stagger-3">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>
            </div>
            <h3 class="feature-title">Dedicated Project Managers</h3>
            <p class="feature-desc">Each project is assigned a dedicated solution architect who manages everything from CAD layouts to logistics and installation scheduling.</p>
          </div>
          <div class="feature-card reveal-on-scroll stagger-4">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.3C.5 6.7.9 9.8 2.9 11.8c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.5z"/></svg>
            </div>
            <h3 class="feature-title">On-Site Installation</h3>
            <p class="feature-desc">Our certified engineering crews deploy globally for structural assembly, electronic calibration, safety testing, and staff training at your venue.</p>
          </div>
          <div class="feature-card reveal-on-scroll stagger-5">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
            </div>
            <h3 class="feature-title">Turnkey Consultation</h3>
            <p class="feature-desc">Feasibility studies, 3D spatial rendering, revenue optimization per square meter, and local regulatory compliance handled entirely in-house.</p>
          </div>
          <div class="feature-card reveal-on-scroll stagger-6">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
            </div>
            <h3 class="feature-title">Lifetime After-Sales</h3>
            <p class="feature-desc">Spare parts supply chain, preventive maintenance schedules, and remote technical diagnostics ensure zero downtime for your attractions.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section featured-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">Specially Selected</span>
          <h2 class="section-title">Top Products & <span class="serif-italic-accent text-orange">New</span> Attractions</h2>
          <div class="divider"></div>
        </div>
        <div class="products-grid">
          ${featuredHtml}
        </div>
      </div>
    </section>

    <section class="section our-works-section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">Realised Environments</span>
          <h2 class="section-title">Our <span class="serif-italic-accent text-gold">Works</span></h2>
          <div class="divider"></div>
          <p class="section-desc">Explore KANA Entertainment's global portfolio of completed amusement zones, bowling clubs, and VR parks.</p>
        </div>
        <div class="our-works-collage-grid">
          ${galleryHtml}
        </div>
      </div>
    </section>
  `;
}

// Renders the main Products Categories List
function renderProducts() {
  const cards = categories.map(cat => `
    <div class="category-grid-card reveal-on-scroll">
      <div class="category-grid-image" style="background-image: url('${cat.image}')"></div>
      <div class="category-grid-body">
        <h3 class="category-grid-title">${cat.name}</h3>
        <p class="category-grid-desc">${cat.description}</p>
        <div class="category-grid-footer">
          <span class="category-grid-count">${cat.count} Systems Available</span>
          <a href="#/products/${cat.id}" class="btn btn-primary">Explore Products</a>
        </div>
      </div>
    </div>
  `).join("");

  return `
    <section class="page-hero" style="background-image: url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop')">
      <div class="container">
        <div class="page-hero-content">
          <h1 class="page-hero-title animated-text">Product Categories</h1>
          <p class="page-hero-desc">Explore KANA Entertainment's robust collections of certified amusement hardware, play zones, and simulators.</p>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="category-grid-layout">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

// Renders Category detail pages
function renderCategory(categorySlug) {
  const category = categories.find(c => c.id === categorySlug);
  if (!category) return render404();

  const details = categoryDetails[categorySlug] || {
    general: `Complete attraction suites for ${category.name}. Designed to commercial standards.`,
    history: `Attractions of the ${category.name} class have historically driven crowd engagement and repeat business.`,
    fun: `High crowd appeal, bringing immersive play and active participant experiences.`,
    bestSellers: []
  };

  const catProducts = getProductsByCategory(categorySlug);
  
  const spanClasses = [
    "span-2-2",
    "",
    "",
    "span-1-2",
    "span-2-1",
    "",
    "",
    "",
    "span-2-1",
    ""
  ];

  const collageHtml = catProducts.map((prod, index) => {
    const sClass = spanClasses[index] || "";
    return `
      <div class="category-collage-item ${sClass} collage-trigger-btn" data-name="${prod.name}">
        <img src="${prod.image}" alt="${prod.name}">
      </div>
    `;
  }).join("");

  return `
    <section class="category-editorial-section">
      <div class="container">
        <div class="category-editorial-header text-center">
          <span class="category-editorial-subtitle">${category.name} Division</span>
          <h1 class="category-editorial-title glow-text animated-text">${category.name}</h1>
          <div class="divider"></div>
        </div>

        <div class="category-info-editorial" style="margin-top: 50px; margin-bottom: 70px; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
          <div class="editorial-info-card">
            <h3>General Sourcing Information</h3>
            <p>${details.general}</p>
          </div>
          
          <div class="editorial-info-card">
            <h3>History & Evolution</h3>
            <p>${details.history}</p>
          </div>
          
          <div class="editorial-info-card">
            <h3>The Fun Factor</h3>
            <p>${details.fun}</p>
          </div>
        </div>

        <div class="section-header text-center" style="margin-top: 80px;">
          <span class="section-subtitle">System Showcase</span>
          <h2 class="section-title">Attraction Portfolio</h2>
          <div class="divider"></div>
          <p class="section-desc">Click on any system image to display its unique search reference code for engineering catalogs.</p>
        </div>

        <div class="category-collage-grid">
          ${collageHtml}
        </div>

        <div class="category-explore-catalogue-box text-center" style="margin-top: 80px;">
          <h3>Explore Technical Details & Spec Sheets</h3>
          <p>Looking for floor loading weights, sizing layouts, power phases, and exact safety approvals? View our full PDF catalog for this attraction class.</p>
          <a href="#/catalog?category=${category.id}" class="btn btn-primary btn-lg" style="margin-top: 25px;">
            Explore Product Catalogue
            <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          </a>
        </div>

      </div>
    </section>
  `;
}

// Renders the Product Detail View
function renderProductDetail(categorySlug, productId) {
  const product = getProductById(productId);
  if (!product) return render404();

  const thumbHtml = product.images.map((img, i) => `
    <div class="gallery-thumbnail ${i === 0 ? 'active' : ''}" data-src="${img}">
      <img src="${img}" alt="Thumbnail ${i+1}">
    </div>
  `).join("");

  const featuresHtml = product.features.map(feat => `
    <li>
      <svg class="check-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      <span>${feat}</span>
    </li>
  `).join("");

  const specRows = Object.entries(product.specifications).map(([key, val]) => `
    <tr class="spec-row">
      <td class="spec-key">${key}</td>
      <td class="spec-value">${val}</td>
    </tr>
  `).join("");

  const safetyHtml = product.safety.map(safe => `
    <li>
      <svg class="warning-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
      <span>${safe}</span>
    </li>
  `).join("");

  const variantsHtml = product.variants.map(v => `
    <span class="variant-tag">${v}</span>
  `).join("");

  return `
    <section class="product-detail-breadcrumbs section-dark">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Home</a> / 
          <a href="#/products">Products</a> / 
          <a href="#/products/${product.category}">${product.categoryName}</a> / 
          <span class="current">${product.name}</span>
        </div>
      </div>
    </section>

    <section class="section product-details-section">
      <div class="container">
        <div class="product-details-grid">
          
          <div class="product-visuals-panel">
            <div class="product-main-image-frame">
              <img id="product-main-image" src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-thumbnails-grid">
              ${thumbHtml}
            </div>
          </div>

          <div class="product-info-panel">
            <span class="product-category-tag">${product.categoryName}</span>
            <h1 class="product-detail-title">${product.name}</h1>
            <div class="product-rating-box">
              <div class="stars-wrap">${renderStars(5)}</div>
              <span class="rating-text">Verified Entertainment Grade</span>
            </div>
            
            <div class="product-detail-price-box">
              <span class="price-label">Pricing Estimate</span>
              <h2 class="price-value">${product.price}</h2>
              <p class="price-note">All quotes are customized based on site layout, customization, and freight/logistics.</p>
            </div>

            <div class="product-detail-description">
              <h3>Overview</h3>
              <p>${product.description}</p>
            </div>

            <div class="product-action-cards">
              <button class="btn btn-primary btn-glow quote-trigger-btn" data-product="${product.name}">
                Request Quotation
                <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
              </button>
              <a href="#/catalog?category=${product.category}" class="btn btn-secondary">
                Explore Product Catalogue
                <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div class="product-specs-tabs-wrap">
          <div class="tabs-header">
            <button class="tab-btn active" data-tab="specs">Technical Specs</button>
            <button class="tab-btn" data-tab="features">Highlights & Variants</button>
            <button class="tab-btn" data-tab="safety">Safety & Dimensions</button>
          </div>
          
          <div class="tab-content active" id="tab-specs">
            <div class="table-responsive">
              <table class="specs-table">
                <tbody>
                  ${specRows}
                </tbody>
              </table>
            </div>
          </div>

          <div class="tab-content" id="tab-features">
            <div class="features-variants-grid">
              <div>
                <h3>Key System Highlights</h3>
                <ul class="highlights-list">
                  ${featuresHtml}
                </ul>
              </div>
              <div>
                <h3>Available Configurations</h3>
                <div class="variants-container">
                  ${variantsHtml}
                </div>
                <p style="margin-top: 15px; font-size: 0.9rem; opacity: 0.8;">Custom branding and theme decors can be engineered on demand to align with your venue style guide.</p>
              </div>
            </div>
          </div>

          <div class="tab-content" id="tab-safety">
            <div class="safety-dimensions-grid">
              <div class="dimension-card">
                <h3>Physical Specifications</h3>
                <div class="spec-detail-pill">
                  <strong>Dimensions:</strong> ${product.dimensions}
                </div>
                <div class="spec-detail-pill">
                  <strong>Operating Capacity:</strong> ${product.capacity}
                </div>
              </div>
              <div>
                <h3>Safety Mechanisms & Guidelines</h3>
                <ul class="safety-list">
                  ${safetyHtml}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

// Renders dynamic PDF content inside Mock PDF viewer
function renderPdfPageContentSimplified(category, catProducts, pageIndex) {
  if (pageIndex === 1) {
    return `
      <div class="pdf-cover-page">
        <div class="pdf-grid-bg"></div>
        <div class="pdf-cover-header">
          <div class="pdf-logo-box">K</div>
          <div class="pdf-logo-text">KANA ENTERTAINMENT</div>
        </div>
        
        <div class="pdf-cover-main">
          <span class="pdf-cover-subtitle">DIVISION OF ATTRACTION SYSTEMS</span>
          <h2 class="pdf-cover-title">${category.name.toUpperCase()}</h2>
          <div class="pdf-cover-divider"></div>
          <p class="pdf-cover-desc">Complete engineering specifications, mechanical tolerances, spatial footprints, and installation safety guides for FEC and resort developments.</p>
        </div>
        
        <div class="pdf-cover-footer">
          <div class="pdf-footer-item">
            <strong>DOCUMENT ID:</strong>
            <span>KE-BRO-${category.id.toUpperCase()}-2026</span>
          </div>
          <div class="pdf-footer-item">
            <strong>REVISION:</strong>
            <span>v4.8 (June 2026)</span>
          </div>
          <div class="pdf-footer-item">
            <strong>SECURITY:</strong>
            <span>Commercial Confidential</span>
          </div>
        </div>
      </div>
    `;
  } else if (pageIndex === 2) {
    const prodItemsHtml = catProducts.map(prod => `
      <div class="pdf-spec-item">
        <div class="pdf-spec-item-header">
          <h4>${prod.name}</h4>
          <span class="pdf-spec-cat-tag">System Spec</span>
        </div>
        <div class="pdf-spec-grid">
          <div class="pdf-spec-image-col">
            <img src="${prod.image}" alt="${prod.name}" class="pdf-spec-img">
          </div>
          <div class="pdf-spec-details-col">
            <p class="pdf-spec-desc">${prod.description}</p>
            <table class="pdf-specs-table">
              <tr><td><strong>Footprint:</strong></td><td>${prod.dimensions}</td></tr>
              <tr><td><strong>Capacity:</strong></td><td>${prod.capacity}</td></tr>
              <tr><td><strong>Power Draw:</strong></td><td>${prod.specifications["Power Requirements"] || prod.specifications["Power"] || "220V AC / 10A"}</td></tr>
            </table>
          </div>
        </div>
      </div>
    `).join("");

    return `
      <div class="pdf-spec-page">
        <div class="pdf-page-header">
          <span class="pdf-page-chapter">01 // PRODUCT RANGE</span>
          <span class="pdf-page-title">${category.name} Catalog</span>
        </div>
        
        <div class="pdf-spec-content">
          ${prodItemsHtml || `
            <div class="no-products-catalog">
              <p>Engineering datasheets are currently being generated for this category's catalog division. Please contact Corporate Sales for immediate CAD requests.</p>
            </div>
          `}
        </div>
        
        <div class="pdf-page-footer">
          <span>KANA Entertainment Brochure &copy; 2026</span>
          <span>Page 2 of 3</span>
        </div>
      </div>
    `;
  } else {
    return `
      <div class="pdf-engineering-page">
        <div class="pdf-page-header">
          <span class="pdf-page-chapter">02 // SITE ENGINEERING</span>
          <span class="pdf-page-title">Technical Integration Guide</span>
        </div>
        
        <div class="pdf-engineering-content">
          <h3>Venue Infrastructure Requirements</h3>
          <p class="pdf-engineering-intro">Installing ${category.name} systems requires pre-coordinated structural, electrical, and routing layouts. Local contractors must ensure the following baseline conditions are met prior to KANA technician arrival.</p>
          
          <div class="pdf-engineering-box">
            <h4>1. Floor Load & Sub-structure</h4>
            <ul>
              <li><strong>Bowling Lanes:</strong> Flat concrete slab with +/- 2.0mm thickness tolerance across length.</li>
              <li><strong>Rides & Trampolines:</strong> Minimum floor shear stress capacity of 450 kg/sqm.</li>
              <li><strong>Soft Play:</strong> Flat floor base with zero anchor points exposed.</li>
            </ul>
          </div>
          
          <div class="pdf-engineering-box">
            <h4>2. Electrical & Power Phases</h4>
            <ul>
              <li>Dedicated distribution board with surge protection dampers.</li>
              <li>Power requirements: Three-Phase 380V (mechanical rides) or Single-Phase 220V (VR / soft play).</li>
              <li>Grounding impedance limit of &lt; 4.0 Ohms.</li>
            </ul>
          </div>
          
          <div class="pdf-engineering-box">
            <h4>3. Global Safety & Compliance</h4>
            <p>All supplied components are fully certified. Certificates are shipped directly with cargo sets:</p>
            <div class="pdf-stamps-row">
              <span class="pdf-stamp">ASTM F2970</span>
              <span class="pdf-stamp">EN 1176</span>
              <span class="pdf-stamp">CE CERTIFIED</span>
              <span class="pdf-stamp">USBC APPROVED</span>
            </div>
          </div>
        </div>
        
        <div class="pdf-page-footer">
          <span>KANA Entertainment Brochure &copy; 2026</span>
          <span>Page 3 of 3</span>
        </div>
      </div>
    `;
  }
}

// Renders the main Catalog page view
function renderCatalog(categorySlug) {
  if (!categorySlug) {
    const rowsHtml = categories.map(cat => `
      <div class="catalog-dir-row">
        <div class="catalog-dir-icon-wrap">
          <svg viewBox="0 0 24 24" style="width: 24px; height: 24px;"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        </div>
        <div class="catalog-dir-info">
          <h3>${cat.name} Division</h3>
          <p>Complete mechanical dimensions, electrical drawings, and floor loads.</p>
        </div>
        <div class="catalog-dir-meta">
          <strong>File Size:</strong> ~4.8 MB<br>
          <strong>Pages:</strong> 3 Pages (PDF Spec Sheet)
        </div>
        <div class="catalog-dir-actions">
          <a href="#/catalog?category=${cat.id}" class="btn btn-secondary btn-sm">View Online Spec</a>
          <button class="btn btn-primary btn-sm open-catalog-btn" data-catalog="${cat.name}">Quick Download</button>
        </div>
      </div>
    `).join("");

    return `
      <section class="catalog-page-section">
        <div class="container">
          <div class="catalog-header-bar" style="margin-bottom: 50px;">
            <div class="catalog-title-block">
              <span class="catalog-badge">KANA DOCUMENT HUB</span>
              <h1 class="catalog-main-title">Engineering Product Catalogs</h1>
              <p class="catalog-subtitle" style="margin-top: 10px; color: var(--text-secondary);">Browse technical drawing specifications, power ratings, and installation dimensions across our 10 divisions.</p>
            </div>
          </div>
          
          <div class="catalog-directory-grid">
            ${rowsHtml}
          </div>
        </div>
      </section>
    `;
  }

  const category = categories.find(c => c.id === categorySlug) || categories[0];
  const catProducts = getProductsByCategory(category.id);
  const categoryDropdownOptions = categories.map(c => `
    <option value="${c.id}" ${c.id === category.id ? "selected" : ""}>${c.name}</option>
  `).join("");

  return `
    <section class="catalog-page-section">
      <div class="container">
        <div class="catalog-header-bar">
          <div class="catalog-title-block">
            <span class="catalog-badge">KANA DOCUMENT HUB</span>
            <h1 class="catalog-main-title">Engineering Product Catalogs</h1>
          </div>
          <div class="catalog-selector-block">
            <label for="catalog-select">Select Division:</label>
            <select id="catalog-select" class="catalog-select-dropdown">
              ${categoryDropdownOptions}
            </select>
          </div>
        </div>

        <div id="pdf-viewer-loading" class="pdf-viewer-loading-container">
          <div class="pdf-loading-spinner-wrapper">
            <div class="pdf-loading-animation">
              <div class="bounce-dot dot-1" style="display:inline-block; width:10px; height:10px; background-color:var(--accent-gold); border-radius:50%; margin:0 4px; animation:bounce 1.4s infinite ease-in-out both;"></div>
              <div class="bounce-dot dot-2" style="display:inline-block; width:10px; height:10px; background-color:var(--accent-gold); border-radius:50%; margin:0 4px; animation:bounce 1.4s infinite ease-in-out both; animation-delay:0.2s;"></div>
              <div class="bounce-dot dot-3" style="display:inline-block; width:10px; height:10px; background-color:var(--accent-gold); border-radius:50%; margin:0 4px; animation:bounce 1.4s infinite ease-in-out both; animation-delay:0.4s;"></div>
            </div>
            <h3 class="pdf-loading-status" style="margin-top:15px;">Compiling Technical Brochure for ${category.name}...</h3>
            <p class="pdf-loading-subtext">Initializing drawing tables & structural loads</p>
          </div>
        </div>

        <div id="pdf-viewer-frame" class="pdf-viewer-frame hidden">
          <div class="pdf-toolbar">
            <div class="pdf-toolbar-left">
              <svg class="pdf-icon-file" viewBox="0 0 24 24" style="color: #d93838;"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
              <span class="pdf-filename" id="pdf-title-text">KANA_Brochure_${category.id.replace("-", "_")}_2026.pdf</span>
            </div>
            
            <div class="pdf-toolbar-center">
              <button class="pdf-nav-btn" id="pdf-prev-btn" title="Previous Page">
                <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
              </button>
              <span class="pdf-page-indicator">Page <span id="pdf-current-page">1</span> of 3</span>
              <button class="pdf-nav-btn" id="pdf-next-btn" title="Next Page">
                <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
              </button>
            </div>
            
            <div class="pdf-toolbar-right">
              <button class="pdf-zoom-btn" id="pdf-zoom-out" title="Zoom Out">
                <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v-2z"/></svg>
              </button>
              <span class="pdf-zoom-level">100%</span>
              <button class="pdf-zoom-btn" id="pdf-zoom-in" title="Zoom In">
                <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </button>
              <div class="pdf-divider">|</div>
              <button class="btn btn-primary btn-sm open-catalog-btn" data-catalog="${category.name}" style="padding: 8px 16px; font-size: 0.8rem; border-radius: 4px;">
                <svg viewBox="0 0 24 24" style="width: 14px; height: 14px;"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                Download Brochure
              </button>
            </div>
          </div>

          <div class="pdf-document-scroll">
            <div class="pdf-page-sheet" id="pdf-sheet-content" data-category="${category.id}">
              ${renderPdfPageContentSimplified(category, catProducts, 1)}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Renders the About Us page
function renderAbout() {
  return `
    <section class="page-hero" style="background-image: url('https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1600&auto=format&fit=crop')">
      <div class="container">
        <div class="page-hero-content">
          <span class="page-hero-subtitle">Engineering Entertainment. Delivering Experiences.</span>
          <h1 class="page-hero-title animated-text">About KANA Entertainment</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-intro-grid">
          <div>
            <h2 class="section-title">Who We Are</h2>
            <div class="divider align-left"></div>
            <p class="about-p">KANA Entertainment is a premium supplier and turnkey solutions provider of advanced amusement attractions, family entertainment center equipment, and dynamic interactive games.</p>
            <p class="about-p">We serve an extensive network of shopping malls, theme parks, water parks, luxury resorts, and high-end gaming zones globally. We source only certified, top-performance hardware and support our clients from physical architectural layout designs to long-term post-installation diagnostics.</p>
          </div>
          <div class="about-stats-panel">
            <div class="stat-pill">
              <h3>100+</h3>
              <p>FEC Installations</p>
            </div>
            <div class="stat-pill">
              <h3>10</h3>
              <p>Attraction Classes</p>
            </div>
            <div class="stat-pill">
              <h3>4</h3>
              <p>Global Base Nodes</p>
            </div>
            <div class="stat-pill">
              <h3>100%</h3>
              <p>Safety Audits Passed</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="vision-mission-grid">
          <div class="vision-card reveal-on-scroll">
            <h3 class="vision-title">Our Vision</h3>
            <p>To lead the entertainment supply industry by pioneering immersive, tactile, and highly memorable experiences that draw families together and turn local zones into high-traffic landmarks.</p>
          </div>
          <div class="vision-card reveal-on-scroll">
            <h3 class="vision-title">Our Mission</h3>
            <p>To supply premium, safe, and commercially viable attraction hardware to developers while offering seamless end-to-end design, installation, and engineering support.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Turnkey Service Offerings</h2>
          <div class="divider"></div>
        </div>
        <div class="services-list-grid">
          <div class="service-list-card reveal-on-scroll">
            <h4>Product Sourcing & Supply</h4>
            <p>Direct supply contracts with top industrial manufacturers ensuring pricing efficiency, customized decals, and original spare-parts.</p>
          </div>
          <div class="service-list-card reveal-on-scroll">
            <h4>Project Planning & Layout</h4>
            <p>Our architects create functional flow mockups and detailed 3D CAD renders of play zones, lanes, and mechanical layouts.</p>
          </div>
          <div class="service-list-card reveal-on-scroll">
            <h4>Safety & QA Certification</h4>
            <p>Every system undergoes double-stress structural evaluations and safety system diagnostics to meet ASTM/CE codes.</p>
          </div>
          <div class="service-list-card reveal-on-scroll">
            <h4>On-Site Installation Support</h4>
            <p>We deploy senior engineering crews globally to run steel structural assembly, electronic leveling, and testing.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">Logistical Strength</span>
          <h2 class="section-title">Our Global Presence</h2>
          <div class="divider"></div>
        </div>
        <div class="offices-grid">
          <div class="office-card reveal-on-scroll stagger-1">
            <div class="office-icon">
              <svg viewBox="0 0 24 24" style="width:32px;height:32px;fill:var(--accent-gold)"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
            </div>
            <h3>Nagpur Office & Plant</h3>
            <p class="office-location">Industrial Area Phase II, Nagpur, Maharashtra, India</p>
            <span class="office-badge">Manufacturing & Sourcing Hub</span>
          </div>
          <div class="office-card reveal-on-scroll stagger-2">
            <div class="office-icon">
              <svg viewBox="0 0 24 24" style="width:32px;height:32px;fill:var(--accent-gold)"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v-2z"/></svg>
            </div>
            <h3>Delhi Corporate Office</h3>
            <p class="office-location">Connaught Place, New Delhi, India</p>
            <span class="office-badge">Executive Sales & Custom Sourcing</span>
          </div>
          <div class="office-card reveal-on-scroll stagger-3">
            <div class="office-icon">
              <svg viewBox="0 0 24 24" style="width:32px;height:32px;fill:var(--accent-gold)"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/></svg>
            </div>
            <h3>Mumbai Export Center</h3>
            <p class="office-location">JNPT Logistics Park, Navi Mumbai, India</p>
            <span class="office-badge">Global Logistics Node</span>
          </div>
          <div class="office-card reveal-on-scroll stagger-4">
            <div class="office-icon">
              <svg viewBox="0 0 24 24" style="width:32px;height:32px;fill:var(--accent-gold)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <h3>China & Hong Kong Operations</h3>
            <p class="office-location">Kowloon, Hong Kong / Shenzhen Industrial Hub, China</p>
            <span class="office-badge">Supply Integration Node</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Renders the Contact Us page view
function renderContact() {
  return `
    <section class="page-hero" style="background-image: url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1600&auto=format&fit=crop')">
      <div class="container">
        <div class="page-hero-content">
          <span class="page-hero-subtitle">Let's Build Your Next Entertainment Destination</span>
          <h1 class="page-hero-title animated-text">Contact <span class="serif-italic-accent text-gold">KANA</span></h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-layout-grid">
          
          <div class="contact-form-wrapper">
            <h2 class="contact-form-title">Send a <span class="serif-italic-accent text-orange">Direct</span> Inquiry</h2>
            <p class="contact-form-subtitle">Fill out the details below and our solution architects will draft a response within 24 business hours.</p>
            
            <form id="contact-form" class="kana-inquiry-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="contact-name">Full Name <span class="required">*</span></label>
                  <input type="text" id="contact-name" name="name" required placeholder="John Doe">
                </div>
                <div class="form-group">
                  <label for="contact-company">Company Name <span class="required">*</span></label>
                  <input type="text" id="contact-company" name="company" required placeholder="Entertainment Zone LLC">
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="contact-email">Email Address <span class="required">*</span></label>
                  <input type="email" id="contact-email" name="email" required placeholder="john@company.com">
                </div>
                <div class="form-group">
                  <label for="contact-phone">Phone Number <span class="required">*</span></label>
                  <input type="tel" id="contact-phone" name="phone" required placeholder="+91 98230 12345">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="contact-location">Project Location <span class="required">*</span></label>
                  <input type="text" id="contact-location" name="location" required placeholder="City, Country">
                </div>
                <div class="form-group">
                  <label for="contact-category">Interested Category <span class="required">*</span></label>
                  <select id="contact-category" name="category" required>
                    <option value="" disabled selected>Select an attraction category</option>
                    <option value="vr-arcade">VR & Arcade</option>
                    <option value="bowling">Bowling</option>
                    <option value="soft-play">Soft Play</option>
                    <option value="trampoline-parks">Trampoline Parks</option>
                    <option value="inflatables">Inflatables</option>
                    <option value="water-theme">Water Attractions</option>
                    <option value="adventure">Adventure Attractions</option>
                    <option value="interactive">Interactive Games</option>
                    <option value="kid-rides">Kid Rides</option>
                    <option value="amusement-rides">Amusement Rides</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-enquiry-type">Enquiry Type <span class="required">*</span></label>
                <select id="contact-enquiry-type" name="enquiryType" required>
                  <option value="" disabled selected>Select enquiry focus</option>
                  <option value="Product Sourcing">Product Sourcing / Purchase</option>
                  <option value="New Project">New Entertainment Center Setup</option>
                  <option value="Installation">Shopping Mall Zone Placement</option>
                  <option value="Resort Setup">Hotel/Resort Play Zone Setup</option>
                  <option value="Mechanical Rides">Theme Park Mechanical Rides</option>
                  <option value="Consultation">Technical/Site Layout Sizing</option>
                  <option value="Partnership">Distribution / Agency Partnership</option>
                </select>
              </div>

              <div class="form-group">
                <label for="contact-message">Message Details <span class="required">*</span></label>
                <textarea id="contact-message" name="message" rows="5" required placeholder="Provide brief details about your venue size, target launch dates, or specific models you need quotes for..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-glow btn-full-width" style="margin-top: 10px;">
                Submit Inquiry
                <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </form>

            <div id="contact-success-state" class="contact-success-card hidden">
              <div class="success-icon">✓</div>
              <h3>Thank you for contacting KANA Entertainment.</h3>
              <p>Our solutions team has received your details. A project specialist will reply with catalogs and layout questionnaire guides within 24 business hours.</p>
              <button class="btn btn-primary" id="reset-contact-form-btn">Submit Another Inquiry</button>
            </div>
          </div>

          <div class="contact-details-sidebar">
            <div class="contact-sidebar-block">
              <h3 class="contact-sidebar-title">Global <span class="serif-italic-accent text-gold">Bases</span></h3>
              <div class="address-grid-list">
                
                <div class="address-card-inline">
                  <div class="address-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div class="address-content-cell">
                    <h4>Nagpur Plant Base</h4>
                    <p>Industrial Area Phase II, Nagpur, Maharashtra, India</p>
                  </div>
                </div>

                <div class="address-card-inline">
                  <div class="address-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div class="address-content-cell">
                    <h4>Delhi Corporate Base</h4>
                    <p>Connaught Place, New Delhi, India</p>
                  </div>
                </div>

                <div class="address-card-inline">
                  <div class="address-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div class="address-content-cell">
                    <h4>Mumbai Export Base</h4>
                    <p>JNPT Logistics Park, Navi Mumbai, India</p>
                  </div>
                </div>

                <div class="address-card-inline">
                  <div class="address-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div class="address-content-cell">
                    <h4>China / HK Sourcing Base</h4>
                    <p>Kowloon, Hong Kong / Shenzhen Industrial Hub, China</p>
                  </div>
                </div>

              </div>
            </div>

            <div class="contact-sidebar-block">
              <h3 class="contact-sidebar-title">Corporate <span class="serif-italic-accent text-orange">Identity</span></h3>
              <div class="corporate-info-list">
                
                <div class="corporate-info-item">
                  <div class="info-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div class="info-content-cell">
                    <strong>Primary Sourcing Hub</strong>
                    <span><a href="mailto:contact@kanaentertainment.com">contact@kanaentertainment.com</a></span>
                  </div>
                </div>

                <div class="corporate-info-item">
                  <div class="info-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div class="info-content-cell">
                    <strong>Corporate Sales</strong>
                    <span><a href="mailto:sales@kanaentertainment.com">sales@kanaentertainment.com</a></span>
                  </div>
                </div>

                <div class="corporate-info-item">
                  <div class="info-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div class="info-content-cell">
                    <strong>Nagpur Plant Line</strong>
                    <span><a href="tel:+917122555123">+91 712 2555123</a></span>
                  </div>
                </div>

                <div class="corporate-info-item">
                  <div class="info-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div class="info-content-cell">
                    <strong>Hotline & WhatsApp</strong>
                    <span><a href="tel:+919823012345">+91 98230 12345</a></span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

// Renders the 404 Error page view
function render404() {
  return `
    <section class="section text-center" style="padding: 100px 20px;">
      <div class="container">
        <h1 class="glow-text" style="font-size: 6rem; margin-bottom: 20px;">404</h1>
        <h2>Page Not Found</h2>
        <p style="margin-bottom: 30px;">The amusement attraction path you are trying to visit does not exist.</p>
        <a href="#/" class="btn btn-primary">Return Home</a>
      </div>
    </section>
  `;
}

// Map the views to dynamic layout selectors
function renderView(route) {
  switch (route.name) {
    case "home":
      return renderHome();
    case "products":
      return renderProducts();
    case "category":
      return renderCategory(route.category);
    case "product-detail":
      return renderProductDetail(route.category, route.productId);
    case "catalog":
      return renderCatalog(route.category);
    case "about":
      return renderAbout();
    case "contact":
      return renderContact();
    default:
      return render404();
  }
}

// ==========================================================================
// SPA Router & Navigation Observers
// ==========================================================================

function getRouteFromHash(hash) {
  const [pathname, search] = hash.trim().split('?');
  const params = new URLSearchParams(search || '');
  
  if (pathname === '#/' || pathname === '#' || pathname === '') {
    return { name: 'home' };
  }
  if (pathname === '#/products') {
    return { name: 'products' };
  }
  if (pathname === '#/about') {
    return { name: 'about' };
  }
  if (pathname === '#/contact') {
    return { name: 'contact' };
  }
  if (pathname === '#/catalog') {
    return { name: 'catalog', category: params.get('category') };
  }
  if (pathname.startsWith('#/products/')) {
    const pathPart = pathname.substring(11);
    const segments = pathPart.split('/');
    if (segments.length === 2) {
      return { name: 'product-detail', category: segments[0], productId: segments[1] };
    } else if (segments.length === 1) {
      return { name: 'category', category: segments[0] };
    }
  }
  return { name: '404' };
}

function updateActiveNavLinks(hash) {
  const links = document.querySelectorAll("header nav a");
  const [pathname] = hash.split('?');

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === "#/" && (pathname === "#/" || pathname === "#" || pathname === "")) {
      link.classList.add("active");
    } else if (href !== "#/" && pathname.startsWith(href)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Fullscreen Page Wipe Animation
function getTransitionAnimationHtml(catId) {
  if (catId === "bowling") {
    return `
      <div class="wipe-anim-bowling">
        <div class="bowling-track">
          <div class="bowling-ball-wipe"></div>
          <div class="bowling-pins-wipe">
            <div class="pin-wipe"></div>
            <div class="pin-wipe"></div>
            <div class="pin-wipe"></div>
          </div>
        </div>
      </div>
    `;
  } else if (catId === "vr-arcade") {
    return `
      <div class="wipe-anim-optics">
        <div class="optics-ring ring-1"></div>
        <div class="optics-ring ring-2"></div>
        <div class="optics-ring ring-3"></div>
      </div>
    `;
  } else if (catId === "soft-play") {
    return `
      <div class="wipe-anim-blocks">
        <div class="block-shape block-1"></div>
        <div class="block-shape block-2"></div>
        <div class="block-shape block-3"></div>
      </div>
    `;
  } else if (catId === "trampoline-parks") {
    return `
      <div class="wipe-anim-trampoline">
        <div class="tramp-bed"></div>
        <div class="tramp-node"></div>
      </div>
    `;
  } else if (catId === "inflatables") {
    return `
      <div class="wipe-anim-inflatable">
        <div class="bubble-wipe"></div>
      </div>
    `;
  } else if (catId === "water-theme") {
    return `
      <div class="wipe-anim-water">
        <div class="wave-wipe-1"></div>
        <div class="wave-wipe-2"></div>
      </div>
    `;
  } else if (catId === "adventure") {
    return `
      <div class="wipe-anim-adventure">
        <div class="bridge-rope"></div>
        <div class="climber-dot"></div>
      </div>
    `;
  } else if (catId === "interactive") {
    return `
      <div class="wipe-anim-interactive">
        <div class="sonar-ring ring-a"></div>
        <div class="sonar-ring ring-b"></div>
      </div>
    `;
  } else if (catId === "kid-rides") {
    return `
      <div class="wipe-anim-carousel">
        <div class="carousel-rod"><svg viewBox="0 0 24 24" style="width:40px;height:40px;fill:var(--accent-gold)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6l-4 4h3v4h2v-4h3z"/></svg></div>
      </div>
    `;
  } else if (catId === "amusement-rides") {
    return `
      <div class="wipe-anim-rides">
        <div class="wheel-rim"></div>
      </div>
    `;
  }
  return `<div class="wipe-anim-general"><div class="general-spinner"></div></div>`;
}

function showTransitionWipe(route, updateDOMCallback) {
  let overlay = document.getElementById("wipe-overlay");
  if (!overlay) return updateDOMCallback();

  const animPlaceholder = overlay.querySelector(".wipe-animation-placeholder");
  const wipeTitle = overlay.querySelector(".wipe-title");
  const wipeSubtitle = overlay.querySelector(".wipe-subtitle");
  
  let catId = "general";
  let title = "KANA ENTERTAINMENT";
  let subtitle = "Initializing Attraction Environment...";

  if (route.name === "category") {
    catId = route.category;
    title = `${catId.toUpperCase().replace("-", " ")}`;
    subtitle = "Rendering Category Portfolio...";
  } else if (route.name === "catalog") {
    catId = route.category || "general";
    title = `CATALOGUE // ${catId.toUpperCase().replace("-", " ")}`;
    subtitle = "Loading Digital Product Brochure...";
  }

  if (animPlaceholder) animPlaceholder.innerHTML = getTransitionAnimationHtml(catId);
  if (wipeTitle) wipeTitle.innerText = title;
  if (wipeSubtitle) wipeSubtitle.innerText = subtitle;

  const fill = overlay.querySelector(".wipe-progress-fill");
  if (fill) {
    fill.style.width = "0%";
    void fill.offsetWidth;
    fill.style.width = "100%";
  }

  overlay.classList.remove("hidden");
  overlay.classList.add("active");
  document.body.classList.add("modal-open");

  // Perform DOM switch halfway (900ms)
  setTimeout(() => {
    updateDOMCallback();
  }, 900);

  // Close overlay after transitions finish (2s)
  setTimeout(() => {
    overlay.classList.remove("active");
    document.body.classList.remove("modal-open");
    setTimeout(() => {
      overlay.classList.add("hidden");
      if (animPlaceholder) animPlaceholder.innerHTML = "";
    }, 500);
  }, 2000);
}

// Master navigate callback
async function navigateTo(hash) {
  const route = getRouteFromHash(hash);
  
  const updateDOM = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.innerHTML = renderView(route);
      initPageBehavior(route);
    }
    updateActiveNavLinks(hash);
    window.scrollTo(0, 0);
  };

  if (route.name === "category" || route.name === "catalog") {
    showTransitionWipe(route, updateDOM);
  } else {
    // Check for View Transitions API support
    if (document.startViewTransition) {
      document.documentElement.setAttribute("data-transition-type", "crossfade");
      const transition = document.startViewTransition(() => {
        updateDOM();
      });
      try {
        await transition.finished;
      } catch (e) {
        console.warn("Transition interrupted", e);
      } finally {
        document.documentElement.removeAttribute("data-transition-type");
      }
    } else {
      updateDOM();
    }
  }
}

// ==========================================================================
// Page-specific Behaviors & Interactions
// ==========================================================================

function initPageBehavior(route) {
  // Always trigger scroll reveals
  setupScrollReveal();

  if (route.name === 'home') {
    initHomeSlider();
  } else if (route.name === 'product-detail') {
    initProductDetailInteractivity();
  } else if (route.name === 'catalog') {
    initCatalogPdfViewer(route.category);
  } else if (route.name === 'contact') {
    initContactFormHandler();
  }
}

// Scroll Reveal Observer
function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-on-scroll, .reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale-in');
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(el => observer.observe(el));

  const counters = document.querySelectorAll('.counter-animated[data-target]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const suffix = el.textContent.includes('+') ? '+' : (el.textContent.includes('%') ? '%' : '');
  const duration = 2000;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.round(start + (target - start) * eased);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

// Home Slider Carousel auto rotation
let sliderTimer = null;
function initHomeSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');

  if (slides.length === 0) return;
  let activeIndex = 0;

  function showSlide(index) {
    if (sliderTimer) clearInterval(sliderTimer);

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    activeIndex = index;

    slides.forEach((slide, i) => {
      if (i === activeIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    startAutoSlide();
  }

  function startAutoSlide() {
    sliderTimer = setInterval(() => {
      showSlide(activeIndex + 1);
    }, 6000);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'));
      showSlide(idx);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => showSlide(activeIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => showSlide(activeIndex + 1));
  }

  startAutoSlide();
}

// Specs Details image gallery selection and spec tab sheets
function initProductDetailInteractivity() {
  const mainImage = document.getElementById('product-main-image');
  const thumbs = document.querySelectorAll('.gallery-thumbnail');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      const newSrc = thumb.getAttribute('data-src');
      if (mainImage && newSrc) {
        mainImage.src = newSrc;
      }
    });
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetTabId = `tab-${btn.getAttribute('data-tab')}`;
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// PDF Mock Catalog Player UI Controls
function initCatalogPdfViewer(catId) {
  const loadingEl = document.getElementById("pdf-viewer-loading");
  const frameEl = document.getElementById("pdf-viewer-frame");
  const sheetEl = document.getElementById("pdf-sheet-content");

  const prevBtn = document.getElementById("pdf-prev-btn");
  const nextBtn = document.getElementById("pdf-next-btn");
  const pageInd = document.getElementById("pdf-current-page");
  const zoomInBtn = document.getElementById("pdf-zoom-in");
  const zoomOutBtn = document.getElementById("pdf-zoom-out");
  const zoomLevelEl = document.querySelector(".pdf-zoom-level");
  const selectEl = document.getElementById("catalog-select");

  if (!frameEl) return;

  // Simulator compiler latency
  setTimeout(() => {
    if (loadingEl && frameEl) {
      loadingEl.classList.add("hidden");
      frameEl.classList.remove("hidden");
    }
  }, 1100);

  let currentPage = 1;
  let currentZoom = 100;

  const category = categories.find(c => c.id === catId) || categories[0];
  const catProducts = getProductsByCategory(category.id);

  function updatePage(pageIndex) {
    if (pageIndex < 1 || pageIndex > 3) return;
    currentPage = pageIndex;
    if (pageInd) pageInd.innerText = currentPage;

    if (sheetEl) {
      sheetEl.innerHTML = renderPdfPageContentSimplified(category, catProducts, currentPage);
    }

    if (prevBtn) prevBtn.disabled = (currentPage === 1);
    if (nextBtn) nextBtn.disabled = (currentPage === 3);
  }

  if (prevBtn) {
    prevBtn.disabled = true;
    prevBtn.addEventListener("click", () => updatePage(currentPage - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => updatePage(currentPage + 1));
  }

  if (zoomInBtn) {
    zoomInBtn.addEventListener("click", () => {
      if (currentZoom < 140) {
        currentZoom += 10;
        if (zoomLevelEl) zoomLevelEl.innerText = `${currentZoom}%`;
        if (sheetEl) sheetEl.style.transform = `scale(${currentZoom / 100})`;
      }
    });
  }
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener("click", () => {
      if (currentZoom > 70) {
        currentZoom -= 10;
        if (zoomLevelEl) zoomLevelEl.innerText = `${currentZoom}%`;
        if (sheetEl) sheetEl.style.transform = `scale(${currentZoom / 100})`;
      }
    });
  }

  if (selectEl) {
    selectEl.addEventListener("change", (e) => {
      window.location.hash = `#/catalog?category=${e.target.value}`;
    });
  }
}

// Contact page dynamic inquiry submission
function initContactFormHandler() {
  const contactForm = document.getElementById('contact-form');
  const successState = document.getElementById('contact-success-state');
  const resetBtn = document.getElementById('reset-contact-form-btn');

  if (contactForm && successState) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending enquiry... <span class="spinner" style="display:inline-block; width:12px; height:12px; border:2px solid white; border-top-color:transparent; border-radius:50%; animation:spin 0.6s linear infinite; margin-left:8px;"></span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.classList.add('hidden');
        successState.classList.remove('hidden');
      }, 1200);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        contactForm.reset();
        contactForm.classList.remove('hidden');
        successState.classList.add('hidden');
      });
    }
  }
}

// ==========================================================================
// Shell Events & Global Modals Controls
// ==========================================================================

function initAppShell() {
  const navToggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', () => {
      navToggleBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navToggleBtn.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }

  // Quote Modals
  const quoteModal = document.getElementById('quote-modal');
  const quoteInput = document.getElementById('modal-quote-product');
  const quoteDisplay = document.getElementById('modal-product-display');
  const modalQuoteForm = document.getElementById('modal-quote-form');
  const modalSuccess = document.getElementById('modal-success-state');

  document.body.addEventListener('click', (e) => {
    const trigger = e.target.closest('.quote-trigger-btn');
    if (trigger) {
      e.preventDefault();
      const product = trigger.getAttribute('data-product') || 'General Inquiry';
      if (quoteInput && quoteDisplay) {
        quoteInput.value = product;
        quoteDisplay.value = product;
      }

      if (modalQuoteForm) {
        modalQuoteForm.reset();
        modalQuoteForm.classList.remove('hidden');
      }
      if (modalSuccess) modalSuccess.classList.add('hidden');

      if (quoteModal) {
        quoteModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
      }
    }
  });

  // Catalog PDF Modals
  const catalogModal = document.getElementById('catalog-modal');
  const catalogForm = document.getElementById('modal-catalog-form');
  const catalogSuccess = document.getElementById('catalog-success-state');

  document.body.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-catalog-btn');
    if (trigger) {
      e.preventDefault();
      const catName = trigger.getAttribute('data-catalog');
      const titleEl = catalogModal.querySelector('.modal-title');
      if (titleEl && catName) {
        titleEl.innerText = `Download ${catName} Catalog`;
      } else if (titleEl) {
        titleEl.innerText = `Download Main Catalog`;
      }

      if (catalogForm) {
        catalogForm.reset();
        catalogForm.classList.remove('hidden');
      }
      if (catalogSuccess) catalogSuccess.classList.add('hidden');

      if (catalogModal) {
        catalogModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
      }
    }
  });

  // Collage item name quick lookup modal
  document.body.addEventListener('click', (e) => {
    const trigger = e.target.closest('.collage-trigger-btn');
    if (trigger) {
      e.preventDefault();
      const prodName = trigger.getAttribute('data-name');
      const modal = document.getElementById('quick-lookup-modal');
      const nameEl = document.getElementById('quick-lookup-name');
      if (modal && nameEl && prodName) {
        nameEl.innerText = prodName;
        modal.classList.remove('hidden');
        document.body.classList.add('modal-open');
      }
    }
  });

  // Close overlay toggles
  const closeModalEls = document.querySelectorAll('.modal-close, .modal-overlay, #modal-success-close-btn, #catalog-success-close-btn, #quick-lookup-close');
  closeModalEls.forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close') || e.target.id === 'modal-success-close-btn' || e.target.id === 'catalog-success-close-btn' || e.target.id === 'quick-lookup-close') {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(m => m.classList.add('hidden'));
        document.body.classList.remove('modal-open');
      }
    });
  });

  if (modalQuoteForm) {
    modalQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = modalQuoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending... <span class="spinner" style="display:inline-block; width:12px; height:12px; border:2px solid white; border-top-color:transparent; border-radius:50%; animation:spin 0.6s linear infinite; margin-left:8px;"></span>`;
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        modalQuoteForm.classList.add('hidden');
        if (modalSuccess) modalSuccess.classList.remove('hidden');
      }, 1200);
    });
  }

  if (catalogForm) {
    catalogForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = catalogForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Preparing Download... <span class="spinner" style="display:inline-block; width:12px; height:12px; border:2px solid white; border-top-color:transparent; border-radius:50%; animation:spin 0.6s linear infinite; margin-left:8px;"></span>`;
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        catalogForm.classList.add('hidden');
        if (catalogSuccess) catalogSuccess.classList.remove('hidden');
      }, 1500);
    });
  }
}

// CSS keyframes injection
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1.0); }
  }
`;
document.head.appendChild(styleSheet);

// Router entry initialization
window.addEventListener('hashchange', () => {
  navigateTo(window.location.hash);
});

window.addEventListener('load', () => {
  initAppShell();
  
  // Navigate to initial hash
  navigateTo(window.location.hash || '#/');
});
