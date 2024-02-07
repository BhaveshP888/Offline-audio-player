
// Select DOM elements
const folderInput = document.querySelector('#folder-input');
const audioList = document.querySelector('#audio-list');
const audioPlayer = document.querySelector('#audio-player');

// Track list and current track index
let tracks = [];
let currentIndex = 0; 

// Load audio files
folderInput.addEventListener('change', loadFiles);

function loadFiles(event) {
  audioList.innerHTML = '';
  tracks = [];

  for(const file of event.target.files) {
    const listItem = createListItem(file);
    audioList.appendChild(listItem);

    tracks.push({
      name: file.name,
      url: URL.createObjectURL(file)
    });
  }
}

// Create list item 
function createListItem(file) {
  const listItem = document.createElement('li');
  listItem.textContent = file.name;
  listItem.addEventListener('click', playTrack);

  return listItem;
}

// Play a track
function playTrack(event) {
  currentIndex = tracks.indexOf(event.currentTarget.track);  
  audioPlayer.src = tracks[currentIndex].url;
  audioPlayer.play(); 
}

// Play next track
function playNext() {
  currentIndex++;
  if (currentIndex >= tracks.length) {
    currentIndex = 0;
  }
  playTrack(tracks[currentIndex]);
}

// Play previous track  
// Add other functions 

// Hook up buttons
playBtn.addEventListener('click', playNext); 
prevBtn.addEventListener('click', playPrev);
// etc

