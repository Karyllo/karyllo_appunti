---
title: "Prob- Ese01"
---

2025-02-25 12:26

_Status: #flashcard_finite   #riscritto_zero  #revisione_zero 

_Tags:

## Prob- Ese01

### Spazio di Probabilità: Concetti Fondamentali

Il professore introduce il concetto di **spazio di probabilità** come base per affrontare esperimenti aleatori. Viene sottolineata l'importanza di non limitarsi ai calcoli di probabilità senza comprendere la struttura sottostante.

#### Definizione

Uno spazio di probabilità è definito come una terna $(\Omega, \mathcal{F}, P)$, dove:

- $\Omega$ è lo **spazio campionario**, ovvero l'insieme di tutti i possibili risultati elementari di un esperimento aleatorio.
    - $\Omega$ è un insieme generico, senza una struttura specifica richiesta. Può essere finito, infinito numerabile o non numerabile.
    - Il professore fa notare che la scelta di $\Omega$ non è unica; esistono diversi spazi campionari che possono portare agli stessi risultati. Spesso negli esercizi non si specifica neanche chi è $\Omega$.
- $\mathcal{F}$ è una **$\sigma$-algebra** su $\Omega$, cioè una famiglia di sottoinsiemi di $\Omega$ che include l'insieme vuoto, è chiusa rispetto alla complementazione e all'unione numerabile.
    - La $\sigma$-algebra rappresenta gli eventi di cui si può calcolare la probabilità.
    - La stabilità per unioni numerabili è essenziale per la struttura della funzione di probabilità $P$.
- $P$ è una **funzione di probabilità** (o misura di probabilità) che assegna ad ogni evento $A \in \mathcal{F}$ un numero reale tra 0 e 1, soddisfacendo gli assiomi di probabilità:
    - $P(A) \geq 0$ per ogni $A \in \mathcal{F}$.
    - $P(\Omega) = 1$.
    - Se ${A_i}_{i \in \mathbb{N}}$ è una famiglia numerabile di eventi disgiunti (cioè $A_i \cap A_j = \emptyset$ per $i \neq j$), allora $P(\bigcup_{i=1}^{\infty} A_i) = \sum_{i=1}^{\infty} P(A_i)$ ($\sigma$-additività).

### Esercizi sullo Spazio Campionario $\Omega$

Il professore propone diversi esercizi per determinare uno spazio campionario adeguato e minimale per vari esperimenti aleatori.

#### Esempio 1: Lancio di una Moneta $N$ Volte

- **Descrizione**: Lancio di una moneta $N$ volte.
- **Esito di un singolo lancio**: Testa (T) o Croce (C).
- **Spazio campionario**: $\Omega = \set{T, C}^N$, dove l'elevamento a potenza indica il prodotto cartesiano dell'insieme $\set{T, C}$ con se stesso $N$ volte. Questo significa che ogni elemento di $\Omega$ è una sequenza di $N$ risultati, ciascuno dei quali è T o C.
- **Osservazione**: Si può scegliere qualsiasi insieme con due elementi per rappresentare i risultati del singolo lancio, ad esempio ${0, 1}$. In tal caso, $\Omega = {0, 1}^N$.

#### Esempio 2: Lancio di $N$ Monete Indistinguibili

- **Descrizione**: Lancio di $N$ monete uguali e indistinguibili.
- **Spazio campionario**: In questo caso, l'ordine non è importante, quindi si può considerare il numero di teste ottenute. Tuttavia, il professore sottolinea che concentrarsi solo sull'esito (numero di teste) è una scelta che dipende dall'interesse specifico.
- **Considerazioni**: Questo esperimento è diverso dal lancio di una singola moneta $N$ volte, perché le monete sono lanciate simultaneamente e sono indistinguibili.

#### Esempio 3: Lancio Continuo di una Moneta

- **Descrizione**: Lancio di una moneta una volta al minuto, senza fermarsi mai.
- **Spazio campionario**: $\Omega = {T, C}^{\mathbb{N}}$, ovvero l'insieme delle successioni infinite di teste e croci. Questo rappresenta il limite del prodotto cartesiano di ${T, C}$ con se stesso infinite volte.

#### Esempio 4: Estrazione di una Carta da un Mazzo e Lancio di una Moneta

- **Descrizione**: Si estrae una carta da un mazzo di 10 carte e si lancia una moneta.
- **Spazio campionario**: $\Omega = C \times \set{T, C}$, dove $C = {1, 2, ..., 10}$ rappresenta le 10 carte. Ogni elemento di $\Omega$ è una coppia (carta, esito della moneta).

#### Esempio 5: Estrazione del Lotto

- **Descrizione**: Estrazione di 5 numeri su 90.
- **Spazio campionario (con remissione)**: $\Omega = {1, 2, ..., 90}^5$, dove ogni elemento è una quintupla di numeri tra 1 e 90.
- **Spazio campionario (senza remissione)**: $\Omega = {(x_1, x_2, x_3, x_4, x_5) \in {1, 2, ..., 90}^5 : x_i \neq x_j \text{ per } i \neq j}$. Questo spazio campionario esclude le quintuple con numeri ripetuti.
    - Il professore corregge l'imprecisione iniziale, specificando che l'estrazione del lotto è senza remissione.

#### Esempio 6: Tempo per Risolvere il Cubo di Rubik

- **Descrizione**: Tempo impiegato per risolvere il cubo di Rubik partendo da una configurazione casuale, con un tempo massimo $T$.
- **Spazio campionario**: $\Omega = [0, T]$, assumendo che il tempo sia una variabile continua.
    - Il valore 0 rappresenta il caso in cui il cubo è già risolto.

### Esercizi sulla $\sigma$-algebra $\mathcal{F}$

Il professore spiega come interpretare eventi descritti a parole in termini di operazioni insiemistiche sulla $\sigma$-algebra $\mathcal{F}$.

#### Esempio 1: Almeno uno fra tre eventi $A$, $B$, $C$ si verifica

- **Evento**: $A \cup B \cup C$.

#### Esempio 2: Al più un evento si verifica

- **Evento**: $(A^c \cap B^c \cap C^c) \cup (A \cap B^c \cap C^c) \cup (A^c \cap B \cap C^c) \cup (A^c \cap B^c \cap C)$.
    - Questo evento è l'unione dell'evento "nessun evento si verifica" e degli eventi "si verifica solo A", "si verifica solo B", "si verifica solo C".

#### Esempio 3: Non si verifica nulla

- **Evento**: $A^c \cap B^c \cap C^c$.

#### Esempio 4: Si verificano tutti e tre

- **Evento**: $A \cap B \cap C$.

#### Esempio 5: Si verifica esattamente un evento

- **Evento**: $(A \cap B^c \cap C^c) \cup (A^c \cap B \cap C^c) \cup (A^c \cap B^c \cap C)$.
    - In alternativa, si può esprimere come $E_B - E_C$, dove $E_B$ è l'evento "al più un evento si verifica" e $E_C$ è l'evento "si verificano tutti e tre".

#### Esempio 6: Si verificano esattamente due eventi

- **Evento**: $(A \cap B \cap C^c) \cup (A \cap B^c \cap C) \cup (A^c \cap B \cap C)$.

### Eventi e Relazioni Logiche

La flashcard include esercizi relativi a eventi e relazioni logiche tra eventi in uno spazio di probabilità.

#### Esercizio 1: Eventi che si verificano

- **Obiettivo**: Determinare l'evento risultante quando si hanno determinate relazioni logiche tra eventi $A$ e $B$.
    
    - **Caso 1: $A$ implica $B$**
        
        - Se $A$ implica $B$, significa che ogni volta che si verifica $A$, si verifica anche $B$. In termini insiemistici, questo significa che $A$ è un sottoinsieme di $B$, ovvero $A \subseteq B$.
        - Esempio: "Se un numero naturale è multiplo di 4, allora è anche multiplo di 2". In questo caso, l'insieme dei multipli di 4 è un sottoinsieme dell'insieme dei multipli di 2.
    - **Caso 2: $A$ e $B$ sono mutuamente esclusivi**
        
        - Se $A$ e $B$ sono mutuamente esclusivi, significa che non possono verificarsi contemporaneamente. In termini insiemistici, questo significa che la loro intersezione è vuota, ovvero $A \cap B = \emptyset$.
        - Questo implica che tutti gli elementi di $B$ non stanno in $A$ e viceversa tutti gli elementi di $A$ non stanno in $B$
    - **Caso 3: Uno fra $A$ e $B$ si verifica sempre**
        
        - Se uno fra $A$ e $B$ si verifica sempre, significa che preso un qualsiasi esito dell'esperimento, questo deve ricadere o in $A$ o in $B$. In termini insiemistici, questo significa che l'unione di $A$ e $B$ è l'intero spazio campionario $\Omega$, ovvero $A \cup B = \Omega$. Questo vuol dire che $\Omega$ mette una partizione in $A$ e $B$
        - Questo include anche i casi in cui uno fra $A$ e $B$ sia effettivamente $\Omega$

#### Esercizio 2: Lancio Infinito di una Moneta e $\sigma$-algebre

- **Descrizione**: Si considera il lancio infinito di una moneta e si analizzano le $\sigma$-algebre generate da eventi specifici.
    
- **Spazio campionario**: $\Omega = {0, 1}^{\mathbb{N}}$, dove 0 e 1 rappresentano rispettivamente "croce" e "testa".
    
- **Evento $E_k$**: Successo (cioè, esce "testa") alla $k$-esima prova.
    
    - **$\sigma$-algebra generata da $E_1$**: È la più piccola $\sigma$-algebra che contiene $E_1$. Deve contenere l'insieme vuoto $\emptyset$, $\Omega$ e il complementare di $E_1$, ovvero $E_1^c$.
    - **$\sigma$-algebra generata da $E_1$ e $E_2$**: Deve contenere $\emptyset$, $\Omega$, $E_1$, $E_2$, i loro complementari, le loro unioni e le unioni miste. L'esercizio chiede di completare questa $\sigma$-algebra e determinare quanti elementi ha.
- **$\sigma$-algebra generata dalla successione $E_k$**: È la più piccola $\sigma$-algebra che contiene tutti gli $E_k$.
    
    - Il professore spiega che esiste sempre una $\sigma$-algebra non banale che contiene tutti gli $E_k$.

#### Esercizio 3: Eventi con Infiniti Elementi

- **Obiettivo**: Esprimere eventi complessi in termini di operazioni insiemistiche sugli $E_k$.
    
    - **Nessun successo**: $\bigcap_{k=1}^{\infty} E_k^c$ (intersezione di tutti i complementari degli $E_k$).
    - **Si verifica soltanto $E_3$**: $E_3 \cap \bigcap_{k \neq 3} E_k^c$ (si verifica $E_3$ e non si verificano tutti gli altri).
    - **Tutte le prove pari forniscono successo**: $\bigcap_{k=1}^{\infty} E_{2k}$ (intersezione di tutti gli $E_k$ con $k$ pari).
    - **Solo successi da un certo $k$ in poi (dove $k$ non è fissato)**: $\bigcup_{n=1}^{\infty} \bigcap_{k=n}^{\infty} E_k$ (unione delle intersezioni degli $E_k$ da un certo punto in poi). Questo si chiama limite inferiore.
        - il professore arriva a questa formula in due step:  Per dire che io ho solo successi da un certo punto in poi è come dire che ho solo successi dal primo in poi oppure ho solo successi dal secondo in poi oppure ho solo successi dal terzo in poi e così via.
    - **Infiniti successi**: $\bigcap_{n=1}^{\infty} \bigcup_{k=n}^{\infty} E_k$ (intersezione delle unioni degli $E_k$ da un certo punto in poi). Questo si chiama limite superiore.
        - Bisogna ragionare come in analisi 1, infiniti successi vuol dire che non sono finiti i successi. Questo vuol dire, in un certo senso, che l'insieme degli indici delle prove che sono successi non è limitato. Comunque fissate $n$ esiste un successo $k$ più grande di $n$.
    - **Un numero finito di successi**: $(\bigcap_{n=1}^{\infty} \bigcup_{k=n}^{\infty} E_k)^c = \bigcup_{n=1}^{\infty} \bigcap_{k=n}^{\infty} E_k^c$ (complementare dell'evento "infiniti successi"). Si utilizzano le leggi di De Morgan.
    - **Si verifica esattamente un successo**: $\bigcup_{n=1}^{\infty} (E_n \cap \bigcap_{k \neq n} E_k^c)$ (unione degli eventi in cui si verifica solo un $E_n$).
### Eventi e Relazioni Logiche

La flashcard include esercizi relativi a eventi e relazioni logiche tra eventi in uno spazio di probabilità.

#### Esercizio 1: Eventi che si verificano

- **Obiettivo**: Determinare l'evento risultante quando si hanno determinate relazioni logiche tra eventi $A$ e $B$.
    
    - **Caso 1: Almeno uno fra i tre ($A$, $B$, $C$) si verifica**
        
        - Questo corrisponde alla disgiunzione inclusiva. L'evento è rappresentato dall'unione dei tre insiemi: $A \cup B \cup C$.
    - **Caso 2: Si verifica al più un evento**
        
        - Questo significa che si verificano zero eventi o esattamente un evento.
        - **Zero eventi**: Corrisponde all'intersezione dei complementari: $A^c \cap B^c \cap C^c$.
        - **Esattamente un evento**: $(A \cap B^c \cap C^c) \cup (A^c \cap B \cap C^c) \cup (A^c \cap B^c \cap C)$.
        - L'evento complessivo è l'unione di questi due casi.
    - **Caso 3: Non si verifica nulla**
        
        - Corrisponde all'intersezione dei complementari: $A^c \cap B^c \cap C^c$.
    - **Caso 4: Si verificano tutti e tre**
        
        - Corrisponde all'intersezione dei tre insiemi: $A \cap B \cap C$.
    - **Caso 5: Si verifica esattamente un evento**
        
        - È l'unione degli eventi in cui se ne verifica solo uno: $(A \cap B^c \cap C^c) \cup (A^c \cap B \cap C^c) \cup (A^c \cap B^c \cap C)$.
        - Può essere visto anche come l'evento "si verifica al più un evento" meno l'evento "si verificano esattamente due eventi".
    - **Caso 6: Si verificano esattamente due**
        
        - $(A \cap B \cap C^c) \cup (A \cap B^c \cap C) \cup (A^c \cap B \cap C)$.
- **Esercizio 2: Relazioni logiche tra eventi**
    
    - **Caso 1: $A$ implica $B$**
        
        - Se $A$ implica $B$, significa che ogni volta che si verifica $A$, si verifica anche $B$. In termini insiemistici, questo significa che $A$ è un sottoinsieme di $B$, ovvero $A \subseteq B$.
        - Esempio: "Se un numero naturale è multiplo di 4, allora è anche multiplo di 2". In questo caso, l'insieme dei multipli di 4 è un sottoinsieme dell'insieme dei multipli di 2.
    - **Caso 2: $A$ e $B$ sono mutuamente esclusivi**
        
        - Se $A$ e $B$ sono mutuamente esclusivi, significa che non possono verificarsi contemporaneamente. In termini insiemistici, questo significa che la loro intersezione è vuota, ovvero $A \cap B = \emptyset$.
        - Questo implica che tutti gli elementi di $B$ non stanno in $A$ e viceversa tutti gli elementi di $A$ non stanno in $B$
    - **Caso 3: Uno fra $A$ e $B$ si verifica sempre**
        
        - Se uno fra $A$ e $B$ si verifica sempre, significa che preso un qualsiasi esito dell'esperimento, questo deve ricadere o in $A$ o in $B$. In termini insiemistici, questo significa che l'unione di $A$ e $B$ è l'intero spazio campionario $\Omega$, ovvero $A \cup B = \Omega$. Questo vuol dire che $\Omega$ mette una partizione in $A$ e $B$
        - Questo include anche i casi in cui uno fra $A$ e $B$ sia effettivamente $\Omega$

#### Esercizio 2: Lancio Infinito di una Moneta e $\sigma$-algebre

- **Descrizione**: Si considera il lancio infinito di una moneta e si analizzano le $\sigma$-algebre generate da eventi specifici.
    
- **Spazio campionario**: $\Omega = {0, 1}^{\mathbb{N}}$, dove 0 e 1 rappresentano rispettivamente "croce" e "testa".
    
- **Evento $E_k$**: Successo (cioè, esce "testa") alla $k$-esima prova.
    
    - **$\sigma$-algebra generata da $E_1$**: È la più piccola $\sigma$-algebra che contiene $E_1$. Deve contenere l'insieme vuoto $\emptyset$, $\Omega$ e il complementare di $E_1$, ovvero $E_1^c$.
    - **$\sigma$-algebra generata da $E_1$ e $E_2$**: Deve contenere $\emptyset$, $\Omega$, $E_1$, $E_2$, i loro complementari, le loro unioni e le unioni miste. L'esercizio chiede di completare questa $\sigma$-algebra e determinare quanti elementi ha.
- **$\sigma$-algebra generata dalla successione $E_k$**: È la più piccola $\sigma$-algebra che contiene tutti gli $E_k$.
    
    - Il professore spiega che esiste sempre una $\sigma$-algebra non banale che contiene tutti gli $E_k$.

#### Esercizio 3: Eventi con Infiniti Elementi

- **Obiettivo**: Esprimere eventi complessi in termini di operazioni insiemistiche sugli $E_k$.
    
    - **Nessun successo**: $\bigcap_{k=1}^{\infty} E_k^c$ (intersezione di tutti i complementari degli $E_k$).
    - **Si verifica soltanto $E_3$**: $E_3 \cap \bigcap_{k \neq 3} E_k^c$ (si verifica $E_3$ e non si verificano tutti gli altri).
    - **Tutte le prove pari forniscono successo**: $\bigcap_{k=1}^{\infty} E_{2k}$ (intersezione di tutti gli $E_k$ con $k$ pari).
    - **Solo successi da un certo $k$ in poi (dove $k$ non è fissato)**: $\bigcup_{n=1}^{\infty} \bigcap_{k=n}^{\infty} E_k$ (unione delle intersezioni degli $E_k$ da un certo punto in poi). Questo si chiama limite inferiore.
        - Il professore arriva a questa formula in due step: Per dire che io ho solo successi da un certo punto in poi è come dire che ho solo successi dal primo in poi oppure ho solo successi dal secondo in poi oppure ho solo successi dal terzo in poi e così via.
    - **Infiniti successi**: $\bigcap_{n=1}^{\infty} \bigcup_{k=n}^{\infty} E_k$ (intersezione delle unioni degli $E_k$ da un certo punto in poi). Questo si chiama limite superiore.
        - Bisogna ragionare come in analisi 1, infiniti successi vuol dire che non sono finiti i successi. Questo vuol dire, in un certo senso, che l'insieme degli indici delle prove che sono successi non è limitato. Comunque fissate $n$ esiste un successo $k$ più grande di $n$.
    - **Un numero finito di successi**: $(\bigcap_{n=1}^{\infty} \bigcup_{k=n}^{\infty} E_k)^c = \bigcup_{n=1}^{\infty} \bigcap_{k=n}^{\infty} E_k^c$ (complementare dell'evento "infiniti successi"). Si utilizzano le leggi di De Morgan.
    - **Si verifica esattamente un successo**: $\bigcup_{n=1}^{\infty} (E_n \cap \bigcap_{k \neq n} E_k^c)$ (unione degli eventi in cui si verifica solo un $E_n$).

#### Esercizio 4: Pesca di Beneficenza

- **Descrizione**: Anna e Marco partecipano a una pesca di beneficenza con 50 biglietti. Ci sono premi che piacciono solo ad Anna, solo a Marco, o a entrambi.
- **Spazio campionario**: $\Omega = {1, 2, \dots, 50}$, l'insieme dei biglietti.
- **$\sigma$-algebra**: L'insieme delle parti di $\Omega$, indicato come $2^\Omega$.
- **Probabilità uniforme**: Ogni biglietto ha la stessa probabilità di essere estratto.
    - La probabilità di un evento $A$ è data da $P(A) = \frac{|A|}{|\Omega|}$, dove $|A|$ è la cardinalità di $A$.
- **Eventi**:
    - $A$: Insieme dei premi che piacciono ad Anna.
    - $M$: Insieme dei premi che piacciono a Marco.
    - $A \cap M$: Insieme dei premi che piacciono a entrambi.
    - $A \cup M$: Insieme dei premi che piacciono ad almeno uno dei due.
    - $(A \cup M)^c$: Insieme dei premi che non piacciono a nessuno dei due.
    - $(A \cup M) - (A \cap M)$: Insieme dei premi che piacciono solo ad Anna o solo a Marco.
- **Calcolo delle probabilità**: Si contano gli elementi degli insiemi e si divide per 50.
    - Esempio: Se $|A| = 8$ e $|M| = 6$ e $|A \cap M| = 1$, allora $P(A) = \frac{8}{50}$, $P(M) = \frac{6}{50}$ e $P(A \cup M) = \frac{8 + 6 - 1}{50} = \frac{13}{50}$.

#### Esercizio 5: Vero o Falso

- **Descrizione**: Dato uno spazio di probabilità e due eventi $A$ e $B$ con $P(A) = 0.4$ e $P(B) = 0.7$, determinare se alcune affermazioni sono sempre vere, sempre false o indecidibili.
    
- **Esempio 1**: $P(A \cup B) = 0$
    
    - **Analisi**: Questa affermazione è sempre falsa. Infatti, $P(A \cup B) = P(A) + P(B) - P(A \cap B)$. Poiché $P(A)$ e $P(B)$ sono positivi, $P(A \cup B)$ non può essere zero.
- **Esempio 2**: $P(A \cup B) = 1.1$
    
    - Questa affermazione è sempre falsa perché la probabilità di qualsiasi evento deve essere minore o uguale a 1.
- **Esempio 3**: $P(A \cap B) = 0.28$
    
    - Questa affermazione può essere sia vera che falsa, a seconda dello spazio di probabilità specifico e della relazione tra $A$ e $B$.
- **Esempio 4**: $P(B \cap A^c) \geq 0.3$
    
    - **Analisi**: $P(B \cap A^c) = P(B) - P(A \cap B)$. Dobbiamo stabilire se $0.7 - P(A \cap B) \geq 0.3$, ovvero se $P(A \cap B) \leq 0.4$. Questo è sempre vero perché $P(A \cap B)$ è minore o uguale al minimo tra $P(A)$ e $P(B)$, e quindi minore o uguale a 0.4.
- **Esempio 5**: $P(A \cap B^c) \leq 0.2$
    
    - **Analisi**: $P(A \cap B^c) = P(A) - P(A \cap B)$. Dobbiamo stabilire se $0.4 - P(A \cap B) \leq 0.2$, ovvero se $P(A \cap B) \geq 0.2$.
    - La probabilità dell'unione è $P(A \cup B) = 1.1 - P(A \cap B)$. Poiché $P(A \cup B) \leq 1$, allora $1.1 - P(A \cap B) \leq 1$, quindi $P(A \cap B) \geq 0.1$.
#### References



