/* Shared content + page chrome for the Bulgaria facts site (vanilla JS) */
var TOPICS = [
  {
    slug: "history",
    name: "History",
    lead: "Founded in 681 AD, Bulgaria is one of the oldest states in Europe.",
    cards: [
      ["Founded in 681 AD", "Khan Asparuh signed a treaty with Byzantium that recognised the Bulgarian state south of the Danube — the country has kept the same name ever since, making it the oldest country in Europe that never changed its name."],
      ["Two medieval empires", "The First Bulgarian Empire (681–1018) and the Second (1185–1396) stretched at times from the Adriatic to the Black Sea and were major cultural powers of the Balkans."],
      ["Five centuries under Ottoman rule", "From 1396 to 1878 Bulgaria was part of the Ottoman Empire. Liberation came after the Russo-Turkish War, and 3 March is celebrated as National Liberation Day."],
      ["Modern Bulgaria", "A republic since 1946, Bulgaria left communism behind in 1989, joined NATO in 2004 and the European Union in 2007."]
    ]
  },
  {
    slug: "geography",
    name: "Geography",
    lead: "Mountains, plains, a great river and 378 km of Black Sea coastline.",
    cards: [
      ["Where it is", "Bulgaria sits in southeastern Europe on the Balkan Peninsula, bordering Romania, Serbia, North Macedonia, Greece, Türkiye and the Black Sea."],
      ["Musala, the Balkan roof", "At 2,925 m, Musala peak in the Rila Mountains is the highest point in the whole Balkan Peninsula."],
      ["The Danube border", "The Danube forms most of the northern border. The Iskar is the longest river running entirely inside the country."],
      ["Seven mountain ranges", "The Balkan Range (Stara Planina) crosses the country from west to east and gave its name to the entire peninsula."]
    ]
  },
  {
    slug: "culture",
    name: "Culture & Traditions",
    lead: "Martenitsa, nestinarstvo and a nod that means 'no'.",
    cards: [
      ["Nodding means no", "Bulgarians traditionally shake their head for 'yes' and nod for 'no' — one of the most famous cultural surprises for visitors."],
      ["Martenitsa on 1 March", "People exchange red-and-white yarn tokens called martenitsi to welcome spring, wearing them until they see a stork or a blossoming tree."],
      ["Nestinarstvo", "Barefoot fire dancing on live embers, inscribed on the UNESCO list of Intangible Cultural Heritage."],
      ["Kukeri", "In winter, masked dancers in enormous bells and fur costumes parade through villages to chase away evil spirits."]
    ]
  },
  {
    slug: "cuisine",
    name: "Cuisine",
    lead: "Yogurt, banitsa, shopska salad and a serious love of herbs.",
    cards: [
      ["Bulgarian yogurt", "Lactobacillus bulgaricus, the bacterium behind real Bulgarian yogurt, is named after the country and thrives naturally in its air and milk."],
      ["Shopska salad", "Tomatoes, cucumbers, peppers, onion and grated white brine cheese — the colours of the national flag on a plate."],
      ["Banitsa", "Flaky filo pastry layered with cheese and eggs, baked for breakfast, holidays and New Year's Eve fortune-telling."],
      ["Rakia and lyutenitsa", "Fruit brandy served with salad, and a slow-cooked pepper-and-tomato relish that most families still make at home each autumn."]
    ]
  },
  {
    slug: "rose-valley",
    name: "The Rose Valley",
    lead: "Bulgaria supplies a large share of the world's rose oil.",
    cards: [
      ["Kazanlak and Karlovo", "The valley between the Balkan Range and Sredna Gora has grown Rosa damascena since the 17th century."],
      ["Liquid gold", "It takes roughly 3,000 kg of rose petals to distil a single kilogram of rose oil, which is worth more per gram than gold."],
      ["Hand-picked at dawn", "Petals are gathered between 5 and 10 in the morning, before the sun evaporates the essential oils."],
      ["The Rose Festival", "Every June, Kazanlak crowns a Rose Queen and celebrates the harvest with parades, folk dancing and rose-picking rituals."]
    ]
  },
  {
    slug: "language",
    name: "Language & Cyrillic",
    lead: "The Cyrillic alphabet was born here and travelled the world.",
    cards: [
      ["Cyrillic's birthplace", "The alphabet was developed in the Preslav Literary School in the 9th century, based on the Glagolitic script of Saints Cyril and Methodius."],
      ["An official EU alphabet", "When Bulgaria joined the EU in 2007, Cyrillic became the third official alphabet of the Union alongside Latin and Greek."],
      ["First Slavic literary language", "Old Bulgarian (Old Church Slavonic) was the literary language of much of the Slavic world for centuries."],
      ["24 May", "The Day of Bulgarian Enlightenment and Culture and of Slavonic Literature is the country's most beloved holiday."]
    ]
  },
  {
    slug: "music",
    name: "Music & Folklore",
    lead: "Voices that were sent into interstellar space.",
    cards: [
      ["A song aboard Voyager", "The folk song 'Izlel e Delyo Haydutin', sung by Valya Balkanska, is on the Golden Record carried by NASA's Voyager spacecraft."],
      ["Le Mystère des Voix Bulgares", "The Grammy-winning women's choir made Bulgaria's open-throated diaphonic singing famous worldwide."],
      ["Impossible rhythms", "Folk dances use uneven metres like 7/8, 11/16 and 13/16 that sound almost unplayable to outsiders."],
      ["The gaida", "The Rhodope bagpipe, or kaba gaida, has a deep drone that carries across whole mountain valleys."]
    ]
  },
  {
    slug: "unesco",
    name: "UNESCO Sites",
    lead: "Ten World Heritage Sites, from Thracian tombs to painted monasteries.",
    cards: [
      ["Rila Monastery", "Founded in the 10th century, rebuilt in the 19th, and covered in vivid frescoes — the spiritual heart of the country."],
      ["Boyana Church", "Its 1259 frescoes are considered a forerunner of the European Renaissance."],
      ["Thracian tombs", "The tombs of Kazanlak and Sveshtari preserve extraordinary Hellenistic-era murals and caryatids."],
      ["Ancient Nessebar", "A rocky peninsula town on the Black Sea packed with Byzantine churches and wooden Revival houses."]
    ]
  },
  {
    slug: "nature",
    name: "Nature & Wildlife",
    lead: "One of Europe's richest countries for biodiversity.",
    cards: [
      ["Three national parks", "Rila, Pirin and Central Balkan protect glacial lakes, ancient forests and some of Europe's largest wild areas."],
      ["The Seven Rila Lakes", "A cascade of glacial lakes with names like The Tear, The Eye and The Kidney, sitting above 2,000 m."],
      ["Brown bears and wolves", "Bulgaria still shelters healthy populations of brown bears, wolves, jackals and over 400 bird species."],
      ["Baikushev's Pine", "A Bosnian pine in Pirin estimated to be more than 1,300 years old — as old as the Bulgarian state itself."]
    ]
  },
  {
    slug: "sports",
    name: "Sports",
    lead: "Weightlifting, wrestling, volleyball and one unforgettable summer.",
    cards: [
      ["USA '94", "The national football team beat Germany and reached the World Cup semi-finals, with Hristo Stoichkov sharing the Golden Boot."],
      ["Stoichkov's Ballon d'Or", "Hristo Stoichkov won the 1994 Ballon d'Or and is still the country's most celebrated athlete."],
      ["Weightlifting powerhouse", "Bulgarian weightlifters and their famous training method dominated world podiums through the 1970s and 80s."],
      ["Rhythmic gymnastics", "The 'Golden Girls' have collected world and Olympic titles for decades, making the sport a national obsession."]
    ]
  },
  {
    slug: "famous-bulgarians",
    name: "Famous Bulgarians",
    lead: "Artists, scientists and thinkers with global reach.",
    cards: [
      ["Christo and Jeanne-Claude", "Christo Yavashev, born in Gabrovo, wrapped the Reichstag and the Pont Neuf and floated piers across Lake Iseo."],
      ["John Atanasoff", "The son of a Bulgarian immigrant, he built the first electronic digital computer, the ABC, at Iowa State."],
      ["Elias Canetti", "Born in Ruse, he won the 1981 Nobel Prize in Literature."],
      ["Baba Vanga", "The blind mystic from Petrich remains one of the country's most talked-about modern figures."]
    ]
  },
  {
    slug: "cities",
    name: "Cities",
    lead: "From an 8,000-year-old town to a capital under a mountain.",
    cards: [
      ["Sofia", "The capital grew around mineral springs and sits at the foot of Vitosha mountain; its motto is 'It grows but does not age'."],
      ["Plovdiv", "One of the oldest continuously inhabited cities in Europe, with a Roman theatre still hosting concerts. European Capital of Culture in 2019."],
      ["Veliko Tarnovo", "The medieval capital, built on three hills above the Yantra river around the Tsarevets fortress."],
      ["Varna and Burgas", "The Black Sea capitals — Varna holds the oldest processed gold treasure in the world, dated to around 4,500 BC."]
    ]
  }
];

var HOME_FACTS = [
  "Bulgaria was founded in 681 AD and is the only country in Europe that has never changed its name.",
  "Its Rose Valley produces a large share of the world's rose oil, distilled from petals picked by hand at dawn.",
  "The Cyrillic alphabet, used today by hundreds of millions of people, was created here in the 9th century."
];
