const treeData = [
  {
    title: 'Root',
    children: [
      {
        title: 'Parent A',
        children: [
          { title: 'Child A1' },
          {
            title: 'Child Parent A2',
            children: [{ title: 'Child A2-1' }, { title: 'Child A2-2' }],
          },
        ],
      },
      {
        title: 'Parent B',
        children: [
          { title: 'Child B1' },
          { title: 'Child B2' },
          {
            title: 'Child Parent B3',
            children: [
              { title: 'Child B3-1' },
              { title: 'Child B3-2' },
              { title: 'Child B3-3' },
            ],
          },
        ],
      },
    ],
  },
];
export default treeData;
