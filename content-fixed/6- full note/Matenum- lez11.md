---
title: Matenum  lez11
description: Appunto automatico
---

2025-03-11 12:15

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[sbobine]] [[matematica numerica]]

## Matenum- lez11

## Approssimazione di Funzioni e Dati

### Introduzione all'Approssimazione

Il corso inizia con l'introduzione al concetto di **approssimazione di funzioni e dati**. Si parte dall'ipotesi di avere una funzione $f$ definita su un intervallo $[a, b]$ della retta reale. Nel caso dei dati, si considera una collezione di misurazioni, rappresentate come coppie di istanti temporali (o più in generale, ascisse $x_i$) e valori misurati $y_i$.

### Motivazioni per l'Approssimazione

Si esplorano le ragioni per cui potrebbe essere utile o necessario approssimare funzioni e dati. L'idea fondamentale è di **rimpiazzare un oggetto potenzialmente complesso o difficile da manipolare con qualcosa di più gestibile**.

#### Approssimazione di Funzioni

Un contesto significativo in cui l'approssimazione di funzioni si rivela utile è nel calcolo di **integrali**. Se si ha un integrale definito di una funzione $f(x)$ tra $a$ e $b$, $\int_a^b f(x) dx$, e la funzione integranda è particolarmente complessa, potrebbe non essere calcolabile in forma esplicita o potrebbe essere espressa come una serie non facilmente valutabile. In questi casi, si può **rimpiazzare $f(x)$ con una sua approssimazione $\tilde{f}(x)$ che sia più facile da integrare**. La scelta di $\tilde{f}(x)$ deve essere tale che l'integrale $\int_a^b \tilde{f}(x) dx$ sia facilmente calcolabile. Una scelta suggerita è quella di approssimare $f(x)$ con un **polinomio**, poiché i polinomi sono facilmente integrabili. L'integrale di $f(x)$ ($\text{IDF}$) viene approssimato dall'integrale di $\tilde{f}(x)$ ($\text{ID}\tilde{f}$): $\text{IDF} = \int_a^b f(x) dx \approx \int_a^b \tilde{f}(x) dx = \text{ID}\tilde{f}$

Un altro contesto menzionato è la **soluzione di equazioni non lineari**, dove una funzione complessa potrebbe essere sostituita con un polinomio per semplificare la ricerca delle soluzioni.

#### Approssimazione di Dati

Quando si ha a che fare con una collezione di dati, come misurazioni di temperatura nel tempo, l'approssimazione può servire a **trovare una tendenza o una legge sottostante i dati**. Se da una serie di misurazioni si riesce a dedurre un andamento, questo può essere utilizzato per **stimare il valore della grandezza misurata in istanti o luoghi in cui non sono state effettuate misurazioni**.

La natura dei dati influenza il tipo di approssimazione più appropriato.

- **Pochi dati ben distribuiti:** In questo caso, si può cercare di costruire una curva che **replica i valori misurati nei punti in cui sono stati acquisiti**.
- **Molti dati distribuiti in modo caotico (nuvola di dati):** In questa situazione, cercare una curva che passi per tutti i punti risulterebbe in un andamento molto irregolare e poco significativo. È più sensato **cercare una curva più semplice, come una retta o una parabola, che colga l'andamento generale dei dati senza necessariamente passare per ogni singolo punto**.

### Tipi di Approssimazione: Interpolazione e Minimi Quadrati

Vengono distinti due tipi principali di approssimazione:

- **Interpolazione:** Questo tipo di approssimazione mira a costruire una curva che **passa esattamente per i punti dati**. È adatta quando si hanno pochi dati ben distribuiti o quando si vuole replicare esattamente i valori di una funzione in specifici punti. Un esempio menzionato è l'**interpolazione lineare a tratti**, dove si uniscono punti consecutivi con segmenti di retta.
- **Approssimazione ai Minimi Quadrati:** Questo metodo è più adatto a **dati distribuiti in modo caotico** e cerca di trovare una curva che **minimizza la somma dei quadrati delle differenze tra i valori misurati e i valori sulla curva approssimante**. L'obiettivo non è replicare esattamente i singoli valori, ma catturare l'andamento generale. Questo approccio è strettamente legato all'ambito statistico.

### Approssimazione di Funzioni e l'Analisi: La Serie di Taylor

Quando si considera l'approssimazione di funzioni, lo strumento principale offerto dall'analisi è lo **sviluppo di Taylor**. La serie di Taylor di una funzione $f(x)$ centrata in un punto $x_0$ è data da: $f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(x_0)}{k!} (x - x_0)^k = f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + ...$

Lo sviluppo di Taylor fornisce un'approssimazione della funzione in un intorno del punto $x_0$. Tuttavia, presenta due principali limiti:

1. **Località:** Lo sviluppo di Taylor è una buona approssimazione solo in un **intorno ristretto del punto in cui viene centrato**. L'esempio della funzione $f(x) = \frac{1}{x}$ centrata in $x_0 = 1$ illustra come l'approssimazione di Taylor possa divergere rapidamente al di fuori di un piccolo intervallo intorno a 1. Sebbene in alcuni casi, come l'esponenziale centrato in zero, l'approssimazione possa essere valida su un intervallo più ampio, la località rimane un problema generale.
2. **Regolarità:** Per poter scrivere l'espansione di Taylor fino a un certo ordine (e quindi ottenere una buona approssimazione troncando la serie), è necessario che la funzione $f(x)$ sia **sufficientemente derivabile e che le sue derivate siano continue**. In molti fenomeni realistici, la regolarità richiesta per lo sviluppo di Taylor potrebbe non essere soddisfatta.

A causa di questi limiti, si rende necessario esplorare metodi di approssimazione alternativi, come l'interpolazione.

### Interpolazione: Definizione e Obiettivo

L'**interpolazione** consiste nel trovare un oggetto (nel nostro caso, una funzione $\tilde{f}(x)$) che **passa esattamente per un insieme di $n+1$ coppie di dati $(x_i, y_i)$**, dove $i$ va da $0$ a $n$. Le $x_i$ sono chiamate **nodi di interpolazione** e devono essere **distinte tra loro** ($x_i \neq x_j$ per $i \neq j$). Le $y_i$ rappresentano i **valori da interpolare**, che possono essere i valori di una funzione $f(x)$ nei nodi ($y_i = f(x_i)$) o direttamente dei dati misurati.

L'obiettivo dell'interpolazione è trovare una funzione $\tilde{f}(x)$ tale che: $\tilde{f}(x_i) = y_i \quad \text{per } i = 0, 1, ..., n$ Queste condizioni sono chiamate **condizioni di interpolazione**.

### Scelta della Funzione Interpolante

La funzione $\tilde{f}(x)$ può essere scelta tra diverse classi di funzioni:

1. **Interpolazione Polinomiale:** In questo caso, la funzione interpolante $\tilde{f}(x)$ è un **polinomio**. L'insieme dei polinomi di grado al più $Q$ con coefficienti reali è denotato con $\mathbb{P}_Q$, e un generico polinomio $P_Q(x) \in \mathbb{P}_Q$ ha la forma: $P_Q(x) = a_0 + a_1 x + a_2 x^2 + ... + a_Q x^Q$, dove $a_i \in \mathbb{R}$ per $i = 0, ..., Q$. Ci focalizzeremo principalmente su questo tipo di interpolazione.
    
2. **Interpolazione Trigonometrica:** In questo caso, la funzione interpolante è una combinazione di funzioni trigonometriche, come **seni e coseni**, o equivalentemente, **esponenziali complessi**. Questo tipo di interpolazione è strettamente legato alle **serie di Fourier** e viene spesso utilizzato per approssimare segnali e onde. La forma generale può essere espressa come una somma: $\tilde{f}(x) = \sum_{k} A_k e^{ikx}$, dove $A_k \in \mathbb{R}$ sono i coefficienti.
    
3. **Interpolazione Razionale:** In questo caso, la funzione interpolante $\tilde{f}(x)$ è un **quoziente di due polinomi**: $\tilde{f}(x) = \frac{P(x)}{S(x)} = \frac{a_0 + a_1 x + ... + a_k x^k}{b_0 + b_1 x + ... + b_s x^s}$, dove $a_i, b_i \in \mathbb{R}$.
    

### Interpolazione Polinomiale: Esistenza e Unicità

Si introduce una proposizione fondamentale riguardante l'interpolazione polinomiale:

**Proposizione:** Si considerino $n+1$ coppie di dati $(x_i, y_i)$ per $i = 0, ..., n$, con i nodi di interpolazione $x_i$ distinti tra loro. Allora, **esiste ed è unico un polinomio $\pi_n(x)$ di grado minore o uguale a $n$ tale che $\pi_n(x_i) = y_i$ per $i = 0, ..., n$**.

Il simbolo $\pi_n$ viene utilizzato per denotare il polinomio interpolante di grado al più $n$. È importante notare lo stretto legame tra il numero di dati ($n+1$) e il grado massimo del polinomio interpolante ($n$). Questo è una caratteristica distintiva dell'interpolazione polinomiale rispetto ad altri metodi di approssimazione come i minimi quadrati, dove il grado del polinomio approssimante può essere scelto indipendentemente dal numero di dati.

Il polinomio di interpolazione $\pi_n(x)$ viene definito come un'**approssimazione globale**, in quanto utilizza tutti i dati contemporaneamente per la sua costruzione.

#### Dimostrazione dell'Unicità

Per dimostrare l'unicità del polinomio interpolante, si procede per **assurdo**. Si suppone che esistano due polinomi, $\pi_n(x)$ e $\pi_n^*(x)$, entrambi di grado al più $n$, tali che interpolino gli stessi $n+1$ punti $(x_i, y_i)$: $\pi_n(x_i) = y_i \quad \text{per } i = 0, ..., n$ $\pi_n^*(x_i) = y_i \quad \text{per } i = 0, ..., n$

Si considera la **differenza tra i due polinomi**: $d(x) = \pi_n(x) - \pi_n^*(x)$

Poiché sia $\pi_n(x)$ che $\pi_n^*(x)$ hanno grado al più $n$, anche la loro differenza $d(x)$ avrà grado al più $n$. Valutando $d(x)$ nei nodi di interpolazione $x_i$, si ottiene: $d(x_i) = \pi_n(x_i) - \pi_n^*(x_i) = y_i - y_i = 0 \quad \text{per } i = 0, ..., n$

Questo significa che il polinomio $d(x)$ ha **$n+1$ radici distinte** (i nodi di interpolazione $x_0, x_1, ..., x_n$). Tuttavia, un **polinomio non nullo di grado al più $n$ può avere al massimo $n$ radici distinte**. Affinché un polinomio di grado al più $n$ abbia $n+1$ radici distinte, esso deve essere **identicamente nullo**: $d(x) = 0 \quad \forall x$

Questo implica che: $\pi_n(x) - \pi_n^*(x) = 0 \implies \pi_n(x) = \pi_n^*(x)$

Pertanto, il polinomio interpolante di grado al più $n$ che passa per $n+1$ punti distinti è **unico**. La dimostrazione dell'esistenza verrà affrontata successivamente attraverso la costruzione esplicita del polinomio interpolante.

_____
# Polinomio Interpolatore

## Unicità del Polinomio Interpolatore

Il professore inizia dimostrando per assurdo l'**unicità del polinomio di grado $n$ che interpola $n+1$ punti**. Suppone che esistano due polinomi distinti, $\pi_n(x)$ e $\pi_n^*(x)$, entrambi di grado $n$, che replicano gli stessi valori $y_i$ in corrispondenza dei nodi $x_i$ per $i$ che va da $0$ a $n$. Questo significa che:

$\pi_n(x_i) = y_i$ $\pi_n^*(x_i) = y_i$

per $i = 0, 1, ..., n$.

Successivamente, introduce un **polinomio differenza** $G_n(x)$ definito come:

$G_n(x) = \pi_n(x) - \pi_n^*(x)$.

Questo polinomio $G_n(x)$ è anch'esso di grado al più $n$, essendo la differenza di due polinomi di grado $n$. Valutando $G_n(x)$ nei nodi di interpolazione $x_i$, si ottiene:

$G_n(x_i) = \pi_n(x_i) - \pi_n^*(x_i) = y_i - y_i = 0$.

Questo implica che il polinomio $G_n(x)$ di grado $n$ si annulla in $n+1$ punti distinti ($x_0, x_1, ..., x_n$). Un polinomio di grado $n$ può avere al massimo $n$ radici (o zeri), a meno che non sia il **polinomio identicamente nullo**.

L'unica possibilità affinché un polinomio di grado $n$ abbia $n+1$ zeri è che sia il polinomio che associa $0$ ad ogni valore di $x$:

$G_n(x) = 0$ per ogni $x$.

Sostituendo la definizione di $G_n(x)$, si ha:

$\pi_n(x) - \pi_n^*(x) = 0$ per ogni $x$.

Da cui si conclude che:

$\pi_n(x) = \pi_n^*(x)$ per ogni $x$.

Questo contraddice l'ipotesi iniziale che i due polinomi fossero distinti, dimostrando quindi l'**unicità del polinomio interpolatore** di grado $n$.

## Costruzione del Polinomio Interpolatore

Dopo aver dimostrato l'unicità, il professore passa alla **costruzione del polinomio interpolatore** $\pi_n(x)$. Inizia considerando un caso particolare per poi generalizzare.

### Caso Particolare: Interpolazione con Tre Nodi e Valori Specifici

Si considerano tre nodi di interpolazione: $x_0 = 0$, $x_1 = 0.5$, $x_2 = 1$, e i corrispondenti valori da interpolare: $y_0 = 0$, $y_1 = 1$, $y_2 = 0$. L'obiettivo è costruire un polinomio di grado 2 (una parabola) che passi per i punti $(0, 0)$, $(0.5, 1)$, e $(1, 0)$.

Invece di chiamare subito il polinomio $\pi_2(x)$, il professore lo battezza $f_1(x)$. L'indice '1' nel pedice indica il nodo in corrispondenza del quale il valore interpolato non è zero (in questo caso, $y_1 = 1$ al nodo $x_1 = 0.5$).

Si cerca un polinomio di grado 2 che si annulli in $x_0 = 0$ e $x_2 = 1$. Un modo semplice per costruire un tale polinomio è il prodotto di monomi:

$(x - x_0)(x - x_2) = (x - 0)(x - 1) = x(x - 1) = x^2 - x$.

Questo polinomio si annulla in $x = 0$ e $x = 1$, soddisfacendo le condizioni in $x_0$ e $x_2$. Tuttavia, valutandolo in $x_1 = 0.5$, si ottiene:

$(0.5)^2 - 0.5 = 0.25 - 0.5 = -0.25$.

Per fare in modo che il polinomio valga $1$ in $x_1 = 0.5$, è necessario **dividere per il valore che il polinomio assume in quel punto**:

$$f_1(x) = \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} = \frac{(x - 0)(x - 1)}{(0.5 - 0)(0.5 - 1)} = \frac{x(x - 1)}{0.5 \times (-0.5)} = \frac{x^2 - x}{-0.25} = -4(x^2 - x) = 4x - 4x^2$$.

Quindi, il polinomio interpolatore $f_1(x) = 4x - 4x^2$ è una parabola che passa per i punti $(0, 0)$, $(0.5, 1)$, e $(1, 0)$.

### Generalizzazione: Costruzione dei Polinomi Caratteristici di Lagrange

Il professore generalizza ora la costruzione al caso di $n+1$ nodi di interpolazione generici $x_0, x_1, ..., x_n$ e suppone che l'unico valore da interpolare diverso da zero (e uguale a 1) sia in corrispondenza del $k$-esimo nodo $x_k$, cioè $y_k = 1$ e $y_i = 0$ per $i \neq k$. Si vuole costruire il polinomio $f_k(x)$ di grado $n$ tale che:

$f_k(x_j) = \delta_{jk} = \begin{cases} 1 & \text{se } j = k \\ 0 & \text{se } j \neq k \end{cases}$

dove $\delta_{jk}$ è il **delta di Kronecker**.

Analogamente al caso particolare, $f_k(x)$ deve annullarsi in tutti i nodi $x_j$ con $j \neq k$. Questo si ottiene considerando il prodotto di monomi che includono tutti i fattori $(x - x_j)$ eccetto quello con $j = k$:

$$\prod_{j=0, j \neq k}^{n} (x - x_j) = (x - x_0)(x - x_1)...(x - x_{k-1})(x - x_{k+1})...(x - x_n)$$.

Questo prodotto è un polinomio di grado $n$. Per fare in modo che $f_k(x_k) = 1$, si divide questo prodotto per il valore che assume in $x = x_k$:

$$f_k(x) = \frac{\prod_{j=0, j \neq k}^{n} (x - x_j)}{\prod_{j=0, j \neq k}^{n} (x_k - x_j)}$$.

Il polinomio $f_k(x)$ così definito è chiamato **polinomio caratteristico di Lagrange** associato al nodo $x_k$.

Il denominatore è una costante data da:

$(x_k - x_0)(x_k - x_1)...(x_k - x_{k-1})(x_k - x_{k+1})...(x_k - x_n)$.

Quando si valuta $f_k(x)$ in un nodo $x_i$:

- Se $i = k$, il numeratore contiene tutti i fattori del denominatore (con l'ordine dei termini possibilmente diverso), quindi $f_k(x_k) = 1$.
- Se $i \neq k$, uno dei fattori nel numeratore sarà $(x_i - x_i) = 0$, rendendo l'intero prodotto nullo, quindi $f_k(x_i) = 0$.

### Analogie con la Funzione Caratteristica

Il professore fa un'analogia tra il polinomio caratteristico di Lagrange e la **funzione caratteristica** (o funzione indicatrice) di un insieme $\Omega$ in $\mathbb{R}^d$, spesso indicata con $\mathbb{1}_{\Omega}(x)$ o $\chi_{\Omega}(x)$. Questa funzione vale:

$\chi_{\Omega}(x) = \begin{cases} 1 & \text{se } x \in \omega \\ 0 & \text{se } x \notin \omega \end{cases}$.

L'analogia risiede nel fatto che $f_k(x)$ "si accende" (vale 1) solo nel nodo $x_k$ e "si spegne" (vale 0) in tutti gli altri nodi di interpolazione. Questa proprietà permette di localizzare il contributo di ciascun nodo all'interpolazione.

### Caso Generale: Polinomio Interpolatore di Lagrange

Infine, il professore considera il caso generale in cui si vogliono interpolare i valori $y_0, y_1, ..., y_n$ in corrispondenza dei nodi $x_0, x_1, ..., x_n$ . Il **polinomio interpolatore di Lagrange** $\pi_n(x)$ si può esprimere come una **combinazione lineare dei polinomi caratteristici di Lagrange** :

$\pi_n(x) = \sum_{k=0}^{n} y_k f_k(x) = \sum_{k=0}^{n} y_k \prod_{j=0, j \neq k}^{n} \frac{(x - x_j)}{(x_k - x_j)}$ .

Dove $y_k$ sono i valori da interpolare nei nodi $x_k$.

Per verificare che questo polinomio interpola correttamente i dati, valutiamolo in un nodo $x_i$:

$\pi_n(x_i) = \sum_{k=0}^{n} y_k f_k(x_i)$

Sappiamo che $f_k(x_i) = \delta_{ik}$, quindi $f_k(x_i)$ è 1 se $k = i$ e 0 se $k \neq i$. Pertanto, nella somma, l'unico termine non nullo è quello in cui $k = i$:

$\pi_n(x_i) = y_i f_i(x_i) = y_i \times 1 = y_i$.

Questo dimostra che il polinomio di Lagrange $\pi_n(x)$ passa per tutti i punti $(x_i, y_i)$ per $i = 0, 1, ..., n$. Essendo una combinazione lineare di polinomi di grado $n$, anche $\pi_n(x)$ è un polinomio di grado al più $n$. Per l'unicità dimostrata in precedenza, questo è l'unico polinomio di grado $n$ che interpola i dati.


___


## Costruzione del Polinomio di Interpolazione

### Primo Metodo: Utilizzo dei Polinomi Caratteristici (Forma di Lagrange)

L'obiettivo è costruire un polinomio $\pi_2(x)$ di grado 2 che soddisfi tre condizioni di interpolazione date da tre nodi $(x_0, y_0), (x_1, y_1), (x_2, y_2)$.

Si decide di esprimere $\pi_2(x)$ come una combinazione lineare di tre polinomi caratteristici $f_0(x), f_1(x), f_2(x)$ associati rispettivamente ai nodi $x_0, x_1, x_2$:

$\pi_2(x) = a f_0(x) + b f_1(x) + c f_2(x)$

dove $a, b, c$ sono i coefficienti da determinare.

Questi polinomi caratteristici hanno la seguente proprietà fondamentale:

$f_i(x_j) = \delta_{ij} = \begin{cases} 1 & \text{se } i = j \\ 0 & \text{se } i \neq j \end{cases}$

Esplicitamente:

$f_0(x_0) = 1, f_0(x_1) = 0, f_0(x_2) = 0$ $f_1(x_0) = 0, f_1(x_1) = 1, f_1(x_2) = 0$ $f_2(x_0) = 0, f_2(x_1) = 0, f_2(x_2) = 1$

Ora si impongono le condizioni di interpolazione:

1. $\pi_2(x_0) = y_0$: $a f_0(x_0) + b f_1(x_0) + c f_2(x_0) = y_0$ $a \cdot 1 + b \cdot 0 + c \cdot 0 = y_0$ $\implies \mathbf{a = y_0}$
    
2. $\pi_2(x_1) = y_1$: $a f_0(x_1) + b f_1(x_1) + c f_2(x_1) = y_1$ $a \cdot 0 + b \cdot 1 + c \cdot 0 = y_1$ $\implies \mathbf{b = y_1}$
    
3. $\pi_2(x_2) = y_2$: $a f_0(x_2) + b f_1(x_2) + c f_2(x_2) = y_2$ $a \cdot 0 + b \cdot 0 + c \cdot 1 = y_2$ $\implies \mathbf{c = y_2}$
    

Sostituendo i valori di $a, b, c$ nell'espressione di $\pi_2(x)$, si ottiene la forma del polinomio interpolatore di grado 2:

$\mathbf{\pi_2(x) = y_0 f_0(x) + y_1 f_1(x) + y_2 f_2(x)}$

Generalizzando questo risultato per $n+1$ punti di interpolazione $(x_i, y_i)$ con $i = 0, 1, \dots, n$, il polinomio interpolatore $\pi_n(x)$ di grado $n$ è dato da:

$\mathbf{\pi_n(x) = \sum_{k=0}^{n} y_k f_k(x)}$

dove $f_k(x)$ è il polinomio caratteristico associato al nodo $x_k$ e ha la forma:

$\mathbf{f_k(x) = \prod_{j=0, j\neq k}^{n} \frac{x - x_j}{x_k - x_j}}$

Sostituendo l'espressione di $f_k(x)$ nella formula per $\pi_n(x)$, si ottiene la **forma di Lagrange del polinomio interpolatore**:

$\mathbf{\pi_n(x) = \sum_{k=0}^{n} y_k \prod_{j=0, j\neq k}^{n} \frac{x - x_j}{x_k - x_j}}$

### Secondo Metodo: Risoluzione di un Sistema Lineare

Un altro modo per costruire il polinomio interpolatore $\pi_n(x)$ è di esprimerlo nella sua forma generale come un polinomio di grado $n$:

$\mathbf{\pi_n(x) = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n = \sum_{i=0}^{n} a_i x^i}$

dove $a_0, a_1, \dots, a_n$ sono i coefficienti incogniti (in numero di $n+1$) che devono essere determinati.

Utilizzando le $n+1$ condizioni di interpolazione $\pi_n(x_i) = y_i$ per $i = 0, 1, \dots, n$, si ottiene un sistema di $n+1$ equazioni lineari nelle $n+1$ incognite $a_0, a_1, \dots, a_n$:

$\begin{cases} a_0 + a_1 x_0 + a_2 x_0^2 + \dots + a_n x_0^n = y_0 \\ a_0 + a_1 x_1 + a_2 x_1^2 + \dots + a_n x_1^n = y_1 \\ \vdots \ a_0 + a_1 x_n + a_2 x_n^2 + \dots + a_n x_n^n = y_n \end{cases}$

Questo sistema può essere scritto in forma matriciale come:

$\mathbf{B A = Y}$

dove:

- $\mathbf{B}$ è la **matrice di Vandermonde** di dimensione $(n+1) \times (n+1)$:
    
    $\mathbf{B} = \begin{pmatrix} 1 & x_0 & x_0^2 & \dots & x_0^n \\ 1 & x_1 & x_1^2 & \dots & x_1^n \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_n & x_n^2 & \dots & x_n^n \end{pmatrix}$
    
- $\mathbf{A}$ è il vettore delle incognite (i coefficienti del polinomio):
    
    $\mathbf{A} = \begin{pmatrix} a_0 \\ a_1 \\ \vdots \\ a_n \end{pmatrix}$
    
- $\mathbf{Y}$ è il vettore dei valori da interpolare:
    
    $\mathbf{Y} = \begin{pmatrix} y_0 \ y_1 \ \vdots \ y_n \end{pmatrix}$
    

La matrice di Vandermonde $\mathbf{B}$ è non singolare (e quindi il sistema ammette un'unica soluzione) se e solo se tutti i nodi $x_i$ sono distinti. Questa è l'ipotesi fondamentale sotto cui si formalizza il problema di interpolazione.

Tuttavia, la matrice di Vandermonde è **fortemente mal condizionata**, simile alla matrice di Hilbert. Questo significa che la risoluzione diretta di questo sistema può portare a coefficienti numericamente inaffidabili, specialmente per valori di $n$ elevati. Pertanto, questo secondo metodo, pur essendo concettualmente semplice, è spesso evitato nella pratica numerica. I metodi iterativi possono migliorare la situazione, ma rimangono comunque rischiosi. Nonostante ciò, questo approccio è spesso presentato a livelli didattici inferiori come introduzione al problema.

### Comandi MATLAB per l'Interpolazione Polinomiale

MATLAB fornisce due comandi principali per lavorare con l'interpolazione polinomiale:

1. **`Polifit(x, y, n)`**: Questo comando costruisce il polinomio interpolatore.
    
    - **Input**:
        - `x`: un vettore contenente i nodi di interpolazione.
        - `y`: un vettore contenente i valori da interpolare nei rispettivi nodi.
        - `n`: il grado del polinomio interpolatore desiderato. È importante notare che, se si hanno $n+1$ dati e si desidera interpolarli esattamente, il grado del polinomio sarà $n$. La funzione `Polifit` è in realtà progettata anche per il fitting ai minimi quadrati, dove il grado del polinomio può essere inferiore al numero di dati. Nel caso di interpolazione esatta con $n+1$ dati, specificare il grado $n$ corrisponde a trovare il polinomio che passa esattamente per tutti i punti.
    - **Output**:
        - `C`: un vettore contenente i coefficienti del polinomio interpolatore di grado $n$. I coefficienti sono ordinati in modo **decrescente rispetto al grado**, ovvero $C = [c_n, c_{n-1}, \dots, c_1, c_0]$, dove il polinomio è $p(x) = c_n x^n + c_{n-1} x^{n-1} + \dots + c_1 x + c_0$. È fondamentale ricordare questo ordine per interpretare correttamente i risultati.
2. **`Polival(C, D)`**: Questo comando valuta un polinomio in uno o più punti.
    
    - **Input**:
        - `C`: il vettore dei coefficienti del polinomio (ottenuto da `Polifit` o definito manualmente).
        - `D`: uno scalare o un vettore contenente i punti in cui si desidera valutare il polinomio.
    - **Output**:
        - `Q`: uno scalare o un vettore contenente i valori del polinomio valutato nei punti specificati in `D`. Se `D` è un numero reale, `Q` sarà un numero reale, $\pi_n(D) = Q$. Se `D` è un vettore di punti, `Q` sarà un vettore contenente i valori del polinomio in corrispondenza di ciascun punto in `D`.

L'utilità di `Polival` si manifesta, ad esempio, quando si vuole **valutare l'errore dell'interpolazione**. Anche se il polinomio interpolatore coincide con la funzione nei nodi di interpolazione, in altri punti potrebbe esserci una discrepanza. Valutando il polinomio in punti intermedi (non inclusi nel set di nodi) e confrontando il valore ottenuto con il valore effettivo della funzione (se conosciuta), è possibile stimare l'errore commesso dall'approssimazione polinomiale.

### Errore del Polinomio di Interpolazione

Quando si interpola una funzione $f(x)$ utilizzando un polinomio $\pi_n(x)$ costruito sui nodi $x_0, x_1, \dots, x_n$, è importante analizzare l'errore di interpolazione, definito come la differenza tra la funzione e il polinomio:

$\mathbf{e_n(f(x)) = f(x) - \pi_n(f(x))}$

Se la funzione $f(x)$ è sufficientemente regolare, ovvero se $f$ è continua insieme alle sue derivate fino all'ordine $n+1$ nell'intervallo $I = [\min(x_0, \dots, x_n), \max(x_0, \dots, x_n)]$, allora per ogni $x \in I$, esiste un punto $\alpha(x) \in I$ (che dipende da $x$) tale che l'errore è dato da:

$\mathbf{e_n(f(x)) = \frac{1}{(n+1)!} f^{(n+1)}(\alpha(x)) w_{n+1}(x)}$

dove $f^{(n+1)}(\alpha(x))$ è la derivata di ordine $n+1$ di $f$ valutata nel punto $\alpha(x)$, e $w_{n+1}(x)$ è il polinomio nodale:

$\mathbf{w_{n+1}(x) = \prod_{k=0}^{n} (x - x_k) = (x - x_0)(x - x_1)\dots(x - x_n)}$

Questo risultato è notevole perché fornisce un'espressione esatta per l'errore di interpolazione. Tuttavia, il punto $\alpha(x)$ è generalmente sconosciuto. Questo implica che, per rendere operativa questa formula, spesso si passa a una maggiorazione dell'errore, utilizzando il massimo valore assoluto della derivata $(n+1)$-esima nell'intervallo $I$.

È importante notare che, se $x$ coincide con uno dei nodi di interpolazione $x_i$, allora $w_{n+1}(x_i) = 0$, e di conseguenza l'errore $e_n(f(x_i)) = 0$. Questo conferma che il polinomio interpolatore passa esattamente per i punti dati.
#### References
[[Appunti Mate Num-lez11.pdf]]


