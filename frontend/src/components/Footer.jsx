import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">YourLogo</h2>
            <p className="mt-2 text-gray-400">
              Your trusted partner in providing high-quality products.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/profile" className="text-gray-400 hover:text-white">
                  Profile
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-400 hover:text-white">
                  Login
                </a>
              </li>
              <li>
                <a href="/signup" className="text-gray-400 hover:text-white">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <ul className="mt-2 flex space-x-4">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <svg
                    className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0H1.325C.594 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.324 0 2.463.099 2.795.143v3.24H18.35c-1.46 0-1.742.695-1.742 1.714v2.25h3.484l-.454 3.622h-3.03V24h5.93C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                  <svg
                    className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.95.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.201-4.92 4.917 0 .39.045.765.126 1.124-4.087-.205-7.713-2.164-10.141-5.144-.422.722-.664 1.561-.664 2.475 0 1.708.87 3.216 2.188 4.099-.807-.025-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.85.171-1.296.171-.314 0-.615-.03-.917-.086.631 1.953 2.445 3.376 4.604 3.415-1.684 1.319-3.808 2.105-6.102 2.105-.39 0-.772-.023-1.151-.067 2.179 1.396 4.768 2.211 7.548 2.211 9.142 0 14.307-7.721 14.307-14.426 0-.22-.004-.44-.015-.659.982-.708 1.835-1.593 2.507-2.605z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <svg
                    className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.059 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.267.059-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.059-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.267-.059 1.647-.07 4.85-.07zm0-2.163C8.741 0 8.332.014 7.052.072 5.766.13 4.607.374 3.514 1.467 2.421 2.56 2.176 3.72 2.118 5.005 2.06 6.285 2.045 6.694 2.045 12s.014 5.715.073 7.995c.058 1.285.303 2.445 1.396 3.538 1.093 1.093 2.253 1.338 3.538 1.396 1.28.058 1.689.073 7.995.073s5.715-.014 7.995-.073c1.285-.058 2.445-.303 3.538-1.396 1.093-1.093 1.338-2.253 1.396-3.538.059-1.28.073-1.689.073-7.995s-.014-5.715-.073-7.995c-.058-1.285-.303-2.445-1.396-3.538-1.093-1.093-2.253-1.338-3.538-1.396-1.28-.058-1.689-.073-7.995-.073s-5.715.014-7.995.073c-1.285.058-2.445.303-3.538 1.396-1.093 1.093-1.338 2.253-1.396 3.538-.059 1.28-.073 1.689-.073 7.995s.014 5.715.073 7.995c.058 1.285.303 2.445 1.396 3.538 1.093 1.093 2.253 1.338 3.538 1.396 1.28.058 1.689.073 7.995.073s5.715-.014 7.995-.073c1.285-.058 2.445-.303 3.538-1.396 1.093-1.093 1.338-2.253 1.396-3.538.059-1.28.073-1.689.073-7.995s-.014-5.715-.073-7.995c-.058-1.285-.303-2.445-1.396-3.538-1.093-1.093-2.253-1.338-3.538-1.396-1.28-.058-1.689-.073-7.995-.073zM12 5.838c-3.404 0-6.162 2.758-6.162 6.162s2.758 6.162 6.162 6.162 6.162-2.758 6.162-6.162-2.758-6.162-6.162-6.162zm0 10.163c-2.208 0-4.001-1.794-4.001-4.001s1.793-4.001 4.001-4.001 4.001 1.794 4.001 4.001-1.793 4.001-4.001 4.001zm6.406-10.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 YourCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
