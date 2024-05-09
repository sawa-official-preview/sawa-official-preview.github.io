

const cacheVersion = 'v1.0.292'

console.log('service worker version', '1.0.292')

const routes = ['home','pay','test','login','fines','']

const public_path = '/html/sawa-offical-website/ksa/'

const putInCache = async (request, response) => {
  const cache = await caches.open(cacheVersion)
  await cache.put(request, response)
}

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(cacheVersion)
  await cache.addAll(resources)
}

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable()
  }
}

function clearOldCache() {
  return caches.keys().then(function (keyList) {
    return Promise.all(
      keyList.map(function (key) {
        if (key !== cacheVersion) {
          return caches.delete(key)
        }
      })
    )
  })
}

self.addEventListener('activate', (event) => {
  console.log('service worker active', '1.0.292', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.4cdbe7de.js','_nuxt/AboutSA.mobile.6269e00b.js','_nuxt/AboutSA2-legacy.fd190b78.js','_nuxt/AboutSA2.3b6ea8a5.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.5d131f12.js','_nuxt/PayUtils.b1c6316f.js','_nuxt/UICarouselView-legacy.a9ab86a6.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/UICarouselView.f71a40ff.js','_nuxt/account-item-legacy.6af920a3.js','_nuxt/account-item-legacy.e8855e3b.js','_nuxt/account-item.1e293b6b.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.81b0405c.js','_nuxt/account-item.950742c1.css','_nuxt/api-legacy.9b8ea3b7.js','_nuxt/api.e807893e.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.6d2407d1.js','_nuxt/bank-views.bf07685c.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/6b127aef-35a7-4309-aac3-27cfd847c593.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.1cab6901.js','_nuxt/channel-view.5bcb8d1b.js','_nuxt/cko-card-list-legacy.3afc1a3a.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.76ee73e0.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.aec80a23.js','_nuxt/enter-legacy.ccd897ff.js','_nuxt/enter.342b3289.css','_nuxt/enter.60287313.js','_nuxt/enter.82ae06aa.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.58c15745.js','_nuxt/enterMixin.4782fd5f.js','_nuxt/entry-legacy.9bd201cb.js','_nuxt/entry.52209fbe.css','_nuxt/entry.d6db8fad.js','_nuxt/error-404-legacy.be161d05.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.7d379fb7.js','_nuxt/error-500-legacy.bcd3abca.js','_nuxt/error-500.0fbbeba1.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.70c764de.js','_nuxt/error.06313295.css','_nuxt/error.f960d83a.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.fe9c4d96.js','_nuxt/frames.1fcddcf3.js','_nuxt/home-legacy.14a13401.js','_nuxt/home.16833c3c.js','_nuxt/home.63eb863a.css','_nuxt/home.pc-legacy.15eea36f.js','_nuxt/home.pc.4d6e1e9f.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.09e55839.js','_nuxt/index-legacy.0b4acf5d.js','_nuxt/index-legacy.0bc65455.js','_nuxt/index-legacy.0d1ad2be.js','_nuxt/index-legacy.0f4ff68f.js','_nuxt/index-legacy.1aca7254.js','_nuxt/index-legacy.1f6f52f0.js','_nuxt/index-legacy.22ed615f.js','_nuxt/index-legacy.25470063.js','_nuxt/index-legacy.2b6c5412.js','_nuxt/index-legacy.2d91e049.js','_nuxt/index-legacy.2dbdd6ae.js','_nuxt/index-legacy.3223f496.js','_nuxt/index-legacy.362e5be7.js','_nuxt/index-legacy.36d2709b.js','_nuxt/index-legacy.385f7ce0.js','_nuxt/index-legacy.3bbd8f35.js','_nuxt/index-legacy.474821d3.js','_nuxt/index-legacy.4e758bf6.js','_nuxt/index-legacy.4f5ee77f.js','_nuxt/index-legacy.555c55df.js','_nuxt/index-legacy.558dea73.js','_nuxt/index-legacy.5a68f2d6.js','_nuxt/index-legacy.685aa752.js','_nuxt/index-legacy.6e10719f.js','_nuxt/index-legacy.7222d21f.js','_nuxt/index-legacy.795fa057.js','_nuxt/index-legacy.7e8659dc.js','_nuxt/index-legacy.7fb4c878.js','_nuxt/index-legacy.802e16c4.js','_nuxt/index-legacy.80d55380.js','_nuxt/index-legacy.84870c38.js','_nuxt/index-legacy.8835ff39.js','_nuxt/index-legacy.8a698d30.js','_nuxt/index-legacy.933eecd6.js','_nuxt/index-legacy.a81d7dd8.js','_nuxt/index-legacy.b31e4ad6.js','_nuxt/index-legacy.b5489870.js','_nuxt/index-legacy.c32c49c2.js','_nuxt/index-legacy.d222e578.js','_nuxt/index-legacy.e516355b.js','_nuxt/index-legacy.f3381b94.js','_nuxt/index-legacy.f45301e4.js','_nuxt/index-legacy.f70d3524.js','_nuxt/index-legacy.f7121306.js','_nuxt/index-legacy.f9612639.js','_nuxt/index.019be9d3.js','_nuxt/index.01e7d0e8.js','_nuxt/index.05a99061.js','_nuxt/index.079cc3e7.js','_nuxt/index.090bd6da.js','_nuxt/index.100dcc7d.css','_nuxt/index.136f9168.js','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.17407fd2.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1ce5e791.js','_nuxt/index.21d53d93.js','_nuxt/index.23a90349.css','_nuxt/index.266ee5ec.js','_nuxt/index.27517127.css','_nuxt/index.27815903.js','_nuxt/index.29fa6807.js','_nuxt/index.2af9a7ff.js','_nuxt/index.2e22f6c5.js','_nuxt/index.3e3f66aa.css','_nuxt/index.40585425.js','_nuxt/index.44638243.css','_nuxt/index.46407360.js','_nuxt/index.4671c4c1.js','_nuxt/index.47599534.css','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.52a3f0b2.js','_nuxt/index.609a047b.css','_nuxt/index.62aca22f.js','_nuxt/index.62ed72ac.js','_nuxt/index.67cc2f98.js','_nuxt/index.68ceb5e7.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.6c8c2245.js','_nuxt/index.6d3dd916.js','_nuxt/index.6f4918fa.js','_nuxt/index.71d24d3c.css','_nuxt/index.7423494a.js','_nuxt/index.7502fb0e.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.807dbc06.js','_nuxt/index.815202c8.css','_nuxt/index.9480fee8.js','_nuxt/index.9876eb02.js','_nuxt/index.9b1599a9.css','_nuxt/index.9bc068b8.js','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a76252f9.css','_nuxt/index.ae40bec6.css','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.b6c19ee2.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c8621a6b.css','_nuxt/index.cda1cac8.js','_nuxt/index.cf7330e9.js','_nuxt/index.cf9e7734.js','_nuxt/index.d0233f63.css','_nuxt/index.d05e8f60.js','_nuxt/index.d1ea6fe7.css','_nuxt/index.d83f749f.css','_nuxt/index.da1f1c5c.js','_nuxt/index.dad14dde.css','_nuxt/index.dc2250ab.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e7e73804.js','_nuxt/index.e9ebd3cd.js','_nuxt/index.ec338efc.js','_nuxt/index.f06420e1.js','_nuxt/index.f1b90fa5.js','_nuxt/index.f27081e9.js','_nuxt/index.f6305027.js','_nuxt/index.f7872780.css','_nuxt/index.f986c09c.js','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.09a6ded8.js','_nuxt/index.mobile-legacy.5c5525c6.js','_nuxt/index.mobile-legacy.6690d38c.js','_nuxt/index.mobile-legacy.c3816316.js','_nuxt/index.mobile-legacy.dc886df1.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.38db7faf.js','_nuxt/index.mobile.63b7193e.js','_nuxt/index.mobile.940ea829.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.c8374bf8.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.mobile.ef1c0260.js','_nuxt/index.moble-legacy.210868b8.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.fa759a0f.js','_nuxt/index.pc-legacy.0a83738a.js','_nuxt/index.pc-legacy.46f1cbf7.js','_nuxt/index.pc-legacy.48711999.js','_nuxt/index.pc-legacy.ba036331.js','_nuxt/index.pc-legacy.c7e1e539.js','_nuxt/index.pc-legacy.edb80013.js','_nuxt/index.pc-legacy.ee628d75.js','_nuxt/index.pc-legacy.fb185d18.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.177f3325.js','_nuxt/index.pc.342fc1ff.js','_nuxt/index.pc.432be03d.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.728d023c.js','_nuxt/index.pc.757de627.js','_nuxt/index.pc.a3cfd538.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.b75128ea.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.edcc8404.js','_nuxt/index.pc.vue-legacy.a225462b.js','_nuxt/index.pc.vue-legacy.d1065530.js','_nuxt/index.pc.vue.64be086e.js','_nuxt/index.pc.vue.ed69bfc0.js','_nuxt/index.vue-legacy.0ebc4d3f.js','_nuxt/index.vue-legacy.268a2f51.js','_nuxt/index.vue-legacy.48b1b22e.js','_nuxt/index.vue-legacy.6bcf995e.js','_nuxt/index.vue-legacy.fdb8e54e.js','_nuxt/index.vue.4d18895a.js','_nuxt/index.vue.829600a5.js','_nuxt/index.vue.af22b97c.js','_nuxt/index.vue.be2ce16b.js','_nuxt/index.vue.e7784950.js','_nuxt/indexMixin-legacy.f618a09f.js','_nuxt/indexMixin.1b9c16de.js','_nuxt/index_mobile-legacy.85ba9b31.js','_nuxt/index_mobile-legacy.e3df3245.js','_nuxt/index_mobile.8e67f26c.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.be56f15d.js','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.c4a72765.js','_nuxt/index_pc-legacy.dc61442f.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.98a287dc.js','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.e3d1e660.js','_nuxt/init-legacy.05cdf48a.js','_nuxt/init.020adef3.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.ed261b7c.js','_nuxt/login.modal.pc.1679f378.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.4368ebcd.js','_nuxt/model-cell.0d4424be.js','_nuxt/model-legacy.06531414.js','_nuxt/model-legacy.0e50b5a2.js','_nuxt/model-legacy.27ebedd3.js','_nuxt/model-legacy.293c1879.js','_nuxt/model-legacy.38dbffd6.js','_nuxt/model-legacy.3fed0c1f.js','_nuxt/model-legacy.45648fcd.js','_nuxt/model-legacy.47d3f414.js','_nuxt/model-legacy.4b814366.js','_nuxt/model-legacy.4d067149.js','_nuxt/model-legacy.76103307.js','_nuxt/model-legacy.7f6eec2a.js','_nuxt/model-legacy.7f753ebe.js','_nuxt/model-legacy.827f7926.js','_nuxt/model-legacy.837d1770.js','_nuxt/model-legacy.8fa17e7f.js','_nuxt/model-legacy.8fbc3846.js','_nuxt/model-legacy.92760662.js','_nuxt/model-legacy.c43d5806.js','_nuxt/model-legacy.d01eddd9.js','_nuxt/model-legacy.d281d200.js','_nuxt/model-legacy.d3d0ffca.js','_nuxt/model.0d06613b.js','_nuxt/model.1f2a1e80.js','_nuxt/model.229cee98.js','_nuxt/model.23063bde.js','_nuxt/model.2c11ffad.js','_nuxt/model.53c30838.js','_nuxt/model.573036b1.js','_nuxt/model.591db487.js','_nuxt/model.64e47706.js','_nuxt/model.652975f0.js','_nuxt/model.6831d82c.js','_nuxt/model.7379cb97.js','_nuxt/model.7c86d7e6.js','_nuxt/model.90ac8fe1.js','_nuxt/model.a5c404ea.js','_nuxt/model.a8e84f08.js','_nuxt/model.bc94fc6b.js','_nuxt/model.c83a8c37.js','_nuxt/model.d95971ba.js','_nuxt/model.dc1c3ca2.js','_nuxt/model.dfc3a80b.js','_nuxt/model.e80c7cbe.js','_nuxt/pay-drawer-legacy.2a106e98.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.85de9ea2.js','_nuxt/pay-legacy.9082a526.js','_nuxt/pay-legacy.f12f1a2e.js','_nuxt/pay-step-legacy.4ccff05b.js','_nuxt/pay-step.50a42bc7.js','_nuxt/pay-step.pc-legacy.98a1d8ed.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.91f4897b.js','_nuxt/pay.4bf1bf41.css','_nuxt/pay.ba0e62c7.js','_nuxt/pay.cf9e3b84.css','_nuxt/pay.f65969b2.js','_nuxt/payGoodsListItem-legacy.1dc9b132.js','_nuxt/payGoodsListItem-legacy.51b69068.js','_nuxt/payGoodsListItem.284f83b4.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.c7f3b00e.js','_nuxt/payMixin-legacy.522ce507.js','_nuxt/payMixin.ac9362f3.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.94b15778.js','_nuxt/public.3470e39d.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.5766851f.js','_nuxt/recentItemMixin.848511a4.js','_nuxt/recharge-item-legacy.078b8f87.js','_nuxt/recharge-item.6ac2af33.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.ec2bbb2e.js','_nuxt/refresh-modal.5de1ad01.js','_nuxt/report-legacy.0dbfda64.js','_nuxt/report-legacy.1679f9ba.js','_nuxt/report-legacy.1747a422.js','_nuxt/report-legacy.1ef9414e.js','_nuxt/report-legacy.30befab3.js','_nuxt/report-legacy.349452c7.js','_nuxt/report-legacy.4e6ca4d1.js','_nuxt/report-legacy.59d13a74.js','_nuxt/report-legacy.68d5c797.js','_nuxt/report-legacy.714f2250.js','_nuxt/report-legacy.72c4a3f8.js','_nuxt/report-legacy.770721f9.js','_nuxt/report-legacy.7d3f60a8.js','_nuxt/report-legacy.90180656.js','_nuxt/report-legacy.d5e4f1ac.js','_nuxt/report-legacy.d6734ce3.js','_nuxt/report-legacy.e53a3851.js','_nuxt/report-legacy.ff353880.js','_nuxt/report.03005d9c.js','_nuxt/report.0682d224.js','_nuxt/report.1099fc5e.js','_nuxt/report.14d94c2f.js','_nuxt/report.276b3ba6.js','_nuxt/report.317f59fe.js','_nuxt/report.3ed9f1ef.js','_nuxt/report.4e9bbf3d.js','_nuxt/report.53f90f03.js','_nuxt/report.60c2d675.js','_nuxt/report.9e408576.js','_nuxt/report.a3841315.js','_nuxt/report.a66c3853.js','_nuxt/report.af19ecc3.js','_nuxt/report.b8d654f1.js','_nuxt/report.c5c26122.js','_nuxt/report.c897b0fa.js','_nuxt/report.cc404892.js','_nuxt/result-view-legacy.052a8886.js','_nuxt/result-view.caaa405b.js','_nuxt/resultModalMixin-legacy.3cfeea39.js','_nuxt/resultModalMixin.fe7d7755.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.0971e5a9.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.5e5e1a81.js','_nuxt/search-legacy.3df1b9be.js','_nuxt/search-modal.pc-legacy.c4643bc8.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.8143d5db.js','_nuxt/search-page.mobile-legacy.59026676.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search-page.mobile.d655722c.js','_nuxt/search.31a47b3a.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.87323b20.js','_nuxt/switch-legacy.e65947ea.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.91498ac8.js','_nuxt/switch.9fcbe5a9.js','_nuxt/switchMixin-legacy.6fc28b2b.js','_nuxt/switchMixin.6d9f3310.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.2ffa2c51.js','_nuxt/user-info.096c2b18.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.413e9c7e.js','_nuxt/utilities.appleyPay.c9b08c3d.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.bd012229.js','_nuxt/vue.f36acd1f.271e53ec.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
})

const strategies = {
  networkFirst: 1,
  cacheFirst: 2,
}

const cacheFirst = async (event) => {
  let request = event.request
  const responseFromCache = await caches.match(request)
  if (responseFromCache) {
    return responseFromCache
  }
  try {
    const responseFromNetwork = await fetch(request.clone())
    putInCache(request, responseFromNetwork.clone())
    return responseFromNetwork
  } catch (error) {
    return errorRes()
  }
}

const networkFirst = async (event) => {
  let request = event.request
  try {
    const responseFromNetwork = await fetch(request.clone())
    putInCache(request, responseFromNetwork.clone())
    return responseFromNetwork
  } catch (error) {
    postMessage(event, { event: 'offline' })
    const url = request.url.split('?')[0]
    const r = matchRoute(url)
    if (r) {
      const index = getIndexUrl()
      request = index
    }
    const responseFromCache = await caches.match(request)
    if (responseFromCache) {
      return responseFromCache
    }
    return errorRes()
  }
}

function postMessage(event, data) {
  try {
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
          let msg = JSON.stringify({
            client: client.id,
            data: data,
          })
          client.postMessage(msg)
      })
    })
  } catch (e) {
    console.error(e)
  }
}

function errorRes() {
  return new Response('Network error happened', {
    status: 408,
    headers: { 'Content-Type': 'text/plain' },
  })
}

function getResourceByStrategy(request, first) {
  if (first === strategies.cacheFirst) {
    return cacheFirst(request)
  }
  return networkFirst(request)
}

function matchRoute(url) {
  for (let i = 0; i < routes.length; i += 1) {
    const r1 = location.origin + public_path + routes[i]
    const r2 = location.origin + public_path + routes[i] + '/'
    if (url === r1 || url === r2) {
      return true
    }
  }
  return false
}

function getIndexUrl() {
  return location.origin + public_path + 'index.html'
}

self.addEventListener('fetch', function (event) {
  if (event.request.url.indexOf(location.origin) >= 0) {
    if (event.request.url.endsWith('.html') || event.request.url.indexOf('_nuxt') < 0) {
      console.log('service worker', '1.0.292', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



