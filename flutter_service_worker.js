'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "e74b6b7aba59d6b856cef0558676c5d5",
"/": "e74b6b7aba59d6b856cef0558676c5d5",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"app-release.apk": "c9507206de837bffa7363cbd0f2acae6",
"version.json": "ea8108c94ff6155cdd79f497e46c9499",
"main.dart.js": "d15b7dfe7dce809ceb9d0a8cca2f931d",
"flutter_bootstrap.js": "3f6c90c937c68a5d0f65d9e8c9a14e5b",
".github/workflows/deploy.yml": "584c06e3c38718f93fe31d85836bdbd0",
"assets/fonts/MaterialIcons-Regular.otf": "758b2e6ce89fd8e0e9a0c32bacc4e51d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "4c261219ff1f7130504cc3c33b798c31",
"assets/assets/svg/logo.svg": "73987fec8f1a495683638a556691531d",
"assets/assets/svg/back.svg": "674ef62d96a81b76581e6a967508acc0",
"assets/AssetManifest.json": "cdff1ae0a58af4b41f9035c82a64df19",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "e1b0c2ad41aab10df967ca01d521c0e4",
"assets/AssetManifest.bin.json": "69a2c47d1a598b7d68d2fd47555f07a0",
"new/index.html": "e710e94e889c7c1c4b3067b032dfc1ad",
"new/canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"new/canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"new/canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"new/canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"new/canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"new/canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"new/canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"new/canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"new/canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"new/version.json": "ea8108c94ff6155cdd79f497e46c9499",
"new/main.dart.js": "3779fa14fdc092f81837c5fc92d0b151",
"new/flutter_bootstrap.js": "b54569e79b9d9d236fab33257ed7c984",
"new/assets/fonts/MaterialIcons-Regular.otf": "c7c85333e800bd66b951e13fa39c6cb8",
"new/assets/FontManifest.json": "ad1a2b33dc8645a9ec31ed1b1f6b573a",
"new/assets/AssetManifest.bin": "e1d7a3fecd34caec4933a3a858534015",
"new/assets/assets/mock/sample_audio.mp3": "e33d07e84e4c670ea93c0e07905b6897",
"new/assets/assets/mock/all_chats.json": "79ab0f7df3f1113ac4db22a41836cabc",
"new/assets/assets/svg/logo.svg": "73987fec8f1a495683638a556691531d",
"new/assets/assets/svg/back.svg": "674ef62d96a81b76581e6a967508acc0",
"new/assets/assets/chat_bg/pattern_space.svg": "c14aae26ee81966a34f08d76c5e63178",
"new/assets/AssetManifest.json": "342190043d24ef740fed7e7b001a2588",
"new/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"new/assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"new/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"new/assets/NOTICES": "cdfc766bc4fd86ad909149093f06251b",
"new/assets/AssetManifest.bin.json": "d7ff5806fe498591203a7a40ce4f5148",
"new/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"new/manifest.json": "f9b7e41222775046ab4947ba3bb8fc07",
"new/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"new/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"new/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"new/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"new/flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "bdccb3de480c236e128cbeec29e70116",
"manifest.json": "f9b7e41222775046ab4947ba3bb8fc07",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/master": "685cb1915e180e8e91f0084ab92fd0f6",
".git/refs/remotes/origin/main": "0c206737186b53cda7077d8976bc4ccf",
".git/refs/heads/master": "685cb1915e180e8e91f0084ab92fd0f6",
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
".git/COMMIT_EDITMSG": "e81ba97d67d2c4b6413c5383b526dbc6",
".git/objects/db/795398f755c488b13b495aa60f333efbc35e13": "8bc8d98558eb85a570f96e60279b503e",
".git/objects/15/642586cf9fc92e3bef82420a645875c402a1d2": "5ad782b1985459a4abecd5f9ff30e370",
".git/objects/07/73bbe372edf4d848ff0b298a60c8869ab9bebc": "324fbebc7560f7277782b162a823501d",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/1e/2b8daada36fc7f5763caa35920554c96a21b06": "c2f20452b65042a3a050a0a4eeee718d",
".git/objects/c8/2c2cb2e9a069bb38758194ecc461443878fe07": "fac21279daaed95e8c9ffe4661e725e2",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/11/66d4c03e806b27ea7569dee6ffcfae915c3869": "7c2c3ef5b07d23c280d97ee5de361527",
".git/objects/d8/7d1280d88aeabace1d23551fb9bd7ed9afb61c": "2312275e8c3a562b1523c8539b69085d",
".git/objects/02/8c86ae81facbf0c95ef6ad9e8fe0c86f3c90c0": "fa2f381bf97999b98f394e1552b0cc76",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/05/c52bb4ce615e5a6f72bb104f6fd2802ddb5b9d": "0176f18b4e1da14fc2b75b34ebf09688",
".git/objects/1f/e0194f814169161aafa178659b96cd99d45a0f": "6709ecdc8e2195cedc58f323fe348356",
".git/objects/f1/84c001bfc692b30825f5ee63fd0cbbcc40084d": "a585a0a8d9ba6dc86c6363fc9d7fcf45",
".git/objects/a2/9e0005fb8cc451f6d38a8d1441124de029bc35": "bec8057ebb6a0cfa702a7c77adfffef5",
".git/objects/47/7754aaf3579348ec62d887fd111b4ea122ac94": "a7793fa6adfa12252582e4b1bbbcee9d",
".git/objects/f4/2298ad079eb08caa7d2249208b0da4bd74e53f": "fe6e3941e791cc5fbab2953fc004d00f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/86/bed5e29a80fc8cbc71b973be5e097ee1f5d91e": "5d4174beecd2b8b1908990b75a458092",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/8c/254d91128bd4fd34ec4d43b72625b74efdbdb2": "1578de30e15993763b69730ee7a99a0a",
".git/objects/a5/169f38b1531127ee7743ce086c025e87f113f2": "2b906c71cb4a07b48526bd1ff427abcd",
".git/objects/58/685f0f9b160027069aeba78d0f08db6287c543": "26f7c80b850d5545ba68df7ca0c6e8b6",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/e5/a2266f0b3014c0466b5d26c68ed83656f16565": "f30af4309b0f7002d788c7f1acf5bfdc",
".git/objects/0b/f73d85199b3ce1238ee47c1dc3f012e7247aa1": "aa5c1a99dba7a2e94a4b924465a44acc",
".git/objects/75/a916fffacfc3aeb2ec2ed77e5558ff9936f5cf": "907fe44b909595f2724c381b6ba05581",
".git/objects/b6/1678f71e784fa5f13773bf8efb777698d982f2": "988da63ebaa018405548091ae2748cdc",
".git/objects/b6/24140217faf2adeced8e1bf34a4088f0feece0": "3589833dd60e3ac3953eaad76adaa300",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/24/978805b5f5de9d4f996632b1361c3db17b83d9": "0c00ced43ed38c502fc3d22529c62d9d",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/b7/8fd1fe6ea917725fb1c122fea2b04979d75435": "94cd27fc00c6c2695a3ae4b403efa8cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/2e/34587f7b724491629a1e050fa2ea902b7fba10": "04ef62ffd157afe172dcb897c944c3cc",
".git/objects/f6/54f34bd33893887156e018f7a9b768285aad40": "c5ece82c7e70c46ec81bdb4820b80671",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/6e/08e6660c228b0827d79ea7655f5da1375553ba": "73d5c6113121514674c798a3637d5f90",
".git/objects/6e/b0919ace78b490da9bfc229ecdbaf3ca61ab66": "b2dbeb682f7763db9ac6e190664cd0d2",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/32/0cfd24bdf666fd65248901cab6a1f37f40bee5": "80c2e95eff0b3b6be4a160d502f36941",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/3f/89a694d5060642d6fd0127dc9d4b8a6d2b9a53": "902cf6ad2a4c3ff6ece7f1ef664d791c",
".git/objects/6b/c10df89e2fc296d76db28b2b9700f04e3d72c4": "ac887fe680eb36ffed7b6723c5442e23",
".git/objects/6a/46618899d254b3b43c7bc5866be04b3721c9d8": "c0522b515d7309d5388ecc4c9e9e8aa5",
".git/objects/54/cc569ee95749b5e6e938eb249003f1a1f9f522": "6e0d46fe72b15d4f4b054046c8a490b0",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/84/bd31a0f0bdf0f8cf4bc780d1b92fbd9a66dc3e": "364c795a157baec1e65bcc2e94211630",
".git/objects/de/7fce4cad48892b6db0c24fd158ac214c5ae081": "c69e619d5df29be3decba7eff889e61a",
".git/objects/a0/4827be110b170701a67ddb82246280790a480a": "744fb488c70c9594b046d6a5d870ffd3",
".git/objects/4e/8af022e0bba761a4ca451e4230041c6b3afbca": "8b36c76ce229bfd1e22a753fb63877ee",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/63/4f5f97c14b10d029cba6192fdb1ed14899b0e6": "87376ba0cb6fa4d2af2897d7306d49cb",
".git/objects/a9/bc1383f93f7ab83dcc70d16c347e4cd9278227": "19f2b25b73376fc80c49640b6cf3f83e",
".git/objects/d5/012e55f1e98671c75cd933e2bcb2dc8521e076": "08a43d9ac775e68f7473ef35df1f4213",
".git/objects/9c/ffbafc643b7ca7e268b0d4d851871aff48bf4a": "8880337748b60c329f8e2c43e6682288",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/27/0aac715e4fb1cb057f062a281051aae4103820": "96c7395a9581da2715501b345eee2292",
".git/objects/27/ae43dcc1f2bee009faf3d3f7eb074cff35f1e0": "42209d14ab8a7c9d4f000cc76e0f1427",
".git/objects/01/119b0a319b3b6e534100dedbe30b5f543f3f75": "f6461ed03da02913bfe4c4e5f7ee5c8e",
".git/objects/pack/pack-690a6e834f7de545171de5d0cedb83c19a658c9f.pack": "eb3958a05e18d2474df83f4703ef1b15",
".git/objects/pack/pack-690a6e834f7de545171de5d0cedb83c19a658c9f.rev": "25b9dc1dc286582c30e66f422f0ad3b9",
".git/objects/pack/pack-690a6e834f7de545171de5d0cedb83c19a658c9f.idx": "a1917742cd644faf66dc9eda59d0feb3",
".git/objects/36/8c65d4dacaec85327c531879dece48b65edd18": "1e01597fdb95bef292d4b47253ed01c0",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/14/f780e11648d4a17957af39703c3b5a9d331f91": "afdfafc84aea4b9abdf37de36717969f",
".git/objects/5d/1b0d9c50073db793fb287888d29b4bb65ecef5": "dcb909b95eb707498675a0b827a5bbf5",
".git/objects/1c/fde56188e36c6330432bbf295c73a3c438e0d7": "7c0172a67446d5a759d766123a8a016b",
".git/objects/83/4828bf540bae59425f5b7c1ea0b34976fadecc": "86f485d94fefb64814c9ce67cbbe65b7",
".git/objects/8a/8ab3682c7a64bc0516ea8425eb484addf2067b": "d5afa5184cc0cb202a8aa61f7d705797",
".git/objects/31/03cac53daf97ca1fc789fb2c42072c03e197e0": "da268fa4c38b05f5ddae4f3c1665acba",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/31/7f19eb2f3976edee4b206ca51946d8edba8d5b": "15bf010600b994210ee7ff5dd9b16f41",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/40/fa4762d51bb2cd904cb3d2d197381c36dc95ac": "32777e442d44146305970fb887d982a5",
".git/objects/40/fff3585993d3345d019efde3cbd7871a8cbe76": "6c61896aeee057a5848c27ea5cdb2b4a",
".git/objects/45/ae246f0f2980f49df9da293f5b1903fbcde6b1": "54adc0315d50edf6e8787e4079aa4826",
".git/objects/ee/15e22e8edc02165768e4a644ca951edcd083ed": "71c9d6a7bdd50bffe5f4830f13a18437",
".git/objects/2c/176855ddc42234beb75e3b21067510fe7554d8": "1d59e659f971c0f71fec9bab86a62d9e",
".git/objects/ba/ac89bd1b604ca1946db6543b65c30033c7228f": "60cb7ecd0b4d54641ba99afc2c6409bc",
".git/objects/cc/8d172cc828b397bd970d85f8910d2f5d9c746e": "092e7ecc489ffc3e13f6e207213f93ea",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/23/4561f1aac72dab782cf362f4802e29c70d593d": "559eff134a7530e56af93a706b206652",
".git/objects/19/90529991b4bda0831ef0dde8c6f41bf12b0909": "f8110a3c8da7dfe6b8ce392950565e89",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/5c/e4aa88b0cebcdd0de73ba5adc5fcb553915ea9": "075a155f42ab47f9b557413c26f940dc",
".git/objects/b0/bea1601af897323bc25723df0e8c630fda90c2": "095d9bde255ef345dffdb257dc4f7eb7",
".git/objects/b0/55af96a7b2cae090fd28fb79f0ec0e308799ff": "04628e1e6c054e1e96fe1511804cea46",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/index": "5039ee0bb12053bfedfd677c3a7ef313",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/master": "0c09cacdfeca33090c5a0e6489cc4b5a",
".git/logs/refs/remotes/origin/main": "6a0484efa9bc22863fd3f4df96259c97",
".git/logs/refs/heads/master": "8c3ed78ad5e7b250632f4457836fba35",
".git/logs/refs/heads/main": "0578279daf8e9c226900ac24122323b1",
".git/logs/HEAD": "7f9edd87ba1fffac683933dd484dece4",
".git/config": "263cab72a96913ef98b4e124b01e2f62",
".git/FETCH_HEAD": "055fc3f4e97e9139c9ab36be0d761339",
".git/ORIG_HEAD": "685cb1915e180e8e91f0084ab92fd0f6",
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
