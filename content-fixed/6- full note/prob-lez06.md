---
title: prob lez06
description: Appunto automatico
---

2025-02-26 16:08

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:  [[sbobine]]   [[probabilità]]

## prob-lez06
### Eventi Bernoulli (Eventi Bernoulliani)
- ![[Pasted image 20250226130144.png]]

Questo modello descrive una situazione con $n$ eventi, $E_1, E_2, ..., E_n$, che sono **indipendenti**. Ogni evento $E_i$ ha una probabilità associata di verificarsi.
- ==riscrivi==![[Pasted image 20250226130454.png]]

#### Ipotesi

1. Gli eventi $E_1, E_2, ..., E_n$ sono **indipendenti**.
2. La probabilità di ogni singolo evento $E_i$ è un numero $p_i$ compreso tra 0 e 1: $0 \le p_i \le 1$.
- ==riscrivi==![[Pasted image 20250226130434.png]]

#### Convenzione di Scrittura

Per semplificare la notazione, si introduce una convenzione:

- $E_i^{(e_i)}$ dove $e_i$ può essere 0 o 1.
    - Se $e_i = 1$, allora $E_i^{(e_i)} = E_i$ (l'evento si verifica).
    - Se $e_i = 0$, allora $E_i^{(e_i)} = E_i^c$ (l'evento non si verifica, si verifica il suo complementare).
    - ![[Pasted image 20250226130603.png]]

#### Probabilità dell'Intersezione
- ![[Pasted image 20250226130851.png]]

Considerando un vettore **e** = ($e_1, e_2, ..., e_n$) $\subseteq \set{0,1}^n$ , si calcola la probabilità dell'intersezione degli eventi corrispondenti:

$$P(\bigcap_{i=1}^{n} E_i^{(e_i)})$$

Poiché gli eventi sono indipendenti, questa probabilità può essere espressa come il prodotto delle probabilità dei singoli eventi o dei loro complementari:

$P(\bigcap_{i=1}^{n} E_i^{(e_i)}) = \prod_{i=1}^{n} P(E_i^{(e_i)})$

Dove:

$P(E_i^{(e_i)}) = \begin{cases} p_i, & \text{se } e_i = 1 \\ 1 - p_i, & \text{se } e_i = 0 \end{cases}$

#### Evento $A_k$

Si definisce l'evento $A_k$ come l'unione di tutte le intersezioni possibili tali che esattamente $k$ eventi si verifichino:

$$A_k = \bigcup_{\begin{cases}\textbf{e} \in {0,1}^n :\\ \sum_{i=1}^{n} e_i = k\end{cases}} (\bigcap_{i=1}^{n} E_i^{(e_i)})$$

Questo significa che $A_k$ è l'evento in cui esattamente $k$ degli $n$ eventi $E_i$ si verificano.

#### Calcolo della Probabilità di $A_k$

La probabilità di $A_k$ è la somma delle probabilità di tutte le intersezioni disgiunte che la compongono:

$P(A_k) = \sum_{\textbf{e} \in {0,1}^n : \sum_{i=1}^{n} e_i = k} P(\bigcap_{i=1}^{n} E_i^{(e_i)})$

Sostituendo con la formula dell'indipendenza:

$P(A_k) = \sum_{\textbf{e} \in {0,1}^n : \sum_{i=1}^{n} e_i = k} \prod_{i=1}^{n} P(E_i^{(e_i)})$

#### Ulteriore Semplificazione: Eventi Identicamente Distribuibili (i.i.d.)
- ![[Pasted image 20250226131217.png]]
Se, oltre all'indipendenza, tutti gli eventi hanno la stessa probabilità $p$ di verificarsi (cioè $p_i = p$ per ogni $i$), allora l'espressione si semplifica ulteriormente. In questo caso, si parla di **eventi bernoulliani**.

$P(A_k) = \binom{n}{k} p^k (1-p)^{n-k}$

Dove $\binom{n}{k}$ è il coefficiente binomiale, che rappresenta il numero di modi di scegliere $k$ eventi tra $n$.

### Esempio

Consideriamo il lancio di $n$ monete, dove ogni moneta ha probabilità $p$ di dare testa. Gli esiti dei lanci sono indipendenti. Qual è la probabilità di osservare esattamente $k$ teste? La risposta è data dalla distribuzione binomiale:

$P(A_k) = \binom{n}{k} p^k (1-p)^{n-k}$

### Costruzione di Eventi Bernoulli
- ![[Pasted image 20250226131247.png]]
È possibile costruire uno spazio di probabilità in cui gli eventi $E_i$ sono bernoulliani. Si può prendere $\Omega = {0, 1}^n$, con la $\sigma$-algebra delle parti e definire una misura di probabilità $P$ tale che:

$P(\omega) = \prod_{i=1}^{n} p_i^{\omega_i} (1 - p_i)^{(1 - \omega_i)}$

Dove $\omega = (\omega_1, ..., \omega_n)$ è un elemento di $\Omega$.

Verificare che $\sum_{\omega \in \Omega} P(\omega) = 1$ e che gli eventi $E_i = {\omega \in \Omega : \omega_i = 1}$ sono bernoulliani con probabilità $p_i$.
___


### Indipendenza Condizionale
- ![[Pasted image 20250226130202.png]]

**Definizione A2**:
- ![[Pasted image 20250226131411.png]]

Dati tre eventi $E_1$, $E_2$ e $H$ appartenenti a una $\sigma$-algebra $\mathcal{F}$, $E_1$ e $E_2$ sono condizionatamente indipendenti dato $H$ se:

$P(E_1 \cap E_2 | H) = P(E_1 | H) \cdot P(E_2 | H)$

Il professore sottolinea che questa definizione **non implica** che $P(E_1 \cap E_2) = P(E_1) \cdot P(E_2)$, ma riguarda le probabilità condizionali.

#### Misura di Probabilità Condizionale

Se si definisce una funzione che associa a un insieme la probabilità $P(E | H)$, questa è una misura di probabilità.

#### Definizione Equivalente di Indipendenza Condizionale

Un modo equivalente per definire l'indipendenza condizionale è considerare che $E_1$ e $E_2$ sono indipendenti rispetto alla misura condizionale dato $H$. In altre parole, sono indipendenti rispetto alla misura $P(\cdot | H)$.

#### Generalizzazione a n Eventi

La definizione si estende a $n$ eventi $E_1, E_2, ..., E_n$. Questi eventi sono indipendenti dato $H$ se sono indipendenti rispetto a $P(\cdot | H)$.

Per esempio, per tre eventi $E_1, E_2, E_3$, si deve verificare che:

- $P(E_1 \cap E_2 \cap E_3 | H) = P(E_1 | H) \cdot P(E_2 | H) \cdot P(E_3 | H)$
- $P(E_1 \cap E_2 | H) = P(E_1 | H) \cdot P(E_2 | H)$
- $P(E_1 \cap E_3 | H) = P(E_1 | H) \cdot P(E_3 | H)$
- $P(E_2 \cap E_3 | H) = P(E_2 | H) \cdot P(E_3 | H)$

In generale, la definizione di indipendenza viene riscritta sostituendo $P$ con $P(\cdot | H)$ ovunque.

#### Importante

Il fatto che $E_1$ e $E_2$ siano condizionatamente indipendenti dato $H$ **non implica** che $E_1$ e $E_2$ siano indipendenti.

Il professore menziona che durante le esercitazioni verranno forniti esempi per chiarire ulteriormente questo concetto e illustrare situazioni in cui l'indipendenza condizionale emerge naturalmente.

____

### Variabili Aleatorie: Introduzione e Definizioni Preliminari
- ![[Pasted image 20250226130222.png]]
- ![[Pasted image 20250226130235.png]]

L'argomento delle variabili aleatorie è introdotto come un punto cruciale nello studio della probabilità. Prima di arrivare alla definizione formale di variabile aleatoria, vengono presentati alcuni concetti preliminari fondamentali.

#### Spazi di Punti e Sigma Algebre

Si considerano due spazi, $\Omega$ e $X$, che rappresentano spazi di punti generici. Ad esempio:

- $\Omega = {1, 2, 3, 4, 5, 6}$ e $X = {0, 1}$.
- $\Omega =$ $[0,1]$ $X = \mathbb{R}^d$.

A ciascuno di questi spazi viene assegnata una sigma algebra. Ad esempio, si possono usare:

- La sigma algebra delle parti.
- I Boreliani di $.
- I Boreliani di $\mathbb{R}^d$.


#### Esempio Motivazionale: Lancio di un Dado

Per chiarire meglio, si considera un esempio concreto: modellizzare l'esperimento del lancio di un dado e osservare se il risultato è pari o dispari.

- **Spazio di partenza ($\Omega$):** Rappresenta i possibili esiti del lancio del dado, $\Omega = {1, 2, 3, 4, 5, 6}$.
- **Spazio di arrivo ($X$):** Indica se il numero uscito è pari o dispari, $X = \set{0, 1}$, dove 0 rappresenta "dispari" e 1 rappresenta "pari".
- **Funzione $x$:** Mappa ogni esito del dado al valore corrispondente in $X$. In questo caso:
    - $x(\omega) = 0$ se $\omega \in {1, 3, 5}$.
    - $x(\omega) = 1$ se $\omega \in {2, 4, 6}$.

L'obiettivo è quello di poter rispondere a domande del tipo "Qual è la probabilità che esca un numero pari?".

#### Funzioni Misurabili

![[Pasted image 20250226132412.png]]
Non tutte le funzioni sono adatte per lavorare con probabilità. È necessario restringere l'attenzione a funzioni misurabili.

**Definizione:** Una funzione $x \colon \Omega \to X$ è detta misurabile se $x^{-1}(A) \in \mathcal{F}$ per ogni $A \in \Sigma_X$, dove $\mathcal{F}$ è la sigma algebra su $\Omega$ e $\Sigma_X$ è la sigma algebra su $X$. In altre parole, la controimmagine di ogni insieme misurabile in $X$ deve essere un insieme misurabile in $\Omega$.

- $x^{-1}(A) = \set{\omega \in \Omega : x(\omega) \in A}$ è la controimmagine di $A$.

**Esempio:** Nell'esempio del dado, se $A = {1}$ (cioè l'evento "esce pari"), allora $x^{-1}(A) = {2, 4, 6}$. Per poter calcolare la probabilità di questo evento, è necessario che ${2, 4, 6}$ sia un insieme misurabile in $\Omega$.

#### Variabili Aleatorie

**Definizione:** Una variabile aleatoria è una funzione misurabile $x \colon \Omega \to X$ dove $(\Omega, \mathcal{F}, P)$ è uno spazio di probabilità. Questo significa che, oltre agli spazi $\Omega$ e $X$ e alle rispettive sigma algebre, è definita anche una misura di probabilità $P$ su $\Omega$.

- **Numero aleatorio:** Variabile aleatoria a valori reali, $X = \mathbb{R}$.
- **Vettore aleatorio:** Variabile aleatoria a valori in $\mathbb{R}^d$.

**Importanza della Misurabilità:** La misurabilità garantisce che abbia senso calcolare la probabilità di eventi del tipo ${x \in A}$, dove $A$ è un insieme misurabile in $X$. In altre parole, l'evento ${\omega \in \Omega : x(\omega) \in A}$ deve appartenere alla sigma algebra $\mathcal{F}$ per poter calcolarne la probabilità.

$$ P(x \in A) = P({\omega \in \Omega : x(\omega) \in A}) = P(x^{-1}(A)) $$

**Esempio:** Riprendendo l'esempio del dado, la probabilità di ottenere un numero pari è:

$$ P(x = 1) = P({\omega \in \Omega : x(\omega) = 1}) = P({2, 4, 6}) = \frac{1}{2} $$

### Proprietà delle Funzioni Misurabili

Per manipolare le variabili aleatorie, è utile conoscere alcune proprietà fondamentali delle funzioni misurabili.

#### Lemma Fondamentale

**Enunciato:** Sia $x \colon \Omega \to X$ una funzione, e sia $\mathcal{C}$ una famiglia di sottoinsiemi di $X$ tale che $\sigma(\mathcal{C}) = \Sigma_X$, dove $\sigma(\mathcal{C})$ è la sigma algebra generata da $\mathcal{C}$. Allora, $x$ è misurabile se e solo se $x^{-1}(C) \in \mathcal{F}$ per ogni $C \in \mathcal{C}$.

In altre parole, per verificare che una funzione è misurabile, è sufficiente controllare che la controimmagine di ogni insieme in una famiglia che genera la sigma algebra di arrivo sia misurabile.

**Dimostrazione:** La dimostrazione di questo lemma coinvolge la definizione di una famiglia di insiemi $\mathcal{S}$ e la dimostrazione che $\mathcal{S}$ è una sigma algebra.

#### Criteri di Misurabilità

1. **Funzioni a valori reali:** Sia $x \colon \Omega \to \mathbb{R}$. Allora $x$ è misurabile se e solo se $x^{-1}((-\infty, a]) \in \mathcal{F}$ per ogni $a \in \mathbb{R}$.
    
    Questo criterio semplifica la verifica della misurabilità per funzioni a valori reali: basta controllare che la controimmagine di ogni semiretta sia misurabile.
    
2. **Funzioni vettoriali:** Siano $x_1, x_2 \colon \Omega \to \mathbb{R}$ misurabili. Allora il vettore $(x_1, x_2) \colon \Omega \to \mathbb{R}^2$ è misurabile.
    
    La dimostrazione utilizza il lemma fondamentale e la proprietà che i rettangoli con basi misurabili generano la sigma algebra dei Boreliani in $\mathbb{R}^2$.
    
3. **Composizione di funzioni misurabili:** Siano $x_1 \colon \Omega_1 \to \Omega_2$ e $x_2 \colon \Omega_2 \to X$ funzioni misurabili. Allora la composizione $x_2 \circ x_1 \colon \Omega_1 \to X$ è misurabile.
    
4. **Funzioni continue:** Se $h \colon \mathbb{R}^n \to \mathbb{R}$ è una funzione continua, allora $h$ è misurabile rispetto ai Boreliani. La dimostrazione di questa proprietà richiede un richiamo sulle funzioni continue.
    

#### Conseguenze Importanti

Siano $x_1, x_2 \colon \Omega \to \mathbb{R}$ funzioni misurabili. Allora:

- $x_1 + x_2$ è misurabile.
- $x_1 - x_2$ è misurabile.
- $x_1 \cdot x_2$ è misurabile.
- $\max{x_1, 0}$ (parte positiva di $x_1$) è misurabile.
- $-\min{x_1, 0}$ (parte negativa di $x_1$) è misurabile.
- Se $f \colon \mathbb{R}^2 \to \mathbb{R}$ è continua, allora $f(x_1, x_2)$ è misurabile.

Queste proprietà permettono di costruire nuove funzioni misurabili a partire da funzioni misurabili note, utilizzando operazioni algebriche e composizioni con funzioni continue.

___

Ecco una spiegazione dettagliata sulle funzioni misurabili e variabili aleatorie, basata sulle lezioni del professore, con particolare attenzione ai passaggi matematici, esempi ed esercizi.

### Funzioni Misurabili e Variabili Aleatorie
- ![[Pasted image 20250226130306.png]]
- ![[Pasted image 20250226130322.png]]

#### Spazi di Misura

Si considerano due spazi, $\Omega$ e $X$, dove $\Omega$ rappresenta uno spazio di punti e $X$ un altro spazio di punti. Ad esempio:

- $\Omega = {1, 2, 3, 4, 5, 6}$ e $X = {0, 1}$
- $\Omega = \mathbb{R}$ e $X = \mathbb{R}^d$
- $\Omega =$ e $X = \mathbb{R}^d$

Ad ognuno di questi spazi si associa una $\sigma$-algebra. Per esempio:

- In $\Omega$, la $\sigma$-algebra delle parti $\mathcal{P}(\Omega)$
- In $X$, la $\sigma$-algebra delle parti $\mathcal{P}(X)$
- In $$, i Boreliani di $$
- In $\mathbb{R}^d$, i Boreliani di $\mathbb{R}^d$

#### Definizione di Funzione Misurabile

Una funzione $\xi: \Omega \rightarrow X$ si dice misurabile se:

$$\xi^{-1}(A) \in \mathcal{F} \quad \forall A \in \Sigma_X$$

dove $\Sigma_X$ è la $\sigma$-algebra su $X$ e $\mathcal{F}$ è la $\sigma$-algebra su $\Omega$. In altre parole, la **controimmagine** di ogni insieme misurabile in $X$ è un insieme misurabile in $\Omega$.

#### Esempio Motivazionale: Lancio di un Dado

Si vuole modellizzare l'esperimento del lancio di un dado e osservare se il risultato è pari o dispari.

- $\Omega = {1, 2, 3, 4, 5, 6}$ rappresenta l'esito del lancio del dado
- $X = {0, 1}$ rappresenta "dispari" (0) o "pari" (1)

La funzione $\xi: \Omega \rightarrow X$ è definita come:

- $\xi(\omega) = 0$ se $\omega \in {1, 3, 5}$
- $\xi(\omega) = 1$ se $\omega \in {2, 4, 6}$

#### Probabilità di un Evento

Per un probabilista, è fondamentale che, data una funzione, si possa propagare l'informazione sulla probabilità. Nell'esempio del dado, si vuole sapere qual è la probabilità che esca un numero pari.

#### Definizione di Variabile Aleatoria

Una **variabile aleatoria** è una funzione misurabile da uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ a uno spazio misurabile $(X, \Sigma_X)$. Quindi, oltre alla misurabilità, si aggiunge la presenza di una misura di probabilità $P$ su $\Omega$.

#### Tipi di Variabili Aleatorie

- **Numero aleatorio**: Variabile aleatoria a valori reali, $\xi: \Omega \rightarrow \mathbb{R}$, dove $\mathbb{R}$ è dotato dei Boreliani.
- **Vettore aleatorio**: Variabile aleatoria a valori in $\mathbb{R}^d$, $\xi: \Omega \rightarrow \mathbb{R}^d$, dove $\mathbb{R}^d$ è dotato dei Boreliani.

#### Misurabilità e Controimmagine

Se $\xi$ è una variabile aleatoria, allora ha senso chiedersi qual è la probabilità che $\xi(\omega)$ appartenga ad $A$, dove $A$ è un insieme misurabile in $X$. Formalmente:

$$P(\xi \in A) = P({\omega \in \Omega : \xi(\omega) \in A}) = P(\xi^{-1}(A))$$

È cruciale che $\xi^{-1}(A)$ sia un evento appartenente alla $\sigma$-algebra $\mathcal{F}$ su $\Omega$, affinché si possa calcolare la sua probabilità.

#### Esempio: Probabilità di Pari nel Lancio del Dado

La probabilità di ottenere un numero pari è:

$$P(\xi = 1) = P({\omega \in \Omega : \xi(\omega) = 1}) = P({2, 4, 6})$$

### Proprietà delle Funzioni Misurabili
#### Funzioni tra Spazi

Si definisce una funzione nel senso matematico più generale, cioè una corrispondenza che associa ad ogni punto di $\Omega$ un punto in $X$. È importante notare che queste funzioni non sono necessariamente da $\mathbb{R}$ in $\mathbb{R}$ o da $\mathbb{R}^d$ in $\mathbb{R}$, ma possono essere tra insiemi più generali.


#### Lemma Fondamentale

Sia $\xi: \Omega \rightarrow X$ una funzione, e sia $\mathcal{C}$ una famiglia di sottoinsiemi di $X$ tale che $\sigma(\mathcal{C}) = \Sigma_X$ (cioè, $\mathcal{C}$ genera la $\sigma$-algebra su $X$). Allora $\xi$ è misurabile se e solo se:

$$\xi^{-1}(C) \in \mathcal{F} \quad \forall C \in \mathcal{C}$$

In altre parole, per verificare che una funzione è misurabile, è sufficiente controllare che la controimmagine degli elementi di una famiglia che genera la $\sigma$-algebra d'arrivo siano misurabili.

#### Proprietà Utili delle Controimmagini

Sia $f: E \rightarrow F$ una funzione. Allora:

- $f^{-1}(\emptyset) = \emptyset$
- $f^{-1}(F) = E$
- $f^{-1}(\bigcup_{i} V_i) = \bigcup_{i} f^{-1}(V_i)$, dove $V_i \subseteq F$
- $f^{-1}(A^c) = (f^{-1}(A))^c$

#### Conseguenze del Lemma

1. **Funzioni a valori reali**: Una funzione $\xi: \Omega \rightarrow \mathbb{R}$ è misurabile (rispetto alla $\sigma$-algebra $\mathcal{F}$ su $\Omega$ e ai Boreliani $\mathcal{B}(\mathbb{R})$ su $\mathbb{R}$) se e solo se:
    
    $$\xi^{-1}((-\infty, x]) \in \mathcal{F} \quad \forall x \in \mathbb{R}$$
    
    Basta quindi controllare che la controimmagine delle semirette sia misurabile.
    
2. **Funzioni vettoriali**: Siano $\xi_1, \xi_2: \Omega \rightarrow \mathbb{R}$ due funzioni misurabili. Allora il vettore $(\xi_1, \xi_2): \Omega \rightarrow \mathbb{R}^2$ è misurabile (rispetto alla $\sigma$-algebra $\mathcal{F}$ su $\Omega$ e ai Boreliani $\mathcal{B}(\mathbb{R}^2)$ su $\mathbb{R}^2$).
    
    La dimostrazione utilizza il lemma e il fatto che i rettangoli con basi misurabili generano i Boreliani di $\mathbb{R}^2$. La controimmagine di un rettangolo $A_1 \times A_2$ è:
    
    $$(\xi_1, \xi_2)^{-1}(A_1 \times A_2) = \xi_1^{-1}(A_1) \cap \xi_2^{-1}(A_2)$$
    
    Poiché $\xi_1$ e $\xi_2$ sono misurabili, $\xi_1^{-1}(A_1) \in \mathcal{F}$ e $\xi_2^{-1}(A_2) \in \mathcal{F}$, quindi $(\xi_1, \xi_2)^{-1}(A_1 \times A_2) \in \mathcal{F}$.
    
3. **Composizione di funzioni misurabili**: Siano $\xi_1: (\Omega_1, \mathcal{F}_1) \rightarrow (\Omega_2, \mathcal{F}_2)$ e $\xi_2: (\Omega_2, \mathcal{F}_2) \rightarrow (X, \Sigma_X)$ funzioni misurabili. Allora la funzione composta $\xi_2 \circ \xi_1: \Omega_1 \rightarrow X$, definita come $(\xi_2 \circ \xi_1)(\omega) = \xi_2(\xi_1(\omega))$, è misurabile (rispetto a $\mathcal{F}_1$ e $\Sigma_X$).
    

#### Funzioni Continue e Misurabilità

Se $h: \mathbb{R}^n \rightarrow \mathbb{R}$ è una funzione continua, allora $h$ è misurabile (rispetto ai Boreliani).

#### Operazioni con Funzioni Misurabili

Siano $\xi_1, \xi_2: \Omega \rightarrow \mathbb{R}$ funzioni misurabili. Allora le seguenti funzioni sono misurabili:

- $\xi_1 + \xi_2$
- $\xi_1 - \xi_2$
- $\xi_1 \cdot \xi_2$
- $\xi^+ = \max{\xi, 0}$ (parte positiva di $\xi$)
- $\xi^- = -\min{\xi, 0}$ (parte negativa di $\xi$)

In generale, se $\psi: \mathbb{R}^2 \rightarrow \mathbb{R}$ è una funzione continua, allora $\psi(\xi_1, \xi_2)$ è misurabile.
#### References



