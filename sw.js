

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.b2b32399.js','_nuxt/AboutSA.mobile.0aa7e952.js','_nuxt/AboutSA2-legacy.f21b0cb4.js','_nuxt/AboutSA2.9f604992.css','_nuxt/AboutSA2.f1af8206.js','_nuxt/PayUtils-legacy.ab001df9.js','_nuxt/PayUtils.946c7e9c.js','_nuxt/UICarouselView-legacy.43695c8c.js','_nuxt/UICarouselView.6047ea50.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.4aced1ce.js','_nuxt/account-item-legacy.f7c04711.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.4c052d4d.js','_nuxt/account-item.950742c1.css','_nuxt/account-item.c080079a.js','_nuxt/api-legacy.b2e24d3d.js','_nuxt/api.13519dc8.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.64aa5029.js','_nuxt/bank-views.5eca39ec.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/b6e968a1-c422-4c4f-abe8-ce50b036073c.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.e5a8bc31.js','_nuxt/channel-view.7adf75e6.js','_nuxt/cko-card-list-legacy.44a2c7b3.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.e511ccc0.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.11713ba9.js','_nuxt/enter-legacy.d7819ca7.js','_nuxt/enter.342b3289.css','_nuxt/enter.5b32e309.js','_nuxt/enter.d7350a96.css','_nuxt/enter.e391b539.js','_nuxt/enterMixin-legacy.f445d42e.js','_nuxt/enterMixin.73380641.js','_nuxt/entry-legacy.0ce2f5e3.js','_nuxt/entry.37551607.js','_nuxt/entry.52209fbe.css','_nuxt/error-404-legacy.337d933a.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.7b260366.js','_nuxt/error-500-legacy.b190150c.js','_nuxt/error-500.360ffcd4.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.199ba510.js','_nuxt/error.06313295.css','_nuxt/error.71159134.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.d0ac0247.js','_nuxt/frames.dffd171b.js','_nuxt/home-legacy.13ad0666.js','_nuxt/home.63eb863a.css','_nuxt/home.da4ea237.js','_nuxt/home.pc-legacy.664d25be.js','_nuxt/home.pc.5b4737e1.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.018579cd.js','_nuxt/index-legacy.0de52059.js','_nuxt/index-legacy.1974d6d7.js','_nuxt/index-legacy.1af926ae.js','_nuxt/index-legacy.1de778b1.js','_nuxt/index-legacy.2ee85b1c.js','_nuxt/index-legacy.330c1fae.js','_nuxt/index-legacy.340820c2.js','_nuxt/index-legacy.367bbe4f.js','_nuxt/index-legacy.47670b22.js','_nuxt/index-legacy.520f8e1d.js','_nuxt/index-legacy.634ab8b3.js','_nuxt/index-legacy.69dc624a.js','_nuxt/index-legacy.6a6e1dc7.js','_nuxt/index-legacy.6b2b0bf4.js','_nuxt/index-legacy.7331150f.js','_nuxt/index-legacy.79f9604d.js','_nuxt/index-legacy.7c8bdcef.js','_nuxt/index-legacy.7f651afe.js','_nuxt/index-legacy.8141eb28.js','_nuxt/index-legacy.837314d2.js','_nuxt/index-legacy.854ff42b.js','_nuxt/index-legacy.88bb1f5c.js','_nuxt/index-legacy.9058c0a1.js','_nuxt/index-legacy.94598374.js','_nuxt/index-legacy.9c4b589d.js','_nuxt/index-legacy.9c961714.js','_nuxt/index-legacy.a7bf9276.js','_nuxt/index-legacy.ac45db57.js','_nuxt/index-legacy.b54bf4a7.js','_nuxt/index-legacy.b84f8846.js','_nuxt/index-legacy.bb0c4ca0.js','_nuxt/index-legacy.bc82c5d0.js','_nuxt/index-legacy.bcd71aaf.js','_nuxt/index-legacy.bd02f4c0.js','_nuxt/index-legacy.bdec1c20.js','_nuxt/index-legacy.c527d37e.js','_nuxt/index-legacy.ca96d3a8.js','_nuxt/index-legacy.cb5cdba7.js','_nuxt/index-legacy.dbd6db51.js','_nuxt/index-legacy.e1d5f00a.js','_nuxt/index-legacy.e631ab9e.js','_nuxt/index-legacy.f013fabc.js','_nuxt/index-legacy.f1c6964f.js','_nuxt/index-legacy.f47274ee.js','_nuxt/index-legacy.f70623c8.js','_nuxt/index.008b33da.js','_nuxt/index.00fe4e87.js','_nuxt/index.08b54571.js','_nuxt/index.0f38cb8c.js','_nuxt/index.100dcc7d.css','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.1c18e6bb.css','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.3225e129.js','_nuxt/index.3453ed37.js','_nuxt/index.351a6fc4.js','_nuxt/index.3bd1db8a.js','_nuxt/index.3e3f66aa.css','_nuxt/index.44638243.css','_nuxt/index.450d68f6.js','_nuxt/index.4734511e.js','_nuxt/index.47599534.css','_nuxt/index.4cf5b58b.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.53a68abe.js','_nuxt/index.56fdaa7f.js','_nuxt/index.57fc17d2.js','_nuxt/index.609a047b.css','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.6dc39b87.js','_nuxt/index.700b0571.js','_nuxt/index.704c1eb6.js','_nuxt/index.71d24d3c.css','_nuxt/index.73746cd2.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7ce476e3.js','_nuxt/index.815202c8.css','_nuxt/index.820ddfec.js','_nuxt/index.838e089b.js','_nuxt/index.83e8461a.js','_nuxt/index.8c410016.js','_nuxt/index.8cd02404.js','_nuxt/index.8cd6a0c6.js','_nuxt/index.9074b62e.js','_nuxt/index.95b5af24.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a2373cf0.js','_nuxt/index.a76252f9.css','_nuxt/index.ae40bec6.css','_nuxt/index.b2355280.js','_nuxt/index.b26ad712.css','_nuxt/index.b287eddb.js','_nuxt/index.b6b233ed.css','_nuxt/index.bd98e0ae.js','_nuxt/index.bed0d791.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c8621a6b.css','_nuxt/index.ca3b357e.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d27b60b2.js','_nuxt/index.d4b9bf0c.js','_nuxt/index.d6053aae.js','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.db3522ba.js','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.dfd55591.js','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e9650530.js','_nuxt/index.ed267df6.js','_nuxt/index.edb1ab71.js','_nuxt/index.ee5e9272.js','_nuxt/index.effbb05e.js','_nuxt/index.f23561e0.js','_nuxt/index.f3cb23c2.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.fa846c8f.js','_nuxt/index.mobile-legacy.2d77f562.js','_nuxt/index.mobile-legacy.3d75d6a3.js','_nuxt/index.mobile-legacy.3ed78762.js','_nuxt/index.mobile-legacy.952ac052.js','_nuxt/index.mobile-legacy.caf77500.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.4f2c6808.js','_nuxt/index.mobile.6604cc78.js','_nuxt/index.mobile.719b1239.js','_nuxt/index.mobile.86aad356.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.mobile.fefef0d5.js','_nuxt/index.moble-legacy.b3332647.js','_nuxt/index.moble.1c12d596.js','_nuxt/index.moble.4669505e.css','_nuxt/index.pc-legacy.0d090fe3.js','_nuxt/index.pc-legacy.31e2fce5.js','_nuxt/index.pc-legacy.638d52bf.js','_nuxt/index.pc-legacy.6489a432.js','_nuxt/index.pc-legacy.6642e26e.js','_nuxt/index.pc-legacy.a1bb3471.js','_nuxt/index.pc-legacy.d7864f9b.js','_nuxt/index.pc-legacy.faf43543.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.3f1cf2ef.js','_nuxt/index.pc.4f38a7d1.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.5adcf604.js','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.6723dd3e.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.acc7d91c.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.c4cda4d0.js','_nuxt/index.pc.ccf24d3b.js','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d9c61628.js','_nuxt/index.pc.vue-legacy.6669b6b1.js','_nuxt/index.pc.vue-legacy.7e636b82.js','_nuxt/index.pc.vue.983754fc.js','_nuxt/index.pc.vue.b5dc9c7b.js','_nuxt/index.vue-legacy.06405986.js','_nuxt/index.vue-legacy.148dd3c8.js','_nuxt/index.vue-legacy.18624f53.js','_nuxt/index.vue-legacy.62fa6cec.js','_nuxt/index.vue-legacy.c3ee8b82.js','_nuxt/index.vue.0bc0a4d9.js','_nuxt/index.vue.2ffc0648.js','_nuxt/index.vue.524387ac.js','_nuxt/index.vue.6f44e8b4.js','_nuxt/index.vue.9c7fb6e0.js','_nuxt/indexMixin-legacy.dac8d25a.js','_nuxt/indexMixin.a6d60592.js','_nuxt/index_mobile-legacy.a2da436b.js','_nuxt/index_mobile-legacy.bc420cbb.js','_nuxt/index_mobile.01b3b434.js','_nuxt/index_mobile.9a9b0a36.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.06125d8f.js','_nuxt/index_pc-legacy.d116fc57.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.9bcca0c0.js','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.b5843ea8.js','_nuxt/init-legacy.16969eba.js','_nuxt/init.05532d92.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.58189261.js','_nuxt/login.modal.pc.948e6053.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.a9c9834e.js','_nuxt/model-cell.6e1822bf.js','_nuxt/model-legacy.01492c0e.js','_nuxt/model-legacy.305dc71e.js','_nuxt/model-legacy.37deeffa.js','_nuxt/model-legacy.426617da.js','_nuxt/model-legacy.46c6f807.js','_nuxt/model-legacy.4af71b11.js','_nuxt/model-legacy.5193ca53.js','_nuxt/model-legacy.51babe49.js','_nuxt/model-legacy.530176ae.js','_nuxt/model-legacy.57e39b82.js','_nuxt/model-legacy.748e9041.js','_nuxt/model-legacy.75bf0a9d.js','_nuxt/model-legacy.93584fb6.js','_nuxt/model-legacy.a777c4a9.js','_nuxt/model-legacy.b7f981ff.js','_nuxt/model-legacy.d04cf63f.js','_nuxt/model-legacy.d05dd722.js','_nuxt/model-legacy.d7c8bfed.js','_nuxt/model-legacy.d8e50550.js','_nuxt/model-legacy.f051d8da.js','_nuxt/model-legacy.f2f9cc23.js','_nuxt/model-legacy.f749daf5.js','_nuxt/model.09bec7af.js','_nuxt/model.1cb06312.js','_nuxt/model.2fdd522c.js','_nuxt/model.4487f8ae.js','_nuxt/model.5c8b4378.js','_nuxt/model.6b86e85f.js','_nuxt/model.71091aca.js','_nuxt/model.71d8fb95.js','_nuxt/model.760f8f19.js','_nuxt/model.783e600f.js','_nuxt/model.8507ea19.js','_nuxt/model.8ae85d0d.js','_nuxt/model.8c4c7e6f.js','_nuxt/model.9d82e93f.js','_nuxt/model.ae05e243.js','_nuxt/model.b95e15d5.js','_nuxt/model.c9e9f116.js','_nuxt/model.d68338e9.js','_nuxt/model.d8c7771d.js','_nuxt/model.e1aeb223.js','_nuxt/model.ebb59029.js','_nuxt/model.f660599e.js','_nuxt/pay-drawer-legacy.bf1cae30.js','_nuxt/pay-drawer.14748d33.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-legacy.0dee42fe.js','_nuxt/pay-legacy.fa50dc50.js','_nuxt/pay-step-legacy.2621bea2.js','_nuxt/pay-step.b3867e2f.js','_nuxt/pay-step.pc-legacy.19a71a0b.js','_nuxt/pay-step.pc.7971280f.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.38cd1f09.js','_nuxt/pay.4bf1bf41.css','_nuxt/pay.54850f98.js','_nuxt/pay.cf9e3b84.css','_nuxt/payGoodsListItem-legacy.38314e04.js','_nuxt/payGoodsListItem-legacy.b609aefe.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.862d7639.js','_nuxt/payGoodsListItem.d785d415.js','_nuxt/payMixin-legacy.741eb4d2.js','_nuxt/payMixin.8425b389.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.a7402d4e.js','_nuxt/public.cc1ede6c.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.2a298ab4.js','_nuxt/recentItemMixin.61294858.js','_nuxt/recharge-item-legacy.73fdacd4.js','_nuxt/recharge-item.661c706c.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.dd9e9d6e.js','_nuxt/refresh-modal.b1f3d0b0.js','_nuxt/report-legacy.069f9c46.js','_nuxt/report-legacy.091ecfb6.js','_nuxt/report-legacy.250d90b4.js','_nuxt/report-legacy.2632c8a8.js','_nuxt/report-legacy.38878801.js','_nuxt/report-legacy.3a87caa8.js','_nuxt/report-legacy.587bb4c5.js','_nuxt/report-legacy.5e187299.js','_nuxt/report-legacy.7d91e750.js','_nuxt/report-legacy.97ef40ae.js','_nuxt/report-legacy.98b509f5.js','_nuxt/report-legacy.aaf784d7.js','_nuxt/report-legacy.b364f110.js','_nuxt/report-legacy.c68daa89.js','_nuxt/report-legacy.c861f1ef.js','_nuxt/report-legacy.f06d2998.js','_nuxt/report-legacy.f6930815.js','_nuxt/report-legacy.fd84c8f1.js','_nuxt/report.0cb9f446.js','_nuxt/report.141cb6f5.js','_nuxt/report.1eac8d04.js','_nuxt/report.27ec80b9.js','_nuxt/report.29c674fc.js','_nuxt/report.34b80bb7.js','_nuxt/report.448655c6.js','_nuxt/report.46a968ea.js','_nuxt/report.69876c57.js','_nuxt/report.80b15186.js','_nuxt/report.90fc816a.js','_nuxt/report.9a8ba2ba.js','_nuxt/report.a6059cd5.js','_nuxt/report.a662791a.js','_nuxt/report.c4b99852.js','_nuxt/report.dd9c17f1.js','_nuxt/report.e16c583b.js','_nuxt/report.f241398a.js','_nuxt/result-view-legacy.25de8b2e.js','_nuxt/result-view.34a190ee.js','_nuxt/resultModalMixin-legacy.348d62a5.js','_nuxt/resultModalMixin.2dbcfabc.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.33ca3ac9.js','_nuxt/search-cell.01554209.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-legacy.08719951.js','_nuxt/search-modal.pc-legacy.ab2ad235.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.d9371304.js','_nuxt/search-page.mobile-legacy.247de6a9.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search-page.mobile.fd916411.js','_nuxt/search.2aabaec5.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.b409b61b.js','_nuxt/switch-legacy.cfc36141.js','_nuxt/switch.557a6905.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.acabb5a5.js','_nuxt/switchMixin-legacy.f8502d3d.js','_nuxt/switchMixin.419e2da5.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.bd0c87f2.js','_nuxt/user-info.a92680ae.css','_nuxt/user-info.b7b80085.js','_nuxt/utilities.appleyPay-legacy.90da276d.js','_nuxt/utilities.appleyPay.2470dde6.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.049fb4be.js','_nuxt/vue.f36acd1f.92fda2c6.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



