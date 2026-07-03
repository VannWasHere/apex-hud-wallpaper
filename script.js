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
// 4. BUILD CARD-BASED SCHEDULE
// ==========================================================================

let firstActiveGpIndex = -1;

function buildSchedule() {
  const container = document.getElementById('schedule-scroll');
  container.innerHTML = '';
  const now = Date.now();

  f1Schedule2026.forEach((gp, idx) => {
    const raceEnd = new Date(gp.sessions["Race"]).getTime() + 3 * 3600000;
    const isPast = now >= raceEnd;

    if (!isPast && firstActiveGpIndex === -1) {
      firstActiveGpIndex = idx;
    }

    const card = document.createElement('div');
    card.className = 'gp-card';
    card.id = `gp-card-${idx}`;
    if (isPast) card.classList.add('past-gp');
    if (firstActiveGpIndex === idx) card.classList.add('active-gp');

    // Header: title left, flag right
    const header = document.createElement('div');
    header.className = 'gp-card-header';

    const titleBlock = document.createElement('div');
    titleBlock.className = 'gp-card-title';
    titleBlock.innerHTML = `
      <div class="gp-country">${gp.country} Grand Prix</div>
      <div class="gp-track">${gp.track}</div>
      <div class="gp-meta">
        <span class="gp-round">R${gp.round}</span>
        <span class="gp-format-badge ${gp.format}">${gp.format}</span>
      </div>
    `;

    const flag = document.createElement('img');
    flag.className = 'gp-flag';
    flag.src = `https://flagcdn.com/${countryFlags[gp.country] || 'un'}.svg`;
    flag.alt = gp.country;
    flag.loading = 'lazy';

    header.append(titleBlock, flag);
    card.appendChild(header);

    // Sessions
    const sessionList = document.createElement('div');
    sessionList.className = 'session-list';

    Object.entries(gp.sessions).forEach(([sessionName, utc]) => {
      const row = document.createElement('div');
      row.className = 'session-row';
      row.dataset.utc = utc;
      row.dataset.sessionName = sessionName;
      row.dataset.country = gp.country;
      row.dataset.track = gp.track;
      row.dataset.flag = countryFlags[gp.country] || 'un';

      row.innerHTML = `
        <span class="s-name">${sessionName}</span>
        <div class="s-right">
          <span class="s-time">${fmtLocal(utc)}</span>
          <span class="s-countdown">--:--:--</span>
        </div>
      `;

      sessionList.appendChild(row);
    });

    card.appendChild(sessionList);
    container.appendChild(card);
  });
}

// ==========================================================================
// 5. COUNTDOWN TICKER + NEXT SESSION IN CLOCK
// ==========================================================================

function tickCountdowns() {
  const now = Date.now();
  const rows = document.querySelectorAll('.session-row');
  const nextMap = {};
  let globalNext = null; // track the absolute next session for clock display

  rows.forEach(row => {
    const sessionTime = new Date(row.dataset.utc).getTime();
    const diff = sessionTime - now;
    const duration = sessionDurationMs(row.dataset.sessionName);
    const cdEl = row.querySelector('.s-countdown');

    row.classList.remove('completed', 'live-now', 'next-up');

    if (diff > 0) {
      cdEl.textContent = fmtCountdown(diff);
      const cardId = row.closest('.gp-card').id;
      if (!nextMap[cardId] || diff < nextMap[cardId].diff) {
        nextMap[cardId] = { row, diff };
      }
      // Track global next
      if (!globalNext || diff < globalNext.diff) {
        globalNext = {
          name: row.dataset.sessionName,
          country: row.dataset.country,
          track: row.dataset.track,
          flag: row.dataset.flag,
          utc: row.dataset.utc,
          diff
        };
      }
    } else if (Math.abs(diff) < duration) {
      cdEl.innerHTML = '<span class="s-live-badge">● LIVE</span>';
      row.classList.add('live-now');
      // If something is live, show it in clock
      if (!globalNext) {
        globalNext = {
          name: row.dataset.sessionName,
          country: row.dataset.country,
          track: row.dataset.track,
          flag: row.dataset.flag,
          utc: row.dataset.utc,
          diff: 0,
          live: true
        };
      }
    } else {
      cdEl.textContent = 'DONE';
      row.classList.add('completed');
    }
  });

  Object.values(nextMap).forEach(({ row }) => {
    const card = row.closest('.gp-card');
    if (!card.querySelector('.live-now')) {
      row.classList.add('next-up');
    }
  });

  // Update the informative upcoming event card
  if (globalNext) {
    nextNameEl.textContent = globalNext.name;
    nextCircuitEl.textContent = globalNext.track;
    nextFlagEl.src = `https://flagcdn.com/${globalNext.flag}.svg`;
    nextFlagEl.alt = globalNext.country;
    nextTimeEl.textContent = fmtLocalShort(globalNext.utc);

    if (globalNext.live) {
      nextCountdownEl.innerHTML = '<span class="s-live-badge">● LIVE</span>';
    } else {
      nextCountdownEl.textContent = fmtCountdown(globalNext.diff);
    }
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

function applyColor(hex) {
  document.documentElement.style.setProperty('--primary-color', hex);
  const rgb = extractRgb(hex);
  document.documentElement.style.setProperty('--primary-color-rgb', rgb.join(', '));

  // Update active swatch highlight
  document.querySelectorAll('.swatch').forEach(sw => {
    sw.classList.toggle('active', sw.dataset.hex.toLowerCase() === hex.toLowerCase());
  });
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
      } else {
        pn.classList.add('waiting-media');
        ph.classList.remove('hidden');
        ct.classList.add('hidden');
        mediaTL = { pos: 0, dur: 0, paused: true, ts: Date.now() };
        paintTimeline(0, 0);
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
let audioArray = new Array(128).fill(0);
let smoothBars = new Array(64).fill(0);

function resizeCanvas() {
  cvs.width = window.innerWidth;
  cvs.height = 120;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

if (typeof window.wallpaperRegisterAudioListener === 'function') {
  window.wallpaperRegisterAudioListener(function(audioData) {
    audioArray = audioData;
  });
}

function drawVisualizer() {
  requestAnimationFrame(drawVisualizer);
  cx.clearRect(0, 0, cvs.width, cvs.height);

  const barWidth = 4, spacing = 3, bars = 64, decay = 0.82;

  for (let i = 0; i < bars; i++) {
    let val = ((audioArray[i] || 0) + (audioArray[i + 64] || 0)) / 2;
    val = val * (1 + (i / bars) * 2.5) * 100;
    val = Math.min(val, cvs.height - 6);
    smoothBars[i] = val > smoothBars[i] ? val : smoothBars[i] * decay + val * (1 - decay);
  }

  const mid = cvs.width / 2;
  const col = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#AF69EF';
  cx.shadowBlur = 12;
  cx.shadowColor = col;

  const grad = cx.createLinearGradient(0, cvs.height, 0, 0);
  grad.addColorStop(0, 'rgba(0,0,0,0)');
  grad.addColorStop(0.4, col);
  grad.addColorStop(1, 'rgba(255,255,255,0.3)');
  cx.fillStyle = grad;

  for (let i = 0; i < bars; i++) {
    const h = Math.max(smoothBars[i], 1.5);
    cx.fillRect(mid + i * (barWidth + spacing), cvs.height - h, barWidth, h);
    cx.fillRect(mid - i * (barWidth + spacing) - barWidth, cvs.height - h, barWidth, h);
  }
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
// 10. BOOT
// ==========================================================================

tickClock();
setInterval(tickClock, 1000);

buildSwatches();
applyColor(themeColors[0].hex);

buildSchedule();
tickCountdowns();
setInterval(tickCountdowns, 1000);

setupMedia();
drawVisualizer();
