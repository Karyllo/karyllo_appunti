---
title: "Prob- Ese03"
---

2025-03-11 13:26

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine]] [[probabilità]]

## Prob- Ese03

## Spiegazione del Professore sui Problemi delle Urne

### Introduzione ai Problemi delle Urne: Biglie Distinguibili e Indistinguibili

***Esercizio 1**.*  
*Un’urna contiene 10 biglie, di cui 3 bianche, 5 rosse e 2 gialle. Estraendo 4 biglie dall’urna, quale è la probabilità di aver estratto esattamente 2 biglie bianche, 1 rossa e 1 gialla, al variare delle possibili modalità di estrazione (con o senza reimmissione e simultanea)?*

Il professore introduce la lezione parlando dello studio degli eventi e in particolare del concetto di **probabilità condizionata**. Tuttavia, decide di dedicare una parte della lezione al **calcolo combinatorio** attraverso esempi meno banali relativi a **problemi con le urne**, anticipando gli argomenti che saranno trattati nella prima prova parziale.

Viene ripreso un breve esercizio sulle urne accennato nella lezione precedente, focalizzandosi ora non solo sugli spazi campionari ma anche sul calcolo delle probabilità. Si considera un'urna contenente **10 biglie**: **tre bianche**, **cinque rosse** e **due gialle** (inizialmente scritte come blu, ma poi corretto in bianco). L'obiettivo è calcolare la probabilità di estrarre **quattro biglie** dall'urna, ritrovandosi con **due bianche**, **una rossa** e **una blu** (corretto poi in gialla), al variare delle modalità di estrazione: **senza reimmissione**, **con reimmissione** e **simultanea**.

Il professore sottolinea che nel caso di **biglie indistinguibili**, la situazione si complicherebbe. Per semplificare l'analisi iniziale, si assume che **tutte le biglie siano distinguibili**, anche quelle dello stesso colore (ad esempio, numerando le biglie rosse come $R_1, R_2, R_3, R_4, R_5$). Questo è un trucco efficace per poter ragionare inizialmente con spazi campionari in cui tutti gli esiti sono equiprobabili.

### Estrazione con Reimmissione

#### Definizione dello Spazio Campionario e Probabilità

Nel caso di **estrazione con reimmissione**, dopo ogni estrazione, la biglia viene rimessa nell'urna. L'esito di un esperimento aleatorio con quattro estrazioni con reimmissione è una **quadrupla ordinata** di elementi provenienti dall'insieme delle biglie (considerate distinguibili). Lo spazio campionario è quindi $\Omega = B^4$, dove $B$ è l'insieme delle 10 biglie distinguibili, e la sua cardinalità è $|\Omega| = 10^4$.

Il professore spiega che, a differenza di scenari più semplici, qui l'**equiprobabilità dell'evento elementare non vale** direttamente se consideriamo solo il colore. Ad esempio, è più probabile estrarre quattro biglie rosse che quattro biglie gialle perché ci sono più biglie rosse. Tuttavia, se consideriamo le biglie come distinguibili, ogni sequenza di quattro biglie specifiche ha la stessa probabilità di $\frac{1}{10} \times \frac{1}{10} \times \frac{1}{10} \times \frac{1}{10} = (\frac{1}{10})^4$.

#### Calcolo della Probabilità: Due Bianche, Una Rossa e Una Gialla

Per calcolare la probabilità di ottenere due biglie bianche, una rossa e una gialla, si procede in due passaggi:

1. **Contare il numero di sequenze favorevoli**: Si considerano le sequenze di quattro estrazioni che contengono due bianche (B), una rossa (R) e una gialla (G). Il numero di anagrammi della stringa "BBRG" è dato da: $\frac{4!}{2!1!1!} = \frac{24}{2} = 12$ Queste 12 sequenze rappresentano i diversi ordini in cui possono essere estratte le biglie dei colori desiderati (ad esempio, BBRG, BRBG, BRGB, RBBC, ecc.).
    
2. **Contare il numero di modi di scegliere le biglie specifiche**:
    
    - Ci sono 3 biglie bianche, quindi ci sono $3 \times 3 = 9$ modi di estrarre due biglie bianche (con reimmissione).
    - Ci sono 5 biglie rosse, quindi ci sono 5 modi di estrarre una biglia rossa.
    - Ci sono 2 biglie gialle, quindi ci sono 2 modi di estrarre una biglia gialla.

Il numero totale di sequenze favorevoli considerando le biglie distinguibili è quindi $12 \times 3 \times 3 \times 5 \times 2 = 1080$ (il professore nel trascritto indica un "3 quadro", che si interpreta come $3 \times 3$).

La probabilità è data dal rapporto tra il numero di casi favorevoli e il numero di casi possibili: $P(2B, 1R, 1G) = \frac{1080}{10^4} = \frac{1080}{10000} = \frac{108}{1000} = \frac{27}{250}$.

#### Approccio Alternativo con Probabilità Indipendenti

Il professore presenta un modo più intuitivo di vedere il risultato, sfruttando l'indipendenza delle estrazioni con reimmissione. La probabilità di una specifica sequenza, ad esempio Bianco-Bianco-Rosso-Giallo, è: $P(B_1) \times P(B_2) \times P(R_3) \times P(G_4) = \frac{3}{10} \times \frac{3}{10} \times \frac{5}{10} \times \frac{2}{10}$ Siccome ci sono 12 possibili ordini, la probabilità totale è: $12 \times \left( \frac{3}{10} \times \frac{3}{10} \times \frac{5}{10} \times \frac{2}{10} \right) = 12 \times \frac{90}{10000} = \frac{1080}{10000} = \frac{27}{250}$.

Si sottolinea che la probabilità di ogni permutazione della sequenza di colori (BBRG) è la stessa a causa dell'indipendenza e del fatto che stiamo moltiplicando le probabilità dei singoli colori ad ogni estrazione.

### Estrazione Senza Reimmissione

#### Definizione dello Spazio Campionario e Probabilità

Nel caso di **estrazione senza reimmissione**, le biglie estratte non vengono rimesse nell'urna, quindi la composizione dell'urna cambia ad ogni estrazione e le estrazioni non sono indipendenti. Se consideriamo le biglie distinguibili, lo spazio campionario $\Omega$ è l'insieme delle **disposizioni semplici** di 4 elementi scelti da un insieme di 10, e la sua cardinalità è: $|\Omega| = 10 \times 9 \times 8 \times 7 = P(10, 4) = \frac{10!}{(10-4)!} = \frac{10!}{6!} = 5040$. Ogni sequenza ordinata di 4 biglie distinte ha la stessa probabilità di $\frac{1}{10 \times 9 \times 8 \times 7}$.

È importante notare che in questo caso non è possibile estrarre più biglie di un certo colore di quante ne siano presenti nell'urna (ad esempio, non si possono estrarre quattro biglie blu se ce ne sono solo due).

#### Calcolo della Probabilità: Due Bianche, Una Rossa e Una Gialla

Per calcolare la probabilità di ottenere due bianche, una rossa e una gialla, si contano le sequenze favorevoli considerando un ordine fissato (ad esempio, BBRG) e poi si moltiplica per il numero di permutazioni:

1. **Numero di modi per una sequenza specifica (ad esempio, BBRG)**:
    
    - La prima biglia bianca può essere scelta in 3 modi.
    - La seconda biglia bianca può essere scelta in 2 modi (rimanendo 2 nell'urna).
    - La biglia rossa può essere scelta in 5 modi.
    - La biglia gialla può essere scelta in 2 modi. Il numero di modi per una sequenza specifica è $3 \times 2 \times 5 \times 2 = 60$.
2. **Numero di ordini possibili**: Come nel caso con reimmissione, ci sono 12 ordini possibili per i colori (anagrammi di BBRG).
    

Il numero totale di sequenze favorevoli è $60 \times 12 = 720$.

La probabilità è quindi: $P(2B, 1R, 1G) = \frac{720}{5040} = \frac{1}{7}$.

### Estrazione Simultanea

#### Definizione dello Spazio Campionario e Probabilità

L'**estrazione simultanea** di quattro biglie può essere pensata come un'estrazione senza reimmissione in cui l'ordine non conta. Lo spazio campionario $\Omega$ è l'insieme dei **sottoinsiemi** di 4 biglie scelte dalle 10, e la sua cardinalità è data dalla combinazione: $|\Omega| = \binom{10}{4} = \frac{10!}{4!(10-4)!} = \frac{10 \times 9 \times 8 \times 7}{4 \times 3 \times 2 \times 1} = 10 \times 3 \times 7 = 210$. Si assume che ogni sottoinsieme di 4 biglie abbia la stessa probabilità di essere estratto.

#### Calcolo della Probabilità: Due Bianche, Una Rossa e Una Gialla

Per ottenere due bianche, una rossa e una gialla simultaneamente, dobbiamo scegliere:

- 2 biglie bianche dalle 3 disponibili: $\binom{3}{2} = \frac{3!}{2!1!} = 3$ modi.
- 1 biglia rossa dalle 5 disponibili: $\binom{5}{1} = \frac{5!}{1!4!} = 5$ modi.
- 1 biglia gialla dalle 2 disponibili: $\binom{2}{1} = \frac{2!}{1!1!} = 2$ modi.

Il numero di sottoinsiemi favorevoli è $\binom{3}{2} \times \binom{5}{1} \times \binom{2}{1} = 3 \times 5 \times 2 = 30$.

La probabilità è quindi: $P(2B, 1R, 1G) = \frac{30}{210} = \frac{1}{7}$.

Il professore sottolinea che, come previsto intuitivamente, la probabilità ottenuta con l'estrazione simultanea è la stessa di quella ottenuta con l'estrazione senza reimmissione, evidenziando la coerenza del modello.

___
# Generalizzazione del Problema delle Urne

## Caso con Reimmissione

Il professore introduce la generalizzazione del problema delle urne considerando un'urna contenente un numero intero $N$ di biglie, suddivise in $R$ biglie rosse e $B$ biglie bianche, dove $N = R + B$. Si estrae un numero intero $n$ di biglie dall'urna, con reimmissione. Si vuole determinare la probabilità dell'evento $E_{k,n}$, cioè di estrarre esattamente $k$ biglie rosse su $n$ estrazioni.

Il professore procede fissando un ordine di estrazione, supponendo di estrarre prima tutte le $k$ biglie rosse e poi le $n-k$ biglie bianche. La probabilità di estrarre una biglia rossa in una singola estrazione è $\frac{R}{N}$, e la probabilità di estrarre una biglia bianca è $\frac{B}{N}$. Dato che le estrazioni sono con reimmissione, gli eventi sono indipendenti.

La probabilità di ottenere la sequenza specifica di $k$ rosse seguite da $n-k$ bianche è: $$ P(\underbrace{R, R, ..., R}_{k \text{ volte}}, \underbrace{B, B, ..., B}_{n-k \text{ volte}}) = \left(\frac{R}{N}\right)^k \left(\frac{B}{N}\right)^{n-k} $$ Tuttavia, l'ordine in cui vengono estratte le $k$ biglie rosse e le $n-k$ biglie bianche non è specificato. Il numero di sequenze possibili con $k$ biglie rosse e $n-k$ biglie bianche è dato dal coefficiente binomiale $\binom{n}{k} = \frac{n!}{k!(n-k)!}$, che rappresenta il numero di anagrammi di una stringa con $k$ "R" e $n-k$ "B".

Pertanto, la probabilità di estrarre esattamente $k$ biglie rosse in $n$ estrazioni con reimmissione è data dalla **distribuzione binomiale**: $$ P(E_{k,n}) = P(K=k) = \binom{n}{k} \left(\frac{R}{N}\right)^k \left(\frac{B}{N}\right)^{n-k} $$ dove $K$ è la variabile aleatoria che rappresenta il numero di biglie rosse estratte in $n$ prove.

## Caso senza Reimmissione

Nel caso senza reimmissione, l'estrazione di una biglia modifica la composizione dell'urna per le estrazioni successive, rendendo gli eventi dipendenti. Si vuole ancora calcolare la probabilità di estrarre esattamente $k$ biglie rosse in $n$ estrazioni.

Il professore considera lo spazio campionario $\Omega$ come l'insieme delle disposizioni di $n$ biglie distinte scelte tra le $N$ biglie distinguibili, la cui cardinalità è $P(N, n) = \frac{N!}{(N-n)!} = N \times (N-1) \times ... \times (N-n+1)$. Ogni disposizione ha la stessa probabilità di verificarsi, che decresce ad ogni estrazione.

Per contare il numero di esiti favorevoli (esattamente $k$ rosse e $n-k$ bianche in un ordine specifico), si scelgono $k$ posizioni per le biglie rosse e $n-k$ posizioni per le biglie bianche. Il numero di modi di scegliere $k$ biglie rosse dalle $R$ disponibili in un certo ordine è $P(R, k) = \frac{R!}{(R-k)!}$, e il numero di modi di scegliere $n-k$ biglie bianche dalle $B$ disponibili in un certo ordine è $P(B, n-k) = \frac{B!}{(B-(n-k))!} = \frac{B!}{(B-n+k)!}$.

Il numero totale di sequenze con $k$ rosse e $n-k$ bianche (senza considerare l'ordine dei colori) è $\binom{n}{k}$. Quindi, il numero di esiti favorevoli è $\binom{n}{k} \times P(R, k) \times P(B, n-k) = \frac{n!}{k!(n-k)!} \times \frac{R!}{(R-k)!} \times \frac{B!}{(B-n+k)!}$.

La probabilità di estrarre esattamente $k$ biglie rosse in $n$ estrazioni senza reimmissione è data dalla **distribuzione ipergeometrica**: $$ P(E_{k,n}) = \frac{\binom{R}{k} \binom{B}{n-k}}{\binom{N}{n}} $$ Come sottolineato dal professore e corretto dagli studenti, questa formula può essere derivata considerando lo spazio campionario come l'insieme di tutti i possibili sottoinsiemi di $n$ biglie scelte dalle $N$, la cui cardinalità è $\binom{N}{n} = \frac{N!}{n!(N-n)!}$. Il numero di modi di scegliere $k$ biglie rosse dalle $R$ è $\binom{R}{k} = \frac{R!}{k!(R-k)!}$, e il numero di modi di scegliere $n-k$ biglie bianche dalle $B$ è $\binom{B}{n-k} = \frac{B!}{(n-k)!(B-n+k)!}$. Il rapporto tra il numero di casi favorevoli e il numero di casi possibili fornisce la probabilità ipergeometrica.

## Caso di Estrazione Simultanea

Il professore spiega che l'estrazione simultanea di $n$ biglie può essere vista come un'estrazione senza reimmissione in cui l'ordine non conta. Dal punto di vista probabilistico, il risultato è equiprobabile al caso senza reimmissione.

Lo spazio campionario $\Omega$ è l'insieme dei sottoinsiemi di $n$ biglie scelte dalle $N$, con cardinalità $\binom{N}{n}$. Per ottenere esattamente $k$ biglie rosse e $n-k$ biglie bianche, dobbiamo scegliere $k$ biglie rosse dalle $R$ disponibili in $\binom{R}{k}$ modi e $n-k$ biglie bianche dalle $B$ disponibili in $\binom{B}{n-k}$ modi.

La probabilità di ottenere esattamente $k$ biglie rosse (e quindi $n-k$ bianche) in un'estrazione simultanea di $n$ biglie è quindi la stessa della distribuzione ipergeometrica: $$ P(E_{k,n}) = \frac{\binom{R}{k} \binom{B}{n-k}}{\binom{N}{n}} $$

## ==Esercizio: Servizio da Caffè di Nonna Papera==

==Il problema riguarda un servizio da caffè per sei persone composto da sei piattini e sei tazzine, con due set (tazzina e piattino) di colore arancione, due gialle e due rosse. Ciccio preleva alcuni set abbinati e poi dispone le tazzine a caso sui piattini a caso.==

### ==Parte 1: Probabilità di scegliere due set tazzina-piattino dello stesso colore==

==Ciccio sceglie due set tazzina-piattino. Ci si chiede la probabilità che questi due set siano dello stesso colore. Si può pensare a questo come un'estrazione simultanea di due set dagli sei disponibili. Ci sono in totale $\binom{6}{2} = \frac{6 \times 5}{2} = 15$ possibili coppie di set.==

==Ci sono tre colori, e per ogni colore ci sono due set abbinati. Il numero di modi di scegliere due set arancioni è $\binom{2}{2} = 1$. Lo stesso vale per i set gialli ($\binom{2}{2} = 1$) e rossi ($\binom{2}{2} = 1$). Quindi ci sono $1 + 1 + 1 = 3$ modi di scegliere due set dello stesso colore.==

==La probabilità di scegliere due set dello stesso colore è quindi: $$ P(\text{due set dello stesso colore}) = \frac{\text{numero di coppie dello stesso colore}}{\text{numero totale di coppie}} = \frac{3}{15} = \frac{1}{5} $$ Il professore arriva allo stesso risultato.==

### ==Parte 2: Probabilità che due set scelti a caso siano ancora abbinati dopo la disposizione casuale delle tazzine==

==Ciccio estrae due set (che possono essere dello stesso colore o di colori diversi) e poi dispone le sei tazzine a caso sui sei piattini. Si vuole calcolare la probabilità che, scegliendo a caso due set dopo questa operazione, questi siano ancora abbinati.==

==Il professore suggerisce di semplificare il problema considerando i piattini già disposti e permutando solo le tazzine. Il numero totale di possibili disposizioni delle sei tazzine sui sei piattini, considerando le due tazzine di ogni colore indistinguibili, è $\frac{6!}{2!2!2!} = \frac{720}{8} = 90$.==

==Solo una di queste 90 disposizioni corrisponde al caso in cui tutte le tazzine sono abbinate ai rispettivi piattini per colore. Quindi, la probabilità che i sei set siano abbinati dopo la disposizione casuale è $\frac{1}{90}$.==

==Tuttavia, la domanda si concentra sulla probabilità che _due_ set scelti a caso siano ancora abbinati. Il professore introduce informalmente l'idea di utilizzare il teorema della probabilità totale. Sia $A$ l'evento che i due set scelti a caso dopo la ridistribuzione siano abbinati, e siano $U$ l'evento che i due set estratti inizialmente siano dello stesso colore, e $D$ l'evento che siano di colori diversi. Sappiamo che $P(U) = 1/5$ e $P(D) = 1 - 1/5 = 4/5$.==

==Se i due set estratti inizialmente erano dello stesso colore, dopo la ridistribuzione casuale, la probabilità che _quei due specifici set_ siano ancora abbinati è 1.==

==Se i due set estratti inizialmente erano di colori diversi, consideriamo una coppia specifica di tazzina e piattino di colori diversi. Dopo la permutazione casuale delle tazzine, la probabilità che questa specifica tazzina finisca sul suo piattino abbinato è $1/6$. Pertanto, la probabilità che una specifica coppia di set di colori diversi rimanga abbinata è $1/6$.==

==Tuttavia, il professore semplifica ulteriormente il ragionamento considerando solo la scelta casuale delle tazzine sui piattini fissi. Se scegliamo due set a caso _dopo_ la ridistribuzione casuale, la probabilità che siano abbinati dipende dalla probabilità che le tazzine corrispondenti siano state posizionate sui loro piattini.==

==Considerando la semplificazione del professore dove solo le tazzine vengono permutate, la probabilità che _tutti_ i set siano abbinati è $\frac{1}{90}$. Per la probabilità che _due specifici_ set scelti a caso siano abbinati, il ragionamento diventa più complesso e il professore rimanda a un approccio con la probabilità condizionata per la lezione successiva. Il punto chiave sottolineato è la possibilità di semplificare il problema considerando solo la permutazione delle tazzine sui piattini fissi senza perdita di generalità.==

___

# Esercizio Tratto da un Tema d'Esame (Due Anni Fa)

## Descrizione del Problema

L'esercizio riguarda un servizio da caffè per sei persone composto da sei piattini e sei tazzine. I sei set abbinati (tazzina e piattino dello stesso colore) sono di tre colori differenti: due arancioni, due gialle e due rosse. Inizialmente, le tazzine sono abbinate ai piattini dello stesso colore. Ciccio preleva alcuni set abbinati dalla credenza e poi dispone le tazzine a caso sui piattini a caso.

## Parte 1: Probabilità di Scegliere Due Set Tazzina-Piattino dello Stesso Colore

Si chiede la probabilità che, scegliendo due set tazzina-piattino, questi siano dello stesso colore. Il professore propone di ragionare in termini di **estrazione simultanea di due set dagli sei disponibili**.

- **Spazio Campionario:** Il numero totale di modi di scegliere 2 set da 6 è dato dalla combinazione di 6 elementi presi 2 alla volta: $$ \binom{6}{2} = \frac{6!}{2!(6-2)!} = \frac{6 \times 5}{2 \times 1} = 15 $$ Quindi, ci sono **15 possibili coppie di set**.
    
- **Eventi Favorevoli:** Ci sono tre colori, e per ogni colore ci sono due set abbinati. Per scegliere due set dello stesso colore, dobbiamo scegliere entrambi i set di quel colore.
    
    - Numero di modi di scegliere 2 set arancioni: $\binom{2}{2} = 1$
    - Numero di modi di scegliere 2 set gialli: $\binom{2}{2} = 1$
    - Numero di modi di scegliere 2 set rossi: $\binom{2}{2} = 1$ Il numero totale di modi di scegliere due set dello stesso colore è $1 + 1 + 1 = 3$.
- **Probabilità:** La probabilità di scegliere due set dello stesso colore è il rapporto tra il numero di casi favorevoli e il numero di casi possibili: $$ P(\text{due set dello stesso colore}) = \frac{3}{15} = \frac{1}{5} $$ Il professore conclude questa parte con il risultato $\frac{3}{15}$.
    

## Parte 2: Probabilità che i Set Scelti Siano Ancora Abbinati Dopo la Disposizione Casuale delle Tazzine

Ciccio prende **tutti i sei set** dalla credenza (questa parte è una precisazione successiva del professore rispetto a "alcuni set" menzionato inizialmente) e poi dispone le **sei tazzine a caso sui sei piattini** in modo equiprobabile. Si chiede la probabilità che, scegliendo **due set** a caso dopo questa operazione, questi siano ancora abbinati.

Il professore introduce un'idea per semplificare il problema: **assumere che i piattini siano già disposti e considerare solo le permutazioni delle tazzine**. Questa assunzione non comporta perdita di generalità se si è coerenti nel conteggio delle configurazioni favorevoli.

- **Spazio Campionario Semplificato (Permutazioni delle Tazzine):** Considerando i piattini fissi, il numero totale di modi di disporre le sei tazzine sui sei piattini è dato dalle permutazioni di 6 oggetti, tenendo conto che ci sono due tazzine di ogni colore che consideriamo **indistinguibili** ai fini del calcolo delle configurazioni distinte: $$ \frac{6!}{2!2!2!} = \frac{720}{2 \times 2 \times 2} = \frac{720}{8} = 90 $$ Quindi, ci sono **90 possibili configurazioni** delle tazzine sui piattini.
    
- **Evento Favorevole (Tutti i Colori Abbinati):** La configurazione in cui tutti i colori sono abbinati è **una sola**: ogni piattino ha la tazzina del suo stesso colore. Se avessimo considerato le tazzine distinguibili, ci sarebbero state $6!$ permutazioni totali e $2! \times 2! \times 2!$ modi di abbinare correttamente i colori, portando a una probabilità di $\frac{8}{720} = \frac{1}{90}$, lo stesso risultato.
    
- **Probabilità che i Sei Set Siano Abbinati:** La probabilità che tutti e sei i set siano abbinati dopo la disposizione casuale delle tazzine è: $$ P(\text{tutti abbinati}) = \frac{1}{90} $$
    
- **Probabilità che Due Set Scelti a Caso Siano Ancora Abbinati:** Questa parte è più complessa e il professore introduce informalmente l'idea di usare il teorema della probabilità totale, condizionando sul fatto che i due set estratti inizialmente fossero dello stesso colore o di colori diversi.
    
    - Sia $A$ l'evento che i due set scelti a caso dopo la ridistribuzione siano abbinati.
    - Sia $U$ l'evento che i due set estratti inizialmente fossero dello stesso colore, con $P(U) = 1/5$ (calcolato nella Parte 1).
    - Sia $D$ l'evento che i due set estratti inizialmente fossero di colori diversi, con $P(D) = 1 - P(U) = 1 - 1/5 = 4/5$.
    
    Il professore afferma che:
    
    - Se i due set estratti inizialmente erano dello stesso colore ($U$), la probabilità che dopo la ridistribuzione casuale _quei due specifici set_ siano ancora abbinati è **1**. Questo perché le tazzine sono semplicemente state rimescolate, ma i due set che inizialmente formavano una coppia colorata rimangono individualmente come una tazzina e un piattino di quel colore.
        
    - Se i due set estratti inizialmente erano di colori diversi ($D$), la probabilità che _una specifica coppia_ di tazzina e piattino di colori diversi formi un set abbinato dopo la permutazione casuale delle tazzine è intuitivamente $\frac{1}{6}$.
        
    
    Il professore imposta la probabilità richiesta usando il teorema della probabilità totale: $$ P(A) = P(A|U)P(U) + P(A|D)P(D) $$ Dove:
    
    - $P(A|U) = 1$ (se i due set iniziali erano dello stesso colore, rimangono abbinati come tali).
    - $P(U) = 1/5$.
    - $P(D) = 4/5$.
    - $P(A|D)$ è la probabilità che due set scelti a caso (che inizialmente erano di colori diversi) siano abbinati dopo la permutazione casuale. Il professore indica che questa probabilità è $\frac{1}{5}$ (implicitamente nel prosieguo del suo ragionamento: $P(A) = 1 \times \frac{1}{5} + \frac{1}{5} \times \frac{4}{5}$). Tuttavia, la giustificazione esatta di questo valore ($\frac{1}{5}$ per $P(A|D)$) non viene fornita in dettaglio in questo estratto e il professore rimanda a una spiegazione più formale con la probabilità condizionata nella lezione successiva.
    
    Il professore conclude, fornendo il risultato finale: $$ P(A) = 1 \times \frac{1}{5} + \frac{1}{5} \times \frac{4}{5} = \frac{1}{5} + \frac{4}{25} = \frac{5 + 4}{25} = \frac{9}{25} $$ Questo risultato si basa sull'affermazione (non completamente giustificata in questo estratto) che la probabilità che due set scelti a caso siano abbinati, dato che inizialmente erano di colori diversi, sia $\frac{1}{5}$.
    
    Il professore sottolinea che la furbizia di aver fissato i piattini all'inizio semplifica il problema senza alterare la probabilità finale.

___

## Esercizio sull'Indipendenza di Eventi

Il professore ha trattato l'indipendenza di eventi, iniziando dalla definizione per due eventi e poi estendendola a famiglie di eventi, con un focus particolare su un esempio con il lancio di dadi e sulla distinzione tra indipendenza a coppie e indipendenza mutua.

### Indipendenza tra Due Eventi

Ricordiamo che due eventi $A$ e $B$, definiti su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, sono **indipendenti** se e solo se la probabilità della loro intersezione è uguale al prodotto delle loro probabilità: $P(A \cap B) = P(A) P(B)$

### Esempio con Tre Eventi (Lancio di Due Dadi)

Per illustrare il concetto di indipendenza per più di due eventi e la differenza tra indipendenza a coppie e indipendenza mutua, il professore ha considerato l'esperimento del lancio di un dado equo per due volte.

**Spazio Campionario:** Lo spazio campionario $\Omega$ è l'insieme di tutte le possibili coppie di risultati dei due lanci: $\Omega = {(i, j) \mid i, j \in {1, 2, 3, 4, 5, 6}}$ La sigma-algebra considerata è $\mathcal{P}(\Omega)$, l'insieme di tutti i sottoinsiemi di $\Omega$. Poiché il dado è equo, ogni esito elementare $(i, j)$ ha probabilità $P({(i, j)}) = \frac{1}{36}$.

**Definizione degli Eventi:** Sono stati definiti i seguenti tre eventi:

- $A$: "Numero dispari sul primo lancio". Questo evento include gli esiti ${(1, j), (3, j), (5, j) \mid j \in {1, 2, 3, 4, 5, 6}}$.
- $B$: "Numero dispari sul secondo lancio". Questo evento include gli esiti ${(i, 1), (i, 3), (i, 5) \mid i \in {1, 2, 3, 4, 5, 6}}$.
- $C$: "La somma dei risultati è dispari". Questo evento include le coppie $(i, j)$ dove uno tra $i$ e $j$ è pari e l'altro è dispari.

**Calcolo delle Probabilità dei Singoli Eventi:**

- $P(A) = P(\text{primo lancio è 1, 3 o 5}) = \frac{3 \times 6}{36} = \frac{18}{36} = \frac{1}{2}$.
- $P(B) = P(\text{secondo lancio è 1, 3 o 5}) = \frac{6 \times 3}{36} = \frac{18}{36} = \frac{1}{2}$.
- $P(C) = P(\text{un lancio è pari e l'altro è dispari}) = P(\text{primo dispari, secondo pari}) + P(\text{primo pari, secondo dispari}) = \frac{3 \times 3}{36} + \frac{3 \times 3}{36} = \frac{9}{36} + \frac{9}{36} = \frac{18}{36} = \frac{1}{2}$.

**Verifica dell'Indipendenza a Coppie:** Ora verifichiamo se ogni coppia di eventi è indipendente.

- **Indipendenza di $A$ e $B$:** $A \cap B$ è l'evento "numero dispari sul primo lancio E numero dispari sul secondo lancio". Gli esiti sono ${(1, 1), (1, 3), (1, 5), (3, 1), (3, 3), (3, 5), (5, 1), (5, 3), (5, 5)}$, quindi $|A \cap B| = 9$. $P(A \cap B) = \frac{9}{36} = \frac{1}{4}$. $P(A) P(B) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$. Poiché $P(A \cap B) = P(A) P(B)$, gli eventi $A$ e $B$ sono **indipendenti**.
    
- **Indipendenza di $A$ e $C$:** $A \cap C$ è l'evento "numero dispari sul primo lancio E la somma è dispari". Se il primo lancio è dispari, affinché la somma sia dispari, il secondo lancio deve essere pari. Gli esiti sono ${(1, 2), (1, 4), (1, 6), (3, 2), (3, 4), (3, 6), (5, 2), (5, 4), (5, 6)}$, quindi $|A \cap C| = 9$. $P(A \cap C) = \frac{9}{36} = \frac{1}{4}$. $P(A) P(C) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$. Poiché $P(A \cap C) = P(A) P(C)$, gli eventi $A$ e $C$ sono **indipendenti**.
    
    Il professore ha anche introdotto brevemente la probabilità condizionata per spiegare questo punto: $P(C|A) = P(\text{somma dispari} | \text{primo lancio dispari}) = P(\text{secondo lancio pari}) = \frac{1}{2}$. Quindi, $P(A \cap C) = P(C|A) P(A) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$.
    
- **Indipendenza di $B$ e $C$:** $B \cap C$ è l'evento "numero dispari sul secondo lancio E la somma è dispari". Se il secondo lancio è dispari, affinché la somma sia dispari, il primo lancio deve essere pari. Gli esiti sono ${(2, 1), (4, 1), (6, 1), (2, 3), (4, 3), (6, 3), (2, 5), (4, 5), (6, 5)}$, quindi $|B \cap C| = 9$. $P(B \cap C) = \frac{9}{36} = \frac{1}{4}$. $P(B) P(C) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$. Poiché $P(B \cap C) = P(B) P(C)$, gli eventi $B$ e $C$ sono **indipendenti**.
    
    Similmente, usando la probabilità condizionata: $P(C|B) = P(\text{somma dispari} | \text{secondo lancio dispari}) = P(\text{primo lancio pari}) = \frac{1}{2}$. Quindi, $P(B \cap C) = P(C|B) P(B) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$.
    

**Verifica dell'Indipendenza Mutua (della Famiglia di Eventi ${A, B, C}$):** Perché la famiglia di eventi ${A, B, C}$ sia indipendente, deve valere che $P(A \cap B \cap C) = P(A) P(B) P(C)$.

$A \cap B \cap C$ è l'evento "numero dispari sul primo lancio E numero dispari sul secondo lancio E la somma è dispari". Se il primo lancio è dispari e il secondo lancio è dispari, la loro somma è necessariamente pari. Pertanto, l'evento $A \cap B \cap C$ è l'insieme vuoto, e la sua probabilità è: $P(A \cap B \cap C) = P(\emptyset) = 0$.

D'altra parte, il prodotto delle probabilità dei singoli eventi è: $P(A) P(B) P(C) = \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}$.

Poiché $P(A \cap B \cap C) = 0 \neq \frac{1}{8} = P(A) P(B) P(C)$, la famiglia di eventi ${A, B, C}$ **non è una famiglia indipendente**, nonostante gli eventi siano indipendenti a coppie.

### ==Definizione Generale di Indipendenza per una Famiglia di Eventi==

==Sia $(\Omega, \mathcal{F}, P)$ uno spazio di probabilità e ${E_i}_{i \in I}$ una famiglia di eventi in $\mathcal{F}$, indicizzata da un insieme $I$ (finito o infinito). La famiglia ${E_i}_{i \in I}$ è detta **indipendente** se per ogni sottoinsieme finito $J \subseteq I$, si ha: $P\left(\bigcap_{i \in J} E_i\right) = \prod_{i \in J} P(E_i)$==

### ==Indipendenza a Coppie vs. Indipendenza Mutua per Famiglie Finite==

==L'esempio precedente dimostra che per una famiglia di tre eventi, l'indipendenza a coppie non implica l'indipendenza della famiglia. Il professore ha sottolineato che **se una famiglia di eventi è indipendente, allora ogni sua sottofamiglia (in particolare ogni coppia di eventi) è indipendente.** Tuttavia, la proposizione inversa non è sempre vera, come mostrato dall'esempio dei lanci di dado.==

### ==Indipendenza per Famiglie Infinite (o Numerabili)==

==Il professore ha poi posto la domanda se, data una famiglia infinita di eventi ${E_i}_{i \in I}$, l'indipendenza a coppie implichi l'indipendenza dell'intera famiglia. Ha affermato che **questo è falso per una famiglia infinita**.==

==Successivamente, ha considerato il caso di una famiglia numerabile di eventi ${E_i}_{i \in \mathbb{N}}$ e ha chiesto se la condizione che ogni sottofamiglia finita sia indipendente implichi che l'intera famiglia sia indipendente, ovvero se valga: $P\left(\bigcap_{i=1}^{\infty} E_i\right) = \prod_{i=1}^{\infty} P(E_i)$==

==Il professore ha spiegato che **la risposta è affermativa** e che questo risultato si basa su una proprietà fondamentale delle misure di probabilità: la **continuità lungo successioni monotone di eventi**.==

==**Dimostrazione Intuïtiva:** Consideriamo le intersezioni parziali: $F_n = \bigcap_{i=1}^{n} E_i$ Poiché ogni sottofamiglia finita è indipendente, sappiamo che $P(F_n) = P\left(\bigcap_{i=1}^{n} E_i\right) = \prod_{i=1}^{n} P(E_i)$.==

==La successione di eventi $(F_n)_{n \in \mathbb{N}}$ è una successione decrescente (in quanto $F_{n+1} = F_n \cap E_{n+1} \subseteq F_n$), e la sua intersezione è $\bigcap_{n=1}^{\infty} F_n = \bigcap_{i=1}^{\infty} E_i$.==

==Per la proprietà di continuità delle misure di probabilità per successioni decrescenti di eventi, si ha: $P\left(\bigcap_{n=1}^{\infty} F_n\right) = \lim_{n \to \infty} P(F_n)$==

==Sostituendo le espressioni trovate: $P\left(\bigcap_{i=1}^{\infty} E_i\right) = \lim_{n \to \infty} \left(\prod_{i=1}^{n} P(E_i)\right) = \prod_{i=1}^{\infty} P(E_i)$==

==Questo dimostra che se ogni sottofamiglia finita di una famiglia numerabile di eventi è indipendente, allora l'intera famiglia è indipendente. Il professore ha concluso sottolineando l'importanza di questa proprietà per la verifica dell'indipendenza in casi numerabili, in quanto riduce il problema al controllo dell'indipendenza di sottoinsiemi finiti, che è spesso più gestibile.==

==**Generalizzazione a un Insieme Numerabile di Indici $\Sigma$:**==

==Se l'insieme di indici non è necessariamente ${1, 2, ...}$, ma un generico insieme numerabile $\Sigma$, è possibile stabilire una biiezione con $\mathbb{N}$. L'argomentazione basata sulle intersezioni parziali lungo questa biiezione rimane valida, sfruttando sempre la continuità della misura di probabilità. Tuttavia, è cruciale che la proprietà di indipendenza valga per **ogni** sottoinsieme finito di $\Sigma$.==

___

## Discussione Generale sull'Indipendenza di Famiglie di Eventi

Il professore ha introdotto una discussione generale sulla nozione di indipendenza estesa a famiglie di eventi, ponendo l'accento sulla relazione tra indipendenza a coppie e indipendenza mutua, specialmente nel contesto di famiglie finite e infinite (o numerabili).

### Indipendenza a Coppie vs. Indipendenza Mutua per Famiglie Finite

Il professore ha ripreso l'esempio del lancio di due dadi e dei tre eventi $A$, $B$, e $C$. Come precedentemente dimostrato, questi tre eventi sono indipendenti a coppie:

- $P(A \cap B) = P(A) P(B) = \frac{1}{4}$
- $P(A \cap C) = P(A) P(C) = \frac{1}{4}$
- $P(B \cap C) = P(B) P(C) = \frac{1}{4}$

Tuttavia, la famiglia ${A, B, C}$ non è indipendente poiché $P(A \cap B \cap C) = 0 \neq P(A) P(B) P(C) = \frac{1}{8}$. Da questo esempio, il professore ha concluso che **per una famiglia finita di tre (o più) eventi, l'indipendenza a coppie non implica necessariamente l'indipendenza mutua (della famiglia)**.

Il professore ha poi posto una domanda generale: **"È vero che se degli eventi sono indipendenti a coppie, allora la famiglia è indipendente?"**. La risposta fornita è che **per una famiglia finita, questo è falso**, come dimostrato dall'esempio precedente.

### Definizione Formale di Indipendenza per una Famiglia di Eventi

Il professore ha quindi fornito la definizione formale di indipendenza per una famiglia di eventi ${E_i}_{i \in I}$, dove $I$ è un insieme di indici (finito o numerabile):

**Una famiglia di eventi ${E_i}_{i \in I}$ è detta indipendente se per ogni sottoinsieme finito $J \subseteq I$, si ha:** $\qquad P\left(\bigcap_{i \in J} E_i\right) = \prod_{i \in J} P(E_i)$

Questa definizione richiede che **la probabilità dell'intersezione di un numero qualsiasi finito di eventi della famiglia sia uguale al prodotto delle probabilità di questi eventi presi singolarmente**.

### Indipendenza per Famiglie Infinite (o Numerabili)

Il professore ha successivamente considerato il caso in cui la famiglia di eventi è infinita o numerabile. Ha affermato che **se una famiglia è indipendente, allora ogni sua sottofamiglia finita è indipendente**, il che segue direttamente dalla definizione.

La domanda cruciale posta è stata se la condizione di indipendenza per ogni sottofamiglia finita sia sufficiente per garantire l'indipendenza dell'intera famiglia (anche numerabile), nel senso che $P\left(\bigcap_{i=1}^{\infty} E_i\right) = \prod_{i=1}^{\infty} P(E_i)$.

La risposta fornita dal professore è che **sì, questa proprietà è vera**. La giustificazione si basa sulla **continuità delle misure di probabilità rispetto a successioni monotone di eventi**.

**Spiegazione Dettagliata per una Famiglia Numerabile:**

Consideriamo una famiglia numerabile di eventi ${E_i}_{i \in \mathbb{N}}$. Supponiamo che ogni sottofamiglia finita sia indipendente. Definiamo la successione di eventi $(F_n)_{n \in \mathbb{N}}$ come le intersezioni parziali: $F_n = \bigcap_{i=1}^{n} E_i$

Poiché ogni sottofamiglia finita è indipendente, abbiamo: $P(F_n) = P\left(\bigcap_{i=1}^{n} E_i\right) = \prod_{i=1}^{n} P(E_i)$

La successione $(F_n)_{n \in \mathbb{N}}$ è **decrescente**, cioè $F_{n+1} = F_n \cap E_{n+1} \subseteq F_n$. L'intersezione di tutti gli eventi della famiglia è: $\bigcap_{i=1}^{\infty} E_i = \bigcap_{n=1}^{\infty} F_n$

Per la **continuità delle misure di probabilità per successioni decrescenti di eventi**, si ha: $P\left(\bigcap_{n=1}^{\infty} F_n\right) = \lim_{n \to \infty} P(F_n)$

Sostituendo l'espressione per $P(F_n)$: $P\left(\bigcap_{i=1}^{\infty} E_i\right) = \lim_{n \to \infty} \left(\prod_{i=1}^{n} P(E_i)\right) = \prod_{i=1}^{\infty} P(E_i)$

Questo dimostra che per una famiglia numerabile di eventi, se ogni sottofamiglia finita è indipendente, allora l'intera famiglia è indipendente. Il professore ha sottolineato che questa è una proprietà **sorprendente e molto utile** per la verifica dell'indipendenza in casi numerabili, in quanto permette di concentrarsi sulle sottofamiglie finite.

**Estensione a un Insieme Numerabile di Indici:**

Se l'insieme di indici è un generico insieme numerabile $\Sigma$, si può stabilire una biiezione con $\mathbb{N}$. L'argomentazione basata sulla continuità della probabilità applicata alle intersezioni parziali ordinate secondo questa biiezione rimane valida. È fondamentale che l'indipendenza valga per ogni possibile sottoinsieme finito di $\Sigma$.
#### References



[[appunti- prob ese3.pdf]]