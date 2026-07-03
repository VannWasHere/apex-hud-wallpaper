/**
 * F1 2026 Dashboard – Full Schedule with Scrollable Sessions
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

// Country code mapping for flagcdn.com SVG flags
const countryFlags = {
  "Great Britain": "gb", "Belgium": "be", "Hungary": "hu",
  "Netherlands": "nl", "Italy": "it", "Spain": "es",
  "Azerbaijan": "az", "Singapore": "sg", "United States": "us",
  "Mexico": "mx", "Brazil": "br", "Qatar": "qa", "Abu Dhabi": "ae"
};

// ==========================================================================
// 2. CLOCK
// ==========================================================================

function tickClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('digital-clock').textContent = `${h}:${m}:${s}`;

  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date-display').textContent = now.toLocaleDateString(undefined, opts);
}

// ==========================================================================
// 3. FORMAT HELPERS
// ==========================================================================

/**
 * Format a UTC ISO string into localised display: "Fri, Jul 3, 06:30 PM"
 */
function fmtLocal(utc) {
  const d = new Date(utc);
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let h = d.getHours();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  const min = String(d.getMinutes()).padStart(2, '0');
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${h}:${min} ${ampm}`;
}

/**
 * Typical F1 session durations (ms) for LIVE detection
 */
function sessionDurationMs(name) {
  const n = name.toLowerCase();
  if (n.includes('race'))   return 2.5 * 3600000;
  if (n.includes('sprint') && !n.includes('qualifying')) return 3600000;
  return 1.5 * 3600000;
}

/**
 * Countdown text from milliseconds
 */
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
// 4. BUILD FULL SCHEDULE DOM
// ==========================================================================

let firstActiveGpIndex = -1;  // The index of the soonest GP that isn't fully over

function buildSchedule() {
  const container = document.getElementById('schedule-scroll');
  container.innerHTML = '';
  const now = new Date();

  f1Schedule2026.forEach((gp, gpIdx) => {
    // Check if whole GP weekend is in the past
    const raceEnd = new Date(gp.sessions["Race"]).getTime() + 3 * 3600000;
    const isPast = now.getTime() >= raceEnd;

    if (!isPast && firstActiveGpIndex === -1) {
      firstActiveGpIndex = gpIdx;
    }

    // GP block wrapper
    const block = document.createElement('div');
    block.className = 'gp-block';
    block.id = `gp-block-${gpIdx}`;
    if (isPast) block.classList.add('past-gp');

    // Header: Flag + Country/Track + Round + Format badge
    const header = document.createElement('div');
    header.className = 'gp-header';

    const flag = document.createElement('img');
    flag.className = 'gp-flag';
    flag.src = `https://flagcdn.com/${countryFlags[gp.country] || 'un'}.svg`;
    flag.alt = gp.country;
    flag.crossOrigin = 'anonymous';

    const info = document.createElement('div');
    info.className = 'gp-info';
    const country = document.createElement('div');
    country.className = 'gp-country';
    country.textContent = gp.country;
    const track = document.createElement('div');
    track.className = 'gp-track';
    track.textContent = gp.track;
    info.appendChild(country);
    info.appendChild(track);

    const format = document.createElement('span');
    format.className = `gp-format ${gp.format}`;
    format.textContent = gp.format;

    const round = document.createElement('span');
    round.className = 'gp-round';
    round.textContent = `R${gp.round}`;

    header.appendChild(flag);
    header.appendChild(info);
    header.appendChild(format);
    header.appendChild(round);
    block.appendChild(header);

    // Session rows — iterate the sessions object to preserve order
    Object.entries(gp.sessions).forEach(([sessionName, utc]) => {
      const row = document.createElement('div');
      row.className = 'session-row';
      row.dataset.utc = utc;
      row.dataset.sessionName = sessionName;

      const name = document.createElement('span');
      name.className = 's-name';
      name.textContent = sessionName;

      const time = document.createElement('span');
      time.className = 's-time';
      time.textContent = fmtLocal(utc);

      const cd = document.createElement('span');
      cd.className = 's-countdown';
      cd.textContent = '---';

      row.appendChild(name);
      row.appendChild(time);
      row.appendChild(cd);
      block.appendChild(row);
    });

    container.appendChild(block);
  });

  // Auto-scroll to the first active GP so the user sees what's relevant
  if (firstActiveGpIndex !== -1) {
    const el = document.getElementById(`gp-block-${firstActiveGpIndex}`);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
    }
  }
}

// ==========================================================================
// 5. LIVE COUNTDOWN TICKER (runs every second)
// ==========================================================================

function tickCountdowns() {
  const now = new Date();
  const rows = document.querySelectorAll('.session-row');

  // Per GP block, track which row is the closest upcoming
  const nextMap = {};

  rows.forEach(row => {
    const utc = row.dataset.utc;
    const sessionName = row.dataset.sessionName;
    const sessionTime = new Date(utc).getTime();
    const diff = sessionTime - now.getTime();
    const duration = sessionDurationMs(sessionName);
    const cdEl = row.querySelector('.s-countdown');

    // Reset classes
    row.classList.remove('completed', 'live-now', 'next-up');

    if (diff > 0) {
      // Future session
      cdEl.textContent = fmtCountdown(diff);

      // Track closest upcoming per parent gp-block
      const blockId = row.closest('.gp-block').id;
      if (!nextMap[blockId] || diff < nextMap[blockId].diff) {
        nextMap[blockId] = { row, diff };
      }
    } else if (diff <= 0 && Math.abs(diff) < duration) {
      // Currently LIVE
      cdEl.innerHTML = '<span class="s-live-badge">● LIVE</span>';
      row.classList.add('live-now');
    } else {
      // Completed
      cdEl.textContent = 'DONE';
      row.classList.add('completed');
    }
  });

  // Highlight the closest upcoming session per GP (only if no live session in that GP)
  Object.values(nextMap).forEach(({ row }) => {
    const block = row.closest('.gp-block');
    if (!block.querySelector('.live-now')) {
      row.classList.add('next-up');
    }
  });
}

// ==========================================================================
// 6. MEDIA PLAYER
// ==========================================================================

let mediaTL = { pos: 0, dur: 0, paused: true, ts: Date.now() };

function fmtTime(s) {
  if (isNaN(s) || s < 0) return '0:00';
  return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
}

function paintTimeline(pos, dur) {
  const cur = document.getElementById('media-time-current');
  const tot = document.getElementById('media-time-total');
  const fill = document.getElementById('media-timeline-fill');
  if (cur) cur.textContent = fmtTime(pos);
  if (tot) tot.textContent = fmtTime(dur);
  if (fill) fill.style.width = `${dur > 0 ? (pos/dur)*100 : 0}%`;
}

function setupMedia() {
  window.wallpaperRegisterMediaPropertiesListener(e => {
    const ph = document.getElementById('media-placeholder-id');
    const ct = document.getElementById('media-content-id');
    const pn = document.getElementById('media-panel');
    if (e.title) {
      pn.classList.remove('waiting-media');
      ph.classList.add('hidden');
      ct.classList.remove('hidden');
      document.getElementById('media-title').textContent = e.title;
      document.getElementById('media-artist').textContent = e.artist || 'Unknown Artist';
    } else {
      pn.classList.add('waiting-media');
      ph.classList.remove('hidden');
      ct.classList.add('hidden');
      mediaTL = { pos:0, dur:0, paused:true, ts:Date.now() };
      paintTimeline(0, 0);
    }
  });

  window.wallpaperRegisterMediaThumbnailListener(e => {
    document.getElementById('media-album-art').src = e.thumbnail || '';
  });

  window.wallpaperRegisterMediaTimelineListener(e => {
    mediaTL = { pos: e.position, dur: e.duration, paused: e.paused, ts: Date.now() };
    paintTimeline(e.position, e.duration);
  });
}

setInterval(() => {
  if (mediaTL.dur > 0 && !mediaTL.paused) {
    const elapsed = (Date.now() - mediaTL.ts) / 1000;
    paintTimeline(Math.min(mediaTL.pos + elapsed, mediaTL.dur), mediaTL.dur);
  }
}, 250);

// ==========================================================================
// 7. AUDIO VISUALIZER
// ==========================================================================

const cvs = document.getElementById('audio-visualizer-canvas');
const cx = cvs.getContext('2d');
let audioCache = new Array(128).fill(0);
let smooth = new Array(64).fill(0);

function resizeCvs() { cvs.width = window.innerWidth; cvs.height = 120; }
window.addEventListener('resize', resizeCvs);
resizeCvs();

window.wallpaperRegisterAudioListener(a => { audioCache = a; });

function drawVis() {
  requestAnimationFrame(drawVis);
  cx.clearRect(0, 0, cvs.width, cvs.height);

  const bw = 5, sp = 3, bars = 64, decay = 0.85;
  for (let i = 0; i < bars; i++) {
    let v = ((audioCache[i] + audioCache[i + bars]) / 2) * (1 + (i/bars)*3) * 110;
    v = Math.min(v, cvs.height - 8);
    smooth[i] = v > smooth[i] ? v : smooth[i] * decay + v * (1-decay);
  }

  const mid = cvs.width / 2;
  const col = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
  cx.shadowBlur = 14;
  cx.shadowColor = col;

  const grad = cx.createLinearGradient(0, cvs.height, 0, 0);
  grad.addColorStop(0, 'rgba(0,0,0,0)');
  grad.addColorStop(0.5, col);
  grad.addColorStop(1, 'rgba(255,255,255,0.4)');
  cx.fillStyle = grad;

  for (let i = 0; i < bars; i++) {
    const h = Math.max(smooth[i], 2);
    cx.fillRect(mid + i*(bw+sp), cvs.height - h, bw, h);
    cx.fillRect(mid - i*(bw+sp) - bw, cvs.height - h, bw, h);
  }
}

// ==========================================================================
// 8. WALLPAPER ENGINE PROPERTIES
// ==========================================================================

function extractRgb(c) {
  if (c.startsWith('rgb')) { const m = c.match(/\d+/g); return m ? m.slice(0,3).map(Number) : [175,105,239]; }
  if (c.startsWith('#')) {
    let h = c.slice(1);
    if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
    return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
  }
  return [175,105,239];
}

window.wallpaperPropertyListener = {
  applyUserProperties(props) {
    if (props.primarycolor) {
      const p = props.primarycolor.value.split(' ');
      let col;
      if (p.length >= 3) col = `rgb(${Math.round(p[0]*255)},${Math.round(p[1]*255)},${Math.round(p[2]*255)})`;
      else col = props.primarycolor.value;
      document.documentElement.style.setProperty('--primary-color', col);
      const ch = extractRgb(col);
      document.documentElement.style.setProperty('--primary-color-rgb', ch.join(', '));
    }
    if (props.showvisualizer) {
      cvs.style.display = props.showvisualizer.value ? 'block' : 'none';
    }
    if (props.visualizeropacity) {
      cvs.style.opacity = props.visualizeropacity.value / 100;
    }
  }
};

// ==========================================================================
// 9. BOOT
// ==========================================================================

tickClock();
setInterval(tickClock, 1000);

buildSchedule();
tickCountdowns();
setInterval(tickCountdowns, 1000);

setupMedia();
drawVis();
