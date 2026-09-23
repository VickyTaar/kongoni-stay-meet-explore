import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Mail, c as ExternalLink, d as ArrowRight, i as MapPin, l as ChevronDown, n as Phone, o as Instagram, r as MessageCircle, s as Facebook, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cx356PFZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			accent: "bg-highlight text-highlight-foreground hover:bg-highlight/90",
			heroOutline: "border border-hero-foreground/60 bg-transparent text-hero-foreground hover:bg-hero-foreground hover:text-primary",
			text: "h-auto rounded-none border-b border-primary/30 bg-transparent px-0 py-1 text-primary shadow-none hover:border-primary",
			lightbox: "bg-overlay text-hero-foreground hover:bg-overlay/80"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9",
			xl: "min-h-12 px-6 py-3 text-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var phoneDisplay = "+254 702 868 888";
var phoneHref = "+254702868888";
var whatsappUrl = "https://wa.me/254702868888";
var email = "reservations@kongonicamp.com";
var galleryPhotos = [
	{
		src: "/kongoni-camp-nanyuki4.jpg",
		title: "Traditional Thatched Rondavels",
		caption: "Authentic round thatched cottages nestled along stone paths and lush flowering gardens.",
		tag: "Exterior & Grounds",
		span: "gallery-wide"
	},
	{
		src: "/superior-deluxe-room_006.jpg",
		title: "Superior Deluxe Suite",
		caption: "Spacious master suite featuring vaulted wooden beams, lounge area, leopard artwork, and stone floors.",
		tag: "Accommodation",
		span: "gallery-tall"
	},
	{
		src: "/kongoni-camp-nanyuki1.jpg",
		title: "Forest-Fringed Swimming Pool",
		caption: "Sparkling outdoor swimming pool bordered by native trees, sun umbrellas, and comfortable loungers.",
		tag: "Pool & Leisure",
		span: "gallery-wide"
	},
	{
		src: "/kongoni-camp-nanyuki restaurant.jpg",
		title: "Rustic Lodge Restaurant & Bar",
		caption: "Cozy timber-framed dining lounge with open fireplace stove, African tapestries, and fully stocked bar.",
		tag: "Dining & Social",
		span: ""
	},
	{
		src: "/kongoni-camp-nanyuki5.jpg",
		title: "Warm Cottage Bedroom",
		caption: "Comfortable double room with handcrafted batik textiles, mosquito net canopy, and tranquil garden views.",
		tag: "Accommodation",
		span: ""
	},
	{
		src: "/poolside-spa_03.jpg",
		title: "Poolside Spa Pavilion",
		caption: "Traditional thatched wellness pavilion overlooking immaculate lawns and the swimming pool.",
		tag: "Spa & Grounds",
		span: "gallery-wide"
	},
	{
		src: "/kongoni-camp-nanyuki_006.jpg",
		title: "Lush Camp Walkways",
		caption: "Mature indigenous trees and tropical flora framing private cottage verandas.",
		tag: "Grounds & Nature",
		span: ""
	}
];
var staysList = [
	{
		name: "Superior Deluxe Suites",
		type: "Spacious & Elegant",
		copy: "Our most expansive accommodation featuring high vaulted timber ceilings, generous seating lounge, stone flooring, African wildlife art, en-suite bathroom, and dedicated workspace.",
		image: "/superior-deluxe-room_006.jpg",
		highlights: [
			"King Bed & Lounge Area",
			"Vaulted Timber Ceilings",
			"En-suite Bathroom & Wi-Fi",
			"Writing Desk & Veranda"
		]
	},
	{
		name: "Traditional Rondavels",
		type: "Signature African Cottages",
		copy: "Distinctive round thatched cottages set amidst flowering shrubs and mature trees. Combining genuine Kenyan character with peaceful comfort and privacy.",
		image: "/kongoni-camp-nanyuki4.jpg",
		highlights: [
			"Authentic Thatch Architecture",
			"Stone Garden Pathways",
			"Quiet Forest Ambience",
			"Private Veranda"
		]
	},
	{
		name: "Deluxe Cottage Rooms",
		type: "Warm & Atmospheric",
		copy: "Intimate and comfortable rooms appointed with handcrafted batik art, warm hearth lighting, comfortable bedding, and garden outlooks for restful stays.",
		image: "/kongoni-camp-nanyuki5.jpg",
		highlights: [
			"Handcrafted Textiles",
			"Bed Canopy / Net",
			"Cozy Fireside Feel",
			"Garden Views"
		]
	},
	{
		name: "Garden Cottages & Group Stays",
		type: "Serene & Relaxed",
		copy: "Cottages surrounded by tranquil greenery, designed for families, safari travellers, tour groups, and retreat delegates seeking a comfortable base in Nanyuki.",
		image: "/kongoni-camp-nanyuki_006.jpg",
		highlights: [
			"Interconnecting Options",
			"Lush Lawn Setting",
			"Ample Natural Light",
			"Ideal for Groups"
		]
	}
];
var faqItems = [
	{
		q: "Where is Kongoni Camp located?",
		a: "Kongoni Camp is conveniently situated along the A2 highway right at the Nanyuki town gate — just 5 minutes from Nanyuki CBD and approximately 15 minutes from Nanyuki Airstrip."
	},
	{
		q: "Is Kongoni Camp suitable for leisure tourists and safari travellers?",
		a: "Yes! Kongoni is a premier safari base for visiting Ol Pejeta Conservancy, hiking Mount Kenya, exploring Ngare Ndare Forest, and relaxing by our swimming pool in lush natural surroundings."
	},
	{
		q: "Can organisations hold meetings, workshops, and retreats at Kongoni?",
		a: "Absolutely. We host corporate conferences, board retreats, NGO seminars, school programmes, and team-building retreats with full AV setup, tailored catering, and quiet indoor and outdoor spaces."
	},
	{
		q: "What dining options are available on-site?",
		a: "Our rustic fireside restaurant serves freshly prepared continental, Kenyan, Indian, and selected Asian specialities, with full bar service and custom meal plans for residential groups."
	},
	{
		q: "Do you cater to tour operators and travel trade partners?",
		a: "Yes. We work closely with tour operators and travel agents, offering competitive partner rates, driver/guide arrangements, and flexible group accommodation packages."
	},
	{
		q: "How can I make a reservation or enquiry?",
		a: "You can submit the enquiry form below, call our reservations desk at +254 702 868 888, or click the WhatsApp button for instant assistance."
	}
];
function SectionBadge({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/30 text-highlight border border-accent/40 mb-3",
		children
	});
}
function KongoniLanding() {
	const [lightboxIndex, setLightboxIndex] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)("");
	const handleEnquirySubmit = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const lines = [
			"Kongoni Camp Nanyuki - Website Enquiry",
			"-------------------------------------",
			...Array.from(form.entries()).map(([k, v]) => `${k}: ${v}`)
		];
		setNotice("Opening your email client with your reservation details...");
		const enquiryType = String(form.get("Enquiry Type") || "General Enquiry");
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Kongoni Enquiry — ${enquiryType}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "landing-page min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "absolute top-0 left-0 right-0 z-40 py-5 px-6 md:px-12 flex items-center justify-between border-b border-white/15",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/kongoni logo.png",
						alt: "Kongoni Camp Nanyuki",
						className: "h-10 md:h-12 w-auto filter invert brightness-200",
						width: 130,
						height: 50
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 md:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${phoneHref}`,
						className: "hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5 text-highlight" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: phoneDisplay })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "accent",
						size: "sm",
						className: "font-semibold shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: "Enquire & Book"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative min-h-[92vh] flex items-center text-white isolate overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/kongoni-camp-nanyuki4.jpg",
						alt: "Kongoni Camp Nanyuki thatched cottages and gardens",
						className: "absolute inset-0 w-full h-full object-cover -z-20 scale-105 transition-transform duration-1000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35 -z-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "page-shell w-full pt-28 pb-16 md:py-36",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-medium uppercase tracking-widest text-white/90 mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3.5 h-3.5 text-highlight" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nanyuki, Laikipia, Kenya • Along the A2" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.95] text-white tracking-tight mb-6",
									children: [
										"Stay. Meet.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic font-light text-amber-200/90",
											children: "Explore"
										}),
										" Laikipia."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-light mb-8 max-w-2xl",
									children: "A serene 10-acre hospitality sanctuary at the foot of Mount Kenya. Authentic thatched rondavels, superior deluxe suites, sparkling pool, fireside dining, and versatile retreat spaces for travellers, families, and organisations."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-4 mb-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "accent",
										size: "xl",
										className: "font-semibold shadow-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#contact",
											children: ["Plan Your Visit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 ml-1" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "heroOutline",
										size: "xl",
										className: "font-medium backdrop-blur-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: whatsappUrl,
											target: "_blank",
											rel: "noreferrer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4 mr-1 text-emerald-400" }), "Chat on WhatsApp"]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/20 text-xs text-white/80 font-medium",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-highlight flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10 Lush Acres" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-highlight flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Outdoor Swimming Pool" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-highlight flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "5 Mins to Nanyuki CBD" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-highlight flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mt Kenya & Safari Gateway" })]
										})
									]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28 bg-muted/40 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "page-shell",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Welcome to Kongoni Camp" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground leading-tight",
									children: "An Authentic Natural Haven at the Gateway of Nanyuki."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-base md:text-lg leading-relaxed",
									children: "Tucked away along the A2 highway at the Nanyuki town gate, Kongoni Camp blends the rustic spirit of classic Kenyan safari hospitality with contemporary comforts."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-base leading-relaxed",
									children: "Whether you are summiting Mount Kenya, embarking on game drives across Ol Pejeta, escaping on a weekend retreat, holding a high-level board workshop, or touring with a group, our tranquil grounds provide a warm, peaceful home base."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-6 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-l-2 border-highlight pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-2xl font-serif text-primary font-bold",
											children: "10 Acres"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground uppercase tracking-wider",
											children: "Mature Private Grounds"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-l-2 border-highlight pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-2xl font-serif text-primary font-bold",
											children: "24 / 7"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground uppercase tracking-wider",
											children: "Warm Kenyan Hospitality"
										})]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-2xl overflow-hidden shadow-2xl border border-border group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/poolside-spa_03.jpg",
										alt: "Kongoni Camp Poolside Spa Pavilion and lush green lawn",
										className: "w-full h-[420px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700",
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-6 left-6 right-6 text-white",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold uppercase tracking-widest text-amber-300",
												children: "Relaxation & Wellness"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-serif mt-1",
												children: "Poolside Thatched Spa Pavilion"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-white/80 mt-1",
												children: "Serene lawn setting overlooking the swimming pool and indigenous trees."
											})
										]
									})
								]
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28 bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-shell",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl mb-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Stay at Kongoni" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground leading-tight",
								children: "Comfortable Accommodation Surrounded by Nature."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-4 text-base md:text-lg",
								children: "Choose from traditional thatched rondavels, spacious superior deluxe suites, and comfortable cottage rooms tailored for individuals, couples, families, and retreat groups."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10",
						children: staysList.map((stay) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-64 sm:h-72 overflow-hidden bg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: stay.image,
									alt: stay.name,
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-amber-200 border border-white/10",
									children: stay.type
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 sm:p-8 flex flex-col flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-serif font-normal text-foreground mb-2",
										children: stay.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-sm leading-relaxed mb-6 flex-1",
										children: stay.copy
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2 text-xs text-foreground/80 mb-6 pt-4 border-t border-border",
										children: stay.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-highlight flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, item))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										className: "w-full justify-between group-hover:border-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#contact",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reserve this stay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" })]
										})
									})
								]
							})]
						}, stay.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28 bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "page-shell",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6 relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl overflow-hidden shadow-2xl border border-white/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/kongoni-camp-nanyuki restaurant.jpg",
									alt: "Kongoni Camp lodge interior and gathering space",
									className: "w-full h-[400px] md:h-[480px] object-cover",
									loading: "lazy"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden sm:block absolute -bottom-8 -right-6 w-52 h-44 rounded-xl overflow-hidden shadow-2xl border-4 border-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/kongoni-camp-nanyuki_006.jpg",
									alt: "Kongoni outdoor retreat grounds",
									className: "w-full h-full object-cover",
									loading: "lazy"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-amber-200 border border-white/20",
									children: "Meet & Collaborate"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight text-white",
									children: "Space to Think, Align, and Bring People Together."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/80 text-base md:text-lg leading-relaxed",
									children: "Corporate retreats, NGO seminars, board strategies, and team-building sessions thrive in Kongoni's quiet, distraction-free natural setting."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-3 text-sm text-white/90 pt-2",
									children: [
										"Executive Board Retreats",
										"Training & Workshops",
										"Outdoor Team-Building",
										"NGO & Institutional Seminars",
										"Full AV & Projection",
										"Tailored Catering Packages",
										"Residential Conferencing",
										"Spacious Garden Grounds"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-highlight flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 flex flex-wrap gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "accent",
										size: "lg",
										className: "shadow-lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contact",
											children: "Request Conference Package"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "heroOutline",
										size: "lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: whatsappUrl,
											target: "_blank",
											rel: "noreferrer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4 mr-1 text-emerald-400" }), "Talk to Event Coordinator"]
										})
									})]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28 bg-muted/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-shell",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl mb-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Dining & Relaxation" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground leading-tight",
								children: "Flavours by the Fire, Leisure by the Pool."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-4 text-base md:text-lg",
								children: "Fresh cuisine, warm fireside evenings, and sun-drenched afternoons in the pool."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-2xl overflow-hidden border border-border shadow-md flex flex-col group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-72 sm:h-80 overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/kongoni-camp-nanyuki restaurant.jpg",
										alt: "Kongoni Camp Fireside Restaurant",
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-5 left-5 right-5 text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs uppercase font-semibold tracking-wider text-amber-300",
											children: "Restaurant & Bar"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-serif mt-1",
											children: "Fireside Dining & Lounge"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 sm:p-8 flex-1 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed mb-6",
									children: "Savour continental delights, authentic Kenyan flavours, and custom group menus. In the cool Nanyuki evenings, gather around our rustic indoor fireplace stove for drinks, conversation, and warm comfort."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-xs font-semibold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍽️ Breakfast, Lunch & Dinner" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍷 Fully Stocked Bar" })]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-2xl overflow-hidden border border-border shadow-md flex flex-col group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-72 sm:h-80 overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/kongoni-camp-nanyuki1.jpg",
										alt: "Kongoni Camp outdoor swimming pool",
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-5 left-5 right-5 text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs uppercase font-semibold tracking-wider text-amber-300",
											children: "Sun & Rejuvenation"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-serif mt-1",
											children: "Outdoor Swimming Pool & Sundeck"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 sm:p-8 flex-1 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed mb-6",
									children: "Take a refreshing dip in our sparkling outdoor pool surrounded by tall native trees. Unwind on comfortable sun loungers under shade umbrellas with refreshing drinks and snacks."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-xs font-semibold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🏊 Heated Sunshine & Deck" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🌴 Lush Forest Backdrop" })]
								})]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28 bg-background border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-shell",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl mb-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Explore From Kongoni" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground leading-tight",
								children: "Your Launchpad to Kenya's Wildlife & Mountain Wonders."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-4 text-base md:text-lg",
								children: "Positioned right at the town gate on the A2, Kongoni puts you minutes from East Africa's greatest safari and trekking icons."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
						children: [
							{
								title: "Ol Pejeta Conservancy",
								dist: "25 mins drive",
								desc: "Home to the world's last northern white rhinos, the Sweetwaters Chimpanzee Sanctuary, and the Big Five."
							},
							{
								title: "Mount Kenya National Park",
								dist: "20 mins to Sirimon Gate",
								desc: "UNESCO World Heritage site with dramatic peaks, moorlands, and world-class trekking routes."
							},
							{
								title: "Ngare Ndare Forest",
								dist: "40 mins drive",
								desc: "Spectacular canopy walkway, natural azure pools, cascading waterfalls, and elephant corridors."
							},
							{
								title: "Solio Ranch & Lewa",
								dist: "35 mins drive",
								desc: "Renowned rhino breeding sanctuary and world-celebrated conservation landscapes."
							}
						].map((dest, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-highlight text-xs font-mono font-bold",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-serif text-foreground mt-2 mb-1",
									children: dest.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block text-xs font-semibold text-primary/80 mb-3",
									children: dest.dist
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-xs leading-relaxed",
									children: dest.desc
								})
							]
						}, dest.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28 bg-muted/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-shell",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Real Photography" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground leading-tight",
							children: "A Visual Tour of Kongoni Camp."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm max-w-md",
							children: "Explore authentic photos of our cottages, suites, dining room, swimming pool, and gardens. Click any photo to view full size."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
						children: galleryPhotos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setLightboxIndex(index),
							className: "group relative rounded-xl overflow-hidden bg-card border border-border text-left focus:outline-none focus:ring-2 focus:ring-primary aspect-[4/3]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photo.src,
									alt: photo.title,
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-4 left-4 right-4 text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold uppercase tracking-wider text-amber-300",
										children: photo.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-base font-serif font-medium mt-0.5",
										children: photo.title
									})]
								})
							]
						}, photo.src))
					})]
				})
			}),
			lightboxIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "dialog",
				"aria-modal": "true",
				className: "fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10",
				onClick: () => setLightboxIndex(null),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setLightboxIndex(null),
					className: "absolute top-6 right-6 text-white hover:text-amber-300 transition p-2 rounded-full bg-white/10",
					"aria-label": "Close image viewer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl w-full max-h-[85vh] flex flex-col items-center",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: galleryPhotos[lightboxIndex].src,
						alt: galleryPhotos[lightboxIndex].title,
						className: "max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-white/20"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mt-4 text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-widest text-amber-300 font-semibold",
								children: galleryPhotos[lightboxIndex].tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-serif mt-1",
								children: galleryPhotos[lightboxIndex].title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/80 max-w-xl mx-auto mt-1",
								children: galleryPhotos[lightboxIndex].caption
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-28 bg-background border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "page-shell",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Good to Know" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl sm:text-4xl font-serif font-normal text-foreground leading-tight",
									children: "Frequently Asked Questions."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm mt-4",
									children: "Have another question or need a customized quote? Feel free to reach out directly via WhatsApp or telephone."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										size: "sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: whatsappUrl,
											target: "_blank",
											rel: "noreferrer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4 mr-2 text-emerald-500" }), "Ask on WhatsApp"]
										})
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-8 divide-y divide-border border-y border-border",
							children: faqItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: "flex justify-between items-center cursor-pointer list-none text-lg font-serif text-foreground group-hover:text-primary transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform duration-200 ml-4 flex-shrink-0" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground mt-3 leading-relaxed pr-6",
									children: item.a
								})]
							}, item.q))
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "py-20 md:py-28 bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-shell",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl mx-auto text-center mb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-amber-200 border border-white/20 mb-3",
								children: "Direct Reservations & Enquiries"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-5xl font-serif font-normal text-white leading-tight",
								children: "Plan Your Visit to Kongoni Camp."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/80 mt-4 text-base md:text-lg",
								children: "Fill in your details below for swift reservation confirmation, or message our team directly."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-7 bg-white text-foreground p-8 sm:p-10 rounded-2xl shadow-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleEnquirySubmit,
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
											children: "Your Full Name *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "Full Name",
											required: true,
											className: "w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm",
											placeholder: "e.g. Sarah Mwangi"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
											children: "Phone Number *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "Phone Number",
											type: "tel",
											required: true,
											className: "w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm",
											placeholder: "+254 700 000 000"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
											children: "Email Address *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "Email Address",
											type: "email",
											required: true,
											className: "w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm",
											placeholder: "you@example.com"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
											children: "Enquiry Purpose *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "Enquiry Type",
											required: true,
											defaultValue: "",
											className: "w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													disabled: true,
													children: "Select one"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Accommodation Booking",
													children: "Accommodation (Individual / Couple)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Family Holiday",
													children: "Family Holiday"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Tour Operator / Safari Group",
													children: "Tour Operator / Safari Group"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Corporate Retreat / Conference",
													children: "Corporate Retreat / Conference"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Team Building Programme",
													children: "Team Building Programme"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Dining or Private Event",
													children: "Dining or Private Event"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Other",
													children: "Other Enquiry"
												})
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-3 gap-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
												children: "Estimated Guests"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												name: "Guests",
												type: "number",
												min: "1",
												placeholder: "2",
												className: "w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
												children: "Preferred Date"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												name: "Date",
												type: "date",
												className: "w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
												children: "Number of Nights"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												name: "Nights",
												type: "number",
												min: "1",
												placeholder: "2",
												className: "w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
										children: "Your Requirements & Questions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "Message",
										rows: 4,
										className: "w-full px-4 py-2.5 rounded-lg border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none",
										placeholder: "Tell us about your trip, room preferences, dietary requirements, or meeting needs..."
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "submit",
											variant: "accent",
											size: "xl",
											className: "w-full font-semibold shadow-lg",
											children: ["Send Reservation Enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 ml-2" })]
										})
									}),
									notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-primary font-medium text-center bg-primary/10 p-3 rounded-lg",
										children: notice
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 space-y-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-serif text-white mb-2",
								children: "Direct Contact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/80 text-sm leading-relaxed",
								children: "Our reservations desk is ready to assist you seven days a week with bookings and inquiries."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${phoneHref}`,
										className: "flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-highlight",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-white/70 uppercase",
											children: "Call Reservations"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base font-semibold text-white",
											children: phoneDisplay
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: whatsappUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-center gap-4 p-4 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 transition border border-emerald-400/30",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-5 h-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-emerald-200 uppercase",
											children: "Chat Directly"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base font-semibold text-white",
											children: "Instant WhatsApp Chat"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${email}`,
										className: "flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-highlight",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-5 h-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-white/70 uppercase",
											children: "Email Us"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base font-semibold text-white",
											children: email
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4 p-4 rounded-xl bg-white/10 border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-highlight flex-shrink-0 mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs text-white/70 uppercase",
												children: "Location"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-white",
												children: "Along the A2 Highway at Nanyuki Town Gate, Laikipia County, Kenya (5 mins from CBD)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "https://maps.google.com/?cid=15523719370392106136",
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex items-center gap-1 text-xs text-amber-300 font-semibold mt-2 hover:underline",
												children: ["Open in Google Maps ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3 h-3" })]
											})
										] })]
									})
								]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-[#121c15] text-white/80 border-t border-white/10 pt-16 pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-shell",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/kongoni logo.png",
										alt: "Kongoni Camp Nanyuki",
										className: "h-12 w-auto filter invert brightness-200",
										width: 140,
										height: 55
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/70 max-w-md leading-relaxed",
										children: "Kongoni Camp Nanyuki offers comfortable stays in thatched cottages and luxury suites, conferencing facilities, fireside dining, and an outdoor swimming pool on 10 lush acres in Laikipia, Kenya."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-highlight font-semibold tracking-wider uppercase",
										children: "Stay. Meet. Explore."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-3 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs uppercase font-semibold tracking-widest text-white",
										children: "Direct Connect"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `tel:${phoneHref}`,
											className: "hover:text-white transition",
											children: phoneDisplay
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: whatsappUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "hover:text-white transition",
											children: "WhatsApp Desk"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${email}`,
											className: "hover:text-white transition",
											children: email
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										children: "Nanyuki, Laikipia, Kenya"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-3 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs uppercase font-semibold tracking-widest text-white",
									children: "Social Channels"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.facebook.com/KongoniCampNanyuki",
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-center gap-2 hover:text-white transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "w-4 h-4 text-highlight" }), " Facebook"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://www.instagram.com/kongoninanyuki/",
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-center gap-2 hover:text-white transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-4 h-4 text-highlight" }), " Instagram"]
									})]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Kongoni Camp Nanyuki. All rights reserved."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A comfortable base for exploring Mount Kenya & Laikipia." })]
					})]
				})
			})
		]
	});
}
var SplitComponent = KongoniLanding;
//#endregion
export { SplitComponent as component };
