import React, { useState } from "react";
import { Logo, Button, Menu, Avatar } from "..";
import { Link, NavLink } from "react-router-dom";
import { FiLogIn, FiMenu } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const user = useAuth();

  return (
    <header className="shadow-sm sticky top-0 backdrop-blur-sm bg-[#fffefc80] z-20">
      <div className="box flex justify-between items-center py-3">
        <Logo />
        {/* Desktop navbar */}
        <nav className="hidden md:block">
          {/* Navbar links */}
          <ul className="flex gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full 
                  ${isActive ? "after:scale-x-100" : "after:scale-x-0"} 
                  after:transition after:duration-300 after:origin-center font-semibold text-gray-600`
                }
                end
              >
                Home
              </NavLink>
            </li>

            {user && user?.isAdmin && (
              <li>
                <NavLink
                  to="/dashboard/users"
                  className={({ isActive }) =>
                    `relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full 
                    ${isActive ? "after:scale-x-100" : "after:scale-x-0"} 
                    after:transition after:duration-300 after:origin-center font-semibold text-gray-600`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to="/recipe"
                className={({ isActive }) =>
                  `relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full 
                  ${isActive ? "after:scale-x-100" : "after:scale-x-0"} 
                  after:transition after:duration-300 after:origin-center font-semibold text-gray-600`
                }
                end
              >
                Recipes
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full 
                  ${isActive ? "after:scale-x-100" : "after:scale-x-0"} 
                  after:transition after:duration-300 after:origin-center font-semibold text-gray-600`
                }
                end
              >
                Blogs
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full 
                  ${isActive ? "after:scale-x-100" : "after:scale-x-0"} 
                  after:transition after:duration-300 after:origin-center font-semibold text-gray-600`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipe/add"
                className={({ isActive }) =>
                  `relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full 
                  ${isActive ? "after:scale-x-100" : "after:scale-x-0"} 
                  after:transition after:duration-300 after:origin-center font-semibold text-gray-600`
                }
              >
                Add Recipe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipe/generate"
                className={({ isActive }) =>
                  `relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full 
                  ${isActive ? "after:scale-x-100" : "after:scale-x-0"} 
                  after:transition after:duration-300 after:origin-center font-semibold text-gray-600`
                }
              >
                Cook Here
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/blog/add"
                className={({ isActive }) =>
                  `relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full 
                  ${isActive ? "after:scale-x-100" : "after:scale-x-0"} 
                  after:transition after:duration-300 after:origin-center font-semibold text-gray-600`
                }
              >
                Add Blog
              </NavLink>
            </li> */}
          </ul>
        </nav>

        {/* Sign in button
        {user ? (
          <Avatar />
        ) : (
          <Link to="/auth/signin" className="hidden md:block">
            <Button
              content="Sign In"
              customCss="max-w-max rounded-full"
              icon={<FiLogIn />}
            />
          </Link>
        )} */}

        {/* Menu button */}
        <FiMenu
          className="block md:hidden text-xl cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />

        {/* Mobile navbar */}
        <Menu setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} user={user} />
      </div>
    </header>
  );
};

export default Header;
