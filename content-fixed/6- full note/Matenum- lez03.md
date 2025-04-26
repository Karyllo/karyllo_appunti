---
title: Matenum  lez03
description: Appunto automatico
---

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