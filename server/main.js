import {
   Meteor
}
from 'meteor/meteor';

Meteor.startup(() => {
   // code to run on server at startup
   console.log(Uitspraken.find().count());

   if (Uitspraken.find().count() === 0) {

      let data = [{
            "uitspraak": "Extended aangeleverd",
            "uitleg": "Bij dergelijke aanleveringen van zeecontainers wordt 'de lange arm van Twente' ingezet.",
            "image": "http://fineartamerica.com/images-medium/the-long-arm-of-poseidon-carl-purcell.jpg"
         }, {
            "uitspraak": "Doordraaien",
            "uitleg": "Hiermee wordt bedoeld dat de schipper meer gas mag geven om eerder te arriveren op een aangeven locatie. Dit is dus geen instructie aan de schipper om knettergek te worden.",
            "image": "http://resources.phrasemix.com/img/full/crazy.jpg"
         }, {
            "uitspraak": "Er een harde bats op geven",
            "uitleg": "Uit onderzoek blijkt dat dit in de rest van Nederland nog een vrij onbekend begrip is. We doen ons best om dit ook zo te houden.",
            "image": "http://static.webshopapp.com/shops/030880/files/010203079/streuding-dul-35-mm-drents-bats-extra-geharde-sned.jpg"
         }, {
            "uitspraak": "Rotatievrij",
            "uitleg": "Er kan vrijelijk gelost en geladen worden ongeacht de volgorde van de adressen die aangedaan worden. Nu nog af en toe het stuwplan van de schipper bekijken en dan zou het zo maar kunnen dat het inderdaad mogelijk is.",
            "image": "http://www.solutions-signaletique.com/upload/m37-sens-de-rotation-bn-wecdmZB2.jpg"
         }, {
            "uitspraak": "Alles ligt weer triple",
            "uitleg": "Het is druk bij ECT aan de waterkant, verwacht vertragingen.",
            "image": "https://www.thesun.co.uk/wp-content/uploads/2016/08/nintchdbpict000258175557.jpg"
         }, {
            "uitspraak": "De lichter roteert",
            "uitleg": "Dit is geen ronddraaiend binnenvaartschip, maar een wijziging in de volgorde waarop het binnenvaartschip de adressen aandoet in de haven van Rotterdam. Wordt soms ook gebruikt als een binnenvaartschip van plek wisselt bij de kade in Hengelo. Dit maakt de term enigszins verwarrend en uiterst situationeel.",
            "image": "http://www.euroszeilen.utwente.nl/wiki/images/thumb/5/59/Fig57.gif/600px-Fig57.gif"
         }, {
            "uitspraak": "Een rondje bellen",
            "uitleg": "Primitieve invulling van noodzakelijke communicatie in een logistiek proces waaraan digibeten ook kunnen deelnemen. De uitspraak komt ook deels voort uit het feit dat veel terminals in Rotterdam de 21e eeuw nog niet hebben bereikt op het gebied van automatisering.",
            "image": "https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/phone-circle-red-2-512.png"
         }, {
            "uitspraak": "CTT OPR Barge",
            "uitleg": "Hiermee wordt de operationele afdeling van de Callplanning bedoeld, tenzij OPR als OPA gespeld had moeten worden.",
            "image": "https://www.kaartje2go.nl/wenskaarten-divers/wenskaart-i-love-opa/img/wenskaart-i-love-opa.jpg"
         }, {
            "uitspraak": "Full handling",
            "uitleg": "Dit is meer dan een beetje handlen van een volledige binnenvaartschip op een specifieke locatie. Een onvolledige binnenvaartschip helemaal behandelen is overigens geen Empty handling.",
            "image": "http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/e3938120-84c4-11e6-bd14-c7e8927e0d65.png"
         }, {
            "uitspraak": "Cocks kraan",
            "uitleg": "Engels-Nederlandse verbastering van een kraan met mannelijke genitaliën. Hiermee wort de Kocks kraan bedoeld die naast de Figee kraan staat in Hengelo. Vanwege bedrijfsbeleid mag niet zonder meer aangenomen worden dat hiermee de Figee kraan vrouwelijk is.",
            "image": "http://g02.a.alicdn.com/kf/HTB1IM.NHVXXXXXXXVXXq6xXFXXX6/underwear-men-sexy-faux-font-b-leather-b-font-Men-s-fashion-boxers-font-b-shorts.jpg"
         }, {
            "uitspraak": "De schepen volproppen",
            "uitleg": "Alle sexuele innuendo moet bij deze uitspraak vermeden worden. De uitspraak wordt veelal gebruikt in het proces van het indelen van containers op binnenvaartschepen.",
            "image": "https://i.ytimg.com/vi/yLH7G511hHY/hqdefault.jpg"
         }, {
            "uitspraak": "Mijn Filosofie",
            "uitleg": "Een duidelijke verwijzing naar de theoretische discipline van het verlangen naar het uitdrukken van kennis en wijsheid in een planproces. In de volksmond wordt dit ook wel 'wijsheid achter af' genoemd.",
            "image": "http://michael-hudson.com/wp-content/uploads/2016/07/Socrates.jpg"
         }, {
            "uitspraak": "Split call",
            "uitleg": "De term split is ook een geadopteerde term uit Bowling. Een split call is een planning waarbij de calls zodanig gepland staan dat ze nagenoeg onmogelijk met één schip kunnen worden gedaan.",
            "image": "http://www.slate.com/content/dam/slate/articles/sports/sports_nut/2015/02/140205_SNUT_7-10-Split.jpg.CROP.promo-mediumlarge.jpg"
         }, {
            "uitspraak": "Vrijgestuwd of vrij gestuwd",
            "uitleg": "Containers kunnen in willekeurige volgorde gelost of geladen worden vanwege een flexibele stuwage.",
            "image": "https://salonvansisyphus.files.wordpress.com/2013/04/sinking-2.jpg"
         }, {
            "uitspraak": "3x 100 meter kade verbouwen",
            "uitleg": "De directie van CTT heeft vriendelijk doch dringend verzocht om dit aan de experts over te laten.",
            "image": "http://stormcell.be/media/k2/items/cache/4cd4eaee1c7cc4757d33459591114de7_XL.jpg"
         }, {
            "uitspraak": "Hocus Scopus, dikke tokus",
            "uitleg": "Hiermee wordt het binnenvaartschip de Scopus bedoeld.",
            "image": "https://thumbs.dreamstime.com/z/vriendschappelijke-tovenaar-11790593.jpg"
         }, {
            "uitspraak": "Door het riool",
            "uitleg": "Alternatieve vaarroute voor de binnenvaart wat meestal resulteert in vertragingen of zelfs opstopping/congestie.",
            "image": "http://mediaplanet.azureedge.net/images/1261/48454/riool-golfbaan.png"
         }, {
            "uitspraak": "Chinees Indisch Restaurant, Wat-Woi",
            "uitleg": "Paralelle import van goederen uit het verre oosten bestemd voor directe consumptie. Komt geen planning aan te pas. De juiste reactie op deze uitspraak is 'nummer 13'.",
            "image": "http://palacebreda.nl/wp-content/uploads/2015/07/ingang.jpg"
         }, {
            "uitspraak": "Welke Kip?? Oo, Sam’s Kip!",
            "uitleg": "Henk's favoriete comfortfood uit Rotterdam.",
            "image": "http://www.samschicken.com/wpimages/wpa0b04449_05_06.jpg"
         }, {
            "uitspraak": "Ooh Groeneboom, Ooh Groeneboom, wat zijn uw takken wonderschoon",
            "uitleg": "Henk's favoriete kerstliedje met een toefje terminal uit Ridderkerk. Wordt ook soms rond Pasen gezongen.",
            "image": "http://www.woneninmortsel.be/wp-content/uploads/2016/12/kerstboom.jpg"
         }, {
            "uitspraak": "Rob, je bent ontslagen k*t!",
            "uitleg": "Henk's ultieme poging om de planning van RST-Zuid samen met Rob onder controle te krijgen.",
            "image": "http://www.startup-toolkit.eu/admin/ckeditor/plugins/doksoft_uploader/userfiles/planning-243x300.png"
         }, {
            "uitspraak": "Dan ga ik nu de kade Zuid vervroegen",
            "uitleg": "Tijdsuitspraak relatief aan de periode waarop een afspraak is afgestemd gerekend vanaf de Greenwich Mean Time met Spring Equinox compensatie. Meer info bij huisvriend Albert.",
            "image": "http://hellenicleaders.com/wp-content/uploads/2016/03/einstein-horizontal3-1024x664.jpg"
         }, {
            "uitspraak": "Senior Bargeoperator",
            "uitleg": "De oudste van ons allemaal!",
            "image": "http://www.clipartkid.com/images/137/keith-s-ramblings-wise-eyes-pNPPc9-clipart.png"
         }, {
            "uitspraak": "Toastie-tortellini",
            "uitleg": "Andere naam voor de lichter Borelli. De uitspraak schijnt iets te maken te hebben met het eetgedrag van de bemanning.",
            "image": "https://maartenzutphen.files.wordpress.com/2012/01/zinkende-boot.jpg"
         }
      ];


      console.log(Uitspraken.find().count());
      data.forEach(doc => {
         Uitspraken.insert(doc);
      });
   }
});
