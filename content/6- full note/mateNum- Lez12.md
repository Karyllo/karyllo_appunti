---
title: "mateNum- Lez12"
---

2025-03-20 10:39

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## mateNum- Lez12
## Errore del Polinomio di Interpolazione di Lagrange

### Introduzione

Il professore ha ripreso la lezione precedente, spostando l'attenzione dall'approssimazione della soluzione di sistemi di equazioni lineari all'approssimazione di una funzione continua $f$ o di un insieme di dati. In particolare, la discussione è iniziata con la distinzione tra **interpolazione** e **minimi quadrati**, focalizzandosi inizialmente sull'interpolazione.

È stata ricordata l'**esistenza e l'unicità del polinomio di interpolazione di Lagrange**. Successivamente, l'attenzione si è spostata sull'analisi dell'**errore di interpolazione**, introducendo un teorema a riguardo.

### Teorema sull'Errore di Interpolazione

**Teorema:** Sia $f \in C^{n+1}([x_0, x_n])$ e sia $p_n(x)$ il polinomio di interpolazione di Lagrange di grado al più $n$ che interpola $f$ nei nodi $x_0, x_1, \dots, x_n$. Allora, per ogni $x \in [x_0, x_n]$, esiste un punto $\alpha(x) \in (x_0, x_n)$ tale che l'errore di interpolazione è dato da: $$f(x) - p_n(x) = \frac{f^{(n+1)}(\alpha(x))}{(n+1)!} \omega_{n+1}(x)$$ dove $\omega_{n+1}(x)$ è il polinomio di grado $n+1$ definito come: $$\omega_{n+1}(x) = \prod_{k=0}^{n} (x - x_k)$$ Questa stima dell'errore è valida quando si interpola una funzione $f$ e non un semplice insieme di dati. L'ipotesi fondamentale per questo risultato è la regolarità della funzione $f$, che deve essere $C^{n+1}$.

È importante notare che, per definizione di interpolazione, l'errore calcolato in corrispondenza dei nodi $x_i$ è zero, poiché $\omega_{n+1}(x_i) = 0$ per $i = 0, \dots, n$.

### Dimostrazione del Teorema

Per dimostrare il teorema, è stata introdotta una **funzione ausiliaria** della variabile indipendente $t$, chiamata $g(t)$: $$g(t) = f(t) - p_n(t) - W \omega_{n+1}(t)$$ dove $W$ è una costante definita in modo tale che $g(x) = 0$ per un fissato $x \neq x_i$ con $i = 0, \dots, n$. Esplicitamente, scegliendo $W$ come: $$W = \frac{f(x) - p_n(x)}{\omega_{n+1}(x)}$$ si ottiene $g(x) = f(x) - p_n(x) - \frac{f(x) - p_n(x)}{\omega_{n+1}(x)} \omega_{n+1}(x) = 0$.

#### Regolarità della Funzione Ausiliaria $g(t)$

La funzione $g(t)$ è definita sull'intervallo $I_x = [\min(x_0, \dots, x_n, x), \max(x_0, \dots, x_n, x)]$. La regolarità di $g(t)$ dipende dalla regolarità di $f(t)$ e di $p_n(t)$ e $\omega_{n+1}(t)$. Sappiamo che $f \in C^{n+1}(I_x)$, $p_n(t)$ è un polinomio di grado al più $n$ (quindi $C^\infty$), e $\omega_{n+1}(t)$ è un polinomio di grado $n+1$ (anch'esso $C^\infty$)?. Pertanto, $g(t) \in C^{n+1}(I_x)$.

#### Zeri della Funzione Ausiliaria $g(t)$

La funzione $g(t)$ si annulla nei nodi di interpolazione $x_0, x_1, \dots, x_n$ perché $f(x_i) - p_n(x_i) = 0$ (per definizione di interpolazione) e $\omega_{n+1}(x_i) = 0$. Inoltre, per come è stata definita la costante $W$, abbiamo anche $g(x) = 0$. Quindi, $g(t)$ ha almeno $n+2$ zeri distinti in $I_x$.?

#### Applicazione del Teorema di Rolle?

Applicando ripetutamente il **Teorema di Rolle**, possiamo dedurre che:

- $g'(t)$ ha almeno $n+1$ zeri distinti in $I_x$.
- $g''(t)$ ha almeno $n$ zeri distinti in $I_x$.
- ...
- $g^{(n+1)}(t)$ ha almeno $1$ zero in $I_x$. Sia questo zero $\alpha(x)$.

#### Calcolo della Derivata $(n+1)$-esima di $g(t)$

Calcoliamo la derivata $(n+1)$-esima di $g(t)$: $$g^{(n+1)}(t) = \frac{d^{n+1}}{dt^{n+1}} (f(t) - p_n(t) - W \omega_{n+1}(t))$$ Poiché $p_n(t)$ è un polinomio di grado al più $n$, la sua derivata $(n+1)$-esima è zero: $\frac{d^{n+1}}{dt^{n+1}} p_n(t) = 0$. La derivata $(n+1)$-esima di $\omega_{n+1}(t) = (t - x_0)(t - x_1)\cdots(t - x_n)$ è $(n+1)!$. Questo risultato può essere dimostrato per induzione, osservando che la derivata prima è una somma di prodotti di $n$ termini $(t-x_i)$, la derivata seconda sarà una somma di prodotti di $n-1$ termini, e così via. La derivata $n$-esima sarà una somma di termini costanti, e la derivata $(n+1)$-esima sarà una costante data da $(n+1)!$.

Quindi, la derivata $(n+1)$-esima di $g(t)$ è: $$g^{(n+1)}(t) = f^{(n+1)}(t) - 0 - W (n+1)! = f^{(n+1)}(t) - W (n+1)!$$

#### Derivazione della Formula dell'Errore?

Sappiamo che esiste un punto $\alpha(x) \in (x_0, x_n)$ tale che $g^{(n+1)}(\alpha(x)) = 0$. Quindi: $$f^{(n+1)}(\alpha(x)) - W (n+1)! = 0$$ Da cui ricaviamo la costante $W$: $$W = \frac{f^{(n+1)}(\alpha(x))}{(n+1)!}$$ Sostituendo questa espressione di $W$ nella definizione di $W$ data in precedenza: $$\frac{f(x) - p_n(x)}{\omega_{n+1}(x)} = \frac{f^{(n+1)}(\alpha(x))}{(n+1)!}$$ otteniamo la formula per l'errore di interpolazione: $$f(x) - p_n(x) = \frac{f^{(n+1)}(\alpha(x))}{(n+1)!} \omega_{n+1}(x)$$ Questo completa la dimostrazione.

### Osservazione sulla Struttura dell'Errore e Relazione con Taylor

Il professore ha sottolineato come la struttura dell'errore di interpolazione sia simile alla struttura del termine di resto della formula di Taylor. Infatti, entrambe presentano una derivata di ordine $(n+1)$, il fattoriale $(n+1)!$ a denominatore e un termine che dipende dalla distanza dal punto di espansione (nel caso di Taylor) o dai nodi di interpolazione (nel nostro caso, $\omega_{n+1}(x)$ è un polinomio di grado $n+1$ con radici nei nodi). Esiste una dimostrazione di questo risultato che utilizza proprio il teorema di Taylor, anche se quella presentata si basa sul teorema di Rolle.

### Stima dell'Errore: Passaggio alla Norma Infinito

La formula esatta per l'errore contiene $\alpha(x)$, un punto la cui esatta posizione nell'intervallo $[x_0, x_n]$ è generalmente sconosciuta. Per ottenere una stima dell'errore che sia computabile, si passa spesso a considerare una **maggiorazione** utilizzando la **norma infinito**.

La norma infinito di una funzione $h(x)$ su un intervallo $I$ è definita come: $$||h||_{\infty, I} = \max_{x \in I} |h(x)|$$ Applicando la norma infinito all'errore di interpolazione sull'intervallo $I_x = [\min(x_0, \dots, x_n), \max(x_0, \dots, x_n)]$, otteniamo: $$||f - p_n||_{\infty, I_x} = \max_{x \in I_x} |f(x) - p_n(x)| = \max_{x \in I_x} \left| \frac{f^{(n+1)}(\alpha(x))}{(n+1)!} \omega_{n+1}(x) \right|$$ Poiché $\alpha(x) \in (x_0, x_n) \subseteq I_x$, possiamo maggiorare il termine contenente la derivata $(n+1)$-esima: $$||f - p_n||_{\infty, I_x} \leq \frac{1}{(n+1)!} \max_{x \in I_x} |f^{(n+1)}(\alpha(x))| \cdot \max_{x \in I_x} |\omega_{n+1}(x)|$$ $$\Rightarrow ||f - p_n||_{\infty, I_x} \leq \frac{1}{(n+1)!} ||f^{(n+1)}||_{\infty, I_x} \cdot ||\omega_{n+1}||_{\infty, I_x}$$ Questa stima fornisce un controllo dall'alto sull'errore di interpolazione e dipende sia dalla funzione $f$ (attraverso la norma infinito della sua derivata $(n+1)$-esima) che dalla scelta dei nodi di interpolazione (attraverso la norma infinito di $\omega_{n+1}(x)$).

### Caso di Nodi di Interpolazione Uniformi

Consideriamo ora il caso in cui i nodi di interpolazione $x_0, x_1, \dots, x_n$ sono distribuiti **uniformemente** nell'intervallo $[x_0, x_n]$.

#### Definizione di Nodi Uniformi e Passo Costante

Se la distribuzione dei nodi è uniforme, la distanza tra due nodi consecutivi è costante. Definiamo il **passo di discretizzazione** $h$ come: $$h = \frac{x_n - x_0}{n}$$ Il passo $h$ rappresenta l'ampiezza di ciascuno degli $n$ sottointervalli in cui $[x_0, x_n]$ è diviso dai nodi.

#### Espressioni per i Nodi Uniformi

Ci sono due modi equivalenti per esprimere i nodi uniformi:

1. **Ricorsivamente:** $$x_{k+1} = x_k + h, \quad \text{per } k = 0, 1, \dots, n-1$$ dove $x_0$ è il primo nodo.
2. **Direttamente:** $$x_{k} = x_0 + k h, \quad \text{per } k = 0, 1, \dots, n$$

#### Maggiorazione di $||\omega_{n+1}||_{\infty, I_x}$ per Nodi Uniformi

Nel caso di nodi uniformi, si può dimostrare (anche se la dimostrazione non è fornita nel testo) che il massimo del valore assoluto di $\omega_{n+1}(x)$ sull'intervallo $[x_0, x_n]$ può essere maggiorato come: $$||\omega_{n+1}||_{\infty, [x_0, x_n]} \leq \frac{h^{n+1} n!}{4}$$ È importante notare che questa stima non dipende da $x$ grazie all'uniformità del passo.

#### Stima dell'Errore con Nodi Uniformi

Utilizzando la maggiorazione di $||\omega_{n+1}||_{\infty, [x_0, x_n]}$, possiamo riscrivere la stima per la norma infinito dell'errore nel caso di nodi uniformi: $$||f - p_n||_{\infty, [x_0, x_n]} \leq \frac{1}{(n+1)!} ||f^{(n+1)}||_{\infty, [x_0, x_n]} \cdot \frac{h^{n+1} n!}{4}$$ Semplificando il termine con i fattoriali ($(n+1)! = (n+1) \cdot n!$), otteniamo: $$||f - p_n||_{\infty, [x_0, x_n]} \leq \frac{h^{n+1}}{4 (n+1)} ||f^{(n+1)}||_{\infty, [x_0, x_n]}$$ Questa stima sarà utilizzata in seguito.

### Comportamento dell'Errore al Crescere di $n$

Consideriamo ora cosa succede all'errore quando aumentiamo il numero di nodi di interpolazione $n$, mantenendo fisso l'intervallo $[x_0, x_n]$. In questo caso, il passo $h = \frac{x_n - x_0}{n}$ tende a zero quando $n \rightarrow \infty$.

La stima dell'errore con nodi uniformi può essere vista come il prodotto di due "blocchi":

- **Blocco A:** $\frac{h^{n+1}}{4 (n+1)}$ che dipende dalla scelta dei nodi (in particolare dal numero di nodi $n$). Poiché $h \rightarrow 0$ al crescere di $n$, questo blocco tende a zero per $n \rightarrow \infty$.
- **Blocco B:** $||f^{(n+1)}||_{\infty, [x_0, x_n]}$ che dipende dalla funzione $f$ e dalle sue derivate di ordine elevato. Il comportamento di questo blocco al crescere di $n$ dipende fortemente dalla natura della funzione $f$.

Idealmente, ci si aspetterebbe che l'errore tenda a zero quando $n \rightarrow \infty$, poiché un numero maggiore di informazioni sulla funzione dovrebbe portare a un'approssimazione migliore. Tuttavia, questo non è sempre garantito.

Possono verificarsi diversi scenari per il blocco B al tendere di $n$ all'infinito:

- $||f^{(n+1)}||_{\infty, [x_0, x_n]}$ converge a una costante. In questo caso, l'errore complessivo tende a zero perché il blocco A tende a zero.
- $||f^{(n+1)}||_{\infty, [x_0, x_n]}$ tende a zero. Anche in questo caso, l'errore complessivo tende a zero.
- $||f^{(n+1)}||_{\infty, [x_0, x_n]}$ tende a più infinito. In questo caso, il comportamento dell'errore complessivo dipende dalla velocità con cui il blocco A tende a zero rispetto alla velocità con cui il blocco B tende a infinito. Se il blocco A converge a zero più rapidamente di quanto il blocco B diverga, l'errore può ancora tendere a zero. Altrimenti, l'errore può divergere.

### Fenomeno di Runge

Esistono casi in cui, nonostante l'aumento del numero di nodi, l'errore di interpolazione non diminuisce e, anzi, può addirittura aumentare, specialmente agli estremi dell'intervallo. Questo fenomeno è noto come **Fenomeno di Runge**.

Un esempio classico in cui si manifesta il Fenomeno di Runge è la funzione: $$f(x) = \frac{1}{1 + x^2}$$ sull'intervallo $[-5, 5]$. Questa funzione è analitica e apparentemente "ben comportata".

Tuttavia, se si utilizzano nodi di interpolazione uniformi e si aumenta il numero di nodi, il polinomio interpolante $p_n(x)$ converge bene verso $f(x)$ nella parte centrale dell'intervallo $[-5, 5]$, ma agli estremi si sviluppano **oscillazioni spurie** sempre più ampie. Queste oscillazioni non rappresentano il comportamento della funzione originale e peggiorano all'aumentare di $n$, portando a un aumento dell'errore agli estremi.
![[Pasted image 20250320110158.png|300]]
#### Analisi dei Blocchi A e B per la Funzione di Runge

Considerando la funzione di Runge, si osserva il seguente comportamento qualitativo per piccoli valori di $n$:

- **Blocco A** ($\frac{h^{n+1}}{4 (n+1)}$): Diminuisce rapidamente all'aumentare di $n$. Ad esempio, si è visto che l'ordine di grandezza passa da $O(10^1)$ per $n=3$ a $O(10^{-10})$ per $n=21$.
- **Blocco B** ($||f^{(n+1)}||_{\infty, [-5, 5]}$): Aumenta molto rapidamente all'aumentare di $n$. Ad esempio, si è visto che l'ordine di grandezza passa da $O(10^0)$ per $n=3$ a $O(10^{19})$ per $n=21$.

![[Pasted image 20250328172929.png]]

Il prodotto di questi due blocchi determina il comportamento dell'errore. Nel caso della funzione di Runge con nodi uniformi, la crescita del blocco B prevale sulla diminuzione del blocco A per valori di $x$ vicini agli estremi dell'intervallo, causando il fenomeno delle oscillazioni spurie e la mancata convergenza (anzi, la divergenza) del polinomio interpolante verso la funzione $f(x)$ in quelle regioni.

#### Definizione del Fenomeno di Runge

Il **Fenomeno di Runge** è la manifestazione di **oscillazioni spurie** agli estremi del dominio di interpolazione al crescere del numero dei nodi di interpolazione, specialmente quando si utilizzano nodi uniformi.

___

## Nodi di Chebyshev-Gauss-Lobatto e il Fenomeno di Runge

### Il Problema: Oscillazioni nell'Interpolazione con Nodi Equispaziati (Fenomeno di Runge)

Il problema discusso riguarda le **oscillazioni che si verificano quando si approssima una funzione mediante un polinomio interpolante costruito su nodi equispaziati**, specialmente verso i bordi dell'intervallo di interpolazione. Questo fenomeno è noto come **fenomeno di Runge**. Il professore introduce questo problema come motivazione per esplorare strategie di scelta dei nodi di interpolazione più efficaci.

### Una Possibile Soluzione: Nodi Non Uniformi

Una strategia per mitigare il fenomeno di Runge consiste nell'**utilizzare nodi di interpolazione non uniformemente distribuiti sull'intervallo**. L'idea è di addensare i nodi nelle regioni dove la funzione presenta maggiori variazioni o dove le oscillazioni tendono a essere più pronunciate.

### Introduzione ai Nodi di Chebyshev-Gauss-Lobatto (CGL)

Il professore introduce una **famiglia di nodi specifici, noti come nodi di Chebyshev-Gauss-Lobatto (CGL)**. Questi nodi prendono il nome dalle tre persone che hanno contribuito alla loro definizione: **Chebyshev, Gauss e Lobatto**. Vengono anche chiamati **nodi CGL**.

#### Definizione dei Nodi CGL sull'Intervallo di Riferimento $[-1, 1]$

I nodi di Chebyshev-Gauss-Lobatto vengono **definiti inizialmente sull'intervallo di riferimento $[-1, 1]$**. Questi nodi, indicati con $\tilde x_i$, per $i$ che va da $0$ a $n$, sono dati dalla seguente formula:

$$ \tilde x_i = -\cos\left(\frac{\pi i}{n}\right), \quad i = 0, 1, \ldots, n $$

**Definizione:** La formula sopra definisce gli $n+1$ nodi di Chebyshev-Gauss-Lobatto sull'intervallo $[-1, 1]$.

#### Interpretazione Geometrica dei Nodi CGL
![[Pasted image 20250328173526.png|200]]
La costruzione di questi nodi può essere visualizzata considerando la **semicirconferenza unitaria di raggio 1 centrata nell'origine**.

1. Si divide la **mezza circonferenza in $n$ porzioni uguali**.
2. Si considerano i **punti di divisione sulla semicirconferenza**.
3. I **nodi di Chebyshev-Gauss-Lobatto** sull'asse $x$ (l'intervallo $[-1, 1]$) sono le **proiezioni di questi punti sull'asse delle ascisse**.

**Esempio:** Per $n = 8$, la semicirconferenza viene divisa in otto parti uguali. Le proiezioni dei punti di divisione sull'asse $x$ forniscono i nove nodi CGL (per $i = 0, \ldots, 8$).

- Per $i = 0$: $\tilde x_0 = -\cos(0) = -1$.
- Per $i = 1$: $\tilde x_1 = -\cos(\frac{\pi}{8})$.
- ...
- Per $i = 8$: $\tilde x_8 = -\cos(\pi) = -(-1) = 1$.

Come si può notare, i **nodi sono più densi agli estremi dell'intervallo $[-1, 1]$ e meno densi nella parte centrale**. Questo è dovuto alla natura non lineare della proiezione tramite la funzione coseno.

### Mappatura dei Nodi CGL su un Intervallo Generico $[a, b]$ NO 

Poiché l'intervallo di interpolazione di interesse può essere un qualunque intervallo $[a, b]$ della retta reale, è necessario **mappare i nodi CGL definiti su $[-1, 1]$ all'intervallo fisico $[a, b]$**. Questa mappatura viene effettuata utilizzando una **trasformazione lineare**:

$$ x_i = \frac{b + a}{2} + \frac{b - a}{2} \tilde x_i, \quad i = 0, 1, \ldots, n $$

**Dimostrazione della Mappatura:** Verifichiamo che questa mappa trasformi correttamente gli estremi e il punto medio dell'intervallo $[-1, 1]$ negli estremi e nel punto medio dell'intervallo $[a, b]$.

- Se $\tilde x_i = -1$: $$ x_i = \frac{b + a}{2} + \frac{b - a}{2} (-1) = \frac{b + a - b + a}{2} = \frac{2a}{2} = a $$ Quindi, $-1$ viene mappato in $a$.
- Se $\tilde x_i = 1$: $$ x_i = \frac{b + a}{2} + \frac{b - a}{2} (1) = \frac{b + a + b - a}{2} = \frac{2b}{2} = b $$ Quindi, $1$ viene mappato in $b$.
- Se $\tilde x_i = 0$: $$ x_i = \frac{b + a}{2} + \frac{b - a}{2} (0) = \frac{b + a}{2} $$ Quindi, $0$ (il punto medio di $[-1, 1]$) viene mappato in $\frac{b + a}{2}$ (il punto medio di $[a, b]$).

Questa mappatura **trasferisce la distribuzione non uniforme dei nodi dall'intervallo di riferimento $[-1, 1]$ all'intervallo fisico $[a, b]$**, mantenendo la proprietà di maggiore densità agli estremi.

### Effetto dei Nodi CGL sul Fenomeno di Runge
![[Pasted image 20250320110055.png|200]]
Quando si utilizza lo stesso numero di nodi, ma distribuiti secondo la formula dei nodi CGL, per interpolare la funzione $f(x) = \frac{1}{1 + x^2}$, si osserva un comportamento significativamente diverso rispetto all'utilizzo di nodi equispaziati.

- La funzione approssimata **inizia ancora ad oscillare**, ma le **oscillazioni sono più contenute**.
- Le **oscillazioni più grandi si trovano nella parte centrale** dell'intervallo, mentre **diminuiscono man mano che ci si avvicina agli estremi**.

**Teorema (Convergenza con Nodi CGL):** Per $n \to \infty$, l'errore di interpolazione $E_n(f) = |f - p_n|_\infty$, dove $p_n$ è il polinomio interpolante di grado $n$ costruito sui nodi CGL, **tende a $0$ anche per funzioni meno regolari** rispetto a quanto richiesto per la convergenza con nodi uniformi. In particolare, la convergenza si verifica anche se la funzione $f$ è solamente di classe $C^1$. Questo è un risultato notevole, in quanto con nodi uniformi si richiederebbe una regolarità $C^{n+1}$ per garantire la convergenza al crescere di $n$.

### Introduzione ai Nodi di Chebyshev-Gauss (CG)

Il professore introduce anche un'altra famiglia di nodi strettamente legata ai nodi CGL, chiamati **nodi di Chebyshev-Gauss (CG)**. La principale differenza è che **i nodi CG non includono gli estremi dell'intervallo**, ma sono tutti nodi interni.

#### Definizione dei Nodi CG sull'Intervallo di Riferimento $[-1, 1]$

I nodi di Chebyshev-Gauss, indicati con $x_i^*$, per $i$ che va da $0$ a $n$, sull'intervallo $[-1, 1]$ sono definiti come:

$$ x_i^* = -\cos\left(\frac{(2i + 1)\pi}{2(n + 1)}\right), \quad i = 0, 1, \ldots, n $$

**Definizione:** La formula sopra definisce gli $n+1$ nodi di Chebyshev-Gauss sull'intervallo $[-1, 1]$.

**Esempio:** Per $n = 8$, i nodi CG saranno:

- $x_0^* = -\cos\left(\frac{\pi}{18}\right)$
- $x_1^* = -\cos\left(\frac{3\pi}{18}\right)$
- ...
- $x_8^* = -\cos\left(\frac{17\pi}{18}\right)$

Come si può osservare, per $i = 0$, l'argomento del coseno è $\frac{\pi}{2(n+1)} \neq 0$, e per $i = n$, l'argomento è $\frac{(2n+1)\pi}{2(n+1)} = \pi - \frac{\pi}{2(n+1)} \neq \pi$. Di conseguenza, **i nodi $x_0$ e $x_n$ non coincidono con $-1$ e $1$ rispettivamente**, ma sono interni all'intervallo $[-1, 1]$.

Anche i nodi CG possono essere mappati su un intervallo generico $[a, b]$ utilizzando la stessa trasformazione lineare.

**Proprietà dei Nodi CG:** Anche i nodi CG godono di **simili proprietà di convergenza** ai nodi CGL. L'errore di interpolazione tende a zero al crescere di $n$, anche per funzioni con una regolarità minima.

#### Motivazione per l'Uso dei Nodi CG

In alcune applicazioni, può essere **inutile o indesiderabile includere i bordi dell'intervallo nei punti di interpolazione**. Utilizzando i nodi CG, si ottiene un **campionamento più fitto all'interno del dominio**, il che può essere vantaggioso in certi contesti.

### Limiti dei Nodi di Chebyshev (CGL e CG)

Un **limite** di questi approcci basati sui nodi di Chebyshev è che i **punti di interpolazione sono predeterminati** e non possono essere scelti arbitrariamente. Questo può rappresentare un problema quando si ha a che fare con l'**approssimazione di dati sperimentali**, dove i punti di misurazione sono fissati e non necessariamente coincidono con i nodi di Chebyshev. In questi casi, potrebbe essere necessario ricorrere a tecniche di approssimazione diverse dall'interpolazione polinomiale su nodi fissi. Il professore accenna al fatto che questa limitazione motiva la ricerca di approcci differenti per l'approssimazione, specialmente nel contesto dell'approssimazione di dati.

___

## Interpolazione Lineare a Tratti

### Problemi con l'Interpolazione Globale e Nodi Uniformi

Inizialmente, si era partiti con un approccio ottimistico all'interpolazione. Tuttavia, sorgono delle problematiche quando si considerano i dati ottenuti, specialmente se questi non corrispondono esattamente agli istanti desiderati per la misurazione. Se i dati sono già raccolti, è necessario avere la fortuna che questi siano stati campionati esattamente nei nodi scelti, altrimenti non possono essere direttamente utilizzati. Questo vincola la scelta dei nodi, che non possono più essere scelti liberamente.

Utilizzare nodi uniformemente distribuiti si è rivelato problematico. Anche l'intervallo considerato inizialmente piccolo non risolve il problema per intervalli più ampi.

Un altro fattore critico è il **grado del polinomio interpolante**. Con un numero elevato di nodi nell'interpolazione globale, si è portati inevitabilmente a utilizzare polinomi di alto grado. I polinomi di alto grado tendono ad avere un andamento oscillatorio, intersecando l'asse delle ascisse più volte.

### Passaggio all'Interpolazione Polinomiale Locale: L'Interpolazione a Tratti
![[Pasted image 20250320105758.png|590]]
Per superare i limiti dell'interpolazione globale con molti nodi e grado elevato, si introduce l'idea di **interpolazione polinomiale locale**. Invece di considerare tutti i nodi contemporaneamente, li si considera a piccoli gruppi.

La forma più semplice di interpolazione locale consiste nel prendere i nodi a coppie consecutive e interpolare i dati corrispondenti con una retta. Questo porta alla creazione di una **spezzata**, formata da segmenti di retta che connettono i punti dati. Questa tecnica è nota come **interpolazione lineare a tratti**.

**Definizione (Interpolazione Lineare a Tratti):** L'interpolazione lineare a tratti consiste nell'approssimare una funzione $f(x)$ su un intervallo $[x_0, x_n]$ mediante una funzione continua formata da segmenti di retta che interpolano i dati $(x_i, f(x_i))$ in nodi consecutivi $x_i$ e $x_{i+1}$ per $i = 0, 1, \ldots, n-1$.

**Rappresentazione Grafica:** Consideriamo una funzione con alcuni nodi $x_0, x_1, x_2, x_3$.

- **Approssimazione Globale:** Un polinomio di grado 3 che interpola tutti e quattro i nodi potrebbe avere un andamento oscillatorio tra i nodi.
- **Approssimazione a Tratti (Lineare):** Si congiungono i punti $(x_0, f(x_0))$ e $(x_1, f(x_1))$ con una retta, poi $(x_1, f(x_1))$ e $(x_2, f(x_2))$ con un'altra retta, e così via. Questo produce una spezzata che segue l'andamento dei dati in modo più locale.

**Vantaggi dell'Interpolazione a Tratti:**

- Se si infittiscono i dati (si aggiungono più nodi), l'approssimazione migliora. La spezzata si avvicina sempre più alla funzione originale.
- Non si introducono oscillazioni indesiderate tra i nodi, a differenza dei polinomi di alto grado.

Oltre all'interpolazione lineare a tratti, si possono utilizzare anche **interpolazioni quadratiche a tratti** e **cubiche a tratti**, unendo segmenti di parabole o cubiche tra gruppi di nodi. Tuttavia, raramente si utilizzano gradi superiori a 3 per evitare problemi simili al fenomeno di Runge su intervalli più piccoli.

### Formalizzazione dell'Interpolazione Lineare a Tratti

Sia dato un insieme di $n+1$ nodi $x_0 < x_1 < \ldots < x_n$ nell'intervallo $[a, b]$ (dove $a = x_0$ e $b = x_n$). I nodi non devono necessariamente essere uniformemente distribuiti.

Si definisce l'**intervallino** $i$-esimo come $I_i = [x_i, x_{i+1}]$ per $i = 0, 1, \ldots, n-1$.

L'**ampiezza** dell'intervallino $i$-esimo è $h_i = x_{i+1} - x_i$.

L'**ampiezza massima** dei sottointervalli è $h = \max_{i} {h_i}$.

Il polinomio lineare a tratti che interpola la funzione $f(x)$ nei nodi $x_i$ è denotato come $\pi_{1}^hf(x)$.

**Proprietà di $\pi_{1}^hf(x)$:**

1. $\pi_{1}^hf(x)$ è una **funzione continua** sull'intervallo $[x_0, x_n]$.
2. La **restrizione** di $\pi_{1}^hf(x)$ al generico intervallo $I_i = [x_i, x_{i+1}]$ è un **polinomio di grado 1**.
3. $\pi_{1}^hf(x)$ soddisfa le **condizioni di interpolazione**: $P_{1,h}f(x_i) = f(x_i)$ per $i = 0, 1, \ldots, n$.

**Espressione del Polinomio Lineare a Tratti su un Intervallo:**

La restrizione di $\pi_{1}^hf(x)$ all'intervallo $I_i = [x_i, x_{i+1}]$ è la retta che interpola i punti $(x_i, f(x_i))$ e $(x_{i+1}, f(x_{i+1}))$. La sua espressione è data da:

$$ \pi_{1}^hf(x)|_{I_i} = f(x_i) + \frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i} (x - x_i) $$

**Verifica dell'Interpolazione:**

- ?Se $x = x_i$: $$ P_{1,h}f(x_i)|_{I_i} = f(x_i) + \frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i} (x_i - x_i) = f(x_i) + 0 = f(x_i) $$
- Se $x = x_{i+1}$: $$ P_{1,h}f(x_{i+1})|_{I_i} = f(x_i) + \frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i} (x_{i+1} - x_i) = f(x_i) + f(x_{i+1}) - f(x_i) = f(x_{i+1}) $$ L'interpolazione è quindi verificata.

### Errore dell'Interpolazione Lineare a Tratti

Si vuole verificare che, aumentando il numero di nodi (e quindi facendo tendere a zero l'ampiezza massima $h$), l'errore dell'interpolazione lineare a tratti tende a zero.

Consideriamo l'errore sull'intervallino $I_i$: $|f(x) - \pi_{1}^hf(x)|$ per $x \in I_i$. Poiché sull'intervallo $I_i$ si utilizzano solo due nodi (gli estremi), si può riciclare la stima dell'errore per l'interpolazione con due nodi uniformi. In questo caso, $n+1 = 2$, quindi $n=1$. La formula dell'errore per nodi uniformi (non esplicitata nel testo ma richiamata) suggerisce una dipendenza da $h^{n+1} = h^2$ e dalla derivata di ordine $n+1 = 2$ della funzione.

**Stima dell'Errore Locale:**

Assumendo che $f \in C^2([x_0, x_n])$, l'errore sull'intervallino $I_i$ può essere maggiorato come:

$$ \max_{x \in I_i} |f(x) - \pi_{1}^hf(x)| \le \frac{h_i^2}{8} \max_{x \in I_i} |f''(x)| $$ Questa stima si basa sull'errore di interpolazione di Lagrange per due punti.

**Stima dell'Errore Globale:**

Per ottenere una stima dell'errore su tutto l'intervallo $[x_0, x_n]$, si considera il massimo dell'errore locale su tutti gli intervallini:

$$ \max_{x \in [x_0, x_n]} |f(x) - \pi_{1}^hf(x)| = \max_{i} \left( \max_{x \in I_i} |f(x) - \pi_{1}^hf(x)| \right) $$

Utilizzando la stima locale e maggiorando $h_i$ con $h = \max_{i} {h_i}$ e $\max_{x \in I_i} |f''(x)|$ con $\max_{x \in [x_0, x_n]} |f''(x)|$, si ottiene:

$$ \max_{x \in [x_0, x_n]} |f(x) - \pi_{1}^hf(x)| \le \frac{h^2}{8} \max_{x \in [x_0, x_n]} |f''(x)| $$

**Analisi della Convergenza:**

In questa stima dell'errore globale, il termine $\max_{x \in [x_0, x_n]} |f''(x)|$ è una costante (blocco B) che dipende dalla funzione $f$ e dall'intervallo $[x_0, x_n]$. Il termine $h^2$ (blocco A) dipende dall'ampiezza massima degli intervallini.

Al contrario dell'interpolazione globale dove, aumentando il grado del polinomio (e quindi potenzialmente il numero di nodi), il comportamento del termine analogo a B poteva portare a divergenza (fenomeno di Runge), qui il termine $\max |f''(x)|$ rimane costante.

Quando si infittiscono i nodi, l'ampiezza massima $h$ tende a zero. Di conseguenza, anche $h^2$ tende a zero. Pertanto, l'errore dell'interpolazione lineare a tratti:

$$ \lim_{h \to 0} \max_{x \in [x_0, x_n]} |f(x) - \pi_{1}^hf(x)| = 0 $$

Questo dimostra che **l'interpolazione lineare a tratti converge alla funzione $f(x)$ quando il numero di nodi aumenta** (ovvero, quando $h$ diminuisce), a condizione che la funzione $f$ sia sufficientemente regolare ($f \in C^2$). Questo approccio risolve il problema del fenomeno di Runge riscontrato con l'interpolazione globale.

Si può quindi affermare che l'interpolazione lineare a tratti è una **soluzione al fenomeno di Runge**.

Si accenna infine che per approssimazioni più accurate, si possono utilizzare interpolazioni a tratti di grado superiore (quadratiche, cubiche) con nodi scelti in modo intelligente (non necessariamente uniformi), come fa ad esempio MATLAB.
#### References
[[Appunti Mate Num-lez12.pdf]]


