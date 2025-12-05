# Audio Asset Instructions

## Whoosh Sound Effect

You need to add a whoosh sound effect to complete the portfolio experience.

### Option 1: Download from Freesound.org
1. Visit https://freesound.org/
2. Search for "whoosh" or "swoosh" or "transition"
3. Download a short (0.3-0.5 second) sound effect
4. Convert to MP3 if needed
5. Rename to `whoosh.mp3`
6. Place in this `assets/` folder

### Option 2: Use Online Generators
- https://www.zapsplat.com/ (free sound effects)
- https://mixkit.co/free-sound-effects/ (royalty-free)
- https://freesound.org/ (community sounds)

### Option 3: Create Your Own
Use audio software like Audacity (free) to create a custom whoosh sound:
1. Generate white noise
2. Apply a fade in/out
3. Add reverb for depth
4. Export as MP3

### Specifications
- **Format**: MP3
- **Duration**: 0.3 - 0.5 seconds
- **Size**: Keep under 50KB for fast loading
- **Filename**: whoosh.mp3

### Fallback
If you don't want sound effects, simply remove or comment out the audio element in `index.html` and the sound-related JavaScript code will fail silently without breaking the site.

## Noise Texture (Optional)

The grain texture is currently generated via SVG in the CSS. If you prefer a PNG texture:

1. Create or download a subtle noise texture
2. Save as `noise.png` (tileable, 200x200px recommended)
3. Update CSS `.grain-overlay` to use `background-image: url('assets/noise.png')`

---

**Note**: The portfolio will function perfectly without the audio file; it just won't play the whoosh sound during navigation transitions.
