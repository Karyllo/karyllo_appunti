---
title: "Analisi3- Lez08"
---

2025-03-02 19:20

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:   [[sbobine]]   [[analisi 3]]

## Analisi3- Lez08

### Prodotto Scalare su uno Spazio Vettoriale $V$

^jwzsxl

Sia $V$ uno spazio vettoriale reale ($\mathbb{R}$-spazio vettoriale). Un prodotto scalare su $V$ è una funzione che prende due elementi di $V$ e restituisce un numero reale, soddisfacendo le seguenti proprietà:
![[Pasted image 20250302192750.png|450]]

#### Proprietà del Prodotto Scalare

- **Bilinearità**: Il prodotto scalare è lineare in entrambe le variabili.
    - Rispetto alla somma: $\langle x + y, z \rangle = \langle x, z \rangle + \langle y, z \rangle$ per ogni $x, y, z \in V$
    - Rispetto al prodotto per scalare: $\langle Tx, y \rangle = T \langle x, y \rangle$ per ogni $x, y \in V$ e $T \in \mathbb{R}$ _Nota che $Tx$ è il prodotto dello scalare $T$ per il vettore $x$, mentre $\langle x, y \rangle$ è il prodotto di due numeri reali._
- **Simmetria**: $\langle x, y \rangle = \langle y, x \rangle$ per ogni $x, y \in V$
    - _Questa proprietà è simile alla proprietà commutativa_.
- **Definita Positività**: $\langle x, x \rangle \geq 0$ per ogni $x \in V$ e $\langle x, x \rangle = 0$ se e solo se $x = 0$, dove $0$ è il vettore nullo di $V$
    - _Questa proprietà caratterizza veramente il prodotto scalare: il prodotto scalare di un vettore con se stesso è sempre maggiore o uguale a zero, e si annulla solo nell'origine_.

#### Spazio Preilbertiano

La coppia $(V, \langle \cdot, \cdot \rangle)$, dove $V$ è uno spazio vettoriale e $\langle \cdot, \cdot \rangle$ è un prodotto scalare su $V$, è chiamato **spazio preHilbertiano**.

- _Questo è analogo a come uno spazio normato è definito con una norma. Gli spazi di Banach sono un caso particolare di spazi normati. Allo stesso modo, gli spazi di Hilbert sono un caso particolare di spazi preHilbertiani_.

#### Esempio Prototipo: $\mathbb{R}^n$

L'esempio da tenere a mente è $\mathbb{R}^n$ (con $n = 2, 3, ...$) con il suo prodotto scalare standard:

$\langle x, y \rangle = x_1y_1 + x_2y_2 + ... + x_ny_n$

### Norma Indotta da un Prodotto Scalare

In uno spazio preilbertiano $V$, è possibile definire una norma a partire dal prodotto scalare:

$|x| = ||x||_{\langle \ , \ \rangle}= \sqrt{\langle x, x \rangle}$ per ogni $x \in V$

- Questa norma è ben definita grazie alla proprietà di definita positività del prodotto scalare.

#### Proprietà Fondamentali

1. **Disuguaglianza di Cauchy-Schwarz**: Per ogni $x, y \in V$, $|\langle x, y \rangle| \leq |x| |y|$
2. **V è uno Spazio Normato**: La funzione $|x|$ definita sopra è una norma su $V$. Quindi, $(V, |\cdot|)$ è uno spazio normato.
3. **Identità del Parallelogramma**: Per ogni $x, y \in V$, $|x + y|^2 + |x - y|^2 = 2(|x|^2 + |y|^2)$
    - _Questa identità è facilmente verificabile usando la definizione di norma e le proprietà del prodotto scalare_.

#### Conseguenze

- Gli spazi preilbertiani sono casi particolari di spazi normati. Quindi, concetti come successioni convergenti, successioni di Cauchy e distanza sono applicabili.

### Conseguenze "Geometriche"

Sia $V$ uno spazio preilbertiano.

1. **Applicazione Lineare Limitata**: Dalla disuguaglianza di Cauchy-Schwarz, per ogni $y \in V$ fissato, l'applicazione lineare $L_y: V \rightarrow \mathbb{R}$ definita da $L_y(x) = \langle x, y \rangle$ è limitata e continua.
    
    - La norma di $L_y$ è $|y|= M$.
      
      
2. **Angolo tra Due Vettori**: Dalla disuguaglianza di Cauchy-Schwarz, Se $x, y \in V$ sono non nulli, allora $-1 \leq \frac{\langle x, y \rangle}{|x| |y|} \leq 1$
   ![[Pasted image 20250302193832.png|400]]
    
    - Esiste un unico $\theta \in [0, \pi]$ tale che $\cos(\theta) = \frac{\langle x, y \rangle}{|x| |y|}$.
    - $\theta$ rappresenta l'angolo convesso tra i vettori $x$ e $y$.
    - _L'esistenza di un angolo tra due vettori dipende dal prodotto scalare, non solo dalla norma_.
      
      
3. **Ortogonalità**: Due vettori $x, y \in V$ sono ortogonali se $\langle x, y \rangle = 0$.
    
    - Se $x$ e $y$ sono non nulli, l'angolo tra loro è $\pi/2$.

### Teorema di Pitagora
![[Pasted image 20250302194600.png|400]]
Se $x, y \in V$ sono ortogonali, allora

$|x + y|^2 = |x|^2 + |y|^2$

- _Questo è il teorema di Pitagora in uno spazio di Hilbert_.
- **Generalizzazione**: Se $x_1, ..., x_n \in V$ sono tali che $\langle x_i, x_j \rangle = 0$ per ogni $i \neq j$, allora $\left|\sum_{m=1}^{n} x_m\right|^2 = \sum_{m=1}^{n} |x_m|^2$
    - _In generale, in uno spazio normato, si ha solo la disuguaglianza triangolare_.

### Spazio di Hilbert

^odwmoh

Uno spazio di Hilbert è uno spazio preilbertiano $(V, \langle \cdot, \cdot \rangle)$ tale che lo spazio normato $(V, |\cdot|)$, dove $|x| = \sqrt{\langle x, x \rangle}$, è uno spazio di Banach.

- In altre parole, ogni successione di Cauchy in $V$ converge a un limite in $V$.
- _Uno spazio di Hilbert è un particolare spazio di Banach in cui la norma deriva da un prodotto scalare_.


### Esempi di Spazi di Hilbert

#### 1. $\mathbb{R}^n$ come Spazio di Hilbert

- Consideriamo $\mathbb{R}^n$ con $n \geq 1$.
    
- Definiamo il prodotto scalare tra due vettori $x, y \in \mathbb{R}^n$ come:
    
    $\qquad \langle x, y \rangle = x_1y_1 + x_2y_2 + \dots + x_ny_n = \sum_{i=1}^{n} x_i y_i$
    
- La norma indotta da questo prodotto scalare è la norma euclidea:
    
    $\qquad ||x|| = \sqrt{\langle x, x \rangle} = \sqrt{x_1^2 + x_2^2 + \dots + x_n^2} = \sqrt{\sum_{i=1}^{n} x_i^2}$
    
- Poiché $\mathbb{R}^n$ con la norma euclidea è uno spazio di Banach, allora $\mathbb{R}^n$ con il prodotto scalare standard è uno spazio di Hilbert.
    

#### 2. Spazio delle Funzioni Continue su un Intervallo

- Consideriamo lo spazio $C^0([a, b])$ delle funzioni continue sull'intervallo $[a, b]$.
    
- Definiamo un prodotto scalare tra due funzioni $f, g \in C^0([a, b])$ tali da ottenere un numero:
    
    $\qquad \langle f, g \rangle = \int_a^b f(x)g(x) , dx$
    
- La norma associata a questo prodotto scalare è:
    
    $\qquad ||f|| = \sqrt{\langle f, f \rangle} = \sqrt{\int_a^b f(x)^2 , dx}$
    
- **Importante**: Questo spazio, con questa norma, **non è uno spazio di Hilbert**, perché non è completo. La norma integrale che abbiamo visto essere una norma rispetto a cui questo spazio non è completo, quindi non è uno spazio di Banach.
    
    - _La norma di $f$ non è proprio l'integrale tra $a$ e $b$ di $|f|$, ma è una cosa che relativamente ci assomiglia. È l'integrale tra $A$ e $B$ di, $f^2$ $1/2$.
    - _Non abbiamo veramente dimostrato l'altra volta, però insomma capite che l'altra volta avevamo l'integrale del modulo di $f$, qui abbiamo l'integrale di $f^2$ $1/2$, non è strutturalmente molto diversa dalla norma integrale che abbiamo visto l'altra volta.

### Spazi Normati e Spazi Prehilbertiani

- Non tutti gli spazi normati sono spazi prehilbertiani.
    
- Esiste una caratterizzazione precisa: uno spazio normato $V$ con una norma $||\cdot||$ è uno spazio prehilbertiano (cioè, la sua norma deriva da un prodotto scalare) se e solo se la norma soddisfa l'identità del parallelogramma:
    
    $\qquad ||x + y||^2 + ||x - y||^2 = 2(||x||^2 + ||y||^2)$ per ogni $x, y \in V$
    
- Se la norma di uno spazio normato non soddisfa l'identità del parallelogramma, allora non esiste un prodotto scalare che induca quella norma.
    
- Ad esempio, la norma del "massimo" (sup) non soddisfa l'identità del parallelogramma e quindi non proviene da un prodotto scalare.
    

### Teorema della Proiezione

Questo teorema è fondamentale nel contesto degli spazi di Hilbert.

**Ipotesi**

- Sia $V$ uno spazio di Hilbert.
- Sia $E \subseteq V$ un sottospazio di dimensione finita $n \geq 1$.
- Sia $\mathcal{E}=\set{e_1, e_2, \dots, e_n}$ una base ortonormale di $E$.
	- $$\qquad \langle e_i, e_j \rangle = \begin{cases} 1, & \text{se } i = j \quad (\text{ossia } |e_i|=0),\\ 0, & \text{se } i \neq j \end{cases}$$

**Definizione**

- Dato $x \in V$, definiamo la proiezione di $x$ su $E$ come:
    
    $\qquad P_E(x) = \sum_{m=1}^n \langle x, e_m \rangle e_m \ \in {E}$ 
    
    Dove $\langle x, e_m \rangle := \hat x_m$ è il prodotto scalare tra $x$ e $e_m$.
    ![[Pasted image 20250302200703.png|400]]
    

**Tesi**

1. $||x - P_E(x)|| \leq ||x - y||$ per ogni $y \in E$.
    
    - $P_E(x)$ è l'elemento di $E$ che minimizza la distanza da $x$.
    - Questa è la distanza rispetto alla norma indotta dal prodotto scalare di $x$ da $y$.
    - La distanza di $x_0$ è minore o uguale della distanza di $x$ da $y$ per ogni altro $y$ in $E$.
      
2. Il vettore $x - P_E(x)$ è ortogonale a ogni elemento di $E$, cioè $\langle x - P_E(x), y \rangle = 0$ per ogni $y \in E$.
    
3. $\sum_{m=1}^n |\langle x, e_m \rangle|^2 \leq ||x||^2$.
    
4. $P_E(x)$ è l'unico elemento di $E$ che soddisfa le proprietà 1 e 2.
    

$P_E(x)$ è detta la proiezione ortogonale di $x$ su $E$.

#### Illustrazione
![[Pasted image 20250302201254.png|500]]
Immagina $V$ come uno spazio vettoriale e $E$ come un sottospazio di dimensione finita (ad esempio, una retta) contenuto in $V$. Dato un punto $x$ in $V$, il teorema della proiezione afferma che esiste un unico punto in $E$ (la proiezione ortogonale $P_E(x)$) che è il più vicino a $x$ . Inoltre, la differenza tra $x$ e la sua proiezione è perpendicolare a $E$ .

**Chiarimento sulla natura vettoriale della proiezione**

Per visualizzare $P_E(x)$ come vettore, è necessario fissare un'origine all'interno del sottospazio $E$. Poiché $E$ è uno spazio vettoriale, contiene un elemento zero. Il vettore $P_E(x)$ può quindi essere inteso come il vettore che parte dall'origine di $E$ e arriva al punto $P_E(x)$ stesso.

### Sistemi Ortonormali e Sistemi Ortonormali Completi

#### Sistema Ortonormale

- Sia $V$ uno spazio di Hilbert.
    
- Una successione di elementi ${e_n}_{n \geq 1}$ in $V$ è detta sistema ortonormale se:
    
    $$\qquad \langle e_i, e_j \rangle = \begin{cases} 1, & \text{se } i = j \\ 0, & \text{se } i \neq j \end{cases}$$
    
    In altre parole, i vettori sono a due a due ortogonali e hanno norma 1.
    

#### Sistema Ortonormale Completo (SONC)

- Un sistema ortonormale $\set{e_n}_{n \geq 1}$ è detto completo se l'unico vettore $x \in V$ ortogonale a tutti gli elementi del sistema è il vettore nullo.
    - In formule: se $\langle x, e_n \rangle = 0$ per ogni $n$, allora $x = 0$.

### Disuguaglianza di Bessel

Sia $V$ uno spazio di Hilbert e ${e_n}_{n \geq 1}$ un sistema ortonormale in $V$. Allora, per ogni $x \in V$:

$\qquad \sum_{m=1}^n |\langle x, e_m \rangle|^2 \leq ||x||^2$

- Questa disuguaglianza vale per ogni $n$ e quindi si può estendere al limite per $n \to \infty$.
- Poiché la serie è a termini non negativi, converge.
- Una condizione necessaria (ma non sufficiente) per la convergenza di una serie è che il termine ennesimo tenda a zero: $\lim_{n \to \infty} \langle x, e_n \rangle = 0$.

### Teorema di Fourier

Questo teorema mostra come un sistema ortonormale completo (SONC) può essere utilizzato per rappresentare qualsiasi vettore in uno spazio di Hilbert.

**Ipotesi**

- Sia $V$ uno spazio di Hilbert.
- Sia ${e_n}_{n \geq 1}$ un sistema ortonormale completo (SONC) in $V$.
- Per ogni $x \in V$, definiamo i coefficienti di Fourier come $x_n = \langle x, e_n \rangle$ per ogni $n \geq 1$.

**Tesi**

1. Ogni vettore $x \in V$ può essere scritto come una serie convergente:
    
    $\qquad x = \sum_{n=1}^\infty x_n e_n = \sum_{n=1}^\infty \langle x, e_n \rangle e_n$
    
    Cioè, il limite per $n$ che va a più infinito della norma di $x$ - la successione delle somme parziali è zero.
    
2. Uguaglianza di Parseval:
    
    $\qquad ||x||^2 = \sum_{n=1}^\infty |x_n|^2 = \sum_{n=1}^\infty |\langle x, e_n \rangle|^2$
    
3. Se $y \in V$ e $y_n = \langle y, e_n \rangle$, allora:
    
    $\qquad \langle x, y \rangle = \sum_{n=1}^\infty x_n \overline{y_n} = \sum_{n=1}^\infty \langle x, e_n \rangle \overline{\langle y, e_n \rangle}$
    
    dove $\overline{y_n}$ indica il complesso coniugato di $y_n$ (se stiamo lavorando con spazi di Hilbert complessi). Questo significa che il prodotto scalare assume un aspetto simile a quello di $\mathbb{R}^n$.
    

In sostanza, un sistema ortonormale completo gioca il ruolo di una base, anche in spazi di dimensione infinita. Ogni vettore può essere espresso come combinazione lineare (in forma di serie) degli elementi del sistema.

___

#### Generalizzazione a Spazi di Dimensione Infinita

Il professore accenna alla possibilità di estendere questi concetti a spazi di dimensione infinita, introducendo il concetto di **sistema ortonormale completo**.

### Sistemi Ortonormali e Completi

#### Definizione

Un sistema ortonormale $\mathcal{E}$ in uno spazio di Hilbert $V$ è una successione di vettori $\mathcal{E}=\set{e_n}_{n \geq 1} \subseteq V$ tale che:

$$\qquad \langle e_i, e_j \rangle = \begin{cases} 1, & \text{se } i = j \\ 0, & \text{se } i \neq j \end{cases}$$

Un sistema ortonormale è completo (sonc) $\mathcal{E}$  è un sistema ortonormale di V 
e se l'unico vettore $x$ in $V$ che è ortogonale a tutti gli elementi del sistema è il vettore nullo:

$\qquad \langle x, e_n \rangle = 0 \quad \forall n \implies x = 0_V$

#### Disuguaglianza di Bessel

Dato un sistema ortonormale {$e_n$}$_{n \geq 1}$ in uno spazio di Hilbert $V$, per ogni $x$ in $V$ vale la disuguaglianza di Bessel:

$\qquad \sum_{n=1}^{\infty} |\langle x, e_n \rangle|^2 \leq |x|^2$

Questa disuguaglianza implica che la serie converge.

#### Teorema di Fourier

Sia {$e_n$}$_{n \geq 1}$ un sistema ortonormale completo in uno spazio di Hilbert $V$. Allora, per ogni $x$ in $V$:

1. **Espansione in Serie:** $x = \sum_{n=1}^{\infty} \langle x, e_n \rangle e_n$
2. **Uguaglianza di Parseval:** $|x|^2 = \sum_{n=1}^{\infty} |\langle x, e_n \rangle|^2$
3. **Prodotto Scalare:** Per ogni $y \in V$, $\langle x, y \rangle = \sum_{n=1}^{\infty} \langle x, e_n \rangle \langle y, e_n \rangle$

Il professore sottolinea che questo teorema sarà dimostrato nella prossima lezione e verrà applicato alle serie di Fourier.
___


### Spazi di Hilbert e Sistemi Ortonormali

#### Osservazione Preliminare

Anche se la definizione di **sistema ortonormale** potrebbe essere data in uno spazio prehilbertiano, tradizionalmente si preferisce darla in uno **spazio di Hilbert**. Questo perché, sebbene la definizione utilizzi solo il prodotto scalare, le osservazioni successive richiedono la completezza dello spazio normato.

#### Definizione di Sistema Ortonormale

Consideriamo uno spazio di Hilbert $V$ e una successione di elementi $e_n$ in $V$, con $n \geq 1$. Questa successione è un **sistema ortonormale** se soddisfa le seguenti condizioni:

- Ortogonalità: $(e_i, e_j) = 0$ per $i \neq j$.
- Normalizzazione: $|e_i| = 1$ per ogni $i$. Questo significa che il prodotto scalare $(e_i, e_i) = 1$.

#### Teorema della Proiezione e Spazi di Dimensione Finita
![[Pasted image 20250302203226.png|500]]
Per utilizzare il **teorema della proiezione**, è necessario avere uno spazio di dimensione finita. Definiamo quindi uno spazio $E_n$ come lo span dei primi $n$ elementi del sistema ortonormale:

$E_n = \text{span}(e_1, e_2, ..., e_n)$

Questo spazio $E_n$ è di dimensione finita perché è generato da $n$ vettori.

#### Disuguaglianza di Bessel

Per ogni $x \in V$, vale la seguente disuguaglianza:

$\sum_{m=1}^{n} |\langle x, e_m \rangle|^2 \leq |x|^2$

Dove $\langle x, e_m \rangle= \hat x$ rappresenta il prodotto scalare tra $x$ e $e_m$. Nel contesto del **teorema della proiezione**, $\langle x, e_m \rangle$ è chiamato $x \text{ cappuccio } m$.

Poiché questa disuguaglianza vale per ogni $n$, possiamo estendere la somma all'infinito:

$\sum_{n=1}^{\infty} |\langle x, e_m \rangle|^2 \leq |x|^2$

Questa è la **disuguaglianza di Bessel**. La serie è a termini non negativi (quadrati), quindi converge o diverge positivamente. Questo implica che la serie converge.

#### Conseguenza della Convergenza

Se una serie converge, il limite del termine ennesimo deve tendere a zero. Quindi:

$\lim_{n \to \infty} \langle x, e_m \rangle = 0$

#### Definizione di Sistema Ortonormale Completo (SONC)

Un sistema ortonormale $E = {e_n}_{n \geq 1}$ è **completo** in $V$ se:

1. $E$ è un sistema ortonormale in $V$.
2. Se $\langle x, e_m \rangle = 0$ per ogni $n$, allora $x = 0$. In altre parole, l'unico vettore ortogonale a tutti gli elementi del sistema è il vettore nullo.

#### Teorema di Fourier

Sia $V$ uno spazio di Hilbert e $E = {e_n}_{n \geq 1}$ un sistema ortonormale completo (SONC) in $V$. Per ogni $x \in V$, definiamo i coefficienti di Fourier come:

$\hat x_n = \langle x, e_m \rangle$ per ogni $m \geq 1$

Allora valgono le seguenti affermazioni:

1. **Espansione di Fourier:** $x = \sum_{n=1}^{\infty} (\hat x_n) e_n = \sum_{n=1}^{\infty} (x, e_n) e_n$
    
    Questa uguaglianza è intesa nel senso della convergenza in norma, cioè:
    
    $\lim_{N \to \infty} \left| x - \sum_{n=1}^{N} (x, e_n) e_n \right| = 0$
    
2. **Identità di Parseval:**
    
    $|x|^2 = \sum_{n=1}^{\infty} |\hat x_m|^2$
    
3. **Generalizzazione del Prodotto Scalare:**
    
    Per ogni $x, y \in V$, sia $\hat y_n = \langle y, e_n \rangle$. Allora:
    
    $\langle x, y\rangle = \sum_{n=1}^{\infty} (\hat x_n) {\hat y_n} = \sum_{n=1}^{\infty} (x, e_n) {(y, e_n)}$
    
    Questa serie converge al prodotto scalare tra $x$ e $y$.
    

#### Interpretazione del Teorema di Fourier

Un sistema ortonormale completo gioca il ruolo di una base. Ogni $x$ può essere scritto come una serie di termini che coinvolgono gli elementi del sistema ortonormale.


#### References



