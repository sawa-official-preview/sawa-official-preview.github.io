

const cacheVersion = 'v1.0.287'

console.log('service worker version', '1.0.287')

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
  console.log('service worker active', '1.0.287', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.90cb70a0.js','_nuxt/AboutSA.mobile.e6dbded6.js','_nuxt/AboutSA2-legacy.1800cff3.js','_nuxt/AboutSA2.83e7682b.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.62b2e1a9.js','_nuxt/PayUtils.fcb03df7.js','_nuxt/UICarouselView-legacy.3e5cc87c.js','_nuxt/UICarouselView.6ccc29b4.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.20784f31.js','_nuxt/account-item-legacy.5c7de454.js','_nuxt/account-item.0e646baf.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.f91911fa.js','_nuxt/api-legacy.8e46e69d.js','_nuxt/api.3fab7b82.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.1d66cdae.js','_nuxt/bank-views.8665c509.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/12d5b858-d6b0-4d12-8c96-64a13fbb956f.json','_nuxt/builds/meta/dev.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.242d9d4f.js','_nuxt/channel-view.ab1db232.js','_nuxt/cko-card-list-legacy.964bdbaa.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.8276ad3d.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.80eb7cfb.js','_nuxt/enter-legacy.923251d1.js','_nuxt/enter.342b3289.css','_nuxt/enter.c5bb3a27.js','_nuxt/enter.d7350a96.css','_nuxt/enter.faeedea4.js','_nuxt/enterMixin-legacy.9ba2d033.js','_nuxt/enterMixin.fb3704b8.js','_nuxt/entry-legacy.691d0af5.js','_nuxt/entry.38fe3ee2.js','_nuxt/entry.52209fbe.css','_nuxt/error-404-legacy.a312bd75.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.c292a3fa.js','_nuxt/error-500-legacy.e175f959.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.f2c7eb16.js','_nuxt/error-legacy.2513f320.js','_nuxt/error.06313295.css','_nuxt/error.c84ca3fc.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.ec452071.js','_nuxt/frames.6b66c8a8.js','_nuxt/home-legacy.51728869.js','_nuxt/home.63eb863a.css','_nuxt/home.78d24866.js','_nuxt/home.pc-legacy.8eef3c6e.js','_nuxt/home.pc.8be3e011.css','_nuxt/home.pc.d5f65e8b.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0254a55b.js','_nuxt/index-legacy.08f04497.js','_nuxt/index-legacy.0c56b047.js','_nuxt/index-legacy.0c6ad357.js','_nuxt/index-legacy.11c70aab.js','_nuxt/index-legacy.1571756a.js','_nuxt/index-legacy.1cfdd9be.js','_nuxt/index-legacy.1e038be5.js','_nuxt/index-legacy.1e6cee00.js','_nuxt/index-legacy.20b9da41.js','_nuxt/index-legacy.22b4b00d.js','_nuxt/index-legacy.234c8e76.js','_nuxt/index-legacy.274a2e22.js','_nuxt/index-legacy.2e6812c7.js','_nuxt/index-legacy.34a85fc1.js','_nuxt/index-legacy.373f3db9.js','_nuxt/index-legacy.3751a67c.js','_nuxt/index-legacy.377b8273.js','_nuxt/index-legacy.390d31f4.js','_nuxt/index-legacy.4221486c.js','_nuxt/index-legacy.450b4abd.js','_nuxt/index-legacy.51e063b4.js','_nuxt/index-legacy.5c30c859.js','_nuxt/index-legacy.74e57893.js','_nuxt/index-legacy.761135b3.js','_nuxt/index-legacy.76b68704.js','_nuxt/index-legacy.7cc0bb15.js','_nuxt/index-legacy.88e8dae1.js','_nuxt/index-legacy.9500cc18.js','_nuxt/index-legacy.95162fcb.js','_nuxt/index-legacy.970fac05.js','_nuxt/index-legacy.9a6dd6eb.js','_nuxt/index-legacy.9a6fa419.js','_nuxt/index-legacy.9e5478d0.js','_nuxt/index-legacy.a859c435.js','_nuxt/index-legacy.b291e7d3.js','_nuxt/index-legacy.b686de4c.js','_nuxt/index-legacy.b77b7f5e.js','_nuxt/index-legacy.bd2d4faa.js','_nuxt/index-legacy.e9452f8c.js','_nuxt/index-legacy.ef1fc289.js','_nuxt/index-legacy.f0bc8a4a.js','_nuxt/index-legacy.f1e3418f.js','_nuxt/index-legacy.f55e7302.js','_nuxt/index-legacy.f5c77a40.js','_nuxt/index-legacy.ff743883.js','_nuxt/index.06662757.js','_nuxt/index.0d6b704b.js','_nuxt/index.100dcc7d.css','_nuxt/index.1211ff13.js','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.179a8b66.js','_nuxt/index.1b554825.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1de14f4c.js','_nuxt/index.23a90349.css','_nuxt/index.270ef644.js','_nuxt/index.27517127.css','_nuxt/index.319365be.js','_nuxt/index.3232dde9.js','_nuxt/index.3e3f66aa.css','_nuxt/index.44638243.css','_nuxt/index.462e213f.js','_nuxt/index.47599534.css','_nuxt/index.48618af6.js','_nuxt/index.49c36d7a.js','_nuxt/index.4abae217.js','_nuxt/index.4f37d3c4.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.542aeb7e.js','_nuxt/index.57bea906.js','_nuxt/index.609a047b.css','_nuxt/index.61302097.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.71d24d3c.css','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7d595fa8.js','_nuxt/index.7dcb6f02.js','_nuxt/index.803a4ec7.js','_nuxt/index.815202c8.css','_nuxt/index.81974d9f.js','_nuxt/index.83eb0f2b.js','_nuxt/index.8676aa4a.js','_nuxt/index.892ecbab.js','_nuxt/index.8f45d0a4.js','_nuxt/index.92936e2f.js','_nuxt/index.939d902d.js','_nuxt/index.93c8dad0.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a475163c.js','_nuxt/index.a64a07b4.js','_nuxt/index.a76252f9.css','_nuxt/index.a8688bf7.js','_nuxt/index.ae40bec6.css','_nuxt/index.aed8df7c.js','_nuxt/index.b0bd384f.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.bb6942b7.js','_nuxt/index.bba14cd2.js','_nuxt/index.bd5b84e0.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c8621a6b.css','_nuxt/index.c9fc8d30.js','_nuxt/index.cbe685fd.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.de06646b.js','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e74f3d3c.js','_nuxt/index.eaf1c8b9.js','_nuxt/index.ed11ce29.js','_nuxt/index.ee412d33.js','_nuxt/index.eeba9a52.js','_nuxt/index.f0c87bad.js','_nuxt/index.f1f7257a.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.1e828c9b.js','_nuxt/index.mobile-legacy.a654cd23.js','_nuxt/index.mobile-legacy.b5c14308.js','_nuxt/index.mobile-legacy.c8ff7ad1.js','_nuxt/index.mobile-legacy.ed471a1d.js','_nuxt/index.mobile.0db6050f.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.635d45cd.js','_nuxt/index.mobile.8bb7ab8e.js','_nuxt/index.mobile.956c61ef.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.aee6919f.js','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.moble-legacy.61a5c277.js','_nuxt/index.moble.1329d91e.js','_nuxt/index.moble.4669505e.css','_nuxt/index.pc-legacy.08af8486.js','_nuxt/index.pc-legacy.1737580d.js','_nuxt/index.pc-legacy.3691eba4.js','_nuxt/index.pc-legacy.3a0a6a8c.js','_nuxt/index.pc-legacy.419e2089.js','_nuxt/index.pc-legacy.6fb80577.js','_nuxt/index.pc-legacy.737f0fd2.js','_nuxt/index.pc-legacy.ab81e0e6.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.2cfe0c80.js','_nuxt/index.pc.306abc77.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.7441d1f4.js','_nuxt/index.pc.902c93c4.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.b24397ea.js','_nuxt/index.pc.b5a2f028.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.da83dc97.js','_nuxt/index.pc.e46a8d33.js','_nuxt/index.pc.vue-legacy.4b109498.js','_nuxt/index.pc.vue-legacy.c5b8376e.js','_nuxt/index.pc.vue.0cf2ebea.js','_nuxt/index.pc.vue.6e25fc7b.js','_nuxt/index.vue-legacy.0b38d0f0.js','_nuxt/index.vue-legacy.171488a7.js','_nuxt/index.vue-legacy.80d2cecb.js','_nuxt/index.vue-legacy.c3e0ee74.js','_nuxt/index.vue-legacy.f2a6b2a9.js','_nuxt/index.vue.07b576ab.js','_nuxt/index.vue.179f9770.js','_nuxt/index.vue.5f3662f1.js','_nuxt/index.vue.c27841fc.js','_nuxt/index.vue.e6e6f65f.js','_nuxt/indexMixin-legacy.6c836568.js','_nuxt/indexMixin.88ee51e2.js','_nuxt/index_mobile-legacy.93dbd06a.js','_nuxt/index_mobile-legacy.a0ab51d3.js','_nuxt/index_mobile.2554f867.js','_nuxt/index_mobile.36e514cf.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.1a740871.js','_nuxt/index_pc-legacy.4b709270.js','_nuxt/index_pc.0a8fb166.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.684f9d62.js','_nuxt/index_pc.a71cff98.css','_nuxt/init-legacy.be171097.js','_nuxt/init.bd5cc951.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.80c4f197.js','_nuxt/login.modal.pc.3160c87c.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.ec7b6967.js','_nuxt/model-cell.657348ee.js','_nuxt/model-legacy.0d8aaf52.js','_nuxt/model-legacy.183258ea.js','_nuxt/model-legacy.291c1fc0.js','_nuxt/model-legacy.2a226b86.js','_nuxt/model-legacy.2ecafd98.js','_nuxt/model-legacy.371c6593.js','_nuxt/model-legacy.3e894c1d.js','_nuxt/model-legacy.5652ef65.js','_nuxt/model-legacy.5dfde6d4.js','_nuxt/model-legacy.63890c79.js','_nuxt/model-legacy.6cf5d36e.js','_nuxt/model-legacy.72cab082.js','_nuxt/model-legacy.73d185b2.js','_nuxt/model-legacy.75bc5cb2.js','_nuxt/model-legacy.7f5a7d3f.js','_nuxt/model-legacy.8bfc3822.js','_nuxt/model-legacy.8e37ae3f.js','_nuxt/model-legacy.a57c9aea.js','_nuxt/model-legacy.a98d4032.js','_nuxt/model-legacy.ca7a9578.js','_nuxt/model-legacy.e84f3584.js','_nuxt/model-legacy.f72fba15.js','_nuxt/model.018473f3.js','_nuxt/model.022e366c.js','_nuxt/model.0a6e436e.js','_nuxt/model.1afa0601.js','_nuxt/model.2394ce49.js','_nuxt/model.49b055e0.js','_nuxt/model.4de97d8e.js','_nuxt/model.541d110f.js','_nuxt/model.55896904.js','_nuxt/model.591b28d2.js','_nuxt/model.624ed88d.js','_nuxt/model.66c291fc.js','_nuxt/model.67b172fc.js','_nuxt/model.760da7d9.js','_nuxt/model.91085f21.js','_nuxt/model.96ec78a9.js','_nuxt/model.ab631c79.js','_nuxt/model.cc8863a0.js','_nuxt/model.d1521294.js','_nuxt/model.d265a158.js','_nuxt/model.f3f74e74.js','_nuxt/model.fed5336d.js','_nuxt/pay-drawer-legacy.92752693.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.9771a5e9.js','_nuxt/pay-legacy.54780d6b.js','_nuxt/pay-legacy.811a70d5.js','_nuxt/pay-step-legacy.f598bbd4.js','_nuxt/pay-step.77a22e66.js','_nuxt/pay-step.pc-legacy.911619b0.js','_nuxt/pay-step.pc.5d3c406f.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.4bf1bf41.css','_nuxt/pay.6e272385.js','_nuxt/pay.cf9e3b84.css','_nuxt/pay.fbff0036.js','_nuxt/payGoodsListItem-legacy.73e757c6.js','_nuxt/payGoodsListItem-legacy.eab96579.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.3ebc85c3.js','_nuxt/payGoodsListItem.6be5420e.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.2c316b65.js','_nuxt/payMixin.5d68fa68.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.6da51136.js','_nuxt/public.75b60955.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.578db485.js','_nuxt/recentItemMixin.4ef6713e.js','_nuxt/recharge-item-legacy.1f5ba4f8.js','_nuxt/recharge-item.5ac69929.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.7baabe54.js','_nuxt/refresh-modal.fc55bb54.js','_nuxt/report-legacy.02afdbe0.js','_nuxt/report-legacy.0d381355.js','_nuxt/report-legacy.173a0621.js','_nuxt/report-legacy.312eaf6a.js','_nuxt/report-legacy.3dbde295.js','_nuxt/report-legacy.479d7ae6.js','_nuxt/report-legacy.59843685.js','_nuxt/report-legacy.59950902.js','_nuxt/report-legacy.5ffa4173.js','_nuxt/report-legacy.73fa72a8.js','_nuxt/report-legacy.754944d1.js','_nuxt/report-legacy.830b8e1a.js','_nuxt/report-legacy.94b067ed.js','_nuxt/report-legacy.a183d581.js','_nuxt/report-legacy.a27ddf70.js','_nuxt/report-legacy.aab90cfc.js','_nuxt/report-legacy.bf210900.js','_nuxt/report-legacy.ec760490.js','_nuxt/report.163b899f.js','_nuxt/report.1da1ec54.js','_nuxt/report.2a7872ff.js','_nuxt/report.35db9d68.js','_nuxt/report.47cd4f70.js','_nuxt/report.50f1cdfb.js','_nuxt/report.586e53e7.js','_nuxt/report.68ee5ad9.js','_nuxt/report.6f1ab64f.js','_nuxt/report.7e5b46f7.js','_nuxt/report.91532c24.js','_nuxt/report.ad3f221f.js','_nuxt/report.b6dd0552.js','_nuxt/report.b8e684a6.js','_nuxt/report.c911a064.js','_nuxt/report.d1e1daaf.js','_nuxt/report.e2247670.js','_nuxt/report.eb3224e8.js','_nuxt/result-view-legacy.83797175.js','_nuxt/result-view.fa022d40.js','_nuxt/resultModalMixin-legacy.a3e48aff.js','_nuxt/resultModalMixin.0dddee84.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.002f6df0.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.1f3e8a85.js','_nuxt/search-legacy.f3757f0d.js','_nuxt/search-modal.pc-legacy.96e351dc.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.1748edee.js','_nuxt/search-page.mobile-legacy.fe6b1b61.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search-page.mobile.ca5bfb71.js','_nuxt/search.314d0be8.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.19e4ff8f.js','_nuxt/switch-legacy.8cb13540.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.6d0d6785.js','_nuxt/switch.71976432.css','_nuxt/switch.87dec917.js','_nuxt/switchMixin-legacy.36f298af.js','_nuxt/switchMixin.3537fe5f.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.010cfd76.js','_nuxt/user-info.1f3cbc1b.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.25372f33.js','_nuxt/utilities.appleyPay.935eaaab.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.421ad0f5.js','_nuxt/vue.f36acd1f.c0308637.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.287', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



