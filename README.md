Her Loggfører vi alle endringene.


// 12.02.2018 - Hanna Startet med å lage nettsiden

Jeg startet med å lage canvasEl og GUI-en og klassene. Når har vi et funkende verdens system som sier i hvilken verden du befinner deg i. Det er kanskje mulig og optimere programmet, men nå fikk jeg bare lagd en funkende versjon av spillet

//


// 13.02.18 - Anyajan fikk en syntax feil (Reference error: object not defined i js)

Etter en god stund så fant Hanna løsningen og det var at rekkefølgen var feil. Vi lærte at klasser ikke er hoistet, altså objektklasser kjøres ikke først i koden. Oppga feil filepath til bildet han skulle vise på canvas. 

//

// 14.02.2018 Vi lærte basisk kunnskap om hvordan man skal bevege spilleren og interaktere med omgivelsene. Kollisjoner, graviditet og fart. Vi skal jobbe hjemme. sverger.
hanna er en menneske aktig google
//

// 14.02.2018 - Hanna eksperimentasjon

Jeg begynte å jobbe litt med kollisjon og hva som vill skje om man kolliderte med en fiende eller collectables. Nå kan Mario hoppe, falle, "dø" og plukke opp mynter. Ikke noen problemer å fikse, og det var egentlig ganske greit og få til kollisjonen. Det eneste jeg er usikker på er om dette er effektiv kode eller dårlig skrevet. Har foreløping en Entety class og bakke class og collectable objekt. Er usikker på om jeg bare trenger 1 class eller om 3 er nødvendig


-------------------------------------------------------------------------------------------
jeg hadde tre kollisjonssystemer i entity klassen fordi jeg tenkte at man krevde ulik kollisjon for enemies, collectablesene og bakken, men kanskje jeg bare trenger 2 en for bakken og en for alt annet i spillet man kan interaktere med, men det finner vi ut av etter at vi har playtestet og fått en mening.
-----------------------------------UPDATE 16.02.2018 HANNA --------------------------------
//

//16.02.2018 - Anyajan og Hanna optimerer hoppefunksjonen til spilleren og annet

Vi prøver å endre hoppe dynamikken. Når du trykker skal stige en viss px men når du realiser knappen så minker pikselfarten. Bug - ved implementering av denne mekanikken så vil ikke figuren beveg seg etter piltastene og hoppefunksjonene funket heller ikke, vi rullet tilbake til tidligere versjon for å prøve på nytt senere.

Bug- dobbel hopp og det er mulig å hoppe mens vi er i luften, not correct :(

-------------------------------------------------------------------------------------------

Først og fremst var logikken feil, da vi satt i timen var det vanskelig og forestille seg alle de mulige variablene og hva som ville skje, men etter å ha rullet det på tungen og diskutert med Andjayan ble vi enig om å endre logikken. Jeg deklarte at onGround variablen bare er sant når spilleren kolliderte med bakken. Det var ikke vits i å sette jump til false når man slapp oppovertasten da det ikke er det vi egentlig vil sjekke. Når onGround er sant setter vi at Jump blir true og onGround blir falskt. Når vi slipper oppover tasten har jeg deklarert en ny variabel hasRealised til å bli sant, slik at den ikke tukler med jump variabelen. 

I script.js sier vi om jump = true så skal player.ySpd = -2.5 og jump skal bli false, så han ikke kan dobbelthoppe. Til sist sjekker vi om hasRealised er sant og om onGround ikke er sant, da skal tyngdekraften legges til og spilleren skal falle til bakken


---------------------------------UPDATE 16.02.2016 - Hanna fix-----------------------------


Jeg prøvde å implementere ett lett system for å plassere rekker av blokker hvor vi ville på Canvas.
Jeg har en anelse om hvordan det bør gjøres, men jeg får det ikke helt til. Lurer litt på hvordan jeg skal få tilgang til de verdiene jeg ønsker på en lettest mulig måte, å nå har jeg jobbet så mye med det at jeg har begynt å få ølBriller og ser enhjørninger løpe over skjermen. Jeg tror jeg må legge meg og se på det i morra

-------------------------------------------UPDATE HANNA------------------------------------
//



//17.02.2018 - Hanna forenkling av plasseringen til bakken

Jeg fikk til å implementere blokksystemet jeg hadde tenkt. Var litt vanskelig og de forskjellige variablene og loopene var forvirrende. Jeg måtte passe på at rekkefølgen passet, slik at alt var definert før det ble tegnet. Samtidig foreklet jeg koden for å gjøre den lettere å forstå. Løsningen var å definere ett array før vi gikk gjennom en loop. Etter det lager vi nye arrayer på de forskjellige posisjonene og til slutter tegner dem ved å bruke i og j som telle variabler. Nå kan vi lett plasere blokker og kollisjonssystemet funker perfekt med både spiller og fiender.


Det eneste som trengs å gjøre nå er å få blokkene til å sideScrolle. Til nå funker ikke dette enda og blokkene er plassert hvor spilleren befinner seg, selvom alt annet(fiender og collectabels) er relativ til spilleren.

tror problemet ligger på linje 229 script.js :   block[i][j].xPosition -= player.xSpd;

-------------------------------------------------------------------------------------------
 Ja det stemte, jeg brukte feil variabel, skulle bruke BlockSet[i].xPosition i stedenfor block[i][j]; nå funker det perfekt.

Making progressss :D
-------------------------------------------UPDATE HANNA------------------------------------
//


//18.02.2018 - Hanna Enemy patruljering

Prøve å få fiendene til å patruljere verden ved å gi en range. Hvis dere start posisjon pluss dens range er nådd så skal den få negativ x fart og gå andre veien helt til dens xPosisjon er lik dens starPosisjon minus dets range. Da skal x farten bli positiv. Det eneste problemet er at den er ikke relativt til verdenen og om spilleren beveger seg så blir deres patruljeområde flyttet på. Kan muligens bli brukt som en zombie class, at den har litt IQ og vil følge etter spilleren, men vi er ikke helt der enda.

Prøvde også å implementere skudd i spillet. Så langt så har jeg bare lagt til et interval på 2 sekunder. Dette vil i fremtiden bli cooldown på våpnenet. Det som er litt rart er at interval tiden funker helt til man har skutt 3 ganger og da er det to sekunders mellomrom mellom hver gang meldingen dukker opp. Når det 4, 5 og 6 skuddet blir utløst er tiden kortere mellom hver gang det blir avfyrt, dette gjelder også 8,9 og 10.

-------------------------------------------------------------------------------------------
Jeg ønsker at dens patruljescript skal være dynamisk og lett og endre for mange uten at vi må hardkode xPosisjonene for hånd, til nå bruker jeg harde data for å sjekke om det jeg prøver på er mulig og det er det. Nå må vi bare finne en løsning hvor vi kan putte inn variabel navn eller lignende så det ikke blir så tungvint.
---------------------------------------UPDATE HANNA----------------------------------------
//

// 19.02.2018 - Hanna kan spawne uendelig mange objekter uten effort
Nå har jeg implementert lettvindte måter å spawne samt blokker, fiender, mynter og gullerøtter. Det som må bli lagt til er enden av hvert lvl. Når det er gjort, har vi alle de grunnleggende tingene som bør være med i den enkleste versjonen av spillet og vi kan bli mer fancy når alt er som det skal være. Patrulje matten må stå på vent, men den er bare kommentert ut.

Til nå har vi kunn ett problem og det er å fikse kollisjonen til alle de forskjellige fiendene. Siden vi har forskjellige for løkker til å tegne de forskjellige objektene på skjermen, må jeg dobble for løkke antallet for å regne med alle fiender og deres kollisjon til alle blokkene. 

-------------------------------------------------------------------------------------------
 har lagt til kollisjon og graviditet samt patruljering for alle fiendene         
-----------------------------------------UPDATE HANNA--------------------------------------

Da jeg skulle starte med kollisjonen mellom fiendene og bakken hentet jeg verdiene fra blokk arrayen og fiende arrayen og ga dem kollisjon ved å ha 4 for løkker. Først krashet programmet mitt og frameraten droppa veldig, men så fant jeg ut at det sikkert var fordi jeg lagde alle objektene osv i selve spillLoopen så hver gang vi loopen gikk en runde, lagde den automatisk alt helt nytt med litt forskjellig verdier enn den forige loopen. Derfor flyttet jeg de funksjonene som lagde tingene utenfor loopen og bare beregnet verdiene og tegnet dem i loopen istedenfor å lage ny 60 ganger i sekundet. Dette funket.

La til tyngdekraft og range i EnemySet objektet og definerte nye variabler som skulle bli brukt til fiendens scope. så med andre ord så regner jeg to forskjellige verdier, fiendens start verdi og dens xPosisjon. De har i utgangspunktet ikke noe med hverandre å gjøre, men de sammarbeider sammen for å få patruljeringen til å funke. start verdien vil øke med EnemySet sin speed. Om startVerdien er lik enemiens scopeRight så skal fiendens xposisjon være relativt til spilleren og seg selv ved å si -EnemySet[0].xspd. Da vil den gjøre om å ha dens orginale fart som er positivt. Alt dette blir sjekket med mange if tester.
-------------------------------------------------------------------------------------------
 var en bug fordi jeg hadde en kontroll som gikk av eller på om en av fiendene nådde sitt scope. Dette gjorde at false gikk til true eller omvendt og påvirket alle fiendene til å gå samme vei samtidig i stedenfor når de nådde sitt scope.

Jeg løste dette ved å lage en ny array som holdt boolean for alle gruppene av fiender og jeg satt de først til falsk. Om gruppen nådde sitt scope skulle bare gruppen sin boolean bli endre fra falsk til true slik at de ikke påvirket hverandre. også sjekket jeg om gruppen sin boolean var true eller falsk, om den endrer seg så skal bare den gruppen av fiender som har true som bolean endre retning

----------------------------------------UPDATE TWEEKING------------------------------------

//20.02.2018 - Hanna begynte å innføre hva som ville skje når ting ble samlet opp når spilleren døde.

Idag har vært en produktiv dag. Jeg Fikk først myntene, gullerøttene og kollisjon med fiendene til å utløse en reaksjon. Hvis spilleren kolliderer med myntene vil mynten bli fjernet fra arrayet og ikke lenger eksistere. Det samme gjelder for gulerøttene. Det var en liten bug som gjorde at når objektene skulle bli tegnet kunne ikke pc-en finne det objektets verdier og dermed fikk en error melding om at : cannot read the xPosition of undefined. Dette var først og fremst fordi jeg tegnet objektene i den samme loopen hvor jeg også fjernet dem fra arrayet så endringene ville ikke bli registrert før neste loop og da ville gi feilmeldingen. Dette løste jeg ved å lage en for løkke i en for løkke som bare skulle tegne objektene nederst i scriptet slik at det å fjerne objektene var ferdig før vi skulle begynne å tegne dem. 

Det var også en bug om at når jeg kolliderte med den siste tingen i det arrayet, vill jeg få en feilmelding. Jeg trodde det kanskje hadde noe med at jeg ikke hadde spesifisert hva som skulle bli fjernet, dermed lagret jeg det obketet jeg kolliderte med i en variabel, og så fjernet jeg verdien i variabelen ved å bruke splice(); på arrayene. 


La også til et endemål, som sier at om du har samlet alle gulerøttene kan du aktivere målet, men hvis ikke må du fortsette og lete. Om man har nok kan man gå ut av levelet og starte på neste levelet.  De gulerøttene du har i spillet vil så plusses med dine totale gulerøtter.

Jeg la også til HP til spilleren, så når fiender røre spilleren mister den liv og om spilleren faller ut av canvas dør han. Om han dør vil man ikke kunne bevege seg og man får sjansen til å restarte levelet.

Jeg har også sagt at spilleren kan få en oppgradering om han har samlet 10 gullerøtter, som vil være å kunne skyte en hviss mengde kuler.

-------------------------------------------------------------------------------------------
Det som trengs å gjøres nå før spillet er i sin aller siste fase av noe spilllbart er å legge til en skytefunksjon,
og regulere hvor fort spilleren mister liv, etter dette kan vi begynne med å lage de forskjellige levlene, kanskje forskjellige fiende bevegelser og angrep. Men i prinsippet har vi et ferdig spill, som kan forbedres på mange måter.
----------------------------------------------------Tanker---------------------------------

//22.02.2018 - Hanna lagde første prototype av spillet i sin helhet 

Idag var målet og lage game stats, legge til how to play siden, koble sammen verdnene, og litt annet. Game stats er lagt til og how to play siden er fikset, men de ser stygge ut for nå. Vi har koblet sammen verdnene og sagt at man må ha akuratt en mengde gullerøtter om man skal kunne spille banen, slik at man ikke gjør den samme banen flere ganger. La også til forskjellige typer bakker, vanlige bakker, speedBoost bakker og jumpBoost bakker og damage bakker. Vi kan endre bildene til de forskjellige bakkene, men når spilleren står på dem, kommer bare konsollen opp, fordi vi ikke har spesifisert hva som skal skje. Det er viktig og ha en spillbar build slik at vi kan playteste hva vi allerede har. Da kan vi vite hva som funker og hva som ikke funker. 

Det ser veldig stygt ut nå, men når vi får allt fra kunst klassen, legger til litt lydeffekter og musikk samt, fikser selve spillets GUI utseende blir nok dette veldig bra.

//

//23.02.2018 - Hanna la til skytefunksjon med cooldown og cooldown på tap av liv

Har fått til en skytefunskjon når spacebar er trykket ned og cooldown ikke er true. Kulene vil gå i den retningen spilleren beveger/bevegde seg Jeg brukte den samme logikken for å redusere spillerens liv. Etter playtesting skal vi tweeke på alle verdiene. La også til spesialiserte bakker, Når man er på en bakke med jumBoost, fungerer den som en trampoline og man hopper høyere, når mane er på bakke som gir damage, mister man liv.

Den eneste buggen er at kulene eksisterer for alltid, så vi må endre dems oppførsel, og planen er å holde styr på dems startPosisjon og si at når startPosisjonen som vil øke med farten dens har nådd et hvist punkt, så skal kulene bli fjernet fra listen. Det gjør at selve kulen si posisjon som er relativt til spilleren ikke ødelegger denne mekanikken og glitching kan skje.

Det gjenstår også å gi damage når kulene treffer en enemy, til nå vet den bare at den har truffet dem. Når den gir damage, vil vi fjerne kulen fra listen slik at den ikke skader flere fiender som er nærme hverandre. 
//

//27.02.2018 Hanna bare la til noe visuall enhanchment

La til noen bilder så spillet vårt ser mer polished ut

//


//

// 02.03.2018 (Pt 1) Andjayan fikse skytefunksjon i spillet så forsvinner ikke skuddet når vi har avfyrt den og enimiesene forsvinner ikke når de blir truffet. har lagt til en to for-løkker som skal gå gjennom enemies array og sjekke om enimies har kollidert med skuddet gjennom en if-test. vis den har skal skudd-objektet og enemy-objektet slettes.

**bug** når du avfyrer to skudd så kræsjer spillet. i tilegg registerers det ikke kollisjon mellom skudd og enemien. jeg tror årsaken til dette er fordi den originalet kollisjonssystemet sjekker bare kollisjon mellom to objekter fra entity-classen. med vektor kollisjon systemet skal det løse dette.

endret navnet til egenskapene i enemyset-objektet. endret dem fra "x.pos" til "x.posistion" og det samme med y.

----update----

jeg fjernet de to dimensjonale for-løkkene som skulle sjekke kollisjon mellom bullet og entity. jeg fjernet også et par endringer. nå er config1, altså level 1, tilbake til til orginal versjon som fikset problemet to skudd kræsj buggen. jeg har nå lagt til en for-løkke inni løkken "keeping track of the enemies", som skal sjekke kollisjon mellom enemies og skuddet. men jeg har fått en bug. 

**bug** sirkelene vi skal trykke på når vi har valgt et nivå blir forsatt på skjermen. jeg får syntax feil" Uncaught TypeError: Cannot read property 'width' of undefined", så det er en problem i classene. 
 //

 // 03.03.2018 Anjayan (Pt 2) 

 

 tenker løsningen til buggen er at jeg fjerner bullet-classen, og gjør at bullets skal nå bruke entity classen. dette tenker jeg vil løse problemet med at kollisjon metoden for syntax feilen, fordi den sier det er undefined. en annen grunn er at bullets classen og entity classen er ganske lik ,så det kan like godt erstattet. 

en felles regel, husk at javascript er case-sensitiv -_-

 **bug**
 jo mer jeg jobber med koden jo mer syntax feil kommer opp. disse feilene virkes urelevante
fordi de har noe ikke sammenheng med  endringene jeg har kodet. kanskje årsaken er en krølleparantes -_- . 

syntax feilen:
----------{
config1.js:7 Uncaught ReferenceError: coinCount is not defined
    at mainLoop (file:///C:/Users/anjaya1005/Desktop/Game-master%20(1)%20(1)(1)/Game-master/Js/config1.js:7:5)
    at enterLvl1 (file:///C:/Users/anjaya1005/Desktop/Game-master%20(1)%20(1)(1)/Game-master/Js/config1.js:536:5)
    at HTMLDivElement.loadWorld (file:///C:/Users/anjaya1005/Desktop/Game-master%20(1)%20(1)(1)/Game-master/Js/WorldSelection.js:94:9)
mainLoop @ config1.js:7
enterLvl1 @ config1.js:536
loadWorld @ WorldSelection.js:94
WorldSelection.js:89 world1
WorldSelection.js:91 Uncaught TypeError: Cannot read property 'parentNode' of null
    at HTMLDivElement.loadWorld (file:///C:/Users/anjaya1005/Desktop/Game-master%20(1)%20(1)(1)/Game-master/Js/WorldSelection.js:91:13)
loadWorld @ WorldSelection.js:91
WorldSelection.js:89 world1
WorldSelection.js:91 Uncaught TypeError: Cannot read property 'parentNode' of null
    at HTMLDivElement.loadWorld (file:///C:/Users/anjaya1005/Desktop/Game-master%20(1)%20(1)(1)/Game-master/Js/WorldSelection.js:91:13)
loadWorld @ WorldSelection.js:91
WorldSelection.js:89 
------------}
  

//04.04.2018 anjayan (PT 3)
 
 JEG GIR OPP. jeg kommer til å jobbe rundt den ene buggen hvor syntaxen  er " Uncaught TypeError: Cannot read property 'width' of undefined". det samme med buggene over ^^^^^. 

 planen for i dag er å legge til to typer zombie aktige enemies som skal følge etter spilleren. den ene kan bare følge etter deg, mens den andre hoppe over hinder. jeg skal også legge til registrering av kollisjon når spiller treffer enemy på hodet. da vil den forsvinne.
 

 ///

 //04.04.2018 PT 4 

kollisjon mellom bullet og enemy:
 jeg fjernet den nye kollissjon systemet og brukte den gamle. så når de kolliderer så blir det true, og når det blir true så vil den bruke splice også fjerne en bullet fra arrayen. 
 løsningen var at jeg måtte lage en ny for-løkke som skal gå gjennom bullet-list arrayen. så den vil gå gjennom alle bullettene og sjekke om de har kollidert med enemyen. syntax problem løst. 

 samtidig så blir enemy fjernet fra arrayen når den kolliderer med bullet. samme metode for å fjerne, brukte indexof og splice. 

UPDATE Hanna 05.03.2018
Vi hadde en bug hvor kulene ikke ville bli tegnet om man var på venstre siden av fiendene, men det funket på høyre siden. Dette var fordi vi ikke hadde gitt classen bullets høyde og bredde og da ble ikke kollisjonssystemet vårt brukt riktig. Fiksen var veldig lett.

// 05.03,2018 Hanna

Jeg vet at andjayan har mange prøver denne uka, så jeg lot han studere mens vi fikset noen av feilene i spillet vårt og la til nye ting. Jeg la til en damage block, og en jump block. Jeg la også til noen nye enemies, som svever i lufta, x og y retning, samt så fikset jeg zombie funksjonen, så nå følger de etter deg når de har sett deg. Disse zombiene glemmer aldri, så har de sett deg en gang, kan du bare glemme å løpe ifra dem. De vil til og med ta selvmord bare for å spise deg. La også til lyder, som vi skal bytte ut senere og noen bedre visual enhancment. Jeg limita også hvor mange kuler man kan få, og man må ha til nå 3 diamanter for å få 5 skudd. 

Det som gjenstår er egentlig alt som har å erstatte alle bildene/lydene, balanser ting og plassere alle de forskjellige objektene rundt omkring. Vi er litt usikre på om vi trenger en boss, vi får se hva vi har tid til. Det er lurt og kanskje legge til kollisjon slik at man ikke kan gå gjennom objektet fra siden, men det er ikke kritisk at vi har det. 

Skal legge til en en storyline, så man har litt peiling på hva som skjer

Gjort, lagde den i powerpoint.

//

//check list:
viktig
-lage baner/nivåer.-anjayan
-få sprite til å funke -anjayan
-legg til pistolen.- anjayan
-fikse kvaliteten til bildene.-anjayan
-scroller backgrunnen (x-retning)-anjayan 
-legge til flere typer blocker, som på topp, siden, bunnen og i midten. 


mindre viktig:
-lyd-til sist -hanna
-kollisjon på siden av hinder blocker.-anjayan //tror egentlig ikke vi trenger dette
-legge til boss-nivå, med boss. -til sist


