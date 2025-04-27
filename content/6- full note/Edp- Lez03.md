---
title: "Edp- Lez03"
---

2025-02-20 10:18

_Status:   #flashcard_zero  #revisione_zero    #riscritto_zero 

_Tags: [[Metodi Analitici per le Equazioni alle Derivate Parziali]]   [[sbobine]]

## lez03- Edp
- ![[Pasted image 20250221134613.png]]
### Motivazioni per Studiare le Equazioni di Laplace e Poisson

- **Equazione del potenziale elettrostatico o gravitazionale** in presenza di una distribuzione continua di cariche o masse.
- In fluidodinamica, il **potenziale di velocità del moto stazionario irrotazionale di un fluido incomprimibile** soddisfa l'equazione di Laplace.
- L'equazione di Poisson può essere vista come il **caso stazionario delle equazioni del calore o delle onde**.

### Equazione del Calore

L'equazione del calore è espressa come:
$$\qquad \frac{\partial U}{\partial t} = c \nabla^2 U + F$$

dove:

- $U(x, t)$ rappresenta la temperatura nel punto $x$ all'istante $t$.
- $c$ è la costante di conducibilità termica.
- $F$ è il termine di sorgente, che indica dove e quando viene fornito o sottratto calore.

In condizioni di **equilibrio termico** (stato stazionario), la temperatura non cambia nel tempo ($\frac{\partial U}{\partial t} = 0$). Se il termine di sorgente $F$ è indipendente dal tempo o è zero, l'equazione diventa:

$$\qquad -c \nabla^2 U = F$$

che può essere riscritta come l'equazione di Poisson:

$\qquad \nabla^2 U = f$

dove $f$ è una funzione che dipende solo da $x$.

### Equazione delle Onde

Nel caso di una membrana vibrante bidimensionale, l'equazione delle onde è:

$\qquad \frac{\partial^2 U}{\partial t^2} = c^2 \nabla^2 U$

In condizioni di equilibrio elastico, quando la membrana smette di vibrare, $\frac{\partial^2 U}{\partial t^2} = 0$, e l'equazione diventa l'equazione di Laplace:

$\qquad \nabla^2 U = 0$

### Funzioni Olomorfe e Funzioni Armoniche
- ![[Pasted image 20250221135452.png]]

Una funzione complessa $f(z) = u(x, y) + iv(x, y)$, dove $z = x + iy$, è derivabile in senso complesso (olomorfa) se le funzioni $u$ e $v$ soddisfano le **condizioni di Cauchy-Riemann**:

$\qquad \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

Se $f$ è olomorfa e $u, v$ sono di classe $C^2$, allora sia $u$ che $v$ sono funzioni armoniche, cioè soddisfano l'equazione di Laplace:

$\qquad \nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$

$\qquad \nabla^2 v = \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$

**Esempi di funzioni armoniche** derivanti da funzioni olomorfe includono le parti reali e immaginarie di $z^n$ e $1/z$.
___
### Funzioni Olomorfe e Funzioni Armoniche

**Definizione di Funzione Olomorfa** Una funzione complessa di variabile complessa, $f: \mathbb{C} \to \mathbb{C}$, è detta olomorfa (o derivabile in senso complesso) in un dominio se ammette derivata in ogni punto del dominio.

**Rappresentazione con Parte Reale e Immaginaria** Sia $f(z)$ una funzione olomorfa, dove $z = x + iy$. Possiamo scrivere $f(z)$ come: $$f(x + iy) = u(x, y) + i v(x, y)$$ dove $u(x, y)$ e $v(x, y)$ sono funzioni a valori reali di due variabili reali.

**Condizioni di Cauchy-Riemann** Le funzioni $u$ e $v$ devono soddisfare le equazioni di Cauchy-Riemann: $$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$ Queste equazioni sono una condizione necessaria e sufficiente affinché $f$ sia derivabile in senso complesso, assumendo che $u$ e $v$ siano differenziabili.

**Regolarità delle Funzioni Olomorfe** Le funzioni olomorfe hanno proprietà notevoli, tra cui l'essere infinitamente derivabili. In particolare, se $f$ è olomorfa, allora $u$ e $v$ sono di classe $C^\infty$ nel loro dominio. Per i nostri scopi, è sufficiente considerare che siano di classe $C^2$.

**Dimostrazione che le Parti Reale e Immaginaria sono Armoniche**

1. **Derivazione delle Equazioni di Cauchy-Riemann**
    
    - Deriviamo la prima equazione di Cauchy-Riemann rispetto a $x$: $$\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial x \partial y}$$
    - Deriviamo la seconda equazione di Cauchy-Riemann rispetto a $y$: $$\frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial y \partial x}$$
2. **Somma delle Equazioni Derivate**
    
    - Sommiamo le due equazioni derivate: $$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = \frac{\partial^2 v}{\partial x \partial y} - \frac{\partial^2 v}{\partial y \partial x}$$
3. **Applicazione del Teorema di Schwarz**
    
    - Poiché $v$ è di classe $C^2$, possiamo applicare il teorema di Schwarz (o delle derivate miste uguali): $$\frac{\partial^2 v}{\partial x \partial y} = \frac{\partial^2 v}{\partial y \partial x}$$
    - Quindi, $$\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$$
    - Questo significa che $u$ è armonica.
4. **Dimostrazione Analoga per $v$**
    
    - Deriviamo la prima equazione di Cauchy-Riemann rispetto a $y$: $$\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 v}{\partial y^2}$$
    - Deriviamo la seconda equazione di Cauchy-Riemann rispetto a $x$: $$\frac{\partial^2 u}{\partial x \partial y} = -\frac{\partial^2 v}{\partial x^2}$$
5. **Sottrazione delle Equazioni Derivate**
    
    - Sottraiamo la seconda equazione derivata dalla prima: $$\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = \frac{\partial^2 u}{\partial y \partial x} - \frac{\partial^2 u}{\partial x \partial y}$$
    - Applicando il teorema di Schwarz: $$\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$$
    - Questo significa che anche $v$ è armonica.

**Conclusione** Se $f(z) = u(x, y) + i v(x, y)$ è una funzione olomorfa, allora sia la parte reale $u(x, y)$ che la parte immaginaria $v(x, y)$ sono funzioni armoniche, cioè soddisfano l'equazione di Laplace: $$\nabla^2 u = 0, \quad \nabla^2 v = 0$$

**Esempi di Funzioni Armoniche**

- **Potenze di z**: $z^n = (x + iy)^n$. Le parti reale e immaginaria di $z^n$ sono armoniche. Ad esempio, per $n=3$, $Re(z^3) = x^3 - 3xy^2$ è armonica.
- **Funzione reciproca**: $f(z) = \frac{1}{z}$. In questo caso, $u(x, y) = \frac{x}{x^2 + y^2}$ e $v(x, y) = -\frac{y}{x^2 + y^2}$ sono armoniche in $\mathbb{R}^2 \setminus {(0, 0)}$.
- **Esponenziale complesso**: $e^z = e^{x+iy} = e^x \cos(y) + i e^x \sin(y)$. Quindi $u(x, y) = e^x \cos(y)$ e $v(x, y) = e^x \sin(y)$ sono armoniche.

Questa dimostrazione e gli esempi illustrano come la teoria delle funzioni olomorfe sia strettamente collegata alla teoria delle funzioni armoniche in due variabili.
___
Certamente. Gli esempi forniti nelle fonti riguardano le funzioni $z^n$, $\frac{1}{z}$ ed $e^z$, e le loro parti reali e immaginarie espresse sia in coordinate cartesiane $(x, y)$ che, in alcuni casi, in coordinate polari $(\rho, \theta)$.

- **Funzione $z^n$**:
    
    - **Coordinate Cartesiane:**
        - $z^n = (x + iy)^n = u_n(x, y) + i v_n(x, y)$, dove $u_n(x, y)$ è la parte reale e $v_n(x, y)$ è la parte immaginaria.
        - Esempio: per $n = 3$, $z^3 = (x + iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3 = (x^3 - 3xy^2) + i(3x^2y - y^3)$. Quindi $u_3(x, y) = x^3 - 3xy^2$ e $v_3(x, y) = 3x^2y - y^3$.
    - **Coordinate Polari:**
        - $z = \rho(\cos\theta + i\sin\theta)$, quindi $z^n = \rho^n(\cos(n\theta) + i\sin(n\theta))$.
        - $u_n(\rho, \theta) = \rho^n \cos(n\theta)$ e $v_n(\rho, \theta) = \rho^n \sin(n\theta)$.
        - Queste espressioni sono più semplici da calcolare rispetto alla forma cartesiana, specialmente per $n$ elevati.
- **Funzione $\frac{1}{z}$**:
    
    - **Coordinate Cartesiane:**
        - $\frac{1}{z} = \frac{1}{x + iy} = \frac{x - iy}{(x + iy)(x - iy)} = \frac{x - iy}{x^2 + y^2} = \frac{x}{x^2 + y^2} - i\frac{y}{x^2 + y^2}$.
        - $u(x, y) = \frac{x}{x^2 + y^2}$ e $v(x, y) = -\frac{y}{x^2 + y^2}$.
    - **Coordinate Polari:**
        - $z = \rho(\cos\theta + i\sin\theta)$, quindi $\frac{1}{z} = \frac{1}{\rho(\cos\theta + i\sin\theta)} = \frac{\cos\theta - i\sin\theta}{\rho} = \frac{\cos\theta}{\rho} - i\frac{\sin\theta}{\rho}$.
        - $u(\rho, \theta) = \frac{\cos\theta}{\rho}$ e $v(\rho, \theta) = -\frac{\sin\theta}{\rho}$.
- **Funzione $e^z$**:
    
    - **Coordinate Cartesiane:**
        - $e^z = e^{x + iy} = e^x(\cos y + i\sin y) = e^x \cos y + i e^x \sin y$.
        - $u(x, y) = e^x \cos y$ e $v(x, y) = e^x \sin y$.
    - **Coordinate Polari:**
        - $x = \rho \cos \theta$, $y = \rho \sin \theta$, quindi $e^z = e^{\rho \cos \theta + i \rho \sin \theta} = e^{\rho \cos \theta} (\cos(\rho \sin \theta) + i \sin(\rho \sin \theta))$.
        - $u(\rho, \theta) = e^{\rho \cos \theta} \cos(\rho \sin \theta)$ e $v(\rho, \theta) = e^{\rho \cos \theta} \sin(\rho \sin \theta)$.

In sintesi, le coordinate polari possono semplificare l'espressione di alcune funzioni complesse, rendendo più agevole l'analisi delle loro proprietà armoniche.
___
#### Armoniche Elementari del Piano

Le armoniche elementari del piano sono ottenute dalle parti reali e immaginarie di $z^n$, dove $z = x + iy$:

$\qquad z^n = (x + iy)^n = u_n(x, y) + iv_n(x, y)$

$u_n(x, y)$ e $v_n(x, y)$ sono polinomi omogenei di grado $n$ in $x$ e $y$ e sono funzioni armoniche.

In **coordinate polari** ($x = \rho \cos\theta$, $y = \rho \sin\theta$), le armoniche elementari diventano:

$\qquad u_n(\rho, \theta) = \rho^n \cos(n\theta)$

$\qquad v_n(\rho, \theta) = \rho^n \sin(n\theta)$

### Problemi al Contorno per l'Equazione di Poisson

I problemi al contorno per l'equazione di Poisson consistono nel risolvere l'equazione di Poisson in un dominio $\Omega$ con condizioni specificate sul bordo $\partial\Omega$. Alcuni tipi comuni di problemi al contorno sono:

- **Problema di Dirichlet**: Assegnare il valore della soluzione $U$ sul bordo
    
    $\qquad \nabla^2 U = F \text{ in } \Omega$
    
    $\qquad U = G \text{ su } \partial\Omega$
    
- **Problema di Neumann**: Assegnare la derivata normale di $U$ sul bordo
    
    $\qquad \nabla^2 U = F \text{ in } \Omega$
    
    $\qquad \frac{\partial U}{\partial n} = G \text{ su } \partial\Omega$
    
- **Problema Misto**: Assegnare $U$ su una parte del bordo e $\frac{\partial U}{\partial n}$ sulla restante parte
    
    $\qquad \nabla^2 U = F \text{ in } \Omega$
    
    $\qquad U = G_1 \text{ su } \Sigma_1$
    
    $\qquad \frac{\partial U}{\partial n} = G_2 \text{ su } \Sigma_2$
    
    dove $\Sigma_1 \cup \Sigma_2 = \partial\Omega$ e $\Sigma_1 \cap \Sigma_2 = \emptyset$.
    
- **Problema di Robin**: Assegnare una combinazione lineare di $U$ e della sua derivata normale sul bordo
    
    $\qquad \nabla^2 U = F \text{ in } \Omega$
    
    $\qquad \alpha U + \frac{\partial U}{\partial n} = G \text{ su } \partial\Omega$
    
    con $\alpha > 0$.
    

### Soluzione Classica

Una soluzione classica di un problema al contorno per una EDP richiede che le derivate che compaiono nell'equazione esistano e siano continue in tutti i punti del dominio, e che le condizioni al contorno siano soddisfatte senza eccezioni.

- Per il problema di Dirichlet, si richiede che $U \in C^2(\Omega) \cap C^0(\overline{\Omega})$.
- Per il problema di Neumann, si richiede che $U \in C^2(\Omega) \cap C^1(\overline{\Omega})$.

### Teorema di Unicità

Il teorema di unicità stabilisce che, sotto certe condizioni, la soluzione di un problema al contorno è unica. Per i problemi di Dirichlet, misto e di Robin, la soluzione, se esiste, è unica. Per il problema di Neumann, la soluzione è unica a meno di una costante additiva.

La dimostrazione del teorema di unicità si basa sull'**identità di Green** e sulla linearità dell'equazione e delle condizioni al contorno. Si supponga che $U_1$ e $U_2$ siano due soluzioni dello stesso problema. Allora, la differenza $U = U_1 - U_2$ soddisfa l'equazione di Laplace con condizioni al contorno omogenee. Applicando la prima identità di Green, si dimostra che l'integrale del quadrato del gradiente di $U$ è zero, il che implica che $U$ è costante. Utilizzando le condizioni al contorno, si conclude che $U$ è identicamente nulla per i problemi di Dirichlet, misto e di Robin, mentre per il problema di Neumann $U$ può essere una costante arbitraria.
___
Sì, la dimostrazione del teorema di unicità è inclusa negli appunti forniti. Di seguito è riportata una sintesi della dimostrazione:

### Teorema di Unicità per Problemi al Contorno per l'Equazione di Laplace

**Obiettivo:** Dimostrare che la soluzione di un problema di Dirichlet, misto o di Robin per l'equazione di Laplace, se esiste, è unica. Per il problema di Neumann, la soluzione è unica a meno di una costante additiva.

**Ipotesi:** Sia $\Omega$ un dominio limitato e lipschitziano.

**Dimostrazione:**

1. **Linearità e Superposizione**:
    
    - Si assuma che $U_1$ e $U_2$ siano due soluzioni del problema.
    - Si definisce $U = U_1 - U_2$. Grazie alla linearità dell'equazione di Laplace e delle condizioni al contorno, $U$ soddisfa lo stesso problema con dati nulli.
2. **Applicazione della Prima Identità di Green**:
    
    - Si applica la prima identità di Green alle funzioni $U$ e $V = U$: $$ \int_{\Omega} U \nabla^2 U , dx + \int_{\Omega} |\nabla U|^2 , dx = \int_{\partial\Omega} U \frac{\partial U}{\partial n} , ds $$
3. **Semplificazioni Dovute alle Condizioni al Contorno**:
    
    - Poiché $\nabla^2 U = 0$ in $\Omega$, il primo termine dell'integrale scompare.
    - L'identità si riduce a: $$ \int_{\Omega} |\nabla U|^2 , dx = \int_{\partial\Omega} U \frac{\partial U}{\partial n} , ds $$
4. **Analisi dei Diversi Problemi al Contorno**:
    
    - **Dirichlet:** $U = 0$ su $\partial\Omega$, quindi l'integrale sul bordo è zero.
    - **Neumann:** $\frac{\partial U}{\partial n} = 0$ su $\partial\Omega$, quindi l'integrale sul bordo è zero.
    - **Misto:** Si divide il bordo in $\Sigma_1$ e $\Sigma_2$ dove $U = 0$ su $\Sigma_1$ e $\frac{\partial U}{\partial n} = 0$ su $\Sigma_2$, quindi l'integrale sul bordo è zero.
    - **Robin:** $\frac{\partial U}{\partial n} = -\alpha U$ su $\partial\Omega$, con $\alpha > 0$. L'integrale diventa $\int_{\partial\Omega} -\alpha U^2 , ds \leq 0$.
5. **Conclusione**:
    
    - In tutti i casi, si ha che $\int_{\Omega} |\nabla U|^2 , dx = 0$.
    - Questo implica che $\nabla U = 0$ in $\Omega$.
    - Quindi $U$ è costante in $\Omega$.
6. **Considerazioni Finali sui Diversi Problemi**:
    
    - **Dirichlet:** Poiché $U = 0$ sul bordo, $U = 0$ in tutto $\Omega$.
    - **Misto:** Poiché $U = 0$ su una parte del bordo, $U = 0$ in tutto $\Omega$.
    - **Robin:** Poiché $\alpha > 0$ e $\int_{\partial\Omega} -\alpha U^2 , ds = 0$, allora $U = 0$ sul bordo e quindi $U = 0$ in tutto $\Omega$.
    - **Neumann:** $U$ è costante, ma non necessariamente zero. Quindi la soluzione è unica a meno di una costante additiva.

**Conclusione:** La differenza tra due soluzioni qualsiasi è zero (o una costante nel caso di Neumann), il che dimostra l'unicità della soluzione (a meno di una costante per Neumann).

Questo completa la dimostrazione del teorema di unicità basata sull'identità di Green.
___

### Condizione di Compatibilità per il Problema di Neumann

Per il problema di Neumann, affinché esista una soluzione, il dato di Neumann $G$ deve soddisfare una condizione di compatibilità:

$\qquad \int_{\partial\Omega} G , ds = 0$

Questa condizione deriva dall'applicazione del teorema della divergenza e rappresenta un bilancio del flusso di calore sul bordo.

### Problema di Dirichlet sul Cerchio

Si consideri il problema di Dirichlet per l'equazione di Laplace sul cerchio di raggio $R$:

$\qquad \nabla^2 U = 0 \text{ per } x^2 + y^2 < R^2$

$\qquad U = G \text{ per } x^2 + y^2 = R^2$

A causa della simmetria del dominio, è conveniente utilizzare le **coordinate polari** $(\rho, \theta)$. L'equazione di Laplace in coordinate polari diventa:

$\qquad \frac{\partial^2 U}{\partial \rho^2} + \frac{1}{\rho} \frac{\partial U}{\partial \rho} + \frac{1}{\rho^2} \frac{\partial^2 U}{\partial \theta^2} = 0$

La condizione al bordo diventa $U(R, \theta) = g(\theta)$, dove $g(\theta)$ è il dato di Dirichlet in coordinate polari.

#### Metodo di Separazione delle Variabili

Si cerca una soluzione del tipo $U(\rho, \theta) = R(\rho) \Theta(\theta)$. Sostituendo nell'equazione di Laplace e separando le variabili, si ottengono due equazioni differenziali ordinarie:

$\qquad \rho^2 R''(\rho) + \rho R'(\rho) = \lambda R(\rho)$

$\qquad -\Theta''(\theta) = \lambda \Theta(\theta)$

dove $\lambda$ è una costante di separazione.

#### Risoluzione dell'Equazione per $\Theta(\theta)$

La funzione $\Theta(\theta)$ deve essere periodica con periodo $2\pi$. Le soluzioni non banali si ottengono solo per $\lambda = n^2$, con $n = 0, 1, 2, \dots$ Le soluzioni sono:

$\qquad \Theta_n(\theta) = A_n \cos(n\theta) + B_n \sin(n\theta)$

#### Risoluzione dell'Equazione per $R(\rho)$

L'equazione per $R(\rho)$ è un'equazione di Eulero:

$\qquad \rho^2 R''(\rho) + \rho R'(\rho) - n^2 R(\rho) = 0$

Si cerca una soluzione del tipo $R(\rho) = \rho^\alpha$. Sostituendo nell'equazione, si ottiene:

$\qquad \alpha(\alpha - 1) \rho^\alpha + \alpha \rho^\alpha - n^2 \rho^\alpha = 0$

$\qquad \alpha^2 - n^2 = 0$

$\qquad \alpha = \pm n$

Quindi, le soluzioni sono $R(\rho) = c_1 \rho^n + c_2 \rho^{-n}$. Per $n = 0$, la soluzione è $R(\rho) = c_1 \ln \rho + c_2$.

#### Soluzioni Limitate all'Origine

Poiché la soluzione deve essere limitata all'origine, si scartano le soluzioni con $\rho^{-n}$ e $\ln \rho$. Rimangono le soluzioni del tipo:

$\qquad R_n(\rho) = \rho^n$

#### Soluzione Generale

Combinando le soluzioni per $\Theta(\theta)$ e $R(\rho)$, si ottiene la famiglia di soluzioni a variabili separate:

$\qquad U_n(\rho, \theta) = \rho^n (A_n \cos(n\theta) + B_n \sin(n\theta))$

con $n = 0, 1, 2, \dots$. La soluzione generale è una combinazione lineare di queste soluzioni.

#### Soluzioni a Variabili Separate

$\begin{cases}u_n(\rho, \theta) = \rho^n (a_n \cos(n\theta) + b_n \sin(n\theta))\\ u_o(\rho, \theta)=a_o\end{cases}$   per $n \ge 1$, e $u_0(\rho, \theta) = a_0$.

#### References



