const audioInput = document.getElementById("audio-input");
const audioList = document.getElementById("audio-list");
const audioElement = document.getElementById("audio-element");
const audioFiles = [];
// Add selected files to list
audioInput.addEventListener("change", function () {
  // Add selected files to array
  for (const file of this.files) {
    audioFiles.push(file);
  }

  // Render audio file list
  renderAudioList(audioFiles);
});

function renderAudioList(audioFiles) {
  
  // Clear list
  audioList.innerHTML = "";

  // Loop through array and add to list
  for (const file of audioFiles) {
    const li = document.createElement("li");
    li.textContent = file.title;
    audioList.appendChild(li);
  }
}
// Play clicked audio
audioList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    const file = e.target.textContent;
    const src = URL.createObjectURL(
      audioInput.files[Array.from(audioList.children).indexOf(e.target)]
    );
    audioElement.src = src;
    audioElement.play();
  }
});
