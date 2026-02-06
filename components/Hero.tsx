"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import type { TabType } from "@/app/page";

// Tipos para YouTube IFrame API
interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  setVolume: (volume: number) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  destroy: () => void;
}

interface YTPlayerEvent {
  target: YTPlayer;
  data?: number;
}

interface YTPlayerConstructor {
  new (elementId: string, options: {
    events: {
      onReady?: (event: YTPlayerEvent) => void;
      onStateChange?: (event: YTPlayerEvent) => void;
    };
  }): YTPlayer;
}

interface YTAPI {
  Player: YTPlayerConstructor;
  PlayerState: {
    PLAYING: number;
  };
}

declare global {
  interface Window {
    YT: YTAPI;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface HeroProps {
  setActiveTab: (tab: TabType) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<YTPlayer | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Si la API ya está cargada
    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }

    // Cargar la API de YouTube
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

    function createPlayer() {
      const ytPlayer = new window.YT.Player("hero-youtube-player", {
        events: {
          onReady: (event: YTPlayerEvent) => {
            event.target.mute();
            event.target.playVideo();
            setPlayer(event.target);
            setDuration(event.target.getDuration());
          },
          onStateChange: (event: YTPlayerEvent) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setDuration(event.target.getDuration());
            }
          }
        },
      });
    }

    return () => {
      if (player) {
        player.destroy();
      }
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  // Actualizar progreso cada 500ms
  useEffect(() => {
    if (player) {
      progressInterval.current = setInterval(() => {
        const current = player.getCurrentTime();
        const total = player.getDuration();
        setCurrentTime(current);
        setDuration(total);
        if (total > 0) {
          setProgress((current / total) * 100);
        }
      }, 500);
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [player]);

  const toggleMute = useCallback(() => {
    if (player) {
      if (isMuted) {
        player.unMute();
        player.setVolume(100);
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  }, [player, isMuted]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (player && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const seekTime = percentage * duration;
      player.seekTo(seekTime, true);
      setProgress(percentage * 100);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden bg-black text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-gold-glow)] via-black/0 to-transparent pointer-events-none opacity-40 mix-blend-screen" />
      
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Glowing Ring Effect */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] aspect-square rounded-full border border-[var(--color-gold-600)] shadow-[0_0_100px_rgba(212,175,55,0.15)] opacity-40 pointer-events-none" />
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[110%] aspect-square rounded-full border border-[var(--color-gold-500)] opacity-20 pointer-events-none animate-pulse" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl flex flex-col items-center text-center">
        
        {/* Main Title */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative z-20"
        >
            <h1 className="font-display font-light text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60">
              Eleva tu marca<br />
              <span className="font-normal text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"> a la nube</span>
            </h1>
        </motion.div>

        {/* Subtitle Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-20"
        >
          <div className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-xl md:text-2xl font-light text-white/90">
            Impulsa tu marca con una web a tu medida
          </h2>
        </motion.div>

       
      
        {/* Portfolio Card */}
        
      </div> 
      
       {/* Bottom Text */}
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }} 
        className="container max-w-4xl mx-auto px-6 mt-24 text-center pb-20 relative z-20"
       >
         <h3 className="text-xl md:text-3xl font-light leading-relaxed text-white/80">
            Único para tu marca <span className="inline-block px-2 py-0 border border-white/20 bg-white/5 mx-1 align-middle">Personalización total</span> Crecimiento seguro <span className="bg-white text-black px-2 font-bold inline-block mx-1">NUVEMN</span> Tu espacio digital, seguro en la nube.
         </h3>
       </motion.div>
    </section>
  );
}
