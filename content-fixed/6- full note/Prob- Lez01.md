---
title: Prob  Lez01
description: Appunto automatico
---

2025-02-17 19:48

Status: #revisione_zero #flashcard_zero #riscritto_zero   

Tags:[[probabilità]] [[sbobine]]

## lez01-Prob

### Introduzione alla Teoria della Probabilità: Eventi e Misure

- **Obiettivo del corso**: Fornire un linguaggio matematico rigoroso per descrivere e analizzare fenomeni non deterministici.
    
    - **Prerequisiti**: Richiesta familiarità con analisi matematica (limiti, integrali) e algebra lineare.
- **Formalizzazione matematica dei fenomeni**: Strumenti per descrivere e analizzare l'incertezza.
    
- **Esempio introduttivo**: Il lancio di una moneta.
    
    - Anche se apparentemente casuale, con la meccanica classica si potrebbe prevedere il risultato conoscendo le condizioni iniziali.
    - La probabilità è usata per modellizzare il risultato, anche se il fenomeno non è intrinsecamente casuale.
- **Ricostruzione dei concetti di base**: Partire da zero per costruire una base solida.
    
- **Focus su variabili aleatorie e vettori aleatori**: Modellizzare fenomeni misurabili e costruire eventi complessi.
    
    - Le variabili aleatorie sono funzioni che associano un numero reale ad ogni possibile risultato di un esperimento casuale.
- **Eventi come sottoinsiemi di uno spazio campionario**: Iniziare parlando di eventi senza variabili aleatorie.
    

#### Concetti Chiave:

- **Ω (Omega): Spazio Campionario (o Spazio degli Esiti)**:
    
    - L'insieme di tutti i possibili risultati di un esperimento casuale.
    - Insieme astratto, senza struttura particolare.
    - Può essere finito, infinito numerabile, o continuo.
    - Spesso non è esplicitamente definito, ma esiste implicitamente.
- **ω (omega minuscola): Esito Elementare**: Un singolo elemento di Ω, un punto, una particolare realizzazione dell'esperimento.( Parametrizzazione del caso).
- **Eventi A**: Sottoinsiemi di Ω  A⊂Ω.
    
    - Collezione di esiti elementari che soddisfano una condizione.
- **Evento Certo**: L'insieme Ω stesso.
    

#### Impostazione Assiomatica della Probabilità:

- **Impostazione assiomatica di Kolmogorov**: Definire la probabilità in termini di assiomi matematici.
- **P(A): Misura di Probabilità di un evento A**: Funzione che associa un numero reale tra 0 e 1 ad ogni evento A.

#### Algebra di Insiemi (o Algebra di Eventi):

- Non è necessario considerare _tutti_ i sottoinsiemi di Ω.
	- P(Ω) INSIEME DELLE PARTI
- Definire una famiglia più piccola di sottoinsiemi, chiamata **algebra**, che soddisfi certe proprietà.
    1. **Ω ∈ A** (l'evento certo appartiene ad A_).
    2. **Se A ∈ A_, allora Aᶜ ∈ A_** (il complementare di A appartiene ad A).
    3. **Se A₁, A₂, ..., Aₙ ∈ A_, allora ⋃ᵢ₌₁ⁿ Aᵢ ∈ A_** (l'unione finita di eventi appartiene ad A).

#### Misure di Probabilità Finitamente Additive:
_informazione a fine costruttivo, poi ci dimenticheremo di sta definizione_

- Funzione P: A → |0,1| (normalizzo per modellizzare il grado di fiducia che ho per un evento) tale che:
    1. **0 ≤ P(A) ≤ 1** per ogni A ∈ A.
        
    2. **P(Ω) = 1**. ("il tutto ha peso 1")
        
    3. Se A₁, A₂, ..., Aₙ ∈ A sono a due a due disgiunti (Aᵢ ∩ Aⱼ = ∅ per i ≠ j), allora:
        
        P(⋃ᵢ₌₁ⁿ Aᵢ) = ∑ᵢ₌₁ⁿ P(Aᵢ)
        -![[Pasted image 20250217201337.png]]
        
        (Additività finita).
		3. ![[Pasted image 20250217202004.png]]
        - proprietà cercata naturalmente per come misuriamo noi questa cosa 
	
- **Eventi disgiunti**: Sono anche detti **incompatibili**.

#### Misure di Probabilità e Sigma Algebra (σ-algebra):

- In molti problemi, è necessario considerare unioni _infinite numerabili_ di eventi.
    - Una famiglia F di sottoinsiemi di Ω è detta σ-algebra soddisfa:
        1. **Ω ∈ F**.
        2. **Se A ∈ F, allora Aᶜ ∈ F**.
        3. **Se {Aᵢ}ᵢ₌₁^∞ è una collezione numerabile di eventi in F, allora ⋃ᵢ₌₁^∞ Aᵢ ∈ F**.
		    ![[Pasted image 20250217202320.png]]
- **Differenza chiave rispetto all'algebra**: La σ-algebra è stabile rispetto a unioni _numerabili_, mentre l'algebra è stabile solo rispetto a unioni _finite_.
- **Misura di probabilità (σ-additiva o completamente additiva)**: Per poter definire una probabilità su una sigma algebra, serve l'additività completa.
    - Funzione P: F → |0,1| tale che:
        1. **P(Ω) = 1**.
            
        2.  A₁, A₂ ∈ F  , A₁ ∩ A₂ =∅       => P(A₁ ∪ A₂) = P(A₁) + P(A₂)
            
		3. Siano \( $A_1, A_2, \dots \in \mathcal{F}$ \) una famiglia di insiemi mutuamente disgiunti, cioè: $A_i \cap A_j = \emptyset \quad \text{per } i \neq j.$ 
            Allora, la probabilità dell'unione numerabile di questi eventi è data da: $$P\left( \bigcup_{n \geq 1} A_n \right) = \sum_{n \geq 1} P(A_n).$$
            (Additività completa o σ-additività).
            
            
- Una misura di probabilità completamente additiva è definita su una sigma algebra e soddisfa l'additività completa.

#### Misura di Probabilità su un'Algebra con Additività Numerabile (Caso intermedio):
_informazione a fine costruttivo, poi ci dimenticheremo di sta definizione_

- Definire una misura di probabilità P su un'algebra A che soddisfi una condizione di additività numerabile _ristretta_: 
- che soddisfi sia 1. che 2. e un 3'. tc
	- $\{A_1, A_2, \dots, A_n, \dots\}$ una famiglia di insiemi tali che:  $A_i \cap A_j = \emptyset \quad \text{per } i \neq j.$  Allora si ha:  $$\bigcup_{n \geq 1} A_n \in \mathcal{A}$$
	- in un algebra questa proprietà non è automatica ma non è impossibile 
- se valgono queste proprietà allora vale additività
    
- Questo approccio intermedio è utile perché costruire direttamente una misura di probabilità su una sigma algebra può essere difficile.
#### Conseguenze Elementari

Date le definizioni, si possono derivare alcune proprietà fondamentali per $\mathbb{P}$ (finitamente additiva):

- ## *definizioni* 
1. **Probabilità del complementare:** P(Aᶜ) = 1 - P(A).
    
2. **Probabilità dell'evento impossibile (insieme vuoto):** P(∅) = 0.
    
3. **Monotonia:** Se A ⊆ B, allora P(A) ≤ P(B).
    
    - In termini logici: se A implica B, allora P(A) ≤ P(B).
    - utile per esercizi più complessi passare dalla logica
4. **Probabilità dell'unione (caso generale):** P(A ∪ B) = P(A) + P(B) - P(A ∩ B).
- ## dimostrazioni 
	1. $P(A^c) = 1 - P(A)$
	    
	    - Lo spazio campionario $\Omega$ è dato dall'unione di un evento $A$ e del suo complementare: $$\Omega = A \cup A^c$$
	    - Gli insiemi $A$ e $A^c$ sono disgiunti: $$A \cap A^c = \emptyset$$
	    - Per la proprietà di additività finita della probabilità: $$P(\Omega) = P(A \cup A^c) = P(A) + P(A^c)$$
	    - Dato che $P(\Omega) = 1$ (primo assioma), otteniamo: $$1 = P(A) + P(A^c)$$
	    - Infine, isolando $P(A^c)$, si ottiene la formula desiderata: $$P(A^c) = 1 - P(A)$$
	2. P(∅) = 0**:
	    
	    - ∅ = Ωᶜ (l'insieme vuoto è il complementare dell'evento certo).
	    - P(∅) = P(Ωᶜ) = 1 - P(Ω) (per la proprietà del complementare).
	    - P(∅) = 1 - 1 = 0.
	3. Se A ⊆ B, allora P(A) ≤ P(B) (Monotonia)**: 
	   ![[Pasted image 20250217210504.png]]
	    
	    - B = (B \ A) ∪ A 
	      (B può essere espresso come l'unione disgiunta di (B - A) e A).
	    - (B - A) ∩ A = ∅ ((B - A) e A sono disgiunti).
	    - P(B) = P((B - A) ∪ A) = P(B - A) + P(A) (per l'additività finita).
	    - P(B) = P(B - A) + P(A) ≥ P(A) (poiché P(B - A) ≥ 0).
	    - Quindi, P(A) ≤ P(B).
	    - Inoltre, P(B \ A) = P(B) - P(A) (sotto le ipotesi che A ⊆ B)
	      
	4. P(A ∪ B) = P(A) + P(B) - P(A ∩ B)**:
	    ![[Pasted image 20250217211157.png]]
	    - A ∪ B = (A - B) ∪ (B - A) ∪ (A ∩ B) (unione disgiunta).
	    - P(A ∪ B) = P(A - B) + P(B - A) + P(A ∩ B) (per l'additività finita).
	    - A = (A - B) ∪ (A ∩ B) e B = (B - A) ∪ (A ∩ B)
	    - P(A) = P(A - B) + P(A ∩ B) e P(B) = P(B - A) + P(A ∩ B)
	    - P(A - B) = P(A) - P(A ∩ B) e P(B - A) = P(B) - P(A ∩ B)
	    - P(A ∪ B) = P(A) - P(A ∩ B) + P(B) - P(A ∩ B) + P(A ∩ B)
	    - P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

**Importante**: Il professore sottolinea che i diagrammi di Venn sono utili per l'intuizione, ma le dimostrazioni devono basarsi sulle proprietà degli eventi e non su concetti geometrici.

**Principio di Inclusione-Esclusione**:

Il professore menziona il principio di inclusione-esclusione per _n_ eventi, ma non lo esplicita. La formula generale è:
_cita ma non chiede_

P(A₁ ∪ ... ∪ Aₙ) = ∑ᵢP(Aᵢ) - ∑ᵢ<ⱼP(Aᵢ ∩ Aⱼ) + ∑ᵢ<ⱼ<ₖP(Aᵢ ∩ Aⱼ ∩ Aₖ) - ... + (-1)ⁿ⁻¹P(A₁ ∩ ... ∩ Aₙ)

**Costruzione della Sigma Algebra**:
#### Esempio di Algebra e Misura Finitamente Additiva (ma non σ-additiva)

- **Spazio campionario:** Ω = ℕ (interi non negativi).
- **Algebra:** A = {A ⊆ ℕ : A è finito o Aᶜ è finito} (insiemi finiti o cofiniti).
- **Misura di probabilità P:**
    - P(A) = 0 se A è finito.
    - P(A) = 1 se A è cofinito.
- **Verifica:**
    - A è un'algebra, ma non una σ-algebra.
    - P è una misura di probabilità finitamente additiva, ma non σ-additiva.
    - Si dimostra che non è σ-additiva prendendo i singoletti di ℕ, che sono finiti, quindi hanno misura 0, ma la loro unione è ℕ, che ha misura 1.
    - Siano $A$ e $B$ due insiemi tali che $A \cap B = \emptyset$.

- Se $A$ e $B$ appartengono a una algebra A_ finita,
	$A \cap B = \emptyset$ con $A$,$B$ Finiti allora:

	- $$P(A \cup B) = 0$$
	- $$0+0 = P(A) + P(B)$$
	- Se invece $A$ è finito $B$ è cofinita e allora: $$P(A \cup B) = 1$$$$P(A \cup B) = 1 = 0 + 1 = P(A) + P(B)$$  


#### Teorema di Estensione di Carathéodory

Questo teorema permette di estendere una misura di probabilità da un'algebra a una σ-algebra generata da essa.

- Sia A un'algebra di sottoinsiemi di Ω.
- Sia P: A →|0,1| una misura di probabilità σ-additiva (nel senso ristretto descritto sopra).
- Allora, esiste un'unica misura di probabilità σ-additiva P* definita sulla σ-algebra generata da A tale che P*(A) = P(A) per ogni A ∈ A.
- La dimostrazione di questo teorema è complessa.
- **La σ-algebra generata** è la più piccola σ-algebra che contiene A.
	- ![[Pasted image 20250218080905.png]]

Spero che questa riscrittura dettagliata sia di tuo gradimento!

#### Teorema di Estensione di Carathéodory:

- Permette di estendere una misura di probabilità da un'algebra a una σ-algebra generata da essa.
- La σ-algebra generata da un'algebra A è la più piccola σ-algebra che contiene A.
- Se A è un'algebra di sottoinsiemi di Ω e P: A → \ è una misura di probabilità σ-additiva (nel senso ristretto descritto sopra), allora esiste un'unica misura di probabilità σ-additiva P* definita sulla σ-algebra generata da A tale che P*(A) = P(A) per ogni A ∈ A.


References



