import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import avatar from '../../assets/avatar.png';
import classNames from '../../utils/classNames';
import { useState } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

interface NavigationProps {
  name: string;
  href: string;
  current: boolean;
}
const navigationInit: NavigationProps[] = [
  { name: 'Part1', href: '/part1', current: true },
  { name: 'Part2', href: '/part2', current: false },
  { name: 'Part3', href: '/part3', current: false },
  { name: 'Part4', href: '/part4', current: false },
  { name: 'Part5', href: '/part5', current: false },
  { name: 'Part6', href: '/part6', current: false },
];

function Header() {
  // get current path
  const path = window.location.pathname;
  const pathSplit = path.split('/');
  const pathName = pathSplit[pathSplit.length - 1];
  console.log(pathName);
  const [open, setOpen] = useState<boolean>(false);
  const [navigation, setNavigation] =
    useState<NavigationProps[]>(navigationInit);
  const onClickNavigation = (itemName: string) => {
    const updateNavigation = navigation.map((item) => ({
      ...item,
      current: item.name === itemName,
    }));
    setNavigation(updateNavigation);
  };
  return (
    <nav className="bg-foreground fixed z-50 w-full">
      <>
        <div className="h-16 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="logo" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.name.toLowerCase() === pathName
                          ? 'bg-muted-foreground text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      onClick={() => onClickNavigation(item.name)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <img
                      className="h-8 w-8 rounded-full"
                      src={avatar}
                      alt="avatar"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          {open && (
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.name.toLowerCase() === pathName
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  onClick={() => onClickNavigation(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </>
    </nav>
  );
}
export default Header;
