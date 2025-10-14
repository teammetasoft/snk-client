import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Tooltip } from 'antd';

// Import active icons
import DashboardIconActive from '../../assets/sidebar/dashboard-active.svg';
import SchemesIconActive from '../../assets/sidebar/schemes-active.svg';
import ProductsIconActive from '../../assets/sidebar/products-active.svg';
import TransactionsIconActive from '../../assets/sidebar/transactions-active.svg';
import CustomersIconActive from '../../assets/sidebar/customers-active.svg';
import CMSIconActive from '../../assets/sidebar/cms-active.svg';
import AboutIconActive from '../../assets/sidebar/about-active.svg';
import ContactIconActive from '../../assets/sidebar/contact-active.svg';
import SettingsIconActive from '../../assets/sidebar/settings-active.svg';

// Import inactive icons
import DashboardIcon from '../../assets/sidebar/dashboard.svg';
import SchemesIcon from '../../assets/sidebar/schemes.svg';
import ProductsIcon from '../../assets/sidebar/products.svg';
import TransactionsIcon from '../../assets/sidebar/transactions.svg';
import CustomersIcon from '../../assets/sidebar/customers.svg';
import CMSIcon from '../../assets/sidebar/cms.svg';
import AboutIcon from '../../assets/sidebar/about.svg';
import ContactIcon from '../../assets/sidebar/contact.svg';
import SettingsIcon from '../../assets/sidebar/settings.svg';

function Sidebar({ mobileOpen, setIsMobileOpen }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [cmsExpanded, setCmsExpanded] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon, activeIcon: DashboardIconActive, path: '/dashboard' },
    {
      id: 'schemes', label: 'Schemes', icon: SchemesIcon, activeIcon: SchemesIconActive, path: '/scheme-list',
    },
    {
      id: 'products', label: 'Products', icon: ProductsIcon, activeIcon: ProductsIconActive, path: '/product-list',
    },
    {
      id: 'transactions', label: 'Transactions', icon: TransactionsIcon, activeIcon: TransactionsIconActive, path: '/transaction-list',
    },
    {
      id: 'investors', label: 'Investors', icon: CustomersIcon, activeIcon: CustomersIconActive, path: '/investor-list',
    },
    {
      id: 'cms', label: 'CMS', icon: CMSIcon, activeIcon: CMSIconActive,
      children: [
        { id: 'about', label: 'About', icon: AboutIcon, activeIcon: AboutIconActive, path: '/about' },
        { id: 'contact', label: 'Contact Us', icon: ContactIcon, activeIcon: ContactIconActive, path: '/contact' }
      ]
    }
  ];

  const bottomMenuItem = {
    id: 'settings',
    label: 'Settings',
    icon: SettingsIcon,
    activeIcon: SettingsIconActive,
    path: '/settings'
  };

  const handleMenuClick = (itemId) => {
    if (itemId === 'cms') {
      setCmsExpanded(!cmsExpanded);
    }
  };

  const MenuItem = ({ item, isBottom = false }) => {


    const content = (
      <Link
        to={item.path}
        className={`relative flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'
          } px-3 py-3 rounded-lg cursor-pointer transition-colors ${currentPath === item.path || (item.children && item.children.some(child => child.path === currentPath))
            ? ''
            : 'hover:bg-gray-50'
          }`}
        onClick={() => handleMenuClick(item.id)}
      >
        <img
          src={currentPath === item.path || (item.children && item.children.some(child => child.path === currentPath)) ? item.activeIcon : item.icon}
          alt={item.label}
          className="w-5 h-5"
        />
        {!isCollapsed && (
          <span
            className={`ml-3 text-sm ${currentPath === item.path || (item.children && item.children.some(child => child.path === currentPath)) ? 'text-primary font-bold' : 'text-darkGray font-medium'
              }`}
          >
            {item.label}
          </span>
        )}
      </Link>
    );

    if (isCollapsed) {
      return (
        <Tooltip
          title={item.label}
          placement="right"
          color="#1890FF" // Tailwind's blue-800 for example
        >
          {content}
        </Tooltip>
      );
    }

    return content;
  };

  return (
    <div
      className={`${isCollapsed ? 'w-20' : 'w-64'
        } bg-white border-r border-gray-200 h-screen flex flex-col transition-all duration-300 relative`}
    >
      {/* Header */}
      <div className={`px-6 ${isCollapsed ? "py-[29px]" : "py-6"} border-b border-gray-200 flex items-center justify-between`}>
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-black">S.N.K. Jewellers</h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors ml-auto"
        >
          {isCollapsed ? <FaChevronRight size={12} /> : <FaChevronLeft size={12} />}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => (
            <div key={item.id}>
              <MenuItem item={item} />


              {item.children && (
                <>
                  {!isCollapsed && cmsExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          to={child.path}
                          className={`relative flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors ${currentPath === child.path
                            ? 'bg-blue-50'
                            : 'hover:bg-gray-50'
                            }`}
                        >
                          <img
                            src={currentPath === child.path ? child.activeIcon : child.icon}
                            alt={child.label}
                            className="w-5 h-5"
                          />
                          <span
                            className={`ml-3 text-sm ${currentPath === child.path ? 'text-primary font-bold' : 'text-darkGray'
                              }`}
                          >
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {isCollapsed && (
                    <div className="space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Tooltip
                          key={child.id}
                          title={child.label}
                          placement="right"
                          color="#1890FF"
                        >
                          <Link
                            to={child.path}
                            className={`relative flex items-center justify-center px-3 py-3 rounded-lg cursor-pointer transition-colors ${currentPath === child.path
                              ? 'bg-blue-50'
                              : 'hover:bg-gray-50'
                              }`}
                          >
                            <img
                              src={currentPath === child.path ? child.activeIcon : child.icon}
                              alt={child.label}
                              className="w-5 h-5"
                            />
                          </Link>
                        </Tooltip>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Settings at Bottom */}
      <div className="border-t border-gray-200 p-3">
        <MenuItem item={bottomMenuItem} isBottom />
      </div>
    </div>
  );
}

export default Sidebar;