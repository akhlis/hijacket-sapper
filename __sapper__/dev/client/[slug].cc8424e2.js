import { S as SvelteComponentDev, i as init, d as dispatch_dev, g as globals, s as safe_not_equal, v as validate_each_argument, a as validate_slots, e as element, t as text, c as claim_element, b as children, f as claim_text, h as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as set_data_dev, N as empty, u as noop, w as destroy_each } from './client.797f8ad7.js';

/* src/routes/product/[slug].svelte generated by Svelte v3.21.0 */

const { console: console_1 } = globals;
const file = "src/routes/product/[slug].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (38:0) {#each product as post}
function create_each_block(ctx) {
	let li;
	let a;
	let t_value = /*post*/ ctx[1].slug + "";
	let t;
	let a_href_value;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { rel: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "shop/" + /*post*/ ctx[1].slug);
			add_location(a, file, 38, 4, 811);
			add_location(li, file, 38, 0, 807);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*product*/ 1 && t_value !== (t_value = /*post*/ ctx[1].slug + "")) set_data_dev(t, t_value);

			if (dirty & /*product*/ 1 && a_href_value !== (a_href_value = "shop/" + /*post*/ ctx[1].slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(38:0) {#each product as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let each_1_anchor;
	let each_value = /*product*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*product*/ 1) {
				each_value = /*product*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
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
	return this.fetch("product/index.json").then(r => r.json()).then(posts => {
		return { product };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { product } = $$props;
	console.log(product);
	const writable_props = ["product"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("product" in $$props) $$invalidate(0, product = $$props.product);
	};

	$$self.$capture_state = () => ({ preload, product });

	$$self.$inject_state = $$props => {
		if ("product" in $$props) $$invalidate(0, product = $$props.product);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [product];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { product: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*product*/ ctx[0] === undefined && !("product" in props)) {
			console_1.warn("<U5Bslugu5D> was created without expected prop 'product'");
		}
	}

	get product() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set product(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLmNjODQyNGUyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Byb2R1Y3QvW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIDxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxyXG4gICAgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuU0FQUEVSX0FQUF9BUElfVVJMXHJcbiAgICBcclxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgJHthcGlVcmx9LyR7cGFyYW1zLnNsdWd9L2luZGV4Lmpzb25gKTtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgICAgIHJldHVybiB7IHByb2R1Y3Q6IGRhdGEgfVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGxldCBwcm9kdWN0XHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0KVxyXG48L3NjcmlwdD5cclxuXHJcblxyXG57I2VhY2ggcHJvZHVjdCBhcyBwb3N0fVxyXG48bGk+PGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwic2hvcC97cG9zdC5zbHVnfVwiPntwb3N0LnNsdWd9PC9hPjwvbGk+XHJcbnsvZWFjaH1cclxuIC0tPlxyXG5cclxuXHJcbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxyXG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaCgncHJvZHVjdC9pbmRleC5qc29uJykudGhlbihyID0+IHIuanNvbigpKS50aGVuKHBvc3RzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcHJvZHVjdCB9XHJcbiAgICAgICAgfSlcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBsZXQgcHJvZHVjdFxyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdClcclxuPC9zY3JpcHQ+XHJcblxyXG5cclxueyNlYWNoIHByb2R1Y3QgYXMgcG9zdH1cclxuPGxpPjxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cInNob3Ave3Bvc3Quc2x1Z31cIj57cG9zdC5zbHVnfTwvYT48L2xpPlxyXG57L2VhY2h9XHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBc0MrQyxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eURBQXRCLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7O2dFQUFJLEdBQUksSUFBQyxJQUFJOztvRkFBdEIsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRHBDLEdBQU87Ozs7Z0NBQVosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFBQyxHQUFPOzs7OytCQUFaLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXBDaUIsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLO1dBQ25ELE9BQU87Ozs7O09BRmIsT0FBTztDQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
