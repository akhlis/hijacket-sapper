<script>
	export let segment;
</script>

<footer class="site-footer footer bg-gray-50">
    <section class="container w-full max-w-screen-xl mx-auto px-3 lg:px-12 py-6">
        <div class="grid grid-cols-3 gap-6">
            <div class="col-span-3 lg:col-span-1">
                <h4 class="text-gray-700 font-medium mb-6">Informasi</h4>
                <nav class="nav-footer">
                    <ul class="menu-footer list-none pl-0">
                        <li class="menu-footer__item text-gray-700 leading-none hover:text-primary mb-3"><a aria-current='{segment === "about" ? "page" : undefined}' href='about' class="menu-footer__link text-sm text-current">Syarat dan
                                Ketentuan</a></li>
                        <li class="menu-footer__item text-gray-700 leading-none hover:text-primary mb-3"><a href="/tentang-kami" class="menu-footer__link text-sm text-current">Tentang Kami</a>
                        </li>
                        <li class="menu-footer__item text-gray-700 leading-none hover:text-primary mb-3"><a href="/hubungi-kami" class="menu-footer__link text-sm text-current">Kontak Kami</a>
                        </li>
                        <li class="menu-footer__item text-gray-700 leading-none hover:text-primary mb-3"><a href="/faq" class="menu-footer__link text-sm text-current">Faq</a></li>
                        <li class="menu-footer__item text-gray-700 leading-none hover:text-primary mb-3"><a href="/delivery" class="menu-footer__link text-sm text-current">Delivery</a></li>
                    </ul>
                </nav>
            </div>
            <div class="col-span-3 lg:col-span-1">
                <h4 class="text-gray-700 font-medium mb-6">Bantuan</h4>
                <nav class="nav-footer">
                    <ul class="menu-footer list-none pl-0">
                        <li class="menu-footer__item text-gray-700 leading-none hover:text-primary mb-3"><a href="/produk" class="menu-footer__link text-sm text-current">Katalog Produk</a>
                        </li>
                        <li class="menu-footer__item text-gray-700 leading-none hover:text-primary mb-3"><a href="/cara-order" class="menu-footer__link text-sm text-current">Cara Belanja</a>
                        </li>
                        <li class="menu-footer__item text-gray-700 leading-none hover:text-primary mb-3"><a href="/konfirmasi-pembayaran"
                                class="menu-footer__link text-sm text-current">Konfirmasi Pembayaran</a></li>
                        <li class="menu-footer__item text-gray-700 leading-none hover:text-primary mb-3"><a href="/panduan-ukuran" class="menu-footer__link text-sm text-current">Panduan
                                Ukuran</a></li>
                    </ul>
                </nav>
            </div>
            <div class="col-span-3 lg:col-span-1">
                <h4 class="text-gray-700 font-medium mb-6">Kontak Kami</h4>
                <div class="text-sm text-gray-700">
                    <p class="mb-2">WhatsApp • 082324089982</p>
                    <p class="mb-2">Email • hijacket.cs@gmail.com</p>
                    <p class="mb-2">Jl. Mahmud No. 109 Rahayu, Margaasih, Kab. Bandung. 40218</p>
                </div>
            </div>
        </div>
    </section>
    <div class="footer-copyright py-4 px-4">
        <div class="text-sm text-center">© Copyright 2020 -
            <a aria-current='{segment === undefined ? "page" : undefined}' href="." class="active">Hijacket.net</a> <span class="footer__links"> | Official Partner Of Hijacket Brand
                Indonesia</span></div>
        <div class="footer-arrow"><span><a href="#site-main" class="scroll-top"><i class="icon-up-big"></i></a></span>
        </div>
    </div>
</footer>