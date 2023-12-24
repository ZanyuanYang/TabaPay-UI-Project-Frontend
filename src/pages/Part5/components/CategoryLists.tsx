import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Tabapay Launch Day',
    href: '#',
    description:
      'TabaPay, the leading instant money movement platform, enables secure, reliable, and lower cost instant payments for Fintech innovators.',
    imageUrl:
      'https://images.unsplash.com/photo-1498598457418-36ef20772bb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'Oct 01, 2023',
    datetime: '2020-10-01',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 2,
    title: 'Tabapay Launch Day',
    href: '#',
    description:
      'TabaPay, the leading instant money movement platform, enables secure, reliable, and lower cost instant payments for Fintech innovators.',
    imageUrl:
      'https://images.unsplash.com/photo-1498598457418-36ef20772bb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'Oct 01, 2023',
    datetime: '2020-10-01',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 3,
    title: 'Tabapay Launch Day',
    href: '#',
    description:
      'TabaPay, the leading instant money movement platform, enables secure, reliable, and lower cost instant payments for Fintech innovators.',
    imageUrl:
      'https://images.unsplash.com/photo-1498598457418-36ef20772bb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'Oct 01, 2023',
    datetime: '2020-10-01',
    category: { title: 'Marketing', href: '#' },
  },
];

function CategoryLists() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-start justify-between"
          >
            <Link to={post.href} className="relative w-full">
              <img
                src={post.imageUrl}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </Link>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time
                  dateTime={post.datetime}
                  className="text-muted-foreground"
                >
                  {post.date}
                </time>
                <Link
                  to={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-gray-600">
                  <Link to={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
export default CategoryLists;
