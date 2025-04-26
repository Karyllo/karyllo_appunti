---
title: Prob  Lez01'
description: Appunto automatico
---

2025-02-18 13:22

Status: #revisione_finita   #riscritto_finito  #flashcard_finite 

Tags: [[sbobine]] [[probabilità]]

## lez01'- Prob

### Introduzione alla Probabilità e Teoria della Misura

Il professore introduce il concetto di probabilità, sottolineando come essa si applichi a fenomeni non descrivibili con leggi deterministiche. La probabilità, in sostanza, misura l'incertezza. L'approccio matematico moderno alla probabilità si basa sulla teoria della misura.

### Concetti Chiave: Algebre, Misure, Misure di Probabilità (o probabilità)

Gli argomenti principali della lezione sono **algebre, σ-algebre, misure e misure di probabilità**. È importante, secondo il professore, fare tabula rasa delle concezioni elementari di probabilità per poter ricostruire i concetti in modo più rigoroso. L'astrazione è necessaria per inglobare sia il discreto che il continuo in un unico linguaggio matematico.

### Misura: Definizione Intuitiva

Intuitivamente, una misura associa un valore a un insieme. Questo valore può rappresentare un'area, una lunghezza, un peso o un'incertezza.
![[Pasted image 20250220085746.png]]

#### Proprietà Fondamentale

Se si misurano due insiemi disgiunti A₁ e A₂ separatamente, la somma delle loro misure deve essere uguale alla misura della loro unione:

μ(A₁ ∪ A₂) = μ(A₁) + μ(A₂) se A₁ ∩ A₂ = ∅

### Spazio Campionario (Ω)

- **Ω (Omega): Spazio Campionario (o Spazio degli Esiti)**:
    
    - L'insieme di tutti i possibili risultati di un esperimento casuale.
    - Insieme astratto, senza struttura particolare.
    - Può essere finito, infinito numerabile, o continuo.
    - Spesso non è esplicitamente definito, ma esiste implicitamente. ^ayww5x
- **ω (omega minuscola):
	- Esito Elementare**: Un singolo elemento di Ω, un punto, una particolare realizzazione dell'esperimento.( Parametrizzazione del caso).
- **Eventi A**: Sottoinsiemi di Ω  A⊂Ω.
    
    - Collezione di esiti elementari che soddisfano una condizione.
- **Evento Certo**: L'insieme Ω stesso.

#### Esempi di Spazi Campionari:

- Insieme finito di punti: Ω = {1, 2, 3, ..., 10}
- Numeri naturali non negativi: Ω = {0, 1, 2, ...}
- Numeri reali: Ω = ℝ
- Spazio euclideo: Ω = ℝᵈ (vettori con componenti reali)
- Successioni: Ω = {x = (x₁, x₂, ...): xᵢ ∈ {1, 2, ..., m}}

### Sottoinsiemi e Operazioni Insiemistiche

I sottoinsiemi di Ω rappresentano eventi. È fondamentale non confondere un punto (ω ∈ Ω) con un sottoinsieme.

#### Operazioni Fondamentali:

- **Complementare:** Aᶜ = {ω ∈ Ω: ω ∉ A} (tutti gli elementi di Ω che non appartengono ad A).
    - È essenziale specificare l'insieme universo (Ω) quando si considera il complementare.

### Algebre di Insiemi

Una classe (o famiglia) di sottoinsiemi di Ω $\mathcal{A}$ si dice algebra se soddisfa le seguenti proprietà:

1. Ω ∈ $\mathcal{A}$ (l'insieme totale appartiene all'algebra).
2. Se A ∈ $\mathcal{A}$, allora Aᶜ ∈ $\mathcal{A}$ (se un insieme appartiene all'algebra, anche il suo complementare appartiene all'algebra).
3. Se A₁, A₂ ∈ $\mathcal{A}$, allora A₁ ∪ A₂ ∈ $\mathcal{A}$ (se due insiemi appartengono all'algebra, anche la loro unione appartiene all'algebra).

#### Proprietà Derivata

Se A è un'algebra e A₁, ..., Aₙ ∈ A, allora ∪ᵢ₌₁ⁿ Aᵢ ∈ $\mathcal{A}$ (l'unione finita di insiemi appartenenti all'algebra appartiene all'algebra). Questo si dimostra per induzione.

### Sigma-Algebre (σ-algebre)

Una σ-algebra è un'algebra che è anche stabile rispetto a unioni numerabili. Formalmente, una classe di insiemi $\mathcal{F}$ è una σ-algebra se soddisfa: ^jk721q

1. Ω ∈ $\mathcal{F}$
2. Se A ∈ $\mathcal{F}$, allora Aᶜ ∈ $\mathcal{f}$
3. Se Aᵢ ∈ $\mathcal{F}$ per i = 1, 2, ..., allora ∪ᵢ₌₁^∞ Aᵢ ∈ $\mathcal{f}$ (l'unione numerabile di insiemi appartenenti alla σ-algebra appartiene alla σ-algebra).

#### Conseguenze Importanti:

- Se $\mathcal{F}$ è una σ-algebra, allora ∅ ∈ $\mathcal{F}$ (l'insieme vuoto appartiene alla σ-algebra). ^em0xcw
	- ![[Pasted image 20250220091107.png]] 1. e 2. implicano che $Ω ^c\in \mathcal{F}$ ma con $Ω ^c=∅$
- Se $\mathcal{F}$ è una σ-algebra, allora è anche un'algebra.
- La stabilità rispetto a unioni numerabili implica la stabilità rispetto a unioni finite, ma non viceversa.
	- ![[Pasted image 20250220091423.png]]

#### Osservazione sulle Notazioni

Il professore userà la lettera $\mathcal{F}$ per denotare una σ-algebra. In alcuni testi, si usa la lettera $\mathcal{A}$ per indicare sia le algebre che le σ-algebre.

#### Insieme delle Parti

^gsr24p

L'insieme delle parti $\mathcal{P}$(Ω) è l'insieme di tutti i sottoinsiemi di Ω. $\mathcal{P}$(Ω) è sempre una σ-algebra.

#### Caso Finito

Se Ω è un insieme finito, allora non c'è differenza tra algebra e σ-algebra. In questo caso, l'insieme delle parti $\mathcal{P}$(Ω) è finito, e quindi ogni famiglia di sottoinsiemi è finita.

### Misure
Una misura è una funzione che associa un valore numerico a un insieme, quantificandone la "dimensione" in un certo senso.

#### Spazio Misurabile

^0zangj

Una coppia (Ω, $\mathcal{A}$) o (Ω, $\mathcal{F}$), dove Ω è uno spazio campionario e $\mathcal{A}$ è un'algebra ( $\mathcal{F}$ è una σ-algebra) su Ω, è chiamata spazio misurabile.

#### Misura Finitamente Additiva

Una funzione μ: $\mathcal{A}$ → [0, +∞] è una misura finitamente additiva se soddisfa le seguenti proprietà:

1. μ(∅) = 0
2. Per ogni A₁, A₂ ∈ $\mathcal{A}$ tali che A₁ ∩ A₂ = ∅, si ha μ(A₁ ∪ A₂) = μ(A₁) + μ(A₂)
	- definire un algebra è servito a questo
- NOTA: μ non è una misura di un punto $μ_d$ , ma di una famiglia di sottoinsiemi.

#### Misura (σ-additiva o completamente additiva)

Una funzione μ: $\mathcal{F}$ → [0, +∞] è una misura (σ-additiva) se soddisfa le seguenti proprietà:

1. μ(∅) = 0
    
2. Se Aᵢ ∈ $\mathcal{F}$ per i = 1, 2, ... e Aᵢ ∩ Aⱼ = ∅ per ogni i ≠ j, allora:
    
    μ(∪ᵢ₌₁^∞ Aᵢ) = ∑ᵢ₌₁^∞ μ(Aᵢ)
    -$$ μ\left( \bigcup_{i \geq 1} A_i \right) = \sum_{i \geq 1} μ(A_i)$$.
    - se vale più infinito la somma, la misura sarà infinito
    

#### Terminologia

- **Eventi:** I sottoinsiemi di Ω sono spesso chiamati eventi.
- **Evento certo:** Ω (l'evento che si verifica sempre)
- **Evento impossibile:** ∅ (l'evento che non si verifica mai)
- **Evento contrario:** Aᶜ (il complementare di A)

### Misure di Probabilità

Una misura di probabilità è una misura che associa a ogni evento un numero compreso tra 0 e 1, rappresentando la probabilità che l'evento si verifichi.

#### Probabilità Finitamente Additiva

Una funzione $\mathbb{P}$: A →$[0,1]$ è una probabilità finitamente additiva se soddisfa:

1. P(∅) = 0 e P(Ω) = 1
2. Per ogni A₁, A₂ ∈ $\mathcal{A}$ tali che A₁ ∩ A₂ = ∅, si ha P(A₁ ∪ A₂) = P(A₁) + P(A₂)

#### Misura di Probabilità (σ-additiva)

Una funzione P: $\mathcal{F}$ → è una misura di probabilità (σ-additiva) se soddisfa:

- P(∅) = 0 e P(Ω) = 1
    
- Se Aᵢ ∈ $\mathcal{F}$ per i = 1, 2, ... e Aᵢ ∩ Aⱼ = ∅ per ogni i ≠ j, allora:
    $$P\left( \bigcup_{n \geq 1} A_n \right) = \sum_{n \geq 1} P(A_n).$$
    

#### Relazione tra Misure e Misure di Probabilità

Una misura di probabilità è un caso particolare di misura in cui i valori sono normalizzati tra 0 e 1 e la misura dello spazio totale è 1.
- definizione probabilità: è una misura sigma additiva tale per cui lo spazio totale vale omega

### Proprietà Elementari delle Misure (e Misure di Probabilità)

Le seguenti proprietà valgono sia per le misure che per le misure di probabilità (nell'accezione di σ-additiva):

1. Se A₁ ∩ A₂ = ∅, allora μ(A₁ ∪ A₂) = μ(A₁) + μ(A₂)
	- questa proprietà appartiene alle unioni numerabili (σ- finite) si può dedurre valga anche per le σ-additive
2. Se A ⊆ B, allora μ(A) ≤ μ(B) (monotonia)
	1. Se A ⊆ B significa B implica A

#### Terminologia Probabilistica Aggiuntiva

- Se A ∩ B = ∅, si dice che A e B sono **incompatibili**.
____

### Misure di Probabilità: Proprietà Fondamentali e Dimostrazioni
se P è una mdp (misura di probabilità) -> P è una misura
le proprietà sulle misure valgono per P.

Il professore spiega le proprietà fondamentali delle misure di probabilità, sottolineando che queste proprietà sono valide in generale per le misure su sigma-algebre e sono cruciali per la teoria della probabilità.

#### 1. Additività Completa e Finitamente Additiva (il cambio da P a un mu è colpa del prof...)

- **Definizione**: Una misura di probabilità (P) su uno spazio campionario (\Omega) è completamente additiva se, per ogni successione di eventi mutuamente disgiunti $A_1, A_2, \dots$, vale:
    
     $$\mu\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} \mu(A_i)$$ 
    
- **Additività finita**: Se la proprietà vale solo per un numero finito di eventi disgiunti, allora la misura è finitamente additiva.
    
     $$P\left(\bigcup_{i=1}^{n} A_i\right) = \sum_{i=1}^{n} P(A_i) $$
    
- **Dimostrazione che l'additività completa implica quella finita**:
    
    - Siano $A_1$ e $A_2$ eventi disgiunti. Possiamo scrivere la loro unione come un'unione infinita, aggiungendo l'insieme vuoto infinite volte:
        
         $$A_1 \cup A_2 = A_1 \cup A_2 \cup \emptyset \cup \emptyset \cup \dots$$ 
        
    - Per l'additività completa:
	    $$\mu(A_1 \cup A_2) = \mu(A_1) + \mu(A_2) + \sum_{i=3}^{\infty} \mu(\emptyset) $$
        
    - Dato che $\mu(\emptyset) = 0$:
        
         $$\mu(A_1 \cup A_2) = \mu(A_1) + \mu(A_2)$$ 
	 - Questo dimostra che se una misura è completamente additiva, allora è anche finitamente additiva.
        

#### 2. Monotonia

- **Definizione**: Se ($A \subseteq B$), allora ($P(A) \leq P(B)$).
- **Dimostrazione**:
    - Se $A \subseteq B$, possiamo scrivere B come l'unione disgiunta di A e $B \setminus A$:
        
        $$ B = A \cup (B \setminus A) $$
        - ![[Pasted image 20250221141146.png]]
        - $A\cap (B\setminus A)=\emptyset$
    - Quindi, $$\mu(B) = \mu(A) + \mu(B \setminus A)$$
    1. per additività finita.
        
    - Dato che $\mu(B \setminus A) \geq 0$ per definizione allora:
        
         $$\mu(B) \geq \mu(A)$$
#### 3. Probabilità del Complementare

- **Definizione** sia $\mathbb{P}\in\cal{F}$
	- : ($P(A^c) = 1 - P(A)$) $\forall A\in \cal{F}$
		- dove ($A^c$) è il complementare di ($A$) rispetto a ($\Omega$).
- **Dimostrazione**:
    - Sappiamo che ($A \cup A^c = \Omega$) e ($A \cap A^c = \emptyset$).
    - Quindi, per additività finita
	    - ($P(A \cup A^c) = P(A) + P(A^c) = P(\Omega) = 1$).
    - Da cui: $P(A^c) = 1 - P(A)$

#### 4. Probabilità dell'Unione di Due Eventi
![[Pasted image 20250221142403.png]]
- **Definizione**: sia $\mathbb{P}\in\cal{F}$
	- Per due eventi ($A$) e ($B$), vale: $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$ $\forall A,B\in \cal{F}$
- **Dimostrazione**:
    - Si decompone ($A \cup B$) in tre parti disgiunte: ($A \setminus (A \cap B)$), ($B \setminus (A \cap B)$) e ($A \cap B$).
    - Quindi per additività finita: $$P[A \cup B] = P[A \setminus (A \cap B)] + P[B \setminus (A \cap B)] + P(A \cap B)$$

    - Notiamo che $(B\cap A)\subseteq A$
	    - $A = [A \setminus (A \cap B)] \cup (A \cap B)$, che sono disgiunti
		    - ![[Pasted image 20250221142403.png]]
	    - $P(A) = P(A \setminus (A \cap B)) + P(A \cap B)$ 
	    - $P(A \setminus (A \cap B)) = P(A) - P(A \cap B)$


    - Analogamente: $P(B \setminus (A \cap B)) = P(B) - P(A \cap B)$
    - Sostituendo: $P(A \cup B) = P(A) - P(A \cap B) + P(B) - P(A \cap B) + P(A \cap B)$
    - Semplificando: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
    - Il professore sottolinea che sommare ($P(A)$) e ($P(B)$) significa contare due volte l'intersezione, quindi la si deve sottrarre.

#### Sigma-algebra Generata da una Famiglia di Insiemi

- **Definizione**: Data una famiglia di sottoinsiemi ($\mathcal{E}\subset \cal{P}(\Omega)$) di ($\Omega$),
	- la sigma-algebra generata da ($\mathcal{E}$), indicata con ($\sigma(\mathcal{E})$), è la più piccola sigma-algebra che contiene ($\mathcal{E}$).
- **Esempio**:
    - Sia ($\Omega = {1, 2, 3}$) e ($\mathcal{E} = {{1, 2}, {2, 3}}$). ($\mathcal{E}$) non è un'algebra perché non contiene ($\Omega$) né l'insieme vuoto.
    - Per generare la sigma-algebra, dobbiamo aggiungere:
        - $(1, 2) \cup (2, 3)= \Omega$.
        - Il complementare di (${1, 2}$), che è (${3}$).
        - Il complementare di (${2, 3}$), che è (${1}$).
        - {1,3} che è il complementare di {2}
        - {2} che è il complementare di {1,3}
        - L'insieme vuoto
    - Quindi, ($\sigma(\mathcal{E}) = {\emptyset, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, \Omega}$), che è l'insieme delle parti di ($\Omega$).
- **Esercizio Proposto**
    - **Esercizio**: Dato ($\Omega = {1, 2, 3}$) e ($\mathcal{E} = {{1, 2}, {3}}$), trovare la sigma-algebra generata da ($\mathcal{E}$).
    - **Osservazione**: In questo caso, la sigma-algebra generata non sarà l'insieme delle parti, suggerendo che non sempre si è in grado di misurare tutti i sottoinsiemi dello spazio campionario.
References



