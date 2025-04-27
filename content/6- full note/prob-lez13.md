---
title: "prob-lez13"
---

2025-03-19 11:06

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[sbobine]]. [[probabilità]]

## prob-lez13


# Valore Atteso per Variabili Aleatorie Generali

## Introduzione al Valore Atteso Generale

L'argomento di oggi è l'estensione del concetto di **valore atteso** a variabili aleatorie **qualunque**, superando la definizione data per le sole variabili aleatorie discrete. L'obiettivo è definire il valore atteso in un contesto più generale, utilizzando la teoria dell'integrazione astratta.

## Definizione Attraverso l'Integrale Astratto

Consideriamo una variabile aleatoria $X$ definita su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, dove $\Omega$ è lo spazio campionario, $\mathcal{F}$ è la sigma-algebra degli eventi e $P$ è la misura di probabilità. La variabile aleatoria $X$ assume valori nei numeri reali Boreliani $\mathbb{R}$ (o eventualmente in $\mathbb{R}$ esteso) ed è una funzione misurabile $X: \Omega \to \mathbb{R}$ (o $\mathbb{R} \cup {-\infty, +\infty}$).

L'**integrale astratto** di una funzione misurabile su uno spazio con una misura sigma-finita è un concetto matematico ben definito, sebbene la sua definizione rigorosa coinvolga l'approssimazione con funzioni semplici e il passaggio al limite.

Nel nostro caso, per definire il valore atteso di una variabile aleatoria $X$, utilizziamo l'integrale astratto con le seguenti specifiche scelte:

- Lo spazio di misura è lo spazio di probabilità $(\Omega, \mathcal{F}, P)$.
- La funzione misurabile è la variabile aleatoria $X: \Omega \to \mathbb{R}$.

Formalmente, il **valore atteso** di $X$, denotato con $E[X]$, è definito come l'integrale astratto di $X$ rispetto alla misura di probabilità $P$ su $\Omega$:

$$E[X] = \int_\Omega X(\omega) dP(\omega)$$

È importante notare che questa notazione è, inizialmente, un **simbolo** che rappresenta un oggetto matematicamente ben definito sotto opportune condizioni. Affinché il valore atteso sia ben definito, in particolare, l'integrale astratto del modulo di $X$, $\int_\Omega |X(\omega)| dP(\omega)$, deve essere finito.

## Richiamo al Caso Discreto

Quando abbiamo introdotto il valore atteso per variabili aleatorie discrete, abbiamo implicitamente utilizzato questo concetto di integrale astratto con la specifica misura di probabilità definita sui punti dello spazio campionario discreto. La notazione $\int_\Omega X(\omega) dP(\omega)$ nel caso discreto significa semplicemente applicare la definizione di integrale astratto a quella particolare scelta di $P$ (la misura di probabilità discreta), di $\Omega$ (l'insieme discreto) e della variabile aleatoria $X$ definita su di esso.

## Definizione Costruttiva del Valore Atteso

Per dare un senso più concreto al valore atteso, possiamo seguire una costruzione in tre passaggi:

### 1. Valore Atteso per Variabili Aleatorie Semplici Positive

Una **variabile aleatoria semplice positiva** $X$ può essere espressa come una combinazione lineare finita di funzioni indicatrici di insiemi $A_i \in \mathcal{F}$ con coefficienti $c_i \ge 0$:

$$X(\omega) = \sum_{i=1}^n c_i \mathbf{1}_{A_i}(\omega)$$

dove $\mathbf{1}_{A_i}(\omega) = 1$ se $\omega \in A_i$ e $0$ altrimenti.

Il valore atteso di una variabile aleatoria semplice positiva $X$ è definito come:

$$E[X] = \sum_{i=1}^n c_i P(A_i)$$

### 2. Valore Atteso per Variabili Aleatorie Positive Generali

Per una variabile aleatoria $X \ge 0$, non necessariamente semplice, si costruisce una **successione di variabili aleatorie semplici positive** ${X_n}_{n \ge 1}$ che converge **monotonamente** a $X$, cioè $0 \le X_n(\omega) \le X_{n+1}(\omega) \le X(\omega)$ per ogni $\omega \in \Omega$ e $\lim_{n \to \infty} X_n(\omega) = X(\omega)$.

Il valore atteso di $X$ è quindi definito come il limite dei valori attesi delle variabili semplici approssimanti:

$$E[X] = \lim_{n \to \infty} E[X_n]$$

Questo limite esiste (può essere finito o $+\infty$) ed è **indipendente** dalla particolare successione di variabili semplici che converge monotonamente a $X$.

### 3. Valore Atteso per Variabili Aleatorie Generali

Per una variabile aleatoria $X$ generica (che può assumere valori sia positivi che negativi), si considerano la sua **parte positiva** $X^+ = \max(X, 0)$ e la sua **parte negativa** $X^- = \max(-X, 0)$. Si ha che $X = X^+ - X^-$ e $|X| = X^+ + X^-$.

Il valore atteso di $X$ è definito come:

$$E[X] = E[X^+] - E[X^-]$$

purché entrambi $E[X^+]$ e $E[X^-]$ siano **finiti**.

Se uno solo tra $E[X^+]$ e $E[X^-]$ è infinito, allora $E[X]$ è definito come $+\infty$ o $-\infty$ rispettivamente. Se entrambi $E[X^+]$ e $E[X^-]$ sono infiniti, allora il valore atteso di $X$ **non è ben definito**.

Una variabile aleatoria $X$ è detta **integrabile** se il suo valore atteso del modulo è finito, cioè $E[|X|] < \infty$. Questa condizione è **equivalente** a richiedere che sia $E[X^+] < \infty$ che $E[X^-] < \infty$. In questo caso, il valore atteso $E[X]$ è un numero reale finito.

## Definizione Alternativa del Valore Atteso

Esiste una definizione alternativa del valore atteso di una variabile aleatoria $X$ (anche non positiva) come l'estremo superiore dei valori attesi di tutte le variabili aleatorie semplici positive $S$ che sono minori o uguali a $X$ puntualmente:

$$E[X] = \sup {E[S] \mid S \text{ è semplice, } 0 \le S(\omega) \le X(\omega) \text{ per ogni } \omega \in \Omega }$$

Questa definizione è **equivalente** alla definizione costruttiva basata sul limite di variabili semplici approssimanti.

## Notazioni per il Valore Atteso

Oltre alla notazione $E[X]$, si possono trovare anche le seguenti notazioni per il valore atteso:

- $\int_\Omega X(\omega) dP(\omega)$ (integrale astratto esplicito)
- $\langle X \rangle$ (usata spesso nella letteratura fisica)

Il professore indica che userà prevalentemente la notazione $E[X]$.

## Proprietà del Valore Atteso

Poiché il valore atteso è un caso particolare di integrale astratto (rispetto alla misura di probabilità $P$), esso eredita diverse proprietà. Vediamo alcune delle più importanti:

### Linearità

Siano $X_1$ e $X_2$ due variabili aleatorie con valore atteso finito (integrabili) definite sullo stesso spazio di probabilità $(\Omega, \mathcal{F}, P)$, e siano $a, b \in \mathbb{R}$. Allora la variabile aleatoria $aX_1 + bX_2$ è integrabile e il suo valore atteso è dato da:

$$E[aX_1 + bX_2] = aE[X_1] + bE[X_2]$$

### Monotonia

Se $P(X_1 \ge X_2) = 1$, allora i loro valori attesi soddisfano la stessa disuguaglianza:

$$E[X_1] \ge E[X_2]$$

Come caso particolare, se $P(X_1 \ge 0) = 1$, allora $E[X_1] \ge 0$. Questa proprietà è leggermente più debole rispetto alla proprietà analoga per l'integrale astratto, in quanto la condizione è richiesta solo con probabilità 1, non per ogni $\omega \in \Omega$.

### Disuguaglianza del Valore Assoluto

Per una variabile aleatoria $X_1$ con valore atteso finito, vale la seguente disuguaglianza:

$$|E[X_1]| \le E[|X_1|]$$

### Insensibilità a Eventi di Probabilità Zero

Se due variabili aleatorie $X_1$ e $X_2$ sono uguali con probabilità 1, cioè $P(X_1 = X_2) = 1$, allora i loro valori attesi sono uguali:

$$E[X_1] = E[X_2]$$

In particolare, se $P(X_1 = c) = 1$ per una costante $c \in \mathbb{R}$, allora $E[X_1] = c$.

Corollario: Se $A \in \mathcal{F}$ è un evento con probabilità nulla, $P(A) = 0$, e $X_1$ è una variabile aleatoria integrabile, allora:

$$E[X_1 \mathbf{1}_A] = 0$$

### Valore Atteso e Variabili Aleatorie a Valori Estesi

Le definizioni di valore atteso possono essere estese a variabili aleatorie che possono assumere i valori $+\infty$ o $-\infty$. Tuttavia, se il valore atteso $E[X_1]$ è finito, allora la probabilità che $X_1$ assuma valori infiniti è zero:

$$P(X_1 \in \mathbb{R}) = 1$$

Questo può essere utile in situazioni in cui dimostrare direttamente che una variabile aleatoria non assume valori infiniti è complicato, ad esempio nel caso di limiti di successioni di variabili aleatorie. Se si riesce a dimostrare che il valore atteso del limite è finito, allora il limite stesso sarà finito con probabilità 1.

## Dipendenza dalla Legge della Variabile Aleatoria

Il valore atteso di una variabile aleatoria $X$ dipende unicamente dalla sua **legge** (o distribuzione di probabilità), e non specificamente dallo spazio di probabilità $(\Omega, \mathcal{F}, P)$ su cui è definita. Questa è una giustificazione del perché spesso si parla di variabili aleatorie con specifiche distribuzioni (esponenziale, Gamma, Gaussiana) senza menzionare esplicitamente lo spazio di probabilità sottostante.

Nel caso di variabili aleatorie **assolutamente continue**, la legge è descritta dalla **funzione di densità di probabilità** $f_X(x)$. In questo caso, il valore atteso può essere calcolato come:

$$E[X] = \int_{-\infty}^{+\infty} x f_X(x) dx$$

Nel caso di variabili aleatorie **discrete**, la legge è descritta dalla **funzione di massa di probabilità** $p_X(x) = P(X=x)$. In questo caso, il valore atteso è dato da:

$$E[X] = \sum_x x p_X(x)$$

dove la somma è estesa a tutti i possibili valori $x$ che la variabile aleatoria può assumere.

## Teoremi di Convergenza

Un'altra motivazione fondamentale per l'introduzione del concetto generale di valore atteso attraverso l'integrale astratto è la possibilità di enunciare e dimostrare importanti **teoremi di convergenza** per successioni di variabili aleatorie. Questi teoremi forniscono condizioni sotto le quali è possibile scambiare il limite con l'operatore di valore atteso.

## Convergenza di Variabili Aleatorie e Teoremi Fondamentali

### Introduzione alla Convergenza di Variabili Aleatorie

Il corso approfondirà diversi tipi di convergenza di variabili aleatorie. Questa è la prima volta che si introduce questo argomento, che sarà ripreso in seguito con maggiore dettaglio. È fondamentale ricordare che non esiste un unico tipo di convergenza per variabili aleatorie, pertanto è sempre necessario specificare l'aggettivo che qualifica il tipo di convergenza.

### Convergenza Quasi Certamente

#### Definizione di Convergenza Quasi Certamente

Consideriamo una successione di variabili aleatorie ${X_n}_{n \ge 1}$ definite su un comune spazio di probabilità $(\Omega, \mathcal{F}, P)$ a valori in $\mathbb{R}$, e una variabile aleatoria $X$ definita sullo stesso spazio di probabilità.

**Definizione:** La successione di variabili aleatorie ${X_n}$ converge **quasi certamente** a $X$ se la probabilità dell'insieme degli $\omega \in \Omega$ tali per cui il limite di $X_n(\omega)$ è uguale a $X(\omega)$ è pari a 1.

In simboli, scriviamo $X_n \xrightarrow{q.c.} X$ se $$
P\left(\left\{\omega \in \Omega : \lim_{n \to \infty} X_n(\omega) = X(\omega)\right\}\right) = 1
$$ È importante notare che tutte le variabili aleatorie della successione e la variabile aleatoria limite devono essere definite sullo stesso spazio di probabilità.

#### Interpretazione della Convergenza Quasi Certamente

Per ogni $\omega$ fissato, $X_n(\omega)$ è una successione di numeri reali. La convergenza quasi certa significa che questa successione converge a $X(\omega)$ per tutti gli $\omega$ appartenenti a un sottoinsieme di $\Omega$ che ha probabilità 1.

**Osservazione:** La convergenza quasi certa è "leggermente meno" stringente della convergenza puntuale. Se $X_n(\omega)$ converge a $X(\omega)$ per ogni $\omega \in \Omega$, allora la convergenza quasi certa è automaticamente verificata, poiché l'insieme ${\omega \in \Omega : \lim_{n \to \infty} X_n(\omega) = X(\omega)}$ coincide con $\Omega$, e $P(\Omega) = 1$. Tuttavia, è possibile avere convergenza quasi certa anche se la convergenza puntuale non si verifica su un insieme di misura di probabilità nulla.

L'espressione "quasi certamente" indica che un certo evento (in questo caso, la convergenza puntuale di $X_n(\omega)$ a $X(\omega)$) si verifica su un insieme $\Omega' \subseteq \Omega$ tale che $P(\Omega') = 1$.

**Esempio:** Se $P(X_1 = 0) = 1$, allora si può dire che $X_1$ è quasi certamente uguale a 0. In tal caso, il valore atteso di $X_1$ è $E[X_1] = 0$.

### Teorema di Convergenza Monotona

Questo teorema stabilisce un importante risultato sul limite del valore atteso di una successione di variabili aleatorie non negative che convergono in modo monotono.

**Teorema di Convergenza Monotona:** Sia ${X_n}_{n \ge 1}$ una successione di variabili aleatorie definite su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ tali che:

- $X_n \ge 0$ quasi certamente per ogni $n \ge 1$. Questo significa che $P(X_n \ge 0) = 1$ per ogni $n$.
- $X_n$ converge a $X$ in modo monotono crescente quasi certamente, cioè $X_{n+1} \ge X_n$ quasi certamente per ogni $n \ge 1$, e $X_n \xrightarrow{q.c.} X$. In termini di probabilità, $P(X_{n+1} \ge X_n) = 1$ per ogni $n$, e $P\left(\left{\omega \in \Omega : \lim_{n \to \infty} X_n(\omega) = X(\omega)\right}\right) = 1$.

Allora, il limite dei valori attesi di $X_n$ è uguale al valore atteso del limite $X$: $$ \lim_{n \to \infty} E[X_n] = E[X] $$ È importante notare che i valori attesi possono essere finiti o anche $+\infty$. Se il membro di destra è infinito, allora anche il membro di sinistra deve essere infinito, e viceversa.

**Osservazione:** Le due condizioni del teorema (non negatività e convergenza monotona) sono cruciali e il risultato non vale per una qualunque successione di variabili aleatorie.

### Corollario sulla Convergenza di Serie di Variabili Aleatorie Non Negative

Questo corollario, derivabile dal teorema di convergenza monotona (e anche dal teorema di convergenza dominata), riguarda la convergenza di serie di variabili aleatorie non negative.

**Corollario:** Sia ${X_n}_{n \ge 1}$ una successione di variabili aleatorie tali che $X_n \ge 0$ quasi certamente per ogni $n \ge 1$. Se la serie dei valori attesi converge, cioè $\sum_{i=1}^{\infty} E[X_i] < \infty$, allora la serie $\sum_{i=1}^{\infty} X_i$ converge quasi certamente a una variabile aleatoria finita.

**Dimostrazione (Esercizio):** Si consideri la successione delle somme parziali $S_n = \sum_{i=1}^{n} X_i$. Poiché $X_i \ge 0$, la successione ${S_n}_{n \ge 1}$ è monotona crescente. Si applichi il teorema di convergenza monotona alla successione ${S_n}$. Se $\sum_{i=1}^{\infty} E[X_i] = L < \infty$, allora $\lim_{n \to \infty} E[S_n] = E[\lim_{n \to \infty} S_n] = E\left[\sum_{i=1}^{\infty} X_i\right] = L < \infty$. Se il valore atteso della somma è finito, allora la somma stessa deve essere finita quasi certamente (proprietà di finitezza del valore atteso non esplicitata nelle fonti, ma richiamata dal professore).

**Esempio:** Supponiamo di avere una successione di variabili aleatorie $X_i \ge 0$ tali che $E[X_i] \le \frac{1}{i^2}$. Sappiamo che la serie numerica $\sum_{i=1}^{\infty} \frac{1}{i^2}$ converge. Quindi, per il corollario, la serie di variabili aleatorie $\sum_{i=1}^{\infty} X_i$ converge quasi certamente.

**Importanza del Corollario:** Questo risultato è utile perché spesso è più semplice calcolare o stimare il valore atteso di singole variabili aleatorie o di una serie di valori attesi, piuttosto che studiare direttamente la convergenza quasi certa di una serie di variabili aleatorie.

### Teorema di Convergenza Dominata

Questo è un altro teorema fondamentale che fornisce condizioni per scambiare il limite con l'integrale (o il valore atteso) quando si ha convergenza quasi certa.

**Teorema di Convergenza Dominata:** Sia ${X_n}_{n \ge 1}$ una successione di variabili aleatorie definite su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ tale che:

- $X_n$ converge quasi certamente a una variabile aleatoria $X$, cioè $X_n \xrightarrow{q.c.} X$.
- Esiste una variabile aleatoria $Y$ definita sullo stesso spazio di probabilità tale che $|X_n| \le Y$ quasi certamente per ogni $n \ge 1$, e il valore atteso di $|Y|$ è finito, cioè $E[|Y|] < \infty$.

Allora, vale il seguente risultato sul limite dei valori attesi: $$ \lim_{n \to \infty} E[X_n] = E[X] $$ **Osservazione:** A differenza del teorema di convergenza monotona, le variabili aleatorie $X_n$ non devono essere non negative né convergere in modo monotono; è sufficiente la convergenza quasi certa. Tuttavia, è necessario trovare una variabile aleatoria $Y$ "dominante" che sia integrabile (cioè con valore atteso finito) e che limiti in modulo tutte le $X_n$ quasi certamente.

**Domanda del Professore:** Le variabili aleatorie $X_n$ nel teorema di convergenza dominata possono avere valore atteso più infinito?

**Risposta:** No, perché se $|X_n| \le Y$ quasi certamente e $E[|Y|] < \infty$, allora per la proprietà di monotonia del valore atteso (non esplicitata nelle fonti, ma richiamata dal professore), anche $E[|X_n|]$ deve essere finito, e quindi anche $E[X_n]$ è ben definito e finito.

**Confronto con il Teorema di Convergenza Monotona:** Nel teorema di convergenza monotona per variabili non negative, era possibile che i valori attesi fossero infiniti. Nel teorema di convergenza dominata, la condizione di dominazione con una variabile integrabile implica che i valori attesi delle $X_n$ (e di $X$) sono sempre finiti.

**Osservazioni aggiuntive sul Teorema di Convergenza Dominata:** Esistono diverse varianti del teorema di convergenza dominata, alcune delle quali prevedono una dominazione non da una singola variabile $Y$ ma da una successione di variabili aleatorie. Esistono anche versioni per misure sigma-finite e per l'integrale astratto, ma non saranno trattate nel corso. La versione presentata è la più semplice e spesso sufficiente per le applicazioni.

# Valore Atteso e Cambiamento di Variabili

## Introduzione al Valore Atteso e al Problema del Calcolo di $E[g(X)]$

Il valore atteso di una variabile aleatoria è un concetto fondamentale nella teoria della probabilità. In termini astratti, dato uno spazio di misura $(\Omega, \mathcal{F}, P)$ e una variabile aleatoria $Y: \Omega \rightarrow \mathbb{R}$, il valore atteso di $Y$, denotato con $E[Y]$, è definito come l'integrale di Lebesgue di $Y$ rispetto alla misura di probabilità $P$:

$$E[Y] = \int_{\Omega} Y(\omega) dP(\omega)$$

Spesso ci troviamo nella situazione in cui vogliamo calcolare il valore atteso di una funzione di una variabile aleatoria, ovvero $E[g(X)]$, dove $X: \Omega \rightarrow X$ è una variabile aleatoria a valori in uno spazio $X$, e $g: X \rightarrow \mathbb{R}$ è una funzione misurabile. Calcolare direttamente l'integrale su $\Omega$ può essere complicato, specialmente quando la struttura di $\Omega$ e la natura di $X$ non sono esplicitamente note.

## Cambiamento di Variabili Astratto

### Schema Generale

Consideriamo il seguente schema:

$\Omega \xrightarrow{X} X \xrightarrow{g} \mathbb{R}$

dove:

- $(\Omega, \mathcal{F}, P)$ è uno spazio di misura.
- $X: \Omega \rightarrow X$ è una funzione misurabile (una variabile aleatoria astratta a valori nello spazio $X$).
- $g: X \rightarrow \mathbb{R}$ è una funzione misurabile.

La variabile aleatoria $Y = g(X)$ è quindi una funzione misurabile da $\Omega$ a $\mathbb{R}$, e il suo valore atteso è dato da:

$$E[g(X)] = \int_{\Omega} g(X(\omega)) dP(\omega)$$

### Teorema di Cambiamento di Variabili

Il teorema di cambiamento di variabili fornisce un modo alternativo per calcolare questo valore atteso, spesso più semplice.

**Teorema (Cambiamento di Variabili Astratto):** Siano $X: \Omega \rightarrow X$ una variabile aleatoria astratta (funzione misurabile) e $g: X \rightarrow \mathbb{R}$ una funzione misurabile. Sia $P_X$ la misura immagine di $P$ tramite $X$ su $X$. Se $E[|g(X)|] < \infty$, allora:

$$E[g(X)] = \int_{X} g(x) dP_X(x)$$

dove $P_X(B) = P(X^{-1}(B)) = P({ \omega \in \Omega : X(\omega) \in B })$ per ogni insieme misurabile $B \subseteq X$. In altre parole, il valore atteso di $g(X)$ può essere calcolato come l'integrale di $g$ sullo spazio $X$ rispetto alla misura indotta $P_X$.

**Dimostrazione:** (Implicita nel testo, il professore afferma che se uno dei due integrali è ben definito, lo è anche l'altro e sono uguali).

### Esempio Concreto: Vettore Aleatorio in $\mathbb{R}^D$

Consideriamo un vettore aleatorio $X = (X_1, ..., X_D): \Omega \rightarrow \mathbb{R}^D$. In questo caso, lo spazio $X$ è $\mathbb{R}^D$ con la sua $\sigma$-algebra dei boreliani $\mathcal{B}(\mathbb{R}^D)$. La misura indotta $P_X$ è la misura immagine su $\mathbb{R}^D$, che è la legge (o distribuzione) del vettore aleatorio $X$.

Se $g: \mathbb{R}^D \rightarrow \mathbb{R}$ è una funzione misurabile, allora il valore atteso di $g(X)$ è dato da:

$$E[g(X)] = \int_{\mathbb{R}^D} g(x_1, ..., x_D) dP_X(x_1, ..., x_D)$$

Questo integrale è un integrale di Lebesgue su $\mathbb{R}^D$ rispetto alla misura $P_X$.

**Corollario:** Se $X$ è un vettore aleatorio in $\mathbb{R}^D$ e $g: \mathbb{R}^D \rightarrow \mathbb{R}$ è misurabile tale che $E[|g(X)|] < \infty$, allora il valore atteso di $g(X)$ può essere calcolato come l'integrale di $g$ rispetto alla legge (misura immagine) di $X$ su $\mathbb{R}^D$. Questo è un passo importante perché ci permette di lavorare su uno spazio più concreto come $\mathbb{R}^D$ invece dell'astratto $\Omega$.

## Caso Particolare: Variabile Aleatoria Reale

Se $X: \Omega \rightarrow \mathbb{R}$ è una variabile aleatoria reale, allora lo spazio $X$ è $\mathbb{R}$ con la $\sigma$-algebra dei boreliani $\mathcal{B}(\mathbb{R})$, e $P_X$ è la legge di $X$ su $\mathbb{R}$. Per una funzione misurabile $g: \mathbb{R} \rightarrow \mathbb{R}$, il valore atteso di $g(X)$ è:

$$E[g(X)] = \int_{\mathbb{R}} g(x) dP_X(x)$$

### Caso Assolutamente Continuo

Se la variabile aleatoria reale $X$ è assolutamente continua, allora la sua legge $P_X$ può essere rappresentata da una funzione di densità di probabilità $f_X(x) \ge 0$ tale che $\int_{\mathbb{R}} f_X(x) dx = 1$. In questo caso, l'integrale rispetto alla misura $P_X$ si riduce a un integrale di Riemann (o Lebesgue) rispetto alla misura di Lebesgue $dx$:

$$E[g(X)] = \int_{\mathbb{R}} g(x) f_X(x) dx$$

In particolare, il valore atteso di $X$ stesso (quando $g(x) = x$) è:

$$E[X] = \int_{\mathbb{R}} x f_X(x) dx$$

a condizione che $\int_{\mathbb{R}} |x| f_X(x) dx < \infty$.

## Proprietà del Valore Atteso

Il professore menziona alcune proprietà importanti del valore atteso, valide sia nel caso astratto che nei casi particolari (discreto e assolutamente continuo):

- **Linearità:** $E[aY + bZ] = aE[Y] + bE[Z]$ per variabili aleatorie $Y, Z$ e costanti $a, b$.
- **Disuguaglianza del Modulo:** $|E[Y]| \le E[|Y|]$.
- **Monotonia:** Se $Y \le Z$ (puntualmente), allora $E[Y] \le E[Z]$.
- **Teoremi di Convergenza:** (Non specificati nel dettaglio, ma importanti per passare al limite sotto il segno di valore atteso).

Queste proprietà sono particolarmente utili perché valgono in generale, indipendentemente dalla natura discreta o continua della variabile aleatoria.

## Calcolo del Valore Atteso nei Casi Specifici

### Caso 1: Variabile Aleatoria Discreta

Se $X$ è un vettore aleatorio discreto a valori in $\mathbb{R}^D$, allora assume un insieme finito o numerabile di valori ${x_i}_{i \in I}$ con probabilità $p_i = P(X = x_i) > 0$ tali che $\sum_{i \in I} p_i = 1$. La legge di $X$, $P_X$, è una misura discreta concentrata sui punti ${x_i}$. Per una funzione $g: \mathbb{R}^D \rightarrow \mathbb{R}$, il valore atteso di $g(X)$ è dato dalla somma:

$$E[g(X)] = \sum_{i \in I} g(x_i) P(X = x_i) = \sum_{i \in I} g(x_i) p_i$$

Questo era già stato visto come la proprietà P0 nel caso discreto.

### Caso 2: Variabile Aleatoria Assolutamente Continua (Unidimensionale)

Se $X$ è una variabile aleatoria reale assolutamente continua con densità $f_X(x)$, allora per una funzione $g: \mathbb{R} \rightarrow \mathbb{R}$ tale che $E[|g(X)|] < \infty$, il valore atteso di $g(X)$ è dato da:

$$E[g(X)] = \int_{\mathbb{R}} g(x) f_X(x) dx$$

In particolare, il valore atteso di $X$ è:

$$E[X] = \int_{\mathbb{R}} x f_X(x) dx$$

se $\int_{\mathbb{R}} |x| f_X(x) dx < \infty$.

## Esempi di Calcolo del Valore Atteso

### Esempio 1: Variabile Aleatoria Uniforme su $$

Sia $X$ una variabile aleatoria uniforme sull'intervallo $$. La sua densità di probabilità è:

$$f_X(x) = \begin{cases} 1 & \text{se } 0 \le x \le 1 \ 0 & \text{altrimenti} \end{cases}$$

**Calcolo di $E[X]$:**

$$E[X] = \int_{\mathbb{R}} x f_X(x) dx = \int_{0}^{1} x \cdot 1 dx = \left[ \frac{1}{2} x^2 \right]_{0}^{1} = \frac{1}{2} (1)^2 - \frac{1}{2} (0)^2 = \frac{1}{2}$$

Questo risultato è intuitivo: il valore medio di una variabile uniformemente distribuita tra 0 e 1 è il punto medio dell'intervallo.

**Calcolo di $E[X^2 \mathbb{1}_{{X > 1/2}}]$:**

Sia $g(x) = x^2 \mathbb{1}_{{x > 1/2}}(x)$. Allora:

$$E[g(X)] = \int_{\mathbb{R}} g(x) f_X(x) dx = \int_{\mathbb{R}} x^2 \mathbb{1}_{{x > 1/2}}(x) f_X(x) dx$$

Sostituendo la densità di $X$:

$$E[g(X)] = \int_{0}^{1} x^2 \mathbb{1}_{{x > 1/2}}(x) \cdot 1 dx$$

L'indicatrice $\mathbb{1}_{{x > 1/2}}(x)$ è 1 se $x > 1/2$ e 0 altrimenti. Quindi l'integrale diventa:

$$E[g(X)] = \int_{1/2}^{1} x^2 dx = \left[ \frac{1}{3} x^3 \right]_{1/2}^{1} = \frac{1}{3} (1)^3 - \frac{1}{3} \left(\frac{1}{2}\right)^3 = \frac{1}{3} - \frac{1}{3} \cdot \frac{1}{8} = \frac{1}{3} - \frac{1}{24} = \frac{8 - 1}{24} = \frac{7}{24}$$

### Esempio 2: Variabile Aleatoria Esponenziale (Esercizio)

Sia $X$ una variabile aleatoria esponenziale di parametro $\lambda = 3$. La sua densità di probabilità è:

$$f_X(x) = \begin{cases} 3 e^{-3x} & \text{se } x \ge 0 \ 0 & \text{se } x < 0 \end{cases}$$

**Esercizio:** Calcolare il tempo medio di vita, ovvero $E[X]$:

$$E[X] = \int_{\mathbb{R}} x f_X(x) dx = \int_{0}^{+\infty} x \cdot 3 e^{-3x} dx$$

Questo integrale può essere risolto utilizzando l'integrazione per parti.

## Conseguenza Importante: Variabili Aleatorie con la Stessa Legge

**Corollario:** Se due variabili aleatorie $X$ e $Y$ hanno la stessa legge (ovvero $P_X = P_Y$), allora, se i rispettivi valori attesi esistono, si ha $E[X] = E[Y]$ e più in generale, per una funzione misurabile $g$, $E[g(X)] = E[g(Y)]$. Questo è vero anche se $X$ e $Y$ sono definite su spazi di probabilità diversi. Il valore atteso dipende unicamente dalla legge (distribuzione) della variabile aleatoria e non dalla struttura dello spazio di probabilità sottostante.

## Caso Multidimensionale Assolutamente Continuo (Chiarimento)

Un vettore aleatorio $X = (X_1, ..., X_D)$ è assolutamente continuo se esiste una funzione di densità congiunta $f_X(x_1, ..., x_D) \ge 0$ tale che per ogni insieme boreliano $A \subseteq \mathbb{R}^D$:

$$P(X \in A) = \int_{A} f_X(x_1, ..., x_D) dx_1 ... dx_D$$

In questo caso, per una funzione misurabile $g: \mathbb{R}^D \rightarrow \mathbb{R}$ tale che $E[|g(X)|] < \infty$, il valore atteso di $g(X)$ è dato dall'integrale multiplo:

$$E[g(X)] = \int_{\mathbb{R}^D} g(x_1, ..., x_D) f_X(x_1, ..., x_D) dx_1 ... dx_D$$

Questo estende il concetto del caso unidimensionale a dimensioni superiori.

## Conclusione

Il teorema di cambiamento di variabili è uno strumento fondamentale per il calcolo del valore atteso di funzioni di variabili aleatorie. Permette di passare da un integrale astratto sullo spazio $\Omega$ a un integrale sullo spazio dei valori della variabile aleatoria (come $\mathbb{R}$ o $\mathbb{R}^D$) rispetto alla legge indotta. Nei casi particolari di variabili discrete e assolutamente continue, questo si traduce in somme e integrali (singoli o multipli) che possono essere calcolati utilizzando le rispettive funzioni di massa o densità di probabilità. Gli esempi illustrano come applicare queste formule in pratica.
#### References

[[Appunti Prob-lez13.pdf]]

