

const cacheVersion = 'v1.0.293'

console.log('service worker version', '1.0.293')

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
  console.log('service worker active', '1.0.293', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.d441d49d.js','_nuxt/AboutSA.mobile.9a66b6ad.js','_nuxt/AboutSA2-legacy.4f266d99.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.f06d3f4c.js','_nuxt/PayUtils-legacy.c38b6833.js','_nuxt/PayUtils.f99cabd1.js','_nuxt/UICarouselView-legacy.3316ebd0.js','_nuxt/UICarouselView.a2214308.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.3548314a.js','_nuxt/account-item-legacy.71ef6fdd.js','_nuxt/account-item.003a5b58.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.5cd0fc99.js','_nuxt/account-item.950742c1.css','_nuxt/api-legacy.4376395e.js','_nuxt/api.f740e4f7.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.8f9fc8f9.js','_nuxt/bank-views.7c1a19be.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/0fd915c5-223d-42e5-ae82-2f144da85711.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.7b4a133d.js','_nuxt/channel-view.99005321.js','_nuxt/cko-card-list-legacy.4452052c.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.debb17a3.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.6784f4c1.js','_nuxt/enter-legacy.b17e7cc9.js','_nuxt/enter.342b3289.css','_nuxt/enter.8eae7862.js','_nuxt/enter.d7350a96.css','_nuxt/enter.fcac845e.js','_nuxt/enterMixin-legacy.ea8bcc6c.js','_nuxt/enterMixin.61918a66.js','_nuxt/entry-legacy.2e0c4f1e.js','_nuxt/entry.52209fbe.css','_nuxt/entry.9b30caf9.js','_nuxt/error-404-legacy.a9e6638b.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.c38bdda8.js','_nuxt/error-500-legacy.c034d0f1.js','_nuxt/error-500.6998cf4a.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.76e5b963.js','_nuxt/error.06313295.css','_nuxt/error.32705a7f.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.3cffac1d.js','_nuxt/frames.44439bf5.js','_nuxt/home-legacy.a679e0a7.js','_nuxt/home.63eb863a.css','_nuxt/home.a1b55f87.js','_nuxt/home.pc-legacy.e7a4ba61.js','_nuxt/home.pc.6d16a4fa.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.00de1d3f.js','_nuxt/index-legacy.0a05dbd4.js','_nuxt/index-legacy.0c9f567c.js','_nuxt/index-legacy.11b5bab9.js','_nuxt/index-legacy.124a7e58.js','_nuxt/index-legacy.18816067.js','_nuxt/index-legacy.194bb014.js','_nuxt/index-legacy.1ad6cbcb.js','_nuxt/index-legacy.205290d3.js','_nuxt/index-legacy.33454eae.js','_nuxt/index-legacy.3df433e1.js','_nuxt/index-legacy.3f8a566d.js','_nuxt/index-legacy.4f605cd2.js','_nuxt/index-legacy.510ae241.js','_nuxt/index-legacy.58a90526.js','_nuxt/index-legacy.5a7215d6.js','_nuxt/index-legacy.5bfa411c.js','_nuxt/index-legacy.5dc5c19c.js','_nuxt/index-legacy.5e523115.js','_nuxt/index-legacy.67c2f7e9.js','_nuxt/index-legacy.6d823709.js','_nuxt/index-legacy.70b90104.js','_nuxt/index-legacy.766f1429.js','_nuxt/index-legacy.7790a1c5.js','_nuxt/index-legacy.78e5e488.js','_nuxt/index-legacy.79ecaf70.js','_nuxt/index-legacy.7a710362.js','_nuxt/index-legacy.87e2ac37.js','_nuxt/index-legacy.935bcbab.js','_nuxt/index-legacy.98aaa336.js','_nuxt/index-legacy.9b3f0694.js','_nuxt/index-legacy.9f4c3e39.js','_nuxt/index-legacy.a056ee31.js','_nuxt/index-legacy.a4a5f1cf.js','_nuxt/index-legacy.a595301e.js','_nuxt/index-legacy.ac3b973b.js','_nuxt/index-legacy.bf486846.js','_nuxt/index-legacy.bfc23593.js','_nuxt/index-legacy.d05e4eaa.js','_nuxt/index-legacy.d68e72a0.js','_nuxt/index-legacy.dc6caed3.js','_nuxt/index-legacy.eef132b4.js','_nuxt/index-legacy.f1d5c898.js','_nuxt/index-legacy.f1e8a0ba.js','_nuxt/index-legacy.f3668b5b.js','_nuxt/index-legacy.fa5e67d5.js','_nuxt/index.0392ea77.js','_nuxt/index.0ba9853c.js','_nuxt/index.0cfad559.js','_nuxt/index.0de94cd8.js','_nuxt/index.100dcc7d.css','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.19f164d5.js','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.2b48d5aa.js','_nuxt/index.345f2749.js','_nuxt/index.35bd7cb9.js','_nuxt/index.3e3f66aa.css','_nuxt/index.42251ae5.js','_nuxt/index.44638243.css','_nuxt/index.45a0b164.js','_nuxt/index.47599534.css','_nuxt/index.48f737bd.js','_nuxt/index.4f4f06ee.js','_nuxt/index.502888e6.js','_nuxt/index.512a6d8e.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.530786d4.js','_nuxt/index.5407d413.js','_nuxt/index.5abf2c60.js','_nuxt/index.609a047b.css','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.6eb25698.js','_nuxt/index.71d24d3c.css','_nuxt/index.764f87c1.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7bd123c4.js','_nuxt/index.7cb97343.js','_nuxt/index.7ce3388b.js','_nuxt/index.808de5db.js','_nuxt/index.815202c8.css','_nuxt/index.8a8115c9.js','_nuxt/index.95812aa9.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9e1b0ea6.js','_nuxt/index.9faa3fdf.css','_nuxt/index.a022a211.js','_nuxt/index.a186eb11.css','_nuxt/index.a76252f9.css','_nuxt/index.ae40bec6.css','_nuxt/index.b2466aa6.js','_nuxt/index.b26ad712.css','_nuxt/index.b2adf953.js','_nuxt/index.b3f7211d.js','_nuxt/index.b65ede8a.js','_nuxt/index.b6a6e3b8.js','_nuxt/index.b6b233ed.css','_nuxt/index.bc2307d5.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c7b782c5.js','_nuxt/index.c8621a6b.css','_nuxt/index.ccfed80c.js','_nuxt/index.cd0fb55e.js','_nuxt/index.cd4c2b96.js','_nuxt/index.ce117761.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d793bac5.js','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dc52bf15.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e095a45f.js','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e722d909.js','_nuxt/index.e9348645.js','_nuxt/index.efab7f49.js','_nuxt/index.f3e1b1e9.js','_nuxt/index.f6b197de.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.0838ae6a.js','_nuxt/index.mobile-legacy.3680dc45.js','_nuxt/index.mobile-legacy.4028b6b0.js','_nuxt/index.mobile-legacy.cba6b41d.js','_nuxt/index.mobile-legacy.e2999b69.js','_nuxt/index.mobile.0a219bf4.js','_nuxt/index.mobile.16cff006.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.80d615cd.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.d024377c.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.mobile.f940bfc1.js','_nuxt/index.moble-legacy.012d8543.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.98cbe51f.js','_nuxt/index.pc-legacy.20f53b6a.js','_nuxt/index.pc-legacy.4b946b66.js','_nuxt/index.pc-legacy.5005576c.js','_nuxt/index.pc-legacy.61f36d8c.js','_nuxt/index.pc-legacy.a3251097.js','_nuxt/index.pc-legacy.cfbb1c2e.js','_nuxt/index.pc-legacy.eda63cae.js','_nuxt/index.pc-legacy.edb78c86.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.0db52f50.js','_nuxt/index.pc.1354c89a.js','_nuxt/index.pc.40428e2a.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.685127ce.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.94ecec98.js','_nuxt/index.pc.9b5b93db.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.f46413ff.js','_nuxt/index.pc.fab145a0.js','_nuxt/index.pc.vue-legacy.cd86da06.js','_nuxt/index.pc.vue-legacy.db8cf887.js','_nuxt/index.pc.vue.0605a28d.js','_nuxt/index.pc.vue.dabe5f87.js','_nuxt/index.vue-legacy.6534784d.js','_nuxt/index.vue-legacy.6fb19592.js','_nuxt/index.vue-legacy.8b877f05.js','_nuxt/index.vue-legacy.b3edb5bc.js','_nuxt/index.vue-legacy.dcdb960e.js','_nuxt/index.vue.5d164b40.js','_nuxt/index.vue.9cb1850d.js','_nuxt/index.vue.d517e6ba.js','_nuxt/index.vue.f4fe4153.js','_nuxt/index.vue.f99a2522.js','_nuxt/indexMixin-legacy.f2ca3bb7.js','_nuxt/indexMixin.408a5a8d.js','_nuxt/index_mobile-legacy.81c589b5.js','_nuxt/index_mobile-legacy.f74f0887.js','_nuxt/index_mobile.3b43d575.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ccfc4522.js','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.3df6d54c.js','_nuxt/index_pc-legacy.950af576.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.6961a0b2.js','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.c876b262.js','_nuxt/init-legacy.4f267c60.js','_nuxt/init.25eaf1fc.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.f1b5b1da.js','_nuxt/login.modal.pc.7fc681ee.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.5e62c7c1.js','_nuxt/model-cell.97a2ddb6.js','_nuxt/model-legacy.1075717f.js','_nuxt/model-legacy.1a4046ad.js','_nuxt/model-legacy.2dcee478.js','_nuxt/model-legacy.35a42860.js','_nuxt/model-legacy.36b09fff.js','_nuxt/model-legacy.394025c8.js','_nuxt/model-legacy.3ed40b0d.js','_nuxt/model-legacy.57f66bd9.js','_nuxt/model-legacy.70646740.js','_nuxt/model-legacy.815eff72.js','_nuxt/model-legacy.8b4df90d.js','_nuxt/model-legacy.9072c0e6.js','_nuxt/model-legacy.9fea4526.js','_nuxt/model-legacy.a6b849d2.js','_nuxt/model-legacy.b350e3e2.js','_nuxt/model-legacy.b4a2d7ca.js','_nuxt/model-legacy.d1a746d2.js','_nuxt/model-legacy.d3c22382.js','_nuxt/model-legacy.d909b3b3.js','_nuxt/model-legacy.e9210a10.js','_nuxt/model-legacy.f904b7b7.js','_nuxt/model-legacy.fc59f3e1.js','_nuxt/model.03e59930.js','_nuxt/model.07889046.js','_nuxt/model.20d2776c.js','_nuxt/model.3a8c29f5.js','_nuxt/model.3f01996e.js','_nuxt/model.3f57fa7c.js','_nuxt/model.5d5e5275.js','_nuxt/model.6a5f4a1e.js','_nuxt/model.7bd77c95.js','_nuxt/model.7c0f032b.js','_nuxt/model.7f4723b9.js','_nuxt/model.8e332929.js','_nuxt/model.9af3c6ae.js','_nuxt/model.aaa95363.js','_nuxt/model.b06a5f2c.js','_nuxt/model.b3e308e5.js','_nuxt/model.bc288dc0.js','_nuxt/model.bca2a792.js','_nuxt/model.ccd5c038.js','_nuxt/model.d40a9f2d.js','_nuxt/model.dfa7ed86.js','_nuxt/model.ead9085d.js','_nuxt/pay-drawer-legacy.5da8e797.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.caa48830.js','_nuxt/pay-legacy.187e1076.js','_nuxt/pay-legacy.fe1fe39b.js','_nuxt/pay-step-legacy.d1f799f3.js','_nuxt/pay-step.78191eea.js','_nuxt/pay-step.pc-legacy.11165add.js','_nuxt/pay-step.pc.50d331c8.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.4bf1bf41.css','_nuxt/pay.6507bb96.js','_nuxt/pay.b3d978e3.js','_nuxt/pay.cf9e3b84.css','_nuxt/payGoodsListItem-legacy.8bdfdcf3.js','_nuxt/payGoodsListItem-legacy.a4d6e506.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.38e683ef.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.bc562a1f.js','_nuxt/payMixin-legacy.7996f719.js','_nuxt/payMixin.772c0293.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.486dfd02.js','_nuxt/public.9811da3b.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.60b22990.js','_nuxt/recentItemMixin.a47b4d8c.js','_nuxt/recharge-item-legacy.0cb25c66.js','_nuxt/recharge-item.935b9836.css','_nuxt/recharge-item.a7925398.js','_nuxt/refresh-modal-legacy.a781cfc9.js','_nuxt/refresh-modal.483e1742.js','_nuxt/report-legacy.1ef73f9a.js','_nuxt/report-legacy.1f82b497.js','_nuxt/report-legacy.265a38bc.js','_nuxt/report-legacy.284e0b16.js','_nuxt/report-legacy.6737141c.js','_nuxt/report-legacy.688ef543.js','_nuxt/report-legacy.83942840.js','_nuxt/report-legacy.873bb716.js','_nuxt/report-legacy.91c26c1f.js','_nuxt/report-legacy.94655b6b.js','_nuxt/report-legacy.ad1ddde3.js','_nuxt/report-legacy.bb852acb.js','_nuxt/report-legacy.c35d686e.js','_nuxt/report-legacy.c91223e0.js','_nuxt/report-legacy.cc73d23f.js','_nuxt/report-legacy.cde582a7.js','_nuxt/report-legacy.df7557b5.js','_nuxt/report-legacy.fe84b7bf.js','_nuxt/report.048ea7e6.js','_nuxt/report.060b7657.js','_nuxt/report.0ef1db86.js','_nuxt/report.3722f6ae.js','_nuxt/report.593cc4c6.js','_nuxt/report.5db20dbd.js','_nuxt/report.64c24687.js','_nuxt/report.6d27afcf.js','_nuxt/report.98ca9fb8.js','_nuxt/report.a3a09dba.js','_nuxt/report.a7a62092.js','_nuxt/report.ac2fc96d.js','_nuxt/report.ad3c036a.js','_nuxt/report.d6b04fa8.js','_nuxt/report.dc9daebb.js','_nuxt/report.f95353bc.js','_nuxt/report.ff2e7335.js','_nuxt/report.ffe76dfc.js','_nuxt/result-view-legacy.dcb27edd.js','_nuxt/result-view.e1d3dd57.js','_nuxt/resultModalMixin-legacy.051d491d.js','_nuxt/resultModalMixin.82a43eb7.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.59e34a28.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.aa28b932.js','_nuxt/search-legacy.7b35a570.js','_nuxt/search-modal.pc-legacy.f4fcda13.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.144c54dc.js','_nuxt/search-page.mobile-legacy.01118933.js','_nuxt/search-page.mobile.53c87af8.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search.368d8860.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.dd8ed632.js','_nuxt/switch-legacy.e094050e.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.c48cc404.js','_nuxt/switch.f8f963c3.js','_nuxt/switchMixin-legacy.71660afe.js','_nuxt/switchMixin.3538978e.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.3c6d8c07.js','_nuxt/user-info.79b1c45d.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.2a46b979.js','_nuxt/utilities.appleyPay.3a4746ee.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.08fedef3.js','_nuxt/vue.f36acd1f.2cec66b5.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.293', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



