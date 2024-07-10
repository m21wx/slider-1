

	
	let slider = document.querySelector('.slider')

		let right = document.querySelector('.btn-right')
		let left = document.querySelector('.btn-left')
		
		right.addEventListener('click',()=>{
			let f = slider.firstElementChild;
			 slider.append(f)
		
		})
		left.addEventListener('click',()=>{
			let f = slider.lastElementChild;
				slider.prepend(f);

			})
		
		
		
		

		
		
		
		
		
		
		
		