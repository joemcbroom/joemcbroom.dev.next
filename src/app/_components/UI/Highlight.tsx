interface HighlightProps {
  variant?: 'inverse';
  children: React.ReactNode;
}
const Highlight: React.FC<HighlightProps> = ({ children, variant }) => {
  const highlightColor =
    variant === 'inverse'
      ? 'before:bg-sky-500 before:dark:bg-sky-300'
      : 'before:bg-sky-200 dark:before:bg-sky-800';
  return (
    <span className='relative z-20'>
      <span
        className={
          'relative before:absolute before:left-[1%] before:top-[13%] before:-z-10 before:h-[65%] before:w-full  before:content-[""] ' +
          highlightColor
        }
      >
        {children}
      </span>
    </span>
  );
};

export default Highlight;
