export function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Lakshay Verma. All rights reserved.
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:lakshayverma544@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
