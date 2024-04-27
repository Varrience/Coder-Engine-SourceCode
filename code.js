var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = { "orderedKeys": ["5485a571-ff11-4292-a886-3513c2b913af", "49fbe056-51b9-4f50-bca1-47fe9f5c379d", "5f6703e5-af6c-4e54-a33a-f8256e17e47d", "7be1a4b1-3381-4ca6-bae6-42dfb3321af5", "711212a6-437d-47d2-8852-a6d69fe94fbd", "86ef043d-27e2-4c8a-b039-4a6f4dccbda1", "105d08fa-8236-4ba6-ab38-9992bb013ed9", "c68e7fbe-f342-41c4-ad06-e116e10f60b2", "74674f49-e8c9-4fa9-8b7a-21e707bd6d86", "f357ee2c-7bf7-4f5a-add1-b06c21d20280", "75a2c999-20ab-4329-86e2-42eccf33b8cd", "cc5a671f-985b-43e5-8ca1-1d4f7b364b30", "8d7dbda9-3658-4ee0-83d5-a326c629c2a8", "b0c295c5-a75a-4c8a-88e2-4518f8bce66b", "5a87a19a-7283-4245-9cc6-bba344fc79f7", "e07c4196-d93d-4963-acdc-79a0e0de1d5a", "69819ab9-0d27-4f29-a5de-ec9262aae26e", "dbd99e53-9979-45a5-b5c1-3afd0984bbe5", "f5b75cb3-18ef-4771-b8e5-6aeefd238801", "17ab6bd4-96b1-4f5a-afe1-c3c278124729", "ea976e85-cf63-4892-a260-f94b8cd426f3", "0507e64d-fc69-438a-a6ff-03828b0651fa", "8add17f5-448e-49c0-b8ec-95b608730452", "b2a9d65c-5dd4-4c5f-8444-c0bdfba5787e", "56decc2b-ec39-4d42-aedb-ab370dd849b0", "c06de83e-cc9f-4cb9-853c-805532b412a8", "24e31f8d-0e55-4885-af0b-86e194192bde", "5caa2980-a30a-46e9-9392-2db519efed20", "d4d4ada5-c2a7-4039-a735-58d9c8fb6657", "6ec70fb2-8f4d-4173-aa69-98128bb61ad3", "1d7f56f0-fbac-40c0-acac-0f97f2480268", "532c53ca-c366-465b-977e-37d335ce5893", "5ba087ae-352e-4d45-8875-aac969a8f939", "ebcd85ab-4372-47be-b778-e2422b9ad23e", "7f79dbdd-9125-40bd-a0e2-9e34bc66c143", "9764e9d4-c91c-404f-83af-a164206b8df4", "9f102095-b090-4c5d-bd50-6afd005d3b7d", "db05cb43-e4fe-477a-a6f9-911aaa741ca6", "77a716d5-9e37-4fb7-a535-49e0ea662684", "267bb7e4-34bf-450a-b802-7e66636904f0", "8965e889-c0fb-4063-877e-81d9de27580e", "f8232b9d-75c7-4d10-a513-d82681f617b6", "9adb0ee8-2c71-4fdf-a41b-fe2078c5a97f", "72e19f79-b0c5-4ce3-bed7-7542353c60bd", "e4617e39-f8f0-440c-9b54-73e82f87aa9e", "c72a7066-cd19-41e4-b43e-c382f7274022", "37919a28-af2c-4945-bbd9-44a7239c1203", "2b012ade-6022-4190-8098-37c488b343ee", "f1e904e8-4ddb-4c8b-9a86-ab5921e977cb", "c38e1834-7eea-4933-b94f-d272c2251c12", "307ddf8f-a50b-40cf-9743-13e140e98238", "9714b687-6068-41c8-bcee-185e6e89c714", "8e6b2711-9801-4a1f-89b0-7f5eccb6009b", "05cd50da-c89c-46dd-93ea-80f5f2b4f513", "1f922a43-4e4f-4cae-bf68-900736c2a081", "d258b361-4641-4b5a-a24a-d9e056261f91", "d544ca22-2079-44a9-a5c3-43847e998252", "0b629895-54a1-46a3-9f32-ee67b2b9b0ab", "cd335291-8950-4f8c-98a3-6a67dd6732c0", "1c5b843e-fbe0-42d0-842d-9879b2520d52", "86ec2837-6e61-4e3c-b5e0-4fa5dfaf9514", "f25ac9f2-1e90-41a9-a513-515a1f53e9e1", "86fabf66-3de0-408d-b894-c588f9ce5056", "0a3c75e6-cfc1-4821-94e7-0e5b4511c5a8", "30087f90-9db7-498f-a89f-23563e060f6d", "5d93b7b7-ab8a-44dc-94c7-b070174dfcb5", "60dd4a4f-61f3-49d7-87b6-ed1a7233680d", "65c23c3d-efb9-4a9a-9c89-c234fb848c25", "a823417e-eaf4-446f-a509-56846d00e895", "5c10944b-7c25-4222-9bd2-3d48bb6549b3", "865825a8-6f5c-4a37-ae70-a9b97f66df31", "6fc60da2-0682-40bb-a9d8-210453ccb30d", "4703e979-6f98-4754-8a68-2416e7c47569", "40e4ac61-cc34-49b4-a2cf-935243c7904a", "4c83998f-9249-456e-aa10-6aad82a30252", "95dbf513-8658-418d-8b49-dc764ae707ca", "60872ed4-57d9-4c27-9964-05c23d7226b0", "7149e50c-a967-4193-a5aa-aaf4f8aa2d9b", "f53cf271-11ee-41ad-9edd-d9d9cec295b6", "0eb44823-eb29-4522-bc39-b20ef0ec12e9", "0d5607aa-d80f-450e-bbaa-8e03fed41baa", "019392c6-4ccd-4935-8165-5e8ec1c6c44b", "5f06d436-4d11-45a7-a4d0-8d7ddfec17b7", "4c68d48e-c18e-4316-a6a7-05a168b30e1d", "b7bfcf24-1b0b-40b8-bfac-0caaf90d27f6", "24e561cb-bba4-4eac-b6ac-02556998596b", "97dc1d4e-f7ce-4ff8-b532-14213d205af1", "fc022e7f-fb1f-45b6-bdca-d4ccdf41995f", "dd862471-1062-4d59-88f0-9c0bdc6546fe", "e6e5ebcc-e5d1-4662-bb79-f3ea616add99", "6cfa9adc-58b9-4073-83de-1f1a20ad511b", "798ab0e7-776b-4572-b7fb-76ca88526ba4", "78d9ba54-2823-48b9-a45d-7db62d40a0f5", "40de4a8c-4659-48fa-941d-92db8644f186"], "propsByKey": { "5485a571-ff11-4292-a886-3513c2b913af": { "name": "LeftArrow", "sourceUrl": null, "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "2cuM0OHhEcr8K.tDJl1U2iKxv0gB.wse", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/5485a571-ff11-4292-a886-3513c2b913af.png" }, "49fbe056-51b9-4f50-bca1-47fe9f5c379d": { "name": "DownGlow", "sourceUrl": null, "frameSize": { "x": 247, "y": 244 }, "frameCount": 4, "looping": false, "frameDelay": 2, "version": "jn0s11CuHFDFppDlr6In1bLftPfJ.mII", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 494, "y": 488 }, "rootRelativePath": "assets/49fbe056-51b9-4f50-bca1-47fe9f5c379d.png" }, "5f6703e5-af6c-4e54-a33a-f8256e17e47d": { "name": "LeftGlow", "sourceUrl": null, "frameSize": { "x": 236, "y": 214 }, "frameCount": 4, "looping": false, "frameDelay": 2, "version": "KlfDbzZz5Zcpj8BVRZCSc87WB43.oW0T", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 472, "y": 428 }, "rootRelativePath": "assets/5f6703e5-af6c-4e54-a33a-f8256e17e47d.png" }, "7be1a4b1-3381-4ca6-bae6-42dfb3321af5": { "name": "RightGlow", "sourceUrl": null, "frameSize": { "x": 256, "y": 244 }, "frameCount": 4, "looping": false, "frameDelay": 2, "version": "Qzlaf4P30YtOEscuq_JQPt37OedkBzW5", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 512, "y": 488 }, "rootRelativePath": "assets/7be1a4b1-3381-4ca6-bae6-42dfb3321af5.png" }, "711212a6-437d-47d2-8852-a6d69fe94fbd": { "name": "UpGlow", "sourceUrl": null, "frameSize": { "x": 253, "y": 244 }, "frameCount": 4, "looping": false, "frameDelay": 2, "version": "SmIUOEOMhVlbblWRCUF5GzkmWw5AVtve", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 506, "y": 488 }, "rootRelativePath": "assets/711212a6-437d-47d2-8852-a6d69fe94fbd.png" }, "86ef043d-27e2-4c8a-b039-4a6f4dccbda1": { "name": "LeftSplash", "sourceUrl": null, "frameSize": { "x": 329, "y": 334 }, "frameCount": 5, "looping": false, "frameDelay": 2, "version": "iyL6ynZAEMCbCfSQSp1m.cwTUCLTCBs3", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 658, "y": 1002 }, "rootRelativePath": "assets/86ef043d-27e2-4c8a-b039-4a6f4dccbda1.png" }, "105d08fa-8236-4ba6-ab38-9992bb013ed9": { "name": "DownSplash", "sourceUrl": null, "frameSize": { "x": 329, "y": 334 }, "frameCount": 5, "looping": false, "frameDelay": 2, "version": "rZx7BmQ81C192D2JIAzJO9oDG61CR9eo", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 658, "y": 1002 }, "rootRelativePath": "assets/105d08fa-8236-4ba6-ab38-9992bb013ed9.png" }, "c68e7fbe-f342-41c4-ad06-e116e10f60b2": { "name": "UpSplash", "sourceUrl": null, "frameSize": { "x": 329, "y": 334 }, "frameCount": 5, "looping": false, "frameDelay": 2, "version": "16vIGdKDt.LZksAtEL091HpRHRaaSzRJ", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 658, "y": 1002 }, "rootRelativePath": "assets/c68e7fbe-f342-41c4-ad06-e116e10f60b2.png" }, "74674f49-e8c9-4fa9-8b7a-21e707bd6d86": { "name": "RightSplash", "sourceUrl": null, "frameSize": { "x": 329, "y": 334 }, "frameCount": 5, "looping": false, "frameDelay": 2, "version": "dYLgZJ6SZtnRc4YvHur6fRTy1WrrcMXK", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 658, "y": 1002 }, "rootRelativePath": "assets/74674f49-e8c9-4fa9-8b7a-21e707bd6d86.png" }, "f357ee2c-7bf7-4f5a-add1-b06c21d20280": { "name": "Boyfriend_Right", "sourceUrl": null, "frameSize": { "x": 200, "y": 185 }, "frameCount": 3, "looping": false, "frameDelay": 3, "version": "39E2ty_HUSXD1Pe210ta82sfdjR3Nei2", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 400, "y": 370 }, "rootRelativePath": "assets/f357ee2c-7bf7-4f5a-add1-b06c21d20280.png" }, "75a2c999-20ab-4329-86e2-42eccf33b8cd": { "name": "TestOpponent_Left", "sourceUrl": null, "frameSize": { "x": 200, "y": 185 }, "frameCount": 3, "looping": false, "frameDelay": 3, "version": "AA2CqVckNfDGuIEHvH3RuCO5DP3jFBK5", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 400, "y": 370 }, "rootRelativePath": "assets/75a2c999-20ab-4329-86e2-42eccf33b8cd.png" }, "cc5a671f-985b-43e5-8ca1-1d4f7b364b30": { "name": "Boyfriend_Idle", "sourceUrl": null, "frameSize": { "x": 195, "y": 200 }, "frameCount": 6, "looping": true, "frameDelay": 3, "version": "xsiEp4iUGKrRN8eezdlFKfmQRH1Qfk1J", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 390, "y": 600 }, "rootRelativePath": "assets/cc5a671f-985b-43e5-8ca1-1d4f7b364b30.png" }, "8d7dbda9-3658-4ee0-83d5-a326c629c2a8": { "name": "TestOpponent_Idle", "sourceUrl": null, "frameSize": { "x": 195, "y": 200 }, "frameCount": 6, "looping": true, "frameDelay": 3, "version": "tENdj5czqFSrOyo4oxZ018m3BEPHrhVQ", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 390, "y": 600 }, "rootRelativePath": "assets/8d7dbda9-3658-4ee0-83d5-a326c629c2a8.png" }, "b0c295c5-a75a-4c8a-88e2-4518f8bce66b": { "name": "Boyfriend_Up", "sourceUrl": null, "frameSize": { "x": 200, "y": 185 }, "frameCount": 3, "looping": false, "frameDelay": 3, "version": "E9qx7MtIhkbhQBztqoKDytOye4l422Uq", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 400, "y": 370 }, "rootRelativePath": "assets/b0c295c5-a75a-4c8a-88e2-4518f8bce66b.png" }, "5a87a19a-7283-4245-9cc6-bba344fc79f7": { "name": "TestOpponent_Up", "sourceUrl": null, "frameSize": { "x": 200, "y": 185 }, "frameCount": 3, "looping": false, "frameDelay": 3, "version": "o231.CpGidMq_wH7cPSFwkDIj2UoqPkQ", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 400, "y": 370 }, "rootRelativePath": "assets/5a87a19a-7283-4245-9cc6-bba344fc79f7.png" }, "e07c4196-d93d-4963-acdc-79a0e0de1d5a": { "name": "Boyfriend_Left", "sourceUrl": null, "frameSize": { "x": 200, "y": 185 }, "frameCount": 3, "looping": false, "frameDelay": 3, "version": "kd53a5iOWCzxUgWkWpim7.ztiKURrhoK", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 400, "y": 370 }, "rootRelativePath": "assets/e07c4196-d93d-4963-acdc-79a0e0de1d5a.png" }, "69819ab9-0d27-4f29-a5de-ec9262aae26e": { "name": "TestOpponent_Right", "sourceUrl": null, "frameSize": { "x": 200, "y": 185 }, "frameCount": 3, "looping": false, "frameDelay": 3, "version": "K3EC_CIVFPtWMNEWmd2SGwJhpq5yjx7M", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 400, "y": 370 }, "rootRelativePath": "assets/69819ab9-0d27-4f29-a5de-ec9262aae26e.png" }, "dbd99e53-9979-45a5-b5c1-3afd0984bbe5": { "name": "Boyfriend_Down", "sourceUrl": null, "frameSize": { "x": 200, "y": 185 }, "frameCount": 3, "looping": false, "frameDelay": 3, "version": "st9dFp241AJ9en31aPg_5GqYycQDXDGl", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 400, "y": 370 }, "rootRelativePath": "assets/dbd99e53-9979-45a5-b5c1-3afd0984bbe5.png" }, "f5b75cb3-18ef-4771-b8e5-6aeefd238801": { "name": "TestOpponent_Down", "sourceUrl": null, "frameSize": { "x": 200, "y": 185 }, "frameCount": 3, "looping": false, "frameDelay": 3, "version": "VhdFVWJBVuRDtWOVVuldTmkWTSwomkYR", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 400, "y": 370 }, "rootRelativePath": "assets/f5b75cb3-18ef-4771-b8e5-6aeefd238801.png" }, "17ab6bd4-96b1-4f5a-afe1-c3c278124729": { "name": "LeftTap", "sourceUrl": null, "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": false, "frameDelay": 12, "version": "nwYyt.wjL7B643wa3AuNTvcn7yoK4AG4", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/17ab6bd4-96b1-4f5a-afe1-c3c278124729.png" }, "ea976e85-cf63-4892-a260-f94b8cd426f3": { "name": "huh", "sourceUrl": null, "frameSize": { "x": 800, "y": 400 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "ovvPNeYd9v56cue7HDAZba8zbASqnmo2", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 800, "y": 400 }, "rootRelativePath": "assets/ea976e85-cf63-4892-a260-f94b8cd426f3.png" }, "0507e64d-fc69-438a-a6ff-03828b0651fa": { "name": "lady2", "sourceUrl": null, "frameSize": { "x": 600, "y": 338 }, "frameCount": 39, "looping": true, "frameDelay": 1, "version": "IxOmh2nEiHva1cdGXYF6OZLawWSwobxt", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 3000, "y": 2704 }, "rootRelativePath": "assets/0507e64d-fc69-438a-a6ff-03828b0651fa.png" }, "8add17f5-448e-49c0-b8ec-95b608730452": { "name": "menuBG", "sourceUrl": null, "frameSize": { "x": 450, "y": 255 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "R4RHH2b3zD0wM.oTi9p57LiuYwIS02ue", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 450, "y": 255 }, "rootRelativePath": "assets/8add17f5-448e-49c0-b8ec-95b608730452.png" }, "b2a9d65c-5dd4-4c5f-8444-c0bdfba5787e": { "name": "BlackBG", "sourceUrl": null, "frameSize": { "x": 450, "y": 255 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "SW37C97q5RJ6iWag0ql1sS0dvL.G.Jsh", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 450, "y": 255 }, "rootRelativePath": "assets/b2a9d65c-5dd4-4c5f-8444-c0bdfba5787e.png" }, "56decc2b-ec39-4d42-aedb-ab370dd849b0": { "name": "Weeks", "sourceUrl": null, "frameSize": { "x": 443, "y": 99 }, "frameCount": 8, "looping": true, "frameDelay": 12, "version": "E07k5A3KoPOQRPOxJc6iDgByHSArLq6K", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 443, "y": 792 }, "rootRelativePath": "assets/56decc2b-ec39-4d42-aedb-ab370dd849b0.png" }, "c06de83e-cc9f-4cb9-853c-805532b412a8": { "name": "storyArrows", "sourceUrl": null, "frameSize": { "x": 512, "y": 128 }, "frameCount": 2, "looping": true, "frameDelay": 12, "version": "aRQyAxLUGcwfspG_ZUG5wfTFpkdVEghw", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 512, "y": 256 }, "rootRelativePath": "assets/c06de83e-cc9f-4cb9-853c-805532b412a8.png" }, "24e31f8d-0e55-4885-af0b-86e194192bde": { "name": "Difficulties", "sourceUrl": null, "frameSize": { "x": 308, "y": 67 }, "frameCount": 3, "looping": true, "frameDelay": 12, "version": "k5uD43N8M.K.Vbl7fn55q5HcchxU8X_K", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 308, "y": 201 }, "rootRelativePath": "assets/24e31f8d-0e55-4885-af0b-86e194192bde.png" }, "5caa2980-a30a-46e9-9392-2db519efed20": { "name": "MenuBF", "sourceUrl": null, "frameSize": { "x": 1016, "y": 672 }, "frameCount": 5, "looping": true, "frameDelay": 4, "version": "BbOCcoFzvpFY2zSOf4_mt8N0UgA7bhAT", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 2032, "y": 2016 }, "rootRelativePath": "assets/5caa2980-a30a-46e9-9392-2db519efed20.png" }, "d4d4ada5-c2a7-4039-a735-58d9c8fb6657": { "name": "MenuPico", "sourceUrl": null, "frameSize": { "x": 512, "y": 512 }, "frameCount": 7, "looping": true, "frameDelay": 4, "version": "SCiVvSBbHvAplUKz.omf_iB88HnELGUZ", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 1536, "y": 1536 }, "rootRelativePath": "assets/d4d4ada5-c2a7-4039-a735-58d9c8fb6657.png" }, "6ec70fb2-8f4d-4173-aa69-98128bb61ad3": { "name": "MenuSkidPump", "sourceUrl": null, "frameSize": { "x": 1024, "y": 512 }, "frameCount": 8, "looping": true, "frameDelay": 3, "version": "QWiO8U0l_g1Ch8KDUooRCayEhRhl6Dg0", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 2048, "y": 2048 }, "rootRelativePath": "assets/6ec70fb2-8f4d-4173-aa69-98128bb61ad3.png" }, "1d7f56f0-fbac-40c0-acac-0f97f2480268": { "name": "MenuSenpai", "sourceUrl": null, "frameSize": { "x": 1024, "y": 1024 }, "frameCount": 5, "looping": true, "frameDelay": 5, "version": "Qt7QpMNG4WmIvBNl3dKed_d2kWMvNT6u", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 2048, "y": 3072 }, "rootRelativePath": "assets/1d7f56f0-fbac-40c0-acac-0f97f2480268.png" }, "532c53ca-c366-465b-977e-37d335ce5893": { "name": "font", "sourceUrl": null, "frameSize": { "x": 67, "y": 80 }, "frameCount": 52, "looping": true, "frameDelay": 1, "version": "DrIFBViXHZkcAA5Dq4U8arcteD6LyrHg", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 536, "y": 560 }, "rootRelativePath": "assets/532c53ca-c366-465b-977e-37d335ce5893.png" }, "5ba087ae-352e-4d45-8875-aac969a8f939": { "name": "Dad_Idle", "sourceUrl": null, "frameSize": { "x": 88, "y": 157 }, "frameCount": 14, "looping": true, "frameDelay": 2, "version": "u_udJHoFRm8s4DaxR8dg7bJxtYFz9Ngn", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 440, "y": 471 }, "rootRelativePath": "assets/5ba087ae-352e-4d45-8875-aac969a8f939.png" }, "ebcd85ab-4372-47be-b778-e2422b9ad23e": { "name": "Dad_Right", "sourceUrl": null, "frameSize": { "x": 88, "y": 184 }, "frameCount": 5, "looping": false, "frameDelay": 12, "version": "Vp4vvovvQnh4nPi1FQ9_kybghg1Fgx1K", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 264, "y": 368 }, "rootRelativePath": "assets/ebcd85ab-4372-47be-b778-e2422b9ad23e.png" }, "7f79dbdd-9125-40bd-a0e2-9e34bc66c143": { "name": "Dad_Down", "sourceUrl": null, "frameSize": { "x": 118, "y": 185 }, "frameCount": 3, "looping": false, "frameDelay": 3, "version": "qU1baMYxJL0OTgEi.T74zPnR.w.MB6UK", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 236, "y": 370 }, "rootRelativePath": "assets/7f79dbdd-9125-40bd-a0e2-9e34bc66c143.png" }, "9764e9d4-c91c-404f-83af-a164206b8df4": { "name": "Dad_Left", "sourceUrl": null, "frameSize": { "x": 108, "y": 184 }, "frameCount": 18, "looping": false, "frameDelay": 1, "version": "DMORF5ytS0597CsaOn.boVAO28LJHmhG", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 648, "y": 552 }, "rootRelativePath": "assets/9764e9d4-c91c-404f-83af-a164206b8df4.png" }, "9f102095-b090-4c5d-bd50-6afd005d3b7d": { "name": "Dad_Up", "sourceUrl": null, "frameSize": { "x": 92, "y": 184 }, "frameCount": 5, "looping": false, "frameDelay": 1, "version": "IUxGP96RXWV2qGpvZ1kP6LafL._F57.A", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 276, "y": 368 }, "rootRelativePath": "assets/9f102095-b090-4c5d-bd50-6afd005d3b7d.png" }, "db05cb43-e4fe-477a-a6f9-911aaa741ca6": { "name": "Pico_Idle", "sourceUrl": null, "frameSize": { "x": 162, "y": 170 }, "frameCount": 14, "looping": true, "frameDelay": 2, "version": "c8sV3dGlCtlcSal3eWh2zUnFx4r4x4UX", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 648, "y": 680 }, "rootRelativePath": "assets/db05cb43-e4fe-477a-a6f9-911aaa741ca6.png" }, "77a716d5-9e37-4fb7-a535-49e0ea662684": { "name": "Pico_Down", "sourceUrl": null, "frameSize": { "x": 185, "y": 143 }, "frameCount": 11, "looping": false, "frameDelay": 1, "version": "mOKIkfuxxJaPx0bAg0fUByHWFh2Tw36h", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 555, "y": 572 }, "rootRelativePath": "assets/77a716d5-9e37-4fb7-a535-49e0ea662684.png" }, "267bb7e4-34bf-450a-b802-7e66636904f0": { "name": "Pico_Left", "sourceUrl": null, "frameSize": { "x": 181, "y": 185 }, "frameCount": 17, "looping": false, "frameDelay": 1, "version": "zAaUz6GGK64qXG5faEcsydOAgO.Y1nPL", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 724, "y": 925 }, "rootRelativePath": "assets/267bb7e4-34bf-450a-b802-7e66636904f0.png" }, "8965e889-c0fb-4063-877e-81d9de27580e": { "name": "Pico_Up", "sourceUrl": null, "frameSize": { "x": 162, "y": 185 }, "frameCount": 14, "looping": false, "frameDelay": 1, "version": "H0nClngnTc90AaPJ63x06rRkubfyoI.F", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 648, "y": 740 }, "rootRelativePath": "assets/8965e889-c0fb-4063-877e-81d9de27580e.png" }, "f8232b9d-75c7-4d10-a513-d82681f617b6": { "name": "Pico_Right", "sourceUrl": null, "frameSize": { "x": 179, "y": 185 }, "frameCount": 17, "looping": false, "frameDelay": 1, "version": "97r9J0vrw7GXq_mTUwk2HxFMbFcvs7Jj", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 716, "y": 925 }, "rootRelativePath": "assets/f8232b9d-75c7-4d10-a513-d82681f617b6.png" }, "9adb0ee8-2c71-4fdf-a41b-fe2078c5a97f": { "name": "storyMode", "sourceUrl": null, "frameSize": { "x": 645, "y": 136 }, "frameCount": 3, "looping": true, "frameDelay": 3, "version": "569k2rPhIoZ.eJer_sRj8v_3ZxU1q5d1", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 645, "y": 408 }, "rootRelativePath": "assets/9adb0ee8-2c71-4fdf-a41b-fe2078c5a97f.png" }, "72e19f79-b0c5-4ce3-bed7-7542353c60bd": { "name": "selected_storyMode", "sourceUrl": null, "frameSize": { "x": 810, "y": 215 }, "frameCount": 3, "looping": true, "frameDelay": 4, "version": "ywMr2faz5A1OY9qyLAJWZ_ZTn1Vv1i3s", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 810, "y": 645 }, "rootRelativePath": "assets/72e19f79-b0c5-4ce3-bed7-7542353c60bd.png" }, "e4617e39-f8f0-440c-9b54-73e82f87aa9e": { "name": "freePlay", "sourceUrl": null, "frameSize": { "x": 645, "y": 125 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "rIbjm5B1Or1mhObCO1TYRwFS43l06gKR", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 645, "y": 125 }, "rootRelativePath": "assets/e4617e39-f8f0-440c-9b54-73e82f87aa9e.png" }, "c72a7066-cd19-41e4-b43e-c382f7274022": { "name": "Options", "sourceUrl": null, "frameSize": { "x": 645, "y": 125 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "GEQVB7jGN4Y.zos7wbuKaaPaaj2Pc1ap", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 645, "y": 125 }, "rootRelativePath": "assets/c72a7066-cd19-41e4-b43e-c382f7274022.png" }, "37919a28-af2c-4945-bbd9-44a7239c1203": { "name": "selected_Options", "sourceUrl": null, "frameSize": { "x": 645, "y": 163 }, "frameCount": 3, "looping": true, "frameDelay": 4, "version": "cwvAXX9i3BcamR6Uqk1V3N3Bvl9txRmU", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 645, "y": 489 }, "rootRelativePath": "assets/37919a28-af2c-4945-bbd9-44a7239c1203.png" }, "2b012ade-6022-4190-8098-37c488b343ee": { "name": "selected_freePlay", "sourceUrl": null, "frameSize": { "x": 645, "y": 125 }, "frameCount": 3, "looping": true, "frameDelay": 4, "version": "yH0WMxQInBxOYcGsuzsIc.PvkcZG52fx", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 645, "y": 375 }, "rootRelativePath": "assets/2b012ade-6022-4190-8098-37c488b343ee.png" }, "f1e904e8-4ddb-4c8b-9a86-ab5921e977cb": { "name": "Spooky_Idle", "sourceUrl": null, "frameSize": { "x": 150, "y": 167 }, "frameCount": 16, "looping": true, "frameDelay": 2, "version": "3CGBaroYz8g0u7nsV9mmfyxQyWmKMQbT", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 600, "y": 668 }, "rootRelativePath": "assets/f1e904e8-4ddb-4c8b-9a86-ab5921e977cb.png" }, "c38e1834-7eea-4933-b94f-d272c2251c12": { "name": "Spooky_Right", "sourceUrl": null, "frameSize": { "x": 185, "y": 174 }, "frameCount": 15, "looping": false, "frameDelay": 1, "version": "9X4gI7r89OEqd00J1LjSETPsCRp6xOTp", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 740, "y": 696 }, "rootRelativePath": "assets/c38e1834-7eea-4933-b94f-d272c2251c12.png" }, "307ddf8f-a50b-40cf-9743-13e140e98238": { "name": "Spooky_Down", "sourceUrl": null, "frameSize": { "x": 185, "y": 164 }, "frameCount": 25, "looping": false, "frameDelay": 1, "version": "rE3xMWV90Vg.qnarM0JaDuIZaeYzMqob", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 925, "y": 820 }, "rootRelativePath": "assets/307ddf8f-a50b-40cf-9743-13e140e98238.png" }, "9714b687-6068-41c8-bcee-185e6e89c714": { "name": "Spooky_Up", "sourceUrl": null, "frameSize": { "x": 131, "y": 185 }, "frameCount": 5, "looping": false, "frameDelay": 3, "version": "7hKcQ7DTtxK.DzcqkdguMdYsyq9YVxzh", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 393, "y": 370 }, "rootRelativePath": "assets/9714b687-6068-41c8-bcee-185e6e89c714.png" }, "8e6b2711-9801-4a1f-89b0-7f5eccb6009b": { "name": "Spooky_Left", "sourceUrl": null, "frameSize": { "x": 153, "y": 185 }, "frameCount": 25, "looping": false, "frameDelay": 1, "version": "33a_2UPh9P466jy0ZPd1FSRULrhgo0GF", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 765, "y": 925 }, "rootRelativePath": "assets/8e6b2711-9801-4a1f-89b0-7f5eccb6009b.png" }, "05cd50da-c89c-46dd-93ea-80f5f2b4f513": { "name": "SelectionStage", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/05cd50da-c89c-46dd-93ea-80f5f2b4f513.png", "frameSize": { "x": 1280, "y": 386 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "ug_Acrq6vYuJMtq3JCEKy7nG2wyLB99O", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 1280, "y": 386 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/05cd50da-c89c-46dd-93ea-80f5f2b4f513.png" }, "1f922a43-4e4f-4cae-bf68-900736c2a081": { "name": "SelectionTank", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/1f922a43-4e4f-4cae-bf68-900736c2a081.png", "frameSize": { "x": 1280, "y": 386 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "9P59WsKRh9eGlomjuj1LO5wqHB_va0Or", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 1280, "y": 386 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/1f922a43-4e4f-4cae-bf68-900736c2a081.png" }, "d258b361-4641-4b5a-a24a-d9e056261f91": { "name": "SelectionSpooky", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/d258b361-4641-4b5a-a24a-d9e056261f91.png", "frameSize": { "x": 1280, "y": 386 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "Pp_zkfQSEm7hM8PpIRf1Wcy30ZUGN7C6", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 1280, "y": 386 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/d258b361-4641-4b5a-a24a-d9e056261f91.png" }, "d544ca22-2079-44a9-a5c3-43847e998252": { "name": "SelectionPhilly", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/d544ca22-2079-44a9-a5c3-43847e998252.png", "frameSize": { "x": 1280, "y": 386 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "teIV_TLcFRgjufvXdyIgIjpCEcKtxkCs", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 1280, "y": 386 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/d544ca22-2079-44a9-a5c3-43847e998252.png" }, "0b629895-54a1-46a3-9f32-ee67b2b9b0ab": { "name": "SelectionLimo", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/0b629895-54a1-46a3-9f32-ee67b2b9b0ab.png", "frameSize": { "x": 1280, "y": 386 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": ".3xsP4kbMN.X8JPEpyHS.nf9_1rJXIbQ", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 1280, "y": 386 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/0b629895-54a1-46a3-9f32-ee67b2b9b0ab.png" }, "cd335291-8950-4f8c-98a3-6a67dd6732c0": { "name": "SelectionChristmas", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/cd335291-8950-4f8c-98a3-6a67dd6732c0.png", "frameSize": { "x": 1280, "y": 386 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "QEPBZN4vt1sKNKnaBcsYCMprgMroytit", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 1280, "y": 386 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/cd335291-8950-4f8c-98a3-6a67dd6732c0.png" }, "1c5b843e-fbe0-42d0-842d-9879b2520d52": { "name": "Background_1", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/1c5b843e-fbe0-42d0-842d-9879b2520d52.png", "frameSize": { "x": 304, "y": 166 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "NC95ELVckttSFsSrQ5EgvmK4S14g1kR0", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 304, "y": 166 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/1c5b843e-fbe0-42d0-842d-9879b2520d52.png" }, "86ec2837-6e61-4e3c-b5e0-4fa5dfaf9514": { "name": "Background_2", "sourceUrl": null, "frameSize": { "x": 326, "y": 166 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "cp1b.Grrk.qG_6hHk6RzRJqeYEujcEcW", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 326, "y": 166 }, "rootRelativePath": "assets/86ec2837-6e61-4e3c-b5e0-4fa5dfaf9514.png" }, "f25ac9f2-1e90-41a9-a513-515a1f53e9e1": { "name": "Background_3", "sourceUrl": null, "frameSize": { "x": 304, "y": 169 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "kao4HHZHmxzqFyGqNMRo19mJk3Vx6rC9", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 304, "y": 169 }, "rootRelativePath": "assets/f25ac9f2-1e90-41a9-a513-515a1f53e9e1.png" }, "86fabf66-3de0-408d-b894-c588f9ce5056": { "name": "Background_4", "sourceUrl": null, "frameSize": { "x": 1000, "y": 622 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "9c656zHqwW5XytqleD6.u09NmrXlPXjj", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 1000, "y": 622 }, "rootRelativePath": "assets/86fabf66-3de0-408d-b894-c588f9ce5056.png" }, "0a3c75e6-cfc1-4821-94e7-0e5b4511c5a8": { "name": "UpNote", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/0a3c75e6-cfc1-4821-94e7-0e5b4511c5a8.png", "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "dPCYSVeWICabf2UEApR3ctms7HDkl0xw", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/0a3c75e6-cfc1-4821-94e7-0e5b4511c5a8.png" }, "30087f90-9db7-498f-a89f-23563e060f6d": { "name": "RightNote", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/30087f90-9db7-498f-a89f-23563e060f6d.png", "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "NkFn6prJRCCJPmhCkhntKvg6WonbMMJT", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/30087f90-9db7-498f-a89f-23563e060f6d.png" }, "5d93b7b7-ab8a-44dc-94c7-b070174dfcb5": { "name": "RightTrailEnd", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/5d93b7b7-ab8a-44dc-94c7-b070174dfcb5.png", "frameSize": { "x": 75, "y": 83 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "8vbx2UwLzwdzO5DkNAcCvWqIHPDONx3L", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 75, "y": 83 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/5d93b7b7-ab8a-44dc-94c7-b070174dfcb5.png" }, "60dd4a4f-61f3-49d7-87b6-ed1a7233680d": { "name": "RightTrail", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/60dd4a4f-61f3-49d7-87b6-ed1a7233680d.png", "frameSize": { "x": 75, "y": 83 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "QcsgC.79_AjTj3Av_bYD7Ae0eh7J7st9", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 75, "y": 83 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/60dd4a4f-61f3-49d7-87b6-ed1a7233680d.png" }, "65c23c3d-efb9-4a9a-9c89-c234fb848c25": { "name": "DownArrow", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/65c23c3d-efb9-4a9a-9c89-c234fb848c25.png", "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "hFTNk.b4yPAbl8DoghXqmK.TqTbXhzSc", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/65c23c3d-efb9-4a9a-9c89-c234fb848c25.png" }, "a823417e-eaf4-446f-a509-56846d00e895": { "name": "RightArrow", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/a823417e-eaf4-446f-a509-56846d00e895.png", "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "kh.QcJuR4ZgqMecbXhai81i4ZIhTGC_q", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/a823417e-eaf4-446f-a509-56846d00e895.png" }, "5c10944b-7c25-4222-9bd2-3d48bb6549b3": { "name": "DownNote", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/5c10944b-7c25-4222-9bd2-3d48bb6549b3.png", "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "E7wIVd..16nPbKKEtcT9NexdOlRa2YmC", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/5c10944b-7c25-4222-9bd2-3d48bb6549b3.png" }, "865825a8-6f5c-4a37-ae70-a9b97f66df31": { "name": "DownTrailEnd", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/865825a8-6f5c-4a37-ae70-a9b97f66df31.png", "frameSize": { "x": 75, "y": 83 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "eCO.eCcCNtdwQRU7MuaBu7.fFsU_0i0e", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 75, "y": 83 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/865825a8-6f5c-4a37-ae70-a9b97f66df31.png" }, "6fc60da2-0682-40bb-a9d8-210453ccb30d": { "name": "DownTrail", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/6fc60da2-0682-40bb-a9d8-210453ccb30d.png", "frameSize": { "x": 75, "y": 83 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "BHglPyo0Q08VQAoAOMAl97b3HhVga3jL", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 75, "y": 83 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/6fc60da2-0682-40bb-a9d8-210453ccb30d.png" }, "4703e979-6f98-4754-8a68-2416e7c47569": { "name": "LeftNote", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/4703e979-6f98-4754-8a68-2416e7c47569.png", "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "GZzpJ1giqNbajyGwezFae6pnHQ5HHicq", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/4703e979-6f98-4754-8a68-2416e7c47569.png" }, "40e4ac61-cc34-49b4-a2cf-935243c7904a": { "name": "UpArrow", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/40e4ac61-cc34-49b4-a2cf-935243c7904a.png", "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "3qkK91Adeg1QzMCRQRxO.S2Vb0d4kwMM", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/40e4ac61-cc34-49b4-a2cf-935243c7904a.png" }, "4c83998f-9249-456e-aa10-6aad82a30252": { "name": "LeftTrailEnd", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/4c83998f-9249-456e-aa10-6aad82a30252.png", "frameSize": { "x": 75, "y": 83 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "QKdZpWxlS8uGq.ckyI5zde7N3ZRncLLu", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 75, "y": 83 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/4c83998f-9249-456e-aa10-6aad82a30252.png" }, "95dbf513-8658-418d-8b49-dc764ae707ca": { "name": "LeftTrail", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/95dbf513-8658-418d-8b49-dc764ae707ca.png", "frameSize": { "x": 75, "y": 83 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "BGMeWT6odnPi3zjYbQPgRcXxcBvyvzhO", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 75, "y": 83 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/95dbf513-8658-418d-8b49-dc764ae707ca.png" }, "60872ed4-57d9-4c27-9964-05c23d7226b0": { "name": "UpTrailEnd", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/60872ed4-57d9-4c27-9964-05c23d7226b0.png", "frameSize": { "x": 75, "y": 83 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "rz6g084N34WKfplSwR3HztFs27tl5B6R", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 75, "y": 83 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/60872ed4-57d9-4c27-9964-05c23d7226b0.png" }, "7149e50c-a967-4193-a5aa-aaf4f8aa2d9b": { "name": "UpTrail", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/7149e50c-a967-4193-a5aa-aaf4f8aa2d9b.png", "frameSize": { "x": 75, "y": 83 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "GKTnN3Oky4X5o.jXz_XGpzxg3NfYcxG_", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 75, "y": 83 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/7149e50c-a967-4193-a5aa-aaf4f8aa2d9b.png" }, "f53cf271-11ee-41ad-9edd-d9d9cec295b6": { "name": "Perfect!!", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/f53cf271-11ee-41ad-9edd-d9d9cec295b6.png", "frameSize": { "x": 366, "y": 138 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "QbPJyxFj90Iwc2KDUh_.ffJWerLAu6EJ", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 366, "y": 138 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/f53cf271-11ee-41ad-9edd-d9d9cec295b6.png" }, "0eb44823-eb29-4522-bc39-b20ef0ec12e9": { "name": "Good", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/0eb44823-eb29-4522-bc39-b20ef0ec12e9.png", "frameSize": { "x": 356, "y": 141 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "skXVsfPGz2D1cM1_7a4b1FNGXEgPJpzz", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 356, "y": 141 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/0eb44823-eb29-4522-bc39-b20ef0ec12e9.png" }, "0d5607aa-d80f-450e-bbaa-8e03fed41baa": { "name": "Sick!", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/0d5607aa-d80f-450e-bbaa-8e03fed41baa.png", "frameSize": { "x": 344, "y": 138 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "K3nB9_7h3LcaV0fS9N0Sx3MvyKbf4wyg", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 344, "y": 138 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/0d5607aa-d80f-450e-bbaa-8e03fed41baa.png" }, "019392c6-4ccd-4935-8165-5e8ec1c6c44b": { "name": "Trash!", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/019392c6-4ccd-4935-8165-5e8ec1c6c44b.png", "frameSize": { "x": 261, "y": 131 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "d5InGgGW8GUO4c6_ZmjDyeJC8EmXLTJc", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 261, "y": 131 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/019392c6-4ccd-4935-8165-5e8ec1c6c44b.png" }, "5f06d436-4d11-45a7-a4d0-8d7ddfec17b7": { "name": "Bad", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/5f06d436-4d11-45a7-a4d0-8d7ddfec17b7.png", "frameSize": { "x": 261, "y": 131 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "t7pTIjPyYki8t3YTkigW3wjXHOTdiQuu", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 261, "y": 131 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/5f06d436-4d11-45a7-a4d0-8d7ddfec17b7.png" }, "4c68d48e-c18e-4316-a6a7-05a168b30e1d": { "name": "UpTap", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/4c68d48e-c18e-4316-a6a7-05a168b30e1d.png", "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "1izpi1i2hJ1Nmzx7KYYwN8VzkqkFYQwd", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/4c68d48e-c18e-4316-a6a7-05a168b30e1d.png" }, "b7bfcf24-1b0b-40b8-bfac-0caaf90d27f6": { "name": "DownTap", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/b7bfcf24-1b0b-40b8-bfac-0caaf90d27f6.png", "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "ssBsN5pu6_sj2NUgYgoqsxXXIH1IQE47", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/b7bfcf24-1b0b-40b8-bfac-0caaf90d27f6.png" }, "24e561cb-bba4-4eac-b6ac-02556998596b": { "name": "RightTap", "sourceUrl": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/24e561cb-bba4-4eac-b6ac-02556998596b.png", "frameSize": { "x": 200, "y": 200 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "QBxdJqjVu2Le2b612EnD4jP76pa096dD", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 200, "y": 200 }, "rootRelativePath": "assets/v3/animations/jZ5IoKf8eBT1NTvdtunSXesCeb4FMOcEZ-WCRaWHjK0/24e561cb-bba4-4eac-b6ac-02556998596b.png" }, "97dc1d4e-f7ce-4ff8-b532-14213d205af1": { "name": "Mama_Idle", "sourceUrl": null, "frameSize": { "x": 81, "y": 172 }, "frameCount": 12, "looping": true, "frameDelay": 2, "version": "gyXiUBl7tdCoRMJ8ZN4y1H0b.PCH2p8d", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 405, "y": 516 }, "rootRelativePath": "assets/97dc1d4e-f7ce-4ff8-b532-14213d205af1.png" }, "fc022e7f-fb1f-45b6-bdca-d4ccdf41995f": { "name": "Mama_Down", "sourceUrl": null, "frameSize": { "x": 125, "y": 185 }, "frameCount": 14, "looping": false, "frameDelay": 2, "version": "f53BIisxOFmQgvt4Yx4lCGj4WidI_EH5", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 625, "y": 555 }, "rootRelativePath": "assets/fc022e7f-fb1f-45b6-bdca-d4ccdf41995f.png" }, "dd862471-1062-4d59-88f0-9c0bdc6546fe": { "name": "Mama_Up", "sourceUrl": null, "frameSize": { "x": 85, "y": 185 }, "frameCount": 15, "looping": false, "frameDelay": 2, "version": "8NnQ098FiDeMO84nR2a9zANpnXuLrjJ3", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 510, "y": 555 }, "rootRelativePath": "assets/dd862471-1062-4d59-88f0-9c0bdc6546fe.png" }, "e6e5ebcc-e5d1-4662-bb79-f3ea616add99": { "name": "Mama_Right", "sourceUrl": null, "frameSize": { "x": 137, "y": 185 }, "frameCount": 9, "looping": false, "frameDelay": 2, "version": "9JuVf1gfRx0R.TNOwF3_eap31JG3wc2g", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 411, "y": 555 }, "rootRelativePath": "assets/e6e5ebcc-e5d1-4662-bb79-f3ea616add99.png" }, "6cfa9adc-58b9-4073-83de-1f1a20ad511b": { "name": "Mama_Left", "sourceUrl": null, "frameSize": { "x": 138, "y": 184 }, "frameCount": 9, "looping": true, "frameDelay": 2, "version": "Axeh5GVHaoLmVPaNr4eGSaWuHin2BUxs", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 414, "y": 552 }, "rootRelativePath": "assets/6cfa9adc-58b9-4073-83de-1f1a20ad511b.png" }, "798ab0e7-776b-4572-b7fb-76ca88526ba4": { "name": "Box", "sourceUrl": null, "frameSize": { "x": 203, "y": 178 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "0yGwjlnoVW1KM5mCEdrmadsqQMeawf8f", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 203, "y": 178 }, "rootRelativePath": "assets/798ab0e7-776b-4572-b7fb-76ca88526ba4.png" }, "78d9ba54-2823-48b9-a45d-7db62d40a0f5": { "name": "FillBox", "sourceUrl": null, "frameSize": { "x": 203, "y": 178 }, "frameCount": 5, "looping": false, "frameDelay": 2, "version": "8mkDL7X5cEZ3C02U1xaOXj0kZB9Y0YpV", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 406, "y": 534 }, "rootRelativePath": "assets/78d9ba54-2823-48b9-a45d-7db62d40a0f5.png" }, "40de4a8c-4659-48fa-941d-92db8644f186": { "name": "EmptyBox", "sourceUrl": null, "frameSize": { "x": 203, "y": 183 }, "frameCount": 5, "looping": false, "frameDelay": 2, "version": "RRJy2CG6r9c_S.QeRZsOgEJbd90Zw6Yt", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 406, "y": 549 }, "rootRelativePath": "assets/40de4a8c-4659-48fa-941d-92db8644f186.png" } } };
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

    var CoderUtils = new (function () {
      // var URLl = window.getURL();
      // var URLPath = window.getURLPath();
      // var coderengine = "N8fMEFp65RrOCxDZUZf7e3u34xzb9RHLqgM1_1WiRXI";
      // var link = "https://studio.code.org/projects/gamelab/".concat(coderengine);
      // setTimeout(function () {
      //   if (URLl.includes("view") || URLPath[3] === "view") {
      //     prompt("Hello, I dont know if you are a modder, or someone who is curious to how the game works, but to exploiters, sorry to tell you, but this project barely has any keyvalues. However, you may play the game with temporarily modified stats. Also, I will warn you that playing with view/edit code menu open lags the game a TON. (Remixing is reccomended)\n\n-- MonsterYT_DaGamer");
      //   }

      //   if (URLl.includes("//edit") || URLPath[3] === "//edit") {
      //     prompt("Hello, modder/exploiter. Sorry to tell you, but this project barely has any keyvalues. However, you may play the game with temporarily modified stats. But I will warn you that playing with view/edit code menu open lags the game a TON.\n\n-- MonsterYT_DaGamer");
      //   }

      //   if (URLl.includes("edit.html") || URLPath[3] === "edit.html") {
      //     prompt("Hello, modder/exploiter. Sorry to tell you, but this project barely has any keyvalues. However, you may play the game with temporarily modified stats. But I will warn you that playing with view/edit code menu open lags the game a TON.\n\n-- MonsterYT_DaGamer");
      //   }

      //   if (URLPath[2] !== coderengine) {
      //     prompt("This project is a remix of a project called Coder Engine by MonsterYT-DaGamer. You can go play the original project using the link below.\n\nMonsterYT-DaGamer is NOT responsible for any content in this project that is innapropriate, offensive, or goes against the Code.org Terms of Service.", link);
      //     console.log("Hey modder! If you need help modding this, join our discord server! (there will be other alternative methods for people without discord later)");
      //   }
      // }, 100);
      /* 
      Description:
      Translates a FNF chart (.json file) to a CoderEngine Chart
      ---------------------------------------------------------------
      Parameters:
      chart - Enter a FNF Chart here. Get the JSON file of it and copy & paste the text into the function
      */

      /**
       * @Name: FunkUtils
       * @Authors: Varrience, Mechanical
       * @See original: https://studio.code.org/projects/gamelab/hOqXjdBErccAssoh6PzIIngvBSa6GD34vClftGdjF3o/view
      */

      var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ".", "'"];
      var deltaTime = 0;
      var newTime = 0;
      var old = Date.now();
      var now = old;
      window.delta = 1;
      var lastCalledTime;
      window.fps;
      var delta2;

      window.getFPS = function () {
        if (!lastCalledTime) {
          lastCalledTime = Date.now();
          window.fps = 0;
          return;
        }
        delta2 = (Date.now() - lastCalledTime) / 1000;
        lastCalledTime = Date.now();
        window.fps = 1 / delta2;
        return Math.round(window.fps);
      };
      window.arrowAnim = function (arrow, anim, ranim) {
        arrow.setAnimation(anim);
        setTimeout(function () {
          arrow.setAnimation(ranim);
        }, 300);
      };
      window.calculate = function (framerate) {
        now = Date.now();
        delta = (framerate || 30) / (1000 / (now - old));
        old = now;
      };
      window.ratingPop = function (rating) {
        var ratingss = ["Perfect!!", "Sick!", "Good", "Ok", "Bad", "Trash!"];
        if (rating === undefined || ratingss.indexOf(rating) < 0) {
          return "noRating?";
        }

        this.x = 200;
        this.y = 200;
        this.dx = randomNumber(-2, 2);
        this.dy = -10;

        this.sprite = createSprite(999, 999);
        this.sprite.setAnimation(rating);
        this.sprite.scale = 0.2;

        this.update = function () {
          this.dy += 2;

          this.x += (this.dx * window.getDeltaTime()) / 100;
          this.y += (this.dy * window.getDeltaTime()) / 100;

          this.sprite.x = this.x;
          this.sprite.y = this.y;
        };

        ratingPops.push(this);
      }
      // Updates the DeltaTime value. Run every frame.
      window.calcDeltaTime = function () {
        old = newTime;
        newTime = getTime();
        deltaTime = newTime - old;
      };
      // Checks if all the elements in an object are equal to the chosen parameter.
      Object.prototype.allEqualTo = function (e) {
        var status = true;
        for (var _ in e) {
          var current = this[_];
          if (current !== e) {
            status = false;
          }
        }
        return status;
      };
      // Preloads a sound.
      window.preloadSound = function (sound) {
        playSound(sound, false, function () {
          stopSound(sound);
        });
      };
      // Returns DeltaTime
      window.getDeltaTime = function () {
        return newTime - old;
      }
      // Replacement for Glyph
      window.Glyph = /** @class */ (function () {
        function Glyph(x, y, letter, scale, frame, speed, anim) {
          this.x = x;
          this.y = y;
          this.letter = alphabet.indexOf(letter.toUpperCase()) * 2;
          this.frame = frame || 0;
          this.scale = scale || 1;
          this.speed = speed || 0.0080;
          this.glyph = createSprite(this.x, this.y);
          this.glyph.setAnimation(anim || "font");
          this.glyph.scale = scale;
          this.glyph.pause();
        }
        Glyph.prototype.display = function () {
          this.frame += this.speed * getDeltaTime();
          if (this.frame >= 2) {
            this.frame = 0;
          }
          this.glyph.setFrame(this.letter + Math.floor(this.frame));
          this.glyph.display();
        };
        return Glyph;
      }());
      // Replacement for RbString()
      window.Text = /** @class */ (function () {
        function Text(text, x, y, scale) {
          this.text = [];
          this.x = x;
          this.y = y;
          this.scale = scale;
          for (var i = 0; i < text.length; i++) {
            this.text.push(new Glyph(x + i * 50 * scale, y, text[i], scale));
          }
        }
        Text.prototype.setString = function (text) {
          this.text = [];
          for (var i = 0; i < text.length; i++) {
            this.text.push(new Glyph(this.x + i * 50 * this.scale, this.y, text[i], this.scale));
          }
        }
        Text.prototype.display = function () {
          for (var _i = 0, _a = this.text; _i < _a.length; _i++) {
            var t = _a[_i];
            t.glyph.x = this.x + _i * 50 * this.text[_i].scale;
            t.glyph.y = this.y
            t.display();
          } // groups are bloat
        };
        return Text;
      }());
      // makes Glyphs for people who don't know how to use constructors
      this.createGlyph = function (x, y, letter, scale, frame, speed) {
        return (new Glyph(x, y, letter, scale, frame, speed));
      }
      // makes Text for people who don't know how to use constructors
      this.createText = function (text, x, y, scale) {
        return (new Text(text, x, y, scale));
      }
      /*
      MADE BY VARRIENCE.
      getWebData("your website here", function (stream) {
        // stream is the web data
      });
      boom now ur done B)
      */
      this.getWebData = function (url, callback) {
        loadImage("".concat(url, "?port=").concat(Math.floor(Math.random() * 999999)), function (img) {
          var sourceIndex = [];
          var msg = "";
          img.loadPixels();
          if (img.pixels.length < 1 || img === undefined) {
            return;
          }
          image(img, 0, 0);
          for (var c = 0; c < img.pixels.length; c++) {
            var color = img.pixels[c];
            if (color > 0 && color < 255) {
              sourceIndex.push(color);
              var str = String.fromCharCode(color);
              msg += str;
            }
          }
          if (msg.length < 1) {
            return;
          }
          if (typeof callback == 'function') {
            callback(msg);
          } else {
            console.log(msg);
          }
        }, function () {
          return (getWebData(url, callback));
        });
      }
      return this;
    })()
    // -----
    //prompt("Only weeks 1-4 work.\nThis game is in v1.21 ALPHA.\nJoin the discord!\nMade by MonsterYT-DaGamer\nPress BACKSPACE to go back through menus\nOnly Gameplay settings work in the options menu\n\nDiscord: https://discord.gg/S88dwmsHWM");
    showMobileControls(true, true, true, true);
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
      Splashes.push({ sprite: splash, arr: arrow });
      setTimeout(function () {
        splash.destroy();
        Splashes.shift();
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
            if (Settings.NoteSplashes == true) {
              spr.display();
            }
          }
        }
      }
    }
    function Stay(num) {
      return (num + (camera.x - 200));
    }
    function StaY(num) {
      return (num + (camera.y - 200));
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

      for (var s = 0; s < notes.length; s++) {
        var section = notes[s];
        for (var n = 0; n < (section.sectionNotes).length; n++) {

          var dnote = section.sectionNotes[n];
          //console.log(dnote);

          if (dnote === []) { continue; }

          var note = [dnote[0], dnote[1]];
          var opponent = section.mustHitSection;
          var holdnote = 0;

          if (dnote[1] > 3) {
            opponent = !opponent;
          }

          if (dnote[2] > 0) {
            holdnote = dnote[2];
          }

          if (opponent === true) { opponent = "BF" }
          if (opponent === false) { opponent = "OPPONENT" }

          note = new Note(dnote[0], dnote[1], dnote[2], opponent, holdnote);

          if (events[n - 1] !== undefined) {
            var prevEvent = events[n - 1];
            if (prevEvent.Side !== opponent) {
              events.push(new Switch(opponent, dnote[0]));
            }
          }

          finished.push(note);
        }
      }
      return [finished, events, bpm];
    }
    // saving is defunct
    // function SaveAchievements() {
    //   setKeyValue("Achievements_" + id, Achievements);
    // }
    var Character = (function () {
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
        this.PlayAnimation = function (animation, hold) {
          spr.setAnimation(Anims.Idle);
          spr.setAnimation(Anims[animation]);
          c = animation;
          this.currentAnim = c;
          var dela = 300;
          if (hold == true) {
            dela += 250;
          }
          setTimeout(function () {
            if (c === animation) {
              spr.setAnimation(Anims.Idle);
            }
          }, dela / delta);
        };
      }
      return Character;
    }());
    var spd = 5;
    function MenuSelection() {
      storyMode.scale = 0.45;
      storyMode.display();

      options.scale = 0.45;
      options.display();

      //freePlay.scale = 0.7;
      freePlay.display();

      if (keyWentDown("down")) {
        playSound("assets/scrollMenu.mp3");
        menuSelected++;
        if (menuSelected >= 4) {
          menuSelected = 1;
        }
      }

      if (keyWentDown("up")) {
        playSound("assets/scrollMenu.mp3");
        menuSelected--;
        if (menuSelected <= 0) {
          menuSelected = 3;
        }
      }

      menuBG.y += (camera.y - menuBG.y) / 6.6;

      switch (menuSelected) {
        case 1:
          storyMode.setAnimation("selected_storyMode");
          freePlay.setAnimation("freePlay");
          freePlay.scale = 0.5;
          options.setAnimation("Options");
          options.scale = 1;

          camera.x += (storyMode.x - camera.x) / 5;
          camera.y += (storyMode.y - camera.y) / 5;

          if (keyWentDown(ENTER) || keyWentDown("space")) {
            menuSelected = null;
            playSound("assets/confirmMenu.mp3");

            var intev = setInterval(function () {
              camera.zoom += 0.05;
            }, 10);

            setTimeout(function () {
              camera.zoom = 1;
              state = "WEEKSELECTION";
              menuSelected = 1;
              clearInterval(intev);
              camera.x = 200;
              camera.y = 200;
            }, 1000);
          }
          break;
        case 2:
          freePlay.setAnimation("selected_freePlay");
          storyMode.setAnimation("storyMode");
          options.setAnimation("Options");
          freePlay.scale = 0.7;
          options.scale = 1;

          camera.x += (freePlay.x - camera.x) / 5;
          camera.y += (freePlay.y - camera.y) / 5;

          if (keyWentDown(ENTER) || keyWentDown("space")) {
            menuSelected = null;
            playSound("assets/confirmMenu.mp3");

            var intev = setInterval(function () {
              camera.zoom += 0.05;
            }, 10);

            setTimeout(function () {
              loadtxt("freeplay");
              camera.zoom = 1;
              state = "FREESELECTION";
              menuSelected = 2;
              clearInterval(intev);
              camera.x = 200;
              camera.y = 200;
            }, 1000);
          }
          break;
        case 3:
          freePlay.setAnimation("freePlay");
          storyMode.setAnimation("storyMode");
          options.setAnimation("selected_Options");
          freePlay.scale = 0.5;
          options.scale = 5;

          camera.x += (options.x - camera.x) / 5;
          camera.y += (options.y - camera.y) / 5;

          if (keyWentDown(ENTER) || keyWentDown("space")) {
            menuSelected = null;
            playSound("assets/confirmMenu.mp3");

            var intev = setInterval(function () {
              camera.zoom += 0.05;
            }, 10);

            setTimeout(function () {
              loadtxt("settings");
              camera.zoom = 1;
              state = "OPTSELECTION";
              menuSelected = 3;
              clearInterval(intev);
              camera.x = 200;
              camera.y = 200;
            }, 1000);
          }
          break;
      }
    }
    //setTimeout(function() {
    var FP_Texts = [];
    var FP_Selected = 0;
    var FP_Selections;

    var O_Texts = [];
    var O_Selected = 0;

    var OGP_Texts = [];
    var OGP_Selected = 0;

    var OGRP_Texts = [];
    var OGRP_Selected = 0;

    var CTRL_Texts = [];

    function loadtxt(q) {
      switch (q) {
        case "freeplay":
          for (var s in Songs) {
            if (s == "allEqualTo") {
              continue;
            }

            var i = (Object.keys(Songs)).indexOf(s);
            var tx = new window.Text(s, 100, 100 + (i * 50), 0.5);
            tx.songName = s;
            FP_Texts.push(tx);
          }
          break;
        case "settings":
          var txe1 = new window.Text("Gameplay", 100, 125, 0.6);
          var txe2 = new window.Text("Graphics", 100, 200, 0.6);
          var txe3 = new window.Text("Controls", 100, 275, 0.6);
          O_Texts.push(txe1);
          O_Texts.push(txe2);
          O_Texts.push(txe3);
          break;
        case "gp":
          var txx1 = new window.Text("Downscroll", 50, 175, 0.45);
          txx1.txc = "Downscroll";
          OGP_Texts.push(txx1);

          var txx2 = new window.Text("Middlescroll", 50, 225, 0.385);
          txx2.txc = "Middlescroll";
          OGP_Texts.push(txx2);
          break;
        case "grp":
          var txz1 = new window.Text("Note Splashes", 50, 125, 0.36);
          txz1.txc = "NoteSplashes";
          OGRP_Texts.push(txz1);

          var txz2 = new window.Text("FPS Counter", 50, 175, 0.385);
          txz2.txc = "FPSCounter";
          OGRP_Texts.push(txz2);

          var txz3 = new window.Text("Note Glow", 50, 225, 0.415);
          txz3.txc = "NoteGlow";
          OGRP_Texts.push(txz3);
          break;
        case "ctrl":
          var txtz1 = new window.Text("Keybinds", 50, 200, 0.9);
          txtz1.txc = "Keybinds";
          CTRL_Texts.push(txtz1);
          break;
      }
    }

    var boxes = {
      Gameplay: {
        Downscroll: createSprite(305, 175),
        Middlescroll: createSprite(305, 225)
      },
      Graphics: {
        NoteSplashes: createSprite(305, 125),
        FPSCounter: createSprite(305, 175),
        NoteGlow: createSprite(305, 225),
      }
    };

    function FreeSelection() {
      if (keyWentDown("up")) {
        FP_Selected--;
        playSound("assets/scrollMenu.mp3");
      }
      if (keyWentDown("down")) {
        FP_Selected++;
        playSound("assets/scrollMenu.mp3");
      }

      if (FP_Texts !== undefined) {
        calcDeltaTime();
        for (var i in FP_Texts) {
          var c = FP_Texts[i];
          if (c !== undefined && c.display !== undefined) {
            FP_Selections = FP_Texts.length; // unused
            c.display();

            if (FP_Selected == 11) {
              FP_Selected = 0;
            }
            if (FP_Selected == -1) {
              FP_Selected = 10;
            }

            if (FP_Texts[FP_Selected] == undefined) {
              //FP_Selected = 0;
              if (FP_Selected == 11) {
                FP_Selected = 0;
              } else {
                FP_Selected = 10;
              }
            } else {
              camera.y += (FP_Texts[FP_Selected].y - camera.y) / 5;
              menuBG.y += (FP_Texts[FP_Selected].y - camera.y) / 4.3;

              if (keyWentDown("space") || keyWentDown("ENTER")) {
                camera.zoom = 1;
                PlayWeek([FP_Texts[FP_Selected].songName], true);
                return;
              }
            }
          }
        }
      } else {
        FP_Texts = [];
        loadtxt('fp');
        //FreeSelection();
        return;
      }
    }

    function OptionSelection() {
      calcDeltaTime();

      if (keyWentDown("up")) {
        O_Selected--;
        playSound("assets/scrollMenu.mp3");

        if (O_Selected < 0) {
          O_Selected = 2;
        }
      }
      if (keyWentDown("down")) {
        O_Selected++;
        playSound("assets/scrollMenu.mp3");

        if (O_Selected > 2) {
          O_Selected = 0;
        }
      }

      if (O_Texts[O_Selected] !== undefined) {
        camera.y += (O_Texts[O_Selected].y - camera.y) / 5;
        menuBG.y += (camera.y - menuBG.y) / 6.6;
      } else {
        return;
      }

      if (keyWentDown(ENTER) || keyWentDown("space")) {
        switch (O_Selected) {
          case 0:
            state = "GPSELECTION";
            loadtxt('gp');
            bchange = false;
            break;
          case 1:
            state = "GRPSELECTION";
            loadtxt('grp');
            break;
          case 2:
            state = "CTRLSELECTION";
            loadtxt('ctrl');
            break;
        }
      }

      for (var d in O_Texts) {
        var e = O_Texts[d];
        if (e !== undefined && e.display !== undefined) {
          e.display();

        } else {
          //loadtxt("settings");
          return;
        }
      }
    }

    var bchange = false;

    function GameSelection() {
      calcDeltaTime();

      if (keyWentDown(BACKSPACE)) {
        state = "OPTSELECTION";
        playSound("assets/cancelMenu.mp3");
      }

      for (var dn in boxes.Gameplay) {
        var f = boxes.Gameplay[dn];
        var s = Settings[dn];

        if (s == true && f.setAnimation !== undefined) {
          f.setAnimation("FillBox");
        } else {
          if (f.setAnimation !== undefined) {
            if (bchange == true) {
              f.setAnimation("EmptyBox");
            } else {
              f.setAnimation("Box");
            }
          }
        }
        if (f.display !== undefined && f.scale !== undefined) {
          f.display();
          f.scale = 0.4;
        }
      }

      if (keyWentDown("space") || keyWentDown("ENTER")) {
        playSound("assets/scrollMenu.mp3");
        if (Settings[OGP_Texts[OGP_Selected].txc] == true) {
          bchange = true;
          Settings[OGP_Texts[OGP_Selected].txc] = false;
        } else {
          Settings[OGP_Texts[OGP_Selected].txc] = true;
        }
      }

      if (keyWentDown("up")) {
        OGP_Selected--;
        playSound("assets/scrollMenu.mp3");

        if (OGP_Selected < 0) {
          OGP_Selected = 1;
        }
      }
      if (keyWentDown("down")) {
        OGP_Selected++;
        playSound("assets/scrollMenu.mp3");

        if (OGP_Selected > 1) {
          OGP_Selected = 0;
        }
      }

      camera.y += (OGP_Texts[OGP_Selected].y - camera.y) / 5;

      for (var gp in OGP_Texts) {
        var arv = OGP_Texts[gp];
        if (arv !== undefined && arv.display !== undefined) {
          arv.display();
        }
      }
    }

    function GraphSelection() {
      calcDeltaTime();

      for (var dn in boxes.Graphics) {
        var f = boxes.Graphics[dn];
        var s = Settings[dn];

        if (s == true && f.setAnimation !== undefined) {
          f.setAnimation("FillBox");
        } else {
          if (f.setAnimation !== undefined) {
            if (bchange == true) {
              f.setAnimation("EmptyBox");
            } else {
              f.setAnimation("Box");
            }
          }
        }
        if (f.display !== undefined && f.scale !== undefined) {
          f.display();
          f.scale = 0.4;
        }
      }

      if (keyWentDown("space") || keyWentDown("ENTER")) {
        playSound("assets/scrollMenu.mp3");
        if (Settings[OGRP_Texts[OGRP_Selected].txc] == true) {
          bchange = true;
          Settings[OGRP_Texts[OGRP_Selected].txc] = false;
        } else {
          Settings[OGRP_Texts[OGRP_Selected].txc] = true;
        }
      }

      if (keyWentDown("up")) {
        OGRP_Selected--;
        playSound("assets/scrollMenu.mp3");

        if (OGRP_Selected < 0) {
          OGRP_Selected = 2;
        }
      }
      if (keyWentDown("down")) {
        OGRP_Selected++;
        playSound("assets/scrollMenu.mp3");

        if (OGRP_Selected > 2) {
          OGRP_Selected = 0;
        }
      }

      camera.y += (OGRP_Texts[OGRP_Selected].y - camera.y) / 5;

      for (var gp in OGRP_Texts) {
        var arv = OGRP_Texts[gp];
        if (arv !== undefined && arv.display !== undefined) {
          arv.display();
        }
      }
    }

    function ControlSelection() {
      calcDeltaTime();

      if (CTRL_Texts[0] !== undefined) {
        camera.y += (CTRL_Texts[0].y - camera.y) / 5;
      }

      for (var gp in CTRL_Texts) {
        var arv = CTRL_Texts[gp];
        if (arv !== undefined && arv.display !== undefined) {
          arv.display();
        }
      }

      if (keyWentDown("space") || keyWentDown(ENTER)) {
        var p = prompt("Type in the input box below what your keybinds will be.\nExample: 'A,S,W,D'. (without quotes)\nKeep in mind that Arrow keys are always a secondary keybind and are used all of the time. Also, if you break the system you will have to reload your tab, so just use this simple format: 'KEY,KEY,KEY,KEY'.\n\nReccomended Keybinds:\n'D,F,J,K'\n'A,S,K,L'\n'Q,W,O,P'\n'A,S,W,D'");
        if (p !== undefined && p !== null && typeof p == "string") {
          var e = p.split(",");
          Settings.Keybinds = e;
        } else {
          prompt("You will have to exit this prompt and try again.");
        }
      }
    }

    function WeekSelection() {
      var selects = ['Stage', 'Spooky', 'Philly', 'Limo', 'Christmas', 'Tank'];

      SelectionWeek.setAnimation("Selection" + selects[weekSelected - 1]);
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

      var In = setInterval(function () {
        if (i >= m) {
          out();
          clearInterval(In);
        } else {
          i += 0.01;
          camera.zoom = (1 + i);
        }
      }, 7.5);

      function out() {
        var Out = setInterval(function () {
          if (camera.zoom <= 1) {
            camera.zoom = 1;
            clearInterval(Out);
            return;
          }
          camera.zoom -= 0.05;
        }, 35);
      }
    }
    var A_Config = (function () {
      // getKeyValue("Achievements_" + id, function (rec) {
      // if (rec === undefined || rec === {}) {
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
      // }

      Achievements = rec;
      // setKeyValue("Achievements_" + id, rec);
      // });

      return A_Config;
    });

    var S_Config = (function () {
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
        this.Keybinds = Keybinds || ["A", "S", "W", "D"];
        this.SecondaryBinds = SecondaryBinds || ["LEFT", "DOWN", "UP", "RIGHT"];
      }
      S_Config.prototype.Notes = function (SafeFrames, Scrollspeed) {
        this.SafeFrames = SafeFrames !== undefined ? SafeFrames : this.SafeFrames;
        this.Scrollspeed = Scrollspeed !== undefined ? Scrollspeed : this.Scrollspeed;
      };
      S_Config.prototype.Graphics = function (NoteSplashes, FPSCounter, NoteGlow) {
        this.NoteSplashes = NoteSplashes !== undefined ? NoteSplashes : this.NoteSplashes;
        this.FPSCounter = FPSCounter !== undefined ? FPSCounter : this.FPSCounter;
        this.NoteGlow = NoteGlow !== undefined ? NoteGlow : this.NoteGlow;
      };
      S_Config.prototype.Gameplay = function (Middlescroll, Downscroll, Keybinds, SecondaryBinds) {
        this.Middlescroll = Middlescroll !== undefined ? Middlescroll : this.Middlescroll;
        this.Downscroll = Downscroll !== undefined ? Downscroll : this.Downscroll;
        this.Keybinds = Keybinds !== undefined ? Keybinds : this.Keybinds;
        this.SecondaryBinds = SecondaryBinds !== undefined ? SecondaryBinds : this.SecondaryBinds;
      };
      return S_Config;
    }());
    function drawArrows() {
      var dc = (Settings.Downscroll ? StaY(325) : StaY(75));

      if (Settings.Middlescroll == true) {
        // Stay(35), Stay(75), Stay(115), Stay(155)
        arrows.Left.x = Stay(145);
        arrows.Down.x = Stay(185);
        arrows.Up.x = Stay(225);
        arrows.Right.x = Stay(265);
      } else {
        arrows.Left.x = lanes.BF[0];
        arrows.Down.x = lanes.BF[1];
        arrows.Up.x = lanes.BF[2];
        arrows.Right.x = lanes.BF[3];
      }

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
        if (ar.includes("Anim")) { continue }
        if (ar.includes("Opponent")) { opponent = true }

        var current = arrows[ar];
        var anim = (arrows[ar + "Anim"]);

        if (current !== undefined && anim !== undefined) {
          current.setAnimation(anim);
          current.scale = 0.25;
          current.display();
          if (opponent == true && Settings.Middlescroll == true) {
            current.visible = false;
          }
        }
      }
    }
    function drawNotes() {
      for (var i = 0; i < notes.length; i++) {
        var note = notes[i];

        if (i >= 145) {
          i = 0;
          continue;
        }


        if (note !== undefined && note !== null) {
          note.sprite.x = lanes[note.side][note.lane];
          note.sprite.display();
          if (Settings.Downscroll === false) {
            if (note.sprite.y <= StaY(-15)) {
              note.miss();
            }
          } else {
            if (note.sprite.y >= StaY(415)) {
              note.miss();
            }
          }
        }
      }
    }
    function StopSong(music, fp) {
      movingTo = "MIDDLE";
      stopSound(music[0]);
      stopSound(music[1]);
      preloadSongs();
      notes = [];
      if (fp == undefined) {
        state = "WEEKSELECTION";
      } else if (fp == true) {
        camera.x = 200;
        //camera.y = 200;
        menuBG.x = 200;
        menuBG.y = 200;
        FP_Selected = 0;
        state = "FREESELECTION";
      } else {
        state = "WEEKSELECTION";
      }
      song = "";
      playSound("assets/freakyMenu.mp3");
      currentStats.Reset();
      movingTo = "MIDDLE";
    }
    function drawTrails() {
      for (var t = 0; t < holdNotes.length; t++) {
        var trail = holdNotes[t];

        if (trail.side == "OPPONENT" && Settings.Middlescroll == true) {
          trail.sprite.visible = false;
        }

        if (trail !== undefined && trail !== null) {
          trail.sprite.x = lanes[trail.side][trail.lane];
          trail.sprite.display();
          if (Settings.Downscroll === false) {
            if (trail.sprite.y <= StaY(-10)) {
              trail.miss();
            }
          } else {
            if (trail.sprite.y >= StaY(410)) {
              trail.miss();
            }
          }
        }
      }
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
          if (ratingPops.length >= 8) {
            ratingPops.shift();
          }

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

          if (current.y > (400 + current.sprite.height)) {
            ratingPops.shift();
            current.sprite.destroy();
          } else {
            current.gravity += 0.5;
            current.y += current.gravity;
          }
        }
      }
      if (ratingPops.length > 10) {
        for (var i = 0; i < ratingPops.length; i++) {
          ratingPops[i].sprite.destroy();
          ratingPops[i] = undefined;
          delete (ratingPops[i]);
          ratingPops.shift();
        }
      }
    }
    function judgement(note) {
      if (songStart == null) {
        console.log("SongStart not registered.");
        return;
      }
      for (var i = 0; i < hitWindow.length; i++) {
        var currentTime = Date.now();
        var hitTime = Math.round(songStart + note.time);
        //console.log("Time: " + (currentTime).toString() + " | HitTime: " + hitTime.toString());
        var min = (currentTime + hitWindow[i][0]);
        var max = (currentTime + hitWindow[i][1]);

        if (i === 0) {
          if (hitTime >= (min - (Settings.Scrollspeed / 5)) && hitTime <= (max + (Settings.Scrollspeed / 5))) {
            return [hitWindow[i][2], hitWindow[i][3]];
          }
        } else {
          if (hitTime >= (min - Settings.Scrollspeed) && hitTime <= (max + Settings.Scrollspeed)) {
            return [hitWindow[i][2], hitWindow[i][3]];
          }
        }
      }
    }
    function PlayChart(chart, ch) {
      setTimeout(function () {
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

      function CreateNote(n, an) {
        if (Settings.NoteGlow == false) {
          glows = [
            "Left", "Down", "Up", "Right",
            "Left", "Down", "Up", "Right",
          ];
        }
        if (state !== "SONG") { notes = []; StopSong(ch[0], ch[1]); return }
        var dc = (Settings.Downscroll ? 0 : 400);
        var no = {
          sprite: createSprite(200, StaY(dc)),
          lane: n.noteType,
          anim: an,
          glow: glows[n.noteType],
          strType: str[n.noteType],
          side: n.side,
          arrow: arrows.OpponentLeft,
        };
        no.miss = function () {
          var index = notes.indexOf(no);
          if (index > -1) {
            if (Settings.Downscroll === false) {
              if (no.sprite.y <= StaY(-15)) {
                notes.splice(index, 1);
                no.sprite.destroy();
                currentStats.Misses++;
                currentStats.Score -= 50;
              }
            } else {
              if (no.sprite.y >= StaY(415)) {
                notes.splice(index, 1);
                no.sprite.destroy();
                currentStats.Misses++;
                currentStats.Score -= 50;
              }
            }
          }

          var ndx = holdNotes.indexOf(no);
          if (ndx > -1) {
            if (Settings.Downscroll === false) {
              if (no.sprite.y <= StaY(-15)) {
                holdNotes.splice(ndx, 1);
                no.sprite.destroy();
                currentStats.Misses++;
                currentStats.Score -= 50;
              }
            } else {
              if (no.sprite.y >= StaY(415)) {
                holdNotes.splice(ndx, 1);
                no.sprite.destroy();
                currentStats.Misses++;
                currentStats.Score -= 50;
              }
            }
          }
        };
        no.hit = function () {
          var index = notes.indexOf(no);
          var ndx = holdNotes.indexOf(no);
          if (index > -1) {
            var judg = judgement(no);
            if ((judg !== null && judg !== undefined)) {
              currentStats.Score += judg[1];
              if (judg[1] < 0) {
                currentStats.Misses++;
              }
              notes.splice(index, 1);
              no.sprite.destroy();
              no = undefined;
              delete (no);

              var rate = judg[0];

              switch (rate) {
                case "Perfect!!":
                  currentStats.Hits += 1;
                  currentStats.SubHits += 1;
                  break;
                case "Sick!":
                  currentStats.Hits += 1;
                  currentStats.SubHits += 0.95;
                  break;
                case "Good":
                  currentStats.Hits += 1;
                  currentStats.SubHits += 0.75;
                  break;
                case "Bad":
                  currentStats.Hits += 1;
                  currentStats.SubHits += 0.65;
                  break;
                case "Trash!":
                  currentStats.Hits += 1;
                  currentStats.SubHits += 0.35;
                  break;
              }

              return judg[0];
            }
          }
          if (ndx > -1) {
            var juddg = judgement(no);
            if ((juddg !== null && juddg !== undefined)) {
              holdNotes.splice(ndx, 1);
            }
          }
        };
        return no;
      }

      function SendNote(n) {
        setTimeout(function () {
          if (state !== "SONG") { notes = []; StopSong(ch[0], ch[1]); return }
          var an = anims[n.noteType];
          var not = CreateNote(n, an);
          var veloc = (Settings.Downscroll ? (Settings.Scrollspeed * 2) : (0 - (Settings.Scrollspeed * 2)));
          not.sprite.velocityY = veloc;
          not.time = n.noteTime;
          not.sprite.setAnimation(not.anim);
          not.sprite.scale = 0.25;
          notes.push(not);
          if (n.hold === true && n.duration > 0) {
            var dur = Math.round((n.duration * (Settings.Scrollspeed / 2)) / 100);
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
              if (i >= (dur - 1)) {
                animz += "End";
              }
              editednote.sprite.setAnimation(animz);
              editednote.sprite.scale = 0.25;

              holdNotes.push(editednote);
            }
          }
        }, SpeedCode(n.noteTime));
      }

      songStart = Date.now();

      for (var i = 0; i < chart.length; i++) {
        if (state !== "SONG" && state !== "WEEKSELECTION") {
          notes = [];
          StopSong(ch[0], ch[1]);
          SendNote = function () { };
          return;
        }
        if (chart[i] !== null && chart[i] !== undefined) {
          var c = chart[i];
          SendNote(c);
        }
      }
    }
    var movingTo = "MIDDLE";
    function SW(time, side) {
      //console.log(movingTo);
      if (time == undefined) {
        return;
      }

      var timedel = 750;
      if (side == "BF") {
        timedel = 850;
      }

      setTimeout(function () {
        movingTo = side;
      }, time - timedel);
    }
    function PlayEvents(events) {
      for (var i in events) {
        var current = events[i];
        SW(current.ms, current.Side);
      }
    }
    var opress;
    function OpponentNotes() {
      if (notes === []) {
        return;
      }

      function glowie(not) {
        if (!not.sprite.isTouching(arrows["Opponent" + not.strType])) {
          return;
        }
        var del = 200;
        var idc = holdNotes.indexOf(not);
        if (idc > -1) {
          if (Settings.Middlescroll == true) {
            not.visible = false;
          }
          del = 350;
        }

        if (Settings.NoteGlow == true) {
          arrows["Opponent" + not.strType + "Anim"] = ((not.strType).replace(/Opponent/g, "") + "Glow");
          setTimeout(function () {
            if (arrows["Opponent" + not.strType + "Anim"].includes("Glow")) {
              arrows["Opponent" + not.strType + "Anim"] = ((not.strType).replace(/Opponent/g, "") + "Arrow");
            }
          }, del);
        }
      }

      for (var i = 0; i < notes.length; i++) {
        var not = notes[i];
        if ((not !== undefined && not !== null) && not.side === "OPPONENT") {
          if (Settings.Middlescroll == true) {
            not.sprite.visible = false;
          }
          var dista = ((4 + (Settings.Scrollspeed * 1.5)) + (notes.length * 0.75));
          var args = ((not.sprite.y) > (arrows.OpponentLeft.y - dista) && (not.sprite.y) < (arrows.OpponentLeft.y + dista));
          if (args) {
            var index = notes.indexOf(not);
            if (index > -1) {
              Opponent.PlayAnimation(not.strType);
              notes.splice(index, 1);
              delete (hnot);
              glowie(not);
            }
          }
        }
      }

      for (var h = 0; h < holdNotes.length; h++) {
        var hnot = holdNotes[h];
        if ((hnot !== undefined && hnot !== null) && hnot.side === "OPPONENT") {
          var distan = (((Settings.Scrollspeed * 2.5)) + (notes.length * 0.75));
          var argument = ((hnot.sprite.y) > (arrows.OpponentLeft.y - distan) && (hnot.sprite.y) < (arrows.OpponentLeft.y + distan));
          if (argument) {
            var ind3x = holdNotes.indexOf(hnot);
            if (ind3x > -1) {
              Opponent.PlayAnimation(hnot.strType);
              holdNotes.splice(ind3x, 1);
              delete (hnot);
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
        if (not !== undefined && not.side == "BF" && (not.lane === lane || not.lane === (lane + 4))) {
          return not;
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
            if (Settings.NoteGlow == true) {
              arrows[arrow + "Anim"] = (arrow + "Glow");
            }
            Player.PlayAnimation(arrow);
            if (rating === "Perfect!!") {
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
            delete (trail.sprite);
            if (holdNotes.indexOf(trail) < 0) {
              if (Settings.NoteGlow == true) {
                arrows[arrow + "Anim"] = (arrow + "Glow");
              }
              Player.PlayAnimation(arrow, true);
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
      if (Settings.Middlescroll == true) {
        lanes.BF = [Stay(145), Stay(185), Stay(225), Stay(265), Stay(145), Stay(185), Stay(225), Stay(265)];
      }
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
          preloadSound(current.Inst);
          preloadSound(current.Vocals);
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

      var beat = timedLoop(beatperminute, function () {
        if (state !== "SONG") {
          stopTimedLoop(beat);
          return;
        }

        CamBeat(0.02);
      });
    }
    var songStart = null;
    function PlaySong(data) {
      delete notes;
      notes = [];
      delete holdNotes;
      holdNotes = [];
      delete ratingPops;
      ratingPops = [];
      delete Splashes;
      Splashes = [];

      songStart = null;

      Settings.Scrollspeed = (data.speed * 2);

      currentStats.Reset();
      song = data.name;
      Player = data.player;
      Opponent = data.opponent;

      playSound(data.Inst);
      playSound(data.Vocals);

      PlayChart(data.song[0], [data.Vocals, data.Inst]);
      PlayEvents(data.song[1]);

      if (data.camEFX == true) {
        PlayBPM(data.song[2]);
      }

      state = "SONG";

      setTimeout(function () {
        var bg = data.background;
        var spr = createSprite((200 + bg.offset[0]), (200 + bg.offset[1]));
        spr.setAnimation(bg.spriteName);
        spr.scale = bg.scale;
        Background = spr;
        camera.x = 200;
        camera.y = 200;
        //camera.zoom = 0.9;
        stopSound("assets/freakyMenu.mp3");
      }, data.offset / delta);
      setTimeout(function () {
        clearInterval(timed);
        StopSong([data.Vocals, data.Inst]);
      }, (data.songLength * 1000));
    }
    function PlayWeek(week, temp) {
      var current = 0;
      var data;

      if (temp == undefined) {
        data = Songs[week[current]];
      } else {
        data = Songs[week[current]];
      }

      var ofset = 0;

      if (data.chartOffset !== undefined) {
        ofset = data.chartOffset;
      }

      function play() {
        setTimeout(function () {
          delete notes;
          notes = [];
          delete holdNotes;
          holdNotes = [];
          delete ratingPops;
          ratingPops = [];
          delete Splashes;
          Splashes = [];

          currentStats.Reset();
          Settings.Scrollspeed = (data.speed * 2);

          song = data.name;
          Player = data.player;
          Opponent = data.opponent;
          playSound(data.Inst);
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

          playSound(data.Vocals);
          PlayChart(data.song[0], [data.Vocals, data.Inst]);
          PlayEvents(data.song[1]);
        }, ofset / delta);
        setTimeout(function () {
          if (Songs[week[current + 1]] !== undefined) {
            current++;
            data = Songs[week[current]];
            play();
          } else {
            StopSong([data.Vocals, data.Inst], temp);
          }
        }, (data.songLength * 1000));
      }

      play();
    }
    // CoderUtils.getWebData("https://file-rgb.jacobbutler6.repl.co/info/".concat(window.getURLPath()[2]), function (stream) {
    //   window.projectData = JSON.parse(stream);
    // });
    function MoveNotes(de) {
      var mov = de;
      if (Settings.Downscroll == true) {
        //mov = -de;
      }

      for (var i in notes) {
        var current = notes[i];
        if (current !== undefined) {
          if (current.sprite !== undefined) {
            current.sprite.y += mov;
            //current.time += (mov * 10);
          }
        }
      }

      for (var b in holdNotes) {
        var curent = holdNotes[b];
        if (curent !== undefined) {
          if (curent.sprite !== undefined) {
            curent.sprite.y += mov;
            var ay = arrows[curent.strType].y;
            var cy = curent.sprite.y;
            var min = (ay - (5 * Settings.Scrollspeed));
            var max = (ay + (5 * Settings.Scrollspeed));
            var ifd = (!arrows[curent.strType + "Anim"].includes("Arrow"));
            if (Settings.NoteGlow == false) {
              ifd = (max !== undefined);
            }
            if (cy >= min && cy <= max && ifd && curent.side == "BF") {
              var idx = holdNotes.indexOf(curent);
              if (idx > -1) {
                Player.PlayAnimation(curent.strType);
                holdNotes.splice(idx, 1);
              }
            }
          }
        }
      }
    }
    var yoffset = 15;
    function CamSwitches() {
      switch (movingTo) {
        case "MIDDLE":
          if (camera.x > 200) {
            camera.x -= 2.5;
          } else if (camera.x < 200) {
            camera.x += 2.5;
          }

          if (camera.y > 220 - yoffset) {
            camera.y -= 2.5;
          } else if (camera.y < 220 - yoffset) {
            camera.y += 2.5;
          }
          break;
        case "BF":
          camera.x += ((Player.CamPos.x - yoffset) - camera.x) / 5;
          camera.y += (((Player.CamPos.y - yoffset) - camera.y) / 5);
          MoveNotes(((Player.CamPos.y - yoffset) - camera.y) / 5);
          break;
        case "OPPONENT":
          camera.x += ((Opponent.CamPos.x - yoffset) - camera.x) / 5;
          camera.y += (((Opponent.CamPos.y - yoffset) - camera.y) / 5);
          MoveNotes(((Opponent.CamPos.y - yoffset) - camera.y) / 5);
          break;
      }
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
        y: 220,
      },
        0.85),
      W4_Boyfriend: new Character({
        Idle: "Boyfriend_Idle",
        Left: "Boyfriend_Left",
        Down: "Boyfriend_Down",
        Up: "Boyfriend_Up",
        Right: "Boyfriend_Right",
      },
        [90, 300],
        "BF", {
        x: 90,
        y: 270,
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
        x: 300,
        y: 220,
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
        x: 300,
        y: 220,
      },
        1.1),
      Pico: new Character({
        Idle: "Pico_Idle",
        Left: "Pico_Left",
        Down: "Pico_Down",
        Up: "Pico_Up",
        Right: "Pico_Right",
      },
        [300, 250],
        "OPPONENT", {
        x: 300,
        y: 220,
      },
        1),
      Mother: new Character({
        Idle: "Mama_Idle",
        Left: "Mama_Left",
        Down: "Mama_Down",
        Up: "Mama_Up",
        Right: "Mama_Right",
      },
        [350, 184],
        "OPPONENT", {
        x: 350,
        y: 170,
      },
        1.3),
    };
    var WEEKS = {
      1: ['Bopeebo', 'Fresh', 'DadBattle'],
      2: ['Spookeez', 'South'],
      3: ['Pico', 'Philly', 'Blammed'],
      4: ['High', 'MILD', 'SatinPants'],
    };
    var Songs = {
      DadBattle: {
        name: "Dad-Battle",
        player: Characters.Boyfriend,
        opponent: Characters.Dad,
        background: {
          spriteName: "Background_1",
          scale: 3,
          offset: [0, 0],
        },
        offset: 100,
        Vocals: "assets/Dadbattle_Voices.mp3",
        Inst: "assets/Dadbattle_Inst.mp3",
        songLength: 88,
        speed: 2,
        chartOffset: 333,
        camEFX: false,
        song: Translate({ "song": { "song": "Dad Battle", "bpm": 180.0, "needsVoices": true, "player1": "bf", "player2": "dad", "speed": 2.3, "notes": [{ "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[10666.667, 2, 0.0], [11000.0, 0, 0.0], [11166.667, 1, 0.0], [11333.334, 2, 0.0], [11666.667, 0, 0.0], [11833.334, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[12000.0, 2, 0.0], [12166.667, 3, 0.0], [12333.334, 0, 0.0], [12500.0, 1, 0.0], [12666.667, 2, 0.0], [13000.0, 0, 0.0], [13166.667, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[13333.334, 2, 0.0], [13666.667, 0, 0.0], [13833.334, 1, 0.0], [14000.0, 2, 0.0], [14333.334, 0, 0.0], [14500.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[14666.667, 2, 0.0], [14833.334, 3, 0.0], [15000.0, 0, 0.0], [15166.667, 1, 0.0], [15333.334, 2, 0.0], [15666.667, 0, 0.0], [15833.334, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[16000.0, 1, 0.0], [16333.334, 0, 0.0], [16500.0, 3, 0.0], [16666.668, 1, 0.0], [17000.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[17333.334, 1, 0.0], [17666.668, 0, 0.0], [17833.334, 0, 0.0], [18000.0, 3, 0.0], [18166.668, 3, 0.0], [18333.334, 3, 0.0], [18500.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[18666.668, 1, 0.0], [19000.0, 0, 0.0], [19166.668, 3, 0.0], [19333.334, 1, 0.0], [19666.668, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[20000.0, 1, 0.0], [20333.334, 0, 0.0], [20500.0, 0, 0.0], [20666.668, 3, 0.0], [20833.334, 3, 0.0], [21000.0, 3, 0.0], [21166.668, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[21666.668, 2, 0.0], [21833.334, 1, 0.0], [22000.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[22833.334, 1, 0.0], [23000.0, 3, 0.0], [23333.334, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[24333.334, 2, 0.0], [24666.668, 1, 0.0], [25000.0, 0, 0.0], [25166.668, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[25333.334, 2, 0.0], [25500.0, 3, 0.0], [25666.668, 0, 0.0], [25833.334, 3, 0.0], [26000.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[27000.0, 2, 0.0], [27166.668, 1, 0.0], [27333.334, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[28166.668, 1, 0.0], [28333.334, 3, 0.0], [28666.668, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[29666.668, 2, 0.0], [30000.0, 1, 0.0], [30333.334, 0, 0.0], [30500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[30666.668, 4, 0.0], [30666.668, 2, 0.0], [30833.334, 5, 0.0], [30833.334, 3, 0.0], [31000.0, 6, 0.0], [31000.0, 0, 0.0], [31166.668, 7, 0.0], [31166.668, 3, 0.0], [31333.334, 6, 0.0], [31333.334, 2, 0.0], [31500.0, 5, 0.0], [31666.668, 4, 0.0], [31833.334, 5, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[32166.668, 0, 0.0], [32333.334, 3, 0.0], [32500.002, 2, 0.0], [32666.668, 1, 0.0], [33000.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[33500.0, 2, 0.0], [33666.668, 3, 0.0], [33833.3359, 1, 0.0], [34000.0, 2, 0.0], [34333.3359, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[34666.668, 0, 0.0], [35000.0, 1, 0.0], [35333.3359, 3, 0.0], [35666.668, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[36000.0, 2, 0.0], [36333.3359, 3, 0.0], [36666.668, 0, 0.0], [36666.668, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[37500.0, 1, 0.0], [37666.668, 3, 0.0], [37833.3359, 2, 0.0], [38000.0, 0, 0.0], [38166.668, 2, 0.0], [38333.3359, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[38666.668, 0, 0.0], [38750.0, 3, 0.0], [38833.3359, 0, 0.0], [39000.0, 1, 0.0], [39166.668, 0, 0.0], [39333.3359, 2, 0.0], [39500.0, 3, 0.0], [39666.668, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[40166.668, 0, 0.0], [40333.3359, 3, 0.0], [40500.0, 1, 0.0], [40666.668, 2, 0.0], [40833.3359, 3, 0.0], [41000.0, 1, 0.0], [41166.668, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[41333.3359, 0, 0.0], [41333.3359, 4, 0.0], [41500.0, 1, 0.0], [41500.0, 5, 0.0], [41666.668, 0, 0.0], [41666.668, 6, 0.0], [41833.3359, 3, 0.0], [41833.3359, 7, 0.0], [42000.0, 2, 0.0], [42000.0, 6, 0.0], [42166.668, 5, 0.0], [42333.3359, 3, 0.0], [42333.3359, 4, 0.0], [42500.0, 5, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[42833.3359, 0, 0.0], [43000.0, 3, 0.0], [43166.668, 2, 0.0], [43333.3359, 1, 0.0], [43666.668, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[44166.668, 2, 0.0], [44333.3359, 3, 0.0], [44500.0, 1, 0.0], [44666.668, 2, 0.0], [45000.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[45333.3359, 0, 0.0], [45666.668, 1, 0.0], [46000.0, 3, 0.0], [46333.3359, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[46666.668, 2, 0.0], [47000.0, 3, 0.0], [47333.3359, 0, 0.0], [47333.3359, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[48166.668, 1, 0.0], [48333.3359, 3, 0.0], [48500.0, 2, 0.0], [48666.668, 0, 0.0], [48833.3359, 2, 0.0], [49000.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[49333.3359, 0, 0.0], [49416.668, 3, 0.0], [49500.0, 0, 0.0], [49666.668, 1, 0.0], [49833.3359, 0, 0.0], [50000.0, 2, 0.0], [50166.668, 3, 0.0], [50333.3359, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[50833.3359, 0, 0.0], [51000.0, 3, 0.0], [51166.668, 1, 0.0], [51333.3359, 2, 0.0], [51500.0, 3, 0.0], [51666.668, 1, 0.0], [51833.3359, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[52000.0, 0, 0.0], [52166.668, 0, 0.0], [52333.3359, 2, 0.0], [52500.0, 2, 0.0], [52666.668, 3, 0.0], [53000.0, 3, 0.0], [53000.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[53333.3359, 2, 0.0], [53666.668, 0, 0.0], [53833.3359, 1, 0.0], [54000.0, 2, 0.0], [54333.3359, 0, 0.0], [54500.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[54666.668, 2, 0.0], [54833.3359, 3, 0.0], [55000.0, 0, 0.0], [55166.668, 1, 0.0], [55333.3359, 2, 0.0], [55666.668, 0, 0.0], [55833.3359, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[56000.0, 2, 0.0], [56333.3359, 0, 0.0], [56500.0, 1, 0.0], [56666.668, 2, 0.0], [57000.0, 0, 0.0], [57166.668, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[57333.3359, 2, 0.0], [57500.0, 3, 0.0], [57666.668, 0, 0.0], [57833.3359, 1, 0.0], [58000.0, 2, 0.0], [58333.3359, 0, 0.0], [58500.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[58666.668, 1, 0.0], [59000.0, 0, 0.0], [59166.668, 3, 0.0], [59333.3359, 1, 0.0], [59666.668, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[60000.0, 1, 0.0], [60333.3359, 0, 0.0], [60500.0, 0, 0.0], [60666.668, 3, 0.0], [60833.3359, 3, 0.0], [61000.0, 3, 0.0], [61166.668, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[61333.3359, 1, 0.0], [61666.668, 0, 0.0], [61833.3359, 3, 0.0], [62000.0, 1, 0.0], [62333.3359, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[62666.668, 1, 0.0], [62666.668, 4, 0.0], [62833.3359, 5, 0.0], [63000.0, 0, 0.0], [63000.0, 6, 0.0], [63166.668, 0, 0.0], [63166.668, 7, 0.0], [63333.3359, 3, 0.0], [63333.3359, 6, 0.0], [63500.0, 3, 0.0], [63500.0, 5, 0.0], [63666.668, 3, 0.0], [63666.668, 4, 0.0], [63833.3359, 5, 333.333344], [63833.3359, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[64333.3359, 2, 0.0], [64500.0039, 1, 0.0], [64666.668, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[65500.0039, 1, 0.0], [65666.67, 3, 0.0], [66000.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[67000.0, 2, 0.0], [67333.3359, 1, 0.0], [67666.67, 0, 0.0], [67833.3359, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[68000.0, 2, 0.0], [68000.0, 4, 0.0], [68166.67, 3, 0.0], [68166.67, 5, 0.0], [68333.3359, 0, 0.0], [68333.3359, 6, 0.0], [68500.0, 3, 0.0], [68500.0, 7, 0.0], [68666.67, 2, 0.0], [68666.67, 6, 0.0], [68833.3359, 5, 0.0], [69000.0, 4, 0.0], [69166.67, 5, 333.333344]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[69666.67, 2, 0.0], [69833.3359, 1, 0.0], [70000.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[70833.3359, 1, 0.0], [71000.0, 3, 0.0], [71333.3359, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[72333.3359, 2, 0.0], [72666.67, 1, 0.0], [73000.0, 0, 0.0], [73166.67, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[73333.3359, 2, 0.0], [73500.0, 3, 0.0], [73666.67, 0, 0.0], [73833.3359, 3, 0.0], [74000.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[74666.67, 2, 0.0], [75000.0, 0, 0.0], [75166.67, 1, 0.0], [75333.3359, 2, 0.0], [75666.67, 0, 0.0], [75833.3359, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[76000.0, 2, 0.0], [76166.67, 3, 0.0], [76333.3359, 0, 0.0], [76500.0, 1, 0.0], [76666.67, 2, 0.0], [77000.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[77333.3359, 2, 0.0], [77666.67, 0, 0.0], [77833.3359, 1, 0.0], [78000.0, 2, 0.0], [78333.3359, 0, 0.0], [78500.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[78666.67, 2, 0.0], [78833.3359, 3, 0.0], [79000.0, 0, 0.0], [79166.67, 1, 0.0], [79333.3359, 2, 0.0], [79666.67, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[80000.0, 1, 0.0], [80333.3359, 0, 0.0], [80500.0, 3, 0.0], [80666.67, 1, 0.0], [81000.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[81333.3359, 1, 0.0], [81666.67, 1, 0.0], [82000.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[82666.67, 1, 0.0], [83000.0, 0, 0.0], [83166.67, 3, 0.0], [83333.3359, 1, 0.0], [83666.67, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[84000.0, 1, 0.0], [84333.3359, 1, 0.0], [84666.67, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }] }, "generatedBy": "SNIFF ver.6" }),
      },
      Bopeebo: {
        name: "Bopeebo",
        player: Characters.Boyfriend,
        opponent: Characters.Dad,
        background: {
          spriteName: "Background_1",
          scale: 3,
          offset: [0, 0],
        },
        offset: 100,
        Vocals: "assets/Bopeebo_Voices.mp3",
        Inst: "assets/Bopeebo_Inst.mp3",
        songLength: 85,
        speed: 1.23,
        camEFX: false,
        song: Translate({ "song": { "song": "Bopeebo", "bpm": 100.0, "needsVoices": true, "player1": "bf", "player2": "dad", "speed": 1.3, "notes": [{ "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[0.0, 2, 0.0], [600.0, 3, 600.0], [1200.0, 3, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[2400.0, 2, 0.0], [3000.0, 3, 600.0], [3600.0, 3, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[4800.0, 1, 300.0], [5400.0, 0, 300.0], [6000.0, 3, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[7200.0, 1, 300.0], [7800.0, 0, 300.0], [8400.0, 3, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[9600.0, 1, 300.0], [10200.0, 3, 0.0], [10500.0, 0, 0.0], [10800.0, 1, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[12000.0, 1, 300.0], [12600.0, 3, 0.0], [12900.0, 0, 0.0], [13200.0, 1, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[14400.0, 3, 0.0], [14700.0, 1, 0.0], [15300.0, 0, 0.0], [15600.0, 2, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[16800.0, 3, 0.0], [17100.0, 1, 0.0], [17700.0, 0, 0.0], [18000.0, 2, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[19200.0, 0, 0.0], [19500.0, 3, 0.0], [19800.0, 1, 900.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[21600.0, 0, 0.0], [21900.0, 3, 0.0], [22200.0, 1, 900.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[24000.0, 1, 0.0], [24300.0, 3, 0.0], [24600.0, 0, 900.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[26400.0, 1, 0.0], [26700.0, 3, 0.0], [27000.0, 0, 900.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[28800.0, 2, 0.0], [29100.0, 3, 0.0], [29400.0, 0, 1200.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[31200.0, 2, 0.0], [31500.0, 3, 0.0], [31800.0, 0, 1200.0], [33300.0, 6, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[33600.0, 0, 0.0], [33900.0, 3, 0.0], [34500.0, 2, 0.0], [34575.0, 0, 0.0], [34800.0, 1, 600.0], [35700.0, 6, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[36000.0, 0, 0.0], [36300.0, 3, 0.0], [36900.0, 2, 0.0], [36975.0, 0, 0.0], [37200.0, 1, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[38400.0, 2, 450.0], [39000.0, 3, 300.0], [39600.0, 0, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[40800.0, 2, 450.0], [41400.0, 3, 300.0], [42000.0, 0, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[43200.0, 1, 0.0], [43800.0, 2, 0.0], [44400.0, 1, 0.0], [44550.0, 1, 0.0], [44700.0, 1, 0.0], [45000.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[45600.0, 1, 0.0], [46200.0, 2, 0.0], [46800.0, 1, 0.0], [46950.0, 1, 0.0], [47100.0, 1, 0.0], [47400.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[48000.0, 2, 450.0], [48600.0, 3, 300.0], [49200.0, 0, 450.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[50400.0, 2, 450.0], [51000.0, 3, 300.0], [51600.0, 0, 450.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[52800.0, 3, 1800.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[55200.0, 3, 1800.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[57600.0, 2, 0.0], [57900.0, 3, 0.0], [58200.0, 0, 1200.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[60000.0, 2, 0.0], [60300.0, 3, 0.0], [60600.0, 0, 1200.0], [62100.0, 6, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[62400.0, 0, 0.0], [62700.0, 3, 0.0], [63300.0, 2, 0.0], [63375.0, 0, 0.0], [63600.0, 1, 600.0], [64500.0, 6, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[64800.0, 0, 0.0], [65100.0, 3, 0.0], [65700.0, 2, 0.0], [65775.0, 0, 0.0], [66000.0, 1, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[67200.0, 2, 0.0], [67500.0, 3, 0.0], [67800.0, 0, 0.0], [68100.0, 2, 0.0], [68400.0, 1, 600.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[69600.0, 2, 0.0], [69900.0, 3, 0.0], [70200.0, 0, 0.0], [70500.0, 2, 0.0], [70800.0, 1, 600.0], [71700.0, 6, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[72000.0, 0, 0.0], [72300.0, 3, 0.0], [72900.0, 2, 0.0], [72975.0, 0, 0.0], [73200.0, 1, 600.0], [74100.0, 6, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[74400.0, 0, 0.0], [74700.0, 3, 0.0], [75300.0, 2, 0.0], [75375.0, 0, 0.0], [75600.0, 1, 600.0]] }] }, "generatedBy": "SNIFF ver.6" }),
      },
      Fresh: {
        name: "Fresh",
        player: Characters.Boyfriend,
        opponent: Characters.Dad,
        background: {
          spriteName: "Background_1",
          scale: 3,
          offset: [0, 0],
        },
        offset: 100,
        Vocals: "assets/Fresh_Voices.mp3",
        Inst: "assets/Fresh_Inst.mp3",
        songLength: 86,
        speed: 2.3,
        camEFX: false,
        song: Translate({ "song": { "song": "Fresh", "bpm": 120.0, "needsVoices": true, "player1": "bf", "player2": "dad", "speed": 1.8, "notes": [{ "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[0.0, 1, 0.0], [250.0, 1, 0.0], [500.0, 3, 0.0], [875.0, 3, 0.0], [1125.0, 1, 0.0], [1250.0, 0, 0.0], [1500.0, 3, 0.0], [1500.0, 2, 0.0], [1750.0, 1, 0.0], [1875.0, 0, 125.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[2000.0, 1, 0.0], [2250.0, 1, 0.0], [2500.0, 3, 0.0], [2875.0, 3, 0.0], [3125.0, 1, 0.0], [3250.0, 0, 0.0], [3500.0, 2, 0.0], [3500.0, 3, 0.0], [3750.0, 1, 0.0], [3875.0, 0, 125.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[4000.0, 1, 0.0], [4250.0, 1, 0.0], [4500.0, 3, 0.0], [4875.0, 3, 0.0], [5125.0, 1, 0.0], [5250.0, 0, 0.0], [5500.0, 3, 0.0], [5500.0, 2, 0.0], [5750.0, 3, 125.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[6000.0, 1, 0.0], [6250.0, 1, 0.0], [6500.0, 3, 0.0], [6875.0, 3, 0.0], [7125.0, 1, 0.0], [7250.0, 0, 0.0], [7500.0, 3, 0.0], [7500.0, 2, 0.0], [7750.0, 3, 125.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[8250.0, 0, 0.0], [8500.0, 1, 0.0], [9000.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[10250.0, 0, 0.0], [10500.0, 1, 0.0], [11000.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[12250.0, 0, 0.0], [12500.0, 2, 0.0], [12750.0, 3, 0.0], [13000.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[14250.0, 0, 0.0], [14500.0, 2, 0.0], [14750.0, 3, 0.0], [15000.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[16250.001, 0, 0.0], [16500.0, 1, 0.0], [16750.0, 3, 0.0], [17000.0, 0, 0.0], [17500.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[18250.0, 0, 0.0], [18500.0, 1, 0.0], [18750.0, 3, 0.0], [19000.0, 0, 0.0], [19500.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[20000.0, 3, 0.0], [20250.0, 1, 0.0], [20750.0, 2, 0.0], [21000.0, 3, 0.0], [21250.0, 1, 0.0], [21750.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[22000.0, 3, 0.0], [22250.0, 1, 0.0], [22750.0, 2, 0.0], [23000.0, 3, 0.0], [23250.0, 1, 0.0], [23750.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[24000.0, 3, 0.0], [24500.0, 0, 0.0], [25000.0, 1, 0.0], [25250.0, 1, 0.0], [25500.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[26000.0, 1, 0.0], [26250.0, 2, 0.0], [26500.0, 3, 0.0], [26750.0, 0, 0.0], [27000.0, 2, 0.0], [27250.0, 3, 0.0], [27500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[28000.0, 3, 0.0], [28500.0, 0, 0.0], [29000.0, 1, 0.0], [29250.0, 1, 0.0], [29500.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[30000.0, 1, 0.0], [30250.0, 2, 0.0], [30500.0, 3, 0.0], [30750.0, 0, 0.0], [31000.0, 2, 0.0], [31250.0, 3, 0.0], [31500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[32500.002, 0, 0.0], [32750.002, 3, 0.0], [33000.0, 1, 0.0], [33250.0, 3, 0.0], [33500.0, 1, 0.0], [33750.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[34250.0, 0, 0.0], [34500.0, 3, 0.0], [34750.0, 0, 0.0], [35000.0, 2, 375.0], [35500.0, 1, 375.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[36500.0, 0, 0.0], [36750.0, 3, 0.0], [37000.0, 1, 0.0], [37250.0, 3, 0.0], [37500.0, 1, 0.0], [37750.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[38250.0, 0, 0.0], [38500.0, 3, 0.0], [38750.0, 0, 0.0], [39000.0, 2, 375.0], [39500.0, 1, 375.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[40250.0, 0, 0.0], [40500.0, 1, 0.0], [41000.0, 2, 0.0], [41500.0, 2, 0.0], [41750.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[42250.0, 0, 0.0], [42500.0, 1, 0.0], [43000.0, 2, 0.0], [43500.0, 2, 0.0], [43750.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[44250.0, 0, 0.0], [44500.0, 2, 0.0], [44750.0, 3, 0.0], [45000.0, 0, 0.0], [45750.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[46250.0, 0, 0.0], [46500.0, 2, 0.0], [46750.0, 3, 0.0], [47000.0, 0, 0.0], [47750.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[48250.0, 0, 0.0], [48500.0, 1, 0.0], [48750.0, 3, 0.0], [49000.0, 0, 0.0], [49750.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[50250.0, 0, 0.0], [50500.0, 1, 0.0], [50750.0, 3, 0.0], [51000.0, 0, 0.0], [51750.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[52000.0, 3, 0.0], [52250.0, 1, 0.0], [52500.0, 1, 0.0], [52750.0, 2, 0.0], [53000.0, 3, 0.0], [53250.0, 1, 0.0], [53750.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[54000.0, 3, 0.0], [54250.0, 1, 0.0], [54500.0, 1, 0.0], [54750.0, 2, 0.0], [55000.0, 3, 0.0], [55250.0, 1, 0.0], [55750.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[56000.0, 3, 0.0], [56500.0, 0, 0.0], [57000.0, 1, 0.0], [57250.0, 1, 0.0], [57500.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[58000.0, 1, 0.0], [58250.0, 2, 0.0], [58500.0, 3, 0.0], [58750.0, 0, 0.0], [59000.0, 2, 0.0], [59250.0, 3, 0.0], [59500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[60000.0, 3, 0.0], [60500.0, 0, 0.0], [61000.0, 1, 0.0], [61250.0, 1, 0.0], [61500.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[62000.0, 1, 0.0], [62250.0, 2, 0.0], [62500.0, 3, 0.0], [62750.0, 0, 0.0], [63000.0, 2, 0.0], [63250.0, 3, 0.0], [63500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[64500.0039, 0, 0.0], [64750.0039, 3, 0.0], [65000.0039, 1, 0.0], [65250.0039, 3, 0.0], [65500.0039, 1, 0.0], [65750.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[66250.0, 0, 0.0], [66500.0, 3, 0.0], [66750.0, 0, 0.0], [67000.0, 2, 375.0], [67500.0, 1, 375.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[68500.0, 0, 0.0], [68750.0, 3, 0.0], [69000.0, 1, 0.0], [69250.0, 3, 0.0], [69500.0, 1, 0.0], [69750.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[70250.0, 0, 0.0], [70500.0, 3, 0.0], [70750.0, 0, 0.0], [71000.0, 2, 375.0], [71500.0, 1, 375.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[72000.0, 1, 0.0], [72000.0, 5, 0.0], [72250.0, 1, 0.0], [72250.0, 5, 0.0], [72500.0, 3, 0.0], [72500.0, 7, 0.0], [72875.0, 3, 0.0], [72875.0, 7, 0.0], [73125.0, 1, 0.0], [73125.0, 5, 0.0], [73250.0, 0, 0.0], [73250.0, 4, 0.0], [73500.0, 3, 0.0], [73500.0, 2, 0.0], [73500.0, 7, 0.0], [73500.0, 6, 0.0], [73750.0, 1, 0.0], [73750.0, 5, 0.0], [73875.0, 0, 125.0], [73875.0, 4, 125.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[74000.0, 1, 0.0], [74250.0, 1, 0.0], [74500.0, 3, 0.0], [74875.0, 3, 0.0], [75125.0, 1, 0.0], [75250.0, 0, 0.0], [75500.0, 3, 0.0], [75500.0, 2, 0.0], [75750.0, 1, 0.0], [75875.0, 0, 125.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[76000.0, 1, 0.0], [76000.0, 5, 0.0], [76250.0, 1, 0.0], [76250.0, 5, 0.0], [76500.0, 3, 0.0], [76500.0, 7, 0.0], [76875.0, 3, 0.0], [76875.0, 7, 0.0], [77125.0, 1, 0.0], [77125.0, 5, 0.0], [77250.0, 0, 0.0], [77250.0, 4, 0.0], [77500.0, 3, 0.0], [77500.0, 2, 0.0], [77500.0, 7, 0.0], [77500.0, 6, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[78000.0, 1, 0.0], [78250.0, 1, 0.0], [78500.0, 3, 0.0], [78875.0, 3, 0.0], [79125.0, 1, 0.0], [79250.0, 0, 0.0], [79500.0, 3, 0.0], [79500.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }] }, "generatedBy": "SNIFF ver.6" }),
      },
      Spookeez: {
        name: "Spookeez",
        player: Characters.Boyfriend,
        opponent: Characters.SkidandPump,
        background: {
          spriteName: "Background_2",
          scale: 3,
          offset: [0, 0],
        },
        offset: 100,
        Vocals: "assets/Spookeez_Voices.mp3",
        Inst: "assets/Spookeez_Inst.mp3",
        songLength: 103,
        speed: 2.2,
        camEFX: false,
        song: Translate({ "song": { "player1": "bf", "notes": [{ "sectionNotes": [], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[6400, 0, 0], [6599.99951, 1, 0], [6799.99951, 3, 0], [7199.99951, 3, 0], [7599.99951, 2, 0], [7799.99951, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[7999.99951, 1, 0], [8200, 3, 0], [8400, 3, 0], [8800, 2, 0], [9200, 0, 0], [9400, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[9600, 0, 0], [9800, 1, 0], [10000, 3, 0], [10400, 3, 0], [10800, 2, 0], [11000, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[11200, 1, 0], [11400, 3, 0], [11600, 3, 0], [12000, 2, 0], [12400, 0, 0], [12600, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[12800, 2, 0], [12999.999, 3, 0], [13099.999, 1, 0], [13199.999, 0, 0], [13399.999, 0, 0], [13599.999, 2, 0], [13799.999, 3, 0], [13999.999, 1, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[14399.999, 1, 0], [14599.999, 0, 0], [14699.999, 1, 0], [14799.999, 3, 0], [14999.999, 3, 0], [15199.999, 0, 0], [15399.999, 0, 0], [15600, 2, 0, 2]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[15999.999, 2, 0], [16199.999, 3, 0], [16299.999, 1, 0], [16400, 0, 0], [16600, 0, 0], [16800, 2, 0], [17000, 3, 0], [17200, 1, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[17600, 1, 0], [17800, 0, 0], [17900, 1, 0], [18000, 3, 0], [18200, 3, 0], [18400, 0, 0], [18600, 0, 0], [18800, 4, 0], [19000, 7, 0], [18800, 2, 0, 2]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[19200, 2, 0], [19400, 3, 0], [19500, 1, 0], [19600, 3, 0], [20000, 3, 0], [20300, 3, 0], [20600, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[20800, 2, 0], [21000, 0, 0], [21100, 1, 0], [21200, 3, 0], [21600, 3, 0], [21900, 1, 0], [22000, 3, 0], [22200, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[22400, 2, 0], [22600, 3, 0], [22700, 1, 0], [22800, 3, 0], [23200, 3, 0], [23500, 3, 0], [23800, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[24000, 2, 0], [24200, 0, 0], [24300, 1, 0], [24400, 3, 0], [24800, 1, 0], [25200, 2, 0], [25200, 4, 0], [25400, 2, 0], [25400, 7, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[25600, 2, 0], [25799.998, 3, 0], [25899.998, 1, 0], [25999.998, 3, 0], [26399.998, 3, 0], [26699.998, 3, 0], [26999.998, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[27199.998, 2, 0], [27399.998, 0, 0], [27499.998, 1, 0], [27599.998, 3, 0], [27999.998, 3, 0], [28299.998, 1, 0], [28399.998, 3, 0], [28599.998, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[28799.998, 2, 0], [28999.998, 3, 0], [29099.998, 1, 0], [29199.998, 3, 0], [29599.998, 3, 0], [29899.998, 3, 0], [30199.998, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[30399.998, 2, 0], [30599.998, 0, 0], [30699.998, 1, 0], [30799.998, 3, 0], [31199.998, 1, 0], [31599.998, 2, 0], [31599.998, 7, 0], [31799.998, 2, 0], [31799.998, 5, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[31999.998, 0, 0], [32199.998, 1, 0], [32399.998, 3, 0], [32800, 3, 0], [33200, 2, 0], [33400, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[33600, 1, 0], [33800, 3, 0], [34000, 3, 0], [34400, 2, 0], [34800, 0, 0], [35000, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[35200, 0, 0], [35400, 1, 0], [35600, 3, 0], [36000, 3, 0], [36400, 2, 0], [36600, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[36800, 1, 0], [37000, 3, 0], [37200, 3, 0], [37600, 2, 0], [38000, 0, 0], [38200, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[38400, 2, 0], [38600, 3, 0], [38700, 1, 0], [38800, 0, 0], [39000, 0, 0], [39200, 2, 0], [39400, 3, 0], [39600, 1, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[40000, 1, 0], [40200, 0, 0], [40300, 1, 0], [40400, 3, 0], [40600, 3, 0], [40800, 0, 0], [41000, 0, 0], [41200, 2, 0, 2]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[41600, 2, 0], [41800, 3, 0], [41900, 1, 0], [42000, 0, 0], [42200, 0, 0], [42400, 2, 0], [42600, 3, 0], [42800, 1, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[43200, 1, 0], [43400, 0, 0], [43500, 1, 0], [43600, 3, 0], [43800, 3, 0], [44000, 0, 0], [44200, 0, 0], [44400, 4, 0], [44600, 7, 0], [44400, 2, 0, 2]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[44800, 2, 0], [45000, 3, 0], [45100, 1, 0], [45200, 3, 0], [45500, 3, 0], [45600, 3, 0], [45900, 3, 0], [46200, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[46400, 2, 0], [46600, 0, 0], [46700, 1, 0], [46800, 3, 0], [47100, 3, 0], [47200, 1, 0], [47400, 0, 0], [47500, 2, 0], [47600, 3, 0], [47800, 3, 0], [47900, 1, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[48000, 2, 0], [48200, 3, 0], [48300, 1, 0], [48400, 3, 0], [48800, 3, 0], [49100, 3, 0], [49400, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[49600, 2, 0], [49800, 0, 0], [49900, 1, 0], [50000, 3, 0], [50400, 3, 0], [50800, 4, 0], [51000, 7, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[51200, 2, 0], [51399.9961, 3, 0], [51499.9961, 1, 0], [51599.9961, 3, 0], [51899.9961, 3, 0], [51999.9961, 3, 0], [52299.9961, 3, 0], [52599.9961, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[52799.9961, 2, 0], [52999.9961, 0, 0], [53099.9961, 1, 0], [53199.9961, 3, 0], [53499.9961, 3, 0], [53599.9961, 1, 0], [53799.9961, 0, 0], [53899.9961, 2, 0], [53999.9961, 3, 0], [54199.9961, 3, 0], [54299.9961, 1, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[54399.9961, 2, 0], [54599.9961, 3, 0], [54699.9961, 1, 0], [54799.9961, 3, 0], [55199.9961, 3, 0], [55499.9961, 3, 0], [55799.9961, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[55999.9961, 2, 0], [56199.9961, 0, 0], [56299.9961, 1, 0], [56399.9961, 3, 0], [56799.9961, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[57599.9961, 2, 300], [57999.9961, 3, 300], [58399.9961, 1, 300], [58799.9961, 2, 300]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[59199.9961, 2, 100], [59399.9961, 3, 100], [59599.9961, 0, 300], [59999.9961, 1, 300], [60399.9961, 2, 300]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[60799.9961, 1, 0], [61199.9961, 1, 0], [61399.9961, 3, 0], [61799.9961, 3, 0], [61999.9961, 0, 0], [62199.9961, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[62399.9961, 1, 0], [62799.9961, 1, 0], [62999.9961, 3, 0], [63399.9961, 3, 0], [63599.9961, 0, 0], [63799.9961, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[63999.9961, 2, 300], [64399.9961, 3, 300], [64799.9961, 1, 300], [65199.9961, 2, 300]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[65600, 2, 100], [65800, 3, 100], [66000, 0, 300], [66400, 1, 300], [66800, 2, 300]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[67200, 1, 0], [67600, 1, 0], [67800, 3, 0], [68200, 3, 0], [68400, 0, 0], [68600, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[68800, 4, 300], [68800, 1, 0], [69200, 5, 300], [69200, 1, 0], [69400, 3, 0], [69600, 7, 300], [69800, 3, 0], [70000, 5, 300], [70000, 0, 0], [70200, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[70400, 2, 0], [70600, 2, 0], [70800, 3, 0], [71000, 2, 0], [71400, 3, 0], [71600, 1, 0], [71800, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[72000, 2, 0], [72200, 2, 0], [72400, 3, 0], [72600, 2, 0], [73000, 3, 0], [73200, 1, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[73600, 2, 0], [73800, 2, 0], [74000, 3, 0], [74200, 2, 0], [74600, 3, 0], [74800, 1, 0], [75000, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[75200, 2, 0], [75200, 4, 300], [75400, 2, 0], [75600, 3, 0], [75600, 5, 300], [75800, 2, 0], [76000, 7, 300], [76200, 3, 0], [76400, 1, 0], [76400, 5, 300]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[76800, 2, 0], [77000, 2, 0], [77200, 3, 0], [77400, 2, 0], [77800, 3, 0], [78000, 1, 0], [78200, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[78400, 2, 0], [78600, 2, 0], [78800, 3, 0], [79000, 2, 0], [79400, 3, 0], [79600, 1, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[80000, 2, 0], [80200, 2, 0], [80400, 3, 0], [80600, 2, 0], [81000, 3, 0], [81200, 1, 0], [81400, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[81600, 2, 0], [81600, 4, 300], [81800, 2, 0], [82000, 3, 0], [82000, 5, 300], [82200, 2, 0], [82400, 7, 300], [82600, 3, 0], [82800, 1, 0], [82800, 5, 300]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[83200, 2, 0], [83400, 2, 0], [83600, 3, 0], [83800, 2, 0], [84200, 3, 0], [84400, 1, 0], [84600, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[84800, 2, 0], [85000, 2, 0], [85200, 3, 0], [85400, 2, 0], [85800, 3, 0], [86000, 1, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[86400, 2, 0], [86600, 2, 0], [86800, 3, 0], [87000, 2, 0], [87400, 3, 0], [87600, 1, 0], [87800, 3, 0]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[88000, 2, 0], [88000, 4, 300], [88200, 2, 0], [88400, 3, 0], [88400, 5, 300], [88600, 2, 0], [88800, 7, 300], [89000, 3, 0], [89200, 1, 0], [89200, 5, 300]], "lengthInSteps": 16, "mustHitSection": false }, { "sectionNotes": [[89600, 2, 0], [89800, 2, 0], [90000, 3, 0], [90200, 2, 0], [90600, 3, 0], [90800, 1, 0], [91000, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[91200, 2, 0], [91400, 2, 0], [91600, 3, 0], [91800, 2, 0], [92200, 3, 0], [92400, 1, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[92800, 2, 0], [93000, 2, 0], [93200, 3, 0], [93400, 2, 0], [93800, 3, 0], [94000, 1, 0], [94200, 3, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [[94400, 2, 0], [94600, 2, 0], [94800, 3, 0], [95000, 2, 0], [95400, 3, 0], [95600, 1, 0]], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [], "lengthInSteps": 16, "mustHitSection": true }, { "sectionNotes": [], "lengthInSteps": 16, "mustHitSection": true }, { "lengthInSteps": 16, "altAnim": false, "typeOfSection": 0, "sectionNotes": [], "bpm": 150, "changeBPM": false, "mustHitSection": true }], "player2": "spooky", "song": "Spookeez", "validScore": true, "needsVoices": true, "speed": 2.4, "bpm": 150 } }),
      },
      South: {
        name: "South",
        player: Characters.Boyfriend,
        opponent: Characters.SkidandPump,
        background: {
          spriteName: "Background_2",
          scale: 3,
          offset: [0, 0],
        },
        offset: 100,
        Vocals: "assets/South_Voices.mp3",
        Inst: "assets/South_Inst.mp3",
        songLength: 103,
        speed: 2,
        camEFX: false,
        song: Translate({ "song": { "song": "South", "bpm": 165.0, "needsVoices": true, "player1": "bf", "player2": "spooky", "speed": 2.2, "notes": [{ "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[11636.3633, 3, 0.0], [12000.0, 3, 0.0], [12363.6367, 0, 0.0], [12545.4541, 3, 0.0], [12727.2725, 2, 0.0], [12909.0908, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[13090.9092, 0, 0.0], [13454.5449, 1, 0.0], [13818.1816, 3, 0.0], [14000.0, 3, 0.0], [14181.8184, 3, 181.818176]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[14545.4541, 3, 0.0], [14909.0908, 3, 0.0], [15272.7275, 3, 0.0], [15454.5449, 2, 0.0], [15636.3633, 0, 0.0], [15818.1816, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[16000.0, 0, 0.0], [16363.6357, 0, 0.0], [16727.2734, 2, 0.0], [17090.9082, 0, 0.0], [17272.7266, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[17454.5449, 3, 0.0], [17818.1816, 3, 0.0], [18181.8184, 0, 0.0], [18363.6367, 3, 0.0], [18545.4551, 2, 0.0], [18727.2734, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[18909.09, 0, 0.0], [19272.7266, 1, 0.0], [19636.3633, 3, 0.0], [19818.1816, 3, 0.0], [20000.0, 3, 181.818176]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[20363.6367, 3, 0.0], [20727.2734, 3, 0.0], [21090.9082, 3, 0.0], [21272.7266, 2, 0.0], [21454.5449, 0, 0.0], [21636.3633, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[21818.1816, 0, 0.0], [22181.8184, 0, 0.0], [22545.4551, 2, 0.0], [22909.09, 0, 0.0], [23090.9082, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[23272.7266, 2, 0.0], [23454.5449, 1, 0.0], [23636.3633, 0, 0.0], [23818.1816, 0, 0.0], [23909.09, 3, 0.0], [24000.0, 2, 0.0], [24181.8184, 0, 0.0], [24363.6367, 2, 0.0], [24545.4551, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[24727.2734, 2, 0.0], [25090.9082, 2, 0.0], [25454.5449, 2, 0.0], [25636.3633, 1, 0.0], [25818.1816, 0, 0.0], [26000.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[26181.8184, 0, 0.0], [26545.4551, 0, 0.0], [26727.2734, 0, 0.0], [26818.1816, 2, 0.0], [26909.09, 3, 0.0], [27090.9082, 0, 0.0], [27272.7266, 1, 0.0], [27454.5449, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[27636.3633, 2, 0.0], [28000.0, 2, 0.0], [28363.6367, 2, 0.0], [28545.4551, 3, 0.0], [28727.2715, 0, 0.0], [28909.09, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[29090.9082, 2, 0.0], [29272.7266, 1, 0.0], [29454.5449, 0, 0.0], [29636.3633, 0, 0.0], [29727.2715, 3, 0.0], [29818.1816, 2, 0.0], [30000.0, 0, 0.0], [30181.8184, 2, 0.0], [30363.6367, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[30545.4551, 2, 0.0], [30909.09, 2, 0.0], [31272.7266, 2, 0.0], [31454.5449, 1, 0.0], [31636.3633, 0, 0.0], [31818.1816, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[32000.0, 0, 0.0], [32363.6367, 0, 0.0], [32545.4551, 0, 0.0], [32636.3633, 2, 0.0], [32727.2715, 3, 0.0], [32909.09, 0, 0.0], [33090.91, 1, 0.0], [33272.7266, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[33454.5469, 2, 0.0], [33818.18, 2, 0.0], [34181.8164, 2, 0.0], [34363.6367, 3, 0.0], [34545.4531, 0, 0.0], [34727.2734, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[34909.09, 2, 0.0], [35090.91, 3, 0.0], [35272.7266, 0, 0.0], [35454.5469, 2, 0.0], [35636.3633, 3, 0.0], [35818.18, 0, 0.0], [36000.0, 2, 0.0], [36181.8164, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[36363.6367, 0, 0.0], [36545.4531, 2, 0.0], [36727.2734, 3, 0.0], [36909.09, 0, 0.0], [37090.91, 0, 0.0], [37272.7266, 3, 0.0], [37454.5469, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[37818.18, 2, 0.0], [38000.0, 3, 0.0], [38181.8164, 0, 0.0], [38363.6367, 2, 0.0], [38545.4531, 3, 0.0], [38727.2734, 0, 0.0], [38909.09, 2, 0.0], [39090.91, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[39272.7266, 0, 0.0], [39454.5469, 1, 0.0], [39545.4531, 1, 0.0], [39636.3633, 3, 0.0], [39818.18, 0, 0.0], [40000.0, 3, 0.0], [40181.8164, 0, 0.0], [40363.6367, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[40727.2734, 2, 0.0], [40909.09, 3, 0.0], [41090.91, 0, 0.0], [41272.7266, 2, 0.0], [41454.5469, 3, 0.0], [41636.3633, 0, 0.0], [41818.18, 2, 0.0], [42000.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[42181.8164, 0, 0.0], [42363.6367, 2, 0.0], [42545.4531, 3, 0.0], [42727.2734, 0, 0.0], [42909.09, 0, 0.0], [43090.91, 3, 0.0], [43272.7266, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[43636.3633, 2, 0.0], [43818.18, 3, 0.0], [44000.0, 0, 0.0], [44181.8164, 2, 0.0], [44363.6367, 3, 0.0], [44545.4531, 0, 0.0], [44727.2734, 2, 0.0], [44909.09, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[45090.91, 0, 0.0], [45272.7266, 1, 0.0], [45363.6367, 1, 0.0], [45454.5469, 3, 0.0], [45636.3633, 0, 0.0], [45818.18, 3, 0.0], [46000.0, 0, 0.0], [46181.8164, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[46545.4531, 0, 0.0], [46818.18, 3, 0.0], [46909.09, 1, 0.0], [47090.91, 0, 0.0], [47272.7266, 3, 0.0], [47454.5469, 1, 0.0], [47636.3633, 2, 0.0], [47818.18, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[48000.0, 0, 0.0], [48181.8164, 2, 0.0], [48363.6367, 3, 0.0], [48545.4531, 0, 0.0], [48727.2734, 3, 0.0], [48909.09, 2, 0.0], [49090.91, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[49454.5469, 0, 0.0], [49545.4531, 3, 0.0], [49636.3633, 2, 0.0], [49818.18, 3, 0.0], [50000.0, 0, 0.0], [50181.8164, 2, 0.0], [50363.6367, 3, 0.0], [50545.4531, 0, 0.0], [50636.3633, 3, 0.0], [50727.2734, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[50909.09, 1, 0.0], [51090.91, 1, 0.0], [51181.8164, 1, 0.0], [51272.7266, 0, 0.0], [51454.5469, 3, 0.0], [51636.3633, 2, 0.0], [51818.18, 3, 0.0], [52000.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[52363.6367, 0, 0.0], [52636.3633, 3, 0.0], [52727.2734, 1, 0.0], [52909.09, 0, 0.0], [53090.91, 3, 0.0], [53272.7266, 1, 0.0], [53454.5469, 2, 0.0], [53636.3633, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[53818.18, 0, 0.0], [54000.0, 2, 0.0], [54181.8164, 3, 0.0], [54363.6367, 0, 0.0], [54545.4531, 3, 0.0], [54727.2734, 2, 0.0], [54909.09, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[55272.7266, 0, 0.0], [55363.6367, 3, 0.0], [55454.5469, 2, 0.0], [55636.3633, 3, 0.0], [55818.18, 0, 0.0], [56000.0, 2, 0.0], [56181.8164, 3, 0.0], [56363.6367, 0, 0.0], [56454.543, 3, 0.0], [56545.4531, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[56727.2734, 1, 0.0], [56909.09, 1, 0.0], [57000.0, 1, 0.0], [57090.91, 0, 0.0], [57272.7266, 3, 0.0], [57454.543, 4, 0.0], [57454.543, 2, 0.0], [57636.3633, 3, 0.0], [57636.3633, 7, 0.0], [57818.18, 0, 0.0], [57818.18, 5, 0.0], [58000.0, 7, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[58181.8164, 3, 0.0], [58545.4531, 3, 0.0], [58727.2734, 1, 0.0], [58909.09, 2, 0.0], [59090.91, 0, 0.0], [59272.7266, 1, 0.0], [59454.543, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[59636.3633, 0, 272.727264], [60000.0, 2, 0.0], [60363.6367, 2, 0.0], [60545.4531, 2, 0.0], [60727.2734, 2, 181.818176]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[61090.91, 2, 0.0], [61454.543, 2, 0.0], [61636.3633, 3, 0.0], [61818.18, 1, 0.0], [62000.0, 0, 0.0], [62181.8164, 3, 0.0], [62363.6367, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[62545.4531, 0, 0.0], [62909.09, 0, 0.0], [63272.7266, 2, 0.0], [63272.7266, 4, 0.0], [63454.543, 7, 0.0], [63636.3633, 0, 0.0], [63636.3633, 5, 0.0], [63818.18, 3, 0.0], [63818.18, 7, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[64000.0, 3, 0.0], [64363.6367, 3, 0.0], [64545.4531, 1, 0.0], [64727.2734, 2, 0.0], [64909.09, 0, 0.0], [65090.91, 1, 0.0], [65272.7266, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[65454.543, 0, 272.727264], [65818.18, 2, 0.0], [66181.82, 2, 0.0], [66363.63, 2, 0.0], [66545.45, 2, 181.818176]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[66909.09, 2, 0.0], [67272.73, 2, 0.0], [67454.55, 3, 0.0], [67636.36, 1, 0.0], [67818.18, 0, 0.0], [68000.0, 3, 0.0], [68181.82, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[68363.63, 0, 0.0], [68727.27, 0, 0.0], [69090.91, 2, 0.0], [69454.55, 0, 0.0], [69636.36, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[69818.18, 2, 0.0], [70000.0, 3, 0.0], [70181.82, 0, 0.0], [70363.63, 3, 0.0], [70454.55, 2, 0.0], [70545.45, 0, 0.0], [70727.27, 3, 0.0], [70909.09, 2, 0.0], [71090.91, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[71272.73, 2, 0.0], [71636.36, 2, 0.0], [71818.18, 0, 0.0], [72000.0, 2, 0.0], [72181.82, 3, 0.0], [72363.63, 0, 0.0], [72545.45, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[72727.27, 0, 0.0], [73090.91, 0, 0.0], [73272.73, 0, 0.0], [73363.63, 3, 0.0], [73454.55, 2, 0.0], [73636.36, 3, 0.0], [73818.18, 2, 0.0], [74000.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[74181.82, 2, 0.0], [74363.63, 3, 0.0], [74545.45, 2, 0.0], [74727.27, 0, 0.0], [74909.09, 1, 0.0], [75090.91, 3, 0.0], [75272.73, 0, 0.0], [75454.55, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[75636.36, 2, 0.0], [75818.18, 3, 0.0], [76000.0, 0, 0.0], [76181.82, 3, 0.0], [76272.73, 2, 0.0], [76363.63, 0, 0.0], [76545.45, 3, 0.0], [76727.27, 2, 0.0], [76909.09, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[77090.91, 2, 0.0], [77454.55, 2, 0.0], [77636.36, 0, 0.0], [77818.18, 2, 0.0], [78000.0, 3, 0.0], [78181.82, 0, 0.0], [78363.63, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[78545.45, 0, 0.0], [78909.09, 0, 0.0], [79090.91, 0, 0.0], [79181.82, 3, 0.0], [79272.73, 2, 0.0], [79454.55, 3, 0.0], [79636.36, 2, 0.0], [79818.18, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[80000.0, 2, 0.0], [80181.82, 3, 0.0], [80363.63, 2, 0.0], [80545.45, 0, 0.0], [80727.27, 1, 0.0], [80909.09, 3, 0.0], [81090.91, 0, 0.0], [81272.73, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }] }, "generatedBy": "SNIFF ver.6" }),
      },
      Pico: {
        name: "Pico",
        player: Characters.Boyfriend,
        opponent: Characters.Pico,
        background: {
          spriteName: "Background_3",
          scale: 3,
          offset: [0, 0],
        },
        offset: 100,
        Vocals: "assets/Pico_Voices.mp3",
        Inst: "assets/Pico_Inst.mp3",
        songLength: 86,
        speed: 2,
        camEFX: false,
        song: Translate({ "song": { "song": "Pico", "bpm": 150.0, "needsVoices": true, "player1": "bf", "player2": "pico", "speed": 1.6, "notes": [{ "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[3799.99976, 2, 0.0], [3999.99976, 3, 0.0], [4200.0, 2, 0.0], [4600.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[5000.0, 0, 0.0], [5400.0, 2, 0.0], [5600.0, 3, 0.0], [5800.0, 2, 0.0], [6200.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[6999.99951, 2, 0.0], [7199.99951, 3, 0.0], [7399.99951, 2, 0.0], [7799.99951, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[8200.0, 0, 0.0], [8600.0, 2, 0.0], [8800.0, 3, 0.0], [9000.0, 2, 0.0], [9400.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[10200.0, 2, 0.0], [10400.0, 3, 0.0], [10600.0, 2, 0.0], [11000.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[11400.0, 0, 0.0], [11800.0, 2, 0.0], [12000.0, 3, 0.0], [12200.0, 2, 0.0], [12600.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[13399.999, 2, 0.0], [13599.999, 3, 0.0], [13799.999, 2, 0.0], [14199.999, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[14599.999, 0, 0.0], [14999.999, 2, 0.0], [15199.999, 3, 0.0], [15399.999, 2, 0.0], [15799.999, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[16199.999, 2, 0.0], [16400.0, 3, 0.0], [16600.0, 0, 0.0], [16800.0, 3, 0.0], [17000.0, 0, 0.0], [17200.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[17800.0, 3, 0.0], [18000.0, 0, 0.0], [18200.0, 2, 0.0], [18400.0, 3, 0.0], [18600.0, 0, 0.0], [18800.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[19400.0, 3, 0.0], [19600.0, 0, 0.0], [19800.0, 3, 0.0], [20000.0, 2, 0.0], [20200.0, 0, 0.0], [20400.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[21000.0, 2, 0.0], [21200.0, 3, 0.0], [21400.0, 0, 0.0], [21600.0, 3, 0.0], [21800.0, 0, 0.0], [22000.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[22600.0, 2, 0.0], [22800.0, 3, 0.0], [23000.0, 0, 0.0], [23200.0, 3, 0.0], [23400.0, 0, 0.0], [23600.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[24200.0, 3, 0.0], [24400.0, 0, 0.0], [24600.0, 2, 0.0], [24800.0, 3, 0.0], [25000.0, 0, 0.0], [25200.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[25799.998, 3, 0.0], [25999.998, 0, 0.0], [26199.998, 3, 0.0], [26399.998, 2, 0.0], [26599.998, 0, 0.0], [26799.998, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[27399.998, 2, 0.0], [27599.998, 3, 0.0], [27799.998, 0, 0.0], [27999.998, 3, 0.0], [28199.998, 0, 0.0], [28399.998, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[28999.998, 0, 0.0], [29199.998, 3, 0.0], [29399.998, 2, 0.0], [29599.998, 2, 0.0], [29799.998, 3, 0.0], [29999.998, 1, 0.0], [30199.998, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[30399.998, 2, 0.0], [30599.998, 3, 0.0], [30699.998, 0, 0.0], [30799.998, 3, 0.0], [30999.998, 2, 0.0], [31199.998, 0, 300.0], [31599.998, 1, 200.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[32199.998, 3, 0.0], [32399.998, 1, 0.0], [32599.998, 2, 0.0], [32800.0, 3, 0.0], [33000.0, 1, 0.0], [33200.0, 2, 0.0], [33400.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[33600.0, 0, 0.0], [33800.0, 0, 0.0], [34000.0, 3, 0.0], [34200.0, 3, 0.0], [34400.0, 2, 300.0], [34800.0, 1, 300.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[35400.0, 0, 0.0], [35600.0, 3, 0.0], [35800.0, 2, 0.0], [36000.0, 2, 0.0], [36200.0, 3, 0.0], [36400.0, 1, 0.0], [36600.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[36800.0, 2, 0.0], [37000.0, 3, 0.0], [37100.0, 0, 0.0], [37200.0, 3, 0.0], [37400.0, 2, 0.0], [37600.0, 0, 300.0], [38000.0, 1, 200.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[38400.0, 2, 0.0], [38600.0, 3, 0.0], [38800.0, 1, 0.0], [39000.0, 2, 0.0], [39200.0, 3, 0.0], [39400.0, 1, 0.0], [39600.0, 2, 0.0], [39800.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[40000.0, 0, 0.0], [40200.0, 0, 0.0], [40400.0, 3, 0.0], [40600.0, 3, 0.0], [40800.0, 2, 300.0], [41200.0, 1, 300.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[41800.0, 2, 0.0], [42000.0, 3, 0.0], [42200.0, 0, 0.0], [42400.0, 3, 0.0], [42600.0, 0, 0.0], [42700.0, 3, 0.0], [42800.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[43400.0, 2, 0.0], [43600.0, 0, 0.0], [43800.0, 3, 0.0], [44000.0, 3, 0.0], [44200.0, 0, 0.0], [44300.0, 3, 0.0], [44400.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[45000.0, 3, 0.0], [45200.0, 0, 0.0], [45400.0, 0, 0.0], [45600.0, 2, 0.0], [45800.0, 0, 0.0], [45900.0, 3, 0.0], [46000.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[46600.0, 2, 0.0], [46800.0, 3, 0.0], [47000.0, 0, 0.0], [47200.0, 3, 0.0], [47400.0, 0, 0.0], [47500.0, 3, 0.0], [47600.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[48200.0, 2, 0.0], [48400.0, 3, 0.0], [48600.0, 0, 0.0], [48800.0, 3, 0.0], [49000.0, 0, 0.0], [49100.0, 3, 0.0], [49200.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[49800.0, 2, 0.0], [50000.0, 0, 0.0], [50200.0, 3, 0.0], [50400.0, 3, 0.0], [50600.0, 0, 0.0], [50700.0, 3, 0.0], [50800.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[51399.9961, 3, 0.0], [51599.9961, 0, 0.0], [51799.9961, 0, 0.0], [51999.9961, 2, 0.0], [52199.9961, 0, 0.0], [52299.9961, 3, 0.0], [52399.9961, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[52999.9961, 2, 0.0], [53199.9961, 3, 0.0], [53399.9961, 0, 0.0], [53599.9961, 3, 0.0], [53799.9961, 0, 0.0], [53899.9961, 3, 0.0], [53999.9961, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[54399.9961, 6, 200.0], [54599.9961, 2, 0.0], [54799.9961, 3, 0.0], [54999.9961, 0, 0.0], [54999.9961, 7, 0.0], [55199.9961, 3, 0.0], [55199.9961, 5, 0.0], [55399.9961, 0, 0.0], [55499.9961, 3, 0.0], [55599.9961, 1, 0.0], [55599.9961, 7, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[55999.9961, 0, 0.0], [56199.9961, 6, 0.0], [56199.9961, 2, 0.0], [56399.9961, 0, 0.0], [56399.9961, 4, 0.0], [56599.9961, 7, 0.0], [56599.9961, 3, 0.0], [56799.9961, 7, 0.0], [56799.9961, 1, 200.0], [56999.9961, 4, 0.0], [57099.9961, 7, 0.0], [57199.9961, 5, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[57599.9961, 6, 200.0], [57799.9961, 3, 0.0], [57999.9961, 0, 0.0], [58199.9961, 0, 0.0], [58199.9961, 7, 0.0], [58399.9961, 2, 0.0], [58399.9961, 5, 0.0], [58599.9961, 0, 0.0], [58699.9961, 3, 0.0], [58799.9961, 1, 0.0], [58799.9961, 7, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[59199.9961, 4, 0.0], [59399.9961, 2, 0.0], [59399.9961, 6, 0.0], [59599.9961, 4, 0.0], [59599.9961, 3, 0.0], [59799.9961, 0, 0.0], [59799.9961, 7, 0.0], [59999.9961, 6, 0.0], [59999.9961, 3, 0.0], [60199.9961, 6, 0.0], [60199.9961, 0, 0.0], [60299.9961, 3, 0.0], [60399.9961, 4, 0.0], [60399.9961, 1, 0.0], [60599.9961, 4, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[60999.9961, 2, 0.0], [61199.9961, 3, 0.0], [61399.9961, 0, 0.0], [61599.9961, 3, 0.0], [61799.9961, 0, 0.0], [61899.9961, 3, 0.0], [61999.9961, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[62599.9961, 2, 0.0], [62799.9961, 0, 0.0], [62999.9961, 3, 0.0], [63199.9961, 3, 0.0], [63399.9961, 0, 0.0], [63499.9961, 3, 0.0], [63599.9961, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[64199.9961, 3, 0.0], [64399.9961, 0, 0.0], [64599.9961, 0, 0.0], [64799.9961, 2, 0.0], [64999.9961, 0, 0.0], [65099.9961, 3, 0.0], [65199.9961, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[65800.0, 2, 0.0], [66000.0, 3, 0.0], [66200.0, 0, 0.0], [66400.0, 3, 0.0], [66600.0, 0, 0.0], [66700.0, 3, 0.0], [66800.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[67400.0, 0, 0.0], [67600.0, 3, 0.0], [67800.0, 2, 0.0], [68000.0, 2, 0.0], [68200.0, 3, 0.0], [68400.0, 1, 0.0], [68600.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[68800.0, 2, 0.0], [69000.0, 3, 0.0], [69100.0, 0, 0.0], [69200.0, 3, 0.0], [69400.0, 2, 0.0], [69600.0, 0, 300.0], [70000.0, 1, 200.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[70600.0, 3, 0.0], [70800.0, 1, 0.0], [71000.0, 2, 0.0], [71200.0, 3, 0.0], [71400.0, 1, 0.0], [71600.0, 2, 0.0], [71800.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[72000.0, 0, 0.0], [72200.0, 0, 0.0], [72400.0, 3, 0.0], [72600.0, 3, 0.0], [72800.0, 2, 300.0], [73200.0, 1, 300.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[73800.0, 0, 0.0], [74000.0, 3, 0.0], [74200.0, 2, 0.0], [74400.0, 2, 0.0], [74600.0, 3, 0.0], [74800.0, 1, 0.0], [75000.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[75200.0, 2, 0.0], [75400.0, 3, 0.0], [75500.0, 0, 0.0], [75600.0, 3, 0.0], [75800.0, 2, 0.0], [76000.0, 0, 300.0], [76400.0, 1, 200.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[76800.0, 2, 0.0], [77000.0, 3, 0.0], [77200.0, 1, 0.0], [77400.0, 2, 0.0], [77600.0, 3, 0.0], [77800.0, 1, 0.0], [78000.0, 2, 0.0], [78200.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[78400.0, 0, 0.0], [78600.0, 0, 0.0], [78800.0, 3, 0.0], [79000.0, 3, 0.0], [79200.0, 2, 300.0], [79600.0, 1, 300.0]] }] }, "generatedBy": "SNIFF ver.6" }),
      },
      Philly: {
        name: "Philly",
        player: Characters.Boyfriend,
        opponent: Characters.Pico,
        background: {
          spriteName: "Background_3",
          scale: 3,
          offset: [0, 0],
        },
        offset: 100,
        Vocals: "assets/Philly_Voices.mp3",
        Inst: "assets/Philly_Inst.mp3",
        songLength: 104,
        speed: 2.25,
        camEFX: false,
        song: Translate({ "song": { "song": "Philly Nice", "bpm": 175.0, "needsVoices": true, "player1": "bf", "player2": "pico", "speed": 2.0, "notes": [{ "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[2914.28564, 2, 0.0], [3085.71436, 0, 0.0], [3428.57129, 1, 257.142853], [3771.42847, 3, 171.428574]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[4285.71436, 2, 0.0], [4457.14258, 0, 0.0], [4800.0, 1, 257.142853], [5142.857, 3, 171.428574]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[5657.14258, 2, 0.0], [5828.57129, 0, 0.0], [6171.42871, 1, 257.142853], [6514.28564, 3, 171.428574]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[6857.14258, 0, 0.0], [7028.57129, 3, 0.0], [7200.0, 2, 0.0], [7542.857, 2, 0.0], [7885.71436, 0, 0.0], [8057.14258, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[8400.0, 2, 0.0], [8571.429, 0, 0.0], [8914.285, 1, 257.142853], [9257.143, 3, 171.428574]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[9771.429, 2, 0.0], [9942.857, 0, 0.0], [10285.7139, 1, 257.142853], [10628.5713, 3, 171.428574]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[11142.8574, 2, 0.0], [11314.2852, 0, 0.0], [11657.1426, 1, 257.142853], [12000.0, 3, 171.428574]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[12342.8574, 0, 0.0], [12514.2852, 3, 0.0], [12685.7139, 2, 0.0], [13028.5713, 2, 0.0], [13371.4287, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[13885.7139, 2, 0.0], [14057.1426, 0, 0.0], [14400.0, 0, 0.0], [14742.8574, 3, 0.0], [14914.2852, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[15257.1426, 3, 0.0], [15428.5713, 0, 0.0], [15771.4287, 2, 0.0], [16114.2852, 0, 0.0], [16285.7139, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[16628.57, 0, 0.0], [16800.0, 1, 0.0], [16971.4277, 3, 0.0], [17142.8574, 1, 0.0], [17314.2852, 0, 0.0], [17485.7148, 1, 0.0], [17657.1426, 3, 0.0], [17742.8574, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[17828.57, 3, 0.0], [18000.0, 3, 0.0], [18171.4277, 1, 0.0], [18514.2852, 2, 0.0], [18857.1426, 2, 0.0], [19028.57, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[19371.4277, 2, 0.0], [19542.8574, 0, 0.0], [19885.7148, 0, 0.0], [20228.57, 3, 0.0], [20400.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[20742.8574, 3, 0.0], [20914.2852, 0, 0.0], [21257.1426, 2, 0.0], [21600.0, 0, 0.0], [21771.4277, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[22114.2852, 0, 0.0], [22285.7148, 1, 0.0], [22457.1426, 3, 0.0], [22628.57, 1, 0.0], [22800.0, 0, 0.0], [22971.4277, 1, 0.0], [23142.8574, 3, 0.0], [23228.57, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[23314.2852, 3, 0.0], [23485.7148, 3, 0.0], [23657.1426, 1, 0.0], [24000.0, 2, 0.0], [24342.8574, 2, 0.0], [24514.2852, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[24685.7148, 2, 0.0], [24857.1426, 2, 0.0], [25028.57, 0, 0.0], [25371.4277, 0, 0.0], [25714.2852, 3, 0.0], [25885.7148, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[26228.57, 3, 0.0], [26400.0, 0, 0.0], [26742.8574, 2, 0.0], [27085.7148, 0, 0.0], [27257.1426, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[27600.0, 0, 0.0], [27771.4277, 1, 0.0], [27942.8574, 3, 0.0], [28114.2852, 1, 0.0], [28285.7148, 0, 0.0], [28457.1426, 1, 0.0], [28628.57, 3, 0.0], [28714.2852, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[28800.0, 3, 0.0], [28971.4277, 3, 0.0], [29142.8574, 1, 0.0], [29485.7148, 2, 0.0], [29828.57, 2, 0.0], [30000.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[30171.4277, 2, 0.0], [30342.8574, 2, 0.0], [30514.2852, 0, 0.0], [30857.1426, 0, 0.0], [31200.0, 3, 0.0], [31371.4277, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[31714.2852, 3, 0.0], [31885.7148, 0, 0.0], [32228.57, 2, 0.0], [32571.4277, 0, 0.0], [32742.8574, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[33085.7148, 0, 0.0], [33257.14, 1, 0.0], [33428.57, 3, 0.0], [33600.0, 1, 0.0], [33771.43, 0, 0.0], [33942.8555, 1, 0.0], [34114.2852, 3, 0.0], [34200.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[34285.7148, 3, 0.0], [34457.14, 3, 0.0], [34628.57, 1, 0.0], [34971.43, 2, 0.0], [35314.2852, 2, 0.0], [35485.7148, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[35657.14, 2, 0.0], [35828.57, 3, 0.0], [36000.0, 1, 0.0], [36171.43, 0, 0.0], [36342.8555, 2, 0.0], [36514.2852, 3, 0.0], [36685.7148, 0, 0.0], [36857.14, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[37028.57, 2, 0.0], [37200.0, 3, 0.0], [37371.43, 2, 0.0], [37542.8555, 0, 0.0], [37714.2852, 2, 0.0], [37885.7148, 3, 0.0], [38057.14, 0, 0.0], [38228.57, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[38400.0, 2, 0.0], [38571.43, 3, 0.0], [38742.8555, 1, 0.0], [38914.2852, 0, 0.0], [39085.7148, 2, 0.0], [39257.14, 3, 0.0], [39428.57, 0, 0.0], [39600.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[39771.43, 2, 0.0], [39942.8555, 3, 0.0], [40114.2852, 2, 0.0], [40285.7148, 0, 0.0], [40457.14, 2, 0.0], [40628.57, 3, 0.0], [40800.0, 0, 0.0], [40971.43, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[41142.8555, 2, 0.0], [41314.2852, 3, 0.0], [41485.7148, 1, 0.0], [41657.14, 0, 0.0], [41828.57, 2, 0.0], [42000.0, 3, 0.0], [42171.43, 0, 0.0], [42342.8555, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[42514.2852, 2, 0.0], [42685.7148, 3, 0.0], [42857.14, 2, 0.0], [43028.57, 0, 0.0], [43200.0, 2, 0.0], [43371.43, 3, 0.0], [43542.8555, 0, 0.0], [43714.2852, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[43885.7148, 2, 0.0], [44057.14, 3, 0.0], [44228.57, 1, 0.0], [44400.0, 0, 0.0], [44571.43, 2, 0.0], [44742.8555, 3, 0.0], [44914.2852, 0, 0.0], [45085.7148, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[45257.14, 2, 0.0], [45428.57, 3, 0.0], [45600.0, 2, 0.0], [45771.43, 0, 0.0], [45942.8555, 2, 0.0], [46114.2852, 3, 0.0], [46285.7148, 0, 0.0], [46457.14, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[46628.57, 2, 0.0], [46800.0, 3, 0.0], [46971.43, 1, 0.0], [47142.8555, 0, 0.0], [47314.2852, 2, 0.0], [47485.7148, 3, 0.0], [47657.14, 0, 0.0], [47828.57, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[48000.0, 2, 0.0], [48171.43, 3, 0.0], [48342.8555, 2, 0.0], [48514.2852, 0, 0.0], [48685.7148, 2, 0.0], [48857.14, 3, 0.0], [49028.57, 0, 0.0], [49200.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[49371.43, 2, 0.0], [49542.8555, 3, 0.0], [49714.2852, 1, 0.0], [49885.7148, 0, 0.0], [50057.14, 2, 0.0], [50228.57, 3, 0.0], [50400.0, 0, 0.0], [50571.43, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[50742.8555, 2, 0.0], [50914.2852, 3, 0.0], [51085.7148, 2, 0.0], [51257.14, 0, 0.0], [51428.57, 2, 0.0], [51600.0, 3, 0.0], [51771.43, 0, 0.0], [51942.8555, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[52114.2852, 2, 0.0], [52285.7148, 3, 0.0], [52457.14, 1, 0.0], [52628.57, 0, 0.0], [52800.0, 2, 0.0], [52971.43, 3, 0.0], [53142.8555, 0, 0.0], [53314.2852, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[53485.7148, 2, 0.0], [53657.14, 3, 0.0], [53828.57, 2, 0.0], [54000.0, 0, 0.0], [54171.43, 2, 0.0], [54342.8555, 3, 0.0], [54514.2852, 0, 0.0], [54685.7148, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[54857.14, 2, 0.0], [55028.57, 3, 0.0], [55200.0, 1, 0.0], [55371.43, 0, 0.0], [55542.8555, 2, 0.0], [55714.2852, 3, 0.0], [55885.7148, 0, 0.0], [56057.14, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[56228.57, 2, 0.0], [56400.0, 3, 0.0], [56571.43, 2, 0.0], [56742.8555, 0, 0.0], [56914.2852, 2, 0.0], [57085.7148, 3, 0.0], [57257.14, 0, 0.0], [57428.57, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[57600.0, 3, 0.0], [57771.43, 3, 0.0], [57942.8555, 1, 0.0], [58114.2852, 1, 0.0], [58285.7148, 2, 0.0], [58457.14, 2, 0.0], [58800.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[58971.43, 2, 0.0], [59142.8555, 3, 0.0], [59228.57, 0, 0.0], [59314.2852, 3, 0.0], [59485.7148, 3, 0.0], [59657.14, 2, 0.0], [59828.57, 0, 0.0], [60000.0, 0, 0.0], [60171.43, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[60342.8555, 3, 0.0], [60514.2852, 3, 0.0], [60600.0, 0, 0.0], [60685.7148, 3, 0.0], [60857.14, 1, 0.0], [61028.57, 2, 0.0], [61200.0, 2, 0.0], [61371.43, 0, 0.0], [61542.8555, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[61714.2852, 2, 0.0], [61885.7148, 3, 0.0], [62057.14, 0, 0.0], [62228.57, 3, 0.0], [62400.0, 2, 0.0], [62742.8555, 1, 0.0], [62914.2852, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[63085.7148, 3, 0.0], [63257.14, 3, 0.0], [63428.57, 1, 0.0], [63600.0, 1, 0.0], [63771.43, 2, 0.0], [63942.8555, 2, 0.0], [64285.7148, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[64457.14, 2, 0.0], [64628.57, 3, 0.0], [64714.2852, 0, 0.0], [64800.0, 3, 0.0], [64971.43, 3, 0.0], [65142.8555, 2, 0.0], [65314.2852, 0, 0.0], [65485.7148, 0, 0.0], [65657.14, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[65828.57, 3, 0.0], [66000.0, 3, 0.0], [66085.71, 0, 0.0], [66171.43, 3, 0.0], [66342.86, 1, 0.0], [66514.28, 2, 0.0], [66685.71, 2, 0.0], [66857.14, 0, 0.0], [67028.57, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[67200.0, 2, 0.0], [67371.43, 3, 0.0], [67542.86, 0, 0.0], [67714.28, 3, 0.0], [67885.71, 2, 0.0], [68228.57, 1, 0.0], [68400.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[68571.43, 2, 0.0], [68914.28, 1, 0.0], [69085.71, 3, 0.0], [69257.14, 2, 0.0], [69600.0, 1, 0.0], [69771.43, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[69942.86, 0, 0.0], [70114.28, 3, 0.0], [70285.71, 1, 0.0], [70457.14, 3, 0.0], [70628.57, 2, 0.0], [70971.43, 2, 0.0], [71142.86, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[71314.28, 3, 0.0], [71485.71, 1, 0.0], [71657.14, 0, 0.0], [71828.57, 3, 0.0], [72000.0, 2, 0.0], [72342.86, 0, 0.0], [72514.28, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[72685.71, 3, 0.0], [72857.14, 3, 0.0], [73028.57, 2, 0.0], [73200.0, 0, 0.0], [73371.43, 2, 0.0], [73542.86, 3, 0.0], [73714.28, 0, 0.0], [73885.71, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[74057.14, 2, 0.0], [74400.0, 1, 0.0], [74571.43, 3, 0.0], [74742.86, 2, 0.0], [75085.71, 1, 0.0], [75257.14, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[75428.57, 0, 0.0], [75600.0, 3, 0.0], [75771.43, 1, 0.0], [75942.86, 3, 0.0], [76114.28, 2, 0.0], [76457.14, 2, 0.0], [76628.57, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[76800.0, 3, 0.0], [76971.43, 1, 0.0], [77142.86, 0, 0.0], [77314.28, 3, 0.0], [77485.71, 2, 0.0], [77828.57, 0, 0.0], [78000.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[78171.43, 3, 0.0], [78342.86, 3, 0.0], [78514.28, 2, 0.0], [78685.71, 0, 0.0], [78857.14, 2, 0.0], [79028.57, 3, 0.0], [79200.0, 0, 0.0], [79371.43, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[79542.86, 2, 0.0], [79714.28, 3, 0.0], [79885.71, 1, 0.0], [80057.14, 0, 0.0], [80228.57, 2, 0.0], [80400.0, 3, 0.0], [80571.43, 0, 0.0], [80742.86, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[80914.28, 2, 0.0], [81085.71, 3, 0.0], [81257.14, 2, 0.0], [81428.57, 0, 0.0], [81600.0, 2, 0.0], [81771.43, 3, 0.0], [81942.86, 0, 0.0], [82114.28, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[82285.71, 2, 0.0], [82457.14, 3, 0.0], [82628.57, 1, 0.0], [82800.0, 0, 0.0], [82971.43, 2, 0.0], [83142.86, 3, 0.0], [83314.28, 0, 0.0], [83485.71, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[83657.14, 2, 0.0], [83828.57, 3, 0.0], [84000.0, 2, 0.0], [84171.43, 0, 0.0], [84342.86, 2, 0.0], [84514.28, 3, 0.0], [84685.71, 0, 0.0], [84857.14, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[85028.57, 2, 0.0], [85200.0, 3, 0.0], [85371.43, 1, 0.0], [85542.86, 0, 0.0], [85714.28, 2, 0.0], [85885.71, 3, 0.0], [86057.14, 0, 0.0], [86228.57, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[86400.0, 2, 0.0], [86571.43, 3, 0.0], [86742.86, 2, 0.0], [86914.28, 0, 0.0], [87085.71, 2, 0.0], [87257.14, 3, 0.0], [87428.57, 0, 0.0], [87600.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[87771.43, 2, 0.0], [87942.86, 3, 0.0], [88114.28, 1, 0.0], [88285.71, 0, 0.0], [88457.14, 2, 0.0], [88628.57, 3, 0.0], [88800.0, 0, 0.0], [88971.43, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[89142.86, 2, 0.0], [89314.28, 3, 0.0], [89485.71, 2, 0.0], [89657.14, 0, 0.0], [89828.57, 2, 0.0], [90000.0, 3, 0.0], [90171.43, 0, 0.0], [90342.86, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[90514.28, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }] }, "generatedBy": "SNIFF ver.6" }),
      },
      Blammed: {
        name: "Blammed",
        player: Characters.Boyfriend,
        opponent: Characters.Pico,
        background: {
          spriteName: "Background_3",
          scale: 3,
          offset: [0, 0],
        },
        offset: 100,
        Vocals: "assets/Blammed_Voices.mp3",
        Inst: "assets/Blammed_Inst.mp3",
        songLength: 106,
        speed: 2,
        camEFX: false,
        song: Translate({ "song": { "song": "Blammed", "bpm": 165.0, "needsVoices": true, "player1": "bf", "player2": "pico", "speed": 2.3, "notes": [{ "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[11818.1816, 1, 0.0], [12000.0, 3, 0.0], [12181.8184, 0, 0.0], [12363.6367, 0, 0.0], [12545.4541, 1, 0.0], [12727.2725, 3, 181.818176]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[13090.9092, 2, 0.0], [13272.7275, 0, 0.0], [13454.5449, 2, 0.0], [13636.3633, 3, 0.0], [13727.2725, 0, 0.0], [13818.1816, 3, 0.0], [14000.0, 3, 0.0], [14181.8184, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[14727.2725, 1, 0.0], [14909.0908, 3, 0.0], [15090.9092, 0, 0.0], [15272.7275, 0, 0.0], [15454.5449, 1, 0.0], [15636.3633, 3, 0.0], [15818.1816, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[16000.0, 3, 0.0], [16181.8184, 1, 90.90909], [16363.6357, 3, 0.0], [16545.4551, 2, 0.0], [16727.2734, 1, 90.90909], [16909.09, 3, 0.0], [17090.9082, 1, 181.818176]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[17636.3633, 1, 0.0], [17818.1816, 3, 0.0], [18000.0, 0, 0.0], [18181.8184, 0, 0.0], [18363.6367, 1, 0.0], [18545.4551, 3, 181.818176]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[18909.09, 2, 0.0], [19090.9082, 0, 0.0], [19272.7266, 2, 0.0], [19454.5449, 3, 0.0], [19545.4551, 0, 0.0], [19636.3633, 3, 0.0], [19818.1816, 3, 0.0], [20000.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[20545.4551, 1, 0.0], [20727.2734, 3, 0.0], [20909.09, 0, 0.0], [21090.9082, 0, 0.0], [21272.7266, 1, 0.0], [21454.5449, 3, 0.0], [21636.3633, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[21818.1816, 3, 0.0], [22000.0, 1, 90.90909], [22181.8184, 3, 0.0], [22363.6367, 2, 0.0], [22545.4551, 1, 90.90909], [22727.2734, 3, 0.0], [22909.09, 1, 181.818176]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[23454.5449, 2, 0.0], [23636.3633, 3, 0.0], [23818.1816, 3, 0.0], [24000.0, 2, 0.0], [24181.8184, 0, 0.0], [24363.6367, 3, 0.0], [24545.4551, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[24727.2734, 3, 0.0], [24909.09, 1, 0.0], [25090.9082, 0, 0.0], [25272.7266, 1, 0.0], [25454.5449, 2, 0.0], [25636.3633, 3, 0.0], [25818.1816, 0, 0.0], [26000.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[26363.6367, 2, 0.0], [26545.4551, 3, 0.0], [26727.2734, 3, 0.0], [26909.09, 1, 0.0], [27090.9082, 0, 0.0], [27272.7266, 3, 0.0], [27454.5449, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[27636.3633, 3, 0.0], [27818.1816, 0, 0.0], [28000.0, 1, 0.0], [28181.8184, 1, 0.0], [28363.6367, 3, 0.0], [28545.4551, 2, 0.0], [28727.2715, 0, 0.0], [28909.09, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[29272.7266, 2, 0.0], [29454.5449, 3, 0.0], [29636.3633, 3, 0.0], [29818.1816, 2, 0.0], [30000.0, 0, 0.0], [30181.8184, 3, 0.0], [30363.6367, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[30545.4551, 3, 0.0], [30727.2715, 1, 0.0], [30909.09, 0, 0.0], [31090.9082, 1, 0.0], [31272.7266, 2, 0.0], [31454.5449, 3, 0.0], [31636.3633, 0, 0.0], [31818.1816, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[32181.8184, 2, 0.0], [32363.6367, 3, 0.0], [32545.4551, 3, 0.0], [32727.2715, 1, 0.0], [32909.09, 0, 0.0], [33090.91, 3, 0.0], [33272.7266, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[33454.5469, 3, 0.0], [33636.3633, 0, 0.0], [33818.18, 1, 0.0], [34000.0, 1, 0.0], [34181.8164, 3, 0.0], [34363.6367, 2, 0.0], [34545.4531, 0, 0.0], [34727.2734, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[35090.91, 0, 0.0], [35272.7266, 2, 181.818176], [35636.3633, 3, 0.0], [35818.18, 3, 0.0], [36000.0, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[36363.6367, 2, 181.818176], [36727.2734, 3, 0.0], [37090.91, 2, 0.0], [37454.5469, 0, 0.0], [37636.3633, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[38000.0, 0, 0.0], [38181.8164, 2, 181.818176], [38545.4531, 3, 0.0], [38727.2734, 3, 0.0], [38909.09, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[39272.7266, 0, 272.727264], [39636.3633, 1, 0.0], [40000.0, 3, 0.0], [40090.91, 3, 0.0], [40181.8164, 1, 0.0], [40363.6367, 2, 0.0], [40545.4531, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[40909.09, 0, 0.0], [41090.91, 2, 181.818176], [41454.5469, 3, 0.0], [41636.3633, 3, 0.0], [41818.18, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[42181.8164, 2, 181.818176], [42545.4531, 3, 0.0], [42909.09, 2, 0.0], [43272.7266, 0, 0.0], [43454.5469, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[43818.18, 0, 0.0], [44000.0, 2, 181.818176], [44363.6367, 3, 0.0], [44545.4531, 3, 0.0], [44727.2734, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[45090.91, 0, 272.727264], [45454.5469, 1, 0.0], [45818.18, 3, 0.0], [45909.09, 3, 0.0], [46000.0, 1, 0.0], [46181.8164, 2, 0.0], [46363.6367, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[46545.4531, 0, 0.0], [46727.2734, 0, 0.0], [46909.09, 3, 0.0], [47090.91, 1, 0.0], [47181.8164, 3, 0.0], [47272.7266, 1, 0.0], [47454.5469, 0, 0.0], [47636.3633, 1, 0.0], [47818.18, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[48000.0, 2, 0.0], [48181.8164, 2, 0.0], [48363.6367, 3, 0.0], [48545.4531, 2, 0.0], [48727.2734, 1, 0.0], [48909.09, 0, 0.0], [49000.0, 1, 0.0], [49090.91, 0, 0.0], [49272.7266, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[49454.5469, 3, 0.0], [49636.3633, 3, 0.0], [49818.18, 3, 0.0], [50000.0, 2, 0.0], [50090.91, 0, 0.0], [50181.8164, 2, 0.0], [50363.6367, 0, 0.0], [50545.4531, 0, 0.0], [50727.2734, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[50909.09, 0, 0.0], [51090.91, 0, 0.0], [51272.7266, 3, 0.0], [51454.5469, 3, 0.0], [51636.3633, 2, 0.0], [51818.18, 0, 0.0], [52000.0, 2, 0.0], [52181.8164, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[52363.6367, 0, 0.0], [52545.4531, 0, 0.0], [52727.2734, 3, 0.0], [52909.09, 1, 0.0], [53000.0, 3, 0.0], [53090.91, 1, 0.0], [53272.7266, 0, 0.0], [53454.5469, 1, 0.0], [53636.3633, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[53818.18, 2, 0.0], [54000.0, 2, 0.0], [54181.8164, 3, 0.0], [54363.6367, 2, 0.0], [54545.4531, 1, 0.0], [54727.2734, 0, 0.0], [54818.18, 1, 0.0], [54909.09, 0, 0.0], [55090.91, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[55272.7266, 3, 0.0], [55454.5469, 3, 0.0], [55636.3633, 3, 0.0], [55818.18, 2, 0.0], [55909.09, 0, 0.0], [56000.0, 2, 0.0], [56181.8164, 5, 0.0], [56181.8164, 0, 0.0], [56363.6367, 4, 0.0], [56363.6367, 0, 0.0], [56545.4531, 4, 0.0], [56545.4531, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[56727.2734, 7, 0.0], [56727.2734, 0, 0.0], [56909.09, 7, 0.0], [56909.09, 0, 0.0], [57090.91, 6, 0.0], [57090.91, 3, 0.0], [57272.7266, 7, 0.0], [57272.7266, 3, 0.0], [57454.543, 6, 272.727264], [57454.543, 2, 0.0], [57636.3633, 0, 0.0], [57818.18, 7, 272.727264], [57818.18, 2, 0.0], [58000.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[58181.8164, 0, 0.0], [58363.6367, 0, 0.0], [58545.4531, 3, 0.0], [58727.2734, 1, 0.0], [58818.18, 3, 0.0], [58909.09, 1, 0.0], [59090.91, 0, 0.0], [59272.7266, 1, 0.0], [59454.543, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[59636.3633, 2, 0.0], [59818.18, 2, 0.0], [60000.0, 3, 0.0], [60181.8164, 2, 0.0], [60363.6367, 1, 0.0], [60545.4531, 0, 0.0], [60636.3633, 1, 0.0], [60727.2734, 0, 0.0], [60909.09, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[61090.91, 3, 0.0], [61272.7266, 3, 0.0], [61454.543, 3, 0.0], [61636.3633, 2, 0.0], [61727.2734, 0, 0.0], [61818.18, 2, 0.0], [62000.0, 0, 0.0], [62181.8164, 0, 0.0], [62363.6367, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[62545.4531, 2, 0.0], [62727.2734, 3, 0.0], [62909.09, 2, 0.0], [63090.91, 0, 0.0], [63272.7266, 1, 0.0], [63454.543, 0, 0.0], [63636.3633, 2, 0.0], [63818.18, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[64000.0, 0, 0.0], [64181.8164, 0, 0.0], [64363.6367, 3, 0.0], [64545.4531, 1, 0.0], [64636.3633, 3, 0.0], [64727.2734, 1, 0.0], [64909.09, 0, 0.0], [65090.91, 1, 0.0], [65272.7266, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[65454.543, 2, 0.0], [65636.36, 2, 0.0], [65818.18, 3, 0.0], [66000.0, 2, 0.0], [66181.82, 1, 0.0], [66363.63, 0, 0.0], [66454.55, 1, 0.0], [66545.45, 0, 0.0], [66727.27, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[66909.09, 3, 0.0], [67090.91, 3, 0.0], [67272.73, 3, 0.0], [67454.55, 2, 0.0], [67545.45, 0, 0.0], [67636.36, 2, 0.0], [67818.18, 0, 0.0], [68000.0, 0, 0.0], [68181.82, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[68363.63, 2, 0.0], [68545.45, 3, 0.0], [68727.27, 2, 0.0], [68909.09, 0, 0.0], [69090.91, 1, 0.0], [69272.73, 0, 0.0], [69454.55, 2, 0.0], [69636.36, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[69818.18, 5, 272.727264], [70000.0, 0, 0.0], [70181.82, 2, 181.818176], [70545.45, 3, 0.0], [70727.27, 3, 0.0], [70909.09, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[71272.73, 2, 181.818176], [71636.36, 3, 0.0], [72000.0, 2, 0.0], [72363.63, 0, 0.0], [72545.45, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[72909.09, 0, 0.0], [73090.91, 2, 181.818176], [73454.55, 3, 0.0], [73636.36, 3, 0.0], [73818.18, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[74181.82, 0, 272.727264], [74545.45, 1, 0.0], [74909.09, 3, 0.0], [75000.0, 3, 0.0], [75090.91, 1, 0.0], [75272.73, 2, 0.0], [75454.55, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[75818.18, 0, 0.0], [76000.0, 2, 181.818176], [76363.63, 3, 0.0], [76545.45, 3, 0.0], [76727.27, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[77090.91, 2, 181.818176], [77454.55, 3, 0.0], [77818.18, 2, 0.0], [78181.82, 0, 0.0], [78363.63, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[78727.27, 0, 0.0], [78909.09, 2, 181.818176], [79272.73, 3, 0.0], [79454.55, 3, 0.0], [79636.36, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[80000.0, 0, 272.727264], [80363.63, 1, 0.0], [80727.27, 3, 0.0], [80818.18, 3, 0.0], [80909.09, 1, 0.0], [81090.91, 2, 0.0], [81272.73, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[81636.36, 0, 0.0], [81727.27, 0, 0.0], [81818.18, 2, 181.818176], [82181.82, 3, 0.0], [82363.63, 3, 0.0], [82545.45, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[82909.09, 2, 181.818176], [83272.73, 3, 0.0], [83636.36, 2, 0.0], [84000.0, 0, 0.0], [84181.82, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[84545.45, 0, 0.0], [84727.27, 2, 181.818176], [85090.91, 3, 0.0], [85272.73, 3, 0.0], [85454.55, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[85818.18, 0, 272.727264], [86181.82, 1, 0.0], [86545.45, 3, 0.0], [86636.36, 3, 0.0], [86727.27, 1, 0.0], [86909.09, 2, 0.0], [87090.91, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[87454.55, 0, 0.0], [87545.45, 0, 0.0], [87636.36, 2, 181.818176], [88000.0, 3, 0.0], [88181.82, 3, 0.0], [88363.63, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[88727.27, 2, 181.818176], [89090.91, 3, 0.0], [89454.55, 2, 0.0], [89818.18, 0, 0.0], [90000.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[90363.63, 0, 0.0], [90545.45, 2, 181.818176], [90909.09, 3, 0.0], [91090.91, 3, 0.0], [91272.73, 1, 272.727264]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[91636.36, 0, 272.727264], [92000.0, 1, 0.0], [92363.63, 3, 0.0], [92454.55, 3, 0.0], [92545.45, 1, 0.0], [92727.27, 2, 0.0], [92909.09, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }] }, "generatedBy": "SNIFF ver.6" }),
      },

      High: {
        name: "High",
        player: Characters.W4_Boyfriend,
        opponent: Characters.Mother,
        background: {
          spriteName: "Background_4",
          scale: 0.8,
          offset: [0, 0],
        },
        offset: 100,
        Vocals: "assets/High_Voices.mp3",
        Inst: "assets/High_Inst.mp3",
        songLength: 103.3,
        speed: 2,
        camEFX: false,
        song: Translate({ "song": { "song": "High", "bpm": 125.0, "needsVoices": true, "player1": "bf-car", "player2": "mom-car", "speed": 2.0, "notes": [{ "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[3840.0, 0, 0.0], [4320.0, 0, 0.0], [4560.0, 3, 0.0], [4800.0, 2, 0.0], [4920.0, 0, 0.0], [5160.0, 3, 0.0], [5520.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[5760.0, 0, 0.0], [6240.0, 0, 0.0], [6480.0, 3, 0.0], [6720.0, 2, 0.0], [6840.0, 0, 0.0], [7080.0, 3, 0.0], [7440.0, 0, 0.0], [7560.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[7680.0, 0, 0.0], [8160.0, 0, 0.0], [8400.0, 3, 0.0], [8640.0, 2, 0.0], [8760.0, 3, 0.0], [9000.0, 0, 0.0], [9360.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[9600.0, 2, 0.0], [9720.0, 3, 0.0], [9840.0, 2, 0.0], [9960.0, 3, 0.0], [10080.0, 0, 0.0], [10320.0, 0, 0.0], [10440.0, 1, 0.0], [10560.0, 3, 0.0], [10800.0, 2, 0.0], [11040.0, 2, 0.0], [11160.0, 3, 0.0], [11280.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[11520.0, 0, 0.0], [12000.0, 0, 0.0], [12240.0, 3, 0.0], [12480.0, 2, 0.0], [12600.0, 0, 0.0], [12840.0, 3, 0.0], [13200.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[13440.0, 0, 0.0], [13920.0, 0, 0.0], [14160.0, 3, 0.0], [14400.0, 2, 0.0], [14520.0, 0, 0.0], [14760.0, 3, 0.0], [15120.0, 0, 0.0], [15240.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[15360.0, 0, 0.0], [15840.0, 0, 0.0], [16080.0, 3, 0.0], [16320.0, 2, 0.0], [16440.0, 3, 0.0], [16680.0, 0, 0.0], [17040.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[17280.0, 6, 360.0], [17280.0, 2, 0.0], [17400.0, 3, 0.0], [17520.0, 2, 0.0], [17640.0, 3, 0.0], [17760.0, 7, 360.0], [17760.0, 0, 0.0], [18000.0, 0, 0.0], [18120.0, 1, 0.0], [18240.0, 4, 360.0], [18240.0, 3, 0.0], [18480.0, 2, 0.0], [18720.0, 5, 360.0], [18720.0, 2, 0.0], [18840.0, 3, 0.0], [18960.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[19200.0, 2, 0.0], [19440.0, 1, 0.0], [19560.0, 0, 0.0], [19680.0, 3, 0.0], [20040.0, 1, 0.0], [20160.0, 3, 0.0], [20520.0, 3, 0.0], [20880.0, 3, 0.0], [21000.0, 2, 240.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[21360.0, 1, 0.0], [21480.0, 0, 0.0], [21600.0, 3, 0.0], [21960.0, 1, 0.0], [22080.0, 0, 0.0], [22200.0, 1, 0.0], [22440.0, 3, 0.0], [22800.0, 2, 0.0], [22920.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[23280.0, 0, 0.0], [23400.0, 2, 0.0], [23520.0, 3, 0.0], [23880.0, 3, 0.0], [24000.0, 2, 0.0], [24360.0, 2, 0.0], [24720.0, 2, 0.0], [24840.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[24960.0, 6, 360.0], [24960.0, 2, 0.0], [25080.0, 3, 0.0], [25200.0, 0, 0.0], [25440.0, 7, 360.0], [25440.0, 2, 0.0], [25680.0, 0, 0.0], [25920.0, 4, 360.0], [25920.0, 2, 0.0], [26040.0, 3, 0.0], [26160.0, 0, 0.0], [26280.0, 1, 0.0], [26400.0, 5, 360.0], [26400.0, 3, 0.0], [26520.0, 0, 0.0], [26640.0, 1, 0.0], [26760.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[26880.0, 2, 0.0], [27120.0, 1, 0.0], [27240.0, 0, 0.0], [27360.0, 3, 0.0], [27720.0, 1, 0.0], [27840.0, 3, 0.0], [28200.0, 3, 0.0], [28560.0, 3, 0.0], [28680.0, 2, 240.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[29040.0, 1, 0.0], [29160.0, 0, 0.0], [29280.0, 3, 0.0], [29640.0, 1, 0.0], [29760.0, 0, 0.0], [29880.0, 1, 0.0], [30120.0, 3, 0.0], [30480.0, 2, 0.0], [30600.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[30960.0, 0, 0.0], [31080.0, 2, 0.0], [31200.0, 3, 0.0], [31560.0, 3, 0.0], [31680.0, 2, 0.0], [32040.0, 2, 0.0], [32400.0, 2, 0.0], [32520.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[32640.0, 2, 0.0], [32760.0, 3, 0.0], [32880.0, 0, 0.0], [33120.0, 2, 0.0], [33360.0, 0, 0.0], [33600.0, 2, 0.0], [33720.0, 3, 0.0], [33840.0, 0, 0.0], [33960.0, 1, 0.0], [34080.0, 3, 0.0], [34200.0, 0, 0.0], [34320.0, 1, 0.0], [34440.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[34560.0, 0, 0.0], [34680.0, 3, 0.0], [34800.0, 2, 0.0], [34920.0, 3, 0.0], [35040.0, 1, 360.0], [35520.0, 0, 360.0], [36000.0, 3, 360.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[36480.0, 3, 0.0], [36840.0, 1, 0.0], [36960.0, 3, 0.0], [37080.0, 2, 0.0], [37200.0, 0, 0.0], [37320.0, 1, 0.0], [37440.0, 3, 240.0], [37800.0, 1, 0.0], [37920.0, 0, 240.0], [38280.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[38400.0, 2, 360.0], [38880.0, 3, 360.0], [39360.0, 0, 360.0], [39840.0, 2, 360.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[40320.0, 3, 0.0], [40440.0, 0, 0.0], [40560.0, 2, 0.0], [40680.0, 3, 0.0], [40800.0, 0, 0.0], [40920.0, 2, 0.0], [41040.0, 3, 0.0], [41160.0, 0, 0.0], [41280.0, 2, 240.0], [41640.0, 3, 0.0], [41760.0, 0, 240.0], [42120.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[42240.0, 7, 360.0], [42240.0, 0, 0.0], [42360.0, 3, 0.0], [42480.0, 2, 0.0], [42600.0, 3, 0.0], [42720.0, 5, 360.0], [42720.0, 1, 360.0], [43200.0, 7, 360.0], [43200.0, 0, 360.0], [43680.0, 4, 360.0], [43680.0, 3, 360.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[44160.0, 6, 360.0], [44160.0, 3, 0.0], [44520.0, 1, 0.0], [44640.0, 3, 0.0], [44760.0, 2, 0.0], [44880.0, 0, 0.0], [45000.0, 1, 0.0], [45120.0, 4, 240.0], [45120.0, 3, 240.0], [45480.0, 5, 0.0], [45480.0, 1, 0.0], [45600.0, 7, 240.0], [45600.0, 0, 240.0], [45960.0, 5, 0.0], [45960.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[46080.0, 6, 360.0], [46080.0, 2, 360.0], [46560.0, 7, 1440.0], [46560.0, 3, 360.0], [47040.0, 0, 360.0], [47520.0, 2, 360.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[48000.0, 3, 0.0], [48120.0, 0, 0.0], [48240.0, 2, 0.0], [48360.0, 3, 0.0], [48480.0, 0, 0.0], [48600.0, 2, 0.0], [48720.0, 3, 0.0], [48840.0, 0, 0.0], [48960.0, 2, 240.0], [49320.0, 3, 0.0], [49440.0, 0, 240.0], [49800.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[49920.0, 5, 720.0], [49920.0, 1, 600.0], [50640.0, 3, 0.0], [50880.0, 2, 0.0], [51000.0, 3, 0.0], [51240.0, 2, 0.0], [51360.0, 0, 240.0], [51720.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[51840.0, 2, 360.0], [52320.0, 1, 0.0], [52560.0, 3, 0.0], [52800.0, 2, 0.0], [52920.0, 3, 0.0], [53160.0, 2, 0.0], [53280.0, 0, 240.0], [53640.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[53760.0, 1, 360.0], [54240.0, 0, 0.0], [54480.0, 3, 0.0], [54720.0, 2, 0.0], [54840.0, 3, 0.0], [55080.0, 2, 0.0], [55200.0, 0, 240.0], [55560.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[55680.0, 0, 0.0], [55920.0, 0, 0.0], [56040.0, 3, 0.0], [56160.0, 0, 0.0], [56280.0, 3, 0.0], [56400.0, 2, 0.0], [56520.0, 0, 0.0], [56640.0, 3, 0.0], [56760.0, 1, 0.0], [56880.0, 0, 120.0], [57120.0, 1, 0.0], [57360.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[57600.0, 5, 480.0], [57600.0, 1, 600.0], [58320.0, 3, 0.0], [58560.0, 2, 0.0], [58680.0, 3, 0.0], [58920.0, 2, 0.0], [59040.0, 0, 240.0], [59400.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[59520.0, 2, 360.0], [60000.0, 1, 0.0], [60240.0, 3, 0.0], [60480.0, 2, 0.0], [60600.0, 3, 0.0], [60840.0, 2, 0.0], [60960.0, 0, 240.0], [61320.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[61440.0, 1, 360.0], [61920.0, 0, 0.0], [62160.0, 3, 0.0], [62400.0, 2, 0.0], [62520.0, 3, 0.0], [62760.0, 2, 0.0], [62880.0, 0, 240.0], [63240.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[63360.0, 0, 0.0], [63600.0, 0, 0.0], [63720.0, 3, 0.0], [63840.0, 0, 0.0], [63960.0, 3, 0.0], [64080.0, 2, 0.0], [64200.0, 0, 0.0], [64320.0, 3, 0.0], [64440.0, 1, 0.0], [64560.0, 0, 120.0], [64800.0, 1, 0.0], [65040.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[65280.0, 0, 0.0], [65280.0, 5, 480.0], [65400.0, 3, 0.0], [65520.0, 2, 0.0], [65640.0, 3, 0.0], [65760.0, 1, 360.0], [66240.0, 0, 360.0], [66720.0, 3, 360.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[67200.0, 3, 0.0], [67560.0, 1, 0.0], [67680.0, 3, 0.0], [67800.0, 2, 0.0], [67920.0, 0, 0.0], [68040.0, 1, 0.0], [68160.0, 3, 240.0], [68520.0, 1, 0.0], [68640.0, 0, 240.0], [69000.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[69120.0, 2, 360.0], [69600.0, 3, 360.0], [70080.0, 0, 360.0], [70560.0, 2, 360.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[71040.0, 3, 0.0], [71160.0, 0, 0.0], [71280.0, 2, 0.0], [71400.0, 3, 0.0], [71520.0, 0, 0.0], [71640.0, 2, 0.0], [71760.0, 3, 0.0], [71880.0, 0, 0.0], [72000.0, 2, 240.0], [72360.0, 3, 0.0], [72480.0, 0, 240.0], [72840.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[72960.0, 7, 360.0], [72960.0, 0, 0.0], [73080.0, 3, 0.0], [73200.0, 2, 0.0], [73320.0, 3, 0.0], [73440.0, 5, 360.0], [73440.0, 1, 360.0], [73920.0, 7, 360.0], [73920.0, 0, 360.0], [74400.0, 4, 360.0], [74400.0, 3, 360.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[74880.0, 6, 360.0], [74880.0, 3, 0.0], [75240.0, 1, 0.0], [75360.0, 3, 0.0], [75480.0, 2, 0.0], [75600.0, 0, 0.0], [75720.0, 1, 0.0], [75840.0, 4, 240.0], [75840.0, 3, 240.0], [76200.0, 5, 0.0], [76200.0, 1, 0.0], [76320.0, 7, 240.0], [76320.0, 0, 240.0], [76680.0, 5, 0.0], [76680.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[76800.0, 6, 360.0], [76800.0, 2, 360.0], [77280.0, 7, 1440.0], [77280.0, 3, 360.0], [77760.0, 0, 360.0], [78240.0, 2, 360.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[78720.0, 3, 0.0], [78840.0, 0, 0.0], [78960.0, 2, 0.0], [79080.0, 3, 0.0], [79200.0, 0, 0.0], [79320.0, 2, 0.0], [79440.0, 3, 0.0], [79560.0, 0, 0.0], [79680.0, 2, 240.0], [80040.0, 3, 0.0], [80160.0, 0, 240.0], [80520.0, 2, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[80640.0, 3, 960.0], [80640.0, 7, 960.0], [82080.0, 2, 360.0], [82080.0, 6, 360.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[82560.0, 1, 360.0], [82560.0, 5, 600.0], [83040.0, 1, 0.0], [83280.0, 2, 360.0], [83280.0, 6, 600.0], [83760.0, 2, 0.0], [84000.0, 3, 360.0], [84000.0, 7, 360.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[84480.0, 6, 0.0], [84480.0, 2, 360.0], [84720.0, 7, 0.0], [84840.0, 4, 0.0], [84960.0, 7, 0.0], [84960.0, 1, 360.0], [85080.0, 5, 0.0], [85200.0, 7, 0.0], [85320.0, 4, 0.0], [85440.0, 6, 0.0], [85440.0, 3, 360.0], [85560.0, 4, 0.0], [85680.0, 7, 0.0], [85800.0, 4, 0.0], [85920.0, 7, 0.0], [85920.0, 0, 360.0], [86040.0, 5, 0.0], [86160.0, 7, 0.0], [86280.0, 4, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[86400.0, 6, 0.0], [86400.0, 2, 360.0], [86640.0, 7, 0.0], [86760.0, 4, 0.0], [86880.0, 7, 0.0], [86880.0, 1, 360.0], [87000.0, 5, 0.0], [87120.0, 7, 0.0], [87240.0, 4, 0.0], [87360.0, 6, 0.0], [87360.0, 3, 360.0], [87480.0, 4, 0.0], [87600.0, 7, 0.0], [87720.0, 4, 0.0], [87840.0, 0, 0.0], [87840.0, 7, 0.0], [87960.0, 2, 0.0], [87960.0, 5, 0.0], [88080.0, 3, 0.0], [88080.0, 7, 0.0], [88200.0, 2, 0.0], [88200.0, 4, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[88320.0, 7, 960.0], [88320.0, 3, 960.0], [89760.0, 2, 360.0], [89760.0, 6, 360.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[90240.0, 5, 600.0], [90240.0, 1, 360.0], [90720.0, 1, 0.0], [90960.0, 6, 600.0], [90960.0, 2, 360.0], [91440.0, 2, 0.0], [91680.0, 7, 0.0], [91680.0, 3, 360.0], [91800.0, 5, 0.0], [91920.0, 4, 120.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[92160.0, 6, 360.0], [92160.0, 2, 0.0], [92400.0, 3, 0.0], [92520.0, 0, 0.0], [92640.0, 5, 360.0], [92640.0, 3, 0.0], [92760.0, 1, 0.0], [92880.0, 3, 0.0], [93000.0, 0, 0.0], [93120.0, 7, 360.0], [93120.0, 2, 0.0], [93240.0, 0, 0.0], [93360.0, 3, 0.0], [93480.0, 0, 0.0], [93600.0, 4, 360.0], [93600.0, 3, 0.0], [93720.0, 1, 0.0], [93840.0, 3, 0.0], [93960.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[94080.0, 6, 360.0], [94080.0, 2, 0.0], [94320.0, 3, 0.0], [94440.0, 0, 0.0], [94560.0, 5, 360.0], [94560.0, 3, 0.0], [94680.0, 1, 0.0], [94800.0, 3, 0.0], [94920.0, 0, 0.0], [95040.0, 7, 360.0], [95040.0, 2, 0.0], [95160.0, 0, 0.0], [95280.0, 3, 0.0], [95400.0, 0, 0.0], [95520.0, 4, 0.0], [95520.0, 3, 0.0], [95640.0, 6, 0.0], [95640.0, 1, 0.0], [95760.0, 7, 0.0], [95760.0, 3, 0.0], [95880.0, 6, 0.0], [95880.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[96000.0, 6, 960.0], [96000.0, 2, 960.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }] }, "generatedBy": "SNIFF ver.6" }),
      },
      MILD: {
        name: "M.I.L.D",
        player: Characters.W4_Boyfriend,
        opponent: Characters.Mother,
        background: {
          spriteName: "Background_4",
          scale: 0.8,
          offset: [0, 0],
        },
        offset: 100,
        Vocals: "assets/MILD_Voices.mp3",
        Inst: "assets/MILD_Inst.mp3",
        songLength: 124,
        speed: 2.65,
        camEFX: false,
        song: Translate({ "song": { "song": "M.I.L.D", "bpm": 180.0, "needsVoices": true, "player1": "bf-car", "player2": "mom-car", "speed": 2.6, "notes": [{ "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[2666.66675, 1, 0.0], [3000.0, 1, 0.0], [3333.3335, 1, 0.0], [3416.66675, 0, 0.0], [3500.0, 3, 0.0], [3583.3335, 2, 166.666672], [3833.3335, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[4166.667, 1, 0.0], [4500.0, 1, 0.0], [4666.667, 3, 0.0], [4833.3335, 1, 0.0], [5000.0, 0, 0.0], [5166.667, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[5333.3335, 1, 0.0], [5666.667, 1, 0.0], [6000.0, 1, 0.0], [6083.3335, 0, 0.0], [6166.667, 3, 0.0], [6250.0, 2, 166.666672], [6500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[6833.3335, 1, 0.0], [7166.667, 1, 0.0], [7333.3335, 3, 0.0], [7500.0, 1, 0.0], [7666.667, 2, 0.0], [7750.0, 3, 0.0], [7833.3335, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[8000.0, 1, 0.0], [8333.334, 1, 0.0], [8666.667, 1, 0.0], [8750.0, 0, 0.0], [8833.334, 3, 0.0], [8916.667, 2, 166.666672], [9166.667, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[9500.0, 1, 0.0], [9833.334, 1, 0.0], [10000.0, 3, 0.0], [10166.667, 1, 0.0], [10333.334, 0, 0.0], [10500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[10666.667, 1, 0.0], [11000.0, 1, 0.0], [11333.334, 1, 0.0], [11416.667, 0, 0.0], [11500.0, 3, 0.0], [11583.334, 2, 166.666672], [11833.334, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[12166.667, 1, 0.0], [12500.0, 1, 0.0], [12666.667, 3, 0.0], [12833.334, 1, 0.0], [13000.0, 2, 0.0], [13083.334, 3, 0.0], [13166.667, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[13333.334, 2, 666.6667], [14333.334, 1, 0.0], [14500.0, 1, 0.0], [14583.334, 3, 416.6667]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[15166.667, 3, 0.0], [15250.0, 2, 166.666672], [15500.0, 0, 0.0], [15833.334, 1, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[16166.667, 0, 0.0], [16250.001, 3, 0.0], [16333.334, 1, 250.0], [16666.668, 2, 250.0], [17000.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[17333.334, 3, 0.0], [17500.0, 3, 0.0], [17583.334, 2, 0.0], [17666.668, 0, 0.0], [17833.334, 1, 0.0], [18000.0, 3, 0.0], [18166.668, 2, 0.0], [18333.334, 0, 0.0], [18500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[18666.668, 2, 666.6667], [19666.668, 1, 0.0], [19833.334, 1, 0.0], [19916.668, 3, 416.6667]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[20500.0, 3, 0.0], [20583.334, 2, 166.666672], [20833.334, 0, 0.0], [21166.668, 1, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[21500.0, 0, 0.0], [21583.334, 3, 0.0], [21666.668, 1, 250.0], [22000.0, 2, 250.0], [22333.334, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[22666.668, 3, 0.0], [22833.334, 3, 0.0], [22916.668, 2, 0.0], [23000.0, 0, 0.0], [23166.668, 1, 0.0], [23333.334, 3, 0.0], [23500.0, 2, 0.0], [23666.668, 0, 0.0], [23833.334, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[24000.0, 1, 0.0], [24083.334, 3, 0.0], [24166.668, 0, 0.0], [24250.0, 3, 0.0], [24500.0, 3, 0.0], [24666.668, 1, 0.0], [24916.668, 1, 0.0], [25166.668, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[25500.0, 2, 0.0], [25666.668, 3, 83.3333359], [25833.334, 1, 0.0], [26000.0, 1, 0.0], [26250.0, 1, 0.0], [26500.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[26750.0, 1, 0.0], [26833.334, 3, 0.0], [26916.668, 0, 0.0], [27000.0, 3, 0.0], [27250.0, 3, 0.0], [27333.334, 1, 0.0], [27583.334, 1, 0.0], [27833.334, 2, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[28166.668, 2, 0.0], [28333.334, 3, 83.3333359], [28500.0, 1, 0.0], [28666.668, 0, 0.0], [28833.334, 3, 0.0], [28916.668, 1, 0.0], [29000.0, 0, 0.0], [29166.668, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[29333.334, 1, 0.0], [29333.334, 6, 333.333344], [29416.668, 3, 0.0], [29500.0, 0, 0.0], [29583.334, 3, 0.0], [29833.334, 3, 0.0], [30000.0, 1, 0.0], [30250.0, 1, 0.0], [30500.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[30833.334, 2, 0.0], [31000.0, 3, 83.3333359], [31166.668, 1, 0.0], [31333.334, 1, 0.0], [31583.334, 1, 0.0], [31833.334, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[32083.334, 1, 0.0], [32166.668, 3, 0.0], [32250.002, 0, 0.0], [32333.334, 3, 0.0], [32583.334, 3, 0.0], [32666.668, 1, 0.0], [32916.668, 1, 0.0], [33166.668, 2, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[33500.0, 2, 0.0], [33666.668, 3, 83.3333359], [33833.3359, 1, 0.0], [34000.0, 0, 0.0], [34166.668, 3, 0.0], [34250.0, 1, 0.0], [34333.3359, 0, 0.0], [34500.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[34666.668, 2, 666.6667], [35666.668, 1, 0.0], [35833.3359, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[36000.0, 0, 166.666672], [36333.3359, 1, 0.0], [36666.668, 2, 166.666672], [37000.0, 0, 0.0], [37083.3359, 3, 0.0], [37166.668, 1, 83.3333359]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[37333.3359, 2, 0.0], [37500.0, 0, 0.0], [37666.668, 3, 0.0], [37833.3359, 0, 0.0], [38000.0, 2, 0.0], [38166.668, 3, 0.0], [38333.3359, 0, 0.0], [38500.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[38666.668, 2, 0.0], [38833.3359, 3, 0.0], [39000.0, 2, 0.0], [39166.668, 0, 0.0], [39333.3359, 2, 250.0], [39666.668, 1, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[40000.0, 2, 666.6667], [41000.0, 1, 0.0], [41166.668, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[41333.3359, 0, 166.666672], [41666.668, 1, 0.0], [42000.0, 2, 166.666672], [42333.3359, 0, 0.0], [42416.668, 3, 0.0], [42500.0, 1, 83.3333359]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[42666.668, 2, 0.0], [42833.3359, 0, 0.0], [43000.0, 3, 0.0], [43166.668, 0, 0.0], [43333.3359, 2, 0.0], [43500.0, 3, 0.0], [43666.668, 0, 0.0], [43833.3359, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[44000.0, 2, 0.0], [44166.668, 3, 0.0], [44333.3359, 2, 0.0], [44500.0, 0, 0.0], [44666.668, 2, 250.0], [45000.0, 1, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[45333.3359, 2, 666.6667], [46333.3359, 1, 0.0], [46500.0, 1, 0.0], [46583.3359, 3, 416.6667]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[47166.668, 3, 0.0], [47250.0, 2, 166.666672], [47500.0, 0, 0.0], [47833.3359, 1, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[48166.668, 0, 0.0], [48250.0, 3, 0.0], [48333.3359, 1, 250.0], [48666.668, 2, 250.0], [49000.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[49333.3359, 3, 0.0], [49500.0, 2, 0.0], [49666.668, 0, 0.0], [49833.3359, 1, 0.0], [50000.0, 3, 0.0], [50166.668, 2, 0.0], [50333.3359, 0, 0.0], [50500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[50666.668, 2, 666.6667], [51666.668, 1, 0.0], [51833.3359, 1, 0.0], [51916.668, 3, 416.6667]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[52500.0, 3, 0.0], [52583.3359, 2, 166.666672], [52833.3359, 0, 0.0], [53166.668, 1, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[53500.0, 0, 0.0], [53583.3359, 3, 0.0], [53666.668, 1, 250.0], [54000.0, 2, 250.0], [54333.3359, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[54666.668, 3, 0.0], [54833.3359, 2, 0.0], [55000.0, 0, 0.0], [55166.668, 1, 0.0], [55333.3359, 3, 0.0], [55500.0, 2, 0.0], [55666.668, 0, 0.0], [55833.3359, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[56000.0, 0, 0.0], [56166.668, 1, 0.0], [56333.3359, 3, 0.0], [56500.0, 1, 0.0], [56666.668, 3, 0.0], [56833.3359, 1, 0.0], [57000.0, 0, 0.0], [57083.3359, 3, 0.0], [57166.668, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[57333.3359, 0, 0.0], [57500.0, 1, 0.0], [57666.668, 3, 0.0], [57833.3359, 1, 0.0], [58000.0, 3, 0.0], [58166.668, 1, 0.0], [58333.3359, 0, 0.0], [58416.668, 3, 0.0], [58500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[58666.668, 2, 0.0], [58750.0, 3, 0.0], [58833.3359, 1, 0.0], [59000.0, 2, 0.0], [59083.3359, 3, 0.0], [59166.668, 1, 0.0], [59333.3359, 2, 0.0], [59416.668, 3, 0.0], [59500.0, 1, 0.0], [59666.668, 2, 0.0], [59750.0, 3, 0.0], [59833.3359, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[60000.0, 2, 0.0], [60083.3359, 3, 0.0], [60166.668, 1, 0.0], [60333.3359, 2, 0.0], [60416.668, 3, 0.0], [60500.0, 1, 0.0], [60666.668, 2, 0.0], [60750.0, 3, 0.0], [60833.3359, 1, 0.0], [61000.0, 2, 0.0], [61083.3359, 3, 0.0], [61166.668, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[61333.3359, 0, 0.0], [61500.0, 1, 0.0], [61666.668, 3, 0.0], [61833.3359, 1, 0.0], [62000.0, 3, 0.0], [62166.668, 1, 0.0], [62333.3359, 0, 0.0], [62416.668, 3, 0.0], [62500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[62666.668, 0, 0.0], [62833.3359, 1, 0.0], [63000.0, 3, 0.0], [63166.668, 1, 0.0], [63333.3359, 3, 0.0], [63500.0, 1, 0.0], [63666.668, 0, 0.0], [63750.0, 3, 0.0], [63833.3359, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[64000.0, 2, 0.0], [64083.3359, 3, 0.0], [64166.668, 1, 0.0], [64333.3359, 2, 0.0], [64416.668, 3, 0.0], [64500.0039, 1, 0.0], [64666.668, 2, 0.0], [64750.0039, 3, 0.0], [64833.3359, 1, 0.0], [65000.0039, 2, 0.0], [65083.3359, 3, 0.0], [65166.668, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[65333.3359, 2, 0.0], [65416.668, 3, 0.0], [65500.0039, 1, 0.0], [65666.67, 2, 0.0], [65750.0, 3, 0.0], [65833.3359, 1, 0.0], [66000.0, 2, 0.0], [66083.3359, 3, 0.0], [66166.67, 1, 0.0], [66333.3359, 2, 0.0], [66416.67, 3, 0.0], [66500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[66666.67, 1, 0.0], [66750.0, 3, 0.0], [66833.3359, 0, 0.0], [66916.67, 3, 0.0], [67166.67, 3, 0.0], [67333.3359, 1, 0.0], [67583.3359, 1, 0.0], [67833.3359, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[68166.67, 2, 0.0], [68333.3359, 3, 83.3333359], [68500.0, 1, 0.0], [68666.67, 1, 0.0], [68916.67, 1, 0.0], [69166.67, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[69416.67, 1, 0.0], [69500.0, 3, 0.0], [69583.3359, 0, 0.0], [69666.67, 3, 0.0], [69916.67, 3, 0.0], [70000.0, 1, 0.0], [70250.0, 1, 0.0], [70500.0, 2, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[70833.3359, 2, 0.0], [71000.0, 3, 0.0], [71083.3359, 1, 0.0], [71166.67, 0, 0.0], [71333.3359, 1, 0.0], [71500.0, 3, 0.0], [71583.3359, 1, 0.0], [71666.67, 0, 0.0], [71833.3359, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[72000.0, 1, 0.0], [72000.0, 6, 333.333344], [72083.3359, 3, 0.0], [72166.67, 0, 0.0], [72250.0, 3, 0.0], [72500.0, 3, 0.0], [72666.67, 1, 0.0], [72916.67, 1, 0.0], [73166.67, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[73500.0, 2, 0.0], [73666.67, 3, 83.3333359], [73833.3359, 1, 0.0], [74000.0, 1, 0.0], [74250.0, 1, 0.0], [74500.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[74750.0, 1, 0.0], [74833.3359, 3, 0.0], [74916.67, 0, 0.0], [75000.0, 3, 0.0], [75250.0, 3, 0.0], [75333.3359, 1, 0.0], [75583.3359, 1, 0.0], [75833.3359, 2, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[76166.67, 2, 0.0], [76333.3359, 3, 0.0], [76416.67, 1, 0.0], [76500.0, 0, 0.0], [76666.67, 1, 0.0], [76833.3359, 3, 0.0], [76916.67, 1, 0.0], [77000.0, 0, 0.0], [77166.67, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[77333.3359, 6, 666.6667], [77333.3359, 2, 666.6667], [78333.3359, 4, 0.0], [78333.3359, 1, 0.0], [78500.0, 6, 0.0], [78500.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[78666.67, 6, 166.666672], [78666.67, 0, 166.666672], [79000.0, 7, 0.0], [79000.0, 1, 0.0], [79333.3359, 5, 166.666672], [79333.3359, 2, 166.666672], [79666.67, 7, 0.0], [79666.67, 0, 0.0], [79750.0, 4, 0.0], [79750.0, 3, 0.0], [79833.3359, 1, 83.3333359], [79833.3359, 5, 83.3333359]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[80000.0, 6, 0.0], [80000.0, 2, 0.0], [80166.67, 4, 0.0], [80166.67, 0, 0.0], [80333.3359, 7, 0.0], [80333.3359, 3, 0.0], [80500.0, 4, 0.0], [80500.0, 0, 0.0], [80666.67, 6, 0.0], [80666.67, 2, 0.0], [80833.3359, 7, 0.0], [80833.3359, 3, 0.0], [81000.0, 4, 0.0], [81000.0, 0, 0.0], [81166.67, 7, 0.0], [81166.67, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[81333.3359, 6, 0.0], [81333.3359, 2, 0.0], [81500.0, 7, 0.0], [81500.0, 3, 0.0], [81666.67, 6, 0.0], [81666.67, 2, 0.0], [81833.3359, 4, 0.0], [81833.3359, 0, 0.0], [82000.0, 6, 250.0], [82000.0, 2, 250.0], [82333.3359, 5, 250.0], [82333.3359, 1, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[82666.67, 6, 666.6667], [82666.67, 0, 250.0], [83000.0, 1, 250.0], [83333.3359, 3, 250.0], [83666.67, 1, 250.0], [83666.67, 5, 0.0], [83833.3359, 7, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[84000.0, 2, 250.0], [84000.0, 4, 166.666672], [84333.3359, 1, 250.0], [84333.3359, 5, 0.0], [84666.67, 3, 250.0], [84666.67, 6, 166.666672], [85000.0, 1, 250.0], [85000.0, 4, 0.0], [85083.3359, 7, 0.0], [85166.67, 5, 83.3333359]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[85333.3359, 1, 250.0], [85333.3359, 6, 0.0], [85500.0, 4, 0.0], [85666.67, 3, 250.0], [85666.67, 7, 0.0], [85833.3359, 4, 0.0], [86000.0, 0, 250.0], [86000.0, 6, 0.0], [86166.67, 7, 0.0], [86333.3359, 3, 250.0], [86333.3359, 4, 0.0], [86500.0, 7, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[86666.67, 6, 250.0], [86666.67, 2, 0.0], [86833.3359, 3, 0.0], [87000.0, 7, 250.0], [87000.0, 2, 0.0], [87166.67, 0, 0.0], [87333.3359, 6, 250.0], [87333.3359, 2, 250.0], [87666.67, 5, 250.0], [87666.67, 1, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[88000.0, 5, 0.0], [88000.0, 1, 0.0], [88333.3359, 1, 0.0], [88666.67, 1, 0.0], [88833.3359, 0, 0.0], [88916.67, 3, 0.0], [89000.0, 2, 0.0], [89166.67, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[89500.0, 1, 0.0], [89833.3359, 1, 0.0], [90166.67, 3, 0.0], [90250.0, 0, 0.0], [90333.3359, 2, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[90666.67, 1, 0.0], [91000.0, 1, 0.0], [91333.3359, 1, 0.0], [91500.0, 3, 0.0], [91583.3359, 0, 0.0], [91666.67, 2, 0.0], [91833.3359, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[92000.0, 0, 0.0], [92166.67, 1, 0.0], [92333.3359, 2, 0.0], [92500.0, 1, 0.0], [92666.67, 3, 0.0], [92833.3359, 1, 0.0], [92916.67, 2, 0.0], [93000.0, 3, 0.0], [93166.67, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[93333.3359, 1, 0.0], [93333.3359, 5, 0.0], [93666.67, 1, 0.0], [93666.67, 5, 0.0], [94000.0, 1, 0.0], [94000.0, 5, 0.0], [94166.67, 0, 0.0], [94166.67, 4, 0.0], [94250.0, 3, 0.0], [94250.0, 7, 0.0], [94333.3359, 6, 0.0], [94333.3359, 2, 0.0], [94500.0, 1, 0.0], [94500.0, 5, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[94833.3359, 1, 0.0], [94833.3359, 5, 0.0], [95166.67, 1, 0.0], [95166.67, 5, 0.0], [95500.0, 3, 0.0], [95500.0, 7, 0.0], [95583.3359, 0, 0.0], [95583.3359, 4, 0.0], [95666.67, 2, 250.0], [95666.67, 6, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[96000.0, 1, 0.0], [96000.0, 5, 0.0], [96333.3359, 1, 0.0], [96333.3359, 5, 0.0], [96666.67, 1, 0.0], [96666.67, 5, 0.0], [96833.3359, 3, 0.0], [96833.3359, 7, 0.0], [96916.67, 0, 0.0], [96916.67, 4, 0.0], [97000.0, 2, 0.0], [97000.0, 6, 0.0], [97166.67, 1, 0.0], [97166.67, 5, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[97333.3359, 0, 0.0], [97333.3359, 4, 0.0], [97500.0, 1, 0.0], [97500.0, 5, 0.0], [97666.67, 2, 0.0], [97666.67, 6, 0.0], [97833.3359, 1, 0.0], [97833.3359, 5, 0.0], [98000.0, 3, 0.0], [98000.0, 7, 0.0], [98166.67, 1, 0.0], [98166.67, 5, 0.0], [98250.0, 2, 0.0], [98250.0, 6, 0.0], [98333.3359, 3, 0.0], [98333.3359, 7, 0.0], [98500.0, 0, 0.0], [98500.0, 4, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[98666.67, 2, 666.6667], [98666.67, 6, 666.6667], [99666.67, 1, 0.0], [99833.3359, 1, 0.0], [99916.67, 3, 416.6667]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[100500.0, 3, 0.0], [100583.336, 2, 166.666672], [100833.336, 0, 0.0], [101166.672, 1, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[101500.0, 0, 0.0], [101583.336, 3, 0.0], [101666.672, 1, 250.0], [102000.0, 2, 250.0], [102333.336, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[102666.672, 3, 0.0], [102833.336, 3, 0.0], [102916.672, 2, 0.0], [103000.0, 0, 0.0], [103166.672, 1, 0.0], [103333.336, 3, 0.0], [103500.0, 2, 0.0], [103666.672, 0, 0.0], [103833.336, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[104000.0, 2, 666.6667], [104000.0, 6, 666.6667], [105000.0, 1, 0.0], [105166.672, 1, 0.0], [105250.0, 3, 333.333344]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[105833.336, 3, 0.0], [105916.672, 2, 166.666672], [106166.672, 0, 0.0], [106500.0, 1, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[106833.336, 0, 0.0], [106916.672, 3, 0.0], [107000.0, 1, 250.0], [107333.336, 2, 250.0], [107666.672, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[108000.0, 3, 0.0], [108166.672, 3, 0.0], [108250.0, 2, 0.0], [108333.336, 0, 0.0], [108500.0, 1, 0.0], [108666.672, 3, 0.0], [108833.336, 2, 0.0], [109000.0, 0, 0.0], [109166.672, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[109333.336, 1, 0.0], [109416.672, 3, 0.0], [109500.0, 0, 0.0], [109583.336, 3, 0.0], [109833.336, 3, 0.0], [110000.0, 1, 0.0], [110250.0, 1, 0.0], [110500.0, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[110833.336, 2, 0.0], [111000.0, 3, 83.3333359], [111166.672, 1, 0.0], [111333.336, 1, 0.0], [111583.336, 1, 0.0], [111833.336, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[112083.336, 1, 0.0], [112166.672, 3, 0.0], [112250.0, 0, 0.0], [112333.336, 3, 0.0], [112583.336, 3, 0.0], [112666.672, 1, 0.0], [112916.672, 1, 0.0], [113166.672, 2, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[113500.0, 2, 0.0], [113666.672, 3, 0.0], [113750.0, 1, 0.0], [113833.336, 0, 0.0], [114000.0, 1, 0.0], [114166.672, 3, 0.0], [114250.0, 1, 0.0], [114333.336, 0, 0.0], [114500.0, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[114666.672, 1, 0.0], [114666.672, 6, 333.333344], [114750.0, 3, 0.0], [114833.336, 0, 0.0], [114916.672, 3, 0.0], [115166.672, 3, 0.0], [115333.336, 1, 0.0], [115583.336, 1, 0.0], [115833.336, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[116166.672, 2, 0.0], [116333.336, 3, 83.3333359], [116500.0, 1, 0.0], [116666.672, 1, 0.0], [116916.672, 1, 0.0], [117166.672, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[117416.672, 1, 0.0], [117500.0, 3, 0.0], [117583.336, 0, 0.0], [117666.672, 3, 0.0], [117916.672, 3, 0.0], [118000.0, 1, 0.0], [118250.0, 1, 0.0], [118500.0, 2, 250.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[118833.336, 2, 0.0], [119000.0, 3, 0.0], [119083.336, 1, 0.0], [119166.672, 0, 0.0], [119333.336, 1, 0.0], [119500.0, 3, 0.0], [119583.336, 1, 0.0], [119666.672, 0, 0.0], [119833.336, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[120000.0, 2, 833.3334]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }] }, "generatedBy": "SNIFF ver.6" }),
      },
      SatinPants: {
        name: "Satin Pants",
        player: Characters.W4_Boyfriend,
        opponent: Characters.Mother,
        background: {
          spriteName: "Background_4",
          scale: 0.8,
          offset: [0, 0],
        },
        offset: 100,
        Vocals: "assets/SatinPants_Voices.mp3",
        Inst: "assets/SatinPants_Inst.mp3",
        songLength: 96,
        speed: 2.35,
        camEFX: false,
        chartOffset: 333,
        song: Translate({ "song": { "song": "Satin Pants", "bpm": 110.0, "needsVoices": true, "player1": "bf-car", "player2": "mom-car", "speed": 1.8, "notes": [{ "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[0.0, 0, 0.0], [272.727264, 0, 0.0], [545.4545, 0, 0.0], [818.181763, 0, 0.0], [954.5454, 0, 0.0], [1227.27271, 0, 0.0], [1363.63635, 0, 0.0], [1636.36353, 0, 0.0], [1909.09082, 0, 0.0], [2045.45447, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[2181.818, 3, 0.0], [2454.54541, 3, 0.0], [2727.27271, 3, 0.0], [3000.0, 3, 0.0], [3136.36353, 3, 0.0], [3409.09082, 3, 0.0], [3545.45435, 3, 0.0], [3818.18164, 3, 0.0], [4090.909, 3, 0.0], [4227.27246, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[4636.36328, 2, 0.0], [4909.091, 3, 0.0], [5181.818, 2, 0.0], [5318.18164, 3, 0.0], [5590.90869, 0, 0.0], [5863.636, 2, 0.0], [6000.0, 3, 0.0], [6272.727, 0, 0.0], [6409.091, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[6818.18164, 2, 0.0], [7090.90869, 3, 0.0], [7363.636, 2, 0.0], [7500.0, 3, 0.0], [7772.727, 0, 0.0], [8045.454, 2, 0.0], [8181.818, 3, 0.0], [8318.182, 0, 0.0], [8454.545, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[8727.272, 6, 545.4545], [9000.0, 2, 0.0], [9272.727, 3, 0.0], [9545.454, 2, 0.0], [9681.818, 3, 0.0], [9954.545, 0, 0.0], [10227.2725, 2, 0.0], [10363.6357, 3, 0.0], [10636.3633, 0, 0.0], [10772.7266, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[11181.8174, 2, 0.0], [11454.5449, 3, 0.0], [11727.2725, 2, 0.0], [11863.6357, 3, 0.0], [12136.3633, 0, 0.0], [12409.0908, 2, 0.0], [12545.4541, 3, 0.0], [12681.8174, 0, 0.0], [12818.1816, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[13090.9082, 6, 545.4545], [13363.6357, 1, 0.0], [13500.0, 1, 0.0], [13636.3633, 0, 0.0], [13909.0908, 0, 0.0], [14045.4541, 3, 0.0], [14181.8174, 2, 272.727264], [14590.9082, 3, 0.0], [14727.2725, 0, 0.0], [15000.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[15272.7266, 3, 272.727264], [15681.8174, 0, 0.0], [15954.5449, 0, 0.0], [16090.9082, 0, 0.0], [16227.2725, 0, 0.0], [16363.6357, 2, 272.727264], [16772.7266, 3, 0.0], [16909.09, 0, 0.0], [17045.4531, 1, 0.0], [17181.8184, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[17454.5449, 6, 545.4545], [17727.2715, 1, 0.0], [17863.6367, 1, 0.0], [18000.0, 0, 0.0], [18272.7266, 0, 0.0], [18409.09, 3, 0.0], [18545.4531, 2, 272.727264], [18954.5449, 3, 0.0], [19090.9082, 0, 0.0], [19363.6367, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[19636.3633, 3, 272.727264], [20045.4531, 0, 0.0], [20318.1816, 0, 0.0], [20454.5449, 0, 0.0], [20590.9082, 0, 0.0], [20727.2715, 2, 272.727264], [21136.3633, 3, 0.0], [21272.7266, 0, 0.0], [21409.09, 1, 0.0], [21545.4531, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[21818.1816, 6, 409.090881], [21818.1816, 2, 409.090881], [22363.6348, 7, 0.0], [22363.6348, 3, 0.0], [22500.0, 6, 0.0], [22500.0, 2, 0.0], [22636.3633, 7, 0.0], [22636.3633, 3, 0.0], [22772.7266, 6, 0.0], [22772.7266, 2, 0.0], [22909.09, 4, 0.0], [22909.09, 0, 0.0], [23045.4531, 5, 0.0], [23045.4531, 1, 0.0], [23181.8184, 4, 0.0], [23181.8184, 0, 0.0], [23318.1816, 5, 0.0], [23318.1816, 1, 0.0], [23454.5449, 4, 0.0], [23454.5449, 0, 0.0], [23590.9082, 7, 0.0], [23590.9082, 3, 0.0], [23727.2715, 4, 0.0], [23727.2715, 0, 0.0], [23863.6348, 7, 0.0], [23863.6348, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[24000.0, 1, 409.090881], [24000.0, 5, 409.090881], [24545.4531, 4, 0.0], [24545.4531, 0, 0.0], [24681.8184, 7, 0.0], [24681.8184, 3, 0.0], [24818.1816, 4, 0.0], [24818.1816, 0, 0.0], [24954.5449, 7, 0.0], [24954.5449, 3, 0.0], [25090.9082, 6, 136.363632], [25090.9082, 2, 136.363632], [25363.6348, 7, 0.0], [25363.6348, 3, 0.0], [25636.3633, 7, 0.0], [25636.3633, 3, 0.0], [25909.09, 5, 0.0], [25909.09, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[26181.8164, 4, 409.090881], [26181.8164, 3, 409.090881], [26727.2715, 0, 409.090881], [26727.2715, 7, 409.090881], [27272.7266, 6, 0.0], [27272.7266, 2, 0.0], [27545.4531, 6, 0.0], [27545.4531, 2, 0.0], [27681.8164, 6, 0.0], [27681.8164, 2, 0.0], [27818.1816, 7, 409.090881], [27818.1816, 0, 409.090881]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[28363.6348, 5, 409.090881], [28363.6348, 1, 409.090881], [28909.09, 7, 409.090881], [28909.09, 3, 409.090881], [29454.5449, 6, 409.090881], [29454.5449, 2, 409.090881], [30000.0, 4, 0.0], [30000.0, 0, 0.0], [30272.7266, 7, 409.090881], [30272.7266, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[30545.4531, 5, 545.4545], [30818.1816, 2, 0.0], [30954.5449, 3, 0.0], [31090.9082, 0, 0.0], [31363.6348, 1, 0.0], [31636.3633, 3, 0.0], [31772.7266, 0, 0.0], [31909.09, 3, 0.0], [32181.8164, 3, 0.0], [32318.1816, 0, 0.0], [32454.5449, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[33000.0, 1, 0.0], [33136.3633, 3, 0.0], [33272.7266, 0, 136.363632], [33545.4531, 1, 0.0], [33818.18, 2, 0.0], [33954.543, 3, 0.0], [34090.9063, 0, 0.0], [34227.2734, 0, 0.0], [34363.6367, 3, 0.0], [34500.0, 0, 0.0], [34636.3633, 0, 0.0], [34772.7266, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[34909.09, 7, 0.0], [35045.4531, 6, 0.0], [35181.8164, 2, 0.0], [35181.8164, 7, 0.0], [35318.18, 3, 0.0], [35454.543, 0, 0.0], [35727.2734, 1, 0.0], [36000.0, 3, 0.0], [36136.3633, 0, 0.0], [36272.7266, 3, 0.0], [36545.4531, 3, 0.0], [36681.8164, 0, 0.0], [36818.18, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[37363.6367, 1, 0.0], [37500.0, 3, 0.0], [37636.3633, 0, 136.363632], [37909.09, 1, 0.0], [38181.8164, 2, 0.0], [38318.18, 3, 0.0], [38454.543, 0, 0.0], [38590.9063, 0, 0.0], [38727.2734, 7, 0.0], [38727.2734, 3, 0.0], [38863.6367, 4, 0.0], [38863.6367, 0, 0.0], [39000.0, 5, 0.0], [39000.0, 0, 0.0], [39136.3633, 7, 0.0], [39136.3633, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[39272.7266, 2, 136.363632], [39272.7266, 7, 0.0], [39409.09, 6, 0.0], [39545.4531, 7, 0.0], [39545.4531, 2, 0.0], [39681.8164, 3, 0.0], [39818.18, 0, 0.0], [39954.543, 1, 0.0], [40090.9063, 3, 0.0], [40227.2734, 1, 0.0], [40363.6367, 3, 0.0], [40500.0, 0, 0.0], [40636.3633, 3, 0.0], [40772.7266, 1, 0.0], [40909.09, 3, 0.0], [41045.4531, 0, 0.0], [41181.8164, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[41454.543, 0, 0.0], [41727.27, 1, 0.0], [41863.6367, 3, 0.0], [42000.0, 0, 136.363632], [42272.7266, 1, 0.0], [42545.4531, 2, 0.0], [42681.8164, 3, 0.0], [42818.18, 0, 0.0], [42954.543, 0, 0.0], [43090.9063, 7, 0.0], [43090.9063, 3, 0.0], [43227.27, 4, 0.0], [43227.27, 0, 0.0], [43363.6367, 5, 0.0], [43363.6367, 0, 0.0], [43500.0, 7, 0.0], [43500.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[43636.3633, 2, 136.363632], [43909.09, 2, 0.0], [44045.4531, 3, 0.0], [44181.8164, 0, 0.0], [44318.18, 1, 0.0], [44454.543, 3, 0.0], [44590.9063, 1, 0.0], [44727.27, 3, 0.0], [44863.6367, 0, 0.0], [45000.0, 3, 0.0], [45136.3633, 1, 0.0], [45272.7266, 3, 0.0], [45409.09, 0, 0.0], [45545.4531, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[45818.18, 0, 0.0], [46090.9063, 1, 0.0], [46227.27, 3, 0.0], [46363.6367, 0, 136.363632], [46636.3633, 1, 0.0], [46909.09, 2, 0.0], [47045.4531, 3, 0.0], [47181.8164, 0, 0.0], [47318.18, 0, 0.0], [47454.543, 3, 0.0], [47590.9063, 0, 0.0], [47727.27, 0, 0.0], [47863.6367, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[48272.7266, 2, 0.0], [48409.09, 3, 0.0], [48545.4531, 0, 0.0], [48681.8164, 3, 0.0], [48818.18, 0, 0.0], [48954.543, 2, 0.0], [49090.9063, 3, 0.0], [49363.6367, 3, 0.0], [49636.3633, 1, 0.0], [49909.09, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[50454.543, 3, 0.0], [50590.9063, 1, 0.0], [50727.27, 0, 0.0], [50863.6367, 3, 0.0], [51000.0, 2, 0.0], [51272.7266, 0, 0.0], [51545.4531, 2, 0.0], [51818.18, 0, 0.0], [52090.9063, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[52363.6328, 6, 545.4545], [52636.3633, 2, 0.0], [52772.7266, 3, 0.0], [52909.09, 0, 0.0], [53045.4531, 3, 0.0], [53181.8164, 0, 0.0], [53318.18, 2, 0.0], [53454.543, 3, 0.0], [53727.27, 3, 0.0], [54000.0, 1, 0.0], [54272.7266, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[54818.18, 3, 0.0], [54954.543, 1, 0.0], [55090.9063, 0, 0.0], [55227.27, 3, 0.0], [55363.6328, 2, 0.0], [55636.3633, 0, 0.0], [55909.09, 2, 0.0], [56181.8164, 0, 0.0], [56454.543, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[56727.27, 6, 409.090881], [56727.27, 2, 409.090881], [57272.7266, 3, 0.0], [57272.7266, 7, 0.0], [57409.09, 2, 0.0], [57409.09, 6, 0.0], [57545.4531, 3, 0.0], [57545.4531, 7, 0.0], [57681.8164, 2, 0.0], [57681.8164, 6, 0.0], [57818.18, 0, 0.0], [57818.18, 4, 0.0], [57954.543, 1, 0.0], [57954.543, 5, 0.0], [58090.9063, 0, 0.0], [58090.9063, 4, 0.0], [58227.27, 1, 0.0], [58227.27, 5, 0.0], [58363.6328, 0, 0.0], [58363.6328, 4, 0.0], [58500.0, 3, 0.0], [58500.0, 7, 0.0], [58636.3633, 0, 0.0], [58636.3633, 4, 0.0], [58772.7266, 3, 0.0], [58772.7266, 7, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[58909.09, 1, 409.090881], [58909.09, 5, 409.090881], [59454.543, 4, 0.0], [59454.543, 0, 0.0], [59590.9063, 7, 0.0], [59590.9063, 3, 0.0], [59727.27, 4, 0.0], [59727.27, 0, 0.0], [59863.6328, 7, 0.0], [59863.6328, 3, 0.0], [60000.0, 6, 136.363632], [60000.0, 2, 136.363632], [60272.7266, 7, 0.0], [60272.7266, 3, 0.0], [60545.4531, 7, 0.0], [60545.4531, 3, 0.0], [60818.18, 5, 0.0], [60818.18, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[61090.9063, 0, 409.090881], [61090.9063, 7, 409.090881], [61636.3633, 4, 409.090881], [61636.3633, 3, 409.090881], [62181.8164, 2, 0.0], [62181.8164, 6, 0.0], [62454.543, 2, 0.0], [62454.543, 6, 0.0], [62590.9063, 2, 0.0], [62590.9063, 6, 0.0], [62727.27, 3, 409.090881], [62727.27, 4, 409.090881]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[63272.7266, 5, 409.090881], [63272.7266, 1, 409.090881], [63818.18, 7, 409.090881], [63818.18, 3, 409.090881], [64363.6328, 6, 409.090881], [64363.6328, 2, 409.090881], [64909.09, 4, 0.0], [64909.09, 0, 0.0], [65181.8164, 7, 0.0], [65181.8164, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[65454.543, 5, 545.4545], [65454.543, 2, 0.0], [65727.27, 2, 0.0], [65863.63, 3, 0.0], [66000.0, 0, 0.0], [66272.73, 1, 0.0], [66545.45, 3, 0.0], [66681.81, 0, 0.0], [66818.18, 3, 0.0], [67090.91, 3, 0.0], [67227.27, 0, 0.0], [67363.63, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[67909.0859, 1, 0.0], [68045.45, 3, 0.0], [68181.81, 0, 136.363632], [68454.55, 1, 0.0], [68727.27, 2, 0.0], [68818.18, 0, 0.0], [68909.0859, 3, 0.0], [69000.0, 0, 0.0], [69181.81, 0, 0.0], [69272.73, 3, 0.0], [69363.63, 0, 0.0], [69454.55, 3, 0.0], [69545.45, 1, 0.0], [69727.27, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[69818.18, 5, 409.090881], [70090.91, 2, 0.0], [70227.27, 3, 0.0], [70363.63, 0, 0.0], [70363.63, 7, 409.090881], [70636.36, 1, 0.0], [70909.0859, 3, 0.0], [70909.0859, 6, 409.090881], [71045.45, 0, 0.0], [71181.81, 3, 0.0], [71454.55, 3, 0.0], [71454.55, 7, 409.090881], [71590.91, 0, 0.0], [71727.27, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[72000.0, 5, 409.090881], [72272.73, 1, 0.0], [72409.0859, 3, 0.0], [72545.45, 0, 136.363632], [72545.45, 7, 409.090881], [72818.18, 1, 0.0], [73090.91, 2, 0.0], [73181.81, 0, 0.0], [73272.73, 3, 0.0], [73363.63, 0, 0.0], [73545.45, 0, 0.0], [73636.36, 3, 0.0], [73727.27, 0, 0.0], [73818.18, 3, 0.0], [73909.0859, 1, 0.0], [74090.91, 0, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[74181.81, 0, 136.363632], [74181.81, 5, 409.090881], [74454.55, 2, 0.0], [74590.91, 3, 0.0], [74727.27, 0, 0.0], [74727.27, 7, 409.090881], [74863.63, 1, 0.0], [75000.0, 3, 0.0], [75136.36, 1, 0.0], [75272.73, 3, 0.0], [75272.73, 6, 409.090881], [75409.0859, 0, 0.0], [75545.45, 3, 0.0], [75681.81, 1, 0.0], [75818.18, 3, 0.0], [75818.18, 7, 409.090881], [75954.55, 0, 0.0], [76090.91, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[76363.63, 0, 0.0], [76363.63, 5, 409.090881], [76636.36, 1, 0.0], [76772.73, 3, 0.0], [76909.0859, 0, 136.363632], [76909.0859, 7, 409.090881], [77181.81, 1, 0.0], [77454.55, 2, 0.0], [77454.55, 6, 409.090881], [77590.91, 3, 0.0], [77727.27, 0, 0.0], [77863.63, 0, 0.0], [78000.0, 3, 0.0], [78000.0, 7, 0.0], [78136.36, 0, 0.0], [78136.36, 4, 0.0], [78272.73, 0, 0.0], [78272.73, 4, 0.0], [78409.0859, 1, 0.0], [78409.0859, 5, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[78545.45, 0, 136.363632], [78818.18, 2, 0.0], [78954.55, 3, 0.0], [79090.91, 0, 0.0], [79227.27, 1, 0.0], [79363.63, 3, 0.0], [79500.0, 1, 0.0], [79636.36, 3, 0.0], [79772.73, 0, 0.0], [79909.0859, 3, 0.0], [80045.45, 1, 0.0], [80181.81, 3, 0.0], [80318.18, 0, 0.0], [80454.55, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[80727.27, 0, 0.0], [81000.0, 1, 0.0], [81136.36, 3, 0.0], [81272.73, 0, 136.363632], [81545.45, 1, 0.0], [81818.18, 2, 0.0], [81954.54, 3, 0.0], [82090.91, 0, 0.0], [82227.27, 0, 0.0], [82363.63, 3, 0.0], [82500.0, 0, 0.0], [82636.36, 0, 0.0], [82772.73, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [[82909.0859, 7, 1090.909], [83181.81, 2, 0.0], [83454.54, 3, 0.0], [83727.27, 2, 0.0], [83863.63, 3, 0.0], [84136.36, 0, 0.0], [84409.0859, 2, 0.0], [84545.45, 3, 0.0], [84818.18, 0, 0.0], [84954.54, 3, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[85363.63, 2, 0.0], [85636.36, 3, 0.0], [85909.0859, 2, 0.0], [86045.45, 3, 0.0], [86318.18, 0, 0.0], [86590.91, 2, 0.0], [86727.27, 3, 0.0], [86863.63, 0, 0.0], [87000.0, 1, 0.0]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [[87272.73, 2, 545.4545]] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }, { "lengthInSteps": 16, "mustHitSection": true, "sectionNotes": [] }] }, "generatedBy": "SNIFF ver.6" }),
      },
    };
    var song = "";
    var movingCam = false;
    var state = "LOADING";
    // var id = encodeURIComponent(getUserId());
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
    var logo = loadImage("assets/fnfIcon.png");
    lady.setAnimation("lady2");
    lady.frameDelay = 0.5;
    lady.scale = 0.85;
    var rate = World.frameRate || 30;
    var Background = 0;
    var alarm = [0, rate * 6, 0];
    var counter = 1;
    var menuSelected = 1;
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
      SubHits: 0,
      getRating: function () {
        var m = this.Misses;
        var h = this.Hits;
        var sh = this.SubHits;
        if (sh > h) {
          this.SubHits = this.Hits;
        }
        var accuracy = (((sh - m) / h) * 100).toString().substring(0, 4) + "%";
        var acc = (((sh - m) / h) * 100);
        var rating = "noob";
        if (acc >= 10 && acc <= 49 && m > 0) {
          rating = "F-"
        }
        if (acc >= 50 && acc <= 59 && m > 0) {
          rating = "F"
        }
        if (acc >= 60 && acc <= 69 && m > 0) {
          rating = "D"
        }
        if (acc >= 70 && acc <= 79 && m > 0) {
          rating = "C"
        }
        if (acc >= 80 && acc <= 89 && m > 0) {
          rating = "B"
        }
        if (acc >= 90 && acc <= 95 && m > 0) {
          rating = "A"
        }
        if (acc >= 95 && acc <= 99.9 && m > 0) {
          rating = "S"
        }
        if (m >= 2 && m < 10) {
          rating = "SDCB";
        }
        if (m === 0) {
          if (h === 0) {
            rating = "???";
          } else {
            rating = "FC";
          }
        }
        if (acc == 100 && m == 0) {
          rating = "SFC"
        }
        if (accuracy == "NaN%") {
          accuracy = "0%";
        }
        return (accuracy + " - " + rating);
      },
    };
    currentStats.Reset = function () {
      currentStats.Score = 0;
      currentStats.Misses = 0;
      currentStats.Hits = 0;
      currentStats.SubHits = 0;
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
    var menuBG = createSprite(200, 200);
    var storyMode = createSprite(200, 140);
    var freePlay = createSprite(200, 220);
    var options = createSprite(200, 305);
    var hitWindow = [
      [-55, 55, "Perfect!!", 500],
      [-135, 135, "Sick!", 300],
      [-200, 200, "Good", 150],
      [-350, 350, "Good", 50],
      [-400, 400, "Bad", 0],
      [(-500 - (notes.length * 1.15)), (500 + (notes.length * 1.15)), "Trash!", -200],
    ];
    Settings.Downscroll = false;
    loaded.variables = true;
    preloadSongs();
    var Weeks = createSprite(200, 275);
    var SelectionWeek = createSprite(200, 100);
    var storyArrowUp = createSprite(200, 245);
    var storyArrowDown = createSprite(207, 310);
    storyArrowUp.setAnimation("storyArrows");
    storyArrowDown.setAnimation("storyArrows");
    storyArrowUp.rotation = 90;
    storyArrowDown.rotation = 270;
    storyArrowUp.pause();
    storyArrowDown.pause();
    storyArrowUp.scale = 0.45;
    storyArrowDown.scale = 0.45;
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
          camera.x = 200;
          camera.y = 200;
          background("white");
          checkLoaded();
          break;
        case "MENU":
          camera.x = 200;
          camera.y = 200;
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
            playSound("assets/confirmMenu.mp3", false, function (loaded) {
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
          CamSwitches();

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
          if (Settings.FPSCounter == true) {
            text("FPS: " + (Math.round(World.frameRate)), Stay(10), StaY(20));
          }
          if (song !== undefined && typeof song === "string" && song !== "") {
            text(song, Stay(10), StaY(5));
          }
          fill("white");
          stroke("black");
          textAlign(CENTER, BOTTOM);
          textSize(20);
          text("Score: " + currentStats.Score + " | Misses: " + currentStats.Misses + " | " + currentStats.getRating(), Stay(200), StaY(385));
          break;
        case "MENU_SELECT":
          menuBG.setAnimation("menuBG");
          //menuBG.x = 200;
          //menuBG.y = 200;
          menuBG.scale = (2.2);
          menuBG.display();

          MenuSelection();
          break;
        case "FREESELECTION":
          menuBG.setAnimation("menuBG");
          menuBG.scale = (2.33);
          menuBG.display();

          if (keyWentDown(BACKSPACE)) {
            state = "MENU_SELECT";
            playSound("assets/cancelMenu.mp3");
          }

          FreeSelection();
          break;
        case "WEEKSELECTION":
          camera.x = 200;
          camera.y = 200;

          if (keyWentDown(BACKSPACE)) {
            state = "MENU_SELECT";
            playSound("assets/cancelMenu.mp3");
          }

          Weeks.display();
          SelectionWeek.display();
          storyArrowUp.display();
          storyArrowDown.display();
          WeekSelection();
          break;
        case "OPTSELECTION":
          menuBG.setAnimation("menuBG");
          menuBG.scale = (2.33);
          menuBG.display();

          if (keyWentDown(BACKSPACE)) {
            state = "MENU_SELECT";
            playSound("assets/cancelMenu.mp3");
          }

          OptionSelection();
          break;
        case "GPSELECTION":
          menuBG.setAnimation("menuBG");
          menuBG.scale = (2.33);
          menuBG.display();

          if (keyWentDown(BACKSPACE)) {
            state = "OPTSELECTION";
            playSound("assets/cancelMenu.mp3");
          }

          GameSelection();
          break;
        case "GRPSELECTION":
          menuBG.setAnimation("menuBG");
          menuBG.scale = (2.33);
          menuBG.display();

          if (keyWentDown(BACKSPACE)) {
            state = "OPTSELECTION";
            playSound("assets/cancelMenu.mp3");
          }

          GraphSelection();
          break;
        case "CTRLSELECTION":
          menuBG.setAnimation("menuBG");
          menuBG.scale = (2.33);
          menuBG.display();

          if (keyWentDown(BACKSPACE)) {
            state = "OPTSELECTION";
            playSound("assets/cancelMenu.mp3");
          }

          ControlSelection();
          break;
      }
    }
    // -----
    try { window.draw = draw; } catch (e) { }
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
