(function () {
  'use strict';

  var videoEl = document.getElementById('hlsVideo');
  var hls = null;
  var currentIndex = 0;

  var streams = [
    { name: 'Big Buck Bunny', url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
    { name: 'Bipbop Advanced', url: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8' },
    { name: 'Apple Stream', url: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8' }
  ];

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

  function renderPlaylist() {
    var el = document.getElementById('playlist');
    el.innerHTML = '';
    streams.forEach(function (s, i) {
      var btn = document.createElement('button');
      btn.textContent = (i + 1) + '. ' + s.name;
      if (i === currentIndex) btn.className = 'active';
      btn.addEventListener('click', function () {
        currentIndex = i;
        loadStream(streams[i].url);
        renderPlaylist();
      });
      el.appendChild(btn);
    });
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

  renderPlaylist();
  loadStream(streams[currentIndex].url);

}());