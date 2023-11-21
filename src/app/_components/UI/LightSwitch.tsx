import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { RefObject, useEffect, useRef, useState } from 'react';
import lightSwitch from '@/_assets/animation/light-switch.json';

const LightSwitch: React.FC<{ isDark: boolean; toggleTheme: () => void }> = ({
  isDark,
  toggleTheme,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [showSwitch, setShowSwitch] = useState(false);

  const getDurations = (lottieRef: RefObject<LottieRefCurrentProps>) => {
    return {
      duration: lottieRef.current!.getDuration(true)!,
      durationInMs: lottieRef.current!.getDuration(false)!,
    };
  };

  useEffect(() => {
    if (!lottieRef.current) return;
    const { duration } = getDurations(lottieRef);
    lottieRef.current.setDirection(!isDark ? 1 : -1);
    lottieRef.current.goToAndPlay(!isDark ? 0 : duration - 1, true);
  }, [isDark]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span
      className={`relative rotate-90 cursor-pointer transition-opacity md:absolute md:-right-16 md:-top-6  ${
        showSwitch ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={toggleTheme}
    >
      <Lottie
        animationData={lightSwitch}
        autoplay={false}
        loop={false}
        lottieRef={lottieRef}
        className='w-8'
        onDOMLoaded={() => {
          if (!lottieRef.current) return;
          const { duration, durationInMs } = getDurations(lottieRef);
          if (!isDark) lottieRef.current.goToAndStop(duration - 1, true);
          setTimeout(() => setShowSwitch(true), durationInMs * 1000);
        }}
      />
    </span>
  );
};

export default LightSwitch;
