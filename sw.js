

const cacheVersion = 'v1.0.290'

console.log('service worker version', '1.0.290')

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
  console.log('service worker active', '1.0.290', event)
  event.waitUntil(clearOldCache())
  event.waitUntil(clients.claim())
})

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(['.nojekyll','.well-known/apple-developer-merchantid-domain-association','200.html','404.html','TDID-1.0.24-SKI2TX01B9DK0ZYW_build_all_20230906165843.js','_nuxt/AboutSA.adce0f74.css','_nuxt/AboutSA.mobile-legacy.ee3f0d80.js','_nuxt/AboutSA.mobile.7d3aff94.js','_nuxt/AboutSA2-legacy.1f3171f1.js','_nuxt/AboutSA2.17d1ea48.js','_nuxt/AboutSA2.9f604992.css','_nuxt/PayUtils-legacy.6cb456dd.js','_nuxt/PayUtils.b07fd8f1.js','_nuxt/UICarouselView-legacy.d9dd0343.js','_nuxt/UICarouselView.d69ab017.css','_nuxt/UICarouselView.fab1beac.js','_nuxt/account-item-legacy.3f041bca.js','_nuxt/account-item-legacy.d60564e3.js','_nuxt/account-item.4b37994e.css','_nuxt/account-item.950742c1.css','_nuxt/account-item.de6dad39.js','_nuxt/account-item.e2da81f5.js','_nuxt/api-legacy.e2ce2039.js','_nuxt/api.d3a89610.js','_nuxt/are-chat.94f760f0.png','_nuxt/are-friend.4a964570.png','_nuxt/are-game.ad31690e.png','_nuxt/bank-views-legacy.7c09e4bd.js','_nuxt/bank-views.d684f3d9.js','_nuxt/bg-are.a43b2485.png','_nuxt/bg-are.d7227e2e.png','_nuxt/bg.1858f8a4.png','_nuxt/bg.1d42da26.png','_nuxt/bg.fb3c8e99.png','_nuxt/bg2.e9dccafc.png','_nuxt/bg3.34e2917c.png','_nuxt/bg4.815c5a0e.png','_nuxt/bg_1.13854dc0.png','_nuxt/bg_2.0f038b7b.png','_nuxt/bg_3.cb58245e.png','_nuxt/bg_4.935a1ad5.png','_nuxt/bg_home.fc789b43.png','_nuxt/bg_sawa_1.a2097a0a.png','_nuxt/bg_sawa_2.6aa383f4.png','_nuxt/bg_sawa_3.9293432b.png','_nuxt/bottom.272f8b07.png','_nuxt/builds/latest.json','_nuxt/builds/meta/12e6939c-4391-48c4-bbf5-081edc4fffe0.json','_nuxt/button-b.8383eead.png','_nuxt/card-icon.e6002f01.png','_nuxt/channel-view-legacy.78a1deb3.js','_nuxt/channel-view.074b34a5.js','_nuxt/cko-card-list-legacy.1129c334.js','_nuxt/cko-card-list.6193db4f.css','_nuxt/cko-card-list.6dfb79e7.js','_nuxt/demo-legacy.12eb5e10.js','_nuxt/demo.65338f45.js','_nuxt/enter-legacy.56bb3dd6.js','_nuxt/enter-legacy.8044a54e.js','_nuxt/enter.096c1345.js','_nuxt/enter.20deddb8.js','_nuxt/enter.342b3289.css','_nuxt/enter.d7350a96.css','_nuxt/enterMixin-legacy.bd201fd8.js','_nuxt/enterMixin.8559a142.js','_nuxt/entry-legacy.30b38fea.js','_nuxt/entry.0e8e42dd.js','_nuxt/entry.52209fbe.css','_nuxt/error-404-legacy.503dbfb5.js','_nuxt/error-404.1e21ac44.css','_nuxt/error-404.b3ed1740.js','_nuxt/error-500-legacy.8b20194e.js','_nuxt/error-500.c5df6088.css','_nuxt/error-500.f78609a1.js','_nuxt/error-legacy.d9a13749.js','_nuxt/error.06313295.css','_nuxt/error.bb7c22a0.js','_nuxt/fail.022aa37e.png','_nuxt/feedback-success.ab577353.png','_nuxt/frames-legacy.6c23c7db.js','_nuxt/frames.9ccc0c82.js','_nuxt/home-legacy.9e645a9b.js','_nuxt/home.41f2ef14.js','_nuxt/home.63eb863a.css','_nuxt/home.pc-legacy.3efae62d.js','_nuxt/home.pc.7d4e879b.js','_nuxt/home.pc.8be3e011.css','_nuxt/ic_error.cacc5917.png','_nuxt/ic_google.c975e653.png','_nuxt/ic_ludo.d79174ae.png','_nuxt/ico_checkout.e9f67740.png','_nuxt/ico_codapay.08a540c1.png','_nuxt/ico_khalaspay.57ccfdff.png','_nuxt/ico_payermax.c26d4c4f.png','_nuxt/icon2.ce1fe235.png','_nuxt/icon3.9bc096bc.png','_nuxt/icon4.9f9361c2.png','_nuxt/icon5.16afeaff.png','_nuxt/icon7.11cce46c.png','_nuxt/index-legacy.01f54cca.js','_nuxt/index-legacy.0493e5e1.js','_nuxt/index-legacy.1867f538.js','_nuxt/index-legacy.1c214612.js','_nuxt/index-legacy.1c32d439.js','_nuxt/index-legacy.1f8ac494.js','_nuxt/index-legacy.20f46a8e.js','_nuxt/index-legacy.259fc3ea.js','_nuxt/index-legacy.27e966d6.js','_nuxt/index-legacy.2894e524.js','_nuxt/index-legacy.34ad1fce.js','_nuxt/index-legacy.36301ef2.js','_nuxt/index-legacy.4806b216.js','_nuxt/index-legacy.4b7be996.js','_nuxt/index-legacy.4bb5b98f.js','_nuxt/index-legacy.5e1b4ce5.js','_nuxt/index-legacy.6ac530b4.js','_nuxt/index-legacy.701d334a.js','_nuxt/index-legacy.7cafd6cd.js','_nuxt/index-legacy.846873ad.js','_nuxt/index-legacy.8940dde6.js','_nuxt/index-legacy.961fb095.js','_nuxt/index-legacy.997d7e64.js','_nuxt/index-legacy.a4562f9d.js','_nuxt/index-legacy.a66cceaa.js','_nuxt/index-legacy.ac408690.js','_nuxt/index-legacy.b0494b4d.js','_nuxt/index-legacy.b4c35566.js','_nuxt/index-legacy.ba41337c.js','_nuxt/index-legacy.bdc18751.js','_nuxt/index-legacy.c346170b.js','_nuxt/index-legacy.ce6fb9a7.js','_nuxt/index-legacy.cea56a07.js','_nuxt/index-legacy.d484c103.js','_nuxt/index-legacy.d6948bde.js','_nuxt/index-legacy.daf2b6ba.js','_nuxt/index-legacy.dbd205da.js','_nuxt/index-legacy.e0cad522.js','_nuxt/index-legacy.e1a7318f.js','_nuxt/index-legacy.e6e9c3a2.js','_nuxt/index-legacy.e70967e8.js','_nuxt/index-legacy.ede30c9d.js','_nuxt/index-legacy.ef20e311.js','_nuxt/index-legacy.f242fec0.js','_nuxt/index-legacy.f62a7045.js','_nuxt/index-legacy.f9a73075.js','_nuxt/index.02ced0bc.js','_nuxt/index.03daa5cf.js','_nuxt/index.041d911a.js','_nuxt/index.0a184c86.js','_nuxt/index.100dcc7d.css','_nuxt/index.10bd738f.js','_nuxt/index.139511b2.css','_nuxt/index.1486ac5f.js','_nuxt/index.1584c461.css','_nuxt/index.1a346039.js','_nuxt/index.1c18e6bb.css','_nuxt/index.1ddf14b1.js','_nuxt/index.20188d4b.js','_nuxt/index.209388fe.js','_nuxt/index.23a546f6.js','_nuxt/index.23a90349.css','_nuxt/index.253c1f14.js','_nuxt/index.267d4d90.js','_nuxt/index.27517127.css','_nuxt/index.29ea05d6.js','_nuxt/index.3dab9dde.js','_nuxt/index.3e3f66aa.css','_nuxt/index.3f063782.js','_nuxt/index.411de384.js','_nuxt/index.440d2849.js','_nuxt/index.44638243.css','_nuxt/index.47599534.css','_nuxt/index.51140693.js','_nuxt/index.51e52fcd.css','_nuxt/index.52871309.css','_nuxt/index.5ea9fe8d.js','_nuxt/index.609a047b.css','_nuxt/index.61e846e8.js','_nuxt/index.687e2634.js','_nuxt/index.69c12705.css','_nuxt/index.6b308f11.css','_nuxt/index.6c1277f7.css','_nuxt/index.71d24d3c.css','_nuxt/index.7446b353.js','_nuxt/index.771c13e6.css','_nuxt/index.7993925b.js','_nuxt/index.79a90775.js','_nuxt/index.7b7671a9.css','_nuxt/index.815202c8.css','_nuxt/index.84fa4ba3.js','_nuxt/index.86d09ae8.js','_nuxt/index.8bbd7c7e.js','_nuxt/index.904a4256.js','_nuxt/index.99666760.js','_nuxt/index.9b1599a9.css','_nuxt/index.9d1de308.css','_nuxt/index.9faa3fdf.css','_nuxt/index.a186eb11.css','_nuxt/index.a2498ca2.js','_nuxt/index.a2f1e1a7.js','_nuxt/index.a76252f9.css','_nuxt/index.ab6e1f74.js','_nuxt/index.ae40bec6.css','_nuxt/index.b080026d.js','_nuxt/index.b26ad712.css','_nuxt/index.b39b4d53.js','_nuxt/index.b5e2458e.js','_nuxt/index.b6b233ed.css','_nuxt/index.be9f29a9.js','_nuxt/index.c01c649f.js','_nuxt/index.c0a2c05e.css','_nuxt/index.c441d005.js','_nuxt/index.c8621a6b.css','_nuxt/index.cacb4b12.js','_nuxt/index.cf10fe88.js','_nuxt/index.d0233f63.css','_nuxt/index.d1ea6fe7.css','_nuxt/index.d5bbe3a4.js','_nuxt/index.d780109a.js','_nuxt/index.d83f749f.css','_nuxt/index.dad14dde.css','_nuxt/index.dc9d46c4.css','_nuxt/index.dd525552.css','_nuxt/index.e347bd15.css','_nuxt/index.e46c25fd.css','_nuxt/index.e6ec4954.js','_nuxt/index.f06cece0.js','_nuxt/index.f7872780.css','_nuxt/index.f7ec0243.js','_nuxt/index.fa6af505.css','_nuxt/index.mobile-legacy.24b94a42.js','_nuxt/index.mobile-legacy.90d1b30b.js','_nuxt/index.mobile-legacy.b1c1d1b6.js','_nuxt/index.mobile-legacy.b82287ce.js','_nuxt/index.mobile-legacy.bee93d83.js','_nuxt/index.mobile.1dbba232.css','_nuxt/index.mobile.62ffeab0.js','_nuxt/index.mobile.7d5fa7fd.js','_nuxt/index.mobile.a1466456.css','_nuxt/index.mobile.b0a7dccf.css','_nuxt/index.mobile.c765caca.js','_nuxt/index.mobile.c7d34480.js','_nuxt/index.mobile.d964b009.js','_nuxt/index.mobile.e6e7523a.css','_nuxt/index.moble-legacy.e14f64f6.js','_nuxt/index.moble.4669505e.css','_nuxt/index.moble.b529c04d.js','_nuxt/index.pc-legacy.0b93eb36.js','_nuxt/index.pc-legacy.212e3c6b.js','_nuxt/index.pc-legacy.241bf4be.js','_nuxt/index.pc-legacy.356da43e.js','_nuxt/index.pc-legacy.5ad2f80b.js','_nuxt/index.pc-legacy.9aeb5570.js','_nuxt/index.pc-legacy.aa7e495b.js','_nuxt/index.pc-legacy.f62fc3b4.js','_nuxt/index.pc.01ac7a31.js','_nuxt/index.pc.0bf45a91.css','_nuxt/index.pc.547db847.js','_nuxt/index.pc.57b84988.css','_nuxt/index.pc.654af8f5.css','_nuxt/index.pc.7078a7d0.css','_nuxt/index.pc.75b3c3d9.js','_nuxt/index.pc.966aa76b.js','_nuxt/index.pc.a08ae18e.js','_nuxt/index.pc.aab4ada2.css','_nuxt/index.pc.c31f35b3.css','_nuxt/index.pc.ce8b19e2.css','_nuxt/index.pc.d5204a31.js','_nuxt/index.pc.ea7d158f.js','_nuxt/index.pc.ef984471.js','_nuxt/index.pc.vue-legacy.257d7c1c.js','_nuxt/index.pc.vue-legacy.39a6319d.js','_nuxt/index.pc.vue.b71cc083.js','_nuxt/index.pc.vue.de685735.js','_nuxt/index.vue-legacy.4a1fed49.js','_nuxt/index.vue-legacy.7e89fd7f.js','_nuxt/index.vue-legacy.828aaadb.js','_nuxt/index.vue-legacy.870d2ecd.js','_nuxt/index.vue-legacy.e7c3983b.js','_nuxt/index.vue.118b7ace.js','_nuxt/index.vue.175f8b18.js','_nuxt/index.vue.664e035f.js','_nuxt/index.vue.9a2e3754.js','_nuxt/index.vue.cd9fb26a.js','_nuxt/indexMixin-legacy.3a1babee.js','_nuxt/indexMixin.d925f253.js','_nuxt/index_mobile-legacy.065f2549.js','_nuxt/index_mobile-legacy.64e3ecbe.js','_nuxt/index_mobile.12d15af3.js','_nuxt/index_mobile.1ad84534.js','_nuxt/index_mobile.9df55f34.css','_nuxt/index_mobile.ec3c2fe3.css','_nuxt/index_pc-legacy.0b7eb464.js','_nuxt/index_pc-legacy.fb1e41cf.js','_nuxt/index_pc.37148f42.css','_nuxt/index_pc.5e3fc50d.js','_nuxt/index_pc.a71cff98.css','_nuxt/index_pc.c19e53aa.js','_nuxt/init-legacy.c033897e.js','_nuxt/init.4d0e3f95.js','_nuxt/ksa-chat.3b1b7877.png','_nuxt/ksa-friend.9b872048.png','_nuxt/ksa-game.6ed40bb4.png','_nuxt/loading.027c8ee1.gif','_nuxt/loading.db4ef008.png','_nuxt/login.modal.pc-legacy.7337ab67.js','_nuxt/login.modal.pc.42360ac2.js','_nuxt/login.modal.pc.9cdadca0.css','_nuxt/logo_ludo.72a48cc2.png','_nuxt/logo_ludo.99b44b6b.png','_nuxt/logo_sawa.c273cf78.png','_nuxt/ludo-billiard.6af78447.png','_nuxt/ludo-chat.561b9018.png','_nuxt/ludo-chess.c6e7cc84.png','_nuxt/ludo-game.32f9364a.png','_nuxt/mastercard.56fd56d1.png','_nuxt/model-cell-legacy.e55bdb57.js','_nuxt/model-cell.b74f825b.js','_nuxt/model-legacy.04f2c73c.js','_nuxt/model-legacy.0a61b5d1.js','_nuxt/model-legacy.115101b1.js','_nuxt/model-legacy.2005bddb.js','_nuxt/model-legacy.33945b5b.js','_nuxt/model-legacy.3aa60ad4.js','_nuxt/model-legacy.4228d28e.js','_nuxt/model-legacy.4590af6e.js','_nuxt/model-legacy.52f10e9f.js','_nuxt/model-legacy.5d275116.js','_nuxt/model-legacy.6bc8a645.js','_nuxt/model-legacy.72a4ec99.js','_nuxt/model-legacy.7920a0cf.js','_nuxt/model-legacy.7d42c14f.js','_nuxt/model-legacy.88ee8f21.js','_nuxt/model-legacy.9b81cb9c.js','_nuxt/model-legacy.9e7c728d.js','_nuxt/model-legacy.a2181194.js','_nuxt/model-legacy.c0ee1771.js','_nuxt/model-legacy.e452ee39.js','_nuxt/model-legacy.f4c847ff.js','_nuxt/model-legacy.fa82835c.js','_nuxt/model.05997aa7.js','_nuxt/model.0f195eac.js','_nuxt/model.249c24eb.js','_nuxt/model.2af52e57.js','_nuxt/model.2d3c7ddf.js','_nuxt/model.3164beda.js','_nuxt/model.331f72a4.js','_nuxt/model.3be556f8.js','_nuxt/model.43d604a4.js','_nuxt/model.545fd170.js','_nuxt/model.5943ed50.js','_nuxt/model.60503ce3.js','_nuxt/model.7382e3a0.js','_nuxt/model.878150d4.js','_nuxt/model.8f559727.js','_nuxt/model.9850bb97.js','_nuxt/model.98c788a6.js','_nuxt/model.9eaf6957.js','_nuxt/model.a8598565.js','_nuxt/model.d353c7da.js','_nuxt/model.ef0ad944.js','_nuxt/model.ff458695.js','_nuxt/pay-drawer-legacy.59d50e8b.js','_nuxt/pay-drawer.59246325.js','_nuxt/pay-drawer.64366f16.css','_nuxt/pay-legacy.81cd5266.js','_nuxt/pay-legacy.e90a0a4e.js','_nuxt/pay-step-legacy.8e014558.js','_nuxt/pay-step.18af38a0.js','_nuxt/pay-step.pc-legacy.e5c1d6da.js','_nuxt/pay-step.pc.4dbd1b50.js','_nuxt/pay-step.pc.8058bd56.css','_nuxt/pay.1f344d37.js','_nuxt/pay.4bf1bf41.css','_nuxt/pay.9fd2a399.js','_nuxt/pay.cf9e3b84.css','_nuxt/payGoodsListItem-legacy.2e1256d6.js','_nuxt/payGoodsListItem-legacy.b006a599.js','_nuxt/payGoodsListItem.181ac215.js','_nuxt/payGoodsListItem.352dee61.css','_nuxt/payGoodsListItem.72b37f50.css','_nuxt/payGoodsListItem.a5c62e56.js','_nuxt/payMixin-legacy.fd45a170.js','_nuxt/payMixin.af54f940.js','_nuxt/polyfills-legacy.cdd425f8.js','_nuxt/polyfills.9758cb4a.js','_nuxt/public-legacy.56119fc3.js','_nuxt/public.85013075.js','_nuxt/question.63c86aa3.png','_nuxt/question_are.acaa5450.png','_nuxt/question_baloot.44385761.jpg','_nuxt/question_ksa.309f6f36.png','_nuxt/question_ksa_pc.0e758209.png','_nuxt/question_ludo.206e1dfb.png','_nuxt/question_ludo_pc.9675da86.png','_nuxt/recentItemMixin-legacy.0a39224d.js','_nuxt/recentItemMixin.9a735292.js','_nuxt/recharge-item-legacy.be3cef98.js','_nuxt/recharge-item.935b9836.css','_nuxt/recharge-item.dfacd628.js','_nuxt/refresh-modal-legacy.1085059f.js','_nuxt/refresh-modal.56b049f4.js','_nuxt/report-legacy.1350fe31.js','_nuxt/report-legacy.1529ccc6.js','_nuxt/report-legacy.4b3896fe.js','_nuxt/report-legacy.50b4e33b.js','_nuxt/report-legacy.578383c1.js','_nuxt/report-legacy.591d6776.js','_nuxt/report-legacy.5db97abc.js','_nuxt/report-legacy.6018f585.js','_nuxt/report-legacy.6420c5b2.js','_nuxt/report-legacy.6c2266b5.js','_nuxt/report-legacy.6f602ba0.js','_nuxt/report-legacy.7aee21c3.js','_nuxt/report-legacy.99d6bf5e.js','_nuxt/report-legacy.9ce88225.js','_nuxt/report-legacy.9e17e511.js','_nuxt/report-legacy.b964f0c8.js','_nuxt/report-legacy.e1517abb.js','_nuxt/report-legacy.f32e5de4.js','_nuxt/report.07715ece.js','_nuxt/report.097234ab.js','_nuxt/report.0b8a2693.js','_nuxt/report.1a483886.js','_nuxt/report.332f1932.js','_nuxt/report.5632a5b8.js','_nuxt/report.70d51752.js','_nuxt/report.8c0900f2.js','_nuxt/report.919add99.js','_nuxt/report.963efcc3.js','_nuxt/report.b9b39680.js','_nuxt/report.bd25e66a.js','_nuxt/report.c08cdd0c.js','_nuxt/report.c2681801.js','_nuxt/report.cc11e323.js','_nuxt/report.e3207753.js','_nuxt/report.e5ebfd6e.js','_nuxt/report.ff6ad332.js','_nuxt/result-view-legacy.7295ab84.js','_nuxt/result-view.a0b58b31.js','_nuxt/resultModalMixin-legacy.0afa0757.js','_nuxt/resultModalMixin.4aeb43b7.js','_nuxt/safety_check_animation.0a142bd7.gif','_nuxt/search-cell-legacy.1bacdc0e.js','_nuxt/search-cell.01243da6.js','_nuxt/search-cell.0b44601e.css','_nuxt/search-legacy.28a6f598.js','_nuxt/search-modal.pc-legacy.432f2b95.js','_nuxt/search-modal.pc.0981274b.css','_nuxt/search-modal.pc.6aa48e70.js','_nuxt/search-page.mobile-legacy.7b9a6399.js','_nuxt/search-page.mobile.1fa3db58.js','_nuxt/search-page.mobile.6fc89380.css','_nuxt/search.ec263c09.js','_nuxt/share_btn_bg.27658844.png','_nuxt/share_ludo_btn_bg.65b177ab.png','_nuxt/style-legacy.bec7b2b1.js','_nuxt/style.2a26d1c2.css','_nuxt/success.c2d9ba07.png','_nuxt/swiper-bundle-legacy.8a4152fa.js','_nuxt/swiper-bundle.35c6f966.js','_nuxt/swiper-bundle.44a6bf01.css','_nuxt/switch-legacy.912cd5ec.js','_nuxt/switch-legacy.f32ed1ad.js','_nuxt/switch.0deeebdc.js','_nuxt/switch.5e7275d6.css','_nuxt/switch.71976432.css','_nuxt/switch.aa26454a.js','_nuxt/switchMixin-legacy.82ef861c.js','_nuxt/switchMixin.b20d55b7.js','_nuxt/top.7f9b3140.png','_nuxt/txt_youhui.3f1c36de.png','_nuxt/user-info-legacy.074aa207.js','_nuxt/user-info.a92680ae.css','_nuxt/user-info.af4c92c8.js','_nuxt/utilities.appleyPay-legacy.9fb586a5.js','_nuxt/utilities.appleyPay.2b5dad61.js','_nuxt/utils-legacy.2c9c5fcf.js','_nuxt/utils.39d19989.js','_nuxt/visa.69fe00ba.png','_nuxt/vue.f36acd1f-legacy.8549c8c4.js','_nuxt/vue.f36acd1f.1e9f61eb.js','_nuxt/worker-bca16402.js','about_id/question.png','about_id/question_are.png','about_id/question_baloot.jpg','about_id/question_ksa.png','about_id/question_ksa_pc.png','about_id/question_ludo.png','about_id/question_ludo_pc.png','favicon.ico','feedBack/index.html','feedBack/index_mobile/index.html','feedBack/index_pc/index.html','feedBack/model/index.html','feedBack/report/index.html','feedBack-success/index.html','feedBack-success/index_mobile/index.html','feedBack-success/index_pc/index.html','feedBack-success/model/index.html','feedBack-success/report/index.html','fines/bank-views/index.html','fines/channel-view/index.html','fines/index.html','fines/index.mobile/index.html','fines/index.pc/index.html','fines/refresh-modal/index.html','fines/result-view/index.html','gray.js','home/index.html','home/index.mobile/index.html','home/index.pc/index.html','home/mobile/cards/index.html','home/mobile/cards/model/index.html','home/mobile/cards/report/index.html','home/mobile/download-footer/index.html','home/mobile/download-footer/model/index.html','home/mobile/download-footer/report/index.html','home/mobile/index.html','home/mobile/model/index.html','home/mobile/navbar/index.html','home/mobile/navbar/model/index.html','home/mobile/navbar/report/index.html','home/mobile/report/index.html','home/mobile/side-login/index.html','home/mobile/side-login/model/index.html','home/mobile/side-login/report/index.html','home/mobile/tabs/index.html','home/mobile/tabs/model/index.html','home/mobile/tabs/report/index.html','home/pc/container/index.html','home/pc/container/model/index.html','home/pc/container/report/index.html','home/pc/index.html','home/pc/model/index.html','home/pc/report/index.html','index.html','login/index.html','login/index.moble/index.html','login/login.modal.pc/index.html','login/public/index.html','pay/index.html','pay/new-mixins/demo/index.html','pay/new-mixins/enterMixin/index.html','pay/new-mixins/indexMixin/index.html','pay/new-mixins/payMixin/index.html','pay/new-mixins/recentItemMixin/index.html','pay/new-mixins/resultModalMixin/index.html','pay/new-mixins/switchMixin/index.html','pay/new-mobile/account-item/index.html','pay/new-mobile/cvv-tips-modal/index.html','pay/new-mobile/enter/index.html','pay/new-mobile/expire-modal/index.html','pay/new-mobile/index.html','pay/new-mobile/loading/index.html','pay/new-mobile/loading/loading-manager/index.html','pay/new-mobile/paste-board/index.html','pay/new-mobile/pay/index.html','pay/new-mobile/payGoodsListItem/index.html','pay/new-mobile/recently-item/index.html','pay/new-mobile/replace-account/index.html','pay/new-mobile/result-modal/index.html','pay/new-mobile/switch/index.html','pay/new-mobile/unvailable-modal/index.html','pay/new-pc/account-item/index.html','pay/new-pc/cvv-tips-modal/index.html','pay/new-pc/enter/index.html','pay/new-pc/index.html','pay/new-pc/loading/index.html','pay/new-pc/paste-board/index.html','pay/new-pc/pay/index.html','pay/new-pc/payGoodsListItem/index.html','pay/new-pc/recently-item/index.html','pay/new-pc/replace-account/index.html','pay/new-pc/result-modal/index.html','pay/new-pc/switch/index.html','pay/utilities.appleyPay/index.html','recharge/enter/index.html','recharge/enter/index.mobile/index.html','recharge/enter/index.pc/index.html','recharge/enter/model/index.html','recharge/enter/report/index.html','recharge/index.html','recharge/model/index.html','recharge/nav/index.html','recharge/nav/index.mobile/index.html','recharge/nav/index.pc/index.html','recharge/nav/model/index.html','recharge/nav/report/index.html','recharge/pay/cko-card-list/cko-card-list/index.html','recharge/pay/cko-card-list/model/index.html','recharge/pay/cko-cvv/index.html','recharge/pay/cko-cvv/index.pc/index.html','recharge/pay/cko-cvv/model/index.html','recharge/pay/cko-cvv/report/index.html','recharge/pay/cko-expire-modal/error/error/index.html','recharge/pay/cko-expire-modal/error/model/index.html','recharge/pay/cko-expire-modal/expirePopup/index.html','recharge/pay/cko-expire-modal/index.html','recharge/pay/cko-expire-modal/index.pc/index.html','recharge/pay/cko-expire-modal/model/index.html','recharge/pay/cko-frames/frames/index.html','recharge/pay/cko-frames/index.html','recharge/pay/cko-frames/index.pc/index.html','recharge/pay/cko-frames/model/index.html','recharge/pay/cko-frames/report/index.html','recharge/pay/cko-frames/utils/index.html','recharge/pay/cvv-tips-modal/index.html','recharge/pay/home/home/index.html','recharge/pay/home/home.pc/index.html','recharge/pay/home/model/index.html','recharge/pay/pay-channel-item/index.html','recharge/pay/pay-channel-item/model/index.html','recharge/pay/pay-channel-item/report/index.html','recharge/pay/pay-drawer/index.html','recharge/pay/pay-drawer/model/index.html','recharge/pay/pay-drawer/pay-drawer/index.html','recharge/pay/pay-drawer/pay-step.pc/index.html','recharge/pay/pay-result-modal/index.html','recharge/pay/pay-result-modal/model/index.html','recharge/pay/pay-result-modal/popupInfo/index.html','recharge/pay/pay-result-modal/report/index.html','recharge/pay/popup-exit-confirm/index.html','recharge/pay/popup-exit-confirm/model/index.html','recharge/pay/recently-item/index.html','recharge/pay/recently-item/model/index.html','recharge/pay/recently-item/report/index.html','recharge/pay/recharge-item/model/index.html','recharge/pay/recharge-item/recharge-item/index.html','recharge/pay/recharge-list/index.html','recharge/pay/recharge-list/model/index.html','recharge/pay/recharge-recommend-list/index.html','recharge/pay/recharge-recommend-list/model/index.html','recharge/pay/recharge-remember-list/index.html','recharge/pay/recharge-remember-list/model/index.html','recharge/pay/user-info/model/index.html','recharge/pay/user-info/user-info/index.html','recharge/report/index.html','recharge/switch/index.html','recharge/switch/search/model/index.html','recharge/switch/search/model-cell/index.html','recharge/switch/search/search/index.html','recharge/switch/search/search-cell/index.html','recharge/switch/search/search-modal.pc/index.html','recharge/switch/search/search-page.mobile/index.html','sawa_logo.ico','sensorsdata.min.js','share-landing/api/index.html','share-landing/index.html','share-landing/init/index.html','share.html','test/index.html','test/model/index.html','test/report/index.html']))
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
      console.log('service worker', '1.0.290', event.request, event.request.url)
      event.respondWith(networkFirst(event))
    } else {
      event.respondWith(cacheFirst(event))
    }
  }
})



