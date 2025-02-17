// src/components/Navbar.js

import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import search_icon from '../../assets/search-icon.png'
import logo from '../../assets/iwemi logo.png'
import { GlobalStateContext } from '../../Context/GlobalState';
import RegisterDropdown from '../../pages/Login/RegisterDropdown';


const Navbar = () => {
  const { query, setQuery, setPapers, queryHero, setQueryHero, search, setSearch, bookClicked, setBookClicked, loggedIn, setLoggedIn, fetchPapers } = useContext(GlobalStateContext)


  const [menu, setMenu] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showNoti, setShowNoti] = useState(false)
  const [registerDropdown, setRegisterDropdown] = useState(false)


  const toggleMenu = () => {
    setMenu(!menu)
  }

  const toggleDropdown = (e) => {
    e.preventDefault()
    setRegisterDropdown(!registerDropdown)
  }

  const navigate = useNavigate()
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)
  const lastPath = pathnames[pathnames.length - 1]

  const loginClick = () => {
    navigate('/login')
  }

  const startedClick = () => {
    navigate('/signup')
  }
  const contact = () => {
    navigate('/contact')
  }
  const home = () => {
    navigate('/home')
  }
  const catalogue = () => {
    navigate('/research-resources')
  }

  const about = () => {
    navigate('/about')
  }
  const faqs = () => {
    navigate('/FAQs')
  }

  const profileDashboard = () => {
    navigate('/Profile-dashboard')
  }
  const dashbaord = () => {
    navigate('/dashboard')
  }



  return (
    <header className="dark ">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 nav-section ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl nav-section-div">

          <a
            href=""
            className="flex items-center nav-heading-link"
            onClick={(e) => {
              e.preventDefault();
              home()
            }}
          >
            <img src={logo} className="mr-3 h-6 sm:h-9 nav-logo" alt="Flowbite Logo" />
          </a>



          <div className='navbar-middle flex'>
            <div className=" hide justify-between items-center  lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page" onClick={(e) => {
                      e.preventDefault();
                      home();
                    }}>
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={(e) => {
                      e.preventDefault();
                      dashbaord()
                    }}>
                    Journals
                  </a>
                </li>

                <li>

                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={(e) => {
                      e.preventDefault();
                      catalogue()
                    }}>
                    Thesis
                  </a>
                </li>

                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={(e) => {
                      e.preventDefault();

                    }}>
                    Conference Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                  lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={(e) => {
                      e.preventDefault();

                    }}
                  >
                    Academic Textbooks
                  </a>
                </li>



              </ul>
            </div>
            <div>
              <form class="max-w-md mx-auto search-form">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input 
                  type="search" 
                  id="default-search" 
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={query} onChange={(e) => { setQuery(e.target.value) }} placeholder="Search for research papers...."  />
                  <button 
                  type="submit" 
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={(e) => {
                    e.preventDefault();
                    fetchPapers();
                    setSearch(true)
                  }}
                  >Search</button>
                </div>
              </form>
            </div>           
          </div>
          <div className="flex items-center nav-right">



            {loggedIn ?
              <>
                <div class="icons">
                  <div>
                    <svg class="Icon notification-icon relative" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => { setShowNoti(true) }} onMouseLeave={() => { setShowNoti(false) }}>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V8a6 6 0 00-12 0v6c0 .265-.105.52-.293.707L4 17h5m6 0a3 3 0 11-6 0h6z"></path>
                    </svg>
                    {/*{showNoti && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">No new notifications</p>
                  </div>
                )} */}
                  </div>


                  <div>
                    <svg class="Icon user-icon relative" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onMouseLeave={() => { setShowProfile(false) }} onMouseEnter={() => { setShowProfile(true) }} onClick={(e) => {
                      e.preventDefault();
                      profileDashboard();
                    }}>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A10 10 0 0112 15a10 10 0 016.879 2.804M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {/*{showProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">Profile</p>
  
                </div>
              )}*/}
                  </div>

                </div>
                {/*              <a href='' className='dasboard-profile text-white' >Profile</a>*/}
              </>
              :
              <>
                <div>
                  <a
                    href=""
                    onClick={loginClick}
                    className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 log-in">
                    Log in
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    onClick={toggleDropdown}
                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 get">
                    Get started
                  </a>
                  {registerDropdown && <RegisterDropdown />}
                </div>

              </>
            }

            <div className='menu relative'>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-gray-200 
                dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2" aria-expanded="false">

                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu}><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1
               1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 
               1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" ></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu}><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 
              0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 
              1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

              </button>

              {menu && <div className="dropdown-menu   absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-20">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={(e) => {
                  e.preventDefault();
                  home();
                }}>Home</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={(e) => {
                    e.preventDefault();
                    dashbaord()
                  }}
                >Journals</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={(e) => {
                  e.preventDefault();
                  catalogue()
                }}>Thesis</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={(e) => {
                    e.preventDefault();

                  }}
                >Conference Papers</a>

                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={(e) => {
                  e.preventDefault();

                }} >Academic Papers</a>
              </div>}
            </div>

          </div>


        </div>

        <div className='breadcrumb'>
          <nav className="flex  dark" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Iwemi Research
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>

                  <Link to={`/${lastPath}`} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                    {lastPath.charAt(0).toUpperCase() + lastPath.slice(1)}
                  </Link>

                </div>
              </li>

            </ol>
          </nav>
        </div>


      </nav>

    </header>
  );
};

export default Navbar;
