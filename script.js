/**
 * Wallpaper Engine - F1 Hub & Media Visualizer
 * Centered Layout Logic
 */

// ==========================================================================
// 1. DATA STRUCTURES & CONFIG
// ==========================================================================

const f1Schedule2026 = [
  {
    "round": 9,
    "country": "Great Britain",
    "track": "Silverstone Circuit",
    "format": "sprint",
    "sessions": {
      "Practice 1": "2026-07-03T11:30:00Z",
      "Sprint Qualifying": "2026-07-03T15:30:00Z",
      "Sprint": "2026-07-04T11:00:00Z",
      "Qualifying": "2026-07-04T15:00:00Z",
      "Race": "2026-07-05T14:00:00Z"
    }
  },
  {
    "round": 10,
    "country": "Belgium",
    "track": "Circuit de Spa-Francorchamps",
    "format": "standard",
    "sessions": {
      "Practice 1": "2026-07-17T11:30:00Z",
      "Practice 2": "2026-07-17T15:00:00Z",
      "Practice 3": "2026-07-18T10:30:00Z",
      "Qualifying": "2026-07-18T14:00:00Z",
      "Race": "2026-07-19T13:00:00Z"
    }
  },
  {
    "round": 11,
    "country": "Hungary",
    "track": "Hungaroring",
    "format": "standard",
    "sessions": {
      "Practice 1": "2026-07-24T11:30:00Z",
      "Practice 2": "2026-07-24T15:00:00Z",
      "Practice 3": "2026-07-25T10:30:00Z",
      "Qualifying": "2026-07-25T14:00:00Z",
      "Race": "2026-07-26T13:00:00Z"
    }
  },
  {
    "round": 12,
    "country": "Netherlands",
    "track": "Circuit Zandvoort",
    "format": "sprint",
    "sessions": {
      "Practice 1": "2026-08-21T10:30:00Z",
      "Sprint Qualifying": "2026-08-21T14:30:00Z",
      "Sprint": "2026-08-22T10:00:00Z",
      "Qualifying": "2026-08-22T14:00:00Z",
      "Race": "2026-08-23T13:00:00Z"
    }
  },
  {
    "round": 13,
    "country": "Italy",
    "track": "Autodromo Nazionale Monza",
    "format": "standard",
    "sessions": {
      "Practice 1": "2026-09-04T10:30:00Z",
      "Practice 2": "2026-09-04T14:00:00Z",
      "Practice 3": "2026-09-05T10:30:00Z",
      "Qualifying": "2026-09-05T14:00:00Z",
      "Race": "2026-09-06T13:00:00Z"
    }
  },
  {
    "round": 14,
    "country": "Spain",
    "track": "Madrid",
    "format": "standard",
    "sessions": {
      "Practice 1": "2026-09-11T11:30:00Z",
      "Practice 2": "2026-09-11T15:00:00Z",
      "Practice 3": "2026-09-12T10:30:00Z",
      "Qualifying": "2026-09-12T14:00:00Z",
      "Race": "2026-09-13T13:00:00Z"
    }
  },
  {
    "round": 15,
    "country": "Azerbaijan",
    "track": "Baku City Circuit",
    "format": "standard",
    "sessions": {
      "Practice 1": "2026-09-24T08:30:00Z",
      "Practice 2": "2026-09-24T12:00:00Z",
      "Practice 3": "2026-09-25T08:30:00Z",
      "Qualifying": "2026-09-25T12:00:00Z",
      "Race": "2026-09-26T11:00:00Z"
    }
  },
  {
    "round": 16,
    "country": "Singapore",
    "track": "Marina Bay Street Circuit",
    "format": "sprint",
    "sessions": {
      "Practice 1": "2026-10-09T08:30:00Z",
      "Sprint Qualifying": "2026-10-09T12:30:00Z",
      "Sprint": "2026-10-10T09:00:00Z",
      "Qualifying": "2026-10-10T13:00:00Z",
      "Race": "2026-10-11T12:00:00Z"
    }
  },
  {
    "round": 17,
    "country": "United States",
    "track": "Circuit of The Americas",
    "format": "standard",
    "sessions": {
      "Practice 1": "2026-10-23T17:30:00Z",
      "Practice 2": "2026-10-23T21:00:00Z",
      "Practice 3": "2026-10-24T17:30:00Z",
      "Qualifying": "2026-10-24T21:00:00Z",
      "Race": "2026-10-25T20:00:00Z"
    }
  },
  {
    "round": 18,
    "country": "Mexico",
    "track": "Autódromo Hermanos Rodríguez",
    "format": "standard",
    "sessions": {
      "Practice 1": "2026-10-30T18:30:00Z",
      "Practice 2": "2026-10-30T22:00:00Z",
      "Practice 3": "2026-10-31T17:30:00Z",
      "Qualifying": "2026-10-31T21:00:00Z",
      "Race": "2026-11-01T20:00:00Z"
    }
  },
  {
    "round": 19,
    "country": "Brazil",
    "track": "Autódromo José Carlos Pace",
    "format": "standard",
    "sessions": {
      "Practice 1": "2026-11-06T14:30:00Z",
      "Practice 2": "2026-11-06T18:00:00Z",
      "Practice 3": "2026-11-07T14:30:00Z",
      "Qualifying": "2026-11-07T18:00:00Z",
      "Race": "2026-11-08T17:00:00Z"
    }
  },
  {
    "round": 20,
    "country": "United States",
    "track": "Las Vegas Strip Circuit",
    "format": "standard",
    "sessions": {
      "Practice 1": "2026-11-20T02:30:00Z",
      "Practice 2": "2026-11-20T06:00:00Z",
      "Practice 3": "2026-11-21T02:30:00Z",
      "Qualifying": "2026-11-21T06:00:00Z",
      "Race": "2026-11-22T06:00:00Z"
    }
  },
  {
    "round": 21,
    "country": "Qatar",
    "track": "Lusail International Circuit",
    "format": "standard",
    "sessions": {
      "Practice 1": "2026-11-27T13:30:00Z",
      "Practice 2": "2026-11-27T17:00:00Z",
      "Practice 3": "2026-11-28T13:30:00Z",
      "Qualifying": "2026-11-28T17:00:00Z",
      "Race": "2026-11-29T16:00:00Z"
    }
  },
  {
    "round": 22,
    "country": "Abu Dhabi",
    "track": "Yas Marina Circuit",
    "format": "standard",
    "sessions": {
      "Practice 1": "2026-12-04T09:30:00Z",
      "Practice 2": "2026-12-04T13:00:00Z",
      "Practice 3": "2026-12-05T10:30:00Z",
      "Qualifying": "2026-12-05T14:00:00Z",
      "Race": "2026-12-06T13:00:00Z"
    }
  }
];

// ISO 3166-1 flag mapping
const countryToFlagCode = {
  "Great Britain": "gb",
  "Belgium": "be",
  "Hungary": "hu",
  "Netherlands": "nl",
  "Italy": "it",
  "Spain": "es",
  "Azerbaijan": "az",
  "Singapore": "sg",
  "United States": "us",
  "Mexico": "mx",
  "Brazil": "br",
  "Qatar": "qa",
  "Abu Dhabi": "ae"
};

// State Variables
let detectedActiveGpIndex = -1; // Auto-detected active GP
let selectedGpIndex = -1;       // Paged GP starting index
let viewMode = '3-cards';       // '3-cards' or '1-card'
let isClock24h = false;          // Clock config

// ==========================================================================
// 2. MOTORSPORT NOMENCLATURE & UTILITIES
// ==========================================================================

/**
 * Maps country name to official Grand Prix title matching motorsport standards
 */
function getGPName(gp) {
  if (gp.country === "Great Britain") return "British Grand Prix";
  if (gp.country === "Belgium") return "Belgian Grand Prix";
  if (gp.country === "Hungary") return "Hungarian Grand Prix";
  if (gp.country === "Netherlands") return "Dutch Grand Prix";
  if (gp.country === "Italy") return "Italian Grand Prix";
  if (gp.country === "Spain") return "Spanish Grand Prix";
  if (gp.country === "Azerbaijan") return "Azerbaijan Grand Prix";
  if (gp.country === "Singapore") return "Singapore Grand Prix";
  if (gp.country === "United States") {
    if (gp.track.includes("Las Vegas")) {
      return "Las Vegas Grand Prix";
    }
    return "United States Grand Prix";
  }
  if (gp.country === "Mexico") return "Mexican Grand Prix";
  if (gp.country === "Brazil") return "Brazilian Grand Prix";
  if (gp.country === "Qatar") return "Qatar Grand Prix";
  if (gp.country === "Abu Dhabi") return "Abu Dhabi Grand Prix";
  return `${gp.country} Grand Prix`;
}

/**
 * Format ISO dates into localized readable readouts (e.g. Fri, Jul 3, 06:30 PM)
 */
function formatSessionLocalTime(utcString) {
  const localDate = new Date(utcString);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const day = dayNames[localDate.getDay()];
  const month = monthNames[localDate.getMonth()];
  const date = localDate.getDate();
  
  let hours = localDate.getHours();
  const minutes = String(localDate.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  if (!isClock24h) {
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 is 12
    return `${day}, ${month} ${date}, ${hours}:${minutes} ${ampm}`;
  } else {
    const formattedHours = String(hours).padStart(2, '0');
    return `${day}, ${month} ${date}, ${formattedHours}:${minutes}`;
  }
}

/**
 * Get F1 session duration bounds for LIVE status
 */
function getSessionDuration(sessionName) {
  if (sessionName.toLowerCase().includes("race")) {
    return 2.5 * 60 * 60 * 1000; // 2.5 hours for race
  }
  if (sessionName.toLowerCase().includes("sprint") && !sessionName.toLowerCase().includes("qualifying")) {
    return 1.0 * 60 * 60 * 1000; // 1 hour for sprint
  }
  return 1.5 * 60 * 60 * 1000; // 1.5 hours default (Practice/Qualy)
}

// ==========================================================================
// 3. MAIN GP CARD RENDERING & PAGINATION
// ==========================================================================

/**
 * Build and inject card markups into the DOM based on selected starting index
 */
function renderGPCards() {
  const container = document.getElementById('f1-cards-container');
  container.innerHTML = '';
  
  const numCards = viewMode === '3-cards' ? 3 : 1;
  const limit = f1Schedule2026.length - numCards;
  
  // Clamp selectedGpIndex to prevent rendering out-of-bounds cards
  const clampedStart = Math.max(0, Math.min(selectedGpIndex, limit));
  selectedGpIndex = clampedStart;
  
  for (let i = clampedStart; i < clampedStart + numCards; i++) {
    const gp = f1Schedule2026[i];
    
    // Create card wrapper
    const card = document.createElement('article');
    card.className = 'gp-card';
    if (i === detectedActiveGpIndex) {
      card.classList.add('active-card');
    }
    
    // Card Header
    const cardHeader = document.createElement('header');
    cardHeader.className = 'gp-card-header';
    
    const metaDiv = document.createElement('div');
    metaDiv.className = 'gp-card-meta';
    
    const title = document.createElement('h2');
    title.className = 'gp-card-title';
    title.textContent = getGPName(gp);
    
    const track = document.createElement('span');
    track.className = 'gp-card-track';
    track.textContent = gp.track;
    
    metaDiv.appendChild(title);
    metaDiv.appendChild(track);
    
    const flagCode = countryToFlagCode[gp.country] || "un";
    const flagImg = document.createElement('img');
    flagImg.className = 'gp-card-flag';
    flagImg.src = `https://flagcdn.com/${flagCode}.svg`;
    flagImg.alt = `${gp.country} Flag`;
    flagImg.crossOrigin = "anonymous";
    
    cardHeader.appendChild(metaDiv);
    cardHeader.appendChild(flagImg);
    card.appendChild(cardHeader);
    
    // Sessions list
    const sessionsStack = document.createElement('div');
    sessionsStack.className = 'gp-card-sessions';
    
    Object.keys(gp.sessions).forEach((sessionName) => {
      const utcTime = gp.sessions[sessionName];
      
      const row = document.createElement('div');
      row.className = 'session-row';
      
      const nameSpan = document.createElement('span');
      nameSpan.className = 'session-name';
      nameSpan.textContent = sessionName;
      
      const detailsDiv = document.createElement('div');
      detailsDiv.className = 'session-details';
      
      const timeSpan = document.createElement('span');
      timeSpan.className = 'session-time';
      timeSpan.textContent = formatSessionLocalTime(utcTime);
      
      const countdownSpan = document.createElement('span');
      countdownSpan.className = 'session-countdown';
      // Pass data properties for generic selection in tick interval
      countdownSpan.dataset.round = gp.round;
      countdownSpan.dataset.session = sessionName;
      countdownSpan.textContent = '---';
      
      detailsDiv.appendChild(timeSpan);
      detailsDiv.appendChild(countdownSpan);
      row.appendChild(nameSpan);
      row.appendChild(detailsDiv);
      sessionsStack.appendChild(row);
    });
    
    card.appendChild(sessionsStack);
    container.appendChild(card);
  }
  
  // Disable navigation arrows if limit bounds are reached
  updateNavigationButtons();
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-gp-btn');
  const nextBtn = document.getElementById('next-gp-btn');
  const numCards = viewMode === '3-cards' ? 3 : 1;
  
  if (prevBtn) prevBtn.disabled = selectedGpIndex <= 0;
  if (nextBtn) nextBtn.disabled = selectedGpIndex >= f1Schedule2026.length - numCards;
}

// ==========================================================================
// 4. TICKING COUNTDOWN TICKER
// ==========================================================================

function formatCountdown(diffMs) {
  const diffSecs = Math.floor(diffMs / 1000);
  const secs = diffSecs % 60;
  const mins = Math.floor(diffSecs / 60) % 60;
  const hours = Math.floor(diffSecs / (60 * 60)) % 24;
  const days = Math.floor(diffSecs / (60 * 60 * 24));
  
  if (days > 0) {
    return `${days}d ${String(hours).padStart(2, '0')}h`;
  } else {
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
}

function updateCountdowns() {
  const countdownEls = document.querySelectorAll('.session-countdown');
  const now = new Date();
  
  // Keep track of the immediate next session for each visible GP round
  const nextSessionsByRound = {};
  
  countdownEls.forEach((el) => {
    const round = parseInt(el.dataset.round);
    const sessionName = el.dataset.session;
    
    const gp = f1Schedule2026.find(g => g.round === round);
    if (!gp) return;
    
    const utcTime = gp.sessions[sessionName];
    const sessionTime = new Date(utcTime);
    const diff = sessionTime.getTime() - now.getTime();
    const duration = getSessionDuration(sessionName);
    
    const rowEl = el.closest('.session-row');
    if (rowEl) {
      rowEl.classList.remove('active-next', 'completed');
    }
    
    if (diff > 0) {
      el.textContent = formatCountdown(diff);
      
      // Store to evaluate closest future session
      if (!nextSessionsByRound[round] || diff < nextSessionsByRound[round].diff) {
        nextSessionsByRound[round] = {
          element: el,
          row: rowEl,
          diff: diff
        };
      }
    } else if (diff <= 0 && Math.abs(diff) < duration) {
      el.textContent = 'LIVE';
      if (rowEl) rowEl.classList.add('active-next');
    } else {
      el.textContent = 'DONE';
      if (rowEl) rowEl.classList.add('completed');
    }
  });
  
  // Highlight the next upcoming session ONLY if no session is currently LIVE on that card
  Object.keys(nextSessionsByRound).forEach((roundStr) => {
    const round = parseInt(roundStr);
    
    // Check if this round currently has a LIVE row
    const cardEl = document.querySelector(`.session-countdown[data-round="${round}"]`).closest('.gp-card');
    const hasLive = cardEl.querySelector('.session-row.active-next');
    
    if (!hasLive) {
      const nextSession = nextSessionsByRound[round];
      if (nextSession && nextSession.row) {
        nextSession.row.classList.add('active-next');
      }
    }
  });
}

/**
 * Scan the calendar to calculate the active/next F1 GP weekend
 */
function initF1Schedule() {
  const now = new Date();
  
  let activeGpIndex = f1Schedule2026.findIndex(gp => {
    const raceTime = new Date(gp.sessions["Race"]);
    return now.getTime() < (raceTime.getTime() + 3.0 * 60 * 60 * 1000);
  });
  
  if (activeGpIndex === -1) {
    activeGpIndex = f1Schedule2026.length - 1; // Fallback to final GP
  }
  
  if (activeGpIndex !== detectedActiveGpIndex) {
    detectedActiveGpIndex = activeGpIndex;
    
    // Default selected view index to the active GP initially
    if (selectedGpIndex === -1) {
      selectedGpIndex = activeGpIndex;
    }
    
    renderGPCards();
  }
}

// ==========================================================================
// 5. LIVE MEDIA PLAYER & TOGGLER
// ==========================================================================

let mediaTimeline = {
  position: 0,
  duration: 0,
  paused: true,
  lastUpdate: Date.now()
};

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function updateTimelineUI(position, duration) {
  const currentLabel = document.getElementById('media-time-current');
  const totalLabel = document.getElementById('media-time-total');
  const fill = document.getElementById('media-timeline-fill');
  
  if (currentLabel) currentLabel.textContent = formatTime(position);
  if (totalLabel) totalLabel.textContent = formatTime(duration);
  if (fill) {
    const percent = duration > 0 ? (position / duration) * 100 : 0;
    fill.style.width = `${percent}%`;
  }
}

function setupMediaListeners() {
  // Title / Artist listener
  window.wallpaperRegisterMediaPropertiesListener((event) => {
    const placeholder = document.getElementById('media-placeholder-id');
    const content = document.getElementById('media-content-id');
    const panel = document.getElementById('media-panel');
    
    if (event.title) {
      panel.classList.remove('waiting-media');
      placeholder.classList.add('hidden');
      content.classList.remove('hidden');
      
      document.getElementById('media-title').textContent = event.title;
      document.getElementById('media-artist').textContent = event.artist || 'Unknown Artist';
    } else {
      panel.classList.add('waiting-media');
      placeholder.classList.remove('hidden');
      content.classList.add('hidden');
      
      mediaTimeline.duration = 0;
      mediaTimeline.position = 0;
      mediaTimeline.paused = true;
      updateTimelineUI(0, 0);
    }
  });

  // Track Art thumbnail listener
  window.wallpaperRegisterMediaThumbnailListener((event) => {
    const art = document.getElementById('media-album-art');
    if (event.thumbnail) {
      art.src = event.thumbnail;
    } else {
      art.src = '';
    }
  });

  // Timeline seek position listener
  window.wallpaperRegisterMediaTimelineListener((event) => {
    mediaTimeline.position = event.position;
    mediaTimeline.duration = event.duration;
    mediaTimeline.paused = event.paused;
    mediaTimeline.lastUpdate = Date.now();
    
    updateTimelineUI(event.position, event.duration);
  });
}

// Tick song progress bar every 250ms
setInterval(() => {
  if (mediaTimeline.duration > 0 && !mediaTimeline.paused) {
    const elapsed = (Date.now() - mediaTimeline.lastUpdate) / 1000;
    const currentPos = Math.min(mediaTimeline.position + elapsed, mediaTimeline.duration);
    updateTimelineUI(currentPos, mediaTimeline.duration);
  }
}, 250);

// ==========================================================================
// 6. AUDIO VISUALIZER DRAW LOOP
// ==========================================================================

const canvas = document.getElementById('audio-visualizer-canvas');
const ctx = canvas.getContext('2d');

let audioArrayCache = new Array(128).fill(0);
let smoothedValues = new Array(64).fill(0);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = 120;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

window.wallpaperRegisterAudioListener((audioArray) => {
  audioArrayCache = audioArray;
});

function drawVisualizer() {
  requestAnimationFrame(drawVisualizer);
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const barWidth = 6;
  const barSpacing = 4;
  const totalBars = 64;
  
  const decay = 0.85;
  for (let i = 0; i < totalBars; i++) {
    let rawVal = (audioArrayCache[i] + audioArrayCache[i + totalBars]) / 2;
    
    let boost = 1.0 + (i / totalBars) * 3.0;
    let val = rawVal * boost * 110;
    
    val = Math.min(val, canvas.height - 10);
    
    if (val > smoothedValues[i]) {
      smoothedValues[i] = val;
    } else {
      smoothedValues[i] = smoothedValues[i] * decay + val * (1 - decay);
    }
  }
  
  const centerX = canvas.width / 2;
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
  
  ctx.shadowBlur = 15;
  ctx.shadowColor = primaryColor;
  
  const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
  gradient.addColorStop(0.5, primaryColor);
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.45)');
  ctx.fillStyle = gradient;
  
  for (let i = 0; i < totalBars; i++) {
    let barHeight = smoothedValues[i];
    if (barHeight < 3) barHeight = 3; // Baseline glowing spacer
    
    let rx = centerX + i * (barWidth + barSpacing);
    let ry = canvas.height - barHeight;
    ctx.fillRect(rx, ry, barWidth, barHeight);
    
    let lx = centerX - i * (barWidth + barSpacing) - barWidth;
    let ly = canvas.height - barHeight;
    ctx.fillRect(lx, ly, barWidth, barHeight);
  }
}

// ==========================================================================
// 7. WALLPAPER CUSTOMIZATION CONTROLS
// ==========================================================================

function parseWallpaperColor(val) {
  if (!val) return '#AF69EF';
  if (val.indexOf(' ') !== -1) {
    const parts = val.split(' ');
    if (parts.length >= 3) {
      const r = Math.round(parts[0] * 255);
      const g = Math.round(parts[1] * 255);
      const b = Math.round(parts[2] * 255);
      return `rgb(${r}, ${g}, ${b})`;
    }
  }
  return val;
}

function extractRgbChannels(colorStr) {
  if (colorStr.startsWith('rgb')) {
    const match = colorStr.match(/\d+/g);
    if (match && match.length >= 3) {
      return [parseInt(match[0]), parseInt(match[1]), parseInt(match[2])];
    }
  } else if (colorStr.startsWith('#')) {
    let hex = colorStr.substring(1);
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
  }
  return [175, 105, 239];
}

// Set up Wallpaper Engine listener hook
window.wallpaperPropertyListener = {
  applyUserProperties: function(properties) {
    // Theme Accent
    if (properties.primarycolor) {
      const color = parseWallpaperColor(properties.primarycolor.value);
      document.documentElement.style.setProperty('--primary-color', color);
      
      const channels = extractRgbChannels(color);
      document.documentElement.style.setProperty('--primary-color-rgb', `${channels[0]}, ${channels[1]}, ${channels[2]}`);
      
      // Update color picker dot highlights
      updateColorPickerHighlights(color);
    }
    
    // Toggle Audio Visualizer
    if (properties.showvisualizer) {
      const showVal = properties.showvisualizer.value;
      const visCanvas = document.getElementById('audio-visualizer-canvas');
      visCanvas.style.display = showVal ? 'block' : 'none';
    }
    
    // Opacity Visualizer
    if (properties.visualizeropacity) {
      const opacityVal = properties.visualizeropacity.value / 100;
      const visCanvas = document.getElementById('audio-visualizer-canvas');
      visCanvas.style.opacity = opacityVal;
    }
  }
};

/**
 * Highlight matching preset color dot on external properties updates
 */
function updateColorPickerHighlights(currentColor) {
  const dots = document.querySelectorAll('.color-dot');
  const rgbTarget = extractRgbChannels(currentColor).join(',');
  
  dots.forEach(dot => {
    const dotColor = dot.dataset.color;
    const dotRgb = extractRgbChannels(dotColor).join(',');
    
    if (dotRgb === rgbTarget) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// ==========================================================================
// 8. INTERACTIVE CLICK HANDLERS
// ==========================================================================

function setupUIEventListeners() {
  const prevBtn = document.getElementById('prev-gp-btn');
  const nextBtn = document.getElementById('next-gp-btn');
  const view1Btn = document.getElementById('view-1-btn');
  const view3Btn = document.getElementById('view-3-btn');
  const mediaToggleBtn = document.getElementById('media-toggle-btn');
  const mediaPanel = document.getElementById('media-panel');
  const colorDots = document.querySelectorAll('.color-dot');
  const cardsContainer = document.getElementById('f1-cards-container');
  
  // Previous Arrow
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (selectedGpIndex > 0) {
        selectedGpIndex--;
        renderGPCards();
      }
    });
  }
  
  // Next Arrow
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const numCards = viewMode === '3-cards' ? 3 : 1;
      if (selectedGpIndex < f1Schedule2026.length - numCards) {
        selectedGpIndex++;
        renderGPCards();
      }
    });
  }
  
  // 1-Card View Mode Toggle
  if (view1Btn) {
    view1Btn.addEventListener('click', () => {
      if (viewMode !== '1-card') {
        viewMode = '1-card';
        view1Btn.classList.add('active');
        view3Btn.classList.remove('active');
        
        cardsContainer.className = 'cards-container view-1-cards';
        renderGPCards();
      }
    });
  }
  
  // 3-Cards View Mode Toggle
  if (view3Btn) {
    view3Btn.addEventListener('click', () => {
      if (viewMode !== '3-cards') {
        viewMode = '3-cards';
        view3Btn.classList.add('active');
        view1Btn.classList.remove('active');
        
        cardsContainer.className = 'cards-container view-3-cards';
        renderGPCards();
      }
    });
  }
  
  // Media Player Widget Toggler
  if (mediaToggleBtn && mediaPanel) {
    mediaToggleBtn.addEventListener('click', () => {
      if (mediaPanel.classList.contains('media-hidden')) {
        mediaPanel.classList.remove('media-hidden');
        mediaPanel.classList.add('media-visible');
        mediaToggleBtn.classList.add('active');
      } else {
        mediaPanel.classList.remove('media-visible');
        mediaPanel.classList.add('media-hidden');
        mediaToggleBtn.classList.remove('active');
      }
    });
  }
  
  // Interactive Color Dots Custom Themer
  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      colorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      
      const chosenColor = dot.dataset.color;
      document.documentElement.style.setProperty('--primary-color', chosenColor);
      
      const channels = extractRgbChannels(chosenColor);
      document.documentElement.style.setProperty('--primary-color-rgb', `${channels[0]}, ${channels[1]}, ${channels[2]}`);
    });
  });
}

// ==========================================================================
// 9. INITIALIZATION
// ==========================================================================

// Trigger loops immediately
initF1Schedule();
// Keep paged card elements rendering updates
setInterval(initF1Schedule, 60000);

// Tick timers every second
setInterval(updateCountdowns, 1000);
updateCountdowns();

// Setup callbacks
setupUIEventListeners();
setupMediaListeners();
drawVisualizer();
