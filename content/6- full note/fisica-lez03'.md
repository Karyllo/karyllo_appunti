---
title: "fisica-lez03'"
---

2025-03-04 17:59

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## fisica-lez03'

### Risoluzione del Problema Inverso della Cinematica Scalare nel Moto Uniformemente Accelerato

#### Situazione Iniziale

Si considera una situazione in cui è nota l'**accelerazione costante nel tempo** ($a_0$) e sono note le **condizioni iniziali**, ovvero la **velocità ($v_0$)** e la **posizione ($s_0$)** all'istante $t_0$.

#### Ricavare l'Andamento della Velocità nel Tempo

La velocità nel tempo si ricava integrando l'accelerazione nel tempo:

$v(t) = v_0 + \int_{t_0}^{t} a(t') dt'$

Poiché l'accelerazione è costante ($a(t) = a_0$), l'integrale diventa:

$v(t) = v_0 + \int_{t_0}^{t} a_0 dt' = v_0 + a_0(t - t_0)$

Quindi, la velocità varia linearmente con il tempo.

#### Ricavare la Legge Oraria

La legge oraria si ricava integrando la velocità nel tempo:

$s(t) = s_0 + \int_{t_0}^{t} v(t') dt'$

Sostituendo l'espressione della velocità:

$s(t) = s_0 + \int_{t_0}^{t} [v_0 + a_0(t' - t_0)] dt'$

Spezzando l'integrale in due parti:

$s(t) = s_0 + \int_{t_0}^{t} v_0 dt' + \int_{t_0}^{t} a_0(t' - t_0) dt'$

Integrando il primo termine:

$\int_{t_0}^{t} v_0 dt' = v_0 (t - t_0)$

Per il secondo integrale, si effettua una sostituzione di variabile:

$\tau = t' - t_0$

$d\tau = dt'$

Quando $t' = t_0$, $\tau = 0$; quando $t' = t$, $\tau = t - t_0$. Quindi l'integrale diventa:

$\int_{0}^{t - t_0} a_0 \tau d\tau = a_0 \int_{0}^{t - t_0} \tau d\tau = a_0 \left[ \frac{\tau^2}{2} \right]_{0}^{t - t_0} = \frac{1}{2} a_0 (t - t_0)^2$

Mettendo insieme i risultati, si ottiene la legge oraria:

$s(t) = s_0 + v_0 (t - t_0) + \frac{1}{2} a_0 (t - t_0)^2$

**Caso Particolare:** Se $t_0 = 0$:

$s(t) = s_0 + v_0 t + \frac{1}{2} a_0 t^2$

#### Osservazioni sui Grafici

- **Accelerazione Costante (Negativa):** Si supponga di avere un corpo che viene rallentato, con accelerazione $a_0$ costante e negativa, ad esempio $a_0 = -2 , \text{m/s}^2$.
- **Grafico della Velocità:** Se la velocità iniziale $v_0$ è positiva, il grafico della velocità è una retta che diminuisce linearmente nel tempo. La pendenza della retta è determinata dal valore di $a_0$.
- **Grafico della Posizione:** Se la posizione iniziale $s_0$ è positiva, il grafico della posizione è una parabola con concavità verso il basso. Inizialmente, il punto materiale aumenta la sua posizione perché ha una velocità positiva, ma questa velocità diminuisce fino a diventare zero nel vertice della parabola. A quel punto, il corpo inverte il suo moto e torna indietro verso l'origine.

#### Esempio Concreto: Oggetto Lanciato Verticalmente

Si considera un oggetto lanciato verticalmente verso l'alto da una quota iniziale $H$ rispetto al pavimento.

- **Traiettoria:** La traiettoria è una retta verticale.
- **Asse Orientato:** Si sceglie un asse $y$ orientato verso l'alto, con l'origine posizionata al livello del pavimento.
- **Accelerazione:** L'accelerazione è dovuta alla gravità ed è diretta verso il basso, quindi $a = -g$, dove $g$ è l'accelerazione di gravità.
- **Condizioni Iniziali:**
    - $t_0 = 0 , \text{s}$
    - $v(0) = +v_0$ (positiva perché l'oggetto è lanciato verso l'alto)
    - $y(0) = H$

#### Risoluzione del Problema

1. **Velocità nel Tempo:**
    
    $v(t) = v_0 + \int_{0}^{t} (-g) dt' = v_0 - gt$
    
2. **Posizione nel Tempo (Legge Oraria):**
    
    $y(t) = H + \int_{0}^{t} (v_0 - gt') dt' = H + v_0 t - \frac{1}{2}gt^2$
    

#### Domande

1. **Istante di Massima Quota ($t_{\text{max}}$):**
    - Si impone che la velocità sia zero: $v(t_{\text{max}}) = 0$.
    - $v_0 - gt_{\text{max}} = 0$
    - $t_{\text{max}} = \frac{v_0}{g}$
    - La quota massima si trova sostituendo $t_{\text{max}}$ nella legge oraria: $y(t_{\text{max}}) = H + v_0 \left(\frac{v_0}{g}\right) - \frac{1}{2}g\left(\frac{v_0}{g}\right)^2$
2. **Istante Finale ($t_{\text{finale}}$) in cui l'Oggetto Tocca il Pavimento:**
    - Si impone che la quota sia zero: $y(t_{\text{finale}}) = 0$.
    - $H + v_0 t_{\text{finale}} - \frac{1}{2}gt_{\text{finale}}^2 = 0$
    - Questa è un'equazione di secondo grado in $t_{\text{finale}}$. Risolvendo l'equazione, si troveranno due soluzioni: una positiva (quella che interessa) e una negativa (priva di significato fisico nel contesto del problema, ma matematicamente valida).

#### Approssimazioni

Durante gli esami, è accettabile approssimare $g \approx 10 , \text{m/s}^2$ se non si ha la calcolatrice a disposizione.

#### Cinematica Vettoriale

La cinematica vettoriale è utile quando non si conosce a priori la traiettoria del punto materiale. In questo caso, si descrive la posizione del punto materiale nello spazio tridimensionale usando un sistema di riferimento, ad esempio cartesiano.

#### Sistemi di riferimento

Oltre al sistema di riferimento cartesiano, esistono altri sistemi di riferimento come quello cilindrico e coordinate polari.
___
Ecco una spiegazione dettagliata del professore, basata sul flashcard fornito, con particolare attenzione ai passaggi matematici, agli esempi e agli esercizi, formattata per chiarezza e leggibilità.

### Sistemi di riferimento e vettore posizione

- **Sistemi di coordinate alternativi**: Oltre ai sistemi di riferimento standard, esistono sistemi di coordinate che utilizzano meridiani e paralleli su una sfera.
- **Sistema di riferimento cartesiano**: In un sistema di riferimento cartesiano, la posizione di un punto nello spazio 3D è definita dal vettore posizione $\overrightarrow{r}(t)$, che congiunge l'origine del sistema di riferimento con la posizione del punto materiale.
- **Funzione vettoriale**: Definire una funzione vettoriale significa specificare tre funzioni scalari che descrivono la variazione della posizione del punto materiale lungo gli assi x, y e z: $x(t)$, $y(t)$ e $z(t)$.
- **Legge oraria del moto**: La legge oraria del moto in forma vettoriale è rappresentata da $\overrightarrow{r}(t)$. In forma cartesiana, è data dalle tre equazioni $x(t)$, $y(t)$ e $z(t)$.

### Velocità media e istantanea

- **Velocità media vettoriale**: La velocità media vettoriale $\overrightarrow{v}_m$ in un intervallo di tempo $\Delta t$ è definita come la variazione del vettore posizione divisa per l'intervallo di tempo:
    
    $\qquad \overrightarrow{v}_m = \frac{\Delta \overrightarrow{r}}{\Delta t}$
    
    Dove $\Delta \overrightarrow{r} = \overrightarrow{r}(T_2) - \overrightarrow{r}(T_1)$ è il vettore spostamento medio.
    
- **Componenti della velocità media**: La velocità media vettoriale può essere espressa attraverso le sue componenti cartesiane:
    
    - $v_{mx} = \frac{\Delta x}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1}$
    - $v_{my} = \frac{\Delta y}{\Delta t} = \frac{y_2 - y_1}{t_2 - t_1}$
    - $v_{mz} = \frac{\Delta z}{\Delta t} = \frac{z_2 - z_1}{t_2 - t_1}$
- **Velocità istantanea vettoriale**: La velocità istantanea vettoriale $\overrightarrow{v}(t)$ è definita come il limite della velocità media per $\Delta t$ che tende a zero, ovvero la derivata del vettore posizione rispetto al tempo:
    
    $\qquad \overrightarrow{v}(t) = \lim_{\Delta t \to 0} \frac{\Delta \overrightarrow{r}}{\Delta t} = \frac{d\overrightarrow{r}}{dt} = \overrightarrow{r}'(t)$
    
- **Derivata di un vettore**: La derivata di un vettore $\overrightarrow{r}(t) = x(t)\hat{u}_x + y(t)\hat{u}_y + z(t)\hat{u}_z$ si calcola derivando le sue componenti:
    
    $\qquad \frac{d\overrightarrow{r}}{dt} = \frac{dx}{dt}\hat{u}_x + \frac{dy}{dt}\hat{u}_y + \frac{dz}{dt}\hat{u}_z$
    
- **Componenti della velocità istantanea**: La velocità istantanea vettoriale può essere espressa attraverso le sue componenti cartesiane:
    
    - $v_x = \frac{dx}{dt}$
    - $v_y = \frac{dy}{dt}$
    - $v_z = \frac{dz}{dt}$
    
    Dare il vettore velocità vettoriale istantanea è equivalente a scomporlo nelle sue componenti cartesiane e a vedere come varia nel tempo la posizione del punto materiale lungo x, y e z, il che equivale a dare tre velocità scalari che sono le componenti della velocità sui tre assi.
    

### Accelerazione media e istantanea

- **Accelerazione media vettoriale**: L'accelerazione media vettoriale $\overrightarrow{a}_m$ in un intervallo di tempo $\Delta t$ è definita come la variazione del vettore velocità divisa per l'intervallo di tempo:
    
    $\qquad \overrightarrow{a}_m = \frac{\Delta \overrightarrow{v}}{\Delta t}$
    
- **Accelerazione istantanea vettoriale**: L'accelerazione istantanea vettoriale $\overrightarrow{a}(t)$ è definita come il limite dell'accelerazione media per $\Delta t$ che tende a zero, ovvero la derivata del vettore velocità rispetto al tempo:
    
    $\qquad \overrightarrow{a}(t) = \lim_{\Delta t \to 0} \frac{\Delta \overrightarrow{v}}{\Delta t} = \frac{d\overrightarrow{v}}{dt}$
    
- **Componenti dell'accelerazione istantanea**: L'accelerazione istantanea vettoriale può essere espressa attraverso le sue componenti cartesiane:
    
    - $a_x = \frac{dv_x}{dt}$
    - $a_y = \frac{dv_y}{dt}$
    - $a_z = \frac{dv_z}{dt}$

### Esempio di moto in 3D

- **Legge oraria**: Consideriamo un punto materiale che si muove nello spazio tridimensionale con la seguente legge oraria:
    
    - $x(t) = 2t$
    - $y(t) = t^2 - 1$
    - $z(t) = 2$
- **Traiettoria**: Per ricavare la traiettoria, possiamo esprimere il tempo $t$ in funzione di $x$ dalla prima equazione: $t = \frac{x}{2}$. Sostituendo nella seconda equazione, otteniamo:
    
    $\qquad y = \left(\frac{x}{2}\right)^2 - 1 = \frac{x^2}{4} - 1$
    
    Questa è l'equazione di una parabola nel piano $z = 2$.
    
- **Analisi del moto**: Il moto del punto materiale è la combinazione di un moto uniforme lungo l'asse x e un moto uniformemente accelerato lungo l'asse y, mentre l'asse z rimane costante.
    
- **Visualizzazione**: Il professore suggerisce di visualizzare il moto proiettandolo su un piano, in questo caso il piano xy a quota $z=2$, per semplificare l'analisi.
    
- **Derivate**: Il professore spiega come, partendo dalla legge oraria, si possono ricavare velocità e accelerazione derivando le componenti cartesiane.
    

Spero che questa riformulazione dettagliata e ben formattata ti sia utile!

___
Ecco una spiegazione dettagliata, comprensiva di passaggi matematici, esempi ed esercizi, basata sul contenuto della flashcard:

### Analisi della Traiettoria di un Moto

- **Determinazione della Traiettoria** Si parte dall'equazione parametrica del moto per determinare la traiettoria. L'obiettivo è eliminare il parametro tempo ($t$) per ottenere una relazione diretta tra le coordinate $x$ e $y$.
- **Esempio Specifico** Data una relazione in cui $x$ dipende da $t$ e $y$ dipende da $t^2$, si cerca di esprimere $t$ in funzione di $x$ e sostituire questa espressione nell'equazione di $y$. Questo processo porta a una equazione del tipo $y = ax^2 + b$, che rappresenta una parabola.
- **Punti Chiave** Per $y = 0$, si risolve l'equazione risultante per trovare i punti in cui la traiettoria interseca l'asse $x$. Ad esempio, se $x^2/4 = 1$, allora $x = \pm 2$.

### Analisi del Verso di Percorrenza

- **Considerazioni Iniziali** Si analizza come il punto materiale si muove lungo la traiettoria, da $x$ negativi a $x$ positivi o viceversa.
- **Importanza del Parametro Tempo** Si osserva che $x$ è proporzionale a $t$. Quando $t$ è positivo, $x$ è positivo, e quando $t$ è negativo, $x$ è negativo.
- **Punto di Partenza** All'istante $t = 0$, il punto materiale si trova in $x = 0$. Per $t > 0$, il punto si muove verso destra, mentre per $t < 0$ si trovava nella parte opposta.

### Calcolo del Vettore Velocità

- **Definizione** Il vettore velocità istantanea è rappresentato in termini delle sue componenti lungo gli assi $x$, $y$ e $z$.
- **Componente lungo l'asse x** Si calcola la derivata di $x$ rispetto al tempo ($t$). Se $x = 2t$, allora $v_x = 2$ m/s, il che significa che il punto materiale si muove lungo l'asse $x$ con velocità costante.
- **Componente lungo l'asse y** Si calcola la derivata di $y$ rispetto al tempo. Se $y = t^2 - 1$, allora $v_y = 2t$. La velocità lungo $y$ non è costante, ma aumenta linearmente con il tempo, ed è zero per $t = 0$.
- **Variazione della Velocità** Per $t$ negativi, $v_y$ è negativa (diretta verso il basso), poi diminuisce fino a zero per $t = 0$, e poi diventa positiva per $t > 0$ (diretta verso l'alto).
- **Tangente alla Traiettoria** Il vettore velocità, ottenuto sommando vettorialmente le componenti $v_x$ e $v_y$, è tangente alla traiettoria.

### Calcolo del Vettore Accelerazione

- **Definizione** Il vettore accelerazione è costituito dalle componenti $a_x$, $a_y$ e $a_z$.
- **Componente lungo l'asse x** Si calcola la derivata di $v_x$ rispetto al tempo. Poiché $v_x$ è costante e pari a 2, $a_x = 0$.
- **Componente lungo l'asse y** Si calcola la derivata di $v_y$ rispetto al tempo. Se $v_y = 2t$, allora $a_y = 2$ m/s².
- **Componente lungo l'asse z** La derivata di $v_z$ rispetto al tempo è $0$.
- **Direzione** L'accelerazione è costante e diretta lungo l'asse $y$. Questo spiega perché la traiettoria è una parabola con concavità verso l'alto. Il vettore accelerazione non è tangente né perpendicolare alla traiettoria.

### Applicazione al Moto Parabolico

- **Scomposizione del Moto** Quando si lancia un oggetto soggetto solo all'accelerazione di gravità, è utile scomporre il moto nelle componenti orizzontale e verticale.
- **Definizione degli Assi** Si definiscono due assi cartesiani ($x$ e $y$) nel piano del moto. Un asse (tipicamente $y$) è allineato con l'accelerazione di gravità.
- **Moto Uniforme e Accelerato** Lungo l'asse $y$, il moto è uniformemente accelerato (o decelerato, a seconda della direzione scelta per l'asse). Lungo l'asse $x$, il moto è uniforme.

### Risoluzione di un Problema di Moto Parabolico

- **Scenario** Un oggetto viene lanciato con una certa velocità iniziale e soggetto alla sola accelerazione di gravità. Si vuole sapere quanto tempo impiega a cadere al suolo e quanto spazio percorre orizzontalmente.
- **Definizione degli Assi** Si sceglie un sistema di riferimento con l'asse $y$ parallelo all'accelerazione di gravità (verso l'alto per convenzione) e l'origine a terra. L'asse $x$ è orizzontale.
- **Condizioni Iniziali** Si definiscono le condizioni iniziali del moto: il vettore velocità iniziale ($v_0$) e la posizione iniziale. L'angolo di lancio ($\theta$) rispetto all'asse orizzontale è noto.
- **Componenti della Velocità Iniziale** La componente $x$ della velocità iniziale è $v_0 \cos(\theta)$, mentre la componente $y$ è $v_0 \sin(\theta)$.
- **Posizione Iniziale** La posizione iniziale è definita da $x_0 = 0$ e $y_0 = h$, dove $h$ è l'altezza iniziale dell'oggetto.

### Risoluzione del Problema Inverso

- **Calcolo delle Velocità** Si calcolano le componenti della velocità in funzione del tempo.
    - $v_x(t) = v_0 \cos(\theta)$ (costante)
    - $v_y(t) = v_0 \sin(\theta) - gt$
- **Calcolo della Posizione** Si integrano le equazioni della velocità per ottenere le equazioni della posizione.
    - $x(t) = x_0 + \int v_x(t) dt = v_0 \cos(\theta) \cdot t$
    - $y(t) = y_0 + \int v_y(t) dt = h + v_0 \sin(\theta) \cdot t - \frac{1}{2}gt^2$
- **Calcolo della Gittata** Per trovare la gittata, si impone $y(t) = 0$ e si risolve per $t$ (tempo di volo). Poi si sostituisce questo valore di $t$ nell'equazione di $x(t)$ per ottenere la distanza orizzontale percorsa.
    - $Gittata = x(t_{finale})$ quando $y(t_{finale}) = 0$
#### References



