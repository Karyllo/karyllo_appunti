2025-03-18 19:39

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## matenum-lab04
laboratorio 4

Certamente, ecco una spiegazione dettagliata dei metodi iterativi, con particolare attenzione al metodo di Richardson e alle sue varianti, basata sulla trascrizione fornita. Cercherò di includere tutti i passaggi matematici, esempi e concetti chiave menzionati dal professore, formattando il tutto in modo chiaro e leggibile con l'uso di LaTeX per le formule matematiche.

## Metodi Iterativi per la Risoluzione di Sistemi Lineari

### Consistenza di un Metodo Iterativo

Un aspetto fondamentale di un metodo iterativo è la sua **consistenza**. Se consideriamo un generico schema iterativo, possiamo rappresentarlo come:

$x_{k+1} = G(x_k, b)$

dove $G$ è una funzione che dipende dalla soluzione precedente $x_k$ e dal termine noto $b$ del sistema lineare $Ax = b$. Un metodo iterativo è consistente se, quando la sequenza $x_k$ converge a una soluzione $x$, quest'ultima è effettivamente la soluzione del sistema lineare.

Il professore ha menzionato un esercizio tipico per valutare la consistenza: se ci viene chiesto di determinare $G$ affinché il metodo sia consistente, dobbiamo fare in modo che se la sequenza $x_k$ converge a $x$, allora $x$ deve soddisfare l'equazione originale. Questo si verifica spesso analizzando il punto fisso dell'iterazione, ovvero quando $x = G(x, b)$ implica $Ax = b$.

Un modo per verificare la consistenza è partire da un'iterazione del tipo $x_{k+1} = Bx_k + c$. Se il metodo converge a $x$, allora $x = Bx + c$, che possiamo riscrivere come $(I - B)x = c$. Per la consistenza con il sistema $Ax = b$, dovremmo avere una relazione tra $(I - B)$ e $A$, e tra $c$ e $b$.

### Convergenza dei Metodi Iterativi

La **convergenza** di un metodo iterativo è determinata dalla **matrice di iterazione $B$**. In particolare, il **raggio spettrale** di $B$, denotato come $\rho(B)$, gioca un ruolo cruciale. Il raggio spettrale è definito come il massimo modulo degli autovalori di $B$:

$\rho(B) = \max_i |\lambda_i(B)|$

Dove $\lambda_i(B)$ sono gli autovalori della matrice $B$.

La condizione di convergenza è la seguente:

- Se $\rho(B) < 1$, allora il metodo iterativo converge per ogni scelta del vettore iniziale $x_0$.
- Se $\rho(B) > 1$, allora il metodo iterativo non converge in generale.

Inoltre, il valore del raggio spettrale fornisce informazioni sulla **velocità di convergenza**: minore è $\rho(B)$, più veloce è la convergenza.

### Metodo di Richardson

Il metodo di Richardson è una famiglia di metodi iterativi con diverse varianti. Distinguiamo principalmente tra:

- Metodo di Richardson **stazionario**
- Metodo di Richardson **dinamico**
- Metodo di Richardson **precondizionato stazionario**
- Metodo di Richardson **precondizionato dinamico**

Per chiarezza, ci concentreremo sul **metodo di Richardson precondizionato stazionario**, accennando alla differenza con la versione dinamica.

#### Metodo di Richardson Precondizionato Stazionario

Nel metodo di Richardson precondizionato stazionario, la matrice di iterazione $B$ ha la seguente forma:

$B = (I - \alpha P^{-1} A)$

dove:

- $\alpha$ è il **parametro di accelerazione** del metodo.
- $P$ è la **matrice di precondizionamento**.
- $A$ è la matrice del sistema lineare $Ax = b$.
- $I$ è la matrice identità.

L'aggiornamento della soluzione al passo successivo $x_{k+1}$ è dato da:

$x_{k+1} = x_k + \alpha P^{-1} r_k$

dove $r_k$ è il **residuo** al passo $k$, definito come:

$r_k = b - Ax_k$

Esiste anche un modo alternativo per aggiornare il residuo:

$r_{k+1} = r_k - \alpha A z_k$

dove $z_k$ è la soluzione del sistema lineare con la matrice di precondizionamento e il residuo corrente:

$P z_k = r_k \implies z_k = P^{-1} r_k$

#### Metodo di Richardson Precondizionato Dinamico

La differenza principale con il metodo di Richardson precondizionato dinamico è che il **parametro di accelerazione non è costante**, ma **dipende dal numero di iterazione $k$**, diventando $\alpha_k$. Di conseguenza, anche la matrice di iterazione $B_k = (I - \alpha_k P^{-1} A)$ varia ad ogni passo. Calcolare il raggio spettrale in questo caso diventa più complesso.

L'aggiornamento della soluzione nel metodo dinamico è analogo, ma con $\alpha_k$:

$x_{k+1} = x_k + \alpha_k P^{-1} r_k$

e l'aggiornamento del residuo diventa:

$r_{k+1} = r_k - \alpha_k A z_k$

### Relazione con i Metodi di Jacobi e Gauss-Seidel

I metodi di **Jacobi** e **Gauss-Seidel** sono casi particolari del metodo di Richardson:

- **Metodo di Jacobi:** Corrisponde a un metodo di Richardson dove la matrice di precondizionamento $P$ è la **matrice diagonale $D$ di $A$**, e il parametro di accelerazione $\alpha$ è **1**.
- **Metodo di Gauss-Seidel:** Corrisponde a un metodo di Richardson dove la matrice di precondizionamento $P$ è data da **$D - E$**, con $D$ la parte diagonale e $-E$ la parte strettamente triangolare inferiore di $A$, e il parametro di accelerazione $\alpha$ è **1**. Per la definizione precisa di $D$ e $E$, si rimanda al laboratorio precedente. In sintesi, se scomponiamo la matrice $A$ come $A = D - E - F$, dove $D$ è la diagonale, $-E$ è la parte strettamente triangolare inferiore e $-F$ è la parte strettamente triangolare superiore, allora:
    - Jacobi: $P = D$, $\alpha = 1$
    - Gauss-Seidel: $P = D - E$, $\alpha = 1$

### Condizione di Convergenza Ottimale per il Metodo di Richardson Stazionario

Se la matrice di precondizionamento $P$ è non singolare e gli **autovalori di $P^{-1} A$**, denotati come $\lambda_i$ per $i = 1, \dots, n$, sono **reali, positivi e ordinati** in modo decrescente ($\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_n > 0$), allora il metodo di Richardson stazionario precondizionato converge **se e solo se** il parametro di accelerazione $\alpha$ soddisfa la seguente condizione:

$0 < \alpha < \frac{2}{\lambda_1}$

Inoltre, esiste un valore **ottimale** di $\alpha$, denotato come $\alpha_{opt}$, che massimizza la velocità di convergenza. Questo valore è dato da:

$\alpha_{opt} = \frac{2}{\lambda_1 + \lambda_n}$

Calcolare gli autovalori $\lambda_1$ e $\lambda_n$ può essere computazionalmente oneroso. In pratica, si possono utilizzare stime o si procede per tentativi per scegliere un valore di $\alpha$ che garantisca una buona convergenza.

### Algoritmo del Metodo di Richardson Precondizionato (Dinamico e Stazionario)

L'algoritmo generale per il metodo di Richardson precondizionato (che può essere sia dinamico che stazionario) segue questi passi all'interno di un ciclo iterativo (ad esempio, un ciclo `while` con una condizione di arresto basata sul residuo, sul numero massimo di iterazioni o sulla differenza tra iterate successive):

1. **Risolvere il sistema lineare con la matrice di precondizionamento:** $P z_k = r_k$ da cui si ottiene $z_k = P^{-1} r_k$.
    
    In codice MATLAB questo si tradurrebbe in:
    
    ```
    zk = P \ rk;
    ```
    
    oppure, se $P^{-1}$ è nota:
    
    ```
    zk = inv(P) * rk;
    ```
    
2. **Calcolare il parametro di accelerazione $\alpha_k$**:
    
    - Se il metodo è **stazionario**, $\alpha_k$ è una costante $\alpha$ fornita come parametro di input.
    - Se il metodo è **dinamico**, $\alpha_k$ viene calcolato in base a una specifica regola che dipende dall'iterazione corrente $k$.
3. **Aggiornare la soluzione:** $x_{k+1} = x_k + \alpha_k z_k$
    
    In MATLAB:
    
    ```
    xk_plus_1 = xk + alpha_k * zk;
    ```
    
4. **Aggiornare il residuo:** $r_{k+1} = r_k - \alpha_k A z_k$
    
    In MATLAB:
    
    ```
    rk_plus_1 = rk - alpha_k * A * zk;
    ```
    

Se il metodo di Richardson non è precondizionato, la matrice di precondizionamento $P$ è semplicemente la matrice identità $I$. In questo caso, risolvere $P z_k = r_k$ si riduce a $z_k = r_k$.

### Metodo del Gradiente come Caso Particolare del Metodo di Richardson Dinamico

Il **metodo del gradiente** (sia precondizionato che non precondizionato) è un caso speciale del **metodo di Richardson dinamico**.

#### Metodo del Gradiente Precondizionato

Nel metodo del gradiente precondizionato, il parametro di accelerazione $\alpha_k$ ad ogni iterazione viene calcolato in modo specifico come:

$\alpha_k = \frac{r_k^T z_k}{z_k^T A z_k}$

dove, come in precedenza, $z_k$ è la soluzione di $P z_k = r_k$.

In MATLAB, questo calcolo si traduce in:

```
alpha_k = (rk' * zk) / (zk' * A * zk);
```

#### Metodo del Gradiente Non Precondizionato

Se il metodo del gradiente non è precondizionato, allora $P = I$, e quindi $z_k = r_k$. In questo caso, la formula per $\alpha_k$ si semplifica a:

$\alpha_k = \frac{r_k^T r_k}{r_k^T A r_k} = \frac{|r_k|^2}{r_k^T A r_k}$

In MATLAB:

```matlab
alpha_k = (rk' * rk) / (rk' * A * rk);
```

Una proprietà importante del metodo del gradiente non precondizionato è che le **direzioni dei residui successivi sono ortogonali tra loro**.

Il professore ha menzionato che la lezione successiva sarà dedicata ad approfondire il metodo del gradiente, inclusi i dettagli sulla discesa, l'ortogonalità delle direzioni, i casi patologici e le differenze con il metodo del gradiente coniugato.

Spero che questa spiegazione dettagliata e ben formattata ti sia utile. Fammi sapere se hai altre domande.



#### References



