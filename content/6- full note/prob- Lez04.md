---
title: "prob- Lez04"
---

2025-02-23 14:35

_Status: #flashcard_finite     #riscritto_finito     #revisione_finita 

_Tags:  [[probabilità]]   [[sbobine]]

## prob- Lez04

### Sigma-algebra generata da una famiglia di insiemi

Il professore spiega un dubbio frequente riguardo alla **sigma-algebra generata da una famiglia di insiemi**.

#### Dubbio comune

Molti studenti si chiedono come la sigma-algebra di Borel ($\mathcal{B}$) sia generata dagli aperti ($U$) o, equivalentemente, dagli intervalli.

#### Chiarimento del professore

1. **Concetto di generazione**: Il professore ricorda che generare una sigma-algebra a partire da una classe di insiemi significa che la sigma-algebra risultante conterrà **molti più elementi** della classe di partenza.
    
    - **Esempio**: Se si parte da un singolo evento $A$, la sigma-algebra generata conterrà $A$, il suo complementare $A^c$, l'insieme vuoto $\emptyset$ e l'insieme totale $\Omega$.
    - Se si parte da due eventi $A$ e $B$, la sigma-algebra conterrà $A$, $B$, $A \cup B$, $A^c$, $B^c$, $A \cup B^c$, e così via.
2. **Sigma-algebra dei Boreliani**: La sigma-algebra dei Boreliani ($\mathcal{B}$) contiene **molti più insiemi** degli intervalli aperti da cui è generata. Include tutti gli insiemi chiusi, i punti singoli, le semirette, gli intervalli semiaperti, ecc.
    
3. **Non confondere la famiglia con la sigma-algebra generata**: È fondamentale non confondere la famiglia di insiemi di partenza con la sigma-algebra che essa genera. La sigma-algebra generata è generalmente più grande della famiglia di partenza, a meno che la famiglia non sia già una sigma-algebra.
    
4. **Come verificare se un insieme appartiene alla sigma-algebra generata**: Per capire se un insieme appartiene alla sigma-algebra generata, si deve verificare se può essere ottenuto tramite operazioni di complementazione, unione numerabile e intersezione numerabile a partire dagli insiemi della famiglia generatrice.
    
    - Prendere un elemento $A$ nella famiglia, e verificare se anche il suo complementare $A^c$ appartiene alla sigma-algebra.
    - Prendere due elementi $A$ e $B$ e verificare se la loro unione $A \cup B$ e la loro intersezione $A \cap B$ appartengono alla sigma-algebra. L'appartenenza dell'intersezione discende dalle proprietà di algebra/sigma-algebra.

### Misura di Lebesgue e sue proprietà

Il professore riprende la lezione precedente introducendo la **misura di Lebesgue** su $\mathbb{R}^d$.

#### Definizione e proprietà

1. **Misura di Lebesgue su $\mathbb{R}$**: Nel caso di $\mathbb{R}$, la misura di Lebesgue di un intervallo è esattamente la sua lunghezza. La misura di Lebesgue di tutto $\mathbb{R}$ è $+\infty$. Si ricorda che la misura di Lebesgue è sigma-finita.
    
2. **Misura di Lebesgue di un punto**: La misura di Lebesgue di un singolo punto è zero, ovvero $\lambda({x}) = 0$ per ogni $x \in \mathbb{R}$. Questo vale anche per misure di probabilità assolutamente continue.
    
3. **Proprietà generali**:
    
    - In $\mathbb{R}^d$, la misura di Lebesgue di un punto è zero.
    - In $\mathbb{R}^3$, la misura di Lebesgue di un piano è zero.
    - Più in generale, in $\mathbb{R}^d$, la misura di Lebesgue di qualsiasi iperpiano di dimensione strettamente minore di $d$ è zero ($Leb_D=0$)

#### Esempio

Il professore propone un esempio in $\mathbb{R}^2$:

- Consideriamo due rette nel piano. Qual è la misura di Lebesgue della loro unione?
- ![[Pasted image 20250223195200.png]]
- **Soluzione**: Poiché ogni retta ha misura di Lebesgue zero e la misura di Lebesgue è sigma-additiva, la misura dell'unione delle due rette è la somma delle loro misure, che è $0 + 0 = 0$. Matematicamente: $\lambda(retta_1 \cup retta_2) \le \lambda(retta_1) + \lambda(retta_2) = 0 + 0 = 0$.

### Esempi di Spazi di Probabilità

Il professore introduce due esempi per illustrare i concetti di spazi di probabilità e misure.

#### Esempio 1: Dado a Sei Facce (spazio finito)

- **Spazio Campionario**: $\Omega = {1, 2, 3, 4, 5, 6}$, che rappresenta i possibili risultati del lancio di un dado a sei facce.
- **Probabilità**: Ogni elemento ha la stessa probabilità di verificarsi, ovvero $P({i}) = \frac{1}{6}$ per $i = 1, 2, ..., 6$.
- **Misura di Probabilità**: La funzione di probabilità è definita sull'insieme delle parti di $\Omega$, $P(\cdot): \mathcal{P}(\Omega) \to [0,1]$, e assegna a ogni sottoinsieme di $\Omega$ la somma delle probabilità dei suoi elementi  $P(A)=\sum_{i \in A}p_i \ \ \ , p_i=\frac{1}{6}$ con $\mathcal{A}\in \mathcal{P}(\Omega)= \mathcal{F}$
  Questa è una misura.
- **Modellizzazione**: Questo esempio rappresenta il lancio di un dado non truccato, dove ogni faccia ha la stessa probabilità di uscire. Si fanno delle scelte di modellizzazione, come assumere che il dado non venga rubato o distrutto.

#### Esempio 2: Cerchio Unitario (spazio non numerabile)

- **Spazio Campionario**: $\mathbb{R}^2\supset\Omega =\set{\omega=(x_1, x_2) : x_1^2 + x_2^2 \le 1}$, che rappresenta l'insieme dei punti all'interno di un cerchio di raggio 1.
- ![[Pasted image 20250223200216.png]]
- **Misura di Probabilità**: Si vuole definire una misura di probabilità che formalizzi l'idea di scegliere un punto a caso uniformemente all'interno del cerchio.
- **Sigma-algebra**: Si utilizza la sigma-algebra dei Boreliani su $\mathbb{R}^2$ ($\mathcal{F}=\mathcal{B}(\mathbb{R})$), ristretta a $\Omega$.
- **Definizione della Misura**: (abbiamo bisogno di una misura non discreta) Si parte dalla misura di Lebesgue $\lambda$ ($Leb_2$) e si definisce la misura di probabilità $P(A)$ come: $$ P(A) = \frac{\lambda(A \cap \Omega)}{\lambda(\Omega)} = \frac{\lambda(A \cap \Omega)}{\pi} \ \ \ \ \ \ \ \  \forall A \in \mathcal{F}$$ dove $A$ è un insieme misurabile e $\lambda(\Omega) = \pi$ è l'area del cerchio unitario.
- **Uniformità**: Questa misura di probabilità è uniforme, nel senso che la probabilità di un piccolo disco attorno a un punto è proporzionale all'area del disco, indipendentemente dalla posizione del punto all'interno del cerchio.
- **Eventi**: Gli eventi sono sottoinsiemi di $\Omega$ che appartengono alla sigma-algebra.
- **Esempio di Evento**: Si consideri l'evento $A$ = "il diametro passante per il punto scelto interseca il settore tra le ore 12 e le ore 3". Per calcolare la probabilità di $A$, si deve tradurre questo evento in un sottoinsieme misurabile di $\Omega$. Questo sottoinsieme è l'unione del primo e terzo quadrante.

### Probabilità Condizionata e Indipendenza

Il professore introduce i concetti di **probabilità condizionata** e **indipendenza**.

#### Spazio Misurabile e Spazio di Probabilità

- Uno spazio misurabile è una coppia $(\Omega, \mathcal{F})$, dove $\Omega$ è lo spazio campionario e $\mathcal{F}$ è una sigma-algebra su $\Omega$.
- Uno spazio di probabilità è una terna $(\Omega, \mathcal{F},\mathbb{P})$, dove $(\Omega, \mathcal{F})$ è uno spazio misurabile e $P$ è una misura di probabilità su $\mathcal{F}$.

#### Probabilità Condizionata

- ![[Pasted image 20250223201637.png]]
- Siano $E$ e $H$ due eventi in $\mathcal{F}$, con $P(H) > 0$. La probabilità condizionata di $E$ dato $H$ è definita come: $$ P(E|H) = \frac{P(E \cap H)}{P(H)} $$
- **Interpretazione**: $P(E|H)$ rappresenta la probabilità che l'evento $E$ si verifichi, dato che l'evento $H$ si è verificato. In altre parole, si restringe l'attenzione all'universo $H$ e si valuta la probabilità di $E$ in questo universo ristretto.
	- ![[Pasted image 20250223201734.png]]

___

#### Proprietà della Probabilità Condizionata

- **$P(E|H)$ è una misura di probabilità**: Fissato $H\in \mathcal{F}, \ \ \mathbb{P}(H)\geq 0$, la funzione $P(E|H): \mathcal{F} \to$ è una misura di probabilità su $\mathcal{F}$. (la probabilità condizionata è una funzione rispetto a E)
  Questo significa che soddisfa gli assiomi di una misura di probabilità:
  
Per dimostrare che questa applicazione è una misura di probabilità su $\mathcal{F}$, dobbiamo verificare tre proprietà fondamentali:

1. **Non negatività**: $P(E|H) \geq 0$ Questo è vero perché sia $P(E \cap H)$ che $P(H)$ sono non negativi, e quindi il loro rapporto è non negativo.
    
2. **Normalizzazione**: $P(\Omega|H) = 1$ Dimostrazione: $P(\Omega|H) = \frac{P(\Omega \cap H)}{P(H)} = \frac{P(H)}{P(H)} = 1$
    
3. **Additività completa**: Sia ${A_n}_{n \geq 1}$ una successione di eventi disgiunti. Dobbiamo dimostrare che: $P\left(\bigcup_{n=1}^{\infty} A_n \mid H\right) = \sum_{n=1}^{\infty} P(A_n \mid H)$
    
    - Iniziamo scrivendo la definizione: $P\left(\bigcup_{n=1}^{\infty} A_n \mid H\right) = \frac{P\left(\left(\bigcup_{n=1}^{\infty} A_n\right) \cap H\right)}{P(H)}$
    - Usiamo la proprietà distributiva dell'intersezione rispetto all'unione: $$\frac{P\left(\bigcup_{n=1}^{\infty} (A_n \cap H)\right)}{P(H)}$$
    - Poiché gli $A_n$ sono disgiunti, anche gli $(A_n \cap H)$ sono disgiunti. Quindi, possiamo usare l'additività completa della probabilità P: $\frac{\sum_{n=1}^{\infty} P(A_n \cap H)}{P(H)}$
    - Riscriviamo ogni termine usando la definizione di probabilità condizionale: $\sum_{n=1}^{\infty} \frac{P(A_n \cap H)}{P(H)} = \sum_{n=1}^{\infty} P(A_n \mid H)$
    - Quindi, abbiamo dimostrato l'additività completa: $P\left(\bigcup_{n=1}^{\infty} A_n \mid H\right) = \sum_{n=1}^{\infty} P(A_n \mid H)$

#### Corollario

Ogni proprietà che vale per una misura di probabilità vale anche per la probabilità condizionale quando si tiene fisso il condizionante. Ad esempio:
    - $P(E|H) \ge 0$ per ogni $E \in \mathcal{F}$.
    - $$P(\Omega|H) = \frac {P(\Omega \cap H)}{\mathbb{P}(H)}= \frac {P( H)}{\mathbb{P}(H)} =1$$.
    - Se $E_1, E_2, ...$ sono eventi disgiunti, allora $P(\bigcup_{i=1}^{\infty} E_i | H) = \sum_{i=1}^{\infty} P(E_i | H)$.
	    - ![[Pasted image 20250223202434.png]]
	- intersezione e unione godono della proprietà distributiva
	- ![[Pasted image 20250223202606.png]]
	- ![[Pasted image 20250223202635.png]]
- OGNI probabilità che sappiamo valere per una misura di probabilità vale per la probabilità condizionata quando teniamo fisso il condizionante
	- esempio:![[Pasted image 20250223203214.png]]
___
#### Formula delle Probabilità Totali
- ![[Pasted image 20250223203614.png]]
- Sia $H_1, H_2, ...$ una partizione numerabile di $\Omega$, ovvero $H_i \cap H_j = \emptyset$ per $i \ne j$ e $\bigcup_{i=1}^{\infty} H_i = \Omega$, con $P(H_i) > 0$ per ogni $i$. Allora, per ogni evento $E \in \mathcal{F}$: $$ P(E) = \sum_{i=1}^{\infty} P(E|H_i) P(H_i) $$


#### Caso Generale: Partizione Numerabile
1. **Definizione di partizione**: Sia ${H_i}_{i=1}^{\infty}$ una partizione numerabile di $\Omega$. Questo significa che:

	- $H_i \in \mathcal{F}$ per ogni $i$ (ogni $H_i$ è un evento misurabile)
	- $\bigcup_{i=1}^{\infty} H_i = \Omega$ (l'unione di tutti gli $H_i$ è l'intero spazio campionario)
	- $H_i \cap H_j = \emptyset$ per $i \neq j$ (gli $H_i$ sono a due a due disgiunti)
	- $P(H_i) > 0$ per ogni $i$
2. **Decomposizione dell'evento E**: L'evento E può essere espresso come l'unione delle intersezioni di E con gli elementi della partizione: $E = \bigcup_{i=1}^{\infty} (E \cap H_i)$
	
3. **Additività completa**: Poiché gli eventi $(E \cap H_i)$ sono disgiunti, possiamo scrivere: $P(E) = \sum_{i=1}^{\infty} P(E \cap H_i)$
	
4. **Utilizzo della probabilità condizionale**: Usando la definizione di probabilità condizionale: $P(E \cap H_i) = P(E \mid H_i) \cdot P(H_i)$
	
5. **Formula generale delle probabilità totali**: Sostituendo nella formula per $P(E)$: $P(E) = \sum_{i=1}^{\infty} P(E \mid H_i) \cdot P(H_i)$

Questa formula esprime la probabilità di E come la somma delle probabilità condizionate di E dato $H_i$, pesate per le probabilità di $H_i$.
    
#### Caso Semplice: Partizione in Due Eventi

1. **Decomposizione dell'evento E**: L'evento E può essere espresso come l'unione di due eventi mutuamente esclusivi: $E = (E \cap H) \cup (E \cap H^c)$ dove $H^c$ rappresenta il complemento di H.
    
7. **Additività**: Siccome $(E \cap H)$ e $(E \cap H^c)$ sono disgiunti, possiamo scrivere: $P(E) = P(E \cap H) + P(E \cap H^c)$
    
3. **Utilizzo della probabilità condizionale**: Ricordando la definizione di probabilità condizionale: $P(E \mid H) = \frac{P(E \cap H)}{P(H)}$ e quindi $P(E \cap H) = P(E \mid H) \cdot P(H)$ Allo stesso modo: $P(E \cap H^c) = P(E \mid H^c) \cdot P(H^c)$
    
4. **Formula delle probabilità totali**: Sostituendo nella formula per $P(E)$: $P(E) = P(E \mid H) \cdot P(H) + P(E \mid H^c) \cdot P(H^c)$
    
    Questa formula permette di calcolare la probabilità di E usando le probabilità condizionate e le probabilità degli eventi H e il suo complemento.


___


#### Teorema di Bayes

- Nelle stesse ipotesi della formula delle probabilità totali, per ogni $H_i$ nella partizione e per ogni evento $E$ con $P(E) > 0$: $$ P(H_i|E) = \frac{P(E|H_i) P(H_i)}{\sum_{j=1}^{\infty} P(E|H_j) P(H_j)} $$

#### Esempio del Test Clinico

- Si consideri un test clinico per una malattia. Siano:
    - $E$ = "il test risulta positivo".
    - $H$ = "il paziente è malato".
    - $H^c$ = "il paziente è sano".
- Si conoscono le seguenti probabilità condizionate:
    - $P(E|H)$ = probabilità che il test sia positivo dato che il paziente è malato (sensibilità del test).
    - $P(E|H^c)$ = probabilità che il test sia positivo dato che il paziente è sano (1 - specificità del test).
    - $P(H)$ = probabilità a priori che un individuo nella popolazione sia malato (prevalenza della malattia).
- Si vuole calcolare $P(H|E)$, ovvero la probabilità che il paziente sia effettivamente malato dato che il test è risultato positivo. Utilizzando il teorema di Bayes: $$ P(H|E) = \frac{P(E|H) P(H)}{P(E|H) P(H) + P(E|H^c) P(H^c)} $$
- dove $P(H^c) = 1 - P(H)$.

#### Formulazione del Teorema di Bayes

Dati: $P(E|H)$, $P(E|H^c)$ e $P(H)$, si vuole calcolare $P(H|E)$.

**Teorema:**

Sia $({H_i})_{i\ge 1}$ una partizione numerabile di $\Omega$, tale che $P(H_i) > 0$ per ogni i. Allora, la probabilità condizionata $P(H_i|E)$ può essere calcolata come:

$$P(H_i|E) = \frac{P(E|H_i)P(H_i)}{\sum_{j \ge 1} P(E|H_j)P(H_j)}$$

**Dimostrazione:**

Il denominatore dell'espressione sopra è equivalente a $P(E)$ per il teorema delle probabilità totali. Quindi:

$$P(H_i|E) = \frac{P(E|H_i)P(H_i)}{P(E)}$$

A destra dell'equazione, abbiamo solo termini noti.

#### Osservazioni Importanti

- **Inversione delle Probabilità:** Il teorema permette di "invertire" le probabilità, calcolando $P(H_i|E)$ a partire da $P(E|H_j)$ e $P(H_j)$.
- **Statistica Bayesiana:** Questo teorema è alla base della statistica Bayesiana.
- **Terminologia Statistica:**
    - $P(E|H_i)$ è chiamata verosimiglianza (likelihood).
    - $P(H_i)$ è la distribuzione iniziale (prior).
    - $P(H_i|E)$ è la distribuzione finale (posterior).
- **Meccanismo di Apprendimento:** Il teorema può essere visto come un meccanismo di apprendimento. $P(H_i)$ rappresenta la conoscenza iniziale, $P(E|H_i)$ è il modello, e $P(H_i|E)$ è ciò che si apprende dopo aver osservato l'evento E.
- **Necessità di una Struttura Probabilistica:** Per fare questi calcoli, è fondamentale avere uno spazio $\Omega$, una $\sigma$-algebra e una misura di probabilità ben definiti, anche se poi l'enunciato riguarda solo specifici valori numerici.

#### References



