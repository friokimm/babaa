function showPopup() {
  const overlay = document.getElementById('overlay');
  const popup = document.getElementById('popup');
  const video = document.getElementById('surpriseVideo');

  overlay.style.display = 'block';
  popup.style.display = 'block';
  video.play(); // Automatically play the video
}

function hidePopup() {
  const overlay = document.getElementById('overlay');
  const popup = document.getElementById('popup');
  const video = document.getElementById('surpriseVideo');

  overlay.style.display = 'none';
  popup.style.display = 'none';
  video.pause(); // Pause the video when the popup is closed
  video.currentTime = 0; // Reset the video to the beginning
}