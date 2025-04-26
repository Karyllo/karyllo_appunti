---
title: Edp  Lez04
description: Appunto automatico
---

2025-02-21 12:51

_Status: #flashcard_zero #riscritto_zero #revisione_zero 

_Tags: [[Metodi Analitici per le Equazioni alle Derivate Parziali]]   [[sbobine]]

## lez04- Edp

### Risoluzione del Problema di Dirichlet nel Cerchio

**Obiettivo:** Trovare una funzione $u(\rho, \theta)$ che soddisfi l'equazione di Laplace in coordinate polari all'interno di un cerchio di raggio $R$ e che assuma un valore specificato $g(\theta)$ sul bordo del cerchio.

#### 1. Impostazione del Problema

Si cerca $u$ tale che:

- $\Delta u = 0$ per $\rho < R$
- $u(R, \theta) = g(\theta)$

dove $\Delta$ è l'operatore di Laplace.

#### 2. Separazione delle Variabili

Si cerca soluzioni nella forma $u(\rho, \theta) = P(\rho)Q(\theta)$. Questo porta a soluzioni speciali che sono prodotti di funzioni radiali e angolari. In coordinate polari, le soluzioni trovate sono del tipo:

- $u_n(\rho, \theta) = a_0 + \sum_{n=1}^{\infty} (\rho^n (a_n \cos(n\theta) + b_n \sin(n\theta)))$

Queste soluzioni sono chiamate **armoniche elementari del piano**. In coordinate cartesiane, queste funzioni armoniche sono la parte reale e immaginaria di una funzione olomorfa $z^n$, dove $z = x + iy$.

#### 3. Combinazione Lineare Infinita

**Idea chiave:** Considerare una combinazione lineare infinita delle soluzioni ottenute.

$$u(\rho, \theta) = a_0 + \sum_{n=1}^{\infty} (\rho^n (a_n \cos(n\theta) + b_n \sin(n\theta)))$$

**Motivazione:** Una singola soluzione o una somma finita raramente soddisfa la condizione al bordo a meno che $g(\theta)$ non sia già un polinomio trigonometrico.

**Preoccupazioni:**

- La serie infinita ha senso? Converge?
- La serie soddisfa ancora l'equazione di Laplace? (Problema di derivazione termine a termine)

#### 4. Determinazione dei Coefficienti

**Strategia:** Ignorare temporaneamente le questioni di convergenza e derivabilità per trovare una "candidata formula risolutiva".

- Imporre $u(R, \theta) = g(\theta)$:

$u(R, \theta) = a_0 + \sum_{n=1}^{\infty} (R^n (a_n \cos(n\theta) + b_n \sin(n\theta))) = g(\theta)$

- Riconoscere che la serie a primo membro è una serie trigonometrica che deve rappresentare $g(\theta)$.
- Identificare la serie con la serie di Fourier di $g(\theta)$:

$g(\theta) = \frac{\alpha_0}{2} + \sum_{n=1}^{\infty} (\alpha_n \cos(n\theta) + \beta_n \sin(n\theta))$

dove

$\alpha_n = \frac{1}{\pi} \int_{-\pi}^{\pi} g(\theta) \cos(n\theta) d\theta$

$\beta_n = \frac{1}{\pi} \int_{-\pi}^{\pi} g(\theta) \sin(n\theta) d\theta$

- Uguagliare i coefficienti:

$a_0 = \frac{\alpha_0}{2}$

$R^n a_n = \alpha_n \Rightarrow a_n = \frac{\alpha_n}{R^n}$

$R^n b_n = \beta_n \Rightarrow b_n = \frac{\beta_n}{R^n}$

#### 5. Candidata Formula Risolutiva

Sostituire i coefficienti trovati nell'espressione di $u(\rho, \theta)$:

$u(\rho, \theta) = \frac{\alpha_0}{2} + \sum_{n=1}^{\infty} \left( \frac{\rho}{R} \right)^n (\alpha_n \cos(n\theta) + \beta_n \sin(n\theta))$

dove $\alpha_n$ e $\beta_n$ sono i coefficienti di Fourier di $g(\theta)$.

#### 6. Giustificazione Rigorosa

**Obiettivo:** Dimostrare che la candidata formula risolutiva è effettivamente una soluzione del problema di Dirichlet.

**Punti da Verificare:**

1. **Convergenza della serie:** Studiare la convergenza della serie di funzioni che definisce $u(\rho, \theta)$.
2. **Continuità:** Provare che $u$ è continua nel dominio, possibilmente fino alla chiusura.
3. **Derivabilità:** Verificare che $u$ sia derivabile e che le derivate soddisfino l'equazione di Laplace.
4. **Condizione al bordo:** Dimostrare che $u(R, \theta) = g(\theta)$.

#### 7. Convergenza e Continuità

- **Stima dei coefficienti di Fourier:** $|\alpha_n| \leq \frac{1}{\pi} \int_{0}^{2\pi} |g(\theta)| d\theta$ (e analogamente per $\beta_n$). Questo implica che $\alpha_n$ e $\beta_n$ sono limitati se $g$ è integrabile.
- **Convergenza Totale:** Fissare $r < R$ e considerare $\rho \in [0, r]$. Allora $\left| \left( \frac{\rho}{R} \right)^n (\alpha_n \cos(n\theta) + \beta_n \sin(n\theta)) \right| \leq C \delta^n$, dove $\delta = \frac{r}{R} < 1$ e $C$ è una costante. La serie $\sum C \delta^n$ converge, quindi la serie che definisce $u$ converge totalmente in ogni cerchio $\rho \leq r$.
- **Continuità:** La convergenza totale implica la convergenza uniforme, e quindi $u$ è continua in ogni cerchio $\rho \leq r$. Poiché questo vale per ogni $r < R$, $u$ è continua nel cerchio aperto $\rho < R$.

#### 8. Derivabilità e Armonicità

- **Derivazione Termine a Termine:** Le derivate dei singoli termini della serie convergono totalmente in ogni cerchio $\rho \leq r$. Questo permette di derivare la serie termine a termine.
- **Armonicità:** Poiché ogni termine della serie è una funzione armonica (cioè soddisfa l'equazione di Laplace), anche la somma della serie è armonica. Quindi $\Delta u = 0$ per $\rho < R$.

#### 9. Assunzione della Condizione al Bordo

**Caso 1: $g$ Regolare**

- Se $g$ è continua, regolare a tratti e soddisfa la condizione di raccordo $g(0) = g(2\pi)$, allora la serie di Fourier di $g$ converge totalmente.
- In questo caso, la serie che definisce $u$ converge uniformemente sul cerchio chiuso $\rho \leq R$, e quindi $u$ è continua fino al bordo e $u(R, \theta) = g(\theta)$.

**Caso 2: $g \in L^2(0, 2\pi)$**

- Se $g$ è solo $L^2$, la serie di Fourier di $g$ converge in $L^2$.
- In questo caso, $u$ assume il dato al bordo in senso $L^2$, cioè $\lim_{\rho \to R} \int_{0}^{2\pi} |u(\rho, \theta) - g(\theta)|^2 d\theta = 0$.

#### 10. Unicità

La soluzione trovata è l'unica soluzione del problema di Dirichlet.

### Problema di Neumann sul Cerchio

**Obiettivo:** Trovare $u(\rho, \theta)$ tale che:

- $\Delta u = 0$ per $\rho < R$
- $\frac{\partial u}{\partial \nu} (R, \theta) = g(\theta)$, dove $\frac{\partial u}{\partial \nu}$ è la derivata normale sul bordo.

#### 1. Espressione Generale della Soluzione

Si parte dalla stessa espressione generale per la soluzione dell'equazione di Laplace in coordinate polari:

$u(\rho, \theta) = a_0 + \sum_{n=1}^{\infty} \rho^n (a_n \cos(n\theta) + b_n \sin(n\theta))$

#### 2. Imposizione della Condizione al Bordo

- Calcolare la derivata normale (radiale):

$\frac{\partial u}{\partial \rho} = \sum_{n=1}^{\infty} n \rho^{n-1} (a_n \cos(n\theta) + b_n \sin(n\theta))$

- Imporre la condizione al bordo:

$\frac{\partial u}{\partial \rho}(R, \theta) = \sum_{n=1}^{\infty} n R^{n-1} (a_n \cos(n\theta) + b_n \sin(n\theta)) = g(\theta)$

#### 3. Condizione di Compatibilità

- Scrivere la serie di Fourier di $g(\theta)$:

$g(\theta) = \frac{\alpha_0}{2} + \sum_{n=1}^{\infty} (\alpha_n \cos(n\theta) + \beta_n \sin(n\theta))$

- Uguagliare i coefficienti:

$n R^{n-1} a_n = \alpha_n$ $n R^{n-1} b_n = \beta_n$

- Si nota che il termine costante nella serie di Fourier di $g$ deve essere zero, cioè $\alpha_0 = 0$. Questo porta alla **condizione di compatibilità**:

$\int_{0}^{2\pi} g(\theta) d\theta = 0$

#### 4. Determinazione dei Coefficienti

Se la condizione di compatibilità è soddisfatta, si possono trovare i coefficienti:

$a_n = \frac{\alpha_n}{n R^{n-1}}$ $b_n = \frac{\beta_n}{n R^{n-1}}$

Il coefficiente $a_0$ rimane arbitrario, il che riflette il fatto che la soluzione è definita a meno di una costante additiva.

#### 5. Soluzione

La soluzione del problema di Neumann è quindi:

$u(\rho, \theta) = a_0 + \sum_{n=1}^{\infty} \frac{\rho^n}{n R^{n-1}} (\alpha_n \cos(n\theta) + \beta_n \sin(n\theta))$

dove $a_0$ è una costante arbitraria.

### Esercizio 1

**Testo del problema:**

Risolvere $\Delta u = 0$ per $\rho < 3$ con la condizione al bordo $u(3, \theta) = \theta(2\pi - \theta)$.

**Soluzione:**

1. **Identificazione del problema:** Si tratta di un problema di Dirichlet con $g(\theta) = \theta(2\pi - \theta)$ e $R = 3$.
    
2. **Applicazione della formula risolutiva:** La soluzione generale è data da:
    
    $u(\rho, \theta) = \frac{\alpha_0}{2} + \sum_{n=1}^{\infty} \left(\frac{\rho}{3}\right)^n (\alpha_n \cos(n\theta) + \beta_n \sin(n\theta))$
    
3. **Calcolo dei coefficienti di Fourier:**
    
    - $\alpha_n = \frac{1}{\pi} \int_{0}^{2\pi} g(\theta) \cos(n\theta) d\theta$
    - $\beta_n = \frac{1}{\pi} \int_{0}^{2\pi} g(\theta) \sin(n\theta) d\theta$
4. **Simmetria della funzione g(θ):** $g(\theta)$ è pari rispetto a $\pi$, quindi i coefficienti $\beta_n$ sono tutti zero. Questo semplifica notevolmente i calcoli.
    
5. **Calcolo di α₀:**
    
    $\alpha_0 = \frac{1}{\pi} \int_{0}^{2\pi} \theta(2\pi - \theta) d\theta = \frac{2}{\pi} \int_{0}^{\pi} \theta(2\pi - \theta) d\theta = \frac{2\pi^2}{3}$
    
6. **Calcolo di αₙ per n > 0:**
    
    $\alpha_n = \frac{2}{\pi} \int_{0}^{\pi} \theta(2\pi - \theta) \cos(n\theta) d\theta = \frac{8}{n^2}$
    
    (Questo calcolo richiede integrazione per parti).
    
7. **Soluzione finale:**
    
    $u(\rho, \theta) = \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \left(\frac{\rho}{3}\right)^n \frac{8}{n^2} \cos(n\theta)$
    

**Commenti:**

- La convergenza totale della serie è garantita fino al bordo perché i coefficienti di Fourier decadono come $1/n^2$.
- La soluzione è classica perché $g(\theta)$ è continua, regolare a tratti e soddisfa le condizioni di raccordo.

### Esercizio 2

**Testo del problema:**

Risolvere $\Delta u(x, y) = 0$ per $x^2 + y^2 < 4$ con la condizione al bordo $u(x, y) = x^2y$ per $x^2 + y^2 = 4$.

**Soluzione:**

1. **Riscrivere la condizione al bordo in coordinate polari:** Poiché siamo sul bordo, usiamo $x = 2\cos(\theta)$ e $y = 2\sin(\theta)$. Quindi $x^2y = (2\cos(\theta))^2 (2\sin(\theta)) = 8\cos^2(\theta)\sin(\theta)$.
    
2. **Identificazione del problema:** Problema di Dirichlet con $R = 2$ e $g(\theta) = 8\cos^2(\theta)\sin(\theta)$.
    
3. **Semplificazione usando identità trigonometriche:** L'obiettivo è esprimere $g(\theta)$ come una somma finita di seni e coseni, ovvero un polinomio trigonometrico.
    
    $8\cos^2(\theta)\sin(\theta) = 8\cos(\theta) (\cos(\theta)\sin(\theta)) = 8\cos(\theta) \left(\frac{1}{2}\sin(2\theta)\right) = 4\cos(\theta)\sin(2\theta)$
    
    Usando la formula di Werner:
    
    $4\cos(\theta)\sin(2\theta) = 2[\sin(3\theta) + \sin(\theta)]$
    
4. **Applicazione diretta della soluzione:** Poiché $g(\theta)$ è una somma finita, la soluzione è una somma finita:
    
    $u(\rho, \theta) = 2\left(\frac{\rho}{2}\right) \sin(\theta) + 2\left(\frac{\rho}{2}\right)^3 \sin(3\theta) = \rho\sin(\theta) + \frac{\rho^3}{4}\sin(3\theta)$
    
5. **Riscrivere in coordinate cartesiane (opzionale):**
    
    $u(x, y) = y + \frac{1}{4}(3x^2y - y^3)$
    

**Commenti:**

- Questo esercizio mostra come, quando il dato al bordo è un polinomio trigonometrico, non è necessario calcolare integrali infiniti.
- L'uso delle identità trigonometriche semplifica notevolmente il problema.
- La soluzione ottenuta è già nella forma di armoniche elementari, quindi non c'è bisogno di ulteriori passaggi.
- L'esercizio evidenzia l'importanza di riconoscere le strutture speciali nel dato al bordo per semplificare i calcoli.
#### References



