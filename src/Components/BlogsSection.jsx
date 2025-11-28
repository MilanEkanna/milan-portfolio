import React, { useEffect } from 'react';

const blogs = [
  {
    id: 1,
    category: 'Productivity',
    date: 'August 17, 2024',
    title: 'Maximizing Efficiency with Automation: A Beginner\'s Guide',
    excerpt: 'Learn how automation can transform your business operations, streamline workflows, and save valuable time in this comprehensive beginner\'s guide.',
    author: { name: 'Milan Ekanna ', role: 'MERN Full-Stack Developer', avatar: 'mypic.jpg' },
    readTime: '7 mins read',
    href: '#',
  },
  {
    id: 2,
    category: 'Industry Insights',
    date: 'August 10, 2024',
    title: 'The Future of SaaS: Trends to Watch in 2024',
    excerpt: 'Explore the emerging trends in the SaaS industry that are set to shape the future, from AI integration to personalized user experiences.',
    author: { name: 'Milan Ekanna ', role: 'MERN Full-Stack Developer', avatar: 'mypic.jpg' },
    readTime: '6 mins read',
    href: '#',
  },
  {
    id: 3,
    category: 'Technology',
    date: 'August 3, 2024',
    title: 'Building a Scalable Architecture: Key Considerations',
    excerpt: 'Discover the critical elements of building a scalable software architecture that can grow with your business needs and handle increased demand effortlessly.',
    author: { name: 'Milan Ekanna ', role: 'MERN Full-Stack Developer', avatar: 'mypic.jpg' },
    readTime: '8 mins read',
    href: '#',
  },
  {
    id: 4,
    category: 'Technology',
    date: 'August 3, 2024',
    title: 'Building a Scalable Architecture: Key Considerations',
    excerpt: 'Discover the critical elements of building a scalable software architecture that can grow with your business needs and handle increased demand effortlessly.',
    author: { name: 'Milan Ekanna ', role: 'MERN Full-Stack Developer', avatar: 'mypic.jpg' },
    readTime: '8 mins read',
    href: '#',
  },
  {
    id: 5,
    category: 'Technology',
    date: 'August 3, 2024',
    title: 'Building a Scalable Architecture: Key Considerations',
    excerpt: 'Discover the critical elements of building a scalable software architecture that can grow with your business needs and handle increased demand effortlessly.',
    author: { name: 'Milan Ekanna ', role: 'MERN Full-Stack Developer', avatar: 'mypic.jpg' },
    readTime: '8 mins read',
    href: '#',
  },
  {
    id: 6,
    category: 'Technology',
    date: 'August 3, 2024',
    title: 'Building a Scalable Architecture: Key Considerations',
    excerpt: 'Discover the critical elements of building a scalable software architecture that can grow with your business needs and handle increased demand effortlessly.',
    author: { name: 'Milan Ekanna ', role: 'MERN Full-Stack Developer', avatar: 'mypic.jpg' },
    readTime: '8 mins read',
    href: '#',
  },
];

const BlogsSection = () => {
  useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            
        });
    }, []);
  return (
    <section className=" py-6 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left mb-12">
          <div className="flex flex-col gap-2 mb-2 md:mb-4">
          <h2 className="text-4xl font-serif font-semibold text-[#452829] ">
            Latest Blog Post
          </h2>
          <span className="w-24 h-[4px] bg-[#452829] rounded"></span>
         
        </div>

          <p className="mt-3 text-lg  text-start font-serif">
            Thoughts on MERN stack, Javascript and related libraries and frameworks Vision for building meaningful products.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid max-w-6xl mx-auto grid-cols-1 gap-8 lg:grid-cols-3 ">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-[#3B241C] rounded-xl overflow-hidden shadow-lg border border-[#452829]/20 
                         hover:shadow-xl hover:border-[#452829]/40 transition-all duration-300 transform  hover:scale-[1.02] cursor-pointer"
            >
              {/* Category Tag */}
              <div className="px-5 pt-5">
                <span className="inline-block rounded-full bg-[#FBF3D1] px-3 py-1 text-xs  text-[#452829] font-bold">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-x-2 text-sm text-[#FBF3D1]/60 mt-2">
                  <time dateTime={blog.date}>{blog.date}</time>
                  <span aria-hidden="true">•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-6 text-[#FBF3D1] group-hover:text-[#FBF3D1]">
                  <a href={blog.href} className="focus:outline-none">
                    {blog.title}
                  </a>
                </h3>

                <p className="mt-3 text-[#FBF3D1]/80 leading-6">
                  {blog.excerpt}
                </p>
              </div>

              {/* Author */}
              <div className="px-5 pb-5 flex items-center gap-x-3 border-t border-[#452829]/10 pt-4">
                <img
                  alt={blog.author.name}
                  src={blog.author.avatar}
                  className="h-9 w-9 rounded-full object-cover ring-1 ring-[#452829]/30"
                />
                <div>
                  <p className="text-sm font-medium text-[#FBF3D1]">{blog.author.name}</p>
                  <p className="text-xs text-[#FBF3D1]/60">{blog.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button — Medium Link */}
        <div className="mt-16 text-center">
          <a
            href="https://medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#452829] hover:bg-[#5A3625] 
                       text-[#FBF3D1] font-medium rounded-lg shadow-md 
                       transition-all duration-300 border border-[#FBF3D1]/20 
                       hover:border-[#FBF3D1]/50"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.5 3.5h-15a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1zm-1 15h-13v-13h13v13z" />
              <path d="M8.5 8.5h7v1h-7zM8.5 11h7v1h-7z" />
              <path d="M12 13.5h3.5v1H12z" />
            </svg>
            Read More on Medium
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;