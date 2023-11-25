import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/_components/ui/tooltip';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useRef, useState } from 'react';
import lightBulb from '@/_assets/animation/lightbulb.json';
import { cn } from '@/_lib/utils';

const LightSwitch: React.FC<{ isDark: boolean; toggleTheme: () => void }> = ({
  isDark,
  toggleTheme,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [showSwitch, setShowSwitch] = useState(false);

  const startingFrame = 42;
  const endingFrame = 120;

  const handleClick = () => {
    if (!lottieRef.current) return;
    lottieRef.current.setSpeed(2);
    if (isDark) {
      lottieRef.current.playSegments([startingFrame, endingFrame], true);
    } else {
      lottieRef.current.playSegments([endingFrame, startingFrame], true);
    }
    setTimeout(
      () => {
        toggleTheme();
      },
      isDark ? 290 : 490,
    );
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={cn(
              `relative cursor-pointer transition-opacity md:absolute md:-right-10 md:-top-7`,
              showSwitch ? 'opacity-100' : 'opacity-0',
            )}
            onClick={handleClick}
          >
            <Lottie
              animationData={lightBulb}
              autoplay={false}
              loop={false}
              lottieRef={lottieRef}
              className='w-20'
              onDOMLoaded={() => {
                if (!lottieRef.current) return;
                if (isDark) {
                  lottieRef.current.goToAndStop(startingFrame, true);
                } else {
                  lottieRef.current.goToAndStop(endingFrame, true);
                }
                setTimeout(() => setShowSwitch(true), 500);
              }}
            />
          </span>
        </TooltipTrigger>
        <TooltipContent className='pointer-events-none'>
          <span className='text-sm'>Toggle Theme</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LightSwitch;
