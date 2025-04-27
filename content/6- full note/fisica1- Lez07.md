2025-03-11 13:30

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## fisica1- Lez07
# FISICA 1

## Dinamica di un Punto Materiale: Le Forze

### 1. Forza Elastica

La forza elastica è una forza che si manifesta nei corpi con proprietà elastiche. L'azione di questa forza viene modellizzata tramite l'uso di una **molla**.

#### 1.1. Caratteristiche della Molla e Costante Elastica

Ogni molla è caratterizzata da un parametro specifico chiamato **costante elastica** ($k$).

- Una costante elastica elevata indica una **molla rigida**, difficile da deformare.
- Una costante elastica bassa indica una **molla molle**, facile da deformare.
- Dimensionalmente, la costante elastica si misura in **Newton su metri** ($N/m$).

#### 1.2. Legge di Hooke

Quando una molla viene allungata o compressa di una certa deformazione ($\Delta L = L - L_0$), essa reagisce esercitando una **forza di richiamo** ($F_{el}$) che tende a riportarla nella sua posizione di equilibrio ($L_0$). Questa forza è descritta dalla **legge di Hooke**:

$F_{el} = -k \Delta L$

Dove:

- $F_{el}$ è la forza elastica (vettore).
- $k$ è la costante elastica (scalare, sempre positiva).
- $\Delta L = L - L_0$ è il vettore spostamento (o deformazione) rispetto alla lunghezza a riposo ($L_0$).

Il **segno meno** indica che la forza elastica è una **forza di richiamo**, ovvero ha la stessa direzione della deformazione ma verso opposto.

- Se la molla è allungata ($\Delta L$ diretto verso destra), la forza elastica è diretta verso sinistra, tendendo a riportare la molla alla sua lunghezza di riposo.
- Se la molla è compressa ($\Delta L$ diretto verso sinistra), la forza elastica è diretta verso destra, tendendo a riportare la molla alla sua lunghezza di riposo.

È importante ragionare sulla direzione della deformazione e sul fatto che la forza elastica è sempre una forza di richiamo, piuttosto che concentrarsi unicamente sulla formula vettoriale. La forza elastica agisce sempre parallelamente alla direzione in cui è disposta la molla.

#### 1.3. Formulazioni Scalari Lungo un Asse

Per semplificare la scrittura, si può definire un asse $x$ parallelo alla direzione della molla, con origine in un punto conveniente.

- Se l'origine è fissata all'estremo vincolato della molla, la posizione della molla è data da $x$, e la lunghezza a riposo è $x_0$. La forza elastica può essere scritta come:
    
    $F_{el} = -k (x - x_0) \hat{u}_x$
    
    dove $\hat{u}_x$ è il versore dell'asse $x$.
    
- Se l'origine è posta direttamente nella posizione della molla a riposo ($x_0 = 0$), la formula si semplifica ulteriormente:
    
    $F_{el} = -k x \hat{u}_x$
    
    dove $x$ rappresenta direttamente l'allungamento (se positivo) o la compressione (se negativo) della molla.
    
- In alcuni esercizi, le molle possono essere considerate di **lunghezza trascurabile** ($x_0 \approx 0$) quando la deformazione è molto maggiore della lunghezza iniziale. In questo caso, la formula si riduce a:
    
    $F_{el} = -k x \hat{u}_x$.
    

#### 1.4. Sistemi Massa-Molla e Moto Armonico

Se una massa $M$ viene collegata a una molla, deformata e poi lasciata libera, essa oscillerà attorno alla posizione di riposo. Il moto risultante è un **moto armonico semplice**, descritto dalle leggi orarie studiate in cinematica. Tuttavia, l'analisi dettagliata di questo moto non viene trattata in questa fase.

### 2. Funi Ideali

Una fune ideale è un oggetto che può essere pensato come un filo con sezione infinitesima e presenta le seguenti caratteristiche:

- **Non è elastica**: ha una **lunghezza costante**.
- **Massa trascurabile**: la massa della fune ideale è considerata nulla ($m_{fune} = 0$).
- **Sopporta solo forze di trazione**: non può sopportare forze di compressione, altrimenti si piega.

Le funi vengono utilizzate per **trasferire una forza da un punto all'altro** lungo la loro direzione.

#### 2.1. Tensione della Fune

La forza che agisce su una fune tesa è chiamata **tensione** ($T$). Se si applica una forza a un'estremità di una fune ideale, questa forza si propaga inalterata lungo tutta la fune.

Considerando una fune ideale con una tensione $T_A$ all'estremo A e $T_B$ all'estremo B, e applicando il secondo principio della dinamica ($\vec{F}_{ris} = m \vec{a}$) lungo l'asse $x$ parallelo alla fune:

$T_A - T_B = m_{fune} a_x$

Dato che la massa della fune ideale è nulla ($m_{fune} = 0$), si ha:

$T_A - T_B = 0 \implies T_A = T_B = T$

Pertanto, in una fune ideale, la **tensione ha lo stesso valore in ogni punto**. La tensione è sempre diretta lungo la direzione della fune e verso l'esterno rispetto al corpo a cui è collegata, in quanto la fune può solo tirare (forza di trazione).

#### 2.2. Vincolo Cinematico Imposto da una Fune Inestensibile

Quando due o più corpi sono collegati da una fune ideale (inestensibile), i loro movimenti risultano vincolati. Se due vagoni di masse $m_A$ e $m_B$ sono collegati da una fune di lunghezza $L_{fune}$, e si definisce un asse $x$, le loro posizioni $x_A(t)$ e $x_B(t)$ soddisfano la relazione:

$x_A(t) = x_B(t) + L_{fune}$ (o $x_B(t) = x_A(t) + L_{fune}$, a seconda della scelta dell'origine e del verso dell'asse)

Derivando questa relazione rispetto al tempo, si ottengono le **velocità** dei due vagoni:

$\frac{dx_A}{dt} = \frac{dx_B}{dt} + \frac{dL_{fune}}{dt}$

Poiché la lunghezza della fune è costante ($\frac{dL_{fune}}{dt} = 0$), si ha:

$v_A(t) = v_B(t)$

Derivando ulteriormente rispetto al tempo, si ottengono le **accelerazioni**:

$\frac{dv_A}{dt} = \frac{dv_B}{dt} \implies a_A(t) = a_B(t)$

Questo dimostra che **tutti i punti di una fune inestensibile (e gli oggetti ad essa collegati) hanno la stessa velocità e la stessa accelerazione in modulo**, anche se la direzione del moto può essere diversa a causa di elementi come le carrucole.

### 3. Carrucole Ideali

Una **carrucola** (o puleggia) è un disco in grado di ruotare attorno al proprio centro. Le funi possono scorrere attorno alla carrucola senza scivolare, permettendo di trasferire il movimento in direzioni diverse.

Per la prima parte del corso, le carrucole vengono considerate **ideali**, ovvero **prive di massa** ($m_{carrucola} = 0$). In questa approssimazione, non è necessario considerare la rotazione della carrucola in dettaglio, e la tensione della fune si propaga inalterata attraverso la carrucola.

### 4. Esempio di Sistema Massa-Fune-Carrucola

Consideriamo due corpi di masse $m_A$ e $m_B$ collegati da una fune ideale che passa sopra una carrucola ideale. Supponiamo che $m_A > m_B$. Ci si aspetta che il corpo A scenda e il corpo B salga con la stessa accelerazione in modulo ($a$) ma in direzioni opposte.

#### 4.1. Analisi delle Forze sul Corpo A

- **Forza peso** ($P_A$): diretta verso il basso, con modulo $m_A g$. In termini vettoriali, se si definisce un asse $x$ verticale diretto verso il basso, $\vec{P}_A = m_A g \hat{u}_x$.
- **Tensione della fune** ($T$): diretta verso l'alto, che si oppone alla caduta. In termini vettoriali, $\vec{T}_A = -T \hat{u}_x$.

Applicando il secondo principio della dinamica al corpo A lungo l'asse $x$:

$\sum F_x = m_A a_x$ $m_A g - T = m_A a$ (equazione 1)

dove $a$ è l'accelerazione del corpo A verso il basso (positiva secondo la scelta dell'asse).

#### 4.2. Analisi delle Forze sul Corpo B

- **Forza peso** ($P_B$): diretta verso il basso, con modulo $m_B g$. Se si considera un asse $y$ verticale diretto verso l'alto per il corpo B (con accelerazione positiva verso l'alto), $\vec{P}_B = -m_B g \hat{u}_y$.
- **Tensione della fune** ($T$): diretta verso l'alto, che lo trascina. In termini vettoriali, $\vec{T}_B = T \hat{u}_y$.

Applicando il secondo principio della dinamica al corpo B lungo l'asse $y$:

$\sum F_y = m_B a_y$ $T - m_B g = m_B a$ (equazione 2)

dove $a$ è il modulo dell'accelerazione del corpo B verso l'alto (positiva secondo la scelta dell'asse), uguale in modulo all'accelerazione del corpo A a causa del vincolo della fune inestensibile.

#### 4.3. Risoluzione del Sistema di Equazioni

Si ottiene un sistema di due equazioni con due incognite ($a$ e $T$):

1. $m_A g - T = m_A a$
2. $T - m_B g = m_B a$

Sommando le due equazioni, la tensione $T$ si annulla:

$(m_A g - T) + (T - m_B g) = m_A a + m_B a$ $m_A g - m_B g = (m_A + m_B) a$ $(m_A - m_B) g = (m_A + m_B) a$

Risolvendo per l'accelerazione $a$:

$a = \frac{m_A - m_B}{m_A + m_B} g$

#### 4.4. Interpretazione del Risultato

- Se $m_A > m_B$, allora $a > 0$, il che significa che il corpo A accelera verso il basso e il corpo B accelera verso l'alto, come previsto.
- Se $m_B > m_A$, allora $a < 0$, il che indica che l'accelerazione ha il verso opposto a quello ipotizzato (il corpo B scende e il corpo A sale).
- Se $m_A = m_B$, allora $a = 0$, il sistema è in equilibrio (o si muove a velocità costante se inizialmente in movimento).

Questo esempio dimostra come applicare i concetti di forza peso, tensione e il secondo principio della dinamica a un sistema collegato, tenendo conto del vincolo imposto dalla fune inestensibile e dalla carrucola ideale.

## Spiegazione delle Reazioni Vincolari e dell'Attrito

### Introduzione

Il professore introduce il concetto di **reazioni vincolari**, forze generate da una superficie d'appoggio quando un corpo è a contatto con essa. Queste reazioni impediscono al corpo di penetrare la superficie e possono anche opporsi al suo movimento lungo la superficie.

### Reazioni Vincolari (Reazioni di una Superficie d'Appoggio)

Le reazioni vincolari si manifestano quando un oggetto è appoggiato su un piano o una superficie. La regola è valida sia per superfici orizzontali che inclinate o verticali. La loro esistenza è legata alla struttura della materia che rende rigidi gli oggetti.

#### Reazione Normale alla Superficie ($R_n$)

Quando un oggetto è appoggiato su una superficie, una delle forze generate dalla superficie di appoggio è la **reazione normale** [$R_n$].

- È diretta **ortogonalmente (perpendicolarmente) alla superficie di appoggio**.
- **Esiste sempre** quando un oggetto è appoggiato su una superficie e non la sta sfondando.
- Si oppone al tentativo dell'oggetto di penetrare la superficie.
- La sua direzione è sempre **verso l'esterno rispetto al piano d'appoggio**.

**Esempi:**

- Un oggetto su un piano orizzontale: la reazione normale è diretta verso l'alto.
- Una mano che spinge contro una parete verticale: la reazione normale esercitata dalla parete sulla mano è orizzontale e opposta alla spinta.
- Un oggetto su un piano inclinato: la reazione normale è perpendicolare al piano inclinato e diretta verso l'esterno.

**Intensità della Reazione Normale:**

- L'intensità della reazione normale **non ha un'espressione numerica fissa**.
- Dipende dalle **forze che l'oggetto sta applicando sulla superficie d'appoggio**.
- Si calcola imponendo l'**equilibrio delle forze in direzione normale** al piano d'appoggio, poiché non vogliamo che l'oggetto sfondi la superficie.

Matematicamente, in assenza di accelerazione nella direzione normale ($a_n = 0$), la somma delle forze in quella direzione è zero: $\sum F_n = m a_n = 0$

Questo permette di determinare il valore di $R_n$ caso per caso, bilanciando le altre componenti di forza perpendicolari alla superficie.

**Carico di Rottura:**

- Una superficie d'appoggio ha un **carico di rottura**, un valore massimo della reazione normale che può generare senza essere sfondata.
- Anche le funi hanno un **carico di rottura**, una tensione massima che possono sopportare prima di rompersi.

#### Reazione Tangenziale alla Superficie ($R_T$) o Forza d'Attrito

Una superficie d'appoggio può generare anche una forza diretta in **direzione tangente (parallela) al piano d'appoggio**, soprattutto se la superficie non è perfettamente liscia (scabra o rugosa) e quindi presenta **attrito**.

- Se si applica una forza esterna ($F_0$) tangente alla superficie a un oggetto appoggiato su di essa, e l'oggetto **rimane fermo**, deve esistere una forza che bilancia $F_0$.
- Questa forza è la **reazione tangente** ($R_T$), che si oppone al tentativo di movimento.
- È più comunemente conosciuta come **forza d'attrito**.

Matematicamente, per l'equilibrio in direzione tangente ($t$), la somma delle forze in quella direzione deve essere zero: $\sum F_t = 0$ $F_0 - R_T = 0 \implies R_T = F_0$

**Tipi di Attrito:**

La reazione tangente ($R_T$) racchiude diverse forme di attrito:

- **Attrito Radente:** Si manifesta quando un oggetto solido vorrebbe strisciare su una superficie solida.
    - **Attrito Radente Statico ($F_s$):** È la forza che impedisce l'inizio del movimento di strisciamento tra due superfici a contatto. Agisce finché l'oggetto rimane fermo nonostante l'applicazione di una forza esterna.
    - **Attrito Radente Dinamico:** È la forza che si oppone al movimento di strisciamento quando un oggetto è già in movimento su una superficie. Rallenta il movimento del corpo, causando un'accelerazione inferiore rispetto al caso di superficie liscia.
- **Attrito Viscoso:** Si verifica quando un oggetto solido si muove all'interno di un fluido (liquido o gas). La forza di attrito viscoso rallenta il movimento dell'oggetto ed è tanto più intensa quanto più viscoso è il fluido.
- **Attrito Volvente:** Entra in gioco quando un oggetto rotola su una superficie. È generalmente molto inferiore all'attrito radente, motivo per cui è più facile far rotolare un oggetto che farlo strisciare.

### Esempio: Attrito Radente Statico su un Piano Inclinato

Consideriamo una monetina appoggiata su un computer inclinato di un angolo $\theta$. Fino a un certo angolo di inclinazione, la monetina rimane ferma. Analizziamo le forze che agiscono sulla monetina di massa $M$:

1. **Forza Peso ($P$ o $mg$):** Diretta verticalmente verso il basso.
2. **Reazione Normale ($R_n$):** Perpendicolare al piano inclinato e diretta verso l'alto.
3. **Reazione Tangenziale ($R_T$ o $F_s$):** Parallela al piano inclinato e diretta verso l'alto (opposta al potenziale movimento verso il basso).

Scomponiamo la forza peso in due componenti rispetto al piano inclinato:

- **Componente Normale ($P_n$):** Perpendicolare al piano inclinato, $P_n = mg \cos(\theta)$, diretta verso il piano.
- **Componente Tangenziale ($P_t$):** Parallela al piano inclinato, $P_t = mg \sin(\theta)$, diretta verso il basso.

Applichiamo la condizione di equilibrio (accelerazione nulla) nelle direzioni normale e tangente:

#### Direzione Normale:

La monetina non si muove perpendicolarmente al piano, quindi la somma delle forze in direzione normale è zero: $R_n - P_n = 0$ $R_n - mg \cos(\theta) = 0$ $\boxed{R_n = mg \cos(\theta)}$

Questa equazione ci permette di calcolare l'intensità della reazione normale, che bilancia la componente normale della forza peso.

#### Direzione Tangenziale (Piano Liscio):

Se il piano fosse perfettamente liscio, non ci sarebbe attrito ($R_T = 0$). In questo caso, la componente tangenziale della forza peso causerebbe un'accelerazione della monetina verso il basso: $P_t = ma$ $mg \sin(\theta) = ma$ $\boxed{a = g \sin(\theta)}$

Anche una piccola inclinazione causerebbe lo scivolamento della monetina.

#### Direzione Tangenziale (Piano Scabro - Attrito Statico):

Poiché la monetina rimane ferma fino a un certo angolo, deve esistere una forza che bilancia la componente tangenziale della forza peso. Questa forza è la **reazione tangente** o **forza d'attrito radente statico** ($R_T$ o $F_s$).

Per l'equilibrio in direzione tangente: $P_t - R_T = 0$ $mg \sin(\theta) - R_T = 0$ $\boxed{R_T = mg \sin(\theta)}$

Quindi, la forza d'attrito statico ha un'intensità uguale alla componente tangenziale della forza peso e si oppone al potenziale movimento. Il piano d'appoggio esercita quindi una forza che ha due componenti: la reazione normale che bilancia la componente normale del peso e la reazione tangente (attrito statico) che bilancia la componente tangente del peso, mantenendo la monetina in equilibrio. Questa forza di attrito statico permette al corpo di rimanere in equilibrio nonostante la presenza di una forza che tenderebbe a farlo muovere tangenzialmente al piano d'appoggio. La forza d'attrito statico viene spesso indicata anche con il simbolo $F_s$.



## Spiegazione della Forza d'Attrito Radente, Viscoso e Moto Circolare

### Forza d'Attrito Radente Statico

La forza d'attrito radente statico è quella forza che **permette il bilancio delle forze in direzione tangente**, impedendo al corpo di muoversi in tale direzione. La sua intensità non è nota a priori, ma si calcola imponendo la condizione che il corpo rimanga fermo. In altre parole, l'intensità della forza d'attrito radente statico ($RT$) è tale da rendere **nulla la risultante delle forze in direzione tangente**.

#### Origine Fisica della Forza d'Attrito Radente Statico

L'origine fisica di questa forza è di natura **elettromagnetica**, dovuta all'interazione tra le cariche presenti sulle superfici degli oggetti a contatto. A livello microscopico, anche superfici apparentemente lisce presentano delle **microrugosità**. Quando due superfici vengono a contatto, l'attrazione elettrostatica tra le cariche vicine provoca la formazione di **super microfusioni**, agendo come punti di vincolo che trattengono gli oggetti.

**Più le superfici sono rugose, maggiori sono le microfusioni**, e la forza d'attrito statico è più intensa. Le caratteristiche superficiali del materiale influenzano l'efficacia di questa forza.

#### Valore Massimo della Forza d'Attrito Radente Statico

La reazione tangente al piano d'appoggio (forza d'attrito radente statico) non può bilanciare forze di qualunque intensità. Oltre un certo valore massimo, le microfusioni si rompono e l'oggetto inizia a muoversi. Questo significa che la forza d'attrito radente statico ($RT$) può assumere tutti i valori fino a un valore massimo ($RT_{max}$):

$RT \leq RT_{max}$

Se l'intensità di $RT$ supera $RT_{max}$, non si è più in condizioni statiche e si ha movimento.

Sperimentalmente si è trovato che il valore massimo della forza d'attrito radente statico è **direttamente proporzionale all'intensità della reazione normale** ($R_N$) tramite un coefficiente di proporzionalità chiamato **coefficiente di attrito statico** ($\mu_s$):

$RT_{max} = \mu_s R_N$

Il coefficiente di attrito statico ($\mu_s$) dipende dai **materiali a contatto** e dalla **rugosità delle superfici**.

**È fondamentale sottolineare che $RT = \mu_s R_N$ rappresenta il valore massimo della forza d'attrito radente statico, non il suo valore in generale.** Il valore effettivo di $RT$ si determina imponendo il bilancio delle forze tangenti.

#### Esempio: Moneta su un Piano Inclato

Consideriamo una moneta appoggiata su un piano inclinato di un angolo $\theta$. Per trovare l'angolo massimo ($\theta_{max}$) affinché la moneta rimanga ferma, si impone che la forza d'attrito radente statico ($RT$) sia minore o uguale al suo valore massimo ($RT_{max}$).

Le forze agenti sulla moneta sono la forza peso ($mg$) e la reazione del piano, scomponibile in una componente normale ($R_N$) e una tangente (forza d'attrito $RT$).

Dalla **componente normale delle forze**, imponendo l'equilibrio in direzione perpendicolare al piano, si ha:

$R_N - mg \cos \theta = 0 \implies R_N = mg \cos \theta$

Dalla **componente tangente delle forze**, imponendo l'equilibrio in direzione parallela al piano (condizione di non movimento), si ha:

$RT - mg \sin \theta = 0 \implies RT = mg \sin \theta$

Perché la moneta rimanga ferma, deve valere la condizione:

$RT \leq RT_{max}$

Sostituendo le espressioni trovate:

$mg \sin \theta \leq \mu_s R_N$

$mg \sin \theta \leq \mu_s (mg \cos \theta)$

Dividendo per $mg \cos \theta$ (assumendo $\cos \theta \neq 0$):

$\frac{\sin \theta}{\cos \theta} \leq \mu_s$

$\tan \theta \leq \mu_s$

Quindi, l'angolo massimo di inclinazione ($\theta_{max}$) per cui la moneta rimane ferma è dato da:

$\theta_{max} = \arctan(\mu_s)$

Finché l'angolo di inclinazione $\theta$ è tale che $\tan \theta \leq \mu_s$, l'oggetto non si muove. Oltre questo angolo, l'oggetto inizierà a scivolare.

### Forza d'Attrito Radente Dinamico

La forza d'attrito radente dinamico ($RT$) si manifesta quando un corpo **è già in movimento** su una superficie scabra. È una forza **tangente alla direzione del movimento** e **diretta in verso opposto**, con lo scopo di rallentare il movimento, ma non di bloccarlo.

Per determinare la direzione della forza d'attrito dinamico, si immagina la situazione in assenza di attrito per capire in quale direzione il corpo tenderebbe a muoversi; la forza d'attrito dinamico avrà la stessa direzione ma verso opposto.

#### Intensità della Forza d'Attrito Radente Dinamico

Sperimentalmente si è trovato che l'intensità della forza d'attrito radente dinamico ($RT$) è **proporzionale all'intensità della reazione normale** ($R_N$) tramite un coefficiente di proporzionalità chiamato **coefficiente di attrito dinamico** ($\mu_d$):

$RT = \mu_d R_N$

Il coefficiente di attrito dinamico ($\mu_d$) dipende anch'esso dai materiali a contatto.

#### Relazione tra $\mu_s$ e $\mu_d$

Si osserva sperimentalmente che, per una data coppia di superfici, il **coefficiente di attrito statico è generalmente maggiore del coefficiente di attrito dinamico** ($\mu_s > \mu_d$). Questo significa che è più difficile mettere in movimento un oggetto fermo che mantenerlo in movimento. La ragione risiede nel fatto che, una volta superata la condizione di equilibrio e iniziato il movimento, le microfusioni tra le superfici si rompono e si riformano continuamente, ma in numero minore rispetto alla condizione statica.

#### Natura Adimensionale dei Coefficienti d'Attrito

Sia il coefficiente di attrito statico ($\mu_s$) che quello dinamico ($\mu_d$) sono **grandezze adimensionali**. Questo perché mettono in relazione due forze (la reazione tangente e la reazione normale), che hanno la stessa dimensione fisica.

#### Esempio: Oggetto che Scivola su un Piano Inclnato Scabro

Consideriamo ora lo stesso oggetto sul piano inclinato, ma con un angolo tale che l'oggetto sta scivolando verso il basso con un'accelerazione. In questo caso, agisce la forza d'attrito radente dinamico ($RT$).

Riprendendo le forze scomposte:

- Componente normale: $R_N = mg \cos \theta$
- Componente tangente (direzione positiva verso il basso): $mg \sin \theta - RT = ma$

La forza d'attrito dinamico è data da:

$RT = \mu_d R_N = \mu_d (mg \cos \theta)$

Sostituendo questa espressione nell'equazione del moto lungo la tangente:

$mg \sin \theta - \mu_d mg \cos \theta = ma$

Dividendo per $m$, otteniamo l'accelerazione dell'oggetto:

$a = g \sin \theta - \mu_d g \cos \theta$

$a = g (\sin \theta - \mu_d \cos \theta)$

Nel caso di un piano liscio ($\mu_d = 0$), l'accelerazione sarebbe $a = g \sin \theta$. La presenza dell'attrito dinamico **riduce l'accelerazione** dell'oggetto. Maggiore è il coefficiente di attrito dinamico ($\mu_d$), minore è l'accelerazione.

### Forza d'Attrito Viscoso

La forza d'attrito viscoso è la forza che si manifesta quando un corpo si muove all'interno di un **fluido**. È una forza **puramente dinamica**, in grado solo di rallentare il movimento, non di impedirlo permanentemente.

L'intensità della forza d'attrito viscoso ($RT$) è **tanto maggiore quanto è maggiore la velocità** ($\vec{v}$) dell'oggetto rispetto al fluido. La forza è **proporzionale al vettore velocità e opposta ad esso**:

$RT = -\beta \vec{v}$

dove $\beta$ è il **coefficiente di attrito viscoso**.

Il coefficiente di attrito viscoso ($\beta$) dipende dalla **viscosità del fluido**: più il fluido è viscoso, maggiore è $\beta$ e quindi più intensa è la forza d'attrito viscoso. Dipende anche dalla **forma dell'oggetto**, ma questa dipendenza è più complessa e generalmente non trattata negli esercizi di dinamica del punto materiale.

Un oggetto che cade in un fluido viscoso inizialmente è fermo, quindi la forza d'attrito viscoso è nulla. Appena inizia a muoversi, acquista velocità e quindi si manifesta la forza d'attrito viscoso, che aumenta con la velocità. Questa forza si oppone alla forza peso, diminuendo l'accelerazione dell'oggetto. L'accelerazione diminuisce finché la forza d'attrito viscoso non bilancia la forza peso, raggiungendo una **velocità limite**.

Lo studio dettagliato del moto con attrito viscoso richiede la risoluzione di **equazioni differenziali**, che vanno oltre gli strumenti matematici di base. Pertanto, non è una forza facilmente analizzabile con i metodi elementari.

### Moto Circolare e Forza Centripeta: Esempio della Curva Piana

Consideriamo una macchina che percorre una **curva piana**, ovvero una strada orizzontale. Vista dall'alto, la macchina segue una traiettoria curva con un certo raggio di curvatura ($r$).

Le forze che agiscono sulla macchina sono la **forza peso** ($mg$) diretta verso il basso e la **reazione normale** ($R_N$) del piano stradale diretta verso l'alto. Tuttavia, queste due forze verticali si bilanciano e non possono causare l'accelerazione necessaria per curvare.

Perché la macchina possa seguire una traiettoria curva, deve possedere una **accelerazione normale** (o centripeta) diretta verso il centro della curva, che provoca la variazione della direzione del vettore velocità. Secondo il secondo principio della dinamica, questa accelerazione deve essere causata da una **forza netta diretta verso il centro della curva**, chiamata **forza centripeta**.

Nel caso di una curva piana, la forza che permette alla macchina di curvare è la **forza d'attrito radente statico** ($RT$) che si sviluppa tra le **gomme dell'auto e l'asfalto**. Questa forza agisce sulle gomme e punta **verso l'interno del raggio di curvatura**.

Anche se la macchina è in movimento, l'attrito coinvolto è **statico** perché si oppone al tentativo di movimento laterale (slittamento) delle ruote rispetto all'asfalto nella direzione radiale. Le ruote girano in avanti, ma non strisciano lateralmente. Se l'attrito statico non fosse sufficiente (ad esempio, su una strada ghiacciata), la macchina tenderebbe a proseguire in linea retta a causa dell'inerzia, anziché curvare.

In inverno, si utilizzano pneumatici invernali che garantiscono un **maggiore coefficiente di attrito statico** per migliorare l'aderenza e la capacità di curvare su superfici a bassa aderenza.
#### References



