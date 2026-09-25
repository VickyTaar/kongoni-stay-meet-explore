import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  Compass,
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Trees,
  Users,
  UtensilsCrossed,
  Waves,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const phoneDisplay = "+254 702 868 888";
const phoneHref = "+254702868888";
const whatsappUrl = "https://wa.me/254702868888";
const email = "reservations@kongonicamp.com";

const galleryPhotos = [
  {
    src: "/kongoni-camp-nanyuki4.jpg",
    title: "Traditional Thatched Rondavels",
    caption: "Authentic round thatched cottages nestled along stone paths and lush flowering gardens.",
    tag: "Exterior & Grounds",
    span: "gallery-wide",
  },
  {
    src: "/superior-deluxe-room_006.jpg",
    title: "Superior Deluxe Suite",
    caption: "Spacious master suite featuring vaulted wooden beams, lounge area, leopard artwork, and stone floors.",
    tag: "Accommodation",
    span: "gallery-tall",
  },
  {
    src: "/kongoni-camp-nanyuki1.jpg",
    title: "Forest-Fringed Swimming Pool",
    caption: "Sparkling outdoor swimming pool bordered by native trees, sun umbrellas, and comfortable loungers.",
    tag: "Pool & Leisure",
    span: "gallery-wide",
  },
  {
    src: "/kongoni-camp-nanyuki restaurant.jpg",
    title: "Rustic Lodge Restaurant & Bar",
    caption: "Cozy timber-framed dining lounge with open fireplace stove, African tapestries, and fully stocked bar.",
    tag: "Dining & Social",
    span: "",
  },
  {
    src: "/kongoni-camp-nanyuki5.jpg",
    title: "Warm Cottage Bedroom",
    caption: "Comfortable double room with handcrafted batik textiles, mosquito net canopy, and tranquil garden views.",
    tag: "Accommodation",
    span: "",
  },
  {
    src: "/poolside-spa_03.jpg",
    title: "Poolside Spa Pavilion",
    caption: "Traditional thatched wellness pavilion overlooking immaculate lawns and the swimming pool.",
    tag: "Spa & Grounds",
    span: "gallery-wide",
  },
  {
    src: "/kongoni-wedding-garden.jpg",
    title: "Garden Wedding & Events",
    caption: "Kongoni Camp's lush manicured grounds set for an elegant outdoor garden ceremony beneath mature indigenous trees.",
    tag: "Grounds & Nature",
    span: "",
  },
];

const staysList = [
  {
    name: "Superior Deluxe Suites",
    type: "Spacious & Elegant",
    copy: "Our most expansive accommodation featuring high vaulted timber ceilings, generous seating lounge, stone flooring, African wildlife art, en-suite bathroom, and dedicated workspace.",
    image: "/superior-deluxe-room_006.jpg",
    highlights: ["King Bed & Lounge Area", "Vaulted Timber Ceilings", "En-suite Bathroom & Wi-Fi", "Interconnecting Options"],
  },
  {
    name: "Traditional Rondavels",
    type: "Signature African Cottages",
    copy: "Distinctive round thatched cottages set amidst flowering shrubs and mature trees. Combining genuine Kenyan character with peaceful comfort and privacy.",
    image: "/kongoni-camp-nanyuki4.jpg",
    highlights: ["Authentic Thatch Architecture", "Stone Garden Pathways", "Quiet Forest Ambience", "Private Veranda"],
  },
  {
    name: "Deluxe Rooms",
    type: "Warm & Atmospheric",
    copy: "Comfortable and well-appointed rooms with warm interiors, garden outlooks, and all the essentials for a restful stay at Kongoni Camp.",
    image: "/deluxe-cottage-room.jpg",
    highlights: ["1 King Bed", "Ensuite Bathroom", "Garden View", "Wi-Fi"],
  },
  {
    name: "Standard Rooms",
    type: "Comfortable & Relaxed",
    copy: "Welcoming rooms set within Kongoni's tranquil gardens, offering comfortable beds, private ensuite bathrooms, and garden views — ideal for leisure travellers and tour groups.",
    image: "/Standard Rooms/standard-room_001.jpg",
    highlights: ["1 King Bed", "Ensuite Bathroom", "Garden View", "Wi-Fi"],
  },
];

const audiences = [
  {
    title: "Safari & Holiday Travellers",
    desc: "A relaxed, character-filled haven just minutes from Ol Pejeta Conservancy and Mount Kenya.",
    icon: Compass,
  },
  {
    title: "Couples & Families",
    desc: "Peaceful gardens, swimming pool, open lawns, and spacious cottages for quality time together.",
    icon: Users,
  },
  {
    title: "Tour Operators & Agents",
    desc: "Reliable accommodation partner with ample coach parking, seamless group check-ins, and bespoke catering.",
    icon: MapPin,
  },
  {
    title: "Conferences & Retreats",
    desc: "Inspiring meeting spaces, high-speed Wi-Fi, and tranquil outdoor breakout spots for focused workshops.",
    icon: CalendarDays,
  },
  {
    title: "Team Building & Groups",
    desc: "Expansive green grounds for dynamic outdoor team activities, sports, and group dining.",
    icon: Trees,
  },
  {
    title: "Dining & Events",
    desc: "Cozy fireside restaurant, garden dining, barbecue events, and relaxed poolside drinks.",
    icon: UtensilsCrossed,
  },
];

const faqItems = [
  {
    q: "Where is Kongoni Camp located?",
    a: "Kongoni Camp is conveniently situated along the A2 highway right at the Nanyuki town gate — just 5 minutes from Nanyuki CBD and approximately 15 minutes from Nanyuki Airstrip.",
  },
  {
    q: "Is Kongoni Camp suitable for leisure tourists and safari travellers?",
    a: "Yes! Kongoni is a premier safari base for visiting Ol Pejeta Conservancy, hiking Mount Kenya, exploring Ngare Ndare Forest, and relaxing by our swimming pool in lush natural surroundings.",
  },
  {
    q: "Can organisations hold meetings, workshops, and retreats at Kongoni?",
    a: "Absolutely. We host corporate conferences, board retreats, NGO seminars, school programmes, and team-building retreats with full AV setup, tailored catering, and quiet indoor and outdoor spaces.",
  },
  {
    q: "What dining options are available on-site?",
    a: "Our rustic fireside restaurant serves freshly prepared continental, Kenyan, Indian, and selected Asian specialities, with full bar service and custom meal plans for residential groups.",
  },
  {
    q: "Do you cater to tour operators and travel trade partners?",
    a: "Yes. We work closely with tour operators and travel agents, offering competitive partner rates, driver/guide arrangements, and flexible group accommodation packages.",
  },
  {
    q: "How can I make a reservation or enquiry?",
    a: "You can submit the enquiry form below, call our reservations desk at +254 702 868 888, or click the WhatsApp button for instant assistance.",
  },
];

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/30 text-highlight border border-accent/40 mb-3">
      {children}
    </span>
  );
}

export function KongoniLanding() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [notice, setNotice] = useState("");

  const handleEnquirySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lines = [
      "Kongoni Camp Nanyuki - Website Enquiry",
      "-------------------------------------",
      ...Array.from(form.entries()).map(([k, v]) => `${k}: ${v}`),
    ];
    setNotice("Opening your email client with your reservation details...");
    const enquiryType = String(form.get("Enquiry Type") || "General Enquiry");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Kongoni Enquiry — ${enquiryType}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  return (
    <div className="landing-page min-h-screen bg-background text-foreground">
      {/* 1. CLEAN TOP BRAND BAR - NO MENUS */}
      <header className="absolute top-0 left-0 right-0 z-40 py-5 px-6 md:px-12 flex items-center justify-between border-b border-white/15">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/kongoni logo.png"
            alt="Kongoni Camp Nanyuki"
            className="h-10 md:h-12 w-auto filter invert brightness-200"
            width={130}
            height={50}
          />
        </a>
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href={`tel:${phoneHref}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition"
          >
            <Phone className="w-3.5 h-3.5 text-highlight" />
            <span>{phoneDisplay}</span>
          </a>
          <Button asChild variant="accent" size="sm" className="font-semibold shadow-lg">
            <a href="#contact">Enquire & Book</a>
          </Button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="top" className="relative min-h-[92vh] flex items-center text-white isolate overflow-hidden">
        {/* Real photo background: Thatched cottages and floral gardens */}
        <img
          src="/kongoni-camp-nanyuki4.jpg"
          alt="Kongoni Camp Nanyuki thatched cottages and gardens"
          className="absolute inset-0 w-full h-full object-cover -z-20 scale-105 transition-transform duration-1000"
        />
        {/* Deep rich earthy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35 -z-10" />

        <div className="page-shell w-full pt-28 pb-16 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-medium uppercase tracking-widest text-white/90 mb-6">
              <MapPin className="w-3.5 h-3.5 text-highlight" />
              <span>Nanyuki, Laikipia, Kenya • Along the A2</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.95] text-white tracking-tight mb-6">
              Stay. Meet.<br />
              <span className="italic font-light text-amber-200/90">Explore</span> Laikipia.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-light mb-8 max-w-2xl">
              A serene hospitality sanctuary at the foot of Mount Kenya. 
              Authentic thatched rondavels, superior deluxe suites, sparkling pool, fireside dining, 
              and versatile retreat spaces for travellers, families, and organisations.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button asChild variant="accent" size="xl" className="font-semibold shadow-xl">
                <a href="#contact">
                  Plan Your Visit <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="xl" className="font-medium backdrop-blur-sm">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="w-4 h-4 mr-1 text-emerald-400" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Quick feature highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/20 text-xs text-white/80 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-highlight flex-shrink-0" />
                <span>Lush Private Grounds</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-highlight flex-shrink-0" />
                <span>Outdoor Swimming Pool</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-highlight flex-shrink-0" />
                <span>5 Mins to Nanyuki CBD</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-highlight flex-shrink-0" />
                <span>Mt Kenya & Safari Gateway</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WELCOME & SANCTUARY OVERVIEW */}
      <section className="py-20 md:py-28 bg-muted/40 border-b border-border">
        <div className="page-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionBadge>Welcome to Kongoni Camp</SectionBadge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground leading-tight">
                An Authentic Natural Haven at the Gateway of Nanyuki.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Tucked away along the A2 highway at the Nanyuki town gate, Kongoni Camp blends 
                the rustic spirit of classic Kenyan safari hospitality with contemporary comforts.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Whether you are summiting Mount Kenya, embarking on game drives across Ol Pejeta, 
                escaping on a weekend retreat, holding a high-level board workshop, or touring with a group, 
                our tranquil grounds provide a warm, peaceful home base.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-highlight pl-4">
                  <span className="block text-2xl font-serif text-primary font-bold">Lush Grounds</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Mature Private Gardens</span>
                </div>
                <div className="border-l-2 border-highlight pl-4">
                  <span className="block text-2xl font-serif text-primary font-bold">24 / 7</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Warm Kenyan Hospitality</span>
                </div>
              </div>
            </div>

            {/* Real photo: Thatched Poolside Spa & Lawns */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group">
                <img
                  src="/poolside-spa_03.jpg"
                  alt="Kongoni Camp Poolside Spa Pavilion and lush green lawn"
                  className="w-full h-[420px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">Relaxation & Wellness</span>
                  <h3 className="text-xl font-serif mt-1">Poolside Thatched Spa Pavilion</h3>
                  <p className="text-xs text-white/80 mt-1">Serene lawn setting overlooking the swimming pool and indigenous trees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACCOMMODATION (STAY) - REAL ROOM PHOTOS */}
      <section className="py-20 md:py-28 bg-background">
        <div className="page-shell">
          <div className="max-w-2xl mb-14">
            <SectionBadge>Stay at Kongoni</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground leading-tight">
              Comfortable Accommodation Surrounded by Nature.
            </h2>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              Choose from traditional thatched rondavels, spacious superior deluxe suites, and comfortable cottage rooms tailored for individuals, couples, families, and retreat groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {staysList.map((stay) => (
              <div
                key={stay.name}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-muted">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-amber-200 border border-white/10">
                    {stay.type}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-serif font-normal text-foreground mb-2">
                    {stay.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {stay.copy}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-foreground/80 mb-6 pt-4 border-t border-border">
                    {stay.highlights.map((item) => (
                      <span key={item} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-highlight flex-shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="outline" className="w-full justify-between group-hover:border-primary">
                    <a href="#contact">
                      <span>Reserve this stay</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET & GATHER (CONFERENCES & CORPORATE RETREATS) */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="page-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Conference photo from GitHub */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/15">
                <img
                  src="/IMG_5617.jpg"
                  alt="Kongoni Camp conference and meeting space"
                  className="w-full h-[400px] md:h-[480px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Overlapping small garden photo */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 h-44 rounded-xl overflow-hidden shadow-2xl border-4 border-primary">
                <img
                  src="/kongoni-camp-nanyuki_006.jpg"
                  alt="Kongoni outdoor retreat grounds"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-amber-200 border border-white/20">
                Meet & Collaborate
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight text-white">
                Space to Think, Align, and Bring People Together.
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Corporate retreats, NGO seminars, board strategies, and team-building sessions 
                thrive in Kongoni's quiet, distraction-free natural setting.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm text-white/90 pt-2">
                {[
                  "Executive Board Retreats",
                  "Training & Workshops",
                  "Outdoor Team-Building",
                  "NGO & Institutional Seminars",
                  "Full AV & Projection",
                  "Tailored Catering Packages",
                  "Residential Conferencing",
                  "Spacious Garden Grounds",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button asChild variant="accent" size="lg" className="shadow-lg">
                  <a href="#contact">Request Conference Package</a>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircle className="w-4 h-4 mr-1 text-emerald-400" />
                    Talk to Event Coordinator
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DINING & POOLSIDE LEISURE */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="page-shell">
          <div className="max-w-2xl mb-14">
            <SectionBadge>Dining & Relaxation</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground leading-tight">
              Flavours by the Fire, Leisure by the Pool.
            </h2>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              Fresh cuisine, warm fireside evenings, and sun-drenched afternoons in the pool.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Dining card */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-md flex flex-col group">
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="/kongoni-camp-nanyuki restaurant.jpg"
                  alt="Kongoni Camp Fireside Restaurant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase font-semibold tracking-wider text-amber-300">Restaurant & Bar</span>
                  <h3 className="text-2xl font-serif mt-1">Fireside Dining & Lounge</h3>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Savour continental delights, authentic Kenyan flavours, and custom group menus. 
                  In the cool Nanyuki evenings, gather around our rustic indoor fireplace stove for drinks, conversation, and warm comfort.
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold text-primary">
                  <span>🍽️ Breakfast, Lunch & Dinner</span>
                  <span>🍷 Fully Stocked Bar</span>
                </div>
              </div>
            </div>

            {/* Pool card */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-md flex flex-col group">
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="/kongoni-camp-nanyuki1.jpg"
                  alt="Kongoni Camp sparkling heated outdoor swimming pool"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase font-semibold tracking-wider text-amber-300">Sun & Rejuvenation</span>
                  <h3 className="text-2xl font-serif mt-1">Outdoor Swimming Pool & Sundeck</h3>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Sparkling heated outdoor swimming pool — the perfect place to unwind after a safari, 
                  a mountain hike, or a long day of meetings. Relax on sun loungers with refreshing drinks and snacks.
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold text-primary">
                  <span>🏊 Heated Pool</span>
                  <span>🌴 Lush Forest Backdrop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXPLORE LAIKIPIA & MT KENYA */}
      <section className="py-20 md:py-28 bg-background border-t border-border">
        <div className="page-shell">
          <div className="max-w-2xl mb-14">
            <SectionBadge>Explore From Kongoni</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground leading-tight">
              Your Launchpad to Kenya's Wildlife & Mountain Wonders.
            </h2>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              Positioned right at the town gate on the A2, Kongoni puts you minutes from East Africa's greatest safari and trekking icons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ol Pejeta Conservancy",
                dist: "25 mins drive",
                desc: "Home to the world's last northern white rhinos, the Sweetwaters Chimpanzee Sanctuary, and the Big Five.",
              },
              {
                title: "Mount Kenya National Park",
                dist: "20 mins to Sirimon Gate",
                desc: "UNESCO World Heritage site with dramatic peaks, moorlands, and world-class trekking routes.",
              },
              {
                title: "Ngare Ndare Forest",
                dist: "40 mins drive",
                desc: "Spectacular canopy walkway, natural azure pools, cascading waterfalls, and elephant corridors.",
              },
              {
                title: "Solio Ranch & Lewa",
                dist: "35 mins drive",
                desc: "Renowned rhino breeding sanctuary and world-celebrated conservation landscapes.",
              },
              {
                title: "Ol Jogi Wildlife Conservancy",
                dist: "1 hr 30 min drive",
                desc: "A private Laikipia conservancy with remarkable wildlife diversity — rhinos, Grevy's zebras, and Potap, the only known bear in Africa.",
              },
              {
                title: "Samburu National Reserve",
                dist: "1 hr 30 min drive",
                desc: "Rugged northern landscapes and rare wildlife — reticulated giraffe, gerenuk, Grevy's zebra, and elephants alongside vibrant Samburu culture.",
              },
            ].map((dest, i) => (
              <div
                key={dest.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm"
              >
                <span className="text-highlight text-xs font-mono font-bold">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-serif text-foreground mt-2 mb-1">{dest.title}</h3>
                <span className="inline-block text-xs font-semibold text-primary/80 mb-3">{dest.dist}</span>
                <p className="text-muted-foreground text-xs leading-relaxed">{dest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PHOTO GALLERY SHOWCASE - ALL 7 REAL PHOTOS */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="page-shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <SectionBadge>Real Photography</SectionBadge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground leading-tight">
                A Visual Tour of Kongoni Camp.
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Explore authentic photos of our cottages, suites, dining room, swimming pool, and gardens. Click any photo to view full size.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-xl overflow-hidden bg-card border border-border text-left focus:outline-none focus:ring-2 focus:ring-primary aspect-[4/3]"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                    {photo.tag}
                  </span>
                  <h4 className="text-base font-serif font-medium mt-0.5">{photo.title}</h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-amber-300 transition p-2 rounded-full bg-white/10"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryPhotos[lightboxIndex].src}
              alt={galleryPhotos[lightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-white/20"
            />
            <div className="text-center mt-4 text-white">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                {galleryPhotos[lightboxIndex].tag}
              </span>
              <h3 className="text-2xl font-serif mt-1">{galleryPhotos[lightboxIndex].title}</h3>
              <p className="text-sm text-white/80 max-w-xl mx-auto mt-1">
                {galleryPhotos[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 9. FAQ SECTION */}
      <section className="py-20 md:py-28 bg-background border-t border-border">
        <div className="page-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <SectionBadge>Good to Know</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-foreground leading-tight">
                Frequently Asked Questions.
              </h2>
              <p className="text-muted-foreground text-sm mt-4">
                Have another question or need a customized quote? Feel free to reach out directly via WhatsApp or telephone.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" size="sm">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2 text-emerald-500" />
                    Ask on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-8 divide-y divide-border border-y border-border">
              {faqItems.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-lg font-serif text-foreground group-hover:text-primary transition">
                    <span>{item.q}</span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform duration-200 ml-4 flex-shrink-0" />
                  </summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed pr-6">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. DIRECT ENQUIRY & BOOKING FORM */}
      <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="page-shell">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-amber-200 border border-white/20 mb-3">
              Direct Reservations & Enquiries
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              Plan Your Visit to Kongoni Camp.
            </h2>
            <p className="text-white/80 mt-4 text-base md:text-lg">
              Fill in your details below for swift reservation confirmation, or message our team directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* The Form */}
            <div className="lg:col-span-7 bg-white text-foreground p-8 sm:p-10 rounded-2xl shadow-2xl">
              <form onSubmit={handleEnquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      name="Full Name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="e.g. Sarah Mwangi"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      name="Phone Number"
                      type="tel"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Email Address *
                    </label>
                    <input
                      name="Email Address"
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Enquiry Purpose *
                    </label>
                    <select
                      name="Enquiry Type"
                      required
                      defaultValue=""
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    >
                      <option value="" disabled>Select one</option>
                      <option value="Accommodation Booking">Accommodation (Individual / Couple)</option>
                      <option value="Family Holiday">Family Holiday</option>
                      <option value="Tour Operator / Safari Group">Tour Operator / Safari Group</option>
                      <option value="Corporate Retreat / Conference">Corporate Retreat / Conference</option>
                      <option value="Team Building Programme">Team Building Programme</option>
                      <option value="Dining or Private Event">Dining or Private Event</option>
                      <option value="Other">Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Estimated Guests
                    </label>
                    <input
                      name="Guests"
                      type="number"
                      min="1"
                      placeholder="2"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      name="Date"
                      type="date"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Number of Nights
                    </label>
                    <input
                      name="Nights"
                      type="number"
                      min="1"
                      placeholder="2"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Your Requirements & Questions
                  </label>
                  <textarea
                    name="Message"
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                    placeholder="Tell us about your trip, room preferences, dietary requirements, or meeting needs..."
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="accent" size="xl" className="w-full font-semibold shadow-lg">
                    Send Reservation Enquiry <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {notice && (
                  <p className="text-xs text-primary font-medium text-center bg-primary/10 p-3 rounded-lg">
                    {notice}
                  </p>
                )}
              </form>
            </div>

            {/* Direct Contacts & Map Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-white mb-2">Direct Contact</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Our reservations desk is ready to assist you seven days a week with bookings and inquiries.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${phoneHref}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition border border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-highlight">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/70 uppercase">Call Reservations</span>
                    <span className="text-base font-semibold text-white">{phoneDisplay}</span>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 transition border border-emerald-400/30"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-emerald-200 uppercase">Chat Directly</span>
                    <span className="text-base font-semibold text-white">Instant WhatsApp Chat</span>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition border border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-highlight">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/70 uppercase">Email Us</span>
                    <span className="text-base font-semibold text-white">{email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-highlight flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/70 uppercase">Location</span>
                    <span className="text-sm font-medium text-white">
                      Along the A2 Highway at Nanyuki Town Gate, Laikipia County, Kenya (5 mins from CBD)
                    </span>
                    <a
                      href="https://maps.google.com/?cid=15523719370392106136"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-amber-300 font-semibold mt-2 hover:underline"
                    >
                      Open in Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER - CLEAN, BRAND-FOCUSED, NO MENUS */}
      <footer className="bg-[#121c15] text-white/80 border-t border-white/10 pt-16 pb-12">
        <div className="page-shell">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
            <div className="md:col-span-6 space-y-4">
              <img
                src="/kongoni logo.png"
                alt="Kongoni Camp Nanyuki"
                className="h-12 w-auto filter invert brightness-200"
                width={140}
                height={55}
              />
              <p className="text-sm text-white/70 max-w-md leading-relaxed">
                Kongoni Camp Nanyuki offers comfortable stays in thatched cottages and luxury suites, 
                conferencing facilities, fireside dining, and a sparkling heated outdoor swimming pool in Laikipia, Kenya.
              </p>
              <p className="text-xs text-highlight font-semibold tracking-wider uppercase">
                Stay. Meet. Explore.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs uppercase font-semibold tracking-widest text-white">Direct Connect</h4>
              <p className="text-sm"><a href={`tel:${phoneHref}`} className="hover:text-white transition">{phoneDisplay}</a></p>
              <p className="text-sm"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white transition">WhatsApp Desk</a></p>
              <p className="text-sm"><a href={`mailto:${email}`} className="hover:text-white transition">{email}</a></p>
              <p className="text-sm">Nanyuki, Laikipia, Kenya</p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs uppercase font-semibold tracking-widest text-white">Social Channels</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="https://www.facebook.com/KongoniCampNanyuki" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition">
                  <Facebook className="w-4 h-4 text-highlight" /> Facebook
                </a>
                <a href="https://www.instagram.com/kongoninanyuki/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition">
                  <Instagram className="w-4 h-4 text-highlight" /> Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <span>© {new Date().getFullYear()} Kongoni Camp Nanyuki. All rights reserved.</span>
            <span>A comfortable base for exploring Mount Kenya & Laikipia.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}