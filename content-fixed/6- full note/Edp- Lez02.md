---
title: Edp  Lez02
description: Appunto automatico
---

2025-02-18 15:21

_Status: #revisione_zero #flashcard_zero #riscritto_zero 

_Tags: [[Metodi Analitici per le Equazioni alle Derivate Parziali]] [[sbobine]]

## lez02- Edp

### Funzionali Lineari Continui

Un **funzionale lineare continuo** è una trasformazione lineare che mappa uno spazio vettoriale normato nei numeri reali, mantenendo la proprietà di continuità. In termini più formali, $T: X \rightarrow \mathbb{R}$ è un funzionale lineare continuo se:

- È lineare: $T(\alpha x + \beta y) = \alpha T(x) + \beta T(y)$ per ogni $x, y \in X$ e $\alpha, \beta \in \mathbb{R}$.
- È continuo: Esiste una costante $C > 0$ tale che $|T(x)| \leq C ||x||$ per ogni $x \in X$.

La **norma** di un funzionale lineare continuo $T$ è definita come:

```
||T|| = sup { |T(x)| : ||x|| = 1 }
```

Questa norma rappresenta il massimo valore che il funzionale può assumere su vettori di norma unitaria. L'insieme di tutti i funzionali lineari continui su uno spazio vettoriale normato $X$ forma lo **spazio duale** $X^*$, che è a sua volta uno spazio vettoriale normato e completo.

#### Esempi di Funzionali Lineari Continui

1. **Integrale Definito**:
    
    - Consideriamo lo spazio delle funzioni continue su un intervallo $[a, b]$, indicato come $C[a, b]$. Un funzionale lineare continuo può essere definito come:
    
    ```
    T(f) = integrale_a^b f(x) dx
    ```
    
    - Questo funzionale mappa ogni funzione $f \in C[a, b]$ al valore del suo integrale definito sull'intervallo $[a, b]$.
2. **Valutazione in un Punto**:
    
    - Sempre nello spazio $C[a, b]$, possiamo definire un funzionale che valuta la funzione in un punto specifico $x_0 \in [a, b]$:
    
    ```
    T(f) = f(x_0)
    ```
    
    - Questo funzionale restituisce il valore della funzione $f$ nel punto $x_0$.

### Disuguaglianza di Hölder

La **disuguaglianza di Hölder** è uno strumento fondamentale per costruire funzionali lineari continui sugli spazi $L^p(\Omega)$.

#### Esponenti Coniugati

Due esponenti $p, q \in [1, \infty]$ sono detti **coniugati** se soddisfano la relazione:

```
1/p + 1/q = 1
```

Casi speciali:

- Se $p = 1$, allora $q = \infty$ e viceversa.
- Se $p = 2$, allora $q = 2$.

#### Enunciato della Disuguaglianza

Siano $f \in L^p(\Omega)$ e $g \in L^q(\Omega)$, con $p$ e $q$ esponenti coniugati. Allora il prodotto $f \cdot g$ appartiene a $L^1(\Omega)$ e vale la disuguaglianza:


$$||f * g||_{L^1}(\Omega) \leq ||f||_{L^p}(\Omega) * ||g||_{L^q}(\Omega)$$


- Questa disuguaglianza è cruciale perché ci permette di controllare l'integrale del prodotto di due funzioni in termini delle loro norme $L^p$ e $L^q$.
	- ![[Pasted image 20250221101610.png]]

#### Costruzione di Funzionali Lineari Continui su $L^p(\Omega)$

Fissiamo $g \in L^q(\Omega)$. Definiamo un funzionale $T$ su $L^p(\Omega)$ come per un $p \in[1,+\infty]$ e un $q$ suo esponente coniugato:

```
T(f) = integrale_Omega f(x) * g(x) dx
```

Questo funzionale è lineare per la linearità dell'integrale. Per la disuguaglianza di Hölder, è anche continuo:

```
|T(f)| = |integrale_Omega f(x) * g(x) dx| <= ||f||_Lp(Omega) * ||g||_Lq(Omega)
```

Quindi, $||T|| \leq ||g||_{L^q(\Omega)}$. Si può dimostrare che, in realtà, $||T|| = ||g||_{L^q(\Omega)}$.

### Teorema di Rappresentazione di Riesz

Il **teorema di rappresentazione di Riesz** fornisce una caratterizzazione completa dei funzionali lineari continui sugli spazi $L^p(\Omega)$.

#### Enunciato del Teorema

Sia $1 \leq p < \infty$ e sia $T \in (L^p(\Omega))^*$ (cioè, $T$ è un funzionale lineare continuo su $L^p(\Omega)$). Allora esiste un'unica funzione $g \in L^q(\Omega)$ tale che:

```
T(f) = integrale_Omega f(x) * g(x) dx
```

per ogni $f \in L^p(\Omega)$, dove $q$ è l'esponente coniugato di $p$. Inoltre, $||T|| = ||g||_{L^q(\Omega)}$.

- Questo teorema è potente perché afferma che ogni funzionale lineare continuo su $L^p(\Omega)$ può essere rappresentato come l'integrale del prodotto con una funzione $g$ appropriata in $L^q(\Omega)$.

#### Conseguenza Importante

Il duale di $L^p(\Omega)$ è isomorficamente isometrico a $L^q(\Omega)$, cioè $(L^p(\Omega))^* \cong L^q(\Omega)$. In particolare, $(L^2(\Omega))^* \cong L^2(\Omega)$.

### Spazi di Hilbert

Uno **spazio di Hilbert** è uno spazio vettoriale reale (o complesso) completo dotato di un prodotto scalare $\langle \cdot, \cdot \rangle$ che induce una norma $||\cdot||$ tale che $||x|| = \sqrt{\langle x, x \rangle}$.

#### Funzionali Lineari Continui su Spazi di Hilbert

Anche negli spazi di Hilbert, i funzionali lineari continui hanno una rappresentazione speciale.

#### Teorema di Rappresentazione di Riesz per Spazi di Hilbert

Sia $H$ uno spazio di Hilbert e sia $T \in H^*$. Allora esiste un unico vettore $g \in H$ tale che:

```
T(f) = <f, g>
```

per ogni $f \in H$. Inoltre, $||T|| = ||g||_H$.

- Questo teorema afferma che ogni funzionale lineare continuo su $H$ può essere rappresentato come il prodotto scalare con un vettore $g$ appropriato in $H$.

#### Conseguenza

Il duale di $H$ è isomorficamente isometrico a $H$, cioè $H^* \cong H$.

### Teorema di Pitagora negli Spazi di Hilbert

Sia ${u_n}_{n=1}^{\infty}$ una successione di vettori ortogonali in uno spazio di Hilbert $H$, cioè $\langle u_n, u_m \rangle = 0$ per $n \neq m$. Se la serie delle norme al quadrato converge, cioè $\sum_{n=1}^{\infty} ||u_n||^2 < \infty$, allora la serie $\sum_{n=1}^{\infty} u_n$ converge in $H$ a un vettore $u$, e vale:

```
||u||^2 = sommatoria ||un||^2
```

- Questo è un'estensione del teorema di Pitagora a spazi di dimensione infinita.

### Sistemi Ortonormali Completi e Serie di Fourier

Un **sistema ortonormale completo** (SONC) in uno spazio di Hilbert $H$ è una successione ${e_n}_{n=1}^{\infty}$ di vettori in $H$ tali che:

- **Ortonormalità**: $\langle e_n, e_m \rangle = \delta_{nm}$, dove $\delta_{nm}$ è il delta di Kronecker (1 se $n = m$, 0 altrimenti).
- **Completezza**: Se $\langle f, e_n \rangle = 0$ per ogni $n$, allora $f = 0$.

#### Trasformata di Fourier Astratta

Per ogni $f \in H$, i **coefficienti di Fourier** rispetto al SONC ${e_n}$ sono definiti come:

```
f_n = <f, en>
```

L'operatore $F: H \rightarrow l^2(\mathbb{N})$ che associa a ogni $f \in H$ la successione dei suoi coefficienti di Fourier, cioè $F(f) = {f_n}_{n=1}^{\infty}$, è una **isometria lineare**:

```
||f||_H^2 = sommatoria |fn|^2
```

Inoltre, per ogni $f, g \in H$:

```
<f, g> = sommatoria fn * gn
```

- Questo risultato è fondamentale perché mostra che uno spazio di Hilbert con un SONC è isomorficamente isometrico a $l^2(\mathbb{N})$.

### Equazioni di Laplace e Poisson

#### Definizioni

- **Equazione di Laplace**: $\Delta u = 0$ in $\Omega$
- **Equazione di Poisson**: $\Delta u = f$ in $\Omega$
- **Funzione Armonica**: Una funzione $u$ tale che $\Delta u = 0$ in $\Omega$

#### Elettrostatica

Il **teorema di Gauss** in elettrostatica afferma che il flusso del campo elettrostatico $E$ attraverso una superficie chiusa $S$ è proporzionale alla carica totale $Q$ contenuta all'interno di $S$:

```
integrale_S E * dS = 4 * pi * K * Q
```

dove $K$ è la costante di Coulomb. Utilizzando il teorema della divergenza, si ha:

```
integrale_V div(E) dV = 4 * pi * K * Q
```

dove $V$ è il volume racchiuso da $S$. Se la carica è distribuita con densità $\rho$, allora $Q = \int_V \rho dV$. Quindi:

```
integrale_V (div(E) - 4 * pi * K * rho) dV = 0
```

Se $E$ è conservativo, $E = -\nabla U$, dove $U$ è il potenziale elettrostatico. Quindi $\text{div}(E) = -\Delta U$, e si ottiene l'equazione di Poisson:

```
Delta U = -4 * pi * K * rho
```

#### Fluidodinamica

Per un fluido incomprimibile e irrotazionale, il campo di velocità $v$ soddisfa $\text{div}(v) = 0$ e $\text{rot}(v) = 0$. In tal caso, esiste un potenziale di velocità $\phi$ tale che $v = \nabla \phi$. Quindi $\text{div}(v) = \Delta \phi = 0$, e il potenziale di velocità soddisfa l'equazione di Laplace:

```
Delta phi = 0
```

Spero che questa rielaborazione dettagliata ti sia utile!
#### References



