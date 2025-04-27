2025-03-04 17:07

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine]] [[probabilità]]

## Prob- Ese02

### Problemi Paradigma della Combinatoria

#### Esercizio 1: Anagrammi e Permutazioni

**Definizione di Permutazione:** Una permutazione è un modo di ordinare una sequenza di elementi. Intuitivamente, si tratta di scambiare l'ordine degli oggetti. Formalmente, è una **biiezione** da un insieme ${1, 2, ..., n}$ all'insieme stesso, ma per scopi pratici, il concetto intuitivo è sufficiente.

**Problema:** Calcolare quanti anagrammi esistono per la parola "enigma".

- La parola "enigma" ha sei lettere distinte.
- **Soluzione:** Per il primo slot (la prima lettera dell'anagramma), ci sono sei scelte possibili. Per il secondo slot, rimangono cinque scelte, e così via. Quindi, il numero totale di anagrammi è $6 \times 5 \times 4 \times 3 \times 2 \times 1 = 6! = 720$.
- In generale, il numero di permutazioni di $n$ oggetti distinti è $n!$.

**Caso con Lettere Ripetute:** Cosa cambia se la parola ha lettere ripetute, come "matematica"?

- La parola "matematica" ha 10 lettere, con 3 A, 2 T e 2 M ripetute.
- **Intuizione:** Scambiare due lettere identiche non cambia la parola, quindi alcune permutazioni sono indistinguibili.
- **Soluzione:** Fissiamo una permutazione (ad esempio, "matematica"). Contiamo quante permutazioni delle lettere ripetute lasciano la parola invariata. Ci sono $3!$ modi di permutare le A, $2!$ modi di permutare le T, e $2!$ modi di permutare le M. Quindi, ci sono $3! \times 2! \times 2! = 6 \times 2 \times 2 = 24$ permutazioni che lasciano la parola invariata.
- Il numero totale di permutazioni è $$\frac{10!}{3! \times 2! \times 2!} = \frac{3628800}{24} = 151200$$.

**Regola Generale:** Dato un insieme di $n$ oggetti con $k$ tipi di oggetti ripetuti $A_1, A_2, ..., A_k$ con molteplicità $a_1, a_2, ..., a_k$, il numero di permutazioni è:

$$ \frac{n!}{a_1! \times a_2! \times ... \times a_k!} $$

#### Esercizio 2: Disposizioni Semplici

**Definizione:** Una disposizione di $k$ oggetti scelti da un insieme di $n$ oggetti distinti è una selezione ordinata di $k$ oggetti. L'ordine è importante.

**Problema:** Quanti podi (primo, secondo e terzo posto) si possono formare in una competizione con 20 partecipanti?

- **Soluzione:** Ci sono 20 scelte per il primo posto, 19 per il secondo e 18 per il terzo. Quindi, il numero di podi possibili è $20 \times 19 \times 18 = 6840$.
- Questo è un esempio di fattoriale decrescente, indicato come $\frac{(20)!}{17!}$.

**Formula Generale:** Il numero di disposizioni di $k$ elementi scelti da $n$ è:

$$ n \times (n-1) \times (n-2) \times ... \times (n-k+1) = \frac{n!}{(n-k)!} $$

#### Esercizio 3: Combinazioni Semplici

**Definizione:** Una combinazione di $k$ elementi scelti da un insieme di $n$ elementi è una selezione di $k$ elementi senza considerare l'ordine.

**Problema:** Trovare il numero di sottoinsiemi di $k$ elementi di un insieme con $n$ elementi.

- **Intuizione:** Prima consideriamo le disposizioni, poi eliminiamo l'ordine.
- **Soluzione:** Partiamo dalle disposizioni di $k$ elementi da $n$, che sono $\frac{n!}{(n-k)!}$. Però, ogni combinazione di $k$ elementi può essere ordinata in $k!$ modi diversi. Quindi, dobbiamo dividere il numero di disposizioni per $k!$ per ottenere il numero di combinazioni.

**Formula Generale:** Il numero di combinazioni di $k$ elementi scelti da $n$ è:

$$ \binom{n}{k} = \frac{n!}{(n-k)! \cdot k!} $$

Questo è il coefficiente binomiale.

### Cardinalità dell'Insieme delle Parti

**Obiettivo**: Dimostrare che la cardinalità dell'insieme delle parti di un insieme finito con _n_ elementi è 2^_n_.

#### Definizioni Preliminari

- Sia _A_ un insieme tale che la sua cardinalità sia **card(_A_) = _n_**.
- L'insieme delle parti di _A_, indicato con _P(A)_, è l'insieme di tutti i sottoinsiemi di _A_.

#### Passaggi della Dimostrazione

1. **Esprimere la cardinalità di _P(A)_**
    
    La cardinalità di _P(A)_ può essere espressa come la cardinalità dell'unione di tutti i sottoinsiemi di _A_ aventi cardinalità che va da 0 a _n_. In termini matematici:
    
    **card(_P(A)_) = card($\bigcup_{k=0}^{n} \set{B \subseteq A : \text{card}(B) = k}$)**
    
2. **Disgiunzione degli insiemi**
    
    Ogni sottoinsieme di _A_ ha una e una sola cardinalità. Pertanto, gli insiemi nell'unione sono disgiunti. Questo significa che un insieme _B_ non può appartenere a due insiemi con cardinalità diversa (cioè, per un _K1_ e _K2_ diversi, _B_ non può appartenere contemporaneamente a entrambi i sottoinsiemi).
    
3. **Cardinalità dell'unione disgiunta**
    
    La cardinalità dell'unione di insiemi disgiunti è la somma delle cardinalità degli insiemi stessi. Quindi:
    
    **card(_P(A)_) = $\sum_{k=0}^{n} \text{card}(\set{B \subseteq A : \text{card}(B) = k})$**
    
    La cardinalità di ogni insieme di sottoinsiemi di dimensione _k_ è data dal coefficiente binomiale "n su k", che rappresenta il numero di modi di scegliere _k_ elementi da un insieme di _n_ elementi.
    
    **card(_P(A)_) = $\sum_{k=0}^{n} \binom{n}{k}$**
    
4. **Somma dei coefficienti binomiali**
    
    Si deve trovare la somma dei coefficienti binomiali. Si utilizza il teorema binomiale per semplificare questa somma. Si considera l'espressione (1 + 1)^_n_.
    
    **(1 + 1)^_n_ = $\sum_{k=0}^{n} \binom{n}{k} \cdot 1^k \cdot 1^{n-k} = \sum_{k=0}^{n} \binom{n}{k}$**
    
    Poiché (1 + 1)^_n_ = 2^_n_, si ha:
    
    **$\sum_{k=0}^{n} \binom{n}{k} = 2^n$**
    
5. **Conclusione**
    
    Sostituendo la somma dei coefficienti binomiali con 2^_n_, si ottiene la cardinalità dell'insieme delle parti:
    
    **card(_P(A)_) = 2^_n_**
    

#### Esempio e Collegamento al Triangolo di Tartaglia

La somma dei coefficienti binomiali corrisponde alla somma degli elementi in ogni riga del triangolo di Tartaglia, e ogni riga ha come somma una potenza di 2.


___

### Definizione del problema

Si considera un numero intero _n_ di biglie distinte. L'obiettivo è analizzare l'estrazione di _k_ di queste biglie, considerando tre modalità diverse:

- Estrazione senza reimmissione
- Estrazione con reimmissione
- Estrazione simultanea

### Svolgimento dell'esercizio

#### Definizioni preliminari

- Sia $B = \set{b_1, ..., b_n}$ un insieme che rappresenta le _n_ biglie distinte. Ogni biglia è identificata in modo univoco.
- **Estrazione senza reimmissione**: ogni biglia estratta viene posta sul tavolo e non viene rimessa nell'urna. Questo implica che nell'urna ci saranno sempre meno biglie rispetto alla partenza.
- **Estrazione con reimmissione**: ogni biglia estratta viene rimessa nell'urna. In questo modo, è possibile estrarre la stessa biglia più volte.
- **Estrazione simultanea**: si estraggono _k_ biglie contemporaneamente, senza un ordine specifico. Non c'è una prima o una seconda biglia estratta.

#### Caso 1: Estrazione senza reimmissione

- Lo spazio degli esiti ($\Omega$) è l'insieme delle _k-uple_ di elementi distinti.
    
- Formalmente: $\Omega = {(b_1, ..., b_k) \in B^k \mid b_i \neq b_j \text{ per } i \neq j}$
    
- La cardinalità di $\Omega$ corrisponde al numero di disposizioni semplici di _k_ elementi su _n_:
    
    $|\Omega| = \frac{n!}{(n-k)!}$
    

#### Caso 2: Estrazione con reimmissione

- $\Omega$ è l'insieme delle _k-uple_, dove ogni elemento della _k-upla_ può essere qualsiasi elemento di _B_.
    
- Formalmente: $\Omega = B \times B \times ... \times B = B^k$
    
- La cardinalità di $\Omega$ è:
    
    $|\Omega| = |B|^k = n^k$
    
    Questo corrisponde alle disposizioni con ripetizione.
    

#### Caso 3: Estrazione simultanea

- Qui si selezionano _k_ elementi su _n_ senza considerare l'ordine.
    
- $\Omega$ può essere identificato come l'insieme dei sottoinsiemi di _B_ con cardinalità _k_.
    
- Formalmente: $\Omega = \set{b \subseteq B : |b| = k}$
    
- La cardinalità di $\Omega$ è data dalle combinazioni semplici:
    
    $|\Omega| = \binom{n}{k} = \frac{n!}{k!(n-k)!}$

___

### Stars and Bars (Biglie e Scatole)==b hjb

Questo problema riguarda la suddivisione di $n$ biglie indistinguibili in $k$ scatole distinte.

- **Configurazione**: Una configurazione rappresenta come le biglie sono distribuite nelle scatole. Dato che le scatole sono distinte, l'ordine è importante.
    
- **Esempio**: Consideriamo il caso con $n = 6$ biglie e $k = 3$ scatole. Una configurazione può essere rappresentata inserendo $k - 1 = 2$ stanghette tra le biglie. Per esempio, la sequenza "$\bullet \bullet \bullet | \bullet | \bullet \bullet$" rappresenta 3 biglie nella prima scatola, 1 nella seconda e 2 nella terza.
    
- **Bisezione**: Esiste una corrispondenza biunivoca tra le configurazioni e questi "disegni" con biglie e stanghette.
    
- **Calcolo delle configurazioni**: Il numero di configurazioni è uguale al numero di anagrammi della stringa formata da $n$ biglie e $k - 1$ stanghette. Quindi, si ha una stringa di lunghezza $n + k - 1$. Il numero di modi di disporre queste biglie e stanghette è dato da:
    
    $$\frac{(n + k - 1)!}{n! (k - 1)!} = \binom{n + k - 1}{k - 1}$$
    
- **Esercizio aggiuntivo**: Cosa cambia se ogni scatola deve contenere almeno una biglia? In questo caso, $k$ non può essere maggiore di $n$. Questo problema è legato alle partizioni intere, cioè esprimere un intero $n$ come somma di $k$ addendi strettamente positivi.
    

### Paradosso dei Compleanni: Spiegazione Dettagliata

**Il problema:** In una stanza ci sono $n$ persone. Qual è la probabilità che almeno due di loro festeggino il compleanno nello stesso giorno? Quante persone devono esserci nella stanza affinché questa probabilità sia maggiore del 50%?.

**Assunzioni:**

- Un anno ha 365 giorni.
- La probabilità di nascere in un qualsiasi giorno dell'anno è uniforme (equiprobabilità).
- Non ci sono gemelli nella stanza (indipendenza delle date di nascita).

#### 1. Ambientazione Probabilistica

- **Definizione dell'insieme delle date:** Sia $D$ l'insieme delle date, con $|D| = 365$. Rappresentiamo i giorni dell'anno con numeri da 1 a 365.
- **Spazio campionario $\Omega$:** Le date di nascita di $n$ persone sono rappresentate da un elemento di $D^n$, quindi $\Omega = D^n$. La cardinalità di $\Omega$ è $|\Omega| = 365^n$.
- **Sigma algebra:** Scegliamo la sigma algebra più semplice, ovvero l'insieme delle parti di $\Omega$, denotato come $\mathcal{P}(\Omega)$.
- **Funzione di probabilità:** Assumendo l'equiprobabilità degli elementi di $D^n$, la probabilità di un qualsiasi evento $A$ è data da: $$P(A) = \frac{|A|}{|\Omega|} = \frac{|A|}{365^n}$$

#### 2. Definizione dell'Evento di Interesse

- **Evento A:** Siamo interessati alle $n$-uple in cui almeno due persone condividono il compleanno. Formalmente: $$A = \set{(d_1, d_2, ..., d_n) \in D^n : \exists \ i, j \in {1, ..., n}, i \neq j \text{ tale che } d_i = d_j }$$ Questo significa che $A$ è l'insieme di tutte le possibili combinazioni di date di nascita per $n$ persone, dove almeno due persone hanno lo stesso compleanno.
- **Evento Complementare $A^c$:** È più facile calcolare la probabilità dell'evento complementare, cioè l'evento in cui tutte le $n$ persone hanno compleanni diversi. $$A^c = {(d_1, d_2, ..., d_n) \in D^n : d_i \neq d_j \ \forall \ i \neq j }$$ $A^c$ rappresenta tutte le $n$-uple in cui non ci sono compleanni in comune.

#### 3. Calcolo della Probabilità di $A^c$

La cardinalità di $A^c$ è data dal numero di disposizioni semplici di $n$ elementi scelti da un insieme di 365 elementi. Questo perché la prima persona può avere qualsiasi dei 365 giorni come compleanno, la seconda persona può avere uno dei rimanenti 364 giorni, e così via. Quindi: $$|A^c| = 365 \cdot 364 \cdot ... \cdot (365 - n + 1) = \frac{365!}{(365 - n)!}$$ La probabilità di $A^c$ è quindi: $$P(A^c) = \frac{|A^c|}{365^n} = \frac{365!}{(365 - n)! \cdot 365^n}$$

#### 4. Calcolo della Probabilità di A

La probabilità dell'evento $A$ (almeno due persone con lo stesso compleanno) è il complemento a 1 della probabilità di $A^c$: $$P(A) = 1 - P(A^c) = 1 - \frac{365!}{(365 - n)! \cdot 365^n}$$ che può essere riscritta come $$ P(A) = 1 - \frac{365}{365} \cdot \frac{364}{365} \cdot \frac{363}{365} \cdot ... \cdot \frac{365 - n + 1}{365} $$

#### 5. Determinazione del Valore di n

Vogliamo trovare il minimo $n$ tale che $P(A) \geq \frac{1}{2}$. Questo equivale a trovare $n$ tale che: $$1 - \frac{365!}{(365 - n)! \cdot 365^n} \geq \frac{1}{2}$$ che può essere riscritto come: $$ \frac{365}{365} \cdot \frac{364}{365} \cdot ... \cdot \frac{365 - n + 1}{365} \leq \frac{1}{2} $$ o equivalentemente $$ \prod_{i=1}^{n-1} \left( 1 - \frac{i}{365} \right) \leq \frac{1}{2} $$ Questa equazione non ha una soluzione analitica semplice, ma può essere risolta numericamente.

#### 6. Soluzione Numerica

Calcolando i valori di $P(A)$ per diversi $n$, si trova che:

- Per $n = 22$, $P(A) \approx 0.476$
- Per $n = 23$, $P(A) \approx 0.507$

Quindi, il numero minimo di persone necessarie affinché la probabilità che almeno due di loro condividano il compleanno sia maggiore del 50% è 23. Questo risultato è controintuitivo, da cui il nome "paradosso dei compleanni".

#### 7. Successione Decrescente (Esercizio di Analisi 1)

Definiamo $a_n$ come: $$ a_n = \prod_{i=1}^{n-1} \left( 1 - \frac{i}{365} \right) $$ $a_n$ è una successione decrescente. Questo significa che man mano che $n$ aumenta, il valore di $a_n$ diminuisce. Quando $a_n$ scende sotto $\frac{1}{2}$, continua a diminuire. Questo permette di localizzare la soluzione usando un algoritmo di bisezione.

___


### Problema 8 Probabilità nelle mani di poker all'italiana


### Impostazione del problema probabilistico

Per risolvere un esercizio di probabilità, è fondamentale definire l'**ambientazione probabilistica** in modo rigoroso. Questo include la definizione dello spazio campionario, della sigma-algebra e della funzione di probabilità.

#### Spazio campionario ($\Omega$)

- $\Omega$ è l'insieme di tutte le mani possibili nel poker.
    
- L'ordine delle carte in una mano non conta. Pertanto, si utilizzano le combinazioni.
    
- La cardinalità di $\Omega$ è il numero di combinazioni di 5 carte scelte da un mazzo di 52 carte:
    
    $|\Omega| = \binom{52}{5}$.
    

#### Sigma-algebra ($\Sigma$)

- Si utilizza la sigma-algebra delle parti discreta uniforme su $\Omega$ (la più logica da usare in questi casi ).
- Questo significa che ogni sottoinsieme di $\Omega$ è misurabile.

#### Funzione di probabilità ($P$)

- La probabilità di un evento $A$ è data da:
    
    $P(A) = \frac{|A|}{|\Omega|}$
    
    dove $|A|$ è la cardinalità dell'insieme $A$.
    

### Definizione delle carte

Ogni carta è identificata da due parametri:

- **Tipo**: Il valore della carta (2-10, Jack, Queen, King, Ace). Ci sono 13 tipi possibili.
- **Seme**: Il seme della carta (Cuori, Quadri, Fiori, Picche). Ci sono 4 semi possibili.

### Calcolo della probabilità di diverse mani

#### Full
![[Pasted image 20250304173533.png]]
Un **full** è una mano composta da tre carte dello stesso tipo (tris) e due carte dello stesso tipo, diverso dal tris.

1. **Scelta dei tipi per il tris e la coppia**:
    - Ci sono 13 modi per scegliere il tipo per il tris e poi 12 per la coppia, perché deve essere diverso. Quindi $13 \cdot 12$. L'ordine è importante, quindi sono disposizioni semplici.
2. **Scelta dei semi**:
    - Ci sono $\binom{4}{3}$ modi per scegliere i semi per il tris.
    - Ci sono $\binom{4}{2}$ modi per scegliere i semi per la coppia.
3. **Calcolo della probabilità**:

$P(\text{Full}) = \frac{13 \cdot 12 \cdot \binom{4}{3} \cdot \binom{4}{2}}{\binom{52}{5}} = \frac{13 \cdot 12 \cdot 4 \cdot 6}{2598960} = \frac{3744}{2598960} \approx 0.00144$

Ci sono $3744$ full distinti.

#### Doppia coppia
![[Pasted image 20250304173548.png]]
Una **doppia coppia** è una mano con due coppie di carte dello stesso tipo e una quinta carta di tipo diverso.

1. **Scelta dei tipi per le coppie e la carta extra**:
    - Ci sono $\binom{13}{2}$ modi per scegliere i tipi per le due coppie. L'ordine non è rilevante, quindi sono combinazioni.
    - Ci sono 11 modi per scegliere il tipo della quinta carta, perché deve essere diverso dai tipi delle coppie.
2. **Scelta dei semi**:
    - Ci sono $\binom{4}{2}$ modi per scegliere i semi per ogni coppia.
    - Ci sono 4 modi per scegliere il seme della quinta carta.
3. **Calcolo della probabilità**:

$P(\text{Doppia Coppia}) = \frac{\binom{13}{2} \cdot 11 \cdot \binom{4}{2} \cdot \binom{4}{2} \cdot 4}{\binom{52}{5}} = \frac{78 \cdot 11 \cdot 6 \cdot 6 \cdot 4}{2598960} = \frac{123552}{2598960} \approx 0.0475$

#### Scala Reale Massima
![[Pasted image 20250304173559.png]]
Una **scala reale massima** (scala reale) è una mano composta da 10, Jack, Queen, King e Asso dello stesso seme.

1. **Scelta dei semi**:
    - Ci sono 4 modi per scegliere il seme della scala reale.
2. **Calcolo della probabilità**:

$P(\text{Scala Reale}) = \frac{4}{\binom{52}{5}} = \frac{4}{2598960} \approx 0.00000154$

#### Colore
![[Pasted image 20250304173913.png]]
Un **colore** è composto da cinque carte dello stesso seme, ma non in sequenza.

1. **Scelta del seme**:
    
    Ci sono 4 modi per scegliere il seme.
    
2. **Scelta dei tipi**:
    
    Ci sono $\binom{13}{5}$ modi per scegliere 5 tipi diversi da quel seme.
    
3. **Calcolo della probabilità**:
    

$P(\text{Colore}) = \frac{\binom{13}{5} \cdot 4}{\binom{52}{5}} = \frac{1287 \cdot 4}{2598960} \approx 0.00197$

#### References
[[appunti Prob- ese02.pdf]]