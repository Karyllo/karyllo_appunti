 2025-02-27 20:47

_Status: #flashcard_finite   #riscritto_finito   #revisione_finita 

_Tags:   [[sbobine]]   [[meccanica razionale]]]

## meccanica-lez02

### Gradi di Libertà di un Corpo Rigido

Un corpo rigido, nello spazio, possiede **sei gradi di libertà**: tre traslazionali e tre rotazionali.

- **Gradi di libertà traslazionali**: sono legati al vettore $\underline{OA}$, che individua l'origine degli assi solidali rispetto agli assi fissi. Per descrivere $\underline{OA}$, servono tre coordinate, che rappresentano i gradi di libertà traslazionali.
- **Gradi di libertà rotazionali**: sono legati all'orientamento del corpo rigido nello spazio. Per descrivere l'orientamento, si utilizzano i versori solidali, che si muovono rispetto alla terna fissa. ^m5ksck

### Vettore Solidale
![[Pasted image 20250228095046.png]]

Il vettore $\underline{P-A}$ è un **vettore solidale**, ovvero le sue componenti $(x_p, y_p, z_p)$ sono costanti rispetto alla terna mobile. In termini matematici, si scrive come:
$$(P - O) = (P - A) + (A - O)$$

$\underline{P-A} = x_p \hat{i} + y_p \hat{j} + z_p \hat{k}$

dove $\hat{i}$, $\hat{j}$, $\hat{k}$ sono i versori degli assi solidali.

### Componenti dei Versori Solidali e Coseni Direttori

Per descrivere l'orientamento dei versori solidali rispetto a quelli fissi, si cercano le componenti dei versori solidali rispetto a quelli fissi. Queste componenti sono i **coseni direttori**. Si ottengono nove coseni direttori, ma non sono tutti indipendenti.
$\begin{cases} \hat{i} \cdot \hat{I},\\ \hat{i} \cdot \hat{J},\\ \hat{i} \cdot \hat{K},\\ \hat{j} \cdot \hat{I},\\ \hat{j} \cdot \hat{J},\\ \hat{k} \cdot \hat{j},\\ \hat{k} \cdot \hat{I},\\ \hat{k} \cdot \hat{J},\\ \hat{k} \cdot \hat{K} \end{cases}$
Ci sono sei relazioni tra di loro dovute alle condizioni di ortogonalità e normalizzazione dei versori:

- **Condizioni di ortonormalità**:
    - $\hat{i} \cdot \hat{i} = 1$
    - $\hat{j} \cdot \hat{j} = 1$
    - $\hat{k} \cdot \hat{k} = 1$
    - $\hat{i} \cdot \hat{j} = 0$
    - $\hat{i} \cdot \hat{k} = 0$
    - $\hat{j} \cdot \hat{k} = 0$

Queste sei relazioni riducono i gradi di libertà rotazionali a tre.


### Angoli di Eulero: Descrizione e Rotazioni

Gli **angoli di Eulero** forniscono un metodo per descrivere l'orientamento di un corpo rigido nello spazio attraverso tre rotazioni successive. Questi angoli sono particolarmente utili per definire l'orientamento di una terna mobile rispetto a una terna fissa.

#### Definizione degli Angoli
![[Pasted image 20250228100905.png]]
- $\phi$ (angolo di precessione): rappresenta la rotazione attorno all'asse $Z$. $\phi \in [0, 2\pi]$.
- $\theta$ (angolo di nutazione o co-latitudine): rappresenta l'angolo tra l'asse $Z$ e l'asse $z$. $\theta \in [0, \pi]$.
- $\psi$ (angolo di rotazione propria): rappresenta la rotazione attorno all'asse $z$. $\psi \in [0, 2\pi]$.

**Nota:** L'ordine degli angoli $\phi$ e $\psi$ può variare a seconda della convenzione utilizzata.

#### Asse dei Nodi

L'**asse dei nodi** ($N$) è la linea di intersezione tra il piano $XY$ (della terna fissa) e il piano $xy$ (della terna mobile). Matematicamente, il versore $\hat{n}$ dell'asse dei nodi è definito come:

$\qquad \hat{n} = \frac{\underline{K} \wedge \underline{k}}{|\underline{K} \wedge \underline{k}|}$

dove $\underline{K}$ e $\underline{k}$ sono i versori degli assi $Z$ e $z$, rispettivamente.

#### Rotazioni di Eulero: Procedura

Le tre rotazioni di Eulero, eseguite in un ordine specifico, permettono di far coincidere gli assi della terna mobile con quelli della terna fissa.

1. **Prima rotazione**: Ruotare attorno all'asse $Z$ di un angolo $\phi$ in modo che l'asse $X$ coincida con l'asse dei nodi $N$.
2. **Seconda rotazione**: Ruotare attorno all'asse dei nodi $N$ di un angolo $\theta$ in modo che l'asse $Z$ coincida con l'asse $z$.
3. **Terza rotazione**: Ruotare attorno all'asse $z$ di un angolo $\psi$.

Dopo queste tre rotazioni, le due terne di riferimento (fissa e mobile) sono allineate.

**Importante**: L'ordine delle rotazioni è fondamentale, poiché le matrici di rotazione non commutano. Se si cambia l'ordine delle rotazioni, il risultato finale sarà diverso.

#### Singolarità

Si verifica una singolarità quando i piani $XY$ e $xy$ coincidono, rendendo indefinita l'intersezione e quindi l'asse dei nodi. Questa singolarità è analoga a quella che si incontra nel passaggio da coordinate cartesiane a coordinate polari quando l'origine è descritta in coordinate polari. Tuttavia, questa singolarità non invalida la descrizione del moto con gli angoli di Eulero. Inoltre, questa problematica non si presenta nel caso di corpi rigidi piani, dove i piani $XY$ e $xy$ coincidono sempre.

#### Origine dei Nomi

I nomi degli angoli di Eulero (precessione, nutazione, rotazione propria) derivano dalla descrizione del moto della Terra.

- La **rotazione propria** è la rotazione della Terra attorno al suo asse.
- La **precessione** è il moto conico dell'asse terrestre rispetto alle stelle fisse. L'asse terrestre compie una precessione completa in circa 26.000 anni.
- La **nutazione** è una piccola oscillazione dell'asse terrestre attorno al suo valore medio, causata dalle forze di marea del Sole e della Luna. Questo moto rende il cono di precessione irregolare.

### Teorema di Poisson: Velocità Angolare e Derivata dei Versori

Il **teorema di Poisson** è un teorema fondamentale nella cinematica del corpo rigido. Esso stabilisce l'esistenza e l'unicità di un vettore **velocità angolare** $\underline{\omega}$. Questo vettore permette di descrivere come variano nel tempo i versori solidali al corpo rigido.

#### Enunciato del Teorema

Sia $\mathcal{B}$ un corpo rigido e siano $\underline{e_1}$, $\underline{e_2}$, $\underline{e_3}$ i versori di una terna solidale a $B$. Allora, esiste un unico vettore $\underline{\omega}$ (velocità angolare) tale che:

$\qquad \dot{\underline{e_i}} = \underline{\omega} \wedge \underline{e_i}$

per $i = 1, 2, 3$.

**Nota**: $\dot{\underline{e_i}}$ rappresenta la derivata temporale del versore $\underline{e_i}$.

Inoltre, $\underline{\omega}$ non dipende dalla scelta della terna solidale. Per ogni vettore $\underline{w}$ solidale al corpo rigido, vale:

$\qquad \dot{\underline{w}} = \underline{\omega} \wedge \underline{w}$
e vale 
Si definisce il vettore $\underline{\omega}$ come:

$$\qquad \underline{\omega} = \frac{1}{2}\sum_{i=1}^{3} \underline{e_i} \wedge \dot{\underline{e_i}}$$

#### ==Dimostrazione dell'Esistenza==

Per dimostrare che questo $\underline{\omega}$ soddisfa le formule di Poisson, si considera $\underline{\omega} \wedge \underline{e_1}$ e si dimostra che è uguale a $\dot{\underline{e_1}}$.

$$\qquad \frac {1}{2} \Bigr[\sum_{i=1}^{3} (\underline{e_i} \wedge \dot{\underline{e_i}})\Bigl] \wedge \underline{e_1}= $$
per proprietà distributiva:
$$\qquad =\frac {1}{2} \sum_{i=1}^{3} (\underline{e_i} \wedge \dot{\underline{e_i}}) \wedge \underline{e_1}= $$
	
allora effettuiamo un doppio scambio:
$$=\frac{1}{2} \sum_{i=1}^{3} \underline e_1 \wedge (\dot{\underline {e_i}} \wedge \underline {e_i}) =$$
- Utilizzando le proprietà del prodotto scalare e vettoriale $$\underline a \wedge (\underline b \wedge \underline c) = (\underline a \cdot \underline c) \underline b - (\underline a \cdot \underline b) \underline c$$
si ha:
$$= \sum_{i=1}^{3} \Bigr[( \underline{e_1} \cdot {\underline{e_i}} )\dot{\underline{e_i}}  -  ( \underline{e_1} \cdot \dot{\underline{e_i}} )\underline{e_i}]=$$
	- vale la relazione $$\frac{d}{dt}(\underline{e}_i \cdot \underline{e}_j) = \dot{\underline{e}}_i \cdot \underline{e}_j + \underline{e}_i \cdot \dot{\underline{e}}_j = 0 \Rightarrow \dot{\underline{e}}_i \cdot \underline{e}_j = - \underline{e}_i \cdot \dot{\underline{e}}_j$$
allora l'equazione continua: 
$$= \frac{1}{2} \sum_{i=1}^{3} \left[ (\underline{e_1} \cdot \underline{e_i})\ \ \dot{\underline{e_i}} + \underline{(\underline e_i \cdot \dot{\underline{e_1}})} \ \ \underline e_i \right]=$$
	- di $= \frac{1}{2} \sum_{i=1}^{3} (\underline{e_1} \cdot \underline{e_i})$ ci rimane solo il contributo  $e_1$ , quindi complessivamente ci rimane $\underline{\dot e_1}$

- ricordando che si può scrivere un vettore come somma dei suoi componenti 
	- $$\underline{a} = (\underline{a} \cdot \underline{e}_1) \underline{e}_1 + (\underline{a} \cdot \underline{e}_2) \underline{e}_2 + (\underline{a} \cdot \underline{e}_3) \underline{e}_3 = \sum_{i=1}^{3} a_i \underline{e}_i \\\underline{a} = a_i \underline{e}_i$$
	- dove $a_i = a\cdot e_i$
	- si può descrivere $\dot{\underline{e_1}}$ come: $$\frac{1}{2} \sum_{i=1}^{3} \left[ (\underline e_i \cdot \dot{\underline{e_1}}) \ \ \underline e_i \right]= \dot{\underline{e_1}}$$
allora si ottiene 
$$= \frac{1}{2}  (\dot {\underline{e_1}}+ \dot{\underline{e_1}})= \dot{\underline{e_1}}$$
allora si ottiene

$$\qquad \underline{\omega} \wedge \underline{e_1} = \dot{\underline{e_1}}$$
per $\omega \wedge e_2$ o con tre è analogo 
#### Unicità

Si assume che esistano due vettori velocità angolari, $\underline{\omega}$ e $\underline{\omega^*}$, che soddisfano le formule di Poisson. Si ha quindi:

$\qquad \dot{\underline{e_i}} = \underline{\omega} \wedge \underline{e_i} = \underline{\omega^*} \wedge \underline{e_i}$

Sottraendo membro a membro, si ottiene:

$\qquad \underline{0} = (\underline{\omega} - \underline{\omega^*}) \wedge \underline{e_i}$ per i=1,2,3

Questo implica che $\underline{\omega} - \underline{\omega^*}$ deve essere parallelo a tutti e tre i versori $\underline{e_i}$ IMPOSSIBILE, il che è possibile solo se $\underline{\omega} = \underline{\omega^*}$. Quindi, la velocità angolare è unica.
##### Dimostrazione Algebrica dell'Unicità

Sia $\underline{\Omega} = \underline{\omega} - \underline{\omega^*}$. Possiamo scrivere $\underline{\Omega}$ usando la terna mobile dei versori:

$\qquad \underline{\Omega} = \sum_{i=1}^{3} \Omega_i \underline{e_i}$

Considerando $\underline{\Omega} \wedge \underline{e_1} = 0$:

$\qquad \underline{\Omega} \wedge \underline{e_1} = \Omega_2 (\underline{e_2} \wedge \underline{e_1}) + \Omega_3 (\underline{e_3} \wedge \underline{e_1}) = -\Omega_2 \underline{e_3} + \Omega_3 \underline{e_2} = 0$

Questo implica che $\Omega_2 = 0$ e $\Omega_3 = 0$. 
Similmente facendo $\underline{\Omega} \wedge \underline{e_2}$, si dimostra che anche $u_1 = 0$. Pertanto, $\underline{\Omega} = 0$, e quindi $\underline{\omega} = \underline{\omega^*}$. ^jgcxrf


### Vettore Solidale e Derivata Temporale

Consideriamo un vettore solidale $\omega$. Le componenti di un vettore solidale sono costanti. Quando calcoliamo la derivata temporale di $\omega$, otteniamo $\omega$.

Se usiamo una terna mobile, la derivata sarebbe la derivata delle componenti per il versore, più il versore per la derivata delle componenti, e così via. Tuttavia, poiché le componenti sono costanti, ci rimane:

$\qquad \dot{\omega} = w_1 \dot{e}_1 + w_2 \dot{e}_2 + w_3 \dot{e}_3$

Usando la relazione $\dot{e}_i = \omega \wedge e_i$ (derivata dei versori della terna solidale aka Poisson) possiamo scrivere:

$\qquad \dot{\omega} = w_1 (\omega \wedge e_1) + w_2 (\omega \wedge e_2) + w_3 (\omega \wedge e_3)$

Poiché le componenti $w_i$ sono scalari, possiamo portarle davanti al prodotto vettoriale:

$\qquad \dot{\omega} = \omega \wedge (w_1 e_1 + w_2 e_2 + w_3 e_3)$

Il termine tra parentesi è il vettore $\omega$ stesso, quindi:

$\qquad \dot{\omega} = \omega \wedge \omega$

Quindi, se hai un vettore solidale, soddisferà $\dot{\omega} = \omega \wedge \omega$.

### Indipendenza dalla Terna

L'indipendenza dalla terna si dimostra notando che i versori $e_i$ sono solidali e quindi $\dot{e'}_i = \omega \wedge {e'}_i$.
d

La **legge di distribuzione delle velocità** è un altro teorema fondamentale nella cinematica del corpo rigido. Essa fornisce una caratterizzazione del moto rigido.

**Enunciato**: Condizione necessaria e sufficiente affinché un sistema di $n$ punti materiali sia in moto rigido è che valga:

$\qquad \underline{v_P}(t) = \underline{v_Q}(t) + \underline{\omega}(t) \wedge (\underline{P} - \underline{Q})(t)$

per ogni $P$ e $Q$ appartenenti al sistema di punti materiali. ^yxplx8

**Significato**: La velocità di un punto $P$ è uguale alla velocità di un altro punto $Q$ più un termine che dipende dalla velocità angolare e dalla posizione relativa dei due punti.
#### References



