'use client';


const categories = [
  {
    title: 'Guides',
    posts: [
      { id: 1, title: 'Coventry City Guide Including Coventry Hotels', summary: 'The choices most commonly seen...', time: '2 minutes reading' },
      { id: 2, title: 'Planning a Trip to Japan in the Time of Covid', summary: 'Whether you’re daydreaming...', time: '5 minutes reading' },
      { id: 3, title: 'How to Choose an African Safari (That’s Right for You)', summary: 'In my time heading to the heart...', time: '10 minutes reading' },
      { id: 4, title: 'Coventry City Guide Again', summary: 'The choices most commonly seen...', time: '2 minutes reading' },
    ],
  },
  {
    title: 'Travels',
    posts: [
      { id: 5, title: 'Coventry City Guide Including Coventry Hotels', summary: 'The choices most commonly seen...', time: '2 minutes reading' },
      { id: 6, title: 'Planning a Trip to Japan in the Time of Covid', summary: 'Whether you’re daydreaming...', time: '5 minutes reading' },
      { id: 7, title: 'How to Choose an African Safari (That’s Right for You)', summary: 'In my time heading to the heart...', time: '10 minutes reading' },
    ],
  },
  {
    title: 'Cities',
    posts: [
      { id: 8, title: 'Coventry City Guide Including Coventry Hotels', summary: 'The choices most commonly seen...', time: '2 minutes reading' },
      { id: 9, title: 'Planning a Trip to Japan in the Time of Covid', summary: 'Whether you’re daydreaming...', time: '5 minutes reading' },
      { id: 10, title: 'How to Choose an African Safari (That’s Right for You)', summary: 'In my time heading to the heart...', time: '10 minutes reading' },
    ],
  },
];

export default function Categories() {
  return (
    <section className="px-6 py-12 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Categories</h1>

      {categories.map((section) => (
        <div key={section.title} className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium">{section.title}</h2>
            <div className="space-x-2">
              <button className="px-2 py-1 border rounded">&lt;</button>
              <button className="px-2 py-1 border rounded">&gt;</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto">
            {section.posts.map((post) => (
              <div key={post.id} className="bg-white shadow-sm border p-4">
                <div className="bg-gray-200 h-32 w-full mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Image</span>
                </div>
                <div className="text-xs text-gray-500 mb-1">#Guides • {post.time}</div>
                <h3 className="font-medium mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{post.summary}</p>
                <button className="bg-black text-white px-4 py-2 text-sm">Read more</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
