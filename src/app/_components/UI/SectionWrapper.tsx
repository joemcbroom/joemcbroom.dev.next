const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className='container mx-auto flex max-w-6xl flex-col md:grid md:grid-cols-2'>
      {children}
    </section>
  );
};

export default SectionWrapper;
