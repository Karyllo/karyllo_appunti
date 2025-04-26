---
title: prob lez09
description: Appunto automatico
---

2025-03-06 15:06

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine]] [[probabilità]]

## prob-lez09

___
## prob-lez09

# Spiegazione del Professore su Argomenti di Probabilità

## Chiarimento sulla Dimostrazione del Teorema di Bayes

Il professore inizia la lezione rispondendo a domande di studenti riguardo alla dimostrazione del **Teorema di Bayes**. Viene chiarito che la dimostrazione è stata effettivamente presentata durante la lezione precedente, quando si è discusso del teorema di Bayes per eventi.

### Dimostrazione per Eventi e Forma Ridotta

La dimostrazione si basa sulla scrittura del teorema di Bayes nella sua **forma ridotta** per due eventi, $H$ e $E$. Questa dimostrazione consiste nello scrivere la formula stessa del teorema.

### Applicazione della Proprietà delle Probabilità Totali

Il secondo passaggio della dimostrazione implica l'applicazione di quella che è stata definita la **proprietà delle probabilità totali** o di disintegrazione al denominatore della formula di Bayes.

Se $H_i$ costituisce una **partizione** dello spazio campionario, allora la probabilità di un evento $E$ può essere scritta come la somma delle probabilità condizionate di $E$ dato $H_i$, moltiplicate per le probabilità di $H_i$:

$P(E) = \sum_{i} P(E|H_i) P(H_i)$

Il professore sottolinea che la dimostrazione del teorema di Bayes è intrinsecamente legata alla forma delle probabilità totali.

## Funzione di Ripartizione

Successivamente, l'argomento si sposta sulla **funzione di ripartizione**, associata a una variabile aleatoria. La funzione di ripartizione svolge un ruolo cruciale nella descrizione di tutte le misure di probabilità su $\mathbb{R}$ e delle leggi di qualunque variabile aleatoria a valori reali.

### Corrispondenza Biunivoca con le Misure di Probabilità
![[Pasted image 20250402124934.png]]
Esiste una **corrispondenza biunivoca** tra le funzioni di ripartizione e le misure di probabilità sui boreliani di $\mathbb{R}$. Data una funzione di ripartizione, è possibile costruire uno spazio di probabilità e una variabile aleatoria tale che la funzione di ripartizione di questa variabile aleatoria coincida con la funzione di ripartizione data.

### Dimostrazione dell'Esistenza di una Variabile Aleatoria con Data Funzione di Ripartizione (Dimostrazione Facoltativa)

Il professore presenta una **dimostrazione facoltativa** di questo fatto, sottolineando che mette in luce un aspetto importante, anche se a prima vista può sembrare tautologico.

#### Costruzione Canonica

La costruzione canonica proposta è la seguente:

- Si prende lo **spazio di partenza $\Omega$ uguale allo spazio d'arrivo $\mathbb{R}$**.
- Si definisce la **variabile aleatoria $X$ come la funzione identità** su $\mathbb{R}$, ovvero $X(\omega) = \omega$ per ogni $\omega \in \mathbb{R}$. Questa funzione è (chiaramente) misurabile.
- Si sceglie una **misura di probabilità $P$ su $\Omega = \mathbb{R}$ (sui boreliani di $\mathbb{R}$)**.

#### Scelta della Misura di Probabilità $P_F$

Si assume l'esistenza di una misura $P_F$ tale che le probabilità delle semirette $(-\infty, x]$ coincidano con la funzione di ripartizione $F(x)$ data. Questo fatto è basato su una proposizione vista precedentemente.

$P_F((-\infty, x]) = F(x)$

#### Verifica della Funzione di Ripartizione di $X$

La funzione di ripartizione della variabile aleatoria $X$ (l'identità) è data da:

$F_X(x) = P\set{ \omega : X \le x} = P\set{\omega \in \mathbb{R} : \omega \le x}$

Poiché $P$ è scelta come $P_F$, si ha:

$F_X(x) = P_F((-\infty, x]) = F(x)$

Questo dimostra che esiste una variabile aleatoria (in questo caso l'identità su $\mathbb{R}$ con la misura $P_F$) la cui funzione di ripartizione è la funzione $F$ data. Il professore ribadisce che questa non è l'unica possibile costruzione.

## Funzione Quantile (Inversa Generalizzata)

Il professore introduce la **funzione quantile**, o **inversa generalizzata**, di una funzione di ripartizione $F$. Questa funzione, indicata come $F^{-}(u)$, è definita come:

$F^{-}(u) = \inf \set{x \in \mathbb{R} : F(x) \ge u }, \quad u \in (0, 1)$

### Caso di Funzione di Ripartizione Invertibile

In particolare, se la funzione di ripartizione $F$ è **strettamente monotona (e quindi invertibile)**, l'inversa generalizzata coincide con la funzione inversa usuale $F^{-1}(u)$.

$F^{-}(u) = F^{-1}(u)$

### Interpretazione Intuitiva
![[Pasted image 20250402145547.png]]
La funzione quantile $F^{-1}(u)$ (nel caso invertibile) rappresenta quel valore $x$ tale per cui la probabilità che la variabile aleatoria sia minore o uguale a $x$ è uguale a $u$:

$P(X \le F^{-1}(u)) = F(F^{-1}(u)) = u$

In termini statistici, $F^{-1}(1/2)$ corrisponde alla **mediana**, ovvero quel valore che divide la distribuzione di probabilità in due parti uguali. Per un quantile di ordine $p$, $F^{-1}(p)$ è il valore al di sotto del quale cade una proporzione $p$ dei dati.

### Generalizzazione per Funzioni Non Invertibili
![[Pasted image 20250402145645.png]]
![[Pasted image 20250402150140.png]]
La definizione con l'infimum serve a generalizzare il concetto di inversa anche a funzioni di ripartizione che non sono strettamente monotone, ovvero che presentano tratti piatti o salti. In questi casi, per un dato valore di $u$, potrebbe non esistere un unico $x$ tale che $F(x) = u$. La definizione tramite l'infimum seleziona il più piccolo di tali $x$ (o il punto iniziale del tratto in cui $F(x) \ge u$).

## Costruzione di una Variabile Aleatoria con Legge Arbitraria a Partire da una Variabile Uniforme

Il professore presenta un metodo per costruire una variabile aleatoria con una **legge di probabilità arbitraria**, purché si sappia costruire una variabile aleatoria con **legge uniforme sull'intervallo (0, 1)**.

### Teorema di Trasformazione Inversa ?

Sia $F$ una funzione di ripartizione e sia $U$ una variabile aleatoria con legge uniforme su $(0, 1)$ definita su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$. Si definisce una nuova variabile aleatoria $X$ come:

$X = F^{-}(U)$
![[Pasted image 20250402150302.png]]
![[Pasted image 20250402150306.png]]
dove $F^{-}$ è la funzione quantile (inversa generalizzata) di $F$.

### Proprietà Fondamentale

La proprietà fondamentale di questa costruzione è che la variabile aleatoria $X$ così definita ha proprio $F$ come sua funzione di ripartizione:

$P(X \le x) = F(x)$

### Dimostrazione nel Caso di $F$ Invertibile
![[Pasted image 20250402150645.png]]
Il professore fornisce la dimostrazione di questa proprietà nel caso in cui la funzione di ripartizione $F$ sia **strettamente monotona e quindi invertibile**. In questo caso, $F^{-}(u) = F^{-1}(u)$.

$P(X \le x) = P(F^{-1}(U) \le x)$

Poiché $F$ è strettamente monotona crescente, anche la sua inversa $F^{-1}$ è strettamente monotona crescente. Quindi l'ineguaglianza $F^{-1}(U) \le x$ è equivalente a $U \le F(x)$:

$P(F^{-1}(U) \le x) = P(U \le F(x))$

Dato che $U$ ha una distribuzione uniforme su $(0, 1)$, la sua funzione di ripartizione $F_U(u)$ è data da:
![[Pasted image 20250402152803.png]]

$F_U(u) = P(U \le u) = \begin{cases} 0 & \text{se } u < 0 \\ u & \text{se } 0 \le u \le 1 \\ 1 & \text{se } u > 1 \end{cases}$

Poiché $F(x)$ è sempre un valore compreso tra 0 e 1, si ha:

$P(U \le F(x)) = F_U(F(x)) = F(x)$

Quindi, $P(X \le x) = F(x)$, dimostrando che la variabile aleatoria $X = F^{-1}(U)$ ha funzione di ripartizione $F$.

### Collegamento con la Derivazione della Legge Esponenziale

Il professore fa notare che il procedimento utilizzato per derivare la legge esponenziale a partire da una uniforme è un caso particolare di questa trasformazione inversa.

Esercizio menzionato: Verificare che l'esercizio fatto per introdurre la legge esponenziale a partire dall'uniforme è esattamente questo conto nel caso particolare di una specifica $F$.

___


### Variabili Aleatorie Discrete

#### Definizione di Funzione di Ripartizione (Caso Generale)

Si consideri una variabile aleatoria $U$. La **funzione di ripartizione** di $U$, calcolata in un punto $f(x)$ (dove $f(x)$ è un numero), è definita come la probabilità che la variabile aleatoria $U$ assuma un valore minore o uguale a $f(x)$. Formalmente:

$P(U \le f(x)) = F_U(f(x))$

Dove $F_U$ è la funzione di ripartizione di $U$. Il valore $f(x)$ è sempre compreso tra 0 e 1, poiché è il valore di una funzione di ripartizione.

Nel caso di una variabile aleatoria $U$ con distribuzione uniforme sull'intervallo $(0, 1)$, la sua funzione di ripartizione $F_U(x)$ in un punto $x$ compreso tra 0 e 1 è semplicemente $x$ stesso.

#### Definizione di Funzione di Ripartizione per Vettori Aleatori

Si può estendere la definizione di funzione di ripartizione a un **vettore aleatorio** $X = (X_1, ..., X_d)$ a valori in $\mathbb{R}^d$. La funzione di ripartizione del vettore aleatorio $F_X(x_1, ..., x_d)$ è definita come la probabilità che ciascuna componente $X_i$ sia minore o uguale al corrispondente valore $x_i$ per ogni vettore $x = (x_1, ..., x_d) \in \mathbb{R}^d$:

$F_X(x_1, ..., x_d) = P(X_1 \le x_1, X_2 \le x_2, ..., X_d \le x_d)$

Dove la notazione con la virgola indica l'intersezione degli eventi.

Tuttavia, lo studio della teoria equivalente per le funzioni di ripartizione in più dimensioni è più complesso rispetto al caso unidimensionale. Pertanto, ci si concentra principalmente sui risultati ottenuti per variabili aleatorie a valori in $\mathbb{R}$.

#### Variabili Aleatorie Discrete: Definizione e Supporto

Una variabile aleatoria $X$ a valori in $\mathbb{R}^d$ è detta **discreta** se esiste un insieme numerabile $C \subseteq \mathbb{R}^d$ (che è anche un insieme boreliano in quanto unione di punti) tale che la probabilità che $X$ appartenga a $C$ sia uguale a 1:

$P\set{X \in C} = 1$

L'insieme $C$ è anche detto **supporto** della variabile aleatoria o insieme dei valori ammissibili. Questo significa che la variabile aleatoria $X$ assume i suoi valori solo all'interno dell'insieme $C$, e la probabilità di assumere valori al di fuori di $C$ è zero. È importante distinguere tra un evento impossibile (probabilità zero) e un evento che non si osserva mai nella realizzazione della variabile aleatoria.

Nel caso $d=1$, l'insieme $C$ è un sottoinsieme numerabile di $\mathbb{R}$ e può essere rappresentato come una sequenza di punti $\set{x_1, x_2, ...}$.
![[Pasted image 20250402153604.png]]

#### Probabilità per Variabili Aleatorie Discrete
![[Pasted image 20250402154443.png]]
Per una variabile aleatoria discreta $X$ con supporto $C$, la probabilità che $X$ appartenga a un qualsiasi sottoinsieme $A \subseteq \mathbb{R}^d$ può essere calcolata considerando solo l'intersezione di $A$ con il supporto $C$:

$P(X \in A) = P(X \in C \cap A)$

Questo perché la probabilità che $X$ assuma valori al di fuori di $C$ è zero.

#### Funzione di Massa di Probabilità (PMF) o Densità Discreta

Per una variabile aleatoria discreta $X$ con supporto $C = \set{x_1, x_2, ...}$, si definisce la **funzione di massa di probabilità** (PMF) $p_i$ come la probabilità che $X$ assuma il valore $x_i$:

$p_i = P(X = x_i)$

La PMF soddisfa le seguenti proprietà:

- $p_i \ge 0$ per ogni $i$
- $\sum_{i} p_i = 1$

La collezione di questi valori ${p_i}$ descrive completamente la **legge** o **distribuzione** della variabile aleatoria discreta $X$. La legge immagine di $X$ è una **misura discreta**.

A volte si usa la notazione $p(x_i)$ o $p_X(x_i)$ per indicare la probabilità che la variabile aleatoria $X$ assuma il valore $x_i$.

#### Funzione di Ripartizione di una Variabile Aleatoria Discreta

La funzione di ripartizione $F_X(x)$ di una variabile aleatoria discreta $X$ a valori in $\mathbb{R}$ è data dalla somma delle probabilità di tutti i valori $x_i$ nel supporto $C$ che sono minori o uguali a $x$:

$$F_X(x) = P(X \le x) = \sum_{x_i \in C: \ \ x_i \le x} p_i$$

La funzione di ripartizione di una variabile aleatoria discreta è una **funzione a gradini**, costante a tratti e continua da destra, con salti in corrispondenza dei punti del supporto $C$. L'altezza del salto in un punto $x_i \in C$ è pari alla probabilità $p_i = P(X = x_i)$.
![[Pasted image 20250402154942.png]]
#### Vettori Aleatori Discreti e Funzione di Ripartizione

La definizione di variabile aleatoria discreta si estende ai vettori aleatori $X = (X_1, ..., X_d)$ a valori in $\mathbb{R}^d$. Se esiste un insieme numerabile $C \subseteq \mathbb{R}^d$ tale che $P(X \in C) = 1$, allora $X$ è un vettore aleatorio discreto.

La funzione di ripartizione di un vettore aleatorio discreto $X$ è ancora definita come:

$$\begin{aligned}F_X(x_1, ..., x_d) = \\ \\ P(X_1 \le x_1, ..., X_d \le x_d) \\ \\ \sum_{\begin{aligned}x = (x_1', ..., x_d') \in C:\\ x_1' \le x_1, ..., x_d' \le x_d \end{aligned}} p(x_1', ..., x_d')\end{aligned}$$

Dove $p(x_1', ..., x_d') = P(X_1 = x_1', ..., X_d = x_d')$ è la funzione di massa di probabilità congiunta del vettore aleatorio discreto.

A volte, per comodità, si può considerare che il supporto $C$ sia un prodotto cartesiano di insiemi numerabili $C_1 \times ... \times C_d$, anche se alcuni punti nel prodotto cartesiano potrebbero avere probabilità zero.

#### Distribuzioni Marginali di Vettori Aleatori Discreti
![[Pasted image 20250404161525.png]]
Se $X = (X_1, ..., X_d)$ è un vettore aleatorio discreto con supporto $C \subseteq \mathbb{R}^d$ e funzione di massa di probabilità congiunta $p(x_1, ..., x_d)$, allora ogni componente $X_i$ è anch'essa una variabile aleatoria discreta.

La **funzione di massa di probabilità marginale** di $X_i$, $p_{X_i}(x_i)$, si ottiene **marginalizzando** (sommando) la funzione di massa di probabilità congiunta su tutti i possibili valori delle altre componenti:

$p_{X_i}(x_i) = P(X_i = x_i) = \sum_{(x_1, ..., x_{i-1}, x_{i+1}, ..., x_d) \in C_{-i}} p(x_1, ..., x_{i-1}, x_i, x_{i+1}, ..., x_d)$

Dove $C_{-i}$ rappresenta l'insieme dei possibili valori delle componenti diverse da $X_i$ nel supporto $C$.

**Esempio in due dimensioni ($d=2$)**: Sia $X = (X_1, X_2)$ un vettore aleatorio discreto con supporto $C = {(1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (2, 3)}$ e una distribuzione uniforme su questi quattro punti (correzione dell'esempio del professore), quindi $P(X = (x_1, x_2)) = 1/4$ per $(x_1, x_2) \in {(1, 1), (1, 2), (2, 1), (2, 2)}$ e $0$ altrove.

La funzione di massa di probabilità marginale di $X_1$ è:

$p_{X_1}(1) = P(X_1 = 1) = P(X_1 = 1, X_2 = 1) + P(X_1 = 1, X_2 = 2) + P(X_1 = 1, X_2 = 3) = p(1, 1) + p(1, 2) + p(1, 3) = 1/4 + 1/4 + 0 = 1/2$

$p_{X_1}(2) = P(X_1 = 2) = P(X_1 = 2, X_2 = 1) + P(X_1 = 2, X_2 = 2) + P(X_1 = 2, X_2 = 3) = p(2, 1) + p(2, 2) + p(2, 3) = 1/4 + 1/4 + 0 = 1/2$

$p_{X_1}(x_1) = 0$ per $x_1 \notin {1, 2}$

La funzione di massa di probabilità marginale di $X_2$ è:

$p_{X_2}(1) = P(X_2 = 1) = P(X_1 = 1, X_2 = 1) + P(X_1 = 2, X_2 = 1) = p(1, 1) + p(2, 1) = 1/4 + 1/4 = 1/2$

$p_{X_2}(2) = P(X_2 = 2) = P(X_1 = 1, X_2 = 2) + P(X_1 = 2, X_2 = 2) = p(1, 2) + p(2, 2) = 1/4 + 1/4 = 1/2$

$p_{X_2}(3) = P(X_2 = 3) = P(X_1 = 1, X_2 = 3) + P(X_1 = 2, X_2 = 3) = p(1, 3) + p(2, 3) = 0 + 0 = 0$

$p_{X_2}(x_2) = 0$ per $x_2 \notin {1, 2, 3}$

Il professore introduce la notazione con la virgola per indicare l'intersezione di eventi, ad esempio $P(X_1 = 1, X_2 = 1)$ invece di $P(X_1 = 1 \cap X_2 = 1)$.

#### Conclusioni

Se si ha un vettore aleatorio discreto, allora tutti i suoi sottovettori, incluse le singole componenti, sono anch'essi variabili aleatorie discrete. La legge (distribuzione) di un vettore aleatorio discreto determina completamente la legge di tutte le sue distribuzioni marginali.

___

## Variabili Aleatorie Discrete e Valore Atteso

### Densità di Probabilità Congiunta per Vettori Discreti

Consideriamo un vettore aleatorio $(X_1, X_2)$ dove $X_1$ assume valori in un insieme finito $C_1$ e $X_2$ assume valori in un insieme finito $C_2$. La **densità di probabilità congiunta** del vettore $(X_1, X_2)$ è una funzione $P(x_1, x_2)$ che rappresenta la probabilità che $X_1 = x_1$ e $X_2 = x_2$, dove $x_1 \in C_1$ e $x_2 \in C_2$. Questa densità può essere rappresentata tramite una **tabella di contingenza**.

Ad esempio, se $C_1 = {1, 3, 4}$ e $C_2 = {1, 2, 3}$, la tabella di contingenza conterrà le probabilità $P(x_1, x_2)$ per ogni coppia $(x_1, x_2)$.

|$X_2 \setminus X_1$|1|3|4|
|:--|:--|:--|:--|
|1|$1/4$|$0$|$0$|
|2|$0$|$1/4$|$1/4$|
|3|$0$|$1/4$|$0$|

Da questa tabella, possiamo leggere diverse informazioni, come il supporto di $X_1$ e $X_2$ e la probabilità di ogni combinazione di valori. Ad esempio, la probabilità che $X_1 = 3$ e $X_2 = 2$ è $P(3, 2) = 1/4$. La probabilità che $X_1 = 2$ e $X_2 = 1$ è $P(2, 1) = 0$.

### Densità di Probabilità Marginale

A partire dalla densità di probabilità congiunta, è possibile ricavare le **densità di probabilità marginali** delle singole componenti. La densità marginale di $X_1$, $P_{X_1}(x_1)$, si ottiene sommando la densità congiunta su tutti i possibili valori di $X_2$:

$$P_{X_1}(x_1) = \sum_{x_2 \in C_2} P(x_1, x_2)$$

Analogamente, la densità marginale di $X_2$, $P_{X_2}(x_2)$, si ottiene sommando la densità congiunta su tutti i possibili valori di $X_1$:

$P_{X_2}(x_2) = \sum_{x_1 \in C_1} P(x_1, x_2)$

Nell'esempio precedente, la densità marginale di $X_1$ è: $P_{X_1}(1) = P(1, 1) + P(1, 2) + P(1, 3) = 1/4 + 0 + 0 = 1/4$ $P_{X_1}(3) = P(3, 1) + P(3, 2) + P(3, 3) = 0 + 1/4 + 1/4 = 1/2$ $P_{X_1}(4) = P(4, 1) + P(4, 2) + P(4, 3) = 0 + 1/4 + 0 = 1/4$

E la densità marginale di $X_2$ è: $P_{X_2}(1) = P(1, 1) + P(3, 1) + P(4, 1) = 1/4 + 0 + 0 = 1/4$ $P_{X_2}(2) = P(1, 2) + P(3, 2) + P(4, 2) = 0 + 1/4 + 1/4 = 1/2$ $P_{X_2}(3) = P(1, 3) + P(3, 3) + P(4, 3) = 0 + 1/4 + 0 = 1/4$

Queste marginali possono essere aggiunte alla tabella di contingenza.

|$X_2 \setminus X_1$|1|3|4|$P_{X_2}(x_2)$|
|:--|:--|:--|:--|:--|
|1|$1/4$|$0$|$0$|$1/4$|
|2|$0$|$1/4$|$1/4$|$1/2$|
|3|$0$|$1/4$|$0$|$1/4$|
|$P_{X_1}(x_1)$|$1/4$|$1/2$|$1/4$|$1$|

Questo processo di ricavare le densità marginali dalla densità congiunta è chiamato **marginalizzazione**.

### Relazione tra Densità Congiunta e Marginali

**Importante:** La densità congiunta determina univocamente le densità marginali, ma il viceversa non è vero. Date le densità marginali di $X_1$ e $X_2$, non è possibile ricostruire un'unica densità congiunta. Possono esistere diverse densità congiunte che producono le stesse marginali.

Ad esempio, कंसीडर la seguente tabella con la stessa marginali dell'esempio precedente:

|$X_2 \setminus X_1$|1|3|4|
|:--|:--|:--|:--|
|1|$1/16$|$1/8$|$1/16$|
|2|$3/16$|$2/8 = 4/16$|$3/16$|
|3|$0$|$2/8 = 4/16$|$0$|

(Nota: il professore ha ammesso un errore nei suoi calcoli nell'esempio a lezione).

Questa tabella ha le stesse marginali dell'esempio precedente (verificabile sommando righe e colonne), ma la densità congiunta è diversa. Questo dimostra che la conoscenza delle sole marginali non è sufficiente per determinare la densità congiunta.

### Valore Atteso di una Variabile Aleatoria Discreta

Sia $X$ una variabile aleatoria discreta che assume valori in un insieme finito o numerabile $C$, con densità di probabilità discreta (o funzione di massa di probabilità) $p_X(x) = P(X = x)$ per $x \in C$.

Il **valore atteso** (o speranza matematica, valor medio, media) di $X$, denotato con $E[X]$ o $\mu$, è definito come la somma (o serie):

$E[X] = \sum_{x \in C} x \cdot p_X(x)$

**Condizione di Esistenza:** Il valore atteso è definito solo se la seguente somma converge assolutamente:

$\sum_{x \in C} |x| \cdot p_X(x) < \infty$

Se questa condizione non è soddisfatta (ovvero la somma diverge a $+\infty$), allora il valore atteso non è ben definito. Nel caso in cui $C$ sia un insieme finito, questa somma è sempre convergente. Se $C$ è infinito, è necessario verificare la convergenza assoluta. Questa condizione garantisce che la somma che definisce il valore atteso non dipenda dall'ordine in cui i termini vengono sommati.

**Interpretazione del Valore Atteso:** Il valore atteso può essere interpretato come una sorta di **baricentro** dei valori che la variabile aleatoria può assumere, pesati dalle rispettive probabilità. In una dimensione, immagina dei punti sulla retta reale con delle masse corrispondenti alle loro probabilità; il valore atteso è la posizione del centro di massa.

**Il Valore Atteso Dipende dalla Legge Immagine:** Tecnicamente, il valore atteso è definito a partire dalla variabile aleatoria $X$ e dallo spazio di probabilità $(\Omega, \mathcal{F}, P)$ su cui è definita. Tuttavia, il suo valore dipende **esclusivamente dalla legge immagine** (o distribuzione di probabilità) di $X$ sullo spazio di arrivo (in questo caso, $\mathbb{R}$).

Se due variabili aleatorie discrete, definite anche su spazi di probabilità diversi, hanno la **stessa legge immagine** (cioè la stessa densità di probabilità discreta), allora avranno lo **stesso valore atteso**.

### Esempio 1: Distribuzione di Poisson

Si consideri una variabile aleatoria $X$ che assume valori negli interi non negativi $N = {0, 1, 2, ...}$. La probabilità che $X = k$ è data dalla **distribuzione di Poisson** con parametro $\lambda > 0$:

$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$, per $k \in N$

**Verifica che sia una densità di probabilità:** La somma delle probabilità su tutti i possibili valori di $k$ deve essere uguale a 1:

$\sum_{k=0}^{\infty} P(X = k) = \sum_{k=0}^{\infty} \frac{\lambda^k e^{-\lambda}}{k!} = e^{-\lambda} \sum_{k=0}^{\infty} \frac{\lambda^k}{k!}$

Ricordando l'espansione in serie di Taylor della funzione esponenziale $e^x = \sum_{k=0}^{\infty} \frac{x^k}{k!}$, abbiamo:

$\sum_{k=0}^{\infty} \frac{\lambda^k}{k!} = e^{\lambda}$

Quindi, $\sum_{k=0}^{\infty} P(X = k) = e^{-\lambda} \cdot e^{\lambda} = 1$. Inoltre, $P(X = k) \ge 0$ per ogni $k \in N$ e $\lambda > 0$.

**Esercizi:**

1. Calcolare la probabilità che $X$ sia maggiore stretto di 1, i.e., $P(X > 1)$. $P(X > 1) = 1 - P(X \le 1) = 1 - [P(X = 0) + P(X = 1)]$ $P(X = 0) = \frac{\lambda^0 e^{-\lambda}}{0!} = e^{-\lambda}$ $P(X = 1) = \frac{\lambda^1 e^{-\lambda}}{1!} = \lambda e^{-\lambda}$ Pertanto, $P(X > 1) = 1 - (e^{-\lambda} + \lambda e^{-\lambda}) = 1 - e^{-\lambda}(1 + \lambda)$.
    
2. Calcolare il valore atteso di $X$, $E[X]$, usando la definizione. $E[X] = \sum_{k=0}^{\infty} k \cdot P(X = k) = \sum_{k=0}^{\infty} k \cdot \frac{\lambda^k e^{-\lambda}}{k!}$ Notiamo che per $k = 0$, il termine è $0 \cdot \frac{\lambda^0 e^{-\lambda}}{0!} = 0$. Possiamo quindi iniziare la somma da $k = 1$: $E[X] = \sum_{k=1}^{\infty} k \cdot \frac{\lambda^k e^{-\lambda}}{k!} = \sum_{k=1}^{\infty} \frac{k}{k!} \lambda^k e^{-\lambda} = \sum_{k=1}^{\infty} \frac{1}{(k-1)!} \lambda^k e^{-\lambda}$ Facciamo un cambio di indice, ponendo $j = k - 1$, quindi $k = j + 1$. Quando $k = 1$, $j = 0$. La somma diventa: $E[X] = \sum_{j=0}^{\infty} \frac{1}{j!} \lambda^{j+1} e^{-\lambda} = \lambda e^{-\lambda} \sum_{j=0}^{\infty} \frac{\lambda^j}{j!} = \lambda e^{-\lambda} \cdot e^{\lambda} = \lambda$ Quindi, il valore atteso di una variabile aleatoria di Poisson con parametro $\lambda$ è $\lambda$.
    

### Esempio 2: Variabili Aleatorie con la Stessa Legge Immagine

Consideriamo due spazi di probabilità diversi:

- $(\Omega_1, \mathcal{F}_1, P_1)$ dove $\Omega_1 = {1, 2, 3, 4, 5, 6}$, $\mathcal{F}_1$ è la famiglia di tutti i sottoinsiemi di $\Omega_1$, e $P_1({\omega}) = 1/6$ per ogni $\omega \in \Omega_1$ (modello di un dado equilibrato). Definiamo una variabile aleatoria $X_1: \Omega_1 \rightarrow {0, 1}$ come l'indicatore dell'evento ${\omega \in \Omega_1 : \omega \le 3}$: $X_1(\omega) = 1$ se $\omega \in {1, 2, 3}$ $X_1(\omega) = 0$ se $\omega \in {4, 5, 6}$ La legge di probabilità di $X_1$ è: $P(X_1 = 1) = P_1({1, 2, 3}) = P_1({1}) + P_1({2}) + P_1({3}) = 1/6 + 1/6 + 1/6 = 3/6 = 1/2$ $P(X_1 = 0) = P_1({4, 5, 6}) = P_1({4}) + P_1({5}) + P_1({6}) = 1/6 + 1/6 + 1/6 = 3/6 = 1/2$
    
- $(\Omega_2, \mathcal{F}_2, P_2)$ dove $\Omega_2 =$, $\mathcal{F}_2$ è la $\sigma$-algebra dei Boreliani di , e $P_2$ è la misura di Lebesgue ristretta a . Definiamo una variabile aleatoria $X_2: \Omega_2 \rightarrow {0, 1}$ come: $X_2(\omega) = 1$ se $\omega \in [0, 1/2)$ $X_2(\omega) = 0$ se $\omega \in [1/2, 1]$ La legge di probabilità di $X_2$ è: $P(X_2 = 1) = P_2([0, 1/2)) = 1/2 - 0 = 1/2$ $P(X_2 = 0) = P_2([1/2, 1]) = 1 - 1/2 = 1/2$
    

Entrambe le variabili aleatorie $X_1$ e $X_2$ assumono gli stessi valori ${0, 1}$ con le stesse probabilità (legge immagine identica), anche se sono definite su spazi di probabilità $(\Omega, \mathcal{F}, P)$ diversi.

**Calcolo del Valore Atteso:**

$E[X_1] = \sum_{x \in {0, 1}} x \cdot P(X_1 = x) = 0 \cdot P(X_1 = 0) + 1 \cdot P(X_1 = 1) = 0 \cdot (1/2) + 1 \cdot (1/2) = 1/2$

$E[X_2] = \sum_{x \in {0, 1}} x \cdot P(X_2 = x) = 0 \cdot P(X_2 = 0) + 1 \cdot P(X_2 = 1) = 0 \cdot (1/2) + 1 \cdot (1/2) = 1/2$

Come si vede, $E[X_1] = E[X_2]$, il che dimostra che il valore atteso dipende unicamente dalla legge immagine della variabile aleatoria e non dallo specifico spazio di probabilità su cui è definita.






____


#### References

[[Appunti Prob - lez09.pdf]]


[[appunti bussetti-lez09.pdf]]