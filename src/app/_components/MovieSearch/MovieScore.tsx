import { cn } from '@/_lib/utils';

interface MovieScoreProps {
  voteAverage?: number;
  voteCount?: number;
}

const MovieScore: React.FC<MovieScoreProps> = ({ voteAverage, voteCount }) => {
  const colorClass: Record<number, string> = {
    10: 'text-teal-500',
    9: 'text-emerald-500',
    8: 'text-green-500',
    7: 'text-lime-500',
    6: 'text-yellow-500',
    5: 'text-orange-500',
    4: 'text-red-500',
    3: 'text-red-700',
    2: 'text-red-800',
    1: 'text-red-950',
  };

  if (!voteAverage) return null;

  // round vote to nearest whole number
  const roundedVote = Math.round(voteAverage);

  return (
    <div
      className={cn(
        'slider-image-content pointer-events-none absolute left-3/4 top-6 z-50 flex -translate-x-1/2 items-center rounded border-2 border-current bg-white px-2 py-1',
        colorClass[roundedVote],
      )}
    >
      <span className='font-bold text-lg'>{roundedVote}</span>
      <span className='ml-1 text-gray-500 text-sm'>/10</span>
      {voteCount && (
        <span className='text-xm ml-1 whitespace-nowrap text-gray-500'>
          ({voteCount} votes)
        </span>
      )}
    </div>
  );
};

export default MovieScore;
