---
title: "matenum-lab05"
---

2025-03-24 09:12

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## matenum-lab05
## Laboratorio sui Metodi Iterativi e Visualizzazione di Convergenza

### Scopo del Laboratorio

L'obiettivo principale di questo laboratorio è **visualizzare concettualmente** ciò che è stato appreso riguardo alla risoluzione di sistemi lineari del tipo $Ax = b$ attraverso metodi iterativi. In particolare, si vuole mostrare la connessione tra la risoluzione del sistema lineare e la **minimizzazione di una forma quadratica** associata.

### Equivalenza tra Sistemi Lineari e Minimizzazione di una Forma Quadratica

Data una matrice $A$ simmetrica e definita positiva, la risoluzione del sistema lineare $Ax = b$ è **equivalente** alla ricerca del minimo della forma quadratica $f(x)$ definita come:

$$ \phi(x) = \frac{1}{2} x^T A x - x^T b $$

Dove $x$ è un vettore colonna. **Lo scopo del laboratorio è visualizzare questo concetto**, immaginando di costruire il **paraboloide** rappresentato da questa funzione quadratica nello spazio. Il punto di minimo di questo paraboloide corrisponde alla soluzione del sistema lineare $Ax = b$. I metodi iterativi, partendo da un punto iniziale $X_0$, cercano di trovare la "strada ottimale" per raggiungere questo punto di minimo.

### Passaggi per la Visualizzazione del Paraboloide

Per visualizzare questo paraboloide, è necessario seguire alcuni passaggi:
![[Pasted image 20250324093213.png|200]]
#### 1. Discretizzazione del Dominio

Poiché non è possibile lavorare con un dominio continuo in $\mathbb{R}^2$ (assumendo $x = [x, y]^T$), è necessario **discretizzare** le coordinate $x$ e $y$ all'interno di un intervallo specificato (ad esempio, da -10 a 10 per entrambe le variabili). Questo significa selezionare un insieme finito di punti $x_i$ e $y_j$ all'interno di questi intervalli con un certo passo.

#### 2. Creazione della Griglia (Prodotto Cartesiano)
![[Pasted image 20250324093259.png|200]]
Una volta definiti i vettori contenenti i punti discreti per $x$ ($x_h$) e $y$ ($y_h$), è necessario creare il **prodotto cartesiano** tra questi due insiemi per ottenere tutte le coppie $(x_i, y_j)$ che definiscono i punti sul piano $xy$ dove verrà disegnato il paraboloide. In MATLAB, questo si realizza con il comando `meshgrid`:

```
[X, Y] = meshgrid(xh, yh);
```

Questo comando prende in input i vettori $x_h$ e $y_h$ e restituisce due matrici $X$ e $Y$ che rappresentano le coordinate $x$ e $y$ di una griglia nel piano.

#### 3. Calcolo della Quota Z

Per ogni punto $(x, y)$ della griglia creata, è necessario calcolare il valore corrispondente sulla "quota" $z$, che in questo caso è dato dal valore della funzione quadratica $f(x, y)$. Utilizzando la notazione del professore, se $X$ e $Y$ sono le matrici generate da `meshgrid`, la matrice $Z$ dei valori della funzione può essere calcolata (element-wise) in base alla forma quadratica:
![[Pasted image 20250324093931.png|400]]

$$ Z = \frac{1}{2} X^T A X - X^T B $$

**Attenzione**: Come specificato dal professore, se $x = \begin{bmatrix} x \ y \end{bmatrix}$, allora $X$ e $Y$ rappresentano le coordinate sulla griglia. La formula va interpretata tenendo conto che per ogni punto della griglia $(X_{ij}, Y_{ij})$, si calcola il valore di $\phi(\begin{bmatrix} X_{ij} \ Y_{ij} \end{bmatrix})$. In termini di componenti, se $A = \begin{bmatrix} A_{11} & A_{12} \ A_{21} & A_{22} \end{bmatrix}$, $X$ rappresenta la coordinata $x$, $Y$ la coordinata $y$, e $B = \begin{bmatrix} b_1 \ b_2 \end{bmatrix}$, allora per ogni punto $(x, y)$ della griglia:

$$ \phi(x, y) = \frac{1}{2} \begin{bmatrix} x & y \end{bmatrix} \begin{bmatrix} A_{11} & A_{12} \ A_{21} & A_{22} \end{bmatrix} \begin{bmatrix} x \ y \end{bmatrix} - \begin{bmatrix} x & y \end{bmatrix} \begin{bmatrix} b_1 \ b_2 \end{bmatrix} $$

$$ \phi(x, y) = \frac{1}{2} (A_{11}x^2 + A_{12}xy + A_{21}yx + A_{22}y^2) - (xb_1 + yb_2) $$

Poiché $A$ è simmetrica ($A_{12} = A_{21}$), si ha:

$$ \phi(x, y) = \frac{1}{2} (A_{11}x^2 + 2A_{12}xy + A_{22}y^2) - (xb_1 + yb_2) $$

In MATLAB, questo calcolo va effettuato **element-wise** sulle matrici $X$ e $Y$ generate da `meshgrid`. È importante definire correttamente la matrice $A$ e il vettore $B$ per il sistema lineare che si vuole studiare.

#### 4. Visualizzazione

Una volta ottenute le matrici $X$, $Y$, e $Z$, si possono utilizzare i comandi MATLAB per la visualizzazione:

- `surf(X, Y, Z)`: per disegnare la **superficie** del paraboloide nello spazio 3D.
- `contour(X, Y, Z)`: per disegnare le **linee di livello** (proiezioni sul piano $xy$ delle curve di intersezione del paraboloide con piani orizzontali $z = costante$).
- `contour3(X, Y, Z)`: per disegnare le linee di livello direttamente nello spazio 3D (menzionato ma non approfondito).

### Visualizzazione delle Iterazioni dei Metodi

Oltre a visualizzare il paraboloide, l'obiettivo è anche mostrare come i **metodi iterativi** si muovono sulla superficie o sulle linee di livello durante il processo di convergenza alla soluzione. A questo scopo, sono disponibili su WIVIP delle funzioni che, oltre alla soluzione finale, restituiscono **la storia di tutte le iterazioni** (la sequenza dei punti $X_0, X_1, X_2, ..., X_k$ ). Queste funzioni includono:

- `gradiente coniugato`
- `gradiente classico`
- `Richardson iterate`

Per visualizzare le iterazioni su un grafico esistente (ad esempio, le linee di livello), è necessario plottare la sequenza dei punti ottenuti da queste funzioni. Se la storia delle iterazioni restituita è una matrice dove ogni colonna rappresenta un'iterazione e le righe rappresentano le componenti (ad esempio, $x$ e $y$), si può plottare la prima riga (le coordinate $x$ delle iterazioni) contro la seconda riga (le coordinate $y$ delle iterazioni).

### Correzione del Primo Esercizio

Durante la correzione del primo esercizio, il professore ha sottolineato l'importanza di alcune nozioni grafiche in MATLAB:

- **`subplot(m, n, p)`**: Questo comando permette di **dividere la finestra corrente in una griglia di $m$ righe e $n$ colonne di sottofigure** e di rendere attiva la sottofigura numero $p$ (che si conta per righe, da sinistra a destra e dall'alto in basso). È fondamentale consultare l'help di MATLAB per comprenderne appieno il funzionamento.
- **Accesso alle componenti delle iterazioni**: Le funzioni che restituiscono la storia delle iterazioni (come `Richardson iterate`) forniscono tipicamente una matrice dove le colonne rappresentano le iterazioni e le righe le componenti del vettore soluzione. Per plottare la traiettoria delle iterazioni, è necessario **selezionare correttamente le righe corrispondenti alle coordinate desiderate** (ad esempio, la prima e la seconda riga per un problema in 2D) e tutte le colonne (tutte le iterazioni). Ad esempio, se `XKR1` contiene la storia delle iterazioni, `XKR1(1, :)` rappresenta la prima componente (x) di tutte le iterazioni, e `XKR1(2, :)` rappresenta la seconda componente (y). Per plottare la traiettoria su un grafico 2D:
    
    ```
    plot(XKR1(1, :), XKR1(2, :), '-o');
    ```
    
    dove `'-o'` specifica il tipo di linea e un marcatore per ogni punto.
- **Controllo dei limiti degli assi**: Per visualizzare correttamente la convergenza o la divergenza dei metodi, può essere necessario **fissare i limiti degli assi** del grafico utilizzando il comando `axis` per evitare che la scala si adatti ad ogni iterazione in modo fuorviante.
- **Osservazioni sulle visualizzazioni**:
    - Il metodo di **Richardson** con un parametro $\alpha$ appropriato mostra una convergenza verso il minimo del funzionale (soluzione del sistema), mentre con un $\alpha$ non appropriato può divergere.
    - Il metodo del **gradiente non precondizionato** mostra una convergenza lenta con **direzioni ortogonali** tra un passo e l'altro, caratterizzata da un andamento a "zig-zag" verso il minimo.
    - Il metodo del **gradiente precondizionato** può mostrare una convergenza più rapida (anche se non sempre visivamente evidente dalla perpendicolarità delle direzioni a causa della precondizionamento).
    - Il metodo del **gradiente coniugato** è concettualmente un metodo diretto che, in aritmetica esatta, converge in un numero finito di iterazioni (al massimo la dimensione del sistema). Le visualizzazioni mostrano una convergenza rapida, spesso in pochi passi.

### Secondo Esercizio: Utilizzo di `PCG` e Precondizionamento

Il secondo esercizio introduce l'uso della funzione `PCG` di MATLAB (Preconditioned Conjugate Gradient) e il concetto di precondizionamento.

#### 1. Importazione della Matrice e Definizione del Vettore $b$

Viene chiesto di importare una matrice $A$ dalla gallery di MATLAB utilizzando un comando specifico (non riportato esattamente nel testo, ma si intuisce che sia un comando per caricare una matrice predefinita) e di definire un vettore $b$ composto da tutti 1 di dimensione compatibile con $A$.

#### 2. Calcolo del Condizionamento con `condest`

Viene introdotto il comando `condest(A)` per **stimare il numero di condizionamento** della matrice $A$. `condest` è una funzione più efficiente (meno onerosa computazionalmente) rispetto a `cond(A)` per matrici di grandi dimensioni, fornendo un'approssimazione del numero di condizionamento. Il numero di condizionamento fornisce una misura della "sensibilità" della soluzione del sistema lineare rispetto a perturbazioni nei dati. Un numero di condizionamento elevato indica un problema mal condizionato, dove piccoli errori nei dati possono portare a grandi errori nella soluzione, e la convergenza dei metodi iterativi può essere lenta.

#### 3. Utilizzo della Funzione `PCG`

La funzione `PCG` è l'implementazione MATLAB del metodo del **gradiente coniugato precondizionato**. Per comprenderne l'utilizzo, è fondamentale consultare la documentazione tramite il comando `help PCG` nella finestra di comando di MATLAB. La sintassi base è:

```
x = pcg(A, b)
```

che risolve il sistema $Ax = b$ utilizzando il gradiente coniugato precondizionato con parametri di default.

`PCG` accetta anche **opzioni aggiuntive** come la tolleranza sulla norma del residuo, il numero massimo di iterazioni, e la matrice di precondizionamento $M$ (tale che $M^{-1} \approx A^{-1}$). La sintassi estesa può essere:

```
[x, flag, relres, iter, resvec] = pcg(A, b, tol, maxiter, M1, M2, x0)
```

Dove:

- `x`: è la soluzione approssimata trovata da `PCG`.
- `flag`: è un indicatore di convergenza (0 se converge, diverso da 0 altrimenti).
- `relres`: è la norma relativa del residuo finale $|b - Ax|_2 / |b|_2$.
- `iter`: è il numero di iterazioni eseguite.
- `resvec`: è un vettore contenente la storia delle norme del residuo ad ogni iterazione.
- `tol`: è la tolleranza desiderata per la norma relativa del residuo (criterio di arresto).
- `maxiter`: è il numero massimo di iterazioni consentite. Se non specificato, il valore di default in MATLAB è 20.
- `M1`, `M2`: sono matrici di precondizionamento tali che il precondizionatore effettivo è $M^{-1} = M_1 \times M_2$. Spesso si usa solo una matrice $M$ tale che $M_1 = M$ e $M_2 = I$ (matrice identità). Se non viene fornito alcun precondizionatore, `PCG` esegue il metodo del gradiente coniugato non precondizionato.
- `x0`: è un guess iniziale per la soluzione.

Il professore ha evidenziato che se non si specifica il numero massimo di iterazioni (`maxiter`), `PCG` utilizza un **valore di default di 20**, che potrebbe non essere sufficiente per la convergenza in alcuni casi. È quindi importante scegliere un valore appropriato basandosi sulla dimensione del problema e sul condizionamento della matrice.

Per **sopprimere l'output** di alcuni argomenti di ritorno di `PCG` che non sono di interesse, si utilizza la **tilde** (`~`). Ad esempio, se si è interessati solo alla soluzione `x` e al numero di iterazioni `iter`, si può scrivere:

```
[x, ~, ~, iter] = pcg(A, b, tol, maxiter);
```

#### 4. Precondizionamento con la Matrice Tridiagonale di $A$

Nell'esercizio, viene chiesto di utilizzare come **precondizionatore** $P$ la **matrice tridiagonale inferiore** (corretto in "tridiagonale") della matrice $A$. Per estrarre la parte tridiagonale di $A$ in MATLAB, si possono utilizzare i comandi `diag` con offset opportuni per ottenere le diagonali principali, superiore e inferiore, e poi ricostruire la matrice tridiagonale:

```
d0 = diag(A);      % Diagonale principale
d1 = diag(A, 1);   % Diagonale superiore
dm1 = diag(A, -1); % Diagonale inferiore
P = diag(d0) + diag(dm1, -1) + diag(d1, 1); % Ricostruzione della matrice tridiagonale
```

Successivamente, si risolve il sistema precondizionato utilizzando `PCG` fornendo $P$ come precondizionatore (nella posizione di $M1$ o come unico precondizionatore se non si usa $M2$):

```
[x_prec, ~, ~, iter_prec] = pcg(A, b, tol, maxiter, P);
```

#### 5. Effetto del Precondizionamento

Il precondizionamento ha lo scopo di **migliorare il condizionamento del sistema lineare**, rendendo la convergenza dei metodi iterativi più rapida. Come osservato dal professore nell'esempio, l'utilizzo di un precondizionatore (la matrice tridiagonale di $A$) ha **ridotto il numero di iterazioni necessarie per la convergenza** rispetto al caso non precondizionato. Questo è correlato alla **diminuzione del numero di condizionamento** della matrice precondizionata $P^{-1}A$ (anche se non calcolato esplicitamente nell'esempio).

#### 6. Interpretazione Visiva del Precondizionamento

Il professore fornisce un'**analogia visiva** per spiegare l'effetto del precondizionamento. Ricordando le **linee di livello** del funzionale quadratico visualizzate nel primo esercizio, nel caso di un sistema mal condizionato, queste linee di livello sono **ellissi molto schiacciate**. Il metodo del gradiente (e di conseguenza il gradiente coniugato non precondizionato) tende a muoversi con un andamento a "zig-zag" perché le direzioni di massima discesa cambiano bruscamente a causa della forma allungata delle ellissi.

L'azione di un **precondizionatore** può essere vista, in modo euristico, come una **trasformazione del sistema** tale che le linee di livello del nuovo funzionale quadratico associato diventano **più simili a dei cerchi**. In questo modo, non ci sono direzioni "privilegiate" o sfavorevoli per la discesa, e il metodo iterativo può convergere più direttamente verso il minimo (la soluzione). In pratica, è come se il precondizionatore "dilatasse" le ellissi schiacciate rendendole più "rotonde".

In sintesi, il precondizionamento mira a risolvere un sistema "più ben condizionato", dove la geometria del problema è più favorevole alla rapida convergenza dei metodi iterativi.
#### References



