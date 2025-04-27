2025-03-18 10:16

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## prob-ese05
# Variabili Aleatorie

## Introduzione alle Variabili Aleatorie

L'esercitazione di oggi è dedicata a un concetto fondamentale: le **variabili aleatorie**. Queste sono oggetti che possono essere considerati l'analogo delle funzioni in analisi. In probabilità, lavoreremo con variabili aleatorie, che sono anch'esse funzioni con proprietà specifiche.

### Definizione di Variabile Aleatoria

In generale, lavoreremo assegnato uno spazio misurabile $(\Omega, \mathcal{F})$ e un altro spazio misurabile $(E, \mathcal{M})$, dove $\Omega$ è l'insieme degli esiti possibili, $\mathcal{F}$ è una $\sigma$-algebra su $\Omega$, $E$ è lo spazio di arrivo, e $\mathcal{M}$ è una $\sigma$-algebra su $E$. Una **variabile aleatoria** $X$ è una funzione:

$X: \Omega \rightarrow E$

tale che per ogni $A \in \mathcal{M}$ (un insieme misurabile nello spazio di arrivo), la **controimmagine** di $A$ sotto $X$, denotata come $X^{-1}(A)$, sia un elemento della $\sigma$-algebra di partenza $\mathcal{F}$:

$X^{-1}(A) = \set{\omega \in \Omega : X(\omega) \in A} \in \mathcal{F} \quad \forall A \in \mathcal{M}$

Questa proprietà è nota come **misurabilità** ed è cruciale per la definizione di variabile aleatoria.

### Legge di Probabilità Indotta da una Variabile Aleatoria

Se aggiungiamo una probabilità $P$ allo spazio $(\Omega, \mathcal{F})$, rendendolo uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, allora una variabile aleatoria $X: \Omega \rightarrow E$ ha il potere di **trasportare** la probabilità $P$ sullo spazio di arrivo $E$.

La **legge** (o legge immagine) di $X$, spesso denotata come $L_X$ (o $P_X$), è una probabilità definita sullo spazio misurabile $(E, \mathcal{M})$. Per un qualsiasi insieme $A \in \mathcal{M}$, la legge di $X$ è data da:

$L_X(A) = P(X \in A) = P({\omega \in \Omega : X(\omega) \in A}) = P(X^{-1}(A))$

La misurabilità di $X$ è fondamentale perché garantisce che l'insieme $X^{-1}(A)$ appartenga a $\mathcal{F}$, e quindi la sua probabilità $P(X^{-1}(A))$ sia ben definita. Senza la misurabilità, la legge di $X$ non sarebbe ben definita.

## Caso Discreto

Nel **caso discreto**, l'insieme di arrivo $E$ è **finito o numerabile**. Una variabile aleatoria discreta assume un numero finito o numerabile di valori. Per ogni specifico valore che la variabile può assumere, si definisce una probabilità.

## Funzione di Ripartizione

Si consideri una funzione reale di variabile reale $F: \mathbb{R} \rightarrow$, chiamata **funzione di ripartizione** (o funzione di distribuzione cumulativa, CDF). È definita come:

$F(x) = P(X \le x)$

dove $X$ è una variabile aleatoria reale. L'esercizio propone una specifica funzione $F(x)$:

$$F(x) = \begin{cases} 0 & \text{se } x < 0 \\ \frac{1}{2} & \text{se } 0 \le x < 1 \\ \frac{2}{3} & \text{se } 1 \le x < 2 \\ \frac{11}{12} & \text{se } 2 \le x < 3 \\ 1 & \text{se } x \ge 3 \end{cases}$$
![[Pasted image 20250318121109.png|400]]
### Proprietà della Funzione di Ripartizione

Una funzione $F$ è una funzione di ripartizione se soddisfa le seguenti proprietà:

1. **Monotona non decrescente**: Se $x_1 < x_2$, allora $F(x_1) \le F(x_2)$. Questa proprietà è legata al fatto che stiamo misurando insiemi della forma $(-\infty, x]$ e se $x$ aumenta, l'insieme si ingrandisce (o rimane uguale).
2. **Continua da destra**: $\lim_{h \rightarrow 0^+} F(x + h) = F(x)$ per ogni $x \in \mathbb{R}$. Graficamente, la funzione può avere dei salti, ma nel punto del salto il valore della funzione è quello superiore (limite da destra). Essendo monotona, ha limiti a sinistra in ogni punto. Le discontinuità sono di tipo salto (saldità del primo tipo).
3. **Limiti agli infiniti**:
    - $\lim_{x \rightarrow -\infty} F(x) = 0$
    - $\lim_{x \rightarrow +\infty} F(x) = 1$

L'insieme di queste tre proprietà implica che $F$ è una funzione di ripartizione di una certa probabilità $L$ su $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$, dove $\mathcal{B}(\mathbb{R})$ sono i boreliani della retta. In particolare, $F(x) = L((-\infty, x])$.

## Probabilità Discreta e Funzione di Densità Discreta

Dimostrare che $L$ è una **probabilità discreta** significa mostrare che è concentrata su un insieme finito o numerabile di punti. Una funzione di ripartizione come quella data, **costante a tratti e discontinua in un numero finito di punti con discontinuità di tipo salto**, suggerisce una probabilità discreta.

$L$ è concentrata sui **punti di salto** di $F$. L'ampiezza dei salti corrisponde alla probabilità di ciascun punto. In questo caso, i punti di salto sono $x = 0, 1, 2, 3$.

Le ampiezze dei salti sono:

- A $x = 0$: $F(0) - \lim_{x \rightarrow 0^-} F(x) = \frac{1}{2} - 0 = \frac{1}{2}$
- A $x = 1$: $F(1) - \lim_{x \rightarrow 1^-} F(x) = \frac{2}{3} - \frac{1}{2} = \frac{4 - 3}{6} = \frac{1}{6}$
- A $x = 2$: $F(2) - \lim_{x \rightarrow 2^-} F(x) = \frac{11}{12} - \frac{2}{3} = \frac{11 - 8}{12} = \frac{3}{12} = \frac{1}{4}$
- A $x = 3$: $F(3) - \lim_{x \rightarrow 3^-} F(x) = 1 - \frac{11}{12} = \frac{1}{12}$

La **funzione di densità discreta** $p(x)$ è definita come la probabilità di ciascun punto in cui la probabilità è concentrata. In questo caso:

$$p(x) = \begin{cases} \frac{1}{2} & \text{se } x = 0 \\ \frac{1}{6} & \text{se } x = 1 \\ \frac{1}{4} & \text{se } x = 2 \\ \frac{1}{12} & \text{se } x = 3 \\ 0 & \text{altrimenti} \end{cases}$$

La probabilità $L$ di un qualsiasi boreliano $A \subseteq \mathbb{R}$ può essere scritta come:

$L(A) = \frac{1}{2} \mathbb{1}_{{0 \in A}} + \frac{1}{6} \mathbb{1}_{{1 \in A}} + \frac{1}{4} \mathbb{1}_{{2 \in A}} + \frac{1}{12} \mathbb{1}_{{3 \in A}}$

dove $\mathbb{1}_{{x \in A}}$ è la **funzione indicatrice**, che vale 1 se $x \in A$ e 0 altrimenti. Questa formula indica che la probabilità di un insieme $A$ è la somma delle probabilità dei punti 0, 1, 2, e 3 che appartengono ad $A$.

## Calcolo della Probabilità di Insiemi

Utilizzando sia la funzione di ripartizione $F(x)$ che la funzione di densità discreta $p(x)$, possiamo calcolare la probabilità di diversi insiemi.

### Esempio 1: $L((1/2, +\infty))$

Utilizzando la proprietà del complementare:

$L((1/2, +\infty)) = 1 - L((-\infty, 1/2])$

Dalla definizione di funzione di ripartizione:

$L((-\infty, 1/2]) = F(1/2) = \frac{1}{2}$

Quindi:

$L((1/2, +\infty)) = 1 - \frac{1}{2} = \frac{1}{2}$

Utilizzando la funzione di densità discreta, gli unici punti in $(1/2, +\infty)$ con probabilità non nulla sono 1, 2, e 3:

$L((1/2, +\infty)) = p(1) + p(2) + p(3) = \frac{1}{6} + \frac{1}{4} + \frac{1}{12} = \frac{2 + 3 + 1}{12} = \frac{6}{12} = \frac{1}{2}$

### Esempio 2: $L([2, 4))$

$L([2, 4)) = L((-\infty, 4)) - L((-\infty, 2))$

Poiché la funzione di ripartizione è continua da destra:

$L((-\infty, 4)) = F(4) = 1$ $L((-\infty, 2)) = F(2) = \frac{11}{12}$

Quindi:

$L([2, 4)) = 1 - \frac{11}{12} = \frac{1}{12}$

Utilizzando la funzione di densità discreta, l'unico punto in $[2, 4)$ con probabilità non nulla è 2:

$L([2, 4)) = p(2) = \frac{1}{4}$

**Errore nella trascrizione:** Il professore dice "Eh f2 11/12. Attenzione a prendere il valore corretto perché queste funzioni sono continue da destra, quindi nel valore eh di nel punto di salto dovete sempre prendere il valore corretto. Eh bene, andiamo avanti. 1 2 aperto. Questo è importante. Qual è la legge valutata sull'insieme 1 2 aperto?".

### Esempio 3: $L((1, 2))$

$L((1, 2)) = L((-\infty, 2)) - L((-\infty, 1])$

$L((-\infty, 2)) = F(2) = \frac{11}{12}$ $L((-\infty, 1]) = F(1) = \frac{2}{3} = \frac{8}{12}$

$L((1, 2)) = \frac{11}{12} - \frac{8}{12} - P(X=1) = \frac{3}{12} - \frac{1}{6} = \frac{1}{4} - \frac{1}{6} = \frac{3 - 2}{12} = \frac{1}{12}$

Utilizzando la funzione di densità discreta, non ci sono punti in $(1, 2)$ con probabilità non nulla:

$L((1, 2)) = 0$

**Chiarimento del professore:** "Questo qua si fa a occhio, non ho bisogno di far conti. Quant'è questa probabilità? è 0 perché ho appena detto che tutto quello che non è 0 1 2 o 3 non influisce sulla mia probabilità, ma verifichiamo che è effettivamente così."

$L((1, 2)) = L((-\infty, 2)) - L((-\infty, 1]) = F(2) - F(1) = \frac{11}{12} - \frac{2}{3} = \frac{11 - 8}{12} = \frac{3}{12} = \frac{1}{4}$

**Ulteriore chiarimento del professore:** "Perché? Perché questo non è altro che la legge di - infinito 2 a cui è stato tolto. sia il singoletto 2 che tutto il pezzo da meno infinito a 1. Qualche parentesi. Ok? Ma siccome sto operando sempre, sto togliendo ad un insieme due sottoinsiemi ancora una volta questo lo potete scrivere come la probabilità di questo oggetto che non è altro che $F(2) - F(1) - P(X=2)$. $F(2) = \frac{11}{12}$, $F(1) = \frac{2}{3}$. La probabilità del singoletto 2 ce l'avete dalla densità se volete. Eh, la probabilità del singoletto 2 è l'ampiezza del salto. Eh, ce l'avete anche dalla funzione di ripartizione, ma da qua è più semplice, è $1/4$. Quindi questi sono $8/12$, questi sono tre. Il risultato è zero, ma ripeto, non c'era nessun bisogno di questo conto, ma almeno ci esercitiamo a farlo."

$L((1, 2)) = F(2^-) - F(1) = \frac{2}{3} - \frac{2}{3} = 0$

### Esempio 4: $L((-\infty, 3))$

$L((-\infty, 3)) = \lim_{x \rightarrow 3^-} F(x) = \frac{11}{12}$

$L((-\infty, 3)) = L((-\infty, 3]) - P(X=3) = F(3) - p(3) = 1 - \frac{1}{12} = \frac{11}{12}$

## Generazione di una Variabile Aleatoria con Legge $L$

Si vuole generare una variabile aleatoria $X$ che abbia $L$ come legge, definita su uno spazio di probabilità sia continuo che discreto.

### Caso Continuo

Si può scegliere lo spazio di probabilità $(\Omega, \mathcal{F}, P) = (\mathbb{R}, \mathcal{B}(\mathbb{R}), L)$, dove $L$ è la probabilità definita dalla funzione di ripartizione $F$. Si definisce la variabile aleatoria $X: \Omega \rightarrow \mathbb{R}$ come la **mappa identità**:

$X(\omega) = \omega$

In questo caso, la legge di $X$, $L_X$, per un qualsiasi boreliano $A \in \mathcal{B}(\mathbb{R})$ è:

$L_X(A) = P(X \in A) = P({\omega \in \mathbb{R} : X(\omega) \in A}) = P({\omega \in \mathbb{R} : \omega \in A}) = L(A)$

Quindi, la variabile aleatoria identità sullo spazio $(\mathbb{R}, \mathcal{B}(\mathbb{R}), L)$ ha esattamente $L$ come sua legge.

### Caso Discreto

Si può scegliere lo spazio di probabilità $\Omega = {0, 1, 2, 3}$ con la $\sigma$-algebra delle parti $\mathcal{P}(\Omega)$ e una probabilità $P$ definita sui singoli punti come:

- $P({0}) = \frac{1}{2}$
- $P({1}) = \frac{1}{6}$
- $P({2}) = \frac{1}{4}$
- $P({3}) = \frac{1}{12}$

Si definisce la variabile aleatoria $X: \Omega \rightarrow \mathbb{R}$ (o $X: \Omega \rightarrow {0, 1, 2, 3}$) come $X(\omega) = \omega$. La legge di $X$ per un qualsiasi sottoinsieme $A \subseteq {0, 1, 2, 3}$ è:

$L_X(A) = P(X \in A) = P({\omega \in \Omega : X(\omega) \in A}) = P(A) = \sum_{i \in A} P({i})$

Questa legge coincide con la probabilità discreta $L$ definita precedentemente.

## Valore Atteso

Il **valore atteso** (o speranza matematica) di una variabile aleatoria discreta $X$ che assume valori $x_k$ con probabilità $p(x_k)$ è definito come:

$E[X] = \sum_{k} x_k P(X = x_k) = \sum_{k} x_k p(x_k)$

Nel nostro caso, la variabile aleatoria $X$ (nel caso discreto costruito) assume i valori 0, 1, 2, 3 con le probabilità $\frac{1}{2}, \frac{1}{6}, \frac{1}{4}, \frac{1}{12}$ rispettivamente. Quindi:

$E[X] = 0 \cdot \frac{1}{2} + 1 \cdot \frac{1}{6} + 2 \cdot \frac{1}{4} + 3 \cdot \frac{1}{12} = 0 + \frac{1}{6} + \frac{2}{4} + \frac{3}{12} = \frac{1}{6} + \frac{1}{2} + \frac{1}{4} = \frac{2 + 6 + 3}{12} = \frac{11}{12}$

## Varianza

La **varianza** di una variabile aleatoria $X$, denotata come $Var(X)$, è definita come il valore atteso del quadrato della differenza tra $X$ e il suo valore atteso:

$Var(X) = E[(X - E[X])^2]$

La varianza può anche essere calcolata utilizzando la formula:

$Var(X) = E[X^2] - (E[X])^2$

Per calcolare $E[X^2]$, consideriamo la variabile aleatoria $X^2$ che assume i valori $0^2=0, 1^2=1, 2^2=4, 3^2=9$ con le stesse probabilità di $X$:

$E[X^2] = 0^2 \cdot \frac{1}{2} + 1^2 \cdot \frac{1}{6} + 2^2 \cdot \frac{1}{4} + 3^2 \cdot \frac{1}{12} = 0 + \frac{1}{6} + \frac{4}{4} + \frac{9}{12} = \frac{1}{6} + 1 + \frac{3}{4} = \frac{2 + 12 + 9}{12} = \frac{23}{12}$

Ora possiamo calcolare la varianza:

$Var(X) = E[X^2] - (E[X])^2 = \frac{23}{12} - \left(\frac{11}{12}\right)^2 = \frac{23}{12} - \frac{121}{144} = \frac{23 \cdot 12 - 121}{144} = \frac{276 - 121}{144} = \frac{155}{144}$

## Trasformazione di Variabili Aleatorie

Consideriamo una funzione $f: \mathbb{R} \rightarrow S$ **iniettiva e boreliana**. Definiamo una nuova variabile aleatoria $Y = f(X)$. A causa dell'iniettività di $f$, esiste una corrispondenza biunivoca tra i valori di $X$ e i valori di $Y$. La probabilità che $Y$ assuma un valore $f(i)$ è uguale alla probabilità che $X$ assuma il valore $i$:

$P(Y = f(i)) = P(f(X) = f(i)) = P(X = i)$

Se $f$ **non è iniettiva**, la distribuzione di $Y$ può aggregare le probabilità di diversi esiti di $X$ che vengono mappati allo stesso valore da $f$.

Se $f$ **non è boreliana**, $Y = f(X)$ in generale non è una variabile aleatoria, e quindi non ha senso parlare della sua legge. Una funzione boreliana è una funzione misurabile rispetto alle $\sigma$-algebre di Borel. Se una funzione è continua, allora è boreliana.

### Esempio: $Y = X^2$

Considerando $Y = X^2$, i possibili valori di $Y$ sono $0^2=0, 1^2=1, 2^2=4, 3^2=9$. Le probabilità di questi valori sono le stesse dei corrispondenti valori di $X$ perché la funzione $f(x) = x^2$ è iniettiva sull'insieme dei valori assunti da $X$ (che sono non negativi in questo caso):

- $P(Y = 0) = P(X = 0) = \frac{1}{2}$
- $P(Y = 1) = P(X = 1) = \frac{1}{6}$
- $P(Y = 4) = P(X = 2) = \frac{1}{4}$
- $P(Y = 9) = P(X = 3) = \frac{1}{12}$
  

### Caso di $f$ Boreliana ma Non Iniettiva

Se $f$ è **boreliana** ma **non iniettiva**, la distribuzione di $Y$ si ottiene sommando le probabilità di tutti i valori di $X$ che vengono mappati allo stesso valore di $Y$.

Esempio: Se $f(x) = c$ (una costante), allora $Y = c$ con probabilità 1. La distribuzione di $Y$ è concentrata sul singolo valore $c$.

Esempio con $f(x) = 4$ costante: $Y = 4$ certamente (con probabilità 1). La probabilità che $Y = 4$ è la probabilità che $X$ assuma qualsiasi dei suoi valori (perché $f$ li mappa tutti a 4), quindi $P(Y = 4) = P(X=0) + P(X=1) + P(X=2) + P(X=3) = 1$.

### Caso di $f$ Non Boreliana

Se $f$ **non è boreliana**, allora $Y = f(X)$ in generale **non è una variabile aleatoria**, e quindi non ha senso parlare della sua legge di probabilità.

### Valore Atteso di $f(X)$

Per una variabile aleatoria discreta $X$ e una funzione boreliana $f$, il valore atteso di $Y = f(X)$ può essere calcolato direttamente dalla distribuzione di $X$:

$E[f(X)] = \sum_i f(x_i) P(X = x_i)$

Questo evita la necessità di calcolare esplicitamente la distribuzione di $Y$.


# Analisi della Variabile Aleatoria $X_n$: Numero di Biglie Rosse Estratte da un'Urna

## Definizione del Problema

Consideriamo un'urna contenente $n$ biglie, di cui $r$ sono rosse e $b$ sono bianche, tale che $r + b = n$. Si decide di estrarre $n$ piccolo palline dall'urna, con o senza reimmissione. Definiamo uno spazio di probabilità $(\Omega, \mathcal{F}, P)$. Ci interessano gli eventi $E_m$, dove $E_m$ è l'evento in cui l'ennesima biglia estratta è rossa, con $m \in {1, 2, ..., n}$.

Introduciamo la variabile aleatoria $X_n$ che descrive il numero di biglie rosse estratte. L'obiettivo è determinare la legge di probabilità di $X_n$ e stabilire se è discreta o semplice, sia nel caso di estrazione con reimmissione sia senza reimmissione, e calcolarne il valore atteso.

## Espressione di $X_n$ tramite Variabili Indicatori

Per analizzare $X_n$, è utile esprimerla in funzione di variabili aleatorie più semplici. Definiamo $Y_m$ come la funzione indicatrice dell'insieme $E_m$:

$Y_m(\omega) = \begin{cases} 1 & \text{se } \omega \in E_m \text{ (l'm-esima pallina estratta è rossa)} \\ 0 & \text{se } \omega \notin E_m \text{ (l'm-esima pallina estratta è bianca)} \end{cases}$

$Y_m$ è una variabile aleatoria discreta che può assumere i valori 0 o 1. La variabile aleatoria $X_n$, che conta il numero totale di biglie rosse estratte, può essere espressa come la somma di queste variabili indicatrici:

$X_n = \sum_{m=1}^{n} Y_m$

Poiché $X_n$ è la somma di un numero finito di variabili aleatorie discrete, essa stessa è una **variabile aleatoria discreta**.

## Caso 1: Estrazione con Reimmissione

Nel caso di estrazione con reimmissione, dopo ogni estrazione la biglia viene rimessa nell'urna. Questo implica che la composizione dell'urna (numero di biglie rosse e bianche) rimane costante ad ogni estrazione.

### Legge di Probabilità di $Y_m$

La probabilità di estrarre una biglia rossa in una qualsiasi estrazione è costante e pari a $\frac{r}{r+b} = \frac{r}{n}$. Quindi, la variabile aleatoria $Y_m$ segue una **distribuzione di Bernoulli** con parametro $p = \frac{r}{n}$:

$P(Y_m = 1) = p = \frac{r}{n}$ $P(Y_m = 0) = 1 - p = \frac{b}{n}$

### Legge di Probabilità di $X_n$

Poiché le estrazioni sono indipendenti (a causa della reimmissione), le variabili aleatorie $Y_1, Y_2, ..., Y_n$ sono indipendenti e identicamente distribuite (i.i.d.) come una Bernoulli di parametro $p = \frac{r}{n}$. La somma di $n$ variabili aleatorie di Bernoulli i.i.d. segue una **distribuzione binomiale** con parametri $n$ e $p$.

La probabilità di estrarre esattamente $k$ biglie rosse su $n$ estrazioni con reimmissione è data da:

$P(X_n = k) = \binom{n}{k} p^k (1-p)^{n-k} = \binom{n}{k} \left(\frac{r}{n}\right)^k \left(\frac{b}{n}\right)^{n-k}$

dove $k$ può assumere valori interi compresi tra 0 e $n$. Per valori di $k$ esterni a questo intervallo, $P(X_n = k) = 0$, il che è coerente con la definizione del coefficiente binomiale.

### Valore Atteso di $X_n$

Il valore atteso di $X_n$ è dato da:

$E[X_n] = \sum_{k=0}^{n} k \cdot P(X_n = k) = \sum_{k=0}^{n} k \binom{n}{k} p^k (1-p)^{n-k}$

Per calcolare questa somma, si osserva che per $k=0$ il termine è nullo, quindi possiamo iniziare la somma da $k=1$:

$E[X_n] = \sum_{k=1}^{n} k \frac{n!}{k!(n-k)!} p^k (1-p)^{n-k}$

Utilizzando la proprietà $k \cdot k! = k!$ e semplificando:

$E[X_n] = \sum_{k=1}^{n} \frac{n!}{(k-1)!(n-k)!} p^k (1-p)^{n-k}$

Riscriviamo $n! = n \cdot (n-1)!$ e portiamo fuori $n$ e un fattore $p$ dalla sommatoria (poiché non dipendono da $k$):

$E[X_n] = np \sum_{k=1}^{n} \frac{(n-1)!}{(k-1)!(n-k)!} p^{k-1} (1-p)^{n-k}$

Notiamo che $n-k = (n-1) - (k-1)$. Sostituiamo $j = k-1$, quando $k$ varia da $1$ a $n$, $j$ varia da $0$ a $n-1$. La sommatoria diventa:

$$E[X_n] = np \sum_{j=0}^{n-1} \frac{(n-1)!}{j!((n-1)-j)!} p^{j} (1-p)^{(n-1)-j}$$

L'espressione all'interno della sommatoria è la probabilità di una variabile binomiale con parametri $n-1$ e $p$ che assume il valore $j$. La somma di tutte le probabilità di una distribuzione è sempre 1:

$\sum_{j=0}^{n-1} \binom{n-1}{j} p^{j} (1-p)^{(n-1)-j} = 1$

Pertanto, il valore atteso di $X_n$ nel caso di estrazione con reimmissione è:

$$E[X_n] = np = n \cdot \frac{r}{n} = \frac{nr}{N}$$

_Commento:_ Il valore atteso del numero di biglie rosse estratte con reimmissione è proporzionale al numero di estrazioni e alla proporzione di biglie rosse presenti nell'urna.

## Caso 2: Estrazione Senza Reimmissione

Nel caso di estrazione senza reimmissione, le biglie estratte non vengono rimesse nell'urna. Questo significa che la composizione dell'urna cambia ad ogni estrazione, e quindi la probabilità di estrarre una biglia rossa varia ad ogni passo.

### Legge di Probabilità di $Y_m$

La probabilità che l'm-esima pallina estratta sia rossa dipende dagli esiti delle estrazioni precedenti. La legge di probabilità di $Y_m$ è una Bernoulli con un parametro che dipende dall'esito delle estrazioni precedenti. Calcolare direttamente la legge di $Y_m$ può essere complesso, in quanto richiede di considerare tutte le possibili sequenze di estrazioni precedenti.

### Legge di Probabilità di $X_n$

La variabile aleatoria $X_n$, che rappresenta il numero di biglie rosse estratte senza reimmissione, segue una **distribuzione ipergeometrica** con parametri $N$ (dimensione della popolazione, $n$), $K$ (numero di successi nella popolazione, $r$), e $n$ (numero di estrazioni).

La probabilità di estrarre esattamente $k$ biglie rosse su $n$ estrazioni senza reimmissione è data da:

$P(X_n = k) = \frac{\binom{r}{k} \binom{b}{n-k}}{\binom{n}{n}}$

dove $k$ è il numero di biglie rosse estratte, $n-k$ è il numero di biglie bianche estratte, $r$ è il numero totale di biglie rosse nell'urna, $b$ è il numero totale di biglie bianche nell'urna ($b = n - r$), e $n$ è il numero totale di biglie nell'urna da cui si estrae $n$ piccolo palline. I valori ammissibili per $k$ sono tali che i coefficienti binomiali siano ben definiti (non negativi nei termini inferiori e superiori, e il termine inferiore non supera il superiore). Se un coefficiente binomiale non è ben definito, il suo valore è considerato zero, il che è coerente con la probabilità nulla per eventi impossibili.

### Valore Atteso di $X_n$

Il valore atteso di $X_n$ nel caso di estrazione senza reimmissione è:

$E[X_n] = \sum_{k=0}^{n} k \cdot P(X_n = k) = \sum_{k=0}^{n} k \frac{\binom{r}{k} \binom{b}{n-k}}{\binom{n}{n}}$

Utilizzando la definizione dei coefficienti binomiali:

$E[X_n] = \sum_{k=0}^{n} k \frac{\frac{r!}{k!(r-k)!} \frac{b!}{(n-k)!(b-(n-k))!}}{\frac{n!}{n!(n-n)!}}$

Si osserva che per $k=0$ il termine è nullo, quindi possiamo iniziare la somma da $k=1$:

$E[X_n] = \sum_{k=1}^{n} k \frac{r!}{k!(r-k)!} \frac{b!}{(n-k)!(b-n+k)!} \frac{n!}{(n)!}$

Semplificando $k \cdot k! = k!$ nel denominatore:

$E[X_n] = \sum_{k=1}^{n} \frac{r!}{(k-1)!(r-k)!} \frac{b!}{(n-k)!(b-n+k)!} \frac{n!}{n!}$

Riscriviamo $r! = r \cdot (r-1)!$ e $n! = n \cdot (n-1)!$:

$E[X_n] = \sum_{k=1}^{n} \frac{r(r-1)!}{(k-1)!(r-k)!} \frac{b!}{(n-k)!(b-n+k)!} \frac{n(n-1)!}{n!}$

$E[X_n] = \frac{rn}{n} \sum_{k=1}^{n} \frac{(r-1)!}{(k-1)!(r-k)!} \frac{b!}{(n-k)!(b-n+k)!} \frac{(n-1)!}{(n-1)!}$

Consideriamo la sommatoria. Sostituiamo $j = k-1$, quindi quando $k$ va da $1$ a $n$, $j$ va da $0$ a $n-1$. Inoltre, $r-k = (r-1) - j$ e $n-k = (n-1) - j$. La sommatoria diventa:

$E[X_n] = \frac{rn}{n} \sum_{j=0}^{n-1} \frac{(r-1)!}{j!(r-1-j)!} \frac{b!}{(n-1-j)!(b-(n-1-j))!} \frac{(n-1)!}{(n-1)!}$

$E[X_n] = \frac{rn}{n} \sum_{j=0}^{n-1} \binom{r-1}{j} \binom{b}{n-1-j} \frac{(n-1)!}{n!}$

Riconosciamo che $\binom{n-1}{n-1} = \frac{(n-1)!}{(n-1)! (n-1 - (n-1))!} = 1$. Quindi moltiplichiamo e dividiamo per $n-1$:

$E[X_n] = \frac{rn}{n} \frac{1}{\binom{n}{n}} \sum_{j=0}^{n-1} \binom{r-1}{j} \binom{b}{n-1-j}$

Per l'identità di Vandermonde, sappiamo che $\sum_{j=0}^{n-1} \binom{r-1}{j} \binom{b}{n-1-j} = \binom{(r-1)+b}{n-1} = \binom{n-1}{n-1}$.

$E[X_n] = \frac{rn}{n} \frac{\binom{n-1}{n-1}}{\binom{n}{n}} = \frac{rn}{n} \frac{1}{1} = \frac{rn}{N}$

_Commento:_ Sorprendentemente, il valore atteso del numero di biglie rosse estratte è lo stesso sia con reimmissione che senza reimmissione. Questo risultato è intuitivo se si considera la linearità del valore atteso: $E[X_n] = E[\sum_{m=1}^{n} Y_m] = \sum_{m=1}^{n} E[Y_m]$. Nel caso senza reimmissione, si può dimostrare che $P(Y_m = 1) = \frac{r}{n}$ per ogni $m$, anche se le $Y_m$ non sono indipendenti. Quindi, $E[Y_m] = 1 \cdot P(Y_m = 1) + 0 \cdot P(Y_m = 0) = \frac{r}{n}$, e $E[X_n] = \sum_{m=1}^{n} \frac{r}{n} = n \cdot \frac{r}{n} = \frac{nr}{N}$.
#### References



