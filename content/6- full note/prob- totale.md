2025-02-18 13:22

Status: 1-18

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
    - Spesso non è esplicitamente definito, ma esiste implicitamente.
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

Una σ-algebra è un'algebra che è anche stabile rispetto a unioni numerabili. Formalmente, una classe di insiemi $\mathcal{F}$ è una σ-algebra se soddisfa:

1. Ω ∈ $\mathcal{F}$
2. Se A ∈ $\mathcal{F}$, allora Aᶜ ∈ $\mathcal{f}$
3. Se Aᵢ ∈ $\mathcal{F}$ per i = 1, 2, ..., allora ∪ᵢ₌₁^∞ Aᵢ ∈ $\mathcal{f}$ (l'unione numerabile di insiemi appartenenti alla σ-algebra appartiene alla σ-algebra).

#### Conseguenze Importanti:

- Se $\mathcal{F}$ è una σ-algebra, allora ∅ ∈ $\mathcal{F}$ (l'insieme vuoto appartiene alla σ-algebra).
	- ![[Pasted image 20250220091107.png]] 1. e 2. implicano che $Ω ^c\in \mathcal{F}$ ma con $Ω ^c=∅$
- Se $\mathcal{F}$ è una σ-algebra, allora è anche un'algebra.
- La stabilità rispetto a unioni numerabili implica la stabilità rispetto a unioni finite, ma non viceversa.
	- ![[Pasted image 20250220091423.png]]

#### Osservazione sulle Notazioni

Il professore userà la lettera $\mathcal{F}$ per denotare una σ-algebra. In alcuni testi, si usa la lettera $\mathcal{A}$ per indicare sia le algebre che le σ-algebre.

#### Insieme delle Parti

L'insieme delle parti $\mathcal{P}$(Ω) è l'insieme di tutti i sottoinsiemi di Ω. $\mathcal{P}$(Ω) è sempre una σ-algebra.

#### Caso Finito

Se Ω è un insieme finito, allora non c'è differenza tra algebra e σ-algebra. In questo caso, l'insieme delle parti $\mathcal{P}$(Ω) è finito, e quindi ogni famiglia di sottoinsiemi è finita.

### Misure
Una misura è una funzione che associa un valore numerico a un insieme, quantificandone la "dimensione" in un certo senso.

#### Spazio Misurabile

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



2025-02-18 08:16

Status: #revisione_in_corso #flashcard_finite #riscritto_zero

Tags:[[probabilità]] [[sbobine]]

## lez02-Prob

### Definizione di Probabilità: Approccio Alternativo

Il professore introduce una definizione di probabilità leggermente diversa da quella standard, ma equivalente. Questa definizione alternativa non richiede esplicitamente che la probabilità dell'insieme vuoto sia zero.

#### **Definizione**

Sia (Ω, F) uno spazio misurabile, dove Ω è lo spazio campionario e F è una σ-algebra di eventi. Una funzione P: ℱ →|0,1|  è una misura di probabilità se soddisfa le seguenti condizioni:

- **P(Ω) = 1** (la probabilità dell'evento certo è 1)
    
- **σ-additività (additività completa)**: Per ogni successione di eventi Aᵢ ∈ F tali che Aᵢ ∩ Aⱼ = ∅ per i ≠ j (eventi incompatibili), vale:
    
    P(∪ᵢ Aᵢ) = ∑ᵢ P(Aᵢ)
    - ![[Pasted image 20250218140720.png]]
    

#### Equivalenza tra le Definizioni

La definizione standard di misura di probabilità include anche la condizione che P(∅) = 0. Il professore dimostra che la definizione alternativa è equivalente a quella standard, mostrando che la condizione P(∅) = 0 può essere derivata dalle altre proprietà.

#### Dimostrazione che P(∅) = 0
- 1->2 
- 2->1
	1. Si esprime l'insieme vuoto come unione numerabile di insiemi vuoti:
	    
	    ∅ = ∪ᵢ ∅
	    
	2. Sia p = P(∅). Per la σ-additività, si ha:
	    
	    p = P(∅) = P(∪ᵢ ∅) = ∑ᵢ P(∅) = ∑ᵢ p
	    
	3. Quindi, p = ∑ᵢ p. Questo è possibile solo se p = 0. Se p fosse strettamente positivo, la somma di infiniti valori positivi divergerebbe.
	    
	4. Pertanto, P(∅) = 0.
    

#### Commenti

- Questa dimostrazione mostra che la condizione P(∅) = 0 è ridondante nella definizione alternativa, poiché può essere derivata dalle altre proprietà.
- L'obiettivo del professore è di fornire una caratterizzazione utile per confrontare diverse definizioni di probabilità, ad esempio quella trovata nel libro di Protter.

### Misure Finite e σ-Finite

Il professore introduce le definizioni di misura finita e misura σ-finita.

#### Misura Finita

Una misura μ su una σ-algebra F è detta finita se la misura dell'insieme totale è finita:

μ(Ω) < ∞

Esempio: Una misura di probabilità è una misura finita perché P(Ω) = 1.

#### Misura σ-Finita

Una misura μ su una σ-algebra ℱ è detta σ-finita se esiste una famiglia numerabile di insiemi misurabili Bᵢ ∈ F tale che:

- Gli insiemi Bᵢ sono disgiunti: Bᵢ ∩ Bⱼ = ∅ per i ≠ j
- L'unione degli insiemi Bᵢ è l'intero spazio: ∪ᵢ Bᵢ = Ω
- La misura di ogni insieme Bᵢ è finita: μ(Bᵢ) < ∞ per ogni i

Una famiglia di insiemi con queste proprietà è chiamata **partizione numerabile** o **partizione misurabile numerabile** dello spazio.
- ![[Pasted image 20250218141133.png]]

#### Commenti

- La misura σ-finita è una generalizzazione della misura finita. Permette di lavorare con spazi di misura infinita, purché possano essere suddivisi in una quantità numerabile di sottoinsiemi di misura finita.
- Le misure che verranno utilizzate nel corso avranno spesso questa proprietà. Ad esempio, la misura di Lebesgue su ℝⁿ è σ-finita perché ℝⁿ può essere suddiviso in una quantità numerabile di cubi con lato di lunghezza finita.

==rifattorizzo==
### Esempi di Misure di Probabilità

Il professore presenta tre esempi semplici di misure, che servono come base per costruire esempi più complessi.

#### 1. Delta di Dirac (Massa Puntuale)

Sia Ω uno spazio qualsiasi e ω₀ ∈ Ω un punto fissato. La misura delta di Dirac δω₀ è definita come:

δω₀(A) = { 1 se ω₀ ∈ A 
		{ 0 se ω₀ ∉ A

δω₀(A) assegna probabilità 1 se l'insieme A contiene il punto ω₀ e probabilità 0 altrimenti.

- **Commento:** La delta di Dirac è una misura di probabilità degenere, perché assegna probabilità 1 a un singolo punto e 0 a tutto il resto. Dal punto di vista probabilistico, rappresenta un evento certo.

#### 2. Misura di Conteggio

Sia Ω un insieme al più numerabile di punti ωᵢ. La misura di conteggio μ è definita come:

μ(A) = ∑ᵢ δωᵢ(A) = |{ωᵢ ∈ A}|

dove |{ωᵢ ∈ A}| indica il numero di elementi in A.
- ![[Pasted image 20250218141632.png]]
In altre parole, μ(A) conta il numero di punti ωᵢ che appartengono all'insieme A.

- **Esempio**: Sia Ω = ℕ (numeri naturali) e A = {1, 3, 5}. Allora μ(A) = 3.
- in questo caso μ(Ω) sarebbe infinito -> non sarebbe una misura finita

#### 3. Misura Discreta Generale

Sia Ω un insieme al più numerabile di punti ωᵢ e siano cᵢ dei numeri reali positivi. La misura discreta μ è definita come:

μ(A) = ∑{cᵢ : ωᵢ ∈ A}
- ![[Pasted image 20250218141851.png]]

In questo caso, ogni punto ωᵢ ha un peso cᵢ. La misura di un insieme A è la somma dei pesi dei punti che appartengono ad A.

- Se ∑ᵢ cᵢ = 1, allora μ è una misura di probabilità.
- Se ∑ᵢ cᵢ < ∞, allora μ è una misura finita.
- Se ∑ᵢ cᵢ = ∞, allora μ non è una misura finita.

#### Commenti

- Questi esempi mostrano come costruire misure a partire da punti isolati.
- Le misure discrete sono fondamentali in molti contesti probabilistici.

### Sigma Algebra Generate da Famiglie di Insiemi

Il professore introduce il concetto di σ-algebra generata da una famiglia di insiemi.

#### Definizione

Data una famiglia di insiemi E, la σ-algebra generata da E, indicata con σ(E), è la più piccola σ-algebra che contiene tutti gli insiemi in E.

In altre parole, σ(E) è l'intersezione di tutte le σ-algebre che contengono E.

σ(E) = ∩{ℱ : ℱ è una σ-algebra e E ⊆ ℱ}
- ![[Pasted image 20250218144631.png]] 

#### Proprietà

Se E₁ ⊆ E₂, allora σ(E₁) ⊆ σ(E₂).

#### Esempio

Sia Ω = {1, 2, 3} e E = {{1, 2}}. Allora la σ-algebra generata da E è:

σ(E) = {∅, Ω, {1, 2}, {3}}

#### Commenti

- La σ-algebra generata da una famiglia di insiemi è un concetto fondamentale per costruire σ-algebre complesse a partire da insiemi più semplici.
- Questo concetto è particolarmente importante quando si lavora con spazi non numerabili, come la retta reale.

### Probabilità su Spazi Numerabili (o finiti)

Il professore discute come definire misure di probabilità su spazi numerabili.
#### Partizioni Numerabili

Una partizione numerabile di uno spazio Ω è una famiglia numerabile di insiemi disgiunti H = {Hᵢ} tali che ∪ᵢ Hᵢ = Ω.

#### Sigma Algebra Generata da una Partizione Numerabile

La σ-algebra generata da una partizione numerabile H è l'insieme di tutte le unioni (finite o numerabili) di elementi di H.
- ![[Pasted image 20250218145041.png]]

#### Caratterizzazione delle Misure di Probabilità

Sia F la σ-algebra generata da una partizione numerabile H. Per definire una misura di probabilità P su F, è sufficiente assegnare un peso pᵢ ≥ 0 a ogni elemento Hᵢ della partizione, tale che ∑ᵢ pᵢ = 1.

La probabilità di un insieme A ∈ F è data da:

P(A) = ∑{pᵢ : Hᵢ ⊆ A}
- ![[Pasted image 20250218144933.png]]

#### Esempio

Sia Ω = ℕ e H = {{1}, {2}, {3}, ...}. Una misura di probabilità su F = P(ℕ) è completamente determinata dai pesi pᵢ = P({i}), con pᵢ ≥ 0 e ∑ᵢ pᵢ = 1.

- **Probabilità Uniforme su un Insieme Finito:** Se Ω = {ω₁, ..., ωₘ}, si pone P(ωᵢ) = 1/m per ogni i.
- **Distribuzione Geometrica:** Sia Ω = ℕ₀ = {0, 1, 2, ...} e sia 0 < θ < 1. Si definisce P(i) = θⁱ (1 - θ) per i ∈ ℕ₀. Questa è la distribuzione geometrica.
- ![[Pasted image 20250218143205.png]]
____
### Estensione e Unicità

Il professore introduce i concetti di estensione* e unicità* delle misure}.

#### Motivazione

Si vuole costruire misure* su spazi non* numerabili*, come la retta* reale*, che soddisfino certe proprietà intuitive. Ad esempio, si vorrebbe una misura μ su ℝ tale che μ([a, b]) = b - a per ogni intervallo* [a, b].

#### Teorema di Estensione di Carathéodory

Sia A* un'algebra* su Ω e sia μ una misura* σ-additiva* su A*. Allora esiste un'estensione* μ** di μ a σ(A)* che è una misura σ-additiva*. Se μ è σ-finita*, allora l'estensione è unica*.
- formulazione che usiamo noi 
	![[Pasted image 20250218143902.png]]

#### Teorema di Unicità 

Siano P e Q due misure* di probabilità* su una σ-algebra F. Sia C* una classe* di insiemi* tale che σ(C) = F. Se P(A) = Q(A) per ogni A ∈ C, allora P = Q. In altre parole, se due misure di probabilità coincidono* su una classe* che genera la σ-algebra*, allora coincidono* su tutta* la σ-algebra*.

#### P-Classe

Una classe C di insiemi è detta P-classe se è stabile* per intersezioni* finite*. Ovvero, se A₁, ..., Aₙ ∈ C, allora A₁ ∩ ... ∩ Aₙ ∈ C.

- **Esempio di P-Classe:** La famiglia di semirette della forma (-∞, x]* con x ∈ ℝ è una P-classe.

References


2025-02-19 10:24

_Status: #revisione_finita  #flashcard_finite  #riscritto_finito 

_Tags: [[probabilità]] [[sbobine]]

## lez03- Prob

### Misure di Probabilità su Insiemi Numerabili 
Il professore introduce il concetto di misure di probabilità definite su insiemi numerabili, finiti o, più in generale, su spazi "misurabilmente generali".
#### Caso in cui Ω è un Insieme Finito
- **Proposizione** : Se =Ω è un insieme finito* e F è la σ-algebra delle parti di Ω, una misura* di* probabilità* P* su F assegna una probabilità* a ogni sottoinsieme* di Ω* (l'insieme* delle* parti*) .
    
1. Se P è una misura di probabilità su F, e si definisce pᵢ* come la probabilità del singoletto* {ωᵢ},* dove gli ωᵢ sono gli elementi di Ω ordinati* convenzionalmente* (1, 2, 3, ...), allora la probabilità di ogni evento* A ⊆ Ω può essere scritta come la somma* delle probabilità* dei singoletti* contenuti* in A*.
	- con $\omega \in \set{\omega_1,\omega_2,\cdots}$ numerabile* o finito* e $\mathcal{F}=\mathcal{P}(\Omega)$ 
	- se $\mathbb{P}$ è misura* di probabilita* di $\mathcal{F}$ e $p_i:=\mathbb{\omega_i}$  per i=1,2,3 -> $$\mathbb{P\set{A}}=\sum_{i: \ \omega_i \in A} p_i \quad \forall i: \omega_i \in A$$
    ```
    P(A) = ∑ᵢ pᵢ,  per tutti gli i tali che ωᵢ ∈ A
    ```
    
    Dove:
    
    - `P(A)` è la probabilità dell'evento A.
    - `pᵢ` è la probabilità del singoletto {ωᵢ}.
    - La sommatoria è estesa a tutti gli indici `i` tali che l'elemento ωᵢ appartiene all'insieme A.
- **Caratterizzazione completa**: Una misura di probabilità sulla σ-algebra* delle parti* è completamente* caratterizzata* dalle probabilità* dei singoletti*. Conoscendo le probabilità di ogni singolo* elemento* di Ω, si può determinare la probabilità* di qualsiasi* evento.
    
1.  **Condizione**: Data una successione pᵢ ≥ 0 tale che ∑ᵢ pᵢ = 1, si può definire una misura di probabilità P su $\mathcal{F}=\mathcal{P}(\Omega)$ come:
	- $$P(A) = \sum_{i:\omega_i \in A} p_i$$ 
    È fondamentale che questa funzione sia definita su F.
    
==fatto fino a qua==
### Teorema di Unicità per Misure di Probabilità

Il professore introduce il teorema di unicità per le misure di probabilità.

- **Teorema (caso di misura di probabilità)**: Se C è una P-classe che genera la σ-algebra F, e P₁ e P₂ sono due misure di probabilità su F, se P₁(A) = P₂(A) per ogni evento A nella P-classe C, allora P₁ = P₂.
	- ![[Pasted image 20250219154926.png]]
    
    In termini più formali:
    
    - Sia C una P-classe tale che σ(C) = F.
    - Siano P₁ e P₂ due misure di probabilità su F.
    - Se P₁(A) = P₂(A) ∀ A ∈ C, allora P₁ = P₂.
- **Estensione a Misure Sigma-Finite**: Il teorema si estende a misure sigma-finite con condizioni aggiuntive:
    -  Siano μ₁ e μ₂ due misure sigma-finite su una σ-algebra F.
    - Sia C una classe tale che la σ-algebra generata da C sia proprio F, cioè σ(C) = F.
    - Esista una successione di eventi Eᵢ ∈ C tali che Eᵢ ∩ Eⱼ = ∅ per i ≠ j e ⋃ᵢ Eᵢ = Ω.
    - μ₁(Eᵢ) < ∞ per ogni i.
    - Se μ₁(A) = μ₂(A) per ogni A ∈ C, allora μ₁ = μ₂.
	    - ![[Pasted image 20250219155017.png]]
    
    **Importante**: Per misure che non sono di probabilità, è necessario che le misure siano sigma-finite e che la P-classe contenga una partizione numerabile tale che le misure degli insiemi nella partizione siano finite.
    

### Esempio: Famiglia di Intervalli e Misura di Lebesgue

Discussione di un esempio riguardante la famiglia di intervalli su $\mathbb{R}$ e la misura di Lebesgue.

- **Classe C₀**: C₀ è la famiglia di intervalli aperti (a, b). Questa non è una P-classe, perché l'intersezione di due intervalli disgiunti è l'insieme vuoto, che non appartiene a C₀.
	- **Classe C₀ estesa**: Aggiungendo l'insieme vuoto a C₀, si ottiene una P-classe.
	- **Misura di Lebesgue**: La misura di Lebesgue non funziona direttamente con C₀, ma con la classe estesa, a causa della condizione di sigma-finità.
- ![[Pasted image 20250219155811.png]]

### Continuità della Misura di Probabilità
- ==MANCA UNA DIMOSTRAZIONE==![[Pasted image 20250219153220.png]]

Il professore introduce il concetto di continuità per le misure di probabilità.

#### Convergenza Monotona di Eventi
- 
- **Definizione**: Una successione di eventi Aₙ converge in modo monotono crescente a un evento A se Aₙ ⊆ Aₙ₊₁ per ogni n, e A = ⋃ₙ Aₙ.
- **Definizione**: Aₙ converge in modo monotono decrescente a A se Aₙ ⊇ Aₙ₊₁ per ogni n, e A = ⋂ₙ Aₙ.
	- ![[Pasted image 20250219155121.png]]

#### Teorema di Continuità

- **Teorema**: Se P è una misura di probabilità su F, allora:
    
    - Per ogni successione Aₙ di eventi in F che converge in modo monotono crescente ad A, si ha che:
        
        ```
        lim (n→∞) P(Aₙ) = P(A)
        ```
        
    - Per ogni successione Aₙ di eventi in F che converge in modo monotono decrescente ad A, si ha che:
        
        ```
        lim (n→∞) P(Aₙ) = P(A)
        ```
    - ![[Pasted image 20250219155353.png]]
- 1. **Teorema di continuità per misure di probabilità**
    
    - **Enunciato**: Sia $\mathcal{F}$ una $\sigma$-algebra su $\Omega$. Se $P$ è una misura di probabilità su $\mathcal{F}$, allora:
        
        1. $P(A_n) \to P(A)$ per ogni successione ${A_n}_{n \in \mathbb{N}}$ di eventi in $\mathcal{F}$ che converge ad $A$ monotonicamente (crescente o decrescente).
        2. Supponiamo che $P$ sia una funzione da $\mathcal{F}$ a  tale che $P(\Omega) = 1$ e $P(A_1 \cup A_2) = P(A_1) + P(A_2)$ per ogni $A_1, A_2 \in \mathcal{F}$ con $A_1 \cap A_2 = \emptyset$. Allora $P$ è $\sigma$-additiva se e solo se per ogni successione ${B_n}_{n \in \mathbb{N}}$ di eventi in $\mathcal{F}$ convergente monotonicamente all'insieme vuoto, $\lim_{n \to \infty} P(B_n) = 0$.
    - **Dimostrazione (parte 1, caso crescente)**:
        
        - Sia ${A_n}_{n \in \mathbb{N}}$ una successione di eventi in $\mathcal{F}$ tale che $A_n \subseteq A_{n+1}$ per ogni $n$, e sia $A = \bigcup_{n=1}^{\infty} A_n$.
        - Definiamo una nuova successione di eventi ${B_n}_{n \in \mathbb{N}}$ tale che $B_1 = A_1$ e $B_{n+1} = A_{n+1} \setminus A_n$ per ogni $n \geq 1$. Gli eventi $B_n$ sono a due a due incompatibili.
        - Si ha che $A_n = \bigcup_{k=1}^{n} B_k$, quindi $P(A_n) = P(\bigcup_{k=1}^{n} B_k) = \sum_{k=1}^{n} P(B_k)$ (per additività finita).
        - Inoltre, $A = \bigcup_{n=1}^{\infty} A_n = \bigcup_{k=1}^{\infty} B_k$, quindi $P(A) = P(\bigcup_{k=1}^{\infty} B_k) = \sum_{k=1}^{\infty} P(B_k)$ (per $\sigma$-additività).
        - Prendendo il limite per $n \to \infty$ di $P(A_n)$, si ottiene $\lim_{n \to \infty} P(A_n) = \lim_{n \to \infty} \sum_{k=1}^{n} P(B_k) = \sum_{k=1}^{\infty} P(B_k) = P(A)$.
        - Quindi, $P(A_n)$ converge a $P(A)$.

#### Equivalenza con la Sigma-Additività

2. **Teorema**: Sia P una funzione da F a tale che P(Ω) = 1 e P(A₁ ∪ A₂) = P(A₁) + P(A₂) per ogni A₁ e A₂ disgiunti. Allora
	 -  P è sigma-additiva se e solo se per ogni successione Bₙ convergente all'insieme vuoto, si ha che lim (n→∞) P(Bₙ) = 0.
		 - ![[Pasted image 20250219155524.png]]
	 - dimostrazione

### Subadditività Finita e Numerabile
- ==MANCA LA DIMOSTRAZIONE==![[Pasted image 20250219153314.png]]![[Pasted image 20250219153329.png]]

- **Teorema**: Sia P una misura di probabilità su F e sia {Aₖ} una successione di eventi in F. Allora:
    
    1.  **Subadditività finita**:
        
        ```
        P(⋃ₖ₌₁ⁿ Aₖ) ≤ ∑ₖ₌₁ⁿ P(Aₖ)
        ```
        
    2. **Subadditività completa**:
        
        ```
        P(⋃ₖ₌₁^∞ Aₖ) ≤ ∑ₖ₌₁^∞ P(Aₖ)
        ```
        
- **Caso di eventi disgiunti**: Se gli Aₖ sono a due a due disgiunti, vale l'uguaglianza.
    
- **Formula per due eventi**: Per due eventi qualsiasi A e B:
    
    ```
    P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
    ```
    - ![[Pasted image 20250219160322.png]]
- 2. **Subadditività finita e numerabile di una misura di probabilità**
    
    - **Enunciato**: Sia $P$ una misura di probabilità su $\mathcal{F}$ e ${A_n}_{n \in \mathbb{N}}$ una successione di eventi in $\mathcal{F}$. Allora:
        
        1. $P(\bigcup_{k=1}^{n} A_k) \leq \sum_{k=1}^{n} P(A_k)$ (subadditività finita).
        2. $P(\bigcup_{k=1}^{\infty} A_k) \leq \sum_{k=1}^{\infty} P(A_k)$ (subadditività completa).
    - **Dimostrazione**:
        
        - La subadditività finita si dimostra per induzione. Per $n=2$, $P(A \cup B) = P(A) + P(B) - P(A \cap B) \leq P(A) + P(B)$.
        - Per il passo induttivo, supponiamo che valga per $n$ e dimostriamo per $n+1$:
            - $P(\bigcup_{k=1}^{n+1} A_k) = P(\bigcup_{k=1}^{n} A_k \cup A_{n+1}) \leq P(\bigcup_{k=1}^{n} A_k) + P(A_{n+1}) \leq \sum_{k=1}^{n} P(A_k) + P(A_{n+1}) = \sum_{k=1}^{n+1} P(A_k)$.
        - Per la subadditività completa, sia $C_n = \bigcup_{k=1}^{n} A_k$. Allora $C_n$ converge monotonicamente (crescendo) a $\bigcup_{k=1}^{\infty} A_k$.
        - Per la continuità della misura di probabilità, $P(\bigcup_{k=1}^{\infty} A_k) = \lim_{n \to \infty} P(C_n) = \lim_{n \to \infty} P(\bigcup_{k=1}^{n} A_k)$.
        - Dalla subadditività finita, $P(\bigcup_{k=1}^{n} A_k) \leq \sum_{k=1}^{n} P(A_k)$.
        - Quindi, $\lim_{n \to \infty} P(\bigcup_{k=1}^{n} A_k) \leq \lim_{n \to \infty} \sum_{k=1}^{n} P(A_k) = \sum_{k=1}^{\infty} P(A_k)$.
        - Pertanto, $P(\bigcup_{k=1}^{\infty} A_k) \leq \sum_{k=1}^{\infty} P(A_k)$.

### Sigma-algebra di Borel su $\mathbb{R}$ e $\mathbb{R^d}$
- ![[Pasted image 20250219153533.png]]

Introduzione della sigma-algebra di Borel su R.

- **Definizione**: La sigma-algebra di Borel (B(R)) è la sigma-algebra generata dagli insiemi aperti di R.
    
- **Aperti in R**: Un insieme A ⊆ R è aperto se per ogni x ∈ A esiste un intervallo aperto (x - ε, x + ε) ⊆ A.
	- ![[Pasted image 20250219161118.png]]
    
- **Obiettivo**: Restringere l'attenzione agli insiemi boreliani, che includono intervalli, semirette e altri insiemi "ragionevoli".
    
- **Classi di Insiemi**: Definizione di diverse classi di insiemi che generano la sigma-algebra di Borel:
    
    - C₀: Intervalli aperti (a, b).
    - C₁: Intervalli chiusi [a, b].
    - C₂: Semirette (-∞, x].
    - ![[Pasted image 20250219160820.png]]
- **Algebra generata da C₁ ∪ C₂ ∪ C₃**: Si può costruire un'algebra A a partire da C₁, C₂, e C₃, formata da unioni finite di elementi di queste classi. Gli elementi di A sono unioni di intervallini di vario tipo, eventualmente con semirette.
	- ![[Pasted image 20250219160837.png]]
    
- **Equivalenza tra generatori**: B(R) può essere ottenuta generando la sigma-algebra a partire da C₀ o C₂.
    
    ```
    B(R) = σ(C₀) = σ(C₂) = σ(A)
    ```
    
- **Motivazioni**: Questo risultato è utile per:
    
    - Avere un'idea concreta degli insiemi boreliani.
    - Semplificare le dimostrazioni, usando il teorema di Caratheodory per estendere le misure da un'algebra alla sigma-algebra generata.
    - Identificare misure di probabilità, mostrando che coincidono su una P-classe che genera B(R).
- **Chiusi**: Poiché la sigma-algebra di Borel contiene gli aperti, contiene anche i chiusi (complementari degli aperti). Quindi, contiene anche i singoli punti.
	- ![[Pasted image 20250219161020.png]]
    
- **Semirette**: Le semirette del tipo (-∞, x] appartengono a B(R). Questo si può dimostrare approssimando la semiretta con unioni numerabili di intervalli chiusi.
	- ![[Pasted image 20250219160959.png]]
	- 3. **Equivalenza di generatori della $\sigma$-algebra di Borel su $\mathbb{R}$**
    
    - **Enunciato**: Sia $\mathcal{B}(\mathbb{R})$ la $\sigma$-algebra di Borel su $\mathbb{R}$. Allora: $$\sigma(\mathcal{C}_0) = \sigma(\mathcal{C}_1) = \sigma(\mathcal{C}_2) = \mathcal{B}(\mathbb{R})$$ dove:
        - $\mathcal{C}_0$ è la famiglia degli intervalli aperti $(a, b)$.
        - $\mathcal{C}_1$ è la famiglia degli intervalli chiusi $[a, b]$.
        - $\mathcal{C}_2$ è la famiglia delle semirette $(-\infty, x]$.
    - **Dimostrazione (solo $\sigma(\mathcal{C}_0) = \mathcal{B}(\mathbb{R})$ )**:
        - Per definizione, $\mathcal{B}(\mathbb{R}) = \sigma(\mathcal{A})$, dove $\mathcal{A}$ è la famiglia degli aperti di $\mathbb{R}$.
        - **Passo 1**: $\mathcal{C}_0 \subseteq \mathcal{A}$. Quindi $\sigma(\mathcal{C}_0) \subseteq \sigma(\mathcal{A}) = \mathcal{B}(\mathbb{R})$.
        - **Passo 2**: Ogni aperto $A \subseteq \mathbb{R}$ si può scrivere come un'unione numerabile di intervalli aperti.
        - Quindi, $\mathcal{A} \subseteq \sigma(\mathcal{C}_0)$ perché $\sigma(\mathcal{C}_0)$ è una $\sigma$-algebra e contiene tutti gli intervalli aperti, quindi deve contenere anche le loro unioni numerabili.
        - Applicando di nuovo la proprietà che se una classe è contenuta nell'altra, quando generate le sigma algebre, le due sigma algebre sono contenute. Quindi $\sigma(\mathcal{A}) \subseteq \sigma(\mathcal{C}_0)$.
        - Concludiamo che $\mathcal{B}(\mathbb{R}) = \sigma(\mathcal{A}) \subseteq \sigma(\mathcal{C}_0)$.
        - Combinando i due passi, otteniamo $\sigma(\mathcal{C}_0) = \mathcal{B}(\mathbb{R})$.
    

### Sigma-algebra di Borel su Rᵈ
- ![[Pasted image 20250219153749.png]]
Estensione del concetto di sigma-algebra di Borel a Rᵈ.

- **Definizione**: La sigma-algebra di Borel su Rᵈ (B(Rᵈ)) è la sigma-algebra generata dagli insiemi aperti di Rᵈ.
	- ![[Pasted image 20250219161326.png]]
    
- **Rettangoli aperti**: Generalizzazione degli intervalli aperti tramite rettangoli aperti, prodotti cartesiani di intervalli aperti.
	- ![[Pasted image 20250219161619.png]]
    
- **Classi di Insiemi**:
    
    - D₀: Rettangoli aperti in Rᵈ, prodotti cartesiani di intervalli aperti.
	    - ![[Pasted image 20250219161433.png]]
    - C₂: "Quadranti" in Rᵈ, insiemi della forma (-∞, x], dove x ∈ Rᵈ. Sono insiemi di punti y ∈ Rᵈ tali che ogni coordinata di y è minore o uguale della corrispondente coordinata di x.
	    - ![[Pasted image 20250219161555.png]]
- **Equivalenza tra generatori**: B(Rᵈ) può essere generata a partire da D₀ o da C₂.
    
    ```
    B(Rᵈ) = σ(C_0) = σ(D₀) = σ(C₂)
    ```
    
- **Conseguenza**: Se due misure di probabilità P e Q su B(Rᵈ) coincidono su tutti i quadranti, allora sono uguali.
- ==MANCA UNA DELUCIDAZIONE==![[Pasted image 20250219161703.png]]
    

### Misura di Lebesgue
- ![[Pasted image 20250219153809.png]]
Introduzione della misura di Lebesgue, che rappresenta lunghezza, area o volume.

- **Teorema**: Esiste un'unica misura sigma-finita μ su B(R) tale che μ((a, b]) = b - a per ogni a, b ∈ R.
- **Generalizzazione a Rᵈ**: Esiste un'unica misura sigma-finita μ su B(Rᵈ) tale che, per ogni rettangolo R = (a₁, b₁] × ... × (a𝒹, b𝒹], si ha μ(R) = (b₁ - a₁) * ... * (b𝒹 - a𝒹).
	- ![[Pasted image 20250219161850.png]]
- **Misura di Lebesgue**: Questa misura si chiama misura di Lebesgue e non è una misura di probabilità.
- **Costruzione**: Per costruire la misura di Lebesgue, si definisce una funzione finitamente additiva su un'algebra di insiemi (unioni finite di intervallini) e poi la si estende usando il teorema di Caratheodory.
	- ![[Pasted image 20250219162044.png]]
- **Notazione**: La misura di Lebesgue è definita sui boreliani di Rᵈ.


#### References



2025-02-23 14:35

_Status: #flashcard_finite     #riscritto_finito     #revisione_finita 

_Tags:  [[probabilità]]   [[sbobine]]

## prob- Lez04

### Sigma-algebra generata da una famiglia di insiemi

Il professore spiega un dubbio frequente riguardo alla **sigma-algebra generata da una famiglia di insiemi**.

#### Dubbio comune

Molti studenti si chiedono come la sigma-algebra di Borel ($\mathcal{B}$) sia generata dagli aperti ($U$) o, equivalentemente, dagli intervalli.

#### Chiarimento del professore

1. **Concetto di generazione**: Il professore ricorda che generare una sigma-algebra a partire da una classe di insiemi significa che la sigma-algebra risultante conterrà **molti più elementi** della classe di partenza.
    
    - **Esempio**: Se si parte da un singolo evento $A$, la sigma-algebra generata conterrà $A$, il suo complementare $A^c$, l'insieme vuoto $\emptyset$ e l'insieme totale $\Omega$.
    - Se si parte da due eventi $A$ e $B$, la sigma-algebra conterrà $A$, $B$, $A \cup B$, $A^c$, $B^c$, $A \cup B^c$, e così via.
2. **Sigma-algebra dei Boreliani**: La sigma-algebra dei Boreliani ($\mathcal{B}$) contiene **molti più insiemi** degli intervalli aperti da cui è generata. Include tutti gli insiemi chiusi, i punti singoli, le semirette, gli intervalli semiaperti, ecc.
    
3. **Non confondere la famiglia con la sigma-algebra generata**: È fondamentale non confondere la famiglia di insiemi di partenza con la sigma-algebra che essa genera. La sigma-algebra generata è generalmente più grande della famiglia di partenza, a meno che la famiglia non sia già una sigma-algebra.
    
4. **Come verificare se un insieme appartiene alla sigma-algebra generata**: Per capire se un insieme appartiene alla sigma-algebra generata, si deve verificare se può essere ottenuto tramite operazioni di complementazione, unione numerabile e intersezione numerabile a partire dagli insiemi della famiglia generatrice.
    
    - Prendere un elemento $A$ nella famiglia, e verificare se anche il suo complementare $A^c$ appartiene alla sigma-algebra.
    - Prendere due elementi $A$ e $B$ e verificare se la loro unione $A \cup B$ e la loro intersezione $A \cap B$ appartengono alla sigma-algebra. L'appartenenza dell'intersezione discende dalle proprietà di algebra/sigma-algebra.

### Misura di Lebesgue e sue proprietà

Il professore riprende la lezione precedente introducendo la **misura di Lebesgue** su $\mathbb{R}^d$.

#### Definizione e proprietà

1. **Misura di Lebesgue su $\mathbb{R}$**: Nel caso di $\mathbb{R}$, la misura di Lebesgue di un intervallo è esattamente la sua lunghezza. La misura di Lebesgue di tutto $\mathbb{R}$ è $+\infty$. Si ricorda che la misura di Lebesgue è sigma-finita.
    
2. **Misura di Lebesgue di un punto**: La misura di Lebesgue di un singolo punto è zero, ovvero $\lambda({x}) = 0$ per ogni $x \in \mathbb{R}$. Questo vale anche per misure di probabilità assolutamente continue.
    
3. **Proprietà generali**:
    
    - In $\mathbb{R}^d$, la misura di Lebesgue di un punto è zero.
    - In $\mathbb{R}^3$, la misura di Lebesgue di un piano è zero.
    - Più in generale, in $\mathbb{R}^d$, la misura di Lebesgue di qualsiasi iperpiano di dimensione strettamente minore di $d$ è zero ($Leb_D=0$)

#### Esempio

Il professore propone un esempio in $\mathbb{R}^2$:

- Consideriamo due rette nel piano. Qual è la misura di Lebesgue della loro unione?
- ![[Pasted image 20250223195200.png]]
- **Soluzione**: Poiché ogni retta ha misura di Lebesgue zero e la misura di Lebesgue è sigma-additiva, la misura dell'unione delle due rette è la somma delle loro misure, che è $0 + 0 = 0$. Matematicamente: $\lambda(retta_1 \cup retta_2) \le \lambda(retta_1) + \lambda(retta_2) = 0 + 0 = 0$.

### Esempi di Spazi di Probabilità

Il professore introduce due esempi per illustrare i concetti di spazi di probabilità e misure.

#### Esempio 1: Dado a Sei Facce (spazio finito)

- **Spazio Campionario**: $\Omega = {1, 2, 3, 4, 5, 6}$, che rappresenta i possibili risultati del lancio di un dado a sei facce.
- **Probabilità**: Ogni elemento ha la stessa probabilità di verificarsi, ovvero $P({i}) = \frac{1}{6}$ per $i = 1, 2, ..., 6$.
- **Misura di Probabilità**: La funzione di probabilità è definita sull'insieme delle parti di $\Omega$, $P(\cdot): \mathcal{P}(\Omega) \to [0,1]$, e assegna a ogni sottoinsieme di $\Omega$ la somma delle probabilità dei suoi elementi  $P(A)=\sum_{i \in A}p_i \ \ \ , p_i=\frac{1}{6}$ con $\mathcal{A}\in \mathcal{P}(\Omega)= \mathcal{F}$
  Questa è una misura.
- **Modellizzazione**: Questo esempio rappresenta il lancio di un dado non truccato, dove ogni faccia ha la stessa probabilità di uscire. Si fanno delle scelte di modellizzazione, come assumere che il dado non venga rubato o distrutto.

#### Esempio 2: Cerchio Unitario (spazio non numerabile)

- **Spazio Campionario**: $\mathbb{R}^2\supset\Omega =\set{\omega=(x_1, x_2) : x_1^2 + x_2^2 \le 1}$, che rappresenta l'insieme dei punti all'interno di un cerchio di raggio 1.
- ![[Pasted image 20250223200216.png]]
- **Misura di Probabilità**: Si vuole definire una misura di probabilità che formalizzi l'idea di scegliere un punto a caso uniformemente all'interno del cerchio.
- **Sigma-algebra**: Si utilizza la sigma-algebra dei Boreliani su $\mathbb{R}^2$ ($\mathcal{F}=\mathcal{B}(\mathbb{R})$), ristretta a $\Omega$.
- **Definizione della Misura**: (abbiamo bisogno di una misura non discreta) Si parte dalla misura di Lebesgue $\lambda$ ($Leb_2$) e si definisce la misura di probabilità $P(A)$ come: $$ P(A) = \frac{\lambda(A \cap \Omega)}{\lambda(\Omega)} = \frac{\lambda(A \cap \Omega)}{\pi} \ \ \ \ \ \ \ \  \forall A \in \mathcal{F}$$ dove $A$ è un insieme misurabile e $\lambda(\Omega) = \pi$ è l'area del cerchio unitario.
- **Uniformità**: Questa misura di probabilità è uniforme, nel senso che la probabilità di un piccolo disco attorno a un punto è proporzionale all'area del disco, indipendentemente dalla posizione del punto all'interno del cerchio.
- **Eventi**: Gli eventi sono sottoinsiemi di $\Omega$ che appartengono alla sigma-algebra.
- **Esempio di Evento**: Si consideri l'evento $A$ = "il diametro passante per il punto scelto interseca il settore tra le ore 12 e le ore 3". Per calcolare la probabilità di $A$, si deve tradurre questo evento in un sottoinsieme misurabile di $\Omega$. Questo sottoinsieme è l'unione del primo e terzo quadrante.

### Probabilità Condizionata e Indipendenza

Il professore introduce i concetti di **probabilità condizionata** e **indipendenza**.

#### Spazio Misurabile e Spazio di Probabilità

- Uno spazio misurabile è una coppia $(\Omega, \mathcal{F})$, dove $\Omega$ è lo spazio campionario e $\mathcal{F}$ è una sigma-algebra su $\Omega$.
- Uno spazio di probabilità è una terna $(\Omega, \mathcal{F},\mathbb{P})$, dove $(\Omega, \mathcal{F})$ è uno spazio misurabile e $P$ è una misura di probabilità su $\mathcal{F}$.

#### Probabilità Condizionata

- ![[Pasted image 20250223201637.png]]
- Siano $E$ e $H$ due eventi in $\mathcal{F}$, con $P(H) > 0$. La probabilità condizionata di $E$ dato $H$ è definita come: $$ P(E|H) = \frac{P(E \cap H)}{P(H)} $$
- **Interpretazione**: $P(E|H)$ rappresenta la probabilità che l'evento $E$ si verifichi, dato che l'evento $H$ si è verificato. In altre parole, si restringe l'attenzione all'universo $H$ e si valuta la probabilità di $E$ in questo universo ristretto.
	- ![[Pasted image 20250223201734.png]]

___

#### Proprietà della Probabilità Condizionata

- **$P(E|H)$ è una misura di probabilità**: Fissato $H\in \mathcal{F}, \ \ \mathbb{P}(H)\geq 0$, la funzione $P(E|H): \mathcal{F} \to$ è una misura di probabilità su $\mathcal{F}$. (la probabilità condizionata è una funzione rispetto a E)
  Questo significa che soddisfa gli assiomi di una misura di probabilità:
  
Per dimostrare che questa applicazione è una misura di probabilità su $\mathcal{F}$, dobbiamo verificare tre proprietà fondamentali:

1. **Non negatività**: $P(E|H) \geq 0$ Questo è vero perché sia $P(E \cap H)$ che $P(H)$ sono non negativi, e quindi il loro rapporto è non negativo.
    
2. **Normalizzazione**: $P(\Omega|H) = 1$ Dimostrazione: $P(\Omega|H) = \frac{P(\Omega \cap H)}{P(H)} = \frac{P(H)}{P(H)} = 1$
    
3. **Additività completa**: Sia ${A_n}_{n \geq 1}$ una successione di eventi disgiunti. Dobbiamo dimostrare che: $P\left(\bigcup_{n=1}^{\infty} A_n \mid H\right) = \sum_{n=1}^{\infty} P(A_n \mid H)$
    
    - Iniziamo scrivendo la definizione: $P\left(\bigcup_{n=1}^{\infty} A_n \mid H\right) = \frac{P\left(\left(\bigcup_{n=1}^{\infty} A_n\right) \cap H\right)}{P(H)}$
    - Usiamo la proprietà distributiva dell'intersezione rispetto all'unione: $$\frac{P\left(\bigcup_{n=1}^{\infty} (A_n \cap H)\right)}{P(H)}$$
    - Poiché gli $A_n$ sono disgiunti, anche gli $(A_n \cap H)$ sono disgiunti. Quindi, possiamo usare l'additività completa della probabilità P: $\frac{\sum_{n=1}^{\infty} P(A_n \cap H)}{P(H)}$
    - Riscriviamo ogni termine usando la definizione di probabilità condizionale: $\sum_{n=1}^{\infty} \frac{P(A_n \cap H)}{P(H)} = \sum_{n=1}^{\infty} P(A_n \mid H)$
    - Quindi, abbiamo dimostrato l'additività completa: $P\left(\bigcup_{n=1}^{\infty} A_n \mid H\right) = \sum_{n=1}^{\infty} P(A_n \mid H)$

#### Corollario

Ogni proprietà che vale per una misura di probabilità vale anche per la probabilità condizionale quando si tiene fisso il condizionante. Ad esempio:
    - $P(E|H) \ge 0$ per ogni $E \in \mathcal{F}$.
    - $$P(\Omega|H) = \frac {P(\Omega \cap H)}{\mathbb{P}(H)}= \frac {P( H)}{\mathbb{P}(H)} =1$$.
    - Se $E_1, E_2, ...$ sono eventi disgiunti, allora $P(\bigcup_{i=1}^{\infty} E_i | H) = \sum_{i=1}^{\infty} P(E_i | H)$.
	    - ![[Pasted image 20250223202434.png]]
	- intersezione e unione godono della proprietà distributiva
	- ![[Pasted image 20250223202606.png]]
	- ![[Pasted image 20250223202635.png]]
- OGNI probabilità che sappiamo valere per una misura di probabilità vale per la probabilità condizionata quando teniamo fisso il condizionante
	- esempio:![[Pasted image 20250223203214.png]]
___
#### Formula delle Probabilità Totali
- ![[Pasted image 20250223203614.png]]
- Sia $H_1, H_2, ...$ una partizione numerabile di $\Omega$, ovvero $H_i \cap H_j = \emptyset$ per $i \ne j$ e $\bigcup_{i=1}^{\infty} H_i = \Omega$, con $P(H_i) > 0$ per ogni $i$. Allora, per ogni evento $E \in \mathcal{F}$: $$ P(E) = \sum_{i=1}^{\infty} P(E|H_i) P(H_i) $$


#### Caso Generale: Partizione Numerabile
1. **Definizione di partizione**: Sia ${H_i}_{i=1}^{\infty}$ una partizione numerabile di $\Omega$. Questo significa che:

	- $H_i \in \mathcal{F}$ per ogni $i$ (ogni $H_i$ è un evento misurabile)
	- $\bigcup_{i=1}^{\infty} H_i = \Omega$ (l'unione di tutti gli $H_i$ è l'intero spazio campionario)
	- $H_i \cap H_j = \emptyset$ per $i \neq j$ (gli $H_i$ sono a due a due disgiunti)
	- $P(H_i) > 0$ per ogni $i$
2. **Decomposizione dell'evento E**: L'evento E può essere espresso come l'unione delle intersezioni di E con gli elementi della partizione: $E = \bigcup_{i=1}^{\infty} (E \cap H_i)$
	
3. **Additività completa**: Poiché gli eventi $(E \cap H_i)$ sono disgiunti, possiamo scrivere: $P(E) = \sum_{i=1}^{\infty} P(E \cap H_i)$
	
4. **Utilizzo della probabilità condizionale**: Usando la definizione di probabilità condizionale: $P(E \cap H_i) = P(E \mid H_i) \cdot P(H_i)$
	
5. **Formula generale delle probabilità totali**: Sostituendo nella formula per $P(E)$: $P(E) = \sum_{i=1}^{\infty} P(E \mid H_i) \cdot P(H_i)$

Questa formula esprime la probabilità di E come la somma delle probabilità condizionate di E dato $H_i$, pesate per le probabilità di $H_i$.
    
#### Caso Semplice: Partizione in Due Eventi

1. **Decomposizione dell'evento E**: L'evento E può essere espresso come l'unione di due eventi mutuamente esclusivi: $E = (E \cap H) \cup (E \cap H^c)$ dove $H^c$ rappresenta il complemento di H.
    
2. **Additività**: Siccome $(E \cap H)$ e $(E \cap H^c)$ sono disgiunti, possiamo scrivere: $P(E) = P(E \cap H) + P(E \cap H^c)$
    
3. **Utilizzo della probabilità condizionale**: Ricordando la definizione di probabilità condizionale: $P(E \mid H) = \frac{P(E \cap H)}{P(H)}$ e quindi $P(E \cap H) = P(E \mid H) \cdot P(H)$ Allo stesso modo: $P(E \cap H^c) = P(E \mid H^c) \cdot P(H^c)$
    
4. **Formula delle probabilità totali**: Sostituendo nella formula per $P(E)$: $P(E) = P(E \mid H) \cdot P(H) + P(E \mid H^c) \cdot P(H^c)$
    
    Questa formula permette di calcolare la probabilità di E usando le probabilità condizionate e le probabilità degli eventi H e il suo complemento.


___


#### Teorema di Bayes

- Nelle stesse ipotesi della formula delle probabilità totali, per ogni $H_i$ nella partizione e per ogni evento $E$ con $P(E) > 0$: $$ P(H_i|E) = \frac{P(E|H_i) P(H_i)}{\sum_{j=1}^{\infty} P(E|H_j) P(H_j)} $$

#### Esempio del Test Clinico

- Si consideri un test clinico per una malattia. Siano:
    - $E$ = "il test risulta positivo".
    - $H$ = "il paziente è malato".
    - $H^c$ = "il paziente è sano".
- Si conoscono le seguenti probabilità condizionate:
    - $P(E|H)$ = probabilità che il test sia positivo dato che il paziente è malato (sensibilità del test).
    - $P(E|H^c)$ = probabilità che il test sia positivo dato che il paziente è sano (1 - specificità del test).
    - $P(H)$ = probabilità a priori che un individuo nella popolazione sia malato (prevalenza della malattia).
- Si vuole calcolare $P(H|E)$, ovvero la probabilità che il paziente sia effettivamente malato dato che il test è risultato positivo. Utilizzando il teorema di Bayes: $$ P(H|E) = \frac{P(E|H) P(H)}{P(E|H) P(H) + P(E|H^c) P(H^c)} $$
- dove $P(H^c) = 1 - P(H)$.

#### Formulazione del Teorema di Bayes

Dati: $P(E|H)$, $P(E|H^c)$ e $P(H)$, si vuole calcolare $P(H|E)$.

**Teorema:**

Sia $({H_i})_{i\ge 1}$ una partizione numerabile di $\Omega$, tale che $P(H_i) > 0$ per ogni i. Allora, la probabilità condizionata $P(H_i|E)$ può essere calcolata come:

$$P(H_i|E) = \frac{P(E|H_i)P(H_i)}{\sum_{j \ge 1} P(E|H_j)P(H_j)}$$

**Dimostrazione:**

Il denominatore dell'espressione sopra è equivalente a $P(E)$ per il teorema delle probabilità totali. Quindi:

$$P(H_i|E) = \frac{P(E|H_i)P(H_i)}{P(E)}$$

A destra dell'equazione, abbiamo solo termini noti.

#### Osservazioni Importanti

- **Inversione delle Probabilità:** Il teorema permette di "invertire" le probabilità, calcolando $P(H_i|E)$ a partire da $P(E|H_j)$ e $P(H_j)$.
- **Statistica Bayesiana:** Questo teorema è alla base della statistica Bayesiana.
- **Terminologia Statistica:**
    - $P(E|H_i)$ è chiamata verosimiglianza (likelihood).
    - $P(H_i)$ è la distribuzione iniziale (prior).
    - $P(H_i|E)$ è la distribuzione finale (posterior).
- **Meccanismo di Apprendimento:** Il teorema può essere visto come un meccanismo di apprendimento. $P(H_i)$ rappresenta la conoscenza iniziale, $P(E|H_i)$ è il modello, e $P(H_i|E)$ è ciò che si apprende dopo aver osservato l'evento E.
- **Necessità di una Struttura Probabilistica:** Per fare questi calcoli, è fondamentale avere uno spazio $\Omega$, una $\sigma$-algebra e una misura di probabilità ben definiti, anche se poi l'enunciato riguarda solo specifici valori numerici.

#### References



2025-02-25 13:16

_Status: #flashcard_zero  #riscritto_zero  #revisione_finita  

_Tags:  [[probabilità]]   [[sbobine]]
## prob-lez05

### Boreliani e Algebra

- Quando si definiscono i Boreliani, è necessario includere esplicitamente l'**insieme vuoto** per assicurarsi che sia un'algebra.
- Se $M$ va da 1 a $M$, con $B_i$ appartenente a vari intervallini e semirette, si deve considerare anche il caso in cui $m = 0$, dove per convenzione l'insieme è vuoto.
- Questo è importante per la chiarezza e per garantire che la definizione soddisfi le proprietà di un'algebra.

### Misura di Lebesgue

- La misura di Lebesgue su $\mathbb{R}$ e i suoi Boreliani è tale che la misura di un intervallo chiuso $[a, b]$ è uguale a $b - a$.
- Questa definizione si estende in modo analogo ai cubotti in dimensioni superiori.

### Sigma Algebra e Traccia

- Data una sigma algebra $\mathcal{F}$ definita su un insieme $\Omega$, si consideri un insieme $\Delta \in \mathcal{F}$.
    ![[Pasted image 20250225162149.png]]
- Si definisce la traccia della sigma algebra $\mathcal{F}$ su $\Delta$ come:
    
    $\qquad \mathcal{F}_\Delta = \set{A \cap \Delta : A \in \mathcal{F}}$
	- ![[Pasted image 20250225162259.png]]
    
- In altre parole, si prendono tutti gli insiemi $A$ in $\mathcal{F}$ e si fa l'intersezione con $\Delta$.
    
- **Affermazione**: $\mathcal{F}_\Delta$ è una sigma algebra.
    

#### Esempi Importanti

1. **Intervallo **: Sia $\Delta =[0,1]$ e $\Omega = \mathbb{R}$. Si può prendere $\mathcal{F}$ come i Boreliani di $\mathbb{R}$ 
2. oppure la restrizione dei Boreliani a |0,1|, che viene chiamata Boreliani di |0,1|.
	- ==controlla==
    - I Boreliani ![[Pasted image 20250225162537.png]] di  sono ottenuti prendendo un qualunque elemento misurabile rispetto ai Boreliani di $\mathbb{R}$ e facendo l'intersezione con .
3. **Numeri Positivi**: Analogamente, si può fare la stessa cosa con i numeri positivi $\mathbb{R}^+$ per ottenere i Boreliani di $\mathbb{R}^+$.

### Probabilità Condizionali

- Si riprende l'argomento delle probabilità condizionali.
    
- In uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, la probabilità condizionale di $A$ dato $B$, con $P(B) > 0$, è definita come:
    
    $\qquad P(A|B) = \frac{P(A \cap B)}{P(B)}$ se P(B)>0
    
- **Importante**: $P(A|B)$ è una funzione di due eventi, non è la probabilità di un evento "A dato B". Si guarda come varia al variare di $A$.
    

### Teorema delle Probabilità Totali e Teorema di Bayes

- **Teorema delle Probabilità Totali**: Supponendo che $H_i$ sia una partizione (famiglia al più numerabile di eventi disgiunti la cui unione è $\Omega$) e $P(H_i) > 0$, allora:
    
    $$\qquad P(A) = \sum_i P(A|H_i)P(H_i)$$
    
- **Teorema di Bayes**: Nelle stesse condizioni, per ogni $i$:
    
    $$\qquad P(H_i|A) = \frac{P(A|H_i)P(H_i)}{\sum_j P(A|H_j)P(H_j)}$$
    

### Esempio delle Urne

- **Descrizione**: Ci sono due urne. La prima contiene 5 palline nere e 5 rosse, la seconda contiene 2 nere e 8 rosse. Si tira una moneta per scegliere un'urna e poi si estrae una pallina.
    
- **Eventi**:
    
    - $R$: Estrarre una pallina rossa.
    - $T$: Uscita "testa" sulla moneta, che implica la scelta della prima urna.
- **Assunzioni**:
    
    - $P(T) = \frac{1}{2}$ (la moneta è equilibrata).
    - $P(R|T) = \frac{5}{10}$ (probabilità di estrarre una pallina rossa dalla prima urna).
    - $P(R|T^c) = \frac{8}{10}$ (probabilità di estrarre una pallina rossa dalla seconda urna).
- **Calcolo**: Utilizzando il teorema di Bayes, si può calcolare la probabilità di aver estratto dalla prima urna, dato che è stata estratta una pallina rossa:
    $$\qquad P(T|R) = \frac{P(R|T)P(T)}{P(R|T)P(T) + P(R|T^c)P(T^c)}$$
    
- Sostituendo i valori:
    
    $\qquad P(T|R) = \frac{\frac{5}{10} \cdot \frac{1}{2}}{\frac{5}{10} \cdot \frac{1}{2} + \frac{8}{10} \cdot \frac{1}{2}} = \frac{\frac{5}{20}}{\frac{5}{20} + \frac{8}{20}} = \frac{5}{13}$
    

### Costruzione dello Spazio di Probabilità

- Viene fatto notare che manca la definizione esplicita dello spazio di probabilità $(\Omega, \mathcal{F}, P)$.
- Si assume che esista uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ tale che gli eventi $T$ (testa) ed $R$ (pallina rossa) siano ben definiti e con le probabilità specificate.

#### Partizioni e Sigma Algebra

- Si considerano due partizioni dello spazio $\Omega$:
	- ![[Pasted image 20250225163531.png]]
    - $H_1 = T$ e $H_2 = T^c$ (testa o croce).
    - $E_1 = R$ e $E_2 = R^c$ (pallina rossa o nera).
- Si formano le intersezioni: $T \cap R$, $T \cap R^c$, $T^c \cap R$, $T^c \cap R^c$.
	- ![[Pasted image 20250225163601.png]]
- La collezione (famiglia) $B = \set{(H_n \cap E_k) \ \ \ n\geq1,k\geq1}$ forma una partizione di $\Omega$.


#### Definizione della Sigma Algebra

- Si definisce una sigma algebra generata dagli eventi in $B$  $\mathcal{F}= \sigma(B)$.
- Nel caso specifico, questa sigma algebra contiene eventi come "testa e pallina nera", "testa e pallina rossa", "croce e pallina nera", "croce e pallina rossa", ma anche eventi come "esce testa".
- Ad esempio, l'evento "esce testa" ($H_1$) può essere scritto come $H_1 = (H_1 \cap E_1) \cup (H_1 \cap E_2)$.

#### Proposizione Chiave

- Sia ${H_n}$ una partizione di eventi e ${E_k}$ un'altra famiglia di eventi. La collezione $B = {H_n \cap E_k}$ è una partizione numerabile.
- Si assegnano una successione di pesi positivi per ogni n $(p_n)_{n\geq1}$ tali che $\sum_n p_n = 1$,  
- e pesi condizionali positivi per ogni n e k $(p_{k|n})_{n\geq1}$ tali che $\sum_k p_{k|n} = 1$ per ogni $n$.

- **Tesi**: Esiste una misura di probabilità $P$ definita sulla sigma algebra generata da $B$ tale che:
    - $P(H_n) = p_n$ per ogni $n$
    - $P(H_n \cap E_k) = p_{k|n} p_n$ per ogni $k$ e $n$
    - $P(E_k|H_n) = p_{k|n}$ per ogni $k$ e $n$

#### Applicazione all'Esempio delle Urne

- ![[Pasted image 20250225164606.png]]
- $B = {T \cap R, T \cap R^c, T^c \cap R, T^c \cap R^c}$.
- $p_1 = P(T) = 0.5$ e $p_2 = P(T^c) = 0.5$.
- $p_{1|1} = P(R|T) = \frac{5}{10}$ (probabilità di estrarre rosso dato testa).
- $p_{2|1} = P(R^c|T) = \frac{5}{10}$ (probabilità di estrarre nero dato testa).
- $p_{1|2} = P(R|T^c) = \frac{8}{10}$ (probabilità di estrarre rosso dato croce).
- $p_{2|2} = P(R^c|T^c) = \frac{2}{10}$ (probabilità di estrarre nero dato croce).
- Con questi ingredienti, si può costruire una misura di probabilità ben definita.

#### Dimostrazione

- La dimostrazione si basa sul fatto che, avendo una sigma algebra generata da un insieme numerabile $B$, è sufficiente definire una famiglia di numeri positivi $q_{kn}$ (che dipendono da due indici perché la famiglia è indicizzata da due numeri) tali che la somma su tutti gli indici sia 1.
- Si definisce $q_{kn} = p_{k|n} p_n$.
- Si verifica che $$\sum_{k,n} q_{kn} = \sum_n p_n \sum_k p_{k|n} = \sum_n p_n \cdot 1 = 1$$.
- Quindi, esiste una misura di probabilità $P$ sulla sigma algebra generata da $B$ tale che $P(H_n \cap E_k) = p_{k|n} p_n$.

___ 


### Indipendenza di Eventi

L'indipendenza è una proprietà della probabilità, non degli eventi stessi. Per una certa misura di probabilità, due eventi potrebbero essere indipendenti, mentre per un'altra no. Pertanto, si parla di eventi indipendenti **rispetto a una specifica probabilità** P.

#### Definizione di Indipendenza

Due eventi $A$ e $B$, appartenenti a uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, sono detti **indipendenti** se e solo se la probabilità della loro intersezione è uguale al prodotto delle loro probabilità:

$P(A \cap B) = P(A) \cdot P(B)$

Intuitivamente, conoscere l'esito di $B$ non altera la valutazione di probabilità su $A$.

#### Probabilità Condizionale e Indipendenza

Partendo dalla definizione di probabilità condizionale:

$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$

si moltiplica per $P(B)$, ottenendo:

$P(A \cap B) = P(A \mid B) \cdot P(B)$

Questa formula esprime che la probabilità che $A$ e $B$ si verifichino contemporaneamente è uguale alla probabilità di $B$ moltiplicata per "qualcosa". L'idea intuitiva è che avere informazioni su $B$ aggiorna la probabilità su $A$.

#### Proprietà dell'Indipendenza

Se due eventi $A$ e $B$ sono indipendenti, allora anche $A$ e il complementare di $B$ (indicato come $B^c$) sono indipendenti. Di conseguenza, anche le seguenti coppie di eventi sono indipendenti:

- $A^c$ e $B^c$
- $A^c$ e $B$

Questo significa che l'indipendenza è stabile rispetto all'operazione di complementazione.

**Dimostrazione**:

Per dimostrare che $A$ e $B^c$ sono indipendenti, dobbiamo mostrare che $P(A \cap B^c) = P(A) \cdot P(B^c)$.

Consideriamo il diagramma di Venn. L'area rappresentante $A \cap B^c$ è contenuta in $A$. Possiamo scrivere $A \cap B^c$ come $A - (A \cap B)$.

Quindi, $P(A \cap B^c) = P(A) - P(A \cap B)$.

Poiché $A$ e $B$ sono indipendenti, $P(A \cap B) = P(A) \cdot P(B)$. Sostituendo:

$P(A \cap B^c) = P(A) - P(A) \cdot P(B) = P(A) \cdot (1 - P(B)) = P(A) \cdot P(B^c)$.

Questo dimostra che $A$ e $B^c$ sono indipendenti.

#### Errore Comune

È importante non confondere l'indipendenza ($A$ e $B$ indipendenti) con l'esclusività ($A \cap B = \emptyset$). L'indipendenza è una proprietà della probabilità, mentre l'esclusività è una relazione tra eventi.

### Esempio: Lancio di Due Dadi

Consideriamo lo spazio campionario $\Omega$ formato da coppie di numeri, dove ogni numero rappresenta l'esito di un dado a sei facce:

$\Omega = {(\omega_1, \omega_2) \mid \omega_1, \omega_2 \in {1, 2, 3, 4, 5, 6}}$

La cardinalità di $\Omega$ è $|\Omega| = 6 \times 6 = 36$.

Assumiamo che ogni coppia abbia la stessa probabilità di verificarsi (misura uniforme). Quindi, la probabilità di ogni singolo evento elementare è $\frac{1}{36}$.

Definiamo i seguenti eventi:

- $A$: il primo dado mostra la faccia 1
- $B$: il secondo dado mostra la faccia 3

Matematicamente:

- $A = {(\omega_1, \omega_2) \in \Omega \mid \omega_1 = 1}$
- $B = {(\omega_1, \omega_2) \in \Omega \mid \omega_2 = 3}$

La probabilità di $A$ è $P(A) = \frac{6}{36} = \frac{1}{6}$, poiché ci sono sei coppie in cui il primo elemento è 1. Similmente, $P(B) = \frac{6}{36} = \frac{1}{6}$.

L'intersezione di $A$ e $B$ è l'evento in cui il primo dado mostra 1 e il secondo dado mostra 3:

$A \cap B = {(1, 3)}$

Quindi, $P(A \cap B) = \frac{1}{36}$.

Verifichiamo se $A$ e $B$ sono indipendenti:

$P(A) \cdot P(B) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36} = P(A \cap B)$

Poiché $P(A \cap B) = P(A) \cdot P(B)$, gli eventi $A$ e $B$ sono indipendenti.

### Indipendenza di _n_ Eventi

Gli eventi $A_1, A_2, ..., A_n$ sono **indipendenti** se, per ogni sottoinsieme di $k$ eventi distinti (con $2 \leq k \leq n$), la probabilità dell'intersezione è uguale al prodotto delle probabilità:

$P(A_{i_1} \cap A_{i_2} \cap ... \cap A_{i_k}) = P(A_{i_1}) \cdot P(A_{i_2}) \cdot ... \cdot P(A_{i_k})$

dove $i_1, i_2, ..., i_k$ sono indici distinti compresi tra 1 e $n$.

#### Esempio con Tre Eventi ($n = 3$)

Se $n = 3$, la definizione di indipendenza richiede che siano soddisfatte le seguenti condizioni:

1. $P(A_1 \cap A_2 \cap A_3) = P(A_1) \cdot P(A_2) \cdot P(A_3)$
2. $P(A_1 \cap A_2) = P(A_1) \cdot P(A_2)$
3. $P(A_1 \cap A_3) = P(A_1) \cdot P(A_3)$
4. $P(A_2 \cap A_3) = P(A_2) \cdot P(A_3)$

È importante notare che **non è sufficiente** che solo la prima condizione sia soddisfatta per concludere che i tre eventi sono indipendenti. Tutte le condizioni devono essere vere.

#### Conseguenze dell'Indipendenza

Se $A_1, A_2, ..., A_n$ sono indipendenti, allora anche gli eventi ottenuti complementando alcuni di essi sono indipendenti. Ad esempio, $A_1, A_2, A_3^c$ sono indipendenti.

### Indipendenza di una Successione Numerabile di Eventi

Una successione numerabile di eventi $(A_n)_{n \in \mathbb{N}}$ è detta **indipendente** se ogni sua sottosuccessione finita è costituita da eventi indipendenti. In altre parole, per ogni $m \in \mathbb{N}$, gli eventi $A_1, A_2, ..., A_m$ devono essere indipendenti.

### Regola della Catena (o Regola delle Probabilità Composte)

Supponiamo di avere $n$ eventi $E_1, E_2, ..., E_n$ appartenenti a $\mathcal{F}$, tali che $P(E_1 \cap E_2 \cap ... \cap E_n) > 0$. Allora, la probabilità dell'intersezione può essere scritta come: ==ricontrolla==
- ![[Pasted image 20250226093836.png]]

$P(E_1 \cap E_2 \cap ... \cap E_n) = P(E_1) \cdot P(E_2 \mid E_1) \cdot P(E_3 \mid E_1 \cap E_2) \cdot ... \cdot P(E_n \mid E_1 \cap E_2 \cap ... \cap E_{n-1})$

**Dimostrazione (per $n=2$):**

$P(E_1 \cap E_2) = P(E_1) \cdot P(E_2 \mid E_1)$

Questa formula deriva direttamente dalla definizione di probabilità condizionale. ==ricontrolla==
- ![[Pasted image 20250226093844.png]]
- per n=2 $\mathbb{P}(E_1 \cap E_2) = \mathbb{P}(E_1) \mathbb{P}(E_2 | E_1)\mathbb{P}(E_1 \cap E_2) = \frac{\mathbb{P}(E_1)\mathbb{P}(E_2 | E_1)}{\mathbb{P}(E_1)}$
___


### Indipendenza Tra Eventi

- Due eventi $A$ e $B$ sono **indipendenti** se e solo se $P(A \cap B) = P(A)P(B)$.
- L'indipendenza è una proprietà della misura di probabilità, non degli eventi stessi.

#### Proprietà Importanti

- Se $A$ e $B$ sono indipendenti, allora anche $A$ e $B^c$ sono indipendenti. Di conseguenza, anche $A^c$ e $B^c$, e $A^c$ e $B$ sono indipendenti.
- **Dimostrazione**: $P(A \cap B^c) = P(A) - P(A \cap B) = \\ P(A) - P(A)P(B) = \\ P(A)(1 - P(B)) = \\ P(A)P(B^c)$.

#### Esempio con i Dadi

- $\Omega$ è l'insieme delle coppie $(i, j)$ con $i, j \in {1, 2, 3, 4, 5, 6}$, quindi $|\Omega| = 36$.
- $\mathcal{F}$ è la sigma algebra delle parti di $\Omega$, e $P$ è la misura uniforme su $\Omega$.
- $A = {(i, j) \in \Omega : i = 1}$ (il primo dado mostra 1).
- $B = {(i, j) \in \Omega : j = 3}$ (il secondo dado mostra 3).
- $P(A) = \frac{6}{36} = \frac{1}{6}$, $P(B) = \frac{6}{36} = \frac{1}{6}$.
- $A \cap B = {(1, 3)}$, quindi $P(A \cap B) = \frac{1}{36}$.
- $P(A)P(B) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36} = P(A \cap B)$, quindi $A$ e $B$ sono indipendenti.

#### Indipendenza di $n$ Eventi

- Gli eventi $A_1, A_2, \dots, A_n$ sono indipendenti se per ogni $k$ tra 2 e $n$, e per ogni scelta di $k$ indici distinti $i_1, i_2, \dots, i_k$, si ha:
    
    $\qquad P(A_{i_1} \cap A_{i_2} \cap \dots \cap A_{i_k}) = P(A_{i_1})P(A_{i_2})\dots P(A_{i_k})$
    

#### Esempio con $n = 3$

- Se $n = 3$, gli eventi $A_1, A_2, A_3$ sono indipendenti se:
    - $P(A_1 \cap A_2 \cap A_3) = P(A_1)P(A_2)P(A_3)$
    - $P(A_1 \cap A_2) = P(A_1)P(A_2)$
    - $P(A_1 \cap A_3) = P(A_1)P(A_3)$
    - $P(A_2 \cap A_3) = P(A_2)P(A_3)$

#### Conseguenze dell'Indipendenza

- Se $A_1, \dots, A_n$ sono indipendenti, allora anche $A_1, \dots, A_k, A_{k+1}^c, \dots, A_n^c$ sono indipendenti.

#### Indipendenza di una Successione Numerabile di Eventi

- Una successione numerabile di eventi ${A_n}$ è indipendente se ogni sua sottosuccessione finita è costituita da eventi indipendenti.
___
### Indipendenza tra eventi

#### Definizione intuitiva

L'idea di base è che conoscere qualcosa su un evento $B$ non cambia la valutazione di probabilità su un evento $A$.

#### Definizione formale

Due eventi $A$ e $B$, appartenenti allo spazio di probabilità $(\Omega, \mathcal{F}, P)$, sono **indipendenti** se e solo se:

$P(A \cap B) = P(A) \cdot P(B)$

#### Probabilità condizionata

Ricordando la definizione di probabilità condizionata:

$P(A|B) = \frac{P(A \cap B)}{P(B)}$

Se $A$ e $B$ sono (stocasticamente) indipendenti, allora $P(A|B) = P(A)$, ovvero conoscere $B$ non altera la probabilità di $A$.

#### Errore comune

**Non confondere l'indipendenza con l'intersezione vuota**:

- $A$ e $B$ indipendenti **non** implica $A \cap B = \emptyset$
- L'indipendenza è una proprietà della misura di probabilità $P$, non degli eventi $A$ e $B$. Gli eventi $A$ e $B$ sono indipendenti rispetto a $P$.

#### Proprietà importante

Se $A$ e $B$ sono indipendenti, allora anche:

- $A$ e $B^c$ sono indipendenti
- $A^c$ e $B$ sono indipendenti
- $A^c$ e $B^c$ sono indipendenti

Dove $B^c$ è il complementare di $B$. In altre parole, l'indipendenza è stabile rispetto al complementare.

##### Dimostrazione

![[Pasted image 20250225173305.png]]
Consideriamo $P(A \cap B^c)$. Vogliamo dimostrare che $P(A \cap B^c) = P(A) \cdot P(B^c)$.

$P(A \cap B^c) = P(A) - P(A \cap B)$

Siccome $A$ e $B$ sono indipendenti, $P(A \cap B) = P(A) \cdot P(B)$. Quindi:

$P(A \cap B^c) = P(A) - P(A) \cdot P(B) = P(A) \cdot (1 - P(B)) = P(A) \cdot P(B^c)$

#### Esempio: Lancio di due dadi

Consideriamo il lancio di due dadi.

- $\Omega = {(w_1, w_2) : w_1, w_2 \in {1, 2, 3, 4, 5, 6}}$
- $|\Omega| = 36$
- Assumiamo che la probabilità sia uniforme, quindi $P({\omega}) = \frac{1}{36}$ per ogni $\omega \in \Omega$.

Definiamo gli eventi:

- $A = {\omega \in \Omega : \text{il primo dado mostra la faccia 1}}$
- $B = {\omega \in \Omega : \text{il secondo dado mostra la faccia 3}}$

Calcoliamo le probabilità:

- $P(A) = \frac{6}{36} = \frac{1}{6}$
- $P(B) = \frac{6}{36} = \frac{1}{6}$
- $A \cap B = \set{\omega =(1, 3)}$
- $P(A \cap B) = \frac{1}{36}$

Verifichiamo l'indipendenza:

$P(A) \cdot P(B) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36} = P(A \cap B)$

Quindi, $A$ e $B$ sono indipendenti.

#### Indipendenza di N eventi

Gli eventi $A_1, A_2, ..., A_n \in \mathcal{F}$ sono indipendenti se per ogni sottoinsieme di indici distinti $I_1, I_2, ..., I_k$ con $2 \leq k \leq n$, vale:

$P(A_{I_1} \cap A_{I_2} \cap ... \cap A_{I_k}) = P(A_{I_1}) \cdot P(A_{I_2}) \cdot ... \cdot P(A_{I_k})$
- $$\mathbb{P} \left( \bigcap_{j=1}^{k} A_{ij} \right) = \prod_{j=1}^k \mathbb{P}(A_{ij}) \ \ \forall i,k \leq n \forall \set{I_1, I_2, ..., I_k} \subseteq \set{1,\cdots, n}$$
 - ![[Pasted image 20250225174326.png]]

In altre parole, deve valere la fattorizzazione per ogni possibile combinazione di eventi.

##### Esempio con N=3

Se $n = 3$, allora $A_1, A_2, A_3$ sono indipendenti se valgono contemporaneamente le seguenti:

- $P(A_1 \cap A_2 \cap A_3) = P(A_1) \cdot P(A_2) \cdot P(A_3)$
- $P(A_1 \cap A_2) = P(A_1) \cdot P(A_2)$
- $P(A_1 \cap A_3) = P(A_1) \cdot P(A_3)$
- $P(A_2 \cap A_3) = P(A_2) \cdot P(A_3)$

**Non è sufficiente che valga solo la prima condizione**.

#### Conseguenze dell'indipendenza

Se $A_1, ..., A_n$ sono indipendenti, allora anche:

- $A_1, ..., A_k, A_{k+1}^c, ..., A_n^c$ sono indipendenti (posso complementare qualsiasi sottoinsieme di eventi)
- Se prendo un sottoinsieme degli eventi, questi sono ancora indipendenti. Per esempio, $A_1, A_2$ sono indipendenti, $A_1, A_3$ sono indipendenti, ecc..
- Se $A_1^c, A_2, A_3$ sono indipendenti, allora $A_1, A_2, A_3$ sono indipendenti.

#### Indipendenza di una successione numerabile di eventi

Una successione numerabile di eventi $(A_n)_{n \in \mathbb{N}}$ è indipendente se per ogni $m \in \mathbb{N}$, i primi $m$ eventi sono indipendenti.
- $$\text{Sono indipendenti se } \\ \forall m \ge 2 \quad (A_1, \dots, A_m) \text{ sono indipendenti}$$
In altre parole, comunque si "arresti" la successione, si ottiene una famiglia finita di eventi indipendenti.


#### References



2025-02-26 16:08

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:  [[sbobine]]   [[probabilità]]

## prob-lez06
### Eventi Bernoulli (Eventi Bernoulliani)
- ![[Pasted image 20250226130144.png]]

Questo modello descrive una situazione con $n$ eventi, $E_1, E_2, ..., E_n$, che sono **indipendenti**. Ogni evento $E_i$ ha una probabilità associata di verificarsi.
- ==riscrivi==![[Pasted image 20250226130454.png]]

#### Ipotesi

1. Gli eventi $E_1, E_2, ..., E_n$ sono **indipendenti**.
2. La probabilità di ogni singolo evento $E_i$ è un numero $p_i$ compreso tra 0 e 1: $0 \le p_i \le 1$.
- ==riscrivi==![[Pasted image 20250226130434.png]]

#### Convenzione di Scrittura

Per semplificare la notazione, si introduce una convenzione:

- $E_i^{(e_i)}$ dove $e_i$ può essere 0 o 1.
    - Se $e_i = 1$, allora $E_i^{(e_i)} = E_i$ (l'evento si verifica).
    - Se $e_i = 0$, allora $E_i^{(e_i)} = E_i^c$ (l'evento non si verifica, si verifica il suo complementare).
    - ![[Pasted image 20250226130603.png]]

#### Probabilità dell'Intersezione
- ![[Pasted image 20250226130851.png]]

Considerando un vettore **e** = ($e_1, e_2, ..., e_n$) $\subseteq \set{0,1}^n$ , si calcola la probabilità dell'intersezione degli eventi corrispondenti:

$$P(\bigcap_{i=1}^{n} E_i^{(e_i)})$$

Poiché gli eventi sono indipendenti, questa probabilità può essere espressa come il prodotto delle probabilità dei singoli eventi o dei loro complementari:

$P(\bigcap_{i=1}^{n} E_i^{(e_i)}) = \prod_{i=1}^{n} P(E_i^{(e_i)})$

Dove:

$P(E_i^{(e_i)}) = \begin{cases} p_i, & \text{se } e_i = 1 \\ 1 - p_i, & \text{se } e_i = 0 \end{cases}$

#### Evento $A_k$

Si definisce l'evento $A_k$ come l'unione di tutte le intersezioni possibili tali che esattamente $k$ eventi si verifichino:

$$A_k = \bigcup_{\begin{cases}\textbf{e} \in {0,1}^n :\\ \sum_{i=1}^{n} e_i = k\end{cases}} (\bigcap_{i=1}^{n} E_i^{(e_i)})$$

Questo significa che $A_k$ è l'evento in cui esattamente $k$ degli $n$ eventi $E_i$ si verificano.

#### Calcolo della Probabilità di $A_k$

La probabilità di $A_k$ è la somma delle probabilità di tutte le intersezioni disgiunte che la compongono:

$P(A_k) = \sum_{\textbf{e} \in {0,1}^n : \sum_{i=1}^{n} e_i = k} P(\bigcap_{i=1}^{n} E_i^{(e_i)})$

Sostituendo con la formula dell'indipendenza:

$P(A_k) = \sum_{\textbf{e} \in {0,1}^n : \sum_{i=1}^{n} e_i = k} \prod_{i=1}^{n} P(E_i^{(e_i)})$

#### Ulteriore Semplificazione: Eventi Identicamente Distribuibili (i.i.d.)
- ![[Pasted image 20250226131217.png]]
Se, oltre all'indipendenza, tutti gli eventi hanno la stessa probabilità $p$ di verificarsi (cioè $p_i = p$ per ogni $i$), allora l'espressione si semplifica ulteriormente. In questo caso, si parla di **eventi bernoulliani**.

$P(A_k) = \binom{n}{k} p^k (1-p)^{n-k}$

Dove $\binom{n}{k}$ è il coefficiente binomiale, che rappresenta il numero di modi di scegliere $k$ eventi tra $n$.

### Esempio

Consideriamo il lancio di $n$ monete, dove ogni moneta ha probabilità $p$ di dare testa. Gli esiti dei lanci sono indipendenti. Qual è la probabilità di osservare esattamente $k$ teste? La risposta è data dalla distribuzione binomiale:

$P(A_k) = \binom{n}{k} p^k (1-p)^{n-k}$

### Costruzione di Eventi Bernoulli
- ![[Pasted image 20250226131247.png]]
È possibile costruire uno spazio di probabilità in cui gli eventi $E_i$ sono bernoulliani. Si può prendere $\Omega = {0, 1}^n$, con la $\sigma$-algebra delle parti e definire una misura di probabilità $P$ tale che:

$P(\omega) = \prod_{i=1}^{n} p_i^{\omega_i} (1 - p_i)^{(1 - \omega_i)}$

Dove $\omega = (\omega_1, ..., \omega_n)$ è un elemento di $\Omega$.

Verificare che $\sum_{\omega \in \Omega} P(\omega) = 1$ e che gli eventi $E_i = {\omega \in \Omega : \omega_i = 1}$ sono bernoulliani con probabilità $p_i$.
___


### Indipendenza Condizionale
- ![[Pasted image 20250226130202.png]]

**Definizione A2**:
- ![[Pasted image 20250226131411.png]]

Dati tre eventi $E_1$, $E_2$ e $H$ appartenenti a una $\sigma$-algebra $\mathcal{F}$, $E_1$ e $E_2$ sono condizionatamente indipendenti dato $H$ se:

$P(E_1 \cap E_2 | H) = P(E_1 | H) \cdot P(E_2 | H)$

Il professore sottolinea che questa definizione **non implica** che $P(E_1 \cap E_2) = P(E_1) \cdot P(E_2)$, ma riguarda le probabilità condizionali.

#### Misura di Probabilità Condizionale

Se si definisce una funzione che associa a un insieme la probabilità $P(E | H)$, questa è una misura di probabilità.

#### Definizione Equivalente di Indipendenza Condizionale

Un modo equivalente per definire l'indipendenza condizionale è considerare che $E_1$ e $E_2$ sono indipendenti rispetto alla misura condizionale dato $H$. In altre parole, sono indipendenti rispetto alla misura $P(\cdot | H)$.

#### Generalizzazione a n Eventi

La definizione si estende a $n$ eventi $E_1, E_2, ..., E_n$. Questi eventi sono indipendenti dato $H$ se sono indipendenti rispetto a $P(\cdot | H)$.

Per esempio, per tre eventi $E_1, E_2, E_3$, si deve verificare che:

- $P(E_1 \cap E_2 \cap E_3 | H) = P(E_1 | H) \cdot P(E_2 | H) \cdot P(E_3 | H)$
- $P(E_1 \cap E_2 | H) = P(E_1 | H) \cdot P(E_2 | H)$
- $P(E_1 \cap E_3 | H) = P(E_1 | H) \cdot P(E_3 | H)$
- $P(E_2 \cap E_3 | H) = P(E_2 | H) \cdot P(E_3 | H)$

In generale, la definizione di indipendenza viene riscritta sostituendo $P$ con $P(\cdot | H)$ ovunque.

#### Importante

Il fatto che $E_1$ e $E_2$ siano condizionatamente indipendenti dato $H$ **non implica** che $E_1$ e $E_2$ siano indipendenti.

Il professore menziona che durante le esercitazioni verranno forniti esempi per chiarire ulteriormente questo concetto e illustrare situazioni in cui l'indipendenza condizionale emerge naturalmente.

____

### Variabili Aleatorie: Introduzione e Definizioni Preliminari
- ![[Pasted image 20250226130222.png]]
- ![[Pasted image 20250226130235.png]]

L'argomento delle variabili aleatorie è introdotto come un punto cruciale nello studio della probabilità. Prima di arrivare alla definizione formale di variabile aleatoria, vengono presentati alcuni concetti preliminari fondamentali.

#### Spazi di Punti e Sigma Algebre

Si considerano due spazi, $\Omega$ e $X$, che rappresentano spazi di punti generici. Ad esempio:

- $\Omega = {1, 2, 3, 4, 5, 6}$ e $X = {0, 1}$.
- $\Omega =$ $[0,1]$ $X = \mathbb{R}^d$.

A ciascuno di questi spazi viene assegnata una sigma algebra. Ad esempio, si possono usare:

- La sigma algebra delle parti.
- I Boreliani di $.
- I Boreliani di $\mathbb{R}^d$.


#### Esempio Motivazionale: Lancio di un Dado

Per chiarire meglio, si considera un esempio concreto: modellizzare l'esperimento del lancio di un dado e osservare se il risultato è pari o dispari.

- **Spazio di partenza ($\Omega$):** Rappresenta i possibili esiti del lancio del dado, $\Omega = {1, 2, 3, 4, 5, 6}$.
- **Spazio di arrivo ($X$):** Indica se il numero uscito è pari o dispari, $X = \set{0, 1}$, dove 0 rappresenta "dispari" e 1 rappresenta "pari".
- **Funzione $x$:** Mappa ogni esito del dado al valore corrispondente in $X$. In questo caso:
    - $x(\omega) = 0$ se $\omega \in {1, 3, 5}$.
    - $x(\omega) = 1$ se $\omega \in {2, 4, 6}$.

L'obiettivo è quello di poter rispondere a domande del tipo "Qual è la probabilità che esca un numero pari?".

#### Funzioni Misurabili

![[Pasted image 20250226132412.png]]
Non tutte le funzioni sono adatte per lavorare con probabilità. È necessario restringere l'attenzione a funzioni misurabili.

**Definizione:** Una funzione $x \colon \Omega \to X$ è detta misurabile se $x^{-1}(A) \in \mathcal{F}$ per ogni $A \in \Sigma_X$, dove $\mathcal{F}$ è la sigma algebra su $\Omega$ e $\Sigma_X$ è la sigma algebra su $X$. In altre parole, la controimmagine di ogni insieme misurabile in $X$ deve essere un insieme misurabile in $\Omega$.

- $x^{-1}(A) = \set{\omega \in \Omega : x(\omega) \in A}$ è la controimmagine di $A$.

**Esempio:** Nell'esempio del dado, se $A = {1}$ (cioè l'evento "esce pari"), allora $x^{-1}(A) = {2, 4, 6}$. Per poter calcolare la probabilità di questo evento, è necessario che ${2, 4, 6}$ sia un insieme misurabile in $\Omega$.

#### Variabili Aleatorie

**Definizione:** Una variabile aleatoria è una funzione misurabile $x \colon \Omega \to X$ dove $(\Omega, \mathcal{F}, P)$ è uno spazio di probabilità. Questo significa che, oltre agli spazi $\Omega$ e $X$ e alle rispettive sigma algebre, è definita anche una misura di probabilità $P$ su $\Omega$.

- **Numero aleatorio:** Variabile aleatoria a valori reali, $X = \mathbb{R}$.
- **Vettore aleatorio:** Variabile aleatoria a valori in $\mathbb{R}^d$.

**Importanza della Misurabilità:** La misurabilità garantisce che abbia senso calcolare la probabilità di eventi del tipo ${x \in A}$, dove $A$ è un insieme misurabile in $X$. In altre parole, l'evento ${\omega \in \Omega : x(\omega) \in A}$ deve appartenere alla sigma algebra $\mathcal{F}$ per poter calcolarne la probabilità.

$$ P(x \in A) = P({\omega \in \Omega : x(\omega) \in A}) = P(x^{-1}(A)) $$

**Esempio:** Riprendendo l'esempio del dado, la probabilità di ottenere un numero pari è:

$$ P(x = 1) = P({\omega \in \Omega : x(\omega) = 1}) = P({2, 4, 6}) = \frac{1}{2} $$

### Proprietà delle Funzioni Misurabili

Per manipolare le variabili aleatorie, è utile conoscere alcune proprietà fondamentali delle funzioni misurabili.

#### Lemma Fondamentale

**Enunciato:** Sia $x \colon \Omega \to X$ una funzione, e sia $\mathcal{C}$ una famiglia di sottoinsiemi di $X$ tale che $\sigma(\mathcal{C}) = \Sigma_X$, dove $\sigma(\mathcal{C})$ è la sigma algebra generata da $\mathcal{C}$. Allora, $x$ è misurabile se e solo se $x^{-1}(C) \in \mathcal{F}$ per ogni $C \in \mathcal{C}$.

In altre parole, per verificare che una funzione è misurabile, è sufficiente controllare che la controimmagine di ogni insieme in una famiglia che genera la sigma algebra di arrivo sia misurabile.

**Dimostrazione:** La dimostrazione di questo lemma coinvolge la definizione di una famiglia di insiemi $\mathcal{S}$ e la dimostrazione che $\mathcal{S}$ è una sigma algebra.

#### Criteri di Misurabilità

1. **Funzioni a valori reali:** Sia $x \colon \Omega \to \mathbb{R}$. Allora $x$ è misurabile se e solo se $x^{-1}((-\infty, a]) \in \mathcal{F}$ per ogni $a \in \mathbb{R}$.
    
    Questo criterio semplifica la verifica della misurabilità per funzioni a valori reali: basta controllare che la controimmagine di ogni semiretta sia misurabile.
    
2. **Funzioni vettoriali:** Siano $x_1, x_2 \colon \Omega \to \mathbb{R}$ misurabili. Allora il vettore $(x_1, x_2) \colon \Omega \to \mathbb{R}^2$ è misurabile.
    
    La dimostrazione utilizza il lemma fondamentale e la proprietà che i rettangoli con basi misurabili generano la sigma algebra dei Boreliani in $\mathbb{R}^2$.
    
3. **Composizione di funzioni misurabili:** Siano $x_1 \colon \Omega_1 \to \Omega_2$ e $x_2 \colon \Omega_2 \to X$ funzioni misurabili. Allora la composizione $x_2 \circ x_1 \colon \Omega_1 \to X$ è misurabile.
    
4. **Funzioni continue:** Se $h \colon \mathbb{R}^n \to \mathbb{R}$ è una funzione continua, allora $h$ è misurabile rispetto ai Boreliani. La dimostrazione di questa proprietà richiede un richiamo sulle funzioni continue.
    

#### Conseguenze Importanti

Siano $x_1, x_2 \colon \Omega \to \mathbb{R}$ funzioni misurabili. Allora:

- $x_1 + x_2$ è misurabile.
- $x_1 - x_2$ è misurabile.
- $x_1 \cdot x_2$ è misurabile.
- $\max{x_1, 0}$ (parte positiva di $x_1$) è misurabile.
- $-\min{x_1, 0}$ (parte negativa di $x_1$) è misurabile.
- Se $f \colon \mathbb{R}^2 \to \mathbb{R}$ è continua, allora $f(x_1, x_2)$ è misurabile.

Queste proprietà permettono di costruire nuove funzioni misurabili a partire da funzioni misurabili note, utilizzando operazioni algebriche e composizioni con funzioni continue.

___

Ecco una spiegazione dettagliata sulle funzioni misurabili e variabili aleatorie, basata sulle lezioni del professore, con particolare attenzione ai passaggi matematici, esempi ed esercizi.

### Funzioni Misurabili e Variabili Aleatorie
- ![[Pasted image 20250226130306.png]]
- ![[Pasted image 20250226130322.png]]

#### Spazi di Misura

Si considerano due spazi, $\Omega$ e $X$, dove $\Omega$ rappresenta uno spazio di punti e $X$ un altro spazio di punti. Ad esempio:

- $\Omega = {1, 2, 3, 4, 5, 6}$ e $X = {0, 1}$
- $\Omega = \mathbb{R}$ e $X = \mathbb{R}^d$
- $\Omega =$ e $X = \mathbb{R}^d$

Ad ognuno di questi spazi si associa una $\sigma$-algebra. Per esempio:

- In $\Omega$, la $\sigma$-algebra delle parti $\mathcal{P}(\Omega)$
- In $X$, la $\sigma$-algebra delle parti $\mathcal{P}(X)$
- In $$, i Boreliani di $$
- In $\mathbb{R}^d$, i Boreliani di $\mathbb{R}^d$

#### Definizione di Funzione Misurabile

Una funzione $\xi: \Omega \rightarrow X$ si dice misurabile se:

$$\xi^{-1}(A) \in \mathcal{F} \quad \forall A \in \Sigma_X$$

dove $\Sigma_X$ è la $\sigma$-algebra su $X$ e $\mathcal{F}$ è la $\sigma$-algebra su $\Omega$. In altre parole, la **controimmagine** di ogni insieme misurabile in $X$ è un insieme misurabile in $\Omega$.

#### Esempio Motivazionale: Lancio di un Dado

Si vuole modellizzare l'esperimento del lancio di un dado e osservare se il risultato è pari o dispari.

- $\Omega = {1, 2, 3, 4, 5, 6}$ rappresenta l'esito del lancio del dado
- $X = {0, 1}$ rappresenta "dispari" (0) o "pari" (1)

La funzione $\xi: \Omega \rightarrow X$ è definita come:

- $\xi(\omega) = 0$ se $\omega \in {1, 3, 5}$
- $\xi(\omega) = 1$ se $\omega \in {2, 4, 6}$

#### Probabilità di un Evento

Per un probabilista, è fondamentale che, data una funzione, si possa propagare l'informazione sulla probabilità. Nell'esempio del dado, si vuole sapere qual è la probabilità che esca un numero pari.

#### Definizione di Variabile Aleatoria

Una **variabile aleatoria** è una funzione misurabile da uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ a uno spazio misurabile $(X, \Sigma_X)$. Quindi, oltre alla misurabilità, si aggiunge la presenza di una misura di probabilità $P$ su $\Omega$.

#### Tipi di Variabili Aleatorie

- **Numero aleatorio**: Variabile aleatoria a valori reali, $\xi: \Omega \rightarrow \mathbb{R}$, dove $\mathbb{R}$ è dotato dei Boreliani.
- **Vettore aleatorio**: Variabile aleatoria a valori in $\mathbb{R}^d$, $\xi: \Omega \rightarrow \mathbb{R}^d$, dove $\mathbb{R}^d$ è dotato dei Boreliani.

#### Misurabilità e Controimmagine

Se $\xi$ è una variabile aleatoria, allora ha senso chiedersi qual è la probabilità che $\xi(\omega)$ appartenga ad $A$, dove $A$ è un insieme misurabile in $X$. Formalmente:

$$P(\xi \in A) = P({\omega \in \Omega : \xi(\omega) \in A}) = P(\xi^{-1}(A))$$

È cruciale che $\xi^{-1}(A)$ sia un evento appartenente alla $\sigma$-algebra $\mathcal{F}$ su $\Omega$, affinché si possa calcolare la sua probabilità.

#### Esempio: Probabilità di Pari nel Lancio del Dado

La probabilità di ottenere un numero pari è:

$$P(\xi = 1) = P({\omega \in \Omega : \xi(\omega) = 1}) = P({2, 4, 6})$$

### Proprietà delle Funzioni Misurabili
#### Funzioni tra Spazi

Si definisce una funzione nel senso matematico più generale, cioè una corrispondenza che associa ad ogni punto di $\Omega$ un punto in $X$. È importante notare che queste funzioni non sono necessariamente da $\mathbb{R}$ in $\mathbb{R}$ o da $\mathbb{R}^d$ in $\mathbb{R}$, ma possono essere tra insiemi più generali.


#### Lemma Fondamentale

Sia $\xi: \Omega \rightarrow X$ una funzione, e sia $\mathcal{C}$ una famiglia di sottoinsiemi di $X$ tale che $\sigma(\mathcal{C}) = \Sigma_X$ (cioè, $\mathcal{C}$ genera la $\sigma$-algebra su $X$). Allora $\xi$ è misurabile se e solo se:

$$\xi^{-1}(C) \in \mathcal{F} \quad \forall C \in \mathcal{C}$$

In altre parole, per verificare che una funzione è misurabile, è sufficiente controllare che la controimmagine degli elementi di una famiglia che genera la $\sigma$-algebra d'arrivo siano misurabili.

#### Proprietà Utili delle Controimmagini

Sia $f: E \rightarrow F$ una funzione. Allora:

- $f^{-1}(\emptyset) = \emptyset$
- $f^{-1}(F) = E$
- $f^{-1}(\bigcup_{i} V_i) = \bigcup_{i} f^{-1}(V_i)$, dove $V_i \subseteq F$
- $f^{-1}(A^c) = (f^{-1}(A))^c$

#### Conseguenze del Lemma

1. **Funzioni a valori reali**: Una funzione $\xi: \Omega \rightarrow \mathbb{R}$ è misurabile (rispetto alla $\sigma$-algebra $\mathcal{F}$ su $\Omega$ e ai Boreliani $\mathcal{B}(\mathbb{R})$ su $\mathbb{R}$) se e solo se:
    
    $$\xi^{-1}((-\infty, x]) \in \mathcal{F} \quad \forall x \in \mathbb{R}$$
    
    Basta quindi controllare che la controimmagine delle semirette sia misurabile.
    
2. **Funzioni vettoriali**: Siano $\xi_1, \xi_2: \Omega \rightarrow \mathbb{R}$ due funzioni misurabili. Allora il vettore $(\xi_1, \xi_2): \Omega \rightarrow \mathbb{R}^2$ è misurabile (rispetto alla $\sigma$-algebra $\mathcal{F}$ su $\Omega$ e ai Boreliani $\mathcal{B}(\mathbb{R}^2)$ su $\mathbb{R}^2$).
    
    La dimostrazione utilizza il lemma e il fatto che i rettangoli con basi misurabili generano i Boreliani di $\mathbb{R}^2$. La controimmagine di un rettangolo $A_1 \times A_2$ è:
    
    $$(\xi_1, \xi_2)^{-1}(A_1 \times A_2) = \xi_1^{-1}(A_1) \cap \xi_2^{-1}(A_2)$$
    
    Poiché $\xi_1$ e $\xi_2$ sono misurabili, $\xi_1^{-1}(A_1) \in \mathcal{F}$ e $\xi_2^{-1}(A_2) \in \mathcal{F}$, quindi $(\xi_1, \xi_2)^{-1}(A_1 \times A_2) \in \mathcal{F}$.
    
3. **Composizione di funzioni misurabili**: Siano $\xi_1: (\Omega_1, \mathcal{F}_1) \rightarrow (\Omega_2, \mathcal{F}_2)$ e $\xi_2: (\Omega_2, \mathcal{F}_2) \rightarrow (X, \Sigma_X)$ funzioni misurabili. Allora la funzione composta $\xi_2 \circ \xi_1: \Omega_1 \rightarrow X$, definita come $(\xi_2 \circ \xi_1)(\omega) = \xi_2(\xi_1(\omega))$, è misurabile (rispetto a $\mathcal{F}_1$ e $\Sigma_X$).
    

#### Funzioni Continue e Misurabilità

Se $h: \mathbb{R}^n \rightarrow \mathbb{R}$ è una funzione continua, allora $h$ è misurabile (rispetto ai Boreliani).

#### Operazioni con Funzioni Misurabili

Siano $\xi_1, \xi_2: \Omega \rightarrow \mathbb{R}$ funzioni misurabili. Allora le seguenti funzioni sono misurabili:

- $\xi_1 + \xi_2$
- $\xi_1 - \xi_2$
- $\xi_1 \cdot \xi_2$
- $\xi^+ = \max{\xi, 0}$ (parte positiva di $\xi$)
- $\xi^- = -\min{\xi, 0}$ (parte negativa di $\xi$)

In generale, se $\psi: \mathbb{R}^2 \rightarrow \mathbb{R}$ è una funzione continua, allora $\psi(\xi_1, \xi_2)$ è misurabile.
#### References



2025-03-02 21:55

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[sbobine]]   [[probabilità]]

### Chiarimenti Preliminari

Il professore inizia rispondendo ad alcune domande degli studenti per chiarire concetti non del tutto chiari dalla lezione precedente.

#### Esempio di eventi Bernoulliani

**Costruzione di uno spazio con eventi Bernoulliani**: L'esempio riguarda la costruzione di uno spazio in cui ci sono eventi bernoulliani. Lo spazio $\Omega$ è definito come le successioni di 0 e 1 di lunghezza $n$. I $p_i$ sono numeri compresi tra 0 e 1, con $i$ che va da 1 a $n$. Non è necessario che la loro somma faccia 1.

**Definizione della misura di probabilità**: L'esercizio consiste nel definire una misura di probabilità $P$ su $\Omega$. Dato un $\omega \in \Omega$ del tipo $\omega = (\omega_1, \omega_2, ..., \omega_n)$, la probabilità di questo evento particolare (il singoletto) è definita come: $$P(\set{\omega})= \prod_{i=1}^{n} p_i^{\omega_i} (1 - p_i)^{1 - \omega_i}$$ L'obiettivo è dimostrare che tutti questi numeri sono maggiori o uguali a 0 e che la loro somma su tutti gli $\omega$ è uguale a 1.

**Esempio con n=2**: Per $n = 2$, bisogna verificare che: $$\sum_{\omega \in \set{0,1}^2} \prod_{i=1}^{2} p_i^{\omega_i} (1 - p_i)^{1 - \omega_i} = 1$$ Questo significa controllare se la somma su $\omega_1$ e $\omega_2$ appartenenti a ${0, 1}$ di $p_1^{\omega_1} (1 - p_1)^{1 - \omega_1} \cdot p_2^{\omega_2} (1 - p_2)^{1 - \omega_2}$ fa 1. Questa somma può essere scritta come il prodotto di somme: $$\sum_{\omega_1 \in \set{0,1}} p_1^{\omega_1} (1 - p_1)^{1 - \omega_1} \cdot \sum_{\omega_2 \in \set{0,1}} p_2^{\omega_2} (1 - p_2)^{1 - \omega_2}$$ Ogni blocco della somma fa 1, quindi il risultato è $1 \cdot 1 = 1$.
![[Pasted image 20250302220345.png|500]]

**Attenzione alle notazioni**: Non confondere $P_i$ con $P(\omega_i)$. In questo caso, $P_i$ si riferisce a un parametro per definire la probabilità, non alla probabilità di $\omega$ stesso. In un teorema precedente, quando si aveva uno spazio numerabile, si assegnavano direttamente le probabilità $P_i$ agli elementi $\omega_i$.
![[Pasted image 20250302220551.png|500]]

### Funzioni Misurabili

Il professore spiega che la misurabilità è una proprietà che dipende non solo dalla funzione ma anche dalle sigma algebre sugli spazi di partenza e di arrivo.
![[Pasted image 20250302221422.png|400]]

**Definizione**: Una funzione $\xi: \Omega \rightarrow X$ è misurabile rispetto alle sigma algebre $\mathcal{F}$ su $\Omega$ e $\xi$ su $X$ se per ogni $A \in \xi$, la controimmagine $X^{-1}(A)$ appartiene a $\mathcal{F}$.

**Esempio concreto**: Consideriamo uno spazio di partenza $\Omega = \set{1, 2, 3}$ e uno spazio di arrivo $X = \set{1, 2, 3}$. Definiamo una funzione $f(\omega) = \omega$, cioè $f(1) = 1$, $f(2) = 2$, $f(3) = 3$.

![[Pasted image 20250302221653.png|329]]

- Se $\mathcal{F} = \mathcal{P}(\Omega)$ (l'algebra delle parti di $\Omega$) e $\mathcal{X} = \mathcal{P}(X)$, allora $f$ è misurabile.
    
- Se $\tilde{\mathcal{F}} = \sigma({1, 2})$ (la sigma algebra generata dall'insieme ${1, 2}$) e $\mathcal{X} = \mathcal{P}(X)$, allora $\xi$ non è $\tilde{\mathcal{F}}/\mathcal{X}$ misurabile.
    
    - La sigma algebra $\sigma({1, 2})$ è composta da $\set{\emptyset, {1, 2}, {3}, \Omega}$.
    - Consideriamo l'insieme ${1} \in \xi$. La sua controimmagine è $f^{-1}({1}) = {1}$, che non appartiene a $\mathcal{F}$.
      ![[Pasted image 20250302222153.png|500]]

La spiegazione sulla continuità nei sources verte su due aspetti principali:

1. **Definizione di continuità**
2. **Legame tra continuità e misurabilità**

### Definizione di Continuità

La fonte presenta due definizioni di continuità e si focalizza su quella che è più utile per dimostrare la misurabilità:

- **Continuità per successioni**: Una funzione $H: \mathbb{R}^D \rightarrow \mathbb{R}$ è continua per successioni se, per ogni $x \in \mathbb{R}^D$ e per ogni successione $x_n$ in $\mathbb{R}^D$ convergente a $x$, allora $H(x_n)$ converge a $H(x)$.
- **Continuità tramite controimmagini di aperti**: Una funzione $H: \mathbb{R}^D \rightarrow \mathbb{R}$ è continua se per ogni aperto $A$ di $\mathbb{R}$, la controimmagine $H^{-1}(A)$ è un aperto in $\mathbb{R}^D$.

Il professore indica di **non usare** la definizione di continuità per successioni, ma quella tramite controimmagini di aperti, in quanto più utile ai fini della dimostrazione della misurabilità.
![[Pasted image 20250302222627.png|400]]

### Legame tra Continuità e Misurabilità

Il punto chiave è che **se una funzione è continua, allora è anche misurabile rispetto alle sigma algebre dei Boreliani**. Più precisamente, se $H: \mathbb{R}^D \rightarrow \mathbb{R}$ è continua, allora è Borel-misurabile ![[Pasted image 20250302222724.png|170]]. Questo significa che è misurabile rispetto alla sigma algebra dei Boreliani su $\mathbb{R}^D$ e alla sigma algebra dei Boreliani su $\mathbb{R}$.

#### Dimostrazione

La dimostrazione utilizza un lemma che semplifica la verifica della misurabilità. In particolare, si usa il lemma che afferma che se la sigma algebra generata da una classe $C$ è uguale alla sigma algebra di arrivo, basta verificare che la controimmagine di ogni elemento di $C$ appartiene alla sigma algebra di partenza.
![[Pasted image 20250302222855.png|400]]
I passaggi principali sono:

1. **Si sceglie $C$ come la classe degli aperti di $\mathbb{R}$**. La sigma algebra generata da $C$ è esattamente la sigma algebra dei Boreliani di $\mathbb{R}$.
2. **Si sfrutta la continuità di $H$ per dimostrare che per ogni aperto $A \in C$, la controimmagine $H^{-1}(A)$ è un aperto in $\mathbb{R}^D$**.
3. **Si conclude che $H^{-1}(A)$ appartiene ai Boreliani di $\mathbb{R}^D$**, dato che gli aperti di $\mathbb{R}^D$ sono contenuti nei Boreliani di $\mathbb{R}^D$.
4. **Per il lemma, si conclude che $H$ è misurabile**.![[Pasted image 20250302222724.png|170]]

di, è Borel-misurabile.

### Esempio: Misurabilità della somma di due variabili aleatorie

**Obiettivo**: Dimostrare che se $X_1$ e $X_2$ sono variabili aleatorie misurabili, allora anche la loro somma $X_1 + X_2$ è misurabile.
![[Pasted image 20250302223653.png|600]]
**Passaggi**:

1. **Definizione delle variabili**: Si considerano $X_1$ e $X_2$ definite su uno spazio $\Omega$ e a valori nei Boreliani di $\mathbb{R}$. Entrambe sono misurabili rispetto alle sigma algebre appropriate.
    
2. **Creazione di una funzione vettoriale**: Si crea una funzione $\xi$ che mappa $\omega \in \Omega$ in un vettore $(X_1(\omega), X_2(\omega)) \in \mathbb{R}^2$. Questa funzione è misurabile.
    
3. **Definizione della funzione somma**: Si definisce una funzione $S: \mathbb{R}^2 \rightarrow \mathbb{R}$ tale che $S(x, y) = x + y$. Questa funzione è la somma delle due componenti ed è continua.
    
4. **Composizione delle funzioni**: Si considera la composizione $S(X_1(\omega), X_2(\omega)) = X_1(\omega) + X_2(\omega)$. Questa è la somma delle due variabili aleatorie.
    
5. **Applicazione dei criteri di misurabilità**:
    
    - Le funzioni continue sono Borel-misurabili. Quindi $S$ è misurabile.
    - Se si hanno due variabili aleatorie misurabili, la funzione che le impacchetta in un vettore è congiuntamente misurabile.
    - La composizione di funzioni misurabili è misurabile.
6. **Conclusione**: Mettendo insieme questi tre ingredienti, si conclude che la somma $X_1 + X_2$ è misurabile.
    

In sintesi, l'esempio mostra come, sfruttando la continuità della somma e la misurabilità delle variabili aleatorie componenti, si possa dimostrare che la somma di due variabili aleatorie è ancora una variabile aleatoria misurabile.

#### Utilità

Questo risultato è utile perché permette di stabilire facilmente la misurabilità di molte funzioni, semplicemente verificandone la continuità. Inoltre, la composizione di funzioni misurabili è misurabile. Perciò, combinando funzioni continue e variabili aleatorie misurabili, si possono costruire nuove variabili aleatorie misurabili.

Ecco la spiegazione del professore riguardo alle flashcard, integrata con i dettagli matematici, gli esempi e gli esercizi, formattata per chiarezza e leggibilità:

### Funzione indicatrice

Consideriamo uno spazio $\Omega, \mathcal{F}$ , considero $A \in \mathcal{F}$ e introduciamo la seguente funzione:
![[Pasted image 20250302224337.png|250]]
- Ad ogni $\omega \in \Omega$ associamo:
    - 0 se $\omega \notin A$
    - 1 se $\omega \in A$, dove $A \in \mathcal{F}$

Questa funzione è chiamata **indicatrice** e si indica con diverse notazioni come $I$, $1_A$ o $I_A$. In termini probabilistici, questa funzione indica se un evento si è verificato (1) o meno (0).

#### Misurabilità della funzione indicatrice

La funzione indicatrice assume valori in $[0, 1]$, quindi possiamo considerarla a valori reali. 
![[Pasted image 20250302224419.png|239]]Per verificare se è misurabile, dobbiamo analizzare la controimmagine di un evento che sta in $\mathbb{R}$.

Consideriamo $B \subseteq \mathbb{R}$. Ci sono quattro casi possibili per la controimmagine di $B$:

- Se $B$ contiene 1 ma non 0, allora $I_A^{-1}(B) = A$
- Se $B$ contiene 0 ma non 1, allora $I_A^{-1}(B) = A^c$ (complementare di A)
- Se $B$ non contiene né 0 né 1, allora $I_A^{-1}(B) = \emptyset$ (insieme vuoto)
- Se $B$ contiene sia 0 che 1, allora $I_A^{-1}(B) = \Omega$

Poiché $A \in \mathcal{F}$, anche $A^c \in \mathcal{F}$, e $\emptyset, \Omega \in \mathcal{F}$ (perché $\mathcal{F}$ è una $\sigma$-algebra). Quindi, la controimmagine di qualsiasi insieme $B$ è un evento che sta in $\mathcal{F}$, dimostrando che la funzione indicatrice è misurabile.

La più piccola $\sigma$-algebra su $\Omega$ per cui questa funzione è misurabile è $\sigma(A)$, la $\sigma$-algebra generata da $A$.

### Funzioni semplici

Prendiamo $A_1, \dots, A_n \in \mathcal{F}$ e $c_1, \dots, c_M \in \mathbb{R}$ (numeri fissi). La funzione: $$\omega \rightarrow \sum_{i=1}^M c_i I_{A_i}(\omega)$$ è misurabile. Se i $c_i$ sono tutti uguali a 1, discende dal fatto che la somma di funzioni misurabili è misurabile. In generale, $c_i \cdot I_{A_i}$ è misurabile perché il prodotto di una costante per una funzione misurabile è misurabile (funzione continua di funzioni misurabili è misurabile), e quindi la somma di funzioni misurabili è misurabile.

Queste funzioni si chiamano **funzioni semplici** e assumono solo un numero finito di valori su $\Omega$, anche se $\Omega$ non è numerabile.

### Limite di funzioni misurabili
![[Pasted image 20250302225152.png|500]]
Siano $X_n : \Omega \to \mathbb{R}$ funzioni misurabili. Se esiste il limite: $$X(\omega) = \lim_{n \to \infty} X_n(\omega) \quad \forall \omega \in \Omega$$ allora $X$ è misurabile rispetto alla $\sigma$-algebra in gioco, $\mathcal{F}$. In altre parole, se una funzione può essere approssimata puntualmente da una successione di funzioni misurabili, allora questa funzione è misurabile.

Se il limite non esiste, si possono usare il limite superiore e il limite inferiore, ma è necessario conoscerne la definizione.


___


### Proprietà delle Funzioni e Misurabilità

#### Introduzione alle Sigma Algebre e Spazi di Misura

Il professore inizia sottolineando l'importanza di **separare le sigma algebre dagli insiemi** e di come si applichino le sigma algebre per parlare di misurabilità. Introduce la notazione standard:

- Ω (Omega): spazio di partenza
- $\mathcal{X}$: spazio di arrivo
- $\mathcal{F}$ (F): sigma algebra su Omega
- $\xi$ (Xi): sigma algebra su X
- X: funzione da Ω a X

Viene ribadito che queste sono convenzioni di notazione e che la lettera $\xi$ è usata per sottolineare che tutto dipende dalla funzione ξ (xi), da omega, da $\mathcal{X}$ e dalle sigma algebre.
![[Pasted image 20250304080104.png]]
#### Misura di Probabilità

Successivamente, viene introdotta una misura di probabilità P sullo spazio Ω:

- (Ω, ℱ, P): spazio di probabilità

Questa notazione indica che $\xi$ è una funzione definita da Ω in X**, con ℱ su Ω, 𝒳 su $\chi$ e P su ℱ.

#### Variabili Aleatorie

Si introduce la notazione con la lettera X per indicare una funzione misurabile quando lo spazio di arrivo è ℝ.

- **Variabili aleatorie**: funzioni misurabili con spazio di arrivo in ℝ
- **Vettori aleatori**: funzioni misurabili con spazio di arrivo in ℝ^D, con i boreliani di ℝ^D
  ![[Pasted image 20250303150157.png]]

La differenza fondamentale è che, parlando di funzioni misurabili, si hanno due spazi, una funzione e due sigma algebre. Invece, per le variabili aleatorie, si hanno due spazi, due sigma algebre e una misura di probabilità sullo spazio di partenza. Nel caso di variabili aleatorie a valori reali o vettori aleatori, lo spazio di arrivo è ℝ o ℝ^D, con le sigma algebre d'arrivo che sono i boreliani di ℝ o ℝ^D, e una misura di probabilità.

#### Esempio del Dado

Viene ripreso l'esempio del dado per illustrare i concetti:

- Ω = {1, 2, 3, 4, 5, 6}
- X = {0, 1} (0 per dispari, 1 per pari) 
- ℱ = algebra delle parti di Ω
- P(ω) = 1/6 per ogni ω ∈ Ω
- ![[Pasted image 20250304080308.png]]

La variabile aleatoria X vale 0 se ω ∈ {1, 3, 5} e 1 se ω ∈ {2, 4, 6}.
![[Pasted image 20250304080237.png]]
La probabilità che esca pari è P(X = 1) = 1/2, e la probabilità che esca dispari è P(X = 0) = 1/2.
![[Pasted image 20250304080517.png]]
Questo esempio mostra come si possano dare valutazioni di probabilità a qualcosa che sta nello spazio di arrivo.

### Legge Immagine (o Distribuzione Indotta)

**Definizione di Legge Immagine** Dato uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ e una variabile aleatoria $X : (\Omega, \mathcal{F}) \to ({\mathbb{R}}^D, \mathcal{B}({\mathbb{R}}^D)$,![[Pasted image 20250304080731.png]]
la legge immagine (o distribuzione immagine) di $X$, denotata come $P_X$,
 è una misura di probabilità definita su $({\mathbb{R}}^D, \mathcal{B}({\mathbb{R}}^D)$ tale che $P_X(A) = P(X^{-1}(A))$ per ogni $A \in \mathcal{B}({\mathbb{R}}^D)'$.
 
 In altre parole, la probabilità che la variabile aleatoria $X$ assuma un valore in un insieme $A$ è uguale alla probabilità che l'evento $X^{-1}(A)$ si verifichi nello spazio di probabilità originale.
![[Pasted image 20250304134911.png]]
![[Pasted image 20250304135233.png]]
La notazione per la legge immagine è menzionata nella fonte "lezione":

- Data una variabile aleatoria $X$, la sua legge immagine è denotata come $P_X$.
- $P_X(A) = P({\omega \in \Omega : X(\omega) \in A})$.
- Equivalentemente, si può scrivere $P(X \in A)$. Questo significa che **la probabilità che $X$ appartenga all'insieme $A$ è la legge immagine di $X$ applicata all'insieme $A$**.

- **Formalizzazione della Legge Immagine:** La legge immagine $P_X$ è definita come $P_X(A) = P({\omega \in \Omega : X(\omega) \in A})$ per ogni $A \in \mathcal{F}'$.
- **Somma su insiemi disgiunti:** Se $A = \bigcup_{n=1}^{\infty} A_n$, dove gli $A_n$ sono insiemi disgiunti, allora $P_X(A) = \sum_{n=1}^{\infty} P({\omega : X(\omega) \in A_n})$.

#### Misura di Probabilità

1. **Non-negatività:** $P_X(A) \geq 0$ per ogni $A$.
2. **Probabilità dello spazio totale:** $P_X(\mathbb{R}^D) = 1$.
3. **Additività completa:** Per ogni successione di insiemi $A_n$ incompatibili (cioè disgiunti), $P_X(\bigcup_{n=1}^{\infty} A_n) = \sum_{n=1}^{\infty} P_X(A_n)$.

Ecco i passaggi della dimostrazione forniti in "lezione":

1. **Positività**: $P_X(A)$ è una probabilità, quindi per definizione è maggiore o uguale a zero.
2. **Probabilità dello spazio totale**: $P_X(\mathbb{R}^D) = 1$ perché $X$ assume valori in $\mathbb{R}^D$. Ciò significa che la probabilità che $X$ assuma un valore all'interno dello spazio totale è pari a 1.
3. **Additività completa**:
    - $P_X(\bigcup_{n=1}^{\infty} A_n) = P({\omega : X(\omega) \in \bigcup_{n=1}^{\infty} A_n})$
    - $= P(\bigcup_{n=1}^{\infty} \set{\omega : X(\omega) \in A_n})$
    - $= \sum_{n=1}^{\infty} P(\set{\omega : X(\omega) \in A_n})$ (perché gli $A_n$ sono disgiunti)
    - $= \sum_{n=1}^{\infty} P_X(A_n)$

Quindi, $P_X$ soddisfa tutti gli assiomi di una misura di probabilità.

#### Passaggi della Dimostrazione

1. **Positività**: P_X(A) è una probabilità, quindi è maggiore o uguale a zero.
2. **Probabilità dello spazio totale**: P_X(ℝ^D) = 1 perché X assume valori in ℝ^D.
3. **Additività completa**:
    - $P_X(\bigcup_{n=1}^{\infty} A_n) = P({\omega : X(\omega) \in \bigcup_{n=1}^{\infty} A_n})$
    - $= P(\bigcup_{n=1}^{\infty} {\omega : X(\omega) \in A_n})$
    - $= \sum_{n=1}^{\infty} P({\omega : X(\omega) \in A_n})$ (perché gli A_n sono disgiunti)
    - $= \sum_{n=1}^{\infty} P_X(A_n)$

**Importanza Concettuale**

si sottolinea **l'importanza fondamentale della legge immagine nella costruzione di modelli probabilistici**. Spesso, nella pratica, si ha un modello probabilistico in mente, ma non si ha accesso diretto allo spazio di partenza $\Omega$. Invece, si osserva l'esperimento nello spazio di arrivo, cioè nello spazio dei valori che la variabile aleatoria può assumere.

La legge immagine consente di **trasportare la probabilità dallo spazio originale $\Omega$ allo spazio dei valori della variabile aleatoria**, rendendo possibile lavorare direttamente con la distribuzione dei risultati osservabili.
### Funzioni di Ripartizione

aleatoria reale**. In questo caso, la variabile aleatoria $X$ è una funzione misurabile da uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ all'insieme dei numeri reali $(\mathbb{R}, \mathcal{B}(\mathbb{R}),P_x$), dove $P_x$ è la legge immagine su $\mathcal{B}(\mathbb{R})$ è la $\sigma$-algebra dei Boreliani di $\mathbb{R}$.
#### Definizione formale

Il professore introduce la **funzione di ripartizione**, denotandola tipicamente con la lettera grande $F$, come una funzione da $\mathbb{R}$ a valori in $[0,1]$ . Formalmente:

$F: \mathbb{R} \rightarrow [0,1]$

Una funzione di ripartizione deve soddisfare le seguenti proprietà:

1. **Monotona non decrescente:** $F$ è monotona non decrescente. Questo significa che se $x_1 < x_2$, allora $F(x_1) \leq F(x_2)$.
    
2. **Limiti agli estremi:**
    
    - $\lim_{x \to -\infty} F(x) = 0$
    - $\lim_{x \to +\infty} F(x) = 1$
3. **Continuità da destra:** $F$ è continua da destra. Questo significa che per ogni $x_0 \in \mathbb{R}$:
    
    $\lim_{x \to x_0^+} F(x) = F(x_0)$
    
    ovvero, per ogni $x_0 \in \mathbb{R}$, per ogni successione $x_n \to x_0$ con $x_n > x_0$, si ha $\lim_{n \to \infty} F(x_n) = F(x_0)$. Il professore sottolinea che, pur potendo avere dei punti di discontinuità, la funzione è continua da destra in ogni punto.

#### Legame tra Misure di Probabilità e Funzioni di Ripartizione

Il professore introduce un teorema fondamentale che collega le misure di probabilità sui Boreliani di $\mathbb{R}$ e le funzioni di ripartizione.

- **Teorema:**
    - Data una misura di probabilità $P$ sui Boreliani di $\mathbb{R}$, è possibile definire una funzione $F_P(x)$ come:
        
        $F_P(x) = P((-\infty, x])$
        
        Questa funzione $F_P(x)$ è una funzione di ripartizione nel senso definito in precedenza.
        
    - Viceversa, per ogni  funzione di ripartizione $F(x)$, esiste una **unica** misura di probabilità $P$ sui Boreliani di $\mathbb{R}$ tale che:
        
        $P((-\infty, x]) = F(x)$
        

Questo teorema stabilisce una corrispondenza biunivoca tra le misure di probabilità sui Boreliani di $\mathbb{R}$ e le funzioni di ripartizione. In altre parole, ogni funzione di ripartizione definisce univocamente una misura di probabilità e viceversa.

#### Esempi di Funzioni di Ripartizione

Il professore presenta tre esempi specifici di funzioni di ripartizione per illustrare le proprietà sopra descritte:

1. **Funzione lineare a tratti:**
    ![[Pasted image 20250304142001.png]]
    Una funzione definita come 0 fino a un certo punto, poi sale linearmente come una retta, e infine vale 1. Questa funzione è continua, quindi anche continua da destra, ed è monotona.
    
2. **Funzione esponenziale:**
    ![[Pasted image 20250304142010.png]]
    $F(x) = \begin{cases} 0, & \text{se } x < 0 \\ 1 - e^{-\lambda x}, & \text{se } x \geq 0 \end{cases}$
    
    dove $\lambda > 0$. Il professore osserva che questa funzione è continua (e quindi continua da destra) e i limiti agli estremi sono rispettati. Per $x \rightarrow -\infty$ si ha che $F(x) \rightarrow 0$. Per $x \rightarrow +\infty$ si ha che $F(x) \rightarrow 1$.
    
3. **Funzione a gradini:**
    ![[Pasted image 20250304142020.png]]
    $F(x) = \begin{cases} 0, & \text{se } x < 0 \\ 1/2, & \text{se } 0 \leq x < 2 \ 1, & \text{se } x \geq 2 \end{cases}$ 
    Questa funzione è un esempio di funzione di ripartizione **discontinua**. È costante a tratti e ha dei salti in $x=0$ e $x=2$. Tuttavia, è continua da destra in ogni punto.

#### Esercizio

Calcolare la probabilità di intervalli dati gli esempi di funzioni di ripartizione.
## prob-lez07

#### References
[[Appunti Prob-Lez07.pdf]]


2025-03-03 15:26

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

Tags:[[sbobine]] [[probabilità]]


## Ripasso di Concetti Fondamentali: Sigma Algebra e Funzione di Ripartizione

### Proprietà della Sigma Algebra: Unione e Intersezione

Il professore ha inizialmente chiarito una proprietà fondamentale delle **sigma algebre**. Se si hanno una sequenza di insiemi $A_1, A_2, ..., A_n$ che appartengono a una data sigma algebra, allora non solo la loro **unione** ($\bigcup_{i=1}^{n} A_i$) appartiene alla sigma algebra, ma anche la loro **intersezione** ($\bigcap_{i=1}^{n} A_i$) appartiene alla sigma algebra.

Questa seconda affermazione, relativa all'intersezione, non viene esplicitamente inclusa tra gli assiomi che definiscono una sigma algebra, ma è una **conseguenza** di tali assiomi. Per dimostrarlo, si può utilizzare il fatto che se un insieme $B$ appartiene alla sigma algebra, allora anche il suo **complementare** $B^c$ appartiene alla sigma algebra. Inoltre, l'unione di insiemi appartenenti alla sigma algebra è anch'essa un elemento della sigma algebra.

La dimostrazione si basa sull'applicazione delle leggi di De Morgan. Consideriamo l'intersezione di una sequenza di insiemi $A_i$ appartenenti alla sigma algebra: $\bigcap_{i=1}^{n} A_i$. Possiamo riscrivere questa intersezione come il complementare dell'unione dei complementari:

$\bigcap_{i=1}^{n} A_i = (\bigcup_{i=1}^{n} A_i^c)^c$

Poiché ogni $A_i$ appartiene alla sigma algebra, anche il suo complementare $A_i^c$ appartiene alla sigma algebra per definizione di sigma algebra. Di conseguenza, l'unione dei complementari $\bigcup_{i=1}^{n} A_i^c$ appartiene anch'essa alla sigma algebra. Infine, il complementare di questa unione, $(\bigcup_{i=1}^{n} A_i^c)^c$, che è uguale all'intersezione originale, appartiene anch'esso alla sigma algebra. Il professore ha suggerito di svolgere questa dimostrazione come **esercizio**.

### Ripasso di Calcolo Combinatorio nell'Esercitazione

Il professore ha annunciato che l'esercitazione successiva avrebbe riguardato un **ripasso di calcolo combinatorio** e del suo utilizzo nei problemi elementari di conteggio legati alla **probabilità discreta su insiemi finiti**. Ha sottolineato l'importanza di queste esercitazioni, pur precisando che la parte combinatorica del corso sarebbe stata abbastanza minimale.

### Funzione di Ripartizione per Misure di Probabilità su $\mathbb{R}$

#### Definizione e Collegamento con la Misura di Probabilità

Il professore ha ripreso il concetto di **funzione di ripartizione** per descrivere le misure di probabilità sull'insieme dei numeri reali, $\mathbb{R}$. Ha ricordato l'enunciato fondamentale stabilito nella lezione precedente:

- Se $F$ è una funzione di ripartizione (nel senso definito precedentemente), allora esiste un'**unica** misura di probabilità $P_F$ sui borelliani di $\mathbb{R}$ tale che per ogni $x \in \mathbb{R}$: $P_F((-\infty, x]) = F(x)$.
    
- Viceversa, data una misura di probabilità $P$ sui borelliani di $\mathbb{R}$, la funzione $F(x) = P((-\infty, x])$ è una funzione di ripartizione.
    

#### Proprietà della Funzione di Ripartizione: Dimostrazioni

Il professore ha poi ripreso la dimostrazione di alcune proprietà fondamentali della funzione di ripartizione $F(x) = P((-\infty, x])$, dove $P$ è una misura di probabilità sui borelliani di $\mathbb{R}$.

**1. Monotonia non decrescente:**

Per $x \le y$, l'evento $(-\infty, x]$ è contenuto nell'evento $(-\infty, y]$. Poiché la misura di probabilità $P$ è monotona, si ha:

$P((-\infty, x]) \le P((-\infty, y])$

Dalla definizione di $F(x)$, questo implica che $F(x) \le F(y)$ per $x \le y$. Quindi, $F$ è una **funzione monotona non decrescente**.

**2. Limite a $-\infty$:**

Consideriamo la successione di eventi $A_n = (-\infty, -n]$ per $n \in \mathbb{N}$. Questa è una **successione decrescente** di insiemi, cioè $A_{n+1} \subseteq A_n$ per ogni $n$, e la sua intersezione è l'insieme vuoto: $\bigcap_{n=1}^{\infty} A_n = \emptyset$.

Per la proprietà di **continuità delle misure di probabilità**, abbiamo:

$\lim_{n \to \infty} P(A_n) = P(\bigcap_{n=1}^{\infty} A_n) = P(\emptyset) = 0$

Poiché $P(A_n) = P((-\infty, -n]) = F(-n)$, si ha:

$\lim_{n \to \infty} F(-n) = 0$

Grazie alla **monotonia** di $F$, questo risultato si estende a qualunque successione $x_n$ che tende a $-\infty$, quindi:

$\lim_{x \to -\infty} F(x) = 0$.

**3. Limite a $+\infty$:**

Consideriamo la successione di eventi $B_n = (-\infty, n]$ per $n \in \mathbb{N}$. Questa è una **successione crescente** di insiemi, cioè $B_n \subseteq B_{n+1}$ per ogni $n$, e la sua unione è l'insieme di tutti i numeri reali: $\bigcup_{n=1}^{\infty} B_n = \mathbb{R}$.

Per la proprietà di continuità delle misure di probabilità, abbiamo:

$\lim_{n \to \infty} P(B_n) = P(\bigcup_{n=1}^{\infty} B_n) = P(\mathbb{R}) = 1$

Poiché $P(B_n) = P((-\infty, n]) = F(n)$, si ha:

$\lim_{n \to \infty} F(n) = 1$

Ancora per la **monotonia** di $F$, questo risultato si estende a qualunque successione $x_n$ che tende a $+\infty$, quindi:

$\lim_{x \to +\infty} F(x) = 1$.

**4. Continuità da destra:**

Consideriamo un punto $x \in \mathbb{R}$ e la successione di eventi $C_n = (-\infty, x + \frac{1}{n}]$ per $n \in \mathbb{N}$. Questa è una **successione decrescente** di insiemi, cioè $C_{n+1} \subseteq C_n$ per ogni $n$, e la sua intersezione è l'insieme $(-\infty, x]$: $\bigcap_{n=1}^{\infty} C_n = (-\infty, x]$.

Per la proprietà di continuità delle misure di probabilità, abbiamo:

$\lim_{n \to \infty} P(C_n) = P(\bigcap_{n=1}^{\infty} C_n) = P((-\infty, x])$

Poiché $P(C_n) = P((-\infty, x + \frac{1}{n}]) = F(x + \frac{1}{n})$ e $P((-\infty, x]) = F(x)$, si ha:

$\lim_{n \to \infty} F(x + \frac{1}{n}) = F(x)$

Questo dimostra che $F$ è **continua da destra** in ogni punto $x \in \mathbb{R}$.

Il professore ha menzionato un'osservazione fatta da uno studente riguardo alla continuità da sinistra, spiegando che l'approccio con $x - \frac{1}{n}$ non converge in modo monotono all'insieme desiderato, il che impedisce di applicare direttamente la proprietà di continuità della misura.

### Funzione di Ripartizione di una Variabile Aleatoria

Data una variabile aleatoria reale $X$ definita su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, la **funzione di ripartizione associata a $X$**, indicata con $F_X(x)$, è definita come la probabilità che la variabile aleatoria $X$ assuma un valore minore o uguale a $x$:

$F_X(x) = P({ \omega \in \Omega : X(\omega) \le x }) = P(X \le x)$

Il professore ha osservato che questa probabilità può anche essere interpretata come la probabilità che la **legge immagine** $P_X$ (definita sui borelliani di $\mathbb{R}$) associ all'intervallo $(-\infty, x]$:

$F_X(x) = P_X((-\infty, x])$

Secondo la proposizione precedentemente dimostrata, $F_X(x)$ è effettivamente una **funzione di ripartizione** (monotona non decrescente, con limiti 0 a $-\infty$ e 1 a $+\infty$, e continua da destra). Questo stabilisce un legame fondamentale tra variabili aleatorie e funzioni di ripartizione: ogni variabile aleatoria reale è associata a una specifica funzione di ripartizione che ne descrive la distribuzione di probabilità.

### Estrazione di Informazioni dalla Funzione di Ripartizione

Il professore ha mostrato come estrarre informazioni probabilistiche su una variabile aleatoria $X$, con funzione di ripartizione $F_X(x)$, direttamente dalla funzione stessa.

**1. Probabilità che $X$ sia strettamente maggiore di $x$:**

$P(X > x) = 1 - P(X \le x) = 1 - F_X(x)$.

**2. Probabilità che $X$ appartenga all'intervallo semiaperto $(a, b]$:**

$P(a < X \le b) = P(X \le b) - P(X \le a) = F_X(b) - F_X(a)$.

Questa formula si ottiene considerando l'evento ${X \le b}$ come l'unione disgiunta di ${X \le a}$ e ${a < X \le b}$ e utilizzando la proprietà di additività delle probabilità.

**3. Probabilità che $X$ sia strettamente minore di $x$:**

$P(X < x) = \lim_{y \to x^-} F_X(y) = F_X(x^-)$.

Questa probabilità è data dal limite sinistro della funzione di ripartizione nel punto $x$. Per dimostrarlo, si considera una successione crescente $x_n$ che converge a $x$ da sinistra. Gli eventi ${X \le x_n}$ formano una successione crescente di insiemi la cui unione è ${X < x}$. Per la continuità dal basso delle misure di probabilità, si ha $P(X < x) = \lim_{n \to \infty} P(X \le x_n) = \lim_{n \to \infty} F_X(x_n) = F_X(x^-)$. Questo punto era lasciato come **esercizio**.

**4. Probabilità che $X$ sia uguale a $x$:**

$P(X = x) = P(X \le x) - P(X < x) = F_X(x) - F_X(x^-)$.

La probabilità che $X$ assuma esattamente il valore $x$ è data dalla **discontinuità** (o salto) della funzione di ripartizione nel punto $x$. Se $F_X$ è continua in $x$, allora $P(X = x) = 0$. In particolare, se la funzione di ripartizione è continua ovunque, la probabilità che la variabile aleatoria assuma un valore specifico è sempre zero. Il professore ha sottolineato che questa è una proprietà importante, sebbene a volte controintuitiva, e che sarebbe stata ripresa in seguito.

### Esempi di Funzioni di Ripartizione e Calcolo di Probabilità

Il professore ha ripreso alcuni esempi di funzioni di ripartizione per illustrare come calcolare le probabilità .

**Primo Esempio:**

$F_1(x) = \begin{cases} 0 & x < 0 \\ x & 0 \le x \le 1 \\ 1 & x > 1 \end{cases}$

Questa funzione di ripartizione è continua ovunque . Il professore ha chiesto qual è la probabilità che una variabile aleatoria $X_1$ con questa funzione di ripartizione sia uguale a 3, $P(X_1 = 3)$ . Poiché la funzione è continua in $x=3$, il salto è zero:

$P(X_1 = 3) = F_1(3) - F_1(3^-) = 1 - 1 = 0$ .

Successivamente, ha chiesto la probabilità che $X_1$ sia minore o uguale a 3, $P(X_1 \le 3)$ . Dalla definizione della funzione di ripartizione:

$P(X_1 \le 3) = F_1(3) = 1$ .

Infine, ha chiesto la probabilità che $X_1$ appartenga all'intervallo, $P(0 \le X_1 \le 1)$ . Utilizzando la formula per l'intervallo semiaperto:

$P(0 < X_1 \le 1) = F_1(1) - F_1(0) = 1 - 0 = 1$

Poiché la funzione è continua in 0, $P(X_1 = 0) = F_1(0) - F_1(0^-) = 0 - 0 = 0$. Quindi,

$P(0 \le X_1 \le 1) = P(X_1 = 0) + P(0 < X_1 \le 1) = 0 + 1 = 1$ .

Questo indica che la variabile aleatoria $X_1$ assume valori nell'intervallo  con probabilità 1 .

**Secondo Esempio:**

$F_2(x) = \begin{cases} 0 & x < 0 \ 1/2 & 0 \le x < 2 \ 1 & x \ge 2 \end{cases}$

Questa funzione di ripartizione ha dei **salti** in $x=0$ e $x=2$ . Il professore ha chiesto qual è la probabilità che una variabile aleatoria $X_2$ con questa funzione di ripartizione sia uguale a 0, $P(X_2 = 0)$ . Utilizzando la formula per la probabilità di un singolo punto:

$P(X_2 = 0) = F_2(0) - F_2(0^-) = \frac{1}{2} - 0 = \frac{1}{2}$ .

La probabilità è data dal **salto** della funzione nel punto $x=0$ .

___

Ecco la spiegazione del professore contenuta nel flashcard, presentata in maniera dettagliata e formattata come richiesto:

### Funzione di Ripartizione di una Variabile Aleatoria

#### Definizione e Proprietà Fondamentali

Il professore introduce la **funzione di ripartizione** (o funzione cumulativa di distribuzione), definendola come un oggetto ben definito per qualunque variabile aleatoria. Non è detto che debba necessariamente essere continua né la funzione cumulata di qualche densità, e quindi non necessariamente scrivibile come un integrale.

**Verifica delle Proprietà:** Prima di considerare una funzione come una funzione di ripartizione, è fondamentale controllarne le proprietà. Se una funzione soddisfa tali proprietà, allora descrive completamente la variabile aleatoria o la misura di probabilità indotta.

#### Probabilità Puntuale e Discontinuità

In presenza di discontinuità nella funzione di ripartizione, possiamo calcolare la probabilità che la variabile aleatoria assuma un valore specifico.

**Esempio:** Consideriamo una variabile aleatoria $X_2$ la cui funzione di ripartizione ha un salto in $x=0$. Dal disegno (non fornito, ma descritto a parole), la funzione di ripartizione valutata in $0$ è $1/2$, mentre il limite da sinistra è $0$. Il salto in $0$ misura quindi $1/2$.

La probabilità che $X_2$ sia uguale a $0$ è data dalla differenza tra il valore della funzione di ripartizione in $0$ e il suo limite da sinistra: $P(X_2 = 0) = F_{X_2}(0) - \lim_{x \to 0^-} F_{X_2}(x) = \frac{1}{2} - 0 = \frac{1}{2}$.

Questo esempio illustra come le discontinuità nella funzione di ripartizione corrispondano a probabilità puntuali non nulle.

#### Probabilità di un Intervallo in Termini di Funzione di Ripartizione

Il professore introduce un **esercizio** per esprimere la probabilità che una variabile aleatoria appartenga a un intervallo in termini della sua funzione di ripartizione. Vengono menzionati sia l'intervallo aperto che l'intervallo chiuso.

Per risolvere questo tipo di esercizio, si devono utilizzare le proprietà della funzione di ripartizione e la definizione di probabilità degli eventi, inclusa la continuità lungo successioni monotone di eventi.

#### Esempio di Variabile Aleatoria Uniforme sull'Intervallo 

Viene presentato un esempio di una variabile aleatoria $X$ con **distribuzione uniforme sull'intervallo **. La sua funzione di ripartizione $F_X(x)$ è definita come segue:

$F_X(x) = \begin{cases} 0 & \text{se } x \le 0 \ x & \text{se } 0 < x < 1 \ 1 & \text{se } x \ge 1 \end{cases}$

Per questa variabile aleatoria, la probabilità che $X$ appartenga a un intervallo $[a, b]$ con $0 \le a \le b \le 1$ è data dalla lunghezza dell'intervallo: $P(a \le X \le b) = F_X(b) - F_X(a) = b - a$.

Il professore sottolinea che in questo caso particolare, poiché la funzione di ripartizione è **continua**, la probabilità che $X$ assuma un singolo valore è $0$. Questo implica che per l'intervallo $[a, b]$ all'interno di : $P(a \le X \le b) = P(a < X \le b) = P(a \le X < b) = P(a < X < b) = b - a$.

**Importante:** Il professore avverte che se la funzione di ripartizione **non è continua**, è cruciale prestare attenzione all'uso di minore o uguale ($\le$) e minore stretto ($<$) negli intervalli, poiché ciò può fare la differenza nel calcolo della probabilità.

**Misura di Lebesgue:** Viene osservato che la misura di probabilità associata alla variabile uniforme su  coincide con la **misura di Lebesgue** ristretta all'intervallo .

**Esercizio:** Si chiede come dimostrare che la probabilità che $X$ appartenga a un insieme boreliano $A$ tale che la sua intersezione con  sia l'insieme vuoto ($A \cap = \emptyset$) è zero.

**Soluzione dell'Esercizio:** Se $A \cap = \emptyset$, allora $A$ è contenuto nel complementare di $(0, 1)$, ovvero $A \subseteq (-\infty, 0] \cup [1, +\infty)$. Quindi, la probabilità che $X$ appartenga ad $A$ è minore o uguale alla probabilità che $X$ appartenga a $(-\infty, 0] \cup [1, +\infty)$.

$P(X \in (-\infty, 0] \cup [1, +\infty)) = P(X \le 0) + P(X \ge 1) = F_X(0) + (1 - F_X(1))$.

Dalla definizione di $F_X(x)$, abbiamo $F_X(0) = 0$ e $F_X(1) = 1$. Quindi: $P(X \in (-\infty, 0] \cup [1, +\infty)) = 0 + (1 - 1) = 0$.

Poiché $P(X \in A) \le 0$ e la probabilità è non negativa, ne consegue che $P(X \in A) = 0$.

#### Costruzione di Nuove Variabili Aleatorie tramite Trasformazioni

Il professore introduce l'idea di costruire una nuova variabile aleatoria applicando una **trasformazione** a una variabile aleatoria esistente. Questo è utile sia dal punto di vista modellistico che teorico.

**Esempio 2:** Si parte da una variabile aleatoria $X_1$ distribuita uniformemente su $(0, 1)$, denotato come $X_1 \sim U(0, 1)$. La sua funzione di ripartizione è $F_{X_1}(x) = x$ per $x \in$, $0$ per $x < 0$ e $1$ per $x > 1$ (anche se nel testo viene definita in modo leggermente diverso con $\le 0$ e $\ge 1$, l'essenza è la stessa per la continuità).

Si definisce una nuova variabile aleatoria $X_2 = -\log(X_1)$.

**Considerazioni sul Dominio del Logaritmo:** Il logaritmo è definito solo per numeri positivi. Poiché $X_1$ è uniforme su $(0, 1)$, assume valori positivi con probabilità 1. Più precisamente, $P(X_1 \in (0, 1)) = 1$.

**Proprietà di $X_2$:** Se $X_1(\omega) \in (0, 1)$, allora $-\log(X_1(\omega)) > 0$. Questo accade con probabilità 1, quindi $P(X_2 > 0) = 1$.

**Calcolo della Funzione di Ripartizione di $X_2$:** Si vuole calcolare $F_{X_2}(x) = P(X_2 \le x)$.

$F_{X_2}(x) = P(-\log(X_1) \le x)$

Per risolvere questa probabilità, si considera il caso in cui $x \le 0$ e il caso in cui $x > 0$.

**Caso 1: $x \le 0$** Abbiamo dimostrato che $P(X_2 > 0) = 1$. Quindi, la probabilità che $X_2$ sia minore o uguale a un numero non positivo è $0$: $F_{X_2}(x) = P(X_2 \le x) = 0$ per $x \le 0$ .

**Caso 2: $x > 0$** $P(-\log(X_1) \le x) = P(\log(X_1) \ge -x)$ Esponenziando entrambi i lati (e ricordando che la funzione esponenziale è crescente): $P(X_1 \ge e^{-x})$

Poiché $X_1$ è uniforme su $(0, 1)$, e stiamo considerando $x > 0$, allora $0 < e^{-x} < 1$. La probabilità che $X_1$ sia maggiore o uguale a $e^{-x}$ è data da: $P(X_1 \ge e^{-x}) = 1 - P(X_1 < e^{-x}) = 1 - F_{X_1}(e^{-x})$

Dato che per $0 < y < 1$, $F_{X_1}(y) = y$, abbiamo: $1 - F_{X_1}(e^{-x}) = 1 - e^{-x}$

Quindi, la funzione di ripartizione di $X_2$ è: $F_{X_2}(x) = \begin{cases} 0 & \text{se } x \le 0 \ 1 - e^{-x} & \text{se } x > 0 \end{cases}$

Questa è la funzione di ripartizione di una **variabile aleatoria esponenziale** con parametro $\lambda = 1$.

Il professore conclude sottolineando l'importanza di guardare "in faccia" la variabile aleatoria e la trasformazione prima di eseguire i calcoli, per capire le sue proprietà fondamentali.

___

## Trasformazione di Variabili Aleatorie e Funzione di Ripartizione

### Introduzione: Calcolo della Probabilità di $X^2 \le X$ per $X > 0$

Il professore inizia concentrandosi sul calcolo della probabilità che $X^2$ sia minore o uguale a $X$, dato che una variabile aleatoria $X_1$ è strettamente maggiore di 0. Viene specificato che si restringe l'attenzione al caso $X > 0$ perché la probabilità che $X_1$ appartenga all'intervallo $(0, 1)$ è 1, semplificando l'analisi iniziale.

Si definisce una nuova variabile aleatoria $X_2 = -\log(X_1)$, dove $X_1 \in (0, 1)$. L'obiettivo è calcolare la funzione di ripartizione di $X_2$, $F_{X_2}(x) = P(X_2 \le x)$, conoscendo la funzione di ripartizione di $X_1$, $F_{X_1}(x)$.

### Calcolo della Funzione di Ripartizione di $X_2$ per $x > 0$

Per $x > 0$, si ha: $F_{X_2}(x) = P(X_2 \le x) = P(-\log(X_1) \le x)$.

Manipolando la disuguaglianza: $-\log(X_1) \le x \iff \log(X_1) \ge -x$ $X_1 \ge e^{-x}$.

Quindi, $P(-\log(X_1) \le x) = P(X_1 \ge e^{-x})$.

Il professore sottolinea che l'evento ${-\log(X_1) \le x}$ è **esattamente uguale** all'evento ${X_1 \ge e^{-x}}$ come sottoinsiemi dello spazio campionario $\Omega$.

La probabilità $P(X_1 \ge e^{-x})$ può essere espressa in termini della funzione di ripartizione di $X_1$: $P(X_1 \ge e^{-x}) = 1 - P(X_1 < e^{-x})$.

Poiché $X_1$ è assunta avere una funzione di ripartizione assolutamente continua, la probabilità che $X_1$ sia uguale a un singolo valore è zero, quindi $P(X_1 < e^{-x}) = P(X_1 \le e^{-x}) = F_{X_1}(e^{-x})$.

Pertanto, per $x > 0$: $F_{X_2}(x) = 1 - F_{X_1}(e^{-x})$.

### Caso Specifico: $X_1$ Distribuita Uniformemente in $(0, 1)$

Il professore considera il caso in cui $X_1$ è distribuita uniformemente nell'intervallo $(0, 1)$. In questo caso, la funzione di ripartizione di $X_1$ è: $F_{X_1}(y) = \begin{cases} 0 & \text{se } y < 0 \ y & \text{se } 0 \le y \le 1 \ 1 & \text{se } y > 1 \end{cases}$.

Poiché stiamo considerando $x > 0$, l'argomento di $F_{X_1}$, che è $e^{-x}$, sarà sempre compreso tra 0 e 1 (in quanto $x > 0 \implies e^{-x} \in (0, 1)$).

Quindi, per $x > 0$, $F_{X_1}(e^{-x}) = e^{-x}$.

Sostituendo nell'espressione per $F_{X_2}(x)$, otteniamo per $x > 0$: $F_{X_2}(x) = 1 - e^{-x}$.

### Funzione di Ripartizione Completa di $X_2$

Per completare la definizione della funzione di ripartizione di $X_2$, si considera anche il caso $x \le 0$. $F_{X_2}(x) = P(X_2 \le x) = P(-\log(X_1) \le x)$.

Se $x \le 0$, allora $-\log(X_1) \le x$ implica $\log(X_1) \ge -x \ge 0$, quindi $X_1 \ge e^{-x} \ge 1$. Tuttavia, sappiamo che $X_1 \in (0, 1)$ con probabilità 1. Pertanto, per $x \le 0$, l'evento ${-\log(X_1) \le x}$ ha probabilità 0.

Quindi, la funzione di ripartizione di $X_2$ è: $F_{X_2}(x) = \begin{cases} 0 & \text{se } x \le 0 \ 1 - e^{-x} & \text{se } x > 0 \end{cases}$.

### Verifica delle Proprietà della Funzione di Ripartizione

Il professore verifica che la funzione $F_{X_2}(x)$ ottenuta soddisfa le proprietà di una funzione di ripartizione:

- **Continuità da destra:** La funzione è continua per $x < 0$ e per $x > 0$. In $x = 0$, $\lim_{h \to 0^+} F_{X_2}(0 + h) = 1 - e^0 = 1 - 1 = 0 = F_{X_2}(0)$. Quindi è continua da destra.
- **Monotona non decrescente:** Per $x \le 0$, la funzione è costante a 0. Per $x > 0$, la derivata è $\frac{d}{dx}(1 - e^{-x}) = e^{-x} > 0$, quindi è strettamente crescente.
- **Limiti agli estremi:**
    - $\lim_{x \to -\infty} F_{X_2}(x) = \lim_{x \to -\infty} 0 = 0$.
    - $\lim_{x \to +\infty} F_{X_2}(x) = \lim_{x \to +\infty} (1 - e^{-x}) = 1 - 0 = 1$.

Queste verifiche confermano che $F_{X_2}(x)$ è una funzione di ripartizione valida.

### Errore Tipico da Evitare

Il professore avverte di un **errore comune**: dimenticare la parte della funzione di ripartizione per $x \le 0$ e scrivere semplicemente $F_{X_2}(x) = 1 - e^{-x}$ per ogni $x$. Questo porterebbe a risultati errati nel calcolo delle probabilità, specialmente per valori negativi di $x$.

### Definizione di Variabile Aleatoria con Legge Esponenziale

La variabile aleatoria $X_2$ la cui funzione di ripartizione è $F_{X_2}(x) = \begin{cases} 0 & \text{se } x \le 0 \\ 1 - e^{-x} & \text{se } x > 0 \end{cases}$ è detta avere una **legge esponenziale (o esponenziale negativa)**.

Questo esempio illustra la **trasformazione di una variabile aleatoria**: a partire dalla legge di $X_1$, si è derivata la legge della variabile trasformata $X_2 = -\log(X_1)$. Questo tipo di trasformazioni è frequente in probabilità.

### Corollario sull'Unicità delle Misure di Probabilità

Il professore introduce un corollario basato sul criterio di unicità delle misure di probabilità:

Se due variabili aleatorie $X_1$ e $X_2$ definite sullo stesso spazio di probabilità $(\Omega, \mathcal{F}, P)$ hanno la stessa funzione di ripartizione, cioè $F_{X_1}(x) = F_{X_2}(x)$ per ogni $x \in \mathbb{R}$, allora le loro leggi (misure immagine) sono uguali: $P(X_1 \in A) = P(X_2 \in A)$ per ogni insieme boreliano $A$.

Questo deriva dal fatto che gli intervalli $(-\infty, x]$ formano una $\pi$-classe che genera la $\sigma$-algebra dei boreliani. Due misure di probabilità che coincidono su una $\pi$-classe che genera la $\sigma$-algebra, coincidono su tutta la $\sigma$-algebra.

### Importanza del Concetto di Legge di una Variabile Aleatoria

Avere la stessa legge non implica che due variabili aleatorie siano uguali con probabilità 1, anche se definite sullo stesso spazio di probabilità.

**Esempio:** Sia $\Omega = {0, 1}$ con la $\sigma$-algebra di tutte le parti e una misura di probabilità $P({0}) = 1/2$, $P({1}) = 1/2$. Definiamo due variabili aleatorie: $X_1(\omega) = \omega$ $X_2(\omega) = 1 - \omega$

La probabilità che $X_1 = X_2$ è $P({\omega \in {0, 1} \mid \omega = 1 - \omega}) = P(\emptyset) = 0$. Quindi $X_1$ e $X_2$ sono diverse con probabilità 1.

Tuttavia, calcoliamo le loro funzioni di ripartizione:

Per $F_{X_1}(x)$:

- Se $x < 0$, $P(X_1 \le x) = P(\emptyset) = 0$.
- Se $0 \le x < 1$, $P(X_1 \le x) = P({0}) = 1/2$.
- Se $x \ge 1$, $P(X_1 \le x) = P({0, 1}) = 1$.

Per $F_{X_2}(x)$:

- Se $x < 0$, $P(X_2 \le x) = P(\emptyset) = 0$.
- Se $0 \le x < 1$, $P(X_2 \le x) = P({1}) = 1/2$.
- Se $x \ge 1$, $P(X_2 \le x) = P({0, 1}) = 1$.

Quindi, $F_{X_1}(x) = F_{X_2}(x)$ per ogni $x \in \mathbb{R}$, il che significa che $X_1$ e $X_2$ hanno la stessa legge, anche se non sono uguali con probabilità 1.

### Costruzione di una Variabile Aleatoria Data una Funzione di Ripartizione

Se $F$ è una funzione di ripartizione, esiste uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ e una variabile aleatoria $X: \Omega \to \mathbb{R}$ tale che la funzione di ripartizione di $X$, $F_X(x) = P(X \le x)$, è uguale a $F(x)$ per ogni $x \in \mathbb{R}$.

Il professore sottolinea che lo spazio di probabilità e la variabile aleatoria non sono unici. L'esempio di $X_1$ e $X_2$ sopra mostra due variabili aleatorie diverse definite sullo stesso spazio di probabilità che hanno la stessa funzione di ripartizione (e quindi la stessa legge).

Questo teorema garantisce che per ogni funzione che soddisfa le proprietà di una funzione di ripartizione, possiamo sempre immaginare che essa descriva la distribuzione di probabilità di qualche variabile aleatoria. Ad esempio, la funzione di ripartizione esponenziale trovata in precedenza corrisponde alla legge di una variabile aleatoria esponenziale.
#### References
[[paste/appunti prob-lez08.pdf]]
[[Appunti Prob- lez08'.pdf]]


2025-03-06 15:06

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine]] [[probabilità]]

## prob-lez09

___
## prob-lez09

# Spiegazione del Professore su Argomenti di Probabilità

## Chiarimento sulla Dimostrazione del Teorema di Bayes

Il professore inizia la lezione rispondendo a domande di studenti riguardo alla dimostrazione del **Teorema di Bayes**. Viene chiarito che la dimostrazione è stata effettivamente presentata durante la lezione precedente, quando si è discusso del teorema di Bayes per eventi.

### Dimostrazione per Eventi e Forma Ridotta

La dimostrazione si basa sulla scrittura del teorema di Bayes nella sua **forma ridotta** per due eventi, $H$ e $E$. Questa dimostrazione consiste nello scrivere la formula stessa del teorema.

### Applicazione della Proprietà delle Probabilità Totali

Il secondo passaggio della dimostrazione implica l'applicazione di quella che è stata definita la **proprietà delle probabilità totali** o di disintegrazione al denominatore della formula di Bayes.

Se $H_i$ costituisce una **partizione** dello spazio campionario, allora la probabilità di un evento $E$ può essere scritta come la somma delle probabilità condizionate di $E$ dato $H_i$, moltiplicate per le probabilità di $H_i$:

$P(E) = \sum_{i} P(E|H_i) P(H_i)$

Il professore sottolinea che la dimostrazione del teorema di Bayes è intrinsecamente legata alla forma delle probabilità totali.

## Funzione di Ripartizione

Successivamente, l'argomento si sposta sulla **funzione di ripartizione**, associata a una variabile aleatoria. La funzione di ripartizione svolge un ruolo cruciale nella descrizione di tutte le misure di probabilità su $\mathbb{R}$ e delle leggi di qualunque variabile aleatoria a valori reali.

### Corrispondenza Biunivoca con le Misure di Probabilità
![[Pasted image 20250402124934.png]]
Esiste una **corrispondenza biunivoca** tra le funzioni di ripartizione e le misure di probabilità sui boreliani di $\mathbb{R}$. Data una funzione di ripartizione, è possibile costruire uno spazio di probabilità e una variabile aleatoria tale che la funzione di ripartizione di questa variabile aleatoria coincida con la funzione di ripartizione data.

### Dimostrazione dell'Esistenza di una Variabile Aleatoria con Data Funzione di Ripartizione (Dimostrazione Facoltativa)

Il professore presenta una **dimostrazione facoltativa** di questo fatto, sottolineando che mette in luce un aspetto importante, anche se a prima vista può sembrare tautologico.

#### Costruzione Canonica

La costruzione canonica proposta è la seguente:

- Si prende lo **spazio di partenza $\Omega$ uguale allo spazio d'arrivo $\mathbb{R}$**.
- Si definisce la **variabile aleatoria $X$ come la funzione identità** su $\mathbb{R}$, ovvero $X(\omega) = \omega$ per ogni $\omega \in \mathbb{R}$. Questa funzione è (chiaramente) misurabile.
- Si sceglie una **misura di probabilità $P$ su $\Omega = \mathbb{R}$ (sui boreliani di $\mathbb{R}$)**.

#### Scelta della Misura di Probabilità $P_F$

Si assume l'esistenza di una misura $P_F$ tale che le probabilità delle semirette $(-\infty, x]$ coincidano con la funzione di ripartizione $F(x)$ data. Questo fatto è basato su una proposizione vista precedentemente.

$P_F((-\infty, x]) = F(x)$

#### Verifica della Funzione di Ripartizione di $X$

La funzione di ripartizione della variabile aleatoria $X$ (l'identità) è data da:

$F_X(x) = P\set{ \omega : X \le x} = P\set{\omega \in \mathbb{R} : \omega \le x}$

Poiché $P$ è scelta come $P_F$, si ha:

$F_X(x) = P_F((-\infty, x]) = F(x)$

Questo dimostra che esiste una variabile aleatoria (in questo caso l'identità su $\mathbb{R}$ con la misura $P_F$) la cui funzione di ripartizione è la funzione $F$ data. Il professore ribadisce che questa non è l'unica possibile costruzione.

## Funzione Quantile (Inversa Generalizzata)

Il professore introduce la **funzione quantile**, o **inversa generalizzata**, di una funzione di ripartizione $F$. Questa funzione, indicata come $F^{-}(u)$, è definita come:

$F^{-}(u) = \inf \set{x \in \mathbb{R} : F(x) \ge u }, \quad u \in (0, 1)$

### Caso di Funzione di Ripartizione Invertibile

In particolare, se la funzione di ripartizione $F$ è **strettamente monotona (e quindi invertibile)**, l'inversa generalizzata coincide con la funzione inversa usuale $F^{-1}(u)$.

$F^{-}(u) = F^{-1}(u)$

### Interpretazione Intuitiva
![[Pasted image 20250402145547.png]]
La funzione quantile $F^{-1}(u)$ (nel caso invertibile) rappresenta quel valore $x$ tale per cui la probabilità che la variabile aleatoria sia minore o uguale a $x$ è uguale a $u$:

$P(X \le F^{-1}(u)) = F(F^{-1}(u)) = u$

In termini statistici, $F^{-1}(1/2)$ corrisponde alla **mediana**, ovvero quel valore che divide la distribuzione di probabilità in due parti uguali. Per un quantile di ordine $p$, $F^{-1}(p)$ è il valore al di sotto del quale cade una proporzione $p$ dei dati.

### Generalizzazione per Funzioni Non Invertibili
![[Pasted image 20250402145645.png]]
![[Pasted image 20250402150140.png]]
La definizione con l'infimum serve a generalizzare il concetto di inversa anche a funzioni di ripartizione che non sono strettamente monotone, ovvero che presentano tratti piatti o salti. In questi casi, per un dato valore di $u$, potrebbe non esistere un unico $x$ tale che $F(x) = u$. La definizione tramite l'infimum seleziona il più piccolo di tali $x$ (o il punto iniziale del tratto in cui $F(x) \ge u$).

## Costruzione di una Variabile Aleatoria con Legge Arbitraria a Partire da una Variabile Uniforme

Il professore presenta un metodo per costruire una variabile aleatoria con una **legge di probabilità arbitraria**, purché si sappia costruire una variabile aleatoria con **legge uniforme sull'intervallo (0, 1)**.

### Teorema di Trasformazione Inversa ?

Sia $F$ una funzione di ripartizione e sia $U$ una variabile aleatoria con legge uniforme su $(0, 1)$ definita su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$. Si definisce una nuova variabile aleatoria $X$ come:

$X = F^{-}(U)$
![[Pasted image 20250402150302.png]]
![[Pasted image 20250402150306.png]]
dove $F^{-}$ è la funzione quantile (inversa generalizzata) di $F$.

### Proprietà Fondamentale

La proprietà fondamentale di questa costruzione è che la variabile aleatoria $X$ così definita ha proprio $F$ come sua funzione di ripartizione:

$P(X \le x) = F(x)$

### Dimostrazione nel Caso di $F$ Invertibile
![[Pasted image 20250402150645.png]]
Il professore fornisce la dimostrazione di questa proprietà nel caso in cui la funzione di ripartizione $F$ sia **strettamente monotona e quindi invertibile**. In questo caso, $F^{-}(u) = F^{-1}(u)$.

$P(X \le x) = P(F^{-1}(U) \le x)$

Poiché $F$ è strettamente monotona crescente, anche la sua inversa $F^{-1}$ è strettamente monotona crescente. Quindi l'ineguaglianza $F^{-1}(U) \le x$ è equivalente a $U \le F(x)$:

$P(F^{-1}(U) \le x) = P(U \le F(x))$

Dato che $U$ ha una distribuzione uniforme su $(0, 1)$, la sua funzione di ripartizione $F_U(u)$ è data da:
![[Pasted image 20250402152803.png]]

$F_U(u) = P(U \le u) = \begin{cases} 0 & \text{se } u < 0 \\ u & \text{se } 0 \le u \le 1 \\ 1 & \text{se } u > 1 \end{cases}$

Poiché $F(x)$ è sempre un valore compreso tra 0 e 1, si ha:

$P(U \le F(x)) = F_U(F(x)) = F(x)$

Quindi, $P(X \le x) = F(x)$, dimostrando che la variabile aleatoria $X = F^{-1}(U)$ ha funzione di ripartizione $F$.

### Collegamento con la Derivazione della Legge Esponenziale

Il professore fa notare che il procedimento utilizzato per derivare la legge esponenziale a partire da una uniforme è un caso particolare di questa trasformazione inversa.

Esercizio menzionato: Verificare che l'esercizio fatto per introdurre la legge esponenziale a partire dall'uniforme è esattamente questo conto nel caso particolare di una specifica $F$.

___


### Variabili Aleatorie Discrete

#### Definizione di Funzione di Ripartizione (Caso Generale)

Si consideri una variabile aleatoria $U$. La **funzione di ripartizione** di $U$, calcolata in un punto $f(x)$ (dove $f(x)$ è un numero), è definita come la probabilità che la variabile aleatoria $U$ assuma un valore minore o uguale a $f(x)$. Formalmente:

$P(U \le f(x)) = F_U(f(x))$

Dove $F_U$ è la funzione di ripartizione di $U$. Il valore $f(x)$ è sempre compreso tra 0 e 1, poiché è il valore di una funzione di ripartizione.

Nel caso di una variabile aleatoria $U$ con distribuzione uniforme sull'intervallo $(0, 1)$, la sua funzione di ripartizione $F_U(x)$ in un punto $x$ compreso tra 0 e 1 è semplicemente $x$ stesso.

#### Definizione di Funzione di Ripartizione per Vettori Aleatori

Si può estendere la definizione di funzione di ripartizione a un **vettore aleatorio** $X = (X_1, ..., X_d)$ a valori in $\mathbb{R}^d$. La funzione di ripartizione del vettore aleatorio $F_X(x_1, ..., x_d)$ è definita come la probabilità che ciascuna componente $X_i$ sia minore o uguale al corrispondente valore $x_i$ per ogni vettore $x = (x_1, ..., x_d) \in \mathbb{R}^d$:

$F_X(x_1, ..., x_d) = P(X_1 \le x_1, X_2 \le x_2, ..., X_d \le x_d)$

Dove la notazione con la virgola indica l'intersezione degli eventi.

Tuttavia, lo studio della teoria equivalente per le funzioni di ripartizione in più dimensioni è più complesso rispetto al caso unidimensionale. Pertanto, ci si concentra principalmente sui risultati ottenuti per variabili aleatorie a valori in $\mathbb{R}$.

#### Variabili Aleatorie Discrete: Definizione e Supporto

Una variabile aleatoria $X$ a valori in $\mathbb{R}^d$ è detta **discreta** se esiste un insieme numerabile $C \subseteq \mathbb{R}^d$ (che è anche un insieme boreliano in quanto unione di punti) tale che la probabilità che $X$ appartenga a $C$ sia uguale a 1:

$P\set{X \in C} = 1$

L'insieme $C$ è anche detto **supporto** della variabile aleatoria o insieme dei valori ammissibili. Questo significa che la variabile aleatoria $X$ assume i suoi valori solo all'interno dell'insieme $C$, e la probabilità di assumere valori al di fuori di $C$ è zero. È importante distinguere tra un evento impossibile (probabilità zero) e un evento che non si osserva mai nella realizzazione della variabile aleatoria.

Nel caso $d=1$, l'insieme $C$ è un sottoinsieme numerabile di $\mathbb{R}$ e può essere rappresentato come una sequenza di punti $\set{x_1, x_2, ...}$.
![[Pasted image 20250402153604.png]]

#### Probabilità per Variabili Aleatorie Discrete
![[Pasted image 20250402154443.png]]
Per una variabile aleatoria discreta $X$ con supporto $C$, la probabilità che $X$ appartenga a un qualsiasi sottoinsieme $A \subseteq \mathbb{R}^d$ può essere calcolata considerando solo l'intersezione di $A$ con il supporto $C$:

$P(X \in A) = P(X \in C \cap A)$

Questo perché la probabilità che $X$ assuma valori al di fuori di $C$ è zero.

#### Funzione di Massa di Probabilità (PMF) o Densità Discreta

Per una variabile aleatoria discreta $X$ con supporto $C = \set{x_1, x_2, ...}$, si definisce la **funzione di massa di probabilità** (PMF) $p_i$ come la probabilità che $X$ assuma il valore $x_i$:

$p_i = P(X = x_i)$

La PMF soddisfa le seguenti proprietà:

- $p_i \ge 0$ per ogni $i$
- $\sum_{i} p_i = 1$

La collezione di questi valori ${p_i}$ descrive completamente la **legge** o **distribuzione** della variabile aleatoria discreta $X$. La legge immagine di $X$ è una **misura discreta**.

A volte si usa la notazione $p(x_i)$ o $p_X(x_i)$ per indicare la probabilità che la variabile aleatoria $X$ assuma il valore $x_i$.

#### Funzione di Ripartizione di una Variabile Aleatoria Discreta

La funzione di ripartizione $F_X(x)$ di una variabile aleatoria discreta $X$ a valori in $\mathbb{R}$ è data dalla somma delle probabilità di tutti i valori $x_i$ nel supporto $C$ che sono minori o uguali a $x$:

$$F_X(x) = P(X \le x) = \sum_{x_i \in C: \ \ x_i \le x} p_i$$

La funzione di ripartizione di una variabile aleatoria discreta è una **funzione a gradini**, costante a tratti e continua da destra, con salti in corrispondenza dei punti del supporto $C$. L'altezza del salto in un punto $x_i \in C$ è pari alla probabilità $p_i = P(X = x_i)$.
![[Pasted image 20250402154942.png]]
#### Vettori Aleatori Discreti e Funzione di Ripartizione

La definizione di variabile aleatoria discreta si estende ai vettori aleatori $X = (X_1, ..., X_d)$ a valori in $\mathbb{R}^d$. Se esiste un insieme numerabile $C \subseteq \mathbb{R}^d$ tale che $P(X \in C) = 1$, allora $X$ è un vettore aleatorio discreto.

La funzione di ripartizione di un vettore aleatorio discreto $X$ è ancora definita come:

$$\begin{aligned}F_X(x_1, ..., x_d) = \\ \\ P(X_1 \le x_1, ..., X_d \le x_d) \\ \\ \sum_{\begin{aligned}x = (x_1', ..., x_d') \in C:\\ x_1' \le x_1, ..., x_d' \le x_d \end{aligned}} p(x_1', ..., x_d')\end{aligned}$$

Dove $p(x_1', ..., x_d') = P(X_1 = x_1', ..., X_d = x_d')$ è la funzione di massa di probabilità congiunta del vettore aleatorio discreto.

A volte, per comodità, si può considerare che il supporto $C$ sia un prodotto cartesiano di insiemi numerabili $C_1 \times ... \times C_d$, anche se alcuni punti nel prodotto cartesiano potrebbero avere probabilità zero.

#### Distribuzioni Marginali di Vettori Aleatori Discreti
![[Pasted image 20250404161525.png]]
Se $X = (X_1, ..., X_d)$ è un vettore aleatorio discreto con supporto $C \subseteq \mathbb{R}^d$ e funzione di massa di probabilità congiunta $p(x_1, ..., x_d)$, allora ogni componente $X_i$ è anch'essa una variabile aleatoria discreta.

La **funzione di massa di probabilità marginale** di $X_i$, $p_{X_i}(x_i)$, si ottiene **marginalizzando** (sommando) la funzione di massa di probabilità congiunta su tutti i possibili valori delle altre componenti:

$p_{X_i}(x_i) = P(X_i = x_i) = \sum_{(x_1, ..., x_{i-1}, x_{i+1}, ..., x_d) \in C_{-i}} p(x_1, ..., x_{i-1}, x_i, x_{i+1}, ..., x_d)$

Dove $C_{-i}$ rappresenta l'insieme dei possibili valori delle componenti diverse da $X_i$ nel supporto $C$.

**Esempio in due dimensioni ($d=2$)**: Sia $X = (X_1, X_2)$ un vettore aleatorio discreto con supporto $C = {(1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (2, 3)}$ e una distribuzione uniforme su questi quattro punti (correzione dell'esempio del professore), quindi $P(X = (x_1, x_2)) = 1/4$ per $(x_1, x_2) \in {(1, 1), (1, 2), (2, 1), (2, 2)}$ e $0$ altrove.

La funzione di massa di probabilità marginale di $X_1$ è:

$p_{X_1}(1) = P(X_1 = 1) = P(X_1 = 1, X_2 = 1) + P(X_1 = 1, X_2 = 2) + P(X_1 = 1, X_2 = 3) = p(1, 1) + p(1, 2) + p(1, 3) = 1/4 + 1/4 + 0 = 1/2$

$p_{X_1}(2) = P(X_1 = 2) = P(X_1 = 2, X_2 = 1) + P(X_1 = 2, X_2 = 2) + P(X_1 = 2, X_2 = 3) = p(2, 1) + p(2, 2) + p(2, 3) = 1/4 + 1/4 + 0 = 1/2$

$p_{X_1}(x_1) = 0$ per $x_1 \notin {1, 2}$

La funzione di massa di probabilità marginale di $X_2$ è:

$p_{X_2}(1) = P(X_2 = 1) = P(X_1 = 1, X_2 = 1) + P(X_1 = 2, X_2 = 1) = p(1, 1) + p(2, 1) = 1/4 + 1/4 = 1/2$

$p_{X_2}(2) = P(X_2 = 2) = P(X_1 = 1, X_2 = 2) + P(X_1 = 2, X_2 = 2) = p(1, 2) + p(2, 2) = 1/4 + 1/4 = 1/2$

$p_{X_2}(3) = P(X_2 = 3) = P(X_1 = 1, X_2 = 3) + P(X_1 = 2, X_2 = 3) = p(1, 3) + p(2, 3) = 0 + 0 = 0$

$p_{X_2}(x_2) = 0$ per $x_2 \notin {1, 2, 3}$

Il professore introduce la notazione con la virgola per indicare l'intersezione di eventi, ad esempio $P(X_1 = 1, X_2 = 1)$ invece di $P(X_1 = 1 \cap X_2 = 1)$.

#### Conclusioni

Se si ha un vettore aleatorio discreto, allora tutti i suoi sottovettori, incluse le singole componenti, sono anch'essi variabili aleatorie discrete. La legge (distribuzione) di un vettore aleatorio discreto determina completamente la legge di tutte le sue distribuzioni marginali.

___

## Variabili Aleatorie Discrete e Valore Atteso

### Densità di Probabilità Congiunta per Vettori Discreti

Consideriamo un vettore aleatorio $(X_1, X_2)$ dove $X_1$ assume valori in un insieme finito $C_1$ e $X_2$ assume valori in un insieme finito $C_2$. La **densità di probabilità congiunta** del vettore $(X_1, X_2)$ è una funzione $P(x_1, x_2)$ che rappresenta la probabilità che $X_1 = x_1$ e $X_2 = x_2$, dove $x_1 \in C_1$ e $x_2 \in C_2$. Questa densità può essere rappresentata tramite una **tabella di contingenza**.

Ad esempio, se $C_1 = {1, 3, 4}$ e $C_2 = {1, 2, 3}$, la tabella di contingenza conterrà le probabilità $P(x_1, x_2)$ per ogni coppia $(x_1, x_2)$.

|$X_2 \setminus X_1$|1|3|4|
|:--|:--|:--|:--|
|1|$1/4$|$0$|$0$|
|2|$0$|$1/4$|$1/4$|
|3|$0$|$1/4$|$0$|

Da questa tabella, possiamo leggere diverse informazioni, come il supporto di $X_1$ e $X_2$ e la probabilità di ogni combinazione di valori. Ad esempio, la probabilità che $X_1 = 3$ e $X_2 = 2$ è $P(3, 2) = 1/4$. La probabilità che $X_1 = 2$ e $X_2 = 1$ è $P(2, 1) = 0$.

### Densità di Probabilità Marginale

A partire dalla densità di probabilità congiunta, è possibile ricavare le **densità di probabilità marginali** delle singole componenti. La densità marginale di $X_1$, $P_{X_1}(x_1)$, si ottiene sommando la densità congiunta su tutti i possibili valori di $X_2$:

$$P_{X_1}(x_1) = \sum_{x_2 \in C_2} P(x_1, x_2)$$

Analogamente, la densità marginale di $X_2$, $P_{X_2}(x_2)$, si ottiene sommando la densità congiunta su tutti i possibili valori di $X_1$:

$P_{X_2}(x_2) = \sum_{x_1 \in C_1} P(x_1, x_2)$

Nell'esempio precedente, la densità marginale di $X_1$ è: $P_{X_1}(1) = P(1, 1) + P(1, 2) + P(1, 3) = 1/4 + 0 + 0 = 1/4$ $P_{X_1}(3) = P(3, 1) + P(3, 2) + P(3, 3) = 0 + 1/4 + 1/4 = 1/2$ $P_{X_1}(4) = P(4, 1) + P(4, 2) + P(4, 3) = 0 + 1/4 + 0 = 1/4$

E la densità marginale di $X_2$ è: $P_{X_2}(1) = P(1, 1) + P(3, 1) + P(4, 1) = 1/4 + 0 + 0 = 1/4$ $P_{X_2}(2) = P(1, 2) + P(3, 2) + P(4, 2) = 0 + 1/4 + 1/4 = 1/2$ $P_{X_2}(3) = P(1, 3) + P(3, 3) + P(4, 3) = 0 + 1/4 + 0 = 1/4$

Queste marginali possono essere aggiunte alla tabella di contingenza.

|$X_2 \setminus X_1$|1|3|4|$P_{X_2}(x_2)$|
|:--|:--|:--|:--|:--|
|1|$1/4$|$0$|$0$|$1/4$|
|2|$0$|$1/4$|$1/4$|$1/2$|
|3|$0$|$1/4$|$0$|$1/4$|
|$P_{X_1}(x_1)$|$1/4$|$1/2$|$1/4$|$1$|

Questo processo di ricavare le densità marginali dalla densità congiunta è chiamato **marginalizzazione**.

### Relazione tra Densità Congiunta e Marginali

**Importante:** La densità congiunta determina univocamente le densità marginali, ma il viceversa non è vero. Date le densità marginali di $X_1$ e $X_2$, non è possibile ricostruire un'unica densità congiunta. Possono esistere diverse densità congiunte che producono le stesse marginali.

Ad esempio, कंसीडर la seguente tabella con la stessa marginali dell'esempio precedente:

|$X_2 \setminus X_1$|1|3|4|
|:--|:--|:--|:--|
|1|$1/16$|$1/8$|$1/16$|
|2|$3/16$|$2/8 = 4/16$|$3/16$|
|3|$0$|$2/8 = 4/16$|$0$|

(Nota: il professore ha ammesso un errore nei suoi calcoli nell'esempio a lezione).

Questa tabella ha le stesse marginali dell'esempio precedente (verificabile sommando righe e colonne), ma la densità congiunta è diversa. Questo dimostra che la conoscenza delle sole marginali non è sufficiente per determinare la densità congiunta.

### Valore Atteso di una Variabile Aleatoria Discreta

Sia $X$ una variabile aleatoria discreta che assume valori in un insieme finito o numerabile $C$, con densità di probabilità discreta (o funzione di massa di probabilità) $p_X(x) = P(X = x)$ per $x \in C$.

Il **valore atteso** (o speranza matematica, valor medio, media) di $X$, denotato con $E[X]$ o $\mu$, è definito come la somma (o serie):

$E[X] = \sum_{x \in C} x \cdot p_X(x)$

**Condizione di Esistenza:** Il valore atteso è definito solo se la seguente somma converge assolutamente:

$\sum_{x \in C} |x| \cdot p_X(x) < \infty$

Se questa condizione non è soddisfatta (ovvero la somma diverge a $+\infty$), allora il valore atteso non è ben definito. Nel caso in cui $C$ sia un insieme finito, questa somma è sempre convergente. Se $C$ è infinito, è necessario verificare la convergenza assoluta. Questa condizione garantisce che la somma che definisce il valore atteso non dipenda dall'ordine in cui i termini vengono sommati.

**Interpretazione del Valore Atteso:** Il valore atteso può essere interpretato come una sorta di **baricentro** dei valori che la variabile aleatoria può assumere, pesati dalle rispettive probabilità. In una dimensione, immagina dei punti sulla retta reale con delle masse corrispondenti alle loro probabilità; il valore atteso è la posizione del centro di massa.

**Il Valore Atteso Dipende dalla Legge Immagine:** Tecnicamente, il valore atteso è definito a partire dalla variabile aleatoria $X$ e dallo spazio di probabilità $(\Omega, \mathcal{F}, P)$ su cui è definita. Tuttavia, il suo valore dipende **esclusivamente dalla legge immagine** (o distribuzione di probabilità) di $X$ sullo spazio di arrivo (in questo caso, $\mathbb{R}$).

Se due variabili aleatorie discrete, definite anche su spazi di probabilità diversi, hanno la **stessa legge immagine** (cioè la stessa densità di probabilità discreta), allora avranno lo **stesso valore atteso**.

### Esempio 1: Distribuzione di Poisson

Si consideri una variabile aleatoria $X$ che assume valori negli interi non negativi $N = {0, 1, 2, ...}$. La probabilità che $X = k$ è data dalla **distribuzione di Poisson** con parametro $\lambda > 0$:

$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$, per $k \in N$

**Verifica che sia una densità di probabilità:** La somma delle probabilità su tutti i possibili valori di $k$ deve essere uguale a 1:

$\sum_{k=0}^{\infty} P(X = k) = \sum_{k=0}^{\infty} \frac{\lambda^k e^{-\lambda}}{k!} = e^{-\lambda} \sum_{k=0}^{\infty} \frac{\lambda^k}{k!}$

Ricordando l'espansione in serie di Taylor della funzione esponenziale $e^x = \sum_{k=0}^{\infty} \frac{x^k}{k!}$, abbiamo:

$\sum_{k=0}^{\infty} \frac{\lambda^k}{k!} = e^{\lambda}$

Quindi, $\sum_{k=0}^{\infty} P(X = k) = e^{-\lambda} \cdot e^{\lambda} = 1$. Inoltre, $P(X = k) \ge 0$ per ogni $k \in N$ e $\lambda > 0$.

**Esercizi:**

1. Calcolare la probabilità che $X$ sia maggiore stretto di 1, i.e., $P(X > 1)$. $P(X > 1) = 1 - P(X \le 1) = 1 - [P(X = 0) + P(X = 1)]$ $P(X = 0) = \frac{\lambda^0 e^{-\lambda}}{0!} = e^{-\lambda}$ $P(X = 1) = \frac{\lambda^1 e^{-\lambda}}{1!} = \lambda e^{-\lambda}$ Pertanto, $P(X > 1) = 1 - (e^{-\lambda} + \lambda e^{-\lambda}) = 1 - e^{-\lambda}(1 + \lambda)$.
    
2. Calcolare il valore atteso di $X$, $E[X]$, usando la definizione. $E[X] = \sum_{k=0}^{\infty} k \cdot P(X = k) = \sum_{k=0}^{\infty} k \cdot \frac{\lambda^k e^{-\lambda}}{k!}$ Notiamo che per $k = 0$, il termine è $0 \cdot \frac{\lambda^0 e^{-\lambda}}{0!} = 0$. Possiamo quindi iniziare la somma da $k = 1$: $E[X] = \sum_{k=1}^{\infty} k \cdot \frac{\lambda^k e^{-\lambda}}{k!} = \sum_{k=1}^{\infty} \frac{k}{k!} \lambda^k e^{-\lambda} = \sum_{k=1}^{\infty} \frac{1}{(k-1)!} \lambda^k e^{-\lambda}$ Facciamo un cambio di indice, ponendo $j = k - 1$, quindi $k = j + 1$. Quando $k = 1$, $j = 0$. La somma diventa: $E[X] = \sum_{j=0}^{\infty} \frac{1}{j!} \lambda^{j+1} e^{-\lambda} = \lambda e^{-\lambda} \sum_{j=0}^{\infty} \frac{\lambda^j}{j!} = \lambda e^{-\lambda} \cdot e^{\lambda} = \lambda$ Quindi, il valore atteso di una variabile aleatoria di Poisson con parametro $\lambda$ è $\lambda$.
    

### Esempio 2: Variabili Aleatorie con la Stessa Legge Immagine

Consideriamo due spazi di probabilità diversi:

- $(\Omega_1, \mathcal{F}_1, P_1)$ dove $\Omega_1 = {1, 2, 3, 4, 5, 6}$, $\mathcal{F}_1$ è la famiglia di tutti i sottoinsiemi di $\Omega_1$, e $P_1({\omega}) = 1/6$ per ogni $\omega \in \Omega_1$ (modello di un dado equilibrato). Definiamo una variabile aleatoria $X_1: \Omega_1 \rightarrow {0, 1}$ come l'indicatore dell'evento ${\omega \in \Omega_1 : \omega \le 3}$: $X_1(\omega) = 1$ se $\omega \in {1, 2, 3}$ $X_1(\omega) = 0$ se $\omega \in {4, 5, 6}$ La legge di probabilità di $X_1$ è: $P(X_1 = 1) = P_1({1, 2, 3}) = P_1({1}) + P_1({2}) + P_1({3}) = 1/6 + 1/6 + 1/6 = 3/6 = 1/2$ $P(X_1 = 0) = P_1({4, 5, 6}) = P_1({4}) + P_1({5}) + P_1({6}) = 1/6 + 1/6 + 1/6 = 3/6 = 1/2$
    
- $(\Omega_2, \mathcal{F}_2, P_2)$ dove $\Omega_2 =$, $\mathcal{F}_2$ è la $\sigma$-algebra dei Boreliani di , e $P_2$ è la misura di Lebesgue ristretta a . Definiamo una variabile aleatoria $X_2: \Omega_2 \rightarrow {0, 1}$ come: $X_2(\omega) = 1$ se $\omega \in [0, 1/2)$ $X_2(\omega) = 0$ se $\omega \in [1/2, 1]$ La legge di probabilità di $X_2$ è: $P(X_2 = 1) = P_2([0, 1/2)) = 1/2 - 0 = 1/2$ $P(X_2 = 0) = P_2([1/2, 1]) = 1 - 1/2 = 1/2$
    

Entrambe le variabili aleatorie $X_1$ e $X_2$ assumono gli stessi valori ${0, 1}$ con le stesse probabilità (legge immagine identica), anche se sono definite su spazi di probabilità $(\Omega, \mathcal{F}, P)$ diversi.

**Calcolo del Valore Atteso:**

$E[X_1] = \sum_{x \in {0, 1}} x \cdot P(X_1 = x) = 0 \cdot P(X_1 = 0) + 1 \cdot P(X_1 = 1) = 0 \cdot (1/2) + 1 \cdot (1/2) = 1/2$

$E[X_2] = \sum_{x \in {0, 1}} x \cdot P(X_2 = x) = 0 \cdot P(X_2 = 0) + 1 \cdot P(X_2 = 1) = 0 \cdot (1/2) + 1 \cdot (1/2) = 1/2$

Come si vede, $E[X_1] = E[X_2]$, il che dimostra che il valore atteso dipende unicamente dalla legge immagine della variabile aleatoria e non dallo specifico spazio di probabilità su cui è definita.






____


#### References

[[Appunti Prob - lez09.pdf]]


[[appunti bussetti-lez09.pdf]]


2025-03-20 16:17

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## prob-lez10
## Variabili Aleatorie Discrete e Valore Atteso

### Introduzione alle Variabili Aleatorie Discrete

Il professore introduce l'argomento delle **variabili aleatorie discrete**, spiegando che spesso si userà una notazione come $X \sim$ qualche nome per indicare che la variabile aleatoria $X$ è distribuita secondo una certa legge.

#### Variabile Aleatoria di Poisson

Un primo esempio è la **variabile aleatoria di Poisson**.

- Notazione: $X \sim Pois(\lambda)$, dove $\lambda > 0$ è un parametro fissato.
- Definizione: Una variabile aleatoria $X$ è di Poisson , siccome è discreta sapppiamo che  la possiamo completamente caratterizzare con la sua **densità** (o funzione di probabilità) data da: $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$, per $k = 0, 1, 2, \dots$
- Spazio di Probabilità: Il professore sottolinea che per essere rigorosi, si dovrebbe definire $X$ su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ a valori in $\mathbb{R}$ discreto $(\Omega, \mathcal{F}, P) \to (\mathbb{R}, \mathcal{B}(\mathbb{R})$. La densità data rappresenta la **legge immagine** di $P$ tramite $X$. Nella maggior parte dei casi, ci si concentrerà sullo spazio di arrivo della variabile aleatoria.
- Supporto: La densità è positiva per valori interi maggiori o uguali a zero e implicitamente vale zero al di fuori di questi valori.

#### Esercizio sul Valore Atteso della Poisson

Il professore propone di calcolare il **valore atteso** di una variabile aleatoria di Poisson. La definizione del valore atteso per una variabile aleatoria discreta $X$ è $$E[X] = \sum_{x} x P(X=x)$$, dove la somma è estesa a tutti i possibili valori di $X$, purché $\sum_{x} |x| P(X=x) < \infty$ (convergenza assoluta).

Nel caso della Poisson, i valori possibili sono $k \ge 0$, quindi il valore atteso è: $E[X] = \sum_{k=0}^{\infty} k \frac{\lambda^k e^{-\lambda}}{k!}$

Osservando che per $k=0$ il termine è zero, la somma può iniziare da $k=1$: $E[X] = \sum_{k=1}^{\infty} k \frac{\lambda^k e^{-\lambda}}{k!} = \sum_{k=1}^{\infty} \frac{\lambda^k e^{-\lambda}}{(k-1)!}$

Si può riscrivere $\lambda^k$ come $\lambda \cdot \lambda^{k-1}$: $E[X] = \sum_{k=1}^{\infty} \lambda \frac{\lambda^{k-1} e^{-\lambda}}{(k-1)!} = \lambda \sum_{k=1}^{\infty} \frac{\lambda^{k-1} e^{-\lambda}}{(k-1)!}$

Effettuando un cambio di variabile, ponendo $j = k-1$, quando $k=1$ si ha $j=0$, e la somma diventa: $E[X] = \lambda \sum_{j=0}^{\infty} \frac{\lambda^{j} e^{-\lambda}}{j!}$

Si riconosce che la somma $\sum_{j=0}^{\infty} \frac{\lambda^{j} e^{-\lambda}}{j!}$ è la somma delle probabilità di tutti i possibili valori di una variabile aleatoria di Poisson con parametro $\lambda$, che è uguale a 1. Pertanto, il valore atteso di una variabile aleatoria di Poisson è: $E[X] = \lambda \cdot 1 = \lambda$

Il professore conclude che la **media** di una variabile aleatoria di Poisson è $\lambda$.

#### Variabile Aleatoria Binomiale

Un altro esempio di variabile aleatoria discreta è la **variabile aleatoria binomiale** con parametri $n \in \mathbb{N}$ e $p \in [0,1]$

- Notazione: $X \sim Bin(n, p)$.
- Definizione: La variabile aleatoria $X$ può assumere valori $k \in {0, 1, 2, \dots, n}$ con probabilità: $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$
- Interpretazione: Una variabile binomiale può essere pensata come il numero di successi in $n$ prove di Bernoulli indipendenti, ognuna con probabilità di successo $p$.
- Esercizio: Il professore propone come esercizio il calcolo del valore atteso di una variabile binomiale, anticipando che risulterà essere $np$, e che questo risultato verrà ripreso in seguito come esempio di una proprietà del valore atteso.

#### Variabile Aleatoria Geometrica

Il terzo esempio è la **legge geometrica**. Questa viene introdotta partendo da un modello probabilistico.

- Modello: Si consideri una successione infinita di eventi indipendenti $E_1, E_2, \dots$ tutti con la stessa probabilità $P(E_i) = p$ di verificarsi.
- Definizione della Variabile Aleatoria: Sia $X$ la variabile aleatoria che rappresenta il più piccolo indice $K$ tale che i primi $K-1$ eventi non si sono verificati e l'evento $K$-esimo si è verificato. In termini di "guasti", $X=K$ significa che il primo guasto avviene al tempo $K$.
- Supporto: La variabile aleatoria $X$ assume valori in ${1, 2, 3, \dots}$ (è discreta)
- Probabilità: La probabilità che $X$ sia uguale a $K$ è data da: $P(X=k) = P(E_1^c \cap E_2^c \cap \dots \cap E_{k-1}^c \cap E_k)$ A causa dell'indipendenza degli eventi, questa probabilità si fattorizza come: $P(X=k) = P(E_1^c) P(E_2^c) \dots P(E_{k-1}^c) P(E_k) = (1-p)^{k-1} p$
- Definizione Formale: Una variabile aleatoria discreta con questa densità di probabilità è detta **geometrica di parametro $p$**.

### La Funzione Indicatrice e il suo Valore Atteso

Il professore introduce la **funzione indicatrice** di un insieme $A$, definita come: $I_A(\omega) = \begin{cases} 1 & \text{se } \omega \in A \\ 0 & \text{se } \omega \notin A \end{cases}$

A volte, per comodità, soprattutto quando l'insieme $A$ è definito da una condizione che coinvolge una variabile aleatoria, si userà una notazione del tipo $I_{\set{X \in B}}$ o semplicemente $I(X \in B)$.

#### Valore Atteso di una Funzione Indicatrice

Considerando una variabile aleatoria $X = I_A$, che può assumere solo i valori 0 e 1, il suo valore atteso è: $E[X] = \sum_{x} x P(X=x) = 0 \cdot P(X=0) + 1 \cdot P(X=1)$
![[Pasted image 20250320163218.png|300]]

Si ha che $P(X=1) = P({\omega : I_A(\omega) = 1}) = P(A)$ e $P(X=0) = P({\omega : I_A(\omega) = 0}) = P(A^c)$. Pertanto, il valore atteso di una funzione indicatrice è la probabilità dell'evento che essa indica: $E[I_A] = P(A)$

In particolare, se si considera una variabile aleatoria $Z$ (invece di $X$ per evitare confusione) definita su uno spazio di probabilità e un insieme $B$ nello spazio di arrivo di $Z$, la variabile aleatoria $Y = I_{{Z \in B}}$ è una funzione indicatrice. Il suo valore atteso è la probabilità dell'evento ${Z \in B}$: $E[I_{{Z \in B}}] = P(Z \in B)$

Questa proprietà verrà utilizzata frequentemente.


# Trasformazione di Variabili Aleatorie e Valore Atteso di $g(X)$

## Caso Semplice Iniziale e Motivazione

Il professore inizia con un riferimento a un caso precedente, accennando alla differenza tra "sopra" e "sotto" e alla probabilità di un evento $Z \in B$ che può assumere solo valori 0 o 1.

Poi introduce l'idea di trasformare una variabile aleatoria $Z$ attraverso una funzione e calcolare il valore atteso della nuova variabile aleatoria ottenuta. Per generalizzare, introduce una variabile aleatoria $X$ (discreta) con il suo supporto $C_X$ e la sua funzione di probabilità $p_X$. Considera una funzione borelliana misurabile $g: \mathbb{R} \rightarrow \mathbb{R}$.
![[Pasted image 20250320164535.png|300]]
Si definisce una nuova variabile aleatoria $Y = g(X)$. L'obiettivo è calcolare il valore atteso di $Y$, ovvero $E[Y] = E[g(X)]$.

## Definizione del Valore Atteso di $Y = g(X)$

La definizione del valore atteso di $Y$ viene data come la somma sui possibili valori di $Y$, moltiplicati per la loro probabilità:

$E[Y] = \sum_{y \in C_Y} y \cdot P(Y = y)$
![[Pasted image 20250320164237.png|300]]

dove $C_Y$ è l'insieme dei valori che $Y$ può assumere.

**Osservazione Importante:** l'immagine di un insieme numerabile è al più un insieme numerabile tramite una funzione. 
Il professore sottolinea che se $X$ è discreta, anche $Y = g(X)$ è discreta. L'insieme dei valori che $Y$ assume $C_y$ è dato da ${y \in \mathbb{R} \mid \exists x \in C_X \text{ tale che } y = g(x) }$, e questo insieme ha probabilità 1.
![[Pasted image 20250320164508.png|300]]

## Costruzione di un'Espressione Alternativa per $E[g(X)]$ (Proprietà Fondamentale)

Il professore presenta un'espressione alternativa per calcolare $E[g(X)]$ che è spesso più utile nella pratica:

$E[g(X)] = \sum_{x \in C_X} g(x) \cdot P(X = x)$
![[Pasted image 20250320164709.png|300]]

**Importante:** Il professore insiste che questa non è la _definizione_ di valore atteso di $g(X)$, ma una **proprietà**. La definizione è quella basata sulla legge di probabilità di $Y = g(X)$.

### Dimostrazione della Proprietà (per $g \ge 0$)

Per semplificare la dimostrazione, si assume inizialmente che $g(x) \ge 0$. Il valore atteso di $Y = g(X)$ per definizione è:

$E[Y] = \sum_{y \in C_Y} y \cdot P(Y = y)$

Si sostituisce $Y = g(X)$:

$E[g(X)] = \sum_{y \in C_Y} y \cdot P(g(X) = y)$

La probabilità $P(g(X) = y)$ è la probabilità dell'unione di tutti gli eventi ${X = x}$ tali che $g(x) = y$:

$P(g(X) = y) = P\left( \bigcup_{x \in C_X: g(x) = y} {X = x} \right)$

Poiché gli eventi ${X = x}$ per diversi valori di $x$ sono disgiunti, la probabilità dell'unione è la somma delle probabilità:

$P(g(X) = y) = \sum_{x \in C_X: g(x) = y} P(X = x)$

Sostituendo questa espressione nella formula per il valore atteso:

$E[g(X)] = \sum_{y \in C_Y} y \cdot \left( \sum_{x \in C_X: g(x) = y} P(X = x) \right)$

Ora si inverte l'ordine delle somme:

$E[g(X)] = \sum_{x \in C_X} \left( \sum_{y \in C_Y: y = g(x)} y \cdot P(X = x) \right)$

Dato che per ogni $x$ fissato, $y = g(x)$ è un valore unico perché $g$ è una funzione, la somma interna si riduce a:

$E[g(X)] = \sum_{x \in C_X} g(x) \cdot P(X = x)$
![[Pasted image 20250320165435.png|300]]

Questa dimostrazione, inizialmente fatta per $g(x) \ge 0$, può essere estesa al caso generale considerando $g(x) = g^+(x) - g^-(x)$, dove $g^+$ e $g^-$ sono le parti positiva e negativa di $g$, e richiedendo che $E[|g(X)|] < \infty$ (cioè che la somma $\sum_{x \in C_X} |g(x)| P(X = x)$ converge).

## Proprietà del Valore Atteso

Il professore introduce alcune proprietà importanti del valore atteso per variabili aleatorie discrete:

### Linearità

Se $a, b \in \mathbb{R}$ e $X_1, X_2$ sono variabili aleatorie discrete tali che $E[|X_1|] < \infty$ e $E[|X_2|] < \infty$ (ovvero le rispettive serie convergono assolutamente),
![[Pasted image 20250320165559.png|300]] ![[Pasted image 20250320165627.png|300]]
allora il valore atteso della combinazione lineare $aX_1 + bX_2$ è ben definito e vale:

$E[aX_1 + bX_2] = aE[X_1] + bE[X_2]$

### Monotonia

Se una variabile aleatoria discreta $X$ è tale che $P(X \le a) = 1$, allora il suo valore atteso è minore o uguale ad $a$:

Se $P(X \le a) = 1 \implies E[X] \le a$

Come conseguenza, se due variabili aleatorie discrete $X_1$ e $X_2$ soddisfano $P(X_1 \le X_2) = 1$ e i loro valori attesi sono finiti, allora:

$E[X_1] \le E[X_2]$

### Disuguaglianza del Valore Assoluto

Il modulo del valore atteso di una variabile aleatoria discreta $X$ è minore o uguale al valore atteso del suo modulo:

$|E[X]| \le E[|X|]$

Questa è una conseguenza della proprietà di monotonia.

*Se una serie dei moduli è assolutamente convergente, cioè se $\sum_{n} |a_n|$ converge, allora il modulo della serie è minore o uguale alla serie dei moduli:*

$|\sum_{n} a_n| \le \sum_{n} |a_n|$


Il professore conclude sottolineando l'importanza di comprendere la distinzione tra la definizione del valore atteso di $g(X)$ e la proprietà che permette di calcolarlo direttamente sulla distribuzione di $X$.

esempio specifico nel contesto di variabili aleatorie discrete non negative.

#### Linearità del Valore Atteso per Variabili Discrete Non Negative

L'obiettivo è mostrare che, date due variabili aleatorie discrete $x_1$ e $x_2$ tali che $x_1 \ge 0$ e $x_2 \ge 0$, il valore atteso della loro somma è uguale alla somma dei loro valori attesi:

$E[x_1 + x_2] = E[x_1] + E[x_2]$

Per dimostrarlo, si parte dalla definizione del valore atteso di una funzione di un vettore aleatorio discreto. Se abbiamo un vettore aleatorio discreto $(X_1, X_2)$ con densità congiunta $P(x_1, x_2)$, il valore atteso di una funzione $g(X_1, X_2)$ è dato da:

$E[g(X_1, X_2)] = \sum_{x_1, x_2} g(x_1, x_2) P(x_1, x_2)$

Nel nostro caso, $g(x_1, x_2) = x_1 + x_2$, quindi:

$E[x_1 + x_2] = \sum_{x_1, x_2} (x_1 + x_2) P(x_1, x_2)$

Assumendo che la serie $\sum_{x_1, x_2} |(x_1 + x_2) P(x_1, x_2)|$ sia convergente (il professore menziona l'assoluta convergenza), possiamo separare la somma:
![[Pasted image 20250407115204.png]]
$E[x_1 + x_2] = \sum_{x_1, x_2} x_1 P(x_1, x_2) + \sum_{x_1, x_2} x_2 P(x_1, x_2)$

Riscrivendo le somme, portando fuori i termini che non dipendono dall'indice di sommazione interno:

$E[x_1 + x_2] = \sum_{x_1} x_1 \left( \sum_{x_2} P(x_1, x_2) \right) + \sum_{x_2} x_2 \left( \sum_{x_1} P(x_1, x_2) \right)$

Le somme interne rappresentano le **densità marginali** di $x_1$ e $x_2$ rispettivamente:

$P_{X_1}(x_1) = \sum_{x_2} P(x_1, x_2)$

$P_{X_2}(x_2) = \sum_{x_1} P(x_1, x_2)$

Sostituendo le densità marginali nell'espressione per il valore atteso:

$E[x_1 + x_2] = \sum_{x_1} x_1 P_{X_1}(x_1) + \sum_{x_2} x_2 P_{X_2}(x_2)$

Queste due somme sono per definizione il valore atteso di $x_1$ e il valore atteso di $x_2$:

$E[x_1 + x_2] = E[x_1] + E[x_2]$
![[Pasted image 20250407115814.png]]
Il professore sottolinea che questa dimostrazione è stata fornita in un caso particolare ($x_1 \ge 0, x_2 \ge 0$) per illustrare come la **linearità** del valore atteso discende dalla formula generale per il valore atteso di una funzione di un vettore aleatorio discreto. Le proprietà fondamentali introdotte sono la **linearità** e la **monotonia** del valore atteso.

### Estensione a Variabili Aleatorie Generali

Il professore introduce la questione di come definire il valore atteso per variabili aleatorie non discrete. Egli anticipa che l'approccio in questo caso è più complesso e si basa sulla teoria della misura.

#### Spazio Reale Esteso $\overline{\mathbb{R}}$

Viene anche menzionata la possibilità di considerare variabili aleatorie che possono assumere valori in $\overline{\mathbb{R}} = \mathbb{R} \cup \set{-\infty, +\infty}$. Per fare ciò, è necessario definire una sigma algebra su questo spazio. La sigma algebra considerata è la più piccola sigma algebra che contiene sia la sigma algebra di Borel su $\mathbb{R}$ ($\mathcal{B}(\mathbb{R})$) che gli insiemi ${-\infty}$ e ${+\infty}$. Questa viene chiamata la sigma algebra di Borel sulla retta estesa, $\mathcal{B}(\overline{\mathbb{R}})$.

Un insieme $A \in \mathcal{B}(\overline{\mathbb{R}})$ può essere scritto nella forma $A = \tilde{A} \cup \Delta$, dove $\tilde{A} \in \mathcal{B}(\mathbb{R})$ e $\Delta$ è uno dei seguenti insiemi: $\set{\emptyset}, \set{-\infty}, \set{+\infty}, \set{-\infty, +\infty}$.

Il professore avverte che le proprietà della **funzione di ripartizione** (CDF) definite precedentemente valgono solo per variabili aleatorie a valori reali e non si estendono direttamente al caso di variabili aleatorie a valori nella retta estesa. Ad esempio, $\lim_{x \to -\infty} F_X(x) = 0$ si basa sul fatto che $P(X = -\infty) = 0$ per variabili reali.
![[Pasted image 20250407120318.png]]
### Introduzione all'Integrale Rispetto a una Misura

Il professore inizia a introdurre il concetto di **integrale** di una funzione misurabile rispetto a una misura. Consideriamo uno spazio misurabile $(E, \mathcal{E})$ e una misura $\mu$ su di esso. Sia $\xi: E \to \overline{\mathbb{R}}$ una funzione misurabile. L'integrale di $\xi$ rispetto a $\mu$ viene indicato con la notazione:

$\int_E \xi d\mu \quad \text{oppure} \quad \int X d\mu$

Il professore spiega che questa definizione astratta sarà applicata in tre contesti principali:

- **Integrale di Lebesgue:** $E = \mathbb{R}^d$, $\mathcal{E} = \mathcal{B}(\mathbb{R}^d)$, e $\mu$ è la misura di Lebesgue su $\mathbb{R}^d$.
- **Valore Atteso:** $E = \Omega$ (spazio di probabilità), $\mathcal{E} = \mathcal{F}$ (sigma algebra degli eventi), e $\mu = P$ (misura di probabilità). In questo caso, se $\xi$ è una variabile aleatoria, l'integrale $\int_\Omega \xi dP$ rappresenta il valore atteso di $\xi$, $E[X]$.
- **Cambio di Variabili:** $E = \mathbb{R}^d$, $\mathcal{E} = \mathcal{B}(\mathbb{R}^d)$, e $\mu$ è la misura immagine di un vettore aleatorio $\xi$. L'integrale di una funzione di $\xi$, $f(\xi)$, potrà essere espresso come un integrale rispetto alla misura immagine.
![[Pasted image 20250407121025.png]]
### Definizione dell'Integrale per Funzioni Semplici Positive

Per iniziare a costruire la definizione generale dell'integrale, il professore introduce le **funzioni semplici positive** in forma canonica.

#### Funzioni Semplici Positive in Forma Canonica

Una funzione $S: E \to [0, +\infty)$ è detta **semplice positiva in forma canonica** se esistono un numero finito $m \in \mathbb{N}$, costanti $c_i \ge 0$ per $i = 1, \dots, m$, e insiemi misurabili $A_i \in \mathcal{E}$ tali che:

- $A_i \cap A_j = \emptyset$ per $i \neq j$ (gli insiemi formano una partizione).
- $\bigcup_{i=1}^m A_i = E$ (gli insiemi coprono tutto lo spazio).
- $S(x) = \sum_{i=1}^m c_i \mathbb{1}_{A_i}(x)$, dove $\mathbb{1}_{A_i}(x)$ è la funzione indicatrice dell'insieme $A_i$ (vale 1 se $x \in A_i$ e 0 altrimenti).

Una funzione semplice è misurabile perché è una combinazione lineare di funzioni indicatrici di insiemi misurabili.
![[Pasted image 20250407121246.png]]
#### Definizione dell'Integrale per Funzioni Semplici Positive

Per una funzione semplice positiva $S$ in forma canonica come definita sopra, l'**integrale di $S$ rispetto alla misura $\mu$**  (sigma finita)è definito come la somma:

$\int_E S (e) \cdot \mu (de) = \sum_{i=1}^m c_i \mu(E_i) \in [0, + \infty]$

dove $\mu(A_i)$ è la misura dell'insieme $A_i$. Si noti che questo valore può essere anche $+\infty$ se $\mu(A_i) = +\infty$ per qualche $i$ con $c_i > 0$.

Il professore osserva che questa definizione è analoga al valore atteso per variabili discrete, dove si sommano i valori assunti dalla variabile moltiplicati per le loro probabilità. In questo caso, i valori $c_i$ giocano il ruolo dei valori della variabile, e le misure $\mu(A_i)$ giocano il ruolo dei pesi (o probabilità, nel caso di misure di probabilità).

Il passo successivo sarà estendere questa definizione di integrale a funzioni misurabili più generali.
#### References

[[appunti bussetti- lez10.pdf]]

2025-04-07 12:31

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[sbobine]]  [[probabilità]]

## prob-lez11
# **Definizione dell'Integrale di Lebesgue**

## **Introduzione al Problema e Funzioni Semplici Positive**

Oggi affronteremo il problema di definire l'integrale di una funzione $s$ che va da uno spazio di misura $(E, \mathcal{A}, \mu)$ (dove $E$ è uno spazio, $\mathcal{A}$ una $\sigma$-algebra e $\mu$ una misura $\sigma$-finita) a valori nei Boreliani di $\mathbb{R}$ o $\mathbb{R}$ esteso ($\overline{\mathbb{R}} = \mathbb{R} \cup {-\infty, +\infty}$) con i Boreliani di $\overline{\mathbb{R}}$.

La prima cosa che facciamo è definire l'integrale per una **funzione semplice**. Una funzione semplice $s$ è costante a tratti su certi insiemi $A_i \in \mathcal{A}$ che formano una partizione di $E$. Consideriamo inizialmente il caso in cui i valori $c_i$ assunti dalla funzione semplice sono tutti maggiori o uguali di 0 ($c_i \ge 0$) e gli insiemi $A_i$ formano una partizione di $E$ ($E = \bigcup_i A_i$ con $A_i \cap A_j = \emptyset$ per $i \neq j$). In questo caso, $s$ è detta **funzione semplice positiva**.

Per una funzione semplice positiva $s(x) = \sum_i c_i \mathbb{1}_{A_i}(x)$ (dove $\mathbb{1}_{A_i}(x)$ è la funzione indicatrice di $A_i$), definiamo l'integrale di $s$ rispetto a $\mu$ su $E$ come:

$\qquad \int_E s (e) \cdot \mu(de) = \sum_i c_i \mu(A_i)$

Questo è un numero maggiore o uguale di 0, poiché $c_i \ge 0$ e $\mu(A_i) \ge 0$. Potrebbe anche essere $+\infty$ se $\mu(A_i) = +\infty$ per qualche $i$ con $c_i > 0$, anche se la somma ha un numero finito di termini. Ad esempio, se $\mu$ è la misura di Lebesgue su $\mathbb{R}$, e $A_1 = (-\infty, 0]$, $A_2 = (0, +\infty)$, allora $\mu(A_1) = +\infty$ e $\mu(A_2) = +\infty$, e se la nostra funzione semplice è costante su questi insiemi con valori positivi, l'integrale sarà $+\infty$. Nonostante ciò, questa definizione è ben posta.

## **Estensione dell'Integrale a Funzioni Misurabili Positive**

Per definire l'integrale per una generica funzione misurabile positiva $\xi: E \to \overline {\mathbb{R}}$, utilizziamo un processo di approssimazione tramite funzioni semplici.

### **Proposizione:**

Sia $\xi: E \to \overline {\mathbb{R}}$ una funzione misurabile positiva

1. Esiste una successione $(s_n)_{n \in \mathbb{N}}$ di funzioni semplici positive tali che $(s_n(x))$ converge a $\xi(x)$ in modo **monotono crescente** per ogni $x \in E$. 
   Questo significa che per ogni $n$ e per ogni $x \in E$, $s_n(x) \le s_{n+1}(x)$, e $\lim_{n \to \infty} s_n(x) = \xi(x)$.
   ![[Pasted image 20250407125654.png]]
2. Se $(s_n)_{n \in \mathbb{N}}$ e $(s'_n)_{n \in \mathbb{N}}$ sono due successioni di funzioni semplici positive che convergono a $\xi$ in modo monotono crescente,
    allora: $\qquad \lim_{n \to \infty} \int_E s_n (e) \cdot \mu(de) = \lim_{n \to \infty} \int_E s'_n (e) \cdot \mu(de)$ Questo implica che il limite degli integrali non dipende dalla particolare successione approssimante scelta. Inoltre, si afferma implicitamente che questi limiti esistono.

### **Definizione dell'integrale di una funzione misurabile positiva:**

Sia $\xi: E \to \overline {\mathbb{R}}$ una funzione misurabile positiva. Definiamo l'integrale di $\xi$ rispetto a $\mu$ su $E$ come:

$$\qquad \int_E  \xi (e) \cdot \mu (de) = \lim_{n \to \infty} \int_E s_n(e) \mu(de)$$

dove $(s_n)_{n \in \mathbb{N}}$ è una qualsiasi successione di funzioni semplici positive che converge a $\xi$ in modo monotono crescente (la cui esistenza è garantita dal punto 1 della proposizione precedente). In virtù del punto 2 della stessa proposizione, questo limite è ben definito e non dipende dalla scelta specifica della successione $(s_n)$. Questo valore può essere un numero finito non negativo o $+\infty$.
![[Pasted image 20250407131315.png]]
Se $\int_E  \xi (e) \cdot \mu (de)< +\infty$, diciamo che la funzione $\xi$ è **integrabile** rispetto a $\mu$ e si dice che un integrale finito.

### **Intuizione della costruzione (facoltativa):**

La costruzione di Lebesgue differisce dall'integrale di Riemann nel modo in cui viene effettuata la partizione. Nell'integrale di Riemann, si partiziona il dominio (lo spazio di partenza), e si approssima la funzione con valori costanti su questi intervalli.

Nell'integrale di Lebesgue, l'idea è di **partizionare il codominio** (lo spazio di arrivo) e poi considerare le **controimmagini** di questi intervalli nel dominio. Per una funzione positiva, si suddivide l'asse reale non negativo in intervalli (ad esempio, $[0, 1/2), [1/2, 1), [1, 3/2), \dots$) e si guarda la misura degli insiemi del dominio dove la funzione cade in ciascuno di questi intervalli. Si costruisce così una funzione semplice che approssima la funzione originale dal basso. Raffinando la partizione del codominio, si ottiene una successione di funzioni semplici monotone crescenti che convergono alla funzione originale.
![[Pasted image 20250407133640.png]]
## **Definizione dell'Integrale per Funzioni Misurabili Generali**
![[Pasted image 20250407133934.png|200]]
*(parte negativa tratteggiata, positiva ricalcata)*
Consideriamo ora una funzione misurabile $\xi: E \to \overline{\mathbb{R}}$ che può assumere valori sia positivi che negativi. Possiamo sempre scrivere $\xi$ come la differenza tra la sua parte positiva $\xi^+ = \max(\xi, 0)$ e la sua parte negativa $\xi^- = \max(-\xi, 0)$:

$\qquad |\xi| = \xi^+ - \xi^-$

Sia $\xi^+ (x) = \begin{cases} \xi(x) & \text{se } \xi(x) \ge 0 \\ 0 & \text{se } \xi(x) < 0 \end{cases}$ e $\xi^- (x) = \begin{cases} 0 & \text{se } \xi(x) \ge 0 \\ -\xi(x) & \text{se } \xi(x) < 0 \end{cases}$

Se $\xi$ è misurabile, allora anche $\xi^+$ e $\xi^-$ sono funzioni misurabili e positive. Possiamo quindi definire i loro integrali $\int_E \xi^+ (e) \cdot \mu(de)$ e $\int_E \xi^- (e) \cdot \mu(de)$, che saranno numeri in $[0, +\infty]$.

### **Definizione dell'integrale di una funzione misurabile generale:**

Definiamo l'integrale di $\xi$ rispetto a $\mu$ su $E$ come:

$\qquad \int_E \xi (e) \cdot \mu(de) = \int_E \xi^+ (e) \cdot \mu(de) - \int_E \xi^- (e) \cdot \mu(de)$

Questa definizione ha senso se almeno uno tra $\int_E \xi^+ (e) \cdot \mu(de)$ e $\int_E \xi^- (e) \cdot \mu(de)$ è finito.

- Se $\int_E \xi^+ (e) \cdot \mu(de) < +\infty$ e $\int_E \xi^- (e) \cdot \mu(de) < +\infty$, allora diciamo che $\xi$ è **integrabile con integrale finito** rispetto a $\mu$, e il suo integrale è un numero finito.
  ![[Pasted image 20250407134322.png]]
- Se $\int_E \xi^+ (e) \cdot \mu(de) = +\infty$ e $\int_E \xi^- (e) \cdot \mu(de) < +\infty$, allora poniamo $\int_E \xi (e) \cdot \mu(de) = +\infty$.
- Se $\int_E \xi^+ (e) \cdot \mu(de) < +\infty$ e $\int_E \xi^- (e) \cdot \mu(de) = +\infty$, allora poniamo $\int_E \xi (e) \cdot \mu(de) = -\infty$.
- Se $\int_E \xi^+ (e) \cdot \mu(de) = +\infty$ e $\int_E \xi^- (e) \cdot \mu(de) = +\infty$, allora l'integrale di $\xi$ rispetto a $\mu$ è **indefinito**.

Osserviamo anche che il modulo di $\xi$ può essere scritto come $|\xi| = \xi^+ + \xi^-$.

### **Proposizione:**

Una funzione misurabile $\xi$ è integrabile (con integrale finito) se e solo se $\int_E |\xi| (e) \cdot \mu(de) < +\infty$. In questo caso, $\int_E \xi^+ (e) \cdot \mu(de) < +\infty$ e $\int_E \xi^- (e) \cdot \mu(de) < +\infty$.
![[Pasted image 20250407134936.png]]
(*per dire che si ammette integrale basterà allora testare sul valore assoluto della funzione $\xi$*)

___
### Integrabilità di una Funzione Misurabile

Per garantire che l'integrale di una funzione misurabile $\xi$ sia ben definito (cioè che non si abbia la forma $\infty - \infty$), si richiede che l'integrale del modulo della funzione sia finito: $\int |\xi| \mu(de) < \infty$

Se il valore assoluto di una funzione misurabile $\xi$ è integrabile (ha integrale finito), allora **automaticamente** gli integrali della parte positiva ($\int \xi^+ \mu(de)$) e della parte negativa ($\int \xi^- \mu(de)$) sono finiti, e quindi la funzione $\xi$ ammette un integrale finito.

### Integrale su un Insieme Misurabile

Se $A$ appartiene alla $\sigma$-algebra $\mathcal{E}$, si può definire l'integrale di una funzione misurabile $\xi$ ristretto all'insieme $A$: $$\int_A \xi(e) \cdot \mu(de) = \int \xi(e) \cdot \mathbb{1}_A \mu(de)$$

dove $\mathbb{1}_A$ è la funzione indicatrice dell'insieme $A$, definita come: $\mathbb{1}_A(x) = \begin{cases} 1 & \text{se } x \in A \\ 0 & \text{se } x \notin A \end{cases}$

Questa definizione intuitivamente significa considerare la funzione $\xi$ che vale zero al di fuori dell'insieme $A$. La funzione $\xi \cdot \mathbb{1}_A$ è misurabile perché è il prodotto di due funzioni misurabili. Ci si può poi chiedere se questa nuova funzione sia integrabile. Questa operazione di restringere l'integrazione a un sottoinsieme misurabile non sempre funziona con l'integrale di Riemann.

### Proprietà dell'Integrale Astratto

Sia $(E, \mathcal{E}, \mu)$ uno spazio di misura con $\mu$ $\sigma$-finita, e siano $\xi, \xi_1, \xi_2$ funzioni misurabili da $E$ a $\mathbb{R} \cup \set{-\infty, +\infty}$.

#### 1. Monotonia

Se $\xi \ge 0$ per ogni $e \in E$, allora: $\int_E \xi(e) \cdot \mu(de) \ge 0$

Questa proprietà segue direttamente dalla definizione dell'integrale per funzioni positive, che si basa su limiti di integrali di funzioni semplici positive.

#### 2. Linearità

Se $A, B \in \mathbb{R}$ e $\xi_1, \xi_2$ sono integrabili (hanno integrale finito), allora $A\xi_1 + B\xi_2$ è integrabile e: $\int_E (A\xi_1 + B\xi_2) \mu(de) = A \int_E \xi_1 \mu(de) + B \int_E \xi_2 \mu(de)$

Questa proprietà mostra che l'integrale è un operatore lineare, analogo alla linearità della somma per variabili aleatorie discrete e dell'integrale di Riemann.
![[Pasted image 20250407140100.png]]
#### 3. Insensitività agli Insiemi di Misura Nulla (?)

Sia $A \in \mathcal{E}$ tale che $\mu(A) = 0$. Se $\xi$ è integrabile, allora: $\int_A \xi(e) \cdot \mu(de) = 0$

Quindi, l'integrale di una funzione integrabile su un insieme di misura nulla è zero.

Una conseguenza importante di questa proprietà e della linearità è la seguente: se $\xi_1$ e $\xi_2$ sono integrabili e l'insieme ${e \in E \mid \xi_1(e) \neq \xi_2(e)}$ ha misura zero, allora: $\int_E \xi_1 \mu(de) = \int_E \xi_2 \mu(de)$

Questo significa che se si modifica una funzione integrabile su un insieme di misura nulla, il suo integrale non cambia. Questa è una differenza significativa rispetto all'integrale di Riemann.
![[Pasted image 20250407140417.png]]
#### 4. Teorema di Convergenza Monotona (MCT)

Sia $(\xi_n)_{n \in \mathbb{N}}$ una successione di funzioni misurabili tali che $0 \le \xi_n \le \xi_{n+1}$ per ogni $n$, e sia $\xi(e) = \lim_{n \to \infty} \xi_n(e)$ per ogni $e \in E$. Allora: $\lim_{n \to \infty} \int_E \xi_n \mu(de) = \int_E \xi(e) \cdot \mu(de)$

Equivalentemente, si può "portare il limite dentro l'integrale" in questo caso: $\lim_{n \to \infty} \int_E \xi_n(e) \mu(de) = \int_E \left( \lim_{n \to \infty} \xi_n(e) \right) \mu(de)$

Le ipotesi di positività e convergenza monotona sono cruciali per questo teorema. Il limite degli integrali può anche essere $+\infty$ se l'integrale della funzione limite è $+\infty$. Questo teorema non è generalmente valido per l'integrale di Riemann.

#### 5. Convergenza per Serie

Sia $(\xi_n)_{n \in \mathbb{N}}$ una successione di funzioni misurabili tali che $\xi_n \ge 0$ per ogni $n$. Allora: $$\sum_{n=1}^{\infty} \int_E \xi_n \mu(de) = \int_E \left( \sum_{n=1}^{\infty} \xi_n \right) \mu(de)$$

Anche in questo caso, si può "scambiare la somma con l'integrale", a condizione che le funzioni siano non negative. Questa proprietà può essere dimostrata usando il Teorema di Convergenza Monotona. I valori di entrambe le espressioni possono essere finiti o $+\infty$.
![[Pasted image 20250407140627.png]]
#### 6. Integrabilità e Valori Finiti Quasi Ovunque

Se $\xi$ è una funzione misurabile a valori in $\mathbb{R} \cup {-\infty, +\infty}$ e $\int_E |\xi (e)| \mu(de) < \infty$ (cioè $\xi$ è integrabile), allora la misura dell'insieme $\set{e:|\xi(e)| = +\infty}$ è zero: $\mu\set{e:|\xi(e)| = +\infty} = 0$

Quindi, se una funzione ha integrale finito, essa può assumere valori $\pm \infty$ solo su un insieme di misura nulla. Di conseguenza, se si sa che $\int_E |\xi| \mu(de) < \infty$, allora la funzione $\xi$ è **finitamente valutata quasi ovunque**. Questo implica che nella convergenza per serie, se $\sum_{n=1}^{\infty} \int_E \xi_n \mu(de) < \infty$, allora la serie $\sum_{n=1}^{\infty} \xi_n(e)$ converge per quasi ogni $e \in E$.
![[Pasted image 20250408095309.png]]
### Esempi

#### Esempio 1: Integrale rispetto a una misura discreta

Si consideri una misura $\mu$ definita come: $\mu = \sum_{n} \pi_n \delta_{e_n} (de)$

dove $(\pi_n)$ è una successione di pesi positivi, $(e_n)$ è una successione di punti in $E$, e $\delta_{e_n} (de)$ è la misura di Dirac nel punto $e_n$. L'integrale di una funzione $\xi$ rispetto a questa misura è dato da: $\int_E \xi(e) \cdot \mu(de) = \sum_{n\ge1} \xi(e_n) \pi_n$

La condizione di integrabilità in questo caso diventa $\sum_{n} |\xi(e_n)| \pi_n < \infty$. L'integrale è quindi una serie pesata dei valori della funzione nei punti che supportano la misura. Se tutti i $\pi_n = 1$ e $E = \mathbb{N}$ (o $\mathbb{Z}$), allora l'integrale di $\xi$ su $\mathbb{R}$ è la serie $\sum_{n} \xi(n)$, se questa è ben definita (cioè converge assolutamente).
![[Pasted image 20250408095818.png]]
#### Esempio 2: Valore atteso di una variabile aleatoria discreta

Sia $X$ una variabile aleatoria discreta a valori in $\mathbb{R}$. Il valore atteso di $X$ è definito come: $E[X] = \sum_{x} x P(X=x) = \sum_{i} x_i P(X=x_i)$

dove $(x_i)$ sono i possibili valori di $X$ e $P(X=x_i)$ sono le rispettive probabilità. Si scopre che questo valore atteso coincide con l'integrale astratto di $X$ su $\Omega$ rispetto alla misura di probabilità $P$: $E[X] = \int_{\Omega} X(\omega) P(d\omega)$

Inoltre, questo coincide anche con l'integrale astratto della funzione identità $x \mapsto x$ su $\mathbb{R}$ rispetto alla misura immagine $P_X$ di $P$ tramite $X$: $E[X] = \int_{\mathbb{R}} x P_X(dx)$

dove $P_X(A) = P(X \in A)$ per $A \subseteq \mathbb{R}$ misurabile. Nel caso discreto, la misura immagine $P_X$ è una misura discreta concentrata sui valori assunti da $X$ con pesi dati dalle probabilità.
![[Pasted image 20250408100122.png]]
### Integrale di Lebesgue su $\mathbb{R}^d$

L'integrale di Lebesgue è un caso particolare dell'integrale astratto dove lo spazio di partenza è $\mathbb{R}^d$, la $\sigma$-algebra è quella dei boreliani $\mathcal{B}(\mathbb{R}^d)$, e la misura $\mu$ è la misura di Lebesgue $m$ su $\mathbb{R}^d$. Una funzione $h: \mathbb{R}^d \to \mathbb{R}$ è detta misurabile se è borel-misurabile.
![[Pasted image 20250408100621.png]]
 L'integrale di Lebesgue di $h(x)$ su $\mathbb{R}^d$ si scrive come: $\int_{\mathbb{R}^d} h(x) Leb_D(dx)$

e più comunemente come: $\int_{\mathbb{R}^d} h(x) dx$ oppure $\int_{\mathbb{R}^d} h(x_1, ..., x_d) dx_1 ... dx_d$

Questo integrale è ben definito per funzioni misurabili e può valere un numero finito o $\pm \infty$.

### Relazione tra Integrale di Lebesgue e Integrale di Riemann

Sostanzialmente, tutte le funzioni che si dovranno integrare saranno integrabili secondo Lebesgue, e l'integrale di Riemann **coinciderà** con l'integrale di Lebesgue quando entrambi sono definiti.

Il problema principale con l'integrale di Riemann sorge quando si vuole integrare una funzione $h(x)$ su un sottoinsieme $A \subseteq \mathbb{R}^d$: $\int_A h(x) dx = \int_{\mathbb{R}^d} h(x) \mathbb{1}_A(x) dx$

Se $A$ è un insieme la cui funzione indicatrice $\mathbb{1}_A$ non è integrabile secondo Riemann (come ad esempio $A = \mathbb{Q} \cap [0,1]$), allora l'integrale di Riemann non è definito, mentre l'integrale di Lebesgue lo è.
![[Pasted image 20250408101856.png]]
D'altra parte, se il modulo di una funzione $h$ è integrabile secondo Riemann (in senso improprio, se necessario) su $\mathbb{R}$, allora $h$ è integrabile secondo Lebesgue e i due integrali coincidono: $\int_{\mathbb{R}} h(x) dx_{\text{Lebesgue}} = \int_{\mathbb{R}} h(x) dx_{\text{Riemann}}$

Ad esempio, $\int_0^1 x^2 dx$ calcolato con l'integrale di Riemann darà lo stesso risultato se calcolato con l'integrale di Lebesgue. Analogamente per $\int_0^{2\pi} \sin(x) dx$.

Esistono però casi in cui l'integrale di Riemann in senso improprio è definito ma la funzione non è integrabile secondo Lebesgue (cioè l'integrale del modulo è infinito), come ad esempio alcune funzioni oscillanti. Tuttavia, per gli scopi del corso, gli integrali che si dovranno calcolare potranno essere risolti usando le tecniche dell'integrale di Riemann (teorema fondamentale del calcolo, cambio di variabili, integrazione per parti). È fondamentale però riconoscere che l'integrale di Lebesgue offre una teoria più generale, in particolare per l'integrazione su insiemi più complessi e per i teoremi di convergenza.
![[Pasted image 20250408102918.png]]
### Costruzione di Misure di Probabilità a Partire da Funzioni

Sia $f: \mathbb{R}^d \to \mathbb{R}$ una funzione tale che:

1. $f(x) \ge 0$ per ogni $x \in \mathbb{R}^d$
2. $f$ è misurabile (borel-misurabile)
3. $\int_{\mathbb{R}^d} f(x) dx = 1$ (l'integrale è inteso nel senso di Lebesgue)
![[Pasted image 20250408105603.png]]
Allora, la funzione di insieme $P$ definita per ogni insieme boreliano $A \in \mathcal{B}(\mathbb{R}^d)$ come: $P(A) = \int_A f(x) dx = \int_{\mathbb{R}^d} \mathbb{1}_A(x) f(x) dx$

è una **misura di probabilità** sui boreliani di $\mathbb{R}^d$.
![[Pasted image 20250408105708.png]]
**Dimostrazione:**

1. **Non negatività:** $P(A) = \int_A f(x) dx \ge 0$ per la proprietà di monotonia dell'integrale, poiché $f(x) \ge 0$ e $\mathbb{1}_A(x) \ge 0$.
2. **Probabilità dello spazio totale:** $P(\mathbb{R}^d) = \int_{\mathbb{R}^d} f(x) dx = 1$ per ipotesi.
3. **$\sigma$-additività:** Sia $(A_n)_{n \in \mathbb{N}}$ una successione di insiemi boreliani a due a due disgiunti. Allora: $P\left( \bigcup_{n=1}^{\infty} A_n \right) = \int_{\mathbb{R}^d} \mathbb{1}_{\bigcup_{n=1}^{\infty} A_n}(x) f(x) dx$ Poiché gli $A_n$ sono disgiunti, $\mathbb{1}_{\bigcup_{n=1}^{\infty} A_n}(x) = \sum_{n=1}^{\infty} \mathbb{1}_{A_n}(x)$. Quindi: $P\left( \bigcup_{n=1}^{\infty} A_n \right) = \int_{\mathbb{R}^d} \left( \sum_{n=1}^{\infty} \mathbb{1}_{A_n}(x) \right) f(x) dx$ Per la proprietà di convergenza per serie dell'integrale astratto (che si applica all'integrale di Lebesgue): $P\left( \bigcup_{n=1}^{\infty} A_n \right) = \sum_{n=1}^{\infty} \int_{\mathbb{R}^d} \mathbb{1}_{A_n}(x) f(x) dx = \sum_{n=1}^{\infty} P(A_n)$ Quindi, $P$ è $\sigma$-additiva.
![[Pasted image 20250408105927.png]]
**Esempio:** La funzione $f(x) = \mathbb{1}_{[0, +\infty)}(x) e^{-x}$ è misurabile e non negativa su $\mathbb{R}$. Il suo integrale su $\mathbb{R}$ è: $\int_{\mathbb{R}} f(x) dx = \int_0^{+\infty} e^{-x} dx = [-e^{-x}]_0^{+\infty} = 0 - (-1) = 1$. Quindi, questa funzione $f(x)$ definisce una misura di probabilità sui boreliani di $\mathbb{R}$ tramite $P(A) = \int_A e^{-x} \mathbb{1}_{[0, +\infty)}(x) dx$.

La possibilità di costruire misure di probabilità in questo modo, integrando su insiemi che potrebbero avere indicatori non Riemann-integrabili, è una delle motivazioni per l'uso dell'integrale di Lebesgue.
#### References

[[appunti bussetti- lez11.pdf]]



2025-04-08 11:03

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## prob-lez12

## Vettori Assolutamente Continui

### Richiami sull'Integrale Astratto e Misure di Probabilità

Il professore inizia ricordando un risultato fondamentale collegato all'integrale astratto.

**Proposizione:** Sia $f$ una funzione tale che $f(x) \ge 0$ per ogni $x \in \mathbb{R}^d$ e $\int_{\mathbb{R}^d} f(x) dx = 1$, dove l'integrale è inteso nel senso di Lebesgue. Allora, la funzione che associa ad ogni boreliano $A \subseteq \mathbb{R}^d$ il valore $\int_A f(x) dx$ definisce una misura di probabilità sui boreliani di $\mathbb{R}^d$.

**Commento:** Questo significa che ogni funzione non negativa la cui integrale su tutto lo spazio sia unitario può essere vista come la densità di una misura di probabilità.

### Definizione di Vettore Assolutamente Continuo

Partendo da questa osservazione, il professore introduce la definizione di vettore aleatorio assolutamente continuo.

**Definizione (Prima Forma):** Un vettore aleatorio $X$ definito su uno spazio di probabilità a valori in $\mathbb{R}^d$ (con la $\sigma$-algebra dei boreliani) si dice _con legge assolutamente continua_ se la sua funzione di ripartizione $F_X(x)$, per ogni $x = (x_1, \dots, x_d) \in \mathbb{R}^d$, può essere scritta come l'integrale multiplo di Lebesgue di una funzione $f(y) \ge 0$ tale che $\int_{\mathbb{R}^d} f(y) dy = 1$. Nello specifico:

$$F_X(x) = P(X_1 \le x_1, \dots, X_d \le x_d) = \int_{\set{y \in \mathbb{R}^d: y_i \le x_i, \forall i=1,\dots,d}} f_X(y) dy$$

La funzione $f(x)$ è detta **densità** (o funzione di densità di probabilità, PDF) del vettore $X$.

**Commento:** La funzione di ripartizione rappresenta la probabilità che il vettore aleatorio $X$ cada nel "quadrante" $(-\infty, x_1] \times \dots \times (-\infty, x_d]$. La definizione afferma che questa probabilità può essere calcolata integrando la densità su questo insieme.
![[Pasted image 20250408111828.png]]
### Definizione Equivalente di Vettore Assolutamente Continuo

Il professore presenta poi una definizione equivalente, più generale e spesso più utile.

**Definizione (Seconda Forma):** Un vettore aleatorio $X$ è assolutamente continuo se esiste una funzione densità $f_x(x) \ge 0$ con $\int_{\mathbb{R}^d} f_x(x) dx = 1$ tale che, per ogni insieme boreliano $A \subseteq \mathbb{R}^d$, la probabilità che $X$ appartenga ad $A$ sia data da:

$P(X \in A) = \int_A f(x) dx$

La funzione $f(x)$ è la densità del vettore $X$.

**Dimostrazione dell'Equivalenza (Accennata):**

- **Dalla seconda alla prima definizione:** Se vale la seconda definizione, prendendo come insieme boreliano $A$ il quadrante $\set{y \in \mathbb{R}^d: y_i \le x_i, \forall i=1,\dots,d}$, si ottiene direttamente la prima definizione.
- **Dalla prima alla seconda definizione:** Si osserva che l'insieme dei quadranti definisce una classe $\mathcal{P}$ che genera tutti i boreliani di $\mathbb{R}^d$. La funzione $P'(A) = \int_A f(x) dx$ definisce una misura di probabilità sui boreliani. Per ipotesi (prima definizione), $P(X \in A) = P'(A)$ per ogni $A$ appartenente alla classe $\mathcal{P}$ dei quadranti. Poiché due misure di probabilità che coincidono su una classe $\mathcal{P}$ che genera la $\sigma$-algebra devono coincidere su tutta la $\sigma$-algebra, si ha che $P(X \in A) = \int_A f(x) dx$ per ogni boreliano $A \subseteq \mathbb{R}^d$.

**Commento:** La seconda definizione è più potente perché permette di calcolare la probabilità che il vettore aleatorio cada in _qualsiasi_ insieme boreliano, non solo in particolari "quadranti".
![[Pasted image 20250408112148.png]]
### Riassunto dei Tipi di Vettori Aleatori

Il professore riassume i diversi modi per descrivere un vettore aleatorio. Dato un vettore aleatorio $X$ a valori in $\mathbb{R}^d$:

1. **Legge Immagine (o Misura di Probabilità Indotta):** Si può sempre definire la misura di probabilità $P_X(A) = P(X \in A)$ per ogni boreliano $A \subseteq \mathbb{R}^d$.
2. **Funzione di Ripartizione:** Si può sempre definire la funzione $F_X(x) = P(X_1 \le x_1, \dots, X_d \le x_d)$ per ogni $x \in \mathbb{R}^d$.
![[Pasted image 20250408112839.png]]
Poi si distinguono due casi particolari:

3. **Vettore Discreto:** In questo caso, esiste un insieme numerabile di punti $C \subseteq \mathbb{R}^d$ tale che $P(X \in C) = 1$. Si può definire una **densità discreta (o funzione di massa di probabilità)** $f_X(x) = P(X = x)$ per $x \in C$, e $f_X(x) = 0$ altrimenti. La probabilità che $X$ appartenga a un insieme $A$ si ottiene sommando le probabilità dei punti di $C$ contenuti in $A$: $P(X \in A) = \sum_{x \in A \cap C} f_X(x)$.
4. **Vettore Assolutamente Continuo:** Come definito precedentemente, esiste una funzione di densità $f_X(x) \ge 0$ con $\int_{\mathbb{R}^d} f_X(x) dx = 1$ tale che $P(X \in A) = \int_A f_X(x) dx$ per ogni boreliano $A \subseteq \mathbb{R}^d$.

**Commento:** Non tutte le leggi di probabilità rientrano in questi due casi (puramente discreto o assolutamente continuo), ma essi coprono una parte significativa delle distribuzioni utilizzate. In altri casi, si può ricorrere alla funzione di ripartizione per descrivere la legge di probabilità.
![[Pasted image 20250408113240.png]]
### Relazione tra Densità e Funzione di Ripartizione (Caso $d=1$)

Nel caso unidimensionale ($d=1$), esiste una relazione importante tra la funzione di ripartizione e la densità per variabili assolutamente continue.

**Proposizione (Caso $d=1$):** Se $X$ è una variabile aleatoria assolutamente continua con densità $f(x)$, allora la sua funzione di ripartizione $F_X(x)$ è data da:

$F_X(x) = P(X \le x) = \int_{-\infty}^{x} f(t) dt$

Nel caso discreto, la funzione di ripartizione è data da:

$F_X(x) = P(X \le x) = \sum_{x_i \le x} P(X = x_i) = \sum_{x_i \le x} f_X(x_i)$

dove la somma è estesa a tutti i valori $x_i$ nel supporto (insieme numerabile di punti con probabilità non nulla) di $X$ che sono minori o uguali a $x$. La funzione di ripartizione di una variabile discreta è una funzione costante a tratti.
![[Pasted image 20250408113504.png]]
**Commento:** Nel caso assolutamente continuo, se la densità $f(t)$ è continua in un punto $x$, allora la funzione di ripartizione $F_X(x)$ è derivabile in quel punto e la sua derivata è uguale alla densità: $F_X'(x) = f(x)$ (Teorema Fondamentale del Calcolo) 

### Proprietà dei Vettori Assolutamente Continui

Il professore sottolinea alcune importanti proprietà dei vettori assolutamente continui.

**Proposizione:** Se $X$ è un vettore assolutamente continuo a valori in $\mathbb{R}^d$, allora per ogni $x \in \mathbb{R}^d$, la probabilità che $X$ sia esattamente uguale a $x$ è zero:

$P(X = x) = 0$

**Dimostrazione:** Un singolo punto $x$ in $\mathbb{R}^d$ ha misura di Lebesgue zero. Quindi:

$P(X = x) = \int_{{x}} f(y) dy = 0$

dove $dx$ indica la misura di Lebesgue.

**Proposizione:** Se $H \subseteq \mathbb{R}^d$ è un sottoinsieme con misura di Lebesgue nulla (ad esempio, un iperpiano di dimensione strettamente minore di $d$), allora la probabilità che $X$ appartenga ad $H$ è zero:

$P(X \in H) = \int_H f(y) dy = 0$

**Esempio (Caso $d=2$):** Se $X = (X_1, X_2)$ è un vettore assolutamente continuo in $\mathbb{R}^2$, allora la probabilità che $X_1 = X_2$ è zero. L'insieme ${(x_1, x_2) \in \mathbb{R}^2: x_1 = x_2}$ è una retta (un iperpiano di dimensione 1 in $\mathbb{R}^2$), che ha misura di Lebesgue zero.

**Commento:** Questa proprietà può sembrare controintuitiva, ma significa che per una variabile assolutamente continua, non possiamo osservare un valore specifico con probabilità non nulla. Le probabilità sono associate a insiemi di misura positiva (intervalli, palle, ecc.) .
![[Pasted image 20250408113748.png]]

### Distinzione tra Probabilità Puntuale e Densità

Il professore evidenzia una differenza cruciale :

**Osservazione:** Per un vettore assolutamente continuo $X$ con densità $f(x)$:

- $P(X = x) = 0$ per ogni $x \in \mathbb{R}^d$ .
- Il valore della densità $f(x)$ in un punto $x$ non rappresenta la probabilità che $X$ sia uguale a $x$ e non è necessariamente compreso tra 0 e 1 .

**Commento:** La densità $f(x)$ indica la "concentrazione" di probabilità attorno al punto $x$. Per ottenere una probabilità, è necessario integrare la densità su un insieme contenente $x$ che abbia misura di Lebesgue positiva (un "volume" attorno a $x$) .
![[Pasted image 20250408114002.png]]
### Continuità della Funzione di Ripartizione (Caso $d=1$)

**Proposizione (Caso $d=1$):** Se $X$ è una variabile aleatoria assolutamente continua, allora la sua funzione di ripartizione $F_X(x)$ è continua ovunque .



**Esercizi, esempi e ulteriori passaggi matematici non sono presenti negli estratti forniti.**

___
# Variabili Aleatorie Assolutamente Continue

## Probabilità di un Punto e Funzione di Ripartizione

Nel caso di una variabile aleatoria assolutamente continua, la **probabilità di un singolo punto è sempre uguale a zero**.

$$P(X = x) = 0$$

La **funzione di ripartizione** (CDF), $F_X(x) = P(X \le x)$, associata a una variabile assolutamente continua può essere scritta come l'integrale della sua **funzione di densità di probabilità** (PDF), $f_X(t)$:

$$F_X(x) = \int_{-\infty}^{x} f_X(t) dt$$

Per definizione, questa funzione di ripartizione $F_X(x)$ è **continua**.

**Dimostrazione (Accennata):** Questa proprietà deriva dal fatto che $F_X(x) = \int_{-\infty}^{x} f(t) dt$. L'integrale di Lebesgue è continuo rispetto al limite superiore di integrazione 

**Commento:** La continuità della funzione di ripartizione è una caratteristica delle variabili assolutamente continue e le distingue dalle variabili discrete, la cui funzione di ripartizione presenta dei salti nei punti in cui la variabile assume valori con probabilità positiva. Tuttavia, la continuità della funzione di ripartizione non implica necessariamente che la variabile sia assolutamente continua (esistono distribuzioni singolari continue) . Il viceversa è vero: se una variabile è assolutamente continua, la sua funzione di ripartizione è continua .

**Attenzione**: Non è vero il viceversa. Si possono avere funzioni di ripartizione continue che non corrispondono a leggi assolutamente continue. Un esempio è la **funzione di Cantor** (o scala del diavolo).
![[Pasted image 20250408114657.png]]
## Misure Non Atomiche

In dimensione $d=1$, le misure di probabilità che hanno una funzione di ripartizione continua sono dette **non atomiche**, il che significa che non esiste alcun punto con una massa di probabilità strettamente positiva.

La classe delle variabili aleatorie con legge assolutamente continua è un sottinsieme della classe più grande delle variabili aleatorie con funzione di ripartizione continua (non atomiche).

Spesso si userà l'affermazione: "X ha legge assolutamente continua, quindi la sua funzione di ripartizione è assolutamente continua (e quindi continua)". È importante non confondere "X assolutamente continua" con "$f_X(x)$ continua".

## Definizione di Legge Assolutamente Continua

Una variabile aleatoria $X$ ha una **legge assolutamente continua** se la sua funzione di ripartizione $F_X(x)$ può essere espressa come l'integrale di una funzione $f_X(t)$ positiva e integrabile (la densità):

$$F_X(x) = \int_{-\infty}^{x} f_X(t) dt$$

## Esempio: Distribuzione Uniforme su (0, 1)

Consideriamo una variabile aleatoria $X$ distribuita uniformemente sull'intervallo $(0, 1)$. La sua funzione di ripartizione $F_X(x)$ è data da:

$$ F_X(x) = \begin{cases} 0 & \text{se } x \le 0 \\ x & \text{se } 0 < x < 1 \\ 1 & \text{se } x \ge 1 \end{cases} $$

Possiamo verificare che questa funzione di ripartizione può essere scritta come l'integrale di una densità $f_X(t)$:

$$f_X(t) = \begin{cases} 1 & \text{se } 0 < t < 1 \\ 0 & \text{altrimenti} \end{cases} $$

Infatti, per ogni $x \in \mathbb{R}$:

$$ \int_{-\infty}^{x} f_X(t) dt = F_X(x) $$

La funzione $f_X(t)$ è positiva, misurabile e il suo integrale su tutto $\mathbb{R}$ è uguale a 1:

$$ \int_{-\infty}^{\infty} f_X(t) dt = \int_{0}^{1} 1 dt = [t]_{0}^{1} = 1 - 0 = 1 $$

Quindi, la variabile aleatoria $X$ con distribuzione uniforme su $(0, 1)$ ha una legge assolutamente continua. Notiamo che la funzione di ripartizione $F_X(x)$ è continua, mentre la sua densità $f_X(t)$ non lo è (ha discontinuità nei punti $t=0$ e $t=1$). Questo conferma che l'assoluta continuità riguarda la legge (o la funzione di ripartizione), non necessariamente la densità.
![[Pasted image 20250408114949.png]]
## Non Unicità della Funzione di Densità

La funzione di densità $f_X(x)$ per una variabile aleatoria assolutamente continua **non è unica** in senso stretto. Se modifichiamo la densità in un numero finito di punti (o più in generale, su un insieme di misura di Lebesgue nulla), la funzione di ripartizione associata non cambia.

Ad esempio, per la distribuzione uniforme su $(0, 1)$, la densità potrebbe anche essere definita come:

$$f'_X(t) = \begin{cases} 2 & \text{se } t = 0.5 \\ 1 & \text{se } 0 < t < 1, t \neq 0.5 \\ 0 & \text{altrimenti} \end{cases} $$

Questa $f'_X(t)$ è ancora una densità per la distribuzione uniforme su $(0, 1)$ perché l'integrale di Lebesgue è insensibile a modifiche su insiemi di misura nulla. Tuttavia, nella pratica, si sceglie una rappresentazione conveniente della densità.

La densità contiene informazioni sulla probabilità di un intorno, non sul valore puntuale.
![[Pasted image 20250408115132.png]]
## Definizione di Leggi Assolutamente Continue Tramite la Densità

Spesso, le variabili aleatorie assolutamente continue vengono definite direttamente specificando la loro funzione di densità. Ad esempio:

- $X$ ha una **legge uniforme** se la sua densità è costante su un intervallo e zero altrove.
- $X$ ha una **legge esponenziale** se la sua densità ha una specifica forma funzionale (come vedremo in seguito).
- $X$ ha una **legge Gamma**, ecc..

In questi casi, si assume che la variabile aleatoria sia assolutamente continua con la densità data.

## Verifica dell'Assoluta Continuità a Partire dalla Funzione di Ripartizione

Per verificare se una funzione di ripartizione $F(x)$ corrisponde a una variabile aleatoria assolutamente continua, si deve controllare se esiste una funzione positiva e integrabile $f(t)$ tale che per ogni $x$:

$$F(x) = \int_{-\infty}^{x} f(t) dt$$

Se si riesce a trovare tale funzione $f(t)$, allora essa è la densità della variabile aleatoria.

In dimensione uno, un modo pratico per trovare la densità, se esiste, è calcolare la derivata della funzione di ripartizione.

## Relazione tra Funzione di Ripartizione e Densità Tramite la Derivazione

Se la funzione di ripartizione $F_X(x)$ è derivabile su $\mathbb{R}$ meno un insieme finito di punti, allora la sua derivata è uguale alla funzione di densità di probabilità $f_X(x)$ nei punti di derivabilità:

$$f_X(x) = \frac{d}{dx} F_X(x)$$
![[Pasted image 20250408115609.png]]
**Esempio: Distribuzione Uniforme (Riconsiderata)**

La funzione di ripartizione della distribuzione uniforme su $(0, 1)$ è:

$$ F_X(x) = \begin{cases} 0 & \text{se } x \le 0 \\ x & \text{se } 0 < x < 1 \\ 1 & \text{se } x \ge 1 \end{cases} $$

La sua derivata è:

$$ \frac{d}{dx} F_X(x) = \begin{cases} 0 & \text{se } x < 0 \\ 1 & \text{se } 0 < x < 1 \\ 0 & \text{se } x > 1 \end{cases} $$

Questa derivata coincide con la densità $f_X(x)$ definita in precedenza, eccetto che nei punti $x=0$ e $x=1$ dove la derivata non esiste. Tuttavia, poiché questi sono solo due punti (un insieme di misura nulla), ciò non influisce sull'integrale.
![[Pasted image 20250408115809.png]]
**Controesempio: Variabile Aleatoria Discreta**

Consideriamo una variabile aleatoria $X$ tale che $P(X = 0) = 1$. La sua funzione di ripartizione è:

$$ F_X(x) = \begin{cases} 0 & \text{se } x < 0 \\ 1 & \text{se } x \ge 0 \end{cases} $$

Questa funzione di ripartizione **non è continua** in $x=0$. Pertanto, la variabile aleatoria $X$ non è assolutamente continua. Inoltre, la sua derivata è zero ovunque tranne in $x=0$ dove non è definita, e una funzione che è zero quasi ovunque non può integrare a 1 (che è la probabilità totale).

## Approccio Operativo per Trovare la Densità

Se si sa che una variabile aleatoria è assolutamente continua, la sua densità può essere trovata derivando la funzione di ripartizione dove essa è derivabile (tipicamente ovunque tranne un insieme finito di punti).

## Esempio: Distribuzione Esponenziale

Consideriamo una variabile aleatoria $X$ con **distribuzione esponenziale di parametro $\lambda > 0$**. Si definisce che $X$ è assolutamente continua con funzione di densità:

$$f_X(x) = \begin{cases} \lambda e^{-\lambda x} & \text{se } x > 0 \\ 0 & \text{se } x \le 0 \end{cases} $$

Verifichiamo che questa è una densità: è positiva per $x > 0$. Calcoliamo l'integrale su tutto $\mathbb{R}$:

$$ \int_{-\infty}^{\infty} f_X(x) dx = \int_{0}^{\infty} \lambda e^{-\lambda x} dx $$

La primitiva di $\lambda e^{-\lambda x}$ è $-e^{-\lambda x}$. Quindi:

$$\begin{aligned} \int_{0}^{\infty} \lambda e^{-\lambda x} dx = \lim_{b \to \infty} [-e^{-\lambda x}]_{0}^{b} = \\ \\ \lim_{b \to \infty} (-e^{-\lambda b} - (-e^{0})) = (0 - (-1)) = 1 \end{aligned}$$

Quindi $f_X(x)$ è una funzione di densità. Calcoliamo ora la funzione di ripartizione $F_X(x) = P(X \le x) = \int_{-\infty}^{x} f_X(t) dt$:

- Se $x < 0$: $$ F_X(x) = \int_{-\infty}^{x} 0 dt = 0 $$
- Se $x \ge 0$: $$ \begin{aligned} F_X(x) = \int_{-\infty}^{0} 0 dt + \int_{0}^{x} \lambda e^{-\lambda t} dt =\\ 0 + [-e^{-\lambda t}]_{0}^{x} = -e^{-\lambda x} - (-e^{0}) = 1 - e^{-\lambda x}\end{aligned}  $$

Quindi la funzione di ripartizione della distribuzione esponenziale è:

$$ F_X(x) = \begin{cases} 0 & \text{se } x < 0 \\ 1 - e^{-\lambda x} & \text{se } x \ge 0 \end{cases} $$

Questa funzione $F_X(x)$ è continua. La sua derivata per $x > 0$ è $\frac{d}{dx} (1 - e^{-\lambda x}) = -(-\lambda) e^{-\lambda x} = \lambda e^{-\lambda x}$, che coincide con la densità $f_X(x)$ per $x > 0$.
![[Pasted image 20250408120818.png]]
## Chiarimento sulla Definizione di Assoluta Continuità e il Ruolo di $\Omega$

Essere assolutamente continua non presuppone necessariamente la conoscenza esplicita della funzione di ripartizione. La definizione formale si basa sull'esistenza di una densità.

Dal punto di vista teorico, una variabile aleatoria $X$ è definita su uno spazio probabilistico $(\Omega, \mathcal{F}, P)$. La sua legge (o distribuzione) è una misura di probabilità su $\mathbb{R}$. Dire che $X$ è assolutamente continua significa che questa misura di probabilità è assolutamente continua rispetto alla misura di Lebesgue, il che implica l'esistenza di una densità $f_X$.

In pratica, spesso si definisce una variabile aleatoria assolutamente continua specificando la sua densità $f_X(x)$, che è una funzione positiva che integra a 1. Data una tale densità, si può definire una misura di probabilità e quindi (teoricamente) trovare uno spazio $(\Omega, \mathcal{F}, P)$ e una variabile aleatoria $X: \Omega \to \mathbb{R}$ che abbia quella densità. Tuttavia, nella maggior parte delle applicazioni, non è necessario costruire esplicitamente $\Omega$; è sufficiente lavorare con la densità.

In sintesi, quando si dice che $X$ è assolutamente continua con una certa densità, si sta affermando che esiste uno spazio probabilistico sottostante tale che la variabile aleatoria $X$ ha quella specifica densità, e quindi la sua funzione di ripartizione può essere ottenuta integrando tale densità.

### Unicità della Variabile Aleatoria Data una Densità

**Affermazione:** Data una funzione di densità, non esiste un'unica variabile aleatoria che la possieda.

**Commento:** Questa affermazione è valida anche per le funzioni di ripartizione (CDF), sebbene questo aspetto non sarà centrale per la discussione. L'analogia viene fatta con la distribuzione uniforme, dove, pur avendo una specifica funzione di ripartizione uniforme, è possibile costruire diverse variabili aleatorie che seguono tale distribuzione.

**Esempio:** Si possono costruire in diversi modi variabili aleatorie distinte che condividono la stessa legge di probabilità.

**Implicazione:** La definizione di una variabile aleatoria attraverso la sua densità o funzione di ripartizione fornisce informazioni sulla **legge immagine** di $X$, ovvero sulla distribuzione di probabilità dei valori che $X$ può assumere. Per i calcoli, si può fare riferimento allo spazio campionario $\Omega$, ma domande specifiche che dipendono dalla struttura di $\Omega$ potrebbero non essere risolvibili unicamente conoscendo la legge di $X$.

**Esempio:** Se $X$ è una variabile aleatoria geometrica, la sua legge è definita senza specificare lo spazio campionario $\Omega$. È possibile calcolare il valore atteso di $X$ con queste informazioni. Tuttavia, per sapere quali elementi $\omega \in \Omega$ corrispondono a un valore specifico di $X$, come $X=3$, è necessario conoscere la struttura di $\Omega$.

**Conclusione:** Molte proprietà di una variabile aleatoria, come il valore atteso, dipendono solo dalla sua legge (e quindi, nel caso assolutamente continuo, dalla sua densità) e non dalla specifica realizzazione sullo spazio campionario $\Omega$.

## Proprietà della Distribuzione Esponenziale

Il professore introduce la distribuzione esponenziale come esempio di variabile aleatoria assolutamente continua.

### Probabilità che $X$ sia Maggiore o Uguale a Zero

**Proprietà:** Per una variabile aleatoria $X$ con legge esponenziale, $P(X \ge 0) = 1$.

**Dimostrazione 1 (Integrale della Densità):** $\begin{align}  P(X \ge 0) =\\ \int_{0}^{+\infty} f(x) dx =  \int_{0}^{+\infty} \lambda e^{-\lambda x} dx = \\ [ -e^{-\lambda x} ]_{0}^{+\infty} =  -e^{-\infty} - (-e^{0}) = 0 - (-1) = 1 \end{align}$.

**Dimostrazione 2 (Funzione di Ripartizione):** La funzione di ripartizione $F(x)$ per una variabile aleatoria esponenziale è data da $F(x) = 1 - e^{-\lambda x}$ per $x \ge 0$ e $0$ per $x < 0$. $P(X \ge 0) = 1 - P(X < 0) = 1 - F(0^-) = 1 - 0 = 1$. Oppure, $P(X \ge 0) = 1 - P(X < 0)$. Poiché per $x<0$, $F(x)=0$, allora $P(X<0) = \lim_{x \to 0^-} F(x) = 0$. Quindi $P(X \ge 0) = 1 - 0 = 1$.

### Assenza di Memoria della Distribuzione Esponenziale

**Problema:** Calcolare la probabilità condizionata $P(X > t + s | X > t)$ per $s, t > 0$, dove $X$ è una variabile aleatoria esponenziale di parametro $\lambda$.

**Definizione di Probabilità Condizionata:** $P(A | B) = \frac{P(A \cap B)}{P(B)}$

**Applicazione al Problema:** $P(X > t + s | X > t) = \frac{P(X > t + s \cap X > t)}{P(X > t)}$.

**Osservazione sull'intersezione degli eventi:** Se $X > t + s$, allora necessariamente $X > t$ (poiché $s > 0$). Quindi, l'evento ${X > t + s}$ è contenuto nell'evento ${X > t}$, e la loro intersezione è l'evento più "piccolo": ${X > t + s} \cap {X > t} = {X > t + s}$.

**Calcolo di $P(X > u)$:** $P(X > u) = 1 - P(X \le u) = 1 - F(u)$. Per $u > 0$, $F(u) = 1 - e^{-\lambda u}$, quindi $P(X > u) = 1 - (1 - e^{-\lambda u}) = e^{-\lambda u}$.

**Calcolo della Probabilità Condizionata:** $P(X > t + s | X > t) = \frac{P(X > t + s)}{P(X > t)} = \frac{e^{-\lambda (t + s)}}{e^{-\lambda t}} = e^{-\lambda t - \lambda s + \lambda t} = e^{-\lambda s}$.

**Interpretazione:** Si osserva che $e^{-\lambda s} = P(X > s)$. Quindi, $P(X > t + s | X > t) = P(X > s)$.

**Conclusione (Proprietà di Assenza di Memoria):** La probabilità che un guasto (o un evento modellato da una distribuzione esponenziale) non si verifichi per un ulteriore tempo $s$, dato che non si è verificato fino al tempo $t$, è uguale alla probabilità che non si verifichi per un tempo $s$ a partire dall'istante iniziale (tempo zero). In altre parole, la "memoria" del processo si azzera.
![[Pasted image 20250408122521.png]]
**Esempio Pratico (Affidabilità di una Macchina):** Se $X$ rappresenta il tempo di guasto di una macchina, la proprietà di assenza di memoria implica che la probabilità che una macchina che ha funzionato per $t$ unità di tempo continui a funzionare per altre $s$ unità di tempo è la stessa della probabilità che una macchina nuova funzioni per $s$ unità di tempo.

**Critica del Modello Esponenziale per Guasti Reali:** Questa proprietà di assenza di memoria potrebbe non essere realistica per modellare il guasto di macchine reali, in cui la probabilità di guasto tende ad aumentare con l'usura.

**Estensione alla Distribuzione Geometrica (Discreta):** Il professore menziona che la distribuzione geometrica (nel caso discreto) possiede una proprietà analoga di assenza di memoria.

**Unicità tra le Distribuzioni Continue Positive:** Tra le variabili aleatorie assolutamente continue e positive, la distribuzione esponenziale è l'unica a godere della proprietà di assenza di memoria.

## Altri Esempi di Distribuzioni Assolutamente Continue

### Distribuzione Gaussiana (Normale)

**Definizione:** Una variabile aleatoria $X$ si dice assolutamente continua con legge (o distribuzione) gaussiana (o normale) di parametri $\mu \in \mathbb{R}$ (media) e $\sigma^2 > 0$ (varianza) se la sua funzione di densità è data da: $f(x) = \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}$, per $x \in \mathbb{R}$.

**Verifica che la Densità Integra a 1:** $\int_{-\infty}^{+\infty} f(x) dx = \int_{-\infty}^{+\infty} \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{(x - \mu)^2}{2\sigma^2}} dx$ Utilizzando il cambio di variabili $t = \frac{x - \mu}{\sigma}$, si ha $x = \mu + \sigma t$ e $dx = \sigma dt$. Gli estremi di integrazione rimangono $(-\infty, +\infty)$. $\int_{-\infty}^{+\infty} \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{t^2}{2}} \sigma dt = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} e^{-\frac{t^2}{2}} dt$ L'integrale $\int_{-\infty}^{+\infty} e^{-\frac{t^2}{2}} dt = \sqrt{2\pi}$ (integrale gaussiano). Quindi, l'integrale della densità è $\frac{1}{\sqrt{2\pi}} \sqrt{2\pi} = 1$.
![[Pasted image 20250408122937.png]]
**Gaussiana Standard (Normale Standard):** Un caso particolare è la gaussiana standard, con parametri $\mu = 0$ e $\sigma^2 = 1$. La sua densità è: $\phi(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}$

**Funzione di Ripartizione della Gaussiana:** La funzione di ripartizione $F(x) = P(X \le x) = \int_{-\infty}^{x} f(t) dt$ non ha una forma chiusa esprimibile in termini di funzioni elementari (seno, coseno, esponenziale, ecc.). Può essere espressa in termini della funzione di errore (erf), che è comunque definita come un integrale.
![[Pasted image 20250408123011.png]]

**Notazione per la Funzione di Ripartizione della Gaussiana Standard:** La funzione di ripartizione della gaussiana standard è spesso indicata con la lettera $\Phi(x)$.

**Proprietà della Densità Gaussiana:** La densità gaussiana è una funzione continua e derivabile ovunque.

**Importanza della Distribuzione Gaussiana:** La distribuzione gaussiana è fondamentale nel calcolo delle probabilità e nella statistica, in particolare per il Teorema del Limite Centrale.

### Distribuzione di Cauchy

**Definizione:** Una variabile aleatoria $X$ con distribuzione di Cauchy con parametri $\mu \in \mathbb{R}$ e $\sigma > 0$ ha una funzione di densità data da: $f(x) = \frac{1}{\pi \sigma \left[ 1 + \left( \frac{x - \mu}{\sigma} \right)^2 \right]}$

Spesso, viene considerata la Cauchy standard con parametri $\mu = 0$ e $\sigma = 1$, la cui densità è: $f(x) = \frac{1}{\pi (1 + x^2)}$

La funzione di ripartizione della Cauchy con parametri $\mu$ e $\sigma$ è: $F(x) = \frac{1}{\pi} \arctan\left( \frac{x - \mu}{\sigma} \right) + \frac{1}{2}$

**Simmetria della Gaussiana e della Cauchy:** Sia la gaussiana standard che la Cauchy standard sono distribuzioni simmetriche rispetto allo zero. Una variabile aleatoria $X$ ha la stessa legge di $-X$ (indicato come $X \stackrel{\mathcal{L}}{=} -X$) se e solo se la sua distribuzione è simmetrica rispetto allo zero.

**Verifica della Simmetria:** Per dimostrare che $X \stackrel{d}{=} -X$, si può verificare che la funzione di ripartizione di $X$, $F_X(x)$, è tale che $F_X(x) = 1 - F_X(-x^-) = 1 - P(X < -x)$. Alternativamente, si può mostrare che la densità $f_X(x)$ è una funzione pari, ovvero $f_X(x) = f_X(-x)$. Sia la densità gaussiana standard $\phi(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}$ che la densità Cauchy standard $f(x) = \frac{1}{\pi (1 + x^2)}$ soddisfano questa proprietà.
![[Pasted image 20250408123410.png]]
### Code Leggere vs. Code Pesanti

**Comportamento delle Code:** La differenza tra la distribuzione gaussiana e la Cauchy risiede nel comportamento delle loro code, ovvero come la densità si avvicina a zero per $|x| \to \infty$.

- **Gaussiana:** La densità gaussiana decade esponenzialmente, come $e^{-x^2/2}$, quindi molto rapidamente. Si dice che la gaussiana ha **code leggere**. Questo implica che la probabilità di osservare valori molto distanti dalla media è molto bassa.
    
- **Cauchy:** La densità di Cauchy decade come un polinomio, specificamente come $\frac{1}{x^2}$. Questo decadimento è molto più lento rispetto all'esponenziale. Si dice che la Cauchy ha **code pesanti**. Ciò significa che la probabilità di osservare valori estremi è significativamente più alta rispetto a una distribuzione gaussiana con parametri simili.
    

**Implicazione per il Valore Atteso:** La distribuzione di Cauchy è un esempio di variabile aleatoria che non ha un valore atteso finito, a causa del comportamento delle code della sua densità.

## Valore Atteso e Varianza per Variabili Aleatorie Discrete (Ricapitolazione e Anticipazione)

### Valore Atteso (Caso Discreto)

Per una variabile aleatoria discreta $X$ con funzione di massa di probabilità $P(X = x_i) = p_i$, il valore atteso (o media) di $X$, denotato con $E[X]$, è definito come: $E[X] = \sum_{i} x_i p_i$, ammesso che la somma converga assolutamente.

Se $g$ è una funzione reale, il valore atteso di $g(X)$ è: $E[g(X)] = \sum_{i} g(x_i) p_i$, ammesso che la somma converga assolutamente.

### Varianza (Caso Discreto)

La varianza di una variabile aleatoria discreta $X$, denotata con $Var(X)$ o $\sigma^2_X$, è definita come il valore atteso del quadrato della deviazione di $X$ dalla sua media: $Var(X) = E[(X - E[X])^2]$

La varianza può anche essere calcolata utilizzando la seguente formula: $Var(X) = E[X^2] - (E[X])^2$

**Spiegazione:** $Var(X) = E[(X - \mu)^2] = E[X^2 - 2\mu X + \mu^2] = E[X^2] - 2\mu E[X] + E[\mu^2]$ Dato che $\mu = E[X]$ è una costante, $E[\mu X] = \mu E[X] = \mu^2$ e $E[\mu^2] = \mu^2$. Quindi, $Var(X) = E[X^2] - 2\mu^2 + \mu^2 = E[X^2] - \mu^2 = E[X^2] - (E[X])^2$.

**Utilizzo della Definizione per Esercizi:** Negli esercizi, per ora, si richiede di utilizzare la definizione di varianza per il suo calcolo. Le proprietà della varianza saranno studiate più avanti.

#### References



2025-03-19 11:06

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[sbobine]]. [[probabilità]]

## prob-lez13


# Valore Atteso per Variabili Aleatorie Generali

## Introduzione al Valore Atteso Generale

L'argomento di oggi è l'estensione del concetto di **valore atteso** a variabili aleatorie **qualunque**, superando la definizione data per le sole variabili aleatorie discrete. L'obiettivo è definire il valore atteso in un contesto più generale, utilizzando la teoria dell'integrazione astratta.

## Definizione Attraverso l'Integrale Astratto

Consideriamo una variabile aleatoria $X$ definita su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, dove $\Omega$ è lo spazio campionario, $\mathcal{F}$ è la sigma-algebra degli eventi e $P$ è la misura di probabilità. La variabile aleatoria $X$ assume valori nei numeri reali Boreliani $\mathbb{R}$ (o eventualmente in $\mathbb{R}$ esteso) ed è una funzione misurabile $X: \Omega \to \mathbb{R}$ (o $\mathbb{R} \cup {-\infty, +\infty}$).

L'**integrale astratto** di una funzione misurabile su uno spazio con una misura sigma-finita è un concetto matematico ben definito, sebbene la sua definizione rigorosa coinvolga l'approssimazione con funzioni semplici e il passaggio al limite.

Nel nostro caso, per definire il valore atteso di una variabile aleatoria $X$, utilizziamo l'integrale astratto con le seguenti specifiche scelte:

- Lo spazio di misura è lo spazio di probabilità $(\Omega, \mathcal{F}, P)$.
- La funzione misurabile è la variabile aleatoria $X: \Omega \to \mathbb{R}$.

Formalmente, il **valore atteso** di $X$, denotato con $E[X]$, è definito come l'integrale astratto di $X$ rispetto alla misura di probabilità $P$ su $\Omega$:

$$E[X] = \int_\Omega X(\omega) dP(\omega)$$

È importante notare che questa notazione è, inizialmente, un **simbolo** che rappresenta un oggetto matematicamente ben definito sotto opportune condizioni. Affinché il valore atteso sia ben definito, in particolare, l'integrale astratto del modulo di $X$, $\int_\Omega |X(\omega)| dP(\omega)$, deve essere finito.

## Richiamo al Caso Discreto

Quando abbiamo introdotto il valore atteso per variabili aleatorie discrete, abbiamo implicitamente utilizzato questo concetto di integrale astratto con la specifica misura di probabilità definita sui punti dello spazio campionario discreto. La notazione $\int_\Omega X(\omega) dP(\omega)$ nel caso discreto significa semplicemente applicare la definizione di integrale astratto a quella particolare scelta di $P$ (la misura di probabilità discreta), di $\Omega$ (l'insieme discreto) e della variabile aleatoria $X$ definita su di esso.

## Definizione Costruttiva del Valore Atteso

Per dare un senso più concreto al valore atteso, possiamo seguire una costruzione in tre passaggi:

### 1. Valore Atteso per Variabili Aleatorie Semplici Positive

Una **variabile aleatoria semplice positiva** $X$ può essere espressa come una combinazione lineare finita di funzioni indicatrici di insiemi $A_i \in \mathcal{F}$ con coefficienti $c_i \ge 0$:

$$X(\omega) = \sum_{i=1}^n c_i \mathbf{1}_{A_i}(\omega)$$

dove $\mathbf{1}_{A_i}(\omega) = 1$ se $\omega \in A_i$ e $0$ altrimenti.

Il valore atteso di una variabile aleatoria semplice positiva $X$ è definito come:

$$E[X] = \sum_{i=1}^n c_i P(A_i)$$

### 2. Valore Atteso per Variabili Aleatorie Positive Generali

Per una variabile aleatoria $X \ge 0$, non necessariamente semplice, si costruisce una **successione di variabili aleatorie semplici positive** ${X_n}_{n \ge 1}$ che converge **monotonamente** a $X$, cioè $0 \le X_n(\omega) \le X_{n+1}(\omega) \le X(\omega)$ per ogni $\omega \in \Omega$ e $\lim_{n \to \infty} X_n(\omega) = X(\omega)$.

Il valore atteso di $X$ è quindi definito come il limite dei valori attesi delle variabili semplici approssimanti:

$$E[X] = \lim_{n \to \infty} E[X_n]$$

Questo limite esiste (può essere finito o $+\infty$) ed è **indipendente** dalla particolare successione di variabili semplici che converge monotonamente a $X$.

### 3. Valore Atteso per Variabili Aleatorie Generali

Per una variabile aleatoria $X$ generica (che può assumere valori sia positivi che negativi), si considerano la sua **parte positiva** $X^+ = \max(X, 0)$ e la sua **parte negativa** $X^- = \max(-X, 0)$. Si ha che $X = X^+ - X^-$ e $|X| = X^+ + X^-$.

Il valore atteso di $X$ è definito come:

$$E[X] = E[X^+] - E[X^-]$$

purché entrambi $E[X^+]$ e $E[X^-]$ siano **finiti**.

Se uno solo tra $E[X^+]$ e $E[X^-]$ è infinito, allora $E[X]$ è definito come $+\infty$ o $-\infty$ rispettivamente. Se entrambi $E[X^+]$ e $E[X^-]$ sono infiniti, allora il valore atteso di $X$ **non è ben definito**.

Una variabile aleatoria $X$ è detta **integrabile** se il suo valore atteso del modulo è finito, cioè $E[|X|] < \infty$. Questa condizione è **equivalente** a richiedere che sia $E[X^+] < \infty$ che $E[X^-] < \infty$. In questo caso, il valore atteso $E[X]$ è un numero reale finito.

## Definizione Alternativa del Valore Atteso

Esiste una definizione alternativa del valore atteso di una variabile aleatoria $X$ (anche non positiva) come l'estremo superiore dei valori attesi di tutte le variabili aleatorie semplici positive $S$ che sono minori o uguali a $X$ puntualmente:

$$E[X] = \sup {E[S] \mid S \text{ è semplice, } 0 \le S(\omega) \le X(\omega) \text{ per ogni } \omega \in \Omega }$$

Questa definizione è **equivalente** alla definizione costruttiva basata sul limite di variabili semplici approssimanti.

## Notazioni per il Valore Atteso

Oltre alla notazione $E[X]$, si possono trovare anche le seguenti notazioni per il valore atteso:

- $\int_\Omega X(\omega) dP(\omega)$ (integrale astratto esplicito)
- $\langle X \rangle$ (usata spesso nella letteratura fisica)

Il professore indica che userà prevalentemente la notazione $E[X]$.

## Proprietà del Valore Atteso

Poiché il valore atteso è un caso particolare di integrale astratto (rispetto alla misura di probabilità $P$), esso eredita diverse proprietà. Vediamo alcune delle più importanti:

### Linearità

Siano $X_1$ e $X_2$ due variabili aleatorie con valore atteso finito (integrabili) definite sullo stesso spazio di probabilità $(\Omega, \mathcal{F}, P)$, e siano $a, b \in \mathbb{R}$. Allora la variabile aleatoria $aX_1 + bX_2$ è integrabile e il suo valore atteso è dato da:

$$E[aX_1 + bX_2] = aE[X_1] + bE[X_2]$$

### Monotonia

Se $P(X_1 \ge X_2) = 1$, allora i loro valori attesi soddisfano la stessa disuguaglianza:

$$E[X_1] \ge E[X_2]$$

Come caso particolare, se $P(X_1 \ge 0) = 1$, allora $E[X_1] \ge 0$. Questa proprietà è leggermente più debole rispetto alla proprietà analoga per l'integrale astratto, in quanto la condizione è richiesta solo con probabilità 1, non per ogni $\omega \in \Omega$.

### Disuguaglianza del Valore Assoluto

Per una variabile aleatoria $X_1$ con valore atteso finito, vale la seguente disuguaglianza:

$$|E[X_1]| \le E[|X_1|]$$

### Insensibilità a Eventi di Probabilità Zero

Se due variabili aleatorie $X_1$ e $X_2$ sono uguali con probabilità 1, cioè $P(X_1 = X_2) = 1$, allora i loro valori attesi sono uguali:

$$E[X_1] = E[X_2]$$

In particolare, se $P(X_1 = c) = 1$ per una costante $c \in \mathbb{R}$, allora $E[X_1] = c$.

Corollario: Se $A \in \mathcal{F}$ è un evento con probabilità nulla, $P(A) = 0$, e $X_1$ è una variabile aleatoria integrabile, allora:

$$E[X_1 \mathbf{1}_A] = 0$$

### Valore Atteso e Variabili Aleatorie a Valori Estesi

Le definizioni di valore atteso possono essere estese a variabili aleatorie che possono assumere i valori $+\infty$ o $-\infty$. Tuttavia, se il valore atteso $E[X_1]$ è finito, allora la probabilità che $X_1$ assuma valori infiniti è zero:

$$P(X_1 \in \mathbb{R}) = 1$$

Questo può essere utile in situazioni in cui dimostrare direttamente che una variabile aleatoria non assume valori infiniti è complicato, ad esempio nel caso di limiti di successioni di variabili aleatorie. Se si riesce a dimostrare che il valore atteso del limite è finito, allora il limite stesso sarà finito con probabilità 1.

## Dipendenza dalla Legge della Variabile Aleatoria

Il valore atteso di una variabile aleatoria $X$ dipende unicamente dalla sua **legge** (o distribuzione di probabilità), e non specificamente dallo spazio di probabilità $(\Omega, \mathcal{F}, P)$ su cui è definita. Questa è una giustificazione del perché spesso si parla di variabili aleatorie con specifiche distribuzioni (esponenziale, Gamma, Gaussiana) senza menzionare esplicitamente lo spazio di probabilità sottostante.

Nel caso di variabili aleatorie **assolutamente continue**, la legge è descritta dalla **funzione di densità di probabilità** $f_X(x)$. In questo caso, il valore atteso può essere calcolato come:

$$E[X] = \int_{-\infty}^{+\infty} x f_X(x) dx$$

Nel caso di variabili aleatorie **discrete**, la legge è descritta dalla **funzione di massa di probabilità** $p_X(x) = P(X=x)$. In questo caso, il valore atteso è dato da:

$$E[X] = \sum_x x p_X(x)$$

dove la somma è estesa a tutti i possibili valori $x$ che la variabile aleatoria può assumere.

## Teoremi di Convergenza

Un'altra motivazione fondamentale per l'introduzione del concetto generale di valore atteso attraverso l'integrale astratto è la possibilità di enunciare e dimostrare importanti **teoremi di convergenza** per successioni di variabili aleatorie. Questi teoremi forniscono condizioni sotto le quali è possibile scambiare il limite con l'operatore di valore atteso.

## Convergenza di Variabili Aleatorie e Teoremi Fondamentali

### Introduzione alla Convergenza di Variabili Aleatorie

Il corso approfondirà diversi tipi di convergenza di variabili aleatorie. Questa è la prima volta che si introduce questo argomento, che sarà ripreso in seguito con maggiore dettaglio. È fondamentale ricordare che non esiste un unico tipo di convergenza per variabili aleatorie, pertanto è sempre necessario specificare l'aggettivo che qualifica il tipo di convergenza.

### Convergenza Quasi Certamente

#### Definizione di Convergenza Quasi Certamente

Consideriamo una successione di variabili aleatorie ${X_n}_{n \ge 1}$ definite su un comune spazio di probabilità $(\Omega, \mathcal{F}, P)$ a valori in $\mathbb{R}$, e una variabile aleatoria $X$ definita sullo stesso spazio di probabilità.

**Definizione:** La successione di variabili aleatorie ${X_n}$ converge **quasi certamente** a $X$ se la probabilità dell'insieme degli $\omega \in \Omega$ tali per cui il limite di $X_n(\omega)$ è uguale a $X(\omega)$ è pari a 1.

In simboli, scriviamo $X_n \xrightarrow{q.c.} X$ se $$
P\left(\left\{\omega \in \Omega : \lim_{n \to \infty} X_n(\omega) = X(\omega)\right\}\right) = 1
$$ È importante notare che tutte le variabili aleatorie della successione e la variabile aleatoria limite devono essere definite sullo stesso spazio di probabilità.

#### Interpretazione della Convergenza Quasi Certamente

Per ogni $\omega$ fissato, $X_n(\omega)$ è una successione di numeri reali. La convergenza quasi certa significa che questa successione converge a $X(\omega)$ per tutti gli $\omega$ appartenenti a un sottoinsieme di $\Omega$ che ha probabilità 1.

**Osservazione:** La convergenza quasi certa è "leggermente meno" stringente della convergenza puntuale. Se $X_n(\omega)$ converge a $X(\omega)$ per ogni $\omega \in \Omega$, allora la convergenza quasi certa è automaticamente verificata, poiché l'insieme ${\omega \in \Omega : \lim_{n \to \infty} X_n(\omega) = X(\omega)}$ coincide con $\Omega$, e $P(\Omega) = 1$. Tuttavia, è possibile avere convergenza quasi certa anche se la convergenza puntuale non si verifica su un insieme di misura di probabilità nulla.

L'espressione "quasi certamente" indica che un certo evento (in questo caso, la convergenza puntuale di $X_n(\omega)$ a $X(\omega)$) si verifica su un insieme $\Omega' \subseteq \Omega$ tale che $P(\Omega') = 1$.

**Esempio:** Se $P(X_1 = 0) = 1$, allora si può dire che $X_1$ è quasi certamente uguale a 0. In tal caso, il valore atteso di $X_1$ è $E[X_1] = 0$.

### Teorema di Convergenza Monotona

Questo teorema stabilisce un importante risultato sul limite del valore atteso di una successione di variabili aleatorie non negative che convergono in modo monotono.

**Teorema di Convergenza Monotona:** Sia ${X_n}_{n \ge 1}$ una successione di variabili aleatorie definite su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ tali che:

- $X_n \ge 0$ quasi certamente per ogni $n \ge 1$. Questo significa che $P(X_n \ge 0) = 1$ per ogni $n$.
- $X_n$ converge a $X$ in modo monotono crescente quasi certamente, cioè $X_{n+1} \ge X_n$ quasi certamente per ogni $n \ge 1$, e $X_n \xrightarrow{q.c.} X$. In termini di probabilità, $P(X_{n+1} \ge X_n) = 1$ per ogni $n$, e $P\left(\left{\omega \in \Omega : \lim_{n \to \infty} X_n(\omega) = X(\omega)\right}\right) = 1$.

Allora, il limite dei valori attesi di $X_n$ è uguale al valore atteso del limite $X$: $$ \lim_{n \to \infty} E[X_n] = E[X] $$ È importante notare che i valori attesi possono essere finiti o anche $+\infty$. Se il membro di destra è infinito, allora anche il membro di sinistra deve essere infinito, e viceversa.

**Osservazione:** Le due condizioni del teorema (non negatività e convergenza monotona) sono cruciali e il risultato non vale per una qualunque successione di variabili aleatorie.

### Corollario sulla Convergenza di Serie di Variabili Aleatorie Non Negative

Questo corollario, derivabile dal teorema di convergenza monotona (e anche dal teorema di convergenza dominata), riguarda la convergenza di serie di variabili aleatorie non negative.

**Corollario:** Sia ${X_n}_{n \ge 1}$ una successione di variabili aleatorie tali che $X_n \ge 0$ quasi certamente per ogni $n \ge 1$. Se la serie dei valori attesi converge, cioè $\sum_{i=1}^{\infty} E[X_i] < \infty$, allora la serie $\sum_{i=1}^{\infty} X_i$ converge quasi certamente a una variabile aleatoria finita.

**Dimostrazione (Esercizio):** Si consideri la successione delle somme parziali $S_n = \sum_{i=1}^{n} X_i$. Poiché $X_i \ge 0$, la successione ${S_n}_{n \ge 1}$ è monotona crescente. Si applichi il teorema di convergenza monotona alla successione ${S_n}$. Se $\sum_{i=1}^{\infty} E[X_i] = L < \infty$, allora $\lim_{n \to \infty} E[S_n] = E[\lim_{n \to \infty} S_n] = E\left[\sum_{i=1}^{\infty} X_i\right] = L < \infty$. Se il valore atteso della somma è finito, allora la somma stessa deve essere finita quasi certamente (proprietà di finitezza del valore atteso non esplicitata nelle fonti, ma richiamata dal professore).

**Esempio:** Supponiamo di avere una successione di variabili aleatorie $X_i \ge 0$ tali che $E[X_i] \le \frac{1}{i^2}$. Sappiamo che la serie numerica $\sum_{i=1}^{\infty} \frac{1}{i^2}$ converge. Quindi, per il corollario, la serie di variabili aleatorie $\sum_{i=1}^{\infty} X_i$ converge quasi certamente.

**Importanza del Corollario:** Questo risultato è utile perché spesso è più semplice calcolare o stimare il valore atteso di singole variabili aleatorie o di una serie di valori attesi, piuttosto che studiare direttamente la convergenza quasi certa di una serie di variabili aleatorie.

### Teorema di Convergenza Dominata

Questo è un altro teorema fondamentale che fornisce condizioni per scambiare il limite con l'integrale (o il valore atteso) quando si ha convergenza quasi certa.

**Teorema di Convergenza Dominata:** Sia ${X_n}_{n \ge 1}$ una successione di variabili aleatorie definite su uno spazio di probabilità $(\Omega, \mathcal{F}, P)$ tale che:

- $X_n$ converge quasi certamente a una variabile aleatoria $X$, cioè $X_n \xrightarrow{q.c.} X$.
- Esiste una variabile aleatoria $Y$ definita sullo stesso spazio di probabilità tale che $|X_n| \le Y$ quasi certamente per ogni $n \ge 1$, e il valore atteso di $|Y|$ è finito, cioè $E[|Y|] < \infty$.

Allora, vale il seguente risultato sul limite dei valori attesi: $$ \lim_{n \to \infty} E[X_n] = E[X] $$ **Osservazione:** A differenza del teorema di convergenza monotona, le variabili aleatorie $X_n$ non devono essere non negative né convergere in modo monotono; è sufficiente la convergenza quasi certa. Tuttavia, è necessario trovare una variabile aleatoria $Y$ "dominante" che sia integrabile (cioè con valore atteso finito) e che limiti in modulo tutte le $X_n$ quasi certamente.

**Domanda del Professore:** Le variabili aleatorie $X_n$ nel teorema di convergenza dominata possono avere valore atteso più infinito?

**Risposta:** No, perché se $|X_n| \le Y$ quasi certamente e $E[|Y|] < \infty$, allora per la proprietà di monotonia del valore atteso (non esplicitata nelle fonti, ma richiamata dal professore), anche $E[|X_n|]$ deve essere finito, e quindi anche $E[X_n]$ è ben definito e finito.

**Confronto con il Teorema di Convergenza Monotona:** Nel teorema di convergenza monotona per variabili non negative, era possibile che i valori attesi fossero infiniti. Nel teorema di convergenza dominata, la condizione di dominazione con una variabile integrabile implica che i valori attesi delle $X_n$ (e di $X$) sono sempre finiti.

**Osservazioni aggiuntive sul Teorema di Convergenza Dominata:** Esistono diverse varianti del teorema di convergenza dominata, alcune delle quali prevedono una dominazione non da una singola variabile $Y$ ma da una successione di variabili aleatorie. Esistono anche versioni per misure sigma-finite e per l'integrale astratto, ma non saranno trattate nel corso. La versione presentata è la più semplice e spesso sufficiente per le applicazioni.

# Valore Atteso e Cambiamento di Variabili

## Introduzione al Valore Atteso e al Problema del Calcolo di $E[g(X)]$

Il valore atteso di una variabile aleatoria è un concetto fondamentale nella teoria della probabilità. In termini astratti, dato uno spazio di misura $(\Omega, \mathcal{F}, P)$ e una variabile aleatoria $Y: \Omega \rightarrow \mathbb{R}$, il valore atteso di $Y$, denotato con $E[Y]$, è definito come l'integrale di Lebesgue di $Y$ rispetto alla misura di probabilità $P$:

$$E[Y] = \int_{\Omega} Y(\omega) dP(\omega)$$

Spesso ci troviamo nella situazione in cui vogliamo calcolare il valore atteso di una funzione di una variabile aleatoria, ovvero $E[g(X)]$, dove $X: \Omega \rightarrow X$ è una variabile aleatoria a valori in uno spazio $X$, e $g: X \rightarrow \mathbb{R}$ è una funzione misurabile. Calcolare direttamente l'integrale su $\Omega$ può essere complicato, specialmente quando la struttura di $\Omega$ e la natura di $X$ non sono esplicitamente note.

## Cambiamento di Variabili Astratto

### Schema Generale

Consideriamo il seguente schema:

$\Omega \xrightarrow{X} X \xrightarrow{g} \mathbb{R}$

dove:

- $(\Omega, \mathcal{F}, P)$ è uno spazio di misura.
- $X: \Omega \rightarrow X$ è una funzione misurabile (una variabile aleatoria astratta a valori nello spazio $X$).
- $g: X \rightarrow \mathbb{R}$ è una funzione misurabile.

La variabile aleatoria $Y = g(X)$ è quindi una funzione misurabile da $\Omega$ a $\mathbb{R}$, e il suo valore atteso è dato da:

$$E[g(X)] = \int_{\Omega} g(X(\omega)) dP(\omega)$$

### Teorema di Cambiamento di Variabili

Il teorema di cambiamento di variabili fornisce un modo alternativo per calcolare questo valore atteso, spesso più semplice.

**Teorema (Cambiamento di Variabili Astratto):** Siano $X: \Omega \rightarrow X$ una variabile aleatoria astratta (funzione misurabile) e $g: X \rightarrow \mathbb{R}$ una funzione misurabile. Sia $P_X$ la misura immagine di $P$ tramite $X$ su $X$. Se $E[|g(X)|] < \infty$, allora:

$$E[g(X)] = \int_{X} g(x) dP_X(x)$$

dove $P_X(B) = P(X^{-1}(B)) = P({ \omega \in \Omega : X(\omega) \in B })$ per ogni insieme misurabile $B \subseteq X$. In altre parole, il valore atteso di $g(X)$ può essere calcolato come l'integrale di $g$ sullo spazio $X$ rispetto alla misura indotta $P_X$.

**Dimostrazione:** (Implicita nel testo, il professore afferma che se uno dei due integrali è ben definito, lo è anche l'altro e sono uguali).

### Esempio Concreto: Vettore Aleatorio in $\mathbb{R}^D$

Consideriamo un vettore aleatorio $X = (X_1, ..., X_D): \Omega \rightarrow \mathbb{R}^D$. In questo caso, lo spazio $X$ è $\mathbb{R}^D$ con la sua $\sigma$-algebra dei boreliani $\mathcal{B}(\mathbb{R}^D)$. La misura indotta $P_X$ è la misura immagine su $\mathbb{R}^D$, che è la legge (o distribuzione) del vettore aleatorio $X$.

Se $g: \mathbb{R}^D \rightarrow \mathbb{R}$ è una funzione misurabile, allora il valore atteso di $g(X)$ è dato da:

$$E[g(X)] = \int_{\mathbb{R}^D} g(x_1, ..., x_D) dP_X(x_1, ..., x_D)$$

Questo integrale è un integrale di Lebesgue su $\mathbb{R}^D$ rispetto alla misura $P_X$.

**Corollario:** Se $X$ è un vettore aleatorio in $\mathbb{R}^D$ e $g: \mathbb{R}^D \rightarrow \mathbb{R}$ è misurabile tale che $E[|g(X)|] < \infty$, allora il valore atteso di $g(X)$ può essere calcolato come l'integrale di $g$ rispetto alla legge (misura immagine) di $X$ su $\mathbb{R}^D$. Questo è un passo importante perché ci permette di lavorare su uno spazio più concreto come $\mathbb{R}^D$ invece dell'astratto $\Omega$.

## Caso Particolare: Variabile Aleatoria Reale

Se $X: \Omega \rightarrow \mathbb{R}$ è una variabile aleatoria reale, allora lo spazio $X$ è $\mathbb{R}$ con la $\sigma$-algebra dei boreliani $\mathcal{B}(\mathbb{R})$, e $P_X$ è la legge di $X$ su $\mathbb{R}$. Per una funzione misurabile $g: \mathbb{R} \rightarrow \mathbb{R}$, il valore atteso di $g(X)$ è:

$$E[g(X)] = \int_{\mathbb{R}} g(x) dP_X(x)$$

### Caso Assolutamente Continuo

Se la variabile aleatoria reale $X$ è assolutamente continua, allora la sua legge $P_X$ può essere rappresentata da una funzione di densità di probabilità $f_X(x) \ge 0$ tale che $\int_{\mathbb{R}} f_X(x) dx = 1$. In questo caso, l'integrale rispetto alla misura $P_X$ si riduce a un integrale di Riemann (o Lebesgue) rispetto alla misura di Lebesgue $dx$:

$$E[g(X)] = \int_{\mathbb{R}} g(x) f_X(x) dx$$

In particolare, il valore atteso di $X$ stesso (quando $g(x) = x$) è:

$$E[X] = \int_{\mathbb{R}} x f_X(x) dx$$

a condizione che $\int_{\mathbb{R}} |x| f_X(x) dx < \infty$.

## Proprietà del Valore Atteso

Il professore menziona alcune proprietà importanti del valore atteso, valide sia nel caso astratto che nei casi particolari (discreto e assolutamente continuo):

- **Linearità:** $E[aY + bZ] = aE[Y] + bE[Z]$ per variabili aleatorie $Y, Z$ e costanti $a, b$.
- **Disuguaglianza del Modulo:** $|E[Y]| \le E[|Y|]$.
- **Monotonia:** Se $Y \le Z$ (puntualmente), allora $E[Y] \le E[Z]$.
- **Teoremi di Convergenza:** (Non specificati nel dettaglio, ma importanti per passare al limite sotto il segno di valore atteso).

Queste proprietà sono particolarmente utili perché valgono in generale, indipendentemente dalla natura discreta o continua della variabile aleatoria.

## Calcolo del Valore Atteso nei Casi Specifici

### Caso 1: Variabile Aleatoria Discreta

Se $X$ è un vettore aleatorio discreto a valori in $\mathbb{R}^D$, allora assume un insieme finito o numerabile di valori ${x_i}_{i \in I}$ con probabilità $p_i = P(X = x_i) > 0$ tali che $\sum_{i \in I} p_i = 1$. La legge di $X$, $P_X$, è una misura discreta concentrata sui punti ${x_i}$. Per una funzione $g: \mathbb{R}^D \rightarrow \mathbb{R}$, il valore atteso di $g(X)$ è dato dalla somma:

$$E[g(X)] = \sum_{i \in I} g(x_i) P(X = x_i) = \sum_{i \in I} g(x_i) p_i$$

Questo era già stato visto come la proprietà P0 nel caso discreto.

### Caso 2: Variabile Aleatoria Assolutamente Continua (Unidimensionale)

Se $X$ è una variabile aleatoria reale assolutamente continua con densità $f_X(x)$, allora per una funzione $g: \mathbb{R} \rightarrow \mathbb{R}$ tale che $E[|g(X)|] < \infty$, il valore atteso di $g(X)$ è dato da:

$$E[g(X)] = \int_{\mathbb{R}} g(x) f_X(x) dx$$

In particolare, il valore atteso di $X$ è:

$$E[X] = \int_{\mathbb{R}} x f_X(x) dx$$

se $\int_{\mathbb{R}} |x| f_X(x) dx < \infty$.

## Esempi di Calcolo del Valore Atteso

### Esempio 1: Variabile Aleatoria Uniforme su $$

Sia $X$ una variabile aleatoria uniforme sull'intervallo $$. La sua densità di probabilità è:

$$f_X(x) = \begin{cases} 1 & \text{se } 0 \le x \le 1 \ 0 & \text{altrimenti} \end{cases}$$

**Calcolo di $E[X]$:**

$$E[X] = \int_{\mathbb{R}} x f_X(x) dx = \int_{0}^{1} x \cdot 1 dx = \left[ \frac{1}{2} x^2 \right]_{0}^{1} = \frac{1}{2} (1)^2 - \frac{1}{2} (0)^2 = \frac{1}{2}$$

Questo risultato è intuitivo: il valore medio di una variabile uniformemente distribuita tra 0 e 1 è il punto medio dell'intervallo.

**Calcolo di $E[X^2 \mathbb{1}_{{X > 1/2}}]$:**

Sia $g(x) = x^2 \mathbb{1}_{{x > 1/2}}(x)$. Allora:

$$E[g(X)] = \int_{\mathbb{R}} g(x) f_X(x) dx = \int_{\mathbb{R}} x^2 \mathbb{1}_{{x > 1/2}}(x) f_X(x) dx$$

Sostituendo la densità di $X$:

$$E[g(X)] = \int_{0}^{1} x^2 \mathbb{1}_{{x > 1/2}}(x) \cdot 1 dx$$

L'indicatrice $\mathbb{1}_{{x > 1/2}}(x)$ è 1 se $x > 1/2$ e 0 altrimenti. Quindi l'integrale diventa:

$$E[g(X)] = \int_{1/2}^{1} x^2 dx = \left[ \frac{1}{3} x^3 \right]_{1/2}^{1} = \frac{1}{3} (1)^3 - \frac{1}{3} \left(\frac{1}{2}\right)^3 = \frac{1}{3} - \frac{1}{3} \cdot \frac{1}{8} = \frac{1}{3} - \frac{1}{24} = \frac{8 - 1}{24} = \frac{7}{24}$$

### Esempio 2: Variabile Aleatoria Esponenziale (Esercizio)

Sia $X$ una variabile aleatoria esponenziale di parametro $\lambda = 3$. La sua densità di probabilità è:

$$f_X(x) = \begin{cases} 3 e^{-3x} & \text{se } x \ge 0 \ 0 & \text{se } x < 0 \end{cases}$$

**Esercizio:** Calcolare il tempo medio di vita, ovvero $E[X]$:

$$E[X] = \int_{\mathbb{R}} x f_X(x) dx = \int_{0}^{+\infty} x \cdot 3 e^{-3x} dx$$

Questo integrale può essere risolto utilizzando l'integrazione per parti.

## Conseguenza Importante: Variabili Aleatorie con la Stessa Legge

**Corollario:** Se due variabili aleatorie $X$ e $Y$ hanno la stessa legge (ovvero $P_X = P_Y$), allora, se i rispettivi valori attesi esistono, si ha $E[X] = E[Y]$ e più in generale, per una funzione misurabile $g$, $E[g(X)] = E[g(Y)]$. Questo è vero anche se $X$ e $Y$ sono definite su spazi di probabilità diversi. Il valore atteso dipende unicamente dalla legge (distribuzione) della variabile aleatoria e non dalla struttura dello spazio di probabilità sottostante.

## Caso Multidimensionale Assolutamente Continuo (Chiarimento)

Un vettore aleatorio $X = (X_1, ..., X_D)$ è assolutamente continuo se esiste una funzione di densità congiunta $f_X(x_1, ..., x_D) \ge 0$ tale che per ogni insieme boreliano $A \subseteq \mathbb{R}^D$:

$$P(X \in A) = \int_{A} f_X(x_1, ..., x_D) dx_1 ... dx_D$$

In questo caso, per una funzione misurabile $g: \mathbb{R}^D \rightarrow \mathbb{R}$ tale che $E[|g(X)|] < \infty$, il valore atteso di $g(X)$ è dato dall'integrale multiplo:

$$E[g(X)] = \int_{\mathbb{R}^D} g(x_1, ..., x_D) f_X(x_1, ..., x_D) dx_1 ... dx_D$$

Questo estende il concetto del caso unidimensionale a dimensioni superiori.

## Conclusione

Il teorema di cambiamento di variabili è uno strumento fondamentale per il calcolo del valore atteso di funzioni di variabili aleatorie. Permette di passare da un integrale astratto sullo spazio $\Omega$ a un integrale sullo spazio dei valori della variabile aleatoria (come $\mathbb{R}$ o $\mathbb{R}^D$) rispetto alla legge indotta. Nei casi particolari di variabili discrete e assolutamente continue, questo si traduce in somme e integrali (singoli o multipli) che possono essere calcolati utilizzando le rispettive funzioni di massa o densità di probabilità. Gli esempi illustrano come applicare queste formule in pratica.
#### References

[[Appunti Prob-lez13.pdf]]



2025-04-08 15:51

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[probabilità]]  [[sbobine]]

## prob-lez14


# Varianza di una Variabile Aleatoria

## Definizione di Varianza

Sia $X$ una variabile aleatoria tale che il valore [[atteso]] di $X^2$, indicato come $E[X^2]$, sia finito.

Si definisce **varianza** di $X$, indicata con $Var(X)$ o $\sigma_X^2$, il valore atteso di $(X - m)^2$, dove $m$ è il valore atteso di $X$, ovvero $m = E[X]$.

Matematicamente: $$Var(X) = E[(X - E[X])^2]$$

Questa definizione è valida sia per variabili aleatorie discrete che continue.

**Commento:** La varianza misura la dispersione dei valori di una variabile aleatoria attorno alla sua media. Rappresenta la media dei quadrati delle distanze tra ogni realizzazione della variabile aleatoria e la sua media.

## Momenti di una Variabile Aleatoria

### Momento k-esimo

Il **momento k-esimo** di una variabile aleatoria è definito come $E[X^k]$, se questo valore atteso esiste ed è finito, dove $k$ è un intero.

### Momento k-esimo assoluto

Il **momento k-esimo assoluto** di una variabile aleatoria è definito come $E[|X|^p]$, se questo valore atteso esiste ed è finito, dove $p$ è un numero reale maggiore o uguale a 0 ($p \ge 0$).

**Commento:** La definizione di varianza richiede l'esistenza del momento secondo finito ($E[X^2] < \infty$). Se il momento secondo è finito, allora anche la media (momento primo) è finita.
![[Pasted image 20250408162729.png]]
## Struttura Tipica degli Esami

Gli esami sono generalmente costituiti da:

- Domande a risposta multipla (solitamente due nel compitino).
- Domande a risposta aperta (una nel compitino, due nei compiti più lunghi).
- Esercizi.

**Esempio di domanda a risposta aperta da un compito passato:** Enunciare la definizione di varianza e dimostrare alcune sue proprietà.

## Proprietà della Varianza

### Proprietà 1: Non negatività

**Proposizione:** $Var(X) \ge 0$.

**Dimostrazione:** La varianza è definita come il valore atteso di $(X - m)^2$, dove $(X - m)^2$ è sempre una quantità non negativa (essendo un quadrato). Il valore atteso di una funzione non negativa è sempre non negativo per la proprietà di monotonia del valore atteso.

### Proprietà 2: Formula alternativa per la varianza

**Proposizione:** $Var(X) = E[X^2] - (E[X])^2$.

**Dimostrazione:** Partendo dalla definizione di varianza: $$Var(X) = E[(X - E[X])^2]$$ Svolgendo il quadrato: $$Var(X) = E[X^2 + (E[X])^2 - 2X E[X]]$$ Utilizzando la linearità del valore atteso: $$Var(X) = E[X^2] + E[(E[X])^2] - E[2X E[X]]$$ Poiché $E[X]$ è una costante, $(E[X])^2$ è anch'essa una costante, e $2E[X]$ è una costante. Quindi: $$Var(X) = E[X^2] + (E[X])^2 E - 2E[X] E[X]$$ Ricordando che $E = 1$: $$Var(X) = E[X^2] + (E[X])^2 - 2(E[X])^2$$ $$Var(X) = E[X^2] - (E[X])^2$$

**Commento:** Questa formula è spesso più comoda per calcolare la varianza, in quanto richiede il calcolo del valore atteso di $X^2$ e del quadrato del valore atteso di $X$.

**Errore comune da evitare:** Non scrivere che $Var(X) = E[X^2] - E[X]^2$ (senza le parentesi), in quanto $E[X^2]$ è generalmente diverso da $(E[X])^2$.
![[Pasted image 20250410120607.png]]
### Proprietà 3: Varianza di una trasformazione lineare

**Proposizione:** $Var(aX + b) = a^2 Var(X)$, per ogni $a, b \in \mathbb{R}$ (costanti).

**Dimostrazione:** Utilizzando la definizione di varianza: $$Var(aX + b) = E[((aX + b) - E[aX + b])^2]$$ Per la linearità del valore atteso, $E[aX + b] = aE[X] + b$. Sostituendo: $$Var(aX + b) = E[((aX + b) - (aE[X] + b))^2]$$ $$Var(aX + b) = E[(aX + b - aE[X] - b)^2]$$ $$Var(aX + b) = E[(aX - aE[X])^2]$$ $$Var(aX + b) = E[(a(X - E[X]))^2]$$ $$Var(aX + b) = E[a^2 (X - E[X])^2]$$ Poiché $a^2$ è una costante, può essere portata fuori dal valore atteso per la linearità: $$Var(aX + b) = a^2 E[(X - E[X])^2]$$ Riconoscendo che $E[(X - E[X])^2]$ è la definizione di $Var(X)$: $$Var(aX + b) = a^2 Var(X)$$

**Commento:** Questa proprietà mostra come la varianza viene scalata per trasformazioni lineari. L'aggiunta di una costante $b$ non influisce sulla varianza, mentre la moltiplicazione per una costante $a$ comporta una moltiplicazione della varianza per $a^2$.
![[Pasted image 20250410120707.png]]
### Proprietà 4: Varianza nulla

**Proposizione:** $Var(X) = 0$ se e solo se esiste una costante $c$ tale che $P(X = c) = 1$.

**Dimostrazione:** $(\Rightarrow)$ Se $Var(X) = 0$, allora $E[(X - E[X])^2] = 0$. Poiché $(X - E[X])^2$ è una variabile aleatoria non negativa, il suo valore atteso è zero se e solo se la variabile è zero con probabilità 1. Quindi, $P((X - E[X])^2 = 0) = 1$, il che implica $P(X - E[X] = 0) = 1$, ovvero $P(X = E[X]) = 1$. In questo caso, $c = E[X]$.

$(\Leftarrow)$ Se esiste una costante $c$ tale che $P(X = c) = 1$, allora $E[X] = c$. Quindi, $Var(X) = E[(X - c)^2]$. Poiché $X = c$ con probabilità 1, $(X - c)^2 = (c - c)^2 = 0$ con probabilità 1. Pertanto, $E[(X - c)^2] = E = 0$, quindi $Var(X) = 0$.

**Commento:** Una variabile aleatoria ha varianza zero solo se è degenere, cioè assume un singolo valore con probabilità 1.
![[Pasted image 20250410120022.png]]
## Finitudine dei Momenti

**Osservazione:** Se il momento $S$-esimo assoluto di $X$ è finito per $S > 0$ ($E[|X|^S] < \infty$), allora il momento $r$-esimo assoluto di $X$ è finito per ogni $0 < r < S$ ($E[|X|^r] < \infty$).

**Spiegazione:** Si considera la variabile aleatoria non negativa $|X|^r$. Si ha che $|X|^r \le 1 + |X|^S$. Applicando la linearità e la **monotonia** del valore atteso per variabili aleatorie positive (se $P(Y \le Z) = 1$, allora $E[Y] \le E[Z]$): $$E[|X|^r] \le E[1 + |X|^S] = E + E[|X|^S] = 1 + E[|X|^S]$$ Poiché $E[|X|^S]$ è finito per ipotesi, anche $1 + E[|X|^S]$ è finito. Pertanto, $E[|X|^r]$ è finito.

**Conseguenza:** Se il momento secondo è finito ($E[X^2] < \infty$), allora anche il momento primo assoluto (e quindi il momento primo) è finito ($E[|X|] < \infty$ e $E[X] < \infty$). Questo giustifica l'assunzione che il valore atteso $m = E[X]$ sia finito nella definizione di varianza.

![[Pasted image 20250410120409.png]]

## Standardizzazione di una Variabile Aleatoria

Sia $X$ una variabile aleatoria con valore atteso $m = E[X]$ e varianza finita $Var(X) = \sigma^2$, dove $\sigma = \sqrt{Var(X)}$ è la **deviazione standard** (assumendo $\sigma > 0$).

Si definisce la **standardizzazione** di $X$ una nuova variabile aleatoria $Y$ data da: $$Y = \frac{X - m}{\sigma}$$

### Proprietà della Variabile Aleatoria Standardizzata

#### Media di $Y$

$$E[Y] = E\left[\frac{X - m}{\sigma}\right] = E\left[\frac{1}{\sigma}X - \frac{m}{\sigma}\right]$$ Utilizzando la linearità del valore atteso: $$E[Y] = \frac{1}{\sigma}E[X] - \frac{m}{\sigma}E = \frac{1}{\sigma}m - \frac{m}{\sigma}(1) = \frac{m}{\sigma} - \frac{m}{\sigma} = 0$$ Quindi, la variabile aleatoria standardizzata $Y$ ha **media 0**.

#### Varianza di $Y$

$$Var(Y) = Var\left[\frac{X - m}{\sigma}\right] = Var\left[\frac{1}{\sigma}X - \frac{m}{\sigma}\right]$$ Utilizzando la proprietà $Var(aX + b) = a^2 Var(X)$ con $a = \frac{1}{\sigma}$ e $b = -\frac{m}{\sigma}$: $$Var(Y) = \left(\frac{1}{\sigma}\right)^2 Var(X) = \frac{1}{\sigma^2} \sigma^2 = 1$$ Quindi, la variabile aleatoria standardizzata $Y$ ha **varianza 1**.

**Commento:** La standardizzazione trasforma una variabile aleatoria in una con media zero e varianza unitaria. Questo è utile per confrontare variabili aleatorie con scale e medie diverse. La standardizzazione non richiede alcuna ipotesi sulla forma della distribuzione di $X$, ma solo che abbia varianza finita.
![[Pasted image 20250410121329.png]]
## Trasformazione Lineare di una Variabile Aleatoria (Modello Scala-Posizione)

Sia $X_0$ una variabile aleatoria con funzione di ripartizione $F_{X_0}(x_0)$. Definiamo una nuova variabile aleatoria $X$ come una trasformazione lineare di $X_0$: $$X = sX_0 + \mu$$ dove $\mu \in \mathbb{R}$ e $s > 0$ sono costanti. Questo tipo di modello è chiamato **modello scala-posizione**. $\mu$ rappresenta la traslazione (posizione), e $s$ rappresenta la dilatazione o contrazione (scala).

### Funzione di Ripartizione di $X$

**Proposizione:** La funzione di ripartizione di $X$, $F_X(x) = P(X \le x)$, è data da: $$F_X(x) = F_{X_0}\left(\frac{x - \mu}{s}\right)$$

**Dimostrazione:** $$F_X(x) = P(X \le x) = P(sX_0 + \mu \le x)$$ Sottraendo $\mu$ da entrambi i lati della disuguaglianza: $$F_X(x) = P(sX_0 \le x - \mu)$$ Dividendo per $s$ (ricordando che $s > 0$, quindi la direzione della disuguaglianza non cambia): $$F_X(x) = P\left(X_0 \le \frac{x - \mu}{s}\right)$$ Per definizione di funzione di ripartizione di $X_0$: $$F_X(x) = F_{X_0}\left(\frac{x - \mu}{s}\right)$$
![[Pasted image 20250410121726.png]]
### Funzione di Densità di $X$ (se $X_0$ è assolutamente continua)

**Proposizione:** Se $X_0$ è assolutamente continua con funzione di densità $f_{X_0}(x_0)$, allora anche $X$ è assolutamente continua e la sua funzione di densità $f_X(x)$ è data da: $$f_X(x) = \frac{1}{s} f_{X_0}\left(\frac{x - \mu}{s}\right)$$

**Dimostrazione (informale):** La funzione di densità è la derivata della funzione di ripartizione (dove esiste). Quindi: $$f_X(x) = \frac{d}{dx} F_X(x) = \frac{d}{dx} F_{X_0}\left(\frac{x - \mu}{s}\right)$$ Utilizzando la regola della catena: $$f_X(x) = f_{X_0}\left(\frac{x - \mu}{s}\right) \cdot \frac{d}{dx}\left(\frac{x - \mu}{s}\right)$$ $$\frac{d}{dx}\left(\frac{x - \mu}{s}\right) = \frac{1}{s} \frac{d}{dx}(x - \mu) = \frac{1}{s}(1 - 0) = \frac{1}{s}$$ Quindi: $$f_X(x) = \frac{1}{s} f_{X_0}\left(\frac{x - \mu}{s}\right)$$

**Commento:** Questa trasformazione mostra come la funzione di ripartizione e la funzione di densità cambiano sotto una trasformazione lineare. La divisione per $s$ nella funzione di densità assicura che l'integrale della densità di $X$ su tutto $\mathbb{R}$ sia ancora uguale a 1. La standardizzazione è un caso particolare di questa trasformazione con $s = \sigma$ e $\mu = m$.
![[Pasted image 20250410122100.png]]
## Esercizi e Materiali Aggiuntivi

Il professore ha caldamente invitato a fare gli esercizi, sia quelli svolti durante le esercitazioni di questa e della prossima settimana, sia quelli indicati nel materiale aggiuntivo fornito.

Nel materiale aggiuntivo è presente un riferimento puntuale agli esercizi e alle domande (sia teoriche che a risposta multipla) tratte dai compiti d'esame dell'anno scorso che si possono già svolgere con le conoscenze acquisite fino a questa lezione (inclusa la varianza). Questi esercizi rappresentano un buon esempio di ciò che potrebbe essere chiesto nel compitino.

**Esempio discusso dal professore:** Considerare una variabile aleatoria discreta $X$ che assume valori $k$ con probabilità proporzionale a $\frac{k}{k^c}$ per $k \ge 1$ (dove $c$ è una costante tale che la serie $\sum_{k=1}^\infty \frac{k}{k^c}$ converge). In questo caso, la probabilità che $X$ sia finita è 1, ma il valore atteso di $X$ potrebbe essere infinito (ad esempio, se $c \le 2$). Questo illustra che **avere probabilità 1 che una variabile sia finita non implica che il suo valore atteso sia finito**. La dimostrazione fornita era che $E[X] = \sum_{k} k \cdot P(X=k)$, e se $P(X=k) = \frac{C k}{k^c}$, allora $E[X] = \sum_{k} k \cdot \frac{C k}{k^c} = C \sum_{k} \frac{k^2}{k^c} = C \sum_{k} k^{2-c}$, che diverge se $2-c \ge -1$ (ovvero $c \le 3$). L'esempio più preciso fatto dal professore era con $P(X=k) \propto \frac{1}{k^c}$, e in quel caso $E[X] = \sum k \cdot \frac{C}{k^c} = C \sum k^{1-c}$, che diverge se $1-c \ge -1$ ($c \le 2$). **Errore nella trascrizione precedente, la proporzionalità era a $K/K^c$ e l'esempio fatto era che $E[X] = \sum K \cdot \frac{C K}{K^c} = C \sum K^{2-c}$ diverge se $2-c \ge -1$ ($c \le 3$)**. Tuttavia, il concetto chiave rimane: probabilità di essere finita uguale a 1 non implica valore atteso finito.

Il professore ha anche menzionato che nei prossimi giorni potrebbe essere fornito ulteriore materiale.

___


___
# Spiegazione dei Concetti Chiave sulle Variabili Aleatorie

## Densità e Funzione di Ripartizione

### Individuare la Densità e la Sua Verifica

Il professore spiega come, data una funzione di ripartizione $F(x)$, si possa ipotizzare la forma della densità $f(x)$. Il metodo suggerito è di "guardare in faccia" la funzione di ripartizione. Se la funzione di ripartizione è concreta, si può controllare se è possibile derivarla.

Formalmente, se si ha una funzione di ripartizione $F_X(x)$, si può tentare di trovare la densità $f_X(x)$ derivandola formalmente: $f_X(x) = \frac{d}{dx} F_X(x)$.

Tuttavia, il professore avverte che la derivata potrebbe non esistere in tutti i punti.

Una volta ottenuta una forma per la densità, è necessario verificarla. La verifica consiste nel calcolare l'integrale della densità così ottenuta tra $-\infty$ e $x$ e controllare se si ottiene la funzione di ripartizione originale: $F_X(x) = \int_{-\infty}^{x} f_X(t) dt$.

Questo processo di verifica è descritto come un cambio di variabili nell'integrale.

## Modello Scala Posizione

### Definizione e Vantaggi

Nel contesto di un modello scala posizione, si ha spesso una funzione di ripartizione o una densità assolutamente continua. La proprietà fondamentale di questo modello è che, a partire da una densità, si può costruire un'intera famiglia di densità tramite una trasformazione di scala e posizione.

### Esempio della Famiglia Gaussiana

Un esempio significativo di modello scala posizione è la famiglia delle distribuzioni Gaussiane (o Normali) al variare dei parametri $\mu$ (media) e $\sigma^2$ (varianza).

La densità di una variabile aleatoria $X$ Gaussiana con media $\mu$ e varianza $\sigma^2$ è data da: $$f_X(x) = \frac{1}{\sqrt{2 \pi \sigma^2}} e^{-\frac{(x - \mu)^2}{2 \sigma^2}}$$

Considerando una variabile aleatoria $X_0$ Gaussiana standard (con media 0 e varianza 1), la cui densità è: $f_{X_0}(x_0) = \frac{1}{\sqrt{2 \pi}} e^{-\frac{x_0^2}{2}}$.

Si può notare che la densità di $X$ può essere espressa in termini della densità di $X_0$: $f_X(x) = f_{X_0}\left(\frac{x - \mu}{\sigma}\right) \cdot \frac{1}{\sigma}$.

Questo dimostra che una variabile aleatoria Gaussiana con parametri $\mu$ e $\sigma^2$ può essere vista come un modello scala posizione a partire da una Gaussiana standard. In altre parole, $X$ può essere generata da $X_0$ tramite la trasformazione: $X = \sigma X_0 + \mu$.

Il professore sottolinea che questo è un modo comodo di pensare una Gaussiana con parametri $\mu$ e $\sigma^2$.
![[Pasted image 20250410122342.png]]
## Valore Atteso e Varianza in un Modello Scala Posizione

### Trasformazioni Lineari e Momenti

Considerando una trasformazione scala posizione di una variabile aleatoria $X_0$ con parametri $s$ (scala) e $\mu$ (posizione), definita come $X = sX_0 + \mu$.

Se la varianza di $X_0$ è finita, allora il valore atteso di $X$ è: $E[X] = E[sX_0 + \mu] = sE[X_0] + \mu$.

E la varianza di $X$ è: $Var(X) = Var(sX_0 + \mu) = s^2 Var(X_0)$.
![[Pasted image 20250410122530.png]]
### Dipendenza dai Momenti della Variabile Base

Il professore evidenzia che in un modello scala posizione, $\mu$ non è sempre la media di $X$ e $s$ non è sempre la varianza di $X$. Dipende dai valori della media e della varianza di $X_0$.

- Se $E[X_0] = 0$, allora $E[X] = \mu$.
- Se $Var(X_0) = 1$, allora $Var(X) = s^2$.

### Esempio della Gaussiana (Ritorno)

Nel caso della Gaussiana, se $X_0 \sim N(0, 1)$, allora $E[X_0] = 0$ e $Var(X_0) = 1$. Di conseguenza, se $X = \sigma X_0 + \mu$, allora $E[X] = \mu$ e $Var(X) = \sigma^2$. Questo giustifica perché $\mu$ e $\sigma^2$ sono chiamati rispettivamente media e varianza per la distribuzione Gaussiana.

### Modello Scala Posizione Senza Momenti Finiti: L'Esempio della Cauchy

Il professore menziona che si può avere un modello scala posizione anche per variabili aleatorie che non hanno varianza o media finita, come la distribuzione di Cauchy. Nella parametrizzazione del professore (indicata con $S$ e $M$), la distribuzione di Cauchy è un modello scala posizione nonostante non ammetta né media né varianza finita.

## Valore Atteso e Varianza della Gaussiana Standard

### Verifica della Media Nulla

Per verificare che una Gaussiana standard $X_0$ ha media nulla, si calcola il valore atteso: $E[X_0] = \int_{-\infty}^{+\infty} x f_{X_0}(x) dx = \int_{-\infty}^{+\infty} x \frac{1}{\sqrt{2 \pi}} e^{-\frac{x^2}{2}} dx$.

La funzione integranda $g(x) = x e^{-\frac{x^2}{2}}$ è una funzione dispari (simmetrica rispetto all'origine), cioè $g(-x) = -g(x)$. Pertanto, l'integrale su un intervallo simmetrico come $(-\infty, +\infty)$ è uguale a 0: $E[X_0] = 0$.

### Verifica della Varianza Unitaria

La varianza di $X_0$ è data da $Var(X_0) = E[X_0^2] - (E[X_0])^2$. Poiché $E[X_0] = 0$, si ha $Var(X_0) = E[X_0^2]$.

$Var(X_0) = \int_{-\infty}^{+\infty} x^2 f_{X_0}(x) dx = \int_{-\infty}^{+\infty} x^2 \frac{1}{\sqrt{2 \pi}} e^{-\frac{x^2}{2}} dx$.

Il professore lascia come esercizio verificare che questo integrale è uguale a 1.
![[Pasted image 20250410122713.png]]
## Disuguaglianze Basate sul Valore Atteso

### Introduzione

Il professore introduce il concetto di disuguaglianze costruite a partire dai valori attesi, tra cui la varianza, come strumenti per stimare quantità in probabilità.

### Disuguaglianza di Jensen

#### Enunciato

Sia $X$ una variabile aleatoria reale tale che $E[X]$ sia finito. Sia $g: \mathbb{R} \to \mathbb{R}$ una funzione convessa e supponiamo che $E[g(X)]$ sia ben definito e finito. Allora vale la disuguaglianza di Jensen: $g(E[X]) \le E[g(X)]$.

#### Funzioni Convesse

Una funzione $g(x)$ è convessa se, per ogni coppia di punti $x_1, x_2$ e per ogni $\lambda \in$, si ha: $g(\lambda x_1 + (1 - \lambda) x_2) \le \lambda g(x_1) + (1 - \lambda) g(x_2)$. Geometricamente, il segmento che congiunge due punti sul grafico della funzione sta sopra o sulla funzione stessa.

#### Esempi di Funzioni Convesse

Esempi tipici di funzioni convesse sono il quadrato ($g(x) = x^2$) e il modulo ($g(x) = |x|$).

#### Relazione con la Disuguaglianza del Modulo

Nel caso del modulo ($g(x) = |x|$), la disuguaglianza di Jensen diventa: $|E[X]| \le E[|X|]$. Questa è la disuguaglianza del modulo, che può aiutare a ricordare la direzione della disuguaglianza di Jensen per funzioni convesse.
![[Pasted image 20250410124841.png]]
### Disuguaglianza di Markov Generalizzata

#### Enunciato

Sia $h: \mathbb{R} \to [0, +\infty)$ una funzione misurabile non negativa tale che $E[h(X)] < +\infty$. Allora, per ogni $\epsilon > 0$, si ha: $$P(h(X) \ge \epsilon) \le \frac{E[h(X)]}{\epsilon}$$

#### Dimostrazione

Si definisce una variabile aleatoria $Y = h(X) \mathbb{1}_{{h(X) \ge \epsilon}}$, dove $\mathbb{1}_{{h(X) \ge \epsilon}}$ è la funzione indicatrice dell'evento ${h(X) \ge \epsilon}$.

- Se $h(X) < \epsilon$, allora $\mathbb{1}_{{h(X) \ge \epsilon}} = 0$, e $Y = h(X) \ge 0$.
- Se $h(X) \ge \epsilon$, allora $\mathbb{1}_{{h(X) \ge \epsilon}} = 1$, e $Y = h(X) \ge \epsilon$.

Quindi, $Y$ è una variabile aleatoria non negativa ($Y \ge 0$). Inoltre, $Y \ge \epsilon \mathbb{1}_{{h(X) \ge \epsilon}}$.

Prendendo il valore atteso di entrambi i lati e usando la linearità del valore atteso e il fatto che $E[\mathbb{1}_A] = P(A)$: $E[Y] \ge E[\epsilon \mathbb{1}_{{h(X) \ge \epsilon}}] = \epsilon E[\mathbb{1}_{{h(X) \ge \epsilon}}] = \epsilon P(h(X) \ge \epsilon)$.

D'altra parte, per definizione di $Y$: $E[Y] = E[h(X) \mathbb{1}_{{h(X) \ge \epsilon}}]$.

Poiché $h(X) \mathbb{1}_{{h(X) \ge \epsilon}} \le h(X)$ (essendo $\mathbb{1}$ o 0 o 1 e $h(X) \ge 0$), per la proprietà di monotonia del valore atteso: $E[Y] \le E[h(X)]$.

Combinando le due disuguaglianze per $E[Y]$: $\epsilon P(h(X) \ge \epsilon) \le E[Y] \le E[h(X)]$.

Dividendo per $\epsilon$ (che è positivo): $P(h(X) \ge \epsilon) \le \frac{E[h(X)]}{\epsilon}$.
![[Pasted image 20250410125451.png]]
### Disuguaglianza di Markov

La disuguaglianza di Markov è un caso particolare della disuguaglianza di Markov generalizzata. Sia $p > 0$ e supponiamo che $E[|X|^p] < +\infty$. Scegliendo $h(x) = |x|^p$ e $\epsilon = a^p$ (per $a > 0$) nella disuguaglianza di Markov generalizzata, si ottiene: $P(|X|^p \ge a^p) \le \frac{E[|X|^p]}{a^p}$.

Poiché $|X|^p \ge a^p$ è equivalente a $|X| \ge a$ per $p > 0$ e $a > 0$, la disuguaglianza di Markov è: $P(|X| \ge a) \le \frac{E[|X|^p]}{a^p}$.

Spesso la disuguaglianza di Markov viene usata con $p = 1$: $P(|X| \ge a) \le \frac{E[|X|]}{a}$.
![[Pasted image 20250410125544.png]]
### Disuguaglianza di Chebyshev

La disuguaglianza di Chebyshev è un altro caso particolare della disuguaglianza di Markov generalizzata. Supponiamo che la varianza di $X$, $Var(X) = \sigma^2$, sia finita. Si sceglie $h(x) = (x - E[X])^2$ e $\epsilon = \epsilon^2$ (usando $\epsilon$ per la distanza dalla media) nella disuguaglianza di Markov generalizzata.

$P((X - E[X])^2 \ge \epsilon^2) \le \frac{E[(X - E[X])^2]}{\epsilon^2}$.

L'evento $(X - E[X])^2 \ge \epsilon^2$ è equivalente a $|X - E[X]| \ge \epsilon$. Inoltre, $E[(X - E[X])^2] = Var(X)$. Quindi la disuguaglianza di Chebyshev è: $P(|X - E[X]| \ge \epsilon) \le \frac{Var(X)}{\epsilon^2}$.

Questa disuguaglianza fornisce un limite superiore alla probabilità che una variabile aleatoria si discosti dalla sua media di una quantità maggiore o uguale a $\epsilon$, in termini della sua varianza. Il professore commenta che se $\epsilon$ è piccolo, il limite potrebbe essere maggiore di 1 e quindi poco significativo, ma se la varianza è piccola, la probabilità di grandi deviazioni dalla media è limitata superiormente da un valore piccolo.
![[Pasted image 20250410130840.png]]
### Relazione tra Momenti Finiti

Il professore introduce brevemente la relazione tra momenti finiti di ordini diversi. Se il momento $s$-esimo di $|X|$ è finito ($E[|X|^s] < +\infty$) e $r \le s$, allora anche il momento $r$-esimo di $|X|$ è finito ($E[|X|^r] < +\infty$). Questa proprietà è stata dimostrata in precedenza utilizzando una disuguaglianza.

### Disuguaglianza di Lyapunov

La disuguaglianza di Lyapunov fornisce una relazione più precisa tra i momenti finiti. Se $E[|X|^s] < +\infty$ per $s > r \ge 0$, allora: $(E[|X|^r])^{1/r} \le (E[|X|^s])^{1/s}$.

Questa disuguaglianza implica che se il momento $s$-esimo è finito, allora anche tutti i momenti di ordine inferiore $r$ (con $r \ge 0$) sono finiti. La disuguaglianza di Lyapunov può essere dimostrata come conseguenza della disuguaglianza di Jensen. Il termine $(E[|X|^p])^{1/p}$ è chiamato norma $L^p$ di $X$. La disuguaglianza di Lyapunov afferma che la norma $L^p$ è una funzione crescente di $p$.

# Variabili Aleatorie con Momento $p$-esimo Finito e Spazi $L^p$

## Osservazioni Preliminari sulle Disuguaglianze di Probabilità

## Introduzione agli Spazi $L^p$

Si introduce l'argomento delle **variabili aleatorie con momento $p$-esimo finito**, che sono collegate agli **spazi $L^p$**. Il professore specifica che la trattazione sarà limitata al caso delle variabili aleatorie, senza approfondire la teoria generale degli spazi $L^p$ e della misura.

### Definizione di $L^p$

Si fissa $p > 0$. Dato uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, si definisce $L^p = L^p(\Omega, \mathcal{F}, P)$ (a volte indicato anche come $L^p(\Omega)$ o semplicemente $L^p$) come l'insieme di tutte le variabili aleatorie $X$ a valori reali (borelliani) tali che il loro **momento $p$-esimo è finito**, ovvero $E[|X|^p] < \infty$.

### Proprietà degli Spazi $L^p$

Consideriamo due variabili aleatorie $X$ e $Y$ definite sullo stesso spazio di probabilità, tali che $X \in L^p$ e $Y \in L^p$, cioè entrambe hanno momento $p$-esimo finito.

#### Somma di Variabili Aleatorie in $L^p$

Una domanda naturale è cosa si può dire di $X + Y$.

- **Disuguaglianza Elementare per $|X + Y|^p$**: Si ricorda una disuguaglianza elementare:
    
    - Se $0 < p \le 1$, allora $|x + y|^p \le |x|^p + |y|^p$ per ogni $x, y \in \mathbb{R}$.
    - Se $p > 1$, allora esiste una costante $C_p$ (che dipende da $p$) tale che $|x + y|^p \le C_p (|x|^p + |y|^p)$ per ogni $x, y \in \mathbb{R}$. Questa disuguaglianza può essere dimostrata usando la proprietà di convessità della funzione $x \mapsto |x|^p$ per $p > 1$.
      ![[Pasted image 20250410131418.png]]
- **Chiusura di $L^p$ rispetto alla Somma**: Se $X_1 \in L^p$ e $X_2 \in L^p$, allora $X_1 + X_2 \in L^p$.
    
    - Per dimostrarlo, si considera il momento $p$-esimo di $|X_1 + X_2|$:
        - $E[|X_1 + X_2|^p] \le E[C_p (|X_1|^p + |X_2|^p)] = C_p E[|X_1|^p] + C_p E[|X_2|^p] < \infty$, dove $C_p = 1$ se $0 < p \le 1$ e $C_p = 2^{p-1}$ se $p > 1$ (quest'ultima non è esplicitamente menzionata nel testo, ma è una forma comune della costante).
    - Poiché $E[|X_1|^p] < \infty$ e $E[|X_2|^p] < \infty$, anche $E[|X_1 + X_2|^p]$ è finito, quindi $X_1 + X_2 \in L^p$.
- **Chiusura di $L^p$ rispetto alla Moltiplicazione per Scalare**: Se $X_1 \in L^p$ e $a \in \mathbb{R}$, allora $aX_1 \in L^p$.
    
    - $E[|aX_1|^p] = E[|a|^p |X_1|^p] = |a|^p E[|X_1|^p] < \infty$, dato che $E[|X_1|^p] < \infty$ e $|a|^p$ è una costante finita.
      ![[Pasted image 20250410131648.png]]

#### Relazione tra $L^p$ e $L^q$

Se $X \in L^p$, allora $X \in L^q$ per ogni $0 < q \le p$. Questo significa che se il momento di ordine $p$ è finito, allora tutti i momenti di ordine inferiore $q$ (con $q \le p$) sono anch'essi finiti. Di conseguenza, gli spazi $L^p$ sono "scatolati" uno dentro l'altro: più $p$ cresce, più l'insieme $L^p$ diventa "piccolo" (nel senso dell'inclusione).

#### $L^p$ come Spazio Lineare

Le proprietà di chiusura rispetto alla somma e alla moltiplicazione per scalare implicano che $L^p$ (sia la versione "storta" che quella "dritta", come verrà spiegato) è uno **spazio vettoriale** (o spazio lineare). Questo significa che combinazioni lineari di elementi in $L^p$ rimangono in $L^p$.

## Distinzione tra $L^p$ "storto" e $L^p$ "dritto"

Il professore introduce una sottigliezza riguardante la definizione precisa degli spazi $L^p$, distinguendo tra una notazione $L^p$ "piccolo" (o "storto") e una notazione $L^p$ "grande" (o "dritto").

### Il Problema di $L^p$ "storto"

Lo spazio $L^p$ "storto" è definito come l'insieme delle variabili aleatorie (funzioni da $\Omega$ a $\mathbb{R}$) con momento $p$-esimo finito. Il problema con questa definizione è che possono esistere due variabili aleatorie $X$ e $X'$ tali che $P(X(\omega) = X'(\omega)) = 1$ (sono uguali quasi certamente), ma $X(\omega) \neq X'(\omega)$ per qualche $\omega \in \Omega$. Considerate come funzioni, $X$ e $X'$ sono distinte, ma ai fini probabilistici (calcolo di probabilità e valori attesi) si comportano in modo identico.

### Spazi Vettoriali Normati e la Necessità di $L^p$ "dritto"

Una proprietà fondamentale degli spazi vettoriali normati è che se la norma di un elemento è zero, allora l'elemento deve essere l'elemento nullo. Si introduce l'idea di definire una **norma** sugli spazi $L^p$, chiamata **norma $p$**, definita come $||X||_p = (E[|X|^p])^{1/p}$ (per $p \ge 1$).

Il problema sorge con $L^p$ "storto" perché se $E[|X|^p] = 0$, ciò implica che $P(X = 0) = 1$, ma non necessariamente che $X(\omega) = 0$ per ogni $\omega \in \Omega$. Quindi, la norma $p$ potrebbe essere zero per una variabile aleatoria che non è identicamente nulla come funzione.

### Definizione di $L^p$ "dritto" tramite Classi di Equivalenza

Per ovviare a questo problema, si definisce $L^p$ "dritto" ($L^p$) come l'insieme delle **classi di equivalenza** di variabili aleatorie in $L^p$ "storto". La relazione di equivalenza è definita come: $X \sim X'$ se $P(X = X') = 1$ (uguaglianza quasi certa). Un elemento di $L^p$ "dritto" non è una singola funzione, ma un insieme di funzioni che sono tutte uguali quasi certamente. In questo modo, se la norma $p$ di una classe di equivalenza è zero, allora ogni rappresentante della classe è uguale a zero quasi certamente, e la classe di equivalenza è quella della variabile aleatoria identicamente nulla (quasi certamente).
![[Pasted image 20250410132241.png]]
### Disuguaglianza di Minkowski

Per $p \ge 1$, se $X_1 \in L^p$ e $X_2 \in L^p$, vale la **disuguaglianza di Minkowski**: $$(E[|X_1 + X_2|^p])^{1/p} \le (E[|X_1|^p])^{1/p} + (E[|X_2|^p])^{1/p}$$ Questa disuguaglianza implica che $L^p$ "dritto" è uno spazio normato rispetto alla norma $||X||_p = (E[|X|^p])^{1/p}$ per $p \ge 1$. La disuguaglianza triangolare per la norma deriva proprio dalla disuguaglianza di Minkowski.
![[Pasted image 20250410132501.png]]
### Osservazioni sulla Praticità

Il professore rassicura che per la maggior parte delle applicazioni del corso, non sarà necessario preoccuparsi eccessivamente della distinzione tra $L^p$ "storto" e $L^p$ "dritto". Spesso si continuerà a lavorare con le variabili aleatorie direttamente, tenendo presente che le uguaglianze e i limiti sono da intendersi quasi certamente. L'introduzione di $L^p$ "dritto" serve principalmente a fornire una base matematica rigorosa per definire gli spazi $L^p$ come spazi normati.
## La Proprietà Fondamentale degli Spazi Normati

In uno spazio normato, una proprietà essenziale è che la **norma di un elemento è zero se e solo se l'elemento è l'elemento nullo**. Matematicamente, questa proprietà si esprime come:

$|x| = 0 \iff x = 0$

dove $x$ è un elemento dello spazio normato e $0$ è l'elemento neutro rispetto all'addizione (l'elemento nullo).

Il professore sottolinea che questa affermazione **non può essere fatta direttamente** sullo spazio delle funzioni $L^p$ "storto" (riferendosi allo spazio delle variabili aleatorie con momento $p$-esimo finito) senza l'introduzione delle **classi di equivalenza**.

## Necessità delle Classi di Equivalenza in $L^p$

La necessità delle classi di equivalenza nasce dal fatto che in $L^p$, una variabile aleatoria può avere **norma zero senza essere la variabile aleatoria nulla** in senso stretto. Questo accade perché la norma in $L^p$ è definita in termini di valore atteso. Ad esempio, se il valore atteso di $|X|^p$ è zero ($E[|X|^p] = 0$), ciò implica che la **probabilità che $X$ sia uguale a zero è uno** ($P(X=0) = 1$). Tuttavia, questo non significa che la variabile aleatoria $X$ sia identicamente zero su tutto lo spazio campionario; potrebbe essere diversa da zero su un insieme di probabilità zero.

Per fare in modo che $L^p$ sia effettivamente uno spazio normato, è necessario considerare le **classi di equivalenza** di variabili aleatorie che sono **uguali quasi certamente**.

### Definizione di Classi di Equivalenza

Le classi di equivalenza sono definite a partire da una **relazione di equivalenza** su un insieme. Quozientare un insieme rispetto a una relazione di equivalenza significa che **un punto dello spazio quozientato rappresenta tutte le funzioni (o variabili aleatorie nel nostro caso) che sono equivalenti** secondo quella relazione.

Nel contesto di $L^p$, la relazione di equivalenza è l'uguaglianza **quasi certa**. Due variabili aleatorie $X$ e $Y$ sono equivalenti ($X \sim Y$) se $P(X = Y) = 1$. Una classe di equivalenza $[X]$ è quindi l'insieme di tutte le variabili aleatorie $Y$ tali che $Y \sim X$.
![[Pasted image 20250410133222.png]]
### Rappresentanti delle Classi di Equivalenza

All'interno di una classe di equivalenza, si può scegliere un **rappresentante**. Un rappresentante conveniente potrebbe essere la variabile aleatoria identicamente zero, ma la classe contiene anche altre variabili che sono zero quasi certamente ma non ovunque.

Il professore afferma che per la verifica che $L^p$ sia uno spazio vettoriale, non è strettamente necessario introdurre le classi di equivalenza. È sufficiente che la somma di due variabili aleatorie in $L^p$ appartenga ancora a $L^p$, e questo vale per la funzione che è la classe di equivalenza della somma.

## Il Significato di Uguaglianza in $L^p$: "Quasi Certamente"

In $L^p$, quando si afferma che due variabili aleatorie sono uguali ($X = Y$), spesso questa uguaglianza deve essere interpretata nel senso di **uguaglianza quasi certa** ($P(X = Y) = 1$).

Il professore fa notare che nel corso, spesso si incontreranno affermazioni come $X + Y = 0$, che in un contesto rigoroso di $L^p$ dovrebbero essere intese come $P(X + Y = 0) = 1$. Questa è una sottigliezza che emerge quando si lavora formalmente con gli spazi $L^p$ "dritti" (quozientati rispetto alle classi di equivalenza).

Un altro esempio menzionato è che se il valore atteso di una variabile aleatoria $X$ (in $L^1$) è finito, allora la variabile aleatoria è **quasi certamente finita**.

## Spazio Vettoriale $L^p$

Lo spazio $L^p$ è uno **spazio lineare**. Questo significa che se si prendono due variabili aleatorie $X$ e $Y$ appartenenti a $L^p$, e due scalari $a$ e $b$, allora la combinazione lineare $aX + bY$ appartiene ancora a $L^p$.

$X_1, X_2 \in L^p \implies aX_1 + bX_2 \in L^p, \quad a, b \in \mathbb{R}$

Il professore sottolinea che per dimostrare che $L^p$ è uno spazio lineare, **non è necessario introdurre le classi di equivalenza**.

## Spazio Normato $L^p$ e la Norma

Per definire una **norma** su $L^p$, e quindi fare di $L^p$ uno spazio normato, è necessario identificare le variabili aleatorie quasi certamente uguali, il che porta all'introduzione dello spazio $L^p$ "dritto" (delle classi di equivalenza).

La norma in $L^p$ è definita come:

$|X|_p = (E[|X|^p])^{1/p}$

Il professore specifica che per poter definire una norma in questo modo e avere le proprietà di una norma (in particolare la disuguaglianza triangolare), è necessario che **$p \ge 1$**. Se $p < 1$, si può ancora definire una metrica, ma lo spazio non sarà uno spazio normato.

## La Notazione $L^p$ "Storto" vs. $L^p$ "Dritto"

Il professore utilizza la notazione $L^p$ "storto" per riferirsi allo spazio delle **variabili aleatorie** con momento $p$-esimo finito, mentre $L^p$ "dritto" si riferisce allo spazio delle **classi di equivalenza** di tali variabili aleatorie, dove l'equivalenza è definita dall'uguaglianza quasi certa.

La ragione per introdurre $L^p$ "dritto" è principalmente per avere uno spazio che soddisfi rigorosamente la definizione di spazio normato, in particolare la proprietà che norma zero implica l'elemento nullo.

Tuttavia, il professore ammette che per la maggior parte delle applicazioni e concetti del corso, si può **ragionare direttamente sulle variabili aleatorie** senza necessariamente focalizzarsi sulle classi di equivalenza. Le affermazioni di uguaglianza dovranno essere interpretate tenendo conto che possono valere "quasi certamente".

## Esempio di Somma di Variabili Aleatorie con Momenti Infiniti
![[Pasted image 20250410133507.png]]
Il professore fornisce un esempio per illustrare che la somma di due variabili aleatorie che individualmente non hanno momento primo finito (e quindi non appartengono a $L^1$), può comunque avere momento primo finito.

Consideriamo due variabili aleatorie:

$X_1 = X_0 + \mu$ $X_2 = -X_0$

dove $E[|X_0|] = +\infty$ e $\mu$ è una costante. In questo caso, $E[|X_1|] = E[|X_0 + \mu|]$ e $E[|X_2|] = E[|-X_0|] = E[|X_0|]$ potrebbero essere infiniti.

Tuttavia, la somma delle due variabili aleatorie è:

$X_1 + X_2 = (X_0 + \mu) + (-X_0) = \mu$

Se $\mu$ è una costante finita, allora il suo valore atteso primo è finito ($E[|\mu|] = |\mu| < \infty$). Questo dimostra che **anche se singolarmente le variabili non appartengono a $L^1$, la loro somma può appartenervi**.

Il professore conclude che se una variabile aleatoria appartiene a $L^p$, la stessa cosa vale per la sua classe di equivalenza. Inoltre, se abbiamo due variabili in $L^p$, la loro somma sarà ancora in $L^p$, ma non è detto che se due variabili non sono in $L^p$, la loro somma non possa esserlo.

## Esercizi sulle Variabili Aleatorie

Il professore raccomanda di esercitarsi su variabili aleatorie di diversi tipi: **discrete, assolutamente continue e miste**. Suggerisce di considerare esercizi elementari che richiedono l'applicazione delle definizioni e il calcolo.

Esempi di esercizi menzionati:

- Massimo tra 0 e $X$ ($\max(0, X)$): analizzare quando questa variabile è assolutamente continua e quando non lo è.
- Funzione di ripartizione di $X + 3$, data la funzione di ripartizione di $X$.
- Funzione di ripartizione di $X^2$ e $|X|$, data la funzione di ripartizione di $X$.

È importante anche ripassare i concetti fondamentali di probabilità, come il **teorema di Bayes**, la probabilità elementare, il calcolo combinatorio, i valori attesi, i valori attesi di funzioni e le trasformazioni di variabili aleatorie.
#### References



2025-04-14 08:40

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine]]   [[probabilità]]

## prob-lez15


# **Indipendenza di Variabili Aleatorie**

## **Ripasso: Disuguaglianza di Cauchy-Schwarz**

**Sottotitolo: Definizione e Proprietà**

Il professore inizia la lezione riprendendo un argomento precedente, la disuguaglianza di Cauchy-Schwarz.

Siano $X_1$ e $X_2$ due variabili aleatorie con valore atteso e momento secondo finito. Ciò significa che $X_1, X_2 \in L^2$.

Vale la seguente disuguaglianza: $$|\mathbb{E}[X_1 X_2]| \le \mathbb{E}[|X_1 X_2|] \le \sqrt{\mathbb{E}[X_1^2] \mathbb{E}[X_2^2]}$$ La seconda disuguaglianza è la versione della disuguaglianza di Cauchy-Schwarz.
![[Pasted image 20250414090437.png]]
**Sottotitolo: Conseguenza Importante**

Una delle conseguenze di questa disuguaglianza è che se $X_1$ e $X_2$ hanno un momento secondo finito, il loro prodotto $X_1 X_2$ ha momento primo finito. In altre parole, se $X_1, X_2 \in L^2$, allora $X_1 X_2 \in L^1$.

**Sottotitolo: Anticipazione sulla Covarianza**

Il professore anticipa che questa disuguaglianza sarà ritrovata in una forma riscritta quando si parlerà di covarianza.

**Sottotitolo: Dimostrazione (Cenni)**

La dimostrazione della disuguaglianza di Cauchy-Schwarz si basa sul considerare una variabile aleatoria positiva e sfruttare la linearità del valore atteso.

Si fissa $A$ e $B$ e si considera il quadrato $(AX_1 + BX_2)^2$. Questa è una variabile aleatoria positiva, quindi il suo valore atteso è maggiore o uguale a zero: $$\mathbb{E}[(AX_1 + BX_2)^2] \ge 0$$ Sviluppando il quadrato e usando la linearità del valore atteso si ottiene: $$A^2 \mathbb{E}[X_1^2] + B^2 \mathbb{E}[X_2^2] + 2AB \mathbb{E}[X_1 X_2] \ge 0$$ Questa espressione è una forma quadratica in $A$ e $B$ che può essere scritta come $\mathbf{v}^T C \mathbf{v} \ge 0$, dove $\mathbf{v} = \begin{pmatrix} A \ B \end{pmatrix}$ e $C = \begin{pmatrix} \mathbb{E}[X_1^2] & \mathbb{E}[X_1 X_2] \ \mathbb{E}[X_1 X_2] & \mathbb{E}[X_2^2] \end{pmatrix}$.

Poiché questa forma quadratica è sempre maggiore o uguale a zero, la matrice $C$ è semidefinita positiva, e quindi il suo determinante è maggiore o uguale a zero: $$\det(C) = \mathbb{E}[X_1^2] \mathbb{E}[X_2^2] - (\mathbb{E}[X_1 X_2])^2 \ge 0$$ Da cui si ricava: $$(\mathbb{E}[X_1 X_2])^2 \le \mathbb{E}[X_1^2] \mathbb{E}[X_2^2]$$ Prendendo la radice quadrata di entrambi i membri si ottiene la tesi (in modulo): $$|\mathbb{E}[X_1 X_2]| \le \sqrt{\mathbb{E}[X_1^2] \mathbb{E}[X_2^2]}$$
![[Pasted image 20250414091513.png]]
## **Introduzione all'Indipendenza di Variabili Aleatorie**

**Sottotitolo: Definizione di Indipendenza per Famiglie di Sigma Algebre**

Il professore introduce il nuovo argomento dell'indipendenza di variabili aleatorie partendo dalla definizione di indipendenza per famiglie di sigma algebre.

Consideriamo una famiglia di sotto sigma algebre ${ \mathcal{G}_i }_{i \in I}$ di una sigma algebra madre $\mathcal{F}$ su cui è definita una misura di probabilità $\mathbb{P}$.

Queste sigma algebre sono dette **indipendenti** se per ogni successione finita di indici distinti $j_1, j_2, \dots, j_k$ contenuti in $I$ (cioè, per ogni $k \ge 1$ e $j_1, \dots, j_k \in I$, con $j_r \neq j_s$ per $r \neq s$) e per ogni scelta di eventi $B_{j_1} \in \mathcal{G}_{j_1}, B_{j_2} \in \mathcal{G}_{j_2}, \dots, B_{j_k} \in \mathcal{G}_{j_k}$, si ha: $$\mathbb{P}\left( \bigcap_{r=1}^{k} B_{j_r} \right) = \prod_{r=1}^{k} \mathbb{P}(B_{j_r})$$
![[Pasted image 20250414092043.png]]
**Sottotitolo: Confronto con l'Indipendenza di Eventi**

La differenza con la definizione di indipendenza di eventi è che in quel caso si considera una famiglia di eventi, mentre qui si considera una famiglia di sigma algebre. Per verificare l'indipendenza di sigma algebre, è necessario considerare tutte le possibili scelte di eventi, uno da ciascuna sigma algebra nella sottofamiglia considerata.

**Sottotitolo: Esercizio Mentale**

Il professore propone un esercizio mentale per confrontare le due definizioni.

**Sottotitolo: Caso Particolare: Due Eventi**

Consideriamo il caso in cui l'insieme degli indici $I$ è costituito solo da due elementi, $I = \set{1, 2}$. Siano $\mathcal{G}_1 = \sigma(B_1)$ la sigma algebra generata da un evento $B_1$ e $\mathcal{G}_2 = \sigma(B_2)$ la sigma algebra generata da un evento $B_2$.

Ricordiamo che $\sigma(B_1) = \set{ \emptyset, B_1, B_1^c, \Omega }$ e $\sigma(B_2) = \set{ \emptyset, B_2, B_2^c, \Omega }$.

Verificare che $B_1$ e $B_2$ sono indipendenti (nel senso di $\mathbb{P}(B_1 \cap B_2) = \mathbb{P}(B_1) \mathbb{P}(B_2)$) è del tutto equivalente a dire che le sigma algebre $\mathcal{G}_1$ e $\mathcal{G}_2$ sono indipendenti. Questo si dimostra considerando tutte le possibili coppie di eventi, uno da $\mathcal{G}_1$ e uno da $\mathcal{G}_2$, e verificando la condizione di fattorizzazione della probabilità dell'intersezione.
![[Pasted image 20250414092408.png]]
**Sottotitolo: Generalizzazione a più di Due Oggetti**

La definizione più generale di indipendenza per sigma algebre è introdotta per poter trattare l'indipendenza di oggetti più complessi di semplici eventi.

**Sottotitolo: Esercizio di Ripasso sull'Indipendenza di Eventi**

Il professore ricorda un esercizio svolto in precedenza: se $A$ e $B$ sono eventi indipendenti, allora anche $A$ e $B^c$, $A^c$ e $B$, $A^c$ e $B^c$ sono indipendenti. Questo può essere verificato come esercizio utilizzando la definizione di indipendenza di sigma algebre nel caso di due eventi.

## **Indipendenza di Variabili Aleatorie**

**Sottotitolo: Definizione della Sigma Algebra Generata da una Variabile Aleatoria**

Sia $X$ una variabile aleatoria definita sullo spazio di probabilità $(\Omega, \mathcal{F}, \mathbb{P})$ a valori in uno spazio misurabile $(E, \mathcal{E})$. La **sigma algebra generata da $X$**, denotata con $\sigma(X)$, è la sigma algebra generata dalle controimmagini degli insiemi misurabili di $E$ sotto $X$: $$\sigma(X) = { X^{-1}(D) : D \in \mathcal{E} }$$ $X^{-1}(D) = { \omega \in \Omega : X(\omega) \in D }$ è un evento in $\mathcal{F}$ poiché $X$ è una variabile aleatoria. In generale, $\sigma(X) \subseteq \mathcal{F}$, e può essere strettamente contenuta in $\mathcal{F}$ (ad esempio, se $X$ è costante, $\sigma(X)$ è la sigma algebra banale ${ \emptyset, \Omega }$).

**Sottotitolo: Definizione di Indipendenza per Variabili Aleatorie**

Siano $X_1, X_2, \dots, X_n$ variabili aleatorie, dove $X_i$ è definita su $(\Omega, \mathcal{F}, \mathbb{P})$ e a valori in $(E_i, \mathcal{E}_i)$. Le variabili aleatorie $X_1, X_2, \dots, X_n$ sono dette **indipendenti** se per ogni scelta di insiemi misurabili $\forall B_1 \in \mathcal{E}_1, B_2 \in \mathcal{E}_2, \dots, B_n \in \mathcal{E}_n$, si ha: $$\mathbb{P}(X_1 \in B_1, X_2 \in B_2, \dots, X_n \in B_n) = \mathbb{P}(X_1 \in B_1) \mathbb{P}(X_2 \in B_2) \dots \mathbb{P}(X_n \in B_n)$$ Utilizzando la notazione per le controimmagini, questa condizione può essere riscritta come: $$\mathbb{P}\left( \bigcap_{i=1}^{n} { X_i \in B_i } \right) = \prod_{i=1}^{n} \mathbb{P}(X_i \in B_i)$$ o equivalentemente: $$\mathbb{P}\left( \bigcap_{i=1}^{n} X_i^{-1}(B_i) \right) = \prod_{i=1}^{n} \mathbb{P}(X_i^{-1}(B_i))$$

**Sottotitolo: Equivalenza con l'Indipendenza delle Sigma Algebre Generate**

L'indipendenza delle variabili aleatorie $X_1, \dots, X_n$ (secondo la definizione appena data) è equivalente all'indipendenza delle sigma algebre generate $\sigma(X_1), \sigma(X_2), \dots, \sigma(X_n)$. Questo perché l'evento ${ X_i \in B_i }$ è proprio un elemento della sigma algebra generata da $X_i$. Quindi, la definizione di indipendenza per variabili aleatorie è un caso particolare della definizione più generale di indipendenza per sigma algebre.
![[Pasted image 20250414092657.png]]
**Sottotitolo: Osservazione sull'Indipendenza di Sottoinsiemi**

Se $X_1, X_2, X_3$ sono variabili aleatorie indipendenti, allora anche $X_1$ e $X_2$ sono indipendenti. Questo può essere visto considerando $B_1 \in \mathcal{E}_1$ e $B_2 \in \mathcal{E}_2$. Allora: $$\mathbb{P}(X_1 \in B_1, X_2 \in B_2) = \mathbb{P}(X_1 \in B_1, X_2 \in B_2, X_3 \in \Omega)$$ Poiché $X_1, X_2, X_3$ sono indipendenti e $X_3 \in \Omega$ è un evento con probabilità 1, si ha: $$\mathbb{P}(X_1 \in B_1, X_2 \in B_2, X_3 \in \Omega) = \mathbb{P}(X_1 \in B_1) \mathbb{P}(X_2 \in B_2) \mathbb{P}(X_3 \in \Omega) = \mathbb{P}(X_1 \in B_1) \mathbb{P}(X_2 \in B_2) \cdot 1$$ Quindi $X_1$ e $X_2$ sono indipendenti. Questa proprietà si generalizza a un numero arbitrario di variabili indipendenti: ogni sottoinsieme di variabili indipendenti è anch'esso indipendente.
![[Pasted image 20250414094028.png]]
**Sottotitolo: Natura degli Spazi di Arrivo**

Il professore sottolinea che gli spazi di arrivo delle variabili aleatorie non devono necessariamente essere $\mathbb{R}$. Si possono avere variabili a valori in $\mathbb{R}^n$ (vettori aleatori) o in spazi diversi.

## **Teoremi sull'Indipendenza**

**Sottotitolo: Teorema sulle P-Classi**

**Enunciato (senza dimostrazione)**: Siano ${ \mathcal{G}_i }_{i \in I}$ una famiglia di sigma algebre e ${ \mathcal{C}_i }_{i \in I}$ una famiglia di P-classi sugli spazi di arrivo corrispondenti, tali che ogni $\mathcal{C}_i$ contenga lo spazio totale e generi la sigma algebra $\mathcal{G}_i$ (cioè, $\sigma(\mathcal{C}_i) = \mathcal{G}_i$). Se per ogni successione finita di indici distinti $j_1, \dots, j_k \in I$ e per ogni scelta di insiemi $B_{j_1} \in \mathcal{C}_{j_1}, \dots, B_{j_k} \in \mathcal{C}_{j_k}$, si ha: $$\mathbb{P}\left( \bigcap_{r=1}^{k} B_{j_r} \right) = \prod_{r=1}^{k} \mathbb{P}(B_{j_r})$$ allora le sigma algebre ${ \mathcal{G}_i }_{i \in I}$ sono indipendenti.
![[Pasted image 20250414094330.png]]
**Commento:** Questo teorema fornisce un criterio più semplice per verificare l'indipendenza di sigma algebre, in quanto è sufficiente controllare la fattorizzazione della probabilità solo per gli elementi di P-classi che generano le sigma algebre, anziché per tutti gli elementi delle sigma algebre stesse. Questo è particolarmente utile nel caso di variabili aleatorie.

**Sottotitolo: Teorema sul Valore Atteso di Funzioni di Variabili Indipendenti**

**Teorema (senza dimostrazione)**: Siano $X_1, \dots, X_n$ variabili aleatorie indipendenti, dove $X_i$ è a valori in $(E_i, \mathcal{E}_i)$. Allora le seguenti proprietà sono equivalenti:

1. Le variabili aleatorie $X_1, \dots, X_n$ sono indipendenti.
2. Per ogni scelta di funzioni misurabili e limitate $g_i: (E_i, \mathcal{E}_i) \to (\mathbb{R}, \mathcal{B}(\mathbb{R}))$, si ha: $$\mathbb{E}[g_1(X_1) g_2(X_2) \dots g_n(X_n)] = \mathbb{E}[g_1(X_1)] \mathbb{E}[g_2(X_2)] \dots \mathbb{E}[g_n(X_n)]$$
3. Esiste una collezione di P-classi $\mathcal{C}_i$ negli spazi di arrivo $(E_i, \mathcal{E}_i)$ tali che ogni $\mathcal{C}_i$ contiene $\Omega$ (anche se il professore nota in che questa condizione potrebbe non essere strettamente necessaria in generale per la definizione di P-classe, ma è rilevante in questo contesto) e genera la sigma algebra $\mathcal{E}_i$. In tal caso, le variabili aleatorie $X_1, \dots, X_n$ sono indipendenti se e solo se per ogni scelta di $B_i \in \mathcal{C}_i$, si ha: $$\mathbb{P}(X_1 \in B_1, X_2 \in B_2, \dots, X_n \in B_n) = \mathbb{P}(X_1 \in B_1) \mathbb{P}(X_2 \in B_2) \dots \mathbb{P}(X_n \in B_n)$$ In altre parole, l'indipendenza delle sigma algebre generate dalle variabili aleatorie può essere verificata controllando la fattorizzazione della probabilità solo sugli elementi di queste P-classi generatrici. Questo fornisce un **criterio più comodo per verificare l'indipendenza** poiché le P-cla ssi sono spesso più semplici da controllare rispetto all'intera sigma algebra. Un esempio menzionato è nel caso di variabili aleatorie reali, dove la P-classe delle semirette chiuse $(-\infty, x]$ (unite eventualmente con $\mathbb{R}$) genera i boreliani di $\mathbb{R}$.

Questo terzo punto è strettamente legato alla verifica pratica dell'indipendenza, specialmente quando gli spazi di arrivo hanno una struttura complessa. Controllare la fattorizzazione per tutti gli insiemi misurabili potrebbe essere difficile, mentre restringerla a una P-classe generatrice può semplificare il compito.

![[Pasted image 20250414095211.png]]
**Commento:** Questo teorema stabilisce che l'indipendenza implica la fattorizzazione del valore atteso di prodotti di funzioni delle singole variabili. Viceversa, se questa fattorizzazione vale per tutte le funzioni misurabili e limitate, allora le variabili sono indipendenti. Un caso particolare importante si ottiene scegliendo le $g_i$ come funzioni indicatrici di insiemi $B_i \in \mathcal{E}_i$, che riconduce alla definizione di indipendenza.

**Sottotitolo: Corollario per Variabili Aleatorie Reali e Funzione di Ripartizione**

**Proposizione (Corollario)**: Siano $X_1, \dots, X_n$ variabili aleatorie reali (a valori in $\mathbb{R}$). Esse sono indipendenti se e solo se la funzione di ripartizione congiunta del vettore $(X_1, \dots, X_n)$ è uguale al prodotto delle funzioni di ripartizione marginali delle singole variabili.

La funzione di ripartizione congiunta è definita come: $$F_{X_1, \dots, X_n}(x_1, \dots, x_n) = \mathbb{P}(X_1 \le x_1, \dots, X_n \le x_n)$$ dove $x_i \in \mathbb{R}$ per $i = 1, \dots, n$.

La condizione di indipendenza in termini di funzioni di ripartizione è: $$F_{X_1, \dots, X_n}(x_1, \dots, x_n) = F_{X_1}(x_1) F_{X_2}(x_2) \dots F_{X_n}(x_n)$$ dove $F_{X_i}(x_i) = \mathbb{P}(X_i \le x_i)$ è la funzione di ripartizione marginale di $X_i$.

**Dimostrazione (Cenni)**:

- **$(\Rightarrow)$** Se $X_1, \dots, X_n$ sono indipendenti, allora per definizione per gli insiemi $B_i = (-\infty, x_i]$, si ha: $$\mathbb{P}(X_1 \in (-\infty, x_1], \dots, X_n \in (-\infty, x_n]) = \prod_{i=1}^{n} \mathbb{P}(X_i \in (-\infty, x_i])$$ che è esattamente la condizione sulle funzioni di ripartizione.
    
- **$(\Leftarrow)$** Supponiamo che la funzione di ripartizione congiunta sia il prodotto delle marginali. Per dimostrare l'indipendenza, dobbiamo mostrare che per ogni scelta di insiemi boreliani $B_1, \dots, B_n$, si ha $\mathbb{P}(X_1 \in B_1, \dots, X_n \in B_n) = \prod_{i=1}^{n} \mathbb{P}(X_i \in B_i)$. Si utilizza il teorema sulle P-classi enunciato precedentemente. La classe delle semirette $(-\infty, x]$ (unita a $\mathbb{R}$) è una P-classe che genera la sigma algebra dei boreliani su $\mathbb{R}$. Poiché la fattorizzazione vale per intersezioni di insiemi di questa forma (per ipotesi sulla funzione di ripartizione), allora per il teorema sulle P-classi, le sigma algebre generate da $X_1, \dots, X_n$ (che contengono tutti gli eventi ${ X_i \in B_i }$ per $B_i$ boreliani) sono indipendenti, e quindi le variabili aleatorie sono indipendenti.
    ![[Pasted image 20250414095503.png]]

**Commento:** Questa proposizione fornisce un criterio pratico per verificare l'indipendenza di variabili aleatorie reali, basato sulle loro funzioni di ripartizione. Ha il vantaggio di valere sia per variabili assolutamente continue che discrete, e in generale per qualsiasi tipo di variabile aleatoria reale.

___

# Indipendenza di Variabili Aleatorie

## Definizione di P-Classi

Per un motivo tecnico, le $\mathcal{P}$-classi devono avere misura totale. In generale, per come sono definite le $\mathcal{P}$-classi, questa condizione non è strettamente necessaria. Tuttavia, per alcuni risultati che si basano sulle $\mathcal{P}$-classi, come l'esempio trattato, è richiesto un requisito leggermente più forte.

## Indipendenza nel Caso Discreto

Siano $X_1, \dots, X_n$ variabili aleatorie discrete con codominio finito o numerabile in $\mathbb{R}$.

**Definizione:** $X_1, \dots, X_n$ sono **indipendenti** se e solo se la densità discreta del vettore $(X_1, \dots, X_n)$ fattorizza. Questo significa che per ogni scelta di $x_1, \dots, x_n \in \mathbb{R}$, vale: $P(X_1 = x_1, \dots, X_n = x_n) = P(X_1 = x_1) \cdot \dots \cdot P(X_n = x_n) = \prod_{i=1}^{n} P(X_i = x_i)$

Questa uguaglianza può essere riscritta esplicitamente come la probabilità che $X_1$ sia uguale a $x_1$ (piccolo), ..., $X_n$ sia uguale a $x_n$ (piccolo) è uguale al prodotto per $i$ che va da $1$ a $n$ della probabilità che $X_i$ sia uguale a $x_i$, per ogni $x_1, \dots, x_n$ opportuni per cui questa espressione abbia senso.
![[Pasted image 20250414095950.png]]
**Importante:** Questa scrittura è valida solo nel caso di variabili aleatorie discrete. Se $X_1, \dots, X_n$ fossero variabili assolutamente continue, si otterrebbe $0 = 0$, sia nel caso di dipendenza che di indipendenza. Per questo motivo, la definizione generale di indipendenza si basa sulla probabilità che il vettore appartenga a un prodotto cartesiano di insiemi, come vedremo in seguito. Nel **caso discreto**, ci si può restringere agli insiemi costituiti da un singolo punto.

## Criterio Generale di Indipendenza per Variabili Reali

Per variabili reali, esiste un criterio di indipendenza che vale in qualunque caso (discreto, continuo, misto). Siano $X_1, \dots, X_n$ variabili aleatorie reali. Esse sono indipendenti se e solo se per ogni $x_1, \dots, x_n \in \mathbb{R}$, si ha: $P(X_1 \le x_1, \dots, X_n \le x_n) = P(X_1 \le x_1) \cdot \dots \cdot P(X_n \le x_n) = \prod_{i=1}^{n} P(X_i \le x_i)$ Questa condizione è equivalente all'indipendenza per variabili reali in generale.

## Intuizione dell'Indipendenza

L'indipendenza di variabili aleatorie è una proprietà che generalizza l'indipendenza di eventi. Dire che $X_1$ e $X_2$ sono indipendenti significa che la conoscenza del valore assunto da una variabile non implica alcuna informazione sulla conoscenza del valore assunto dall'altra.

## Esempio 1: Variabili Dipendenti Deterministamente

Consideriamo una variabile aleatoria $X$ a valori reali e definiamo $X_1 = X$ e $X_2 = X^2$. 
Non facciamo ipotesi specifiche sulla natura di $X$ (discreta, continua, ecc.).

**Affermazione:** $X_1$ e $X_2$ sono dipendenti. Intuitivamente, questo è vero perché $X_2$ è una funzione deterministica di $X_1$. Se conosciamo il valore di $X_1$, conosciamo univocamente il valore di $X_2$. Questa è una forma di dipendenza molto forte, detta **dipendenza deterministica**.

**Verifica stocastica della dipendenza:** Per dimostrare che $X_1$ e $X_2$ non sono indipendenti dal punto di vista stocastico, è sufficiente trovare una coppia di eventi per cui la probabilità dell'intersezione non è uguale al prodotto delle probabilità. Consideriamo gli eventi ${X_1 \le 2}$ e ${X_2 \le 9}$.

La probabilità dell'intersezione è: $P(X_1 \le 2, X_2 \le 9) = P(X \le 2, X^2 \le 9)$ L'evento ${X^2 \le 9}$ è equivalente a ${ -3 \le X \le 3 }$. Quindi: $P(X \le 2, X^2 \le 9) = P(X \le 2, -3 \le X \le 3) = P(-3 \le X \le 2)$

Ora consideriamo il prodotto delle probabilità degli eventi singoli: $P(X_1 \le 2) P(X_2 \le 9) = P(X \le 2) P(X^2 \le 9) = P(X \le 2) P(-3 \le X \le 3)$

In generale, $P(-3 \le X \le 2)$ è diverso da $P(X \le 2) P(-3 \le X \le 3)$. Scegliendo opportunamente la legge di probabilità di $X$, è possibile trovare casi in cui queste due quantità sono diverse. Pertanto, $X_1$ e $X_2$ non sono indipendenti.
![[Pasted image 20250414100512.png]]
## Esempio 2: Variabili Discrete Dipendenti

Consideriamo due variabili aleatorie discrete $X_1$ e $X_2$ con i seguenti possibili valori: $X_1 \in {1, 2}$ e $X_2 \in {0, 1}$. Supponiamo che la distribuzione di probabilità congiunta sia data dalla seguente tabella:

| $X_1 \setminus X_2$ | 0   | 1   |
| :------------------ | :-- | :-- |
| 1                   | 1/2 | 1/4 |
| 2                   | 0   | 1/4 |

Per verificare se $X_1$ e $X_2$ sono indipendenti, controlliamo se $P(X_1 = x_1, X_2 = x_2) = P(X_1 = x_1) P(X_2 = x_2)$ per tutte le coppie $(x_1, x_2)$. Consideriamo il caso $x_1 = 1$ e $x_2 = 0$.

Dalla tabella, $P(X_1 = 1, X_2 = 0) = 1/2$.

Calcoliamo le probabilità marginali: $P(X_1 = 1) = P(X_1 = 1, X_2 = 0) + P(X_1 = 1, X_2 = 1) = 1/2 + 1/4 = 3/4$ $P(X_2 = 0) = P(X_1 = 1, X_2 = 0) + P(X_1 = 2, X_2 = 0) = 1/2 + 0 = 1/2$

| $X_1 \setminus X_2$ | 0     | 1       |           |
| :------------------ | :---- | :------ | --------- |
| 1                   | 1/2   | 1/4     | 1/2 + 1/4 |
| 2                   | 0     | 1/4     | 0+1/4     |
|                     | 1/2+0 | 1/4+1/4 |           |

Ora verifichiamo la condizione di indipendenza: $P(X_1 = 1) P(X_2 = 0) = (3/4) \cdot (1/2) = 3/8$

Poiché $P(X_1 = 1, X_2 = 0) = 1/2 \neq 3/8 = P(X_1 = 1) P(X_2 = 0)$, le variabili aleatorie $X_1$ e $X_2$ non sono indipendenti. Abbiamo trovato almeno una coppia di valori per cui la condizione di fattorizzazione non è soddisfatta.

## Esempio 3: Costruzione di Variabili Discrete Indipendenti con le Stesse Marginali

Consideriamo le stesse marginali di $X_1$ e $X_2$ dell'esempio precedente: $P(X_1 = 1) = 3/4$, $P(X_1 = 2) = 1/4$ $P(X_2 = 0) = 1/2$, $P(X_2 = 1) = 1/2$

Vogliamo costruire due nuove variabili aleatorie discrete, $\tilde X_{1}$ e $\tilde X_{2}$, con queste stesse marginali ma che siano indipendenti. Per l'indipendenza, la probabilità congiunta deve essere il prodotto delle probabilità marginali per ogni coppia di valori:

$P(\tilde X_{1} = 1, \tilde X_{2} = 0) = P(\tilde X_{1} = 1) P(\tilde X_{2} = 0) = (3/4) \cdot (1/2) = 3/8$ $P(\tilde X_{1} = 1, \tilde X_{2} = 1) = P(\tilde X_{1} = 1) P(\tilde X_{2} = 1) = (3/4) \cdot (1/2) = 3/8$ $P(\tilde X_{1} = 2, \tilde X_{2} = 0) = P(\tilde X_{1} = 2) P(\tilde X_{2} = 0) = (1/4) \cdot (1/2) = 1/8$ $P(\tilde X_{1} = 2, \tilde X_{2} = 1) = P(\tilde X_{1} = 2) P(\tilde X_{2} = 1) = (1/4) \cdot (1/2) = 1/8$

La tabella di probabilità congiunta per $\tilde X_{1}$ e $\tilde X_{2}$ è quindi:

| $\tilde X_{1} \setminus \tilde X_{2}$ | 0   | 1   |     |
| :------------------------------------ | :-- | :-- | --- |
| 1                                     | 3/8 | 3/8 | 1/2 |
| 2                                     | 1/8 | 1/8 | 1/2 |
|                                       | 3/4 | 1/4 |     |

Verifichiamo che le marginali siano corrette: $P(\tilde X_{1} = 1) = 3/8 + 3/8 = 6/8 = 3/4$ $P(\tilde X_{1} = 2) = 1/8 + 1/8 = 2/8 = 1/4$ $P(\tilde X_{2} = 0) = 3/8 + 1/8 = 4/8 = 1/2$ $P(\tilde X_{2} = 1) = 3/8 + 1/8 = 4/8 = 1/2$

Le marginali di $\tilde X_{1}$ sono uguali alle marginali di $X_1$, e le marginali di $\tilde X_{2}$ sono uguali alle marginali di $X_2$. Tuttavia, le leggi congiunte $(X_1, X_2)$ e $(\tilde X_{1}, \tilde X_{2})$ sono diverse, poiché una coppia di variabili è dipendente e l'altra è indipendente.
![[Pasted image 20250414101251.png]]
**Osservazione:** Non si può affermare che $X_1 = \tilde X_{1}$ con probabilità 1, in quanto non è stato definito lo spazio $\Omega$ su cui sono definite queste variabili aleatorie. Potrebbero persino essere definite su spazi di probabilità diversi, rendendo priva di significato l'espressione $P(X_1 = \tilde X_{1})$.

## Indipendenza e Leggi Immagine

Consideriamo due variabili aleatorie $X_1$ e $X_2$ indipendenti. Sia $B_1$ un boreliano nello spazio di arrivo di $X_1$ e $B_2$ un boreliano nello spazio di arrivo di $X_2$. Allora, l'evento ${X_1 \in B_1 \text{ e } X_2 \in B_2}$ corrisponde al fatto che la coppia $(X_1, X_2)$ appartiene al prodotto cartesiano $B_1 \times B_2$ nello spazio prodotto.

La probabilità di questo evento è data dalla legge immagine della variabile aleatoria vettoriale $(X_1, X_2)$ calcolata sul boreliano $B_1 \times B_2$. Per l'indipendenza, questa probabilità è uguale al prodotto delle probabilità marginali: $P(X_1 \in B_1, X_2 \in B_2) = P(X_1 \in B_1) P(X_2 \in B_2)$

In termini di leggi immagine, se $\mu_1$ è la legge immagine di $X_1$ e $\mu_2$ è la legge immagine di $X_2$, e $\mu_{12}$ è la legge immagine di $(X_1, X_2)$, allora l'indipendenza implica che per ogni coppia di boreliani $B_1$ e $B_2$, si ha: $\mu_{12}(B_1 \times B_2) = \mu_1(B_1) \mu_2(B_2)$
![[Pasted image 20250414101621.png]]
Questo suggerisce che la proprietà di indipendenza può essere vista nello spazio immagine, confrontando la legge congiunta con il prodotto delle leggi marginali.

**Attenzione:** Se si conoscono solo le leggi immagine marginali $\mu_1$ e $\mu_2$, in generale non è possibile ricostruire univocamente la legge immagine congiunta $\mu_{12}$ senza l'ulteriore ipotesi di indipendenza. Tuttavia, se si assume l'indipendenza, la legge congiunta è univocamente determinata dal prodotto delle marginali. L'esempio discreto precedente illustra come, a partire dalle leggi marginali, si possa costruire una legge congiunta che soddisfi l'indipendenza.

La motivazione per questo approccio è che spesso si lavora nello spazio di arrivo e si hanno informazioni sulle marginali, e si vuole costruire o studiare misure di probabilità sul prodotto di spazi.

___
# Misure Prodotto e Integrazione su Spazi Prodotto

## Introduzione alle Misure Prodotto

Il professore introduce il concetto di misure prodotto come generalizzazione di idee già incontrate, in particolare nel contesto delle misure di probabilità. Si anticipa che questo argomento è fondamentale e si lega al concetto di indipendenza. L'obiettivo è definire una misura su uno spazio prodotto a partire da misure definite sugli spazi componenti. Oltre alle misure di probabilità, si applicherà questo concetto alla misura di Lebesgue.

## Costruzione dello Spazio Prodotto e della Sigma Algebra Prodotto

### Spazio Prodotto

Dati due spazi misurabili $(E_1, \mathcal{E}_1)$ e $(E_2, \mathcal{E}_2)$, lo **spazio prodotto** è definito come l'insieme delle coppie: $E = E_1 \times E_2 = {(e_1, e_2) \mid e_1 \in E_1, e_2 \in E_2}$. Tipicamente, $E_1$ e $E_2$ saranno $\mathbb{R}$ con la sigma algebra dei Boreliani $\mathcal{B}(\mathbb{R})$, quindi lo spazio prodotto sarà $\mathbb{R}^2$.

### Sigma Algebra Prodotto

Per definire una misura sullo spazio prodotto, è necessario dotarlo di una sigma algebra. La **sigma algebra prodotto** $\mathcal{E}_1 \otimes \mathcal{E}_2$ è definita come la più piccola sigma algebra su $E_1 \times E_2$ che contiene i **rettangoli misurabili** della forma $A_1 \times A_2$, dove $A_1 \in \mathcal{E}_1$ e $A_2 \in \mathcal{E}_2$.

In altre parole: $\mathcal{E}_1 \otimes \mathcal{E}_2 = \sigma({A_1 \times A_2 \mid A_1 \in \mathcal{E}_1, A_2 \in \mathcal{E}_2})$.
![[Pasted image 20250414102036.png]]
Questa costruzione imita il modo in cui si definiscono i Boreliani di $\mathbb{R}^2$ a partire dai Boreliani di $\mathbb{R}$. Infatti, si ha che $\mathcal{B}(\mathbb{R}) \otimes \mathcal{B}(\mathbb{R}) = \mathcal{B}(\mathbb{R}^2)$. Il professore sottolinea che questa uguaglianza è vera per i Boreliani di $\mathbb{R}$, ma potrebbe non valere in situazioni più generali.
![[Pasted image 20250414102105.png]]
## Costruzione della Misura Prodotto

### Teorema di Esistenza e Unicità della Misura Prodotto

**Teorema:** Siano $(E_1, \mathcal{E}_1, \mu_1)$ e $(E_2, \mathcal{E}_2, \mu_2)$ due spazi misurabili con misure $\sigma$-finite $\mu_1$ e $\mu_2$. Allora esiste un'unica misura $\sigma$-finita $\mu$ sulla sigma algebra prodotto $\mathcal{E}_1 \otimes \mathcal{E}_2$, che indicheremo con $\mu_1 \otimes \mu_2$, tale che per ogni coppia di insiemi misurabili $B_1 \in \mathcal{E}_1$ e $B_2 \in \mathcal{E}_2$, si abbia:

$\qquad (\mu_1 \otimes \mu_2)(B_1 \times B_2) = \mu_1(B_1) \cdot \mu_2(B_2)$.

Questa misura $\mu_1 \otimes \mu_2$ è chiamata **misura prodotto** di $\mu_1$ e $\mu_2$.

Il professore fa un parallelo con la costruzione della misura di Lebesgue, dove si parte dai cuboidi e si estende la misura. La costruzione qui presentata è una versione astratta di quel procedimento.
![[Pasted image 20250414102326.png]]
### Osservazioni sulle Misure di Probabilità

Se $\mu_1$ e $\mu_2$ sono misure di probabilità, allora anche la misura prodotto $\mu_1 \otimes \mu_2$ è una misura di probabilità, poiché $(\mu_1 \otimes \mu_2)(E_1 \times E_2) = \mu_1(E_1) \cdot \mu_2(E_2) = 1 \cdot 1 = 1$.

Il professore accenna al fatto che se si richiedesse solo che una misura sullo spazio prodotto abbia $\mu_1$ e $\mu_2$ come **marginali**, allora tale misura non sarebbe necessariamente unica. Tuttavia, se si richiede che la misura si **fattorizzi** sul prodotto di insiemi misurabili (come nella definizione della misura prodotto), allora l'unicità è garantita.

### Applicazione alla Misura di Lebesgue

Il professore menziona che, oltre alle misure di probabilità, la costruzione della misura prodotto è particolarmente importante per la misura di Lebesgue.

## Funzioni Misurabili sullo Spazio Prodotto

Consideriamo una funzione $H: E_1 \times E_2 \to \mathbb{R}$. Dire che $H$ è **misurabile rispetto alla sigma algebra prodotto** $\mathcal{E}_1 \otimes \mathcal{E}_2$ e ai Boreliani di $\mathbb{R}$ ($\mathcal{B}(\mathbb{R})$) significa che per ogni $B \in \mathcal{B}(\mathbb{R})$, l'insieme $H^{-1}(B) = {(e_1, e_2) \in E_1 \times E_2 \mid H(e_1, e_2) \in B}$ appartiene a $\mathcal{E}_1 \otimes \mathcal{E}_2$.

Il professore usa la notazione $H(e_1, e_2)$ per indicare il valore della funzione in un punto $(e_1, e_2) \in E_1 \times E_2$.
 ![[Pasted image 20250414102624.png]]
## Sezioni di Funzioni Misurabili

### Proposizione 2

**Proposizione:** Sia $H: E_1 \times E_2 \to \mathbb{R}$ una funzione misurabile rispetto alla sigma algebra prodotto $\mathcal{E}_1 \otimes \mathcal{E}_2$ e ai Boreliani di $\mathbb{R}$. Allora:

1. Per ogni $e_1 \in E_1$, la funzione $H_{e_1}: E_2 \to \mathbb{R}$ definita da $H_{e_1}(e_2) = H(e_1, e_2)$ è $\mathcal{E}_2$-misurabile.
2. Per ogni $e_2 \in E_2$, la funzione $H_{e_2}: E_1 \to \mathbb{R}$ definita da $H_{e_2}(e_1) = H(e_1, e_2)$ è $\mathcal{E}_1$-misurabile.

Il professore spiega che questa proposizione afferma che se una funzione è misurabile sul prodotto, allora fissando una delle due variabili, la funzione risultante nell'altra variabile rimane misurabile. Queste funzioni $H_{e_1}$ e $H_{e_2}$ sono chiamate **sezioni** della funzione $H$.

Il professore risponde a una domanda dello studente, confermando che se si hanno due funzioni misurabili, la loro composizione è misurabile, anche se precisa che qui si sta usando la misurabilità nella direzione indicata dalla proposizione.
![[Pasted image 20250414102856.png]]
### Importanza per l'Integrazione

Questa proprietà è fondamentale perché permette di dare un senso all'integrale parziale. Ad esempio, si considera l'espressione:

$\qquad \int_{E_2} H(e_1, e_2) , d\mu_2(e_2)$

Perché questo integrale sia ben definito (almeno per funzioni positive), è necessario che, per ogni $e_1$ fissato, la funzione $e_2 \mapsto H(e_1, e_2)$ sia $\mathcal{E}_2$-misurabile, cosa che è garantita dalla Proposizione 2.
![[Pasted image 20250414103439.png]]
## Teorema di Fubini-Tonelli (Caso di Funzioni Positive)

### Teorema

**Teorema:** Siano $(E_1, \mathcal{E}_1, \mu_1)$ e $(E_2, \mathcal{E}_2, \mu_2)$ spazi misurabili con misure $\sigma$-finite e sia $H: E_1 \times E_2 \to [0, +\infty]$ una funzione $\mathcal{E}_1 \otimes \mathcal{E}_2$-misurabile e positiva. Allora:

1. Per quasi ogni $e_1 \in E_1$ (rispetto a $\mu_1$), la funzione $e_2 \mapsto H(e_1, e_2)$ è $\mathcal{E}_2$-integrabile (ovvero $\int_{E_2} H(e_1, e_2) , d\mu_2(e_2) < +\infty$).
2. La funzione $e_1 \mapsto \int_{E_2} H(e_1, e_2) , d\mu_2(e_2)$ è $\mathcal{E}_1$-misurabile su $[0, +\infty]$.
3. Si ha l'uguaglianza:

$\qquad \int_{E_1 \times E_2} H(e_1, e_2) , d(\mu_1 \otimes \mu_2)(e_1, e_2) = \int_{E_1} \left( \int_{E_2} H(e_1, e_2) , d\mu_2(e_2) \right) , d\mu_1(e_1)$.

Analogamente, invertendo l'ordine di integrazione:

1. Per quasi ogni $e_2 \in E_2$ (rispetto a $\mu_2$), la funzione $e_1 \mapsto H(e_1, e_2)$ è $\mathcal{E}_1$-integrabile.
2. La funzione $e_2 \mapsto \int_{E_1} H(e_1, e_2) , d\mu_1(e_1)$ è $\mathcal{E}_2$-misurabile su $[0, +\infty]$.
3. Si ha l'uguaglianza:

$\qquad \int_{E_1 \times E_2} H(e_1, e_2) , d(\mu_1 \otimes \mu_2)(e_1, e_2) = \int_{E_2} \left( \int_{E_1} H(e_1, e_2) , d\mu_1(e_1) \right) , d\mu_2(e_2)$.

Quindi, per una funzione misurabile e positiva, l'integrale sullo spazio prodotto può essere calcolato come un integrale iterato, integrando prima rispetto a una variabile e poi rispetto all'altra, e l'ordine di integrazione non influisce sul risultato.

Il professore sottolinea che l'ipotesi che $H$ sia positiva è cruciale per garantire che la funzione integranda interna sia misurabile e che gli integrali siano ben definiti (anche se possono essere $+\infty$). Inoltre, parte dell'enunciato è che se l'integrale doppio è finito, allora anche l'integrale iterato è finito, e viceversa.

### Connessione con l'Integrale Multiplo

Il professore fa un collegamento con l'integrale multiplo visto in Analisi II, dove tipicamente si calcola l'integrale di una funzione su un dominio in $\mathbb{R}^2$ (o $\mathbb{R}^n$) tramite integrazione per sezioni. Il teorema di Fubini-Tonelli generalizza questa idea a spazi misurabili astratti e fornisce una giustificazione rigorosa per il calcolo degli integrali multipli come integrali iterati.

### Prossimi Passi

Il professore conclude anticipando che nella lezione successiva si approfondirà il teorema di Fubini-Tonelli per funzioni non necessariamente positive e si esplorerà la connessione con l'indipendenza. Si specifica che gli argomenti trattati fino a questo punto potrebbero rientrare nel programma del prossimo compitino. Le esercitazioni sono considerate fondamentali per la comprensione di questi concetti.



#### References



2025-04-14 10:36

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[sbobine]]  [[probabilità]]

## prob-lez16

# **Misure Prodotto e Teorema di Tonelli**

## **Spazio Misurabile Prodotto**

Dati due spazi di misura $(E_1, \mathcal{M}_1, \mu_1)$ e $(E_2, \mathcal{M}_2, \mu_2)$, si definisce lo **spazio misurabile prodotto** come il prodotto cartesiano $E = E_1 \times E_2$ dotato della **$\sigma$-algebra prodotto**.

La $\sigma$-algebra prodotto, indicata con $\mathcal{M}_1 \otimes \mathcal{M}_2$, è la più piccola $\sigma$-algebra costituita dai **rettangoli misurabili**, ovvero insiemi della forma $N_1 \times N_2$ dove $N_1 \in \mathcal{M}_1$ e $N_2 \in \mathcal{M}_2$.

## **Misura Prodotto**

Se le misure $\mu_1$ e $\mu_2$ sono **$\sigma$-finite**, allora esiste un'unica misura $\mu$ sullo spazio misurabile prodotto $(E_1 \times E_2, \mathcal{M}_1 \otimes \mathcal{M}_2)$, chiamata **misura prodotto** e indicata con $\mu_1 \times \mu_2$ o semplicemente $\mu$, tale che per ogni rettangolo misurabile $N_1 \times N_2$ si abbia:

$\qquad \mu(N_1 \times N_2) = \mu_1(N_1) \mu_2(N_2)$
![[Pasted image 20250414104323.png]]
## **Teorema di Tonelli**

**Enunciato:** Sia $h: E = E_1 \times E_2 \rightarrow [0, +\infty]$ una funzione **misurabile** rispetto alla $\sigma$-algebra prodotto $\mathcal{M}_1 \otimes \mathcal{M}_2$. Allora, l'**integrale doppio** $\int_{E_1 \times E_2} h(e_1, e_2) d(\mu_1 \times \mu_2)(e_1, e_2)$ è sempre ben definito (potendo essere anche $+\infty$). Inoltre, valgono le seguenti uguaglianze:

$\qquad \int_{E_1 \times E_2} h(e_1, e_2) d(\mu_1 \times \mu_2)(e_1, e_2) = \int_{E_1} \left( \int_{E_2} h(e_1, e_2) d\mu_2(e_2) \right) d\mu_1(e_1)$

$\qquad \int_{E_1 \times E_2} h(e_1, e_2) d(\mu_1 \times \mu_2)(e_1, e_2) = \int_{E_2} \left( \int_{E_1} h(e_1, e_2) d\mu_1(e_1) \right) d\mu_2(e_2)$

**Spiegazione:** Il teorema di Tonelli afferma che per **funzioni positive misurabili**, l'ordine di integrazione non influisce sul risultato dell'integrale. Se uno dei due integrali iterati è finito, allora anche l'altro lo è e coincidono con l'integrale sulla misura prodotto. Se uno dei due è $+\infty$, anche gli altri sono $+\infty$.

**Osservazione:** Come sottolineato dal professore, l'integrale interno, ad esempio $\int_{E_2} h(e_1, e_2) d\mu_2(e_2)$, risulta essere una funzione di $e_1$, e questa funzione è misurabile.
![[Pasted image 20250414163603.png]]
# **Teorema di Fubini**

## **Teorema di Fubini**

**Enunciato:** Sia $h: E = E_1 \times E_2 \rightarrow \mathbb{R}$ (o $\mathbb{C}$) una funzione **misurabile** rispetto alla $\sigma$-algebra prodotto $\mathcal{M}_1 \otimes \mathcal{M}_2$. Se l'integrale del **modulo** di $h$ sulla misura prodotto è finito, ovvero:

$\qquad \int_{E_1 \times E_2} |h(e_1, e_2)| d(\mu_1 \times \mu_2)(e_1, e_2) < +\infty$

allora valgono le seguenti affermazioni:

1. Per $\mu_1$-quasi ogni $e_1 \in E_1$, la funzione $h(e_1, \cdot): E_2 \rightarrow \mathbb{R}$ (o $\mathbb{C}$) è $\mu_2$-integrabile.
2. Per $\mu_2$-quasi ogni $e_2 \in E_2$, la funzione $h(\cdot, e_2): E_1 \rightarrow \mathbb{R}$ (o $\mathbb{C}$) è $\mu_1$-integrabile.
3. Le funzioni definite da: $\qquad I_1(e_1) = \int_{E_2} h(e_1, e_2) d\mu_2(e_2)$ $\qquad I_2(e_2) = \int_{E_1} h(e_1, e_2) d\mu_1(e_1)$ sono rispettivamente $\mu_1$-integrabile e $\mu_2$-integrabile.
4. Valgono le seguenti uguaglianze: $\qquad \int_{E_1 \times E_2} h(e_1, e_2) d(\mu_1 \times \mu_2)(e_1, e_2) = \int_{E_1} \left( \int_{E_2} h(e_1, e_2) d\mu_2(e_2) \right) d\mu_1(e_1)$ $\qquad \int_{E_1 \times E_2} h(e_1, e_2) d(\mu_1 \times \mu_2)(e_1, e_2) = \int_{E_2} \left( \int_{E_1} h(e_1, e_2) d\mu_1(e_1) \right) d\mu_2(e_2)$
![[Pasted image 20250414163824.png]]
**Spiegazione:** Il teorema di Fubini estende la possibilità di scambiare l'ordine di integrazione a funzioni che non sono necessariamente positive, a condizione che l'integrale del loro valore assoluto sia finito. Questa condizione garantisce che le funzioni ottenute integrando rispetto a una variabile siano integrabili rispetto all'altra.

**Interpretazione dell'Uguaglianza:** Come spiegato dal professore, l'uguaglianza degli integrali iterati va interpretata nel senso che la funzione interna potrebbe non essere ben definita su un insieme di misura zero (rispetto alla misura esterna). Tuttavia, questo non influisce sul valore dell'integrale esterno. In pratica, si può definire la funzione interna arbitrariamente (ad esempio, ponendola uguale a zero) su tale insieme di misura nulla senza cambiare il risultato dell'integrale finale.

## **Differenze tra Tonelli e Fubini**

La differenza fondamentale tra i due teoremi risiede nelle ipotesi sulla funzione $h$:

- **Tonelli:** Si applica a funzioni **positive** e misurabili. L'integrale doppio è sempre ben definito (anche se infinito), e l'ordine di integrazione può essere scambiato senza la necessità di verificare la finitezza dell'integrale.
- **Fubini:** Si applica a funzioni **non necessariamente positive**, ma **misurabili** e tali che l'integrale del loro **modulo** sia finito. Questa condizione è cruciale per poter scambiare l'ordine di integrazione e garantire che gli integrali iterati siano ben definiti e finiti.

## **Applicazione di Tonelli e Fubini**

Per applicare il teorema di Fubini a una funzione $h$ non positiva, la strategia tipica è la seguente:

1. Considerare il **modulo** della funzione, $|h|$.
2. Applicare il teorema di **Tonelli** alla funzione $|h|$, poiché è positiva. Si calcola uno degli integrali iterati di $|h|$.
3. Se l'integrale di $|h|$ (e quindi gli integrali iterati di $|h|$) è **finito**, allora si può applicare il teorema di **Fubini** alla funzione $h$, e l'ordine di integrazione può essere scambiato per l'integrale di $h$ stesso.

# **Applicazione a Misure di Lebesgue e Integrale Doppio**

## **Caso delle Misure di Lebesgue su $\mathbb{R}^{d_1} \times \mathbb{R}^{d_2}$**

Un caso fondamentale in cui si applicano i teoremi di Fubini e Tonelli è quando gli spazi di misura sono $\mathbb{R}^{d_1}$ e $\mathbb{R}^{d_2}$ dotati della **misura di Lebesgue** e della $\sigma$-algebra dei **Boreliani**. In questo caso, la $\sigma$-algebra prodotto coincide con la $\sigma$-algebra dei Boreliani di $\mathbb{R}^{d_1 + d_2}$.

Se abbiamo una funzione $h(x_1, x_2)$ con $x_1 \in \mathbb{R}^{d_1}$ e $x_2 \in \mathbb{R}^{d_2}$, l'integrale rispetto alla misura prodotto (misura di Lebesgue su $\mathbb{R}^{d_1 + d_2}$) può essere scritto come:

$\qquad \int_{\mathbb{R}^{d_1 + d_2}} h(x_1, x_2) dx_1 dx_2$

Se l'integrale di $|h|$ è finito, per il teorema di Fubini possiamo scambiare l'ordine di integrazione:

$\qquad \int_{\mathbb{R}^{d_1 + d_2}} h(x_1, x_2) dx_1 dx_2 = \int_{\mathbb{R}^{d_1}} \left( \int_{\mathbb{R}^{d_2}} h(x_1, x_2) dx_2 \right) dx_1 = \int_{\mathbb{R}^{d_2}} \left( \int_{\mathbb{R}^{d_1}} h(x_1, x_2) dx_1 \right) dx_2$

![[Pasted image 20250414164310.png]]
## **Collegamento con l'Integrale Doppio in Analisi**

Il professore fa notare che questo formalismo generalizza il concetto di **integrale doppio** visto in corsi di analisi su insiemi "normali" o plurirettangoli e per funzioni "integrabili" nel senso usuale. I teoremi di Fubini e Tonelli permettono di estendere questi risultati a **insiemi misurabili Boreliani** qualsiasi e a funzioni che sono **Lebesgue-integrabili**, una classe più ampia di funzioni rispetto a quelle Riemann-integrabili.

In pratica, per calcolare un integrale doppio, si procede come si è abituati: si integra prima rispetto a una variabile (mantenendo l'altra fissa) e poi si integra il risultato rispetto all'altra variabile. I teoremi di Fubini e Tonelli forniscono le condizioni sotto le quali questo procedimento è valido e il risultato è indipendente dall'ordine di integrazione.

# **Marginali di Legge Assolutamente Continue**

## **Caso Discreto (Richiamo)**

Il professore ricorda che nel caso di **vettori aleatori discreti**, se si ha la distribuzione congiunta (ad esempio, una tabella di contingenza), la **distribuzione marginale** di una singola variabile (o di un sottovettore) si ottiene **sommando** (o "saturando") sulla(e) variabile(i) non di interesse.
![[Pasted image 20250414164455.png]]
## **Caso Assolutamente Continuo (d=2)**

Consideriamo un **vettore aleatorio assolutamente continuo** $(X_1, X_2)$ con **funzione di densità congiunta** $f(x_1, x_2)$. Vogliamo trovare la **funzione di densità marginale** di $X_1$, che denotiamo con $f_{X_1}(x_1)$.

**Calcolo della Funzione di Ripartizione Marginale:** La funzione di ripartizione marginale di $X_1$, $F_{X_1}(x_1)$, è data da:

$\qquad F_{X_1}(x_1) = P(X_1 \leq x_1) = P(X_1 \leq x_1, X_2 \in \mathbb{R})$

Questa probabilità può essere espressa come l'integrale della densità congiunta sull'insieme ${(t_1, t_2) \in \mathbb{R}^2 : t_1 \leq x_1, t_2 \in \mathbb{R}}$:

$\qquad F_{X_1}(x_1) = \int_{-\infty}^{x_1} \int_{-\infty}^{+\infty} f(t_1, t_2) dt_2 dt_1$
![[Pasted image 20250414164646.png]]
**Derivazione della Densità Marginale:** Applicando il teorema di **Tonelli** (poiché la densità congiunta è non negativa), possiamo scambiare l'ordine di integrazione:

$\qquad F_{X_1}(x_1) = \int_{-\infty}^{x_1} \left( \int_{-\infty}^{+\infty} f(t_1, t_2) dt_2 \right) dt_1$

Definiamo la funzione $f_{X_1}(t_1) = \int_{-\infty}^{+\infty} f(t_1, t_2) dt_2$. Allora possiamo scrivere:

$\qquad F_{X_1}(x_1) = \int_{-\infty}^{x_1} f_{X_1}(t_1) dt_1$
![[Pasted image 20250414164831.png]]
Per la definizione di variabile assolutamente continua, questo significa che $X_1$ è assolutamente continua e la sua **funzione di densità marginale** è data da:

$\qquad f_{X_1}(x_1) = \int_{-\infty}^{+\infty} f(x_1, x_2) dx_2$
![[Pasted image 20250414164910.png]]
**Spiegazione del Procedimento Logico:** Il professore sottolinea che non si assume a priori che $X_1$ sia assolutamente continua. Il procedimento consiste nel calcolare la funzione di ripartizione marginale e mostrare che essa può essere espressa come l'integrale di una funzione (la densità marginale). Questo dimostra che $X_1$ è assolutamente continua e identifica la sua densità.

## **Caso Generale (d > 2)**

Il risultato si generalizza a vettori aleatori in $d$ dimensioni. Se $X = (X_1, ..., X_d)$ è assolutamente continuo con densità $f(x_1, ..., x_d)$, allora ogni **sottovettore** è assolutamente continuo.

In particolare, la **densità marginale** di un sottovettore $(X_{i_1}, ..., X_{i_k})$ (dove $1 \leq i_1 < ... < i_k \leq d$) si ottiene **integrando** la densità congiunta rispetto a tutte le altre variabili (cioè le variabili con indici $j \in {1, ..., d} \setminus {i_1, ..., i_k}$).

Matematicamente, la densità marginale $f_{X_{i_1}, ..., X_{i_k}}(x_{i_1}, ..., x_{i_k})$ è data da:

$\qquad f_{X_{i_1}, ..., X_{i_k}}(x_{i_1}, ..., x_{i_k}) = \int_{\mathbb{R}^{d-k}} f(x_1, ..., x_d) \prod_{j \notin {i_1, ..., i_k}} dx_j$
![[Pasted image 20250414170805.png]]
**Esempio (d=3):** Se $d=3$ e vogliamo la densità marginale di $(X_1, X_3)$, cioè $f_{X_1, X_3}(x_1, x_3)$, dobbiamo integrare la densità congiunta $f(x_1, x_2, x_3)$ rispetto alla variabile $x_2$:

$\qquad f_{X_1, X_3}(x_1, x_3) = \int_{-\infty}^{+\infty} f(x_1, x_2, x_3) dx_2$
![[Pasted image 20250414170814.png]]
___

## Spiegazione Sulla Assoluta Continuità, Marginali e Indipendenza

### Assoluta Continuità di Vettori Aleatori e Marginali

Il professore introduce il concetto di **assoluta continuità per vettori aleatori multidimensionali**.

- **Definizione:** Un vettore aleatorio è **assolutamente continuo** rispetto alla misura di Lebesgue se la sua probabilità può essere espressa come l'integrale di una funzione di densità.
    
- **Proprietà Fondamentale:** Se un vettore aleatorio $(X_1, X_2, ..., X_d)$ è assolutamente continuo, allora **tutti i suoi sottovettori (incluse le marginali unidimensionali)** sono anch'essi assolutamente continui. Questo significa che se il vettore "più grande" è assolutamente continuo, possiamo "sfilare" qualsiasi sottovettore, e questo manterrà la proprietà di essere assolutamente continuo.
    
- **Esempio:** Se abbiamo un vettore $(X_1, X_2, X_3)$ assolutamente continuo, allora $X_1$, $X_2$, $X_3$, $(X_1, X_2)$, $(X_1, X_3)$, e $(X_2, X_3)$ sono tutti assolutamente continui.
    

### Calcolo delle Marginali nel Caso Assolutamente Continuo

Il calcolo delle densità marginali da una densità congiunta si effettua tramite **integrazione**, analogamente a come si fa con le somme nel caso discreto. Questa operazione è una conseguenza del teorema di Fubini-Tonelli.

- **Marginale Unidimensionale:** Per ottenere la densità marginale di una variabile $X_i$ da una densità congiunta $f(x_1, ..., x_d)$, si integra la densità congiunta rispetto a tutte le altre variabili: $f_{X_i}(x_i) = \int ... \int f(x_1, ..., x_d) dx_1 ... dx_{i-1} dx_{i+1} ... dx_d$.
    
- **Marginale Multidimensionale:** Per ottenere la densità marginale di un sottovettore, ad esempio $(X_i, X_j)$, si integra la densità congiunta rispetto a tutte le variabili che non compaiono nel sottovettore: $f_{X_i, X_j}(x_i, x_j) = \int ... \int f(x_1, ..., x_d) dx_1 ... dx_{i-1} dx_{i+1} ... dx_{j-1} dx_{j+1} ... dx_d$.
    

### La Non Implicazione Viceversa: Marginali Assolutamente Continue non Implicano Congiunta Assolutamente Continua

Un punto cruciale sottolineato dal professore è che **sebbene un vettore assolutamente continuo implichi marginali assolutamente continue, il contrario non è sempre vero**.

- **Controesempio: $X = (Y, Y)$** Consideriamo un vettore $X = (X_1, X_2)$ dove $X_1 = Y$ e $X_2 = Y$, e $Y$ è una variabile aleatoria assolutamente continua.
    
    - **Marginali Assolutamente Continue:** Marginalmente, sia $X_1$ che $X_2$ sono uguali a $Y$, quindi sono assolutamente continue.
        
    - **Congiunta Non Assolutamente Continua:** Il vettore $X = (Y, Y)$ non è assolutamente continuo. Per costruzione, la probabilità che $X_1 = X_2$ è sempre 1: $P(X_1 = X_2) = P(Y = Y) = 1$.
        
    - **Dimostrazione per Assurdo:** Se $X$ fosse assolutamente continuo, esisterebbe una densità congiunta $f_{X_1, X_2}(x_1, x_2)$ tale che: $P(X_1 = X_2) = \iint_{{(x_1, x_2) | x_1 = x_2}} f_{X_1, X_2}(x_1, x_2) dx_1 dx_2$.
        
        L'insieme ${(x_1, x_2) | x_1 = x_2}$ rappresenta una **retta** nel piano $\mathbb{R}^2$. La **misura di Lebesgue** di una retta in $\mathbb{R}^2$ è **zero**.
        
        Se $f_{X_1, X_2}$ è integrabile (come dovrebbe essere per una densità), allora l'integrale di Lebesgue di una funzione integrabile su un insieme di misura di Lebesgue nulla è **zero**.
        
        Quindi, se $X$ fosse assolutamente continuo, avremmo $P(X_1 = X_2) = 0$, che contraddice il fatto che $P(X_1 = X_2) = 1$. Pertanto, il vettore $X = (Y, Y)$ non può essere assolutamente continuo, anche se le sue marginali lo sono.
        
    - **Intuizione Geometrica:** La distribuzione di probabilità del vettore $(Y, Y)$ è concentrata sulla retta $x_1 = x_2$ nel piano $\mathbb{R}^2$. Una distribuzione assolutamente continua in $\mathbb{R}^2$ dovrebbe essere "diffusa" su insiemi bidimensionali con misura di Lebesgue non nulla, non concentrata su un insieme di misura nulla come una retta.
        ![[Pasted image 20250414171059.png]]

### Indipendenza e Misure Prodotto

Il professore introduce l'applicazione del teorema di Fubini-Tonelli nel contesto di **spazi di probabilità** e come questo porta al concetto di **indipendenza**.

- **Misure Prodotto:** Dati due spazi di probabilità $(X_1, \mathcal{A}_1, \mu_1)$ e $(X_2, \mathcal{A}_2, \mu_2)$, si può definire una **misura prodotto** $P = \mu_1 \times \mu_2$ sullo spazio prodotto $(X_1 \times X_2, \mathcal{A}_1 \otimes \mathcal{A}_2)$ tale che per ogni $A_1 \in \mathcal{A}_1$ e $A_2 \in \mathcal{A}_2$: $P(A_1 \times A_2) = \mu_1(A_1) \mu_2(A_2)$.
    
- **Variabili Aleatorie e Misure Indotte:** Se $X_1$ e $X_2$ sono variabili aleatorie definite su uno spazio di probabilità comune $(\Omega, \mathcal{F}, P)$ a valori in $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$, possiamo considerare le loro **misure indotte** $\mathbb{P}_{X_1}(A_1) = P(X_1 \in A_1)$ e $\mathbb{P}_{X_2}(A_2) = P(X_2 \in A_2)$.
    ![[Pasted image 20250414172154.png]]
- **Misura Immagine e Misura Prodotto delle Marginali:** La **legge congiunta** di $(X_1, X_2)$ è la misura immagine $\mathbb{P}_{(X_1, X_2)}(A_1 \times A_2) = P(X_1 \in A_1, X_2 \in A_2)$ sullo spazio prodotto $\mathbb{R}^2$. Possiamo anche considerare la **misura prodotto delle marginali**: $\mathbb{P}_{X_1} \times \mathbb{P}_{X_2}(A_1 \times A_2) = \mathbb{P}_{X_1}(A_1) \mathbb{P}_{X_2}(A_2) = P(X_1 \in A_1) P(X_2 \in A_2)$.
    
- **Definizione di Indipendenza:** Due variabili aleatorie $X_1$ e $X_2$ sono **indipendenti** se per ogni $A_1, A_2$ misurabili (negli spazi di arrivo): $P(X_1 \in A_1, X_2 \in A_2) = P(X_1 \in A_1) P(X_2 \in A_2)$.
    
- **Proposizione:** Le variabili aleatorie $X_1$ e $X_2$ sono indipendenti **se e solo se** la loro **misura immagine (legge congiunta) è uguale alla misura prodotto delle loro marginali**: $\mathbb{P}_{(X_1, X_2)} = \mathbb{P}_{X_1} \times \mathbb{P}_{X_2}$.
    
    Questa equivalenza deriva dal fatto che due misure di probabilità che coincidono su tutti i rettangoli del prodotto coincidono sull'intera sigma-algebra prodotto.
    ![[Pasted image 20250414172400.png]]

### Teorema di Fubini per Variabili Aleatorie Indipendenti

Una delle conseguenze fondamentali dell'indipendenza, derivata dal teorema di Fubini-Tonelli, riguarda il calcolo del **valore atteso di funzioni di variabili aleatorie indipendenti**.

- **Teorema:** Siano $X_1, X_2$ variabili aleatorie reali definite su uno spazio di probabilità e **indipendenti**. Sia $h: \mathbb{R}^2 \rightarrow \mathbb{R}$ una funzione misurabile.
    
    - **Caso $h \ge 0$:** Se $h$ è non negativa, allora: $E[h(X_1, X_2)] = \int_{\mathbb{R}^2} h(x_1, x_2) d\mathbb{P}_{(X_1, X_2)}(x_1, x_2) = \int_{\mathbb{R}} \left( \int_{\mathbb{R}} h(x_1, x_2) d\mathbb{P}_{X_2}(x_2) \right) d\mathbb{P}_{X_1}(x_1) = \int_{\mathbb{R}} \int_{\mathbb{R}} h(x_1, x_2) d\mathbb{P}_{X_1}(x_1) d\mathbb{P}_{X_2}(x_2)$.
        
        Nel caso in cui $X_1$ e $X_2$ abbiano densità $f_{X_1}(x_1)$ e $f_{X_2}(x_2)$ rispettivamente, e quindi la densità congiunta sia $f_{X_1, X_2}(x_1, x_2) = f_{X_1}(x_1) f_{X_2}(x_2)$ (per l'indipendenza), il teorema diventa: $E[h(X_1, X_2)] = \int_{\mathbb{R}} \int_{\mathbb{R}} h(x_1, x_2) f_{X_1}(x_1) f_{X_2}(x_2) dx_1 dx_2$.
        
    - **Caso $E[|h(X_1, X_2)|] < \infty$:** Se il valore atteso del modulo di $h(X_1, X_2)$ è finito, allora vale la stessa uguaglianza. Questo assicura che gli integrali sono ben definiti.
        ![[Pasted image 20250414172626.png]]

### Corollario: Valore Atteso del Prodotto di Variabili Aleatorie Indipendenti

Un importante corollario del teorema di Fubini per variabili indipendenti riguarda il valore atteso del loro prodotto.

- **Corollario:** Siano $X_1, ..., X_n$ variabili aleatorie reali **indipendenti** tali che il valore atteso di ognuna di esse sia finito ($E[|X_i|] < \infty$ per ogni $i$). Allora, il valore atteso del loro prodotto è finito e uguale al prodotto dei loro valori attesi: $E[X_1 ... X_n] = E[X_1] ... E[X_n]$.
    
    Questa proprietà è fondamentale e semplifica notevolmente il calcolo dei **momenti misti** per variabili indipendenti. Invece di calcolare integrali multipli, si calcolano prodotti di integrali singoli.
    
![[Pasted image 20250414172757.png]]
### Criteri per Verificare l'Indipendenza

Il professore menziona brevemente i criteri per verificare se due variabili aleatorie sono indipendenti.

- **Definizione Generale:** $X_1$ e $X_2$ sono indipendenti se per ogni coppia di eventi $A_1$ e $A_2$ negli spazi di arrivo, $P(X_1 \in A_1 \cap X_2 \in A_2) = P(X_1 \in A_1) P(X_2 \in A_2)$. Verificarlo per tutti gli eventi può essere difficile.
    
- **Funzione di Ripartizione:** Per variabili aleatorie reali, $X_1$ e $X_2$ sono indipendenti se e solo se la loro funzione di ripartizione congiunta $F_{X_1, X_2}(x_1, x_2)$ è uguale al prodotto delle loro funzioni di ripartizione marginali $F_{X_1}(x_1)$ e $F_{X_2}(x_2)$: $F_{X_1, X_2}(x_1, x_2) = P(X_1 \le x_1, X_2 \le x_2) = P(X_1 \le x_1) P(X_2 \le x_2) = F_{X_1}(x_1) F_{X_2}(x_2)$. Questo criterio è generale ma la funzione di ripartizione congiunta potrebbe non essere sempre facile da calcolare.
    
- **Densità (se esistono):** Se $X_1$ e $X_2$ hanno densità $f_{X_1}(x_1)$ e $f_{X_2}(x_2)$, allora sono indipendenti se e solo se la loro densità congiunta $f_{X_1, X_2}(x_1, x_2)$ è uguale al prodotto delle loro densità marginali: $f_{X_1, X_2}(x_1, x_2) = f_{X_1}(x_1) f_{X_2}(x_2)$. Questo è un criterio pratico quando le densità sono note.

___

# Indipendenza di Vettori Aleatori Assolutamente Continui

## Proposizione/Teorema: Condizione di Indipendenza Tramite la Fattorizzazione della Densità Congiunta

Sia $X = (X_1, ..., X_d)$ un vettore assolutamente continuo con densità $f(x) = f(x_1, ..., x_d)$. Le componenti $X_1, ..., X_d$ sono indipendenti se e solo se la densità congiunta $d_X(x)$ (utilizzando $d$ per coerenza) fattorizza, ovvero se esiste una scelta di funzioni $f_i(x_i)$ (che risulteranno essere le densità marginali) tali che:

$d_X(x_1, ..., x_d) = f_1(x_1) \cdot f_2(x_2) \cdot ... \cdot f_d(x_d)$

per ogni scelta di vettori $x = (x_1, ..., x_d)$ di dimensioni appropriate. È importante ricordare che le densità non sono definite ovunque, quindi questa uguaglianza deve valere laddove le densità sono definite. Questa condizione è analoga a quella del caso discreto, e non deve valere solo per qualche particolare $x$, ma per tutti i possibili $x$.

## Dimostrazione (Supponendo che la Densità Fattorizzi)

Supponiamo che la densità congiunta fattorizzi come $d_X(t_1, ..., t_d) = f_1(t_1) \cdot f_2(t_2) \cdot ... \cdot f_d(t_d)$. Vogliamo calcolare la funzione di ripartizione multivariata $F_X(x) = P(X_1 \le x_1, ..., X_d \le x_d)$ in un punto generico $x = (x_1, ..., x_d)$. Per la definizione di funzione di ripartizione, si ha:

$F_X(x_1, ..., x_d) = \int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} d_X(t_1, ..., t_d) dt_d ... dt_1$

Dato che stiamo assumendo che la densità fattorizza, possiamo sostituire $d_X$ con il prodotto delle funzioni $f_i$:

$F_X(x_1, ..., x_d) = \int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} f_1(t_1) \cdot f_2(t_2) \cdot ... \cdot f_d(t_d) dt_d ... dt_1$
![[Pasted image 20250414173711.png]]
Per il teorema di Fubini-Tonelli, possiamo scambiare l'ordine di integrazione e, poiché ogni $f_i(t_i)$ dipende solo da $t_i$, possiamo separare gli integrali:

$F_X(x_1, ..., x_d) = \left( \int_{-\infty}^{x_1} f_1(t_1) dt_1 \right) \cdot \left( \int_{-\infty}^{x_2} f_2(t_2) dt_2 \right) \cdot ... \cdot \left( \int_{-\infty}^{x_d} f_d(t_d) dt_d \right)$

Ogni termine di questo prodotto è la funzione di ripartizione marginale della corrispondente variabile $X_i$ calcolata in $x_i$:

$F_{X_i}(x_i) = \int_{-\infty}^{x_i} f_i(t_i) dt_i$

Quindi, otteniamo:

$F_X(x_1, ..., x_d) = F_{X_1}(x_1) \cdot F_{X_2}(x_2) \cdot ... \cdot F_{X_d}(x_d)$

Poiché la funzione di ripartizione congiunta fattorizza nel prodotto delle funzioni di ripartizione marginali, le variabili $X_1, ..., X_d$ sono indipendenti.
![[Pasted image 20250414173736.png]]
## Dimostrazione (Supponendo l'Indipendenza)


Supponiamo che le variabili aleatorie $X_1, ..., X_d$ siano indipendenti. Per variabili aleatorie reali, questo significa che la loro funzione di ripartizione congiunta fattorizza nel prodotto delle funzioni di ripartizione marginali: $F_X(x_1, ..., x_d) = \prod_{i=1}^{d} F_{X_i}(x_i)$.

Sappiamo che, per una variabile aleatoria assolutamente continua $X_i$, la sua funzione di ripartizione marginale può essere espressa come l'integrale della sua densità marginale $f_{X_i}(t_i)$: $F_{X_i}(x_i) = \int_{-\infty}^{x_i} f_{X_i}(t_i) dt_i$.

Sostituendo queste espressioni nella condizione di indipendenza per le funzioni di ripartizione, otteniamo: $\int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} f(t_1, ..., t_d) dt_1 ... dt_d = \prod_{i=1}^{d} \left( \int_{-\infty}^{x_i} f_{X_i}(t_i) dt_i \right)$.

Il lato destro di questa equazione può essere riscritto come un integrale multiplo grazie al teorema di Fubini-Tonelli: $\prod_{i=1}^{d} \left( \int_{-\infty}^{x_i} f_{X_i}(t_i) dt_i \right) = \int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} \left( \prod_{i=1}^{d} f_{X_i}(t_i) \right) dt_1 ... dt_d$.

Quindi, abbiamo: $\int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} f(t_1, ..., t_d) dt_1 ... dt_d = \int_{-\infty}^{x_1} ... \int_{-\infty}^{x_d} \left( \prod_{i=1}^{d} f_{X_i}(t_i) \right) dt_1 ... dt_d$.

Questa uguaglianza vale per ogni scelta di $x_1, ..., x_d$. Ciò implica che le funzioni integrande devono essere uguali quasi ovunque (a meno di insiemi di misura di Lebesgue nulla): $f(x_1, ..., x_d) = \prod_{i=1}^{d} f_{X_i}(x_i)$.

Pertanto, se le variabili aleatorie sono indipendenti, la loro densità congiunta fattorizza nel prodotto delle densità marginali.
![[Pasted image 20250414174422.png]]
Questo dimostra che se le variabili sono indipendenti, la densità congiunta fattorizza nel prodotto delle densità marginali. La funzione prodotto $\prod_{i=1}^{d} f_{X_i}(x_i)$ è una funzione positiva e il suo integrale su $\mathbb{R}^d$ è uguale a 1 (per il teorema di Fubini, è il prodotto degli integrali di ogni $f_{X_i}$ su $\mathbb{R}$, che sono tutti uguali a 1). Pertanto, essa è una densità per il vettore $X$. Siccome la densità è unica a meno di insiemi di misura nulla, il prodotto delle densità marginali deve essere uguale alla densità congiunta (quasi ovunque).

## Criterio di Indipendenza Tramite Densità Congiunta e Marginali

Un criterio utile per verificare l'indipendenza di un vettore assolutamente continuo è il seguente: se si ha la densità congiunta $f(x_1, ..., x_d)$, si calcolano le densità marginali $f_{X_i}(x_i)$ (integrando la densità congiunta rispetto a tutte le altre variabili). Se il prodotto delle densità marginali è uguale alla densità congiunta:

$f(x_1, ..., x_d) = f_{X_1}(x_1) \cdot f_{X_2}(x_2) \cdot ... \cdot f_{X_d}(x_d)$

allora le variabili $X_1, ..., X_d$ sono indipendenti. In teoria, si dovrebbe prima conoscere la congiunta, calcolare le marginali e poi verificare la loro relazione. Tuttavia, in alcuni casi, si può arrivare a questa conclusione in modo più sintetico.

## Trasformazioni di Vettori Aleatori e Indipendenza

In generale, trasformare vettori aleatori senza l'ipotesi di indipendenza può essere complicato. Tuttavia, l'indipendenza spesso semplifica notevolmente il problema. Esempi di trasformazioni già viste includono trasformazioni lineari e modelli scala posizione. È importante saper dedurre la funzione di ripartizione e la funzione di densità delle variabili trasformate. Altri esempi di trasformazioni includono il massimo, il minimo, il modulo e il quadrato di variabili aleatorie.

Certamente, ecco la spiegazione del professore a partire dalla Funzione di Ripartizione del Massimo, integrata con i contenuti forniti e formattata come richiesto:

# Statistiche d'Ordine: Massimo e Minimo di Variabili Aleatorie Indipendenti

## Introduzione alle Statistiche d'Ordine

Le statistiche d'ordine si occupano dello studio di variabili aleatorie ottenute ordinando un campione di variabili aleatorie. Tra le statistiche d'ordine più semplici e importanti troviamo il **massimo** e il **minimo** di un insieme di variabili aleatorie indipendenti.

Consideriamo $n$ variabili aleatorie $X_1, X_2, ..., X_n$ indipendenti. Definiamo il **massimo** $M = \max(X_1, X_2, ..., X_n)$ e il **minimo** $m = \min(X_1, X_2, ..., X_n)$. Essendo funzioni continue di variabili aleatorie, anche $M$ e $m$ sono variabili aleatorie.

## Funzione di Ripartizione del Massimo

Vogliamo calcolare la funzione di ripartizione del massimo, $F_M(x) = P(M \le x)$.

L'evento ${M \le x}$ si verifica se e solo se tutte le variabili aleatorie $X_1, X_2, ..., X_n$ sono minori o uguali a $x$: ${M \le x} = {\max(X_1, ..., X_n) \le x} = {X_1 \le x, X_2 \le x, ..., X_n \le x}$

Quindi, la funzione di ripartizione del massimo è: $F_M(x) = P(X_1 \le x, X_2 \le x, ..., X_n \le x)$

Sfruttando l'ipotesi di **indipendenza** delle variabili aleatorie, possiamo scrivere la probabilità congiunta come il prodotto delle probabilità marginali: $F_M(x) = P(X_1 \le x) P(X_2 \le x) ... P(X_n \le x)$

Introduciamo ora l'ulteriore ipotesi che le variabili aleatorie siano **identicamente distribuite** (i.i.d.), cioè che abbiano tutte la stessa funzione di ripartizione $F_X(x) = P(X_i \le x)$ per ogni $i = 1, ..., n$: $F_M(x) = [F_X(x)]^n$
![[Pasted image 20250414175120.png]]
Questo risultato ci permette di esprimere la funzione di ripartizione del massimo in termini della funzione di ripartizione della singola variabile aleatoria quando queste sono indipendenti e identicamente distribuite.

## Funzione di Ripartizione del Minimo

Consideriamo ora il minimo $m = \min(X_1, X_2, ..., X_n)$. Calcolare direttamente $P(m \le x)$ non è particolarmente agevole. È più conveniente calcolare la **funzione di sopravvivenza** (o **contropartizione**) del minimo, $P(m > x)$, e poi ricavare la funzione di ripartizione.

L'evento ${m > x}$ si verifica se e solo se tutte le variabili aleatorie $X_1, X_2, ..., X_n$ sono maggiori di $x$: ${m > x} = {\min(X_1, ..., X_n) > x} = {X_1 > x, X_2 > x, ..., X_n > x}$

Quindi, la probabilità che il minimo sia maggiore di $x$ è: $P(m > x) = P(X_1 > x, X_2 > x, ..., X_n > x)$

Sfruttando l'indipendenza delle variabili aleatorie: $P(m > x) = P(X_1 > x) P(X_2 > x) ... P(X_n > x)$

Sotto l'ipotesi di variabili i.i.d., dove $P(X_i > x) = 1 - F_X(x)$: $P(m > x) = [1 - F_X(x)]^n$

Infine, la funzione di ripartizione del minimo è data da: $F_m(x) = P(m \le x) = 1 - P(m > x) = 1 - [1 - F_X(x)]^n$
![[Pasted image 20250414175430.png]]
## Esempio 1: Minimo di Tempi di Guasto Esponenziali

Consideriamo $n$ tempi di guasto indipendenti, ciascuno distribuito secondo una legge esponenziale negativa con parametro $\lambda > 0$. La funzione di ripartizione di una variabile esponenziale con parametro $\lambda$ è $F_X(x) = 1 - e^{-\lambda x}$ per $x > 0$, e $F_X(x) = 0$ per $x \le 0$.

Vogliamo trovare la legge del minimo di questi tempi di guasto. Usando la formula per la funzione di ripartizione del minimo: $F_m(x) = 1 - [1 - (1 - e^{-\lambda x})]^n = 1 - [e^{-\lambda x}]^n = 1 - e^{-n\lambda x}$ per $x > 0$. Per $x \le 0$, $F_X(x) = 0$, quindi $F_m(x) = 1 - ^n = 1 - 1 = 0$.

La funzione di ripartizione $F_m(x) = 1 - e^{-n\lambda x}$ per $x > 0$ è la funzione di ripartizione di una **variabile aleatoria esponenziale negativa con parametro $n\lambda$**. Questo significa che il minimo di $n$ variabili esponenziali i.i.d. con parametro $\lambda$ è ancora una variabile esponenziale, ma con un tasso di guasto $n$ volte maggiore.
![[Pasted image 20250414175554.png]]
## Esercizio 1: Massimo di Variabili Uniformi su (0, 1)

Siano $X_1, ..., X_n$ variabili aleatorie indipendenti e identicamente distribuite secondo una legge uniforme sull'intervallo $(0, 1)$. La funzione di ripartizione di una variabile uniforme su $(0, 1)$ è: $F_X(x) = \begin{cases} 0 & x \le 0 \\ x & 0 < x < 1 \\ 1 & x \ge 1 \end{cases}$

Calcolare la funzione di ripartizione e la densità del massimo $M = \max(X_1, ..., X_n)$.

Usando la formula per la funzione di ripartizione del massimo: $F_M(x) = [F_X(x)]^n = \begin{cases} 0^n = 0 & x \le 0 \\ x^n & 0 < x < 1 \\ 1^n = 1 & x \ge 1 \end{cases}$

Per trovare la densità $f_M(x)$, deriviamo la funzione di ripartizione rispetto a $x$: 

$f_M(x) = \frac{d}{dx} F_M(x) = \begin{cases} 0 & x \le 0 \\ nx^{n-1} & 0 < x < 1 \\ 0 & x \ge 1 \end{cases}$
___
*da qui in poi un allucinazione*
## Trasformazioni di Vettori Aleatori e Indipendenza

Quando si considerano trasformazioni di vettori aleatori, l'indipendenza delle componenti semplifica notevolmente l'analisi. Senza l'ipotesi di indipendenza, determinare la legge della trasformazione può essere molto complesso. L'esempio dei massimi e minimi illustra come l'indipendenza permetta di ricavare le leggi delle statistiche d'ordine in modo relativamente semplice.

## Funzione Caratteristica della Gamma

Per concludere, il professore introduce la funzione caratteristica della distribuzione Gamma, senza fornirne la derivazione.

La densità della distribuzione Gamma è proporzionale a $x^{\alpha - 1} e^{-\beta x}$ per $x > 0$, dove $\alpha > 0$ è il parametro di forma e $\beta > 0$ è il parametro di tasso (l'inverso del parametro di scala). La funzione caratteristica della distribuzione Gamma è data da: $\phi_X(t) = E[e^{itX}] = \left( \frac{\beta}{\beta - it} \right)^\alpha$, per $|t| < \beta$ .

Il professore fa notare che la parametrizzazione della Gamma può variare a seconda della convenzione utilizzata (scala o tasso) . Nella forma presentata, $\beta$ è un parametro di tasso.

### Caso Particolare: Esponenziale

Come caso particolare, la distribuzione Esponenziale con parametro $\lambda$ è una distribuzione Gamma con $\alpha = 1$ e $\beta = \lambda$. La sua funzione caratteristica si ottiene sostituendo questi valori nella formula generale: $\phi_X(t) = \left( \frac{\lambda}{\lambda - it} \right)^1 = \frac{\lambda}{\lambda - it} = \frac{1}{1 - it/\lambda}$ .

Questo risultato può essere verificato direttamente tramite l'integrazione complessa, trattando l'integrale della funzione caratteristica come un integrale di funzioni complesse .

### Esercizio 2: Somma di Variabili Gamma Indipendenti

Considerare $n$ variabili aleatorie indipendenti $X_1, ..., X_n$, dove ciascuna $X_j$ segue una distribuzione Gamma con parametri $(\alpha_j, \beta)$ (notare che hanno lo stesso parametro di tasso $\beta$). Determinare la legge della somma $S_n = X_1 + ... + X_n$.

Sfruttando la proprietà che la funzione caratteristica della somma di variabili indipendenti è il prodotto delle loro funzioni caratteristiche: $\phi_{S_n}(t) = E[e^{itS_n}] = E[e^{it(X_1 + ... + X_n)}] = E[e^{itX_1} ... e^{itX_n}] = E[e^{itX_1}] ... E[e^{itX_n}]$ $\phi_{S_n}(t) = \phi_{X_1}(t) ... \phi_{X_n}(t) = \left( \frac{\beta}{\beta - it} \right)^{\alpha_1} ... \left( \frac{\beta}{\beta - it} \right)^{\alpha_n} = \left( \frac{\beta}{\beta - it} \right)^{\alpha_1 + ... + \alpha_n}$

La funzione caratteristica ottenuta è quella di una distribuzione Gamma con parametri $(\sum_{j=1}^n \alpha_j, \beta)$.

**Caso Particolare: Somma di Esponenziali**

Se consideriamo $n$ variabili aleatorie esponenziali indipendenti con lo stesso parametro $\lambda$ (quindi $\alpha_j = 1$ e $\beta = \lambda$ per ogni $j$), la loro somma seguirà una distribuzione Gamma con parametri $(n, \lambda)$.

Questo conclude la parte della lezione richiesta, evidenziando l'importanza dell'indipendenza nello studio delle trasformazioni di variabili aleatorie e fornendo un'introduzione alla funzione caratteristica della distribuzione Gamma.

#### References



2025-04-15 13:39

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:

## prob-lez17

## Seconda Parte del Corso: Covarianza

### Complemento sull'Indipendenza

#### Funzioni di Variabili Aleatorie Indipendenti

Il professore inizia la seconda parte del corso con un complemento sulla proprietà dell'indipendenza che spesso si presenta nelle applicazioni.

**Proposizione:** Siano $X_1, X_2, \dots, X_n$ variabili aleatorie indipendenti. Si considerino delle funzioni misurabili $g_1$ di un sottoinsieme di queste variabili (ad esempio, $X_{i_1}, \dots, X_{i_k}$) e $g_2$ di un altro sottoinsieme disgiunto (ad esempio, $X_{j_1}, \dots, X_{j_m}$), dove ${i_1, \dots, i_k} \cap {j_1, \dots, j_m} = \emptyset$. Allora le variabili aleatorie $Y_1 = g_1(X_{i_1}, \dots, X_{i_k})$ e $Y_2 = g_2(X_{j_1}, \dots, X_{j_m})$ sono indipendenti.

**Esempio:** Se $X_1, X_2, X_3$ sono variabili aleatorie indipendenti, allora $Y_1 = g_1(X_1) = X_1^2$ e $Y_2 = g_2(X_2, X_3) = X_2^2 + X_3^2$ sono indipendenti.
![[Pasted image 20250415151714.png]]
**Dimostrazione (concettuale):** La dimostrazione si basa sulla definizione di indipendenza tramite le controimmagini. Se $X_i$ sono indipendenti, le sigma-algebre generate da gruppi disgiunti di queste variabili sono indipendenti. Le controimmagini di insiemi misurabili tramite $g_1$ e $g_2$ appartengono a queste sigma-algebre indipendenti, garantendo l'indipendenza di $Y_1$ e $Y_2$.

#### Applicazione Tipica: Calcolo del Valore Atteso

Consideriamo variabili aleatorie $X_1, X_2, X_3$ indipendenti con momento secondo finito, cioè $E[X_i^2] < \infty$ per $i = 1, 2, 3$. Vogliamo calcolare il valore atteso di un'espressione come:

$Y = (X_1^2 + \sin(X_1 + X_2)) \cdot e^{-|X_3|}$

Definiamo $Y_1 = X_1^2 + \sin(X_1 + X_2)$ e $Y_2 = e^{-|X_3|}$. Notiamo che $Y_1$ è funzione di $X_1$ e $X_2$, mentre $Y_2$ è funzione solo di $X_3$. Poiché $X_1, X_2, X_3$ sono indipendenti, allora $Y_1$ e $Y_2$ sono indipendenti.

Se $E[|Y_1|] < \infty$ e $E[|Y_2|] < \infty$, allora il valore atteso del prodotto è il prodotto dei valori attesi:

$E[Y] = E[Y_1 Y_2] = E[Y_1] E[Y_2] = E[X_1^2 + \sin(X_1 + X_2)] \cdot E[e^{-|X_3|}]$

Per verificare che i valori attesi siano finiti:

- $|Y_2| = |e^{-|X_3|}| = e^{-|X_3|} \leq 1$, quindi $E[|Y_2|] \leq 1 < \infty$.
- $|Y_1| = |X_1^2 + \sin(X_1 + X_2)| \leq |X_1^2| + |\sin(X_1 + X_2)| \leq X_1^2 + 1$. Poiché $E[X_1^2] < \infty$, allora $E[|Y_1|] \leq E[X_1^2] + 1 < \infty$.

Questa proprietà è fondamentale quando si analizzano funzioni complesse di variabili aleatorie indipendenti.
![[Pasted image 20250415152305.png]]
### Covarianza

#### Definizione

Date due variabili aleatorie $X_1$ e $X_2$ con momento secondo finito (cioè $E[X_1^2] < \infty$ e $E[X_2^2] < \infty$), la **covarianza** di $X_1$ e $X_2$ è definita come:

$Cov(X_1, X_2) = E[(X_1 - E[X_1])(X_2 - E[X_2])]$

Perché la covarianza è importante? Consideriamo la **varianza di una combinazione lineare** di due variabili aleatorie:

$Var(aX_1 + bX_2) = E[(aX_1 + bX_2 - E[aX_1 + bX_2])^2]$ $= E[(a(X_1 - E[X_1]) + b(X_2 - E[X_2]))^2]$ $= E[a^2(X_1 - E[X_1])^2 + b^2(X_2 - E[X_2])^2 + 2ab(X_1 - E[X_1])(X_2 - E[X_2])]$ $= a^2 E[(X_1 - E[X_1])^2] + b^2 E[(X_2 - E[X_2])^2] + 2ab E[(X_1 - E[X_1])(X_2 - E[X_2])]$ $= a^2 Var(X_1) + b^2 Var(X_2) + 2ab Cov(X_1, X_2)$

La covarianza emerge naturalmente quando si studia la variabilità di somme di variabili aleatorie.
![[Pasted image 20250415153126.png]]
![[Pasted image 20250415153111.png]]
![[Pasted image 20250415153552.png]]
## Proprietà della Covarianza
![[Pasted image 20250415154122.png]]
### 1. Covarianza di una variabile con se stessa

**Proprietà:** La covarianza di una variabile aleatoria con se stessa è uguale alla sua varianza.

$Cov(X_1, X_1) = Var(X_1)$

**Commento del professore:** Nessuno vieta di considerare il vettore particolare che ha come componente sempre la stessa variabile aleatoria. In questo caso, applicando la definizione di covarianza, il prodotto $(X_1 - E[X_1])(X_1 - E[X_1])$ diventa $(X_1 - E[X_1])^2$, e il valore atteso di questo è proprio la definizione di varianza.

### 2. Simmetria della Covarianza

**Proprietà:** La covarianza tra due variabili aleatorie è simmetrica.

$Cov(X_1, X_2) = Cov(X_2, X_1)$

**Commento del professore:** Questa proprietà è ovvia direttamente dalla definizione di covarianza, poiché il prodotto $(X_1 - E[X_1])(X_2 - E[X_2])$ è commutativo. Quindi l'ordine delle variabili non influenza il risultato della covarianza. Questa proprietà implica che quando si calcola la varianza di una somma di variabili aleatorie, il termine $Cov(X_i, X_j)$ è lo stesso di $Cov(X_j, X_i)$, il che è importante per le formule generali.

### 3. Relazione con il momento misto

**Proprietà:** La covarianza può essere espressa come il momento misto meno il prodotto dei momenti primi (valori attesi).

$Cov(X_1, X_2) = E[X_1 X_2] - E[X_1]E[X_2]$

**Dimostrazione:** Il professore svolge la dimostrazione nel seguente modo: Partendo dalla definizione: $Cov(X_1, X_2) = E[(X_1 - E[X_1])(X_2 - E[X_2])]$ Si sviluppa il prodotto all'interno del valore atteso: $Cov(X_1, X_2) = E[X_1 X_2 - X_1 E[X_2] - E[X_1] X_2 + E[X_1] E[X_2]]$ Utilizzando la linearità del valore atteso, si ottiene: $Cov(X_1, X_2) = E[X_1 X_2] - E[X_1 E[X_2]] - E[E[X_1] X_2] + E[E[X_1] E[X_2]]$ Poiché $E[X_1]$ e $E[X_2]$ sono costanti, possono essere portate fuori dal valore atteso: $Cov(X_1, X_2) = E[X_1 X_2] - E[X_1] E[X_2] - E[X_1] E[X_2] + E[X_1] E[X_2]$ Combinando gli ultimi due termini, si arriva a: $Cov(X_1, X_2) = E[X_1 X_2] - E[X_1] E[X_2]$
![[Pasted image 20250415160401.png]]
**Commento del professore:** Questa è una dimostrazione tipica che può essere richiesta in un compito. Spesso è più comodo calcolare separatamente il momento misto $E[X_1 X_2]$ e i momenti marginali $E[X_1]$ e $E[X_2]$ per poi trovare la covarianza.

### 4. Effetto delle trasformazioni lineari

**Proprietà:** La covarianza è quadratica nei coefficienti e insensibile alle traslazioni. Per costanti $a, b, c, d \in \mathbb{R}$:

$Cov(aX_1 + c, bX_2 + d) = ab Cov(X_1, X_2)$

**Dimostrazione:** Il professore esegue la dimostrazione come segue: Partendo dalla definizione di covarianza applicata alle variabili trasformate: $Cov(aX_1 + c, bX_2 + d) = E[((aX_1 + c) - E[aX_1 + c])((bX_2 + d) - E[bX_2 + d])]$ Si calcolano i valori attesi delle variabili trasformate: $E[aX_1 + c] = aE[X_1] + c$ $E[bX_2 + d] = bE[X_2] + d$ Sostituendo nella definizione: $Cov(aX_1 + c, bX_2 + d) = E[(aX_1 + c - (aE[X_1] + c))(bX_2 + d - (bE[X_2] + d))]$ $Cov(aX_1 + c, bX_2 + d) = E[(aX_1 - aE[X_1])(bX_2 - bE[X_2])]$ S Factorizzano le costanti $a$ e $b$: $Cov(aX_1 + c, bX_2 + d) = E[a(X_1 - E[X_1]) b(X_2 - E[X_2])]$ $Cov(aX_1 + c, bX_2 + d) = E[ab(X_1 - E[X_1])(X_2 - E[X_2])]$ Per linearità del valore atteso, le costanti $a$ e $b$ possono essere portate fuori: $Cov(aX_1 + c, bX_2 + d) = ab E[(X_1 - E[X_1])(X_2 - E[X_2])] = ab Cov(X_1, X_2)$
![[Pasted image 20250415160714.png]]
**Commento del professore:** Come per la varianza (che ha un solo coefficiente), la covarianza è insensibile alle traslazioni (l'aggiunta delle costanti $c$ e $d$) e i coefficienti moltiplicativi $a$ e $b$ vengono portati fuori, moltiplicandosi tra loro.

### 5. Covarianza di variabili indipendenti

**Proprietà:** Se due variabili aleatorie $X_1$ e $X_2$ sono indipendenti, allora la loro covarianza è zero.

$Se \ X_1 \ e \ X_2 \ sono \ indipendenti, \ allora \ Cov(X_1, X_2) = 0$

**Dimostrazione:** Il professore spiega la dimostrazione in questo modo: Se $X_1$ e $X_2$ sono indipendenti e hanno momento secondo finito (il che implica che abbiano anche momento primo finito, altrimenti non si potrebbe nemmeno scrivere la covarianza), allora $E[X_1 X_2] = E[X_1] E[X_2]$. Utilizzando la proprietà 3: $Cov(X_1, X_2) = E[X_1 X_2] - E[X_1] E[X_2] = E[X_1] E[X_2] - E[X_1] E[X_2] = 0$
![[Pasted image 20250415160219.png]]
**Commento del professore:** Il fatto che siano indipendenti implica che il valore atteso del prodotto si fattorizza nel prodotto dei valori attesi, portando direttamente a una covarianza nulla.

**Attenzione:** Il professore sottolinea che **il viceversa non è sempre vero**. Una covarianza nulla non implica necessariamente che le variabili aleatorie siano indipendenti. Possono esistere situazioni in cui la covarianza è zero ma le variabili sono dipendenti.

### 6. Caso speciale: media nulla

**Proprietà:** Se una delle due variabili aleatorie ha media nulla (e la covarianza è finita), allora la covarianza è uguale al valore atteso del momento misto.

$Se \ E[X_1] = 0 \ (e \ Cov(X_1, X_2) \ è \ finita), \ allora \ Cov(X_1, X_2) = E[X_1 X_2]$

**Spiegazione:** Se $E[X_1] = 0$, allora dalla proprietà 3: $Cov(X_1, X_2) = E[X_1 X_2] - E[X_1] E[X_2] = E[X_1 X_2] - 0 \cdot E[X_2] = E[X_1 X_2]$
![[Pasted image 20250415160850.png]]
**Commento del professore:** Questa è una proprietà semplice ma utile. Se si sa che una delle due variabili ha media zero, per calcolare la covarianza è sufficiente calcolare il valore atteso del loro prodotto, risparmiando un potenziale calcolo di un integrale.

#### Varianza di una Combinazione Lineare di $n$ Variabili Aleatorie

Generalizzando al caso di $n$ variabili aleatorie $X_1, \dots, X_n$ e costanti $a_1, \dots, a_n$, la varianza della combinazione lineare $\sum_{i=1}^n a_i X_i$ è data da:

$Var(\sum_{i=1}^n a_i X_i) = \sum_{i=1}^n \sum_{j=1}^n a_i a_j Cov(X_i, X_j)$

Questa formula può essere riscritta in diverse forme equivalenti:

$Var(\sum_{i=1}^n a_i X_i) = \sum_{i=1}^n a_i^2 Var(X_i) + \sum_{i \neq j} a_i a_j Cov(X_i, X_j)$

Oppure:

$Var(\sum_{i=1}^n a_i X_i) = \sum_{j=1}^n a_j^2 Var(X_j) + 2 \sum_{1 \leq i < j \leq n} a_i a_j Cov(X_i, X_j)$

Queste espressioni mostrano come la variabilità di una somma di variabili aleatorie dipenda non solo dalle varianze individuali, ma anche dalle covarianze tra le coppie di variabili.
![[Pasted image 20250415161729.png]]
#### Covarianza di Combinazioni Lineari

Date due collezioni di variabili aleatorie ${X_i}_{i=1}^m$ e ${Y_j}_{j=1}^n$ definite sullo stesso spazio di probabilità, e costanti ${a_i}_{i=1}^m$ e ${b_j}_{j=1}^n$, la covarianza delle combinazioni lineari $\sum_{i=1}^m a_i X_i$ e $\sum_{j=1}^n b_j Y_j$ è:

$Cov(\sum_{i=1}^m a_i X_i, \sum_{j=1}^n b_j Y_j) = \sum_{i=1}^m \sum_{j=1}^n a_i b_j Cov(X_i, Y_j)$

Questa proprietà, detta bilinearità della covarianza, è fondamentale per manipolare espressioni che coinvolgono combinazioni lineari di variabili aleatorie.
![[Pasted image 20250415161853.png]]
**Esempio:** $Cov(a_1 X_1 + a_2 X_2, b_1 Y_1 + b_2 Y_2) = a_1 b_1 Cov(X_1, Y_1) + a_1 b_2 Cov(X_1, Y_2) + a_2 b_1 Cov(X_2, Y_1) + a_2 b_2 Cov(X_2, Y_2)$

Inoltre, la covarianza è insensibile alle traslazioni: $Cov(X + c, Y) = Cov(X, Y)$ per qualsiasi costante $c$.

#### Esempi di Calcolo di Covarianza

1. $Cov(2X + 1, Y + 3Z) = Cov(2X, Y + 3Z) = 2 Cov(X, Y + 3Z) = 2 (Cov(X, Y) + Cov(X, 3Z)) = 2 Cov(X, Y) + 2 \cdot 3 Cov(X, Z) = 2 Cov(X, Y) + 6 Cov(X, Z)$.
    
2. $Cov(3X + 1, X + Y) = Cov(3X, X + Y) = 3 Cov(X, X + Y) = 3 (Cov(X, X) + Cov(X, Y)) = 3 (Var(X) + Cov(X, Y))$.
    
3. $Cov(c, X) = Cov(c + 0, X + 0) = 1 \cdot 1 \cdot Cov(\text{costante nulla}, X) = Cov(0, X) = E[(0 - E)(X - E[X])] = E[0 \cdot (X - E[X])] = E = 0$. La covarianza tra una costante e una variabile aleatoria è sempre zero.
![[Pasted image 20250415162426.png]]

**Commento:**

- **Insensibilità alle traslazioni:** La costante $+1$ nel primo argomento e $+3z$ nel secondo argomento non influenzano la covarianza. Questo è dovuto alla proprietà che $Cov(aX_1 + c, bX_2 + d) = ab Cov(X_1, X_2)$. Le costanti additive ($c$ e $d$) vengono eliminate nel calcolo della covarianza perché si annullano quando si considerano le deviazioni dalla media.
- **Linearità nei coefficienti:** I coefficienti moltiplicativi ($2$ per $x$ e potenzialmente un coefficiente implicito di $1$ per $y$, e $3$ per $z$) vengono estratti dalla covarianza. $Cov(2x, y) = 2 Cov(x, y)$ e $Cov(x, 3z) = 3 Cov(x, z)$. Quando abbiamo una combinazione lineare in entrambi gli argomenti, i coefficienti si moltiplicano, come si vede nel termine $2 \cdot 3 \cdot Cov(x, z)$.
- **Distribuzione della covarianza:** La covarianza si "distribuisce" sulla somma, in modo simile al valore atteso. $Cov(2x + 1, y + 3z) = Cov(2x + 1, y) + Cov(2x + 1, 3z)$. Applicando poi l'insensibilità alle traslazioni e la linearità dei coefficienti, si arriva al risultato.

### Esercizio Difficile sulla Covarianza

**Esercizio:** Siano $X_1, X_2$ e $\tilde{X}_1, \tilde{X}_2$ due vettori aleatori indipendenti con la stessa legge (stessa distribuzione congiunta). Dimostrare che:

$Cov(X_1, X_2) = \frac{1}{2} E[(X_1 - \tilde{X}_1)(X_2 - \tilde{X}_2)]$
![[Pasted image 20250415162457.png]]
![[Pasted image 20250415162800.png|200]]
**Spiegazione intuitiva della Covarianza come indice di concordanza:**

La covarianza misura come due variabili aleatorie variano insieme. Un valore positivo indica che tendono a muoversi nella stessa direzione, mentre un valore negativo indica che tendono a muoversi in direzioni opposte. Un valore vicino a zero suggerisce una relazione lineare debole o assente.

L'esercizio proposto cerca di fornire un'ulteriore interpretazione della covarianza confrontando le realizzazioni di due coppie indipendenti con la stessa distribuzione. L'espressione $E[(X_1 - \tilde{X}_1)(X_2 - \tilde{X}_2)]$ considera le differenze tra le prime componenti e le differenze tra le seconde componenti delle due coppie. Il valore atteso di questo prodotto è legato alla tendenza delle variazioni congiunte delle variabili.

Questo esercizio, pur non essendo direttamente utile per il compitino imminente, è prezioso per approfondire la comprensione delle proprietà delle variabili aleatorie e del concetto di covarianza.
___
### Conclusione sull'Argomento Varianza, Covarianza e Correlazione

- **Definizione di Coefficiente di Correlazione Lineare**
    
    - Date due variabili aleatorie reali $X_1$ e $X_2$ con momento secondo finito (e quindi con varianza finita), il **coefficiente di correlazione lineare**, spesso indicato con $r$ o $\rho$, è definito come: $$\rho = \frac{Cov(X_1, X_2)}{\sqrt{Var(X_1)Var(X_2)}}$$
    - Questa definizione è valida assumendo che le varianze siano diverse da zero.
    - Il professore specifica che si tratterà solo di questo tipo di coefficiente di correlazione, sottolineando che ne esistono altri (come la $\tau$ di Kendall, legata a una diversa forma di dipendenza).
- **Proprietà del Coefficiente di Correlazione Lineare**
    
    - **Proposizione 1:** Il coefficiente di correlazione lineare $\rho$ è un numero compreso tra -1 e 1, inclusi.
        - **Commento:** La covarianza può assumere qualsiasi valore tra $-\infty$ e $+\infty$. La divisione per la radice del prodotto delle varianze (che sono positive) normalizza la covarianza, restringendo l'intervallo dei valori possibili per $\rho$.
    - **Proposizione 2:** I casi estremi, $|\rho| = 1$ (ovvero $\rho = 1$ o $\rho = -1$), si verificano **se e solo se** esiste una relazione lineare tra $X_1$ e $X_2$ con probabilità 1. Ciò significa che esistono costanti $a \neq 0$, $b$, $c \neq 0$, e $d$ tali che con probabilità 1 il vettore $(X_1, X_2)$ è concentrato su una retta, la cui equazione è $ax_1 + bx_2 = c$. In altre parole, $X_2$ può essere espressa come una funzione lineare di $X_1$ (o viceversa), quasi certamente.
        - Se $\rho = 1$, allora $X_2 = \alpha X_1 + \beta$ con $\alpha > 0$ quasi certamente.
        - Se $\rho = -1$, allora $X_2 = \alpha X_1 + \beta$ con $\alpha < 0$ quasi certamente.
        - **Commento:** Un valore di $\rho$ vicino a 1 o -1 suggerisce una forte tendenza alla dipendenza lineare, ma solo i valori estremi indicano una dipendenza lineare esatta con probabilità 1. È possibile avere dipendenza completa (dove una variabile è funzione deterministica dell'altra) senza che $\rho$ sia uguale a 1 o -1 se la relazione non è lineare.
    ![[Pasted image 20250416142809.png]]
- **Dimostrazione delle Proprietà della Correlazione Lineare**
    
    1. Consideriamo la varianza della variabile aleatoria trasformata $\frac{X_1}{\sigma_1} + \frac{X_2}{\sigma_2}$: $Var\left(\frac{X_1}{\sigma_1} + \frac{X_2}{\sigma_2}\right) \geq 0$ Questo è vero perché la varianza di qualsiasi variabile aleatoria reale è sempre non negativa.
    
	2. Applichiamo la proprietà della varianza della somma di due variabili aleatorie: $Var(A + B) = Var(A) + Var(B) + 2 Cov(A, B)$. Nel nostro caso, $A = \frac{X_1}{\sigma_1}$ e $B = \frac{X_2}{\sigma_2}$: $Var\left(\frac{X_1}{\sigma_1}\right) + Var\left(\frac{X_2}{\sigma_2}\right) + 2 Cov\left(\frac{X_1}{\sigma_1}, \frac{X_2}{\sigma_2}\right) \geq 0$
	    
	3. Utilizziamo la proprietà della varianza di una variabile moltiplicata per una costante: $Var(aX) = a^2 Var(X)$: $\frac{1}{\sigma_1^2} Var(X_1) + \frac{1}{\sigma_2^2} Var(X_2) + 2 Cov\left(\frac{X_1}{\sigma_1}, \frac{X_2}{\sigma_2}\right) \geq 0$
	    
	4. Sappiamo che $Var(X_1) = \sigma_1^2$ e $Var(X_2) = \sigma_2^2$, quindi: $\frac{\sigma_1^2}{\sigma_1^2} + \frac{\sigma_2^2}{\sigma_2^2} + 2 Cov\left(\frac{X_1}{\sigma_1}, \frac{X_2}{\sigma_2}\right) \geq 0$ $1 + 1 + 2 Cov\left(\frac{X_1}{\sigma_1}, \frac{X_2}{\sigma_2}\right) \geq 0$ $2 + 2 Cov\left(\frac{X_1}{\sigma_1}, \frac{X_2}{\sigma_2}\right) \geq 0$
	    
	5. Applichiamo la proprietà della covarianza con costanti: $Cov(aX, bY) = ab Cov(X, Y)$: $2 + 2 \cdot \frac{1}{\sigma_1} \cdot \frac{1}{\sigma_2} Cov(X_1, X_2) \geq 0$ $2 + 2 \frac{Cov(X_1, X_2)}{\sigma_1 \sigma_2} \geq 0$
	    
	6. Riconosciamo nella frazione la definizione del coefficiente di correlazione $\rho$: $2 + 2 \rho \geq 0$ $2 \rho \geq -2$ $\rho \geq -1$
	    
	7. Ora consideriamo la varianza della variabile aleatoria trasformata $\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2}$: $Var\left(\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2}\right) \geq 0$
	    
	8. Applichiamo la proprietà della varianza della somma (o differenza): $Var(A - B) = Var(A) + Var(B) - 2 Cov(A, B)$: $Var\left(\frac{X_1}{\sigma_1}\right) + Var\left(-\frac{X_2}{\sigma_2}\right) - 2 Cov\left(\frac{X_1}{\sigma_1}, -\frac{X_2}{\sigma_2}\right) \geq 0$
	    
	9. Utilizzando le proprietà $Var(aX) = a^2 Var(X)$ e $Cov(aX, bY) = ab Cov(X, Y)$: $\frac{1}{\sigma_1^2} Var(X_1) + \left(-\frac{1}{\sigma_2}\right)^2 Var(X_2) - 2 \cdot \frac{1}{\sigma_1} \cdot \left(-\frac{1}{\sigma_2}\right) Cov(X_1, X_2) \geq 0$ $\frac{\sigma_1^2}{\sigma_1^2} + \frac{\sigma_2^2}{\sigma_2^2} + 2 \frac{Cov(X_1, X_2)}{\sigma_1 \sigma_2} \geq 0$ $1 + 1 + 2 \rho \geq 0$
	    
	10. Attenzione, c'è un errore nel passaggio riportato nella fonte. La covarianza di $\frac{X_1}{\sigma_1}$ e $-\frac{X_2}{\sigma_2}$ è $-\frac{1}{\sigma_1 \sigma_2} Cov(X_1, X_2) = -\rho$. Quindi la disuguaglianza corretta è: $1 + 1 - 2 (-\rho) \geq 0$ $2 + 2 \rho \geq 0$, che ci riporta a $\rho \geq -1$.
	    
	    Ripartiamo dal passo 8 con maggiore attenzione al segno: $Var\left(\frac{X_1}{\sigma_1}\right) + Var\left(-\frac{X_2}{\sigma_2}\right) - 2 Cov\left(\frac{X_1}{\sigma_1}, -\frac{X_2}{\sigma_2}\right) \geq 0$ $\frac{1}{\sigma_1^2} Var(X_1) + \frac{1}{\sigma_2^2} Var(X_2) - 2 \left(-\frac{1}{\sigma_1 \sigma_2}\right) Cov(X_1, X_2) \geq 0$ $1 + 1 + 2 \frac{Cov(X_1, X_2)}{\sigma_1 \sigma_2} \geq 0$ $2 + 2 \rho \geq 0 \implies \rho \geq -1$.
	    
	    Ora rifacciamo il caso con il segno meno: $Var\left(\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2}\right) = Var\left(\frac{X_1}{\sigma_1}\right) + Var\left(-\frac{X_2}{\sigma_2}\right) + 2 Cov\left(\frac{X_1}{\sigma_1}, -\frac{X_2}{\sigma_2}\right) \geq 0$ $1 + 1 + 2 \left(-\frac{1}{\sigma_1 \sigma_2}\right) Cov(X_1, X_2) \geq 0$ $2 - 2 \rho \geq 0$ $2 \geq 2 \rho$ $1 \geq \rho \implies \rho \leq 1$
	    ![[Pasted image 20250416143337.png]]
	    Quindi, combinando i risultati, otteniamo **$-1 \leq \rho \leq 1$**.
        
**Proprietà 2: $|\rho| = 1$ se e solo se esiste una relazione lineare tra $X_1$ e $X_2$ con probabilità 1**

**Dimostrazione:**

- **Caso $\rho = 1$:** Dalla dimostrazione precedente, abbiamo visto che $Var\left(\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2}\right) = 2 - 2\rho$. Se $\rho = 1$, allora $Var\left(\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2}\right) = 2 - 2(1) = 0$. Se la varianza di una variabile aleatoria è zero, significa che la variabile è costante con probabilità 1. Quindi, esiste una costante $c$ tale che: $\frac{X_1}{\sigma_1} - \frac{X_2}{\sigma_2} = c$ con probabilità 1. $X_1 = \frac{\sigma_1}{\sigma_2} X_2 + c \sigma_1$ con probabilità 1. Questa è una relazione lineare della forma $X_1 = \alpha X_2 + \beta$ dove $\alpha = \frac{\sigma_1}{\sigma_2} > 0$ e $\beta = c \sigma_1$. Il segno positivo di $\alpha$ corrisponde a una correlazione positiva.
    
- **Caso $\rho = -1$:** Dalla dimostrazione precedente, abbiamo visto che $Var\left(\frac{X_1}{\sigma_1} + \frac{X_2}{\sigma_2}\right) = 2 + 2\rho$. Se $\rho = -1$, allora $Var\left(\frac{X_1}{\sigma_1} + \frac{X_2}{\sigma_2}\right) = 2 + 2(-1) = 0$. Analogamente, esiste una costante $c'$ tale che: $\frac{X_1}{\sigma_1} + \frac{X_2}{\sigma_2} = c'$ con probabilità 1. $X_1 = -\frac{\sigma_1}{\sigma_2} X_2 + c' \sigma_1$ con probabilità 1. Questa è una relazione lineare della forma $X_1 = \alpha X_2 + \beta$ dove $\alpha = -\frac{\sigma_1}{\sigma_2} < 0$ e $\beta = c' \sigma_1$. Il segno negativo di $\alpha$ corrisponde a una correlazione negativa.
    ![[Pasted image 20250416143921.png]]
- **Viceversa:** Se esiste una relazione lineare $X_2 = \alpha X_1 + \beta$ con $\alpha \neq 0$ (condizione $a \neq 0$ nella fonte), allora possiamo calcolare la covarianza e le varianze: $Cov(X_1, X_2) = Cov(X_1, \alpha X_1 + \beta) = \alpha Cov(X_1, X_1) = \alpha Var(X_1) = \alpha \sigma_1^2$. $Var(X_2) = Var(\alpha X_1 + \beta) = \alpha^2 Var(X_1) = \alpha^2 \sigma_1^2$, quindi $\sigma_2 = |\alpha| \sigma_1$. Sostituendo nella definizione di $\rho$: $\rho = \frac{\alpha \sigma_1^2}{\sigma_1 |\alpha| \sigma_1} = \frac{\alpha}{|\alpha|} = \begin{cases} 1 & \text{se } \alpha > 0 \ -1 & \text{se } \alpha < 0 \end{cases}$ Quindi $|\rho| = 1$. Lo stesso ragionamento si applica se $X_1$ è una funzione lineare di $X_2$.
    ![[Pasted image 20250416144112.png]]

**Commento:**

La dimostrazione si basa sull'importante proprietà che la varianza di una variabile aleatoria è zero se e solo se la variabile è costante con probabilità 1. Normalizzando le variabili $X_1$ e $X_2$ per le loro deviazioni standard, si ottengono variabili con varianza unitaria. La varianza della somma o della differenza di queste variabili normalizzate è poi legata al coefficiente di correlazione. I casi estremi $\rho = 1$ e $\rho = -1$ si verificano quando la combinazione lineare delle variabili normalizzate ha varianza zero, il che implica una relazione lineare deterministica tra le variabili originali. Il segno di $\rho$ indica la direzione di questa relazione lineare.

È importante notare che il coefficiente di correlazione lineare misura solo la **dipendenza lineare** tra le variabili. Se le variabili sono dipendenti ma la loro relazione non è lineare, il coefficiente di correlazione lineare potrebbe essere vicino a zero.

### Osservazione Importante sulla Varianza della Somma di Variabili Aleatorie Indipendenti

- Se $X_1, X_2, ..., X_n$ sono variabili aleatorie **indipendenti** con varianza finita, allora la varianza della loro somma è uguale alla somma delle loro varianze: $$Var\left(\sum_{i=1}^{n} X_i\right) = \sum_{i=1}^{n} Var(X_i)$$
    - **Giustificazione:** La varianza della somma è data da: $$Var\left(\sum_{i=1}^{n} X_i\right) = \sum_{i=1}^{n} Var(X_i) + \sum_{i \neq j} Cov(X_i, X_j)$$ Se le variabili sono indipendenti, la loro covarianza è zero ($Cov(X_i, X_j) = 0$ per $i \neq j$). Pertanto, il secondo termine della somma si annulla, lasciando solo la somma delle varianze.
    ![[Pasted image 20250416144254.png]]
    - **Attenzione:** Questa proprietà vale solo sotto l'ipotesi di indipendenza (o più generalmente, se le variabili hanno correlazione nulla).

### Esempio: Varianza di una Variabile Aleatoria Binomiale

- Sia $X \sim Bin(n, p)$ una variabile aleatoria binomiale con parametri $n$ (numero di prove) e $p$ (probabilità di successo).
- Una variabile binomiale può essere vista come la somma di $n$ variabili aleatorie di Bernoulli indipendenti e identicamente distribuite $I_i \sim Bern(p)$ per $i = 1, ..., n$: $$X = \sum_{i=1}^{n} I_i$$
- **Calcolo del valore atteso (ripasso):** $$E[X] = E\left[\sum_{i=1}^{n} I_i\right] = \sum_{i=1}^{n} E[I_i]$$ Il valore atteso di una variabile di Bernoulli è $E[I_i] = 0 \cdot (1-p) + 1 \cdot p = p$. Quindi, $E[X] = \sum_{i=1}^{n} p = np$.
- **Calcolo della varianza:** Poiché le variabili di Bernoulli sono indipendenti, possiamo applicare la proprietà della varianza della somma: $$Var(X) = Var\left(\sum_{i=1}^{n} I_i\right) = \sum_{i=1}^{n} Var(I_i)$$ La varianza di una variabile di Bernoulli è: $$Var(I_i) = E[I_i^2] - (E[I_i])^2$$ Poiché per una Bernoulli $I_i^2 = I_i$ (0²=0, 1²=1), si ha $E[I_i^2] = E[I_i] = p$. Quindi, $Var(I_i) = p - p^2 = p(1 - p)$. Pertanto, la varianza della binomiale è: $$Var(X) = \sum_{i=1}^{n} p(1 - p) = n p(1 - p)$$
![[Pasted image 20250416144332.png]]
    - **Commento:** Questo esempio mostra come l'utilizzo della proprietà della va rianza della somma per variabili indipendenti semplifica il calcolo della varianza di una binomiale rispetto all'applicazione diretta della definizione alla sua densità discreta.

### Trasformazioni di Variabili Aleatorie

- **Problema generale:** Data una variabile aleatoria $X$ con una certa legge, si vuole studiare la legge di una nuova variabile aleatoria $Y = g(X)$, dove $g$ è una funzione.
    
- **Caso discreto:** Se $X$ è una variabile aleatoria discreta, allora anche $Y = g(X)$ sarà discreta. La probabilità che $Y$ assuma un valore $y$ è data dalla somma delle probabilità di tutti i valori $x$ nel dominio di $X$ tali che $g(x) = y$: $$P(Y = y) = P(g(X) = y) = \sum_{x: g(x) = y} P(X = x) = \sum_{x: g(x) = y} f_X(x)$$ dove $f_X(x)$ è la densità discreta di $X$.
    ![[Pasted image 20250416151204.png]]
- **Caso continuo:** Se $X$ è una variabile aleatoria assolutamente continua, la situazione per $Y = g(X)$ è più complessa. In generale, $Y$ potrebbe essere continua, discreta o mista (come visto in un esercizio del compito, ad esempio per il massimo di variabili aleatorie).
    
    - **Esempio menzionato:** $X^2$, se $X$ è assolutamente continua, è anch'essa assolutamente continua.
    - In generale, non si possono dare condizioni semplici su $g$ per determinare la natura di $Y$'s. Si analizza caso per caso.
    - La **legge immagine** di $Y$, caratterizzata dalla sua funzione di ripartizione o dalle probabilità di eventi, è data da: $$P(Y \in A) = P(g(X) \in A) = P(X \in g^{-1}(A))$$ dove $g^{-1}(A) = {x: g(x) \in A}$ è la controimmagine dell'insieme $A$ sotto la funzione $g$. Se $X$ è assolutamente continua con densità $f_X(x)$, allora: $$P(Y \in A) = \int_{g^{-1}(A)} f_X(x) dx = \int_{\set{x: g(x) \in A}} f_X(x) dx$$ Questo integrale, a seconda della funzione $g$ e dell'insieme $A$, può essere più o meno facile da calcolare. Per calcolare la funzione di ripartizione di $Y$, si prende $A = (-\infty, y]$.
    - **Estensione a variabili vettoriali:** Questi concetti si estendono al caso in cui $X$ è un vettore aleatorio in $\mathbb{R}^d$ e $g: \mathbb{R}^d \rightarrow \mathbb{R}^k$. L'unica differenza è che l'integrale è ora su un sottoinsieme di $\mathbb{R}^d$.
	![[Pasted image 20250416151309.png]]
### Somma di Variabili Aleatorie

- La somma di variabili aleatorie è un caso particolare di trasformazione di variabili aleatorie, molto frequente in probabilità e statistica.
    
- Si considera il caso in cui $X = (X_1, ..., X_d)$ è un vettore aleatorio e $g(X) = \sum_{i=1}^{d} X_i$ è la somma delle sue componenti.
    
- **Caso discreto (d=2):** Siano $X_1$ e $X_2$ due variabili aleatorie discrete e $Y = X_1 + X_2$. La densità discreta di $Y$ in un punto $y$ è data da: $$P(Y = y) = \sum_{(x_1, x_2): x_1 + x_2 = y} P(X_1 = x_1, X_2 = x_2)$$ Questa somma doppia può essere riscritta come una somma singola, fissando $x_1$ e determinando $x_2 = y - x_1$: $$P(Y = y) = \sum_{x_1} P(X_1 = x_1, X_2 = y - x_1)$$
    
- **Caso di variabili indipendenti:** Se $X_1$ e $X_2$ sono indipendenti, allora $P(X_1 = x_1, X_2 = x_2) = P(X_1 = x_1) P(X_2 = x_2)$. In questo caso, la densità discreta della somma diventa: $$P(Y = y) = \sum_{x_1} P(X_1 = x_1) P(X_2 = y - x_1)$$ Questa operazione è nota come **convoluzione discreta** delle densità di probabilità di $X_1$ e $X_2$.
![[Pasted image 20250416151648.png]]
    
- **Esercizio proposto:** Considerare due variabili aleatorie di Poisson $X_1 \sim Poisson(\lambda_1)$ e $X_2 \sim Poisson(\lambda_2)$, indipendenti. Determinare la legge di densità della loro somma $Y = X_1 + X_2$.
    
    - **Commento:** Per risolvere questo esercizio, si applicherebbe la formula della convoluzione discreta, tenendo conto dei possibili valori che $X_1$ e $X_2$ possono assumere (interi non negativi) e dei valori che $Y$ può assumere. La somma sarebbe effettuata sugli $x_1 \geq 0$ tali che $y - x_1 \geq 0$.

____



# Trasformazioni di Variabili Aleatorie

## Caso Discreto: La Somma di Variabili Aleatorie Discrete

- Consideriamo due variabili aleatorie discrete, $x_1$ e $x_2$.
- La probabilità che la loro somma $y = x_1 + x_2$ assuma un certo valore $y$ è data dalla somma delle probabilità congiunte di tutte le coppie $(x_1, x_2)$ tali che $x_1 + x_2 = y$.
- Matematicamente, questo si esprime come: $P(y = x_1 + x_2) = \sum_{x_1} P(x_1, y - x_1)$
- La sommatoria è intesa per tutte le $x_1$ nel supporto di $x_1$ tali che $y - x_1$ sia nel supporto di $x_2$. Se $y - x_1$ non appartiene al supporto di $x_2$, quel termine semplicemente non compare nella somma.
- **Esempio:** Il professore suggerisce di considerare il caso della distribuzione di Poisson per farsi un'idea.

## Caso Continuo: La Somma di Variabili Aleatorie Assolutamente Continue

- Consideriamo due variabili aleatorie assolutamente continue, $x_1$ e $x_2$, con densità congiunta $f_X(x_1, x_2)$.
- La variabile aleatoria $y = x_1 + x_2$ è anch'essa assolutamente continua.
- La densità di probabilità di $y$, $f_y(y)$, può essere ottenuta calcolando prima la funzione di ripartizione $F_y(y) = P(x_1 + x_2 \le y)$ e poi derivandola rispetto a $y$.
- La densità $f_y(y)$ ha la seguente struttura nel caso di due variabili: $f_y(y) = \int_{-\infty}^{+\infty} f(x_1, y - x_1) dx_1$
- **Osservazione:** Questa è l'analogo continuo della somma che si ha nel caso discreto.
- **Esercizio (suggerito):** Il professore suggerisce di provare a dimostrare questa formula come esercizio, mostrando come la funzione di ripartizione si può scrivere come un integrale e come si arriva a questa espressione per la densità.
- **Caso di Indipendenza:** Se $x_1$ e $x_2$ sono indipendenti, la loro densità congiunta si fattorizza $f(x_1, x_2) = f_{x_1}(x_1) f_{x_2}(x_2)$, e la densità della somma diventa la **convoluzione** delle densità marginali: $f_y(y) = \int_{-\infty}^{+\infty} f_{x_1}(x_1) f_{x_2}(y - x_1) dx_1 = (f_{x_1} * f_{x_2})(y)$ A volte la convoluzione è indicata con l'asterisco.
- **Osservazione:** L'integrazione non è sempre su tutto $\mathbb{R}$. Ad esempio, se si considerano due variabili aleatorie esponenziali negative, la densità può essere zero per certi valori.
- **Complicazione per più variabili:** Per la somma di tre variabili aleatorie, si otterrebbe un integrale doppio, per quattro un integrale triplo, e così via, rendendo i calcoli spesso complessi.
![[Pasted image 20250423145725.png]]
# Matrice di Varianze e Covarianze
![[Pasted image 20250423150041.png]]
## Definizione

- Consideriamo un vettore di variabili aleatorie $Y = \begin{pmatrix} Y_1 \\ Y_2 \\ \vdots \\ Y_d \end{pmatrix}$.
- **Valore Atteso di un Vettore/Matrice:** Il valore atteso di un vettore o di una matrice di variabili aleatorie è definito componente per componente. Il valore atteso di un vettore $Y$ è il vettore delle medie dei suoi componenti: $$ E[Y] = E \begin{pmatrix} Y_1 \\ Y_2 \\ \vdots \\ Y_D \end{pmatrix} = \begin{pmatrix} E[Y_1] \\ E[Y_2] \\ \vdots \\ E[Y_D] \end{pmatrix} $$ Questo è ben definito se il valore atteso di ogni componente è finito.
- **Linearità del Valore Atteso (con Matrici Deterministiche):** Se A, B, C sono matrici deterministiche compatibili e Y è un vettore/matrice aleatorio, allora $E[A Y B + C] = A E[Y] B + C$, mantenendo l'ordine delle moltiplicazioni perché le matrici non commutano.

**2.2 Definizione della Matrice di Varianze e Covarianze** Per un vettore aleatorio $Y$ a valori in $\mathbb{R}^D$, la **matrice di varianze e covarianze** (a volte indicata come matrice di covarianza o matrice di varianza) è una matrice $D \times D$ dove l'elemento alla posizione $(i, j)$ è la covarianza tra $Y_i$ e $Y_j$. $$ \text{Cov}(Y)_{ij} = \text{Cov}(Y_i, Y_j) = E[(Y_i - E[Y_i])(Y_j - E[Y_j])] $$ Sulla diagonale principale di questa matrice si trovano le varianze delle singole componenti, poiché $\text{Cov}(Y_i, Y_i) = \text{Var}(Y_i)$.
![[Pasted image 20250423150831.png]]
**2.3 Proprietà della Matrice di Varianze e Covarianze** Si assume che tutte le componenti di $Y$ abbiano varianza finita, altrimenti non si potrebbe definire la matrice.

**2.3.1 Osservazione 1:** La matrice di varianze e covarianze può essere scritta in forma compatta usando il valore atteso di un prodotto esterno: $$ \text{Cov}(Y) = E[(Y - E[Y])(Y - E[Y])^T] $$ Questo perché la componente $(i, j)$ della matrice $(Y - E[Y])(Y - E[Y])^T$ è $(Y_i - E[Y_i])(Y_j - E[Y_j])$, e il valore atteso di questa quantità è per definizione la covarianza $\text{Cov}(Y_i, Y_j)$.
![[Pasted image 20250423151106.png]]
**2.3.2 Proprietà di Traslazione:** Se $B$ è un vettore deterministico, aggiungere $B$ al vettore aleatorio $Y$ non cambia la sua matrice di varianze e covarianze: $$ \text{Cov}(Y + B) = \text{Cov}(Y) $$ Questo deriva dalla definizione: $(Y+B) - E[Y+B] = Y+B - (E[Y] + B) = Y - E[Y]$, quindi la formula $E[(Y - E[Y])(Y - E[Y])^T]$ rimane invariata.

**2.3.3 Proprietà Fondamentali (Proposizione)** Per un vettore aleatorio $Y$ in $\mathbb{R}^D$ con varianze finite:

1. **Simmetria e Semidefinita Positività:** La matrice $\text{Cov}(Y)$ è simmetrica e semidefinita positiva. Si usa la notazione $\text{Cov}(Y) \ge 0$ per indicare la semidefinita positività. La simmetria è dovuta alla simmetria della covarianza: $\text{Cov}(Y_i, Y_j) = \text{Cov}(Y_j, Y_i)$.
2. **Trasformazione Lineare:** Se $A$ è una matrice deterministica $M \times D$ e $B$ è un vettore deterministico in $\mathbb{R}^M$, allora la matrice di varianze e covarianze del vettore aleatorio $AY + B$ (che sta in $\mathbb{R}^M$) è data da: $$ \text{Cov}(AY + B) = A \text{Cov}(Y) A^T $$
![[Pasted image 20250423151137.png]]
**2.3.4 Dimostrazione della Proprietà 2 (Trasformazione Lineare) (Dimostrazione)**

- **Passaggio 1:** Usando la proprietà di traslazione (Osservazione 1): $$ \text{Cov}(AY + B) = \text{Cov}(AY) $$
- **Passaggio 2:** Usando la definizione $\text{Cov}(Z) = E[(Z - E[Z])(Z - E[Z])^T]$ con $Z = AY$: $$ \text{Cov}(AY) = E[(AY - E[AY])(AY - E[AY])^T] $$
- **Passaggio 3:** Usando la linearità del valore atteso $E[AY] = AE[Y]$ e la proprietà del trasposto $(MN)^T = N^T M^T$: $$ E[(AY - AE[Y])(AY - AE[Y])^T] = E[A(Y - E[Y]) (A(Y - E[Y]))^T] $$ $$ = E[A(Y - E[Y]) (Y - E[Y])^T A^T] $$
 ![[Pasted image 20250423151925.png]]
- **Passaggio 4:** Usando la linearità del valore atteso per estrarre le matrici deterministiche $A$ e $A^T$: $$ A E[(Y - E[Y])(Y - E[Y])^T] A^T $$
- **Risultato:** Riconoscendo che $E[(Y - E[Y])(Y - E[Y])^T]$ è per definizione $\text{Cov}(Y)$: $$ \text{Cov}(AY + B) = A \text{Cov}(Y) A^T $$ Questo conclude la dimostrazione della Proprietà 2.

**2.3.5 Dimostrazione della Proprietà 1 (Semidefinita Positiva) (Dimostrazione)**

- **Passaggio 1:** Ricordare la definizione di matrice semidefinita positiva $S$: $x^T S x \ge 0$ per ogni vettore $x$. Vogliamo dimostrare che $x^T \text{Cov}(Y) x \ge 0$ per ogni $x \in \mathbb{R}^D$.
- **Passaggio 2:** Si consideri un vettore deterministico $x \in \mathbb{R}^D$ e si definisca una matrice $A = x^T$. Questa è una matrice $1 \times D$.
- **Passaggio 3:** Si consideri la variabile aleatoria scalare $Z = A Y = x^T Y$. Questa è una combinazione lineare delle componenti di $Y$, $Z = \sum_{i=1}^D x_i Y_i$.
- **Passaggio 4:** Si applichi la Proprietà 2 (dimostrata al punto 2.3.4) al vettore aleatorio $AY$ con $A=x^T$. Il risultato è una matrice $1 \times 1$ (uno scalare): $$ \text{Cov}(x^T Y) = x^T \text{Cov}(Y) (x^T)^T = x^T \text{Cov}(Y) x $$
- **Passaggio 5:** Riconoscere che $\text{Cov}(x^T Y)$ è semplicemente la varianza della variabile aleatoria scalare $Z = x^T Y$: $$ \text{Cov}(x^T Y) = \text{Var}(x^T Y) $$
- **Passaggio 6:** La varianza di qualunque variabile aleatoria scalare (se esiste finita) è sempre non negativa: $$ \text{Var}(x^T Y) \ge 0 $$
- **Risultato:** Combinando i passaggi 4, 5 e 6: $$ x^T \text{Cov}(Y) x = \text{Var}(x^T Y) \ge 0 $$ Questo vale per ogni vettore $x \in \mathbb{R}^D$, dimostrando che $\text{Cov}(Y)$ è una matrice semidefinita positiva. La simmetria è già stata osservata.
![[Pasted image 20250423152454.png]]
**Definizione:** Una matrice $S$ è semidefinita positiva ($S \ge 0$) se $x^T S x \ge 0$ per ogni vettore $x$. È definita positiva ($S > 0$) se $x^T S x > 0$ per ogni $x \ne 0$. Per le matrici simmetriche, questo equivale ad avere tutti gli autovalori reali non negativi (semidefinita positiva) o strettamente positivi (definita positiva).

**3. Funzioni Caratteristiche**

Le funzioni caratteristiche sono un altro strumento per caratterizzare la legge di una variabile aleatoria o di un vettore.

**3.1 Introduzione e Motivazione** Abbiamo già visto diversi oggetti (funzione di ripartizione, densità, densità discreta) che caratterizzano la legge di una variabile aleatoria. Tuttavia, come suggerito dall'esempio della somma, calcolare la densità della somma può essere computazionalmente oneroso (grandi integrali/somme di convoluzione). Avere più strumenti equivalenti per caratterizzare le distribuzioni e semplificare i calcoli è utile. Le funzioni caratteristiche sono uno di questi strumenti.

**3.2 Definizione per Variabile Aleatoria Reale** Per definire le funzioni caratteristiche, si usa l'esponenziale complesso. È utile ricordare che per un numero reale $x$, $e^{ix} = \cos(x) + i \sin(x)$.

**Definizione:** Data una variabile aleatoria reale $X$, la sua **funzione caratteristica** $\phi_X(t)$ è definita per ogni $t \in \mathbb{R}$ come il valore atteso dell'esponenziale complesso $e^{itX}$: $$ \phi_X(t) = E[e^{itX}] $$ $e^{itX}$ è una variabile aleatoria a valori complessi, che si può scrivere come $\cos(tX) + i \sin(tX)$. Il valore atteso di una variabile aleatoria complessa si definisce come il valore atteso della parte reale più $i$ volte il valore atteso della parte immaginaria: $$ E[e^{itX}] = E[\cos(tX) + i \sin(tX)] = E[\cos(tX)] + i E[\sin(tX)] $$ La funzione caratteristica $\phi_X(t)$ è **sempre ben definita** per ogni $t \in \mathbb{R}$. Questo perché le funzioni coseno e seno sono limitate (il modulo di $e^{itX}$ è $| \cos(tX) + i \sin(tX) | = \sqrt{\cos^2(tX) + \sin^2(tX)} = 1$). Pertanto, $\cos(tX)$ e $\sin(tX)$ sono variabili aleatorie limitate, e il loro valore atteso esiste sempre ed è finito. La funzione caratteristica è una funzione da $\mathbb{R}$ a $\mathbb{C}$.
![[Pasted image 20250423153200.png]]
**3.3 Definizione per Vettore Aleatorio** La definizione si estende ai vettori aleatori.

**Definizione:** Dato un vettore aleatorio $X$ a valori in $\mathbb{R}^D$, la sua **funzione caratteristica** $\phi_X(t)$ è definita per ogni vettore $t \in \mathbb{R}^D$ come il valore atteso dell'esponenziale complesso $e^{i t \cdot X}$, dove $t \cdot X$ è il prodotto scalare tra $t$ e $X$: $$ \phi_X(t) = E[e^{i t \cdot X}] $$ Il prodotto scalare $t \cdot X$ è $\sum_{j=1}^D T_j X_j$. Quindi $e^{i t \cdot X}$ è $e^{i \sum T_j X_j}$, che è l'esponenziale di uno scalare, e la definizione è l'analoga multidimensionale del caso unidimensionale. La funzione caratteristica di un vettore è una funzione da $\mathbb{R}^D$ a $\mathbb{C}$. È anch'essa sempre ben definita.
![[Pasted image 20250423153253.png]]
**3.4 Calcolo (Somme/Integrali)** Calcolare la funzione caratteristica richiede il calcolo di un valore atteso.

- Se $X$ è una variabile aleatoria discreta con densità (PMF) $P(x)$, la funzione caratteristica è una somma: $$ \phi_X(t) = \sum_x e^{itx} P(x) $$ La somma è su tutti i valori $x$ nel dominio di $X$.
- Se $X$ è una variabile aleatoria assolutamente continua con densità (PDF) $f(x)$, la funzione caratteristica è un integrale su $\mathbb{R}$: $$ \phi_X(t) = \int_{-\infty}^{\infty} e^{itx} f(x) dx $$
- Se $X$ è un vettore aleatorio assolutamente continuo in $\mathbb{R}^D$ con densità $f(x)$, la funzione caratteristica è un integrale su $\mathbb{R}^D$: $$ \phi_X(t) = \int_{\mathbb{R}^D} e^{i t \cdot x} f(x) dx = \int_{\mathbb{R}^D} e^{i \sum_{j=1}^D T_j X_j} f(x_1, \dots, x_D) dx_1 \dots dx_D $$ A seconda dei casi, calcolare questi integrali o somme può essere più o meno semplice.
![[Pasted image 20250423153356.png]]
**3.5 Teorema di Unicità (Teorema Fondamentale)** Questo teorema è fondamentale per l'utilità delle funzioni caratteristiche.

**Teorema di Unicità:** Due vettori aleatori $X_1$ e $X_2$ a valori in $\mathbb{R}^D$ hanno la stessa legge immagine (cioè, la stessa distribuzione di probabilità) **se e solo se** le loro funzioni caratteristiche sono uguali per ogni vettore $t \in \mathbb{R}^D$: $$ X_1 \sim X_2 \iff \phi_{X_1}(t) = \phi_{X_2}(t) \quad \forall t \in \mathbb{R}^D $$
![[Pasted image 20250423154409.png]]
Ciò significa che la funzione caratteristica caratterizza univocamente la distribuzione di probabilità. Se si riesce a dimostrare che due variabili o vettori aleatori hanno la stessa funzione caratteristica, si può concludere che hanno la stessa legge, anche se non si conosce esplicitamente la densità o la PMF. Un esempio d'uso è dimostrare che una variabile binomiale è una somma di variabili di Bernoulli calcolando e confrontando le loro funzioni caratteristiche.

**3.6 Esempi di Calcolo (Esercizi)** Vengono mostrati esempi di calcolo della funzione caratteristica per distribuzioni discrete.

**Esempio 1: Variabile di Bernoulli(p)** Sia $X \sim \text{Bernoulli}(p)$. La variabile assume valore 1 con probabilità $p$ e 0 con probabilità $1-p$.

- **Passaggio 1:** Applicare la definizione di funzione caratteristica $\phi_X(t) = E[e^{itX}]$.
- **Passaggio 2:** Calcolare il valore atteso usando la definizione per variabili discrete (somma sui valori possibili): $$ E[e^{itX}] = e^{it \cdot 1} P(X=1) + e^{it \cdot 0} P(X=0) $$
- **Passaggio 3:** Sostituire le probabilità e semplificare: $$ = e^{it} \cdot p + e^0 \cdot (1-p) $$ $$ = p e^{it} + 1 \cdot (1-p) $$ $$ = p e^{it} + 1 - p $$
- **Risultato:** La funzione caratteristica di una Bernoulli(p) è: $$ \phi_X(t) = 1 - p + p e^{it} $$
![[Pasted image 20250423154700.png]]
**Esempio 2: Variabile di Poisson($\lambda$)** Sia $X \sim \text{Poisson}(\lambda)$. La variabile assume valori $k \in {0, 1, 2, \dots }$ con probabilità $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$.

- **Passaggio 1:** Applicare la definizione di funzione caratteristica $\phi_X(t) = E[e^{itX}]$.
- **Passaggio 2:** Calcolare il valore atteso usando la definizione per variabili discrete (somma sui valori possibili $k$): $$ E[e^{itX}] = \sum_{k=0}^\infty e^{itk} P(X=k) $$
- **Passaggio 3:** Sostituire la PMF della Poisson: $$ = \sum_{k=0}^\infty e^{itk} \frac{\lambda^k e^{-\lambda}}{k!} $$
- **Passaggio 4:** Estrarre il termine $e^{-\lambda}$ dalla somma: $$ = e^{-\lambda} \sum_{k=0}^\infty e^{itk} \frac{\lambda^k}{k!} $$
- **Passaggio 5:** Riscrivere il termine generale della somma come $\frac{(e^{it} \lambda)^k}{k!}$: $$ = e^{-\lambda} \sum_{k=0}^\infty \frac{(e^{it} \lambda)^k}{k!} $$
- **Passaggio 6:** Riconoscere la serie di Taylor dell'esponenziale per argomento complesso $z = e^{it} \lambda$. La serie $\sum_{k=0}^\infty \frac{z^k}{k!}$ converge a $e^z$ anche per $z \in \mathbb{C}$. $$ = e^{-\lambda} e^{e^{it} \lambda} $$
- **Passaggio 7:** Semplificare l'espressione: $$ = e^{\lambda e^{it}} e^{-\lambda} = e^{\lambda e^{it} - \lambda} = e^{\lambda(e^{it} - 1)} $$
- **Risultato:** La funzione caratteristica di una Poisson($\lambda$) è: $$ \phi_X(t) = e^{\lambda(e^{it} - 1)} $$ Questo risultato è importante perché, grazie al teorema di unicità, se una variabile aleatoria ha questa funzione caratteristica, allora la sua legge deve essere di Poisson con parametro $\lambda$.
![[Pasted image 20250423154738.png]]

#### References



2025-04-23 16:09

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[probabilità]]  [[sbobine]]

## prob-lez18


**Appunti sulla Funzione Caratteristica**

**Definizione (implicita nel testo)** La funzione caratteristica di un vettore aleatorio $x$ (calcolata in un vettore $t$) è definita come il valore atteso di $e^{i t^T x}$.

**Proprietà Importanti della Funzione Caratteristica**

Vengono presentate e dimostrate tre proprietà fondamentali della funzione caratteristica.

**Proposizione 1: Valore nell'Origine** La prima proprietà importante è che la funzione caratteristica del vettore $x$ calcolata nel vettore nullo ($t=0$) è uguale a 1. In simboli: $\phi_x(\mathbf{0}) = 1$

- **Dimostrazione della Proposizione 1** Calcolando la funzione caratteristica nel punto $\mathbf{0}$, si ha: $\phi_x(\mathbf{0}) = E[e^{i \mathbf{0}^T x}]$ Il prodotto scalare $\mathbf{0}^T x$ è uguale a $0$. Quindi l'espressione diventa: $E[e^{i \cdot 0}] = E[e^0]$ $e^0 = 1$, quindi il valore atteso è: $E = 1$ Questa proprietà è considerata ovvia data la definizione.

**Proposizione 2: Continuità Uniforme** La seconda proprietà importante afferma che la funzione caratteristica, che mappa $t$ a $\phi_x(t)$, è uniformemente continua su tutto $\mathbb{R}^D$, dove $D$ è la dimensione del vettore $x$.

- **Dimostrazione della Proposizione 2** Per dimostrare la continuità (e poi l'uniforme continuità), si considera la differenza tra la funzione caratteristica valutata in due punti vicini, $t+h$ e $t$, dove $t$ e $h$ sono vettori. Si vuole analizzare $\phi_x(t+h) - \phi_x(t)$. Per definizione: $\phi_x(t+h) = E[e^{i (t+h)^T x}]$ $\phi_x(t) = E[e^{i t^T x}]$ La differenza è: $\phi_x(t+h) - \phi_x(t) = E[e^{i (t+h)^T x}] - E[e^{i t^T x}]$ Usando la linearità del valore atteso: $\phi_x(t+h) - \phi_x(t) = E[e^{i (t+h)^T x} - e^{i t^T x}]$ Espandendo l'esponente: $(t+h)^T x = t^T x + h^T x$ Quindi: $e^{i (t^T x + h^T x)} - e^{i t^T x} = e^{i t^T x} e^{i h^T x} - e^{i t^T x}$ Si può raccogliere il termine comune $e^{i t^T x}$: $e^{i t^T x} (e^{i h^T x} - 1)$ Quindi la differenza diventa: $\phi_x(t+h) - \phi_x(t) = E[e^{i t^T x} (e^{i h^T x} - 1)]$ Si applica la disuguaglianza del modulo per il valore atteso, $|!|E[Y]|!| \le E[|!|Y|!|]$: $|!|\phi_x(t+h) - \phi_x(t)|!| \le E[|!|e^{i t^T x} (e^{i h^T x} - 1)|!|]$ Usando la proprietà del modulo di un prodotto, $|!|ab|!| = |!|a|!| |!|b|!|$: $E[|!|e^{i t^T x}|!| |!|e^{i h^T x} - 1|!|]$ Il modulo di $e^{i \theta}$ è sempre 1 per qualsiasi $\theta \in \mathbb{R}$. Quindi $|!|e^{i t^T x}|!| = 1$. La disuguaglianza diventa: $|!|\phi_x(t+h) - \phi_x(t)|!| \le E[|!|e^{i h^T x} - 1|!|]$ Il termine a destra, $E[|!|e^{i h^T x} - 1|!|]$, dipende solo da $h$, non da $t$. Il modulo di un numero complesso della forma $e^{i\alpha} - 1$ ha modulo sempre minore o uguale a 2 (poiché $e^{i\alpha}$ è sulla circonferenza unitaria e -1 è il punto opposto). La variabile aleatoria $|!|e^{i h^T x} - 1|!|$ è quindi dominata dalla costante 2. Si applica il teorema della convergenza dominata per valutare il limite di questo termine a destra per $h \to \mathbf{0}$. $\lim_{h \to \mathbf{0}} E[|!|e^{i h^T x} - 1|!|] = E[\lim_{h \to \mathbf{0}} |!|e^{i h^T x} - 1|!|]$ Il limite interno è: $\lim_{h \to \mathbf{0}} e^{i h^T x}$ Poiché $h \to \mathbf{0}$, $h^T x \to 0$. Quindi, $e^{i h^T x} \to e^{i \cdot 0} = e^0 = 1$. Il limite del modulo è: $\lim_{h \to \mathbf{0}} |!|e^{i h^T x} - 1|!| = |!|1 - 1|!| = |!|0|!| = 0$. Quindi, per il teorema della convergenza dominata, il valore atteso di questo limite è 0. Questo implica che: $\lim_{h \to \mathbf{0}} |!|\phi_x(t+h) - \phi_x(t)|!| = 0$ Ciò dimostra che la funzione caratteristica è continua. Poiché il membro di destra della disuguaglianza, $E[|!|e^{i h^T x} - 1|!|]$, dipende solo da $h$ e non da $t$, la convergenza a 0 per $h \to \mathbf{0}$ è uniforme rispetto a $t$. Questo significa che la continuità è uniforme su tutto $\mathbb{R}^D$. Il concetto di uniforme continuità implica che la scelta di $\delta$ per una data $\epsilon$ non dipende dal punto $t$ considerato.

**Proposizione 3: Funzione Caratteristica di una Trasformazione Lineare** La terza proprietà, considerata molto utile nelle applicazioni, descrive la funzione caratteristica di un vettore trasformato linearmente. Fissata una matrice $A$ e un vettore $B$, compatibili per l'operazione $A x + B$, la funzione caratteristica del nuovo vettore $y = A x + B$ calcolata in $t$ può essere espressa come: $\phi_{Ax+B}(t) = E[e^{i t^T (Ax+B)}]$

- **Dimostrazione della Proposizione 3** Si parte dalla definizione: $\phi_{Ax+B}(t) = E[e^{i t^T (Ax+B)}]$ Si distribuisce il prodotto scalare nell'esponente: $t^T (Ax+B) = t^T (Ax) + t^T B$ Quindi l'espressione diventa: $E[e^{i (t^T (Ax) + t^T B)}]$ Usando la proprietà $e^{a+b} = e^a e^b$: $E[e^{i t^T (Ax)} e^{i t^T B}]$ Il termine $e^{i t^T B}$ è una costante rispetto all'operatore di valore atteso, poiché $B$ e $t$ sono vettori deterministici (non aleatori). Si può quindi portare fuori dal valore atteso per linearità: $e^{i t^T B} E[e^{i t^T (Ax)}]$ Ora si riscrive il prodotto scalare $t^T (Ax)$. Usando la proprietà $(AB)^T = B^T A^T$, si ha che $(Ax)^T t = x^T A^T t$. Poiché il prodotto scalare è commutativo, $t^T (Ax) = (Ax)^T t = x^T A^T t$. In alternativa, si può vedere $t^T A$ come $(A^T t)^T$. Quindi $t^T (Ax) = (A^T t)^T x$. Sostituendo nell'espressione: $e^{i t^T B} E[e^{i (A^T t)^T x}]$ Osservando la forma del termine del valore atteso, $E[e^{i v^T x}]$, dove $v = A^T t$, si riconosce la definizione della funzione caratteristica di $x$ valutata nel vettore $A^T t$: $E[e^{i (A^T t)^T x}] = \phi_x(A^T t)$ Quindi la funzione caratteristica di $A x + B$ è: $\phi_{Ax+B}(t) = e^{i t^T B} \phi_x(A^T t)$ Questa formula è utile per calcolare la funzione caratteristica di trasformazioni affini (scala-posizione) di vettori aleatori, anche in più dimensioni.
![[Pasted image 20250423162343.png]]
![[Pasted image 20250423162353.png]]
![[Pasted image 20250423162406.png]]
**Caratterizzazione dell'Indipendenza tramite Funzioni Caratteristiche**

Un altro risultato importante lega l'indipendenza delle componenti di un vettore aleatorio alla sua funzione caratteristica.

**Proposizione 4: Caratterizzazione dell'Indipendenza** Sia $x = (X_1, X_2, \dots, X_D)$ un vettore aleatorio con componenti $X_j$. Le componenti $X_1, X_2, \dots, X_D$ sono stocasticamente indipendenti se e solo se la funzione caratteristica del vettore $x$ calcolata in un vettore $t = (t_1, t_2, \dots, t_D)$ è uguale al prodotto delle funzioni caratteristiche marginali di ciascuna componente, calcolata nel proprio $t_j$. Questo deve valere per ogni vettore $t \in \mathbb{R}^D$. In simboli: $X_1, \dots, X_D$ sono indipendenti $\iff \phi_x(t_1, \dots, t_D) = \prod_{j=1}^D \phi_{X_j}(t_j)$ per ogni $(t_1, \dots, t_D) \in \mathbb{R}^D$.

- **Importante Distinzione** È cruciale non confondere questo enunciato con l'espressione della funzione caratteristica della somma di variabili aleatorie. La funzione caratteristica della somma $S = X_1 + \dots + X_D$ (che è una variabile scalare, non un vettore) calcolata in uno scalare $t$ è data da $$\phi_S(t) = E[e^{i t S}] = E[e^{i t (X_1 + \dots + X_D)}] = E[e^{i t X_1 + \dots + i t X_D}] = E[\prod_{j=1}^D e^{i t X_j}]$$. Se gli $X_j$ sono indipendenti, allora $E[\prod Y_j] = \prod E[Y_j]$, quindi $\phi_S(t) = \prod_{j=1}^D E[e^{i t X_j}] = \prod_{j=1}^D \phi_{X_j}(t)$. Nel caso della somma, il prodotto è delle funzioni caratteristiche marginali **tutte valutate nello stesso scalare** $t$. Nella caratterizzazione dell'indipendenza delle componenti di un vettore, la funzione caratteristica **vettoriale** è valutata nel vettore $(t_1, \dots, t_D)$ e il prodotto è delle funzioni caratteristiche marginali, ciascuna valutata **nella sua componente** $t_j$. L'espressione della funzione caratteristica di un vettore $x$ calcolata sulla "diagonale" con componenti uguali a uno scalare $t$, cioè $\phi_x(t, t, \dots, t)$, è sempre esprimibile come $\phi_{X_1+\dots+X_D}(t)$. Questa è una conseguenza della definizione, sempre vera indipendentemente dall'indipendenza.
![[Pasted image 20250424090406.png]]
- **Dimostrazione della Proposizione 4** La dimostrazione procede in due direzioni.
    
    **Direzione 1: Indipendenza $\implies$ Fattorizzazione** Supponiamo che le componenti $X_1, \dots, X_D$ siano indipendenti. Si vuole dimostrare che $$\phi_x(t) = \prod_{j=1}^D \phi_{X_j}(t_j)$$. Si parte dalla definizione della funzione caratteristica del vettore $x$ calcolata in $t=(t_1, \dots, t_D)$: $$\phi_x(t_1, \dots, t_D) = E[e^{i t^T x}]$$ Si scrive esplicitamente il prodotto scalare $t^T x$: $$t^T x = \sum_{j=1}^D t_j X_j$$ Quindi: $\phi_x(t_1, \dots, t_D) = E[e^{i \sum_{j=1}^D t_j X_j}]$ Usando la proprietà $e^{\sum a_j} = \prod e^{a_j}$: $\phi_x(t_1, \dots, t_D) = E[\prod_{j=1}^D e^{i t_j X_j}]$ Poiché le variabili aleatorie $X_1, \dots, X_D$ sono indipendenti, le variabili $Y_j = e^{i t_j X_j}$ (che sono funzioni misurabili delle $X_j$) sono anch'esse indipendenti. Per variabili indipendenti, il valore atteso del prodotto è uguale al prodotto dei valori attesi: $$E[\prod_{j=1}^D e^{i t_j X_j}] = \prod_{j=1}^D E[e^{i t_j X_j}]$$ Per definizione, $E[e^{i t_j X_j}]$ è la funzione caratteristica della variabile scalare $X_j$ calcolata nello scalare $t_j$: $$E[e^{i t_j X_j}] = \phi_{X_j}(t_j)$$ Quindi, si ottiene la fattorizzazione: $$\phi_x(t_1, \dots, t_D) = \prod_{j=1}^D \phi_{X_j}(t_j)$$ Questa direzione è considerata più semplice.
    ![[Pasted image 20250424090453.png]]
    **Direzione 2: Fattorizzazione $\implies$ Indipendenza** Supponiamo che la funzione caratteristica del vettore $x$ fattorizzi, cioè $\phi_x(t_1, \dots, t_D) = \prod_{j=1}^D \phi_{X_j}(t_j)$ per ogni $t \in \mathbb{R}^D$. Si vuole dimostrare che le componenti $X_j$ sono indipendenti. Si parte dalla supposta uguaglianza: $\phi_x(t_1, \dots, t_D) = \prod_{j=1}^D \phi_{X_j}(t_j)$ Il membro di sinistra, $\phi_x(t)$, è per definizione $E[e^{i t^T x}]$. Questo è l'integrale di $e^{i t^T x}$ rispetto alla legge (misura di probabilità immagine) del vettore $x$, che chiamiamo $P_x$: $\phi_x(t) = \int_{\mathbb{R}^D} e^{i t^T y} dP_x(y)$ Il membro di destra è il prodotto di $D$ integrali. La funzione caratteristica marginale $\phi_{X_j}(t_j)$ è per definizione $E[e^{i t_j X_j}]$. Questo è l'integrale di $e^{i t_j y_j}$ rispetto alla legge (misura di probabilità immagine) della variabile $X_j$, che chiamiamo $P_{X_j}$: $\phi_{X_j}(t_j) = \int_{\mathbb{R}} e^{i t_j y_j} dP_{X_j}(y_j)$ Quindi la fattorizzazione si scrive come: $\int_{\mathbb{R}^D} e^{i t^T y} dP_x(y) = \prod_{j=1}^D \int_{\mathbb{R}} e^{i t_j y_j} dP_{X_j}(y_j)$ Il prodotto di integrali, per il teorema di Fubini (utilizzato nella direzione "inversa"), è uguale all'integrale del prodotto rispetto alla misura prodotto. La misura prodotto delle leggi marginali $P_{X_1}, \dots, P_{X_D}$ è la misura $P_{X_1} \otimes \dots \otimes P_{X_D}$ sullo spazio prodotto $\mathbb{R}^D$. L'integrale del prodotto $\prod_{j=1}^D e^{i t_j y_j} = e^{i t_1 y_1} \dots e^{i t_D y_D} = e^{i \sum t_j y_j} = e^{i t^T y}$ rispetto alla misura prodotto $P_{X_1} \otimes \dots \otimes P_{X_D}$ è: $\prod_{j=1}^D \int_{\mathbb{R}} e^{i t_j y_j} dP_{X_j}(y_j) = \int_{\mathbb{R}^D} e^{i t^T y} d(P_{X_1} \otimes \dots \otimes P_{X_D})(y)$ (Il professore illustra questo passaggio mostrando il caso $D=2$ in dettaglio, spiegando come l'integrale doppio rispetto alla misura prodotto si scomponga nel prodotto degli integrali singoli, e come il termine $e^{i t^T y}$ sia un prodotto di funzioni ciascuna dipendente solo da una componente $y_j$, permettendo l'applicazione di Fubini in entrambe le direzioni). Quindi, dalla supposta fattorizzazione, si ottiene l'uguaglianza di due funzioni caratteristiche: $\int_{\mathbb{R}^D} e^{i t^T y} dP_x(y) = \int_{\mathbb{R}^D} e^{i t^T y} d(P_{X_1} \otimes \dots \otimes P_{X_D})(y)$ Questa uguaglianza vale per ogni $t \in \mathbb{R}^D$. Per il teorema di unicità per le funzioni caratteristiche, se due funzioni caratteristiche coincidono, allora le corrispondenti misure di probabilità (leggi) devono coincidere. Pertanto, la legge del vettore aleatorio $x$, $P_x$, deve essere uguale alla misura prodotto delle leggi marginali: $P_x = P_{X_1} \otimes \dots \otimes P_{X_D}$ Questa uguaglianza delle leggi è una delle definizioni (o caratterizzazioni equivalenti) dell'indipendenza delle componenti di un vettore aleatorio. Quindi, se la funzione caratteristica fattorizza, le componenti del vettore $x$ sono indipendenti. La dimostrazione di questa direzione ha utilizzato tre risultati importanti: il teorema di Fubini, il teorema di unicità delle funzioni caratteristiche e una caratterizzazione dell'indipendenza tramite la legge prodotto.
    ![[Pasted image 20250424090625.png]]
    ![[Pasted image 20250424090803.png]]
___


### La Funzione Caratteristica e i Momenti

Questa sezione tratta un argomento molto importante: la relazione tra la funzione caratteristica e i momenti di una variabile aleatoria. La funzione caratteristica è uno strumento fondamentale che verrà ripreso più volte, specialmente in relazione ai concetti di convergenza e al teorema del limite centrale.

#### Esistenza della Funzione Caratteristica vs. Esistenza dei Momenti

La funzione caratteristica di una variabile aleatoria può essere scritta senza bisogno di alcuna ipotesi sui momenti. Questo significa che si può definire la funzione caratteristica anche per variabili aleatorie che non possiedono il primo momento (valor atteso), il secondo momento, o nessun momento.

- **Esempio:** La distribuzione di Cauchy è un esempio di variabile aleatoria assolutamente continua che non ha momenti. Nonostante ciò, la sua funzione caratteristica esiste e può essere scritta in forma chiusa, risultando semplice. Quindi, una funzione caratteristica ben definita non implica necessariamente che la variabile aleatoria associata abbia momenti.

#### Teorema Fondamentale: Momenti Implicano Derivabilità della Funzione Caratteristica e Sviluppo di Taylor

Consideriamo una variabile aleatoria reale (dimensione 1) X con funzione caratteristica $\phi_X(t)$ (indicata come f nelle fonti).

**Condizione:** Supponiamo che esista il momento assoluto di $X$ di ordine $n + \delta$, ovvero che $E[|X|^{n+\delta}] < \infty$, dove $n$ è un intero non negativo ($n \ge 0$) e $\delta$ è un valore compreso tra 0 e 1, inclusi gli estremi ($0 \le \delta \le 1$).

**Conclusioni:** Se la condizione precedente è soddisfatta, allora valgono i seguenti punti:

1. **Derivabilità e Legame con i Momenti (per $n \ge 1$)**:
    
    - La funzione caratteristica $\phi_X(t)$ ammette derivata di ordine $k$ per ogni $k$ compreso tra 1 e $n$ ($1 \le k \le n$).
    - La derivata $k$-esima della funzione caratteristica valutata nell'origine ($t=0$) è legata al momento $k$-esimo di $X$ dalla seguente formula: $$ \phi_X^{(k)}(0) = i^k E[X^k] $$ Questo ha senso solo se $n \ge 1$, in modo che $k$ possa assumere valori maggiori o uguali a 1.
2. **Sviluppo di Taylor nell'Origine**:
    
    - La funzione caratteristica può essere sviluppata in serie di Taylor attorno all'origine ($t=0$) fino all'ordine $n$.
    - Lo sviluppo di Taylor usuale è: $$ \phi_X(t) = \sum_{k=0}^{n} \frac{\phi_X^{(k)}(0)}{k!} t^k + R_n(t) $$ Utilizzando la relazione tra le derivate nell'origine e i momenti ($ \phi_X^{(k)}(0) = i^k E[X^k]$ per $k \ge 1$), e ricordando che $\phi_X(0) = E[e^{i \cdot 0 \cdot X}] = E = 1$ (momento di ordine 0), lo sviluppo diventa: $$ \phi_X(t) = 1 + \sum_{k=1}^{n} \frac{i^k E[X^k]}{k!} t^k + R_n(t) $$
    - **Comportamento del Resto ($R_n(t)$)**:
        - Se esiste almeno il momento $n$-esimo ($E[|X|^n] < \infty$, corrispondente al caso $\delta = 0$), allora il resto è un "o piccolo" di $t^n$: $$ R_n(t) = o(t^n) $$ Questo significa che $\lim_{t \to 0} \frac{R_n(t)}{t^n} = 0$.
        - Se esiste un momento di ordine leggermente superiore a $n$, ovvero $E[|X|^{n+\delta}] < \infty$ con $\delta > 0$, allora si ha un controllo più preciso sul resto. Il resto è un "O grande" di $t^{n+\delta}$: $$ R_n(t) = O(t^{n+\delta}) $$ Questo significa che esiste una costante $C$ tale che $|R_n(t)| \le C |t|^{n+\delta}$ per t vicino a 0. La costante $C$ dipende solo da $n$ e $\delta$ e da $E[|X|^{n+\delta}]$. Nello specifico, la dipendenza da $X$ è interamente contenuta nel fattore $E[|X|^{n+\delta}]$.

In sintesi, il teorema dice che **l'esistenza del momento $n$-esimo implica la derivabilità $n$ volte della funzione caratteristica e garantisce che il resto dello sviluppo di Taylor sia $o(t^n)$**. Se esiste un momento di ordine $n+\delta$ con $\delta > 0$, si ottiene un controllo ancora più preciso sul resto ($O(t^{n+\delta})$).

#### Idea della Dimostrazione (Relazione Derivata-Momento)

L'idea alla base della relazione tra le derivate della funzione caratteristica nell'origine e i momenti non è così strana.

Consideriamo la derivata prima della funzione caratteristica: $$ \phi_X'(t) = \frac{d}{dt} E[e^{itX}] $$ Supponendo di poter scambiare l'operazione di derivata con l'operazione di valore atteso (questo è uno dei passaggi che richiederebbe una giustificazione formale, ma è l'idea intuitiva): $$ \phi_X'(t) = E\left[\frac{d}{dt} e^{itX}\right] = E[iX e^{itX}] $$ Ora, valutiamo questa derivata nell'origine ($t=0$): $$ \phi_X'(0) = E[iX e^{i \cdot 0 \cdot X}] = E[iX e^0] = E[iX] = i E[X] $$ Quindi, abbiamo $\phi_X'(0) = i E[X]$, il che implica $E[X] = \frac{\phi_X'(0)}{i}$. Questa è esattamente la formula $\phi_X^{(k)}(0) = i^k E[X^k]$ per $k=1$.

L'idea è che, iterando questo processo di derivazione e scambio con il valore atteso, si ottengono le formule per le derivate di ordine superiore, legandole ai momenti di ordine superiore. Se si ha "quel tantino in più" (l'esistenza del momento dell'ordine appropriato) si può giustificare lo scambio e procedere. Una volta ottenute queste formule per le derivate nell'origine, si applica semplicemente lo sviluppo di Taylor per ottenere la tesi del teorema riguardante l'espansione.
![[Pasted image 20250424091005.png]]
#### Significato e Utilità del Teorema

Questo teorema è molto importante per diversi motivi.

1. **Legame tra Momenti e Funzione Caratteristica:** Esiste un legame diretto che, in certi casi, può essere comodo. Se si desidera calcolare un momento ma l'integrale per il valor atteso è complicato, mentre la funzione caratteristica è facile da calcolare e derivare (soprattutto da valutare in zero), si può usare la formula $E[X^k] = \frac{\phi_X^{(k)}(0)}{i^k}$ per ricavare il valore numerico del momento.
2. **Regolarità:** La funzione caratteristica è sempre uniformemente continua senza alcuna ipotesi sui momenti. L'aggiunta di ipotesi sui momenti "aggiunge regolarità" alla funzione caratteristica, permettendo di svilupparla in serie di Taylor nell'origine. Questo non è sorprendente se si conosce la parte 1 del teorema e il comportamento dei resti di Taylor. La cosa fondamentale è che il teorema fornisce gratuitamente il resto $o(t^n)$ se esiste il momento $n$-esimo. Se si ha qualcosa di più (momento $n+\delta$), si ottiene un controllo più preciso del resto ($O(t^{n+\delta})$). Questo controllo è importante perché si sa esattamente da cosa dipende la costante nell'O grande (dal momento $n+\delta$ e costanti universali che dipendono da $n$ e $\delta$).

L'aspetto essenziale da ricordare è che **l'esistenza dei momenti implica la derivabilità della funzione caratteristica e il comportamento $o(t^n)$ del resto di Taylor**.

#### Osservazione Importante: L'Implicazione è Unidirezionale (Generalmente)

È fondamentale notare che l'implicazione stabilita dal teorema è quella scritta: **se esiste il momento $n$-esimo, allora la funzione caratteristica è derivabile $n$ volte con continuità e la sua derivata $k$-esima nell'origine è legata al momento $k$-esimo dalla formula**.

In generale, **non è vero il contrario**. Cioè, il fatto che la funzione caratteristica sia derivabile $n$ volte con continuità **non implica necessariamente** che esista il momento $n$-esimo. Esistono risultati più fini che distinguono tra n pari e dispari, ma non verranno usati nel contesto presentato.

#### Legame tra Comportamento della Funzione Caratteristica vicino allo Zero e Code della Distribuzione

Un altro aspetto importante, collegato al teorema, è che il comportamento della funzione caratteristica nell'origine (per $t$ piccolo) è controllato dai momenti. Poiché i momenti dipendono da come si comporta la distribuzione per valori grandi della variabile aleatoria (le "code" della distribuzione), esiste un legame tra il comportamento della probabilità di $X$ molto grande e il comportamento della funzione caratteristica per $t$ piccolo.

Concetti simili, che mettono in relazione il comportamento di una funzione a infinito con il comportamento di una sua trasformata (duale) nell'origine, sono studiati nei cosiddetti **teoremi tauberiani**.

#### Altre Trasformate Integrali

La funzione caratteristica è una delle trasformate integrali usate per studiare le variabili aleatorie, strettamente imparentata con la Trasformata di Fourier in analisi. Esistono altre trasformate che possono essere utili in circostanze diverse:

- **Funzione Generatrice dei Momenti (MGF):** Presente negli appunti, ma non trattata nel corso.
- **Funzione Generatrice di Probabilità (PGF):** Si applica alle variabili aleatorie discrete.

#### Caso Multidimensionale

Il teorema discusso finora si riferisce a variabili aleatorie reali (dimensione 1). Per vettori aleatori, esiste un risultato analogo che coinvolge i momenti misti e uno sviluppo di Taylor multidimensionale. Questo si può fare e l'idea non è molto diversa dal caso unidimensionale, ma è formalmente più complessa a causa dei multi-indici. L'esistenza di questo risultato per vettori è menzionata, ma non discussa nel dettaglio.

### Esempi ed Esercizi

Le fonti presentano esempi di funzioni caratteristiche calcolate per specifiche distribuzioni, in particolare la costruzione della funzione caratteristica della Binomiale a partire da quella della Bernoulli, e un esercizio sul campionamento.

#### Funzione Caratteristica della Distribuzione di Bernoulli

Consideriamo una variabile aleatoria $Y \sim \text{Bernoulli}(p)$. La sua funzione di probabilità è $P(Y=1)=p$ e $P(Y=0)=1-p$. La funzione caratteristica è definita come $E[e^{itY}]$: $$ \phi_Y(t) = E[e^{itY}] = e^{it \cdot 0} P(Y=0) + e^{it \cdot 1} P(Y=1) $$ $$ \phi_Y(t) = e^0 (1-p) + e^{it} p $$ $$ \phi_Y(t) = 1 \cdot (1-p) + e^{it} p $$ $$ \phi_Y(t) = 1 - p + p e^{it} $$ Questa è la funzione caratteristica della distribuzione di Bernoulli(p).

#### Funzione Caratteristica della Distribuzione Binomiale

Consideriamo una variabile aleatoria $X \sim \text{Binomiale}(n, p)$. Una variabile Binomiale può essere vista come la somma di $n$ variabili aleatorie di Bernoulli indipendenti e identicamente distribuite (i.i.d.), $Y_1, Y_2, \dots, Y_n$, dove $Y_i \sim \text{Bernoulli}(p)$ per ogni $i$. Quindi, $X = \sum_{i=1}^n Y_i$.

Una proprietà fondamentale della funzione caratteristica è che la funzione caratteristica di una somma di variabili aleatorie _indipendenti_ è il _prodotto_ delle loro funzioni caratteristiche individuali. Se le variabili sono anche _identicamente distribuite_, il prodotto diventa una potenza.

Poiché $Y_i$ sono i.i.d. Bernoulli(p), la funzione caratteristica di $\sum_{i=1}^n Y_i$ è il prodotto delle funzioni caratteristiche di ciascun $Y_i$. Dato che sono identiche, è $(\phi_Y(t))^n$. $$ \phi_X(t) = \phi_{\sum_{i=1}^n Y_i}(t) = \prod_{i=1}^n \phi_{Y_i}(t) = (\phi_Y(t))^n $$ Sostituendo la funzione caratteristica della Bernoulli: $$ \phi_X(t) = (1 - p + p e^{it})^n $$ Questa è la funzione caratteristica della distribuzione Binomiale(n, p).

#### Esercizio: Funzione Caratteristica della Frequenza Empirica

Consideriamo di nuovo $n$ variabili aleatorie $Y_1, \dots, Y_n$ i.i.d. $\sim \text{Bernoulli}(p)$. Definiamo la variabile aleatoria $S_n$ come la media di queste variabili, che rappresenta la frequenza empirica di successo (o la probabilità empirica di ottenere 1): $$ S_n = \frac{1}{n} \sum_{i=1}^n Y_i $$

**Domanda 1: $S_n$ è una variabile aleatoria Binomiale?** **Risposta:** No. La variabile Binomiale(n, p) può assumere valori interi ${0, 1, 2, \dots, n}$. Invece, $S_n$ può assumere valori ${0/n, 1/n, 2/n, \dots, n/n = 1}$. Il dominio (supporto) dei valori possibili è diverso, quindi $S_n$ non è una Binomiale.

**Domanda 2: Qual è la funzione caratteristica di $S_n$?** Per calcolare la funzione caratteristica di $S_n = \frac{1}{n} \sum_{i=1}^n Y_i$, possiamo usare la proprietà che per costanti scalari $a, b$, la funzione caratteristica di $aX+b$ è $\phi_{aX+b}(t) = e^{itb} \phi_X(at)$. Nel nostro caso, $S_n$ è della forma $aX$ con $a = \frac{1}{n}$ e $X = \sum_{i=1}^n Y_i$. Non c'è il termine 'b'. Quindi, la funzione caratteristica di $S_n$ è: $$ \phi_{S_n}(t) = \phi_{\frac{1}{n} (\sum_{i=1}^n Y_i)}(t) $$ Applicando la proprietà di scaling con $a = \frac{1}{n}$ e $X = \sum_{i=1}^n Y_i$: $$ \phi_{S_n}(t) = \phi_{\sum_{i=1}^n Y_i}\left(\frac{t}{n}\right) $$ Sappiamo che $X = \sum_{i=1}^n Y_i$ dove $Y_i$ sono i.i.d. Bernoulli(p) è una variabile aleatoria Binomiale(n, p). Abbiamo calcolato la sua funzione caratteristica come $\phi_X(t) = (1 - p + p e^{it})^n$.

Sostituiamo questa espressione, valutandola in $\frac{t}{n}$ anziché $t$: $$ \phi_{S_n}(t) = \left(1 - p + p e^{i \frac{t}{n}}\right)^n $$ Questo completa il calcolo della funzione caratteristica della frequenza empirica $S_n$ per variabili di Bernoulli.

Spero questa rielaborazione dettagliata, basata esclusivamente sulle fonti fornite, ti sia utile per comprendere meglio i concetti e i passaggi presentati.
![[Pasted image 20250424091458.png]]
___
### Spiegazione sulle Funzioni Caratteristiche 

#### Introduzione al Contesto e agli Esempi

Il professore introduce il concetto di funzione caratteristica riprendendo degli esempi. Viene menzionato un Esempio 1 in cui delle variabili $X_j$ sono $\text{01}$. Questo può essere immaginato come il lancio di $n$ monetine, contando il numero di successi e dividendolo per $n$ per ottenere la frequenza di successi su $n$ lanci.

Si passa poi all'Esempio 2.

#### Esempio: Somma di Variabili Casuali Poisson Indipendenti

- **Definizione e Obiettivo** Si considerano variabili casuali $X_j$ indipendenti, ognuna con il proprio parametro $\lambda_j$. L'obiettivo è calcolare la funzione caratteristica della loro somma.
    
- **Calcolo della Funzione Caratteristica della Somma (Utilizzo della proprietà del prodotto)** La funzione caratteristica della somma di variabili casuali indipendenti è il prodotto delle funzioni caratteristiche individuali. Viene ricordata (anche se con una potenziale notazione intermedia un po' confusa nella trascrizione della fonte) la forma della funzione caratteristica per una singola variabile Poisson di parametro $\lambda$: $\phi_X(t) = e^{\lambda(e^{it}-1)}$. Questa forma è presentata nella fonte come $e^{-\lambda(1-e^{it})}$ o $e^{-\lambda} e^{\lambda e^{it}}$ o ancora $e^{-\lambda + \lambda e^{it}}$.
    
- **Formule Matematiche (come presentate nella fonte, con LaTeX)** Considerando la somma, si deve fare il prodotto delle funzioni caratteristiche: $\phi_{\sum X_j}(t) = \prod_j \phi_{X_j}(t)$. Usando la forma della funzione caratteristica per ogni $X_j \sim \text{Poisson}(\lambda_j)$, che è $\phi_{X_j}(t) = e^{\lambda_j(e^{it}-1)}$, il prodotto diventa: $$ \prod_j e^{\lambda_j(e^{it}-1)} $$ Per la proprietà dell'esponenziale, il prodotto di esponenziali è l'esponenziale della somma degli esponenti: $$ \exp\left(\sum_j \lambda_j(e^{it}-1)\right) $$ Si può raccogliere il termine $(e^{it}-1)$ dalla somma: $$ \exp\left(\left(\sum_j \lambda_j\right)(e^{it}-1)\right) $$ Il professore introduce $\lambda_{barra} = \sum_j \lambda_j$. La formula ottenuta è: $$ e^{\lambda_{barra}(e^{it}-1)} $$ (Nella fonte questa viene presentata come $e^{-\lambda_{barra}(1 - e^{it})}$, che è la stessa formula).
![[Pasted image 20250424091524.png]]
- **Conclusione per la Somma di Poisson** Riconoscendo la forma della funzione caratteristica ottenuta, si conclude che essa è esattamente la funzione caratteristica di una variabile casuale Poisson con parametro $\lambda_{barra} = \sum_j \lambda_j$. Pertanto, in una riga (utilizzando il teorema di unicità della funzione caratteristica), si è dimostrato che la somma di variabili casuali Poisson indipendenti è una variabile casuale Poisson il cui parametro è la somma dei parametri individuali.
    
- **Confronto con altre Distribuzioni (Uniforme)** Viene sottolineato che questa proprietà di "stabilità" (la somma rimane nella stessa famiglia di distribuzioni) non è generale per tutte le famiglie di distribuzioni. Ad esempio, la somma di due variabili casuali Uniformi tra 0 e 1 non è una variabile casuale Uniforme.
    
- **Rilevanza (Processo di Poisson)** Questa proprietà è una delle ragioni per cui la distribuzione di Poisson è importante. Ad esempio, nel processo di Poisson, se si contano eventi indipendenti in diverse zone, la somma totale degli eventi nelle zone, ipotizzando che gli eventi in ogni singola zona seguano una distribuzione di Poisson indipendente, sarà una variabile casuale Poisson.
    

#### Studio della Funzione Caratteristica della Variabile Casuale Normale (Gaussiana)

- **Importanza** La funzione caratteristica della Gaussiana è presentata come molto importante.
    
- **Definizione e Forma della Funzione Caratteristica per $N(\mu, \sigma^2)$** Si considera una variabile casuale reale $X$ con legge Normale (o Gaussiana) di media $\mu$ e varianza $\sigma^2$. La funzione caratteristica di $X$ calcolata in $t$, denotata $\phi_X(t)$, è data da: $$ \phi_X(t) = e^{i \mu t} e^{-\frac{\sigma^2 t^2}{2}} $$ Viene fatto notare che assomiglia un po' alla funzione di densità, ma non bisogna confondere le due, poiché $\sigma$ e $\mu$ compaiono in posizioni diverse.
    
- **Relazione tra Gaussiana Generale e Gaussiana Standard ($N(0,1)$)** Si osserva che una variabile casuale Gaussiana $X \sim N(\mu, \sigma^2)$ può essere scritta come $X = \mu + \sigma X_0$, dove $X_0$ è una Gaussiana standard, $X_0 \sim N(0, 1)$. Questo deriva dal fatto che la famiglia Gaussiana è una famiglia di scala e posizione. Questo può essere verificato scrivendo la densità e riconoscendo la densità di una Gaussiana standard dopo una trasformazione lineare di scala e posizione.
    
- **Utilizzo della Gaussiana Standard per la Dimostrazione** Grazie alla proprietà che la Gaussiana è una famiglia di scala e posizione, se si conosce la funzione caratteristica della Gaussiana standard $N(0, 1)$, è sufficiente per ottenere la funzione caratteristica di qualsiasi Gaussiana generale $N(\mu, \sigma^2)$. La funzione caratteristica di $aX+b$ è $\phi_{aX+b}(t) = e^{ibt} \phi_X(at)$. Applicando questa a $X = \mu + \sigma X_0$ (con $X_0 \sim N(0,1)$), si ha: $$ \phi_X(t) = \phi_{\mu + \sigma X_0}(t) = e^{i \mu t} \phi_{X_0}(\sigma t) $$ Se si dimostra che $\phi_{X_0}(t) = e^{-t^2/2}$ per la Gaussiana standard, allora: $$ \phi_X(t) = e^{i \mu t} \phi_{X_0}(\sigma t) = e^{i \mu t} e^{-(\sigma t)^2/2} = e^{i \mu t} e^{-\frac{\sigma^2 t^2}{2}} $$ Questo è esattamente quanto si voleva dimostrare. Quindi, basta dimostrare l'espressione per una Gaussiana standard. Questa è una strategia comune: dimostrare proprietà per i parametri più comodi quando si ha una famiglia di scala e posizione. Non è applicabile, ad esempio, alla Poisson o alla Binomiale perché i loro parametri non sono di scala o posizione.
  ![[Pasted image 20250424091726.png]]
    
- **(Dimostrazione) Derivazione della Funzione Caratteristica per la Gaussiana Standard $N(0,1)$**
    
    - **Obiettivo e Metodologia (ODE)** Questa dimostrazione non è formalmente richiesta, ma usa tecniche di analisi ed equazioni differenziali ordinarie (ODE).
        
    - **Impostazione della Derivata della Funzione Caratteristica (Forma Integrale)** La funzione caratteristica di una variabile casuale con densità $f(x)$ è data dall'integrale $\int_{-\infty}^{\infty} e^{itx} f(x) dx$. Per la Gaussiana standard $X_0$, la densità è $f_{X_0}(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}$ (la costante $\frac{1}{\sqrt{2\pi}}$ è menzionata come "mi ero dimenticato $\sqrt{2\pi}$" in, suggerendo che sia stata omessa durante la derivazione). La funzione caratteristica è $\phi_{X_0}(t) = \int_{-\infty}^{\infty} e^{itx} f_{X_0}(x) dx$. Questo è anche il valore atteso di $e^{itX_0}$ dove $X_0 \sim N(0,1)$. Si calcola la derivata prima rispetto a $t$: $$ \phi'_{X_0}(t) = \frac{d}{dt} \int_{-\infty}^{\infty} e^{itx} f_{X_0}(x) dx $$ Assumendo di poter portare la derivata dentro l'integrale (è una quasi dimostrazione): $$ \phi'_{X_0}(t) = \int_{-\infty}^{\infty} \frac{d}{dt}(e^{itx}) f_{X_0}(x) dx = \int_{-\infty}^{\infty} i x e^{itx} f_{X_0}(x) dx $$ Sostituendo la densità (e omettendo temporaneamente la costante $\frac{1}{\sqrt{2\pi}}$ come fatto nella fonte per i calcoli espliciti): $$ \phi'_{X_0}(t) = \int i x e^{itx} e^{-x^2/2} dx $$
        
    - **Passaggi Matematici (Integrazione per Parti)** Si riarrangia l'integrale per applicare l'integrazione per parti $\int u dv = uv - \int v du$. Il termine $ix e^{itx} e^{-x^2/2}$ viene visto come $i \cdot e^{itx} \cdot x e^{-x^2/2}$. Si sceglie $u = e^{itx}$ e $dv = x e^{-x^2/2} dx$. Allora $du = it e^{itx} dx$. Per trovare $v$, si integra $dv$. Si nota che $x e^{-x^2/2}$ è la derivata di $-e^{-x^2/2}$ rispetto a $x$: $\frac{d}{dx}(-e^{-x^2/2}) = -(-x)e^{-x^2/2} = x e^{-x^2/2}$. Quindi $v = -e^{-x^2/2}$.
        
        L'integrale diventa, includendo l'iniziale fattore $i$ (menzionato come "davanti a tutta la parente" in): $$ \phi'_{X_0}(t) = i \left[ (e^{itx})(-e^{-x^2/2}) \Big|_{-\infty}^{\infty} - \int_{-\infty}^{\infty} (-e^{-x^2/2}) (it e^{itx}) dx \right] $$
        
    - **Termine di Bordo (valutazione a $\pm \infty$)** Il primo termine (termine di bordo $uv \big|_{-\infty}^{\infty}$) si valuta agli estremi. Poiché $e^{-x^2/2} \to 0$ sia per $x \to -\infty$ che per $x \to +\infty$, il termine di bordo è 0.
        
    - **Termine Integrale Rimanente** Il termine integrale rimanente è: $$ - \int_{-\infty}^{\infty} (-e^{-x^2/2}) (it e^{itx}) dx $$ Si semplificano i segni e si porta fuori la costante $it$: $$ = it \int_{-\infty}^{\infty} e^{itx} e^{-x^2/2} dx $$ Questo integrale, includendo la costante $\frac{1}{\sqrt{2\pi}}$ omessa nei passaggi intermedi, sarebbe $\int e^{itx} f_{X_0}(x) \sqrt{2\pi} dx$. Il professore corregge l'omissione e dice che l'integrale rimanente è la funzione caratteristica stessa.
        
    - **Risultato dell'Integrazione per Parti e Semplificazione** Combinando il fattore $i$ iniziale con il risultato dell'integrazione per parti: $$ \phi'_{X_0}(t) = i \left[ 0 - \left( it \int_{-\infty}^{\infty} e^{itx} e^{-x^2/2} dx \right) \right] $$ (Attenzione alla gestione dei segni come descritta in, "meno la derivata del primo", "meno i tivo"). Seguendo la descrizione del risultato finale in: Il termine integrale dà "- t" moltiplicato per la funzione caratteristica. Con il fattore $i$ iniziale e il $it$ dall'integrazione per parti ($i \cdot it = i^2 t = -t$), si ottiene $-t$. Il professore riassume che il risultato è "- t volte f(x) con 0 calcolata in t", dove f(x) con 0 calcolata in t è $\phi_{X_0}(t)$.
        
    - **Derivazione dell'Equazione Differenziale Ordinaria (ODE)** Il calcolo della derivata porta alla seguente equazione differenziale ordinaria (ODE): $$ \phi'_{X_0}(t) = -t \phi_{X_0}(t) $$
        
    - **Condizione Iniziale** La condizione iniziale per questa ODE è data dal valore della funzione caratteristica in $t=0$: $$ \phi_{X_0}(0) = E[e^{i \cdot 0 \cdot X_0}] = E = 1 $$ La funzione caratteristica calcolata in zero vale sempre 1.
        
    - **Soluzione dell'ODE** Questa ODE $\frac{d\phi}{dt} = -t \phi$ è di facile soluzione (a variabili separabili): $$ \frac{d\phi}{\phi} = -t , dt $$ Integrando ambo i lati: $$ \int \frac{d\phi}{\phi} = \int -t , dt $$ $$ \ln|\phi(t)| = -\frac{t^2}{2} + C $$ $$ \phi(t) = A e^{-t^2/2} $$ Utilizzando la condizione iniziale $\phi_{X_0}(0) = 1$: $$ 1 = A e^{-0^2/2} = A e^0 = A $$ Quindi $A=1$. La soluzione unica di questa ODE è: $$ \phi_{X_0}(t) = e^{-t^2/2} $$
        
    - **Formula Finale per $N(0,1)$** La funzione caratteristica della Gaussiana standard $N(0,1)$ è $e^{-t^2/2}$.
        
    - **Nota sulla Non Richiesta della Dimostrazione** Questa dimostrazione non è richiesta all'esame, ma è un esempio di applicazione dell'analisi e delle ODE. È fondamentale, invece, conoscere la definizione e la forma della funzione caratteristica di una Gaussiana e non confonderla con la densità.
        
- **Ritorno alla Gaussiana Generale (Derivazione dalla Standard)** Come visto in precedenza, conoscendo $\phi_{X_0}(t) = e^{-t^2/2}$ e usando la relazione $X = \mu + \sigma X_0$ e la proprietà $\phi_{aX+b}(t) = e^{ibt} \phi_X(at)$, si ottiene la funzione caratteristica della Gaussiana generale $N(\mu, \sigma^2)$: $$ \phi_X(t) = e^{i \mu t} \phi_{X_0}(\sigma t) = e^{i \mu t} e^{-(\sigma t)^2/2} = e^{i \mu t} e^{-\frac{\sigma^2 t^2}{2}} $$
![[Pasted image 20250424091913.png]]

#### (Proposizione) Somma di Variabili Casuali Normali Indipendenti

- **Enunciato della Proposizione** Si prendono $n$ variabili casuali Gaussiane indipendenti, $X_j \sim N(\mu_j, \sigma_j^2)$, ognuna con la propria media $\mu_j$ e varianza $\sigma_j^2$. Allora la somma $S_n = \sum_{j=1}^n X_j$ è anch'essa una variabile casuale Normale.
    
- **Risultati "Banali" (Media e Varianza della Somma)** Una parte di questo enunciato è considerata banale. La media della somma di variabili casuali (anche non indipendenti) è la somma delle medie: $E[\sum X_j] = \sum E[X_j] = \sum \mu_j$. La varianza della somma di variabili casuali _indipendenti_ è la somma delle varianze: $\text{Var}(\sum X_j) = \sum \text{Var}(X_j) = \sum \sigma_j^2$. Quindi, se si sa già che la somma è una Gaussiana, i suoi parametri (media e varianza) devono necessariamente essere la somma delle medie e la somma delle varianze.
    
- **Risultato Non Banale (La Somma Resta Gaussiana)** La parte non banale della proposizione è che quando si sommano Gaussiane indipendenti, queste sono "stabili" nel senso che la loro somma rimane una Gaussiana.
    
- **Rarità di Questa Proprietà** Viene ribadito che questa stabilità non è una proprietà comune a molte distribuzioni; accade per la Poisson e per la Gaussiana, ma non per tantissimi altri casi.
    

#### (Dimostrazione) Dimostrazione della Somma di Normali Indipendenti (Uso Funzioni Caratteristiche)

- **Vantaggio dell'Uso delle Funzioni Caratteristiche (vs Convoluzione)** Questa dimostrazione, a differenza del calcolo con la formula di convoluzione (che sarebbe complicato, anche per sole due variabili), è molto facile usando le funzioni caratteristiche.
    
- **Impostazione: Funzione Caratteristica della Somma = Prodotto delle Funzioni Caratteristiche** Per variabili casuali indipendenti, la funzione caratteristica della somma è il prodotto delle funzioni caratteristiche individuali: $$ \phi_{S_n}(t) = \phi_{\sum_{j=1}^n X_j}(t) = \prod_{j=1}^n \phi_{X_j}(t) $$
    
- **Sostituzione delle Funzioni Caratteristiche Individuali** Si sostituisce la forma della funzione caratteristica per ogni Gaussiana $X_j \sim N(\mu_j, \sigma_j^2)$, che è $\phi_{X_j}(t) = e^{i \mu_j t} e^{-\frac{\sigma_j^2 t^2}{2}}$: $$ \phi_{S_n}(t) = \prod_{j=1}^n \left(e^{i \mu_j t} e^{-\frac{\sigma_j^2 t^2}{2}}\right) $$
    
- **Sviluppo del Prodotto (Somma degli Esponenti)** Usando la proprietà $\prod e^{a_j} = e^{\sum a_j}$: $$ \phi_{S_n}(t) = \exp\left(\sum_{j=1}^n \left(i \mu_j t - \frac{\sigma_j^2 t^2}{2}\right)\right) $$
    
- **Riorganizzazione dell'Esponente** Si riorganizza la somma degli esponenti: $$ \sum_{j=1}^n i \mu_j t - \sum_{j=1}^n \frac{\sigma_j^2 t^2}{2} $$ Si raccolgono i termini comuni: $$ i t \left(\sum_{j=1}^n \mu_j\right) - \frac{t^2}{2} \left(\sum_{j=1}^n \sigma_j^2\right) $$
    
- **Formula Finale della Funzione Caratteristica della Somma** La funzione caratteristica della somma è quindi: $$ \phi_{S_n}(t) = \exp\left( i t \left(\sum_{j=1}^n \mu_j\right) - \frac{t^2}{2} \left(\sum_{j=1}^n \sigma_j^2\right) \right) $$ $$ \phi_{S_n}(t) = e^{i \left(\sum_{j=1}^n \mu_j\right) t} e^{-\frac{\left(\sum_{j=1}^n \sigma_j^2\right) t^2}{2}} $$
    
- **Riconoscimento della Forma (Funzione Caratteristica di una Gaussiana)** Guardando questa espressione, si riconosce che ha esattamente la forma della funzione caratteristica di una variabile casuale Gaussiana $e^{i \mu t} e^{-\frac{\sigma^2 t^2}{2}}$.
    
- **Parametri della Gaussiana Risultante (Media e Varianza)** Confrontando la forma ottenuta con la forma generale della funzione caratteristica Gaussiana, si deduce che la somma $S_n$ è una Gaussiana con:
    
    - Media $\mu = \sum_{j=1}^n \mu_j$
    - Varianza $\sigma^2 = \sum_{j=1}^n \sigma_j^2$
- **Nota sull'Additività delle Varianze (non degli Scarti Quadratici Medi)** Viene evidenziato che si sommano le varianze ($\sigma^2$), non gli scarti quadratici medi ($\sigma$). Viene menzionato che alcuni software statistici, come R, usano la notazione $\mu, \sigma$ invece di $\mu, \sigma^2$, quindi bisogna fare attenzione.
    
![[Pasted image 20250424092006.png]]
#### Considerazioni Finali sull'Importanza delle Funzioni Caratteristiche

- **Applicazioni alle Somme** La funzione caratteristica è molto utile nello studio delle somme di variabili casuali indipendenti.
    
- **Teorema Centrale del Limite (Cenni)** Storicamente, la funzione caratteristica ha avuto grande importanza nello studio del Teorema Centrale del Limite (TCL), che riguarda anch'esso le somme di variabili casuali.
    

#### Comunicazioni Amministrative

- **Correzione Compiti e Valutazione** Il professore ha quasi finito di correggere i compiti e non li ha trovati terribili, nonostante una valutazione "estremamente larga". Soluzioni ed esiti verranno pubblicati.
    
- **Questione Visione Scritti** Si pone la questione della visione degli scritti.
    
- **Proposta di Modalità** In accordo con un collega (Di Primio), viene suggerita una modalità: fissare un giorno, presentare prima una "zoologia" degli errori canonici (per cui magari non è necessario venire individualmente) e poi fare una coda per coloro che hanno bisogno di chiedere informazioni specifiche.
    
- **Proposta di Data** Originariamente si pensava a giovedì prossimo (settimana successiva al 16/17, quindi 23/24), ma si ipotizza che molti non siano presenti.
    
- **Valutazione di Streaming vs Presenza (Sondaggio informale)** Viene considerato di fare tutto in streaming se la presenza è minima, poiché anche per i professori è più comodo non doversi spostare apposta (il professore è di Milano e sarebbe presente, Di Primio no). Viene quindi proposto un sondaggio informale tra i presenti.
    
- **Esito del Sondaggio** Viene chiesto chi sarebbe presente il 23 o 24. L'esito informale indica che non c'è "zero" presenza, sebbene sembra che pochi abbiano alzato la mano. Si decide comunque di procedere con un sondaggio formale a questo punto.

#### References
[[Appunti Prob - 18.pdf]]




2025-04-24 12:49

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[probabilità]]   [[sbobine]]

## prob-lez19


**Distribuzione Gaussiana Multivariata: Estensione e Proprietà**

In questa lezione si estende il concetto di variabile aleatoria Gaussiana, precedentemente visto per il caso unidimensionale, ai vettori aleatori (caso multivariato, con dimensione $n \ge 2$). Lo strumento principale utilizzato per questa estensione è la funzione caratteristica, data la sua definizione e le sue proprietà viste in precedenza.

**Richiamo sulla Gaussiana Unidimensionale**

Una variabile aleatoria scalare $X_J$ ha legge Gaussiana con media $\mu_J$ e varianza $\sigma_J^2$ (indicata con $X_J \sim \mathcal{N}(\mu_J, \sigma_J^2)$) se:

- È una variabile aleatoria **assolutamente continua** con densità di probabilità: $$f(x) = \frac{1}{\sqrt{2\pi\sigma_J^2}} e^{-\frac{(x-\mu_J)^2}{2\sigma_J^2}}$$. Questo vale se $\sigma_J^2 > 0$.
- Ha funzione caratteristica: $$\phi_{X_J}(t) = E[e^{itX_J}] = e^{i\mu_J t - \frac{1}{2}\sigma_J^2 t^2}$$.

È stato notato che la famiglia delle Gaussiane univariate è una famiglia di scala-posizione, ottenuta da una Gaussiana standard $\mathcal{N}(0, 1)$ tramite $X_J = \mu_J + \sigma_J Z_0$, dove $Z_0 \sim \mathcal{N}(0, 1)$. Inoltre, una combinazione lineare di Gaussiane indipendenti è ancora una Gaussiana.
![[Pasted image 20250424132124.png]]

**Il Caso Degenerato ($\sigma^2 = 0$)**

Si può adottare la convenzione che una variabile aleatoria $X$ con "legge Gaussiana degenere" con varianza zero ($\sigma^2=0$) e media $\mu$ sia semplicemente una **costante** uguale a $\mu$ con probabilità 1. Questa è una convenzione utile ma "pericolosa", perché una costante non è assolutamente continua e quindi non ha una densità nel senso usuale. Tuttavia, la sua **funzione caratteristica** è ben definita: $\phi_X(t) = E[e^{itX}] = E[e^{it\mu}] = e^{it\mu}$. La convenzione è giustificata dal fatto che la funzione caratteristica della Gaussiana unidimensionale $\phi_{X_J}(t) = e^{i\mu_J t - \frac{1}{2}\sigma_J^2 t^2}$, se calcolata per $\sigma_J^2 = 0$, produce esattamente $e^{i\mu_J t}$, che è la funzione caratteristica di una costante pari a $\mu_J$. Quindi, a livello di funzione caratteristica, il caso degenere è incluso naturalmente.
![[Pasted image 20250424132329.png]]
**Passaggio 1: Obiettivo - Estendere il Concetto a Vettori Aleatori ($n \ge 2$)**

L'obiettivo è estendere il concetto di variabile Gaussiana ai vettori aleatori n-dimensionali. Questo richiede l'uso delle funzioni caratteristiche per vettori aleatori.

**Passaggio 2: Un Primo Tentativo - Vettore di Componenti Gaussiane Indipendenti**

Si considera un vettore $\mathbf{z} = (Z_1, ..., Z_n)^T$, dove $Z_j$ sono variabili aleatorie indipendenti, ognuna distribuita come una Gaussiana con media 0 e varianza $\sigma_j^2$ ($Z_j \sim \mathcal{N}(0, \sigma_j^2)$). Si ammette che alcune $\sigma_j^2$ possano essere zero (caso degenere, $Z_j=0$ con probabilità 1). Questo vettore è chiamato un "vettore Gaussiano" in prima battuta. Questa definizione iniziale è limitata perché copre solo vettori le cui componenti sono indipendenti. Non è detto che un tale vettore sia assolutamente continuo, specialmente se alcune $\sigma_j^2 = 0$.

In questa formulazione iniziale, è fondamentale notare che si tratta sostanzialmente di una **semplice notazione** e non di una generalizzazione profonda del concetto. Questo approccio descrive un caso molto specifico: un vettore aleatorio le cui **componenti marginali sono tutte Gaussiane e sono indipendenti**. L'obiettivo più ambizioso è invece riuscire a definire vettori Gaussiani in cui le **componenti non siano necessariamente indipendenti**.

Per convenzione, anche in questo contesto multidimensionale e per componenti indipendenti, si ammette la possibilità che alcune delle varianze $\sigma_j^2$ possano essere **uguali a zero**. Come nel caso unidimensionale degenere, una variabile Gaussiana con varianza zero e media nulla ($Z_j \sim \mathcal{N}(0, 0)$) intende semplicemente una variabile aleatoria che è una **costante concentrata in zero** con probabilità 1.

Questo primo tentativo di definizione può essere espresso formalmente usando la notazione $\mathbf{z} \sim \mathcal{N}(\mathbf{0}, D)$, dove $\mathbf{0}$ è il vettore nullo (rappresentando le medie nulle) e $D$ è una **matrice diagonale**. Sulla diagonale di questa matrice $D$ si trovano le varianze individuali delle componenti $\sigma_j^2$, mentre tutti gli elementi fuori dalla diagonale sono zero.

La possibilità che alcune varianze $\sigma_j^2$ siano zero ha una conseguenza diretta e importante: **il vettore $\mathbf{z}$, anche se le sue componenti sono indipendenti, non è necessariamente assolutamente continuo**. Questo accade perché una variabile costante (con varianza zero) non è assolutamente continua e non possiede una densità di probabilità nel senso usuale.

Questo punto evidenzia una limitazione dell'approccio basato sulla densità di probabilità per definire il vettore Gaussiano generale. Se si desidera la massima generalità, includendo i casi degeneri con varianza zero, **non è conveniente partire dalla definizione tramite densità**, poiché questa non coprirebbe adeguatamente tali scenari. Questa limitazione giustifica l'adozione di un altro strumento matematico per la definizione generale del vettore Gaussiano multivariato: l'uso delle **funzioni caratteristiche**, le quali rimangono ben definite anche quando la varianza è zero. La funzione caratteristica per questo vettore di componenti indipendenti con media zero si calcola facilmente come il prodotto delle funzioni caratteristiche individuali e ha la forma $e^{- \frac{1}{2} \sum_{j=1}^n \sigma_j^2 t_j^2}$. Questa si può riscrivere usando la matrice diagonale $D$ come $e^{- \frac{1}{2} \mathbf{t}^T D \mathbf{t}}$.
![[Pasted image 20250424132543.png]]

**Passaggio 3: Funzione Caratteristica del Vettore di Componenti Indipendenti**

La funzione caratteristica del vettore $\mathbf{z}$ calcolata in un vettore $\mathbf{t} = (t_1, ..., t_n)^T \in \mathbb{R}^n$ è data da: $\phi_{\mathbf{z}}(\mathbf{t}) = E[e^{i\mathbf{t}^T\mathbf{z}}]$ Poiché $\mathbf{z}$ ha componenti indipendenti, l'aspettazione del prodotto si fattorizza nel prodotto delle aspettazioni: $E[e^{i\mathbf{t}^T\mathbf{z}}] = E[e^{i \sum_{j=1}^n t_j Z_j}] = E[\prod_{j=1}^n e^{i t_j Z_j}] = \prod_{j=1}^n E[e^{i t_j Z_j}]$ Ognuno dei fattori nell'ultimo prodotto è la funzione caratteristica della variabile unidimensionale $Z_j$, valutata in $t_j$. Dato che $Z_j \sim \mathcal{N}(0, \sigma_j^2)$, la sua funzione caratteristica è $e^{-\frac{1}{2}\sigma_j^2 t_j^2}$. Quindi, la funzione caratteristica di $\mathbf{z}$ è: $\phi_{\mathbf{z}}(\mathbf{t}) = \prod_{j=1}^n e^{-\frac{1}{2}\sigma_j^2 t_j^2} = e^{\sum_{j=1}^n -\frac{1}{2}\sigma_j^2 t_j^2} = e^{-\frac{1}{2} \sum_{j=1}^n \sigma_j^2 t_j^2}$ Questa somma nell'esponente può essere scritta in forma matriciale usando la matrice diagonale $\mathbf{D}$ con $\sigma_j^2$ sulla diagonale principale e zero altrove. $\sum_{j=1}^n \sigma_j^2 t_j^2 = \mathbf{t}^T \mathbf{D} \mathbf{t}$ Quindi, la funzione caratteristica è: $\phi_{\mathbf{z}}(\mathbf{t}) = e^{-\frac{1}{2} \mathbf{t}^T \mathbf{D} \mathbf{t}}$ Questa forma vale anche quando alcune $\sigma_j^2 = 0$.
![[Pasted image 20250424134126.png]]
**Passaggio 4: Matrici Simmetriche e Semidefinite Positive**

Una matrice $n \times n$ simmetrica e semidefinita positiva, indicata con $\boldsymbol{\Sigma}$, possiede la proprietà fondamentale di essere **diagonalizzabile** tramite una matrice ortonormale $\mathbf{O}$. Questo significa che esiste una matrice ortonormale $\mathbf{O}$ tale che: $\mathbf{O}^T \boldsymbol{\Sigma} \mathbf{O} = \mathbf{D}$ dove $\mathbf{D}$ è una matrice diagonale i cui elementi sulla diagonale sono gli **autovalori** di $\boldsymbol{\Sigma}$. Poiché $\boldsymbol{\Sigma}$ è semidefinita positiva, i suoi autovalori sono maggiori o uguali a zero ($\lambda_i \ge 0$). Si possono indicare questi autovalori come $\lambda_i$ (o $\sigma_i^2$ nel contesto delle varianze). Dalla relazione di diagonalizzazione si ottiene anche $\boldsymbol{\Sigma} = \mathbf{O} \mathbf{D} \mathbf{O}^T$, poiché $\mathbf{O}^T \mathbf{O} = \mathbf{O} \mathbf{O}^T = \mathbf{I}$ (matrice identità) per matrici ortonormali.
![[Pasted image 20250424134348.png]]
**Passaggio 5: Costruzione di un Vettore Gaussiano Generale**

Si definisce un vettore aleatorio $\mathbf{x}$ tramite una **trasformazione affine** di un vettore di Gaussiane indipendenti (come in Passaggio 2). Si prende un vettore $\boldsymbol{\mu} \in \mathbb{R}^n$, una matrice simmetrica e semidefinita positiva $\boldsymbol{\Sigma}$, si diagonalizza $\boldsymbol{\Sigma}$ per trovare $\mathbf{O}$ e $\mathbf{D}$ (con gli autovalori $\lambda_j$ sulla diagonale di $\mathbf{D}$). Si costruisce il vettore $\mathbf{z}$ con componenti $Z_j$ indipendenti, $Z_j \sim \mathcal{N}(0, \lambda_j)$. Si definisce $\mathbf{x}$ come: $\mathbf{x} = \boldsymbol{\mu} + \mathbf{O} \mathbf{z}$ Questo è un vettore aleatorio poiché $\mathbf{z}$ è aleatorio e $\boldsymbol{\mu}$ e $\mathbf{O}$ sono costanti.

**Passaggio 6: Proposizione - Funzione Caratteristica del Vettore Costruito**

**Proposizione:** La funzione caratteristica del vettore $\mathbf{x} = \boldsymbol{\mu} + \mathbf{O} \mathbf{z}$ (costruito come sopra, dove $\mathbf{z}$ ha componenti $Z_j \sim \mathcal{N}(0, \lambda_j)$ indipendenti e $\lambda_j$ sono gli autovalori di $\boldsymbol{\Sigma}$) è data da: $\phi_{\mathbf{x}}(\mathbf{t}) = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$
![[Pasted image 20250424134406.png]]
**Dimostrazione (della Proposizione)** Si usa la proprietà della funzione caratteristica per trasformazioni affini: per un vettore aleatorio $\mathbf{y}$ e costanti matriciali $\mathbf{A}$ e vettoriali $\mathbf{b}$, la funzione caratteristica di $\mathbf{A}\mathbf{y} + \mathbf{b}$ è $\phi_{\mathbf{A}\mathbf{y} + \mathbf{b}}(\mathbf{t}) = e^{i \mathbf{t}^T \mathbf{b}} \phi_{\mathbf{y}}(\mathbf{A}^T \mathbf{t})$. Nel nostro caso, $\mathbf{x} = \mathbf{O}\mathbf{z} + \boldsymbol{\mu}$. Quindi $\mathbf{A} = \mathbf{O}$ e $\mathbf{b} = \boldsymbol{\mu}$. $\phi_{\mathbf{x}}(\mathbf{t}) = \phi_{\mathbf{O}\mathbf{z} + \boldsymbol{\mu}}(\mathbf{t}) = e^{i \mathbf{t}^T \boldsymbol{\mu}} \phi_{\mathbf{z}}(\mathbf{O}^T \mathbf{t})$ Si sostituisce la forma della funzione caratteristica di $\mathbf{z}$ (da Passaggio 3), ricordando che le varianze sulla diagonale di $\mathbf{D}$ sono $\lambda_j$: $\phi_{\mathbf{z}}(\mathbf{t}) = e^{-\frac{1}{2} \mathbf{t}^T \mathbf{D} \mathbf{t}}$ Sostituendo l'argomento $\mathbf{O}^T \mathbf{t}$ al posto di $\mathbf{t}$: $\phi_{\mathbf{z}}(\mathbf{O}^T \mathbf{t}) = e^{-\frac{1}{2} (\mathbf{O}^T \mathbf{t})^T \mathbf{D} (\mathbf{O}^T \mathbf{t})}$ Si semplifica l'argomento dell'esponenziale: $(\mathbf{O}^T \mathbf{t})^T \mathbf{D} (\mathbf{O}^T \mathbf{t}) = \mathbf{t}^T (\mathbf{O}^T)^T \mathbf{D} \mathbf{O}^T \mathbf{t} = \mathbf{t}^T \mathbf{O} \mathbf{D} \mathbf{O}^T \mathbf{t}$ Richiamando la diagonalizzazione $\boldsymbol{\Sigma} = \mathbf{O} \mathbf{D} \mathbf{O}^T$, l'espressione diventa: $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}$ Quindi, la funzione caratteristica di $\mathbf{x}$ è: $\phi_{\mathbf{x}}(\mathbf{t}) = e^{i \mathbf{t}^T \boldsymbol{\mu}} e^{-\frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}} = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$ Questo completa la dimostrazione.
![[Pasted image 20250424144045.png]]
**Significato della Proposizione** Questo risultato dimostra che la funzione nella forma $e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$, per un vettore $\boldsymbol{\mu}$ e una matrice $\boldsymbol{\Sigma}$ simmetrica e semidefinita positiva, **è una funzione caratteristica valida**. Non tutte le funzioni lo sono, anche se soddisfano proprietà minimali.

**Passaggio 7: Definizione Formale di Vettore Gaussiano Multivariato**

**Definizione:** Un vettore aleatorio n-dimensionale $\mathbf{x}$ ha legge Gaussiana con parametri $\boldsymbol{\mu} \in \mathbb{R}^n$ (vettore) e $\boldsymbol{\Sigma}$ ($n \times n$ matrice simmetrica e semidefinita positiva) se la sua funzione caratteristica è: $\phi_{\mathbf{x}}(\mathbf{t}) = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$
![[Pasted image 20250424144130.png]]
**Ben Definizione della Legge Gaussiana Multivariata** Questa definizione è ben posta per due motivi:

1. **Teorema di Unicità:** La legge di una variabile (o vettore) aleatoria è **completamente caratterizzata** dalla sua funzione caratteristica. Se due vettori aleatori hanno la stessa funzione caratteristica, hanno la stessa legge.
2. **Esistenza:** La proposizione precedente (Passaggio 6) dimostra che **esiste almeno un vettore aleatorio** (quello costruito come $\boldsymbol{\mu} + \mathbf{O}\mathbf{z}$) che ha esattamente questa funzione caratteristica.

**Interpretazione della Costruzione** La definizione e la costruzione mostrano che un vettore aleatorio Gaussiano è ottenuto a partire da variabili aleatorie scalari indipendenti Gaussiane (con varianze pari agli autovalori di $\boldsymbol{\Sigma}$) tramite una opportuna **trasformazione lineare affine** (una "frullata opportunamente"). Questa trasformazione consiste in una **rotazione/scalatura** data dalla matrice $\mathbf{O}$ (e dalla scelta delle varianze di $\mathbf{z}$) e una **traslazione** data dal vettore $\boldsymbol{\mu}$. Come nel caso unidimensionale degenere, un vettore Gaussiano multivariato non è necessariamente assolutamente continuo; questo accade se la matrice $\boldsymbol{\Sigma}$ è singolare (ovvero, se alcuni autovalori sono zero).

**Passaggio 8: Proprietà Fondamentale - Chiusura Rispetto a Trasformazioni Affini**

**Proposizione:** Se $\mathbf{x}$ è un vettore Gaussiano $n$-dimensionale con parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$, e $\mathbf{A}$ è una matrice $m \times n$ e $\mathbf{b}$ è un vettore $m$-dimensionale, allora il vettore aleatorio $m$-dimensionale $\mathbf{y} = \mathbf{A}\mathbf{x} + \mathbf{b}$ è ancora un vettore Gaussiano. I suoi parametri sono:

- Vettore medio: $\boldsymbol{\mu}' = \mathbf{A}\boldsymbol{\mu} + \mathbf{b}$
- Matrice di covarianza: $\boldsymbol{\Sigma}' = \mathbf{A}\boldsymbol{\Sigma}\mathbf{A}^T$
![[Pasted image 20250424144616.png]]
Questa proprietà è molto generale, vale anche per matrici $\mathbf{A}$ rettangolari (non necessariamente $n \times n$) e include casi in cui il vettore risultante $\mathbf{y}$ è degenere (ad esempio, se $m < n$ o se $\mathbf{A}$ non ha rango pieno).

**Dimostrazione (della Proprietà di Chiusura)** Si calcola la funzione caratteristica di $\mathbf{y}$: $\phi_{\mathbf{y}}(\mathbf{t}) = E[e^{i \mathbf{t}^T \mathbf{y}}] = E[e^{i \mathbf{t}^T (\mathbf{A}\mathbf{x} + \mathbf{b})}] = E[e^{i \mathbf{t}^T \mathbf{b}} e^{i \mathbf{t}^T \mathbf{A} \mathbf{x}}]$ $= e^{i \mathbf{t}^T \mathbf{b}} E[e^{i (\mathbf{A}^T \mathbf{t})^T \mathbf{x}}]$ L'aspettazione è la funzione caratteristica di $\mathbf{x}$ valutata nel vettore $\mathbf{A}^T \mathbf{t}$. $\phi_{\mathbf{x}}(\boldsymbol{\tau}) = e^{i \boldsymbol{\tau}^T \boldsymbol{\mu} - \frac{1}{2} \boldsymbol{\tau}^T \boldsymbol{\Sigma} \boldsymbol{\tau}}$ con $\boldsymbol{\tau} = \mathbf{A}^T \mathbf{t}$. Quindi: $\phi_{\mathbf{y}}(\mathbf{t}) = e^{i \mathbf{t}^T \mathbf{b}} e^{i (\mathbf{A}^T \mathbf{t})^T \boldsymbol{\mu} - \frac{1}{2} (\mathbf{A}^T \mathbf{t})^T \boldsymbol{\Sigma} (\mathbf{A}^T \mathbf{t})}$ Si semplificano gli esponenti: $(\mathbf{A}^T \mathbf{t})^T \boldsymbol{\mu} = \mathbf{t}^T (\mathbf{A}^T)^T \boldsymbol{\mu} = \mathbf{t}^T \mathbf{A} \boldsymbol{\mu}$ $(\mathbf{A}^T \mathbf{t})^T \boldsymbol{\Sigma} (\mathbf{A}^T \mathbf{t}) = \mathbf{t}^T (\mathbf{A}^T)^T \boldsymbol{\Sigma} \mathbf{A}^T \mathbf{t} = \mathbf{t}^T \mathbf{A} \boldsymbol{\Sigma} \mathbf{A}^T \mathbf{t}$ Sostituendo nell'espressione per $\phi_{\mathbf{y}}(\mathbf{t})$: $\phi_{\mathbf{y}}(\mathbf{t}) = e^{i \mathbf{t}^T \mathbf{b}} e^{i \mathbf{t}^T \mathbf{A} \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T (\mathbf{A} \boldsymbol{\Sigma} \mathbf{A}^T) \mathbf{t}}$ Raccogliendo i termini nell'esponente: $\phi_{\mathbf{y}}(\mathbf{t}) = e^{i (\mathbf{t}^T \mathbf{b} + \mathbf{t}^T \mathbf{A} \boldsymbol{\mu}) - \frac{1}{2} \mathbf{t}^T (\mathbf{A} \boldsymbol{\Sigma} \mathbf{A}^T) \mathbf{t}}$ $\phi_{\mathbf{y}}(\mathbf{t}) = e^{i \mathbf{t}^T (\mathbf{A} \boldsymbol{\mu} + \mathbf{b}) - \frac{1}{2} \mathbf{t}^T (\mathbf{A} \boldsymbol{\Sigma} \mathbf{A}^T) \mathbf{t}}$ Questa funzione caratteristica è esattamente nella forma della definizione di Gaussiana multivariata (Passaggio 7), con nuovi parametri $\boldsymbol{\mu}' = \mathbf{A}\boldsymbol{\mu} + \mathbf{b}$ e $\boldsymbol{\Sigma}' = \mathbf{A}\boldsymbol{\Sigma}\mathbf{A}^T$. Questo dimostra che $\mathbf{y}$ è Gaussiana.
![[Pasted image 20250424144711.png]]
**Passaggio 9: Corollario - Combinazioni Lineari di Componenti**

**Corollario:** Se $\mathbf{x} = (X_1, ..., X_n)^T$ è un vettore Gaussiano $n$-dimensionale con parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$, allora ogni **combinazione lineare** delle sue componenti, $Y = \sum_{j=1}^n a_j X_j + b$, dove $a_j$ e $b$ sono costanti reali, è una variabile aleatoria 

**Gaussiana unidimensionale**.

Questo corollario è un caso particolare della proprietà di chiusura per trasformazioni affini (Passaggio 8). Si considera il caso in cui la matrice $\mathbf{A}$ è un vettore riga $1 \times n$, $\mathbf{a} = (a_1, ..., a_n)$, e $\mathbf{b}$ è uno scalare $b$ (visto come un vettore $1 \times 1$). Allora $\mathbf{y} = \mathbf{A}\mathbf{x} + \mathbf{b}$ diventa lo scalare $Y = \mathbf{a}\mathbf{x} + b = \sum a_j X_j + b$. I parametri della Gaussiana unidimensionale risultante sono:

- Media: $\mu_Y = \mathbf{a}\boldsymbol{\mu} + b = \sum_{j=1}^n a_j \mu_j + b$. Questo si ottiene da $\mathbf{A}\boldsymbol{\mu} + \mathbf{b}$ con $\mathbf{A}=\mathbf{a}$ (vettore riga) e $\mathbf{b}=b$ (scalare). Il prodotto $\mathbf{a}\boldsymbol{\mu}$ è un prodotto scalare.
- Varianza: $\sigma_Y^2 = \mathbf{a}\boldsymbol{\Sigma}\mathbf{a}^T$. Questo si ottiene da $\mathbf{A}\boldsymbol{\Sigma}\mathbf{A}^T$ con $\mathbf{A}=\mathbf{a}$. Il prodotto $\mathbf{a}\boldsymbol{\Sigma}\mathbf{a}^T$ è una forma quadratica. Se $\boldsymbol{\Sigma}$ ha elementi $\Sigma_{ij}$, questa forma quadratica è $\sum_{i=1}^n \sum_{j=1}^n a_i \Sigma_{ij} a_j$.

Questo generalizza il risultato sulla somma di Gaussiane indipendenti al caso di componenti non necessariamente indipendenti. Un caso particolare di combinazione lineare è l'estrazione di una singola componente $X_k$ (scegliendo $a_k=1$, $a_j=0$ per $j \neq k$, $b=0$). Questo implica che le **distribuzioni marginali** di un vettore Gaussiano sono **univariate Gaussiane**.
![[Pasted image 20250424150303.png]]
**Interpretazione dei Parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$**

La proprietà di chiusura rispetto a trasformazioni affini e il corollario sulle combinazioni lineari permettono di interpretare i parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$ nella definizione di Gaussiana multivariata:

- $\boldsymbol{\mu}$ è il **vettore delle medie** delle componenti del vettore Gaussiano. La sua $j$-esima componente $\mu_j$ è la media di $X_j$, $E[X_j] = \mu_j$. (Si può dimostrare questo prendendo $a_j=1$, $a_i=0$ per $i\neq j$, $b=0$ nel corollario, e la media è $\mu_j$).
- $\boldsymbol{\Sigma}$ è la **matrice di covarianza** del vettore Gaussiano. L'elemento $\Sigma_{ij}$ in posizione $(i, j)$ è la covarianza tra $X_i$ e $X_j$, $\text{Cov}(X_i, X_j) = E[(X_i - E[X_i])(X_j - E[X_j])] = E[(X_i - \mu_i)(X_j - \mu_j)]$. Gli elementi sulla diagonale sono le varianze $\Sigma_{ii} = \text{Var}(X_i) = \sigma_i^2$. (La formula per la varianza della combinazione lineare $\mathbf{a}\boldsymbol{\Sigma}\mathbf{a}^T$ coincide con la formula generale per la varianza di una combinazione lineare di variabili aleatorie in termini della loro matrice di covarianza).

**Passaggio 10: Importanza della Distribuzione Gaussiana Multivariata**

Il "mondo Gaussiano" è "particolarmente bello" e importante in molte applicazioni di statistica e modellistica. Le ragioni includono:

- La sua **ubiquità**, legata in parte al Teorema Centrale del Limite (che non è stato ancora affrontato in dettaglio in questo estratto, ma viene menzionato).
- La sua "niceness" e semplicità di molte proprietà, prima fra tutte la **chiusura rispetto a trasformazioni affini**. Se si parte da un vettore Gaussiano e lo si trasforma linearmente (scalatura, rotazione) e lo si trasla, il risultato è ancora Gaussiano. Anche proiezioni o combinazioni lineari delle componenti risultano Gaussiane.

Queste proprietà rendono i modelli basati sulla distribuzione Gaussiana multivariata gestibili e teoricamente trattabili in molti contesti.

___

### Ripasso e Parametri della Gaussiana Multivariata

Quando si definisce una **Gaussiana multivariata**, è necessario specificare **due parametri**. Il primo parametro è **$\mu$**, che è un **generico vettore**. Il secondo parametro è **$\Sigma$**, che è una **generica matrice**. Attenzione, questa matrice $\Sigma$ non è una matrice qualunque, ma deve essere una **matrice simmetrica e semidefinita positiva**. Il professore sottolinea che un tipico errore è dimenticare di controllare queste proprietà per la matrice $\Sigma$.

### Momenti di una Gaussiana Multivariata

Se un vettore aleatorio $X$ è una **Gaussiana di parametri $\mu$ e $\Sigma$**, il **momento** della componente $j$-esima non è altro che $\mu_j$. La **matrice di varianze e covarianze di $X$** è proprio $\Sigma$.

Come si può vedere questo? Partiamo da un lemma precedente (non fornito nella fonte completa, ma citato come base) secondo cui si può scrivere $X$ nella forma: $X = \mu + O Z$ dove $O$ è una matrice ortonormale (tale per cui $O^{-1} = O^T$) e $D$ è una matrice diagonale con gli autovalori di $\Sigma$, e vale la relazione $O^T \Sigma O = D$ (o equivalentemente $\Sigma = O D O^T$). $Z$ è un vettore Gaussiano "particolare". Questo vettore $Z$ è costruito in modo tale che le sue componenti $Z_j$ sono Gaussiane unidimensionali. In questo caso particolare, le componenti $Z_j$ hanno media 0 e varianza $\lambda_j^2$, dove $\lambda_j$ sono gli autovalori di $\Sigma$ (quindi gli elementi sulla diagonale di $D$). Pertanto, il vettore delle medie di $Z$, $E[Z]$, è un vettore di zeri.
![[Pasted image 20250424150439.png]]
#### Calcolo del Vettore delle Medie $E[X]$

Usando la proprietà di linearità del valore atteso per vettori: $E[X] = E[\mu + O Z]$ $E[X] = E[\mu] + E[O Z]$ Poiché $\mu$ è un vettore costante, $E[\mu] = \mu$. $E[O Z] = O E[Z]$ Abbiamo detto che $E[Z]$ è il vettore degli zeri. $O E[Z] = O \mathbf{0} = \mathbf{0}$ (moltiplicando un vettore di zeri per una matrice si ottiene il vettore di zeri). Quindi: $E[X] = \mu + \mathbf{0} = \mu$ Questo dimostra che il **vettore delle medie di $X$ è $\mu$**, e componente per componente $E[X_j] = \mu_j$.

#### Calcolo della Matrice di Varianze e Covarianze $\Sigma_X$

Usando le proprietà delle matrici di varianze e covarianze: La matrice di varianze e covarianze è invariante per traslazioni. Quindi $\Sigma_X = \Sigma_{X-\mu}$. $\Sigma_X = \Sigma_{O Z}$ Una proprietà della matrice di covarianza di una trasformazione lineare $AY$ è $A \Sigma_Y A^T$. In questo caso $A=O$ e $Y=Z$. $\Sigma_{O Z} = O \Sigma_Z O^T$ La matrice di varianze e covarianze di $Z$, $\Sigma_Z$, è una matrice diagonale perché le componenti $Z_j$ sono indipendenti (costruzione del lemma). Fuori dalla diagonale, la covarianza è zero perché l'indipendenza implica covarianza nulla. Sulla diagonale ci sono le varianze, che sono $\lambda_j^2$. Quindi $\Sigma_Z = D$, dove $D$ è la matrice diagonale degli autovalori. $\Sigma_X = O D O^T$ Sappiamo dalla costruzione che $\Sigma = O D O^T$. Quindi: $\Sigma_X = \Sigma$ Questo dimostra che la **matrice di varianze e covarianze di $X$ è $\Sigma$**. La matrice $\Sigma$ non è una qualunque matrice, ma deve essere simmetrica e semidefinita positiva.
![[Pasted image 20250424150601.png]]
### Proposizione 1: Sottovettori di una Gaussiana Multivariata

**Enunciato:** Se $X$ è un vettore $n$-dimensionale Gaussiano di parametri $\mu$ e $\Sigma$, allora **qualunque sottovettore di $X$ è Gaussiano**. Le distribuzioni marginali di una Gaussiana sono tutte Gaussiane. Questo è vero a vari gradi (quindi anche prendendo più componenti).

#### Parametri del Sottovettore

Se si prende un sottovettore di indici $I = {i_1, i_2, \dots, i_k}$: Il **vettore delle medie del sottovettore $X_I$**, $\mu_I$, è semplicemente il **sottovettore** di $\mu$ che contiene le componenti $\mu_j$ con $j \in I$. La **matrice di varianze e covarianze del sottovettore $X_I$**, $\Sigma_I$, è la matrice che si ottiene **incrociando le righe e le colonne** della matrice $\Sigma$ con gli indici contenuti in $I$. Prendete la matrice $\Sigma$ e selezionate solo le righe e le colonne corrispondenti agli indici $i_1, \dots, i_k$.
![[Pasted image 20250424152133.png]]
#### Dimostrazione della Proposizione 1 (Idea generale usando Funzioni Caratteristiche)

La dimostrazione di questa proposizione si basa sulla **proprietà di unicità della funzione caratteristica**: se due variabili aleatorie (o vettori aleatori) hanno la stessa funzione caratteristica, allora hanno la stessa legge (distribuzione).

La funzione caratteristica di un vettore Gaussiano $n$-dimensionale $\mathbf{x}$ con parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$, calcolata in un vettore $\mathbf{t} = (t_1, ..., t_n)^T \in \mathbb{R}^n$, è data da: $\phi_{\mathbf{x}}(\mathbf{t}) = E[e^{i \mathbf{t}^T \mathbf{x}}] = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$.

Consideriamo prima il caso più semplice e fondamentale: la **dimostrazione che una singola componente $X_k$ (una marginale) è Gaussiana**. La funzione caratteristica di una singola componente $X_k$, $\phi_{X_k}(u)$, dove $u$ è uno scalare, può essere ottenuta dalla funzione caratteristica congiunta del vettore $\mathbf{x}$. Per definizione, $\phi_{X_k}(u) = E[e^{i u X_k}]$. Questo è equivalente a valutare la funzione caratteristica congiunta $\phi_{\mathbf{x}}(\mathbf{t})$ nel vettore $\mathbf{t}$ che ha la componente $k$-esima uguale a $u$ e tutte le altre componenti uguali a zero. Ossia, poniamo $\mathbf{t} = (0, ..., 0, u_k=u, 0, ..., 0)^T$ (dove $u$ è nella posizione $k$-esima).

Sostituendo questo vettore $\mathbf{t}$ nella formula della funzione caratteristica congiunta: $\phi_{X_k}(u) = \phi_{\mathbf{x}}(0, ..., u_k=u, ..., 0)$ $= e^{i (0, ..., u, ..., 0)^T \boldsymbol{\mu} - \frac{1}{2} (0, ..., u, ..., 0)^T \boldsymbol{\Sigma} (0, ..., u, ..., 0)}$.

Analizziamo i due termini nell'esponente:

1. $i \mathbf{t}^T \boldsymbol{\mu} = i (0, ..., u, ..., 0) \begin{pmatrix} \mu_1 \\ \vdots \\ \mu_k \\ \vdots \\ \mu_n \end{pmatrix}$. Questo prodotto scalare seleziona solo la componente $k$-esima di $\boldsymbol{\mu}$ moltiplicata per $u$. Quindi, $i \mathbf{t}^T \boldsymbol{\mu} = i u \mu_k$.
2. $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t} = (0, ..., u, ..., 0) \begin{pmatrix} \Sigma_{11} & \dots & \Sigma_{1k} & \dots & \Sigma_{1n} \\ \vdots & \ddots & \vdots & \ddots & \vdots \\ \Sigma_{k1} & \dots & \Sigma_{kk} & \dots & \Sigma_{kn} \\ \vdots & \ddots & \vdots & \ddots & \vdots \\ \Sigma_{n1} & \dots & \Sigma_{nk} & \dots & \Sigma_{nn} \end{pmatrix} \begin{pmatrix} 0 \\ \vdots \\ u \\ \vdots \\ 0 \end{pmatrix}$. Quando si esegue questo prodotto, il vettore riga $(0, ..., u, ..., 0)$ seleziona la riga $k$-esima di $\boldsymbol{\Sigma}$ moltiplicata per $u$. Il risultato è $u \cdot (\Sigma_{k1}, \dots, \Sigma_{kk}, \dots, \Sigma_{kn})$. Moltiplicando questo vettore riga per il vettore colonna $(0, ..., u, ..., 0)^T$, si seleziona solo la componente $k$-esima del vettore riga, che è $\Sigma_{kk}$, moltiplicata per $u$. Quindi, $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t} = u \cdot (\Sigma_{k1}, \dots, \Sigma_{kk}, \dots, \Sigma_{kn}) \begin{pmatrix} 0 \\ \vdots \ u \\ \vdots \\ 0 \end{pmatrix} = u \cdot (u \Sigma_{kk}) = u^2 \Sigma_{kk}$.

Sostituendo questi termini nell'esponente, otteniamo la funzione caratteristica di $X_k$: $\phi_{X_k}(u) = e^{i u \mu_k - \frac{1}{2} u^2 \Sigma_{kk}}$.

Questa è esattamente la funzione caratteristica di una **variabile aleatoria Gaussiana unidimensionale** con media $\mu_k$ e varianza $\Sigma_{kk}$. Poiché la funzione caratteristica di $X_k$ corrisponde a quella di una Gaussiana unidimensionale, per il teorema di unicità, $X_k$ è una variabile aleatoria Gaussiana unidimensionale.

La **dimostrazione per un sottovettore $X_I$ di dimensione $k > 1$** segue la stessa logica ed è stata descritta come "un filino più laboriosa" ma concettualmente identica. Per ottenere la funzione caratteristica del sottovettore $X_I = (X_{i_1}, \dots, X_{i_k})^T$ calcolata in un vettore $\mathbf{u} = (u_1, \dots, u_k)^T$, si valuta la funzione caratteristica congiunta del vettore completo $\mathbf{x}$ in un vettore $\mathbf{t} \in \mathbb{R}^n$ dove le componenti $t_j$ sono nulle se $j \notin I$, e sono uguali alle corrispondenti componenti di $\mathbf{u}$ se $j \in I$. Ossia, se $j = i_m$ per qualche $m \in {1, \dots, k}$, allora $t_j = u_m$, altrimenti $t_j = 0$.

La funzione caratteristica di $X_I$ è $\phi_{X_I}(\mathbf{u}) = E[e^{i \mathbf{u}^T X_I}]$. Questo è uguale a $E[e^{i \sum_{m=1}^k u_m X_{i_m}}]$, che è la funzione caratteristica di $\mathbf{x}$ valutata nel vettore $\mathbf{t}$ descritto sopra. $\phi_{X_I}(\mathbf{u}) = \phi_{\mathbf{x}}(\mathbf{t})$.

Sostituendo questo vettore $\mathbf{t}$ (con zeri nelle posizioni fuori da $I$ e componenti di $\mathbf{u}$ nelle posizioni indicate da $I$) nella formula della funzione caratteristica congiunta $\phi_{\mathbf{x}}(\mathbf{t}) = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$, si ottiene:

1. $i \mathbf{t}^T \boldsymbol{\mu}$: Questo prodotto selezionerà solo le componenti di $\boldsymbol{\mu}$ corrispondenti agli indici in $I$, moltiplicate per le rispettive componenti di $\mathbf{u}$. Il risultato è $i \mathbf{u}^T \boldsymbol{\mu}_I$, dove $\boldsymbol{\mu}_I$ è il sottovettore di $\boldsymbol{\mu}$ con le componenti indicate da $I$.
2. $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}$: Questo prodotto seleziona la **forma quadratica** definita dalla **sottomatrice** di $\boldsymbol{\Sigma}$ corrispondente agli indici in $I$, applicata al vettore $\mathbf{u}$. Il risultato è $\mathbf{u}^T \boldsymbol{\Sigma}_I \mathbf{u}$, dove $\boldsymbol{\Sigma}_I$ è la sottomatrice di $\boldsymbol{\Sigma}$ ottenuta incrociando righe e colonne con indici in $I$.

Quindi, la funzione caratteristica del sottovettore $X_I$ è: $\phi_{X_I}(\mathbf{u}) = e^{i \mathbf{u}^T \boldsymbol{\mu}_I - \frac{1}{2} \mathbf{u}^T \boldsymbol{\Sigma}_I \mathbf{u}}$.

Questa è esattamente la forma della funzione caratteristica di un **vettore Gaussiano $k$-dimensionale** con vettore delle medie $\boldsymbol{\mu}_I$ e matrice di varianze e covarianze $\boldsymbol{\Sigma}_I$. Per il teorema di unicità, il sottovettore $X_I$ segue una distribuzione Gaussiana con questi parametri.

Le fonti indicano che la dimostrazione dettagliata per il caso generale del sottovettore, sebbene concettualmente simile a quella della singola componente, non è stata formalmente completata nelle lezioni per intero con tutte le notazioni, ma l'idea di "selezionare la sottomatrice" è stata esplicitata. Questo risultato conferma che **tutte le marginali di un vettore Gaussiano (singole componenti o sottovettori) sono esse stesse Gaussiane**.
![[Pasted image 20250424154542.png]]


**Caso generale (più componenti):** Se si considerano $k$ componenti ($k>1$), si fa la stessa cosa ma il vettore $t$ avrà $k$ elementi non nulli. La forma quadratica $t^T \Sigma t$ seleziona la **sottomatrice** $\Sigma_I$ corrispondente agli indici $I$ delle componenti scelte, e il prodotto scalare $t^T \mu$ seleziona il **sottovettore** $\mu_I$. La conclusione è la stessa: si ottiene la funzione caratteristica di una Gaussiana di dimensione $k$ con parametri $\mu_I$ e $\Sigma_I$.

Questo spiega la Proposizione 1: le marginali (sottovettori) sono Gaussiane.

### Proposizione 2: Indipendenza delle Componenti e Matrice di Covarianza

**Enunciato (Punto 2 come chiamato nella fonte, o Punto 3 come chiamato nella fonte):** Il vettore Gaussiano $X$ ha **componenti indipendenti se e solo se** la sua matrice di varianze e covarianze **$\Sigma$ è una matrice diagonale**. **Corollario (Punto 2 bis nella fonte, parte del Punto 3 nella fonte):** Due componenti $X_{i_1}$ e $X_{i_2}$ di un vettore Gaussiano $X$ sono **indipendenti se e solo se** l'elemento $\sigma_{i_1, i_2}$ (cioè la covarianza tra $X_{i_1}$ e $X_{i_2}$) è **uguale a 0**. Il professore sottolinea che questa è un'affermazione **forte**. In generale, la covarianza nulla non implica indipendenza, ma **nel mondo Gaussiano sì**. Se si sa che due componenti Gaussiane hanno covarianza nulla, si può concludere che sono indipendenti.
![[Pasted image 20250424152124.png]]
#### Esempio con Matrice 3x3

Consideriamo un vettore Gaussiano $X = (X_1, X_2, X_3)$ con vettore delle medie $\mu = (0, 0, 0)$ e una matrice di covarianza $\Sigma$ data da: $\Sigma = \begin{pmatrix} \Sigma_{11} & \Sigma_{12} & \Sigma_{13} \\ \Sigma_{21} & \Sigma_{22} & \Sigma_{23} \\ \Sigma_{31} & \Sigma_{32} & \Sigma_{33} \end{pmatrix}$ Sappiamo che $\Sigma$ è simmetrica, quindi $\Sigma_{ij} = \Sigma_{ji}$. La covarianza tra $X_i$ e $X_j$ è $\Sigma_{ij}$.

Supponiamo di avere la seguente matrice $\Sigma$ (esempio del professore): $\Sigma = \begin{pmatrix} \Sigma_{11} & 0 & \Sigma_{13} \\ 0 & \Sigma_{22} & \Sigma_{23} \\ \Sigma_{31} & \Sigma_{32} & \Sigma_{33} \end{pmatrix}$ Guardando gli elementi fuori dalla diagonale (che rappresentano le covarianze tra diverse componenti):

- $\Sigma_{12} = 0$ (e $\Sigma_{21}=0$ per simmetria). Questo significa che la covarianza tra $X_1$ e $X_2$ è zero. Poiché $X_1$ e $X_2$ sono componenti di un vettore Gaussiano (quindi marginalmente Gaussiane per la Proposizione 1), la covarianza nulla implica indipendenza. Quindi, **$X_1$ e $X_2$ sono indipendenti**.
- $\Sigma_{13} \ne 0$ (nell'esempio grafico del professore, anche se non è specificato un valore numerico, è rappresentato come non zero). Questo significa che la covarianza tra $X_1$ e $X_3$ non è zero. Quindi, **$X_1$ e $X_3$ non sono indipendenti**.
- $\Sigma_{23} \ne 0$. Questo significa che la covarianza tra $X_2$ e $X_3$ non è zero. Quindi, **$X_2$ e $X_3$ non sono indipendenti**.
![[Pasted image 20250424152339.png]]
Questo esempio mostra come si può determinare l'indipendenza tra le componenti di un vettore Gaussiano semplicemente guardando se gli elementi fuori dalla diagonale della matrice di covarianza $\Sigma$ sono zero. Questa proprietà è molto utile negli esercizi, specialmente nei quesiti vero/falso.

#### Dimostrazione della Proposizione 2 (Idea generale usando Funzioni Caratteristiche)

La dimostrazione si basa principalmente sull'uso della **funzione caratteristica** del vettore aleatorio $\mathbf{x}$ e sul **teorema di unicità** della funzione caratteristica, che afferma che due variabili (o vettori) aleatorie con la stessa funzione caratteristica hanno la stessa distribuzione. Inoltre, si utilizza il criterio che lega l'indipendenza delle componenti di un vettore aleatorio alla fattorizzazione della sua funzione caratteristica congiunta nel prodotto delle funzioni caratteristiche marginali.

Procediamo con la dimostrazione in due parti, date dall'enunciato "se e solo se":

**Parte 1: Se le componenti $X_1, \dots, X_n$ sono indipendenti, allora la matrice $\boldsymbol{\Sigma}$ è diagonale.**

Questo è il lato "facile" dell'implicazione, valido per qualsiasi tipo di variabili aleatorie, non solo Gaussiane. La matrice di varianze e covarianze $\boldsymbol{\Sigma}$ ha come elementi $\Sigma_{ij} = \text{Cov}(X_i, X_j)$. Per definizione di indipendenza, se due variabili aleatorie $X_i$ e $X_j$ (con $i \neq j$) sono indipendenti, la loro covarianza è nulla: $\text{Cov}(X_i, X_j) = E[(X_i - E[X_i])(X_j - E[X_j])] = 0$. Dato che stiamo considerando le componenti $X_1, \dots, X_n$ come indipendenti, questo significa che $\text{Cov}(X_i, X_j) = \Sigma_{ij} = 0$ per ogni $i \neq j$. Gli elementi sulla diagonale della matrice $\boldsymbol{\Sigma}$ sono le varianze delle singole componenti: $\Sigma_{ii} = \text{Var}(X_i)$. Questi elementi non sono necessariamente zero (a meno di casi degeneri in cui la componente è una costante, ma anche in quel caso la varianza è la parte diagonale corretta). Pertanto, se tutte le covarianze fuori dalla diagonale sono zero, la matrice $\boldsymbol{\Sigma}$ è, per definizione, una matrice diagonale. Questo dimostra la prima parte.
![[Pasted image 20250424155548.png]]
**Parte 2: Se la matrice $\boldsymbol{\Sigma}$ è diagonale, allora le componenti $X_1, \dots, X_n$ sono indipendenti.**

Questa è la parte più significativa per i vettori Gaussiani, e la dimostrazione si basa sull'uso della funzione caratteristica. La funzione caratteristica di un vettore Gaussiano $\mathbf{x}$ con parametri $\boldsymbol{\mu}$ e $\boldsymbol{\Sigma}$, calcolata in un vettore $\mathbf{t} = (t_1, \dots, t_n)^T \in \mathbb{R}^n$, è data da: $\phi_{\mathbf{x}}(\mathbf{t}) = E[e^{i \mathbf{t}^T \mathbf{x}}] = e^{i \mathbf{t}^T \boldsymbol{\mu} - \frac{1}{2} \mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}}$.

Assumiamo che $\boldsymbol{\Sigma}$ sia una matrice diagonale. Questo significa che gli elementi fuori dalla diagonale sono zero ($\Sigma_{ij} = 0$ per $i \neq j$), e gli elementi sulla diagonale sono le varianze $\Sigma_{ii}$. Il primo termine nell'esponente è il prodotto scalare $i \mathbf{t}^T \boldsymbol{\mu}$. Questo è semplicemente $i \sum_{j=1}^n t_j \mu_j$. Il secondo termine nell'esponente, $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t}$, è una forma quadratica. Se $\boldsymbol{\Sigma}$ è diagonale, con elementi $\Sigma_{jj}$ sulla diagonale, questo prodotto si semplifica notevolmente. In forma matriciale, $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t} = \sum_{i=1}^n \sum_{j=1}^n t_i \Sigma_{ij} t_j$. Poiché $\Sigma_{ij} = 0$ per $i \neq j$, rimangono solo i termini per cui $i = j$: $\mathbf{t}^T \boldsymbol{\Sigma} \mathbf{t} = \sum_{j=1}^n t_j \Sigma_{jj} t_j = \sum_{j=1}^n \Sigma_{jj} t_j^2$. (Nota: le fonti usano anche la notazione $\sigma_j^2$ o $\sigma_{jj}^2$ per gli elementi diagonali di $\boldsymbol{\Sigma}$ in contesti specifici, ma il significato è lo stesso: la varianza della j-esima componente).

Sostituendo questi termini nell'esponente della funzione caratteristica congiunta, otteniamo: $\phi_{\mathbf{x}}(\mathbf{t}) = e^{i \sum_{j=1}^n t_j \mu_j - \frac{1}{2} \sum_{j=1}^n \Sigma_{jj} t_j^2}$.

Ora, possiamo riscrivere l'esponente come una somma e quindi l'intera espressione come un prodotto di esponenziali: $\phi_{\mathbf{x}}(\mathbf{t}) = e^{\sum_{j=1}^n (i t_j \mu_j - \frac{1}{2} \Sigma_{jj} t_j^2)} = \prod_{j=1}^n e^{i t_j \mu_j - \frac{1}{2} \Sigma_{jj} t_j^2}$.

Ogni fattore nel prodotto, $e^{i t_j \mu_j - \frac{1}{2} \Sigma_{jj} t_j^2}$, è esattamente la **funzione caratteristica di una variabile aleatoria Gaussiana unidimensionale** con media $\mu_j$ e varianza $\Sigma_{jj}$. Queste sono le funzioni caratteristiche marginali $\phi_{X_j}(t_j)$ delle singole componenti $X_j$. Quindi, abbiamo dimostrato che se $\boldsymbol{\Sigma}$ è diagonale, la funzione caratteristica congiunta del vettore $\mathbf{x}$ è uguale al prodotto delle funzioni caratteristiche marginali delle sue componenti: $\phi_{\mathbf{x}}(\mathbf{t}) = \prod_{j=1}^n \phi_{X_j}(t_j)$ per ogni $\mathbf{t} \in \mathbb{R}^n$.

Per il criterio che lega l'indipendenza alla funzione caratteristica, questa fattorizzazione implica che le componenti $X_1, \dots, X_n$ sono indipendenti.

Questo completa la dimostrazione della Proposizione 2, confermando che per un vettore Gaussiano, l'indipendenza delle componenti è _equivalente_ alla matrice di varianze e covarianze essere diagonale. Questa è una delle "cose belle" e semplificanti del "mondo Gaussiano".

**Corollario correlato (Punto 3 o 2 bis):** Se si prendono due singole componenti $X_i$ e $X_j$ da un vettore Gaussiano (che formano un sottovettore Gaussiano di dimensione 2 per la Proposizione 1, non dimostrata formalmente ma discussa nelle fonti), esse sono indipendenti se e solo se la loro covarianza $\Sigma_{ij}$ è zero. Questo discende direttamente dalla Proposizione 2 applicata al sottovettore $(X_i, X_j)^T$, la cui matrice di covarianza è una sottomatrice $2 \times 2$ di $\boldsymbol{\Sigma}$ contenente $\Sigma_{ii}, \Sigma_{ij}, \Sigma_{ji}, \Sigma_{jj}$. Se questa sottomatrice è diagonale (cioè $\Sigma_{ij} = \Sigma_{ji} = 0$), le due componenti sono indipendenti.
___


**Vettori Gaussiani Multivariati: Densità, Degenerazione e Rappresentazioni**

**1. Vettori Gaussiani Assolutamente Continui**

Un punto fondamentale è comprendere la condizione che rende un vettore gaussiano "assolutamente continuo".

- **Definizione/Proprietà Fondamentale:**
    
    - Un vettore aleatorio gaussiano $X$ (a valori in $\mathbb{R}^n$) è assolutamente continuo **se e solo se** la sua matrice di covarianza $\Sigma$ è strettamente definita positiva.
    - Questo significa che $\Sigma$ **non può** avere autovalori nulli.
    - Se una matrice è strettamente definita positiva, allora è automaticamente invertibile.
- **Densità di Probabilità:**
    
    - Nel caso in cui $X$ sia assolutamente continuo (cioè $\Sigma$ è strettamente definita positiva), la sua densità di probabilità $f_X(x)$ è data da una formula specifica: $f_X(x) = c \cdot e^{-\frac{1}{2} (x - \mu)^T \Sigma^{-1} (x - \mu)}$ dove:
        - $x$ è il vettore di variabili in $\mathbb{R}^n$.
        - $\mu$ è il vettore delle medie di $X$.
        - $\Sigma^{-1}$ è la matrice inversa della matrice di covarianza $\Sigma$.
        - $c$ è una costante di normalizzazione (spesso specificata come $1 / (\sqrt{(2\pi)^n \det(\Sigma)})$ ) (Questo dettaglio sulla costante $c$ _non_ è esplicitamente dato nelle fonti, ma è la formula completa; le fonti si concentrano sulla forma esponenziale).
    - Il termine nell'esponente, $(x - \mu)^T \Sigma^{-1} (x - \mu)$, è una **forma quadratica**.
    - **Spiegazione:** L'inclusione di $\Sigma^{-1}$ nella formula della densità è cruciale e distingue il caso multivariato da quello unidimensionale in un modo specifico.
      ![[Pasted image 20250424160002.png]]
- **Confronto con il Caso Unidimensionale ($n=1$):**
    
    - Consideriamo il caso semplice in cui $n=1$, cioè $X$ è una singola variabile gaussiana $X \sim N(\mu, \sigma^2)$.
    - La matrice di covarianza $\Sigma$ si riduce allo scalare $\sigma^2$.
    - La densità della gaussiana unidimensionale è proporzionale a $e^{-\frac{(x-\mu)^2}{2\sigma^2}}$.
    - Possiamo riscrivere l'esponente come $-\frac{1}{2} (x-\mu) (\sigma^2)^{-1} (x-\mu)$. Qui $(\sigma^2)^{-1}$ è semplicemente $1/\sigma^2$.
    - **Analogia:** Questa riscrittura rende chiara l'analogia con il caso multivariato: lo scalare $\sigma^2$ corrisponde alla matrice $\Sigma$, e il suo inverso $(\sigma^2)^{-1}$ corrisponde all'inverso matriciale $\Sigma^{-1}$.
    - **Punto di Attenzione:** È fondamentale **non confondere** $\Sigma$ con $\Sigma^{-1}$. Nelle formule standard:
        - La **funzione caratteristica** di un vettore gaussiano $X$ è $e^{i t^T \mu - \frac{1}{2} t^T \Sigma t}$ (la parte di media nulla $e^{-t^T \Sigma t / 2}$ è menzionata). Questa formula usa $\Sigma$.
        - La **densità di probabilità** (per il caso assolutamente continuo) usa $\Sigma^{-1}$.
    - **Condizione di Invertibilità:** La matrice $\Sigma^{-1}$ è definita **solo se** $\Sigma$ è invertibile. La matrice di covarianza $\Sigma$ è invertibile **se e solo se** è strettamente definita positiva.
      ![[Pasted image 20250424160050.png]]
- **Dimostrazione (Cenni):**
    
    - La dimostrazione della relazione tra assoluta continuità, matrice $\Sigma$ strettamente definita positiva e la forma specifica della densità non viene svolta in dettaglio.
    - Viene menzionato che si basa su un cambio di variabile.
    - L'enunciato è diviso idealmente in due parti: l'assoluta continuità e la forma della densità.

**2. Caso Degenerato: $\Sigma$ non strettamente definita positiva**

Cosa succede se la matrice di covarianza $\Sigma$ non è strettamente definita positiva?

- **Proprietà:**
    
    - Se $\Sigma$ è solo semidefinita positiva (ossia ha **almeno un autovalore nullo**), il vettore gaussiano $X$ **non è assolutamente continuo**.
    - Questo perché $\Sigma^{-1}$ non è definita in questo caso.
- **Concentrazione su un Sottospazio:**
    
    - In questo caso degenere, il vettore $X$ è concentrato (con probabilità 1) su un **iperpiano** (un sottospazio lineare, possibilmente traslato dalla media $\mu$).
    - La **dimensione** di questo sottospazio è strettamente minore della dimensione $n$ dello spazio ambiente $\mathbb{R}^n$.
    - La dimensione di questo sottospazio è esattamente uguale al **rango di $\Sigma$**.
- **Esempio Unidimensionale ($n=1$):**
    
    - L'unico caso degenere in dimensione 1 è quando la varianza $\sigma^2$ è uguale a 0.
    - In questo caso, la variabile aleatoria collassa su un punto (la sua media $\mu$).
    - La dimensione del sottospazio è 0, che è strettamente minore di $n=1$. Questo corrisponde al rango di $\Sigma=0$, che è 0.
- **Esempio Multidimensionale:**
    
    - In più dimensioni, se $\Sigma$ non è definita positiva, la distribuzione gaussiana "collassa" su un sottospazio.
    - Questo sottospazio è lineare (traslato da $\mu$).
    - La sua dimensione è data dal rango di $\Sigma$. Ad esempio, in $\mathbb{R}^4$, una gaussiana degenere può essere concentrata su un sottospazio di dimensione 3, 2, 1 o 0, a seconda del rango di $\Sigma$.
- **Importanza:** Questo concetto, pur essendo a volte considerato solo per "cultura" e potenzialmente non strettamente "in programma", è importante per capire il comportamento dei vettori gaussiani quando la matrice di covarianza non è invertibile.
    

**3. Rappresentazioni e Trasformazioni Lineari dei Vettori Gaussiani**


**Il Caso Degenerato: $\Sigma$ non Strettamente Definita Positiva**

Questo è il caso in cui $\Sigma$ è simmetrica e semidefinita positiva, ma **non** strettamente definita positiva. Ciò significa che $\Sigma$ ha almeno un autovalore uguale a zero.

**Conseguenza Principale:** Se $\Sigma$ non è strettamente definita positiva, il vettore gaussiano $X$ **non è assolutamente continuo**. Di conseguenza, **non ammette una densità di probabilità** nel senso usuale. La formula della densità con $\Sigma^{-1}$ non è applicabile perché $\Sigma$ non è invertibile.

**Dove si Concentra la Probabilità?**

**Proposizione (non dimostrata nell'audio, forse non in programma):** Se $X$ è un vettore gaussiano di parametri $\mu$ e $\Sigma$ e $\Sigma$ non è strettamente definita positiva (ha autovalori nulli), allora $X$ è concentrato con probabilità 1 su un **iperpiano** (o sottospazio lineare traslato dalla media $\mu$) di dimensione strettamente minore di $n$. La dimensione di questo iperpiano è uguale al rango della matrice $\Sigma$.

**Commento e Esempio Concettuale:** Questa affermazione spiega perché la gaussiana "collassa" in un caso degenere.

- **Esempio 1D:** Nel caso unidimensionale ($n=1$), l'unico caso degenere è $\Sigma = \sigma^2 = 0$. La matrice $\Sigma$ è la matrice $1 \times 1$ con elemento 0. Il suo rango è 0. La proposizione dice che la gaussiana è concentrata su un iperpiano di dimensione 0. Un iperpiano di dimensione 0 in $\mathbb{R}^1$ è un punto. Infatti, in questo caso, la variabile aleatoria $X$ è la costante $\mu$, che è concentrata sul punto $\mu$. La dimensione 0 è $n - (\text{numero di autovalori nulli}) = 1 - 1 = 0$ o anche uguale al rango di $\Sigma$ (che è 0).
    
- **Esempio Multidimensionale (Concettuale):** Pensiamo alla costruzione $X = \mu + O Z$ dove $Z$ ha componenti indipendenti $Z_j \sim N(0, \lambda_j^2)$. Se $\Sigma$ ha $k > 0$ autovalori nulli, allora $k$ dei $\lambda_j^2$ sono zero. Questo significa che $k$ delle componenti $Z_j$ sono variabili aleatorie degenerate, concentrate su 0. Il vettore $Z$ vive in $\mathbb{R}^n$, ma le sue $k$ componenti con varianza zero sono fisse a 0. Questo "vincola" $Z$ a un sottospazio di $\mathbb{R}^n$ di dimensione $n-k$. Quando applichiamo la trasformazione lineare $OZ$ (una rotazione/riflessione) e la traslazione $\mu$, il vettore risultante $X$ rimane confinato in un sottospazio affine (iperpiano) traslato, la cui dimensione è $n-k$, che è anche il rango di $\Sigma$.
    

**Corollario Concettuale (Legato al Caso Degenerato):** Come osservato da uno studente, se abbiamo un vettore gaussiano $X \sim N(\mu, \Sigma)$, possiamo studiarlo in un sistema di riferimento diverso. Considerando la trasformazione $Y = O^T (X - \mu)$, dove $O$ diagonalizza $\Sigma$. Sappiamo che $X = \mu + O Z$, quindi $X - \mu = O Z$. Allora $Y = O^T (O Z) = (O^T O) Z = I Z = Z$. Questo significa che il vettore $Y$ ha la stessa legge del vettore $Z$, le cui componenti sono indipendenti $Z_j \sim N(0, \lambda_j^2)$. Se $\Sigma$ è degenere, alcuni $\lambda_j^2$ sono nulli. Quindi, alcune componenti di $Y$ (e quindi di $Z$) sono degenerate (costanti uguali a 0). Questa trasformazione lineare (sottrarre la media e "ruotare" con $O^T$) permette di "vedere" la struttura intrinseca della gaussiana: un insieme di variabili indipendenti (alcune non degenerate, altre costanti). Il fatto che alcune siano costanti è la manifestazione della degenerazione e della concentrazione su un sottospazio di dimensione inferiore.

**Non Unicità della Rappresentazione $X = \mu + A Z_0$**

Un aspetto correlato alla struttura di $\Sigma$ (anche nel caso non degenere) è che, mentre la legge gaussiana è unicamente determinata da $\mu$ e $\Sigma$ (tramite la CF), la _costruzione_ tramite trasformazione di variabili gaussiane indipendenti non è unica. Possiamo ottenere un vettore gaussiano $X \sim N(\mu, \Sigma)$ anche partendo da un vettore $Z_0$ di variabili standard normali indipendenti $Z_0 \sim N(0, I)$ (dove $I$ è l'identità, $\text{Cov}(Z_0) = I$) e applicando una trasformazione affine $X = \mu + A Z_0$.

La matrice di covarianza di $X$ in questo caso è $\text{Cov}(X) = A \text{Cov}(Z_0) A^T = A I A^T = A A^T$. Per ottenere $X \sim N(\mu, \Sigma)$, dobbiamo avere $A A^T = \Sigma$. Il punto chiave è che, per una data $\Sigma$, l'equazione matriciale $A A^T = \Sigma$ può avere **molteplici soluzioni** per la matrice $A$. Ad esempio, la decomposizione di Cholesky o la "radice quadrata" della matrice $\Sigma$ (se $\Sigma$ è definita positiva) sono _alcune_ possibili soluzioni per $A$, ma non sono le uniche, specialmente se $A$ non è richiesta essere simmetrica o definita positiva. Questo significa che si può generare lo stesso vettore gaussiano $\Sigma$ in modi diversi, usando matrici $A$ differenti, anche se si parte sempre da variabili standard normali indipendenti. Questa è un'altra sottigliezza del mondo gaussiano che deriva dalle proprietà della matrice $\Sigma$.
![[Pasted image 20250424161840.png]]
![[Pasted image 20250424162302.png]]
In sintesi, la degenerazione di un vettore gaussiano multivariato (quando $\Sigma$ non è strettamente definita positiva) implica che esso non è assolutamente continuo, non ha densità, e concentra tutta la sua probabilità su un sottospazio di dimensione inferiore a $n$, determinata dal rango di $\Sigma$. Questo comportamento è intrinsecamente legato alla presenza di autovalori nulli nella matrice di covarianza $\Sigma$.


#### References



