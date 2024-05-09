

const cacheVersion = 'v1.0.288'

console.log('service worker version', '1.0.288')

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
  console.log('service worker active', '1.0.288', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.918ae674.js','_nuxt/AboutSA.mobile.296d629d.js','_nuxt/AboutSA2-legacy.6b1a0caf.js','_nuxt/AboutSA2.32da91b0.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.f57b91a5.js','_nuxt/PayUtils.90ccd84f.js','_nuxt/UICarouselView-legacy.bcda6657.js','_nuxt/UICarouselView.04e5098e.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.a113db7a.js','_nuxt/account-item-legacy.af857624.js','_nuxt/account-item.2164200e.js','_nuxt/account-item.26fff551.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/api-legacy.e01d0f7f.js','_nuxt/api.a3e7e2b2.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.a49900b6.js','_nuxt/bank-views.a2ae3407.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/c73b4784-3c66-45bd-ae23-64d091352af8.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.c737c751.js','_nuxt/channel-view.69f57143.js','_nuxt/cko-card-list-legacy.96420319.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.7485691f.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.56c9972c.js','_nuxt/enter-legacy.fd2173db.js','_nuxt/enter.342b3289.css','_nuxt/enter.344b0de0.js','_nuxt/enter.c6e40d89.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.fb13f661.js','_nuxt/enterMixin.507fbac2.js','_nuxt/entry-legacy.96d01a8d.js','_nuxt/entry.18aeb590.js','_nuxt/entry.52209fbe.css','_nuxt/error-404-legacy.db316beb.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.9fd1566a.js','_nuxt/error-500-legacy.297b9a5a.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.f6e2052e.js','_nuxt/error-legacy.8fce5bb2.js','_nuxt/error.06313295.css','_nuxt/error.38bfa224.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.4e7b4a61.js','_nuxt/frames.dfc848a3.js','_nuxt/home-legacy.8a6cd8ac.js','_nuxt/home.63eb863a.css','_nuxt/home.b9c31178.js','_nuxt/home.pc-legacy.cf355b70.js','_nuxt/home.pc.497f5626.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0006750c.js','_nuxt/index-legacy.0c68eb82.js','_nuxt/index-legacy.124f3145.js','_nuxt/index-legacy.139af9b9.js','_nuxt/index-legacy.14838762.js','_nuxt/index-legacy.18c6cb2f.js','_nuxt/index-legacy.20192fd8.js','_nuxt/index-legacy.22dcb3b9.js','_nuxt/index-legacy.26e10fd7.js','_nuxt/index-legacy.32c20870.js','_nuxt/index-legacy.375da1fd.js','_nuxt/index-legacy.3f7a4880.js','_nuxt/index-legacy.40f3c47c.js','_nuxt/index-legacy.48b65b9b.js','_nuxt/index-legacy.4932b680.js','_nuxt/index-legacy.5062b04a.js','_nuxt/index-legacy.54236099.js','_nuxt/index-legacy.56fce0fa.js','_nuxt/index-legacy.57251efc.js','_nuxt/index-legacy.5e71aec2.js','_nuxt/index-legacy.60c8cbd8.js','_nuxt/index-legacy.65255521.js','_nuxt/index-legacy.675403fc.js','_nuxt/index-legacy.68c1c773.js','_nuxt/index-legacy.6e528327.js','_nuxt/index-legacy.724f04e5.js','_nuxt/index-legacy.80e4e46a.js','_nuxt/index-legacy.8884a394.js','_nuxt/index-legacy.897a5647.js','_nuxt/index-legacy.8c7b250f.js','_nuxt/index-legacy.8fb45df5.js','_nuxt/index-legacy.908041a7.js','_nuxt/index-legacy.92c5778d.js','_nuxt/index-legacy.949c2ead.js','_nuxt/index-legacy.9cc46805.js','_nuxt/index-legacy.9fa6a806.js','_nuxt/index-legacy.a089cd01.js','_nuxt/index-legacy.a8e4e242.js','_nuxt/index-legacy.b9a6a5f9.js','_nuxt/index-legacy.bd8de55f.js','_nuxt/index-legacy.cbe6efb5.js','_nuxt/index-legacy.d6836cd7.js','_nuxt/index-legacy.d6d0a3bd.js','_nuxt/index-legacy.deaf39d3.js','_nuxt/index-legacy.e4ac7245.js','_nuxt/index-legacy.f8161649.js','_nuxt/index.0d4bb699.js','_nuxt/index.100dcc7d.css','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.265657b6.js','_nuxt/index.27517127.css','_nuxt/index.2a675894.js','_nuxt/index.2ac86bae.js','_nuxt/index.2b62e556.js','_nuxt/index.2be88cd7.js','_nuxt/index.2ff7c526.js','_nuxt/index.31ff57ab.js','_nuxt/index.395fb350.js','_nuxt/index.3aff49cd.js','_nuxt/index.3b646bb6.js','_nuxt/index.3b80a2ab.js','_nuxt/index.3d586e9a.js','_nuxt/index.3e3f66aa.css','_nuxt/index.40ec39cf.js','_nuxt/index.44638243.css','_nuxt/index.47599534.css','_nuxt/index.480841cf.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5934d7af.js','_nuxt/index.609a047b.css','_nuxt/index.61426618.js','_nuxt/index.67884889.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.71d24d3c.css','_nuxt/index.745a93ad.js','_nuxt/index.75412a79.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7d6bc690.js','_nuxt/index.8137f6b8.js','_nuxt/index.815202c8.css','_nuxt/index.89166cf7.js','_nuxt/index.924d4b51.js','_nuxt/index.94e9caf3.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a3bed963.js','_nuxt/index.a44d1df8.js','_nuxt/index.a63bf1bd.js','_nuxt/index.a76252f9.css','_nuxt/index.ae40bec6.css','_nuxt/index.af163227.js','_nuxt/index.b0355c22.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.bc5b91e2.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c8621a6b.css','_nuxt/index.ca45f2f1.js','_nuxt/index.cf55c13d.js','_nuxt/index.d0233f63.css','_nuxt/index.d1cc39f5.js','_nuxt/index.d1ea6fe7.css','_nuxt/index.d83f749f.css','_nuxt/index.d8ac1f6f.js','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e0ebf83e.js','_nuxt/index.e1992ad7.js','_nuxt/index.e31d5bc6.js','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e4fa74aa.js','_nuxt/index.e7becb48.js','_nuxt/index.f3897b7e.js','_nuxt/index.f547c4c5.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fb481970.js','_nuxt/index.fcd3c054.js','_nuxt/index.fdf5454a.js','_nuxt/index.ff9fa839.js','_nuxt/index.mobile-legacy.1ef208fd.js','_nuxt/index.mobile-legacy.258ea2b9.js','_nuxt/index.mobile-legacy.43ede6d8.js','_nuxt/index.mobile-legacy.5b026941.js','_nuxt/index.mobile-legacy.fac736c4.js','_nuxt/index.mobile.1bb24954.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.4e1aaff6.js','_nuxt/index.mobile.5c247ce1.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.a82f90d9.js','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.dccc1c3b.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.moble-legacy.2ee7b4be.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.a24990a7.js','_nuxt/index.pc-legacy.072f1a3b.js','_nuxt/index.pc-legacy.18a03ebb.js','_nuxt/index.pc-legacy.1c9b201e.js','_nuxt/index.pc-legacy.8c98b351.js','_nuxt/index.pc-legacy.ab477b9e.js','_nuxt/index.pc-legacy.c4fe2f8b.js','_nuxt/index.pc-legacy.e0fca877.js','_nuxt/index.pc-legacy.e37cbff1.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.2a44c2fb.js','_nuxt/index.pc.3f56e603.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.6e743708.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.83fccc49.js','_nuxt/index.pc.8baef22e.js','_nuxt/index.pc.a4237a2e.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d5d3c246.js','_nuxt/index.pc.dd805b41.js','_nuxt/index.pc.vue-legacy.87c4168b.js','_nuxt/index.pc.vue-legacy.e0121afa.js','_nuxt/index.pc.vue.699237ad.js','_nuxt/index.pc.vue.7adaae1c.js','_nuxt/index.vue-legacy.146fbd76.js','_nuxt/index.vue-legacy.55d485a0.js','_nuxt/index.vue-legacy.8650ff4c.js','_nuxt/index.vue-legacy.875a9f81.js','_nuxt/index.vue-legacy.d4101bda.js','_nuxt/index.vue.0d3cd3b9.js','_nuxt/index.vue.18ec6880.js','_nuxt/index.vue.36cd310f.js','_nuxt/index.vue.c6d7b5fc.js','_nuxt/index.vue.e2805d43.js','_nuxt/indexMixin-legacy.8d5f008b.js','_nuxt/indexMixin.502e00aa.js','_nuxt/index_mobile-legacy.4faf47f2.js','_nuxt/index_mobile-legacy.db4bddff.js','_nuxt/index_mobile.43121882.js','_nuxt/index_mobile.564cfa1e.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.d2894474.js','_nuxt/index_pc-legacy.f1973258.js','_nuxt/index_pc.1ac27cd9.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.4242ab31.js','_nuxt/index_pc.a71cff98.css','_nuxt/init-legacy.dfcd5aa0.js','_nuxt/init.3e5f5118.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.63576fa8.js','_nuxt/login.modal.pc.423cf11b.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.153dcb39.js','_nuxt/model-cell.027c5da4.js','_nuxt/model-legacy.0129638b.js','_nuxt/model-legacy.1866da29.js','_nuxt/model-legacy.2b4bd5bd.js','_nuxt/model-legacy.4445ca8e.js','_nuxt/model-legacy.4681ebdd.js','_nuxt/model-legacy.4874cfd5.js','_nuxt/model-legacy.4ff95f11.js','_nuxt/model-legacy.50b0bfb8.js','_nuxt/model-legacy.594c05ef.js','_nuxt/model-legacy.6a2cb5b0.js','_nuxt/model-legacy.86302481.js','_nuxt/model-legacy.8eea061e.js','_nuxt/model-legacy.9433fc45.js','_nuxt/model-legacy.a611b21b.js','_nuxt/model-legacy.abf9d89b.js','_nuxt/model-legacy.cbdac9a8.js','_nuxt/model-legacy.cfa677ad.js','_nuxt/model-legacy.d9ebb279.js','_nuxt/model-legacy.e91150e0.js','_nuxt/model-legacy.e9fa3072.js','_nuxt/model-legacy.f1dc6722.js','_nuxt/model-legacy.f405f918.js','_nuxt/model.030d6f65.js','_nuxt/model.0b577978.js','_nuxt/model.0d236253.js','_nuxt/model.306c0ecc.js','_nuxt/model.3143f68a.js','_nuxt/model.348def57.js','_nuxt/model.3931d846.js','_nuxt/model.535efd39.js','_nuxt/model.73d6210f.js','_nuxt/model.79a8296b.js','_nuxt/model.93a172d2.js','_nuxt/model.a133605f.js','_nuxt/model.ae8a5e21.js','_nuxt/model.afc3f688.js','_nuxt/model.be06cb83.js','_nuxt/model.c54392bc.js','_nuxt/model.dc15108f.js','_nuxt/model.dd94a60e.js','_nuxt/model.e92bc831.js','_nuxt/model.eaa34527.js','_nuxt/model.f6bca836.js','_nuxt/model.fef9f425.js','_nuxt/pay-drawer-legacy.929cec42.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.64f17e38.js','_nuxt/pay-legacy.0c27e63b.js','_nuxt/pay-legacy.6fa16cf2.js','_nuxt/pay-step-legacy.63b5e442.js','_nuxt/pay-step.83521697.js','_nuxt/pay-step.pc-legacy.a5777f9b.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.e01a063a.js','_nuxt/pay.0d860b95.js','_nuxt/pay.4bf1bf41.css','_nuxt/pay.cf9e3b84.css','_nuxt/pay.e80bb564.js','_nuxt/payGoodsListItem-legacy.5ec8cc88.js','_nuxt/payGoodsListItem-legacy.732b3e56.js','_nuxt/payGoodsListItem.17c51610.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.5e73cf49.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payMixin-legacy.d65178af.js','_nuxt/payMixin.99541c33.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.9bf66410.js','_nuxt/public.7248675c.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.1479b0ac.js','_nuxt/recentItemMixin.fd13deae.js','_nuxt/recharge-item-legacy.b4911a88.js','_nuxt/recharge-item.935b9836.css','_nuxt/recharge-item.d8f1ed56.js','_nuxt/refresh-modal-legacy.1f8b13f9.js','_nuxt/refresh-modal.5bcfeb03.js','_nuxt/report-legacy.074621f7.js','_nuxt/report-legacy.076986b6.js','_nuxt/report-legacy.083ebd07.js','_nuxt/report-legacy.18dc723a.js','_nuxt/report-legacy.191952c5.js','_nuxt/report-legacy.36c3c5cb.js','_nuxt/report-legacy.529f04a9.js','_nuxt/report-legacy.5d053d73.js','_nuxt/report-legacy.5e988146.js','_nuxt/report-legacy.613c9861.js','_nuxt/report-legacy.6e0d321b.js','_nuxt/report-legacy.7f2c2ea0.js','_nuxt/report-legacy.b0d330b2.js','_nuxt/report-legacy.d7851b97.js','_nuxt/report-legacy.da83de9f.js','_nuxt/report-legacy.daa275a5.js','_nuxt/report-legacy.e5327a07.js','_nuxt/report-legacy.fff72a8d.js','_nuxt/report.00ab8d3d.js','_nuxt/report.0ae14447.js','_nuxt/report.22ec1aac.js','_nuxt/report.2ebbf71c.js','_nuxt/report.2fdc2480.js','_nuxt/report.3b2834a3.js','_nuxt/report.3e31aec7.js','_nuxt/report.3f0a50b9.js','_nuxt/report.5220bda0.js','_nuxt/report.5c7e4e1e.js','_nuxt/report.5d381ddf.js','_nuxt/report.7c220fdc.js','_nuxt/report.7de21aea.js','_nuxt/report.a754f688.js','_nuxt/report.b2a485e9.js','_nuxt/report.d6004adf.js','_nuxt/report.dfc69d2f.js','_nuxt/report.ebffc146.js','_nuxt/result-view-legacy.b0ff29f4.js','_nuxt/result-view.9c1a35d6.js','_nuxt/resultModalMixin-legacy.cf6432c2.js','_nuxt/resultModalMixin.440cee53.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.21ebfaf7.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.931ca048.js','_nuxt/search-legacy.13ae7b22.js','_nuxt/search-modal.pc-legacy.da2e504f.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.f1023e81.js','_nuxt/search-page.mobile-legacy.7f941855.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search-page.mobile.ef47348a.js','_nuxt/search.dd5a347b.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.d5b04d82.js','_nuxt/switch-legacy.dde29e29.js','_nuxt/switch.13166235.js','_nuxt/switch.29546038.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switchMixin-legacy.57629a1d.js','_nuxt/switchMixin.c41eb367.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.29d2578d.js','_nuxt/user-info.a92680ae.css','_nuxt/user-info.cfa2f588.js','_nuxt/utilities.appleyPay-legacy.636abf8f.js','_nuxt/utilities.appleyPay.aac13688.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.26a986ed.js','_nuxt/vue.f36acd1f.2210f10c.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.288', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



