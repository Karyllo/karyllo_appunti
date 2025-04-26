---
title: Matenum  lab02
description: Appunto automatico
---

2025-03-17 16:36

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## Matenum- lab03
# Metodi Iterativi per la Risoluzione di Sistemi Lineari $Ax = b$

## Introduzione ai Metodi Iterativi

Invece di trovare direttamente la soluzione di un sistema lineare $Ax = b$ come con i metodi diretti (ad esempio, il metodo LU), i metodi iterativi generano una sequenza di soluzioni approssimate che, si spera, convergono alla soluzione esatta. Un metodo iterativo generico può essere espresso nella forma:

$x^{(k+1)} = Bx^{(k)} + g$

dove:

- $x^{(k)}$ è il vettore soluzione approssimata al passo $k$.
- $x^{(k+1)}$ è il vettore soluzione approssimata al passo successivo $k+1$.
- $B$ è la **matrice di iterazione** del metodo.
- $g$ è un **vettore di spostamento**.

Le proprietà di convergenza di un metodo iterativo sono determinate principalmente dalla sua matrice di iterazione $B$.

## Convergenza dei Metodi Iterativi

### Condizione Necessaria e Sufficiente per la Convergenza

La **convergenza** di un metodo iterativo è strettamente legata al **raggio spettrale** della matrice di iterazione $B$. Il raggio spettrale, indicato con $\rho(B)$, è definito come il massimo del modulo degli autovalori di $B$:

$\rho(B) = \max(|\lambda_i|)$

dove $\lambda_i$ sono gli autovalori di $B$.

Un teorema fondamentale afferma che il metodo iterativo $x^{(k+1)} = Bx^{(k)} + g$ converge per qualsiasi scelta del vettore iniziale $x^{(0)}$ se e solo se il raggio spettrale della matrice di iterazione è minore di 1:

$\rho(B) < 1$

Inoltre, **più piccolo è il raggio spettrale**, più velocemente il metodo converge. Al contrario, se il raggio spettrale è prossimo a 1, la convergenza sarà lenta.

### Calcolo del Raggio Spettrale in MATLAB

Per calcolare il raggio spettrale di una matrice $B$ in MATLAB, si può utilizzare il seguente comando:

```
max(abs(eig(B)))
```

Questo comando calcola gli autovalori di $B$ (`eig(B)`), ne prende il valore assoluto (`abs(...)`), e infine trova il massimo di questi valori assoluti (`max(...)`), che corrisponde al raggio spettrale.

## Metodo di Jacobi

### Derivazione del Metodo di Jacobi

Il metodo di Jacobi si basa su una **decomposizione** (splitting) della matrice $A$ nella somma di tre matrici: una matrice diagonale $D$, una matrice triangolare inferiore $-E$ (con elementi opposti a quelli della parte strettamente inferiore di $A$), e una matrice triangolare superiore $-F$ (con elementi opposti a quelli della parte strettamente superiore di $A$). Quindi, $A = D - E - F$.

Riscrivendo il sistema $Ax = b$ come $(D - E - F)x = b$, possiamo isolare la parte diagonale: $Dx = (E + F)x + b$. Se la matrice diagonale $D$ è invertibile (ovvero, se tutti gli elementi sulla diagonale principale di $A$ sono non nulli), possiamo ricavare la formula iterativa del metodo di Jacobi:

$x^{(k+1)} = D^{-1}(E + F)x^{(k)} + D^{-1}b$

Confrontando questa espressione con la forma generale $x^{(k+1)} = Bx^{(k)} + g$, identifichiamo la **matrice di iterazione di Jacobi** $B_J$ e il vettore di spostamento $g_J$ come:

$B_J = D^{-1}(E + F) = I - D^{-1}A$ $g_J = D^{-1}b$

dove $I$ è la matrice identità.

### Aggiornamento delle Componenti nel Metodo di Jacobi

La formula per aggiornare la $i$-esima componente del vettore soluzione $x$ al passo $k+1$ nel metodo di Jacobi è data da:

$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1, j\neq i}^{n} a_{ij} x_j^{(k)} \right)$

Questa formula indica che per aggiornare la $i$-esima componente della soluzione, si utilizza il valore corrente di tutte le altre componenti della soluzione al passo precedente $k$.

### Implementazione in MATLAB (MyJacobi)

L'implementazione del metodo di Jacobi richiede di iterare fino a raggiungere un criterio di arresto, come ad esempio un residuo normalizzato inferiore a una certa tolleranza. Il residuo al passo $k$ è definito come $r^{(k)} = b - Ax^{(k)}$, e il residuo normalizzato è $|r^{(k)}| / |b|$.

Nella funzione `MyJacobi`, si inizializza una stima dell'errore a un valore elevato per garantire l'ingresso nel ciclo `while`. Il ciclo continua finché non si raggiunge il numero massimo di iterazioni o l'errore stimato (basato sul residuo normalizzato) non scende al di sotto della tolleranza.

All'interno del ciclo, per ogni componente $i$ del vettore soluzione, si calcola il nuovo valore $x_i^{(k+1)}$ utilizzando la formula sopra, sfruttando i valori di $x_j^{(k)}$. Questo calcolo può essere efficientemente implementato evitando cicli espliciti, ad esempio utilizzando prodotti scalari e opportune indicizzazioni per escludere l'elemento diagonale.

Dopo ogni iterazione, si calcola il residuo normalizzato come stima dell'errore e si aggiorna il vettore della soluzione corrente per la prossima iterazione.

## Metodo di Gauss-Seidel

### Derivazione del Metodo di Gauss-Seidel

Similmente al metodo di Jacobi, il metodo di Gauss-Seidel utilizza la decomposizione $A = D - E - F$. Tuttavia, nell'aggiornamento delle componenti, il metodo di Gauss-Seidel utilizza i valori delle componenti già aggiornate nella stessa iterazione $k+1$.

Riscrivendo il sistema $Ax = b$ e isolando i termini che coinvolgono $D$ e $-E$: $(D - E)x = Fx + b$. Se la matrice $(D - E)$ è invertibile, la formula iterativa del metodo di Gauss-Seidel è:

$x^{(k+1)} = (D - E)^{-1}Fx^{(k)} + (D - E)^{-1}b$

La **matrice di iterazione di Gauss-Seidel** $B_{GS}$ e il vettore di spostamento $g_{GS}$ sono quindi:

$B_{GS} = (D - E)^{-1}F$ ,  $g_{GS} = (D - E)^{-1}b$

### Aggiornament.  delle Componenti nel Metodo di Gauss-Seidel

La formula per aggiornare la $i$-esima componente del vettore soluzione $x$ al passo $k+1$ nel metodo di Gauss-Seidel è data da:

$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij} x_j^{(k+1)} - \sum_{j=i+1}^{n} a_{ij} x_j^{(k)} \right)$

Si osserva che la somma è divisa in due parti: la prima somma include le componenti $x_j$ con indice $j < i$, che sono già state aggiornate al passo $k+1$, mentre la seconda somma include le componenti $x_j$ con indice $j > i$, che mantengono il valore del passo precedente $k$.

### Implementazione in MATLAB

In MATLAB, per calcolare l'effetto della moltiplicazione per l'inversa di $(D-E)$ senza calcolare esplicitamente l'inversa, si utilizza l'operatore backslash (`\`):

```
B_GS = (D - E) \ F;
```

e per applicare $(D-E)^{-1}$ a un vettore come $b$, si scrive `(D - E) \ b`. Questo è computazionalmente più efficiente e numericamente stabile rispetto al calcolo diretto dell'inversa.

Per l'implementazione del metodo di Gauss-Seidel (o del metodo SOR con $\omega = 1$), si procede in modo simile al metodo di Jacobi, ma nell'aggiornamento di ogni componente, si utilizzano i valori già calcolati nella stessa iterazione.

## Metodo SOR (Successive Over-Relaxation)

Il metodo SOR è una **generalizzazione** del metodo di Gauss-Seidel che introduce un **parametro di rilassamento** $\omega$. La formula per l'aggiornamento delle componenti nel metodo SOR è:

$x_i^{(k+1)} = (1 - \omega) x_i^{(k)} + \frac{\omega}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij} x_j^{(k+1)} - \sum_{j=i+1}^{n} a_{ij} x_j^{(k)} \right)$

Quando $\omega = 1$, il metodo SOR si riduce al metodo di Gauss-Seidel. Per valori di $\omega$ diversi da 1, si può potenzialmente accelerare la convergenza rispetto a Gauss-Seidel. L'implementazione di `MySor` in MATLAB si basa sulla stessa struttura di `MyJacobi`, ma incorporando il parametro $\omega$ e la differente gestione degli indici nelle sommatorie per sfruttare i valori già aggiornati nella corrente iterazione.

## Condizioni Sufficienti di Convergenza

Oltre alla condizione necessaria e sufficiente basata sul raggio spettrale, esistono alcune **condizioni sufficienti** per la convergenza dei metodi di Jacobi e Gauss-Seidel:

- **Dominanza diagonale stretta per righe**: Una matrice $A$ è a dominanza diagonale stretta per righe se per ogni riga $i$, il valore assoluto dell'elemento diagonale è maggiore della somma dei valori assoluti degli altri elementi sulla stessa riga: $|a_{ii}| > \sum_{j=1, j\neq i}^{n} |a_{ij}|$. Se $A$ è a dominanza diagonale stretta per righe, sia il metodo di Jacobi che il metodo di Gauss-Seidel convergono.
- **Dominanza diagonale stretta per colonne**: Similmente, se $|a_{jj}| > \sum_{i=1, i\neq j}^{n} |a_{ij}|$ per ogni colonna $j$, allora $A$ è a dominanza diagonale stretta per colonne. In questo caso, sia Jacobi che Gauss-Seidel convergono.
- **Simmetria e definita positività**: Se la matrice $A$ è simmetrica e definita positiva, allora il metodo di Gauss-Seidel converge.

Queste condizioni sono sufficienti, ma non necessarie, il che significa che i metodi possono convergere anche se queste condizioni non sono soddisfatte, a condizione che il raggio spettrale della matrice di iterazione sia minore di 1.

## Stima del Numero di Iterazioni

È possibile stimare il numero minimo di iterazioni $K$ necessarie per ridurre l'errore di un certo fattore, utilizzando la norma della matrice di iterazione $B$. Se si desidera ridurre l'errore iniziale $e^{(0)} = x_{exact} - x^{(0)}$ di un fattore $\epsilon$, e si utilizza la norma 2, allora si ha:

$|e^{(K)}|_2 \le |B|_2^K |e^{(0)}|_2 \le \epsilon |e^{(0)}|_2$

Da cui si ricava una stima per il numero di iterazioni $K$:

$K \ge \frac{\log_{10}(\epsilon)}{\log_{10}(|B|_2)}$

o

$K \ge \frac{\log_{2}(\epsilon)}{\log_{2}(|B|_2)}$

Nell'esercizio, con una tolleranza di $10^{-10}$, il numero di iterazioni per Jacobi è stato stimato intorno a 26-27, in accordo con i risultati numerici ottenuti.

## Confronto tra Jacobi e Gauss-Seidel

In generale, se entrambi i metodi convergono, il metodo di Gauss-Seidel tende a convergere più velocemente del metodo di Jacobi, poiché utilizza le informazioni più recenti disponibili durante l'iterazione. Tuttavia, esiste un teorema specifico per il confronto della velocità di convergenza tra Jacobi e Gauss-Seidel che si applica solo nel caso in cui la matrice $A$ sia **tridiagonale** e con elementi non nulli sulla diagonale. In questo caso, se entrambi i metodi convergono, il raggio spettrale di Gauss-Seidel è il quadrato del raggio spettrale di Jacobi: $\rho(B_{GS}) = [\rho(B_J)]^2$, il che implica una convergenza più rapida per Gauss-Seidel. Per matrici non tridiagonali, come nell'esempio discusso, questo confronto diretto non è applicabile, e la velocità di convergenza viene confrontata direttamente attraverso i valori dei rispettivi raggi spettrali. Nell'esempio, si è osservato che $\rho(B_{GS}) = 0.08 < \rho(B_J) = 0.29$, confermando una convergenza più veloce per Gauss-Seidel.

La **consistenza** dei metodi di Jacobi e Gauss-Seidel è garantita dalla loro costruzione, il che permette di concentrarsi direttamente sulla verifica della convergenza tramite il raggio spettrale.

L'**errore iniziale** $e^{(0)}$ è definito come la differenza tra la soluzione esatta $x_{exact}$ e la soluzione iniziale $x^{(0)}$. Nel caso in cui la soluzione iniziale sia il vettore nullo ($x^{(0)} = 0$), allora $e^{(0)} = x_{exact}$. L'analisi dell'errore durante le iterazioni permette di verificare se la soluzione approssimata converge effettivamente alla soluzione esatta entro la tolleranza specificata.
#### References



