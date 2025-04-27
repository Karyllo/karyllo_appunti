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



