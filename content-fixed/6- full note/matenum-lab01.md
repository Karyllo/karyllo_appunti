---
title: matenum lab01
description: Appunto automatico
---

2025-03-17 10:17

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## matenum-lab01
Perfetto, ecco la trascrizione con le formule in formato MathJax utilizzando sia `$$` per le equazioni centrate che `$` per le equazioni inline:

---

### Sistemi di Equazioni Lineari

#### Introduzione
- **Obiettivo**: Risolvere sistemi di equazioni lineari del tipo

$$
A \mathbf{x} = \mathbf{b}
$$

dove $A$ è una matrice $n \times n$ e $\mathbf{b}$ è un vettore colonna dei termini noti.
- **Scopo**: Trovare il vettore incognita $\mathbf{x}$.

#### Metodi di Risoluzione
- **Metodi diretti**: Utilizzati in questa lezione.
- **Metodi iterativi**: Non trattati in questa lezione.

#### Fattorizzazione LU
- **Definizione**: Trasformare la matrice $A$ nel prodotto $LU$, dove $L$ è una matrice triangolare inferiore e $U$ è una matrice triangolare superiore.
- **Utilità**: Permette di risolvere il sistema $A \mathbf{x} = \mathbf{b}$ trasformandolo in due sistemi più semplici:
  1. $L \mathbf{y} = \mathbf{b}$
  2. $U \mathbf{x} = \mathbf{y}$

#### Condizioni per l'Esistenza Unica della Fattorizzazione LU
- **Condizione necessaria e sufficiente**: I determinanti delle sottomatrici principali di $A$ devono essere non nulli per ogni $i$ da 1 a $n-1$.
- **Condizioni sufficienti**:
  - $A$ è a dominanza diagonale stretta per righe o colonne.
  - $A$ è simmetrica definita positiva (tutti gli autovalori sono strettamente maggiori di 0).

### Algoritmi di Sostituzione

#### Sostituzione in Avanti
- **Utilizzo**: Risolvere sistemi del tipo $L \mathbf{y} = \mathbf{b}$.
- **Procedura**:
  1. Calcolare $y_1$ come

  $$
  y_1 = \frac{b_1}{l_{11}}
  $$

  1. Per $i$ da 2 a $n$, calcolare $y_i$ come:

  $$
  y_i = \frac{1}{l_{ii}} \left( b_i - \sum_{j=1}^{i-1} l_{ij} y_j \right)
  $$

#### Sostituzione all'Indietro
- **Utilizzo**: Risolvere sistemi del tipo $U \mathbf{x} = \mathbf{y}$.
- **Procedura**:
  1. Calcolare $x_n$ come

  $$
  x_n = \frac{y_n}{u_{nn}}
  $$

  1. Per $i$ da $n-1$ a 1, calcolare $x_i$ come:

  $$
  x_i = \frac{1}{u_{ii}} \left( y_i - \sum_{j=i+1}^{n} u_{ij} x_j \right)
  $$

### Implementazione in MATLAB

#### Comandi Iniziali
- **Inizializzazione**: Utilizzare `clear all`, `close all`, `clc` per pulire l'ambiente di lavoro.

#### Esempio di Matrice

![[Pasted image 20250317084250.png]]
```matlab
close all

clc

clear all

A = [50, 1, 3;

	1, 6, 0;

	3, 0, 1];

[L,U,P] = lu(A)
```
- **Definizione**: Creare una matrice $A$ simmetrica e diagonalmente dominante.
- **Fattorizzazione LU**: Utilizzare il comando `[L, U, P] = lu(A)` per ottenere le matrici $L$, $U$ e la matrice di permutazione $P$.
![[Pasted image 20250317084558.png|300]]



#### Visualizzazione delle Matrici
- **Comando `spy`**: Visualizzare lo sparsity pattern delle matrici per verificare la struttura triangolare.

```matlab
%per vedere se è il pattern di sparsità

spy (L)
```

![[Pasted image 20250317084822.png|300]]
#### Pivoting
- **Necessità**: Se la fattorizzazione LU richiede pivoting, utilizzare la matrice $P$ per risolvere il sistema $PA \mathbf{x} = P \mathbf{b}$.
```matlab
close all

clc

clear all

%adesso mettiamo 0 nella prima colonna (rendendo la fattorizzazione non unica)

% e non mettiamo P nella fattorizzazione

A = [0, 1, 3;

	1, 6, 0;

	3, 0, 1];

[L,U] = lu(A);

%per vedere se è il pattern di sparsità

spy (L);
```
![[Pasted image 20250317085332.png|300]]
- stiamo visualizzando PL quindi male male 
### Codice MATLAB per Sostituzione in Avanti e all'Indietro

#### Sostituzione in Avanti
- **Funzione**: Implementare la sostituzione in avanti in una funzione MATLAB.
- **Passaggi**:
  1. Inizializzare il vettore soluzione $\mathbf{x}$ come un vettore di zeri.
  2. Implementare il ciclo per calcolare $y_i$ utilizzando la formula della sostituzione in avanti.

```matlab
function x=fwsub(A,b)

% function [x] = fwsub(A,b)

% Algoritmo di sostituzione in avanti

% A: matrice quadrata triangolare inferiore

% b: termine noto

% x: soluzione del sistema Ax=b

n=length(b);

if (size(A,1)~=n) || (size(A,2)~=n)

error('ERRORE: dimensioni incompatibili')

end

if ~isequal(A,tril(A))

error('ERRORE: matrice non triangolare inferiore')

end

if prod(diag(A)) == 0

% almeno un elemento diagonale nullo

error('ERRORE: matrice singolare')

end

%una dichiarazione delle variabili, che ci permette di avere controllo

%sulla dimensione

x = zeros(n,1);

x(1) = b(1)/A(1,1);

for i= 2:1:n

x(i) = (b(i)- A(i,1:1:i-1)* x(1:1:i-1))/A(i,i);

end
```

#### Sostituzione all'Indietro
- **Funzione**: Implementare la sostituzione all'indietro in una funzione MATLAB.
- **Passaggi**:
  1. Implementare il ciclo per calcolare $x_i$ utilizzando la formula della sostituzione all'indietro.

- _1. d)  Supponiamo ora di voler risolvere il sistema Ax = b con A denita in (1). Si utilizzi come termine noto b un vettore tale che la soluzione esatta del sistema sia xex = $[1, 1, 1]^T$ . Si calcoli la soluzione del sistema Ax = b, utilizzando le funzioni bksub.m e fwsub.m._
```matlab
close all

clc

clear all

%adesso mettiamo 0 nella prima colonna (rendendo la fattorizzazione non unica)

% e non mettiamo P nella fattorizzazione

A = [50, 1, 3;

1, 6, 0;

3, 0, 1];

x_ex = ones (3,1);

b= A*x_ex;

[L,U,P]=lu(A);

y=fwsub(L,b);

x_a= bksub(U,y);

x_a
```
![[Pasted image 20250317101219.png]]
### Conclusione
- **Esercizi**: Completare gli esercizi forniti utilizzando i concetti e i codici discussi durante la lezione.
- **Suggerimenti**: Prestare attenzione agli indici e alla numerazione delle matrici in MATLAB, che parte da 1.


#### References



