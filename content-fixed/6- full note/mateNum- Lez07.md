---
title: mateNum  Lez07
description: Appunto automatico
---

2025-03-04 16:47

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:  [[sbobine]]   [[matematica numerica]]

## mateNum- Lez07


### Convergenza dei Metodi Iterativi di Richardson

#### Condizione Necessaria e Sufficiente

Per tutti gli schemi iterativi della forma $x^{k+1} = Bx^k + G$, si può utilizzare la condizione necessaria e sufficiente che richiede la consistenza più il fatto che il **raggio spettrale** della corrispondente matrice $B$ sia strettamente minore di 1.

#### Condizioni Sufficienti per Jacobi e Gauss-Seidel

Esistono condizioni sufficienti che riguardano la matrice $A$ che permettono di stabilire la convergenza di Jacobi e Gauss-Seidel:

- **Jacobi**: Se $A$ è una matrice a dominanza diagonale stretta per righe o per colonne, allora Jacobi è convergente.
- **Gauss-Seidel**: Valgono le stesse affermazioni di Jacobi, e in più, se $A$ è una matrice simmetrica definita positiva, allora Gauss-Seidel è convergente.

### Confronto tra Jacobi e Gauss-Seidel

In generale, si potrebbe pensare che Gauss-Seidel converga meglio di Jacobi perché utilizza in corso le componenti già aggiornate. Tuttavia, ci sono casi in cui Jacobi converge e Gauss-Seidel diverge, o Jacobi performa meglio di Gauss-Seidel.

#### Proposizione

Se $A$ è una matrice di ordine $n$ a elementi reali tridiagonale e non singolare, con tutte le entrate diagonali $a_{ii}$ diverse da 0 per $i$ da 1 a $n$, allora:

- Gauss-Seidel e Jacobi convergono entrambi o divergono entrambi.
- Se entrambi convergono, il raggio spettrale della matrice $B$ associata a Gauss-Seidel è uguale al quadrato del raggio spettrale della matrice di Jacobi: $\rho(B_{GS}) = \rho(B_{Jac})^2$.

#### Esempio

Supponiamo che il raggio spettrale della matrice di iterazione associata a Jacobi sia $\rho(B_{Jac}) = \frac{1}{4}$. Fissiamo una tolleranza $TOL$ e cerchiamo il numero minimo di iterazioni $k \in \mathbb{N}$ tale che $\rho(B_{Jac})^k \le TOL$.

$$ \left(\frac{1}{4}\right)^k \le TOL $$

$$ \frac{1}{TOL} \le 4^k $$

$$ \log_4\left(\frac{1}{TOL}\right) \le k $$

Quindi, $k \ge \lceil\log_4\left(\frac{1}{TOL}\right)\rceil$.

Per Gauss-Seidel, $\rho(B_{GS}) = \left(\frac{1}{4}\right)^2 = \frac{1}{16}$. Quindi:

$$ \left(\frac{1}{16}\right)^k \le TOL $$

$$ \frac{1}{TOL} \le 16^k = (4^2)^k = 4^{2k} $$

$$ \log_4\left(\frac{1}{TOL}\right) \le 2k $$

$$ k \ge \lceil{\frac{1}{2}\log_4\left(\frac{1}{TOL}\right)}\rceil $$

Questo esempio mostra che il numero di iterazioni richieste da Gauss-Seidel è circa la metà di quelle richieste da Jacobi per raggiungere la stessa accuratezza.

**Esempio numerico**: Risolvendo un sistema $Ax = b$ con $A$ tridiagonale $$
\begin{bmatrix}
  3 & -1 & 0 & \cdots & 0 \\
  -2 & 3 & -1 & \cdots & 0 \\
  0 & -2 & 3 & \cdots & 0 \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  0 & 0 & 0 & \cdots & 3
\end{bmatrix}
$$, e $b = \begin{bmatrix} 1,\cdots, 1 \end{bmatrix}$ si trova che Jacobi richiede  $it_j=$ 277 iterazioni mentre Gauss-Seidel ne richiede $it_{GS}=$ 143 per $x^{(0)}=0$ una tolleranza di $10^{-12}$.

### Convergenza di JOR e SOR

#### JOR

Se $A$ è una matrice simmetrica definita positiva, allora lo schema di JOR converge se $0 < \omega < \frac{2}{\rho(D^{-1}A)}$, dove $D$ è la diagonale di $A$ (il precondizionatore di Jacobi e JOR).

#### SOR

- Se $A$ è simmetrica definita positiva, allora SOR converge se e solo se $0 < \omega < 2$.
- Se $A$ è simmetrica definita positiva e tridiagonale, allora SOR converge per $0 < \omega < 2$ e esiste un valore ottimale per il parametro di rilassamento $\omega$.

$$ \omega_{opt} = \frac{2}{1 + \sqrt{1 - \rho(B_{Jac})^2}} $$

Questo valore ottimale massimizza la velocità di convergenza.

### Criteri di Arresto nelle Iterazioni

#### Introduzione

Quando si implementano metodi iterativi per approssimare la soluzione di un sistema lineare, è fondamentale stabilire dei criteri di arresto per interrompere il processo iterativo. Questi criteri servono a bilanciare l'accuratezza della soluzione con il costo computazionale.

#### Criteri di Arresto Principali

1. **Numero Massimo di Iterazioni**:
    - È **cautelativo** fissare un numero massimo di iterazioni ($N_{\text{max}}$).
    - La scelta di $N_{\text{max}}$ è **arbitraria** e dipende dall'utente.
    - Serve a **garantire** che l'algoritmo termini anche se la convergenza è lenta.
2. **Controllo sull'Errore (Tolleranza)**:
    - Si cerca un indice $k$ tale che l'errore (la differenza tra la soluzione esatta $x$ e l'approssimazione $x^k$) sia minore di una tolleranza fissata ($\text{tol}$).
    - Matematicamente: $|x - x^k| < \text{tol}$.
    - In pratica, **non si conosce** $x$, quindi si utilizza uno stimatore $S$.
    - Si arresta il loop quando $S < \text{tol}$, combinando questo criterio con il numero massimo di iterazioni.

#### Stimatore $S$ e Affidabilità

- L'obiettivo è trovare una quantità $S$ che **surroghi** l'errore, ovvero che lo approssimi.
    
- Idealmente, $S$ dovrebbe essere molto vicino all'errore reale.
    
- Si introduce una costante $C$ tale che $\text{Errore} \approx C \cdot S$.
    
    - Se $C$ è **piccola** (dell'ordine di $10^0$ o $10^1$), lo stimatore è **affidabile**.
    - Se $C$ è **grande** (es. $3 \times 10^6$), lo stimatore **non è affidabile**.
- Si utilizzano **due stimatori** ($S_1$ e $S_2$) per avere alternative nel caso uno non sia affidabile.
    

### Stimatore 1: Residuo Relativo

#### Definizione del Residuo

- Il residuo $r^k$ è definito come $r^k = b - Ax^k$, dove $x^k$ è l'approssimazione della soluzione al passo $k$.
    
- Il razionale è che, se $x^k$ fosse la soluzione esatta $x$, allora $r^k$ sarebbe zero.
    
- Si utilizza il **residuo relativo** come stimatore $S_1$:
    
    $S_1 = \frac{|r^k|}{|b|}$
    
- Si cerca il minimo $k$ tale che $\frac{|r^k|}{|b|} \leq \text{tol}$.
    

#### Legame con l'Errore Relativo

- Si vuole trovare una relazione tra l'errore relativo e il residuo relativo:
    
    $\frac{|x - x^k|}{|x|} \leq C \cdot \frac{|r^k|}{|b|}$
    
- La costante $C$ in questo caso è il **numero di condizionamento** $K(A)$ della matrice $A$.
    

#### Numero di Condizionamento

- Se la matrice $A$ è **ben condizionata** ($K(A)$ piccolo), allora $S_1$ è uno stimatore **affidabile**.
- Se la matrice $A$ è **mal condizionata** ($K(A)$ grande), allora $S_1$ **non è affidabile**.
- Il numero di condizionamento è legato alla **sensibilità** della soluzione del sistema lineare alle perturbazioni nei dati.

#### Derivazione della Relazione

- Si parte dalla relazione nota (vista durante lo studio del condizionamento):
    
    $\frac{|\delta x|}{|x|} \leq K(A) \frac{|\delta b|}{|b|}$
    
- Dove $\delta x$ è la perturbazione sulla soluzione e $\delta b$ è la perturbazione sul dato.
    
- Si identifica $\delta b$ con $-r^k$, ottenendo:
    
    $\frac{|x - x^k|}{|x|} \leq K(A) \frac{|r^k|}{|b|}$
    

### Stimatore 2: Incremento

#### Definizione dell'Incremento

- L'incremento $\delta^k$ è definito come la differenza tra due iterate successive: $\delta^k = x_{k+1} - x^k$.
- Questo stimatore è usato per controllare l'**errore assoluto**.

#### Relazione con l'Errore Assoluto

- Si cerca una relazione tra l'errore assoluto e l'incremento:
    
    $|x - x^k| \leq C \cdot |\delta^k|$
    
- Si aggiunge e sottrae $x_{k+1}$ all'errore:
    
    $|x - x^k| = |x - x_{k+1} + x_{k+1} - x^k|$
    
- Si ottiene:
    
    $|x - x^k| = |(x - x_{k+1}) + (x_{k+1} - x^k)| = |e_{k+1} + \delta^k|$
    
- Usando la disuguaglianza triangolare:
    
    $|e_{k+1} + \delta^k| \leq |e_{k+1}| + |\delta^k|$
    

#### Ulteriori Passaggi (con $B$ Simmetrica Definitiva Positiva)

- Si assume che la matrice di precondizionamento $B$ sia simmetrica definita positiva per semplificare i calcoli.
    
- Si usa la relazione $e_{k+1} = B e^k$, quindi $|e_{k+1}| = |B e^k|$.
    
- Usando la compatibilità tra norma matriciale e vettoriale:
    
    $|B e^k| \leq |B| |e^k|$
    
    
- Si ha:
    
    $|x - x^k| \leq |B| |e^k| + |\delta^k|$
    
- Da cui:
    
    $|e^k| \leq |B| |e^k| + |\delta^k|$
    
- Se $B$ è simmetrica definita positiva, allora $|B|_2 = \rho(B)$, il raggio spettrale di $B$.
    
- Riarrangiando:
    
    $|e^k|(1 - \rho(B)) \leq |\delta^k|$
    
- Infine:
    
    $|x - x^k| \leq \frac{1}{1 - \rho(B)} |\delta^k|$
    

#### Affidabilità dello Stimatore

- La costante $C$ è $\frac{1}{1 - \rho(B)}$.
- Affinché $S_2$ sia affidabile, $\rho(B)$ deve essere il più vicino possibile a zero.
- Questo significa che il metodo deve convergere **velocemente**.

#### Conclusioni

- Se la matrice $A$ è ben condizionata, si può usare il residuo relativo $S_1$.
- Se il metodo converge velocemente, si può usare l'incremento $S_2$.
- In caso contrario, è necessario utilizzare altri metodi.

### Convergenza del Metodo di Richardson Stazionario

**Teorema di convergenza**: Per un generico schema di Richardson stazionario, con precondizionatore invertibile $P$, la convergenza è garantita indipendentemente dalla scelta del guess iniziale $\forall x_0 \in \mathbb{R}^n$ se e solo se il parametro di accelerazione $\alpha$ soddisfa una specifica relazione.

**Condizione necessaria e sufficiente**: La condizione è definita in termini degli autovalori $\lambda_i$ della matrice precondizionata $P^{-1}A$. In particolare, $\alpha$ deve soddisfare la seguente disuguaglianza:

$$2 \frac{Re(\lambda_i)}{\alpha |\lambda_i|^2} > 1 \quad \forall i$$

dove:

- $Re(\lambda_i)$ è la parte reale dell'autovalore $\lambda_i$
- $|\lambda_i|^2$ è il modulo quadrato dell'autovalore $\lambda_i$

**Osservazioni**:

- Anche se la matrice $A$ ha coefficienti reali, gli autovalori $\lambda_i$ di $P^{-1}A$ possono essere complessi.
- Se gli autovalori sono reali, la condizione si semplifica.

### Raggio Spettrale e Matrice di Iterazione

La condizione di convergenza è strettamente legata al raggio spettrale della matrice di iterazione.

**Matrice di iterazione**: Per il metodo di Richardson stazionario, la matrice di iterazione $B_\alpha$ è data da:

$B_\alpha = I - \alpha P^{-1}A$

dove $I$ è la matrice identità.

**Autovalori di $B_\alpha$**: Se $\lambda_i$ sono gli autovalori di $P^{-1}A$, allora gli autovalori corrispondenti di $B_\alpha$ sono:

$1 - \alpha \lambda_i$

**Condizione di convergenza basata sul raggio spettrale**: La convergenza è assicurata se il modulo di questi autovalori è minore di 1 per ogni $i$:

$|1 - \alpha \lambda_i| < 1 \quad \forall i$

### Analisi del Modulo e Derivazione della Condizione

Per analizzare la condizione $|1 - \alpha \lambda_i| < 1$, è necessario considerare la parte reale e immaginaria del numero complesso $1 - \alpha \lambda_i$.

**Calcolo del modulo**: Il modulo al quadrato è dato da:

$|1 - \alpha \lambda_i|^2 = Re(1 - \alpha \lambda_i)^2 + Im(1 - \alpha \lambda_i)^2$

dove:

- $Re(1 - \alpha \lambda_i) = 1 - \alpha Re(\lambda_i)$
- $Im(1 - \alpha \lambda_i) = -\alpha Im(\lambda_i)$

**Sviluppo della disuguaglianza**: Sostituendo e sviluppando, si ottiene:

$[1 - \alpha Re(\lambda_i)]^2 + [-\alpha Im(\lambda_i)]^2 < 1$

$1 - 2\alpha Re(\lambda_i) + \alpha^2 Re(\lambda_i)^2 + \alpha^2 Im(\lambda_i)^2 < 1$

**Semplificazione**: Dopo alcune semplificazioni algebriche, si arriva a:

$\alpha^2 |\lambda_i|^2 - 2\alpha Re(\lambda_i) < 0$

**Condizione finale**: Dividendo per $\alpha^2 |\lambda_i|^2$ (e notando che la quantità $2\alpha Re(\lambda_i)$ deve essere positiva), si ottiene:

$2 \frac{Re(\lambda_i)}{\alpha |\lambda_i|^2} > 1$

che è la condizione di convergenza iniziale.

### Scelta Ottimale di $\alpha$

In condizioni più restrittive, si può determinare un valore ottimale per $\alpha$ che massimizza la velocità di convergenza.

**Ipotesi aggiuntive**:

- $P^{-1}A$ ha tutti gli autovalori reali e positivi
- Gli autovalori sono ordinati in modo decrescente: $\lambda_1 > \lambda_2 > ... > \lambda_n > 0$

**Intervallo di convergenza per $\alpha$**: In queste condizioni, il metodo di Richardson stazionario converge se $\alpha$ appartiene all'intervallo:

$0 < \alpha < \frac{2}{\lambda_1}$

dove $\lambda_1$ è l'autovalore massimo di $P^{-1}A$.

**Valore ottimale di $\alpha$**: Il raggio spettrale della matrice di iterazione $B_\alpha$ è minimizzato quando $\alpha$ è scelto come:

$\alpha_{ott} = \frac{2}{\lambda_1 + \lambda_n}$

dove $\lambda_n$ è l'autovalore minimo di $P^{-1}A$.

### Dimostrazione Grafica del Valore Ottimale di $\alpha$

La determinazione del valore ottimale di $\alpha$ può essere compresa graficamente analizzando come varia il modulo degli autovalori di $B_\alpha$ in funzione di $\alpha$.

**Setup del grafico**:

- Si considerano tre autovalori $\lambda_1 > \lambda_2 > \lambda_3 > 0$ di $P^{-1}A$.
- Si tracciano i grafici delle funzioni $|1 - \alpha \lambda_i|$ per $i = 1, 2, 3$ in funzione di $\alpha$.
![[Pasted image 20250304164552.png|600]]

**Andamento dei grafici**:

- Ogni grafico ha una forma a "V" e interseca l'asse $\alpha$ in $\frac{1}{\lambda_i}$.
- Tutti i grafici partono dal punto $(0, 1)$.

**Determinazione grafica di $\alpha_{ott}$**:

1. Per ogni valore di $\alpha$, si identificano i tre valori $|1 - \alpha \lambda_i|$.
2. Si considera il massimo di questi tre valori, che corrisponde al raggio spettrale.
3. Si cerca il valore di $\alpha$ che minimizza questo massimo.

**Punto di minimo**: Il minimo del massimo si trova nel punto di intersezione tra il ramo decrescente della funzione associata a $\lambda_1$ e il ramo crescente della funzione associata a $\lambda_3$
![[Pasted image 20250304164630.png|600]]

**Calcolo geometrico**: Si impone l'uguaglianza tra le due rette:

$1 - \alpha \lambda_3 = \alpha \lambda_1 - 1$

Da cui si ricava:

$\alpha_{ott} = \frac{2}{\lambda_1 + \lambda_3}$

Che generalizzato al caso di $n$ autovalori diventa:

$\alpha_{ott} = \frac{2}{\lambda_1 + \lambda_n}$

### Considerazioni Finali

La scelta di $\alpha$ è cruciale per la convergenza e l'efficienza del metodo di Richardson stazionario. Mentre le condizioni teoriche forniscono un quadro generale, la determinazione del valore ottimale richiede ulteriori ipotesi sugli autovalori della matrice precondizionata $P^{-1}A$.

Inoltre, mentre ci sono delle indicazioni su come scegliere $\alpha$ in modo ottimale, non ci sono altrettante indicazioni su come scegliere $P$.

#### References
[[Appunti Mate Num- Lez07.pdf]]


