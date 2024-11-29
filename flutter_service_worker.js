'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1cce98815b4d52486433fbd311fe0270",
"assets/AssetManifest.bin.json": "98c18e3bf35e33b4c7ddc35ec7254d58",
"assets/AssetManifest.json": "25fa98c39f039372d33bb089162627bd",
"assets/assets/icons/8yo_hours.svg": "831f9f04e8dfaaa059076ca33704a747",
"assets/assets/icons/design.svg": "e57284cfc0f6bc05191804ed54d82e07",
"assets/assets/icons/devis.png": "8fc44f1d85f2abcaf9ed8c332f88a783",
"assets/assets/icons/HoueEye.png": "64b9167ed3d4ea73c994b511b8ae46fe",
"assets/assets/icons/livingroom.png": "949bfa19d9bc2b4aaca89f49bda32245",
"assets/assets/icons/profession_builder.svg": "7136aa2bb1d92c9429cf0ba39a9ae6fe",
"assets/assets/icons/social/icons8-behance50.svg": "97abd3cb5d1e5dc967b5201e1ab3b51b",
"assets/assets/icons/social/icons8-facebook50.svg": "73a5537d372545eea219594a3391d63b",
"assets/assets/icons/social/icons8-instagram50.svg": "b337394d7550580ff62835199cf86612",
"assets/assets/icons/social/icons8-tiktok50.svg": "791351dead74c5d66e952dfdc95c9bb8",
"assets/assets/icons/social/icons8-whatsapp50.svg": "b54242db5524d9985848cfedb627e1d8",
"assets/assets/icons/stackk.png": "ca3c4bd8b8a976d87835ffebd51539f6",
"assets/assets/icons/tilda%2520icons/14ht_bath.svg": "585694ecab5c49ced8faf8bfea5d5dfe",
"assets/assets/icons/tilda%2520icons/15re_leaf.svg": "2a468fafe43c8b915427d0e8eeb1b576",
"assets/assets/icons/tilda%2520icons/1ed_lightbulb_14.svg": "b565867ec9ce8cd014e6b9fdaf7e0c59",
"assets/assets/icons/tilda%2520icons/3st_van.svg": "229cf4dee901fa72665d4f37e6b5e0b6",
"assets/assets/icons/tilda%2520icons/cowork_kitchen.svg": "1f2a4c1ead5fe3c4e3ee4b226a92f20e",
"assets/assets/icons/tilda%2520icons/cowork_mac.svg": "f15e9361f0d0e0f27ed31f3c880ca31f",
"assets/assets/icons/tilda%2520icons/design.svg": "374c2d3763b39b553b8c79308d422fda",
"assets/assets/icons/tilda%2520icons/design2.svg": "e57284cfc0f6bc05191804ed54d82e07",
"assets/assets/icons/tilda%2520icons/kideducate_computer.svg": "7598d30535091bc4109bedf5a7bcfcc5",
"assets/assets/icons/tilda%2520icons/measurements.svg": "eb98d9f5f46614be6fbf0fa115e972a2",
"assets/assets/icons/tilda%2520icons/online_store.svg": "de944020c86fdef23aa21a20e49255cf",
"assets/assets/icons/tilda%2520icons/re_helmet.svg": "b9e6c76e79adb5c84ad50faf00e65134",
"assets/assets/icons/tilda%2520icons/Tilda_Icons_28_law_consulting.svg": "d8cbef42765f6f0587256f39916feb00",
"assets/assets/icons/tilda%2520icons/Tilda_Icons_28_tattoo_paint.svg": "0d638f18993edd9de6df31e71e250b14",
"assets/assets/icons/tilda%2520icons/Tilda_Icons_33_interior_couch.svg": "ef8b1fd155708101ba6703a2497284ab",
"assets/assets/icons/tilda%2520icons/Tilda_Icons_33_interior_design.svg": "ce69e98da20bd443d116c427032207fd",
"assets/assets/icons/tilda%2520icons/Tilda_Icons_33_interior_list.svg": "b78c2d124960616aebed77f634f8d00a",
"assets/assets/icons/tilda%2520icons/Tilda_Icons_33_interior_wardrobe.svg": "ba9fae30216a4242daca2afd72cf6755",
"assets/assets/icons/tilda%2520icons/Tilda_Icons_39_IT_design.svg": "dc674695d518d6021635bc67365ccf41",
"assets/assets/icons/tilda%2520icons/Tilda_Icons_40_Printery_calendar.svg": "1c431d0ccef397432a7deba06d3d31bc",
"assets/assets/icons/tilda%2520icons/Tilda_Icons_42_restaurant_furniture.svg": "90fa44965a0706f4ca0d48d8b79b094d",
"assets/assets/icons/tilda%2520icons/tile.svg": "99bf80264dca0b25d28a46fa4c0d1757",
"assets/assets/icons/tilda%2520icons/touragency_group.svg": "902eed3fb8e1d767e62792ff86fa078f",
"assets/assets/icons/touragency_group.svg": "902eed3fb8e1d767e62792ff86fa078f",
"assets/assets/icons/vr-goggles.png": "c18e8c29594377f91a1d6e02de6b0a58",
"assets/assets/images/ArrowBox.jpg": "b06c183c38bf0f59bcd05a0aee067b8a",
"assets/assets/images/black%2520images/blackbedroom.jpg": "c432680e9c91aa2a924cb6f927f884cc",
"assets/assets/images/black%2520images/blacklivingroom.jpg": "ba873817b9dfe1f37dd5b408e13668d9",
"assets/assets/images/black%2520images/blacklivingroom2.jpg": "09251ca1e7a05cde325909a89f98af36",
"assets/assets/images/black%2520images/cam%252006.jpg": "a3fbae9c68fee54fa81fe793508d3686",
"assets/assets/images/black%2520images/dinning%2520&%2520living.png": "cc56d9d35bc61ff898e51245d6abb62c",
"assets/assets/images/black%2520images/kitcheniha.jpg": "3ac01b7f02494c90d1e75e98b72561ec",
"assets/assets/images/black%2520images/living%2520room%2520chair.png": "961701487700d61ed7ddf13e3871f6ba",
"assets/assets/images/Construction%2520costs-bro.svg": "39a2eb4908498e3b44aa95310dde1139",
"assets/assets/images/Hidden%2520person-bro.svg": "154934d56b733e5ef41862698415fd32",
"assets/assets/images/Logo/DCEENY.png": "36383df56db3c1f592d8b457e22b8f91",
"assets/assets/images/Logo/DCEENYrec.png": "4823feeb8a64b3749c17e1e2f8ab2e5f",
"assets/assets/images/people/haithem.jpg": "d5c943f81934d92f2f5f55778eaa79a2",
"assets/assets/images/people/ilyes.jpg": "0fb95f693b8d5edeefe879dd0177df34",
"assets/assets/images/people/raouf.jpg": "b353df356fcd8df937fc6393035fc51a",
"assets/assets/images/people/rostom.jpg": "3e8bdeb659b1e382b8034b551f82c94e",
"assets/assets/images/people/youcef.jpg": "10310e1468203833d54093e07053b39d",
"assets/assets/images/privateprojects/br1/Cam1.jpg": "fce6d063d840bd865f59ef9273e5be76",
"assets/assets/images/privateprojects/br1/Cam2.jpg": "61195ce7f4ca9be4b5442d91989717cd",
"assets/assets/images/privateprojects/br1/Cam3.jpg": "297862b5cec5c26faf4fde7007e06e51",
"assets/assets/images/privateprojects/br1/Cam4.jpg": "6f5e8376bed951748ac631948948c65a",
"assets/assets/images/privateprojects/br1/Cam5.jpg": "0c856f70ce9731d597c1bf1b02ef6673",
"assets/assets/images/privateprojects/br1/Cam6.jpg": "90cad57741501844949abfd07a765800",
"assets/assets/images/privateprojects/br1/Cam7.jpg": "9826984bdd2a896308bcaf66f360f681",
"assets/assets/images/privateprojects/hamlakitchen/cam%25201.jpg": "1e579703edc4a977f270ebfe7c51722c",
"assets/assets/images/privateprojects/hamlakitchen/cam%25202.jpg": "c30fb1ef824717f57e313cf3ce64fda0",
"assets/assets/images/privateprojects/hamlakitchen/cam%25203%25202.jpg": "d9d8a1b79d0d6bbc8d17fd38d1585946",
"assets/assets/images/privateprojects/hamlakitchen/cam%25203.jpg": "7ed81a1dbc588cbff5483047a738bc40",
"assets/assets/images/privateprojects/hamlakitchen/cam%25204%2520+%25205.jpg": "bbb0e3da7dcdb78edb76ba0dd6a49b01",
"assets/assets/images/privateprojects/hamlakitchen/perspective.jpg": "f9773e242f39d89a7446a6d0cf26be74",
"assets/assets/images/privateprojects/p1/cam%25201.jpg": "ccedefabe157e0525ba203c6a6a30923",
"assets/assets/images/privateprojects/p1/cam%252010.jpg": "5044557cf0272107390d05168e7abd49",
"assets/assets/images/privateprojects/p1/cam%25202.jpg": "92fbee9ca635e5ef0f76ad568bfbcea0",
"assets/assets/images/privateprojects/p1/cam%25203.jpg": "a248ec9c28a9c5b1889b8791e7453295",
"assets/assets/images/privateprojects/p1/cam%25204.jpg": "221c283cc3a3c29edab47bb5929851e9",
"assets/assets/images/privateprojects/p1/cam%25205.jpg": "beea8cbac30da3ca98092c2819a1c322",
"assets/assets/images/privateprojects/p1/cam%25206.jpg": "d91b24dedf59f5482f10a1b6d3a48bd6",
"assets/assets/images/privateprojects/p1/cam%25207.jpg": "a17159c434e00ab7cbfa2e6e87b96f25",
"assets/assets/images/privateprojects/p1/cam%25208.jpg": "e0417c795330c5f79e176f9934b42cf1",
"assets/assets/images/privateprojects/p1/cam%25209.jpg": "9f08bfd17be7b07d1a272f2079fa9567",
"assets/assets/images/privateprojects/tamechit/1.jpg": "71e3af6b741a7fb850663e08f325ee7f",
"assets/assets/images/privateprojects/tamechit/10.jpg": "93cf75202bd1e09fff921749403afcac",
"assets/assets/images/privateprojects/tamechit/11.jpg": "102ce11c71d5ed8ee7210c520a533dae",
"assets/assets/images/privateprojects/tamechit/12.jpg": "d95f0707d0b30bf2079d27687d8ef99b",
"assets/assets/images/privateprojects/tamechit/2.jpg": "ae05a410841099c999645547f631e4f8",
"assets/assets/images/privateprojects/tamechit/3.jpg": "6e07de5c5f995aa36c20d9f82d43b8a1",
"assets/assets/images/privateprojects/tamechit/4.jpg": "833e5dbe4bf91d279814537dd1c4c75e",
"assets/assets/images/privateprojects/tamechit/5.jpg": "edc736a847c1976679c3a05adede3cd0",
"assets/assets/images/privateprojects/tamechit/6.jpg": "4eb3dc664c80f33f9aaeb3bfe885010d",
"assets/assets/images/privateprojects/tamechit/7.jpg": "73ba77a9b8a484be0c7b29afb55edbad",
"assets/assets/images/privateprojects/tamechit/8.jpg": "90327c0ecf499d3b0a3573ffc46a53c1",
"assets/assets/images/privateprojects/tamechit/9.jpg": "04e1dea697d2547971400b872f1945f8",
"assets/assets/images/privateprojects/tazoult/cam%2520001.jpg": "9046569ef40bac318e2a328e1cd56dac",
"assets/assets/images/privateprojects/tazoult/cam%2520002.jpg": "9d2503e2369f7a9ad4efc36d1aabc186",
"assets/assets/images/privateprojects/tazoult/cam%2520003.jpg": "419477d061ef8950c8980ab74446d2ca",
"assets/assets/images/privateprojects/tazoult/cam%2520004.jpg": "406d70a1934c3b59caf0f7c0c61c5e62",
"assets/assets/images/privateprojects/tazoult/cam%2520005.jpg": "5e159b1ecea8b6c27814b7043aed7ba9",
"assets/assets/images/privateprojects/tazoult/cam%2520006.jpg": "481ab38e46e2a7fc21c8b4acf395c51d",
"assets/assets/images/privateprojects/tazoult/cam%2520007.jpg": "1da515ce4bd3b61619a506d6c2e2116f",
"assets/assets/images/privateprojects/tazoult/cam%2520008.jpg": "f781030b0b041dd1b53f9f142a847084",
"assets/assets/images/privateprojects/tazoult/cam%2520009.jpg": "27600d53e40ec04f2adb0475a3f70cfd",
"assets/assets/images/privateprojects/tazoult/cam%2520010.jpg": "663dcde2ec9f2f057979f9eb5a1e2a7d",
"assets/assets/images/publicprojects/agence/bd1.jpg": "923d566ee33028e126b8f13a8f1b9079",
"assets/assets/images/publicprojects/agence/bd2.jpg": "c1bc88b2b85f4bb6759119724cbfe5eb",
"assets/assets/images/publicprojects/agence/bd3.jpg": "503d119fbf3332df4a7a9664444a49c5",
"assets/assets/images/publicprojects/agence/bd4.jpg": "2645b19af16a2bc4504ae8af93711c04",
"assets/assets/images/publicprojects/agence/bd5.jpg": "217a29f1e96d41e84eb17f5333766e99",
"assets/assets/images/publicprojects/agence/bs1.jpg": "96543da61680ec666b89978839d09ab0",
"assets/assets/images/publicprojects/agence/bs2.jpg": "3a49d4775ee35445e70710ae4ce0466f",
"assets/assets/images/publicprojects/agence/rdc1.jpg": "d806aee8451c7960aa350f9b9268378a",
"assets/assets/images/publicprojects/agence/rdc10.jpg": "79fd38094100c87aea8d1084686f9e71",
"assets/assets/images/publicprojects/agence/rdc11.jpg": "a8b200b913042be26abda5d0c886cedf",
"assets/assets/images/publicprojects/agence/rdc2.jpg": "8221f209cca35904a1512d0664672398",
"assets/assets/images/publicprojects/agence/rdc3.jpg": "b3f80a288c37368e70f30eadacef5945",
"assets/assets/images/publicprojects/agence/rdc4.jpg": "79a73b144bc859eb4ac7017d82b49d68",
"assets/assets/images/publicprojects/agence/rdc5.jpg": "463764f621edc766fa0244bbb687fac3",
"assets/assets/images/publicprojects/agence/rdc6.jpg": "3ffb02f9293a1ed1429a9019cba001f4",
"assets/assets/images/publicprojects/agence/rdc7.jpg": "e48838451e646e3951b8530122959c9c",
"assets/assets/images/publicprojects/agence/rdc8.jpg": "c7d7e6422635cd787c89f4b8bec0bd82",
"assets/assets/images/publicprojects/agence/rdc9.jpg": "a37038b6c2428de708db956c04ccb705",
"assets/assets/images/publicprojects/agence/sd1.jpg": "349b1ad45fb652138676b6ddbe6fd509",
"assets/assets/images/publicprojects/agence/sd2.jpg": "fa65c03411764721fccada1e179ae27a",
"assets/assets/images/Solid_grey.svg": "22c763a7dafbc47c4f5b8ffa68aedb08",
"assets/FontManifest.json": "a4fff489db897bf7a0b50d1d8c2aa5eb",
"assets/fonts/DMSans/DMSans-Black.ttf": "33a429d13f9321057985bb638e3bd9d4",
"assets/fonts/DMSans/DMSans-Bold.ttf": "9def97569c21a2e08c818845776c4f21",
"assets/fonts/DMSans/DMSans-ExtraBold.ttf": "071dbbd501771bca496f28449cc2024c",
"assets/fonts/DMSans/DMSans-ExtraLight.ttf": "00cd6563cc997d9767f5d7329a183075",
"assets/fonts/DMSans/DMSans-Light.ttf": "737e8e7b386545e9636f14b1678e9d82",
"assets/fonts/DMSans/DMSans-Medium.ttf": "2dd767322ccc760c0c31d6a900b9d3b2",
"assets/fonts/DMSans/DMSans-Regular.ttf": "916f3ae325c2bcd71bec9b469c6a6aa0",
"assets/fonts/DMSans/DMSans-SemiBold.ttf": "b475f362cd4f51d0bb56cb036c86ef73",
"assets/fonts/DMSans/DMSans-Thin.ttf": "3d8bd9931375bff65eed852ce7c56a02",
"assets/fonts/kufi/NotoKufiArabic-Black.ttf": "5bff81dd470cb3a2d8da3c41b7d96953",
"assets/fonts/kufi/NotoKufiArabic-Bold.ttf": "34886bd59d48cf9113e1e9386bee615e",
"assets/fonts/kufi/NotoKufiArabic-ExtraBold.ttf": "4db4bdb3112335745b2667d7dff2f8dd",
"assets/fonts/kufi/NotoKufiArabic-ExtraLight.ttf": "3f551ee155df31dda67c1ce1bd06bb09",
"assets/fonts/kufi/NotoKufiArabic-Light.ttf": "23517c64b528b3c744bfb3be94e58836",
"assets/fonts/kufi/NotoKufiArabic-Medium.ttf": "0ac496d1b4dfec61defc0488ddc8f9dd",
"assets/fonts/kufi/NotoKufiArabic-Regular.ttf": "600b529eb4849a54dde020e3ea389de2",
"assets/fonts/kufi/NotoKufiArabic-SemiBold.ttf": "2cc825f4e5161acaa6fcef6c011129eb",
"assets/fonts/kufi/NotoKufiArabic-Thin.ttf": "94a871f738e42e4574ceca4a175d8d77",
"assets/fonts/lato/Lato-Regular.ttf": "3b9b99039cc0a98dd50c3cbfac57ccb2",
"assets/fonts/MaterialIcons-Regular.otf": "2e00cf072638db3c42f4bd1164174bb3",
"assets/NOTICES": "ec579f0ec47187533262352d442ae6b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "b8b61b2fa90fcddac806dfc7a00c7fd0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c91a63dc3cf2504fd0e4f0d04b9da9d4",
"icons/Icon-192.png": "c6eb9e5204e0054a9eeee29681530e77",
"icons/Icon-512.png": "7ad418250aa4efe7c08abd7d3d8bfe1f",
"icons/Icon-maskable-192.png": "183d0866651db99a2b9813ee168f1e27",
"icons/Icon-maskable-512.png": "5edc37a295f785628a4dfe2f07fc35ee",
"index.html": "b275eefe54ea86afa8fab4b784d6fff5",
"/": "b275eefe54ea86afa8fab4b784d6fff5",
"main.dart.js": "0cd320a3acf32e6890e412c228840c96",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
