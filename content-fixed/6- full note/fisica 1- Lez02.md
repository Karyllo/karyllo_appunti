---
title: fisica 1  Lez02
description: Appunto automatico
---

2025-02-21 16:40

_Status: #flashcard_zero   #riscritto_zero   #revisione_zero 

_Tags:  [[3- tag/fisica 1]]    [[sbobine]]

## Lez02- fisica 1

### Trattazione Scalare della Cinematica del Punto Materiale

Nella trattazione scalare della cinematica del punto materiale, si considera un punto materiale che si muove lungo una traiettoria nota $\gamma$. Questa traiettoria è definita da una legge dello spazio, che può essere espressa in coordinate cartesiane come l'intersezione tra due superfici.

#### Ascissa Curvilinea e Legge Oraria

Una volta nota la traiettoria, il moto del punto materiale può essere descritto attraverso l'**ascissa curvilinea** $s(t)$, che rappresenta la lunghezza del percorso lungo la traiettoria a partire da un'origine $\Omega$ fissata, con un verso positivo definito. La funzione $s(t)$ è nota in ogni istante di tempo e viene chiamata **legge oraria del moto**. Conoscere la traiettoria e la legge oraria permette di descrivere completamente il moto del punto materiale nello spazio.

- **Esempio:** Immagina una traiettoria complessa nello spazio. Si definisce un'origine $\Omega$ e un verso positivo. Per una posizione del punto materiale all'istante $t$, l'ascissa curvilinea è la lunghezza del percorso da $\Omega$ a quel punto, presa come positiva se il punto si trova nel verso positivo rispetto all'origine, negativa altrimenti.

La legge oraria $s(t)$ può essere rappresentata sia come funzione analitica del tempo, sia attraverso un grafico chiamato **diagramma orario**.

- **Esempio di diagramma orario:** Un punto è inizialmente fermo a distanza $s_0$ dall'origine all'istante $t_0 = 0$. Rimane fermo per un certo tempo, poi inizia ad allontanarsi dall'origine, si ferma di nuovo e infine torna indietro rapidamente, attraversando l'origine.

### Velocità Scalare

#### Velocità Scalare Media

La **velocità scalare media** $v_m$ in un intervallo di tempo $\Delta t = t_2 - t_1$ è definita come la variazione dell'ascissa curvilinea divisa per l'intervallo di tempo:

$v_m = \frac{s(t_2) - s(t_1)}{t_2 - t_1} = \frac{\Delta s}{\Delta t}$

Le dimensioni di una velocità sono il rapporto tra una lunghezza e un tempo, quindi nel sistema internazionale si misurano in metri al secondo ($m/s$).

Il segno della velocità indica la direzione del moto rispetto al verso positivo scelto sulla traiettoria. Una velocità positiva indica che il punto si muove nel verso positivo, mentre una velocità negativa indica che si muove nel verso opposto.

Geometricamente, la velocità scalare media corrisponde alla pendenza della retta secante il diagramma orario nei punti $t_1$ e $t_2$.

#### Velocità Scalare Istantanea

La **velocità scalare istantanea** $v(t)$ è definita come il limite della velocità scalare media quando l'intervallo di tempo $\Delta t$ tende a zero:

$v(t) = \lim_{\Delta t \to 0} \frac{\Delta s}{\Delta t} = \frac{ds}{dt}$

Quindi, la velocità istantanea è la derivata dell'ascissa curvilinea rispetto al tempo. Geometricamente, corrisponde alla pendenza della retta tangente al diagramma orario in un dato istante $t$.

### Accelerazione Scalare

#### Accelerazione Scalare Media

L'**accelerazione scalare media** $a_m$ in un intervallo di tempo $\Delta t = t_2 - t_1$ è definita come la variazione della velocità scalare divisa per l'intervallo di tempo:

$a_m = \frac{v(t_2) - v(t_1)}{t_2 - t_1} = \frac{\Delta v}{\Delta t}$

Le dimensioni di un'accelerazione sono il rapporto tra una velocità e un tempo, quindi nel sistema internazionale si misurano in metri al secondo quadrato ($m/s^2$).

Un'accelerazione positiva indica un aumento della velocità, mentre un'accelerazione negativa indica una diminuzione della velocità (decelerazione).

Geometricamente, l'accelerazione scalare media rappresenta la pendenza della retta secante il grafico della velocità in funzione del tempo nei punti $t_1$ e $t_2$.

#### Accelerazione Scalare Istantanea

L'**accelerazione scalare istantanea** $a(t)$ è definita come il limite dell'accelerazione scalare media quando l'intervallo di tempo $\Delta t$ tende a zero:

$a(t) = \lim_{\Delta t \to 0} \frac{\Delta v}{\Delta t} = \frac{dv}{dt}$

L'accelerazione istantanea è quindi la derivata della velocità rispetto al tempo. Geometricamente, corrisponde alla pendenza della retta tangente al grafico della velocità in funzione del tempo in un dato istante $t$.

### Problema Inverso della Cinematica

Il problema inverso della cinematica consiste nel determinare la legge oraria $s(t)$ a partire dalla conoscenza dell'accelerazione $a(t)$ e della traiettoria. Questo problema richiede l'integrazione successiva dell'accelerazione per ottenere la velocità e poi l'ascissa curvilinea.

#### Calcolo della Velocità a Partire dall'Accelerazione

Dalla definizione di accelerazione istantanea $a(t) = \frac{dv}{dt}$, si può ricavare la variazione infinitesima della velocità $dv = a(t) dt$. Integrando entrambi i membri tra un istante iniziale $t_0$ e un istante generico $t$, si ottiene:

$\int_{t_0}^{t} a(t') dt' = \int_{v(t_0)}^{v(t)} dv'$

$v(t) = v(t_0) + \int_{t_0}^{t} a(t') dt'$

Dove $v(t_0)$ è la velocità iniziale del punto materiale.

#### Calcolo dell'Ascissa Curvilinea a Partire dalla Velocità

Analogamente, dalla definizione di velocità istantanea $v(t) = \frac{ds}{dt}$, si ricava $ds = v(t) dt$. Integrando entrambi i membri tra $t_0$ e $t$, si ottiene:

$\int_{t_0}^{t} v(t') dt' = \int_{s(t_0)}^{s(t)} ds'$

$s(t) = s(t_0) + \int_{t_0}^{t} v(t') dt'$

Dove $s(t_0)$ è la posizione iniziale del punto materiale.

Quindi, per risolvere il problema inverso, è necessario conoscere l'accelerazione $a(t)$ e le **condizioni iniziali** per la velocità $v(t_0)$ e la posizione $s(t_0)$.

### Esempi di Moti Particolari

#### Moto Uniforme

Nel **moto uniforme**, l'accelerazione è nulla ($a(t) = 0$). La velocità rimane costante e pari alla velocità iniziale $v(t) = v_0$. La legge oraria è data da:

$s(t) = s_0 + v_0 (t - t_0)$

Dove $s_0$ è la posizione iniziale all'istante $t_0$. Il diagramma orario è una retta con pendenza $v_0$.

#### Moto Uniformemente Accelerato

Nel **moto uniformemente accelerato**, l'accelerazione è costante ($a(t) = a_0$). La velocità varia linearmente nel tempo:

$v(t) = v_0 + a_0 (t - t_0)$

La legge oraria è data da:

$s(t) = s_0 + v_0 (t - t_0) + \frac{1}{2} a_0 (t - t_0)^2$

Dove $s_0$ è la posizione iniziale e $v_0$ la velocità iniziale. Il diagramma orario è una parabola.

### Esempio di Applicazione: Moto di un Proiettile

Consideriamo il moto di un punto materiale lanciato verticalmente verso l'alto con una velocità iniziale $v_0$. La traiettoria è rettilinea verticale, con origine al suolo e verso positivo verso l'alto. L'accelerazione è costante e pari all'accelerazione di gravità, diretta verso il basso ($a(t) = -g$, con $g = 9.81 m/s^2$).

Le condizioni iniziali sono: posizione iniziale $y(0) = h$ (altezza iniziale) e velocità iniziale $v(0) = v_0$.

Integrando l'accelerazione, si ottiene la velocità:

$v(t) = v_0 - gt$

Integrando la velocità, si ottiene la legge oraria:

$y(t) = h + v_0 t - \frac{1}{2} gt^2$

Per trovare l'istante $t^*$ in cui il punto raggiunge la massima quota, si pone $v(t^*) = 0$:

$v_0 - gt^* = 0$

$t^* = \frac{v_0}{g}$

Questo risultato può essere verificato dimensionalmente, mostrando che le dimensioni di $\frac{v_0}{g}$ sono quelle di un tempo.
___
### Cinematica del Punto Materiale: Trattazione Scalare

Nella trattazione scalare della cinematica, si considera un punto materiale che si muove lungo una **traiettoria nota** $\gamma$. La traiettoria è definita da una legge nello spazio, ad esempio tramite equazioni cartesiane.

#### Ascissa Curvilinea e Legge Oraria

Per descrivere il moto del punto materiale sulla traiettoria, si introduce l'**ascissa curvilinea** $s(t)$, che rappresenta la lunghezza del percorso lungo la traiettoria a partire da un'origine fissata $\Omega$. La funzione $s(t)$ è nota in ogni istante di tempo e prende il nome di **legge oraria** del moto.

- **Definizione di Ascissa Curvilinea:** Immaginando una traiettoria complessa, si fissa un'origine $\Omega$ e un verso positivo. La posizione del punto materiale all'istante $t$ è data dalla lunghezza del tratto di traiettoria tra $\Omega$ e il punto, presa con segno positivo se il punto si trova nel verso positivo, negativo altrimenti.

#### Velocità

##### Velocità Media

La velocità scalare media $v_m$ in un intervallo di tempo $\Delta t = t_2 - t_1$ è definita come la variazione dell'ascissa curvilinea divisa per l'intervallo di tempo:

$v_m = \frac{s(t_2) - s(t_1)}{t_2 - t_1} = \frac{\Delta s}{\Delta t}$

Dimensionalmente, la velocità è il rapporto tra una lunghezza e un tempo. Il segno della velocità indica la direzione del moto rispetto al verso positivo scelto sulla traiettoria.

Geometricamente, la velocità media corrisponde alla pendenza della retta secante il diagramma orario nei punti $t_1$ e $t_2$.

##### Velocità Istantanea

La velocità scalare istantanea $v(t)$ è definita come il limite della velocità media quando l'intervallo di tempo $\Delta t$ tende a zero:

$v(t) = \lim_{\Delta t \to 0} \frac{\Delta s}{\Delta t} = \frac{ds}{dt}$

La velocità istantanea è la derivata della legge oraria rispetto al tempo. Geometricamente, la velocità istantanea corrisponde alla pendenza della retta tangente al diagramma orario in un dato istante $t$.

#### Accelerazione

##### Accelerazione Media

L'accelerazione scalare media $a_m$ in un intervallo di tempo $\Delta t = t_2 - t_1$ è definita come la variazione della velocità divisa per l'intervallo di tempo:

$a_m = \frac{v(t_2) - v(t_1)}{t_2 - t_1} = \frac{\Delta v}{\Delta t}$

Dimensionalmente, l'accelerazione è il rapporto tra una velocità e un tempo, quindi una lunghezza divisa per il tempo al quadrato. Il segno dell'accelerazione indica se la velocità sta aumentando (accelerazione positiva) o diminuendo (accelerazione negativa).

##### Accelerazione Istantanea

L'accelerazione scalare istantanea $a(t)$ è definita come il limite dell'accelerazione media quando l'intervallo di tempo $\Delta t$ tende a zero:

$a(t) = \lim_{\Delta t \to 0} \frac{\Delta v}{\Delta t} = \frac{dv}{dt}$

L'accelerazione istantanea è la derivata della velocità rispetto al tempo. Derivando graficamente la velocità, si considera la retta tangente al grafico della velocità in ogni istante di tempo e si guarda la pendenza di questa retta.

#### Relazione tra Ascissa Curvilinea, Velocità e Accelerazione

In sintesi, si ha:

- **Velocità:** $v(t) = \frac{ds}{dt}$
- **Accelerazione:** $a(t) = \frac{dv}{dt} = \frac{d^2s}{dt^2}$

### Problema Inverso della Cinematica

Il problema inverso della cinematica consiste nel ricavare la legge oraria $s(t)$ a partire dalla conoscenza dell'accelerazione $a(t)$. Questo problema è rilevante perché, studiando la dinamica, si può dedurre l'accelerazione di un oggetto a partire dalle forze agenti su di esso.

#### Integrazione e Condizioni Iniziali

Per ricavare la legge oraria dall'accelerazione, è necessario integrare due volte. Tuttavia, l'integrazione introduce costanti arbitrarie, quindi è necessario conoscere le **condizioni iniziali** del moto. Le condizioni iniziali specificano la posizione $s(t_0)$ e la velocità $v(t_0)$ del punto materiale all'istante iniziale $t_0$.

#### Passaggi Matematici

1. **Ricavare la Velocità dall'Accelerazione:**
    
    Si parte dalla definizione di accelerazione istantanea:
    
    $a(t) = \frac{dv}{dt}$
    
    Si separa le variabili e si integra:
    
    $dv = a(t) dt$
    
    $\int_{v(t_0)}^{v(t)} dv = \int_{t_0}^{t} a(t') dt'$
    
    $v(t) - v(t_0) = \int_{t_0}^{t} a(t') dt'$
    
    $v(t) = v(t_0) + \int_{t_0}^{t} a(t') dt'$
    
    Dove $v(t_0)$ è la velocità iniziale.
    
2. **Ricavare l'Ascissa Curvilinea dalla Velocità:**
    
    Si parte dalla definizione di velocità istantanea:
    
    $v(t) = \frac{ds}{dt}$
    
    Si separa le variabili e si integra:
    
    $ds = v(t) dt$
    
    $\int_{s(t_0)}^{s(t)} ds = \int_{t_0}^{t} v(t') dt'$
    
    $s(t) - s(t_0) = \int_{t_0}^{t} v(t') dt'$
    
    $s(t) = s(t_0) + \int_{t_0}^{t} v(t') dt'$
    
    Dove $s(t_0)$ è la posizione iniziale.
    

In sintesi, per risolvere il problema inverso, si integrano due volte l'accelerazione, utilizzando le condizioni iniziali per determinare le costanti di integrazione.

### Esempi di Moti Particolari

#### Moto Uniforme

Il moto uniforme è caratterizzato da **accelerazione nulla**: $a(t) = 0$.

- **Velocità:** Integrando l'accelerazione, si ottiene una velocità costante: $v(t) = v_0$.
- **Legge Oraria:** Integrando la velocità, si ottiene una legge oraria lineare: $s(t) = s_0 + v_0 (t - t_0)$.

Il diagramma orario è una retta la cui pendenza rappresenta la velocità.

#### Moto Uniformemente Accelerato

Il moto uniformemente accelerato è caratterizzato da **accelerazione costante**: $a(t) = a_0$.

- **Velocità:** Integrando l'accelerazione, si ottiene una velocità che varia linearmente nel tempo: $v(t) = v_0 + a_0 (t - t_0)$.
- **Legge Oraria:** Integrando la velocità, si ottiene una legge oraria quadratica: $s(t) = s_0 + v_0 (t - t_0) + \frac{1}{2} a_0 (t - t_0)^2$.

Il diagramma orario è una parabola.

### Esempio: Moto di un Proiettile Lanciato Verticalmente

Si consideri un punto materiale lanciato verticalmente verso l'alto con una velocità iniziale $v_0$. L'accelerazione è costante e pari all'accelerazione di gravità, diretta verso il basso: $a(t) = -g$.

- **Definizione del sistema di riferimento:** Si sceglie un asse verticale $y$ con origine al suolo e verso positivo verso l'alto.
    
- **Condizioni iniziali:**
    
    - $y(t_0) = h$, dove $h$ è l'altezza iniziale.
    - $v(t_0) = v_0$, positiva perché diretta verso l'alto.
- **Velocità:** Integrando l'accelerazione, si ottiene: $v(t) = v_0 - gt$.
    
- **Legge Oraria:** Integrando la velocità, si ottiene: $y(t) = h + v_0t - \frac{1}{2}gt^2$.
    
- **Tempo per raggiungere la massima quota:** Si impone $v(t) = 0$ e si ricava $t^* = \frac{v_0}{g}$.
    

#### Verifica dimensionale

Verifichiamo che $t^* = \frac{v_0}{g}$ abbia le dimensioni di un tempo.

- $[v_0] = \frac{L}{T}$ (lunghezza su tempo)
- $[g] = \frac{L}{T^2}$ (lunghezza su tempo al quadrato)

Quindi, $[\frac{v_0}{g}] = \frac{L/T}{L/T^2} = T$, che ha le dimensioni di un tempo.
___
Ecco la spiegazione del professore, integrata con i dettagli dei PDF forniti, riguardo al moto uniformemente accelerato e alla sua derivazione matematica, con particolare attenzione ai passaggi, agli esempi e agli esercizi.

### Moto Uniformemente Accelerato: Derivazione della Legge Oraria

#### Definizioni Preliminari

- **Traiettoria:** Si assume che la traiettoria del punto materiale sia nota.
- **Ascissa curvilinea ($s(t)$):** È la grandezza scalare che descrive la posizione del punto materiale lungo la traiettoria in funzione del tempo.
- **Legge oraria:** La funzione $s(t)$ che descrive come l'ascissa curvilinea varia nel tempo.

#### Problema Inverso della Cinematica

L'obiettivo è ricavare la legge oraria $s(t)$ a partire dalla conoscenza dell'accelerazione $a(t)$ e delle condizioni iniziali.

#### Passaggi Matematici

1. **Ricavare la velocità $v(t)$ dall'accelerazione $a(t)$:**
    
    - Si parte dalla definizione di accelerazione istantanea: $$a(t) = \frac{dv}{dt}$$
    - Si separa le variabili: $$dv = a(t) , dt$$
    - Si integra entrambi i membri: $$\int_{t_0}^{t} a(t') , dt' = \int_{v(t_0)}^{v(t)} dv$$
    - Risolvendo l'integrale, si ottiene: $$v(t) = v(t_0) + \int_{t_0}^{t} a(t') , dt'$$ dove $v(t_0)$ è la velocità iniziale.
2. **Ricavare l'ascissa curvilinea $s(t)$ dalla velocità $v(t)$:**
    
    - Si parte dalla definizione di velocità istantanea: $$v(t) = \frac{ds}{dt}$$
    - Si separa le variabili: $$ds = v(t) , dt$$
    - Si integra entrambi i membri: $$\int_{t_0}^{t} v(t') , dt' = \int_{s(t_0)}^{s(t)} ds$$
    - Risolvendo l'integrale, si ottiene: $$s(t) = s(t_0) + \int_{t_0}^{t} v(t') , dt'$$ dove $s(t_0)$ è la posizione iniziale. **Condizioni Iniziali:** Per risolvere il problema inverso, è necessario conoscere sia la velocità iniziale $v_0 = v(t_0)$ che la posizione iniziale $s_0 = s(t_0)$.

#### Esempio di Moto Uniformemente Accelerato

- **Definizione:** Moto con accelerazione costante $a(t) = a_0$.
- **Velocità:** $$v(t) = v_0 + \int_{t_0}^{t} a_0 , dt' = v_0 + a_0 (t - t_0)$$
- **Legge Oraria:** $$s(t) = s_0 + \int_{t_0}^{t} [v_0 + a_0 (t' - t_0)] , dt'$$ $$s(t) = s_0 + v_0 (t - t_0) + \frac{1}{2} a_0 (t - t_0)^2$$

#### Cambio di Variabile

Per semplificare l'integrale nella derivazione della legge oraria, si introduce un cambio di variabile:

- Si definisce $t^* = t - t_0$, quindi $dt^* = dt$.
- L'integrale diventa: $$\int a_0 t^* , dt^* = a_0 \frac{(t^*)^2}{2} = a_0 \frac{(t - t_0)^2}{2}$$

#### Risultato Finale

La legge oraria per il moto uniformemente accelerato è:

$$s(t) = s_0 + v_0 (t - t_0) + \frac{1}{2} a_0 (t - t_0)^2$$

Se l'istante iniziale di osservazione è $t_0 = 0$, la legge si semplifica in:

$$s(t) = s_0 + v_0 t + \frac{1}{2} a_0 t^2$$

#### Grafico della Legge Oraria

La legge oraria è una parabola, con concavità verso l'alto se $a_0 > 0$ e verso il basso se $a_0 < 0$.

#### Esempio di Caduta di un Corpo

1. **Definizione del problema:**
    - Un corpo viene lanciato verticalmente verso l'alto con velocità iniziale $v_0$ da un'altezza $h$ rispetto al suolo.
    - L'accelerazione è costante e pari all'accelerazione di gravità, $a = -g$ (negativa perché diretta verso il basso).
2. **Definizione delle condizioni iniziali:**
    - $y(0) = h$ (posizione iniziale)
    - $v(0) = v_0$ (velocità iniziale)
3. **Calcolo della velocità in funzione del tempo:** $$v(t) = v_0 - gt$$
4. **Calcolo della posizione in funzione del tempo (legge oraria):** $$y(t) = h + v_0 t - \frac{1}{2} g t^2$$
5. **Calcolo del tempo per raggiungere la massima quota:**
    - Si imposta $v(t^*) = 0$ per trovare l'istante $t^*$ in cui la velocità è zero (punto di massima quota).
    - $v_0 - gt^* = 0 \Rightarrow t^* = \frac{v_0}{g}$

#### Analisi Dimensionale

Verificare che le dimensioni fisiche delle equazioni siano coerenti. Ad esempio, per il tempo di massima quota $t^* = \frac{v_0}{g}$:

- $[t^*] = T$ (tempo)
- $[\frac{v_0}{g}] = \frac{L/T}{L/T^2} = T$ Le dimensioni sono coerenti.

Spero che questa riformulazione dettagliata e ben formattata ti sia utile.
#### References



