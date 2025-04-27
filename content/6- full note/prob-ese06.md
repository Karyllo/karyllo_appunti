---
title: "prob-ese06"
---

2025-03-20 15:14

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## prob-ese06
==prima manca==

# Analisi Dettagliata dell'Esercizio 2: La Variabile Aleatoria $Y_n$

## Definizione di $Y_n$ come Somma di Indicatrici

Il professore introduce la variabile aleatoria $Y_n$ come **risultato della somma delle prime $n$ variabili aleatorie $X_i$**, dove $i$ varia da 1 a $n$. Formalmente, questa definizione si esprime come:

$$Y_n = \sum_{i=1}^{n} X_i$$

È importante ricordare che ogni $X_i$ è stata precedentemente definita come la **funzione indicatrice dell'insieme $E_i$**, dove $E_i$ rappresenta l'evento di successo all'$i$-esima prova. Di conseguenza, $X_i$ assume il valore 1 se si verifica un successo all'$i$-esima prova e il valore 0 altrimenti.

## La Natura Discreta di $Y_n$

Il professore afferma che $Y_n$ è una **variabile aleatoria discreta**. La motivazione di questa affermazione risiede nel fatto che $Y_n$ è ottenuta come **somma di un numero finito di variabili aleatorie discrete** ($X_1, X_2, \dots, X_n$).

**Spiegazione:** Ogni $X_i$, essendo una funzione indicatrice, può assumere solamente due valori distinti: 0 e 1. Una variabile aleatoria che assume un numero finito di valori è per definizione discreta (e addirittura semplice, sebbene il professore preferisca usare il termine "discreta" per non introdurre troppe nomenclature). La somma di un numero finito di variabili aleatorie discrete produce una nuova variabile aleatoria che può assumere un numero finito di valori (nel caso specifico di $Y_n$, i valori possibili sono gli interi da 0 a $n$). Poiché l'immagine di $Y_n$ è un insieme finito (e quindi numerabile), essa è una variabile aleatoria discreta.

**Esercizio Proposto:** Come esercizio, viene suggerito di **dimostrare formalmente che la somma di variabili aleatorie discrete è ancora una variabile aleatoria discreta**. Questo implicherebbe mostrare che l'insieme dei valori che la somma può assumere è al più numerabile.

## Interpretazione Probabilistica di $Y_n$

Dal punto di vista probabilistico, $Y_n$ ha un significato chiaro: **rappresenta il numero totale di successi che si verificano nelle prime $n$ prove**. Questo discende direttamente dalla definizione di $X_i$. Ogni $X_i$ "conta" se c'è stato un successo all'$i$-esima prova. Sommando questi indicatori per le prime $n$ prove, $Y_n$ fornisce il conteggio complessivo dei successi in quell'intervallo di prove.

## La Legge di Probabilità di $Y_n$: Distribuzione Binomiale

Il professore introduce un concetto cruciale: se si assume che gli eventi (le singole prove) siano **indipendenti**, allora la variabile aleatoria $Y_n$ segue una **distribuzione binomiale** con parametri $n$ (il numero di prove) e $p$ (la probabilità di successo in una singola prova). Questa viene indicata con la notazione $Y_n \sim Bin(n, p)$.

**Teorema Implicito:** La somma di $n$ variabili aleatorie di Bernoulli **indipendenti e identicamente distribuite** (i.i.d.) con parametro $p$ segue una distribuzione binomiale con parametri $n$ e $p$. Ogni $X_i$ è una variabile di Bernoulli con probabilità di successo $p$ (dove $p$ è la probabilità che $\Omega$ appartenga a $E_n$, ovvero la probabilità dell'evento di successo).

La probabilità che $Y_n$ assuma un valore specifico $k$ (cioè che si verifichino esattamente $k$ successi in $n$ prove) è data dalla **funzione di massa di probabilità della distribuzione binomiale**:

$$P(Y_n = k) = \binom{n}{k} p^k (1-p)^{n-k}$$

dove:

- $k$ è un intero che può variare da 0 a $n$ (inclusi).
- $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ è il coefficiente binomiale, che rappresenta il numero di modi in cui si possono ottenere esattamente $k$ successi in $n$ prove.
- $p^k$ è la probabilità di ottenere $k$ successi.
- $(1-p)^{n-k}$ è la probabilità di ottenere $n-k$ insuccessi.

## Calcolo del Valore Atteso di $Y_n$

Il professore descrive due approcci per determinare il valore atteso di $Y_n$, $E[Y_n]$.

### Metodo 1: Derivazione Diretta dalla Legge Binomiale (Ricapitolazione)

Sebbene i dettagli specifici non vengano ripetuti, il professore fa riferimento a un calcolo effettuato precedentemente. Questo metodo si basa sull'applicazione diretta della definizione di valore atteso per una variabile aleatoria discreta alla distribuzione binomiale:

$$E[Y_n] = \sum_{k=0}^{n} k \cdot P(Y_n = k) = \sum_{k=0}^{n} k \binom{n}{k} p^k (1-p)^{n-k}$$

Attraverso una serie di manipolazioni algebriche che coinvolgono le proprietà dei coefficienti binomiali e delle sommatorie, si dimostra che questo valore atteso è uguale a $np$.

### Metodo 2: Utilizzo della Linearità del Valore Atteso (Approccio Semplificato)

Il professore presenta un metodo più elegante e concettualmente più semplice per calcolare $E[Y_n]$, basato sulla proprietà fondamentale della **linearità del valore atteso**.

Ricordando che $Y_n$ è definita come la somma delle variabili aleatorie $X_i$:

$$Y_n = \sum_{i=1}^{n} X_i$$

Possiamo esprimere il valore atteso di $Y_n$ come il valore atteso di questa somma:

$$E[Y_n] = E\left[\sum_{i=1}^{n} X_i\right]$$

Grazie alla **proprietà di linearità del valore atteso**, che afferma che il valore atteso di una somma di variabili aleatorie (non necessariamente indipendenti) è uguale alla somma dei loro valori attesi, possiamo scrivere:

$$E[Y_n] = \sum_{i=1}^{n} E[X_i]$$

Ora, consideriamo il valore atteso di una singola variabile di Bernoulli $X_i$ con parametro $p$. Per definizione di valore atteso per una variabile discreta:

$$E[X_i] = 1 \cdot P(X_i = 1) + 0 \cdot P(X_i = 0)$$

Sappiamo che $P(X_i = 1) = p$ (probabilità di successo) e $P(X_i = 0) = 1-p$ (probabilità di insuccesso). Quindi:

$$E[X_i] = 1 \cdot p + 0 \cdot (1-p) = p$$

Sostituendo questo risultato nell'espressione per $E[Y_n]$:

$$E[Y_n] = \sum_{i=1}^{n} p = n \cdot p$$

Questo secondo metodo dimostra in modo chiaro e conciso che il valore atteso del numero di successi in $n$ prove indipendenti con probabilità di successo $p$ è semplicemente il prodotto del numero di prove e della probabilità di successo.

**Osservazione Importante:** Il professore enfatizza che, in generale, **saper scomporre una variabile aleatoria in una somma di variabili più semplici** può rappresentare una strategia efficace per calcolare proprietà come il valore atteso, specialmente quando l'utilizzo diretto della legge di probabilità può risultare complesso o laborioso. Questo approccio sfrutta proprietà lineari come quella del valore atteso, semplificando notevolmente i calcoli.

## Esercizio sulla Misurabilità di $X_n$

Come ulteriore esercizio, il professore lascia agli studenti il compito di **dimostrare che $X_n$ è effettivamente una variabile aleatoria misurabile**. Questo è un requisito fondamentale per poter parlare di $X_n$ e, di conseguenza, di $Y_n$ come variabili aleatorie ben definite all'interno dello spazio di probabilità considerato. La dimostrazione implicherebbe verificare che la controimmagine di ogni insieme di Borel della retta reale tramite la funzione $X_n$ appartiene alla $\sigma$-algebra dello spazio campionario.

# Analisi Dettagliata dell'Esercizio 3: La Variabile Aleatoria $Z$

## Definizione di $Z$ e il suo Insieme di Valori

Il professore introduce una nuova variabile aleatoria, denominata $Z$, definita in relazione alla sequenza di variabili $X_n$. **$Z$ è definita come il minimo dell'insieme degli indici interi $n$ tali che $X_n = 1$**. In altre parole, $Z$ rappresenta la prima volta (in termini di indice) in cui si osserva un successo nella sequenza di prove.

Viene inoltre specificata una **convenzione importante**: se l'insieme degli indici per cui $X_n = 1$ è vuoto (ovvero, non si verifica mai un successo), allora il minimo di tale insieme è definito come **più infinito ($+\infty$)**.

Di conseguenza, l'insieme dei valori che $Z$ può assumere non è semplicemente l'insieme dei numeri naturali ($\mathbb{N}$), ma l'**unione dei numeri naturali e dell'infinito** ($\mathbb{N} \cup {+\infty}$). Il professore sottolinea che, sebbene l'evento ${Z = +\infty}$ possa avere probabilità nulla, ciò non significa che tale esito possa essere ignorato a priori. Questa cautela è particolarmente importante per distinguere tra variabili discrete e continue.

## Interpretazione Probabilistica di $Z$

Il significato probabilistico di $Z$ è chiaramente delineato: **$Z$ rappresenta l'indice della prova in cui si manifesta il primo successo**. Se il valore di $Z$ è $k \in \mathbb{N}$, significa che le prime $k-1$ prove sono state degli insuccessi ($X_1 = 0, X_2 = 0, \dots, X_{k-1} = 0$) e la $k$-esima prova è stata un successo ($X_k = 1$). Se $Z = +\infty$, ciò implica che non si è mai verificato un successo nella sequenza di prove.

Il professore evidenzia che questo tipo di scenario (osservare il tempo d'attesa per il primo successo in una sequenza di prove dicotomiche) è strettamente legato alla **distribuzione geometrica**.

## La Legge di Probabilità di $Z$

Per determinare la legge di probabilità di $Z$, è necessario calcolare la probabilità che $Z$ assuma ciascuno dei suoi possibili valori. Poiché $Z$ è una variabile aleatoria discreta, la sua legge è completamente determinata dalle probabilità dei singoli esiti.

### Probabilità per valori finiti ($Z = k$, dove $k \in \mathbb{N}$, $k \ge 1$)

La probabilità che il primo successo si verifichi esattamente alla $k$-esima prova, $P(Z = k)$, implica che si siano verificati $k-1$ insuccessi seguiti da un successo. Assumendo l'indipendenza delle prove, la probabilità di questa sequenza è data dal prodotto delle probabilità dei singoli eventi:

$$P(Z = k) = P(X_1 = 0, X_2 = 0, \dots, X_{k-1} = 0, X_k = 1)$$

Poiché $P(X_i = 0) = 1-p$ e $P(X_k = 1) = p$ (dove $p$ è la probabilità di successo in una singola prova), e sfruttando l'indipendenza:

$$P(Z = k) = (1-p)^{k-1} \cdot p$$

Questa è la **funzione di massa di probabilità della distribuzione geometrica**, definita sull'insieme dei numeri naturali a partire da 1.

### Probabilità per valore infinito ($Z = +\infty$)

La probabilità che $Z$ sia uguale a più infinito, $P(Z = +\infty)$, corrisponde alla probabilità che non si verifichi mai un successo nella sequenza infinita di prove. Questo evento può essere espresso come l'intersezione degli eventi ${Z > k}$ per ogni $k \in \mathbb{N}$.

Un modo per calcolare questa probabilità è utilizzare il **complementare**: $P(Z = +\infty) = 1 - P(Z < +\infty) = 1 - P(Z \in \mathbb{N})$. Poiché gli eventi ${Z = k}$ per $k \in \mathbb{N}$ sono disgiunti, la probabilità che $Z$ assuma un valore finito è la somma delle loro probabilità:

$$P(Z \in \mathbb{N}) = \sum_{k=1}^{\infty} P(Z = k) = \sum_{k=1}^{\infty} (1-p)^{k-1} p$$

Questa è una **serie geometrica**. Riscrivendo la somma come $p \sum_{j=0}^{\infty} (1-p)^j$, dove $j = k-1$, e sapendo che la somma di una serie geometrica $\sum_{j=0}^{\infty} r^j$ converge a $\frac{1}{1-r}$ per $|r| < 1$, e ricordando che $0 \le p \le 1$ (quindi $0 \le 1-p < 1$ se $p > 0$):

$$P(Z \in \mathbb{N}) = p \cdot \frac{1}{1 - (1-p)} = p \cdot \frac{1}{p} = 1$$

Se $p > 0$. Se $p = 0$, allora $P(Z=k) = 0$ per ogni $k \in \mathbb{N}$, e $P(Z=+\infty) = 1$.

Assumendo $p > 0$, la probabilità che $Z$ sia finito è 1, e quindi la probabilità che $Z$ sia infinito è:

$$P(Z = +\infty) = 1 - 1 = 0$$

Il professore conclude che la probabilità che $Z$ assuma il valore di più infinito è zero, il che è ragionevole in quanto, se esiste una probabilità positiva di successo ad ogni prova, prima o poi ci si aspetta di osservarne uno.

**Osservazione sulla Convenzione di $\mathbb{N}$:** Viene fatta una precisazione riguardo alla definizione dell'insieme dei numeri naturali. In questo contesto, e per coerenza con l'interpretazione di $Z$ come l'indice del _primo_ successo, si considera che $\mathbb{N}$ parta da 1. Se $k$ fosse 0, l'espressione $(1-p)^{-1}$ non avrebbe senso nel contesto del numero di insuccessi _prima_ del primo successo.

In sintesi, $Z$ è una variabile aleatoria discreta che segue una distribuzione geometrica con parametro $p$, definita sui valori ${1, 2, 3, \dots}$, e la probabilità che $Z$ sia infinito è 0 (assumendo $p > 0$). The probability mass function of $Z$ is $P(Z=k) = (1-p)^{k-1}p$ for $k \in {1, 2, 3, \dots}$.

Certamente. Ecco l'analisi integrata della variabile aleatoria $W$, tenendo conto delle considerazioni e dei ragionamenti del professore:

# Analisi Dettagliata della Variabile Aleatoria $W$

## Definizione di $W$ e il suo Insieme di Valori

L'esercizio introduce una nuova variabile aleatoria, $W$, definita in relazione a $Z$ come **$W = Z - 1$**, dove $Z$ è l'indice della prova del primo successo.

Il professore introduce questa definizione e spiega intuitivamente che se $Z$ rappresenta la prova in cui si verifica il primo successo, allora **$W = Z - 1$ conta il numero di prove precedenti che sono state degli insuccessi**.

Dato che $Z$ assume valori nell'insieme $\mathbb{N} \cup {+\infty}$ (dove $\mathbb{N} = {1, 2, 3, \dots}$), i valori che $W$ può assumere saranno:

- Se $Z = k \in \mathbb{N}$, allora $W = k - 1$. Poiché $k$ parte da 1, $W$ può assumere i valori $1-1 = 0, 2-1 = 1, 3-1 = 2, \dots$, ovvero l'insieme dei **numeri naturali includendo lo zero** ($\mathbb{N}_0 = {0, 1, 2, \dots}$). Il professore sottolinea come se il primo successo avviene alla prima prova ($Z=1$), allora il numero di insuccessi precedenti è $1-1=0$.
- Se $Z = +\infty$, allora $W = +\infty - 1 = +\infty$.

Pertanto, l'insieme dei valori che $W$ può assumere è **$\mathbb{N}_0 \cup {+\infty}$**.

## Interpretazione Probabilistica di $W$

L'interpretazione probabilistica di $W = Z - 1$ è chiara: **$W$ rappresenta il numero di insuccessi che si verificano prima del primo successo**.

- Se $W = k \in \mathbb{N}_0$, significa che ci sono stati esattamente $k$ insuccessi seguiti dal primo successo alla prova $k+1$.
- Se $W = +\infty$, significa che non si è mai verificato un successo, e quindi il numero di insuccessi prima di un eventuale successo (che non arriva mai) è infinito.

Il professore osserva che questa interpretazione è logicamente coerente con la definizione di $Z$.

## La Legge di Probabilità di $W$

Per determinare la legge di probabilità di $W$, sfruttiamo la relazione $W = Z - 1$ e la legge di probabilità di $Z$ che abbiamo derivato precedentemente. Il professore fa notare che questo è un caso di **funzione iniettiva di una variabile aleatoria discreta**.

### Probabilità per valori finiti ($W = k$, dove $k \in \mathbb{N}_0$)

La probabilità che si verifichino esattamente $k$ insuccessi prima del primo successo, $P(W = k)$, è equivalente alla probabilità che il primo successo si verifichi alla prova $k+1$, ovvero $P(Z = k+1)$. Utilizzando la legge di $Z$:

$$P(W = k) = P(Z = k+1) = (1-p)^{(k+1)-1} \cdot p = (1-p)^k \cdot p$$

Questa è la funzione di massa di probabilità di una **distribuzione geometrica traslata** o, a volte, definita sul numero di fallimenti prima del successo. Il professore la descrive come una **legge geometrica ottenuta per traslazione**.

### Probabilità per valore infinito ($W = +\infty$)

La probabilità che $W$ sia uguale a più infinito, $P(W = +\infty)$, corrisponde alla probabilità che $Z$ sia uguale a più infinito, dato che $W = Z - 1$. Come abbiamo visto nell'analisi di $Z$, se $p > 0$:

$$P(W = +\infty) = P(Z = +\infty) = 0$$

Questo significa che, con probabilità 1, si verificherà un successo in un numero finito di prove, e quindi il numero di insuccessi prima del primo successo sarà finito. Il professore sottolinea la **co-implicazione dei due eventi**: ${W = +\infty} \iff {Z = +\infty}$, pertanto hanno la stessa probabilità.

In sintesi, $W$ è una variabile aleatoria discreta che segue una **distribuzione geometrica (spesso definita sul numero di fallimenti) con parametro $p$**, definita sui valori ${0, 1, 2, \dots}$. La probabilità che $W$ sia infinito è 0 (assumendo $p > 0$). The probability mass function of $W$ is $P(W=k) = (1-p)^k p$ for $k \in {0, 1, 2, \dots}$. Il professore conclude osservando che per una funzione iniettiva (e in questo caso anche invertibile) di una variabile aleatoria discreta, come $W = Z - 1$, la legge della nuova variabile si ottiene direttamente dalla legge della variabile originale.
#### References

[[Esercitazioni 2 1.pdf]]

