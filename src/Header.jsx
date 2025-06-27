
function Header() {

    return (
        <>

        {/* div 01 */}

				<div className="bg-white">


					<div className="bg-black p-2 text-white flex justify-between items-center">


						<div className="flex">

              <div className="size-3 mt-3 mr-2">
                <img src="img/times.png" alt="Jumia" />
              </div>

						  <div><img src="img/app-link.png" className="w-6 mt-2 mr-2" alt="Jumia"/></div>
						  <div>
							  <h4 className="text-white">Shop on the Jumia App</h4>
                <h4 className="text-white">Free on Play Store</h4>
						  </div>

						</div>


						<div>
              <button className="bg-orange-400 rounded p-1 pr-2 pl-2">OPEN</button>
            </div>

					</div>


          <div>
            <img src="img/free-delivery-mobile-strip.gif" className="w-full" alt="Jumia" />
          </div>






          <div className="bg-white p-2 text-black flex justify-between items-center">

            <div className="flex justify-between items-center cursor-pointer">
                <div>
                  <i className="fas fa-bars text-[20px] size-3 mr-2">=</i>
                </div>
                <div>
                  <img src="img/logo.png" alt="Jumia" />
                </div>
            </div>

						<div className="border p-2 pr-4 ml-12 pl-4 w-[100%] rounded-full">
          <form action="#" method="get">
            <i className="fa fa-search text-gray-400"></i>
            <input className="w-[90%] outline-0"
              type="search"
              name="q"
              placeholder="Search products, brands and categories"
            />
          </form>
        </div>

					</div>



				</div>

				{/* div 01 */}


      
        </>
    )
}

export default Header