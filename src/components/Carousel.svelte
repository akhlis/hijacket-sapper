<script>
	import { hslide } from './hslide.js';

	let data = [];
	export let slides = [];
	let cur = 0;
	
	function changeSlide(slide) {
		cur = slide;
	}
	
	const clamp = (number, min, max) => Math.min(Math.max(number, min), max);
	const transition_args = {
		duration: 200,
	}
	
	function prev(e) {
		cur = clamp( --cur, 0, slides.length-1 )
	}
	
	function next(e) {
		cur = clamp( ++cur, 0, slides.length-1 )
	}
	
  const ARROW_LEFT = 37;
	const ARROW_RIGHT = 39;
	function handleShortcut(e) {
        if (e.keyCode === ARROW_LEFT ) {
						prev();
        }
		    if (e.keyCode === ARROW_RIGHT ) {
            next();
        }
    }

</script>

<svelte:window on:keyup={handleShortcut} />

<div class="product__slide">
		<div class="product__slider">
			{#each slides || [] as slide, i}
				{#if i === cur}
				<div class="slider-for__item" in:hslide={transition_args} out:hslide={transition_args}>
					<img class="product__image" src="https://api.hijacket.net{slide.image}" alt="image slider" />
                </div>
				{/if}
			{/each} 
			<div class="controls">
				<button on:click="{()=>prev()}">
					&lt;
				</button>
				<button on:click="{()=>next()}">
					&gt;
				</button>
			</div>
		</div>
		<div class="product__slide-nav">
			{#each slides || [] as slide, i}
			<button on:click={()=>changeSlide(i)} class="product__slide-btn" class:selected={cur == i}>
				<img class="product__slide-thumb" src="https://api.hijacket.net/carousel{slide.image}" alt="image slider" />
			</button>
			{/each}
		</div>
</div>

<style>
.product__image {
	@apply max-w-full h-auto;
}
.product__slider {
	@apply relative;
}
.product__slide-btn {
	@apply bg-transparent border-transparent p-0;
}
.dot {
	width: 8px;
	height: 8px;
	background: #000;
	border-radius: 100%;
	font-size: 0;
	margin: 0.3rem;
	opacity: 0.3;
}

.dot.selected {
	opacity: 1;
}

.inner-wrapper {
	height: 100%;
	width: 100%;
	display: flex;
	position: absolute;
}

.controls button:first-child {
	position: absolute;
	left: 0;
	top: calc(50% - 1.2rem);
}

.controls button:last-child {
	position: absolute;
	right: 0;
	top: calc(50% - 1.2rem);
}

.slide {
	flex: 1 0 auto;
	width: 100%;
	height: 100%;
	background: red;
	align-items: center;
	justify-content: center;
	display: flex;
	text-align: center;
	font-weight: bold;
	font-size: 2rem;
	color: white;
}

.controls {
	text-align: center;
	width: 100%;
	display: block;
}
</style>