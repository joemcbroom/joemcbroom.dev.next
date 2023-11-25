const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className='mx-auto flex max-w-5xl flex-col md:grid md:grid-cols-2'>
      {children}
    </section>
  );
};

export default SectionWrapper;
