2025-03-11 12:46

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine]] [[matematica numerica]]

## mateNum- Lez10
# Spiegazione del Metodo del Gradiente e Introduzione al Gradiente Coniugato

## Ricapitolo della Lezione Precedente: Metodo del Gradiente

Il professore inizia la lezione riprendendo i concetti fondamentali del metodo del gradiente, distinguendo tra la versione non precondizionata e quella precondizionata. L'obiettivo odierno è concludere la discussione sui metodi iterativi, in particolare introducendo il metodo del gradiente coniugato. Viene sottolineata l'importanza dei due "mattoni" del corso: i sistemi (già in discussione) e le questioni di differenza nominale (come ultimo argomento). Il prossimo argomento sarà più "soft". 
### Metodo del Gradiente Non Precondizionato

Il professore riassume l'algoritmo del metodo del gradiente non precondizionato:

**Input:** Guess iniziale $x_0$.

**Inizializzazione:** Calcolo del residuo iniziale $R_0 = b - A x_0$.

**Iterazione (ciclo):** Per $k = 0, 1, 2, \dots$:

1. **Calcolo del parametro di discesa $\alpha_k$:** $\qquad \alpha_k = \frac{R_k^T R_k}{R_k^T A R_k} = \frac{||R_k||_2^2}{R_k^T A R_k}$ Viene spiegato che $\alpha_k$ viene aggiornato ad ogni iterazione poiché il gradiente è un esempio di .
2. **Aggiornamento dell'iterata:** $\qquad x_{k+1} = x_k + \alpha_k R_k$ La nuova iterata è ottenuta correggendo quella precedente nella direzione del residuo.
3. **Aggiornamento del residuo:** $\qquad R_{k+1} = R_k - \alpha_k A R_k$ Si nota che anche il residuo viene aggiornato ad ogni iterazione.

Viene sottolineato che la richiesta fondamentale per l'applicazione di questo metodo è che la matrice $A$ sia **simmetrica e definita positiva**. Si accenna alla possibilità che questo algoritmo venga implementato in laboratorio.

### Metodo del Gradiente Precondizionato

Il professore introduce poi la versione precondizionata del metodo del gradiente:

**Input:** Guess iniziale $x_0$, precondizionatore $P$ (opportunamente scelto).

**Inizializzazione:** Calcolo del residuo iniziale $R_0 = b - A x_0$.

**Iterazione (ciclo):** Per $k = 0, 1, 2, \dots$:

1. **Calcolo del residuo precondizionato $Z_k$:** $\qquad P Z_k = R_k$ Questo passaggio implica la risoluzione di un sistema lineare con il precondizionatore $P$.
2. **Calcolo del parametro di discesa $\alpha_k$:** $\qquad \alpha_k = \frac{Z_k^T R_k}{Z_k^T A Z_k}$ In questo caso, il peso $\alpha_k$ dipende anche dal residuo precondizionato $Z_k$.
3. **Aggiornamento dell'iterata:** $\qquad x_{k+1} = x_k + \alpha_k Z_k$ La correzione all'iterata precedente avviene nella direzione del residuo precondizionato $Z_k$.
4. **Aggiornamento del residuo:** $\qquad R_{k+1} = R_k - \alpha_k A Z_k$

La vera novità del metodo precondizionato è il calcolo del residuo precondizionato $Z_k$, che introduce uno step aggiuntivo rispetto alla versione non precondizionata.

## Osservazioni sul Metodo del Gradiente Non Precondizionato

Il professore si concentra ora sulla versione non precondizionata del gradiente, evidenziando due osservazioni fondamentali che motiveranno l'introduzione del metodo del gradiente coniugato.

### Ortogonalità dei Residui Consecutivi

**Affermazione:** Due residui relativi consecutivi, $R_k$ e $R_{k+1}$, sono tra loro ortogonali. Questo significa che il loro prodotto scalare è zero: $\qquad R_{k+1}^T R_k = 0$

**Verifica:** Il professore procede con la dimostrazione di questa proprietà:

Partiamo dalla definizione del residuo al passo $k+1$: $\qquad R_{k+1} = b - A x_{k+1}$

Sostituiamo l'espressione per $x_{k+1}$: $\qquad R_{k+1} = b - A (x_k + \alpha_k R_k)$ $\qquad R_{k+1} = (b - A x_k) - \alpha_k A R_k$

Riconosciamo che $b - A x_k$ è il residuo $R_k$: $\qquad R_{k+1} = R_k - \alpha_k A R_k$

Ora calcoliamo il prodotto scalare di $R_{k+1}$ con $R_k$: $\qquad R_k^T R_{k+1} = R_k^T (R_k - \alpha_k A R_k)$ $\qquad R_k^T R_{k+1} = R_k^T R_k - \alpha_k R_k^T A R_k$

Sostituiamo l'espressione di $\alpha_k$ che abbiamo precedentemente derivato: $\qquad R_k^T R_{k+1} = R_k^T R_k - \left( \frac{R_k^T R_k}{R_k^T A R_k} \right) R_k^T A R_k$

Osservando che $R_k^T A R_k$ è uno scalare (così come $R_k^T R_k$), possiamo semplificare: $\qquad R_k^T R_{k+1} = R_k^T R_k - R_k^T R_k = 0$

Questo dimostra che $R_k$ e $R_{k+1}$ sono ortogonali.

**Implicazioni:** Questa proprietà vale solo tra due residui consecutivi. In generale, $R_{k+1}$ non è ortogonale a $R_{k-1}$, $R_{k-2}$, ecc.. Tuttavia, se consideriamo l'intera sequenza dei residui, si formano due famiglie di vettori ortogonali tra loro: tutti i residui con indice pari sono ortogonali tra loro, e tutti i residui con indice dispari sono ortogonali tra loro. All'interno di ciascuna famiglia (pari o dispari), i vettori risultano essere paralleli. Il professore precisa che questa osservazione è valida in un contesto ideale senza errori di floating point.

### Interpretazione Geometrica
![[Pasted image 20250326103800.png]]
Il professore fornisce un'interpretazione geometrica del metodo del gradiente non precondizionato. La funzione obiettivo $\phi(x) = \frac{1}{2}x^T A x - b^T x$ (il cui minimo è la soluzione di $Ax=b$) ha superfici di livello che sono ellissoidi concentrici in $\mathbb{R}^n$ (paraboloidi se visualizzati in $\mathbb{R}^{n+1}$).

Il segmento che unisce due approssimazioni consecutive, $x_k$ e $x_{k+1}$, è **tangente** all'ellissoide che passa per il punto $x_{k+1}$ e definito dall'insieme dei punti $x$ tali che $\phi(x) = \phi(x_{k+1})$.

Il gradiente, $R_k = b - A x_k = -\nabla \phi(x_k)$, è sempre **perpendicolare** alle curve di livello nel punto $x_k$. Quindi, il metodo del gradiente si muove lungo direzioni ortogonali (i residui consecutivi) nel tentativo di raggiungere il centro del paraboloide, che rappresenta il minimo della funzione e quindi la soluzione del sistema lineare.

Il professore illustra ulteriormente questo concetto considerando un caso semplice con una matrice $A$ diagonale $2 \times 2$, $A = \begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix}$. In questo caso, la funzione $\phi(x)$ definisce un ellissoide le cui lunghezze dei semiassi sono inversamente proporzionali a $\lambda_1$ e $\lambda_2$.

Se l'ellissoide è molto "schiacciato" (alta eccentricità), il percorso a zig-zag compiuto dal metodo del gradiente per raggiungere il centro diventa più lungo, richiedendo un maggior numero di iterazioni. Al contrario, se l'ellissoide è simile a un cerchio, il metodo del gradiente converge più rapidamente, idealmente in una sola iterazione se fosse un cerchio perfetto partendo dal centro.

Questa osservazione è il punto di partenza per l'introduzione del metodo del gradiente coniugato.

## Introduzione al Metodo del Gradiente Coniugato

### Motivazione

Il metodo del gradiente classico utilizza come direzione di discesa il residuo $R_k$, che corrisponde alla direzione di massima discesa locale. Il professore si chiede se sia possibile migliorare la velocità di convergenza sostituendo questa direzione di discesa con una nuova direzione, che viene battezzata $P_k$. L'obiettivo è trovare una sequenza di direzioni di discesa ${P_k}$ che permettano di raggiungere la soluzione in un numero finito di iterazioni (al massimo $n$, la dimensione del sistema) in assenza di errori di arrotondamento.

### Definizione di Direzioni A-Coniugate

Prima di presentare l'algoritmo del gradiente coniugato, è necessario definire il concetto di **direzioni A-coniugate**.

Un insieme di $l+1$ vettori $\set{P_0, P_1, \dots, P_l}$ in $\mathbb{R}^n$ definiscono direzioni **A-coniugate** rispetto alla matrice $A$ (simmetrica e definita positiva) se soddisfano la seguente proprietà: $\qquad P_i^T A P_j = 0 \quad \text{per } i \neq j$

Si osserva che se $A$ fosse la matrice identità $I$, la definizione di A-coniugate si ridurrebbe alla definizione classica di ortogonalità ($P_i^T P_j = 0$ per $i \neq j$). Quindi, la coniugatezza rispetto ad $A$ introduce la struttura del problema nel concetto di ortogonalità.

Questo concetto è strettamente legato alla definizione di norma A, $||x||_A = \sqrt{x^T A x}$, e al prodotto scalare indotto da $A$, $\langle x, y \rangle_A = x^T A y$. Dire che due vettori sono A-coniugati significa che sono ortogonali rispetto a questo nuovo prodotto scalare. Questo può essere interpretato come un cambio di metrica.

Il professore accenna a una domanda riguardante la consistenza del metodo quando si sostituisce $R_k$ con $P_k$, rimandando la discussione a un momento successivo.

### Proprietà delle Direzioni A-Coniugate

Se si ha un insieme di $n$ direzioni A-coniugate $\set{P_0, P_1, \dots, P_{n-1}}$ in $\mathbb{R}^n$, allora questo insieme forma una **base** per $\mathbb{R}^n$.

Per dimostrare che formano una base, è sufficiente dimostrare che questi vettori sono **linearmente indipendenti**. Il professore inizia la dimostrazione considerando una combinazione lineare di questi vettori uguale al vettore nullo: $\qquad a_0 P_0 + a_1 P_1 + \dots + a_{n-1} P_{n-1} = 0$

L'obiettivo è dimostrare che tutti i coefficienti $a_i$ devono essere nulli.

___

## Metodo del Gradiente Coniugato

### 1. Definizione e Indipendenza Lineare delle Direzioni Accumulate


**Dimostrazione della Loro Indipendenza Lineare:**

Per dimostrare che queste $n$ direzioni accumulate formano una base di $\mathbb{R}^n$, è necessario dimostrare la loro indipendenza lineare. Si imposta una combinazione lineare di queste direzioni uguale al vettore nullo:

$a_0 p_0 + a_1 p_1 + ... + a_{n-1} p_{n-1} = 0$

L'obiettivo è dimostrare che tutti i coefficienti $a_i$ devono essere necessariamente nulli.

**Passo 1: Moltiplicazione per $p_0^T A$**

Si moltiplica l'intera combinazione lineare a sinistra per $p_0^T A$:

$p_0^T A (a_0 p_0 + a_1 p_1 + ... + a_{n-1} p_{n-1}) = p_0^T A \cdot 0$

Distribuendo $p_0^T A$ all'interno della parentesi, si ottiene:

$a_0 (p_0^T A p_0) + a_1 (p_0^T A p_1) + ... + a_{n-1} (p_0^T A p_{n-1}) = 0$

Secondo la definizione di direzioni accumulate, per $i \neq 0$, si ha $p_0^T A p_i = 0$. Pertanto, tutti i termini successivi al primo si annullano:

$a_0 (p_0^T A p_0) = 0$

La quantità $p_0^T A p_0$ è strettamente positiva poiché $A$ è definita positiva. Affinché il prodotto $a_0 (p_0^T A p_0)$ sia zero, l'unica possibilità è che $a_0 = 0$.

**Passo 2: Generalizzazione per gli Altri Coefficienti**

Per dimostrare che anche $a_1 = 0$, si moltiplica la combinazione lineare iniziale per $p_1^T A$:

$p_1^T A (a_0 p_0 + a_1 p_1 + ... + a_{n-1} p_{n-1}) = p_1^T A \cdot 0$

Distribuendo, si ha:

$a_0 (p_1^T A p_0) + a_1 (p_1^T A p_1) + ... + a_{n-1} (p_1^T A p_{n-1}) = 0$

Per la proprietà delle direzioni accumulate, $p_1^T A p_i = 0$ per $i \neq 1$. Quindi tutti i termini tranne quello con $a_1$ si annullano:

$a_1 (p_1^T A p_1) = 0$

Anche in questo caso, $p_1^T A p_1 > 0$ (perché $A$ è definita positiva), il che implica che $a_1 = 0$.

Questo processo si ripete per tutti i coefficienti $a_i$. Moltiplicando la combinazione lineare per $p_i^T A$, si dimostra che $a_i = 0$ per ogni $i = 0, 1, ..., n-1$. Poiché tutti i coefficienti della combinazione lineare sono nulli, le direzioni accumulate $p_0, p_1, ..., p_{n-1}$ sono linearmente indipendenti e formano quindi una base di $\mathbb{R}^n$.

### 2. Algoritmo del Gradiente Coniugato

L'algoritmo del gradiente coniugato viene introdotto definendo i suoi passi fondamentali.

**Inizializzazione:**

- Si sceglie un punto iniziale $x_0$.
- Si calcola il residuo iniziale $r_0 = b - A x_0$.
- Si inizializza la prima direzione di discesa $p_0$ uguale al residuo iniziale: $p_0 = r_0$.
- Si imposta il contatore dell'iterazione $k = 0$.

**Iterazione (fino a convergenza):**

1. **Calcolo del parametro di accelerazione $\alpha_k$**: $$\alpha_k = \frac{p_k^T r_k}{p_k^T A p_k}$$
    
2. **Aggiornamento della soluzione**: $x_{k+1} = x_k + \alpha_k p_k$
    
3. **Aggiornamento del residuo**: $r_{k+1} = r_k - \alpha_k A p_k$
    
4. **Calcolo del coefficiente $\beta_k$**: $\beta_k = \frac{p_k^T A r_{k+1}}{p_k^T A p_k}$ oppure $\beta_k = \frac{r_{k+1}^T A p_k}{p_k^T A p_k}$ (essendo $A$ simmetrica)
    
5. **Aggiornamento della direzione di discesa**: $p_{k+1} = r_{k+1} - \beta_k p_k$ 
    
6. Si incrementa il contatore: $k = k + 1$.
    

L'algoritmo continua fino a quando un criterio di convergenza (ad esempio, la norma del residuo è sufficientemente piccola) viene soddisfatto.

### 3. Giustificazione delle Formule



### 4. Proprietà del Metodo del Gradiente Coniugato*

MANCAA
![[Pasted image 20250326110209.png]]
**4.1 Proprietà 1: Ortogonalità dei Residui rispetto alle Direzioni Precedenti**

Si può dimostrare che il nuovo residuo $r_{k+1}$ è ortogonale alla precedente direzione di discesa $p_k$:

$p_k^T r_{k+1} = 0$

**Verifica per $p_k^T r_{k+1} = 0$:**

Si parte dalla definizione di $r_{k+1}$:

$r_{k+1} = r_k - \alpha_k A p_k$

Si moltiplica a sinistra per $p_k^T$:

$p_k^T r_{k+1} = p_k^T r_k - \alpha_k p_k^T A p_k$

Si sostituisce l'espressione di $\alpha_k$:

$p_k^T r_{k+1} = p_k^T r_k - \left( \frac{p_k^T r_k}{p_k^T A p_k} \right) p_k^T A p_k$ $p_k^T r_{k+1} = p_k^T r_k - p_k^T r_k = 0$

Procedendo per induzione, si può verificare che il residuo $r_{k+1}$ non è solo ortogonale a $p_k$, ma a tutte le direzioni precedenti $p_i$ per $i = 0, 1, ..., k$:

$p_i^T r_{k+1} = 0$, per $i = 0, ..., k$

**4.2 Proprietà 2: A-Ortogonalità delle Direzioni di Discesa**

Per costruzione (attraverso la scelta di $\beta_k$), la nuova direzione di discesa $p_{k+1}$ è A-ortogonale alla precedente direzione $p_k$:

$p_k^T A p_{k+1} = 0$

Come accennato nella giustificazione di $\beta_k$, questa condizione è imposta per derivare il valore di $\beta_k$. Procedendo per induzione, si può dimostrare che tutte le direzioni di discesa sono mutuamente A-ortogonali:

$p_j^T A p_{k+1} = 0$, per $j = 0, ..., k$

Questa proprietà di A-ortogonalità delle direzioni di discesa è fondamentale per la convergenza efficiente del metodo del gradiente coniugato.


**3.1 Giustificazione di $\alpha_k$**

La formula per $\alpha_k$ è derivata minimizzando la funzione obiettivo quadratica lungo la direzione di ricerca $p_k$ a partire dal punto $x_k$. La funzione obiettivo ha la forma di un paraboloide.

Si definisce una funzione $G(\alpha) = \phi(x_k + \alpha p_k)$, dove $\phi(x) = \frac{1}{2} x^T A x - b^T x$ è la funzione da minimizzare. Utilizzando l'espansione di Taylor di $\phi$ intorno a $x_k$, si ottiene:

$G(\alpha) = \phi(x_k) + \nabla \phi(x_k)^T (\alpha p_k) + \frac{1}{2} (\alpha p_k)^T H\phi(x_k) (\alpha p_k) + ...$

Dove $\nabla \phi(x) = Ax - b = -r(x)$ e $H\phi(x) = A$. Quindi:

$$G(\alpha) = \phi(x_k) + (-r_k)^T (\alpha p_k) + \frac{1}{2} (\alpha p_k)^T A (\alpha p_k)$$ $$G(\alpha) = \phi(x_k) - \alpha r_k^T p_k + \frac{1}{2} \alpha^2 p_k^T A p_k$$

Per trovare il valore di $\alpha = \alpha_k$ che minimizza $G(\alpha)$, si calcola la derivata prima rispetto ad $\alpha$ e si impone che sia uguale a zero:

$G'(\alpha) = -r_k^T p_k + \alpha p_k^T A p_k = 0$

Risolvendo per $\alpha$, si ottiene la formula per $\alpha_k$:

$\alpha_k = \frac{r_k^T p_k}{p_k^T A p_k} = \frac{p_k^T r_k}{p_k^T A p_k}$

Questa scelta di $\alpha_k$ garantisce che ci si muova lungo la direzione $p_k$ fino al punto in cui la funzione obiettivo è minimizzata in quella direzione.

MANCAAAAA
![[Pasted image 20250326110906.png|600]]
**3.2 Giustificazione di $\beta_k$** (no)

Il coefficiente $\beta_k$ è scelto in modo da garantire che la nuova direzione di discesa $p_{k+1}$ sia A-ortogonale a tutte le direzioni di discesa precedenti $p_0, p_1, ..., p_k$. In particolare, si impone la condizione di A-ortogonalità tra $p_{k+1}$ e $p_k$:

$p_k^T A p_{k+1} = 0$

Si assume che la nuova direzione $p_{k+1}$ sia una combinazione lineare del nuovo residuo $r_{k+1}$ e della vecchia direzione $p_k$:

$p_{k+1} = r_{k+1} - \beta_k p_k$ (seguendo il testo)

Sostituendo questa espressione nella condizione di A-ortogonalità:

$$p_k^T A (r_{k+1} - \beta_k p_k) = 0$$ $$p_k^T A r_{k+1} - \beta_k p_k^T A p_k = 0$$

Risolvendo per $\beta_k$, si ottiene:
$$\beta_k = \frac{p_k^T A r_{k+1}}{p_k^T A p_k}$$ 

____

# Metodo del Gradiente Coniugato

## Teorema di Convergenza del Gradiente Coniugato

Il professore introduce un teorema fondamentale che sottolinea la potenza del metodo del gradiente coniugato.

**Il teorema afferma che il gradiente coniugato converge alla soluzione esatta in al più $n$ iterazioni**, dove $n$ è l'ordine del sistema lineare da risolvere.

Questo risultato è notevole perché trasforma un metodo iterativo in qualcosa che assomiglia a un metodo diretto, in quanto il numero massimo di iterazioni necessarie per la convergenza è finito e noto a priori. Non è necessario implementare criteri di stopping basati su una tolleranza, poiché la convergenza è garantita entro $n$ passi. Tuttavia, il professore anticipa che su spazi di Hilbert si osserverà una convergenza ancora più rapida, richiedendo molte meno di $n$ iterazioni.

## Stima dell'Errore e Fattore di Convergenza (Non Precondizionato)

Viene presentata una stima non rigorosa ma intuitiva per l'errore associato all'iterata $k$-esima. **L'errore nella norma $A$, indicata come $||e_k||_A$, può essere controllato rispetto alla norma $A$ dell'errore iniziale $||e_0||_A$ con un fattore che guida la velocità di convergenza**.

Per il **metodo del gradiente semplice**, il fattore di convergenza che lega due iterazioni consecutive, quando iterato $k$ volte, porta a controllare l'errore come:

$||e_k||_A \le \left( \frac{\kappa_2(A) - 1}{\kappa_2(A) + 1} \right)^k ||e_0||_A$
![[Pasted image 20250326111717.png|500]]

dove $\kappa_2(A)$ è il condizionamento della matrice $A$ in norma 2. Il professore sottolinea che se il condizionamento $\kappa_2(A)$ è grande, la convergenza del gradiente semplice può essere molto lenta.

Per il **gradiente coniugato non precondizionato**, il fattore di convergenza è diverso e migliora la situazione:

$\frac{||e_k||_A}{||e_0||_A} \le 2 \left( \frac{\sqrt{\kappa_2(A)} - 1}{\sqrt{\kappa_2(A)} + 1} \right)^k = 2 \left( \frac{c}{1 + c} \right)^{2k}$, dove $c = \frac{\sqrt{\kappa_2(A)} - 1}{\sqrt{\kappa_2(A)} + 1}$.

Il professore evidenzia come la radice quadrata del numero di condizionamento nel fattore di convergenza del gradiente coniugato (non precondizionato) rappresenti un miglioramento significativo rispetto al gradiente semplice. Ad esempio, se $\kappa_2(A) = 10^4$, la radice diventa $10^2$, riducendo notevolmente l'impatto del malcondizionamento.

## Giustificazione delle $n$ Iterazioni

Il professore fornisce una spiegazione intuitiva del perché il gradiente coniugato converge in al più $n$ iterazioni, basandosi sulle proprietà delle direzioni di discesa e dei residui.

### Ortogonalità delle Direzioni di Discesa

Le prime $n$ direzioni di discesa $p_0, p_1, ..., p_{n-1}$ generate dal metodo del gradiente coniugato sono $A$-ortogonali (o coniugate). Questa proprietà (proprietà 2 menzionata dal professore) implica che queste $n$ direzioni formano una base per $\mathbb{R}^n$.

### Ortogonalità del Residuo

Il residuo all'iterazione $l$, $r_l$, è ortogonale a tutte le direzioni di discesa precedenti, $p_0, p_1, ..., p_{l-1}$ (proprietà 1 menzionata dal professore).

### Convergenza in $n$ Passi

Considerando il residuo all'iterazione $n$, $r_n$, per la proprietà 1, esso deve essere ortogonale a tutte le $n$ direzioni di discesa $p_0, p_1, ..., p_{n-1}$. Poiché queste direzioni formano una base per $\mathbb{R}^n$, l'unico vettore ortogonale a tutti i vettori di una base è il vettore nullo.

Pertanto, $r_n = 0$, il che implica che $x_n$ è la soluzione esatta ($x$) del sistema lineare $Ax = b$. Il professore precisa che potrebbe accadere che il residuo diventi nullo anche prima di $n$ iterazioni, quindi $n$ rappresenta uno scenario "peggiore".

### Dimostrazione Alternativa

Se non si è convinti, si può esprimere $r_n$ come combinazione lineare delle direzioni di discesa:

$r_n = c_0 p_0 + c_1 p_1 + ... + c_{n-1} p_{n-1}$

Andando a calcolare il prodotto scalare di $r_n$ con ciascuna direzione $p_i$ e sfruttando la proprietà di ortogonalità tra il residuo $r_i$ e le direzioni precedenti, si dimostra che tutti i coefficienti $c_i$ devono essere zero, confermando che $r_n$ è il vettore nullo.

## Metodo del Gradiente Coniugato Precondizionato

Il professore introduce la variante precondizionata del metodo del gradiente coniugato, utile per accelerare la convergenza, specialmente in caso di sistemi mal condizionati. Si assume che la matrice $A$ sia simmetrica e definita positiva.

### Algoritmo

1. **Calcolo del residuo iniziale:** $r_0 = b - Ax_0$.
2. **Calcolo del residuo precondizionato iniziale:** Risolvere $Mz_0 = r_0$ per $z_0$, dove $M$ è la matrice di precondizionamento.
3. **Scelta della prima direzione di discesa:** $p_0 = z_0$ (anziché $r_0$).
4. **Iterazioni per $k = 0, 1, ...$:**
    - **Calcolo del passo $\alpha_k$:** $\alpha_k = \frac{r_k^T z_k}{p_k^T A p_k}$.
    - **Aggiornamento della soluzione:** $x_{k+1} = x_k + \alpha_k p_k$.
    - **Aggiornamento del residuo:** $r_{k+1} = r_k - \alpha_k A p_k$.
    - **Calcolo del nuovo residuo precondizionato:** Risolvere $Mz_{k+1} = r_{k+1}$ per $z_{k+1}$.
    - **Calcolo del coefficiente $\beta_k$:** $\beta_k = \frac{p_k^T A z_{k+1}}{p_k^T A p_k}$ (formula modificata rispetto al non precondizionato).
    - **Aggiornamento della direzione di discesa:** $p_{k+1} = z_{k+1} - \beta_k p_k$ (formula modificata rispetto al non precondizionato, utilizza $z_{k+1}$ invece di $r_{k+1}$).

### Stima dell'Errore e Fattore di Convergenza (Precondizionato)

SISTEMARE
![[Pasted image 20250326112522.png]]
Anche per il metodo precondizionato, l'errore associato all'iterata $k$-esima in norma $A$ può essere confrontato con l'errore iniziale tramite un fattore di convergenza:

$\frac{||e_k||_A}{||e_0||_A} \le 2 \left( \frac{\sqrt{\kappa_2(M^{-1}A)} - 1}{\sqrt{\kappa_2(M^{-1}A)} + 1} \right)^k = 2 \left( \frac{\tilde{c}}{1 + \tilde{c}} \right)^{2k}$, dove $\tilde{c} = \frac{\sqrt{\kappa_2(M^{-1}A)} - 1}{\sqrt{\kappa_2(M^{-1}A)} + 1}$.

Il professore sottolinea come il numero di condizionamento della matrice precondizionata $M^{-1}A$, $\kappa_2(M^{-1}A)$, influenzi la velocità di convergenza. Una buona scelta della matrice di precondizionamento $M$ può significativamente ridurre questo numero di condizionamento, accelerando la convergenza.

## Applicazione alla Matrice di Hilbert (Inverta)

Il professore passa a considerare la risoluzione di un sistema lineare $Ax = b$ dove $A$ è la matrice di Hilbert, nota per essere simmetrica definita positiva e mal condizionata. La matrice di Hilbert $H_n$ ha elementi $H_{ij} = \frac{1}{i+j-1}$.

### Condizionamento della Matrice di Hilbert

Viene mostrato come il numero di condizionamento della matrice di Hilbert cresca rapidamente con la dimensione $n$ del sistema:

| Dimensione $n$ | Numero di Condizionamento $\kappa_2(A)$ |
| :------------: | :-------------------------------------: |
|       4        |           $\mathcal{O}(10^4)$           |
|       6        |           $\mathcal{O}(10^6)$           |
|       8        |           $\mathcal{O}(10^8)$           |
|       10       |         $\mathcal{O}(10^{11})$          |
|       12       |         $\mathcal{O}(10^{14})$          |
|       14       |         $\mathcal{O}(10^{17})$          |

Questa rapida crescita del condizionamento suggerisce che la risoluzione di sistemi con la matrice di Hilbert può essere problematica, specialmente per metodi diretti.

### Risultati con il Metodo Diretto (Slash in Matlab)

Utilizzando un metodo diretto (rappresentato dal comando "slash" in Matlab), si osservano i seguenti errori nella soluzione:

| Dimensione $n$ |  Errore Metodo Diretto  |
| :------------: | :---------------------: |
|       4        | $\mathcal{O}(10^{-13})$ |
|       6        | $\mathcal{O}(10^{-10})$ |
|       14       |  $\mathcal{O}(10^{1})$  |

I risultati mostrano una rapida perdita di precisione con l'aumentare della dimensione $n$, confermando le difficoltà nel risolvere sistemi di Hilbert con metodi diretti a causa del suo elevato condizionamento. Per $n=14$, l'errore è addirittura dell'ordine di $10^1$, rendendo la soluzione inaffidabile.

### Risultati con Metodi Iterativi Precondizionati

Vengono considerati il **Gradiente Precondizionato (PG)** e il **Gradiente Coniugato Precondizionato (PCG)**, entrambi precondizionati con la matrice diagonale $D = diag(A)$ contenente gli elementi diagonali della matrice di Hilbert. Si parte da una guess iniziale nulla e si fissa una tolleranza di $10^{-6}$ per la convergenza.

#### Gradiente Precondizionato (GP)

|Dimensione $n$|Errore GP Precondizionato|Numero Iterazioni GP Precondizionato|
|:-:|:-:|:-:|
|4|$\mathcal{O}(10^{-3})$|995|
|6|$\mathcal{O}(10^{-3})$|1813|
|14|$\mathcal{O}(10^{-3})$|3779|

Si osserva che l'errore rimane costante all'incirca a $\mathcal{O}(10^{-3})$ al variare di $n$, il che è un risultato positivo considerando il malcondizionamento crescente. Tuttavia, l'errore non raggiunge la tolleranza desiderata di $10^{-6}$, e il numero di iterazioni cresce con la dimensione del sistema.

#### Gradiente Coniugato Precondizionato (GCP)

|Dimensione $n$|Errore GCP Precondizionato|Numero Iterazioni GCP Precondizionato|
|:-:|:-:|:-:|
|4|$\mathcal{O}(10^{-2})$|3|
|6|$\mathcal{O}(10^{-3})$|4|
|8|$\mathcal{O}(10^{-3})$|4|
|14|$\mathcal{O}(10^{-3})$|5|

Il gradiente coniugato precondizionato mostra un comportamento notevolmente migliore. L'errore si stabilizza anch'esso intorno a $\mathcal{O}(10^{-3})$, simile al gradiente precondizionato, ma il **numero di iterazioni necessarie per la convergenza rimane estremamente basso e quasi indipendente dalla dimensione del sistema $n$**. Questo dimostra l'efficacia del gradiente coniugato precondizionato nel gestire sistemi mal condizionati come quelli con la matrice di Hilbert, raggiungendo una precisione simile al gradiente precondizionato con un costo computazionale drasticamente inferiore in termini di numero di iterazioni.

Il professore conclude sottolineando come il gradiente coniugato precondizionato sia vincente nel caso della matrice di Hilbert, riuscendo a controllare l'errore con un numero molto ridotto di iterazioni, a differenza del metodo diretto che fallisce e del gradiente precondizionato che richiede molte più iterazioni.


#### References
[[Appunti Mate Num 1- lez10.pdf]]

