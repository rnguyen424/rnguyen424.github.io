import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

import beaPerfectPair from "@/assets/audio/bea-perfectpair.mp3";
import pokemonTrack from "@/assets/audio/pokemon.mp3";
import clarityTrack from "@/assets/audio/clarity.mp3";
import laufeyTrack from "@/assets/audio/laufey-from-the-start.mp3";

// Map each section index to its audio source.
const sectionTracks: (string | null)[] = [
  beaPerfectPair, // 0 - HeroCard
  beaPerfectPair, // 1 - Timeline
  beaPerfectPair, // 2 - HobbyIntro
  clarityTrack,   // 3 - Fitness
  pokemonTrack,   // 4 - Pokemon
  laufeyTrack,    // 5 - Food
  null,           // 6 - Travel
  null,           // 7 - Family
  null,           // 8 - ClosingCard
  null,           // 9 - Surprise
];

const sectionLabels = [
  "Intro",
  "Timeline", "Hobbies",
  "Fitness", "Pokémon", "Food", "Travel", "Family",
  "Finale", "Surprise",
];

interface MusicPlayerProps {
  currentSection: number;
  isMuted: boolean;
  onToggleMute: () => void;
}

const MusicPlayer = ({ currentSection, isMuted, onToggleMute }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const currentTrack = sectionTracks[currentSection] ?? null;

  const handleToggleMute = useCallback(() => {
    if (!hasInteracted) setHasInteracted(true);
    onToggleMute();

    if (isMuted) {
      // Will become unmuted
      if (audioRef.current && currentTrack) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      // Will become muted
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isMuted, hasInteracted, currentTrack, onToggleMute]);

  // Switch tracks when section changes
  const prevTrackRef = useRef<string | null>(null);

  useEffect(() => {
    if (!hasInteracted || isMuted) return;

    const audio = audioRef.current;
    if (!audio) return;

    if (currentTrack) {
      // If same track is already playing, do nothing
      if (prevTrackRef.current === currentTrack && !audio.paused) {
        return;
      }

      // Fade out then switch
      const fadeOut = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.05);
        } else {
          clearInterval(fadeOut);
          audio.src = currentTrack;
          prevTrackRef.current = currentTrack;
          audio.volume = 0;
          audio.play().then(() => {
            setIsPlaying(true);
            const fadeIn = setInterval(() => {
              if (audio.volume < 0.95) {
                audio.volume = Math.min(1, audio.volume + 0.05);
              } else {
                audio.volume = 1;
                clearInterval(fadeIn);
              }
            }, 50);
          }).catch(() => setIsPlaying(false));
        }
      }, 50);

      return () => clearInterval(fadeOut);
    } else {
      audio.pause();
      setIsPlaying(false);
      prevTrackRef.current = null;
    }
  }, [currentSection, hasInteracted, isMuted, currentTrack]);

  return (
    <>
      <audio ref={audioRef} loop preload="auto" />

      {/* Music toggle button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        onClick={handleToggleMute}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-card/80 backdrop-blur-md border border-border/50 shadow-lg hover:bg-card transition-colors"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-2"
            >
              <VolumeX className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                Play Music
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="playing"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4 text-primary" />
              {/* Equalizer bars animation */}
              <div className="flex items-end gap-0.5 h-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-primary rounded-full"
                    animate={{
                      height: isPlaying ? ["4px", "16px", "8px", "14px", "4px"] : "4px",
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Now playing indicator */}
      <AnimatePresence>
        {!isMuted && isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/30"
          >
            <Music className="w-3 h-3 text-primary" />
            <span className="text-xs font-body text-muted-foreground">
              {sectionLabels[currentSection] ?? "Playing"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
