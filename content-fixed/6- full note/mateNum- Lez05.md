---
title: mateNum  Lez05
description: Appunto automatico
---

2025-02-26 15:31

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:   [[sbobine]]   [[matematica numerica]]

## mateNum- Lez05

### Perturbazione dei sistemi lineari e condizionamento

- **Problema**: Risolvere accuratamente un sistema lineare $Ax = b$ quando si usa la fattorizzazione LU. Anche se la fattorizzazione LU è accurata, l'output di MATLAB per $x$ può differire significativamente dalla soluzione $x$.
    
- **Motivo**: MATLAB risolve un sistema perturbato: $$ (A + \delta A)x = b + \delta b $$ dove $\delta A$ è una perturbazione sulla matrice dei coefficienti e $\delta b$ è una perturbazione sul termine noto. Queste perturbazioni inducono una perturbazione $\delta x$ sulla soluzione.
    
- **Analisi semplificata**: Inizialmente, si considera solo la perturbazione sul termine noto, quindi $\delta A = 0$.
    

#### Relazione tra perturbazione sulla soluzione e perturbazione sul termine noto

Si cerca una relazione tra la perturbazione sulla soluzione ($\delta x$) e la perturbazione sul termine noto ($\delta b$).

- **Numero di condizionamento**: Definito come il prodotto della norma di $A$ per la norma dell'inversa di $A$, cioè $cond(A) = ||A|| \cdot ||A^{-1}||$. Esistono diverse definizioni di norma di matrice e, di conseguenza, diverse definizioni di condizionamento.
    
- **Importanza del condizionamento**:
    
    - Se il numero di condizionamento è piccolo, una piccola perturbazione sui dati ($\delta b$) porta a una piccola perturbazione sulla soluzione ($\delta x$). In questo caso, il sistema è ben condizionato.
    - Viceversa, un numero di condizionamento grande amplifica anche piccole perturbazioni sui dati, portando a una soluzione molto diversa. Un esempio è la matrice di Hilbert.

#### ==Caso generale: perturbazioni su A e b

Si rimuove l'ipotesi semplificativa $\delta A = 0$ per considerare il caso reale con perturbazioni sia su $A$ che su $b$.

- **Condizione**: Si assume che $|| \delta A || \cdot || A^{-1} || < 1$.
    
- **Risultato generale**: La perturbazione sulla soluzione è controllata dalla seguente relazione: $$ \frac{||\delta x||}{||x||} \leq \frac{cond(A)}{1 - cond(A) \frac{||\delta A||}{||A||}} \left( \frac{||\delta A||}{||A||} + \frac{||\delta b||}{||b||} \right) $$ Questo risultato generalizza il caso semplificato. Se $\delta A = 0$, si ritrova la relazione precedente.
    
- **Verifica della positività del denominatore**: La condizione $|| \delta A || \cdot || A^{-1} || < 1$ assicura che il denominatore sia strettamente positivo. Dividendo entrambi i membri per $||A|| \cdot ||A^{-1}||$, si ottiene: 
- ![[Pasted image 20250325083541.png|200]]
- $$ \frac{||\delta A||}{||A||} < \frac{1}{cond(A)} $$ Moltiplicando per $-cond(A)$, si ha $1 - cond(A) \frac{||\delta A||}{||A||} > 0$.
    

#### Residuo

- **Definizione**: Il residuo $R$ è ciò che rimane quando si sostituisce la soluzione approssimata nel problema esatto. $$ R = b - A\tilde{x} $$ dove $\tilde{x}$ è la soluzione approssimata. Idealmente, se $\tilde{x}$ è vicino alla soluzione esatta, $R$ è vicino a zero.
    
- **Relazione con la perturbazione**: Si dimostra che $\delta b = -R$ quando $\delta A = 0$. $$ \delta b = A(x + \delta x) - Ax = A \delta x $$ e $R = b - A\tilde{x} = Ax - A\tilde{x} = -A \delta x$.
- ![[Pasted image 20250325084036.png|300]]
    
- **Stima equivalente**: La stima della perturbazione sulla soluzione può essere riscritta usando il residuo normalizzato (immagino con delta A = 0 ):  
  $$ \frac{||\delta x||}{||x||} \leq cond(A) \frac{||R||}{||b||} $$
    

#### Precondizionatore

- **Problema**: Cosa fare se il problema è mal condizionato?
- **Soluzione**: Utilizzare un precondizionatore $P$, una matrice ==invertibile==. L'obiettivo è trovare un $P$ tale che il condizionamento della matrice precondizionata $P^{-1}A$ sia molto più piccolo del condizionamento di $A$: $$ cond(P^{-1}A) << cond(A) $$
- **Riscrivere il sistema**: Moltiplicare il sistema $Ax = b$ per $P^{-1}$: $$ P^{-1}Ax = P^{-1}b $$ Si risolve quindi $A_{new}x = b_{new}$, dove $A_{new} = P^{-1}A$ e $b_{new} = P^{-1}b$.
- **Precondizionatore ideale**: Idealmente, $P$ dovrebbe essere $A^{-1}$, in modo che $P^{-1}A = I$ (matrice identità) e $cond(I) = 1$. Questo non è sempre possibile, ma fornisce una direzione.

### Metodi iterativi

#### Terminologia

- **Metodo iterativo**: Una "black box" in cui entra un valore iniziale (guess iniziale) $x_0$ e produce un'approssimazione $x_1$, che viene reintrodotta nella black box per generare $x_2$, e così via.
    
- **Guess iniziale**: Un'ipotesi iniziale per la soluzione.
    
- **Approssimazioni successive**: Partendo dal guess iniziale, il metodo genera una collezione di approssimazioni $x_k$ per la soluzione $x$: $$ \set{x_k}_{k=0}^{\infty}, \quad x_k \in \mathbb{R}^n, \quad x_k \approx x $$
    

#### Criteri di arresto

Poiché non si può iterare all'infinito, è necessario un criterio di arresto.

1. **Numero massimo di iterazioni** ($N_{max}$): Si fissa un numero massimo di iterazioni. Questo può essere scelto arbitrariamente o in base al tempo massimo consentito per la computazione.
2. **Controllo sull'accuratezza**: Si cerca di controllare l'accuratezza della soluzione. Idealmente, si vorrebbe che: $$ ||x - x_k|| < tolleranza $$ dove la tolleranza è un valore fissato dall'utente (es. $10^{-q}$). Tuttavia, poiché $x$ è sconosciuta, si controlla uno stimatore dell'errore.

#### Stimatori dell'errore

1. **Incremento**: La differenza tra due iterazioni successive: $$ ||x_{k+1} - x_k|| < tolleranza $$ L'idea è che, se il metodo converge, le iterazioni successive saranno sempre più vicine.
2. **Residuo**: Si utilizza il residuo $R = b - Ax_k$: $$ ||R|| = ||b - Ax_k|| < tolleranza $$ Se $x_k$ fosse la soluzione esatta, il residuo sarebbe zero.

- **Affidabilità degli stimatori**: È fondamentale studiare l'affidabilità degli stimatori, perché potrebbe esserci una costante che influenza la stima dell'errore: $$ ||x - x_k|| \leq C \cdot ||x_{k+1} - x_k|| $$ Se $C$ è molto grande, lo stimatore potrebbe non essere affidabile.

#### Convergenza

- **Definizione**: Si desidera che la successione di approssimazioni converga alla soluzione esatta: $$ \lim_{k \to \infty} x_k = x $$ Questo limite va inteso componente per componente.
    
- **Errore all'iterata k-esima**: $e_k = x - x_k$. La convergenza può essere espressa come: $$ \lim_{k \to \infty} e_k = 0 $$
    

#### Schema iterativo generico

Si ipotizza che la black box generi una nuova approssimazione attraverso una combinazione lineare: $$ x_{k+1} = Bx_k + G $$ dove $B \in \mathbb{R}^{n \times n}$ e $G \in \mathbb{R}^n$. $B$ e $G$ definiscono il metodo iterativo. $B$ è legata alla matrice $A$, mentre $G$ è legata sia ad $A$ che al termine noto $b$.

#### Consistenza

- **Definizione**: Un metodo numerico è consistente con il problema se, sostituendo la soluzione esatta nello schema, l'uguaglianza è soddisfatta: $$ x = Bx + G $$ Questo certifica che il metodo non è "folle" e che è coerente con il problema che si vuole risolvere.
    
- **Legame tra G, A e b**: Dalla consistenza, si può dimostrare che $G$ dipende sia da $A$ che da $b$.
    

#### Analisi di convergenza

- **La sola consistenza non è sufficiente**: Un esempio è $B = I$ (matrice identità) e $G = 0$. In questo caso, $x_{k+1} = x_k$, quindi non c'è convergenza a meno che $x_0 = x$.
    
- **Condizione sufficiente per la convergenza**: Supponendo che il metodo sia consistente, si sottrae lo schema iterativo dalla relazione di consistenza: $$ x_{k+1} - x = Bx_k + G - (Bx + G) = B(x_k - x) $$ Quindi $e_{k+1} = Be_k$. Prendendo le norme: $$ ||e_{k+1}|| = ||Be_k|| \leq ||B|| \cdot ||e_k|| $$ Iterando, si ottiene: 
  ![[Pasted image 20250325093836.png|350]]
  ![[Pasted image 20250325093857.png]]
  $$ ||e_{k+1}|| \leq ||B||^{k+1} \cdot ||e_0|| $$ Affinché $||e_k|| \to 0$ per $k \to \infty$, è sufficiente che $||B|| < 1$.
    
- **Condizione necessaria e sufficiente per la convergenza**: Il teorema fondamentale afferma che, se lo schema è consistente, allora converge per ogni scelta di $x_0$ se e solo se il raggio spettrale di $B$ è minore di 1: $$ \rho(B) < 1 $$ dove $\rho(B) = \max{|\lambda| : \lambda \text{ autovalore di } B}$.
    
- **Lemma utile**: Per dimostrare il teorema, data una $C \in \mathbb{R}^{n x n}$ si usa il fatto che $C^k \to 0$ se e solo se $\rho(C) < 1$. Inoltre, $\rho(C) \leq ||C||$.
    
- **Velocità di convergenza**: Più piccolo è il raggio spettrale, più rapida è la convergenza.
    

#### Schema iterativo di Richardson

- **Partenza**: Si parte dal sistema $Ax = b$ e si moltiplica per una costante $\alpha_k$: $$ \alpha_k Ax = \alpha_k b $$
    
- **Manipolazione algebrica**: Si riscrive $\alpha_k A$ come $P - (P - \alpha_k A)$, dove $P$ è una matrice invertibile (il precondizionatore): $$ Px - (P - \alpha_k A)x = \alpha_k b $$
    
- **Schema iterativo**: Si decide arbitrariamente di associare il termine a sinistra con la nuova iterata e quello a destra con la vecchia iterata: $$ Px_{k+1} = (P - \alpha_k A)x_k + \alpha_k b $$
    
- **Consistenza per costruzione**: Questo schema è consistente per costruzione, perché si è partiti dall'equazione esatta e si è semplicemente manipolata algebricamente.
    
- **Forma esplicita**: Moltiplicando per $P^{-1}$, si ottiene la forma $x_{k+1} = Bx_k + G$: $$ x_{k+1} = (I - \alpha_k P^{-1} A)x_k + \alpha_k P^{-1} b $$ dove $B_{\alpha_k} = I - \alpha_k P^{-1} A$ e $G_{\alpha_k} = \alpha_k P^{-1} b$.
    
- **Algoritmo**:
    
    - Dato $x_0$ (guess iniziale).
    - Per $k \geq 0$, calcola: $$ x_{k+1} = (I - \alpha_k P^{-1} A)x_k + \alpha_k P^{-1} b $$
- **Metodi di Richardson stazionari e dinamici**:
    
    - **Stazionario**: $\alpha_k = \alpha$ per ogni $k$ (parametro costante).
    - **Dinamico**: $\alpha_k$ varia ad ogni iterazione.


___

### Metodi Iterativi per Sistemi di Equazioni Lineari

#### Introduzione ai Metodi Iterativi

I metodi iterativi rappresentano un blocco fondamentale per la risoluzione di sistemi di equazioni lineari, in alternativa ai metodi diretti.

#### Terminologia e Concetti Chiave

Quando si parla di un metodo iterativo, si può immaginare una "scatola nera" (black box).

- **Guess Iniziale**: All'interno di questa scatola nera entra un valore iniziale, chiamato "guess iniziale" (o ipotesi iniziale). Il guess iniziale viene indicato con $x_0$. Il verbo "guess" significa "ipotizzare".
- **Approssimazione della Soluzione**: In corrispondenza di $x_0$, la scatola nera produce una quantità $x_1$, che rappresenta la prima approssimazione della soluzione.
- **Iterazione**: Questa $x_1$ rientra nella scatola nera, generando $x_2$, e così via. Quindi, partendo dal guess iniziale, si genera una sequenza di approssimazioni.

Nel contesto specifico della risoluzione di sistemi di equazioni lineari ($Ax = b$), $x_0$ è un'approssimazione per $x$, che è un vettore di $R^n$. Ogni approssimazione successiva ($x_k$) sarà anch'essa un vettore di $R^n$.

Idealmente, la black box genera una collezione infinita di approssimazioni per $x$. Avremo quindi una collezione di $x_k$, con $k$ che varia da 0 a infinito, dove ogni $x_k$ appartiene a $R^n$ e approssima $x$.

#### Criterio d'Arresto

Dato che il concetto di infinito non è gestibile da un calcolatore, ogni metodo iterativo deve essere dotato di un criterio d'arresto (stop). Questo criterio indica quando fermare il processo iterativo.

##### Tipi di Criteri d'Arresto

1. **Numero Massimo di Iterazioni**: Si fissa un numero massimo di iterazioni ($N_{max}$). Questo valore può essere scelto arbitrariamente o in base al tempo massimo consentito per l'esecuzione. Tuttavia, questo criterio da solo non garantisce una buona accuratezza.
    
2. **Controllo sull'Accuratezza**: Si cerca di controllare l'accuratezza, imponendo che la differenza tra la soluzione esatta ($x$) e l'approssimazione corrente ($x_k$) sia inferiore a una certa tolleranza ($\epsilon$):
    
    $||x - x_k|| < \epsilon$
    
    La tolleranza ($\epsilon = 10^{-q}$) è definita dall'utente e deve essere coerente con i valori misurati.
    

Idealmente, si utilizzano entrambi i criteri in combinazione:

- Il criterio sul numero massimo di iterazioni evita di iterare all'infinito se l'accuratezza desiderata non viene mai raggiunta.
- Il criterio sull'accuratezza permette di fermarsi prima se si raggiunge la tolleranza desiderata.

##### Stima dell'Errore

Dato che la soluzione esatta $x$ non è nota, si utilizzano degli **stimatori** per controllare l'accuratezza. Due stimatori comuni sono:

- **Incremento**: La differenza tra due approssimazioni successive: $||x_{k+1} - x_k||$.
- **Residuo**: Definito come $r_k = b - Ax_k$. Il residuo indica quanto la soluzione approssimata soddisfa l'equazione originale.

Idealmente, si vorrebbe che:

$||x - x_k|| \le S < \epsilon$

Dove $S$ è lo stimatore. Tuttavia, in pratica, esiste una costante che può influenzare l'affidabilità dello stimatore:

$||x - x_k|| \le C \cdot S$

Se $C$ è molto grande, lo stimatore potrebbe non essere affidabile.

#### Convergenza

Idealmente, si desidera che la successione di approssimazioni $x_k$ converga alla soluzione esatta $x$ per $k$ che tende a infinito:

$\lim_{k \to \infty} x_k = x$

Questo significa che ogni componente del vettore $x_k$ deve tendere alla corrispondente componente del vettore $x$.

In modo equivalente, si può definire l'errore all'iterata $k$-esima come:

$e_k = x - x_k$

E richiedere che:

$\lim_{k \to \infty} e_k = 0$

Dove 0 è il vettore nullo.

#### Forma Generale di uno Schema Iterativo

Si ipotizza che la black box generi una nuova approssimazione $x_{k+1}$ a partire dalla precedente $x_k$ attraverso una combinazione lineare:

$x_{k+1} = Bx_k + g$

Dove:

- $B$ è una matrice di iterazione di dimensioni $n \times n$.
- $g$ è un vettore.

$B$ e $g$ identificano il metodo iterativo. La matrice $B$ è legata alla matrice $A$ del sistema originale, mentre il vettore $g$ è legato sia ad $A$ che al termine noto $b$.

#### Consistenza

Un metodo numerico si dice **consistente** con il problema se, rimpiazzando nel metodo la soluzione esatta, l'uguaglianza è verificata:

$x = Bx + g$

In altre parole, il metodo è coerente con il problema che si sta cercando di risolvere.

#### Legame tra g, A e b

Il vettore $g$ dipende sia dalla matrice $A$ che dal termine noto $b$. Possiamo riscrivere l'equazione di consistenza come:

$x = Bx + g \implies g = x - Bx = (I - B)x$

Dato che $x = A^{-1}b$, possiamo scrivere:

$g = (I - B)A^{-1}b$

Questo dimostra che $g$ dipende sia da $A$ che da $b$.

#### Condizione Sufficiente per la Convergenza

La sola consistenza non è sufficiente a garantire la convergenza.

Esempio:

Se si sceglie $B = I$ (matrice identità) e $g = 0$ (vettore nullo), il metodo è consistente, ma $x_{k+1} = x_k$, quindi non c'è convergenza a meno che il guess iniziale non sia già la soluzione esatta.

Supponendo che il metodo sia consistente, sottraiamo la relazione di consistenza dallo schema iterativo:

$x_{k+1} - x = Bx_k + g - (Bx + g) = B(x_k - x)$

Definendo l'errore come $e_k = x - x_k$, otteniamo:

$e_{k+1} = Be_k$

Prendendo la norma (ad esempio, la norma 2) di entrambi i membri:

$||e_{k+1}|| = ||Be_k|| \le ||B|| \cdot ||e_k||$

Iterando, otteniamo:

$||e_{k+1}|| \le ||B||^{k+1} \cdot ||e_0||$

Affinché l'errore tenda a zero per $k \to \infty$, è sufficiente che:

$||B|| < 1$

Quindi, se il metodo è consistente e la norma di $B$ è strettamente minore di 1, il metodo è convergente.

#### Condizione Necessaria e Sufficiente per la Convergenza

Un teorema fondamentale stabilisce una condizione necessaria e sufficiente per la convergenza:

**Teorema**: Sia lo schema $x_{k+1} = Bx_k + g$ consistente. Allora, il metodo converge per ogni scelta del guess iniziale $x_0$ se e solo se il raggio spettrale di $B$ è strettamente minore di 1.

##### Raggio Spettrale

Il raggio spettrale di una matrice $B$, indicato con $\rho(B)$, è il massimo dei moduli degli autovalori di $B$:

$\rho(B) = \max_i |\lambda_i|$

Dove $\lambda_i$ sono gli autovalori di $B$.

##### Lemma

Per dimostrare il teorema, abbiamo bisogno di due risultati preliminari:

1. Sia $C$ una matrice a entrate reali. Allora, $C^k \to 0$ (componente per componente) se e solo se $\rho(C) < 1$.
2. Esiste una relazione tra il raggio spettrale e la norma 2 di una matrice: $\rho(B) \le ||B||_2$.

##### Dimostrazione del Teorema

Partiamo dalla relazione:

$e_{k+1} = Be_k$

Iterando:

$e_{k+1} = B^{k+1}e_0$

L'errore $e_{k+1}$ tende a zero indipendentemente da $e_0$ se e solo se $B^{k+1}$ tende alla matrice nulla. Grazie al lemma (punto 1), questo accade se e solo se $\rho(B) < 1$.

##### Osservazione

Se $||B||_2 < 1$, allora, grazie al lemma (punto 2), anche $\rho(B) < 1$, e quindi il metodo converge. Tuttavia, può succedere che $\rho(B) < 1$ ma $||B||_2 > 1$, quindi la condizione sulla norma è solo sufficiente.

##### Velocità di Convergenza

La grandezza del raggio spettrale determina anche la velocità di convergenza: più piccolo è $\rho(B)$, più rapida è la convergenza. Se abbiamo due metodi con matrici di iterazione $B_1$ e $B_2$ e $\rho(B_1) = 0.9$ e $\rho(B_2) = 0.1$, allora il secondo metodo converge più rapidamente.

#### Costruzione di uno Schema Iterativo Generico: Metodo di Richardson

Partiamo dal sistema lineare:

$Ax = b$

Moltiplichiamo entrambi i membri per una costante $\alpha_k$:

$\alpha_k Ax = \alpha_k b$

Introduciamo una matrice invertibile $P$ (precondizionatore) e riscriviamo $\alpha_k A$ come:

$\alpha_k A = P - (P - \alpha_k A)$

Quindi, il sistema diventa:

$Px - (P - \alpha_k A)x = \alpha_k b$

Risolvendo per $Px$:

$Px = (P - \alpha_k A)x + \alpha_k b$

In modo arbitrario, associamo il membro di sinistra con la nuova iterata $x_{k+1}$ e il membro di destra con la vecchia iterata $x_k$:

$Px_{k+1} = (P - \alpha_k A)x_k + \alpha_k b$

Questo schema è consistente per costruzione. Per scriverlo nella forma $x_{k+1} = Bx_k + g$, moltiplichiamo per $P^{-1}$:

$x_{k+1} = P^{-1}(P - \alpha_k A)x_k + \alpha_k P^{-1}b$

Quindi:

$B_{\alpha_k} = P^{-1}(P - \alpha_k A) = I - \alpha_k P^{-1}A$

$g_{\alpha_k} = \alpha_k P^{-1}b$

L'algoritmo iterativo è:

- Dato $x_0$ (guess iniziale)
- Per $k \ge 0$: $x_{k+1} = B_{\alpha_k}x_k + g_{\alpha_k}$

Questo schema è noto come **metodo di Richardson**.

##### Metodo di Richardson Stazionario e Dinamico

- **Stazionario**: Se il parametro $\alpha_k$ è costante ($\alpha_k = \alpha$ per ogni $k$), il metodo è detto stazionario.
- **Dinamico**: Se il parametro $\alpha_k$ varia ad ogni iterazione, il metodo è detto dinamico.

In generale, un metodo dinamico può adattarsi meglio al problema, ma richiede un costo computazionale maggiore per la determinazione di $\alpha_k$ ad ogni iterazione.
    
___

### Teorema Fondamentale per i Metodi Iterativi

Il teorema cardine per i metodi iterativi stabilisce una condizione necessaria e sufficiente per la convergenza di uno schema iterativo.

**Ipotesi:**

- Si considera uno schema iterativo nella forma: $x_{k+1} = Bx_k + g$
- Lo schema è consistente, ovvero $x = Bx + g$

**Tesi:**

Esiste equivalenza tra le seguenti affermazioni:

- Il raggio spettrale di $B$, indicato con $\rho(B)$, è strettamente minore di 1, cioè $\rho(B) < 1$
- Lo schema converge, indipendentemente dalla scelta del guess iniziale $x_0 \in \mathbb{R}^n$

#### Definizione di Raggio Spettrale

Il raggio spettrale $\rho(B)$ è definito come il massimo dei moduli degli autovalori della matrice $B$. Formalmente:

$\rho(B) = \max_i |\lambda_i|$ dove $\lambda_i$ sono gli autovalori di $B$.

In MATLAB, il raggio spettrale può essere calcolato con la seguente sequenza di comandi:

```
eig(B); % Calcola gli autovalori di B
abs();   % Calcola il valore assoluto (modulo) degli autovalori
max();   % Trova il massimo tra i moduli degli autovalori
```

#### Lemmi Utili per la Dimostrazione

Per dimostrare il teorema, sono necessari due lemmi:

**Lemma 1:**

Se $C$ è una matrice a elementi reali, allora $C^k \rightarrow 0$ (la potenza $k$-esima di $C$ tende a zero) se e solo se $\rho(C) < 1$.

**Lemma 2:**

Esiste una relazione tra il raggio spettrale di una matrice e la sua norma 2, ma solo in una direzione: $\rho(B) \le ||B||_2$. Non vale il viceversa.

#### Dimostrazione del Teorema

1. **Punto di partenza**: Si sottrae lo schema iterativo dalla relazione di consistenza:
    
    $e_{k+1} = x_{k+1} - x = Bx_k + g - (Bx + g) = B(x_k - x) = Be_k$
    
    dove $e_k$ rappresenta l'errore al passo $k$.
    
2. **Iterazione**: Iterando la relazione, si ottiene:
    
    $e_{k+1} = B e_k = B^2 e_{k-1} = \dots = B^{k+1} e_0$
    
3. **Convergenza**: L'errore $e_{k+1}$ tende a zero indipendentemente da $x_0$ se e solo se $B^{k+1} \rightarrow 0$.
    
4. **Applicazione del Lemma 1**: Per il Lemma 1, $B^{k+1} \rightarrow 0$ se e solo se $\rho(B) < 1$.
    

Pertanto, la convergenza dello schema è equivalente alla condizione $\rho(B) < 1$.

#### Osservazioni aggiuntive

- **Importanza della libertà di scelta del guess iniziale**: La possibilità di scegliere liberamente il guess iniziale è fondamentale, specialmente in contesti come i metodi per equazioni non lineari, dove una scelta errata può compromettere la convergenza.
    
- **Legame tra norma 2 e raggio spettrale**: Se $||B||_2 < 1$, allora, grazie al Lemma 2, $\rho(B) < 1$, e quindi il metodo converge. Tuttavia, la convergenza può verificarsi anche se $||B||_2 > 1$, purché $\rho(B) < 1$.
    
- **Velocità di convergenza**: La grandezza del raggio spettrale determina la velocità di convergenza: più piccolo è $\rho(B)$, più rapida è la convergenza.
    
    Esempio: Dati due metodi, M1 con $\rho(B_1) = 0.9$ e M2 con $\rho(B_2) = 0.1$, si preferirà M2 perché converge più rapidamente.
    

### Costruzione di uno Schema Iterativo Generico: Il Metodo di Richardson

Il professore introduce un metodo iterativo generico, noto come metodo di Richardson, partendo dal sistema lineare $Ax = b$ e manipolandolo algebricamente per ottenere uno schema iterativo nella forma $x_{k+1} = Bx_k + g$.

#### Passaggi Chiave

1. **Moltiplicazione per una costante**: Si moltiplica il sistema per una costante $\alpha_k$:
    
    $\alpha_k Ax = \alpha_k b$
    
2. **Introduzione della matrice P**: Si riscrive $\alpha_k A$ introducendo una matrice invertibile $P$ (il precondizionatore):
    
    $\alpha_k A = P - (P - \alpha_k A)$
    
3. **Riscrittura del sistema**: Si sostituisce questa espressione nel sistema originale:
    
    $Px - (P - \alpha_k A)x = \alpha_k b$
    
4. **Definizione dello schema iterativo**: Si associa il termine $Px$ con la nuova iterata $x_{k+1}$ e il resto con l'iterata precedente $x_k$:
    
    $Px_{k+1} = (P - \alpha_k A)x_k + \alpha_k b$
    

#### Forma Finale dello Schema di Richardson

Per ottenere la forma canonica $x_{k+1} = Bx_k + g$, si moltiplica per $P^{-1}$:

$x_{k+1} = (I - \alpha_k P^{-1} A)x_k + \alpha_k P^{-1} b$

Dove:

- $B_{\alpha_k} = I - \alpha_k P^{-1} A$ è la matrice di iterazione
- $g_{\alpha_k} = \alpha_k P^{-1} b$ è il termine noto

L'algoritmo risultante è:

- Dato $x^{(0)}$ (guess iniziale)
- Per $k \ge 0$: $x_{k+1} = (I - \alpha_k P^{-1} A)x_k + \alpha_k P^{-1} b$

#### Metodi di Richardson Stazionari e Dinamici

- **Stazionario**: $\alpha_k = \alpha$ (costante per ogni $k$)
- **Dinamico**: $\alpha_k$ varia ad ogni iterazione

La scelta tra stazionario e dinamico dipende dal problema specifico e dagli obiettivi di convergenza.

_Gli schemi di Richardson sono consistenti per costruzione, il che significa che non è necessario verificare esplicitamente la condizione di consistenza quando si studia la convergenza. È sufficiente dimostrare che il raggio spettrale della matrice di iterazione è minore di 1._

#### References




[[Appunti Mate Num-lez05.pdf]]