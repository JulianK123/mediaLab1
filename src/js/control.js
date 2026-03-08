(function () {
  'use strict';

  var videoEl = document.getElementById('hlsVideo');
  var hls = null;

  function loadStream(url) {
    if (hls) { hls.destroy(); }
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(videoEl);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        videoEl.play();
      });
    } else if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {
      videoEl.src = url;
      videoEl.play();
    }
  }

  document.getElementById('btnPlay').addEventListener('click', function () {
    videoEl.play();
  });

  document.getElementById('btnPause').addEventListener('click', function () {
    videoEl.pause();
  });

  document.getElementById('btnStop').addEventListener('click', function () {
    videoEl.pause();
    videoEl.currentTime = 0;
  });

  document.getElementById('btnBack').addEventListener('click', function () {
    videoEl.currentTime = Math.max(0, videoEl.currentTime - 5);
  });

  document.getElementById('btnForward').addEventListener('click', function () {
    videoEl.currentTime = Math.min(videoEl.duration || Infinity, videoEl.currentTime + 5);
  });

  loadStream('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');

}());