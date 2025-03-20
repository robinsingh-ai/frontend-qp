import React from 'react';
import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Logo size={32} />
              <span className="text-xl font-bold text-gray-900 ml-2">QuickPrompt</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Manage and access your prompts from anywhere with a powerful command palette.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername/quickprompt" className="text-gray-400 hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/yourusername" className="text-gray-400 hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/yourusername/quickprompt" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} QuickPrompt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 