import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as validate_slots, p as space, e as element, t as text, y as query_selector_all, h as detach_dev, q as claim_space, c as claim_element, b as children, f as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as set_data_dev, u as noop } from './client.a569bed7.js';
import { m as marked } from './marked.5a4f922e.js';

/* src/routes/shop/[slug].svelte generated by Svelte v3.21.0 */
const file = "src/routes/shop/[slug].svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let h1;
	let t1_value = /*post*/ ctx[0].title + "";
	let t1;
	let t2;
	let div;
	let raw_value = marked(/*post*/ ctx[0].content) + "";
	document.title = title_value = /*post*/ ctx[0].title;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-m6zla3\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 63, 0, 3122);
			attr_dev(div, "class", "content svelte-cctkty");
			add_location(div, file, 65, 0, 3147);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div, anchor);
			div.innerHTML = raw_value;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*post*/ 1 && title_value !== (title_value = /*post*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*post*/ 1 && t1_value !== (t1_value = /*post*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*post*/ 1 && raw_value !== (raw_value = marked(/*post*/ ctx[0].content) + "")) div.innerHTML = raw_value;		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`https://hijacket-api.netlify.app/${params.slug}/index.json`);

	const post = await res.json();
	return { post };
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props;
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({ preload, marked, post });

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [post];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjhhNWZjN2UxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Nob3AvW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xyXG4gICAgLy8gdGhlIGBzbHVnYCBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIGJlY2F1c2VcclxuICAgIC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLnN2ZWx0ZVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgaHR0cHM6Ly9oaWphY2tldC1hcGkubmV0bGlmeS5hcHAvJHtwYXJhbXMuc2x1Z30vaW5kZXguanNvbmApO1xyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICByZXR1cm4geyBwb3N0IH07XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IG1hcmtlZCBmcm9tIFwibWFya2VkXCI7XHJcblxyXG4gIGV4cG9ydCBsZXQgcG9zdDtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLypcclxuXHRcdEJ5IGRlZmF1bHQsIENTUyBpcyBsb2NhbGx5IHNjb3BlZCB0byB0aGUgY29tcG9uZW50LFxyXG5cdFx0YW5kIGFueSB1bnVzZWQgc3R5bGVzIGFyZSBkZWFkLWNvZGUtZWxpbWluYXRlZC5cclxuXHRcdEluIHRoaXMgcGFnZSwgU3ZlbHRlIGNhbid0IGtub3cgd2hpY2ggZWxlbWVudHMgYXJlXHJcblx0XHRnb2luZyB0byBhcHBlYXIgaW5zaWRlIHRoZSB7e3twb3N0Lmh0bWx9fX0gYmxvY2ssXHJcblx0XHRzbyB3ZSBoYXZlIHRvIHVzZSB0aGUgOmdsb2JhbCguLi4pIG1vZGlmaWVyIHRvIHRhcmdldFxyXG5cdFx0YWxsIGVsZW1lbnRzIGluc2lkZSAuY29udGVudFxyXG5cdCovXHJcbiAgLmNvbnRlbnQgOmdsb2JhbChoMikge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCA6Z2xvYmFsKHByZSkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29udGVudCA6Z2xvYmFsKHByZSkgOmdsb2JhbChjb2RlKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCA6Z2xvYmFsKHVsKSB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgOmdsb2JhbChsaSkge1xyXG4gICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IDpnbG9iYWwoaW1nKSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG4gIDx0aXRsZT57cG9zdC50aXRsZX08L3RpdGxlPlxyXG48L3N2ZWx0ZTpoZWFkPlxyXG5cclxuPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcblxyXG48ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gIHtAaHRtbCBtYXJrZWQocG9zdC5jb250ZW50KX1cclxuPC9kaXY+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3lCQStESyxHQUFJLElBQUMsS0FBSzs7OztpQkFHTixNQUFNLFVBQUMsR0FBSSxJQUFDLE9BQU87eUNBTmxCLEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBQVYsR0FBSSxJQUFDLEtBQUs7Ozs7K0RBR2YsR0FBSSxJQUFDLEtBQUs7d0RBR04sTUFBTSxVQUFDLEdBQUksSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBakVKLE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSzs7O09BR3JDLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxxQ0FBcUMsTUFBTSxDQUFDLElBQUk7O09BQ3RFLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSTtVQUVoQixJQUFJOzs7O09BSk4sSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
