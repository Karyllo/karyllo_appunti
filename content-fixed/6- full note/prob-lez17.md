---
title: prob lez17
description: Appunto automatico
---

2025-04-15 13:39

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## prob-lez17

## Seconda Parte del Corso: Covarianza

### Complemento sull'Indipendenza

#### Funzioni di Variabili Aleatorie Indipendenti

Il professore inizia la seconda parte del corso con un complemento sulla proprietà dell'indipendenza che spesso si presenta nelle applicazioni.

**Proposizione:** Siano $X_1, X_2, \dots, X_n$ variabili aleatorie indipendenti. Si considerino delle funzioni misurabili $g_1$ di un sottoinsieme di queste variabili (ad esempio, $X_{i_1}, \dots, X_{i_k}$) e $g_2$ di un altro sottoinsieme disgiunto (ad esempio, $X_{j_1}, \dots, X_{j_m}$), dove ${i_1, \dots, i_k} \cap {j_1, \dots, j_m} = \emptyset$. Allora le variabili aleatorie $Y_1 = g_1(X_{i_1}, \dots, X_{i_k})$ e $Y_2 = g_2(X_{j_1}, \dots, X_{j_m})$ sono indipendenti.

**Esempio:** Se $X_1, X_2, X_3$ sono variabili aleatorie indipendenti, allora $Y_1 = g_1(X_1) = X_1^2$ e $Y_2 = g_2(X_2, X_3) = X_2^2 + X_3^2$ sono indipendenti.
![[Pasted image 20250415151714.png]]
**Dimostrazione (concettuale):** La dimostrazione si basa sulla definizione di indipendenza tramite le controimmagini. Se $X_i$ sono indipendenti, le sigma-algebre generate da gruppi disgiunti di queste variabili sono indipendenti. Le controimmagini di insiemi misurabili tramite $g_1$ e $g_2$ appartengono a queste sigma-algebre indipendenti, garantendo l'indipendenza di $Y_1$ e $Y_2$.

#### Applicazione Tipica: Calcolo del Valore Atteso

Consideriamo variabili aleatorie $X_1, X_2, X_3$ indipendenti con momento secondo finito, cioè $E[X_i^2] < \infty$ per $i = 1, 2, 3$. Vogliamo calcolare il valore atteso di un'espressione come:

$Y = (X_1^2 + \sin(X_1 + X_2)) \cdot e^{-|X_3|}$

Definiamo $Y_1 = X_1^2 + \sin(X_1 + X_2)$ e $Y_2 = e^{-|X_3|}$. Notiamo che $Y_1$ è funzione di $X_1$ e $X_2$, mentre $Y_2$ è funzione solo di $X_3$. Poiché $X_1, X_2, X_3$ sono indipendenti, allora $Y_1$ e $Y_2$ sono indipendenti.

Se $E[|Y_1|] < \infty$ e $E[|Y_2|] < \infty$, allora il valore atteso del prodotto è il prodotto dei valori attesi:

$E[Y] = E[Y_1 Y_2] = E[Y_1] E[Y_2] = E[X_1^2 + \sin(X_1 + X_2)] \cdot E[e^{-|X_3|}]$

Per verificare che i valori attesi siano finiti:

- $|Y_2| = |e^{-|X_3|}| = e^{-|X_3|} \leq 1$, quindi $E[|Y_2|] \leq 1 < \infty$.
- $|Y_1| = |X_1^2 + \sin(X_1 + X_2)| \leq |X_1^2| + |\sin(X_1 + X_2)| \leq X_1^2 + 1$. Poiché $E[X_1^2] < \infty$, allora $E[|Y_1|] \leq E[X_1^2] + 1 < \infty$.

Questa proprietà è fondamentale quando si analizzano funzioni complesse di variabili aleatorie indipendenti.
![[Pasted image 20250415152305.png]]
### Covarianza

#### Definizione

Date due variabili aleatorie $X_1$ e $X_2$ con momento secondo finito (cioè $E[X_1^2] < \infty$ e $E[X_2^2] < \infty$), la **covarianza** di $X_1$ e $X_2$ è definita come:

$Cov(X_1, X_2) = E[(X_1 - E[X_1])(X_2 - E[X_2])]$

Perché la covarianza è importante? Consideriamo la **varianza di una combinazione lineare** di due variabili aleatorie:

$Var(aX_1 + bX_2) = E[(aX_1 + bX_2 - E[aX_1 + bX_2])^2]$ $= E[(a(X_1 - E[X_1]) + b(X_2 - E[X_2]))^2]$ $= E[a^2(X_1 - E[X_1])^2 + b^2(X_2 - E[X_2])^2 + 2ab(X_1 - E[X_1])(X_2 - E[X_2])]$ $= a^2 E[(X_1 - E[X_1])^2] + b^2 E[(X_2 - E[X_2])^2] + 2ab E[(X_1 - E[X_1])(X_2 - E[X_2])]$ $= a^2 Var(X_1) + b^2 Var(X_2) + 2ab Cov(X_1, X_2)$

La covarianza emerge naturalmente quando si studia la variabilità di somme di variabili aleatorie.
![[Pasted image 20250415153126.png]]
![[Pasted image 20250415153111.png]]
![[Pasted image 20250415153552.png]]
## Proprietà della Covarianza
![[Pasted image 20250415154122.png]]
### 1. Covarianza di una variabile con se stessa

**Proprietà:** La covarianza di una variabile aleatoria con se stessa è uguale alla sua varianza.

$Cov(X_1, X_1) = Var(X_1)$

**Commento del professore:** Nessuno vieta di considerare il vettore particolare che ha come componente sempre la stessa variabile aleatoria. In questo caso, applicando la definizione di covarianza, il prodotto $(X_1 - E[X_1])(X_1 - E[X_1])$ diventa $(X_1 - E[X_1])^2$, e il valore atteso di questo è proprio la definizione di varianza.

### 2. Simmetria della Covarianza

**Proprietà:** La covarianza tra due variabili aleatorie è simmetrica.

$Cov(X_1, X_2) = Cov(X_2, X_1)$

**Commento del professore:** Questa proprietà è ovvia direttamente dalla definizione di covarianza, poiché il prodotto $(X_1 - E[X_1])(X_2 - E[X_2])$ è commutativo. Quindi l'ordine delle variabili non influenza il risultato della covarianza. Questa proprietà implica che quando si calcola la varianza di una somma di variabili aleatorie, il termine $Cov(X_i, X_j)$ è lo stesso di $Cov(X_j, X_i)$, il che è importante per le formule generali.

### 3. Relazione con il momento misto

**Proprietà:** La covarianza può essere espressa come il momento misto meno il prodotto dei momenti primi (valori attesi).

$Cov(X_1, X_2) = E[X_1 X_2] - E[X_1]E[X_2]$

**Dimostrazione:** Il professore svolge la dimostrazione nel seguente modo: Partendo dalla definizione: $Cov(X_1, X_2) = E[(X_1 - E[X_1])(X_2 - E[X_2])]$ Si sviluppa il prodotto all'interno del valore atteso: $Cov(X_1, X_2) = E[X_1 X_2 - X_1 E[X_2] - E[X_1] X_2 + E[X_1] E[X_2]]$ Utilizzando la linearità del valore atteso, si ottiene: $Cov(X_1, X_2) = E[X_1 X_2] - E[X_1 E[X_2]] - E[E[X_1] X_2] + E[E[X_1] E[X_2]]$ Poiché $E[X_1]$ e $E[X_2]$ sono costanti, possono essere portate fuori dal valore atteso: $Cov(X_1, X_2) = E[X_1 X_2] - E[X_1] E[X_2] - E[X_1] E[X_2] + E[X_1] E[X_2]$ Combinando gli ultimi due termini, si arriva a: $Cov(X_1, X_2) = E[X_1 X_2] - E[X_1] E[X_2]$
![[Pasted image 20250415160401.png]]
**Commento del professore:** Questa è una dimostrazione tipica che può essere richiesta in un compito. Spesso è più comodo calcolare separatamente il momento misto $E[X_1 X_2]$ e i momenti marginali $E[X_1]$ e $E[X_2]$ per poi trovare la covarianza.

### 4. Effetto delle trasformazioni lineari

**Proprietà:** La covarianza è quadratica nei coefficienti e insensibile alle traslazioni. Per costanti $a, b, c, d \in \mathbb{R}$:

$Cov(aX_1 + c, bX_2 + d) = ab Cov(X_1, X_2)$

**Dimostrazione:** Il professore esegue la dimostrazione come segue: Partendo dalla definizione di covarianza applicata alle variabili trasformate: $Cov(aX_1 + c, bX_2 + d) = E[((aX_1 + c) - E[aX_1 + c])((bX_2 + d) - E[bX_2 + d])]$ Si calcolano i valori attesi delle variabili trasformate: $E[aX_1 + c] = aE[X_1] + c$ $E[bX_2 + d] = bE[X_2] + d$ Sostituendo nella definizione: $Cov(aX_1 + c, bX_2 + d) = E[(aX_1 + c - (aE[X_1] + c))(bX_2 + d - (bE[X_2] + d))]$ $Cov(aX_1 + c, bX_2 + d) = E[(aX_1 - aE[X_1])(bX_2 - bE[X_2])]$ S Factorizzano le costanti $a$ e $b$: $Cov(aX_1 + c, bX_2 + d) = E[a(X_1 - E[X_1]) b(X_2 - E[X_2])]$ $Cov(aX_1 + c, bX_2 + d) = E[ab(X_1 - E[X_1])(X_2 - E[X_2])]$ Per linearità del valore atteso, le costanti $a$ e $b$ possono essere portate fuori: $Cov(aX_1 + c, bX_2 + d) = ab E[(X_1 - E[X_1])(X_2 - E[X_2])] = ab Cov(X_1, X_2)$
![[Pasted image 20250415160714.png]]
**Commento del professore:** Come per la varianza (che ha un solo coefficiente), la covarianza è insensibile alle traslazioni (l'aggiunta delle costanti $c$ e $d$) e i coefficienti moltiplicativi $a$ e $b$ vengono portati fuori, moltiplicandosi tra loro.

### 5. Covarianza di variabili indipendenti

**Proprietà:** Se due variabili aleatorie $X_1$ e $X_2$ sono indipendenti, allora la loro covarianza è zero.

$Se \ X_1 \ e \ X_2 \ sono \ indipendenti, \ allora \ Cov(X_1, X_2) = 0$

**Dimostrazione:** Il professore spiega la dimostrazione in questo modo: Se $X_1$ e $X_2$ sono indipendenti e hanno momento secondo finito (il che implica che abbiano anche momento primo finito, altrimenti non si potrebbe nemmeno scrivere la covarianza), allora $E[X_1 X_2] = E[X_1] E[X_2]$. Utilizzando la proprietà 3: $Cov(X_1, X_2) = E[X_1 X_2] - E[X_1] E[X_2] = E[X_1] E[X_2] - E[X_1] E[X_2] = 0$
![[Pasted image 20250415160219.png]]
**Commento del professore:** Il fatto che siano indipendenti implica che il valore atteso del prodotto si fattorizza nel prodotto dei valori attesi, portando direttamente a una covarianza nulla.

**Attenzione:** Il professore sottolinea che **il viceversa non è sempre vero**. Una covarianza nulla non implica necessariamente che le variabili aleatorie siano indipendenti. Possono esistere situazioni in cui la covarianza è zero ma le variabili sono dipendenti.

### 6. Caso speciale: media nulla

**Proprietà:** Se una delle due variabili aleatorie ha media nulla (e la covarianza è finita), allora la covarianza è uguale al valore atteso del momento misto.

$Se \ E[X_1] = 0 \ (e \ Cov(X_1, X_2) \ è \ finita), \ allora \ Cov(X_1, X_2) = E[X_1 X_2]$

**Spiegazione:** Se $E[X_1] = 0$, allora dalla proprietà 3: $Cov(X_1, X_2) = E[X_1 X_2] - E[X_1] E[X_2] = E[X_1 X_2] - 0 \cdot E[X_2] = E[X_1 X_2]$
![[Pasted image 20250415160850.png]]
**Commento del professore:** Questa è una proprietà semplice ma utile. Se si sa che una delle due variabili ha media zero, per calcolare la covarianza è sufficiente calcolare il valore atteso del loro prodotto, risparmiando un potenziale calcolo di un integrale.

#### Varianza di una Combinazione Lineare di $n$ Variabili Aleatorie

Generalizzando al caso di $n$ variabili aleatorie $X_1, \dots, X_n$ e costanti $a_1, \dots, a_n$, la varianza della combinazione lineare $\sum_{i=1}^n a_i X_i$ è data da:

$Var(\sum_{i=1}^n a_i X_i) = \sum_{i=1}^n \sum_{j=1}^n a_i a_j Cov(X_i, X_j)$

Questa formula può essere riscritta in diverse forme equivalenti:

$Var(\sum_{i=1}^n a_i X_i) = \sum_{i=1}^n a_i^2 Var(X_i) + \sum_{i \neq j} a_i a_j Cov(X_i, X_j)$

Oppure:

$Var(\sum_{i=1}^n a_i X_i) = \sum_{j=1}^n a_j^2 Var(X_j) + 2 \sum_{1 \leq i < j \leq n} a_i a_j Cov(X_i, X_j)$

Queste espressioni mostrano come la variabilità di una somma di variabili aleatorie dipenda non solo dalle varianze individuali, ma anche dalle covarianze tra le coppie di variabili.
![[Pasted image 20250415161729.png]]
#### Covarianza di Combinazioni Lineari

Date due collezioni di variabili aleatorie ${X_i}_{i=1}^m$ e ${Y_j}_{j=1}^n$ definite sullo stesso spazio di probabilità, e costanti ${a_i}_{i=1}^m$ e ${b_j}_{j=1}^n$, la covarianza delle combinazioni lineari $\sum_{i=1}^m a_i X_i$ e $\sum_{j=1}^n b_j Y_j$ è:

$Cov(\sum_{i=1}^m a_i X_i, \sum_{j=1}^n b_j Y_j) = \sum_{i=1}^m \sum_{j=1}^n a_i b_j Cov(X_i, Y_j)$

Questa proprietà, detta bilinearità della covarianza, è fondamentale per manipolare espressioni che coinvolgono combinazioni lineari di variabili aleatorie.
![[Pasted image 20250415161853.png]]
**Esempio:** $Cov(a_1 X_1 + a_2 X_2, b_1 Y_1 + b_2 Y_2) = a_1 b_1 Cov(X_1, Y_1) + a_1 b_2 Cov(X_1, Y_2) + a_2 b_1 Cov(X_2, Y_1) + a_2 b_2 Cov(X_2, Y_2)$

Inoltre, la covarianza è insensibile alle traslazioni: $Cov(X + c, Y) = Cov(X, Y)$ per qualsiasi costante $c$.

#### Esempi di Calcolo di Covarianza

1. $Cov(2X + 1, Y + 3Z) = Cov(2X, Y + 3Z) = 2 Cov(X, Y + 3Z) = 2 (Cov(X, Y) + Cov(X, 3Z)) = 2 Cov(X, Y) + 2 \cdot 3 Cov(X, Z) = 2 Cov(X, Y) + 6 Cov(X, Z)$.
    
2. $Cov(3X + 1, X + Y) = Cov(3X, X + Y) = 3 Cov(X, X + Y) = 3 (Cov(X, X) + Cov(X, Y)) = 3 (Var(X) + Cov(X, Y))$.
    
3. $Cov(c, X) = Cov(c + 0, X + 0) = 1 \cdot 1 \cdot Cov(\text{costante nulla}, X) = Cov(0, X) = E[(0 - E)(X - E[X])] = E[0 \cdot (X - E[X])] = E = 0$. La covarianza tra una costante e una variabile aleatoria è sempre zero.
![[Pasted image 20250415162426.png]]

**Commento:**

- **Insensibilità alle traslazioni:** La costante $+1$ nel primo argomento e $+3z$ nel secondo argomento non influenzano la covarianza. Questo è dovuto alla proprietà che $Cov(aX_1 + c, bX_2 + d) = ab Cov(X_1, X_2)$. Le costanti additive ($c$ e $d$) vengono eliminate nel calcolo della covarianza perché si annullano quando si considerano le deviazioni dalla media.
- **Linearità nei coefficienti:** I coefficienti moltiplicativi ($2$ per $x$ e potenzialmente un coefficiente implicito di $1$ per $y$, e $3$ per $z$) vengono estratti dalla covarianza. $Cov(2x, y) = 2 Cov(x, y)$ e $Cov(x, 3z) = 3 Cov(x, z)$. Quando abbiamo una combinazione lineare in entrambi gli argomenti, i coefficienti si moltiplicano, come si vede nel termine $2 \cdot 3 \cdot Cov(x, z)$.
- **Distribuzione della covarianza:** La covarianza si "distribuisce" sulla somma, in modo simile al valore atteso. $Cov(2x + 1, y + 3z) = Cov(2x + 1, y) + Cov(2x + 1, 3z)$. Applicando poi l'insensibilità alle traslazioni e la linearità dei coefficienti, si arriva al risultato.

### Esercizio Difficile sulla Covarianza

**Esercizio:** Siano $X_1, X_2$ e $\tilde{X}_1, \tilde{X}_2$ due vettori aleatori indipendenti con la stessa legge (stessa distribuzione congiunta). Dimostrare che:

$Cov(X_1, X_2) = \frac{1}{2} E[(X_1 - \tilde{X}_1)(X_2 - \tilde{X}_2)]$
![[Pasted image 20250415162457.png]]
![[Pasted image 20250415162800.png|200]]
**Spiegazione intuitiva della Covarianza come indice di concordanza:**

La covarianza misura come due variabili aleatorie variano insieme. Un valore positivo indica che tendono a muoversi nella stessa direzione, mentre un valore negativo indica che tendono a muoversi in direzioni opposte. Un valore vicino a zero suggerisce una relazione lineare debole o assente.

L'esercizio proposto cerca di fornire un'ulteriore interpretazione della covarianza confrontando le realizzazioni di due coppie indipendenti con la stessa distribuzione. L'espressione $E[(X_1 - \tilde{X}_1)(X_2 - \tilde{X}_2)]$ considera le differenze tra le prime componenti e le differenze tra le seconde componenti delle due coppie. Il valore atteso di questo prodotto è legato alla tendenza delle variazioni congiunte delle variabili.

Questo esercizio, pur non essendo direttamente utile per il compitino imminente, è prezioso per approfondire la comprensione delle proprietà delle variabili aleatorie e del concetto di covarianza.
___
### Conclusione sull'Argomento Varianza, Covarianza e Correlazione

- **Definizione di Coefficiente di Correlazione Lineare**
    
    - Date due variabili aleatorie reali $X_1$ e $X_2$ con momento secondo finito (e quindi con varianza finita), il **coefficiente di correlazione lineare**, spesso indicato con $r$ o $\rho$, è definito come: $$\rho = \frac{Cov(X_1, X_2)}{\sqrt{Var(X_1)Var(X_2)}}$$
    - Questa definizione è valida assumendo che le varianze siano diverse da zero.
    - Il professore specifica che si tratterà solo di questo tipo di coefficiente di correlazione, sottolineando che ne esistono altri (come la $\tau$ di Kendall, legata a una diversa forma di dipendenza).
- **Proprietà del Coefficiente di Correlazione Lineare**
    
    - **Proposizione 1:** Il coefficiente di correlazione lineare $\rho$ è un numero compreso tra -1 e 1, inclusi.
        - **Commento:** La covarianza può assumere qualsiasi valore tra $-\infty$ e $+\infty$. La divisione per la radice del prodotto delle varianze (che sono positive) normalizza la covarianza, restringendo l'intervallo dei valori possibili per $\rho$.
    - **Proposizione 2:** I casi estremi, $|\rho| = 1$ (ovvero $\rho = 1$ o $\rho = -1$), si verificano **se e solo se** esiste una relazione lineare tra $X_1$ e $X_2$ con probabilità 1. Ciò significa che esistono costanti $a \neq 0$, $b$, $c \neq 0$, e $d$ tali che con probabilità 1 il vettore $(X_1, X_2)$ è concentrato su una retta, la cui equazione è $ax_1 + bx_2 = c$. In altre parole, $X_2$ può essere espressa come una funzione lineare di $X_1$ (o viceversa), quasi certamente.
        - Se $\rho = 1$, allora $X_2 = \alpha X_1 + \beta$ con $\alpha > 0$ quasi certamente.
        - Se $\rho = -1$, allora $X_2 = \alpha X_1 + \beta$ con $\alpha < 0$ quasi certamente.
        - **Commento:** Un valore di $\rho$ vicino a 1 o -1 suggerisce una forte tendenza alla dipendenza lineare, ma solo i valori estremi indicano una dipendenza lineare esatta con probabilità 1. È possibile avere dipendenza completa (dove una variabile è funzione deterministica dell'altra) senza che $\rho$ sia uguale a 1 o -1 se la relazione non è lineare.
    ![[Pasted image 20250416142809.png]]
- **Dimostrazione delle Proprietà della Correlazione Lineare**
    
    1. Consideriamo la varianza della variabile aleatoria trasformata $\frac{X_1}{\sigma_1} + \frac{X_2}{\sigma_2}$: $Var\left(\frac{X_1}{\sigma_1} + \frac{X_2}{\sigma_2}\right) \geq 0$ Questo è vero perché la varianza di qualsiasi variabile aleatoria reale è sempre non negativa.
    
	2. Applichiamo la proprietà della varianza della somma di due variabili aleatorie: $Var(A + B) = Var(A) + Var(B) + 2 Cov(A, B)$. Nel nostro caso, $A = \frac{X_1}{\sigma_1}$ e $B = \frac{X_2}{\sigma_2}$: $Var\left(\frac{X_1}{\sigma_1}\right) + Var\left(\frac{X_2}{\sigma_2}\right) + 2 Cov\left(\frac{X_1}{\sigma_1}, \frac{X_2}{\sigma_2}\right) \geq 0$
	    
	3. Utilizziamo la proprietà della varianza di una variabile moltiplicata per una costante: $Var(aX) = a^2 Var(X)$: $\frac{1}{\sigma_1^2} Var(X_1) + \frac{1}{\sigma_2^2} Var(X_2) + 2 Cov\left(\frac{X_1}{\sigma_1}, \frac{X_2}{\sigma_2}\right) \geq 0$
	    
	4. Sappiamo che $Var(X_1) = \sigma_1^2$ e $Var(X_2) = \sigma_2^2$, quindi: $\frac{\sigma_1^2}{\sigma_1^2} + \frac{\sigma_2^2}{\sigma_2^2} + 2 Cov\left(\frac{X_1}{\sigma_1}, \frac{X_2}{\sigma_2}\right) \geq 0$ $1 + 1 + 2 Cov\left(\frac{X_1}{\sigma_1}, \frac{X_2}{\sigma_2}\right) \geq 0$ $2 + 2 Cov\left(\frac{X_1}{\sigma_1}, \frac{X_2}{\sigma_2}\right) \geq 0$
	    
	5. Applichiamo la proprietà della covarianza con costanti: $Cov(aX, bY) = ab Cov(X, Y)$: $2 + 2 \cdot \frac{1}{\sigma_1} \cdot \frac{1}{\sigma_2} Cov(X_1, X_2) \geq 0$ $2 + 2 \frac{Cov(X_1, X_2)}{\sigma_1 \sigma_2} \geq 0$
	    
	6. Riconosciamo nella frazione la definizione del coefficiente di correlazione $\rho$: $2 + 2 \rho \geq 0$ $2 \rho \geq -2$ $\rho \geq -1$
	    
	7. Ora consideriamo la varianza della variabile aleatoria trasformata $\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2}$: $Var\left(\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2}\right) \geq 0$
	    
	8. Applichiamo la proprietà della varianza della somma (o differenza): $Var(A - B) = Var(A) + Var(B) - 2 Cov(A, B)$: $Var\left(\frac{X_1}{\sigma_1}\right) + Var\left(-\frac{X_2}{\sigma_2}\right) - 2 Cov\left(\frac{X_1}{\sigma_1}, -\frac{X_2}{\sigma_2}\right) \geq 0$
	    
	9. Utilizzando le proprietà $Var(aX) = a^2 Var(X)$ e $Cov(aX, bY) = ab Cov(X, Y)$: $\frac{1}{\sigma_1^2} Var(X_1) + \left(-\frac{1}{\sigma_2}\right)^2 Var(X_2) - 2 \cdot \frac{1}{\sigma_1} \cdot \left(-\frac{1}{\sigma_2}\right) Cov(X_1, X_2) \geq 0$ $\frac{\sigma_1^2}{\sigma_1^2} + \frac{\sigma_2^2}{\sigma_2^2} + 2 \frac{Cov(X_1, X_2)}{\sigma_1 \sigma_2} \geq 0$ $1 + 1 + 2 \rho \geq 0$
	    
	10. Attenzione, c'è un errore nel passaggio riportato nella fonte. La covarianza di $\frac{X_1}{\sigma_1}$ e $-\frac{X_2}{\sigma_2}$ è $-\frac{1}{\sigma_1 \sigma_2} Cov(X_1, X_2) = -\rho$. Quindi la disuguaglianza corretta è: $1 + 1 - 2 (-\rho) \geq 0$ $2 + 2 \rho \geq 0$, che ci riporta a $\rho \geq -1$.
	    
	    Ripartiamo dal passo 8 con maggiore attenzione al segno: $Var\left(\frac{X_1}{\sigma_1}\right) + Var\left(-\frac{X_2}{\sigma_2}\right) - 2 Cov\left(\frac{X_1}{\sigma_1}, -\frac{X_2}{\sigma_2}\right) \geq 0$ $\frac{1}{\sigma_1^2} Var(X_1) + \frac{1}{\sigma_2^2} Var(X_2) - 2 \left(-\frac{1}{\sigma_1 \sigma_2}\right) Cov(X_1, X_2) \geq 0$ $1 + 1 + 2 \frac{Cov(X_1, X_2)}{\sigma_1 \sigma_2} \geq 0$ $2 + 2 \rho \geq 0 \implies \rho \geq -1$.
	    
	    Ora rifacciamo il caso con il segno meno: $Var\left(\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2}\right) = Var\left(\frac{X_1}{\sigma_1}\right) + Var\left(-\frac{X_2}{\sigma_2}\right) + 2 Cov\left(\frac{X_1}{\sigma_1}, -\frac{X_2}{\sigma_2}\right) \geq 0$ $1 + 1 + 2 \left(-\frac{1}{\sigma_1 \sigma_2}\right) Cov(X_1, X_2) \geq 0$ $2 - 2 \rho \geq 0$ $2 \geq 2 \rho$ $1 \geq \rho \implies \rho \leq 1$
	    ![[Pasted image 20250416143337.png]]
	    Quindi, combinando i risultati, otteniamo **$-1 \leq \rho \leq 1$**.
        
**Proprietà 2: $|\rho| = 1$ se e solo se esiste una relazione lineare tra $X_1$ e $X_2$ con probabilità 1**

**Dimostrazione:**

- **Caso $\rho = 1$:** Dalla dimostrazione precedente, abbiamo visto che $Var\left(\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2}\right) = 2 - 2\rho$. Se $\rho = 1$, allora $Var\left(\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2}\right) = 2 - 2(1) = 0$. Se la varianza di una variabile aleatoria è zero, significa che la variabile è costante con probabilità 1. Quindi, esiste una costante $c$ tale che: $\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2} = c$ con probabilità 1. $X_1 = \frac{\sigma_1}{\sigma_2} X_2 + c \sigma_1$ con probabilità 1. Questa è una relazione lineare della forma $X_1 = \alpha X_2 + \beta$ dove $\alpha = \frac{\sigma_1}{\sigma_2} > 0$ e $\beta = c \sigma_1$. Il segno positivo di $\alpha$ corrisponde a una correlazione positiva.
    
- **Caso $\rho = -1$:** Dalla dimostrazione precedente, abbiamo visto che $Var\left(\frac{X_1}{\sigma_1} + \frac{X_2}{\sigma_2}\right) = 2 + 2\rho$. Se $\rho = -1$, allora $Var\left(\frac{X_1}{\sigma_1} + \frac{X_2}{\sigma_2}\right) = 2 + 2(-1) = 0$. Analogamente, esiste una costante $c'$ tale che: $\frac{X_1}{\sigma_1} + \frac{X_2}{\sigma_2} = c'$ con probabilità 1. $X_1 = -\frac{\sigma_1}{\sigma_2} X_2 + c' \sigma_1$ con probabilità 1. Questa è una relazione lineare della forma $X_1 = \alpha X_2 + \beta$ dove $\alpha = -\frac{\sigma_1}{\sigma_2} < 0$ e $\beta = c' \sigma_1$. Il segno negativo di $\alpha$ corrisponde a una correlazione negativa.
    ![[Pasted image 20250416143921.png]]
- **Viceversa:** Se esiste una relazione lineare $X_2 = \alpha X_1 + \beta$ con $\alpha \neq 0$ (condizione $a \neq 0$ nella fonte), allora possiamo calcolare la covarianza e le varianze: $Cov(X_1, X_2) = Cov(X_1, \alpha X_1 + \beta) = \alpha Cov(X_1, X_1) = \alpha Var(X_1) = \alpha \sigma_1^2$. $Var(X_2) = Var(\alpha X_1 + \beta) = \alpha^2 Var(X_1) = \alpha^2 \sigma_1^2$, quindi $\sigma_2 = |\alpha| \sigma_1$. Sostituendo nella definizione di $\rho$: $\rho = \frac{\alpha \sigma_1^2}{\sigma_1 |\alpha| \sigma_1} = \frac{\alpha}{|\alpha|} = \begin{cases} 1 & \text{se } \alpha > 0 \ -1 & \text{se } \alpha < 0 \end{cases}$ Quindi $|\rho| = 1$. Lo stesso ragionamento si applica se $X_1$ è una funzione lineare di $X_2$.
    ![[Pasted image 20250416144112.png]]

**Commento:**

La dimostrazione si basa sull'importante proprietà che la varianza di una variabile aleatoria è zero se e solo se la variabile è costante con probabilità 1. Normalizzando le variabili $X_1$ e $X_2$ per le loro deviazioni standard, si ottengono variabili con varianza unitaria. La varianza della somma o della differenza di queste variabili normalizzate è poi legata al coefficiente di correlazione. I casi estremi $\rho = 1$ e $\rho = -1$ si verificano quando la combinazione lineare delle variabili normalizzate ha varianza zero, il che implica una relazione lineare deterministica tra le variabili originali. Il segno di $\rho$ indica la direzione di questa relazione lineare.

È importante notare che il coefficiente di correlazione lineare misura solo la **dipendenza lineare** tra le variabili. Se le variabili sono dipendenti ma la loro relazione non è lineare, il coefficiente di correlazione lineare potrebbe essere vicino a zero.

### Osservazione Importante sulla Varianza della Somma di Variabili Aleatorie Indipendenti

- Se $X_1, X_2, ..., X_n$ sono variabili aleatorie **indipendenti** con varianza finita, allora la varianza della loro somma è uguale alla somma delle loro varianze: $$Var\left(\sum_{i=1}^{n} X_i\right) = \sum_{i=1}^{n} Var(X_i)$$
    - **Giustificazione:** La varianza della somma è data da: $$Var\left(\sum_{i=1}^{n} X_i\right) = \sum_{i=1}^{n} Var(X_i) + \sum_{i \neq j} Cov(X_i, X_j)$$ Se le variabili sono indipendenti, la loro covarianza è zero ($Cov(X_i, X_j) = 0$ per $i \neq j$). Pertanto, il secondo termine della somma si annulla, lasciando solo la somma delle varianze.
    ![[Pasted image 20250416144254.png]]
    - **Attenzione:** Questa proprietà vale solo sotto l'ipotesi di indipendenza (o più generalmente, se le variabili hanno correlazione nulla).

### Esempio: Varianza di una Variabile Aleatoria Binomiale

- Sia $X \sim Bin(n, p)$ una variabile aleatoria binomiale con parametri $n$ (numero di prove) e $p$ (probabilità di successo).
- Una variabile binomiale può essere vista come la somma di $n$ variabili aleatorie di Bernoulli indipendenti e identicamente distribuite $I_i \sim Bern(p)$ per $i = 1, ..., n$: $$X = \sum_{i=1}^{n} I_i$$
- **Calcolo del valore atteso (ripasso):** $$E[X] = E\left[\sum_{i=1}^{n} I_i\right] = \sum_{i=1}^{n} E[I_i]$$ Il valore atteso di una variabile di Bernoulli è $E[I_i] = 0 \cdot (1-p) + 1 \cdot p = p$. Quindi, $E[X] = \sum_{i=1}^{n} p = np$.
- **Calcolo della varianza:** Poiché le variabili di Bernoulli sono indipendenti, possiamo applicare la proprietà della varianza della somma: $$Var(X) = Var\left(\sum_{i=1}^{n} I_i\right) = \sum_{i=1}^{n} Var(I_i)$$ La varianza di una variabile di Bernoulli è: $$Var(I_i) = E[I_i^2] - (E[I_i])^2$$ Poiché per una Bernoulli $I_i^2 = I_i$ (0²=0, 1²=1), si ha $E[I_i^2] = E[I_i] = p$. Quindi, $Var(I_i) = p - p^2 = p(1 - p)$. Pertanto, la varianza della binomiale è: $$Var(X) = \sum_{i=1}^{n} p(1 - p) = n p(1 - p)$$
![[Pasted image 20250416144332.png]]
    - **Commento:** Questo esempio mostra come l'utilizzo della proprietà della va rianza della somma per variabili indipendenti semplifica il calcolo della varianza di una binomiale rispetto all'applicazione diretta della definizione alla sua densità discreta.

### Trasformazioni di Variabili Aleatorie

- **Problema generale:** Data una variabile aleatoria $X$ con una certa legge, si vuole studiare la legge di una nuova variabile aleatoria $Y = g(X)$, dove $g$ è una funzione.
    
- **Caso discreto:** Se $X$ è una variabile aleatoria discreta, allora anche $Y = g(X)$ sarà discreta. La probabilità che $Y$ assuma un valore $y$ è data dalla somma delle probabilità di tutti i valori $x$ nel dominio di $X$ tali che $g(x) = y$: $$P(Y = y) = P(g(X) = y) = \sum_{x: g(x) = y} P(X = x) = \sum_{x: g(x) = y} f_X(x)$$ dove $f_X(x)$ è la densità discreta di $X$.
    ![[Pasted image 20250416151204.png]]
- **Caso continuo:** Se $X$ è una variabile aleatoria assolutamente continua, la situazione per $Y = g(X)$ è più complessa. In generale, $Y$ potrebbe essere continua, discreta o mista (come visto in un esercizio del compito, ad esempio per il massimo di variabili aleatorie).
    
    - **Esempio menzionato:** $X^2$, se $X$ è assolutamente continua, è anch'essa assolutamente continua.
    - In generale, non si possono dare condizioni semplici su $g$ per determinare la natura di $Y$'s. Si analizza caso per caso.
    - La **legge immagine** di $Y$, caratterizzata dalla sua funzione di ripartizione o dalle probabilità di eventi, è data da: $$P(Y \in A) = P(g(X) \in A) = P(X \in g^{-1}(A))$$ dove $g^{-1}(A) = {x: g(x) \in A}$ è la controimmagine dell'insieme $A$ sotto la funzione $g$. Se $X$ è assolutamente continua con densità $f_X(x)$, allora: $$P(Y \in A) = \int_{g^{-1}(A)} f_X(x) dx = \int_{\set{x: g(x) \in A}} f_X(x) dx$$ Questo integrale, a seconda della funzione $g$ e dell'insieme $A$, può essere più o meno facile da calcolare. Per calcolare la funzione di ripartizione di $Y$, si prende $A = (-\infty, y]$.
    - **Estensione a variabili vettoriali:** Questi concetti si estendono al caso in cui $X$ è un vettore aleatorio in $\mathbb{R}^d$ e $g: \mathbb{R}^d \rightarrow \mathbb{R}^k$. L'unica differenza è che l'integrale è ora su un sottoinsieme di $\mathbb{R}^d$.
	![[Pasted image 20250416151309.png]]
### Somma di Variabili Aleatorie

- La somma di variabili aleatorie è un caso particolare di trasformazione di variabili aleatorie, molto frequente in probabilità e statistica.
    
- Si considera il caso in cui $X = (X_1, ..., X_d)$ è un vettore aleatorio e $g(X) = \sum_{i=1}^{d} X_i$ è la somma delle sue componenti.
    
- **Caso discreto (d=2):** Siano $X_1$ e $X_2$ due variabili aleatorie discrete e $Y = X_1 + X_2$. La densità discreta di $Y$ in un punto $y$ è data da: $$P(Y = y) = \sum_{(x_1, x_2): x_1 + x_2 = y} P(X_1 = x_1, X_2 = x_2)$$ Questa somma doppia può essere riscritta come una somma singola, fissando $x_1$ e determinando $x_2 = y - x_1$: $$P(Y = y) = \sum_{x_1} P(X_1 = x_1, X_2 = y - x_1)$$
    
- **Caso di variabili indipendenti:** Se $X_1$ e $X_2$ sono indipendenti, allora $P(X_1 = x_1, X_2 = x_2) = P(X_1 = x_1) P(X_2 = x_2)$. In questo caso, la densità discreta della somma diventa: $$P(Y = y) = \sum_{x_1} P(X_1 = x_1) P(X_2 = y - x_1)$$ Questa operazione è nota come **convoluzione discreta** delle densità di probabilità di $X_1$ e $X_2$.
![[Pasted image 20250416151648.png]]
    
- **Esercizio proposto:** Considerare due variabili aleatorie di Poisson $X_1 \sim Poisson(\lambda_1)$ e $X_2 \sim Poisson(\lambda_2)$, indipendenti. Determinare la legge di densità della loro somma $Y = X_1 + X_2$.
    
    - **Commento:** Per risolvere questo esercizio, si applicherebbe la formula della convoluzione discreta, tenendo conto dei possibili valori che $X_1$ e $X_2$ possono assumere (interi non negativi) e dei valori che $Y$ può assumere. La somma sarebbe effettuata sugli $x_1 \geq 0$ tali che $y - x_1 \geq 0$.

____



# Trasformazioni di Variabili Aleatorie

## Caso Discreto: La Somma di Variabili Aleatorie Discrete

- Consideriamo due variabili aleatorie discrete, $x_1$ e $x_2$.
- La probabilità che la loro somma $y = x_1 + x_2$ assuma un certo valore $y$ è data dalla somma delle probabilità congiunte di tutte le coppie $(x_1, x_2)$ tali che $x_1 + x_2 = y$.
- Matematicamente, questo si esprime come: $P(y = x_1 + x_2) = \sum_{x_1} P(x_1, y - x_1)$
- La sommatoria è intesa per tutte le $x_1$ nel supporto di $x_1$ tali che $y - x_1$ sia nel supporto di $x_2$. Se $y - x_1$ non appartiene al supporto di $x_2$, quel termine semplicemente non compare nella somma.
- **Esempio:** Il professore suggerisce di considerare il caso della distribuzione di Poisson per farsi un'idea.

## Caso Continuo: La Somma di Variabili Aleatorie Assolutamente Continue

- Consideriamo due variabili aleatorie assolutamente continue, $x_1$ e $x_2$, con densità congiunta $f_X(x_1, x_2)$.
- La variabile aleatoria $y = x_1 + x_2$ è anch'essa assolutamente continua.
- La densità di probabilità di $y$, $f_y(y)$, può essere ottenuta calcolando prima la funzione di ripartizione $F_y(y) = P(x_1 + x_2 \le y)$ e poi derivandola rispetto a $y$.
- La densità $f_y(y)$ ha la seguente struttura nel caso di due variabili: $f_y(y) = \int_{-\infty}^{+\infty} f(x_1, y - x_1) dx_1$
- **Osservazione:** Questa è l'analogo continuo della somma che si ha nel caso discreto.
- **Esercizio (suggerito):** Il professore suggerisce di provare a dimostrare questa formula come esercizio, mostrando come la funzione di ripartizione si può scrivere come un integrale e come si arriva a questa espressione per la densità.
- **Caso di Indipendenza:** Se $x_1$ e $x_2$ sono indipendenti, la loro densità congiunta si fattorizza $f(x_1, x_2) = f_{x_1}(x_1) f_{x_2}(x_2)$, e la densità della somma diventa la **convoluzione** delle densità marginali: $f_y(y) = \int_{-\infty}^{+\infty} f_{x_1}(x_1) f_{x_2}(y - x_1) dx_1 = (f_{x_1} * f_{x_2})(y)$ A volte la convoluzione è indicata con l'asterisco.
- **Osservazione:** L'integrazione non è sempre su tutto $\mathbb{R}$. Ad esempio, se si considerano due variabili aleatorie esponenziali negative, la densità può essere zero per certi valori.
- **Complicazione per più variabili:** Per la somma di tre variabili aleatorie, si otterrebbe un integrale doppio, per quattro un integrale triplo, e così via, rendendo i calcoli spesso complessi.
![[Pasted image 20250423145725.png]]
# Matrice di Varianze e Covarianze
![[Pasted image 20250423150041.png]]
## Definizione

- Consideriamo un vettore di variabili aleatorie $Y = \begin{pmatrix} Y_1 \\ Y_2 \\ \vdots \\ Y_d \end{pmatrix}$.
- **Valore Atteso di un Vettore/Matrice:** Il valore atteso di un vettore o di una matrice di variabili aleatorie è definito componente per componente. Il valore atteso di un vettore $Y$ è il vettore delle medie dei suoi componenti: $$ E[Y] = E \begin{pmatrix} Y_1 \\ Y_2 \\ \vdots \\ Y_D \end{pmatrix} = \begin{pmatrix} E[Y_1] \\ E[Y_2] \\ \vdots \\ E[Y_D] \end{pmatrix} $$ Questo è ben definito se il valore atteso di ogni componente è finito.
- **Linearità del Valore Atteso (con Matrici Deterministiche):** Se A, B, C sono matrici deterministiche compatibili e Y è un vettore/matrice aleatorio, allora $E[A Y B + C] = A E[Y] B + C$, mantenendo l'ordine delle moltiplicazioni perché le matrici non commutano.

**2.2 Definizione della Matrice di Varianze e Covarianze** Per un vettore aleatorio $Y$ a valori in $\mathbb{R}^D$, la **matrice di varianze e covarianze** (a volte indicata come matrice di covarianza o matrice di varianza) è una matrice $D \times D$ dove l'elemento alla posizione $(i, j)$ è la covarianza tra $Y_i$ e $Y_j$. $$ \text{Cov}(Y)_{ij} = \text{Cov}(Y_i, Y_j) = E[(Y_i - E[Y_i])(Y_j - E[Y_j])] $$ Sulla diagonale principale di questa matrice si trovano le varianze delle singole componenti, poiché $\text{Cov}(Y_i, Y_i) = \text{Var}(Y_i)$.
![[Pasted image 20250423150831.png]]
**2.3 Proprietà della Matrice di Varianze e Covarianze** Si assume che tutte le componenti di $Y$ abbiano varianza finita, altrimenti non si potrebbe definire la matrice.

**2.3.1 Osservazione 1:** La matrice di varianze e covarianze può essere scritta in forma compatta usando il valore atteso di un prodotto esterno: $$ \text{Cov}(Y) = E[(Y - E[Y])(Y - E[Y])^T] $$ Questo perché la componente $(i, j)$ della matrice $(Y - E[Y])(Y - E[Y])^T$ è $(Y_i - E[Y_i])(Y_j - E[Y_j])$, e il valore atteso di questa quantità è per definizione la covarianza $\text{Cov}(Y_i, Y_j)$.
![[Pasted image 20250423151106.png]]
**2.3.2 Proprietà di Traslazione:** Se $B$ è un vettore deterministico, aggiungere $B$ al vettore aleatorio $Y$ non cambia la sua matrice di varianze e covarianze: $$ \text{Cov}(Y + B) = \text{Cov}(Y) $$ Questo deriva dalla definizione: $(Y+B) - E[Y+B] = Y+B - (E[Y] + B) = Y - E[Y]$, quindi la formula $E[(Y - E[Y])(Y - E[Y])^T]$ rimane invariata.

**2.3.3 Proprietà Fondamentali (Proposizione)** Per un vettore aleatorio $Y$ in $\mathbb{R}^D$ con varianze finite:

1. **Simmetria e Semidefinita Positività:** La matrice $\text{Cov}(Y)$ è simmetrica e semidefinita positiva. Si usa la notazione $\text{Cov}(Y) \ge 0$ per indicare la semidefinita positività. La simmetria è dovuta alla simmetria della covarianza: $\text{Cov}(Y_i, Y_j) = \text{Cov}(Y_j, Y_i)$.
2. **Trasformazione Lineare:** Se $A$ è una matrice deterministica $M \times D$ e $B$ è un vettore deterministico in $\mathbb{R}^M$, allora la matrice di varianze e covarianze del vettore aleatorio $AY + B$ (che sta in $\mathbb{R}^M$) è data da: $$ \text{Cov}(AY + B) = A \text{Cov}(Y) A^T $$
![[Pasted image 20250423151137.png]]
**2.3.4 Dimostrazione della Proprietà 2 (Trasformazione Lineare) (Dimostrazione)**

- **Passaggio 1:** Usando la proprietà di traslazione (Osservazione 1): $$ \text{Cov}(AY + B) = \text{Cov}(AY) $$
- **Passaggio 2:** Usando la definizione $\text{Cov}(Z) = E[(Z - E[Z])(Z - E[Z])^T]$ con $Z = AY$: $$ \text{Cov}(AY) = E[(AY - E[AY])(AY - E[AY])^T] $$
- **Passaggio 3:** Usando la linearità del valore atteso $E[AY] = AE[Y]$ e la proprietà del trasposto $(MN)^T = N^T M^T$: $$ E[(AY - AE[Y])(AY - AE[Y])^T] = E[A(Y - E[Y]) (A(Y - E[Y]))^T] $$ $$ = E[A(Y - E[Y]) (Y - E[Y])^T A^T] $$
 ![[Pasted image 20250423151925.png]]
- **Passaggio 4:** Usando la linearità del valore atteso per estrarre le matrici deterministiche $A$ e $A^T$: $$ A E[(Y - E[Y])(Y - E[Y])^T] A^T $$
- **Risultato:** Riconoscendo che $E[(Y - E[Y])(Y - E[Y])^T]$ è per definizione $\text{Cov}(Y)$: $$ \text{Cov}(AY + B) = A \text{Cov}(Y) A^T $$ Questo conclude la dimostrazione della Proprietà 2.

**2.3.5 Dimostrazione della Proprietà 1 (Semidefinita Positiva) (Dimostrazione)**

- **Passaggio 1:** Ricordare la definizione di matrice semidefinita positiva $S$: $x^T S x \ge 0$ per ogni vettore $x$. Vogliamo dimostrare che $x^T \text{Cov}(Y) x \ge 0$ per ogni $x \in \mathbb{R}^D$.
- **Passaggio 2:** Si consideri un vettore deterministico $x \in \mathbb{R}^D$ e si definisca una matrice $A = x^T$. Questa è una matrice $1 \times D$.
- **Passaggio 3:** Si consideri la variabile aleatoria scalare $Z = A Y = x^T Y$. Questa è una combinazione lineare delle componenti di $Y$, $Z = \sum_{i=1}^D x_i Y_i$.
- **Passaggio 4:** Si applichi la Proprietà 2 (dimostrata al punto 2.3.4) al vettore aleatorio $AY$ con $A=x^T$. Il risultato è una matrice $1 \times 1$ (uno scalare): $$ \text{Cov}(x^T Y) = x^T \text{Cov}(Y) (x^T)^T = x^T \text{Cov}(Y) x $$
- **Passaggio 5:** Riconoscere che $\text{Cov}(x^T Y)$ è semplicemente la varianza della variabile aleatoria scalare $Z = x^T Y$: $$ \text{Cov}(x^T Y) = \text{Var}(x^T Y) $$
- **Passaggio 6:** La varianza di qualunque variabile aleatoria scalare (se esiste finita) è sempre non negativa: $$ \text{Var}(x^T Y) \ge 0 $$
- **Risultato:** Combinando i passaggi 4, 5 e 6: $$ x^T \text{Cov}(Y) x = \text{Var}(x^T Y) \ge 0 $$ Questo vale per ogni vettore $x \in \mathbb{R}^D$, dimostrando che $\text{Cov}(Y)$ è una matrice semidefinita positiva. La simmetria è già stata osservata.
![[Pasted image 20250423152454.png]]
**Definizione:** Una matrice $S$ è semidefinita positiva ($S \ge 0$) se $x^T S x \ge 0$ per ogni vettore $x$. È definita positiva ($S > 0$) se $x^T S x > 0$ per ogni $x \ne 0$. Per le matrici simmetriche, questo equivale ad avere tutti gli autovalori reali non negativi (semidefinita positiva) o strettamente positivi (definita positiva).

**3. Funzioni Caratteristiche**

Le funzioni caratteristiche sono un altro strumento per caratterizzare la legge di una variabile aleatoria o di un vettore.

**3.1 Introduzione e Motivazione** Abbiamo già visto diversi oggetti (funzione di ripartizione, densità, densità discreta) che caratterizzano la legge di una variabile aleatoria. Tuttavia, come suggerito dall'esempio della somma, calcolare la densità della somma può essere computazionalmente oneroso (grandi integrali/somme di convoluzione). Avere più strumenti equivalenti per caratterizzare le distribuzioni e semplificare i calcoli è utile. Le funzioni caratteristiche sono uno di questi strumenti.

**3.2 Definizione per Variabile Aleatoria Reale** Per definire le funzioni caratteristiche, si usa l'esponenziale complesso. È utile ricordare che per un numero reale $x$, $e^{ix} = \cos(x) + i \sin(x)$.

**Definizione:** Data una variabile aleatoria reale $X$, la sua **funzione caratteristica** $\phi_X(t)$ è definita per ogni $t \in \mathbb{R}$ come il valore atteso dell'esponenziale complesso $e^{itX}$: $$ \phi_X(t) = E[e^{itX}] $$ $e^{itX}$ è una variabile aleatoria a valori complessi, che si può scrivere come $\cos(tX) + i \sin(tX)$. Il valore atteso di una variabile aleatoria complessa si definisce come il valore atteso della parte reale più $i$ volte il valore atteso della parte immaginaria: $$ E[e^{itX}] = E[\cos(tX) + i \sin(tX)] = E[\cos(tX)] + i E[\sin(tX)] $$ La funzione caratteristica $\phi_X(t)$ è **sempre ben definita** per ogni $t \in \mathbb{R}$. Questo perché le funzioni coseno e seno sono limitate (il modulo di $e^{itX}$ è $| \cos(tX) + i \sin(tX) | = \sqrt{\cos^2(tX) + \sin^2(tX)} = 1$). Pertanto, $\cos(tX)$ e $\sin(tX)$ sono variabili aleatorie limitate, e il loro valore atteso esiste sempre ed è finito. La funzione caratteristica è una funzione da $\mathbb{R}$ a $\mathbb{C}$.
![[Pasted image 20250423153200.png]]
**3.3 Definizione per Vettore Aleatorio** La definizione si estende ai vettori aleatori.

**Definizione:** Dato un vettore aleatorio $X$ a valori in $\mathbb{R}^D$, la sua **funzione caratteristica** $\phi_X(t)$ è definita per ogni vettore $t \in \mathbb{R}^D$ come il valore atteso dell'esponenziale complesso $e^{i t \cdot X}$, dove $t \cdot X$ è il prodotto scalare tra $t$ e $X$: $$ \phi_X(t) = E[e^{i t \cdot X}] $$ Il prodotto scalare $t \cdot X$ è $\sum_{j=1}^D T_j X_j$. Quindi $e^{i t \cdot X}$ è $e^{i \sum T_j X_j}$, che è l'esponenziale di uno scalare, e la definizione è l'analoga multidimensionale del caso unidimensionale. La funzione caratteristica di un vettore è una funzione da $\mathbb{R}^D$ a $\mathbb{C}$. È anch'essa sempre ben definita.
![[Pasted image 20250423153253.png]]
**3.4 Calcolo (Somme/Integrali)** Calcolare la funzione caratteristica richiede il calcolo di un valore atteso.

- Se $X$ è una variabile aleatoria discreta con densità (PMF) $P(x)$, la funzione caratteristica è una somma: $$ \phi_X(t) = \sum_x e^{itx} P(x) $$ La somma è su tutti i valori $x$ nel dominio di $X$.
- Se $X$ è una variabile aleatoria assolutamente continua con densità (PDF) $f(x)$, la funzione caratteristica è un integrale su $\mathbb{R}$: $$ \phi_X(t) = \int_{-\infty}^{\infty} e^{itx} f(x) dx $$
- Se $X$ è un vettore aleatorio assolutamente continuo in $\mathbb{R}^D$ con densità $f(x)$, la funzione caratteristica è un integrale su $\mathbb{R}^D$: $$ \phi_X(t) = \int_{\mathbb{R}^D} e^{i t \cdot x} f(x) dx = \int_{\mathbb{R}^D} e^{i \sum_{j=1}^D T_j X_j} f(x_1, \dots, x_D) dx_1 \dots dx_D $$ A seconda dei casi, calcolare questi integrali o somme può essere più o meno semplice.
![[Pasted image 20250423153356.png]]
**3.5 Teorema di Unicità (Teorema Fondamentale)** Questo teorema è fondamentale per l'utilità delle funzioni caratteristiche.

**Teorema di Unicità:** Due vettori aleatori $X_1$ e $X_2$ a valori in $\mathbb{R}^D$ hanno la stessa legge immagine (cioè, la stessa distribuzione di probabilità) **se e solo se** le loro funzioni caratteristiche sono uguali per ogni vettore $t \in \mathbb{R}^D$: $$ X_1 \sim X_2 \iff \phi_{X_1}(t) = \phi_{X_2}(t) \quad \forall t \in \mathbb{R}^D $$
![[Pasted image 20250423154409.png]]
Ciò significa che la funzione caratteristica caratterizza univocamente la distribuzione di probabilità. Se si riesce a dimostrare che due variabili o vettori aleatori hanno la stessa funzione caratteristica, si può concludere che hanno la stessa legge, anche se non si conosce esplicitamente la densità o la PMF. Un esempio d'uso è dimostrare che una variabile binomiale è una somma di variabili di Bernoulli calcolando e confrontando le loro funzioni caratteristiche.

**3.6 Esempi di Calcolo (Esercizi)** Vengono mostrati esempi di calcolo della funzione caratteristica per distribuzioni discrete.

**Esempio 1: Variabile di Bernoulli(p)** Sia $X \sim \text{Bernoulli}(p)$. La variabile assume valore 1 con probabilità $p$ e 0 con probabilità $1-p$.

- **Passaggio 1:** Applicare la definizione di funzione caratteristica $\phi_X(t) = E[e^{itX}]$.
- **Passaggio 2:** Calcolare il valore atteso usando la definizione per variabili discrete (somma sui valori possibili): $$ E[e^{itX}] = e^{it \cdot 1} P(X=1) + e^{it \cdot 0} P(X=0) $$
- **Passaggio 3:** Sostituire le probabilità e semplificare: $$ = e^{it} \cdot p + e^0 \cdot (1-p) $$ $$ = p e^{it} + 1 \cdot (1-p) $$ $$ = p e^{it} + 1 - p $$
- **Risultato:** La funzione caratteristica di una Bernoulli(p) è: $$ \phi_X(t) = 1 - p + p e^{it} $$
![[Pasted image 20250423154700.png]]
**Esempio 2: Variabile di Poisson($\lambda$)** Sia $X \sim \text{Poisson}(\lambda)$. La variabile assume valori $k \in {0, 1, 2, \dots }$ con probabilità $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$.

- **Passaggio 1:** Applicare la definizione di funzione caratteristica $\phi_X(t) = E[e^{itX}]$.
- **Passaggio 2:** Calcolare il valore atteso usando la definizione per variabili discrete (somma sui valori possibili $k$): $$ E[e^{itX}] = \sum_{k=0}^\infty e^{itk} P(X=k) $$
- **Passaggio 3:** Sostituire la PMF della Poisson: $$ = \sum_{k=0}^\infty e^{itk} \frac{\lambda^k e^{-\lambda}}{k!} $$
- **Passaggio 4:** Estrarre il termine $e^{-\lambda}$ dalla somma: $$ = e^{-\lambda} \sum_{k=0}^\infty e^{itk} \frac{\lambda^k}{k!} $$
- **Passaggio 5:** Riscrivere il termine generale della somma come $\frac{(e^{it} \lambda)^k}{k!}$: $$ = e^{-\lambda} \sum_{k=0}^\infty \frac{(e^{it} \lambda)^k}{k!} $$
- **Passaggio 6:** Riconoscere la serie di Taylor dell'esponenziale per argomento complesso $z = e^{it} \lambda$. La serie $\sum_{k=0}^\infty \frac{z^k}{k!}$ converge a $e^z$ anche per $z \in \mathbb{C}$. $$ = e^{-\lambda} e^{e^{it} \lambda} $$
- **Passaggio 7:** Semplificare l'espressione: $$ = e^{\lambda e^{it}} e^{-\lambda} = e^{\lambda e^{it} - \lambda} = e^{\lambda(e^{it} - 1)} $$
- **Risultato:** La funzione caratteristica di una Poisson($\lambda$) è: $$ \phi_X(t) = e^{\lambda(e^{it} - 1)} $$ Questo risultato è importante perché, grazie al teorema di unicità, se una variabile aleatoria ha questa funzione caratteristica, allora la sua legge deve essere di Poisson con parametro $\lambda$.
![[Pasted image 20250423154738.png]]

#### References



