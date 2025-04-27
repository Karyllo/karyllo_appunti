---
title: "mateNum- Lez13"
---

2025-03-18 11:08

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine ]]. [[matematica numerica]]

## mateNum- Lez13

# Approssimazione di Dati e Funzioni: Interpolazione a Tratti

## Interpolazione Lineare a Tratti

La professoressa ha introdotto l'interpolazione a tratti come una delle possibili soluzioni al fenomeno di Runge. Nello specifico, si è inizialmente concentrata sull'**interpolazione lineare a tratti**.

### Definizione

L'interpolazione lineare a tratti consiste nel congiungere coppie di punti $(x_i, y_i)$ con segmenti di retta. Invece di utilizzare un unico polinomio di alto grado per interpolare tutti i punti, si utilizzano **polinomi di grado uno** (rette) su ciascun intervallo $[x_i, x_{i+1}]$ definito dai nodi di interpolazione.

### Stima dell'Errore

La professoressa ha ricordato che era stata ricavata una stima dell'errore per l'interpolazione lineare a tratti. Questa stima presentava una struttura simile a quella con nodi uniformi, con un blocco A e un blocco B.

- **Blocco A:** Era legato alla distanza tra i nodi, tipicamente rappresentata da $H$ (o $h$ per la massima ampiezza degli intervalli), e continuava a tendere a zero all'aumentare del campionamento.
- **Blocco B:** La novità principale rispetto al caso con nodi uniformi era che il blocco B, invece di avere un andamento asintotico, diventava una **costante**.

Questa caratteristica garantiva che il prodotto dei due blocchi (e quindi l'errore) convergesse a zero all'aumentare del campionamento, indipendentemente dal valore della costante nel blocco B.

### Comando MATLAB `interp1`

La professoressa ha introdotto il comando MATLAB `interp1` come strumento _builtin_ per realizzare l'interpolazione lineare a tratti, in vista del laboratorio.

#### Sintassi Minimale

La sintassi base del comando `interp1` prevede **tre parametri di input**:

```
interp1(X, Y, Z)
```

Dove:

- `X`: è il **vettore che raccoglie i nodi di interpolazione** $x_i$.
- `Y`: è il **vettore che raccoglie i dati da interpolare**, ovvero i valori della funzione nei nodi $f(x_i)$ o i dati misurati.
- `Z`: è un **numero reale o un insieme di numeri reali** (un vettore di dimensione $S$) in corrispondenza dei quali si vuole valutare il polinomio di interpolazione lineare a tratti.

#### Funzionalità

La professoressa ha spiegato che `interp1` può essere visto come un "merging" dei comandi `polyfit` e `polyval` utilizzati per il polinomio di Lagrange.

- Mentre `polyfit` costruiva il polinomio e `polyval` lo valutava, `interp1` **costruisce e valuta direttamente** l'interpolante lineare a tratti, che è concettualmente semplice essendo un'unione continua di segmenti di retta. Per questo motivo, non è necessario ottenere un'espressione esplicita del polinomio.

#### Output

L'output del comando `interp1` è un oggetto (che la professoressa aveva forse chiamato `pif`) che avrà la **stessa dimensionalità di `Z`**. Se `Z` è un punto, l'output sarà il valore di $pif$ in quel punto; se `Z` è un vettore, l'output sarà un vettore dei valori di $pif$ nei punti di `Z`.

## Miglioramento dell'Approssimazione e Scelta Adattativa dei Nodi

La professoressa ha sottolineato come l'interpolazione lineare a tratti, pur essendo un'approssimazione "grezza", funzioni **estremamente bene**. L'aggiunta di punti nelle zone del dominio dove mancano informazioni porta a un miglioramento dell'approssimazione, come ci si aspetta.

### Comando `plot` in MATLAB e Nodi Adattativi

È stato evidenziato che il comando `plot` in MATLAB, quando viene utilizzato per disegnare il grafico di una funzione, in realtà si appoggia a un **polinomio di interpolazione lineare a tratti**. Il campionamento utilizzato è così fitto che la natura "spezzata" della curva non è percepibile a occhio nudo, ma diventa visibile soloZoomando ripetutamente.

MATLAB utilizza una **scelta adattativa dei nodi** per il comando `plot`.

#### Scelta Adattativa

Una scelta adattativa dei nodi significa che i nodi di interpolazione vengono posizionati in modo da **adattarsi alla funzione**.

- Nelle regioni del dominio in cui la funzione è **piatta** (con variazioni contenute), viene utilizzato un **campionamento lasco** (pochi nodi).
- Nelle regioni in cui la funzione presenta **gradienti più significativi** e una maggiore dinamica (come nel caso di uno shock in propagazione), il campionamento viene **intensificato** (più nodi).

Questo approccio è ottimale per gestire le informazioni, concentrando i punti dove la funzione ha un comportamento più complesso da descrivere (variazioni rapide, derivate elevate). La scelta adattativa dei nodi si basa sull'analisi dell'andamento della funzione, considerando le derivate prime e seconde (e in più dimensioni l'Hessiana). Dove queste assumono valori elevati, vengono inseriti più nodi.

### Generalizzazione a Griglie di Calcolo Adattate
![[Pasted image 20250318122204.png|150]]
La professoressa ha menzionato come la scelta adattativa dei nodi sia la base per la costruzione di **griglie di calcolo adattate** in dimensioni superiori (2D e 3D), un argomento di cui si occupa nella sua ricerca.

- In 2D, anziché dividere un intervallo in sottointervalli, si "tassella" il dominio con **quadrati** o **triangoli** (questi ultimi più avanzati, tipici del metodo degli elementi finiti).
- In 3D, le tessere diventano **cubi** o **piramidi**.

L'obiettivo delle griglie adattate è sempre lo stesso: ottenere **calcoli accurati a basso costo**, concentrando la risoluzione (elementi più piccoli) nelle zone di maggiore interesse o dove la soluzione presenta maggiori variazioni.

## Interpolazione Quadratica a Tratti

Successivamente, la professoressa ha considerato l'ipotesi di unire non più tratti di retta, ma **tratti di parabola**.

### Definizione
![[Pasted image 20250318122239.png|400]]
In questo caso, i nodi iniziali vengono raggruppati a **tre a tre**. Su ogni tripletta di nodi $(x_i, x_{i+1}, x_{i+2})$ viene costruito un **polinomio di grado due** (parabola) che interpola la funzione in quei tre punti. Questo processo viene ripetuto per le triple successive di nodi.

### Vantaggi Potenziali

Unire pezzi di parabola anziché pezzi di retta può potenzialmente portare a una **maggiore accuratezza**. Aumentando localmente il numero di informazioni (tre punti per intervallo anziché due), ci si aspetta un'approssimazione migliore.

### Stima dell'Errore Locale

Supponendo, per semplicità, che i nodi siano equispaziati all'interno di ogni intervallo, la stima dell'errore locale per l'interpolazione quadratica a tratti presenta la seguente forma:

$\frac{H_i^{n+1}}{4(n+1)!} \max_{x \in [x_i, x_{i+n}]} |f^{(n+1)}(x)|$

Dove $n$ è il grado del polinomio (in questo caso $n=2$), e $H_i$ è l'ampiezza dell'intervallo considerato. Quindi, per l'interpolazione quadratica a tratti ($n=2$), la stima locale dell'errore diventa:

$\frac{H_i^{3}}{4 \cdot 3!} \max_{x \in [x_i, x_{i+2}]} |f^{(3)}(x)| = \frac{H_i^{3}}{24} \max_{x \in [x_i, x_{i+2}]} |f^{(3)}(x)|$

Passando alla stima globale, si ottiene una dipendenza da $h^3$ e dalla derivata terza della funzione:

$\frac{h^3}{12} \max_{x \in [a, b]} |f^{(3)}(x)|$

Questo indica che l'accuratezza dovrebbe migliorare rispetto all'interpolazione lineare a tratti, dove l'errore dipendeva da $h^2$ e dalla derivata seconda.

### Svantaggi e Limitazioni

Nonostante la maggiore accuratezza potenziale, l'interpolazione quadratica a tratti presenta degli svantaggi:

- **Maggiore Regolarità Richiesta:** La stima dell'errore coinvolge la derivata terza della funzione, il che significa che la funzione deve essere **più regolare** (almeno tre volte differenziabile) rispetto al caso lineare (due volte differenziabile). Non tutte le funzioni posseggono questa regolarità.
- **Possibili Oscillazioni Spurie:** Aumentare localmente il grado del polinomio può portare a **oscillazioni spurie**, simili a quelle osservate nell'interpolazione globale con polinomi di alto grado (fenomeno di Runge). È consigliabile non esagerare troppo con l'aumento locale del grado.
- **Regolarità Globale:** Anche se si utilizzano parabole, l'interpolazione quadratica a tratti continua a essere generalmente solo **$C^0$** (continua), proprio come l'interpolazione lineare a tratti. I punti di raccordo tra le parabole potrebbero avere derivate prime diverse, rendendo la funzione globalmente non differenziabile.

La professoressa ha chiarito che l'interpolazione quadratica a tratti è una **scelta alternativa** all'interpolazione lineare a tratti, con una diversa gestione delle informazioni, e non un suo sostituto diretto.

## Spline Cubiche Interpolatorie

Per ottenere approssimazioni più regolari globalmente, la professoressa ha introdotto il concetto di **spline**.

### Definizione

Una **spline cubica interpolatoria** ($S_3$) è una funzione definita a tratti, ottenuta unendo **tratti di cubiche** (polinomi di grado 3). Esistono anche spline di grado inferiore, come le spline quadratiche, ma le spline cubiche sono molto utilizzate, ad esempio, nella computer grafica e nel CAD.

#### Proprietà Fondamentali

- **Interpolazione:** $S_3(x_i) = y_i$ per tutti i nodi $x_i$.
- **Regolarità Globale Elevata:** A differenza dell'interpolazione lineare o quadratica a tratti, le spline cubiche interpolatorie sono tipicamente di classe **$C^2$**. Questo significa che non solo la funzione è continua, ma lo sono anche la sua **derivata prima** e la sua **derivata seconda**. Questa elevata regolarità le rende adatte ad applicazioni dove è richiesta una "morbidezza" (smoothness) nelle curve e nelle superfici, come nel design automobilistico, computer grafica e CAD.

### Costruzione e Gradi di Libertà

Su ogni sottointervallo $[x_i, x_{i+1}]$, la spline cubica è un polinomio di grado 3, che ha bisogno di quattro coefficienti per essere definito. Con $n$ sottointervalli, si hanno $4n$ incognite in totale. Le condizioni di interpolazione nei nodi ($2n$ condizioni), la continuità della funzione nei nodi interni ($n-1$ condizioni), la continuità della derivata prima nei nodi interni ($n-1$ condizioni) e la continuità della derivata seconda nei nodi interni ($n-1$ condizioni) portano a un totale di $4n - 2$ condizioni. Per definire la spline in modo univoco, mancano **due condizioni aggiuntive**, che possono essere scelte in diversi modi (ad esempio, condizioni sui valori della derivata prima o seconda agli estremi dell'intervallo).

### Comando MATLAB `spline`

MATLAB ha un comando dedicato per la realizzazione delle spline, chiamato **`spline`**. La sintassi è **esattamente la stessa** del comando `interp1`:

```
spline(X, Y, Z)
```

Dove `X`, `Y`, e `Z` hanno lo stesso significato descritto per `interp1`. Per default, `spline` implementa la spline cubica, ma potrebbe essere possibile scegliere anche spline di grado diverso.

### Approssimazione delle Derivate con le Spline Cubiche

Un aspetto interessante delle spline cubiche è che, grazie alla loro elevata regolarità, possono essere utilizzate non solo per approssimare la funzione $f(x)$, ma anche le sue **derivate**.

- La **derivata prima** di $S_3$ ($S'_3$) può essere utilizzata per approssimare la derivata prima di $f$ ($f'(x)$).
- La **derivata seconda** di $S_3$ ($S''_3$) può essere utilizzata per approssimare la derivata seconda di $f$ ($f''(x)$).

L'accuratezza di queste approssimazioni delle derivate è generalmente buona, proprio perché $S_3$ è un'approssimazione accurata di $f$.

### Stima dell'Errore per le Derivate

La professoressa ha fornito una stima dell'errore per l'approssimazione sia della funzione che delle sue derivate tramite la spline cubica e le sue derivate:

$\max_{x} |f^{(q)}(x) - S_3^{(q)}(x)| \leq C_q h^{4-q} \max_{x} |f^{(4)}(x)|$

Dove:

- $q = 0$ indica l'approssimazione della funzione stessa ($f(x) \approx S_3(x)$). In questo caso, l'ordine di convergenza è $h^4$.
- $q = 1$ indica l'approssimazione della derivata prima ($f'(x) \approx S'_3(x)$). In questo caso, l'ordine di convergenza è $h^3$.
- $q = 2$ indica l'approssimazione della derivata seconda ($f''(x) \approx S''_3(x)$). In questo caso, l'ordine di convergenza è $h^2$.
- $C_q$ è una costante che dipende da $q$.
- $h$ è la massima ampiezza degli intervalli tra i nodi.
- $\max_{x} |f^{(4)}(x)|$ rappresenta il massimo valore assoluto della derivata quarta di $f(x)$ sull'intervallo considerato.

Questa stima evidenzia che **l'accuratezza dell'approssimazione diminuisce man mano che si considerano derivate di ordine superiore**. La spline cubica è "nata" per approssimare $f$, e derivandola si "spreme" l'approssimazione, ottenendo risultati meno accurati per le derivate successive, ma comunque con un ordine di convergenza che tende a zero con $h$. La potenza di $h$ (4) è legata al grado locale dell'approssimazione (cubica, $n=3$), e l'ordine si riduce di uno per ogni derivata considerata.

# Stabilità dell'Interpolazione di Lagrange

## Introduzione al Problema della Stabilità

Quando si approssimano dati o funzioni, è fondamentale considerare la **stabilità** dell'approssimazione rispetto a piccole variazioni nei dati. Questo problema è analogo a quanto visto per i sistemi di equazioni lineari, dove il **numero di condizionamento** indicava come gli errori sui dati si propagavano ai risultati. Anche nell'interpolazione, specialmente quando si tratta di dati misurati e quindi soggetti a errori, è importante capire come le perturbazioni nei dati influenzino l'approssimazione.

## Dati Originali e Perturbati

Consideriamo un insieme di dati originali $(x_i, f(x_i))$ per $i$ che va da $0$ a $n$, con tutti gli $x_i$ distinti. A questi dati è associato il **polinomio di interpolazione di Lagrange** $P_n f(x)$.

Supponiamo ora di avere dei **dati perturbati** $(x_i, \tilde{f}(x_i))$ per gli stessi nodi $x_i$, dove $\tilde{f}(x_i)$ rappresenta una perturbazione di $f(x_i)$. Questa perturbazione può essere dovuta all'aritmetica floating point o a errori di misurazione. A questi dati perturbati associamo un altro polinomio di interpolazione, $\tilde{P}_n f(x)$, che rappresenta una perturbazione del polinomio originale.

## Relazione tra la Perturbazione sui Dati e sul Risultato

L'obiettivo è comprendere come la **perturbazione sui dati**, $|f(x_i) - \tilde{f}(x_i)|$, sia legata alla **perturbazione sul risultato**, $|P_n f(x) - \tilde{P}_n f(x)|$.

Si cerca una relazione tra la massima perturbazione sulla soluzione e la massima perturbazione sul dato: $\max_{x \in I} |P_n f(x) - \tilde{P}_n f(x)| \leq C \cdot \max_{0 \leq i \leq n} |f(x_i) - \tilde{f}(x_i)|$ dove $C$ è una costante che quantifica l'amplificazione della perturbazione.

## La Costante di Lebesgue ($\Lambda_n$)

Il ruolo della costante $C$ è svolto dalla **costante di Lebesgue**, denotata con $\Lambda_n$. Questa costante è definita come: $\Lambda_n = \max_{x \in I} \sum_{i=0}^{n} |l_i(x)|$ dove $l_i(x)$ sono i **polinomi caratteristici di Lagrange** (o polinomi elementari di Lagrange). Ricordiamo che $l_i(x)$ è un polinomio di grado $n$ che vale $1$ nel nodo $x_i$ e $0$ in tutti gli altri nodi $x_j$ per $j \neq i$. Il polinomio di interpolazione di Lagrange può essere espresso come: $P_n f(x) = \sum_{i=0}^{n} f(x_i) l_i(x)$

## Dimostrazione della Relazione

Partiamo dalle espressioni dei polinomi di interpolazione per i dati originali e perturbati: $P_n f(x) = \sum_{i=0}^{n} f(x_i) l_i(x)$ $\tilde{P}_n f(x) = \sum_{i=0}^{n} \tilde{f}(x_i) l_i(x)$

Consideriamo la differenza tra i due polinomi: $P_n f(x) - \tilde{P}_n f(x) = \sum_{i=0}^{n} f(x_i) l_i(x) - \sum_{i=0}^{n} \tilde{f}(x_i) l_i(x) = \sum_{i=0}^{n} (f(x_i) - \tilde{f}(x_i)) l_i(x)$

Passando al valore assoluto: $|P_n f(x) - \tilde{P}_n f(x)| = \left| \sum_{i=0}^{n} (f(x_i) - \tilde{f}(x_i)) l_i(x) \right|$

Utilizzando la disuguaglianza triangolare: $|P_n f(x) - \tilde{P}_n f(x)| \leq \sum_{i=0}^{n} |f(x_i) - \tilde{f}(x_i)| |l_i(x)|$

Per portare fuori dalla sommatoria la massima perturbazione sui dati, prendiamo il massimo di $|f(x_i) - \tilde{f}(x_i)|$ per $i$ che va da $0$ a $n$: $|P_n f(x) - \tilde{P}_n f(x)| \leq \left( \max_{0 \leq i \leq n} |f(x_i) - \tilde{f}(x_i)| \right) \sum_{i=0}^{n} |l_i(x)|$

Infine, per considerare la massima perturbazione sulla soluzione, prendiamo il massimo su $x$ nell'intervallo di interesse $I$: $\max_{x \in I} |P_n f(x) - \tilde{P}_n f(x)| \leq \left( \max_{0 \leq i \leq n} |f(x_i) - \tilde{f}(x_i)| \right) \max_{x \in I} \sum_{i=0}^{n} |l_i(x)|$ $\max_{x \in I} |P_n f(x) - \tilde{P}_n f(x)| \leq \Lambda_n \cdot \max_{0 \leq i \leq n} |f(x_i) - \tilde{f}(x_i)|$

Questa relazione mostra come la costante di Lebesgue $\Lambda_n$ **amplifichi o controlli** la perturbazione sui dati nella soluzione interpolante. Una costante di Lebesgue elevata indica una maggiore sensibilità dell'interpolazione a piccole variazioni nei dati, quindi una minore stabilità.

## Comportamento della Costante di Lebesgue al Crescere di $n$

Per un numero crescente di nodi ($n \rightarrow \infty$), la costante di Lebesgue generalmente tende all'infinito: $\lim_{n \to \infty} \Lambda_n = \infty$ Questo significa che, aumentando il grado del polinomio interpolante globale, la stabilità rispetto alle perturbazioni sui dati peggiora.

Tuttavia, la velocità con cui $\Lambda_n$ diverge dipende dalla scelta dei nodi di interpolazione.

### Nodi Equispaziati

Se si utilizzano **nodi equispaziati**, la costante di Lebesgue ha un andamento asintotico di tipo **esponenziale** con $n$: $\Lambda_n \sim 2^n$ Questo comportamento è legato al **fenomeno di Runge**, dove per nodi equispaziati un polinomio di grado elevato può presentare forti oscillazioni tra i punti di interpolazione, soprattutto vicino agli estremi dell'intervallo. Questa scelta di nodi, sebbene semplice, porta a problemi sia di convergenza (richiedendo funzioni con elevata regolarità) che di stabilità.

### Nodi di Chebyshev-Gauss(-Lobatto)

Se si utilizzano **nodi di Chebyshev-Gauss** o **Chebyshev-Gauss-Lobatto**, la costante di Lebesgue ha un andamento **logaritmico** con $n$: $\Lambda_n \sim \ln(n)$ Un andamento logaritmico è significativamente migliore di uno esponenziale in termini di stabilità. L'utilizzo di questi nodi mitiga il fenomeno di Runge e garantisce una migliore stabilità dell'interpolazione, richiedendo anche condizioni di regolarità meno stringenti sulla funzione da interpolare (ad esempio, $C^1$ invece di $C^{n+1}$).

## Conclusioni sulla Scelta dei Nodi

La scelta dei nodi di interpolazione ha un impatto cruciale sia sulla convergenza che sulla stabilità dell'interpolazione polinomiale. I **nodi equispaziati**, pur essendo intuitivi, possono portare al fenomeno di Runge e a una scarsa stabilità per gradi elevati. I **nodi di Chebyshev** rappresentano una scelta più intelligente, in quanto migliorano sia la convergenza che la stabilità dell'interpolazione globale.

Il professore ha menzionato anche i **nodi adattativi**, che sono considerati la scelta migliore perché permettono di concentrare i nodi nelle regioni dove la funzione presenta maggiore variabilità, ottimizzando i risultati in termini di accuratezza e potenzialmente anche di stabilità, sebbene questo non sia stato dettagliato nei passaggi precedenti.

Infine, il professore ha concluso la discussione sull'interpolazione, preparando il terreno per l'argomento successivo: i **minimi quadrati**.

# Approssimazione ai Minimi Quadrati

## Distinzione tra Approssimazione e Interpolazione

L'**approssimazione** si distingue dall'**interpolazione**. Quest'ultima si occupa di trovare una funzione che passi esattamente per tutti i punti dati. Invece, l'approssimazione, in particolare quella ai minimi quadrati, è più adatta quando si hanno dati caoticamente disposti, la cosiddetta "nuvola di dati". In questo scenario, cercare una funzione interpolante che passi per ogni singolo punto risulterebbe in un percorso tortuoso e poco significativo. È più sensato, in questi casi, considerare l'andamento generale dei dati, ad esempio, se tendono a seguire una parabola.

## Motivazioni per l'Approssimazione ai Minimi Quadrati

### Dati Caoticamente Disposti
![[Pasted image 20250318122336.png|200]]
Come accennato, se i dati sono distribuiti in modo irregolare, una funzione che tentasse di interpolarli sarebbe eccessivamente complessa e poco informativa sull'andamento sottostante. L'approssimazione permette di trovare una funzione più semplice che catturi la tendenza generale dei dati.

### Estrapolazione

Un'altra importante motivazione per l'uso dell'approssimazione ai minimi quadrati è l'**estrapolazione**. Il termine "extra" di estrapolazione deriva dal latino e significa "fuori", in contrapposizione a "inter" che significa "dentro". Estrapolare significa ricostruire l'andamento di una funzione al di fuori dell'intervallo su cui si hanno dati. Questo può essere utile per cercare di prevedere valori futuri o valori non misurati.

![[Pasted image 20250318122324.png|300]]
Consideriamo l'esempio dell'andamento di un titolo borsistico. I grafici che mostrano l'evoluzione del prezzo di un'azione o di un bond nel tempo sono spesso interpolazioni lineari a tratti dei prezzi misurati a intervalli (ad esempio, a fine giornata). Se volessimo prevedere il valore del titolo il giorno successivo, basarci unicamente sull'interpolazione lineare a tratti tra l'ultimo giorno e il giorno precedente potrebbe essere fuorviante. Infatti, un titolo che globalmente tende a scendere potrebbe aver avuto un rialzo improvviso nell'ultimo periodo a causa di eventi specifici. In questo contesto, un'approssimazione ai minimi quadrati, che tiene conto di tutta la "storia" dei dati, sarebbe uno strumento più utile per l'estrapolazione, in quanto riflette l'andamento medio del grafico. L'approssimazione ai minimi quadrati considera l'intera sequenza di dati, non solo l'ultima variazione, fornendo una stima più robusta della tendenza generale.

## Formalizzazione Matematica dell'Approssimazione ai Minimi Quadrati

Nell'approssimazione ai minimi quadrati, si cerca un surrogato $\tilde f(x)$ per una funzione o per un insieme di dati $(x_i, y_i)$, dove $i = 0, 1, ..., n$. Per semplicità, questo surrogato viene spesso scelto come un **polinomio** di grado $m$, indicato come $\tilde f(x)$.

Una differenza fondamentale rispetto all'interpolazione è che il grado $m$ del polinomio approssimante è **indipendente** dal numero di dati $n+1$. Mentre nell'interpolazione di Lagrange, un set di $n+1$ dati determina un polinomio di grado al più $n$, nell'approssimazione ai minimi quadrati si può scegliere un grado $m$ qualsiasi, che tipicamente è molto minore di $n$ ($m \ll n$).

Il polinomio $\tilde f(x)$ di grado $m$ che realizza l'approssimazione ai minimi quadrati è definito come quel polinomio che minimizza la **somma dei quadrati degli scarti** tra i valori dei dati $y_i$ e i valori del polinomio approssimante $\tilde f(x_i)$ nei punti $x_i$. Matematicamente, $\tilde f(x)$ è tale che:

$\qquad \sum_{i=0}^{n} (y_i - f \tilde(x_i))^2 \le \sum_{i=0}^{n} (y_i - p_m(x_i))^2$

per ogni polinomio $p_m(x)$ di grado $m$.

In altre parole, tra tutti i possibili polinomi di grado $m$, $\tilde f(x)$ è quello che rende minima la somma dei quadrati delle differenze verticali tra i punti dati e la curva del polinomio. Questo approccio è ampiamente utilizzato in statistica.

È importante notare che la scelta di un polinomio come funzione approssimante è fatta per semplicità e praticità; si potrebbero utilizzare anche combinazioni lineari di altre funzioni, come funzioni sinusoidali o esponenziali. Inoltre, nell'approssimazione, in generale, non si ha più l'esatta corrispondenza tra $y_i$ e $\tilde f (x_i)$.

## Caso Particolare: $m = n$ (Relazione con l'Interpolazione)

Consideriamo ora cosa succede quando il grado $m$ del polinomio ai minimi quadrati viene scelto uguale a $n$, il numero di dati meno uno. In questo caso, la somma degli scarti quadratici, $\sum_{i=0}^{n} (y_i - \tilde f(x_i))^2$, è una somma di termini non negativi (essendo quadrati). Il suo valore minimo possibile è zero.

Questa somma è zero se e solo se ogni singolo termine è zero, cioè se $y_i - \tilde f(x_i) = 0$ per tutti gli $i = 0, 1, ..., n$. Ciò significa che $\tilde f(x_i) = y_i$ per tutti i punti dati, che è esattamente la definizione di **interpolazione**.

Quindi, l'**interpolazione è un caso particolare dell'approssimazione ai minimi quadrati** quando il grado del polinomio approssimante è uguale al grado del polinomio interpolante (per $n+1$ dati, grado $n$).

Questo giustifica la sintassi della funzione `polyfit` (presumibilmente in un software come MATLAB o Python), che accetta come argomenti le coordinate $x$, le coordinate $y$, e il grado $n$ del polinomio. Specificando il grado $n$ (o la lunghezza di $x$ o $y$ meno 1), si esegue di fatto un'interpolazione polinomiale. Il nome "fit" (adattamento) suggerisce l'idea generale di approssimazione, ma includendo il grado massimo possibile, si ricade nel caso dell'interpolazione.

## Il Caso $m = 1$: La Retta di Regressione

Un caso particolarmente importante di approssimazione ai minimi quadrati è quando il grado del polinomio è $m = 1$. In questo caso, si cerca una **retta** che meglio approssimi i dati, ed è nota come **retta di regressione**. Questo è un concetto fondamentale in statistica.

## Formulazione del Problema di Minimizazione

Il problema di trovare l'approssimazione ai minimi quadrati si traduce in un problema di **minimizzazione**. Si desidera trovare i coefficienti $a_0, a_1, ..., a_m$ del polinomio $\tilde f(x) = a_0 + a_1 x + ... + a_m x^m$ che minimizzano la funzione $f(b_0, b_1, ..., b_m)$ definita come la somma dei quadrati degli scarti:

$\qquad f(b_0, b_1, ..., b_m) = \sum_{i=0}^{n} (y_i - p_m(x_i))^2 = \sum_{i=0}^{n} (y_i - (b_0 + b_1 x_i + ... + b_m x_i^m))^2$

dove $b_0, b_1, ..., b_m$ sono i coefficienti di un generico polinomio $p_m(x)$ di grado $m$. L'obiettivo è trovare i valori dei coefficienti $a_0, a_1, ..., a_m$ che rendono minima questa funzione.

Per trovare il minimo di una funzione di più variabili, si calcolano le **derivate parziali** rispetto a ciascuna variabile (in questo caso, i coefficienti $b_0, b_1, ..., b_m$) e si impone che queste derivate siano uguali a zero. Le soluzioni di questo sistema di equazioni daranno i valori $a_0, a_1, ..., a_m$ che definiscono il polinomio ai minimi quadrati $\tilde f(x)$.

## Calcolo della Retta di Regressione ($m = 1$)

Consideriamo il caso della retta di regressione, dove $m = 1$. Il polinomio approssimante è $\tilde f(x) = a_0 + a_1 x$, e il generico polinomio di grado 1 è $p_1(x) = b_0 + b_1 x$. La funzione da minimizzare è:

$\qquad f(b_0, b_1) = \sum_{i=0}^{n} (y_i - b_0 - b_1 x_i)^2$

Espandendo il quadrato, otteniamo:

$\qquad f(b_0, b_1) = \sum_{i=0}^{n} (y_i^2 + b_0^2 + b_1^2 x_i^2 - 2 y_i b_0 - 2 y_i b_1 x_i + 2 b_0 b_1 x_i)$

Ora calcoliamo le derivate parziali di $f$ rispetto a $b_0$ e $b_1$:

$\qquad \frac{\partial f}{\partial b_0} = \sum_{i=0}^{n} (2 b_0 - 2 y_i + 2 b_1 x_i)$

$\qquad \frac{\partial f}{\partial b_1} = \sum_{i=0}^{n} (2 b_1 x_i^2 - 2 y_i x_i + 2 b_0 x_i)$

Imponendo che queste derivate parziali valutate in $a_0$ e $a_1$ siano uguali a zero:

$\qquad \sum_{i=0}^{n} (2 a_0 - 2 y_i + 2 a_1 x_i) = 0$

$\qquad \sum_{i=0}^{n} (2 a_1 x_i^2 - 2 y_i x_i + 2 a_0 x_i) = 0$

Dividendo per 2 e riorganizzando le somme, otteniamo un sistema di due equazioni lineari nelle due incognite $a_0$ e $a_1$:

$\qquad \sum_{i=0}^{n} a_0 - \sum_{i=0}^{n} y_i + \sum_{i=0}^{n} a_1 x_i = 0 \implies a_0 \sum_{i=0}^{n} 1 + a_1 \sum_{i=0}^{n} x_i = \sum_{i=0}^{n} y_i$

$\qquad \sum_{i=0}^{n} a_1 x_i^2 - \sum_{i=0}^{n} y_i x_i + \sum_{i=0}^{n} a_0 x_i = 0 \implies a_0 \sum_{i=0}^{n} x_i + a_1 \sum_{i=0}^{n} x_i^2 = \sum_{i=0}^{n} y_i x_i$

Questo sistema può essere scritto in forma matriciale come $B \mathbf{a} = \mathbf{f}$, dove $\mathbf{a} = \begin{pmatrix} a_0 \ a_1 \end{pmatrix}$ è il vettore delle incognite, e:

$\qquad B = \begin{pmatrix} \sum_{i=0}^{n} 1 & \sum_{i=0}^{n} x_i \\ \sum_{i=0}^{n} x_i & \sum_{i=0}^{n} x_i^2 \end{pmatrix} = \begin{pmatrix} n+1 & \sum_{i=0}^{n} x_i \\ \sum_{i=0}^{n} x_i & \sum_{i=0}^{n} x_i^2 \end{pmatrix}$

$\qquad \mathbf{f} = \begin{pmatrix} \sum_{i=0}^{n} y_i \ \sum_{i=0}^{n} y_i x_i \end{pmatrix}$

La matrice $B$ è simmetrica. Risolvendo questo sistema lineare, si ottengono i coefficienti $a_0$ (l'intercetta) e $a_1$ (la pendenza) della retta di regressione.

## Generalizzazione al Caso di Grado $m$
![[Pasted image 20250318122523.png|300]]
Per un polinomio approssimante di grado $m$, $\tilde f(x) = a_0 + a_1 x + ... + a_m x^m$, il vettore delle incognite è $\mathbf{a} = \begin{pmatrix} a_0 \ a_1 \ \vdots \ a_m \end{pmatrix}$. Il sistema di equazioni normali che si ottiene imponendo le derivate parziali a zero è dato da $B \mathbf{a} = \mathbf{f}$, dove la matrice $B$ di dimensione $(m+1) \times (m+1)$ ha elementi:

$\qquad B_{jk} = \sum_{i=0}^{n} x_i^{j+k}$

per $j, k = 0, 1, ..., m$. Il vettore del termine noto $\mathbf{f}$ di dimensione $(m+1) \times 1$ ha elementi:

$\qquad f_j = \sum_{i=0}^{n} y_i x_i^j$

per $j = 0, 1, ..., m$.

Ad esempio, per una parabola di regressione ($m=2$), il sistema sarebbe:

$$\qquad \begin{pmatrix} \sum_{i=0}^{n} x_i^0 & \sum_{i=0}^{n} x_i^1 & \sum_{i=0}^{n} x_i^2 \\ \sum_{i=0}^{n} x_i^1 & \sum_{i=0}^{n} x_i^2 & \sum_{i=0}^{n} x_i^3 \\ \sum_{i=0}^{n} x_i^2 & \sum_{i=0}^{n} x_i^3 & \sum_{i=0}^{n} x_i^4 \end{pmatrix} \begin{pmatrix} a_0 \\ a_1 \\ a_2 \end{pmatrix} = \begin{pmatrix} \sum_{i=0}^{n} y_i \\ \sum_{i=0}^{n} y_i x_i \\ \sum_{i=0}^{n} y_i x_i^2 \end{pmatrix}$$

Questo sistema di equazioni lineari è noto come il **sistema delle equazioni normali**. La matrice $B$ è **simmetrica e definita positiva**. La risoluzione di questo sistema permette di trovare i coefficienti del polinomio ai minimi quadrati di grado $m$ che meglio approssima i dati.

## Conclusione

L'approssimazione ai minimi quadrati è uno strumento fondamentale per analizzare dati, specialmente quando questi sono rumorosi o si desidera estrapolare tendenze. Essa generalizza il concetto di interpolazione e porta alla risoluzione di un sistema di equazioni lineari noto come sistema delle equazioni normali. Questo argomento conclude la parte relativa all'approssimazione di dati e funzioni per il primo parziale.

#### References
[[Appunti Mate Num-lez13.pdf]]


