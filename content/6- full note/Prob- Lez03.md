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



