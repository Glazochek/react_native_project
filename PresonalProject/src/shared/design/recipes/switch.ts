import * as sem from '../semantics/colors'

export const switchColors = {
  track: { false: sem.switchTrackOff, true: sem.switchTrackOn },
  thumb: (on: boolean) => (on ? sem.accent : sem.switchThumbOff),
  iosBg: sem.switchTrackOff,
}
