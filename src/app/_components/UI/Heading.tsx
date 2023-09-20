// Reusable heading component
// Tailwind classes
/**
 * @example
 * <Heading type="h1">Heading 1</Heading>
 */

interface HeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontFamily?: 'font-sans' | 'font-serif' | 'font-mono';
  children: React.ReactNode;
}
const Heading: React.FC<HeadingProps> = ({
  type,
  fontFamily = 'font-sans',
  children,
}) => {
  const classes = {
    h1: 'text-7xl',
    h2: 'text-6xl',
    h3: 'text-5xl',
    h4: 'text-4xl',
    h5: 'text-3xl',
    h6: 'text-2xl',
  };
  const Tag = type;
  return (
    <Tag
      className={`text-balance font-medium tracking-tighter ${classes[type]} ${fontFamily}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;
