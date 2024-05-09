

const cacheVersion = 'v1.0.291'

console.log('service worker version', '1.0.291')

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
  console.log('service worker active', '1.0.291', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.ed991a7a.js','_nuxt/AboutSA.mobile.79989805.js','_nuxt/AboutSA2-legacy.8648beb8.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.e9d417bc.js','_nuxt/PayUtils-legacy.0152a180.js','_nuxt/PayUtils.c7ef685c.js','_nuxt/UICarouselView-legacy.e3f35c81.js','_nuxt/UICarouselView.cee92281.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.a8985063.js','_nuxt/account-item-legacy.b3246e2a.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.aeb8256a.js','_nuxt/account-item.bddf9689.js','_nuxt/api-legacy.676c724d.js','_nuxt/api.6d1c5191.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.db4c9565.js','_nuxt/bank-views.f5c503e0.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/bfa59d09-f2df-4edc-87b1-47a789f48846.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.bb747069.js','_nuxt/channel-view.e87dcc9c.js','_nuxt/cko-card-list-legacy.d38b9c57.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.9f7f95d7.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.8a34df8a.js','_nuxt/enter-legacy.e74bea1b.js','_nuxt/enter.342b3289.css','_nuxt/enter.c296108a.js','_nuxt/enter.d048ec76.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.17511d15.js','_nuxt/enterMixin.532ea50b.js','_nuxt/entry-legacy.b303b088.js','_nuxt/entry.52209fbe.css','_nuxt/entry.fa65a2b3.js','_nuxt/error-404-legacy.8f556e4a.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.355553e6.js','_nuxt/error-500-legacy.fcf1058d.js','_nuxt/error-500.2c3e149e.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.8073b2c0.js','_nuxt/error.06313295.css','_nuxt/error.c89df13b.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.49b320d9.js','_nuxt/frames.b075c7a3.js','_nuxt/home-legacy.dee13ed1.js','_nuxt/home.63eb863a.css','_nuxt/home.c80a1453.js','_nuxt/home.pc-legacy.1c454146.js','_nuxt/home.pc.5e416da3.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.071f4ba1.js','_nuxt/index-legacy.12630fad.js','_nuxt/index-legacy.14cd82ac.js','_nuxt/index-legacy.1c4170ce.js','_nuxt/index-legacy.1d29e171.js','_nuxt/index-legacy.3083dcab.js','_nuxt/index-legacy.31e291a1.js','_nuxt/index-legacy.36f5fed1.js','_nuxt/index-legacy.3796199b.js','_nuxt/index-legacy.3a337f4a.js','_nuxt/index-legacy.3a99b526.js','_nuxt/index-legacy.4828dcb8.js','_nuxt/index-legacy.493de5ae.js','_nuxt/index-legacy.49479c97.js','_nuxt/index-legacy.50fe7973.js','_nuxt/index-legacy.54a00be9.js','_nuxt/index-legacy.5abf7371.js','_nuxt/index-legacy.5adaae10.js','_nuxt/index-legacy.605b7d4f.js','_nuxt/index-legacy.609421b9.js','_nuxt/index-legacy.674f4e96.js','_nuxt/index-legacy.6b263b7d.js','_nuxt/index-legacy.6d9b0f65.js','_nuxt/index-legacy.6db3e7d1.js','_nuxt/index-legacy.70086eaa.js','_nuxt/index-legacy.7aba5ef6.js','_nuxt/index-legacy.839512b1.js','_nuxt/index-legacy.83acea2d.js','_nuxt/index-legacy.903d00b0.js','_nuxt/index-legacy.90872583.js','_nuxt/index-legacy.953ca323.js','_nuxt/index-legacy.97bd5b12.js','_nuxt/index-legacy.99b57453.js','_nuxt/index-legacy.9e7de8d7.js','_nuxt/index-legacy.a88392ca.js','_nuxt/index-legacy.b3a7dd6a.js','_nuxt/index-legacy.b71ba5b5.js','_nuxt/index-legacy.bfaf6e54.js','_nuxt/index-legacy.c312eb1b.js','_nuxt/index-legacy.c53402b3.js','_nuxt/index-legacy.c779b0a8.js','_nuxt/index-legacy.d4cf4c32.js','_nuxt/index-legacy.de028178.js','_nuxt/index-legacy.de0953fc.js','_nuxt/index-legacy.e8f19cad.js','_nuxt/index-legacy.ee5f9b28.js','_nuxt/index.06f33193.js','_nuxt/index.0b695ac2.js','_nuxt/index.0dcdcfee.js','_nuxt/index.100dcc7d.css','_nuxt/index.12cdecd8.js','_nuxt/index.1366af17.js','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.1c18e6bb.css','_nuxt/index.1e446b55.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.28e604eb.js','_nuxt/index.2aff858f.js','_nuxt/index.2c4e64df.js','_nuxt/index.3b7c56bb.js','_nuxt/index.3e3f66aa.css','_nuxt/index.44638243.css','_nuxt/index.47599534.css','_nuxt/index.4a75a274.js','_nuxt/index.4f1a6e9e.js','_nuxt/index.502f9387.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.57165b47.js','_nuxt/index.58ed1fa7.js','_nuxt/index.609a047b.css','_nuxt/index.661533be.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.6c55afdb.js','_nuxt/index.71d24d3c.css','_nuxt/index.73d4c48d.js','_nuxt/index.771c13e6.css','_nuxt/index.77d93fe0.js','_nuxt/index.7b7671a9.css','_nuxt/index.7bd58ef3.js','_nuxt/index.7f9bd332.js','_nuxt/index.7fd15298.js','_nuxt/index.815202c8.css','_nuxt/index.880cf4ca.js','_nuxt/index.892e134a.js','_nuxt/index.8c0eb5ba.js','_nuxt/index.8f387edd.js','_nuxt/index.92931ad5.js','_nuxt/index.96699483.js','_nuxt/index.9b1599a9.css','_nuxt/index.9b3df9ac.js','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a76252f9.css','_nuxt/index.a99f1411.js','_nuxt/index.aaa517d2.js','_nuxt/index.ae40bec6.css','_nuxt/index.b26ad712.css','_nuxt/index.b388fa5b.js','_nuxt/index.b6b233ed.css','_nuxt/index.bc6cf3b2.js','_nuxt/index.c070fa34.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c8621a6b.css','_nuxt/index.cb8a240b.js','_nuxt/index.ccf826ea.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d5b8d35f.js','_nuxt/index.d83f749f.css','_nuxt/index.d8c14154.js','_nuxt/index.d945de72.js','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e048b83c.js','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e952dcaf.js','_nuxt/index.ecd6dbce.js','_nuxt/index.ed6e6f95.js','_nuxt/index.ed80974f.js','_nuxt/index.f7872780.css','_nuxt/index.f8e74266.js','_nuxt/index.fa6af505.css','_nuxt/index.fca8f4df.js','_nuxt/index.mobile-legacy.17b39131.js','_nuxt/index.mobile-legacy.7a8afe28.js','_nuxt/index.mobile-legacy.933a4b6f.js','_nuxt/index.mobile-legacy.d9dd317b.js','_nuxt/index.mobile-legacy.de4fcf3e.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.1e00449d.js','_nuxt/index.mobile.57457460.js','_nuxt/index.mobile.7f8ab08f.js','_nuxt/index.mobile.8682bc95.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.mobile.fd6f24a1.js','_nuxt/index.moble-legacy.9205932e.js','_nuxt/index.moble.3d58bcea.js','_nuxt/index.moble.4669505e.css','_nuxt/index.pc-legacy.08de1cb3.js','_nuxt/index.pc-legacy.08fc3849.js','_nuxt/index.pc-legacy.23b7ed5e.js','_nuxt/index.pc-legacy.5f548098.js','_nuxt/index.pc-legacy.5f97a706.js','_nuxt/index.pc-legacy.6b416c49.js','_nuxt/index.pc-legacy.cb50eb25.js','_nuxt/index.pc-legacy.cbf4d4f9.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.4d302fdf.js','_nuxt/index.pc.566176d4.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.5d6d0d1a.js','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.65865d4a.js','_nuxt/index.pc.689c39d5.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d3302a02.js','_nuxt/index.pc.d3c1638d.js','_nuxt/index.pc.d709bc7b.js','_nuxt/index.pc.vue-legacy.3d3d0a4c.js','_nuxt/index.pc.vue-legacy.d47978cf.js','_nuxt/index.pc.vue.6575545a.js','_nuxt/index.pc.vue.a35da629.js','_nuxt/index.vue-legacy.70fa04f8.js','_nuxt/index.vue-legacy.adba810c.js','_nuxt/index.vue-legacy.b634ea64.js','_nuxt/index.vue-legacy.c59e274a.js','_nuxt/index.vue-legacy.e1bbce21.js','_nuxt/index.vue.1c293213.js','_nuxt/index.vue.5f172c03.js','_nuxt/index.vue.88235b48.js','_nuxt/index.vue.8fe37c90.js','_nuxt/index.vue.dcf39236.js','_nuxt/indexMixin-legacy.d8001146.js','_nuxt/indexMixin.45c8b741.js','_nuxt/index_mobile-legacy.8c9d552f.js','_nuxt/index_mobile-legacy.de7ec94d.js','_nuxt/index_mobile.70612992.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.a44bc2f7.js','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.5d02b064.js','_nuxt/index_pc-legacy.bf963084.js','_nuxt/index_pc.2127be61.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.c0f95328.js','_nuxt/init-legacy.2c967814.js','_nuxt/init.ce3f259e.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.72ffd67c.js','_nuxt/login.modal.pc.1ea21048.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.d80a5fc3.js','_nuxt/model-cell.73ecbd7e.js','_nuxt/model-legacy.0ac5673c.js','_nuxt/model-legacy.18b251ef.js','_nuxt/model-legacy.282e92e9.js','_nuxt/model-legacy.2acbaf76.js','_nuxt/model-legacy.39e76eeb.js','_nuxt/model-legacy.3ac5fbfe.js','_nuxt/model-legacy.3dcd4d6f.js','_nuxt/model-legacy.40c2a479.js','_nuxt/model-legacy.4dda5c1d.js','_nuxt/model-legacy.5cd33dd3.js','_nuxt/model-legacy.652bf955.js','_nuxt/model-legacy.7e153ed2.js','_nuxt/model-legacy.a4b00abb.js','_nuxt/model-legacy.c723a18f.js','_nuxt/model-legacy.c9343bc1.js','_nuxt/model-legacy.cc9b84bd.js','_nuxt/model-legacy.d0d022e4.js','_nuxt/model-legacy.dc1559b5.js','_nuxt/model-legacy.ded02af6.js','_nuxt/model-legacy.e00e17c2.js','_nuxt/model-legacy.f323362b.js','_nuxt/model-legacy.fdc65f3e.js','_nuxt/model.418d4606.js','_nuxt/model.4920b5c6.js','_nuxt/model.4a0ffca7.js','_nuxt/model.5a7adcf1.js','_nuxt/model.5c2c6aa1.js','_nuxt/model.5e0995a7.js','_nuxt/model.735f5c94.js','_nuxt/model.762faf0b.js','_nuxt/model.8402321c.js','_nuxt/model.914cf673.js','_nuxt/model.a472537c.js','_nuxt/model.a6a5b94f.js','_nuxt/model.aabf733c.js','_nuxt/model.bfa91db6.js','_nuxt/model.c1587152.js','_nuxt/model.c1aeaeed.js','_nuxt/model.c20ca922.js','_nuxt/model.c246e918.js','_nuxt/model.c42205d1.js','_nuxt/model.dc85be4c.js','_nuxt/model.f2cfe4be.js','_nuxt/model.f537c279.js','_nuxt/pay-drawer-legacy.932ce7fd.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.cf50f2fc.js','_nuxt/pay-legacy.5dbba781.js','_nuxt/pay-legacy.fd14676c.js','_nuxt/pay-step-legacy.b611b925.js','_nuxt/pay-step.eb881d1c.js','_nuxt/pay-step.pc-legacy.4415fcd7.js','_nuxt/pay-step.pc.629fd80f.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.4bf1bf41.css','_nuxt/pay.a07ec209.js','_nuxt/pay.cf9e3b84.css','_nuxt/pay.ffb92dbb.js','_nuxt/payGoodsListItem-legacy.a8c85003.js','_nuxt/payGoodsListItem-legacy.eadcfe1c.js','_nuxt/payGoodsListItem.24aef02c.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.583ceb16.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.ddf9935c.js','_nuxt/payMixin.d162e7d4.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.6330dd40.js','_nuxt/public.3276efbe.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.3dcc3b79.js','_nuxt/recentItemMixin.16e45984.js','_nuxt/recharge-item-legacy.7689ac51.js','_nuxt/recharge-item.2fdc79e0.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.98c245bd.js','_nuxt/refresh-modal.47fb20dd.js','_nuxt/report-legacy.1714a03f.js','_nuxt/report-legacy.1cfa5d57.js','_nuxt/report-legacy.1fd0c999.js','_nuxt/report-legacy.40e9ef04.js','_nuxt/report-legacy.4446ecb4.js','_nuxt/report-legacy.484ddf4e.js','_nuxt/report-legacy.5f5d223c.js','_nuxt/report-legacy.60ef17b3.js','_nuxt/report-legacy.86d9d61f.js','_nuxt/report-legacy.8f800008.js','_nuxt/report-legacy.929116a6.js','_nuxt/report-legacy.b91b5772.js','_nuxt/report-legacy.b9d319ff.js','_nuxt/report-legacy.d0269819.js','_nuxt/report-legacy.dce0a41b.js','_nuxt/report-legacy.e0206a36.js','_nuxt/report-legacy.eeab73f1.js','_nuxt/report-legacy.fb7ed2f4.js','_nuxt/report.2048f98b.js','_nuxt/report.212d487e.js','_nuxt/report.249a08fc.js','_nuxt/report.28ffdaf7.js','_nuxt/report.33346602.js','_nuxt/report.33f38bc3.js','_nuxt/report.34d438c8.js','_nuxt/report.3765de8e.js','_nuxt/report.5a112d0c.js','_nuxt/report.5c624f0f.js','_nuxt/report.5dba4184.js','_nuxt/report.6bd4fe98.js','_nuxt/report.78575b71.js','_nuxt/report.98f28e45.js','_nuxt/report.9c9c3159.js','_nuxt/report.9cb60a06.js','_nuxt/report.bc0f064a.js','_nuxt/report.d2a442d8.js','_nuxt/result-view-legacy.3b5f5cc5.js','_nuxt/result-view.ab65c012.js','_nuxt/resultModalMixin-legacy.c80c1a9d.js','_nuxt/resultModalMixin.451cbe76.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.b1d37deb.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.f1591e44.js','_nuxt/search-legacy.561cfb8b.js','_nuxt/search-modal.pc-legacy.99e25e87.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.b2b99607.js','_nuxt/search-page.mobile-legacy.9bc8c4f5.js','_nuxt/search-page.mobile.056c84da.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search.9f72bd6e.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.0362309e.js','_nuxt/switch-legacy.ae480723.js','_nuxt/switch.0165b9eb.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.bc214f67.js','_nuxt/switchMixin-legacy.6c151210.js','_nuxt/switchMixin.76d57120.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.d8b790c1.js','_nuxt/user-info.96f164e7.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.6e36efea.js','_nuxt/utilities.appleyPay.d387ad7b.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.19b78723.js','_nuxt/vue.f36acd1f.5f8295ef.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.291', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



