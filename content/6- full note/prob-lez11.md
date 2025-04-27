2025-04-07 12:31

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[sbobine]]  [[probabilità]]

## prob-lez11
# **Definizione dell'Integrale di Lebesgue**

## **Introduzione al Problema e Funzioni Semplici Positive**

Oggi affronteremo il problema di definire l'integrale di una funzione $s$ che va da uno spazio di misura $(E, \mathcal{A}, \mu)$ (dove $E$ è uno spazio, $\mathcal{A}$ una $\sigma$-algebra e $\mu$ una misura $\sigma$-finita) a valori nei Boreliani di $\mathbb{R}$ o $\mathbb{R}$ esteso ($\overline{\mathbb{R}} = \mathbb{R} \cup {-\infty, +\infty}$) con i Boreliani di $\overline{\mathbb{R}}$.

La prima cosa che facciamo è definire l'integrale per una **funzione semplice**. Una funzione semplice $s$ è costante a tratti su certi insiemi $A_i \in \mathcal{A}$ che formano una partizione di $E$. Consideriamo inizialmente il caso in cui i valori $c_i$ assunti dalla funzione semplice sono tutti maggiori o uguali di 0 ($c_i \ge 0$) e gli insiemi $A_i$ formano una partizione di $E$ ($E = \bigcup_i A_i$ con $A_i \cap A_j = \emptyset$ per $i \neq j$). In questo caso, $s$ è detta **funzione semplice positiva**.

Per una funzione semplice positiva $s(x) = \sum_i c_i \mathbb{1}_{A_i}(x)$ (dove $\mathbb{1}_{A_i}(x)$ è la funzione indicatrice di $A_i$), definiamo l'integrale di $s$ rispetto a $\mu$ su $E$ come:

$\qquad \int_E s (e) \cdot \mu(de) = \sum_i c_i \mu(A_i)$

Questo è un numero maggiore o uguale di 0, poiché $c_i \ge 0$ e $\mu(A_i) \ge 0$. Potrebbe anche essere $+\infty$ se $\mu(A_i) = +\infty$ per qualche $i$ con $c_i > 0$, anche se la somma ha un numero finito di termini. Ad esempio, se $\mu$ è la misura di Lebesgue su $\mathbb{R}$, e $A_1 = (-\infty, 0]$, $A_2 = (0, +\infty)$, allora $\mu(A_1) = +\infty$ e $\mu(A_2) = +\infty$, e se la nostra funzione semplice è costante su questi insiemi con valori positivi, l'integrale sarà $+\infty$. Nonostante ciò, questa definizione è ben posta.

## **Estensione dell'Integrale a Funzioni Misurabili Positive**

Per definire l'integrale per una generica funzione misurabile positiva $\xi: E \to \overline {\mathbb{R}}$, utilizziamo un processo di approssimazione tramite funzioni semplici.

### **Proposizione:**

Sia $\xi: E \to \overline {\mathbb{R}}$ una funzione misurabile positiva

1. Esiste una successione $(s_n)_{n \in \mathbb{N}}$ di funzioni semplici positive tali che $(s_n(x))$ converge a $\xi(x)$ in modo **monotono crescente** per ogni $x \in E$. 
   Questo significa che per ogni $n$ e per ogni $x \in E$, $s_n(x) \le s_{n+1}(x)$, e $\lim_{n \to \infty} s_n(x) = \xi(x)$.
   ![[Pasted image 20250407125654.png]]
2. Se $(s_n)_{n \in \mathbb{N}}$ e $(s'_n)_{n \in \mathbb{N}}$ sono due successioni di funzioni semplici positive che convergono a $\xi$ in modo monotono crescente,
    allora: $\qquad \lim_{n \to \infty} \int_E s_n (e) \cdot \mu(de) = \lim_{n \to \infty} \int_E s'_n (e) \cdot \mu(de)$ Questo implica che il limite degli integrali non dipende dalla particolare successione approssimante scelta. Inoltre, si afferma implicitamente che questi limiti esistono.

### **Definizione dell'integrale di una funzione misurabile positiva:**

Sia $\xi: E \to \overline {\mathbb{R}}$ una funzione misurabile positiva. Definiamo l'integrale di $\xi$ rispetto a $\mu$ su $E$ come:

$$\qquad \int_E  \xi (e) \cdot \mu (de) = \lim_{n \to \infty} \int_E s_n(e) \mu(de)$$

dove $(s_n)_{n \in \mathbb{N}}$ è una qualsiasi successione di funzioni semplici positive che converge a $\xi$ in modo monotono crescente (la cui esistenza è garantita dal punto 1 della proposizione precedente). In virtù del punto 2 della stessa proposizione, questo limite è ben definito e non dipende dalla scelta specifica della successione $(s_n)$. Questo valore può essere un numero finito non negativo o $+\infty$.
![[Pasted image 20250407131315.png]]
Se $\int_E  \xi (e) \cdot \mu (de)< +\infty$, diciamo che la funzione $\xi$ è **integrabile** rispetto a $\mu$ e si dice che un integrale finito.

### **Intuizione della costruzione (facoltativa):**

La costruzione di Lebesgue differisce dall'integrale di Riemann nel modo in cui viene effettuata la partizione. Nell'integrale di Riemann, si partiziona il dominio (lo spazio di partenza), e si approssima la funzione con valori costanti su questi intervalli.

Nell'integrale di Lebesgue, l'idea è di **partizionare il codominio** (lo spazio di arrivo) e poi considerare le **controimmagini** di questi intervalli nel dominio. Per una funzione positiva, si suddivide l'asse reale non negativo in intervalli (ad esempio, $[0, 1/2), [1/2, 1), [1, 3/2), \dots$) e si guarda la misura degli insiemi del dominio dove la funzione cade in ciascuno di questi intervalli. Si costruisce così una funzione semplice che approssima la funzione originale dal basso. Raffinando la partizione del codominio, si ottiene una successione di funzioni semplici monotone crescenti che convergono alla funzione originale.
![[Pasted image 20250407133640.png]]
## **Definizione dell'Integrale per Funzioni Misurabili Generali**
![[Pasted image 20250407133934.png|200]]
*(parte negativa tratteggiata, positiva ricalcata)*
Consideriamo ora una funzione misurabile $\xi: E \to \overline{\mathbb{R}}$ che può assumere valori sia positivi che negativi. Possiamo sempre scrivere $\xi$ come la differenza tra la sua parte positiva $\xi^+ = \max(\xi, 0)$ e la sua parte negativa $\xi^- = \max(-\xi, 0)$:

$\qquad |\xi| = \xi^+ - \xi^-$

Sia $\xi^+ (x) = \begin{cases} \xi(x) & \text{se } \xi(x) \ge 0 \\ 0 & \text{se } \xi(x) < 0 \end{cases}$ e $\xi^- (x) = \begin{cases} 0 & \text{se } \xi(x) \ge 0 \\ -\xi(x) & \text{se } \xi(x) < 0 \end{cases}$

Se $\xi$ è misurabile, allora anche $\xi^+$ e $\xi^-$ sono funzioni misurabili e positive. Possiamo quindi definire i loro integrali $\int_E \xi^+ (e) \cdot \mu(de)$ e $\int_E \xi^- (e) \cdot \mu(de)$, che saranno numeri in $[0, +\infty]$.

### **Definizione dell'integrale di una funzione misurabile generale:**

Definiamo l'integrale di $\xi$ rispetto a $\mu$ su $E$ come:

$\qquad \int_E \xi (e) \cdot \mu(de) = \int_E \xi^+ (e) \cdot \mu(de) - \int_E \xi^- (e) \cdot \mu(de)$

Questa definizione ha senso se almeno uno tra $\int_E \xi^+ (e) \cdot \mu(de)$ e $\int_E \xi^- (e) \cdot \mu(de)$ è finito.

- Se $\int_E \xi^+ (e) \cdot \mu(de) < +\infty$ e $\int_E \xi^- (e) \cdot \mu(de) < +\infty$, allora diciamo che $\xi$ è **integrabile con integrale finito** rispetto a $\mu$, e il suo integrale è un numero finito.
  ![[Pasted image 20250407134322.png]]
- Se $\int_E \xi^+ (e) \cdot \mu(de) = +\infty$ e $\int_E \xi^- (e) \cdot \mu(de) < +\infty$, allora poniamo $\int_E \xi (e) \cdot \mu(de) = +\infty$.
- Se $\int_E \xi^+ (e) \cdot \mu(de) < +\infty$ e $\int_E \xi^- (e) \cdot \mu(de) = +\infty$, allora poniamo $\int_E \xi (e) \cdot \mu(de) = -\infty$.
- Se $\int_E \xi^+ (e) \cdot \mu(de) = +\infty$ e $\int_E \xi^- (e) \cdot \mu(de) = +\infty$, allora l'integrale di $\xi$ rispetto a $\mu$ è **indefinito**.

Osserviamo anche che il modulo di $\xi$ può essere scritto come $|\xi| = \xi^+ + \xi^-$.

### **Proposizione:**

Una funzione misurabile $\xi$ è integrabile (con integrale finito) se e solo se $\int_E |\xi| (e) \cdot \mu(de) < +\infty$. In questo caso, $\int_E \xi^+ (e) \cdot \mu(de) < +\infty$ e $\int_E \xi^- (e) \cdot \mu(de) < +\infty$.
![[Pasted image 20250407134936.png]]
(*per dire che si ammette integrale basterà allora testare sul valore assoluto della funzione $\xi$*)

___
### Integrabilità di una Funzione Misurabile

Per garantire che l'integrale di una funzione misurabile $\xi$ sia ben definito (cioè che non si abbia la forma $\infty - \infty$), si richiede che l'integrale del modulo della funzione sia finito: $\int |\xi| \mu(de) < \infty$

Se il valore assoluto di una funzione misurabile $\xi$ è integrabile (ha integrale finito), allora **automaticamente** gli integrali della parte positiva ($\int \xi^+ \mu(de)$) e della parte negativa ($\int \xi^- \mu(de)$) sono finiti, e quindi la funzione $\xi$ ammette un integrale finito.

### Integrale su un Insieme Misurabile

Se $A$ appartiene alla $\sigma$-algebra $\mathcal{E}$, si può definire l'integrale di una funzione misurabile $\xi$ ristretto all'insieme $A$: $$\int_A \xi(e) \cdot \mu(de) = \int \xi(e) \cdot \mathbb{1}_A \mu(de)$$

dove $\mathbb{1}_A$ è la funzione indicatrice dell'insieme $A$, definita come: $\mathbb{1}_A(x) = \begin{cases} 1 & \text{se } x \in A \\ 0 & \text{se } x \notin A \end{cases}$

Questa definizione intuitivamente significa considerare la funzione $\xi$ che vale zero al di fuori dell'insieme $A$. La funzione $\xi \cdot \mathbb{1}_A$ è misurabile perché è il prodotto di due funzioni misurabili. Ci si può poi chiedere se questa nuova funzione sia integrabile. Questa operazione di restringere l'integrazione a un sottoinsieme misurabile non sempre funziona con l'integrale di Riemann.

### Proprietà dell'Integrale Astratto

Sia $(E, \mathcal{E}, \mu)$ uno spazio di misura con $\mu$ $\sigma$-finita, e siano $\xi, \xi_1, \xi_2$ funzioni misurabili da $E$ a $\mathbb{R} \cup \set{-\infty, +\infty}$.

#### 1. Monotonia

Se $\xi \ge 0$ per ogni $e \in E$, allora: $\int_E \xi(e) \cdot \mu(de) \ge 0$

Questa proprietà segue direttamente dalla definizione dell'integrale per funzioni positive, che si basa su limiti di integrali di funzioni semplici positive.

#### 2. Linearità

Se $A, B \in \mathbb{R}$ e $\xi_1, \xi_2$ sono integrabili (hanno integrale finito), allora $A\xi_1 + B\xi_2$ è integrabile e: $\int_E (A\xi_1 + B\xi_2) \mu(de) = A \int_E \xi_1 \mu(de) + B \int_E \xi_2 \mu(de)$

Questa proprietà mostra che l'integrale è un operatore lineare, analogo alla linearità della somma per variabili aleatorie discrete e dell'integrale di Riemann.
![[Pasted image 20250407140100.png]]
#### 3. Insensitività agli Insiemi di Misura Nulla (?)

Sia $A \in \mathcal{E}$ tale che $\mu(A) = 0$. Se $\xi$ è integrabile, allora: $\int_A \xi(e) \cdot \mu(de) = 0$

Quindi, l'integrale di una funzione integrabile su un insieme di misura nulla è zero.

Una conseguenza importante di questa proprietà e della linearità è la seguente: se $\xi_1$ e $\xi_2$ sono integrabili e l'insieme ${e \in E \mid \xi_1(e) \neq \xi_2(e)}$ ha misura zero, allora: $\int_E \xi_1 \mu(de) = \int_E \xi_2 \mu(de)$

Questo significa che se si modifica una funzione integrabile su un insieme di misura nulla, il suo integrale non cambia. Questa è una differenza significativa rispetto all'integrale di Riemann.
![[Pasted image 20250407140417.png]]
#### 4. Teorema di Convergenza Monotona (MCT)

Sia $(\xi_n)_{n \in \mathbb{N}}$ una successione di funzioni misurabili tali che $0 \le \xi_n \le \xi_{n+1}$ per ogni $n$, e sia $\xi(e) = \lim_{n \to \infty} \xi_n(e)$ per ogni $e \in E$. Allora: $\lim_{n \to \infty} \int_E \xi_n \mu(de) = \int_E \xi(e) \cdot \mu(de)$

Equivalentemente, si può "portare il limite dentro l'integrale" in questo caso: $\lim_{n \to \infty} \int_E \xi_n(e) \mu(de) = \int_E \left( \lim_{n \to \infty} \xi_n(e) \right) \mu(de)$

Le ipotesi di positività e convergenza monotona sono cruciali per questo teorema. Il limite degli integrali può anche essere $+\infty$ se l'integrale della funzione limite è $+\infty$. Questo teorema non è generalmente valido per l'integrale di Riemann.

#### 5. Convergenza per Serie

Sia $(\xi_n)_{n \in \mathbb{N}}$ una successione di funzioni misurabili tali che $\xi_n \ge 0$ per ogni $n$. Allora: $$\sum_{n=1}^{\infty} \int_E \xi_n \mu(de) = \int_E \left( \sum_{n=1}^{\infty} \xi_n \right) \mu(de)$$

Anche in questo caso, si può "scambiare la somma con l'integrale", a condizione che le funzioni siano non negative. Questa proprietà può essere dimostrata usando il Teorema di Convergenza Monotona. I valori di entrambe le espressioni possono essere finiti o $+\infty$.
![[Pasted image 20250407140627.png]]
#### 6. Integrabilità e Valori Finiti Quasi Ovunque

Se $\xi$ è una funzione misurabile a valori in $\mathbb{R} \cup {-\infty, +\infty}$ e $\int_E |\xi (e)| \mu(de) < \infty$ (cioè $\xi$ è integrabile), allora la misura dell'insieme $\set{e:|\xi(e)| = +\infty}$ è zero: $\mu\set{e:|\xi(e)| = +\infty} = 0$

Quindi, se una funzione ha integrale finito, essa può assumere valori $\pm \infty$ solo su un insieme di misura nulla. Di conseguenza, se si sa che $\int_E |\xi| \mu(de) < \infty$, allora la funzione $\xi$ è **finitamente valutata quasi ovunque**. Questo implica che nella convergenza per serie, se $\sum_{n=1}^{\infty} \int_E \xi_n \mu(de) < \infty$, allora la serie $\sum_{n=1}^{\infty} \xi_n(e)$ converge per quasi ogni $e \in E$.
![[Pasted image 20250408095309.png]]
### Esempi

#### Esempio 1: Integrale rispetto a una misura discreta

Si consideri una misura $\mu$ definita come: $\mu = \sum_{n} \pi_n \delta_{e_n} (de)$

dove $(\pi_n)$ è una successione di pesi positivi, $(e_n)$ è una successione di punti in $E$, e $\delta_{e_n} (de)$ è la misura di Dirac nel punto $e_n$. L'integrale di una funzione $\xi$ rispetto a questa misura è dato da: $\int_E \xi(e) \cdot \mu(de) = \sum_{n\ge1} \xi(e_n) \pi_n$

La condizione di integrabilità in questo caso diventa $\sum_{n} |\xi(e_n)| \pi_n < \infty$. L'integrale è quindi una serie pesata dei valori della funzione nei punti che supportano la misura. Se tutti i $\pi_n = 1$ e $E = \mathbb{N}$ (o $\mathbb{Z}$), allora l'integrale di $\xi$ su $\mathbb{R}$ è la serie $\sum_{n} \xi(n)$, se questa è ben definita (cioè converge assolutamente).
![[Pasted image 20250408095818.png]]
#### Esempio 2: Valore atteso di una variabile aleatoria discreta

Sia $X$ una variabile aleatoria discreta a valori in $\mathbb{R}$. Il valore atteso di $X$ è definito come: $E[X] = \sum_{x} x P(X=x) = \sum_{i} x_i P(X=x_i)$

dove $(x_i)$ sono i possibili valori di $X$ e $P(X=x_i)$ sono le rispettive probabilità. Si scopre che questo valore atteso coincide con l'integrale astratto di $X$ su $\Omega$ rispetto alla misura di probabilità $P$: $E[X] = \int_{\Omega} X(\omega) P(d\omega)$

Inoltre, questo coincide anche con l'integrale astratto della funzione identità $x \mapsto x$ su $\mathbb{R}$ rispetto alla misura immagine $P_X$ di $P$ tramite $X$: $E[X] = \int_{\mathbb{R}} x P_X(dx)$

dove $P_X(A) = P(X \in A)$ per $A \subseteq \mathbb{R}$ misurabile. Nel caso discreto, la misura immagine $P_X$ è una misura discreta concentrata sui valori assunti da $X$ con pesi dati dalle probabilità.
![[Pasted image 20250408100122.png]]
### Integrale di Lebesgue su $\mathbb{R}^d$

L'integrale di Lebesgue è un caso particolare dell'integrale astratto dove lo spazio di partenza è $\mathbb{R}^d$, la $\sigma$-algebra è quella dei boreliani $\mathcal{B}(\mathbb{R}^d)$, e la misura $\mu$ è la misura di Lebesgue $m$ su $\mathbb{R}^d$. Una funzione $h: \mathbb{R}^d \to \mathbb{R}$ è detta misurabile se è borel-misurabile.
![[Pasted image 20250408100621.png]]
 L'integrale di Lebesgue di $h(x)$ su $\mathbb{R}^d$ si scrive come: $\int_{\mathbb{R}^d} h(x) Leb_D(dx)$

e più comunemente come: $\int_{\mathbb{R}^d} h(x) dx$ oppure $\int_{\mathbb{R}^d} h(x_1, ..., x_d) dx_1 ... dx_d$

Questo integrale è ben definito per funzioni misurabili e può valere un numero finito o $\pm \infty$.

### Relazione tra Integrale di Lebesgue e Integrale di Riemann

Sostanzialmente, tutte le funzioni che si dovranno integrare saranno integrabili secondo Lebesgue, e l'integrale di Riemann **coinciderà** con l'integrale di Lebesgue quando entrambi sono definiti.

Il problema principale con l'integrale di Riemann sorge quando si vuole integrare una funzione $h(x)$ su un sottoinsieme $A \subseteq \mathbb{R}^d$: $\int_A h(x) dx = \int_{\mathbb{R}^d} h(x) \mathbb{1}_A(x) dx$

Se $A$ è un insieme la cui funzione indicatrice $\mathbb{1}_A$ non è integrabile secondo Riemann (come ad esempio $A = \mathbb{Q} \cap [0,1]$), allora l'integrale di Riemann non è definito, mentre l'integrale di Lebesgue lo è.
![[Pasted image 20250408101856.png]]
D'altra parte, se il modulo di una funzione $h$ è integrabile secondo Riemann (in senso improprio, se necessario) su $\mathbb{R}$, allora $h$ è integrabile secondo Lebesgue e i due integrali coincidono: $\int_{\mathbb{R}} h(x) dx_{\text{Lebesgue}} = \int_{\mathbb{R}} h(x) dx_{\text{Riemann}}$

Ad esempio, $\int_0^1 x^2 dx$ calcolato con l'integrale di Riemann darà lo stesso risultato se calcolato con l'integrale di Lebesgue. Analogamente per $\int_0^{2\pi} \sin(x) dx$.

Esistono però casi in cui l'integrale di Riemann in senso improprio è definito ma la funzione non è integrabile secondo Lebesgue (cioè l'integrale del modulo è infinito), come ad esempio alcune funzioni oscillanti. Tuttavia, per gli scopi del corso, gli integrali che si dovranno calcolare potranno essere risolti usando le tecniche dell'integrale di Riemann (teorema fondamentale del calcolo, cambio di variabili, integrazione per parti). È fondamentale però riconoscere che l'integrale di Lebesgue offre una teoria più generale, in particolare per l'integrazione su insiemi più complessi e per i teoremi di convergenza.
![[Pasted image 20250408102918.png]]
### Costruzione di Misure di Probabilità a Partire da Funzioni

Sia $f: \mathbb{R}^d \to \mathbb{R}$ una funzione tale che:

1. $f(x) \ge 0$ per ogni $x \in \mathbb{R}^d$
2. $f$ è misurabile (borel-misurabile)
3. $\int_{\mathbb{R}^d} f(x) dx = 1$ (l'integrale è inteso nel senso di Lebesgue)
![[Pasted image 20250408105603.png]]
Allora, la funzione di insieme $P$ definita per ogni insieme boreliano $A \in \mathcal{B}(\mathbb{R}^d)$ come: $P(A) = \int_A f(x) dx = \int_{\mathbb{R}^d} \mathbb{1}_A(x) f(x) dx$

è una **misura di probabilità** sui boreliani di $\mathbb{R}^d$.
![[Pasted image 20250408105708.png]]
**Dimostrazione:**

1. **Non negatività:** $P(A) = \int_A f(x) dx \ge 0$ per la proprietà di monotonia dell'integrale, poiché $f(x) \ge 0$ e $\mathbb{1}_A(x) \ge 0$.
2. **Probabilità dello spazio totale:** $P(\mathbb{R}^d) = \int_{\mathbb{R}^d} f(x) dx = 1$ per ipotesi.
3. **$\sigma$-additività:** Sia $(A_n)_{n \in \mathbb{N}}$ una successione di insiemi boreliani a due a due disgiunti. Allora: $P\left( \bigcup_{n=1}^{\infty} A_n \right) = \int_{\mathbb{R}^d} \mathbb{1}_{\bigcup_{n=1}^{\infty} A_n}(x) f(x) dx$ Poiché gli $A_n$ sono disgiunti, $\mathbb{1}_{\bigcup_{n=1}^{\infty} A_n}(x) = \sum_{n=1}^{\infty} \mathbb{1}_{A_n}(x)$. Quindi: $P\left( \bigcup_{n=1}^{\infty} A_n \right) = \int_{\mathbb{R}^d} \left( \sum_{n=1}^{\infty} \mathbb{1}_{A_n}(x) \right) f(x) dx$ Per la proprietà di convergenza per serie dell'integrale astratto (che si applica all'integrale di Lebesgue): $P\left( \bigcup_{n=1}^{\infty} A_n \right) = \sum_{n=1}^{\infty} \int_{\mathbb{R}^d} \mathbb{1}_{A_n}(x) f(x) dx = \sum_{n=1}^{\infty} P(A_n)$ Quindi, $P$ è $\sigma$-additiva.
![[Pasted image 20250408105927.png]]
**Esempio:** La funzione $f(x) = \mathbb{1}_{[0, +\infty)}(x) e^{-x}$ è misurabile e non negativa su $\mathbb{R}$. Il suo integrale su $\mathbb{R}$ è: $\int_{\mathbb{R}} f(x) dx = \int_0^{+\infty} e^{-x} dx = [-e^{-x}]_0^{+\infty} = 0 - (-1) = 1$. Quindi, questa funzione $f(x)$ definisce una misura di probabilità sui boreliani di $\mathbb{R}$ tramite $P(A) = \int_A e^{-x} \mathbb{1}_{[0, +\infty)}(x) dx$.

La possibilità di costruire misure di probabilità in questo modo, integrando su insiemi che potrebbero avere indicatori non Riemann-integrabili, è una delle motivazioni per l'uso dell'integrale di Lebesgue.
#### References

[[appunti bussetti- lez11.pdf]]

