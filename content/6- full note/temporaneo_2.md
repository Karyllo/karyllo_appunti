# Appunti Lezione: Sistemi Sovradeterminati, Minimi Quadrati e Collegamento alle Equazioni Normali

## 1. Introduzione ai Sistemi Sovradeterminati

Un sistema lineare $A x = y$ si dice **sovradeterminato** quando il numero di equazioni (righe) $m$ è maggiore del numero di incognite (colonne) $n$, cioè $m > n$. 

In tali casi, il sistema in generale **non ammette soluzione esatta** e quindi si modifica la definizione di soluzione, cercando la **soluzione nel senso dei minimi quadrati**:

> Trovare $x^* \in \mathbb{R}^n$ tale che minimizzi $\| A x - y \|^2$.

## 2. Soluzione nei Minimi Quadrati

La soluzione nel senso dei minimi quadrati si può ottenere:

- **Via equazioni normali**: se $A$ ha rango pieno, allora la soluzione $x^*$ soddisfa il sistema:
  $$ A^T A x^* = A^T y $$

- **Via fattorizzazione QR**: utile per evitare instabilità numerica.

## 3. Sistemi Sovradeterminati a Rango Non Massimo

Se $A$ non ha rango massimo, il problema di minimi quadrati ha **infinitamente molte soluzioni**. In questo caso si cerca:

> La soluzione che **minimizza la norma della soluzione** tra tutte quelle che minimizzano la norma del residuo:
$$ \min_{x \in \mathbb{R}^n} \| x \| \quad \text{t.c.} \quad \| A x - y \| = \min $$

## 4. Collegamento con la Regressione Polinomiale

### 4.1 Polinomio dei Minimi Quadrati

Data una serie di dati $(x_i, y_i)$, si vuole trovare un polinomio $f_T(x)$ di grado $m$ che minimizza la somma degli scarti quadratici:

$$ \sum_{i=0}^n \left( y_i - f_T(x_i) \right)^2 $$

dove $f_T(x) = a_0 + a_1 x + \dots + a_m x^m$.

### 4.2 Problema di Minimizzazione Equivalente

Si definisce un generico polinomio $p_m(x) = b_0 + b_1 x + \dots + b_m x^m$, con $\vec{b} = [b_0, \dots, b_m]^T$, e si cerca:

$$ \vec{a} = \arg\min_{\vec{b} \in \mathbb{R}^{m+1}} \sum_{i=0}^n \left( y_i - (b_0 + b_1 x_i + \dots + b_m x_i^m) \right)^2 $$
![[Pasted image 20250425104620.png]]
### 4.3 Forma Vettoriale del Problema

Definiamo:
- $\vec{a} = [a_0, \dots, a_m]^T$
- $\vec{y} = [y_0, \dots, y_n]^T$
- $A$ matrice di Vandermonde:

$$
A = \begin{pmatrix}
1 & x_0 & x_0^2 & \dots & x_0^m \\
1 & x_1 & x_1^2 & \dots & x_1^m \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_n & x_n^2 & \dots & x_n^m
\end{pmatrix}
$$

Il problema si riscrive come:
$$ \vec{a} = \arg\min_{\vec{b} \in \mathbb{R}^{m+1}} \| A \vec{b} - \vec{y} \|^2 $$

Questa quantità rappresenta la **norma al quadrato del residuo**. La minimizzazione coincide con la risoluzione del sistema sovradeterminato nel senso dei minimi quadrati.

### 4.4 Coincidenza con le Equazioni Normali

Osservazione: questa formulazione è esattamente la stessa già incontrata nel caso della regressione lineare! Le equazioni normali sono:

$$ A^T A \vec{a} = A^T \vec{y} $$

#### Calcolo esplicito dei termini:

- La matrice $A^T A$ ha componenti:
  $$ (A^T A)_{jk} = \sum_{i=0}^n x_i^{j+k} \quad \text{per} \quad j,k = 0,\dots,m $$

  Quindi:
  $$ A^T A = \begin{pmatrix}
  \sum x_i^0 & \sum x_i^1 & \dots & \sum x_i^m \\
  \sum x_i^1 & \sum x_i^2 & \dots & \sum x_i^{m+1} \\
  \vdots & \vdots & \ddots & \vdots \\
  \sum x_i^m & \sum x_i^{m+1} & \dots & \sum x_i^{2m}
  \end{pmatrix} $$

- Il vettore $A^T \vec{y}$ ha componenti:
  $$ (A^T \vec{y})_j = \sum_{i=0}^n x_i^j y_i $$

  Quindi:
  $$ A^T \vec{y} = \begin{pmatrix}
  \sum y_i \\
  \sum x_i y_i \\
  \vdots \\
  \sum x_i^m y_i
  \end{pmatrix} $$

> **Conclusione**: il sistema delle equazioni normali derivato da una visione algebrica (minimizzazione $\| A \vec{b} - \vec{y} \|^2$) coincide esattamente con il sistema derivato con l’approccio analitico via derivate parziali.

## 5. Sistemi Sottodeterminati

### 5.1 Definizione

Un sistema lineare $A x = y$ è **sottodeterminato** se $A \in \mathbb{R}^{m \times n}$ con $m < n$, quindi meno equazioni che incognite. In questo caso:

- Le soluzioni sono **infinitamente molte**.
- Si cerca la **soluzione con norma minima**:

$$ x^* = \arg\min_{x \in \mathbb{R}^n} \| x \| \quad \text{t.c.} \quad A x = y $$

### 5.2 Ipotesi di rango massimo

Si assume che $\operatorname{rank}(A) = m$. In questo caso si può usare la **fattorizzazione QR** dell'**$A^T$** oppure la pseudoinversa.

## 6. Conclusione: Collegamento dei Due Metodi

La lezione ha mostrato come:

- Il problema dell'approssimazione polinomiale (retta di regressione generalizzata) è un esempio di problema di **minimi quadrati**.
- La sua formulazione coincide perfettamente con il problema di risolvere un sistema **sovradeterminato a rango pieno** nel senso dei minimi quadrati.
- I due approcci (analitico e algebrico) portano **allo stesso sistema lineare**: quello delle equazioni normali.

Questo chiude il cerchio tra la regressione, i sistemi lineari e i problemi di ottimizzazione quadratica lineare.

# Appunti Lezione: Sistemi Sovradeterminati, Minimi Quadrati e Derivate - Parte 2

## 7. Sistemi Sottodeterminati

### 7.1 Motivazione ed Esempio Introduttivo

Quando un sistema lineare $A x = y$ ha **meno equazioni che incognite**, ossia $m < n$, il sistema si dice **sottodeterminato**. 

Esempio semplice: considerare l'insieme delle **rette passanti per un punto**: sono infinite. Serve una **condizione aggiuntiva** per selezionare una soluzione.

Nel contesto dei sistemi lineari, cerchiamo la **soluzione classica** che soddisfa $A x = y$ ma che abbia **norma minima**:

> Troviamo $x^* \in \mathbb{R}^n$ tale che $A x^* = y$ e $\|x^*\|$ minimo.

### 7.2 Definizione della Soluzione a Norma Minima

Poniamo:
$$
x^* = \arg\min_{x \in \mathbb{R}^n} \| x \| \quad \text{t.c.} \quad A x = y
$$

La soluzione $x^*$ soddisfa due condizioni:
1. $A x^* = y$ (soluzione in senso classico)
2. $x^*$ ha norma minima tra tutte le soluzioni

Si dimostra che questa soluzione ha forma chiusa:
$$
x^* = A^T (A A^T)^{-1} y
$$

### 7.3 Verifica delle Due Condizioni

#### Condizione 1: $A x^* = y$

Sostituiamo l’espressione di $x^*$:
$$
A x^* = A A^T (A A^T)^{-1} y = y
$$

Infatti $A A^T (A A^T)^{-1} = I$, la matrice identità. Quindi $x^*$ soddisfa il sistema.

#### Condizione 2: $\|x^*\|$ è minima

Si dimostra che $x^*$ ha **norma minima** con il seguente ragionamento:

Sia $x$ una qualunque soluzione del sistema, cioè $A x = y$. Allora:
$$
\|x\|^2 = \|x^* + (x - x^*)\|^2 = \|x^*\|^2 + \|x - x^*\|^2 + 2 (x - x^*)^T x^*
$$

**Osservazione:** il termine misto è nullo. Per verificarlo usiamo il fatto che $A x = A x^* = y$ e quindi:
$$
A(x - x^*) = 0 \Rightarrow x - x^* \in \ker(A)
$$
Inoltre $x^* \in \operatorname{Im}(A^T)$, e quindi i due spazi sono ortogonali.

Quindi il prodotto scalare $(x - x^*)^T x^* = 0$.

Segue:
$$
\|x\|^2 = \|x^*\|^2 + \|x - x^*\|^2 \geq \|x^*\|^2
$$

### 7.4 Problemi Numerici e QR

Anche qui, come nei sovradeterminati, il calcolo esplicito è **numericamente instabile**. Si preferisce usare la **fattorizzazione QR della matrice trasposta**:

$$
A^T = \widetilde{Q} \widetilde{R}
$$

Allora:
$$
x^* = \widetilde{Q} (\widetilde{R}^T)^{-1} y
$$

> Questo sfrutta la struttura ortogonale di $\widetilde{Q}$ e la superiorità triangolare di $\widetilde{R}$.

## 8. Approssimazione delle Derivate

### 8.1 Motivazione Fisica e Ingegneristica

Spesso è più interessante monitorare **la variazione** di una funzione piuttosto che la funzione stessa:

- **Ingegneria civile**: stress e deformazioni dipendono da $f'$ (derivata dello spostamento)
- **Fluidodinamica**: il flusso (cioè derivata) di inquinanti è più importante della concentrazione istantanea

### 8.2 Definizione Analitica

La derivata prima si definisce come:
$$
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

> Problema: il limite non è computabile numericamente.

### 8.3 Differenze Finite in Avanti (Forward)

Schema:
$$
\delta^+ f(x) = \frac{f(x + h) - f(x)}{h}
$$

Errore stimato usando Taylor (con $f \in C^2$):
$$
f'(x) - \delta^+ f(x) = -\frac{h}{2} f''(\alpha), \quad \alpha \in (x, x+h)
$$

**Conclusione:** schema **di ordine 1**. L'errore è $O(h)$.

### 8.4 Differenze Finite all’Indietro (Backward)

Schema:
$$
\delta^- f(x) = \frac{f(x) - f(x - h)}{h}
$$

Errore:
$$
f'(x) - \delta^- f(x) = \frac{h}{2} f''(\beta), \quad \beta \in (x-h, x)
$$

**Conclusione:** anche questo è **schema di ordine 1**, errore $O(h)$.

### 8.5 Differenze Finite Centrate (Centered)

Schema:
$$
\delta f(x) = \frac{f(x + h) - f(x - h)}{2h}
$$

Sviluppi di Taylor fino al terzo ordine, con $f \in C^3$, portano a:
$$
f'(x) - \delta f(x) = -\frac{h^2}{6} f^{(3)}(\xi), \quad \xi \in (x - h, x + h)
$$

**Conclusione:** schema **di ordine 2**, errore $O(h^2)$.

> **Nota**: questo schema richiede più regolarità (classe $C^3$) ma converge più rapidamente.

### 8.6 Tabella Riepilogativa degli Schemi

| Schema                        | Formula                                              | Ordine | Regolarità richiesta |
|------------------------------|------------------------------------------------------|--------|------------------------|
| Differenze in avanti         | $\delta^+ f(x) = \frac{f(x+h) - f(x)}{h}$            | 1      | $C^2$                  |
| Differenze all'indietro      | $\delta^- f(x) = \frac{f(x) - f(x-h)}{h}$            | 1      | $C^2$                  |
| Differenze finite centrate   | $\delta f(x) = \frac{f(x+h) - f(x-h)}{2h}$           | 2      | $C^3$                  |

### 8.7 Considerazioni Pratiche

- Ai **bordi** dell’intervallo, non è possibile usare il centrato:
  - In $a$: si usa $\delta^+$
  - In $b$: si usa $\delta^-$

- **Scelta dello schema**:
  - Se possibile, usare quello **centrato**: più preciso
  - Se la funzione è solo $C^2$, usare schema in avanti o indietro

- L’**errore** in ciascun caso può essere stimato con il **massimo della derivata** coinvolta nel resto di Taylor

> **Esercizio consigliato**: mostrare che $\delta^+ f(x)$ corrisponde alla derivata della retta che interpola i punti $(x, f(x))$ e $(x+h, f(x+h))$.

> **Approfondimento**: costruire lo sviluppo di Taylor completo per ogni schema e verificarne l’errore.

## 9. Conclusione

Con questa lezione si chiude il capitolo sui sistemi lineari indeterminati. A seguire, il corso affronterà temi di **approssimazione di derivate e integrali**, proseguendo il percorso sull’interpolazione e l’analisi numerica.

---

Se vuoi che espanda anche la parte degli esercizi o inserisca dei box di sintesi visuale, fammi sapere!



