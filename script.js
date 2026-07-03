/**
 * F1 2026 Dashboard – Wallpaper Engine Edition
 * Card-based schedule, clock with next-session countdown, color picker, media & audio
 */

// ==========================================================================
// 1. F1 SCHEDULE DATA
// ==========================================================================

const f1Schedule2026 = [
  {
    round: 9, country: "Great Britain", track: "Silverstone Circuit", format: "sprint",
    sessions: {
      "Practice 1": "2026-07-03T11:30:00Z",
      "Sprint Qualifying": "2026-07-03T15:30:00Z",
      "Sprint": "2026-07-04T11:00:00Z",
      "Qualifying": "2026-07-04T15:00:00Z",
      "Race": "2026-07-05T14:00:00Z"
    }
  },
  {
    round: 10, country: "Belgium", track: "Circuit de Spa-Francorchamps", format: "standard",
    sessions: {
      "Practice 1": "2026-07-17T11:30:00Z",
      "Practice 2": "2026-07-17T15:00:00Z",
      "Practice 3": "2026-07-18T10:30:00Z",
      "Qualifying": "2026-07-18T14:00:00Z",
      "Race": "2026-07-19T13:00:00Z"
    }
  },
  {
    round: 11, country: "Hungary", track: "Hungaroring", format: "standard",
    sessions: {
      "Practice 1": "2026-07-24T11:30:00Z",
      "Practice 2": "2026-07-24T15:00:00Z",
      "Practice 3": "2026-07-25T10:30:00Z",
      "Qualifying": "2026-07-25T14:00:00Z",
      "Race": "2026-07-26T13:00:00Z"
    }
  },
  {
    round: 12, country: "Netherlands", track: "Circuit Zandvoort", format: "sprint",
    sessions: {
      "Practice 1": "2026-08-21T10:30:00Z",
      "Sprint Qualifying": "2026-08-21T14:30:00Z",
      "Sprint": "2026-08-22T10:00:00Z",
      "Qualifying": "2026-08-22T14:00:00Z",
      "Race": "2026-08-23T13:00:00Z"
    }
  },
  {
    round: 13, country: "Italy", track: "Autodromo Nazionale Monza", format: "standard",
    sessions: {
      "Practice 1": "2026-09-04T10:30:00Z",
      "Practice 2": "2026-09-04T14:00:00Z",
      "Practice 3": "2026-09-05T10:30:00Z",
      "Qualifying": "2026-09-05T14:00:00Z",
      "Race": "2026-09-06T13:00:00Z"
    }
  },
  {
    round: 14, country: "Spain", track: "Madrid", format: "standard",
    sessions: {
      "Practice 1": "2026-09-11T11:30:00Z",
      "Practice 2": "2026-09-11T15:00:00Z",
      "Practice 3": "2026-09-12T10:30:00Z",
      "Qualifying": "2026-09-12T14:00:00Z",
      "Race": "2026-09-13T13:00:00Z"
    }
  },
  {
    round: 15, country: "Azerbaijan", track: "Baku City Circuit", format: "standard",
    sessions: {
      "Practice 1": "2026-09-24T08:30:00Z",
      "Practice 2": "2026-09-24T12:00:00Z",
      "Practice 3": "2026-09-25T08:30:00Z",
      "Qualifying": "2026-09-25T12:00:00Z",
      "Race": "2026-09-26T11:00:00Z"
    }
  },
  {
    round: 16, country: "Singapore", track: "Marina Bay Street Circuit", format: "sprint",
    sessions: {
      "Practice 1": "2026-10-09T08:30:00Z",
      "Sprint Qualifying": "2026-10-09T12:30:00Z",
      "Sprint": "2026-10-10T09:00:00Z",
      "Qualifying": "2026-10-10T13:00:00Z",
      "Race": "2026-10-11T12:00:00Z"
    }
  },
  {
    round: 17, country: "United States", track: "Circuit of The Americas", format: "standard",
    sessions: {
      "Practice 1": "2026-10-23T17:30:00Z",
      "Practice 2": "2026-10-23T21:00:00Z",
      "Practice 3": "2026-10-24T17:30:00Z",
      "Qualifying": "2026-10-24T21:00:00Z",
      "Race": "2026-10-25T20:00:00Z"
    }
  },
  {
    round: 18, country: "Mexico", track: "Autódromo Hermanos Rodríguez", format: "standard",
    sessions: {
      "Practice 1": "2026-10-30T18:30:00Z",
      "Practice 2": "2026-10-30T22:00:00Z",
      "Practice 3": "2026-10-31T17:30:00Z",
      "Qualifying": "2026-10-31T21:00:00Z",
      "Race": "2026-11-01T20:00:00Z"
    }
  },
  {
    round: 19, country: "Brazil", track: "Autódromo José Carlos Pace", format: "standard",
    sessions: {
      "Practice 1": "2026-11-06T14:30:00Z",
      "Practice 2": "2026-11-06T18:00:00Z",
      "Practice 3": "2026-11-07T14:30:00Z",
      "Qualifying": "2026-11-07T18:00:00Z",
      "Race": "2026-11-08T17:00:00Z"
    }
  },
  {
    round: 20, country: "United States", track: "Las Vegas Strip Circuit", format: "standard",
    sessions: {
      "Practice 1": "2026-11-20T02:30:00Z",
      "Practice 2": "2026-11-20T06:00:00Z",
      "Practice 3": "2026-11-21T02:30:00Z",
      "Qualifying": "2026-11-21T06:00:00Z",
      "Race": "2026-11-22T06:00:00Z"
    }
  },
  {
    round: 21, country: "Qatar", track: "Lusail International Circuit", format: "standard",
    sessions: {
      "Practice 1": "2026-11-27T13:30:00Z",
      "Practice 2": "2026-11-27T17:00:00Z",
      "Practice 3": "2026-11-28T13:30:00Z",
      "Qualifying": "2026-11-28T17:00:00Z",
      "Race": "2026-11-29T16:00:00Z"
    }
  },
  {
    round: 22, country: "Abu Dhabi", track: "Yas Marina Circuit", format: "standard",
    sessions: {
      "Practice 1": "2026-12-04T09:30:00Z",
      "Practice 2": "2026-12-04T13:00:00Z",
      "Practice 3": "2026-12-05T10:30:00Z",
      "Qualifying": "2026-12-05T14:00:00Z",
      "Race": "2026-12-06T13:00:00Z"
    }
  }
];

const countryFlags = {
  "Great Britain": "gb", "Belgium": "be", "Hungary": "hu",
  "Netherlands": "nl", "Italy": "it", "Spain": "es",
  "Azerbaijan": "az", "Singapore": "sg", "United States": "us",
  "Mexico": "mx", "Brazil": "br", "Qatar": "qa", "Abu Dhabi": "ae"
};

// ==========================================================================
// 2. CLOCK
// ==========================================================================

const clockEl = document.getElementById('digital-clock');
const dateEl = document.getElementById('date-display');
const nextNameEl = document.getElementById('next-session-name');
const nextCountdownEl = document.getElementById('next-session-countdown');
const nextFlagEl = document.getElementById('next-session-flag');
const nextCircuitEl = document.getElementById('next-session-circuit');
const nextTimeEl = document.getElementById('next-session-time');

function tickClock() {
  const now = new Date();
  clockEl.textContent =
    String(now.getHours()).padStart(2,'0') + ':' +
    String(now.getMinutes()).padStart(2,'0') + ':' +
    String(now.getSeconds()).padStart(2,'0');
  dateEl.textContent = now.toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}

// ==========================================================================
// 3. HELPERS
// ==========================================================================

function fmtLocal(utc) {
  const d = new Date(utc);
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let h = d.getHours();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${h}:${String(d.getMinutes()).padStart(2,'0')} ${ampm}`;
}

function fmtLocalShort(utc) {
  const d = new Date(utc);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let h = d.getHours();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${months[d.getMonth()]} ${d.getDate()} · ${h}:${String(d.getMinutes()).padStart(2,'0')} ${ampm}`;
}

function sessionDurationMs(name) {
  const n = name.toLowerCase();
  if (n.includes('race')) return 2.5 * 3600000;
  if (n.includes('sprint') && !n.includes('qualifying')) return 3600000;
  return 1.5 * 3600000;
}

function fmtCountdown(ms) {
  const totalSec = Math.floor(ms / 1000);
  const sec = totalSec % 60;
  const min = Math.floor(totalSec / 60) % 60;
  const hr  = Math.floor(totalSec / 3600) % 24;
  const day = Math.floor(totalSec / 86400);
  if (day > 0) return `${day}d ${String(hr).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  return `${String(hr).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

// ==========================================================================
// 4. FLATTEN SCHEDULE INTO A CHRONOLOGICAL SESSION LIST
// ==========================================================================
// Instead of rendering full race weekends, every session across every GP is
// flattened into one sorted timeline. From that timeline we derive exactly
// what's live right now and exactly one "next up" session.

const allSessions = f1Schedule2026
  .flatMap(gp => Object.entries(gp.sessions).map(([name, utc]) => ({
    gp,
    name,
    utc,
    time: new Date(utc).getTime(),
    country: gp.country,
    track: gp.track,
    flag: countryFlags[gp.country] || 'un'
  })))
  .sort((a, b) => a.time - b.time);

function flagUrl(code) {
  return `https://flagcdn.com/${code || 'un'}.svg`;
}

// ==========================================================================
// 5. LIVE & UPCOMING PANEL + CENTER "NEXT EVENT" CARD
// ==========================================================================

const liveBlockEl = document.getElementById('live-block');
const upcomingBlockEl = document.getElementById('upcoming-block');
const seasonCompleteBlockEl = document.getElementById('season-complete-block');

const liveFlagEl = document.getElementById('live-flag');
const liveCountryEl = document.getElementById('live-country');
const liveTrackEl = document.getElementById('live-track');
const liveSessionNameEl = document.getElementById('live-session-name');
const liveLocalTimeEl = document.getElementById('live-local-time');
const liveProgressFillEl = document.getElementById('live-progress-fill');

const upFlagEl = document.getElementById('up-flag');
const upCountryEl = document.getElementById('up-country');
const upTrackEl = document.getElementById('up-track');
const upSessionNameEl = document.getElementById('up-session-name');
const upLocalTimeEl = document.getElementById('up-local-time');
const upDEl = document.getElementById('up-d');
const upHEl = document.getElementById('up-h');
const upMEl = document.getElementById('up-m');
const upSEl = document.getElementById('up-s');

function tickCountdowns() {
  const now = Date.now();

  // A session is "live" while now falls within [start, start + duration).
  const liveSession = allSessions.find(s => now >= s.time && now < s.time + sessionDurationMs(s.name));
  // The very next session on the calendar that hasn't started yet.
  const upcomingSession = allSessions.find(s => s.time > now);

  // --- LIVE NOW block ---
  if (liveSession) {
    liveBlockEl.classList.remove('block-hidden');
    liveFlagEl.src = flagUrl(liveSession.flag);
    liveFlagEl.alt = liveSession.country;
    liveCountryEl.textContent = `${liveSession.country} Grand Prix`;
    liveTrackEl.textContent = liveSession.track;
    liveSessionNameEl.textContent = liveSession.name;
    liveLocalTimeEl.textContent = `Started ${fmtLocalShort(liveSession.utc)}`;
    const pct = Math.min(100, ((now - liveSession.time) / sessionDurationMs(liveSession.name)) * 100);
    liveProgressFillEl.style.width = `${pct}%`;
  } else {
    liveBlockEl.classList.add('block-hidden');
  }

  // --- UPCOMING block (exactly one session) ---
  if (upcomingSession) {
    upcomingBlockEl.classList.remove('block-hidden');
    seasonCompleteBlockEl.classList.add('block-hidden');

    upFlagEl.src = flagUrl(upcomingSession.flag);
    upFlagEl.alt = upcomingSession.country;
    upCountryEl.textContent = `${upcomingSession.country} Grand Prix`;
    upTrackEl.textContent = upcomingSession.track;
    upSessionNameEl.textContent = upcomingSession.name;
    upLocalTimeEl.textContent = fmtLocal(upcomingSession.utc);

    const diff = upcomingSession.time - now;
    const totalSec = Math.max(0, Math.floor(diff / 1000));
    upDEl.textContent = String(Math.floor(totalSec / 86400)).padStart(2, '0');
    upHEl.textContent = String(Math.floor(totalSec / 3600) % 24).padStart(2, '0');
    upMEl.textContent = String(Math.floor(totalSec / 60) % 60).padStart(2, '0');
    upSEl.textContent = String(totalSec % 60).padStart(2, '0');
  } else if (!liveSession) {
    // Nothing live and nothing upcoming -> season complete.
    upcomingBlockEl.classList.add('block-hidden');
    seasonCompleteBlockEl.classList.remove('block-hidden');
  } else {
    upcomingBlockEl.classList.add('block-hidden');
  }

  // --- Center clock's informative "next event" card ---
  if (liveSession) {
    nextNameEl.textContent = liveSession.name;
    nextCircuitEl.textContent = liveSession.track;
    nextFlagEl.src = flagUrl(liveSession.flag);
    nextFlagEl.alt = liveSession.country;
    nextTimeEl.textContent = fmtLocalShort(liveSession.utc);
    nextCountdownEl.innerHTML = '<span class="s-live-badge">● LIVE</span>';
  } else if (upcomingSession) {
    nextNameEl.textContent = upcomingSession.name;
    nextCircuitEl.textContent = upcomingSession.track;
    nextFlagEl.src = flagUrl(upcomingSession.flag);
    nextFlagEl.alt = upcomingSession.country;
    nextTimeEl.textContent = fmtLocalShort(upcomingSession.utc);
    nextCountdownEl.textContent = fmtCountdown(upcomingSession.time - now);
  } else {
    nextNameEl.textContent = 'Season Complete';
    nextCircuitEl.textContent = 'See you in 2027';
    nextCountdownEl.textContent = '—';
    nextTimeEl.textContent = '';
    nextFlagEl.removeAttribute('src');
  }
}

// ==========================================================================
// 6. COLOR SWATCHES (7 curated theme colors)
// ==========================================================================

const themeColors = [
  { name: 'Purple',   hex: '#AF69EF' },
  { name: 'Ferrari',  hex: '#FF2D2D' },
  { name: 'Cyan',     hex: '#22D3EE' },
  { name: 'Emerald',  hex: '#34D399' },
  { name: 'Amber',    hex: '#FBBF24' },
  { name: 'Pink',     hex: '#F472B6' },
  { name: 'Blue',     hex: '#5B8DEF' }
];

function extractRgb(c) {
  if (c.startsWith('rgb')) {
    const m = c.match(/\d+/g);
    return m ? m.slice(0, 3).map(Number) : [175, 105, 239];
  }
  if (c.startsWith('#')) {
    let h = c.slice(1);
    if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
    return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
  }
  return [175, 105, 239];
}

let currentPrimaryColor = '#AF69EF';
let currentMediaAccent = null; // 'spotify' | 'youtube' | 'discord' | null

function applyColor(hex) {
  currentPrimaryColor = hex;
  document.documentElement.style.setProperty('--primary-color', hex);
  const rgb = extractRgb(hex);
  document.documentElement.style.setProperty('--primary-color-rgb', rgb.join(', '));

  // Update active swatch highlight
  document.querySelectorAll('.swatch').forEach(sw => {
    sw.classList.toggle('active', sw.dataset.hex.toLowerCase() === hex.toLowerCase());
  });

  // Re-sync visualizer accent in case it's currently on the default fallback.
  refreshVisualizerAccent();
}

function refreshVisualizerAccent() {
  const col = currentMediaAccent ? mediaAccentColors[currentMediaAccent] : currentPrimaryColor;
  document.documentElement.style.setProperty('--visualizer-color', col);
}

function buildSwatches() {
  const wrap = document.getElementById('color-swatches');
  themeColors.forEach(c => {
    const sw = document.createElement('button');
    sw.className = 'swatch';
    sw.style.background = c.hex;
    sw.dataset.hex = c.hex;
    sw.title = c.name;
    sw.addEventListener('click', () => applyColor(c.hex));
    wrap.appendChild(sw);
  });
}

// ==========================================================================
// 7. MEDIA PLAYER (Wallpaper Engine)
// ==========================================================================

// The Web media integration API only exposes text fields (title, artist,
// subTitle, albumTitle, albumArtist, genres) - there's no explicit "source
// app" field. We detect the active app by scanning those strings for
// recognizable keywords, then color the visualizer accordingly.
const mediaAccentColors = {
  spotify: '#1DB954',
  youtube: '#FF0000',
  discord: '#5865F2'
};

function detectMediaSource(event) {
  const haystack = [
    event.title, event.artist, event.subTitle,
    event.albumTitle, event.albumArtist, event.genres
  ].filter(Boolean).join(' ').toLowerCase();

  if (haystack.includes('discord')) return 'discord';
  if (haystack.includes('spotify')) return 'spotify';
  if (haystack.includes('youtube')) return 'youtube';
  return null;
}

function applyVisualizerAccent(source) {
  currentMediaAccent = source;
  refreshVisualizerAccent();
}

let mediaTL = { pos: 0, dur: 0, paused: true, ts: Date.now() };

function fmtTime(s) {
  if (isNaN(s) || s < 0) return '0:00';
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2,'0')}`;
}

function paintTimeline(pos, dur) {
  const cur = document.getElementById('media-time-current');
  const tot = document.getElementById('media-time-total');
  const fill = document.getElementById('media-timeline-fill');
  if (cur) cur.textContent = fmtTime(pos);
  if (tot) tot.textContent = fmtTime(dur);
  if (fill) fill.style.width = `${dur > 0 ? (pos / dur) * 100 : 0}%`;
}

function setupMedia() {
  if (typeof window.wallpaperRegisterMediaPropertiesListener === 'function') {
    window.wallpaperRegisterMediaPropertiesListener(function(event) {
      const ph = document.getElementById('media-placeholder-id');
      const ct = document.getElementById('media-content-id');
      const pn = document.getElementById('media-panel');
      if (event.title) {
        pn.classList.remove('waiting-media');
        ph.classList.add('hidden');
        ct.classList.remove('hidden');
        document.getElementById('media-title').textContent = event.title || 'Unknown Track';
        document.getElementById('media-artist').textContent = event.artist || 'Unknown Artist';
        applyVisualizerAccent(detectMediaSource(event));
      } else {
        pn.classList.add('waiting-media');
        ph.classList.remove('hidden');
        ct.classList.add('hidden');
        mediaTL = { pos: 0, dur: 0, paused: true, ts: Date.now() };
        paintTimeline(0, 0);
        applyVisualizerAccent(null);
      }
    });
  }

  if (typeof window.wallpaperRegisterMediaThumbnailListener === 'function') {
    window.wallpaperRegisterMediaThumbnailListener(function(event) {
      const art = document.getElementById('media-album-art');
      if (art) art.src = event.thumbnail || '';
    });
  }

  if (typeof window.wallpaperRegisterMediaTimelineListener === 'function') {
    window.wallpaperRegisterMediaTimelineListener(function(event) {
      mediaTL = { pos: event.position, dur: event.duration, paused: event.paused, ts: Date.now() };
      paintTimeline(event.position, event.duration);
    });
  }
}

setInterval(function() {
  if (mediaTL.dur > 0 && !mediaTL.paused) {
    const elapsed = (Date.now() - mediaTL.ts) / 1000;
    paintTimeline(Math.min(mediaTL.pos + elapsed, mediaTL.dur), mediaTL.dur);
  }
}, 250);

// ==========================================================================
// 8. AUDIO VISUALIZER (Wallpaper Engine)
// ==========================================================================

const cvs = document.getElementById('audio-visualizer-canvas');
const cx = cvs.getContext('2d');
const VIS_BARS = 96;
let audioArray = new Array(128).fill(0);
let smoothBars = new Array(VIS_BARS).fill(0);
let idlePhase = 0;

function resizeCanvas() {
  cvs.width = window.innerWidth;
  cvs.height = 260;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

if (typeof window.wallpaperRegisterAudioListener === 'function') {
  window.wallpaperRegisterAudioListener(function(audioData) {
    audioArray = audioData;
  });
}

// --- Smooth (.75s) color transition whenever the accent color changes ---
const VIS_COLOR_TRANSITION_MS = 750;
let visColorFrom = [175, 105, 239];
let visColorTo = [175, 105, 239];
let visColorStart = 0;
let lastVisHex = null;

function lerp(a, b, t) { return a + (b - a) * t; }

function getTransitionedColor(now) {
  const t = Math.min(1, (now - visColorStart) / VIS_COLOR_TRANSITION_MS);
  const eased = t < 1 ? 1 - Math.pow(1 - t, 3) : 1; // ease-out cubic
  const r = Math.round(lerp(visColorFrom[0], visColorTo[0], eased));
  const g = Math.round(lerp(visColorFrom[1], visColorTo[1], eased));
  const b = Math.round(lerp(visColorFrom[2], visColorTo[2], eased));
  return [r, g, b];
}

function drawVisualizer() {
  requestAnimationFrame(drawVisualizer);

  const now = performance.now();

  // Detect accent color changes and kick off a fresh .75s interpolation.
  const hex = getComputedStyle(document.documentElement).getPropertyValue('--visualizer-color').trim() || '#AF69EF';
  if (hex !== lastVisHex) {
    visColorFrom = getTransitionedColor(now); // continue smoothly from wherever we currently are
    visColorTo = extractRgb(hex);
    visColorStart = now;
    lastVisHex = hex;
  }
  const [r, g, b] = getTransitionedColor(now);
  const col = `rgb(${r}, ${g}, ${b})`;

  cx.clearRect(0, 0, cvs.width, cvs.height);

  const barWidth = 5, spacing = 3, bars = VIS_BARS, decay = 0.8;
  const hasAudio = audioArray.some(v => v > 0.01);
  idlePhase += 0.045;

  for (let i = 0; i < bars; i++) {
    let val;
    if (hasAudio) {
      val = ((audioArray[i % 64] || 0) + (audioArray[(i % 64) + 64] || 0)) / 2;
      val = val * (1 + (i / bars) * 3.2) * 190;
    } else {
      // Gentle idle shimmer so the visualizer still feels alive when silent.
      val = (Math.sin(idlePhase + i * 0.35) * 0.5 + 0.5) * 10;
    }
    val = Math.min(val, cvs.height - 10);
    smoothBars[i] = val > smoothBars[i] ? val : smoothBars[i] * decay + val * (1 - decay);
  }

  const mid = cvs.width / 2;
  cx.shadowBlur = 22;
  cx.shadowColor = col;

  const grad = cx.createLinearGradient(0, cvs.height, 0, 0);
  grad.addColorStop(0, 'rgba(0,0,0,0)');
  grad.addColorStop(0.35, col);
  grad.addColorStop(0.75, col);
  grad.addColorStop(1, 'rgba(255,255,255,0.4)');
  cx.fillStyle = grad;

  for (let i = 0; i < bars; i++) {
    const h = Math.max(smoothBars[i], 2);
    const x1 = mid + i * (barWidth + spacing);
    const x2 = mid - i * (barWidth + spacing) - barWidth;
    cx.beginPath();
    cx.roundRect(x1, cvs.height - h, barWidth, h, 3);
    cx.fill();
    cx.beginPath();
    cx.roundRect(x2, cvs.height - h, barWidth, h, 3);
    cx.fill();
  }

  // Soft mirrored reflection beneath the baseline for extra depth.
  cx.save();
  cx.globalAlpha = 0.18;
  cx.shadowBlur = 0;
  cx.scale(1, -0.28);
  cx.translate(0, -2 * cvs.height - 4);
  for (let i = 0; i < bars; i++) {
    const h = Math.max(smoothBars[i], 2);
    const x1 = mid + i * (barWidth + spacing);
    const x2 = mid - i * (barWidth + spacing) - barWidth;
    cx.beginPath();
    cx.roundRect(x1, cvs.height - h, barWidth, h, 3);
    cx.fill();
    cx.beginPath();
    cx.roundRect(x2, cvs.height - h, barWidth, h, 3);
    cx.fill();
  }
  cx.restore();
}

// ==========================================================================
// 9. WALLPAPER ENGINE PROPERTIES
// ==========================================================================

window.wallpaperPropertyListener = {
  applyUserProperties: function(properties) {
    if (properties.primarycolor) {
      const parts = properties.primarycolor.value.split(' ');
      let col;
      if (parts.length >= 3) {
        col = `rgb(${Math.round(parts[0]*255)}, ${Math.round(parts[1]*255)}, ${Math.round(parts[2]*255)})`;
      } else {
        col = properties.primarycolor.value;
      }
      applyColor(col);
    }
    if (properties.showvisualizer) {
      cvs.style.display = properties.showvisualizer.value ? 'block' : 'none';
    }
    if (properties.visualizeropacity) {
      cvs.style.opacity = properties.visualizeropacity.value / 100;
    }
  }
};

// ==========================================================================
// 9b. MOTIF SELECTOR (background texture toggle)
// ==========================================================================

function setupMotifSelector() {
  const buttons = document.querySelectorAll('.motif-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const motif = btn.dataset.motif;
      document.body.classList.remove('motif-clean', 'motif-grid', 'motif-waves');
      if (motif !== 'clean') document.body.classList.add(`motif-${motif}`);
      buttons.forEach(b => b.classList.toggle('active', b === btn));
    });
  });
}

// ==========================================================================
// 10. BOOT
// ==========================================================================

tickClock();
setInterval(tickClock, 1000);

buildSwatches();
applyColor(themeColors[0].hex);

tickCountdowns();
setInterval(tickCountdowns, 1000);

setupMedia();
setupMotifSelector();
drawVisualizer();
