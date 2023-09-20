interface InverseWrapperProps {
  children: React.ReactNode;
}
const InverseWrapper: React.FC<InverseWrapperProps> = ({ children }) => (
  <section className='z-0 w-full bg-neutral-800 p-12 text-sm text-neutral-50 dark:bg-neutral-50 dark:text-neutral-800'>
    {children}
  </section>
);

export default InverseWrapper;
