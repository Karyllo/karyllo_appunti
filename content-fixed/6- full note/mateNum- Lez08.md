---
title: mateNum  Lez08
description: Appunto automatico
---

2025-03-06 15:28

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine]]   [[matematica numerica]]

## mateNum- Lez08

# Metodo di Richardson Stazionario Precondizionato

## Richiamo sulla Lezione Precedente

Nella lezione precedente, abbiamo introdotto il **metodo di Richardson stazionario precondizionato** e iniziato a esplorare il ruolo del **parametro di accelerazione** $\alpha$. L'obiettivo era di comprendere come questo parametro potesse influenzare la convergenza del metodo, in analogia a quanto osservato con i metodi di Jacobi e Gauss-Seidel, dove un parametro $\omega$ (simile ad $\alpha$) veniva utilizzato per accelerare la convergenza. Ricordiamo che in Jacobi e Gauss-Seidel, il parametro era fissato a uno, mentre con il metodo di Richardson stazionario precondizionato, abbiamo la libertà di scegliere $\alpha$ in modo più strategico.

## Ricerca del Parametro Ottimale $\alpha_{opt}$

Abbiamo derivato un **teorema** che, sotto l'ipotesi che la **matrice di precondizionamento** $P$ sia non singolare e che la matrice $P^{-1}A$ abbia tutti gli **autovalori reali e positivi**, ci permette di definire un **intervallo di valori ammissibili per $\alpha$** e di calcolare un **valore ottimale** $\alpha_{opt}$ per questo parametro. Questo valore ottimale è dato da:

$\qquad \alpha_{opt} = \frac{2}{\lambda_1 + \lambda_n}$

dove $\lambda_1$ e $\lambda_n$ rappresentano rispettivamente l'**autovalore massimo** e l'**autovalore minimo** della matrice $P^{-1}A$.

## Velocità di Convergenza con $\alpha_{opt}$

Successivamente, abbiamo analizzato la **velocità di convergenza** raggiungibile quando il parametro $\alpha$ è scelto uguale al suo valore ottimale $\alpha_{opt}$. La velocità di convergenza è determinata dal **raggio spettrale** $\rho(B(\alpha))$ della **matrice di iterazione** $B(\alpha) = I - \alpha P^{-1}A$. Gli autovalori di $B(\alpha)$ sono dati da $1 - \alpha \lambda_i$, dove $\lambda_i$ sono gli autovalori di $P^{-1}A$. Pertanto, quando $\alpha = \alpha_{opt}$, il raggio spettrale $\rho(B(\alpha_{opt}))$ è il massimo modulo degli autovalori $1 - \alpha_{opt} \lambda_i$.

Considerando che gli autovalori $\lambda_i$ sono reali e positivi, il valore massimo di $|1 - \alpha_{opt} \lambda_i|$ si ottiene per l'autovalore più piccolo $\lambda_n$ (poiché $\alpha_{opt}$ è positivo). Quindi, la velocità di convergenza è data da:

$\qquad \rho(B(\alpha_{opt})) = |1 - \alpha_{opt} \lambda_n| = \left|1 - \frac{2}{\lambda_1 + \lambda_n} \lambda_n\right|$

Semplificando l'espressione:

$\qquad \rho(B(\alpha_{opt})) = \left|\frac{\lambda_1 + \lambda_n - 2\lambda_n}{\lambda_1 + \lambda_n}\right| = \left|\frac{\lambda_1 - \lambda_n}{\lambda_1 + \lambda_n}\right|$

Poiché $\lambda_1 \ge \lambda_n > 0$, l'espressione è sempre non negativa, quindi:

$\qquad \rho(B(\alpha_{opt})) = \frac{\lambda_1 - \lambda_n}{\lambda_1 + \lambda_n}$

Questo risultato è importante perché ci permette di **quantificare teoricamente** la velocità di convergenza del metodo di Richardson stazionario precondizionato quando si utilizza il parametro ottimale $\alpha_{opt}$, una volta che conosciamo gli autovalori estremi di $P^{-1}A$.

## Caso Particolare: $P^{-1}A$ Simmetrica Definita Positiva (SDP)

Facciamo ora un'osservazione importante: se la matrice $P^{-1}A$ è **simmetrica definita positiva (SDP)**, questo rappresenta un **sottocaso particolare** del teorema precedentemente enunciato, in quanto una matrice SDP ha tutti gli autovalori reali e positivi.

In questo caso, possiamo introdurre il concetto di **numero di condizionamento** rispetto alla norma spettrale 2, denotato come $K_2(M)$ per una generica matrice $M$. Per una matrice SDP come $P^{-1}A$, il numero di condizionamento $K_2(P^{-1}A)$ è dato dal rapporto tra l'autovalore massimo e l'autovalore minimo:

$\qquad K_2(P^{-1}A) = \frac{\lambda_1}{\lambda_n}$

Utilizzando questa definizione, possiamo riscrivere la velocità di convergenza $\rho(B(\alpha_{opt}))$ in termini del numero di condizionamento di $P^{-1}A$:

$\qquad \rho(B(\alpha_{opt})) = \frac{\lambda_1 - \lambda_n}{\lambda_1 + \lambda_n} = \frac{\frac{\lambda_1}{\lambda_n} - 1}{\frac{\lambda_1}{\lambda_n} + 1} = \frac{K_2(P^{-1}A) - 1}{K_2(P^{-1}A) + 1}$

Questo risultato evidenzia un **ruolo cruciale della matrice di precondizionamento $P$**: oltre a dover essere invertibile e "facile" da usare, il suo compito principale è quello di **migliorare il condizionamento** della matrice $A$, ovvero rendere il numero di condizionamento $K_2(P^{-1}A)$ il più piccolo possibile. Un valore di $K_2(P^{-1}A)$ vicino a 1 implica una velocità di convergenza $\rho(B(\alpha_{opt}))$ vicina a 0, che è desiderabile per una rapida convergenza.

Il professore sottolinea che, a differenza della scelta del parametro $\alpha$ per cui esistono delle "ricette" anche in modalità dinamica, **non esiste una ricetta ottimale universale per il precondizionatore $P$**. La scelta del precondizionatore è spesso dipendente dal problema specifico.

## Caso di Richardson Stazionario Non Precondizionato

Consideriamo ora il caso in cui **non si utilizzi un precondizionatore**, ovvero $P = I$. In questo scenario, il metodo di Richardson stazionario non precondizionato si applica direttamente alla matrice $A$.

Supponiamo che la matrice $A$ sia **simmetrica definita positiva (SDP)** e abbia autovalori reali e positivi $0 < \lambda_n \le \dots \le \lambda_1$. In questo caso, il metodo di Richardson stazionario non precondizionato con un parametro $\alpha$ scelto opportunamente, ad esempio nell'intervallo $(0, \frac{2}{\lambda_1})$, converge.

Inoltre, si può derivare una stima per l'errore all'iterata $k$-esima, misurato nella **norma A** (o norma in energia) definita per un vettore $z \in \mathbb{R}^n$ come $|z|_A^2 = z^T A z$. La stima è data da:

$\qquad |e^{(k)}|_A \le \rho(B(\alpha)) |e^{(k-1)}|_A$

dove $e^{(k)} = x^* - x^{(k)}$ è l'errore all'iterata $k$-esima e $B(\alpha) = I - \alpha A$ è la matrice di iterazione. Iterando questa relazione, si ottiene:

$\qquad |e^{(k)}|_A \le \rho(B(\alpha))^k |e^{(0)}|_A$

Se si sceglie il **parametro ottimale** per il caso non precondizionato, che è $\alpha_{opt} = \frac{2}{\lambda_1 + \lambda_n}$ (analogamente al caso precondizionato ma applicato ad $A$ invece di $P^{-1}A$), il raggio spettrale diventa:

$\qquad \rho(B(\alpha_{opt})) = \frac{\lambda_1 - \lambda_n}{\lambda_1 + \lambda_n} = \frac{K_2(A) - 1}{K_2(A) + 1}$

dove $K_2(A) = \frac{\lambda_1}{\lambda_n}$ è il numero di condizionamento di $A$ rispetto alla norma 2.

La **norma A** è una norma **dipendente dal problema** (dalla matrice $A$) e rappresenta una sorta di "cambio di metrica" in cui la valutazione degli errori è adattata specificamente al sistema che stiamo risolvendo. Questa norma è anche detta **norma in energia** e trova applicazioni, ad esempio, nell'analisi di sistemi fisici come le strutture elastiche, dove è legata all'energia associata all'equilibrio del sistema.

## Algoritmo di Richardson Stazionario Precondizionato

Il professore ha quindi descritto i **passaggi fondamentali** dell'algoritmo di Richardson stazionario precondizionato:

**Input:**

- Guess iniziale $x_0$.
- Parametro di accelerazione $\alpha$ (idealmente $\alpha_{opt}$).
- Matrice di precondizionamento $P$.

**Passaggi:**

1. Calcolare il **residuo iniziale** $r_0 = b - Ax_0$.
2. Iniziare un **ciclo iterativo** (ad esempio, un ciclo `while` basato su un criterio di convergenza).
3. Ad ogni iterazione $k$ (partendo da $k=0$):
    - Risolvere il sistema **precondizionato** $Pz_k = r_k$ per ottenere il **residuo precondizionato** $z_k$.
    - **Aggiornare la soluzione corrente:** $x_{k+1} = x_k + \alpha z_k$.
    - **Aggiornare il residuo:** $r_{k+1} = b - Ax_{k+1}$.

Per l'aggiornamento del residuo, esiste una **formula ricorsiva** più efficiente dal punto di vista computazionale:

$\qquad r_{k+1} = b - A(x_k + \alpha z_k) = (b - Ax_k) - \alpha Az_k = r_k - \alpha Az_k$

Quindi, ad ogni iterazione, invece di ricalcolare $b - Ax_{k+1}$ da zero, si aggiorna il residuo utilizzando il residuo precedente e il residuo precondizionato $z_k$ moltiplicato per $A$ e per $-\alpha$.

## Costo Computazionale e Scelta tra Metodo Stazionario e Dinamico

Infine, il professore ha discusso brevemente il **costo computazionale** associato alla scelta del parametro $\alpha$ ottimale nel metodo stazionario e ha introdotto una riflessione sul confronto con i metodi dinamici.

Mentre in un **metodo stazionario** il parametro $\alpha$ viene calcolato **una sola volta**, il calcolo di $\alpha_{opt} = \frac{2}{\lambda_1 + \lambda_n}$ richiede la conoscenza (o l'approssimazione) degli autovalori massimo $\lambda_1$ e minimo $\lambda_n$ della matrice $P^{-1}A$ (o di $A$ nel caso non precondizionato). Se la matrice $A$ è di grandi dimensioni (ad esempio, $10000 \times 10000$), calcolare tutti gli autovalori sarebbe proibitivo.

Tuttavia, esistono **metodi numerici specializzati** per approssimare **solo l'autovalore massimo e il corrispondente autovettore**, o **solo l'autovalore minimo e il corrispondente autovettore**, senza dover calcolare l'intero spettro della matrice. Questo rende il calcolo (o l'approssimazione) di $\alpha_{opt}$ potenzialmente fattibile anche per problemi di grandi dimensioni.

Il professore ha anticipato che nei **metodi di Richardson dinamici**, il parametro di accelerazione $\alpha$ (o $\alpha_k$ per indicare la sua dipendenza dall'iterazione $k$) viene **aggiornato ad ogni iterazione**. Sebbene questo approccio possa offrire una maggiore flessibilità nell'adattare il parametro all'evoluzione della soluzione, è necessario considerare il **costo computazionale** di questo aggiornamento ad ogni passo. Al momento, non sappiamo ancora quanto costerà calcolare $\alpha_k$ nel caso dinamico, ma è un aspetto importante da tenere in considerazione nel confronto tra i due approcci (stazionario e dinamico). La scelta tra un metodo stazionario con un $\alpha_{opt}$ calcolato una volta e un metodo dinamico con $\alpha_k$ variabile dipende quindi da diversi fattori, tra cui l'efficacia del metodo dinamico nel migliorare la convergenza e il costo computazionale associato all'aggiornamento del parametro.
___

Certamente, ecco la spiegazione del professore riguardo alle flashcard, integrata con i passaggi matematici, gli esempi e i commenti, formattata come richiesto:

# Metodi Iterativi per la Risoluzione di Sistemi Lineari

## Algoritmo di Richardson Stazionario Precondizionato

Il professore inizia accennando all'algoritmo di Richardson stazionario precondizionato. L'aggiornamento del residuo avviene in un modo specifico, indicato nel testo con un "così", la cui forma esatta non è riportata nell'estratto fornito.

Viene poi suggerita una possibile ottimizzazione: eseguire una volta per tutte la **fattorizzazione LUD della matrice di precondizionamento $P$**. In questo modo, il passaggio di risoluzione con $P^{-1}$ si trasformerebbe in due schemi di **sostituzioni in avanti e all'indietro**, che sono computazionalmente più efficienti. Tuttavia, il professore specifica che questi sono dettagli più approfonditi e che per una comprensione di base è sufficiente considerare che ad ogni iterazione è presente un'operazione di risoluzione con la matrice di precondizionamento $P$.

## Metodo di Richardson Dinamico (Non Precondizionato)

Il professore introduce quindi il **metodo di Richardson dinamico** partendo dal caso **non precondizionato**.

### Schema Iterativo

Lo schema iterativo generico per il metodo di Richardson dinamico non precondizionato è dato da:

$x_{k+1} = x_k + \alpha_k z_k$

dove in questo caso, poiché non c'è precondizionamento ($P = I$, la matrice identità), si ha $z_k = r_k$, con $r_k$ che rappresenta il residuo alla $k$-esima iterazione. Quindi lo schema diventa:

$x_{k+1} = x_k + \alpha_k r_k$

Qui, $\alpha_k$ è un **parametro di accelerazione** che può variare ad ogni iterazione (da cui "dinamico").

### Scelta Ottimale del Parametro $\alpha_k$

Il professore afferma che esiste una **ricetta ottimale per il parametro $\alpha_k$**, che viene fornita come:

$\alpha_k = \frac{r_k^T r_k}{r_k^T A r_k}$

dove:

- $r_k^T$ è il trasposto del residuo alla $k$-esima iterazione.
- $r_k$ è il residuo alla $k$-esima iterazione (un vettore di dimensione $n \times 1$).
- $A$ è la matrice dei coefficienti del sistema lineare.

Il numeratore $r_k^T r_k$ è il **prodotto scalare** del residuo con se stesso (la norma euclidea al quadrato del residuo), che risulta essere un **numero** (dimensione $1 \times n \cdot n \times 1 = 1 \times 1$).

Il denominatore $r_k^T A r_k$ è anch'esso un **numero** (dimensione $1 \times n \cdot n \times n \cdot n \times 1 = 1 \times 1$).

### Relazione con il Metodo del Gradiente

Il professore sottolinea che per questa scelta ottimale di $\alpha_k$ e in assenza di precondizionatore, il metodo di Richardson dinamico si identifica con un metodo molto noto in letteratura: il **metodo del gradiente**.

Il metodo del gradiente è caratterizzato dall'avere come unica "carta da giocare" la **scelta ottimale del parametro $\alpha$**. Questa scelta di $\alpha_k$ è quella che **massimizza la velocità di convergenza** del metodo.

### Costo Computazionale di $\alpha_k$

Viene poi discussa la **costosità del calcolo di $\alpha_k$** ad ogni iterazione. Il professore fa notare che, a differenza dell'$\alpha$ stazionario che richiedeva la stima di autovalori (come $\lambda_1$ e $\lambda_n$ che potrebbero non essere facilmente accessibili), l'$\alpha_k$ ottimale dipende dal **residuo $r_k$**, che è una quantità **già calcolata** all'interno dell'algoritmo per definire l'aggiornamento $x_{k+1}$. Pertanto, il calcolo di $\alpha_k$ non introduce un costo computazionale aggiuntivo significativo, poiché le quantità necessarie sono già disponibili.

## Interpretazione Geometrica e Derivazione dell'$\alpha_k$ Ottimale: Connessione con l'Ottimizzazione

Per fornire un'interpretazione geometrica del metodo del gradiente e per derivare l'espressione ottimale di $\alpha_k$, il professore introduce un **lemma di equivalenza**.

### Lemma di Equivalenza

Il lemma si basa sull'ipotesi che la **matrice dei coefficienti $A$ sia simmetrica definita positiva (SDP)**. Questa è un'ipotesi fondamentale per la validità del metodo del gradiente nella sua forma standard.

Sotto questa ipotesi, il lemma afferma che **risolvere il sistema lineare $Ax = b$ è equivalente a risolvere un problema di minimo**:

$\min_{y \in \mathbb{R}^n} \phi(y)$

dove $\phi(y)$ è la **funzione energia del sistema**, definita come una **forma quadratica**:

$\phi(y) = \frac{1}{2} y^T A y - y^T b$

La soluzione $x$ del sistema lineare è l'argomento che realizza il minimo di questa funzione, ovvero $x = \text{argmin}_{y} \phi(y)$. In altre parole, il vettore $x$ che risolve $Ax = b$ è lo stesso vettore $x$ che rende minima la funzione $\phi(y)$.

### Interpretazione Geometrica della Funzione Energia

![[energy_bowl_surface_transparent.png|200]]
In **due dimensioni** (se $y = [y_1, y_2]^T$), la funzione energia $\phi(y)$ rappresenta geometricamente un **paraboloide**, una superficie a forma di "scodella". La soluzione $x = [x_1, x_2]^T$ del sistema lineare corrisponde al **punto di minimo di questa scodella**.

Per dimensioni superiori, la funzione energia è una generalizzazione di questo paraboloide in più dimensioni.

### Gradiente della Funzione Energia

Il professore calcola il **gradiente della funzione energia $\phi(y)$**:

$\nabla \phi(y) = \frac{1}{2} (A + A^T) y - b$

Sfruttando l'ipotesi che **$A$ è simmetrica** ($A^T = A$), l'espressione si semplifica a:

$\nabla \phi(y) = A y - b$

Il professore fa notare che questa espressione è strettamente legata al **residuo** $r = b - Ay$. Infatti, $\nabla \phi(y) = -(b - Ay) = -r$.

### Dimostrazione dell'Equivalenza

Viene dimostrata l'equivalenza tra la risoluzione del sistema lineare e la minimizzazione della funzione energia in entrambe le direzioni.

#### Da Minimo a Soluzione ($argmin \implies Ax = b$)

Se $x$ realizza il minimo di $\phi(y)$, allora il **gradiente di $f$ valutato in $x$ deve essere nullo**:

$\nabla \phi(x) = 0$

Sostituendo l'espressione del gradiente, si ottiene:

$A x - b = 0$

Da cui:

$A x = b$

Questo dimostra che se $x$ minimizza $\phi(y)$, allora $x$ è una soluzione del sistema lineare.

#### Da Soluzione a Minimo ($Ax = b \implies argmin$)

Per dimostrare l'implicazione opposta, si considera l'espansione di Taylor di $\phi(x + y)$ intorno a $x$:

$\phi(x + y) = \phi(x) + \nabla \phi(x)^T y + \frac{1}{2} y^T H_\phi(x) y + \text{termini di ordine superiore}$

dove $H_\phi(x)$ è la matrice Hessiana di $f$ valutata in $x$. Per la funzione quadratica $\phi(y) = \frac{1}{2} y^T A y - y^T b$, la matrice Hessiana è semplicemente $A$. Quindi l'espansione si riduce a:

$\phi(x + y) = \phi(x) + \nabla \phi(x)^T y + \frac{1}{2} y^T A y$

Se $x$ è la soluzione del sistema $Ax = b$, allora $\nabla \phi(x) = Ax - b = 0$. Sostituendo questo nell'espansione di Taylor, si ottiene:

$\phi(x + y) = \phi(x) + 0^T y + \frac{1}{2} y^T A y = \phi(x) + \frac{1}{2} y^T A y$

Poiché $A$ è **definita positiva**, per ogni $y \neq 0$, si ha $y^T A y > 0$. Pertanto:

$\phi(x + y) > \phi(x) \quad \text{per ogni } y \neq 0$

Questo dimostra che se $x$ è la soluzione di $Ax = b$, allora $x$ è il punto in cui la funzione energia $\phi(y)$ assume il suo valore minimo.

## Interpretazione Geometrica come Metodo di Discesa Ripida (Steepest Descent)
![[Pasted image 20250326101833.png|300]]
Il professore utilizza l'analogia di una persona in montagna (la cui altitudine è rappresentata dalla funzione energia) con una fitta nebbia che vuole tornare alla macchina in fondo alla valle (il minimo della funzione energia, la soluzione del sistema). La posizione attuale è $x_k$, e si vuole determinare la prossima posizione $x_{k+1}$.

La strategia è di muoversi nella direzione di **massima pendenza negativa** (la discesa più ripida). La direzione di massima pendenza è data dal **gradiente** $\nabla \phi(x_k)$, che punta nella direzione di aumento più rapido della funzione . Pertanto, la direzione di discesa più ripida è **$-\nabla \phi(x_k)$** .

Ricordando che $\nabla \phi(x_k) = Ax_k - b = -r_k$, la **direzione di discesa** $\delta(x_k)$ è data da :

$\delta(x_k) = -\nabla \phi(x_k) = - (Ax_k - b) = b - Ax_k = r_k$

Quindi, nel metodo del gradiente, la direzione di movimento ad ogni iterazione è proprio il **residuo** .

La nuova posizione $x_{k+1}$ sarà data da :

$x_{k+1} = x_k + \gamma_k \delta(x_k) = x_k + \gamma_k r_k$

dove $\gamma_k$ è la **lunghezza del passo** da compiere lungo la direzione $r_k$ . Questo $\gamma_k$ corrisponde al nostro $\alpha_k$.

### Scelta Ottimale della Lunghezza del Passo $\gamma_k$

Per trovare la lunghezza del passo ottimale $\gamma_k$, si vuole **minimizzare la funzione energia lungo la direzione di discesa** . Si considera quindi la funzione $g(\gamma_k) = \phi(x_k + \gamma_k r_k)$, che rappresenta il valore della funzione energia spostandosi di un passo $\gamma_k$ nella direzione $r_k$ a partire da $x_k$ .

Utilizzando l'espansione di Taylor di $\phi(x + y)$ con $x = x_k$ e $y = \gamma_k r_k$, si ottiene :

$$\phi(x_k + \gamma_k r_k) = \phi(x_k) + \nabla \phi(x_k)^T (\gamma_k r_k) + \frac{1}{2} (\gamma_k r_k)^T A (\gamma_k r_k)$$

$$g(\gamma_k) = \phi(x_k) - r_k^T (\gamma_k r_k) + \frac{1}{2} \gamma_k^2 r_k^T A r_k$$

$$g(\gamma_k) = \phi(x_k) - \gamma_k (r_k^T r_k) + \frac{1}{2} \gamma_k^2 (r_k^T A r_k)$$

Per trovare il valore di $\gamma_k$ che minimizza $g(\gamma_k)$, si calcola la **derivata di $g$ rispetto a $\gamma_k$ e si pone uguale a zero** :

$$g'(\gamma_k) = -\frac{d}{d\gamma_k} (\gamma_k (r_k^T r_k)) + \frac{d}{d\gamma_k} (\frac{1}{2} \gamma_k^2 (r_k^T A r_k))$$

$$g'(\gamma_k) = -(r_k^T r_k) + \gamma_k (r_k^T A r_k)$$

Imponendo $g'(\gamma_k) = 0$ per trovare il $\gamma_k$ ottimale ($\gamma_k^{opt}$):

$$-(r_k^T r_k) + \gamma_k^{opt} (r_k^T A r_k) = 0$$

$$\gamma_k^{opt} (r_k^T A r_k) = r_k^T r_k$$

$$\gamma_k^{opt} = \frac{r_k^T r_k}{r_k^T A r_k}$$

Questo $\gamma_k^{opt}$ è esattamente l'**$\alpha_k$ ottimale** derivato precedentemente per il metodo di Richardson dinamico . Questo conferma che il metodo del gradiente utilizza ad ogni passo la lunghezza del passo ottimale lungo la direzione del residuo (che è la direzione di discesa più ripida della funzione energia).

___

## Convergenza del Metodo del Gradiente Non Precondizionato

Il professore introduce lo studio della convergenza del metodo del gradiente non precondizionato, sottolineando l'importanza dell'ipotesi che la matrice $A$ sia simmetrica definita positiva (SDP). Applicare il metodo del gradiente a una matrice non SDP non è consentito.

### Confronto con Metodi Iterativi Classici (Jacobi e Gauss-Seidel)

Viene proposto un confronto tra il metodo del gradiente non precondizionato e i metodi di Jacobi e Gauss-Seidel su un sistema lineare piccolo:

$2x_1 + x_2 = 1$ $x_1 + 3x_2 = 0$

La cui matrice è $A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$, che è SDP. La soluzione esatta è $x = \begin{pmatrix} 3/5 \\ -1/5 \end{pmatrix}$.

Si discute l'andamento dell'errore  in scala logaritmica rispetto al numero di iterazioni per i tre metodi. L'obiettivo è confrontare la velocità di convergenza.

#### Velocità di Convergenza Empirica
![[convergence_methods_log_scale.png|300|]]
Si prevede che, per questo sistema, il gradiente converga più rapidamente di Gauss-Seidel, che a sua volta converga più rapidamente di Jacobi. Questo si visualizza concettualmente con grafici dell'accuratezza (es. $10^{-qualcosa}$) in funzione del numero di iterazioni. Curve più ripide indicano una convergenza più rapida.

- **Jacobi:** Convergenza più lenta (retta meno inclinata nel grafico concettuale).
- **Gauss-Seidel:** Convergenza intermedia (retta con inclinazione maggiore di Jacobi).
- **Gradiente:** Convergenza più rapida (retta con inclinazione maggiore di Gauss-Seidel).

Questi grafici possono essere usati per:

- Fissare un'accuratezza e determinare il numero di iterazioni richieste da ciascun metodo.
- Fissare un numero di iterazioni e confrontare l'accuratezza ottenuta da ciascun metodo.

Il professore menziona che il grafico corretto è disponibile sul libro e sottolinea l'importanza di usare una scala logaritmica per visualizzare l'ordine di convergenza come l'inclinazione della retta.

### Verifica della Convergenza

Per verificare formalmente la convergenza, si confronta il valore della funzione obiettivo $\phi(x)$ all'iterata $k+1$ con quella all'iterata $k$. Si desidera che $\phi(x_{k+1}) < \phi(x_k)$, indicando che ci si sta muovendo verso il minimo.

Partendo da $x_{k+1} = x_k + \alpha_k r_k$ (notare il segno positivo qui, il professore usa $+ \alpha_k r_k$ nel derivare, considerando $r_k = b - Ax_k$, quindi la direzione di ricerca è $r_k$), e sostituendo l'espressione per $\alpha_k$ ottimo, si ottiene:

$$\phi(x_{k+1}) = \phi(x_k) - \alpha_k |r_k|_2^2 + \frac{1}{2} \alpha_k^2 r_k^T A r_k$$

Sostituendo $\alpha_k = \frac{r_k^T r_k}{r_k^T A r_k} = \frac{|r_k|_2^2}{r_k^T A r_k}$:

$$\phi(x_{k+1}) = \phi(x_k) - \frac{|r_k|_2^4}{r_k^T A r_k} + \frac{1}{2} \left(\frac{|r_k|_2^2}{r_k^T A r_k}\right)^2 r_k^T A r_k$$

$$\phi(x_{k+1}) = \phi(x_k) - \frac{|r_k|_2^4}{r_k^T A r_k} + \frac{1}{2} \frac{|r_k|_2^4}{(r_k^T A r_k)^2} r_k^T A r_k$$

$$\phi(x_{k+1}) = \phi(x_k) - \frac{|r_k|_2^4}{r_k^T A r_k} + \frac{1}{2} \frac{|r_k|_2^4}{r_k^T A r_k}$$

$$\phi(x_{k+1}) = \phi(x_k) - \frac{1}{2} \frac{|r_k|_2^4}{r_k^T A r_k}$$

Poiché $A$ è SDP, $r_k^T A r_k > 0$ per $r_k \neq 0$, e $|r_k|_2^4 \ge 0$. Pertanto, $$\phi(x_{k+1}) \le \phi(x_k)$$, e se $r_k \neq 0$, allora $\phi(x_{k+1}) < \phi(x_k)$, dimostrando che il valore della funzione obiettivo diminuisce ad ogni iterazione, indicando la convergenza verso il minimo.

### Tasso di Convergenza

Il teorema sulla convergenza del gradiente non precondizionato stabilisce una relazione tra l'errore all'iterata $k+1$ e l'errore all'iterata $k$, misurati nella norma in energia $|e|_A = \sqrt{e^T A e}$, dove $e = x - x^k$ è l'errore e $x^k$ è la soluzione esatta:

$|e_{k+1}|_A^2 \le \left( \frac{\kappa(A) - 1}{\kappa(A) + 1} \right)^2 |e_k|_A^2$

dove $\kappa(A) = \frac{\lambda_{max}(A)}{\lambda_{min}(A)}$ è il numero di condizionamento della matrice $A$. Un numero di condizionamento elevato può portare a una convergenza lenta, e in questo caso, non ci sono gradi di libertà per migliorare la situazione nel metodo del gradiente non precondizionato, poiché il passo $\alpha_k$ è scelto in modo ottimale.

## Il Metodo del Gradiente Precondizionato

Per accelerare la convergenza, specialmente quando la matrice $A$ ha un elevato numero di condizionamento, si introduce il precondizionamento. L'idea è di trasformare il sistema originale $Ax = b$ in un sistema equivalente con una matrice il cui numero di condizionamento sia più piccolo.

### Algoritmo del Gradiente Precondizionato

L'algoritmo del gradiente precondizionato, con un precondizionatore $P$ (simmetrico e definito positivo), procede come segue:

1. Scegli un punto iniziale $x_0$.
2. Calcola il residuo iniziale $r_0 = b - Ax_0$.
3. Per $k = 0, 1, 2, \dots$ fino a convergenza: a. Risolvi il sistema precondizionato $P z_k = r_k$ per $z_k$. b. Calcola il passo ottimale $\alpha_k^{pre}$ (diverso dall'$\alpha_k$ non precondizionato): $\alpha_k^{pre} = \frac{z_k^T r_k}{z_k^T A z_k}$ c. Aggiorna la soluzione: $x_{k+1} = x_k + \alpha_k^{pre} z_k$ d. Aggiorna il residuo: $r_{k+1} = r_k - \alpha_k^{pre} A z_k$

Il professore sottolinea che se il precondizionatore $P$ fosse la matrice identità $I$, l'algoritmo si ridurrebbe al metodo del gradiente non precondizionato. Inoltre, questo algoritmo generalizza anche il metodo di Richardson stazionario, precondizionato e non precondizionato, a seconda di come viene scelto e utilizzato $\alpha$ (se costante o variabile) e se $P$ è l'identità o un altro precondizionatore.

### Tasso di Convergenza del Gradiente Precondizionato

Il teorema sulla convergenza del gradiente precondizionato afferma che:

$|e_{k+1}|_{A}^2 \le \left( \frac{\kappa(P^{-1}A) - 1}{\kappa(P^{-1}A) + 1} \right)^2 |e_k|_{A}^2$

dove $\kappa(P^{-1}A)$ è il numero di condizionamento della matrice precondizionata $P^{-1}A$. La scelta di un buon precondizionatore $P$ mira a ridurre $\kappa(P^{-1}A)$, migliorando così il tasso di convergenza.

### Osservazioni Finali

Il professore conclude suggerendo di utilizzare sempre valori ottimali per i parametri (come $\alpha_k$) e di attivare un precondizionatore quando possibile per migliorare l'efficienza dei metodi iterativi.

#### References
[[Appunti Mate Num- lez08.pdf]]


