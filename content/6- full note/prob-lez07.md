2025-03-02 21:55

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[sbobine]]   [[probabilità]]

### Chiarimenti Preliminari

Il professore inizia rispondendo ad alcune domande degli studenti per chiarire concetti non del tutto chiari dalla lezione precedente.

#### Esempio di eventi Bernoulliani

**Costruzione di uno spazio con eventi Bernoulliani**: L'esempio riguarda la costruzione di uno spazio in cui ci sono eventi bernoulliani. Lo spazio $\Omega$ è definito come le successioni di 0 e 1 di lunghezza $n$. I $p_i$ sono numeri compresi tra 0 e 1, con $i$ che va da 1 a $n$. Non è necessario che la loro somma faccia 1.

**Definizione della misura di probabilità**: L'esercizio consiste nel definire una misura di probabilità $P$ su $\Omega$. Dato un $\omega \in \Omega$ del tipo $\omega = (\omega_1, \omega_2, ..., \omega_n)$, la probabilità di questo evento particolare (il singoletto) è definita come: $$P(\set{\omega})= \prod_{i=1}^{n} p_i^{\omega_i} (1 - p_i)^{1 - \omega_i}$$ L'obiettivo è dimostrare che tutti questi numeri sono maggiori o uguali a 0 e che la loro somma su tutti gli $\omega$ è uguale a 1.

**Esempio con n=2**: Per $n = 2$, bisogna verificare che: $$\sum_{\omega \in \set{0,1}^2} \prod_{i=1}^{2} p_i^{\omega_i} (1 - p_i)^{1 - \omega_i} = 1$$ Questo significa controllare se la somma su $\omega_1$ e $\omega_2$ appartenenti a ${0, 1}$ di $p_1^{\omega_1} (1 - p_1)^{1 - \omega_1} \cdot p_2^{\omega_2} (1 - p_2)^{1 - \omega_2}$ fa 1. Questa somma può essere scritta come il prodotto di somme: $$\sum_{\omega_1 \in \set{0,1}} p_1^{\omega_1} (1 - p_1)^{1 - \omega_1} \cdot \sum_{\omega_2 \in \set{0,1}} p_2^{\omega_2} (1 - p_2)^{1 - \omega_2}$$ Ogni blocco della somma fa 1, quindi il risultato è $1 \cdot 1 = 1$.
![[Pasted image 20250302220345.png|500]]

**Attenzione alle notazioni**: Non confondere $P_i$ con $P(\omega_i)$. In questo caso, $P_i$ si riferisce a un parametro per definire la probabilità, non alla probabilità di $\omega$ stesso. In un teorema precedente, quando si aveva uno spazio numerabile, si assegnavano direttamente le probabilità $P_i$ agli elementi $\omega_i$.
![[Pasted image 20250302220551.png|500]]

### Funzioni Misurabili

Il professore spiega che la misurabilità è una proprietà che dipende non solo dalla funzione ma anche dalle sigma algebre sugli spazi di partenza e di arrivo.
![[Pasted image 20250302221422.png|400]]

**Definizione**: Una funzione $\xi: \Omega \rightarrow X$ è misurabile rispetto alle sigma algebre $\mathcal{F}$ su $\Omega$ e $\xi$ su $X$ se per ogni $A \in \xi$, la controimmagine $X^{-1}(A)$ appartiene a $\mathcal{F}$.

**Esempio concreto**: Consideriamo uno spazio di partenza $\Omega = \set{1, 2, 3}$ e uno spazio di arrivo $X = \set{1, 2, 3}$. Definiamo una funzione $f(\omega) = \omega$, cioè $f(1) = 1$, $f(2) = 2$, $f(3) = 3$.

![[Pasted image 20250302221653.png|329]]

- Se $\mathcal{F} = \mathcal{P}(\Omega)$ (l'algebra delle parti di $\Omega$) e $\mathcal{X} = \mathcal{P}(X)$, allora $f$ è misurabile.
    
- Se $\tilde{\mathcal{F}} = \sigma({1, 2})$ (la sigma algebra generata dall'insieme ${1, 2}$) e $\mathcal{X} = \mathcal{P}(X)$, allora $\xi$ non è $\tilde{\mathcal{F}}/\mathcal{X}$ misurabile.
    
    - La sigma algebra $\sigma({1, 2})$ è composta da $\set{\emptyset, {1, 2}, {3}, \Omega}$.
    - Consideriamo l'insieme ${1} \in \xi$. La sua controimmagine è $f^{-1}({1}) = {1}$, che non appartiene a $\mathcal{F}$.
      ![[Pasted image 20250302222153.png|500]]

La spiegazione sulla continuità nei sources verte su due aspetti principali:

1. **Definizione di continuità**
2. **Legame tra continuità e misurabilità**

### Definizione di Continuità

La fonte presenta due definizioni di continuità e si focalizza su quella che è più utile per dimostrare la misurabilità:

- **Continuità per successioni**: Una funzione $H: \mathbb{R}^D \rightarrow \mathbb{R}$ è continua per successioni se, per ogni $x \in \mathbb{R}^D$ e per ogni successione $x_n$ in $\mathbb{R}^D$ convergente a $x$, allora $H(x_n)$ converge a $H(x)$.
- **Continuità tramite controimmagini di aperti**: Una funzione $H: \mathbb{R}^D \rightarrow \mathbb{R}$ è continua se per ogni aperto $A$ di $\mathbb{R}$, la controimmagine $H^{-1}(A)$ è un aperto in $\mathbb{R}^D$.

Il professore indica di **non usare** la definizione di continuità per successioni, ma quella tramite controimmagini di aperti, in quanto più utile ai fini della dimostrazione della misurabilità.
![[Pasted image 20250302222627.png|400]]

### Legame tra Continuità e Misurabilità

Il punto chiave è che **se una funzione è continua, allora è anche misurabile rispetto alle sigma algebre dei Boreliani**. Più precisamente, se $H: \mathbb{R}^D \rightarrow \mathbb{R}$ è continua, allora è Borel-misurabile ![[Pasted image 20250302222724.png|170]]. Questo significa che è misurabile rispetto alla sigma algebra dei Boreliani su $\mathbb{R}^D$ e alla sigma algebra dei Boreliani su $\mathbb{R}$.

#### Dimostrazione

La dimostrazione utilizza un lemma che semplifica la verifica della misurabilità. In particolare, si usa il lemma che afferma che se la sigma algebra generata da una classe $C$ è uguale alla sigma algebra di arrivo, basta verificare che la controimmagine di ogni elemento di $C$ appartiene alla sigma algebra di partenza.
![[Pasted image 20250302222855.png|400]]
I passaggi principali sono:

1. **Si sceglie $C$ come la classe degli aperti di $\mathbb{R}$**. La sigma algebra generata da $C$ è esattamente la sigma algebra dei Boreliani di $\mathbb{R}$.
2. **Si sfrutta la continuità di $H$ per dimostrare che per ogni aperto $A \in C$, la controimmagine $H^{-1}(A)$ è un aperto in $\mathbb{R}^D$**.
3. **Si conclude che $H^{-1}(A)$ appartiene ai Boreliani di $\mathbb{R}^D$**, dato che gli aperti di $\mathbb{R}^D$ sono contenuti nei Boreliani di $\mathbb{R}^D$.
4. **Per il lemma, si conclude che $H$ è misurabile**.![[Pasted image 20250302222724.png|170]]

di, è Borel-misurabile.

### Esempio: Misurabilità della somma di due variabili aleatorie

**Obiettivo**: Dimostrare che se $X_1$ e $X_2$ sono variabili aleatorie misurabili, allora anche la loro somma $X_1 + X_2$ è misurabile.
![[Pasted image 20250302223653.png|600]]
**Passaggi**:

1. **Definizione delle variabili**: Si considerano $X_1$ e $X_2$ definite su uno spazio $\Omega$ e a valori nei Boreliani di $\mathbb{R}$. Entrambe sono misurabili rispetto alle sigma algebre appropriate.
    
2. **Creazione di una funzione vettoriale**: Si crea una funzione $\xi$ che mappa $\omega \in \Omega$ in un vettore $(X_1(\omega), X_2(\omega)) \in \mathbb{R}^2$. Questa funzione è misurabile.
    
3. **Definizione della funzione somma**: Si definisce una funzione $S: \mathbb{R}^2 \rightarrow \mathbb{R}$ tale che $S(x, y) = x + y$. Questa funzione è la somma delle due componenti ed è continua.
    
4. **Composizione delle funzioni**: Si considera la composizione $S(X_1(\omega), X_2(\omega)) = X_1(\omega) + X_2(\omega)$. Questa è la somma delle due variabili aleatorie.
    
5. **Applicazione dei criteri di misurabilità**:
    
    - Le funzioni continue sono Borel-misurabili. Quindi $S$ è misurabile.
    - Se si hanno due variabili aleatorie misurabili, la funzione che le impacchetta in un vettore è congiuntamente misurabile.
    - La composizione di funzioni misurabili è misurabile.
6. **Conclusione**: Mettendo insieme questi tre ingredienti, si conclude che la somma $X_1 + X_2$ è misurabile.
    

In sintesi, l'esempio mostra come, sfruttando la continuità della somma e la misurabilità delle variabili aleatorie componenti, si possa dimostrare che la somma di due variabili aleatorie è ancora una variabile aleatoria misurabile.

#### Utilità

Questo risultato è utile perché permette di stabilire facilmente la misurabilità di molte funzioni, semplicemente verificandone la continuità. Inoltre, la composizione di funzioni misurabili è misurabile. Perciò, combinando funzioni continue e variabili aleatorie misurabili, si possono costruire nuove variabili aleatorie misurabili.

Ecco la spiegazione del professore riguardo alle flashcard, integrata con i dettagli matematici, gli esempi e gli esercizi, formattata per chiarezza e leggibilità:

### Funzione indicatrice

Consideriamo uno spazio $\Omega, \mathcal{F}$ , considero $A \in \mathcal{F}$ e introduciamo la seguente funzione:
![[Pasted image 20250302224337.png|250]]
- Ad ogni $\omega \in \Omega$ associamo:
    - 0 se $\omega \notin A$
    - 1 se $\omega \in A$, dove $A \in \mathcal{F}$

Questa funzione è chiamata **indicatrice** e si indica con diverse notazioni come $I$, $1_A$ o $I_A$. In termini probabilistici, questa funzione indica se un evento si è verificato (1) o meno (0).

#### Misurabilità della funzione indicatrice

La funzione indicatrice assume valori in $[0, 1]$, quindi possiamo considerarla a valori reali. 
![[Pasted image 20250302224419.png|239]]Per verificare se è misurabile, dobbiamo analizzare la controimmagine di un evento che sta in $\mathbb{R}$.

Consideriamo $B \subseteq \mathbb{R}$. Ci sono quattro casi possibili per la controimmagine di $B$:

- Se $B$ contiene 1 ma non 0, allora $I_A^{-1}(B) = A$
- Se $B$ contiene 0 ma non 1, allora $I_A^{-1}(B) = A^c$ (complementare di A)
- Se $B$ non contiene né 0 né 1, allora $I_A^{-1}(B) = \emptyset$ (insieme vuoto)
- Se $B$ contiene sia 0 che 1, allora $I_A^{-1}(B) = \Omega$

Poiché $A \in \mathcal{F}$, anche $A^c \in \mathcal{F}$, e $\emptyset, \Omega \in \mathcal{F}$ (perché $\mathcal{F}$ è una $\sigma$-algebra). Quindi, la controimmagine di qualsiasi insieme $B$ è un evento che sta in $\mathcal{F}$, dimostrando che la funzione indicatrice è misurabile.

La più piccola $\sigma$-algebra su $\Omega$ per cui questa funzione è misurabile è $\sigma(A)$, la $\sigma$-algebra generata da $A$.

### Funzioni semplici

Prendiamo $A_1, \dots, A_n \in \mathcal{F}$ e $c_1, \dots, c_M \in \mathbb{R}$ (numeri fissi). La funzione: $$\omega \rightarrow \sum_{i=1}^M c_i I_{A_i}(\omega)$$ è misurabile. Se i $c_i$ sono tutti uguali a 1, discende dal fatto che la somma di funzioni misurabili è misurabile. In generale, $c_i \cdot I_{A_i}$ è misurabile perché il prodotto di una costante per una funzione misurabile è misurabile (funzione continua di funzioni misurabili è misurabile), e quindi la somma di funzioni misurabili è misurabile.

Queste funzioni si chiamano **funzioni semplici** e assumono solo un numero finito di valori su $\Omega$, anche se $\Omega$ non è numerabile.

### Limite di funzioni misurabili
![[Pasted image 20250302225152.png|500]]
Siano $X_n : \Omega \to \mathbb{R}$ funzioni misurabili. Se esiste il limite: $$X(\omega) = \lim_{n \to \infty} X_n(\omega) \quad \forall \omega \in \Omega$$ allora $X$ è misurabile rispetto alla $\sigma$-algebra in gioco, $\mathcal{F}$. In altre parole, se una funzione può essere approssimata puntualmente da una successione di funzioni misurabili, allora questa funzione è misurabile.

Se il limite non esiste, si possono usare il limite superiore e il limite inferiore, ma è necessario conoscerne la definizione.


___


### Proprietà delle Funzioni e Misurabilità

#### Introduzione alle Sigma Algebre e Spazi di Misura

Il professore inizia sottolineando l'importanza di **separare le sigma algebre dagli insiemi** e di come si applichino le sigma algebre per parlare di misurabilità. Introduce la notazione standard:

- Ω (Omega): spazio di partenza
- $\mathcal{X}$: spazio di arrivo
- $\mathcal{F}$ (F): sigma algebra su Omega
- $\xi$ (Xi): sigma algebra su X
- X: funzione da Ω a X

Viene ribadito che queste sono convenzioni di notazione e che la lettera $\xi$ è usata per sottolineare che tutto dipende dalla funzione ξ (xi), da omega, da $\mathcal{X}$ e dalle sigma algebre.
![[Pasted image 20250304080104.png]]
#### Misura di Probabilità

Successivamente, viene introdotta una misura di probabilità P sullo spazio Ω:

- (Ω, ℱ, P): spazio di probabilità

Questa notazione indica che $\xi$ è una funzione definita da Ω in X**, con ℱ su Ω, 𝒳 su $\chi$ e P su ℱ.

#### Variabili Aleatorie

Si introduce la notazione con la lettera X per indicare una funzione misurabile quando lo spazio di arrivo è ℝ.

- **Variabili aleatorie**: funzioni misurabili con spazio di arrivo in ℝ
- **Vettori aleatori**: funzioni misurabili con spazio di arrivo in ℝ^D, con i boreliani di ℝ^D
  ![[Pasted image 20250303150157.png]]

La differenza fondamentale è che, parlando di funzioni misurabili, si hanno due spazi, una funzione e due sigma algebre. Invece, per le variabili aleatorie, si hanno due spazi, due sigma algebre e una misura di probabilità sullo spazio di partenza. Nel caso di variabili aleatorie a valori reali o vettori aleatori, lo spazio di arrivo è ℝ o ℝ^D, con le sigma algebre d'arrivo che sono i boreliani di ℝ o ℝ^D, e una misura di probabilità.

#### Esempio del Dado

Viene ripreso l'esempio del dado per illustrare i concetti:

- Ω = {1, 2, 3, 4, 5, 6}
- X = {0, 1} (0 per dispari, 1 per pari) 
- ℱ = algebra delle parti di Ω
- P(ω) = 1/6 per ogni ω ∈ Ω
- ![[Pasted image 20250304080308.png]]

La variabile aleatoria X vale 0 se ω ∈ {1, 3, 5} e 1 se ω ∈ {2, 4, 6}.
![[Pasted image 20250304080237.png]]
La probabilità che esca pari è P(X = 1) = 1/2, e la probabilità che esca dispari è P(X = 0) = 1/2.
![[Pasted image 20250304080517.png]]
Questo esempio mostra come si possano dare valutazioni di probabilità a qualcosa che sta nello spazio di arrivo.

### Legge Immagine (o Distribuzione Indotta)

**Definizione di Legge Immagine** Dato uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ e una variabile aleatoria $X : (\Omega, \mathcal{F}) \to ({\mathbb{R}}^D, \mathcal{B}({\mathbb{R}}^D)$,![[Pasted image 20250304080731.png]]
la legge immagine (o distribuzione immagine) di $X$, denotata come $P_X$,
 è una misura di probabilità definita su $({\mathbb{R}}^D, \mathcal{B}({\mathbb{R}}^D)$ tale che $P_X(A) = P(X^{-1}(A))$ per ogni $A \in \mathcal{B}({\mathbb{R}}^D)'$.
 
 In altre parole, la probabilità che la variabile aleatoria $X$ assuma un valore in un insieme $A$ è uguale alla probabilità che l'evento $X^{-1}(A)$ si verifichi nello spazio di probabilità originale.
![[Pasted image 20250304134911.png]]
![[Pasted image 20250304135233.png]]
La notazione per la legge immagine è menzionata nella fonte "lezione":

- Data una variabile aleatoria $X$, la sua legge immagine è denotata come $P_X$.
- $P_X(A) = P({\omega \in \Omega : X(\omega) \in A})$.
- Equivalentemente, si può scrivere $P(X \in A)$. Questo significa che **la probabilità che $X$ appartenga all'insieme $A$ è la legge immagine di $X$ applicata all'insieme $A$**.

- **Formalizzazione della Legge Immagine:** La legge immagine $P_X$ è definita come $P_X(A) = P({\omega \in \Omega : X(\omega) \in A})$ per ogni $A \in \mathcal{F}'$.
- **Somma su insiemi disgiunti:** Se $A = \bigcup_{n=1}^{\infty} A_n$, dove gli $A_n$ sono insiemi disgiunti, allora $P_X(A) = \sum_{n=1}^{\infty} P({\omega : X(\omega) \in A_n})$.

#### Misura di Probabilità

1. **Non-negatività:** $P_X(A) \geq 0$ per ogni $A$.
2. **Probabilità dello spazio totale:** $P_X(\mathbb{R}^D) = 1$.
3. **Additività completa:** Per ogni successione di insiemi $A_n$ incompatibili (cioè disgiunti), $P_X(\bigcup_{n=1}^{\infty} A_n) = \sum_{n=1}^{\infty} P_X(A_n)$.

Ecco i passaggi della dimostrazione forniti in "lezione":

1. **Positività**: $P_X(A)$ è una probabilità, quindi per definizione è maggiore o uguale a zero.
2. **Probabilità dello spazio totale**: $P_X(\mathbb{R}^D) = 1$ perché $X$ assume valori in $\mathbb{R}^D$. Ciò significa che la probabilità che $X$ assuma un valore all'interno dello spazio totale è pari a 1.
3. **Additività completa**:
    - $P_X(\bigcup_{n=1}^{\infty} A_n) = P({\omega : X(\omega) \in \bigcup_{n=1}^{\infty} A_n})$
    - $= P(\bigcup_{n=1}^{\infty} \set{\omega : X(\omega) \in A_n})$
    - $= \sum_{n=1}^{\infty} P(\set{\omega : X(\omega) \in A_n})$ (perché gli $A_n$ sono disgiunti)
    - $= \sum_{n=1}^{\infty} P_X(A_n)$

Quindi, $P_X$ soddisfa tutti gli assiomi di una misura di probabilità.

#### Passaggi della Dimostrazione

1. **Positività**: P_X(A) è una probabilità, quindi è maggiore o uguale a zero.
2. **Probabilità dello spazio totale**: P_X(ℝ^D) = 1 perché X assume valori in ℝ^D.
3. **Additività completa**:
    - $P_X(\bigcup_{n=1}^{\infty} A_n) = P({\omega : X(\omega) \in \bigcup_{n=1}^{\infty} A_n})$
    - $= P(\bigcup_{n=1}^{\infty} {\omega : X(\omega) \in A_n})$
    - $= \sum_{n=1}^{\infty} P({\omega : X(\omega) \in A_n})$ (perché gli A_n sono disgiunti)
    - $= \sum_{n=1}^{\infty} P_X(A_n)$

**Importanza Concettuale**

si sottolinea **l'importanza fondamentale della legge immagine nella costruzione di modelli probabilistici**. Spesso, nella pratica, si ha un modello probabilistico in mente, ma non si ha accesso diretto allo spazio di partenza $\Omega$. Invece, si osserva l'esperimento nello spazio di arrivo, cioè nello spazio dei valori che la variabile aleatoria può assumere.

La legge immagine consente di **trasportare la probabilità dallo spazio originale $\Omega$ allo spazio dei valori della variabile aleatoria**, rendendo possibile lavorare direttamente con la distribuzione dei risultati osservabili.
### Funzioni di Ripartizione

aleatoria reale**. In questo caso, la variabile aleatoria $X$ è una funzione misurabile da uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ all'insieme dei numeri reali $(\mathbb{R}, \mathcal{B}(\mathbb{R}),P_x$), dove $P_x$ è la legge immagine su $\mathcal{B}(\mathbb{R})$ è la $\sigma$-algebra dei Boreliani di $\mathbb{R}$.
#### Definizione formale

Il professore introduce la **funzione di ripartizione**, denotandola tipicamente con la lettera grande $F$, come una funzione da $\mathbb{R}$ a valori in $[0,1]$ . Formalmente:

$F: \mathbb{R} \rightarrow [0,1]$

Una funzione di ripartizione deve soddisfare le seguenti proprietà:

1. **Monotona non decrescente:** $F$ è monotona non decrescente. Questo significa che se $x_1 < x_2$, allora $F(x_1) \leq F(x_2)$.
    
2. **Limiti agli estremi:**
    
    - $\lim_{x \to -\infty} F(x) = 0$
    - $\lim_{x \to +\infty} F(x) = 1$
3. **Continuità da destra:** $F$ è continua da destra. Questo significa che per ogni $x_0 \in \mathbb{R}$:
    
    $\lim_{x \to x_0^+} F(x) = F(x_0)$
    
    ovvero, per ogni $x_0 \in \mathbb{R}$, per ogni successione $x_n \to x_0$ con $x_n > x_0$, si ha $\lim_{n \to \infty} F(x_n) = F(x_0)$. Il professore sottolinea che, pur potendo avere dei punti di discontinuità, la funzione è continua da destra in ogni punto.

#### Legame tra Misure di Probabilità e Funzioni di Ripartizione

Il professore introduce un teorema fondamentale che collega le misure di probabilità sui Boreliani di $\mathbb{R}$ e le funzioni di ripartizione.

- **Teorema:**
    - Data una misura di probabilità $P$ sui Boreliani di $\mathbb{R}$, è possibile definire una funzione $F_P(x)$ come:
        
        $F_P(x) = P((-\infty, x])$
        
        Questa funzione $F_P(x)$ è una funzione di ripartizione nel senso definito in precedenza.
        
    - Viceversa, per ogni  funzione di ripartizione $F(x)$, esiste una **unica** misura di probabilità $P$ sui Boreliani di $\mathbb{R}$ tale che:
        
        $P((-\infty, x]) = F(x)$
        

Questo teorema stabilisce una corrispondenza biunivoca tra le misure di probabilità sui Boreliani di $\mathbb{R}$ e le funzioni di ripartizione. In altre parole, ogni funzione di ripartizione definisce univocamente una misura di probabilità e viceversa.

#### Esempi di Funzioni di Ripartizione

Il professore presenta tre esempi specifici di funzioni di ripartizione per illustrare le proprietà sopra descritte:

1. **Funzione lineare a tratti:**
    ![[Pasted image 20250304142001.png]]
    Una funzione definita come 0 fino a un certo punto, poi sale linearmente come una retta, e infine vale 1. Questa funzione è continua, quindi anche continua da destra, ed è monotona.
    
2. **Funzione esponenziale:**
    ![[Pasted image 20250304142010.png]]
    $F(x) = \begin{cases} 0, & \text{se } x < 0 \\ 1 - e^{-\lambda x}, & \text{se } x \geq 0 \end{cases}$
    
    dove $\lambda > 0$. Il professore osserva che questa funzione è continua (e quindi continua da destra) e i limiti agli estremi sono rispettati. Per $x \rightarrow -\infty$ si ha che $F(x) \rightarrow 0$. Per $x \rightarrow +\infty$ si ha che $F(x) \rightarrow 1$.
    
3. **Funzione a gradini:**
    ![[Pasted image 20250304142020.png]]
    $F(x) = \begin{cases} 0, & \text{se } x < 0 \\ 1/2, & \text{se } 0 \leq x < 2 \ 1, & \text{se } x \geq 2 \end{cases}$ 
    Questa funzione è un esempio di funzione di ripartizione **discontinua**. È costante a tratti e ha dei salti in $x=0$ e $x=2$. Tuttavia, è continua da destra in ogni punto.

#### Esercizio

Calcolare la probabilità di intervalli dati gli esempi di funzioni di ripartizione.
## prob-lez07

#### References
[[Appunti Prob-Lez07.pdf]]


