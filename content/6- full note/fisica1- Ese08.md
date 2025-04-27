2025-03-12 09:29

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## fisica1- Ese08
# Esercizio 4.23: Due corpi collegati tramite carrucola

## Descrizione del Problema
![[Pasted image 20250312101116.png]]
Due corpi di massa $m_1 = 5$ kg e $m_2 = 15$ kg sono fissati alle estremità di una fune inestensibile che appoggia su una carrucola di massa trascurabile. Alla carrucola è applicata una forza $\mathbf{F}$ diretta verso l'alto. Trascurando gli attriti e ipotizzando che la fune sia tesa, si chiede di calcolare:

1. La massima intensità della forza $F_M$ per cui la massa $m_2$ rimane a contatto con il suolo.
2. L'accelerazione della massa $m_1$ in corrispondenza di tale forza $F_M$.

La carrucola ha massa trascurabile, il che implica che la tensione è uguale in tutti i punti della fune. Una fune tira, non spinge, e per agire deve essere tesa.

## Diagramma delle Forze e Sistema di Riferimento

Si considerano i tre corpi: la massa $m_1$, la massa $m_2$, e la carrucola. Si sceglie un sistema di riferimento con l'asse verticale orientato verso l'alto, considerando positiva la forza $\mathbf{F}$.

- **Corpo 1 ($m_1$):**
- ![[Pasted image 20250312101141.png|100]]
    - Forza peso: $m_1 g$ (diretta verso il basso, quindi negativa nel nostro sistema di riferimento).
    - Tensione della fune: $T$ (diretta verso l'alto, quindi positiva).
- **Corpo 2 ($m_2$):**
- ![[Pasted image 20250312101215.png|100]]
    - Forza peso: $m_2 g$ (diretta verso il basso, quindi negativa).
    - Tensione della fune: $T$ (diretta verso l'alto, quindi positiva).
    - Reazione normale del suolo: $R_n$ (diretta verso l'alto, quindi positiva). Questa forza agisce solo finché il corpo rimane a contatto con il suolo.
- **Carrucola (massa trascurabile):**
  ![[Pasted image 20250312103323.png|170]]
    - Forza applicata: $F$ (diretta verso l'alto, quindi positiva).
    - Tensione della fune (due tratti che tirano verso il basso): $-T$ e $-T$ (negative).
    - Forza peso della carrucola: $m_{carrucola} g = 0$ (perché la massa è trascurabile).

## Equazioni della Dinamica

Applicando la seconda legge di Newton ($\mathbf{F}_{ris} = m\mathbf{a}$) per ciascun corpo:

1. **Corpo 1 ($m_1$):** $T - m_1 g = m_1 a_1$ dove $a_1$ è l'accelerazione della massa $m_1$ (positiva se diretta verso l'alto).
    
2. **Corpo 2 ($m_2$):** $R_n + T - m_2 g = m_2 a_2$ Il problema specifica che $m_2$ rimane a contatto con il suolo, quindi la sua accelerazione $a_2 = 0$. L'equazione diventa: $R_n + T - m_2 g = 0$
    
3. **Carrucola (massa trascurabile):** $F - 2T = m_{carrucola} a_{carrucola} = 0 \cdot a_{carrucola} = 0$ Da cui si ottiene la relazione tra la forza applicata e la tensione: $F = 2T$
    

## Condizione per $m_2$ a Contatto con il Suolo

La condizione affinché la massa $m_2$ rimanga a contatto con il suolo è che la reazione normale $R_n$ sia maggiore o uguale a zero: $R_n \ge 0$ Il valore limite per il distacco si ha quando $R_n = 0$.

Dall'equazione per $m_2$ con $a_2 = 0$, abbiamo: $R_n = m_2 g - T$

Imponendo $R_n \ge 0$: $m_2 g - T \ge 0$ $T \le m_2 g$

## Calcolo della Forza Massima $F_M$

Utilizzando la relazione trovata per la carrucola ($F = 2T$), la condizione sulla tensione si traduce in una condizione sulla forza: $F \le 2 m_2 g$

La massima intensità della forza $F_M$ per cui $m_2$ rimane a contatto con il suolo è quindi: $F_M = 2 m_2 g$

Sostituendo il valore di $m_2 = 15$ kg e $g \approx 9.8 , \text{m/s}^2$: $F_M = 2 \cdot 15 , \text{kg} \cdot 9.8 , \text{m/s}^2 = 294 , \text{N}$ Il professore indica che il risultato è 294 N.

## Calcolo dell'Accelerazione di $m_1$ in Corrispondenza di $F_M$

Quando $F = F_M$, abbiamo $T = \frac{F_M}{2} = \frac{2 m_2 g}{2} = m_2 g$.

Sostituiamo questo valore di $T$ nell'equazione della dinamica per $m_1$: $T - m_1 g = m_1 a_1$ $m_2 g - m_1 g = m_1 a_1$ $(m_2 - m_1) g = m_1 a_1$

Risolvendo per l'accelerazione $a_1$: $a_1 = \frac{m_2 - m_1}{m_1} g$

Sostituendo i valori di $m_1 = 5$ kg e $m_2 = 15$ kg: $a_1 = \frac{15 , \text{kg} - 5 , \text{kg}}{5 , \text{kg}} g = \frac{10 , \text{kg}}{5 , \text{kg}} g = 2g$

Utilizzando $g \approx 9.8 , \text{m/s}^2$: $a_1 = 2 \cdot 9.8 , \text{m/s}^2 = 19.6 , \text{m/s}^2$

L'accelerazione di $m_1$ è diretta verso l'alto perché il risultato è positivo nel nostro sistema di riferimento.

## Osservazioni del Professore

Il professore sottolinea l'importanza di isolare i corpi, fare il diagramma delle forze e scegliere un sistema di riferimento opportuno. Nel contesto di questo problema, tutto si svolge lungo la direzione verticale.

Riguardo alla condizione di contatto con il suolo, il professore spiega che tradurre la frase "rimane a contatto con il suolo" nell'equazione o disequazione $R_n \ge 0$ è fondamentale. Il caso limite ($R_n = 0$) corrisponde al valore massimo della forza.

Infine, il professore fa notare che l'accelerazione di $m_1$ è costante, il che implica un moto accelerato fino a quando la corda non finisce o $m_1$ raggiunge la carrucola.

___

## Spiegazione dell'Esercizio 4.24

### Introduzione al Problema
![[Pasted image 20250312103429.png|400]]
Il professore introduce l'esercizio 4.24, che coinvolge **due masse ($m_1$ e $m_2$) collegate da una fune inestensibile**. La fune ha un'estremità fissata al soffitto e passa attraverso **due carrucole di massa trascurabile**: una fissa ($C_1$) e una mobile ($C_2$). La massa $m_1$ si trova su un piano orizzontale liscio (senza attrito), mentre la massa $m_2$ pende verticalmente. L'obiettivo è **calcolare le accelerazioni delle due masse** e, come aggiunge il professore, **le tensioni della fune ($T_1$ e $T_2$)**.

### Analisi Cinematica della Fune

Il professore sottolinea l'importanza di capire la relazione tra le accelerazioni delle due masse a causa del **vincolo imposto dalla fune inestensibile e dalla carrucola mobile**. Per fare ciò, esegue un'**analisi cinematica della fune**.

Considerando un sistema di riferimento con $x_1$ come la coordinata orizzontale di $m_1$ e $x_2$ come la coordinata verticale di $m_2$ (con verso positivo verso il basso), la lunghezza totale ($L$) della fune, che è costante, può essere espressa come la somma di diversi segmenti:


![[Pasted image 20250312103511.png|200]]
$L = x_1 + \frac{2 \pi r_1}{4} + x_{C2} + \frac{2 \pi R_2}{2} + x_{C2} + L'$ 

Dove:

- $x_1$ è la coordinata di $m_1$.
- $\frac{2 \pi r_1}{4}$ è un quarto della circonferenza della carrucola fissa $C_1$ (un termine costante).
- $x_{C2}$ è la coordinata verticale della carrucola mobile $C_2$.
- $\frac{2 \pi R_2}{2}$ è metà della circonferenza della carrucola mobile $C_2$ (un termine costante).
- $L'$ rappresenta la lunghezza costante del tratto di fune tra la carrucola fissa e il punto di attacco al soffitto.

Poiché la lunghezza $L$ è costante, la sua derivata rispetto al tempo è zero. Derivando due volte l'espressione per $L$ rispetto al tempo, e considerando che l'accelerazione della carrucola mobile $C_2$ è la stessa dell'accelerazione della massa $m_2$ ($a_2 = \ddot{x}_{C2}$), si ottiene la relazione tra le accelerazioni:

$0 = \ddot{x}_1 + 2 \ddot{x}_{C2}$

Da cui:

$\ddot{x}_1 = -2 \ddot{x}_2$

Quindi, l'accelerazione del corpo 1 ($a_1$) è **il doppio e in verso opposto** all'accelerazione del corpo 2 ($a_2$). Se si considera il verso positivo di $x_1$ verso destra e il verso positivo di $x_2$ verso il basso, allora:

$a_1 = -2 a_2$

Il segno negativo indica che se $m_2$ accelera verso il basso ($a_2 > 0$), allora $m_1$ accelera verso sinistra ($a_1 < 0$), e viceversa. Il professore spiega che uno spostamento $\Delta x$ di $m_1$ comporta uno spostamento di $\frac{\Delta x}{2}$ della carrucola mobile e quindi di $m_2$.

### Diagramma delle Forze
![[Pasted image 20250312103629.png|250]]
Il professore procede a disegnare e analizzare le forze agenti su ciascun corpo:

- **Massa $m_1$:**
    
    - **Forza peso:** $m_1 g$ (verticale verso il basso).
    - **Reazione normale del piano:** $R_n$ (verticale verso l'alto). Questa forza bilancia il peso di $m_1$ in direzione verticale e non influenza il moto orizzontale.
    - **Tensione della fune:** $T_1$ (orizzontale verso sinistra, poiché la fune tira $m_1$).
- **Massa $m_2$:**
    
    - **Forza peso:** $m_2 g$ (verticale verso il basso).
    - **Tensione della fune:** $T_2$ (verticale verso l'alto, poiché la fune tira $m_2$).
- **Carrucola Mobile $C_2$ (massa trascurabile):**
    
    - **Tensione della fune:** Due segmenti di fune esercitano una tensione $T_1$ ciascuno verso l'alto.
    - **Tensione della fune:** Un segmento di fune esercita una tensione $T_2$ verso il basso.

### Applicazione della Seconda Legge di Newton

Il professore applica la seconda legge di Newton ($\vec{F}_{ris} = m \vec{a}$) a ciascun corpo lungo le direzioni del moto:

- **Massa $m_1$ (moto orizzontale):** $-T_1 = m_1 a_1$
    
- **Massa $m_2$ (moto verticale):** $m_2 g - T_2 = m_2 a_2$
    
- **Carrucola Mobile $C_2$ (massa trascurabile):** Poiché la massa della carrucola è trascurabile, la risultante delle forze su di essa deve essere zero: $2 T_1 - T_2 = 0 \implies T_2 = 2 T_1$
    

### Risoluzione del Sistema di Equazioni

Si ha un sistema di quattro equazioni con quattro incognite ($T_1$, $T_2$, $a_1$, $a_2$):

1. $-T_1 = m_1 a_1$
2. $m_2 g - T_2 = m_2 a_2$
3. $T_2 = 2 T_1$
4. $a_1 = -2 a_2$

Il professore mostra i passaggi per risolvere questo sistema:

Sostituendo l'equazione 4 nella 1: $-T_1 = m_1 (-2 a_2) \implies T_1 = 2 m_1 a_2$

Sostituendo l'equazione 3: $T_2 = 2 (2 m_1 a_2) = 4 m_1 a_2$

Sostituendo l'espressione per $T_2$ nell'equazione 2: $m_2 g - 4 m_1 a_2 = m_2 a_2$

Risolvendo per $a_2$: $m_2 g = m_2 a_2 + 4 m_1 a_2$ $m_2 g = (m_2 + 4 m_1) a_2$ $a_2 = \frac{m_2}{4 m_1 + m_2} g$

### Risultati per l'Accelerazione

L'**accelerazione della massa $m_2$** è:

$a_2 = \frac{m_2}{4 m_1 + m_2} g$

Utilizzando la relazione cinematica $a_1 = -2 a_2$, l'**accelerazione della massa $m_1$** è:

$a_1 = -2 \frac{m_2}{4 m_1 + m_2} g$

### Risultati per la Tensione

Sostituendo l'espressione per $a_2$ nelle equazioni per le tensioni, si ottiene:

**Tensione $T_1$:** $T_1 = 2 m_1 a_2 = 2 m_1 \frac{m_2}{4 m_1 + m_2} g = \frac{2 m_1 m_2}{4 m_1 + m_2} g$

**Tensione $T_2$:** $T_2 = 2 T_1 = 2 \frac{2 m_1 m_2}{4 m_1 + m_2} g = \frac{4 m_1 m_2}{4 m_1 + m_2} g$

Il professore invita a verificare a casa i risultati ottenuti risolvendo il sistema di equazioni.

### Ulteriori Considerazioni ed Esempi

Il professore menziona come il principio della carrucola mobile possa essere esteso per creare un **sistema di carrucole** utilizzato da **Archimede** per sollevare grandi pesi. Ogni carrucola mobile aggiuntiva riduce ulteriormente l'accelerazione e la forza necessaria per sollevare un carico.

Come esempio, propone di analizzare un sistema con più carrucole, suggerendo che in una configurazione specifica si potrebbe raggiungere l'equilibrio ($a=0$) quando $m_2 = 4 m_1$. Questo significa che una massa $m_1$ può equilibrare una massa $m_2$ quattro volte più grande grazie al vantaggio meccanico fornito dal sistema di carrucole . Il professore conclude invitando a provare a risolvere un sistema di carrucole più complesso come esercizio .

Certamente. Ripercorriamo la spiegazione del professore sull'esercizio 3, integrando i passaggi matematici e fornendo una struttura chiara con titoli e sottotitoli.


### Esercizio sul Sistema di Masse Senza Attriti
![[Pasted image 20250312104003.png|500]]
**Descrizione del Problema**

Si considera un sistema composto da una massa $M$ appoggiata su una superficie orizzontale priva di attrito. Sopra questa massa $M$ è appoggiata una massa $m_1$. Una carrucola è fissata alla massa $M$, e una fune ideale, anch'essa priva di massa, collega la massa $m_1$ a una massa $m_2$ che pende verticalmente. Una forza costante $F$ è applicata orizzontalmente alla massa $M$. L'obiettivo è determinare il valore della forza $F$ tale che le masse $m_1$ e $m_2$ rimangano ferme rispetto alla massa $M$.

**Comprensione del Fenomeno Fisico**

Il professore introduce il problema sottolineando l'assenza di attriti nel sistema. Per aiutare a visualizzare la situazione, propone un esperimento mentale: se la forza $F$ fosse zero (ovvero se il corpo $M$ fosse fermo), le masse $m_1$ e $m_2$, a causa della gravità e dell'assenza di attrito, scivolerebbero inevitabilmente. L'idea è che, applicando una forza $F$ opportuna a $M$, si possa indurre un'accelerazione tale che le masse $m_1$ e $m_2$ rimangano in equilibrio relativo rispetto a $M$.

Viene fornito un esempio analogico: immaginare di essere in auto su un sedile di ghiaccio. Se l'auto è ferma, si scivola. Tuttavia, se l'auto sta accelerando, si viene schiacciati contro il sedile e, in qualche modo, si potrebbe rimanere in equilibrio relativo.

**Diagramma delle Forze**
![[Pasted image 20250312112325.png]]
Per risolvere il problema, è fondamentale analizzare le forze agenti su ciascun corpo. Il professore procede a disegnare il diagramma delle forze per le masse $M$, $m_1$ e $m_2$, e per la carrucola (considerando la carrucola e $M$ come un unico sistema per alcune forze).

- **Massa $M$**:
    
    - Forza esterna applicata: $\vec{F}$ (orizzontale)
    - Forza peso: $M\vec{g}$ (verticale verso il basso)
    - Reazione vincolare del suolo: $\vec{R}_N$ (verticale verso l'alto)
    - Reazione parallela dovuta al contatto con $m_1$: $\vec{R}_P$ (orizzontale, verso sinistra, esercitata da $m_1$ su $M$)
    - Tensione della fune: $\vec{T}$ (orizzontale, verso sinistra, applicata alla carrucola, e quindi indirettamente a $M$)![[Pasted image 20250312112355.png]]
- **Massa $m_1$**:
    
    - Forza peso: $m_1\vec{g}$ (verticale verso il basso)
    - Reazione vincolare di $M$ su $m_1$: $\vec{R}_{N1}$ (verticale verso l'alto)
    - Reazione parallela dovuta al contatto con $M$: $\vec{R}$ (orizzontale, verso destra, esercitata da $M$ su $m_1$)
    - Tensione della fune: $\vec{T}$ (orizzontale, verso destra)
- **Massa $m_2$**:
    
    - Forza peso: $m_2\vec{g}$ (verticale verso il basso)
    - Tensione della fune: $\vec{T}$ (verticale verso l'alto)

**Imposizione della Condizione di Equilibrio Relativo**

La condizione affinché le masse $m_1$ e $m_2$ siano ferme rispetto a $M$ è che **tutti i corpi del sistema abbiano la stessa accelerazione**. Indichiamo questa accelerazione comune con $A$ (diretta orizzontalmente verso destra, nella direzione della forza $F$).

**Scrittura delle Equazioni della Dinamica**

Applichiamo la seconda legge di Newton ($\vec{F} = m\vec{a}$) a ciascun corpo, considerando solo le componenti orizzontali rilevanti per il moto e l'equilibrio relativo.

- **Massa $m_1$ (componente orizzontale)**: La forza orizzontale agente su $m_1$ è la tensione della fune $T$ e la reazione parallela $R$ esercitata da $M$. Però, considerando il sistema nel suo complesso, la condizione di equilibrio relativo si traduce in un'unica accelerazione orizzontale $A$. Quindi: $T = m_1 A$ Il professore inizialmente scrive solo $T = m_1 A$, suggerendo implicitamente che la reazione $R$ sia la forza che causa l'accelerazione di $m_1$ insieme alla tensione.
    
- **Massa $m_2$ (componente verticale)**: Poiché $m_2$ deve rimanere ferma rispetto a $M$ (nella direzione orizzontale), la tensione nella fune deve bilanciare il suo peso per quanto riguarda la relazione con $m_1$ tramite la carrucola. Tuttavia, l'accelerazione del sistema influenza la tensione. Considerando che la lunghezza della fune non cambia, l'accelerazione orizzontale di $m_1$ implica una "pseudo-forza" che influenzerà l'equilibrio verticale apparente di $m_2$ rispetto a $M$. Però, il professore impone direttamente l'equilibrio verticale per determinare la tensione: $T = m_2 g$ Questo perché se $m_2$ è ferma rispetto a $M$, la sua accelerazione verticale è zero nel sistema di riferimento di $M$. Nel sistema di riferimento inerziale, la sua accelerazione orizzontale è $A$.
    
    Successivamente, introduce la reazione $R_P$ agente su $M$ dovuta al contatto con $m_1$: $R_P = m_2 A$ Questa forza $R_P$ è la reazione alla forza $R$ che $M$ esercita su $m_1$.
    
- **Massa $M$ (componente orizzontale)**: Le forze orizzontali agenti su $M$ sono la forza applicata $F$, la reazione parallela $-R_P$ esercitata da $m_1$, e la tensione $-T$ esercitata dalla fune (tramite la carrucola): $F - R_P - T = M A$ Il professore sottolinea l'importanza di considerare la tensione applicata anche a $M$ tramite la carrucola.
    

**Risoluzione del Sistema di Equazioni**

Ora abbiamo un sistema di tre equazioni con tre incognite ($F$, $A$, $T$):

1. $T = m_1 A$
2. $T = m_2 g$
3. $F - R_P - T = M A$, dove $R_P = m_2 A$

Dalle prime due equazioni, possiamo uguagliare le espressioni per la tensione $T$: $m_1 A = m_2 g$ Da cui si ricava l'accelerazione comune del sistema: $A = \frac{m_2}{m_1} g$

Ora sostituiamo le espressioni per $A$, $T$, e $R_P$ nella terza equazione: $F - (m_2 A) - (m_2 g) = M A$ $F - m_2 \left(\frac{m_2}{m_1} g\right) - m_2 g = M \left(\frac{m_2}{m_1} g\right)$ $F - \frac{m_2^2}{m_1} g - m_2 g = \frac{M m_2}{m_1} g$

Ora isoliamo la forza $F$: $F = \frac{M m_2}{m_1} g + \frac{m_2^2}{m_1} g + m_2 g$

Possiamo raccogliere il termine $g$: $F = g \left( \frac{M m_2}{m_1} + \frac{m_2^2}{m_1} + m_2 \right)$

Per rendere l'espressione più compatta, possiamo mettere $m_2/m_1$ in evidenza nei primi due termini: $F = g \left( \frac{m_2}{m_1} (M + m_2) + m_2 \right)$

Oppure, mettendo $m_2 g / m_1$ in evidenza da tutti i termini (come fatto dal professore, con una piccola imprecisione iniziale): $F = \frac{m_2}{m_1} g \left( M + m_2 + m_1 \right)$

**Verifica dei Passaggi Algebrici (Chiarimento del Professore)**

Il professore ripercorre i passaggi per chiarire come si arriva al risultato finale: Dall'equazione per $F$: $F = \frac{M m_2}{m_1} g + \frac{m_2^2}{m_1} g + m_2 g$

Si vuole riscrivere in una forma più compatta. Si può notare che ogni termine contiene $g$. Raccogliendo $g$: $F = g \left( \frac{M m_2}{m_1} + \frac{m_2^2}{m_1} + m_2 \right)$

Ora, per far apparire il termine $\frac{m_2}{m_1} g$ come fattore comune, si può moltiplicare e dividere l'ultimo termine ($m_2 g$) per $m_1$: $m_2 g = \frac{m_1 m_2 g}{m_1} = \frac{m_2}{m_1} g \cdot m_1$

Sostituendo questo nell'espressione per $F$: $F = \frac{M m_2}{m_1} g + \frac{m_2^2}{m_1} g + \frac{m_2}{m_1} g \cdot m_1$

Ora si può raccogliere il fattore comune $\frac{m_2}{m_1} g$: $F = \frac{m_2}{m_1} g (M + m_2 + m_1)$

Questo è il risultato finale ottenuto dal professore.

**Osservazioni Finali sull'Esercizio**

Il professore conclude sottolineando che la chiave per risolvere questo problema era imporre che tutte le masse avessero la stessa accelerazione orizzontale. In un contesto di sistemi di riferimento relativi (che sarebbe affrontato in seguito), questa accelerazione si tradurrebbe in condizioni di statica apparente per le masse $m_1$ e $m_2$ rispetto al sistema accelerato $M$. L'esercizio illustra come l'applicazione della seconda legge di Newton e la corretta analisi delle forze, unitamente alla comprensione del vincolo cinematico (stessa accelerazione), portino alla soluzione del problema.


## Forza Elastica e Combinazioni di Molle (Esercizio 437)
![[Pasted image 20250312104109.png|200]]
### Forza Elastica

Una **molla** è un elemento meccanico che, se deformato dalla sua **lunghezza a riposo** $L_0$, esercita una **forza elastica** di richiamo. L'intensità di questa forza è direttamente proporzionale all'**allungamento** $\Delta L$ della molla, secondo la legge di Hooke:

$F = k |\Delta L|$

dove $k$ è la **costante elastica** della molla, che misura la sua rigidità. L'**allungamento** $\Delta L$ è la differenza tra la lunghezza attuale della molla e la sua lunghezza a riposo.

In forma vettoriale, introducendo un sistema di riferimento con asse $x$ e considerando la coordinata $x$ dell'estremo della molla, la forza elastica può essere espressa come:

$\vec{F} = -k(x - L_0) \hat{x}$

Questo significa che se la molla è allungata ($x > L_0$), la forza è di richiamo e diretta nel verso opposto all'allungamento. Se la molla è compressa ($x < L_0$), la forza spinge e ha lo stesso verso dell'accorciamento. In alcuni casi, la lunghezza a riposo $L_0$ può essere considerata trascurabile, semplificando l'espressione.

### Combinazioni di Molle: Serie e Parallelo

Quando più molle sono collegate tra loro, possono formare configurazioni in **serie** o in **parallelo**. Queste configurazioni si ritrovano in diversi ambiti della meccanica e dell'elettromagnetismo.

### Molle in Serie

In una configurazione in **serie**, le molle sono collegate una di seguito all'altra. Consideriamo l'**esercizio 437** come spunto, dove inizialmente si ha un corpo di massa $M$ collegato al soffitto mediante due molle con costanti elastiche $K_1$ e $K_2$ disposte in serie.

Per analizzare le forze in gioco, consideriamo le molle e la massa come corpi separati in una situazione statica:
![[Pasted image 20250312112439.png]]
- Il soffitto esercita una forza $F_0$ sulla molla superiore ($K_1$), che a sua volta esercita una forza uguale e contraria sul soffitto (terzo principio della dinamica).
- La molla superiore ($K_1$) esercita una forza $F_1$ sulla molla inferiore ($K_2$), e per il terzo principio, la molla inferiore esercita una forza uguale e contraria sulla molla superiore.
- La molla inferiore ($K_2$) esercita una forza $F_2$ sulla massa $M$, e per il terzo principio, la massa esercita una forza uguale e contraria sulla molla inferiore.
- Sulla massa $M$ agisce anche la forza peso $mg$ diretta verso il basso.

Se le masse delle molle sono trascurabili, per la seconda legge di Newton, la forza netta su ciascuna molla deve essere zero in condizioni statiche. Questo implica che la forza si trasmette inalterata attraverso le molle in serie:

$F_0 = F_1$ $F_1 = F_2$

All'equilibrio statico, la forza esercitata dalla molla inferiore sulla massa deve bilanciare la forza peso:

$F_2 = mg$

Quindi, per molle in serie, la forza che attraversa ciascuna molla è la stessa e uguale alla forza esterna applicata al sistema (in questo caso, la forza peso).

L'**allungamento totale** del sistema di molle in serie ($\Delta x$) è la somma degli allungamenti delle singole molle ($\Delta x_1$ e $\Delta x_2$):

$\Delta x = \Delta x_1 + \Delta x_2$

L'allungamento di ciascuna molla è legato alla forza che la attraversa e alla sua costante elastica:

$\Delta x_1 = \frac{F_1}{K_1}$ $\Delta x_2 = \frac{F_2}{K_2}$

Poiché $F_1 = F_2 = F_{eq}$ (dove $F_{eq}$ è la forza equivalente esercitata dal sistema combinato), possiamo scrivere l'allungamento totale come:

$\Delta x = \frac{F_{eq}}{K_1} + \frac{F_{eq}}{K_2} = F_{eq} \left( \frac{1}{K_1} + \frac{1}{K_2} \right)$

Se consideriamo il sistema delle due molle in serie come un'unica molla equivalente con costante elastica $K_{eq}$, l'allungamento totale sarebbe:

$\Delta x = \frac{F_{eq}}{K_{eq}}$

Uguagliando le due espressioni per $\Delta x$, otteniamo la relazione per la costante elastica equivalente di molle in serie:

$\frac{F_{eq}}{K_{eq}} = F_{eq} \left( \frac{1}{K_1} + \frac{1}{K_2} \right)$

$\frac{1}{K_{eq}} = \frac{1}{K_1} + \frac{1}{K_2}$

In generale, per $n$ molle in serie, la costante elastica equivalente è data da:

$\frac{1}{K_{eq}} = \sum_{i=1}^{n} \frac{1}{K_i}$

Il professore conclude che l'allungamento totale del sistema di molle in serie è la somma delle elongazioni delle singole molle, e per trovare la molla equivalente si devono sommare gli inversi delle costanti elastiche.

### Molle in Parallelo
![[Pasted image 20250312112455.png]]
In una configurazione in **parallelo**, le molle sono collegate allo stesso punto e agiscono contemporaneamente sulla stessa massa. Per avere un sistema equivalente semplice, è necessario che le molle abbiano la stessa **lunghezza a riposo** $L_0$.

Consideriamo due molle con costanti elastiche $K_1$ e $K_2$ collegate in parallelo a una massa. Quando la massa si sposta di una quantità $\Delta x$, entrambe le molle subiscono lo stesso allungamento. La forza totale esercitata dalle molle sulla massa è la somma delle forze esercitate da ciascuna molla:
![[Pasted image 20250312112510.png]]
$F = F_1 + F_2$

dove:

$F_1 = K_1 \Delta x$ $F_2 = K_2 \Delta x$

Quindi, la forza totale è:

$F = K_1 \Delta x + K_2 \Delta x = (K_1 + K_2) \Delta x$

Se consideriamo il sistema delle due molle in parallelo come un'unica molla equivalente con costante elastica $K_{eq}$, la forza totale sarebbe:

$F = K_{eq} \Delta x$

Uguagliando le due espressioni per $F$, otteniamo la relazione per la costante elastica equivalente di molle in parallelo:

$K_{eq} \Delta x = (K_1 + K_2) \Delta x$

$K_{eq} = K_1 + K_2$

In generale, per $n$ molle in parallelo con la stessa lunghezza a riposo, la costante elastica equivalente è data da:

$K_{eq} = \sum_{i=1}^{n} K_i$




## Esercizio del Tema d'Esame (Esercizio 5)

### Determinazione della Posizione di Equilibrio
![[Pasted image 20250312104211.png|200]]
Il problema considera un sistema composto da due molle collegate a un soffitto e a una massa $M$. La prima molla ha una costante elastica $K_1$ ed è collegata direttamente al soffitto. La seconda molla, con costante elastica $K_2$, è collegata alla massa $M$. Sia $H$ la quota del pavimento. Si vuole determinare la posizione di equilibrio verticale $Z_{eq}$ della massa $M$.

Per trovare la posizione di equilibrio, è necessario imporre che la risultante delle forze agenti sulla massa $M$ sia nulla. Le forze in gioco sono:
![[Pasted image 20250312112602.png]]
- La forza elastica della prima molla, $F_1$, che agisce verso il basso. Dato che la lunghezza a riposo è considerata nulla (come suggerito dal professore), l'allungamento della prima molla è $H - Z_{eq}$, quindi $F_1 = K_1 (H - Z_{eq})$.
- La forza peso della massa $M$, $P = Mg$, che agisce verso il basso.
- La forza elastica della seconda molla, $F_2$, che agisce verso l'alto. L'allungamento della seconda molla è $Z_{eq}$, quindi $F_2 = K_2 Z_{eq}$.

All'equilibrio, la somma delle forze verso il basso deve essere uguale alla somma delle forze verso l'alto:

$F_1 + Mg = F_2$

Sostituendo le espressioni delle forze elastiche, otteniamo:

$K_1 (H - Z_{eq}) + Mg = K_2 Z_{eq}$

Ora, risolviamo questa equazione per trovare $Z_{eq}$:

$K_1 H - K_1 Z_{eq} + Mg = K_2 Z_{eq}$

$K_1 H + Mg = K_2 Z_{eq} + K_1 Z_{eq}$

$K_1 H + Mg = (K_1 + K_2) Z_{eq}$

Pertanto, la posizione di equilibrio $Z_{eq}$ è data da:

$Z_{eq} = \frac{K_1 H + Mg}{K_1 + K_2}$

Sembra esserci stata una discrepanza con la formula fornita successivamente dal professore ($Z_{eq} = \frac{K_1 H - MG}{K_1 + K_2}$). È importante seguire attentamente i passaggi logici per la derivazione. Riconsiderando l'equilibrio delle forze:

Forze verso il basso: $F_1 = K_1 (H - Z_{eq})$, $Mg$ Forze verso l'alto: $F_2 = K_2 Z_{eq}$

Equilibrio: $K_1 (H - Z_{eq}) + Mg = K_2 Z_{eq}$

$K_1 H - K_1 Z_{eq} + Mg = K_2 Z_{eq}$

$K_1 H + Mg = K_1 Z_{eq} + K_2 Z_{eq}$

$K_1 H + Mg = (K_1 + K_2) Z_{eq}$

$Z_{eq} = \frac{K_1 H + Mg}{K_1 + K_2}$

La formula corretta, derivata dai principi dell'equilibrio statico, è $Z_{eq} = \frac{K_1 H + Mg}{K_1 + K_2}$. La formula fornita in seguito dal professore in sembra contenere un errore di segno per il termine $Mg$.

### Analisi dello Spostamento Orizzontale e Mantenimento dell'Equilibrio Verticale
![[Pasted image 20250312112612.png]]
Il professore introduce poi uno spostamento orizzontale della massa $M$ mantenendo la stessa quota verticale. In questo scenario, le molle diventano oblique. Tuttavia, per piccole oscillazioni orizzontali e considerando l'equilibrio verticale, l'allungamento verticale di ciascuna molla rimane approssimativamente lo stesso.

Come spiegato dal professore, una molla obliqua può essere scomposta in una forza verticale ($F_y$) e una forza orizzontale ($F_x$). L'allungamento verticale determina la forza verticale secondo la relazione $F_y = k \Delta y$, dove $\Delta y$ è l'elongazione verticale.

Se la massa viene spostata orizzontalmente mantenendo la stessa quota verticale, l'elongazione verticale di ciascuna molla non cambia (per piccole oscillazioni). Di conseguenza, le forze verticali esercitate dalle molle rimangono le stesse di quando il sistema era in equilibrio verticale. Pertanto, **il sistema rimane in equilibrio nella direzione verticale** anche quando la massa viene spostata orizzontalmente a quella quota.

### Determinazione della Velocità Angolare in Caso di Rotazione
![[Pasted image 20250312112621.png]]
Se il sistema viene fatto ruotare in un piano orizzontale attorno alla posizione di equilibrio verticale, la massa $M$ sarà soggetta a un'accelerazione centripeta diretta verso il centro della rotazione (la proiezione verticale del punto di attacco delle molle).

La forza centripeta ($F_c$) necessaria per mantenere la massa in rotazione con velocità angolare $\omega$ a un raggio $x$ (lo spostamento orizzontale) è data da:

$F_c = M \omega^2 x$

Questa forza centripeta è fornita dalle componenti orizzontali delle forze elastiche delle due molle. Dato che le lunghezze a riposo delle molle sono nulle, le forze elastiche sono direttamente proporzionali all'allungamento. Per un piccolo spostamento orizzontale $x$, anche le componenti orizzontali delle forze elastiche saranno proporzionali a $x$:

- La componente orizzontale della forza della prima molla è $K_1 x$.
- La componente orizzontale della forza della seconda molla è $K_2 x$.

Entrambe queste forze orizzontali agiscono come forze di richiamo verso la posizione di equilibrio orizzontale e quindi contribuiscono alla forza centripeta:

$F_c = K_1 x + K_2 x$

Eguagliando le due espressioni per la forza centripeta:

$M \omega^2 x = K_1 x + K_2 x$

$M \omega^2 x = (K_1 + K_2) x$

Se $x \neq 0$ (c'è una rotazione), possiamo dividere per $x$:

$M \omega^2 = K_1 + K_2$

Risolvendo per la velocità angolare $\omega$:

$\omega^2 = \frac{K_1 + K_2}{M}$

$\omega = \sqrt{\frac{K_1 + K_2}{M}}$

Questa è l'espressione per la **velocità angolare** del sistema in rotazione orizzontale. Il professore ha correttamente derivato questa formula nel passaggio finale.

In sintesi, l'esercizio analizza l'equilibrio statico verticale di un sistema con due molle e una massa, per poi considerare il comportamento del sistema quando la massa viene spostata orizzontalmente e fatta ruotare, evidenziando come le forze elastiche determinano la velocità angolare della rotazione. È fondamentale notare la potenziale imprecisione nella formula per la posizione di equilibrio fornita oralmente dal professore e fare riferimento alla derivazione basata sull'equilibrio delle forze.
#### References



