import FlashSaleCountdown from './FlashSaleCountdown.jsx'


function Body() {

	const saleEndTime = new Date();
  saleEndTime.setHours(saleEndTime.getHours() + 2); // ends in 2 hours

  const handleSaleEnd = () => {
    console.log('Sale ended! Disable Buy buttons.');
    // You can set state here to disable purchase options
  }
    
    return (
        <>

		<div className="bg-gray-100 text-base">

          <div className="bg-white">
			<div className="bg-black p-2 col-white text-center">
				<h4 className="text-white">BLACK FRIDAY IS LIVE!!!</h4>
			</div>
		   
				<div className="p-2">
					<img src="img/11-11_660x330v2.jpg" className="rounded w-full" alt="Jumia"/>
					{/* <img src="img/11-11_660x330v2.jpg" className="rounded " alt="Jumia"/> */}
				
				</div>
			</div>


			{/* main */}

			<div>

				{/* div 1 */}

				<div className="bg-white">

					<div className="m-2 overflow-x-auto flex whitespace-nowrap scrollbar-hide">
						
						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/jumia-black-friday_220x220.png" className="size-14 " alt="Jumia"/>
						<h5>Black Friday</h5>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/410e2b46-ea24-4f47-bfff-d51b6948d924.png" className="size-14 " alt="Jumia"/>
						<h5>Phones & Tablets</h5>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/jumia-black-friday_220x220.png" className="size-14 " alt="Jumia"/>
						<h5>Black Friday</h5>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/410e2b46-ea24-4f47-bfff-d51b6948d924.png" className="size-14 " alt="Jumia"/>
						<h5>Phones & Tablets</h5>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/jumia-black-friday_220x220.png" className="size-14 " alt="Jumia"/>
						<h5>Black Friday</h5>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/410e2b46-ea24-4f47-bfff-d51b6948d924.png" className="size-14 " alt="Jumia"/>
						<h5>Phones & Tablets</h5>
						</div>

					</div>

				</div>

				{/* div 1 */}




			{/* div 2 */}

				<div className="bg-white">

					<div className="bg-black p-2 col-white">
						<h4 className="text-white">Recommended for you</h4>
					</div>

					<div className="m-2 overflow-x-auto flex whitespace-nowrap scrollbar-hide">
						
						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%]" alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>
						

					</div>

				</div>

				{/* div 2 */}







				{/* div 3 */}

				<div className="bg-white">

					<div className="bg-red-600 p-2 text-white flex justify-between">

						<div className="flex">
						<div><img src="img/tag.png" className="w-6 mt-2 mr-1" alt="Jumia"/></div>
						<div className=" text-600">
							<h4 className="text-white">Flash Sales</h4>
						<span id="countDown"><FlashSaleCountdown endTime={saleEndTime} onEnd={handleSaleEnd} />
        				</span>
						</div>
						</div>

						<div>
							<h4> <strong>SEE ALL</strong> </h4>
						</div>

					</div>


					<div className="m-2 overflow-x-auto flex whitespace-nowrap scrollbar-hide">
						
						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%]" alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>
						

					</div>

				</div>

				{/* div 3 */}






		{/* div 4 */}

				<div className="bg-white">

					<div className="bg-violet-300 p-2 text-black flex justify-between">

						<div className="flex ">
						<div>
							<h4 className="text-black">Top Voted Deals</h4>
						</div>
						</div>

						<div>
							<h4> <strong>SEE ALL</strong> </h4>
						</div>

					</div>


					<div className="m-2 overflow-x-auto flex whitespace-nowrap scrollbar-hide">
						
						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%]" alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>
						

					</div>

				</div>

				{/* div 4 */}





			{/* div 5 */}

				<div className="bg-white">

					<div className="m-2 p-2 grid grid-cols-4 items-center">
						
						<div className="m-2">
						<img src="img/tbm__300x300_copy_12.png" className="rounded" alt="Jumia"/>
						<h5>Electronics</h5>
						</div>

						<div className="m-2">
						<img src="img/tbm__300x300_copy_20.png" className="rounded" alt="Jumia"/>
						<h5>Gaming</h5>
						</div>

						<div className="m-2">
						<img src="img/tbm__300x300_copy_19.png" className="rounded" alt="Jumia"/>
						<h5>Fitness</h5>
						</div>

						<div className="m-2">
						<img src="img/tbm__300x300_copy_12.png" className="rounded" alt="Jumia"/>
						<h5>Electronics</h5>
						</div>

					</div>

				</div>

				{/* div 5 */}






		{/* div 6 */}

				<div className="bg-white">

					<div className="bg-black p-2 text-white flex justify-between">

						<div className="flex ">
						<div>
							<h4 className="text-white">Umidigi Official Store</h4>
						</div>
						</div>

						<div>
							<h4> <strong>SEE ALL</strong> </h4>
						</div>

					</div>


					<div className="m-2 overflow-x-auto flex whitespace-nowrap scrollbar-hide">
						
						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%]" alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>
						

					</div>

				</div>

				{/* div 6 */}







			{/* div 7 */}

				<div className="bg-white">

					<div className="m-2 p-2 grid grid-cols-4 items-center">
						
						<div className="m-2">
						<img src="img/luggage-sets_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/official_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/jumia-services_260x14.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/jumiaglobal_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/adidas_260x144_v2.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/diageo_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/nivea_260x144v2.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/xiaomi_260x144v2.png" className="rounded" alt="Jumia"/>
						</div>


					</div>

				</div>

				{/* div 7 */}







		{/* div 8 */}

				<div className="bg-white">

					<div className="bg-black p-2 text-white flex justify-between">

						<div className="flex ">
						<div>
							<h4 className="text-white">Black Friday Deals</h4>
						</div>
						</div>

						<div>
							<h4> <strong>SEE ALL</strong> </h4>
						</div>

					</div>


					<div className="m-2 overflow-x-auto flex whitespace-nowrap scrollbar-hide">
						
						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%]" alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>
						

					</div>

				</div>

				{/* div 8 */}







			{/* div 9 */}

				<div className="bg-white">

					<div className="bg-violet-300 p-2 text-black flex justify-between">

						<div className="flex ">
						<div>
							<h4 className="text-black">Shop From Our Collections</h4>
						</div>
						</div>

						{/* <div>
							<h4> <strong>SEE ALL</strong> </h4>
						</div> */}

					</div>


					<div className="m-2 p-2 grid grid-cols-4 items-center">
						
						<div className="m-2">
						<img src="img/phone-deals_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/detty-december_260x14.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/1-laptops_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/gaming_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/drones_260x144v2.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/phone-deals_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/detty-december_260x14.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/gaming_260x144.png" className="rounded" alt="Jumia"/>
						</div>


					</div>

				</div>

				{/* div 9 */}









			{/* div 10 */}

				<div className="bg-white">

					<div className="bg-violet-300 p-2 text-black flex justify-between">

						<div className="flex ">
						<div>
							<h4 className="text-black">More Deals</h4>
						</div>
						</div>

						{/* <div>
							<h4> <strong>SEE ALL</strong> </h4>
						</div> */}

					</div>


					<div className="m-2 p-2 grid grid-cols-4 items-center">
						
						<div className="m-2">
						<img src="img/treasure-hunt_300x300v2.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/jumia-games-2022v2.gif" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/buymore-savemore_300x300.jpg" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/treasure-hunt_300x300v2.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/buymore-savemore_300x300.jpg" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/treasure-hunt_300x300v2.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/buymore-savemore_300x300.jpg" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/treasure-hunt_300x300v2.png" className="rounded" alt="Jumia"/>
						</div>


					</div>

				</div>

				{/* div 10 */}








			{/* div 11 */}

				<div className="bg-white">

					<div className="bg-violet-300 p-2 text-black flex justify-between">

						<div className="flex ">
						<div>
							<h4 className="text-black">More Collections</h4>
						</div>
						</div>

						{/* <div>
							<h4> <strong>SEE ALL</strong> </h4>
						</div> */}

					</div>


					<div className="m-2 p-2 grid grid-cols-4 items-center">
						
						<div className="m-2">
						<img src="img/phone-deals_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/detty-december_260x14.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/1-laptops_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/gaming_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/drones_260x144v2.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/phone-deals_260x144.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/detty-december_260x14.png" className="rounded" alt="Jumia"/>
						</div>

						<div className="m-2">
						<img src="img/gaming_260x144.png" className="rounded" alt="Jumia"/>
						</div>


					</div>

				</div>

				{/* div 11 */}








			{/* div 12 */}

				<div className="bg-white">

					<div className="bg-black p-2 col-white">
						<h4 className="text-white">Accessary Deals</h4>
					</div>

					<div className="m-2 overflow-x-auto flex whitespace-nowrap scrollbar-hide">
						
						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%]" alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>
						

					</div>

				</div>

				{/* div 12 */}











		{/* div 13 */}

				<div className="bg-white">

					<div className="bg-black p-2 text-white flex justify-between">

						<div className="flex ">
						<div>
							<h4 className="text-white">Top Deals</h4>
						</div>
						</div>

						<div>
							<h4> <strong>SEE ALL</strong> </h4>
						</div>

					</div>


					<div className="m-2 overflow-x-auto flex whitespace-nowrap scrollbar-hide">
						
						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%]" alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/1.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>

						<div className="w-auto m-2 flex-shrink-0 w-24 flex flex-col items-center">
						<img src="img/3.jpg" className="w-[40%] " alt="Jumia"/>
						<h5>Tecno Spark 8p, 6.6'FHD+,64gb+...</h5>
						<h4><i>#</i> 107,000</h4>
						</div>
						

					</div>

				</div>

				{/* div 13 */}








			{/* div 14 */}

				<div className="bg-white">

					<div className="bg-violet-300 p-2 text-black flex justify-between">

						<div className="flex ">
						<div>
							<h4 className="text-black">Official Stores</h4>
						</div>
						</div>

						{/* <div>
							<h4> <strong>SEE ALL</strong> </h4>
						</div> */}

					</div>


					<div className="m-2 p-2 grid grid-cols-4 items-center">

						
				
		<div className="m-2">
			<img src="img/umidigi_260x144v2.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/oraimo_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/samsung_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/coca-cola_260x144v2.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/apple_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/pernod-ricard_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/slazenger_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/tcl_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/binatone_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/edifier_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/intel_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/tecno_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/nexus_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/kuhl_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/weyon_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/blackview_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/skyrun_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/unilever_260x144v3.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/nike_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/defacto_260x144v2.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/qubo_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/nestle_260x144.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/adidas_260x144_v2.png" className="rounded" alt="Jumia"/>
		</div>

		<div className="m-2">
			<img src="img/reckitt_260x144v2.png" className="rounded" alt="Jumia"/>
		</div>

					</div>

				</div>

				{/* div 14 */}








			{/* div 15 */}

				<div className="bg-white mb-4">

					<p className=“p-2“>Jumia is your number one <b>online shopping site</b> in Nigeria. We are an online store where you can purchase all your <b>electrics</b>, as well as <b>books, home appliances,</b> kiddle items, <b>fashion</b> items for men, and children; cool gadgets, computers, <b>groceries</b>, automobile parts, and more on the go. What more? You can have them delivered directly to you. Shop online with great ease as you pay with <b>JumiaPay</b> which gurantees you the safest online shopping payment method, allowing you to make stress free payments</p>

					<div className="bg-black p-2 text-white">

						<div className="text-center">
							<h4><strong>SHOW MORE</strong></h4>
						</div>

					</div>

				</div>

				{/* div 15 */}








			</div>

			{/* main 1 */}



		  
        </div>



        </>
    )
}

export default Body
