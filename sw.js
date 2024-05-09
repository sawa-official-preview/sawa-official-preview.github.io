

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
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.af4bd2cc.js','_nuxt/AboutSA.mobile.9cd2500d.js','_nuxt/AboutSA2-legacy.58c88410.js','_nuxt/AboutSA2.30dd1101.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.751331a6.js','_nuxt/PayUtils.3fddcca3.js','_nuxt/UICarouselView-legacy.bfec1809.js','_nuxt/UICarouselView.c93bb6db.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/account-item-legacy.53c7ed03.js','_nuxt/account-item-legacy.9f0b9351.js','_nuxt/account-item.0e0285d9.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.5428575c.js','_nuxt/account-item.950742c1.css','_nuxt/api-legacy.13e15ae8.js','_nuxt/api.8c79c65c.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.b169b4c6.js','_nuxt/bank-views.d4178ba9.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/10e8e9a6-9890-4cf1-9873-b1cdd306779f.json','_nuxt/builds/meta/dev.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.3a7963d6.js','_nuxt/channel-view.94d18c81.js','_nuxt/cko-card-list-legacy.d6096140.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.6ee7be3e.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.c6d4ff05.js','_nuxt/enter-legacy.cb0f6292.js','_nuxt/enter.342b3289.css','_nuxt/enter.75a78c61.js','_nuxt/enter.d7350a96.css','_nuxt/enter.e5e8cc35.js','_nuxt/enterMixin-legacy.24641d03.js','_nuxt/enterMixin.224f265a.js','_nuxt/entry-legacy.369dee64.js','_nuxt/entry.37c1c90b.js','_nuxt/entry.45ebb6c6.css','_nuxt/error-404-legacy.3894846d.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.a8b61da3.js','_nuxt/error-500-legacy.bd94bb71.js','_nuxt/error-500.bfdd8837.js','_nuxt/error-500.c5df6088.css','_nuxt/error-legacy.25985905.js','_nuxt/error.06313295.css','_nuxt/error.8be81e9a.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.16e73b21.js','_nuxt/frames.8f645f63.js','_nuxt/home-legacy.7f17e464.js','_nuxt/home.3e204b0a.js','_nuxt/home.63eb863a.css','_nuxt/home.pc-legacy.2a0a8585.js','_nuxt/home.pc.8be3e011.css','_nuxt/home.pc.bb3f6e57.js','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.0030bf68.js','_nuxt/index-legacy.0aa83158.js','_nuxt/index-legacy.1426356d.js','_nuxt/index-legacy.178e82d5.js','_nuxt/index-legacy.21c061c3.js','_nuxt/index-legacy.2350f4a9.js','_nuxt/index-legacy.2c877198.js','_nuxt/index-legacy.320f20e4.js','_nuxt/index-legacy.3311e45f.js','_nuxt/index-legacy.337dc29d.js','_nuxt/index-legacy.3c24a49b.js','_nuxt/index-legacy.488ae4bc.js','_nuxt/index-legacy.4b0370c3.js','_nuxt/index-legacy.59dc445f.js','_nuxt/index-legacy.5e529db0.js','_nuxt/index-legacy.5f27ddfe.js','_nuxt/index-legacy.687c2923.js','_nuxt/index-legacy.6f6415f1.js','_nuxt/index-legacy.71ceb0b0.js','_nuxt/index-legacy.7f117c7b.js','_nuxt/index-legacy.82cec62f.js','_nuxt/index-legacy.891b0cc6.js','_nuxt/index-legacy.8a4cf1d0.js','_nuxt/index-legacy.8bb63f18.js','_nuxt/index-legacy.8c947586.js','_nuxt/index-legacy.9bcd5516.js','_nuxt/index-legacy.a45ace60.js','_nuxt/index-legacy.a6ce7737.js','_nuxt/index-legacy.ab18e86c.js','_nuxt/index-legacy.aee6ac9b.js','_nuxt/index-legacy.af976dcf.js','_nuxt/index-legacy.b5c1889a.js','_nuxt/index-legacy.b8a4184b.js','_nuxt/index-legacy.b99c95a6.js','_nuxt/index-legacy.cd9eced8.js','_nuxt/index-legacy.d29e5b55.js','_nuxt/index-legacy.da6ee9fc.js','_nuxt/index-legacy.e17633e6.js','_nuxt/index-legacy.e25b3fd6.js','_nuxt/index-legacy.e46c9f05.js','_nuxt/index-legacy.e8d173f8.js','_nuxt/index-legacy.e92f2d68.js','_nuxt/index-legacy.ea181892.js','_nuxt/index-legacy.ef582bf3.js','_nuxt/index-legacy.f0858d54.js','_nuxt/index-legacy.fb461c29.js','_nuxt/index.02595488.js','_nuxt/index.038ca6d8.js','_nuxt/index.03c13afd.js','_nuxt/index.100dcc7d.css','_nuxt/index.139511b2.css','_nuxt/index.1584c461.css','_nuxt/index.15a4fa62.js','_nuxt/index.188f3d9d.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1c603e10.js','_nuxt/index.1da25fa5.js','_nuxt/index.1df0cc75.js','_nuxt/index.23a90349.css','_nuxt/index.27517127.css','_nuxt/index.2ea9d898.js','_nuxt/index.36bc8313.js','_nuxt/index.384639c1.js','_nuxt/index.3e3f66aa.css','_nuxt/index.44638243.css','_nuxt/index.4655f9c2.js','_nuxt/index.47599534.css','_nuxt/index.4caa33df.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.53729474.js','_nuxt/index.58cd5a14.js','_nuxt/index.58e11ae2.js','_nuxt/index.5ff0b49a.js','_nuxt/index.5ff92db6.js','_nuxt/index.609a047b.css','_nuxt/index.6548a89f.js','_nuxt/index.65705966.js','_nuxt/index.69c12705.css','_nuxt/index.6af9cd7e.js','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.71d24d3c.css','_nuxt/index.74a4215d.js','_nuxt/index.771c13e6.css','_nuxt/index.7b7671a9.css','_nuxt/index.7e9379cb.js','_nuxt/index.7ec5c5f8.js','_nuxt/index.815202c8.css','_nuxt/index.862f5d2e.js','_nuxt/index.8890c8b8.js','_nuxt/index.89a7e005.js','_nuxt/index.8d302ad8.js','_nuxt/index.8d3a1ab4.js','_nuxt/index.8ea18a3f.js','_nuxt/index.938b431e.js','_nuxt/index.96d2defb.js','_nuxt/index.9972696a.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a4b87ae2.js','_nuxt/index.a65289d0.js','_nuxt/index.a76252f9.css','_nuxt/index.ae40bec6.css','_nuxt/index.b26ad712.css','_nuxt/index.b6333e41.js','_nuxt/index.b6b233ed.css','_nuxt/index.b8f65d2f.js','_nuxt/index.b9591434.js','_nuxt/index.bb538ba8.js','_nuxt/index.bdebfc1b.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c1e2020b.js','_nuxt/index.c8621a6b.css','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d39a1e65.js','_nuxt/index.d5e1ceba.js','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.eb8e1fde.js','_nuxt/index.ebfcf14f.js','_nuxt/index.f391e7df.js','_nuxt/index.f7872780.css','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.035f6a38.js','_nuxt/index.mobile-legacy.0bf30f45.js','_nuxt/index.mobile-legacy.1380e443.js','_nuxt/index.mobile-legacy.8c68062f.js','_nuxt/index.mobile-legacy.d3351d86.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.31c9fb12.js','_nuxt/index.mobile.787fdac2.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.mobile.f3679df7.js','_nuxt/index.mobile.f74ffb2c.js','_nuxt/index.mobile.fb2e6e3d.js','_nuxt/index.moble-legacy.1451fa79.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.e003dca3.js','_nuxt/index.pc-legacy.0e944e1f.js','_nuxt/index.pc-legacy.14edf25c.js','_nuxt/index.pc-legacy.19157cd3.js','_nuxt/index.pc-legacy.3db4e3f7.js','_nuxt/index.pc-legacy.4b9cbbeb.js','_nuxt/index.pc-legacy.811459d8.js','_nuxt/index.pc-legacy.87ed0fbc.js','_nuxt/index.pc-legacy.c7c5c572.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.4717f489.js','_nuxt/index.pc.4a9b20fa.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.69b37893.css','_nuxt/index.pc.6a0975cd.js','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.7d22a0e2.js','_nuxt/index.pc.809eab95.js','_nuxt/index.pc.a529a928.js','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.cffe44ff.js','_nuxt/index.pc.f5098224.js','_nuxt/index.pc.vue-legacy.56250c66.js','_nuxt/index.pc.vue-legacy.7ae11795.js','_nuxt/index.pc.vue.b7f469ba.js','_nuxt/index.pc.vue.d0131f38.js','_nuxt/index.vue-legacy.32722bca.js','_nuxt/index.vue-legacy.42202b2c.js','_nuxt/index.vue-legacy.6284f39f.js','_nuxt/index.vue-legacy.cc84c635.js','_nuxt/index.vue-legacy.cfc5b204.js','_nuxt/index.vue.2d2b44a1.js','_nuxt/index.vue.ab691aba.js','_nuxt/index.vue.e8483e90.js','_nuxt/index.vue.f59edfd0.js','_nuxt/index.vue.f9454bfa.js','_nuxt/indexMixin-legacy.82d07ed1.js','_nuxt/indexMixin.a6c9a691.js','_nuxt/index_mobile-legacy.027d7533.js','_nuxt/index_mobile-legacy.353b05b8.js','_nuxt/index_mobile.042d1208.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ccfa19ff.js','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.790becc5.js','_nuxt/index_pc-legacy.d96f8823.js','_nuxt/index_pc.1a83eb13.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.ffb967a1.js','_nuxt/init-legacy.51e85a36.js','_nuxt/init.97a63a79.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.9cd2981a.js','_nuxt/login.modal.pc.1073ea8a.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.51a45bcf.js','_nuxt/model-cell.841f4dce.js','_nuxt/model-legacy.1024d707.js','_nuxt/model-legacy.11938abc.js','_nuxt/model-legacy.1390d7f6.js','_nuxt/model-legacy.1411bd68.js','_nuxt/model-legacy.1d5b7de2.js','_nuxt/model-legacy.26cc7acc.js','_nuxt/model-legacy.403c6466.js','_nuxt/model-legacy.43a9f9f0.js','_nuxt/model-legacy.4aa3e0bf.js','_nuxt/model-legacy.6beb9b4d.js','_nuxt/model-legacy.71212601.js','_nuxt/model-legacy.790efd0c.js','_nuxt/model-legacy.96a331d1.js','_nuxt/model-legacy.988a95a4.js','_nuxt/model-legacy.a73181a8.js','_nuxt/model-legacy.b35f7234.js','_nuxt/model-legacy.bda87239.js','_nuxt/model-legacy.c073d699.js','_nuxt/model-legacy.e1efb856.js','_nuxt/model-legacy.e20cd16e.js','_nuxt/model-legacy.e720da5c.js','_nuxt/model-legacy.ee749ab7.js','_nuxt/model.0cef0559.js','_nuxt/model.0e6ab2b7.js','_nuxt/model.11c58506.js','_nuxt/model.1a02c841.js','_nuxt/model.1a993c6a.js','_nuxt/model.2fe7a293.js','_nuxt/model.3c24da14.js','_nuxt/model.3c54f44d.js','_nuxt/model.44dce92f.js','_nuxt/model.4e4f7fcb.js','_nuxt/model.4fb425d0.js','_nuxt/model.5198abe6.js','_nuxt/model.56985c34.js','_nuxt/model.62d0391a.js','_nuxt/model.693b853a.js','_nuxt/model.6eecda3c.js','_nuxt/model.7d1a1fc1.js','_nuxt/model.84e2473f.js','_nuxt/model.90c55379.js','_nuxt/model.a048f50d.js','_nuxt/model.dac1fb98.js','_nuxt/model.f6b33f78.js','_nuxt/pay-drawer-legacy.67e458d2.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-drawer.6972b38b.js','_nuxt/pay-legacy.2b269c9c.js','_nuxt/pay-legacy.c75e8391.js','_nuxt/pay-step-legacy.9fe4b11b.js','_nuxt/pay-step.9a918098.js','_nuxt/pay-step.pc-legacy.bc90bdf8.js','_nuxt/pay-step.pc.48d01355.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.4bf1bf41.css','_nuxt/pay.8e48ac3f.js','_nuxt/pay.cbbad25b.js','_nuxt/pay.cf9e3b84.css','_nuxt/payGoodsListItem-legacy.592f492a.js','_nuxt/payGoodsListItem-legacy.8137c8fd.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.6ee9c61b.js','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.e45f20f8.js','_nuxt/payMixin-legacy.01306836.js','_nuxt/payMixin.5fa28ff2.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.0095c79a.js','_nuxt/public.de28ee4c.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.37509a22.js','_nuxt/recentItemMixin.f9694b93.js','_nuxt/recharge-item-legacy.be7d847f.js','_nuxt/recharge-item.6edf523c.js','_nuxt/recharge-item.935b9836.css','_nuxt/refresh-modal-legacy.7e2b638d.js','_nuxt/refresh-modal.4320f00f.js','_nuxt/report-legacy.1f2e9bd7.js','_nuxt/report-legacy.27782ba3.js','_nuxt/report-legacy.431e7e3c.js','_nuxt/report-legacy.55cd80c1.js','_nuxt/report-legacy.5ca76ef0.js','_nuxt/report-legacy.5d1a0796.js','_nuxt/report-legacy.748ec2bf.js','_nuxt/report-legacy.7d09579a.js','_nuxt/report-legacy.7de8775f.js','_nuxt/report-legacy.81cbd0f7.js','_nuxt/report-legacy.8e0dfcf2.js','_nuxt/report-legacy.9260b01a.js','_nuxt/report-legacy.983dfc5b.js','_nuxt/report-legacy.c27d8965.js','_nuxt/report-legacy.dcc9560f.js','_nuxt/report-legacy.efaf3e69.js','_nuxt/report-legacy.f0f9bfa9.js','_nuxt/report-legacy.fc5d9cb1.js','_nuxt/report.0ce26ff1.js','_nuxt/report.15b6e976.js','_nuxt/report.168d7ff4.js','_nuxt/report.20701d5c.js','_nuxt/report.29dbb667.js','_nuxt/report.2bd2dfc9.js','_nuxt/report.50a7e02a.js','_nuxt/report.648c0f17.js','_nuxt/report.6bf05f5a.js','_nuxt/report.7d1a8a7b.js','_nuxt/report.8e4a10f3.js','_nuxt/report.ac0c2e16.js','_nuxt/report.ae903d6c.js','_nuxt/report.b6e91d47.js','_nuxt/report.eca30e65.js','_nuxt/report.ee3802c2.js','_nuxt/report.f5fdb870.js','_nuxt/report.f6e0bc48.js','_nuxt/result-view-legacy.15f48c3a.js','_nuxt/result-view.5ae37c02.js','_nuxt/resultModalMixin-legacy.dfca5715.js','_nuxt/resultModalMixin.499964c0.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.24ec873d.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-cell.682140c6.js','_nuxt/search-legacy.b5034802.js','_nuxt/search-modal.pc-legacy.fa1ae95c.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.b33b3fe7.js','_nuxt/search-page.mobile-legacy.2042c5bb.js','_nuxt/search-page.mobile.5fe591ae.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search.453632c9.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.3cbfdddc.js','_nuxt/switch-legacy.b0fbae6b.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.a6aa0546.js','_nuxt/switch.ed232f53.js','_nuxt/switchMixin-legacy.9c5f7480.js','_nuxt/switchMixin.cd6b7e3a.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.16b684c4.js','_nuxt/user-info.188a7df2.js','_nuxt/user-info.a92680ae.css','_nuxt/utilities.appleyPay-legacy.5691ee8d.js','_nuxt/utilities.appleyPay.78746953.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.4f01bac9.js','_nuxt/vue.f36acd1f.0a5969a1.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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



