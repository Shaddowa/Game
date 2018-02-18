Her Loggfører vi alle endringene.

Eksempel:

// Hanna - Jeg la til en funksjon som gjorde det til det
    
Det var noen små bugs som jeg ikke fikk til, de står på linje () og har med hvordan () funker.

//


// 12.02.2018 - Hanna Startet med å lage nettsiden

Jeg startet med å lage canvasEl og GUI-en og klassene. Når har vi et funkende verdens system som sier i hvilken verden du befinner deg i.
Det er kanskje mulig og optimere programmet, men nå fikk jeg bare lagd en funkende versjon av spillet

//

// 13.02.18 Anyajan fikk en syntax feil (Reference error: object not defined i js)
Etter en god stund så fant Hanna løsningen og det var at rekkefølgen var feil. Vi lærte at klasser ikke er hoistet, altså objektklasser kjøres ikke først i koden. Oppga feil filepath til bildet han skulle vise på canvas. 
//

// 14.02.2018 Vi lærte basisk kunnskap om hvordan man skal bevege spilleren og interaktere med omgivelsene. Kollisjoner, graviditet og fart. Vi skal jobbe hjemme. sverger.
hanna er en menneske aktig google
//

// 14.02.2018 Hanna
Jeg begynte å jobbe litt med kollisjon og hva som vill skje om man kolliderte med en fiende eller collectables. Nå kan Mario hoppe, falle, "dø" og plukke opp mynter. Ikke noen problemer å fikse, og det var egentlig ganske greit og få til kollisjonen. Det eneste jeg er usikker på er om dette er effektiv kode eller dårlig skrevet. Har foreløping en Entety class og bakke class og collectable objekt. Er usikker på om jeg bare trenger 1 class eller om 3 er nødvendig

Update 16.02.2018 Hanna, jeg hadde tre kollisjonssystemer i entity klassen fordi jeg tenkte at man krevde ulik kollisjon for enemies, collectablesene og bakken, men kanskje jeg bare trenger 2 en for bakken og en for alt annet i spillet man kan interaktere med, men det finner vi ut av etter at vi har playtestet og fått en mening.
//
//16.02.2018
Kl.13.12 
Vi prøver å endre hoppe dynamikken. Når du trykker skal stige en viss px men når du realiser knappen så minker pikselfarten. 
Bug- ved implementering av denne mekanikken så vil ikke figuren beveg seg etter piltastene og hoppefunksjonene funket heller ikke, vi rullet tilbake til tidligere versjon for å prøve på nytt senere.

Update 16.02.2016 Hanna
Først og fremst var logikken feil, da vi satt i timen var det vanskelig og forestille seg alle de mulige variablene og hva som ville skje, men etter å ha rullet det på tungen og diskutert med Andjayan ble vi enig om å endre logikken. Jeg deklarte at onGround variablen bare er sant når spilleren kolliderte med bakken. Det var ikke vits i å sette jump til false når man slapp oppovertasten da det ikke er det vi egentlig vil sjekke. Når onGround er sant setter vi at Jump blir true og onGround blir falskt. Når vi slipper oppover tasten har jeg deklarert en ny variabel hasRealised til å bli sant, slik at den ikke tukler med jump variabelen. 

I script.js sier vi om jump = true så skal player.ySpd = -2.5 og jump skal bli false, så han ikke kan dobbelthoppe. Til sist sjekker vi om hasRealised er sant og om onGround ikke er sant, da skal tyngdekraften legges til og spilleren skal falle til bakken




Update Hanna
Jeg prøvde å implementere ett lett system for å plassere rekker av blokker hvor vi ville på Canvas.
Jeg har en anelse om hvordan det bør gjøres, men jeg får det ikke helt til. Lurer litt på hvordan jeg skal få tilgang til de verdiene jeg ønsker på en lettest mulig måte, å nå har jeg jobbet så mye med det at jeg har begynt å få ølBriller og ser enhjørninger løpe over skjermen. Jeg tror jeg må legge meg og se på det i morra
//



//17.02.2018 Hanna
Jeg fikk til å implementere blokksystemet jeg hadde tenkt. Var litt vanskelig og de forskjellige variablene og loopene var forvirrende. Jeg måtte passe på at rekkefølgen passet, slik at alt var definert før det ble tegnet. Samtidig foreklet jeg koden for å gjøre den lettere å forstå. Løsningen var å definere ett array før vi gikk gjennom en loop. Etter det lager vi nye arrayer på de forskjellige posisjonene og til slutter tegner dem ved å bruke i og j som telle variabler. Nå kan vi lett plasere blokker og kollisjonssystemet funker perfekt med både spiller og fiender.


Det eneste som trengs å gjøre nå er å få blokkene til å sideScrolle. Til nå funker ikke dette enda og blokkene er plassert hvor spilleren befinner seg, selvom alt annet(fiender og collectabels) er relativ til spilleren.

tror problemet ligger på linje 229 script.js :   block[i][j].xPosition -= player.xSpd;

//Update 30 min senere: Ja det stemte, jeg brukte feil variabel, skulle bruke BlockSet[i].xPosition i stedenfor block[i][j]; nå funker det perfekt.

Making progressss :D


//18.02.2018 Hanna
Prøve å få fiendene til å patruljere verden ved å gi en range. Hvis dere start posisjon pluss dens range er nådd så skal den få negativ x fart og gå andre veien helt til dens xPosisjon er lik dens starPosisjon minus dets range. Da skal x farten bli positiv. Det eneste problemet er at den er ikke relativt til verdenen og om spilleren beveger seg så blir deres patruljeområde flyttet på. Kan muligens bli brukt som en zombie class, at den har litt IQ og vil følge etter spilleren, men vi er ikke helt der enda.

Prøvde også å implementere skudd i spillet. Så langt så har jeg bare lagt til et interval på 2 sekunder. Dette vil i fremtiden bli cooldown på våpnenet. Det som er litt rart er at interval tiden funker helt til man har skutt 3 ganger og da er det to sekunders mellomrom mellom hver gang meldingen dukker opp. Når det 4, 5 og 6 skuddet blir utløst er tiden kortere mellom hver gang det blir avfyrt, dette gjelder også 8,9 og 10.


13.23 
14.00 
Bug- dobbel hopp og det er mulig å hoppe mens vi er i luften, not correct :(
//
