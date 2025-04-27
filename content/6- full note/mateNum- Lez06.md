---
title: "mateNum- Lez06"
---

2025-03-03 18:01

_Status: #flashcard_finite  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine]] [[matematica numerica]]

## mateNum- Lez06
### Metodi Iterativi per Sistemi di Equazioni Lineari

I metodi iterativi sono utilizzati per risolvere sistemi di equazioni lineari attraverso una successione di approssimazioni. L'idea fondamentale è di partire da una **stima iniziale** della soluzione e di raffinare iterativamente questa stima fino a raggiungere un livello di accuratezza desiderato.

#### Schema Generale

Un metodo iterativo genera una successione di iterate regolata dalla legge:

$x_{k+1} = Bx_k + g$

dove:

- $x_{k+1}$ è la nuova iterazione
- $x_k$ è l'iterazione precedente
- $B$ è la matrice di iterazione
- $g$ è un vettore

#### Convergenza e Consistenza

- **Convergenza**: Si desidera che la successione delle iterate converga alla soluzione del sistema lineare.
- **Consistenza**: Il metodo deve essere consistente, ovvero la soluzione del sistema deve essere un punto fisso dell'iterazione.

#### Condizione Necessaria e Sufficiente per la Convergenza

La condizione necessaria e sufficiente per la convergenza è che il **raggio spettrale** della matrice di iterazione $B$ sia strettamente minore di 1.

### Metodo di Richardson

Il metodo di Richardson è una famiglia di metodi iterativi che parte dalla riscrittura del sistema lineare originale.

#### Splitting

Si introduce una **matrice di precondizionamento** $P$ e un parametro $\alpha_k$. Il sistema viene riscritto come:

$\alpha_k A = P - (P - \alpha_k A)$

#### Schema Iterativo

Lo schema iterativo di Richardson è dato da:

$x_{k+1} = (I - \alpha_k P^{-1} A)x_k + \alpha_k P^{-1} b$

dove:

- $I$ è la matrice identità
- $P$ è la matrice di precondizionamento
- $\alpha_k$ è un parametro di accelerazione

#### Metodo di Richardson Stazionario e Dinamico

- **Stazionario**: Se $\alpha_k$ è uguale ad ogni iterazione ($\alpha_k = \alpha$).
- **Dinamico**: Se $\alpha_k$ varia ad ogni iterazione.

#### Riscrittura del Metodo di Richardson
![[Pasted image 20250303175021.png]]
Un modo computazionalmente utile per riscrivere il metodo di Richardson è:

$x_{k+1} = x_k + \alpha_k P^{-1} (b - Ax_k)$

dove $r_k = b - Ax_k$ è il **residuo**.

#### Residuo Precondizionato

La correzione $z_k = P^{-1} r_k$ è chiamata **residuo precondizionato**. In pratica, per calcolare $z_k$, si risolve il sistema lineare $Pz_k = r_k$.

#### Scelta del Precondizionatore

La scelta del precondizionatore $P$ è cruciale. Idealmente, $P$ dovrebbe essere:

- Invertibile
- Facile da invertire (ad esempio, una matrice diagonale o tridiagonale)
- In grado di migliorare il condizionamento del sistema

Tuttavia, non esiste un criterio univoco per scegliere $P$, e la scelta è spesso **dipendente dal problema**.

### Metodo di Jacobi

Il metodo di Jacobi è un metodo iterativo in cui si usa la prima equazione per trovare la prima incognita, la seconda equazione per trovare la seconda incognita, e così via.

#### Derivazione

Partendo da un sistema di tre equazioni in tre incognite:

$a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1$

$a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = b_2$

$a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = b_3$

Si ricavano le incognite:

$x_1 = \frac{1}{a_{11}}(b_1 - a_{12}x_2 - a_{13}x_3)$

$x_2 = \frac{1}{a_{22}}(b_2 - a_{21}x_1 - a_{23}x_3)$

$x_3 = \frac{1}{a_{33}}(b_3 - a_{31}x_1 - a_{32}x_2)$

#### Schema Iterativo per Componenti

Si associa la nuova iterazione alle quantità a sinistra e l'iterazione precedente a quelle a destra:

$x_1^{k+1} = \frac{1}{a_{11}}(b_1 - a_{12}x_2^k - a_{13}x_3^k)$

$x_2^{k+1} = \frac{1}{a_{22}}(b_2 - a_{21}x_1^k - a_{23}x_3^k)$

$x_3^{k+1} = \frac{1}{a_{33}}(b_3 - a_{31}x_1^k - a_{32}x_2^k)$

#### Generalizzazione per Componenti

In generale, per un sistema di $n$ equazioni:

$$x_i^{k+1} = \frac{1}{a_{ii}}(b_i - \sum_{j=1, j\neq i}^{n} a_{ij}x_j^k)$$

per $i = 1, \dots, n$ e $k \geq 0$ e $a_{ii}\neq 0$.

#### Implementazione Parallela

L'algoritmo di Jacobi è **ben parallelizzabile**, poiché ogni componente della nuova iterazione può essere calcolata indipendentemente dalle altre.

#### Riscrittura Matriciale
![[Pasted image 20250303175406.png]]
Sia $D$ la matrice diagonale formata dalle entrate diagonali di $A$:

$D = \begin{bmatrix} a_{11} & 0 & 0 \\ 0 & \ddots & 0 \\ 0 & 0 & a_{nn} \end{bmatrix}$

Lo schema iterativo può essere riscritto in forma matriciale come:

$x^{k+1} = D^{-1}(b - (A - D)x^k)$

#### Identificazione di B e G

Dalla forma matriciale, si identifica:

- $B_J = D^{-1}(A - D)$
- $g_J = D^{-1}b$

#### Riscrittura come Metodo di Richardson

Lo schema di Jacobi può essere visto come un metodo di Richardson con:

- $P = D$ (matrice diagonale)
- $\alpha_k = 1$ (stazionario)

Quindi:

$x^{k+1} = x^k + D^{-1}r^k$

dove $r^k = b - Ax^k$ è il residuo.
![[Pasted image 20250303175451.png]]
### Metodo di Gauss-Seidel

Il metodo di Gauss-Seidel è una variante del metodo di Jacobi in cui, nel calcolo di una componente, si utilizzano **le componenti già aggiornate** nella stessa iterazione.

#### Schema Iterativo per Componenti (3x3)

$x_1^{k+1} = \frac{1}{a_{11}}(b_1 - a_{12}x_2^k - a_{13}x_3^k)$

$x_2^{k+1} = \frac{1}{a_{22}}(b_2 - a_{21}x_1^{k+1} - a_{23}x_3^k)$

$x_3^{k+1} = \frac{1}{a_{33}}(b_3 - a_{31}x_1^{k+1} - a_{32}x_2^{k+1})$

#### Generalizzazione per Componenti

$$x_i^{k+1} = \frac{1}{a_{ii}}(b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{k+1} - \sum_{j=i+1}^{n} a_{ij}x_j^k)$$

per $i = 1, \dots, n$ e $k \geq 0$ e $a_{ii} \neq o$.

#### Implementazione Seriale

A differenza di Jacobi, Gauss-Seidel è **intrinsicamente seriale**, poiché ogni componente dipende dalle precedenti già aggiornate.

#### Riscrittura Matriciale

Si decompone la matrice $A$ come:

$A = D - E - F$

dove:
![[Pasted image 20250303175608.png]]
- $D$ è la matrice diagonale
- $-E$ è la parte strettamente triangolare inferiore di $A$
- $A-D-(-E)$ è la parte strettamente triangolare superiore di $A$

#### Schema Iterativo Matriciale
![[Pasted image 20250303175839.png]]
$(D - E)x^{k+1} = b + (D-E-A)x^k$

#### Identificazione di B e G

$B_{GS} = (D - E)^{-1}(D-E-A)$

$g_{GS} = (D - E)^{-1}b$

#### Riscrittura come Metodo di Richardson

$x^{k+1} = x^k + (D - E)^{-1}r^k$

dove $r^k = b - Ax^k$ è il residuo. Quindi:

- $P = D - E$
- $\alpha_k = 1$

### Metodo di Rilassamento di Jacobi (JOR)

Il metodo JOR (Jacobi Over-Relaxation) introduce un **parametro di rilassamento** $\omega$ per accelerare la convergenza.

#### Schema Iterativo per Componenti

$$x_i^{k+1} = \frac{\omega}{a_{ii}}(b_i - \sum_{j=1, j\neq i}^{n} a_{ij}x_j^k) + (1 - \omega)x_i^k$$

#### Parametro di Rilassamento $\omega$

- $0 < \omega < 1$: Sottorilassamento
- $\omega > 1$: Sovrarilassamento
- $\omega = 1$: Metodo di Jacobi

#### Riscrittura Matriciale
![[Pasted image 20250303175911.png]]
$Dx^{k+1} = \omega(b - (A - D)x^k) + (1 - \omega)Dx^k$

#### Identificazione di B e G

$B_{JOR} = \omega D^{-1}(A - D) + (1 - \omega)I$

$g_{JOR} = \omega D^{-1}b$

#### Riscrittura come Metodo di Richardson
![[Pasted image 20250303175921.png]]
$x^{k+1} = x^k + \omega D^{-1}r^k$

Quindi:

- $P = D$
- $\alpha_k = \omega$

### Metodo di Rilassamento di Gauss-Seidel (SOR)

Il metodo SOR (Successive Over-Relaxation) combina le idee di Gauss-Seidel e del rilassamento.

#### Schema Iterativo per Componenti

$$x_i^{k+1} = \frac{\omega}{a_{ii}}(b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{k+1} - \sum_{j=i+1}^{n} a_{ij}x_j^k) + (1 - \omega)x_i^k$$

#### Riscrittura Matriciale
![[Pasted image 20250303175943.png]]
$(D - \omega E)x^{k+1} = \omega b + (\omega F + (1 - \omega)D)x^k$

#### Identificazione di B e G

$B_{SOR} = (D - \omega E)^{-1}(\omega F + (1 - \omega)D)$

$g_{SOR} = (D - \omega E)^{-1}\omega b$

#### Riscrittura come Metodo di Richardson

$x^{k+1} = x^k + (D - \omega E)^{-1}r^k$

Quindi:

- $P = (D - \omega E)$
- $\alpha_k = \omega$

### Convergenza di Jacobi e Gauss-Seidel

#### Condizioni Sufficienti
![[Pasted image 20250303180000.png]]
Se $A$ è **a dominanza diagonale stretta** per righe o per colonne, allora sia Jacobi che Gauss-Seidel convergono.

#### Ulteriore Condizione per Gauss-Seidel

Se $A$ è **simmetrica definita positiva** (SPD), allora Gauss-Seidel converge.

#### Osservazione

Le condizioni sufficienti per la convergenza di Jacobi e Gauss-Seidel si basano sulle proprietà della matrice $A$, non sulle matrici di iterazione $B_J$ e $B_{GS}$.
___


Ecco una spiegazione dettagliata e formattata dei metodi iterativi di Jacobi e Gauss-Seidel, includendo i passaggi matematici, esempi ed esercizi forniti, basata sulle fonti fornite.

### Metodi Iterativi per la Risoluzione di Sistemi di Equazioni Lineari

L'obiettivo è risolvere sistemi di equazioni lineari utilizzando metodi iterativi. Questi metodi generano una successione di approssimazioni che, idealmente, convergono alla soluzione esatta.

#### Schema Generale di Iterazione

- Si parte da una legge di ricorrenza: la nuova iterazione è una modifica della precedente.
- Matematicamente: $x_{k+1} = B x_k + g$, dove:
    - $x_{k+1}$ è la nuova iterazione.
    - $B$ è la matrice di iterazione.
    - $x_k$ è l'iterazione precedente.
    - $g$ è un vettore.
- **Obiettivi**:
    - **Convergenza**: la successione di iterazioni deve convergere alla soluzione esatta.
    - **Consistenza**: ogni iterazione deve essere "sensata" rispetto al sistema originale.
- **Condizione Sufficiente per la Convergenza**: $|B| < 1$ per qualche norma matriciale.
- **Condizione Necessaria e Sufficiente per la Convergenza**: il raggio spettrale di $B$ deve essere minore di 1.

#### Schemi di Richardson

- Sono una famiglia di metodi iterativi.
- Si parte dal sistema $Ax = b$.
- Si moltiplica il sistema per una quantità reale $\alpha_k$: $\alpha_k Ax = \alpha_k b$.
- Si introduce uno splitting della matrice $A$: $\alpha_k A = P - (P - \alpha_k A)$, dove $P$ è il precondizionatore.
- Si riscrive il problema come: $Px = (P - \alpha_k A)x + \alpha_k b$.
- Si identifica il termine a sinistra con la nuova iterazione e quello a destra con la vecchia:
    - $x_{k+1} = (I - \alpha_k P^{-1} A)x_k + \alpha_k P^{-1} b$
- **Matrice di Iterazione**: $B(\alpha_k) = I - \alpha_k P^{-1} A$
- **Vettore**: $g(\alpha_k) = \alpha_k P^{-1} b$
- **Tipi di Schemi di Richardson**:
    - **Stazionario**: $\alpha_k = \alpha$ (costante per ogni iterazione).
    - **Dinamico**: $\alpha_k$ varia ad ogni iterazione.

#### Riscrittura dello Schema di Richardson

- Partendo da $x_{k+1} = x_k - \alpha_k P^{-1} A x_k + \alpha_k P^{-1} b$
- Si espande il prodotto: $x_{k+1} = x_k + \alpha_k P^{-1} (b - A x_k)$
- Si definisce il **residuo** $r_k = b - A x_k$.
- Lo schema diventa: $x_{k+1} = x_k + \alpha_k P^{-1} r_k$
- Si introduce la **correzione** $z_k = P^{-1} r_k$, detta **residuo precondizionato**.
    - Per calcolare $z_k$, si risolve il sistema lineare $P z_k = r_k$.
- **Considerazioni Implementative**:
    - Calcolare l'inversa di una matrice è computazionalmente costoso.
    - Si risolve il sistema lineare $Pz_k = r_k$ invece di calcolare $P^{-1}$.
    - Se si risolve un sistema con la stessa matrice $P$ ad ogni iterazione, si può calcolare la fattorizzazione LU di $P$ una sola volta.
    - Si può scegliere $P$ diagonale, tridiagonale o triangolare per semplificare la risoluzione del sistema.
- **Scelta del Precondizionatore**:
    - $P$ deve essere invertibile.
    - La risoluzione del sistema $Pz_k = r_k$ deve essere semplice.
    - $P$ deve migliorare il condizionamento del sistema originale.
    - La scelta di $P$ è problem-dependent.

### Metodo di Jacobi

#### Derivazione

1. **Partiamo da un sistema di 3 equazioni in 3 incognite**:
    - $a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1$
    - $a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = b_2$
    - $a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = b_3$
2. **Ricaviamo ogni incognita dalla corrispondente equazione**:
    - $x_1 = \frac{1}{a_{11}}(b_1 - a_{12}x_2 - a_{13}x_3)$
    - $x_2 = \frac{1}{a_{22}}(b_2 - a_{21}x_1 - a_{23}x_3)$
    - $x_3 = \frac{1}{a_{33}}(b_3 - a_{31}x_1 - a_{32}x_2)$
3. **Associamo le quantità a sinistra con la nuova iterazione (k+1) e quelle a destra con l'iterazione precedente (k)**:
    - $x_1^{k+1} = \frac{1}{a_{11}}(b_1 - a_{12}x_2^k - a_{13}x_3^k)$
    - $x_2^{k+1} = \frac{1}{a_{22}}(b_2 - a_{21}x_1^k - a_{23}x_3^k)$
    - $x_3^{k+1} = \frac{1}{a_{33}}(b_3 - a_{31}x_1^k - a_{32}x_2^k)$

#### Generalizzazione del Metodo di Jacobi

Per un sistema di $n$ equazioni in $n$ incognite, la componente $i$-esima del vettore all'iterazione $k+1$ è data da:

$x_i^{k+1} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1, j\neq i}^{n} a_{ij}x_j^k \right)$

dove:

- $x_i^{k+1}$ è la componente $i$-esima del vettore $x$ all'iterazione $k+1$.
- $a_{ii}$ è l'elemento diagonale della matrice $A$ (deve essere diverso da zero).
- $b_i$ è la componente $i$-esima del vettore $b$.
- $a_{ij}$ sono gli elementi della matrice $A$.
- $x_j^k$ è la componente $j$-esima del vettore $x$ all'iterazione $k$.
- La sommatoria calcola la somma di tutti i termini tranne quello sulla diagonale.

#### Implementazione

- **Implementabile in parallelo**: ogni processore può calcolare una componente del vettore $x^{k+1}$ indipendentemente dagli altri.

#### Riscrittura Matriciale

1. **Introduzione della matrice diagonale** $D$: matrice che contiene solo gli elementi diagonali di $A$.
2. **Introduzione dei vettori** $x^k$ e $x^{k+1}$: vettori colonna contenenti le componenti delle iterazioni $k$ e $k+1$.
3. **Moltiplicando entrambi i membri per** $a_{ii}$: $a_{ii} x_i^{k+1} = b_i - \sum_{j=1, j\neq i}^{n} a_{ij}x_j^k$
4. **Riscrivendo in forma matriciale**: $Dx^{k+1} = b - (A-D)x^k$
5. **Moltiplicando per** $D^{-1}$: $x^{k+1} = D^{-1}b - D^{-1}(A-D)x^k$
6. **Semplificando**: $x^{k+1} = D^{-1}b + (I - D^{-1}A)x^k$

#### Forma A e B

- **Forma A**: $x^{k+1} = B_J x^k + g_J$, dove:
    - $B_J = I - D^{-1}A$ (matrice di iterazione di Jacobi).
    - $g_J = D^{-1}b$ (vettore di Jacobi).

#### Riscrittura alla Richardson

- $x^{k+1} = x^k + D^{-1}(b - Ax^k)$
- $x^{k+1} = x^k + D^{-1}r^k$, dove $r^k$ è il residuo.

#### Identificazione con lo Schema di Richardson

- Il metodo di Jacobi è uno schema di Richardson stazionario.
- $P_J = D$ (precondizionatore è la matrice diagonale).
- $\alpha_k = 1$ (parametro di accelerazione è costante e uguale a 1).

### ==Metodo di Gauss-Seidel

#### Modifica al Metodo di Jacobi

- Si utilizzano le componenti già aggiornate della nuova iterazione (k+1) non appena sono disponibili.
- Questo dovrebbe accelerare la convergenza (ma non è sempre vero).

#### Implementazione

- **Implementazione seriale**: a differenza di Jacobi, Gauss-Seidel non è parallelizzabile perché ogni componente dipende dalle precedenti già aggiornate.

#### Formulazione per Componenti

- $x_1^{k+1} = \frac{1}{a_{11}}(b_1 - a_{12}x_2^k - a_{13}x_3^k)$
- $x_2^{k+1} = \frac{1}{a_{22}}(b_2 - a_{21}x_1^{k+1} - a_{23}x_3^k)$
- $x_3^{k+1} = \frac{1}{a_{33}}(b_3 - a_{31}x_1^{k+1} - a_{32}x_2^{k+1})$

#### Generalizzazione

$x_i^{k+1} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{k+1} - \sum_{j=i+1}^{n} a_{ij}x_j^k \right)$

#### Riscrittura con Sommatorie

La sommatoria di Jacobi viene divisa in due somme: una per le componenti "nuove" (k+1) e una per le componenti "vecchie" (k).

#### Notazione Matriciale

1. **Decomposizione della matrice** A: $A = D - E + (A - D + E)$, dove:
    - $D$ è la matrice diagonale.
    - $-E$ è la parte strettamente triangolare inferiore di $A$.
    - $A - D + E$ è la parte strettamente triangolare superiore di $A$.

#### Riscrittura Matriciale

1. **Partendo dall'equazione**: $Dx^{k+1} = b + E x^{k+1} - (A - D + E)x^k$
2. **Riorganizzando**: $(D - E)x^{k+1} = b - (A - D + E)x^k$

#### Forma A e B

- **Forma A**: $x^{k+1} = B_{GS} x^k + g_{GS}$, dove:
    - $B_{GS} = (D - E)^{-1}(D - E - A)$
    - $g_{GS} = (D - E)^{-1}b$

#### Riscrittura alla Richardson

- $x^{k+1} = x^k + (D - E)^{-1}(b - Ax^k)$
- $P_{GS} = D - E$ (precondizionatore è la matrice triangolare inferiore).
- $\alpha_k = 1$ (parametro di accelerazione è costante e uguale a 1).

### Metodo di Rilassamento di Jacobi (JOR)

- È una combinazione lineare del sistema classico e di $x_i^k$.
- $x_i^{k+1} = \frac{\omega}{a_{ii}} \left( b_i - \sum_{j=1, j\neq i}^{n} a_{ij}x_j^k \right) + (1-\omega)x_i^k$
- $\omega$ è il parametro di rilassamento:
    - $0 < \omega < 1$: sottorilassamento.
    - $\omega > 1$: sovrarilassamento.
    - $\omega = 1$: metodo di Jacobi.

#### Riscrittura

$x_i^{k+1} = \omega D^{-1}(b - (A-D)x^k)+(1-\omega)x^k$

#### Forma A e B

- $B_{JOR} = \omega(I - D^{-1}A) + (1-\omega)I = \omega B_J + (1-\omega)I$

#### Riscrittura alla Richardson

$x^{k+1} = x^k + \omega D^{-1} r^k$

$P_{JOR} = D$ precondizionatore come Jacobi $\alpha_k = \omega$ parametro di accelerazione

### Metodo di Rilassamento di Gauss-Seidel (SOR)

- Successive Over-Relaxation.
- $x_i^{k+1} = \frac{\omega}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{k+1} - \sum_{j=i+1}^{n} a_{ij}x_j^k \right) + (1-\omega)x_i^k$
- Se $\omega = 1$, si ottiene Gauss-Seidel.

#### Forma matriciale

$D x^{k+1} = \omega b + \omega E x^{k+1} - \omega (A-D+E) x^k + (1-\omega) D x^k$

#### Forma A e B

- $B_{SOR} = (I - \omega D^{-1} E)^{-1}((1-\omega)I + \omega D^{-1} (D-E-A))$
- $g_{SOR} = (I - \omega D^{-1} E)^{-1} \omega D^{-1}b$

#### Riscrittura alla Richardson

$x^{k+1} = x^k + \omega (D - \omega E)^{-1} r^k$

$P_{SOR} = (D - \omega E)$ $\alpha_k = \omega$

### Convergenza

- **Condizione Necessaria e Sufficiente**: il raggio spettrale della matrice di iterazione (BJ, BGS, BJSR, BSOR) deve essere minore di 1.
- **Condizioni Sufficienti per Jacobi e Gauss-Seidel**: se la matrice $A$ è a dominanza diagonale stretta per righe o per colonne, allora Jacobi e Gauss-Seidel convergono.
- **Condizione Sufficiente Aggiuntiva per Gauss-Seidel**: se $A$ è definita positiva, allora Gauss-Seidel converge.
____

Ecco la spiegazione del professore riguardo alle flashcard, integrata con i passaggi matematici, gli esempi e gli esercizi, formattata in modo chiaro e leggibile.

### ==Metodo di Gauss-Seidel: spiegazione dettagliata

#### Idea di base

L'idea alla base del metodo di Gauss-Seidel è di **utilizzare le componenti già aggiornate** durante il calcolo delle nuove iterate. Invece di aspettare di completare un'intera iterazione per aggiornare tutte le componenti del vettore soluzione, Gauss-Seidel sfrutta immediatamente i nuovi valori non appena sono disponibili.

#### Iterazione

- Nel metodo di Jacobi, la componente _i_-esima della nuova iterazione dipende solo dalle componenti dell'iterata precedente.
- Nel metodo di Gauss-Seidel, la componente _i_-esima della nuova iterazione dipende dalle componenti dell'iterata precedente, **ma anche dalle componenti già aggiornate** nella stessa iterazione.

#### Esempio 3x3

Consideriamo un sistema 3x3:

$x_1^{k+1} = \frac{1}{a_{11}} (b_1 - a_{12} x_2^k - a_{13} x_3^k)$

$x_2^{k+1} = \frac{1}{a_{22}} (b_2 - a_{21} x_1^{\color{red}{k+1}} - a_{23} x_3^k)$

$x_3^{k+1} = \frac{1}{a_{33}} (b_3 - a_{31} x_1^{\color{red}{k+1}} - a_{32} x_2^{\color{red}{k+1}})$

Si noti come, nel calcolo di $x_2^{k+1}$ e $x_3^{k+1}$, si utilizzino i valori di $x_1^{k+1}$ e $x_2^{k+1}$ già calcolati nella stessa iterazione (indicati in rosso).

#### Implementazione

L'implementazione del metodo di Gauss-Seidel è **seriale**, poiché ogni componente dipende dalle precedenti già aggiornate. Questo significa che non è possibile parallelizzare facilmente l'algoritmo come nel caso di Jacobi.

#### Formulazione generale

La formula generale per il metodo di Gauss-Seidel è:

$x_i^{k+1} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij} x_j^{k+1} - \sum_{j=i+1}^{n} a_{ij} x_j^k \right)$

dove:

- $x_i^{k+1}$ è la _i_-esima componente del vettore soluzione all'iterazione _k+1_.
- $a_{ii}$ è l'elemento diagonale della matrice dei coefficienti.
- $b_i$ è la _i_-esima componente del vettore dei termini noti.
- La prima sommatoria considera le componenti **già aggiornate** ($x_j^{k+1}$).
- La seconda sommatoria considera le componenti dell'iterata precedente ($x_j^k$).

#### Riscrittura in forma matriciale

Per riscrivere il metodo di Gauss-Seidel in forma matriciale, è utile **decomporre la matrice** $A$ come segue:

$A = D - E - F$

dove:

- $D$ è la matrice diagonale contenente gli elementi diagonali di $A$.
- $-E$ è la matrice triangolare inferiore stretta (elementi sotto la diagonale).
- $A-D-(-E)$ è la matrice triangolare superiore stretta (elementi sopra la diagonale). Quindi $F = A - D + E$.

#### Notazione

È importante prestare attenzione al segno di $E$, poiché viene definita come $-E$ la parte triangolare inferiore.

Quindi $-E$ è la matrice triangolare inferiore della matrice $A$:

$E = \begin{bmatrix} 0 & 0 & 0 \\ -a_{21} & 0 & 0 \\ -a_{31} & -a_{32} & 0 \end{bmatrix}$

#### Forma matriciale del metodo di Gauss-Seidel

Usando questa decomposizione, il metodo di Gauss-Seidel può essere scritto in forma matriciale come:

$Dx^{k+1} = b - Ex^{k+1} - F x^k$

Riordinando i termini:

$(D - E) x^{k+1} = b - F x^k$

#### Iterazione

$x^{k+1} = (D - E)^{-1} (b - F x^k)$

Questa è la forma matriciale del metodo di Gauss-Seidel.

#### Ulteriori passaggi

Per arrivare alle forme A e B, si possono seguire questi passaggi:

$x^{k+1} = (D - E)^{-1} b - (D - E)^{-1} F x^k$

$x^{k+1} = (D - E)^{-1} b + (I - (D - E)^{-1} A )x^k$

- **Matrice di iterazione**: $B_{GS} = -(D-E)^{-1}F = I - (D - E)^{-1} A$
- **Vettore G**: $G_{GS} = (D - E)^{-1} b$

#### Riscrittura alla Richardson

Partendo dalla forma matriciale:

$x^{k+1} = (D - E)^{-1} b - (D - E)^{-1} F x^k$

Si aggiunge e sottrae $x^k$:

$x^{k+1} = x^k + (D - E)^{-1} b - (D - E)^{-1} F x^k - x^k$

$x^{k+1} = x^k + (D - E)^{-1} (b - F x^k - (D - E)x^k)$

$x^{k+1} = x^k + (D - E)^{-1} (b - (F + D - E)x^k)$

$x^{k+1} = x^k + (D - E)^{-1} (b - A x^k)$

Quindi:

$x^{k+1} = x^k + (D - E)^{-1} r^k$

dove $r^k = b - A x^k$ è il residuo all'iterazione _k_.

#### Parametri di Richardson

Da questa forma, si identifica:

- **Precondizionatore**: $P_{GS} = (D - E)$
- **Parametro di accelerazione**: $\alpha_k = 1$ (stazionario)

### Metodo di Jacobi

#### Iterazione

$x_i^{k+1} = \frac{1}{a_{ii}} (b_i - \sum_{j\ne i} a_{ij} x_j^k)$

#### Riscrittura alla Richardson

$x^{k+1} = x^k + D^{-1} r^k$

#### Parametri di Richardson

Da questa forma, si identifica:

- **Precondizionatore**: $P_{J} = D$
- **Parametro di accelerazione**: $\alpha_k = 1$ (stazionario)

### Metodo di Rilassamento (SOR)

#### SOR

Il metodo SOR (Successive Over-Relaxation) è una variante del metodo di Gauss-Seidel che introduce un parametro di rilassamento $\omega$ per accelerare la convergenza.

#### Iterazione

$x_i^{k+1} = (1-\omega)x_i^k + \frac{\omega}{a_{ii}} \left(b_i - \sum_{j<i} a_{ij}x_j^{k+1} - \sum_{j>i} a_{ij}x_j^k\right)$

#### Implementazione

Come Gauss-Seidel, SOR è un algoritmo seriale.

### Convergenza

#### Condizione necessaria e sufficiente

Per tutti gli schemi iterativi nella forma $x^{k+1} = Bx^k + G$, la condizione necessaria e sufficiente per la convergenza è che il raggio spettrale della matrice di iterazione $B$ sia minore di 1:

$\rho(B) < 1$

dove $\rho(B)$ è il massimo degli autovalori in modulo della matrice $B$.

#### Consistenza

Per gli schemi di Richardson, la consistenza è garantita per costruzione.

#### Condizioni sufficienti per Jacobi e Gauss-Seidel

Se la matrice $A$ è a **dominanza diagonale stretta per righe o per colonne**, allora sia il metodo di Jacobi che il metodo di Gauss-Seidel convergono.

Per Gauss-Seidel, se $A$ è **simmetrica definita positiva**, allora il metodo converge.
#### References
[[Appunti Mate Num- Lez06.pdf]]


