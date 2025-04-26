---
title: matenum   totale teoria
description: Appunto automatico
---

2025-02-18 10:17

Status: #revisione_finita #flashcard_finite #riscritto_in_corso 

Tags:[[matematica numerica]] [[sbobine]]

## lez01-MateNum

### Sistemi di Equazioni Lineari e Approssimazione

- **Notazione Compatta**: Un sistema di equazioni lineari può essere espresso come **Ax = b**. Dove:
    
    - **A** è la matrice dei coefficienti (n x n).
    - **x** è il vettore delle incognite.
    - **b** è il termine noto.
    - ![[Pasted image 20250218135220.png]]
- **Notazione per Componenti**: La notazione compatta è equivalente a esprimere il sistema per componenti:
    
    - a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁
    - a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = b₂
    - ...
    - aₙ₁x₁ + aₙ₂x₂ + ... + aₙₙxₙ = bₙ
- **Esistenza e Unicità della Soluzione**: La condizione necessaria e sufficiente per garantire esistenza e unicità di **x** è che **A** sia non singolare (invertibile).
    

### Regola di Cramer e Metodo di Laplace

- **Regola di Cramer**: La componente _i_-esima del vettore delle incognite è calcolata come:
    
    - **xᵢ = det(Aᵢ) / det(A)**,
    - dove **Aᵢ** è la matrice ottenuta sostituendo la colonna _i_-esima di **A** con il vettore **b**.
    - dovremmo calcolare n+1 determinanti
- **Formula di Laplace**: Usata per il calcolo del determinante:
    
    - **det(A) = Σⱼ aᵢⱼ * Δᵢⱼ**,
    - dove **Δᵢⱼ** è il complemento algebrico di aᵢⱼ, dato da **(-1)ⁱ⁺ʲ * det(Aᵢⱼ)**, con **Aᵢⱼ** matrice di dimensione inferiore (n-1) ottenuta eliminando la riga _i_ e la colonna _j_.
    - ![[Pasted image 20250218135424.png]]
- **Costo Computazionale**: L'uso combinato di Cramer e Laplace porta a un costo computazionale di **O(n!)**, rendendolo inadatto per sistemi di grandi dimensioni.
    
    - Il professore sottolinea che questo costo è **insostenibile**.
- Costo di un algoritmo
	- ![[Pasted image 20250218135554.png]]

### Algoritmo di Strassen

- L'algoritmo di Strassen ha un costo computazionale di circa **O(n^4)**.
- Anche se migliore di **O(n!)**, è ancora inefficiente per sistemi di dimensioni elevate.

### Metodi di Approssimazione: Diretti vs. Iterativi

- **Metodi Diretti**: Forniscono un'approssimazione della soluzione in un numero finito di passi.
- **Metodi Iterativi**: Generano una successione di approssimazioni che convergono alla soluzione.
    - L'approssimazione della soluzione si ottiene come il limite di una successione di approssimazioni, partendo da una "black box" che genera approssimazioni successive, con la speranza che convergano alla soluzione esatta.

### Fattorizzazione LU ( metodi diretti)

- **Definizione**: La fattorizzazione LU decompone la matrice **A** nel prodotto di due matrici:
    
    - **A = L * U**,
    - dove **L** è una matrice triangolare inferiore e **U** è una matrice triangolare superiore.
    - ![[Pasted image 20250218135721.png]]
- **Matrice Triangolare Inferiore (L)**:
    
    - Elementi non nulli nella parte triangolare inferiore e sulla diagonale.
    - Formalmente: **lᵢⱼ = 0** se **i < j**.
- **Matrice Triangolare Superiore (U)**:
    
    - Elementi non nulli nella parte triangolare superiore e sulla diagonale.
    - Formalmente: **uᵢⱼ = 0** se **i > j**.

### Risoluzione del Sistema con Fattorizzazione LU

1. **Sostituzione**: Riscrivere il sistema originale **Ax = b** come **LUx = b**.
2. **Variabile Ausiliaria**: Definire **Ux = y**, trasformando il sistema in **Ly = b**.
3. **Sistemi Triangolari**:
    - Risolvere **Ly = b** per trovare **y** (sistema triangolare inferiore).
    - Risolvere **Ux = y** per trovare **x** (sistema triangolare superiore).

- **Ordine di Risoluzione**: È necessario risolvere prima **Ly = b** perché **b** è noto, mentre **y** è incognito.

### Vantaggi della Fattorizzazione LU

- **Efficienza**: Risolvere due sistemi triangolari è più efficiente, soprattutto con matrici sparse.
- **Matrici Sparse**: Matrici con molti elementi nulli.
    - Una matrice B (n x n) è sparsa se il numero di elementi diversi da zero è proporzionale a _n_, non a _n²_.
    - La sparsità rende più efficiente la risoluzione dei sistemi lineari.
- **Pattern di Sparsità**: La configurazione degli elementi non nulli influenza l'efficienza degli algoritmi.
- ![[Pasted image 20250218140001.png]]

### Calcolo del Determinante con LU

- ![[Pasted image 20250218135850.png]]
- **Proprietà**: **det(A) = det(L) * det(U)**.
- **Calcolo Semplificato**: Il determinante di una matrice triangolare è il prodotto degli elementi diagonali.
- **Efficienza**: Questo metodo è più efficiente rispetto a Laplace.

### Algoritmo delle Sostituzioni in Avanti (Forward Substitution)

- **Obiettivo**: Risolvere **Ly = b**, con **L** triangolare inferiore.
    
- **Procedimento**:
    - ![[Pasted image 20250218140208.png]]
    1. **Inizializzazione**: Calcolare **y₁ = b₁ / l₁₁**.
        
    2. **Iterazione**: Per **i = 2, ..., n**, calcolare:
        
        - **yᵢ = (bᵢ - Σⱼ lᵢⱼ * yⱼ) / lᵢᵢ**, con **j** che va da **1** a **i-1**.
- **Costo Computazionale**: **O(n²)**.
    
    - **Divisioni**: _n_ divisioni.
    - **Moltiplicazioni**: Σᵢ(i - 1) = n(n - 1) / 2.
    - **Sottrazioni**: Σᵢ(i - 1) = n(n - 1) / 2.
    - **Totale**: n + n(n - 1) = n².

### Algoritmo delle Sostituzioni all'Indietro (Backward Substitution)

- **Obiettivo**: Risolvere **Ux = y**, con **U** triangolare superiore.
    
- **Procedimento**:
    - ![[Pasted image 20250218140253.png]]
    1. **Inizializzazione**: Calcolare **xₙ = yₙ / uₙₙ**.
        
    2. **Iterazione**: Per **i = n-1, ..., 1**, calcolare:
        
        - **xᵢ = (yᵢ - Σₖ uᵢₖ * xₖ) / uᵢᵢ**, con **k** che va da **i+1** a **n**.
- **Costo Computazionale**: **O(n²)**. La struttura è analoga a quella dell'algoritmo in avanti.
    

### Calcolo dei Fattori LU e la Scelta di lᵢᵢ = 1

- **Sistema Sottodeterminato**: Nel calcolo diretto dei fattori LU, il sistema ha più incognite che equazioni.
- **Soluzione**: Si impone che gli elementi diagonali di **L** siano uguali a 1 (**lᵢᵢ = 1**).
- **Motivazione**: Questa scelta riduce le incognite, rendendo il sistema determinato e risolvibile.

### Passaggi Matematici per il Caso 2x2 (Fattorizzazione LU)

-  $$\begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix} = \begin{bmatrix} l_{11} & 0 \\ l_{21} & l_{22} \end{bmatrix}\begin{bmatrix} U_{11} & U_{12} \\ 0 & U_{22} \end{bmatrix} = \begin{cases} l_{11} U_{11} = a_{11} \\ l_{11} l_{12} = a_{12} \\ l_{21} U_{11} = a_{21} \\ l_{21} U_{12} + l_{22} U_{22} = a_{22} \end{cases}$$
	- 4 equazioni e 6 incognite, è un problema, soluzione? rendere la diagonale di L a 1
	- $$\begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix} = 
\begin{bmatrix} 1 & 0 \\ l_{21} & 1 \ \ \end{bmatrix} \\ 
\begin{bmatrix} U_{11} & U_{12} \\ 0 & U_{22} \end{bmatrix}$$
### Generalizzazione e Costo Computazionale

- **Matrice nxn**: Per una matrice nxn, ci sono n² equazioni.
- **Numero di Incognite**: Ci sono $\frac{n(n+1)}{2}$ elementi in L e altrettanti in U, per un totale di n²+n incognite.
- **Imposizione di lᵢᵢ = 1**: Fissare gli elementi diagonali di L a 1 riduce il numero di incognite a n².

References


2025-02-19 15:25

_Status: #flashcard_finite   #riscritto_finito  #revisione_finita 

_Tags:[[sbobine]] [[matematica numerica]]

## lez02- mateNum

### Introduzione al Metodo di Eliminazione Gaussiana (MEG)

L'obiettivo principale del **Metodo di Eliminazione Gaussiana (MEG)** è trasformare una matrice _A_ in una matrice triangolare superiore (_U_) tramite operazioni elementari sulle righe. Questo processo è fondamentale sia per risolvere sistemi lineari del tipo _Ax = b_ sia per ottenere la fattorizzazione LU della matrice _A_.

- **Metodo Analitico**: fornisce la soluzione esatta.
- **Metodo Numerico**: fornisce una soluzione approssimata.

In un contesto di **aritmetica esatta**, la fattorizzazione LU conduce alla soluzione precisa. Tuttavia, a causa degli **errori di arrotondamento** intrinseci ai calcolatori (che utilizzano una rappresentazione binaria dei numeri reali), la soluzione ottenuta tramite calcolatore potrebbe discostarsi leggermente da quella esatta. La precisione della soluzione è strettamente legata alla **condizione della matrice**: matrici **ben condizionate** tendono a produrre soluzioni più accurate.
### Operazioni Ammesse nel MEG

Per preservare la soluzione del sistema lineare _Ax = b_, le uniche operazioni consentite sono:

- **Scambio di righe**
- **Combinazioni lineari delle righe**

### Passo Generico del MEG per la Fattorizzazione LU

Il MEG trasforma la matrice _A_ in una matrice triangolare superiore _U_ attraverso una sequenza di passi. Ad ogni passo, si introducono dei **moltiplicatori**, elementi chiave per azzerare gli elementi situati sotto la diagonale principale.

#### Notazione

- $A^{(k)}$: Rappresenta la matrice _A_ al passo _k_, dove _k_ indica il numero di aggiornamenti effettuati.
- $a_{ij}^{(k)}$: Indica l'elemento situato nella posizione (_i_, _j_) della matrice al passo _k_.
- $m_{ik}$: Denota il moltiplicatore impiegato per azzerare l'elemento nella posizione (_i_, _k_).
- **Pivot**: È l'elemento diagonale $a_{kk}$, utilizzato come riferimento per il calcolo dei moltiplicatori. È anche il protagonista del pivoting.

#### Passo 1: Azzeramento degli elementi sotto il primo pivot a_{11}
- sia $$A = \begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix}$$
**Definizione dei moltiplicatori**:

- $$m_{21} = \frac{a_{21}^{(1)}}{a_{11}^{(1)}}$$
- $$m_{31} = \frac{a_{31}^{(1)}}{a_{11}^{(1)}}$$

**Aggiornamento delle righe**:

La riga _i_-esima della matrice aggiornata $A^{(2)}$ si ottiene come combinazione lineare della riga _i_-esima di $A^{(1)}$ e della prima riga di $A^{(1)}$:

- $$R_2^{(2)} = R_2^{(1)} - m_{21} \cdot R_1^{(1)}$$
$$R_3^{(2)} = R_3^{(1)} - m_{31} \cdot R_1^{(1)}$$

**Verifica dell'azzeramento**:

L'elemento $(a_{21}^{(2)})$ diventa zero:

- $$a_{21}^{(2)} = a_{21}^{(1)} - m_{21} \cdot a_{11}^{(1)} = a_{21}^{(1)} - \frac{a_{21}^{(1)}}{a_{11}^{(1)}} \cdot a_{11}^{(1)} = 0$$

**Aggiornamento degli altri elementi**:

Gli altri elementi della riga 2 vengono aggiornati di conseguenza:

- $$a_{22}^{(2)} = a_{22}^{(1)} - m_{21} \cdot a_{12}^{(1)}$$
- $$a_{23}^{(2)} = a_{23}^{(1)} - m_{21} \cdot a_{13}^{(1)}$$

ottenendo cosi la matrice $$A^{(2)} = \begin{bmatrix} a_{11}^{(1)} & a_{12}^{(1)} & a_{13}^{(1)} \\ \cdot & a_{22}^{(2)} & a_{23}^{(2)} \\ \cdot & a_{32}^{(2)} & a_{33}^{(2)} \end{bmatrix}$$
#### Passo 2: Azzeramento dell'elemento $a_{32}$

In questo passo, si sfrutta il secondo pivot $a_{22}^{(2)}$ per azzerare l'elemento $a_{32}^{(2)}$.

**Definizione del moltiplicatore**:

- $$m_{32} = \frac{a_{32}^{(2)}}{a_{22}^{(2)}}$$

**Aggiornamento della riga 3**:

La riga 3 viene aggiornata impiegando la riga 2 come riferimento:

- $$R_3^{(3)} = R_3^{(2)} - m_{32} \cdot R_2^{(2)}$$

**Verifica dell'azzeramento**:

- $$a_{32}^{(3)} = a_{32}^{(2)} - m_{32} \cdot a_{22}^{(2)} = a_{32}^{(2)} - \frac{a_{32}^{(2)}}{a_{22}^{(2)}} \cdot a_{22}^{(2)} = 0$$

**Aggiornamento degli altri elementi**:

- $$a_{33}^{(3)} = a_{33}^{(2)} - m_{32} \cdot a_{23}^{(2)}$$

ottenendo la matrice $$A^{(3)} = \begin{bmatrix} a_{11}^{(1)} & a_{12}^{(1)} & a_{13}^{(1)} \\ 0 & a_{22}^{(2)} & a_{23}^{(2)} \\ 0 & 0 & a_{33}^{(3)} \end{bmatrix}$$
### Costruzione delle Matrici L e U

- **Matrice U**: Rappresenta il risultato diretto del MEG, ovvero la matrice triangolare superiore ottenuta alla fine dei vari passi.
    
- **Matrice L**: È una matrice triangolare inferiore con elementi diagonali pari a 1. Gli elementi al di sotto della diagonale principale corrispondono ai moltiplicatori $m_{ik}$ impiegati durante il processo di eliminazione.
    
    - $$L = \begin{bmatrix} 1 & 0 & 0 \\ m_{21} & 1 & 0 \\ m_{31} & m_{32} & 1 \end{bmatrix}$$

### Esempio Numerico

Consideriamo la matrice:

- $$A = \begin{bmatrix} 1 & 2 & 1 \\ 2 & 0 & -1 \\ -1 & 1 & 5 \end{bmatrix}$$

#### Passo 1

- $$m_{21} = \frac{2}{1} = 2$$
- $$m_{31} = \frac{-1}{1} = -1$$

Applicando le operazioni di riga:
$$\begin{align*} a_{21}^{(2)} &= 2 - 2 \cdot 1 = 0 \\ a_{22}^{(2)} &= 0 - 2 \cdot 2 = -4 \\ a_{23}^{(2)} &= -1 - 2 \cdot 1 = -3 \\ a_{31}^{(2)} &= 1 - (+1) \cdot 1 = 0 \\ a_{32}^{(2)} &= 1 - (-1) \cdot 2 = 3 \\ a_{33}^{(2)} &= 5 - (-1) \cdot 1 = 6 \end{align*}$$

- $$A^{(2)} = \begin{bmatrix} 1 & 2 & 1 \\ 0 & -4 & -3 \\ 0 & 3 & 6 \end{bmatrix}$$

#### Passo 2

- $$m_{32} = \frac{3}{-4} = -\frac{3}{4}$$

Applicando l'operazione di riga:
- $$\begin{align*}
a_{32}^{(3)} &= 3 - \left( -\frac{3}{4} \right) \cdot (-4) = 0 \\
a_{33}^{(3)} &= 6 - \left( -\frac{3}{4} \right) \cdot (-3) = \frac{15}{4}
\end{align*}$$
- $$A^{(3)} = \begin{bmatrix} 1 & 2 & 1 \\ 0 & -4 & -3 \\ 0 & 0 & \frac{15}{4} \end{bmatrix}$$

#### Fattorizzazione LU

- $$L = \begin{bmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ -1 & -\frac{3}{4} & 1 \end{bmatrix}$$
- $$U = \begin{bmatrix} 1 & 2 & 1 \\ 0 & -4 & -3 \\ 0 & 0 & \frac{15}{4} \end{bmatrix}$$

#### Generalizzazione del Passo K
- $$ A= A^{(1)} = \begin{bmatrix} a_{11}^{(1)} & \cdots & a_{1n}^{(1)} \\ \vdots & \ddots & \vdots \\ a_{n1}^{(1)} & \cdots & a_{nn}^{(1)} \end{bmatrix}$$
- dopo (n-1) passi per portarlo in forma triangolare $$A^{(2)} = \begin{bmatrix} a_{11}^{(1)} & \cdots & \cdots & \cdots & a_{1n}^{(1)} \\ 0 & a_{22}^{(2)} & \cdots & \cdots & a_{2n}^{(2)} \\ 0 & 0  & \cdots & a_{kk}^{(k)} & a_{kn}^{(k)} \\ 0 & 0 & \ddots & \ddots & \vdots \\ 0 & 0 & \cdots & a_{nk}^{(k)} & a_{nn}^{(k)} \end{bmatrix}$$
	- Al passo _k_, le prime _k-1_ colonne sono state già azzerate sotto la diagonale. Si lavora sulla sottomatrice di dimensione _(n-k+1) x (n-k+1)_.
- dopo n passi $$A^{(n)} = U = \begin{bmatrix} a_{11}^{(1)} & \cdots & \cdots & a_{1n}^{(1)} \\ 0 & a_{22}^{(2)} & \cdots & a_{2n}^{(2)} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & a_{nn}^{(n)} \end{bmatrix}$$

### Implementazione Algoritmica

L'implementazione dell'algoritmo per la fattorizzazione LU richiede l'utilizzo di tre cicli for:

```
for k = 1 to n-1 do
    for i = k+1 to n do
        m_ik = A(i,k) / A(k,k)  // Calcolo moltiplicatore
        for j = k to n do
            A(i,j) = A(i,j) - m_ik * A(k,j)  // Aggiornamento elementi
        end
    end
end
```

- **k**: Rappresenta l'indice delle colonne.
- **i**: Rappresenta l'indice delle righe.
- **j**: Indice utilizzato per scorrere la sottomatrice da modificare.
	- ![[Pasted image 20250219174051.png]]

### Costo Computazionale
Il costo computazionale del MEG si aggira intorno a $\frac{2}{3}n^3 + O(n^2)$ operazioni.

### Comandi di MATLAB

MATLAB offre diversi comandi utili per la fattorizzazione LU e la risoluzione di sistemi lineari.

- `lu(A)`: Calcola la fattorizzazione LU della matrice A.
- `A\b`: Risolve il sistema lineare Ax = b utilizzando il solver diretto più appropriato.
- `tril(A)`: Estrae la parte triangolare inferiore di A.
- `triu(A)`: Estrae la parte triangolare superiore di A.

### Strategie per la Risoluzione di Sistemi Lineari
- ![[Pasted image 20250219165140.png]]

Esistono diverse strategie per risolvere sistemi lineari, ognuna con specifici costi computazionali.

1. **Fattorizzazione LU e Sostituzioni Successive**:
    
    - Calcolare la fattorizzazione LU di A.
    - Risolvere Ly = b.
    - Risolvere Ux = y.
    - Costo: $\frac{2}{3}n^3 + 2n^2$
2. **Metodo di Eliminazione Gaussiana con Termine Noto Esteso**:
    
    - Affiancare la matrice A con il vettore b.
    - Eseguire le operazioni di riga per trasformare A in una matrice triangolare superiore, aggiornando contemporaneamente il vettore b.
    - Risolvere il sistema triangolare superiore risultante con sostituzione all'indietro.
    - Costo: leggermente superiore a $\frac{2}{3}n^3 + n^2$
3. **Calcolo dell'Inversa di A**:
    
    - Calcolare l'inversa di A.
    - Calcolare $x = A^{(-1)} \cdot b$.
    - Costo: $\frac{8}{3}n^3$
    - **Sconsigliato** per via del costo computazionale elevato.
    - ![[Pasted image 20250219174810.png]]

La scelta della strategia dipende dal contesto. 
Se si deve risolvere più volte lo stesso sistema con matrici dei coefficienti uguali ma termini noti diversi, conviene calcolare la fattorizzazione LU una sola volta e poi risolvere i sistemi triangolari corrispondenti.
- $$\begin{align*}
Ax &= \tilde{b_1} \\
Ax &= \tilde{b_2} \\
& \vdots \\
Ax &= \tilde{b_q}
\end{align*}$$

### Pivoting

Il **pivoting** è una tecnica impiegata per gestire situazioni in cui un pivot è pari a zero o presenta un valore molto piccolo, eventualità che può condurre a instabilità numerica. Il pivoting consiste nello scambio di righe (o colonne) al fine di collocare un elemento con un valore assoluto maggiore in posizione di pivot.

### Condizione Necessaria e Sufficiente per l'Esistenza e l'Unicità della Fattorizzazione LU

Sia A una matrice _n x n_. Esiste un'unica fattorizzazione LU di A se e solo se le sottomatrici principali di A di ordine _i_, con _i_ che va da 1 a _n-1_, sono non singolari.
- **NOTA BENE**: non ho richiesto la non-singolarità di A 
- **Sottomatrice principale di ordine i**: è la sottomatrice ottenuta intersecando le prime _i_ righe e le prime _i_ colonne di A.

### Esempi Dimostrativi

Gli esempi forniti illustrano come la violazione della condizione necessaria e sufficiente possa portare alla perdita dell'esistenza o dell'unicità della fattorizzazione LU.

- **Esempio 1**: $$A = \begin{bmatrix} 1 & 2 \\ 1 & 2 \end{bmatrix}$$
    - Singolare, ma soddisfa la condizione necessaria e sufficiente.
    - Esiste un'unica fattorizzazione LU.
    - ![[Pasted image 20250219174959.png]]
- **Esempio 2**: $$A = \begin{bmatrix} 0 & 1 \\ 1 & 2 \end{bmatrix}$$
    - Non soddisfa la condizione necessaria e sufficiente.
    - Non esiste la fattorizzazione LU.
    - ![[Pasted image 20250219175024.png]]
- **Esempio 3**: $$A = \begin{bmatrix} 0 & 1 \\ 0 & 2 \end{bmatrix}$$
    - Non soddisfa la condizione necessaria e sufficiente.
    - Esistono infinite fattorizzazioni LU.
    - ![[Pasted image 20250219175037.png]]

#### References



2025-02-24 15:41

_Status: #flashcard_finite #riscritto_finito   #revisione_finita 

_Tags: [[matematica numerica]]. [[sbobine]]

## Matenum- lez03

### Condizioni sufficienti per l'esistenza e l'unicità della fattorizzazione LU

Il professore introduce le **condizioni sufficienti** per garantire l'esistenza e l'unicità della fattorizzazione LU di una matrice $A$. Queste condizioni sono alternative tra loro e si basano su tre famiglie di matrici particolari.

#### 1. Matrici a dominanza diagonale stretta per righe

Se $A$ è una matrice a **dominanza diagonale stretta per righe**, allora la fattorizzazione LU esiste ed è unica. Una matrice $A$ è a dominanza diagonale stretta per righe se l'elemento diagonale in valore assoluto è strettamente maggiore della somma dei valori assoluti degli altri elementi sulla stessa riga.

Matematicamente, questo significa che per ogni riga $i$:

$$|a_{ii}| > \sum_{j=1, j\neq i}^{n} |a_{ij}|$$

dove $i$ varia da $1$ a $n$.

**Esempio:** Consideriamo la matrice:

$A = \begin{bmatrix} 4 & 0 & -1 \\ 3 & -7 & 2 \\ -2 & 1 & 9 \end{bmatrix}$

Verifichiamo se è a dominanza diagonale stretta per righe:

- Riga 1: $|4| > |0| + |-1| \implies 4 > 1$ (vero)
- Riga 2: $|-7| > |3| + |2| \implies 7 > 5$ (vero)
- Riga 3: $|9| > |-2| + |1| \implies 9 > 3$ (vero)

Quindi, la matrice $A$ è a dominanza diagonale stretta per righe.

_Attenzione_: È fondamentale considerare i valori assoluti. Se si dimenticano i valori assoluti, si potrebbe erroneamente concludere che una matrice non è a dominanza diagonale stretta per righe.

#### 2. Matrici a dominanza diagonale stretta per colonne

Se $A$ è una matrice a **dominanza diagonale stretta per colonne**, allora la fattorizzazione LU esiste ed è unica. Una matrice $A$ è a dominanza diagonale stretta per colonne se l'elemento diagonale in valore assoluto è strettamente maggiore della somma dei valori assoluti degli altri elementi sulla stessa colonna.

Matematicamente, questo significa che per ogni colonna $j$:

$|a_{jj}| > \sum_{i=1, i\neq j}^{n} |a_{ij}|$

dove $j$ varia da $1$ a $n$.

_Importante_: Una matrice a dominanza diagonale stretta per righe non è necessariamente a dominanza diagonale stretta per colonne, e viceversa.

**Esempio:** Riprendendo la matrice $A$ dell'esempio precedente:

$A = \begin{bmatrix} 4 & 0 & -1 \\ 3 & -7 & 2 \\ -2 & 1 & 9 \end{bmatrix}$

Verifichiamo se è a dominanza diagonale stretta per colonne:

- Colonna 1: $|4| > |3| + |-2| \implies 4 > 5$ (falso)

Quindi, la matrice $A$ non è a dominanza diagonale stretta per colonne.

#### 3. Matrici simmetriche definite positive

Se $A$ è una matrice **simmetrica definita positiva**, allora la fattorizzazione LU esiste ed è unica.

- **Simmetria**: una matrice $A$ è simmetrica se $A = A^T$, ovvero $a_{ij} = a_{ji}$ per ogni $i$ e $j$. In altre parole, la diagonale è uno specchio. In Matlab, si può verificare la simmetria con il comando `A == A'` (dove `'` indica la trasposta).
- **Definita positiva**: una matrice $A$ è definita positiva se $v^T A v > 0$ per ogni vettore $v \in \mathbb{R}^n$ diverso dal vettore nullo.

**Criterio pratico per verificare se una matrice è definita positiva:**

1. Verificare che la matrice sia simmetrica.
2. Calcolare gli autovalori della matrice. Se tutti gli autovalori sono reali e positivi, allora la matrice è definita positiva.

In Matlab, si può usare il comando `eig(A)` per calcolare gli autovalori di $A$.

### Fattorizzazione LU per Matrici Non Singolari che Non Soddisfano le Condizioni Precedenti

Se una matrice $A$ non soddisfa le condizioni sufficienti (dominanza diagonale) o necessarie e sufficienti, è comunque possibile trovare la fattorizzazione LU se $A$ è **non singolare**. In questo caso, si ricorre al **pivoting**.

#### Pivoting: Scambio di Righe

L'idea base è scambiare le righe della matrice per evitare elementi pivotali nulli o troppo piccoli, che potrebbero compromettere la stabilità numerica dell'algoritmo.

**Esempio:**

Consideriamo la matrice:

$A = \begin{bmatrix} 1 & 1 & 3 \\ 2 & 3 & 6 \\ 4 & 5 & 4 \end{bmatrix}$

Dopo alcuni passaggi della fattorizzazione LU senza pivoting, si può arrivare a una matrice con un elemento pivotale nullo. Per ovviare a questo, si scambiano le righe.

**Matrici di Permutazione:** Lo scambio di righe si realizza moltiplicando la matrice $A$ per una **matrice di permutazione** $P$. Una matrice di permutazione si ottiene permutando le righe della matrice identità.

**Esempio:** Per scambiare la riga 2 con la riga 3, la matrice di permutazione è:

$P = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$

Moltiplicando $P$ per $A$, si ottiene una nuova matrice con le righe scambiate: $PA$.

#### Algoritmo con Pivoting

1. **Controllo dell'elemento pivotale:** Durante la fattorizzazione LU, se si incontra un elemento pivotale $a_{ii}$ uguale a zero, si scambiano le righe per portare un elemento non nullo in quella posizione.
2. **Scelta della riga da scambiare:** Si cerca, tra le righe sottostanti alla riga corrente, quella con l'elemento in valore assoluto più grande nella colonna corrente.
3. **Aggiornamento della matrice di permutazione:** Si tiene traccia degli scambi effettuati attraverso una matrice di permutazione $P$.
4. **Fattorizzazione LU di PA:** Alla fine del processo, si ottiene la fattorizzazione LU della matrice $PA$, dove $P$ è il prodotto di tutte le matrici di permutazione utilizzate.

#### Risoluzione del Sistema Lineare con Pivoting

Se l'obiettivo è risolvere il sistema lineare $Ax = b$, e si è effettuato il pivoting, allora si risolve il sistema equivalente $PAx = Pb$.

1. Si calcola $Pb$, applicando le stesse permutazioni al termine noto $b$.
2. Si risolve il sistema triangolare inferiore $Ly = Pb$.
3. Si risolve il sistema triangolare superiore $Ux = y$.

#### Pivoting Parziale vs. Pivoting Totale

- **Pivoting Parziale:** Si cerca l'elemento massimo in valore assoluto solo nella colonna sotto l'elemento pivotale corrente.
- **Pivoting Totale:** Si cerca l'elemento massimo in valore assoluto in tutta la sottomatrice a destra e in basso rispetto all'elemento pivotale corrente. In questo caso, si scambiano sia righe che colonne, utilizzando due matrici di permutazione, $P$ per le righe e $Q$ per le colonne.

Nel pivoting totale, la fattorizzazione diventa $PAQ = LU$. Per risolvere il sistema lineare $Ax = b$, si procede come segue:

1. Si calcola $Pb$.
2. Si risolve $Lz = Pb$.
3. Si risolve $Uy = z$.
4. Si calcola $x = Qy$.

#### Motivi per Utilizzare il Pivoting

- **Evitare divisioni per zero:** Se l'elemento pivotale è zero, la fattorizzazione LU si blocca.
- **Stabilità numerica:** Anche se l'elemento pivotale non è zero, ma è molto piccolo, la divisione per questo elemento può amplificare gli errori di arrotondamento, portando a una soluzione inaccurata. Il pivoting aiuta a scegliere elementi pivotali più grandi, riducendo l'amplificazione degli errori.

#### Comando LU in Matlab

Il comando `LU` in Matlab implementa sempre il pivoting. La sintassi consigliata è `[L, U, P] = lu(A)`, che restituisce le matrici $L$, $U$ e $P$ tali che $PA = LU$.

##### Perché Usare `[L, U, P] = lu(A)` in Matlab invece di `[L, U] = lu(A)`

Il professore suggerisce di utilizzare la sintassi completa `[L, U, P] = lu(A)` invece della sintassi incompleta `[L, U] = lu(A)` per due motivi principali:

1. **Matlab Implementa Sempre il Pivoting:** Il comando `lu` in Matlab implementa **sempre** il pivoting. Usando la sintassi `[L, U, P] = lu(A)`, si ottiene esplicitamente la matrice di permutazione $P$, che permette di tenere traccia degli scambi di righe effettuati durante la fattorizzazione. Questo è utile per capire se il pivoting è stato necessario o meno. Se $P$ è la matrice identità, allora non ci sono stati scambi di righe.
2. **Chiarezza e Controllo:** La sintassi completa rende più chiaro il fatto che il pivoting è stato applicato e permette di controllare la matrice di permutazione $P$. Questo è importante per la stabilità numerica e per la corretta risoluzione del sistema lineare.

Usando la sintassi incompleta `[L, U] = lu(A)`, Matlab esegue comunque il pivoting, ma restituisce matrici $L$ e $U$ tali che $A = LU$. In realtà, la fattorizzazione calcolata è $PA = LU$, e la matrice $L$ restituita è in realtà $P^{-1}L$, dove $L$ è la matrice triangolare inferiore "vera". Questo può portare a confusione, perché la matrice $L$ ottenuta potrebbe non essere triangolare inferiore.


### Importanza del Pivoting Anche con Elementi Diversi da Zero (ma Piccoli)

Il pivoting non è necessario solo quando si incontrano elementi pivotali nulli, ma è **altamente raccomandato anche quando gli elementi pivotali sono molto piccoli**. Questo perché:

- **Stabilità Numerica:** La divisione per un elemento pivotale molto piccolo può **amplificare gli errori di arrotondamento** presenti nei calcoli. Questo può portare a una fattorizzazione LU inaccurata e a una soluzione del sistema lineare molto distante dalla soluzione esatta.
- **Moltiplicatori Grandi:** Un elemento pivotale piccolo porta a **moltiplicatori grandi** durante l'eliminazione gaussiana. Questi moltiplicatori, quando applicati ad altre righe, possono amplificare gli errori di arrotondamento, rendendo la soluzione finale inaccurata.

**Esempio**:

Consideriamo una matrice $A$ con un elemento pivotale piccolo:

$A = \begin{bmatrix}1 & 1 + 0.5 \cdot 10^{-15} & 3 \\ 2 & 2 & 20 \\ 3 & 6 & 4 \end{bmatrix}$

Anche se la condizione necessaria e sufficiente per l'esistenza della fattorizzazione LU è soddisfatta, la fattorizzazione LU calcolata senza pivoting può essere molto inaccurata. Questo perché i moltiplicatori risultano essere molto grandi, amplificando gli errori di arrotondamento.

**Soluzione: Pivoting Parziale o Totale**

Per evitare questi problemi, si utilizza il pivoting. L'idea è scambiare le righe (e/o le colonne nel pivoting totale) per portare un elemento pivotale più grande in valore assoluto nella posizione corretta. Questo riduce i moltiplicatori e minimizza l'amplificazione degli errori di arrotondamento, portando a una soluzione più accurata.

In sintesi, il pivoting è una tecnica fondamentale per garantire la stabilità numerica della fattorizzazione LU, anche quando gli elementi pivotali non sono esattamente zero. Utilizzare la sintassi `[L, U, P] = lu(A)` in Matlab permette di tenere traccia degli scambi di righe effettuati e di ottenere una fattorizzazione LU più accurata.

### ==Fattorizzazione LU di una matrice tridiagonale

Una matrice tridiagonale è una matrice in cui gli elementi diversi da zero sono situati solo sulla diagonale principale, sulla prima sovradiagonale e sulla prima sottodiagonale.

Quando si effettua la fattorizzazione LU di una matrice tridiagonale, le matrici $L$ e $U$ risultano essere **bidiagonali**.

- $L$ è una matrice bidiagonale inferiore con tutti 1 sulla diagonale principale.
- $U$ è una matrice bidiagonale superiore.

**Esempio:** Consideriamo una matrice tridiagonale 3x3:

$A = \begin{bmatrix} a_1 & c_1 & 0 \\ e_2 & a_2 & c_2 \\ 0 & e_3 & a_3 \end{bmatrix}$

La sua fattorizzazione LU sarà:

$L = \begin{bmatrix} 1 & 0 & 0 \\ \beta_2 & 1 & 0 \\ 0 & \beta_3 & 1 \end{bmatrix}$

$U = \begin{bmatrix} \alpha_1 & \gamma_1 & 0 \\ 0 & \alpha_2 & \gamma_2 \\ 0 & 0 & \alpha_3 \end{bmatrix}$

dove $\gamma_1 = c_1$ e $\gamma_2 = c_2$.

Per trovare i valori di $\alpha_i$ e $\beta_i$, si uguagliano gli elementi corrispondenti delle matrici $A$ e $LU$.

1. **Calcolo di $\alpha_1$**: $\alpha_1$ è semplicemente uguale a $a_1$, dove $a_1$ è l'elemento diagonale nella prima riga e prima colonna della matrice tridiagonale originale $A$.
    
2. **Calcolo di $\beta_i$ per $i \ge 2$**: $\beta_i$ è calcolato come:
    
    $\beta_i = \frac{e_i}{\alpha_{i-1}}$
    
    dove $e_i$ è l'elemento sulla sotto-diagonale ($i$-esima riga, $i-1$-esima colonna) della matrice originale $A$ e $\alpha_{i-1}$ è il valore di alfa calcolato al passo precedente. È fondamentale che $\alpha_{i-1}$ sia diverso da zero per evitare divisioni per zero.
    
3. **Calcolo di $\alpha_i$ per $i \ge 2$**: $\alpha_i$ è calcolato come:
    
    $\alpha_i = a_i - \beta_i \cdot c_{i-1}$
    
    dove:
    
    - $a_i$ è l'elemento diagonale nella $i$-esima riga e $i$-esima colonna della matrice originale $A$.
    - $\beta_i$ è il valore di beta calcolato al passo corrente.
    - $c_{i-1}$ è l'elemento sulla sovra-diagonale ($i-1$-esima riga, $i$-esima colonna) della matrice originale $A$.

**Algoritmo Generale**:

- Inizia con $\alpha_1 = a_1$.
- Alterna il calcolo di $\beta_i$ e $\alpha_i$ per ogni $i$ da 2 fino a $n$.
- Per ogni $i$, calcola prima $\beta_i$ usando il valore di $\alpha_{i-1}$ calcolato precedentemente.
- Successivamente, usa il valore di $\beta_i$ appena calcolato per trovare $\alpha_i$.

**Costo Computazionale**:

Il costo computazionale di questo algoritmo è **3(n-1)**, poiché per ogni $i$ (da 2 a $n$) si eseguono **tre operazioni**: una divisione per calcolare $\beta_i$ e una moltiplicazione e una sottrazione per calcolare $\alpha_i$. Questo è significativamente più efficiente rispetto alla fattorizzazione LU classica, che ha un costo di $O(n^3)$.
#### References




[[Appunti Mate Num-lez03.pdf]]


2025-02-25 12:45

_Status: #flashcard_finite   #riscritto_zero  #revisione_zero 

_Tags: [[sbobine]]  [[matematica numerica]]

## Matenum- lez04
### **1. Fattorizzazione LU per Matrici Tridiagonali**

#### **1.1. Descrizione del Metodo**

Il metodo della fattorizzazione LU è particolarmente efficace per **matrici tridiagonali**, ovvero matrici con elementi non nulli solo sulla diagonale principale, sulla prima sopra-diagonale e sulla prima sotto-diagonale.

La **fattorizzazione LU** di una matrice tridiagonale $A$ porta a identificare due fattori:

- $L$ (matrice triangolare inferiore) che, in questo caso, è una matrice bidiagonale inferiore con tutti 1 sulla diagonale principale.
- $U$ (matrice triangolare superiore) che, in questo caso, è una matrice bidiagonale superiore.

Inoltre, la sopra-diagonale di $U$ coincide esattamente con la sopra-diagonale della matrice $A$ originale.

#### **1.2. Algoritmo**

L'algoritmo per calcolare la fattorizzazione LU di una matrice tridiagonale ha un costo computazionale di $3n - 1$, significativamente inferiore rispetto al costo di $\frac{2}{3} n^3$ della fattorizzazione LU standard fornita dalla libreria LAPACK.

#### **1.3. Risoluzione di Sistemi Lineari con Fattorizzazione LU**

Dopo aver ottenuto la fattorizzazione LU, il sistema lineare originale $Ax = b$ viene trasformato in due sistemi più semplici:

1. $Ly = b$ (sistema bidiagonale inferiore)
2. $Ux = y$ (sistema bidiagonale superiore)

Risolvere questi sistemi bidiagonali è più economico rispetto alla risoluzione di sistemi triangolari standard.

#### **1.4. Sistema Bidiagonale Inferiore: $Ly = b$**

Consideriamo un sistema bidiagonale inferiore $Ly = b$, dove $L$ è una matrice bidiagonale inferiore:

$L = \begin{bmatrix} 1 & 0 & 0 \\ \beta_2 & 1 & 0 \\ 0 & \beta_3 & 1 \ \end{bmatrix}$, $y = \begin{bmatrix} y_1 \\ y_2 \\ y_3 \\ \end{bmatrix}$, $b = \begin{bmatrix} b_1 \\ b_2 \\ b_3 \end{bmatrix}$

Risolvendo il sistema $Ly = b$, si ottiene:

- $y_1 = b_1$
- $\beta_2 y_1 + y_2 = b_2 \Rightarrow y_2 = b_2 - \beta_2 y_1$
- $\beta_3 y_2 + y_3 = b_3 \Rightarrow y_3 = b_3 - \beta_3 y_2$

Generalizzando per una matrice $L$ di ordine $n$, l'algoritmo è:

- $y_1 = b_1$
- $y_i = b_i - \beta_i y_{i-1}$, per $i = 2, \dots, n$

Questo algoritmo ha un costo di $2n - 1$.

#### **1.5. Sistema Bidiagonale Superiore: $Ux = y$**

Consideriamo un sistema bidiagonale superiore $Ux = y$, dove $U$ è una matrice bidiagonale superiore:

$U = \begin{bmatrix} \alpha_1 & c_1 & 0 \\ 0 & \alpha_2 & c_2 \\ 0 & 0 & \alpha_3 \ \end{bmatrix}$, $x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}$, $y = \begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix}$

Risolvendo il sistema $Ux = y$, si ottiene:

- $\alpha_3 x_3 = y_3 \Rightarrow x_3 = \frac{y_3}{\alpha_3}$
- $\alpha_2 x_2 + c_2 x_3 = y_2 \Rightarrow x_2 = \frac{1}{\alpha_2} (y_2 - c_2 x_3)$
- $\alpha_1 x_1 + c_1 x_2 = y_1 \Rightarrow x_1 = \frac{1}{\alpha_1} (y_1 - c_1 x_2)$

Generalizzando per una matrice $U$ di ordine $n$, l'algoritmo è:

- $x_n = \frac{y_n}{\alpha_n}$
- $x_i = \frac{1}{\alpha_i} (y_i - c_i x_{i+1})$, per $i = n-1, \dots, 1$

Questo algoritmo ha un costo di $3n - 2$.

#### **1.6. Algoritmo di Thomas**

L'**algoritmo di Thomas** combina la fattorizzazione LU di una matrice tridiagonale con la risoluzione dei sistemi bidiagonali inferiore e superiore. Il costo totale dell'algoritmo di Thomas è:

$(3n - 1) + (2n - 1) + (3n - 2) = 8n - 4$

Questo è un risultato notevole, poiché il costo è lineare rispetto alla dimensione del sistema, rendendo l'algoritmo estremamente efficiente per matrici tridiagonali.

### **2. Fattorizzazione di Cholesky per Matrici Simmetriche Definite Positive (SDP)**

#### **2.1. Definizione**

Una matrice $A$ è **simmetrica definita positiva (SDP)** se è simmetrica ($A = A^T$) e tutti i suoi autovalori sono positivi. Per tali matrici, la fattorizzazione LU esiste ed è unica.

#### **2.2. Metodo di Cholesky**

La fattorizzazione di Cholesky decompone una matrice SDP $A$ nella forma:

$A = R^T R$

dove $R$ è una matrice triangolare superiore. Questo significa che è sufficiente calcolare solo un fattore, poiché il fattore triangolare inferiore è semplicemente la trasposta del fattore triangolare superiore.

#### **2.3. Costo Computazionale**

Il costo computazionale della fattorizzazione di Cholesky è circa la metà della fattorizzazione LU classica, ovvero $\frac{1}{3}n^3$.

#### **2.4. Osservazioni Importanti**

A differenza della fattorizzazione LU standard, i fattori diagonali nella fattorizzazione di Cholesky non sono necessariamente uguali a uno. Tuttavia, le entrate diagonali di $R$ saranno tutte quantità maggiori o uguali a zero.

### 3. **Matrici Sparse: Strutturate vs. Non Strutturate**

#### 3.1. Definizioni

- **Matrice sparsa strutturata**: è una matrice in cui gli elementi non nulli si dispongono secondo una struttura ben precisa (ad esempio, matrici diagonali o tridiagonali).
- **Matrice sparsa non strutturata**: è una matrice con pochi elementi non nulli disposti in modo caotico.

#### 3.2. Fattorizzazione LU e Sparsità

- Se $A$ è sparsa e strutturata, i fattori $L$ e $U$ ereditano la struttura.
- Se $A$ è sparsa ma non strutturata, i fattori $L$ e $U$ tendono a riempirsi (fill-in).

#### 3.3. Fill-in

Il **fill-in** è il fenomeno per cui, durante la fattorizzazione LU di una matrice sparsa, i fattori $L$ e $U$ diventano più densi della matrice originale. Questo aumenta il costo computazionale e la memoria richiesta.

#### 3.4. Gestione del Fill-in

Per ridurre il fill-in, si utilizzano algoritmi di riordinamento che permutano le righe e le colonne della matrice per compattare il pattern di sparsità.

### ==**4. Condizionamento di una Matrice**

#### 4.1. Definizione

Il **numero di condizionamento** di una matrice $A$, indicato con $K(A)$, misura quanto la soluzione di un sistema lineare $Ax = b$ è sensibile a piccole perturbazioni nei dati. È definito come:

$K(A) = |A| |A^{-1}|$

dove $| \cdot |$ è una norma matriciale.

#### 4.2. Interpretazione

- Se $K(A)$ è piccolo, la matrice è **ben condizionata**: piccole perturbazioni nei dati portano a piccole perturbazioni nella soluzione.
- Se $K(A)$ è grande, la matrice è **mal condizionata**: piccole perturbazioni nei dati possono portare a grandi perturbazioni nella soluzione.

#### 4.3. Effetto del Condizionamento

Anche se la fattorizzazione LU è accurata, una matrice mal condizionata può portare a soluzioni inaccurate a causa degli errori di arrotondamento e delle perturbazioni nei dati.

#### 4.4. Stima dell'Errore Relativo

L'errore relativo nella soluzione di un sistema lineare è legato al numero di condizionamento dalla seguente disuguaglianza:

$\frac{|\Delta x|}{|x|} \leq K(A) \frac{|\Delta b|}{|b|}$

dove:

- $\Delta x$ è la perturbazione nella soluzione
- $x$ è la soluzione esatta
- $\Delta b$ è la perturbazione nel termine noto $b$

#### 4.5. Calcolo del Condizionamento in Matlab

Matlab fornisce i seguenti comandi per calcolare il numero di condizionamento:

- `cond(A)`: calcola il numero di condizionamento usando la norma spettrale (norma 2).
- `cond(A, p)`: calcola il numero di condizionamento usando la norma $p$.
- `condest(A)`: stima il numero di condizionamento per matrici sparse usando la norma 1.

#### 4.6. Numero di Condizionamento Spettrale

Il numero di condizionamento spettrale, $K_2(A)$, è definito come:

$K_2(A) = \sqrt{\frac{\lambda_{max}(A^T A)}{\lambda_{min}(A^T A)}}$

dove $\lambda_{max}$ e $\lambda_{min}$ sono rispettivamente l'autovalore massimo e minimo di $A^T A$.

Se $A$ è simmetrica definita positiva, allora:

$K_2(A) = \frac{\lambda_{max}(A)}{\lambda_{min}(A)}$

### **5. Norme di Vettori e Matrici**

#### 5.1. Norma di un Vettore


#### 5.1. Norma Euclidea (Norma 2)

Per un vettore $v \in \mathbb{R}^n$, la norma euclidea è definita come:

$||v||_2 = \sqrt{\sum_{i=1}^{n} v_i^2}$

#### 5.2. Norma p

La norma $p$ è una generalizzazione della norma euclidea:

$||v||_p = \left(\sum_{i=1}^{n} |v_i|^p\right)^{\frac{1}{p}}$

#### 5.3. Norma infinito

La norma infinito di un vettore $v$ è definita come il massimo valore assoluto delle sue componenti:

$||v||_{\infty} = \max_{1 \leq i \leq n} |v_i|$

### 2. Norme Matriciali

Una **norma matriciale** è una funzione che assegna una grandezza a una matrice. Esistono diverse norme matriciali, ognuna con proprietà specifiche.

#### 2.1. Norma Indotta

Una **norma indotta** (o norma di оператор) è definita a partire da una norma vettoriale. La norma indotta $p$ di una matrice $A$ è definita come:

$||A||_p = \sup_{v \neq 0} \frac{||Av||_p}{||v||_p}$

dove il $\sup$ è preso su tutti i vettori non nulli $v \in \mathbb{R}^n$.

#### 2.2. Norma 1

La norma 1 di una matrice è il massimo della somma dei valori assoluti delle colonne:

$||A||_1 = \max_{1 \leq j \leq n} \sum_{i=1}^{n} |a_{ij}|$

#### 2.3. Norma infinito

La norma infinito di una matrice è il massimo della somma dei valori assoluti delle righe:

$||A||_{\infty} = \max_{1 \leq i \leq n} \sum_{j=1}^{n} |a_{ij}|$

#### 2.4. Norma 2 (Norma Spettrale)

La norma 2 (o norma spettrale) di una matrice $A$ è definita come la radice quadrata dell'autovalore massimo di $A^T A$:

$||A||_2 = \sqrt{\lambda_{\max}(A^T A)}$

Se $A$ è simmetrica, allora $||A||_2 = \max_i |\lambda_i|$, dove $\lambda_i$ sono gli autovalori di $A$.

#### 2.5. Norma di Frobenius

La **norma di Frobenius** di una matrice $A$ è definita come la radice quadrata della somma dei quadrati di tutti i suoi elementi:

$||A||_F = \sqrt{\sum_{i=1}^{n} \sum_{j=1}^{n} |a_{ij}|^2}$

### 3. Compatibilità tra Norme Vettoriali e Matriciali

Una proprietà importante è la **compatibilità** tra norme vettoriali e matriciali. Se $|| \cdot ||$ è una norma matriciale indotta dalla norma vettoriale $|| \cdot ||$, allora:

$||Av|| \leq ||A|| \cdot ||v||$

per ogni vettore $v$.

### 4. Esempio di Calcolo

**Esempio:** Calcolare la norma 1 della matrice:

$A = \begin{bmatrix} 1 & -2 \\ 3 & 4 \end{bmatrix}$

1. Somma dei valori assoluti per ogni colonna:
    - Colonna 1: $|1| + |3| = 4$
    - Colonna 2: $|-2| + |4| = 6$
2. Prendere il massimo di queste somme:
    - $||A||_1 = \max(4, 6) = 6$

### 5. Numero di Condizionamento e Norme

Il **numero di condizionamento** di una matrice $A$ dipende dalla norma scelta per calcolarlo:

$K(A) = ||A|| \cdot ||A^{-1}||$

Ad esempio, $K_1(A) = ||A||_1 \cdot ||A^{-1}||_1$ e $K_2(A) = ||A||_2 \cdot ||A^{-1}||_2$.

### 6. Utilizzo in MATLAB

In MATLAB, puoi calcolare diverse norme matriciali:

- `norm(A, 1)`: norma 1
- `norm(A, inf)`: norma infinito
- `norm(A, 2)` o `norm(A)`: norma 2 (spettrale)
- `norm(A, 'fro')`: norma di Frobenius }
___
#### 5.2. Norme di Matrici

Una **norma matriciale** è una funzione che assegna un numero reale non negativo a una matrice, soddisfacendo le seguenti proprietà:

- $|A| \geq 0$ per ogni matrice $A$
- $|A| = 0$ se e solo se $A = 0$
- $|\alpha A| = |\alpha| |A|$ per ogni scalare $\alpha$
- $|A + B| \leq |A| + |B|$ per ogni matrice $A$ e $B$

#### 5.3. Norma Indotta

La **norma indotta** (o norma operatoriale) di una matrice $A$ è definita come:

$|A|_p = \sup_{v \neq 0} \frac{|Av|_p}{|v|_p}$

dove $v$ è un vettore e $| \cdot |_p$ è una norma vettoriale.

#### 5.4. Norme Matriciali Comuni

- **Norma 1**: è il massimo della somma dei valori assoluti delle colonne:

$|A|_1 = \max_{1 \leq j \leq n} \sum_{i=1}^{n} |a_{ij}|$

- **Norma infinito**: è il massimo della somma dei valori assoluti delle righe:

$|A|_{\infty} = \max_{1 \leq i \leq n} \sum_{j=1}^{n} |a_{ij}|$

- **Norma 2 (o norma spettrale)**: è la radice quadrata dell'autovalore massimo di $A^T A$:

$|A|_2 = \sqrt{\lambda_{max}(A^T A)}$

- **Norma di Frobenius**: è la radice quadrata della somma dei quadrati di tutti gli elementi:

$|A|_F = \sqrt{\sum_{i=1}^{n} \sum_{j=1}^{n} |a_{ij}|^2}$

### **6. Perturbazioni e Condizionamento**

#### 6.1. Sistemi Perturbati

In pratica, quando si risolve un sistema lineare $Ax = b$ con metodi numerici, si risolve un sistema perturbato:

$(A + \Delta A)(x + \Delta x) = b + \Delta b$

dove $\Delta A$ e $\Delta b$ rappresentano le perturbazioni nella matrice e nel termine noto, rispettivamente, e $\Delta x$ è la perturbazione nella soluzione.

#### 6.2. Fonti delle Perturbazioni

Le perturbazioni sono causate principalmente da:

- Aritmetica floating-point
- Errori nell'algoritmo

#### 6.3. Obiettivo

L'obiettivo è capire come le perturbazioni sui dati ( $\Delta A$ e $\Delta b$ ) influenzano la soluzione ( $\Delta x$ ).

#### 6.4. Matrice di Hilbert

La matrice di Hilbert è un esempio classico di matrice mal condizionata. È definita come:

$a_{ij} = \frac{1}{i + j - 1}$

Risolvere un sistema lineare con una matrice di Hilbert può portare a soluzioni molto inaccurate, anche se si utilizza un metodo di fattorizzazione accurato come LU con pivoting.

#### 6.5. Conclusioni

- La scelta del metodo numerico dipende dalle proprietà della matrice (tridiagonale, SDP, sparsa, ecc.).
- È fondamentale valutare il condizionamento della matrice prima di risolvere il sistema.
- Matrici mal condizionate possono portare a soluzioni inaccurate, anche con metodi accurati.
- Algoritmi di riordinamento possono ridurre il fill-in nelle matrici sparse non strutturate.
____

### **1. Introduzione al Problema del Condizionamento**

Il condizionamento di una matrice è un concetto cruciale nell'analisi numerica, specialmente quando si risolvono sistemi lineari. Anche se un metodo di fattorizzazione come LU con pivoting produce una fattorizzazione accurata, la soluzione del sistema lineare può essere inaccurata se la matrice è **mal condizionata**.

### **2. Esempio Illustrativo: La Matrice di Hilbert**

Per illustrare questo problema, il professore introduce un esempio specifico: la **matrice di Hilbert** (o matrice di invert, come menzionato nella trascrizione). Questa matrice è definita come:

$a_{ij} = \frac{1}{i + j - 1}$
$$
\begin{pmatrix}
1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\
\frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\
\frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
\frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1}
\end{pmatrix}
$$

La matrice di Hilbert è simmetrica e definita positiva (SDP), il che significa che la fattorizzazione LU esiste ed è unica. Tuttavia, è anche notoriamente mal condizionata.

#### **2.1. Setup dell'Esperimento Numerico**

Per dimostrare il problema, si imposta un esperimento numerico in MATLAB:

1. Si sceglie una dimensione $n$ per la matrice $A_n$ e si crea la matrice di Hilbert di dimensione $n$.
2. Si sceglie un termine noto $b_n$ tale che la soluzione esatta $x_n$ sia un vettore di tutti 1. Questo facilita il confronto tra la soluzione calcolata e quella esatta. Il termine noto è scelto come $b_n = A_n \cdot \mathbb{1}$, dove $\mathbb{1}$ è il vettore con tutte le componenti uguali a 1.
3. Si calcola la fattorizzazione LU di $A_n$ con pivoting e si risolve il sistema lineare $A_n x = b_n$ utilizzando MATLAB.
4. Si confronta la soluzione ottenuta con la soluzione esatta e si calcola l'errore relativo.

#### **2.2. ==Monitoraggio dell'Accuratezza**

Per monitorare l'accuratezza della fattorizzazione LU, si calcola la matrice residua $R_n$ come:

$R_n = P_n A_n - L_n U_n$

dove $P_n$ è la matrice di permutazione ottenuta dal pivoting. Si verifica che il massimo delle entrate di $R_n$ sia vicino a zero, il che indica che la fattorizzazione LU è accurata.

Si calcola l'errore relativo $\epsilon_n$ come:

$$\epsilon_n = \frac{||x_n - \tilde{x}_n||}{||x_n||}$$

dove $\tilde{x}_n$ è la soluzione calcolata da MATLAB e $|| \cdot ||$ indica la norma euclidea.

#### **2.3. Risultati dell'Esperimento**

Si osserva che, anche se la fattorizzazione LU è accurata (cioè, $||R_n||_{\infty}$ è piccolo), l'errore relativo $\epsilon_n$ aumenta rapidamente con $n$. In particolare, per $n \geq 13$, l'errore relativo diventa maggiore di 10, il che significa un errore del 1000%.

Questo dimostra che, anche con una fattorizzazione accurata, una matrice mal condizionata può portare a risultati disastrosi.

### **3. Analisi del Problema: Sistemi Perturbati**

Per capire perché succede questo, il professore spiega che MATLAB non risolve il sistema originale $Ax = b$, ma un sistema perturbato:

$(A + \Delta A)(x + \Delta x) = b + \Delta b$

dove $\Delta A$ e $\Delta b$ sono perturbazioni nei dati dovute all'aritmetica floating-point e agli errori nell'algoritmo.

#### **3.1. Fonti delle Perturbazioni**

Le perturbazioni $\Delta A$ e $\Delta b$ sono causate principalmente da due fattori:

- **Aritmetica floating-point**: I calcoli vengono eseguiti con precisione finita, il che introduce errori di arrotondamento.
- **Algoritmo stesso**: La scelta dei moltiplicatori e le operazioni eseguite nell'algoritmo possono amplificare gli errori di arrotondamento.

#### **3.2. Obiettivo: Legare Perturbazioni e Risultati**

L'obiettivo è capire come le perturbazioni nei dati influenzano la soluzione. In un mondo ideale, piccole perturbazioni nei dati dovrebbero portare a piccole perturbazioni nella soluzione. Tuttavia, questo non è sempre il caso, specialmente con matrici mal condizionate.

### **4. Il Numero di Condizionamento**

Il **numero di condizionamento** di una matrice $A$, indicato con $K(A)$, quantifica la sensibilità della soluzione di un sistema lineare alle perturbazioni nei dati. È definito come:

$K(A) = ||A|| \cdot ||A^{-1}||$

dove $|| \cdot ||$ è una norma matriciale.

#### **4.1. Interpretazione del Numero di Condizionamento**

- Se $K(A)$ è piccolo, la matrice è **ben condizionata**: piccole perturbazioni nei dati portano a piccole perturbazioni nella soluzione.
- Se $K(A)$ è grande, la matrice è **mal condizionata**: piccole perturbazioni nei dati possono portare a grandi perturbazioni nella soluzione.

#### **4.2. Stima dell'Errore Relativo**

L'errore relativo nella soluzione di un sistema lineare è legato al numero di condizionamento dalla seguente disuguaglianza:

$$\frac{||\Delta x||}{||x||} \leq K(A) \frac{||\Delta b||}{||b||}$$

dove:

- $\Delta x$ è la perturbazione nella soluzione
- $x$ è la soluzione esatta
- $\Delta b$ è la perturbazione nel termine noto $b$

Questa disuguaglianza mostra che l'errore relativo nella soluzione può essere amplificato dal numero di condizionamento.

#### **4.3. Esempio Numerico**

Supponiamo che la perturbazione relativa nei dati sia $10^{-10}$. Se $K(A) = 1$, allora l'errore relativo nella soluzione sarà al più $10^{-10}$. Tuttavia, se $K(A) = 10^4$, allora l'errore relativo nella soluzione potrebbe essere fino a $10^{-6}$, che è molto più grande.

#### **4.4. Calcolo del Condizionamento in MATLAB**

MATLAB fornisce diversi comandi per calcolare il numero di condizionamento:

- `cond(A)`: Calcola il numero di condizionamento usando la norma spettrale (norma 2).
- `cond(A, p)`: Calcola il numero di condizionamento usando la norma $p$.
- `condest(A)`: Stima il numero di condizionamento per matrici sparse usando la norma 1.

#### **4.5. Numero di Condizionamento Spettrale**

Il numero di condizionamento spettrale, $K_2(A)$, è definito come:

$K_2(A) = \sqrt{\frac{\lambda_{max}(A^T A)}{\lambda_{min}(A^T A)}}$

dove $\lambda_{max}$ e $\lambda_{min}$ sono rispettivamente l'autovalore massimo e minimo di $A^T A$.

Se $A$ è simmetrica definita positiva, allora:

$K_2(A) = \frac{\lambda_{max}(A)}{\lambda_{min}(A)}$

### **5. Dimostrazione della Disuguaglianza Fondamentale**

Il professore fornisce una dimostrazione della disuguaglianza che lega l'errore relativo nella soluzione all'errore relativo nei dati e al numero di condizionamento.

Si parte dal sistema esatto:

$Ax = b$

e dal sistema perturbato:

$A\tilde{x} = \tilde{b} = b + \Delta b$

==Si sottrae membro a membro e si ottiene:

$A(x - \tilde{x}) = \Delta b$

Da cui:

$x - \tilde{x} = A^{-1} \Delta b$

Prendendo le norme e usando la compatibilità tra norma matriciale e norma vettoriale:

$||x - \tilde{x}|| \leq ||A^{-1}|| \cdot ||\Delta b||$

Si riparte dal sistema esatto e si prende la norma:

$||b|| = ||Ax|| \leq ||A|| \cdot ||x||$

Da cui:

$\frac{1}{||x||} \leq \frac{||A||}{||b||}$

Combinando le due disuguaglianze, si ottiene:

$\frac{||x - \tilde{x}||}{||x||} \leq ||A|| \cdot ||A^{-1}|| \frac{||\Delta b||}{||b||} = K(A) \frac{||\Delta b||}{||b||}$

che è la disuguaglianza desiderata.

### **6. Conclusioni**

In sintesi, il condizionamento di una matrice è un fattore cruciale da considerare quando si risolvono sistemi lineari. Anche se un metodo di fattorizzazione è accurato, una matrice mal condizionata può portare a soluzioni molto inaccurate. Pertanto, è sempre consigliabile calcolare il numero di condizionamento prima di risolvere un sistema lineare e, se la matrice è mal condizionata, considerare metodi alternativi o tecniche di regolarizzazione.
#### References
[[Appunti Mate Num- lez04.pdf]]


2025-02-26 15:31

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:   [[sbobine]]   [[matematica numerica]]

## mateNum- Lez05

### Perturbazione dei sistemi lineari e condizionamento

- **Problema**: Risolvere accuratamente un sistema lineare $Ax = b$ quando si usa la fattorizzazione LU. Anche se la fattorizzazione LU è accurata, l'output di MATLAB per $x$ può differire significativamente dalla soluzione $x$.
    
- **Motivo**: MATLAB risolve un sistema perturbato: $$ (A + \delta A)x = b + \delta b $$ dove $\delta A$ è una perturbazione sulla matrice dei coefficienti e $\delta b$ è una perturbazione sul termine noto. Queste perturbazioni inducono una perturbazione $\delta x$ sulla soluzione.
    
- **Analisi semplificata**: Inizialmente, si considera solo la perturbazione sul termine noto, quindi $\delta A = 0$.
    

#### Relazione tra perturbazione sulla soluzione e perturbazione sul termine noto

Si cerca una relazione tra la perturbazione sulla soluzione ($\delta x$) e la perturbazione sul termine noto ($\delta b$).

- **Numero di condizionamento**: Definito come il prodotto della norma di $A$ per la norma dell'inversa di $A$, cioè $cond(A) = ||A|| \cdot ||A^{-1}||$. Esistono diverse definizioni di norma di matrice e, di conseguenza, diverse definizioni di condizionamento.
    
- **Importanza del condizionamento**:
    
    - Se il numero di condizionamento è piccolo, una piccola perturbazione sui dati ($\delta b$) porta a una piccola perturbazione sulla soluzione ($\delta x$). In questo caso, il sistema è ben condizionato.
    - Viceversa, un numero di condizionamento grande amplifica anche piccole perturbazioni sui dati, portando a una soluzione molto diversa. Un esempio è la matrice di Hilbert.

#### ==Caso generale: perturbazioni su A e b

Si rimuove l'ipotesi semplificativa $\delta A = 0$ per considerare il caso reale con perturbazioni sia su $A$ che su $b$.

- **Condizione**: Si assume che $|| \delta A || \cdot || A^{-1} || < 1$.
    
- **Risultato generale**: La perturbazione sulla soluzione è controllata dalla seguente relazione: $$ \frac{||\delta x||}{||x||} \leq \frac{cond(A)}{1 - cond(A) \frac{||\delta A||}{||A||}} \left( \frac{||\delta A||}{||A||} + \frac{||\delta b||}{||b||} \right) $$ Questo risultato generalizza il caso semplificato. Se $\delta A = 0$, si ritrova la relazione precedente.
    
- **Verifica della positività del denominatore**: La condizione $|| \delta A || \cdot || A^{-1} || < 1$ assicura che il denominatore sia strettamente positivo. Dividendo entrambi i membri per $||A|| \cdot ||A^{-1}||$, si ottiene: 
- ![[Pasted image 20250325083541.png|200]]
- $$ \frac{||\delta A||}{||A||} < \frac{1}{cond(A)} $$ Moltiplicando per $-cond(A)$, si ha $1 - cond(A) \frac{||\delta A||}{||A||} > 0$.
    

#### Residuo

- **Definizione**: Il residuo $R$ è ciò che rimane quando si sostituisce la soluzione approssimata nel problema esatto. $$ R = b - A\tilde{x} $$ dove $\tilde{x}$ è la soluzione approssimata. Idealmente, se $\tilde{x}$ è vicino alla soluzione esatta, $R$ è vicino a zero.
    
- **Relazione con la perturbazione**: Si dimostra che $\delta b = -R$ quando $\delta A = 0$. $$ \delta b = A(x + \delta x) - Ax = A \delta x $$ e $R = b - A\tilde{x} = Ax - A\tilde{x} = -A \delta x$.
- ![[Pasted image 20250325084036.png|300]]
    
- **Stima equivalente**: La stima della perturbazione sulla soluzione può essere riscritta usando il residuo normalizzato (immagino con delta A = 0 ):  
  $$ \frac{||\delta x||}{||x||} \leq cond(A) \frac{||R||}{||b||} $$
    

#### Precondizionatore

- **Problema**: Cosa fare se il problema è mal condizionato?
- **Soluzione**: Utilizzare un precondizionatore $P$, una matrice ==invertibile==. L'obiettivo è trovare un $P$ tale che il condizionamento della matrice precondizionata $P^{-1}A$ sia molto più piccolo del condizionamento di $A$: $$ cond(P^{-1}A) << cond(A) $$
- **Riscrivere il sistema**: Moltiplicare il sistema $Ax = b$ per $P^{-1}$: $$ P^{-1}Ax = P^{-1}b $$ Si risolve quindi $A_{new}x = b_{new}$, dove $A_{new} = P^{-1}A$ e $b_{new} = P^{-1}b$.
- **Precondizionatore ideale**: Idealmente, $P$ dovrebbe essere $A^{-1}$, in modo che $P^{-1}A = I$ (matrice identità) e $cond(I) = 1$. Questo non è sempre possibile, ma fornisce una direzione.

### Metodi iterativi

#### Terminologia

- **Metodo iterativo**: Una "black box" in cui entra un valore iniziale (guess iniziale) $x_0$ e produce un'approssimazione $x_1$, che viene reintrodotta nella black box per generare $x_2$, e così via.
    
- **Guess iniziale**: Un'ipotesi iniziale per la soluzione.
    
- **Approssimazioni successive**: Partendo dal guess iniziale, il metodo genera una collezione di approssimazioni $x_k$ per la soluzione $x$: $$ \set{x_k}_{k=0}^{\infty}, \quad x_k \in \mathbb{R}^n, \quad x_k \approx x $$
    

#### Criteri di arresto

Poiché non si può iterare all'infinito, è necessario un criterio di arresto.

1. **Numero massimo di iterazioni** ($N_{max}$): Si fissa un numero massimo di iterazioni. Questo può essere scelto arbitrariamente o in base al tempo massimo consentito per la computazione.
2. **Controllo sull'accuratezza**: Si cerca di controllare l'accuratezza della soluzione. Idealmente, si vorrebbe che: $$ ||x - x_k|| < tolleranza $$ dove la tolleranza è un valore fissato dall'utente (es. $10^{-q}$). Tuttavia, poiché $x$ è sconosciuta, si controlla uno stimatore dell'errore.

#### Stimatori dell'errore

1. **Incremento**: La differenza tra due iterazioni successive: $$ ||x_{k+1} - x_k|| < tolleranza $$ L'idea è che, se il metodo converge, le iterazioni successive saranno sempre più vicine.
2. **Residuo**: Si utilizza il residuo $R = b - Ax_k$: $$ ||R|| = ||b - Ax_k|| < tolleranza $$ Se $x_k$ fosse la soluzione esatta, il residuo sarebbe zero.

- **Affidabilità degli stimatori**: È fondamentale studiare l'affidabilità degli stimatori, perché potrebbe esserci una costante che influenza la stima dell'errore: $$ ||x - x_k|| \leq C \cdot ||x_{k+1} - x_k|| $$ Se $C$ è molto grande, lo stimatore potrebbe non essere affidabile.

#### Convergenza

- **Definizione**: Si desidera che la successione di approssimazioni converga alla soluzione esatta: $$ \lim_{k \to \infty} x_k = x $$ Questo limite va inteso componente per componente.
    
- **Errore all'iterata k-esima**: $e_k = x - x_k$. La convergenza può essere espressa come: $$ \lim_{k \to \infty} e_k = 0 $$
    

#### Schema iterativo generico

Si ipotizza che la black box generi una nuova approssimazione attraverso una combinazione lineare: $$ x_{k+1} = Bx_k + G $$ dove $B \in \mathbb{R}^{n \times n}$ e $G \in \mathbb{R}^n$. $B$ e $G$ definiscono il metodo iterativo. $B$ è legata alla matrice $A$, mentre $G$ è legata sia ad $A$ che al termine noto $b$.

#### Consistenza

- **Definizione**: Un metodo numerico è consistente con il problema se, sostituendo la soluzione esatta nello schema, l'uguaglianza è soddisfatta: $$ x = Bx + G $$ Questo certifica che il metodo non è "folle" e che è coerente con il problema che si vuole risolvere.
    
- **Legame tra G, A e b**: Dalla consistenza, si può dimostrare che $G$ dipende sia da $A$ che da $b$.
    

#### Analisi di convergenza

- **La sola consistenza non è sufficiente**: Un esempio è $B = I$ (matrice identità) e $G = 0$. In questo caso, $x_{k+1} = x_k$, quindi non c'è convergenza a meno che $x_0 = x$.
    
- **Condizione sufficiente per la convergenza**: Supponendo che il metodo sia consistente, si sottrae lo schema iterativo dalla relazione di consistenza: $$ x_{k+1} - x = Bx_k + G - (Bx + G) = B(x_k - x) $$ Quindi $e_{k+1} = Be_k$. Prendendo le norme: $$ ||e_{k+1}|| = ||Be_k|| \leq ||B|| \cdot ||e_k|| $$ Iterando, si ottiene: 
  ![[Pasted image 20250325093836.png|350]]
  ![[Pasted image 20250325093857.png]]
  $$ ||e_{k+1}|| \leq ||B||^{k+1} \cdot ||e_0|| $$ Affinché $||e_k|| \to 0$ per $k \to \infty$, è sufficiente che $||B|| < 1$.
    
- **Condizione necessaria e sufficiente per la convergenza**: Il teorema fondamentale afferma che, se lo schema è consistente, allora converge per ogni scelta di $x_0$ se e solo se il raggio spettrale di $B$ è minore di 1: $$ \rho(B) < 1 $$ dove $\rho(B) = \max{|\lambda| : \lambda \text{ autovalore di } B}$.
    
- **Lemma utile**: Per dimostrare il teorema, data una $C \in \mathbb{R}^{n x n}$ si usa il fatto che $C^k \to 0$ se e solo se $\rho(C) < 1$. Inoltre, $\rho(C) \leq ||C||$.
    
- **Velocità di convergenza**: Più piccolo è il raggio spettrale, più rapida è la convergenza.
    

#### Schema iterativo di Richardson

- **Partenza**: Si parte dal sistema $Ax = b$ e si moltiplica per una costante $\alpha_k$: $$ \alpha_k Ax = \alpha_k b $$
    
- **Manipolazione algebrica**: Si riscrive $\alpha_k A$ come $P - (P - \alpha_k A)$, dove $P$ è una matrice invertibile (il precondizionatore): $$ Px - (P - \alpha_k A)x = \alpha_k b $$
    
- **Schema iterativo**: Si decide arbitrariamente di associare il termine a sinistra con la nuova iterata e quello a destra con la vecchia iterata: $$ Px_{k+1} = (P - \alpha_k A)x_k + \alpha_k b $$
    
- **Consistenza per costruzione**: Questo schema è consistente per costruzione, perché si è partiti dall'equazione esatta e si è semplicemente manipolata algebricamente.
    
- **Forma esplicita**: Moltiplicando per $P^{-1}$, si ottiene la forma $x_{k+1} = Bx_k + G$: $$ x_{k+1} = (I - \alpha_k P^{-1} A)x_k + \alpha_k P^{-1} b $$ dove $B_{\alpha_k} = I - \alpha_k P^{-1} A$ e $G_{\alpha_k} = \alpha_k P^{-1} b$.
    
- **Algoritmo**:
    
    - Dato $x_0$ (guess iniziale).
    - Per $k \geq 0$, calcola: $$ x_{k+1} = (I - \alpha_k P^{-1} A)x_k + \alpha_k P^{-1} b $$
- **Metodi di Richardson stazionari e dinamici**:
    
    - **Stazionario**: $\alpha_k = \alpha$ per ogni $k$ (parametro costante).
    - **Dinamico**: $\alpha_k$ varia ad ogni iterazione.


___

### Metodi Iterativi per Sistemi di Equazioni Lineari

#### Introduzione ai Metodi Iterativi

I metodi iterativi rappresentano un blocco fondamentale per la risoluzione di sistemi di equazioni lineari, in alternativa ai metodi diretti.

#### Terminologia e Concetti Chiave

Quando si parla di un metodo iterativo, si può immaginare una "scatola nera" (black box).

- **Guess Iniziale**: All'interno di questa scatola nera entra un valore iniziale, chiamato "guess iniziale" (o ipotesi iniziale). Il guess iniziale viene indicato con $x_0$. Il verbo "guess" significa "ipotizzare".
- **Approssimazione della Soluzione**: In corrispondenza di $x_0$, la scatola nera produce una quantità $x_1$, che rappresenta la prima approssimazione della soluzione.
- **Iterazione**: Questa $x_1$ rientra nella scatola nera, generando $x_2$, e così via. Quindi, partendo dal guess iniziale, si genera una sequenza di approssimazioni.

Nel contesto specifico della risoluzione di sistemi di equazioni lineari ($Ax = b$), $x_0$ è un'approssimazione per $x$, che è un vettore di $R^n$. Ogni approssimazione successiva ($x_k$) sarà anch'essa un vettore di $R^n$.

Idealmente, la black box genera una collezione infinita di approssimazioni per $x$. Avremo quindi una collezione di $x_k$, con $k$ che varia da 0 a infinito, dove ogni $x_k$ appartiene a $R^n$ e approssima $x$.

#### Criterio d'Arresto

Dato che il concetto di infinito non è gestibile da un calcolatore, ogni metodo iterativo deve essere dotato di un criterio d'arresto (stop). Questo criterio indica quando fermare il processo iterativo.

##### Tipi di Criteri d'Arresto

1. **Numero Massimo di Iterazioni**: Si fissa un numero massimo di iterazioni ($N_{max}$). Questo valore può essere scelto arbitrariamente o in base al tempo massimo consentito per l'esecuzione. Tuttavia, questo criterio da solo non garantisce una buona accuratezza.
    
2. **Controllo sull'Accuratezza**: Si cerca di controllare l'accuratezza, imponendo che la differenza tra la soluzione esatta ($x$) e l'approssimazione corrente ($x_k$) sia inferiore a una certa tolleranza ($\epsilon$):
    
    $||x - x_k|| < \epsilon$
    
    La tolleranza ($\epsilon = 10^{-q}$) è definita dall'utente e deve essere coerente con i valori misurati.
    

Idealmente, si utilizzano entrambi i criteri in combinazione:

- Il criterio sul numero massimo di iterazioni evita di iterare all'infinito se l'accuratezza desiderata non viene mai raggiunta.
- Il criterio sull'accuratezza permette di fermarsi prima se si raggiunge la tolleranza desiderata.

##### Stima dell'Errore

Dato che la soluzione esatta $x$ non è nota, si utilizzano degli **stimatori** per controllare l'accuratezza. Due stimatori comuni sono:

- **Incremento**: La differenza tra due approssimazioni successive: $||x_{k+1} - x_k||$.
- **Residuo**: Definito come $r_k = b - Ax_k$. Il residuo indica quanto la soluzione approssimata soddisfa l'equazione originale.

Idealmente, si vorrebbe che:

$||x - x_k|| \le S < \epsilon$

Dove $S$ è lo stimatore. Tuttavia, in pratica, esiste una costante che può influenzare l'affidabilità dello stimatore:

$||x - x_k|| \le C \cdot S$

Se $C$ è molto grande, lo stimatore potrebbe non essere affidabile.

#### Convergenza

Idealmente, si desidera che la successione di approssimazioni $x_k$ converga alla soluzione esatta $x$ per $k$ che tende a infinito:

$\lim_{k \to \infty} x_k = x$

Questo significa che ogni componente del vettore $x_k$ deve tendere alla corrispondente componente del vettore $x$.

In modo equivalente, si può definire l'errore all'iterata $k$-esima come:

$e_k = x - x_k$

E richiedere che:

$\lim_{k \to \infty} e_k = 0$

Dove 0 è il vettore nullo.

#### Forma Generale di uno Schema Iterativo

Si ipotizza che la black box generi una nuova approssimazione $x_{k+1}$ a partire dalla precedente $x_k$ attraverso una combinazione lineare:

$x_{k+1} = Bx_k + g$

Dove:

- $B$ è una matrice di iterazione di dimensioni $n \times n$.
- $g$ è un vettore.

$B$ e $g$ identificano il metodo iterativo. La matrice $B$ è legata alla matrice $A$ del sistema originale, mentre il vettore $g$ è legato sia ad $A$ che al termine noto $b$.

#### Consistenza

Un metodo numerico si dice **consistente** con il problema se, rimpiazzando nel metodo la soluzione esatta, l'uguaglianza è verificata:

$x = Bx + g$

In altre parole, il metodo è coerente con il problema che si sta cercando di risolvere.

#### Legame tra g, A e b

Il vettore $g$ dipende sia dalla matrice $A$ che dal termine noto $b$. Possiamo riscrivere l'equazione di consistenza come:

$x = Bx + g \implies g = x - Bx = (I - B)x$

Dato che $x = A^{-1}b$, possiamo scrivere:

$g = (I - B)A^{-1}b$

Questo dimostra che $g$ dipende sia da $A$ che da $b$.

#### Condizione Sufficiente per la Convergenza

La sola consistenza non è sufficiente a garantire la convergenza.

Esempio:

Se si sceglie $B = I$ (matrice identità) e $g = 0$ (vettore nullo), il metodo è consistente, ma $x_{k+1} = x_k$, quindi non c'è convergenza a meno che il guess iniziale non sia già la soluzione esatta.

Supponendo che il metodo sia consistente, sottraiamo la relazione di consistenza dallo schema iterativo:

$x_{k+1} - x = Bx_k + g - (Bx + g) = B(x_k - x)$

Definendo l'errore come $e_k = x - x_k$, otteniamo:

$e_{k+1} = Be_k$

Prendendo la norma (ad esempio, la norma 2) di entrambi i membri:

$||e_{k+1}|| = ||Be_k|| \le ||B|| \cdot ||e_k||$

Iterando, otteniamo:

$||e_{k+1}|| \le ||B||^{k+1} \cdot ||e_0||$

Affinché l'errore tenda a zero per $k \to \infty$, è sufficiente che:

$||B|| < 1$

Quindi, se il metodo è consistente e la norma di $B$ è strettamente minore di 1, il metodo è convergente.

#### Condizione Necessaria e Sufficiente per la Convergenza

Un teorema fondamentale stabilisce una condizione necessaria e sufficiente per la convergenza:

**Teorema**: Sia lo schema $x_{k+1} = Bx_k + g$ consistente. Allora, il metodo converge per ogni scelta del guess iniziale $x_0$ se e solo se il raggio spettrale di $B$ è strettamente minore di 1.

##### Raggio Spettrale

Il raggio spettrale di una matrice $B$, indicato con $\rho(B)$, è il massimo dei moduli degli autovalori di $B$:

$\rho(B) = \max_i |\lambda_i|$

Dove $\lambda_i$ sono gli autovalori di $B$.

##### Lemma

Per dimostrare il teorema, abbiamo bisogno di due risultati preliminari:

1. Sia $C$ una matrice a entrate reali. Allora, $C^k \to 0$ (componente per componente) se e solo se $\rho(C) < 1$.
2. Esiste una relazione tra il raggio spettrale e la norma 2 di una matrice: $\rho(B) \le ||B||_2$.

##### Dimostrazione del Teorema

Partiamo dalla relazione:

$e_{k+1} = Be_k$

Iterando:

$e_{k+1} = B^{k+1}e_0$

L'errore $e_{k+1}$ tende a zero indipendentemente da $e_0$ se e solo se $B^{k+1}$ tende alla matrice nulla. Grazie al lemma (punto 1), questo accade se e solo se $\rho(B) < 1$.

##### Osservazione

Se $||B||_2 < 1$, allora, grazie al lemma (punto 2), anche $\rho(B) < 1$, e quindi il metodo converge. Tuttavia, può succedere che $\rho(B) < 1$ ma $||B||_2 > 1$, quindi la condizione sulla norma è solo sufficiente.

##### Velocità di Convergenza

La grandezza del raggio spettrale determina anche la velocità di convergenza: più piccolo è $\rho(B)$, più rapida è la convergenza. Se abbiamo due metodi con matrici di iterazione $B_1$ e $B_2$ e $\rho(B_1) = 0.9$ e $\rho(B_2) = 0.1$, allora il secondo metodo converge più rapidamente.

#### Costruzione di uno Schema Iterativo Generico: Metodo di Richardson

Partiamo dal sistema lineare:

$Ax = b$

Moltiplichiamo entrambi i membri per una costante $\alpha_k$:

$\alpha_k Ax = \alpha_k b$

Introduciamo una matrice invertibile $P$ (precondizionatore) e riscriviamo $\alpha_k A$ come:

$\alpha_k A = P - (P - \alpha_k A)$

Quindi, il sistema diventa:

$Px - (P - \alpha_k A)x = \alpha_k b$

Risolvendo per $Px$:

$Px = (P - \alpha_k A)x + \alpha_k b$

In modo arbitrario, associamo il membro di sinistra con la nuova iterata $x_{k+1}$ e il membro di destra con la vecchia iterata $x_k$:

$Px_{k+1} = (P - \alpha_k A)x_k + \alpha_k b$

Questo schema è consistente per costruzione. Per scriverlo nella forma $x_{k+1} = Bx_k + g$, moltiplichiamo per $P^{-1}$:

$x_{k+1} = P^{-1}(P - \alpha_k A)x_k + \alpha_k P^{-1}b$

Quindi:

$B_{\alpha_k} = P^{-1}(P - \alpha_k A) = I - \alpha_k P^{-1}A$

$g_{\alpha_k} = \alpha_k P^{-1}b$

L'algoritmo iterativo è:

- Dato $x_0$ (guess iniziale)
- Per $k \ge 0$: $x_{k+1} = B_{\alpha_k}x_k + g_{\alpha_k}$

Questo schema è noto come **metodo di Richardson**.

##### Metodo di Richardson Stazionario e Dinamico

- **Stazionario**: Se il parametro $\alpha_k$ è costante ($\alpha_k = \alpha$ per ogni $k$), il metodo è detto stazionario.
- **Dinamico**: Se il parametro $\alpha_k$ varia ad ogni iterazione, il metodo è detto dinamico.

In generale, un metodo dinamico può adattarsi meglio al problema, ma richiede un costo computazionale maggiore per la determinazione di $\alpha_k$ ad ogni iterazione.
    
___

### Teorema Fondamentale per i Metodi Iterativi

Il teorema cardine per i metodi iterativi stabilisce una condizione necessaria e sufficiente per la convergenza di uno schema iterativo.

**Ipotesi:**

- Si considera uno schema iterativo nella forma: $x_{k+1} = Bx_k + g$
- Lo schema è consistente, ovvero $x = Bx + g$

**Tesi:**

Esiste equivalenza tra le seguenti affermazioni:

- Il raggio spettrale di $B$, indicato con $\rho(B)$, è strettamente minore di 1, cioè $\rho(B) < 1$
- Lo schema converge, indipendentemente dalla scelta del guess iniziale $x_0 \in \mathbb{R}^n$

#### Definizione di Raggio Spettrale

Il raggio spettrale $\rho(B)$ è definito come il massimo dei moduli degli autovalori della matrice $B$. Formalmente:

$\rho(B) = \max_i |\lambda_i|$ dove $\lambda_i$ sono gli autovalori di $B$.

In MATLAB, il raggio spettrale può essere calcolato con la seguente sequenza di comandi:

```
eig(B); % Calcola gli autovalori di B
abs();   % Calcola il valore assoluto (modulo) degli autovalori
max();   % Trova il massimo tra i moduli degli autovalori
```

#### Lemmi Utili per la Dimostrazione

Per dimostrare il teorema, sono necessari due lemmi:

**Lemma 1:**

Se $C$ è una matrice a elementi reali, allora $C^k \rightarrow 0$ (la potenza $k$-esima di $C$ tende a zero) se e solo se $\rho(C) < 1$.

**Lemma 2:**

Esiste una relazione tra il raggio spettrale di una matrice e la sua norma 2, ma solo in una direzione: $\rho(B) \le ||B||_2$. Non vale il viceversa.

#### Dimostrazione del Teorema

1. **Punto di partenza**: Si sottrae lo schema iterativo dalla relazione di consistenza:
    
    $e_{k+1} = x_{k+1} - x = Bx_k + g - (Bx + g) = B(x_k - x) = Be_k$
    
    dove $e_k$ rappresenta l'errore al passo $k$.
    
2. **Iterazione**: Iterando la relazione, si ottiene:
    
    $e_{k+1} = B e_k = B^2 e_{k-1} = \dots = B^{k+1} e_0$
    
3. **Convergenza**: L'errore $e_{k+1}$ tende a zero indipendentemente da $x_0$ se e solo se $B^{k+1} \rightarrow 0$.
    
4. **Applicazione del Lemma 1**: Per il Lemma 1, $B^{k+1} \rightarrow 0$ se e solo se $\rho(B) < 1$.
    

Pertanto, la convergenza dello schema è equivalente alla condizione $\rho(B) < 1$.

#### Osservazioni aggiuntive

- **Importanza della libertà di scelta del guess iniziale**: La possibilità di scegliere liberamente il guess iniziale è fondamentale, specialmente in contesti come i metodi per equazioni non lineari, dove una scelta errata può compromettere la convergenza.
    
- **Legame tra norma 2 e raggio spettrale**: Se $||B||_2 < 1$, allora, grazie al Lemma 2, $\rho(B) < 1$, e quindi il metodo converge. Tuttavia, la convergenza può verificarsi anche se $||B||_2 > 1$, purché $\rho(B) < 1$.
    
- **Velocità di convergenza**: La grandezza del raggio spettrale determina la velocità di convergenza: più piccolo è $\rho(B)$, più rapida è la convergenza.
    
    Esempio: Dati due metodi, M1 con $\rho(B_1) = 0.9$ e M2 con $\rho(B_2) = 0.1$, si preferirà M2 perché converge più rapidamente.
    

### Costruzione di uno Schema Iterativo Generico: Il Metodo di Richardson

Il professore introduce un metodo iterativo generico, noto come metodo di Richardson, partendo dal sistema lineare $Ax = b$ e manipolandolo algebricamente per ottenere uno schema iterativo nella forma $x_{k+1} = Bx_k + g$.

#### Passaggi Chiave

1. **Moltiplicazione per una costante**: Si moltiplica il sistema per una costante $\alpha_k$:
    
    $\alpha_k Ax = \alpha_k b$
    
2. **Introduzione della matrice P**: Si riscrive $\alpha_k A$ introducendo una matrice invertibile $P$ (il precondizionatore):
    
    $\alpha_k A = P - (P - \alpha_k A)$
    
3. **Riscrittura del sistema**: Si sostituisce questa espressione nel sistema originale:
    
    $Px - (P - \alpha_k A)x = \alpha_k b$
    
4. **Definizione dello schema iterativo**: Si associa il termine $Px$ con la nuova iterata $x_{k+1}$ e il resto con l'iterata precedente $x_k$:
    
    $Px_{k+1} = (P - \alpha_k A)x_k + \alpha_k b$
    

#### Forma Finale dello Schema di Richardson

Per ottenere la forma canonica $x_{k+1} = Bx_k + g$, si moltiplica per $P^{-1}$:

$x_{k+1} = (I - \alpha_k P^{-1} A)x_k + \alpha_k P^{-1} b$

Dove:

- $B_{\alpha_k} = I - \alpha_k P^{-1} A$ è la matrice di iterazione
- $g_{\alpha_k} = \alpha_k P^{-1} b$ è il termine noto

L'algoritmo risultante è:

- Dato $x^{(0)}$ (guess iniziale)
- Per $k \ge 0$: $x_{k+1} = (I - \alpha_k P^{-1} A)x_k + \alpha_k P^{-1} b$

#### Metodi di Richardson Stazionari e Dinamici

- **Stazionario**: $\alpha_k = \alpha$ (costante per ogni $k$)
- **Dinamico**: $\alpha_k$ varia ad ogni iterazione

La scelta tra stazionario e dinamico dipende dal problema specifico e dagli obiettivi di convergenza.

_Gli schemi di Richardson sono consistenti per costruzione, il che significa che non è necessario verificare esplicitamente la condizione di consistenza quando si studia la convergenza. È sufficiente dimostrare che il raggio spettrale della matrice di iterazione è minore di 1._

#### References




[[Appunti Mate Num-lez05.pdf]]


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

2025-03-04 16:47

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:  [[sbobine]]   [[matematica numerica]]

## mateNum- Lez07


### Convergenza dei Metodi Iterativi di Richardson

#### Condizione Necessaria e Sufficiente

Per tutti gli schemi iterativi della forma $x^{k+1} = Bx^k + G$, si può utilizzare la condizione necessaria e sufficiente che richiede la consistenza più il fatto che il **raggio spettrale** della corrispondente matrice $B$ sia strettamente minore di 1.

#### Condizioni Sufficienti per Jacobi e Gauss-Seidel

Esistono condizioni sufficienti che riguardano la matrice $A$ che permettono di stabilire la convergenza di Jacobi e Gauss-Seidel:

- **Jacobi**: Se $A$ è una matrice a dominanza diagonale stretta per righe o per colonne, allora Jacobi è convergente.
- **Gauss-Seidel**: Valgono le stesse affermazioni di Jacobi, e in più, se $A$ è una matrice simmetrica definita positiva, allora Gauss-Seidel è convergente.

### Confronto tra Jacobi e Gauss-Seidel

In generale, si potrebbe pensare che Gauss-Seidel converga meglio di Jacobi perché utilizza in corso le componenti già aggiornate. Tuttavia, ci sono casi in cui Jacobi converge e Gauss-Seidel diverge, o Jacobi performa meglio di Gauss-Seidel.

#### Proposizione

Se $A$ è una matrice di ordine $n$ a elementi reali tridiagonale e non singolare, con tutte le entrate diagonali $a_{ii}$ diverse da 0 per $i$ da 1 a $n$, allora:

- Gauss-Seidel e Jacobi convergono entrambi o divergono entrambi.
- Se entrambi convergono, il raggio spettrale della matrice $B$ associata a Gauss-Seidel è uguale al quadrato del raggio spettrale della matrice di Jacobi: $\rho(B_{GS}) = \rho(B_{Jac})^2$.

#### Esempio

Supponiamo che il raggio spettrale della matrice di iterazione associata a Jacobi sia $\rho(B_{Jac}) = \frac{1}{4}$. Fissiamo una tolleranza $TOL$ e cerchiamo il numero minimo di iterazioni $k \in \mathbb{N}$ tale che $\rho(B_{Jac})^k \le TOL$.

$$ \left(\frac{1}{4}\right)^k \le TOL $$

$$ \frac{1}{TOL} \le 4^k $$

$$ \log_4\left(\frac{1}{TOL}\right) \le k $$

Quindi, $k \ge \lceil\log_4\left(\frac{1}{TOL}\right)\rceil$.

Per Gauss-Seidel, $\rho(B_{GS}) = \left(\frac{1}{4}\right)^2 = \frac{1}{16}$. Quindi:

$$ \left(\frac{1}{16}\right)^k \le TOL $$

$$ \frac{1}{TOL} \le 16^k = (4^2)^k = 4^{2k} $$

$$ \log_4\left(\frac{1}{TOL}\right) \le 2k $$

$$ k \ge \lceil{\frac{1}{2}\log_4\left(\frac{1}{TOL}\right)}\rceil $$

Questo esempio mostra che il numero di iterazioni richieste da Gauss-Seidel è circa la metà di quelle richieste da Jacobi per raggiungere la stessa accuratezza.

**Esempio numerico**: Risolvendo un sistema $Ax = b$ con $A$ tridiagonale $$
\begin{bmatrix}
  3 & -1 & 0 & \cdots & 0 \\
  -2 & 3 & -1 & \cdots & 0 \\
  0 & -2 & 3 & \cdots & 0 \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  0 & 0 & 0 & \cdots & 3
\end{bmatrix}
$$, e $b = \begin{bmatrix} 1,\cdots, 1 \end{bmatrix}$ si trova che Jacobi richiede  $it_j=$ 277 iterazioni mentre Gauss-Seidel ne richiede $it_{GS}=$ 143 per $x^{(0)}=0$ una tolleranza di $10^{-12}$.

### Convergenza di JOR e SOR

#### JOR

Se $A$ è una matrice simmetrica definita positiva, allora lo schema di JOR converge se $0 < \omega < \frac{2}{\rho(D^{-1}A)}$, dove $D$ è la diagonale di $A$ (il precondizionatore di Jacobi e JOR).

#### SOR

- Se $A$ è simmetrica definita positiva, allora SOR converge se e solo se $0 < \omega < 2$.
- Se $A$ è simmetrica definita positiva e tridiagonale, allora SOR converge per $0 < \omega < 2$ e esiste un valore ottimale per il parametro di rilassamento $\omega$.

$$ \omega_{opt} = \frac{2}{1 + \sqrt{1 - \rho(B_{Jac})^2}} $$

Questo valore ottimale massimizza la velocità di convergenza.

### Criteri di Arresto nelle Iterazioni

#### Introduzione

Quando si implementano metodi iterativi per approssimare la soluzione di un sistema lineare, è fondamentale stabilire dei criteri di arresto per interrompere il processo iterativo. Questi criteri servono a bilanciare l'accuratezza della soluzione con il costo computazionale.

#### Criteri di Arresto Principali

1. **Numero Massimo di Iterazioni**:
    - È **cautelativo** fissare un numero massimo di iterazioni ($N_{\text{max}}$).
    - La scelta di $N_{\text{max}}$ è **arbitraria** e dipende dall'utente.
    - Serve a **garantire** che l'algoritmo termini anche se la convergenza è lenta.
2. **Controllo sull'Errore (Tolleranza)**:
    - Si cerca un indice $k$ tale che l'errore (la differenza tra la soluzione esatta $x$ e l'approssimazione $x^k$) sia minore di una tolleranza fissata ($\text{tol}$).
    - Matematicamente: $|x - x^k| < \text{tol}$.
    - In pratica, **non si conosce** $x$, quindi si utilizza uno stimatore $S$.
    - Si arresta il loop quando $S < \text{tol}$, combinando questo criterio con il numero massimo di iterazioni.

#### Stimatore $S$ e Affidabilità

- L'obiettivo è trovare una quantità $S$ che **surroghi** l'errore, ovvero che lo approssimi.
    
- Idealmente, $S$ dovrebbe essere molto vicino all'errore reale.
    
- Si introduce una costante $C$ tale che $\text{Errore} \approx C \cdot S$.
    
    - Se $C$ è **piccola** (dell'ordine di $10^0$ o $10^1$), lo stimatore è **affidabile**.
    - Se $C$ è **grande** (es. $3 \times 10^6$), lo stimatore **non è affidabile**.
- Si utilizzano **due stimatori** ($S_1$ e $S_2$) per avere alternative nel caso uno non sia affidabile.
    

### Stimatore 1: Residuo Relativo

#### Definizione del Residuo

- Il residuo $r^k$ è definito come $r^k = b - Ax^k$, dove $x^k$ è l'approssimazione della soluzione al passo $k$.
    
- Il razionale è che, se $x^k$ fosse la soluzione esatta $x$, allora $r^k$ sarebbe zero.
    
- Si utilizza il **residuo relativo** come stimatore $S_1$:
    
    $S_1 = \frac{|r^k|}{|b|}$
    
- Si cerca il minimo $k$ tale che $\frac{|r^k|}{|b|} \leq \text{tol}$.
    

#### Legame con l'Errore Relativo

- Si vuole trovare una relazione tra l'errore relativo e il residuo relativo:
    
    $\frac{|x - x^k|}{|x|} \leq C \cdot \frac{|r^k|}{|b|}$
    
- La costante $C$ in questo caso è il **numero di condizionamento** $K(A)$ della matrice $A$.
    

#### Numero di Condizionamento

- Se la matrice $A$ è **ben condizionata** ($K(A)$ piccolo), allora $S_1$ è uno stimatore **affidabile**.
- Se la matrice $A$ è **mal condizionata** ($K(A)$ grande), allora $S_1$ **non è affidabile**.
- Il numero di condizionamento è legato alla **sensibilità** della soluzione del sistema lineare alle perturbazioni nei dati.

#### Derivazione della Relazione

- Si parte dalla relazione nota (vista durante lo studio del condizionamento):
    
    $\frac{|\delta x|}{|x|} \leq K(A) \frac{|\delta b|}{|b|}$
    
- Dove $\delta x$ è la perturbazione sulla soluzione e $\delta b$ è la perturbazione sul dato.
    
- Si identifica $\delta b$ con $-r^k$, ottenendo:
    
    $\frac{|x - x^k|}{|x|} \leq K(A) \frac{|r^k|}{|b|}$
    

### Stimatore 2: Incremento

#### Definizione dell'Incremento

- L'incremento $\delta^k$ è definito come la differenza tra due iterate successive: $\delta^k = x_{k+1} - x^k$.
- Questo stimatore è usato per controllare l'**errore assoluto**.

#### Relazione con l'Errore Assoluto

- Si cerca una relazione tra l'errore assoluto e l'incremento:
    
    $|x - x^k| \leq C \cdot |\delta^k|$
    
- Si aggiunge e sottrae $x_{k+1}$ all'errore:
    
    $|x - x^k| = |x - x_{k+1} + x_{k+1} - x^k|$
    
- Si ottiene:
    
    $|x - x^k| = |(x - x_{k+1}) + (x_{k+1} - x^k)| = |e_{k+1} + \delta^k|$
    
- Usando la disuguaglianza triangolare:
    
    $|e_{k+1} + \delta^k| \leq |e_{k+1}| + |\delta^k|$
    

#### Ulteriori Passaggi (con $B$ Simmetrica Definitiva Positiva)

- Si assume che la matrice di precondizionamento $B$ sia simmetrica definita positiva per semplificare i calcoli.
    
- Si usa la relazione $e_{k+1} = B e^k$, quindi $|e_{k+1}| = |B e^k|$.
    
- Usando la compatibilità tra norma matriciale e vettoriale:
    
    $|B e^k| \leq |B| |e^k|$
    
    
- Si ha:
    
    $|x - x^k| \leq |B| |e^k| + |\delta^k|$
    
- Da cui:
    
    $|e^k| \leq |B| |e^k| + |\delta^k|$
    
- Se $B$ è simmetrica definita positiva, allora $|B|_2 = \rho(B)$, il raggio spettrale di $B$.
    
- Riarrangiando:
    
    $|e^k|(1 - \rho(B)) \leq |\delta^k|$
    
- Infine:
    
    $|x - x^k| \leq \frac{1}{1 - \rho(B)} |\delta^k|$
    

#### Affidabilità dello Stimatore

- La costante $C$ è $\frac{1}{1 - \rho(B)}$.
- Affinché $S_2$ sia affidabile, $\rho(B)$ deve essere il più vicino possibile a zero.
- Questo significa che il metodo deve convergere **velocemente**.

#### Conclusioni

- Se la matrice $A$ è ben condizionata, si può usare il residuo relativo $S_1$.
- Se il metodo converge velocemente, si può usare l'incremento $S_2$.
- In caso contrario, è necessario utilizzare altri metodi.

### Convergenza del Metodo di Richardson Stazionario

**Teorema di convergenza**: Per un generico schema di Richardson stazionario, con precondizionatore invertibile $P$, la convergenza è garantita indipendentemente dalla scelta del guess iniziale $\forall x_0 \in \mathbb{R}^n$ se e solo se il parametro di accelerazione $\alpha$ soddisfa una specifica relazione.

**Condizione necessaria e sufficiente**: La condizione è definita in termini degli autovalori $\lambda_i$ della matrice precondizionata $P^{-1}A$. In particolare, $\alpha$ deve soddisfare la seguente disuguaglianza:

$$2 \frac{Re(\lambda_i)}{\alpha |\lambda_i|^2} > 1 \quad \forall i$$

dove:

- $Re(\lambda_i)$ è la parte reale dell'autovalore $\lambda_i$
- $|\lambda_i|^2$ è il modulo quadrato dell'autovalore $\lambda_i$

**Osservazioni**:

- Anche se la matrice $A$ ha coefficienti reali, gli autovalori $\lambda_i$ di $P^{-1}A$ possono essere complessi.
- Se gli autovalori sono reali, la condizione si semplifica.

### Raggio Spettrale e Matrice di Iterazione

La condizione di convergenza è strettamente legata al raggio spettrale della matrice di iterazione.

**Matrice di iterazione**: Per il metodo di Richardson stazionario, la matrice di iterazione $B_\alpha$ è data da:

$B_\alpha = I - \alpha P^{-1}A$

dove $I$ è la matrice identità.

**Autovalori di $B_\alpha$**: Se $\lambda_i$ sono gli autovalori di $P^{-1}A$, allora gli autovalori corrispondenti di $B_\alpha$ sono:

$1 - \alpha \lambda_i$

**Condizione di convergenza basata sul raggio spettrale**: La convergenza è assicurata se il modulo di questi autovalori è minore di 1 per ogni $i$:

$|1 - \alpha \lambda_i| < 1 \quad \forall i$

### Analisi del Modulo e Derivazione della Condizione

Per analizzare la condizione $|1 - \alpha \lambda_i| < 1$, è necessario considerare la parte reale e immaginaria del numero complesso $1 - \alpha \lambda_i$.

**Calcolo del modulo**: Il modulo al quadrato è dato da:

$|1 - \alpha \lambda_i|^2 = Re(1 - \alpha \lambda_i)^2 + Im(1 - \alpha \lambda_i)^2$

dove:

- $Re(1 - \alpha \lambda_i) = 1 - \alpha Re(\lambda_i)$
- $Im(1 - \alpha \lambda_i) = -\alpha Im(\lambda_i)$

**Sviluppo della disuguaglianza**: Sostituendo e sviluppando, si ottiene:

$[1 - \alpha Re(\lambda_i)]^2 + [-\alpha Im(\lambda_i)]^2 < 1$

$1 - 2\alpha Re(\lambda_i) + \alpha^2 Re(\lambda_i)^2 + \alpha^2 Im(\lambda_i)^2 < 1$

**Semplificazione**: Dopo alcune semplificazioni algebriche, si arriva a:

$\alpha^2 |\lambda_i|^2 - 2\alpha Re(\lambda_i) < 0$

**Condizione finale**: Dividendo per $\alpha^2 |\lambda_i|^2$ (e notando che la quantità $2\alpha Re(\lambda_i)$ deve essere positiva), si ottiene:

$2 \frac{Re(\lambda_i)}{\alpha |\lambda_i|^2} > 1$

che è la condizione di convergenza iniziale.

### Scelta Ottimale di $\alpha$

In condizioni più restrittive, si può determinare un valore ottimale per $\alpha$ che massimizza la velocità di convergenza.

**Ipotesi aggiuntive**:

- $P^{-1}A$ ha tutti gli autovalori reali e positivi
- Gli autovalori sono ordinati in modo decrescente: $\lambda_1 > \lambda_2 > ... > \lambda_n > 0$

**Intervallo di convergenza per $\alpha$**: In queste condizioni, il metodo di Richardson stazionario converge se $\alpha$ appartiene all'intervallo:

$0 < \alpha < \frac{2}{\lambda_1}$

dove $\lambda_1$ è l'autovalore massimo di $P^{-1}A$.

**Valore ottimale di $\alpha$**: Il raggio spettrale della matrice di iterazione $B_\alpha$ è minimizzato quando $\alpha$ è scelto come:

$\alpha_{ott} = \frac{2}{\lambda_1 + \lambda_n}$

dove $\lambda_n$ è l'autovalore minimo di $P^{-1}A$.

### Dimostrazione Grafica del Valore Ottimale di $\alpha$

La determinazione del valore ottimale di $\alpha$ può essere compresa graficamente analizzando come varia il modulo degli autovalori di $B_\alpha$ in funzione di $\alpha$.

**Setup del grafico**:

- Si considerano tre autovalori $\lambda_1 > \lambda_2 > \lambda_3 > 0$ di $P^{-1}A$.
- Si tracciano i grafici delle funzioni $|1 - \alpha \lambda_i|$ per $i = 1, 2, 3$ in funzione di $\alpha$.
![[Pasted image 20250304164552.png|600]]

**Andamento dei grafici**:

- Ogni grafico ha una forma a "V" e interseca l'asse $\alpha$ in $\frac{1}{\lambda_i}$.
- Tutti i grafici partono dal punto $(0, 1)$.

**Determinazione grafica di $\alpha_{ott}$**:

1. Per ogni valore di $\alpha$, si identificano i tre valori $|1 - \alpha \lambda_i|$.
2. Si considera il massimo di questi tre valori, che corrisponde al raggio spettrale.
3. Si cerca il valore di $\alpha$ che minimizza questo massimo.

**Punto di minimo**: Il minimo del massimo si trova nel punto di intersezione tra il ramo decrescente della funzione associata a $\lambda_1$ e il ramo crescente della funzione associata a $\lambda_3$
![[Pasted image 20250304164630.png|600]]

**Calcolo geometrico**: Si impone l'uguaglianza tra le due rette:

$1 - \alpha \lambda_3 = \alpha \lambda_1 - 1$

Da cui si ricava:

$\alpha_{ott} = \frac{2}{\lambda_1 + \lambda_3}$

Che generalizzato al caso di $n$ autovalori diventa:

$\alpha_{ott} = \frac{2}{\lambda_1 + \lambda_n}$

### Considerazioni Finali

La scelta di $\alpha$ è cruciale per la convergenza e l'efficienza del metodo di Richardson stazionario. Mentre le condizioni teoriche forniscono un quadro generale, la determinazione del valore ottimale richiede ulteriori ipotesi sugli autovalori della matrice precondizionata $P^{-1}A$.

Inoltre, mentre ci sono delle indicazioni su come scegliere $\alpha$ in modo ottimale, non ci sono altrettante indicazioni su come scegliere $P$.

#### References
[[Appunti Mate Num- Lez07.pdf]]


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


2025-03-11 12:15

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[sbobine]] [[matematica numerica]]

## Matenum- lez11

## Approssimazione di Funzioni e Dati

### Introduzione all'Approssimazione

Il corso inizia con l'introduzione al concetto di **approssimazione di funzioni e dati**. Si parte dall'ipotesi di avere una funzione $f$ definita su un intervallo $[a, b]$ della retta reale. Nel caso dei dati, si considera una collezione di misurazioni, rappresentate come coppie di istanti temporali (o più in generale, ascisse $x_i$) e valori misurati $y_i$.

### Motivazioni per l'Approssimazione

Si esplorano le ragioni per cui potrebbe essere utile o necessario approssimare funzioni e dati. L'idea fondamentale è di **rimpiazzare un oggetto potenzialmente complesso o difficile da manipolare con qualcosa di più gestibile**.

#### Approssimazione di Funzioni

Un contesto significativo in cui l'approssimazione di funzioni si rivela utile è nel calcolo di **integrali**. Se si ha un integrale definito di una funzione $f(x)$ tra $a$ e $b$, $\int_a^b f(x) dx$, e la funzione integranda è particolarmente complessa, potrebbe non essere calcolabile in forma esplicita o potrebbe essere espressa come una serie non facilmente valutabile. In questi casi, si può **rimpiazzare $f(x)$ con una sua approssimazione $\tilde{f}(x)$ che sia più facile da integrare**. La scelta di $\tilde{f}(x)$ deve essere tale che l'integrale $\int_a^b \tilde{f}(x) dx$ sia facilmente calcolabile. Una scelta suggerita è quella di approssimare $f(x)$ con un **polinomio**, poiché i polinomi sono facilmente integrabili. L'integrale di $f(x)$ ($\text{IDF}$) viene approssimato dall'integrale di $\tilde{f}(x)$ ($\text{ID}\tilde{f}$): $\text{IDF} = \int_a^b f(x) dx \approx \int_a^b \tilde{f}(x) dx = \text{ID}\tilde{f}$

Un altro contesto menzionato è la **soluzione di equazioni non lineari**, dove una funzione complessa potrebbe essere sostituita con un polinomio per semplificare la ricerca delle soluzioni.

#### Approssimazione di Dati

Quando si ha a che fare con una collezione di dati, come misurazioni di temperatura nel tempo, l'approssimazione può servire a **trovare una tendenza o una legge sottostante i dati**. Se da una serie di misurazioni si riesce a dedurre un andamento, questo può essere utilizzato per **stimare il valore della grandezza misurata in istanti o luoghi in cui non sono state effettuate misurazioni**.

La natura dei dati influenza il tipo di approssimazione più appropriato.

- **Pochi dati ben distribuiti:** In questo caso, si può cercare di costruire una curva che **replica i valori misurati nei punti in cui sono stati acquisiti**.
- **Molti dati distribuiti in modo caotico (nuvola di dati):** In questa situazione, cercare una curva che passi per tutti i punti risulterebbe in un andamento molto irregolare e poco significativo. È più sensato **cercare una curva più semplice, come una retta o una parabola, che colga l'andamento generale dei dati senza necessariamente passare per ogni singolo punto**.

### Tipi di Approssimazione: Interpolazione e Minimi Quadrati

Vengono distinti due tipi principali di approssimazione:

- **Interpolazione:** Questo tipo di approssimazione mira a costruire una curva che **passa esattamente per i punti dati**. È adatta quando si hanno pochi dati ben distribuiti o quando si vuole replicare esattamente i valori di una funzione in specifici punti. Un esempio menzionato è l'**interpolazione lineare a tratti**, dove si uniscono punti consecutivi con segmenti di retta.
- **Approssimazione ai Minimi Quadrati:** Questo metodo è più adatto a **dati distribuiti in modo caotico** e cerca di trovare una curva che **minimizza la somma dei quadrati delle differenze tra i valori misurati e i valori sulla curva approssimante**. L'obiettivo non è replicare esattamente i singoli valori, ma catturare l'andamento generale. Questo approccio è strettamente legato all'ambito statistico.

### Approssimazione di Funzioni e l'Analisi: La Serie di Taylor

Quando si considera l'approssimazione di funzioni, lo strumento principale offerto dall'analisi è lo **sviluppo di Taylor**. La serie di Taylor di una funzione $f(x)$ centrata in un punto $x_0$ è data da: $f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(x_0)}{k!} (x - x_0)^k = f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + ...$

Lo sviluppo di Taylor fornisce un'approssimazione della funzione in un intorno del punto $x_0$. Tuttavia, presenta due principali limiti:

1. **Località:** Lo sviluppo di Taylor è una buona approssimazione solo in un **intorno ristretto del punto in cui viene centrato**. L'esempio della funzione $f(x) = \frac{1}{x}$ centrata in $x_0 = 1$ illustra come l'approssimazione di Taylor possa divergere rapidamente al di fuori di un piccolo intervallo intorno a 1. Sebbene in alcuni casi, come l'esponenziale centrato in zero, l'approssimazione possa essere valida su un intervallo più ampio, la località rimane un problema generale.
2. **Regolarità:** Per poter scrivere l'espansione di Taylor fino a un certo ordine (e quindi ottenere una buona approssimazione troncando la serie), è necessario che la funzione $f(x)$ sia **sufficientemente derivabile e che le sue derivate siano continue**. In molti fenomeni realistici, la regolarità richiesta per lo sviluppo di Taylor potrebbe non essere soddisfatta.

A causa di questi limiti, si rende necessario esplorare metodi di approssimazione alternativi, come l'interpolazione.

### Interpolazione: Definizione e Obiettivo

L'**interpolazione** consiste nel trovare un oggetto (nel nostro caso, una funzione $\tilde{f}(x)$) che **passa esattamente per un insieme di $n+1$ coppie di dati $(x_i, y_i)$**, dove $i$ va da $0$ a $n$. Le $x_i$ sono chiamate **nodi di interpolazione** e devono essere **distinte tra loro** ($x_i \neq x_j$ per $i \neq j$). Le $y_i$ rappresentano i **valori da interpolare**, che possono essere i valori di una funzione $f(x)$ nei nodi ($y_i = f(x_i)$) o direttamente dei dati misurati.

L'obiettivo dell'interpolazione è trovare una funzione $\tilde{f}(x)$ tale che: $\tilde{f}(x_i) = y_i \quad \text{per } i = 0, 1, ..., n$ Queste condizioni sono chiamate **condizioni di interpolazione**.

### Scelta della Funzione Interpolante

La funzione $\tilde{f}(x)$ può essere scelta tra diverse classi di funzioni:

1. **Interpolazione Polinomiale:** In questo caso, la funzione interpolante $\tilde{f}(x)$ è un **polinomio**. L'insieme dei polinomi di grado al più $Q$ con coefficienti reali è denotato con $\mathbb{P}_Q$, e un generico polinomio $P_Q(x) \in \mathbb{P}_Q$ ha la forma: $P_Q(x) = a_0 + a_1 x + a_2 x^2 + ... + a_Q x^Q$, dove $a_i \in \mathbb{R}$ per $i = 0, ..., Q$. Ci focalizzeremo principalmente su questo tipo di interpolazione.
    
2. **Interpolazione Trigonometrica:** In questo caso, la funzione interpolante è una combinazione di funzioni trigonometriche, come **seni e coseni**, o equivalentemente, **esponenziali complessi**. Questo tipo di interpolazione è strettamente legato alle **serie di Fourier** e viene spesso utilizzato per approssimare segnali e onde. La forma generale può essere espressa come una somma: $\tilde{f}(x) = \sum_{k} A_k e^{ikx}$, dove $A_k \in \mathbb{R}$ sono i coefficienti.
    
3. **Interpolazione Razionale:** In questo caso, la funzione interpolante $\tilde{f}(x)$ è un **quoziente di due polinomi**: $\tilde{f}(x) = \frac{P(x)}{S(x)} = \frac{a_0 + a_1 x + ... + a_k x^k}{b_0 + b_1 x + ... + b_s x^s}$, dove $a_i, b_i \in \mathbb{R}$.
    

### Interpolazione Polinomiale: Esistenza e Unicità

Si introduce una proposizione fondamentale riguardante l'interpolazione polinomiale:

**Proposizione:** Si considerino $n+1$ coppie di dati $(x_i, y_i)$ per $i = 0, ..., n$, con i nodi di interpolazione $x_i$ distinti tra loro. Allora, **esiste ed è unico un polinomio $\pi_n(x)$ di grado minore o uguale a $n$ tale che $\pi_n(x_i) = y_i$ per $i = 0, ..., n$**.

Il simbolo $\pi_n$ viene utilizzato per denotare il polinomio interpolante di grado al più $n$. È importante notare lo stretto legame tra il numero di dati ($n+1$) e il grado massimo del polinomio interpolante ($n$). Questo è una caratteristica distintiva dell'interpolazione polinomiale rispetto ad altri metodi di approssimazione come i minimi quadrati, dove il grado del polinomio approssimante può essere scelto indipendentemente dal numero di dati.

Il polinomio di interpolazione $\pi_n(x)$ viene definito come un'**approssimazione globale**, in quanto utilizza tutti i dati contemporaneamente per la sua costruzione.

#### Dimostrazione dell'Unicità

Per dimostrare l'unicità del polinomio interpolante, si procede per **assurdo**. Si suppone che esistano due polinomi, $\pi_n(x)$ e $\pi_n^*(x)$, entrambi di grado al più $n$, tali che interpolino gli stessi $n+1$ punti $(x_i, y_i)$: $\pi_n(x_i) = y_i \quad \text{per } i = 0, ..., n$ $\pi_n^*(x_i) = y_i \quad \text{per } i = 0, ..., n$

Si considera la **differenza tra i due polinomi**: $d(x) = \pi_n(x) - \pi_n^*(x)$

Poiché sia $\pi_n(x)$ che $\pi_n^*(x)$ hanno grado al più $n$, anche la loro differenza $d(x)$ avrà grado al più $n$. Valutando $d(x)$ nei nodi di interpolazione $x_i$, si ottiene: $d(x_i) = \pi_n(x_i) - \pi_n^*(x_i) = y_i - y_i = 0 \quad \text{per } i = 0, ..., n$

Questo significa che il polinomio $d(x)$ ha **$n+1$ radici distinte** (i nodi di interpolazione $x_0, x_1, ..., x_n$). Tuttavia, un **polinomio non nullo di grado al più $n$ può avere al massimo $n$ radici distinte**. Affinché un polinomio di grado al più $n$ abbia $n+1$ radici distinte, esso deve essere **identicamente nullo**: $d(x) = 0 \quad \forall x$

Questo implica che: $\pi_n(x) - \pi_n^*(x) = 0 \implies \pi_n(x) = \pi_n^*(x)$

Pertanto, il polinomio interpolante di grado al più $n$ che passa per $n+1$ punti distinti è **unico**. La dimostrazione dell'esistenza verrà affrontata successivamente attraverso la costruzione esplicita del polinomio interpolante.

_____
# Polinomio Interpolatore

## Unicità del Polinomio Interpolatore

Il professore inizia dimostrando per assurdo l'**unicità del polinomio di grado $n$ che interpola $n+1$ punti**. Suppone che esistano due polinomi distinti, $\pi_n(x)$ e $\pi_n^*(x)$, entrambi di grado $n$, che replicano gli stessi valori $y_i$ in corrispondenza dei nodi $x_i$ per $i$ che va da $0$ a $n$. Questo significa che:

$\pi_n(x_i) = y_i$ $\pi_n^*(x_i) = y_i$

per $i = 0, 1, ..., n$.

Successivamente, introduce un **polinomio differenza** $G_n(x)$ definito come:

$G_n(x) = \pi_n(x) - \pi_n^*(x)$.

Questo polinomio $G_n(x)$ è anch'esso di grado al più $n$, essendo la differenza di due polinomi di grado $n$. Valutando $G_n(x)$ nei nodi di interpolazione $x_i$, si ottiene:

$G_n(x_i) = \pi_n(x_i) - \pi_n^*(x_i) = y_i - y_i = 0$.

Questo implica che il polinomio $G_n(x)$ di grado $n$ si annulla in $n+1$ punti distinti ($x_0, x_1, ..., x_n$). Un polinomio di grado $n$ può avere al massimo $n$ radici (o zeri), a meno che non sia il **polinomio identicamente nullo**.

L'unica possibilità affinché un polinomio di grado $n$ abbia $n+1$ zeri è che sia il polinomio che associa $0$ ad ogni valore di $x$:

$G_n(x) = 0$ per ogni $x$.

Sostituendo la definizione di $G_n(x)$, si ha:

$\pi_n(x) - \pi_n^*(x) = 0$ per ogni $x$.

Da cui si conclude che:

$\pi_n(x) = \pi_n^*(x)$ per ogni $x$.

Questo contraddice l'ipotesi iniziale che i due polinomi fossero distinti, dimostrando quindi l'**unicità del polinomio interpolatore** di grado $n$.

## Costruzione del Polinomio Interpolatore

Dopo aver dimostrato l'unicità, il professore passa alla **costruzione del polinomio interpolatore** $\pi_n(x)$. Inizia considerando un caso particolare per poi generalizzare.

### Caso Particolare: Interpolazione con Tre Nodi e Valori Specifici

Si considerano tre nodi di interpolazione: $x_0 = 0$, $x_1 = 0.5$, $x_2 = 1$, e i corrispondenti valori da interpolare: $y_0 = 0$, $y_1 = 1$, $y_2 = 0$. L'obiettivo è costruire un polinomio di grado 2 (una parabola) che passi per i punti $(0, 0)$, $(0.5, 1)$, e $(1, 0)$.

Invece di chiamare subito il polinomio $\pi_2(x)$, il professore lo battezza $f_1(x)$. L'indice '1' nel pedice indica il nodo in corrispondenza del quale il valore interpolato non è zero (in questo caso, $y_1 = 1$ al nodo $x_1 = 0.5$).

Si cerca un polinomio di grado 2 che si annulli in $x_0 = 0$ e $x_2 = 1$. Un modo semplice per costruire un tale polinomio è il prodotto di monomi:

$(x - x_0)(x - x_2) = (x - 0)(x - 1) = x(x - 1) = x^2 - x$.

Questo polinomio si annulla in $x = 0$ e $x = 1$, soddisfacendo le condizioni in $x_0$ e $x_2$. Tuttavia, valutandolo in $x_1 = 0.5$, si ottiene:

$(0.5)^2 - 0.5 = 0.25 - 0.5 = -0.25$.

Per fare in modo che il polinomio valga $1$ in $x_1 = 0.5$, è necessario **dividere per il valore che il polinomio assume in quel punto**:

$$f_1(x) = \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} = \frac{(x - 0)(x - 1)}{(0.5 - 0)(0.5 - 1)} = \frac{x(x - 1)}{0.5 \times (-0.5)} = \frac{x^2 - x}{-0.25} = -4(x^2 - x) = 4x - 4x^2$$.

Quindi, il polinomio interpolatore $f_1(x) = 4x - 4x^2$ è una parabola che passa per i punti $(0, 0)$, $(0.5, 1)$, e $(1, 0)$.

### Generalizzazione: Costruzione dei Polinomi Caratteristici di Lagrange

Il professore generalizza ora la costruzione al caso di $n+1$ nodi di interpolazione generici $x_0, x_1, ..., x_n$ e suppone che l'unico valore da interpolare diverso da zero (e uguale a 1) sia in corrispondenza del $k$-esimo nodo $x_k$, cioè $y_k = 1$ e $y_i = 0$ per $i \neq k$. Si vuole costruire il polinomio $f_k(x)$ di grado $n$ tale che:

$f_k(x_j) = \delta_{jk} = \begin{cases} 1 & \text{se } j = k \\ 0 & \text{se } j \neq k \end{cases}$

dove $\delta_{jk}$ è il **delta di Kronecker**.

Analogamente al caso particolare, $f_k(x)$ deve annullarsi in tutti i nodi $x_j$ con $j \neq k$. Questo si ottiene considerando il prodotto di monomi che includono tutti i fattori $(x - x_j)$ eccetto quello con $j = k$:

$$\prod_{j=0, j \neq k}^{n} (x - x_j) = (x - x_0)(x - x_1)...(x - x_{k-1})(x - x_{k+1})...(x - x_n)$$.

Questo prodotto è un polinomio di grado $n$. Per fare in modo che $f_k(x_k) = 1$, si divide questo prodotto per il valore che assume in $x = x_k$:

$$f_k(x) = \frac{\prod_{j=0, j \neq k}^{n} (x - x_j)}{\prod_{j=0, j \neq k}^{n} (x_k - x_j)}$$.

Il polinomio $f_k(x)$ così definito è chiamato **polinomio caratteristico di Lagrange** associato al nodo $x_k$.

Il denominatore è una costante data da:

$(x_k - x_0)(x_k - x_1)...(x_k - x_{k-1})(x_k - x_{k+1})...(x_k - x_n)$.

Quando si valuta $f_k(x)$ in un nodo $x_i$:

- Se $i = k$, il numeratore contiene tutti i fattori del denominatore (con l'ordine dei termini possibilmente diverso), quindi $f_k(x_k) = 1$.
- Se $i \neq k$, uno dei fattori nel numeratore sarà $(x_i - x_i) = 0$, rendendo l'intero prodotto nullo, quindi $f_k(x_i) = 0$.

### Analogie con la Funzione Caratteristica

Il professore fa un'analogia tra il polinomio caratteristico di Lagrange e la **funzione caratteristica** (o funzione indicatrice) di un insieme $\Omega$ in $\mathbb{R}^d$, spesso indicata con $\mathbb{1}_{\Omega}(x)$ o $\chi_{\Omega}(x)$. Questa funzione vale:

$\chi_{\Omega}(x) = \begin{cases} 1 & \text{se } x \in \omega \\ 0 & \text{se } x \notin \omega \end{cases}$.

L'analogia risiede nel fatto che $f_k(x)$ "si accende" (vale 1) solo nel nodo $x_k$ e "si spegne" (vale 0) in tutti gli altri nodi di interpolazione. Questa proprietà permette di localizzare il contributo di ciascun nodo all'interpolazione.

### Caso Generale: Polinomio Interpolatore di Lagrange

Infine, il professore considera il caso generale in cui si vogliono interpolare i valori $y_0, y_1, ..., y_n$ in corrispondenza dei nodi $x_0, x_1, ..., x_n$ . Il **polinomio interpolatore di Lagrange** $\pi_n(x)$ si può esprimere come una **combinazione lineare dei polinomi caratteristici di Lagrange** :

$\pi_n(x) = \sum_{k=0}^{n} y_k f_k(x) = \sum_{k=0}^{n} y_k \prod_{j=0, j \neq k}^{n} \frac{(x - x_j)}{(x_k - x_j)}$ .

Dove $y_k$ sono i valori da interpolare nei nodi $x_k$.

Per verificare che questo polinomio interpola correttamente i dati, valutiamolo in un nodo $x_i$:

$\pi_n(x_i) = \sum_{k=0}^{n} y_k f_k(x_i)$

Sappiamo che $f_k(x_i) = \delta_{ik}$, quindi $f_k(x_i)$ è 1 se $k = i$ e 0 se $k \neq i$. Pertanto, nella somma, l'unico termine non nullo è quello in cui $k = i$:

$\pi_n(x_i) = y_i f_i(x_i) = y_i \times 1 = y_i$.

Questo dimostra che il polinomio di Lagrange $\pi_n(x)$ passa per tutti i punti $(x_i, y_i)$ per $i = 0, 1, ..., n$. Essendo una combinazione lineare di polinomi di grado $n$, anche $\pi_n(x)$ è un polinomio di grado al più $n$. Per l'unicità dimostrata in precedenza, questo è l'unico polinomio di grado $n$ che interpola i dati.


___


## Costruzione del Polinomio di Interpolazione

### Primo Metodo: Utilizzo dei Polinomi Caratteristici (Forma di Lagrange)

L'obiettivo è costruire un polinomio $\pi_2(x)$ di grado 2 che soddisfi tre condizioni di interpolazione date da tre nodi $(x_0, y_0), (x_1, y_1), (x_2, y_2)$.

Si decide di esprimere $\pi_2(x)$ come una combinazione lineare di tre polinomi caratteristici $f_0(x), f_1(x), f_2(x)$ associati rispettivamente ai nodi $x_0, x_1, x_2$:

$\pi_2(x) = a f_0(x) + b f_1(x) + c f_2(x)$

dove $a, b, c$ sono i coefficienti da determinare.

Questi polinomi caratteristici hanno la seguente proprietà fondamentale:

$f_i(x_j) = \delta_{ij} = \begin{cases} 1 & \text{se } i = j \\ 0 & \text{se } i \neq j \end{cases}$

Esplicitamente:

$f_0(x_0) = 1, f_0(x_1) = 0, f_0(x_2) = 0$ $f_1(x_0) = 0, f_1(x_1) = 1, f_1(x_2) = 0$ $f_2(x_0) = 0, f_2(x_1) = 0, f_2(x_2) = 1$

Ora si impongono le condizioni di interpolazione:

1. $\pi_2(x_0) = y_0$: $a f_0(x_0) + b f_1(x_0) + c f_2(x_0) = y_0$ $a \cdot 1 + b \cdot 0 + c \cdot 0 = y_0$ $\implies \mathbf{a = y_0}$
    
2. $\pi_2(x_1) = y_1$: $a f_0(x_1) + b f_1(x_1) + c f_2(x_1) = y_1$ $a \cdot 0 + b \cdot 1 + c \cdot 0 = y_1$ $\implies \mathbf{b = y_1}$
    
3. $\pi_2(x_2) = y_2$: $a f_0(x_2) + b f_1(x_2) + c f_2(x_2) = y_2$ $a \cdot 0 + b \cdot 0 + c \cdot 1 = y_2$ $\implies \mathbf{c = y_2}$
    

Sostituendo i valori di $a, b, c$ nell'espressione di $\pi_2(x)$, si ottiene la forma del polinomio interpolatore di grado 2:

$\mathbf{\pi_2(x) = y_0 f_0(x) + y_1 f_1(x) + y_2 f_2(x)}$

Generalizzando questo risultato per $n+1$ punti di interpolazione $(x_i, y_i)$ con $i = 0, 1, \dots, n$, il polinomio interpolatore $\pi_n(x)$ di grado $n$ è dato da:

$\mathbf{\pi_n(x) = \sum_{k=0}^{n} y_k f_k(x)}$

dove $f_k(x)$ è il polinomio caratteristico associato al nodo $x_k$ e ha la forma:

$\mathbf{f_k(x) = \prod_{j=0, j\neq k}^{n} \frac{x - x_j}{x_k - x_j}}$

Sostituendo l'espressione di $f_k(x)$ nella formula per $\pi_n(x)$, si ottiene la **forma di Lagrange del polinomio interpolatore**:

$\mathbf{\pi_n(x) = \sum_{k=0}^{n} y_k \prod_{j=0, j\neq k}^{n} \frac{x - x_j}{x_k - x_j}}$

### Secondo Metodo: Risoluzione di un Sistema Lineare

Un altro modo per costruire il polinomio interpolatore $\pi_n(x)$ è di esprimerlo nella sua forma generale come un polinomio di grado $n$:

$\mathbf{\pi_n(x) = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n = \sum_{i=0}^{n} a_i x^i}$

dove $a_0, a_1, \dots, a_n$ sono i coefficienti incogniti (in numero di $n+1$) che devono essere determinati.

Utilizzando le $n+1$ condizioni di interpolazione $\pi_n(x_i) = y_i$ per $i = 0, 1, \dots, n$, si ottiene un sistema di $n+1$ equazioni lineari nelle $n+1$ incognite $a_0, a_1, \dots, a_n$:

$\begin{cases} a_0 + a_1 x_0 + a_2 x_0^2 + \dots + a_n x_0^n = y_0 \\ a_0 + a_1 x_1 + a_2 x_1^2 + \dots + a_n x_1^n = y_1 \\ \vdots \ a_0 + a_1 x_n + a_2 x_n^2 + \dots + a_n x_n^n = y_n \end{cases}$

Questo sistema può essere scritto in forma matriciale come:

$\mathbf{B A = Y}$

dove:

- $\mathbf{B}$ è la **matrice di Vandermonde** di dimensione $(n+1) \times (n+1)$:
    
    $\mathbf{B} = \begin{pmatrix} 1 & x_0 & x_0^2 & \dots & x_0^n \\ 1 & x_1 & x_1^2 & \dots & x_1^n \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_n & x_n^2 & \dots & x_n^n \end{pmatrix}$
    
- $\mathbf{A}$ è il vettore delle incognite (i coefficienti del polinomio):
    
    $\mathbf{A} = \begin{pmatrix} a_0 \\ a_1 \\ \vdots \\ a_n \end{pmatrix}$
    
- $\mathbf{Y}$ è il vettore dei valori da interpolare:
    
    $\mathbf{Y} = \begin{pmatrix} y_0 \ y_1 \ \vdots \ y_n \end{pmatrix}$
    

La matrice di Vandermonde $\mathbf{B}$ è non singolare (e quindi il sistema ammette un'unica soluzione) se e solo se tutti i nodi $x_i$ sono distinti. Questa è l'ipotesi fondamentale sotto cui si formalizza il problema di interpolazione.

Tuttavia, la matrice di Vandermonde è **fortemente mal condizionata**, simile alla matrice di Hilbert. Questo significa che la risoluzione diretta di questo sistema può portare a coefficienti numericamente inaffidabili, specialmente per valori di $n$ elevati. Pertanto, questo secondo metodo, pur essendo concettualmente semplice, è spesso evitato nella pratica numerica. I metodi iterativi possono migliorare la situazione, ma rimangono comunque rischiosi. Nonostante ciò, questo approccio è spesso presentato a livelli didattici inferiori come introduzione al problema.

### Comandi MATLAB per l'Interpolazione Polinomiale

MATLAB fornisce due comandi principali per lavorare con l'interpolazione polinomiale:

1. **`Polifit(x, y, n)`**: Questo comando costruisce il polinomio interpolatore.
    
    - **Input**:
        - `x`: un vettore contenente i nodi di interpolazione.
        - `y`: un vettore contenente i valori da interpolare nei rispettivi nodi.
        - `n`: il grado del polinomio interpolatore desiderato. È importante notare che, se si hanno $n+1$ dati e si desidera interpolarli esattamente, il grado del polinomio sarà $n$. La funzione `Polifit` è in realtà progettata anche per il fitting ai minimi quadrati, dove il grado del polinomio può essere inferiore al numero di dati. Nel caso di interpolazione esatta con $n+1$ dati, specificare il grado $n$ corrisponde a trovare il polinomio che passa esattamente per tutti i punti.
    - **Output**:
        - `C`: un vettore contenente i coefficienti del polinomio interpolatore di grado $n$. I coefficienti sono ordinati in modo **decrescente rispetto al grado**, ovvero $C = [c_n, c_{n-1}, \dots, c_1, c_0]$, dove il polinomio è $p(x) = c_n x^n + c_{n-1} x^{n-1} + \dots + c_1 x + c_0$. È fondamentale ricordare questo ordine per interpretare correttamente i risultati.
2. **`Polival(C, D)`**: Questo comando valuta un polinomio in uno o più punti.
    
    - **Input**:
        - `C`: il vettore dei coefficienti del polinomio (ottenuto da `Polifit` o definito manualmente).
        - `D`: uno scalare o un vettore contenente i punti in cui si desidera valutare il polinomio.
    - **Output**:
        - `Q`: uno scalare o un vettore contenente i valori del polinomio valutato nei punti specificati in `D`. Se `D` è un numero reale, `Q` sarà un numero reale, $\pi_n(D) = Q$. Se `D` è un vettore di punti, `Q` sarà un vettore contenente i valori del polinomio in corrispondenza di ciascun punto in `D`.

L'utilità di `Polival` si manifesta, ad esempio, quando si vuole **valutare l'errore dell'interpolazione**. Anche se il polinomio interpolatore coincide con la funzione nei nodi di interpolazione, in altri punti potrebbe esserci una discrepanza. Valutando il polinomio in punti intermedi (non inclusi nel set di nodi) e confrontando il valore ottenuto con il valore effettivo della funzione (se conosciuta), è possibile stimare l'errore commesso dall'approssimazione polinomiale.

### Errore del Polinomio di Interpolazione

Quando si interpola una funzione $f(x)$ utilizzando un polinomio $\pi_n(x)$ costruito sui nodi $x_0, x_1, \dots, x_n$, è importante analizzare l'errore di interpolazione, definito come la differenza tra la funzione e il polinomio:

$\mathbf{e_n(f(x)) = f(x) - \pi_n(f(x))}$

Se la funzione $f(x)$ è sufficientemente regolare, ovvero se $f$ è continua insieme alle sue derivate fino all'ordine $n+1$ nell'intervallo $I = [\min(x_0, \dots, x_n), \max(x_0, \dots, x_n)]$, allora per ogni $x \in I$, esiste un punto $\alpha(x) \in I$ (che dipende da $x$) tale che l'errore è dato da:

$\mathbf{e_n(f(x)) = \frac{1}{(n+1)!} f^{(n+1)}(\alpha(x)) w_{n+1}(x)}$

dove $f^{(n+1)}(\alpha(x))$ è la derivata di ordine $n+1$ di $f$ valutata nel punto $\alpha(x)$, e $w_{n+1}(x)$ è il polinomio nodale:

$\mathbf{w_{n+1}(x) = \prod_{k=0}^{n} (x - x_k) = (x - x_0)(x - x_1)\dots(x - x_n)}$

Questo risultato è notevole perché fornisce un'espressione esatta per l'errore di interpolazione. Tuttavia, il punto $\alpha(x)$ è generalmente sconosciuto. Questo implica che, per rendere operativa questa formula, spesso si passa a una maggiorazione dell'errore, utilizzando il massimo valore assoluto della derivata $(n+1)$-esima nell'intervallo $I$.

È importante notare che, se $x$ coincide con uno dei nodi di interpolazione $x_i$, allora $w_{n+1}(x_i) = 0$, e di conseguenza l'errore $e_n(f(x_i)) = 0$. Questo conferma che il polinomio interpolatore passa esattamente per i punti dati.
#### References
[[Appunti Mate Num-lez11.pdf]]



2025-03-20 10:39

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## mateNum- Lez12
## Errore del Polinomio di Interpolazione di Lagrange

### Introduzione

Il professore ha ripreso la lezione precedente, spostando l'attenzione dall'approssimazione della soluzione di sistemi di equazioni lineari all'approssimazione di una funzione continua $f$ o di un insieme di dati. In particolare, la discussione è iniziata con la distinzione tra **interpolazione** e **minimi quadrati**, focalizzandosi inizialmente sull'interpolazione.

È stata ricordata l'**esistenza e l'unicità del polinomio di interpolazione di Lagrange**. Successivamente, l'attenzione si è spostata sull'analisi dell'**errore di interpolazione**, introducendo un teorema a riguardo.

### Teorema sull'Errore di Interpolazione

**Teorema:** Sia $f \in C^{n+1}([x_0, x_n])$ e sia $p_n(x)$ il polinomio di interpolazione di Lagrange di grado al più $n$ che interpola $f$ nei nodi $x_0, x_1, \dots, x_n$. Allora, per ogni $x \in [x_0, x_n]$, esiste un punto $\alpha(x) \in (x_0, x_n)$ tale che l'errore di interpolazione è dato da: $$f(x) - p_n(x) = \frac{f^{(n+1)}(\alpha(x))}{(n+1)!} \omega_{n+1}(x)$$ dove $\omega_{n+1}(x)$ è il polinomio di grado $n+1$ definito come: $$\omega_{n+1}(x) = \prod_{k=0}^{n} (x - x_k)$$ Questa stima dell'errore è valida quando si interpola una funzione $f$ e non un semplice insieme di dati. L'ipotesi fondamentale per questo risultato è la regolarità della funzione $f$, che deve essere $C^{n+1}$.

È importante notare che, per definizione di interpolazione, l'errore calcolato in corrispondenza dei nodi $x_i$ è zero, poiché $\omega_{n+1}(x_i) = 0$ per $i = 0, \dots, n$.

### Dimostrazione del Teorema

Per dimostrare il teorema, è stata introdotta una **funzione ausiliaria** della variabile indipendente $t$, chiamata $g(t)$: $$g(t) = f(t) - p_n(t) - W \omega_{n+1}(t)$$ dove $W$ è una costante definita in modo tale che $g(x) = 0$ per un fissato $x \neq x_i$ con $i = 0, \dots, n$. Esplicitamente, scegliendo $W$ come: $$W = \frac{f(x) - p_n(x)}{\omega_{n+1}(x)}$$ si ottiene $g(x) = f(x) - p_n(x) - \frac{f(x) - p_n(x)}{\omega_{n+1}(x)} \omega_{n+1}(x) = 0$.

#### Regolarità della Funzione Ausiliaria $g(t)$

La funzione $g(t)$ è definita sull'intervallo $I_x = [\min(x_0, \dots, x_n, x), \max(x_0, \dots, x_n, x)]$. La regolarità di $g(t)$ dipende dalla regolarità di $f(t)$ e di $p_n(t)$ e $\omega_{n+1}(t)$. Sappiamo che $f \in C^{n+1}(I_x)$, $p_n(t)$ è un polinomio di grado al più $n$ (quindi $C^\infty$), e $\omega_{n+1}(t)$ è un polinomio di grado $n+1$ (anch'esso $C^\infty$)?. Pertanto, $g(t) \in C^{n+1}(I_x)$.

#### Zeri della Funzione Ausiliaria $g(t)$

La funzione $g(t)$ si annulla nei nodi di interpolazione $x_0, x_1, \dots, x_n$ perché $f(x_i) - p_n(x_i) = 0$ (per definizione di interpolazione) e $\omega_{n+1}(x_i) = 0$. Inoltre, per come è stata definita la costante $W$, abbiamo anche $g(x) = 0$. Quindi, $g(t)$ ha almeno $n+2$ zeri distinti in $I_x$.?

#### Applicazione del Teorema di Rolle?

Applicando ripetutamente il **Teorema di Rolle**, possiamo dedurre che:

- $g'(t)$ ha almeno $n+1$ zeri distinti in $I_x$.
- $g''(t)$ ha almeno $n$ zeri distinti in $I_x$.
- ...
- $g^{(n+1)}(t)$ ha almeno $1$ zero in $I_x$. Sia questo zero $\alpha(x)$.

#### Calcolo della Derivata $(n+1)$-esima di $g(t)$

Calcoliamo la derivata $(n+1)$-esima di $g(t)$: $$g^{(n+1)}(t) = \frac{d^{n+1}}{dt^{n+1}} (f(t) - p_n(t) - W \omega_{n+1}(t))$$ Poiché $p_n(t)$ è un polinomio di grado al più $n$, la sua derivata $(n+1)$-esima è zero: $\frac{d^{n+1}}{dt^{n+1}} p_n(t) = 0$. La derivata $(n+1)$-esima di $\omega_{n+1}(t) = (t - x_0)(t - x_1)\cdots(t - x_n)$ è $(n+1)!$. Questo risultato può essere dimostrato per induzione, osservando che la derivata prima è una somma di prodotti di $n$ termini $(t-x_i)$, la derivata seconda sarà una somma di prodotti di $n-1$ termini, e così via. La derivata $n$-esima sarà una somma di termini costanti, e la derivata $(n+1)$-esima sarà una costante data da $(n+1)!$.

Quindi, la derivata $(n+1)$-esima di $g(t)$ è: $$g^{(n+1)}(t) = f^{(n+1)}(t) - 0 - W (n+1)! = f^{(n+1)}(t) - W (n+1)!$$

#### Derivazione della Formula dell'Errore?

Sappiamo che esiste un punto $\alpha(x) \in (x_0, x_n)$ tale che $g^{(n+1)}(\alpha(x)) = 0$. Quindi: $$f^{(n+1)}(\alpha(x)) - W (n+1)! = 0$$ Da cui ricaviamo la costante $W$: $$W = \frac{f^{(n+1)}(\alpha(x))}{(n+1)!}$$ Sostituendo questa espressione di $W$ nella definizione di $W$ data in precedenza: $$\frac{f(x) - p_n(x)}{\omega_{n+1}(x)} = \frac{f^{(n+1)}(\alpha(x))}{(n+1)!}$$ otteniamo la formula per l'errore di interpolazione: $$f(x) - p_n(x) = \frac{f^{(n+1)}(\alpha(x))}{(n+1)!} \omega_{n+1}(x)$$ Questo completa la dimostrazione.

### Osservazione sulla Struttura dell'Errore e Relazione con Taylor

Il professore ha sottolineato come la struttura dell'errore di interpolazione sia simile alla struttura del termine di resto della formula di Taylor. Infatti, entrambe presentano una derivata di ordine $(n+1)$, il fattoriale $(n+1)!$ a denominatore e un termine che dipende dalla distanza dal punto di espansione (nel caso di Taylor) o dai nodi di interpolazione (nel nostro caso, $\omega_{n+1}(x)$ è un polinomio di grado $n+1$ con radici nei nodi). Esiste una dimostrazione di questo risultato che utilizza proprio il teorema di Taylor, anche se quella presentata si basa sul teorema di Rolle.

### Stima dell'Errore: Passaggio alla Norma Infinito

La formula esatta per l'errore contiene $\alpha(x)$, un punto la cui esatta posizione nell'intervallo $[x_0, x_n]$ è generalmente sconosciuta. Per ottenere una stima dell'errore che sia computabile, si passa spesso a considerare una **maggiorazione** utilizzando la **norma infinito**.

La norma infinito di una funzione $h(x)$ su un intervallo $I$ è definita come: $$||h||_{\infty, I} = \max_{x \in I} |h(x)|$$ Applicando la norma infinito all'errore di interpolazione sull'intervallo $I_x = [\min(x_0, \dots, x_n), \max(x_0, \dots, x_n)]$, otteniamo: $$||f - p_n||_{\infty, I_x} = \max_{x \in I_x} |f(x) - p_n(x)| = \max_{x \in I_x} \left| \frac{f^{(n+1)}(\alpha(x))}{(n+1)!} \omega_{n+1}(x) \right|$$ Poiché $\alpha(x) \in (x_0, x_n) \subseteq I_x$, possiamo maggiorare il termine contenente la derivata $(n+1)$-esima: $$||f - p_n||_{\infty, I_x} \leq \frac{1}{(n+1)!} \max_{x \in I_x} |f^{(n+1)}(\alpha(x))| \cdot \max_{x \in I_x} |\omega_{n+1}(x)|$$ $$\Rightarrow ||f - p_n||_{\infty, I_x} \leq \frac{1}{(n+1)!} ||f^{(n+1)}||_{\infty, I_x} \cdot ||\omega_{n+1}||_{\infty, I_x}$$ Questa stima fornisce un controllo dall'alto sull'errore di interpolazione e dipende sia dalla funzione $f$ (attraverso la norma infinito della sua derivata $(n+1)$-esima) che dalla scelta dei nodi di interpolazione (attraverso la norma infinito di $\omega_{n+1}(x)$).

### Caso di Nodi di Interpolazione Uniformi

Consideriamo ora il caso in cui i nodi di interpolazione $x_0, x_1, \dots, x_n$ sono distribuiti **uniformemente** nell'intervallo $[x_0, x_n]$.

#### Definizione di Nodi Uniformi e Passo Costante

Se la distribuzione dei nodi è uniforme, la distanza tra due nodi consecutivi è costante. Definiamo il **passo di discretizzazione** $h$ come: $$h = \frac{x_n - x_0}{n}$$ Il passo $h$ rappresenta l'ampiezza di ciascuno degli $n$ sottointervalli in cui $[x_0, x_n]$ è diviso dai nodi.

#### Espressioni per i Nodi Uniformi

Ci sono due modi equivalenti per esprimere i nodi uniformi:

1. **Ricorsivamente:** $$x_{k+1} = x_k + h, \quad \text{per } k = 0, 1, \dots, n-1$$ dove $x_0$ è il primo nodo.
2. **Direttamente:** $$x_{k} = x_0 + k h, \quad \text{per } k = 0, 1, \dots, n$$

#### Maggiorazione di $||\omega_{n+1}||_{\infty, I_x}$ per Nodi Uniformi

Nel caso di nodi uniformi, si può dimostrare (anche se la dimostrazione non è fornita nel testo) che il massimo del valore assoluto di $\omega_{n+1}(x)$ sull'intervallo $[x_0, x_n]$ può essere maggiorato come: $$||\omega_{n+1}||_{\infty, [x_0, x_n]} \leq \frac{h^{n+1} n!}{4}$$ È importante notare che questa stima non dipende da $x$ grazie all'uniformità del passo.

#### Stima dell'Errore con Nodi Uniformi

Utilizzando la maggiorazione di $||\omega_{n+1}||_{\infty, [x_0, x_n]}$, possiamo riscrivere la stima per la norma infinito dell'errore nel caso di nodi uniformi: $$||f - p_n||_{\infty, [x_0, x_n]} \leq \frac{1}{(n+1)!} ||f^{(n+1)}||_{\infty, [x_0, x_n]} \cdot \frac{h^{n+1} n!}{4}$$ Semplificando il termine con i fattoriali ($(n+1)! = (n+1) \cdot n!$), otteniamo: $$||f - p_n||_{\infty, [x_0, x_n]} \leq \frac{h^{n+1}}{4 (n+1)} ||f^{(n+1)}||_{\infty, [x_0, x_n]}$$ Questa stima sarà utilizzata in seguito.

### Comportamento dell'Errore al Crescere di $n$

Consideriamo ora cosa succede all'errore quando aumentiamo il numero di nodi di interpolazione $n$, mantenendo fisso l'intervallo $[x_0, x_n]$. In questo caso, il passo $h = \frac{x_n - x_0}{n}$ tende a zero quando $n \rightarrow \infty$.

La stima dell'errore con nodi uniformi può essere vista come il prodotto di due "blocchi":

- **Blocco A:** $\frac{h^{n+1}}{4 (n+1)}$ che dipende dalla scelta dei nodi (in particolare dal numero di nodi $n$). Poiché $h \rightarrow 0$ al crescere di $n$, questo blocco tende a zero per $n \rightarrow \infty$.
- **Blocco B:** $||f^{(n+1)}||_{\infty, [x_0, x_n]}$ che dipende dalla funzione $f$ e dalle sue derivate di ordine elevato. Il comportamento di questo blocco al crescere di $n$ dipende fortemente dalla natura della funzione $f$.

Idealmente, ci si aspetterebbe che l'errore tenda a zero quando $n \rightarrow \infty$, poiché un numero maggiore di informazioni sulla funzione dovrebbe portare a un'approssimazione migliore. Tuttavia, questo non è sempre garantito.

Possono verificarsi diversi scenari per il blocco B al tendere di $n$ all'infinito:

- $||f^{(n+1)}||_{\infty, [x_0, x_n]}$ converge a una costante. In questo caso, l'errore complessivo tende a zero perché il blocco A tende a zero.
- $||f^{(n+1)}||_{\infty, [x_0, x_n]}$ tende a zero. Anche in questo caso, l'errore complessivo tende a zero.
- $||f^{(n+1)}||_{\infty, [x_0, x_n]}$ tende a più infinito. In questo caso, il comportamento dell'errore complessivo dipende dalla velocità con cui il blocco A tende a zero rispetto alla velocità con cui il blocco B tende a infinito. Se il blocco A converge a zero più rapidamente di quanto il blocco B diverga, l'errore può ancora tendere a zero. Altrimenti, l'errore può divergere.

### Fenomeno di Runge

Esistono casi in cui, nonostante l'aumento del numero di nodi, l'errore di interpolazione non diminuisce e, anzi, può addirittura aumentare, specialmente agli estremi dell'intervallo. Questo fenomeno è noto come **Fenomeno di Runge**.

Un esempio classico in cui si manifesta il Fenomeno di Runge è la funzione: $$f(x) = \frac{1}{1 + x^2}$$ sull'intervallo $[-5, 5]$. Questa funzione è analitica e apparentemente "ben comportata".

Tuttavia, se si utilizzano nodi di interpolazione uniformi e si aumenta il numero di nodi, il polinomio interpolante $p_n(x)$ converge bene verso $f(x)$ nella parte centrale dell'intervallo $[-5, 5]$, ma agli estremi si sviluppano **oscillazioni spurie** sempre più ampie. Queste oscillazioni non rappresentano il comportamento della funzione originale e peggiorano all'aumentare di $n$, portando a un aumento dell'errore agli estremi.
![[Pasted image 20250320110158.png|300]]
#### Analisi dei Blocchi A e B per la Funzione di Runge

Considerando la funzione di Runge, si osserva il seguente comportamento qualitativo per piccoli valori di $n$:

- **Blocco A** ($\frac{h^{n+1}}{4 (n+1)}$): Diminuisce rapidamente all'aumentare di $n$. Ad esempio, si è visto che l'ordine di grandezza passa da $O(10^1)$ per $n=3$ a $O(10^{-10})$ per $n=21$.
- **Blocco B** ($||f^{(n+1)}||_{\infty, [-5, 5]}$): Aumenta molto rapidamente all'aumentare di $n$. Ad esempio, si è visto che l'ordine di grandezza passa da $O(10^0)$ per $n=3$ a $O(10^{19})$ per $n=21$.

![[Pasted image 20250328172929.png]]

Il prodotto di questi due blocchi determina il comportamento dell'errore. Nel caso della funzione di Runge con nodi uniformi, la crescita del blocco B prevale sulla diminuzione del blocco A per valori di $x$ vicini agli estremi dell'intervallo, causando il fenomeno delle oscillazioni spurie e la mancata convergenza (anzi, la divergenza) del polinomio interpolante verso la funzione $f(x)$ in quelle regioni.

#### Definizione del Fenomeno di Runge

Il **Fenomeno di Runge** è la manifestazione di **oscillazioni spurie** agli estremi del dominio di interpolazione al crescere del numero dei nodi di interpolazione, specialmente quando si utilizzano nodi uniformi.

___

## Nodi di Chebyshev-Gauss-Lobatto e il Fenomeno di Runge

### Il Problema: Oscillazioni nell'Interpolazione con Nodi Equispaziati (Fenomeno di Runge)

Il problema discusso riguarda le **oscillazioni che si verificano quando si approssima una funzione mediante un polinomio interpolante costruito su nodi equispaziati**, specialmente verso i bordi dell'intervallo di interpolazione. Questo fenomeno è noto come **fenomeno di Runge**. Il professore introduce questo problema come motivazione per esplorare strategie di scelta dei nodi di interpolazione più efficaci.

### Una Possibile Soluzione: Nodi Non Uniformi

Una strategia per mitigare il fenomeno di Runge consiste nell'**utilizzare nodi di interpolazione non uniformemente distribuiti sull'intervallo**. L'idea è di addensare i nodi nelle regioni dove la funzione presenta maggiori variazioni o dove le oscillazioni tendono a essere più pronunciate.

### Introduzione ai Nodi di Chebyshev-Gauss-Lobatto (CGL)

Il professore introduce una **famiglia di nodi specifici, noti come nodi di Chebyshev-Gauss-Lobatto (CGL)**. Questi nodi prendono il nome dalle tre persone che hanno contribuito alla loro definizione: **Chebyshev, Gauss e Lobatto**. Vengono anche chiamati **nodi CGL**.

#### Definizione dei Nodi CGL sull'Intervallo di Riferimento $[-1, 1]$

I nodi di Chebyshev-Gauss-Lobatto vengono **definiti inizialmente sull'intervallo di riferimento $[-1, 1]$**. Questi nodi, indicati con $\tilde x_i$, per $i$ che va da $0$ a $n$, sono dati dalla seguente formula:

$$ \tilde x_i = -\cos\left(\frac{\pi i}{n}\right), \quad i = 0, 1, \ldots, n $$

**Definizione:** La formula sopra definisce gli $n+1$ nodi di Chebyshev-Gauss-Lobatto sull'intervallo $[-1, 1]$.

#### Interpretazione Geometrica dei Nodi CGL
![[Pasted image 20250328173526.png|200]]
La costruzione di questi nodi può essere visualizzata considerando la **semicirconferenza unitaria di raggio 1 centrata nell'origine**.

1. Si divide la **mezza circonferenza in $n$ porzioni uguali**.
2. Si considerano i **punti di divisione sulla semicirconferenza**.
3. I **nodi di Chebyshev-Gauss-Lobatto** sull'asse $x$ (l'intervallo $[-1, 1]$) sono le **proiezioni di questi punti sull'asse delle ascisse**.

**Esempio:** Per $n = 8$, la semicirconferenza viene divisa in otto parti uguali. Le proiezioni dei punti di divisione sull'asse $x$ forniscono i nove nodi CGL (per $i = 0, \ldots, 8$).

- Per $i = 0$: $\tilde x_0 = -\cos(0) = -1$.
- Per $i = 1$: $\tilde x_1 = -\cos(\frac{\pi}{8})$.
- ...
- Per $i = 8$: $\tilde x_8 = -\cos(\pi) = -(-1) = 1$.

Come si può notare, i **nodi sono più densi agli estremi dell'intervallo $[-1, 1]$ e meno densi nella parte centrale**. Questo è dovuto alla natura non lineare della proiezione tramite la funzione coseno.

### Mappatura dei Nodi CGL su un Intervallo Generico $[a, b]$ NO 

Poiché l'intervallo di interpolazione di interesse può essere un qualunque intervallo $[a, b]$ della retta reale, è necessario **mappare i nodi CGL definiti su $[-1, 1]$ all'intervallo fisico $[a, b]$**. Questa mappatura viene effettuata utilizzando una **trasformazione lineare**:

$$ x_i = \frac{b + a}{2} + \frac{b - a}{2} \tilde x_i, \quad i = 0, 1, \ldots, n $$

**Dimostrazione della Mappatura:** Verifichiamo che questa mappa trasformi correttamente gli estremi e il punto medio dell'intervallo $[-1, 1]$ negli estremi e nel punto medio dell'intervallo $[a, b]$.

- Se $\tilde x_i = -1$: $$ x_i = \frac{b + a}{2} + \frac{b - a}{2} (-1) = \frac{b + a - b + a}{2} = \frac{2a}{2} = a $$ Quindi, $-1$ viene mappato in $a$.
- Se $\tilde x_i = 1$: $$ x_i = \frac{b + a}{2} + \frac{b - a}{2} (1) = \frac{b + a + b - a}{2} = \frac{2b}{2} = b $$ Quindi, $1$ viene mappato in $b$.
- Se $\tilde x_i = 0$: $$ x_i = \frac{b + a}{2} + \frac{b - a}{2} (0) = \frac{b + a}{2} $$ Quindi, $0$ (il punto medio di $[-1, 1]$) viene mappato in $\frac{b + a}{2}$ (il punto medio di $[a, b]$).

Questa mappatura **trasferisce la distribuzione non uniforme dei nodi dall'intervallo di riferimento $[-1, 1]$ all'intervallo fisico $[a, b]$**, mantenendo la proprietà di maggiore densità agli estremi.

### Effetto dei Nodi CGL sul Fenomeno di Runge
![[Pasted image 20250320110055.png|200]]
Quando si utilizza lo stesso numero di nodi, ma distribuiti secondo la formula dei nodi CGL, per interpolare la funzione $f(x) = \frac{1}{1 + x^2}$, si osserva un comportamento significativamente diverso rispetto all'utilizzo di nodi equispaziati.

- La funzione approssimata **inizia ancora ad oscillare**, ma le **oscillazioni sono più contenute**.
- Le **oscillazioni più grandi si trovano nella parte centrale** dell'intervallo, mentre **diminuiscono man mano che ci si avvicina agli estremi**.

**Teorema (Convergenza con Nodi CGL):** Per $n \to \infty$, l'errore di interpolazione $E_n(f) = |f - p_n|_\infty$, dove $p_n$ è il polinomio interpolante di grado $n$ costruito sui nodi CGL, **tende a $0$ anche per funzioni meno regolari** rispetto a quanto richiesto per la convergenza con nodi uniformi. In particolare, la convergenza si verifica anche se la funzione $f$ è solamente di classe $C^1$. Questo è un risultato notevole, in quanto con nodi uniformi si richiederebbe una regolarità $C^{n+1}$ per garantire la convergenza al crescere di $n$.

### Introduzione ai Nodi di Chebyshev-Gauss (CG)

Il professore introduce anche un'altra famiglia di nodi strettamente legata ai nodi CGL, chiamati **nodi di Chebyshev-Gauss (CG)**. La principale differenza è che **i nodi CG non includono gli estremi dell'intervallo**, ma sono tutti nodi interni.

#### Definizione dei Nodi CG sull'Intervallo di Riferimento $[-1, 1]$

I nodi di Chebyshev-Gauss, indicati con $x_i^*$, per $i$ che va da $0$ a $n$, sull'intervallo $[-1, 1]$ sono definiti come:

$$ x_i^* = -\cos\left(\frac{(2i + 1)\pi}{2(n + 1)}\right), \quad i = 0, 1, \ldots, n $$

**Definizione:** La formula sopra definisce gli $n+1$ nodi di Chebyshev-Gauss sull'intervallo $[-1, 1]$.

**Esempio:** Per $n = 8$, i nodi CG saranno:

- $x_0^* = -\cos\left(\frac{\pi}{18}\right)$
- $x_1^* = -\cos\left(\frac{3\pi}{18}\right)$
- ...
- $x_8^* = -\cos\left(\frac{17\pi}{18}\right)$

Come si può osservare, per $i = 0$, l'argomento del coseno è $\frac{\pi}{2(n+1)} \neq 0$, e per $i = n$, l'argomento è $\frac{(2n+1)\pi}{2(n+1)} = \pi - \frac{\pi}{2(n+1)} \neq \pi$. Di conseguenza, **i nodi $x_0$ e $x_n$ non coincidono con $-1$ e $1$ rispettivamente**, ma sono interni all'intervallo $[-1, 1]$.

Anche i nodi CG possono essere mappati su un intervallo generico $[a, b]$ utilizzando la stessa trasformazione lineare.

**Proprietà dei Nodi CG:** Anche i nodi CG godono di **simili proprietà di convergenza** ai nodi CGL. L'errore di interpolazione tende a zero al crescere di $n$, anche per funzioni con una regolarità minima.

#### Motivazione per l'Uso dei Nodi CG

In alcune applicazioni, può essere **inutile o indesiderabile includere i bordi dell'intervallo nei punti di interpolazione**. Utilizzando i nodi CG, si ottiene un **campionamento più fitto all'interno del dominio**, il che può essere vantaggioso in certi contesti.

### Limiti dei Nodi di Chebyshev (CGL e CG)

Un **limite** di questi approcci basati sui nodi di Chebyshev è che i **punti di interpolazione sono predeterminati** e non possono essere scelti arbitrariamente. Questo può rappresentare un problema quando si ha a che fare con l'**approssimazione di dati sperimentali**, dove i punti di misurazione sono fissati e non necessariamente coincidono con i nodi di Chebyshev. In questi casi, potrebbe essere necessario ricorrere a tecniche di approssimazione diverse dall'interpolazione polinomiale su nodi fissi. Il professore accenna al fatto che questa limitazione motiva la ricerca di approcci differenti per l'approssimazione, specialmente nel contesto dell'approssimazione di dati.

___

## Interpolazione Lineare a Tratti

### Problemi con l'Interpolazione Globale e Nodi Uniformi

Inizialmente, si era partiti con un approccio ottimistico all'interpolazione. Tuttavia, sorgono delle problematiche quando si considerano i dati ottenuti, specialmente se questi non corrispondono esattamente agli istanti desiderati per la misurazione. Se i dati sono già raccolti, è necessario avere la fortuna che questi siano stati campionati esattamente nei nodi scelti, altrimenti non possono essere direttamente utilizzati. Questo vincola la scelta dei nodi, che non possono più essere scelti liberamente.

Utilizzare nodi uniformemente distribuiti si è rivelato problematico. Anche l'intervallo considerato inizialmente piccolo non risolve il problema per intervalli più ampi.

Un altro fattore critico è il **grado del polinomio interpolante**. Con un numero elevato di nodi nell'interpolazione globale, si è portati inevitabilmente a utilizzare polinomi di alto grado. I polinomi di alto grado tendono ad avere un andamento oscillatorio, intersecando l'asse delle ascisse più volte.

### Passaggio all'Interpolazione Polinomiale Locale: L'Interpolazione a Tratti
![[Pasted image 20250320105758.png|590]]
Per superare i limiti dell'interpolazione globale con molti nodi e grado elevato, si introduce l'idea di **interpolazione polinomiale locale**. Invece di considerare tutti i nodi contemporaneamente, li si considera a piccoli gruppi.

La forma più semplice di interpolazione locale consiste nel prendere i nodi a coppie consecutive e interpolare i dati corrispondenti con una retta. Questo porta alla creazione di una **spezzata**, formata da segmenti di retta che connettono i punti dati. Questa tecnica è nota come **interpolazione lineare a tratti**.

**Definizione (Interpolazione Lineare a Tratti):** L'interpolazione lineare a tratti consiste nell'approssimare una funzione $f(x)$ su un intervallo $[x_0, x_n]$ mediante una funzione continua formata da segmenti di retta che interpolano i dati $(x_i, f(x_i))$ in nodi consecutivi $x_i$ e $x_{i+1}$ per $i = 0, 1, \ldots, n-1$.

**Rappresentazione Grafica:** Consideriamo una funzione con alcuni nodi $x_0, x_1, x_2, x_3$.

- **Approssimazione Globale:** Un polinomio di grado 3 che interpola tutti e quattro i nodi potrebbe avere un andamento oscillatorio tra i nodi.
- **Approssimazione a Tratti (Lineare):** Si congiungono i punti $(x_0, f(x_0))$ e $(x_1, f(x_1))$ con una retta, poi $(x_1, f(x_1))$ e $(x_2, f(x_2))$ con un'altra retta, e così via. Questo produce una spezzata che segue l'andamento dei dati in modo più locale.

**Vantaggi dell'Interpolazione a Tratti:**

- Se si infittiscono i dati (si aggiungono più nodi), l'approssimazione migliora. La spezzata si avvicina sempre più alla funzione originale.
- Non si introducono oscillazioni indesiderate tra i nodi, a differenza dei polinomi di alto grado.

Oltre all'interpolazione lineare a tratti, si possono utilizzare anche **interpolazioni quadratiche a tratti** e **cubiche a tratti**, unendo segmenti di parabole o cubiche tra gruppi di nodi. Tuttavia, raramente si utilizzano gradi superiori a 3 per evitare problemi simili al fenomeno di Runge su intervalli più piccoli.

### Formalizzazione dell'Interpolazione Lineare a Tratti

Sia dato un insieme di $n+1$ nodi $x_0 < x_1 < \ldots < x_n$ nell'intervallo $[a, b]$ (dove $a = x_0$ e $b = x_n$). I nodi non devono necessariamente essere uniformemente distribuiti.

Si definisce l'**intervallino** $i$-esimo come $I_i = [x_i, x_{i+1}]$ per $i = 0, 1, \ldots, n-1$.

L'**ampiezza** dell'intervallino $i$-esimo è $h_i = x_{i+1} - x_i$.

L'**ampiezza massima** dei sottointervalli è $h = \max_{i} {h_i}$.

Il polinomio lineare a tratti che interpola la funzione $f(x)$ nei nodi $x_i$ è denotato come $\pi_{1}^hf(x)$.

**Proprietà di $\pi_{1}^hf(x)$:**

1. $\pi_{1}^hf(x)$ è una **funzione continua** sull'intervallo $[x_0, x_n]$.
2. La **restrizione** di $\pi_{1}^hf(x)$ al generico intervallo $I_i = [x_i, x_{i+1}]$ è un **polinomio di grado 1**.
3. $\pi_{1}^hf(x)$ soddisfa le **condizioni di interpolazione**: $P_{1,h}f(x_i) = f(x_i)$ per $i = 0, 1, \ldots, n$.

**Espressione del Polinomio Lineare a Tratti su un Intervallo:**

La restrizione di $\pi_{1}^hf(x)$ all'intervallo $I_i = [x_i, x_{i+1}]$ è la retta che interpola i punti $(x_i, f(x_i))$ e $(x_{i+1}, f(x_{i+1}))$. La sua espressione è data da:

$$ \pi_{1}^hf(x)|_{I_i} = f(x_i) + \frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i} (x - x_i) $$

**Verifica dell'Interpolazione:**

- ?Se $x = x_i$: $$ P_{1,h}f(x_i)|_{I_i} = f(x_i) + \frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i} (x_i - x_i) = f(x_i) + 0 = f(x_i) $$
- Se $x = x_{i+1}$: $$ P_{1,h}f(x_{i+1})|_{I_i} = f(x_i) + \frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i} (x_{i+1} - x_i) = f(x_i) + f(x_{i+1}) - f(x_i) = f(x_{i+1}) $$ L'interpolazione è quindi verificata.

### Errore dell'Interpolazione Lineare a Tratti

Si vuole verificare che, aumentando il numero di nodi (e quindi facendo tendere a zero l'ampiezza massima $h$), l'errore dell'interpolazione lineare a tratti tende a zero.

Consideriamo l'errore sull'intervallino $I_i$: $|f(x) - \pi_{1}^hf(x)|$ per $x \in I_i$. Poiché sull'intervallo $I_i$ si utilizzano solo due nodi (gli estremi), si può riciclare la stima dell'errore per l'interpolazione con due nodi uniformi. In questo caso, $n+1 = 2$, quindi $n=1$. La formula dell'errore per nodi uniformi (non esplicitata nel testo ma richiamata) suggerisce una dipendenza da $h^{n+1} = h^2$ e dalla derivata di ordine $n+1 = 2$ della funzione.

**Stima dell'Errore Locale:**

Assumendo che $f \in C^2([x_0, x_n])$, l'errore sull'intervallino $I_i$ può essere maggiorato come:

$$ \max_{x \in I_i} |f(x) - \pi_{1}^hf(x)| \le \frac{h_i^2}{8} \max_{x \in I_i} |f''(x)| $$ Questa stima si basa sull'errore di interpolazione di Lagrange per due punti.

**Stima dell'Errore Globale:**

Per ottenere una stima dell'errore su tutto l'intervallo $[x_0, x_n]$, si considera il massimo dell'errore locale su tutti gli intervallini:

$$ \max_{x \in [x_0, x_n]} |f(x) - \pi_{1}^hf(x)| = \max_{i} \left( \max_{x \in I_i} |f(x) - \pi_{1}^hf(x)| \right) $$

Utilizzando la stima locale e maggiorando $h_i$ con $h = \max_{i} {h_i}$ e $\max_{x \in I_i} |f''(x)|$ con $\max_{x \in [x_0, x_n]} |f''(x)|$, si ottiene:

$$ \max_{x \in [x_0, x_n]} |f(x) - \pi_{1}^hf(x)| \le \frac{h^2}{8} \max_{x \in [x_0, x_n]} |f''(x)| $$

**Analisi della Convergenza:**

In questa stima dell'errore globale, il termine $\max_{x \in [x_0, x_n]} |f''(x)|$ è una costante (blocco B) che dipende dalla funzione $f$ e dall'intervallo $[x_0, x_n]$. Il termine $h^2$ (blocco A) dipende dall'ampiezza massima degli intervallini.

Al contrario dell'interpolazione globale dove, aumentando il grado del polinomio (e quindi potenzialmente il numero di nodi), il comportamento del termine analogo a B poteva portare a divergenza (fenomeno di Runge), qui il termine $\max |f''(x)|$ rimane costante.

Quando si infittiscono i nodi, l'ampiezza massima $h$ tende a zero. Di conseguenza, anche $h^2$ tende a zero. Pertanto, l'errore dell'interpolazione lineare a tratti:

$$ \lim_{h \to 0} \max_{x \in [x_0, x_n]} |f(x) - \pi_{1}^hf(x)| = 0 $$

Questo dimostra che **l'interpolazione lineare a tratti converge alla funzione $f(x)$ quando il numero di nodi aumenta** (ovvero, quando $h$ diminuisce), a condizione che la funzione $f$ sia sufficientemente regolare ($f \in C^2$). Questo approccio risolve il problema del fenomeno di Runge riscontrato con l'interpolazione globale.

Si può quindi affermare che l'interpolazione lineare a tratti è una **soluzione al fenomeno di Runge**.

Si accenna infine che per approssimazioni più accurate, si possono utilizzare interpolazioni a tratti di grado superiore (quadratiche, cubiche) con nodi scelti in modo intelligente (non necessariamente uniformi), come fa ad esempio MATLAB.
#### References
[[Appunti Mate Num-lez12.pdf]]


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


2025-03-19 15:08

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

