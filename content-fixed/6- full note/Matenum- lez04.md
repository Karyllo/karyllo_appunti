---
title: Matenum  lez04
description: Appunto automatico
---

2025-02-25 12:45

_Status: #flashcard_finite   #riscritto_zero  #revisione_zero 

_Tags: [[sbobine]]  [[matematica numerica]]

## Matenum- lez04
### **1. Fattorizzazione LU per Matrici Tridiagonali**

#### **1.1. Descrizione del Metodo**

Il metodo della fattorizzazione LU è particolarmente efficace per **matrici tridiagonali**, ovvero matrici con elementi non nulli solo sulla diagonale principale, sulla prima sopra-diagonale e sulla prima sotto-diagonale.

La **fattorizzazione LU** di una matrice tridiagonale $A$ porta a identificare due fattori:

- $L$ (matrice triangolare inferiore) che, in questo caso, è una matrice bidiagonale inferiore con tutti 1 sulla diagonale principale.
- $U$ (matrice triangolare superiore) che, in questo caso, è una matrice bidiagonale superiore.

Inoltre, la sopra-diagonale di $U$ coincide esattamente con la sopra-diagonale della matrice $A$ originale.

#### **1.2. Algoritmo**

L'algoritmo per calcolare la fattorizzazione LU di una matrice tridiagonale ha un costo computazionale di $3n - 1$, significativamente inferiore rispetto al costo di $\frac{2}{3} n^3$ della fattorizzazione LU standard fornita dalla libreria LAPACK.

#### **1.3. Risoluzione di Sistemi Lineari con Fattorizzazione LU**

Dopo aver ottenuto la fattorizzazione LU, il sistema lineare originale $Ax = b$ viene trasformato in due sistemi più semplici:

1. $Ly = b$ (sistema bidiagonale inferiore)
2. $Ux = y$ (sistema bidiagonale superiore)

Risolvere questi sistemi bidiagonali è più economico rispetto alla risoluzione di sistemi triangolari standard.

#### **1.4. Sistema Bidiagonale Inferiore: $Ly = b$**

Consideriamo un sistema bidiagonale inferiore $Ly = b$, dove $L$ è una matrice bidiagonale inferiore:

$L = \begin{bmatrix} 1 & 0 & 0 \\ \beta_2 & 1 & 0 \\ 0 & \beta_3 & 1 \ \end{bmatrix}$, $y = \begin{bmatrix} y_1 \\ y_2 \\ y_3 \\ \end{bmatrix}$, $b = \begin{bmatrix} b_1 \\ b_2 \\ b_3 \end{bmatrix}$

Risolvendo il sistema $Ly = b$, si ottiene:

- $y_1 = b_1$
- $\beta_2 y_1 + y_2 = b_2 \Rightarrow y_2 = b_2 - \beta_2 y_1$
- $\beta_3 y_2 + y_3 = b_3 \Rightarrow y_3 = b_3 - \beta_3 y_2$

Generalizzando per una matrice $L$ di ordine $n$, l'algoritmo è:

- $y_1 = b_1$
- $y_i = b_i - \beta_i y_{i-1}$, per $i = 2, \dots, n$

Questo algoritmo ha un costo di $2n - 1$.

#### **1.5. Sistema Bidiagonale Superiore: $Ux = y$**

Consideriamo un sistema bidiagonale superiore $Ux = y$, dove $U$ è una matrice bidiagonale superiore:

$U = \begin{bmatrix} \alpha_1 & c_1 & 0 \\ 0 & \alpha_2 & c_2 \\ 0 & 0 & \alpha_3 \ \end{bmatrix}$, $x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}$, $y = \begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix}$

Risolvendo il sistema $Ux = y$, si ottiene:

- $\alpha_3 x_3 = y_3 \Rightarrow x_3 = \frac{y_3}{\alpha_3}$
- $\alpha_2 x_2 + c_2 x_3 = y_2 \Rightarrow x_2 = \frac{1}{\alpha_2} (y_2 - c_2 x_3)$
- $\alpha_1 x_1 + c_1 x_2 = y_1 \Rightarrow x_1 = \frac{1}{\alpha_1} (y_1 - c_1 x_2)$

Generalizzando per una matrice $U$ di ordine $n$, l'algoritmo è:

- $x_n = \frac{y_n}{\alpha_n}$
- $x_i = \frac{1}{\alpha_i} (y_i - c_i x_{i+1})$, per $i = n-1, \dots, 1$

Questo algoritmo ha un costo di $3n - 2$.

#### **1.6. Algoritmo di Thomas**

L'**algoritmo di Thomas** combina la fattorizzazione LU di una matrice tridiagonale con la risoluzione dei sistemi bidiagonali inferiore e superiore. Il costo totale dell'algoritmo di Thomas è:

$(3n - 1) + (2n - 1) + (3n - 2) = 8n - 4$

Questo è un risultato notevole, poiché il costo è lineare rispetto alla dimensione del sistema, rendendo l'algoritmo estremamente efficiente per matrici tridiagonali.

### **2. Fattorizzazione di Cholesky per Matrici Simmetriche Definite Positive (SDP)**

#### **2.1. Definizione**

Una matrice $A$ è **simmetrica definita positiva (SDP)** se è simmetrica ($A = A^T$) e tutti i suoi autovalori sono positivi. Per tali matrici, la fattorizzazione LU esiste ed è unica.

#### **2.2. Metodo di Cholesky**

La fattorizzazione di Cholesky decompone una matrice SDP $A$ nella forma:

$A = R^T R$

dove $R$ è una matrice triangolare superiore. Questo significa che è sufficiente calcolare solo un fattore, poiché il fattore triangolare inferiore è semplicemente la trasposta del fattore triangolare superiore.

#### **2.3. Costo Computazionale**

Il costo computazionale della fattorizzazione di Cholesky è circa la metà della fattorizzazione LU classica, ovvero $\frac{1}{3}n^3$.

#### **2.4. Osservazioni Importanti**

A differenza della fattorizzazione LU standard, i fattori diagonali nella fattorizzazione di Cholesky non sono necessariamente uguali a uno. Tuttavia, le entrate diagonali di $R$ saranno tutte quantità maggiori o uguali a zero.

### 3. **Matrici Sparse: Strutturate vs. Non Strutturate**

#### 3.1. Definizioni

- **Matrice sparsa strutturata**: è una matrice in cui gli elementi non nulli si dispongono secondo una struttura ben precisa (ad esempio, matrici diagonali o tridiagonali).
- **Matrice sparsa non strutturata**: è una matrice con pochi elementi non nulli disposti in modo caotico.

#### 3.2. Fattorizzazione LU e Sparsità

- Se $A$ è sparsa e strutturata, i fattori $L$ e $U$ ereditano la struttura.
- Se $A$ è sparsa ma non strutturata, i fattori $L$ e $U$ tendono a riempirsi (fill-in).

#### 3.3. Fill-in

Il **fill-in** è il fenomeno per cui, durante la fattorizzazione LU di una matrice sparsa, i fattori $L$ e $U$ diventano più densi della matrice originale. Questo aumenta il costo computazionale e la memoria richiesta.

#### 3.4. Gestione del Fill-in

Per ridurre il fill-in, si utilizzano algoritmi di riordinamento che permutano le righe e le colonne della matrice per compattare il pattern di sparsità.

### ==**4. Condizionamento di una Matrice**

#### 4.1. Definizione

Il **numero di condizionamento** di una matrice $A$, indicato con $K(A)$, misura quanto la soluzione di un sistema lineare $Ax = b$ è sensibile a piccole perturbazioni nei dati. È definito come:

$K(A) = |A| |A^{-1}|$

dove $| \cdot |$ è una norma matriciale.

#### 4.2. Interpretazione

- Se $K(A)$ è piccolo, la matrice è **ben condizionata**: piccole perturbazioni nei dati portano a piccole perturbazioni nella soluzione.
- Se $K(A)$ è grande, la matrice è **mal condizionata**: piccole perturbazioni nei dati possono portare a grandi perturbazioni nella soluzione.

#### 4.3. Effetto del Condizionamento

Anche se la fattorizzazione LU è accurata, una matrice mal condizionata può portare a soluzioni inaccurate a causa degli errori di arrotondamento e delle perturbazioni nei dati.

#### 4.4. Stima dell'Errore Relativo

L'errore relativo nella soluzione di un sistema lineare è legato al numero di condizionamento dalla seguente disuguaglianza:

$\frac{|\Delta x|}{|x|} \leq K(A) \frac{|\Delta b|}{|b|}$

dove:

- $\Delta x$ è la perturbazione nella soluzione
- $x$ è la soluzione esatta
- $\Delta b$ è la perturbazione nel termine noto $b$

#### 4.5. Calcolo del Condizionamento in Matlab

Matlab fornisce i seguenti comandi per calcolare il numero di condizionamento:

- `cond(A)`: calcola il numero di condizionamento usando la norma spettrale (norma 2).
- `cond(A, p)`: calcola il numero di condizionamento usando la norma $p$.
- `condest(A)`: stima il numero di condizionamento per matrici sparse usando la norma 1.

#### 4.6. Numero di Condizionamento Spettrale

Il numero di condizionamento spettrale, $K_2(A)$, è definito come:

$K_2(A) = \sqrt{\frac{\lambda_{max}(A^T A)}{\lambda_{min}(A^T A)}}$

dove $\lambda_{max}$ e $\lambda_{min}$ sono rispettivamente l'autovalore massimo e minimo di $A^T A$.

Se $A$ è simmetrica definita positiva, allora:

$K_2(A) = \frac{\lambda_{max}(A)}{\lambda_{min}(A)}$

### **5. Norme di Vettori e Matrici**

#### 5.1. Norma di un Vettore


#### 5.1. Norma Euclidea (Norma 2)

Per un vettore $v \in \mathbb{R}^n$, la norma euclidea è definita come:

$||v||_2 = \sqrt{\sum_{i=1}^{n} v_i^2}$

#### 5.2. Norma p

La norma $p$ è una generalizzazione della norma euclidea:

$||v||_p = \left(\sum_{i=1}^{n} |v_i|^p\right)^{\frac{1}{p}}$

#### 5.3. Norma infinito

La norma infinito di un vettore $v$ è definita come il massimo valore assoluto delle sue componenti:

$||v||_{\infty} = \max_{1 \leq i \leq n} |v_i|$

### 2. Norme Matriciali

Una **norma matriciale** è una funzione che assegna una grandezza a una matrice. Esistono diverse norme matriciali, ognuna con proprietà specifiche.

#### 2.1. Norma Indotta

Una **norma indotta** (o norma di оператор) è definita a partire da una norma vettoriale. La norma indotta $p$ di una matrice $A$ è definita come:

$||A||_p = \sup_{v \neq 0} \frac{||Av||_p}{||v||_p}$

dove il $\sup$ è preso su tutti i vettori non nulli $v \in \mathbb{R}^n$.

#### 2.2. Norma 1

La norma 1 di una matrice è il massimo della somma dei valori assoluti delle colonne:

$||A||_1 = \max_{1 \leq j \leq n} \sum_{i=1}^{n} |a_{ij}|$

#### 2.3. Norma infinito

La norma infinito di una matrice è il massimo della somma dei valori assoluti delle righe:

$||A||_{\infty} = \max_{1 \leq i \leq n} \sum_{j=1}^{n} |a_{ij}|$

#### 2.4. Norma 2 (Norma Spettrale)

La norma 2 (o norma spettrale) di una matrice $A$ è definita come la radice quadrata dell'autovalore massimo di $A^T A$:

$||A||_2 = \sqrt{\lambda_{\max}(A^T A)}$

Se $A$ è simmetrica, allora $||A||_2 = \max_i |\lambda_i|$, dove $\lambda_i$ sono gli autovalori di $A$.

#### 2.5. Norma di Frobenius

La **norma di Frobenius** di una matrice $A$ è definita come la radice quadrata della somma dei quadrati di tutti i suoi elementi:

$||A||_F = \sqrt{\sum_{i=1}^{n} \sum_{j=1}^{n} |a_{ij}|^2}$

### 3. Compatibilità tra Norme Vettoriali e Matriciali

Una proprietà importante è la **compatibilità** tra norme vettoriali e matriciali. Se $|| \cdot ||$ è una norma matriciale indotta dalla norma vettoriale $|| \cdot ||$, allora:

$||Av|| \leq ||A|| \cdot ||v||$

per ogni vettore $v$.

### 4. Esempio di Calcolo

**Esempio:** Calcolare la norma 1 della matrice:

$A = \begin{bmatrix} 1 & -2 \\ 3 & 4 \end{bmatrix}$

1. Somma dei valori assoluti per ogni colonna:
    - Colonna 1: $|1| + |3| = 4$
    - Colonna 2: $|-2| + |4| = 6$
2. Prendere il massimo di queste somme:
    - $||A||_1 = \max(4, 6) = 6$

### 5. Numero di Condizionamento e Norme

Il **numero di condizionamento** di una matrice $A$ dipende dalla norma scelta per calcolarlo:

$K(A) = ||A|| \cdot ||A^{-1}||$

Ad esempio, $K_1(A) = ||A||_1 \cdot ||A^{-1}||_1$ e $K_2(A) = ||A||_2 \cdot ||A^{-1}||_2$.

### 6. Utilizzo in MATLAB

In MATLAB, puoi calcolare diverse norme matriciali:

- `norm(A, 1)`: norma 1
- `norm(A, inf)`: norma infinito
- `norm(A, 2)` o `norm(A)`: norma 2 (spettrale)
- `norm(A, 'fro')`: norma di Frobenius }
___
#### 5.2. Norme di Matrici

Una **norma matriciale** è una funzione che assegna un numero reale non negativo a una matrice, soddisfacendo le seguenti proprietà:

- $|A| \geq 0$ per ogni matrice $A$
- $|A| = 0$ se e solo se $A = 0$
- $|\alpha A| = |\alpha| |A|$ per ogni scalare $\alpha$
- $|A + B| \leq |A| + |B|$ per ogni matrice $A$ e $B$

#### 5.3. Norma Indotta

La **norma indotta** (o norma operatoriale) di una matrice $A$ è definita come:

$|A|_p = \sup_{v \neq 0} \frac{|Av|_p}{|v|_p}$

dove $v$ è un vettore e $| \cdot |_p$ è una norma vettoriale.

#### 5.4. Norme Matriciali Comuni

- **Norma 1**: è il massimo della somma dei valori assoluti delle colonne:

$|A|_1 = \max_{1 \leq j \leq n} \sum_{i=1}^{n} |a_{ij}|$

- **Norma infinito**: è il massimo della somma dei valori assoluti delle righe:

$|A|_{\infty} = \max_{1 \leq i \leq n} \sum_{j=1}^{n} |a_{ij}|$

- **Norma 2 (o norma spettrale)**: è la radice quadrata dell'autovalore massimo di $A^T A$:

$|A|_2 = \sqrt{\lambda_{max}(A^T A)}$

- **Norma di Frobenius**: è la radice quadrata della somma dei quadrati di tutti gli elementi:

$|A|_F = \sqrt{\sum_{i=1}^{n} \sum_{j=1}^{n} |a_{ij}|^2}$

### **6. Perturbazioni e Condizionamento**

#### 6.1. Sistemi Perturbati

In pratica, quando si risolve un sistema lineare $Ax = b$ con metodi numerici, si risolve un sistema perturbato:

$(A + \Delta A)(x + \Delta x) = b + \Delta b$

dove $\Delta A$ e $\Delta b$ rappresentano le perturbazioni nella matrice e nel termine noto, rispettivamente, e $\Delta x$ è la perturbazione nella soluzione.

#### 6.2. Fonti delle Perturbazioni

Le perturbazioni sono causate principalmente da:

- Aritmetica floating-point
- Errori nell'algoritmo

#### 6.3. Obiettivo

L'obiettivo è capire come le perturbazioni sui dati ( $\Delta A$ e $\Delta b$ ) influenzano la soluzione ( $\Delta x$ ).

#### 6.4. Matrice di Hilbert

La matrice di Hilbert è un esempio classico di matrice mal condizionata. È definita come:

$a_{ij} = \frac{1}{i + j - 1}$

Risolvere un sistema lineare con una matrice di Hilbert può portare a soluzioni molto inaccurate, anche se si utilizza un metodo di fattorizzazione accurato come LU con pivoting.

#### 6.5. Conclusioni

- La scelta del metodo numerico dipende dalle proprietà della matrice (tridiagonale, SDP, sparsa, ecc.).
- È fondamentale valutare il condizionamento della matrice prima di risolvere il sistema.
- Matrici mal condizionate possono portare a soluzioni inaccurate, anche con metodi accurati.
- Algoritmi di riordinamento possono ridurre il fill-in nelle matrici sparse non strutturate.
____

### **1. Introduzione al Problema del Condizionamento**

Il condizionamento di una matrice è un concetto cruciale nell'analisi numerica, specialmente quando si risolvono sistemi lineari. Anche se un metodo di fattorizzazione come LU con pivoting produce una fattorizzazione accurata, la soluzione del sistema lineare può essere inaccurata se la matrice è **mal condizionata**.

### **2. Esempio Illustrativo: La Matrice di Hilbert**

Per illustrare questo problema, il professore introduce un esempio specifico: la **matrice di Hilbert** (o matrice di invert, come menzionato nella trascrizione). Questa matrice è definita come:

$a_{ij} = \frac{1}{i + j - 1}$
$$
\begin{pmatrix}
1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\
\frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\
\frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
\frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1}
\end{pmatrix}
$$

La matrice di Hilbert è simmetrica e definita positiva (SDP), il che significa che la fattorizzazione LU esiste ed è unica. Tuttavia, è anche notoriamente mal condizionata.

#### **2.1. Setup dell'Esperimento Numerico**

Per dimostrare il problema, si imposta un esperimento numerico in MATLAB:

1. Si sceglie una dimensione $n$ per la matrice $A_n$ e si crea la matrice di Hilbert di dimensione $n$.
2. Si sceglie un termine noto $b_n$ tale che la soluzione esatta $x_n$ sia un vettore di tutti 1. Questo facilita il confronto tra la soluzione calcolata e quella esatta. Il termine noto è scelto come $b_n = A_n \cdot \mathbb{1}$, dove $\mathbb{1}$ è il vettore con tutte le componenti uguali a 1.
3. Si calcola la fattorizzazione LU di $A_n$ con pivoting e si risolve il sistema lineare $A_n x = b_n$ utilizzando MATLAB.
4. Si confronta la soluzione ottenuta con la soluzione esatta e si calcola l'errore relativo.

#### **2.2. ==Monitoraggio dell'Accuratezza**

Per monitorare l'accuratezza della fattorizzazione LU, si calcola la matrice residua $R_n$ come:

$R_n = P_n A_n - L_n U_n$

dove $P_n$ è la matrice di permutazione ottenuta dal pivoting. Si verifica che il massimo delle entrate di $R_n$ sia vicino a zero, il che indica che la fattorizzazione LU è accurata.

Si calcola l'errore relativo $\epsilon_n$ come:

$$\epsilon_n = \frac{||x_n - \tilde{x}_n||}{||x_n||}$$

dove $\tilde{x}_n$ è la soluzione calcolata da MATLAB e $|| \cdot ||$ indica la norma euclidea.

#### **2.3. Risultati dell'Esperimento**

Si osserva che, anche se la fattorizzazione LU è accurata (cioè, $||R_n||_{\infty}$ è piccolo), l'errore relativo $\epsilon_n$ aumenta rapidamente con $n$. In particolare, per $n \geq 13$, l'errore relativo diventa maggiore di 10, il che significa un errore del 1000%.

Questo dimostra che, anche con una fattorizzazione accurata, una matrice mal condizionata può portare a risultati disastrosi.

### **3. Analisi del Problema: Sistemi Perturbati**

Per capire perché succede questo, il professore spiega che MATLAB non risolve il sistema originale $Ax = b$, ma un sistema perturbato:

$(A + \Delta A)(x + \Delta x) = b + \Delta b$

dove $\Delta A$ e $\Delta b$ sono perturbazioni nei dati dovute all'aritmetica floating-point e agli errori nell'algoritmo.

#### **3.1. Fonti delle Perturbazioni**

Le perturbazioni $\Delta A$ e $\Delta b$ sono causate principalmente da due fattori:

- **Aritmetica floating-point**: I calcoli vengono eseguiti con precisione finita, il che introduce errori di arrotondamento.
- **Algoritmo stesso**: La scelta dei moltiplicatori e le operazioni eseguite nell'algoritmo possono amplificare gli errori di arrotondamento.

#### **3.2. Obiettivo: Legare Perturbazioni e Risultati**

L'obiettivo è capire come le perturbazioni nei dati influenzano la soluzione. In un mondo ideale, piccole perturbazioni nei dati dovrebbero portare a piccole perturbazioni nella soluzione. Tuttavia, questo non è sempre il caso, specialmente con matrici mal condizionate.

### **4. Il Numero di Condizionamento**

Il **numero di condizionamento** di una matrice $A$, indicato con $K(A)$, quantifica la sensibilità della soluzione di un sistema lineare alle perturbazioni nei dati. È definito come:

$K(A) = ||A|| \cdot ||A^{-1}||$

dove $|| \cdot ||$ è una norma matriciale.

#### **4.1. Interpretazione del Numero di Condizionamento**

- Se $K(A)$ è piccolo, la matrice è **ben condizionata**: piccole perturbazioni nei dati portano a piccole perturbazioni nella soluzione.
- Se $K(A)$ è grande, la matrice è **mal condizionata**: piccole perturbazioni nei dati possono portare a grandi perturbazioni nella soluzione.

#### **4.2. Stima dell'Errore Relativo**

L'errore relativo nella soluzione di un sistema lineare è legato al numero di condizionamento dalla seguente disuguaglianza:

$$\frac{||\Delta x||}{||x||} \leq K(A) \frac{||\Delta b||}{||b||}$$

dove:

- $\Delta x$ è la perturbazione nella soluzione
- $x$ è la soluzione esatta
- $\Delta b$ è la perturbazione nel termine noto $b$

Questa disuguaglianza mostra che l'errore relativo nella soluzione può essere amplificato dal numero di condizionamento.

#### **4.3. Esempio Numerico**

Supponiamo che la perturbazione relativa nei dati sia $10^{-10}$. Se $K(A) = 1$, allora l'errore relativo nella soluzione sarà al più $10^{-10}$. Tuttavia, se $K(A) = 10^4$, allora l'errore relativo nella soluzione potrebbe essere fino a $10^{-6}$, che è molto più grande.

#### **4.4. Calcolo del Condizionamento in MATLAB**

MATLAB fornisce diversi comandi per calcolare il numero di condizionamento:

- `cond(A)`: Calcola il numero di condizionamento usando la norma spettrale (norma 2).
- `cond(A, p)`: Calcola il numero di condizionamento usando la norma $p$.
- `condest(A)`: Stima il numero di condizionamento per matrici sparse usando la norma 1.

#### **4.5. Numero di Condizionamento Spettrale**

Il numero di condizionamento spettrale, $K_2(A)$, è definito come:

$K_2(A) = \sqrt{\frac{\lambda_{max}(A^T A)}{\lambda_{min}(A^T A)}}$

dove $\lambda_{max}$ e $\lambda_{min}$ sono rispettivamente l'autovalore massimo e minimo di $A^T A$.

Se $A$ è simmetrica definita positiva, allora:

$K_2(A) = \frac{\lambda_{max}(A)}{\lambda_{min}(A)}$

### **5. Dimostrazione della Disuguaglianza Fondamentale**

Il professore fornisce una dimostrazione della disuguaglianza che lega l'errore relativo nella soluzione all'errore relativo nei dati e al numero di condizionamento.

Si parte dal sistema esatto:

$Ax = b$

e dal sistema perturbato:

$A\tilde{x} = \tilde{b} = b + \Delta b$

==Si sottrae membro a membro e si ottiene:

$A(x - \tilde{x}) = \Delta b$

Da cui:

$x - \tilde{x} = A^{-1} \Delta b$

Prendendo le norme e usando la compatibilità tra norma matriciale e norma vettoriale:

$||x - \tilde{x}|| \leq ||A^{-1}|| \cdot ||\Delta b||$

Si riparte dal sistema esatto e si prende la norma:

$||b|| = ||Ax|| \leq ||A|| \cdot ||x||$

Da cui:

$\frac{1}{||x||} \leq \frac{||A||}{||b||}$

Combinando le due disuguaglianze, si ottiene:

$\frac{||x - \tilde{x}||}{||x||} \leq ||A|| \cdot ||A^{-1}|| \frac{||\Delta b||}{||b||} = K(A) \frac{||\Delta b||}{||b||}$

che è la disuguaglianza desiderata.

### **6. Conclusioni**

In sintesi, il condizionamento di una matrice è un fattore cruciale da considerare quando si risolvono sistemi lineari. Anche se un metodo di fattorizzazione è accurato, una matrice mal condizionata può portare a soluzioni molto inaccurate. Pertanto, è sempre consigliabile calcolare il numero di condizionamento prima di risolvere un sistema lineare e, se la matrice è mal condizionata, considerare metodi alternativi o tecniche di regolarizzazione.
#### References
[[Appunti Mate Num- lez04.pdf]]



