---
title: "mateNum- Lez16"
---

2025-04-25 10:33

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[matematica numerica]]  [[sbobine]]

## mateNum- Lez16


**Introduzione al Contesto: Sistemi Indeterminati**

Iniziamo col riprendere la classificazione dei sistemi lineari $Ax=y$, dove $A$ è una matrice rettangolare $m \times n$. Abbiamo distinto tra:

- **Sistemi Sovradeterminati:** Caratterizzati da un numero di equazioni maggiore del numero di incognite, ovvero $m > n$. Per questi sistemi, la definizione classica di soluzione non è sufficiente. Si è quindi passati alla ricerca della **soluzione nel senso dei minimi quadrati**, quella che minimizza la norma del residuo, $||Ax-y||^2$. In questo contesto, abbiamo ulteriormente distinto il caso in cui la matrice $A$ sia a rango pieno ($rank(A)=n$) e il caso in cui non lo sia. Per il caso a rango pieno, si è visto che la soluzione ai minimi quadrati si ottiene risolvendo le **equazioni normali**, che possono essere risolte con metodi diretti per matrici simmetriche definite positive o, per evitare errori numerici, tramite fattorizzazione QR. Nel caso non a rango massimo, la soluzione ai minimi quadrati non è unica, e si cerca quella a **norma minima**, introducendo concetti legati, apparentemente, alla SVD (indicata come ST).
- **Sistemi Sottodeterminati:** Caratterizzati da un numero di equazioni minore del numero di incognite, ovvero $m < n$. Di questi sistemi si dirà meno inizialmente.

Abbiamo menzionato le **equazioni normali** in due momenti distinti:

1. Quando abbiamo studiato la retta di regressione e la sua generalizzazione (l'approssimazione polinomiale ai minimi quadrati).
2. Quando abbiamo trattato i sistemi sovradeterminati a rango pieno, trovando la soluzione ai minimi quadrati.

L'obiettivo ora è **dimostrare che si tratta della stessa cosa**.

**Richiamo sull'Approssimazione Polinomiale ai Minimi Quadrati**

Ricordiamo la definizione del polinomio $f_T(x)$ di grado $m$ che approssima un set di dati $(x_i, y_i)$ per $i=0, \dots, n$ nel senso dei minimi quadrati. Questo polinomio è identificato dai suoi coefficienti $a_0, a_1, \dots, a_m$.

Il polinomio $f_T(x)$ è caratterizzato dalla proprietà di **minimizzare la somma degli scarti quadratici**. Questo significa che, dati i punti $(x_i, y_i)$, il polinomio $f_T(x)$ valutato in $x_i$, ossia $f_T(x_i)$, rende minima la quantità: $$ \sum_{i=0}^n (y_i - f_T(x_i))^2 $$ Questa quantità è minima quando i coefficienti del polinomio $p_m(x) = b_0 + b_1 x + \dots + b_m x^m$ (un generico polinomio di grado $m$ con coefficienti $b_0, \dots, b_m$) coincidono con i coefficienti $a_0, \dots, a_m$ del polinomio $f_T(x)$. Quindi, stiamo cercando il vettore di coefficienti $A = [a_0, a_1, \dots, a_m]^T$ che realizza il minimo, al variare del vettore $B = [b_0, b_1, \dots, b_m]^T \in \mathbb{R}^{m+1}$, della somma degli scarti quadratici: $$ \sum_{i=0}^n (y_i - (b_0 + b_1 x_i + \dots + b_m x_i^m))^2 $$ Tradizionalmente, questo problema è stato risolto definendo una funzione $F(b_0, \dots, b_m) = \sum_{i=0}^n (y_i - (b_0 + b_1 x_i + \dots + b_m x_i^m))^2$ e cercando i valori di $b_j$ che annullano le derivate parziali $\frac{\partial F}{\partial b_j}$ per $j=0, \dots, m$. Quando queste derivate sono valutate nei coefficienti $a_j$, sono uguali a zero. Questa procedura porta al sistema di equazioni normali per i coefficienti $a_j$.
![[Pasted image 20250425104620.png]]
==**Espressione Vettoriale del Problema di Minimizzazione**

Ora, riscriviamo questa somma di scarti quadratici in forma vettoriale.

**Passaggio Chiave: Riconoscere la Norma Euclidea**

La somma di oggetti al quadrato, come $\sum_{i=0}^n (\text{qualcosa}_i)^2$, può essere interpretata come il **quadrato della norma euclidea** di un vettore le cui componenti sono quel "qualcosa". Se abbiamo un vettore $W = [w_0, w_1, \dots, w_n]^T$, la sua norma euclidea al quadrato è $||W||^2 = \sum_{i=0}^n w_i^2$.

Nel nostro caso, le quantità al quadrato sono $(y_i - (b_0 + b_1 x_i + \dots + b_m x_i^m))$. Queste possono essere viste come le componenti $i$-esime di un vettore. Questo vettore è la differenza tra due vettori:

1. Il primo vettore ha le componenti $y_i$. Possiamo definire il vettore dei dati $Y = [y_0, y_1, \dots, y_n]^T$.
2. Il secondo vettore ha le componenti $(b_0 + b_1 x_i + \dots + b_m x_i^m)$. Questa forma è tipica di un prodotto riga per colonna in un'operazione matrice-vettore.

**Definizione della Matrice di Vandermonde**

Definiamo la matrice $A$ (che in questo contesto, per distinguere, chiameremo V per Vandermonde, anche se il source la chiama A) come la matrice $(n+1) \times (m+1)$ le cui entrate sono $V_{i,j} = x_i^j$ per $i=0, \dots, n$ e $j=0, \dots, m$. Ricordando che $x^0 = 1$, la matrice ha la seguente struttura: $$ V = \begin{pmatrix} x_0^0 & x_0^1 & \dots & x_0^m \ x_1^0 & x_1^1 & \dots & x_1^m \ \vdots & \vdots & \ddots & \vdots \ x_n^0 & x_n^1 & \dots & x_n^m \end{pmatrix} = \begin{pmatrix} 1 & x_0 & \dots & x_0^m \ 1 & x_1 & \dots & x_1^m \ \vdots & \vdots & \ddots & \vdots \ 1 & x_n & \dots & x_n^m \end{pmatrix} $$ Questa è la **matrice di Vandermonde**.

Definiamo il vettore dei coefficienti del generico polinomio $B = [b_0, b_1, \dots, b_m]^T$.

Il prodotto matrice-vettore $VB$ ha come componente $i$-esima: $$ (VB)_i = \sum_{j=0}^m V_{i,j} b_j = \sum_{j=0}^m x_i^j b_j = b_0 + b_1 x_i + \dots + b_m x_i^m $$ Questo è esattamente il valore del generico polinomio $p_m(x)$ valutato in $x_i$.

Il vettore delle differenze (il residuo) ha quindi come componente $i$-esima $y_i - (VB)_i$, il che corrisponde alla componente $i$-esima del vettore $Y - VB$.

**Pertanto, la somma degli scarti quadratici può essere riscritta come il quadrato della norma euclidea del vettore residuo $Y - VB$**: $$ \sum_{i=0}^n (y_i - (b_0 + b_1 x_i + \dots + b_m x_i^m))^2 = ||Y - VB||^2 $$

Il problema di trovare i coefficienti $A = [a_0, \dots, a_m]^T$ che minimizzano la somma degli scarti quadratici è quindi **equivalente a cercare il vettore $A$ che minimizza la norma al quadrato del residuo $||Y - VA||^2$**, dove $A$ è ora il vettore di coefficienti ottimali (usiamo $A$ per coerenza con la notazione finale del source).

**Collegamento ai Sistemi Sovradeterminati**

Abbiamo imparato che la **soluzione nel senso dei minimi quadrati** per un sistema lineare $VX = Y$ (dove $V$ è una matrice, $X$ è il vettore delle incognite e $Y$ è il vettore termine noto) è il vettore $X^*$ che minimizza $||Y - VX||^2$.

Quando il sistema è **sovradeterminato**, ovvero $V$ è una matrice con più righe che colonne (come la nostra matrice di Vandermonde $V$, che è $(n+1) \times (m+1)$ con $n > m$ tipicamente nel fitting polinomiale), e la matrice $V$ ha rango pieno ($rank(V) = m+1$), la soluzione $X^*$ è unica ed è data dalle **equazioni normali**: $$ V^T V X^* = V^T Y $$

Nel nostro problema di approssimazione polinomiale:

- La matrice è la matrice di Vandermonde $V$.
- Il vettore delle incognite che vogliamo trovare è il vettore dei coefficienti $A = [a_0, \dots, a_m]^T$.
- Il vettore termine noto è il vettore dei dati $Y = [y_0, \dots, y_n]^T$.

Quindi, i coefficienti ottimali $A$ sono la soluzione del sistema di equazioni normali: $$ V^T V A = V^T Y $$

Questo sistema è un sistema lineare di $(m+1)$ equazioni in $(m+1)$ incognite (i coefficienti $a_0, \dots, a_m$).

**Dimostrazione: Coincidenza delle Equazioni Normali**

Procediamo ora a calcolare esplicitamente la matrice $V^T V$ e il vettore $V^T Y$ e mostrare che corrispondono alla matrice e al vettore termine noto ottenuti originariamente derivando le equazioni normali per la regressione tramite annullamento delle derivate parziali.

**1. Calcolo della Matrice $V^T V$**

La matrice $V$ è $(n+1) \times (m+1)$. La sua trasposta $V^T$ è $(m+1) \times (n+1)$. $$ V^T = \begin{pmatrix} 1 & 1 & \dots & 1 \ x_0 & x_1 & \dots & x_n \ \vdots & \vdots & \ddots & \vdots \ x_0^m & x_1^m & \dots & x_n^m \end{pmatrix} $$

Il prodotto $V^T V$ è una matrice $(m+1) \times (m+1)$. L'elemento nella riga $j$ e colonna $k$ (con indici $j, k$ che vanno da 0 a $m$) di $V^T V$ si ottiene moltiplicando la riga $(j+1)$-esima di $V^T$ (che è la colonna $(j+1)$-esima di $V$) per la colonna $(k+1)$-esima di $V$. La riga $(j+1)$-esima di $V^T$ è $[x_0^j, x_1^j, \dots, x_n^j]$. La colonna $(k+1)$-esima di $V$ è $[x_0^k, x_1^k, \dots, x_n^k]^T$.

L'elemento $(j, k)$ di $V^T V$ è quindi il prodotto scalare tra questi due vettori: $$ (V^T V)_{j,k} = \sum_{i=0}^n (V^T)_{j,i} V_{i,k} = \sum_{i=0}^n x_i^j \cdot x_i^k = \sum_{i=0}^n x_i^{j+k} $$

Vediamo alcuni esempi degli elementi di questa matrice:

- Elemento (0,0): $j=0, k=0$: $\sum_{i=0}^n x_i^{0+0} = \sum_{i=0}^n 1 = n+1$.
- Elemento (0,1): $j=0, k=1$: $\sum_{i=0}^n x_i^{0+1} = \sum_{i=0}^n x_i$.
- Elemento (0,m): $j=0, k=m$: $\sum_{i=0}^n x_i^{0+m} = \sum_{i=0}^n x_i^m$.
- Elemento (1,0): $j=1, k=0$: $\sum_{i=0}^n x_i^{1+0} = \sum_{i=0}^n x_i$.
- Elemento (1,1): $j=1, k=1$: $\sum_{i=0}^n x_i^{1+1} = \sum_{i=0}^n x_i^2$.
- Elemento (m,m): $j=m, k=m$: $\sum_{i=0}^n x_i^{m+m} = \sum_{i=0}^n x_i^{2m}$.

La matrice $V^T V$ è quindi: $$ V^T V = \begin{pmatrix} \sum_{i=0}^n 1 & \sum_{i=0}^n x_i & \dots & \sum_{i=0}^n x_i^m \ \sum_{i=0}^n x_i & \sum_{i=0}^n x_i^2 & \dots & \sum_{i=0}^n x_i^{m+1} \ \vdots & \vdots & \ddots & \vdots \ \sum_{i=0}^n x_i^m & \sum_{i=0}^n x_i^{m+1} & \dots & \sum_{i=0}^n x_i^{2m} \end{pmatrix} $$ Questa è esattamente la matrice del sistema di equazioni normali ottenuta in precedenza quando abbiamo studiato la retta di regressione e la sua generalizzazione.

**2. Calcolo del Vettore Termine Noto $V^T Y$**

Il prodotto $V^T Y$ è un vettore $(m+1) \times 1$. La componente $j$-esima (con indice $j$ da 0 a $m$) di $V^T Y$ si ottiene moltiplicando la riga $(j+1)$-esima di $V^T$ per il vettore $Y$. La riga $(j+1)$-esima di $V^T$ è $[x_0^j, x_1^j, \dots, x_n^j]$. Il vettore $Y$ è $[y_0, y_1, \dots, y_n]^T$.

La componente $j$ di $V^T Y$ è quindi il prodotto scalare: $$ (V^T Y)_j = \sum_{i=0}^n (V^T)_{j,i} Y_i = \sum_{i=0}^n x_i^j y_i $$

Vediamo alcuni esempi delle componenti di questo vettore:

- Componente 0: $j=0$: $\sum_{i=0}^n x_i^0 y_i = \sum_{i=0}^n y_i$.
- Componente 1: $j=1$: $\sum_{i=0}^n x_i^1 y_i = \sum_{i=0}^n x_i y_i$.
- Componente m: $j=m$: $\sum_{i=0}^n x_i^m y_i = \sum_{i=0}^n x_i^m y_i$.

Il vettore $V^T Y$ è quindi: $$ V^T Y = \begin{pmatrix} \sum_{i=0}^n y_i \ \sum_{i=0}^n x_i y_i \ \vdots \ \sum_{i=0}^n x_i^m y_i \end{pmatrix} $$ Questo è esattamente il vettore termine noto del sistema di equazioni normali ottenuto in precedenza.

**Conclusione sulla Coincidenza (Dimostrazione Completata)**

Avendo dimostrato che la matrice $V^T V$ e il vettore $V^T Y$ ottenuti riformulando il problema di approssimazione polinomiale come la minimizzazione della norma del residuo di un sistema lineare coincidono esattamente con la matrice e il vettore termine noto del sistema di equazioni normali precedentemente derivato per la regressione tramite l'annullamento delle derivate parziali, possiamo affermare che **i due approcci portano allo stesso identico sistema di equazioni normali per la determinazione dei coefficienti del polinomio ai minimi quadrati**.

Questo chiude il cerchio, mostrando che due percorsi apparentemente distinti per affrontare problemi di minimizzazione (uno basato sul calcolo differenziale, l'altro sulla minimizzazione di norme vettoriali) convergono sullo stesso sistema lineare da risolvere.

**Prossimo Argomento: Sistemi Sottodeterminati**

Successivamente, l'attenzione si sposterà sui sistemi **sottodeterminati**. Come accennato, questi sistemi hanno meno equazioni che incognite ($m < n$). La matrice $A$ in questo caso è "larga". Si supporrà che la matrice $A$ abbia rango massimo, che in questo caso è pari a $m$ ($rank(A)=m$). Su questi sistemi si dirà meno rispetto ai sovradeterminati, rendendo la ==trattazione più rapida.

___
Certamente. Di seguito riporto la spiegazione del professore tratta dalle fonti fornite, strutturata e commentata come richiesto.

**Spiegazione sui Sistemi Sottodeterminati e l'Approssimazione di Derivate**

**Sistemi Lineari Sottodeterminati ($Ax=y$)**

Questo argomento riguarda la soluzione di sistemi lineari nella forma $Ax=y$.

**Problema: Più Incognite che Equazioni**

Il problema sorge quando si ha una configurazione in cui il numero di incognite è maggiore del numero di equazioni. Questa situazione è analoga alla richiesta di far passare una retta per un singolo punto. Per un punto passano infinite rette, il che significa che non si ha un numero sufficiente di condizioni per definire la retta in modo univoco.

Per identificare in modo univoco una retta specifica all'interno del fascio di rette che passano per un punto, è necessario aggiungere una condizione ulteriore. Analogamente, per un sistema sottodeterminato, una singola soluzione classica (che soddisfa $Ax=y$) non è unica.

**Ricerca della Soluzione a Norma Euclidea Minima**

Nei sistemi sottodeterminati, la soluzione viene cercata come la soluzione classica che soddisfa $Ax=y$, ma con una condizione addizionale che garantisca l'unicità. Si dimostra che aggiungere una condizione è sufficiente per dare l'unicità alla soluzione $x$.

Un'opzione che viene sfruttata è quella di cercare la soluzione con **norma euclidea minima**.

**Definizione della Soluzione $x^*$**

La soluzione $X^*$, indicata con la notazione dell'argomento che minimizza una funzione (argmin), è definita come il vettore in $\mathbb{R}^n$ che realizza il minimo della norma euclidea: $X^* = \arg \min_{x \in \mathbb{R}^n} { ||x||_2 \mid Ax=y }$

Questa definizione significa cercare una soluzione in senso classico (cioè tale che $Ax = y$) a cui si aggiunge il vincolo ulteriore di avere la norma minima, per garantire l'unicità. Questo è diverso dal caso dei sistemi sovradeterminati a rango non massimo, dove si minimizzava il residuo ($||Ax-y||_2$) con il vincolo di avere la soluzione a norma minima. Qui, invece, la soluzione _risolve_ il sistema in senso classico.

**Formula Esplicita per $x^*$**

Si può dimostrare che la soluzione $X^*$ così definita coincide con la seguente espressione: $X^* = A^T (A A^T)^{-1} y$

Adesso si procederà a verificare che questa scelta per $x^*$ soddisfa entrambe le condizioni richieste: che sia una soluzione classica del sistema $Ax=y$ e che realizzi il minimo della norma.

**Dimostrazione: Verifica delle Proprietà della Soluzione $x^*$**

Si verificano due proprietà per la soluzione $X^*$ definita come $X^* = A^T (A A^T)^{-1} y$.

**Verifica 1: $X^*$ è Soluzione Classica ($AX^* = y$)**

Si verifica se $A x^*$ è effettivamente uguale a $y$.

- Si parte dall'espressione $A X^*$ e si sostituisce la definizione di $X^*$: $A x^* = A (A^T (A A^T)^{-1} y)$
    
- Si raggruppano i termini $A A^T$: $A (A^T (A A^T)^{-1} y) = (A A^T) (A A^T)^{-1} y$
    
- Si osserva che il prodotto di una matrice per la sua inversa è la matrice identità: $(A A^T) (A A^T)^{-1} = I$
    
- L'espressione diventa quindi: $I y = y$
    
- **Conclusione:** Si è verificato che $A x^* = y$, il che significa che $x^*$ è una soluzione in senso classico del sistema $Ax=y$.
    

**Verifica 2: $x^*$ Realizza il Minimo della Norma**

Si deve verificare che la norma euclidea di $X^*$ (anche al quadrato) sia minore o uguale della norma euclidea di qualsiasi altro vettore $x \in \mathbb{R}^n$ che sia una soluzione classica del sistema $Ax=y$ (cioè tale che $Ax=y$). L'obiettivo è dimostrare che $||X^*||_2^2 \le ||x||_2^2$ per ogni $x$ tale che $Ax=y$.

**Risultato Preliminare**

È necessario un risultato preliminare per procedere con la dimostrazione. Questo risultato afferma che per qualsiasi soluzione classica $x$ del sistema $Ax=y$, si ha: $(x - x^*)^\top x^* = 0$

**Dimostrazione del Risultato Preliminare**

Si espande l'espressione $(x - x^*)^\top X^*$. $(x - X^*)^\top x^*$

Si sostituisce la definizione di $X^*$: $(x - X^*)^\top (A^T (A A^T)^{-1} y)$

Si riorganizzano i termini sfruttando le proprietà della trasposta di un prodotto (la trasposta di un prodotto è il prodotto delle trasposte in ordine inverso). In particolare, $(x-x^*)^\top A^\top = (A(x-x^*))^\top$. Questo permette di scrivere l'espressione come: $(A(x - x^*))^\top (A A^T)^{-1} y$

Ora si considera il termine $A(x - x^*)$. Poiché $x$ è una soluzione classica, $Ax = y$. Si è anche dimostrato che $X^*$ è una soluzione classica, quindi $AX^* = y$. Dunque: $A(x - x^*) = Ax - Ax^* = y - y = 0$

Sostituendo questo risultato nell'espressione precedente: $(0)^\top (A A^T)^{-1} y = 0$

**Conclusione del Risultato Preliminare:** Si è dimostrato che $(x - x^*)^\top x^* = 0$ per qualsiasi soluzione classica $x$.

**Dimostrazione Principale del Minimo della Norma**

Si parte dalla norma al quadrato di un generico vettore soluzione $x$: $||x||_2^2$

Si aggiunge e si sottrae la stessa quantità, $X^*$, all'interno della norma: $||x||_2^2 = ||x - X^* + x^*||_2^2$

Si considera $x - X^*$ come un vettore e $X^*$ come un altro vettore. Si applica la definizione di norma euclidea al quadrato di una somma di due vettori ($||a+b||^2 = (a+b)^\top(a+b) = a^\top a + b^\top b + a^\top b + b^\top a = ||a||^2 + ||b||^2 + 2 a^\top b$, dove $a^\top b = b^\top a$ per vettori reali). In questo caso, $a = x - X^*$ e $b = X^*$. $||x - x^* + X^*||_2^2 = ||x - X^*||_2^2 + ||X^*||_2^2 + 2 (x - X^*)^\top x^*$

Si utilizza il risultato preliminare $(x - x^*)^\top x^* = 0$: $||x||_2^2 = ||x - X^*||_2^2 + ||X^*||_2^2 + 2 (0)$

Questo porta all'uguaglianza: $||x||_2^2 = ||X^*||_2^2 + ||x - X^*||_2^2$

Si osserva che la norma euclidea al quadrato di un vettore è sempre una quantità maggiore o uguale a zero: $||x - x^*||_2^2 \ge 0$

**Conclusione della Dimostrazione:** Dall'uguaglianza $||x||_2^2 = ||X^*||_2^2 + ||x - X^*||_2^2$ e dal fatto che $||x - X^*||_2^2 \ge 0$, si deduce che: $||x||_2^2 \ge ||X^*||_2^2$ Questo dimostra che la norma al quadrato di qualsiasi altra soluzione classica $x$ è maggiore o uguale della norma al quadrato di $X^*$, confermando che $X^*$ realizza il minimo della norma euclidea tra le soluzioni classiche.

**Instabilità Numerica della Formula Esplicita**

Esattamente come succedeva nel caso dei sistemi sovradeterminati, il calcolo diretto di $X^*$ usando la formula esplicita $X^* = A^T (A A^T)^{-1} y$ può essere **numericamente instabile**.

**Calcolo di $x^*$ Tramite Fattorizzazione QR Ridotta di $A^T$**

Per ovviare all'instabilità numerica, nella pratica si utilizza un percorso alternativo per calcolare $x^*$: si sfrutta la **fattorizzazione QR**. In particolare, si usa la fattorizzazione QR **ridotta** della matrice **trasposta di $A$** ($A^T$). Questo riporta a gestire una fattorizzazione QR di una matrice che, essendo $A$ rettangolare nel senso "lunghezza", $A^T$ è "alta", simile a quelle incontrate nei sistemi sovradeterminati.

**Derivazione della Formula tramite QR**

Supponiamo di avere a disposizione la fattorizzazione QR ridotta di $A^T$, cioè $A^T = \tilde{Q}\tilde{R}$, dove $\tilde{Q}$ è una matrice con colonne ortonormali ($\tilde{Q}^T \tilde{Q} = I$) e $\tilde{R}$ è una matrice triangolare superiore.

Si parte dalla formula esplicita $x^* = A^T (A A^T)^{-1} y$. Si sostituisce $A^T = \tilde{Q}\tilde{R}$ nell'espressione per $X^*$: $X^* = (\tilde{Q}\tilde{R}) ((\tilde{Q}\tilde{R})^T (\tilde{Q}\tilde{R}))^{-1} y$

Si espande la trasposta del prodotto $(\tilde{Q}\tilde{R})^T = \tilde{R}^T \tilde{Q}^T$: $x^* = \tilde{Q}\tilde{R} (\tilde{R}^T \tilde{Q}^T \tilde{Q}\tilde{R})^{-1} y$

Si sfrutta l'ortogonalità di $\tilde{Q}$, per cui $\tilde{Q}^T \tilde{Q} = I$ (matrice identità): $x^* = \tilde{Q}\tilde{R} (\tilde{R}^T I \tilde{R})^{-1} y = \tilde{Q}\tilde{R} (\tilde{R}^T \tilde{R})^{-1} y$

Si espande l'inversa del prodotto $(\tilde{R}^T \tilde{R})^{-1}$. L'inversa di un prodotto è il prodotto delle inverse in ordine inverso. Inoltre, l'inversa della trasposta è la trasposta dell'inversa: $(\tilde{R}^T)^{-1} = (\tilde{R}^{-1})^T$, indicata anche come $\tilde{R}^{-T}$. $(\tilde{R}^T \tilde{R})^{-1} = \tilde{R}^{-1} (\tilde{R}^T)^{-1} = \tilde{R}^{-1} \tilde{R}^{-T}$

Quindi: $x^* = \tilde{Q}\tilde{R} \tilde{R}^{-1} \tilde{R}^{-T} y$

Si usa il fatto che $\tilde{R} \tilde{R}^{-1} = I$: $x^* = \tilde{Q} I \tilde{R}^{-T} y = \tilde{Q} \tilde{R}^{-T} y$

**Formula per il Calcolo Pratico di $x^*$ tramite QR:** $x^* = \tilde{Q} \tilde{R}^{-T} y$

Questa è la formula con cui la soluzione $x^*$ viene calcolata nella pratica.

**Generazione della Fattorizzazione QR**

La fattorizzazione QR (e di conseguenza quella ridotta) di una matrice $A^T$ si ottiene applicando l'**algoritmo di ortonormalizzazione di Gram-Schmidt** alle colonne di $A^T$. Se $A$ è una matrice $M \times N$ con $M<N$ (sottodeterminato), $A^T$ è $N \times M$. Le colonne di $A^T$ (che sono i vettori riga di $A$) sono $N$ vettori in $\mathbb{R}^M$. Applicando Gram-Schmidt alle $M$ colonne linearmente indipendenti di $A^T$, si ottiene una base ortonormale di vettori, ad esempio $e_1, \ldots, e_M$. La matrice $\tilde{Q}$ è la matrice che raccoglie questi vettori ortonormali nelle sue colonne. $\tilde{Q} = [e_1 | \dots | e_M]$ La matrice $\tilde{R}$ raccoglie le proiezioni delle colonne di $A^T$ sui vettori ortonormali. Le sue entrate sono del tipo $\langle e_i, a^T_j \rangle$, dove $a^T_j$ è la $j$-esima colonna di $A^T$. $\tilde{R}$ è una matrice pseudo-triangolare superiore.

**Approssimazione della Derivata di una Funzione in un Punto**

Si cambia completamente argomento, passando dall'algebra lineare all'analisi numerica per funzioni.

**Passaggio ad un Nuovo Argomento**

Il nuovo argomento è l'approssimazione di oggetti completamente diversi, in particolare l'approssimazione di derivate e integrali. Entrambi questi argomenti sono legati al concetto di **interpolazione**.

**Approssimazione $f'$ Come Funzione**

Precedentemente si era parlato in modo blando di approssimazione di derivate quando si citavano le spline. Le spline, funzioni interpolanti super regolari, potevano essere usate (con un certo abuso) per approssimare la derivata della funzione approssimando $f'$ come una funzione essa stessa. Si approssimava $f'$ sul suo dominio.

__Approssimazione di $f'(X^*)$ Come Valore Puntuale_*

Adesso lo scenario cambia. Ci si occupa di approssimare non $f'$ come funzione, ma il **valore assunto dalla derivata prima in un certo punto specifico $x^*$** appartenente al dominio di definizione della funzione. L'obiettivo è approssimare un numero reale. Si considera una funzione $f$ definita su un intervallo $[a, b]$ della retta reale, a valori reali, e con una certa regolarità (almeno $C^1$). Si cerca un'approssimazione per il valore $f'(x^*)$ in un punto $x^* \in [a, b]$.

**Utilità del Concetto di Derivata (Prospettiva Ingegneristica)**

Prima di addentrarsi negli schemi di approssimazione, è utile comprendere perché il concetto di derivata è importante da un punto di vista fisico o ingegneristico. Il concetto di derivata è associato in generale al concetto di **velocità**, o più in generale, di **cambiamento** o **variazione**. In molte applicazioni, monitorare la _variazione_ di una quantità è molto più importante che monitorare la quantità _stessa_.

**Esempi:**

- **Deformazione di una membrana:** Dietro la deformazione c'è un'equazione (equazione dell'elasticità) la cui incognita è lo spostamento. Quantità legate alle _derivate_ dello spostamento sono le **deformazioni** e gli **sforzi** (o stress). Per applicazioni in ingegneria civile, analisi delle strutture, gli sforzi sono molto più importanti da monitorare rispetto alla variazione rispetto alla posizione di equilibrio.
- **Diffusione di un inquinante:** Se $f$ misura la concentrazione di un inquinante in un fiume o in una bacinella, la sua _derivata_ è legata al **flusso** di questo inquinante attraverso una porzione del dominio. A fini ambientali, può essere molto più interessante conoscere il flusso di inquinante che deteriora una zona da salvaguardare, piuttosto che la concentrazione esatta.

Questi esempi giustificano l'interesse nell'approssimare la derivata. A volte, l'interesse è proprio nel monitorare la derivata in **punti specifici** (es. punti di misurazione, aree protette), anziché su tutto il dominio.

**Definizione Analitica della Derivata**

Il calcolo della derivata in un punto in analisi si basa sul famoso **limite di un rapporto incrementale**. Una possibilità per scrivere $f'(x^*)$ è come il limite per $h$ che tende a zero del rapporto incrementale: $f'(x^*) = \lim_{h \to 0} \frac{f(X^*+h) - f(X^*)}{h}$

**Interpretazione Geometrica:** Se $f$ è la funzione e $X^*$ il punto, $f'(X^*)$ è il **coefficiente angolare della retta tangente** ad $f$ nel punto di coordinate $(x^*, f(x^*))$. È un numero. La definizione del rapporto incrementale, $\frac{f(X^*+h) - f(X^*)}{h}$, corrisponde al coefficiente angolare della retta **secante** che passa per i punti $(x^*, f(x^*))$ e $(X^*+h, f(X^*+h))$. Prendere il limite per $h \to 0$ significa far scorrere il secondo punto lungo la curva avvicinandolo al primo punto, in modo che la retta secante tenda a sovrapporsi alla retta tangente.

**Problema della Definizione Analitica per il Calcolo Numerico**

Con riferimento alla definizione analitica della derivata, che è esatta, c'è un aspetto che non è ben gestito dai calcolatori: il **limite**. Tutto ciò che risuona con l'infinito (come l'asintotico implicito nel concetto di limite) non è un concetto facilmente digeribile da un calcolatore.

**Schema di Approssimazione: Rimozione del Limite**

Per proporre un possibile schema per approssimare $f'(x^*)$, si è deciso semplicemente di **rimuovere il limite** dalla definizione analitica.

Si va quindi ad approssimare $f'(x^*)$ con un oggetto che, usando le notazioni della letteratura, viene indicato con $\Delta^+ f(x^*)$. Il simbolo $\Delta^+ f$ è considerato un unico blocco. Questo delta "+" indica una **differenza in avanti** (forward difference).

La definizione di $\Delta^+ f(x^*)$ coincide semplicemente con il rapporto incrementale della definizione esatta, ma senza il limite: $f'(x^*) \approx \Delta^+ f(x^*) = \frac{f(X^*+h) - f(X^*)}{h}$

**Il Ruolo di $h$:** Nella definizione analitica, $h$ tendeva a 0. Nello schema di approssimazione, $h$ è una **distanza arbitraria** scelta. Geometricamente, $h$ rappresenta la distanza tra $X^*$ e il punto $X^*+h$.

___
Certamente. Ecco una spiegazione dettagliata dei metodi alle differenze finite per approssimare la derivata prima di una funzione $f'(x^*)$, basata esclusivamente sui contenuti delle fonti fornite e strutturata secondo le tue indicazioni.

L'obiettivo è trovare delle **modalità per approssimare** il valore della derivata prima di una funzione $f$ in un punto $x^*$. La derivata prima in un punto è definita tramite un limite che coinvolge un rapporto incrementale. I metodi alle differenze finite eliminano il limite, utilizzando il rapporto incrementale per un valore di $h$ piccolo ma finito.

Vengono presentati tre schemi principali per questa approssimazione:

1. Schema alle Differenze Finite in Avanti
2. Schema alle Differenze Finite all'Indietro
3. Schema alle Differenze Finite Centrate

Analizzeremo ciascuno schema, la sua definizione, l'analisi dell'errore tramite sviluppo di Taylor e le relative proprietà.

### 1. Schema alle Differenze Finite in Avanti

#### Definizione

Questo è un primo modo per approssimare $f'(x^*)$. Si basa sul considerare il punto $X^*+h$, che si trova "in avanti" rispetto a $X^*$.

La formula per l'approssimazione, indicata con $\Delta_+ f(x^*)$, è data dal rapporto incrementale in avanti: $\Delta_+ f(x^*) = \frac{f(X^*+h) - f(X^*)}{h}$

Affinché questa approssimazione sia efficace, il valore di $h$ deve essere scelto "opportunamente piccolo".

#### Analisi dell'Errore tramite Sviluppo di Taylor

**Dimostrazione dell'Ordine di Accuratezza**

Per capire quanto sia buona questa approssimazione, si analizza l'errore $E_+ = f'(x^*) - \Delta_+ f(x^*)$. Uno strumento classico per fare questo è l'espressione di Taylor. Per l'analisi, si richiede che la funzione $f$ sia di classe $C^2$ sull'intervallo considerato, ad esempio $[a, b]$.

Si considera lo sviluppo di Taylor di $f(X^*+h)$ centrato in $X^*$ e troncato al secondo ordine: $f(X^*+h) = f(X^*) + h f'(x^*) + \frac{h^2}{2} f''(\alpha)$ dove $\alpha$ è un punto sconosciuto che si trova tra $X^*$ e $X^*+h$ ($\alpha \in (x^*, x^*+h)$).

Per isolare il termine della derivata prima $f'(x^*)$, si può riorganizzare l'equazione di Taylor. Dividendo per $h$: $\frac{f(X^*+h)}{h} = \frac{f(X^*)}{h} + f'(x^*) + \frac{h}{2} f''(\alpha)$

Spostando i termini in modo da confrontare $f'(x^*)$ con l'approssimazione $\Delta_+ f(x^*)$, si ottiene: $f'(x^*) - \frac{f(X^*+h) - f(X^*)}{h} = - \frac{h}{2} f''(\alpha)$

Quindi, l'errore di approssimazione per lo schema in avanti è dato da: $E_+ = f'(x^*) - \Delta_+ f(x^*) = - \frac{h}{2} f''(\alpha)$

#### Proprietà dell'Errore

Dall'espressione dell'errore, si possono fare le seguenti osservazioni:

- Il punto $\alpha$ è, come spesso accade negli sviluppi di Taylor con resto di Lagrange, un punto sconosciuto. Per calcolare il **massimo errore** pratico, si può stimare $f''(\alpha)$ prendendo il massimo del valore assoluto della derivata seconda nell'intervallo rilevante e si considera il valore assoluto del coefficiente di $h$.
- Per $h$ che tende a zero ($h \to 0$), l'errore $E_+$ tende a zero. Questo conferma che l'approssimazione diventa esatta nel limite.
- La **velocità di convergenza** dell'errore a zero è data dalla potenza di $h$ nell'espressione dell'errore. Poiché l'errore è proporzionale a $h^1$ (il termine $-h/2$ moltiplica $f''(\alpha)$), lo schema alle differenze finite in avanti è uno **schema del primo ordine** (o "curato al primo ordine") per $h \to 0$. Si dice anche che converge linearmente per $h$ che va a zero.

#### Connessione all'Interpolazione

**Esercizio Proposto**

C'è una connessione interessante tra questo schema e l'interpolazione polinomiale. Il valore $\Delta_+ f(x^*)$ rappresenta la derivata del polinomio lineare $P_1(x)$ che interpola la funzione $f$ nei punti $(x^*, f(x^*))$ e $(X^*+h, f(X^*+h))$.

Viene suggerito il seguente esercizio per verificare questa connessione e comprendere meglio l'interpolazione di Lagrange:

1. Considera le due coppie di dati: $(x^*, f(x^*))$ e $(X^*+h, f(X^*+h))$.
2. Costruisci il polinomio lineare di Lagrange $P_1(x)$ che interpola questi due punti.
3. Calcola la derivata di questo polinomio, $P_1'(x)$.
4. Valuta la derivata nel punto $x^*$.
5. Verifica che $P_1'(x^*) = \Delta_+ f(x^*)$.

Questo esercizio mostra la traduzione geometrica dell'approssimazione: la pendenza della secante tra $(x^*, f(x^*))$ e $(X^*+h, f(X^*+h))$ è l'approssimazione $\Delta_+ f(x^*)$, e questa pendenza è anche la derivata del polinomio che passa per quei due punti.

### 2. Schema alle Differenze Finite all'Indietro

#### Definizione

Questo è il secondo schema di approssimazione per $f'(x^*)$. Anziché considerare un punto in avanti, si considera un punto "all'indietro", $x^*-h$.

La definizione si basa sul rapporto incrementale all'indietro: $\Delta_- f(x^*) = \frac{f(x^*) - f(x^*-h)}{h}$

Graficamente, rappresenta il coefficiente angolare della secante che passa per i punti $(x^*-h, f(x^*-h))$ e $(x^*, f(x^*))$. Anche in questo caso, per $h \to 0$, la secante tende a sovrapporsi alla tangente in $x^*$.

#### Analisi dell'Errore tramite Sviluppo di Taylor

**Dimostrazione dell'Ordine di Accuratezza**

Come per lo schema in avanti, si analizza l'errore $E_- = f'(x^*) - \Delta_- f(x^*)$ utilizzando lo sviluppo di Taylor. Si richiede che la funzione $f$ sia di classe $C^2$.

Si considera lo sviluppo di Taylor di $f(x^*-h)$ centrato in $X^*$ e troncato al secondo ordine: $f(X^*-h) = f(x^*) - h f'(x^*) + \frac{h^2}{2} f''(\beta)$ dove $\beta$ è un punto sconosciuto che si trova tra $x^*-h$ e $X^*$ ($\beta \in (X^*-h, x^*)$). Si noti l'alternanza dei segni dovuta alla valutazione in $x^*-h$.

Per isolare $f'(x^*)$, si riorganizza l'equazione di Taylor: $h f'(x^*) = f(x^*) - f(x^*-h) + \frac{h^2}{2} f''(\beta)$

Dividendo per $h$: $f'(x^*) = \frac{f(x^*) - f(x^*-h)}{h} + \frac{h}{2} f''(\beta)$

Quindi, l'errore di approssimazione per lo schema all'indietro è dato da: $E_- = f'(x^*) - \Delta_- f(x^*) = \frac{h}{2} f''(\beta)$ Si noti che l'espressione dell'errore è "esattamente identica tranne che per un cambio di segno" rispetto all'errore dello schema in avanti.

#### Proprietà dell'Errore

- Anche per questo schema, per $h \to 0$, l'errore $E_-$ tende a zero.
- L'errore è proporzionale a $h^1$. Pertanto, lo schema alle differenze finite all'indietro è anch'esso uno **schema del primo ordine** per $h \to 0$.

#### Connessione all'Interpolazione

**Esercizio Proposto**

Analogamente al caso in avanti, $\Delta_- f(x^*)$ è la derivata (valutata in $X^*$) del polinomio lineare che interpola $f$ nei punti $(X^*-h, f(x^*-h))$ e $(x^*, f(x^*))$.

### 3. Schema alle Differenze Finite Centrate

#### Motivazione

Gli schemi in avanti e all'indietro sono entrambi del primo ordine, il che implica una velocità di convergenza dell'errore a zero non particolarmente elevata. L'obiettivo è trovare uno schema con un ordine di accuratezza superiore, idealmente un **ordine 2**, che convergerebbe "molto più velocemente".

Geometricamente, si considera la secante che passa per i punti $(x^*-h, f(x^*-h))$ e $(X^*+h, f(X^*+h))$. Questa retta appare "molto più simile alla mia tangente" in $x^*$ rispetto alle secanti utilizzate negli schemi in avanti e all'indietro.

#### Definizione

Questo terzo schema si basa sul rapporto incrementale "centrato", utilizzando i punti $x^*-h$ e $X^*+h$ simmetricamente rispetto a $X^*$.

La formula per l'approssimazione, indicata con $\Delta f(x^*)$ (senza segno "+" o "-"), è data da: $\Delta f(x^*) = \frac{f(X^*+h) - f(X^*-h)}{2h}$ Il denominatore è $2h$ perché la distanza sull'asse x tra i due punti ($x^*-h$ e $x^*+h$) è $2h$.

#### Analisi dell'Errore tramite Sviluppo di Taylor

**Dimostrazione dell'Ordine di Accuratezza**

Per analizzare l'errore $E = f'(x^*) - \Delta f(x^*)$, si utilizza ancora lo sviluppo di Taylor, ma stavolta è necessario troncare ad un ordine superiore. Per ottenere uno schema del secondo ordine, è necessario richiedere che la funzione $f$ sia di classe $C^3$. Questo è il "prezzo" da pagare per una convergenza più rapida.

Si considerano gli sviluppi di Taylor di $f(X^*+h)$ e $f(X^*-h)$ centrati in $x^*$ e troncati al terzo ordine:

Sviluppo per $f(X^*+h)$: $f(X^*+h) = f(x^*) + h f'(x^*) + \frac{h^2}{2} f''(x^*) + \frac{h^3}{6} f'''(\sigma)$ dove $\sigma \in (x^*, x^*+h)$.

Sviluppo per $f(x^*-h)$: $f(x^*-h) = f(x^*) - h f'(x^*) + \frac{h^2}{2} f''(x^*) - \frac{h^3}{6} f'''(\gamma)$ dove $\gamma \in (x^*-h, x^*)$.

Per ottenere la forma desiderata $\frac{f(X^*+h) - f(X^*-h)}{2h}$, si sottraggono membro a membro i due sviluppi di Taylor: $(f(X^*+h) - f(X^*-h)) = [f(x^*) + h f'(x^*) + \frac{h^2}{2} f''(x^*) + \frac{h^3}{6} f'''(\sigma)] - [f(x^*) - h f'(x^*) + \frac{h^2}{2} f''(x^*) - \frac{h^3}{6} f'''(\gamma)]$

Sottraendo, i termini con derivate di ordine pari ($f(x^*)$ e $f''(x^*)$) si cancellano, e i termini con derivate di ordine dispari si sommano: $f(X^*+h) - f(X^*-h) = 2h f'(x^*) + \frac{h^3}{6} f'''(\sigma) + \frac{h^3}{6} f'''(\gamma)$

Ora, per ottenere il rapporto incrementale centrato, si divide tutta l'equazione per $2h$: $\frac{f(X^*+h) - f(X^*-h)}{2h} = \frac{2h f'(x^*)}{2h} + \frac{h^3}{6} \frac{f'''(\sigma)}{2h} + \frac{h^3}{6} \frac{f'''(\gamma)}{2h}$ $\frac{f(X^*+h) - f(X^*-h)}{2h} = f'(x^*) + \frac{h^2}{12} f'''(\sigma) + \frac{h^2}{12} f'''(\gamma)$

Riorganizzando per ottenere l'espressione dell'errore $f'(x^*) - \Delta f(x^*)$: $f'(x^*) - \frac{f(X^*+h) - f(X^*-h)}{2h} = - \frac{h^2}{12} f'''(\sigma) - \frac{h^2}{12} f'''(\gamma)$ $f'(x^*) - \Delta f(x^*) = - \frac{h^2}{12} (f'''(\sigma) + f'''(\gamma))$

Quindi, l'errore di approssimazione per lo schema centrato è dato da: $E = f'(x^*) - \Delta f(x^*) = - \frac{h^2}{12} (f'''(\sigma) + f'''(\gamma))$

#### Proprietà dell'Errore

- Anche in questo caso, per $h \to 0$, l'errore $E$ tende a zero.
- La potenza di $h$ nell'espressione dell'errore è 2 ($h^2$). Ciò significa che lo schema alle differenze finite centrate è uno **schema di ordine 2** per $h \to 0$.
- Uno schema di ordine 2 converge all'esatto valore $f'(x^*)$ "molto più velocemente" rispetto a uno schema di ordine 1, all'avvicinarsi di $h$ a zero.

### 4. Confronto e Considerazioni Pratiche

#### Scelta dello Schema

Alla luce dell'analisi degli errori, si hanno a disposizione tre schemi per approssimare la derivata prima in un punto:

- $\Delta_+ f(x^*)$: Ordine 1, richiede $f \in C^2$.
- $\Delta_- f(x^*)$: Ordine 1, richiede $f \in C^2$.
- $\Delta f(x^*)$: Ordine 2, richiede $f \in C^3$.

In generale, se la funzione $f$ è sufficientemente regolare (almeno $C^3$), si preferisce utilizzare lo **schema centrato** ($\Delta f(x^*)$) perché, essendo di ordine superiore (ordine 2), garantisce una convergenza dell'errore a zero molto più rapida al diminuire di $h$ rispetto agli schemi di ordine 1.

#### Vincoli sulla Scelta

Ci sono due motivi principali per cui potrebbe non essere possibile o conveniente utilizzare lo schema centrato:

1. **Regolarità della Funzione:** Se la funzione $f$ è solo $C^2$ (ma non $C^3$), non si può garantire che l'errore dello schema centrato vada a zero con la velocità di $h^2$ perché lo sviluppo di Taylor al terzo ordine e l'esistenza della derivata terza potrebbero non essere validi. In questo caso, si è limitati agli schemi in avanti o all'indietro, che richiedono solo la regolarità $C^2$ per essere di ordine 1.
2. **Disponibilità delle Informazioni (Estremi dell'Intervallo):** Se si deve calcolare la derivata in un punto che si trova all'estremità dell'intervallo di definizione della funzione.
    - Se si è nel punto iniziale dell'intervallo (ad esempio, il punto $A$), non si hanno punti disponibili "all'indietro" ($x^*-h$). In questo caso, non è possibile costruire lo schema all'indietro ($\Delta_-$) né lo schema centrato ($\Delta$), poiché entrambi richiedono informazioni a $x^*-h$. L'unica opzione è utilizzare lo **schema in avanti** ($\Delta_+$), che richiede solo informazioni a $X^*$ e $X^*+h$.
    - Se si è nel punto finale dell'intervallo (ad esempio, il punto $B$), non si hanno punti disponibili "in avanti" ($x^*+h$). In questo caso, non è possibile costruire lo schema in avanti ($\Delta_+$) né lo schema centrato ($\Delta$). L'unica opzione è utilizzare lo **schema all'indietro** ($\Delta_-$).
    - Per i punti interni all'intervallo, invece, si ha la libertà di scegliere lo schema desiderato, compatibilmente con la regolarità della funzione.

In sintesi, si utilizza lo schema centrato quando possibile (funzione $C^3$ e punto interno), altrimenti si ripiega su uno degli schemi del primo ordine, che sono sempre utilizzabili se la funzione è almeno $C^2$ (per l'analisi dell'ordine), e diventano obbligatori agli estremi dell'intervallo. Per la mera scrittura della formula, la regolarità $C^1$ nel punto potrebbe essere sufficiente.

#### References
[[mateNum- Lez16_trascrizione]]


