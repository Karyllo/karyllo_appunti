2025-02-18 17:41

_Status: #revisione_zero #flashcard_zero #riscritto_zero 

_Tags: [[Metodi Analitici per le Equazioni alle Derivate Parziali]] [[sbobine]]

## lez01-edp

### Introduzione al Corso e Materiali Didattici

### Struttura del Corso Integrato

- Il corso è integrato con un modulo di **Metodi Numerici** tenuto dal professor Zunino, successivo al modulo principale.
- Gli esami dei due moduli possono essere sostenuti **separatamente** o nello stesso appello (giugno, luglio, agosto, settembre, gennaio, febbraio).
- L'esame del modulo principale consiste in una **prova scritta** con tre domande teoriche e un esercizio, riflettendo l'orientamento teorico del corso.

### Introduzione alle Equazioni alle Derivate Parziali (EDP)

- Il corso introduce le **equazioni alle derivate parziali (EDP)**, un tema centrale nell'analisi matematica e nelle modellizzazioni differenziali.
    
- Le EDP modellizzano **sistemi fisici continui**, come la vibrazione di una corda o la temperatura di un corpo esteso, dove le funzioni incognite dipendono da più variabili (spazio e tempo).
    
- Un'equazione alle derivate parziali può essere scritta in forma generale come:
    
    ```
    F(x, u, ∂u, ∂²u, ..., ∂ᵏu) = 0
    ```
    
    dove:
    
    - `u` è la funzione incognita.
    - `x` è la variabile indipendente (può includere spazio e tempo).
    - `∂ᵏu` rappresenta le derivate parziali di `u` fino all'ordine `k`.
- L'**ordine dell'equazione** è determinato dal massimo ordine di derivazione presente nell'equazione.
    

### Esempi Storici di EDP

1. **Equazione della corda vibrante:**
    
    - Descrive la vibrazione di una corda tesa, fissata agli estremi.
        
    - Forma:
        
        ```
        ∂²u/∂t² = c² (∂²u/∂x²)
        ```
        
        dove `u(x, t)` rappresenta la forma della corda al tempo `t`, e `c` è una costante con le dimensioni di una velocità.
        
    - Estesa da Bernulli per rappresentare le onde bidimensionali o tridimensionali:
        
        ```
        ∂²u/∂t² = c² Δu
        ```
        
        dove Δu è il Laplaciano di u.
        
2. **Equazione di Laplace:**
    
    - Descrive il potenziale gravitazionale (Laplace) o elettrostatico (Green) in punti dello spazio privi di carica.
        
    - Forma:
        
        ```
        Δu = 0
        ```
        
        dove Δu è il Laplaciano di u, dato dalla somma delle derivate seconde pure di u.
        
3. **Equazione del calore (o di diffusione):**
    
    - Descrive la conduzione del calore in un corpo.
        
    - Forma:
        
        ```
        ∂u/∂t = c Δu
        ```
        
        dove `u(x, t)` rappresenta la temperatura al tempo `t`, e `c` è il coefficiente di conducibilità termica.
        
    - Introdotta da Fourier nella _Teoria analitica del calore_.
        
4. **Equazioni di Navier-Stokes:**
    
    - Utilizzate in fluidodinamica.
5. **Equazioni di Maxwell:**
    
    - Utilizzate nell'elettromagnetismo.
    - Formalizzate matematicamente da Heaviside.
6. **Equazione di Schrödinger:**
    
    - Utilizzata nella meccanica quantistica.
7. **Equazioni di Cauchy-Riemann:**
    
    - Utilizzate nello studio delle funzioni olomorfe.
    - La parte reale e la parte immaginaria di una funzione olomorfa soddisfano queste equazioni.
8. **Equazioni delle superfici minime (Lagrange):**
    
    - Descrivono la superficie di area minima che si appoggia su un bordo dato.
9. **Equazione di Black-Scholes:**
    
    - Utilizzata nella finanza matematica per la teoria dei processi stocastici.

### Classificazione delle EDP

10. **Ordine:**
    
    - Primo ordine (es. equazioni di Cauchy-Riemann, equazione del trasporto lineare).
    - Secondo ordine (es. equazione di Laplace, del calore, delle onde, di Schrödinger).
    - Ordine superiore (es. equazione della piastra vibrante, equazione di Korteweg-de Vries).
11. **Scalari vs. Sistemi:**
    
    - Equazioni scalari: una sola equazione.
    - Sistemi: più equazioni (es. equazioni di Maxwell, equazioni di Navier-Stokes).
12. **Lineari vs. Non Lineari:**
    
    - Lineari: possono essere scritte nella forma `Lu = F`, dove `L` è un operatore lineare.
    - Non lineari: non soddisfano la proprietà di linearità (es. equazione delle superfici minime, equazione dei mezzi porosi, equazione di Korteweg-de Vries).
13. **Stazionarie vs. di Evoluzione:**
    
    - Stazionarie: descrivono fenomeni indipendenti dal tempo.
    - Di evoluzione: descrivono fenomeni che evolvono nel tempo.
14. **Tipi di Equazioni di Evoluzione:**
    
    - Tipo vibrazione/oscillazione (iperboliche): es. equazione delle onde.
    - Tipo diffusione (paraboliche): es. equazione del calore.
    - Ellittiche: equazioni stazionarie.

### Problemi Tipici per le EDP

- Analogia con le equazioni differenziali ordinarie (EDO).
    
- La soluzione generale di un'EDP dipende da **funzioni arbitrarie**, non solo da costanti.
    
- Condizioni necessarie per determinare una soluzione unica:
    
    - **Condizioni iniziali:** specificano il valore della funzione e/o delle sue derivate al tempo `t = 0`.
    - **Condizioni al contorno:** specificano il valore della funzione sul bordo del dominio spaziale.
- Tipi di problemi:
    
    - Problemi ai valori iniziali.
    - Problemi ai valori al contorno (Dirichlet, Neumann, ecc.).
    - Problemi misti (valori iniziali e al contorno).

### Concetto di Problema Ben Posto (Hadamard)

Un problema è ben posto se soddisfa tre condizioni:

15. **Esistenza:** Esiste almeno una soluzione per ogni dato assegnato.
16. **Unicità:** La soluzione è unica.
17. **Dipendenza continua dai dati:** Una piccola variazione nei dati causa una piccola variazione nella soluzione.

Se una di queste condizioni non è soddisfatta, il problema è detto **mal posto**.

### Complessità nello Studio delle EDP

- La **geometria del dominio** influenza la complessità del problema.
- È utile partire da **modelli semplificati** per comprendere le idee fondamentali, per poi gradualmente aggiungere ipotesi più realistiche.

### Punti di Vista nello Studio delle EDP

18. **Ricerca di soluzioni esplicite:**
    
    - Tecniche analitiche: sviluppi in serie di Fourier, trasformata di Fourier e Laplace, funzioni speciali (polinomi di Legendre, Laguerre, Hermite, funzioni di Bessel).
19. **Approccio teorico:**
    
    - Giustificazione rigorosa delle tecniche analitiche.
    - Studio delle proprietà a priori delle soluzioni.
    - Utilizzo di strumenti avanzati: teoria della misura e dell'integrazione di Lebesgue, spazi di Sobolev, teoria delle distribuzioni.
20. **Analisi numerica:**
    
    - Metodi per approssimare numericamente le soluzioni (es. metodo degli elementi finiti).
    - Fondamentale un quadro teorico che garantisca la convergenza dell'approssimazione.

### Scaletta del Modulo

21. **Teoria classica delle EDP:**
    
    - Equazione di Laplace.
    - Equazione del calore (o di diffusione).
    - Equazione del trasporto lineare.
    - Equazione delle onde.
22. **Proprietà generali e classificazione delle equazioni:**
    
    - Classificazione in equazioni ellittiche, paraboliche e iperboliche.
23. **Teoria moderna:**
    
    - Formulazione debole dei problemi ai limiti.
    - Utilizzo di elementi di analisi funzionale.

### Richiami di Analisi

24. **Spazi vettoriali normati:**
    
    - Spazio vettoriale `X` con una norma `|| ||`.
    - Convergenza in norma, successioni di Cauchy, completezza.
    - Spazio di Banach: spazio vettoriale normato completo.
25. **Spazi di funzioni continue:**
    
    - `C⁰(K)`: funzioni continue `f: K → ℝ`, dove `K ⊆ ℝⁿ` è chiuso e limitato.
        
    - Norma:
        $$||f||_{C⁰(K)} = max_{x ∈ K} |f(x)|$$
    
        
    - `C⁰(K)` con questa norma è uno spazio di Banach.
        
    - `C⁰*(ℝⁿ)`: funzioni continue su `ℝⁿ` che tendono a zero all'infinito.
        
    - `C⁰⁰(ℝⁿ)`: funzioni continue a supporto compatto.
        
26. **Spazi di funzioni derivabili:**
    
    - `C¹(Ω)`: funzioni con derivate prime continue su un aperto `Ω ⊆ ℝⁿ`.
        
    - `C¹(Ω̄)`: funzioni con derivate prime continue fino al bordo di `Ω`.
        
    - Norma:
        $$||f||_{C¹(Ω̄)} = ||f||_{C⁰(Ω̄)} + ∑_{i=1}^{n} ||∂f/∂xᵢ||_{C⁰(Ω̄)}$$
        
    - `C¹(Ω̄)` con questa norma è uno spazio di Banach.
        
    - Dominio: insieme aperto e connesso.
        
27. **Spazi Lᵖ:**
    
    - `Lᵖ(Ω)`: funzioni misurabili `f: Ω → ℝ` tali che `∫|f(x)|ᵖ dx < ∞`, dove `Ω ⊆ ℝⁿ` è misurabile.
        
    - Norma:
        
        ```
        ||f||_{Lᵖ(Ω)} = (∫_{Ω} |f(x)|ᵖ dx)^{1/p}
        ```
        
    - `L∞(Ω)`: funzioni essenzialmente limitate su `Ω`.
        
    - Norma:
        
        ```
        ||f||_{L∞(Ω)} = ess sup_{x ∈ Ω} |f(x)|
        ```
        
    - Gli spazi `Lᵖ(Ω)` sono di Banach per ogni `1 ≤ p ≤ ∞`.
        
28. **Spazi di Hilbert:**
    
    - Spazio vettoriale `H` con un prodotto scalare `< , >`.
        
    - Norma indotta dal prodotto scalare:
        
        ```
        ||f|| = √<f, f>
        ```
        
    - Spazio prehilbertiano: spazio vettoriale con prodotto scalare.
        
    - Spazio di Hilbert: spazio prehilbertiano completo rispetto alla norma indotta.
        
    - Disuguaglianza di Cauchy-Schwarz:
        
        ```
        |<f, g>| ≤ ||f|| ||g||
        ```
        
    - Ortogonalità: `f` è ortogonale a `g` se `<f, g> = 0`.
        
    - Esempi:
        
        - `L²(Ω)`: spazio delle funzioni a quadrato integrabile su `Ω` con prodotto scalare:
            
            ```
            <f, g> = ∫_{Ω} f(x)g(x) dx
            ```
            
        - `ℓ²`: spazio delle successioni `x = (xₙ)` tali che `∑xₙ² < ∞` con prodotto scalare:
            
            ```
            <x, y> = ∑xₙyₙ
            ```
            
29. **Operatori lineari continui:**
    
    - `T: X → Y` operatore lineare tra spazi vettoriali normati `X` e `Y`.
        
    - Continuità: se `xₙ → x` in `X`, allora `T(xₙ) → T(x)` in `Y`.
        
    - Equivalenze:
        
        1. `T` è continuo.
        2. `T` è continuo in zero.
        3. `T` è limitato: esiste `C > 0` tale che `||T(x)||_{Y} ≤ C ||x||_{X}` per ogni `x ∈ X`.
    - Norma dell'operatore:
        
        ```
        ||T|| = sup_{x ≠ 0} ||T(x)||_{Y} / ||x||_{X}
        ```
        
        e
        
        ```
        ||T(x)||_{Y} ≤ ||T|| ||x||_{X}
        ```
        
30. **Funzionali lineari continui:**
    
    - `T: X → ℝ` operatore lineare continuo.
    - Spazio duale `X*`: spazio di tutti i funzionali lineari continui su `X`.
    - Esempi:
        - Integrale: `T(f) = ∫f(x) dx`.
        - Valutazione: `T(f) = f(a)`.
        - Il duale di `Lᵖ(Ω)` è `L^{q}(Ω)`, dove `1/p + 1/q = 1`.
#### References



