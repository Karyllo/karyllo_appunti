2025-03-19 10:50

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## fisica1- Lez11
==MANCA LA PRIMA PARTE ==
## Cinematica Relativa: Relazione tra Velocità e Accelerazioni in Sistemi di Riferimento in Moto Relativo

### Definizioni Preliminari

Prima di analizzare il moto relativo, è fondamentale ricordare alcune definizioni che legano le quantità scalari alle loro controparti vettoriali nel moto circolare.

#### Relazione tra Velocità Scalare e Velocità Angolare

La relazione tra la **velocità scalare** ($v$) e la **velocità angolare** ($\omega$) di un punto che si muove su una circonferenza di raggio $R$ può essere espressa in forma vettoriale come:

$\qquad \mathbf{v} = \boldsymbol{\omega} \times \mathbf{R}$

dove:

- $\mathbf{v}$ è il **vettore velocità vettoriale**, tangente alla traiettoria.
- $\boldsymbol{\omega}$ è il **vettore velocità angolare**, ortogonale al piano della circonferenza e diretto secondo la regola della mano destra. Se la rotazione è antioraria, $\boldsymbol{\omega}$ punta verso l'alto; se è oraria, punta verso il basso.
- $\mathbf{R}$ è il **vettore raggio**, che punta dal centro della circonferenza verso l'esterno.

È importante notare che in un disco rotante, il valore della velocità scalare e del modulo della velocità vettoriale aumentano linearmente con la distanza dal centro.

#### Relazione tra Accelerazione Tangente e Accelerazione Angolare

Analogamente, l'**accelerazione tangente** ($a_t$) è legata all'**accelerazione angolare** ($\alpha$) e al raggio $R$ dalla relazione:

$\qquad a_t = \alpha R$

In forma vettoriale, questa relazione diventa:

$\qquad \mathbf{a}_t = \boldsymbol{\alpha} \times \mathbf{R}$

Anche il vettore **accelerazione angolare** $\boldsymbol{\alpha}$ è ortogonale al piano del moto e la sua direzione dipende da come sta variando la velocità angolare. In un disco rotante con accelerazione angolare, il modulo dell'accelerazione tangente aumenta linearmente con la distanza dal centro.

#### Accelerazione Normale (Centripeta)

L'**accelerazione normale** ($a_n$), diretta verso il centro della circonferenza, può essere espressa in termini di velocità angolare come:

$\qquad a_n = \omega^2 R$

In forma vettoriale, l'accelerazione normale $\mathbf{a}_n$ può essere scritta come:

$\qquad \mathbf{a}_n = \boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{R})$

Questa espressione vettoriale è coerente con la direzione e il modulo dell'accelerazione normale. Infatti, $\boldsymbol{\omega} \times \mathbf{R}$ è il vettore velocità $\mathbf{v}$, tangente alla traiettoria e ortogonale a $\boldsymbol{\omega}$. Il prodotto vettoriale $\boldsymbol{\omega} \times \mathbf{v}$ risulta in un vettore diretto radialmente verso il centro, con modulo $|\boldsymbol{\omega}| |\mathbf{v}| \sin(90^\circ) = \omega (\omega R) (1) = \omega^2 R$.

È prassi comune scrivere l'accelerazione normale vettoriale senza parentesi, intendendo che il prodotto vettoriale deve essere eseguito prima sugli ultimi due termini:

$\qquad \mathbf{a}_n = \boldsymbol{\omega} \times \boldsymbol{\omega} \times \mathbf{R}$

### Derivata di un Versore e Formula di Poisson

Per analizzare il moto relativo, è cruciale comprendere come varia nel tempo un **versore** (un vettore di modulo unitario). Se un versore varia nel tempo, la sua lunghezza non può cambiare (rimane unitaria), quindi deve necessariamente ruotare.

La **derivata temporale di un versore** $\mathbf{u}$ che sta ruotando con una velocità angolare $\boldsymbol{\omega}$ è data dalla **formula di Poisson**:

$\qquad \frac{d\mathbf{u}}{dt} = \boldsymbol{\omega} \times \mathbf{u}$

Questa formula afferma che la derivata di un versore è un vettore ortogonale al versore di partenza, con un modulo pari alla velocità angolare di rotazione del versore.

### Legge di Composizione delle Velocità

Consideriamo un punto $P$ la cui posizione viene osservata da due sistemi di riferimento:

- Un sistema di riferimento fisso $Oxyz$.
- Un sistema di riferimento mobile $O'x'y'z'$ che può traslare e ruotare rispetto al sistema fisso.

Sia $\mathbf{r}(t)$ il vettore posizione di $P$ rispetto al sistema fisso, e $\mathbf{r}'(t)$ il vettore posizione di $P$ rispetto al sistema mobile. Sia $\mathbf{R}_{O'}(t)$ il vettore posizione dell'origine $O'$ del sistema mobile rispetto all'origine $O$ del sistema fisso.

La relazione tra questi vettori posizione è:

$\qquad \mathbf{r}(t) = \mathbf{R}_{O'}(t) + \mathbf{r}'(t)$

Esprimendo $\mathbf{r}'(t)$ nelle componenti del sistema mobile con i rispettivi versori $\mathbf{u}_{x'}, \mathbf{u}_{y'}, \mathbf{u}_{z'}$:

$\qquad \mathbf{r}'(t) = x'(t) \mathbf{u}_{x'} + y'(t) \mathbf{u}_{y'} + z'(t) \mathbf{u}_{z'}$

e $\mathbf{R}_{O'}(t)$ nelle componenti del sistema fisso con i versori $\mathbf{u}_x, \mathbf{u}_y, \mathbf{u}_z$:

$\qquad \mathbf{R}_{O'}(t) = X_{O'}(t) \mathbf{u}_x + Y_{O'}(t) \mathbf{u}_y + Z_{O'}(t) \mathbf{u}_z$

Derivando la relazione $\mathbf{r}(t) = \mathbf{R}_{O'}(t) + \mathbf{r}'(t)$ rispetto al tempo, otteniamo la legge di composizione delle velocità:

$\qquad \frac{d\mathbf{r}}{dt} = \frac{d\mathbf{R}_{O'}}{dt} + \frac{d\mathbf{r}'}{dt}$

Analizziamo i singoli termini:

#### Velocità Assoluta ($\mathbf{v}$)

$\frac{d\mathbf{r}}{dt} = \mathbf{v}$ è la **velocità assoluta** del punto $P$, cioè la velocità misurata dall'osservatore nel sistema di riferimento fisso $Oxyz$. In termini delle componenti nel sistema fisso:

$\qquad \mathbf{v} = \frac{dx}{dt} \mathbf{u}_x + \frac{dy}{dt} \mathbf{u}_y + \frac{dz}{dt} \mathbf{u}_z$

#### Velocità di Trascinamento dell'Origine ($\mathbf{v}_{O'}$)

$\frac{d\mathbf{R}_{O'}}{dt} = \mathbf{v}_{O'}$ è la **velocità dell'origine del sistema mobile** $O'$ rispetto al sistema fisso $Oxyz$. Questa è la **velocità di traslazione** del sistema mobile. In termini delle componenti nel sistema fisso:

$\qquad \mathbf{v}_{O'} = \frac{dX_{O'}}{dt} \mathbf{u}_x + \frac{dY_{O'}}{dt} \mathbf{u}_y + \frac{dZ_{O'}}{dt} \mathbf{u}_z$

#### Derivata di $\mathbf{r}'(t)$

La derivata di $\mathbf{r}'(t) = x'(t) \mathbf{u}_{x'} + y'(t) \mathbf{u}_{y'} + z'(t) \mathbf{u}_{z'}$ richiede l'applicazione della regola della derivata del prodotto, poiché sia le coordinate $(x', y', z')$ che i versori $(\mathbf{u}_{x'}, \mathbf{u}_{y'}, \mathbf{u}_{z'})$ possono variare nel tempo a causa del moto di $P$ rispetto al sistema mobile e della rotazione del sistema mobile stesso.

$\qquad \frac{d\mathbf{r}'}{dt} = \left( \frac{dx'}{dt} \mathbf{u}_{x'} + \frac{dy'}{dt} \mathbf{u}_{y'} + \frac{dz'}{dt} \mathbf{u}_{z'} \right) + \left( x'(t) \frac{d\mathbf{u}_{x'}}{dt} + y'(t) \frac{d\mathbf{u}_{y'}}{dt} + z'(t) \frac{d\mathbf{u}_{z'}}{dt} \right)$

Il primo termine rappresenta la **velocità relativa** $\mathbf{v}'$ del punto $P$ rispetto all'osservatore nel sistema mobile $O'x'y'z'$:

$\qquad \mathbf{v}' = \frac{dx'}{dt} \mathbf{u}_{x'} + \frac{dy'}{dt} \mathbf{u}_{y'} + \frac{dz'}{dt} \mathbf{u}_{z'}$

Per il secondo termine, applichiamo la formula di Poisson:

$\qquad \frac{d\mathbf{u}_{x'}}{dt} = \boldsymbol{\omega} \times \mathbf{u}_{x'}$ $\qquad \frac{d\mathbf{u}_{y'}}{dt} = \boldsymbol{\omega} \times \mathbf{u}_{y'}$ $\qquad \frac{d\mathbf{u}_{z'}}{dt} = \boldsymbol{\omega} \times \mathbf{u}_{z'}$

dove $\boldsymbol{\omega}$ è la **velocità angolare del sistema mobile** rispetto al sistema fisso. Sostituendo queste espressioni, otteniamo:

$\qquad x'(t) (\boldsymbol{\omega} \times \mathbf{u}_{x'}) + y'(t) (\boldsymbol{\omega} \times \mathbf{u}_{y'}) + z'(t) (\boldsymbol{\omega} \times \mathbf{u}_{z'})$

Utilizzando la proprietà distributiva del prodotto vettoriale:

$\qquad \boldsymbol{\omega} \times (x'(t) \mathbf{u}_{x'} + y'(t) \mathbf{u}_{y'} + z'(t) \mathbf{u}_{z'}) = \boldsymbol{\omega} \times \mathbf{r}'(t)$

Questo termine rappresenta la **velocità di trascinamento** dovuta alla rotazione del sistema mobile nel punto $P$.

#### Legge di Composizione delle Velocità Completa

Combinando tutti i termini, la legge di composizione delle velocità diventa:

$\qquad \mathbf{v} = \mathbf{v}_{O'} + \mathbf{v}' + \boldsymbol{\omega} \times \mathbf{r}'$

Dove:

- $\mathbf{v}$ è la **velocità assoluta**.
- $\mathbf{v}_{O'}$ è la **velocità di traslazione** del sistema mobile.
- $\mathbf{v}'$ è la **velocità relativa**.
- $\boldsymbol{\omega} \times \mathbf{r}'$ è la **velocità di trascinamento** dovuta alla rotazione.

La **velocità di trascinamento** $\mathbf{v}_{trascinamento}$ è quindi la somma della velocità di traslazione e della velocità dovuta alla rotazione:

$\qquad \mathbf{v}_{trascinamento} = \mathbf{v}_{O'} + \boldsymbol{\omega} \times \mathbf{r}'$

Un punto solidale al sistema mobile, pur avendo velocità relativa nulla ($\mathbf{v}' = 0$), avrà una velocità assoluta pari alla velocità di trascinamento.

### Legge di Composizione delle Accelerazioni

Per ottenere la legge di composizione delle accelerazioni, deriviamo la legge di composizione delle velocità rispetto al tempo:

$\qquad \frac{d\mathbf{v}}{dt} = \frac{d\mathbf{v}_{O'}}{dt} + \frac{d\mathbf{v}'}{dt} + \frac{d}{dt}(\boldsymbol{\omega} \times \mathbf{r}')$

Analizziamo i singoli termini:

#### Accelerazione Assoluta ($\mathbf{a}$)

$\frac{d\mathbf{v}}{dt} = \mathbf{a}$ è l'**accelerazione assoluta** del punto $P$, misurata nel sistema fisso.

#### Accelerazione di Trascinamento dell'Origine ($\mathbf{a}_{O'}$)

$\frac{d\mathbf{v}_{O'}}{dt} = \mathbf{a}_{O'}$ è l'**accelerazione dell'origine del sistema mobile**, cioè l'**accelerazione di traslazione** del sistema mobile. In termini delle componenti nel sistema fisso:

$\qquad \mathbf{a}_{O'} = \frac{d^2X_{O'}}{dt^2} \mathbf{u}_x + \frac{d^2Y_{O'}}{dt^2} \mathbf{u}_y + \frac{d^2Z_{O'}}{dt^2} \mathbf{u}_z$

#### Derivata di $\mathbf{v}'$

$\frac{d\mathbf{v}'}{dt} = \mathbf{a}' = \mathbf{a}_{relativa}$ è l'**accelerazione relativa** del punto $P$ rispetto al sistema mobile $O'x'y'z'$. In termini delle componenti nel sistema mobile:

$\qquad \mathbf{a}' = \frac{d^2x'}{dt^2} \mathbf{u}_{x'} + \frac{d^2y'}{dt^2} \mathbf{u}_{y'} + \frac{d^2z'}{dt^2} \mathbf{u}_{z'}$

#### Derivata di $\boldsymbol{\omega} \times \mathbf{r}'$

Applicando la regola della derivata del prodotto vettoriale:

$\qquad \frac{d}{dt}(\boldsymbol{\omega} \times \mathbf{r}') = \frac{d\boldsymbol{\omega}}{dt} \times \mathbf{r}' + \boldsymbol{\omega} \times \frac{d\mathbf{r}'}{dt}$

- $\frac{d\boldsymbol{\omega}}{dt} = \boldsymbol{\alpha}$ è l'**accelerazione angolare** del sistema mobile. Quindi il primo termine è $\boldsymbol{\alpha} \times \mathbf{r}'$.
- Abbiamo già visto che $\frac{d\mathbf{r}'}{dt} = \mathbf{v}' + \boldsymbol{\omega} \times \mathbf{r}'$. Quindi il secondo termine diventa $\boldsymbol{\omega} \times (\mathbf{v}' + \boldsymbol{\omega} \times \mathbf{r}') = \boldsymbol{\omega} \times \mathbf{v}' + \boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}')$.

#### Legge di Composizione delle Accelerazioni Completa

Combinando tutti i termini, la legge di composizione delle accelerazioni diventa:

$\qquad \mathbf{a} = \mathbf{a}_{O'} + \mathbf{a}' + \boldsymbol{\alpha} \times \mathbf{r}' + \boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}') + 2 \boldsymbol{\omega} \times \mathbf{v}'$

Dove:

- $\mathbf{a}$ è l'**accelerazione assoluta**.
- $\mathbf{a}_{O'}$ è l'**accelerazione di traslazione** del sistema mobile.
- $\mathbf{a}'$ è l'**accelerazione relativa**.
- $\boldsymbol{\alpha} \times \mathbf{r}'$ è la componente dell'**accelerazione di trascinamento** dovuta all'accelerazione angolare.
- $\boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}') = -\omega^2 \mathbf{r}'_{\perp}$ (dove $\mathbf{r}'_{\perp}$ è la componente di $\mathbf{r}'$ perpendicolare all'asse di rotazione) è l'**accelerazione centripeta di trascinamento**.
- $2 \boldsymbol{\omega} \times \mathbf{v}'$ è l'**accelerazione di Coriolis** (o accelerazione complementare).

La **accelerazione di trascinamento** $\mathbf{a}_{trascinamento}$ è la somma di tutti i termini che il punto $P$ avrebbe se fosse solidale al sistema mobile ($\mathbf{v}' = 0, \mathbf{a}' = 0$):

$\qquad \mathbf{a}_{trascinamento} = \mathbf{a}_{O'} + \boldsymbol{\alpha} \times \mathbf{r}' + \boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r}')$

L'accelerazione assoluta è quindi la somma dell'accelerazione relativa, dell'accelerazione di trascinamento e dell'accelerazione di Coriolis:

$\qquad \mathbf{a} = \mathbf{a}' + \mathbf{a}_{trascinamento} + \mathbf{a}_{Coriolis}$

La comprensione di queste leggi di composizione è fondamentale per l'analisi del moto di corpi osservati da sistemi di riferimento non inerziali.
#### References



