---
title: "meccanica-lez03"
---

2025-02-28 13:08

_Status: #flashcard_zero  #riscritto_zero  #revisione_finita 

_Tags:   [[sbobine]]   [[meccanica razionale]]

## meccanica-lez03

### Legge di Distribuzione delle Velocità

La legge di distribuzione delle velocità è un **teorema fondamentale nella cinematica del corpo rigido**. Essa fornisce una condizione necessaria e sufficiente affinché un sistema generico di $n$ punti materiali sia in moto rigido. Essere in moto rigido significa che il vincolo di rigidità è rispettato. La condizione è espressa come segue:

$V_P = V_Q + \omega \times (P - Q)$

dove:

- $V_P$ è la velocità del punto $P$
- $V_Q$ è la velocità del punto $Q$
- $\omega$ è la velocità angolare
- $P$ e $Q$ sono punti appartenenti al sistema rigido

Questa condizione deve valere per ogni coppia di punti $P$ e $Q$ nel sistema.

#### Dimostrazione

La dimostrazione si articola in due parti: condizione necessaria e condizione sufficiente. ^ne6477

##### Condizione Necessaria

Si considera il corpo rigido $S$, e si assume che il vincolo di rigidità sia soddisfatto per ipotesi. Si considera il vettore $P - Q$ e la sua derivata rispetto al tempo:

$\frac{d}{dt}(P - Q) = V_P - V_Q$

Poiché $P - Q$ è un vettore solidale al corpo rigido, la sua derivata rispetto al tempo è data da:

$\frac{d}{dt}(P - Q) = \omega \times (P - Q)$

Quindi, la condizione necessaria è:

$V_P - V_Q = \omega \times (P - Q)$

##### Condizione Sufficiente

Si assume che valga la legge di distribuzione delle velocità (LDV ) e si vuole dimostrare che il vincolo di rigidità è soddisfatto. Questo significa che la distanza tra due punti qualsiasi $P$ e $Q$ del sistema deve rimanere costante nel tempo:

$|P - Q| = \text{costante}$

Un modo equivalente per esprimere questa condizione è che la derivata rispetto al tempo del modulo di $P - Q$ sia uguale a zero:

$\frac{d}{dt}|P - Q| = 0$

Per semplificare la dimostrazione, si considera la derivata rispetto al tempo del modulo quadro di $P - Q$:

$\frac{d}{dt}|P - Q|^2 = 2 |P - Q| \frac{d}{dt}|P - Q|$

Per $P \neq Q$, la derivata rispetto al tempo di $|P - Q|^2$ è uguale a zero se e solo se la derivata del modulo $|P - Q|$è zero.

Si utilizza la relazione:

$|P - Q|^2 = (P - Q) \cdot {(P - Q) = (P - Q)}^2$ 
- (ricalco che non è uguale il modulo di un vettore al vettore stesso)

Quindi, si calcola la derivata rispetto al tempo di $(P - Q) \cdot (P - Q)$:

$\frac{d}{dt}[(P - Q) \cdot (P - Q)] = 2 (P - Q) \cdot \frac{d}{dt}(P - Q)$

$= 2 (P - Q) \cdot (V_P - V_Q)$

- *NON SI PUO USARE POISSON* (ancora), non sappiamo se è un corpo rigido.

Utilizzando la legge di distribuzione delle velocità (valida per ipotesi), si sostituisce $V_P - V_Q$ con $\omega \times (P - Q)$:

$= 2 (P - Q) \cdot [\omega \times (P - Q)]$

Il prodotto scalare tra $P - Q$ e un vettore $\omega \times (P - Q)$ che è, per definizione del prodotto vettoriale, ortogonale a $P - Q$ è zero. Quindi:

$2 (P - Q) \cdot [\omega \times (P - Q)] = 0$

Questo dimostra che la derivata rispetto al tempo di $|P - Q|^2$ è zero, e quindi il vincolo di rigidità è soddisfatto. ^y5dikm

### Legge di Distribuzione delle Accelerazioni

La legge di distribuzione delle accelerazioni si ricava derivando rispetto al tempo la legge di distribuzione delle velocità:

$a_P = a_Q + \dot{\omega} \times (P - Q) + \omega \times [\omega \times (P - Q)]$
$\forall P,Q \in \mathcal{B} \ \ \text{e} \ \forall t$
dove:

- $a_P$ è l'accelerazione del punto $P$
- $a_Q$ è l'accelerazione del punto $Q$
- $\dot{\omega}$ è la derivata temporale della velocità angolare $\omega$

#### Derivazione

Si parte dalla legge di distribuzione delle velocità:

$V_P = V_Q + \Omega \times (P - Q)$

Si deriva rispetto al tempo:

$a_P = \frac{d}{dt}V_P = \frac{d}{dt}[V_Q + \omega \times (P - Q)]$


$a_P = a_Q + \dot{\omega} \times (P - Q) + \omega \times \frac{d}{dt}(P - Q)$

essendo $P - Q$ un vettore solidale $\frac{d}{dt}(P - Q) = \omega \times (P - Q)$, si ottiene:

$a_P = a_Q + \dot{\omega} \times (P - Q) + \omega \times [\omega \times (P - Q)]$

### Spostamento

Lo spostamento infinitesimo $dP$ è dato da:

$dP = dQ + \gamma \times (P - Q)$

dove $\gamma = \omega dt$.

infatti
$\frac{dP}{dt} = \frac{dP}{dt} + \underline{\omega} \wedge (P - Q)$ e """"moltiplichiamo per dt"""""

### Moto di un Corpo Rigido: Descrizione Generale

Assegnare il moto di un corpo rigido $T$, visto come un sistema di $n$ punti materiali con vincolo di rigidità, è univocamente determinato se sono note le posizioni dei punti $P_i(t)$ appartenenti al corpo in funzione del tempo per $i = 1, \dots, n$. 
Per definire completamente il moto di un corpo rigido nello spazio tridimensionale, sono necessari **sei gradi di libertà (GDL)**:

- **3 GDL traslazionali**, legati all'origine: $X_A(t)$, $Y_A(t)$, $Z_A(t)$.
- **3 GDL rotazionali**, rappresentati dagli angoli di Eulero: $\theta(t)$, $\psi(t)$, $\varphi(t)$.

___

### ==Moto Traslatorio

#### Definizione

Nel moto traslatorio, ogni direzione solidale al corpo mantiene un'orientazione invariante rispetto agli assi fissi. In altre parole, **qualsiasi retta "conficcata" nel corpo rigido non cambia la sua orientazione rispetto al sistema di riferimento fisso** mentre il corpo si muove.
- "moto di B tale se ogni direzione solidale a $\mathcal{B}$ mantiene orientazione invariante rispetto agli assi fissi => gli assi solidali hanno orientazione invariante"

#### Condizione Necessaria e Sufficiente

Un corpo è in moto traslatorio se e solo se la sua velocità angolare ($\omega$) è uguale a zero. $$ \omega = 0 $$ Questo implica che gli angoli di Eulero rimangono costanti.

#### Teorema

Dati $\underline{\dot{e_i}}$ versori invarianti, allora $\underline{\dot{e_i}} = 0$ per ogni $i$ da 1 a 3, dove $e_i$ sono i versori degli assi solidali allora $$\qquad \underline{\omega} = \frac{1}{2}\sum_{i=1}^{3} \underline{e_i} \times \dot{\underline{e_i}}=0$$

Viceversa, $\omega=0$ implica $\dot{\underline{e_i}}= \omega \wedge \underline{e_i}=0$.

#### Gradi di Libertà

Il moto roto-traslatorio ha 3 gradi di libertà: tre traslazionali e uno rotazionale
i **3 GDL traslazionali** $X_A(t)$, $Y_A(t)$, $Z_A(t)$

##### Aspettativa ingenua vs. Realtà

L'aspettativa più comune è che il moto traslatorio sia rettilineo, ovvero lungo una linea retta. Tuttavia, la definizione rigorosa permette anche moti traslatori non rettilinei.

 #### Esempi

- **Moto traslatorio rettilineo:** Una lamina rettangolare vincolata a traslare lungo una direzione X. In questo caso, gli assi solidali alla lamina non cambiano orientazione mentre la lamina si sposta.
	- ![[Pasted image 20250228124236.png]]
- **Moto traslatorio non rettilineo:** Un'asta (AB) in un sistema di tre aste collegate tramite cerniere. L'asta AB trasla, ma il suo moto non è rettilineo. Gli assi solidali all'asta rimangono sempre orizzontali, mantenendo l'orientazione invariante rispetto agli assi fissi.
	- ![[Pasted image 20250228124534.png]]
- **Ruota panoramica:** Il seggiolino di una ruota panoramica, se ben costruito, si muove di moto traslatorio. Gli assi solidali al seggiolino mantengono un'orientazione invariante mentre la ruota gira (trascurando il vasculamento). ^ssqjiw
	- ![[Pasted image 20250228124737.png]]

### Moto Roto-Traslatorio

#### Definizione

Un corpo $\mathcal{B}$ è in moto roto-traslatorio se esiste una direzione privilegiata solidale al corpo che mantiene un'orientazione invariante rispetto agli assi fissi. 
Questa è una condizione meno restrittiva rispetto al moto traslatorio.

#### Direzione Privilegiata

La direzione privilegiata è una retta "conficcata" nel corpo rigido che mantiene la sua orientazione rispetto al sistema di riferimento fisso.

#### teorema

Un corpo è in moto rotatorio se e solo se la velocità angolare ($\omega$) ha direzione costante. In questo caso, la direzione di $\omega$ coincide con la direzione privilegiata.

#### dimostrazione

Sia $\underline k$ un versore solidale alla direzione invariante
Allora $\underline {\dot k}=0$ 
vale Poisson: $\underline {\dot k}= \underline\omega \wedge \underline k = 0$, il che implica che $\omega$ è parallelo a $k$.

se viceversa $\underline\omega=\omega \wedge \underline k$ ha direzione invariante
allora $\underline {\dot k}= \underline\omega \wedge \underline k = 0$
 

#### Descrizione Matematica
![[Pasted image 20250228125813.png]]
Assumiamo che $\underline\omega = \omega k$, dove $k$ è la direzione privilegiata, e scegliamo $\underline k =\underline K$ (cioè, allineiamo gli assi z). Le coordinate $X_A(t)$, $Y_A(t)$ e $Z_A(t)$ descrivono i gradi di libertà traslazionali. 
![[Pasted image 20250228125911.png]]
L'angolo $\theta$ descrive il grado di libertà rotazionale. I versori $i$ e $j$ possono essere scritti in funzione dei versori $I$ e $J$ come: $$ \underline i = \cos(\theta){\underline I} + \sin(\theta){\underline J} $$ $$ \underline j = -\sin(\theta){\underline I} + \cos(\theta){\underline J} $$
- NOTA BENE: un buon angolo di rotazione va dalla direzione invariante X a quella solidale x
$$\frac{d\underline{i}}{dt} = -\dot{\theta} \sin\theta \underline{I} + \dot{\theta} \cos\theta \underline{J} = \dot{\theta} \underline{j}$$
$$
\frac{d\underline{j}}{dt} = -\dot{\theta} \cos\theta \underline{I} - \dot{\theta} \sin\theta \underline{J} = -\dot{\theta} \underline{i}
$$
La velocità angolare $\omega$ è data da: $$ \omega = \dot{\theta} k $$
infatti perché vale 
$$\dot{\underline{i}} = \underline{\omega} \wedge \underline{i} = \dot{\theta} \underline{k} \wedge \underline{i} = \dot{\theta} \underline{j}$$
$$\dot{\underline{j}} = \underline{\omega} \wedge \underline{j} = \dot{\theta} \underline{k} \wedge \underline{j} = - \dot{\theta} \underline{i}$$
#### Gradi di Libertà

Il moto roto-traslatorio ha quattro gradi di libertà: tre traslazionali e uno rotazionale.
- **3 GDL traslazionali** $X_A(t)$, $Y_A(t)$, $Z_A(t)$.
- **1 GDL rotazionale** $\theta(t)$ ^4r6afl

### Moto Rigido Piano

#### Definizione

Il moto rigido piano si verifica quando esiste un piano solidale $\pi$ al corpo rigido $\mathcal{B}$ che si mantiene sempre parallelo e a distanza costante da un piano invariante fisso $\pi^*$ è chiamato piano direttore.
#### Caratteristiche
![[Pasted image 20250228132056.png]]
- **Direzione Invariante:** L'asse perpendicolare al piano solidale è una direzione invariante. Quindi $\hat{k}$ piccolo coincide con $\hat{K}$ grande.
- **Gradi di Libertà:** In questo caso, ci sono solo **tre gradi di libertà**: $x_A$, $y_A$ e $\theta$, dove $\theta$ è l'angolo di rotazione attorno all'asse $z$. La coordinata $z_A$ è costante e non rappresenta un grado di libertà.
- **Corpo Rigido Piano:** Un corpo rigido pianoa $\mathcal{B}_{\pi}$ è un corpo rigido i cui punti sono tutti contenuti in un piano e si muovono in quel piano stesso. Esempi includono aste, aste curve, lamine di varia forma, purché contenute nel piano.
	- ![[Pasted image 20250228132740.png]]

#### Descrizione Matematica

Nel moto rigido piano, l'asse $z$ è perpendicolare al piano del moto e coincide con la direzione invariante. La velocità angolare $\omega$ è data da:

$\qquad \underline\omega = \dot{\theta} \hat{\underline k}$

dove $\theta$ è l'angolo di rotazione nel piano.

#### Regole per la Costruzione di $\omega$

A seconda dell'orientazione dell'asse $z$, si possono avere diverse convenzioni per il segno di $\omega$:

- **Asse $z$ uscente (antiorario):** $\omega = \dot{\theta} , \hat{k}$
- **Asse $z$ entrante (orario):** $\omega = -\dot{\theta} , \hat{k}$

Queste convenzioni derivano dalla relazione tra l'angolo $\theta$ e un altro angolo $\phi$, dove $\phi = \frac{\pi}{2} - \theta$, quindi $\dot{\phi} = -\dot{\theta}$. ^f7dnzl

#### References



