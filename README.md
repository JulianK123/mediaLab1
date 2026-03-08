# mediaLab1

This lab aims to build your first HTML5 live stream (HLS) player.

## Libraries used

- **hls.js** v1.5.7 – HLS parsing and segment loading
- **Video.js** v8.6.1 – Video element wrapper

## Features implemented

- Play
- Pause
- Stop
- Jump -5 seconds
- Jump +5 seconds
- Playlist (3 streams)
- Shuffle

## Streams

| Name | URL |
|------|-----|
| Big Buck Bunny | `https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8` |
| Bipbop Advanced | `https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8` |
| Apple Stream | `https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8` |

## Browser testing

| Browser | Version | OS | Result |
|---------|---------|-----|--------|
| Google Chrome | 122.0.6261.112 | Windows 11 |  Works |
| Mozilla Firefox | 124.0.1 | Windows 11 |  Works |

### Chrome 122
- All features work correctly
- HLS stream loads and plays without issues
- Play, Pause, Stop, Jump controls respond correctly
- Playlist switching works
- Shuffle works

### Firefox 124
- All features work correctly
- HLS stream loads and plays without issues
- Play, Pause, Stop, Jump controls respond correctly
- Playlist switching works
- Shuffle works