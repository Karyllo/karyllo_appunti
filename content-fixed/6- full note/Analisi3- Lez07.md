---
title: Analisi3  Lez07
description: Appunto automatico
---

2025-02-19 21:30

_Status: #flashcard_finite  #revisione_finita   #riscritto_finito #domande

_Tags: [[Analisi3- Lez07]] [[sbobine]] 

## lez07- Analisi3

### Spazi Vettoriali e Norme

^2bfgy3

Il punto di partenza è la definizione di **norma** su uno spazio vettoriale.

Sia V uno spazio vettoriale su ℝ. Una norma su V è una funzione || ⋅ ||: V → ℝ che soddisfa le seguenti proprietà:

- **Non negatività**: ||x|| ≥ 0 per ogni x ∈ V
- **Definitezza**: ||x|| = 0 se e solo se x = 0ᵥ (dove 0ᵥ è il vettore nullo di V).
- **Omogeneità**: ||tx|| = |t| ||x|| per ogni x ∈ V e t ∈ ℝ.
- **Disuguaglianza triangolare**: ||x + y|| ≤ ||x|| + ||y|| per ogni x, y ∈ V.

Se uno spazio vettoriale V è dotato di una norma, la coppia (V, || ⋅ ||) è detta **spazio normato**. La norma generalizza l'idea di lunghezza di un vettore.

### Spazi Metrici

^rzkja2

La norma induce naturalmente una **distanza** (o metrica) su V, definita come:

$d_{||.||}(x, y) = ||x - y||$per ogni x, y ∈ V

Questa distanza soddisfa le proprietà fondamentali di una metrica:

- d(x, y) ≥ 0 per ogni x, y ∈ V, e d(x, y) = 0 se e solo se x = y
- d(x, y) = d(y, x) per ogni x, y ∈ V (simmetria)
- d(x, z) ≤ d(x, y) + d(y, z) per ogni x, y, z ∈ V (disuguaglianza triangolare)

La coppia (V, d), dove d è la distanza indotta dalla norma, è uno **spazio metrico**.

### Convergenza di Successioni

In uno spazio normato (e quindi anche metrico), si può definire la convergenza di una successione. Sia (V, || ⋅ ||) uno spazio normato e sia (xₙ) una successione in V.

- La successione (xₙ) converge a x₀ ∈ V se per ogni ε > 0 esiste un N ∈ ℕ tale che per ogni n > N, ||xₙ - x₀|| < ε. In altre parole:
    
    lim (n→∞) ||xₙ - x₀|| = 0
    
- La successione (xₙ) è di Cauchy se per ogni ε > 0 esiste un N ∈ ℕ tale che per ogni n, m > N, ||xₙ - xₘ|| < ε. In altre parole, i termini della successione diventano arbitrariamente vicini tra loro al crescere di n e m.
    

**Ogni successione convergente è di Cauchy**, ma il viceversa non è sempre vero.

### Spazi di Banach

^kw0ijh

La completezza è cruciale. Uno spazio normato (V, || ⋅ ||) è uno **spazio di Banach** se ogni successione di Cauchy in V converge a un limite che appartiene ancora a V. In termini di spazi metrici, uno spazio di Banach è uno spazio metrico completo rispetto alla metrica indotta dalla norma.

#### Esempi

^kz7ft3

- **ℝⁿ con la norma euclidea** è uno spazio di Banach. La norma euclidea è definita come:
    
    ||x|| = √(x₁² + ... + xₙ²) dove x = (x₁, ..., xₙ)
    
- **C⁰([a, b])**, lo spazio delle funzioni continue sull'intervallo chiuso e limitato [a, b], con la norma del **sup** è uno spazio di Banach. La norma del sup è definita come:
    
    ||f|| = max (x ∈ [a, b]) |f(x)|
    
    La convergenza in questa norma è equivalente alla convergenza uniforme. ==cos'è la convergenza uniforme???==
    
- Lo spazio **CB**, delle funzioni continue e limitate su tutto ℝ, con la norma del **sup** è uno spazio di Banach.
    

#### Controesempi

^r1gpe0

È importante notare che **non tutti gli spazi normati sono di Banach**. Il professore ha fornito alcuni esempi di spazi che "hanno buchi", cioè contengono successioni di Cauchy che non convergono a un elemento dello spazio.

- **C⁰([a, b]) con la norma L¹** non è uno spazio di Banach. La norma L¹ è definita come:
    
    ||f|| = ∫ₐᵇ |f(x)| dx
    
    In questo caso, si possono trovare successioni di funzioni continue la cui distanza, misurata con l'integrale del valore assoluto della differenza, tende a zero, ma che convergono a una funzione discontinua (che quindi non appartiene allo spazio C⁰([a, b])).
    
    Un esempio specifico fornito dal professore:
    
    Si consideri l'intervallo \ e la successione di funzioni fₙ definite come:
    
    fₙ(x) = 0 se 0 ≤ x ≤ 1/2
    
    fₙ(x) = 2ⁿ(x - 1/2) se 1/2 < x ≤ 1/2 + 1/2ⁿ
    
    fₙ(x) = 1 se 1/2 + 1/2ⁿ < x ≤ 1
    
    Queste funzioni sono continue sull'intervallo . Tuttavia, questa successione è di Cauchy rispetto alla norma L¹, ma converge a una funzione discontinua. La funzione limite sarebbe:
    
    f(x) = 0 se 0 ≤ x ≤ 1/2
    
    f(x) = 1 se 1/2 < x ≤ 1
    
    Questa funzione limite non è continua in x = 1/2, quindi non appartiene a C⁰(). Questo dimostra che C⁰() con la norma L¹ non è completo.
    
- Lo spazio C₀ delle funzioni continue a supporto compatto non è uno spazio di Banach. In questo spazio, si considera la norma del sup, ma le successioni di Cauchy possono convergere a funzioni che non hanno supporto compatto.
    
    Un esempio è dato dalla successione:
    
    fₙ(x) = e^(-x²) se |x| < n
    
    fₙ(x) = e^(-n²) (n + 1 - |x|) se n ≤ |x| ≤ n + 1
    
    fₙ(x) = 0 se |x| > n + 1
    
    Queste funzioni sono continue e hanno supporto compatto. Tuttavia, la successione converge (rispetto alla norma del sup) alla funzione:
    
    f(x) = e^(-x²)
    
    che è continua e limitata su tutto ℝ, ma non ha supporto compatto. Questo mostra che C₀ non è uno spazio di Banach.
    

### Funzioni continue tra spazi normati

Siano V1 e V2 due spazi normati. Una funzione L: V1 → V2 è continua in x₀ ∈ V1 se per ogni ε > 0 esiste δ > 0 tale che:

||L(x) - L(x₀)||< ε per ogni x ∈ V1 tale che ||x - x₀|| < δ

Equivalentemente, L è continua in x₀ se e solo se per ogni successione xₙ in V1 convergente a x₀, la successione L(xₙ) converge a L(x₀) in V2.

### Continuità di applicazioni lineari

Siano V1 e V2 spazi normati e sia L: V1 → V2 una applicazione lineare. Sono equivalenti le seguenti affermazioni:

- L è continua in ogni punto di V1.
- L è continua in 0 (il vettore nullo di V1).
- Esiste una costante M > 0 tale che ||L(x)|| ≤ M ||x|| per ogni x ∈ V1.
#### References: [[Lezione_AM_10_31.pdf]]



