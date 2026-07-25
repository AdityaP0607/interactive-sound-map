/* =========================================================================
   HOTSPOTS DATA
   =========================================================================
   Every object below is ONE symbol instance drawn on the canvas image.

   x, y   -> position of the symbol's CENTER, given as a PERCENTAGE of the
             image width/height (0-100). Using % instead of px keeps the
             hotspots correctly aligned even if the image is resized/
             responsive.
   w, h   -> width/height of the invisible hover/glow zone, also in %.
             Tweak these to make a hotspot bigger/smaller.
   sound  -> path(s) to the audio file(s) to play (relative to index.html).
             Can be a single string or an array of strings (plays together).
   label  -> just for your reference / tooltip, not required.
   group  -> a name used only to color the glow effect per sound "family"
             (purely cosmetic, feel free to ignore/change).

   ⚠️ IMPORTANT — READ THIS:
   I derived these x/y numbers from the image you sent by (a) automatically
   detecting the orange "birds chirping" sparkles by color, which is exact,
   and (b) visually estimating the rest (arrows, zig-zags, wifi arcs,
   footsteps, spiral, football diagram) since those are all black/gray and
   overlap in color, which a script can't reliably tell apart.
   So: the "birds" group is very accurate. Everything else is a close
   starting guess and WILL need a small nudge. Section 5 of the instructions
   explains how to fix any hotspot in under 10 seconds using the built-in
   calibration mode (press "C").
   ========================================================================= */

const HOTSPOTS = [

  // ---------- BIRDS CHIRPING (orange sparkle) — auto-detected, accurate ----------
  { id: "birds-1",  group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 64.65, y: 6.74,  w: 6, h: 8 },
  { id: "birds-2",  group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 26.4,  y: 10.07, w: 6, h: 8 },
  { id: "birds-3",  group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 6.1,   y: 15.6,  w: 6, h: 8 },
  { id: "birds-4",  group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 71.75, y: 34.75, w: 6, h: 8 },
  { id: "birds-5",  group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 87.7,  y: 35.6,  w: 6, h: 8 },
  { id: "birds-6",  group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 21.15, y: 41.06, w: 6, h: 8 },
  { id: "birds-7",  group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 48.1,  y: 43.62, w: 6, h: 8 },
  { id: "birds-8",  group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 42.1,  y: 51.56, w: 6, h: 8 },
  { id: "birds-9",  group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 46.15, y: 71.63, w: 6, h: 8 },
  { id: "birds-10", group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 4.9,   y: 70.0,  w: 6, h: 8 },
  { id: "birds-11", group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 94.75, y: 71.49, w: 6, h: 8 },
  { id: "birds-12", group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 74.55, y: 89.5,  w: 6, h: 8 },
  { id: "birds-13", group: "birds", label: "Birds chirping", sound: "assets/audio/birds_chirping.mp3", x: 21.15, y: 91.21, w: 6, h: 8 },

  // ---------- FOOTBALL SOUND (dashed circle / x-o play diagram) — estimated ----------
  { id: "football-1", group: "football", label: "Football sound", sound: "assets/audio/football_sound.mp3", x: 58.0,  y: 17.73, w: 8, h: 8 },
  { id: "football-2", group: "football", label: "Football sound", sound: "assets/audio/football_sound.mp3", x: 57.75, y: 56.74, w: 8, h: 8 },
  { id: "football-3", group: "football", label: "Football sound", sound: "assets/audio/football_sound.mp3", x: 59.75, y: 88.3,  w: 8, h: 8 },

  // ---------- WIND SOUND WITH BIKE (grey thin wavy line) — estimated ----------
  { id: "wind-bike-1", group: "wind-bike", label: "Wind sound with bike", sound: "assets/audio/whistle_bike_horn.mp3", x: 92.75, y: 25.18, w: 9, h: 5 },

  // ---------- BIKE SOUND (black sharp zig-zag) — estimated ----------
  { id: "bike-1", group: "bike", label: "Bike sound", sound: "assets/audio/whistle_bike_horn.mp3", x: 91.5, y: 13.83, w: 9, h: 9 },
  { id: "bike-2", group: "bike", label: "Bike sound", sound: "assets/audio/whistle_bike_horn.mp3", x: 91.5, y: 58.87, w: 9, h: 9 },

  // ---------- CAR HONKING SOUND (grey zig-zag) — estimated ----------
  { id: "car-honk-1", group: "car-honk", label: "Car honking sound", sound: "assets/audio/whistle_bike_horn.mp3", x: 91.5, y: 58.87, w: 9, h: 9 },

  // ---------- BUS SOUND (dark grey zig-zag) — estimated ----------
  { id: "bus-1", group: "bus", label: "Bus sound", sound: "assets/audio/bus_horn.mp3", x: 92.75, y: 91.49, w: 9, h: 9 },

  // ---------- WIND SOUND WITH BUS STARTING (teal wavy near bus) — estimated ----------
  { id: "wind-bus-1", group: "wind-bus", label: "Wind sound with bus starting", sound: "assets/audio/bus_passing_with_horn.mp3", x: 92.75, y: 70.92, w: 9, h: 5 },

  // ---------- WIND SOUND (plain teal wavy line) — estimated ----------
  { id: "wind-1", group: "wind", label: "Wind sound", sound: "assets/audio/wind_sound.aac", x: 16.0,  y: 7.45,  w: 9, h: 5 },
  { id: "wind-2", group: "wind", label: "Wind sound", sound: "assets/audio/wind_sound.aac", x: 39.5,  y: 9.22,  w: 9, h: 5 },
  { id: "wind-3", group: "wind", label: "Wind sound", sound: "assets/audio/wind_sound.aac", x: 22.0,  y: 30.14, w: 9, h: 5 },
  { id: "wind-4", group: "wind", label: "Wind sound", sound: "assets/audio/wind_sound.aac", x: 19.0,  y: 61.7,  w: 9, h: 5 },
  { id: "wind-5", group: "wind", label: "Wind sound", sound: "assets/audio/wind_sound.aac", x: 67.75, y: 70.21, w: 9, h: 5 },
  { id: "wind-6", group: "wind", label: "Wind sound", sound: "assets/audio/wind_sound.aac", x: 42.75, y: 85.11, w: 9, h: 5 },
  { id: "wind-7", group: "wind", label: "Wind sound", sound: "assets/audio/wind_sound.aac", x: 34.0,  y: 97.16, w: 9, h: 5 },

  // ---------- SWEEPING SOUND (black diagonal arrows + dots) — estimated ----------
  { id: "sweep-1", group: "sweep", label: "Sweeping sound", sound: "assets/audio/sweeping.mp3", x: 37.5,  y: 26.6,  w: 9, h: 8 },
  { id: "sweep-2", group: "sweep", label: "Sweeping sound", sound: "assets/audio/sweeping.mp3", x: 12.75, y: 47.87, w: 9, h: 8 },
  { id: "sweep-3", group: "sweep", label: "Sweeping sound", sound: "assets/audio/sweeping.mp3", x: 71.0,  y: 56.74, w: 9, h: 8 },

  // ---------- WIND SOUND WITH SWEEPING (brown wavy line) — estimated ----------
  { id: "wind-sweep-1", group: "wind-sweep", label: "Wind sound with sweeping", sound: "assets/audio/wind_with_sweeping.mp3", x: 52.25, y: 36.88, w: 9, h: 5 },

  // ---------- PEOPLE TALKING (black wifi/signal arcs) — estimated ----------
  { id: "people-1", group: "people", label: "People talking sound", sound: ["assets/audio/teacher_instruction.mp3", "assets/audio/children_talking_whistle.mp3"], x: 53.0,  y: 12.77, w: 7, h: 8 },
  { id: "people-2", group: "people", label: "People talking sound", sound: ["assets/audio/teacher_instruction.mp3", "assets/audio/children_talking_whistle.mp3"], x: 57.0,  y: 52.84, w: 7, h: 8 },
  { id: "people-3", group: "people", label: "People talking sound", sound: ["assets/audio/teacher_instruction.mp3", "assets/audio/children_talking_whistle.mp3"], x: 63.25, y: 83.69, w: 7, h: 8 },

  // ---------- WHISTLE SOUND (black spiral/swirl) — estimated ----------
  { id: "whistle-1", group: "whistle", label: "Whistle sound", sound: "assets/audio/children_talking_whistle.mp3", x: 7.5, y: 88.3, w: 8, h: 8 },

  // =========================================================================
  // ADDED IN ROUND 2 — symbols that had no hotspot at all before.
  // Positions taken from the red-circle reference image you sent, so these
  // are already accurate; nudge with calibration mode ("C") only if needed.
  // =========================================================================

  // ---------- PEOPLE TALKING (wifi/signal arcs) — 2 instances that were missing ----------
  { id: "people-4", group: "people", label: "People talking sound", sound: "assets/audio/children_talking_whistle.mp3", x: 5.91,  y: 31.82, w: 7, h: 8 },
  { id: "people-5", group: "people", label: "People talking sound", sound: "assets/audio/children_talking_whistle.mp3", x: 93.5,  y: 35.5,  w: 7, h: 8 },

  // ---------- BUS SOUND (dark zig-zag) — the bottom-left instance that was missing ----------
  { id: "bus-2", group: "bus", label: "Bus sound", sound: "assets/audio/bus_horn.mp3", x: 15.68, y: 79.01, w: 9, h: 9 },

  // ---------- WIND / GUST PUFF-CLOUD ICON — a symbol shape not in the original legend ----------
  { id: "gust-1", group: "gust", label: "Wind sound with bus starting", sound: "assets/audio/bus_passing_with_horn.mp3", x: 80.8, y: 40.0, w: 8, h: 8 },
  { id: "gust-2", group: "gust", label: "Wind sound with bus starting", sound: "assets/audio/bus_passing_with_horn.mp3", x: 87.0, y: 67.9, w: 8, h: 8 },

];
