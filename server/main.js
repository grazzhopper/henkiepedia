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
            "uitleg": "Na enige literatuurstudie blijft de mensheid verdwaasd achter wat hiermee bedoeld wordt."
         }, {
            "uitspraak": "Doordraaien",
            "uitleg": "Hiermee wordt bedoeld dat de schipper meer gas mag geven om eerder te arriveren op een aangeven locatie. Dit is dus geen instructie aan de schipper om knettergek te worden."
         }, {
            "uitspraak": "Er een harde bats op geven",
            "uitleg": "Bij rondvraag in diverse regio’s in de rest van Nederland is dit een nog vrij onbekend begrip. We doen ons best om dit ook zo te houden."
         }, {
            "uitspraak": "Rotatievrij",
            "uitleg": "Er kan vrijelijk gelost en geladen worden ongeacht de volgorde van de adressen die aangedaan worden. Nu nog af en toe het stuwplan van de schipper bekijken en dan zou het zo maar kunnen dat het inderdaad mogelijk is."
         }, {
            "uitspraak": "Alles ligt weer triple",
            "uitleg": "Het is druk bij ECT aan de waterkant, verwacht vertragingen."
         }, {
            "uitspraak": "De lichter roteert",
            "uitleg": "Dit is, wat menigeen denkt, geen ronddraaiend binnenvaartschip, maar een wijziging in de volgorde waarop het binnenvaartschip de adressen aandoet in de haven van Rotterdam. Wordt soms ook gebruikt als een binnenvaartschip van plek wisselt voor de kade in Hengelo. Dit maakt de term enigszins verwarrend en uiterst situationeel. Voorzichtigheid geboden in het gebruik ervan."
         }, {
            "uitspraak": "Een rondje bellen",
            "uitleg": "Primitieve invulling van noodzakelijke communicatie in een logistiek proces waarin bijna-bejaarden ook kunnen deelnemen. De uitspraak komt ook deels voort uit het feit dat de helft van alle terminals in Rotterdam niet zijn aangesloten op het Port Community Systeem."
         }, {
            "uitspraak": "CTT OPR Barge",
            "uitleg": "Hiermee wordt de operationele afdeling van de Callplanning bedoeld, tenzij OPR als OPA gespeld had moeten worden."
         }, {
            "uitspraak": "Full handling",
            "uitleg": "Dit is geen handling van een volle container, maar handling van een volledige binnenvaartschip met containers op een specifieke locatie. Een onvolledige binnenvaartschip behandelen met containers is overigens geen Empty handling."
         }, {
            "uitspraak": "Cocks kraan",
            "uitleg": "Engels-Nederlandse verbastering van een kraan met mannelijke genitaliën. Het is de kraan naast de Figee kraan op de containerterminal in Hengelo. Vanwege bedrijfsbeleid mag niet zonder meer aangenomen worden dat hiermee de Figee kraan vrouwelijk is."
         }, {
            "uitspraak": "De schepen volproppen",
            "uitleg": "Alle sexuele innuendo moet bij deze uitspraak vermeden worden. De uitspraak wordt veelal gebruikt in het proces van het indelen van containers op binnenvaartschepen."
         }, {
            "uitspraak": "Mijn Filosofie",
            "uitleg": "Een duidelijke verwijzing naar de theoretische discipline van het verlangen naar het uitdrukken van kennis en wijsheid in een planproces. In de volksmond ook wel wijsheid achter af genoemd."
         }, {
            "uitspraak": "Split call",
            "uitleg": "De eerste vormen van Bowling zijn terug te herleiden naar het Oude Egypte. De term split is dan ook een geadopteerde term uit deze sport. Een split is een situatie waarbij de overgebleven pins(=kegels) zo staan dat ze zeer moeilijk met een worp omver gegooid kunnen worden. Een split call is dus een planning waarbij, waarbij de calls zo staan dat ze nagenoeg onmogelijk met één schip kunnen worden gedaan."
         }, {
            "uitspraak": "Vrijgestuwd of vrij gestuwd",
            "uitleg": "Zie ook Rotatievrij"
         }, {
            "uitspraak": "100 meter kade verbouwen",
            "uitleg": "De directie van CTT heeft vriendelijk doch dringend verzocht om dit aan de experts over te laten."
         }, {
            "uitspraak": "Hocus Scopus, dikke tokus",
            "uitleg": "Hiermee wordt het binnenvaartschip de Scopus bedoeld."
         }, {
            "uitspraak": "Door het riool",
            "uitleg": "Alternatieve vaarroute voor de binnenvaart wat meestal resulteert in vertragingen of zelfs opstopping/congestie."
         }, {
            "uitspraak": "Chinees Indisch Restaurant, Wat-Woi",
            "uitleg": "Directe import route uit het verre Oosten van goederen die de haven van Rotterdam proberen over te slaan. Gebruik van deze optie is op eigen risico."
         }, {
            "uitspraak": "Welke Kip?? Oo, Sam’s Kip!",
            "uitleg": "Henk's favoriet uit Rotterdam."
         }, {
            "uitspraak": "Ooh Groeneboom, Ooh Groeneboom, wat zijn uw takken wonderschoon",
            "uitleg": "Henk's favoriete kerstliedje met een toefje terminal uit Ridderkerk. Wordt ook soms rond Pasen gezongen."
         }, {
            "uitspraak": "Rob, je bent ontslagen k*t!",
            "uitleg": "Henk's ultieme poging om de planning van RST-Zuid samen met Rob onder controle te krijgen."
         }, {
            "uitspraak": "Dan ga ik nu de kade Zuid vervroegen",
            "uitleg": "Tijdsuitspraak relatief aan de periode waarop een afspraak is afgestemd voor de kade bij Zuid gerekend vanaf de Greenwich Mean Time met Spring Equinox cmpensatie. Het uiteindelijke resultaat van zo'n deze complexe operatie van aanpassing in tijd op een call is alleen begrijpelijk voor dr. Who."
         }
      ];


      console.log(Uitspraken.find().count());
      data.forEach(doc => {
         Uitspraken.insert(doc);
      });
   }
});
