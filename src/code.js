var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5485a571-ff11-4292-a886-3513c2b913af","8af15d72-18d4-4283-a9b1-48ec15a366d4","92baf800-eac0-4a31-8333-9d766b47c6ac","1704f69c-e852-4080-9d6b-08437669c970","49fbe056-51b9-4f50-bca1-47fe9f5c379d","5f6703e5-af6c-4e54-a33a-f8256e17e47d","7be1a4b1-3381-4ca6-bae6-42dfb3321af5","711212a6-437d-47d2-8852-a6d69fe94fbd","19c43f48-46c7-44a1-9e7d-bc4543fad815","85c6c54d-c40c-441a-961d-b364dc197157","b655112e-8720-4dee-933a-facc7636d8ac","8cb0890e-ba9a-4eb5-8efc-494ae8fc90ae","86ef043d-27e2-4c8a-b039-4a6f4dccbda1","105d08fa-8236-4ba6-ab38-9992bb013ed9","c68e7fbe-f342-41c4-ad06-e116e10f60b2","74674f49-e8c9-4fa9-8b7a-21e707bd6d86","f357ee2c-7bf7-4f5a-add1-b06c21d20280","75a2c999-20ab-4329-86e2-42eccf33b8cd","cc5a671f-985b-43e5-8ca1-1d4f7b364b30","8d7dbda9-3658-4ee0-83d5-a326c629c2a8","b0c295c5-a75a-4c8a-88e2-4518f8bce66b","5a87a19a-7283-4245-9cc6-bba344fc79f7","e07c4196-d93d-4963-acdc-79a0e0de1d5a","69819ab9-0d27-4f29-a5de-ec9262aae26e","dbd99e53-9979-45a5-b5c1-3afd0984bbe5","f5b75cb3-18ef-4771-b8e5-6aeefd238801","17ab6bd4-96b1-4f5a-afe1-c3c278124729","e068b22c-e427-430a-ae11-ec7a617d9fd2","d338a782-9d44-4ace-acfe-8fde7ed57070","8a9e223f-9a15-4890-b507-41f9e39ad020","ea976e85-cf63-4892-a260-f94b8cd426f3","0507e64d-fc69-438a-a6ff-03828b0651fa","44d8999e-352f-47c1-a8a4-05b2d1d341ff","8185082b-418e-436c-b80f-c040fd550079","acbe6ca0-d94e-46f3-b27e-a6280d9bf3c0","b5b18f12-7401-45ad-82d7-82f2dcf398ca","c0df84c3-c9c0-4d27-a68a-c131b6a5b33f","8add17f5-448e-49c0-b8ec-95b608730452","b2a9d65c-5dd4-4c5f-8444-c0bdfba5787e","c9562fc3-aded-4874-92aa-700b16162a3f","f241117a-d99b-437c-8789-9bfc3ee8b8c9","c68b2014-9841-41db-ba5f-a7bec1e1941f","c1f07d45-e40f-40f1-8475-a6b2b8471908","56decc2b-ec39-4d42-aedb-ab370dd849b0","c06de83e-cc9f-4cb9-853c-805532b412a8","24e31f8d-0e55-4885-af0b-86e194192bde","0c6d946e-3e7c-4223-8997-520c4a3ed3e1","e8ae8059-ac59-4a02-b8da-57feba67e3fa","aba23a0b-1cf1-49b6-8388-72e1e2503ae4","f9765cb6-691e-46e3-8f7b-ec6da456819d","5caa2980-a30a-46e9-9392-2db519efed20","d4d4ada5-c2a7-4039-a735-58d9c8fb6657","6ec70fb2-8f4d-4173-aa69-98128bb61ad3","1d7f56f0-fbac-40c0-acac-0f97f2480268","532c53ca-c366-465b-977e-37d335ce5893","79f1665f-6db5-4063-af32-6aab70806d25","d22c7beb-578d-46bb-86b2-24b6f81c8c4d","5ffdf6c4-649c-4ff1-a0a7-c7c83068dfab","46a3bd2f-d473-4b1e-be5e-fff483b2df06","e30ee304-7ae6-40b2-a97e-aa2ba0b5386a","fdb263f0-0010-40c2-9a16-bc3ba4e5afda","180f1765-d22b-4f6a-b94a-4b9a52324be2","8343054a-d3fc-4c2b-87e4-163366d42389","b1cc9759-2338-43b8-903c-ac187c9b6f66","5ba087ae-352e-4d45-8875-aac969a8f939","ebcd85ab-4372-47be-b778-e2422b9ad23e","7f79dbdd-9125-40bd-a0e2-9e34bc66c143","9764e9d4-c91c-404f-83af-a164206b8df4","9f102095-b090-4c5d-bd50-6afd005d3b7d","db05cb43-e4fe-477a-a6f9-911aaa741ca6","77a716d5-9e37-4fb7-a535-49e0ea662684","267bb7e4-34bf-450a-b802-7e66636904f0","8965e889-c0fb-4063-877e-81d9de27580e","f8232b9d-75c7-4d10-a513-d82681f617b6","9adb0ee8-2c71-4fdf-a41b-fe2078c5a97f","72e19f79-b0c5-4ce3-bed7-7542353c60bd","e4617e39-f8f0-440c-9b54-73e82f87aa9e","71ec74d4-96d6-4ad7-beb6-8c16994f703d","f1e904e8-4ddb-4c8b-9a86-ab5921e977cb","c38e1834-7eea-4933-b94f-d272c2251c12","307ddf8f-a50b-40cf-9743-13e140e98238","9714b687-6068-41c8-bcee-185e6e89c714","8e6b2711-9801-4a1f-89b0-7f5eccb6009b","7df185d2-46db-400d-961d-b78a99932e99","44fed503-7c07-459c-8bcc-fc240e67e582"],"propsByKey":{"5485a571-ff11-4292-a886-3513c2b913af":{"name":"LeftArrow","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"2cn0QMOJX6XqLsQ.uwCbgGWBelaiBY_A","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/5485a571-ff11-4292-a886-3513c2b913af.png"},"8af15d72-18d4-4283-a9b1-48ec15a366d4":{"name":"DownArrow","sourceUrl":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/8af15d72-18d4-4283-a9b1-48ec15a366d4.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"SW7FKMASdF.edXWu4yml81_5YVFYsrV0","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/8af15d72-18d4-4283-a9b1-48ec15a366d4.png"},"92baf800-eac0-4a31-8333-9d766b47c6ac":{"name":"RightArrow","sourceUrl":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/92baf800-eac0-4a31-8333-9d766b47c6ac.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"9hn9wM54o2Dp9cLD68llhJ4SaVfSEgK7","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/92baf800-eac0-4a31-8333-9d766b47c6ac.png"},"1704f69c-e852-4080-9d6b-08437669c970":{"name":"UpArrow","sourceUrl":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/1704f69c-e852-4080-9d6b-08437669c970.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"RuFzIPIHhLLsVNm2LIr9vEVlv3TaIKaX","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/1704f69c-e852-4080-9d6b-08437669c970.png"},"49fbe056-51b9-4f50-bca1-47fe9f5c379d":{"name":"DownGlow","sourceUrl":null,"frameSize":{"x":247,"y":244},"frameCount":4,"looping":false,"frameDelay":2,"version":"4ELBZQhsOySY5WX74ARPoEHTx3Lwi8Tc","loadedFromSource":true,"saved":true,"sourceSize":{"x":494,"y":488},"rootRelativePath":"assets/49fbe056-51b9-4f50-bca1-47fe9f5c379d.png"},"5f6703e5-af6c-4e54-a33a-f8256e17e47d":{"name":"LeftGlow","sourceUrl":null,"frameSize":{"x":236,"y":214},"frameCount":4,"looping":false,"frameDelay":2,"version":"xsPtHc9SN3nvoz3iK6kxhx3Ig_4DtORb","loadedFromSource":true,"saved":true,"sourceSize":{"x":472,"y":428},"rootRelativePath":"assets/5f6703e5-af6c-4e54-a33a-f8256e17e47d.png"},"7be1a4b1-3381-4ca6-bae6-42dfb3321af5":{"name":"RightGlow","sourceUrl":null,"frameSize":{"x":256,"y":244},"frameCount":4,"looping":false,"frameDelay":2,"version":"Khi0C.PimALyPiLx7mcXmfoGNjQk97rf","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":488},"rootRelativePath":"assets/7be1a4b1-3381-4ca6-bae6-42dfb3321af5.png"},"711212a6-437d-47d2-8852-a6d69fe94fbd":{"name":"UpGlow","sourceUrl":null,"frameSize":{"x":253,"y":244},"frameCount":4,"looping":false,"frameDelay":2,"version":"wy2kCFIrxFkAwX7tyvOcZ8Rej9ZD8Pu8","loadedFromSource":true,"saved":true,"sourceSize":{"x":506,"y":488},"rootRelativePath":"assets/711212a6-437d-47d2-8852-a6d69fe94fbd.png"},"19c43f48-46c7-44a1-9e7d-bc4543fad815":{"name":"UpNote","sourceUrl":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/19c43f48-46c7-44a1-9e7d-bc4543fad815.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"e2PtbVKcW.1CUqzjc8.0KwNj5GNZgi5V","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/19c43f48-46c7-44a1-9e7d-bc4543fad815.png"},"85c6c54d-c40c-441a-961d-b364dc197157":{"name":"DownNote","sourceUrl":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/85c6c54d-c40c-441a-961d-b364dc197157.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"ASR4iDsNPSvUabhll8IeRw75ghV1WJUT","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/85c6c54d-c40c-441a-961d-b364dc197157.png"},"b655112e-8720-4dee-933a-facc7636d8ac":{"name":"LeftNote","sourceUrl":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/b655112e-8720-4dee-933a-facc7636d8ac.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"WJLy6YkMzzuIpAfA9Rx8HgIu7t5x7Exw","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/b655112e-8720-4dee-933a-facc7636d8ac.png"},"8cb0890e-ba9a-4eb5-8efc-494ae8fc90ae":{"name":"RightNote","sourceUrl":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/8cb0890e-ba9a-4eb5-8efc-494ae8fc90ae.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"jT7cOLSP72H3gvvHkhA2yDtGoL36_t6a","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/fd59wD9lBQHgFX-gIn418j9zUmUCgkNEtmWU8SJfQao/8cb0890e-ba9a-4eb5-8efc-494ae8fc90ae.png"},"86ef043d-27e2-4c8a-b039-4a6f4dccbda1":{"name":"LeftSplash","sourceUrl":null,"frameSize":{"x":329,"y":334},"frameCount":5,"looping":false,"frameDelay":2,"version":"P.4HghIhbTF1jRC2VLGYsE9aJ8vQGrfK","loadedFromSource":true,"saved":true,"sourceSize":{"x":658,"y":1002},"rootRelativePath":"assets/86ef043d-27e2-4c8a-b039-4a6f4dccbda1.png"},"105d08fa-8236-4ba6-ab38-9992bb013ed9":{"name":"DownSplash","sourceUrl":null,"frameSize":{"x":329,"y":334},"frameCount":5,"looping":false,"frameDelay":2,"version":"lx5uzLv1R7j67s0PoYeyMG2KspWKci4U","loadedFromSource":true,"saved":true,"sourceSize":{"x":658,"y":1002},"rootRelativePath":"assets/105d08fa-8236-4ba6-ab38-9992bb013ed9.png"},"c68e7fbe-f342-41c4-ad06-e116e10f60b2":{"name":"UpSplash","sourceUrl":null,"frameSize":{"x":329,"y":334},"frameCount":5,"looping":false,"frameDelay":2,"version":"YHqgdJHY.2iy4Ef74aAngGqDr0P2g1Pz","loadedFromSource":true,"saved":true,"sourceSize":{"x":658,"y":1002},"rootRelativePath":"assets/c68e7fbe-f342-41c4-ad06-e116e10f60b2.png"},"74674f49-e8c9-4fa9-8b7a-21e707bd6d86":{"name":"RightSplash","sourceUrl":null,"frameSize":{"x":329,"y":334},"frameCount":5,"looping":false,"frameDelay":2,"version":"zBrLXPvTMAow6reOYjLtom4kJjFtokdI","loadedFromSource":true,"saved":true,"sourceSize":{"x":658,"y":1002},"rootRelativePath":"assets/74674f49-e8c9-4fa9-8b7a-21e707bd6d86.png"},"f357ee2c-7bf7-4f5a-add1-b06c21d20280":{"name":"Boyfriend_Right","sourceUrl":null,"frameSize":{"x":200,"y":185},"frameCount":3,"looping":false,"frameDelay":3,"version":"3EMUaT2CUTvuyGVwNY2UGi2uSdmxWt_6","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":370},"rootRelativePath":"assets/f357ee2c-7bf7-4f5a-add1-b06c21d20280.png"},"75a2c999-20ab-4329-86e2-42eccf33b8cd":{"name":"TestOpponent_Left","sourceUrl":null,"frameSize":{"x":200,"y":185},"frameCount":3,"looping":false,"frameDelay":3,"version":"N_nx4hLn5ywRXKegR20Ty7teExNvKNsO","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":370},"rootRelativePath":"assets/75a2c999-20ab-4329-86e2-42eccf33b8cd.png"},"cc5a671f-985b-43e5-8ca1-1d4f7b364b30":{"name":"Boyfriend_Idle","sourceUrl":null,"frameSize":{"x":195,"y":200},"frameCount":6,"looping":true,"frameDelay":3,"version":"V6Qi3bXxUm1GDfbqzEgd_I31MB68RRhR","loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":600},"rootRelativePath":"assets/cc5a671f-985b-43e5-8ca1-1d4f7b364b30.png"},"8d7dbda9-3658-4ee0-83d5-a326c629c2a8":{"name":"TestOpponent_Idle","sourceUrl":null,"frameSize":{"x":195,"y":200},"frameCount":6,"looping":true,"frameDelay":3,"version":"kCbrsdKpGWmMpIzvVwFHwec_Hr2K93SX","loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":600},"rootRelativePath":"assets/8d7dbda9-3658-4ee0-83d5-a326c629c2a8.png"},"b0c295c5-a75a-4c8a-88e2-4518f8bce66b":{"name":"Boyfriend_Up","sourceUrl":null,"frameSize":{"x":200,"y":185},"frameCount":3,"looping":false,"frameDelay":3,"version":"XvvRBTRAKKbCksECRmlJYL8tj5ryuM3a","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":370},"rootRelativePath":"assets/b0c295c5-a75a-4c8a-88e2-4518f8bce66b.png"},"5a87a19a-7283-4245-9cc6-bba344fc79f7":{"name":"TestOpponent_Up","sourceUrl":null,"frameSize":{"x":200,"y":185},"frameCount":3,"looping":false,"frameDelay":3,"version":"owtq.M88mdpsUJNEzaK2R4r0FDRW5wF9","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":370},"rootRelativePath":"assets/5a87a19a-7283-4245-9cc6-bba344fc79f7.png"},"e07c4196-d93d-4963-acdc-79a0e0de1d5a":{"name":"Boyfriend_Left","sourceUrl":null,"frameSize":{"x":200,"y":185},"frameCount":3,"looping":false,"frameDelay":3,"version":"IxUbl9ooqv59kVk6xYsKxUuP4npm.HfF","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":370},"rootRelativePath":"assets/e07c4196-d93d-4963-acdc-79a0e0de1d5a.png"},"69819ab9-0d27-4f29-a5de-ec9262aae26e":{"name":"TestOpponent_Right","sourceUrl":null,"frameSize":{"x":200,"y":185},"frameCount":3,"looping":false,"frameDelay":3,"version":"eGuUV7BROHV0gU2oAKN8lM35VKhXBYUg","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":370},"rootRelativePath":"assets/69819ab9-0d27-4f29-a5de-ec9262aae26e.png"},"dbd99e53-9979-45a5-b5c1-3afd0984bbe5":{"name":"Boyfriend_Down","sourceUrl":null,"frameSize":{"x":200,"y":185},"frameCount":3,"looping":false,"frameDelay":3,"version":"D_42yxFDw7b78ZbnR8IIkQ_KdbqUoKmR","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":370},"rootRelativePath":"assets/dbd99e53-9979-45a5-b5c1-3afd0984bbe5.png"},"f5b75cb3-18ef-4771-b8e5-6aeefd238801":{"name":"TestOpponent_Down","sourceUrl":null,"frameSize":{"x":200,"y":185},"frameCount":3,"looping":false,"frameDelay":3,"version":"PXDo0Nqh7omWNmuP9BBBNoWeBnPEBRcD","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":370},"rootRelativePath":"assets/f5b75cb3-18ef-4771-b8e5-6aeefd238801.png"},"17ab6bd4-96b1-4f5a-afe1-c3c278124729":{"name":"LeftTap","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":false,"frameDelay":12,"version":"g7W9V51zJc15xUBSDIehg8FHtbR9i47s","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/17ab6bd4-96b1-4f5a-afe1-c3c278124729.png"},"e068b22c-e427-430a-ae11-ec7a617d9fd2":{"name":"RightTap","sourceUrl":"assets/v3/animations/-NG-E1MFmWX-eLLttS9cf-lGEMeT7_WvZ3v9pyy5Sk4/e068b22c-e427-430a-ae11-ec7a617d9fd2.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":false,"frameDelay":4,"version":"_lBl.4ZGz646s7k2791IuJhjXIb_c_3k","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/-NG-E1MFmWX-eLLttS9cf-lGEMeT7_WvZ3v9pyy5Sk4/e068b22c-e427-430a-ae11-ec7a617d9fd2.png"},"d338a782-9d44-4ace-acfe-8fde7ed57070":{"name":"DownTap","sourceUrl":"assets/v3/animations/-NG-E1MFmWX-eLLttS9cf-lGEMeT7_WvZ3v9pyy5Sk4/d338a782-9d44-4ace-acfe-8fde7ed57070.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":false,"frameDelay":4,"version":"_S7akZot1UzIqPF6aen_Mm1wQj.YU53U","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/-NG-E1MFmWX-eLLttS9cf-lGEMeT7_WvZ3v9pyy5Sk4/d338a782-9d44-4ace-acfe-8fde7ed57070.png"},"8a9e223f-9a15-4890-b507-41f9e39ad020":{"name":"UpTap","sourceUrl":"assets/v3/animations/-NG-E1MFmWX-eLLttS9cf-lGEMeT7_WvZ3v9pyy5Sk4/8a9e223f-9a15-4890-b507-41f9e39ad020.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":false,"frameDelay":4,"version":"ca2ZLI48ZKeo9cwrFjf7FlUysjZTNGGu","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/-NG-E1MFmWX-eLLttS9cf-lGEMeT7_WvZ3v9pyy5Sk4/8a9e223f-9a15-4890-b507-41f9e39ad020.png"},"ea976e85-cf63-4892-a260-f94b8cd426f3":{"name":"huh","sourceUrl":null,"frameSize":{"x":800,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"VTHtW.W2vs7eaODxiQi_3IX8JN.ntu.Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":400},"rootRelativePath":"assets/ea976e85-cf63-4892-a260-f94b8cd426f3.png"},"0507e64d-fc69-438a-a6ff-03828b0651fa":{"name":"lady2","sourceUrl":null,"frameSize":{"x":600,"y":338},"frameCount":39,"looping":true,"frameDelay":1,"version":"meDAY7_AjCYibvHAbsR3oKEJDYbpFRcy","loadedFromSource":true,"saved":true,"sourceSize":{"x":3000,"y":2704},"rootRelativePath":"assets/0507e64d-fc69-438a-a6ff-03828b0651fa.png"},"44d8999e-352f-47c1-a8a4-05b2d1d341ff":{"name":"Perfect!!","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/44d8999e-352f-47c1-a8a4-05b2d1d341ff.png","frameSize":{"x":366,"y":138},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZFL16cn10GczazPxUVI5RFgDGp9Xi7h2","loadedFromSource":true,"saved":true,"sourceSize":{"x":366,"y":138},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/44d8999e-352f-47c1-a8a4-05b2d1d341ff.png"},"8185082b-418e-436c-b80f-c040fd550079":{"name":"Good","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/8185082b-418e-436c-b80f-c040fd550079.png","frameSize":{"x":356,"y":141},"frameCount":1,"looping":true,"frameDelay":4,"version":"QFULiDXleP6phb8HldnaOWUiN19z4pYw","loadedFromSource":true,"saved":true,"sourceSize":{"x":356,"y":141},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/8185082b-418e-436c-b80f-c040fd550079.png"},"acbe6ca0-d94e-46f3-b27e-a6280d9bf3c0":{"name":"Sick!","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/acbe6ca0-d94e-46f3-b27e-a6280d9bf3c0.png","frameSize":{"x":344,"y":138},"frameCount":1,"looping":true,"frameDelay":4,"version":"9C74YwvQtd75VKY5iUZeLp5fNXYPbyrB","loadedFromSource":true,"saved":true,"sourceSize":{"x":344,"y":138},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/acbe6ca0-d94e-46f3-b27e-a6280d9bf3c0.png"},"b5b18f12-7401-45ad-82d7-82f2dcf398ca":{"name":"Trash!","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/b5b18f12-7401-45ad-82d7-82f2dcf398ca.png","frameSize":{"x":261,"y":131},"frameCount":1,"looping":true,"frameDelay":4,"version":"eRb0ywWpvtKGX4Do_qLETHLW8KC60nQ2","loadedFromSource":true,"saved":true,"sourceSize":{"x":261,"y":131},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/b5b18f12-7401-45ad-82d7-82f2dcf398ca.png"},"c0df84c3-c9c0-4d27-a68a-c131b6a5b33f":{"name":"Bad","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/c0df84c3-c9c0-4d27-a68a-c131b6a5b33f.png","frameSize":{"x":261,"y":131},"frameCount":1,"looping":true,"frameDelay":4,"version":"C9DtXkbX1_jDJ.HIUoMv8Y_VP_J.dG_m","loadedFromSource":true,"saved":true,"sourceSize":{"x":261,"y":131},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/c0df84c3-c9c0-4d27-a68a-c131b6a5b33f.png"},"8add17f5-448e-49c0-b8ec-95b608730452":{"name":"menuBG","sourceUrl":null,"frameSize":{"x":450,"y":255},"frameCount":1,"looping":true,"frameDelay":12,"version":"giRnTBj2Ip4TMR0nGaPuPTRuCLYsKM5v","loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":255},"rootRelativePath":"assets/8add17f5-448e-49c0-b8ec-95b608730452.png"},"b2a9d65c-5dd4-4c5f-8444-c0bdfba5787e":{"name":"BlackBG","sourceUrl":null,"frameSize":{"x":450,"y":255},"frameCount":1,"looping":true,"frameDelay":12,"version":"WrJ4eIE2.NSR.OJmBPvKupLqwbMzq2QU","loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":255},"rootRelativePath":"assets/b2a9d65c-5dd4-4c5f-8444-c0bdfba5787e.png"},"c9562fc3-aded-4874-92aa-700b16162a3f":{"name":"SelectionStage","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/c9562fc3-aded-4874-92aa-700b16162a3f.png","frameSize":{"x":1280,"y":386},"frameCount":1,"looping":true,"frameDelay":4,"version":"6nbtFYJP2pdtJBXSdqwjUt2pCvFa83a5","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":386},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/c9562fc3-aded-4874-92aa-700b16162a3f.png"},"f241117a-d99b-437c-8789-9bfc3ee8b8c9":{"name":"SelectionPhilly","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/f241117a-d99b-437c-8789-9bfc3ee8b8c9.png","frameSize":{"x":1280,"y":386},"frameCount":1,"looping":true,"frameDelay":4,"version":"cEldwX5fxtHmIzxTg6gyM2OfpP.XARN.","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":386},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/f241117a-d99b-437c-8789-9bfc3ee8b8c9.png"},"c68b2014-9841-41db-ba5f-a7bec1e1941f":{"name":"SelectionLimo","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/c68b2014-9841-41db-ba5f-a7bec1e1941f.png","frameSize":{"x":1280,"y":386},"frameCount":1,"looping":true,"frameDelay":4,"version":"GggOdEclaOQYeIboFDA3in0YzKyYcnRk","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":386},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/c68b2014-9841-41db-ba5f-a7bec1e1941f.png"},"c1f07d45-e40f-40f1-8475-a6b2b8471908":{"name":"MenuTracks","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/c1f07d45-e40f-40f1-8475-a6b2b8471908.png","frameSize":{"x":200,"y":41},"frameCount":1,"looping":true,"frameDelay":4,"version":"cnwIS5TlrIp8JLX.RfkyHJ2jSqp0T52w","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":41},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/c1f07d45-e40f-40f1-8475-a6b2b8471908.png"},"56decc2b-ec39-4d42-aedb-ab370dd849b0":{"name":"Weeks","sourceUrl":null,"frameSize":{"x":443,"y":99},"frameCount":8,"looping":true,"frameDelay":12,"version":"N9NoodbzTlZPTCbZkBW0Sif41kfGQQJU","loadedFromSource":true,"saved":true,"sourceSize":{"x":443,"y":792},"rootRelativePath":"assets/56decc2b-ec39-4d42-aedb-ab370dd849b0.png"},"c06de83e-cc9f-4cb9-853c-805532b412a8":{"name":"storyArrows","sourceUrl":null,"frameSize":{"x":512,"y":128},"frameCount":2,"looping":true,"frameDelay":12,"version":"VJg8.NpPSDJOYaqz8Zz3V_eAg_UvIAqI","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":256},"rootRelativePath":"assets/c06de83e-cc9f-4cb9-853c-805532b412a8.png"},"24e31f8d-0e55-4885-af0b-86e194192bde":{"name":"Difficulties","sourceUrl":null,"frameSize":{"x":308,"y":67},"frameCount":3,"looping":true,"frameDelay":12,"version":"7DyhZj_ycm6MvJeQ_mGRCmB7rkmj1J8Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":201},"rootRelativePath":"assets/24e31f8d-0e55-4885-af0b-86e194192bde.png"},"0c6d946e-3e7c-4223-8997-520c4a3ed3e1":{"name":"SelectionSpooky","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/0c6d946e-3e7c-4223-8997-520c4a3ed3e1.png","frameSize":{"x":1280,"y":386},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZUxNc.rXI4PJBfqPvjhYiOY.YDlV5VcX","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":386},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/0c6d946e-3e7c-4223-8997-520c4a3ed3e1.png"},"e8ae8059-ac59-4a02-b8da-57feba67e3fa":{"name":"SelectionChristmas","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/e8ae8059-ac59-4a02-b8da-57feba67e3fa.png","frameSize":{"x":1280,"y":386},"frameCount":1,"looping":true,"frameDelay":4,"version":"e5xm2pmmkSf3nAIO.MRh4Bc5jjLn8M7F","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":386},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/e8ae8059-ac59-4a02-b8da-57feba67e3fa.png"},"aba23a0b-1cf1-49b6-8388-72e1e2503ae4":{"name":"SelectionSchool","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/aba23a0b-1cf1-49b6-8388-72e1e2503ae4.png","frameSize":{"x":1280,"y":386},"frameCount":1,"looping":true,"frameDelay":4,"version":"2XB3VJbP3gNJhWZG7Sf0DFaZaVDA0z24","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":386},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/aba23a0b-1cf1-49b6-8388-72e1e2503ae4.png"},"f9765cb6-691e-46e3-8f7b-ec6da456819d":{"name":"SelectionTank","sourceUrl":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/f9765cb6-691e-46e3-8f7b-ec6da456819d.png","frameSize":{"x":1280,"y":386},"frameCount":1,"looping":true,"frameDelay":4,"version":"uyLr9Kij15lx983JhNfRZgjmlTf8dH.D","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":386},"rootRelativePath":"assets/v3/animations/HDZ9FagzLA9C9mrgIqyeBX1xFr7bn18xzeCYxYSNT2Q/f9765cb6-691e-46e3-8f7b-ec6da456819d.png"},"5caa2980-a30a-46e9-9392-2db519efed20":{"name":"MenuBF","sourceUrl":null,"frameSize":{"x":1016,"y":672},"frameCount":5,"looping":true,"frameDelay":4,"version":"iw__C0WwC2ZfnSZyBXKbbZQN2nR47EXG","loadedFromSource":true,"saved":true,"sourceSize":{"x":2032,"y":2016},"rootRelativePath":"assets/5caa2980-a30a-46e9-9392-2db519efed20.png"},"d4d4ada5-c2a7-4039-a735-58d9c8fb6657":{"name":"MenuPico","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":7,"looping":true,"frameDelay":4,"version":"eaaZAFd5AQ0clc1D9b4NVcbrmdhzCIKA","loadedFromSource":true,"saved":true,"sourceSize":{"x":1536,"y":1536},"rootRelativePath":"assets/d4d4ada5-c2a7-4039-a735-58d9c8fb6657.png"},"6ec70fb2-8f4d-4173-aa69-98128bb61ad3":{"name":"MenuSkidPump","sourceUrl":null,"frameSize":{"x":1024,"y":512},"frameCount":8,"looping":true,"frameDelay":3,"version":"Z.yA9kSC7K2E51MbfHWqlWmMSNP7U8Or","loadedFromSource":true,"saved":true,"sourceSize":{"x":2048,"y":2048},"rootRelativePath":"assets/6ec70fb2-8f4d-4173-aa69-98128bb61ad3.png"},"1d7f56f0-fbac-40c0-acac-0f97f2480268":{"name":"MenuSenpai","sourceUrl":null,"frameSize":{"x":1024,"y":1024},"frameCount":5,"looping":true,"frameDelay":5,"version":"JwyyR.j96g6gGxkOlIpOduxAAhN4Oa2S","loadedFromSource":true,"saved":true,"sourceSize":{"x":2048,"y":3072},"rootRelativePath":"assets/1d7f56f0-fbac-40c0-acac-0f97f2480268.png"},"532c53ca-c366-465b-977e-37d335ce5893":{"name":"font","sourceUrl":null,"frameSize":{"x":67,"y":80},"frameCount":52,"looping":true,"frameDelay":1,"version":"xUtsiPd4dkdYcGCw8MCHxEnRD4ZX6Zb2","loadedFromSource":true,"saved":true,"sourceSize":{"x":536,"y":560},"rootRelativePath":"assets/532c53ca-c366-465b-977e-37d335ce5893.png"},"79f1665f-6db5-4063-af32-6aab70806d25":{"name":"RightTrailEnd","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/79f1665f-6db5-4063-af32-6aab70806d25.png","frameSize":{"x":75,"y":83},"frameCount":1,"looping":true,"frameDelay":4,"version":"c58HQcApWwx3ioedljty5eq49LQjoWfy","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":83},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/79f1665f-6db5-4063-af32-6aab70806d25.png"},"d22c7beb-578d-46bb-86b2-24b6f81c8c4d":{"name":"LeftTrailEnd","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/d22c7beb-578d-46bb-86b2-24b6f81c8c4d.png","frameSize":{"x":75,"y":83},"frameCount":1,"looping":true,"frameDelay":4,"version":"NXMUKXgc0qxHOYHdTpdW6l5bHZqubaI2","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":83},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/d22c7beb-578d-46bb-86b2-24b6f81c8c4d.png"},"5ffdf6c4-649c-4ff1-a0a7-c7c83068dfab":{"name":"UpTrailEnd","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/5ffdf6c4-649c-4ff1-a0a7-c7c83068dfab.png","frameSize":{"x":75,"y":83},"frameCount":1,"looping":true,"frameDelay":4,"version":"E2HqDxR8Lnx9SNIBwRIewE6K4Sdb3w8h","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":83},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/5ffdf6c4-649c-4ff1-a0a7-c7c83068dfab.png"},"46a3bd2f-d473-4b1e-be5e-fff483b2df06":{"name":"DownTrailEnd","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/46a3bd2f-d473-4b1e-be5e-fff483b2df06.png","frameSize":{"x":75,"y":83},"frameCount":1,"looping":true,"frameDelay":4,"version":"0k2qHoPMCBb0fGPH4sqDf650c97IHVmV","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":83},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/46a3bd2f-d473-4b1e-be5e-fff483b2df06.png"},"e30ee304-7ae6-40b2-a97e-aa2ba0b5386a":{"name":"RightTrail","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/e30ee304-7ae6-40b2-a97e-aa2ba0b5386a.png","frameSize":{"x":75,"y":83},"frameCount":1,"looping":true,"frameDelay":4,"version":"_kvvAd2kG.a4pKNXLAgSP_ej9QMrss0E","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":83},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/e30ee304-7ae6-40b2-a97e-aa2ba0b5386a.png"},"fdb263f0-0010-40c2-9a16-bc3ba4e5afda":{"name":"UpTrail","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/fdb263f0-0010-40c2-9a16-bc3ba4e5afda.png","frameSize":{"x":75,"y":83},"frameCount":1,"looping":true,"frameDelay":4,"version":"kHV8n2jWRW4Ll.PFEZpwhSqwtbqmnPhv","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":83},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/fdb263f0-0010-40c2-9a16-bc3ba4e5afda.png"},"180f1765-d22b-4f6a-b94a-4b9a52324be2":{"name":"DownTrail","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/180f1765-d22b-4f6a-b94a-4b9a52324be2.png","frameSize":{"x":75,"y":83},"frameCount":1,"looping":true,"frameDelay":4,"version":"6M6V4q8qQxWq7VBWXEGvw1oRX1ZlsDyw","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":83},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/180f1765-d22b-4f6a-b94a-4b9a52324be2.png"},"8343054a-d3fc-4c2b-87e4-163366d42389":{"name":"LeftTrail","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/8343054a-d3fc-4c2b-87e4-163366d42389.png","frameSize":{"x":75,"y":83},"frameCount":1,"looping":true,"frameDelay":4,"version":"hXHi12UPfdFQGrqtYCmJrOz3eASBg.LH","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":83},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/8343054a-d3fc-4c2b-87e4-163366d42389.png"},"b1cc9759-2338-43b8-903c-ac187c9b6f66":{"name":"Background_1","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/b1cc9759-2338-43b8-903c-ac187c9b6f66.png","frameSize":{"x":304,"y":166},"frameCount":1,"looping":true,"frameDelay":4,"version":"RHsiz6ekHsuUxL0ugNcDeSIHjHh0.IfH","loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":166},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/b1cc9759-2338-43b8-903c-ac187c9b6f66.png"},"5ba087ae-352e-4d45-8875-aac969a8f939":{"name":"Dad_Idle","sourceUrl":null,"frameSize":{"x":88,"y":157},"frameCount":14,"looping":true,"frameDelay":2,"version":"uAyK.KrMdFNUSXzqeZNf5CHhMuOqRF7B","loadedFromSource":true,"saved":true,"sourceSize":{"x":440,"y":471},"rootRelativePath":"assets/5ba087ae-352e-4d45-8875-aac969a8f939.png"},"ebcd85ab-4372-47be-b778-e2422b9ad23e":{"name":"Dad_Right","sourceUrl":null,"frameSize":{"x":88,"y":184},"frameCount":5,"looping":false,"frameDelay":12,"version":"l_Q3sph4sDaoxSdMXLdvq5kmSCAwBGX8","loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/ebcd85ab-4372-47be-b778-e2422b9ad23e.png"},"7f79dbdd-9125-40bd-a0e2-9e34bc66c143":{"name":"Dad_Down","sourceUrl":null,"frameSize":{"x":118,"y":185},"frameCount":3,"looping":false,"frameDelay":3,"version":"gXq_NTHMjHFyc.HvbLK2e8TDWQiSZDFI","loadedFromSource":true,"saved":true,"sourceSize":{"x":236,"y":370},"rootRelativePath":"assets/7f79dbdd-9125-40bd-a0e2-9e34bc66c143.png"},"9764e9d4-c91c-404f-83af-a164206b8df4":{"name":"Dad_Left","sourceUrl":null,"frameSize":{"x":108,"y":184},"frameCount":18,"looping":false,"frameDelay":1,"version":"ROy9H7BRawz32YzlzLZNoIatqDQwFpzC","loadedFromSource":true,"saved":true,"sourceSize":{"x":648,"y":552},"rootRelativePath":"assets/9764e9d4-c91c-404f-83af-a164206b8df4.png"},"9f102095-b090-4c5d-bd50-6afd005d3b7d":{"name":"Dad_Up","sourceUrl":null,"frameSize":{"x":92,"y":184},"frameCount":5,"looping":false,"frameDelay":1,"version":"F3ITwz2NYVpabGo1WGu.SF.3uwzdZIxa","loadedFromSource":true,"saved":true,"sourceSize":{"x":276,"y":368},"rootRelativePath":"assets/9f102095-b090-4c5d-bd50-6afd005d3b7d.png"},"db05cb43-e4fe-477a-a6f9-911aaa741ca6":{"name":"Pico_Idle","sourceUrl":null,"frameSize":{"x":162,"y":170},"frameCount":14,"looping":true,"frameDelay":2,"version":"m339Mzt_a3fShFY.KeambqqR6ve_XrWN","loadedFromSource":true,"saved":true,"sourceSize":{"x":648,"y":680},"rootRelativePath":"assets/db05cb43-e4fe-477a-a6f9-911aaa741ca6.png"},"77a716d5-9e37-4fb7-a535-49e0ea662684":{"name":"Pico_Down","sourceUrl":null,"frameSize":{"x":185,"y":143},"frameCount":11,"looping":false,"frameDelay":1,"version":"uJVz5hOT7.C5nBH7dadW9oITy1nvjQEd","loadedFromSource":true,"saved":true,"sourceSize":{"x":555,"y":572},"rootRelativePath":"assets/77a716d5-9e37-4fb7-a535-49e0ea662684.png"},"267bb7e4-34bf-450a-b802-7e66636904f0":{"name":"Pico_Left","sourceUrl":null,"frameSize":{"x":181,"y":185},"frameCount":17,"looping":false,"frameDelay":1,"version":"hkrenDwqB09zmC8wAVSq4yT.E.lsrgoZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":724,"y":925},"rootRelativePath":"assets/267bb7e4-34bf-450a-b802-7e66636904f0.png"},"8965e889-c0fb-4063-877e-81d9de27580e":{"name":"Pico_Up","sourceUrl":null,"frameSize":{"x":162,"y":185},"frameCount":14,"looping":false,"frameDelay":1,"version":"AwNrUxLZH0fLmDABJWOHQDVB0vCgM30O","loadedFromSource":true,"saved":true,"sourceSize":{"x":648,"y":740},"rootRelativePath":"assets/8965e889-c0fb-4063-877e-81d9de27580e.png"},"f8232b9d-75c7-4d10-a513-d82681f617b6":{"name":"Pico_Right","sourceUrl":null,"frameSize":{"x":179,"y":185},"frameCount":17,"looping":false,"frameDelay":1,"version":"hpqRrK5kQeOaTJMTFI1wquMJRYmlgq3A","loadedFromSource":true,"saved":true,"sourceSize":{"x":716,"y":925},"rootRelativePath":"assets/f8232b9d-75c7-4d10-a513-d82681f617b6.png"},"9adb0ee8-2c71-4fdf-a41b-fe2078c5a97f":{"name":"storyMode","sourceUrl":null,"frameSize":{"x":645,"y":136},"frameCount":3,"looping":true,"frameDelay":3,"version":"MDD4Th5PtHizs9po1PPRP44.FDMG.jPU","loadedFromSource":true,"saved":true,"sourceSize":{"x":645,"y":408},"rootRelativePath":"assets/9adb0ee8-2c71-4fdf-a41b-fe2078c5a97f.png"},"72e19f79-b0c5-4ce3-bed7-7542353c60bd":{"name":"selected_storyMode","sourceUrl":null,"frameSize":{"x":810,"y":215},"frameCount":3,"looping":true,"frameDelay":3,"version":"BPcThrkhS3g8o1l9nrMme4uKhbd1DaPk","loadedFromSource":true,"saved":true,"sourceSize":{"x":810,"y":645},"rootRelativePath":"assets/72e19f79-b0c5-4ce3-bed7-7542353c60bd.png"},"e4617e39-f8f0-440c-9b54-73e82f87aa9e":{"name":"freePlay","sourceUrl":null,"frameSize":{"x":645,"y":125},"frameCount":1,"looping":true,"frameDelay":12,"version":"OL4Gw1UAQ9ZE.qbAM4YtMcMVjfRjoscb","loadedFromSource":true,"saved":true,"sourceSize":{"x":645,"y":125},"rootRelativePath":"assets/e4617e39-f8f0-440c-9b54-73e82f87aa9e.png"},"71ec74d4-96d6-4ad7-beb6-8c16994f703d":{"name":"selected_freePlay","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/71ec74d4-96d6-4ad7-beb6-8c16994f703d.png","frameSize":{"x":695,"y":211},"frameCount":1,"looping":true,"frameDelay":4,"version":"qnoBwUeMmf00KcUuhaUfYHsD83y8yZ30","loadedFromSource":true,"saved":true,"sourceSize":{"x":695,"y":211},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/71ec74d4-96d6-4ad7-beb6-8c16994f703d.png"},"f1e904e8-4ddb-4c8b-9a86-ab5921e977cb":{"name":"Spooky_Idle","sourceUrl":null,"frameSize":{"x":150,"y":167},"frameCount":16,"looping":true,"frameDelay":2,"version":"hZyo55ZMMPjgSt.2QAkDa9UQCesb.pfk","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":668},"rootRelativePath":"assets/f1e904e8-4ddb-4c8b-9a86-ab5921e977cb.png"},"c38e1834-7eea-4933-b94f-d272c2251c12":{"name":"Spooky_Right","sourceUrl":null,"frameSize":{"x":185,"y":174},"frameCount":15,"looping":false,"frameDelay":1,"version":"Y0bQb59csw8NWexrUqWYBBVlSc5OGjR_","loadedFromSource":true,"saved":true,"sourceSize":{"x":740,"y":696},"rootRelativePath":"assets/c38e1834-7eea-4933-b94f-d272c2251c12.png"},"307ddf8f-a50b-40cf-9743-13e140e98238":{"name":"Spooky_Down","sourceUrl":null,"frameSize":{"x":185,"y":164},"frameCount":25,"looping":false,"frameDelay":1,"version":"RuPYdQkcH_ZvPMqPD.FMENJyLTirDFWW","loadedFromSource":true,"saved":true,"sourceSize":{"x":925,"y":820},"rootRelativePath":"assets/307ddf8f-a50b-40cf-9743-13e140e98238.png"},"9714b687-6068-41c8-bcee-185e6e89c714":{"name":"Spooky_Up","sourceUrl":null,"frameSize":{"x":131,"y":185},"frameCount":5,"looping":false,"frameDelay":1,"version":"5QaMDFFewmnkr3D5qnvVPrzQpKyYg_EN","loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":370},"rootRelativePath":"assets/9714b687-6068-41c8-bcee-185e6e89c714.png"},"8e6b2711-9801-4a1f-89b0-7f5eccb6009b":{"name":"Spooky_Left","sourceUrl":null,"frameSize":{"x":153,"y":185},"frameCount":25,"looping":false,"frameDelay":1,"version":"KL2E46shk6vI9759i._aHQvjfNKQDnNL","loadedFromSource":true,"saved":true,"sourceSize":{"x":765,"y":925},"rootRelativePath":"assets/8e6b2711-9801-4a1f-89b0-7f5eccb6009b.png"},"7df185d2-46db-400d-961d-b78a99932e99":{"name":"Background_2","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/7df185d2-46db-400d-961d-b78a99932e99.png","frameSize":{"x":326,"y":154},"frameCount":1,"looping":true,"frameDelay":4,"version":"ddWnr8GN2YikCCb6CjWEa5ZrxcTyW40a","loadedFromSource":true,"saved":true,"sourceSize":{"x":326,"y":154},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/7df185d2-46db-400d-961d-b78a99932e99.png"},"44fed503-7c07-459c-8bcc-fc240e67e582":{"name":"Background_3","sourceUrl":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/44fed503-7c07-459c-8bcc-fc240e67e582.png","frameSize":{"x":297,"y":169},"frameCount":1,"looping":true,"frameDelay":4,"version":"sdbyxOyV0_H5exLUSiS1UkEDCuoMU5oZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":297,"y":169},"rootRelativePath":"assets/v3/animations/NPA_Xf8t7Vw2rhDz42hPvSzKbB1Tpye09Gu_88agOAM/44fed503-7c07-459c-8bcc-fc240e67e582.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//prompt("Hello! this game is in really early development. like i started making this 2 days ago lol so please dont insult me on my bad coding cuz i have barely started yet. 500 code lines is dogwater for a project like this, i know\n\nAnyways, this is made by monsteryt, dont try remixing this because it will say that its a remix! and dont try viewing the code trying to change ur achievements cuz they dont even work yet.\n\nMade by MonsterYT-DaGamer\nDedicated to: Colack, INTERNECION, [WUT] Adam, NewPlayer687, josetheidiot, Chubz, PopI, GG_ and Redandsoggy for supporting me and/or just being a good friend (;\n\nDiscord: https://discord.gg/HYJyfPx9\nForums: gamelab.freeflarum.com");
showMobileControls(true, true, true, false);
World.frameRate = 40;
function Note(ms, type, duration, side, hold) {
  this.noteTime = ms;
  this.noteType = type;
  this.duration = (duration);
  this.side = side;
  this.hold = (hold > 0);
}
function NoteSplash(arrow, anim) {
  var splash = createSprite(arrow.x, arrow.y);
  splash.setAnimation(anim);
  splash.scale = (arrow.scale * 1.25);
  Splashes.push({sprite: splash, arr: arrow});
  setTimeout(function() {
    var index = Splashes.indexOf(splash);
    if (index > -1) {
      Splashes.splice(index, 1);
    }
    splash.destroy();
    splash = undefined;
    delete(splash);
  }, 300);
}
function drawSplashes() {
  for (var i = 0; i < Splashes.length; i++) {
    var current = Splashes[i];
    if (current !== undefined) {
      var spr = current.sprite;
      var arr = current.arr;
      if (spr !== undefined && arr !== undefined) {
        spr.position = arr.position;
        spr.display();
      }
    }
  }
}
function Stay(num) {
  return (num + (camera.x - 200));
}
function Switch(side, ms) {
  this.Side = side;
  this.ms = ms;
}
function Translate(chart) {
  var finished = [];
  var events = [];
  events.push(new Switch("BF", inf));
  var notes = chart.song.notes;
  var bpm = chart.song.bpm;
  
  for(var s = 0; s < notes.length; s++) {
    var section = notes[s];
    for(var n = 0; n < (section.sectionNotes).length; n++) {
      
      var dnote = section.sectionNotes[n];
      
      if (dnote === []) {continue;}
      
      var note = [dnote[0], dnote[1]];
      var opponent = section.mustHitSection;
      var holdnote = 0;

      if (dnote[1] > 3) {
        opponent = !opponent;
      }

      if (dnote[2] > 0) {
        holdnote = dnote[2];
      }

      if (opponent===true) {opponent="BF"}
      if (opponent===false) {opponent="OPPONENT"}

      note = new Note(dnote[0], dnote[1], dnote[2], opponent, holdnote);
      
      if (events[n-1] !== undefined) {
        var prevEvent = events[n-1];
        if (prevEvent.Side !== opponent) {
          events.push(new Switch(opponent, dnote[0]));
        }
      }

      finished.push(note);
    }
  }
  return [finished, events, bpm];
}
function SaveAchievements() {
  setKeyValue("Achievements_" + id, Achievements);
}
var Character = (function() {
  function Character(Anims, Position, Side, camPos, scale) {
    var c = "Idle";
    var spr = createSprite(Position[0], Position[1]);
    spr.setAnimation(Anims.Idle);
    this.Anims = Anims;
    this.Side = Side;
    this.CurrentAnim = c;
    this.Position = Position;
    this.Sprite = spr;
    this.CamPos = camPos
    spr.scale = scale;
    this.PlayAnimation = function(animation) {
      spr.setAnimation(Anims[animation]);
      c = animation;
      setTimeout(function() {
        if (c === animation) {
          spr.setAnimation(Anims.Idle);
        }
      }, 300 / delta);
    };
  }
  return Character;
}());
function MenuSelection() {
  storyMode.scale = 0.45;
  storyMode.display();
  switch (menuSelected) {
    case "storyMode":
      storyMode.setAnimation("selected_storyMode");
      
      if (keyWentDown(ENTER) || keyWentDown("space")) {
        menuSelected = null;
        playSound("assets/confirmMenu.mp3");
        
        var intev = setInterval(function() {
          camera.zoom += 0.05;
        }, 10);
        
        setTimeout(function() {
          camera.zoom = 1;
          state = "WEEKSELECTION";
          menuSelected = "storyMode";
          clearInterval(intev);
        }, 1000);
      }
      break;
  }
  
  if (window[eval(menuSelected)] !== undefined) {
    camera.x += (eval(menuSelected).x-camera.x)/5;
    camera.y += (eval(menuSelected).y-camera.y)/5;
  }
}
function WeekSelection() {
  var selects = ['Stage', 'Spooky', 'Philly', 'Limo', 'Christmas', 'Tank'];
  
  SelectionWeek.setAnimation("Selection" + selects[weekSelected-1]);
  Weeks.setFrame(weekSelected);
  
  if (keyDown("down")) {
    storyArrowDown.setFrame(1);
  } else {
    storyArrowDown.setFrame(0);
  }
  
  if (keyDown("up")) {
    storyArrowUp.setFrame(1);
  } else {
    storyArrowUp.setFrame(0);
  }
  
  if (keyWentDown("up")) {
    if (weekSelected === 1) {
      weekSelected = 6;
    } else {
      weekSelected--;
    }
    playSound("assets/scrollMenu.mp3");
  }
  
  if (keyWentDown("down")) {
    if (weekSelected === 6) {
      weekSelected = 1;
    } else {
      weekSelected++;
    }
    playSound("assets/scrollMenu.mp3");
  }
  
  if ((keyWentDown(ENTER) || keyWentDown("space"))) {
    PlayWeek(WEEKS[weekSelected]);
  }
}
function CamBeat(intensity) {
  var i = 0;
  var m = intensity;
  
  var In = setInterval(function() {
    if (i >= m) {
      out();
      clearInterval(In);
    } else {
      i += 0.01;
      camera.zoom = (1 + i);
    }
  }, 7.5);
  
  function out() {
    var Out = setInterval(function() {
      if (camera.zoom <= 1) {
        camera.zoom = 1;
        clearInterval(Out);
        return;
      }
      camera.zoom -= 0.05;
    }, 35);
  }
}
var A_Config = (function() {
  getKeyValue("Achievements_" + id, function(rec) {
    if (rec === undefined || rec === {}) {
      rec = {
        TheBeginning: {
          title: "the beginning",
          desc: "Beat Week 1 on Hard without Missing",
          done: false
        },
        NoMoreTricks: {
          title: "no more tricks",
          desc: "Beat Week 2 on Hard without Missing",
          done: false
        },
        CallMeTheHitman: {
          title: "call me the hitman",
          desc: "Beat Week 3 on Hard without Missing",
          done: false
        },
        LadyKiller: {
          title: "call me the hitman",
          desc: "Beat Week 4 on Hard without Missing",
          done: false
        },
        MisslessChristmas: {
          title: "missless christmas",
          desc: "Beat Week 5 on Hard without Missing",
          done: false
        },
        Highscore: {
          title: "highscore",
          desc: "Beat Week 6 on Hard without Missing",
          done: false
        },
        WhataFunkinDisaster: {
          title: "what a funkin disaster",
          desc: "Die in a song",
          done: false
        },
        Oversinger: {
          title: "oversinger",
          desc: "Hold a note for over 10 seconds",
          done: false
        },
        TheEnd: {
          title: "the end",
          desc: "Beat every week",
          done: false
        },
        RapGod: {
          title: "rap god",
          desc: "BEAT EVERY WEEK WITH ALL PERFECTS",
          done: false
        },
      };
    }
    
    Achievements = rec;
    setKeyValue("Achievements_" + id, rec);
  });
  
  return A_Config;
});

var S_Config = (function() {
  function S_Config(SafeFrames, Scrollspeed, NoteSplashes, FPSCounter, NoteGlow, OnlyInst, OnlyVocals, Middlescroll, Downscroll, Keybinds, SecondaryBinds) {
    // Notes \\
    this.SafeFrames = SafeFrames || 10;
    this.Scrollspeed = Scrollspeed || 1;
    
    // Graphics \\
    this.NoteSplashes = NoteSplashes !== undefined ? NoteSplashes : true;
    this.FPSCounter = !(!FPSCounter);
    this.NoteGlow = NoteGlow !== undefined ? NoteGlow : true;
    
    // Music \\
    this.OnlyInst = !!OnlyInst;
    this.OnlyVocals = !!OnlyVocals;
    
    // Gameplay \\
    this.Middlescroll = Middlescroll !== undefined ? Middlescroll : false;
    this.Downscroll = !!Downscroll;
    this.Keybinds = Keybinds || ["A", "S", "K", "L"];
    this.SecondaryBinds = SecondaryBinds || ["LEFT", "DOWN", "UP", "RIGHT"];
  }
  S_Config.prototype.Notes = function(SafeFrames, Scrollspeed) {
    this.SafeFrames = SafeFrames !== undefined ? SafeFrames : this.SafeFrames;
    this.Scrollspeed = Scrollspeed !== undefined ? Scrollspeed : this.Scrollspeed;
  };
  S_Config.prototype.Graphics = function(NoteSplashes, FPSCounter, NoteGlow) {
    this.NoteSplashes = NoteSplashes !== undefined ? NoteSplashes : this.NoteSplashes;
    this.FPSCounter = FPSCounter !== undefined ? FPSCounter : this.FPSCounter;
    this.NoteGlow = NoteGlow !== undefined ? NoteGlow : this.NoteGlow;
  };
  S_Config.prototype.Gameplay = function(Middlescroll, Downscroll, Keybinds, SecondaryBinds) {
    this.Middlescroll = Middlescroll !== undefined ? Middlescroll : this.Middlescroll;
    this.Downscroll = Downscroll !== undefined ? Downscroll : this.Downscroll;
    this.Keybinds = Keybinds !== undefined ? Keybinds : this.Keybinds;
    this.SecondaryBinds = SecondaryBinds !== undefined ? SecondaryBinds : this.SecondaryBinds;
  };
  return S_Config;
}());
function drawArrows() {
  var dc = (Settings.Downscroll ? 325 : 75);
  
  arrows.Left.x = lanes.BF[0];
  arrows.Down.x = lanes.BF[1];
  arrows.Up.x = lanes.BF[2];
  arrows.Right.x = lanes.BF[3];
  
  arrows.Left.y = dc;
  arrows.Down.y = dc;
  arrows.Up.y = dc;
  arrows.Right.y = dc;
  
  arrows.OpponentLeft.x = lanes.OPPONENT[0];
  arrows.OpponentDown.x = lanes.OPPONENT[1];
  arrows.OpponentUp.x = lanes.OPPONENT[2];
  arrows.OpponentRight.x = lanes.OPPONENT[3];
  
  arrows.OpponentLeft.y = dc;
  arrows.OpponentDown.y = dc;
  arrows.OpponentUp.y = dc;
  arrows.OpponentRight.y = dc;
  
  for (var ar in arrows) {
    var opponent = false;
    if (ar.includes("Anim")) {continue}
    if (ar.includes("Opponent")) {opponent = true}
    
    var current = arrows[ar];
    var anim = (arrows[ar + "Anim"]);
    
    if (current !== undefined && anim !== undefined) {
      current.setAnimation(anim);
      current.scale = 0.25;
      current.display();
    }
  }
}
function drawNotes() {
  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];
    
    if (note !== undefined && note !== null) {
      note.sprite.x = lanes[note.side][note.lane];
      note.sprite.display();
      if (Settings.Downscroll === false) {
        if (note.sprite.y <= -55) {
          note.miss();
        } 
      } else {
        if (note.sprite.y >= 455) {
          note.miss();
        }
      }
    }
  }
}
function drawTrails() {
  for (var t = 0; t < holdNotes.length; t++) {
    var trail = holdNotes[t];
    
    if (trail !== undefined && trail !== null) {
      trail.sprite.x = lanes[trail.side][trail.lane];
      trail.sprite.display();
      if (Settings.Downscroll === false) {
        if (trail.sprite.y <= -55) {
          trail.miss();
        }
      } else {
        if (trail.sprite.y >= 455) {
          trail.miss();
        }
      }
    }
  }
}
function MoveCam(X, Y, speed) {/*
 movingCam = true;
 var move = timedLoop((1 / speed), function() {
   if (camera.x !== X) {
     if (camera.x > X) {
       camera.x--;
     } else {
       camera.x++;
     }
   }
   if (camera.y !== Y) {
     if (camera.y > Y) {
       camera.y--;
     } else {
       camera.y++;
     }
   }
   
   if (camera.x === X && camera.y === Y) {
     movingCam = false;
     stopTimedLoop(move);
   }
 });*/
}
function drawBackground() {
  if (Background !== 0 && Background.display !== undefined) {
    Background.display();
  }
}
function drawRatings() {
  for (var i = 0; i < ratingPops.length; i++) {
    var current = ratingPops[i];
    if (current !== undefined) {
      current.sprite.display();
      
      if (current.gravity === undefined || typeof current.gravity !== "number") {
        current.gravity = 1;
      }
      
      current.sprite.x = Stay(200);
      current.sprite.y = current.y;
      
      if (current.sprite.y < 100) {
        current.sprite.x = Stay(200);
        current.sprite.y = 200;
      }
      
      if (current.y > (400+current.sprite.height)) {
        ratingPops.shift();
        current.sprite.destroy();
      } else {
        current.gravity+=0.5;
        current.y+=current.gravity;
      }
    }
  }
  if (ratingPops.length > 10) {
    for (var i = 0; i < ratingPops.length; i++) {
      ratingPops[i].sprite.destroy();
      ratingPops[i] = undefined;
      delete(ratingPops[i]);
      ratingPops.shift();
    }
  }
}
function judgement(arrowy, notey) {
  for (var i = 0; i < hitWindow.length; i++) {
    var min = (arrowy + hitWindow[i][0]);
    var max = (arrowy + hitWindow[i][1]);
    //console.log(notey);
    if (i === 0) {
      if (notey >= (min - (Settings.Scrollspeed/5)) && notey <= (max + (Settings.Scrollspeed/5))) {
        return [hitWindow[i][2], hitWindow[i][3]];
      }
    } else {
      if (notey >= (min - Settings.Scrollspeed) && notey <= (max + Settings.Scrollspeed)) {
        return [hitWindow[i][2], hitWindow[i][3]];
      }
    }
  }
}
function PlayChart(chart) {
  setTimeout(function() {
    if (chart === undefined) {
      state = "MENU";
      console.log("PlayChart - Chart not detected or chart is in wrong format. Please make sure the chart is an OBJECT {} and put it back into this function's Parameters!");
      return;
    }
  }, 250);
  var anims = [
    "LeftNote", "DownNote", "UpNote", "RightNote",
    "LeftNote", "DownNote", "UpNote", "RightNote",
  ];
  var holdAnims = [
    "LeftTrail", "DownTrail", "UpTrail", "RightTrail",
    "LeftTrail", "DownTrail", "UpTrail", "RightTrail",
  ];
  var glows = [
    "LeftGlow", "DownGlow", "UpGlow", "RightGlow",
    "LeftGlow", "DownGlow", "UpGlow", "RightGlow",
  ];
  var str = [
    "Left", "Down", "Up", "Right",
    "Left", "Down", "Up", "Right",
  ];
  
  function SpeedCode(number) {
    var speedCode = (number - (5320 / (Settings.Scrollspeed)));
    return speedCode;
  }
  
  function CreateNote(n,an) {
    var dc = (Settings.Downscroll ? 0 : 400);
    var no = {
        sprite: createSprite(200, dc),
        lane: n.noteType,
        anim: an,
        glow: glows[n.noteType],
        strType: str[n.noteType],
        side: n.side,
        arrow: arrows.OpponentLeft,
      };
      no.miss = function() {
        var index = notes.indexOf(no);
        if (index > -1) {
          notes.splice(index, 1);
          currentStats.Misses++;
          currentStats.Score -= 50;
        }
      };
      no.hit = function(arrow, note) {
        var index = notes.indexOf(no);
        if (index > -1) {
          var judg = judgement(arrow.y, note.y);
          if ((judg !== null && judg !== undefined)) {
            currentStats.Score += judg[1];
            if (judg[1] < 0) {
              currentStats.Misses++;
            }
            notes.splice(index, 1);
            no.sprite.destroy();
            no = undefined;
            delete(no);
            
            var rate = judg[0];
            
            switch (rate) {
              case "Perfect!!":
                currentStats.Hits += 1;
                break;
              case "Sick!":
                currentStats.Hits += 1;
                break;
              case "Good":
                currentStats.Hits += 0.5;
                break;
              case "Bad":
                currentStats.Hits += 0.25;
                break;
              case "Trash!":
                currentStats.Hits += 0.1;
                break;
            }
            
            return judg[0];
          }
        }
      };
      return no;
  }
  
  function SendNote(n) {
    setTimeout(function() {
      if (state !== "SONG") {notes = []; return}
      var an = anims[n.noteType];
      var not = CreateNote(n, an);
      var veloc = (Settings.Downscroll ? (Settings.Scrollspeed * 2) : (0 - (Settings.Scrollspeed * 2)));
      not.sprite.velocityY = veloc;
      not.sprite.setAnimation(not.anim);
      not.sprite.scale = 0.25;
      notes.push(not);
      if (n.hold === true && n.duration > 0) {
        var dur = Math.round((n.duration * (Settings.Scrollspeed/2)) / 100);
        for (var i = 1; i < dur; i++) {
          var current = (i * 10);
          var editednote = CreateNote(n, an);
          if (Settings.Downscroll === true) {
            editednote.sprite.y -= current;
            editednote.sprite.rotation = 180;
          } else {
            editednote.sprite.y += current;
          }
          editednote.sprite.velocityY = veloc;
          var animz = holdAnims[n.noteType];
          if (i >= (dur-1)) {
            animz += "End";
          }
          editednote.sprite.setAnimation(animz);
          editednote.sprite.scale = 0.25;
          holdNotes.push(editednote);
        }
      }
    }, SpeedCode(n.noteTime));
  }
  
  for (var i = 0; i < chart.length; i++) {
    if (state !== "SONG" && state !== "WEEKSELECTION") {
      break;
    }
    if (chart[i] !== null && chart[i] !== undefined) {
      var c = chart[i];
      SendNote(c);
    }
  }
}
function PlayEvents(events) {
  
}
function OpponentNotes() {
  if (notes === []) {
    return;
  }
  
  function glowie(not) {
    arrows["Opponent"+not.strType+"Anim"] = ((not.strType).replace(/Opponent/g,"") + "Glow");
    setTimeout(function() {
      arrows["Opponent"+not.strType+"Anim"] = ((not.strType).replace(/Opponent/g,"") + "Arrow");
    }, 300);
  }
  
  for (var i = 0; i < notes.length; i++) {
    var not = notes[i];
    if ((not !== undefined && not !== null) && not.side === "OPPONENT") {
      var dista = ((8 + (Settings.Scrollspeed*1.5)) + (notes.length*0.75));
      var args = ((not.sprite.y) > (arrows.OpponentLeft.y - dista) && (not.sprite.y) < (arrows.OpponentLeft.y + dista));
      if (args) {
        var index = notes.indexOf(not);
        if (index > -1) {
          Opponent.PlayAnimation(not.strType);
          notes.splice(index, 1);
          delete(hnot);
          glowie(not);
        }
      }
    }
  }
  
  for (var h = 0; h < holdNotes.length; h++) {
    var hnot = holdNotes[h];
    if ((hnot !== undefined && hnot !== null) && hnot.side === "OPPONENT") {
      var distan = (((Settings.Scrollspeed*2.5)) + (notes.length*0.75));
      var argument = ((hnot.sprite.y) > (arrows.OpponentLeft.y - distan) && (hnot.sprite.y) < (arrows.OpponentLeft.y + distan));
      if (argument) {
        var ind3x = holdNotes.indexOf(hnot);
        if (ind3x > -1) {
          Opponent.PlayAnimation(hnot.strType);
          holdNotes.splice(ind3x, 1);
          delete(hnot);
          glowie(hnot);
        }
      }
    }
  }
}
function drawCharacters() {
  if (Player.Sprite !== undefined && Player.Sprite !== null) {
    Player.Sprite.display();
  }
  if (Opponent.Sprite !== undefined && Opponent.Sprite !== null) {
    Opponent.Sprite.display();
  }
}

function findNote(lane, arr, type) {
  for (var i = 0; i < type.length; i++) {
    var not = type[i];
    if (not !== undefined) {
      if (not.side === "BF") {
        if (not.lane === lane || not.lane === (lane + 4)) {
          if ((not.sprite).isTouching(arr)) {
            return not;
          }
        }
      }
    }
  }
}

function findTrail(lane, arr, type) {
  for (var i = 0; i < type.length; i++) {
    var not = type[i];
    if (not !== undefined) {
      if (not.side === "BF") {
        if (not.lane === lane || not.lane === (lane + 4)) {
          if (not.sprite.position.y >= (arr.y - ((Settings.Scrollspeed * 2.5))) && not.sprite.position.y <= (arr.y + ((Settings.Scrollspeed * 2.5)))) {
            return not;
          }
        }
      }
    }
  }
}

function UpdateInput(lane, arrow, type) {
  var args;
  if (type !== undefined || type === notes) {
    args = keyWentDown(Settings.Keybinds[lane]) || keyWentDown(Settings.SecondaryBinds[lane]);
  } else if (type === holdNotes) {
    args = keyDown(Settings.Keybinds[lane]) || keyDown(Settings.SecondaryBinds[lane]);
  }
  if (args) {
    var note = findNote(lane, arrows[arrow], type);
    if (note !== undefined && typeof note === "object") {
      var rating = note.hit(arrows[arrow], note.sprite);
      var showRating = new window.ratingPop(rating);
      if (showRating !== "noRating?" && type.indexOf(note) < 0) {
        arrows[arrow + "Anim"] = (arrow + "Glow");
        Player.PlayAnimation(arrow);
        if (rating === "Sick!" || rating === "Perfect!!") {
          NoteSplash(arrows[arrow], (arrow + "Splash"));
        }
      } else {
        if (type !== holdNotes) {
          arrows[arrow + "Anim"] = (arrow + "Tap");
        }
      }
    } else {
      if (type !== holdNotes) {
        arrows[arrow + "Anim"] = (arrow + "Tap");
      }
    }
  }

  if (keyWentUp(Settings.Keybinds[lane]) || keyWentUp(Settings.SecondaryBinds[lane])) {
    arrows[arrow + "Anim"] = (arrow + "Arrow");
  }

  if (keyDown(Settings.Keybinds[lane]) || keyDown(Settings.SecondaryBinds[lane])) {
    var trail = findTrail(lane, arrows[arrow], holdNotes);
    if (trail !== undefined) {
      var ind3x = holdNotes.indexOf(trail);
      if (ind3x > -1) {
        holdNotes.splice(ind3x, 1);
        trail.sprite.destroy();
        trail.sprite = undefined;
        delete(trail.sprite);
        if (holdNotes.indexOf(trail) < 0) {
          arrows[arrow + "Anim"] = (arrow + "Glow");
          Player.PlayAnimation(arrow);
        }
      }
    }
  }
}

function NoteInputs() {
  UpdateInput(0, "Left", notes);
  UpdateInput(1, "Down", notes);
  UpdateInput(2, "Up", notes);
  UpdateInput(3, "Right", notes);
}
function SyncLanes() {
  lanes = {
    "BF": [Stay(35), Stay(75), Stay(115), Stay(155), Stay(35), Stay(75), Stay(115), Stay(155)],
    "OPPONENT": [Stay(240), Stay(280), Stay(320), Stay(360), Stay(240), Stay(280), Stay(320), Stay(360)],
  };
  /*
  var dc = (Settings.Downscroll ? 325 : 75);
  arrows.Left = createSprite(lanes.BF[0], dc);
  arrows.Down = createSprite(lanes.BF[1], dc);
  arrows.Up = createSprite(lanes.BF[2], dc);
  arrows.Right = createSprite(lanes.BF[3], dc);
  arrows.OpponentLeft = createSprite(lanes.OPPONENT[0], dc);
  arrows.OpponentDown = createSprite(lanes.OPPONENT[1], dc);
  arrows.OpponentUp = createSprite(lanes.OPPONENT[2], dc);
  arrows.OpponentRight = createSprite(lanes.OPPONENT[3], dc);
  */
}
function preloadSongs() {
  for (var _ in Songs) {
    var current = Songs[_];
    if (current.Inst !== undefined && current.Vocals !== undefined) {
      preload(current.Inst);
      preload(current.Vocals);
    }
  }
  loaded.preloadedSongs = true;
}
function checkLoaded() {
  if (loaded.variables && loaded.preloadedSongs) {
    state = "MENU";
    Settings.Scrollspeed *= 3;
    playSound("assets/freakyMenu.mp3", true);
  } else {
    (new window.Text("LOADING", 200, 200, 1)).display();
  }
}
function PlayBPM(beats) {
  var minute = 60000;
  var beatperminute = (minute / (beats / 1.5));
  
  var beat = timedLoop(beatperminute, function() {
    if (state !== "SONG") {
      stopTimedLoop(beat);
      return;
    }
    
    CamBeat(0.02);
  });
}
function PlaySong(data) {
  if (Settings.Scrollspeed > 1 && Settings.Scrollspeed !== (data.speed*2)) {
  } else {
    Settings.Scrollspeed = (data.speed*2);
  }
  currentStats.Reset();
  song = data.name;
  Player = data.player;
  Opponent = data.opponent;
  
  playSound(data.Inst);
  
  playSound(data.Vocals);
  PlayChart(data.song[0]);
  PlayEvents(data.song[1]);
  if (data.camEFX == true) {
    PlayBPM(data.song[2]);
  }
  state = "SONG";
  setTimeout(function() {
    var bg = data.background;
    var spr = createSprite((200+bg.offset[0]), (200+bg.offset[1]));
    spr.setAnimation(bg.spriteName);
    spr.scale = bg.scale;
    Background = spr;
    camera.x = 200;
    camera.y = 200;
    stopSound("assets/freakyMenu.mp3");
  }, data.offset/delta);
  setTimeout(function() {
    StopSong([data.Vocals, data.Inst]);
  }, (data.songLength * 1000));
}
function PlayWeek(week) {
  var current = 0;
  var data = Songs[week[current]];

  function play() {
    setTimeout(function() {
      currentStats.Reset();
      Settings.Scrollspeed = (data.speed * 2);

      song = data.name;
      Player = data.player;
      Opponent = data.opponent;

      playSound(data.Inst);

      playSound(data.Vocals);
      PlayChart(data.song[0]);
      PlayEvents(data.song[1]);
      if (data.camEFX == true) {
        PlayBPM(data.song[2]);
      }
      state = "SONG";
      var bg = data.background;
      var spr = createSprite((200 + bg.offset[0]), (200 + bg.offset[1]));
      spr.setAnimation(bg.spriteName);
      spr.scale = bg.scale;
      Background = spr;
      camera.x = 200;
      camera.y = 200;
      stopSound("assets/freakyMenu.mp3");
    }, data.offset / delta);
    setTimeout(function() {
      if (Songs[week[current + 1]] !== undefined) {
        current++;
        data = Songs[week[current]];
        play();
      } else {
        StopSong([data.Vocals, data.Inst]);
      }
    }, (data.songLength * 1000));
  }

  play();
}
Utils.getWebData("https://file-rgb.jacobbutler6.repl.co/info/".concat(window.getURLPath()[2]), function(stream) {
  window.projectData = JSON.parse(stream);
});
function StopSong(music) {
  stopSound(music[0]);
  stopSound(music[1]);
  preloadSongs();
  notes = [];
  state = "WEEKSELECTION";
  playSound("assets/freakyMenu.mp3");
  currentStats.Reset();
}
var Characters = {
  Boyfriend: new Character({
    Idle: "Boyfriend_Idle",
    Left: "Boyfriend_Left",
    Down: "Boyfriend_Down",
    Up: "Boyfriend_Up",
    Right: "Boyfriend_Right",
  }, 
  [100, 250], 
  "BF", {
    x: 100,
    y: 200,
  },
  0.85),
  Dad: new Character({
    Idle: "Dad_Idle",
    Left: "Dad_Left",
    Down: "Dad_Down",
    Up: "Dad_Up",
    Right: "Dad_Right",
  }, 
  [300, 220], 
  "OPPONENT", {
    x: 250,
    y: 200,
  },
  1.3),
  SkidandPump: new Character({
    Idle: "Spooky_Idle",
    Left: "Spooky_Left",
    Down: "Spooky_Down",
    Up: "Spooky_Up",
    Right: "Spooky_Right",
  }, 
  [300, 250], 
  "OPPONENT", {
    x: 250,
    y: 200,
  },
  1.2),
  Pico: new Character({
    Idle: "Pico_Idle",
    Left: "Pico_Left",
    Down: "Pico_Down",
    Up: "Pico_Up",
    Right: "Pico_Right",
  }, 
  [300, 250], 
  "OPPONENT", {
    x: 250,
    y: 200,
  },
  1),
};
var WEEKS = {
  1: ['Bopeebo', 'Fresh', 'DadBattle'],
  2: ['Spookeez', 'South'],
  3: ['Pico', 'Philly', 'Blammed'],
}
var Songs = {
  DadBattle: {
    name: "Dad-Battle",
    player: Characters.Boyfriend,
    opponent: Characters.Dad,
    background: {
      spriteName: "Background_1",
      scale: 3,
      offset: [0,0],
    },
    offset: 100,
    Vocals: "assets/Dadbattle_Voices.mp3",
    Inst: "assets/Dadbattle_Inst.mp3",
    songLength: 88,
    speed: 2,
    camEFX: false,
    song: Translate({"song":{"song":"Dad Battle","bpm":180.0,"needsVoices":true,"player1":"bf","player2":"dad","speed":2.3,"notes":[{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[10666.667,2,0.0],[11000.0,0,0.0],[11166.667,1,0.0],[11333.334,2,0.0],[11666.667,0,0.0],[11833.334,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[12000.0,2,0.0],[12166.667,3,0.0],[12333.334,0,0.0],[12500.0,1,0.0],[12666.667,2,0.0],[13000.0,0,0.0],[13166.667,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[13333.334,2,0.0],[13666.667,0,0.0],[13833.334,1,0.0],[14000.0,2,0.0],[14333.334,0,0.0],[14500.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[14666.667,2,0.0],[14833.334,3,0.0],[15000.0,0,0.0],[15166.667,1,0.0],[15333.334,2,0.0],[15666.667,0,0.0],[15833.334,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[16000.0,1,0.0],[16333.334,0,0.0],[16500.0,3,0.0],[16666.668,1,0.0],[17000.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[17333.334,1,0.0],[17666.668,0,0.0],[17833.334,0,0.0],[18000.0,3,0.0],[18166.668,3,0.0],[18333.334,3,0.0],[18500.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[18666.668,1,0.0],[19000.0,0,0.0],[19166.668,3,0.0],[19333.334,1,0.0],[19666.668,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[20000.0,1,0.0],[20333.334,0,0.0],[20500.0,0,0.0],[20666.668,3,0.0],[20833.334,3,0.0],[21000.0,3,0.0],[21166.668,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[21666.668,2,0.0],[21833.334,1,0.0],[22000.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[22833.334,1,0.0],[23000.0,3,0.0],[23333.334,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[24333.334,2,0.0],[24666.668,1,0.0],[25000.0,0,0.0],[25166.668,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[25333.334,2,0.0],[25500.0,3,0.0],[25666.668,0,0.0],[25833.334,3,0.0],[26000.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[27000.0,2,0.0],[27166.668,1,0.0],[27333.334,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[28166.668,1,0.0],[28333.334,3,0.0],[28666.668,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[29666.668,2,0.0],[30000.0,1,0.0],[30333.334,0,0.0],[30500.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[30666.668,4,0.0],[30666.668,2,0.0],[30833.334,5,0.0],[30833.334,3,0.0],[31000.0,6,0.0],[31000.0,0,0.0],[31166.668,7,0.0],[31166.668,3,0.0],[31333.334,6,0.0],[31333.334,2,0.0],[31500.0,5,0.0],[31666.668,4,0.0],[31833.334,5,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[32166.668,0,0.0],[32333.334,3,0.0],[32500.002,2,0.0],[32666.668,1,0.0],[33000.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[33500.0,2,0.0],[33666.668,3,0.0],[33833.3359,1,0.0],[34000.0,2,0.0],[34333.3359,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[34666.668,0,0.0],[35000.0,1,0.0],[35333.3359,3,0.0],[35666.668,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[36000.0,2,0.0],[36333.3359,3,0.0],[36666.668,0,0.0],[36666.668,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[37500.0,1,0.0],[37666.668,3,0.0],[37833.3359,2,0.0],[38000.0,0,0.0],[38166.668,2,0.0],[38333.3359,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[38666.668,0,0.0],[38750.0,3,0.0],[38833.3359,0,0.0],[39000.0,1,0.0],[39166.668,0,0.0],[39333.3359,2,0.0],[39500.0,3,0.0],[39666.668,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[40166.668,0,0.0],[40333.3359,3,0.0],[40500.0,1,0.0],[40666.668,2,0.0],[40833.3359,3,0.0],[41000.0,1,0.0],[41166.668,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[41333.3359,0,0.0],[41333.3359,4,0.0],[41500.0,1,0.0],[41500.0,5,0.0],[41666.668,0,0.0],[41666.668,6,0.0],[41833.3359,3,0.0],[41833.3359,7,0.0],[42000.0,2,0.0],[42000.0,6,0.0],[42166.668,5,0.0],[42333.3359,3,0.0],[42333.3359,4,0.0],[42500.0,5,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[42833.3359,0,0.0],[43000.0,3,0.0],[43166.668,2,0.0],[43333.3359,1,0.0],[43666.668,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[44166.668,2,0.0],[44333.3359,3,0.0],[44500.0,1,0.0],[44666.668,2,0.0],[45000.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[45333.3359,0,0.0],[45666.668,1,0.0],[46000.0,3,0.0],[46333.3359,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[46666.668,2,0.0],[47000.0,3,0.0],[47333.3359,0,0.0],[47333.3359,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[48166.668,1,0.0],[48333.3359,3,0.0],[48500.0,2,0.0],[48666.668,0,0.0],[48833.3359,2,0.0],[49000.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[49333.3359,0,0.0],[49416.668,3,0.0],[49500.0,0,0.0],[49666.668,1,0.0],[49833.3359,0,0.0],[50000.0,2,0.0],[50166.668,3,0.0],[50333.3359,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[50833.3359,0,0.0],[51000.0,3,0.0],[51166.668,1,0.0],[51333.3359,2,0.0],[51500.0,3,0.0],[51666.668,1,0.0],[51833.3359,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[52000.0,0,0.0],[52166.668,0,0.0],[52333.3359,2,0.0],[52500.0,2,0.0],[52666.668,3,0.0],[53000.0,3,0.0],[53000.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[53333.3359,2,0.0],[53666.668,0,0.0],[53833.3359,1,0.0],[54000.0,2,0.0],[54333.3359,0,0.0],[54500.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[54666.668,2,0.0],[54833.3359,3,0.0],[55000.0,0,0.0],[55166.668,1,0.0],[55333.3359,2,0.0],[55666.668,0,0.0],[55833.3359,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[56000.0,2,0.0],[56333.3359,0,0.0],[56500.0,1,0.0],[56666.668,2,0.0],[57000.0,0,0.0],[57166.668,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[57333.3359,2,0.0],[57500.0,3,0.0],[57666.668,0,0.0],[57833.3359,1,0.0],[58000.0,2,0.0],[58333.3359,0,0.0],[58500.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[58666.668,1,0.0],[59000.0,0,0.0],[59166.668,3,0.0],[59333.3359,1,0.0],[59666.668,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[60000.0,1,0.0],[60333.3359,0,0.0],[60500.0,0,0.0],[60666.668,3,0.0],[60833.3359,3,0.0],[61000.0,3,0.0],[61166.668,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[61333.3359,1,0.0],[61666.668,0,0.0],[61833.3359,3,0.0],[62000.0,1,0.0],[62333.3359,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[62666.668,1,0.0],[62666.668,4,0.0],[62833.3359,5,0.0],[63000.0,0,0.0],[63000.0,6,0.0],[63166.668,0,0.0],[63166.668,7,0.0],[63333.3359,3,0.0],[63333.3359,6,0.0],[63500.0,3,0.0],[63500.0,5,0.0],[63666.668,3,0.0],[63666.668,4,0.0],[63833.3359,5,333.333344],[63833.3359,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[64333.3359,2,0.0],[64500.0039,1,0.0],[64666.668,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[65500.0039,1,0.0],[65666.67,3,0.0],[66000.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[67000.0,2,0.0],[67333.3359,1,0.0],[67666.67,0,0.0],[67833.3359,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[68000.0,2,0.0],[68000.0,4,0.0],[68166.67,3,0.0],[68166.67,5,0.0],[68333.3359,0,0.0],[68333.3359,6,0.0],[68500.0,3,0.0],[68500.0,7,0.0],[68666.67,2,0.0],[68666.67,6,0.0],[68833.3359,5,0.0],[69000.0,4,0.0],[69166.67,5,333.333344]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[69666.67,2,0.0],[69833.3359,1,0.0],[70000.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[70833.3359,1,0.0],[71000.0,3,0.0],[71333.3359,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[72333.3359,2,0.0],[72666.67,1,0.0],[73000.0,0,0.0],[73166.67,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[73333.3359,2,0.0],[73500.0,3,0.0],[73666.67,0,0.0],[73833.3359,3,0.0],[74000.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[74666.67,2,0.0],[75000.0,0,0.0],[75166.67,1,0.0],[75333.3359,2,0.0],[75666.67,0,0.0],[75833.3359,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[76000.0,2,0.0],[76166.67,3,0.0],[76333.3359,0,0.0],[76500.0,1,0.0],[76666.67,2,0.0],[77000.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[77333.3359,2,0.0],[77666.67,0,0.0],[77833.3359,1,0.0],[78000.0,2,0.0],[78333.3359,0,0.0],[78500.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[78666.67,2,0.0],[78833.3359,3,0.0],[79000.0,0,0.0],[79166.67,1,0.0],[79333.3359,2,0.0],[79666.67,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[80000.0,1,0.0],[80333.3359,0,0.0],[80500.0,3,0.0],[80666.67,1,0.0],[81000.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[81333.3359,1,0.0],[81666.67,1,0.0],[82000.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[82666.67,1,0.0],[83000.0,0,0.0],[83166.67,3,0.0],[83333.3359,1,0.0],[83666.67,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[84000.0,1,0.0],[84333.3359,1,0.0],[84666.67,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]}]},"generatedBy":"SNIFF ver.6"}),
  },
  Bopeebo: {
    name: "Bopeebo",
    player: Characters.Boyfriend,
    opponent: Characters.Dad,
    background: {
      spriteName: "Background_1",
      scale: 3,
      offset: [0,0],
    },
    offset: 100,
    Vocals: "assets/Bopeebo_Voices.mp3",
    Inst: "assets/Bopeebo_Inst.mp3",
    songLength: 85,
    speed: 1,
    camEFX: false,
    song: Translate({"song":{"song":"Bopeebo","bpm":100.0,"needsVoices":true,"player1":"bf","player2":"dad","speed":1.3,"notes":[{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[0.0,2,0.0],[600.0,3,600.0],[1200.0,3,600.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[2400.0,2,0.0],[3000.0,3,600.0],[3600.0,3,600.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[4800.0,1,300.0],[5400.0,0,300.0],[6000.0,3,600.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[7200.0,1,300.0],[7800.0,0,300.0],[8400.0,3,600.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[9600.0,1,300.0],[10200.0,3,0.0],[10500.0,0,0.0],[10800.0,1,600.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[12000.0,1,300.0],[12600.0,3,0.0],[12900.0,0,0.0],[13200.0,1,600.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[14400.0,3,0.0],[14700.0,1,0.0],[15300.0,0,0.0],[15600.0,2,600.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[16800.0,3,0.0],[17100.0,1,0.0],[17700.0,0,0.0],[18000.0,2,600.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[19200.0,0,0.0],[19500.0,3,0.0],[19800.0,1,900.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[21600.0,0,0.0],[21900.0,3,0.0],[22200.0,1,900.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[24000.0,1,0.0],[24300.0,3,0.0],[24600.0,0,900.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[26400.0,1,0.0],[26700.0,3,0.0],[27000.0,0,900.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[28800.0,2,0.0],[29100.0,3,0.0],[29400.0,0,1200.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[31200.0,2,0.0],[31500.0,3,0.0],[31800.0,0,1200.0],[33300.0,6,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[33600.0,0,0.0],[33900.0,3,0.0],[34500.0,2,0.0],[34575.0,0,0.0],[34800.0,1,600.0],[35700.0,6,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[36000.0,0,0.0],[36300.0,3,0.0],[36900.0,2,0.0],[36975.0,0,0.0],[37200.0,1,600.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[38400.0,2,450.0],[39000.0,3,300.0],[39600.0,0,600.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[40800.0,2,450.0],[41400.0,3,300.0],[42000.0,0,600.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[43200.0,1,0.0],[43800.0,2,0.0],[44400.0,1,0.0],[44550.0,1,0.0],[44700.0,1,0.0],[45000.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[45600.0,1,0.0],[46200.0,2,0.0],[46800.0,1,0.0],[46950.0,1,0.0],[47100.0,1,0.0],[47400.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[48000.0,2,450.0],[48600.0,3,300.0],[49200.0,0,450.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[50400.0,2,450.0],[51000.0,3,300.0],[51600.0,0,450.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[52800.0,3,1800.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[55200.0,3,1800.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[57600.0,2,0.0],[57900.0,3,0.0],[58200.0,0,1200.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[60000.0,2,0.0],[60300.0,3,0.0],[60600.0,0,1200.0],[62100.0,6,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[62400.0,0,0.0],[62700.0,3,0.0],[63300.0,2,0.0],[63375.0,0,0.0],[63600.0,1,600.0],[64500.0,6,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[64800.0,0,0.0],[65100.0,3,0.0],[65700.0,2,0.0],[65775.0,0,0.0],[66000.0,1,600.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[67200.0,2,0.0],[67500.0,3,0.0],[67800.0,0,0.0],[68100.0,2,0.0],[68400.0,1,600.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[69600.0,2,0.0],[69900.0,3,0.0],[70200.0,0,0.0],[70500.0,2,0.0],[70800.0,1,600.0],[71700.0,6,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[72000.0,0,0.0],[72300.0,3,0.0],[72900.0,2,0.0],[72975.0,0,0.0],[73200.0,1,600.0],[74100.0,6,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[74400.0,0,0.0],[74700.0,3,0.0],[75300.0,2,0.0],[75375.0,0,0.0],[75600.0,1,600.0]]}]},"generatedBy":"SNIFF ver.6"}),
  },
  Fresh: {
    name: "Fresh",
    player: Characters.Boyfriend,
    opponent: Characters.Dad,
    background: {
      spriteName: "Background_1",
      scale: 3,
      offset: [0,0],
    },
    offset: 100,
    Vocals: "assets/Fresh_Voices.mp3",
    Inst: "assets/Fresh_Inst.mp3",
    songLength: 86,
    speed: 1.1,
    camEFX: false,
    song: Translate({"song":{"song":"Fresh","bpm":120.0,"needsVoices":true,"player1":"bf","player2":"dad","speed":1.8,"notes":[{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[0.0,1,0.0],[250.0,1,0.0],[500.0,3,0.0],[875.0,3,0.0],[1125.0,1,0.0],[1250.0,0,0.0],[1500.0,3,0.0],[1500.0,2,0.0],[1750.0,1,0.0],[1875.0,0,125.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[2000.0,1,0.0],[2250.0,1,0.0],[2500.0,3,0.0],[2875.0,3,0.0],[3125.0,1,0.0],[3250.0,0,0.0],[3500.0,2,0.0],[3500.0,3,0.0],[3750.0,1,0.0],[3875.0,0,125.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[4000.0,1,0.0],[4250.0,1,0.0],[4500.0,3,0.0],[4875.0,3,0.0],[5125.0,1,0.0],[5250.0,0,0.0],[5500.0,3,0.0],[5500.0,2,0.0],[5750.0,3,125.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[6000.0,1,0.0],[6250.0,1,0.0],[6500.0,3,0.0],[6875.0,3,0.0],[7125.0,1,0.0],[7250.0,0,0.0],[7500.0,3,0.0],[7500.0,2,0.0],[7750.0,3,125.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[8250.0,0,0.0],[8500.0,1,0.0],[9000.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[10250.0,0,0.0],[10500.0,1,0.0],[11000.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[12250.0,0,0.0],[12500.0,2,0.0],[12750.0,3,0.0],[13000.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[14250.0,0,0.0],[14500.0,2,0.0],[14750.0,3,0.0],[15000.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[16250.001,0,0.0],[16500.0,1,0.0],[16750.0,3,0.0],[17000.0,0,0.0],[17500.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[18250.0,0,0.0],[18500.0,1,0.0],[18750.0,3,0.0],[19000.0,0,0.0],[19500.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[20000.0,3,0.0],[20250.0,1,0.0],[20750.0,2,0.0],[21000.0,3,0.0],[21250.0,1,0.0],[21750.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[22000.0,3,0.0],[22250.0,1,0.0],[22750.0,2,0.0],[23000.0,3,0.0],[23250.0,1,0.0],[23750.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[24000.0,3,0.0],[24500.0,0,0.0],[25000.0,1,0.0],[25250.0,1,0.0],[25500.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[26000.0,1,0.0],[26250.0,2,0.0],[26500.0,3,0.0],[26750.0,0,0.0],[27000.0,2,0.0],[27250.0,3,0.0],[27500.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[28000.0,3,0.0],[28500.0,0,0.0],[29000.0,1,0.0],[29250.0,1,0.0],[29500.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[30000.0,1,0.0],[30250.0,2,0.0],[30500.0,3,0.0],[30750.0,0,0.0],[31000.0,2,0.0],[31250.0,3,0.0],[31500.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[32500.002,0,0.0],[32750.002,3,0.0],[33000.0,1,0.0],[33250.0,3,0.0],[33500.0,1,0.0],[33750.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[34250.0,0,0.0],[34500.0,3,0.0],[34750.0,0,0.0],[35000.0,2,375.0],[35500.0,1,375.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[36500.0,0,0.0],[36750.0,3,0.0],[37000.0,1,0.0],[37250.0,3,0.0],[37500.0,1,0.0],[37750.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[38250.0,0,0.0],[38500.0,3,0.0],[38750.0,0,0.0],[39000.0,2,375.0],[39500.0,1,375.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[40250.0,0,0.0],[40500.0,1,0.0],[41000.0,2,0.0],[41500.0,2,0.0],[41750.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[42250.0,0,0.0],[42500.0,1,0.0],[43000.0,2,0.0],[43500.0,2,0.0],[43750.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[44250.0,0,0.0],[44500.0,2,0.0],[44750.0,3,0.0],[45000.0,0,0.0],[45750.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[46250.0,0,0.0],[46500.0,2,0.0],[46750.0,3,0.0],[47000.0,0,0.0],[47750.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[48250.0,0,0.0],[48500.0,1,0.0],[48750.0,3,0.0],[49000.0,0,0.0],[49750.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[50250.0,0,0.0],[50500.0,1,0.0],[50750.0,3,0.0],[51000.0,0,0.0],[51750.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[52000.0,3,0.0],[52250.0,1,0.0],[52500.0,1,0.0],[52750.0,2,0.0],[53000.0,3,0.0],[53250.0,1,0.0],[53750.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[54000.0,3,0.0],[54250.0,1,0.0],[54500.0,1,0.0],[54750.0,2,0.0],[55000.0,3,0.0],[55250.0,1,0.0],[55750.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[56000.0,3,0.0],[56500.0,0,0.0],[57000.0,1,0.0],[57250.0,1,0.0],[57500.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[58000.0,1,0.0],[58250.0,2,0.0],[58500.0,3,0.0],[58750.0,0,0.0],[59000.0,2,0.0],[59250.0,3,0.0],[59500.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[60000.0,3,0.0],[60500.0,0,0.0],[61000.0,1,0.0],[61250.0,1,0.0],[61500.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[62000.0,1,0.0],[62250.0,2,0.0],[62500.0,3,0.0],[62750.0,0,0.0],[63000.0,2,0.0],[63250.0,3,0.0],[63500.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[64500.0039,0,0.0],[64750.0039,3,0.0],[65000.0039,1,0.0],[65250.0039,3,0.0],[65500.0039,1,0.0],[65750.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[66250.0,0,0.0],[66500.0,3,0.0],[66750.0,0,0.0],[67000.0,2,375.0],[67500.0,1,375.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[68500.0,0,0.0],[68750.0,3,0.0],[69000.0,1,0.0],[69250.0,3,0.0],[69500.0,1,0.0],[69750.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[70250.0,0,0.0],[70500.0,3,0.0],[70750.0,0,0.0],[71000.0,2,375.0],[71500.0,1,375.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[72000.0,1,0.0],[72000.0,5,0.0],[72250.0,1,0.0],[72250.0,5,0.0],[72500.0,3,0.0],[72500.0,7,0.0],[72875.0,3,0.0],[72875.0,7,0.0],[73125.0,1,0.0],[73125.0,5,0.0],[73250.0,0,0.0],[73250.0,4,0.0],[73500.0,3,0.0],[73500.0,2,0.0],[73500.0,7,0.0],[73500.0,6,0.0],[73750.0,1,0.0],[73750.0,5,0.0],[73875.0,0,125.0],[73875.0,4,125.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[74000.0,1,0.0],[74250.0,1,0.0],[74500.0,3,0.0],[74875.0,3,0.0],[75125.0,1,0.0],[75250.0,0,0.0],[75500.0,3,0.0],[75500.0,2,0.0],[75750.0,1,0.0],[75875.0,0,125.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[76000.0,1,0.0],[76000.0,5,0.0],[76250.0,1,0.0],[76250.0,5,0.0],[76500.0,3,0.0],[76500.0,7,0.0],[76875.0,3,0.0],[76875.0,7,0.0],[77125.0,1,0.0],[77125.0,5,0.0],[77250.0,0,0.0],[77250.0,4,0.0],[77500.0,3,0.0],[77500.0,2,0.0],[77500.0,7,0.0],[77500.0,6,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[78000.0,1,0.0],[78250.0,1,0.0],[78500.0,3,0.0],[78875.0,3,0.0],[79125.0,1,0.0],[79250.0,0,0.0],[79500.0,3,0.0],[79500.0,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]}]},"generatedBy":"SNIFF ver.6"}),
  },
  Spookeez: {
    name: "Spookeez",
    player: Characters.Boyfriend,
    opponent: Characters.SkidandPump,
    background: {
      spriteName: "Background_2",
      scale: 3,
      offset: [0,0],
    },
    offset: 100,
    Vocals: "assets/Spookeez_Voices.mp3",
    Inst: "assets/Spookeez_Inst.mp3",
    songLength: 103,
    speed: 2,
    camEFX: false,
    song: Translate({"song":{"player1":"bf","notes":[{"sectionNotes":[],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[6400,0,0],[6599.99951,1,0],[6799.99951,3,0],[7199.99951,3,0],[7599.99951,2,0],[7799.99951,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[7999.99951,1,0],[8200,3,0],[8400,3,0],[8800,2,0],[9200,0,0],[9400,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[9600,0,0],[9800,1,0],[10000,3,0],[10400,3,0],[10800,2,0],[11000,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[11200,1,0],[11400,3,0],[11600,3,0],[12000,2,0],[12400,0,0],[12600,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[12800,2,0],[12999.999,3,0],[13099.999,1,0],[13199.999,0,0],[13399.999,0,0],[13599.999,2,0],[13799.999,3,0],[13999.999,1,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[14399.999,1,0],[14599.999,0,0],[14699.999,1,0],[14799.999,3,0],[14999.999,3,0],[15199.999,0,0],[15399.999,0,0],[15600,2,0,2]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[15999.999,2,0],[16199.999,3,0],[16299.999,1,0],[16400,0,0],[16600,0,0],[16800,2,0],[17000,3,0],[17200,1,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[17600,1,0],[17800,0,0],[17900,1,0],[18000,3,0],[18200,3,0],[18400,0,0],[18600,0,0],[18800,4,0],[19000,7,0],[18800,2,0,2]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[19200,2,0],[19400,3,0],[19500,1,0],[19600,3,0],[20000,3,0],[20300,3,0],[20600,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[20800,2,0],[21000,0,0],[21100,1,0],[21200,3,0],[21600,3,0],[21900,1,0],[22000,3,0],[22200,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[22400,2,0],[22600,3,0],[22700,1,0],[22800,3,0],[23200,3,0],[23500,3,0],[23800,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[24000,2,0],[24200,0,0],[24300,1,0],[24400,3,0],[24800,1,0],[25200,2,0],[25200,4,0],[25400,2,0],[25400,7,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[25600,2,0],[25799.998,3,0],[25899.998,1,0],[25999.998,3,0],[26399.998,3,0],[26699.998,3,0],[26999.998,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[27199.998,2,0],[27399.998,0,0],[27499.998,1,0],[27599.998,3,0],[27999.998,3,0],[28299.998,1,0],[28399.998,3,0],[28599.998,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[28799.998,2,0],[28999.998,3,0],[29099.998,1,0],[29199.998,3,0],[29599.998,3,0],[29899.998,3,0],[30199.998,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[30399.998,2,0],[30599.998,0,0],[30699.998,1,0],[30799.998,3,0],[31199.998,1,0],[31599.998,2,0],[31599.998,7,0],[31799.998,2,0],[31799.998,5,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[31999.998,0,0],[32199.998,1,0],[32399.998,3,0],[32800,3,0],[33200,2,0],[33400,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[33600,1,0],[33800,3,0],[34000,3,0],[34400,2,0],[34800,0,0],[35000,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[35200,0,0],[35400,1,0],[35600,3,0],[36000,3,0],[36400,2,0],[36600,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[36800,1,0],[37000,3,0],[37200,3,0],[37600,2,0],[38000,0,0],[38200,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[38400,2,0],[38600,3,0],[38700,1,0],[38800,0,0],[39000,0,0],[39200,2,0],[39400,3,0],[39600,1,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[40000,1,0],[40200,0,0],[40300,1,0],[40400,3,0],[40600,3,0],[40800,0,0],[41000,0,0],[41200,2,0,2]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[41600,2,0],[41800,3,0],[41900,1,0],[42000,0,0],[42200,0,0],[42400,2,0],[42600,3,0],[42800,1,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[43200,1,0],[43400,0,0],[43500,1,0],[43600,3,0],[43800,3,0],[44000,0,0],[44200,0,0],[44400,4,0],[44600,7,0],[44400,2,0,2]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[44800,2,0],[45000,3,0],[45100,1,0],[45200,3,0],[45500,3,0],[45600,3,0],[45900,3,0],[46200,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[46400,2,0],[46600,0,0],[46700,1,0],[46800,3,0],[47100,3,0],[47200,1,0],[47400,0,0],[47500,2,0],[47600,3,0],[47800,3,0],[47900,1,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[48000,2,0],[48200,3,0],[48300,1,0],[48400,3,0],[48800,3,0],[49100,3,0],[49400,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[49600,2,0],[49800,0,0],[49900,1,0],[50000,3,0],[50400,3,0],[50800,4,0],[51000,7,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[51200,2,0],[51399.9961,3,0],[51499.9961,1,0],[51599.9961,3,0],[51899.9961,3,0],[51999.9961,3,0],[52299.9961,3,0],[52599.9961,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[52799.9961,2,0],[52999.9961,0,0],[53099.9961,1,0],[53199.9961,3,0],[53499.9961,3,0],[53599.9961,1,0],[53799.9961,0,0],[53899.9961,2,0],[53999.9961,3,0],[54199.9961,3,0],[54299.9961,1,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[54399.9961,2,0],[54599.9961,3,0],[54699.9961,1,0],[54799.9961,3,0],[55199.9961,3,0],[55499.9961,3,0],[55799.9961,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[55999.9961,2,0],[56199.9961,0,0],[56299.9961,1,0],[56399.9961,3,0],[56799.9961,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[57599.9961,2,300],[57999.9961,3,300],[58399.9961,1,300],[58799.9961,2,300]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[59199.9961,2,100],[59399.9961,3,100],[59599.9961,0,300],[59999.9961,1,300],[60399.9961,2,300]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[60799.9961,1,0],[61199.9961,1,0],[61399.9961,3,0],[61799.9961,3,0],[61999.9961,0,0],[62199.9961,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[62399.9961,1,0],[62799.9961,1,0],[62999.9961,3,0],[63399.9961,3,0],[63599.9961,0,0],[63799.9961,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[63999.9961,2,300],[64399.9961,3,300],[64799.9961,1,300],[65199.9961,2,300]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[65600,2,100],[65800,3,100],[66000,0,300],[66400,1,300],[66800,2,300]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[67200,1,0],[67600,1,0],[67800,3,0],[68200,3,0],[68400,0,0],[68600,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[68800,4,300],[68800,1,0],[69200,5,300],[69200,1,0],[69400,3,0],[69600,7,300],[69800,3,0],[70000,5,300],[70000,0,0],[70200,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[70400,2,0],[70600,2,0],[70800,3,0],[71000,2,0],[71400,3,0],[71600,1,0],[71800,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[72000,2,0],[72200,2,0],[72400,3,0],[72600,2,0],[73000,3,0],[73200,1,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[73600,2,0],[73800,2,0],[74000,3,0],[74200,2,0],[74600,3,0],[74800,1,0],[75000,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[75200,2,0],[75200,4,300],[75400,2,0],[75600,3,0],[75600,5,300],[75800,2,0],[76000,7,300],[76200,3,0],[76400,1,0],[76400,5,300]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[76800,2,0],[77000,2,0],[77200,3,0],[77400,2,0],[77800,3,0],[78000,1,0],[78200,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[78400,2,0],[78600,2,0],[78800,3,0],[79000,2,0],[79400,3,0],[79600,1,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[80000,2,0],[80200,2,0],[80400,3,0],[80600,2,0],[81000,3,0],[81200,1,0],[81400,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[81600,2,0],[81600,4,300],[81800,2,0],[82000,3,0],[82000,5,300],[82200,2,0],[82400,7,300],[82600,3,0],[82800,1,0],[82800,5,300]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[83200,2,0],[83400,2,0],[83600,3,0],[83800,2,0],[84200,3,0],[84400,1,0],[84600,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[84800,2,0],[85000,2,0],[85200,3,0],[85400,2,0],[85800,3,0],[86000,1,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[86400,2,0],[86600,2,0],[86800,3,0],[87000,2,0],[87400,3,0],[87600,1,0],[87800,3,0]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[88000,2,0],[88000,4,300],[88200,2,0],[88400,3,0],[88400,5,300],[88600,2,0],[88800,7,300],[89000,3,0],[89200,1,0],[89200,5,300]],"lengthInSteps":16,"mustHitSection":false},{"sectionNotes":[[89600,2,0],[89800,2,0],[90000,3,0],[90200,2,0],[90600,3,0],[90800,1,0],[91000,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[91200,2,0],[91400,2,0],[91600,3,0],[91800,2,0],[92200,3,0],[92400,1,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[92800,2,0],[93000,2,0],[93200,3,0],[93400,2,0],[93800,3,0],[94000,1,0],[94200,3,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[[94400,2,0],[94600,2,0],[94800,3,0],[95000,2,0],[95400,3,0],[95600,1,0]],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[],"lengthInSteps":16,"mustHitSection":true},{"sectionNotes":[],"lengthInSteps":16,"mustHitSection":true},{"lengthInSteps":16,"altAnim":false,"typeOfSection":0,"sectionNotes":[],"bpm":150,"changeBPM":false,"mustHitSection":true}],"player2":"spooky","song":"Spookeez","validScore":true,"needsVoices":true,"speed":2.4,"bpm":150}}),
  },
  South: {
    name: "South",
    player: Characters.Boyfriend,
    opponent: Characters.SkidandPump,
    background: {
      spriteName: "Background_2",
      scale: 3,
      offset: [0,0],
    },
    offset: 100,
    Vocals: "assets/South_Voices.mp3",
    Inst: "assets/South_Inst.mp3",
    songLength: 103,
    speed: 1.25,
    camEFX: false,
    song: Translate({"song":{"song":"South","bpm":165.0,"needsVoices":true,"player1":"bf","player2":"spooky","speed":2.2,"notes":[{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[11636.3633,3,0.0],[12000.0,3,0.0],[12363.6367,0,0.0],[12545.4541,3,0.0],[12727.2725,2,0.0],[12909.0908,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[13090.9092,0,0.0],[13454.5449,1,0.0],[13818.1816,3,0.0],[14000.0,3,0.0],[14181.8184,3,181.818176]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[14545.4541,3,0.0],[14909.0908,3,0.0],[15272.7275,3,0.0],[15454.5449,2,0.0],[15636.3633,0,0.0],[15818.1816,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[16000.0,0,0.0],[16363.6357,0,0.0],[16727.2734,2,0.0],[17090.9082,0,0.0],[17272.7266,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[17454.5449,3,0.0],[17818.1816,3,0.0],[18181.8184,0,0.0],[18363.6367,3,0.0],[18545.4551,2,0.0],[18727.2734,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[18909.09,0,0.0],[19272.7266,1,0.0],[19636.3633,3,0.0],[19818.1816,3,0.0],[20000.0,3,181.818176]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[20363.6367,3,0.0],[20727.2734,3,0.0],[21090.9082,3,0.0],[21272.7266,2,0.0],[21454.5449,0,0.0],[21636.3633,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[21818.1816,0,0.0],[22181.8184,0,0.0],[22545.4551,2,0.0],[22909.09,0,0.0],[23090.9082,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[23272.7266,2,0.0],[23454.5449,1,0.0],[23636.3633,0,0.0],[23818.1816,0,0.0],[23909.09,3,0.0],[24000.0,2,0.0],[24181.8184,0,0.0],[24363.6367,2,0.0],[24545.4551,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[24727.2734,2,0.0],[25090.9082,2,0.0],[25454.5449,2,0.0],[25636.3633,1,0.0],[25818.1816,0,0.0],[26000.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[26181.8184,0,0.0],[26545.4551,0,0.0],[26727.2734,0,0.0],[26818.1816,2,0.0],[26909.09,3,0.0],[27090.9082,0,0.0],[27272.7266,1,0.0],[27454.5449,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[27636.3633,2,0.0],[28000.0,2,0.0],[28363.6367,2,0.0],[28545.4551,3,0.0],[28727.2715,0,0.0],[28909.09,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[29090.9082,2,0.0],[29272.7266,1,0.0],[29454.5449,0,0.0],[29636.3633,0,0.0],[29727.2715,3,0.0],[29818.1816,2,0.0],[30000.0,0,0.0],[30181.8184,2,0.0],[30363.6367,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[30545.4551,2,0.0],[30909.09,2,0.0],[31272.7266,2,0.0],[31454.5449,1,0.0],[31636.3633,0,0.0],[31818.1816,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[32000.0,0,0.0],[32363.6367,0,0.0],[32545.4551,0,0.0],[32636.3633,2,0.0],[32727.2715,3,0.0],[32909.09,0,0.0],[33090.91,1,0.0],[33272.7266,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[33454.5469,2,0.0],[33818.18,2,0.0],[34181.8164,2,0.0],[34363.6367,3,0.0],[34545.4531,0,0.0],[34727.2734,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[34909.09,2,0.0],[35090.91,3,0.0],[35272.7266,0,0.0],[35454.5469,2,0.0],[35636.3633,3,0.0],[35818.18,0,0.0],[36000.0,2,0.0],[36181.8164,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[36363.6367,0,0.0],[36545.4531,2,0.0],[36727.2734,3,0.0],[36909.09,0,0.0],[37090.91,0,0.0],[37272.7266,3,0.0],[37454.5469,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[37818.18,2,0.0],[38000.0,3,0.0],[38181.8164,0,0.0],[38363.6367,2,0.0],[38545.4531,3,0.0],[38727.2734,0,0.0],[38909.09,2,0.0],[39090.91,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[39272.7266,0,0.0],[39454.5469,1,0.0],[39545.4531,1,0.0],[39636.3633,3,0.0],[39818.18,0,0.0],[40000.0,3,0.0],[40181.8164,0,0.0],[40363.6367,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[40727.2734,2,0.0],[40909.09,3,0.0],[41090.91,0,0.0],[41272.7266,2,0.0],[41454.5469,3,0.0],[41636.3633,0,0.0],[41818.18,2,0.0],[42000.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[42181.8164,0,0.0],[42363.6367,2,0.0],[42545.4531,3,0.0],[42727.2734,0,0.0],[42909.09,0,0.0],[43090.91,3,0.0],[43272.7266,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[43636.3633,2,0.0],[43818.18,3,0.0],[44000.0,0,0.0],[44181.8164,2,0.0],[44363.6367,3,0.0],[44545.4531,0,0.0],[44727.2734,2,0.0],[44909.09,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[45090.91,0,0.0],[45272.7266,1,0.0],[45363.6367,1,0.0],[45454.5469,3,0.0],[45636.3633,0,0.0],[45818.18,3,0.0],[46000.0,0,0.0],[46181.8164,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[46545.4531,0,0.0],[46818.18,3,0.0],[46909.09,1,0.0],[47090.91,0,0.0],[47272.7266,3,0.0],[47454.5469,1,0.0],[47636.3633,2,0.0],[47818.18,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[48000.0,0,0.0],[48181.8164,2,0.0],[48363.6367,3,0.0],[48545.4531,0,0.0],[48727.2734,3,0.0],[48909.09,2,0.0],[49090.91,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[49454.5469,0,0.0],[49545.4531,3,0.0],[49636.3633,2,0.0],[49818.18,3,0.0],[50000.0,0,0.0],[50181.8164,2,0.0],[50363.6367,3,0.0],[50545.4531,0,0.0],[50636.3633,3,0.0],[50727.2734,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[50909.09,1,0.0],[51090.91,1,0.0],[51181.8164,1,0.0],[51272.7266,0,0.0],[51454.5469,3,0.0],[51636.3633,2,0.0],[51818.18,3,0.0],[52000.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[52363.6367,0,0.0],[52636.3633,3,0.0],[52727.2734,1,0.0],[52909.09,0,0.0],[53090.91,3,0.0],[53272.7266,1,0.0],[53454.5469,2,0.0],[53636.3633,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[53818.18,0,0.0],[54000.0,2,0.0],[54181.8164,3,0.0],[54363.6367,0,0.0],[54545.4531,3,0.0],[54727.2734,2,0.0],[54909.09,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[55272.7266,0,0.0],[55363.6367,3,0.0],[55454.5469,2,0.0],[55636.3633,3,0.0],[55818.18,0,0.0],[56000.0,2,0.0],[56181.8164,3,0.0],[56363.6367,0,0.0],[56454.543,3,0.0],[56545.4531,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[56727.2734,1,0.0],[56909.09,1,0.0],[57000.0,1,0.0],[57090.91,0,0.0],[57272.7266,3,0.0],[57454.543,4,0.0],[57454.543,2,0.0],[57636.3633,3,0.0],[57636.3633,7,0.0],[57818.18,0,0.0],[57818.18,5,0.0],[58000.0,7,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[58181.8164,3,0.0],[58545.4531,3,0.0],[58727.2734,1,0.0],[58909.09,2,0.0],[59090.91,0,0.0],[59272.7266,1,0.0],[59454.543,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[59636.3633,0,272.727264],[60000.0,2,0.0],[60363.6367,2,0.0],[60545.4531,2,0.0],[60727.2734,2,181.818176]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[61090.91,2,0.0],[61454.543,2,0.0],[61636.3633,3,0.0],[61818.18,1,0.0],[62000.0,0,0.0],[62181.8164,3,0.0],[62363.6367,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[62545.4531,0,0.0],[62909.09,0,0.0],[63272.7266,2,0.0],[63272.7266,4,0.0],[63454.543,7,0.0],[63636.3633,0,0.0],[63636.3633,5,0.0],[63818.18,3,0.0],[63818.18,7,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[64000.0,3,0.0],[64363.6367,3,0.0],[64545.4531,1,0.0],[64727.2734,2,0.0],[64909.09,0,0.0],[65090.91,1,0.0],[65272.7266,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[65454.543,0,272.727264],[65818.18,2,0.0],[66181.82,2,0.0],[66363.63,2,0.0],[66545.45,2,181.818176]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[66909.09,2,0.0],[67272.73,2,0.0],[67454.55,3,0.0],[67636.36,1,0.0],[67818.18,0,0.0],[68000.0,3,0.0],[68181.82,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[68363.63,0,0.0],[68727.27,0,0.0],[69090.91,2,0.0],[69454.55,0,0.0],[69636.36,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[69818.18,2,0.0],[70000.0,3,0.0],[70181.82,0,0.0],[70363.63,3,0.0],[70454.55,2,0.0],[70545.45,0,0.0],[70727.27,3,0.0],[70909.09,2,0.0],[71090.91,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[71272.73,2,0.0],[71636.36,2,0.0],[71818.18,0,0.0],[72000.0,2,0.0],[72181.82,3,0.0],[72363.63,0,0.0],[72545.45,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[72727.27,0,0.0],[73090.91,0,0.0],[73272.73,0,0.0],[73363.63,3,0.0],[73454.55,2,0.0],[73636.36,3,0.0],[73818.18,2,0.0],[74000.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[74181.82,2,0.0],[74363.63,3,0.0],[74545.45,2,0.0],[74727.27,0,0.0],[74909.09,1,0.0],[75090.91,3,0.0],[75272.73,0,0.0],[75454.55,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[75636.36,2,0.0],[75818.18,3,0.0],[76000.0,0,0.0],[76181.82,3,0.0],[76272.73,2,0.0],[76363.63,0,0.0],[76545.45,3,0.0],[76727.27,2,0.0],[76909.09,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[77090.91,2,0.0],[77454.55,2,0.0],[77636.36,0,0.0],[77818.18,2,0.0],[78000.0,3,0.0],[78181.82,0,0.0],[78363.63,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[78545.45,0,0.0],[78909.09,0,0.0],[79090.91,0,0.0],[79181.82,3,0.0],[79272.73,2,0.0],[79454.55,3,0.0],[79636.36,2,0.0],[79818.18,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[80000.0,2,0.0],[80181.82,3,0.0],[80363.63,2,0.0],[80545.45,0,0.0],[80727.27,1,0.0],[80909.09,3,0.0],[81090.91,0,0.0],[81272.73,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]}]},"generatedBy":"SNIFF ver.6"}),
  },
  Pico: {
    name: "Pico",
    player: Characters.Boyfriend,
    opponent: Characters.Pico,
    background: {
      spriteName: "Background_3",
      scale: 3,
      offset: [0,0],
    },
    offset: 100,
    Vocals: "assets/Pico_Voices.mp3",
    Inst: "assets/Pico_Inst.mp3",
    songLength: 86,
    speed: 1.5,
    camEFX: false,
    song: Translate({"song":{"song":"Pico","bpm":150.0,"needsVoices":true,"player1":"bf","player2":"pico","speed":1.6,"notes":[{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[3799.99976,2,0.0],[3999.99976,3,0.0],[4200.0,2,0.0],[4600.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[5000.0,0,0.0],[5400.0,2,0.0],[5600.0,3,0.0],[5800.0,2,0.0],[6200.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[6999.99951,2,0.0],[7199.99951,3,0.0],[7399.99951,2,0.0],[7799.99951,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[8200.0,0,0.0],[8600.0,2,0.0],[8800.0,3,0.0],[9000.0,2,0.0],[9400.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[10200.0,2,0.0],[10400.0,3,0.0],[10600.0,2,0.0],[11000.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[11400.0,0,0.0],[11800.0,2,0.0],[12000.0,3,0.0],[12200.0,2,0.0],[12600.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[13399.999,2,0.0],[13599.999,3,0.0],[13799.999,2,0.0],[14199.999,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[14599.999,0,0.0],[14999.999,2,0.0],[15199.999,3,0.0],[15399.999,2,0.0],[15799.999,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[16199.999,2,0.0],[16400.0,3,0.0],[16600.0,0,0.0],[16800.0,3,0.0],[17000.0,0,0.0],[17200.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[17800.0,3,0.0],[18000.0,0,0.0],[18200.0,2,0.0],[18400.0,3,0.0],[18600.0,0,0.0],[18800.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[19400.0,3,0.0],[19600.0,0,0.0],[19800.0,3,0.0],[20000.0,2,0.0],[20200.0,0,0.0],[20400.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[21000.0,2,0.0],[21200.0,3,0.0],[21400.0,0,0.0],[21600.0,3,0.0],[21800.0,0,0.0],[22000.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[22600.0,2,0.0],[22800.0,3,0.0],[23000.0,0,0.0],[23200.0,3,0.0],[23400.0,0,0.0],[23600.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[24200.0,3,0.0],[24400.0,0,0.0],[24600.0,2,0.0],[24800.0,3,0.0],[25000.0,0,0.0],[25200.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[25799.998,3,0.0],[25999.998,0,0.0],[26199.998,3,0.0],[26399.998,2,0.0],[26599.998,0,0.0],[26799.998,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[27399.998,2,0.0],[27599.998,3,0.0],[27799.998,0,0.0],[27999.998,3,0.0],[28199.998,0,0.0],[28399.998,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[28999.998,0,0.0],[29199.998,3,0.0],[29399.998,2,0.0],[29599.998,2,0.0],[29799.998,3,0.0],[29999.998,1,0.0],[30199.998,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[30399.998,2,0.0],[30599.998,3,0.0],[30699.998,0,0.0],[30799.998,3,0.0],[30999.998,2,0.0],[31199.998,0,300.0],[31599.998,1,200.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[32199.998,3,0.0],[32399.998,1,0.0],[32599.998,2,0.0],[32800.0,3,0.0],[33000.0,1,0.0],[33200.0,2,0.0],[33400.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[33600.0,0,0.0],[33800.0,0,0.0],[34000.0,3,0.0],[34200.0,3,0.0],[34400.0,2,300.0],[34800.0,1,300.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[35400.0,0,0.0],[35600.0,3,0.0],[35800.0,2,0.0],[36000.0,2,0.0],[36200.0,3,0.0],[36400.0,1,0.0],[36600.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[36800.0,2,0.0],[37000.0,3,0.0],[37100.0,0,0.0],[37200.0,3,0.0],[37400.0,2,0.0],[37600.0,0,300.0],[38000.0,1,200.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[38400.0,2,0.0],[38600.0,3,0.0],[38800.0,1,0.0],[39000.0,2,0.0],[39200.0,3,0.0],[39400.0,1,0.0],[39600.0,2,0.0],[39800.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[40000.0,0,0.0],[40200.0,0,0.0],[40400.0,3,0.0],[40600.0,3,0.0],[40800.0,2,300.0],[41200.0,1,300.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[41800.0,2,0.0],[42000.0,3,0.0],[42200.0,0,0.0],[42400.0,3,0.0],[42600.0,0,0.0],[42700.0,3,0.0],[42800.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[43400.0,2,0.0],[43600.0,0,0.0],[43800.0,3,0.0],[44000.0,3,0.0],[44200.0,0,0.0],[44300.0,3,0.0],[44400.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[45000.0,3,0.0],[45200.0,0,0.0],[45400.0,0,0.0],[45600.0,2,0.0],[45800.0,0,0.0],[45900.0,3,0.0],[46000.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[46600.0,2,0.0],[46800.0,3,0.0],[47000.0,0,0.0],[47200.0,3,0.0],[47400.0,0,0.0],[47500.0,3,0.0],[47600.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[48200.0,2,0.0],[48400.0,3,0.0],[48600.0,0,0.0],[48800.0,3,0.0],[49000.0,0,0.0],[49100.0,3,0.0],[49200.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[49800.0,2,0.0],[50000.0,0,0.0],[50200.0,3,0.0],[50400.0,3,0.0],[50600.0,0,0.0],[50700.0,3,0.0],[50800.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[51399.9961,3,0.0],[51599.9961,0,0.0],[51799.9961,0,0.0],[51999.9961,2,0.0],[52199.9961,0,0.0],[52299.9961,3,0.0],[52399.9961,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[52999.9961,2,0.0],[53199.9961,3,0.0],[53399.9961,0,0.0],[53599.9961,3,0.0],[53799.9961,0,0.0],[53899.9961,3,0.0],[53999.9961,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[54399.9961,6,200.0],[54599.9961,2,0.0],[54799.9961,3,0.0],[54999.9961,0,0.0],[54999.9961,7,0.0],[55199.9961,3,0.0],[55199.9961,5,0.0],[55399.9961,0,0.0],[55499.9961,3,0.0],[55599.9961,1,0.0],[55599.9961,7,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[55999.9961,0,0.0],[56199.9961,6,0.0],[56199.9961,2,0.0],[56399.9961,0,0.0],[56399.9961,4,0.0],[56599.9961,7,0.0],[56599.9961,3,0.0],[56799.9961,7,0.0],[56799.9961,1,200.0],[56999.9961,4,0.0],[57099.9961,7,0.0],[57199.9961,5,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[57599.9961,6,200.0],[57799.9961,3,0.0],[57999.9961,0,0.0],[58199.9961,0,0.0],[58199.9961,7,0.0],[58399.9961,2,0.0],[58399.9961,5,0.0],[58599.9961,0,0.0],[58699.9961,3,0.0],[58799.9961,1,0.0],[58799.9961,7,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[59199.9961,4,0.0],[59399.9961,2,0.0],[59399.9961,6,0.0],[59599.9961,4,0.0],[59599.9961,3,0.0],[59799.9961,0,0.0],[59799.9961,7,0.0],[59999.9961,6,0.0],[59999.9961,3,0.0],[60199.9961,6,0.0],[60199.9961,0,0.0],[60299.9961,3,0.0],[60399.9961,4,0.0],[60399.9961,1,0.0],[60599.9961,4,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[60999.9961,2,0.0],[61199.9961,3,0.0],[61399.9961,0,0.0],[61599.9961,3,0.0],[61799.9961,0,0.0],[61899.9961,3,0.0],[61999.9961,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[62599.9961,2,0.0],[62799.9961,0,0.0],[62999.9961,3,0.0],[63199.9961,3,0.0],[63399.9961,0,0.0],[63499.9961,3,0.0],[63599.9961,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[64199.9961,3,0.0],[64399.9961,0,0.0],[64599.9961,0,0.0],[64799.9961,2,0.0],[64999.9961,0,0.0],[65099.9961,3,0.0],[65199.9961,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[65800.0,2,0.0],[66000.0,3,0.0],[66200.0,0,0.0],[66400.0,3,0.0],[66600.0,0,0.0],[66700.0,3,0.0],[66800.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[67400.0,0,0.0],[67600.0,3,0.0],[67800.0,2,0.0],[68000.0,2,0.0],[68200.0,3,0.0],[68400.0,1,0.0],[68600.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[68800.0,2,0.0],[69000.0,3,0.0],[69100.0,0,0.0],[69200.0,3,0.0],[69400.0,2,0.0],[69600.0,0,300.0],[70000.0,1,200.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[70600.0,3,0.0],[70800.0,1,0.0],[71000.0,2,0.0],[71200.0,3,0.0],[71400.0,1,0.0],[71600.0,2,0.0],[71800.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[72000.0,0,0.0],[72200.0,0,0.0],[72400.0,3,0.0],[72600.0,3,0.0],[72800.0,2,300.0],[73200.0,1,300.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[73800.0,0,0.0],[74000.0,3,0.0],[74200.0,2,0.0],[74400.0,2,0.0],[74600.0,3,0.0],[74800.0,1,0.0],[75000.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[75200.0,2,0.0],[75400.0,3,0.0],[75500.0,0,0.0],[75600.0,3,0.0],[75800.0,2,0.0],[76000.0,0,300.0],[76400.0,1,200.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[76800.0,2,0.0],[77000.0,3,0.0],[77200.0,1,0.0],[77400.0,2,0.0],[77600.0,3,0.0],[77800.0,1,0.0],[78000.0,2,0.0],[78200.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[78400.0,0,0.0],[78600.0,0,0.0],[78800.0,3,0.0],[79000.0,3,0.0],[79200.0,2,300.0],[79600.0,1,300.0]]}]},"generatedBy":"SNIFF ver.6"}),
  },
  Philly: {
    name: "Philly",
    player: Characters.Boyfriend,
    opponent: Characters.Pico,
    background: {
      spriteName: "Background_3",
      scale: 3,
      offset: [0,0],
    },
    offset: 100,
    Vocals: "assets/Philly_Voices.mp3",
    Inst: "assets/Philly_Inst.mp3",
    songLength: 104,
    speed: 2.25,
    camEFX: false,
    song: Translate({"song":{"song":"Philly Nice","bpm":175.0,"needsVoices":true,"player1":"bf","player2":"pico","speed":2.0,"notes":[{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[2914.28564,2,0.0],[3085.71436,0,0.0],[3428.57129,1,257.142853],[3771.42847,3,171.428574]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[4285.71436,2,0.0],[4457.14258,0,0.0],[4800.0,1,257.142853],[5142.857,3,171.428574]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[5657.14258,2,0.0],[5828.57129,0,0.0],[6171.42871,1,257.142853],[6514.28564,3,171.428574]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[6857.14258,0,0.0],[7028.57129,3,0.0],[7200.0,2,0.0],[7542.857,2,0.0],[7885.71436,0,0.0],[8057.14258,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[8400.0,2,0.0],[8571.429,0,0.0],[8914.285,1,257.142853],[9257.143,3,171.428574]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[9771.429,2,0.0],[9942.857,0,0.0],[10285.7139,1,257.142853],[10628.5713,3,171.428574]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[11142.8574,2,0.0],[11314.2852,0,0.0],[11657.1426,1,257.142853],[12000.0,3,171.428574]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[12342.8574,0,0.0],[12514.2852,3,0.0],[12685.7139,2,0.0],[13028.5713,2,0.0],[13371.4287,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[13885.7139,2,0.0],[14057.1426,0,0.0],[14400.0,0,0.0],[14742.8574,3,0.0],[14914.2852,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[15257.1426,3,0.0],[15428.5713,0,0.0],[15771.4287,2,0.0],[16114.2852,0,0.0],[16285.7139,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[16628.57,0,0.0],[16800.0,1,0.0],[16971.4277,3,0.0],[17142.8574,1,0.0],[17314.2852,0,0.0],[17485.7148,1,0.0],[17657.1426,3,0.0],[17742.8574,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[17828.57,3,0.0],[18000.0,3,0.0],[18171.4277,1,0.0],[18514.2852,2,0.0],[18857.1426,2,0.0],[19028.57,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[19371.4277,2,0.0],[19542.8574,0,0.0],[19885.7148,0,0.0],[20228.57,3,0.0],[20400.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[20742.8574,3,0.0],[20914.2852,0,0.0],[21257.1426,2,0.0],[21600.0,0,0.0],[21771.4277,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[22114.2852,0,0.0],[22285.7148,1,0.0],[22457.1426,3,0.0],[22628.57,1,0.0],[22800.0,0,0.0],[22971.4277,1,0.0],[23142.8574,3,0.0],[23228.57,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[23314.2852,3,0.0],[23485.7148,3,0.0],[23657.1426,1,0.0],[24000.0,2,0.0],[24342.8574,2,0.0],[24514.2852,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[24685.7148,2,0.0],[24857.1426,2,0.0],[25028.57,0,0.0],[25371.4277,0,0.0],[25714.2852,3,0.0],[25885.7148,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[26228.57,3,0.0],[26400.0,0,0.0],[26742.8574,2,0.0],[27085.7148,0,0.0],[27257.1426,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[27600.0,0,0.0],[27771.4277,1,0.0],[27942.8574,3,0.0],[28114.2852,1,0.0],[28285.7148,0,0.0],[28457.1426,1,0.0],[28628.57,3,0.0],[28714.2852,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[28800.0,3,0.0],[28971.4277,3,0.0],[29142.8574,1,0.0],[29485.7148,2,0.0],[29828.57,2,0.0],[30000.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[30171.4277,2,0.0],[30342.8574,2,0.0],[30514.2852,0,0.0],[30857.1426,0,0.0],[31200.0,3,0.0],[31371.4277,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[31714.2852,3,0.0],[31885.7148,0,0.0],[32228.57,2,0.0],[32571.4277,0,0.0],[32742.8574,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[33085.7148,0,0.0],[33257.14,1,0.0],[33428.57,3,0.0],[33600.0,1,0.0],[33771.43,0,0.0],[33942.8555,1,0.0],[34114.2852,3,0.0],[34200.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[34285.7148,3,0.0],[34457.14,3,0.0],[34628.57,1,0.0],[34971.43,2,0.0],[35314.2852,2,0.0],[35485.7148,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[35657.14,2,0.0],[35828.57,3,0.0],[36000.0,1,0.0],[36171.43,0,0.0],[36342.8555,2,0.0],[36514.2852,3,0.0],[36685.7148,0,0.0],[36857.14,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[37028.57,2,0.0],[37200.0,3,0.0],[37371.43,2,0.0],[37542.8555,0,0.0],[37714.2852,2,0.0],[37885.7148,3,0.0],[38057.14,0,0.0],[38228.57,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[38400.0,2,0.0],[38571.43,3,0.0],[38742.8555,1,0.0],[38914.2852,0,0.0],[39085.7148,2,0.0],[39257.14,3,0.0],[39428.57,0,0.0],[39600.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[39771.43,2,0.0],[39942.8555,3,0.0],[40114.2852,2,0.0],[40285.7148,0,0.0],[40457.14,2,0.0],[40628.57,3,0.0],[40800.0,0,0.0],[40971.43,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[41142.8555,2,0.0],[41314.2852,3,0.0],[41485.7148,1,0.0],[41657.14,0,0.0],[41828.57,2,0.0],[42000.0,3,0.0],[42171.43,0,0.0],[42342.8555,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[42514.2852,2,0.0],[42685.7148,3,0.0],[42857.14,2,0.0],[43028.57,0,0.0],[43200.0,2,0.0],[43371.43,3,0.0],[43542.8555,0,0.0],[43714.2852,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[43885.7148,2,0.0],[44057.14,3,0.0],[44228.57,1,0.0],[44400.0,0,0.0],[44571.43,2,0.0],[44742.8555,3,0.0],[44914.2852,0,0.0],[45085.7148,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[45257.14,2,0.0],[45428.57,3,0.0],[45600.0,2,0.0],[45771.43,0,0.0],[45942.8555,2,0.0],[46114.2852,3,0.0],[46285.7148,0,0.0],[46457.14,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[46628.57,2,0.0],[46800.0,3,0.0],[46971.43,1,0.0],[47142.8555,0,0.0],[47314.2852,2,0.0],[47485.7148,3,0.0],[47657.14,0,0.0],[47828.57,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[48000.0,2,0.0],[48171.43,3,0.0],[48342.8555,2,0.0],[48514.2852,0,0.0],[48685.7148,2,0.0],[48857.14,3,0.0],[49028.57,0,0.0],[49200.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[49371.43,2,0.0],[49542.8555,3,0.0],[49714.2852,1,0.0],[49885.7148,0,0.0],[50057.14,2,0.0],[50228.57,3,0.0],[50400.0,0,0.0],[50571.43,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[50742.8555,2,0.0],[50914.2852,3,0.0],[51085.7148,2,0.0],[51257.14,0,0.0],[51428.57,2,0.0],[51600.0,3,0.0],[51771.43,0,0.0],[51942.8555,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[52114.2852,2,0.0],[52285.7148,3,0.0],[52457.14,1,0.0],[52628.57,0,0.0],[52800.0,2,0.0],[52971.43,3,0.0],[53142.8555,0,0.0],[53314.2852,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[53485.7148,2,0.0],[53657.14,3,0.0],[53828.57,2,0.0],[54000.0,0,0.0],[54171.43,2,0.0],[54342.8555,3,0.0],[54514.2852,0,0.0],[54685.7148,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[54857.14,2,0.0],[55028.57,3,0.0],[55200.0,1,0.0],[55371.43,0,0.0],[55542.8555,2,0.0],[55714.2852,3,0.0],[55885.7148,0,0.0],[56057.14,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[56228.57,2,0.0],[56400.0,3,0.0],[56571.43,2,0.0],[56742.8555,0,0.0],[56914.2852,2,0.0],[57085.7148,3,0.0],[57257.14,0,0.0],[57428.57,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[57600.0,3,0.0],[57771.43,3,0.0],[57942.8555,1,0.0],[58114.2852,1,0.0],[58285.7148,2,0.0],[58457.14,2,0.0],[58800.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[58971.43,2,0.0],[59142.8555,3,0.0],[59228.57,0,0.0],[59314.2852,3,0.0],[59485.7148,3,0.0],[59657.14,2,0.0],[59828.57,0,0.0],[60000.0,0,0.0],[60171.43,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[60342.8555,3,0.0],[60514.2852,3,0.0],[60600.0,0,0.0],[60685.7148,3,0.0],[60857.14,1,0.0],[61028.57,2,0.0],[61200.0,2,0.0],[61371.43,0,0.0],[61542.8555,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[61714.2852,2,0.0],[61885.7148,3,0.0],[62057.14,0,0.0],[62228.57,3,0.0],[62400.0,2,0.0],[62742.8555,1,0.0],[62914.2852,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[63085.7148,3,0.0],[63257.14,3,0.0],[63428.57,1,0.0],[63600.0,1,0.0],[63771.43,2,0.0],[63942.8555,2,0.0],[64285.7148,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[64457.14,2,0.0],[64628.57,3,0.0],[64714.2852,0,0.0],[64800.0,3,0.0],[64971.43,3,0.0],[65142.8555,2,0.0],[65314.2852,0,0.0],[65485.7148,0,0.0],[65657.14,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[65828.57,3,0.0],[66000.0,3,0.0],[66085.71,0,0.0],[66171.43,3,0.0],[66342.86,1,0.0],[66514.28,2,0.0],[66685.71,2,0.0],[66857.14,0,0.0],[67028.57,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[67200.0,2,0.0],[67371.43,3,0.0],[67542.86,0,0.0],[67714.28,3,0.0],[67885.71,2,0.0],[68228.57,1,0.0],[68400.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[68571.43,2,0.0],[68914.28,1,0.0],[69085.71,3,0.0],[69257.14,2,0.0],[69600.0,1,0.0],[69771.43,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[69942.86,0,0.0],[70114.28,3,0.0],[70285.71,1,0.0],[70457.14,3,0.0],[70628.57,2,0.0],[70971.43,2,0.0],[71142.86,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[71314.28,3,0.0],[71485.71,1,0.0],[71657.14,0,0.0],[71828.57,3,0.0],[72000.0,2,0.0],[72342.86,0,0.0],[72514.28,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[72685.71,3,0.0],[72857.14,3,0.0],[73028.57,2,0.0],[73200.0,0,0.0],[73371.43,2,0.0],[73542.86,3,0.0],[73714.28,0,0.0],[73885.71,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[74057.14,2,0.0],[74400.0,1,0.0],[74571.43,3,0.0],[74742.86,2,0.0],[75085.71,1,0.0],[75257.14,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[75428.57,0,0.0],[75600.0,3,0.0],[75771.43,1,0.0],[75942.86,3,0.0],[76114.28,2,0.0],[76457.14,2,0.0],[76628.57,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[76800.0,3,0.0],[76971.43,1,0.0],[77142.86,0,0.0],[77314.28,3,0.0],[77485.71,2,0.0],[77828.57,0,0.0],[78000.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[78171.43,3,0.0],[78342.86,3,0.0],[78514.28,2,0.0],[78685.71,0,0.0],[78857.14,2,0.0],[79028.57,3,0.0],[79200.0,0,0.0],[79371.43,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[79542.86,2,0.0],[79714.28,3,0.0],[79885.71,1,0.0],[80057.14,0,0.0],[80228.57,2,0.0],[80400.0,3,0.0],[80571.43,0,0.0],[80742.86,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[80914.28,2,0.0],[81085.71,3,0.0],[81257.14,2,0.0],[81428.57,0,0.0],[81600.0,2,0.0],[81771.43,3,0.0],[81942.86,0,0.0],[82114.28,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[82285.71,2,0.0],[82457.14,3,0.0],[82628.57,1,0.0],[82800.0,0,0.0],[82971.43,2,0.0],[83142.86,3,0.0],[83314.28,0,0.0],[83485.71,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[83657.14,2,0.0],[83828.57,3,0.0],[84000.0,2,0.0],[84171.43,0,0.0],[84342.86,2,0.0],[84514.28,3,0.0],[84685.71,0,0.0],[84857.14,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[85028.57,2,0.0],[85200.0,3,0.0],[85371.43,1,0.0],[85542.86,0,0.0],[85714.28,2,0.0],[85885.71,3,0.0],[86057.14,0,0.0],[86228.57,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[86400.0,2,0.0],[86571.43,3,0.0],[86742.86,2,0.0],[86914.28,0,0.0],[87085.71,2,0.0],[87257.14,3,0.0],[87428.57,0,0.0],[87600.0,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[87771.43,2,0.0],[87942.86,3,0.0],[88114.28,1,0.0],[88285.71,0,0.0],[88457.14,2,0.0],[88628.57,3,0.0],[88800.0,0,0.0],[88971.43,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[89142.86,2,0.0],[89314.28,3,0.0],[89485.71,2,0.0],[89657.14,0,0.0],[89828.57,2,0.0],[90000.0,3,0.0],[90171.43,0,0.0],[90342.86,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[90514.28,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]}]},"generatedBy":"SNIFF ver.6"}),
  },
  Blammed: {
    name: "Blammed",
    player: Characters.Boyfriend,
    opponent: Characters.Pico,
    background: {
      spriteName: "Background_3",
      scale: 3,
      offset: [0,0],
    },
    offset: 100,
    Vocals: "assets/Blammed_Voices.mp3",
    Inst: "assets/Blammed_Inst.mp3",
    songLength: 106,
    speed: 1.5,
    camEFX: false,
    song: Translate({"song":{"song":"Blammed","bpm":165.0,"needsVoices":true,"player1":"bf","player2":"pico","speed":2.3,"notes":[{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[11818.1816,1,0.0],[12000.0,3,0.0],[12181.8184,0,0.0],[12363.6367,0,0.0],[12545.4541,1,0.0],[12727.2725,3,181.818176]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[13090.9092,2,0.0],[13272.7275,0,0.0],[13454.5449,2,0.0],[13636.3633,3,0.0],[13727.2725,0,0.0],[13818.1816,3,0.0],[14000.0,3,0.0],[14181.8184,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[14727.2725,1,0.0],[14909.0908,3,0.0],[15090.9092,0,0.0],[15272.7275,0,0.0],[15454.5449,1,0.0],[15636.3633,3,0.0],[15818.1816,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[16000.0,3,0.0],[16181.8184,1,90.90909],[16363.6357,3,0.0],[16545.4551,2,0.0],[16727.2734,1,90.90909],[16909.09,3,0.0],[17090.9082,1,181.818176]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[17636.3633,1,0.0],[17818.1816,3,0.0],[18000.0,0,0.0],[18181.8184,0,0.0],[18363.6367,1,0.0],[18545.4551,3,181.818176]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[18909.09,2,0.0],[19090.9082,0,0.0],[19272.7266,2,0.0],[19454.5449,3,0.0],[19545.4551,0,0.0],[19636.3633,3,0.0],[19818.1816,3,0.0],[20000.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[20545.4551,1,0.0],[20727.2734,3,0.0],[20909.09,0,0.0],[21090.9082,0,0.0],[21272.7266,1,0.0],[21454.5449,3,0.0],[21636.3633,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[21818.1816,3,0.0],[22000.0,1,90.90909],[22181.8184,3,0.0],[22363.6367,2,0.0],[22545.4551,1,90.90909],[22727.2734,3,0.0],[22909.09,1,181.818176]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[23454.5449,2,0.0],[23636.3633,3,0.0],[23818.1816,3,0.0],[24000.0,2,0.0],[24181.8184,0,0.0],[24363.6367,3,0.0],[24545.4551,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[24727.2734,3,0.0],[24909.09,1,0.0],[25090.9082,0,0.0],[25272.7266,1,0.0],[25454.5449,2,0.0],[25636.3633,3,0.0],[25818.1816,0,0.0],[26000.0,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[26363.6367,2,0.0],[26545.4551,3,0.0],[26727.2734,3,0.0],[26909.09,1,0.0],[27090.9082,0,0.0],[27272.7266,3,0.0],[27454.5449,2,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[27636.3633,3,0.0],[27818.1816,0,0.0],[28000.0,1,0.0],[28181.8184,1,0.0],[28363.6367,3,0.0],[28545.4551,2,0.0],[28727.2715,0,0.0],[28909.09,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[29272.7266,2,0.0],[29454.5449,3,0.0],[29636.3633,3,0.0],[29818.1816,2,0.0],[30000.0,0,0.0],[30181.8184,3,0.0],[30363.6367,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[30545.4551,3,0.0],[30727.2715,1,0.0],[30909.09,0,0.0],[31090.9082,1,0.0],[31272.7266,2,0.0],[31454.5449,3,0.0],[31636.3633,0,0.0],[31818.1816,1,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[32181.8184,2,0.0],[32363.6367,3,0.0],[32545.4551,3,0.0],[32727.2715,1,0.0],[32909.09,0,0.0],[33090.91,3,0.0],[33272.7266,2,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[33454.5469,3,0.0],[33636.3633,0,0.0],[33818.18,1,0.0],[34000.0,1,0.0],[34181.8164,3,0.0],[34363.6367,2,0.0],[34545.4531,0,0.0],[34727.2734,1,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[35090.91,0,0.0],[35272.7266,2,181.818176],[35636.3633,3,0.0],[35818.18,3,0.0],[36000.0,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[36363.6367,2,181.818176],[36727.2734,3,0.0],[37090.91,2,0.0],[37454.5469,0,0.0],[37636.3633,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[38000.0,0,0.0],[38181.8164,2,181.818176],[38545.4531,3,0.0],[38727.2734,3,0.0],[38909.09,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[39272.7266,0,272.727264],[39636.3633,1,0.0],[40000.0,3,0.0],[40090.91,3,0.0],[40181.8164,1,0.0],[40363.6367,2,0.0],[40545.4531,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[40909.09,0,0.0],[41090.91,2,181.818176],[41454.5469,3,0.0],[41636.3633,3,0.0],[41818.18,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[42181.8164,2,181.818176],[42545.4531,3,0.0],[42909.09,2,0.0],[43272.7266,0,0.0],[43454.5469,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[43818.18,0,0.0],[44000.0,2,181.818176],[44363.6367,3,0.0],[44545.4531,3,0.0],[44727.2734,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[45090.91,0,272.727264],[45454.5469,1,0.0],[45818.18,3,0.0],[45909.09,3,0.0],[46000.0,1,0.0],[46181.8164,2,0.0],[46363.6367,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[46545.4531,0,0.0],[46727.2734,0,0.0],[46909.09,3,0.0],[47090.91,1,0.0],[47181.8164,3,0.0],[47272.7266,1,0.0],[47454.5469,0,0.0],[47636.3633,1,0.0],[47818.18,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[48000.0,2,0.0],[48181.8164,2,0.0],[48363.6367,3,0.0],[48545.4531,2,0.0],[48727.2734,1,0.0],[48909.09,0,0.0],[49000.0,1,0.0],[49090.91,0,0.0],[49272.7266,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[49454.5469,3,0.0],[49636.3633,3,0.0],[49818.18,3,0.0],[50000.0,2,0.0],[50090.91,0,0.0],[50181.8164,2,0.0],[50363.6367,0,0.0],[50545.4531,0,0.0],[50727.2734,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[50909.09,0,0.0],[51090.91,0,0.0],[51272.7266,3,0.0],[51454.5469,3,0.0],[51636.3633,2,0.0],[51818.18,0,0.0],[52000.0,2,0.0],[52181.8164,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[52363.6367,0,0.0],[52545.4531,0,0.0],[52727.2734,3,0.0],[52909.09,1,0.0],[53000.0,3,0.0],[53090.91,1,0.0],[53272.7266,0,0.0],[53454.5469,1,0.0],[53636.3633,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[53818.18,2,0.0],[54000.0,2,0.0],[54181.8164,3,0.0],[54363.6367,2,0.0],[54545.4531,1,0.0],[54727.2734,0,0.0],[54818.18,1,0.0],[54909.09,0,0.0],[55090.91,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[55272.7266,3,0.0],[55454.5469,3,0.0],[55636.3633,3,0.0],[55818.18,2,0.0],[55909.09,0,0.0],[56000.0,2,0.0],[56181.8164,5,0.0],[56181.8164,0,0.0],[56363.6367,4,0.0],[56363.6367,0,0.0],[56545.4531,4,0.0],[56545.4531,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[56727.2734,7,0.0],[56727.2734,0,0.0],[56909.09,7,0.0],[56909.09,0,0.0],[57090.91,6,0.0],[57090.91,3,0.0],[57272.7266,7,0.0],[57272.7266,3,0.0],[57454.543,6,272.727264],[57454.543,2,0.0],[57636.3633,0,0.0],[57818.18,7,272.727264],[57818.18,2,0.0],[58000.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[58181.8164,0,0.0],[58363.6367,0,0.0],[58545.4531,3,0.0],[58727.2734,1,0.0],[58818.18,3,0.0],[58909.09,1,0.0],[59090.91,0,0.0],[59272.7266,1,0.0],[59454.543,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[59636.3633,2,0.0],[59818.18,2,0.0],[60000.0,3,0.0],[60181.8164,2,0.0],[60363.6367,1,0.0],[60545.4531,0,0.0],[60636.3633,1,0.0],[60727.2734,0,0.0],[60909.09,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[61090.91,3,0.0],[61272.7266,3,0.0],[61454.543,3,0.0],[61636.3633,2,0.0],[61727.2734,0,0.0],[61818.18,2,0.0],[62000.0,0,0.0],[62181.8164,0,0.0],[62363.6367,0,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[62545.4531,2,0.0],[62727.2734,3,0.0],[62909.09,2,0.0],[63090.91,0,0.0],[63272.7266,1,0.0],[63454.543,0,0.0],[63636.3633,2,0.0],[63818.18,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[64000.0,0,0.0],[64181.8164,0,0.0],[64363.6367,3,0.0],[64545.4531,1,0.0],[64636.3633,3,0.0],[64727.2734,1,0.0],[64909.09,0,0.0],[65090.91,1,0.0],[65272.7266,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[65454.543,2,0.0],[65636.36,2,0.0],[65818.18,3,0.0],[66000.0,2,0.0],[66181.82,1,0.0],[66363.63,0,0.0],[66454.55,1,0.0],[66545.45,0,0.0],[66727.27,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[66909.09,3,0.0],[67090.91,3,0.0],[67272.73,3,0.0],[67454.55,2,0.0],[67545.45,0,0.0],[67636.36,2,0.0],[67818.18,0,0.0],[68000.0,0,0.0],[68181.82,0,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[68363.63,2,0.0],[68545.45,3,0.0],[68727.27,2,0.0],[68909.09,0,0.0],[69090.91,1,0.0],[69272.73,0,0.0],[69454.55,2,0.0],[69636.36,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[69818.18,5,272.727264],[70000.0,0,0.0],[70181.82,2,181.818176],[70545.45,3,0.0],[70727.27,3,0.0],[70909.09,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[71272.73,2,181.818176],[71636.36,3,0.0],[72000.0,2,0.0],[72363.63,0,0.0],[72545.45,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[72909.09,0,0.0],[73090.91,2,181.818176],[73454.55,3,0.0],[73636.36,3,0.0],[73818.18,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[74181.82,0,272.727264],[74545.45,1,0.0],[74909.09,3,0.0],[75000.0,3,0.0],[75090.91,1,0.0],[75272.73,2,0.0],[75454.55,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[75818.18,0,0.0],[76000.0,2,181.818176],[76363.63,3,0.0],[76545.45,3,0.0],[76727.27,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[77090.91,2,181.818176],[77454.55,3,0.0],[77818.18,2,0.0],[78181.82,0,0.0],[78363.63,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[78727.27,0,0.0],[78909.09,2,181.818176],[79272.73,3,0.0],[79454.55,3,0.0],[79636.36,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[80000.0,0,272.727264],[80363.63,1,0.0],[80727.27,3,0.0],[80818.18,3,0.0],[80909.09,1,0.0],[81090.91,2,0.0],[81272.73,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[81636.36,0,0.0],[81727.27,0,0.0],[81818.18,2,181.818176],[82181.82,3,0.0],[82363.63,3,0.0],[82545.45,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[82909.09,2,181.818176],[83272.73,3,0.0],[83636.36,2,0.0],[84000.0,0,0.0],[84181.82,3,0.0]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[84545.45,0,0.0],[84727.27,2,181.818176],[85090.91,3,0.0],[85272.73,3,0.0],[85454.55,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":false,"sectionNotes":[[85818.18,0,272.727264],[86181.82,1,0.0],[86545.45,3,0.0],[86636.36,3,0.0],[86727.27,1,0.0],[86909.09,2,0.0],[87090.91,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[87454.55,0,0.0],[87545.45,0,0.0],[87636.36,2,181.818176],[88000.0,3,0.0],[88181.82,3,0.0],[88363.63,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[88727.27,2,181.818176],[89090.91,3,0.0],[89454.55,2,0.0],[89818.18,0,0.0],[90000.0,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[90363.63,0,0.0],[90545.45,2,181.818176],[90909.09,3,0.0],[91090.91,3,0.0],[91272.73,1,272.727264]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[[91636.36,0,272.727264],[92000.0,1,0.0],[92363.63,3,0.0],[92454.55,3,0.0],[92545.45,1,0.0],[92727.27,2,0.0],[92909.09,3,0.0]]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]},{"lengthInSteps":16,"mustHitSection":true,"sectionNotes":[]}]},"generatedBy":"SNIFF ver.6"}),
  },
};
var song = "";
var movingCam = false;
var state = "LOADING";
var id = encodeURIComponent(getUserId());
var Settings = new S_Config();
Settings.Scrollspeed = 1;
var Achievements = new A_Config();
var Player;
var Opponent;
/*var Girlfriend; --- UNUSED --- */
var notes = [];
var holdNotes = [];
var ratingPops = [];
var Splashes = [];
var lanes = {
  "BF": [Stay(35), Stay(75), Stay(115), Stay(155), Stay(35), Stay(75), Stay(115), Stay(155)],
  "OPPONENT": [Stay(240), Stay(280), Stay(320), Stay(360), Stay(240), Stay(280), Stay(320), Stay(360)],
};
var lady = createSprite(260, 270);
var logo = loadImage("https://cdn.discordapp.com/attachments/974444449834864691/1003412631329189888/Screenshot_74-removebg-preview.png");
lady.setAnimation("lady2");
lady.frameDelay = 0.5;
lady.scale = 0.85;
var rate = World.frameRate || 30;
var Background = 0;
var alarm = [0, rate * 6, 0];
var counter = 1;
var menuSelected = "storyMode";
var weekSelected = 1;
var loaded = {
  preloadedSongs: false,
  variables: true,
};
var wait = false;
var currentStats = {
  Misses: 0,
  Score: 0,
  Side: "BF",
  Hits: 0,
  getRating: function() {
    var m = this.Misses;
    var h = this.Hits;
    var accuracy = (((h - m) /  h) * 100).toString().substring(0,4) + "%";
    var rating = "";
    if (m > 14) {
      rating = "Trash!";
    }
    if (m >= 9 && m < 15) {
      rating = "Bad";
    }
    if (m >= 2 && m < 10) {
      rating = "SDCB";
    }
    if (m > 0 && m < 3) {
      rating = "Sick!";
    }
    if (m === 0) {
      if (h === 0) {
        rating = "???";
      } else {
        rating = "Perfect!";
      }
    }
    return (accuracy + " - " + rating);
  },
};
currentStats.Reset = function() {
  currentStats.Score = 0;
  currentStats.Misses = 0;
  currentStats.Hits = 0;
  currentStats.Side = "BF";
}
var inf = Math.pow(Math.pow(Math.pow(999, 9999), Math.pow(999, 9999)), Math.pow(Math.pow(999, 9999), Math.pow(999, 9999)));
var arrows = {
  Left: createSprite(lanes.BF[0], 75),
  Down: createSprite(lanes.BF[1], 75),
  Up: createSprite(lanes.BF[2], 75),
  Right: createSprite(lanes.BF[3], 75),
  
  LeftAnim: "LeftArrow",
  DownAnim: "DownArrow",
  UpAnim: "UpArrow",
  RightAnim: "RightArrow",
  
  OpponentLeft: createSprite(lanes.OPPONENT[0], 75),
  OpponentDown: createSprite(lanes.OPPONENT[1], 75),
  OpponentUp: createSprite(lanes.OPPONENT[2], 75),
  OpponentRight: createSprite(lanes.OPPONENT[3], 75),
  
  OpponentLeftAnim: "LeftArrow",
  OpponentDownAnim: "DownArrow",
  OpponentUpAnim: "UpArrow",
  OpponentRightAnim: "RightArrow",
};
var menuBG = createSprite(200,200);
var storyMode = createSprite(200, 200);
var hitWindow = [
  [-14, 14, "Perfect!!", 500],
  [-30, 30, "Sick!", 300],
  [-50, 50, "Good", 150],
  [-60, 60, "Good", 50],
  [-90, 90, "Bad", 0],
  [(-105 - (notes.length*1.15)), (105 + (notes.length*1.15)), "Trash!", -200],
];
Settings.Downscroll = false;
loaded.variables = true;
preloadSongs();
var Weeks = createSprite(200,275);
var SelectionWeek = createSprite(200,100);
var storyArrowUp = createSprite(200,245);
var storyArrowDown = createSprite(207,310);
storyArrowUp.setAnimation("storyArrows");
storyArrowDown.setAnimation("storyArrows");
storyArrowUp.rotation = 90;
storyArrowDown.rotation = 270;
storyArrowUp.pause();
storyArrowDown.pause();
storyArrowUp.scale = 0.45;
storyArrowDown.scale= 0.45;
Weeks.setAnimation("Weeks");
SelectionWeek.scale = 0.32;
Weeks.scale = 0.5;
Weeks.pause();
function draw() {
  World.frameRate = 30;
  window.calculate(30);
  
  background("black");
  
  switch (state) {
    case "LOADING":
      background("white");
      checkLoaded();
      break;
    case "MENU":
      lady.display();
      if (logo) {
        image(logo, 0, -20, 222 + Math.sin(alarm[2] / rate) * 10, 222 + Math.sin(alarm[2] / rate) * 10);
      }
      if (alarm[2] < rate / 2) {
        alarm[2] += delta;
      } else {
        alarm[2] = 0;
      }
      //console.log(alarm[0]);
      if (alarm[0] > rate || alarm[0] < 0) {
        counter *= -1;
      }
      alarm[0] += counter;
      if ((keyWentDown("enter") || keyWentDown("space")) && !wait) {
        playSound("assets/confirmMenu.mp3", false, function(loaded) {
          if (loaded) {
            alarm[1] = rate * 6;
            wait = true;
          }
        });
      } else if (wait && alarm[1] < 0) {
        logo = null;
        state = "MENU_SELECT";
        return;
      }
      fill(255, 255, 255, 255 * (World.frameCount % 3) * wait);
      stroke(0, 242, 222, (255 / rate) * alarm[0] * !wait);
      textSize(40);
      textAlign(CENTER);
      text("Press Enter To Begin", 200, 375);
      fill(255, 255, 255, (255 / (rate * 6)) * alarm[1]);
      noStroke();
      rect(0, 0, 400, 400);
      alarm[1] -= wait * 3 || 1;
      break;
    case "SONG":
      OpponentNotes();
      NoteInputs();
      
      drawBackground();
      drawCharacters();
      drawRatings();
      drawArrows();
      drawNotes();
      drawTrails();
      drawSplashes();
      
      SyncLanes();
      
      textAlign(LEFT, TOP);
      fill("white");
      textSize(15);
      if (song !== undefined && typeof song === "string" && song !== "") {
        text("FPS: " + (Math.round(World.frameRate)), Stay(10), 20);
        text(song, Stay(10), 5);
      }
      fill("white");
      stroke("black");
      textAlign(CENTER, BOTTOM);
      textSize(20);
      text("Score: " + currentStats.Score + " | Misses: " + currentStats.Misses + " | " + currentStats.getRating(), Stay(200), 385);
      break;
    case "MENU_SELECT": 
      menuBG.setAnimation("menuBG");
      menuBG.scale = 1.85;
      menuBG.display();
      
      MenuSelection();
      break;
    case "WEEKSELECTION":
      camera.x = 200;
      camera.y = 200;
      
      Weeks.display();
      SelectionWeek.display();
      storyArrowUp.display();
      storyArrowDown.display();
      WeekSelection();
      break;
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
