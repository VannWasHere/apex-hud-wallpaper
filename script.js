/**
 * Wallpaper Engine - F1 Hub & Media Visualizer
 * Core Script Logic
 */

// ==========================================================================
// 1. DATA STRUCTURES & CONFIG
// ==========================================================================

// Official F1 2026 Calendar Part provided by the user
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

// ISO 3166-1 alpha-2 mapping for FlagCDN (Offline friendly, fallback is text)
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
  "Abu Dhabi": "ae" // United Arab Emirates flag
};

// Track the current active Grand Prix index in the calendar array
let currentActiveGpIndex = -1;

// Global settings
let isClock24h = true;

// ==========================================================================
// 2. CLOCK & TIMER LOGIC
// ==========================================================================

function updateClock() {
  const now = new Date();
  
  // Format local hours, minutes, seconds
  let hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  if (!isClock24h) {
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
  }
  
  const hStr = String(hours).padStart(2, '0');
  const mStr = String(now.getMinutes()).padStart(2, '0');
  const sStr = String(now.getSeconds()).padStart(2, '0');
  
  const clockEl = document.getElementById('digital-clock');
  clockEl.textContent = `${hStr}:${mStr}:${sStr}${!isClock24h ? ' ' + ampm : ''}`;
  
  // Format local date text
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date-display').textContent = now.toLocaleDateString(undefined, options);
}

// ==========================================================================
// 3. F1 SCHEDULE LOGIC
// ==========================================================================

/**
 * Format UTC date to user's local timezone (e.g. Fri 18:30)
 */
function formatSessionLocalTime(utcString) {
  const localDate = new Date(utcString);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = dayNames[localDate.getDay()];
  const hours = String(localDate.getHours()).padStart(2, '0');
  const minutes = String(localDate.getMinutes()).padStart(2, '0');
  return `${dayName} ${hours}:${minutes}`;
}

/**
 * Format weekend date range dynamically (e.g. Jul 17-19)
 */
function formatDateRange(sessions) {
  const sessionKeys = Object.keys(sessions);
  if (sessionKeys.length === 0) return "";
  
  const dates = sessionKeys.map(k => new Date(sessions[k]));
  dates.sort((a, b) => a - b);
  
  const startDate = dates[0];
  const endDate = dates[dates.length - 1];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const startMonth = months[startDate.getMonth()];
  const startDay = String(startDate.getDate()).padStart(2, '0');
  
  if (startDate.getMonth() === endDate.getMonth()) {
    const endDay = String(endDate.getDate()).padStart(2, '0');
    return `${startMonth} ${startDay}-${endDay}`;
  } else {
    const endMonth = months[endDate.getMonth()];
    const endDay = String(endDate.getDate()).padStart(2, '0');
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
  }
}

/**
 * Get typical F1 session durations in milliseconds
 */
function getSessionDuration(sessionName) {
  if (sessionName.toLowerCase().includes("race")) {
    return 2.5 * 60 * 60 * 1000; // 2.5 hours for Grand Prix
  }
  if (sessionName.toLowerCase().includes("sprint") && !sessionName.toLowerCase().includes("qualifying")) {
    return 1 * 60 * 60 * 1000; // 1 hour for Sprint race
  }
  return 1.5 * 60 * 60 * 1000; // 1.5 hours default (Practice / Qualifying)
}

/**
 * Render the main active GP card and sessions
 */
function renderActiveGP(gpIndex) {
  currentActiveGpIndex = gpIndex;
  const gp = f1Schedule2026[gpIndex];
  
  document.getElementById('active-round').textContent = `ROUND ${gp.round}`;
  document.getElementById('active-country').textContent = gp.country;
  document.getElementById('active-track').textContent = gp.track;
  
  const flagCode = countryToFlagCode[gp.country] || "un";
  const flagEl = document.getElementById('active-flag');
  flagEl.src = `https://flagcdn.com/${flagCode}.svg`;
  flagEl.alt = `${gp.country} Flag`;
  
  const sessionsList = document.getElementById('active-sessions-list');
  sessionsList.innerHTML = '';
  
  Object.keys(gp.sessions).forEach((sessionName) => {
    const utcTime = gp.sessions[sessionName];
    
    // Create row element
    const row = document.createElement('div');
    row.className = 'session-row';
    // Sanitized id for styling target
    const sanitizedId = sessionName.replace(/\s+/g, '-').toLowerCase();
    row.id = `session-row-${sanitizedId}`;
    
    const nameSpan = document.createElement('span');
    nameSpan.className = 'session-name';
    nameSpan.textContent = sessionName;
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'session-time';
    timeSpan.textContent = formatSessionLocalTime(utcTime);
    
    const countdownSpan = document.createElement('span');
    countdownSpan.className = 'session-countdown';
    countdownSpan.id = `countdown-${sanitizedId}`;
    countdownSpan.textContent = '---';
    
    row.appendChild(nameSpan);
    row.appendChild(timeSpan);
    row.appendChild(countdownSpan);
    sessionsList.appendChild(row);
  });
}

/**
 * Render scrollable list of upcoming races
 */
function renderUpcomingList(activeGpIndex) {
  const listContainer = document.getElementById('upcoming-races-list-container');
  listContainer.innerHTML = '';
  
  const upcomingGps = f1Schedule2026.slice(activeGpIndex + 1);
  
  if (upcomingGps.length === 0) {
    const endMsg = document.createElement('p');
    endMsg.className = 'gp-item-subtitle';
    endMsg.style.textAlign = 'center';
    endMsg.style.padding = '20px';
    endMsg.textContent = 'End of 2026 Season';
    listContainer.appendChild(endMsg);
    return;
  }
  
  upcomingGps.forEach((gp) => {
    const item = document.createElement('div');
    item.className = 'upcoming-gp-item';
    
    const leftDiv = document.createElement('div');
    leftDiv.className = 'gp-item-left';
    
    const flagCode = countryToFlagCode[gp.country] || "un";
    const flagImg = document.createElement('img');
    flagImg.className = 'gp-item-flag';
    flagImg.src = `https://flagcdn.com/${flagCode}.svg`;
    flagImg.alt = `${gp.country} Flag`;
    flagImg.crossOrigin = "anonymous";
    
    const metaDiv = document.createElement('div');
    metaDiv.className = 'gp-item-meta';
    
    const titleSpan = document.createElement('span');
    titleSpan.className = 'gp-item-title';
    titleSpan.textContent = gp.country;
    
    const subtitleSpan = document.createElement('span');
    subtitleSpan.className = 'gp-item-subtitle';
    subtitleSpan.textContent = gp.track;
    
    metaDiv.appendChild(titleSpan);
    metaDiv.appendChild(subtitleSpan);
    leftDiv.appendChild(flagImg);
    leftDiv.appendChild(metaDiv);
    
    const dateDiv = document.createElement('div');
    dateDiv.className = 'gp-item-date';
    dateDiv.textContent = formatDateRange(gp.sessions);
    
    item.appendChild(leftDiv);
    item.appendChild(dateDiv);
    listContainer.appendChild(item);
  });
}

/**
 * Format duration differences into clean, ticking clock readouts
 */
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

/**
 * Primary countdown update loop (ticks once per second)
 */
function updateCountdowns() {
  if (currentActiveGpIndex === -1) return;
  
  const gp = f1Schedule2026[currentActiveGpIndex];
  const now = new Date();
  
  // Track the next upcoming session details
  let nextSessionName = null;
  let minDiff = Infinity;
  
  Object.keys(gp.sessions).forEach((sessionName) => {
    const utcTime = gp.sessions[sessionName];
    const sessionTime = new Date(utcTime);
    const sanitizedId = sessionName.replace(/\s+/g, '-').toLowerCase();
    
    const countdownEl = document.getElementById(`countdown-${sanitizedId}`);
    const rowEl = document.getElementById(`session-row-${sanitizedId}`);
    
    if (!countdownEl || !rowEl) return;
    
    const diff = sessionTime.getTime() - now.getTime();
    const duration = getSessionDuration(sessionName);
    
    // Clear dynamic states
    rowEl.classList.remove('active-next', 'completed');
    
    if (diff > 0) {
      // Session is in the future
      countdownEl.textContent = formatCountdown(diff);
      
      // Determine if it is the closest upcoming session
      if (diff < minDiff) {
        minDiff = diff;
        nextSessionName = sessionName;
      }
    } else if (diff <= 0 && Math.abs(diff) < duration) {
      // Session is currently LIVE
      countdownEl.textContent = 'LIVE';
      rowEl.classList.add('active-next');
    } else {
      // Session has completed
      countdownEl.textContent = 'DONE';
      rowEl.classList.add('completed');
    }
  });
  
  // Highlight next upcoming session if there are no LIVE sessions
  if (nextSessionName) {
    const isAnyLive = Array.from(document.querySelectorAll('.session-countdown'))
      .some(el => el.textContent === 'LIVE');
      
    if (!isAnyLive) {
      const sanitizedId = nextSessionName.replace(/\s+/g, '-').toLowerCase();
      const nextRow = document.getElementById(`session-row-${sanitizedId}`);
      if (nextRow) {
        nextRow.classList.add('active-next');
      }
    }
  }
}

/**
 * Scan the list and find the correct race weekend to display
 */
function initF1Schedule() {
  const now = new Date();
  
  // Active Grand Prix = first GP where Race finishes in the future
  let activeGpIndex = f1Schedule2026.findIndex(gp => {
    const raceTime = new Date(gp.sessions["Race"]);
    // Keeps GP active up to 3 hours after start time
    return now.getTime() < (raceTime.getTime() + 3.0 * 60 * 60 * 1000);
  });
  
  if (activeGpIndex === -1) {
    activeGpIndex = f1Schedule2026.length - 1; // Default to last round if season is over
  }
  
  // Only rebuild DOM if active GP shifts
  if (activeGpIndex !== currentActiveGpIndex) {
    renderActiveGP(activeGpIndex);
    renderUpcomingList(activeGpIndex);
  }
  
  updateCountdowns();
}

// ==========================================================================
// 4. LIVE MEDIA PLAYER LOGIC
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

// Initialize Wallpaper Engine Media Listeners
function setupMediaListeners() {
  // Title & Artist properties
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

  // Album Artwork
  window.wallpaperRegisterMediaThumbnailListener((event) => {
    const art = document.getElementById('media-album-art');
    if (event.thumbnail) {
      art.src = event.thumbnail;
    } else {
      art.src = '';
    }
  });

  // Track position timeline
  window.wallpaperRegisterMediaTimelineListener((event) => {
    mediaTimeline.position = event.position;
    mediaTimeline.duration = event.duration;
    mediaTimeline.paused = event.paused;
    mediaTimeline.lastUpdate = Date.now();
    
    updateTimelineUI(event.position, event.duration);
  });
}

// High frequency position interpolation (runs every 250ms for smooth motion)
setInterval(() => {
  if (mediaTimeline.duration > 0 && !mediaTimeline.paused) {
    const elapsed = (Date.now() - mediaTimeline.lastUpdate) / 1000;
    const currentPos = Math.min(mediaTimeline.position + elapsed, mediaTimeline.duration);
    updateTimelineUI(currentPos, mediaTimeline.duration);
  }
}, 250);

// ==========================================================================
// 5. AUDIO VISUALIZER LOGIC
// ==========================================================================

const canvas = document.getElementById('audio-visualizer-canvas');
const ctx = canvas.getContext('2d');

let audioArrayCache = new Array(128).fill(0);
let smoothedValues = new Array(64).fill(0);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = 130;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Register Audio Listener
window.wallpaperRegisterAudioListener((audioArray) => {
  audioArrayCache = audioArray;
});

// Animation loop rendering at screen refresh rate
function drawVisualizer() {
  requestAnimationFrame(drawVisualizer);
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const barWidth = 6;
  const barSpacing = 4;
  const totalBars = 64;
  
  // Apply a decay coefficient for organic drop-down physics
  const decay = 0.85;
  for (let i = 0; i < totalBars; i++) {
    // Average left and right channel frequencies
    let rawVal = (audioArrayCache[i] + audioArrayCache[i + totalBars]) / 2;
    
    // Treble frequencies naturally register lower amplitudes; apply linear boost
    let boost = 1.0 + (i / totalBars) * 3.0;
    let val = rawVal * boost * 120; // Scale to pixel heights
    
    val = Math.min(val, canvas.height - 10);
    
    if (val > smoothedValues[i]) {
      smoothedValues[i] = val; // Instant snap up
    } else {
      smoothedValues[i] = smoothedValues[i] * decay + val * (1 - decay); // Damped glide down
    }
  }
  
  const centerX = canvas.width / 2;
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
  
  ctx.shadowBlur = 15;
  ctx.shadowColor = primaryColor;
  
  // Dynamic gradient from bottom transparent to top accent color
  const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
  gradient.addColorStop(0.5, primaryColor);
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)');
  ctx.fillStyle = gradient;
  
  for (let i = 0; i < totalBars; i++) {
    let barHeight = smoothedValues[i];
    if (barHeight < 3) barHeight = 3; // Static baseline glow even when silent
    
    // Draw Right Symmetrical Wing
    let rx = centerX + i * (barWidth + barSpacing);
    let ry = canvas.height - barHeight;
    ctx.fillRect(rx, ry, barWidth, barHeight);
    
    // Draw Left Symmetrical Wing
    let lx = centerX - i * (barWidth + barSpacing) - barWidth;
    let ly = canvas.height - barHeight;
    ctx.fillRect(lx, ly, barWidth, barHeight);
  }
}

// ==========================================================================
// 6. WALLPAPER ENGINE PROPERTY CUSTOMIZATIONS
// ==========================================================================

/**
 * Convert floats R G B (Wallpaper Engine format) to standard RGB/Hex format
 */
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

/**
 * Breakdown color strings into RGB channels for alpha calculations in CSS
 */
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
  return [175, 105, 239]; // Fallback Orchid channels
}

// Setup PropertyListener
window.wallpaperPropertyListener = {
  applyUserProperties: function(properties) {
    // 1. Accent Color
    if (properties.primarycolor) {
      const color = parseWallpaperColor(properties.primarycolor.value);
      document.documentElement.style.setProperty('--primary-color', color);
      
      const channels = extractRgbChannels(color);
      document.documentElement.style.setProperty('--primary-color-rgb', `${channels[0]}, ${channels[1]}, ${channels[2]}`);
    }
    
    // 2. Audio Visualizer Display State
    if (properties.showvisualizer) {
      const showVal = properties.showvisualizer.value;
      const visCanvas = document.getElementById('audio-visualizer-canvas');
      if (showVal) {
        visCanvas.style.display = 'block';
      } else {
        visCanvas.style.display = 'none';
      }
    }
    
    // 3. Audio Visualizer Opacity
    if (properties.visualizeropacity) {
      const opacityVal = properties.visualizeropacity.value / 100;
      const visCanvas = document.getElementById('audio-visualizer-canvas');
      visCanvas.style.opacity = opacityVal;
    }
    
    // 4. Clock format (12h vs 24h)
    if (properties.clockformat) {
      isClock24h = properties.clockformat.value === '24h';
      updateClock();
    }
  }
};

// ==========================================================================
// 7. BOOTSTRAP / INITIALIZATION
// ==========================================================================

// DO NOT wrap listeners in window.onload per Wallpaper Engine specifications
// Trigger clock and schedule tick loops
setInterval(updateClock, 1000);
updateClock();

initF1Schedule();
// Refresh GP schedule index mapping every minute
setInterval(initF1Schedule, 60000);
// Update F1 countdowns every second
setInterval(updateCountdowns, 1000);

setupMediaListeners();
drawVisualizer();
