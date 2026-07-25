# Interactive Sound Map — Setup Guide

## What's in this folder

```
sound-map/
├── index.html          → the page itself
├── style.css            → hotspot glow/blink styling
├── script.js             → hover → play sound + blink logic, calibration tool
├── hotspots.js           → the list of symbol positions + which sound each plays
├── README.md             → this file
└── assets/
    ├── img/canvas.png    → your sound map image
    └── audio/            → all 10 sound files, renamed to plain, readable names
```

## 1. Open it in VS Code

1. Unzip/copy the `sound-map` folder anywhere on your machine.
2. Open the folder in VS Code (`File → Open Folder…`).
3. Install the **Live Server** extension (by Ritwick Dey) if you don't have it — search
   for "Live Server" in the Extensions panel (`Ctrl+Shift+X`).

You need Live Server (or any local web server) because browsers block audio/image
loading from `file://` paths for security reasons — opening `index.html` by double‑clicking
it will not work correctly.

## 2. Run it

Right-click `index.html` in the VS Code file explorer → **"Open with Live Server."**
It'll open in your browser at something like `http://127.0.0.1:5500`.

Move your mouse over the canvas. When your cursor is over a symbol's hover zone, its
sound fades in and the symbol blinks/glows. Move off it and the sound fades out.

## 3. How it works (in plain terms)

- `hotspots.js` is just a list. Each entry says: "there's a symbol at this x%,y%
  position, this big, and it should play this audio file."
- `script.js` reads that list and, for every entry, creates an invisible
  circle/oval `<div>` positioned exactly on top of that spot in the image.
- Hovering that div triggers `mouseenter` → play the sound (with a quick fade-in)
  and add a CSS class that makes a soft glow blink over the symbol.
  Moving off it triggers `mouseleave` → fade the sound out, remove the glow.
- Because everything is positioned in **percentages** (not fixed pixels), the
  whole thing stays aligned even if the browser window is resized.

## 4. ⚠️ Important — the hotspot positions need your fine-tuning

I built `hotspots.js` by analyzing your canvas image:
- The 13 **"birds chirping"** sparkles were found automatically by their exact
  orange color, so those positions are accurate.
- Every other symbol (football diagram, arrows, zig-zags, wifi arcs, spiral,
  wavy lines) is black/gray and overlaps in color with other symbols, so a
  script can't tell them apart reliably — I placed those by eye, as a
  starting point. They'll likely need small nudges, and a few duplicate
  symbol instances I may have miscounted or missed entirely.

This is normal and expected for this kind of task — and it's a 10-second fix per
symbol using the built-in calibration mode below, rather than something to try to
get perfect by description alone.

## 5. Fixing / adding hotspot positions (calibration mode)

1. With the page open in your browser, press **`C`** on your keyboard.
   The cursor becomes a crosshair and a small readout box appears below the image.
2. Click directly on the center of any symbol on the canvas.
3. A red dot marks the click, and a line like this appears in the readout
   box (and in the browser console, `F12` → Console tab):
   ```
   { x: 42.13, y: 71.60 }
   ```
4. Copy that `x`/`y` pair into the matching entry in `hotspots.js`
   (or paste it into a **new** entry if that symbol/instance is missing).
5. Press **`C`** again to turn calibration mode off, save `hotspots.js`,
   and refresh the page (Live Server auto-refreshes on save).

Repeat for any symbol whose glow doesn't line up perfectly, or any symbol
instance that has no hotspot yet.

### Tip: seeing the hover zones while you work
In `style.css`, find this line inside `.hotspot` and uncomment it:
```css
outline: 1px dashed rgba(255,0,0,0.6);
```
This draws a red dashed outline around every hover zone so you can see exactly
how big/where each one is, and shrink/enlarge them by editing `w` and `h` in
`hotspots.js` (also in %).

## 5b. Update — 5 missing hotspots added

You flagged 5 symbol instances that had no hotspot at all yet. These are now
in `hotspots.js`, positioned from the red-circle image you sent:

- **2×** wifi/signal-arc "people talking" symbols (top-left, right side) → `children_talking_whistle.mp3`
- **1×** dark zig-zag "bus" symbol (bottom-left) → `bus_horn.mp3`
- **2×** the puff-cloud "gust" icon (a symbol that wasn't in the original
  legend image at all) → `bus_passing_with_horn.mp3`

These new entries are marked `people-4`, `people-5`, `bus-2`, `gust-1`,
`gust-2` near the bottom of `hotspots.js`. Positions were taken directly
from your annotated image, so they should already line up — use
calibration mode (`C`) only if one looks slightly off.

If you spot any *more* symbols still missing sound, just repeat the same
process: circle them in a screenshot (or use calibration mode directly) and
send the x/y + which sound they should play.

## 6. One thing to flag

Your reference legend (image 2) includes a **"footsteps sound"** symbol, but
your sound-to-symbol list didn't include an audio file for it. I left it out
of `hotspots.js` for now — if you have a footsteps audio clip, drop it into
`assets/audio/`, then add a `footsteps-*` entry to `hotspots.js` the same way
the others are written, with its own `x`/`y` from calibration mode.

## 7. Adjusting behavior

- **Multiple sounds overlapping while you hover fast between symbols**: this
  is already handled — moving to a new hotspot fades out whatever was playing
  before it fades in the new one.
- **Want the sound to loop or play once?** In `script.js`, inside `getAudio()`,
  change `a.loop = true;` to `false` if you want a single play-through instead
  of looping while hovered.
- **Want a bigger/smaller glow?** Edit `w` and `h` (percent of image size) per
  hotspot in `hotspots.js`.
- **Want a different glow color?** Edit the `radial-gradient` colors in
  `style.css` under `.hotspot::before`.
