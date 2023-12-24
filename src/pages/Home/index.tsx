import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="p-4">
      <ul className="underline text-xl">
        <li>
          <Link to="/part1">Part1</Link>
        </li>
        <li>
          <Link to="/part2">Part2</Link>
        </li>
        <li>
          <Link to="/part3">Part3</Link>
        </li>
        <li>
          <Link to="/part4">Part4</Link>
        </li>
        <li>
          <Link to="/part5">Part5</Link>
        </li>
        <li>
          <Link to="/part6">Part6</Link>
        </li>
      </ul>
    </main>
  );
}

export default Home;
