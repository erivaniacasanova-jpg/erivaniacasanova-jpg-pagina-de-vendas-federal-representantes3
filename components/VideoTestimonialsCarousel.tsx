import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export const VIDEO_TESTIMONIALS = [
  "https://videos.suanetturbinada.com.br/1.mp4",
  "https://videos.suanetturbinada.com.br/2.mp4",
  "https://videos.suanetturbinada.com.br/3.mp4",
  "https://videos.suanetturbinada.com.br/4.mp4",
  "https://videos.suanetturbinada.com.br/5.mp4",
  "https://videos.suanetturbinada.com.br/6.mp4",
  "https://videos.suanetturbinada.com.br/7.mp4",
];

interface VideoCardProps {
  src: string;
  index: number;
  activeVideoIndex: number | null;
  onSelectPlay: (index: number) => void;
  onVideoEnd: () => void;
  dragDistanceRef: React.MutableRefObject<number>;
}

const VideoCard: React.FC<VideoCardProps> = ({
  src,
  index,
  activeVideoIndex,
  onSelectPlay,
  onVideoEnd,
  dragDistanceRef,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isActive = activeVideoIndex === index;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isActive) {
      video.pause();
      try {
        video.currentTime = 0.001;
      } catch {
        // Ignora caso não inicializado
      }
      setIsPlaying(false);
    }
  }, [isActive]);

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Se houve arrasto significativo do mouse/toque, não alterna o play
    if (dragDistanceRef.current > 10) {
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    if (!isActive) {
      onSelectPlay(index);
      try {
        video.currentTime = 0;
      } catch {}
      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            video.muted = true;
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          });
      }
    } else {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => setIsPlaying(true)).catch(() => {});
        }
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    const video = videoRef.current;
    if (video) {
      try {
        video.currentTime = 0.001;
      } catch {}
    }
    onVideoEnd();
  };

  return (
    <div
      id={`video-testimonial-card-${index}`}
      onClick={handleCardClick}
      className={`relative w-[64vw] min-w-[210px] max-w-[260px] h-[330px] sm:w-60 sm:h-[370px] md:w-64 md:h-[400px] shrink-0 rounded-2xl overflow-hidden border-2 bg-slate-950 cursor-pointer select-none transition-colors ${
        isActive
          ? 'border-purple-400 ring-2 ring-purple-500/60 z-10 shadow-lg'
          : 'border-purple-500/40 hover:border-purple-400'
      }`}
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      <video
        ref={videoRef}
        src={`${src}#t=0.001`}
        muted={false}
        loop={false}
        playsInline
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        preload="metadata"
        onEnded={handleEnded}
        crossOrigin="anonymous"
        className="w-full h-full object-cover pointer-events-none"
      />

      {/* Botão de Play / Pause Centralizado */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center ${
            isActive && isPlaying
              ? 'bg-black/75 text-white border border-white/40'
              : 'bg-indigo-600 text-white shadow-lg border border-indigo-400/40'
          }`}
        >
          {isActive && isPlaying ? (
            <Pause className="w-6 h-6 fill-current" />
          ) : (
            <Play className="w-6 h-6 fill-current ml-0.5" />
          )}
        </div>
      </div>
    </div>
  );
};

export const VideoTestimonialsCarousel: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Controle de arrasto com mouse para Desktop
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const handleSelectPlay = (index: number) => {
    setActiveVideoIndex(index);
  };

  const handleVideoEnd = () => {
    setActiveVideoIndex(null);
  };

  // Touch tracking para mobile - sem bloquear a rolagem vertical
  const handleTouchStart = () => {
    dragDistanceRef.current = 0;
  };

  const handleTouchMove = () => {
    dragDistanceRef.current += 1;
  };

  // Mouse drag para desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0 || !containerRef.current) return;
    isMouseDownRef.current = true;
    dragDistanceRef.current = 0;
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftStartRef.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const diff = (x - startXRef.current);
    if (Math.abs(diff) > 4) {
      dragDistanceRef.current = Math.abs(diff);
      containerRef.current.scrollLeft = scrollLeftStartRef.current - diff;
    }
  };

  const handleMouseUpOrLeave = () => {
    isMouseDownRef.current = false;
  };

  return (
    <div 
      id="video-testimonials-section" 
      className="w-full my-8 md:my-12"
    >
      <div className="max-w-4xl mx-auto text-center px-4 mb-6">
        <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
          Veja o que nossos associados estão falando. Toque em qualquer vídeo para assistir com som.
        </h3>
      </div>

      {/* Contêiner de Rolagem 100% Livre: Permite rolagem da página verticalmente E rolagem do carrossel horizontalmente */}
      <div
        id="video-carousel-container"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className="w-full overflow-x-auto no-scrollbar py-3 px-4 sm:px-6 cursor-grab active:cursor-grabbing flex gap-3 sm:gap-4 select-none"
        style={{
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x pan-y',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {VIDEO_TESTIMONIALS.map((videoUrl, idx) => (
          <VideoCard
            key={idx}
            src={videoUrl}
            index={idx}
            activeVideoIndex={activeVideoIndex}
            onSelectPlay={handleSelectPlay}
            onVideoEnd={handleVideoEnd}
            dragDistanceRef={dragDistanceRef}
          />
        ))}
      </div>
    </div>
  );
};
