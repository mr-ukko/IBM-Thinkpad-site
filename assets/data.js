// IBM-era ThinkPads (1992 to 2005). All data for this site lives here.
// To add a model: add an entry below, then run  ./new-model.sh <id>
//
// Model fields
//   id, name, year, series, summary
//   specs   : { "Label": "Value", ... }          free-form rows
//   gpu     : [ { name, type, optional, vram, note } ]
//               type     "integrated" = built into the CPU/chipset, shares system RAM
//                        "discrete"   = separate GPU chip with its own video memory (soldered, can't be added later)
//               optional true  = only some configurations have it (chosen when buying)
//   storage : [ { slot, interface, note } ]     every place a drive can go (2.5" bay, PC Card, mSATA...)
//   ports   : [ { name, count, note } ]         count and note are optional
//   notes   : [ { text, source, unverified } ]  extra info; source (URL) and unverified (true) are optional
//   docs    : [ { label, url } ]                spec sheets and other links (external URL or a file in this repo)
//   pros, cons : [ "text", ... ]
//   verified: true   (add once you have checked the data; unverified pages show a small notice)
(window.THINKPAD = window.THINKPAD || {}).ibm = {
  site: {
    label: "IBM",
    name: "IBM ThinkPads",
    tagline: "The original ThinkPads from the IBM era (1992 to 2005): specs, strengths and quirks.",
    host: "https://ibm.thinkpad.fi/",
    main: "https://thinkpad.fi/",
    other: { name: "Lenovo ThinkPads", url: "https://lenovo.thinkpad.fi/" },
  },
  models: [
    {
      id: "701c",
      name: "ThinkPad 701C",
      year: 1995,
      series: "7xx",
      summary: "The \"Butterfly\" ThinkPad with its famous expanding keyboard, an icon of the IBM era.",
      specs: {
        "Display": "10.4\" 640×480 TFT",
        "CPU": "Intel 486DX4 (75 MHz class)",
        "Memory": "Small by today's standards, expandable with proprietary modules",
        "Storage": "2.5\" IDE hard disk",
        "Keyboard": "Expanding \"butterfly\" keyboard (full-size keys on a small body)",
        "Weight": "~2 kg",
      },
      gpu: [
        { name: "Onboard VGA graphics chip", type: "discrete", note: "Separate soldered graphics chip. Details vary; please verify." },
      ],
      storage: [
        { slot: "2.5\" drive bay", interface: "IDE (PATA)", note: "Not covered by the ThinkWiki SSD guide, which starts at the X60/T60 era. Details not yet checked." },
      ],
      ports: [
        { name: "Serial port" },
        { name: "Parallel port" },
        { name: "External VGA" },
        { name: "PC Card (PCMCIA) slot" },
        { name: "Infrared (IrDA)" },
      ],
      pros: ["Iconic, clever mechanical design", "Full-size keyboard in a small body", "Collector favourite"],
      cons: ["Very slow by modern standards", "Rare and fragile mechanism", "Hard to find parts"],
    },
    {
      id: "t40",
      name: "ThinkPad T40",
      year: 2002,
      series: "T",
      summary: "A solid Pentium M era business laptop, known for its excellent keyboard and build quality.",
      specs: {
        "Display": "14.1\" 1024×768 XGA",
        "CPU": "Intel Pentium M 1.3–1.6 GHz (Banias)",
        "Memory": "DDR SO-DIMM, up to 2 GB",
        "Storage": "2.5\" IDE",
        "Keyboard": "Classic 7-row",
        "Weight": "~2.2 kg",
      },
      gpu: [
        { name: "ATI Mobility Radeon 7500", type: "discrete", vram: "16 MB", note: "Separate soldered chip with its own video memory." },
      ],
      storage: [
        { slot: "2.5\" drive bay", interface: "IDE (PATA)", note: "Not covered by the ThinkWiki SSD guide, which starts at the X60/T60 era. Details not yet checked." },
        { slot: "PC Card slot", interface: "PCMCIA / CardBus", note: "Can hold storage cards." },
      ],
      ports: [
        { name: "USB 2.0", count: 2 },
        { name: "VGA" },
        { name: "S-Video out" },
        { name: "Ethernet (RJ-45)" },
        { name: "Modem (RJ-11)" },
        { name: "PC Card slot", note: "Type II ×2 or Type III ×1" },
        { name: "Infrared (IrDA)" },
        { name: "Headphone / microphone jacks" },
        { name: "Docking connector" },
      ],
      pros: ["Excellent keyboard", "Rugged magnesium-reinforced build", "Efficient Pentium M"],
      cons: ["Low-resolution screen", "Old ports and drives", "Aging batteries"],
    },
    {
      id: "x31",
      name: "ThinkPad X31",
      year: 2003,
      series: "X",
      summary: "A light, compact 12-inch ThinkPad from the IBM years, popular with early mobile professionals.",
      specs: {
        "Display": "12.1\" 1024×768 XGA",
        "CPU": "Intel Pentium M",
        "Memory": "DDR SO-DIMM, upgradeable",
        "Storage": "2.5\" IDE",
        "Keyboard": "Classic ThinkPad keyboard",
        "Weight": "~1.4 kg",
      },
      gpu: [
        { name: "Intel Extreme Graphics 2", type: "integrated", note: "Part of the chipset, shares system memory. No discrete GPU option." },
      ],
      storage: [
        { slot: "2.5\" drive bay", interface: "IDE (PATA)", note: "Not covered by the ThinkWiki SSD guide, which starts at the X60/T60 era. Details not yet checked." },
      ],
      ports: [
        { name: "USB 2.0", count: 2 },
        { name: "VGA" },
        { name: "Ethernet (RJ-45)" },
        { name: "Modem (RJ-11)" },
        { name: "PC Card slot", count: 1 },
        { name: "Headphone / microphone jacks" },
        { name: "Docking connector", note: "X3 UltraBase" },
      ],
      pros: ["Very portable for its time", "Great keyboard", "Tough build"],
      cons: ["No built-in optical drive (needs external)", "Low performance by modern standards"],
    },
    {
      id: "t42",
      name: "ThinkPad T42",
      year: 2004,
      series: "T",
      summary: "A late IBM-era T-series with Pentium M Dothan processors and optional high-resolution display.",
      specs: {
        "Display": "14.1\" XGA or SXGA+ (1400×1050)",
        "CPU": "Intel Pentium M 1.7–2.0 GHz (Dothan)",
        "Memory": "DDR SO-DIMM, up to 2 GB",
        "Storage": "2.5\" IDE",
        "Keyboard": "Classic 7-row",
        "Weight": "~2.2 kg",
      },
      gpu: [
        { name: "ATI Mobility Radeon 7500", type: "discrete", vram: "16–32 MB", note: "Separate soldered chip with its own video memory." },
      ],
      storage: [
        { slot: "2.5\" drive bay", interface: "IDE (PATA)", note: "Not covered by the ThinkWiki SSD guide, which starts at the X60/T60 era. Details not yet checked." },
        { slot: "PC Card slot", interface: "PCMCIA / CardBus", note: "Can hold storage cards." },
      ],
      ports: [
        { name: "USB 2.0", count: 2 },
        { name: "VGA" },
        { name: "S-Video out" },
        { name: "Ethernet (RJ-45)" },
        { name: "Modem (RJ-11)" },
        { name: "PC Card slot", note: "Type II ×2 or Type III ×1" },
        { name: "Headphone / microphone jacks" },
        { name: "Docking connector" },
      ],
      pros: ["Optional SXGA+ display", "Great keyboard", "Very durable"],
      cons: ["Single-core CPU", "No modern ports", "Hard to find fresh batteries"],
    },
  ],
};
