var APP_DATA = {
  "scenes": [
    {
      "id": "0-205330-016",
      "name": "205330-016",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.11133235544440012,
        "pitch": 0.051601654168949906,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.7015952315710994,
          "pitch": 0.46318190948860405,
          "rotation": 3.141592653589793,
          "target": "1-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-office",
      "name": "Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.32308397840558634,
          "pitch": 0.5243900791828136,
          "rotation": 0,
          "target": "0-205330-016"
        },
        {
          "yaw": -2.3166694431875037,
          "pitch": 0.341599911353752,
          "rotation": 4.71238898038469,
          "target": "2-bed4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bed4",
      "name": "Bed4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0004318569423987,
          "pitch": 0.2566848153923562,
          "rotation": 0,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0922426284179565,
          "pitch": 0.01939592682028568,
          "rotation": 4.71238898038469,
          "target": "4-guest"
        },
        {
          "yaw": -2.0629628868043195,
          "pitch": 0.23742382740784151,
          "rotation": 0,
          "target": "5-bath"
        },
        {
          "yaw": 1.7468937804349185,
          "pitch": 0.4298781878794884,
          "rotation": 0,
          "target": "2-bed4"
        },
        {
          "yaw": -0.20874856717236234,
          "pitch": 0.34770276081519746,
          "rotation": 0,
          "target": "1-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-guest",
      "name": "Guest",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9804307157288186,
          "pitch": 0.25605116686546303,
          "rotation": 7.853981633974483,
          "target": "3-hallway"
        },
        {
          "yaw": -1.3749362445715345,
          "pitch": 0.12426896450319092,
          "rotation": 4.71238898038469,
          "target": "5-bath"
        },
        {
          "yaw": -1.1901097779506777,
          "pitch": 0.009713435272956872,
          "rotation": 1.5707963267948966,
          "target": "6-wil"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bath",
      "name": "Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6783168719608508,
          "pitch": 0.3340549462149909,
          "rotation": 1.5707963267948966,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-wil",
      "name": "WIL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.90811072757824,
          "pitch": 0.1830749047896294,
          "rotation": 0,
          "target": "5-bath"
        },
        {
          "yaw": 2.1444976536710616,
          "pitch": 0.44513021417390775,
          "rotation": 0,
          "target": "3-hallway"
        },
        {
          "yaw": 1.5909829535053843,
          "pitch": 0.18542440367325597,
          "rotation": 0,
          "target": "4-guest"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-rumpus",
      "name": "Rumpus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5286001629350814,
          "pitch": 0.2832549654361358,
          "rotation": 0,
          "target": "3-hallway"
        },
        {
          "yaw": -0.5923926394953476,
          "pitch": 0.25615965796824725,
          "rotation": 0,
          "target": "9-wir"
        },
        {
          "yaw": -1.099988730077337,
          "pitch": 0.19118448200236493,
          "rotation": 0,
          "target": "8-kids"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kids",
      "name": "Kids",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7260413095282736,
          "pitch": 0.17585350039987446,
          "rotation": 0,
          "target": "7-rumpus"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-wir",
      "name": "WIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0627805728022626,
          "pitch": 0.2336048605441583,
          "rotation": 0,
          "target": "11-master"
        },
        {
          "yaw": 0.3241347439037998,
          "pitch": 0.20225447270199481,
          "rotation": 0,
          "target": "10-ensuite"
        },
        {
          "yaw": -2.0602991825717503,
          "pitch": 0.28713406951172615,
          "rotation": 0,
          "target": "7-rumpus"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ensuite",
      "name": "Ensuite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "11-master",
      "name": "Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "22 Vereker - First Floor",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
