'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/logs/refs/remotes/origin/main": "2825c305d5cbfad853b2c2e5036de93b",
".git/logs/refs/remotes/origin/master": "dadcb1c234cddde731ad8df34bca22b9",
".git/logs/refs/heads/main": "952b04fee5d3bfd92bf1cc491696444a",
".git/logs/refs/heads/master": "1a9df1fac838fc5d850618767707de74",
".git/logs/HEAD": "167832f0a4a3aa40aec4d08e0a44bcb2",
".git/FETCH_HEAD": "af1407109ddb44599fe82345b63583c1",
".git/config": "e5f92ef84b91d7683c5a6b613a6bc37b",
".git/ORIG_HEAD": "696415cafb66a736ad99c3d42e871543",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/main": "0c206737186b53cda7077d8976bc4ccf",
".git/refs/remotes/origin/master": "696415cafb66a736ad99c3d42e871543",
".git/refs/heads/main": "0c206737186b53cda7077d8976bc4ccf",
".git/refs/heads/master": "696415cafb66a736ad99c3d42e871543",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b4/3cac336925df23f4e65bcb474faf96badcbe62": "887832a9356446a93dd997c3216655f1",
".git/objects/01/119b0a319b3b6e534100dedbe30b5f543f3f75": "f6461ed03da02913bfe4c4e5f7ee5c8e",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/5d/809543d37e4ff543eb8079d76c51f642355be7": "5a68ad42dc035589e5e427c2c3efbcc7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/12cd788d80ae1ba805dce689bd5919f87b62e7": "7c6440e4e5fc69416863af2f91fbb023",
".git/objects/b7/8fd1fe6ea917725fb1c122fea2b04979d75435": "94cd27fc00c6c2695a3ae4b403efa8cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f0/7ede7e7a5c96cc61b0e8b850ca1ae08ac6e897": "b66d4fdca20b746291971612eb378891",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5b/863859bd6bfaa2cebd9bd50b4a1099d691f9c7": "d56c755560b467a03c140d4df5a10d4c",
".git/objects/69/f4524b43b99461dff5e63c0252a83648d50b17": "d265650a8ebadec43fa01b8a6e91503c",
".git/objects/6e/371156419b8d9f3cf3870df7a87e276e685a07": "2029c3dd93b902180a8576266eb2f151",
".git/objects/pack/pack-726bb284746a51d471c1ffd61db77eac54387f52.idx": "32eeeeb123d06967123953aba256aa9f",
".git/objects/pack/pack-726bb284746a51d471c1ffd61db77eac54387f52.pack": "a02776e661a350525b13e7be0acafead",
".git/objects/19/90529991b4bda0831ef0dde8c6f41bf12b0909": "f8110a3c8da7dfe6b8ce392950565e89",
".git/objects/45/70a0090ae45d8d90a13d382e649a9c59017ed1": "7ad292b4dac27ed9eade7281dd3f7dc0",
".git/objects/cd/45218884f699226cbd1f748f787e5d406fb54f": "c20cf15a4bbedc9db305eb965062f661",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f4/4a41a4ac1cdbce798ada28531643d75e8fa975": "7d623cc385c46058cb48ecf8f9c5135e",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6efc010f41f788531395ab6b91665fd6513cb6": "0d10cc97314f8c55f17b6828518e5e48",
".git/objects/8c/254d91128bd4fd34ec4d43b72625b74efdbdb2": "1578de30e15993763b69730ee7a99a0a",
".git/objects/58/262115335a9e18e436961536f766e33e1d838c": "244b786512fbe7c3178d7a71d52ac812",
".git/objects/37/50386c066a5f99eaef9e7654cf35224ec40e21": "0bc30ed7db4f99f45543191c08edfc38",
".git/objects/15/642586cf9fc92e3bef82420a645875c402a1d2": "5ad782b1985459a4abecd5f9ff30e370",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/c6/910195f59cbbfcfa7e0d22376c24e8ab47b6df": "6f2113f1e771e5a1d044da770142c705",
".git/objects/e5/549eb2e74505a3af2cadb9892f65620338d5a6": "bc3534ec9a61b5383a6ebeb51d28015f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/6a/46618899d254b3b43c7bc5866be04b3721c9d8": "c0522b515d7309d5388ecc4c9e9e8aa5",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/7b/c3aac185a383e81f3c8fd6f3d9c1fce4d2e5e8": "ec1502895f0c04dbebf4e3fb9408757b",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/d5/818f3bf1d38159f7cb9b26c59ad2bd65685409": "413b55e8ba3bf088e2c04cae02a54278",
".git/objects/08/fa897084c8c644dcfbee7eeb98ee5e69e3042c": "70c12495dc7d189022e1790e47b7af14",
".git/objects/80/04fa4a713745a92370d0bd6c9318b5574b62cc": "22d452058fb5fe0d40b252463e1a48a5",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/a2/568707e38406a382b2cc0a9b83d38ed43032d5": "551ad4a69eed8f47691c992ce1cdd911",
".git/objects/a2/ffeac7a90896d6fce4009451bf8deeb10998ca": "05adca9d63ee406c92c592036790675a",
".git/objects/a2/9e0005fb8cc451f6d38a8d1441124de029bc35": "bec8057ebb6a0cfa702a7c77adfffef5",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/9a/126a6d32fc1514c37d8ac0a920735070416b86": "4adb8e7b8469cfd90e36d85488f9f9ec",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/2c/f178bb6db8e81c663f8ac6ec50e53f6f82b75b": "68b6eb9f0d229ef8c218d6d568889b8c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/ab/2910b24a87d1dd6fb840c5ef8b70d276b07d50": "dc8a2e0e3f45c34b3209754ba99be78e",
".git/objects/c8/8e11ce0c0c27505a845b4e90fb38c27c6baa4e": "f8f8e9a54b9986d9039480185e2071c3",
".git/objects/a0/4827be110b170701a67ddb82246280790a480a": "744fb488c70c9594b046d6a5d870ffd3",
".git/objects/89/30aa2d1a9892fbb4e1dfbf978cba07cdcd9959": "d119db7a3ee9d174b6398b3684a2e55e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "fdb6cd7a1554d12ac29e426d3c08c85b",
"flutter_bootstrap.js": "1cefbabe16d83a7e0d7bf22abdbf1673",
"version.json": "ea8108c94ff6155cdd79f497e46c9499",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"index.html": "fda8ac4863364836b196176c96d1b852",
"/": "fda8ac4863364836b196176c96d1b852",
".github/workflows/deploy.yml": "584c06e3c38718f93fe31d85836bdbd0",
"manifest.json": "a40653593193293daf9f7d0318b45eb5",
"assets/AssetManifest.bin.json": "69a2c47d1a598b7d68d2fd47555f07a0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "4c261219ff1f7130504cc3c33b798c31",
"assets/NOTICES": "687a7d4e41583dcd8b04511e30197be1",
"assets/fonts/MaterialIcons-Regular.otf": "3c33829862c6fab20429020c5b02f5bf",
"assets/AssetManifest.json": "cdff1ae0a58af4b41f9035c82a64df19",
"assets/assets/svg/back.svg": "674ef62d96a81b76581e6a967508acc0",
"assets/assets/svg/logo.svg": "73987fec8f1a495683638a556691531d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"main.dart.js": "043447e06ad0ce7e1f94207f39e15f3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter.js": "76f08d47ff9f5715220992f993002504"};
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
