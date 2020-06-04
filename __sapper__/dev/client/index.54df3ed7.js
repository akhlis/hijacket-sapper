import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_each_argument, o as onMount, a as validate_slots, g as globals, e as element, t as text, c as claim_element, b as children, f as claim_text, h as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as set_data_dev, p as space, q as claim_space, r as listen_dev, u as noop, w as destroy_each, x as create_component, y as query_selector_all, z as claim_component, A as mount_component, B as transition_in, C as transition_out, D as destroy_component } from './client.5d0d93b9.js';

/* src/components/PostsList.svelte generated by Svelte v3.21.0 */

const { console: console_1 } = globals;
const file = "src/components/PostsList.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	return child_ctx;
}

// (53:0) {#each posts as post}
function create_each_block_1(ctx) {
	let li;
	let a;
	let t_value = /*post*/ ctx[10].slug + "";
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
			attr_dev(a, "href", a_href_value = "shop/" + /*post*/ ctx[10].slug);
			add_location(a, file, 53, 4, 1278);
			add_location(li, file, 53, 0, 1274);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t_value !== (t_value = /*post*/ ctx[10].slug + "")) set_data_dev(t, t_value);

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = "shop/" + /*post*/ ctx[10].slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(53:0) {#each posts as post}",
		ctx
	});

	return block;
}

// (58:4) {#each  pages as page}
function create_each_block(ctx) {
	let li;
	let button;
	let t0_value = /*page*/ ctx[7] + "";
	let t0;
	let t1;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[6](/*page*/ ctx[7], ...args);
	}

	const block = {
		c: function create() {
			li = element("li");
			button = element("button");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			button = claim_element(li_nodes, "BUTTON", {});
			var button_nodes = children(button);
			t0 = claim_text(button_nodes, t0_value);
			button_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(button, file, 59, 12, 1432);
			add_location(li, file, 58, 8, 1414);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, li, anchor);
			append_dev(li, button);
			append_dev(button, t0);
			append_dev(li, t1);
			if (remount) dispose();
			dispose = listen_dev(button, "click", click_handler, false, false, false);
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*pages*/ 2 && t0_value !== (t0_value = /*page*/ ctx[7] + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(58:4) {#each  pages as page}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let ul;
	let each_value_1 = /*posts*/ ctx[0];
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*pages*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(nodes);
			}

			t = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(ul, "class", "pagination");
			add_location(ul, file, 56, 0, 1353);
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(target, anchor);
			}

			insert_dev(target, t, anchor);
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts*/ 1) {
				each_value_1 = /*posts*/ ctx[0];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(t.parentNode, t);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*changePage, pages*/ 6) {
				each_value = /*pages*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
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
			destroy_each(each_blocks_1, detaching);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(ul);
			destroy_each(each_blocks, detaching);
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

function createPagesArray(total) {
	let arr = [];

	for (let i = 1; i <= total; i++) {
		arr.push(i);
	}

	return arr;
}

function instance($$self, $$props, $$invalidate) {
	let posts = [];
	let totalPages = null;
	let currentPage = 1;
	let pages = [];
	const apiUrl = process.env.SAPPER_APP_API_URL;

	function changePage(page) {
		if (page > 1) {
			fetch(`${apiUrl}/store/page/${page}/index.json`).then(res => {
				return res.json();
			}).then(result => {
				$$invalidate(0, posts = result);
				currentPage = page;
			});
		} else {
			fetch(`${apiUrl}/store/index.json`).then(res => {
				return res.json();
			}).then(result => {
				$$invalidate(0, posts = result);
				currentPage = page;
			});
		}
	}

	onMount(async () => {
		//const res = await fetch(`${apiUrl}/shops`)
		const res = await fetch(`${apiUrl}/store/index.json`);

		$$invalidate(0, posts = await res.json());
		totalPages = 3;
		$$invalidate(1, pages = createPagesArray(totalPages));
		console.log(posts);
		console.log(pages);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<PostsList> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("PostsList", $$slots, []);
	const click_handler = page => changePage(page);

	$$self.$capture_state = () => ({
		onMount,
		posts,
		totalPages,
		currentPage,
		pages,
		apiUrl,
		createPagesArray,
		changePage
	});

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("totalPages" in $$props) totalPages = $$props.totalPages;
		if ("currentPage" in $$props) currentPage = $$props.currentPage;
		if ("pages" in $$props) $$invalidate(1, pages = $$props.pages);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts, pages, changePage, totalPages, currentPage, apiUrl, click_handler];
}

class PostsList extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "PostsList",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/CategoryList.svelte generated by Svelte v3.21.0 */

const { console: console_1$1 } = globals;
const file$1 = "src/components/CategoryList.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (18:0) {#each categories as category}
function create_each_block$1(ctx) {
	let li;
	let a;
	let t_value = /*category*/ ctx[2].title + "";
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
			a = claim_element(li_nodes, "A", { href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", a_href_value = "product/" + /*category*/ ctx[2].title);
			add_location(a, file$1, 18, 8, 366);
			add_location(li, file$1, 18, 4, 362);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*categories*/ 1 && t_value !== (t_value = /*category*/ ctx[2].title + "")) set_data_dev(t, t_value);

			if (dirty & /*categories*/ 1 && a_href_value !== (a_href_value = "product/" + /*category*/ ctx[2].title)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(18:0) {#each categories as category}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let ul;
	let each_value = /*categories*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(ul, file$1, 16, 0, 320);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*categories*/ 1) {
				each_value = /*categories*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
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
			if (detaching) detach_dev(ul);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let categories = [];
	const apiUrl = process.env.SAPPER_APP_API_URL;

	onMount(async () => {
		const res = await fetch(`${apiUrl}/product/index.json`);
		$$invalidate(0, categories = await res.json());
		console.log(categories);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<CategoryList> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("CategoryList", $$slots, []);
	$$self.$capture_state = () => ({ onMount, categories, apiUrl });

	$$self.$inject_state = $$props => {
		if ("categories" in $$props) $$invalidate(0, categories = $$props.categories);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [categories];
}

class CategoryList extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CategoryList",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.21.0 */
const file$2 = "src/routes/index.svelte";

function create_fragment$2(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let t3;
	let current;
	const categorylist = new CategoryList({ $$inline: true });
	const postslist = new PostsList({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("parezza store");
			t2 = space();
			create_component(categorylist.$$.fragment);
			t3 = space();
			create_component(postslist.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-oh6yg0\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "parezza store");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			claim_component(categorylist.$$.fragment, nodes);
			t3 = claim_space(nodes);
			claim_component(postslist.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "text-2xl uppercase text-red-500");
			add_location(h1, file$2, 10, 0, 211);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			mount_component(categorylist, target, anchor);
			insert_dev(target, t3, anchor);
			mount_component(postslist, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(categorylist.$$.fragment, local);
			transition_in(postslist.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(categorylist.$$.fragment, local);
			transition_out(postslist.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			destroy_component(categorylist, detaching);
			if (detaching) detach_dev(t3);
			destroy_component(postslist, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	$$self.$capture_state = () => ({ PostsList, CategoryList });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$2.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTRkZjNlZDcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Bvc3RzTGlzdC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeUxpc3Quc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJ1xyXG5cclxuICAgIGxldCBwb3N0cyA9IFtdXHJcbiAgICBsZXQgdG90YWxQYWdlcyA9IG51bGxcclxuICAgIGxldCBjdXJyZW50UGFnZSA9IDFcclxuICAgIGxldCBwYWdlcyA9IFtdXHJcblxyXG4gICAgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuU0FQUEVSX0FQUF9BUElfVVJMXHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUGFnZXNBcnJheSh0b3RhbCkge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXVxyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDw9IHRvdGFsOyBpKyspIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goaSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2UpIHtcclxuICAgICAgICBpZiAocGFnZSA+IDEpIHtcclxuICAgICAgICAgICAgZmV0Y2goYCR7YXBpVXJsfS9zdG9yZS9wYWdlLyR7cGFnZX0vaW5kZXguanNvbmApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHBvc3RzID0gcmVzdWx0XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmZXRjaChgJHthcGlVcmx9L3N0b3JlL2luZGV4Lmpzb25gKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0cyA9IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPSBwYWdlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9zaG9wc2ApXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9zdG9yZS9pbmRleC5qc29uYClcclxuICAgICAgICBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICBcclxuICAgICAgICB0b3RhbFBhZ2VzID0gM1xyXG5cclxuICAgICAgICBwYWdlcyA9IGNyZWF0ZVBhZ2VzQXJyYXkodG90YWxQYWdlcylcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocG9zdHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2VzKTtcclxuICAgIH0pXHJcbjwvc2NyaXB0PlxyXG5cclxueyNlYWNoIHBvc3RzIGFzIHBvc3R9XHJcbjxsaT48YSByZWw9XCJwcmVmZXRjaFwiIGhyZWY9XCJzaG9wL3twb3N0LnNsdWd9XCI+e3Bvc3Quc2x1Z308L2E+PC9saT5cclxuey9lYWNofVxyXG5cclxuPHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxyXG4gICAgeyNlYWNoICBwYWdlcyBhcyBwYWdlfVxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz1cInsoKSA9PiBjaGFuZ2VQYWdlKHBhZ2UpfVwiPlxyXG4gICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgIHsvZWFjaH1cclxuPC91bD5cclxuIiwiPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnXHJcblxyXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbXVxyXG5cclxuICAgIGNvbnN0IGFwaVVybCA9IHByb2Nlc3MuZW52LlNBUFBFUl9BUFBfQVBJX1VSTFxyXG5cclxuXHJcbiAgICBvbk1vdW50KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L3Byb2R1Y3QvaW5kZXguanNvbmApXHJcbiAgICAgICAgY2F0ZWdvcmllcyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcbiAgICB9KVxyXG48L3NjcmlwdD5cclxuXHJcbjx1bD5cclxueyNlYWNoIGNhdGVnb3JpZXMgYXMgY2F0ZWdvcnl9XHJcbiAgICA8bGk+PGEgaHJlZj1cInByb2R1Y3Qve2NhdGVnb3J5LnRpdGxlfVwiPntjYXRlZ29yeS50aXRsZX08L2E+PC9saT5cclxuey9lYWNofVxyXG48L3VsPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFxRCtDLEdBQUksS0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFBdEIsR0FBSSxLQUFDLElBQUk7Ozs7Ozs7Ozs7OERBQUksR0FBSSxLQUFDLElBQUk7O2tGQUF0QixHQUFJLEtBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQU85QixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFSVixHQUFLOzs7O2tDQUFWLE1BQUk7Ozs7NEJBS00sR0FBSzs7OztnQ0FBWCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
