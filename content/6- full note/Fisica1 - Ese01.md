---
title: "Fisica1 - Ese01"
---

2025-02-21 16:30

_Status: #flashcard_zero  #riscritto_zero   #revisione_zero 

_Tags: [[3- tag/fisica 1]]  [[sbobine]]

## Ese01- Fisica1

### Analisi Dimensionale e Legge del Pendolo

#### Esercizio 1.2: Determinazione della Legge del Pendolo

**Obiettivo**: Determinare la legge del pendolo attraverso considerazioni dimensionali, sapendo che il periodo $T$ di oscillazione di un pendolo semplice dipende dalla lunghezza $L$ del pendolo e dall'accelerazione di gravità locale $g$.

**Passaggi:**

1. **Definizione delle Dimensioni:**
    
    - Periodo di oscillazione ($\tau$): $[ \tau ] = T$ (Tempo).
    - Lunghezza del pendolo ($L$): $[L] = L$ (Lunghezza).
    - Accelerazione di gravità locale ($g$): $[g] = LT^{-2}$ (Lunghezza per Tempo alla meno due). Il professore specifica che $g$ vale 9,81 m/s².
2. **Principio di Omogeneità Dimensionale:**
    
    - In ogni equazione fisica, entrambi i membri devono avere le stesse dimensioni. Questo principio è fondamentale per verificare la correttezza delle formule e per ricavare unità di misura sconosciute.
    - Esempio: $1 \text{ kg} = 1000 \text{ g}$ rispetta il principio perché entrambi i membri rappresentano una massa.
3. **Formulazione della Relazione:**
    
    - Si ipotizza che il periodo di oscillazione $\tau$ dipenda da $m$ (massa), $L$ (lunghezza) e $g$ (accelerazione di gravità) secondo la seguente relazione: $$\tau = K \cdot m^x \cdot L^y \cdot g^z$$ dove $K$ è una costante adimensionale. Il valore di $K$ non è determinato dall'analisi dimensionale.
4. **Analisi Dimensionale dell'Equazione:**
    
    - Si sostituiscono le dimensioni delle grandezze nella relazione: $$T = M^x \cdot L^y \cdot (LT^{-2})^z$$
5. **Riscrittura dell'Equazione:**
    
    - Si raggruppano le dimensioni fondamentali: $$T = M^x \cdot L^{y+z} \cdot T^{-2z}$$
6. **Imposizione delle Condizioni:**
    
    - Si impone che le dimensioni corrispondano a quelle del periodo, ovvero $T$: $$\begin{cases} x = 0 \ y + z = 0 \ -2z = 1 \end{cases}$$
7. **Soluzione del Sistema:**
    
    - Si risolve il sistema di equazioni per trovare gli esponenti: $$\begin{cases} x = 0 \ z = -\frac{1}{2} \ y = \frac{1}{2} \end{cases}$$
8. **Sostituzione degli Esponenti:**
    
    - Si sostituiscono i valori di $x$, $y$ e $z$ nella relazione originale: $$\tau = K \cdot m^0 \cdot L^{\frac{1}{2}} \cdot g^{-\frac{1}{2}}$$
9. **Legge del Pendolo:**
    
    - Si semplifica l'espressione per ottenere la legge del pendolo: $$\tau = K \sqrt{\frac{L}{g}}$$ **Osservazioni**:
        - Il periodo di oscillazione non dipende dalla massa $m$.
        - L'analisi dimensionale non permette di determinare il valore della costante adimensionale $K$.

#### Importanza della Costante Adimensionale K

La costante $K$ è sempre necessaria nell'analisi dimensionale. Anche se a priori non si conosce il suo valore, è importante includerla nella formula. Nella realtà, per il pendolo semplice, $K = 2\pi$, ma questo non può essere determinato solo con l'analisi dimensionale.

### Calcolo Vettoriale

#### Esercizio 2.10: Angolo tra Vettori e Componente Parallela

**Dati**:

- Vettore $\vec{A} = 3\hat{u}_x - \hat{u}_y - 2\hat{u}_z$.
- Vettore $\vec{B} = -\hat{u}_x + 2\hat{u}_y + 7\hat{u}_z$.

**Obiettivi**:

1. Trovare l'angolo $\theta$ compreso tra i due vettori $\vec{A}$ e $\vec{B}$.
2. Trovare il vettore componente di $\vec{A}$ parallelo a $\vec{B}$, espresso mediante le componenti cartesiane.

**Passaggi**:

1. **Calcolo dei Moduli**:
    
    - Modulo di $\vec{A}$: $$|\vec{A}| = \sqrt{3^2 + (-1)^2 + (-2)^2} = \sqrt{9 + 1 + 4} = \sqrt{14}$$
    - Modulo di $\vec{B}$: $$|\vec{B}| = \sqrt{(-1)^2 + 2^2 + 7^2} = \sqrt{1 + 4 + 49} = \sqrt{54} = 3\sqrt{6}$$
2. **Calcolo dei Versori**:
    
    - Versore di $\vec{A}$: $$\hat{u}_A = \frac{\vec{A}}{|\vec{A}|} = \frac{1}{\sqrt{14}}(3\hat{u}_x - \hat{u}_y - 2\hat{u}_z)$$
    - Versore di $\vec{B}$: $$\hat{u}_B = \frac{\vec{B}}{|\vec{B}|} = \frac{1}{3\sqrt{6}}(-\hat{u}_x + 2\hat{u}_y + 7\hat{u}_z)$$
3. **Calcolo del Prodotto Scalare dei Versori**:
    
    - Il prodotto scalare dei versori è uguale al coseno dell'angolo compreso: $$\hat{u}_A \cdot \hat{u}_B = \cos{\theta}$$
    - Calcolo del prodotto scalare: $$\hat{u}_A \cdot \hat{u}_B = \frac{1}{\sqrt{14}} \cdot \frac{1}{3\sqrt{6}} \cdot (3 \cdot (-1) + (-1) \cdot 2 + (-2) \cdot 7) = \frac{-3 - 2 - 14}{3\sqrt{14 \cdot 6}} = \frac{-19}{3\sqrt{84}}$$
    - Quindi: $$\cos{\theta} = \frac{-19}{3\sqrt{84}} \approx -0.69$$
    - L'angolo $\theta$ è: $$\theta = \arccos{(-0.69)} \approx 134^\circ$$
4. **Calcolo della Componente di $\vec{A}$ Parallela a $\vec{B}$**:
    
    - La componente scalare di $\vec{A}$ parallela a $\vec{B}$ è data dalla proiezione di $\vec{A}$ su $\hat{u}_B$: $$A_B = \vec{A} \cdot \hat{u}_B$$
    - Calcolo della componente: $$A_B = (3\hat{u}_x - \hat{u}_y - 2\hat{u}_z) \cdot \frac{1}{3\sqrt{6}}(-\hat{u}_x + 2\hat{u}_y + 7\hat{u}_z) = \frac{1}{3\sqrt{6}}(3 \cdot (-1) + (-1) \cdot 2 + (-2) \cdot 7) = \frac{-19}{3\sqrt{6}}$$
5. **Calcolo del Vettore Componente di $\vec{A}$ Parallelo a $\vec{B}$**:
    
    - Per ottenere il vettore componente $\vec{A}_B$, si moltiplica la componente scalare $A_B$ per il versore $\hat{u}_B$: $$\vec{A}_B = A_B \cdot \hat{u}_B = \frac{-19}{3\sqrt{6}} \cdot \frac{1}{3\sqrt{6}}(-\hat{u}_x + 2\hat{u}_y + 7\hat{u}_z) = \frac{-19}{54}(-\hat{u}_x + 2\hat{u}_y + 7\hat{u}_z)$$ $$\vec{A}_B = \frac{19}{54}\hat{u}_x - \frac{38}{54}\hat{u}_y - \frac{133}{54}\hat{u}_z$$

#### Esercizio 2.14: Proiezione di un Vettore sulla Bisettrice

**Dati**:

- Vettore $\vec{A} = 3\hat{u}_x + 2\sqrt{2}\hat{u}_y + 4\hat{u}_z$.

**Obiettivo**:

- Proiettare il vettore $\vec{A}$ sulla retta bisettrice del quadrante XY.

**Passaggi**:

1. **Definizione del Vettore Bisettrice**:
    
    - Si considera un vettore $\vec{b}_{xy}$ parallelo alla bisettrice del quadrante XY: $$\vec{b}_{xy} = \hat{u}_x + \hat{u}_y$$
2. **Calcolo del Versore della Bisettrice**:
    
    - Si calcola il modulo di $\vec{b}_{xy}$: $$|\vec{b}_{xy}| = \sqrt{1^2 + 1^2} = \sqrt{2}$$
    - Si нормализует $\vec{b}_{xy}$ per ottenere il versore $\hat{u}_{xy}$: $$\hat{u}_{xy} = \frac{\vec{b}_{xy}}{|\vec{b}_{xy}|} = \frac{1}{\sqrt{2}}(\hat{u}_x + \hat{u}_y)$$
3. **Proiezione del Vettore $\vec{A}$ sulla Bisettrice**:
    
    - Si calcola la componente di $\vec{A}$ lungo la direzione di $\hat{u}_{xy}$: $$A_{xy} = \vec{A} \cdot \hat{u}_{xy} = (3\hat{u}_x + 2\sqrt{2}\hat{u}_y + 4\hat{u}_z) \cdot \frac{1}{\sqrt{2}}(\hat{u}_x + \hat{u}_y)$$ $$A_{xy} = \frac{1}{\sqrt{2}}(3 \cdot 1 + 2\sqrt{2} \cdot 1 + 4 \cdot 0) = \frac{3 + 2\sqrt{2}}{\sqrt{2}} = \frac{3}{\sqrt{2}} + 2$$ $$A_{xy} \approx 4.12$$
4. **Calcolo del Vettore Proiettato**:
    
    - Si moltiplica la componente $A_{xy}$ per il versore $\hat{u}_{xy}$ per ottenere il vettore proiettato $\vec{A}_{xy}$: $$\vec{A}_{xy} = A_{xy} \cdot \hat{u}_{xy} = \left(\frac{3}{\sqrt{2}} + 2\right) \cdot \frac{1}{\sqrt{2}}(\hat{u}_x + \hat{u}_y)$$ $$\vec{A}_{xy} = \left(\frac{3}{2} + \sqrt{2}\right)\hat{u}_x + \left(\frac{3}{2} + \sqrt{2}\right)\hat{u}_y$$

#### References



