import { useCallback, useEffect, useRef, useState } from "react";
import { Howl } from "howler";

type UseNarrationAudioOptions = {
  src?: string;
  autoplay?: boolean;
};

export function useNarrationAudio({ src, autoplay }: UseNarrationAudioOptions) {
  const soundRef = useRef<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const stop = useCallback(() => {
    soundRef.current?.stop();
    setIsPlaying(false);
  }, []);

  const play = useCallback(() => {
    if (!soundRef.current) return;
    soundRef.current.play();
  }, []);

  useEffect(() => {
    stop();
    setIsReady(false);

    if (!src) {
      soundRef.current = null;
      return;
    }

    const sound = new Howl({
      src: [src],
      html5: true,
      volume: 0.85,
      preload: true,
      onload: () => setIsReady(true),
      onplay: () => setIsPlaying(true),
      onend: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
      onloaderror: () => setIsReady(false),
      onplayerror: (_, error) => {
        console.info("Lecture audio bloquée ou indisponible.", error);
        setIsPlaying(false);
      },
    });

    soundRef.current = sound;

    if (autoplay) {
      sound.play();
    }

    return () => {
      sound.stop();
      sound.unload();
    };
  }, [autoplay, src, stop]);

  return {
    isPlaying,
    isReady,
    play,
    stop,
  };
}
