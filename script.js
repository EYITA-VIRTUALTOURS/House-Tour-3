(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 108.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EEDB248A_CFC4_2F80_41CD_3EBD35A959A6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D0057571_CFC4_2E80_41D9_AE70316D122B",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0051574_CFC4_2E80_41E0_FD61F08B238F",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D006F572_CFC4_2E80_41A3_CF7BDA73A943",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -77.46,
  "class": "PanoramaCameraPosition",
  "pitch": -3.93
 },
 "id": "panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CD2BBA_CE3C_3980_41B4_F67FCCF71F49",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CB3BBF_CE3C_3980_41CB_CB1387922BF1",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_t.jpg",
 "label": "IMG_20220427_160355_00_440",
 "id": "panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08",
 "adjacentPanoramas": [
  {
   "backwardYaw": -20.73,
   "yaw": 154,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737"
  },
  {
   "backwardYaw": -20.73,
   "yaw": -170.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737"
  },
  {
   "backwardYaw": 132.14,
   "yaw": -104.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D77C8B8C_CE44_3981_41E9_9D2CF6DF5122",
  "this.overlay_D245CE2D_CE4C_7A83_41C7_D403B1E33723",
  "this.overlay_D471B336_CE4C_6A80_41E8_47BF66A28FE8",
  "this.overlay_D2639E4D_CE4D_DA80_41AB_7EB7B233A4DC",
  "this.overlay_D414BF5B_CE4C_7A87_41E9_AC8C9B48F41D",
  "this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_tcap0"
 ]
},
{
 "id": "effect_D006F56F_CFC4_2E80_41A9_703433F7A6BE",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0055566_CFC4_2E80_41C8_0D047610A5C4",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0060576_CFC4_2E80_41E2_858539632151",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005956D_CFC4_2E80_41E6_D6311E7375E9",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0048567_CFC4_2E80_41DF_8AFF73493ECB",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0050574_CFC4_2E80_41E6_86311EC5C7FA",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D006A572_CFC4_2E80_41E7_3457571DB6DC",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CE2BB0_CE3C_3980_41D1_51C4DED0826F",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0053571_CFC4_2E80_41E9_A65C83E795BB",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0068572_CFC4_2E80_41A9_3D8E1C786CA7",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CF9BB0_CE3C_3980_41E8_63188EA718E5",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CFCBB0_CE3C_3980_4192_B5DDBDAFF8EA",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CB3BC1_CE3C_3980_41CA_F68974506EC7",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CFFBB4_CE3C_3980_41A6_001FD32CF563",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -58.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EE7B2445_CFC4_2E80_4183_439F1DE5C8DF",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CB5BBF_CE3C_3980_41B4_8811B6E216F0",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CCCBB6_CE3C_3980_41D3_8D90B308CB6E",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005E569_CFC4_2E80_41E7_461A0F05A3A9",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_t.jpg",
 "label": "IMG_20220427_155023_00_431",
 "id": "panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38",
 "adjacentPanoramas": [
  {
   "backwardYaw": -156.89,
   "yaw": -74.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DED4A907_CEC4_2680_41E0_46A75A5C23FD",
  "this.overlay_DDB642A0_CEC4_2B80_41C6_59CB5433636C",
  "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_tcap0"
 ]
},
{
 "id": "effect_D004256C_CFC4_2E80_41E1_5F4ADEC06DE0",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 146.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EECD6481_CFC4_2F80_41D9_E25ED7A2B2F2",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D0042565_CFC4_2E80_41AD_2C0DE54DDAC7",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D006F575_CFC4_2E80_41C7_198D0E483277",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005456A_CFC4_2E80_41E1_D253E5D74378",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0040564_CFC4_2E80_41CF_A2096E99B127",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1C89BC0_CE3C_3980_41D6_38C4C185B476",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CA7BBC_CE3C_3980_41E4_9484F6A01553",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005E566_CFC4_2E80_41D2_1A2835C8C21B",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CFFBB2_CE3C_3980_41E0_F1871EE0C40E",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_t.jpg",
 "label": "IMG_20220427_154854_00_430",
 "id": "panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -16.58,
   "yaw": 45.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C12E2B78_CE3D_FE91_41E3_95A32051E828",
  "this.overlay_DF611AA6_CE3C_3FB1_41C6_D54D1373D5EA",
  "this.overlay_DE8A111F_CEC4_2A8F_41D1_BC6AE0A95DD5",
  "this.overlay_DE97DC3B_CEC4_3A97_41C5_1F73EC265345",
  "this.overlay_DE200451_CEC4_EA92_41BB_2E456CB56152",
  "this.panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_tcap0"
 ]
},
{
 "id": "effect_D1D1DBAC_CE3C_3980_41DA_4D1B0C30219C",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1C83BC0_CE3C_3980_415E_A503C0FC04E0",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CE4BAE_CE3C_3980_415C_364CA95B396E",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_t.jpg",
 "label": "IMG_20220427_160237_00_438",
 "id": "panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C",
 "adjacentPanoramas": [
  {
   "backwardYaw": -122.47,
   "yaw": -71.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D9888EBD_CEC4_7B80_41BE_B715AC5038AC",
  "this.overlay_D91D6616_CEC4_2A80_41A0_AC2E605E0C33",
  "this.panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_tcap0"
 ]
},
{
 "id": "effect_D005A573_CFC4_2E80_41E5_470CD6294AF4",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CCFBB3_CE3C_3980_41E3_0FADE948A275",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D006C56E_CFC4_2E80_41E0_7B7616D2EB3E",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0059566_CFC4_2E80_41E0_8E6125C0488A",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CFEBB0_CE3C_3980_41C0_C98BDE702AC8",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 137.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1E4D51A_CFC4_2E80_41E8_D8DF4BE36DE6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D005D570_CFC4_2E80_41DD_71CF7AD457DF",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CEFBAD_CE3C_3980_41E3_AB2E931BC66F",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0049567_CFC4_2E80_41DB_60DDDBA095FC",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CBEBBD_CE3C_3980_41C7_A1F7EECEB43E",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005B56A_CFC4_2E80_41E2_5DF50FF0F0ED",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D0060573_CFC4_2E80_41D2_6326AC32A19C",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D006856F_CFC4_2E80_41DF_4FF4BD5E145F",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D004B567_CFC4_2E80_41B2_4FD7B38BFD00",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CA8BBC_CE3C_3980_41BB_9DD4CA3B86B8",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005156A_CFC4_2E80_41E8_E4202F1BC482",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EEAEA46C_CFC4_2E80_41D2_5185C431B278",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D0050571_CFC4_2E80_41CA_173FDE7241CF",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CB7BBF_CE3C_3980_41D1_CB4945EB33E5",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005A570_CFC4_2E80_41E4_7E42904FDA3E",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CDDBB6_CE3C_3980_41DE_BAD4BE767E6C",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0045568_CFC4_2E80_41D2_D8BEB5D3363D",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1D14BAD_CE3C_3980_41D7_A4C02DF6250A",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CB0BC1_CE3C_3980_41E7_2412551EED97",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CE0BAE_CE3C_3980_41BB_01DA9D4D819B",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0052574_CFC4_2E80_41B3_C884D860188C",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_t.jpg",
 "label": "IMG_20220427_160122_00_437",
 "id": "panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF",
 "adjacentPanoramas": [
  {
   "backwardYaw": -42.83,
   "yaw": 94.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D9BE012D_CEC4_2680_4190_99F039A61DC2",
  "this.overlay_D739A58A_CEC4_2980_41E2_908B23319E2F",
  "this.panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D005B56D_CFC4_2E80_41DB_E5EEAAC2721D",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CF1BB3_CE3C_3980_41D4_7D22DDFD018D",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0054566_CFC4_2E80_41DF_484B7F4FBCCA",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005C56C_CFC4_2E80_41B9_14FD55585B57",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CFBBB2_CE3C_3980_41E9_D1AC45BD6B0D",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0041568_CFC4_2E80_41B4_C936F97D4C7C",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CF0BB4_CE3C_3980_41BC_20A9C596259A",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1C86BC0_CE3C_3980_41DC_CC705AF93788",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005156E_CFC4_2E80_41D1_31D4DC9095E4",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0051571_CFC4_2E80_41DB_C0334A3AA65B",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 62.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EE87344E_CFC4_2E80_41D8_739739B256DC",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D0052571_CFC4_2E80_41E2_507B20B834CE",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0055574_CFC4_2E80_41D1_A5520221845C",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "yaw": -159.6,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -159.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0.23
 },
 "id": "panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": 0.23,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetStereographicFactor": 0
  }
 ],
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D004356C_CFC4_2E80_41CF_4E6F1394AA10",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_t.jpg",
 "label": "IMG_20220427_154744_00_429",
 "id": "panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199",
 "adjacentPanoramas": [
  {
   "backwardYaw": -143.45,
   "yaw": 121.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793"
  },
  {
   "backwardYaw": 45.97,
   "yaw": -16.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C0240F4B_CE7C_D6F7_416C_BFEBA9C2F4BB",
  "this.overlay_C10006D4_CE7C_3792_41DF_F7578C8FFDB2",
  "this.overlay_C0C69303_CE7C_2E76_41E2_33E029D6575B",
  "this.overlay_D9048569_CEDC_2E80_41E2_E92601A948CC",
  "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_tcap0"
 ]
},
{
 "id": "effect_D1CEFBAC_CE3C_3980_41C0_1251F4996EE8",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1C8FBBE_CE3C_3980_41E4_9C4A741F7C80",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005556A_CFC4_2E80_41A6_D01FD59998C0",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 57.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1F9B54E_CFC4_2E80_41C1_A1AA7EAE48F1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D005C569_CFC4_2E80_41C7_829FBEF59E0A",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0041564_CFC4_2E80_41D2_496B91D32FE0",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CC7BB7_CE3C_3980_41CF_F21AFEF18BC8",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0064575_CFC4_2E80_41E0_59910AEC0783",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 75.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1EF753A_CFC4_2E80_41D3_5A5B66174E90",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D0054571_CFC4_2E80_41C4_79C0C533C485",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0042569_CFC4_2E80_41E3_FD2F4F613B71",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -47.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EEBE9477_CFC4_2E80_41E1_238D2B0DAD80",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CB6BBD_CE3C_3980_41D7_1BF6A3BC5D02",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005F565_CFC4_2E80_41CB_712651CF888C",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CCABB7_CE3C_3980_41E8_04F3251F8811",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CD4BB8_CE3C_3980_41E0_AAF9097F6222",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0059569_CFC4_2E80_41C4_93203A29B0AD",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D004556B_CFC4_2E80_41BD_75290B956A95",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005656A_CFC4_2E80_41E8_7B238A6043F6",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0067573_CFC4_2E80_41E4_EE5931538BC6",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_t.jpg",
 "label": "IMG_20220427_154505_00_428",
 "id": "panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793",
 "adjacentPanoramas": [
  {
   "backwardYaw": 121.84,
   "yaw": -143.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199"
  },
  {
   "backwardYaw": 121.84,
   "yaw": 166.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C043846D_CE5C_2AB3_41B7_DFE8756E284E",
  "this.overlay_C050A39D_CE5D_ED93_41E1_3D498A52A756",
  "this.overlay_C0095878_CE44_3A91_41DC_A6A6B63B1CDD",
  "this.panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0"
 ]
},
{
 "id": "effect_D1CC7BB5_CE3C_3980_41D0_E2087CA4AC90",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CCABB3_CE3C_3980_41A5_B3FA69536D1C",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005C570_CFC4_2E80_41E0_7562A96B2934",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005556D_CFC4_2E80_41D9_A8A0697E176C",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005856D_CFC4_2E80_4171_F230A77AF634",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1D1FBAA_CE3C_3980_41D4_48406C02893B",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1C8EBC0_CE3C_3980_41C5_0DBB298F14D8",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 75.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EEEB7494_CFC4_2F80_41E7_80D127FCEFE0",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CE4BB1_CE3C_3980_41C3_4FAD1274A160",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D006E572_CFC4_2E80_41A8_0F3683B41C09",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CAABBA_CE3C_3980_41AF_4FC17A5CB54E",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0053574_CFC4_2E80_41B0_2A205E583A79",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0046564_CFC4_2E80_41E6_FAA874976D6B",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005356E_CFC4_2E80_41E8_5A6D47D0A055",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CEABAE_CE3C_3980_41E0_CAB8B3D88CD8",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0061573_CFC4_2E80_41D7_B1EC6A7A9707",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005756A_CFC4_2E80_41D3_496503623D5C",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D004E567_CFC4_2E80_41D6_AECC58A3BCEE",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0063576_CFC4_2E80_41C2_5405B9361433",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 36.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1FF3557_CFC4_2E80_41DA_612ED55D2ECD",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D0068575_CFC4_2E80_41C7_731866DB3A5E",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CDCBB9_CE3C_3980_41D5_F95A12F0134A",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CC4BB5_CE3C_3980_41D4_94E69B3D3C67",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0043568_CFC4_2E80_41D7_95382698321B",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -85.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1E71524_CFC4_2E80_41E3_5D2871A053F2",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_t.jpg",
 "label": "IMG_20220427_155742_00_434",
 "id": "panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0",
 "adjacentPanoramas": [
  {
   "backwardYaw": -117.45,
   "yaw": 95.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D6CA8517_CEC4_2E80_41E2_605FA9FC9C5C",
  "this.overlay_D7E05C1F_CEDC_3E80_41A1_64720410C0A2",
  "this.panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EE65B430_CFC4_2E80_41D0_6A3EFE689545",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D005356B_CFC4_2E80_41DB_D7BCC69EF1A3",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CA0BBE_CE3C_3980_41D6_F8B06B0944A7",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CE1BB2_CE3C_3980_41E7_D609F2FB5673",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 163.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EE93D459_CFC4_2E80_41D8_0CBCF317E479",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D005F570_CFC4_2E80_41D1_9E73BA1A4B7D",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CC2BB9_CE3C_3980_41B1_3B5B5C1EA4FB",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CFEBAE_CE3C_3980_41E3_E51C2E6D97C4",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D004456B_CFC4_2E80_41C8_B5C8F872B6AF",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CD7BBB_CE3C_3980_41E3_093F6FCE4196",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005456E_CFC4_2E80_41D5_83840A213B4C",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -84.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1EAA52F_CFC4_2E80_41E1_1BEE19F34862",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D0061576_CFC4_2E80_41E1_CF12910968FD",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "media": "this.panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D1D1FBAA_CE3C_3980_41D4_48406C02893B, 'showEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1D17BAB_CE3C_3980_41DE_8C8E0ADC4F6F, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1D12BAB_CE3C_3980_41DB_AF50D88D877B, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CEDBAC_CE3C_3980_41A4_F84BCC76F7C1, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CEFBAC_CE3C_3980_41C0_1251F4996EE8, 'hideEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CE9BAC_CE3C_3980_41A9_22F766A562D2, 'hideEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CEBBAC_CE3C_3980_41D7_037403584E9B, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1D1DBAC_CE3C_3980_41DA_4D1B0C30219C, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D1D1FBAA_CE3C_3980_41D4_48406C02893B, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D0046564_CFC4_2E80_41E6_FAA874976D6B, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D0041564_CFC4_2E80_41D2_496B91D32FE0, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1D17BAB_CE3C_3980_41DE_8C8E0ADC4F6F, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D0040564_CFC4_2E80_41CF_A2096E99B127, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1D12BAB_CE3C_3980_41DB_AF50D88D877B, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D0043565_CFC4_2E80_41E9_38DB971FFD74, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CEDBAC_CE3C_3980_41A4_F84BCC76F7C1, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D0042565_CFC4_2E80_41AD_2C0DE54DDAC7, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CEFBAC_CE3C_3980_41C0_1251F4996EE8, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D005D565_CFC4_2E80_41CB_8A3A56CDC5C5, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CE9BAC_CE3C_3980_41A9_22F766A562D2, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D005C565_CFC4_2E80_41D7_3CB65FB85C85, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CEBBAC_CE3C_3980_41D7_037403584E9B, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D005F565_CFC4_2E80_41CB_712651CF888C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1D1DBAC_CE3C_3980_41DA_4D1B0C30219C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1D18BAD_CE3C_3980_41E7_89CA380685D1, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D1D14BAD_CE3C_3980_41D7_A4C02DF6250A, 'showEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1D16BAD_CE3C_3980_41A2_4A118E1FB31E, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1D11BAD_CE3C_3980_41D4_04A361F9FFA4, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CECBAD_CE3C_3980_41E1_64DC2A0C8363, 'hideEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CEFBAD_CE3C_3980_41E3_AB2E931BC66F, 'hideEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CEABAE_CE3C_3980_41E0_CAB8B3D88CD8, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CE4BAE_CE3C_3980_415C_364CA95B396E, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D005E566_CFC4_2E80_41D2_1A2835C8C21B, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1D18BAD_CE3C_3980_41E7_89CA380685D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D1D14BAD_CE3C_3980_41D7_A4C02DF6250A, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D0059566_CFC4_2E80_41E0_8E6125C0488A, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D0058566_CFC4_2E80_41D9_5EC8964DA114, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1D16BAD_CE3C_3980_41A2_4A118E1FB31E, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D005B566_CFC4_2E80_41E7_F401D09BF278, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1D11BAD_CE3C_3980_41D4_04A361F9FFA4, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D0055566_CFC4_2E80_41C8_0D047610A5C4, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CECBAD_CE3C_3980_41E1_64DC2A0C8363, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D0054566_CFC4_2E80_41DF_484B7F4FBCCA, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CEFBAD_CE3C_3980_41E3_AB2E931BC66F, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D0057566_CFC4_2E80_41E2_0A3B2085F7A2, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CEABAE_CE3C_3980_41E0_CAB8B3D88CD8, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D0056567_CFC4_2E80_41E3_BD3A0CD4E2DA, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CE4BAE_CE3C_3980_415C_364CA95B396E, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CE0BAE_CE3C_3980_41BB_01DA9D4D819B, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D1CE2BAE_CE3C_3980_41E0_0D102E8E38D7, 'showEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CFEBAE_CE3C_3980_41E3_E51C2E6D97C4, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1D10BAF_CE3C_3980_41E2_7D3E0D2971FE, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1D13BAF_CE3C_3980_41E3_549C64006B49, 'hideEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CEDBAF_CE3C_3980_41E7_912DDDB42A50, 'hideEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CE8BB0_CE3C_3980_41E1_1921BC6CBAF4, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CE4BB0_CE3C_3980_41E7_7A48F82F6B7A, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D004E567_CFC4_2E80_41D6_AECC58A3BCEE, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CE0BAE_CE3C_3980_41BB_01DA9D4D819B, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D1CE2BAE_CE3C_3980_41E0_0D102E8E38D7, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D0049567_CFC4_2E80_41DB_60DDDBA095FC, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D0048567_CFC4_2E80_41DF_8AFF73493ECB, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CFEBAE_CE3C_3980_41E3_E51C2E6D97C4, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D004B567_CFC4_2E80_41B2_4FD7B38BFD00, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1D10BAF_CE3C_3980_41E2_7D3E0D2971FE, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D004A568_CFC4_2E80_41E2_96A847683651, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1D13BAF_CE3C_3980_41E3_549C64006B49, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D0045568_CFC4_2E80_41D2_D8BEB5D3363D, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CEDBAF_CE3C_3980_41E7_912DDDB42A50, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D0047568_CFC4_2E80_41CC_7A2FA58C6053, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CE8BB0_CE3C_3980_41E1_1921BC6CBAF4, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D0046568_CFC4_2E80_41E4_6B3C9F85C72C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CE4BB0_CE3C_3980_41E7_7A48F82F6B7A, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CE2BB0_CE3C_3980_41D1_51C4DED0826F, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CFCBB0_CE3C_3980_4192_B5DDBDAFF8EA, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CFEBB0_CE3C_3980_41C0_C98BDE702AC8, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D1CF9BB0_CE3C_3980_41E8_63188EA718E5, 'showEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CF4BB1_CE3C_3980_41DD_7FC601FA72B3, 'hideEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CF7BB1_CE3C_3980_41C2_95CB37AB415A, 'hideEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CF1BB1_CE3C_3980_41E0_AE58124AE387, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CE4BB1_CE3C_3980_41C3_4FAD1274A160, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D0041568_CFC4_2E80_41B4_C936F97D4C7C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CE2BB0_CE3C_3980_41D1_51C4DED0826F, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D0043568_CFC4_2E80_41D7_95382698321B, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CFCBB0_CE3C_3980_4192_B5DDBDAFF8EA, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D0042569_CFC4_2E80_41E3_FD2F4F613B71, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CFEBB0_CE3C_3980_41C0_C98BDE702AC8, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D1CF9BB0_CE3C_3980_41E8_63188EA718E5, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D005D569_CFC4_2E80_41E7_2ABDF017BC64, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D005C569_CFC4_2E80_41C7_829FBEF59E0A, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CF4BB1_CE3C_3980_41DD_7FC601FA72B3, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D005E569_CFC4_2E80_41E7_461A0F05A3A9, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CF7BB1_CE3C_3980_41C2_95CB37AB415A, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D0059569_CFC4_2E80_41C4_93203A29B0AD, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CF1BB1_CE3C_3980_41E0_AE58124AE387, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D0058569_CFC4_2E80_41AB_8E834C46EA43, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CE4BB1_CE3C_3980_41C3_4FAD1274A160, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CE7BB1_CE3C_3980_41CB_4FFE925DDEDA, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CE1BB2_CE3C_3980_41E7_D609F2FB5673, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CE3BB2_CE3C_3980_41D8_56261BB38DF5, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D1CFFBB2_CE3C_3980_41E0_F1871EE0C40E, 'showEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CF9BB2_CE3C_3980_4192_7483FD1C05D1, 'hideEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CFBBB2_CE3C_3980_41E9_D1AC45BD6B0D, 'hideEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CF6BB2_CE3C_3980_41CC_37BC09BA9C6F, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CF1BB3_CE3C_3980_41D4_7D22DDFD018D, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D005B56A_CFC4_2E80_41E2_5DF50FF0F0ED, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CE7BB1_CE3C_3980_41CB_4FFE925DDEDA, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D005556A_CFC4_2E80_41A6_D01FD59998C0, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CE1BB2_CE3C_3980_41E7_D609F2FB5673, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D005456A_CFC4_2E80_41E1_D253E5D74378, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CE3BB2_CE3C_3980_41D8_56261BB38DF5, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D1CFFBB2_CE3C_3980_41E0_F1871EE0C40E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D005756A_CFC4_2E80_41D3_496503623D5C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D005656A_CFC4_2E80_41E8_7B238A6043F6, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CF9BB2_CE3C_3980_4192_7483FD1C05D1, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D005156A_CFC4_2E80_41E8_E4202F1BC482, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CFBBB2_CE3C_3980_41E9_D1AC45BD6B0D, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D005056B_CFC4_2E80_41E1_0392A7C75D6C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CF6BB2_CE3C_3980_41CC_37BC09BA9C6F, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D005356B_CFC4_2E80_41DB_D7BCC69EF1A3, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CF1BB3_CE3C_3980_41D4_7D22DDFD018D, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CCDBB3_CE3C_3980_41D7_C2D95BEE6D20, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CCFBB3_CE3C_3980_41E3_0FADE948A275, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CCABB3_CE3C_3980_41A5_B3FA69536D1C, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CFDBB3_CE3C_3980_41DA_E27D7712B511, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CFFBB4_CE3C_3980_41A6_001FD32CF563, 'hideEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D1CF9BB4_CE3C_3980_41DF_006B962AB88D, 'showEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CF6BB4_CE3C_3980_41DE_EED45D0A479C, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CF0BB4_CE3C_3980_41BC_20A9C596259A, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D005256B_CFC4_2E80_41E9_D7D8534760A7, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CCDBB3_CE3C_3980_41D7_C2D95BEE6D20, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D004556B_CFC4_2E80_41BD_75290B956A95, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CCFBB3_CE3C_3980_41E3_0FADE948A275, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D004456B_CFC4_2E80_41C8_B5C8F872B6AF, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CCABB3_CE3C_3980_41A5_B3FA69536D1C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D004756B_CFC4_2E80_41E4_D04FE9806834, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CFDBB3_CE3C_3980_41DA_E27D7712B511, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D004656C_CFC4_2E80_41E3_5DA02203671E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CFFBB4_CE3C_3980_41A6_001FD32CF563, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D1CF9BB4_CE3C_3980_41DF_006B962AB88D, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D004156C_CFC4_2E80_41E4_EC5B98B3343F, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D004056C_CFC4_2E80_41B3_27B967388FB6, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CF6BB4_CE3C_3980_41DE_EED45D0A479C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D004356C_CFC4_2E80_41CF_4E6F1394AA10, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CF0BB4_CE3C_3980_41BC_20A9C596259A, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CF3BB5_CE3C_3980_41BF_7DD4E3F553A2, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CCDBB5_CE3C_3980_41BA_00026C0C1022, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CCFBB5_CE3C_3980_41D8_3964EAB0E6EC, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CC4BB5_CE3C_3980_41D4_94E69B3D3C67, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D1CC7BB5_CE3C_3980_41D0_E2087CA4AC90, 'showEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CC1BB5_CE3C_3980_41C8_42233CF8B588, 'hideEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CDDBB6_CE3C_3980_41DE_BAD4BE767E6C, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CDFBB6_CE3C_3980_41DD_451CA242097B, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D004256C_CFC4_2E80_41E1_5F4ADEC06DE0, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CF3BB5_CE3C_3980_41BF_7DD4E3F553A2, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D005C56C_CFC4_2E80_41B9_14FD55585B57, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CCDBB5_CE3C_3980_41BA_00026C0C1022, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D005F56D_CFC4_2E80_41E1_F79D62D687DA, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CCFBB5_CE3C_3980_41D8_3964EAB0E6EC, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D005E56D_CFC4_2E80_41D8_017704262562, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CC4BB5_CE3C_3980_41D4_94E69B3D3C67, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D1CC7BB5_CE3C_3980_41D0_E2087CA4AC90, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D005956D_CFC4_2E80_41E6_D6311E7375E9, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D005856D_CFC4_2E80_4171_F230A77AF634, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CC1BB5_CE3C_3980_41C8_42233CF8B588, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D005B56D_CFC4_2E80_41DB_E5EEAAC2721D, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CDDBB6_CE3C_3980_41DE_BAD4BE767E6C, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D005556D_CFC4_2E80_41D9_A8A0697E176C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CDFBB6_CE3C_3980_41DD_451CA242097B, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CF1BB6_CE3C_3980_41E7_7109478A3712, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CCCBB6_CE3C_3980_41D3_8D90B308CB6E, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D1CCFBB6_CE3C_3980_41CD_A1C561B0F86E, 'showEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CCABB7_CE3C_3980_41E8_04F3251F8811, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CC5BB7_CE3C_3980_41A6_10E1D9614ECB, 'hideEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CC7BB7_CE3C_3980_41CF_F21AFEF18BC8, 'hideEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CC2BB7_CE3C_3980_41C6_65BF101B34AA, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CDEBB8_CE3C_3980_41E1_6DA769569524, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D005456E_CFC4_2E80_41D5_83840A213B4C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CF1BB6_CE3C_3980_41E7_7109478A3712, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D005656E_CFC4_2E80_41E0_545AE72AEF4D, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CCCBB6_CE3C_3980_41D3_8D90B308CB6E, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D1CCFBB6_CE3C_3980_41CD_A1C561B0F86E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D005156E_CFC4_2E80_41D1_31D4DC9095E4, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D005356E_CFC4_2E80_41E8_5A6D47D0A055, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CCABB7_CE3C_3980_41E8_04F3251F8811, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D005256E_CFC4_2E80_41E7_9C14DF4FB0F1, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CC5BB7_CE3C_3980_41A6_10E1D9614ECB, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D006D56E_CFC4_2E80_41E2_AE7CE77728D5, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CC7BB7_CE3C_3980_41CF_F21AFEF18BC8, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D006C56E_CFC4_2E80_41E0_7B7616D2EB3E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CC2BB7_CE3C_3980_41C6_65BF101B34AA, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D006F56F_CFC4_2E80_41A9_703433F7A6BE, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CDEBB8_CE3C_3980_41E1_6DA769569524, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CD9BB8_CE3C_3980_41E7_3528B7404325, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CD4BB8_CE3C_3980_41E0_AAF9097F6222, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CD6BB8_CE3C_3980_41E7_A87757393966, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CD2BB8_CE3C_3980_41E0_583434A83BA4, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D1CC6BB9_CE3C_3980_41E4_85BDC4494688, 'showEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CC2BB9_CE3C_3980_41B1_3B5B5C1EA4FB, 'hideEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CDCBB9_CE3C_3980_41D5_F95A12F0134A, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CDEBB9_CE3C_3980_41BB_E80DD2C4E3E5, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D006E56F_CFC4_2E80_41C9_18132C39C95E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CD9BB8_CE3C_3980_41E7_3528B7404325, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D006856F_CFC4_2E80_41DF_4FF4BD5E145F, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CD4BB8_CE3C_3980_41E0_AAF9097F6222, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D006B56F_CFC4_2E80_41CA_AD15B942204C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CD6BB8_CE3C_3980_41E7_A87757393966, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D004356F_CFC4_2E80_41DE_E3743031ADD0, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CD2BB8_CE3C_3980_41E0_583434A83BA4, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D1CC6BB9_CE3C_3980_41E4_85BDC4494688, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D004256F_CFC4_2E80_41D1_8A81853E2E39, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D005D570_CFC4_2E80_41DD_71CF7AD457DF, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CC2BB9_CE3C_3980_41B1_3B5B5C1EA4FB, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D005C570_CFC4_2E80_41E0_7562A96B2934, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CDCBB9_CE3C_3980_41D5_F95A12F0134A, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D005F570_CFC4_2E80_41D1_9E73BA1A4B7D, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CDEBB9_CE3C_3980_41BB_E80DD2C4E3E5, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CD8BB9_CE3C_3980_41DC_A7B42F86FDED, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CDABB9_CE3C_3980_41D1_1C28E78E57E9, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CD7BBA_CE3C_3980_41C9_7AC965BCB07D, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CD2BBA_CE3C_3980_41B4_F67FCCF71F49, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D1CACBBA_CE3C_3980_41C9_25D011E06E47, 'showEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CAABBA_CE3C_3980_41AF_4FC17A5CB54E, 'hideEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CA4BBB_CE3C_3980_41E0_7CE7C467748F, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CA6BBB_CE3C_3980_41E9_893DEBD86A30, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D005E570_CFC4_2E80_41CC_F4DBCF606824, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CD8BB9_CE3C_3980_41DC_A7B42F86FDED, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D005A570_CFC4_2E80_41E4_7E42904FDA3E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CDABB9_CE3C_3980_41D1_1C28E78E57E9, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D0055570_CFC4_2E80_41E7_9E1ED5270545, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CD7BBA_CE3C_3980_41C9_7AC965BCB07D, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D0054571_CFC4_2E80_41C4_79C0C533C485, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CD2BBA_CE3C_3980_41B4_F67FCCF71F49, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D1CACBBA_CE3C_3980_41C9_25D011E06E47, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D0057571_CFC4_2E80_41D9_AE70316D122B, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D0051571_CFC4_2E80_41DB_C0334A3AA65B, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CAABBA_CE3C_3980_41AF_4FC17A5CB54E, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D0050571_CFC4_2E80_41CA_173FDE7241CF, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CA4BBB_CE3C_3980_41E0_7CE7C467748F, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D0053571_CFC4_2E80_41E9_A65C83E795BB, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CA6BBB_CE3C_3980_41E9_893DEBD86A30, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CDABBB_CE3C_3980_41E9_370258DB2740, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CD5BBB_CE3C_3980_41DF_02A1210FE015, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CD7BBB_CE3C_3980_41E3_093F6FCE4196, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CD3BBC_CE3C_3980_41E8_4E693EFD452F, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CAEBBC_CE3C_3980_41D4_60FD1FF424CF, 'hideEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CA8BBC_CE3C_3980_41BB_9DD4CA3B86B8, 'hideEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D1CA4BBC_CE3C_3980_41E2_1F955F017DBB, 'showEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CA7BBC_CE3C_3980_41E4_9484F6A01553, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D0052571_CFC4_2E80_41E2_507B20B834CE, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CDABBB_CE3C_3980_41E9_370258DB2740, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D006F572_CFC4_2E80_41A3_CF7BDA73A943, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CD5BBB_CE3C_3980_41DF_02A1210FE015, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D006E572_CFC4_2E80_41A8_0F3683B41C09, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CD7BBB_CE3C_3980_41E3_093F6FCE4196, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D0069572_CFC4_2E80_41CE_6CA2ED5CE9C2, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CD3BBC_CE3C_3980_41E8_4E693EFD452F, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D0068572_CFC4_2E80_41A9_3D8E1C786CA7, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CAEBBC_CE3C_3980_41D4_60FD1FF424CF, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D006B572_CFC4_2E80_41DD_FE7C02F16E7D, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CA8BBC_CE3C_3980_41BB_9DD4CA3B86B8, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D1CA4BBC_CE3C_3980_41E2_1F955F017DBB, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D006A572_CFC4_2E80_41E7_3457571DB6DC, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D0064572_CFC4_2E80_41D4_4CE8393042EE, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1CA7BBC_CE3C_3980_41E4_9484F6A01553, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CA2BBC_CE3C_3980_41B1_0D80242F174B, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CBCBBD_CE3C_3980_41A1_A793608A7DA3, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CBEBBD_CE3C_3980_41C7_A1F7EECEB43E, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CBABBD_CE3C_3980_41E9_347604353CE2, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CB6BBD_CE3C_3980_41D7_1BF6A3BC5D02, 'hideEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D1CB1BBD_CE3C_3980_41E0_4CC96A383C82, 'showEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1C8CBBD_CE3C_3980_41E3_A4971A7FC0BD, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1C8FBBE_CE3C_3980_41E4_9C4A741F7C80, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D0067573_CFC4_2E80_41E4_EE5931538BC6, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CA2BBC_CE3C_3980_41B1_0D80242F174B, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D0061573_CFC4_2E80_41D7_B1EC6A7A9707, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CBCBBD_CE3C_3980_41A1_A793608A7DA3, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D0060573_CFC4_2E80_41D2_6326AC32A19C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CBEBBD_CE3C_3980_41C7_A1F7EECEB43E, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D0063573_CFC4_2E80_41B2_8E9A070C5C6B, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CBABBD_CE3C_3980_41E9_347604353CE2, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D005B573_CFC4_2E80_41E1_E5E31E794339, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CB6BBD_CE3C_3980_41D7_1BF6A3BC5D02, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D1CB1BBD_CE3C_3980_41E0_4CC96A383C82, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D005A573_CFC4_2E80_41E5_470CD6294AF4, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D0055574_CFC4_2E80_41D1_A5520221845C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1C8CBBD_CE3C_3980_41E3_A4971A7FC0BD, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D0054574_CFC4_2E80_41DD_07168A7148B6, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1C8FBBE_CE3C_3980_41E4_9C4A741F7C80, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08",
   "class": "PanoramaPlayListItem",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CA0BBE_CE3C_3980_41D6_F8B06B0944A7, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CBCBBE_CE3C_3980_41D0_A26DCB2BD113, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CB8BBE_CE3C_3980_4195_8C3DAA7BF53A, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CB5BBF_CE3C_3980_41B4_8811B6E216F0, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CB7BBF_CE3C_3980_41D1_CB4945EB33E5, 'hideEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D1CB1BBF_CE3C_3980_41D3_016A935608F8, 'showEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CB3BBF_CE3C_3980_41CB_CB1387922BF1, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1C8EBC0_CE3C_3980_41C5_0DBB298F14D8, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_camera",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D0057574_CFC4_2E80_41E6_8179EE79BA83, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1CA0BBE_CE3C_3980_41D6_F8B06B0944A7, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D0051574_CFC4_2E80_41E0_FD61F08B238F, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1CBCBBE_CE3C_3980_41D0_A26DCB2BD113, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D0050574_CFC4_2E80_41E6_86311EC5C7FA, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1CB8BBE_CE3C_3980_4195_8C3DAA7BF53A, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D0053574_CFC4_2E80_41B0_2A205E583A79, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1CB5BBF_CE3C_3980_41B4_8811B6E216F0, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D0052574_CFC4_2E80_41B3_C884D860188C, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CB7BBF_CE3C_3980_41D1_CB4945EB33E5, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D1CB1BBF_CE3C_3980_41D3_016A935608F8, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D006C575_CFC4_2E80_41BB_3572D6848BBC, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D006F575_CFC4_2E80_41C7_198D0E483277, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CB3BBF_CE3C_3980_41CB_CB1387922BF1, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D0069575_CFC4_2E80_41D6_F12171F1FA30, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D1C8EBC0_CE3C_3980_41C5_0DBB298F14D8, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')"
  },
  {
   "media": "this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_camera",
   "begin": "this.registerKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3', this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3.get('visible')); this.registerKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A', this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A.get('visible')); this.registerKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7', this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7.get('visible')); this.registerKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2', this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2.get('visible')); this.registerKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33', this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33.get('visible')); this.registerKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D', this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D.get('visible')); this.registerKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B', this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B.get('visible')); this.registerKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236', this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236.get('visible')); this.setEndToItemIndex(this.mainPlayList, 13, 0); this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false); this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1C89BC0_CE3C_3980_41D6_38C4C185B476, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false); this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1C8BBC0_CE3C_3980_41B7_4DB4C2A16883, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false); this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1C86BC0_CE3C_3980_41DC_CC705AF93788, 'hideEffect', false); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false); this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1C83BC0_CE3C_3980_415E_A503C0FC04E0, 'hideEffect', false); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false); this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CB6BC1_CE3C_3980_41D2_6F10C5981344, 'hideEffect', false); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false); this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CB0BC1_CE3C_3980_41E7_2412551EED97, 'hideEffect', false); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false); this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CB3BC1_CE3C_3980_41CA_F68974506EC7, 'hideEffect', false); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false); this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D1C8DBC1_CE3C_3980_416F_8DEF8A077A25, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "if(this.existsKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')){ if(this.getKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236')) { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true, -1, this.effect_D0068575_CFC4_2E80_41C7_731866DB3A5E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, false, -1, this.effect_D1C89BC0_CE3C_3980_41D6_38C4C185B476, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236'); if(this.existsKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')){ if(this.getKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B')) { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true, -1, this.effect_D006A575_CFC4_2E80_41E1_9BF22730A9CA, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, false, -1, this.effect_D1C8BBC0_CE3C_3980_41B7_4DB4C2A16883, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B'); if(this.existsKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')){ if(this.getKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D')) { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true, -1, this.effect_D0065575_CFC4_2E80_41D9_EA7EFFBEC20D, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, false, -1, this.effect_D1C86BC0_CE3C_3980_41DC_CC705AF93788, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D'); if(this.existsKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')){ if(this.getKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33')) { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true, -1, this.effect_D0064575_CFC4_2E80_41E0_59910AEC0783, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, false, -1, this.effect_D1C83BC0_CE3C_3980_415E_A503C0FC04E0, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33'); if(this.existsKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')){ if(this.getKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2')) { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true, -1, this.effect_D0067576_CFC4_2E80_41CB_2B8CA18BEE20, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, false, -1, this.effect_D1CB6BC1_CE3C_3980_41D2_6F10C5981344, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2'); if(this.existsKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')){ if(this.getKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7')) { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true, -1, this.effect_D0061576_CFC4_2E80_41E1_CF12910968FD, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, false, -1, this.effect_D1CB0BC1_CE3C_3980_41E7_2412551EED97, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7'); if(this.existsKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')){ if(this.getKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A')) { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true, -1, this.effect_D0060576_CFC4_2E80_41E2_858539632151, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, false, -1, this.effect_D1CB3BC1_CE3C_3980_41CA_F68974506EC7, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D09855B1_CE47_E983_41E7_17D97D6BE98A'); if(this.existsKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')){ if(this.getKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3')) { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true, -1, this.effect_D1C8DBC1_CE3C_3980_416F_8DEF8A077A25, 'showEffect', false); } else { this.setComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, false, -1, this.effect_D0063576_CFC4_2E80_41C2_5405B9361433, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3'); this.trigger('tourEnded')",
   "start": "this.keepComponentVisibility(this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236, true); this.keepComponentVisibility(this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B, true); this.keepComponentVisibility(this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D, true); this.keepComponentVisibility(this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33, true); this.keepComponentVisibility(this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2, true); this.keepComponentVisibility(this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7, true); this.keepComponentVisibility(this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A, true); this.keepComponentVisibility(this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3, true)"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "id": "effect_D1CBCBBD_CE3C_3980_41A1_A793608A7DA3",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1D12BAB_CE3C_3980_41DB_AF50D88D877B",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CF6BB4_CE3C_3980_41DE_EED45D0A479C",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CD5BBB_CE3C_3980_41DF_02A1210FE015",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1D11BAD_CE3C_3980_41D4_04A361F9FFA4",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CCDBB3_CE3C_3980_41D7_C2D95BEE6D20",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CE8BB0_CE3C_3980_41E1_1921BC6CBAF4",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1C8CBBD_CE3C_3980_41E3_A4971A7FC0BD",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CECBAD_CE3C_3980_41E1_64DC2A0C8363",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CF9BB4_CE3C_3980_41DF_006B962AB88D",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1D16BAD_CE3C_3980_41A2_4A118E1FB31E",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005E570_CFC4_2E80_41CC_F4DBCF606824",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CCFBB5_CE3C_3980_41D8_3964EAB0E6EC",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D004056C_CFC4_2E80_41B3_27B967388FB6",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0047568_CFC4_2E80_41CC_7A2FA58C6053",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1D10BAF_CE3C_3980_41E2_7D3E0D2971FE",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CDABB9_CE3C_3980_41D1_1C28E78E57E9",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CA4BBB_CE3C_3980_41E0_7CE7C467748F",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1D13BAF_CE3C_3980_41E3_549C64006B49",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0058569_CFC4_2E80_41AB_8E834C46EA43",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CEDBAC_CE3C_3980_41A4_F84BCC76F7C1",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0069575_CFC4_2E80_41D6_F12171F1FA30",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0054574_CFC4_2E80_41DD_07168A7148B6",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CEDBAF_CE3C_3980_41E7_912DDDB42A50",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D1F35544_CFC4_2E80_41E8_B30E419E15A0",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CF1BB6_CE3C_3980_41E7_7109478A3712",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CF9BB2_CE3C_3980_4192_7483FD1C05D1",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EEA0A463_CFC4_2E80_41DE_B74F250B6240",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "id": "effect_D004756B_CFC4_2E80_41E4_D04FE9806834",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 105.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EE51541B_CFC4_2E80_41DE_ED190B5FB4E5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CA6BBB_CE3C_3980_41E9_893DEBD86A30",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CB1BBD_CE3C_3980_41E0_4CC96A383C82",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1D17BAB_CE3C_3980_41DE_8C8E0ADC4F6F",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0057566_CFC4_2E80_41E2_0A3B2085F7A2",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0046568_CFC4_2E80_41E4_6B3C9F85C72C",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D004A568_CFC4_2E80_41E2_96A847683651",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D006A575_CFC4_2E80_41E1_9BF22730A9CA",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0069572_CFC4_2E80_41CE_6CA2ED5CE9C2",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0043565_CFC4_2E80_41E9_38DB971FFD74",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005256E_CFC4_2E80_41E7_9C14DF4FB0F1",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0056567_CFC4_2E80_41E3_BD3A0CD4E2DA",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CA4BBC_CE3C_3980_41E2_1F955F017DBB",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CFDBB3_CE3C_3980_41DA_E27D7712B511",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1D18BAD_CE3C_3980_41E7_89CA380685D1",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D006E56F_CFC4_2E80_41C9_18132C39C95E",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_t.jpg",
 "label": "IMG_20220427_160441_00_441",
 "id": "panorama_C4BC2721_CE3C_76B2_41E4_11B444103737",
 "adjacentPanoramas": [
  {
   "backwardYaw": 154,
   "yaw": -20.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D487977C_CE4F_EA80_417D_178F7E8DC3D2",
  "this.overlay_D39A122E_CE4C_2A80_41C7_08FBFD7E888C",
  "this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_tcap0"
 ]
},
{
 "id": "effect_D006B572_CFC4_2E80_41DD_FE7C02F16E7D",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CDEBB8_CE3C_3980_41E1_6DA769569524",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CD2BB8_CE3C_3980_41E0_583434A83BA4",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CC6BB9_CE3C_3980_41E4_85BDC4494688",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CBABBD_CE3C_3980_41E9_347604353CE2",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CD9BB8_CE3C_3980_41E7_3528B7404325",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005E56D_CFC4_2E80_41D8_017704262562",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D004356F_CFC4_2E80_41DE_E3743031ADD0",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CA2BBC_CE3C_3980_41B1_0D80242F174B",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CF1BB1_CE3C_3980_41E0_AE58124AE387",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005256B_CFC4_2E80_41E9_D7D8534760A7",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CD6BB8_CE3C_3980_41E7_A87757393966",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1C8DBC1_CE3C_3980_416F_8DEF8A077A25",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D004256F_CFC4_2E80_41D1_8A81853E2E39",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0065575_CFC4_2E80_41D9_EA7EFFBEC20D",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CB6BC1_CE3C_3980_41D2_6F10C5981344",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CD3BBC_CE3C_3980_41E8_4E693EFD452F",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005B573_CFC4_2E80_41E1_E5E31E794339",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CAEBBC_CE3C_3980_41D4_60FD1FF424CF",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CDABBB_CE3C_3980_41E9_370258DB2740",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0067576_CFC4_2E80_41CB_2B8CA18BEE20",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -134.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D004A564_CFC4_2E80_41D2_C5ED74029537",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CB1BBF_CE3C_3980_41D3_016A935608F8",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_t.jpg",
 "label": "IMG_20220427_160325_00_439",
 "id": "panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D",
 "adjacentPanoramas": [
  {
   "backwardYaw": -33.54,
   "yaw": 32.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F"
  },
  {
   "backwardYaw": -71.47,
   "yaw": -122.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C"
  },
  {
   "backwardYaw": -104.63,
   "yaw": 132.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D935279C_CE3B_E981_41E6_DBC6756C459E",
  "this.overlay_D6E6358A_CE3C_2981_41D8_89FC39539431",
  "this.overlay_D7BC17F5_CE3C_2983_41E4_3E81D065BA3D",
  "this.overlay_D9C58505_CE3C_2E83_41E4_6C1409E4707B",
  "this.overlay_D6EC3E73_CE3F_DA80_41BE_6A3DEA7CDBB0",
  "this.overlay_D5DADDA5_CE44_5980_41B7_2309C7FDF722",
  "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_tcap0"
 ]
},
{
 "id": "effect_D005656E_CFC4_2E80_41E0_545AE72AEF4D",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -126.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EEFAD49E_CFC4_2F80_41D7_60FCED7CA2E6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D006C575_CFC4_2E80_41BB_3572D6848BBC",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D006D56E_CFC4_2E80_41E2_AE7CE77728D5",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CE2BAE_CE3C_3980_41E0_0D102E8E38D7",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 105.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EE47A404_CFC4_2E80_41DA_6A82B2EA278B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 149.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_ED1764B2_CFC4_2F80_41C3_68317FA05F03",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CCDBB5_CE3C_3980_41BA_00026C0C1022",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005C565_CFC4_2E80_41D7_3CB65FB85C85",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CC1BB5_CE3C_3980_41C8_42233CF8B588",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -173.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EE3FD3EF_CFC4_2980_41E0_A31EEE9B0D65",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CCFBB6_CE3C_3980_41CD_A1C561B0F86E",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005F56D_CFC4_2E80_41E1_F79D62D687DA",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D005B566_CFC4_2E80_41E7_F401D09BF278",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D004656C_CFC4_2E80_41E3_5DA02203671E",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CD8BB9_CE3C_3980_41DC_A7B42F86FDED",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CF3BB5_CE3C_3980_41BF_7DD4E3F553A2",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CBCBBE_CE3C_3980_41D0_A26DCB2BD113",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CDFBB6_CE3C_3980_41DD_451CA242097B",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CC2BB7_CE3C_3980_41C6_65BF101B34AA",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1C8BBC0_CE3C_3980_41B7_4DB4C2A16883",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CE9BAC_CE3C_3980_41A9_22F766A562D2",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CB8BBE_CE3C_3980_4195_8C3DAA7BF53A",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CDEBB9_CE3C_3980_41BB_E80DD2C4E3E5",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CC5BB7_CE3C_3980_41A6_10E1D9614ECB",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D006B56F_CFC4_2E80_41CA_AD15B942204C",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CACBBA_CE3C_3980_41C9_25D011E06E47",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_t.jpg",
 "label": "IMG_20220427_155915_00_435",
 "id": "panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4",
 "adjacentPanoramas": [
  {
   "backwardYaw": 53.51,
   "yaw": -30.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD"
  },
  {
   "backwardYaw": 121.34,
   "yaw": 3.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D673BB8D_CEDD_D983_41D8_67BD2171DA53",
  "this.overlay_D7F6B3F4_CEDC_6981_41C2_A39209C1146C",
  "this.overlay_D4F943BD_CEDC_E983_41C5_A3BB47EF6921",
  "this.overlay_D7C6AA5C_CEDF_DA80_41E4_3AC6F9747CBA",
  "this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_tcap0"
 ]
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_t.jpg",
 "label": "IMG_20220427_155954_00_436",
 "id": "panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD",
 "adjacentPanoramas": [
  {
   "backwardYaw": -30.49,
   "yaw": 53.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D8D9172D_CEC4_2A80_41D4_F77144961CFC",
  "this.overlay_D6C43758_CEC4_2A81_41E7_FD324B901302",
  "this.panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -147.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EE5A9425_CFC4_2E80_41C4_50B256957DBE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 23.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EE3653D5_CFC4_2980_41E4_FDE75BD43E6A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D0064572_CFC4_2E80_41D4_4CE8393042EE",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_t.jpg",
 "label": "IMG_20220427_155249_00_432",
 "id": "panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F",
 "adjacentPanoramas": [
  {
   "backwardYaw": 6.28,
   "yaw": -104.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7"
  },
  {
   "backwardYaw": -74.74,
   "yaw": -156.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38"
  },
  {
   "backwardYaw": -74.74,
   "yaw": 159.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38"
  },
  {
   "backwardYaw": 32.41,
   "yaw": -33.54,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D8A29487_CEDB_EF80_419F_33FE731146F1",
  "this.overlay_D9B6E353_CEC4_2A80_41BC_4F20CF6B1AE4",
  "this.overlay_D997019F_CEC4_2980_41D1_9C108758C121",
  "this.overlay_D878992A_CEC4_2680_41CE_74CB826CCEFA",
  "this.overlay_D85638A4_CEC4_2780_41B5_09165DC37877",
  "this.overlay_D921CD5E_CEC4_7E81_41D0_3F7A21EBA736",
  "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -58.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_ED0964A8_CFC4_2F80_41D2_C5F8A46DE92F",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CF4BB1_CE3C_3980_41DD_7FC601FA72B3",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CE7BB1_CE3C_3980_41CB_4FFE925DDEDA",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0057574_CFC4_2E80_41E6_8179EE79BA83",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0063573_CFC4_2E80_41B2_8E9A070C5C6B",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_t.jpg",
 "label": "IMG_20220427_155517_00_433",
 "id": "panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7",
 "adjacentPanoramas": [
  {
   "backwardYaw": 94.71,
   "yaw": -42.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF"
  },
  {
   "backwardYaw": 95.97,
   "yaw": -117.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0"
  },
  {
   "backwardYaw": -104.01,
   "yaw": 6.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F"
  },
  {
   "backwardYaw": 3.87,
   "yaw": 121.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D9FAA88F_CEC4_2780_41DE_81CE29518A47",
  "this.overlay_D643C2CE_CEC4_2B81_41E4_AB8F226B3B48",
  "this.overlay_D617ED8D_CEC4_7983_41DC_AC7A8B4AC8C5",
  "this.overlay_D6A67A4D_CEC4_3A83_41E0_D36B9344C938",
  "this.overlay_D64EE5C1_CEC4_6980_41E8_DDC533C6DDC7",
  "this.overlay_D6AE7D6E_CECB_DE80_41B8_335C27BAF0A5",
  "this.overlay_D62927B7_CECC_2980_41E4_563B53D39221",
  "this.overlay_D7AE78BA_CEC4_2780_41B2_0110202F6618",
  "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_tcap0"
 ]
},
{
 "id": "effect_D0058566_CFC4_2E80_41D9_5EC8964DA114",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CE4BB0_CE3C_3980_41E7_7A48F82F6B7A",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D004156C_CFC4_2E80_41E4_EC5B98B3343F",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D1CF7BB1_CE3C_3980_41C2_95CB37AB415A",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005D569_CFC4_2E80_41E7_2ABDF017BC64",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CD7BBA_CE3C_3980_41C9_7AC965BCB07D",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -58.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_EE71543A_CFC4_2E80_41E3_2C965E9C2F93",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "id": "effect_D005056B_CFC4_2E80_41E1_0392A7C75D6C",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CF6BB2_CE3C_3980_41CC_37BC09BA9C6F",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D005D565_CFC4_2E80_41CB_8A3A56CDC5C5",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CEBBAC_CE3C_3980_41D7_037403584E9B",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D1CE3BB2_CE3C_3980_41D8_56261BB38DF5",
 "class": "FadeOutEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "id": "effect_D0055570_CFC4_2E80_41E7_9E1ED5270545",
 "class": "FadeInEffect",
 "duration": 1000,
 "easing": "cubic_in_out"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 0.5,
 "paddingLeft": 0,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "minHeight": 50,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressHeight": 6,
 "progressBackgroundOpacity": 1,
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "minWidth": 100,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "shadow": false,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "--SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "top",
 "height": 641,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Montserrat SemiBold",
 "data": {
  "name": "Entrance"
 },
 "id": "Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236",
 "left": "4.4%",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "width": "14.717%",
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "Entrance ",
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "Label",
 "height": "8.757%",
 "top": "4.76%",
 "fontSize": "4.97vh",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "fontFamily": "Montserrat SemiBold",
 "data": {
  "name": "Compound"
 },
 "id": "Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B",
 "left": "4.4%",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "width": "18.335%",
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "Veranda",
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "Label",
 "height": "8.757%",
 "top": "4.76%",
 "fontSize": "4.97vh",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "fontFamily": "Montserrat SemiBold",
 "data": {
  "name": "Bedroom"
 },
 "id": "Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D",
 "left": "4.4%",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "width": "14.717%",
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "Bedroom",
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "Label",
 "height": "8.757%",
 "top": "4.76%",
 "fontSize": "4.97vh",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "fontFamily": "Montserrat SemiBold",
 "data": {
  "name": "Living Room"
 },
 "id": "Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33",
 "left": "4.4%",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "width": "20.808%",
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "Living Room",
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "Label",
 "height": "8.757%",
 "top": "4.76%",
 "fontSize": "4.97vh",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "fontFamily": "Montserrat SemiBold",
 "data": {
  "name": "Bath Room"
 },
 "id": "Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2",
 "left": "4.4%",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "width": "20.808%",
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "Bathroom",
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "Label",
 "height": "8.757%",
 "top": "4.76%",
 "fontSize": "4.97vh",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "fontFamily": "Montserrat SemiBold",
 "data": {
  "name": "Hall way"
 },
 "id": "Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7",
 "left": "4.4%",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "width": "16.647%",
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "Hallway",
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "Label",
 "height": "8.757%",
 "top": "4.76%",
 "fontSize": "4.97vh",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "fontFamily": "Montserrat SemiBold",
 "data": {
  "name": "Kitchen"
 },
 "id": "Label_D09855B1_CE47_E983_41E7_17D97D6BE98A",
 "left": "4.4%",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "width": "15.802%",
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "Kitchen",
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "Label",
 "height": "8.757%",
 "top": "4.76%",
 "fontSize": "4.97vh",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "fontFamily": "Montserrat SemiBold",
 "data": {
  "name": "Store"
 },
 "id": "Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3",
 "left": "4.4%",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "width": "15.742%",
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "Store",
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "Label",
 "height": "8.757%",
 "top": "4.76%",
 "fontSize": "4.97vh",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "mode": "toggle",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "maxWidth": 58
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D77C8B8C_CE44_3981_41E9_9D2CF6DF5122",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D, this.camera_EEBE9477_CFC4_2E80_41E1_238D2B0DAD80); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 02c"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.26,
   "pitch": -39.88,
   "yaw": -106.59,
   "image": "this.AnimatedImageResource_D44FCC9F_CE4C_3F80_41C2_042BD843CD80",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D245CE2D_CE4C_7A83_41C7_D403B1E33723",
 "maps": [
  {
   "hfov": 11.26,
   "yaw": -106.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D471B336_CE4C_6A80_41E8_47BF66A28FE8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737, this.camera_EEA0A463_CFC4_2E80_41DE_B74F250B6240); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_2_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D2639E4D_CE4D_DA80_41AB_7EB7B233A4DC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737, this.camera_EEAEA46C_CFC4_2E80_41D2_5185C431B278); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_3_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_3_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_3_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.36,
   "pitch": 20.9,
   "yaw": 167.71,
   "image": "this.AnimatedImageResource_D4547588_CE44_6981_41BB_5F85814991C1",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D414BF5B_CE4C_7A87_41E9_AC8C9B48F41D",
 "maps": [
  {
   "hfov": 10.36,
   "yaw": 167.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.9
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_DED4A907_CEC4_2680_41E0_46A75A5C23FD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F, this.camera_EE3653D5_CFC4_2980_41E4_FDE75BD43E6A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.86,
   "pitch": -21.56,
   "yaw": -71.56,
   "image": "this.AnimatedImageResource_D9F5A9D3_CEC4_7987_41E3_8CE0998E023E",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_DDB642A0_CEC4_2B80_41C6_59CB5433636C",
 "maps": [
  {
   "hfov": 13.86,
   "yaw": -71.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.56
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C12E2B78_CE3D_FE91_41E3_95A32051E828",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_DF611AA6_CE3C_3FB1_41C6_D54D1373D5EA",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_DE8A111F_CEC4_2A8F_41D1_BC6AE0A95DD5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199, this.camera_EE93D459_CFC4_2E80_41D8_0CBCF317E479); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 63.9,
   "yaw": 45.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_2_1_6_map.gif",
      "width": 185,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.19,
   "pitch": -19.53,
   "yaw": 54.6,
   "image": "this.AnimatedImageResource_D7DCCE7D_CE5C_5A83_41DC_BAB9D0BB892F",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_DE97DC3B_CEC4_3A97_41C5_1F73EC265345",
 "maps": [
  {
   "hfov": 13.19,
   "yaw": 54.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.55,
   "pitch": 2.22,
   "yaw": -144.04,
   "image": "this.AnimatedImageResource_D8340F84_CEDC_5981_41E5_AD80BD97E6A1",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_DE200451_CEC4_EA92_41BB_2E456CB56152",
 "maps": [
  {
   "hfov": 8.55,
   "yaw": -144.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.22
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D9888EBD_CEC4_7B80_41BE_B715AC5038AC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D, this.camera_D1F9B54E_CFC4_2E80_41C1_A1AA7EAE48F1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 71.01,
   "yaw": -71.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0_HS_0_1_0_map.gif",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.19,
   "pitch": 9.97,
   "yaw": -59.52,
   "image": "this.AnimatedImageResource_D467A4FC_CE3C_EF81_41B0_63A7114F8192",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D91D6616_CEC4_2A80_41A0_AC2E605E0C33",
 "maps": [
  {
   "hfov": 9.19,
   "yaw": -59.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.97
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D9BE012D_CEC4_2680_4190_99F039A61DC2",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7, this.camera_D1E4D51A_CFC4_2E80_41E8_D8DF4BE36DE6); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_1_0.png",
      "width": 201,
      "class": "ImageResourceLevel",
      "height": 286
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.94,
   "yaw": 78.96
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D739A58A_CEC4_2980_41E2_908B23319E2F",
 "maps": [
  {
   "hfov": 11.6,
   "yaw": 78.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.94
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C0240F4B_CE7C_D6F7_416C_BFEBA9C2F4BB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793, this.camera_D1FF3557_CFC4_2E80_41DA_612ED55D2ECD); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 104.55,
   "yaw": 121.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 157
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.74,
   "pitch": 7.71,
   "yaw": 98.75,
   "image": "this.AnimatedImageResource_D83BBF81_CEDC_5983_41D0_AFB869B1065A",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C10006D4_CE7C_3792_41DF_F7578C8FFDB2",
 "maps": [
  {
   "hfov": 11.74,
   "yaw": 98.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C0C69303_CE7C_2E76_41E2_33E029D6575B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5, this.camera_D004A564_CFC4_2E80_41D2_C5ED74029537); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_2_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_2_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_2_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_2_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.74,
   "pitch": -12,
   "yaw": 3.86,
   "image": "this.AnimatedImageResource_D7DC7E7C_CE5C_5A81_41D3_3D69A0F09D34",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D9048569_CEDC_2E80_41E2_E92601A948CC",
 "maps": [
  {
   "hfov": 10.74,
   "yaw": 3.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_3_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C043846D_CE5C_2AB3_41B7_DFE8756E284E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199, this.camera_EE71543A_CFC4_2E80_41E3_2C965E9C2F93); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 75.61,
   "yaw": -143.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_1_HS_0_1_0_map.gif",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C050A39D_CE5D_ED93_41E1_3D498A52A756",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199, this.camera_EE7B2445_CFC4_2E80_4183_439F1DE5C8DF); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 26.58,
   "yaw": 166.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_1_HS_1_1_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.14,
   "pitch": 10.32,
   "yaw": -151.82,
   "image": "this.AnimatedImageResource_D7DC1E7B_CE5C_5A87_41C8_DCDD1E3C105D",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C0095878_CE44_3A91_41DC_A6A6B63B1CDD",
 "maps": [
  {
   "hfov": 6.14,
   "yaw": -151.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.32
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D6CA8517_CEC4_2E80_41E2_605FA9FC9C5C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7, this.camera_EE87344E_CFC4_2E80_41D8_739739B256DC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.18,
   "pitch": 8.41,
   "yaw": 67.87,
   "image": "this.AnimatedImageResource_D7D97E86_CE5C_5B80_41A1_AB1CA4116AD0",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7E05C1F_CEDC_3E80_41A1_64720410C0A2",
 "maps": [
  {
   "hfov": 8.18,
   "yaw": 67.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.41
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "mode": "push",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 },
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "mode": "toggle",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 },
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "mode": "toggle",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 },
 "maxWidth": 58
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D487977C_CE4F_EA80_417D_178F7E8DC3D2",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08, this.camera_EE65B430_CFC4_2E80_41D0_6A3EFE689545); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 62.48,
   "yaw": -20.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0_HS_0_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.92,
   "pitch": 10.85,
   "yaw": -8.65,
   "image": "this.AnimatedImageResource_D44EFCA2_CE4C_3F80_41D1_7E09C6451212",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D39A122E_CE4C_2A80_41C7_08FBFD7E888C",
 "maps": [
  {
   "hfov": 8.92,
   "yaw": -8.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.85
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D935279C_CE3B_E981_41E6_DBC6756C459E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C, this.camera_EEDB248A_CFC4_2F80_41CD_3EBD35A959A6); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.74,
   "pitch": 15.75,
   "yaw": -120.71,
   "image": "this.AnimatedImageResource_D4554582_CE44_6981_41E0_D433B55C1521",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6E6358A_CE3C_2981_41D8_89FC39539431",
 "maps": [
  {
   "hfov": 8.74,
   "yaw": -120.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D7BC17F5_CE3C_2983_41E4_3E81D065BA3D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F, this.camera_EECD6481_CFC4_2F80_41D9_E25ED7A2B2F2); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_2_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D9C58505_CE3C_2E83_41E4_6C1409E4707B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08, this.camera_EEEB7494_CFC4_2F80_41E7_80D127FCEFE0); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_4_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_4_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_4_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_4_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 02c"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.08,
   "pitch": -29.58,
   "yaw": 135.7,
   "image": "this.AnimatedImageResource_D4650503_CE3C_EE87_41E9_483430FC6F24",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6EC3E73_CE3F_DA80_41BE_6A3DEA7CDBB0",
 "maps": [
  {
   "hfov": 12.08,
   "yaw": 135.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_5_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.35,
   "pitch": 19.01,
   "yaw": 18.85,
   "image": "this.AnimatedImageResource_D454E585_CE44_6983_41D7_457D23FCACF1",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D5DADDA5_CE44_5980_41B7_2309C7FDF722",
 "maps": [
  {
   "hfov": 8.35,
   "yaw": 18.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.01
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D673BB8D_CEDD_D983_41D8_67BD2171DA53",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD, this.camera_EEFAD49E_CFC4_2F80_41D7_60FCED7CA2E6); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 51.46,
   "yaw": -30.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_0_1_0_map.gif",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.4,
   "pitch": 6.69,
   "yaw": -0.57,
   "image": "this.AnimatedImageResource_D46994FA_CE3C_EF81_41E7_5AB3976CB9F9",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7F6B3F4_CEDC_6981_41C2_A39209C1146C",
 "maps": [
  {
   "hfov": 4.4,
   "yaw": -0.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D4F943BD_CEDC_E983_41C5_A3BB47EF6921",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7, this.camera_ED0964A8_CFC4_2F80_41D2_C5F8A46DE92F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 22.99,
   "yaw": 3.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_2_1_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.02,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_3_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.79,
   "yaw": -23.4
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7C6AA5C_CEDF_DA80_41E4_3AC6F9747CBA",
 "maps": [
  {
   "hfov": 6.02,
   "yaw": -23.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.79
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D8D9172D_CEC4_2A80_41D4_F77144961CFC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4, this.camera_ED1764B2_CFC4_2F80_41C3_68317FA05F03); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.05,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_1_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 241
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.87,
   "yaw": 65.46
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6C43758_CEC4_2A81_41E7_FD324B901302",
 "maps": [
  {
   "hfov": 10.05,
   "yaw": 65.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.87
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D8A29487_CEDB_EF80_419F_33FE731146F1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7, this.camera_EE3FD3EF_CFC4_2980_41E0_A31EEE9B0D65); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 42.07,
   "yaw": -104.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_0_1_0_map.gif",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.2,
   "pitch": 6.13,
   "yaw": -104.19,
   "image": "this.AnimatedImageResource_D7DB4E7F_CE5C_5B7F_41E1_BD120D816CC3",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D9B6E353_CEC4_2A80_41BC_4F20CF6B1AE4",
 "maps": [
  {
   "hfov": 6.2,
   "yaw": -104.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D997019F_CEC4_2980_41D1_9C108758C121",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D, this.camera_EE5A9425_CFC4_2E80_41C4_50B256957DBE); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 22.33,
   "yaw": -33.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_2_1_0_map.gif",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.98,
   "pitch": 5.31,
   "yaw": -28.75,
   "image": "this.AnimatedImageResource_D7DBAE80_CE5C_5B81_41C2_61D2BA86C396",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D878992A_CEC4_2680_41CE_74CB826CCEFA",
 "maps": [
  {
   "hfov": 4.98,
   "yaw": -28.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D85638A4_CEC4_2780_41B5_09165DC37877",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38, this.camera_EE47A404_CFC4_2E80_41DA_6A82B2EA278B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 50.87,
   "yaw": -156.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_4_1_0_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D921CD5E_CEC4_7E81_41D0_3F7A21EBA736",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38, this.camera_EE51541B_CFC4_2E80_41DE_ED190B5FB4E5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 44.35,
   "yaw": 159.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_5_1_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.23
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D9FAA88F_CEC4_2780_41DE_81CE29518A47",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF, this.camera_D1E71524_CFC4_2E80_41E3_5D2871A053F2); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 45.55,
   "yaw": -42.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_0_1_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D643C2CE_CEC4_2B81_41E4_AB8F226B3B48",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0, this.camera_D1EAA52F_CFC4_2E80_41E1_1BEE19F34862); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 50.09,
   "yaw": -117.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_1_1_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D617ED8D_CEC4_7983_41DC_AC7A8B4AC8C5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4, this.camera_D1F35544_CFC4_2E80_41E8_B30E419E15A0); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 64.16,
   "yaw": 121.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_2_1_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.82,
   "pitch": 9.7,
   "yaw": -116.87,
   "image": "this.AnimatedImageResource_D7DA9E82_CE5C_5B81_41E8_FDC5EC5955EA",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6A67A4D_CEC4_3A83_41E0_D36B9344C938",
 "maps": [
  {
   "hfov": 8.82,
   "yaw": -116.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.26,
   "pitch": 14.37,
   "yaw": 113.19,
   "image": "this.AnimatedImageResource_D7DAAE84_CE5C_5B80_41DA_7500A784B52E",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D64EE5C1_CEC4_6980_41E8_DDC533C6DDC7",
 "maps": [
  {
   "hfov": 10.26,
   "yaw": 113.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.72,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_5_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 163
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.3,
   "yaw": -45.9
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D6AE7D6E_CECB_DE80_41B8_335C27BAF0A5",
 "maps": [
  {
   "hfov": 9.72,
   "yaw": -45.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D62927B7_CECC_2980_41E4_563B53D39221",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F, this.camera_D1EF753A_CFC4_2E80_41D3_5A5B66174E90); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 50.91,
   "yaw": 6.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_6_1_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 02c"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.08,
   "pitch": -30.96,
   "yaw": 1.05,
   "image": "this.AnimatedImageResource_D78FFD01_CE7C_5E80_41C7_AFAECF90D365",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D7AE78BA_CEC4_2780_41B2_0110202F6618",
 "maps": [
  {
   "hfov": 11.08,
   "yaw": 1.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_7_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.96
  }
 ]
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45,
 "id": "panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "layout": "horizontal",
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "minWidth": 1,
 "class": "Container",
 "verticalAlign": "middle",
 "height": 110,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "layout": "vertical",
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "paddingLeft": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "class": "Container",
 "verticalAlign": "top",
 "height": "85.959%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D44FCC9F_CE4C_3F80_41C2_042BD843CD80",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D4547588_CE44_6981_41BB_5F85814991C1",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D9F5A9D3_CEC4_7987_41E3_8CE0998E023E",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D7DCCE7D_CE5C_5A83_41DC_BAB9D0BB892F",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D8340F84_CEDC_5981_41E5_AD80BD97E6A1",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D467A4FC_CE3C_EF81_41B0_63A7114F8192",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D83BBF81_CEDC_5983_41D0_AFB869B1065A",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D7DC7E7C_CE5C_5A81_41D3_3D69A0F09D34",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D7DC1E7B_CE5C_5A87_41C8_DCDD1E3C105D",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D7D97E86_CE5C_5B80_41A1_AB1CA4116AD0",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D44EFCA2_CE4C_3F80_41D1_7E09C6451212",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D4554582_CE44_6981_41E0_D433B55C1521",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D4650503_CE3C_EE87_41E9_483430FC6F24",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D454E585_CE44_6983_41D7_457D23FCACF1",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D46994FA_CE3C_EF81_41E7_5AB3976CB9F9",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D7DB4E7F_CE5C_5B7F_41E1_BD120D816CC3",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D7DBAE80_CE5C_5B81_41C2_61D2BA86C396",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D7DA9E82_CE5C_5B81_41E8_FDC5EC5955EA",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D7DAAE84_CE5C_5B80_41DA_7500A784B52E",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D78FFD01_CE7C_5E80_41C7_AFAECF90D365",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "IconButton",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "mode": "toggle",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 },
 "maxWidth": 60
},
{
 "maxHeight": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "class": "IconButton",
 "height": 58,
 "click": "this.openLink('https://www.instagram.com/eyita.app/', '_blank')",
 "mode": "push",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton Instagram"
 },
 "maxWidth": 58
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Label_D0DF8FCE_CE4D_D980_41D7_82C2FC4B0236",
  "this.Label_D1F1F8F3_CE44_2787_41BC_36450E1F1D2B",
  "this.Label_D0AEA5C4_CE44_6980_418F_954D63A30E6D",
  "this.Label_D1FCD2BE_CE44_2B80_41E9_A8A41ABC1E33",
  "this.Label_D0C46CDD_CE44_5F83_41E2_68BF80F73EB2",
  "this.Label_D032ACFF_CE44_FF7F_41E1_D46DB97FA7D7",
  "this.Label_D09855B1_CE47_E983_41E7_17D97D6BE98A",
  "this.Label_D03383D0_CE44_2981_41D4_6AA1C3455BF3"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "borderSize": 0,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "minWidth": 20,
 "scripts": {
  "registerKey": function(key, value){  window[key] = value; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; }
 },
 "overflow": "visible",
 "class": "Player",
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
