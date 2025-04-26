---
title: Autm   Lez01
description: Appunto automatico
---

tags: [[automatica]] [[sbobine]]
stato: #revisione_finita #flashcard_finite  #riscritto_finito
### Introduzione ai Sistemi Dinamici

I **sistemi dinamici** sono l'argomento centrale del corso. L'obiettivo è comprenderli gradualmente attraverso esempi e concetti introduttivi.

### Definizione di Segnale

Prima di studiare i sistemi dinamici, è essenziale definire il concetto di **segnale**, dato che un sistema dinamico è un modello matematico che descrive le relazioni tra più segnali.

#### Cos'è un Segnale?

Un segnale è definito come **"una funzione del tempo"**, rappresentata genericamente come ( V(t) ), dove ( t ) è la variabile indipendente che indica il tempo.

#### Tempo Continuo vs. Tempo Discreto

È fondamentale distinguere tra tempo continuo e tempo discreto:

- **Tempo Continuo**: ( t ) appartiene all'insieme dei numeri reali $t \in \mathbb{R}$. 
- **Tempo Discreto**: ( t ) appartiene all'insieme dei numeri interi non negativi (solitamente i numeri naturali,  $t \in \mathbb{N}$, ovvero ( 0, 1, 2, ... )).

#### Segnali a Tempo Continuo

![[Pasted image 20250213183229.png]]

Un segnale a tempo continuo è definito su una variabile temporale reale e può essere rappresentato graficamente su un piano cartesiano con il tempo ( t ) sull'asse orizzontale e il segnale ( V(t) ) sull'asse verticale.

**Esempi**:

- Registrazione continua della temperatura tramite un sensore.
- Misurazione della velocità di una macchina di Formula 1 durante un giro.
- Qualsiasi problema di fisica che coinvolge posizione, velocità e accelerazione di corpi in movimento.

#### Segnali a Tempo Discreto

![[Pasted image 20250213183259.png]]

Un segnale a tempo discreto è definito solo in istanti discreti ed è rappresentato da una successione di valori.

**Esempi**:

- Numero di immatricolazioni in ingegneria per ogni anno accademico.
- Valore dell'indice FTSE MIB alla chiusura della borsa di Milano alle ore 13.

#### Segnali Campionati

![[Pasted image 20250213183427.png]]
Un segnale campionato è un segnale a tempo continuo misurato a intervalli discreti.

**Esempio**:

- Temperatura rilevata da un sensore meteorologico inviata ogni due ore.

**Importanza**:

- I computer elaborano solo segnali a tempo discreto, rendendo necessario il campionamento dei segnali continui per l'elaborazione digitale.

### Sistemi Dinamici

![[Pasted image 20250213183518.png]]
Un sistema dinamico stabilisce una **"relazione causa-effetto tra due segnali"**.

- **Segnale di Ingresso**  $U(t)$ : La "causa" che influenza il sistema.
- **Segnale di Uscita** $Y(t)$ : L'"effetto", ovvero la risposta del sistema all'ingresso.

#### Cosa Non è un Sistema Dinamico (o algebrico)?

Alcune relazioni causa-effetto sono troppo semplici per essere considerate sistemi dinamici.

**Esempi di sistemi non dinamici**:

![[Pasted image 20250213184438.png]]

- **Resistore**: La tensione ( V(t) ) ai capi di un resistore è data dalla legge di Ohm: $$ V(t) = R \cdot I(t) $$ dove ( R ) è la resistenza e ( I(t) ) è la corrente. Questa relazione è istantanea: conoscendo ( I(t) ), si determina immediatamente ( V(t) ).
- **Rubinetto**: La posizione del rubinetto ( U(t) ) determina istantaneamente la portata d'acqua in uscita ( Y(t) ).

#### Esempi di Sistemi Dinamici

- **Vasca da Bagno**: La portata d'acqua entrante ( U(t) ) influisce sul volume d'acqua nella vasca ( Y(t) ), ma la relazione non è istantanea. Il volume dipende dalla storia precedente (quanta acqua è stata fatta entrare, se la vasca era piena o vuota all'inizio).

- **Condensatore**: La relazione tra tensione ( V(t) ) e corrente ( I(t) ) in un condensatore è data da: $$ C \cdot \frac{dV(t)}{dt} = I(t) $$ dove ( C ) è la capacità del condensatore. Questa è una relazione differenziale, non istantanea.

### Stato del Sistema

![[Pasted image 20250213184853.png]]
Per rappresentare fenomeni più complessi, è necessario introdurre una terza variabile: lo **stato del sistema** $X(t)$.

- **Equazione di Stato**: Descrive come lo stato evolve nel tempo.
- **Equazione di Uscita**: Descrive come l'uscita dipende dallo stato.

#### Struttura Generale

Un sistema dinamico può essere descritto dalle seguenti equazioni:

- **Equazione di Stato**: $$ \dot{x}(t) = f(x(t), u(t)) $$ dove $\dot{x}(t)$ è la derivata dello stato rispetto al tempo, x(t) è lo stato del sistema e ( u(t) ) è l'ingresso.
- **Equazione di Uscita**: $$ y(t) = g(x(t)) $$ dove ( y(t) ) è l'uscita del sistema. 

- struttura generale
$$\begin{cases} \dot{x}(t) = f(x(t), u(t)) \\ y(t) = g(x(t)) \end{cases}$$Questa struttura è valida per sistemi a tempo continuo, dove esiste la derivata rispetto al tempo.

#### Esempio: Serbatoio d'Acqua

![[Pasted image 20250217084409.png]]

Si consideri un serbatoio con una portata d'acqua entrante ( U(t) ) e un deflusso proporzionale all'altezza ( h(t) ) dell'acqua.

- **Variabile di Ingresso**: Portata d'acqua entrante ( U(t) ) (metri cubi al secondo).
- **Variabile di Uscita**: Portata d'acqua uscente ( Y(t) ).
- **Variabile di Stato**: Volume d'acqua nella vasca ( V(t) ).
- **Deflusso**: Il deflusso supponiamo sia proporzionale all'altezza: $$ Q_{uscita} = K \cdot h(t) $$ dove ( K ) è una costante.
- **Relazione Geometrica**: Il volume è dato da: $$ V(t) = S \cdot h(t) $$ dove ( S ) è l'area della sezione della vasca.

**Equazione di Stato**:

La variazione del volume nel tempo è data dal bilancio delle portate entranti e uscenti: $$ \dot{x}(t) = U(t) - K \cdot h(t) $$ Sostituendo $h(t)$ con  $X(t) / S$ (in modo da esplicitare la variabile di stato e l'ingresso): $$ \dot{x}(t) = U(t) - \frac{K}{S} \cdot V(t) $$ **Equazione di Uscita**:

L'uscita è il deflusso, quindi (ricordiamo che deve essere in funzione della variabile di stato): $$ Y(t) = K \cdot h(t) = \frac{K}{S} \cdot V(t) $$ **Ordine del Sistema**:

In questo caso, l'ordine del sistema è 1, perché è sufficiente una sola variabile di stato per descriverlo.
ordine del sistema: n=1

#### Esempio: Rete Elettrica

![[Pasted image 20250217085602.png]]
Considera una rete elettrica con un generatore di corrente, un resistore, un condensatore e un induttore.

- **Componenti**:
    - Generatore di corrente $U(t)$.
    - Resistore  R  con $V(t) = R \cdot I(t)$ .
    - Condensatore ( C ) con  $C \cdot \frac{dV(t)}{dt} = I(t)$.
    - Induttore ( L ) con  $L \cdot \frac{dI(t)}{dt} = V(t)$ .
- **Leggi di Kirchhoff**: La somma delle correnti entranti in un nodo è uguale alla somma delle correnti uscenti; la somma delle tensioni in una maglia è zero.

**Variabili**:

- **Ingresso**: Corrente del generatore ( U(t) ).
- **Uscita**: Tensione sul resistore ( Y(t) ).
- **Variabili di Stato**: Corrente nell'induttore  $X_1(t)$ e tensione sul condensatore  $X_2(t)$.
![[Pasted image 20250217085722.png]]

**Equazioni di Stato**:

Sono necessarie due equazioni, una per ogni variabile di stato: $$ \dot{X_1}(t) = \frac{1}{L} \cdot (X_2(t) - R \cdot X_1(t)) $$
	con $(X_2(t) - R \cdot X_1(t))$ la legge di Kirchhoff alla maglia 

$$ \dot{X_2}(t) = \frac{1}{C} \cdot (U(t) - X_1(t)) $$

**Equazione di Uscita**:

L'uscita è la tensione sul resistore: $$ Y(t) = R \cdot X_1(t) $$ **Ordine del Sistema**:

L'ordine del sistema è 2, perché ci sono due variabili di stato.

### Sistemi a Tempo Discreto

Nei sistemi a tempo discreto, non esiste l'operatore differenziale, quindi l'equazione di stato non può essere un'equazione differenziale, ma un'equazione alle differenze.

#### Struttura Generale

- **Equazione di Stato**: $$ X(t+1) = f(X(t), U(t)) $$ dove ( X(t+1) ) è il valore dello stato al prossimo istante di tempo, ( X(t) ) è lo stato attuale e ( U(t) ) è l'ingresso.
- **Equazione di Uscita**: $$ Y(t) = g(X(t)) $$ dove ( Y(t) ) è l'uscita del sistema.

#### Esempio: Conto Corrente

![[Pasted image 20250217091049.png]]
- **Variabile di Stato**: Capitale sul conto ( X(t) ).
- **Variabile di Ingresso**: Versamento annuale ( U(t) ).

**Equazione di Stato**:

Il capitale all'anno successivo è dato dal capitale attuale più gli interessi e il versamento: $$ X(t+1) = X(t) + r \cdot X(t) + U(t) $$ dove ( r ) è il tasso di interesse.

**Equazione di Uscita**:

L'uscita può essere il capitale sul conto: $$ Y(t) = X(t) $$ Oppure, in alternativa, il flusso di interessi generato ogni anno (dipende dalla scelta del tutto facoltativa): $$ Y(t) = r \cdot X(t) $$

#### Esempio: Modello Compartimentale di una Scuola Media

Questo esempio descrive l'evoluzione degli allievi in una scuola media suddivisi in tre classi (prima, seconda e terza media).

- va subito esplicitato qual è la discretizzazione (t=1)
- **Sistema Compartimentale**: Un sistema che descrive un insieme di individui divisi tra categorie (compartimenti) e tra istanti di tempo ci sono dei flussi di individui che passano da un compartimento e l'altro.
- **Variabili di Stato**: Numero di allievi in prima media $X_1(t)$ , in seconda media  $X_2(t)$  e in terza media  $X_3(t)$ .
- **Ingresso**: Nuovi iscritti in prima media all'anno t+1 ( U(t) ).
- **Coefficienti**: Frazione di promossi $\alpha_i$, bocciati  $\beta_i$  e abbandoni $\gamma_i$  per ogni classe $i$ , con $\alpha_i + \beta_i + \gamma_i = 1$ .
- ![[Pasted image 20250217091951.png]]
**Equazioni di Stato**:

Descrivono come cambia il numero di allievi in ogni classe da un anno all'altro: $$\begin{cases} X_1(t+1) = \beta_1 \cdot X_1(t) + U(t) \\  X_2(t+1) = \alpha_1 \cdot X_1(t) + \beta_2 \cdot X_2(t) \\ X_3(t+1) = \alpha_2 \cdot X_2(t) + \beta_3 \cdot X_3(t)  \end{cases}$$
**Equazioni di Uscita**:

L'uscita può rappresentare diverse quantità, a seconda dell'interesse:

- Totale degli allievi: $$ Y(t) = X_1(t) + X_2(t) + X_3(t) $$
- Allievi che terminano il ciclo scolastico con successo: $$ Y(t) = \alpha_3 \cdot X_3(t) $$
- Allievi che abbandonano la scuola: $$ Y(t) = \gamma_1 \cdot X_1(t) + \gamma_2 \cdot X_2(t) + \gamma_3 \cdot X_3(t) $$

### Struttura Generale dei Modelli

La struttura generale dei modelli lega ingresso, stato e uscita attraverso due equazioni: l'equazione di stato e l'equazione di uscita . Questa struttura non è la più ampia e generale possibile, ma è quella più tipica quando si descrivono modelli derivanti dalla fisica .
- ![[Pasted image 20250217093118.png]]

- **Vettore di Stato**:  $X(t)$  è un vettore n-dimensionale, dove n è l'ordine del sistema .
- **Vettore di Ingresso**:  $U(t)$  è un vettore m-dimensionale, dove m è il numero di ingressi .
- **Vettore di Uscita**:  $Y(t)$ è un vettore p-dimensionale, dove p è il numero di uscite .
	- ![[Pasted image 20250217093206.png]]
Nel corso, ci si limiterà quasi sempre ai sistemi **SISO (Single Input, Single Output)**, ovvero con un solo ingresso e una sola uscita, l'opposto sarà il **MIMO** (multi input, multi Output) . Tuttavia, sarà inevitabile considerare sistemi con variabili di stato in numero maggiore di 1 .