---
title: "prob-lez10"
---

2025-03-20 16:17

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## prob-lez10
## Variabili Aleatorie Discrete e Valore Atteso

### Introduzione alle Variabili Aleatorie Discrete

Il professore introduce l'argomento delle **variabili aleatorie discrete**, spiegando che spesso si userà una notazione come $X \sim$ qualche nome per indicare che la variabile aleatoria $X$ è distribuita secondo una certa legge.

#### Variabile Aleatoria di Poisson

Un primo esempio è la **variabile aleatoria di Poisson**.

- Notazione: $X \sim Pois(\lambda)$, dove $\lambda > 0$ è un parametro fissato.
- Definizione: Una variabile aleatoria $X$ è di Poisson , siccome è discreta sapppiamo che  la possiamo completamente caratterizzare con la sua **densità** (o funzione di probabilità) data da: $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$, per $k = 0, 1, 2, \dots$
- Spazio di Probabilità: Il professore sottolinea che per essere rigorosi, si dovrebbe definire $X$ su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ a valori in $\mathbb{R}$ discreto $(\Omega, \mathcal{F}, P) \to (\mathbb{R}, \mathcal{B}(\mathbb{R})$. La densità data rappresenta la **legge immagine** di $P$ tramite $X$. Nella maggior parte dei casi, ci si concentrerà sullo spazio di arrivo della variabile aleatoria.
- Supporto: La densità è positiva per valori interi maggiori o uguali a zero e implicitamente vale zero al di fuori di questi valori.

#### Esercizio sul Valore Atteso della Poisson

Il professore propone di calcolare il **valore atteso** di una variabile aleatoria di Poisson. La definizione del valore atteso per una variabile aleatoria discreta $X$ è $$E[X] = \sum_{x} x P(X=x)$$, dove la somma è estesa a tutti i possibili valori di $X$, purché $\sum_{x} |x| P(X=x) < \infty$ (convergenza assoluta).

Nel caso della Poisson, i valori possibili sono $k \ge 0$, quindi il valore atteso è: $E[X] = \sum_{k=0}^{\infty} k \frac{\lambda^k e^{-\lambda}}{k!}$

Osservando che per $k=0$ il termine è zero, la somma può iniziare da $k=1$: $E[X] = \sum_{k=1}^{\infty} k \frac{\lambda^k e^{-\lambda}}{k!} = \sum_{k=1}^{\infty} \frac{\lambda^k e^{-\lambda}}{(k-1)!}$

Si può riscrivere $\lambda^k$ come $\lambda \cdot \lambda^{k-1}$: $E[X] = \sum_{k=1}^{\infty} \lambda \frac{\lambda^{k-1} e^{-\lambda}}{(k-1)!} = \lambda \sum_{k=1}^{\infty} \frac{\lambda^{k-1} e^{-\lambda}}{(k-1)!}$

Effettuando un cambio di variabile, ponendo $j = k-1$, quando $k=1$ si ha $j=0$, e la somma diventa: $E[X] = \lambda \sum_{j=0}^{\infty} \frac{\lambda^{j} e^{-\lambda}}{j!}$

Si riconosce che la somma $\sum_{j=0}^{\infty} \frac{\lambda^{j} e^{-\lambda}}{j!}$ è la somma delle probabilità di tutti i possibili valori di una variabile aleatoria di Poisson con parametro $\lambda$, che è uguale a 1. Pertanto, il valore atteso di una variabile aleatoria di Poisson è: $E[X] = \lambda \cdot 1 = \lambda$

Il professore conclude che la **media** di una variabile aleatoria di Poisson è $\lambda$.

#### Variabile Aleatoria Binomiale

Un altro esempio di variabile aleatoria discreta è la **variabile aleatoria binomiale** con parametri $n \in \mathbb{N}$ e $p \in [0,1]$

- Notazione: $X \sim Bin(n, p)$.
- Definizione: La variabile aleatoria $X$ può assumere valori $k \in {0, 1, 2, \dots, n}$ con probabilità: $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$
- Interpretazione: Una variabile binomiale può essere pensata come il numero di successi in $n$ prove di Bernoulli indipendenti, ognuna con probabilità di successo $p$.
- Esercizio: Il professore propone come esercizio il calcolo del valore atteso di una variabile binomiale, anticipando che risulterà essere $np$, e che questo risultato verrà ripreso in seguito come esempio di una proprietà del valore atteso.

#### Variabile Aleatoria Geometrica

Il terzo esempio è la **legge geometrica**. Questa viene introdotta partendo da un modello probabilistico.

- Modello: Si consideri una successione infinita di eventi indipendenti $E_1, E_2, \dots$ tutti con la stessa probabilità $P(E_i) = p$ di verificarsi.
- Definizione della Variabile Aleatoria: Sia $X$ la variabile aleatoria che rappresenta il più piccolo indice $K$ tale che i primi $K-1$ eventi non si sono verificati e l'evento $K$-esimo si è verificato. In termini di "guasti", $X=K$ significa che il primo guasto avviene al tempo $K$.
- Supporto: La variabile aleatoria $X$ assume valori in ${1, 2, 3, \dots}$ (è discreta)
- Probabilità: La probabilità che $X$ sia uguale a $K$ è data da: $P(X=k) = P(E_1^c \cap E_2^c \cap \dots \cap E_{k-1}^c \cap E_k)$ A causa dell'indipendenza degli eventi, questa probabilità si fattorizza come: $P(X=k) = P(E_1^c) P(E_2^c) \dots P(E_{k-1}^c) P(E_k) = (1-p)^{k-1} p$
- Definizione Formale: Una variabile aleatoria discreta con questa densità di probabilità è detta **geometrica di parametro $p$**.

### La Funzione Indicatrice e il suo Valore Atteso

Il professore introduce la **funzione indicatrice** di un insieme $A$, definita come: $I_A(\omega) = \begin{cases} 1 & \text{se } \omega \in A \\ 0 & \text{se } \omega \notin A \end{cases}$

A volte, per comodità, soprattutto quando l'insieme $A$ è definito da una condizione che coinvolge una variabile aleatoria, si userà una notazione del tipo $I_{\set{X \in B}}$ o semplicemente $I(X \in B)$.

#### Valore Atteso di una Funzione Indicatrice

Considerando una variabile aleatoria $X = I_A$, che può assumere solo i valori 0 e 1, il suo valore atteso è: $E[X] = \sum_{x} x P(X=x) = 0 \cdot P(X=0) + 1 \cdot P(X=1)$
![[Pasted image 20250320163218.png|300]]

Si ha che $P(X=1) = P({\omega : I_A(\omega) = 1}) = P(A)$ e $P(X=0) = P({\omega : I_A(\omega) = 0}) = P(A^c)$. Pertanto, il valore atteso di una funzione indicatrice è la probabilità dell'evento che essa indica: $E[I_A] = P(A)$

In particolare, se si considera una variabile aleatoria $Z$ (invece di $X$ per evitare confusione) definita su uno spazio di probabilità e un insieme $B$ nello spazio di arrivo di $Z$, la variabile aleatoria $Y = I_{{Z \in B}}$ è una funzione indicatrice. Il suo valore atteso è la probabilità dell'evento ${Z \in B}$: $E[I_{{Z \in B}}] = P(Z \in B)$

Questa proprietà verrà utilizzata frequentemente.


# Trasformazione di Variabili Aleatorie e Valore Atteso di $g(X)$

## Caso Semplice Iniziale e Motivazione

Il professore inizia con un riferimento a un caso precedente, accennando alla differenza tra "sopra" e "sotto" e alla probabilità di un evento $Z \in B$ che può assumere solo valori 0 o 1.

Poi introduce l'idea di trasformare una variabile aleatoria $Z$ attraverso una funzione e calcolare il valore atteso della nuova variabile aleatoria ottenuta. Per generalizzare, introduce una variabile aleatoria $X$ (discreta) con il suo supporto $C_X$ e la sua funzione di probabilità $p_X$. Considera una funzione borelliana misurabile $g: \mathbb{R} \rightarrow \mathbb{R}$.
![[Pasted image 20250320164535.png|300]]
Si definisce una nuova variabile aleatoria $Y = g(X)$. L'obiettivo è calcolare il valore atteso di $Y$, ovvero $E[Y] = E[g(X)]$.

## Definizione del Valore Atteso di $Y = g(X)$

La definizione del valore atteso di $Y$ viene data come la somma sui possibili valori di $Y$, moltiplicati per la loro probabilità:

$E[Y] = \sum_{y \in C_Y} y \cdot P(Y = y)$
![[Pasted image 20250320164237.png|300]]

dove $C_Y$ è l'insieme dei valori che $Y$ può assumere.

**Osservazione Importante:** l'immagine di un insieme numerabile è al più un insieme numerabile tramite una funzione. 
Il professore sottolinea che se $X$ è discreta, anche $Y = g(X)$ è discreta. L'insieme dei valori che $Y$ assume $C_y$ è dato da ${y \in \mathbb{R} \mid \exists x \in C_X \text{ tale che } y = g(x) }$, e questo insieme ha probabilità 1.
![[Pasted image 20250320164508.png|300]]

## Costruzione di un'Espressione Alternativa per $E[g(X)]$ (Proprietà Fondamentale)

Il professore presenta un'espressione alternativa per calcolare $E[g(X)]$ che è spesso più utile nella pratica:

$E[g(X)] = \sum_{x \in C_X} g(x) \cdot P(X = x)$
![[Pasted image 20250320164709.png|300]]

**Importante:** Il professore insiste che questa non è la _definizione_ di valore atteso di $g(X)$, ma una **proprietà**. La definizione è quella basata sulla legge di probabilità di $Y = g(X)$.

### Dimostrazione della Proprietà (per $g \ge 0$)

Per semplificare la dimostrazione, si assume inizialmente che $g(x) \ge 0$. Il valore atteso di $Y = g(X)$ per definizione è:

$E[Y] = \sum_{y \in C_Y} y \cdot P(Y = y)$

Si sostituisce $Y = g(X)$:

$E[g(X)] = \sum_{y \in C_Y} y \cdot P(g(X) = y)$

La probabilità $P(g(X) = y)$ è la probabilità dell'unione di tutti gli eventi ${X = x}$ tali che $g(x) = y$:

$P(g(X) = y) = P\left( \bigcup_{x \in C_X: g(x) = y} {X = x} \right)$

Poiché gli eventi ${X = x}$ per diversi valori di $x$ sono disgiunti, la probabilità dell'unione è la somma delle probabilità:

$P(g(X) = y) = \sum_{x \in C_X: g(x) = y} P(X = x)$

Sostituendo questa espressione nella formula per il valore atteso:

$E[g(X)] = \sum_{y \in C_Y} y \cdot \left( \sum_{x \in C_X: g(x) = y} P(X = x) \right)$

Ora si inverte l'ordine delle somme:

$E[g(X)] = \sum_{x \in C_X} \left( \sum_{y \in C_Y: y = g(x)} y \cdot P(X = x) \right)$

Dato che per ogni $x$ fissato, $y = g(x)$ è un valore unico perché $g$ è una funzione, la somma interna si riduce a:

$E[g(X)] = \sum_{x \in C_X} g(x) \cdot P(X = x)$
![[Pasted image 20250320165435.png|300]]

Questa dimostrazione, inizialmente fatta per $g(x) \ge 0$, può essere estesa al caso generale considerando $g(x) = g^+(x) - g^-(x)$, dove $g^+$ e $g^-$ sono le parti positiva e negativa di $g$, e richiedendo che $E[|g(X)|] < \infty$ (cioè che la somma $\sum_{x \in C_X} |g(x)| P(X = x)$ converge).

## Proprietà del Valore Atteso

Il professore introduce alcune proprietà importanti del valore atteso per variabili aleatorie discrete:

### Linearità

Se $a, b \in \mathbb{R}$ e $X_1, X_2$ sono variabili aleatorie discrete tali che $E[|X_1|] < \infty$ e $E[|X_2|] < \infty$ (ovvero le rispettive serie convergono assolutamente),
![[Pasted image 20250320165559.png|300]] ![[Pasted image 20250320165627.png|300]]
allora il valore atteso della combinazione lineare $aX_1 + bX_2$ è ben definito e vale:

$E[aX_1 + bX_2] = aE[X_1] + bE[X_2]$

### Monotonia

Se una variabile aleatoria discreta $X$ è tale che $P(X \le a) = 1$, allora il suo valore atteso è minore o uguale ad $a$:

Se $P(X \le a) = 1 \implies E[X] \le a$

Come conseguenza, se due variabili aleatorie discrete $X_1$ e $X_2$ soddisfano $P(X_1 \le X_2) = 1$ e i loro valori attesi sono finiti, allora:

$E[X_1] \le E[X_2]$

### Disuguaglianza del Valore Assoluto

Il modulo del valore atteso di una variabile aleatoria discreta $X$ è minore o uguale al valore atteso del suo modulo:

$|E[X]| \le E[|X|]$

Questa è una conseguenza della proprietà di monotonia.

*Se una serie dei moduli è assolutamente convergente, cioè se $\sum_{n} |a_n|$ converge, allora il modulo della serie è minore o uguale alla serie dei moduli:*

$|\sum_{n} a_n| \le \sum_{n} |a_n|$


Il professore conclude sottolineando l'importanza di comprendere la distinzione tra la definizione del valore atteso di $g(X)$ e la proprietà che permette di calcolarlo direttamente sulla distribuzione di $X$.

esempio specifico nel contesto di variabili aleatorie discrete non negative.

#### Linearità del Valore Atteso per Variabili Discrete Non Negative

L'obiettivo è mostrare che, date due variabili aleatorie discrete $x_1$ e $x_2$ tali che $x_1 \ge 0$ e $x_2 \ge 0$, il valore atteso della loro somma è uguale alla somma dei loro valori attesi:

$E[x_1 + x_2] = E[x_1] + E[x_2]$

Per dimostrarlo, si parte dalla definizione del valore atteso di una funzione di un vettore aleatorio discreto. Se abbiamo un vettore aleatorio discreto $(X_1, X_2)$ con densità congiunta $P(x_1, x_2)$, il valore atteso di una funzione $g(X_1, X_2)$ è dato da:

$E[g(X_1, X_2)] = \sum_{x_1, x_2} g(x_1, x_2) P(x_1, x_2)$

Nel nostro caso, $g(x_1, x_2) = x_1 + x_2$, quindi:

$E[x_1 + x_2] = \sum_{x_1, x_2} (x_1 + x_2) P(x_1, x_2)$

Assumendo che la serie $\sum_{x_1, x_2} |(x_1 + x_2) P(x_1, x_2)|$ sia convergente (il professore menziona l'assoluta convergenza), possiamo separare la somma:
![[Pasted image 20250407115204.png]]
$E[x_1 + x_2] = \sum_{x_1, x_2} x_1 P(x_1, x_2) + \sum_{x_1, x_2} x_2 P(x_1, x_2)$

Riscrivendo le somme, portando fuori i termini che non dipendono dall'indice di sommazione interno:

$E[x_1 + x_2] = \sum_{x_1} x_1 \left( \sum_{x_2} P(x_1, x_2) \right) + \sum_{x_2} x_2 \left( \sum_{x_1} P(x_1, x_2) \right)$

Le somme interne rappresentano le **densità marginali** di $x_1$ e $x_2$ rispettivamente:

$P_{X_1}(x_1) = \sum_{x_2} P(x_1, x_2)$

$P_{X_2}(x_2) = \sum_{x_1} P(x_1, x_2)$

Sostituendo le densità marginali nell'espressione per il valore atteso:

$E[x_1 + x_2] = \sum_{x_1} x_1 P_{X_1}(x_1) + \sum_{x_2} x_2 P_{X_2}(x_2)$

Queste due somme sono per definizione il valore atteso di $x_1$ e il valore atteso di $x_2$:

$E[x_1 + x_2] = E[x_1] + E[x_2]$
![[Pasted image 20250407115814.png]]
Il professore sottolinea che questa dimostrazione è stata fornita in un caso particolare ($x_1 \ge 0, x_2 \ge 0$) per illustrare come la **linearità** del valore atteso discende dalla formula generale per il valore atteso di una funzione di un vettore aleatorio discreto. Le proprietà fondamentali introdotte sono la **linearità** e la **monotonia** del valore atteso.

### Estensione a Variabili Aleatorie Generali

Il professore introduce la questione di come definire il valore atteso per variabili aleatorie non discrete. Egli anticipa che l'approccio in questo caso è più complesso e si basa sulla teoria della misura.

#### Spazio Reale Esteso $\overline{\mathbb{R}}$

Viene anche menzionata la possibilità di considerare variabili aleatorie che possono assumere valori in $\overline{\mathbb{R}} = \mathbb{R} \cup \set{-\infty, +\infty}$. Per fare ciò, è necessario definire una sigma algebra su questo spazio. La sigma algebra considerata è la più piccola sigma algebra che contiene sia la sigma algebra di Borel su $\mathbb{R}$ ($\mathcal{B}(\mathbb{R})$) che gli insiemi ${-\infty}$ e ${+\infty}$. Questa viene chiamata la sigma algebra di Borel sulla retta estesa, $\mathcal{B}(\overline{\mathbb{R}})$.

Un insieme $A \in \mathcal{B}(\overline{\mathbb{R}})$ può essere scritto nella forma $A = \tilde{A} \cup \Delta$, dove $\tilde{A} \in \mathcal{B}(\mathbb{R})$ e $\Delta$ è uno dei seguenti insiemi: $\set{\emptyset}, \set{-\infty}, \set{+\infty}, \set{-\infty, +\infty}$.

Il professore avverte che le proprietà della **funzione di ripartizione** (CDF) definite precedentemente valgono solo per variabili aleatorie a valori reali e non si estendono direttamente al caso di variabili aleatorie a valori nella retta estesa. Ad esempio, $\lim_{x \to -\infty} F_X(x) = 0$ si basa sul fatto che $P(X = -\infty) = 0$ per variabili reali.
![[Pasted image 20250407120318.png]]
### Introduzione all'Integrale Rispetto a una Misura

Il professore inizia a introdurre il concetto di **integrale** di una funzione misurabile rispetto a una misura. Consideriamo uno spazio misurabile $(E, \mathcal{E})$ e una misura $\mu$ su di esso. Sia $\xi: E \to \overline{\mathbb{R}}$ una funzione misurabile. L'integrale di $\xi$ rispetto a $\mu$ viene indicato con la notazione:

$\int_E \xi d\mu \quad \text{oppure} \quad \int X d\mu$

Il professore spiega che questa definizione astratta sarà applicata in tre contesti principali:

- **Integrale di Lebesgue:** $E = \mathbb{R}^d$, $\mathcal{E} = \mathcal{B}(\mathbb{R}^d)$, e $\mu$ è la misura di Lebesgue su $\mathbb{R}^d$.
- **Valore Atteso:** $E = \Omega$ (spazio di probabilità), $\mathcal{E} = \mathcal{F}$ (sigma algebra degli eventi), e $\mu = P$ (misura di probabilità). In questo caso, se $\xi$ è una variabile aleatoria, l'integrale $\int_\Omega \xi dP$ rappresenta il valore atteso di $\xi$, $E[X]$.
- **Cambio di Variabili:** $E = \mathbb{R}^d$, $\mathcal{E} = \mathcal{B}(\mathbb{R}^d)$, e $\mu$ è la misura immagine di un vettore aleatorio $\xi$. L'integrale di una funzione di $\xi$, $f(\xi)$, potrà essere espresso come un integrale rispetto alla misura immagine.
![[Pasted image 20250407121025.png]]
### Definizione dell'Integrale per Funzioni Semplici Positive

Per iniziare a costruire la definizione generale dell'integrale, il professore introduce le **funzioni semplici positive** in forma canonica.

#### Funzioni Semplici Positive in Forma Canonica

Una funzione $S: E \to [0, +\infty)$ è detta **semplice positiva in forma canonica** se esistono un numero finito $m \in \mathbb{N}$, costanti $c_i \ge 0$ per $i = 1, \dots, m$, e insiemi misurabili $A_i \in \mathcal{E}$ tali che:

- $A_i \cap A_j = \emptyset$ per $i \neq j$ (gli insiemi formano una partizione).
- $\bigcup_{i=1}^m A_i = E$ (gli insiemi coprono tutto lo spazio).
- $S(x) = \sum_{i=1}^m c_i \mathbb{1}_{A_i}(x)$, dove $\mathbb{1}_{A_i}(x)$ è la funzione indicatrice dell'insieme $A_i$ (vale 1 se $x \in A_i$ e 0 altrimenti).

Una funzione semplice è misurabile perché è una combinazione lineare di funzioni indicatrici di insiemi misurabili.
![[Pasted image 20250407121246.png]]
#### Definizione dell'Integrale per Funzioni Semplici Positive

Per una funzione semplice positiva $S$ in forma canonica come definita sopra, l'**integrale di $S$ rispetto alla misura $\mu$**  (sigma finita)è definito come la somma:

$\int_E S (e) \cdot \mu (de) = \sum_{i=1}^m c_i \mu(E_i) \in [0, + \infty]$

dove $\mu(A_i)$ è la misura dell'insieme $A_i$. Si noti che questo valore può essere anche $+\infty$ se $\mu(A_i) = +\infty$ per qualche $i$ con $c_i > 0$.

Il professore osserva che questa definizione è analoga al valore atteso per variabili discrete, dove si sommano i valori assunti dalla variabile moltiplicati per le loro probabilità. In questo caso, i valori $c_i$ giocano il ruolo dei valori della variabile, e le misure $\mu(A_i)$ giocano il ruolo dei pesi (o probabilità, nel caso di misure di probabilità).

Il passo successivo sarà estendere questa definizione di integrale a funzioni misurabili più generali.
#### References

[[appunti bussetti- lez10.pdf]]

