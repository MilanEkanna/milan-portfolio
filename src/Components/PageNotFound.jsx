import React from 'react';

const PageNotFound = () => {
  return (
    <div className=" text-gray-800 dark:text-gray-100 transition-colors duration-200 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 flex-1 flex flex-col items-center justify-center">
        <div className="max-w-md w-full text-center">

          <div className="mb-8 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-24 text-[#452829] dark:text-[#6d4a45]">
              <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="text-5xl font-bold mb-4 text-[#452829] dark:text-[#6d4a45]">404</h1>
          <h2 className="text-2xl font-semibold mb-4 text-[#452829] dark:text-[#6d4a45]">Page Not Found</h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/"
                className="px-6 py-3 bg-[#452829] dark:bg-[#6d4a45] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              Go Back Home
            </a>
            <a href="/"
                className="px-6 py-3 border border-[#452829] dark:border-[#6d4a45] rounded-lg font-medium hover:bg-[#452829]/10 dark:hover:bg-[#6d4a45]/10 transition-colors">
              Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;