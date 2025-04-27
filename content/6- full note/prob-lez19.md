---
title: "prob-lez19"
---

2025-04-24 12:49

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[probabilità]]   [[sbobine]]

## prob-lez19


**Distribuzione Gaussiana Multivariata: Estensione e Proprietà**

In questa lezione si estende il concetto di variabile aleatoria Gaussiana, precedentemente visto per il caso unidimensionale, ai vettori aleatori (caso multivariato, con dimensione $n \ge 2$). Lo strumento principale utilizzato per questa estensione è la funzione caratteristica, data la sua definizione e le sue proprietà viste in precedenza.

**Richiamo sulla Gaussiana Unidimensionale**

Una variabile aleatoria scalare $X_J$ ha legge Gaussiana con media $\mu_J$ e varianza $\sigma_J^2$ (indicata con $X_J \sim \mathcal{N}(\mu_J, \sigma_J^2)$) se:

- È una variabile aleatoria **assolutamente continua** con densità di probabilità: $$f(x) = \frac{1}{\sqrt{2\pi\sigma_J^2}} e^{-\frac{(x-\mu_J)^2}{2\sigma_J^2}}$$. Questo vale se $\sigma_J^2 > 0$.
- Ha funzione caratteristica: $$\phi_{X_J}(t) = E[e^{itX_J}] = e^{i\mu_J t - \frac{1}{2}\sigma_J^2 t^2}$$.

È stato notato che la famiglia delle Gaussiane univariate è una famiglia di scala-posizione, ottenuta da una Gaussiana standard $\mathcal{N}(0, 1)$ tramite $X_J = \mu_J + \sigma_J Z_0$, dove $Z_0 \sim \mathcal{N}(0, 1)$. Inoltre, una combinazione lineare di Gaussiane indipendenti è ancora una Gaussiana.
![[Pasted image 20250424132124.png]]

**Il Caso Degenerato ($\sigma^2 = 0$)**

Si può adottare la convenzione che una variabile aleatoria $X$ con "legge Gaussiana degenere" con varianza zero ($\sigma^2=0$) e media $\mu$ sia semplicemente una **costante** uguale a $\mu$ con probabilità 1. Questa è una convenzione utile ma "pericolosa", perché una costante non è assolutamente continua e quindi non ha una densità nel senso usuale. Tuttavia, la sua **funzione caratteristica** è ben definita: $\phi_X(t) = E[e^{itX}] = E[e^{it\mu}] = e^{it\mu}$. La convenzione è giustificata dal fatto che la funzione caratteristica della Gaussiana unidimensionale $\phi_{X_J}(t) = e^{i\mu_J t - \frac{1}{2}\sigma_J^2 t^2}$, se calcolata per $\sigma_J^2 = 0$, produce esattamente $e^{i\mu_J t}$, che è la funzione caratteristica di una costante pari a $\mu_J$. Quindi, a livello di funzione caratteristica, il caso degenere è incluso naturalmente.
![[Pasted image 20250424132329.png]]
**Passaggio 1: Obiettivo - Estendere il Concetto a Vettori Aleatori ($n \ge 2$)**

L'obiettivo è estendere il concetto di variabile Gaussiana ai vettori aleatori n-dimensionali. Questo richiede l'uso delle funzioni caratteristiche per vettori aleatori.

**Passaggio 2: Un Primo Tentativo - Vettore di Componenti Gaussiane Indipendenti**

Si considera un vettore $\mathbf{z} = (Z_1, ..., Z_n)^T$, dove $Z_j$ sono variabili aleatorie indipendenti, ognuna distribuita come una Gaussiana con media 0 e varianza $\sigma_j^2$ ($Z_j \sim \mathcal{N}(0, \sigma_j^2)$). Si ammette che alcune $\sigma_j^2$ possano essere zero (caso degenere, $Z_j=0$ con probabilità 1). Questo vettore è chiamato un "vettore Gaussiano" in prima battuta. Questa definizione iniziale è limitata perché copre solo vettori le cui componenti sono indipendenti. Non è detto che un tale vettore sia assolutamente continuo, specialmente se alcune $\sigma_j^2 = 0$.

In questa formulazione iniziale, è fondamentale notare che si tratta sostanzialmente di una **semplice notazione** e non di una generalizzazione profonda del concetto. Questo approccio descrive un caso molto specifico: un vettore aleatorio le cui **componenti marginali sono tutte Gaussiane e sono indipendenti**. L'obiettivo più ambizioso è invece riuscire a definire vettori Gaussiani in cui le **componenti non siano necessariamente indipendenti**.

Per convenzione, anche in questo contesto multidimensionale e per componenti indipendenti, si ammette la possibilità che alcune delle varianze $\sigma_j^2$ possano essere **uguali a zero**. Come nel caso unidimensionale degenere, una variabile Gaussiana con varianza zero e media nulla ($Z_j \sim \mathcal{N}(0, 0)$) intende semplicemente una variabile aleatoria che è una **costante concentrata in zero** con probabilità 1.

Questo primo tentativo di definizione può essere espresso formalmente usando la notazione $\mathbf{z} \sim \mathcal{N}(\mathbf{0}, D)$, dove $\mathbf{0}$ è il vettore nullo (rappresentando le medie nulle) e $D$ è una **matrice diagonale**. Sulla diagonale di questa matrice $D$ si trovano le varianze individuali delle componenti $\sigma_j^2$, mentre tutti gli elementi fuori dalla diagonale sono zero.

La possibilità che alcune varianze $\sigma_j^2$ siano zero ha una conseguenza diretta e importante: **il vettore $\mathbf{z}$, anche se le sue componenti sono indipendenti, non è necessariamente assolutamente continuo**. Questo accade perché una variabile costante (con varianza zero) non è assolutamente continua e non possiede una densità di probabilità nel senso usuale.

Questo punto evidenzia una limitazione dell'approccio basato sulla densità di probabilità per definire il vettore Gaussiano generale. Se si desidera la massima generalità, includendo i casi degeneri con varianza zero, **non è conveniente partire dalla definizione tramite densità**, poiché questa non coprirebbe adeguatamente tali scenari. Questa limitazione giustifica l'adozione di un altro strumento matematico per la definizione generale del vettore Gaussiano multivariato: l'uso delle **funzioni caratteristiche**, le quali rimangono ben definite anche quando la varianza è zero. La funzione caratteristica per questo vettore di componenti indipendenti con media zero si calcola facilmente come il prodotto delle funzioni caratteristiche individuali e ha la forma $e^{- \frac{1}{2} \sum_{j=1}^n \sigma_j^2 t_j^2}$. Questa si può riscrivere usando la matrice diagonale $D$ come $e^{- \frac{1}{2} \mathbf{t}^T D \mathbf{t}}$.
![[Pasted image 20250424132543.png]]

**Passaggio 3: Funzione Caratteristica del Vettore di Componenti Indipendenti**

La funzione caratteristica del vettore $\mathbf{z}$ calcolata in un vettore $\mathbf{t} = (t_1, ..., t_n)^T \in \mathbb{R}^n$ è data da: $\phi_{\mathbf{z}}(\mathbf{t}) = E[e^{i\mathbf{t}^T\mathbf{z}}]$ Poiché $\mathbf{z}$ ha componenti indipendenti, l'aspettazione del prodotto si fattorizza nel prodotto delle aspettazioni: $E[e^{i\mathbf{t}^T\mathbf{z}}] = E[e^{i \sum_{j=1}^n t_j Z_j}] = E[\prod_{j=1}^n e^{i t_j Z_j}] = \prod_{j=1}^n E[e^{i t_j Z_j}]$ Ognuno dei fattori nell'ultimo prodotto è la funzione caratteristica della variabile unidimensionale $Z_j$, valutata in $t_j$. Dato che $Z_j \sim \mathcal{N}(0, \sigma_j^2)$, la sua funzione caratteristica è $e^{-\frac{1}{2}\sigma_j^2 t_j^2}$. Quindi, la funzione caratteristica di $\mathbf{z}$ è: $\phi_{\mathbf{z}}(\mathbf{t}) = \prod_{j=1}^n e^{-\frac{1}{2}\sigma_j^2 t_j^2} = e^{\sum_{j=1}^n -\frac{1}{2}\sigma_j^2 t_j^2} = e^{-\frac{1}{2} \sum_{j=1}^n \sigma_j^2 t_j^2}$ Questa somma nell'esponente può essere scritta in forma matriciale usando la matrice diagonale $\mathbf{D}$ con $\sigma_j^2$ sulla diagonale principale e zero altrove. $\sum_{j=1}^n \sigma_j^2 t_j^2 = \mathbf{t}^T \mathbf{D} \mathbf{t}$ Quindi, la funzione caratteristica è: $\phi_{\mathbf{z}}(\mathbf{t}) = e^{-\frac{1}{2} \mathbf{t}^T \mathbf{D} \mathbf{t}}$ Questa forma vale anche quando alcune $\sigma_j^2 = 0$.
![[Pasted image 20250424134126.png]]
**Passaggio 4: Matrici Simmetriche e Semidefinite Positive**

Una matrice $n \times n$ simmetrica e semidefinita positiva, indicata con $\boldsymbol{\Sigma}$, possiede la proprietà fondamentale di essere **diagonalizzabile** tramite una matrice ortonormale $\mathbf{O}$. Questo significa che esiste una matrice ortonormale $\mathbf{O}$ tale che: $\mathbf{O}^T \boldsymbol{\Sigma} \mathbf{O} = \mathbf{D}$ dove $\mathbf{D}$ è una matrice diagonale i cui elementi sulla diagonale sono gli **autovalori** di $\boldsymbol{\Sigma}$. Poiché $\boldsymbol{\Sigma}$ è semidefinita positiva, i suoi autovalori sono maggiori o uguali a zero ($\lambda_i \ge 0$). Si possono indicare questi autovalori come $\lambda_i$ (o $\sigma_i^2$ nel contesto delle varianze). Dalla relazione di diagonalizzazione si ottiene anche $\boldsymbol{\Sigma} = \mathbf{O} \mathbf{D} \mathbf{O}^T$, poiché $\mathbf{O}^T \mathbf{O} = \mathbf{O} \mathbf{O}^T = \mathbf{I}$ (matrice identità) per matrici ortonormali.
![[Pasted image 20250424134348.png]]
**Passaggio 5: Costruzione di un Vettore Gaussiano Generale**

Si definisce un vettore aleatorio $\mathbf{x}$ tramite una **trasformazione affine** di un vettore di Gaussiane indipendenti (come in Passaggio 2). Si prende un vettore $\boldsymbol{\mu} \in \mathbb{R}^n$, una matrice simmetrica e semidefinita positiva $\boldsymbol{\Sigma}$, si diagonalizza $\boldsymbol{\Sigma}$ per trovare $\mathbf{O}$ e $\mathbf{D}$ (con gli autovalori $\lambda_j$ sulla diagonale di $\mathbf{D}$). Si costruisce il vettore $\mathbf{z}$ con componenti $Z_j$ indipendenti, $Z_j \sim \mathcal{N}(0, \lambda_j)$. Si definisce $\mathbf{x}$ come: $\mathbf{x} = \boldsymbol{\mu} + \mathbf{O} \mathbf{z}$ Questo è un vettore aleatorio poiché $\mathbf{z}$ è aleatorio e $\boldsymbol{\mu}$ e $\mathbf{O}$ sono costanti.

**Passaggio 6: Proposizione - Funzione Caratteristica del Vettore Costruito**

**Proposizione:** La funzione caratteristica del vettore $\mathbf{x} = \boldsymbol{\mu} + \mathbf{O} \mathbf{z}$ (costruito come sopra, dove $\mathbf{z}$ ha componenti $Z_j \sim \mathcal{N}(0, \lambda_j)$ indipendenti e $\lambda_j$ sono gli autovalori di $\boldsymbol{\Sigma}$) è data da: $\phi_{\mathbf{x}}(\mathbf{t}) = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$
![[Pasted image 20250424134406.png]]
**Dimostrazione (della Proposizione)** Si usa la proprietà della funzione caratteristica per trasformazioni affini: per un vettore aleatorio $\mathbf{y}$ e costanti matriciali $\mathbf{A}$ e vettoriali $\mathbf{b}$, la funzione caratteristica di $\mathbf{A}\mathbf{y} + \mathbf{b}$ è $\phi_{\mathbf{A}\mathbf{y} + \mathbf{b}}(\mathbf{t}) = e^{i \mathbf{t}^T \mathbf{b}} \phi_{\mathbf{y}}(\mathbf{A}^T \mathbf{t})$. Nel nostro caso, $\mathbf{x} = \mathbf{O}\mathbf{z} + \boldsymbol{\mu}$. Quindi $\mathbf{A} = \mathbf{O}$ e $\mathbf{b} = \boldsymbol{\mu}$. $\phi_{\mathbf{x}}(\mathbf{t}) = \phi_{\mathbf{O}\mathbf{z} + \boldsymbol{\mu}}(\mathbf{t}) = e^{i \mathbf{t}^T \boldsymbol{\mu}} \phi_{\mathbf{z}}(\mathbf{O}^T \mathbf{t})$ Si sostituisce la forma della funzione caratteristica di $\mathbf{z}$ (da Passaggio 3), ricordando che le varianze sulla diagonale di $\mathbf{D}$ sono $\lambda_j$: $\phi_{\mathbf{z}}(\mathbf{t}) = e^{-\frac{1}{2} \mathbf{t}^T \mathbf{D} \mathbf{t}}$ Sostituendo l'argomento $\mathbf{O}^T \mathbf{t}$ al posto di $\mathbf{t}$: $\phi_{\mathbf{z}}(\mathbf{O}^T \mathbf{t}) = e^{-\frac{1}{2} (\mathbf{O}^T \mathbf{t})^T \mathbf{D} (\mathbf{O}^T \mathbf{t})}$ Si semplifica l'argomento dell'esponenziale: $(\mathbf{O}^T \mathbf{t})^T \mathbf{D} (\mathbf{O}^T \mathbf{t}) = \mathbf{t}^T (\mathbf{O}^T)^T \mathbf{D} \mathbf{O}^T \mathbf{t} = \mathbf{t}^T \mathbf{O} \mathbf{D} \mathbf{O}^T \mathbf{t}$ Richiamando la diagonalizzazione $\boldsymbol{\Sigma} = \mathbf{O} \mathbf{D} \mathbf{O}^T$, l'espressione diventa: $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}$ Quindi, la funzione caratteristica di $\mathbf{x}$ è: $\phi_{\mathbf{x}}(\mathbf{t}) = e^{i \mathbf{t}^T \boldsymbol{\mu}} e^{-\frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}} = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$ Questo completa la dimostrazione.
![[Pasted image 20250424144045.png]]
**Significato della Proposizione** Questo risultato dimostra che la funzione nella forma $e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$, per un vettore $\boldsymbol{\mu}$ e una matrice $\boldsymbol{\Sigma}$ simmetrica e semidefinita positiva, **è una funzione caratteristica valida**. Non tutte le funzioni lo sono, anche se soddisfano proprietà minimali.

**Passaggio 7: Definizione Formale di Vettore Gaussiano Multivariato**

**Definizione:** Un vettore aleatorio n-dimensionale $\mathbf{x}$ ha legge Gaussiana con parametri $\boldsymbol{\mu} \in \mathbb{R}^n$ (vettore) e $\boldsymbol{\Sigma}$ ($n \times n$ matrice simmetrica e semidefinita positiva) se la sua funzione caratteristica è: $\phi_{\mathbf{x}}(\mathbf{t}) = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$
![[Pasted image 20250424144130.png]]
**Ben Definizione della Legge Gaussiana Multivariata** Questa definizione è ben posta per due motivi:

1. **Teorema di Unicità:** La legge di una variabile (o vettore) aleatoria è **completamente caratterizzata** dalla sua funzione caratteristica. Se due vettori aleatori hanno la stessa funzione caratteristica, hanno la stessa legge.
2. **Esistenza:** La proposizione precedente (Passaggio 6) dimostra che **esiste almeno un vettore aleatorio** (quello costruito come $\boldsymbol{\mu} + \mathbf{O}\mathbf{z}$) che ha esattamente questa funzione caratteristica.

**Interpretazione della Costruzione** La definizione e la costruzione mostrano che un vettore aleatorio Gaussiano è ottenuto a partire da variabili aleatorie scalari indipendenti Gaussiane (con varianze pari agli autovalori di $\boldsymbol{\Sigma}$) tramite una opportuna **trasformazione lineare affine** (una "frullata opportunamente"). Questa trasformazione consiste in una **rotazione/scalatura** data dalla matrice $\mathbf{O}$ (e dalla scelta delle varianze di $\mathbf{z}$) e una **traslazione** data dal vettore $\boldsymbol{\mu}$. Come nel caso unidimensionale degenere, un vettore Gaussiano multivariato non è necessariamente assolutamente continuo; questo accade se la matrice $\boldsymbol{\Sigma}$ è singolare (ovvero, se alcuni autovalori sono zero).

**Passaggio 8: Proprietà Fondamentale - Chiusura Rispetto a Trasformazioni Affini**

**Proposizione:** Se $\mathbf{x}$ è un vettore Gaussiano $n$-dimensionale con parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$, e $\mathbf{A}$ è una matrice $m \times n$ e $\mathbf{b}$ è un vettore $m$-dimensionale, allora il vettore aleatorio $m$-dimensionale $\mathbf{y} = \mathbf{A}\mathbf{x} + \mathbf{b}$ è ancora un vettore Gaussiano. I suoi parametri sono:

- Vettore medio: $\boldsymbol{\mu}' = \mathbf{A}\boldsymbol{\mu} + \mathbf{b}$
- Matrice di covarianza: $\boldsymbol{\Sigma}' = \mathbf{A}\boldsymbol{\Sigma}\mathbf{A}^T$
![[Pasted image 20250424144616.png]]
Questa proprietà è molto generale, vale anche per matrici $\mathbf{A}$ rettangolari (non necessariamente $n \times n$) e include casi in cui il vettore risultante $\mathbf{y}$ è degenere (ad esempio, se $m < n$ o se $\mathbf{A}$ non ha rango pieno).

**Dimostrazione (della Proprietà di Chiusura)** Si calcola la funzione caratteristica di $\mathbf{y}$: $\phi_{\mathbf{y}}(\mathbf{t}) = E[e^{i \mathbf{t}^T \mathbf{y}}] = E[e^{i \mathbf{t}^T (\mathbf{A}\mathbf{x} + \mathbf{b})}] = E[e^{i \mathbf{t}^T \mathbf{b}} e^{i \mathbf{t}^T \mathbf{A} \mathbf{x}}]$ $= e^{i \mathbf{t}^T \mathbf{b}} E[e^{i (\mathbf{A}^T \mathbf{t})^T \mathbf{x}}]$ L'aspettazione è la funzione caratteristica di $\mathbf{x}$ valutata nel vettore $\mathbf{A}^T \mathbf{t}$. $\phi_{\mathbf{x}}(\boldsymbol{\tau}) = e^{i \boldsymbol{\tau}^T \boldsymbol{\mu} - \frac{1}{2} \boldsymbol{\tau}^T \boldsymbol{\Sigma} \boldsymbol{\tau}}$ con $\boldsymbol{\tau} = \mathbf{A}^T \mathbf{t}$. Quindi: $\phi_{\mathbf{y}}(\mathbf{t}) = e^{i \mathbf{t}^T \mathbf{b}} e^{i (\mathbf{A}^T \mathbf{t})^T \boldsymbol{\mu} - \frac{1}{2} (\mathbf{A}^T \mathbf{t})^T \boldsymbol{\Sigma} (\mathbf{A}^T \mathbf{t})}$ Si semplificano gli esponenti: $(\mathbf{A}^T \mathbf{t})^T \boldsymbol{\mu} = \mathbf{t}^T (\mathbf{A}^T)^T \boldsymbol{\mu} = \mathbf{t}^T \mathbf{A} \boldsymbol{\mu}$ $(\mathbf{A}^T \mathbf{t})^T \boldsymbol{\Sigma} (\mathbf{A}^T \mathbf{t}) = \mathbf{t}^T (\mathbf{A}^T)^T \boldsymbol{\Sigma} \mathbf{A}^T \mathbf{t} = \mathbf{t}^T \mathbf{A} \boldsymbol{\Sigma} \mathbf{A}^T \mathbf{t}$ Sostituendo nell'espressione per $\phi_{\mathbf{y}}(\mathbf{t})$: $\phi_{\mathbf{y}}(\mathbf{t}) = e^{i \mathbf{t}^T \mathbf{b}} e^{i \mathbf{t}^T \mathbf{A} \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T (\mathbf{A} \boldsymbol{\Sigma} \mathbf{A}^T) \mathbf{t}}$ Raccogliendo i termini nell'esponente: $\phi_{\mathbf{y}}(\mathbf{t}) = e^{i (\mathbf{t}^T \mathbf{b} + \mathbf{t}^T \mathbf{A} \boldsymbol{\mu}) - \frac{1}{2} \mathbf{t}^T (\mathbf{A} \boldsymbol{\Sigma} \mathbf{A}^T) \mathbf{t}}$ $\phi_{\mathbf{y}}(\mathbf{t}) = e^{i \mathbf{t}^T (\mathbf{A} \boldsymbol{\mu} + \mathbf{b}) - \frac{1}{2} \mathbf{t}^T (\mathbf{A} \boldsymbol{\Sigma} \mathbf{A}^T) \mathbf{t}}$ Questa funzione caratteristica è esattamente nella forma della definizione di Gaussiana multivariata (Passaggio 7), con nuovi parametri $\boldsymbol{\mu}' = \mathbf{A}\boldsymbol{\mu} + \mathbf{b}$ e $\boldsymbol{\Sigma}' = \mathbf{A}\boldsymbol{\Sigma}\mathbf{A}^T$. Questo dimostra che $\mathbf{y}$ è Gaussiana.
![[Pasted image 20250424144711.png]]
**Passaggio 9: Corollario - Combinazioni Lineari di Componenti**

**Corollario:** Se $\mathbf{x} = (X_1, ..., X_n)^T$ è un vettore Gaussiano $n$-dimensionale con parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$, allora ogni **combinazione lineare** delle sue componenti, $Y = \sum_{j=1}^n a_j X_j + b$, dove $a_j$ e $b$ sono costanti reali, è una variabile aleatoria 

**Gaussiana unidimensionale**.

Questo corollario è un caso particolare della proprietà di chiusura per trasformazioni affini (Passaggio 8). Si considera il caso in cui la matrice $\mathbf{A}$ è un vettore riga $1 \times n$, $\mathbf{a} = (a_1, ..., a_n)$, e $\mathbf{b}$ è uno scalare $b$ (visto come un vettore $1 \times 1$). Allora $\mathbf{y} = \mathbf{A}\mathbf{x} + \mathbf{b}$ diventa lo scalare $Y = \mathbf{a}\mathbf{x} + b = \sum a_j X_j + b$. I parametri della Gaussiana unidimensionale risultante sono:

- Media: $\mu_Y = \mathbf{a}\boldsymbol{\mu} + b = \sum_{j=1}^n a_j \mu_j + b$. Questo si ottiene da $\mathbf{A}\boldsymbol{\mu} + \mathbf{b}$ con $\mathbf{A}=\mathbf{a}$ (vettore riga) e $\mathbf{b}=b$ (scalare). Il prodotto $\mathbf{a}\boldsymbol{\mu}$ è un prodotto scalare.
- Varianza: $\sigma_Y^2 = \mathbf{a}\boldsymbol{\Sigma}\mathbf{a}^T$. Questo si ottiene da $\mathbf{A}\boldsymbol{\Sigma}\mathbf{A}^T$ con $\mathbf{A}=\mathbf{a}$. Il prodotto $\mathbf{a}\boldsymbol{\Sigma}\mathbf{a}^T$ è una forma quadratica. Se $\boldsymbol{\Sigma}$ ha elementi $\Sigma_{ij}$, questa forma quadratica è $\sum_{i=1}^n \sum_{j=1}^n a_i \Sigma_{ij} a_j$.

Questo generalizza il risultato sulla somma di Gaussiane indipendenti al caso di componenti non necessariamente indipendenti. Un caso particolare di combinazione lineare è l'estrazione di una singola componente $X_k$ (scegliendo $a_k=1$, $a_j=0$ per $j \neq k$, $b=0$). Questo implica che le **distribuzioni marginali** di un vettore Gaussiano sono **univariate Gaussiane**.
![[Pasted image 20250424150303.png]]
**Interpretazione dei Parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$**

La proprietà di chiusura rispetto a trasformazioni affini e il corollario sulle combinazioni lineari permettono di interpretare i parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$ nella definizione di Gaussiana multivariata:

- $\boldsymbol{\mu}$ è il **vettore delle medie** delle componenti del vettore Gaussiano. La sua $j$-esima componente $\mu_j$ è la media di $X_j$, $E[X_j] = \mu_j$. (Si può dimostrare questo prendendo $a_j=1$, $a_i=0$ per $i\neq j$, $b=0$ nel corollario, e la media è $\mu_j$).
- $\boldsymbol{\Sigma}$ è la **matrice di covarianza** del vettore Gaussiano. L'elemento $\Sigma_{ij}$ in posizione $(i, j)$ è la covarianza tra $X_i$ e $X_j$, $\text{Cov}(X_i, X_j) = E[(X_i - E[X_i])(X_j - E[X_j])] = E[(X_i - \mu_i)(X_j - \mu_j)]$. Gli elementi sulla diagonale sono le varianze $\Sigma_{ii} = \text{Var}(X_i) = \sigma_i^2$. (La formula per la varianza della combinazione lineare $\mathbf{a}\boldsymbol{\Sigma}\mathbf{a}^T$ coincide con la formula generale per la varianza di una combinazione lineare di variabili aleatorie in termini della loro matrice di covarianza).

**Passaggio 10: Importanza della Distribuzione Gaussiana Multivariata**

Il "mondo Gaussiano" è "particolarmente bello" e importante in molte applicazioni di statistica e modellistica. Le ragioni includono:

- La sua **ubiquità**, legata in parte al Teorema Centrale del Limite (che non è stato ancora affrontato in dettaglio in questo estratto, ma viene menzionato).
- La sua "niceness" e semplicità di molte proprietà, prima fra tutte la **chiusura rispetto a trasformazioni affini**. Se si parte da un vettore Gaussiano e lo si trasforma linearmente (scalatura, rotazione) e lo si trasla, il risultato è ancora Gaussiano. Anche proiezioni o combinazioni lineari delle componenti risultano Gaussiane.

Queste proprietà rendono i modelli basati sulla distribuzione Gaussiana multivariata gestibili e teoricamente trattabili in molti contesti.

___

### Ripasso e Parametri della Gaussiana Multivariata

Quando si definisce una **Gaussiana multivariata**, è necessario specificare **due parametri**. Il primo parametro è **$\mu$**, che è un **generico vettore**. Il secondo parametro è **$\Sigma$**, che è una **generica matrice**. Attenzione, questa matrice $\Sigma$ non è una matrice qualunque, ma deve essere una **matrice simmetrica e semidefinita positiva**. Il professore sottolinea che un tipico errore è dimenticare di controllare queste proprietà per la matrice $\Sigma$.

### Momenti di una Gaussiana Multivariata

Se un vettore aleatorio $X$ è una **Gaussiana di parametri $\mu$ e $\Sigma$**, il **momento** della componente $j$-esima non è altro che $\mu_j$. La **matrice di varianze e covarianze di $X$** è proprio $\Sigma$.

Come si può vedere questo? Partiamo da un lemma precedente (non fornito nella fonte completa, ma citato come base) secondo cui si può scrivere $X$ nella forma: $X = \mu + O Z$ dove $O$ è una matrice ortonormale (tale per cui $O^{-1} = O^T$) e $D$ è una matrice diagonale con gli autovalori di $\Sigma$, e vale la relazione $O^T \Sigma O = D$ (o equivalentemente $\Sigma = O D O^T$). $Z$ è un vettore Gaussiano "particolare". Questo vettore $Z$ è costruito in modo tale che le sue componenti $Z_j$ sono Gaussiane unidimensionali. In questo caso particolare, le componenti $Z_j$ hanno media 0 e varianza $\lambda_j^2$, dove $\lambda_j$ sono gli autovalori di $\Sigma$ (quindi gli elementi sulla diagonale di $D$). Pertanto, il vettore delle medie di $Z$, $E[Z]$, è un vettore di zeri.
![[Pasted image 20250424150439.png]]
#### Calcolo del Vettore delle Medie $E[X]$

Usando la proprietà di linearità del valore atteso per vettori: $E[X] = E[\mu + O Z]$ $E[X] = E[\mu] + E[O Z]$ Poiché $\mu$ è un vettore costante, $E[\mu] = \mu$. $E[O Z] = O E[Z]$ Abbiamo detto che $E[Z]$ è il vettore degli zeri. $O E[Z] = O \mathbf{0} = \mathbf{0}$ (moltiplicando un vettore di zeri per una matrice si ottiene il vettore di zeri). Quindi: $E[X] = \mu + \mathbf{0} = \mu$ Questo dimostra che il **vettore delle medie di $X$ è $\mu$**, e componente per componente $E[X_j] = \mu_j$.

#### Calcolo della Matrice di Varianze e Covarianze $\Sigma_X$

Usando le proprietà delle matrici di varianze e covarianze: La matrice di varianze e covarianze è invariante per traslazioni. Quindi $\Sigma_X = \Sigma_{X-\mu}$. $\Sigma_X = \Sigma_{O Z}$ Una proprietà della matrice di covarianza di una trasformazione lineare $AY$ è $A \Sigma_Y A^T$. In questo caso $A=O$ e $Y=Z$. $\Sigma_{O Z} = O \Sigma_Z O^T$ La matrice di varianze e covarianze di $Z$, $\Sigma_Z$, è una matrice diagonale perché le componenti $Z_j$ sono indipendenti (costruzione del lemma). Fuori dalla diagonale, la covarianza è zero perché l'indipendenza implica covarianza nulla. Sulla diagonale ci sono le varianze, che sono $\lambda_j^2$. Quindi $\Sigma_Z = D$, dove $D$ è la matrice diagonale degli autovalori. $\Sigma_X = O D O^T$ Sappiamo dalla costruzione che $\Sigma = O D O^T$. Quindi: $\Sigma_X = \Sigma$ Questo dimostra che la **matrice di varianze e covarianze di $X$ è $\Sigma$**. La matrice $\Sigma$ non è una qualunque matrice, ma deve essere simmetrica e semidefinita positiva.
![[Pasted image 20250424150601.png]]
### Proposizione 1: Sottovettori di una Gaussiana Multivariata

**Enunciato:** Se $X$ è un vettore $n$-dimensionale Gaussiano di parametri $\mu$ e $\Sigma$, allora **qualunque sottovettore di $X$ è Gaussiano**. Le distribuzioni marginali di una Gaussiana sono tutte Gaussiane. Questo è vero a vari gradi (quindi anche prendendo più componenti).

#### Parametri del Sottovettore

Se si prende un sottovettore di indici $I = {i_1, i_2, \dots, i_k}$: Il **vettore delle medie del sottovettore $X_I$**, $\mu_I$, è semplicemente il **sottovettore** di $\mu$ che contiene le componenti $\mu_j$ con $j \in I$. La **matrice di varianze e covarianze del sottovettore $X_I$**, $\Sigma_I$, è la matrice che si ottiene **incrociando le righe e le colonne** della matrice $\Sigma$ con gli indici contenuti in $I$. Prendete la matrice $\Sigma$ e selezionate solo le righe e le colonne corrispondenti agli indici $i_1, \dots, i_k$.
![[Pasted image 20250424152133.png]]
#### Dimostrazione della Proposizione 1 (Idea generale usando Funzioni Caratteristiche)

La dimostrazione di questa proposizione si basa sulla **proprietà di unicità della funzione caratteristica**: se due variabili aleatorie (o vettori aleatori) hanno la stessa funzione caratteristica, allora hanno la stessa legge (distribuzione).

La funzione caratteristica di un vettore Gaussiano $n$-dimensionale $\mathbf{x}$ con parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$, calcolata in un vettore $\mathbf{t} = (t_1, ..., t_n)^T \in \mathbb{R}^n$, è data da: $\phi_{\mathbf{x}}(\mathbf{t}) = E[e^{i \mathbf{t}^T \mathbf{x}}] = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$.

Consideriamo prima il caso più semplice e fondamentale: la **dimostrazione che una singola componente $X_k$ (una marginale) è Gaussiana**. La funzione caratteristica di una singola componente $X_k$, $\phi_{X_k}(u)$, dove $u$ è uno scalare, può essere ottenuta dalla funzione caratteristica congiunta del vettore $\mathbf{x}$. Per definizione, $\phi_{X_k}(u) = E[e^{i u X_k}]$. Questo è equivalente a valutare la funzione caratteristica congiunta $\phi_{\mathbf{x}}(\mathbf{t})$ nel vettore $\mathbf{t}$ che ha la componente $k$-esima uguale a $u$ e tutte le altre componenti uguali a zero. Ossia, poniamo $\mathbf{t} = (0, ..., 0, u_k=u, 0, ..., 0)^T$ (dove $u$ è nella posizione $k$-esima).

Sostituendo questo vettore $\mathbf{t}$ nella formula della funzione caratteristica congiunta: $\phi_{X_k}(u) = \phi_{\mathbf{x}}(0, ..., u_k=u, ..., 0)$ $= e^{i (0, ..., u, ..., 0)^T \boldsymbol{\mu} - \frac{1}{2} (0, ..., u, ..., 0)^T \boldsymbol{\Sigma} (0, ..., u, ..., 0)}$.

Analizziamo i due termini nell'esponente:

1. $i \mathbf{t}^T \boldsymbol{\mu} = i (0, ..., u, ..., 0) \begin{pmatrix} \mu_1 \\ \vdots \\ \mu_k \\ \vdots \\ \mu_n \end{pmatrix}$. Questo prodotto scalare seleziona solo la componente $k$-esima di $\boldsymbol{\mu}$ moltiplicata per $u$. Quindi, $i \mathbf{t}^T \boldsymbol{\mu} = i u \mu_k$.
2. $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t} = (0, ..., u, ..., 0) \begin{pmatrix} \Sigma_{11} & \dots & \Sigma_{1k} & \dots & \Sigma_{1n} \\ \vdots & \ddots & \vdots & \ddots & \vdots \\ \Sigma_{k1} & \dots & \Sigma_{kk} & \dots & \Sigma_{kn} \\ \vdots & \ddots & \vdots & \ddots & \vdots \\ \Sigma_{n1} & \dots & \Sigma_{nk} & \dots & \Sigma_{nn} \end{pmatrix} \begin{pmatrix} 0 \\ \vdots \\ u \\ \vdots \\ 0 \end{pmatrix}$. Quando si esegue questo prodotto, il vettore riga $(0, ..., u, ..., 0)$ seleziona la riga $k$-esima di $\boldsymbol{\Sigma}$ moltiplicata per $u$. Il risultato è $u \cdot (\Sigma_{k1}, \dots, \Sigma_{kk}, \dots, \Sigma_{kn})$. Moltiplicando questo vettore riga per il vettore colonna $(0, ..., u, ..., 0)^T$, si seleziona solo la componente $k$-esima del vettore riga, che è $\Sigma_{kk}$, moltiplicata per $u$. Quindi, $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t} = u \cdot (\Sigma_{k1}, \dots, \Sigma_{kk}, \dots, \Sigma_{kn}) \begin{pmatrix} 0 \\ \vdots \ u \\ \vdots \\ 0 \end{pmatrix} = u \cdot (u \Sigma_{kk}) = u^2 \Sigma_{kk}$.

Sostituendo questi termini nell'esponente, otteniamo la funzione caratteristica di $X_k$: $\phi_{X_k}(u) = e^{i u \mu_k - \frac{1}{2} u^2 \Sigma_{kk}}$.

Questa è esattamente la funzione caratteristica di una **variabile aleatoria Gaussiana unidimensionale** con media $\mu_k$ e varianza $\Sigma_{kk}$. Poiché la funzione caratteristica di $X_k$ corrisponde a quella di una Gaussiana unidimensionale, per il teorema di unicità, $X_k$ è una variabile aleatoria Gaussiana unidimensionale.

La **dimostrazione per un sottovettore $X_I$ di dimensione $k > 1$** segue la stessa logica ed è stata descritta come "un filino più laboriosa" ma concettualmente identica. Per ottenere la funzione caratteristica del sottovettore $X_I = (X_{i_1}, \dots, X_{i_k})^T$ calcolata in un vettore $\mathbf{u} = (u_1, \dots, u_k)^T$, si valuta la funzione caratteristica congiunta del vettore completo $\mathbf{x}$ in un vettore $\mathbf{t} \in \mathbb{R}^n$ dove le componenti $t_j$ sono nulle se $j \notin I$, e sono uguali alle corrispondenti componenti di $\mathbf{u}$ se $j \in I$. Ossia, se $j = i_m$ per qualche $m \in {1, \dots, k}$, allora $t_j = u_m$, altrimenti $t_j = 0$.

La funzione caratteristica di $X_I$ è $\phi_{X_I}(\mathbf{u}) = E[e^{i \mathbf{u}^T X_I}]$. Questo è uguale a $E[e^{i \sum_{m=1}^k u_m X_{i_m}}]$, che è la funzione caratteristica di $\mathbf{x}$ valutata nel vettore $\mathbf{t}$ descritto sopra. $\phi_{X_I}(\mathbf{u}) = \phi_{\mathbf{x}}(\mathbf{t})$.

Sostituendo questo vettore $\mathbf{t}$ (con zeri nelle posizioni fuori da $I$ e componenti di $\mathbf{u}$ nelle posizioni indicate da $I$) nella formula della funzione caratteristica congiunta $\phi_{\mathbf{x}}(\mathbf{t}) = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$, si ottiene:

1. $i \mathbf{t}^T \boldsymbol{\mu}$: Questo prodotto selezionerà solo le componenti di $\boldsymbol{\mu}$ corrispondenti agli indici in $I$, moltiplicate per le rispettive componenti di $\mathbf{u}$. Il risultato è $i \mathbf{u}^T \boldsymbol{\mu}_I$, dove $\boldsymbol{\mu}_I$ è il sottovettore di $\boldsymbol{\mu}$ con le componenti indicate da $I$.
2. $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}$: Questo prodotto seleziona la **forma quadratica** definita dalla **sottomatrice** di $\boldsymbol{\Sigma}$ corrispondente agli indici in $I$, applicata al vettore $\mathbf{u}$. Il risultato è $\mathbf{u}^T \boldsymbol{\Sigma}_I \mathbf{u}$, dove $\boldsymbol{\Sigma}_I$ è la sottomatrice di $\boldsymbol{\Sigma}$ ottenuta incrociando righe e colonne con indici in $I$.

Quindi, la funzione caratteristica del sottovettore $X_I$ è: $\phi_{X_I}(\mathbf{u}) = e^{i \mathbf{u}^T \boldsymbol{\mu}_I - \frac{1}{2} \mathbf{u}^T \boldsymbol{\Sigma}_I \mathbf{u}}$.

Questa è esattamente la forma della funzione caratteristica di un **vettore Gaussiano $k$-dimensionale** con vettore delle medie $\boldsymbol{\mu}_I$ e matrice di varianze e covarianze $\boldsymbol{\Sigma}_I$. Per il teorema di unicità, il sottovettore $X_I$ segue una distribuzione Gaussiana con questi parametri.

Le fonti indicano che la dimostrazione dettagliata per il caso generale del sottovettore, sebbene concettualmente simile a quella della singola componente, non è stata formalmente completata nelle lezioni per intero con tutte le notazioni, ma l'idea di "selezionare la sottomatrice" è stata esplicitata. Questo risultato conferma che **tutte le marginali di un vettore Gaussiano (singole componenti o sottovettori) sono esse stesse Gaussiane**.
![[Pasted image 20250424154542.png]]


**Caso generale (più componenti):** Se si considerano $k$ componenti ($k>1$), si fa la stessa cosa ma il vettore $t$ avrà $k$ elementi non nulli. La forma quadratica $t^T \Sigma t$ seleziona la **sottomatrice** $\Sigma_I$ corrispondente agli indici $I$ delle componenti scelte, e il prodotto scalare $t^T \mu$ seleziona il **sottovettore** $\mu_I$. La conclusione è la stessa: si ottiene la funzione caratteristica di una Gaussiana di dimensione $k$ con parametri $\mu_I$ e $\Sigma_I$.

Questo spiega la Proposizione 1: le marginali (sottovettori) sono Gaussiane.

### Proposizione 2: Indipendenza delle Componenti e Matrice di Covarianza

**Enunciato (Punto 2 come chiamato nella fonte, o Punto 3 come chiamato nella fonte):** Il vettore Gaussiano $X$ ha **componenti indipendenti se e solo se** la sua matrice di varianze e covarianze **$\Sigma$ è una matrice diagonale**. **Corollario (Punto 2 bis nella fonte, parte del Punto 3 nella fonte):** Due componenti $X_{i_1}$ e $X_{i_2}$ di un vettore Gaussiano $X$ sono **indipendenti se e solo se** l'elemento $\sigma_{i_1, i_2}$ (cioè la covarianza tra $X_{i_1}$ e $X_{i_2}$) è **uguale a 0**. Il professore sottolinea che questa è un'affermazione **forte**. In generale, la covarianza nulla non implica indipendenza, ma **nel mondo Gaussiano sì**. Se si sa che due componenti Gaussiane hanno covarianza nulla, si può concludere che sono indipendenti.
![[Pasted image 20250424152124.png]]
#### Esempio con Matrice 3x3

Consideriamo un vettore Gaussiano $X = (X_1, X_2, X_3)$ con vettore delle medie $\mu = (0, 0, 0)$ e una matrice di covarianza $\Sigma$ data da: $\Sigma = \begin{pmatrix} \Sigma_{11} & \Sigma_{12} & \Sigma_{13} \\ \Sigma_{21} & \Sigma_{22} & \Sigma_{23} \\ \Sigma_{31} & \Sigma_{32} & \Sigma_{33} \end{pmatrix}$ Sappiamo che $\Sigma$ è simmetrica, quindi $\Sigma_{ij} = \Sigma_{ji}$. La covarianza tra $X_i$ e $X_j$ è $\Sigma_{ij}$.

Supponiamo di avere la seguente matrice $\Sigma$ (esempio del professore): $\Sigma = \begin{pmatrix} \Sigma_{11} & 0 & \Sigma_{13} \\ 0 & \Sigma_{22} & \Sigma_{23} \\ \Sigma_{31} & \Sigma_{32} & \Sigma_{33} \end{pmatrix}$ Guardando gli elementi fuori dalla diagonale (che rappresentano le covarianze tra diverse componenti):

- $\Sigma_{12} = 0$ (e $\Sigma_{21}=0$ per simmetria). Questo significa che la covarianza tra $X_1$ e $X_2$ è zero. Poiché $X_1$ e $X_2$ sono componenti di un vettore Gaussiano (quindi marginalmente Gaussiane per la Proposizione 1), la covarianza nulla implica indipendenza. Quindi, **$X_1$ e $X_2$ sono indipendenti**.
- $\Sigma_{13} \ne 0$ (nell'esempio grafico del professore, anche se non è specificato un valore numerico, è rappresentato come non zero). Questo significa che la covarianza tra $X_1$ e $X_3$ non è zero. Quindi, **$X_1$ e $X_3$ non sono indipendenti**.
- $\Sigma_{23} \ne 0$. Questo significa che la covarianza tra $X_2$ e $X_3$ non è zero. Quindi, **$X_2$ e $X_3$ non sono indipendenti**.
![[Pasted image 20250424152339.png]]
Questo esempio mostra come si può determinare l'indipendenza tra le componenti di un vettore Gaussiano semplicemente guardando se gli elementi fuori dalla diagonale della matrice di covarianza $\Sigma$ sono zero. Questa proprietà è molto utile negli esercizi, specialmente nei quesiti vero/falso.

#### Dimostrazione della Proposizione 2 (Idea generale usando Funzioni Caratteristiche)

La dimostrazione si basa principalmente sull'uso della **funzione caratteristica** del vettore aleatorio $\mathbf{x}$ e sul **teorema di unicità** della funzione caratteristica, che afferma che due variabili (o vettori) aleatorie con la stessa funzione caratteristica hanno la stessa distribuzione. Inoltre, si utilizza il criterio che lega l'indipendenza delle componenti di un vettore aleatorio alla fattorizzazione della sua funzione caratteristica congiunta nel prodotto delle funzioni caratteristiche marginali.

Procediamo con la dimostrazione in due parti, date dall'enunciato "se e solo se":

**Parte 1: Se le componenti $X_1, \dots, X_n$ sono indipendenti, allora la matrice $\boldsymbol{\Sigma}$ è diagonale.**

Questo è il lato "facile" dell'implicazione, valido per qualsiasi tipo di variabili aleatorie, non solo Gaussiane. La matrice di varianze e covarianze $\boldsymbol{\Sigma}$ ha come elementi $\Sigma_{ij} = \text{Cov}(X_i, X_j)$. Per definizione di indipendenza, se due variabili aleatorie $X_i$ e $X_j$ (con $i \neq j$) sono indipendenti, la loro covarianza è nulla: $\text{Cov}(X_i, X_j) = E[(X_i - E[X_i])(X_j - E[X_j])] = 0$. Dato che stiamo considerando le componenti $X_1, \dots, X_n$ come indipendenti, questo significa che $\text{Cov}(X_i, X_j) = \Sigma_{ij} = 0$ per ogni $i \neq j$. Gli elementi sulla diagonale della matrice $\boldsymbol{\Sigma}$ sono le varianze delle singole componenti: $\Sigma_{ii} = \text{Var}(X_i)$. Questi elementi non sono necessariamente zero (a meno di casi degeneri in cui la componente è una costante, ma anche in quel caso la varianza è la parte diagonale corretta). Pertanto, se tutte le covarianze fuori dalla diagonale sono zero, la matrice $\boldsymbol{\Sigma}$ è, per definizione, una matrice diagonale. Questo dimostra la prima parte.
![[Pasted image 20250424155548.png]]
**Parte 2: Se la matrice $\boldsymbol{\Sigma}$ è diagonale, allora le componenti $X_1, \dots, X_n$ sono indipendenti.**

Questa è la parte più significativa per i vettori Gaussiani, e la dimostrazione si basa sull'uso della funzione caratteristica. La funzione caratteristica di un vettore Gaussiano $\mathbf{x}$ con parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$, calcolata in un vettore $\mathbf{t} = (t_1, \dots, t_n)^T \in \mathbb{R}^n$, è data da: $\phi_{\mathbf{x}}(\mathbf{t}) = E[e^{i \mathbf{t}^T \mathbf{x}}] = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$.

Assumiamo che $\boldsymbol{\Sigma}$ sia una matrice diagonale. Questo significa che gli elementi fuori dalla diagonale sono zero ($\Sigma_{ij} = 0$ per $i \neq j$), e gli elementi sulla diagonale sono le varianze $\Sigma_{ii}$. Il primo termine nell'esponente è il prodotto scalare $i \mathbf{t}^T \boldsymbol{\mu}$. Questo è semplicemente $i \sum_{j=1}^n t_j \mu_j$. Il secondo termine nell'esponente, $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}$, è una forma quadratica. Se $\boldsymbol{\Sigma}$ è diagonale, con elementi $\Sigma_{jj}$ sulla diagonale, questo prodotto si semplifica notevolmente. In forma matriciale, $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t} = \sum_{i=1}^n \sum_{j=1}^n t_i \Sigma_{ij} t_j$. Poiché $\Sigma_{ij} = 0$ per $i \neq j$, rimangono solo i termini per cui $i = j$: $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t} = \sum_{j=1}^n t_j \Sigma_{jj} t_j = \sum_{j=1}^n \Sigma_{jj} t_j^2$. (Nota: le fonti usano anche la notazione $\sigma_j^2$ o $\sigma_{jj}^2$ per gli elementi diagonali di $\boldsymbol{\Sigma}$ in contesti specifici, ma il significato è lo stesso: la varianza della j-esima componente).

Sostituendo questi termini nell'esponente della funzione caratteristica congiunta, otteniamo: $\phi_{\mathbf{x}}(\mathbf{t}) = e^{i \sum_{j=1}^n t_j \mu_j - \frac{1}{2} \sum_{j=1}^n \Sigma_{jj} t_j^2}$.

Ora, possiamo riscrivere l'esponente come una somma e quindi l'intera espressione come un prodotto di esponenziali: $\phi_{\mathbf{x}}(\mathbf{t}) = e^{\sum_{j=1}^n (i t_j \mu_j - \frac{1}{2} \Sigma_{jj} t_j^2)} = \prod_{j=1}^n e^{i t_j \mu_j - \frac{1}{2} \Sigma_{jj} t_j^2}$.

Ogni fattore nel prodotto, $e^{i t_j \mu_j - \frac{1}{2} \Sigma_{jj} t_j^2}$, è esattamente la **funzione caratteristica di una variabile aleatoria Gaussiana unidimensionale** con media $\mu_j$ e varianza $\Sigma_{jj}$. Queste sono le funzioni caratteristiche marginali $\phi_{X_j}(t_j)$ delle singole componenti $X_j$. Quindi, abbiamo dimostrato che se $\boldsymbol{\Sigma}$ è diagonale, la funzione caratteristica congiunta del vettore $\mathbf{x}$ è uguale al prodotto delle funzioni caratteristiche marginali delle sue componenti: $\phi_{\mathbf{x}}(\mathbf{t}) = \prod_{j=1}^n \phi_{X_j}(t_j)$ per ogni $\mathbf{t} \in \mathbb{R}^n$.

Per il criterio che lega l'indipendenza alla funzione caratteristica, questa fattorizzazione implica che le componenti $X_1, \dots, X_n$ sono indipendenti.

Questo completa la dimostrazione della Proposizione 2, confermando che per un vettore Gaussiano, l'indipendenza delle componenti è _equivalente_ alla matrice di varianze e covarianze essere diagonale. Questa è una delle "cose belle" e semplificanti del "mondo Gaussiano".

**Corollario correlato (Punto 3 o 2 bis):** Se si prendono due singole componenti $X_i$ e $X_j$ da un vettore Gaussiano (che formano un sottovettore Gaussiano di dimensione 2 per la Proposizione 1, non dimostrata formalmente ma discussa nelle fonti), esse sono indipendenti se e solo se la loro covarianza $\Sigma_{ij}$ è zero. Questo discende direttamente dalla Proposizione 2 applicata al sottovettore $(X_i, X_j)^T$, la cui matrice di covarianza è una sottomatrice $2 \times 2$ di $\boldsymbol{\Sigma}$ contenente $\Sigma_{ii}, \Sigma_{ij}, \Sigma_{ji}, \Sigma_{jj}$. Se questa sottomatrice è diagonale (cioè $\Sigma_{ij} = \Sigma_{ji} = 0$), le due componenti sono indipendenti.
___


**Vettori Gaussiani Multivariati: Densità, Degenerazione e Rappresentazioni**

**1. Vettori Gaussiani Assolutamente Continui**

Un punto fondamentale è comprendere la condizione che rende un vettore gaussiano "assolutamente continuo".

- **Definizione/Proprietà Fondamentale:**
    
    - Un vettore aleatorio gaussiano $X$ (a valori in $\mathbb{R}^n$) è assolutamente continuo **se e solo se** la sua matrice di covarianza $\Sigma$ è strettamente definita positiva.
    - Questo significa che $\Sigma$ **non può** avere autovalori nulli.
    - Se una matrice è strettamente definita positiva, allora è automaticamente invertibile.
- **Densità di Probabilità:**
    
    - Nel caso in cui $X$ sia assolutamente continuo (cioè $\Sigma$ è strettamente definita positiva), la sua densità di probabilità $f_X(x)$ è data da una formula specifica: $f_X(x) = c \cdot e^{-\frac{1}{2} (x - \mu)^T \Sigma^{-1} (x - \mu)}$ dove:
        - $x$ è il vettore di variabili in $\mathbb{R}^n$.
        - $\mu$ è il vettore delle medie di $X$.
        - $\Sigma^{-1}$ è la matrice inversa della matrice di covarianza $\Sigma$.
        - $c$ è una costante di normalizzazione (spesso specificata come $1 / (\sqrt{(2\pi)^n \det(\Sigma)})$ ) (Questo dettaglio sulla costante $c$ _non_ è esplicitamente dato nelle fonti, ma è la formula completa; le fonti si concentrano sulla forma esponenziale).
    - Il termine nell'esponente, $(x - \mu)^T \Sigma^{-1} (x - \mu)$, è una **forma quadratica**.
    - **Spiegazione:** L'inclusione di $\Sigma^{-1}$ nella formula della densità è cruciale e distingue il caso multivariato da quello unidimensionale in un modo specifico.
      ![[Pasted image 20250424160002.png]]
- **Confronto con il Caso Unidimensionale ($n=1$):**
    
    - Consideriamo il caso semplice in cui $n=1$, cioè $X$ è una singola variabile gaussiana $X \sim N(\mu, \sigma^2)$.
    - La matrice di covarianza $\Sigma$ si riduce allo scalare $\sigma^2$.
    - La densità della gaussiana unidimensionale è proporzionale a $e^{-\frac{(x-\mu)^2}{2\sigma^2}}$.
    - Possiamo riscrivere l'esponente come $-\frac{1}{2} (x-\mu) (\sigma^2)^{-1} (x-\mu)$. Qui $(\sigma^2)^{-1}$ è semplicemente $1/\sigma^2$.
    - **Analogia:** Questa riscrittura rende chiara l'analogia con il caso multivariato: lo scalare $\sigma^2$ corrisponde alla matrice $\Sigma$, e il suo inverso $(\sigma^2)^{-1}$ corrisponde all'inverso matriciale $\Sigma^{-1}$.
    - **Punto di Attenzione:** È fondamentale **non confondere** $\Sigma$ con $\Sigma^{-1}$. Nelle formule standard:
        - La **funzione caratteristica** di un vettore gaussiano $X$ è $e^{i t^T \mu - \frac{1}{2} t^T \Sigma t}$ (la parte di media nulla $e^{-t^T \Sigma t / 2}$ è menzionata). Questa formula usa $\Sigma$.
        - La **densità di probabilità** (per il caso assolutamente continuo) usa $\Sigma^{-1}$.
    - **Condizione di Invertibilità:** La matrice $\Sigma^{-1}$ è definita **solo se** $\Sigma$ è invertibile. La matrice di covarianza $\Sigma$ è invertibile **se e solo se** è strettamente definita positiva.
      ![[Pasted image 20250424160050.png]]
- **Dimostrazione (Cenni):**
    
    - La dimostrazione della relazione tra assoluta continuità, matrice $\Sigma$ strettamente definita positiva e la forma specifica della densità non viene svolta in dettaglio.
    - Viene menzionato che si basa su un cambio di variabile.
    - L'enunciato è diviso idealmente in due parti: l'assoluta continuità e la forma della densità.

**2. Caso Degenerato: $\Sigma$ non strettamente definita positiva**

Cosa succede se la matrice di covarianza $\Sigma$ non è strettamente definita positiva?

- **Proprietà:**
    
    - Se $\Sigma$ è solo semidefinita positiva (ossia ha **almeno un autovalore nullo**), il vettore gaussiano $X$ **non è assolutamente continuo**.
    - Questo perché $\Sigma^{-1}$ non è definita in questo caso.
- **Concentrazione su un Sottospazio:**
    
    - In questo caso degenere, il vettore $X$ è concentrato (con probabilità 1) su un **iperpiano** (un sottospazio lineare, possibilmente traslato dalla media $\mu$).
    - La **dimensione** di questo sottospazio è strettamente minore della dimensione $n$ dello spazio ambiente $\mathbb{R}^n$.
    - La dimensione di questo sottospazio è esattamente uguale al **rango di $\Sigma$**.
- **Esempio Unidimensionale ($n=1$):**
    
    - L'unico caso degenere in dimensione 1 è quando la varianza $\sigma^2$ è uguale a 0.
    - In questo caso, la variabile aleatoria collassa su un punto (la sua media $\mu$).
    - La dimensione del sottospazio è 0, che è strettamente minore di $n=1$. Questo corrisponde al rango di $\Sigma=0$, che è 0.
- **Esempio Multidimensionale:**
    
    - In più dimensioni, se $\Sigma$ non è definita positiva, la distribuzione gaussiana "collassa" su un sottospazio.
    - Questo sottospazio è lineare (traslato da $\mu$).
    - La sua dimensione è data dal rango di $\Sigma$. Ad esempio, in $\mathbb{R}^4$, una gaussiana degenere può essere concentrata su un sottospazio di dimensione 3, 2, 1 o 0, a seconda del rango di $\Sigma$.
- **Importanza:** Questo concetto, pur essendo a volte considerato solo per "cultura" e potenzialmente non strettamente "in programma", è importante per capire il comportamento dei vettori gaussiani quando la matrice di covarianza non è invertibile.
    

**3. Rappresentazioni e Trasformazioni Lineari dei Vettori Gaussiani**


**Il Caso Degenerato: $\Sigma$ non Strettamente Definita Positiva**

Questo è il caso in cui $\Sigma$ è simmetrica e semidefinita positiva, ma **non** strettamente definita positiva. Ciò significa che $\Sigma$ ha almeno un autovalore uguale a zero.

**Conseguenza Principale:** Se $\Sigma$ non è strettamente definita positiva, il vettore gaussiano $X$ **non è assolutamente continuo**. Di conseguenza, **non ammette una densità di probabilità** nel senso usuale. La formula della densità con $\Sigma^{-1}$ non è applicabile perché $\Sigma$ non è invertibile.

**Dove si Concentra la Probabilità?**

**Proposizione (non dimostrata nell'audio, forse non in programma):** Se $X$ è un vettore gaussiano di parametri $\mu$ e $\Sigma$ e $\Sigma$ non è strettamente definita positiva (ha autovalori nulli), allora $X$ è concentrato con probabilità 1 su un **iperpiano** (o sottospazio lineare traslato dalla media $\mu$) di dimensione strettamente minore di $n$. La dimensione di questo iperpiano è uguale al rango della matrice $\Sigma$.

**Commento e Esempio Concettuale:** Questa affermazione spiega perché la gaussiana "collassa" in un caso degenere.

- **Esempio 1D:** Nel caso unidimensionale ($n=1$), l'unico caso degenere è $\Sigma = \sigma^2 = 0$. La matrice $\Sigma$ è la matrice $1 \times 1$ con elemento 0. Il suo rango è 0. La proposizione dice che la gaussiana è concentrata su un iperpiano di dimensione 0. Un iperpiano di dimensione 0 in $\mathbb{R}^1$ è un punto. Infatti, in questo caso, la variabile aleatoria $X$ è la costante $\mu$, che è concentrata sul punto $\mu$. La dimensione 0 è $n - (\text{numero di autovalori nulli}) = 1 - 1 = 0$ o anche uguale al rango di $\Sigma$ (che è 0).
    
- **Esempio Multidimensionale (Concettuale):** Pensiamo alla costruzione $X = \mu + O Z$ dove $Z$ ha componenti indipendenti $Z_j \sim N(0, \lambda_j^2)$. Se $\Sigma$ ha $k > 0$ autovalori nulli, allora $k$ dei $\lambda_j^2$ sono zero. Questo significa che $k$ delle componenti $Z_j$ sono variabili aleatorie degenerate, concentrate su 0. Il vettore $Z$ vive in $\mathbb{R}^n$, ma le sue $k$ componenti con varianza zero sono fisse a 0. Questo "vincola" $Z$ a un sottospazio di $\mathbb{R}^n$ di dimensione $n-k$. Quando applichiamo la trasformazione lineare $OZ$ (una rotazione/riflessione) e la traslazione $\mu$, il vettore risultante $X$ rimane confinato in un sottospazio affine (iperpiano) traslato, la cui dimensione è $n-k$, che è anche il rango di $\Sigma$.
    

**Corollario Concettuale (Legato al Caso Degenerato):** Come osservato da uno studente, se abbiamo un vettore gaussiano $X \sim N(\mu, \Sigma)$, possiamo studiarlo in un sistema di riferimento diverso. Considerando la trasformazione $Y = O^T (X - \mu)$, dove $O$ diagonalizza $\Sigma$. Sappiamo che $X = \mu + O Z$, quindi $X - \mu = O Z$. Allora $Y = O^T (O Z) = (O^T O) Z = I Z = Z$. Questo significa che il vettore $Y$ ha la stessa legge del vettore $Z$, le cui componenti sono indipendenti $Z_j \sim N(0, \lambda_j^2)$. Se $\Sigma$ è degenere, alcuni $\lambda_j^2$ sono nulli. Quindi, alcune componenti di $Y$ (e quindi di $Z$) sono degenerate (costanti uguali a 0). Questa trasformazione lineare (sottrarre la media e "ruotare" con $O^T$) permette di "vedere" la struttura intrinseca della gaussiana: un insieme di variabili indipendenti (alcune non degenerate, altre costanti). Il fatto che alcune siano costanti è la manifestazione della degenerazione e della concentrazione su un sottospazio di dimensione inferiore.

**Non Unicità della Rappresentazione $X = \mu + A Z_0$**

Un aspetto correlato alla struttura di $\Sigma$ (anche nel caso non degenere) è che, mentre la legge gaussiana è unicamente determinata da $\mu$ e $\Sigma$ (tramite la CF), la _costruzione_ tramite trasformazione di variabili gaussiane indipendenti non è unica. Possiamo ottenere un vettore gaussiano $X \sim N(\mu, \Sigma)$ anche partendo da un vettore $Z_0$ di variabili standard normali indipendenti $Z_0 \sim N(0, I)$ (dove $I$ è l'identità, $\text{Cov}(Z_0) = I$) e applicando una trasformazione affine $X = \mu + A Z_0$.

La matrice di covarianza di $X$ in questo caso è $\text{Cov}(X) = A \text{Cov}(Z_0) A^T = A I A^T = A A^T$. Per ottenere $X \sim N(\mu, \Sigma)$, dobbiamo avere $A A^T = \Sigma$. Il punto chiave è che, per una data $\Sigma$, l'equazione matriciale $A A^T = \Sigma$ può avere **molteplici soluzioni** per la matrice $A$. Ad esempio, la decomposizione di Cholesky o la "radice quadrata" della matrice $\Sigma$ (se $\Sigma$ è definita positiva) sono _alcune_ possibili soluzioni per $A$, ma non sono le uniche, specialmente se $A$ non è richiesta essere simmetrica o definita positiva. Questo significa che si può generare lo stesso vettore gaussiano $\Sigma$ in modi diversi, usando matrici $A$ differenti, anche se si parte sempre da variabili standard normali indipendenti. Questa è un'altra sottigliezza del mondo gaussiano che deriva dalle proprietà della matrice $\Sigma$.
![[Pasted image 20250424161840.png]]
![[Pasted image 20250424162302.png]]
In sintesi, la degenerazione di un vettore gaussiano multivariato (quando $\Sigma$ non è strettamente definita positiva) implica che esso non è assolutamente continuo, non ha densità, e concentra tutta la sua probabilità su un sottospazio di dimensione inferiore a $n$, determinata dal rango di $\Sigma$. Questo comportamento è intrinsecamente legato alla presenza di autovalori nulli nella matrice di covarianza $\Sigma$.


#### References



