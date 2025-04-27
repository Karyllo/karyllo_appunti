---
title: "prob-lez08"
---

2025-03-03 15:26

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

Tags:[[sbobine]] [[probabilità]]


## Ripasso di Concetti Fondamentali: Sigma Algebra e Funzione di Ripartizione

### Proprietà della Sigma Algebra: Unione e Intersezione

Il professore ha inizialmente chiarito una proprietà fondamentale delle **sigma algebre**. Se si hanno una sequenza di insiemi $A_1, A_2, ..., A_n$ che appartengono a una data sigma algebra, allora non solo la loro **unione** ($\bigcup_{i=1}^{n} A_i$) appartiene alla sigma algebra, ma anche la loro **intersezione** ($\bigcap_{i=1}^{n} A_i$) appartiene alla sigma algebra.

Questa seconda affermazione, relativa all'intersezione, non viene esplicitamente inclusa tra gli assiomi che definiscono una sigma algebra, ma è una **conseguenza** di tali assiomi. Per dimostrarlo, si può utilizzare il fatto che se un insieme $B$ appartiene alla sigma algebra, allora anche il suo **complementare** $B^c$ appartiene alla sigma algebra. Inoltre, l'unione di insiemi appartenenti alla sigma algebra è anch'essa un elemento della sigma algebra.

La dimostrazione si basa sull'applicazione delle leggi di De Morgan. Consideriamo l'intersezione di una sequenza di insiemi $A_i$ appartenenti alla sigma algebra: $\bigcap_{i=1}^{n} A_i$. Possiamo riscrivere questa intersezione come il complementare dell'unione dei complementari:

$\bigcap_{i=1}^{n} A_i = (\bigcup_{i=1}^{n} A_i^c)^c$

Poiché ogni $A_i$ appartiene alla sigma algebra, anche il suo complementare $A_i^c$ appartiene alla sigma algebra per definizione di sigma algebra. Di conseguenza, l'unione dei complementari $\bigcup_{i=1}^{n} A_i^c$ appartiene anch'essa alla sigma algebra. Infine, il complementare di questa unione, $(\bigcup_{i=1}^{n} A_i^c)^c$, che è uguale all'intersezione originale, appartiene anch'esso alla sigma algebra. Il professore ha suggerito di svolgere questa dimostrazione come **esercizio**.

### Ripasso di Calcolo Combinatorio nell'Esercitazione

Il professore ha annunciato che l'esercitazione successiva avrebbe riguardato un **ripasso di calcolo combinatorio** e del suo utilizzo nei problemi elementari di conteggio legati alla **probabilità discreta su insiemi finiti**. Ha sottolineato l'importanza di queste esercitazioni, pur precisando che la parte combinatorica del corso sarebbe stata abbastanza minimale.

### Funzione di Ripartizione per Misure di Probabilità su $\mathbb{R}$

#### Definizione e Collegamento con la Misura di Probabilità

Il professore ha ripreso il concetto di **funzione di ripartizione** per descrivere le misure di probabilità sull'insieme dei numeri reali, $\mathbb{R}$. Ha ricordato l'enunciato fondamentale stabilito nella lezione precedente:

- Se $F$ è una funzione di ripartizione (nel senso definito precedentemente), allora esiste un'**unica** misura di probabilità $P_F$ sui borelliani di $\mathbb{R}$ tale che per ogni $x \in \mathbb{R}$: $P_F((-\infty, x]) = F(x)$.
    
- Viceversa, data una misura di probabilità $P$ sui borelliani di $\mathbb{R}$, la funzione $F(x) = P((-\infty, x])$ è una funzione di ripartizione.
    

#### Proprietà della Funzione di Ripartizione: Dimostrazioni

Il professore ha poi ripreso la dimostrazione di alcune proprietà fondamentali della funzione di ripartizione $F(x) = P((-\infty, x])$, dove $P$ è una misura di probabilità sui borelliani di $\mathbb{R}$.

**1. Monotonia non decrescente:**

Per $x \le y$, l'evento $(-\infty, x]$ è contenuto nell'evento $(-\infty, y]$. Poiché la misura di probabilità $P$ è monotona, si ha:

$P((-\infty, x]) \le P((-\infty, y])$

Dalla definizione di $F(x)$, questo implica che $F(x) \le F(y)$ per $x \le y$. Quindi, $F$ è una **funzione monotona non decrescente**.

**2. Limite a $-\infty$:**

Consideriamo la successione di eventi $A_n = (-\infty, -n]$ per $n \in \mathbb{N}$. Questa è una **successione decrescente** di insiemi, cioè $A_{n+1} \subseteq A_n$ per ogni $n$, e la sua intersezione è l'insieme vuoto: $\bigcap_{n=1}^{\infty} A_n = \emptyset$.

Per la proprietà di **continuità delle misure di probabilità**, abbiamo:

$\lim_{n \to \infty} P(A_n) = P(\bigcap_{n=1}^{\infty} A_n) = P(\emptyset) = 0$

Poiché $P(A_n) = P((-\infty, -n]) = F(-n)$, si ha:

$\lim_{n \to \infty} F(-n) = 0$

Grazie alla **monotonia** di $F$, questo risultato si estende a qualunque successione $x_n$ che tende a $-\infty$, quindi:

$\lim_{x \to -\infty} F(x) = 0$.

**3. Limite a $+\infty$:**

Consideriamo la successione di eventi $B_n = (-\infty, n]$ per $n \in \mathbb{N}$. Questa è una **successione crescente** di insiemi, cioè $B_n \subseteq B_{n+1}$ per ogni $n$, e la sua unione è l'insieme di tutti i numeri reali: $\bigcup_{n=1}^{\infty} B_n = \mathbb{R}$.

Per la proprietà di continuità delle misure di probabilità, abbiamo:

$\lim_{n \to \infty} P(B_n) = P(\bigcup_{n=1}^{\infty} B_n) = P(\mathbb{R}) = 1$

Poiché $P(B_n) = P((-\infty, n]) = F(n)$, si ha:

$\lim_{n \to \infty} F(n) = 1$

Ancora per la **monotonia** di $F$, questo risultato si estende a qualunque successione $x_n$ che tende a $+\infty$, quindi:

$\lim_{x \to +\infty} F(x) = 1$.

**4. Continuità da destra:**

Consideriamo un punto $x \in \mathbb{R}$ e la successione di eventi $C_n = (-\infty, x + \frac{1}{n}]$ per $n \in \mathbb{N}$. Questa è una **successione decrescente** di insiemi, cioè $C_{n+1} \subseteq C_n$ per ogni $n$, e la sua intersezione è l'insieme $(-\infty, x]$: $\bigcap_{n=1}^{\infty} C_n = (-\infty, x]$.

Per la proprietà di continuità delle misure di probabilità, abbiamo:

$\lim_{n \to \infty} P(C_n) = P(\bigcap_{n=1}^{\infty} C_n) = P((-\infty, x])$

Poiché $P(C_n) = P((-\infty, x + \frac{1}{n}]) = F(x + \frac{1}{n})$ e $P((-\infty, x]) = F(x)$, si ha:

$\lim_{n \to \infty} F(x + \frac{1}{n}) = F(x)$

Questo dimostra che $F$ è **continua da destra** in ogni punto $x \in \mathbb{R}$.

Il professore ha menzionato un'osservazione fatta da uno studente riguardo alla continuità da sinistra, spiegando che l'approccio con $x - \frac{1}{n}$ non converge in modo monotono all'insieme desiderato, il che impedisce di applicare direttamente la proprietà di continuità della misura.

### Funzione di Ripartizione di una Variabile Aleatoria

Data una variabile aleatoria reale $X$ definita su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, la **funzione di ripartizione associata a $X$**, indicata con $F_X(x)$, è definita come la probabilità che la variabile aleatoria $X$ assuma un valore minore o uguale a $x$:

$F_X(x) = P({ \omega \in \Omega : X(\omega) \le x }) = P(X \le x)$

Il professore ha osservato che questa probabilità può anche essere interpretata come la probabilità che la **legge immagine** $P_X$ (definita sui borelliani di $\mathbb{R}$) associ all'intervallo $(-\infty, x]$:

$F_X(x) = P_X((-\infty, x])$

Secondo la proposizione precedentemente dimostrata, $F_X(x)$ è effettivamente una **funzione di ripartizione** (monotona non decrescente, con limiti 0 a $-\infty$ e 1 a $+\infty$, e continua da destra). Questo stabilisce un legame fondamentale tra variabili aleatorie e funzioni di ripartizione: ogni variabile aleatoria reale è associata a una specifica funzione di ripartizione che ne descrive la distribuzione di probabilità.

### Estrazione di Informazioni dalla Funzione di Ripartizione

Il professore ha mostrato come estrarre informazioni probabilistiche su una variabile aleatoria $X$, con funzione di ripartizione $F_X(x)$, direttamente dalla funzione stessa.

**1. Probabilità che $X$ sia strettamente maggiore di $x$:**

$P(X > x) = 1 - P(X \le x) = 1 - F_X(x)$.

**2. Probabilità che $X$ appartenga all'intervallo semiaperto $(a, b]$:**

$P(a < X \le b) = P(X \le b) - P(X \le a) = F_X(b) - F_X(a)$.

Questa formula si ottiene considerando l'evento ${X \le b}$ come l'unione disgiunta di ${X \le a}$ e ${a < X \le b}$ e utilizzando la proprietà di additività delle probabilità.

**3. Probabilità che $X$ sia strettamente minore di $x$:**

$P(X < x) = \lim_{y \to x^-} F_X(y) = F_X(x^-)$.

Questa probabilità è data dal limite sinistro della funzione di ripartizione nel punto $x$. Per dimostrarlo, si considera una successione crescente $x_n$ che converge a $x$ da sinistra. Gli eventi ${X \le x_n}$ formano una successione crescente di insiemi la cui unione è ${X < x}$. Per la continuità dal basso delle misure di probabilità, si ha $P(X < x) = \lim_{n \to \infty} P(X \le x_n) = \lim_{n \to \infty} F_X(x_n) = F_X(x^-)$. Questo punto era lasciato come **esercizio**.

**4. Probabilità che $X$ sia uguale a $x$:**

$P(X = x) = P(X \le x) - P(X < x) = F_X(x) - F_X(x^-)$.

La probabilità che $X$ assuma esattamente il valore $x$ è data dalla **discontinuità** (o salto) della funzione di ripartizione nel punto $x$. Se $F_X$ è continua in $x$, allora $P(X = x) = 0$. In particolare, se la funzione di ripartizione è continua ovunque, la probabilità che la variabile aleatoria assuma un valore specifico è sempre zero. Il professore ha sottolineato che questa è una proprietà importante, sebbene a volte controintuitiva, e che sarebbe stata ripresa in seguito.

### Esempi di Funzioni di Ripartizione e Calcolo di Probabilità

Il professore ha ripreso alcuni esempi di funzioni di ripartizione per illustrare come calcolare le probabilità .

**Primo Esempio:**

$F_1(x) = \begin{cases} 0 & x < 0 \\ x & 0 \le x \le 1 \\ 1 & x > 1 \end{cases}$

Questa funzione di ripartizione è continua ovunque . Il professore ha chiesto qual è la probabilità che una variabile aleatoria $X_1$ con questa funzione di ripartizione sia uguale a 3, $P(X_1 = 3)$ . Poiché la funzione è continua in $x=3$, il salto è zero:

$P(X_1 = 3) = F_1(3) - F_1(3^-) = 1 - 1 = 0$ .

Successivamente, ha chiesto la probabilità che $X_1$ sia minore o uguale a 3, $P(X_1 \le 3)$ . Dalla definizione della funzione di ripartizione:

$P(X_1 \le 3) = F_1(3) = 1$ .

Infine, ha chiesto la probabilità che $X_1$ appartenga all'intervallo, $P(0 \le X_1 \le 1)$ . Utilizzando la formula per l'intervallo semiaperto:

$P(0 < X_1 \le 1) = F_1(1) - F_1(0) = 1 - 0 = 1$

Poiché la funzione è continua in 0, $P(X_1 = 0) = F_1(0) - F_1(0^-) = 0 - 0 = 0$. Quindi,

$P(0 \le X_1 \le 1) = P(X_1 = 0) + P(0 < X_1 \le 1) = 0 + 1 = 1$ .

Questo indica che la variabile aleatoria $X_1$ assume valori nell'intervallo  con probabilità 1 .

**Secondo Esempio:**

$F_2(x) = \begin{cases} 0 & x < 0 \ 1/2 & 0 \le x < 2 \ 1 & x \ge 2 \end{cases}$

Questa funzione di ripartizione ha dei **salti** in $x=0$ e $x=2$ . Il professore ha chiesto qual è la probabilità che una variabile aleatoria $X_2$ con questa funzione di ripartizione sia uguale a 0, $P(X_2 = 0)$ . Utilizzando la formula per la probabilità di un singolo punto:

$P(X_2 = 0) = F_2(0) - F_2(0^-) = \frac{1}{2} - 0 = \frac{1}{2}$ .

La probabilità è data dal **salto** della funzione nel punto $x=0$ .

___

Ecco la spiegazione del professore contenuta nel flashcard, presentata in maniera dettagliata e formattata come richiesto:

### Funzione di Ripartizione di una Variabile Aleatoria

#### Definizione e Proprietà Fondamentali

Il professore introduce la **funzione di ripartizione** (o funzione cumulativa di distribuzione), definendola come un oggetto ben definito per qualunque variabile aleatoria. Non è detto che debba necessariamente essere continua né la funzione cumulata di qualche densità, e quindi non necessariamente scrivibile come un integrale.

**Verifica delle Proprietà:** Prima di considerare una funzione come una funzione di ripartizione, è fondamentale controllarne le proprietà. Se una funzione soddisfa tali proprietà, allora descrive completamente la variabile aleatoria o la misura di probabilità indotta.

#### Probabilità Puntuale e Discontinuità

In presenza di discontinuità nella funzione di ripartizione, possiamo calcolare la probabilità che la variabile aleatoria assuma un valore specifico.

**Esempio:** Consideriamo una variabile aleatoria $X_2$ la cui funzione di ripartizione ha un salto in $x=0$. Dal disegno (non fornito, ma descritto a parole), la funzione di ripartizione valutata in $0$ è $1/2$, mentre il limite da sinistra è $0$. Il salto in $0$ misura quindi $1/2$.

La probabilità che $X_2$ sia uguale a $0$ è data dalla differenza tra il valore della funzione di ripartizione in $0$ e il suo limite da sinistra: $P(X_2 = 0) = F_{X_2}(0) - \lim_{x \to 0^-} F_{X_2}(x) = \frac{1}{2} - 0 = \frac{1}{2}$.

Questo esempio illustra come le discontinuità nella funzione di ripartizione corrispondano a probabilità puntuali non nulle.

#### Probabilità di un Intervallo in Termini di Funzione di Ripartizione

Il professore introduce un **esercizio** per esprimere la probabilità che una variabile aleatoria appartenga a un intervallo in termini della sua funzione di ripartizione. Vengono menzionati sia l'intervallo aperto che l'intervallo chiuso.

Per risolvere questo tipo di esercizio, si devono utilizzare le proprietà della funzione di ripartizione e la definizione di probabilità degli eventi, inclusa la continuità lungo successioni monotone di eventi.

#### Esempio di Variabile Aleatoria Uniforme sull'Intervallo 

Viene presentato un esempio di una variabile aleatoria $X$ con **distribuzione uniforme sull'intervallo **. La sua funzione di ripartizione $F_X(x)$ è definita come segue:

$F_X(x) = \begin{cases} 0 & \text{se } x \le 0 \ x & \text{se } 0 < x < 1 \ 1 & \text{se } x \ge 1 \end{cases}$

Per questa variabile aleatoria, la probabilità che $X$ appartenga a un intervallo $[a, b]$ con $0 \le a \le b \le 1$ è data dalla lunghezza dell'intervallo: $P(a \le X \le b) = F_X(b) - F_X(a) = b - a$.

Il professore sottolinea che in questo caso particolare, poiché la funzione di ripartizione è **continua**, la probabilità che $X$ assuma un singolo valore è $0$. Questo implica che per l'intervallo $[a, b]$ all'interno di : $P(a \le X \le b) = P(a < X \le b) = P(a \le X < b) = P(a < X < b) = b - a$.

**Importante:** Il professore avverte che se la funzione di ripartizione **non è continua**, è cruciale prestare attenzione all'uso di minore o uguale ($\le$) e minore stretto ($<$) negli intervalli, poiché ciò può fare la differenza nel calcolo della probabilità.

**Misura di Lebesgue:** Viene osservato che la misura di probabilità associata alla variabile uniforme su  coincide con la **misura di Lebesgue** ristretta all'intervallo .

**Esercizio:** Si chiede come dimostrare che la probabilità che $X$ appartenga a un insieme boreliano $A$ tale che la sua intersezione con  sia l'insieme vuoto ($A \cap = \emptyset$) è zero.

**Soluzione dell'Esercizio:** Se $A \cap = \emptyset$, allora $A$ è contenuto nel complementare di $(0, 1)$, ovvero $A \subseteq (-\infty, 0] \cup [1, +\infty)$. Quindi, la probabilità che $X$ appartenga ad $A$ è minore o uguale alla probabilità che $X$ appartenga a $(-\infty, 0] \cup [1, +\infty)$.

$P(X \in (-\infty, 0] \cup [1, +\infty)) = P(X \le 0) + P(X \ge 1) = F_X(0) + (1 - F_X(1))$.

Dalla definizione di $F_X(x)$, abbiamo $F_X(0) = 0$ e $F_X(1) = 1$. Quindi: $P(X \in (-\infty, 0] \cup [1, +\infty)) = 0 + (1 - 1) = 0$.

Poiché $P(X \in A) \le 0$ e la probabilità è non negativa, ne consegue che $P(X \in A) = 0$.

#### Costruzione di Nuove Variabili Aleatorie tramite Trasformazioni

Il professore introduce l'idea di costruire una nuova variabile aleatoria applicando una **trasformazione** a una variabile aleatoria esistente. Questo è utile sia dal punto di vista modellistico che teorico.

**Esempio 2:** Si parte da una variabile aleatoria $X_1$ distribuita uniformemente su $(0, 1)$, denotato come $X_1 \sim U(0, 1)$. La sua funzione di ripartizione è $F_{X_1}(x) = x$ per $x \in$, $0$ per $x < 0$ e $1$ per $x > 1$ (anche se nel testo viene definita in modo leggermente diverso con $\le 0$ e $\ge 1$, l'essenza è la stessa per la continuità).

Si definisce una nuova variabile aleatoria $X_2 = -\log(X_1)$.

**Considerazioni sul Dominio del Logaritmo:** Il logaritmo è definito solo per numeri positivi. Poiché $X_1$ è uniforme su $(0, 1)$, assume valori positivi con probabilità 1. Più precisamente, $P(X_1 \in (0, 1)) = 1$.

**Proprietà di $X_2$:** Se $X_1(\omega) \in (0, 1)$, allora $-\log(X_1(\omega)) > 0$. Questo accade con probabilità 1, quindi $P(X_2 > 0) = 1$.

**Calcolo della Funzione di Ripartizione di $X_2$:** Si vuole calcolare $F_{X_2}(x) = P(X_2 \le x)$.

$F_{X_2}(x) = P(-\log(X_1) \le x)$

Per risolvere questa probabilità, si considera il caso in cui $x \le 0$ e il caso in cui $x > 0$.

**Caso 1: $x \le 0$** Abbiamo dimostrato che $P(X_2 > 0) = 1$. Quindi, la probabilità che $X_2$ sia minore o uguale a un numero non positivo è $0$: $F_{X_2}(x) = P(X_2 \le x) = 0$ per $x \le 0$ .

**Caso 2: $x > 0$** $P(-\log(X_1) \le x) = P(\log(X_1) \ge -x)$ Esponenziando entrambi i lati (e ricordando che la funzione esponenziale è crescente): $P(X_1 \ge e^{-x})$

Poiché $X_1$ è uniforme su $(0, 1)$, e stiamo considerando $x > 0$, allora $0 < e^{-x} < 1$. La probabilità che $X_1$ sia maggiore o uguale a $e^{-x}$ è data da: $P(X_1 \ge e^{-x}) = 1 - P(X_1 < e^{-x}) = 1 - F_{X_1}(e^{-x})$

Dato che per $0 < y < 1$, $F_{X_1}(y) = y$, abbiamo: $1 - F_{X_1}(e^{-x}) = 1 - e^{-x}$

Quindi, la funzione di ripartizione di $X_2$ è: $F_{X_2}(x) = \begin{cases} 0 & \text{se } x \le 0 \ 1 - e^{-x} & \text{se } x > 0 \end{cases}$

Questa è la funzione di ripartizione di una **variabile aleatoria esponenziale** con parametro $\lambda = 1$.

Il professore conclude sottolineando l'importanza di guardare "in faccia" la variabile aleatoria e la trasformazione prima di eseguire i calcoli, per capire le sue proprietà fondamentali.

___

## Trasformazione di Variabili Aleatorie e Funzione di Ripartizione

### Introduzione: Calcolo della Probabilità di $X^2 \le X$ per $X > 0$

Il professore inizia concentrandosi sul calcolo della probabilità che $X^2$ sia minore o uguale a $X$, dato che una variabile aleatoria $X_1$ è strettamente maggiore di 0. Viene specificato che si restringe l'attenzione al caso $X > 0$ perché la probabilità che $X_1$ appartenga all'intervallo $(0, 1)$ è 1, semplificando l'analisi iniziale.

Si definisce una nuova variabile aleatoria $X_2 = -\log(X_1)$, dove $X_1 \in (0, 1)$. L'obiettivo è calcolare la funzione di ripartizione di $X_2$, $F_{X_2}(x) = P(X_2 \le x)$, conoscendo la funzione di ripartizione di $X_1$, $F_{X_1}(x)$.

### Calcolo della Funzione di Ripartizione di $X_2$ per $x > 0$

Per $x > 0$, si ha: $F_{X_2}(x) = P(X_2 \le x) = P(-\log(X_1) \le x)$.

Manipolando la disuguaglianza: $-\log(X_1) \le x \iff \log(X_1) \ge -x$ $X_1 \ge e^{-x}$.

Quindi, $P(-\log(X_1) \le x) = P(X_1 \ge e^{-x})$.

Il professore sottolinea che l'evento ${-\log(X_1) \le x}$ è **esattamente uguale** all'evento ${X_1 \ge e^{-x}}$ come sottoinsiemi dello spazio campionario $\Omega$.

La probabilità $P(X_1 \ge e^{-x})$ può essere espressa in termini della funzione di ripartizione di $X_1$: $P(X_1 \ge e^{-x}) = 1 - P(X_1 < e^{-x})$.

Poiché $X_1$ è assunta avere una funzione di ripartizione assolutamente continua, la probabilità che $X_1$ sia uguale a un singolo valore è zero, quindi $P(X_1 < e^{-x}) = P(X_1 \le e^{-x}) = F_{X_1}(e^{-x})$.

Pertanto, per $x > 0$: $F_{X_2}(x) = 1 - F_{X_1}(e^{-x})$.

### Caso Specifico: $X_1$ Distribuita Uniformemente in $(0, 1)$

Il professore considera il caso in cui $X_1$ è distribuita uniformemente nell'intervallo $(0, 1)$. In questo caso, la funzione di ripartizione di $X_1$ è: $F_{X_1}(y) = \begin{cases} 0 & \text{se } y < 0 \ y & \text{se } 0 \le y \le 1 \ 1 & \text{se } y > 1 \end{cases}$.

Poiché stiamo considerando $x > 0$, l'argomento di $F_{X_1}$, che è $e^{-x}$, sarà sempre compreso tra 0 e 1 (in quanto $x > 0 \implies e^{-x} \in (0, 1)$).

Quindi, per $x > 0$, $F_{X_1}(e^{-x}) = e^{-x}$.

Sostituendo nell'espressione per $F_{X_2}(x)$, otteniamo per $x > 0$: $F_{X_2}(x) = 1 - e^{-x}$.

### Funzione di Ripartizione Completa di $X_2$

Per completare la definizione della funzione di ripartizione di $X_2$, si considera anche il caso $x \le 0$. $F_{X_2}(x) = P(X_2 \le x) = P(-\log(X_1) \le x)$.

Se $x \le 0$, allora $-\log(X_1) \le x$ implica $\log(X_1) \ge -x \ge 0$, quindi $X_1 \ge e^{-x} \ge 1$. Tuttavia, sappiamo che $X_1 \in (0, 1)$ con probabilità 1. Pertanto, per $x \le 0$, l'evento ${-\log(X_1) \le x}$ ha probabilità 0.

Quindi, la funzione di ripartizione di $X_2$ è: $F_{X_2}(x) = \begin{cases} 0 & \text{se } x \le 0 \ 1 - e^{-x} & \text{se } x > 0 \end{cases}$.

### Verifica delle Proprietà della Funzione di Ripartizione

Il professore verifica che la funzione $F_{X_2}(x)$ ottenuta soddisfa le proprietà di una funzione di ripartizione:

- **Continuità da destra:** La funzione è continua per $x < 0$ e per $x > 0$. In $x = 0$, $\lim_{h \to 0^+} F_{X_2}(0 + h) = 1 - e^0 = 1 - 1 = 0 = F_{X_2}(0)$. Quindi è continua da destra.
- **Monotona non decrescente:** Per $x \le 0$, la funzione è costante a 0. Per $x > 0$, la derivata è $\frac{d}{dx}(1 - e^{-x}) = e^{-x} > 0$, quindi è strettamente crescente.
- **Limiti agli estremi:**
    - $\lim_{x \to -\infty} F_{X_2}(x) = \lim_{x \to -\infty} 0 = 0$.
    - $\lim_{x \to +\infty} F_{X_2}(x) = \lim_{x \to +\infty} (1 - e^{-x}) = 1 - 0 = 1$.

Queste verifiche confermano che $F_{X_2}(x)$ è una funzione di ripartizione valida.

### Errore Tipico da Evitare

Il professore avverte di un **errore comune**: dimenticare la parte della funzione di ripartizione per $x \le 0$ e scrivere semplicemente $F_{X_2}(x) = 1 - e^{-x}$ per ogni $x$. Questo porterebbe a risultati errati nel calcolo delle probabilità, specialmente per valori negativi di $x$.

### Definizione di Variabile Aleatoria con Legge Esponenziale

La variabile aleatoria $X_2$ la cui funzione di ripartizione è $F_{X_2}(x) = \begin{cases} 0 & \text{se } x \le 0 \\ 1 - e^{-x} & \text{se } x > 0 \end{cases}$ è detta avere una **legge esponenziale (o esponenziale negativa)**.

Questo esempio illustra la **trasformazione di una variabile aleatoria**: a partire dalla legge di $X_1$, si è derivata la legge della variabile trasformata $X_2 = -\log(X_1)$. Questo tipo di trasformazioni è frequente in probabilità.

### Corollario sull'Unicità delle Misure di Probabilità

Il professore introduce un corollario basato sul criterio di unicità delle misure di probabilità:

Se due variabili aleatorie $X_1$ e $X_2$ definite sullo stesso spazio di probabilità $(\Omega, \mathcal{F}, P)$ hanno la stessa funzione di ripartizione, cioè $F_{X_1}(x) = F_{X_2}(x)$ per ogni $x \in \mathbb{R}$, allora le loro leggi (misure immagine) sono uguali: $P(X_1 \in A) = P(X_2 \in A)$ per ogni insieme boreliano $A$.

Questo deriva dal fatto che gli intervalli $(-\infty, x]$ formano una $\pi$-classe che genera la $\sigma$-algebra dei boreliani. Due misure di probabilità che coincidono su una $\pi$-classe che genera la $\sigma$-algebra, coincidono su tutta la $\sigma$-algebra.

### Importanza del Concetto di Legge di una Variabile Aleatoria

Avere la stessa legge non implica che due variabili aleatorie siano uguali con probabilità 1, anche se definite sullo stesso spazio di probabilità.

**Esempio:** Sia $\Omega = {0, 1}$ con la $\sigma$-algebra di tutte le parti e una misura di probabilità $P({0}) = 1/2$, $P({1}) = 1/2$. Definiamo due variabili aleatorie: $X_1(\omega) = \omega$ $X_2(\omega) = 1 - \omega$

La probabilità che $X_1 = X_2$ è $P({\omega \in {0, 1} \mid \omega = 1 - \omega}) = P(\emptyset) = 0$. Quindi $X_1$ e $X_2$ sono diverse con probabilità 1.

Tuttavia, calcoliamo le loro funzioni di ripartizione:

Per $F_{X_1}(x)$:

- Se $x < 0$, $P(X_1 \le x) = P(\emptyset) = 0$.
- Se $0 \le x < 1$, $P(X_1 \le x) = P({0}) = 1/2$.
- Se $x \ge 1$, $P(X_1 \le x) = P({0, 1}) = 1$.

Per $F_{X_2}(x)$:

- Se $x < 0$, $P(X_2 \le x) = P(\emptyset) = 0$.
- Se $0 \le x < 1$, $P(X_2 \le x) = P({1}) = 1/2$.
- Se $x \ge 1$, $P(X_2 \le x) = P({0, 1}) = 1$.

Quindi, $F_{X_1}(x) = F_{X_2}(x)$ per ogni $x \in \mathbb{R}$, il che significa che $X_1$ e $X_2$ hanno la stessa legge, anche se non sono uguali con probabilità 1.

### Costruzione di una Variabile Aleatoria Data una Funzione di Ripartizione

Se $F$ è una funzione di ripartizione, esiste uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ e una variabile aleatoria $X: \Omega \to \mathbb{R}$ tale che la funzione di ripartizione di $X$, $F_X(x) = P(X \le x)$, è uguale a $F(x)$ per ogni $x \in \mathbb{R}$.

Il professore sottolinea che lo spazio di probabilità e la variabile aleatoria non sono unici. L'esempio di $X_1$ e $X_2$ sopra mostra due variabili aleatorie diverse definite sullo stesso spazio di probabilità che hanno la stessa funzione di ripartizione (e quindi la stessa legge).

Questo teorema garantisce che per ogni funzione che soddisfa le proprietà di una funzione di ripartizione, possiamo sempre immaginare che essa descriva la distribuzione di probabilità di qualche variabile aleatoria. Ad esempio, la funzione di ripartizione esponenziale trovata in precedenza corrisponde alla legge di una variabile aleatoria esponenziale.
#### References
[[paste/appunti prob-lez08.pdf]]
[[Appunti Prob- lez08'.pdf]]


