'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/logs/refs/remotes/origin/master": "2d94be46311a6a97230472735b997b27",
".git/logs/refs/heads/master": "8eab80aca9131fcc6bfbf61439ff3aa5",
".git/logs/HEAD": "8eab80aca9131fcc6bfbf61439ff3aa5",
".git/FETCH_HEAD": "ef4abd97b822bee8e03993669bd63398",
".git/config": "cf2246e94158fb3faec72955fdaf33f8",
".git/ORIG_HEAD": "5be0dd00d2f5b0a55680d15c2bf6764c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/master": "5be0dd00d2f5b0a55680d15c2bf6764c",
".git/refs/heads/master": "5be0dd00d2f5b0a55680d15c2bf6764c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b4/3cac336925df23f4e65bcb474faf96badcbe62": "887832a9356446a93dd997c3216655f1",
".git/objects/01/119b0a319b3b6e534100dedbe30b5f543f3f75": "f6461ed03da02913bfe4c4e5f7ee5c8e",
".git/objects/01/ad39f3430ece854038907147df8df5b34aeaec": "d3cca421c69528df9bd34cabb73ca397",
".git/objects/77/11cf5220779eee0449111618555ed6a02e9396": "a8e16739bc535a529f32472bd50d156a",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8e/878bf9064e6aa7aafc8704158ba786e375cb94": "5818cde123594ce7b3675241a7a7f439",
".git/objects/71/974d72f83e5facf1044a47f22b4be25589f625": "c5828ba6aa00429c553d6d1e52eb3189",
".git/objects/d6/8210f93b51f64d40eb21396f5b2130d55a12cf": "49389348d4a8aca3940dffbe0baee507",
".git/objects/d6/9f352564eedef1f59adba5f6e64bc6bc24f9c3": "e0535722f6687b0c443f998e4c86749d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/479da8480a15336bf56c9ce9f4ff164753be93": "8b19fcbe98a5db05c81feb3c1eaf8aeb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/04/ffb8d98b16f5783aa719ff65f7528c20d87df1": "65945f7190aa712c51704ff08c560829",
".git/objects/5d/ea225769ed7662dcbf2ef81d1114d475f55fed": "87707a08d743499f6f18db8c3896b171",
".git/objects/60/9dbbce2a40fcfde8186c63a8a97085dff86970": "995b4d0f422cd198d9c050f063296e7e",
".git/objects/60/b6b61fa04f7bbf6d6ae2c0a7c8e64eddbf2166": "8932eecc0d239da195954e3592f653b8",
".git/objects/12/0b43c836eb1a39592b1a916b6ccbf180ec0458": "57f05a3b927c45b313c4a0e6341e6f97",
".git/objects/12/11bb764deab186280f9ed92ab0471b0b0faa28": "859b0b621cf9227e0063f30e8af1ada9",
".git/objects/99/ccee422378b39abccc1e979cf1bdbe3a5cb692": "197b9979c618cb9fa9ab3d5e0f9d8c29",
".git/objects/fa/a52fa7b7cf1dd2ee01e35a9577563652c69d3d": "e8a17d30cf9323a08c1ef0a1b75e48ec",
".git/objects/1a/5659c0200de88327c1caad7f1037ee0d674a07": "2fba53692fc63eb8a11ac28693b18df2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d9/a68a0ede24f461781d4b8aa644eb3bd6542757": "39157cb6eb24909d82f1d85d0223b780",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/472739a52e3302df70bd45ff517b26f0684185": "4d94a3c4e499498c409770a9f13ddd8c",
".git/objects/50/cff3cfa85e257b47b4758c05571b0ae727f7ae": "0de83513525102e9cf188373c08bb6c6",
".git/objects/14/574965bb6ec5ee2e19b95b1853774a78648adb": "942d2deb688ac00cf8c3ac5946159cab",
".git/objects/2a/f8d066afbf54b8c9c4efe0b6f83f0f36cc7e09": "3b4f054da43030868601e78ce6eaba37",
".git/objects/2a/4a690990049a6eefbf5d8c8c96b95921d47a47": "13e252565143e07919769fc5fa7ef9ce",
".git/objects/9f/d428a311cbce042c806afafd1575e0611ca015": "1011c00362cfca574224a3e24b78830e",
".git/objects/25/4c42406f5e8bd8e179d3ee84c57ab430c87ac5": "883079c4cc921ee05a381c28f200523b",
".git/objects/05/5c879ad7fb7d2fff32d34ad347394c5ae11acc": "9644b8a9f633d4f334571bc391ccf592",
".git/objects/b8/eb7b61ff479361e5820d4e13ed3dd64ffcbdf0": "2082aa59e5606cdb87e42ceb7c1abac5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/3aabd1c5480d1c5495b1bf75d489c248fb9bd0": "1e080bbedcf0e19c3d4148dce739e1f6",
".git/objects/2e/672087fd556b2b2a921cc1da59779889e19e9f": "197f7c1b87b63097719beba18bc46499",
".git/objects/b7/8fd1fe6ea917725fb1c122fea2b04979d75435": "94cd27fc00c6c2695a3ae4b403efa8cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/fb/76b2ba1a82c250aff95341dbaef4e86d32efaa": "3d5030925bc52c2db11bb94a4696e2b1",
".git/objects/31/9d738c1176859eb61c4aa5d798c3eb40bfdbba": "2416f78166f00126f9b43807682fe12a",
".git/objects/0b/dab8d84e1ef1e19c0f4f4dce468275d40b91cb": "3362fea936fdd0944d2c2f743feb3934",
".git/objects/78/0ad0c34e05bcb4da0952ccc3420c3ae1f65423": "3fb893f6046d59e8d2e8f6637982dafc",
".git/objects/78/8183c4e30e45c3eaa12c5e13a6c74bd765b388": "5af8e07091aa558d8b942cfe3ec62483",
".git/objects/78/e432734a7b90424c3a4ab31e0877bc92432fc6": "0e262668f01e518e4ba2c896c64d7a5d",
".git/objects/c7/ef68aa2830bd3db4a85c38c050de6ac928b2cc": "a026c50fec433d9e5614c101adb1c563",
".git/objects/c7/268259bff68d6f9f51f14caeca8a4452f91eb9": "fc5029e7f1aa6a0af84b0d3c7d00ea8f",
".git/objects/18/14ec6f954e0b87511a9c109a426fb0e32d3b94": "2dd2da510a7c8eb235af60606b3f765c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f0/7ede7e7a5c96cc61b0e8b850ca1ae08ac6e897": "b66d4fdca20b746291971612eb378891",
".git/objects/f0/266ab35821ca93aae7ce1cb8ae744b9a918b72": "7e0ee053e0254b653a3dd91e16cf9423",
".git/objects/c0/8ad1c3f66d8fe3219c44102449007baf4b68dc": "9945c025ebae5213ab44287c07240f08",
".git/objects/5f/7dbec104bb05e9b1ac58138f9725fbd6bdd511": "bbbaece9125899b8e72084a29a0917d7",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/c4/21f8f8ac853b4c21863184bdc7ea9ffa87e28c": "01344e4c81a5fa773791d1f024883dc7",
".git/objects/bf/1716453a7152bce2a4f68b5dcd99d72aedbe16": "1efc2b5c44fc3fd432a0577a430561ac",
".git/objects/bf/d5ed938a56adf7f5c19c83a5f7bd99859d0b75": "ab0bbf9f92c760119ceae0d677abbd74",
".git/objects/65/0642e8f5103e60f6a5d132f0092a910769727f": "ff60b8bd5f1a7807b30be7f91adfa08d",
".git/objects/65/1127a55b1b62477a5703167e8b6dac633d3253": "01a297f8d4555fbfc2e08d9c4aefed83",
".git/objects/d3/3bfed13ed7ad71ec2263e9e0cdf63337017a02": "7f5a0c548f6c5b2f869ca476661d40cb",
".git/objects/7a/6ede116f4c491b3a8712ff26184d62a856468b": "a95de7a8b1d366367f15986689fb7777",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/34/4ae365f621b4c9a80ac20643518d207a6dad53": "cdc3dbebe396c36d5b85c53e3425031b",
".git/objects/76/c5454ee297035208ae3f72c6a3f9373d37c7d4": "a26bcff849abec9fd12209811fb0c2c3",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/ae/bf48ad1817f7faade0bb370a0d998299eefd1c": "476ad13afc94c13052a264c9b44f9138",
".git/objects/5a/b3d1a85f9672215f41d9c36c8889c3e758f1a6": "ef9645cff605aac5a28040ec2c95d1e2",
".git/objects/5a/b0c14d180d52bd6dd3e43ffc1ded786608179a": "6588b874bba787a52dc3e6d98ad97b15",
".git/objects/5a/6e3b81dca6a501cf92dfbcc5154c1ec021d220": "5be88d5a4cf83cd9023632cb96ec8623",
".git/objects/d0/7b434df367fae1de6381c900522fd31e80c63c": "fe88768c981891ea7d48a44362e956d2",
".git/objects/9c/5c678e685de6c9dc5c8ebe7fc4a4964c49eade": "87b617a6950f9e29ed683e3fe81c029b",
".git/objects/52/9ebb47b50715fd5ba9b43ec4de3177f5de8dce": "2c396d9d2460728cc72585c0c61fc3ff",
".git/objects/ff/cdd89c6df2e9b76cbf2b80ba1440cd75fb156e": "1901bd9d1e9d862ba6810ff11be151c2",
".git/objects/95/9585950426de136ff43242848ccfb6499043ea": "9516637cc09198bf0f144a88c5bd6015",
".git/objects/f6/53d66281b58b572ebcdd0c067ec0db9a8bbd1d": "f181f158fd6796b9886ad85b964da53f",
".git/objects/81/a6c5cec6605174f81d713c386290b00d3fdb38": "54188bf5dad936c279e57ee946f85467",
".git/objects/81/de8183d9248a2714c1295ed6f0ca6e991c3c79": "0ed8f8eecec9fe9a665c540ec300a85b",
".git/objects/4b/751b8c37dbe9fafd5f413e5ba758495a608fd8": "16969a804930190c4a8b7cb114b11533",
".git/objects/4a/4d57cb320cfed0db81d038fc632ab555e6a998": "e947df91544a7a9282dd9e56f92b20ed",
".git/objects/4a/372cbf0a31a23fa45df82434ba25d61829d271": "594b8818b8ca35a82373c6d3b8e4619b",
".git/objects/74/b9144946845c686e5fe396fb8a42072bf1f34e": "2724dbed7b2b94f08583fda3b6f66215",
".git/objects/19/90529991b4bda0831ef0dde8c6f41bf12b0909": "f8110a3c8da7dfe6b8ce392950565e89",
".git/objects/45/759fd5efc37fcbd77f4a581e9441b8be9f69c4": "2c8a5c93f900522d4f24990dc002efea",
".git/objects/45/ecd67b2d58301c2a65e11d4b9cba739e39703a": "28b570054a24460366e17b97e1a59aed",
".git/objects/dc/8b5b4a2589927168c80b55db0a79b5a40e2e24": "1f496d951b2948de31c70c60aa683b62",
".git/objects/82/d865ef8016a4652e5db04e949a82d9cdfaed95": "8f1b241ff34e6ff15381ed9dc6acefb0",
".git/objects/c9/cf9b4e40f24a8557c26bea016db3a7c584b511": "129110d78b48dc98f508799f7a01adda",
".git/objects/c9/e88b1bbc2e5eb84de4ab9ef7dc525ec373d79c": "d5934ecb0c1ced1475723a547287a960",
".git/objects/e4/3aead86115dafccee506a9a153d8cba7b87419": "bdafb8455a250bb1aaacce437c510d99",
".git/objects/b6/276c91f085ca8e19fee279e8a95751bd76e14c": "f3f7e49dc9f93e0190003de0c985a88c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f4/157e0721704ba1f7148ee5b466387118bfaf63": "5414b9d146a58ce87899218fe4d3b05e",
".git/objects/f4/e4a6ae457046cdc7cd845ed326570ed735edca": "f4aac369e31e0451e263a6e5e829400d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/b5/52754830b4c65e92d9effb61fc3340b126dca8": "6c42e8eb82bd37ceeab1fec3b38bd80e",
".git/objects/be/382a1b3777e37aa3e8f67acf6afcf8e10253df": "6cb3603a907dca343e9717eef6244ca0",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/2b/fd81f8c730551c53ae5b05ded6b16d7ae9534e": "0faf2cc85a506ff9ada51ee41d278dc4",
".git/objects/e6/c5720a3369fcc0bbfc5e4977933076ff7a6bad": "1041be7c4713ceea0586b64a17779a43",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/a5bcb193e92ef35eb5bc81c66c419464c80c0d": "fd8cb376714f925d47919ef36321e9d9",
".git/objects/6b/27b97cebb082a4bb9c7239b20cc93ae6a2d718": "d065456a4dc10fa8ccd6acd752d03238",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/09/2a04d972f06eac0bdac255c2cf28c1be604195": "55157c1ec57f341f04c2475524b9fa1d",
".git/objects/8c/254d91128bd4fd34ec4d43b72625b74efdbdb2": "1578de30e15993763b69730ee7a99a0a",
".git/objects/fc/ae1604981ccb5e628784446aceb7f0dbe4df07": "b542d80cdc21ff85f41136b5dde73200",
".git/objects/7e/c96a593891adcc2ab591b9cdc3db3509508fc5": "cfb1040a6187891fb4f38b007ef03062",
".git/objects/7e/373d452f4459580d3f29035d3d37ef76786b72": "258c712da3f56510123bff96402bd431",
".git/objects/15/642586cf9fc92e3bef82420a645875c402a1d2": "5ad782b1985459a4abecd5f9ff30e370",
".git/objects/d8/52e0f15958fbe39a1630707c214aba3583053f": "026203580d30076e4c6da9aab49ebce1",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/4bae2de398131cb76500ffffdbf7a06cffaf16": "9a4ae87ae9773dc766733b358a71cd82",
".git/objects/35/3ce938e89745a47b634e2cfa1b25326689160f": "37e4a93e7833212be28670b1fd96fd61",
".git/objects/1b/29669472f4376fef0261046bb60bb338fa7141": "b16118715843611151921b000cb99e0d",
".git/objects/16/9410c93d04d54662aa16195070f1ae0b04e7ba": "1eeefe47622271c6bc3caea4aa9920f8",
".git/objects/16/4f40d48f14d4d57ffc60f6bc8e8f870c1a105a": "56c1f74ec3cd675ad98672126608272a",
".git/objects/16/d8219633bc0c1620eb4dc120028056d3399660": "d4f0e4108c0c3d62ad607c72beef5d87",
".git/objects/fe/39bd5ec238905a15891d2ddae10691f373ceaf": "324362fa145b199d0434869184f1b6a2",
".git/objects/43/8cb987d9b05a5fc11c14e8dce1f581b0cba6d7": "a44af093a6d23da6330bd58f826d8ad2",
".git/objects/24/b10ab57f6985ecff7b46a2e91e5047acf09b94": "3d3b168da3956ea3dbc4160913660664",
".git/objects/44/fce8181488cd54efbecbed79f38ba15ce0b976": "ffb60cba6cca5e60c946ca1a7f8f9f9f",
".git/objects/44/76dd492dfd06d3d8f128116edd2a7277d51aa0": "fbe555581b17f78a370a741ffee9fc0c",
".git/objects/c1/fad0fa4f1b137ddcfeee6661907cd262e8a2d8": "3a1aa3fa284168585e65419065d997cf",
".git/objects/c1/d1e4291b884a4249b4260c259bc8607bf9327f": "67f569e92313c38af6457f2e306bddee",
".git/objects/c1/e388d406a6ec87d206eda633f9c34eac010ce6": "3152ca892879783bfe0cd239be7eae1d",
".git/objects/3d/5bb84720ea87b6f53a2a4c35223764c2050258": "4d4c4c86955ff79bef02071a1642ee90",
".git/objects/3e/7fe8e138d28c9f898e84f87366905f2d36dd62": "98f009032be1735659c529dd30da6342",
".git/objects/e5/549eb2e74505a3af2cadb9892f65620338d5a6": "bc3534ec9a61b5383a6ebeb51d28015f",
".git/objects/a4/5c4aa850e7ec52a8ffd0375232b1232e9889c7": "561a9c9715b08379ab593357587f7bf6",
".git/objects/66/5ef5340f873dfc3148e89afa592398463b8d4d": "a03870a2e3d52f05dd3501b3a44a249b",
".git/objects/66/f846a8b0f184ec4139d2e1a657705130979d0e": "ba67cb1188a5873dba11ce4986eabdf1",
".git/objects/f8/57191be2fc9e31e9b66f1d2b27976fe7e887d6": "98f62b55a5ce112c59a403dceb90b638",
".git/objects/f2/a2e732ce63876df092ebcc9eaf8eb69cf1f429": "fae99f65c0c0de2e3e720b4b04f142b7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/87c78850dbf737d32b835fa84c32d808e299c6": "1d238ade0e6cc94410ac6c1ea4a99d21",
".git/objects/ac/861b7d72cdba104c607f0011cba82abb8e23db": "e9fa0e80f50e894a13f3a949e1c8f778",
".git/objects/ac/7bc12926b85f6df128a47052d149361dd2d47f": "222588d11acf35c879b66f5e711c6ef2",
".git/objects/06/f264c1fee2b0fc3d122124235e9b8518ea770b": "b8afea9605cdab5663c34d5babede25d",
".git/objects/06/ae4d0ff05b5a1eefa15c9a207b4ef4a5573349": "b5931fc2e48b0f59c2871c9e00c1f007",
".git/objects/0f/fd2e00dc249e14e7e9abed7eb771da69d267df": "81de0a3245655a511bf4baaaedf3871a",
".git/objects/20/870a36d95a762893b237eaf565540df34b206b": "7abb3199f713cb26b31b82c7f403c3e9",
".git/objects/27/8739aa97261b3a4d0d5070a614857adc74d324": "28ddd2a9edc38fe61acab8642b8b5bcc",
".git/objects/ea/959ccf9308b8b664bb9798e296893b9669015e": "7d2b53bd4bd3566a90f599212288e42f",
".git/objects/ea/a27206156e66bd63c51f7348e9a9cfd31df31d": "a2ef19f81b245bf3a5e4d9df6a59e9a1",
".git/objects/90/bffbe8192e16b2c3165d25f21c16841a05a352": "34fc88e47a9e155cfab5ea471baeb53f",
".git/objects/33/aaa9d8037f1e926c0a32a727d59d9a75e6c57a": "1b80112a05219de2d624e0def742c3b8",
".git/objects/6a/7f2c3031304a83e3594b8ab735f1894e03b393": "1336b08b6560a569eb78f51418174ea5",
".git/objects/6a/46618899d254b3b43c7bc5866be04b3721c9d8": "c0522b515d7309d5388ecc4c9e9e8aa5",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/cece6b492e3c2ba6a05a5d4ec92a3334302b66": "3400bc1c1bfa6b6be9cbb3c9de95e060",
".git/objects/de/c2a5f9c0580be9614a2224f8996e5f5022b243": "6c11293e78be70913cd2e0237e414312",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/63/61e024bb51786d3db9deee1b51754e7b4feaff": "f502e80417209426ebb4b34f5453d676",
".git/objects/80/04fa4a713745a92370d0bd6c9318b5574b62cc": "22d452058fb5fe0d40b252463e1a48a5",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "9ff992df45cf072fcf4e00d974b9363c",
".git/objects/0d/abbca8085cd9ac223e9e8cfde605261ec16ac4": "18ed3c9b3925ad5515fc1fb1c7e73a53",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/7f/db7878cc2585b452fa4aed777b57e53b83f0a7": "ee2688cb985baa685bd3ff1a84253170",
".git/objects/cf/b00aa226ee88353233907f9a423798c50e6ef1": "239b705ed2529d2d2e6209684114ba8a",
".git/objects/e9/d2c42f8c817162d0214a20ffa50fbe00d3fd5f": "f08791448695fa138e5ed662da531b9a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/a2/d82922efd89e865e9b9c871cb1c59baf12513d": "b2d73062433bafd3ae9260ecada27972",
".git/objects/a2/568707e38406a382b2cc0a9b83d38ed43032d5": "551ad4a69eed8f47691c992ce1cdd911",
".git/objects/a2/ffeac7a90896d6fce4009451bf8deeb10998ca": "05adca9d63ee406c92c592036790675a",
".git/objects/a2/9e0005fb8cc451f6d38a8d1441124de029bc35": "bec8057ebb6a0cfa702a7c77adfffef5",
".git/objects/ad/a125e4761bf22418462001d40f5b0762ab350d": "0522bb1dbbf3d65702586d157375758a",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/11/91f8ba7098fd189030b146634f8cd1b4dfc38d": "80d2bc87bc5131ca68be42a21bbd4892",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/d1/15e8a727d8c9a2227a912f9a9335fe712a3d14": "70458f4db5d73071cf42bc4c9f1e36b7",
".git/objects/4f/a03b448a220d6ef812c6e9eb2fd60278ccfd92": "28d23357b873e5af9c2484b32b2a79bc",
".git/objects/4f/898d4b084145009980733122f018072a4610b7": "ef671dc0378391318f26245c90215c38",
".git/objects/2c/00842a38f2b0bc82bc2fbc1681b7f2ccef5581": "cc325b29ffbc1f348f4070d436275c60",
".git/objects/9b/d220eafb7ca9ea16f0108297b911cbd1017294": "7636ca43667d3c54d3e081a42988975b",
".git/objects/9b/bc14b4c332ad5d8dc59edeba79732c5d54d62d": "6b6069553f9d746bcee0d8b77a1177b6",
".git/objects/23/a7dfb4a273ac77ba8c94136904a7de224a9a8f": "97eeecfa0af30cbb28b6c9641034c89d",
".git/objects/23/4f5666b116edc371315ac73267b4d69e26495d": "9825adca6bfc516798a077a2c383d4b7",
".git/objects/d2/0abf2773064c89d2761d40abce091e8d325c9d": "9424ea03e20f03985aa1cdee5d96390d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/2f/8041dca86385df057ce1e830e0a286987bc796": "847ecdac1c707a0e982404202cc8c2ac",
".git/objects/22/7d8cfb50e2a192bef8a666f3376b81031e88b3": "fc5390fdf07b1bfb8b8ea2fa5a3ccd84",
".git/objects/96/14965c1d639ffb3de51d7484f17305c47e34ee": "c94bb67e7b01edc1f30c846176a37949",
".git/objects/96/9a170bf84501604fdb4334e1394ba1ab9f91e5": "2785fe13d49d95a9603751a9de4499d9",
".git/objects/3a/172aa517b0238f1ba95466c20bb3bc40fcb3ec": "d440f6f10c52b65516185c6c8bcadfe9",
".git/objects/3a/ae993a8f3a8457297f0c3c4212c3bfb8765a33": "3a4bc6972a4a6be565c45537a460baa5",
".git/objects/9d/969486d32fbaf3eb8827db4e77eb1e6b104171": "9e524a5f3ef5fd01ff158799abf47088",
".git/objects/c8/8e11ce0c0c27505a845b4e90fb38c27c6baa4e": "f8f8e9a54b9986d9039480185e2071c3",
".git/objects/cb/41a1808eae487dfa24d67b84991f7cf00b9b95": "3b0c4bab029cdf8f6d423a4fd8780f6c",
".git/objects/a0/125d023dc82d24accc18a71833f5ec756ddfe9": "b8f14e78bf7b362e6238aaaba6effea5",
".git/objects/a0/368bdd85210b2b642a819ffbf37485ccc82a35": "f34abeaa1aad49466f9adbe32c08f7f5",
".git/objects/a0/4827be110b170701a67ddb82246280790a480a": "744fb488c70c9594b046d6a5d870ffd3",
".git/objects/ec/9976904b98e065230484f4bb043ea14ad70001": "2414ffbcc6d66bd4cd01de16ffbd8edb",
".git/objects/97/a42e46f0250163a1ecfd3e3dd420b17047b950": "f4c258286d489fa9acf2fcaefbcc6c64",
".git/objects/97/0707f9d639b5b3696b440d9777a9a703d485dd": "0220221351ffea15e3230041d07369d3",
".git/objects/89/7b4d0af55a5c0cc2407303504ffa52641785db": "ef1958f35134926e1e380a04c816e2e0",
".git/objects/32/e4c4d13e2ec90ae3ad68b0060bee1bfba3ec3d": "658a79aa09d2a074c4fc1efaf515e1ca",
".git/objects/32/a307c04d761a6b677214113d9a9a7c48bb9e2e": "db31ad57a7184ed1deeb9a4c7fe32993",
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
".git/index": "4f43c38610f5c02c28e8e84bf3e8a303",
"flutter_bootstrap.js": "4e5d67dd89f53d6c27dbccc2be08b8e0",
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
"assets/fonts/MaterialIcons-Regular.otf": "5b57bc74282758c0767dd6190c661adb",
"assets/AssetManifest.json": "cdff1ae0a58af4b41f9035c82a64df19",
"assets/assets/svg/back.svg": "674ef62d96a81b76581e6a967508acc0",
"assets/assets/svg/logo.svg": "73987fec8f1a495683638a556691531d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"main.dart.js": "1e2f98b59f682b9c73773f4482c3f159",
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
