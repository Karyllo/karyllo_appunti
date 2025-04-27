---
title: "matenum-lab02"
---

2025-03-17 10:16

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## matenum-lab02
## Analisi dei Metodi Numerici e Sensibilità alle Perturbazioni

### Ripasso dell'Esercizio Precedente: Matrice di Bucky e Decomposizione LU

L'esercitazione odierna riprende l'ultimo esercizio del laboratorio precedente, focalizzato sull'analisi della **matrice di Bucky**. L'obiettivo era importare questa matrice da una gallery di Matlab, visualizzarne lo **sparsity pattern** e calcolare la sua decomposizione LU per osservare lo sparsity pattern delle matrici $L$ e $U$ risultanti.

- **Importazione e Visualizzazione della Matrice di Bucky**
    
    - La matrice di Bucky viene importata in Matlab utilizzando il comando `B = Bucky`.
    - Lo sparsity pattern viene visualizzato tramite il comando `spy(B)`, che genera un grafico dove i punti indicano la posizione degli elementi non nulli nella matrice. La matrice di Bucky è risultata essere **sparsa**, ovvero con un numero elevato di elementi nulli.
      ![[Pasted image 20250317102405.png|200]]
- **Decomposizione LU della Matrice di Bucky**
    ![[Pasted image 20250317141608.png|300]]
    - È stata calcolata la decomposizione LU della matrice Bucky utilizzando il comando `[L, U, P] = lu(B)`. La matrice $P$ rappresenta la matrice di permutazione dovuta al pivoting.
    - Successivamente, sono stati visualizzati gli sparsity pattern delle matrici $L$, $U$ e $P$ utilizzando il comando `subplot` per mostrarli in un'unica finestra grafica. Il comando `subplot(2, 2, 1)` crea una matrice di grafici 2x2 e posiziona il primo grafico nella prima posizione. Similmente, `subplot(2, 2, 2)` posiziona il secondo grafico.
    - Un'osservazione fondamentale è che, nonostante la matrice originale $B$ fosse sparsa, le matrici $L$ e $U$ ottenute dalla decomposizione LU risultavano essere **molto più dense**, con un numero significativamente maggiore di elementi non nulli. In particolare, il numero di non zeri per $B$ era 180, mentre per $L$ era 451 e per $U$ era 419.
    - Questo fenomeno, per cui le matrici $L$ e $U$ diventano meno sparse della matrice originale $A$ durante la decomposizione LU, è noto come **problema del filling**.
- **Implicazioni Computazionali della Densità**
    
    - Trattare matrici $L$ e $U$ dense comporta un **aumento dei costi computazionali** per la risoluzione del sistema lineare associato. Un maggior numero di elementi non nulli implica un maggior numero di operazioni aritmetiche.
    - Questo può anche portare a un aumento degli **errori di arrotondamento** e influenzare il **condizionamento della matrice**.
- **Conclusione sulla Sparsità e Decomposizione LU**
    
    - Quando si risolve un sistema lineare, è importante considerare la sparsità della matrice.
    - Non è garantito che la decomposizione LU di una matrice sparsa produca matrici $L$ e $U$ altrettanto sparse.

### Laboratorio 1 Addendum: Sistemi Lineari con Matrici Tridiagonali

Il laboratorio prosegue con l'analisi di un sistema lineare $Ax = b$, dove $A$ è una matrice **tridiagonale** di dimensione $1000 \times 1000$. Questa matrice ha elementi non nulli solo sulla diagonale principale (tutti uguali a 2), sulla sovradiagonale (tutti uguali a -1) e sulla sottodiagonale (tutti uguali a -1). Il vettore $b$ è tale che la soluzione esatta $x$ sia un vettore di tutti 1. L'obiettivo è comparare diversi metodi risolutivi.

- **Metodi Risolutivi Considerati**
    
    - **Backslash operator (\)** di Matlab.
    - Decomposizione **LU con pivoting** e successiva risoluzione dei sistemi triangolari con gli algoritmi di **forward substitution** e **backward substitution**. Il costo computazionale di questa operazione è dominato dalla decomposizione LU, che ha un costo di $O(n^3)$. La sostituzione in avanti e all'indietro hanno un costo di $O(n^2)$ ciascuna.
    - Fattorizzazione di **Cholesky** (applicabile a matrici simmetriche definite positive) e successiva risoluzione con forward e backward substitution. La decomposizione di Cholesky di una matrice $A$ produce una matrice triangolare inferiore $L$ tale che $A = LL^T$. Il costo della decomposizione di Cholesky è circa la metà di quello della decomposizione LU, ovvero $O(n^3/3)$.
    - **Algoritmo di Thomas** (specifico per matrici tridiagonali). Questo algoritmo esegue una decomposizione LU specializzata che sfrutta la struttura tridiagonale. Il costo computazionale dell'algoritmo di Thomas è lineare, $O(n)$, precisamente $8n - 7$ operazioni.
- **Costi Computazionali Sintetici**
    
    - **Decomposizione LU con pivoting:** $O(n^3)$
    - **Fattorizzazione di Cholesky:** $O(n^3/3)$ (richiede matrice simmetrica definita positiva)
    - **Algoritmo di Thomas:** $O(n)$ (specifico per matrici tridiagonali)
- **Implementazione in Matlab**
    
    - **Definizione della matrice tridiagonale $A$:** Viene creata sommando tre matrici diagonali: una con 2 sulla diagonale principale (`2*eye(n)`), una con -1 sulla sovradiagonale (`diag(ones(n-1, 1)*-1, 1)`), e una con -1 sulla sottodiagonale (`diag(ones(n-1, 1)*-1, -1)`).
	```matlab
	 clear all
	
	close all
	
	clc
	
	%definiamoo la matrice diagonale come la somma di più matrici
	
	n= 10;
	
	A= 2*eye (n)- diag( ones(n-1,1) ,1) - diag( ones(n-1, 1), -1)
	```
	![[Pasted image 20250317144253.png|300]]
      
    - **Definizione del vettore $b$:** Calcolato come $b = A \times x_{esatta}$, dove $x_{esatta}$ è un vettore colonna di tutti 1 (`ones(n, 1)`).
    - **Risoluzione con backslash:** `X1 = A \ b`.
    clear all

```matlab
close all

clc

%definiamoo la matrice diagonale come la somma di più matrici

n= 1e3;

A= 2*eye (n)- diag( ones(n-1,1) ,1) - diag( ones(n-1, 1), -1);

x_ex = ones (n,1);

b = A * x_ex;

%backslash

display("backlash");

x1= A\b

%LU

display("LU fw bw");

[L,U,P]= lu(A);

y = fwsub(L,P*b);

x2= bksub (U,y)

%chol

display("cholesky");

L= chol(A);

y = fwsub(L,b);

x3= bwsub (L',y)

%thomas

display("thomas");

[Lt,Ut,x4]= thomas(A,b);

x4
```
    
- **Risoluzione con LU:**
        - `[L, U, P] = lu(A)`.
        - `y = forward_sub(L, P*b)`. (Correzione: il termine noto deve essere moltiplicato per la matrice di permutazione $P$)
        - `X2 = backward_sub(U, y)`.
    - **Risoluzione con Cholesky:**
        - `LC = chol(A, 'lower')`. (È importante specificare `'lower'` per ottenere una matrice triangolare inferiore $L$ tale che $A = LL^T$, coerentemente con la notazione usata a lezione).
        - `y = forward_sub(LC, b)`.
        - `X3 = LC' \ y`. (Equivalente a risolvere $L^T x = y$).
    - **Risoluzione con Thomas:** Viene richiamata una funzione `thas` (implementata precedentemente) che esegue l'algoritmo di Thomas.
    - **Misurazione del tempo:** I comandi `tic` e `toc` vengono utilizzati per misurare il tempo di esecuzione di ciascun metodo risolutivo.
    - **Verifica della definita positività:** Gli autovalori della matrice $A$ vengono calcolati con `eig(A)` e verificati essere tutti positivi per poter applicare il metodo di Cholesky.
    - **Sparsity pattern di $L$ (da LU):** Viene visualizzato lo sparsity pattern della matrice $L$ ottenuta dalla decomposizione LU (`spy(L)`) e si osserva che in questo caso specifico rimane sparsa, a differenza dell'esempio della matrice di Bucky.

### Laboratorio 2: Sensibilità della Soluzione alle Perturbazioni

Questo laboratorio introduce il concetto di **sensibilità della soluzione di un sistema lineare rispetto a perturbazioni nei dati** (matrice $A$ e termine noto $b$). Anche con metodi risolutivi accurati, piccole perturbazioni nei dati di input possono portare a grandi variazioni nella soluzione $x$.

- **Il Problema delle Perturbazioni**
    
    - Idealmente, si vorrebbe risolvere $Ax = b$.
    - Nella pratica, a causa di errori di misurazione o di arrotondamento, si lavora con una matrice perturbata $A + \delta A$ e un termine noto perturbato $b + \delta b$, ottenendo una soluzione perturbata $x + \delta x$. Si risolve quindi $(A + \delta A)(x + \delta x) = b + \delta b$.
    - L'obiettivo è capire come le **perturbazioni sui dati** ($\delta A$, $\delta b$) si propagano e influenzano la **perturbazione sulla soluzione** ($\delta x$).
- **Analisi della Perturbazione sul Termine Noto**
    
    - Considerando inizialmente solo una perturbazione sul termine noto ($\delta A = 0$), si ha $A(x + \delta x) = b + \delta b$.
    - Sottraendo $Ax = b$, si ottiene $A \delta x = \delta b$, quindi $\delta x = A^{-1} \delta b$.
    - Utilizzando le norme vettoriali e matriciali, si può derivare una relazione tra la **perturbazione relativa sulla soluzione** ($\frac{||\delta x||}{||x||}$) e la **perturbazione relativa sul termine noto** ($\frac{||\delta b||}{||b||}$).
- **Numero di Condizionamento**
    
    - La relazione derivata è: $\frac{||\delta x||_p}{||x||_p} \le \kappa_P(A) \frac{||\delta b||_p}{||b||_p}$, dove $\kappa_P(A) = ||A||_P ||A^{-1}||_P$ è il **numero di condizionamento della matrice $A$ in norma $P$**.
    - Il numero di condizionamento $\kappa_P(A)$ **amplifica** la perturbazione relativa sul termine noto per dare un limite superiore alla perturbazione relativa sulla soluzione.
    - Un **numero di condizionamento vicino a 1** indica una matrice **ben condizionata**, dove piccole perturbazioni nei dati portano a piccole perturbazioni nella soluzione.
    - Un **numero di condizionamento molto grande** indica una matrice **mal condizionata**, dove piccole perturbazioni nei dati possono portare a grandi perturbazioni nella soluzione, rendendo il problema **sensibile alle fluttuazioni**.
    - Il numero di condizionamento è una **proprietà intrinseca della matrice $A$** e non dipende dal metodo risolutivo utilizzato.
- **Relazione con il Residuo**
    
    - Un'altra stima per l'errore relativo è data in termini del **residuo normalizzato** ($\frac{||b - A\hat{x}||}{||b||}$, dove $\hat{x}$ è la soluzione calcolata): $\frac{||x - \hat{x}||}{||x||} \le \kappa_P(A) \frac{||b - A\hat{x}||}{||b||}$.
    - Questa relazione mostra che anche se il residuo è piccolo, l'errore relativo può essere grande se il numero di condizionamento è elevato. **Un piccolo residuo non implica necessariamente una soluzione accurata per matrici mal condizionate**.
- **comandi matlab**
	- invece della definizione usiamo `cond (A,p)` con p la norma p 
	- `condest(A)`
- **Esercizio sulla Matrice di Hilbert**
    
    - L'esercizio consiste nello studiare il condizionamento della **matrice di Hilbert** di diverse dimensioni (da 1 a 10). La matrice di Hilbert di dimensione $n$ ha elementi $H_{ij} = \frac{1}{i+j-1}$.
    - Per ogni dimensione $n$, viene calcolato il **numero di condizionamento** utilizzando il comando `cond(H)` in Matlab (che calcola il condizionamento in norma 2).
    - Viene risolto il sistema lineare $Hx = b$ (dove $b$ è tale che la soluzione esatta $x$ sia un vettore di tutti 1) utilizzando il backslash operator.
    - Vengono calcolati l'**errore relativo** della soluzione e il **residuo normalizzato**.
    - I risultati (numero di condizionamento, errore relativo, residuo normalizzato) vengono visualizzati in un **grafico semilogaritmico** (scala logaritmica sull'asse y) in funzione della dimensione della matrice.
- **Osservazioni sull'Esercizio della Matrice di Hilbert**
    
    - Il grafico del **numero di condizionamento** in scala semilogaritmica appare come una **retta**, suggerendo che il condizionamento della matrice di Hilbert **cresce esponenzialmente** con la dimensione $n$. Se $y = e^{\alpha n}$, allora $\log(y) = \alpha n$, che è l'equazione di una retta in funzione di $n$.
    - Il **residuo normalizzato** rimane **molto piccolo** (intorno a $10^{-15}$), suggerendo apparentemente una buona soluzione.
    - Tuttavia, l'**errore relativo** **cresce rapidamente** con la dimensione della matrice, raggiungendo valori significativi. Questo dimostra che un piccolo residuo non garantisce una piccola errore per matrici mal condizionate.
    - La **stima dell'errore** basata sul numero di condizionamento e sul residuo normalizzato ($\kappa(A) \frac{||r||}{||b||}$) fornisce un **limite superiore all'errore relativo** e segue l'andamento del numero di condizionamento, rimanendo sempre maggiore o uguale all'errore effettivo (a meno di problemi con il calcolo del logaritmo di valori vicini a zero).

In conclusione, il numero di condizionamento è un indicatore cruciale della stabilità della soluzione di un sistema lineare rispetto a perturbazioni nei dati. Matrici con un elevato numero di condizionamento (mal condizionate) possono portare a soluzioni inaccurate anche con piccoli errori nei dati o residui piccoli. La matrice di Hilbert è un classico esempio di matrice mal condizionata.

#### References



