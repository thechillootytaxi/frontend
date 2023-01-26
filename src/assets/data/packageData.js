import coonoor from "../all-images/packages-img/coonoor.jpg";
import mudumalai from "../all-images/packages-img/mudumalai.jpg";
import ooty from "../all-images/packages-img/ooty.jpg";
import pykara from "../all-images/packages-img/pykara.jpg";
import avalanche from "../all-images/packages-img/avalanche.jpg";
import { notes } from "./notes";

const packageData = [
    {
      id: 1,
      packageName: "Ooty",
      imgUrl: ooty,
      minPrice: 1800,
      description: "Ooty is noted for a delightful scenic backdrop of nature. Set inside the Nilgiri hills, these blue mountains can almost make you forget the scorching heat of sun. The charm of the forests here are undeniably spectacular, stunning and romantic for trekking.  These hills sprawl between the green valleys and lakes. There are fine view points, tea plantations, falls, grasslands, pine and wattle lining the landscapes and above all the tranquil climate and the air can only leave a visitor refreshing and relaxed.",
      places: ["Tea Museum", "Dottabetta", "Rose Garden", "Wax Museum", "Ooty Lake", "Thread Garden", "Karnataka Garden", "Botanical Garden"],
      notes: [...notes, "Get additional ride of 50km that comes free with this package"],
      prices: [{car: "etios", price: 1800}, {car: "innova", price: 2800}, {car: "swift dezire", price: 1800}, {car: "xylo", price: 2500},{car: "swaraj mazda", price: 4800}, {car: "tempo traveller", price: 3000} ]
    },
  
    {
      id: 2,
      packageName: "Pykara",
      imgUrl: pykara,
      minPrice: 2000,
      description: "Pykara Lake has over the years become very popular among tourists. The water spread extending over several kilometres had been converted into a boating facility about 13 years ago to relieve congestion at Ooty Lake. Pykara Lake, a popular getaway from Ooty, is a placid lake located between the lush green valleys of Ooty. Surrounded by dense forests, there is a forest rest house in the area. Additionally, Pykara is known for its boat house, which is near the Pykara falls and Dam. The boat house also includes a restaurant and a rest house, where tourists can relax. Tourists can visit the clean and beautiful Pykara Lake, which is free from pollution and is not very crowded. Boating is a key attraction of this lake and tourists can enjoy it at a reasonable price.",
      places: ["Golf Links", "Pine Forest", "Cine Shooting Places", "6th Mile", "Kamraj Sagar Dam", "Pykara Falls & BoatHouse"],
      notes: [...notes, "Get additional ride of 60km that comes free with this package"],
      prices: [{car: "etios", price: 2000}, {car: "innova", price: 2800}, {car: "swift dezire", price: 2000}, {car: "xylo", price: 2600},{car: "swaraj mazda", price: 4800}, {car: "tempo traveller", price: 3500} ]
    },
  
    {
      id: 3,
      packageName: "Mudumalai",
      imgUrl: mudumalai, 
      minPrice: 2000,
      description: "The 321 sq. km. reserve, one of the most picturesque destinations provides diverse habitats like hills, valleys, ravines, watercourses and swamps. The vegetation comprises of moist deciduous forests, dry deciduous forests and scrub forests which make Mudumalai a most attractive wildlife reserve. Apart from rich fauna, the wide range of animal and bird life has made this sanctuary a hot spot for the wildlife enthusiasts. It has one of the largest populations of elephants in the country, supposedly numbers about 600 and gaur in the region. Another attraction is the giant Malabar squirrel. The other animals found here include Macaque, Common Langur, Tigers, Leopards, Chital, Panther, bonnet macaque, Sloth Bear, Python, Barking Deer, Four Horned Antelope, Otter, Crocodiles (Mugger), Giant Flying Squirrel, Sambar, Hyena, Wild Dog, Wild Boar, Mouse Deer, Spotted Deer, Jackal, Hare, Porcupine, Pangolin the scaly ant eater and Mongoose. The birds spotted in this sanctuary are Peacock, Grey Jungle Fowl, Red Spur Fowl, Grey Partridge Quails, Goggle Eyed Plower, Malabar Whistling Thrush, Large Racket-Tailed Dronge, The Magpie-robin, Spotted Babbler, woodpeckers, Small Green Barbet, Green Pigeons, Brown Dove, Malabar Grey Hornbill, Bulbuls, Mynahs, etc. Among birds of prey, Eagles, Hawks, Buzzards, Harriers, Falcons and King Vulture are predominant, besides some migratory water birds. Morning time trekking is preferable since to watch more bird variety.",
      places: ["Mudumalai WildLife Sanctuary"],
      notes: [...notes, "Get additional ride of 70km that comes free with this package"],
      prices: [{car: "etios", price: 2200}, {car: "innova", price: 2800}, {car: "swift dezire", price: 2000}, {car: "xylo", price: 2500},{car: "swaraj mazda", price: 4000}, {car: "tempo traveller", price: 3500} ]
    },
  
    {
      id: 4,
      packageName: "Coonoor",
      imgUrl: coonoor,
      minPrice: 2200,
      description: "Coonoor India is the second largest hill station located in the Nilgiri hills. Famous for its verdant environs, Coonoor is home to various wildflowers and birds. Coonoor provides a perfect setting for activities like trekking and hiking. It is also famous for its tea plantations and festivals. Travelers can also enjoy the ride on the toy train, which connects Coonoor with other hill stations in the Nilgiri Hills. Coonoor provides the traveler with a panoramic view of the lush green Nilgiri hills, ravines, valleys, and waterfalls. Bird watching is a popular pastime in Coonoor, as the area boasts of a large variety of species like cormorants, pipits, thrushes, parakeets, skylarks, Nilgiri verditer, etc. Apart from these, here are some of the places to visit for memorable Coonoor sightseeing",
      places: ["MRC (outer view)", "Tea Garden", "Sim's Park", "Ketti Valley View", "Lamb's Rock", "Dolphin Nose"],
      notes: [...notes, "Get additional ride of 120km that comes free with this package"],
      prices: [{car: "etios", price: 2000}, {car: "innova", price: 3000}, {car: "swift dezire", price: 2000}, {car: "xylo", price: 3200},{car: "swaraj mazda", price: 4500}, {car: "tempo traveller", price: 3800} ]
    },
    {
      id: 5,
      packageName: "Avalanche",
      imgUrl: avalanche,
      minPrice: 2500,
      description: "Avalanche is an important tourism destination in the Nilgiris District, 28kms away from Ooty town. This is a place that is called paradise of the Nilgiris due to its wonderful lake and the amazing sholas around it. The mist and fog that roll over in the early morning and the beauty of the lake during the day does attract tourists towards this place. This area is surrounded by a rolling landscape with blooming flowers like magnolias, orchids and rhododendrons. This area is thus very rich in vegetation and other life. In terms of this broader definition, shola forests are found all along the upper reaches of the Western Ghats where the elevation goes beyond 2,500 meters above sea level. This area lies in Kundha Reserved Forests comprising two Forest Ranges namely Udhagai South and Korakundah Ranges. A trek from avalanche to Kolaribetta is an exciting one, which will be a memorable one to those who go on a trek.",
      places: ["Arboretum", "100 yr Old Church", "Cairn Hills", "Vegetable Lands", "Tea Plantation", "Avalanche", "Thoda village", "Borthy & Emerald dams"],
      notes: [...notes, "Get additional ride of 70km that comes free with this package"],
      prices: [{car: "etios", price: 2000}, {car: "innova", price: 2800}, {car: "swift dezire", price: 2000}, {car: "xylo", price: 2500},{car: "swaraj mazda", price: 4500}, {car: "tempo traveller", price: 4000} ]
    }
  ];
  
  export default packageData;