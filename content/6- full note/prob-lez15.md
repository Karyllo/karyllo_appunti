---
title: "prob-lez15"
---

2025-04-14 08:40

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine]]   [[probabilità]]

## prob-lez15


# **Indipendenza di Variabili Aleatorie**

## **Ripasso: Disuguaglianza di Cauchy-Schwarz**

**Sottotitolo: Definizione e Proprietà**

Il professore inizia la lezione riprendendo un argomento precedente, la disuguaglianza di Cauchy-Schwarz.

Siano $X_1$ e $X_2$ due variabili aleatorie con valore atteso e momento secondo finito. Ciò significa che $X_1, X_2 \in L^2$.

Vale la seguente disuguaglianza: $$|\mathbb{E}[X_1 X_2]| \le \mathbb{E}[|X_1 X_2|] \le \sqrt{\mathbb{E}[X_1^2] \mathbb{E}[X_2^2]}$$ La seconda disuguaglianza è la versione della disuguaglianza di Cauchy-Schwarz.
![[Pasted image 20250414090437.png]]
**Sottotitolo: Conseguenza Importante**

Una delle conseguenze di questa disuguaglianza è che se $X_1$ e $X_2$ hanno un momento secondo finito, il loro prodotto $X_1 X_2$ ha momento primo finito. In altre parole, se $X_1, X_2 \in L^2$, allora $X_1 X_2 \in L^1$.

**Sottotitolo: Anticipazione sulla Covarianza**

Il professore anticipa che questa disuguaglianza sarà ritrovata in una forma riscritta quando si parlerà di covarianza.

**Sottotitolo: Dimostrazione (Cenni)**

La dimostrazione della disuguaglianza di Cauchy-Schwarz si basa sul considerare una variabile aleatoria positiva e sfruttare la linearità del valore atteso.

Si fissa $A$ e $B$ e si considera il quadrato $(AX_1 + BX_2)^2$. Questa è una variabile aleatoria positiva, quindi il suo valore atteso è maggiore o uguale a zero: $$\mathbb{E}[(AX_1 + BX_2)^2] \ge 0$$ Sviluppando il quadrato e usando la linearità del valore atteso si ottiene: $$A^2 \mathbb{E}[X_1^2] + B^2 \mathbb{E}[X_2^2] + 2AB \mathbb{E}[X_1 X_2] \ge 0$$ Questa espressione è una forma quadratica in $A$ e $B$ che può essere scritta come $\mathbf{v}^T C \mathbf{v} \ge 0$, dove $\mathbf{v} = \begin{pmatrix} A \ B \end{pmatrix}$ e $C = \begin{pmatrix} \mathbb{E}[X_1^2] & \mathbb{E}[X_1 X_2] \ \mathbb{E}[X_1 X_2] & \mathbb{E}[X_2^2] \end{pmatrix}$.

Poiché questa forma quadratica è sempre maggiore o uguale a zero, la matrice $C$ è semidefinita positiva, e quindi il suo determinante è maggiore o uguale a zero: $$\det(C) = \mathbb{E}[X_1^2] \mathbb{E}[X_2^2] - (\mathbb{E}[X_1 X_2])^2 \ge 0$$ Da cui si ricava: $$(\mathbb{E}[X_1 X_2])^2 \le \mathbb{E}[X_1^2] \mathbb{E}[X_2^2]$$ Prendendo la radice quadrata di entrambi i membri si ottiene la tesi (in modulo): $$|\mathbb{E}[X_1 X_2]| \le \sqrt{\mathbb{E}[X_1^2] \mathbb{E}[X_2^2]}$$
![[Pasted image 20250414091513.png]]
## **Introduzione all'Indipendenza di Variabili Aleatorie**

**Sottotitolo: Definizione di Indipendenza per Famiglie di Sigma Algebre**

Il professore introduce il nuovo argomento dell'indipendenza di variabili aleatorie partendo dalla definizione di indipendenza per famiglie di sigma algebre.

Consideriamo una famiglia di sotto sigma algebre ${ \mathcal{G}_i }_{i \in I}$ di una sigma algebra madre $\mathcal{F}$ su cui è definita una misura di probabilità $\mathbb{P}$.

Queste sigma algebre sono dette **indipendenti** se per ogni successione finita di indici distinti $j_1, j_2, \dots, j_k$ contenuti in $I$ (cioè, per ogni $k \ge 1$ e $j_1, \dots, j_k \in I$, con $j_r \neq j_s$ per $r \neq s$) e per ogni scelta di eventi $B_{j_1} \in \mathcal{G}_{j_1}, B_{j_2} \in \mathcal{G}_{j_2}, \dots, B_{j_k} \in \mathcal{G}_{j_k}$, si ha: $$\mathbb{P}\left( \bigcap_{r=1}^{k} B_{j_r} \right) = \prod_{r=1}^{k} \mathbb{P}(B_{j_r})$$
![[Pasted image 20250414092043.png]]
**Sottotitolo: Confronto con l'Indipendenza di Eventi**

La differenza con la definizione di indipendenza di eventi è che in quel caso si considera una famiglia di eventi, mentre qui si considera una famiglia di sigma algebre. Per verificare l'indipendenza di sigma algebre, è necessario considerare tutte le possibili scelte di eventi, uno da ciascuna sigma algebra nella sottofamiglia considerata.

**Sottotitolo: Esercizio Mentale**

Il professore propone un esercizio mentale per confrontare le due definizioni.

**Sottotitolo: Caso Particolare: Due Eventi**

Consideriamo il caso in cui l'insieme degli indici $I$ è costituito solo da due elementi, $I = \set{1, 2}$. Siano $\mathcal{G}_1 = \sigma(B_1)$ la sigma algebra generata da un evento $B_1$ e $\mathcal{G}_2 = \sigma(B_2)$ la sigma algebra generata da un evento $B_2$.

Ricordiamo che $\sigma(B_1) = \set{ \emptyset, B_1, B_1^c, \Omega }$ e $\sigma(B_2) = \set{ \emptyset, B_2, B_2^c, \Omega }$.

Verificare che $B_1$ e $B_2$ sono indipendenti (nel senso di $\mathbb{P}(B_1 \cap B_2) = \mathbb{P}(B_1) \mathbb{P}(B_2)$) è del tutto equivalente a dire che le sigma algebre $\mathcal{G}_1$ e $\mathcal{G}_2$ sono indipendenti. Questo si dimostra considerando tutte le possibili coppie di eventi, uno da $\mathcal{G}_1$ e uno da $\mathcal{G}_2$, e verificando la condizione di fattorizzazione della probabilità dell'intersezione.
![[Pasted image 20250414092408.png]]
**Sottotitolo: Generalizzazione a più di Due Oggetti**

La definizione più generale di indipendenza per sigma algebre è introdotta per poter trattare l'indipendenza di oggetti più complessi di semplici eventi.

**Sottotitolo: Esercizio di Ripasso sull'Indipendenza di Eventi**

Il professore ricorda un esercizio svolto in precedenza: se $A$ e $B$ sono eventi indipendenti, allora anche $A$ e $B^c$, $A^c$ e $B$, $A^c$ e $B^c$ sono indipendenti. Questo può essere verificato come esercizio utilizzando la definizione di indipendenza di sigma algebre nel caso di due eventi.

## **Indipendenza di Variabili Aleatorie**

**Sottotitolo: Definizione della Sigma Algebra Generata da una Variabile Aleatoria**

Sia $X$ una variabile aleatoria definita sullo spazio di probabilità $(\Omega, \mathcal{F}, \mathbb{P})$ a valori in uno spazio misurabile $(E, \mathcal{E})$. La **sigma algebra generata da $X$**, denotata con $\sigma(X)$, è la sigma algebra generata dalle controimmagini degli insiemi misurabili di $E$ sotto $X$: $$\sigma(X) = { X^{-1}(D) : D \in \mathcal{E} }$$ $X^{-1}(D) = { \omega \in \Omega : X(\omega) \in D }$ è un evento in $\mathcal{F}$ poiché $X$ è una variabile aleatoria. In generale, $\sigma(X) \subseteq \mathcal{F}$, e può essere strettamente contenuta in $\mathcal{F}$ (ad esempio, se $X$ è costante, $\sigma(X)$ è la sigma algebra banale ${ \emptyset, \Omega }$).

**Sottotitolo: Definizione di Indipendenza per Variabili Aleatorie**

Siano $X_1, X_2, \dots, X_n$ variabili aleatorie, dove $X_i$ è definita su $(\Omega, \mathcal{F}, \mathbb{P})$ e a valori in $(E_i, \mathcal{E}_i)$. Le variabili aleatorie $X_1, X_2, \dots, X_n$ sono dette **indipendenti** se per ogni scelta di insiemi misurabili $\forall B_1 \in \mathcal{E}_1, B_2 \in \mathcal{E}_2, \dots, B_n \in \mathcal{E}_n$, si ha: $$\mathbb{P}(X_1 \in B_1, X_2 \in B_2, \dots, X_n \in B_n) = \mathbb{P}(X_1 \in B_1) \mathbb{P}(X_2 \in B_2) \dots \mathbb{P}(X_n \in B_n)$$ Utilizzando la notazione per le controimmagini, questa condizione può essere riscritta come: $$\mathbb{P}\left( \bigcap_{i=1}^{n} { X_i \in B_i } \right) = \prod_{i=1}^{n} \mathbb{P}(X_i \in B_i)$$ o equivalentemente: $$\mathbb{P}\left( \bigcap_{i=1}^{n} X_i^{-1}(B_i) \right) = \prod_{i=1}^{n} \mathbb{P}(X_i^{-1}(B_i))$$

**Sottotitolo: Equivalenza con l'Indipendenza delle Sigma Algebre Generate**

L'indipendenza delle variabili aleatorie $X_1, \dots, X_n$ (secondo la definizione appena data) è equivalente all'indipendenza delle sigma algebre generate $\sigma(X_1), \sigma(X_2), \dots, \sigma(X_n)$. Questo perché l'evento ${ X_i \in B_i }$ è proprio un elemento della sigma algebra generata da $X_i$. Quindi, la definizione di indipendenza per variabili aleatorie è un caso particolare della definizione più generale di indipendenza per sigma algebre.
![[Pasted image 20250414092657.png]]
**Sottotitolo: Osservazione sull'Indipendenza di Sottoinsiemi**

Se $X_1, X_2, X_3$ sono variabili aleatorie indipendenti, allora anche $X_1$ e $X_2$ sono indipendenti. Questo può essere visto considerando $B_1 \in \mathcal{E}_1$ e $B_2 \in \mathcal{E}_2$. Allora: $$\mathbb{P}(X_1 \in B_1, X_2 \in B_2) = \mathbb{P}(X_1 \in B_1, X_2 \in B_2, X_3 \in \Omega)$$ Poiché $X_1, X_2, X_3$ sono indipendenti e $X_3 \in \Omega$ è un evento con probabilità 1, si ha: $$\mathbb{P}(X_1 \in B_1, X_2 \in B_2, X_3 \in \Omega) = \mathbb{P}(X_1 \in B_1) \mathbb{P}(X_2 \in B_2) \mathbb{P}(X_3 \in \Omega) = \mathbb{P}(X_1 \in B_1) \mathbb{P}(X_2 \in B_2) \cdot 1$$ Quindi $X_1$ e $X_2$ sono indipendenti. Questa proprietà si generalizza a un numero arbitrario di variabili indipendenti: ogni sottoinsieme di variabili indipendenti è anch'esso indipendente.
![[Pasted image 20250414094028.png]]
**Sottotitolo: Natura degli Spazi di Arrivo**

Il professore sottolinea che gli spazi di arrivo delle variabili aleatorie non devono necessariamente essere $\mathbb{R}$. Si possono avere variabili a valori in $\mathbb{R}^n$ (vettori aleatori) o in spazi diversi.

## **Teoremi sull'Indipendenza**

**Sottotitolo: Teorema sulle P-Classi**

**Enunciato (senza dimostrazione)**: Siano ${ \mathcal{G}_i }_{i \in I}$ una famiglia di sigma algebre e ${ \mathcal{C}_i }_{i \in I}$ una famiglia di P-classi sugli spazi di arrivo corrispondenti, tali che ogni $\mathcal{C}_i$ contenga lo spazio totale e generi la sigma algebra $\mathcal{G}_i$ (cioè, $\sigma(\mathcal{C}_i) = \mathcal{G}_i$). Se per ogni successione finita di indici distinti $j_1, \dots, j_k \in I$ e per ogni scelta di insiemi $B_{j_1} \in \mathcal{C}_{j_1}, \dots, B_{j_k} \in \mathcal{C}_{j_k}$, si ha: $$\mathbb{P}\left( \bigcap_{r=1}^{k} B_{j_r} \right) = \prod_{r=1}^{k} \mathbb{P}(B_{j_r})$$ allora le sigma algebre ${ \mathcal{G}_i }_{i \in I}$ sono indipendenti.
![[Pasted image 20250414094330.png]]
**Commento:** Questo teorema fornisce un criterio più semplice per verificare l'indipendenza di sigma algebre, in quanto è sufficiente controllare la fattorizzazione della probabilità solo per gli elementi di P-classi che generano le sigma algebre, anziché per tutti gli elementi delle sigma algebre stesse. Questo è particolarmente utile nel caso di variabili aleatorie.

**Sottotitolo: Teorema sul Valore Atteso di Funzioni di Variabili Indipendenti**

**Teorema (senza dimostrazione)**: Siano $X_1, \dots, X_n$ variabili aleatorie indipendenti, dove $X_i$ è a valori in $(E_i, \mathcal{E}_i)$. Allora le seguenti proprietà sono equivalenti:

1. Le variabili aleatorie $X_1, \dots, X_n$ sono indipendenti.
2. Per ogni scelta di funzioni misurabili e limitate $g_i: (E_i, \mathcal{E}_i) \to (\mathbb{R}, \mathcal{B}(\mathbb{R}))$, si ha: $$\mathbb{E}[g_1(X_1) g_2(X_2) \dots g_n(X_n)] = \mathbb{E}[g_1(X_1)] \mathbb{E}[g_2(X_2)] \dots \mathbb{E}[g_n(X_n)]$$
3. Esiste una collezione di P-classi $\mathcal{C}_i$ negli spazi di arrivo $(E_i, \mathcal{E}_i)$ tali che ogni $\mathcal{C}_i$ contiene $\Omega$ (anche se il professore nota in che questa condizione potrebbe non essere strettamente necessaria in generale per la definizione di P-classe, ma è rilevante in questo contesto) e genera la sigma algebra $\mathcal{E}_i$. In tal caso, le variabili aleatorie $X_1, \dots, X_n$ sono indipendenti se e solo se per ogni scelta di $B_i \in \mathcal{C}_i$, si ha: $$\mathbb{P}(X_1 \in B_1, X_2 \in B_2, \dots, X_n \in B_n) = \mathbb{P}(X_1 \in B_1) \mathbb{P}(X_2 \in B_2) \dots \mathbb{P}(X_n \in B_n)$$ In altre parole, l'indipendenza delle sigma algebre generate dalle variabili aleatorie può essere verificata controllando la fattorizzazione della probabilità solo sugli elementi di queste P-classi generatrici. Questo fornisce un **criterio più comodo per verificare l'indipendenza** poiché le P-cla ssi sono spesso più semplici da controllare rispetto all'intera sigma algebra. Un esempio menzionato è nel caso di variabili aleatorie reali, dove la P-classe delle semirette chiuse $(-\infty, x]$ (unite eventualmente con $\mathbb{R}$) genera i boreliani di $\mathbb{R}$.

Questo terzo punto è strettamente legato alla verifica pratica dell'indipendenza, specialmente quando gli spazi di arrivo hanno una struttura complessa. Controllare la fattorizzazione per tutti gli insiemi misurabili potrebbe essere difficile, mentre restringerla a una P-classe generatrice può semplificare il compito.

![[Pasted image 20250414095211.png]]
**Commento:** Questo teorema stabilisce che l'indipendenza implica la fattorizzazione del valore atteso di prodotti di funzioni delle singole variabili. Viceversa, se questa fattorizzazione vale per tutte le funzioni misurabili e limitate, allora le variabili sono indipendenti. Un caso particolare importante si ottiene scegliendo le $g_i$ come funzioni indicatrici di insiemi $B_i \in \mathcal{E}_i$, che riconduce alla definizione di indipendenza.

**Sottotitolo: Corollario per Variabili Aleatorie Reali e Funzione di Ripartizione**

**Proposizione (Corollario)**: Siano $X_1, \dots, X_n$ variabili aleatorie reali (a valori in $\mathbb{R}$). Esse sono indipendenti se e solo se la funzione di ripartizione congiunta del vettore $(X_1, \dots, X_n)$ è uguale al prodotto delle funzioni di ripartizione marginali delle singole variabili.

La funzione di ripartizione congiunta è definita come: $$F_{X_1, \dots, X_n}(x_1, \dots, x_n) = \mathbb{P}(X_1 \le x_1, \dots, X_n \le x_n)$$ dove $x_i \in \mathbb{R}$ per $i = 1, \dots, n$.

La condizione di indipendenza in termini di funzioni di ripartizione è: $$F_{X_1, \dots, X_n}(x_1, \dots, x_n) = F_{X_1}(x_1) F_{X_2}(x_2) \dots F_{X_n}(x_n)$$ dove $F_{X_i}(x_i) = \mathbb{P}(X_i \le x_i)$ è la funzione di ripartizione marginale di $X_i$.

**Dimostrazione (Cenni)**:

- **$(\Rightarrow)$** Se $X_1, \dots, X_n$ sono indipendenti, allora per definizione per gli insiemi $B_i = (-\infty, x_i]$, si ha: $$\mathbb{P}(X_1 \in (-\infty, x_1], \dots, X_n \in (-\infty, x_n]) = \prod_{i=1}^{n} \mathbb{P}(X_i \in (-\infty, x_i])$$ che è esattamente la condizione sulle funzioni di ripartizione.
    
- **$(\Leftarrow)$** Supponiamo che la funzione di ripartizione congiunta sia il prodotto delle marginali. Per dimostrare l'indipendenza, dobbiamo mostrare che per ogni scelta di insiemi boreliani $B_1, \dots, B_n$, si ha $\mathbb{P}(X_1 \in B_1, \dots, X_n \in B_n) = \prod_{i=1}^{n} \mathbb{P}(X_i \in B_i)$. Si utilizza il teorema sulle P-classi enunciato precedentemente. La classe delle semirette $(-\infty, x]$ (unita a $\mathbb{R}$) è una P-classe che genera la sigma algebra dei boreliani su $\mathbb{R}$. Poiché la fattorizzazione vale per intersezioni di insiemi di questa forma (per ipotesi sulla funzione di ripartizione), allora per il teorema sulle P-classi, le sigma algebre generate da $X_1, \dots, X_n$ (che contengono tutti gli eventi ${ X_i \in B_i }$ per $B_i$ boreliani) sono indipendenti, e quindi le variabili aleatorie sono indipendenti.
    ![[Pasted image 20250414095503.png]]

**Commento:** Questa proposizione fornisce un criterio pratico per verificare l'indipendenza di variabili aleatorie reali, basato sulle loro funzioni di ripartizione. Ha il vantaggio di valere sia per variabili assolutamente continue che discrete, e in generale per qualsiasi tipo di variabile aleatoria reale.

___

# Indipendenza di Variabili Aleatorie

## Definizione di P-Classi

Per un motivo tecnico, le $\mathcal{P}$-classi devono avere misura totale. In generale, per come sono definite le $\mathcal{P}$-classi, questa condizione non è strettamente necessaria. Tuttavia, per alcuni risultati che si basano sulle $\mathcal{P}$-classi, come l'esempio trattato, è richiesto un requisito leggermente più forte.

## Indipendenza nel Caso Discreto

Siano $X_1, \dots, X_n$ variabili aleatorie discrete con codominio finito o numerabile in $\mathbb{R}$.

**Definizione:** $X_1, \dots, X_n$ sono **indipendenti** se e solo se la densità discreta del vettore $(X_1, \dots, X_n)$ fattorizza. Questo significa che per ogni scelta di $x_1, \dots, x_n \in \mathbb{R}$, vale: $P(X_1 = x_1, \dots, X_n = x_n) = P(X_1 = x_1) \cdot \dots \cdot P(X_n = x_n) = \prod_{i=1}^{n} P(X_i = x_i)$

Questa uguaglianza può essere riscritta esplicitamente come la probabilità che $X_1$ sia uguale a $x_1$ (piccolo), ..., $X_n$ sia uguale a $x_n$ (piccolo) è uguale al prodotto per $i$ che va da $1$ a $n$ della probabilità che $X_i$ sia uguale a $x_i$, per ogni $x_1, \dots, x_n$ opportuni per cui questa espressione abbia senso.
![[Pasted image 20250414095950.png]]
**Importante:** Questa scrittura è valida solo nel caso di variabili aleatorie discrete. Se $X_1, \dots, X_n$ fossero variabili assolutamente continue, si otterrebbe $0 = 0$, sia nel caso di dipendenza che di indipendenza. Per questo motivo, la definizione generale di indipendenza si basa sulla probabilità che il vettore appartenga a un prodotto cartesiano di insiemi, come vedremo in seguito. Nel **caso discreto**, ci si può restringere agli insiemi costituiti da un singolo punto.

## Criterio Generale di Indipendenza per Variabili Reali

Per variabili reali, esiste un criterio di indipendenza che vale in qualunque caso (discreto, continuo, misto). Siano $X_1, \dots, X_n$ variabili aleatorie reali. Esse sono indipendenti se e solo se per ogni $x_1, \dots, x_n \in \mathbb{R}$, si ha: $P(X_1 \le x_1, \dots, X_n \le x_n) = P(X_1 \le x_1) \cdot \dots \cdot P(X_n \le x_n) = \prod_{i=1}^{n} P(X_i \le x_i)$ Questa condizione è equivalente all'indipendenza per variabili reali in generale.

## Intuizione dell'Indipendenza

L'indipendenza di variabili aleatorie è una proprietà che generalizza l'indipendenza di eventi. Dire che $X_1$ e $X_2$ sono indipendenti significa che la conoscenza del valore assunto da una variabile non implica alcuna informazione sulla conoscenza del valore assunto dall'altra.

## Esempio 1: Variabili Dipendenti Deterministamente

Consideriamo una variabile aleatoria $X$ a valori reali e definiamo $X_1 = X$ e $X_2 = X^2$. 
Non facciamo ipotesi specifiche sulla natura di $X$ (discreta, continua, ecc.).

**Affermazione:** $X_1$ e $X_2$ sono dipendenti. Intuitivamente, questo è vero perché $X_2$ è una funzione deterministica di $X_1$. Se conosciamo il valore di $X_1$, conosciamo univocamente il valore di $X_2$. Questa è una forma di dipendenza molto forte, detta **dipendenza deterministica**.

**Verifica stocastica della dipendenza:** Per dimostrare che $X_1$ e $X_2$ non sono indipendenti dal punto di vista stocastico, è sufficiente trovare una coppia di eventi per cui la probabilità dell'intersezione non è uguale al prodotto delle probabilità. Consideriamo gli eventi ${X_1 \le 2}$ e ${X_2 \le 9}$.

La probabilità dell'intersezione è: $P(X_1 \le 2, X_2 \le 9) = P(X \le 2, X^2 \le 9)$ L'evento ${X^2 \le 9}$ è equivalente a ${ -3 \le X \le 3 }$. Quindi: $P(X \le 2, X^2 \le 9) = P(X \le 2, -3 \le X \le 3) = P(-3 \le X \le 2)$

Ora consideriamo il prodotto delle probabilità degli eventi singoli: $P(X_1 \le 2) P(X_2 \le 9) = P(X \le 2) P(X^2 \le 9) = P(X \le 2) P(-3 \le X \le 3)$

In generale, $P(-3 \le X \le 2)$ è diverso da $P(X \le 2) P(-3 \le X \le 3)$. Scegliendo opportunamente la legge di probabilità di $X$, è possibile trovare casi in cui queste due quantità sono diverse. Pertanto, $X_1$ e $X_2$ non sono indipendenti.
![[Pasted image 20250414100512.png]]
## Esempio 2: Variabili Discrete Dipendenti

Consideriamo due variabili aleatorie discrete $X_1$ e $X_2$ con i seguenti possibili valori: $X_1 \in {1, 2}$ e $X_2 \in {0, 1}$. Supponiamo che la distribuzione di probabilità congiunta sia data dalla seguente tabella:

| $X_1 \setminus X_2$ | 0   | 1   |
| :------------------ | :-- | :-- |
| 1                   | 1/2 | 1/4 |
| 2                   | 0   | 1/4 |

Per verificare se $X_1$ e $X_2$ sono indipendenti, controlliamo se $P(X_1 = x_1, X_2 = x_2) = P(X_1 = x_1) P(X_2 = x_2)$ per tutte le coppie $(x_1, x_2)$. Consideriamo il caso $x_1 = 1$ e $x_2 = 0$.

Dalla tabella, $P(X_1 = 1, X_2 = 0) = 1/2$.

Calcoliamo le probabilità marginali: $P(X_1 = 1) = P(X_1 = 1, X_2 = 0) + P(X_1 = 1, X_2 = 1) = 1/2 + 1/4 = 3/4$ $P(X_2 = 0) = P(X_1 = 1, X_2 = 0) + P(X_1 = 2, X_2 = 0) = 1/2 + 0 = 1/2$

| $X_1 \setminus X_2$ | 0     | 1       |           |
| :------------------ | :---- | :------ | --------- |
| 1                   | 1/2   | 1/4     | 1/2 + 1/4 |
| 2                   | 0     | 1/4     | 0+1/4     |
|                     | 1/2+0 | 1/4+1/4 |           |

Ora verifichiamo la condizione di indipendenza: $P(X_1 = 1) P(X_2 = 0) = (3/4) \cdot (1/2) = 3/8$

Poiché $P(X_1 = 1, X_2 = 0) = 1/2 \neq 3/8 = P(X_1 = 1) P(X_2 = 0)$, le variabili aleatorie $X_1$ e $X_2$ non sono indipendenti. Abbiamo trovato almeno una coppia di valori per cui la condizione di fattorizzazione non è soddisfatta.

## Esempio 3: Costruzione di Variabili Discrete Indipendenti con le Stesse Marginali

Consideriamo le stesse marginali di $X_1$ e $X_2$ dell'esempio precedente: $P(X_1 = 1) = 3/4$, $P(X_1 = 2) = 1/4$ $P(X_2 = 0) = 1/2$, $P(X_2 = 1) = 1/2$

Vogliamo costruire due nuove variabili aleatorie discrete, $\tilde X_{1}$ e $\tilde X_{2}$, con queste stesse marginali ma che siano indipendenti. Per l'indipendenza, la probabilità congiunta deve essere il prodotto delle probabilità marginali per ogni coppia di valori:

$P(\tilde X_{1} = 1, \tilde X_{2} = 0) = P(\tilde X_{1} = 1) P(\tilde X_{2} = 0) = (3/4) \cdot (1/2) = 3/8$ $P(\tilde X_{1} = 1, \tilde X_{2} = 1) = P(\tilde X_{1} = 1) P(\tilde X_{2} = 1) = (3/4) \cdot (1/2) = 3/8$ $P(\tilde X_{1} = 2, \tilde X_{2} = 0) = P(\tilde X_{1} = 2) P(\tilde X_{2} = 0) = (1/4) \cdot (1/2) = 1/8$ $P(\tilde X_{1} = 2, \tilde X_{2} = 1) = P(\tilde X_{1} = 2) P(\tilde X_{2} = 1) = (1/4) \cdot (1/2) = 1/8$

La tabella di probabilità congiunta per $\tilde X_{1}$ e $\tilde X_{2}$ è quindi:

| $\tilde X_{1} \setminus \tilde X_{2}$ | 0   | 1   |     |
| :------------------------------------ | :-- | :-- | --- |
| 1                                     | 3/8 | 3/8 | 1/2 |
| 2                                     | 1/8 | 1/8 | 1/2 |
|                                       | 3/4 | 1/4 |     |

Verifichiamo che le marginali siano corrette: $P(\tilde X_{1} = 1) = 3/8 + 3/8 = 6/8 = 3/4$ $P(\tilde X_{1} = 2) = 1/8 + 1/8 = 2/8 = 1/4$ $P(\tilde X_{2} = 0) = 3/8 + 1/8 = 4/8 = 1/2$ $P(\tilde X_{2} = 1) = 3/8 + 1/8 = 4/8 = 1/2$

Le marginali di $\tilde X_{1}$ sono uguali alle marginali di $X_1$, e le marginali di $\tilde X_{2}$ sono uguali alle marginali di $X_2$. Tuttavia, le leggi congiunte $(X_1, X_2)$ e $(\tilde X_{1}, \tilde X_{2})$ sono diverse, poiché una coppia di variabili è dipendente e l'altra è indipendente.
![[Pasted image 20250414101251.png]]
**Osservazione:** Non si può affermare che $X_1 = \tilde X_{1}$ con probabilità 1, in quanto non è stato definito lo spazio $\Omega$ su cui sono definite queste variabili aleatorie. Potrebbero persino essere definite su spazi di probabilità diversi, rendendo priva di significato l'espressione $P(X_1 = \tilde X_{1})$.

## Indipendenza e Leggi Immagine

Consideriamo due variabili aleatorie $X_1$ e $X_2$ indipendenti. Sia $B_1$ un boreliano nello spazio di arrivo di $X_1$ e $B_2$ un boreliano nello spazio di arrivo di $X_2$. Allora, l'evento ${X_1 \in B_1 \text{ e } X_2 \in B_2}$ corrisponde al fatto che la coppia $(X_1, X_2)$ appartiene al prodotto cartesiano $B_1 \times B_2$ nello spazio prodotto.

La probabilità di questo evento è data dalla legge immagine della variabile aleatoria vettoriale $(X_1, X_2)$ calcolata sul boreliano $B_1 \times B_2$. Per l'indipendenza, questa probabilità è uguale al prodotto delle probabilità marginali: $P(X_1 \in B_1, X_2 \in B_2) = P(X_1 \in B_1) P(X_2 \in B_2)$

In termini di leggi immagine, se $\mu_1$ è la legge immagine di $X_1$ e $\mu_2$ è la legge immagine di $X_2$, e $\mu_{12}$ è la legge immagine di $(X_1, X_2)$, allora l'indipendenza implica che per ogni coppia di boreliani $B_1$ e $B_2$, si ha: $\mu_{12}(B_1 \times B_2) = \mu_1(B_1) \mu_2(B_2)$
![[Pasted image 20250414101621.png]]
Questo suggerisce che la proprietà di indipendenza può essere vista nello spazio immagine, confrontando la legge congiunta con il prodotto delle leggi marginali.

**Attenzione:** Se si conoscono solo le leggi immagine marginali $\mu_1$ e $\mu_2$, in generale non è possibile ricostruire univocamente la legge immagine congiunta $\mu_{12}$ senza l'ulteriore ipotesi di indipendenza. Tuttavia, se si assume l'indipendenza, la legge congiunta è univocamente determinata dal prodotto delle marginali. L'esempio discreto precedente illustra come, a partire dalle leggi marginali, si possa costruire una legge congiunta che soddisfi l'indipendenza.

La motivazione per questo approccio è che spesso si lavora nello spazio di arrivo e si hanno informazioni sulle marginali, e si vuole costruire o studiare misure di probabilità sul prodotto di spazi.

___
# Misure Prodotto e Integrazione su Spazi Prodotto

## Introduzione alle Misure Prodotto

Il professore introduce il concetto di misure prodotto come generalizzazione di idee già incontrate, in particolare nel contesto delle misure di probabilità. Si anticipa che questo argomento è fondamentale e si lega al concetto di indipendenza. L'obiettivo è definire una misura su uno spazio prodotto a partire da misure definite sugli spazi componenti. Oltre alle misure di probabilità, si applicherà questo concetto alla misura di Lebesgue.

## Costruzione dello Spazio Prodotto e della Sigma Algebra Prodotto

### Spazio Prodotto

Dati due spazi misurabili $(E_1, \mathcal{E}_1)$ e $(E_2, \mathcal{E}_2)$, lo **spazio prodotto** è definito come l'insieme delle coppie: $E = E_1 \times E_2 = {(e_1, e_2) \mid e_1 \in E_1, e_2 \in E_2}$. Tipicamente, $E_1$ e $E_2$ saranno $\mathbb{R}$ con la sigma algebra dei Boreliani $\mathcal{B}(\mathbb{R})$, quindi lo spazio prodotto sarà $\mathbb{R}^2$.

### Sigma Algebra Prodotto

Per definire una misura sullo spazio prodotto, è necessario dotarlo di una sigma algebra. La **sigma algebra prodotto** $\mathcal{E}_1 \otimes \mathcal{E}_2$ è definita come la più piccola sigma algebra su $E_1 \times E_2$ che contiene i **rettangoli misurabili** della forma $A_1 \times A_2$, dove $A_1 \in \mathcal{E}_1$ e $A_2 \in \mathcal{E}_2$.

In altre parole: $\mathcal{E}_1 \otimes \mathcal{E}_2 = \sigma({A_1 \times A_2 \mid A_1 \in \mathcal{E}_1, A_2 \in \mathcal{E}_2})$.
![[Pasted image 20250414102036.png]]
Questa costruzione imita il modo in cui si definiscono i Boreliani di $\mathbb{R}^2$ a partire dai Boreliani di $\mathbb{R}$. Infatti, si ha che $\mathcal{B}(\mathbb{R}) \otimes \mathcal{B}(\mathbb{R}) = \mathcal{B}(\mathbb{R}^2)$. Il professore sottolinea che questa uguaglianza è vera per i Boreliani di $\mathbb{R}$, ma potrebbe non valere in situazioni più generali.
![[Pasted image 20250414102105.png]]
## Costruzione della Misura Prodotto

### Teorema di Esistenza e Unicità della Misura Prodotto

**Teorema:** Siano $(E_1, \mathcal{E}_1, \mu_1)$ e $(E_2, \mathcal{E}_2, \mu_2)$ due spazi misurabili con misure $\sigma$-finite $\mu_1$ e $\mu_2$. Allora esiste un'unica misura $\sigma$-finita $\mu$ sulla sigma algebra prodotto $\mathcal{E}_1 \otimes \mathcal{E}_2$, che indicheremo con $\mu_1 \otimes \mu_2$, tale che per ogni coppia di insiemi misurabili $B_1 \in \mathcal{E}_1$ e $B_2 \in \mathcal{E}_2$, si abbia:

$\qquad (\mu_1 \otimes \mu_2)(B_1 \times B_2) = \mu_1(B_1) \cdot \mu_2(B_2)$.

Questa misura $\mu_1 \otimes \mu_2$ è chiamata **misura prodotto** di $\mu_1$ e $\mu_2$.

Il professore fa un parallelo con la costruzione della misura di Lebesgue, dove si parte dai cuboidi e si estende la misura. La costruzione qui presentata è una versione astratta di quel procedimento.
![[Pasted image 20250414102326.png]]
### Osservazioni sulle Misure di Probabilità

Se $\mu_1$ e $\mu_2$ sono misure di probabilità, allora anche la misura prodotto $\mu_1 \otimes \mu_2$ è una misura di probabilità, poiché $(\mu_1 \otimes \mu_2)(E_1 \times E_2) = \mu_1(E_1) \cdot \mu_2(E_2) = 1 \cdot 1 = 1$.

Il professore accenna al fatto che se si richiedesse solo che una misura sullo spazio prodotto abbia $\mu_1$ e $\mu_2$ come **marginali**, allora tale misura non sarebbe necessariamente unica. Tuttavia, se si richiede che la misura si **fattorizzi** sul prodotto di insiemi misurabili (come nella definizione della misura prodotto), allora l'unicità è garantita.

### Applicazione alla Misura di Lebesgue

Il professore menziona che, oltre alle misure di probabilità, la costruzione della misura prodotto è particolarmente importante per la misura di Lebesgue.

## Funzioni Misurabili sullo Spazio Prodotto

Consideriamo una funzione $H: E_1 \times E_2 \to \mathbb{R}$. Dire che $H$ è **misurabile rispetto alla sigma algebra prodotto** $\mathcal{E}_1 \otimes \mathcal{E}_2$ e ai Boreliani di $\mathbb{R}$ ($\mathcal{B}(\mathbb{R})$) significa che per ogni $B \in \mathcal{B}(\mathbb{R})$, l'insieme $H^{-1}(B) = {(e_1, e_2) \in E_1 \times E_2 \mid H(e_1, e_2) \in B}$ appartiene a $\mathcal{E}_1 \otimes \mathcal{E}_2$.

Il professore usa la notazione $H(e_1, e_2)$ per indicare il valore della funzione in un punto $(e_1, e_2) \in E_1 \times E_2$.
 ![[Pasted image 20250414102624.png]]
## Sezioni di Funzioni Misurabili

### Proposizione 2

**Proposizione:** Sia $H: E_1 \times E_2 \to \mathbb{R}$ una funzione misurabile rispetto alla sigma algebra prodotto $\mathcal{E}_1 \otimes \mathcal{E}_2$ e ai Boreliani di $\mathbb{R}$. Allora:

1. Per ogni $e_1 \in E_1$, la funzione $H_{e_1}: E_2 \to \mathbb{R}$ definita da $H_{e_1}(e_2) = H(e_1, e_2)$ è $\mathcal{E}_2$-misurabile.
2. Per ogni $e_2 \in E_2$, la funzione $H_{e_2}: E_1 \to \mathbb{R}$ definita da $H_{e_2}(e_1) = H(e_1, e_2)$ è $\mathcal{E}_1$-misurabile.

Il professore spiega che questa proposizione afferma che se una funzione è misurabile sul prodotto, allora fissando una delle due variabili, la funzione risultante nell'altra variabile rimane misurabile. Queste funzioni $H_{e_1}$ e $H_{e_2}$ sono chiamate **sezioni** della funzione $H$.

Il professore risponde a una domanda dello studente, confermando che se si hanno due funzioni misurabili, la loro composizione è misurabile, anche se precisa che qui si sta usando la misurabilità nella direzione indicata dalla proposizione.
![[Pasted image 20250414102856.png]]
### Importanza per l'Integrazione

Questa proprietà è fondamentale perché permette di dare un senso all'integrale parziale. Ad esempio, si considera l'espressione:

$\qquad \int_{E_2} H(e_1, e_2) , d\mu_2(e_2)$

Perché questo integrale sia ben definito (almeno per funzioni positive), è necessario che, per ogni $e_1$ fissato, la funzione $e_2 \mapsto H(e_1, e_2)$ sia $\mathcal{E}_2$-misurabile, cosa che è garantita dalla Proposizione 2.
![[Pasted image 20250414103439.png]]
## Teorema di Fubini-Tonelli (Caso di Funzioni Positive)

### Teorema

**Teorema:** Siano $(E_1, \mathcal{E}_1, \mu_1)$ e $(E_2, \mathcal{E}_2, \mu_2)$ spazi misurabili con misure $\sigma$-finite e sia $H: E_1 \times E_2 \to [0, +\infty]$ una funzione $\mathcal{E}_1 \otimes \mathcal{E}_2$-misurabile e positiva. Allora:

1. Per quasi ogni $e_1 \in E_1$ (rispetto a $\mu_1$), la funzione $e_2 \mapsto H(e_1, e_2)$ è $\mathcal{E}_2$-integrabile (ovvero $\int_{E_2} H(e_1, e_2) , d\mu_2(e_2) < +\infty$).
2. La funzione $e_1 \mapsto \int_{E_2} H(e_1, e_2) , d\mu_2(e_2)$ è $\mathcal{E}_1$-misurabile su $[0, +\infty]$.
3. Si ha l'uguaglianza:

$\qquad \int_{E_1 \times E_2} H(e_1, e_2) , d(\mu_1 \otimes \mu_2)(e_1, e_2) = \int_{E_1} \left( \int_{E_2} H(e_1, e_2) , d\mu_2(e_2) \right) , d\mu_1(e_1)$.

Analogamente, invertendo l'ordine di integrazione:

1. Per quasi ogni $e_2 \in E_2$ (rispetto a $\mu_2$), la funzione $e_1 \mapsto H(e_1, e_2)$ è $\mathcal{E}_1$-integrabile.
2. La funzione $e_2 \mapsto \int_{E_1} H(e_1, e_2) , d\mu_1(e_1)$ è $\mathcal{E}_2$-misurabile su $[0, +\infty]$.
3. Si ha l'uguaglianza:

$\qquad \int_{E_1 \times E_2} H(e_1, e_2) , d(\mu_1 \otimes \mu_2)(e_1, e_2) = \int_{E_2} \left( \int_{E_1} H(e_1, e_2) , d\mu_1(e_1) \right) , d\mu_2(e_2)$.

Quindi, per una funzione misurabile e positiva, l'integrale sullo spazio prodotto può essere calcolato come un integrale iterato, integrando prima rispetto a una variabile e poi rispetto all'altra, e l'ordine di integrazione non influisce sul risultato.

Il professore sottolinea che l'ipotesi che $H$ sia positiva è cruciale per garantire che la funzione integranda interna sia misurabile e che gli integrali siano ben definiti (anche se possono essere $+\infty$). Inoltre, parte dell'enunciato è che se l'integrale doppio è finito, allora anche l'integrale iterato è finito, e viceversa.

### Connessione con l'Integrale Multiplo

Il professore fa un collegamento con l'integrale multiplo visto in Analisi II, dove tipicamente si calcola l'integrale di una funzione su un dominio in $\mathbb{R}^2$ (o $\mathbb{R}^n$) tramite integrazione per sezioni. Il teorema di Fubini-Tonelli generalizza questa idea a spazi misurabili astratti e fornisce una giustificazione rigorosa per il calcolo degli integrali multipli come integrali iterati.

### Prossimi Passi

Il professore conclude anticipando che nella lezione successiva si approfondirà il teorema di Fubini-Tonelli per funzioni non necessariamente positive e si esplorerà la connessione con l'indipendenza. Si specifica che gli argomenti trattati fino a questo punto potrebbero rientrare nel programma del prossimo compitino. Le esercitazioni sono considerate fondamentali per la comprensione di questi concetti.



#### References



