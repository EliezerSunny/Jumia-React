
function Footer() {

	const year = new Date().getFullYear("Y");
    
    return (
        <>

		{/* div 16 */}

				<div className="bg-gray-300">

					<div className="bg-gray-600 p-2 text-white">
						<div className="text-center">
							<h4><a href="#"><strong>BACK TO TOP <i className="fa fa-arrow-up"></i></strong></a></h4>
						</div>
					</div>

					<div className="flex flex-col items-center p-2 text-[12px]">
						<ul className="text-center grid grid-cols-3">
							<li>HELP CENTER</li>
							<li>CONTACT US</li>
							<li>TERMS & CONDITIONS</li>
							<li>PRIVACY & COOKIE</li>
							<li>BECOME A SELLER</li>
							<li>REPORT A PRODUCT</li>
							<li>SHIP YOUR PACKAGE</li>
							<li>BLACK FRIDAY</li>
							<li>ANNIVERSARY DEAL</li>
						</ul>
					</div>

					<div className="text-center p-4 text-gray-500">
						<p> &copy; { year } All Rights Reserved</p>
					</div>


				</div>

				{/* div 16 */}
            
            
    
        </>
    )
}

export default Footer