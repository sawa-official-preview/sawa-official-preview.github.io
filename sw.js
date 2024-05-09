

const cacheVersion = 'v1.0.289'

console.log('service worker version', '1.0.289')

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
  console.log('service worker active', '1.0.289', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.d628cffd.js','_nuxt/AboutSA.mobile.55ab2fa9.js','_nuxt/AboutSA2-legacy.30376103.js','_nuxt/AboutSA2.59ccec3c.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.3b5704e6.js','_nuxt/PayUtils.9819f451.js','_nuxt/UICarouselView-legacy.e4dcba33.js','_nuxt/UICarouselView.cbc2ed0d.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.0b4b3b81.js','_nuxt/account-item-legacy.389edb56.js','_nuxt/account-item.1ecf077b.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.eccb34d5.js','_nuxt/api-legacy.6bb77b9c.js','_nuxt/api.88d7abc5.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.258c14c6.js','_nuxt/bank-views.af947d53.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/a59a9a33-953f-4ae7-8cc5-5c7fd0f3554b.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.71561938.js','_nuxt/channel-view.509c568c.js','_nuxt/cko-card-list-legacy.ec22f863.js','_nuxt/cko-card-list.12bc5a1d.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.4fc97bb3.js','_nuxt/enter-legacy.a1626ce7.js','_nuxt/enter.342b3289.css','_nuxt/enter.619c778e.js','_nuxt/enter.cc8e55be.js','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.b0917fcd.js','_nuxt/enterMixin.8d2497b0.js','_nuxt/entry-legacy.9f087675.js','_nuxt/entry.0140ec18.js','_nuxt/entry.52209fbe.css','_nuxt/error-404-legacy.202ed677.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.28aa5438.js','_nuxt/error-500-legacy.7420e345.js','_nuxt/error-500.61e0b13d.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.ba2e700b.js','_nuxt/error.06313295.css','_nuxt/error.2ccf7120.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.bce3086c.js','_nuxt/frames.f252de40.js','_nuxt/home-legacy.67875e7b.js','_nuxt/home.63eb863a.css','_nuxt/home.a6297038.js','_nuxt/home.pc-legacy.deaa5aec.js','_nuxt/home.pc.62842e4c.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.00e9db84.js','_nuxt/index-legacy.02f4a883.js','_nuxt/index-legacy.0523a201.js','_nuxt/index-legacy.130e8d76.js','_nuxt/index-legacy.195c148c.js','_nuxt/index-legacy.2461a393.js','_nuxt/index-legacy.24a3a5ba.js','_nuxt/index-legacy.274c5f36.js','_nuxt/index-legacy.3634dcbd.js','_nuxt/index-legacy.40ccb6a3.js','_nuxt/index-legacy.45c9876f.js','_nuxt/index-legacy.48bb3205.js','_nuxt/index-legacy.4d7b5b11.js','_nuxt/index-legacy.4da2364e.js','_nuxt/index-legacy.514722e5.js','_nuxt/index-legacy.57cf005b.js','_nuxt/index-legacy.584e71f4.js','_nuxt/index-legacy.595aaffa.js','_nuxt/index-legacy.619cf314.js','_nuxt/index-legacy.619d2857.js','_nuxt/index-legacy.7634dee5.js','_nuxt/index-legacy.7e4d9f74.js','_nuxt/index-legacy.7edf909e.js','_nuxt/index-legacy.81efeffa.js','_nuxt/index-legacy.86717ded.js','_nuxt/index-legacy.9bbf9007.js','_nuxt/index-legacy.9c6e171d.js','_nuxt/index-legacy.9e67a81d.js','_nuxt/index-legacy.9eac40aa.js','_nuxt/index-legacy.aaca2277.js','_nuxt/index-legacy.af1796d1.js','_nuxt/index-legacy.b3ac5a16.js','_nuxt/index-legacy.b6373581.js','_nuxt/index-legacy.b68220f1.js','_nuxt/index-legacy.bd212340.js','_nuxt/index-legacy.bd722ad8.js','_nuxt/index-legacy.c76c3ddf.js','_nuxt/index-legacy.ce214cd0.js','_nuxt/index-legacy.cfc01d14.js','_nuxt/index-legacy.d1af95d5.js','_nuxt/index-legacy.d27a2920.js','_nuxt/index-legacy.e26a0eba.js','_nuxt/index-legacy.f1fd4510.js','_nuxt/index-legacy.f409cad4.js','_nuxt/index-legacy.f94ec7d1.js','_nuxt/index-legacy.fa9134f6.js','_nuxt/index.05cbcc83.js','_nuxt/index.06afe858.js','_nuxt/index.0e352f46.js','_nuxt/index.100dcc7d.css','_nuxt/index.13196b69.js','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.169f7257.js','_nuxt/index.1757334f.js','_nuxt/index.185645c6.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1ded939b.js','_nuxt/index.23a90349.css','_nuxt/index.2461be03.js','_nuxt/index.24ed63da.js','_nuxt/index.27517127.css','_nuxt/index.2f8c2e30.js','_nuxt/index.35dd838c.js','_nuxt/index.381e711d.js','_nuxt/index.38493e50.js','_nuxt/index.3e3f66aa.css','_nuxt/index.44638243.css','_nuxt/index.47599534.css','_nuxt/index.47dfb4f5.js','_nuxt/index.4883830e.js','_nuxt/index.4a268e08.js','_nuxt/index.4f449911.js','_nuxt/index.51115fb9.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5a69bd3a.js','_nuxt/index.5c86f415.js','_nuxt/index.5ec904cf.js','_nuxt/index.609a047b.css','_nuxt/index.646c6ff5.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.71387577.js','_nuxt/index.71d24d3c.css','_nuxt/index.7614bbc1.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.829bcac8.js','_nuxt/index.90e13ec0.js','_nuxt/index.91678a51.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a68f0464.js','_nuxt/index.a76252f9.css','_nuxt/index.a8ca1e36.js','_nuxt/index.ae36871a.js','_nuxt/index.ae40bec6.css','_nuxt/index.ae5a6c67.js','_nuxt/index.b1a3ed9b.js','_nuxt/index.b26ad712.css','_nuxt/index.b6b233ed.css','_nuxt/index.bc06c43b.js','_nuxt/index.bed10d49.js','_nuxt/index.bfe75016.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c8621a6b.css','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d3181c25.js','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.db4dc445.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.dfa69e87.js','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e4777e40.js','_nuxt/index.e5971e30.js','_nuxt/index.e77d627a.js','_nuxt/index.f2d5f6eb.js','_nuxt/index.f7872780.css','_nuxt/index.f9706e15.js','_nuxt/index.fa6af505.css','_nuxt/index.fbd9c248.js','_nuxt/index.fcc2406b.js','_nuxt/index.mobile-legacy.2f1c00e3.js','_nuxt/index.mobile-legacy.35c288dd.js','_nuxt/index.mobile-legacy.600c7171.js','_nuxt/index.mobile-legacy.743378c3.js','_nuxt/index.mobile-legacy.8e9e2c3e.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.21ee96bb.js','_nuxt/index.mobile.2b230cc0.js','_nuxt/index.mobile.36d8ee9d.js','_nuxt/index.mobile.61c84f1b.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.d01f85fd.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.moble-legacy.63a43757.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.a05d663b.js','_nuxt/index.pc-legacy.1db302cd.js','_nuxt/index.pc-legacy.4737e321.js','_nuxt/index.pc-legacy.500e4df6.js','_nuxt/index.pc-legacy.67ab83fa.js','_nuxt/index.pc-legacy.67fa9008.js','_nuxt/index.pc-legacy.74305fe4.js','_nuxt/index.pc-legacy.aa52f03a.js','_nuxt/index.pc-legacy.d7c4dd36.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.5a7952c2.js','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.6f7e0168.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.7eb38f41.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.c066dd6b.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.cc2762d9.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d013a27b.js','_nuxt/index.pc.ec2de67a.js','_nuxt/index.pc.fa699f54.js','_nuxt/index.pc.vue-legacy.20b1d0ec.js','_nuxt/index.pc.vue-legacy.f9948fee.js','_nuxt/index.pc.vue.9544798f.js','_nuxt/index.pc.vue.d38cf7ca.js','_nuxt/index.vue-legacy.6ba2f6d4.js','_nuxt/index.vue-legacy.798ba474.js','_nuxt/index.vue-legacy.7a78e7ea.js','_nuxt/index.vue-legacy.a397995f.js','_nuxt/index.vue-legacy.ccfdcfd2.js','_nuxt/index.vue.52b8072d.js','_nuxt/index.vue.6dc7e63a.js','_nuxt/index.vue.d29747db.js','_nuxt/index.vue.df588db1.js','_nuxt/index.vue.e6544e2b.js','_nuxt/indexMixin-legacy.0d697536.js','_nuxt/indexMixin.dd7b53fb.js','_nuxt/index_mobile-legacy.6eb0cccf.js','_nuxt/index_mobile-legacy.7b8200b9.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.c47ba2d2.js','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_mobile.f76bf81a.js','_nuxt/index_pc-legacy.f2431fa3.js','_nuxt/index_pc-legacy.f5d3fb6f.js','_nuxt/index_pc.339e0dfe.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.cc474078.js','_nuxt/init-legacy.5d1cc332.js','_nuxt/init.07033509.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.db35dd15.js','_nuxt/login.modal.pc.2abad2bb.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.55e6c510.js','_nuxt/model-cell.888a9864.js','_nuxt/model-legacy.1322ba62.js','_nuxt/model-legacy.143df0cf.js','_nuxt/model-legacy.1bb4ca93.js','_nuxt/model-legacy.226c85fa.js','_nuxt/model-legacy.38f8c324.js','_nuxt/model-legacy.423bd47b.js','_nuxt/model-legacy.46ea1241.js','_nuxt/model-legacy.51463f99.js','_nuxt/model-legacy.724faf5e.js','_nuxt/model-legacy.7f6526f9.js','_nuxt/model-legacy.8569994d.js','_nuxt/model-legacy.918936e8.js','_nuxt/model-legacy.9318a895.js','_nuxt/model-legacy.a015b1a5.js','_nuxt/model-legacy.a3b08015.js','_nuxt/model-legacy.b12dd537.js','_nuxt/model-legacy.ba2d55c5.js','_nuxt/model-legacy.d1be09ff.js','_nuxt/model-legacy.da1db881.js','_nuxt/model-legacy.e162f8ca.js','_nuxt/model-legacy.eff2859f.js','_nuxt/model-legacy.f7430485.js','_nuxt/model.076c050b.js','_nuxt/model.09108d2e.js','_nuxt/model.0a8d270e.js','_nuxt/model.16057b59.js','_nuxt/model.173c906d.js','_nuxt/model.192a8001.js','_nuxt/model.3c1581e0.js','_nuxt/model.6367cc0d.js','_nuxt/model.6ed05f68.js','_nuxt/model.7253f8d9.js','_nuxt/model.7ec64c4e.js','_nuxt/model.95ee1f78.js','_nuxt/model.9b987a9e.js','_nuxt/model.9cb49595.js','_nuxt/model.9e6e728b.js','_nuxt/model.accd1ac9.js','_nuxt/model.e09aeef5.js','_nuxt/model.e0b6a246.js','_nuxt/model.e3a868b0.js','_nuxt/model.e81eea81.js','_nuxt/model.f5b2ab7b.js','_nuxt/model.fa0686cd.js','_nuxt/pay-drawer-legacy.f952cf6b.js','_nuxt/pay-drawer.04bf8cd5.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-legacy.0a9b05b5.js','_nuxt/pay-legacy.aa01ba99.js','_nuxt/pay-step-legacy.2cbc04ce.js','_nuxt/pay-step.4fa2367e.js','_nuxt/pay-step.pc-legacy.d76f1143.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay-step.pc.8994d854.js','_nuxt/pay.4bf1bf41.css','_nuxt/pay.bf800c2d.js','_nuxt/pay.ca70cf00.js','_nuxt/pay.cf9e3b84.css','_nuxt/payGoodsListItem-legacy.34473d92.js','_nuxt/payGoodsListItem-legacy.e2498bd8.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.5df27e37.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.8f7cb790.js','_nuxt/payMixin-legacy.a2fb7e45.js','_nuxt/payMixin.d8041653.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.80c470ee.js','_nuxt/public.ca85b1d3.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.cf8e5751.js','_nuxt/recentItemMixin.5a51d101.js','_nuxt/recharge-item-legacy.17c35abc.js','_nuxt/recharge-item.52b2e230.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.11ac942d.js','_nuxt/refresh-modal.614b5a26.js','_nuxt/report-legacy.1756a8e8.js','_nuxt/report-legacy.2921c503.js','_nuxt/report-legacy.297d11d6.js','_nuxt/report-legacy.37a10434.js','_nuxt/report-legacy.3cba247d.js','_nuxt/report-legacy.4136a6a4.js','_nuxt/report-legacy.5eec1058.js','_nuxt/report-legacy.69d6664b.js','_nuxt/report-legacy.8114e9a8.js','_nuxt/report-legacy.8b509443.js','_nuxt/report-legacy.8dc2a206.js','_nuxt/report-legacy.97cebae2.js','_nuxt/report-legacy.a65b90ee.js','_nuxt/report-legacy.ce9ed703.js','_nuxt/report-legacy.e3af8009.js','_nuxt/report-legacy.e97a4ae0.js','_nuxt/report-legacy.f5ee7ac1.js','_nuxt/report-legacy.f65ccf54.js','_nuxt/report.0d0ae291.js','_nuxt/report.15db9b29.js','_nuxt/report.17b50b30.js','_nuxt/report.50c8410b.js','_nuxt/report.55dfa1cc.js','_nuxt/report.5addfb73.js','_nuxt/report.5f42bc72.js','_nuxt/report.65f4e6ff.js','_nuxt/report.73088cc0.js','_nuxt/report.7e862fd6.js','_nuxt/report.960d2317.js','_nuxt/report.98e9b87b.js','_nuxt/report.9c5d5ea0.js','_nuxt/report.b8f0233d.js','_nuxt/report.bada6fec.js','_nuxt/report.cb7646ec.js','_nuxt/report.e4773ed6.js','_nuxt/report.ef9a6c0d.js','_nuxt/result-view-legacy.782b0032.js','_nuxt/result-view.3812080b.js','_nuxt/resultModalMixin-legacy.fcf07f3c.js','_nuxt/resultModalMixin.bd9e9dc0.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.e875512f.js','_nuxt/search-cell.0b2fc513.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-legacy.193fe166.js','_nuxt/search-modal.pc-legacy.723d0162.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.826997bf.js','_nuxt/search-page.mobile-legacy.337e5976.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search-page.mobile.79c5dff9.js','_nuxt/search.08e65052.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.44ec0bb6.js','_nuxt/switch-legacy.525c253f.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.77700f2a.js','_nuxt/switch.ea86a58f.js','_nuxt/switchMixin-legacy.16ee5f43.js','_nuxt/switchMixin.1859fc51.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.6ab6636b.js','_nuxt/user-info.49e73356.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.956ce489.js','_nuxt/utilities.appleyPay.abfeb8ac.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.e4462bc2.js','_nuxt/vue.f36acd1f.1c4b16d2.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.289', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



