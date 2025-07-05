'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "89f39d6e99a4576460d138499f7c397b",
"/": "89f39d6e99a4576460d138499f7c397b",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"version.json": "ea8108c94ff6155cdd79f497e46c9499",
"main.dart.js": "dd162e7a6a6eb79b8986889d07542627",
"flutter_bootstrap.js": "1c14cf16fec0357f1ad299a0cbce44e6",
".github/workflows/deploy.yml": "584c06e3c38718f93fe31d85836bdbd0",
"assets/fonts/MaterialIcons-Regular.otf": "30601fa80096dacf775e6a7f3126a418",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "4c261219ff1f7130504cc3c33b798c31",
"assets/assets/svg/logo.svg": "73987fec8f1a495683638a556691531d",
"assets/assets/svg/back.svg": "674ef62d96a81b76581e6a967508acc0",
"assets/AssetManifest.json": "cdff1ae0a58af4b41f9035c82a64df19",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "73d65eb786eff1f4bb42a18428c32c77",
"assets/AssetManifest.bin.json": "69a2c47d1a598b7d68d2fd47555f07a0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "f9b7e41222775046ab4947ba3bb8fc07",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/master": "433f01926a91f3b2f1aed0929b78cd34",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/heads/master": "433f01926a91f3b2f1aed0929b78cd34",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/objects/60/d08007d23c6998f2487750ba90920cda19dc9d": "723fb9224475dd66bd94dca4e60d1197",
".git/objects/d8/3c0dbab033971bdc864267ef0146460ca993a3": "c501d0d162dda1672e5fd6a881a3dff2",
".git/objects/7f/5716175768a2aec6c73ac2234a4703cad2637b": "eabbb5c57aa7e5542c2effd19f23ad61",
".git/objects/0a/edfa73afbb38bb6e0bd2ee2dc45538cb37c931": "d5a5fca140fcf90dec2254a5cf94ba3d",
".git/objects/44/8f0804d7e30f76590bde168e45ba30d6114945": "6cfc6425b4ce0bd71795a633949fca54",
".git/objects/58/c30f7e956f7f11c5fefe5aa46d172074341640": "bce5ee8c41b1d1c020c4b00ae3a25ed5",
".git/objects/ad/0ff3157e5ec80becf6419c3a822d4cc3813826": "035ac1d9bec3f7759fdfa1355c271acb",
".git/objects/eb/09380c811473b03f15668f8793e1d547f1277c": "a1c4548e2a4e42a675ce660f12b5fdcf",
".git/objects/e1/ecfc1dfe388bccfe3d11a6075ef9dd640afbf3": "505bed714f20c3184d35746eb9780aba",
".git/objects/a1/7b23849017bd43a935755f19716173e3505b51": "dec2029aa14f3a1ac38575ee1c582c3c",
".git/objects/17/b9ce2f02c6e931de765247b508dd779a918c90": "9d346867269c3794b7c1fa214a08d6ca",
".git/objects/94/ec66b1ed89d7b27032c2841f40c4c43935229e": "7ae07e0f492a51a60f4432c699843f7d",
".git/objects/92/15709af25bca1e9f2ea000983a47fbf179f700": "ae60446a9673090c4eec8d68552a330b",
".git/objects/71/1e797c34be0ce2dcee14a5974bbca436771d82": "2919f83c4cb6a56718276012971571ee",
".git/objects/cb/fd3d9e0c82034a4cdb4105154dfffc81576d5b": "17926749927e81359a3b92c00429c585",
".git/objects/c3/b4b37973b6360d7ed8aae70cebb9fc97d5ded2": "4713c5364c7a0e9bd32c94a34d57b9e7",
".git/objects/7c/c0719d34dfe8984df6a4a92041a5161b34c6d9": "0cb6626284d2d3407d8e308b7960cd41",
".git/objects/88/49812dc228efb56a6edad1274eb2b8789c0418": "8a8657d07cdceecb79336e6892e85bc2",
".git/objects/88/63acbadde16b69e614bc06f8cad28ea509c608": "c688dcec9f29aa05d885b9d8c54488b9",
".git/objects/35/b76099c4f1b65e111f3804456718807a2b4b63": "3e93d07ebb85825c7a837bfb5bc7fd1b",
".git/objects/97/67fedd20b2b7c181c3ae21ee1a0e1ee486fe45": "7095303350adf5b98ed854216d5873d7",
".git/objects/c9/9c05947f66ebb01ba693deb7a002f9c17e7db5": "095eda210f42cc129028a7c4d7faea03",
".git/objects/9e/0b2a6378e7653277c156898dbbeb8491947e99": "68059b7790c3b226dccf420bf7b0dfb1",
".git/objects/9c/fd401a2a1b93101f6b1e51f9bc5419f5d68f11": "757fafc539c2360bd796596f924e4c74",
".git/objects/f0/2e5939901c574f59c660ba4a9c966ff17b54d1": "06969276d54b01a6f31e4913620f2e06",
".git/objects/pack/pack-60eb20bc0450349f82efd7937767e02aeb9ea4b1.pack": "7485ae909699b312898aa1e1d874fc07",
".git/objects/pack/pack-78f46939767f605dae430a83170e22e86d33d46e.rev": "fe8d8b1533649ef77293780235c61a08",
".git/objects/pack/pack-60eb20bc0450349f82efd7937767e02aeb9ea4b1.rev": "58f0a32952345eef3eca4a67f773852d",
".git/objects/pack/pack-78f46939767f605dae430a83170e22e86d33d46e.idx": "509d8ecbaae8a8aa41adaaaa181cf690",
".git/objects/pack/pack-78f46939767f605dae430a83170e22e86d33d46e.pack": "d1a63e829dbc136d071da5c3cf6e5f00",
".git/objects/pack/pack-60eb20bc0450349f82efd7937767e02aeb9ea4b1.idx": "c2249fd60732690c825948abe1079aee",
".git/objects/ae/e1f958066ecbea20a837e2ab4e0896d7cf71b0": "7baf5c326f8c6d323c1aecccf74a2b56",
".git/objects/5d/818deb54ab0966dadbc6bec4c7a42fd39c5ec7": "df7429c809c13241820a23a79912c3be",
".git/objects/4a/bf4b0a694e911235d4720f379c6a5f1430664c": "24d550a79dc3a92437121dc801ce6dfd",
".git/objects/45/01b1b7527bad8b44872bd9219b55b7052610ab": "667114cedb37c48efe4beb6a5cff42b9",
".git/objects/37/da76ce780dab6818c63f263eef4accef541e68": "414e510bc2fb69cc63a701ba6b1f122f",
".git/objects/93/dbc8ef758bd76363fa3c31748651b59fa86753": "e117d0735dc3c264e2dd0567bf992b3c",
".git/objects/cc/3fbe25c5f05db3859119010e47026b68639bb2": "21c496113d0b5d26238a205c5854e612",
".git/index": "01f54c96d90a906edc6e6f1857b8ed7a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/master": "09a8cbcfe88c9b74be974e062557b8c9",
".git/logs/refs/remotes/origin/HEAD": "6f3e83920b76fefb0b1b66bd6c52f12c",
".git/logs/refs/heads/master": "7d2255bdc2d2d888b81e8d4715ac2960",
".git/logs/HEAD": "7d2255bdc2d2d888b81e8d4715ac2960",
".git/packed-refs": "5a21f386bcd01c8673ada35df565b8f4",
".git/config": "263cab72a96913ef98b4e124b01e2f62",
".git/FETCH_HEAD": "5f30895043ed7df994d39ec060257f88",
".git/ORIG_HEAD": "433f01926a91f3b2f1aed0929b78cd34",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58"};
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
