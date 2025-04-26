---
title: mateNum  Lez14
description: Appunto automatico
---

2025-03-19 15:08

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags. [[sbobine]]  [[matematica numerica]]

## mateNum- Lez14

### Sistemi Rettangolari (Sistemi Indeterminati)

- **Introduzione** Generalmente, nei corsi si affrontano sistemi lineari con un numero uguale di equazioni e incognite. Tuttavia, esistono sistemi in cui il numero di equazioni è diverso dal numero di incognite. Questi sono chiamati sistemi rettangolari o sistemi indeterminati. Si parla sempre di sistemi nella forma matriciale $Ax = b$.
    
- **Dimensioni degli Oggetti nel Sistema $Ax=b$** In questo contesto, la matrice $A$ non è quadrata, ma ha dimensioni $m \times n$.
    
    - La matrice $A \in \mathbb{R}^{m \times n}$.
    - Il termine noto $b \in \mathbb{R}^m$.
    - Il vettore delle incognite $x \in \mathbb{R}^n$. Di conseguenza, la matrice $A$ e i vettori $x$ e $b$ non appartengono necessariamente agli stessi spazi.
- **Classificazione dei Sistemi Rettangolari** La relazione tra $m$ (numero di equazioni) e $n$ (numero di incognite) determina due casi principali.
    
    1. **Caso Sottodeterminato ($m < n$)**
        
        - In questo caso, il numero di equazioni ($m$) è minore del numero di incognite ($n$).
        - La matrice $A$ ha meno righe che colonne.
        - Geometricamente, questo può essere paragonato a chiedere a una retta di passare per un solo punto; ci sono infinite rette che soddisfano questa condizione.
        - In generale, mancano informazioni per garantire esistenza e unicità della soluzione classica. Si è "sotto misure".
    ![[Pasted image 20250425085504.png]]
    2. **Caso Sovradeterminato ($m > n$)**
        
        - In questo caso, il numero di equazioni ($m$) è maggiore del numero di incognite ($n$).
        - La matrice $A$ ha più righe che colonne.
        - Geometricamente, questo può essere paragonato a chiedere a una retta di passare per 100 punti anziché per i due necessari a definirla univocamente. C'è una "sovrabbondanza di informazioni".
        - In generale, ci sono troppe richieste.
    ![[Pasted image 20250425085600.png]]
- **Soluzione Classica e Sistemi Indeterminati** In generale, un sistema indeterminato (sia sovra che sottodeterminato) **non ha una soluzione nel senso classico** del termine. La definizione di soluzione deve essere modificata per dare significato alla scrittura $Ax=b$.
    
    - **Condizione per l'Esistenza di una Soluzione Classica:** L'unica eccezione in cui un sistema indeterminato può avere una soluzione nel senso classico è se il termine noto $b$ appartiene al **range di A**.
    - **Definizione di Range(A):** Il range di A (o spazio delle immagini di A) è l'insieme di tutti i vettori $y \in \mathbb{R}^m$ per i quali esiste almeno un vettore $x \in \mathbb{R}^n$ tale che $Ax = y$. Se $b \in Range(A)$, allora esiste almeno una $x$ tale che $Ax=b$.
![[Pasted image 20250425085639.png]]
### Modifica della Definizione di Soluzione

- **Necessità di un Nuovo Concetto di Soluzione** Poiché i sistemi indeterminati spesso non ammettono soluzioni nel senso classico, è necessario modificare la definizione di "soluzione".
    
    - Nel caso sottodeterminato ($m < n$), si tenderà verso una definizione "vincolata".
    - Nel caso sovradeterminato ($m > n$), si tenderà verso una definizione basata sull'approssimazione nel senso dei minimi quadrati. Questo è l'argomento su cui ci si concentra inizialmente.
- **Richiamo (non direttamente applicato alla nuova definizione): Teorema di Rouché-Capelli** Il teorema di Rouché-Capelli è il teorema classico per l'analisi dell'esistenza e unicità delle soluzioni per sistemi lineari, incluse configurazioni non quadrate nel senso classico.
    
    - **Schemino riassuntivo:** Dato il sistema $Ax=b$:
        - Se $rank(A) \neq rank([A|b])$ (dove $[A|b]$ è la matrice orlata con il vettore b): 
	          - **Non ci sono soluzioni** (nel senso classico).
        - Se $rank(A) = rank([A|b])$: Ci sono soluzioni. In questo caso, ci sono due sottocasi:
            - Se $rank(A) = n$ (numero di incognite/colonne di A): C'è **una e una sola soluzione**.
            - Se $rank(A) < n$: Ci sono **infinite soluzioni**.
    - Il rango di A gioca un ruolo fondamentale nell'esistenza e unicità della soluzione classica.

### Soluzione nel Senso dei Minimi Quadrati per Sistemi Sovradeterminati ($m > n$)

- **Nuova Definizione** Dato un sistema sovradeterminato $Ax = b$, un vettore $x^* \in \mathbb{R}^n$ è detto **soluzione nel senso dei minimi quadrati** se minimizza la norma al quadrato del residuo $Ax - b$.
    
    - In termini matematici: $\bar x$ è la soluzione nel senso dei minimi quadrati se $\bar x$ è l'argomento che minimizza la quantità $||Ax - b||^2$ al variare di $x \in \mathbb{R}^n$.
    - Si scrive: $x^* = \arg\min_{x \in \mathbb{R}^n} ||Ax - b||^2$.
      ![[Pasted image 20250425091136.png]]
    - Questa definizione equivale a dire che $||Ax^* - b||^2 \le ||Ax - b||^2$ per ogni $x \in \mathbb{R}^n$.
![[Pasted image 20250425091112.png]]
- **Trovare il Vettore che Minimizza: Metodo del Gradiente** Per trovare il vettore $\bar x$ che minimizza la funzione $f(x) = \frac{1}{2}||Ax - b||^2$ (la costante $\frac{1}{2}$ non cambia la posizione del minimo), si può utilizzare il metodo del gradiente, ponendo il gradiente della funzione uguale a zero nel punto di minimo $\bar x$.
    
    - **Dimostrazione: Calcolo del Gradiente di $f(x)$** 
      Per trovare il vettore $x^*$ che realizza questo minimo, si considera la funzione obiettivo $f(\mathbf{x}) = \frac{1}{2}|\mathbf{A}\mathbf{x} - \mathbf{b}|^2$. Il minimo di questa funzione, essendo una funzione quadratica e convessa, si trova imponendo che il suo **gradiente, valutato in $x^*$, sia uguale al vettore nullo**: $$ \nabla f(\mathbf{x}^*) = \mathbf{0} \quad $$ Procediamo con il calcolo del gradiente. La funzione $f(\mathbf{x})$ può essere scritta usando il prodotto scalare: $$ f(\mathbf{x}) = \frac{1}{2} (\mathbf{A}\mathbf{x} - \mathbf{b})^{\top} (\mathbf{A}\mathbf{x} - \mathbf{b}) \quad $$ Espandendo il prodotto matriciale: $$ f(\mathbf{x}) = \frac{1}{2} (\mathbf{x}^{\top}\mathbf{A}^{\top}\mathbf{A}\mathbf{x} - \mathbf{x}^{\top}\mathbf{A}^{\top}\mathbf{b} - \mathbf{b}^{\top}\mathbf{A}\mathbf{x} + \mathbf{b}^{\top}\mathbf{b}) \quad $$ Poiché $\mathbf{x}^{\top}\mathbf{A}^{\top}\mathbf{b}$ e $\mathbf{b}^{\top}\mathbf{A}\mathbf{x}$ sono scalari e uno è il trasposto dell'altro, sono uguali ($\mathbf{x}^{\top}\mathbf{A}^{\top}\mathbf{b} = (\mathbf{b}^{\top}\mathbf{A}\mathbf{x})^{\top} = \mathbf{b}^{\top}\mathbf{A}\mathbf{x}$). Combinando i termini: $$ f(\mathbf{x}) = \frac{1}{2} (\mathbf{x}^{\top}\mathbf{A}^{\top}\mathbf{A}\mathbf{x} - 2\mathbf{x}^{\top}\mathbf{A}^{\top}\mathbf{b} + \mathbf{b}^{\top}\mathbf{b}) \quad $$ Calcolando il gradiente di $f(\mathbf{x})$ rispetto al vettore $\mathbf{x}$: $$ \nabla f(\mathbf{x}) = \frac{1}{2} (2\mathbf{A}^{\top}\mathbf{A}\mathbf{x} - 2\mathbf{A}^{\top}\mathbf{b} + \mathbf{0}) = \mathbf{A}^{\top}\mathbf{A}\mathbf{x} - \mathbf{A}^{\top}\mathbf{b} \quad $$ Imponendo che il gradiente sia nullo nel punto di minimo $x^*$: $$ \nabla f(x^*) = \mathbf{A}^{\top}\mathbf{A}\mathbf{x}^* - \mathbf{A}^{\top}\mathbf{b} = \mathbf{0} \quad $$ Si ottiene il sistema lineare noto come **sistema delle equazioni normali**: $$ \mathbf{A}^{\top}\mathbf{A}\mathbf{x}^* = \mathbf{A}^{\top}\mathbf{b} \quad $$ Questo è un sistema lineare con una matrice quadrata $\mathbf{B} = \mathbf{A}^{\top}\mathbf{A}$ di dimensioni $n \times n$ e un vettore termine noto $\mathbf{F} = \mathbf{A}^{\top}\mathbf{b}$. È un sistema "determinato" del tipo $\mathbf{B}\mathbf{x}^* = \mathbf{F}$.
![[Pasted image 20250425091522.png]]


- **Esistenza e Unicità della Soluzione delle Equazioni Normali** Un sistema quadrato $B x^* = F$ ha una soluzione unica se e solo se la matrice $B$ è invertibile. Nel nostro caso, $B = A^T A$.
    
    - **Proposizione:** La matrice $A^T A$ è invertibile se e solo se il rango della matrice $A$ è uguale al numero delle sue colonne ($n$). Cioè, $A^T A$ è invertibile $\iff rank(A) = n$.
    - Questa condizione $rank(A) = n$ significa che le colonne della matrice $A$ sono linearmente indipendenti.
    - Pertanto, la soluzione nel senso dei minimi quadrati $x^*$ esiste ed è unica se e solo se la matrice $A$ ha rango massimo per colonne ($rank(A)=n$).
      
- **Proprietà della Matrice $A^T A$** Se $A$ ha rango massimo per colonne ($rank(A) = n$), allora la matrice $A^T A$ non è solo invertibile, ma è anche **simmetrica definita positiva (SPD)**. 
    
    - Simmetrica: $(A^T A)^T = A^T (A^T)^T = A^T A$.
    - Definita Positiva (quando rank(A)=n): Per ogni vettore non nullo $z$, $z^T (A^T A) z = (Az)^T (Az) = ||Az||^2 > 0$. È maggiore di zero perché se $Az=0$, dato che $A$ ha colonne linearmente indipendenti (perché $rank(A)=n$), l'unica soluzione è $z=0$. Quindi per $z \neq 0$, $Az \neq 0$ e $||Az||^2 > 0$.
- **Metodi di Risoluzione per il Sistema delle Equazioni Normali** Dato che la matrice $A^T A$ è SPD (assumendo $rank(A)=n$), si possono utilizzare metodi specifici e efficienti per risolvere il sistema $A^T A x^* = A^T b$.
    
    - **Metodo Diretto:** Scomposizione di Cholesky.
    - **Metodo Iterativo:** Metodo del Gradiente Coniugato (o altri metodi della famiglia del gradiente, come il Gradiente). Il Gradiente Coniugato è generalmente preferibile perché più "furbo".
      ![[Pasted image 20250425092109.png]]
- **Connessione con Argomenti Precedenti** Il sistema $A^T A x^* = A^T b$ è chiamato **sistema delle equazioni normali**. Questo stesso nome è stato usato precedentemente (ad esempio, nel contesto della regressione lineare o polinomiale con minimi quadrati). Esiste un legame tra il sistema discusso qui e quello utilizzato per la retta di regressione.
    
- **Problemi Numerici con le Equazioni Normali** Sebbene la trasformazione nel sistema $A^T A x^* = A^T b$ sembri vantaggiosa perché produce un sistema quadrato, presenta seri problemi a causa degli **errori di arrotondamento (floating-point errors)**.
    
    - **Criticità:** L'accumulazione degli errori di arrotondamento può causare due problemi principali:
        
        1. La matrice $A^T A$ calcolata in floating-point potrebbe **non risultare SDP**.
        2. Ancora peggio, anche se $A$ ha rango massimo per colonne in aritmetica esatta, la matrice $A^T A$ calcolata in floating-point potrebbe **perdere l'invertibilità**, diventando singolare.
           
    - **Esempio del Problema Numerico:** Consideriamo una semplice matrice $A$ di dimensioni $3 \times 2$: $A = \begin{pmatrix} 1 & 1 \\ 2^{-27} & 0 \\ 0 & 2^{-27} \end{pmatrix}$ In aritmetica esatta, questa matrice ha rango 2 (le colonne sono linearmente indipendenti), quindi $rank(A)=n=2$. In teoria, $A^T A$ dovrebbe essere invertibile. Calcoliamo $A^T A$: $A^T = \begin{pmatrix} 1 & 2^{-27} & 0 \\ 0 & 0 & 2^{-27} \end{pmatrix}$ $A^T A = \begin{pmatrix} 1 & 2^{-27} & 0 \\ 0 & 0 & 2^{-27} \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 2^{-27} & 0 \\ 0 & 2^{-27} \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + 2^{-27} \cdot 2^{-27} + 0 \cdot 0 & 1 \cdot 0 + 2^{-27} \cdot 0 + 0 \cdot 2^{-27} \\ 0 \cdot 1 + 0 \cdot 2^{-27} + 2^{-27} \cdot 0 & 0 \cdot 0 + 0 \cdot 0 + 2^{-27} \cdot 2^{-27} \end{pmatrix}$ $A^T A = \begin{pmatrix} 1 + 2^{-54} & 0 \ 0 & 2^{-54} \end{pmatrix}$ In aritmetica esatta, questa matrice è diagonale e invertibile. Tuttavia, se si calcola la rappresentazione in floating-point (ad esempio, in singola precisione dove l'epsilon di macchina è circa $2^{-24}$), valori molto piccoli come $2^{-54}$ possono essere considerati zero rispetto all'unità. La rappresentazione floating-point di $A^T A$ potrebbe risultare: $fl(A^T A) = \begin{pmatrix} 1 & 0 \ 0 & 0 \end{pmatrix}$ Questa matrice floating-point è singolare (non invertibile) perché ha una riga (o colonna) di zeri. Questo dimostra che, a causa degli errori di arrotondamento, il metodo delle equazioni normali può fallire nel fornire una matrice invertibile, anche per matrici $A$ piccole e apparentemente ben condizionate.
        ![[Pasted image 20250425092345.png]]
- **Conclusione: La Strada delle Equazioni Normali è Problematicamente** Sebbene la trasformazione in un sistema quadrato $A^T A x^* = A^T b$ sia un primo passo, questo sistema è "fortemente problematico" dal punto di vista numerico a causa degli errori di arrotondamento. Pertanto, calcolare $x^*$ risolvendo direttamente il sistema delle equazioni normali **non è la strada giusta**.
    

### Metodo Alternativo: Fattorizzazione QR

- Dato che il metodo basato sulle Equazioni Normali è numericamente instabile, è necessario un approccio differente per calcolare $x^*$.
- Questo approccio alternativo sarà la **fattorizzazione QR** 
  
  ___

### Fattorizzazione QR

Si parla della fattorizzazione QR, spesso menzionata quando si studiano gli autovalori. Si tratta di un concetto diverso dalla fattorizzazione di Cholesky e dal gradiente coniugato.

#### Definizione di Fattorizzazione QR

Sia $A$ una matrice in $\mathbb{R}^{m \times n}$ con un numero di righe maggiore del numero di colonne 
($m > n$).

Si dice che la matrice $A$ ammette una **fattorizzazione QR** se esistono:

1. Una matrice $Q \in \mathbb{R}^{m \times m}$ che è **ortogonale**. Una matrice è ortogonale se la sua trasposta coincide con la sua inversa, ovvero $Q^T Q = Q Q^T = I$, dove $I$ è la matrice identità.
2. Una matrice $R \in \mathbb{R}^{m \times n}$ che è **trapezoidale**.

La relazione che lega queste matrici è $A = QR$.

#### Struttura della Matrice R

La matrice $R$ ha dimensioni $m \times n$, le stesse della matrice $A$. La sua struttura è **triangolare superiore** nella sottoparte quadrata di dimensioni $n \times n$ e contiene un blocco di zeri nelle righe da $n+1$ a $m$.

Graficamente, la matrice $A$ ($m \times n$) è il prodotto di $Q$ ($m \times m$) e $R$ ($m \times n$): $A_{m \times n} = Q_{m \times m} R_{m \times n}$

La matrice $R$ ha la seguente struttura: $R = \begin{bmatrix} R_{n \times n}^{superiore} \ \mathbf{0}_{(m-n) \times n} \end{bmatrix}$ dove $R_{n \times n}^{superiore}$ è una matrice triangolare superiore di dimensione $n \times n$, e $\mathbf{0}_{(m-n) \times n}$ è un blocco di zeri di dimensione $(m-n) \times n$. Le entrate dalla riga $n+1$ alla riga $m$ sono identicamente nulle. Questa struttura la rende "trapezoidale".
![[Pasted image 20250425092643.png]]
#### Problema dell'Unicità della Fattorizzazione QR

La fattorizzazione QR di una matrice $A$ **esiste sempre**, ma il problema è che **non è unica**. Avere un oggetto che può essere rappresentato in modi diversi non è sempre agevole, specialmente se si intende utilizzare questa fattorizzazione per trovare la soluzione ai minimi quadrati ($x^*$).

#### Introduzione alla Fattorizzazione QR Ridotta

Per ovviare al problema dell'unicità, si utilizza una **versione ridotta** della fattorizzazione QR. Questa versione ridotta si ottiene ritagliando parti delle matrici $Q$ e $R$ originali.

La fattorizzazione QR ridotta esiste e, in certe condizioni, è **unica**. Questa fattorizzazione ridotta verrà poi utilizzata per calcolare $x^*$.

#### Condizioni per l'Unicità della Fattorizzazione QR Ridotta

La fattorizzazione QR ridotta esiste e risulta **unica** quando sono soddisfatte due condizioni:

1. Il **rango** della matrice $A$ è **massimo**, cioè è uguale a $n$.
2. Tutte le entrate sulla **diagonale principale** della matrice $\tilde{R}$ (la parte ridotta di R) risultano essere **strettamente positive**.

#### Definizione di Fattorizzazione QR Ridotta

Supponiamo di avere una matrice $A \in \mathbb{R}^{m \times n}$ con $m > n$ e con rango pari a $n$. Supponiamo inoltre di conoscere la fattorizzazione QR di $A$, ovvero $A = QR$.

Esiste **unica** (sotto le condizioni menzionate) una fattorizzazione ridotta che permette di scrivere $A$ come prodotto di due oggetti, chiamati $\tilde{Q}$ e $\tilde{R}$: $A = \tilde{Q} \tilde{R}$

Dove:

- $\tilde{Q}$ è una matrice in $\mathbb{R}^{m \times n}$.
- $\tilde{R}$ è una matrice in $\mathbb{R}^{n \times n}$.

#### Come ottenere $\tilde{Q}$ e $\tilde{R}$ dalla Fattorizzazione QR standard

$\tilde{Q}$ e $\tilde{R}$ si ottengono come sottoparti di $Q$ e $R$:

1. **Matrice $\tilde{Q}$**: $\tilde{Q}$ è la sottoporzione di $Q$ che ha la stessa dimensionalità di $A$, ovvero $m \times n$. Si ottiene prendendo le prime $m$ righe e le prime $n$ colonne di $Q$. In notazione Matlab-style: $\tilde{Q} = Q(1:m, 1:n)$. Questo significa prendere tutte le righe (dalla 1 alla m) e le prime $n$ colonne (dalla 1 alla n) della matrice $Q$. Questa parte è il pezzo di $Q$ che non corrisponde al blocco di zeri in $R$.
    
2. **Matrice $\tilde{R}$**: $\tilde{R}$ è la porzione "informativa" di $R$. Si ottiene selezionando le prime $n$ righe e le prime $n$ colonne di $R$. In notazione Matlab-style: $\tilde{R} = R(1:n, 1:n)$. Questo significa prendere le prime $n$ righe (dalla 1 alla n) e le prime $n$ colonne (dalla 1 alla n) della matrice $R$. Questa parte corrisponde alla sottoparte triangolare superiore di $R$. $\tilde{R}$ ha dimensione $n \times n$ ed è triangolare superiore.
![[Pasted image 20250425092932.png]]

#### Proprietà della Fattorizzazione QR Ridotta

La fattorizzazione $A = \tilde{Q} \tilde{R}$ ha diverse proprietà importanti, oltre all'unicità (sotto le condizioni specificate):

1. **Unicità**: Come già detto, sotto le condizioni di rango massimo per $A$ e positività delle entrate diagonali di $\tilde{R}$, la fattorizzazione ridotta è unica.
2. **Ortonormalità delle Colonne di $\tilde{Q}$**: Le colonne della matrice $\tilde{Q}$ sono **ortonormali**. Questo significa che sono ortogonali tra loro e hanno norma unitaria. La proprietà di ortonormalità è utile per costruire una base. Le colonne di $\tilde{Q}$ formano una base per lo spazio immagine (o "range") della matrice $A$. Le colonne di $\tilde{Q}$ hanno $m$ entrate.
3. **Relazione con la Fattorizzazione di Cholesky**: Il fattore $\tilde{R}$ coincide con il fattore triangolare superiore (chiamato $R$) della **fattorizzazione di Cholesky** della matrice $A^T A$. La fattorizzazione di Cholesky si applica a matrici simmetriche e definite positive (SDP) e spacchetta una matrice $M$ come $M = R^T R$ (o $LL^T$). La matrice $A^T A$ è una matrice SDP. Quindi, $\tilde{R}$ è tale che $A^T A = \tilde{R}^T \tilde{R}$. Questo lega la fattorizzazione QR ridotta alla fattorizzazione di Cholesky, un altro strumento per analizzare matrici.
![[Pasted image 20250425093212.png]]
#### Calcolo Pratico della Fattorizzazione QR

Il calcolo effettivo dei fattori $Q$ e $R$ (e di conseguenza $\tilde{Q}$ e $\tilde{R}$) **non è semplice** e non viene dettagliato esplicitamente nelle fonti fornite, al di là di menzionare gli strumenti pratici.

- **Comando Matlab**: Per essere pragmatici, esiste un comando built-in in Matlab chiamato `qr` che calcola questi oggetti. Questo comando può fornire sia la fattorizzazione estesa che quella ridotta; se fornisce quella estesa, si possono semplicemente ritagliare i pezzi necessari.
- **Algoritmo Sottostante**: Dietro la costruzione di questi fattori c'è un algoritmo che dovrebbe essere conosciuto, l'**algoritmo di ortonormalizzazione di Gram-Schmidt**. Questo algoritmo si applica alle colonne della matrice $A$ per ottenere le colonne ortonormali. Gram-Schmidt prende un insieme di vettori e li trasforma in una base ortonormale.
- **Costo Computazionale**: Il costo computazionale dell'algoritmo di Gram-Schmidt per ottenere la fattorizzazione QR è dell'ordine di $O(m n^2)$. Questo costo è proporzionale alla dimensione più grande ($m$) e al quadrato della dimensione più piccola ($n$).

#### Utilizzo della Fattorizzazione QR Ridotta per la Soluzione ai Minimi Quadrati ($x^*$)

L'obiettivo principale dell'introduzione della fattorizzazione QR ridotta è trovare la **soluzione ai minimi quadrati** $\bar x$ del sistema lineare sovradeterminato $Ax = b$. Sappiamo che $\bar x$ è la soluzione del sistema delle equazioni normali $A^T A x = A^T b$.

#### Teorema sulla Soluzione $x^*$ tramite Fattorizzazione QR Ridotta

**Proposizione (Teorema sulla soluzione $x^*$ tramite QR ridotta)**

Sia $A \in \mathbb{R}^{m \times n}$ con $m > n$ e supponiamo che $A$ sia una matrice di **rango pieno**, ovvero $\text{rank}(A) = n$.

Allora, la soluzione del sistema delle equazioni normali $A^T A x = A^T b$ esiste ed è unica, denotata con $x^*$.

Una **espressione esplicita** per $\bar x$ è data da: $\bar x = \tilde{R}^{-1} \tilde{Q}^T b$

Questa espressione mostra che $x^*$ può essere calcolata usando i fattori della fattorizzazione QR ridotta, senza ricorrere alla fattorizzazione di Cholesky o al gradiente coniugato.

Inoltre, il **valore della norma al quadrato del residuo** $r = b - A \bar x$ calcolato in $\bar x$ può essere quantificato. La norma euclidea del residuo, $|b - A x^*|$, coincide con la norma euclidea del sottovettore ottenuto prendendo le ultime $m-n$ entrate del vettore $Q^T b$. $|b - A x^*|^2 = \sum_{i=n+1}^{m} (Q^T b)_i^2$ dove $(Q^T b)_i$ è l'i-esima componente del vettore $Q^T b$. C'è un dubbio nella fonte se debba essere $Q$ o $\tilde{Q}$ in questa formula del residuo, ma l'indicazione è che sia $Q$.

#### Passaggi Pratici per Calcolare $x^*$ (utilizzando Matlab)

In pratica, per calcolare $x^*$, si seguono questi passi:

1. **Calcolare la fattorizzazione QR**: Usare il comando `qr` in Matlab per ottenere la fattorizzazione QR di $A$ (anche quella estesa va bene).
2. **Ottenere i fattori ridotti**: Se si ottiene la fattorizzazione estesa $A=QR$, ricavare $\tilde{Q}$ e $\tilde{R}$ ritagliando i pezzi appropriati (prime $n$ colonne di $Q$ per $\tilde{Q}$, prime $n \times n$ entrate di $R$ per $\tilde{R}$).
3. **Costruire il termine noto modificato**: Calcolare il vettore $\tilde{Q}^T b$.
4. **Risolvere il sistema triangolare**: Invece di calcolare l'inversa di $\tilde{R}$ (che è computazionalmente costosa e meno stabile), si risolve il sistema lineare $\tilde{R} x^* = \tilde{Q}^T b$ per trovare $x^*$.
5. **Metodo di Sostituzione all'Indietro**: Dato che $\tilde{R}$ è una matrice triangolare superiore di dimensione $n \times n$, questo sistema lineare può essere risolto in modo efficiente e stabile utilizzando il metodo delle **sostituzioni all'indietro** (o backward substitution).

Quindi, in sintesi, calcolare $x^*$ utilizzando la fattorizzazione QR ridotta implica l'uso del comando QR, l'eventuale ritaglio dei fattori, e la risoluzione di un sistema lineare triangolare con il metodo delle sostituzioni all'indietro.
![[Pasted image 20250425093621.png]]
#### Dimostrazione Parziale della Formula per $x^*$
#### Caso 1: Matrice $A$ a Rango Massimo

Quando la matrice $A$ ha **rango massimo** (cioè, il rango è uguale a $n$), è possibile utilizzare la fattorizzazione QR.

##### Utilizzo della Fattorizzazione QR

La **fattorizzazione QR** permette di scrivere $A$ come il prodotto di una matrice ortogonale $Q$ ($m \times m$) e una matrice $R$ ($m \times n$). La matrice $R$ ha una struttura particolare: la parte superiore $n \times n$, denotata $R_{\text{tilde}}$, è triangolare superiore e invertibile, mentre le restanti $m-n$ righe sono composte da zeri.

$A = QR$

dove $Q$ è ortogonale ($Q^T Q = I$) e $R = \begin{bmatrix} R_{\text{tilde}} \ 0 \end{bmatrix}$ con $R_{\text{tilde}} \in \mathbb{R}^{n \times n}$ triangolare superiore e invertibile.

##### Applicazione della Rotazione $Q^T$ e Preservazione della Norma (Dimostrazione/Spiegazione)

Si considera la norma del vettore residuo $\left|Ax - b\right|$. Un'operazione chiave è l'applicazione della matrice ortogonale $Q^T$ al vettore $Ax - b$. Geometricamente, moltiplicare per una matrice ortogonale come $Q^T$ corrisponde a una **rotazione**, e le rotazioni **preservano la lunghezza (norma euclidea)** di un vettore.

Pertanto, la norma del vettore $Ax - b$ è uguale alla norma del vettore $(Q^T)(Ax - b)$:

$\left|Ax - b\right| = \left|Q^T(Ax - b)\right|$

Elevando al quadrato (poiché minimizzare la norma è equivalente a minimizzare il quadrato della norma), si ha:

$\left|Ax - b\right|^2 = \left|Q^T(Ax - b)\right|^2$

Si distribuisce $Q^T$:

$\left|Q^T(Ax - b)\right|^2 = \left|Q^TAx - Q^Tb\right|^2$

Sostituendo $A = QR$ e usando la proprietà di ortogonalità $Q^TQ = I$:

$\left|Q^T(QRx) - Q^Tb\right|^2 = \left|(Q^TQ)Rx - Q^Tb\right|^2 = \left|IRx - Q^Tb\right|^2 = \left|Rx - Q^Tb\right|^2$

Quindi, il problema di minimizzare $\left|Ax - b\right|^2$ è equivalente a minimizzare $\left|Rx - Q^Tb\right|^2$.

##### Scomposizione della Norma in Blocchi (Spiegazione)

Ora, si analizza la struttura del vettore $Rx - Q^Tb$.

La matrice $R$ è $m \times n$ con la struttura a blocchi $\begin{bmatrix} R_{\text{tilde}} \ 0 \end{bmatrix}$ dove $R_{\text{tilde}}$ è $n \times n$ e 0 è un blocco di zeri $(m-n) \times n$. Quando si moltiplica $R$ per il vettore $x$ ($n \times 1$), si ottiene un vettore $m \times 1$:

$Rx = \begin{bmatrix} R_{\text{tilde}} \ 0 \end{bmatrix} x = \begin{bmatrix} R_{\text{tilde}}x \ 0 \end{bmatrix}$

La matrice $Q^T$ è $m \times m$. Il vettore $b$ è $m \times 1$. Il prodotto $Q^Tb$ è un vettore $m \times 1$. Si può partizionare $Q^T$ (o $Q^Tb$) in due blocchi verticali in corrispondenza della dimensione $n$. Il primo blocco corrisponde alle prime $n$ righe di $Q^T$, che sono le trasposte delle prime $n$ colonne di $Q$, denotate $Q_{\text{tilde}}^T$. Il secondo blocco corrisponde alle restanti $m-n$ righe di $Q^T$, denotate $Q_{\text{rem}}^T$.

$Q^Tb = \begin{bmatrix} Q_{\text{tilde}}^T \ Q_{\text{rem}}^T \end{bmatrix} b = \begin{bmatrix} Q_{\text{tilde}}^T b \ Q_{\text{rem}}^T b \end{bmatrix}$

Quindi, il vettore $Rx - Q^Tb$ è:

$Rx - Q^Tb = \begin{bmatrix} R_{\text{tilde}}x \ 0 \end{bmatrix} - \begin{bmatrix} Q_{\text{tilde}}^T b \ Q_{\text{rem}}^T b \end{bmatrix} = \begin{bmatrix} R_{\text{tilde}}x - Q_{\text{tilde}}^T b \ -Q_{\text{rem}}^T b \end{bmatrix}$

La norma euclidea al quadrato di questo vettore è la somma dei quadrati delle sue componenti. Poiché il vettore è diviso in due blocchi (il primo di dimensione $n$ e il secondo di dimensione $m-n$), la norma al quadrato si scompone nella somma delle norme al quadrato di questi due blocchi:

$\left|Rx - Q^Tb\right|^2 = \left|R_{\text{tilde}}x - Q_{\text{tilde}}^T b\right|^2 + \left|-Q_{\text{rem}}^T b\right|^2$

Poiché $\left|-v\right|^2 = \left|v\right|^2$, il secondo termine è $\left|Q_{\text{rem}}^T b\right|^2$.

$\left|Rx - Q^Tb\right|^2 = \left|R_{\text{tilde}}x - Q_{\text{tilde}}^T b\right|^2 + \left|Q_{\text{rem}}^T b\right|^2$

##### Determinazione della Soluzione (Derivazione)

Dobbiamo minimizzare $\left|R_{\text{tilde}}x - Q_{\text{tilde}}^T b\right|^2 + \left|Q_{\text{rem}}^T b\right|^2$ rispetto a $x$.

Il termine $\left|Q_{\text{rem}}^T b\right|^2$ non dipende da $x$. Pertanto, per minimizzare la somma totale, dobbiamo minimizzare il primo termine, $\left|R_{\text{tilde}}x - Q_{\text{tilde}}^T b\right|^2$.

La norma al quadrato di un vettore è sempre non negativa, e il suo valore minimo è zero. Possiamo rendere il primo termine uguale a zero se il sistema lineare $R_{\text{tilde}}x = Q_{\text{tilde}}^T b$ ha una soluzione.

Poiché $A$ ha rango massimo, la matrice $R_{\text{tilde}}$ (che è il fattore triangolare superiore della QR di $A$) è invertibile. Questo garantisce che il sistema $R_{\text{tilde}}x = Q_{\text{tilde}}^T b$ ha una soluzione unica.

La soluzione $x_{\text{star}}$ (o $x_{\text{tilde}}$ come inizialmente chiamato) che minimizza la norma del residuo è quella che soddisfa:

$R_{\text{tilde}}x_{\text{star}} = Q_{\text{tilde}}^T b$
![[Pasted image 20250425101249.png]]
Questa è un'equazione lineare quadrata $n \times n$ che può essere risolta per trovare $x_{\text{star}}$.

Il valore minimo del residuo al quadrato, ottenuto quando $x = x_{\text{star}}$, è:

$\min_{x} \left|Ax - b\right|^2 = \left|R_{\text{tilde}}x_{\text{star}} - Q_{\text{tilde}}^T b\right|^2 + \left|Q_{\text{rem}}^T b\right|^2$

Poiché $R_{\text{tilde}}x_{\text{star}} - Q_{\text{tilde}}^T b = 0$, il primo termine si annulla. Quindi:

$\min_{x} \left|Ax - b\right|^2 = 0^2 + \left|Q_{\text{rem}}^T b\right|^2 = \left|Q_{\text{rem}}^T b\right|^2$

Questo valore residuo minimo è $\left|Q_{\text{rem}}^T b\right|^2$.

Questo conclude il caso in cui la matrice $A$ ha rango pieno.

#### Caso 2: Matrice $A$ non ha Rango Pieno

A volte, la matrice $A$ in un sistema sovradeterminato non ha rango pieno, cioè il suo rango è minore di $n$. In questo caso, la procedura basata sulla fattorizzazione QR descritta sopra non funziona direttamente, in particolare $R_{\text{tilde}}$ non sarebbe invertibile.

##### Perdita di Unicità (Spiegazione)

Se $A$ non ha rango pieno, il **problema di minimizzazione della norma del residuo non ha una soluzione unica**. Se $x_{\text{star}}$ è un vettore che minimizza $\left|Ax - b\right|^2$, allora qualsiasi vettore della forma $x_{\text{star}} + z$, dove $z$ appartiene al **nucleo (kernel) di $A$** ($\text{ker}(A)$), è anch'esso un minimizzatore. Il nucleo di $A$ è l'insieme dei vettori $z$ tali che $Az = 0$.

Infatti, per $z \in \text{ker}(A)$:

$A(x_{\text{star}} + z) - b = Ax_{\text{star}} + Az - b = Ax_{\text{star}} + 0 - b = Ax_{\text{star}} - b$

Quindi, $\left|A(x_{\text{star}} + z) - b\right| = \left|Ax_{\text{star}} - b\right|$, il che significa che $x_{\text{star}} + z$ produce lo stesso residuo minimo. Poiché il nucleo non contiene solo il vettore nullo quando il rango non è pieno, esistono infiniti minimizzatori.

##### Recupero dell'Unicità tramite Vincolo Addizionale

Quando un problema ha molteplici soluzioni che raggiungono lo stesso risultato ottimale (in questo caso, il minimo residuo), è comune aggiungere un **vincolo** per selezionare una soluzione unica.

Il vincolo scelto in questo contesto è quello di cercare la soluzione che, tra tutte quelle che minimizzano il residuo, abbia la **norma euclidea minima**.

##### Definizione della Soluzione a Norma Minima del Minimo Quadrato (Definizione)

La soluzione desiderata, $x_{\text{star}}$, è definita come il vettore in $\mathbb{R}^n$ tale che:

1. Minimizza il residuo: $\left|Ax_{\text{star}} - b\right|^2 \le \left|Ax - b\right|^2$ per ogni $x \in \mathbb{R}^n$.
2. Tra tutti i vettori che soddisfano il punto 1, ha la norma minima: $\left|x_{\text{star}}\right|$ è minima.

Questa soluzione è unica.

##### La Decomposizione ai Valori Singolari (SVD)

Per trovare questa soluzione a norma minima del minimo quadrato, si utilizza una generalizzazione della decomposizione agli autovalori e autovettori, chiamata **Decomposizione ai Valori Singolari (SVD)**.

La SVD di una matrice $A$ ($m \times n$) è data da:

$A = U \Sigma V^T$

dove:

- $U$ è una matrice ortogonale $m \times m$; le sue colonne sono i **vettori singolari sinistri**.
- $V$ è una matrice ortogonale $n \times n$; le sue colonne sono i **vettori singolari destri**.
- $\Sigma$ è una matrice $m \times n$ detta **pseudo-diagonale**. Contiene i **valori singolari** di $A$, denotati $\sigma_1, \sigma_2, \dots, \sigma_p$ (dove $p = \min(m, n)$), posti sulla diagonale principale. Per $A$ $m \times n$ con $m > n$, $\Sigma$ ha la forma $\begin{bmatrix} \text{diag}(\sigma_1, \dots, \sigma_n) \ 0 \end{bmatrix}$ dove $\text{diag}(\sigma_1, \dots, \sigma_n)$ è $n \times n$ e 0 è un blocco di zeri $(m-n) \times n$. I valori singolari sono solitamente ordinati in modo decrescente ($\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_n \ge 0$) *fonte non esplicitata, ma implicita nella struttura*. Esiste un legame tra i valori singolari di $A$ e gli autovalori di $A^TA$.
	![[Pasted image 20250425102608.png]]
La SVD è più costosa computazionalmente rispetto alla fattorizzazione QR, con un costo proporzionale a $12 V n^3$ (dove 'V' potrebbe essere una costante o un fattore legato alle dimensioni).

![[Pasted image 20250425102329.png]]
![[Pasted image 20250425102632.png]]

##### La Pseudo-Inversa (Definizione e Calcolo)

La soluzione $x_{\text{star}}$ a norma minima del minimo quadrato per il sistema $Ax \approx b$ si ottiene utilizzando la **pseudo-inversa** di $A$, denotata $A^{\dagger}$ (o $A$ con un simbolo a croce).

La pseudo-inversa $A^{\dagger}$ di una matrice $A$ con SVD $A = U \Sigma V^T$ è calcolata come:

$A^{\dagger} = V \Sigma^{\dagger} U^T$

dove $\Sigma^{\dagger}$ è la pseudo-inversa della matrice $\Sigma$.

##### Calcolo di $\Sigma^{\dagger}$ (Definizione)

La matrice $\Sigma^{\dagger}$ si ottiene da $\Sigma$ trasponendola e prendendo i reciproci dei valori singolari non nulli sulla diagonale. Se $\Sigma$ è $m \times n$ con valori singolari $\sigma_1, \dots, \sigma_n$ sulla diagonale (e zeri sotto, nel caso $m>n$), allora $\Sigma^{\dagger}$ è $n \times m$ con i valori $1/\sigma_1, \dots, 1/\sigma_n$ sulla diagonale e zeri altrove.

Esempio per $m > n$: Se $\Sigma = \begin{bmatrix} \sigma_1 & & & \ & \sigma_2 & & \ & & \ddots & \ & & & \sigma_n \ 0 & 0 & \dots & 0 \ \vdots & \vdots & \ddots & \vdots \ 0 & 0 & \dots & 0 \end{bmatrix}_{m \times n}$, allora $\Sigma^{\dagger} = \begin{bmatrix} 1/\sigma_1 & & & 0 & \dots & 0 \ & 1/\sigma_2 & & \vdots & \ddots & \vdots \ & & \ddots & 0 & \dots & 0 \ & & & 1/\sigma_n & 0 & \dots & 0 \end{bmatrix}_{n \times m}$.

##### La Soluzione $x_{\text{star}}$

Utilizzando la pseudo-inversa, la soluzione $x_{\text{star}}$ a norma minima del minimo quadrato è data da:

$x_{\text{star}} = A^{\dagger} b$

Sostituendo la definizione di $A^{\dagger}$:

$x_{\text{star}} = V \Sigma^{\dagger} U^T b$

Questo fornisce il metodo per risolvere sistemi sovradeterminati anche quando la matrice non ha rango pieno, definendo una soluzione unica tramite il criterio della norma minima tra i minimizzatori del residuo.

#### References
[[Appunti Mate Num 1.pdf]]


