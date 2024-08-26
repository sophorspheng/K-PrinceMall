 <div className="p-8 w-full h-screen">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 bg-white left-0 w-full z-50  p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="font-semibold  text-lg text-center font-serif xl:hidden pb-5">
              K-PrinceMall
            </h1>
            ///asdfasdfkasdlf
            <ul className="list-none grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 flex hidden xl:flex space-x-10 font-semibold text-md">
              <li
                className="relative hover:bg-gray-200  p-2 rounded-md"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                <Link to="/">WOMEN</Link>
                {/* Dropdown Menu */}
                <div className="bg-red-600 flex">
                {dropdownVisible && (

                  <div className="absolute p-5 w-screen bg-white text-black border border-gray-300 rounded-md mt-2 shadow-lg">
                    
                  <div className="flex gap-10">
                  
                  <ul className="font-thin space-y-3">
                    <h2 className="font-semibold text-xl">New In</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Casual</li>
                    <li className="hover:underline hover:cursor-pointer">Sportlife</li>
                    <li className="hover:underline hover:cursor-pointer">Lifetyle</li>
                    <li className="hover:underline hover:cursor-pointer">New In Top</li>
                    <li className="hover:underline hover:cursor-pointer">New In Dress</li>
                    <li className="hover:underline hover:cursor-pointer">New In Bottom</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Clothing</h2>
                    <li className="hover:underline hover:cursor-pointer">Linen</li>
                    <li className="hover:underline hover:cursor-pointer">Top</li>
                    <li className="hover:underline hover:cursor-pointer">Vest</li>
                    <li className="hover:underline hover:cursor-pointer">Blazers</li>
                    <li className="hover:underline hover:cursor-pointer">Shirts</li>
                    <li className="hover:underline hover:cursor-pointer">Bras</li>
                    <li className="hover:underline hover:cursor-pointer">Jackets</li>
                    <li className="hover:underline hover:cursor-pointer">T-Shirts</li>
                    <li className="hover:underline hover:cursor-pointer">Polo Shirt</li>
                    <li className="hover:underline hover:cursor-pointer">Hoodies & Sweatshirt</li>
                    <li className="hover:underline hover:cursor-pointer">Jumpsuits</li>
                    <li className="hover:underline hover:cursor-pointer">Dresses</li>
                    <li className="hover:underline hover:cursor-pointer">Cardigan</li>
                    <li className="hover:underline hover:cursor-pointer">Blouses</li>
                    <li className="hover:underline hover:cursor-pointer">Sportwears</li>
                    <li className="hover:underline hover:cursor-pointer">Trousers</li>
                    <li className="hover:underline hover:cursor-pointer">Jeans</li>
                    <li className="hover:underline hover:cursor-pointer">Skirts</li>
                    <li className="hover:underline hover:cursor-pointer">Shorts</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Shoes</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Loafers</li>
                    <li className="hover:underline hover:cursor-pointer">Sandals</li>
                    <li className="hover:underline hover:cursor-pointer">Sneakers</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Accessories</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Gloves</li>
                    <li className="hover:underline hover:cursor-pointer">Scarf</li>
                    <li className="hover:underline hover:cursor-pointer">Belts</li>
                    <li className="hover:underline hover:cursor-pointer">UnderWears</li>
                    <li className="hover:underline hover:cursor-pointer">Socks</li>
                    <li className="hover:underline hover:cursor-pointer">Bows</li>
                    <li className="hover:underline hover:cursor-pointer">Caps & Hats</li>
                    <li className="hover:underline hover:cursor-pointer">Backpacks</li>
                    <li className="hover:underline hover:cursor-pointer">Bags</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Shop by collections</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Life in a journey collection</li>
                    <li className="hover:underline hover:cursor-pointer">361 adventure collection</li>
                    <li className="hover:underline hover:cursor-pointer">Princess Jenna x TEN 11</li>
                    <li className="hover:underline hover:cursor-pointer">Cottage core collection</li>
                    <li className="hover:underline hover:cursor-pointer">Rider collection</li>
                    <li className="hover:underline hover:cursor-pointer">Denim</li>
                  </ul>
                  
                  </div>
                  </div>
                )}
                </div>
              </li>

              {/* MEN */}
              <li
                className="relative hover:bg-gray-200  p-2 rounded-md"
                onMouseEnter={() => setDropdownVisible1(true)}
                onMouseLeave={() => setDropdownVisible1(false)}
              >
                <Link to="/">MEN</Link>
                {/* Dropdown Menu */}
                <div className="bg-red-600 flex">
                {dropdownVisible1 && (

                  <div className="absolute p-5 w-screen bg-white text-black border border-gray-300 rounded-md mt-2 shadow-lg">
                    
                  <div className="flex gap-10">
                  
                  <ul className="font-thin space-y-3">
                    <h2 className="font-semibold text-xl">New In</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Casual</li>
                    <li className="hover:underline hover:cursor-pointer">Sportlife</li>
                    <li className="hover:underline hover:cursor-pointer">Lifetyle</li>
                    <li className="hover:underline hover:cursor-pointer">New In Top</li>
                    <li className="hover:underline hover:cursor-pointer">New In Dress</li>
                    <li className="hover:underline hover:cursor-pointer">New In Bottom</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Clothing</h2>
                    <li className="hover:underline hover:cursor-pointer">Linen</li>
                    <li className="hover:underline hover:cursor-pointer">Top</li>
                    <li className="hover:underline hover:cursor-pointer">Vest</li>
                    <li className="hover:underline hover:cursor-pointer">Blazers</li>
                    <li className="hover:underline hover:cursor-pointer">Shirts</li>
                    <li className="hover:underline hover:cursor-pointer">Bras</li>
                    <li className="hover:underline hover:cursor-pointer">Jackets</li>
                    <li className="hover:underline hover:cursor-pointer">T-Shirts</li>
                    <li className="hover:underline hover:cursor-pointer">Polo Shirt</li>
                    <li className="hover:underline hover:cursor-pointer">Hoodies & Sweatshirt</li>
                    <li className="hover:underline hover:cursor-pointer">Jumpsuits</li>
                    <li className="hover:underline hover:cursor-pointer">Dresses</li>
                    <li className="hover:underline hover:cursor-pointer">Cardigan</li>
                    <li className="hover:underline hover:cursor-pointer">Blouses</li>
                    <li className="hover:underline hover:cursor-pointer">Sportwears</li>
                    <li className="hover:underline hover:cursor-pointer">Trousers</li>
                    <li className="hover:underline hover:cursor-pointer">Jeans</li>
                    <li className="hover:underline hover:cursor-pointer">Skirts</li>
                    <li className="hover:underline hover:cursor-pointer">Shorts</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Shoes</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Loafers</li>
                    <li className="hover:underline hover:cursor-pointer">Sandals</li>
                    <li className="hover:underline hover:cursor-pointer">Sneakers</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Accessories</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Gloves</li>
                    <li className="hover:underline hover:cursor-pointer">Scarf</li>
                    <li className="hover:underline hover:cursor-pointer">Belts</li>
                    <li className="hover:underline hover:cursor-pointer">UnderWears</li>
                    <li className="hover:underline hover:cursor-pointer">Socks</li>
                    <li className="hover:underline hover:cursor-pointer">Bows</li>
                    <li className="hover:underline hover:cursor-pointer">Caps & Hats</li>
                    <li className="hover:underline hover:cursor-pointer">Backpacks</li>
                    <li className="hover:underline hover:cursor-pointer">Bags</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Shop by collections</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Life in a journey collection</li>
                    <li className="hover:underline hover:cursor-pointer">361 adventure collection</li>
                    <li className="hover:underline hover:cursor-pointer">Princess Jenna x TEN 11</li>
                    <li className="hover:underline hover:cursor-pointer">Cottage core collection</li>
                    <li className="hover:underline hover:cursor-pointer">Rider collection</li>
                    <li className="hover:underline hover:cursor-pointer">Denim</li>
                  </ul>
                  </div>
                  </div>
                )}
                </div>
              </li>

              {/* BOYS */}
              <li
                className="relative hover:bg-gray-200  p-2 rounded-md"
                onMouseEnter={() => setDropdownVisible2(true)}
                onMouseLeave={() => setDropdownVisible2(false)}
              >
                <Link to="/">BOYS</Link>
                {/* Dropdown Menu */}
                <div className="bg-red-600 flex">
                {dropdownVisible2 && (

                  <div className="absolute p-5 w-screen bg-white text-black border border-gray-300 rounded-md mt-2 shadow-lg">
                    
                  <div className="flex gap-10">
                  
                  <ul className="font-thin space-y-3">
                    <h2 className="font-semibold text-xl">New In</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Casual</li>
                    <li className="hover:underline hover:cursor-pointer">Sportlife</li>
                    <li className="hover:underline hover:cursor-pointer">Lifetyle</li>
                    <li className="hover:underline hover:cursor-pointer">New In Top</li>
                    <li className="hover:underline hover:cursor-pointer">New In Dress</li>
                    <li className="hover:underline hover:cursor-pointer">New In Bottom</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Clothing</h2>
                    <li className="hover:underline hover:cursor-pointer">Linen</li>
                    <li className="hover:underline hover:cursor-pointer">Top</li>
                    <li className="hover:underline hover:cursor-pointer">Vest</li>
                    <li className="hover:underline hover:cursor-pointer">Blazers</li>
                    <li className="hover:underline hover:cursor-pointer">Shirts</li>
                    <li className="hover:underline hover:cursor-pointer">Bras</li>
                    <li className="hover:underline hover:cursor-pointer">Jackets</li>
                    <li className="hover:underline hover:cursor-pointer">T-Shirts</li>
                    <li className="hover:underline hover:cursor-pointer">Polo Shirt</li>
                    <li className="hover:underline hover:cursor-pointer">Hoodies & Sweatshirt</li>
                    <li className="hover:underline hover:cursor-pointer">Jumpsuits</li>
                    <li className="hover:underline hover:cursor-pointer">Dresses</li>
                    <li className="hover:underline hover:cursor-pointer">Cardigan</li>
                    <li className="hover:underline hover:cursor-pointer">Blouses</li>
                    <li className="hover:underline hover:cursor-pointer">Sportwears</li>
                    <li className="hover:underline hover:cursor-pointer">Trousers</li>
                    <li className="hover:underline hover:cursor-pointer">Jeans</li>
                    <li className="hover:underline hover:cursor-pointer">Skirts</li>
                    <li className="hover:underline hover:cursor-pointer">Shorts</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Shoes</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Loafers</li>
                    <li className="hover:underline hover:cursor-pointer">Sandals</li>
                    <li className="hover:underline hover:cursor-pointer">Sneakers</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Accessories</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Gloves</li>
                    <li className="hover:underline hover:cursor-pointer">Scarf</li>
                    <li className="hover:underline hover:cursor-pointer">Belts</li>
                    <li className="hover:underline hover:cursor-pointer">UnderWears</li>
                    <li className="hover:underline hover:cursor-pointer">Socks</li>
                    <li className="hover:underline hover:cursor-pointer">Bows</li>
                    <li className="hover:underline hover:cursor-pointer">Caps & Hats</li>
                    <li className="hover:underline hover:cursor-pointer">Backpacks</li>
                    <li className="hover:underline hover:cursor-pointer">Bags</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Shop by collections</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Life in a journey collection</li>
                    <li className="hover:underline hover:cursor-pointer">361 adventure collection</li>
                    <li className="hover:underline hover:cursor-pointer">Princess Jenna x TEN 11</li>
                    <li className="hover:underline hover:cursor-pointer">Cottage core collection</li>
                    <li className="hover:underline hover:cursor-pointer">Rider collection</li>
                    <li className="hover:underline hover:cursor-pointer">Denim</li>
                  </ul>
                  </div>
                  </div>
                )}
                </div>
              </li>
              {/* GIRLS */}
              <li
                className="relative hover:bg-gray-200  p-2 rounded-md"
                onMouseEnter={() => setDropdownVisible2(true)}
                onMouseLeave={() => setDropdownVisible2(false)}
              >
                <Link to="/">GIRLS</Link>
                {/* Dropdown Menu */}
                <div className="bg-red-600 flex">
                {dropdownVisible3 && (

                  <div className="absolute p-5 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 bg-white text-black border border-gray-300 rounded-md mt-2 shadow-lg">
                    
                  <div className="flex gap-10">
                  
                  <ul className="font-thin space-y-3">
                    <h2 className="font-semibold text-xl">New In</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Casual</li>
                    <li className="hover:underline hover:cursor-pointer">Sportlife</li>
                    <li className="hover:underline hover:cursor-pointer">Lifetyle</li>
                    <li className="hover:underline hover:cursor-pointer">New In Top</li>
                    <li className="hover:underline hover:cursor-pointer">New In Dress</li>
                    <li className="hover:underline hover:cursor-pointer">New In Bottom</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Clothing</h2>
                    <li className="hover:underline hover:cursor-pointer">Linen</li>
                    <li className="hover:underline hover:cursor-pointer">Top</li>
                    <li className="hover:underline hover:cursor-pointer">Vest</li>
                    <li className="hover:underline hover:cursor-pointer">Blazers</li>
                    <li className="hover:underline hover:cursor-pointer">Shirts</li>
                    <li className="hover:underline hover:cursor-pointer">Bras</li>
                    <li className="hover:underline hover:cursor-pointer">Jackets</li>
                    <li className="hover:underline hover:cursor-pointer">T-Shirts</li>
                    <li className="hover:underline hover:cursor-pointer">Polo Shirt</li>
                    <li className="hover:underline hover:cursor-pointer">Hoodies & Sweatshirt</li>
                    <li className="hover:underline hover:cursor-pointer">Jumpsuits</li>
                    <li className="hover:underline hover:cursor-pointer">Dresses</li>
                    <li className="hover:underline hover:cursor-pointer">Cardigan</li>
                    <li className="hover:underline hover:cursor-pointer">Blouses</li>
                    <li className="hover:underline hover:cursor-pointer">Sportwears</li>
                    <li className="hover:underline hover:cursor-pointer">Trousers</li>
                    <li className="hover:underline hover:cursor-pointer">Jeans</li>
                    <li className="hover:underline hover:cursor-pointer">Skirts</li>
                    <li className="hover:underline hover:cursor-pointer">Shorts</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Shoes</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Loafers</li>
                    <li className="hover:underline hover:cursor-pointer">Sandals</li>
                    <li className="hover:underline hover:cursor-pointer">Sneakers</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Accessories</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Gloves</li>
                    <li className="hover:underline hover:cursor-pointer">Scarf</li>
                    <li className="hover:underline hover:cursor-pointer">Belts</li>
                    <li className="hover:underline hover:cursor-pointer">UnderWears</li>
                    <li className="hover:underline hover:cursor-pointer">Socks</li>
                    <li className="hover:underline hover:cursor-pointer">Bows</li>
                    <li className="hover:underline hover:cursor-pointer">Caps & Hats</li>
                    <li className="hover:underline hover:cursor-pointer">Backpacks</li>
                    <li className="hover:underline hover:cursor-pointer">Bags</li>
                  </ul>
                  <ul className="font-thin space-y-3 ">
                    <h2 className="font-semibold text-xl">Shop by collections</h2>
                    <li className="hover:underline hover:cursor-pointer">All</li>
                    <li className="hover:underline hover:cursor-pointer">Life in a journey collection</li>
                    <li className="hover:underline hover:cursor-pointer">361 adventure collection</li>
                    <li className="hover:underline hover:cursor-pointer">Princess Jenna x TEN 11</li>
                    <li className="hover:underline hover:cursor-pointer">Cottage core collection</li>
                    <li className="hover:underline hover:cursor-pointer">Rider collection</li>
                    <li className="hover:underline hover:cursor-pointer">Denim</li>
                  </ul>
                  </div>
                  </div>
                )}
                </div>
              </li>
              {/* <li className="hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md">
                <a href="">GIRLS</a>
              </li> */}
            </ul>
            
          </div>
          <h1 className="font-semibold text-3xl font-serif pr-20 hidden xl:flex">
              K-Prince Mall
            </h1>
          <div className="flex items-center gap-3 pr-36">

            <div className="relative flex items-center hidden md:flex">
              <SearchOutlined className="absolute left-3"/>
            <input
              className="h-10 border  rounded-full border-gray-700 pl-8 pr-3"
              placeholder="Search"
            />
            </div>
            
            <div className="flex items-center gap-5">
              <SearchOutlined className="text-xl  md:hidden pl-3 hover:bg-gray-200 p-2 rounded-md hover:cursor-pointer" />
              <BellOutlined className="text-xl  hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md" />
              <HeartOutlined className="text-xl hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md" />
              <ShoppingOutlined className="text-xl hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md" />
              <li className="list-none font-semibold  hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md hidden xl:block">
                <a href="/login">LOGIN</a>
              </li>
              <li className="list-none font-semibold  hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md hidden xl:block">
                <Link to="/register">REGISTER</Link>
              </li>
              <MenuOutlined
                className="text-xl xl:hidden font-semibold  text-red-500  hover:cursor-pointer hover:bg-gray-200s p-2 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
        </div>

        {/* Dropdown Menu - Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex flex-col gap-6 font-semibold text-lg p-6 overflow-y-auto"
            style={{ Index: 1000 }} // Ensures it's above everything else
          >
            <div className="text-center mb-4">
              {/* <h1 className="font-semibold text-3xl">K-Prince Mall</h1> */}
            </div>
            <div className="text-right mb-4">
              <CloseCircleFilled
                className="text-2xl cursor-pointer text-white"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <ul className="space-y-4 text-right text-3xl text-white">
              <li>
               <Link to="/">WOMEN</Link>
              </li>
              <li>
                <a href="">MEN</a>
              </li>
              <li>
                <a href="">BOYS</a>
              </li>
              <li>
                <a href="">GIRLS</a>
              </li>
            </ul>
            <li className="list-none absolute gap-28 p-4 bg-red-300 rounded-lg">
              
                <Link to="/login" className="flex gap-3  list-none text-3xl font-semibol hover:cursor-pointer text-white hover:bg-gray-200  p-2 rounded-md ">
                LOGIN<LoginOutlined/>
                </Link>
                <Link to="/register" className="flex gap-3 text-3xl font-semibol hover:cursor-pointer text-white hover:bg-gray-200  p-2 rounded-md ">
                REGISTER<UsergroupAddOutlined/>
                </Link>
              </li>
              
          </div>
        )}
      </nav>

      {/* Content Below the Navbar */}
      <div className="p-4 pt-20 "> {/* Adjust the padding-top to match the navbar height */}
        <Outlet />
      </div>
      <div className="p-8 w-full h-screen flex gap-10 justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
      <div className="pt-10 items-center justify-center">
        <p className="font-semibold text-xl">K-PRINCE MALL</p>
        <img src={qr} className="w-32 items-center justify-normal"/>
      </div>
      <div className=" pt-10">
        <p className="font-semibold text-xl">LOYALTY</p>
        <p className="flex items-center justify-normal gap-1"><BiHeartCircle/>Membership & Benifits</p>
      </div>
      <div className=" pt-10">
        <p className="font-semibold text-xl">FOLLOW US</p>
        <p className="flex items-center justify-normal gap-1"><CiFacebook/>Facebook</p>
        <p className="flex items-center justify-normal gap-1"><CiInstagram/>Instagram</p>
        <p className="flex item-center justify-normal gap-1"><TikTokOutlined/>Tik Tok</p>
        <p className="flex item-center justify-normal gap-1"><YoutubeFilled/>YouTube</p>
      </div>
      <div className=" pt-10">
        <p className="font-semibold text-xl">CUSTOMER SERVICES</p>
        <p className="flex items-center justify-normal gap-1"><QuestionCircleFilled/>Online exchange policy</p>
        <p className="flex items-center justify-normal gap-1"><CiInstagram/>Privacy Policy</p>
        <p className="flex item-center justify-normal gap-1"><TikTokOutlined/>FAQs & guides</p>
      </div>
      <div className=" pt-10">
        <p className="font-semibold text-xl">CONTACT US</p>
        <p className="flex items-center justify-normal gap-1"><MessageOutlined/>info@zandokh.com</p>
        <p className="flex items-center justify-normal gap-1"><BiPhoneCall/>(+855) 081 999 716</p>
        <p className="flex items-center justify-normal gap-1"><BiPhoneCall/>(+855) 085 330 330</p>
      </div>
      <div className=" pt-10">
      <p className="font-semibold text-xl">WE ACCEPT</p>
        <div className="flex gap-2">
        <img src={aba} className="w-12"/>
        <img src={cc} className="w-12"/>
        <img src={visa} className="w-12"/>
        <img src={ac} className="w-12"/>

        </div>
        <div className="flex gap-2 pt-1.5">
        <img src={union} className="w-12"/>
        <img src={jcb} className="w-12"/>
        <img src={wing} className="w-12"/>
        <img src={c} className="w-12"/>
        </div>
      </div>
      </div>
    </div>