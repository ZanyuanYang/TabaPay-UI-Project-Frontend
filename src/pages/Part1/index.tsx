import TreeMenu from './components/TreeMenu';
import treeData from '@/datas/treeData';

function Part1() {
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-bold">Part 1</h1>
      <h2 className="">A Dynamic Tree Menu:</h2>
      <TreeMenu nodes={treeData} />
    </main>
  );
}

export default Part1;
