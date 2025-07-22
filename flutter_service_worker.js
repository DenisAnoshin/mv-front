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
"app-release.apk": "5b270494979cef9e026021c690c1fb51",
"version.json": "ea8108c94ff6155cdd79f497e46c9499",
"main.dart.js": "47dfdaba0a5c5cb19786e93665751994",
"flutter_bootstrap.js": "54a96f4a9492ca328fa653e84e498d4a",
".github/workflows/deploy.yml": "584c06e3c38718f93fe31d85836bdbd0",
"assets/fonts/MaterialIcons-Regular.otf": "d897445dead66682e13a7ccfed86748f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "4c261219ff1f7130504cc3c33b798c31",
"assets/assets/svg/logo.svg": "73987fec8f1a495683638a556691531d",
"assets/assets/svg/back.svg": "674ef62d96a81b76581e6a967508acc0",
"assets/AssetManifest.json": "cdff1ae0a58af4b41f9035c82a64df19",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "e1b0c2ad41aab10df967ca01d521c0e4",
"assets/AssetManifest.bin.json": "69a2c47d1a598b7d68d2fd47555f07a0",
"favicon.png": "bdccb3de480c236e128cbeec29e70116",
"manifest.json": "f9b7e41222775046ab4947ba3bb8fc07",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/master": "2f6d55e1248c49856e4a2d22d18e192d",
".git/refs/remotes/origin/main": "0c206737186b53cda7077d8976bc4ccf",
".git/refs/heads/master": "2f6d55e1248c49856e4a2d22d18e192d",
".git/refs/heads/main": "d52a8061a6e960827805a7c2164b155a",
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
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/objects/db/795398f755c488b13b495aa60f333efbc35e13": "8bc8d98558eb85a570f96e60279b503e",
".git/objects/15/642586cf9fc92e3bef82420a645875c402a1d2": "5ad782b1985459a4abecd5f9ff30e370",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/02/8c86ae81facbf0c95ef6ad9e8fe0c86f3c90c0": "fa2f381bf97999b98f394e1552b0cc76",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/a2/9e0005fb8cc451f6d38a8d1441124de029bc35": "bec8057ebb6a0cfa702a7c77adfffef5",
".git/objects/f4/2298ad079eb08caa7d2249208b0da4bd74e53f": "fe6e3941e791cc5fbab2953fc004d00f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/8c/254d91128bd4fd34ec4d43b72625b74efdbdb2": "1578de30e15993763b69730ee7a99a0a",
".git/objects/a5/169f38b1531127ee7743ce086c025e87f113f2": "2b906c71cb4a07b48526bd1ff427abcd",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/b7/8fd1fe6ea917725fb1c122fea2b04979d75435": "94cd27fc00c6c2695a3ae4b403efa8cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/6e/b0919ace78b490da9bfc229ecdbaf3ca61ab66": "b2dbeb682f7763db9ac6e190664cd0d2",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/32/0cfd24bdf666fd65248901cab6a1f37f40bee5": "80c2e95eff0b3b6be4a160d502f36941",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/6b/c10df89e2fc296d76db28b2b9700f04e3d72c4": "ac887fe680eb36ffed7b6723c5442e23",
".git/objects/6a/46618899d254b3b43c7bc5866be04b3721c9d8": "c0522b515d7309d5388ecc4c9e9e8aa5",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/84/bd31a0f0bdf0f8cf4bc780d1b92fbd9a66dc3e": "364c795a157baec1e65bcc2e94211630",
".git/objects/a0/4827be110b170701a67ddb82246280790a480a": "744fb488c70c9594b046d6a5d870ffd3",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/01/119b0a319b3b6e534100dedbe30b5f543f3f75": "f6461ed03da02913bfe4c4e5f7ee5c8e",
".git/objects/pack/pack-690a6e834f7de545171de5d0cedb83c19a658c9f.pack": "eb3958a05e18d2474df83f4703ef1b15",
".git/objects/pack/pack-690a6e834f7de545171de5d0cedb83c19a658c9f.rev": "25b9dc1dc286582c30e66f422f0ad3b9",
".git/objects/pack/pack-690a6e834f7de545171de5d0cedb83c19a658c9f.idx": "a1917742cd644faf66dc9eda59d0feb3",
".git/objects/36/8c65d4dacaec85327c531879dece48b65edd18": "1e01597fdb95bef292d4b47253ed01c0",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/31/7f19eb2f3976edee4b206ca51946d8edba8d5b": "15bf010600b994210ee7ff5dd9b16f41",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/2c/176855ddc42234beb75e3b21067510fe7554d8": "1d59e659f971c0f71fec9bab86a62d9e",
".git/objects/ba/ac89bd1b604ca1946db6543b65c30033c7228f": "60cb7ecd0b4d54641ba99afc2c6409bc",
".git/objects/19/90529991b4bda0831ef0dde8c6f41bf12b0909": "f8110a3c8da7dfe6b8ce392950565e89",
".git/objects/5c/e4aa88b0cebcdd0de73ba5adc5fcb553915ea9": "075a155f42ab47f9b557413c26f940dc",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/index": "12e321aa9abef1ee4b821b9cc9a09b15",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/master": "0af448779d25603db666e64cf107ce59",
".git/logs/refs/remotes/origin/main": "6a0484efa9bc22863fd3f4df96259c97",
".git/logs/refs/heads/master": "750ab4a9b672c09bbdeae4f82d8a5da9",
".git/logs/refs/heads/main": "0578279daf8e9c226900ac24122323b1",
".git/logs/HEAD": "b1e94224c3d2090cbb5c38c417a9ad95",
".git/config": "263cab72a96913ef98b4e124b01e2f62",
".git/FETCH_HEAD": "1485e5e8c5c35b6c5c39c3cfd320998f",
".git/ORIG_HEAD": "2f6d55e1248c49856e4a2d22d18e192d",
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
