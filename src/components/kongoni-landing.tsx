import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  CalendarDays,
  ChevronDown,
  Compass,
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  Phone,
  Plane,
  Trees,
  Users,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const phoneDisplay = "+254 702 868 888";
const phoneHref = "+254702868888";
const whatsappUrl = "https://wa.me/254702868888";
const email = "reservations@kongonicamp.com";

type PlaceholderProps = {
  label: string;
  className?: string;
  priority?: boolean;
};

function PhotoPlaceholder({ label, className = "", priority = false }: PlaceholderProps) {
  return (
    <div
      className={`photo-placeholder ${className}`}
      role="img"
      aria-label={`${label} — Kongoni Camp photograph to be added`}
      data-priority={priority ? "true" : undefined}
    >
      <div className="photo-placeholder__mark" aria-hidden="true">
        <Mountain />
      </div>
      <span>Kongoni Camp photography</span>
      <strong>{label}</strong>
    </div>
  );
}

const navigation = [
  ["Stay", "#stay"],
  ["Meetings & Events", "#meet"],
  ["Dining", "#dining"],
  ["Explore Nanyuki", "#explore"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
] as const;

const stays = [
  {
    name: "Traditional Rondavels",
    copy: "Distinctive round cottages for a relaxed stay at the camp.",
    image: "Traditional rondavel exterior and interior",
  },
  {
    name: "Deluxe Suites",
    copy: "A comfortable option for travellers spending time in Nanyuki.",
    image: "Deluxe suite",
  },
  {
    name: "Superior Deluxe Suites",
    copy: "A spacious accommodation choice for short or longer stays.",
    image: "Superior deluxe suite",
  },
  {
    name: "Standard Rooms",
    copy: "Practical accommodation for individual travellers and groups.",
    image: "Standard room",
  },
] as const;

const audiences = [
  ["Leisure Travellers", "A comfortable base for exploring Nanyuki and Laikipia.", Compass, "#explore"],
  ["Families & Couples", "A relaxed place to stay while discovering the area.", Users, "#stay"],
  ["Tour Operators", "A convenient stop for guests on organised itineraries.", Plane, "#travel-trade"],
  ["Groups", "A practical setting for organised trips, stays and programmes.", Building2, "#groups"],
  ["Organisations", "Options for meetings, training and residential programmes.", CalendarDays, "#meet"],
  ["Events & Meetings", "Spaces for conferences, workshops and gatherings.", Users, "#meet"],
] as const;

const galleryItems = [
  ["The Camp", "Camp grounds and shared spaces", "gallery-tall"],
  ["Rooms", "Kongoni guest room", ""],
  ["Suites", "Kongoni suite", ""],
  ["Dining", "Food and dining at Kongoni", "gallery-wide"],
  ["Meetings", "Meeting and workshop space", ""],
  ["Outdoors", "Outdoor space at Kongoni", "gallery-tall"],
  ["Around Nanyuki", "The Nanyuki and Laikipia landscape", "gallery-wide"],
] as const;

const faqItems = [
  ["Where is Kongoni Camp?", "Kongoni Camp is located along the A2 at the Nanyuki town gate, approximately 5 minutes from Nanyuki CBD."],
  ["Is Kongoni suitable for tourists?", "Yes. Kongoni provides accommodation and a convenient base for guests exploring Nanyuki and Laikipia."],
  ["Do you accommodate tour operators?", "Yes. Kongoni welcomes tour operators and travel partners bringing guests to Nanyuki."],
  ["Can organisations hold meetings and retreats at Kongoni?", "Yes. The property can accommodate meetings, conferences, workshops, training programmes, retreats and team-building activities."],
  ["Can groups stay at Kongoni?", "Yes. Kongoni has multiple accommodation options suitable for different types of travellers and groups."],
  ["Does Kongoni provide catering?", "Yes. Catering options include continental, Indian and Japanese menus, with options available for different dietary requirements."],
  ["How far is Kongoni from Nanyuki town?", "Kongoni is approximately 5 minutes from Nanyuki CBD."],
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <header className="site-header">
      <a href="#top" className="wordmark" aria-label="Kongoni Camp home">
        <img
          src="/kongoni logo.png"
          alt="Kongoni Camp Nanyuki"
          className="site-logo"
          width={120}
          height={52}
        />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <Button asChild variant="accent" className="desktop-cta"><a href="#contact">Book / Enquire</a></Button>
      <Button
        variant="ghost"
        size="icon"
        className="mobile-menu-button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>
      {open && (
        <div className="mobile-menu">
          <nav aria-label="Mobile navigation">
            {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight /></a>)}
          </nav>
          <Button asChild variant="accent" size="lg"><a href="#contact" onClick={() => setOpen(false)}>Book / Enquire</a></Button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <PhotoPlaceholder label="Lead view of the camp and grounds" className="hero-photo" priority />
      <div className="hero-shade" />
      <div className="hero-content page-shell">
        <p className="hero-location"><MapPin /> Nanyuki, Laikipia <span /> Along the A2</p>
        <h1>Stay. Meet.<br />Explore Nanyuki.</h1>
        <p className="hero-copy">Comfortable accommodation, spaces for meetings and events, catering and a natural base for exploring Nanyuki and Laikipia.</p>
        <div className="hero-actions">
          <Button asChild variant="accent" size="xl"><a href="#contact">Plan Your Stay <ArrowRight /></a></Button>
          <Button asChild variant="heroOutline" size="xl"><a href="#intro">Explore Kongoni <ArrowDown /></a></Button>
        </div>
      </div>
      <div className="hero-pillar" aria-label="Stay, meet and explore">
        <span>Stay</span><i /><span>Meet</span><i /><span>Explore</span>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="intro" className="editorial-section page-shell">
      <div className="editorial-copy">
        <SectionLabel>Welcome to Kongoni</SectionLabel>
        <h2>A place for travellers, teams and everyone in between.</h2>
        <p>Set on 10 acres along the A2 at the Nanyuki town gate, Kongoni Camp offers a relaxed setting close to Nanyuki CBD.</p>
        <p>Whether you're stopping over, planning a Laikipia adventure, travelling with family, organising a group trip or bringing your team away, Kongoni gives you a place to stay, meet, eat and unwind.</p>
        <Button asChild variant="text"><a href="#stay">Discover Kongoni <ArrowRight /></a></Button>
      </div>
      <PhotoPlaceholder label="Wide view across the Kongoni Camp property" className="intro-photo" />
    </section>
  );
}

function StaySection() {
  return (
    <section id="stay" className="section section-warm">
      <div className="page-shell">
        <div className="section-heading">
          <div><SectionLabel>Stay</SectionLabel><h2>Find your place<br />at Kongoni.</h2></div>
          <p>Four accommodation styles give individual travellers, couples, families and groups practical choices for short and longer stays.</p>
        </div>
        <div className="stay-grid">
          {stays.map((stay, index) => (
            <article className={`stay-item stay-item-${index + 1}`} key={stay.name}>
              <PhotoPlaceholder label={stay.image} className="stay-photo" />
              <div className="stay-copy"><span>0{index + 1}</span><h3>{stay.name}</h3><p>{stay.copy}</p><a href="#contact">Enquire about this stay <ArrowRight /></a></div>
            </article>
          ))}
        </div>
        <div className="center-action"><Button asChild size="lg"><a href="#contact">View Accommodation <ArrowRight /></a></Button></div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="section page-shell audience-section">
      <div className="section-heading compact">
        <div><SectionLabel>Your kind of stay</SectionLabel><h2>However you're travelling, Kongoni has room for you.</h2></div>
      </div>
      <div className="audience-grid">
        {audiences.map(([title, copy, Icon, href], index) => (
          <a href={href} className="audience-item" key={title}>
            <span className="audience-number">0{index + 1}</span><Icon /><h3>{title}</h3><p>{copy}</p><ArrowRight className="audience-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
}

function MeetingsSection() {
  const uses = ["Board retreats", "Conferences", "Workshops", "Training", "Strategy sessions", "Team meetings", "Team-building programmes", "Group programmes"];
  return (
    <section id="meet" className="section section-forest">
      <div className="page-shell meetings-layout">
        <div className="meetings-images">
          <PhotoPlaceholder label="Conference or workshop in progress" className="meeting-main" />
          <PhotoPlaceholder label="Kongoni meeting setup" className="meeting-small" />
        </div>
        <div className="meetings-copy">
          <SectionLabel>Meet</SectionLabel><h2>Bring people together.</h2>
          <p>Kongoni provides a practical setting for organisations and groups looking for space to meet, work and spend time together.</p>
          <ul>{uses.map((item) => <li key={item}><span />{item}</li>)}</ul>
          <Button asChild variant="accent" size="lg"><a href="#contact">Plan a Meeting or Retreat <ArrowRight /></a></Button>
        </div>
      </div>
    </section>
  );
}

function GroupsAndDining() {
  return (
    <>
      <section id="groups" className="split-feature">
        <div className="split-feature__copy">
          <SectionLabel>Events & groups</SectionLabel><h2>Space for groups, gatherings and occasions.</h2>
          <p>Kongoni welcomes organised tours, group stays, training programmes, workshops, team-building activities, private events and social gatherings.</p>
          <Button asChild variant="text"><a href="#contact">Talk to Us About Your Group <ArrowRight /></a></Button>
        </div>
        <PhotoPlaceholder label="Group gathering or outdoor event" className="split-feature__photo" />
      </section>
      <section id="dining" className="split-feature split-feature--reverse">
        <PhotoPlaceholder label="Kongoni dining and food" className="split-feature__photo" />
        <div className="split-feature__copy">
          <SectionLabel>Dining</SectionLabel><h2>Good food, wherever the day takes you.</h2>
          <p>Catering at Kongoni supports stays, meetings and group programmes, with continental, Indian and Japanese options available.</p>
          <p>Different dietary requirements can be discussed when you enquire.</p>
          <Button asChild variant="text"><a href="#contact">Explore Dining <ArrowRight /></a></Button>
        </div>
      </section>
    </>
  );
}

function ExploreSection() {
  const destinations = [
    ["Ol Pejeta Conservancy", "A major wildlife destination in Laikipia.", "Ol Pejeta wildlife landscape"],
    ["Mount Kenya", "A defining landmark and major attraction around Nanyuki.", "Mount Kenya landscape"],
    ["Mau Mau Caves", "A historic destination connected to Kenya's Mau Mau history.", "Mau Mau Caves"],
    ["Mt Kenya Wildlife Conservancy", "A nearby conservation and wildlife attraction.", "Mount Kenya Wildlife Conservancy"],
    ["Nanyuki Airstrip", "Convenient for guests travelling to Nanyuki by air.", "Nanyuki Airstrip"],
  ];
  return (
    <section id="explore" className="section explore-section">
      <div className="page-shell">
        <div className="section-heading"><div><SectionLabel>Explore</SectionLabel><h2>Stay here.<br />Explore from here.</h2></div><p>Kongoni puts you within reach of some of Nanyuki and Laikipia's well-known attractions, making it a convenient base for exploring the region.</p></div>
        <div className="destination-grid">
          {destinations.map(([name, copy, label], index) => (
            <article className={`destination destination-${index + 1}`} key={name}>
              <PhotoPlaceholder label={label} className="destination-photo" />
              <div><span>0{index + 1}</span><h3>{name}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
        <div className="center-action"><Button asChild size="lg"><a href="#contact">Explore Nanyuki & Laikipia <ArrowRight /></a></Button></div>
      </div>
    </section>
  );
}

function TravelTrade() {
  const points = ["Convenient Nanyuki location", "Multiple accommodation options", "Group stays and catering", "Access to local attractions", "Easy access from the A2", "Close to Nanyuki CBD and the airstrip"];
  return (
    <section id="travel-trade" className="travel-trade">
      <PhotoPlaceholder label="Tour guests arriving at Kongoni" className="travel-photo" />
      <div className="travel-copy">
        <SectionLabel>Travel trade</SectionLabel><h2>For tour operators and travel partners.</h2>
        <p>Kongoni Camp welcomes travel partners looking for accommodation in Nanyuki for individual travellers, families, groups and organised itineraries.</p>
        <ul>{points.map((point) => <li key={point}><ArrowRight />{point}</li>)}</ul>
        <div className="button-row"><Button asChild variant="accent" size="lg"><a href="#contact">Talk to Our Travel Team</a></Button><Button asChild variant="heroOutline" size="lg"><a href={`mailto:${email}?subject=Kongoni Partner Information`}>Request Partner Information</a></Button></div>
      </div>
    </section>
  );
}

function WhyNanyuki() {
  return (
    <section className="why-nanyuki">
      <PhotoPlaceholder label="Wide Laikipia landscape near Nanyuki" className="why-photo" />
      <div className="why-overlay page-shell">
        <SectionLabel>Nanyuki & Laikipia</SectionLabel><h2>Nanyuki gives you plenty to do.</h2>
        <p>From Mount Kenya and wildlife conservation to local history, outdoor experiences, Laikipia landscapes, restaurants and town life, Nanyuki opens the way to a varied part of Kenya.</p>
      </div>
    </section>
  );
}

function Facts() {
  const facts = [["10", "Acres", "A spacious camp environment."], ["5", "Minutes", "Approximately five minutes from Nanyuki CBD."], ["A2", "At the town gate", "Direct access from the main corridor."], ["4", "Stay options", "Multiple accommodation categories."], ["Meet", "On site", "Spaces for meetings, retreats and programmes."], ["Fly", "Into Nanyuki", "Convenient access from Nanyuki Airstrip."]];
  return <section className="facts-section page-shell"><SectionLabel>Kongoni at a glance</SectionLabel><div className="facts-grid">{facts.map(([big, label, copy]) => <div key={label} className="fact"><strong>{big}</strong><h3>{label}</h3><p>{copy}</p></div>)}</div></section>;
}

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const categories = ["All", ...galleryItems.map(([category]) => category)];
  const visible = galleryItems.map((item, index) => ({ item, index })).filter(({ item }) => filter === "All" || item[0] === filter);
  return (
    <section id="gallery" className="section section-warm gallery-section">
      <div className="page-shell">
        <div className="section-heading compact"><div><SectionLabel>Gallery</SectionLabel><h2>Take a look around.</h2></div></div>
        <div className="gallery-filters" aria-label="Gallery categories">{categories.map((category) => <Button key={category} variant={filter === category ? "default" : "ghost"} size="sm" onClick={() => setFilter(category)}>{category}</Button>)}</div>
        <div className="gallery-grid">
          {visible.map(({ item: [category, label, shape], index }) => (
            <button className={`gallery-item ${shape}`} key={category} onClick={() => setActive(index)} aria-label={`Open ${category} image`}>
              <PhotoPlaceholder label={label} /><span>{category}<ExternalLink /></span>
            </button>
          ))}
        </div>
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${galleryItems[active][0]} photograph`} onClick={() => setActive(null)}>
          <Button variant="lightbox" size="icon" aria-label="Close image" onClick={() => setActive(null)}><X /></Button>
          <PhotoPlaceholder label={galleryItems[active][1]} className="lightbox-photo" />
          <p>{galleryItems[active][0]}</p>
        </div>
      )}
    </section>
  );
}

function EnquiryForm() {
  const [notice, setNotice] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = ["Kongoni Camp enquiry", "", ...Array.from(form.entries()).map(([key, value]) => `${key}: ${value}`)];
    setNotice("Your enquiry is ready. Your email app will open so you can send it to reservations.");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Kongoni enquiry — ${String(form.get("I'm enquiring about") || "Stay")}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
  };
  return (
    <form className="enquiry-form" onSubmit={submit}>
      <label>Name<input name="Name" required autoComplete="name" /></label>
      <label>Organisation <span>Optional</span><input name="Organisation" autoComplete="organization" /></label>
      <label>Email<input name="Email" required type="email" autoComplete="email" /></label>
      <label>Phone<input name="Phone" required type="tel" autoComplete="tel" /></label>
      <label className="field-wide">I'm enquiring about<select name="I'm enquiring about" required defaultValue=""><option value="" disabled>Select one</option>{["Accommodation", "Group Stay", "Tour / Travel", "Meeting or Conference", "Retreat", "Team Building", "Event", "Dining", "Other"].map((option) => <option key={option}>{option}</option>)}</select></label>
      <label>Number of Guests<input name="Number of guests" type="number" min="1" /></label>
      <label>Preferred Date<input name="Preferred date" type="date" /></label>
      <label>Number of Nights / Days<input name="Number of nights or days" type="number" min="1" /></label>
      <label className="field-wide">Message<textarea name="Message" rows={4} placeholder="Tell us a little about your plans." /></label>
      <div className="form-action field-wide"><Button type="submit" variant="accent" size="xl">Send Enquiry <ArrowRight /></Button><p>Prefer WhatsApp? <a href={`${whatsappUrl}?text=${encodeURIComponent("Hello Kongoni Camp, I would like to make an enquiry.")}`} target="_blank" rel="noreferrer">Message reservations</a>.</p></div>
      {notice && <p className="form-notice field-wide" role="status">{notice}</p>}
    </form>
  );
}

function ContactSection() {
  const browserKey = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"];
  const mapSrc = browserKey ? `https://www.google.com/maps/embed/v1/place?key=${browserKey}&q=place_id:ChIJ2ciqtbH3hxcRmHQS6YRUb9c` : "";
  return (
    <section id="contact" className="contact-section">
      <div className="page-shell contact-heading"><SectionLabel>Plan your visit</SectionLabel><h2>Planning a stay, trip or programme?</h2><p>Tell us what you're planning and we'll help you find the right option at Kongoni.</p></div>
      <div className="page-shell contact-grid">
        <EnquiryForm />
        <aside className="contact-details">
          <div><SectionLabel>Find Kongoni Camp</SectionLabel><h3>Kongoni Camp Nanyuki</h3><p>Located along the A2 at the Nanyuki town gate, approximately 5 minutes from Nanyuki CBD.</p></div>
          <div className="map-frame">{mapSrc ? <iframe title="Kongoni Camp location on Google Maps" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> : <div className="map-fallback"><MapPin /><span>Interactive map loads when map access is available.</span></div>}</div>
          <div className="contact-actions"><Button asChild><a href="https://maps.google.com/?cid=15523719370392106136" target="_blank" rel="noreferrer"><MapPin /> Get Directions</a></Button><Button asChild variant="outline"><a href={`tel:${phoneHref}`}><Phone /> Call</a></Button><Button asChild variant="outline"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button></div>
          <a className="contact-link" href={`mailto:${email}`}><Mail />{email}</a>
        </aside>
      </div>
    </section>
  );
}

function FAQ() {
  return <section className="section page-shell faq-section"><div><SectionLabel>Good to know</SectionLabel><h2>Frequently asked questions.</h2></div><div className="faq-list">{faqItems.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></section>;
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-image"><PhotoPlaceholder label="Warm evening view at Kongoni Camp" className="footer-photo" /><div className="footer-image__overlay"><h2>Make Kongoni part of your Nanyuki plans.</h2><p>Whether you're coming for a night, a weekend, a meeting, a group programme or a Laikipia adventure, we'd be happy to have you.</p><div className="button-row"><Button asChild variant="accent" size="xl"><a href="#contact">Plan Your Stay</a></Button><Button asChild variant="heroOutline" size="xl"><a href={`tel:${phoneHref}`}>Contact Kongoni</a></Button></div></div></div>
      <div className="footer-main page-shell">
        <div className="footer-brand"><img src="/kongoni logo.png" alt="Kongoni Camp Nanyuki" className="footer-logo" width={140} height={60} /><p>Kongoni Camp is a hospitality and accommodation destination in Nanyuki, Laikipia, offering stays, dining, meetings, retreats and access to the wider Nanyuki experience.</p></div>
        <div><h3>Explore</h3>{navigation.slice(0, 5).map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
        <div><h3>Contact</h3><a href={`tel:${phoneHref}`}>{phoneDisplay}</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href={`mailto:${email}`}>{email}</a><a href="https://maps.google.com/?cid=15523719370392106136" target="_blank" rel="noreferrer">Google Maps</a></div>
        <div><h3>Follow</h3><a href="https://www.facebook.com/KongoniCampNanyuki" target="_blank" rel="noreferrer"><Facebook /> Facebook</a><a href="https://www.instagram.com/kongoninanyuki/" target="_blank" rel="noreferrer"><Instagram /> Instagram</a><a href="https://twitter.com/kongonicamp1" target="_blank" rel="noreferrer">X / Twitter</a><a href="https://www.tiktok.com/@kongoni.camp.nany" target="_blank" rel="noreferrer">TikTok</a></div>
      </div>
      <div className="footer-bottom page-shell"><span>© {new Date().getFullYear()} Kongoni Camp. All rights reserved.</span><span><a href="#contact">Privacy Policy</a><a href="#contact">Terms</a><a href="http://www.kongonicamp.com/" target="_blank" rel="noreferrer">kongonicamp.com</a></span></div>
    </footer>
  );
}

function MobileBar() {
  return <div className="mobile-bar"><a href={`tel:${phoneHref}`}><Phone />Call</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp</a><a href="#contact"><Mail />Enquire</a></div>;
}

export function KongoniLanding() {
  return <><Header /><main><Hero /><Intro /><StaySection /><AudienceSection /><MeetingsSection /><GroupsAndDining /><ExploreSection /><TravelTrade /><WhyNanyuki /><Facts /><Gallery /><FAQ /><ContactSection /></main><Footer /><MobileBar /></>;
}