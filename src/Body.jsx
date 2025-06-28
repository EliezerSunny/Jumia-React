

import Carousel from './FlashSalesCarousel.jsx'
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


		<div className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-base">

          <div className="bg-white dark:bg-gray-900">
        <div className="bg-black text-center py-2">
          <h4 className="text-white text-sm font-medium uppercase tracking-wide">BLACK FRIDAY IS LIVE!!!</h4>
			</div>

			{/* image slide */}
		   
		  <Carousel />

		  


				{/* image slide */}



			</div>


			{/* main */}

			<div>

				

				{/* div 1 */}

				{/* Scrollable Icons */}
      <section className="bg-white dark:bg-gray-900 mt-2 py-2 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-2">
          {[
            { src: "img/jumia-black-friday_220x220.png", title: "Black Friday" },
            { src: "img/410e2b46-ea24-4f47-bfff-d51b6948d924.png", title: "Phones & Tablets" },
			{ src: "img/jumia-black-friday_220x220.png", title: "Black Friday" },
            { src: "img/410e2b46-ea24-4f47-bfff-d51b6948d924.png", title: "Phones & Tablets" },
			{ src: "img/jumia-black-friday_220x220.png", title: "Black Friday" },
            { src: "img/410e2b46-ea24-4f47-bfff-d51b6948d924.png", title: "Phones & Tablets" },
			{ src: "img/jumia-black-friday_220x220.png", title: "Black Friday" },
            { src: "img/410e2b46-ea24-4f47-bfff-d51b6948d924.png", title: "Phones & Tablets" },
			{ src: "img/jumia-black-friday_220x220.png", title: "Black Friday" },
            { src: "img/410e2b46-ea24-4f47-bfff-d51b6948d924.png", title: "Phones & Tablets" },
			{ src: "img/jumia-black-friday_220x220.png", title: "Black Friday" },
            { src: "img/410e2b46-ea24-4f47-bfff-d51b6948d924.png", title: "Phones & Tablets" },
          ].map((item, index) => (
            <div key={index} className="w-auto m-2 flex-shrink-0 flex flex-col items-center">
              <img src={item.src} alt={item.title} className="size-14 shadow" />
              <h5 className="text-sm text-center mt-1">{item.title}</h5>
            </div>
          ))}
        </div>
      </section>
				{/* div 1 */}




			{/* div 2 */}

				{/* Recommended */}
      <section className="bg-white dark:bg-gray-900 mt-4">
        <div className="bg-gray-800 dark:bg-gray-700 p-2">
          <h4 className="text-white text-base font-semibold">Recommended for you</h4>
        </div>
        <div className="flex overflow-x-auto gap-4 p-2 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <div key={idx} className="flex-shrink-0 w-36 text-center">
              <img src="img/1.jpg" className="rounded shadow" alt="Product" />
              <h5 className="text-sm mt-2">Tecno Spark 8p...</h5>
              <h4 className="text-primary-600 font-bold">₦107,000</h4>
            </div>
          ))}
        </div>
      </section>

				{/* div 2 */}







				{/* div 3 */}

				{/* Flash Sales */}
      <section className="bg-white dark:bg-gray-900 mt-4">
        <div className="bg-red-600 text-white p-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="img/tag.png" className="w-6" alt="Tag" />
            <div>
              <h4 className="text-sm font-semibold">Flash Sales</h4>
              <FlashSaleCountdown endTime={saleEndTime} onEnd={handleSaleEnd} />
            </div>
          </div>
          <h4 className="text-xs font-bold uppercase tracking-wider">See All</h4>
        </div>
        <div className="flex overflow-x-auto gap-4 p-2 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <div key={idx} className="w-36 flex-shrink-0 text-center">
              <img src="img/1.jpg" className="rounded shadow" alt="Product" />
              <h5 className="text-sm mt-2">Tecno Spark 8p...</h5>
              <h4 className="text-primary-600 font-bold">₦107,000</h4>
            </div>
          ))}
        </div>
      </section>

				{/* div 3 */}






		{/* div 4 */}

				{/* Top Voted Deals */}
      <section className="bg-white dark:bg-gray-900 mt-4">
        <div className="bg-violet-500 p-2 text-white flex justify-between items-center">
          <h4 className="text-sm font-semibold">Top Voted Deals</h4>
          <span className="text-xs uppercase font-bold">See All</span>
        </div>
        <div className="flex overflow-x-auto gap-4 p-2 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <div key={idx} className="w-36 flex-shrink-0 text-center">
              <img src="img/3.jpg" className="rounded shadow" alt="Deal" />
              <h5 className="text-sm mt-2">Tecno Spark 8p...</h5>
              <h4 className="text-primary-600 font-bold">₦107,000</h4>
            </div>
          ))}
        </div>
      </section>

				{/* div 4 */}





			{/* div 5 */}

				{/* Categories Grid */}
      <section className="bg-white dark:bg-gray-900 mt-4 p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center">
        {[
          { img: "img/tbm__300x300_copy_12.png", title: "Electronics" },
          { img: "img/tbm__300x300_copy_20.png", title: "Gaming" },
          { img: "img/tbm__300x300_copy_19.png", title: "Fitness" },
          { img: "img/tbm__300x300_copy_12.png", title: "Electronics" },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <img src={item.img} className="rounded-lg shadow w-full" alt={item.title} />
            <h5 className="text-sm mt-2 font-medium">{item.title}</h5>
          </div>
        ))}
      </section>

				{/* div 5 */}






		{/* div 6 */}

		{/* Umidigi Official Store */}
      <section className="bg-white dark:bg-gray-900 mt-4">
        <div className="bg-violet-500 p-2 text-white flex justify-between items-center">
          <h4 className="text-sm font-semibold">Umidigi Official Store</h4>
          <span className="text-xs uppercase font-bold">See All</span>
        </div>
        <div className="flex overflow-x-auto gap-4 p-2 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <div key={idx} className="w-36 flex-shrink-0 text-center">
              <img src="img/1.jpg" className="rounded shadow" alt="Deal" />
              <h5 className="text-sm mt-2">Tecno Spark 8p...</h5>
              <h4 className="text-primary-600 font-bold">₦107,000</h4>
            </div>
          ))}
        </div>
      </section>

				

				{/* div 6 */}







			{/* div 7 */}

			{/* Categories Grid */}
      <section className="bg-white dark:bg-gray-900 mt-4 p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center">
        {[
          { img: "img/luggage-sets_260x144.png" },
          { img: "img/official_260x144.png" },
          { img: "img/jumia-services_260x14.png" },
          { img: "img/jumiaglobal_260x144.png" },
		  { img: "img/adidas_260x144_v2.png" },
		  { img: "img/diageo_260x144.png" },
		  { img: "img/nivea_260x144v2.png" },
		  { img: "img/xiaomi_260x144v2.png" },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <img src={item.img} className="rounded-lg shadow w-full" />
            {/* <h5 className="text-sm mt-2 font-medium">{item.title}</h5> */}
          </div>
        ))}
      </section>

				
				{/* div 8 */}







			{/* div 9 */}


			{/* Shop From Our Collections */}
      <section className="bg-white dark:bg-gray-900 mt-4">
        <div className="bg-violet-500 p-2 text-white flex justify-between items-center">
          <h4 className="text-sm font-semibold">Shop From Our Collections</h4>
          {/* <span className="text-xs uppercase font-bold">See All</span> */}
        </div>
        <div className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center">
          {[
          { img: "img/phone-deals_260x144.png" },
          { img: "img/detty-december_260x14.png" },
          { img: "img/1-laptops_260x144.png" },
          { img: "img/gaming_260x144.png" },
		  { img: "img/drones_260x144v2.png" },
		  { img: "img/phone-deals_260x144.png" },
		  { img: "img/detty-december_260x14.png" },
		  { img: "img/gaming_260x144.png" },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <img src={item.img} className="rounded-lg shadow w-full" />
            {/* <h5 className="text-sm mt-2 font-medium">{item.title}</h5> */}
          </div>
        ))}
        </div>
      </section>



				

				{/* div 9 */}









			{/* div 10 */}



			{/* Umidigi Official Store */}
      <section className="bg-white dark:bg-gray-900 mt-4">
        <div className="bg-violet-500 p-2 text-white flex justify-between items-center">
          <h4 className="text-sm font-semibold">More Deals</h4>
          {/* <span className="text-xs uppercase font-bold">See All</span> */}
        </div>
        <div className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center">
          {[
          { img: "img/treasure-hunt_300x300v2.png" },
          { img: "img/jumia-games-2022v2.gif" },
          { img: "img/buymore-savemore_300x300.jpg" },
          { img: "img/treasure-hunt_300x300v2.png" },
		  { img: "img/buymore-savemore_300x300.jpg" },
		  { img: "img/treasure-hunt_300x300v2.png" },
		  { img: "img/buymore-savemore_300x300.jpg" },
		  { img: "img/treasure-hunt_300x300v2.png" },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <img src={item.img} className="rounded-lg shadow w-full" />
            {/* <h5 className="text-sm mt-2 font-medium">{item.title}</h5> */}
          </div>
        ))}
        </div>
      </section>

				

				{/* div 10 */}








			{/* div 11 */}

				{/* More Collections */}
      <section className="bg-white dark:bg-gray-900 mt-4">
        <div className="bg-violet-500 p-2 text-white flex justify-between items-center">
          <h4 className="text-sm font-semibold">More Collections</h4>
          {/* <span className="text-xs uppercase font-bold">See All</span> */}
        </div>
        <div className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center">
          {[
          { img: "img/phone-deals_260x144.png" },
          { img: "img/detty-december_260x14.png" },
          { img: "img/1-laptops_260x144.png" },
          { img: "img/gaming_260x144.png" },
		  { img: "img/drones_260x144v2.png" },
		  { img: "img/phone-deals_260x144.png" },
		  { img: "img/detty-december_260x14.png" },
		  { img: "img/gaming_260x144.png" },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <img src={item.img} className="rounded-lg shadow w-full" />
            {/* <h5 className="text-sm mt-2 font-medium">{item.title}</h5> */}
          </div>
        ))}
        </div>
      </section>

				{/* div 11 */}








			{/* div 12 */}

			{/* Umidigi Official Store */}
      <section className="bg-white dark:bg-gray-900 mt-4">
        <div className="bg-black p-2 text-white flex justify-between items-center">
          <h4 className="text-sm font-semibold">Accessary Deals</h4>
          <span className="text-xs uppercase font-bold">See All</span>
        </div>
        <div className="flex overflow-x-auto gap-4 p-2 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <div key={idx} className="w-36 flex-shrink-0 text-center">
              <img src="img/1.jpg" className="rounded shadow" alt="Deal" />
              <h5 className="text-sm mt-2">Tecno Spark 8p...</h5>
              <h4 className="text-primary-600 font-bold">₦107,000</h4>
            </div>
          ))}
        </div>
      </section>

				
				{/* div 12 */}











		{/* div 13 */}

				{/* Umidigi Official Store */}
      <section className="bg-white dark:bg-gray-900 mt-4">
        <div className="bg-black p-2 text-white flex justify-between items-center">
          <h4 className="text-sm font-semibold">Top Deals</h4>
          <span className="text-xs uppercase font-bold">See All</span>
        </div>
        <div className="flex overflow-x-auto gap-4 p-2 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <div key={idx} className="w-36 flex-shrink-0 text-center">
              <img src="img/1.jpg" className="rounded shadow" alt="Deal" />
              <h5 className="text-sm mt-2">Tecno Spark 8p...</h5>
              <h4 className="text-primary-600 font-bold">₦107,000</h4>
            </div>
          ))}
        </div>
      </section>

				{/* div 13 */}








			{/* div 14 */}

			{/* More Collections */}
      <section className="bg-white dark:bg-gray-900 mt-4">
        <div className="bg-violet-500 p-2 text-white flex justify-between items-center">
          <h4 className="text-sm font-semibold">Official Stores</h4>
          {/* <span className="text-xs uppercase font-bold">See All</span> */}
        </div>
        <div className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center">
          {[
          { img: "img/umidigi_260x144v2.png" },
          { img: "img/oraimo_260x144.png" },
          { img: "img/tcl_260x144.png" },
          { img: "img/samsung_260x144.png" },
		  { img: "img/coca-cola_260x144v2.png" },
		  { img: "img/apple_260x144.png" },
		  { img: "img/pernod-ricard_260x144.png" },
		  { img: "img/slazenger_260x144.png" },

		  { img: "img/binatone_260x144.png" },
          { img: "img/edifier_260x144.png" },
          { img: "img/intel_260x144.png" },
          { img: "img/nexus_260x144.png" },
		  { img: "img/kuhl_260x144.png" },
		  { img: "img/tecno_260x144.png" },
		  { img: "img/weyon_260x144.png" },
		  { img: "img/blackview_260x144.png" },
		  
		  { img: "img/skyrun_260x144.png" },
          { img: "img/unilever_260x144v3.png" },
          { img: "img/nike_260x144.png" },
          { img: "img/defacto_260x144v2.png" },
		  { img: "img/qubo_260x144.png" },
		  { img: "img/nestle_260x144.png" },
		  { img: "img/adidas_260x144_v2.png" },
		  { img: "img/reckitt_260x144v2.png" },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <img src={item.img} className="rounded-lg shadow w-full" />
            {/* <h5 className="text-sm mt-2 font-medium">{item.title}</h5> */}
          </div>
        ))}
        </div>
      </section>

	

				{/* div 14 */}








			{/* div 15 */}

				{/* Description Footer */}
      <section className="bg-white dark:bg-gray-900 mt-6">
        <p className="p-4 text-sm leading-relaxed">
          Jumia is your number one <b>online shopping site</b> in Nigeria. We are an online store where you can
          purchase all your <b>electronics</b>, <b>books, home appliances, fashion</b>, and much more.
          Pay easily with <b>JumiaPay</b> for stress-free shopping!
        </p>
        <div className="bg-black text-white text-center p-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide">Show More</h4>
        </div>
      </section>

				{/* div 15 */}








			</div>

			{/* main 1 */}



		  
        </div>



        </>
    )
}

export default Body