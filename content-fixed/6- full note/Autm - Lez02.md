---
title: Autm   Lez02
description: Appunto automatico
---

2025-02-26 16:16

_Status: #flashcard_zero  #riscritto_finito   #revisione_finita 

_Tags:  [[sbobine]]   [[automatica]]

## Autm - Lez02


### Sistemi Dinamici Lineari: Movimento, Traiettoria ed Equilibrio

#### Struttura di Base dei Sistemi Dinamici
- ![[Pasted image 20250227153133.png]]
I sistemi dinamici considerati sono descritti attraverso un modello matematico strutturato in due equazioni:

- **Equazione di stato**: descrive il legame causa-effetto tra variabili d'ingresso $u(t)$ e variabili di stato $x(t)$.
- **Equazione di uscita**: descrive il legame causa-effetto tra lo stato $x(t)$ e la variabile di uscita $y(t)$.

#### Equazioni di Stato e di Uscita

Esiste una differenza sostanziale tra l'equazione di stato e l'equazione di uscita:

- **Equazione di stato**: è un'equazione dinamica (differenziale o alle differenze).
    - **Tempo continuo**: $\dot{x}(t) = f(x(t), u(t))$.
    - **Tempo discreto**: $x(t+1) = f(x(t), u(t))$.
- **Equazione di uscita**: è una funzione algebrica.
    - $y(t) = g(x(t), u(t))$.
    - Se l'equazione di uscita dipende esplicitamente dall'ingresso, il sistema è detto **improprio**.
    - ![[Pasted image 20250227153309.png]]

#### Generalità sui Sistemi Dinamici

La trattazione si concentra su una classe specifica di sistemi dinamici, rilevante per le applicazioni in diversi campi (elettromeccanica, termodinamica, chimica, scienze sociali, economia, biologia).

#### Tempo nei Sistemi Dinamici

- **Tempo continuo**: $t \in \mathbb{R}, t \geq 0$.
- **Tempo discreto**: $t = {0, 1, 2, ...}, t \in \mathbb{N}$.

Lo studio di un sistema dinamico inizia convenzionalmente all'istante $t=0$.

#### Struttura di Ingresso, Stato e Uscita
![[Pasted image 20250227153655.png]]
- **Ingresso**: $u(t) \in \mathbb{R}^m$ (in generale un vettore).
- **Uscita**: $y(t) \in \mathbb{R}^p$ (in generale un vettore).
- La maggior parte del corso è dedicata a sistemi **SISO** (Single Input, Single Output), dove $m = p = 1$.
- **Stato**: $x(t) \in \mathbb{R}^n$, dove $n$ è l'ordine del sistema, ovvero il numero di variabili di stato.

### Problema al Valore Iniziale (o di Cauchy)

#### Equazioni Differenziali

L'equazione differenziale è un'equazione la cui incognita è una funzione $x(t)$. Per risolverla, è necessario specificare l'ingresso $u(t)$ e lo stato iniziale $x(0)$.

#### Teoria delle Equazioni Differenziali

La teoria del problema al valore iniziale afferma che, se si specificano lo **stato iniziale** $x(0)$ e l'ingresso $u(t)$ e se $f$ è sufficientemente regolare, allora l'evoluzione $x(t)$ è definita univocamente per $t \geq 0$.

#### Regolarità di f

Per garantire l'**esistenza e l'unicità** della soluzione, $f$ deve essere sufficientemente regolare. Nei sistemi lineari, $f$ è lineare e quindi $C^\infty$ (derivabile infinite volte), il che soddisfa ampiamente i requisiti di regolarità.

#### Conseguenza

Se $x(t)$ è definita univocamente, anche $y(t)$ lo è, dato che $y$ è funzione di $x$.

### Sistemi Dinamici Lineari

#### Definizione

Un sistema dinamico è lineare se l'equazione di stato e l'equazione di uscita sono lineari, ovvero se sono funzioni lineari dei loro argomenti.

#### Linearità dell'Equazione di Stato

Se lo stato è un vettore, l'equazione di stato è un insieme di $n$ equazioni scalari:

- $\dot{x}_i(t) = f_i(x(t), u(t))$ per $i = 1, ..., n$.

La linearità implica che ogni $f_i$ può essere scritta come combinazione lineare dei suoi argomenti:

- $$\dot{x}_1(t) = a_{11}x_1(t) + a_{12}x_2(t) + ... + a_{1n}x_n(t) + b_1u(t)$$
- $$\dot{x}_2(t) = a_{21}x_1(t) + \cdots + a_{2n}x_n(t) + b_2u(t)$$
- $$\dot{x}_n(t) = a_{n1}x_1(t) + \cdots + a_{nn}x_n(t) + b_nu(t)$$

#### Linearità dell'Equazione di Uscita

Anche l'equazione di uscita deve essere lineare:

- $y(t) = c_1x_1(t) + ... + c_nx_n(t) + du(t)$

#### Rappresentazione Matriciale Compatta
![[Pasted image 20250227154850.png]]
Le equazioni lineari possono essere scritte in forma matriciale:

- $\dot{x}(t) = Ax(t) + Bu(t)$
- $y(t) = Cx(t) + Du(t)$

Dove:

- $A$ è la matrice di stato ($n \times n$).
- $B$ è il vettore di ingresso ($n \times 1$).
- $C$ è il vettore di uscita ($1 \times n$).
- $D$ è uno scalare ($1 \times 1$).

La conoscenza delle matrici $A, B, C, D$ definisce completamente il modello del sistema lineare.

#### Sistemi Proprio e Improprio

Un sistema è improprio se nell'equazione di uscita compare esplicitamente l'ingresso. Questo dipende dal coefficiente $D$:

- Se $D \neq 0$: sistema improprio.
- Se $D = 0$: sistema proprio.

#### Esempio 1: Vasca da Bagno (Tempo Continuo)
![[Pasted image 20250227155233.png]]
- **Variabile di stato**: volume d'acqua nella vasca $x(t)$.
- **Ingresso**: portata entrante $u(t)$.
- **Uscita**: deflusso $y(t) = Kx(t)$.
- **Equazione di stato**: $\dot{x}(t) = u(t) - Kx(t)$.
- **Matrici**: $A = -K$, $B = 1$, $C = K$, $D = 0$.

#### Esempio 2: Circuito Elettrico (Tempo Continuo)

- **Variabili di stato**: corrente nell'induttore $x_1(t)$ e tensione sul condensatore $x_2(t)$.
- **Ingresso**: corrente del generatore $u(t)$.
- **Uscita**: tensione sul resistore $y(t) = Rx_1(t)$.
- **Equazioni di stato**:
    - $$\dot{x}_1(t) = \frac{1}{L}x_2(t) - \frac{R}{L}x_1(t)$$
    - $$\dot{x}_2(t) = \frac{1}{C}u(t) - \frac{1}{C}x_1(t)$$
- **Matrici**:
    - $$A = \begin{bmatrix} -\frac{R}{L} & \frac{1}{L} \\ -\frac{1}{C} & 0 \end{bmatrix}$$
    - $$B = \begin{bmatrix} 0 \\ \frac{1}{C} \end{bmatrix}$$
    - $C = \begin{bmatrix} R & 0 \end{bmatrix}$
    - $D = 0$
    - ![[Pasted image 20250227155457.png]]

#### Sistemi a Tempo Discreto

L'equazione di stato è espressa come:

- $x(t+1) = Ax(t) + Bu(t)$
- ${x}_1(t+1) = a_{11}x_1(t) + a_{12}x_2(t) + ... + a_{1n}x_n(t) + b_1u(t)$

#### Esempio 1: Conto Corrente (Tempo Discreto)

- **Variabile di stato**: capitale disponibile $x(t)$.
- **Ingresso**: versamento $u(t)$.
- **Equazione di stato**: $x(t+1) = (1+r)x(t) + u(t)$.
- **Uscita**: capitale depositato $y(t) = x(t)$.
- **Matrici**: $A = 1+r$, $B = 1$, $C = 1$, $D = 0$.
	- D=0 sistema proprio 

#### Esempio 2: Modello Demografico (Tempo Discreto)

- **Variabili di stato**: numero di allievi in prima, seconda e terza media ($x_1(t), x_2(t), x_3(t)$).
- **Ingresso**: nuovi ingressi in prima media $u(t)$.
- **Equazioni di stato**:
    - $x_1(t+1) = \beta_1 x_1(t) + u(t)$
    - $x_2(t+1) = \alpha_1 x_1(t) + \beta_2 x_2(t)$
    - $x_3(t+1) = \alpha_2 x_2(t) + \beta_3 x_3(t)$
- **Uscita**: popolazione complessiva $y(t) = x_1(t) + x_2(t) + x_3(t)$.
- **Matrici**:
    - $A = \begin{bmatrix} \beta_1 & 0 & 0 \\ \alpha_1 & \beta_2 & 0 \\ 0 & \alpha_2 & \beta_3 \end{bmatrix}$
    - $B = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$
    - $C = \begin{bmatrix} 1 & 1 & 1 \end{bmatrix}$
    - $D = 0$

### Concetti di Movimento, Traiettoria ed Equilibrio

#### Oggetto di Studio

Sistemi lineari a tempo continuo e discreto:

- **Tempo continuo**: $\dot{x}(t) = Ax(t) + Bu(t)$
- **Tempo discreto**: $x(t+1) = Ax(t) + Bu(t)$

#### Movimento

Il movimento di un sistema dinamico è sinonimo di soluzione dell'equazione differenziale o alle differenze. Se si definiscono lo stato iniziale $x(0)$ e l'ingresso $u(t), \ \ t  \geq 0$, allora la soluzione $x(t)$ è univocamente determinata.

#### Rappresentazione Geometrica del Movimento
![[Pasted image 20250227161413.png]]
- Conoscere la soluzione significa conoscere come evolvono nel tempo tutte le variabili di stato $x_1(t), x_2(t), ..., x_n(t)$.
- In un sistema di ordine due, il movimento può essere rappresentato come una curva nello spazio tridimensionale (tempo, $x_1$, $x_2$).
- 

#### Traiettoria

La traiettoria è la proiezione del movimento nello spazio di stato $\mathbb{R}^n$.

#### Traiettoria a Tempo Continuo
![[Pasted image 20250227161502.png]]
- È una curva nello spazio di stato.
- È orientata nel senso del tempo crescente.
traiettoria in $\mathbb{R}^3$
![[Pasted image 20250227162636.png]]

#### Traiettoria a Tempo Discreto
![[Pasted image 20250227161621.png]]
- È una successione di punti nello spazio di stato ordinati con l'indice tempo.
- Gli stati visitati dal sistema sono solo i punti della successione.


#### **la traiettoria e Biunivocità**
La discussione sulla biunivocità nel contesto dei sistemi dinamici riguarda la corrispondenza tra i punti della traiettoria e gli istanti di tempo. In particolare, ci si chiede se ogni punto della traiettoria corrisponde a un solo istante di tempo oppure se lo stesso punto può essere visitato in istanti diversi.

Il professore introduce il problema con un esempio di una traiettoria che si interseca:

- Si parte da un punto iniziale all'istante $t=0$.
- La traiettoria evolve nel tempo.
- Ad un certo punto $t_1$, la traiettoria passa per un punto nello spazio di stato.
- Successivamente, ad un tempo $t_2 > t_1$, la traiettoria ripassa per lo stesso punto.
- ![[Pasted image 20250227162223.png]]

Questo viola la biunivocità, perché lo stesso punto corrisponde a due istanti di tempo diversi.

La **tangente alla traiettoria** in un punto $x$ è data da $\dot{x} = f(x, u)$, o nel caso lineare da $\dot{x} = Ax + Bu$.

L'anomalia si verifica quando la traiettoria passa due volte per lo stesso punto $x$ con tangenti diverse.

- Se l'ingresso $u$ è costante nel tempo, allora il vettore tangente deve essere lo stesso ogni volta che la traiettoria passa per quel punto. Quindi, **se l'ingresso è costante, non è possibile che la traiettoria si auto-intersechi**.
- Se l'ingresso $u$ non è costante, è possibile che la traiettoria si auto-intersechi, perché il vettore tangente può essere diverso in tempi diversi.

In sintesi, **la biunivocità tra punti della traiettoria e istanti di tempo è violata quando il sistema è pilotato da un ingresso non costante**.

Il vettore tangente $\dot{x}$ è dotato di direzione e modulo. La direzione e il verso del vettore tangente definiscono la tangente geometrica, mentre il modulo determina la velocità con cui il punto percorre la traiettoria.

#### Tangente alla Traiettoria

In un sistema a tempo continuo, il vettore tangente alla traiettoria in un punto $x$ è dato da $\dot{x} = f(x, u)$ (o $\dot{x} = Ax + Bu$ nel caso lineare). Il modulo del vettore tangente indica la velocità con cui il punto percorre la traiettoria.

#### Equilibrio

#### Definizione

Dato un sistema con ingresso costante $u(t) = \bar{u}$, uno stato $\bar{x}$ è di equilibrio se, partendo da $x(0) = \bar{x}$, si ha $x(t) = \bar{x}$ per ogni $t \geq 0$.
![[Pasted image 20250227163642.png]]
traiettoria:
![[Pasted image 20250227163710.png]]

#### Significato Applicativo

Il regime stazionario (o all'equilibrio) è di grande importanza applicativa, poiché molti sistemi funzionano cercando di mantenere le variabili costanti nel tempo.

#### Ricerca degli Equilibri (Tempo Continuo)

Data l'equazione di stato $\dot{x}(t) = Ax(t) + B\bar{u}$, per trovare gli stati di equilibrio si impone $\dot{x}(t) = 0$.
 $$Ax(t) + B\bar{u}=0$$ $$Ax(t)= - B\bar{u}$$ 

#### Caso 1: Matrice A Invertibile

Se $\det(A) \neq 0$, esiste un unico stato di equilibrio:

- $\bar{x} = -A^{-1}B\bar{u}$
- cambiando u, cambia anche x segnato 

#### Caso 2: Matrice A Singolare

Se $\det(A) = 0$, possono esistere:

- Infiniti stati di equilibrio.
- Nessuno stato di equilibrio.

#### Autovalori e Singolarità

Il determinante di $A$ è zero se e solo se esiste almeno un autovalore di $A$ uguale a zero. (matrice semidefinita )

#### Uscita all'Equilibrio

Se il sistema è all'equilibrio, anche l'uscita è costante. L'uscita di equilibrio è data da:

- $\bar{y} = C\bar{x} + D\bar{u}$
- Nel caso di esistenza e unicità dell'equilibrio: $\bar{y} = (-CA^{-1}B + D)\bar{u}$

#### Guadagno del Sistema

Il guadagno del sistema è definito come $\mu = -CA^{-1}B + D$, tale che $\bar{y} = \mu\bar{u}$.

#### Esempio: Vasca da Bagno (Guadagno)

All'equilibrio, la portata entrante deve essere uguale a quella uscente, quindi il guadagno deve essere 1.

#### Verifica

- $$\dot{x} = \bar{u} - Kx = 0 \Rightarrow \bar{x} = \frac{\bar{u}}{K}$$
- $$y = Kx \Rightarrow \bar{y} = K\frac{\bar{u}}{K} = \bar{u}$$
- Quindi $\mu = 1$

### Condizione di equilibrio a tempo discreto

In un sistema a tempo discreto, definito come $x(t+1) = Ax(t) + Bu(t)$, la condizione di equilibrio si verifica quando lo stato all'istante $t+1$ è uguale allo stato all'istante $t$, cioè $x(t+1) = x(t)$. Questo implica che, una volta raggiunto l'equilibrio, il sistema permane in tale stato a meno di perturbazioni esterne.

### Equazione per la ricerca dell'equilibrio

Sotto l'ipotesi di ingresso costante $u(t) = \bar{u}$, la condizione di equilibrio porta all'equazione $(I - A)x = B\bar{u}$, dove $I$ è la matrice identità.

### Analisi della matrice (I - A) e autovalori

La risolubilità dell'equazione $(I - A)x = B\bar{u}$ dipende dalle proprietà della matrice $(I - A)$. In particolare, il determinante di $(I - A)$ gioca un ruolo cruciale.

- **Caso 1: $(I - A)$ è invertibile**
    
    Se il determinante di $(I - A)$ è diverso da zero, la matrice è invertibile e esiste un'unica soluzione per $x$, data da $\bar{x} = (I - A)^{-1}B\bar{u}$. Questo implica che il sistema ha un solo stato di equilibrio.
    
- **Caso 2: $(I - A)$ è singolare**
    
    Se il determinante di $(I - A)$ è uguale a zero, la matrice è singolare e possono verificarsi due scenari:
    
    - Esistono infinite soluzioni, il che implica infiniti stati di equilibrio.
    - Non esistono soluzioni, il che implica l'assenza di stati di equilibrio.

### Connessione con gli autovalori

Per determinare se la matrice $(I - A)$ è singolare, si può analizzare lo spettro della matrice $A$, ovvero l'insieme dei suoi autovalori. **Il determinante di $(I - A)$ è zero se e solo se almeno un autovalore di $A$ è uguale a 1**.
### Ricerca degli Equilibri a Tempo Discreto

Per i sistemi a tempo discreto, la procedura per trovare gli equilibri differisce leggermente rispetto al caso a tempo continuo. Consideriamo un sistema a tempo discreto descritto dalla seguente equazione di stato:

$\qquad x(t+1) = Ax(t) + Bu(t)$

**Ipotesi Fondamentale**: Si assume che l'ingresso sia costante nel tempo, cioè $u(t) = \bar{u}$ per ogni $t \geq 0$.

#### Condizione di Equilibrio

A differenza del caso continuo, dove si impone l'azzeramento delle derivate, nel caso discreto si impone che lo stato all'istante $t+1$ sia uguale allo stato all'istante $t$:

$\qquad x(t+1) = x(t)$

Questo significa che, se il sistema è in equilibrio, il valore dello stato non cambia nel tempo. In altre parole, se il sistema si trova in un certo stato $x$ e si applica un ingresso costante $\bar{u}$, il sistema rimarrà in quello stato anche all'istante successivo.

#### Risoluzione dell'Equazione di Equilibrio

Sostituendo la condizione di equilibrio nell'equazione di stato, otteniamo:

$\qquad x = Ax + B\bar{u}$

Risolvendo per $x$, si ottiene l'equazione che definisce gli stati di equilibrio:

$\qquad (I - A)x = B\bar{u}$

Dove $I$ è la matrice identità.

#### Analisi delle Soluzioni

La natura delle soluzioni di questa equazione dipende dalle proprietà della matrice $(I - A)$. In particolare:

- **Caso 1: Matrice $(I - A)$ Invertibile**: Se la matrice $(I - A)$ è invertibile, esiste un'unica soluzione per $x$, che rappresenta l'unico stato di equilibrio:
    
    $\qquad \bar{x} = (I - A)^{-1}B\bar{u}$
    
- **Caso 2: Matrice $(I - A)$ Singolare**: Se la matrice $(I - A)$ è singolare, possono verificarsi due situazioni:
    
    - Esistono **infinite soluzioni**, il che significa che ci sono infiniti stati di equilibrio.
    - **Non esistono soluzioni**, il che significa che non ci sono stati di equilibrio.

La determinazione del caso specifico richiede un'analisi più approfondita della matrice e del vettore $B\bar{u}$.

#### Uscita all'Equilibrio

Anche nel caso a tempo discreto, se il sistema è all'equilibrio, anche l'uscita sarà costante. L'equazione di uscita è data da:

$\qquad y(t) = Cx(t) + Du(t)$

All'equilibrio, l'uscita diventa:

$\qquad \bar{y} = C\bar{x} + D\bar{u}$

Sostituendo l'espressione di $\bar{x}$ (nel caso di esistenza e unicità), si può ottenere una relazione tra l'uscita e l'ingresso all'equilibrio.

- $\bar{y} = C(I - A)^{-1}B\bar{u} + D\bar{u}$

Raccogliendo $\bar{u}$:

- $\bar{y} = [C(I - A)^{-1}B + D]\bar{u}$

Questa è la relazione tra l'uscita e l'ingresso all'equilibrio. Il termine $[C(I - A)^{-1}B + D]$ rappresenta il guadagno del sistema $\mu$, per cui:

- $\bar{y} = \mu \bar{u}$

dove:

- $\mu = C(I - A)^{-1}B + D$

**Il guadagno $\mu$ esprime il rapporto tra l'uscita e l'ingresso all'equilibrio e dipende esclusivamente dalle matrici del sistema ($A, B, C, D$)**.

___


#### References



