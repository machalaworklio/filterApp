<template>
  <div :class="$style.workspace">
    <div :class="$style.sideBar">
      <button :class="$style.button">
        <span>Sort By</span><span>Balance</span>
      </button>

      <button :class="$style.button">
        <span>Sort By</span><span>Age</span>
      </button>

      <button :class="$style.button">
        <span>Sort By</span><span>Eye Color</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    interface Person {
      id: string;
      index: number;
      guid: string;
      isActive: boolean;
      balance: number;
      picture: string;
      age: number;
      eyeColor: 'blue' | 'brown' | 'green';
      name: string;
      gender: 'male' | 'female';
      company: string;
      email: string;
      address: string;
      about: string;
      registered: string;
      latitude: number;
      longitude: number;
      tags: string[];
      friends: Friend[];
      favoriteFruit: string;
    }

    interface Friend {
      id: number;
      name: string;
    }

    const balanceSort = computed(() =>
      data.filter((obj) => obj.balance >= 3000)
    );

    const ageSort = computed(() => data.filter((obj) => obj.age > 30));

    const peopleSort = computed(() =>
      data.filter((obj) => obj.gender === 'female' && obj.eyeColor === 'brown')
    );

    const data = [
      {
        id: '6188e9e08034c1c3e3727553',
        index: 0,
        guid: '8756f7dd-7cc1-4e90-a2e4-37edfbf18131',
        isActive: false,
        balance: 3783.79,
        picture: 'http://placehold.it/32x32',
        age: 28,
        eyeColor: 'brown',
        name: 'Paula Nolan',
        gender: 'female',
        company: 'ACCRUEX',
        email: 'paulanolan@accruex.com',
        phone: '+1 (906) 557-2593',
        address: '730 Brightwater Court, Kaka, Arkansas, 9136',
        about:
          'Aliquip in tempor tempor incididunt esse. Aliquip incididunt consectetur eu labore consequat proident enim quis. Proident deserunt ex dolor nisi magna elit fugiat tempor et nostrud fugiat pariatur.\r\n',
        registered: '2015-10-22T12:25:15 -02:00',
        latitude: 26.634479,
        longitude: -15.914072,
        tags: ['id', 'proident', 'pariatur', 'anim', 'ea', 'nulla', 'magna'],
        friends: [],
        favoriteFruit: 'banana',
      },
      {
        id: '6188e9e0be8095ff8e4f1eb9',
        index: 1,
        guid: 'e9166fc7-3163-4091-af65-714e8ba9ea54',
        isActive: false,
        balance: 3108.67,
        picture: 'http://placehold.it/32x32',
        age: 23,
        eyeColor: 'brown',
        name: 'Mcgowan Mcmahon',
        gender: 'male',
        company: 'PAPRIKUT',
        email: 'mcgowanmcmahon@paprikut.com',
        phone: '+1 (828) 502-2708',
        address: '194 Summit Street, Gilmore, Puerto Rico, 419',
        about:
          'Consectetur dolore irure proident exercitation commodo exercitation esse esse cupidatat adipisicing fugiat anim veniam. Laborum anim do aliquip enim veniam. Culpa pariatur velit consectetur qui ad. Ut velit labore sunt culpa consequat qui laborum consequat Lorem eiusmod consectetur consectetur. Ut velit labore consequat pariatur officia.\r\n',
        registered: '2016-12-25T01:32:24 -01:00',
        latitude: 38.97076,
        longitude: -82.220691,
        tags: ['Lorem', 'duis', 'ea', 'commodo', 'occaecat', 'cillum', 'non'],
        friends: [
          {
            id: 0,
            name: 'Hood Mcmillan',
          },
          {
            id: 1,
            name: 'Juana Wilder',
          },
          {
            id: 2,
            name: 'Eugenia Harrington',
          },
          {
            id: 3,
            name: 'Jaime Munoz',
          },
          {
            id: 4,
            name: 'Bethany Zamora',
          },
          {
            id: 5,
            name: 'Ramos Mccray',
          },
          {
            id: 6,
            name: 'Ava Hopkins',
          },
          {
            id: 7,
            name: 'Ana Campbell',
          },
          {
            id: 8,
            name: 'Ruthie Fry',
          },
        ],
        favoriteFruit: 'apple',
      },
      {
        id: '6188e9e0e15b83f953fecdcc',
        index: 2,
        guid: '8084baa7-8c9a-4a1e-b2bb-9a71c93cfe4d',
        isActive: true,
        balance: 1149.25,
        picture: 'http://placehold.it/32x32',
        age: 51,
        eyeColor: 'brown',
        name: 'Beck Cortez',
        gender: 'male',
        company: 'NETUR',
        email: 'beckcortez@netur.com',
        phone: '+1 (901) 467-3114',
        address: '982 Bethel Loop, Brandywine, Alaska, 4468',
        about:
          'Irure ullamco consequat eu magna minim mollit consectetur laborum cupidatat et occaecat Lorem exercitation. Qui voluptate et veniam deserunt. Mollit non veniam ut non deserunt ex. Occaecat et nostrud officia et reprehenderit irure magna consectetur proident ullamco deserunt. Consequat elit nulla ipsum consectetur qui sit est ea ullamco incididunt deserunt.\r\n',
        registered: '2021-04-28T01:17:12 -02:00',
        latitude: 63.234592,
        longitude: 23.826216,
        tags: ['ea', 'qui', 'eu', 'veniam', 'ad', 'ullamco', 'nulla'],
        friends: [
          {
            id: 0,
            name: 'Stella Moran',
          },
          {
            id: 1,
            name: 'Duncan Foster',
          },
          {
            id: 2,
            name: 'Evans Farrell',
          },
        ],
        favoriteFruit: 'strawberry',
      },
      {
        id: '6188e9e0138e11cf24944c29',
        index: 3,
        guid: '82c2bee5-612b-4992-bcf2-c0c631723b99',
        isActive: true,
        balance: 1957.95,
        picture: 'http://placehold.it/32x32',
        age: 23,
        eyeColor: 'blue',
        name: 'May Erickson',
        gender: 'female',
        company: 'ZENTIME',
        email: 'mayerickson@zentime.com',
        phone: '+1 (956) 553-2841',
        address: '815 Hegeman Avenue, Magnolia, Massachusetts, 9698',
        about:
          'Ad sint reprehenderit eiusmod adipisicing esse velit est aute aliquip id. Et mollit occaecat minim ullamco aute sunt anim pariatur ex reprehenderit consequat. Consectetur qui minim nostrud ad ad aliquip irure consectetur ex deserunt.\r\n',
        registered: '2014-05-24T03:06:23 -02:00',
        latitude: 12.490607,
        longitude: -43.453733,
        tags: [
          'elit',
          'laborum',
          'fugiat',
          'magna',
          'nostrud',
          'officia',
          'Lorem',
        ],
        friends: [
          {
            id: 0,
            name: 'Hicks Boyd',
          },
        ],
        favoriteFruit: 'apple',
      },
      {
        id: '6188e9e0cd56fffa87302573',
        index: 4,
        guid: '0084f04e-0c20-4e40-a901-8e51811e1df0',
        isActive: false,
        balance: 1515.05,
        picture: 'http://placehold.it/32x32',
        age: 15,
        eyeColor: 'green',
        name: 'Burgess Jefferson',
        gender: 'male',
        company: 'ENVIRE',
        email: 'burgessjefferson@envire.com',
        phone: '+1 (871) 486-3559',
        address: '935 Erasmus Street, Washington, Vermont, 6222',
        about:
          'Ad incididunt duis ex tempor laboris incididunt laborum consectetur enim sint. Nostrud esse adipisicing cupidatat sit duis elit minim sunt adipisicing consequat laborum duis. Esse elit amet duis nostrud duis consectetur voluptate laborum veniam. Nostrud nostrud pariatur sit minim incididunt ea occaecat dolore adipisicing duis nulla minim sit cupidatat. Adipisicing quis nulla veniam officia do non ad. Duis reprehenderit et labore dolor nostrud irure ut sint ad id exercitation velit.\r\n',
        registered: '2018-07-13T12:42:12 -02:00',
        latitude: 5.918144,
        longitude: -131.312819,
        tags: ['anim', 'id', 'ullamco', 'esse', 'voluptate', 'cillum', 'ad'],
        friends: [
          {
            id: 0,
            name: 'Robinson Wallace',
          },
          {
            id: 1,
            name: 'Potts Maxwell',
          },
          {
            id: 2,
            name: 'Gilmore Clark',
          },
          {
            id: 3,
            name: 'Queen Harris',
          },
          {
            id: 4,
            name: 'Dejesus Santos',
          },
        ],
        favoriteFruit: 'strawberry',
      },
      {
        id: '6188e9e0df088b76310bce81',
        index: 5,
        guid: '8a5aef1f-2026-4a8c-9ee2-97a4ca1df4e0',
        isActive: false,
        balance: 1413.09,
        picture: 'http://placehold.it/32x32',
        age: 31,
        eyeColor: 'blue',
        name: 'Grant Doyle',
        gender: 'male',
        company: 'STEELFAB',
        email: 'grantdoyle@steelfab.com',
        phone: '+1 (850) 560-3535',
        address: '667 Gerry Street, Winchester, Michigan, 7764',
        about:
          'Duis incididunt anim labore veniam quis sit adipisicing ex qui. Consequat id ipsum velit incididunt nulla ea deserunt aute quis. Id magna consectetur ea incididunt irure proident officia. Mollit consectetur tempor fugiat deserunt in. Laborum et culpa deserunt in do ipsum occaecat laborum cupidatat esse.\r\n',
        registered: '2020-08-03T01:21:20 -02:00',
        latitude: 83.398475,
        longitude: -117.178573,
        tags: [
          'aliquip',
          'do',
          'laboris',
          'culpa',
          'culpa',
          'culpa',
          'excepteur',
        ],
        friends: [
          {
            id: 0,
            name: 'Dena Schroeder',
          },
          {
            id: 1,
            name: 'Morris Sampson',
          },
          {
            id: 2,
            name: 'Jenny Cochran',
          },
          {
            id: 3,
            name: 'Solis Kaufman',
          },
          {
            id: 4,
            name: 'Laurel Clayton',
          },
          {
            id: 5,
            name: 'Navarro Rosario',
          },
          {
            id: 6,
            name: 'Freda Rodriguez',
          },
          {
            id: 7,
            name: 'Foley Miller',
          },
        ],
        favoriteFruit: 'apple',
      },
      {
        id: '6188e9e0bb21518586246cbc',
        index: 6,
        guid: '1ab89162-91e1-413d-af3e-ed7635091d90',
        isActive: true,
        balance: 1926.79,
        picture: 'http://placehold.it/32x32',
        age: 47,
        eyeColor: 'brown',
        name: 'Sheryl Wiggins',
        gender: 'female',
        company: 'KEGULAR',
        email: 'sherylwiggins@kegular.com',
        phone: '+1 (909) 579-2558',
        address: '651 Stryker Street, Franklin, Rhode Island, 7905',
        about:
          'Aute aute amet eu duis nostrud incididunt minim id duis irure elit officia duis nostrud. Labore enim velit fugiat ut labore magna irure magna proident adipisicing do Lorem laboris aliquip. Eu eu officia officia commodo nulla ad. Proident non officia enim labore minim est minim consectetur. Fugiat commodo in velit nulla occaecat consectetur.\r\n',
        registered: '2018-12-12T03:07:39 -01:00',
        latitude: -32.998648,
        longitude: -124.879043,
        tags: [
          'eu',
          'magna',
          'consequat',
          'exercitation',
          'veniam',
          'sit',
          'elit',
        ],
        friends: [],
        favoriteFruit: 'strawberry',
      },
      {
        id: '6188e9e0dd1445a89f1eef3b',
        index: 7,
        guid: 'bff5f0ef-7bc2-46c9-89da-502e6cb8c013',
        isActive: false,
        balance: 3043.73,
        picture: 'http://placehold.it/32x32',
        age: 30,
        eyeColor: 'brown',
        name: 'Horn Wheeler',
        gender: 'male',
        company: 'EXOSIS',
        email: 'hornwheeler@exosis.com',
        phone: '+1 (980) 577-2091',
        address: '771 Lorraine Street, Oley, New York, 2780',
        about:
          'Tempor labore excepteur laboris consequat sit sint et officia ipsum eu. Voluptate anim magna qui Lorem adipisicing labore enim sunt duis fugiat deserunt aliqua commodo cupidatat. Dolore ipsum excepteur consequat aliquip commodo veniam nulla magna. Cillum ad cupidatat culpa ullamco quis duis enim nostrud. Exercitation quis cupidatat labore ut. Ea magna pariatur exercitation esse cillum dolor commodo commodo quis in Lorem. Velit cillum ullamco tempor consectetur non id.\r\n',
        registered: '2018-07-16T10:34:15 -02:00',
        latitude: -26.003709,
        longitude: -144.053306,
        tags: ['laboris', 'qui', 'velit', 'qui', 'eu', 'deserunt', 'cillum'],
        friends: [
          {
            id: 0,
            name: 'Vargas Abbott',
          },
          {
            id: 1,
            name: 'Naomi Rivers',
          },
          {
            id: 2,
            name: 'Bass Hall',
          },
        ],
        favoriteFruit: 'strawberry',
      },
      {
        id: '6188e9e0890c6032e24b15dd',
        index: 8,
        guid: '27976148-8833-4b77-9e09-5a383b689f12',
        isActive: true,
        balance: 2145.85,
        picture: 'http://placehold.it/32x32',
        age: 15,
        eyeColor: 'green',
        name: 'Stacy Witt',
        gender: 'female',
        company: 'GRUPOLI',
        email: 'stacywitt@grupoli.com',
        phone: '+1 (905) 426-3070',
        address: '163 Radde Place, Farmington, Kansas, 5104',
        about:
          'Ullamco qui amet id sint duis fugiat eu minim laboris deserunt magna adipisicing laborum. Elit eiusmod exercitation excepteur non consequat exercitation. Nulla dolore fugiat sint anim et cillum magna velit minim consequat aliqua. Qui minim sit id ullamco officia Lorem tempor.\r\n',
        registered: '2014-09-24T03:22:19 -02:00',
        latitude: -62.956943,
        longitude: 165.666438,
        tags: ['tempor', 'do', 'velit', 'nulla', 'ea', 'est', 'non'],
        friends: [
          {
            id: 0,
            name: 'Shelby Greene',
          },
          {
            id: 1,
            name: 'Alissa Hill',
          },
          {
            id: 2,
            name: 'Annabelle Holmes',
          },
          {
            id: 3,
            name: 'Lakeisha Morrow',
          },
          {
            id: 4,
            name: 'Pickett Norton',
          },
          {
            id: 5,
            name: 'Haley Compton',
          },
          {
            id: 6,
            name: 'Robyn Byrd',
          },
        ],
        favoriteFruit: 'strawberry',
      },
      {
        id: '6188e9e078942f8656ef3e41',
        index: 9,
        guid: '7f7434d6-c609-438f-9556-ae2edb7adf87',
        isActive: true,
        balance: 3699.77,
        picture: 'http://placehold.it/32x32',
        age: 53,
        eyeColor: 'blue',
        name: 'Tran Stephens',
        gender: 'male',
        company: 'XPLOR',
        email: 'transtephens@xplor.com',
        phone: '+1 (829) 510-3650',
        address: '466 Will Place, Colton, Marshall Islands, 3208',
        about:
          'Adipisicing fugiat cupidatat in laboris magna aute velit aute cupidatat duis et qui est. Sit ad sit sint enim aliquip et aliqua esse ipsum magna ex eu est. Non quis laborum eiusmod minim minim ipsum cillum incididunt dolor. Amet mollit occaecat proident enim pariatur irure commodo. Lorem excepteur nostrud ad fugiat officia sint occaecat nisi aliqua consectetur. Dolore nulla minim Lorem aute labore velit duis.\r\n',
        registered: '2021-08-16T11:18:29 -02:00',
        latitude: 56.331215,
        longitude: 130.137128,
        tags: [
          'ullamco',
          'tempor',
          'est',
          'nostrud',
          'est',
          'aliquip',
          'officia',
        ],
        friends: [],
        favoriteFruit: 'banana',
      },
      {
        id: '6188e9e0b54451e8e42780f6',
        index: 10,
        guid: 'de3a89cb-9332-4a9f-9563-556b72bb818e',
        isActive: true,
        balance: 1599.66,
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'blue',
        name: 'Ida Perkins',
        gender: 'female',
        company: 'PHUEL',
        email: 'idaperkins@phuel.com',
        phone: '+1 (985) 447-3642',
        address:
          '681 Langham Street, Hachita, Federated States Of Micronesia, 9789',
        about:
          'Incididunt occaecat culpa deserunt ad sit. Sint mollit laboris commodo ea minim incididunt pariatur reprehenderit nostrud exercitation cupidatat amet. Labore quis officia aute enim est sunt minim ut nulla magna irure. Nostrud id sit exercitation anim occaecat.\r\n',
        registered: '2019-02-07T09:16:39 -01:00',
        latitude: 64.379578,
        longitude: 107.117848,
        tags: ['mollit', 'laborum', 'velit', 'ad', 'minim', 'nisi', 'deserunt'],
        friends: [
          {
            id: 0,
            name: 'Patricia Colon',
          },
          {
            id: 1,
            name: 'Daniel Coleman',
          },
          {
            id: 2,
            name: 'Felicia Mccarthy',
          },
          {
            id: 3,
            name: 'Rose Nunez',
          },
          {
            id: 4,
            name: 'Verna Bernard',
          },
          {
            id: 5,
            name: 'Hull Shelton',
          },
          {
            id: 6,
            name: 'Holland Phillips',
          },
          {
            id: 7,
            name: 'Cook Santana',
          },
        ],
        favoriteFruit: 'strawberry',
      },
      {
        id: '6188e9e09238a716d980a321',
        index: 11,
        guid: '752a3caf-a0d9-43f5-9c8a-201b80362a2e',
        isActive: false,
        balance: 3497.29,
        picture: 'http://placehold.it/32x32',
        age: 43,
        eyeColor: 'brown',
        name: 'Esmeralda Becker',
        gender: 'female',
        company: 'BLUPLANET',
        email: 'esmeraldabecker@bluplanet.com',
        phone: '+1 (903) 510-3003',
        address: '868 Lorimer Street, Accoville, North Carolina, 4823',
        about:
          'Cupidatat quis nulla irure laboris excepteur exercitation commodo occaecat proident voluptate fugiat exercitation. Lorem nisi mollit sint commodo exercitation aliqua est. Ipsum consectetur ea proident non elit amet ut id. Mollit sint qui elit est proident commodo dolor. Amet culpa incididunt commodo quis adipisicing. Dolor pariatur aliquip aliqua magna. Dolor quis commodo qui ex incididunt adipisicing commodo irure.\r\n',
        registered: '2020-11-20T02:48:07 -01:00',
        latitude: -42.030489,
        longitude: -120.995676,
        tags: ['do', 'laborum', 'labore', 'fugiat', 'tempor', 'ea', 'minim'],
        friends: [
          {
            id: 0,
            name: 'Patti Newman',
          },
          {
            id: 1,
            name: 'Jami Atkinson',
          },
          {
            id: 2,
            name: 'Michelle Roman',
          },
          {
            id: 3,
            name: 'Tameka Cooley',
          },
          {
            id: 4,
            name: 'Sheree Dean',
          },
        ],
        favoriteFruit: 'apple',
      },
      {
        id: '6188e9e0c11b9d77ecba634e',
        index: 12,
        guid: '41201347-56ca-4a77-bb60-54ea832c46d4',
        isActive: true,
        balance: 1210.58,
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'blue',
        name: 'Battle Dudley',
        gender: 'male',
        company: 'EARTHPLEX',
        email: 'battledudley@earthplex.com',
        phone: '+1 (865) 484-2849',
        address: '907 Carlton Avenue, Mulino, Georgia, 4070',
        about:
          'Ex dolore sit eu amet do laborum irure Lorem eu dolor reprehenderit. Eu ullamco amet ut id nisi amet laboris laboris velit velit exercitation occaecat officia. Aliquip adipisicing eiusmod culpa do amet esse ex minim.\r\n',
        registered: '2019-12-25T08:24:27 -01:00',
        latitude: 60.536409,
        longitude: 161.72354,
        tags: ['nulla', 'est', 'ex', 'dolore', 'labore', 'enim', 'sint'],
        friends: [
          {
            id: 0,
            name: 'Rojas Sellers',
          },
          {
            id: 1,
            name: 'Melinda Perez',
          },
          {
            id: 2,
            name: 'Rodriguez Owens',
          },
          {
            id: 3,
            name: 'Helena Conner',
          },
          {
            id: 4,
            name: 'Dunlap Ellison',
          },
          {
            id: 5,
            name: 'Delgado Lane',
          },
        ],
        favoriteFruit: 'strawberry',
      },
      {
        id: '6188e9e0d43d5c7ee2e039b3',
        index: 13,
        guid: 'c263c05b-8717-4ee8-9aaf-fda25f33b870',
        isActive: true,
        balance: 2803.22,
        picture: 'http://placehold.it/32x32',
        age: 24,
        eyeColor: 'blue',
        name: 'Lambert Tate',
        gender: 'male',
        company: 'SCENTRIC',
        email: 'lamberttate@scentric.com',
        phone: '+1 (849) 556-2879',
        address: '939 Essex Street, Broadlands, Virginia, 6369',
        about:
          'Incididunt qui ea qui laboris pariatur. Irure in id qui quis exercitation exercitation deserunt exercitation. Eu incididunt aute occaecat officia irure minim eu mollit est laboris duis. Consequat tempor consectetur proident ad.\r\n',
        registered: '2017-08-20T06:35:45 -02:00',
        latitude: 25.990187,
        longitude: -132.814597,
        tags: [
          'ut',
          'excepteur',
          'deserunt',
          'do',
          'consectetur',
          'excepteur',
          'aliquip',
        ],
        friends: [
          {
            id: 0,
            name: 'Conway Ruiz',
          },
          {
            id: 1,
            name: 'Maggie Reese',
          },
          {
            id: 2,
            name: 'Nunez Ware',
          },
          {
            id: 3,
            name: 'Juanita Hendrix',
          },
          {
            id: 4,
            name: 'Judy Wright',
          },
          {
            id: 5,
            name: 'Simmons Bradford',
          },
          {
            id: 6,
            name: 'Mallory Ramirez',
          },
          {
            id: 7,
            name: 'Gretchen Copeland',
          },
        ],
        favoriteFruit: 'strawberry',
      },
      {
        id: '6188e9e068ac452a976ab3f8',
        index: 14,
        guid: '24306735-35cd-41f0-9f8d-1a44dab72ac9',
        isActive: false,
        balance: 1713.31,
        picture: 'http://placehold.it/32x32',
        age: 27,
        eyeColor: 'blue',
        name: 'Salinas Reynolds',
        gender: 'male',
        company: 'DIGIGEN',
        email: 'salinasreynolds@digigen.com',
        phone: '+1 (887) 495-3664',
        address: '573 Interborough Parkway, Curtice, Tennessee, 4256',
        about:
          'Aute deserunt quis duis mollit cupidatat amet aliqua dolore anim consectetur elit cupidatat. Quis excepteur reprehenderit consequat dolor non reprehenderit sint. Aliquip cupidatat veniam aute sit laboris aliquip in magna anim adipisicing nisi anim eiusmod. Fugiat eiusmod consectetur dolore dolore nisi ipsum ea. Exercitation aliqua nulla sit dolor Lorem dolor fugiat. Aute reprehenderit cillum ipsum sint.\r\n',
        registered: '2019-05-02T09:28:01 -02:00',
        latitude: 2.057572,
        longitude: 135.66581,
        tags: ['duis', 'sunt', 'ea', 'commodo', 'amet', 'commodo', 'pariatur'],
        friends: [
          {
            id: 0,
            name: 'Lowery Snider',
          },
          {
            id: 1,
            name: 'Mccarthy Casey',
          },
          {
            id: 2,
            name: 'Mae Cox',
          },
          {
            id: 3,
            name: 'Carmela Skinner',
          },
        ],
        favoriteFruit: 'apple',
      },
      {
        id: '6188e9e0384e27044285693b',
        index: 15,
        guid: 'b61637bb-b85e-4616-ab44-33cb5c4a1293',
        isActive: false,
        balance: 3080.77,
        picture: 'http://placehold.it/32x32',
        age: 45,
        eyeColor: 'blue',
        name: 'Cross Jenkins',
        gender: 'male',
        company: 'ECOSYS',
        email: 'crossjenkins@ecosys.com',
        phone: '+1 (864) 600-3681',
        address: '832 Aitken Place, Bancroft, Alabama, 921',
        about:
          'Reprehenderit officia mollit deserunt duis aute. Quis amet officia eu sit proident. Nisi irure id adipisicing proident. Deserunt ex velit sint cillum. Qui proident nostrud exercitation quis irure aute eu anim eiusmod ipsum quis ad.\r\n',
        registered: '2021-10-06T07:22:21 -02:00',
        latitude: -10.058878,
        longitude: -66.194535,
        tags: [
          'adipisicing',
          'consectetur',
          'ipsum',
          'culpa',
          'consectetur',
          'nostrud',
          'fugiat',
        ],
        friends: [
          {
            id: 0,
            name: 'Gibson Dillon',
          },
          {
            id: 1,
            name: 'Frost Yang',
          },
          {
            id: 2,
            name: 'Lynette Hendricks',
          },
          {
            id: 3,
            name: 'Langley Allison',
          },
          {
            id: 4,
            name: 'Kristin Atkins',
          },
          {
            id: 5,
            name: 'Sutton Bird',
          },
          {
            id: 6,
            name: 'Brigitte Daniel',
          },
        ],
        favoriteFruit: 'banana',
      },
      {
        id: '6188e9e0b9cc3f5d35604953',
        index: 16,
        guid: '2d8d200d-eac3-4d5f-b659-1559d2ccddb3',
        isActive: true,
        balance: 3632.9,
        picture: 'http://placehold.it/32x32',
        age: 29,
        eyeColor: 'green',
        name: 'Becky Cherry',
        gender: 'female',
        company: 'GADTRON',
        email: 'beckycherry@gadtron.com',
        phone: '+1 (810) 472-2492',
        address: '965 Manor Court, Floriston, North Dakota, 6060',
        about:
          'Aute culpa cupidatat sunt reprehenderit officia aliqua amet do cillum. Magna esse sit non veniam do eiusmod proident. Aliquip cillum commodo eiusmod aute laboris anim sit elit.\r\n',
        registered: '2016-11-12T12:57:21 -01:00',
        latitude: 65.819922,
        longitude: -57.00322,
        tags: [
          'consequat',
          'ex',
          'excepteur',
          'laborum',
          'nulla',
          'amet',
          'qui',
        ],
        friends: [
          {
            id: 0,
            name: 'Riddle Contreras',
          },
          {
            id: 1,
            name: 'Kirby York',
          },
          {
            id: 2,
            name: 'Beatrice Trujillo',
          },
          {
            id: 3,
            name: 'Travis Gates',
          },
          {
            id: 4,
            name: 'Peggy Cote',
          },
          {
            id: 5,
            name: 'Elaine Tyson',
          },
        ],
        favoriteFruit: 'strawberry',
      },
      {
        id: '6188e9e06edbb7d1ad4974a2',
        index: 17,
        guid: '9dcfb7ee-4702-4863-8e48-64b5be68c7eb',
        isActive: true,
        balance: 1200.62,
        picture: 'http://placehold.it/32x32',
        age: 19,
        eyeColor: 'blue',
        name: 'Colleen Franco',
        gender: 'female',
        company: 'ZEPITOPE',
        email: 'colleenfranco@zepitope.com',
        phone: '+1 (975) 467-3749',
        address: '861 Taaffe Place, Alderpoint, Oklahoma, 2345',
        about:
          'Duis anim nulla laboris mollit mollit consequat id aliqua cillum qui sunt duis. Deserunt pariatur anim et consequat velit excepteur irure sunt et officia fugiat ipsum exercitation proident. Pariatur eiusmod in pariatur nulla ex non quis labore mollit cillum. Sit reprehenderit labore est dolore duis dolore cillum laboris.\r\n',
        registered: '2019-09-11T07:15:07 -02:00',
        latitude: 4.354618,
        longitude: 23.914555,
        tags: [
          'voluptate',
          'ullamco',
          'ea',
          'ipsum',
          'velit',
          'cupidatat',
          'non',
        ],
        friends: [
          {
            id: 0,
            name: 'Sheila Clay',
          },
          {
            id: 1,
            name: 'Estela Owen',
          },
          {
            id: 2,
            name: 'Rosemarie Spears',
          },
          {
            id: 3,
            name: 'Jocelyn Richardson',
          },
        ],
        favoriteFruit: 'banana',
      },
      {
        id: '6188e9e035e8274c545a80be',
        index: 18,
        guid: 'dc44739f-44e4-4e05-9168-ff651d2dbc30',
        isActive: true,
        balance: 2364.25,
        picture: 'http://placehold.it/32x32',
        age: 60,
        eyeColor: 'green',
        name: 'Acosta Patton',
        gender: 'male',
        company: 'STRALOY',
        email: 'acostapatton@straloy.com',
        phone: '+1 (972) 499-3878',
        address: '490 Boulevard Court, Odessa, Idaho, 9700',
        about:
          'Lorem do ullamco velit sint velit sit mollit Lorem irure commodo. Ea ut proident anim velit eiusmod nisi. Deserunt quis fugiat mollit commodo nulla laborum do sunt Lorem fugiat esse labore tempor. Ad reprehenderit nulla enim non ad voluptate labore sit.\r\n',
        registered: '2016-03-27T11:02:05 -02:00',
        latitude: -24.861942,
        longitude: -170.706652,
        tags: ['anim', 'proident', 'dolor', 'non', 'ea', 'ullamco', 'laboris'],
        friends: [
          {
            id: 0,
            name: 'Peck Preston',
          },
        ],
        favoriteFruit: 'apple',
      },
      {
        id: '6188e9e03bf6f7a32122591b',
        index: 19,
        guid: '81282c53-efd9-414e-872b-b000ad96fa02',
        isActive: false,
        balance: 2216.95,
        picture: 'http://placehold.it/32x32',
        age: 59,
        eyeColor: 'green',
        name: 'Walker White',
        gender: 'male',
        company: 'RODEOLOGY',
        email: 'walkerwhite@rodeology.com',
        phone: '+1 (833) 434-2371',
        address: '240 Beekman Place, Tyro, Palau, 3139',
        about:
          'Laborum ipsum et consequat esse est minim sunt sint nisi adipisicing. Non laboris est voluptate Lorem adipisicing eu culpa cillum voluptate Lorem. Veniam reprehenderit anim cillum dolor velit nostrud esse. Ea dolor ipsum ipsum labore labore sint non mollit magna nisi id ex.\r\n',
        registered: '2017-06-08T04:40:23 -02:00',
        latitude: 17.05674,
        longitude: -51.642021,
        tags: ['id', 'enim', 'deserunt', 'est', 'esse', 'aute', 'incididunt'],
        friends: [
          {
            id: 0,
            name: 'Lillian Alford',
          },
          {
            id: 1,
            name: 'Pope Olsen',
          },
          {
            id: 2,
            name: 'Sybil Terry',
          },
          {
            id: 3,
            name: 'Fuller Knapp',
          },
          {
            id: 4,
            name: 'Jones Holman',
          },
        ],
        favoriteFruit: 'strawberry',
      },
    ];
  },
});
</script>

<style lang="scss" module>
.workspace {
  display: flex;
  justify-content: center;
}
.sideBar {
  margin-top: 100px;
}
.button {
  margin-left: 10px;
}
</style>
