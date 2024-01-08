interface BodyProps {
  activeTab: string;
}

function Body(props: BodyProps) {
  const { activeTab } = props;
  return (
    <section className="p-4">
      <h1 className="text-4xl font-bold">{activeTab}</h1>
    </section>
  );
}
export default Body;
