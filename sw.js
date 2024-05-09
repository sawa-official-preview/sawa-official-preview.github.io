

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.3694f4aa.js','_nuxt/AboutSA.mobile.7a54d031.js','_nuxt/AboutSA2-legacy.d1993f62.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.fa3f0777.js','_nuxt/PayUtils-legacy.c939da31.js','_nuxt/PayUtils.8637c2f8.js','_nuxt/UICarouselView-legacy.c1b4a2fe.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/UICarouselView.fe34aee4.js','_nuxt/account-item-legacy.0cf917b1.js','_nuxt/account-item-legacy.472f19bc.js','_nuxt/account-item.29cc10f2.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.b7b444c8.js','_nuxt/api-legacy.3c0be61b.js','_nuxt/api.023cb585.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.e0c7d08d.js','_nuxt/bank-views.fcded857.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/c80fa097-67e5-4401-bf48-4d060682f0c4.json','_nuxt/builds/meta/dev.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.2e9acad9.js','_nuxt/channel-view.dab8b05f.js','_nuxt/cko-card-list-legacy.ae7c3ede.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.a83ba713.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.23a60b66.js','_nuxt/enter-legacy.8978f70f.js','_nuxt/enter.342b3289.css','_nuxt/enter.4c56cfe7.js','_nuxt/enter.8ece85b5.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.db579446.js','_nuxt/enterMixin.e801ddc0.js','_nuxt/entry-legacy.be5109be.js','_nuxt/entry.25fdf2da.js','_nuxt/entry.52209fbe.css','_nuxt/error-404-legacy.02994537.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.6954a1ff.js','_nuxt/error-500-legacy.e4a1fc6d.js','_nuxt/error-500.72862a29.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.3b9dfe71.js','_nuxt/error.06313295.css','_nuxt/error.ccc32be6.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.bd8763c5.js','_nuxt/frames.1c333b95.js','_nuxt/home-legacy.697719a6.js','_nuxt/home.63eb863a.css','_nuxt/home.65f52c04.js','_nuxt/home.pc-legacy.6950c90e.js','_nuxt/home.pc.4df1889a.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.02fad0a3.js','_nuxt/index-legacy.08516248.js','_nuxt/index-legacy.0be82c1a.js','_nuxt/index-legacy.13c8d9c3.js','_nuxt/index-legacy.17412f55.js','_nuxt/index-legacy.19f5e777.js','_nuxt/index-legacy.1a4a9e37.js','_nuxt/index-legacy.2c9794d9.js','_nuxt/index-legacy.30ef452b.js','_nuxt/index-legacy.32578225.js','_nuxt/index-legacy.3463906b.js','_nuxt/index-legacy.38758155.js','_nuxt/index-legacy.3fb82e85.js','_nuxt/index-legacy.52e2ca34.js','_nuxt/index-legacy.59c8dc84.js','_nuxt/index-legacy.5fe2494e.js','_nuxt/index-legacy.6140373e.js','_nuxt/index-legacy.6a63e0a1.js','_nuxt/index-legacy.6c5cec36.js','_nuxt/index-legacy.6c86ca19.js','_nuxt/index-legacy.6d3a6bcf.js','_nuxt/index-legacy.719f117c.js','_nuxt/index-legacy.781829ca.js','_nuxt/index-legacy.78bc0306.js','_nuxt/index-legacy.81175a0b.js','_nuxt/index-legacy.87b9d712.js','_nuxt/index-legacy.97e5f186.js','_nuxt/index-legacy.9bce9ecc.js','_nuxt/index-legacy.a08e8ca6.js','_nuxt/index-legacy.a4b303ca.js','_nuxt/index-legacy.a5d2e369.js','_nuxt/index-legacy.a6242e83.js','_nuxt/index-legacy.a6d64846.js','_nuxt/index-legacy.adc2e465.js','_nuxt/index-legacy.b4d3a4b9.js','_nuxt/index-legacy.b698a889.js','_nuxt/index-legacy.b890e8fd.js','_nuxt/index-legacy.d1a06bb3.js','_nuxt/index-legacy.d9169af4.js','_nuxt/index-legacy.e69b3f38.js','_nuxt/index-legacy.e9a60411.js','_nuxt/index-legacy.ecacbeb9.js','_nuxt/index-legacy.f01d1bc7.js','_nuxt/index-legacy.f86359b6.js','_nuxt/index-legacy.fad93f04.js','_nuxt/index-legacy.fe399915.js','_nuxt/index.038acdd0.js','_nuxt/index.090efd7d.js','_nuxt/index.0ab1503a.js','_nuxt/index.100dcc7d.css','_nuxt/index.139511b2.css','_nuxt/index.146ea174.js','_nuxt/index.14915785.js','_nuxt/index.1584c461.css','_nuxt/index.179187d9.js','_nuxt/index.1ac2d085.js','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.2d8cea75.js','_nuxt/index.30899579.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3feca694.js','_nuxt/index.433a7716.js','_nuxt/index.44638243.css','_nuxt/index.44952dd0.js','_nuxt/index.47599534.css','_nuxt/index.4bb7b090.js','_nuxt/index.4d8270f7.js','_nuxt/index.4e2ce5eb.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.58c0332c.js','_nuxt/index.59e26264.js','_nuxt/index.5b543a12.js','_nuxt/index.609a047b.css','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.712b05b3.js','_nuxt/index.71d24d3c.css','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7b888348.js','_nuxt/index.815202c8.css','_nuxt/index.86af9402.js','_nuxt/index.8a683ca2.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9efccd94.js','_nuxt/index.9f6362d3.js','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a76252f9.css','_nuxt/index.ae40bec6.css','_nuxt/index.b057f398.js','_nuxt/index.b0ff04fc.js','_nuxt/index.b26ad712.css','_nuxt/index.b4c3985c.js','_nuxt/index.b6b233ed.css','_nuxt/index.b79b1f3d.js','_nuxt/index.bcc50a6a.js','_nuxt/index.bde79a99.js','_nuxt/index.be7b51ea.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c25c4cba.js','_nuxt/index.c8621a6b.css','_nuxt/index.ce005d20.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d6137297.js','_nuxt/index.d7c57fba.js','_nuxt/index.d83f749f.css','_nuxt/index.daa7c3b4.js','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e765b109.js','_nuxt/index.e768d238.js','_nuxt/index.e7e80b85.js','_nuxt/index.ec8e06d3.js','_nuxt/index.eeb82b9d.js','_nuxt/index.f1674b2b.js','_nuxt/index.f31bc7a0.js','_nuxt/index.f7872780.css','_nuxt/index.f7b2e05d.js','_nuxt/index.fa6af505.css','_nuxt/index.fa6faa70.js','_nuxt/index.ff17c466.js','_nuxt/index.mobile-legacy.2f460e0d.js','_nuxt/index.mobile-legacy.45c5b617.js','_nuxt/index.mobile-legacy.7314416b.js','_nuxt/index.mobile-legacy.bf06ff2a.js','_nuxt/index.mobile-legacy.cb90449e.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.66827a93.js','_nuxt/index.mobile.815bcc92.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.b9713d11.js','_nuxt/index.mobile.df21bb65.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.mobile.ed0a7e86.js','_nuxt/index.moble-legacy.5100262e.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.94cdf19c.js','_nuxt/index.pc-legacy.05209c07.js','_nuxt/index.pc-legacy.178fbfc2.js','_nuxt/index.pc-legacy.27b7860b.js','_nuxt/index.pc-legacy.54735e76.js','_nuxt/index.pc-legacy.7ad06d66.js','_nuxt/index.pc-legacy.b0f28328.js','_nuxt/index.pc-legacy.e9237675.js','_nuxt/index.pc-legacy.fcf398df.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.151da563.js','_nuxt/index.pc.1de62991.js','_nuxt/index.pc.4eca62cd.js','_nuxt/index.pc.556139fe.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.5f8dba12.js','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.9d5f13dd.js','_nuxt/index.pc.a8315dca.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.b5ed9eab.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.vue-legacy.94458ad5.js','_nuxt/index.pc.vue-legacy.d1a84cae.js','_nuxt/index.pc.vue.4f65401e.js','_nuxt/index.pc.vue.d5c95e77.js','_nuxt/index.vue-legacy.59f2d28b.js','_nuxt/index.vue-legacy.88d5d502.js','_nuxt/index.vue-legacy.a167f653.js','_nuxt/index.vue-legacy.d59dbfa1.js','_nuxt/index.vue-legacy.eefb98a6.js','_nuxt/index.vue.27270e2e.js','_nuxt/index.vue.3ffec3f0.js','_nuxt/index.vue.473b61dc.js','_nuxt/index.vue.82ad6c27.js','_nuxt/index.vue.f099664e.js','_nuxt/indexMixin-legacy.804697a5.js','_nuxt/indexMixin.3d0e175e.js','_nuxt/index_mobile-legacy.2cba4e02.js','_nuxt/index_mobile-legacy.af04b5cc.js','_nuxt/index_mobile.33938bae.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.bbd9cbbd.js','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.d56aff14.js','_nuxt/index_pc-legacy.f5ebd7c0.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.aecf6aae.js','_nuxt/index_pc.f7920fb0.js','_nuxt/init-legacy.14065a61.js','_nuxt/init.ab467e2c.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.2795db3a.js','_nuxt/login.modal.pc.47d75570.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.df0d37d0.js','_nuxt/model-cell.9eeef4e4.js','_nuxt/model-legacy.0c13fc6a.js','_nuxt/model-legacy.12cdb57d.js','_nuxt/model-legacy.1d6bf462.js','_nuxt/model-legacy.2ed50c7b.js','_nuxt/model-legacy.31789dbc.js','_nuxt/model-legacy.3ce090e0.js','_nuxt/model-legacy.4234c607.js','_nuxt/model-legacy.49da7ed9.js','_nuxt/model-legacy.506b9169.js','_nuxt/model-legacy.5f40b569.js','_nuxt/model-legacy.7010aeff.js','_nuxt/model-legacy.71e32a76.js','_nuxt/model-legacy.7d27e482.js','_nuxt/model-legacy.889fa7cf.js','_nuxt/model-legacy.89528ba6.js','_nuxt/model-legacy.8aa155e6.js','_nuxt/model-legacy.947a8b37.js','_nuxt/model-legacy.9ec16934.js','_nuxt/model-legacy.a13a9618.js','_nuxt/model-legacy.a5ce4cd1.js','_nuxt/model-legacy.e19952e2.js','_nuxt/model-legacy.ff4b197d.js','_nuxt/model.00d6269d.js','_nuxt/model.0e659e3d.js','_nuxt/model.3e42d5e4.js','_nuxt/model.42f20dbd.js','_nuxt/model.4332e33d.js','_nuxt/model.4388d037.js','_nuxt/model.45a5094f.js','_nuxt/model.4f0867c7.js','_nuxt/model.4fb16258.js','_nuxt/model.58c07d5a.js','_nuxt/model.6dedc8df.js','_nuxt/model.6ff386a9.js','_nuxt/model.736d37e9.js','_nuxt/model.79b5f63b.js','_nuxt/model.7f475cf4.js','_nuxt/model.9a66fbff.js','_nuxt/model.9fce7356.js','_nuxt/model.a0b179bb.js','_nuxt/model.a8d8e7ec.js','_nuxt/model.d36c96eb.js','_nuxt/model.dabb4063.js','_nuxt/model.db364d70.js','_nuxt/pay-drawer-legacy.ccc50267.js','_nuxt/pay-drawer.4daa1c29.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-legacy.00dbc065.js','_nuxt/pay-legacy.f86060a1.js','_nuxt/pay-step-legacy.e8629c5f.js','_nuxt/pay-step.39b130fc.js','_nuxt/pay-step.pc-legacy.8c625880.js','_nuxt/pay-step.pc.5c6cd83d.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.07de9594.js','_nuxt/pay.4bf1bf41.css','_nuxt/pay.cf9e3b84.css','_nuxt/pay.d1758658.js','_nuxt/payGoodsListItem-legacy.0e7ab224.js','_nuxt/payGoodsListItem-legacy.6148f8f1.js','_nuxt/payGoodsListItem.0a013c21.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.739b9935.js','_nuxt/payMixin-legacy.dcd0f9b5.js','_nuxt/payMixin.776e4e09.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.ec6db873.js','_nuxt/public.74dc74ff.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.605ecfb4.js','_nuxt/recentItemMixin.a3490c5e.js','_nuxt/recharge-item-legacy.a976554f.js','_nuxt/recharge-item.7d86a008.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.b868868f.js','_nuxt/refresh-modal.e85c2e6b.js','_nuxt/report-legacy.045052d5.js','_nuxt/report-legacy.09128983.js','_nuxt/report-legacy.2860d500.js','_nuxt/report-legacy.4ead5868.js','_nuxt/report-legacy.50f17c52.js','_nuxt/report-legacy.5c5d0d6c.js','_nuxt/report-legacy.6720d2b3.js','_nuxt/report-legacy.68437221.js','_nuxt/report-legacy.79866cd2.js','_nuxt/report-legacy.7e2057ba.js','_nuxt/report-legacy.90ef2422.js','_nuxt/report-legacy.9379680e.js','_nuxt/report-legacy.96036a05.js','_nuxt/report-legacy.b4fcf96f.js','_nuxt/report-legacy.bee352b6.js','_nuxt/report-legacy.d8711351.js','_nuxt/report-legacy.e9d08838.js','_nuxt/report-legacy.ea07ac0a.js','_nuxt/report.367eeb8a.js','_nuxt/report.3d50f484.js','_nuxt/report.47749588.js','_nuxt/report.7ca9b006.js','_nuxt/report.83236fbb.js','_nuxt/report.8ef479f6.js','_nuxt/report.9ec752b7.js','_nuxt/report.a388f9cd.js','_nuxt/report.acadb26d.js','_nuxt/report.ad5e19eb.js','_nuxt/report.bb0c3e45.js','_nuxt/report.bb845964.js','_nuxt/report.c5d84046.js','_nuxt/report.cc160871.js','_nuxt/report.deb84706.js','_nuxt/report.e5197c20.js','_nuxt/report.e67019f2.js','_nuxt/report.ef745a8f.js','_nuxt/result-view-legacy.e09925b3.js','_nuxt/result-view.86a75a7d.js','_nuxt/resultModalMixin-legacy.b94d9633.js','_nuxt/resultModalMixin.1ca92976.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.828017cf.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.ef8d724a.js','_nuxt/search-legacy.0c76ac93.js','_nuxt/search-modal.pc-legacy.41db5973.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.8b78aa1d.js','_nuxt/search-page.mobile-legacy.7b0bd830.js','_nuxt/search-page.mobile.25e9f2ce.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search.8315ab7c.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.896c9ae6.js','_nuxt/switch-legacy.bde47140.js','_nuxt/switch.4581b101.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.a5b9e987.js','_nuxt/switchMixin-legacy.920afd91.js','_nuxt/switchMixin.24f97b7b.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.eb06027a.js','_nuxt/user-info.01e8cbe3.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.d4fa9246.js','_nuxt/utilities.appleyPay.6bfec592.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.bf384ba6.js','_nuxt/vue.f36acd1f.600f423b.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



