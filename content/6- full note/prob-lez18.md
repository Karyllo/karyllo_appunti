2025-04-23 16:09

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[probabilità]]  [[sbobine]]

## prob-lez18


**Appunti sulla Funzione Caratteristica**

**Definizione (implicita nel testo)** La funzione caratteristica di un vettore aleatorio $x$ (calcolata in un vettore $t$) è definita come il valore atteso di $e^{i t^T x}$.

**Proprietà Importanti della Funzione Caratteristica**

Vengono presentate e dimostrate tre proprietà fondamentali della funzione caratteristica.

**Proposizione 1: Valore nell'Origine** La prima proprietà importante è che la funzione caratteristica del vettore $x$ calcolata nel vettore nullo ($t=0$) è uguale a 1. In simboli: $\phi_x(\mathbf{0}) = 1$

- **Dimostrazione della Proposizione 1** Calcolando la funzione caratteristica nel punto $\mathbf{0}$, si ha: $\phi_x(\mathbf{0}) = E[e^{i \mathbf{0}^T x}]$ Il prodotto scalare $\mathbf{0}^T x$ è uguale a $0$. Quindi l'espressione diventa: $E[e^{i \cdot 0}] = E[e^0]$ $e^0 = 1$, quindi il valore atteso è: $E = 1$ Questa proprietà è considerata ovvia data la definizione.

**Proposizione 2: Continuità Uniforme** La seconda proprietà importante afferma che la funzione caratteristica, che mappa $t$ a $\phi_x(t)$, è uniformemente continua su tutto $\mathbb{R}^D$, dove $D$ è la dimensione del vettore $x$.

- **Dimostrazione della Proposizione 2** Per dimostrare la continuità (e poi l'uniforme continuità), si considera la differenza tra la funzione caratteristica valutata in due punti vicini, $t+h$ e $t$, dove $t$ e $h$ sono vettori. Si vuole analizzare $\phi_x(t+h) - \phi_x(t)$. Per definizione: $\phi_x(t+h) = E[e^{i (t+h)^T x}]$ $\phi_x(t) = E[e^{i t^T x}]$ La differenza è: $\phi_x(t+h) - \phi_x(t) = E[e^{i (t+h)^T x}] - E[e^{i t^T x}]$ Usando la linearità del valore atteso: $\phi_x(t+h) - \phi_x(t) = E[e^{i (t+h)^T x} - e^{i t^T x}]$ Espandendo l'esponente: $(t+h)^T x = t^T x + h^T x$ Quindi: $e^{i (t^T x + h^T x)} - e^{i t^T x} = e^{i t^T x} e^{i h^T x} - e^{i t^T x}$ Si può raccogliere il termine comune $e^{i t^T x}$: $e^{i t^T x} (e^{i h^T x} - 1)$ Quindi la differenza diventa: $\phi_x(t+h) - \phi_x(t) = E[e^{i t^T x} (e^{i h^T x} - 1)]$ Si applica la disuguaglianza del modulo per il valore atteso, $|!|E[Y]|!| \le E[|!|Y|!|]$: $|!|\phi_x(t+h) - \phi_x(t)|!| \le E[|!|e^{i t^T x} (e^{i h^T x} - 1)|!|]$ Usando la proprietà del modulo di un prodotto, $|!|ab|!| = |!|a|!| |!|b|!|$: $E[|!|e^{i t^T x}|!| |!|e^{i h^T x} - 1|!|]$ Il modulo di $e^{i \theta}$ è sempre 1 per qualsiasi $\theta \in \mathbb{R}$. Quindi $|!|e^{i t^T x}|!| = 1$. La disuguaglianza diventa: $|!|\phi_x(t+h) - \phi_x(t)|!| \le E[|!|e^{i h^T x} - 1|!|]$ Il termine a destra, $E[|!|e^{i h^T x} - 1|!|]$, dipende solo da $h$, non da $t$. Il modulo di un numero complesso della forma $e^{i\alpha} - 1$ ha modulo sempre minore o uguale a 2 (poiché $e^{i\alpha}$ è sulla circonferenza unitaria e -1 è il punto opposto). La variabile aleatoria $|!|e^{i h^T x} - 1|!|$ è quindi dominata dalla costante 2. Si applica il teorema della convergenza dominata per valutare il limite di questo termine a destra per $h \to \mathbf{0}$. $\lim_{h \to \mathbf{0}} E[|!|e^{i h^T x} - 1|!|] = E[\lim_{h \to \mathbf{0}} |!|e^{i h^T x} - 1|!|]$ Il limite interno è: $\lim_{h \to \mathbf{0}} e^{i h^T x}$ Poiché $h \to \mathbf{0}$, $h^T x \to 0$. Quindi, $e^{i h^T x} \to e^{i \cdot 0} = e^0 = 1$. Il limite del modulo è: $\lim_{h \to \mathbf{0}} |!|e^{i h^T x} - 1|!| = |!|1 - 1|!| = |!|0|!| = 0$. Quindi, per il teorema della convergenza dominata, il valore atteso di questo limite è 0. Questo implica che: $\lim_{h \to \mathbf{0}} |!|\phi_x(t+h) - \phi_x(t)|!| = 0$ Ciò dimostra che la funzione caratteristica è continua. Poiché il membro di destra della disuguaglianza, $E[|!|e^{i h^T x} - 1|!|]$, dipende solo da $h$ e non da $t$, la convergenza a 0 per $h \to \mathbf{0}$ è uniforme rispetto a $t$. Questo significa che la continuità è uniforme su tutto $\mathbb{R}^D$. Il concetto di uniforme continuità implica che la scelta di $\delta$ per una data $\epsilon$ non dipende dal punto $t$ considerato.

**Proposizione 3: Funzione Caratteristica di una Trasformazione Lineare** La terza proprietà, considerata molto utile nelle applicazioni, descrive la funzione caratteristica di un vettore trasformato linearmente. Fissata una matrice $A$ e un vettore $B$, compatibili per l'operazione $A x + B$, la funzione caratteristica del nuovo vettore $y = A x + B$ calcolata in $t$ può essere espressa come: $\phi_{Ax+B}(t) = E[e^{i t^T (Ax+B)}]$

- **Dimostrazione della Proposizione 3** Si parte dalla definizione: $\phi_{Ax+B}(t) = E[e^{i t^T (Ax+B)}]$ Si distribuisce il prodotto scalare nell'esponente: $t^T (Ax+B) = t^T (Ax) + t^T B$ Quindi l'espressione diventa: $E[e^{i (t^T (Ax) + t^T B)}]$ Usando la proprietà $e^{a+b} = e^a e^b$: $E[e^{i t^T (Ax)} e^{i t^T B}]$ Il termine $e^{i t^T B}$ è una costante rispetto all'operatore di valore atteso, poiché $B$ e $t$ sono vettori deterministici (non aleatori). Si può quindi portare fuori dal valore atteso per linearità: $e^{i t^T B} E[e^{i t^T (Ax)}]$ Ora si riscrive il prodotto scalare $t^T (Ax)$. Usando la proprietà $(AB)^T = B^T A^T$, si ha che $(Ax)^T t = x^T A^T t$. Poiché il prodotto scalare è commutativo, $t^T (Ax) = (Ax)^T t = x^T A^T t$. In alternativa, si può vedere $t^T A$ come $(A^T t)^T$. Quindi $t^T (Ax) = (A^T t)^T x$. Sostituendo nell'espressione: $e^{i t^T B} E[e^{i (A^T t)^T x}]$ Osservando la forma del termine del valore atteso, $E[e^{i v^T x}]$, dove $v = A^T t$, si riconosce la definizione della funzione caratteristica di $x$ valutata nel vettore $A^T t$: $E[e^{i (A^T t)^T x}] = \phi_x(A^T t)$ Quindi la funzione caratteristica di $A x + B$ è: $\phi_{Ax+B}(t) = e^{i t^T B} \phi_x(A^T t)$ Questa formula è utile per calcolare la funzione caratteristica di trasformazioni affini (scala-posizione) di vettori aleatori, anche in più dimensioni.
![[Pasted image 20250423162343.png]]
![[Pasted image 20250423162353.png]]
![[Pasted image 20250423162406.png]]
**Caratterizzazione dell'Indipendenza tramite Funzioni Caratteristiche**

Un altro risultato importante lega l'indipendenza delle componenti di un vettore aleatorio alla sua funzione caratteristica.

**Proposizione 4: Caratterizzazione dell'Indipendenza** Sia $x = (X_1, X_2, \dots, X_D)$ un vettore aleatorio con componenti $X_j$. Le componenti $X_1, X_2, \dots, X_D$ sono stocasticamente indipendenti se e solo se la funzione caratteristica del vettore $x$ calcolata in un vettore $t = (t_1, t_2, \dots, t_D)$ è uguale al prodotto delle funzioni caratteristiche marginali di ciascuna componente, calcolata nel proprio $t_j$. Questo deve valere per ogni vettore $t \in \mathbb{R}^D$. In simboli: $X_1, \dots, X_D$ sono indipendenti $\iff \phi_x(t_1, \dots, t_D) = \prod_{j=1}^D \phi_{X_j}(t_j)$ per ogni $(t_1, \dots, t_D) \in \mathbb{R}^D$.

- **Importante Distinzione** È cruciale non confondere questo enunciato con l'espressione della funzione caratteristica della somma di variabili aleatorie. La funzione caratteristica della somma $S = X_1 + \dots + X_D$ (che è una variabile scalare, non un vettore) calcolata in uno scalare $t$ è data da $$\phi_S(t) = E[e^{i t S}] = E[e^{i t (X_1 + \dots + X_D)}] = E[e^{i t X_1 + \dots + i t X_D}] = E[\prod_{j=1}^D e^{i t X_j}]$$. Se gli $X_j$ sono indipendenti, allora $E[\prod Y_j] = \prod E[Y_j]$, quindi $\phi_S(t) = \prod_{j=1}^D E[e^{i t X_j}] = \prod_{j=1}^D \phi_{X_j}(t)$. Nel caso della somma, il prodotto è delle funzioni caratteristiche marginali **tutte valutate nello stesso scalare** $t$. Nella caratterizzazione dell'indipendenza delle componenti di un vettore, la funzione caratteristica **vettoriale** è valutata nel vettore $(t_1, \dots, t_D)$ e il prodotto è delle funzioni caratteristiche marginali, ciascuna valutata **nella sua componente** $t_j$. L'espressione della funzione caratteristica di un vettore $x$ calcolata sulla "diagonale" con componenti uguali a uno scalare $t$, cioè $\phi_x(t, t, \dots, t)$, è sempre esprimibile come $\phi_{X_1+\dots+X_D}(t)$. Questa è una conseguenza della definizione, sempre vera indipendentemente dall'indipendenza.
![[Pasted image 20250424090406.png]]
- **Dimostrazione della Proposizione 4** La dimostrazione procede in due direzioni.
    
    **Direzione 1: Indipendenza $\implies$ Fattorizzazione** Supponiamo che le componenti $X_1, \dots, X_D$ siano indipendenti. Si vuole dimostrare che $$\phi_x(t) = \prod_{j=1}^D \phi_{X_j}(t_j)$$. Si parte dalla definizione della funzione caratteristica del vettore $x$ calcolata in $t=(t_1, \dots, t_D)$: $$\phi_x(t_1, \dots, t_D) = E[e^{i t^T x}]$$ Si scrive esplicitamente il prodotto scalare $t^T x$: $$t^T x = \sum_{j=1}^D t_j X_j$$ Quindi: $\phi_x(t_1, \dots, t_D) = E[e^{i \sum_{j=1}^D t_j X_j}]$ Usando la proprietà $e^{\sum a_j} = \prod e^{a_j}$: $\phi_x(t_1, \dots, t_D) = E[\prod_{j=1}^D e^{i t_j X_j}]$ Poiché le variabili aleatorie $X_1, \dots, X_D$ sono indipendenti, le variabili $Y_j = e^{i t_j X_j}$ (che sono funzioni misurabili delle $X_j$) sono anch'esse indipendenti. Per variabili indipendenti, il valore atteso del prodotto è uguale al prodotto dei valori attesi: $$E[\prod_{j=1}^D e^{i t_j X_j}] = \prod_{j=1}^D E[e^{i t_j X_j}]$$ Per definizione, $E[e^{i t_j X_j}]$ è la funzione caratteristica della variabile scalare $X_j$ calcolata nello scalare $t_j$: $$E[e^{i t_j X_j}] = \phi_{X_j}(t_j)$$ Quindi, si ottiene la fattorizzazione: $$\phi_x(t_1, \dots, t_D) = \prod_{j=1}^D \phi_{X_j}(t_j)$$ Questa direzione è considerata più semplice.
    ![[Pasted image 20250424090453.png]]
    **Direzione 2: Fattorizzazione $\implies$ Indipendenza** Supponiamo che la funzione caratteristica del vettore $x$ fattorizzi, cioè $\phi_x(t_1, \dots, t_D) = \prod_{j=1}^D \phi_{X_j}(t_j)$ per ogni $t \in \mathbb{R}^D$. Si vuole dimostrare che le componenti $X_j$ sono indipendenti. Si parte dalla supposta uguaglianza: $\phi_x(t_1, \dots, t_D) = \prod_{j=1}^D \phi_{X_j}(t_j)$ Il membro di sinistra, $\phi_x(t)$, è per definizione $E[e^{i t^T x}]$. Questo è l'integrale di $e^{i t^T x}$ rispetto alla legge (misura di probabilità immagine) del vettore $x$, che chiamiamo $P_x$: $\phi_x(t) = \int_{\mathbb{R}^D} e^{i t^T y} dP_x(y)$ Il membro di destra è il prodotto di $D$ integrali. La funzione caratteristica marginale $\phi_{X_j}(t_j)$ è per definizione $E[e^{i t_j X_j}]$. Questo è l'integrale di $e^{i t_j y_j}$ rispetto alla legge (misura di probabilità immagine) della variabile $X_j$, che chiamiamo $P_{X_j}$: $\phi_{X_j}(t_j) = \int_{\mathbb{R}} e^{i t_j y_j} dP_{X_j}(y_j)$ Quindi la fattorizzazione si scrive come: $\int_{\mathbb{R}^D} e^{i t^T y} dP_x(y) = \prod_{j=1}^D \int_{\mathbb{R}} e^{i t_j y_j} dP_{X_j}(y_j)$ Il prodotto di integrali, per il teorema di Fubini (utilizzato nella direzione "inversa"), è uguale all'integrale del prodotto rispetto alla misura prodotto. La misura prodotto delle leggi marginali $P_{X_1}, \dots, P_{X_D}$ è la misura $P_{X_1} \otimes \dots \otimes P_{X_D}$ sullo spazio prodotto $\mathbb{R}^D$. L'integrale del prodotto $\prod_{j=1}^D e^{i t_j y_j} = e^{i t_1 y_1} \dots e^{i t_D y_D} = e^{i \sum t_j y_j} = e^{i t^T y}$ rispetto alla misura prodotto $P_{X_1} \otimes \dots \otimes P_{X_D}$ è: $\prod_{j=1}^D \int_{\mathbb{R}} e^{i t_j y_j} dP_{X_j}(y_j) = \int_{\mathbb{R}^D} e^{i t^T y} d(P_{X_1} \otimes \dots \otimes P_{X_D})(y)$ (Il professore illustra questo passaggio mostrando il caso $D=2$ in dettaglio, spiegando come l'integrale doppio rispetto alla misura prodotto si scomponga nel prodotto degli integrali singoli, e come il termine $e^{i t^T y}$ sia un prodotto di funzioni ciascuna dipendente solo da una componente $y_j$, permettendo l'applicazione di Fubini in entrambe le direzioni). Quindi, dalla supposta fattorizzazione, si ottiene l'uguaglianza di due funzioni caratteristiche: $\int_{\mathbb{R}^D} e^{i t^T y} dP_x(y) = \int_{\mathbb{R}^D} e^{i t^T y} d(P_{X_1} \otimes \dots \otimes P_{X_D})(y)$ Questa uguaglianza vale per ogni $t \in \mathbb{R}^D$. Per il teorema di unicità per le funzioni caratteristiche, se due funzioni caratteristiche coincidono, allora le corrispondenti misure di probabilità (leggi) devono coincidere. Pertanto, la legge del vettore aleatorio $x$, $P_x$, deve essere uguale alla misura prodotto delle leggi marginali: $P_x = P_{X_1} \otimes \dots \otimes P_{X_D}$ Questa uguaglianza delle leggi è una delle definizioni (o caratterizzazioni equivalenti) dell'indipendenza delle componenti di un vettore aleatorio. Quindi, se la funzione caratteristica fattorizza, le componenti del vettore $x$ sono indipendenti. La dimostrazione di questa direzione ha utilizzato tre risultati importanti: il teorema di Fubini, il teorema di unicità delle funzioni caratteristiche e una caratterizzazione dell'indipendenza tramite la legge prodotto.
    ![[Pasted image 20250424090625.png]]
    ![[Pasted image 20250424090803.png]]
___


### La Funzione Caratteristica e i Momenti

Questa sezione tratta un argomento molto importante: la relazione tra la funzione caratteristica e i momenti di una variabile aleatoria. La funzione caratteristica è uno strumento fondamentale che verrà ripreso più volte, specialmente in relazione ai concetti di convergenza e al teorema del limite centrale.

#### Esistenza della Funzione Caratteristica vs. Esistenza dei Momenti

La funzione caratteristica di una variabile aleatoria può essere scritta senza bisogno di alcuna ipotesi sui momenti. Questo significa che si può definire la funzione caratteristica anche per variabili aleatorie che non possiedono il primo momento (valor atteso), il secondo momento, o nessun momento.

- **Esempio:** La distribuzione di Cauchy è un esempio di variabile aleatoria assolutamente continua che non ha momenti. Nonostante ciò, la sua funzione caratteristica esiste e può essere scritta in forma chiusa, risultando semplice. Quindi, una funzione caratteristica ben definita non implica necessariamente che la variabile aleatoria associata abbia momenti.

#### Teorema Fondamentale: Momenti Implicano Derivabilità della Funzione Caratteristica e Sviluppo di Taylor

Consideriamo una variabile aleatoria reale (dimensione 1) X con funzione caratteristica $\phi_X(t)$ (indicata come f nelle fonti).

**Condizione:** Supponiamo che esista il momento assoluto di $X$ di ordine $n + \delta$, ovvero che $E[|X|^{n+\delta}] < \infty$, dove $n$ è un intero non negativo ($n \ge 0$) e $\delta$ è un valore compreso tra 0 e 1, inclusi gli estremi ($0 \le \delta \le 1$).

**Conclusioni:** Se la condizione precedente è soddisfatta, allora valgono i seguenti punti:

1. **Derivabilità e Legame con i Momenti (per $n \ge 1$)**:
    
    - La funzione caratteristica $\phi_X(t)$ ammette derivata di ordine $k$ per ogni $k$ compreso tra 1 e $n$ ($1 \le k \le n$).
    - La derivata $k$-esima della funzione caratteristica valutata nell'origine ($t=0$) è legata al momento $k$-esimo di $X$ dalla seguente formula: $$ \phi_X^{(k)}(0) = i^k E[X^k] $$ Questo ha senso solo se $n \ge 1$, in modo che $k$ possa assumere valori maggiori o uguali a 1.
2. **Sviluppo di Taylor nell'Origine**:
    
    - La funzione caratteristica può essere sviluppata in serie di Taylor attorno all'origine ($t=0$) fino all'ordine $n$.
    - Lo sviluppo di Taylor usuale è: $$ \phi_X(t) = \sum_{k=0}^{n} \frac{\phi_X^{(k)}(0)}{k!} t^k + R_n(t) $$ Utilizzando la relazione tra le derivate nell'origine e i momenti ($ \phi_X^{(k)}(0) = i^k E[X^k]$ per $k \ge 1$), e ricordando che $\phi_X(0) = E[e^{i \cdot 0 \cdot X}] = E = 1$ (momento di ordine 0), lo sviluppo diventa: $$ \phi_X(t) = 1 + \sum_{k=1}^{n} \frac{i^k E[X^k]}{k!} t^k + R_n(t) $$
    - **Comportamento del Resto ($R_n(t)$)**:
        - Se esiste almeno il momento $n$-esimo ($E[|X|^n] < \infty$, corrispondente al caso $\delta = 0$), allora il resto è un "o piccolo" di $t^n$: $$ R_n(t) = o(t^n) $$ Questo significa che $\lim_{t \to 0} \frac{R_n(t)}{t^n} = 0$.
        - Se esiste un momento di ordine leggermente superiore a $n$, ovvero $E[|X|^{n+\delta}] < \infty$ con $\delta > 0$, allora si ha un controllo più preciso sul resto. Il resto è un "O grande" di $t^{n+\delta}$: $$ R_n(t) = O(t^{n+\delta}) $$ Questo significa che esiste una costante $C$ tale che $|R_n(t)| \le C |t|^{n+\delta}$ per t vicino a 0. La costante $C$ dipende solo da $n$ e $\delta$ e da $E[|X|^{n+\delta}]$. Nello specifico, la dipendenza da $X$ è interamente contenuta nel fattore $E[|X|^{n+\delta}]$.

In sintesi, il teorema dice che **l'esistenza del momento $n$-esimo implica la derivabilità $n$ volte della funzione caratteristica e garantisce che il resto dello sviluppo di Taylor sia $o(t^n)$**. Se esiste un momento di ordine $n+\delta$ con $\delta > 0$, si ottiene un controllo ancora più preciso sul resto ($O(t^{n+\delta})$).

#### Idea della Dimostrazione (Relazione Derivata-Momento)

L'idea alla base della relazione tra le derivate della funzione caratteristica nell'origine e i momenti non è così strana.

Consideriamo la derivata prima della funzione caratteristica: $$ \phi_X'(t) = \frac{d}{dt} E[e^{itX}] $$ Supponendo di poter scambiare l'operazione di derivata con l'operazione di valore atteso (questo è uno dei passaggi che richiederebbe una giustificazione formale, ma è l'idea intuitiva): $$ \phi_X'(t) = E\left[\frac{d}{dt} e^{itX}\right] = E[iX e^{itX}] $$ Ora, valutiamo questa derivata nell'origine ($t=0$): $$ \phi_X'(0) = E[iX e^{i \cdot 0 \cdot X}] = E[iX e^0] = E[iX] = i E[X] $$ Quindi, abbiamo $\phi_X'(0) = i E[X]$, il che implica $E[X] = \frac{\phi_X'(0)}{i}$. Questa è esattamente la formula $\phi_X^{(k)}(0) = i^k E[X^k]$ per $k=1$.

L'idea è che, iterando questo processo di derivazione e scambio con il valore atteso, si ottengono le formule per le derivate di ordine superiore, legandole ai momenti di ordine superiore. Se si ha "quel tantino in più" (l'esistenza del momento dell'ordine appropriato) si può giustificare lo scambio e procedere. Una volta ottenute queste formule per le derivate nell'origine, si applica semplicemente lo sviluppo di Taylor per ottenere la tesi del teorema riguardante l'espansione.
![[Pasted image 20250424091005.png]]
#### Significato e Utilità del Teorema

Questo teorema è molto importante per diversi motivi.

1. **Legame tra Momenti e Funzione Caratteristica:** Esiste un legame diretto che, in certi casi, può essere comodo. Se si desidera calcolare un momento ma l'integrale per il valor atteso è complicato, mentre la funzione caratteristica è facile da calcolare e derivare (soprattutto da valutare in zero), si può usare la formula $E[X^k] = \frac{\phi_X^{(k)}(0)}{i^k}$ per ricavare il valore numerico del momento.
2. **Regolarità:** La funzione caratteristica è sempre uniformemente continua senza alcuna ipotesi sui momenti. L'aggiunta di ipotesi sui momenti "aggiunge regolarità" alla funzione caratteristica, permettendo di svilupparla in serie di Taylor nell'origine. Questo non è sorprendente se si conosce la parte 1 del teorema e il comportamento dei resti di Taylor. La cosa fondamentale è che il teorema fornisce gratuitamente il resto $o(t^n)$ se esiste il momento $n$-esimo. Se si ha qualcosa di più (momento $n+\delta$), si ottiene un controllo più preciso del resto ($O(t^{n+\delta})$). Questo controllo è importante perché si sa esattamente da cosa dipende la costante nell'O grande (dal momento $n+\delta$ e costanti universali che dipendono da $n$ e $\delta$).

L'aspetto essenziale da ricordare è che **l'esistenza dei momenti implica la derivabilità della funzione caratteristica e il comportamento $o(t^n)$ del resto di Taylor**.

#### Osservazione Importante: L'Implicazione è Unidirezionale (Generalmente)

È fondamentale notare che l'implicazione stabilita dal teorema è quella scritta: **se esiste il momento $n$-esimo, allora la funzione caratteristica è derivabile $n$ volte con continuità e la sua derivata $k$-esima nell'origine è legata al momento $k$-esimo dalla formula**.

In generale, **non è vero il contrario**. Cioè, il fatto che la funzione caratteristica sia derivabile $n$ volte con continuità **non implica necessariamente** che esista il momento $n$-esimo. Esistono risultati più fini che distinguono tra n pari e dispari, ma non verranno usati nel contesto presentato.

#### Legame tra Comportamento della Funzione Caratteristica vicino allo Zero e Code della Distribuzione

Un altro aspetto importante, collegato al teorema, è che il comportamento della funzione caratteristica nell'origine (per $t$ piccolo) è controllato dai momenti. Poiché i momenti dipendono da come si comporta la distribuzione per valori grandi della variabile aleatoria (le "code" della distribuzione), esiste un legame tra il comportamento della probabilità di $X$ molto grande e il comportamento della funzione caratteristica per $t$ piccolo.

Concetti simili, che mettono in relazione il comportamento di una funzione a infinito con il comportamento di una sua trasformata (duale) nell'origine, sono studiati nei cosiddetti **teoremi tauberiani**.

#### Altre Trasformate Integrali

La funzione caratteristica è una delle trasformate integrali usate per studiare le variabili aleatorie, strettamente imparentata con la Trasformata di Fourier in analisi. Esistono altre trasformate che possono essere utili in circostanze diverse:

- **Funzione Generatrice dei Momenti (MGF):** Presente negli appunti, ma non trattata nel corso.
- **Funzione Generatrice di Probabilità (PGF):** Si applica alle variabili aleatorie discrete.

#### Caso Multidimensionale

Il teorema discusso finora si riferisce a variabili aleatorie reali (dimensione 1). Per vettori aleatori, esiste un risultato analogo che coinvolge i momenti misti e uno sviluppo di Taylor multidimensionale. Questo si può fare e l'idea non è molto diversa dal caso unidimensionale, ma è formalmente più complessa a causa dei multi-indici. L'esistenza di questo risultato per vettori è menzionata, ma non discussa nel dettaglio.

### Esempi ed Esercizi

Le fonti presentano esempi di funzioni caratteristiche calcolate per specifiche distribuzioni, in particolare la costruzione della funzione caratteristica della Binomiale a partire da quella della Bernoulli, e un esercizio sul campionamento.

#### Funzione Caratteristica della Distribuzione di Bernoulli

Consideriamo una variabile aleatoria $Y \sim \text{Bernoulli}(p)$. La sua funzione di probabilità è $P(Y=1)=p$ e $P(Y=0)=1-p$. La funzione caratteristica è definita come $E[e^{itY}]$: $$ \phi_Y(t) = E[e^{itY}] = e^{it \cdot 0} P(Y=0) + e^{it \cdot 1} P(Y=1) $$ $$ \phi_Y(t) = e^0 (1-p) + e^{it} p $$ $$ \phi_Y(t) = 1 \cdot (1-p) + e^{it} p $$ $$ \phi_Y(t) = 1 - p + p e^{it} $$ Questa è la funzione caratteristica della distribuzione di Bernoulli(p).

#### Funzione Caratteristica della Distribuzione Binomiale

Consideriamo una variabile aleatoria $X \sim \text{Binomiale}(n, p)$. Una variabile Binomiale può essere vista come la somma di $n$ variabili aleatorie di Bernoulli indipendenti e identicamente distribuite (i.i.d.), $Y_1, Y_2, \dots, Y_n$, dove $Y_i \sim \text{Bernoulli}(p)$ per ogni $i$. Quindi, $X = \sum_{i=1}^n Y_i$.

Una proprietà fondamentale della funzione caratteristica è che la funzione caratteristica di una somma di variabili aleatorie _indipendenti_ è il _prodotto_ delle loro funzioni caratteristiche individuali. Se le variabili sono anche _identicamente distribuite_, il prodotto diventa una potenza.

Poiché $Y_i$ sono i.i.d. Bernoulli(p), la funzione caratteristica di $\sum_{i=1}^n Y_i$ è il prodotto delle funzioni caratteristiche di ciascun $Y_i$. Dato che sono identiche, è $(\phi_Y(t))^n$. $$ \phi_X(t) = \phi_{\sum_{i=1}^n Y_i}(t) = \prod_{i=1}^n \phi_{Y_i}(t) = (\phi_Y(t))^n $$ Sostituendo la funzione caratteristica della Bernoulli: $$ \phi_X(t) = (1 - p + p e^{it})^n $$ Questa è la funzione caratteristica della distribuzione Binomiale(n, p).

#### Esercizio: Funzione Caratteristica della Frequenza Empirica

Consideriamo di nuovo $n$ variabili aleatorie $Y_1, \dots, Y_n$ i.i.d. $\sim \text{Bernoulli}(p)$. Definiamo la variabile aleatoria $S_n$ come la media di queste variabili, che rappresenta la frequenza empirica di successo (o la probabilità empirica di ottenere 1): $$ S_n = \frac{1}{n} \sum_{i=1}^n Y_i $$

**Domanda 1: $S_n$ è una variabile aleatoria Binomiale?** **Risposta:** No. La variabile Binomiale(n, p) può assumere valori interi ${0, 1, 2, \dots, n}$. Invece, $S_n$ può assumere valori ${0/n, 1/n, 2/n, \dots, n/n = 1}$. Il dominio (supporto) dei valori possibili è diverso, quindi $S_n$ non è una Binomiale.

**Domanda 2: Qual è la funzione caratteristica di $S_n$?** Per calcolare la funzione caratteristica di $S_n = \frac{1}{n} \sum_{i=1}^n Y_i$, possiamo usare la proprietà che per costanti scalari $a, b$, la funzione caratteristica di $aX+b$ è $\phi_{aX+b}(t) = e^{itb} \phi_X(at)$. Nel nostro caso, $S_n$ è della forma $aX$ con $a = \frac{1}{n}$ e $X = \sum_{i=1}^n Y_i$. Non c'è il termine 'b'. Quindi, la funzione caratteristica di $S_n$ è: $$ \phi_{S_n}(t) = \phi_{\frac{1}{n} (\sum_{i=1}^n Y_i)}(t) $$ Applicando la proprietà di scaling con $a = \frac{1}{n}$ e $X = \sum_{i=1}^n Y_i$: $$ \phi_{S_n}(t) = \phi_{\sum_{i=1}^n Y_i}\left(\frac{t}{n}\right) $$ Sappiamo che $X = \sum_{i=1}^n Y_i$ dove $Y_i$ sono i.i.d. Bernoulli(p) è una variabile aleatoria Binomiale(n, p). Abbiamo calcolato la sua funzione caratteristica come $\phi_X(t) = (1 - p + p e^{it})^n$.

Sostituiamo questa espressione, valutandola in $\frac{t}{n}$ anziché $t$: $$ \phi_{S_n}(t) = \left(1 - p + p e^{i \frac{t}{n}}\right)^n $$ Questo completa il calcolo della funzione caratteristica della frequenza empirica $S_n$ per variabili di Bernoulli.

Spero questa rielaborazione dettagliata, basata esclusivamente sulle fonti fornite, ti sia utile per comprendere meglio i concetti e i passaggi presentati.
![[Pasted image 20250424091458.png]]
___
### Spiegazione sulle Funzioni Caratteristiche 

#### Introduzione al Contesto e agli Esempi

Il professore introduce il concetto di funzione caratteristica riprendendo degli esempi. Viene menzionato un Esempio 1 in cui delle variabili $X_j$ sono $\text{01}$. Questo può essere immaginato come il lancio di $n$ monetine, contando il numero di successi e dividendolo per $n$ per ottenere la frequenza di successi su $n$ lanci.

Si passa poi all'Esempio 2.

#### Esempio: Somma di Variabili Casuali Poisson Indipendenti

- **Definizione e Obiettivo** Si considerano variabili casuali $X_j$ indipendenti, ognuna con il proprio parametro $\lambda_j$. L'obiettivo è calcolare la funzione caratteristica della loro somma.
    
- **Calcolo della Funzione Caratteristica della Somma (Utilizzo della proprietà del prodotto)** La funzione caratteristica della somma di variabili casuali indipendenti è il prodotto delle funzioni caratteristiche individuali. Viene ricordata (anche se con una potenziale notazione intermedia un po' confusa nella trascrizione della fonte) la forma della funzione caratteristica per una singola variabile Poisson di parametro $\lambda$: $\phi_X(t) = e^{\lambda(e^{it}-1)}$. Questa forma è presentata nella fonte come $e^{-\lambda(1-e^{it})}$ o $e^{-\lambda} e^{\lambda e^{it}}$ o ancora $e^{-\lambda + \lambda e^{it}}$.
    
- **Formule Matematiche (come presentate nella fonte, con LaTeX)** Considerando la somma, si deve fare il prodotto delle funzioni caratteristiche: $\phi_{\sum X_j}(t) = \prod_j \phi_{X_j}(t)$. Usando la forma della funzione caratteristica per ogni $X_j \sim \text{Poisson}(\lambda_j)$, che è $\phi_{X_j}(t) = e^{\lambda_j(e^{it}-1)}$, il prodotto diventa: $$ \prod_j e^{\lambda_j(e^{it}-1)} $$ Per la proprietà dell'esponenziale, il prodotto di esponenziali è l'esponenziale della somma degli esponenti: $$ \exp\left(\sum_j \lambda_j(e^{it}-1)\right) $$ Si può raccogliere il termine $(e^{it}-1)$ dalla somma: $$ \exp\left(\left(\sum_j \lambda_j\right)(e^{it}-1)\right) $$ Il professore introduce $\lambda_{barra} = \sum_j \lambda_j$. La formula ottenuta è: $$ e^{\lambda_{barra}(e^{it}-1)} $$ (Nella fonte questa viene presentata come $e^{-\lambda_{barra}(1 - e^{it})}$, che è la stessa formula).
![[Pasted image 20250424091524.png]]
- **Conclusione per la Somma di Poisson** Riconoscendo la forma della funzione caratteristica ottenuta, si conclude che essa è esattamente la funzione caratteristica di una variabile casuale Poisson con parametro $\lambda_{barra} = \sum_j \lambda_j$. Pertanto, in una riga (utilizzando il teorema di unicità della funzione caratteristica), si è dimostrato che la somma di variabili casuali Poisson indipendenti è una variabile casuale Poisson il cui parametro è la somma dei parametri individuali.
    
- **Confronto con altre Distribuzioni (Uniforme)** Viene sottolineato che questa proprietà di "stabilità" (la somma rimane nella stessa famiglia di distribuzioni) non è generale per tutte le famiglie di distribuzioni. Ad esempio, la somma di due variabili casuali Uniformi tra 0 e 1 non è una variabile casuale Uniforme.
    
- **Rilevanza (Processo di Poisson)** Questa proprietà è una delle ragioni per cui la distribuzione di Poisson è importante. Ad esempio, nel processo di Poisson, se si contano eventi indipendenti in diverse zone, la somma totale degli eventi nelle zone, ipotizzando che gli eventi in ogni singola zona seguano una distribuzione di Poisson indipendente, sarà una variabile casuale Poisson.
    

#### Studio della Funzione Caratteristica della Variabile Casuale Normale (Gaussiana)

- **Importanza** La funzione caratteristica della Gaussiana è presentata come molto importante.
    
- **Definizione e Forma della Funzione Caratteristica per $N(\mu, \sigma^2)$** Si considera una variabile casuale reale $X$ con legge Normale (o Gaussiana) di media $\mu$ e varianza $\sigma^2$. La funzione caratteristica di $X$ calcolata in $t$, denotata $\phi_X(t)$, è data da: $$ \phi_X(t) = e^{i \mu t} e^{-\frac{\sigma^2 t^2}{2}} $$ Viene fatto notare che assomiglia un po' alla funzione di densità, ma non bisogna confondere le due, poiché $\sigma$ e $\mu$ compaiono in posizioni diverse.
    
- **Relazione tra Gaussiana Generale e Gaussiana Standard ($N(0,1)$)** Si osserva che una variabile casuale Gaussiana $X \sim N(\mu, \sigma^2)$ può essere scritta come $X = \mu + \sigma X_0$, dove $X_0$ è una Gaussiana standard, $X_0 \sim N(0, 1)$. Questo deriva dal fatto che la famiglia Gaussiana è una famiglia di scala e posizione. Questo può essere verificato scrivendo la densità e riconoscendo la densità di una Gaussiana standard dopo una trasformazione lineare di scala e posizione.
    
- **Utilizzo della Gaussiana Standard per la Dimostrazione** Grazie alla proprietà che la Gaussiana è una famiglia di scala e posizione, se si conosce la funzione caratteristica della Gaussiana standard $N(0, 1)$, è sufficiente per ottenere la funzione caratteristica di qualsiasi Gaussiana generale $N(\mu, \sigma^2)$. La funzione caratteristica di $aX+b$ è $\phi_{aX+b}(t) = e^{ibt} \phi_X(at)$. Applicando questa a $X = \mu + \sigma X_0$ (con $X_0 \sim N(0,1)$), si ha: $$ \phi_X(t) = \phi_{\mu + \sigma X_0}(t) = e^{i \mu t} \phi_{X_0}(\sigma t) $$ Se si dimostra che $\phi_{X_0}(t) = e^{-t^2/2}$ per la Gaussiana standard, allora: $$ \phi_X(t) = e^{i \mu t} \phi_{X_0}(\sigma t) = e^{i \mu t} e^{-(\sigma t)^2/2} = e^{i \mu t} e^{-\frac{\sigma^2 t^2}{2}} $$ Questo è esattamente quanto si voleva dimostrare. Quindi, basta dimostrare l'espressione per una Gaussiana standard. Questa è una strategia comune: dimostrare proprietà per i parametri più comodi quando si ha una famiglia di scala e posizione. Non è applicabile, ad esempio, alla Poisson o alla Binomiale perché i loro parametri non sono di scala o posizione.
  ![[Pasted image 20250424091726.png]]
    
- **(Dimostrazione) Derivazione della Funzione Caratteristica per la Gaussiana Standard $N(0,1)$**
    
    - **Obiettivo e Metodologia (ODE)** Questa dimostrazione non è formalmente richiesta, ma usa tecniche di analisi ed equazioni differenziali ordinarie (ODE).
        
    - **Impostazione della Derivata della Funzione Caratteristica (Forma Integrale)** La funzione caratteristica di una variabile casuale con densità $f(x)$ è data dall'integrale $\int_{-\infty}^{\infty} e^{itx} f(x) dx$. Per la Gaussiana standard $X_0$, la densità è $f_{X_0}(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}$ (la costante $\frac{1}{\sqrt{2\pi}}$ è menzionata come "mi ero dimenticato $\sqrt{2\pi}$" in, suggerendo che sia stata omessa durante la derivazione). La funzione caratteristica è $\phi_{X_0}(t) = \int_{-\infty}^{\infty} e^{itx} f_{X_0}(x) dx$. Questo è anche il valore atteso di $e^{itX_0}$ dove $X_0 \sim N(0,1)$. Si calcola la derivata prima rispetto a $t$: $$ \phi'_{X_0}(t) = \frac{d}{dt} \int_{-\infty}^{\infty} e^{itx} f_{X_0}(x) dx $$ Assumendo di poter portare la derivata dentro l'integrale (è una quasi dimostrazione): $$ \phi'_{X_0}(t) = \int_{-\infty}^{\infty} \frac{d}{dt}(e^{itx}) f_{X_0}(x) dx = \int_{-\infty}^{\infty} i x e^{itx} f_{X_0}(x) dx $$ Sostituendo la densità (e omettendo temporaneamente la costante $\frac{1}{\sqrt{2\pi}}$ come fatto nella fonte per i calcoli espliciti): $$ \phi'_{X_0}(t) = \int i x e^{itx} e^{-x^2/2} dx $$
        
    - **Passaggi Matematici (Integrazione per Parti)** Si riarrangia l'integrale per applicare l'integrazione per parti $\int u dv = uv - \int v du$. Il termine $ix e^{itx} e^{-x^2/2}$ viene visto come $i \cdot e^{itx} \cdot x e^{-x^2/2}$. Si sceglie $u = e^{itx}$ e $dv = x e^{-x^2/2} dx$. Allora $du = it e^{itx} dx$. Per trovare $v$, si integra $dv$. Si nota che $x e^{-x^2/2}$ è la derivata di $-e^{-x^2/2}$ rispetto a $x$: $\frac{d}{dx}(-e^{-x^2/2}) = -(-x)e^{-x^2/2} = x e^{-x^2/2}$. Quindi $v = -e^{-x^2/2}$.
        
        L'integrale diventa, includendo l'iniziale fattore $i$ (menzionato come "davanti a tutta la parente" in): $$ \phi'_{X_0}(t) = i \left[ (e^{itx})(-e^{-x^2/2}) \Big|_{-\infty}^{\infty} - \int_{-\infty}^{\infty} (-e^{-x^2/2}) (it e^{itx}) dx \right] $$
        
    - **Termine di Bordo (valutazione a $\pm \infty$)** Il primo termine (termine di bordo $uv \big|_{-\infty}^{\infty}$) si valuta agli estremi. Poiché $e^{-x^2/2} \to 0$ sia per $x \to -\infty$ che per $x \to +\infty$, il termine di bordo è 0.
        
    - **Termine Integrale Rimanente** Il termine integrale rimanente è: $$ - \int_{-\infty}^{\infty} (-e^{-x^2/2}) (it e^{itx}) dx $$ Si semplificano i segni e si porta fuori la costante $it$: $$ = it \int_{-\infty}^{\infty} e^{itx} e^{-x^2/2} dx $$ Questo integrale, includendo la costante $\frac{1}{\sqrt{2\pi}}$ omessa nei passaggi intermedi, sarebbe $\int e^{itx} f_{X_0}(x) \sqrt{2\pi} dx$. Il professore corregge l'omissione e dice che l'integrale rimanente è la funzione caratteristica stessa.
        
    - **Risultato dell'Integrazione per Parti e Semplificazione** Combinando il fattore $i$ iniziale con il risultato dell'integrazione per parti: $$ \phi'_{X_0}(t) = i \left[ 0 - \left( it \int_{-\infty}^{\infty} e^{itx} e^{-x^2/2} dx \right) \right] $$ (Attenzione alla gestione dei segni come descritta in, "meno la derivata del primo", "meno i tivo"). Seguendo la descrizione del risultato finale in: Il termine integrale dà "- t" moltiplicato per la funzione caratteristica. Con il fattore $i$ iniziale e il $it$ dall'integrazione per parti ($i \cdot it = i^2 t = -t$), si ottiene $-t$. Il professore riassume che il risultato è "- t volte f(x) con 0 calcolata in t", dove f(x) con 0 calcolata in t è $\phi_{X_0}(t)$.
        
    - **Derivazione dell'Equazione Differenziale Ordinaria (ODE)** Il calcolo della derivata porta alla seguente equazione differenziale ordinaria (ODE): $$ \phi'_{X_0}(t) = -t \phi_{X_0}(t) $$
        
    - **Condizione Iniziale** La condizione iniziale per questa ODE è data dal valore della funzione caratteristica in $t=0$: $$ \phi_{X_0}(0) = E[e^{i \cdot 0 \cdot X_0}] = E = 1 $$ La funzione caratteristica calcolata in zero vale sempre 1.
        
    - **Soluzione dell'ODE** Questa ODE $\frac{d\phi}{dt} = -t \phi$ è di facile soluzione (a variabili separabili): $$ \frac{d\phi}{\phi} = -t , dt $$ Integrando ambo i lati: $$ \int \frac{d\phi}{\phi} = \int -t , dt $$ $$ \ln|\phi(t)| = -\frac{t^2}{2} + C $$ $$ \phi(t) = A e^{-t^2/2} $$ Utilizzando la condizione iniziale $\phi_{X_0}(0) = 1$: $$ 1 = A e^{-0^2/2} = A e^0 = A $$ Quindi $A=1$. La soluzione unica di questa ODE è: $$ \phi_{X_0}(t) = e^{-t^2/2} $$
        
    - **Formula Finale per $N(0,1)$** La funzione caratteristica della Gaussiana standard $N(0,1)$ è $e^{-t^2/2}$.
        
    - **Nota sulla Non Richiesta della Dimostrazione** Questa dimostrazione non è richiesta all'esame, ma è un esempio di applicazione dell'analisi e delle ODE. È fondamentale, invece, conoscere la definizione e la forma della funzione caratteristica di una Gaussiana e non confonderla con la densità.
        
- **Ritorno alla Gaussiana Generale (Derivazione dalla Standard)** Come visto in precedenza, conoscendo $\phi_{X_0}(t) = e^{-t^2/2}$ e usando la relazione $X = \mu + \sigma X_0$ e la proprietà $\phi_{aX+b}(t) = e^{ibt} \phi_X(at)$, si ottiene la funzione caratteristica della Gaussiana generale $N(\mu, \sigma^2)$: $$ \phi_X(t) = e^{i \mu t} \phi_{X_0}(\sigma t) = e^{i \mu t} e^{-(\sigma t)^2/2} = e^{i \mu t} e^{-\frac{\sigma^2 t^2}{2}} $$
![[Pasted image 20250424091913.png]]

#### (Proposizione) Somma di Variabili Casuali Normali Indipendenti

- **Enunciato della Proposizione** Si prendono $n$ variabili casuali Gaussiane indipendenti, $X_j \sim N(\mu_j, \sigma_j^2)$, ognuna con la propria media $\mu_j$ e varianza $\sigma_j^2$. Allora la somma $S_n = \sum_{j=1}^n X_j$ è anch'essa una variabile casuale Normale.
    
- **Risultati "Banali" (Media e Varianza della Somma)** Una parte di questo enunciato è considerata banale. La media della somma di variabili casuali (anche non indipendenti) è la somma delle medie: $E[\sum X_j] = \sum E[X_j] = \sum \mu_j$. La varianza della somma di variabili casuali _indipendenti_ è la somma delle varianze: $\text{Var}(\sum X_j) = \sum \text{Var}(X_j) = \sum \sigma_j^2$. Quindi, se si sa già che la somma è una Gaussiana, i suoi parametri (media e varianza) devono necessariamente essere la somma delle medie e la somma delle varianze.
    
- **Risultato Non Banale (La Somma Resta Gaussiana)** La parte non banale della proposizione è che quando si sommano Gaussiane indipendenti, queste sono "stabili" nel senso che la loro somma rimane una Gaussiana.
    
- **Rarità di Questa Proprietà** Viene ribadito che questa stabilità non è una proprietà comune a molte distribuzioni; accade per la Poisson e per la Gaussiana, ma non per tantissimi altri casi.
    

#### (Dimostrazione) Dimostrazione della Somma di Normali Indipendenti (Uso Funzioni Caratteristiche)

- **Vantaggio dell'Uso delle Funzioni Caratteristiche (vs Convoluzione)** Questa dimostrazione, a differenza del calcolo con la formula di convoluzione (che sarebbe complicato, anche per sole due variabili), è molto facile usando le funzioni caratteristiche.
    
- **Impostazione: Funzione Caratteristica della Somma = Prodotto delle Funzioni Caratteristiche** Per variabili casuali indipendenti, la funzione caratteristica della somma è il prodotto delle funzioni caratteristiche individuali: $$ \phi_{S_n}(t) = \phi_{\sum_{j=1}^n X_j}(t) = \prod_{j=1}^n \phi_{X_j}(t) $$
    
- **Sostituzione delle Funzioni Caratteristiche Individuali** Si sostituisce la forma della funzione caratteristica per ogni Gaussiana $X_j \sim N(\mu_j, \sigma_j^2)$, che è $\phi_{X_j}(t) = e^{i \mu_j t} e^{-\frac{\sigma_j^2 t^2}{2}}$: $$ \phi_{S_n}(t) = \prod_{j=1}^n \left(e^{i \mu_j t} e^{-\frac{\sigma_j^2 t^2}{2}}\right) $$
    
- **Sviluppo del Prodotto (Somma degli Esponenti)** Usando la proprietà $\prod e^{a_j} = e^{\sum a_j}$: $$ \phi_{S_n}(t) = \exp\left(\sum_{j=1}^n \left(i \mu_j t - \frac{\sigma_j^2 t^2}{2}\right)\right) $$
    
- **Riorganizzazione dell'Esponente** Si riorganizza la somma degli esponenti: $$ \sum_{j=1}^n i \mu_j t - \sum_{j=1}^n \frac{\sigma_j^2 t^2}{2} $$ Si raccolgono i termini comuni: $$ i t \left(\sum_{j=1}^n \mu_j\right) - \frac{t^2}{2} \left(\sum_{j=1}^n \sigma_j^2\right) $$
    
- **Formula Finale della Funzione Caratteristica della Somma** La funzione caratteristica della somma è quindi: $$ \phi_{S_n}(t) = \exp\left( i t \left(\sum_{j=1}^n \mu_j\right) - \frac{t^2}{2} \left(\sum_{j=1}^n \sigma_j^2\right) \right) $$ $$ \phi_{S_n}(t) = e^{i \left(\sum_{j=1}^n \mu_j\right) t} e^{-\frac{\left(\sum_{j=1}^n \sigma_j^2\right) t^2}{2}} $$
    
- **Riconoscimento della Forma (Funzione Caratteristica di una Gaussiana)** Guardando questa espressione, si riconosce che ha esattamente la forma della funzione caratteristica di una variabile casuale Gaussiana $e^{i \mu t} e^{-\frac{\sigma^2 t^2}{2}}$.
    
- **Parametri della Gaussiana Risultante (Media e Varianza)** Confrontando la forma ottenuta con la forma generale della funzione caratteristica Gaussiana, si deduce che la somma $S_n$ è una Gaussiana con:
    
    - Media $\mu = \sum_{j=1}^n \mu_j$
    - Varianza $\sigma^2 = \sum_{j=1}^n \sigma_j^2$
- **Nota sull'Additività delle Varianze (non degli Scarti Quadratici Medi)** Viene evidenziato che si sommano le varianze ($\sigma^2$), non gli scarti quadratici medi ($\sigma$). Viene menzionato che alcuni software statistici, come R, usano la notazione $\mu, \sigma$ invece di $\mu, \sigma^2$, quindi bisogna fare attenzione.
    
![[Pasted image 20250424092006.png]]
#### Considerazioni Finali sull'Importanza delle Funzioni Caratteristiche

- **Applicazioni alle Somme** La funzione caratteristica è molto utile nello studio delle somme di variabili casuali indipendenti.
    
- **Teorema Centrale del Limite (Cenni)** Storicamente, la funzione caratteristica ha avuto grande importanza nello studio del Teorema Centrale del Limite (TCL), che riguarda anch'esso le somme di variabili casuali.
    

#### Comunicazioni Amministrative

- **Correzione Compiti e Valutazione** Il professore ha quasi finito di correggere i compiti e non li ha trovati terribili, nonostante una valutazione "estremamente larga". Soluzioni ed esiti verranno pubblicati.
    
- **Questione Visione Scritti** Si pone la questione della visione degli scritti.
    
- **Proposta di Modalità** In accordo con un collega (Di Primio), viene suggerita una modalità: fissare un giorno, presentare prima una "zoologia" degli errori canonici (per cui magari non è necessario venire individualmente) e poi fare una coda per coloro che hanno bisogno di chiedere informazioni specifiche.
    
- **Proposta di Data** Originariamente si pensava a giovedì prossimo (settimana successiva al 16/17, quindi 23/24), ma si ipotizza che molti non siano presenti.
    
- **Valutazione di Streaming vs Presenza (Sondaggio informale)** Viene considerato di fare tutto in streaming se la presenza è minima, poiché anche per i professori è più comodo non doversi spostare apposta (il professore è di Milano e sarebbe presente, Di Primio no). Viene quindi proposto un sondaggio informale tra i presenti.
    
- **Esito del Sondaggio** Viene chiesto chi sarebbe presente il 23 o 24. L'esito informale indica che non c'è "zero" presenza, sebbene sembra che pochi abbiano alzato la mano. Si decide comunque di procedere con un sondaggio formale a questo punto.

#### References
[[Appunti Prob - 18.pdf]]


