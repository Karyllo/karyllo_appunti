---
title: prob lez05
description: Appunto automatico
---

2025-02-25 13:16

_Status: #flashcard_zero  #riscritto_zero  #revisione_finita  

_Tags:  [[probabilità]]   [[sbobine]]
## prob-lez05

### Boreliani e Algebra

- Quando si definiscono i Boreliani, è necessario includere esplicitamente l'**insieme vuoto** per assicurarsi che sia un'algebra.
- Se $M$ va da 1 a $M$, con $B_i$ appartenente a vari intervallini e semirette, si deve considerare anche il caso in cui $m = 0$, dove per convenzione l'insieme è vuoto.
- Questo è importante per la chiarezza e per garantire che la definizione soddisfi le proprietà di un'algebra.

### Misura di Lebesgue

- La misura di Lebesgue su $\mathbb{R}$ e i suoi Boreliani è tale che la misura di un intervallo chiuso $[a, b]$ è uguale a $b - a$.
- Questa definizione si estende in modo analogo ai cubotti in dimensioni superiori.

### Sigma Algebra e Traccia

- Data una sigma algebra $\mathcal{F}$ definita su un insieme $\Omega$, si consideri un insieme $\Delta \in \mathcal{F}$.
    ![[Pasted image 20250225162149.png]]
- Si definisce la traccia della sigma algebra $\mathcal{F}$ su $\Delta$ come:
    
    $\qquad \mathcal{F}_\Delta = \set{A \cap \Delta : A \in \mathcal{F}}$
	- ![[Pasted image 20250225162259.png]]
    
- In altre parole, si prendono tutti gli insiemi $A$ in $\mathcal{F}$ e si fa l'intersezione con $\Delta$.
    
- **Affermazione**: $\mathcal{F}_\Delta$ è una sigma algebra.
    

#### Esempi Importanti

1. **Intervallo **: Sia $\Delta =[0,1]$ e $\Omega = \mathbb{R}$. Si può prendere $\mathcal{F}$ come i Boreliani di $\mathbb{R}$ 
2. oppure la restrizione dei Boreliani a |0,1|, che viene chiamata Boreliani di |0,1|.
	- ==controlla==
    - I Boreliani ![[Pasted image 20250225162537.png]] di  sono ottenuti prendendo un qualunque elemento misurabile rispetto ai Boreliani di $\mathbb{R}$ e facendo l'intersezione con .
3. **Numeri Positivi**: Analogamente, si può fare la stessa cosa con i numeri positivi $\mathbb{R}^+$ per ottenere i Boreliani di $\mathbb{R}^+$.

### Probabilità Condizionali

- Si riprende l'argomento delle probabilità condizionali.
    
- In uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, la probabilità condizionale di $A$ dato $B$, con $P(B) > 0$, è definita come:
    
    $\qquad P(A|B) = \frac{P(A \cap B)}{P(B)}$ se P(B)>0
    
- **Importante**: $P(A|B)$ è una funzione di due eventi, non è la probabilità di un evento "A dato B". Si guarda come varia al variare di $A$.
    

### Teorema delle Probabilità Totali e Teorema di Bayes

- **Teorema delle Probabilità Totali**: Supponendo che $H_i$ sia una partizione (famiglia al più numerabile di eventi disgiunti la cui unione è $\Omega$) e $P(H_i) > 0$, allora:
    
    $$\qquad P(A) = \sum_i P(A|H_i)P(H_i)$$
    
- **Teorema di Bayes**: Nelle stesse condizioni, per ogni $i$:
    
    $$\qquad P(H_i|A) = \frac{P(A|H_i)P(H_i)}{\sum_j P(A|H_j)P(H_j)}$$
    

### Esempio delle Urne

- **Descrizione**: Ci sono due urne. La prima contiene 5 palline nere e 5 rosse, la seconda contiene 2 nere e 8 rosse. Si tira una moneta per scegliere un'urna e poi si estrae una pallina.
    
- **Eventi**:
    
    - $R$: Estrarre una pallina rossa.
    - $T$: Uscita "testa" sulla moneta, che implica la scelta della prima urna.
- **Assunzioni**:
    
    - $P(T) = \frac{1}{2}$ (la moneta è equilibrata).
    - $P(R|T) = \frac{5}{10}$ (probabilità di estrarre una pallina rossa dalla prima urna).
    - $P(R|T^c) = \frac{8}{10}$ (probabilità di estrarre una pallina rossa dalla seconda urna).
- **Calcolo**: Utilizzando il teorema di Bayes, si può calcolare la probabilità di aver estratto dalla prima urna, dato che è stata estratta una pallina rossa:
    $$\qquad P(T|R) = \frac{P(R|T)P(T)}{P(R|T)P(T) + P(R|T^c)P(T^c)}$$
    
- Sostituendo i valori:
    
    $\qquad P(T|R) = \frac{\frac{5}{10} \cdot \frac{1}{2}}{\frac{5}{10} \cdot \frac{1}{2} + \frac{8}{10} \cdot \frac{1}{2}} = \frac{\frac{5}{20}}{\frac{5}{20} + \frac{8}{20}} = \frac{5}{13}$
    

### Costruzione dello Spazio di Probabilità

- Viene fatto notare che manca la definizione esplicita dello spazio di probabilità $(\Omega, \mathcal{F}, P)$.
- Si assume che esista uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ tale che gli eventi $T$ (testa) ed $R$ (pallina rossa) siano ben definiti e con le probabilità specificate.

#### Partizioni e Sigma Algebra

- Si considerano due partizioni dello spazio $\Omega$:
	- ![[Pasted image 20250225163531.png]]
    - $H_1 = T$ e $H_2 = T^c$ (testa o croce).
    - $E_1 = R$ e $E_2 = R^c$ (pallina rossa o nera).
- Si formano le intersezioni: $T \cap R$, $T \cap R^c$, $T^c \cap R$, $T^c \cap R^c$.
	- ![[Pasted image 20250225163601.png]]
- La collezione (famiglia) $B = \set{(H_n \cap E_k) \ \ \ n\geq1,k\geq1}$ forma una partizione di $\Omega$.


#### Definizione della Sigma Algebra

- Si definisce una sigma algebra generata dagli eventi in $B$  $\mathcal{F}= \sigma(B)$.
- Nel caso specifico, questa sigma algebra contiene eventi come "testa e pallina nera", "testa e pallina rossa", "croce e pallina nera", "croce e pallina rossa", ma anche eventi come "esce testa".
- Ad esempio, l'evento "esce testa" ($H_1$) può essere scritto come $H_1 = (H_1 \cap E_1) \cup (H_1 \cap E_2)$.

#### Proposizione Chiave

- Sia ${H_n}$ una partizione di eventi e ${E_k}$ un'altra famiglia di eventi. La collezione $B = {H_n \cap E_k}$ è una partizione numerabile.
- Si assegnano una successione di pesi positivi per ogni n $(p_n)_{n\geq1}$ tali che $\sum_n p_n = 1$,  
- e pesi condizionali positivi per ogni n e k $(p_{k|n})_{n\geq1}$ tali che $\sum_k p_{k|n} = 1$ per ogni $n$.

- **Tesi**: Esiste una misura di probabilità $P$ definita sulla sigma algebra generata da $B$ tale che:
    - $P(H_n) = p_n$ per ogni $n$
    - $P(H_n \cap E_k) = p_{k|n} p_n$ per ogni $k$ e $n$
    - $P(E_k|H_n) = p_{k|n}$ per ogni $k$ e $n$

#### Applicazione all'Esempio delle Urne

- ![[Pasted image 20250225164606.png]]
- $B = {T \cap R, T \cap R^c, T^c \cap R, T^c \cap R^c}$.
- $p_1 = P(T) = 0.5$ e $p_2 = P(T^c) = 0.5$.
- $p_{1|1} = P(R|T) = \frac{5}{10}$ (probabilità di estrarre rosso dato testa).
- $p_{2|1} = P(R^c|T) = \frac{5}{10}$ (probabilità di estrarre nero dato testa).
- $p_{1|2} = P(R|T^c) = \frac{8}{10}$ (probabilità di estrarre rosso dato croce).
- $p_{2|2} = P(R^c|T^c) = \frac{2}{10}$ (probabilità di estrarre nero dato croce).
- Con questi ingredienti, si può costruire una misura di probabilità ben definita.

#### Dimostrazione

- La dimostrazione si basa sul fatto che, avendo una sigma algebra generata da un insieme numerabile $B$, è sufficiente definire una famiglia di numeri positivi $q_{kn}$ (che dipendono da due indici perché la famiglia è indicizzata da due numeri) tali che la somma su tutti gli indici sia 1.
- Si definisce $q_{kn} = p_{k|n} p_n$.
- Si verifica che $$\sum_{k,n} q_{kn} = \sum_n p_n \sum_k p_{k|n} = \sum_n p_n \cdot 1 = 1$$.
- Quindi, esiste una misura di probabilità $P$ sulla sigma algebra generata da $B$ tale che $P(H_n \cap E_k) = p_{k|n} p_n$.

___ 


### Indipendenza di Eventi

L'indipendenza è una proprietà della probabilità, non degli eventi stessi. Per una certa misura di probabilità, due eventi potrebbero essere indipendenti, mentre per un'altra no. Pertanto, si parla di eventi indipendenti **rispetto a una specifica probabilità** P.

#### Definizione di Indipendenza

Due eventi $A$ e $B$, appartenenti a uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, sono detti **indipendenti** se e solo se la probabilità della loro intersezione è uguale al prodotto delle loro probabilità:

$P(A \cap B) = P(A) \cdot P(B)$

Intuitivamente, conoscere l'esito di $B$ non altera la valutazione di probabilità su $A$.

#### Probabilità Condizionale e Indipendenza

Partendo dalla definizione di probabilità condizionale:

$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$

si moltiplica per $P(B)$, ottenendo:

$P(A \cap B) = P(A \mid B) \cdot P(B)$

Questa formula esprime che la probabilità che $A$ e $B$ si verifichino contemporaneamente è uguale alla probabilità di $B$ moltiplicata per "qualcosa". L'idea intuitiva è che avere informazioni su $B$ aggiorna la probabilità su $A$.

#### Proprietà dell'Indipendenza

Se due eventi $A$ e $B$ sono indipendenti, allora anche $A$ e il complementare di $B$ (indicato come $B^c$) sono indipendenti. Di conseguenza, anche le seguenti coppie di eventi sono indipendenti:

- $A^c$ e $B^c$
- $A^c$ e $B$

Questo significa che l'indipendenza è stabile rispetto all'operazione di complementazione.

**Dimostrazione**:

Per dimostrare che $A$ e $B^c$ sono indipendenti, dobbiamo mostrare che $P(A \cap B^c) = P(A) \cdot P(B^c)$.

Consideriamo il diagramma di Venn. L'area rappresentante $A \cap B^c$ è contenuta in $A$. Possiamo scrivere $A \cap B^c$ come $A - (A \cap B)$.

Quindi, $P(A \cap B^c) = P(A) - P(A \cap B)$.

Poiché $A$ e $B$ sono indipendenti, $P(A \cap B) = P(A) \cdot P(B)$. Sostituendo:

$P(A \cap B^c) = P(A) - P(A) \cdot P(B) = P(A) \cdot (1 - P(B)) = P(A) \cdot P(B^c)$.

Questo dimostra che $A$ e $B^c$ sono indipendenti.

#### Errore Comune

È importante non confondere l'indipendenza ($A$ e $B$ indipendenti) con l'esclusività ($A \cap B = \emptyset$). L'indipendenza è una proprietà della probabilità, mentre l'esclusività è una relazione tra eventi.

### Esempio: Lancio di Due Dadi

Consideriamo lo spazio campionario $\Omega$ formato da coppie di numeri, dove ogni numero rappresenta l'esito di un dado a sei facce:

$\Omega = {(\omega_1, \omega_2) \mid \omega_1, \omega_2 \in {1, 2, 3, 4, 5, 6}}$

La cardinalità di $\Omega$ è $|\Omega| = 6 \times 6 = 36$.

Assumiamo che ogni coppia abbia la stessa probabilità di verificarsi (misura uniforme). Quindi, la probabilità di ogni singolo evento elementare è $\frac{1}{36}$.

Definiamo i seguenti eventi:

- $A$: il primo dado mostra la faccia 1
- $B$: il secondo dado mostra la faccia 3

Matematicamente:

- $A = {(\omega_1, \omega_2) \in \Omega \mid \omega_1 = 1}$
- $B = {(\omega_1, \omega_2) \in \Omega \mid \omega_2 = 3}$

La probabilità di $A$ è $P(A) = \frac{6}{36} = \frac{1}{6}$, poiché ci sono sei coppie in cui il primo elemento è 1. Similmente, $P(B) = \frac{6}{36} = \frac{1}{6}$.

L'intersezione di $A$ e $B$ è l'evento in cui il primo dado mostra 1 e il secondo dado mostra 3:

$A \cap B = {(1, 3)}$

Quindi, $P(A \cap B) = \frac{1}{36}$.

Verifichiamo se $A$ e $B$ sono indipendenti:

$P(A) \cdot P(B) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36} = P(A \cap B)$

Poiché $P(A \cap B) = P(A) \cdot P(B)$, gli eventi $A$ e $B$ sono indipendenti.

### Indipendenza di _n_ Eventi

Gli eventi $A_1, A_2, ..., A_n$ sono **indipendenti** se, per ogni sottoinsieme di $k$ eventi distinti (con $2 \leq k \leq n$), la probabilità dell'intersezione è uguale al prodotto delle probabilità:

$P(A_{i_1} \cap A_{i_2} \cap ... \cap A_{i_k}) = P(A_{i_1}) \cdot P(A_{i_2}) \cdot ... \cdot P(A_{i_k})$

dove $i_1, i_2, ..., i_k$ sono indici distinti compresi tra 1 e $n$.

#### Esempio con Tre Eventi ($n = 3$)

Se $n = 3$, la definizione di indipendenza richiede che siano soddisfatte le seguenti condizioni:

1. $P(A_1 \cap A_2 \cap A_3) = P(A_1) \cdot P(A_2) \cdot P(A_3)$
2. $P(A_1 \cap A_2) = P(A_1) \cdot P(A_2)$
3. $P(A_1 \cap A_3) = P(A_1) \cdot P(A_3)$
4. $P(A_2 \cap A_3) = P(A_2) \cdot P(A_3)$

È importante notare che **non è sufficiente** che solo la prima condizione sia soddisfatta per concludere che i tre eventi sono indipendenti. Tutte le condizioni devono essere vere.

#### Conseguenze dell'Indipendenza

Se $A_1, A_2, ..., A_n$ sono indipendenti, allora anche gli eventi ottenuti complementando alcuni di essi sono indipendenti. Ad esempio, $A_1, A_2, A_3^c$ sono indipendenti.

### Indipendenza di una Successione Numerabile di Eventi

Una successione numerabile di eventi $(A_n)_{n \in \mathbb{N}}$ è detta **indipendente** se ogni sua sottosuccessione finita è costituita da eventi indipendenti. In altre parole, per ogni $m \in \mathbb{N}$, gli eventi $A_1, A_2, ..., A_m$ devono essere indipendenti.

### Regola della Catena (o Regola delle Probabilità Composte)

Supponiamo di avere $n$ eventi $E_1, E_2, ..., E_n$ appartenenti a $\mathcal{F}$, tali che $P(E_1 \cap E_2 \cap ... \cap E_n) > 0$. Allora, la probabilità dell'intersezione può essere scritta come: ==ricontrolla==
- ![[Pasted image 20250226093836.png]]

$P(E_1 \cap E_2 \cap ... \cap E_n) = P(E_1) \cdot P(E_2 \mid E_1) \cdot P(E_3 \mid E_1 \cap E_2) \cdot ... \cdot P(E_n \mid E_1 \cap E_2 \cap ... \cap E_{n-1})$

**Dimostrazione (per $n=2$):**

$P(E_1 \cap E_2) = P(E_1) \cdot P(E_2 \mid E_1)$

Questa formula deriva direttamente dalla definizione di probabilità condizionale. ==ricontrolla==
- ![[Pasted image 20250226093844.png]]
- per n=2 $\mathbb{P}(E_1 \cap E_2) = \mathbb{P}(E_1) \mathbb{P}(E_2 | E_1)\mathbb{P}(E_1 \cap E_2) = \frac{\mathbb{P}(E_1)\mathbb{P}(E_2 | E_1)}{\mathbb{P}(E_1)}$
___


### Indipendenza Tra Eventi

- Due eventi $A$ e $B$ sono **indipendenti** se e solo se $P(A \cap B) = P(A)P(B)$.
- L'indipendenza è una proprietà della misura di probabilità, non degli eventi stessi.

#### Proprietà Importanti

- Se $A$ e $B$ sono indipendenti, allora anche $A$ e $B^c$ sono indipendenti. Di conseguenza, anche $A^c$ e $B^c$, e $A^c$ e $B$ sono indipendenti.
- **Dimostrazione**: $P(A \cap B^c) = P(A) - P(A \cap B) = \\ P(A) - P(A)P(B) = \\ P(A)(1 - P(B)) = \\ P(A)P(B^c)$.

#### Esempio con i Dadi

- $\Omega$ è l'insieme delle coppie $(i, j)$ con $i, j \in {1, 2, 3, 4, 5, 6}$, quindi $|\Omega| = 36$.
- $\mathcal{F}$ è la sigma algebra delle parti di $\Omega$, e $P$ è la misura uniforme su $\Omega$.
- $A = {(i, j) \in \Omega : i = 1}$ (il primo dado mostra 1).
- $B = {(i, j) \in \Omega : j = 3}$ (il secondo dado mostra 3).
- $P(A) = \frac{6}{36} = \frac{1}{6}$, $P(B) = \frac{6}{36} = \frac{1}{6}$.
- $A \cap B = {(1, 3)}$, quindi $P(A \cap B) = \frac{1}{36}$.
- $P(A)P(B) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36} = P(A \cap B)$, quindi $A$ e $B$ sono indipendenti.

#### Indipendenza di $n$ Eventi

- Gli eventi $A_1, A_2, \dots, A_n$ sono indipendenti se per ogni $k$ tra 2 e $n$, e per ogni scelta di $k$ indici distinti $i_1, i_2, \dots, i_k$, si ha:
    
    $\qquad P(A_{i_1} \cap A_{i_2} \cap \dots \cap A_{i_k}) = P(A_{i_1})P(A_{i_2})\dots P(A_{i_k})$
    

#### Esempio con $n = 3$

- Se $n = 3$, gli eventi $A_1, A_2, A_3$ sono indipendenti se:
    - $P(A_1 \cap A_2 \cap A_3) = P(A_1)P(A_2)P(A_3)$
    - $P(A_1 \cap A_2) = P(A_1)P(A_2)$
    - $P(A_1 \cap A_3) = P(A_1)P(A_3)$
    - $P(A_2 \cap A_3) = P(A_2)P(A_3)$

#### Conseguenze dell'Indipendenza

- Se $A_1, \dots, A_n$ sono indipendenti, allora anche $A_1, \dots, A_k, A_{k+1}^c, \dots, A_n^c$ sono indipendenti.

#### Indipendenza di una Successione Numerabile di Eventi

- Una successione numerabile di eventi ${A_n}$ è indipendente se ogni sua sottosuccessione finita è costituita da eventi indipendenti.
___
### Indipendenza tra eventi

#### Definizione intuitiva

L'idea di base è che conoscere qualcosa su un evento $B$ non cambia la valutazione di probabilità su un evento $A$.

#### Definizione formale

Due eventi $A$ e $B$, appartenenti allo spazio di probabilità $(\Omega, \mathcal{F}, P)$, sono **indipendenti** se e solo se:

$P(A \cap B) = P(A) \cdot P(B)$

#### Probabilità condizionata

Ricordando la definizione di probabilità condizionata:

$P(A|B) = \frac{P(A \cap B)}{P(B)}$

Se $A$ e $B$ sono (stocasticamente) indipendenti, allora $P(A|B) = P(A)$, ovvero conoscere $B$ non altera la probabilità di $A$.

#### Errore comune

**Non confondere l'indipendenza con l'intersezione vuota**:

- $A$ e $B$ indipendenti **non** implica $A \cap B = \emptyset$
- L'indipendenza è una proprietà della misura di probabilità $P$, non degli eventi $A$ e $B$. Gli eventi $A$ e $B$ sono indipendenti rispetto a $P$.

#### Proprietà importante

Se $A$ e $B$ sono indipendenti, allora anche:

- $A$ e $B^c$ sono indipendenti
- $A^c$ e $B$ sono indipendenti
- $A^c$ e $B^c$ sono indipendenti

Dove $B^c$ è il complementare di $B$. In altre parole, l'indipendenza è stabile rispetto al complementare.

##### Dimostrazione

![[Pasted image 20250225173305.png]]
Consideriamo $P(A \cap B^c)$. Vogliamo dimostrare che $P(A \cap B^c) = P(A) \cdot P(B^c)$.

$P(A \cap B^c) = P(A) - P(A \cap B)$

Siccome $A$ e $B$ sono indipendenti, $P(A \cap B) = P(A) \cdot P(B)$. Quindi:

$P(A \cap B^c) = P(A) - P(A) \cdot P(B) = P(A) \cdot (1 - P(B)) = P(A) \cdot P(B^c)$

#### Esempio: Lancio di due dadi

Consideriamo il lancio di due dadi.

- $\Omega = {(w_1, w_2) : w_1, w_2 \in {1, 2, 3, 4, 5, 6}}$
- $|\Omega| = 36$
- Assumiamo che la probabilità sia uniforme, quindi $P({\omega}) = \frac{1}{36}$ per ogni $\omega \in \Omega$.

Definiamo gli eventi:

- $A = {\omega \in \Omega : \text{il primo dado mostra la faccia 1}}$
- $B = {\omega \in \Omega : \text{il secondo dado mostra la faccia 3}}$

Calcoliamo le probabilità:

- $P(A) = \frac{6}{36} = \frac{1}{6}$
- $P(B) = \frac{6}{36} = \frac{1}{6}$
- $A \cap B = \set{\omega =(1, 3)}$
- $P(A \cap B) = \frac{1}{36}$

Verifichiamo l'indipendenza:

$P(A) \cdot P(B) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36} = P(A \cap B)$

Quindi, $A$ e $B$ sono indipendenti.

#### Indipendenza di N eventi

Gli eventi $A_1, A_2, ..., A_n \in \mathcal{F}$ sono indipendenti se per ogni sottoinsieme di indici distinti $I_1, I_2, ..., I_k$ con $2 \leq k \leq n$, vale:

$P(A_{I_1} \cap A_{I_2} \cap ... \cap A_{I_k}) = P(A_{I_1}) \cdot P(A_{I_2}) \cdot ... \cdot P(A_{I_k})$
- $$\mathbb{P} \left( \bigcap_{j=1}^{k} A_{ij} \right) = \prod_{j=1}^k \mathbb{P}(A_{ij}) \ \ \forall i,k \leq n \forall \set{I_1, I_2, ..., I_k} \subseteq \set{1,\cdots, n}$$
 - ![[Pasted image 20250225174326.png]]

In altre parole, deve valere la fattorizzazione per ogni possibile combinazione di eventi.

##### Esempio con N=3

Se $n = 3$, allora $A_1, A_2, A_3$ sono indipendenti se valgono contemporaneamente le seguenti:

- $P(A_1 \cap A_2 \cap A_3) = P(A_1) \cdot P(A_2) \cdot P(A_3)$
- $P(A_1 \cap A_2) = P(A_1) \cdot P(A_2)$
- $P(A_1 \cap A_3) = P(A_1) \cdot P(A_3)$
- $P(A_2 \cap A_3) = P(A_2) \cdot P(A_3)$

**Non è sufficiente che valga solo la prima condizione**.

#### Conseguenze dell'indipendenza

Se $A_1, ..., A_n$ sono indipendenti, allora anche:

- $A_1, ..., A_k, A_{k+1}^c, ..., A_n^c$ sono indipendenti (posso complementare qualsiasi sottoinsieme di eventi)
- Se prendo un sottoinsieme degli eventi, questi sono ancora indipendenti. Per esempio, $A_1, A_2$ sono indipendenti, $A_1, A_3$ sono indipendenti, ecc..
- Se $A_1^c, A_2, A_3$ sono indipendenti, allora $A_1, A_2, A_3$ sono indipendenti.

#### Indipendenza di una successione numerabile di eventi

Una successione numerabile di eventi $(A_n)_{n \in \mathbb{N}}$ è indipendente se per ogni $m \in \mathbb{N}$, i primi $m$ eventi sono indipendenti.
- $$\text{Sono indipendenti se } \\ \forall m \ge 2 \quad (A_1, \dots, A_m) \text{ sono indipendenti}$$
In altre parole, comunque si "arresti" la successione, si ottiene una famiglia finita di eventi indipendenti.


#### References



