window.map = null;

// Главная функция, вызывается при запуске скрипта
main();
async function main() {
  // ожидание загрузки модулей
  await ymaps3.ready;
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapControls,
    YMapDefaultFeaturesLayer,
    YMapMarker
  } = ymaps3;

  // Импорт модулей для элементов управления на карте
  const {
    YMapZoomControl,
    YMapGeolocationControl
  } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');


  // Координаты центра карты
  const CENTER_COORDINATES = [59.940895, 30.194407];
  // координаты метки на карте
  const MARKER_COORDINATES = [59.940895, 30.194407];

  // Объект с параметрами центра и зумом карты
  const LOCATION = {
    center: CENTER_COORDINATES,
    zoom: 16
  };

  // Создание объекта карты
  map = new YMap(document.getElementById('map'), {
    location: LOCATION
  });

  // Добавление слоев на карту
  const layer = new YMapDefaultSchemeLayer({
    customization: [
      {
        "tags": "country",
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ad9685"
          },
          {
            "opacity": 0.8,
            "zoom": 0
          },
          {
            "opacity": 0.8,
            "zoom": 1
          },
          {
            "opacity": 0.8,
            "zoom": 2
          },
          {
            "opacity": 0.8,
            "zoom": 3
          },
          {
            "opacity": 0.8,
            "zoom": 4
          },
          {
            "opacity": 1,
            "zoom": 5
          },
          {
            "opacity": 1,
            "zoom": 6
          },
          {
            "opacity": 1,
            "zoom": 7
          },
          {
            "opacity": 1,
            "zoom": 8
          },
          {
            "opacity": 1,
            "zoom": 9
          },
          {
            "opacity": 1,
            "zoom": 10
          },
          {
            "opacity": 1,
            "zoom": 11
          },
          {
            "opacity": 1,
            "zoom": 12
          },
          {
            "opacity": 1,
            "zoom": 13
          },
          {
            "opacity": 1,
            "zoom": 14
          },
          {
            "opacity": 1,
            "zoom": 15
          },
          {
            "opacity": 1,
            "zoom": 16
          },
          {
            "opacity": 1,
            "zoom": 17
          },
          {
            "opacity": 1,
            "zoom": 18
          },
          {
            "opacity": 1,
            "zoom": 19
          },
          {
            "opacity": 1,
            "zoom": 20
          },
          {
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "country",
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#dacabe"
          },
          {
            "opacity": 0.15,
            "zoom": 0
          },
          {
            "opacity": 0.15,
            "zoom": 1
          },
          {
            "opacity": 0.15,
            "zoom": 2
          },
          {
            "opacity": 0.15,
            "zoom": 3
          },
          {
            "opacity": 0.15,
            "zoom": 4
          },
          {
            "opacity": 0.15,
            "zoom": 5
          },
          {
            "opacity": 0.25,
            "zoom": 6
          },
          {
            "opacity": 0.5,
            "zoom": 7
          },
          {
            "opacity": 0.47,
            "zoom": 8
          },
          {
            "opacity": 0.44,
            "zoom": 9
          },
          {
            "opacity": 0.41,
            "zoom": 10
          },
          {
            "opacity": 0.38,
            "zoom": 11
          },
          {
            "opacity": 0.35,
            "zoom": 12
          },
          {
            "opacity": 0.33,
            "zoom": 13
          },
          {
            "opacity": 0.3,
            "zoom": 14
          },
          {
            "opacity": 0.28,
            "zoom": 15
          },
          {
            "opacity": 0.25,
            "zoom": 16
          },
          {
            "opacity": 0.25,
            "zoom": 17
          },
          {
            "opacity": 0.25,
            "zoom": 18
          },
          {
            "opacity": 0.25,
            "zoom": 19
          },
          {
            "opacity": 0.25,
            "zoom": 20
          },
          {
            "opacity": 0.25,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "region",
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#c2b0a3",
            "opacity": 0.5,
            "zoom": 0
          },
          {
            "color": "#c2b0a3",
            "opacity": 0.5,
            "zoom": 1
          },
          {
            "color": "#c2b0a3",
            "opacity": 0.5,
            "zoom": 2
          },
          {
            "color": "#c2b0a3",
            "opacity": 0.5,
            "zoom": 3
          },
          {
            "color": "#c2b0a3",
            "opacity": 0.5,
            "zoom": 4
          },
          {
            "color": "#c2b0a3",
            "opacity": 0.5,
            "zoom": 5
          },
          {
            "color": "#c2b0a3",
            "opacity": 1,
            "zoom": 6
          },
          {
            "color": "#c2b0a3",
            "opacity": 1,
            "zoom": 7
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 8
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 9
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 10
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 11
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 12
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 13
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 14
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 15
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 16
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 17
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 18
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 19
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 20
          },
          {
            "color": "#ad9685",
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "region",
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#dacabe"
          },
          {
            "opacity": 0.15,
            "zoom": 0
          },
          {
            "opacity": 0.15,
            "zoom": 1
          },
          {
            "opacity": 0.15,
            "zoom": 2
          },
          {
            "opacity": 0.15,
            "zoom": 3
          },
          {
            "opacity": 0.15,
            "zoom": 4
          },
          {
            "opacity": 0.15,
            "zoom": 5
          },
          {
            "opacity": 0.25,
            "zoom": 6
          },
          {
            "opacity": 0.5,
            "zoom": 7
          },
          {
            "opacity": 0.47,
            "zoom": 8
          },
          {
            "opacity": 0.44,
            "zoom": 9
          },
          {
            "opacity": 0.41,
            "zoom": 10
          },
          {
            "opacity": 0.38,
            "zoom": 11
          },
          {
            "opacity": 0.35,
            "zoom": 12
          },
          {
            "opacity": 0.33,
            "zoom": 13
          },
          {
            "opacity": 0.3,
            "zoom": 14
          },
          {
            "opacity": 0.28,
            "zoom": 15
          },
          {
            "opacity": 0.25,
            "zoom": 16
          },
          {
            "opacity": 0.25,
            "zoom": 17
          },
          {
            "opacity": 0.25,
            "zoom": 18
          },
          {
            "opacity": 0.25,
            "zoom": 19
          },
          {
            "opacity": 0.25,
            "zoom": 20
          },
          {
            "opacity": 0.25,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "admin",
          "none": [
            "country",
            "region",
            "locality",
            "district",
            "address"
          ]
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ad9685"
          },
          {
            "opacity": 0.5,
            "zoom": 0
          },
          {
            "opacity": 0.5,
            "zoom": 1
          },
          {
            "opacity": 0.5,
            "zoom": 2
          },
          {
            "opacity": 0.5,
            "zoom": 3
          },
          {
            "opacity": 0.5,
            "zoom": 4
          },
          {
            "opacity": 0.5,
            "zoom": 5
          },
          {
            "opacity": 1,
            "zoom": 6
          },
          {
            "opacity": 1,
            "zoom": 7
          },
          {
            "opacity": 1,
            "zoom": 8
          },
          {
            "opacity": 1,
            "zoom": 9
          },
          {
            "opacity": 1,
            "zoom": 10
          },
          {
            "opacity": 1,
            "zoom": 11
          },
          {
            "opacity": 1,
            "zoom": 12
          },
          {
            "opacity": 1,
            "zoom": 13
          },
          {
            "opacity": 1,
            "zoom": 14
          },
          {
            "opacity": 1,
            "zoom": 15
          },
          {
            "opacity": 1,
            "zoom": 16
          },
          {
            "opacity": 1,
            "zoom": 17
          },
          {
            "opacity": 1,
            "zoom": 18
          },
          {
            "opacity": 1,
            "zoom": 19
          },
          {
            "opacity": 1,
            "zoom": 20
          },
          {
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "admin",
          "none": [
            "country",
            "region",
            "locality",
            "district",
            "address"
          ]
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#dacabe"
          },
          {
            "opacity": 0.15,
            "zoom": 0
          },
          {
            "opacity": 0.15,
            "zoom": 1
          },
          {
            "opacity": 0.15,
            "zoom": 2
          },
          {
            "opacity": 0.15,
            "zoom": 3
          },
          {
            "opacity": 0.15,
            "zoom": 4
          },
          {
            "opacity": 0.15,
            "zoom": 5
          },
          {
            "opacity": 0.25,
            "zoom": 6
          },
          {
            "opacity": 0.5,
            "zoom": 7
          },
          {
            "opacity": 0.47,
            "zoom": 8
          },
          {
            "opacity": 0.44,
            "zoom": 9
          },
          {
            "opacity": 0.41,
            "zoom": 10
          },
          {
            "opacity": 0.38,
            "zoom": 11
          },
          {
            "opacity": 0.35,
            "zoom": 12
          },
          {
            "opacity": 0.33,
            "zoom": 13
          },
          {
            "opacity": 0.3,
            "zoom": 14
          },
          {
            "opacity": 0.28,
            "zoom": 15
          },
          {
            "opacity": 0.25,
            "zoom": 16
          },
          {
            "opacity": 0.25,
            "zoom": 17
          },
          {
            "opacity": 0.25,
            "zoom": 18
          },
          {
            "opacity": 0.25,
            "zoom": 19
          },
          {
            "opacity": 0.25,
            "zoom": 20
          },
          {
            "opacity": 0.25,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "landcover",
          "none": "vegetation"
        },
        "stylers": [
          {
            "hue": "#decfc4"
          }
        ]
      },
      {
        "tags": "vegetation",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#ccb4a4",
            "opacity": 0.1,
            "zoom": 0
          },
          {
            "color": "#ccb4a4",
            "opacity": 0.1,
            "zoom": 1
          },
          {
            "color": "#ccb4a4",
            "opacity": 0.1,
            "zoom": 2
          },
          {
            "color": "#ccb4a4",
            "opacity": 0.1,
            "zoom": 3
          },
          {
            "color": "#ccb4a4",
            "opacity": 0.1,
            "zoom": 4
          },
          {
            "color": "#ccb4a4",
            "opacity": 0.1,
            "zoom": 5
          },
          {
            "color": "#ccb4a4",
            "opacity": 0.2,
            "zoom": 6
          },
          {
            "color": "#decfc4",
            "opacity": 0.3,
            "zoom": 7
          },
          {
            "color": "#decfc4",
            "opacity": 0.4,
            "zoom": 8
          },
          {
            "color": "#decfc4",
            "opacity": 0.6,
            "zoom": 9
          },
          {
            "color": "#decfc4",
            "opacity": 0.8,
            "zoom": 10
          },
          {
            "color": "#decfc4",
            "opacity": 1,
            "zoom": 11
          },
          {
            "color": "#decfc4",
            "opacity": 1,
            "zoom": 12
          },
          {
            "color": "#decfc4",
            "opacity": 1,
            "zoom": 13
          },
          {
            "color": "#e1d4ca",
            "opacity": 1,
            "zoom": 14
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 15
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 16
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 17
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 18
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 19
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 20
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "park",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 0
          },
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 1
          },
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 2
          },
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 3
          },
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 4
          },
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 5
          },
          {
            "color": "#decfc4",
            "opacity": 0.2,
            "zoom": 6
          },
          {
            "color": "#decfc4",
            "opacity": 0.3,
            "zoom": 7
          },
          {
            "color": "#decfc4",
            "opacity": 0.4,
            "zoom": 8
          },
          {
            "color": "#decfc4",
            "opacity": 0.6,
            "zoom": 9
          },
          {
            "color": "#decfc4",
            "opacity": 0.8,
            "zoom": 10
          },
          {
            "color": "#decfc4",
            "opacity": 1,
            "zoom": 11
          },
          {
            "color": "#decfc4",
            "opacity": 1,
            "zoom": 12
          },
          {
            "color": "#decfc4",
            "opacity": 1,
            "zoom": 13
          },
          {
            "color": "#e1d4ca",
            "opacity": 1,
            "zoom": 14
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 15
          },
          {
            "color": "#e5dad1",
            "opacity": 0.9,
            "zoom": 16
          },
          {
            "color": "#e5dad1",
            "opacity": 0.8,
            "zoom": 17
          },
          {
            "color": "#e5dad1",
            "opacity": 0.7,
            "zoom": 18
          },
          {
            "color": "#e5dad1",
            "opacity": 0.7,
            "zoom": 19
          },
          {
            "color": "#e5dad1",
            "opacity": 0.7,
            "zoom": 20
          },
          {
            "color": "#e5dad1",
            "opacity": 0.7,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "national_park",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 0
          },
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 1
          },
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 2
          },
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 3
          },
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 4
          },
          {
            "color": "#decfc4",
            "opacity": 0.1,
            "zoom": 5
          },
          {
            "color": "#decfc4",
            "opacity": 0.2,
            "zoom": 6
          },
          {
            "color": "#decfc4",
            "opacity": 0.3,
            "zoom": 7
          },
          {
            "color": "#decfc4",
            "opacity": 0.4,
            "zoom": 8
          },
          {
            "color": "#decfc4",
            "opacity": 0.6,
            "zoom": 9
          },
          {
            "color": "#decfc4",
            "opacity": 0.8,
            "zoom": 10
          },
          {
            "color": "#decfc4",
            "opacity": 1,
            "zoom": 11
          },
          {
            "color": "#decfc4",
            "opacity": 1,
            "zoom": 12
          },
          {
            "color": "#decfc4",
            "opacity": 1,
            "zoom": 13
          },
          {
            "color": "#e1d4ca",
            "opacity": 1,
            "zoom": 14
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 15
          },
          {
            "color": "#e5dad1",
            "opacity": 0.7,
            "zoom": 16
          },
          {
            "color": "#e5dad1",
            "opacity": 0.7,
            "zoom": 17
          },
          {
            "color": "#e5dad1",
            "opacity": 0.7,
            "zoom": 18
          },
          {
            "color": "#e5dad1",
            "opacity": 0.7,
            "zoom": 19
          },
          {
            "color": "#e5dad1",
            "opacity": 0.7,
            "zoom": 20
          },
          {
            "color": "#e5dad1",
            "opacity": 0.7,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "cemetery",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#decfc4",
            "zoom": 0
          },
          {
            "color": "#decfc4",
            "zoom": 1
          },
          {
            "color": "#decfc4",
            "zoom": 2
          },
          {
            "color": "#decfc4",
            "zoom": 3
          },
          {
            "color": "#decfc4",
            "zoom": 4
          },
          {
            "color": "#decfc4",
            "zoom": 5
          },
          {
            "color": "#decfc4",
            "zoom": 6
          },
          {
            "color": "#decfc4",
            "zoom": 7
          },
          {
            "color": "#decfc4",
            "zoom": 8
          },
          {
            "color": "#decfc4",
            "zoom": 9
          },
          {
            "color": "#decfc4",
            "zoom": 10
          },
          {
            "color": "#decfc4",
            "zoom": 11
          },
          {
            "color": "#decfc4",
            "zoom": 12
          },
          {
            "color": "#decfc4",
            "zoom": 13
          },
          {
            "color": "#e1d4ca",
            "zoom": 14
          },
          {
            "color": "#e5dad1",
            "zoom": 15
          },
          {
            "color": "#e5dad1",
            "zoom": 16
          },
          {
            "color": "#e5dad1",
            "zoom": 17
          },
          {
            "color": "#e5dad1",
            "zoom": 18
          },
          {
            "color": "#e5dad1",
            "zoom": 19
          },
          {
            "color": "#e5dad1",
            "zoom": 20
          },
          {
            "color": "#e5dad1",
            "zoom": 21
          }
        ]
      },
      {
        "tags": "sports_ground",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 0
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 1
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 2
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 3
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 4
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 5
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 6
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 7
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 8
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 9
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 10
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 11
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 12
          },
          {
            "color": "#d5c2b4",
            "opacity": 0,
            "zoom": 13
          },
          {
            "color": "#d8c7ba",
            "opacity": 0,
            "zoom": 14
          },
          {
            "color": "#dcccc1",
            "opacity": 0.5,
            "zoom": 15
          },
          {
            "color": "#ddcdc2",
            "opacity": 1,
            "zoom": 16
          },
          {
            "color": "#ddcec3",
            "opacity": 1,
            "zoom": 17
          },
          {
            "color": "#decfc4",
            "opacity": 1,
            "zoom": 18
          },
          {
            "color": "#dfd0c6",
            "opacity": 1,
            "zoom": 19
          },
          {
            "color": "#dfd1c7",
            "opacity": 1,
            "zoom": 20
          },
          {
            "color": "#e0d2c8",
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "terrain",
        "elements": "geometry",
        "stylers": [
          {
            "hue": "#ede5de"
          },
          {
            "opacity": 0.3,
            "zoom": 0
          },
          {
            "opacity": 0.3,
            "zoom": 1
          },
          {
            "opacity": 0.3,
            "zoom": 2
          },
          {
            "opacity": 0.3,
            "zoom": 3
          },
          {
            "opacity": 0.3,
            "zoom": 4
          },
          {
            "opacity": 0.35,
            "zoom": 5
          },
          {
            "opacity": 0.4,
            "zoom": 6
          },
          {
            "opacity": 0.6,
            "zoom": 7
          },
          {
            "opacity": 0.8,
            "zoom": 8
          },
          {
            "opacity": 0.9,
            "zoom": 9
          },
          {
            "opacity": 1,
            "zoom": 10
          },
          {
            "opacity": 1,
            "zoom": 11
          },
          {
            "opacity": 1,
            "zoom": 12
          },
          {
            "opacity": 1,
            "zoom": 13
          },
          {
            "opacity": 1,
            "zoom": 14
          },
          {
            "opacity": 1,
            "zoom": 15
          },
          {
            "opacity": 1,
            "zoom": 16
          },
          {
            "opacity": 1,
            "zoom": 17
          },
          {
            "opacity": 1,
            "zoom": 18
          },
          {
            "opacity": 1,
            "zoom": 19
          },
          {
            "opacity": 1,
            "zoom": 20
          },
          {
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "geographic_line",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#a37b5c"
          }
        ]
      },
      {
        "tags": "land",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#ede5de",
            "zoom": 0
          },
          {
            "color": "#ede5de",
            "zoom": 1
          },
          {
            "color": "#ede5de",
            "zoom": 2
          },
          {
            "color": "#ede5de",
            "zoom": 3
          },
          {
            "color": "#ede5de",
            "zoom": 4
          },
          {
            "color": "#efe7e1",
            "zoom": 5
          },
          {
            "color": "#f0eae4",
            "zoom": 6
          },
          {
            "color": "#f2ece8",
            "zoom": 7
          },
          {
            "color": "#f4efeb",
            "zoom": 8
          },
          {
            "color": "#f4efeb",
            "zoom": 9
          },
          {
            "color": "#f4efeb",
            "zoom": 10
          },
          {
            "color": "#f4efeb",
            "zoom": 11
          },
          {
            "color": "#f4efeb",
            "zoom": 12
          },
          {
            "color": "#f4efeb",
            "zoom": 13
          },
          {
            "color": "#f6f2ee",
            "zoom": 14
          },
          {
            "color": "#f8f5f2",
            "zoom": 15
          },
          {
            "color": "#f8f5f2",
            "zoom": 16
          },
          {
            "color": "#f9f6f3",
            "zoom": 17
          },
          {
            "color": "#f9f6f3",
            "zoom": 18
          },
          {
            "color": "#f9f6f4",
            "zoom": 19
          },
          {
            "color": "#faf7f4",
            "zoom": 20
          },
          {
            "color": "#faf7f5",
            "zoom": 21
          }
        ]
      },
      {
        "tags": "residential",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 0
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 1
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 2
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 3
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 4
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 5
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 6
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 7
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 8
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 9
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 10
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 11
          },
          {
            "color": "#ede5de",
            "opacity": 0.5,
            "zoom": 12
          },
          {
            "color": "#ede5de",
            "opacity": 1,
            "zoom": 13
          },
          {
            "color": "#f0eae4",
            "opacity": 1,
            "zoom": 14
          },
          {
            "color": "#f4efeb",
            "opacity": 1,
            "zoom": 15
          },
          {
            "color": "#f5f0ec",
            "opacity": 1,
            "zoom": 16
          },
          {
            "color": "#f5f1ed",
            "opacity": 1,
            "zoom": 17
          },
          {
            "color": "#f6f2ee",
            "opacity": 1,
            "zoom": 18
          },
          {
            "color": "#f7f3f0",
            "opacity": 1,
            "zoom": 19
          },
          {
            "color": "#f7f4f1",
            "opacity": 1,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "locality",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#ede5de",
            "zoom": 0
          },
          {
            "color": "#ede5de",
            "zoom": 1
          },
          {
            "color": "#ede5de",
            "zoom": 2
          },
          {
            "color": "#ede5de",
            "zoom": 3
          },
          {
            "color": "#ede5de",
            "zoom": 4
          },
          {
            "color": "#ede5de",
            "zoom": 5
          },
          {
            "color": "#ede5de",
            "zoom": 6
          },
          {
            "color": "#ede5de",
            "zoom": 7
          },
          {
            "color": "#ede5de",
            "zoom": 8
          },
          {
            "color": "#ede5de",
            "zoom": 9
          },
          {
            "color": "#ede5de",
            "zoom": 10
          },
          {
            "color": "#ede5de",
            "zoom": 11
          },
          {
            "color": "#ede5de",
            "zoom": 12
          },
          {
            "color": "#ede5de",
            "zoom": 13
          },
          {
            "color": "#f0eae4",
            "zoom": 14
          },
          {
            "color": "#f4efeb",
            "zoom": 15
          },
          {
            "color": "#f5f0ec",
            "zoom": 16
          },
          {
            "color": "#f5f1ed",
            "zoom": 17
          },
          {
            "color": "#f6f2ee",
            "zoom": 18
          },
          {
            "color": "#f7f3f0",
            "zoom": 19
          },
          {
            "color": "#f7f4f1",
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "structure",
          "none": [
            "building",
            "fence"
          ]
        },
        "elements": "geometry",
        "stylers": [
          {
            "opacity": 0.9
          },
          {
            "color": "#ede5de",
            "zoom": 0
          },
          {
            "color": "#ede5de",
            "zoom": 1
          },
          {
            "color": "#ede5de",
            "zoom": 2
          },
          {
            "color": "#ede5de",
            "zoom": 3
          },
          {
            "color": "#ede5de",
            "zoom": 4
          },
          {
            "color": "#ede5de",
            "zoom": 5
          },
          {
            "color": "#ede5de",
            "zoom": 6
          },
          {
            "color": "#ede5de",
            "zoom": 7
          },
          {
            "color": "#ede5de",
            "zoom": 8
          },
          {
            "color": "#ede5de",
            "zoom": 9
          },
          {
            "color": "#ede5de",
            "zoom": 10
          },
          {
            "color": "#ede5de",
            "zoom": 11
          },
          {
            "color": "#ede5de",
            "zoom": 12
          },
          {
            "color": "#ede5de",
            "zoom": 13
          },
          {
            "color": "#f0eae4",
            "zoom": 14
          },
          {
            "color": "#f4efeb",
            "zoom": 15
          },
          {
            "color": "#f5f0ec",
            "zoom": 16
          },
          {
            "color": "#f5f1ed",
            "zoom": 17
          },
          {
            "color": "#f6f2ee",
            "zoom": 18
          },
          {
            "color": "#f7f3f0",
            "zoom": 19
          },
          {
            "color": "#f7f4f1",
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "zoom": 21
          }
        ]
      },
      {
        "tags": "building",
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#e3d7ce"
          },
          {
            "opacity": 0.7,
            "zoom": 0
          },
          {
            "opacity": 0.7,
            "zoom": 1
          },
          {
            "opacity": 0.7,
            "zoom": 2
          },
          {
            "opacity": 0.7,
            "zoom": 3
          },
          {
            "opacity": 0.7,
            "zoom": 4
          },
          {
            "opacity": 0.7,
            "zoom": 5
          },
          {
            "opacity": 0.7,
            "zoom": 6
          },
          {
            "opacity": 0.7,
            "zoom": 7
          },
          {
            "opacity": 0.7,
            "zoom": 8
          },
          {
            "opacity": 0.7,
            "zoom": 9
          },
          {
            "opacity": 0.7,
            "zoom": 10
          },
          {
            "opacity": 0.7,
            "zoom": 11
          },
          {
            "opacity": 0.7,
            "zoom": 12
          },
          {
            "opacity": 0.7,
            "zoom": 13
          },
          {
            "opacity": 0.7,
            "zoom": 14
          },
          {
            "opacity": 0.7,
            "zoom": 15
          },
          {
            "opacity": 0.9,
            "zoom": 16
          },
          {
            "opacity": 0.6,
            "zoom": 17
          },
          {
            "opacity": 0.6,
            "zoom": 18
          },
          {
            "opacity": 0.6,
            "zoom": 19
          },
          {
            "opacity": 0.6,
            "zoom": 20
          },
          {
            "opacity": 0.6,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "building",
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#d5c1b4"
          },
          {
            "opacity": 0.5,
            "zoom": 0
          },
          {
            "opacity": 0.5,
            "zoom": 1
          },
          {
            "opacity": 0.5,
            "zoom": 2
          },
          {
            "opacity": 0.5,
            "zoom": 3
          },
          {
            "opacity": 0.5,
            "zoom": 4
          },
          {
            "opacity": 0.5,
            "zoom": 5
          },
          {
            "opacity": 0.5,
            "zoom": 6
          },
          {
            "opacity": 0.5,
            "zoom": 7
          },
          {
            "opacity": 0.5,
            "zoom": 8
          },
          {
            "opacity": 0.5,
            "zoom": 9
          },
          {
            "opacity": 0.5,
            "zoom": 10
          },
          {
            "opacity": 0.5,
            "zoom": 11
          },
          {
            "opacity": 0.5,
            "zoom": 12
          },
          {
            "opacity": 0.5,
            "zoom": 13
          },
          {
            "opacity": 0.5,
            "zoom": 14
          },
          {
            "opacity": 0.5,
            "zoom": 15
          },
          {
            "opacity": 0.5,
            "zoom": 16
          },
          {
            "opacity": 1,
            "zoom": 17
          },
          {
            "opacity": 1,
            "zoom": 18
          },
          {
            "opacity": 1,
            "zoom": 19
          },
          {
            "opacity": 1,
            "zoom": 20
          },
          {
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "urban_area",
          "none": [
            "residential",
            "industrial",
            "cemetery",
            "park",
            "medical",
            "sports_ground",
            "beach",
            "construction_site"
          ]
        },
        "elements": "geometry",
        "stylers": [
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 0
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 1
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 2
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 3
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 4
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 5
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 6
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 7
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 8
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 9
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 10
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 11
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 12
          },
          {
            "color": "#e5dad1",
            "opacity": 1,
            "zoom": 13
          },
          {
            "color": "#e9e0d9",
            "opacity": 1,
            "zoom": 14
          },
          {
            "color": "#eee7e2",
            "opacity": 1,
            "zoom": 15
          },
          {
            "color": "#f3eeea",
            "opacity": 0.67,
            "zoom": 16
          },
          {
            "color": "#f8f5f2",
            "opacity": 0.33,
            "zoom": 17
          },
          {
            "color": "#f8f5f2",
            "opacity": 0,
            "zoom": 18
          },
          {
            "color": "#f8f5f2",
            "opacity": 0,
            "zoom": 19
          },
          {
            "color": "#f8f5f2",
            "opacity": 0,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "opacity": 0,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "poi",
        "elements": "label.icon",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          },
          {
            "tertiary-color": "#ffffff"
          }
        ]
      },
      {
        "tags": "poi",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#624937"
          }
        ]
      },
      {
        "tags": "poi",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "outdoor",
        "elements": "label.icon",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          },
          {
            "tertiary-color": "#ffffff"
          }
        ]
      },
      {
        "tags": "outdoor",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#624937"
          }
        ]
      },
      {
        "tags": "outdoor",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "park",
        "elements": "label.icon",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          },
          {
            "tertiary-color": "#ffffff"
          }
        ]
      },
      {
        "tags": "park",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#624937"
          }
        ]
      },
      {
        "tags": "park",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "cemetery",
        "elements": "label.icon",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          },
          {
            "tertiary-color": "#ffffff"
          }
        ]
      },
      {
        "tags": "cemetery",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#624937"
          }
        ]
      },
      {
        "tags": "cemetery",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "beach",
        "elements": "label.icon",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          },
          {
            "tertiary-color": "#ffffff"
          }
        ]
      },
      {
        "tags": "beach",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#624937"
          }
        ]
      },
      {
        "tags": "beach",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "medical",
        "elements": "label.icon",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          },
          {
            "tertiary-color": "#ffffff"
          }
        ]
      },
      {
        "tags": "medical",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#624937"
          }
        ]
      },
      {
        "tags": "medical",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "shopping",
        "elements": "label.icon",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          },
          {
            "tertiary-color": "#ffffff"
          }
        ]
      },
      {
        "tags": "shopping",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#624937"
          }
        ]
      },
      {
        "tags": "shopping",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "commercial_services",
        "elements": "label.icon",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          },
          {
            "tertiary-color": "#ffffff"
          }
        ]
      },
      {
        "tags": "commercial_services",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#624937"
          }
        ]
      },
      {
        "tags": "commercial_services",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "food_and_drink",
        "elements": "label.icon",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          },
          {
            "tertiary-color": "#ffffff"
          }
        ]
      },
      {
        "tags": "food_and_drink",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#624937"
          }
        ]
      },
      {
        "tags": "food_and_drink",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "road",
        "elements": "label.icon",
        "types": "point",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          },
          {
            "tertiary-color": "#ffffff"
          }
        ]
      },
      {
        "tags": "road",
        "elements": "label.text.fill",
        "types": "point",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "tags": "entrance",
        "elements": "label.icon",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          },
          {
            "hue": "#a77f62"
          }
        ]
      },
      {
        "tags": "locality",
        "elements": "label.icon",
        "stylers": [
          {
            "color": "#a77f62"
          },
          {
            "secondary-color": "#ffffff"
          }
        ]
      },
      {
        "tags": "country",
        "elements": "label.text.fill",
        "stylers": [
          {
            "opacity": 0.8
          },
          {
            "color": "#936c53"
          }
        ]
      },
      {
        "tags": "country",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "region",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#936c53"
          },
          {
            "opacity": 0.8
          }
        ]
      },
      {
        "tags": "region",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "district",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#936c53"
          },
          {
            "opacity": 0.8
          }
        ]
      },
      {
        "tags": "district",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": {
          "any": "admin",
          "none": [
            "country",
            "region",
            "locality",
            "district",
            "address"
          ]
        },
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#936c53"
          }
        ]
      },
      {
        "tags": {
          "any": "admin",
          "none": [
            "country",
            "region",
            "locality",
            "district",
            "address"
          ]
        },
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "locality",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#624937",
            "zoom": 0
          },
          {
            "color": "#624937",
            "zoom": 1
          },
          {
            "color": "#624937",
            "zoom": 2
          },
          {
            "color": "#624937",
            "zoom": 3
          },
          {
            "color": "#624937",
            "zoom": 4
          },
          {
            "color": "#5f4736",
            "zoom": 5
          },
          {
            "color": "#5d4534",
            "zoom": 6
          },
          {
            "color": "#5a4333",
            "zoom": 7
          },
          {
            "color": "#574131",
            "zoom": 8
          },
          {
            "color": "#553f30",
            "zoom": 9
          },
          {
            "color": "#523d2e",
            "zoom": 10
          },
          {
            "color": "#523d2e",
            "zoom": 11
          },
          {
            "color": "#523d2e",
            "zoom": 12
          },
          {
            "color": "#523d2e",
            "zoom": 13
          },
          {
            "color": "#523d2e",
            "zoom": 14
          },
          {
            "color": "#523d2e",
            "zoom": 15
          },
          {
            "color": "#523d2e",
            "zoom": 16
          },
          {
            "color": "#523d2e",
            "zoom": 17
          },
          {
            "color": "#523d2e",
            "zoom": 18
          },
          {
            "color": "#523d2e",
            "zoom": 19
          },
          {
            "color": "#523d2e",
            "zoom": 20
          },
          {
            "color": "#523d2e",
            "zoom": 21
          }
        ]
      },
      {
        "tags": "locality",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "road",
        "elements": "label.text.fill",
        "types": "polyline",
        "stylers": [
          {
            "color": "#725540"
          }
        ]
      },
      {
        "tags": "road",
        "elements": "label.text.outline",
        "types": "polyline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "road",
        "elements": "geometry.fill.pattern",
        "types": "polyline",
        "stylers": [
          {
            "scale": 1
          },
          {
            "color": "#ac876c"
          }
        ]
      },
      {
        "tags": "road",
        "elements": "label.text.fill",
        "types": "point",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "tags": "structure",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#836249"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "structure",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "address",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#836249"
          },
          {
            "opacity": 0.9,
            "zoom": 0
          },
          {
            "opacity": 0.9,
            "zoom": 1
          },
          {
            "opacity": 0.9,
            "zoom": 2
          },
          {
            "opacity": 0.9,
            "zoom": 3
          },
          {
            "opacity": 0.9,
            "zoom": 4
          },
          {
            "opacity": 0.9,
            "zoom": 5
          },
          {
            "opacity": 0.9,
            "zoom": 6
          },
          {
            "opacity": 0.9,
            "zoom": 7
          },
          {
            "opacity": 0.9,
            "zoom": 8
          },
          {
            "opacity": 0.9,
            "zoom": 9
          },
          {
            "opacity": 0.9,
            "zoom": 10
          },
          {
            "opacity": 0.9,
            "zoom": 11
          },
          {
            "opacity": 0.9,
            "zoom": 12
          },
          {
            "opacity": 0.9,
            "zoom": 13
          },
          {
            "opacity": 0.9,
            "zoom": 14
          },
          {
            "opacity": 0.9,
            "zoom": 15
          },
          {
            "opacity": 0.9,
            "zoom": 16
          },
          {
            "opacity": 1,
            "zoom": 17
          },
          {
            "opacity": 1,
            "zoom": 18
          },
          {
            "opacity": 1,
            "zoom": 19
          },
          {
            "opacity": 1,
            "zoom": 20
          },
          {
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "address",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5
          }
        ]
      },
      {
        "tags": "landscape",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#936c53",
            "opacity": 1,
            "zoom": 0
          },
          {
            "color": "#936c53",
            "opacity": 1,
            "zoom": 1
          },
          {
            "color": "#936c53",
            "opacity": 1,
            "zoom": 2
          },
          {
            "color": "#936c53",
            "opacity": 1,
            "zoom": 3
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 4
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 5
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 6
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 7
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 8
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 9
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 10
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 11
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 12
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 13
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 14
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 15
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 16
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 17
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 18
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 19
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 20
          },
          {
            "color": "#836249",
            "opacity": 0.5,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "landscape",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.5,
            "zoom": 0
          },
          {
            "opacity": 0.5,
            "zoom": 1
          },
          {
            "opacity": 0.5,
            "zoom": 2
          },
          {
            "opacity": 0.5,
            "zoom": 3
          },
          {
            "opacity": 0,
            "zoom": 4
          },
          {
            "opacity": 0,
            "zoom": 5
          },
          {
            "opacity": 0,
            "zoom": 6
          },
          {
            "opacity": 0,
            "zoom": 7
          },
          {
            "opacity": 0,
            "zoom": 8
          },
          {
            "opacity": 0,
            "zoom": 9
          },
          {
            "opacity": 0,
            "zoom": 10
          },
          {
            "opacity": 0,
            "zoom": 11
          },
          {
            "opacity": 0,
            "zoom": 12
          },
          {
            "opacity": 0,
            "zoom": 13
          },
          {
            "opacity": 0,
            "zoom": 14
          },
          {
            "opacity": 0,
            "zoom": 15
          },
          {
            "opacity": 0,
            "zoom": 16
          },
          {
            "opacity": 0,
            "zoom": 17
          },
          {
            "opacity": 0,
            "zoom": 18
          },
          {
            "opacity": 0,
            "zoom": 19
          },
          {
            "opacity": 0,
            "zoom": 20
          },
          {
            "opacity": 0,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "water",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#86644b"
          },
          {
            "opacity": 0.8
          }
        ]
      },
      {
        "tags": "water",
        "elements": "label.text.outline",
        "types": "polyline",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "opacity": 0.2
          }
        ]
      },
      {
        "tags": {
          "any": "road_1",
          "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "scale": 0,
            "zoom": 0
          },
          {
            "scale": 0,
            "zoom": 1
          },
          {
            "scale": 0,
            "zoom": 2
          },
          {
            "scale": 0,
            "zoom": 3
          },
          {
            "scale": 0,
            "zoom": 4
          },
          {
            "scale": 0,
            "zoom": 5
          },
          {
            "scale": 2.97,
            "zoom": 6
          },
          {
            "scale": 3.19,
            "zoom": 7
          },
          {
            "scale": 3.53,
            "zoom": 8
          },
          {
            "scale": 4,
            "zoom": 9
          },
          {
            "scale": 3.61,
            "zoom": 10
          },
          {
            "scale": 3.06,
            "zoom": 11
          },
          {
            "scale": 2.64,
            "zoom": 12
          },
          {
            "scale": 2.27,
            "zoom": 13
          },
          {
            "scale": 2.03,
            "zoom": 14
          },
          {
            "scale": 1.9,
            "zoom": 15
          },
          {
            "scale": 1.86,
            "zoom": 16
          },
          {
            "scale": 1.48,
            "zoom": 17
          },
          {
            "scale": 1.21,
            "zoom": 18
          },
          {
            "scale": 1.04,
            "zoom": 19
          },
          {
            "scale": 0.94,
            "zoom": 20
          },
          {
            "scale": 0.9,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_1"
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 0
          },
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 1
          },
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 2
          },
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 3
          },
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 4
          },
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 5
          },
          {
            "color": "#00000000",
            "scale": 3.05,
            "zoom": 6
          },
          {
            "color": "#00000000",
            "scale": 3.05,
            "zoom": 7
          },
          {
            "color": "#e9e0d8",
            "scale": 3.15,
            "zoom": 8
          },
          {
            "color": "#ede5de",
            "scale": 3.37,
            "zoom": 9
          },
          {
            "color": "#ede5de",
            "scale": 3.36,
            "zoom": 10
          },
          {
            "color": "#ede5de",
            "scale": 3.17,
            "zoom": 11
          },
          {
            "color": "#ede5de",
            "scale": 3,
            "zoom": 12
          },
          {
            "color": "#ede5de",
            "scale": 2.8,
            "zoom": 13
          },
          {
            "color": "#f1eae5",
            "scale": 2.66,
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "scale": 2.61,
            "zoom": 15
          },
          {
            "color": "#f2ece7",
            "scale": 2.64,
            "zoom": 16
          },
          {
            "color": "#f3eeea",
            "scale": 2.14,
            "zoom": 17
          },
          {
            "color": "#f5f0ec",
            "scale": 1.79,
            "zoom": 18
          },
          {
            "color": "#f6f2ef",
            "scale": 1.55,
            "zoom": 19
          },
          {
            "color": "#f7f3f0",
            "scale": 1.41,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "scale": 1.35,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_2",
          "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "scale": 0,
            "zoom": 0
          },
          {
            "scale": 0,
            "zoom": 1
          },
          {
            "scale": 0,
            "zoom": 2
          },
          {
            "scale": 0,
            "zoom": 3
          },
          {
            "scale": 0,
            "zoom": 4
          },
          {
            "scale": 0,
            "zoom": 5
          },
          {
            "scale": 2.97,
            "zoom": 6
          },
          {
            "scale": 3.19,
            "zoom": 7
          },
          {
            "scale": 3.53,
            "zoom": 8
          },
          {
            "scale": 4,
            "zoom": 9
          },
          {
            "scale": 3.61,
            "zoom": 10
          },
          {
            "scale": 3.06,
            "zoom": 11
          },
          {
            "scale": 2.64,
            "zoom": 12
          },
          {
            "scale": 2.27,
            "zoom": 13
          },
          {
            "scale": 2.03,
            "zoom": 14
          },
          {
            "scale": 1.9,
            "zoom": 15
          },
          {
            "scale": 1.86,
            "zoom": 16
          },
          {
            "scale": 1.48,
            "zoom": 17
          },
          {
            "scale": 1.21,
            "zoom": 18
          },
          {
            "scale": 1.04,
            "zoom": 19
          },
          {
            "scale": 0.94,
            "zoom": 20
          },
          {
            "scale": 0.9,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_2"
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 0
          },
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 1
          },
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 2
          },
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 3
          },
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 4
          },
          {
            "color": "#00000000",
            "scale": 1.4,
            "zoom": 5
          },
          {
            "color": "#00000000",
            "scale": 3.05,
            "zoom": 6
          },
          {
            "color": "#00000000",
            "scale": 3.05,
            "zoom": 7
          },
          {
            "color": "#e9e0d8",
            "scale": 3.15,
            "zoom": 8
          },
          {
            "color": "#ede5de",
            "scale": 3.37,
            "zoom": 9
          },
          {
            "color": "#ede5de",
            "scale": 3.36,
            "zoom": 10
          },
          {
            "color": "#ede5de",
            "scale": 3.17,
            "zoom": 11
          },
          {
            "color": "#ede5de",
            "scale": 3,
            "zoom": 12
          },
          {
            "color": "#ede5de",
            "scale": 2.8,
            "zoom": 13
          },
          {
            "color": "#f1eae5",
            "scale": 2.66,
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "scale": 2.61,
            "zoom": 15
          },
          {
            "color": "#f2ece7",
            "scale": 2.64,
            "zoom": 16
          },
          {
            "color": "#f3eeea",
            "scale": 2.14,
            "zoom": 17
          },
          {
            "color": "#f5f0ec",
            "scale": 1.79,
            "zoom": 18
          },
          {
            "color": "#f6f2ef",
            "scale": 1.55,
            "zoom": 19
          },
          {
            "color": "#f7f3f0",
            "scale": 1.41,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "scale": 1.35,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_3",
          "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "scale": 0,
            "zoom": 0
          },
          {
            "scale": 0,
            "zoom": 1
          },
          {
            "scale": 0,
            "zoom": 2
          },
          {
            "scale": 0,
            "zoom": 3
          },
          {
            "scale": 0,
            "zoom": 4
          },
          {
            "scale": 0,
            "zoom": 5
          },
          {
            "scale": 0,
            "zoom": 6
          },
          {
            "scale": 0,
            "zoom": 7
          },
          {
            "scale": 0,
            "zoom": 8
          },
          {
            "scale": 2.51,
            "zoom": 9
          },
          {
            "scale": 2.62,
            "zoom": 10
          },
          {
            "scale": 1.68,
            "zoom": 11
          },
          {
            "scale": 1.67,
            "zoom": 12
          },
          {
            "scale": 1.38,
            "zoom": 13
          },
          {
            "scale": 1.19,
            "zoom": 14
          },
          {
            "scale": 1.08,
            "zoom": 15
          },
          {
            "scale": 1.04,
            "zoom": 16
          },
          {
            "scale": 0.91,
            "zoom": 17
          },
          {
            "scale": 0.84,
            "zoom": 18
          },
          {
            "scale": 0.82,
            "zoom": 19
          },
          {
            "scale": 0.84,
            "zoom": 20
          },
          {
            "scale": 0.9,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_3"
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#ffffff",
            "scale": 1.6,
            "zoom": 0
          },
          {
            "color": "#ffffff",
            "scale": 1.6,
            "zoom": 1
          },
          {
            "color": "#ffffff",
            "scale": 1.6,
            "zoom": 2
          },
          {
            "color": "#ffffff",
            "scale": 1.6,
            "zoom": 3
          },
          {
            "color": "#ffffff",
            "scale": 1.6,
            "zoom": 4
          },
          {
            "color": "#ffffff",
            "scale": 1.6,
            "zoom": 5
          },
          {
            "color": "#ffffff",
            "scale": 1.6,
            "zoom": 6
          },
          {
            "color": "#ffffff",
            "scale": 1.6,
            "zoom": 7
          },
          {
            "color": "#ffffff",
            "scale": 1.29,
            "zoom": 8
          },
          {
            "color": "#ede5de",
            "scale": 4.21,
            "zoom": 9
          },
          {
            "color": "#ede5de",
            "scale": 2.74,
            "zoom": 10
          },
          {
            "color": "#ede5de",
            "scale": 2.04,
            "zoom": 11
          },
          {
            "color": "#ede5de",
            "scale": 2.13,
            "zoom": 12
          },
          {
            "color": "#ede5de",
            "scale": 1.88,
            "zoom": 13
          },
          {
            "color": "#f1eae5",
            "scale": 1.7,
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "scale": 1.59,
            "zoom": 15
          },
          {
            "color": "#f2ece7",
            "scale": 1.55,
            "zoom": 16
          },
          {
            "color": "#f3eeea",
            "scale": 1.37,
            "zoom": 17
          },
          {
            "color": "#f5f0ec",
            "scale": 1.27,
            "zoom": 18
          },
          {
            "color": "#f6f2ef",
            "scale": 1.23,
            "zoom": 19
          },
          {
            "color": "#f7f3f0",
            "scale": 1.26,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "scale": 1.35,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_4",
          "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "scale": 0,
            "zoom": 0
          },
          {
            "scale": 0,
            "zoom": 1
          },
          {
            "scale": 0,
            "zoom": 2
          },
          {
            "scale": 0,
            "zoom": 3
          },
          {
            "scale": 0,
            "zoom": 4
          },
          {
            "scale": 0,
            "zoom": 5
          },
          {
            "scale": 0,
            "zoom": 6
          },
          {
            "scale": 0,
            "zoom": 7
          },
          {
            "scale": 0,
            "zoom": 8
          },
          {
            "scale": 0,
            "zoom": 9
          },
          {
            "scale": 1.69,
            "zoom": 10
          },
          {
            "scale": 1.26,
            "zoom": 11
          },
          {
            "scale": 1.41,
            "zoom": 12
          },
          {
            "scale": 1.19,
            "zoom": 13
          },
          {
            "scale": 1.04,
            "zoom": 14
          },
          {
            "scale": 0.97,
            "zoom": 15
          },
          {
            "scale": 1.15,
            "zoom": 16
          },
          {
            "scale": 0.99,
            "zoom": 17
          },
          {
            "scale": 0.89,
            "zoom": 18
          },
          {
            "scale": 0.85,
            "zoom": 19
          },
          {
            "scale": 0.85,
            "zoom": 20
          },
          {
            "scale": 0.9,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_4"
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 0
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 1
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 2
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 3
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 4
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 5
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 6
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 7
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 8
          },
          {
            "color": "#ffffff",
            "scale": 1.12,
            "zoom": 9
          },
          {
            "color": "#ede5de",
            "scale": 1.9,
            "zoom": 10
          },
          {
            "color": "#ede5de",
            "scale": 1.62,
            "zoom": 11
          },
          {
            "color": "#ede5de",
            "scale": 1.83,
            "zoom": 12
          },
          {
            "color": "#ede5de",
            "scale": 1.64,
            "zoom": 13
          },
          {
            "color": "#f1eae5",
            "scale": 1.51,
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "scale": 1.44,
            "zoom": 15
          },
          {
            "color": "#f2ece7",
            "scale": 1.69,
            "zoom": 16
          },
          {
            "color": "#f3eeea",
            "scale": 1.47,
            "zoom": 17
          },
          {
            "color": "#f5f0ec",
            "scale": 1.34,
            "zoom": 18
          },
          {
            "color": "#f6f2ef",
            "scale": 1.28,
            "zoom": 19
          },
          {
            "color": "#f7f3f0",
            "scale": 1.28,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "scale": 1.34,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_5",
          "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "scale": 0,
            "zoom": 0
          },
          {
            "scale": 0,
            "zoom": 1
          },
          {
            "scale": 0,
            "zoom": 2
          },
          {
            "scale": 0,
            "zoom": 3
          },
          {
            "scale": 0,
            "zoom": 4
          },
          {
            "scale": 0,
            "zoom": 5
          },
          {
            "scale": 0,
            "zoom": 6
          },
          {
            "scale": 0,
            "zoom": 7
          },
          {
            "scale": 0,
            "zoom": 8
          },
          {
            "scale": 0,
            "zoom": 9
          },
          {
            "scale": 0,
            "zoom": 10
          },
          {
            "scale": 0,
            "zoom": 11
          },
          {
            "scale": 1.25,
            "zoom": 12
          },
          {
            "scale": 0.95,
            "zoom": 13
          },
          {
            "scale": 0.81,
            "zoom": 14
          },
          {
            "scale": 0.95,
            "zoom": 15
          },
          {
            "scale": 1.1,
            "zoom": 16
          },
          {
            "scale": 0.93,
            "zoom": 17
          },
          {
            "scale": 0.85,
            "zoom": 18
          },
          {
            "scale": 0.82,
            "zoom": 19
          },
          {
            "scale": 0.84,
            "zoom": 20
          },
          {
            "scale": 0.9,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_5"
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 0
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 1
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 2
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 3
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 4
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 5
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 6
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 7
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 8
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 9
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 10
          },
          {
            "color": "#ffffff",
            "scale": 0.62,
            "zoom": 11
          },
          {
            "color": "#ede5de",
            "scale": 1.61,
            "zoom": 12
          },
          {
            "color": "#ede5de",
            "scale": 1.36,
            "zoom": 13
          },
          {
            "color": "#f1eae5",
            "scale": 1.22,
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "scale": 1.41,
            "zoom": 15
          },
          {
            "color": "#f2ece7",
            "scale": 1.63,
            "zoom": 16
          },
          {
            "color": "#f3eeea",
            "scale": 1.4,
            "zoom": 17
          },
          {
            "color": "#f5f0ec",
            "scale": 1.27,
            "zoom": 18
          },
          {
            "color": "#f6f2ef",
            "scale": 1.23,
            "zoom": 19
          },
          {
            "color": "#f7f3f0",
            "scale": 1.25,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "scale": 1.34,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_6",
          "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "scale": 0,
            "zoom": 0
          },
          {
            "scale": 0,
            "zoom": 1
          },
          {
            "scale": 0,
            "zoom": 2
          },
          {
            "scale": 0,
            "zoom": 3
          },
          {
            "scale": 0,
            "zoom": 4
          },
          {
            "scale": 0,
            "zoom": 5
          },
          {
            "scale": 0,
            "zoom": 6
          },
          {
            "scale": 0,
            "zoom": 7
          },
          {
            "scale": 0,
            "zoom": 8
          },
          {
            "scale": 0,
            "zoom": 9
          },
          {
            "scale": 0,
            "zoom": 10
          },
          {
            "scale": 0,
            "zoom": 11
          },
          {
            "scale": 0,
            "zoom": 12
          },
          {
            "scale": 2.25,
            "zoom": 13
          },
          {
            "scale": 1.27,
            "zoom": 14
          },
          {
            "scale": 1.25,
            "zoom": 15
          },
          {
            "scale": 1.31,
            "zoom": 16
          },
          {
            "scale": 1.04,
            "zoom": 17
          },
          {
            "scale": 0.9,
            "zoom": 18
          },
          {
            "scale": 0.85,
            "zoom": 19
          },
          {
            "scale": 0.85,
            "zoom": 20
          },
          {
            "scale": 0.9,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_6"
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 0
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 1
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 2
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 3
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 4
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 5
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 6
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 7
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 8
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 9
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 10
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 11
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 12
          },
          {
            "color": "#ede5de",
            "scale": 2.31,
            "zoom": 13
          },
          {
            "color": "#f1eae5",
            "scale": 1.7,
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "scale": 1.76,
            "zoom": 15
          },
          {
            "color": "#f2ece7",
            "scale": 1.89,
            "zoom": 16
          },
          {
            "color": "#f3eeea",
            "scale": 1.55,
            "zoom": 17
          },
          {
            "color": "#f5f0ec",
            "scale": 1.36,
            "zoom": 18
          },
          {
            "color": "#f6f2ef",
            "scale": 1.27,
            "zoom": 19
          },
          {
            "color": "#f7f3f0",
            "scale": 1.27,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "scale": 1.34,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_7",
          "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "scale": 0,
            "zoom": 0
          },
          {
            "scale": 0,
            "zoom": 1
          },
          {
            "scale": 0,
            "zoom": 2
          },
          {
            "scale": 0,
            "zoom": 3
          },
          {
            "scale": 0,
            "zoom": 4
          },
          {
            "scale": 0,
            "zoom": 5
          },
          {
            "scale": 0,
            "zoom": 6
          },
          {
            "scale": 0,
            "zoom": 7
          },
          {
            "scale": 0,
            "zoom": 8
          },
          {
            "scale": 0,
            "zoom": 9
          },
          {
            "scale": 0,
            "zoom": 10
          },
          {
            "scale": 0,
            "zoom": 11
          },
          {
            "scale": 0,
            "zoom": 12
          },
          {
            "scale": 0,
            "zoom": 13
          },
          {
            "scale": 0.9,
            "zoom": 14
          },
          {
            "scale": 0.78,
            "zoom": 15
          },
          {
            "scale": 0.88,
            "zoom": 16
          },
          {
            "scale": 0.8,
            "zoom": 17
          },
          {
            "scale": 0.78,
            "zoom": 18
          },
          {
            "scale": 0.79,
            "zoom": 19
          },
          {
            "scale": 0.83,
            "zoom": 20
          },
          {
            "scale": 0.9,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_7"
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 0
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 1
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 2
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 3
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 4
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 5
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 6
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 7
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 8
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 9
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 10
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 11
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 12
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 13
          },
          {
            "color": "#f1eae5",
            "scale": 1.31,
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "scale": 1.19,
            "zoom": 15
          },
          {
            "color": "#f2ece7",
            "scale": 1.31,
            "zoom": 16
          },
          {
            "color": "#f3eeea",
            "scale": 1.21,
            "zoom": 17
          },
          {
            "color": "#f5f0ec",
            "scale": 1.17,
            "zoom": 18
          },
          {
            "color": "#f6f2ef",
            "scale": 1.18,
            "zoom": 19
          },
          {
            "color": "#f7f3f0",
            "scale": 1.23,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "scale": 1.33,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_minor",
          "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "scale": 0,
            "zoom": 0
          },
          {
            "scale": 0,
            "zoom": 1
          },
          {
            "scale": 0,
            "zoom": 2
          },
          {
            "scale": 0,
            "zoom": 3
          },
          {
            "scale": 0,
            "zoom": 4
          },
          {
            "scale": 0,
            "zoom": 5
          },
          {
            "scale": 0,
            "zoom": 6
          },
          {
            "scale": 0,
            "zoom": 7
          },
          {
            "scale": 0,
            "zoom": 8
          },
          {
            "scale": 0,
            "zoom": 9
          },
          {
            "scale": 0,
            "zoom": 10
          },
          {
            "scale": 0,
            "zoom": 11
          },
          {
            "scale": 0,
            "zoom": 12
          },
          {
            "scale": 0,
            "zoom": 13
          },
          {
            "scale": 0,
            "zoom": 14
          },
          {
            "scale": 0,
            "zoom": 15
          },
          {
            "scale": 0.9,
            "zoom": 16
          },
          {
            "scale": 0.9,
            "zoom": 17
          },
          {
            "scale": 0.9,
            "zoom": 18
          },
          {
            "scale": 0.9,
            "zoom": 19
          },
          {
            "scale": 0.9,
            "zoom": 20
          },
          {
            "scale": 0.9,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_minor"
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 0
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 1
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 2
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 3
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 4
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 5
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 6
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 7
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 8
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 9
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 10
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 11
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 12
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 13
          },
          {
            "color": "#f1eae5",
            "scale": 0.4,
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "scale": 0.4,
            "zoom": 15
          },
          {
            "color": "#f2ece7",
            "scale": 1.4,
            "zoom": 16
          },
          {
            "color": "#f3eeea",
            "scale": 1.27,
            "zoom": 17
          },
          {
            "color": "#f5f0ec",
            "scale": 1.27,
            "zoom": 18
          },
          {
            "color": "#f6f2ef",
            "scale": 1.29,
            "zoom": 19
          },
          {
            "color": "#f7f3f0",
            "scale": 1.31,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "scale": 1.32,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_unclassified",
          "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "scale": 0,
            "zoom": 0
          },
          {
            "scale": 0,
            "zoom": 1
          },
          {
            "scale": 0,
            "zoom": 2
          },
          {
            "scale": 0,
            "zoom": 3
          },
          {
            "scale": 0,
            "zoom": 4
          },
          {
            "scale": 0,
            "zoom": 5
          },
          {
            "scale": 0,
            "zoom": 6
          },
          {
            "scale": 0,
            "zoom": 7
          },
          {
            "scale": 0,
            "zoom": 8
          },
          {
            "scale": 0,
            "zoom": 9
          },
          {
            "scale": 0,
            "zoom": 10
          },
          {
            "scale": 0,
            "zoom": 11
          },
          {
            "scale": 0,
            "zoom": 12
          },
          {
            "scale": 0,
            "zoom": 13
          },
          {
            "scale": 0,
            "zoom": 14
          },
          {
            "scale": 0,
            "zoom": 15
          },
          {
            "scale": 0.9,
            "zoom": 16
          },
          {
            "scale": 0.9,
            "zoom": 17
          },
          {
            "scale": 0.9,
            "zoom": 18
          },
          {
            "scale": 0.9,
            "zoom": 19
          },
          {
            "scale": 0.9,
            "zoom": 20
          },
          {
            "scale": 0.9,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "road_unclassified"
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 0
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 1
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 2
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 3
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 4
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 5
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 6
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 7
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 8
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 9
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 10
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 11
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 12
          },
          {
            "color": "#ffffff",
            "scale": 0.4,
            "zoom": 13
          },
          {
            "color": "#f1eae5",
            "scale": 0.4,
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "scale": 0.4,
            "zoom": 15
          },
          {
            "color": "#f2ece7",
            "scale": 1.4,
            "zoom": 16
          },
          {
            "color": "#f3eeea",
            "scale": 1.27,
            "zoom": 17
          },
          {
            "color": "#f5f0ec",
            "scale": 1.27,
            "zoom": 18
          },
          {
            "color": "#f6f2ef",
            "scale": 1.29,
            "zoom": 19
          },
          {
            "color": "#f7f3f0",
            "scale": 1.31,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "scale": 1.32,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "all": "is_tunnel",
          "none": "path"
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#e9e0d8",
            "zoom": 0
          },
          {
            "color": "#e9e0d8",
            "zoom": 1
          },
          {
            "color": "#e9e0d8",
            "zoom": 2
          },
          {
            "color": "#e9e0d8",
            "zoom": 3
          },
          {
            "color": "#e9e0d8",
            "zoom": 4
          },
          {
            "color": "#e9e0d8",
            "zoom": 5
          },
          {
            "color": "#e9e0d8",
            "zoom": 6
          },
          {
            "color": "#e9e0d8",
            "zoom": 7
          },
          {
            "color": "#e9e0d8",
            "zoom": 8
          },
          {
            "color": "#e9e0d8",
            "zoom": 9
          },
          {
            "color": "#e9e0d8",
            "zoom": 10
          },
          {
            "color": "#e9e0d8",
            "zoom": 11
          },
          {
            "color": "#e9e0d8",
            "zoom": 12
          },
          {
            "color": "#e9e0d8",
            "zoom": 13
          },
          {
            "color": "#ede5de",
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "zoom": 15
          },
          {
            "color": "#f1ebe6",
            "zoom": 16
          },
          {
            "color": "#f2ece7",
            "zoom": 17
          },
          {
            "color": "#f2ece8",
            "zoom": 18
          },
          {
            "color": "#f3ede9",
            "zoom": 19
          },
          {
            "color": "#f3eeea",
            "zoom": 20
          },
          {
            "color": "#f4efeb",
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "all": "path",
          "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#c2a793"
          }
        ]
      },
      {
        "tags": {
          "all": "path",
          "none": "is_tunnel"
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "opacity": 0.7
          },
          {
            "color": "#ede5de",
            "zoom": 0
          },
          {
            "color": "#ede5de",
            "zoom": 1
          },
          {
            "color": "#ede5de",
            "zoom": 2
          },
          {
            "color": "#ede5de",
            "zoom": 3
          },
          {
            "color": "#ede5de",
            "zoom": 4
          },
          {
            "color": "#ede5de",
            "zoom": 5
          },
          {
            "color": "#ede5de",
            "zoom": 6
          },
          {
            "color": "#ede5de",
            "zoom": 7
          },
          {
            "color": "#ede5de",
            "zoom": 8
          },
          {
            "color": "#ede5de",
            "zoom": 9
          },
          {
            "color": "#ede5de",
            "zoom": 10
          },
          {
            "color": "#ede5de",
            "zoom": 11
          },
          {
            "color": "#ede5de",
            "zoom": 12
          },
          {
            "color": "#ede5de",
            "zoom": 13
          },
          {
            "color": "#f0eae4",
            "zoom": 14
          },
          {
            "color": "#f4efeb",
            "zoom": 15
          },
          {
            "color": "#f5f0ec",
            "zoom": 16
          },
          {
            "color": "#f5f1ed",
            "zoom": 17
          },
          {
            "color": "#f6f2ee",
            "zoom": 18
          },
          {
            "color": "#f7f3f0",
            "zoom": 19
          },
          {
            "color": "#f7f4f1",
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "zoom": 21
          }
        ]
      },
      {
        "tags": "road_construction",
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "tags": "road_construction",
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#d5c2b4",
            "zoom": 0
          },
          {
            "color": "#d5c2b4",
            "zoom": 1
          },
          {
            "color": "#d5c2b4",
            "zoom": 2
          },
          {
            "color": "#d5c2b4",
            "zoom": 3
          },
          {
            "color": "#d5c2b4",
            "zoom": 4
          },
          {
            "color": "#d5c2b4",
            "zoom": 5
          },
          {
            "color": "#d5c2b4",
            "zoom": 6
          },
          {
            "color": "#d5c2b4",
            "zoom": 7
          },
          {
            "color": "#d5c2b4",
            "zoom": 8
          },
          {
            "color": "#d5c2b4",
            "zoom": 9
          },
          {
            "color": "#d5c2b4",
            "zoom": 10
          },
          {
            "color": "#d5c2b4",
            "zoom": 11
          },
          {
            "color": "#d5c2b4",
            "zoom": 12
          },
          {
            "color": "#d5c2b4",
            "zoom": 13
          },
          {
            "color": "#c2a793",
            "zoom": 14
          },
          {
            "color": "#d5c2b4",
            "zoom": 15
          },
          {
            "color": "#d8c6b9",
            "zoom": 16
          },
          {
            "color": "#dbcbbf",
            "zoom": 17
          },
          {
            "color": "#decfc4",
            "zoom": 18
          },
          {
            "color": "#e1d3ca",
            "zoom": 19
          },
          {
            "color": "#e4d8cf",
            "zoom": 20
          },
          {
            "color": "#e7dcd5",
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "ferry"
        },
        "stylers": [
          {
            "color": "#b79780"
          }
        ]
      },
      {
        "tags": "transit_location",
        "elements": "label.icon",
        "stylers": [
          {
            "hue": "#a77f62"
          },
          {
            "saturation": -0.72
          }
        ]
      },
      {
        "tags": "transit_location",
        "elements": "label.text.fill",
        "stylers": [
          {
            "color": "#b8947a"
          }
        ]
      },
      {
        "tags": "transit_location",
        "elements": "label.text.outline",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "tags": "transit_schema",
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#b8947a"
          },
          {
            "scale": 0.7
          },
          {
            "opacity": 0.6,
            "zoom": 0
          },
          {
            "opacity": 0.6,
            "zoom": 1
          },
          {
            "opacity": 0.6,
            "zoom": 2
          },
          {
            "opacity": 0.6,
            "zoom": 3
          },
          {
            "opacity": 0.6,
            "zoom": 4
          },
          {
            "opacity": 0.6,
            "zoom": 5
          },
          {
            "opacity": 0.6,
            "zoom": 6
          },
          {
            "opacity": 0.6,
            "zoom": 7
          },
          {
            "opacity": 0.6,
            "zoom": 8
          },
          {
            "opacity": 0.6,
            "zoom": 9
          },
          {
            "opacity": 0.6,
            "zoom": 10
          },
          {
            "opacity": 0.6,
            "zoom": 11
          },
          {
            "opacity": 0.6,
            "zoom": 12
          },
          {
            "opacity": 0.6,
            "zoom": 13
          },
          {
            "opacity": 0.6,
            "zoom": 14
          },
          {
            "opacity": 0.5,
            "zoom": 15
          },
          {
            "opacity": 0.4,
            "zoom": 16
          },
          {
            "opacity": 0.4,
            "zoom": 17
          },
          {
            "opacity": 0.4,
            "zoom": 18
          },
          {
            "opacity": 0.4,
            "zoom": 19
          },
          {
            "opacity": 0.4,
            "zoom": 20
          },
          {
            "opacity": 0.4,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "transit_schema",
        "elements": "geometry.outline",
        "stylers": [
          {
            "opacity": 0
          }
        ]
      },
      {
        "tags": "transit_line",
        "elements": "geometry.fill.pattern",
        "stylers": [
          {
            "color": "#c2b0a3"
          },
          {
            "opacity": 0,
            "zoom": 0
          },
          {
            "opacity": 0,
            "zoom": 1
          },
          {
            "opacity": 0,
            "zoom": 2
          },
          {
            "opacity": 0,
            "zoom": 3
          },
          {
            "opacity": 0,
            "zoom": 4
          },
          {
            "opacity": 0,
            "zoom": 5
          },
          {
            "opacity": 0,
            "zoom": 6
          },
          {
            "opacity": 0,
            "zoom": 7
          },
          {
            "opacity": 0,
            "zoom": 8
          },
          {
            "opacity": 0,
            "zoom": 9
          },
          {
            "opacity": 0,
            "zoom": 10
          },
          {
            "opacity": 0,
            "zoom": 11
          },
          {
            "opacity": 0,
            "zoom": 12
          },
          {
            "opacity": 1,
            "zoom": 13
          },
          {
            "opacity": 1,
            "zoom": 14
          },
          {
            "opacity": 1,
            "zoom": 15
          },
          {
            "opacity": 1,
            "zoom": 16
          },
          {
            "opacity": 1,
            "zoom": 17
          },
          {
            "opacity": 1,
            "zoom": 18
          },
          {
            "opacity": 1,
            "zoom": 19
          },
          {
            "opacity": 1,
            "zoom": 20
          },
          {
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "transit_line",
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#c2b0a3"
          },
          {
            "scale": 0.4
          },
          {
            "opacity": 0,
            "zoom": 0
          },
          {
            "opacity": 0,
            "zoom": 1
          },
          {
            "opacity": 0,
            "zoom": 2
          },
          {
            "opacity": 0,
            "zoom": 3
          },
          {
            "opacity": 0,
            "zoom": 4
          },
          {
            "opacity": 0,
            "zoom": 5
          },
          {
            "opacity": 0,
            "zoom": 6
          },
          {
            "opacity": 0,
            "zoom": 7
          },
          {
            "opacity": 0,
            "zoom": 8
          },
          {
            "opacity": 0,
            "zoom": 9
          },
          {
            "opacity": 0,
            "zoom": 10
          },
          {
            "opacity": 0,
            "zoom": 11
          },
          {
            "opacity": 0,
            "zoom": 12
          },
          {
            "opacity": 1,
            "zoom": 13
          },
          {
            "opacity": 1,
            "zoom": 14
          },
          {
            "opacity": 1,
            "zoom": 15
          },
          {
            "opacity": 1,
            "zoom": 16
          },
          {
            "opacity": 1,
            "zoom": 17
          },
          {
            "opacity": 1,
            "zoom": 18
          },
          {
            "opacity": 1,
            "zoom": 19
          },
          {
            "opacity": 1,
            "zoom": 20
          },
          {
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "water",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#cab2a0",
            "zoom": 0
          },
          {
            "color": "#cab2a0",
            "zoom": 1
          },
          {
            "color": "#cab2a0",
            "zoom": 2
          },
          {
            "color": "#cab2a0",
            "zoom": 3
          },
          {
            "color": "#cab2a0",
            "zoom": 4
          },
          {
            "color": "#cab2a0",
            "zoom": 5
          },
          {
            "color": "#cab2a0",
            "zoom": 6
          },
          {
            "color": "#cab2a0",
            "zoom": 7
          },
          {
            "color": "#cbb4a2",
            "zoom": 8
          },
          {
            "color": "#ccb5a5",
            "zoom": 9
          },
          {
            "color": "#cdb7a7",
            "zoom": 10
          },
          {
            "color": "#ceb8a8",
            "zoom": 11
          },
          {
            "color": "#ceb9a9",
            "zoom": 12
          },
          {
            "color": "#cfbaaa",
            "zoom": 13
          },
          {
            "color": "#d0bbac",
            "zoom": 14
          },
          {
            "color": "#d1bcad",
            "zoom": 15
          },
          {
            "color": "#d2beaf",
            "zoom": 16
          },
          {
            "color": "#d3bfb0",
            "zoom": 17
          },
          {
            "color": "#d4c0b2",
            "zoom": 18
          },
          {
            "color": "#d5c1b4",
            "zoom": 19
          },
          {
            "color": "#d6c3b5",
            "zoom": 20
          },
          {
            "color": "#d7c4b7",
            "zoom": 21
          }
        ]
      },
      {
        "tags": "water",
        "elements": "geometry",
        "types": "polyline",
        "stylers": [
          {
            "opacity": 0.4,
            "zoom": 0
          },
          {
            "opacity": 0.4,
            "zoom": 1
          },
          {
            "opacity": 0.4,
            "zoom": 2
          },
          {
            "opacity": 0.4,
            "zoom": 3
          },
          {
            "opacity": 0.6,
            "zoom": 4
          },
          {
            "opacity": 0.8,
            "zoom": 5
          },
          {
            "opacity": 1,
            "zoom": 6
          },
          {
            "opacity": 1,
            "zoom": 7
          },
          {
            "opacity": 1,
            "zoom": 8
          },
          {
            "opacity": 1,
            "zoom": 9
          },
          {
            "opacity": 1,
            "zoom": 10
          },
          {
            "opacity": 1,
            "zoom": 11
          },
          {
            "opacity": 1,
            "zoom": 12
          },
          {
            "opacity": 1,
            "zoom": 13
          },
          {
            "opacity": 1,
            "zoom": 14
          },
          {
            "opacity": 1,
            "zoom": 15
          },
          {
            "opacity": 1,
            "zoom": 16
          },
          {
            "opacity": 1,
            "zoom": 17
          },
          {
            "opacity": 1,
            "zoom": 18
          },
          {
            "opacity": 1,
            "zoom": 19
          },
          {
            "opacity": 1,
            "zoom": 20
          },
          {
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "bathymetry",
        "elements": "geometry",
        "stylers": [
          {
            "hue": "#cab2a0"
          }
        ]
      },
      {
        "tags": {
          "any": [
            "industrial",
            "construction_site"
          ]
        },
        "elements": "geometry",
        "stylers": [
          {
            "color": "#e9dfd8",
            "zoom": 0
          },
          {
            "color": "#e9dfd8",
            "zoom": 1
          },
          {
            "color": "#e9dfd8",
            "zoom": 2
          },
          {
            "color": "#e9dfd8",
            "zoom": 3
          },
          {
            "color": "#e9dfd8",
            "zoom": 4
          },
          {
            "color": "#e9dfd8",
            "zoom": 5
          },
          {
            "color": "#e9dfd8",
            "zoom": 6
          },
          {
            "color": "#e9dfd8",
            "zoom": 7
          },
          {
            "color": "#e9dfd8",
            "zoom": 8
          },
          {
            "color": "#e9dfd8",
            "zoom": 9
          },
          {
            "color": "#e9dfd8",
            "zoom": 10
          },
          {
            "color": "#e9dfd8",
            "zoom": 11
          },
          {
            "color": "#e9dfd8",
            "zoom": 12
          },
          {
            "color": "#e9dfd8",
            "zoom": 13
          },
          {
            "color": "#ede4de",
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "zoom": 15
          },
          {
            "color": "#f1ebe6",
            "zoom": 16
          },
          {
            "color": "#f2ece7",
            "zoom": 17
          },
          {
            "color": "#f2ece8",
            "zoom": 18
          },
          {
            "color": "#f3ede9",
            "zoom": 19
          },
          {
            "color": "#f3eeea",
            "zoom": 20
          },
          {
            "color": "#f4efeb",
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "transit",
          "none": [
            "transit_location",
            "transit_line",
            "transit_schema",
            "is_unclassified_transit"
          ]
        },
        "elements": "geometry",
        "stylers": [
          {
            "color": "#e9dfd8",
            "zoom": 0
          },
          {
            "color": "#e9dfd8",
            "zoom": 1
          },
          {
            "color": "#e9dfd8",
            "zoom": 2
          },
          {
            "color": "#e9dfd8",
            "zoom": 3
          },
          {
            "color": "#e9dfd8",
            "zoom": 4
          },
          {
            "color": "#e9dfd8",
            "zoom": 5
          },
          {
            "color": "#e9dfd8",
            "zoom": 6
          },
          {
            "color": "#e9dfd8",
            "zoom": 7
          },
          {
            "color": "#e9dfd8",
            "zoom": 8
          },
          {
            "color": "#e9dfd8",
            "zoom": 9
          },
          {
            "color": "#e9dfd8",
            "zoom": 10
          },
          {
            "color": "#e9dfd8",
            "zoom": 11
          },
          {
            "color": "#e9dfd8",
            "zoom": 12
          },
          {
            "color": "#e9dfd8",
            "zoom": 13
          },
          {
            "color": "#ece4de",
            "zoom": 14
          },
          {
            "color": "#f0eae5",
            "zoom": 15
          },
          {
            "color": "#f1ebe6",
            "zoom": 16
          },
          {
            "color": "#f1ece7",
            "zoom": 17
          },
          {
            "color": "#f2ece8",
            "zoom": 18
          },
          {
            "color": "#f3ede9",
            "zoom": 19
          },
          {
            "color": "#f3eeea",
            "zoom": 20
          },
          {
            "color": "#f4efeb",
            "zoom": 21
          }
        ]
      },
      {
        "tags": "fence",
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#e2d4ca"
          },
          {
            "opacity": 0.75,
            "zoom": 0
          },
          {
            "opacity": 0.75,
            "zoom": 1
          },
          {
            "opacity": 0.75,
            "zoom": 2
          },
          {
            "opacity": 0.75,
            "zoom": 3
          },
          {
            "opacity": 0.75,
            "zoom": 4
          },
          {
            "opacity": 0.75,
            "zoom": 5
          },
          {
            "opacity": 0.75,
            "zoom": 6
          },
          {
            "opacity": 0.75,
            "zoom": 7
          },
          {
            "opacity": 0.75,
            "zoom": 8
          },
          {
            "opacity": 0.75,
            "zoom": 9
          },
          {
            "opacity": 0.75,
            "zoom": 10
          },
          {
            "opacity": 0.75,
            "zoom": 11
          },
          {
            "opacity": 0.75,
            "zoom": 12
          },
          {
            "opacity": 0.75,
            "zoom": 13
          },
          {
            "opacity": 0.75,
            "zoom": 14
          },
          {
            "opacity": 0.75,
            "zoom": 15
          },
          {
            "opacity": 0.75,
            "zoom": 16
          },
          {
            "opacity": 0.45,
            "zoom": 17
          },
          {
            "opacity": 0.45,
            "zoom": 18
          },
          {
            "opacity": 0.45,
            "zoom": 19
          },
          {
            "opacity": 0.45,
            "zoom": 20
          },
          {
            "opacity": 0.45,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "medical",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#e9dfd8",
            "zoom": 0
          },
          {
            "color": "#e9dfd8",
            "zoom": 1
          },
          {
            "color": "#e9dfd8",
            "zoom": 2
          },
          {
            "color": "#e9dfd8",
            "zoom": 3
          },
          {
            "color": "#e9dfd8",
            "zoom": 4
          },
          {
            "color": "#e9dfd8",
            "zoom": 5
          },
          {
            "color": "#e9dfd8",
            "zoom": 6
          },
          {
            "color": "#e9dfd8",
            "zoom": 7
          },
          {
            "color": "#e9dfd8",
            "zoom": 8
          },
          {
            "color": "#e9dfd8",
            "zoom": 9
          },
          {
            "color": "#e9dfd8",
            "zoom": 10
          },
          {
            "color": "#e9dfd8",
            "zoom": 11
          },
          {
            "color": "#e9dfd8",
            "zoom": 12
          },
          {
            "color": "#e9dfd8",
            "zoom": 13
          },
          {
            "color": "#ede4de",
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "zoom": 15
          },
          {
            "color": "#f1ebe6",
            "zoom": 16
          },
          {
            "color": "#f2ece7",
            "zoom": 17
          },
          {
            "color": "#f2ece8",
            "zoom": 18
          },
          {
            "color": "#f3ede9",
            "zoom": 19
          },
          {
            "color": "#f3eeea",
            "zoom": 20
          },
          {
            "color": "#f4efeb",
            "zoom": 21
          }
        ]
      },
      {
        "tags": "beach",
        "elements": "geometry",
        "stylers": [
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 0
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 1
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 2
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 3
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 4
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 5
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 6
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 7
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 8
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 9
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 10
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 11
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.3,
            "zoom": 12
          },
          {
            "color": "#e9dfd8",
            "opacity": 0.65,
            "zoom": 13
          },
          {
            "color": "#ede4de",
            "opacity": 1,
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "opacity": 1,
            "zoom": 15
          },
          {
            "color": "#f1ebe6",
            "opacity": 1,
            "zoom": 16
          },
          {
            "color": "#f2ece7",
            "opacity": 1,
            "zoom": 17
          },
          {
            "color": "#f2ece8",
            "opacity": 1,
            "zoom": 18
          },
          {
            "color": "#f3ede9",
            "opacity": 1,
            "zoom": 19
          },
          {
            "color": "#f3eeea",
            "opacity": 1,
            "zoom": 20
          },
          {
            "color": "#f4efeb",
            "opacity": 1,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "all": [
            "is_tunnel",
            "path"
          ]
        },
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#bfa28d"
          },
          {
            "opacity": 0.3
          }
        ]
      },
      {
        "tags": {
          "all": [
            "is_tunnel",
            "path"
          ]
        },
        "elements": "geometry.outline",
        "stylers": [
          {
            "opacity": 0
          }
        ]
      },
      {
        "tags": "road_limited",
        "elements": "geometry.fill",
        "stylers": [
          {
            "color": "#ccb4a4"
          },
          {
            "scale": 0,
            "zoom": 0
          },
          {
            "scale": 0,
            "zoom": 1
          },
          {
            "scale": 0,
            "zoom": 2
          },
          {
            "scale": 0,
            "zoom": 3
          },
          {
            "scale": 0,
            "zoom": 4
          },
          {
            "scale": 0,
            "zoom": 5
          },
          {
            "scale": 0,
            "zoom": 6
          },
          {
            "scale": 0,
            "zoom": 7
          },
          {
            "scale": 0,
            "zoom": 8
          },
          {
            "scale": 0,
            "zoom": 9
          },
          {
            "scale": 0,
            "zoom": 10
          },
          {
            "scale": 0,
            "zoom": 11
          },
          {
            "scale": 0,
            "zoom": 12
          },
          {
            "scale": 0.1,
            "zoom": 13
          },
          {
            "scale": 0.2,
            "zoom": 14
          },
          {
            "scale": 0.3,
            "zoom": 15
          },
          {
            "scale": 0.5,
            "zoom": 16
          },
          {
            "scale": 0.6,
            "zoom": 17
          },
          {
            "scale": 0.7,
            "zoom": 18
          },
          {
            "scale": 0.79,
            "zoom": 19
          },
          {
            "scale": 0.83,
            "zoom": 20
          },
          {
            "scale": 0.9,
            "zoom": 21
          }
        ]
      },
      {
        "tags": "road_limited",
        "elements": "geometry.outline",
        "stylers": [
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 0
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 1
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 2
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 3
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 4
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 5
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 6
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 7
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 8
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 9
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 10
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 11
          },
          {
            "color": "#ffffff",
            "scale": 1.4,
            "zoom": 12
          },
          {
            "color": "#ffffff",
            "scale": 0.1,
            "zoom": 13
          },
          {
            "color": "#f1eae5",
            "scale": 0.2,
            "zoom": 14
          },
          {
            "color": "#f1eae5",
            "scale": 0.3,
            "zoom": 15
          },
          {
            "color": "#f2ece7",
            "scale": 0.5,
            "zoom": 16
          },
          {
            "color": "#f3eeea",
            "scale": 0.6,
            "zoom": 17
          },
          {
            "color": "#f5f0ec",
            "scale": 0.7,
            "zoom": 18
          },
          {
            "color": "#f6f2ef",
            "scale": 1.18,
            "zoom": 19
          },
          {
            "color": "#f7f3f0",
            "scale": 1.23,
            "zoom": 20
          },
          {
            "color": "#f8f5f2",
            "scale": 1.33,
            "zoom": 21
          }
        ]
      },
      {
        "tags": {
          "any": "landcover",
          "none": "vegetation"
        },
        "stylers": {
          "visibility": "off"
        }
      }
    ]
  });
  map.addChild(layer);
  map.addChild(new YMapDefaultFeaturesLayer());

  // Добавление элементов управления на карту
  map.addChild(new YMapControls({
    position: 'right'
  })
    .addChild(new YMapZoomControl({}))
  );
  map.addChild(new YMapControls({
    position: 'top right'
  })
    .addChild(new YMapGeolocationControl({}))
  );


  // Создание маркера
  const markerElement = document.createElement('img');
  markerElement.className = 'my-marker';
  markerElement.src = 'imgs/marker.svg';
  markerElement.title = 'Маркер';

  // Создание заголовка маркера
  const markerTitle = document.createElement('div');
  markerTitle.className = 'marker-title';
  markerTitle.innerHTML = '';

  // Контейнер для элементов маркера
  const imgContainer = document.createElement('div');
  imgContainer.className = 'marker_wrapper';
  imgContainer.appendChild(markerElement);
  imgContainer.appendChild(markerTitle);

  // // клик на маркер  
  // markerElement.onclick = function () {
  //   markerTitle.innerHTML = 'ул. Покровка, д. 47';

  //   if (imgContainer.classList.contains("show")) {
  //     imgContainer.classList.remove("show")
  //     markerTitle.innerHTML = '';
  //   } else {
  //     markerTitle.innerHTML = 'ул. Покровка, д. 47';
  //     imgContainer.classList.add("show")
  //   }
  // }

  // Добавление центра карты
  map.addChild(new YMapMarker({
    coordinates: CENTER_COORDINATES
  }));

  // Добавление маркера на карту
  map.addChild(new YMapMarker({
    coordinates: MARKER_COORDINATES
  }, imgContainer));
}