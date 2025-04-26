---
title: meccanica lez06
description: Appunto automatico
---

2025-04-26 16:28

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[sbobine]] [[meccanica razionale]]

## meccanica-lez06


### Introduzione ai Concetti di Vincolo

Le fonti introducono il concetto di vincoli, riprendendo concetti già visti. Si esplorano diverse classi di vincoli, osservando che ne esistono di varie tipologie.

#### Classificazione Generale dei Vincoli

Esistono diverse modalità per classificare i vincoli:

1. **Vincoli di Posizione vs. Vincoli di Mobilità:** Oltre ai vincoli di posizione, esistono i vincoli di mobilità. La sottoclasse dei vincoli di mobilità che non possono essere ridotti a vincoli di posizione è definita **vincoli di pura mobilità**.
2. **Vincoli Fissi vs. Vincoli Mobili:** Questa divisione si basa sull'eventuale dipendenza esplicita dal tempo nell'espressione del vincolo. Sono definiti **fissi** quando non c'è dipendenza esplicita dal tempo. Sono definiti **mobili** altrimenti. Si ritiene che questa distinzione sarà più chiara e utile in seguito, quando avrà un'applicazione specifica.

### Esempi di Vincoli per il Corpo Rigido Piano

Gli esempi di vincoli presentati si focalizzano sul corpo rigido piano, poiché sono quelli che tipicamente si incontrano negli esercizi. Un corpo rigido piano possiede inizialmente tre gradi di libertà (Gdl): due traslazionali e uno rotazionale. I vincoli agiscono limitando questi gradi di libertà.

#### 1. Cerniera Fissa

- **Descrizione:** È il primo vincolo introdotto. Vincola un punto specifico, chiamato A, del corpo rigido (indicato come BP) a rimanere fisso. Il corpo rigido può **solo ruotare attorno a questo punto A**.
- **Simbolo:** È rappresentato graficamente da una pallina con dei raggi che escono fuori. Viene mostrato un disegno con gli assi fissi XY e gli assi solidali E1, E2, Y' con origine nel punto A.
- **Effetto sui Gradi di Libertà:** Il punto A è fisso, quindi le sue coordinate $X_A$ e $Y_A$ non sono gradi di libertà. Questo **elimina i gradi di libertà traslazionali**. Rimane un solo grado di libertà, quello di **rotazione $\theta$** attorno ad A. La cerniera fissa **toglie due gradi di libertà**.

#### 2. Carrello

- **Descrizione:** Questo vincolo costringe un punto A appartenente al corpo rigido piano a **scorrere lungo una curva piana**, che nella maggioranza dei casi è una retta. Può anche essere un carrello su una circonferenza. Il caso più frequente è quello in cui il carrello scorre lungo una retta, ad esempio l'asse X.
- **Simbolo:** Si indica con due stanghette e un semicerchietto, o un circolino, per indicare che rimangono gradi di libertà. A volte si trova il simbolo del carrellino con le ruote.
- **Effetto sui Gradi di Libertà:** Il carrello **toglie un grado di libertà**. Ne rimangono due. Nel caso di scorrimento lungo l'asse X, il simbolo del carrello indica che **non ci si può muovere ortogonalmente a questa direzione**. La direzione di scorrimento è data dalle due stanghette. Quindi, la coordinata $Y_A$ (perpendicolare all'asse X) è fissata, $Y_A = 0$. Le coordinate $X_A(t)$ (scorrimento lungo X) e l'angolo $\theta(t)$ (rotazione) rimangono gradi di libertà. Il carrello è un vincolo "meno forte" della cerniera fissa perché toglie meno gradi di libertà.

#### 3. Pattino

- **Descrizione:** È un vincolo simile al carrello nel simbolo ma con una differenza cruciale: **non c'è il pallino**. Questo implica che la direzione solidale associata al pattino **non può ruotare**; non c'è libertà di rotazione. Il pattino costringe un punto A del corpo rigido a muoversi (per semplicità, lungo una retta) e **non consente rotazioni attorno ad A**. Anche un pattino vincolato a una circonferenza dovrebbe rimanere tangente ad essa.
- **Simbolo:** Molto simile al carrello, ma senza il pallino. Mostra una direzione solidale che non può essere piegata.
- **Effetto sui Gradi di Libertà:** In una situazione con pattino lungo una retta (ad esempio, l'asse X), la direzione solidale $E_1$ sull'asse $X'$ e $E_2$ sull'asse $Y'$ rimane fissa in orientamento. L'angolo $\theta$ non è libero. Si è **eliminato un grado di libertà traslazionale** (quello perpendicolare alla direzione di scorrimento) e quello **rotazionale**. Rimane un solo grado di libertà: lo scorrimento traslazionale lungo la direzione consentita, ad esempio $X_A(t)$.
- **Note Aggiuntive:** Viene definito il "**maledetto pattino**" perché spesso mette in difficoltà gli studenti. Questo vincolo **avrà un momento di reazione vincolare** perché impedisce le rotazioni. Dettagli su questo momento verranno spiegati più avanti.

#### 4. Incastro

- **Descrizione:** Il vincolo più "cattivo". Come suggerisce il nome, **non lascia alcun grado di libertà** al corpo rigido. Fissa un punto A appartenente al corpo rigido e **non consente rotazioni**. Può essere visto sia come un rafforzamento della cerniera fissa (che consente rotazioni) che come un rafforzamento del pattino (che non fissa il punto). Un esempio fisico è un'asta piantata nel pavimento o nel muro, che non si muove più.
- **Simbolo:** Si possono trovare diversi simboli. Uno più frequente è una linea con ombreggiatura e una direzione solidale del corpo rigido che si "conficca" dentro. Un altro simbolo possibile viene anche mostrato. Viene menzionato che in altri corsi potrebbe essere chiamato "manicotto".
- **Effetto sui Gradi di Libertà:** L'incastro **toglie tre gradi di libertà**. Dato che il corpo rigido piano ne ha tre, **non ne rimane nessuno**. È un vincolo molto forte.

#### 5. Cerniera Mobile

- **Descrizione:** Questo è un vincolo **tra due corpi rigidi**, non tra un corpo rigido e un vincolo esterno fisso. Vincola due punti, A' appartenente al primo corpo rigido ($BP_1$) e A'' appartenente al secondo corpo rigido ($BP_2$), a **coincidere in un punto comune chiamato A**. Lascia **libertà di rotazione attorno a questo punto A**, ma a differenza della cerniera fissa, il punto A **si può muovere**.
- **Simbolo:** Si indica con un pallino.
- **Esempio e Descrizione Processo:** Viene mostrato un esempio con due corpi rigidi distinti ($BP_1$ e $BP_2$) con i rispettivi assi solidali, che vengono poi uniti in un unico oggetto tramite la cerniera mobile nel punto A, che è la fusione di A' e A''. Viene fatto l'esempio di due aste unite da una cerniera.
- **Effetto sui Gradi di Libertà:** La fonte si interrompe prima di completare la spiegazione di quanti gradi di libertà vengono rimossi o rimangono nel sistema di due corpi rigidi uniti da una cerniera mobile.

Questo conclude la descrizione dei vincoli presentati nelle fonti a disposizione. Come richiesto, ho cercato di riportare fedelmente i concetti e gli esempi forniti dal professore, strutturando l'informazione in modo gerarchico con titoli e sottotitoli e citando le fonti per ogni affermazione.
___
Certamente. Di seguito riporto la spiegazione del professore sulla base delle informazioni contenute nelle fonti fornite, integrandole con i passaggi matematici e gli esempi presentati.

Gli appunti sono strutturati con titoli e sottotitoli per facilitare la comprensione.

### Analisi dei Gradi di Libertà e Vincoli

Questo argomento tratta come i vincoli meccanici influenzano i gradi di libertà di un sistema, concentrandosi in particolare sulla cerniera mobile e sul puro rotolamento.

#### La Cerniera Mobile (Esempio di Vincolo di Posizione)

- **Introduzione:** Consideriamo due corpi rigidi. Inizialmente, ognuno ha tre gradi di libertà (GDL) nel piano, per un totale di sei GDL per il sistema di due corpi.
- **Applicazione del Vincolo:** Mettiamo assieme i due corpi rigidi attraverso una cerniera mobile nel punto A. Questa cerniera mobile unisce i due corpi in un punto, permettendo traslazione del punto A nel piano e rotazioni di entrambi i corpi attorno ad A.
- **Effetto sui GDL:** Quando uniamo le due origini nel punto A, i gradi di libertà traslazionali di una delle due origini vengono "lavati via" perché le facciamo coincidere. Il vincolo di cerniera mobile **toglie due gradi di libertà traslazionali**.
- **GDL Residui:** Rimangono **6 meno 2, quindi 4 gradi di libertà**. Questi sono i due gradi di libertà traslazionali del punto A nel piano e la possibilità di rotazione (indicata come $\theta$ e $\phi$) attorno ad A per entrambi i corpi. In sintesi, una cerniera mobile permette al punto vincolato di muoversi nel piano (2 GDL traslazionali) e ai corpi di ruotare liberamente attorno a quel punto (2 GDL rotazionali totali per i due corpi, se non ci sono altri vincoli che li legano).

#### Il Puro Rotolamento (Vincolo di Mobilità)

- **Introduzione:** Il puro rotolamento, o rotolamento senza strisciamento, è un vincolo che si applica alla velocità e non alla posizione. Non ha un simbolo grafico standard.
- **Definizione:** Nel punto di contatto A tra un corpo rigido (ad esempio, un disco) e una guida (che può essere fissa o mobile), il vincolo di puro rotolamento implica che **i due punti di contatto avranno la stessa velocità**. Questo significa che il corpo rigido non striscia sulla guida. Matematicamente, questo si esprime come $v_A^{\text{corpo rigido}} = v_A^{\text{guida}}$. Questo è un vincolo di mobilità, ovvero un vincolo sulle velocità.

#### Esempio: Puro Rotolamento su Guida Fissa

- **Setup:** Consideriamo un disco che rotola senza strisciare su una guida fissa, come un piano (detto piano $\pi$ o piano della lavagna). Il disco si muove rimanendo in questo piano. La guida fissa può essere pensata come un tavolo. Indichiamo il punto di contatto come A, il centro del disco come C e il raggio del disco come R. Usiamo un sistema di coordinate X-Y fissato, con l'asse X lungo la guida fissa.
    
- **Condizione di Puro Rotolamento:** Per definizione, $v_A^{\text{disco}} = v_A^{\text{guida}}$. Poiché la guida è fissa, il suo punto di contatto A ha velocità nulla: $v_A^{\text{guida}} = 0$.
    
- **Conseguenza:** La condizione di puro rotolamento diventa quindi $v_A^{\text{disco}} = 0$. Questo significa che, istante per istante, il punto del disco a contatto con la guida ha velocità nulla.
    
- **Punto di Contatto come Centro di Istantanea Rotazione (CIR):** Se un punto di un corpo rigido ha velocità nulla, quel punto è il Centro di Istantanea Rotazione (CIR) del corpo rigido in quell'istante. Pertanto, per un disco che rotola senza strisciare su una guida fissa, **il punto di contatto A è il CIR del disco**.
    
- **Analisi dei Gradi di Libertà:** Un corpo rigido libero di muoversi nel piano ha 3 GDL (ad esempio, le coordinate $x_C, y_C$ del centro e l'angolo di rotazione $\theta$). Nel caso del disco che rotola su un piano orizzontale fisso, la sua altezza (l'ordinata $y_C$ del centro C) è costante e uguale al raggio R ($y_C = R$). Questo fissa un GDL di posizione. Rimangono $x_C$ e $\theta$ come potenziali GDL, per un totale di 2. L'obiettivo è dimostrare che il vincolo di puro rotolamento lega queste due coordinate, riducendo ulteriormente i GDL indipendenti a uno solo.
    
- **Dimostrazione: Relazione tra $x_C$ e $\theta$** Il vincolo di puro rotolamento lega la traslazione orizzontale del centro del disco alla sua rotazione. Possiamo dimostrarlo calcolando la velocità del centro C in due modi diversi.
    
    - **Velocità del Centro C (Coordinate Cartesiane):** Il centro C ha coordinate $(x_C, y_C)$. Poiché il disco rotola su un piano orizzontale fisso, l'ordinata $y_C$ è costante e pari al raggio R: $y_C = R$. La velocità del centro C è data dalla derivata rispetto al tempo del suo vettore posizione: $v_C = \frac{d}{dt}(x_C \mathbf{i} + y_C \mathbf{j})$ Essendo $y_C = R$ una costante, la sua derivata è zero. Quindi: $v_C = \dot{x}_C \mathbf{i}$ dove $\dot{x}_C$ rappresenta la derivata di $x_C$ rispetto al tempo.
    - **Velocità del Centro C (usando il CIR):** Poiché A è il CIR del disco, la velocità di qualsiasi punto P del disco può essere calcolata usando la legge di distribuzione delle velocità relativa al CIR A: $v_P = v_A + \omega \times (P-A)$. Per il centro C, abbiamo: $v_C = v_A + \omega \times (C-A)$ Sappiamo che $v_A = 0$ perché A è il CIR. Il vettore $C-A$ va dal punto A (di contatto) al centro C. In un sistema di riferimento dove X è orizzontale e Y verticale verso l'alto, se A è l'origine momentanea in basso, C si trova R unità sopra A, quindi $C-A = R \mathbf{j}$. La velocità angolare $\omega$ del disco è legata alla velocità di rotazione $\dot{\theta}$. Convenzionalmente, se $\theta$ aumenta con una rotazione antioraria, $\omega = \dot{\theta} \mathbf{k}$, dove $\mathbf{k}$ è un versore uscente dal piano. La fonte usa una convenzione opposta per $\theta$, risultando in $\omega = -\dot{\theta} \mathbf{k}$. Calcoliamo il prodotto vettoriale $\omega \times (C-A)$: $\omega \times (C-A) = (-\dot{\theta} \mathbf{k}) \times (R \mathbf{j})$ $= -R\dot{\theta} (\mathbf{k} \times \mathbf{j})$ Ricordando che $\mathbf{k} \times \mathbf{j} = -\mathbf{i}$: $= -R\dot{\theta} (-\mathbf{i}) = R\dot{\theta} \mathbf{i}$ Quindi, $v_C = R\dot{\theta} \mathbf{i}$.
    - **Confronto delle Velocità e Relazione Integrata:** Le due espressioni per la velocità del centro C devono essere uguali: $\dot{x}_C \mathbf{i} = R\dot{\theta} \mathbf{i}$ Questo implica la seguente relazione differenziale tra le velocità lineari e angolari: $\dot{x}_C = R\dot{\theta}$ Integrando questa equazione rispetto al tempo, otteniamo una relazione finita tra la posizione orizzontale del centro del disco e l'angolo di rotazione: $x_C = R\theta + \text{costante}$ Questa costante dipende dalle condizioni iniziali (ad esempio, se $x_C=0$ quando $\theta=0$, la costante è zero).
- **Conclusioni sul Caso Guida Fissa:** La relazione $x_C = R\theta + \text{costante}$ è un vincolo finito tra le coordinate $x_C$ e $\theta$. Ciò significa che delle due coordinate apparentemente libere ($x_C$ e $\theta$), solo una è indipendente. Quindi, nel caso del puro rotolamento di un disco su una guida fissa in un piano, **rimane un solo grado di libertà**. La combinazione del contatto con la guida e del puro rotolamento **toglie due gradi di libertà** dai tre iniziali del disco come corpo rigido nel piano. Inoltre, in questo caso specifico, il vincolo di mobilità (sulle velocità) si riduce a un vincolo di posizione (sulle coordinate). Un vincolo che può essere espresso come una relazione finita tra le sole coordinate è detto **olonomo**.
    

#### Esempio: Puro Rotolamento su Guida Mobile

- **Setup:** Consideriamo ora un disco che rotola senza strisciare su una guida mobile, come un'asta che può traslare (ad esempio, lungo l'asse X). Il punto di contatto tra il disco e l'asta è ancora A.
- **Condizione di Puro Rotolamento:** La condizione $v_A^{\text{disco}} = v_A^{\text{guida}}$ continua a valere.
- **Differenza Fondamentale:** A differenza della guida fissa, la guida mobile ha una sua velocità, quindi $v_A^{\text{guida}}$ è generalmente diversa da zero. Di conseguenza, $v_A^{\text{disco}}$ sarà generalmente diverso da zero.
- **Punto di Contatto NON è il CIR:** Poiché il punto di contatto A sul disco ha una velocità diversa da zero ($v_A^{\text{disco}} \neq 0$), **il punto A NON è il Centro di Istantanea Rotazione del disco**. Il CIR di un corpo rigido è, per definizione, il punto con velocità nulla.
- **Effetto sui GDL:** Anche nel caso di guida mobile, il vincolo di puro rotolamento **toglie due gradi di libertà** al moto relativo tra il disco e la guida nel punto di contatto, analogamente al caso della guida fissa. Tuttavia, l'analisi completa dei GDL del sistema composto (disco + guida mobile) richiede di considerare anche i GDL della guida stessa. L'importante distinzione rispetto al caso della guida fissa, dal punto di vista cinematico del singolo disco, è che il punto di contatto non ne è il CIR.

Spero questa riorganizzazione e integrazione della spiegazione sia chiara e completa.
___


Ecco un resoconto dettagliato e commentato, formattato come richiesto:

**Spiegazione sul Concetto di Punto di Contatto e Vincoli (da "flashcard")**

Il professore inizia introducendo la notazione e un concetto fondamentale legato al punto di contatto nel puro rotolamento: la sua **natura molteplice**.

**1. La Natura Molteplice del Punto di Contatto nel Puro Rotolamento**

- **Introduzione del Simbolo A**
    
    - Anche se si usa il simbolo unico $A$ per indicare il punto di contatto, è cruciale capire che questo simbolo, in realtà, racchiude l'idea di tre "personaggi" o punti distinti.
- **I Tre Punti nel Puro Rotolamento** (Concetti Definitivi)
    
    - **A':** Questo è il **punto materiale** che appartiene al disco e si trova a contatto con la guida.
    - **A'':** Questo è il **punto materiale** che appartiene alla guida e si trova a contatto con il disco.
    - **A_geom (o A geometrico):** Questo è il **punto geometrico** nello spazio in cui i due punti materiali $A'$ e $A''$ si trovano a coincidere istante per istante.
- **Natura Fisica vs. Geometrica**
    
    - $A'$ e $A''$ sono definiti come **punti materiali** perché appartengono fisicamente a corpi rigidi (il disco e la guida, rispettivamente).
    - $A_{geom}$ è un **punto geometrico**, una posizione nello spazio, dove la coincidenza dei punti materiali avviene in un dato istante.

**2. Velocità dei Punti nel Puro Rotolamento (Condizione di Guida Fissa)** (Analisi della Velocità)

Si considera il caso specifico in cui la guida è fissa.

- **Velocità dei Punti Materiali ($A'$, $A''$)**
    
    - **Per la guida fissa:** La velocità del punto $A''$ (punto della guida a contatto) è necessariamente nulla. $v(A'') = 0$.
    - **Per il puro rotolamento:** La condizione fondamentale di puro rotolamento (senza strisciamento) impone che la velocità del punto del disco a contatto ($A'$) sia uguale alla velocità del punto della guida a contatto ($A''$).
    - Combinando le due, si ha che la velocità del punto del disco a contatto è anch'essa nulla: $v(A') = v(A'') = 0$.
    - **Spiegazione:** Questa è una condizione istantanea. I punti materiali che si trovano in contatto in quell'istante hanno velocità nulla _in quell'istante_ rispetto alla guida fissa. Il professore sottolinea che "non ci sono santi", se la guida è fissa e non c'è strisciamento, la velocità istantanea dei punti materiali di contatto è nulla. Se non fosse così, ci sarebbe strisciamento.
- **Velocità del Punto Geometrico ($A_geom$)**
    
    - A differenza dei punti materiali $A'$ e $A''$ che hanno velocità nulla nell'istante del contatto, il punto geometrico $A_geom$ in cui questi coincidono _si muove_ se lo si considera in istanti diversi.
    - Questo è un punto chiave: $A'$ e $A''$ sono _sempre_ i punti _attualmente_ a contatto, che cambiano istante per istante sul bordo dei corpi. $A_geom$ è la _posizione_ dove il contatto avviene in un dato istante.
    - **Velocità di $A_geom$:** Il punto geometrico in cui i punti di contatto coincidono istante per istante si muove con la velocità del centro del disco.
- **Esempio Visivo (Disco che Roto-Trasla)**
    
    - Immaginate una "foto" del disco al tempo $T_1$ e una al tempo $T_2 > T_1$. Il disco si è spostato roto-traslando.
    - Il punto di contatto geometrico (la posizione sulla guida dove il contatto avviene) si trova sempre sotto il centro del disco (C).
    - Di conseguenza, questo punto geometrico si sposta sulla guida con la stessa velocità orizzontale del centro del disco.
- **Esempio della Moneta**
    
    - Si prende una moneta (idealmente con zigrinatura per identificare punti sul bordo) e la si fa rotolare su una superficie piana fissa (la mano).
    - **Punto Materiale:** Si segna una zigrinatura. Quando quella specifica zigrinatura tocca la superficie (la guida), in quell'istante, quel _punto materiale_ della moneta ha velocità nulla rispetto alla superficie. Subito dopo, mentre la moneta rotola via, quel punto materiale si solleva e acquista velocità diversa da zero.
    - **Punto Geometrico:** Il _punto geometrico_ sulla superficie (mano) dove il contatto avviene in un dato istante è diverso dal punto geometrico di contatto nell'istante successivo. Questo punto geometrico di contatto si sposta sulla superficie con la velocità con cui si muove la moneta nel suo complesso, che è la velocità del suo centro.
    - Il professore ribadisce che è fondamentale distinguere tra i punti materiali (istantaneamente fermi nel contatto) e il punto geometrico (che si sposta).

**3. Classificazione del Vincolo di Puro Rotolamento** (Proprietà del Vincolo)

Il professore discute la natura del vincolo imposto dal puro rotolamento in termini di vincoli olonomi e anolonomi.

- **Generalmente: Vincolo Anolonomo**
    
    - Nonostante in casi molto specifici (come il puro rotolamento 2D che si mantiene sempre nello stesso piano) possa sembrare simile a un vincolo olonomo, in generale il vincolo di puro rotolamento **non è olonomo**, bensì **anolonomo**.
    - È definito come un **vincolo di pura mobilità**.
- **Esempi di Vincoli Anolonomi Legati al Rotolamento**
    
    - **Sfera su un Piano Fisso:** Una sfera (o palla) che rotola senza strisciare su un pavimento o un piano fisso è l'esempio classico di un vincolo anolonomo. Il professore specifica che questo vincolo di velocità _non è integrabile_, rendendolo molto difficile da trattare analiticamente.
    - **Ruota della Bicicletta:** Anche una ruota di bicicletta che rotola senza strisciare è un vincolo anolonomo. Se la ruota rimane sempre nello stesso piano verticale, il vincolo è anolonomo. Se inizia a cambiare direzione (quindi il piano di rotolamento cambia), diventa **subito** un vincolo anolonomo.
- **Implicazioni dei Vincoli Anolonomi**
    
    - **Utilità Pratica:** Nella vita reale, la natura anolonomo del puro rotolamento (come quello delle ruote di un'automobile) è vantaggiosa perché non limita le configurazioni spaziali raggiungibili. Permette di fare manovra e raggiungere posizioni che non sarebbero accessibili con un vincolo olonomo (che limiterebbe i gradi di libertà configurazionali).
    - **Complessità Analitica:** Dal punto di vista della meccanica analitica, i vincoli anolonomi sono "un disastro" da trattare. Richiedono l'uso di equazioni più complesse, come le equazioni di Hafele.

**4. Vincolo Numero 7: Contatto con Strisciamento** (Nuovo Vincolo)

Il professore introduce un diverso tipo di vincolo tra corpi rigidi: il contatto con strisciamento.

- **Definizione e Contesto**
    
    - È un vincolo che si realizza tra due corpi rigidi, chiamati $BP_1$ (Body Part 1) e $BP_2$ (Body Part 2).
    - Implica un punto $Q$ appartenente al primo corpo rigido ($BP_1$) che è a contatto con una superficie $\sigma$ del secondo corpo rigido ($BP_2$).
    - La superficie $\sigma$ ha una normale esterna $N_{\sigma}$ nel punto $Q$.
- **Condizione del Vincolo** (Equazione Fondamentale)
    
    - La condizione imposta dal contatto con strisciamento è **meno restrittiva** rispetto a quella del puro rotolamento. Il puro rotolamento richiede che l'intero vettore velocità sia uguale nei punti di contatto dei due corpi.
    - Il contatto con strisciamento richiede solo che le **componenti delle velocità** dei punti di contatto, proiettate **lungo la normale alla superficie** nel punto di contatto $Q$, siano uguali.
    - La formula che esprime questa condizione è: $$ V_Q^{BP1} \cdot N_{\sigma}(Q) = V_Q^{BP2} \cdot N_{\sigma}(Q) $$ Dove:
        - $V_Q^{BP1}$ è la velocità del punto $Q$ considerato come appartenente al corpo rigido $BP_1$.
        - $V_Q^{BP2}$ è la velocità del punto $Q$ considerato come appartenente al corpo rigido $BP_2$.
        - $N_{\sigma}(Q)$ è il vettore normale esterna alla superficie $\sigma$ del corpo $BP_2$ nel punto di contatto $Q$.
        - $\cdot$ indica il prodotto scalare.
- **Significato della Condizione**
    
    - Questa condizione è "naturale" ed è il modo per **mantenere il contatto** tra i due corpi.
    - Richiedendo l'uguaglianza delle componenti normali delle velocità, si impedisce che i corpi si allontanino l'uno dall'altro o si compenetrino nella direzione perpendicolare alla superficie di contatto.
    - Le componenti tangenziali delle velocità dei due punti di contatto _possono_ essere diverse; è questa differenza nella velocità tangenziale che costituisce lo "strisciamento".
- **Esempio del Vincolo con Strisciamento** (Applicazione/Esercizio)
    
    - Si considera un sistema composto da un'asta rigida $OQ$ (chiamata $BP_1$) e una lamina rigida (chiamata $BP_2$).
    - L'asta è incernierata in un punto fisso $O$ (l'origine degli assi X e Y nell'esempio), quindi il suo atto di moto è puramente rotatorio attorno a $O$.
    - La lamina ha un lato rettilineo che funge da superficie $\sigma$.
    - Il contatto avviene nel punto $Q$ dove l'asta tocca il lato della lamina.
    - Nell'esempio disegnato, il lato della lamina è verticale, e la normale esterna $N_{\sigma}$ a questo lato è orizzontale e rivolta verso sinistra. Il professore specifica che in questo caso semplice la normale è sempre la stessa lungo tutto il lato.
    - Nell'esempio specifico del disegno fornito, la normale $N_{\sigma}$ è il versore $-\mathbf{i}$ (assumendo l'asse X rivolto verso destra).
    - Applicando la condizione del vincolo $V_Q^{BP1} \cdot N_{\sigma} = V_Q^{BP2} \cdot N_{\sigma}$, si sta imponendo che la componente orizzontale della velocità del punto $Q$ (visto come appartenente all'asta) sia uguale alla componente orizzontale della velocità del punto $Q$ (visto come appartenente alla lamina).
    - Questo assicura che l'asta e la lamina rimangano a contatto lungo quel lato, anche se il punto $Q$ sull'asta scivola (striscia) lungo il lato della lamina.

Il professore conclude la descrizione di questo vincolo, menzionando che gli esempi pratici e un esercizio completo verranno affrontati successivamente.

#### References
[[meccanica-lez06_trascrizione]]


