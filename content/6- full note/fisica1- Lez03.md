2025-02-22 23:39

_Status:  #flashcard_zero    #riscritto_zero    #revisione_zero 

_Tags: [[3- tag/fisica 1]]   [[sbobine]]

## lez03- fisica1
### Moto Circolare 

**Definizione**: Il moto circolare è un moto la cui traiettoria è una circonferenza.

- **Raggio**: Sia $R$ il raggio della circonferenza.
- **Origine**: Si definisce un'origine sulla circonferenza. Per comodità, l'origine è posta dove la circonferenza è intersecata da un asse orizzontale.
- **Verso di percorrenza**: Per convenzione, il verso di percorrenza è antiorario.

#### Ascissa curvilinea

L'ascissa curvilinea, $s$, rappresenta lo spazio percorso dal punto materiale lungo la circonferenza a partire dall'origine. La legge oraria $s(t)$ descrive come varia l'ascissa curvilinea nel tempo.

#### Posizione angolare

In alternativa all'ascissa curvilinea, si può definire la posizione angolare $\theta$ del punto materiale.

**Relazione tra posizione angolare e ascissa curvilinea**:

$\qquad \theta = \frac{s}{R}$

$\qquad s = R \cdot \theta$

Dare la legge oraria come posizione angolare $\theta(t)$ è equivalente a darla come ascissa curvilinea $s(t)$.

#### Velocità angolare

La velocità angolare $\omega$ misura la rapidità con cui l'angolo $\theta$ viene spazzato nel tempo.

- **Definizione**: La velocità angolare $\omega$ è la derivata della posizione angolare rispetto al tempo:

$\qquad \omega = \frac{d\theta}{dt}$

- **Dimensioni**: Dimensionalmente, $\omega$ è un tempo$^{-1}$.
- **Unità di misura**: L'unità di misura è radianti al secondo (rad/s).

**Legame tra velocità scalare e velocità angolare**:

$\qquad v = \frac{ds}{dt} = R \frac{d\theta}{dt} = R\omega$

#### Accelerazione angolare

L'accelerazione angolare $\alpha$ misura la rapidità con cui varia la velocità angolare nel tempo.

- **Definizione**: L'accelerazione angolare $\alpha$ è la derivata della velocità angolare rispetto al tempo:

$\qquad \alpha = \frac{d\omega}{dt}$

- **Dimensioni**: Dimensionalmente, $\alpha$ è un tempo$^{-2}$.
- **Unità di misura**: L'unità di misura è radianti al secondo quadro (rad/s$^2$).

**Legame tra accelerazione scalare e accelerazione angolare**:

$\qquad a = \frac{dv}{dt} = R \frac{d\omega}{dt} = R\alpha$

#### Passaggi cinematici

- Dalla posizione angolare $\theta$ si ottiene la velocità angolare $\omega$ derivando rispetto al tempo.
- Dalla velocità angolare $\omega$ si ottiene l'accelerazione angolare $\alpha$ derivando rispetto al tempo.
- Viceversa, dall'accelerazione angolare $\alpha$ si ottiene la velocità angolare $\omega$ integrando rispetto al tempo, e dalla velocità angolare $\omega$ si ottiene la posizione angolare $\theta$ integrando rispetto al tempo.

### Cinematica Vettoriale

Nella cinematica vettoriale, la posizione, la velocità e l'accelerazione sono descritte tramite vettori.

#### Vettore posizione

Per definire la posizione di un punto nello spazio 3D, è necessario un sistema di riferimento (ad esempio, cartesiano) e un orologio. La posizione del punto è data dalle coordinate $x(t)$, $y(t)$ e $z(t)$ in ogni istante di tempo.

Il vettore posizione $\overrightarrow{r}(t)$ è definito come:

$\qquad \overrightarrow{r}(t) = x(t) \hat{i} + y(t) \hat{j} + z(t) \hat{k}$

dove $\hat{i}$, $\hat{j}$ e $\hat{k}$ sono i versori degli assi $x$, $y$ e $z$, rispettivamente.

#### Traiettoria

La traiettoria è la curva descritta dal punto materiale al variare del tempo. Nella cinematica vettoriale, la traiettoria è implicita nelle funzioni $x(t)$, $y(t)$ e $z(t)$.

#### Esempio

Consideriamo un punto materiale con:

- $x(t) = 2t$
- $y(t) = t^2 + 1$
- $z(t) = 4$ (costante)

Per trovare la traiettoria, si ricava il tempo da una delle equazioni e si sostituisce nelle altre:

$\qquad t = \frac{x}{2}$

Sostituendo in $y(t)$:

$\qquad y = \left(\frac{x}{2}\right)^2 + 1 = \frac{x^2}{4} + 1$

Quindi la traiettoria è una parabola nel piano $z = 4$.

#### Vettore spostamento medio

Il vettore spostamento medio $\Delta \overrightarrow{r}$ tra due istanti $t_1$ e $t_2$ è definito come:

$\qquad \Delta \overrightarrow{r} = \overrightarrow{r}(t_2) - \overrightarrow{r}(t_1)$

In generale, il modulo di $\Delta \overrightarrow{r}$ è diverso dalla lunghezza dello spostamento effettivo sulla traiettoria $\Delta s$.

#### Velocità vettoriale media

La velocità vettoriale media $\overrightarrow{v}_{media}$ nell'intervallo di tempo $\Delta t = t_2 - t_1$ è definita come:

$\qquad \overrightarrow{v}_{media} = \frac{\Delta \overrightarrow{r}}{\Delta t} = \frac{\overrightarrow{r}(t_2) - \overrightarrow{r}(t_1)}{t_2 - t_1}$

La direzione di $\overrightarrow{v}_{media}$ è parallela a $\Delta \overrightarrow{r}$.

#### Velocità vettoriale istantanea

La velocità vettoriale istantanea $\overrightarrow{v}(t)$ è la derivata del vettore posizione rispetto al tempo:

$\qquad \overrightarrow{v}(t) = \lim_{\Delta t \to 0} \frac{\Delta \overrightarrow{r}}{\Delta t} = \frac{d\overrightarrow{r}}{dt}$

In coordinate cartesiane:

$\qquad \overrightarrow{v}(t) = \frac{dx}{dt} \hat{i} + \frac{dy}{dt} \hat{j} + \frac{dz}{dt} \hat{k} = v_x(t) \hat{i} + v_y(t) \hat{j} + v_z(t) \hat{k}$


#### References



