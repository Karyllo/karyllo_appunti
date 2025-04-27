---
title: "prob-lez12"
---

2025-04-08 11:03

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## prob-lez12

## Vettori Assolutamente Continui

### Richiami sull'Integrale Astratto e Misure di Probabilità

Il professore inizia ricordando un risultato fondamentale collegato all'integrale astratto.

**Proposizione:** Sia $f$ una funzione tale che $f(x) \ge 0$ per ogni $x \in \mathbb{R}^d$ e $\int_{\mathbb{R}^d} f(x) dx = 1$, dove l'integrale è inteso nel senso di Lebesgue. Allora, la funzione che associa ad ogni boreliano $A \subseteq \mathbb{R}^d$ il valore $\int_A f(x) dx$ definisce una misura di probabilità sui boreliani di $\mathbb{R}^d$.

**Commento:** Questo significa che ogni funzione non negativa la cui integrale su tutto lo spazio sia unitario può essere vista come la densità di una misura di probabilità.

### Definizione di Vettore Assolutamente Continuo

Partendo da questa osservazione, il professore introduce la definizione di vettore aleatorio assolutamente continuo.

**Definizione (Prima Forma):** Un vettore aleatorio $X$ definito su uno spazio di probabilità a valori in $\mathbb{R}^d$ (con la $\sigma$-algebra dei boreliani) si dice _con legge assolutamente continua_ se la sua funzione di ripartizione $F_X(x)$, per ogni $x = (x_1, \dots, x_d) \in \mathbb{R}^d$, può essere scritta come l'integrale multiplo di Lebesgue di una funzione $f(y) \ge 0$ tale che $\int_{\mathbb{R}^d} f(y) dy = 1$. Nello specifico:

$$F_X(x) = P(X_1 \le x_1, \dots, X_d \le x_d) = \int_{\set{y \in \mathbb{R}^d: y_i \le x_i, \forall i=1,\dots,d}} f_X(y) dy$$

La funzione $f(x)$ è detta **densità** (o funzione di densità di probabilità, PDF) del vettore $X$.

**Commento:** La funzione di ripartizione rappresenta la probabilità che il vettore aleatorio $X$ cada nel "quadrante" $(-\infty, x_1] \times \dots \times (-\infty, x_d]$. La definizione afferma che questa probabilità può essere calcolata integrando la densità su questo insieme.
![[Pasted image 20250408111828.png]]
### Definizione Equivalente di Vettore Assolutamente Continuo

Il professore presenta poi una definizione equivalente, più generale e spesso più utile.

**Definizione (Seconda Forma):** Un vettore aleatorio $X$ è assolutamente continuo se esiste una funzione densità $f_x(x) \ge 0$ con $\int_{\mathbb{R}^d} f_x(x) dx = 1$ tale che, per ogni insieme boreliano $A \subseteq \mathbb{R}^d$, la probabilità che $X$ appartenga ad $A$ sia data da:

$P(X \in A) = \int_A f(x) dx$

La funzione $f(x)$ è la densità del vettore $X$.

**Dimostrazione dell'Equivalenza (Accennata):**

- **Dalla seconda alla prima definizione:** Se vale la seconda definizione, prendendo come insieme boreliano $A$ il quadrante $\set{y \in \mathbb{R}^d: y_i \le x_i, \forall i=1,\dots,d}$, si ottiene direttamente la prima definizione.
- **Dalla prima alla seconda definizione:** Si osserva che l'insieme dei quadranti definisce una classe $\mathcal{P}$ che genera tutti i boreliani di $\mathbb{R}^d$. La funzione $P'(A) = \int_A f(x) dx$ definisce una misura di probabilità sui boreliani. Per ipotesi (prima definizione), $P(X \in A) = P'(A)$ per ogni $A$ appartenente alla classe $\mathcal{P}$ dei quadranti. Poiché due misure di probabilità che coincidono su una classe $\mathcal{P}$ che genera la $\sigma$-algebra devono coincidere su tutta la $\sigma$-algebra, si ha che $P(X \in A) = \int_A f(x) dx$ per ogni boreliano $A \subseteq \mathbb{R}^d$.

**Commento:** La seconda definizione è più potente perché permette di calcolare la probabilità che il vettore aleatorio cada in _qualsiasi_ insieme boreliano, non solo in particolari "quadranti".
![[Pasted image 20250408112148.png]]
### Riassunto dei Tipi di Vettori Aleatori

Il professore riassume i diversi modi per descrivere un vettore aleatorio. Dato un vettore aleatorio $X$ a valori in $\mathbb{R}^d$:

1. **Legge Immagine (o Misura di Probabilità Indotta):** Si può sempre definire la misura di probabilità $P_X(A) = P(X \in A)$ per ogni boreliano $A \subseteq \mathbb{R}^d$.
2. **Funzione di Ripartizione:** Si può sempre definire la funzione $F_X(x) = P(X_1 \le x_1, \dots, X_d \le x_d)$ per ogni $x \in \mathbb{R}^d$.
![[Pasted image 20250408112839.png]]
Poi si distinguono due casi particolari:

3. **Vettore Discreto:** In questo caso, esiste un insieme numerabile di punti $C \subseteq \mathbb{R}^d$ tale che $P(X \in C) = 1$. Si può definire una **densità discreta (o funzione di massa di probabilità)** $f_X(x) = P(X = x)$ per $x \in C$, e $f_X(x) = 0$ altrimenti. La probabilità che $X$ appartenga a un insieme $A$ si ottiene sommando le probabilità dei punti di $C$ contenuti in $A$: $P(X \in A) = \sum_{x \in A \cap C} f_X(x)$.
4. **Vettore Assolutamente Continuo:** Come definito precedentemente, esiste una funzione di densità $f_X(x) \ge 0$ con $\int_{\mathbb{R}^d} f_X(x) dx = 1$ tale che $P(X \in A) = \int_A f_X(x) dx$ per ogni boreliano $A \subseteq \mathbb{R}^d$.

**Commento:** Non tutte le leggi di probabilità rientrano in questi due casi (puramente discreto o assolutamente continuo), ma essi coprono una parte significativa delle distribuzioni utilizzate. In altri casi, si può ricorrere alla funzione di ripartizione per descrivere la legge di probabilità.
![[Pasted image 20250408113240.png]]
### Relazione tra Densità e Funzione di Ripartizione (Caso $d=1$)

Nel caso unidimensionale ($d=1$), esiste una relazione importante tra la funzione di ripartizione e la densità per variabili assolutamente continue.

**Proposizione (Caso $d=1$):** Se $X$ è una variabile aleatoria assolutamente continua con densità $f(x)$, allora la sua funzione di ripartizione $F_X(x)$ è data da:

$F_X(x) = P(X \le x) = \int_{-\infty}^{x} f(t) dt$

Nel caso discreto, la funzione di ripartizione è data da:

$F_X(x) = P(X \le x) = \sum_{x_i \le x} P(X = x_i) = \sum_{x_i \le x} f_X(x_i)$

dove la somma è estesa a tutti i valori $x_i$ nel supporto (insieme numerabile di punti con probabilità non nulla) di $X$ che sono minori o uguali a $x$. La funzione di ripartizione di una variabile discreta è una funzione costante a tratti.
![[Pasted image 20250408113504.png]]
**Commento:** Nel caso assolutamente continuo, se la densità $f(t)$ è continua in un punto $x$, allora la funzione di ripartizione $F_X(x)$ è derivabile in quel punto e la sua derivata è uguale alla densità: $F_X'(x) = f(x)$ (Teorema Fondamentale del Calcolo) 

### Proprietà dei Vettori Assolutamente Continui

Il professore sottolinea alcune importanti proprietà dei vettori assolutamente continui.

**Proposizione:** Se $X$ è un vettore assolutamente continuo a valori in $\mathbb{R}^d$, allora per ogni $x \in \mathbb{R}^d$, la probabilità che $X$ sia esattamente uguale a $x$ è zero:

$P(X = x) = 0$

**Dimostrazione:** Un singolo punto $x$ in $\mathbb{R}^d$ ha misura di Lebesgue zero. Quindi:

$P(X = x) = \int_{{x}} f(y) dy = 0$

dove $dx$ indica la misura di Lebesgue.

**Proposizione:** Se $H \subseteq \mathbb{R}^d$ è un sottoinsieme con misura di Lebesgue nulla (ad esempio, un iperpiano di dimensione strettamente minore di $d$), allora la probabilità che $X$ appartenga ad $H$ è zero:

$P(X \in H) = \int_H f(y) dy = 0$

**Esempio (Caso $d=2$):** Se $X = (X_1, X_2)$ è un vettore assolutamente continuo in $\mathbb{R}^2$, allora la probabilità che $X_1 = X_2$ è zero. L'insieme ${(x_1, x_2) \in \mathbb{R}^2: x_1 = x_2}$ è una retta (un iperpiano di dimensione 1 in $\mathbb{R}^2$), che ha misura di Lebesgue zero.

**Commento:** Questa proprietà può sembrare controintuitiva, ma significa che per una variabile assolutamente continua, non possiamo osservare un valore specifico con probabilità non nulla. Le probabilità sono associate a insiemi di misura positiva (intervalli, palle, ecc.) .
![[Pasted image 20250408113748.png]]

### Distinzione tra Probabilità Puntuale e Densità

Il professore evidenzia una differenza cruciale :

**Osservazione:** Per un vettore assolutamente continuo $X$ con densità $f(x)$:

- $P(X = x) = 0$ per ogni $x \in \mathbb{R}^d$ .
- Il valore della densità $f(x)$ in un punto $x$ non rappresenta la probabilità che $X$ sia uguale a $x$ e non è necessariamente compreso tra 0 e 1 .

**Commento:** La densità $f(x)$ indica la "concentrazione" di probabilità attorno al punto $x$. Per ottenere una probabilità, è necessario integrare la densità su un insieme contenente $x$ che abbia misura di Lebesgue positiva (un "volume" attorno a $x$) .
![[Pasted image 20250408114002.png]]
### Continuità della Funzione di Ripartizione (Caso $d=1$)

**Proposizione (Caso $d=1$):** Se $X$ è una variabile aleatoria assolutamente continua, allora la sua funzione di ripartizione $F_X(x)$ è continua ovunque .



**Esercizi, esempi e ulteriori passaggi matematici non sono presenti negli estratti forniti.**

___
# Variabili Aleatorie Assolutamente Continue

## Probabilità di un Punto e Funzione di Ripartizione

Nel caso di una variabile aleatoria assolutamente continua, la **probabilità di un singolo punto è sempre uguale a zero**.

$$P(X = x) = 0$$

La **funzione di ripartizione** (CDF), $F_X(x) = P(X \le x)$, associata a una variabile assolutamente continua può essere scritta come l'integrale della sua **funzione di densità di probabilità** (PDF), $f_X(t)$:

$$F_X(x) = \int_{-\infty}^{x} f_X(t) dt$$

Per definizione, questa funzione di ripartizione $F_X(x)$ è **continua**.

**Dimostrazione (Accennata):** Questa proprietà deriva dal fatto che $F_X(x) = \int_{-\infty}^{x} f(t) dt$. L'integrale di Lebesgue è continuo rispetto al limite superiore di integrazione 

**Commento:** La continuità della funzione di ripartizione è una caratteristica delle variabili assolutamente continue e le distingue dalle variabili discrete, la cui funzione di ripartizione presenta dei salti nei punti in cui la variabile assume valori con probabilità positiva. Tuttavia, la continuità della funzione di ripartizione non implica necessariamente che la variabile sia assolutamente continua (esistono distribuzioni singolari continue) . Il viceversa è vero: se una variabile è assolutamente continua, la sua funzione di ripartizione è continua .

**Attenzione**: Non è vero il viceversa. Si possono avere funzioni di ripartizione continue che non corrispondono a leggi assolutamente continue. Un esempio è la **funzione di Cantor** (o scala del diavolo).
![[Pasted image 20250408114657.png]]
## Misure Non Atomiche

In dimensione $d=1$, le misure di probabilità che hanno una funzione di ripartizione continua sono dette **non atomiche**, il che significa che non esiste alcun punto con una massa di probabilità strettamente positiva.

La classe delle variabili aleatorie con legge assolutamente continua è un sottinsieme della classe più grande delle variabili aleatorie con funzione di ripartizione continua (non atomiche).

Spesso si userà l'affermazione: "X ha legge assolutamente continua, quindi la sua funzione di ripartizione è assolutamente continua (e quindi continua)". È importante non confondere "X assolutamente continua" con "$f_X(x)$ continua".

## Definizione di Legge Assolutamente Continua

Una variabile aleatoria $X$ ha una **legge assolutamente continua** se la sua funzione di ripartizione $F_X(x)$ può essere espressa come l'integrale di una funzione $f_X(t)$ positiva e integrabile (la densità):

$$F_X(x) = \int_{-\infty}^{x} f_X(t) dt$$

## Esempio: Distribuzione Uniforme su (0, 1)

Consideriamo una variabile aleatoria $X$ distribuita uniformemente sull'intervallo $(0, 1)$. La sua funzione di ripartizione $F_X(x)$ è data da:

$$ F_X(x) = \begin{cases} 0 & \text{se } x \le 0 \\ x & \text{se } 0 < x < 1 \\ 1 & \text{se } x \ge 1 \end{cases} $$

Possiamo verificare che questa funzione di ripartizione può essere scritta come l'integrale di una densità $f_X(t)$:

$$f_X(t) = \begin{cases} 1 & \text{se } 0 < t < 1 \\ 0 & \text{altrimenti} \end{cases} $$

Infatti, per ogni $x \in \mathbb{R}$:

$$ \int_{-\infty}^{x} f_X(t) dt = F_X(x) $$

La funzione $f_X(t)$ è positiva, misurabile e il suo integrale su tutto $\mathbb{R}$ è uguale a 1:

$$ \int_{-\infty}^{\infty} f_X(t) dt = \int_{0}^{1} 1 dt = [t]_{0}^{1} = 1 - 0 = 1 $$

Quindi, la variabile aleatoria $X$ con distribuzione uniforme su $(0, 1)$ ha una legge assolutamente continua. Notiamo che la funzione di ripartizione $F_X(x)$ è continua, mentre la sua densità $f_X(t)$ non lo è (ha discontinuità nei punti $t=0$ e $t=1$). Questo conferma che l'assoluta continuità riguarda la legge (o la funzione di ripartizione), non necessariamente la densità.
![[Pasted image 20250408114949.png]]
## Non Unicità della Funzione di Densità

La funzione di densità $f_X(x)$ per una variabile aleatoria assolutamente continua **non è unica** in senso stretto. Se modifichiamo la densità in un numero finito di punti (o più in generale, su un insieme di misura di Lebesgue nulla), la funzione di ripartizione associata non cambia.

Ad esempio, per la distribuzione uniforme su $(0, 1)$, la densità potrebbe anche essere definita come:

$$f'_X(t) = \begin{cases} 2 & \text{se } t = 0.5 \\ 1 & \text{se } 0 < t < 1, t \neq 0.5 \\ 0 & \text{altrimenti} \end{cases} $$

Questa $f'_X(t)$ è ancora una densità per la distribuzione uniforme su $(0, 1)$ perché l'integrale di Lebesgue è insensibile a modifiche su insiemi di misura nulla. Tuttavia, nella pratica, si sceglie una rappresentazione conveniente della densità.

La densità contiene informazioni sulla probabilità di un intorno, non sul valore puntuale.
![[Pasted image 20250408115132.png]]
## Definizione di Leggi Assolutamente Continue Tramite la Densità

Spesso, le variabili aleatorie assolutamente continue vengono definite direttamente specificando la loro funzione di densità. Ad esempio:

- $X$ ha una **legge uniforme** se la sua densità è costante su un intervallo e zero altrove.
- $X$ ha una **legge esponenziale** se la sua densità ha una specifica forma funzionale (come vedremo in seguito).
- $X$ ha una **legge Gamma**, ecc..

In questi casi, si assume che la variabile aleatoria sia assolutamente continua con la densità data.

## Verifica dell'Assoluta Continuità a Partire dalla Funzione di Ripartizione

Per verificare se una funzione di ripartizione $F(x)$ corrisponde a una variabile aleatoria assolutamente continua, si deve controllare se esiste una funzione positiva e integrabile $f(t)$ tale che per ogni $x$:

$$F(x) = \int_{-\infty}^{x} f(t) dt$$

Se si riesce a trovare tale funzione $f(t)$, allora essa è la densità della variabile aleatoria.

In dimensione uno, un modo pratico per trovare la densità, se esiste, è calcolare la derivata della funzione di ripartizione.

## Relazione tra Funzione di Ripartizione e Densità Tramite la Derivazione

Se la funzione di ripartizione $F_X(x)$ è derivabile su $\mathbb{R}$ meno un insieme finito di punti, allora la sua derivata è uguale alla funzione di densità di probabilità $f_X(x)$ nei punti di derivabilità:

$$f_X(x) = \frac{d}{dx} F_X(x)$$
![[Pasted image 20250408115609.png]]
**Esempio: Distribuzione Uniforme (Riconsiderata)**

La funzione di ripartizione della distribuzione uniforme su $(0, 1)$ è:

$$ F_X(x) = \begin{cases} 0 & \text{se } x \le 0 \\ x & \text{se } 0 < x < 1 \\ 1 & \text{se } x \ge 1 \end{cases} $$

La sua derivata è:

$$ \frac{d}{dx} F_X(x) = \begin{cases} 0 & \text{se } x < 0 \\ 1 & \text{se } 0 < x < 1 \\ 0 & \text{se } x > 1 \end{cases} $$

Questa derivata coincide con la densità $f_X(x)$ definita in precedenza, eccetto che nei punti $x=0$ e $x=1$ dove la derivata non esiste. Tuttavia, poiché questi sono solo due punti (un insieme di misura nulla), ciò non influisce sull'integrale.
![[Pasted image 20250408115809.png]]
**Controesempio: Variabile Aleatoria Discreta**

Consideriamo una variabile aleatoria $X$ tale che $P(X = 0) = 1$. La sua funzione di ripartizione è:

$$ F_X(x) = \begin{cases} 0 & \text{se } x < 0 \\ 1 & \text{se } x \ge 0 \end{cases} $$

Questa funzione di ripartizione **non è continua** in $x=0$. Pertanto, la variabile aleatoria $X$ non è assolutamente continua. Inoltre, la sua derivata è zero ovunque tranne in $x=0$ dove non è definita, e una funzione che è zero quasi ovunque non può integrare a 1 (che è la probabilità totale).

## Approccio Operativo per Trovare la Densità

Se si sa che una variabile aleatoria è assolutamente continua, la sua densità può essere trovata derivando la funzione di ripartizione dove essa è derivabile (tipicamente ovunque tranne un insieme finito di punti).

## Esempio: Distribuzione Esponenziale

Consideriamo una variabile aleatoria $X$ con **distribuzione esponenziale di parametro $\lambda > 0$**. Si definisce che $X$ è assolutamente continua con funzione di densità:

$$f_X(x) = \begin{cases} \lambda e^{-\lambda x} & \text{se } x > 0 \\ 0 & \text{se } x \le 0 \end{cases} $$

Verifichiamo che questa è una densità: è positiva per $x > 0$. Calcoliamo l'integrale su tutto $\mathbb{R}$:

$$ \int_{-\infty}^{\infty} f_X(x) dx = \int_{0}^{\infty} \lambda e^{-\lambda x} dx $$

La primitiva di $\lambda e^{-\lambda x}$ è $-e^{-\lambda x}$. Quindi:

$$\begin{aligned} \int_{0}^{\infty} \lambda e^{-\lambda x} dx = \lim_{b \to \infty} [-e^{-\lambda x}]_{0}^{b} = \\ \\ \lim_{b \to \infty} (-e^{-\lambda b} - (-e^{0})) = (0 - (-1)) = 1 \end{aligned}$$

Quindi $f_X(x)$ è una funzione di densità. Calcoliamo ora la funzione di ripartizione $F_X(x) = P(X \le x) = \int_{-\infty}^{x} f_X(t) dt$:

- Se $x < 0$: $$ F_X(x) = \int_{-\infty}^{x} 0 dt = 0 $$
- Se $x \ge 0$: $$ \begin{aligned} F_X(x) = \int_{-\infty}^{0} 0 dt + \int_{0}^{x} \lambda e^{-\lambda t} dt =\\ 0 + [-e^{-\lambda t}]_{0}^{x} = -e^{-\lambda x} - (-e^{0}) = 1 - e^{-\lambda x}\end{aligned}  $$

Quindi la funzione di ripartizione della distribuzione esponenziale è:

$$ F_X(x) = \begin{cases} 0 & \text{se } x < 0 \\ 1 - e^{-\lambda x} & \text{se } x \ge 0 \end{cases} $$

Questa funzione $F_X(x)$ è continua. La sua derivata per $x > 0$ è $\frac{d}{dx} (1 - e^{-\lambda x}) = -(-\lambda) e^{-\lambda x} = \lambda e^{-\lambda x}$, che coincide con la densità $f_X(x)$ per $x > 0$.
![[Pasted image 20250408120818.png]]
## Chiarimento sulla Definizione di Assoluta Continuità e il Ruolo di $\Omega$

Essere assolutamente continua non presuppone necessariamente la conoscenza esplicita della funzione di ripartizione. La definizione formale si basa sull'esistenza di una densità.

Dal punto di vista teorico, una variabile aleatoria $X$ è definita su uno spazio probabilistico $(\Omega, \mathcal{F}, P)$. La sua legge (o distribuzione) è una misura di probabilità su $\mathbb{R}$. Dire che $X$ è assolutamente continua significa che questa misura di probabilità è assolutamente continua rispetto alla misura di Lebesgue, il che implica l'esistenza di una densità $f_X$.

In pratica, spesso si definisce una variabile aleatoria assolutamente continua specificando la sua densità $f_X(x)$, che è una funzione positiva che integra a 1. Data una tale densità, si può definire una misura di probabilità e quindi (teoricamente) trovare uno spazio $(\Omega, \mathcal{F}, P)$ e una variabile aleatoria $X: \Omega \to \mathbb{R}$ che abbia quella densità. Tuttavia, nella maggior parte delle applicazioni, non è necessario costruire esplicitamente $\Omega$; è sufficiente lavorare con la densità.

In sintesi, quando si dice che $X$ è assolutamente continua con una certa densità, si sta affermando che esiste uno spazio probabilistico sottostante tale che la variabile aleatoria $X$ ha quella specifica densità, e quindi la sua funzione di ripartizione può essere ottenuta integrando tale densità.

### Unicità della Variabile Aleatoria Data una Densità

**Affermazione:** Data una funzione di densità, non esiste un'unica variabile aleatoria che la possieda.

**Commento:** Questa affermazione è valida anche per le funzioni di ripartizione (CDF), sebbene questo aspetto non sarà centrale per la discussione. L'analogia viene fatta con la distribuzione uniforme, dove, pur avendo una specifica funzione di ripartizione uniforme, è possibile costruire diverse variabili aleatorie che seguono tale distribuzione.

**Esempio:** Si possono costruire in diversi modi variabili aleatorie distinte che condividono la stessa legge di probabilità.

**Implicazione:** La definizione di una variabile aleatoria attraverso la sua densità o funzione di ripartizione fornisce informazioni sulla **legge immagine** di $X$, ovvero sulla distribuzione di probabilità dei valori che $X$ può assumere. Per i calcoli, si può fare riferimento allo spazio campionario $\Omega$, ma domande specifiche che dipendono dalla struttura di $\Omega$ potrebbero non essere risolvibili unicamente conoscendo la legge di $X$.

**Esempio:** Se $X$ è una variabile aleatoria geometrica, la sua legge è definita senza specificare lo spazio campionario $\Omega$. È possibile calcolare il valore atteso di $X$ con queste informazioni. Tuttavia, per sapere quali elementi $\omega \in \Omega$ corrispondono a un valore specifico di $X$, come $X=3$, è necessario conoscere la struttura di $\Omega$.

**Conclusione:** Molte proprietà di una variabile aleatoria, come il valore atteso, dipendono solo dalla sua legge (e quindi, nel caso assolutamente continuo, dalla sua densità) e non dalla specifica realizzazione sullo spazio campionario $\Omega$.

## Proprietà della Distribuzione Esponenziale

Il professore introduce la distribuzione esponenziale come esempio di variabile aleatoria assolutamente continua.

### Probabilità che $X$ sia Maggiore o Uguale a Zero

**Proprietà:** Per una variabile aleatoria $X$ con legge esponenziale, $P(X \ge 0) = 1$.

**Dimostrazione 1 (Integrale della Densità):** $\begin{align}  P(X \ge 0) =\\ \int_{0}^{+\infty} f(x) dx =  \int_{0}^{+\infty} \lambda e^{-\lambda x} dx = \\ [ -e^{-\lambda x} ]_{0}^{+\infty} =  -e^{-\infty} - (-e^{0}) = 0 - (-1) = 1 \end{align}$.

**Dimostrazione 2 (Funzione di Ripartizione):** La funzione di ripartizione $F(x)$ per una variabile aleatoria esponenziale è data da $F(x) = 1 - e^{-\lambda x}$ per $x \ge 0$ e $0$ per $x < 0$. $P(X \ge 0) = 1 - P(X < 0) = 1 - F(0^-) = 1 - 0 = 1$. Oppure, $P(X \ge 0) = 1 - P(X < 0)$. Poiché per $x<0$, $F(x)=0$, allora $P(X<0) = \lim_{x \to 0^-} F(x) = 0$. Quindi $P(X \ge 0) = 1 - 0 = 1$.

### Assenza di Memoria della Distribuzione Esponenziale

**Problema:** Calcolare la probabilità condizionata $P(X > t + s | X > t)$ per $s, t > 0$, dove $X$ è una variabile aleatoria esponenziale di parametro $\lambda$.

**Definizione di Probabilità Condizionata:** $P(A | B) = \frac{P(A \cap B)}{P(B)}$

**Applicazione al Problema:** $P(X > t + s | X > t) = \frac{P(X > t + s \cap X > t)}{P(X > t)}$.

**Osservazione sull'intersezione degli eventi:** Se $X > t + s$, allora necessariamente $X > t$ (poiché $s > 0$). Quindi, l'evento ${X > t + s}$ è contenuto nell'evento ${X > t}$, e la loro intersezione è l'evento più "piccolo": ${X > t + s} \cap {X > t} = {X > t + s}$.

**Calcolo di $P(X > u)$:** $P(X > u) = 1 - P(X \le u) = 1 - F(u)$. Per $u > 0$, $F(u) = 1 - e^{-\lambda u}$, quindi $P(X > u) = 1 - (1 - e^{-\lambda u}) = e^{-\lambda u}$.

**Calcolo della Probabilità Condizionata:** $P(X > t + s | X > t) = \frac{P(X > t + s)}{P(X > t)} = \frac{e^{-\lambda (t + s)}}{e^{-\lambda t}} = e^{-\lambda t - \lambda s + \lambda t} = e^{-\lambda s}$.

**Interpretazione:** Si osserva che $e^{-\lambda s} = P(X > s)$. Quindi, $P(X > t + s | X > t) = P(X > s)$.

**Conclusione (Proprietà di Assenza di Memoria):** La probabilità che un guasto (o un evento modellato da una distribuzione esponenziale) non si verifichi per un ulteriore tempo $s$, dato che non si è verificato fino al tempo $t$, è uguale alla probabilità che non si verifichi per un tempo $s$ a partire dall'istante iniziale (tempo zero). In altre parole, la "memoria" del processo si azzera.
![[Pasted image 20250408122521.png]]
**Esempio Pratico (Affidabilità di una Macchina):** Se $X$ rappresenta il tempo di guasto di una macchina, la proprietà di assenza di memoria implica che la probabilità che una macchina che ha funzionato per $t$ unità di tempo continui a funzionare per altre $s$ unità di tempo è la stessa della probabilità che una macchina nuova funzioni per $s$ unità di tempo.

**Critica del Modello Esponenziale per Guasti Reali:** Questa proprietà di assenza di memoria potrebbe non essere realistica per modellare il guasto di macchine reali, in cui la probabilità di guasto tende ad aumentare con l'usura.

**Estensione alla Distribuzione Geometrica (Discreta):** Il professore menziona che la distribuzione geometrica (nel caso discreto) possiede una proprietà analoga di assenza di memoria.

**Unicità tra le Distribuzioni Continue Positive:** Tra le variabili aleatorie assolutamente continue e positive, la distribuzione esponenziale è l'unica a godere della proprietà di assenza di memoria.

## Altri Esempi di Distribuzioni Assolutamente Continue

### Distribuzione Gaussiana (Normale)

**Definizione:** Una variabile aleatoria $X$ si dice assolutamente continua con legge (o distribuzione) gaussiana (o normale) di parametri $\mu \in \mathbb{R}$ (media) e $\sigma^2 > 0$ (varianza) se la sua funzione di densità è data da: $f(x) = \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}$, per $x \in \mathbb{R}$.

**Verifica che la Densità Integra a 1:** $\int_{-\infty}^{+\infty} f(x) dx = \int_{-\infty}^{+\infty} \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} dx$ Utilizzando il cambio di variabili $t = \frac{x - \mu}{\sigma}$, si ha $x = \mu + \sigma t$ e $dx = \sigma dt$. Gli estremi di integrazione rimangono $(-\infty, +\infty)$. $\int_{-\infty}^{+\infty} \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{t^2}{2}} \sigma dt = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} e^{-\frac{t^2}{2}} dt$ L'integrale $\int_{-\infty}^{+\infty} e^{-\frac{t^2}{2}} dt = \sqrt{2\pi}$ (integrale gaussiano). Quindi, l'integrale della densità è $\frac{1}{\sqrt{2\pi}} \sqrt{2\pi} = 1$.
![[Pasted image 20250408122937.png]]
**Gaussiana Standard (Normale Standard):** Un caso particolare è la gaussiana standard, con parametri $\mu = 0$ e $\sigma^2 = 1$. La sua densità è: $\phi(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}$

**Funzione di Ripartizione della Gaussiana:** La funzione di ripartizione $F(x) = P(X \le x) = \int_{-\infty}^{x} f(t) dt$ non ha una forma chiusa esprimibile in termini di funzioni elementari (seno, coseno, esponenziale, ecc.). Può essere espressa in termini della funzione di errore (erf), che è comunque definita come un integrale.
![[Pasted image 20250408123011.png]]

**Notazione per la Funzione di Ripartizione della Gaussiana Standard:** La funzione di ripartizione della gaussiana standard è spesso indicata con la lettera $\Phi(x)$.

**Proprietà della Densità Gaussiana:** La densità gaussiana è una funzione continua e derivabile ovunque.

**Importanza della Distribuzione Gaussiana:** La distribuzione gaussiana è fondamentale nel calcolo delle probabilità e nella statistica, in particolare per il Teorema del Limite Centrale.

### Distribuzione di Cauchy

**Definizione:** Una variabile aleatoria $X$ con distribuzione di Cauchy con parametri $\mu \in \mathbb{R}$ e $\sigma > 0$ ha una funzione di densità data da: $f(x) = \frac{1}{\pi \sigma \left[ 1 + \left( \frac{x - \mu}{\sigma} \right)^2 \right]}$

Spesso, viene considerata la Cauchy standard con parametri $\mu = 0$ e $\sigma = 1$, la cui densità è: $f(x) = \frac{1}{\pi (1 + x^2)}$

La funzione di ripartizione della Cauchy con parametri $\mu$ e $\sigma$ è: $F(x) = \frac{1}{\pi} \arctan\left( \frac{x - \mu}{\sigma} \right) + \frac{1}{2}$

**Simmetria della Gaussiana e della Cauchy:** Sia la gaussiana standard che la Cauchy standard sono distribuzioni simmetriche rispetto allo zero. Una variabile aleatoria $X$ ha la stessa legge di $-X$ (indicato come $X \stackrel{\mathcal{L}}{=} -X$) se e solo se la sua distribuzione è simmetrica rispetto allo zero.

**Verifica della Simmetria:** Per dimostrare che $X \stackrel{d}{=} -X$, si può verificare che la funzione di ripartizione di $X$, $F_X(x)$, è tale che $F_X(x) = 1 - F_X(-x^-) = 1 - P(X < -x)$. Alternativamente, si può mostrare che la densità $f_X(x)$ è una funzione pari, ovvero $f_X(x) = f_X(-x)$. Sia la densità gaussiana standard $\phi(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}$ che la densità Cauchy standard $f(x) = \frac{1}{\pi (1 + x^2)}$ soddisfano questa proprietà.
![[Pasted image 20250408123410.png]]
### Code Leggere vs. Code Pesanti

**Comportamento delle Code:** La differenza tra la distribuzione gaussiana e la Cauchy risiede nel comportamento delle loro code, ovvero come la densità si avvicina a zero per $|x| \to \infty$.

- **Gaussiana:** La densità gaussiana decade esponenzialmente, come $e^{-x^2/2}$, quindi molto rapidamente. Si dice che la gaussiana ha **code leggere**. Questo implica che la probabilità di osservare valori molto distanti dalla media è molto bassa.
    
- **Cauchy:** La densità di Cauchy decade come un polinomio, specificamente come $\frac{1}{x^2}$. Questo decadimento è molto più lento rispetto all'esponenziale. Si dice che la Cauchy ha **code pesanti**. Ciò significa che la probabilità di osservare valori estremi è significativamente più alta rispetto a una distribuzione gaussiana con parametri simili.
    

**Implicazione per il Valore Atteso:** La distribuzione di Cauchy è un esempio di variabile aleatoria che non ha un valore atteso finito, a causa del comportamento delle code della sua densità.

## Valore Atteso e Varianza per Variabili Aleatorie Discrete (Ricapitolazione e Anticipazione)

### Valore Atteso (Caso Discreto)

Per una variabile aleatoria discreta $X$ con funzione di massa di probabilità $P(X = x_i) = p_i$, il valore atteso (o media) di $X$, denotato con $E[X]$, è definito come: $E[X] = \sum_{i} x_i p_i$, ammesso che la somma converga assolutamente.

Se $g$ è una funzione reale, il valore atteso di $g(X)$ è: $E[g(X)] = \sum_{i} g(x_i) p_i$, ammesso che la somma converga assolutamente.

### Varianza (Caso Discreto)

La varianza di una variabile aleatoria discreta $X$, denotata con $Var(X)$ o $\sigma^2_X$, è definita come il valore atteso del quadrato della deviazione di $X$ dalla sua media: $Var(X) = E[(X - E[X])^2]$

La varianza può anche essere calcolata utilizzando la seguente formula: $Var(X) = E[X^2] - (E[X])^2$

**Spiegazione:** $Var(X) = E[(X - \mu)^2] = E[X^2 - 2\mu X + \mu^2] = E[X^2] - 2\mu E[X] + E[\mu^2]$ Dato che $\mu = E[X]$ è una costante, $E[\mu X] = \mu E[X] = \mu^2$ e $E[\mu^2] = \mu^2$. Quindi, $Var(X) = E[X^2] - 2\mu^2 + \mu^2 = E[X^2] - \mu^2 = E[X^2] - (E[X])^2$.

**Utilizzo della Definizione per Esercizi:** Negli esercizi, per ora, si richiede di utilizzare la definizione di varianza per il suo calcolo. Le proprietà della varianza saranno studiate più avanti.

#### References



