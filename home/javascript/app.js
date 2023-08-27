
class _app {
  id = 0;
  videoElement = null;
  audioElement = null;
  musicVolume = 0.2;
  musicFadeIn = 3000;
  skippedIntro = false;
  backgroundToggler = false;
  shouldIgnoreVideo = false;
  effects = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'];
  brandDescription = ['tear', 'me', 'to', 'pieecs', '⛧'];
}

const app = new _app();
