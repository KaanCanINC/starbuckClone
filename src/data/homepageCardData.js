const data = [
  {
    title: "MANGO DRAGON GERİ DÖNDÜÜÜÜ! 😍🐲",
    subtitle:
      "Geçen yazın sevilen lezzeti Mango Dragonfruit Refresha®, bu yaz da seninle! 🏄🏻 Tüm Refresha® ailemizle yaz mevsimi tam senin istediğin gibi! 😋 İster mağazalarımızda, ister Starbucks® Delivers ile yaz serinliği dilediğin yerde. 🛵",
    image:
      "https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTU2ODcxMDE1NjYsImNsYWltcyI6e30sImlhdCI6MTcxNTY4NzEwMSwiZXhwIjoxNzE1Njg3NDAxLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.tPkKrIZ7MEsUn8OiqxnG5k_EWuMsWT8qvnqPeOqxTJ4&data=eyJpbWFnZUlkIjoiMGI1ODI1YTktMTk4Ny00N2M4LWEyODQtMTVlZWQyZjFiZGVhIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&",
    buttons: [
      { id: 1, text: "Yemeksepeti" },
      { id: 2, text: "Getiryemek" },
    ],
  },
  {
    title: "Burası Senin Yerin ☕️💚",
    subtitle:
      "Hayatın içinde, her gülümsemede, her sohbette, cesaretle adım attığın her anda, ustalıkla yapılmış bir fincan kahveyle hayatlara dokunduğun, her zaman sevildiğin, kendin olabildiğin yerdesin. Yeni reklam filmimiz #BurasıSeninYerin’i izlemek için tıkla! ✨",
    image:
      "https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTU2ODcxMDE1NjYsImNsYWltcyI6e30sImlhdCI6MTcxNTY4NzEwMSwiZXhwIjoxNzE1Njg3NDAxLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.tPkKrIZ7MEsUn8OiqxnG5k_EWuMsWT8qvnqPeOqxTJ4&data=eyJpbWFnZUlkIjoiNmE5MTNjNDYtYWM5My00ZGZhLWE2NTMtMThiN2I2ZDI4MDg4IiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&",
    buttons: [{ id: 1, text: "Hemen izle" }],
  },
  {
    title: "YENİ Starbucks® ürünleriyle yazın enerjisine ortak ol 🥳",
    subtitle:
      "Yazına renk katacak Starbucks® ürünlerinin yeni üyeleriyle tanışmaya hazır mısın? Çok seveceğin, yaz temalı yeni Starbucks® kupa, termos ve aksesuarları ile keyif dolu anların tadını çıkar!🌞 Yazın eşsiz renkleriyle buluşan yeni Starbucks® koleksiyonu şimdi Hepsiburada, Shayakahve.com.tr ve mağazalarımızda seni bekliyor! 👇🏻",
    image:
      "https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTU2ODcxMDE1NjYsImNsYWltcyI6e30sImlhdCI6MTcxNTY4NzEwMSwiZXhwIjoxNzE1Njg3NDAxLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.tPkKrIZ7MEsUn8OiqxnG5k_EWuMsWT8qvnqPeOqxTJ4&data=eyJpbWFnZUlkIjoiZWEzNTVhZWQtNDhhZC00NGE2LWE4NDktYjg0NmQzOGZlNjIzIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&",
    buttons: [
      { id: 1, text: "Shaya Kahve" },
      { id: 2, text: "Hepsiburada" },
    ],
  },
  {
    title: "Starbucks®'tan Açıklamalar",
    subtitle:
      "Starbucks® hakkında basında ve sosyal medyada sürekli olarak gerçeği yansıtmayan haberlerin ve yanıltıcı bilgilerin paylaşılması nedeniyle Starbucks®'a yöneltilen en sık sorulardan bazılarını derledik. Bu soruların yanıtlarını paylaşmak isteriz.",
    image:
      "https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTU2ODcxMDE1NjYsImNsYWltcyI6e30sImlhdCI6MTcxNTY4NzEwMSwiZXhwIjoxNzE1Njg3NDAxLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.tPkKrIZ7MEsUn8OiqxnG5k_EWuMsWT8qvnqPeOqxTJ4&data=eyJpbWFnZUlkIjoiODliOTQ1YTgtNTEyNi00NDQ4LWFmNzQtOTFjZGU4N2FmNzkzIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&",
    buttons: [{ id: 1, text: "Daha fazla bilgi" }],
  },
  {
    title: "Dilediğin Gibi Öde Yıldız Kazan! ⭐",
    subtitle:
      "Starbucks® Mobil’de yeni dönem başladı! Ödemeni nakit, kredi kartı veya Starbucks® Mobil ile yap, tüm harcamalarında yıldız kazan!",
    image:
      "https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTU2ODcxMDE1NjYsImNsYWltcyI6e30sImlhdCI6MTcxNTY4NzEwMSwiZXhwIjoxNzE1Njg3NDAxLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.tPkKrIZ7MEsUn8OiqxnG5k_EWuMsWT8qvnqPeOqxTJ4&data=eyJpbWFnZUlkIjoiNWRlMmE3MzUtNWZhYS00NWRkLWFlZTMtMTllODgwZTE1NDM5IiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&",
    buttons: [{ id: 1, text: "Detaylı Bilgi" }],
  },
  {
    title:
      "Starbucks® Türkiye olarak attığımız her adım daha iyi yarınlar için.",
    subtitle:
      "Yarınları düşünenlerle #KalpKalbe çıktığımız yolculuklarda hedefimiz her zaman daha iyi bir gelecek.",
    image:
      "https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTU2ODcxMDE1NjYsImNsYWltcyI6e30sImlhdCI6MTcxNTY4NzEwMSwiZXhwIjoxNzE1Njg3NDAxLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.tPkKrIZ7MEsUn8OiqxnG5k_EWuMsWT8qvnqPeOqxTJ4&data=eyJpbWFnZUlkIjoiODc2MmRkMjEtZTMwOS00MGI4LTk3ODktMjllMTg5ZjdlNDk2IiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&",
    buttons: [{ id: 1, text: "Projelerimiz Hakkında Detaylı Bilgi" }],
  },
  {
    title: "",
    subtitle:
      "Starbucks® Delivers ile siparişini ver, sen neredeysen kahven oraya gelsin!",
    image:
      "https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTU2ODcxMDE1NjYsImNsYWltcyI6e30sImlhdCI6MTcxNTY4NzEwMSwiZXhwIjoxNzE1Njg3NDAxLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.tPkKrIZ7MEsUn8OiqxnG5k_EWuMsWT8qvnqPeOqxTJ4&data=eyJpbWFnZUlkIjoiNWJjNjQ5YzktMGFlNS00ZWU4LWI2M2YtNTU0YWU0M2VjNzFkIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&",
    buttons: [
      { id: 1, text: "Yemeksepeti" },
      { id: 2, text: "Getiryemek Başla" },
    ],
  },
  {
    title: "",
    subtitle:
      "Starbucks® Mobil Uygulaması’nın ayrıcalıklı dünyası ve güncel kampanyalardan haberdar ol.",
    image:
      "https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTU2ODcxMDE1NjYsImNsYWltcyI6e30sImlhdCI6MTcxNTY4NzEwMSwiZXhwIjoxNzE1Njg3NDAxLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.tPkKrIZ7MEsUn8OiqxnG5k_EWuMsWT8qvnqPeOqxTJ4&data=eyJpbWFnZUlkIjoiN2JlMTYzY2QtMDZiZC00M2IwLWI2MmMtNTlmZWJmZTUyZGQ1IiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&",
    buttons: [{ id: 1, text: "Hemen İncele" }],
  },
  {
    title: "Arabaya servis ile ara vermeden yolculuğuna lezzet kat!",
    subtitle:
      "Aracından inmeden Starbucks® Drive Thru mağazalarımızdan siparişini ver, ara vermeden yolculuğuna lezzet kat! 🚗 Şimdilik sınırlı mağazalarımızda: 📍Şekerpınar 📍Manavgat 📍Balıkesir O204 📍Ankara Vega Cadde Yeni Drive Thru lokasyonlarımız için starbucks.com.tr'yi ziyaret etmeyi ve bizi sosyal medya hesaplarımızdan takip etmeyi unutma!",
    image:
      "https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTU2ODcxMDE1NjYsImNsYWltcyI6e30sImlhdCI6MTcxNTY4NzEwMSwiZXhwIjoxNzE1Njg3NDAxLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.tPkKrIZ7MEsUn8OiqxnG5k_EWuMsWT8qvnqPeOqxTJ4&data=eyJpbWFnZUlkIjoiMTkyOTk2NDgtZTVhOS00NTk2LWE4ZDktNDQ2NjE5ZmE2NDg4IiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&",
    buttons: [],
  },
  {
    title: "Eşsiz bir deneyim seni bekliyor!",
    subtitle:
      "Egzotik bölgelerden nadir kahve çekirdeklerini özenle topladık ve Milano Roastry’de ustalıkla kavurduk. Her fincan kahve ayrı bir hikaye demek ve belki de bu hikayenin bir daha tekrarı yok!",
    image:
      "https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTU2ODcxMDE1NjYsImNsYWltcyI6e30sImlhdCI6MTcxNTY4NzEwMSwiZXhwIjoxNzE1Njg3NDAxLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.tPkKrIZ7MEsUn8OiqxnG5k_EWuMsWT8qvnqPeOqxTJ4&data=eyJpbWFnZUlkIjoiZThkOGQ4MjItMWRjNS00MGQ3LTllMDgtYTI0YjYxY2NjYjMyIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&",
    buttons: [{ id: 1, text: "Detaylı Bilgi" }],
  },
];

export default data;
