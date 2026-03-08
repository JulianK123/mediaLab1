(function () {
  'use strict';

  var videoEl = document.getElementById('hlsVideo');

  var currentStream = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

  function loadStream(url) {
    if (Hls.isSupported()) {
      var hls = new Hls();
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

  loadStream(currentStream);

}());