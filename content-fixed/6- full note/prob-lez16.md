---
title: prob lez16
description: Appunto automatico
---

2025-04-14 10:36

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine]]  [[probabilità]]

## prob-lez16

# **Misure Prodotto e Teorema di Tonelli**

## **Spazio Misurabile Prodotto**

Dati due spazi di misura $(E_1, \mathcal{M}_1, \mu_1)$ e $(E_2, \mathcal{M}_2, \mu_2)$, si definisce lo **spazio misurabile prodotto** come il prodotto cartesiano $E = E_1 \times E_2$ dotato della **$\sigma$-algebra prodotto**.

La $\sigma$-algebra prodotto, indicata con $\mathcal{M}_1 \otimes \mathcal{M}_2$, è la più piccola $\sigma$-algebra costituita dai **rettangoli misurabili**, ovvero insiemi della forma $N_1 \times N_2$ dove $N_1 \in \mathcal{M}_1$ e $N_2 \in \mathcal{M}_2$.

## **Misura Prodotto**

Se le misure $\mu_1$ e $\mu_2$ sono **$\sigma$-finite**, allora esiste un'unica misura $\mu$ sullo spazio misurabile prodotto $(E_1 \times E_2, \mathcal{M}_1 \otimes \mathcal{M}_2)$, chiamata **misura prodotto** e indicata con $\mu_1 \times \mu_2$ o semplicemente $\mu$, tale che per ogni rettangolo misurabile $N_1 \times N_2$ si abbia:

$\qquad \mu(N_1 \times N_2) = \mu_1(N_1) \mu_2(N_2)$
![[Pasted image 20250414104323.png]]
## **Teorema di Tonelli**

**Enunciato:** Sia $h: E = E_1 \times E_2 \rightarrow [0, +\infty]$ una funzione **misurabile** rispetto alla $\sigma$-algebra prodotto $\mathcal{M}_1 \otimes \mathcal{M}_2$. Allora, l'**integrale doppio** $\int_{E_1 \times E_2} h(e_1, e_2) d(\mu_1 \times \mu_2)(e_1, e_2)$ è sempre ben definito (potendo essere anche $+\infty$). Inoltre, valgono le seguenti uguaglianze:

$\qquad \int_{E_1 \times E_2} h(e_1, e_2) d(\mu_1 \times \mu_2)(e_1, e_2) = \int_{E_1} \left( \int_{E_2} h(e_1, e_2) d\mu_2(e_2) \right) d\mu_1(e_1)$

$\qquad \int_{E_1 \times E_2} h(e_1, e_2) d(\mu_1 \times \mu_2)(e_1, e_2) = \int_{E_2} \left( \int_{E_1} h(e_1, e_2) d\mu_1(e_1) \right) d\mu_2(e_2)$

**Spiegazione:** Il teorema di Tonelli afferma che per **funzioni positive misurabili**, l'ordine di integrazione non influisce sul risultato dell'integrale. Se uno dei due integrali iterati è finito, allora anche l'altro lo è e coincidono con l'integrale sulla misura prodotto. Se uno dei due è $+\infty$, anche gli altri sono $+\infty$.

**Osservazione:** Come sottolineato dal professore, l'integrale interno, ad esempio $\int_{E_2} h(e_1, e_2) d\mu_2(e_2)$, risulta essere una funzione di $e_1$, e questa funzione è misurabile.
![[Pasted image 20250414163603.png]]
# **Teorema di Fubini**

## **Teorema di Fubini**

**Enunciato:** Sia $h: E = E_1 \times E_2 \rightarrow \mathbb{R}$ (o $\mathbb{C}$) una funzione **misurabile** rispetto alla $\sigma$-algebra prodotto $\mathcal{M}_1 \otimes \mathcal{M}_2$. Se l'integrale del **modulo** di $h$ sulla misura prodotto è finito, ovvero:

$\qquad \int_{E_1 \times E_2} |h(e_1, e_2)| d(\mu_1 \times \mu_2)(e_1, e_2) < +\infty$

allora valgono le seguenti affermazioni:

1. Per $\mu_1$-quasi ogni $e_1 \in E_1$, la funzione $h(e_1, \cdot): E_2 \rightarrow \mathbb{R}$ (o $\mathbb{C}$) è $\mu_2$-integrabile.
2. Per $\mu_2$-quasi ogni $e_2 \in E_2$, la funzione $h(\cdot, e_2): E_1 \rightarrow \mathbb{R}$ (o $\mathbb{C}$) è $\mu_1$-integrabile.
3. Le funzioni definite da: $\qquad I_1(e_1) = \int_{E_2} h(e_1, e_2) d\mu_2(e_2)$ $\qquad I_2(e_2) = \int_{E_1} h(e_1, e_2) d\mu_1(e_1)$ sono rispettivamente $\mu_1$-integrabile e $\mu_2$-integrabile.
4. Valgono le seguenti uguaglianze: $\qquad \int_{E_1 \times E_2} h(e_1, e_2) d(\mu_1 \times \mu_2)(e_1, e_2) = \int_{E_1} \left( \int_{E_2} h(e_1, e_2) d\mu_2(e_2) \right) d\mu_1(e_1)$ $\qquad \int_{E_1 \times E_2} h(e_1, e_2) d(\mu_1 \times \mu_2)(e_1, e_2) = \int_{E_2} \left( \int_{E_1} h(e_1, e_2) d\mu_1(e_1) \right) d\mu_2(e_2)$
![[Pasted image 20250414163824.png]]
**Spiegazione:** Il teorema di Fubini estende la possibilità di scambiare l'ordine di integrazione a funzioni che non sono necessariamente positive, a condizione che l'integrale del loro valore assoluto sia finito. Questa condizione garantisce che le funzioni ottenute integrando rispetto a una variabile siano integrabili rispetto all'altra.

**Interpretazione dell'Uguaglianza:** Come spiegato dal professore, l'uguaglianza degli integrali iterati va interpretata nel senso che la funzione interna potrebbe non essere ben definita su un insieme di misura zero (rispetto alla misura esterna). Tuttavia, questo non influisce sul valore dell'integrale esterno. In pratica, si può definire la funzione interna arbitrariamente (ad esempio, ponendola uguale a zero) su tale insieme di misura nulla senza cambiare il risultato dell'integrale finale.

## **Differenze tra Tonelli e Fubini**

La differenza fondamentale tra i due teoremi risiede nelle ipotesi sulla funzione $h$:

- **Tonelli:** Si applica a funzioni **positive** e misurabili. L'integrale doppio è sempre ben definito (anche se infinito), e l'ordine di integrazione può essere scambiato senza la necessità di verificare la finitezza dell'integrale.
- **Fubini:** Si applica a funzioni **non necessariamente positive**, ma **misurabili** e tali che l'integrale del loro **modulo** sia finito. Questa condizione è cruciale per poter scambiare l'ordine di integrazione e garantire che gli integrali iterati siano ben definiti e finiti.

## **Applicazione di Tonelli e Fubini**

Per applicare il teorema di Fubini a una funzione $h$ non positiva, la strategia tipica è la seguente:

1. Considerare il **modulo** della funzione, $|h|$.
2. Applicare il teorema di **Tonelli** alla funzione $|h|$, poiché è positiva. Si calcola uno degli integrali iterati di $|h|$.
3. Se l'integrale di $|h|$ (e quindi gli integrali iterati di $|h|$) è **finito**, allora si può applicare il teorema di **Fubini** alla funzione $h$, e l'ordine di integrazione può essere scambiato per l'integrale di $h$ stesso.

# **Applicazione a Misure di Lebesgue e Integrale Doppio**

## **Caso delle Misure di Lebesgue su $\mathbb{R}^{d_1} \times \mathbb{R}^{d_2}$**

Un caso fondamentale in cui si applicano i teoremi di Fubini e Tonelli è quando gli spazi di misura sono $\mathbb{R}^{d_1}$ e $\mathbb{R}^{d_2}$ dotati della **misura di Lebesgue** e della $\sigma$-algebra dei **Boreliani**. In questo caso, la $\sigma$-algebra prodotto coincide con la $\sigma$-algebra dei Boreliani di $\mathbb{R}^{d_1 + d_2}$.

Se abbiamo una funzione $h(x_1, x_2)$ con $x_1 \in \mathbb{R}^{d_1}$ e $x_2 \in \mathbb{R}^{d_2}$, l'integrale rispetto alla misura prodotto (misura di Lebesgue su $\mathbb{R}^{d_1 + d_2}$) può essere scritto come:

$\qquad \int_{\mathbb{R}^{d_1 + d_2}} h(x_1, x_2) dx_1 dx_2$

Se l'integrale di $|h|$ è finito, per il teorema di Fubini possiamo scambiare l'ordine di integrazione:

$\qquad \int_{\mathbb{R}^{d_1 + d_2}} h(x_1, x_2) dx_1 dx_2 = \int_{\mathbb{R}^{d_1}} \left( \int_{\mathbb{R}^{d_2}} h(x_1, x_2) dx_2 \right) dx_1 = \int_{\mathbb{R}^{d_2}} \left( \int_{\mathbb{R}^{d_1}} h(x_1, x_2) dx_1 \right) dx_2$

![[Pasted image 20250414164310.png]]
## **Collegamento con l'Integrale Doppio in Analisi**

Il professore fa notare che questo formalismo generalizza il concetto di **integrale doppio** visto in corsi di analisi su insiemi "normali" o plurirettangoli e per funzioni "integrabili" nel senso usuale. I teoremi di Fubini e Tonelli permettono di estendere questi risultati a **insiemi misurabili Boreliani** qualsiasi e a funzioni che sono **Lebesgue-integrabili**, una classe più ampia di funzioni rispetto a quelle Riemann-integrabili.

In pratica, per calcolare un integrale doppio, si procede come si è abituati: si integra prima rispetto a una variabile (mantenendo l'altra fissa) e poi si integra il risultato rispetto all'altra variabile. I teoremi di Fubini e Tonelli forniscono le condizioni sotto le quali questo procedimento è valido e il risultato è indipendente dall'ordine di integrazione.

# **Marginali di Legge Assolutamente Continue**

## **Caso Discreto (Richiamo)**

Il professore ricorda che nel caso di **vettori aleatori discreti**, se si ha la distribuzione congiunta (ad esempio, una tabella di contingenza), la **distribuzione marginale** di una singola variabile (o di un sottovettore) si ottiene **sommando** (o "saturando") sulla(e) variabile(i) non di interesse.
![[Pasted image 20250414164455.png]]
## **Caso Assolutamente Continuo (d=2)**

Consideriamo un **vettore aleatorio assolutamente continuo** $(X_1, X_2)$ con **funzione di densità congiunta** $f(x_1, x_2)$. Vogliamo trovare la **funzione di densità marginale** di $X_1$, che denotiamo con $f_{X_1}(x_1)$.

**Calcolo della Funzione di Ripartizione Marginale:** La funzione di ripartizione marginale di $X_1$, $F_{X_1}(x_1)$, è data da:

$\qquad F_{X_1}(x_1) = P(X_1 \leq x_1) = P(X_1 \leq x_1, X_2 \in \mathbb{R})$

Questa probabilità può essere espressa come l'integrale della densità congiunta sull'insieme ${(t_1, t_2) \in \mathbb{R}^2 : t_1 \leq x_1, t_2 \in \mathbb{R}}$:

$\qquad F_{X_1}(x_1) = \int_{-\infty}^{x_1} \int_{-\infty}^{+\infty} f(t_1, t_2) dt_2 dt_1$
![[Pasted image 20250414164646.png]]
**Derivazione della Densità Marginale:** Applicando il teorema di **Tonelli** (poiché la densità congiunta è non negativa), possiamo scambiare l'ordine di integrazione:

$\qquad F_{X_1}(x_1) = \int_{-\infty}^{x_1} \left( \int_{-\infty}^{+\infty} f(t_1, t_2) dt_2 \right) dt_1$

Definiamo la funzione $f_{X_1}(t_1) = \int_{-\infty}^{+\infty} f(t_1, t_2) dt_2$. Allora possiamo scrivere:

$\qquad F_{X_1}(x_1) = \int_{-\infty}^{x_1} f_{X_1}(t_1) dt_1$
![[Pasted image 20250414164831.png]]
Per la definizione di variabile assolutamente continua, questo significa che $X_1$ è assolutamente continua e la sua **funzione di densità marginale** è data da:

$\qquad f_{X_1}(x_1) = \int_{-\infty}^{+\infty} f(x_1, x_2) dx_2$
![[Pasted image 20250414164910.png]]
**Spiegazione del Procedimento Logico:** Il professore sottolinea che non si assume a priori che $X_1$ sia assolutamente continua. Il procedimento consiste nel calcolare la funzione di ripartizione marginale e mostrare che essa può essere espressa come l'integrale di una funzione (la densità marginale). Questo dimostra che $X_1$ è assolutamente continua e identifica la sua densità.

## **Caso Generale (d > 2)**

Il risultato si generalizza a vettori aleatori in $d$ dimensioni. Se $X = (X_1, ..., X_d)$ è assolutamente continuo con densità $f(x_1, ..., x_d)$, allora ogni **sottovettore** è assolutamente continuo.

In particolare, la **densità marginale** di un sottovettore $(X_{i_1}, ..., X_{i_k})$ (dove $1 \leq i_1 < ... < i_k \leq d$) si ottiene **integrando** la densità congiunta rispetto a tutte le altre variabili (cioè le variabili con indici $j \in {1, ..., d} \setminus {i_1, ..., i_k}$).

Matematicamente, la densità marginale $f_{X_{i_1}, ..., X_{i_k}}(x_{i_1}, ..., x_{i_k})$ è data da:

$\qquad f_{X_{i_1}, ..., X_{i_k}}(x_{i_1}, ..., x_{i_k}) = \int_{\mathbb{R}^{d-k}} f(x_1, ..., x_d) \prod_{j \notin {i_1, ..., i_k}} dx_j$
![[Pasted image 20250414170805.png]]
**Esempio (d=3):** Se $d=3$ e vogliamo la densità marginale di $(X_1, X_3)$, cioè $f_{X_1, X_3}(x_1, x_3)$, dobbiamo integrare la densità congiunta $f(x_1, x_2, x_3)$ rispetto alla variabile $x_2$:

$\qquad f_{X_1, X_3}(x_1, x_3) = \int_{-\infty}^{+\infty} f(x_1, x_2, x_3) dx_2$
![[Pasted image 20250414170814.png]]
___

## Spiegazione Sulla Assoluta Continuità, Marginali e Indipendenza

### Assoluta Continuità di Vettori Aleatori e Marginali

Il professore introduce il concetto di **assoluta continuità per vettori aleatori multidimensionali**.

- **Definizione:** Un vettore aleatorio è **assolutamente continuo** rispetto alla misura di Lebesgue se la sua probabilità può essere espressa come l'integrale di una funzione di densità.
    
- **Proprietà Fondamentale:** Se un vettore aleatorio $(X_1, X_2, ..., X_d)$ è assolutamente continuo, allora **tutti i suoi sottovettori (incluse le marginali unidimensionali)** sono anch'essi assolutamente continui. Questo significa che se il vettore "più grande" è assolutamente continuo, possiamo "sfilare" qualsiasi sottovettore, e questo manterrà la proprietà di essere assolutamente continuo.
    
- **Esempio:** Se abbiamo un vettore $(X_1, X_2, X_3)$ assolutamente continuo, allora $X_1$, $X_2$, $X_3$, $(X_1, X_2)$, $(X_1, X_3)$, e $(X_2, X_3)$ sono tutti assolutamente continui.
    

### Calcolo delle Marginali nel Caso Assolutamente Continuo

Il calcolo delle densità marginali da una densità congiunta si effettua tramite **integrazione**, analogamente a come si fa con le somme nel caso discreto. Questa operazione è una conseguenza del teorema di Fubini-Tonelli.

- **Marginale Unidimensionale:** Per ottenere la densità marginale di una variabile $X_i$ da una densità congiunta $f(x_1, ..., x_d)$, si integra la densità congiunta rispetto a tutte le altre variabili: $f_{X_i}(x_i) = \int ... \int f(x_1, ..., x_d) dx_1 ... dx_{i-1} dx_{i+1} ... dx_d$.
    
- **Marginale Multidimensionale:** Per ottenere la densità marginale di un sottovettore, ad esempio $(X_i, X_j)$, si integra la densità congiunta rispetto a tutte le variabili che non compaiono nel sottovettore: $f_{X_i, X_j}(x_i, x_j) = \int ... \int f(x_1, ..., x_d) dx_1 ... dx_{i-1} dx_{i+1} ... dx_{j-1} dx_{j+1} ... dx_d$.
    

### La Non Implicazione Viceversa: Marginali Assolutamente Continue non Implicano Congiunta Assolutamente Continua

Un punto cruciale sottolineato dal professore è che **sebbene un vettore assolutamente continuo implichi marginali assolutamente continue, il contrario non è sempre vero**.

- **Controesempio: $X = (Y, Y)$** Consideriamo un vettore $X = (X_1, X_2)$ dove $X_1 = Y$ e $X_2 = Y$, e $Y$ è una variabile aleatoria assolutamente continua.
    
    - **Marginali Assolutamente Continue:** Marginalmente, sia $X_1$ che $X_2$ sono uguali a $Y$, quindi sono assolutamente continue.
        
    - **Congiunta Non Assolutamente Continua:** Il vettore $X = (Y, Y)$ non è assolutamente continuo. Per costruzione, la probabilità che $X_1 = X_2$ è sempre 1: $P(X_1 = X_2) = P(Y = Y) = 1$.
        
    - **Dimostrazione per Assurdo:** Se $X$ fosse assolutamente continuo, esisterebbe una densità congiunta $f_{X_1, X_2}(x_1, x_2)$ tale che: $P(X_1 = X_2) = \iint_{{(x_1, x_2) | x_1 = x_2}} f_{X_1, X_2}(x_1, x_2) dx_1 dx_2$.
        
        L'insieme ${(x_1, x_2) | x_1 = x_2}$ rappresenta una **retta** nel piano $\mathbb{R}^2$. La **misura di Lebesgue** di una retta in $\mathbb{R}^2$ è **zero**.
        
        Se $f_{X_1, X_2}$ è integrabile (come dovrebbe essere per una densità), allora l'integrale di Lebesgue di una funzione integrabile su un insieme di misura di Lebesgue nulla è **zero**.
        
        Quindi, se $X$ fosse assolutamente continuo, avremmo $P(X_1 = X_2) = 0$, che contraddice il fatto che $P(X_1 = X_2) = 1$. Pertanto, il vettore $X = (Y, Y)$ non può essere assolutamente continuo, anche se le sue marginali lo sono.
        
    - **Intuizione Geometrica:** La distribuzione di probabilità del vettore $(Y, Y)$ è concentrata sulla retta $x_1 = x_2$ nel piano $\mathbb{R}^2$. Una distribuzione assolutamente continua in $\mathbb{R}^2$ dovrebbe essere "diffusa" su insiemi bidimensionali con misura di Lebesgue non nulla, non concentrata su un insieme di misura nulla come una retta.
        ![[Pasted image 20250414171059.png]]

### Indipendenza e Misure Prodotto

Il professore introduce l'applicazione del teorema di Fubini-Tonelli nel contesto di **spazi di probabilità** e come questo porta al concetto di **indipendenza**.

- **Misure Prodotto:** Dati due spazi di probabilità $(X_1, \mathcal{A}_1, \mu_1)$ e $(X_2, \mathcal{A}_2, \mu_2)$, si può definire una **misura prodotto** $P = \mu_1 \times \mu_2$ sullo spazio prodotto $(X_1 \times X_2, \mathcal{A}_1 \otimes \mathcal{A}_2)$ tale che per ogni $A_1 \in \mathcal{A}_1$ e $A_2 \in \mathcal{A}_2$: $P(A_1 \times A_2) = \mu_1(A_1) \mu_2(A_2)$.
    
- **Variabili Aleatorie e Misure Indotte:** Se $X_1$ e $X_2$ sono variabili aleatorie definite su uno spazio di probabilità comune $(\Omega, \mathcal{F}, P)$ a valori in $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$, possiamo considerare le loro **misure indotte** $\mathbb{P}_{X_1}(A_1) = P(X_1 \in A_1)$ e $\mathbb{P}_{X_2}(A_2) = P(X_2 \in A_2)$.
    ![[Pasted image 20250414172154.png]]
- **Misura Immagine e Misura Prodotto delle Marginali:** La **legge congiunta** di $(X_1, X_2)$ è la misura immagine $\mathbb{P}_{(X_1, X_2)}(A_1 \times A_2) = P(X_1 \in A_1, X_2 \in A_2)$ sullo spazio prodotto $\mathbb{R}^2$. Possiamo anche considerare la **misura prodotto delle marginali**: $\mathbb{P}_{X_1} \times \mathbb{P}_{X_2}(A_1 \times A_2) = \mathbb{P}_{X_1}(A_1) \mathbb{P}_{X_2}(A_2) = P(X_1 \in A_1) P(X_2 \in A_2)$.
    
- **Definizione di Indipendenza:** Due variabili aleatorie $X_1$ e $X_2$ sono **indipendenti** se per ogni $A_1, A_2$ misurabili (negli spazi di arrivo): $P(X_1 \in A_1, X_2 \in A_2) = P(X_1 \in A_1) P(X_2 \in A_2)$.
    
- **Proposizione:** Le variabili aleatorie $X_1$ e $X_2$ sono indipendenti **se e solo se** la loro **misura immagine (legge congiunta) è uguale alla misura prodotto delle loro marginali**: $\mathbb{P}_{(X_1, X_2)} = \mathbb{P}_{X_1} \times \mathbb{P}_{X_2}$.
    
    Questa equivalenza deriva dal fatto che due misure di probabilità che coincidono su tutti i rettangoli del prodotto coincidono sull'intera sigma-algebra prodotto.
    ![[Pasted image 20250414172400.png]]

### Teorema di Fubini per Variabili Aleatorie Indipendenti

Una delle conseguenze fondamentali dell'indipendenza, derivata dal teorema di Fubini-Tonelli, riguarda il calcolo del **valore atteso di funzioni di variabili aleatorie indipendenti**.

- **Teorema:** Siano $X_1, X_2$ variabili aleatorie reali definite su uno spazio di probabilità e **indipendenti**. Sia $h: \mathbb{R}^2 \rightarrow \mathbb{R}$ una funzione misurabile.
    
    - **Caso $h \ge 0$:** Se $h$ è non negativa, allora: $E[h(X_1, X_2)] = \int_{\mathbb{R}^2} h(x_1, x_2) d\mathbb{P}_{(X_1, X_2)}(x_1, x_2) = \int_{\mathbb{R}} \left( \int_{\mathbb{R}} h(x_1, x_2) d\mathbb{P}_{X_2}(x_2) \right) d\mathbb{P}_{X_1}(x_1) = \int_{\mathbb{R}} \int_{\mathbb{R}} h(x_1, x_2) d\mathbb{P}_{X_1}(x_1) d\mathbb{P}_{X_2}(x_2)$.
        
        Nel caso in cui $X_1$ e $X_2$ abbiano densità $f_{X_1}(x_1)$ e $f_{X_2}(x_2)$ rispettivamente, e quindi la densità congiunta sia $f_{X_1, X_2}(x_1, x_2) = f_{X_1}(x_1) f_{X_2}(x_2)$ (per l'indipendenza), il teorema diventa: $E[h(X_1, X_2)] = \int_{\mathbb{R}} \int_{\mathbb{R}} h(x_1, x_2) f_{X_1}(x_1) f_{X_2}(x_2) dx_1 dx_2$.
        
    - **Caso $E[|h(X_1, X_2)|] < \infty$:** Se il valore atteso del modulo di $h(X_1, X_2)$ è finito, allora vale la stessa uguaglianza. Questo assicura che gli integrali sono ben definiti.
        ![[Pasted image 20250414172626.png]]

### Corollario: Valore Atteso del Prodotto di Variabili Aleatorie Indipendenti

Un importante corollario del teorema di Fubini per variabili indipendenti riguarda il valore atteso del loro prodotto.

- **Corollario:** Siano $X_1, ..., X_n$ variabili aleatorie reali **indipendenti** tali che il valore atteso di ognuna di esse sia finito ($E[|X_i|] < \infty$ per ogni $i$). Allora, il valore atteso del loro prodotto è finito e uguale al prodotto dei loro valori attesi: $E[X_1 ... X_n] = E[X_1] ... E[X_n]$.
    
    Questa proprietà è fondamentale e semplifica notevolmente il calcolo dei **momenti misti** per variabili indipendenti. Invece di calcolare integrali multipli, si calcolano prodotti di integrali singoli.
    
![[Pasted image 20250414172757.png]]
### Criteri per Verificare l'Indipendenza

Il professore menziona brevemente i criteri per verificare se due variabili aleatorie sono indipendenti.

- **Definizione Generale:** $X_1$ e $X_2$ sono indipendenti se per ogni coppia di eventi $A_1$ e $A_2$ negli spazi di arrivo, $P(X_1 \in A_1 \cap X_2 \in A_2) = P(X_1 \in A_1) P(X_2 \in A_2)$. Verificarlo per tutti gli eventi può essere difficile.
    
- **Funzione di Ripartizione:** Per variabili aleatorie reali, $X_1$ e $X_2$ sono indipendenti se e solo se la loro funzione di ripartizione congiunta $F_{X_1, X_2}(x_1, x_2)$ è uguale al prodotto delle loro funzioni di ripartizione marginali $F_{X_1}(x_1)$ e $F_{X_2}(x_2)$: $F_{X_1, X_2}(x_1, x_2) = P(X_1 \le x_1, X_2 \le x_2) = P(X_1 \le x_1) P(X_2 \le x_2) = F_{X_1}(x_1) F_{X_2}(x_2)$. Questo criterio è generale ma la funzione di ripartizione congiunta potrebbe non essere sempre facile da calcolare.
    
- **Densità (se esistono):** Se $X_1$ e $X_2$ hanno densità $f_{X_1}(x_1)$ e $f_{X_2}(x_2)$, allora sono indipendenti se e solo se la loro densità congiunta $f_{X_1, X_2}(x_1, x_2)$ è uguale al prodotto delle loro densità marginali: $f_{X_1, X_2}(x_1, x_2) = f_{X_1}(x_1) f_{X_2}(x_2)$. Questo è un criterio pratico quando le densità sono note.

___

# Indipendenza di Vettori Aleatori Assolutamente Continui

## Proposizione/Teorema: Condizione di Indipendenza Tramite la Fattorizzazione della Densità Congiunta

Sia $X = (X_1, ..., X_d)$ un vettore assolutamente continuo con densità $f(x) = f(x_1, ..., x_d)$. Le componenti $X_1, ..., X_d$ sono indipendenti se e solo se la densità congiunta $d_X(x)$ (utilizzando $d$ per coerenza) fattorizza, ovvero se esiste una scelta di funzioni $f_i(x_i)$ (che risulteranno essere le densità marginali) tali che:

$d_X(x_1, ..., x_d) = f_1(x_1) \cdot f_2(x_2) \cdot ... \cdot f_d(x_d)$

per ogni scelta di vettori $x = (x_1, ..., x_d)$ di dimensioni appropriate. È importante ricordare che le densità non sono definite ovunque, quindi questa uguaglianza deve valere laddove le densità sono definite. Questa condizione è analoga a quella del caso discreto, e non deve valere solo per qualche particolare $x$, ma per tutti i possibili $x$.

## Dimostrazione (Supponendo che la Densità Fattorizzi)

Supponiamo che la densità congiunta fattorizzi come $d_X(t_1, ..., t_d) = f_1(t_1) \cdot f_2(t_2) \cdot ... \cdot f_d(t_d)$. Vogliamo calcolare la funzione di ripartizione multivariata $F_X(x) = P(X_1 \le x_1, ..., X_d \le x_d)$ in un punto generico $x = (x_1, ..., x_d)$. Per la definizione di funzione di ripartizione, si ha:

$F_X(x_1, ..., x_d) = \int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} d_X(t_1, ..., t_d) dt_d ... dt_1$

Dato che stiamo assumendo che la densità fattorizza, possiamo sostituire $d_X$ con il prodotto delle funzioni $f_i$:

$F_X(x_1, ..., x_d) = \int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} f_1(t_1) \cdot f_2(t_2) \cdot ... \cdot f_d(t_d) dt_d ... dt_1$
![[Pasted image 20250414173711.png]]
Per il teorema di Fubini-Tonelli, possiamo scambiare l'ordine di integrazione e, poiché ogni $f_i(t_i)$ dipende solo da $t_i$, possiamo separare gli integrali:

$F_X(x_1, ..., x_d) = \left( \int_{-\infty}^{x_1} f_1(t_1) dt_1 \right) \cdot \left( \int_{-\infty}^{x_2} f_2(t_2) dt_2 \right) \cdot ... \cdot \left( \int_{-\infty}^{x_d} f_d(t_d) dt_d \right)$

Ogni termine di questo prodotto è la funzione di ripartizione marginale della corrispondente variabile $X_i$ calcolata in $x_i$:

$F_{X_i}(x_i) = \int_{-\infty}^{x_i} f_i(t_i) dt_i$

Quindi, otteniamo:

$F_X(x_1, ..., x_d) = F_{X_1}(x_1) \cdot F_{X_2}(x_2) \cdot ... \cdot F_{X_d}(x_d)$

Poiché la funzione di ripartizione congiunta fattorizza nel prodotto delle funzioni di ripartizione marginali, le variabili $X_1, ..., X_d$ sono indipendenti.
![[Pasted image 20250414173736.png]]
## Dimostrazione (Supponendo l'Indipendenza)


Supponiamo che le variabili aleatorie $X_1, ..., X_d$ siano indipendenti. Per variabili aleatorie reali, questo significa che la loro funzione di ripartizione congiunta fattorizza nel prodotto delle funzioni di ripartizione marginali: $F_X(x_1, ..., x_d) = \prod_{i=1}^{d} F_{X_i}(x_i)$.

Sappiamo che, per una variabile aleatoria assolutamente continua $X_i$, la sua funzione di ripartizione marginale può essere espressa come l'integrale della sua densità marginale $f_{X_i}(t_i)$: $F_{X_i}(x_i) = \int_{-\infty}^{x_i} f_{X_i}(t_i) dt_i$.

Sostituendo queste espressioni nella condizione di indipendenza per le funzioni di ripartizione, otteniamo: $\int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} f(t_1, ..., t_d) dt_1 ... dt_d = \prod_{i=1}^{d} \left( \int_{-\infty}^{x_i} f_{X_i}(t_i) dt_i \right)$.

Il lato destro di questa equazione può essere riscritto come un integrale multiplo grazie al teorema di Fubini-Tonelli: $\prod_{i=1}^{d} \left( \int_{-\infty}^{x_i} f_{X_i}(t_i) dt_i \right) = \int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} \left( \prod_{i=1}^{d} f_{X_i}(t_i) \right) dt_1 ... dt_d$.

Quindi, abbiamo: $\int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} f(t_1, ..., t_d) dt_1 ... dt_d = \int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} \left( \prod_{i=1}^{d} f_{X_i}(t_i) \right) dt_1 ... dt_d$.

Questa uguaglianza vale per ogni scelta di $x_1, ..., x_d$. Ciò implica che le funzioni integrande devono essere uguali quasi ovunque (a meno di insiemi di misura di Lebesgue nulla): $f(x_1, ..., x_d) = \prod_{i=1}^{d} f_{X_i}(x_i)$.

Pertanto, se le variabili aleatorie sono indipendenti, la loro densità congiunta fattorizza nel prodotto delle densità marginali.
![[Pasted image 20250414174422.png]]
Questo dimostra che se le variabili sono indipendenti, la densità congiunta fattorizza nel prodotto delle densità marginali. La funzione prodotto $\prod_{i=1}^{d} f_{X_i}(x_i)$ è una funzione positiva e il suo integrale su $\mathbb{R}^d$ è uguale a 1 (per il teorema di Fubini, è il prodotto degli integrali di ogni $f_{X_i}$ su $\mathbb{R}$, che sono tutti uguali a 1). Pertanto, essa è una densità per il vettore $X$. Siccome la densità è unica a meno di insiemi di misura nulla, il prodotto delle densità marginali deve essere uguale alla densità congiunta (quasi ovunque).

## Criterio di Indipendenza Tramite Densità Congiunta e Marginali

Un criterio utile per verificare l'indipendenza di un vettore assolutamente continuo è il seguente: se si ha la densità congiunta $f(x_1, ..., x_d)$, si calcolano le densità marginali $f_{X_i}(x_i)$ (integrando la densità congiunta rispetto a tutte le altre variabili). Se il prodotto delle densità marginali è uguale alla densità congiunta:

$f(x_1, ..., x_d) = f_{X_1}(x_1) \cdot f_{X_2}(x_2) \cdot ... \cdot f_{X_d}(x_d)$

allora le variabili $X_1, ..., X_d$ sono indipendenti. In teoria, si dovrebbe prima conoscere la congiunta, calcolare le marginali e poi verificare la loro relazione. Tuttavia, in alcuni casi, si può arrivare a questa conclusione in modo più sintetico.

## Trasformazioni di Vettori Aleatori e Indipendenza

In generale, trasformare vettori aleatori senza l'ipotesi di indipendenza può essere complicato. Tuttavia, l'indipendenza spesso semplifica notevolmente il problema. Esempi di trasformazioni già viste includono trasformazioni lineari e modelli scala posizione. È importante saper dedurre la funzione di ripartizione e la funzione di densità delle variabili trasformate. Altri esempi di trasformazioni includono il massimo, il minimo, il modulo e il quadrato di variabili aleatorie.

Certamente, ecco la spiegazione del professore a partire dalla Funzione di Ripartizione del Massimo, integrata con i contenuti forniti e formattata come richiesto:

# Statistiche d'Ordine: Massimo e Minimo di Variabili Aleatorie Indipendenti

## Introduzione alle Statistiche d'Ordine

Le statistiche d'ordine si occupano dello studio di variabili aleatorie ottenute ordinando un campione di variabili aleatorie. Tra le statistiche d'ordine più semplici e importanti troviamo il **massimo** e il **minimo** di un insieme di variabili aleatorie indipendenti.

Consideriamo $n$ variabili aleatorie $X_1, X_2, ..., X_n$ indipendenti. Definiamo il **massimo** $M = \max(X_1, X_2, ..., X_n)$ e il **minimo** $m = \min(X_1, X_2, ..., X_n)$. Essendo funzioni continue di variabili aleatorie, anche $M$ e $m$ sono variabili aleatorie.

## Funzione di Ripartizione del Massimo

Vogliamo calcolare la funzione di ripartizione del massimo, $F_M(x) = P(M \le x)$.

L'evento ${M \le x}$ si verifica se e solo se tutte le variabili aleatorie $X_1, X_2, ..., X_n$ sono minori o uguali a $x$: ${M \le x} = {\max(X_1, ..., X_n) \le x} = {X_1 \le x, X_2 \le x, ..., X_n \le x}$

Quindi, la funzione di ripartizione del massimo è: $F_M(x) = P(X_1 \le x, X_2 \le x, ..., X_n \le x)$

Sfruttando l'ipotesi di **indipendenza** delle variabili aleatorie, possiamo scrivere la probabilità congiunta come il prodotto delle probabilità marginali: $F_M(x) = P(X_1 \le x) P(X_2 \le x) ... P(X_n \le x)$

Introduciamo ora l'ulteriore ipotesi che le variabili aleatorie siano **identicamente distribuite** (i.i.d.), cioè che abbiano tutte la stessa funzione di ripartizione $F_X(x) = P(X_i \le x)$ per ogni $i = 1, ..., n$: $F_M(x) = [F_X(x)]^n$
![[Pasted image 20250414175120.png]]
Questo risultato ci permette di esprimere la funzione di ripartizione del massimo in termini della funzione di ripartizione della singola variabile aleatoria quando queste sono indipendenti e identicamente distribuite.

## Funzione di Ripartizione del Minimo

Consideriamo ora il minimo $m = \min(X_1, X_2, ..., X_n)$. Calcolare direttamente $P(m \le x)$ non è particolarmente agevole. È più conveniente calcolare la **funzione di sopravvivenza** (o **contropartizione**) del minimo, $P(m > x)$, e poi ricavare la funzione di ripartizione.

L'evento ${m > x}$ si verifica se e solo se tutte le variabili aleatorie $X_1, X_2, ..., X_n$ sono maggiori di $x$: ${m > x} = {\min(X_1, ..., X_n) > x} = {X_1 > x, X_2 > x, ..., X_n > x}$

Quindi, la probabilità che il minimo sia maggiore di $x$ è: $P(m > x) = P(X_1 > x, X_2 > x, ..., X_n > x)$

Sfruttando l'indipendenza delle variabili aleatorie: $P(m > x) = P(X_1 > x) P(X_2 > x) ... P(X_n > x)$

Sotto l'ipotesi di variabili i.i.d., dove $P(X_i > x) = 1 - F_X(x)$: $P(m > x) = [1 - F_X(x)]^n$

Infine, la funzione di ripartizione del minimo è data da: $F_m(x) = P(m \le x) = 1 - P(m > x) = 1 - [1 - F_X(x)]^n$
![[Pasted image 20250414175430.png]]
## Esempio 1: Minimo di Tempi di Guasto Esponenziali

Consideriamo $n$ tempi di guasto indipendenti, ciascuno distribuito secondo una legge esponenziale negativa con parametro $\lambda > 0$. La funzione di ripartizione di una variabile esponenziale con parametro $\lambda$ è $F_X(x) = 1 - e^{-\lambda x}$ per $x > 0$, e $F_X(x) = 0$ per $x \le 0$.

Vogliamo trovare la legge del minimo di questi tempi di guasto. Usando la formula per la funzione di ripartizione del minimo: $F_m(x) = 1 - [1 - (1 - e^{-\lambda x})]^n = 1 - [e^{-\lambda x}]^n = 1 - e^{-n\lambda x}$ per $x > 0$. Per $x \le 0$, $F_X(x) = 0$, quindi $F_m(x) = 1 - ^n = 1 - 1 = 0$.

La funzione di ripartizione $F_m(x) = 1 - e^{-n\lambda x}$ per $x > 0$ è la funzione di ripartizione di una **variabile aleatoria esponenziale negativa con parametro $n\lambda$**. Questo significa che il minimo di $n$ variabili esponenziali i.i.d. con parametro $\lambda$ è ancora una variabile esponenziale, ma con un tasso di guasto $n$ volte maggiore.
![[Pasted image 20250414175554.png]]
## Esercizio 1: Massimo di Variabili Uniformi su (0, 1)

Siano $X_1, ..., X_n$ variabili aleatorie indipendenti e identicamente distribuite secondo una legge uniforme sull'intervallo $(0, 1)$. La funzione di ripartizione di una variabile uniforme su $(0, 1)$ è: $F_X(x) = \begin{cases} 0 & x \le 0 \\ x & 0 < x < 1 \\ 1 & x \ge 1 \end{cases}$

Calcolare la funzione di ripartizione e la densità del massimo $M = \max(X_1, ..., X_n)$.

Usando la formula per la funzione di ripartizione del massimo: $F_M(x) = [F_X(x)]^n = \begin{cases} 0^n = 0 & x \le 0 \\ x^n & 0 < x < 1 \\ 1^n = 1 & x \ge 1 \end{cases}$

Per trovare la densità $f_M(x)$, deriviamo la funzione di ripartizione rispetto a $x$: 

$f_M(x) = \frac{d}{dx} F_M(x) = \begin{cases} 0 & x \le 0 \\ nx^{n-1} & 0 < x < 1 \\ 0 & x \ge 1 \end{cases}$
___
*da qui in poi un allucinazione*
## Trasformazioni di Vettori Aleatori e Indipendenza

Quando si considerano trasformazioni di vettori aleatori, l'indipendenza delle componenti semplifica notevolmente l'analisi. Senza l'ipotesi di indipendenza, determinare la legge della trasformazione può essere molto complesso. L'esempio dei massimi e minimi illustra come l'indipendenza permetta di ricavare le leggi delle statistiche d'ordine in modo relativamente semplice.

## Funzione Caratteristica della Gamma

Per concludere, il professore introduce la funzione caratteristica della distribuzione Gamma, senza fornirne la derivazione.

La densità della distribuzione Gamma è proporzionale a $x^{\alpha - 1} e^{-\beta x}$ per $x > 0$, dove $\alpha > 0$ è il parametro di forma e $\beta > 0$ è il parametro di tasso (l'inverso del parametro di scala). La funzione caratteristica della distribuzione Gamma è data da: $\phi_X(t) = E[e^{itX}] = \left( \frac{\beta}{\beta - it} \right)^\alpha$, per $|t| < \beta$ .

Il professore fa notare che la parametrizzazione della Gamma può variare a seconda della convenzione utilizzata (scala o tasso) . Nella forma presentata, $\beta$ è un parametro di tasso.

### Caso Particolare: Esponenziale

Come caso particolare, la distribuzione Esponenziale con parametro $\lambda$ è una distribuzione Gamma con $\alpha = 1$ e $\beta = \lambda$. La sua funzione caratteristica si ottiene sostituendo questi valori nella formula generale: $\phi_X(t) = \left( \frac{\lambda}{\lambda - it} \right)^1 = \frac{\lambda}{\lambda - it} = \frac{1}{1 - it/\lambda}$ .

Questo risultato può essere verificato direttamente tramite l'integrazione complessa, trattando l'integrale della funzione caratteristica come un integrale di funzioni complesse .

### Esercizio 2: Somma di Variabili Gamma Indipendenti

Considerare $n$ variabili aleatorie indipendenti $X_1, ..., X_n$, dove ciascuna $X_j$ segue una distribuzione Gamma con parametri $(\alpha_j, \beta)$ (notare che hanno lo stesso parametro di tasso $\beta$). Determinare la legge della somma $S_n = X_1 + ... + X_n$.

Sfruttando la proprietà che la funzione caratteristica della somma di variabili indipendenti è il prodotto delle loro funzioni caratteristiche: $\phi_{S_n}(t) = E[e^{itS_n}] = E[e^{it(X_1 + ... + X_n)}] = E[e^{itX_1} ... e^{itX_n}] = E[e^{itX_1}] ... E[e^{itX_n}]$ $\phi_{S_n}(t) = \phi_{X_1}(t) ... \phi_{X_n}(t) = \left( \frac{\beta}{\beta - it} \right)^{\alpha_1} ... \left( \frac{\beta}{\beta - it} \right)^{\alpha_n} = \left( \frac{\beta}{\beta - it} \right)^{\alpha_1 + ... + \alpha_n}$

La funzione caratteristica ottenuta è quella di una distribuzione Gamma con parametri $(\sum_{j=1}^n \alpha_j, \beta)$.

**Caso Particolare: Somma di Esponenziali**

Se consideriamo $n$ variabili aleatorie esponenziali indipendenti con lo stesso parametro $\lambda$ (quindi $\alpha_j = 1$ e $\beta = \lambda$ per ogni $j$), la loro somma seguirà una distribuzione Gamma con parametri $(n, \lambda)$.

Questo conclude la parte della lezione richiesta, evidenziando l'importanza dell'indipendenza nello studio delle trasformazioni di variabili aleatorie e fornendo un'introduzione alla funzione caratteristica della distribuzione Gamma.

#### References



