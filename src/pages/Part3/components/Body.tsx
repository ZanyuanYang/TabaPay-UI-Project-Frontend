interface BodyProps {
  selectedNode: string;
}

function Body(props: BodyProps) {
  const { selectedNode } = props;
  return (
    <section className="p-4">
      <h1 className="text-4xl font-bold">{selectedNode}</h1>
    </section>
  );
}
export default Body;
