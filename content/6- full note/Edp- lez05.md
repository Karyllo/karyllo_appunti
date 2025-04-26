2025-02-24 10:51

_Status: #flashcard_zero #revisione_zero  #riscritto_zero 

_Tags: [[Metodi Analitici per le Equazioni alle Derivate Parziali]]. [[sbobine]]

## Edp- lez05

### Commenti sugli esercizi della scorsa lezione e problema di Dirichlet

Il professore inizia con un commento sugli esercizi della lezione precedente relativi al problema di Dirichlet, in particolare su un esercizio riguardante il tracciamento con un cerchio. Dopo aver ottenuto una soluzione analitica, si suggerisce di visualizzare il grafico tramite computer. Tuttavia, poiché il computer può solo plottare un numero finito di termini della serie, è necessario interpretare correttamente il significato del grafico ottenuto.

#### Somme parziali e loro significato

La somma parziale della serie fino a $n=5$ fornisce un'approssimazione della soluzione. Per capire cosa rappresenta questa approssimazione, si considera la formula risolutiva ottenuta. Questa formula esprime la soluzione come una funzione armonica all'interno del cerchio. La somma parziale fino a $n=5$ rappresenta la soluzione esatta corrispondente a un dato al bordo diverso, ovvero quello il cui sviluppo in serie di Fourier è la somma parziale fino a $n=5$.

In altre parole, il grafico della somma parziale della soluzione fino a $n=5$ può essere interpretato come la soluzione esatta di un problema con un dato al bordo approssimato, la cui serie di Fourier coincide con la somma parziale considerata.

#### Teoremi di convergenza e dipendenza continua

Per quantificare l'errore commesso approssimando la soluzione con la somma parziale, è necessario combinare due concetti:

1. **Convergenza della serie di Fourier:** La somma parziale della serie di Fourier tende alla serie completa se vale un teorema di convergenza per la serie di Fourier.
2. **Dipendenza continua della soluzione dal dato:** Un teorema che lega l'errore nell'approssimazione della soluzione all'errore nell'approssimazione del dato al bordo.

Idealmente, si vorrebbe un risultato che mostri come l'errore tra due soluzioni è controllato dallo scarto tra i dati al bordo corrispondenti. Questo permetterebbe di affermare che la soluzione ottenuta con la somma parziale è vicina alla soluzione vera nella misura in cui la somma parziale di Fourier approssima il dato al bordo originale.

### Problema di Neumann sul cerchio

Il professore riprende il problema di Neumann sul cerchio. Si ricorda che le soluzioni a variabili separate sono le stesse del problema di Dirichlet. Imponendo che una serie di queste soluzioni soddisfi il dato al bordo, si ottiene una candidata formula risolutiva.

#### Condizione di compatibilità

Una condizione necessaria per l'esistenza di soluzioni è che l'integrale del dato sul bordo sia uguale a zero. Questo è noto come condizione di compatibilità. Fisicamente, questa condizione rappresenta un bilancio nullo tra il calore fornito e sottratto dal bordo in un problema di temperatura stazionaria su un disco.

#### Unicità a meno di una costante additiva

Anche nel problema di Neumann, la soluzione è unica a meno di una costante additiva. Questo emerge naturalmente dai calcoli.

#### Regolarità della soluzione

Se il dato al bordo $g$ è $L^2(0, 2\pi)$, i coefficienti di Fourier sono limitati. La serie che definisce $u$ converge totalmente in ogni cerchio strettamente contenuto in quello dato. Questo implica che $u$ è $C^\infty$ all'interno del cerchio e armonica. Per avere una soluzione classica del problema di Neumann, si richiede che le derivate esistano continue fino al bordo. Questo richiede ipotesi più forti sul dato al bordo.

### Esempi numerici per il problema di Neumann

#### Esempio 1: Dato al bordo discontinuo

Si considera un problema di Neumann con raggio $R=3$ e dato al bordo $g(\theta) = 1$ per $\theta \in (0, \pi)$ e $g(\theta) = -1$ per $\theta \in (-\pi, 0)$. Questo dato al bordo è discontinuo e non soddisfa le ipotesi della teoria generale. Tuttavia, si procede formalmente e si verifica che la condizione di compatibilità è soddisfatta.

La soluzione è data da:

$u(\rho, \theta) = a_0 + \sum_{n=1}^{\infty} \frac{\rho^n}{3^{n-1}} (\alpha_n \cos(n\theta) + \beta_n \sin(n\theta))$

dove $\alpha_n$ e $\beta_n$ sono i coefficienti di Fourier di $g$.

Poiché $g$ è dispari, $\alpha_n = 0$ per ogni $n$. I coefficienti $\beta_n$ sono dati da:

$\beta_n = \frac{1}{\pi} \int_{-\pi}^{\pi} g(\theta) \sin(n\theta) d\theta = \frac{2}{\pi} \int_{0}^{\pi} \sin(n\theta) d\theta = \frac{2}{n\pi} (1 - \cos(n\pi))$

Quindi, $\beta_n = 0$ se $n$ è pari e $\beta_n = \frac{4}{n\pi}$ se $n$ è dispari.

La soluzione diventa:

$u(\rho, \theta) = a_0 + \sum_{k=0}^{\infty} \frac{\rho^{2k+1}}{3^{2k}} \frac{4}{(2k+1)\pi} \sin((2k+1)\theta)$

Il grafico della soluzione mostra un comportamento tipico in corrispondenza della discontinuità del dato al bordo, con il fenomeno di Gibbs.

#### Esempio 2: Dato al bordo trigonometrico

Si considera un problema di Neumann con dato al bordo $g(\theta) = \cos(\theta) \sin^2(\theta)$. In questo caso, il dato al bordo è un polinomio trigonometrico, quindi non è necessario calcolare i coefficienti di Fourier tramite integrazione. Si sfrutta l'identità trigonometrica:

$\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$

Quindi, $g(\theta) = \cos(\theta) \frac{1 - \cos(2\theta)}{2} = \frac{1}{2} \cos(\theta) - \frac{1}{2} \cos(\theta) \cos(2\theta)$

Usando la formula di Werner:

$\cos(\theta) \cos(2\theta) = \frac{1}{2} (\cos(3\theta) + \cos(\theta))$

Quindi, $g(\theta) = \frac{1}{2} \cos(\theta) - \frac{1}{4} \cos(3\theta) - \frac{1}{4} \cos(\theta) = \frac{1}{4} \cos(\theta) - \frac{1}{4} \cos(3\theta)$

La soluzione è data da:

$u(\rho, \theta) = a_0 + \frac{\rho}{4} \cos(\theta) - \frac{\rho^3}{36} \cos(3\theta)$

### Formula integrale di Poisson

Il professore introduce la formula integrale di Poisson come alternativa alla rappresentazione in serie per risolvere il problema di Dirichlet. Questa formula permette di ottenere risultati più raffinati riguardo alla regolarità della soluzione, in particolare in presenza di discontinuità nel dato al bordo. L'idea è di sostituire i coefficienti di Fourier nella formula in serie con le loro espressioni integrali e manipolare l'espressione per ottenere una formula integrale.

#### Passaggi matematici

Si parte dalla formula in serie:

$u(\rho, \theta) = \frac{\alpha_0}{2} + \sum_{n=1}^{\infty} \left(\frac{\rho}{R}\right)^n (\alpha_n \cos(n\theta) + \beta_n \sin(n\theta))$

Sostituendo le espressioni integrali per i coefficienti di Fourier (cambiando la variabile di integrazione da $\theta$ a $\phi$ per evitare confusione):

$\alpha_n = \frac{1}{\pi} \int_{0}^{2\pi} g(\phi) \cos(n\phi) d\phi$ $\beta_n = \frac{1}{\pi} \int_{0}^{2\pi} g(\phi) \sin(n\phi) d\phi$

Si ottiene:

$u(\rho, \theta) = \frac{1}{2\pi} \int_{0}^{2\pi} g(\phi) d\phi + \sum_{n=1}^{\infty} \left(\frac{\rho}{R}\right)^n \left( \frac{1}{\pi} \int_{0}^{2\pi} g(\phi) \cos(n\phi) \cos(n\theta) + g(\phi) \sin(n\phi) \sin(n\theta) d\phi \right)$

$u(\rho, \theta) = \frac{1}{2\pi} \int_{0}^{2\pi} g(\phi) d\phi + \frac{1}{\pi} \int_{0}^{2\pi} g(\phi) \sum_{n=1}^{\infty} \left(\frac{\rho}{R}\right)^n \cos(n(\theta - \phi)) d\phi$

Scambiando la serie con l'integrale (sotto opportune ipotesi di convergenza che verranno dimostrate poi), si ottiene:

$u(\rho, \theta) = \frac{1}{2\pi} \int_{0}^{2\pi} g(\phi) \left[ 1 + 2 \sum_{n=1}^{\infty} \left(\frac{\rho}{R}\right)^n \cos(n(\theta - \phi)) \right] d\phi$

La serie all'interno dell'integrale può essere sommata esplicitamente. Ponendo $z = \frac{\rho}{R} e^{i(\theta - \phi)}$, la serie diventa la parte reale di una serie geometrica:

$1 + 2 \sum_{n=1}^{\infty} \left(\frac{\rho}{R}\right)^n \cos(n(\theta - \phi)) = 1 + 2 \Re \left( \sum_{n=1}^{\infty} z^n \right) = 1 + 2 \Re \left( \frac{z}{1 - z} \right)$

Dopo alcune manipolazioni algebriche, si ottiene:

$1 + 2 \Re \left( \frac{z}{1 - z} \right) = \frac{R^2 - \rho^2}{R^2 + \rho^2 - 2R\rho \cos(\theta - \phi)}$

Sostituendo questa espressione nell'integrale, si ottiene la formula integrale di Poisson:

$u(\rho, \theta) = \frac{1}{2\pi} \int_{0}^{2\pi} g(\phi) \frac{R^2 - \rho^2}{R^2 + \rho^2 - 2R\rho \cos(\theta - \phi)} d\phi$

La funzione $K(\rho, \theta, \phi) = \frac{1}{2\pi} \frac{R^2 - \rho^2}{R^2 + \rho^2 - 2R\rho \cos(\theta - \phi)}$ è nota come nucleo di Poisson.

### Analisi della formula integrale di Poisson e teoremi di convergenza

Il professore spiega in dettaglio alcuni aspetti cruciali riguardanti la **formula integrale di Poisson** e la sua convergenza, concentrandosi sulle condizioni che ne garantiscono la validità e l'applicabilità.

#### Passaggio dalla serie all'integrale: convergenza uniforme

Il punto chiave è **giustificare il passaggio dalla serie all'integrale nella derivazione della formula di Poisson**. Questo scambio è lecito sotto opportune ipotesi di convergenza uniforme della serie.

- Il professore sottolinea che i passaggi che portano alla formula sono puramente algebrici, **eccetto uno**: lo scambio tra la serie e l'integrale.
    
- Questo scambio richiede che la serie di integrali converga uniformemente. In termini matematici, si deve verificare se la seguente serie converge uniformemente per $\theta \in [0, 2\pi]$ quando $\rho$ e $\theta_0$ sono fissati:
    
    $\sum_{n=1}^{\infty} f(\phi) \frac{\rho^n}{R^n} \cos(n(\theta - \theta_0))$
    
    dove $f$ è la funzione integranda.
    
- **Convergenza totale implica convergenza uniforme**: Per dimostrare la convergenza uniforme, si utilizza il criterio di convergenza totale. Si maggiora il modulo di ogni termine della serie con una costante tale che la serie delle costanti converga. In questo caso, si ha:
    
    $$|f(\phi) \frac{\rho^n}{R^n} \cos(n(\theta - \theta_0))| \leq |f(\phi)| \frac{\rho^n}{R^n}$$
    
    Se $|f(\phi)|$ è limitata da una costante $M$ e $\rho < R$, allora la serie converge totalmente e quindi uniformemente.
    
- **Il ruolo di $\rho < R$**: La condizione $\rho < R$ è cruciale per garantire la convergenza della serie geometrica $\sum_{n=1}^{\infty} (\frac{\rho}{R})^n$. Questo assicura che il termine $\frac{\rho^n}{R^n}$ decresca sufficientemente velocemente da rendere convergente la serie.
    

#### Teorema chiave: regolarità all'interno del cerchio

Il professore enuncia un teorema fondamentale:

- Se $f$ è integrabile e limitata su $[0, 2\pi]$, allora la funzione $u(\rho, \theta)$ assegnata dalla formula integrale di Poisson è $C^{\infty}$ (infinitamente differenziabile) e armonica all'interno del cerchio. In altre parole:
    
    $u(\rho, \theta) = \frac{1}{2\pi} \int_{0}^{2\pi} f(\phi) \frac{R^2 - \rho^2}{R^2 + \rho^2 - 2R\rho \cos(\theta - \phi)} d\phi$
    
    è $C^{\infty}$ e $\Delta u = 0$ per $\rho < R$.
    
- Questo teorema è importante perché **garantisce che la formula integrale di Poisson fornisce una soluzione regolare all'interno del cerchio**, sotto ipotesi relativamente deboli sul dato al bordo $f$.
    
- Il professore precisa che questo risultato **non richiede di ripartire da zero per dimostrare la regolarità e l'armonicità** della soluzione ottenuta tramite la formula integrale.
    

#### Teorema di convergenza al bordo: continuità

Il professore introduce un altro teorema cruciale, che riguarda il comportamento della soluzione quando ci si avvicina al bordo del cerchio:

- Se $f$ è integrabile e limitata su $[0, 2\pi]$ e continua in un punto $\theta_0$, allora:
    
    $\lim_{\rho \to R} u(\rho, \theta_0) = f(\theta_0)$
    
    In altre parole, la soluzione $u(\rho, \theta)$ converge al valore del dato al bordo $f$ nel punto di continuità $\theta_0$.
    
- **Significato**: Questo teorema afferma che la formula integrale di Poisson assegna una soluzione che, oltre ad essere armonica all'interno, assume il dato al bordo nei punti in cui il dato al bordo è continuo.
    
- **Caso particolare: dato al bordo continuo su tutto il bordo**: Se $f$ è continua su tutto il bordo (cioè $f \in C^0([0, 2\pi])$ e $f(0) = f(2\pi)$), allora la formula integrale di Poisson fornisce la soluzione classica del problema di Dirichlet.
    

#### Analisi del nucleo di Poisson

Il professore analizza il nucleo di Poisson per fornire un'interpretazione intuitiva dei teoremi di convergenza.

- Il nucleo di Poisson è definito come:
    
    $K(\rho, \theta, \phi) = \frac{1}{2\pi} \frac{R^2 - \rho^2}{R^2 + \rho^2 - 2R\rho \cos(\theta - \phi)}$
    
- **Proprietà chiave**: Il numeratore tende a zero quando $\rho$ tende a $R$. Tuttavia, anche il denominatore può tendere a zero, a seconda del valore di $\theta - \phi$.
    
- **Comportamento al bordo**:
    
    - Se $\theta = \phi$, il denominatore diventa $(R - \rho)^2$, e quindi il nucleo di Poisson tende all'infinito quando $\rho \to R$.
    - Se $\theta \neq \phi$, il denominatore rimane strettamente positivo, e quindi il nucleo di Poisson tende a zero quando $\rho \to R$.
- **Interpretazione**: Questo comportamento suggerisce che il nucleo di Poisson si comporta come una sorta di "delta di Dirac" sulla circonferenza. Quando $\rho$ si avvicina a $R$, il nucleo diventa molto concentrato attorno al punto $\theta = \phi$, mentre tende a zero altrove. Questo spiega perché la soluzione tende al valore del dato al bordo nel punto di continuità.
    

### Regolarità all'interno e convergenza al bordo

Il professore riassume i risultati principali:

- La soluzione $u(\rho, \theta)$ è regolare all'interno del cerchio (cioè $C^{\infty}$) per $\rho < R$.
- La cosa delicata è dimostrare che, quando $\rho$ tende a $R$, la soluzione $u(\rho, \theta)$ tende al dato al bordo $f(\theta)$ nei punti di continuità di $f$.

### Problema di Replay nel semipiano

Il professore introduce il problema di Replay nel semipiano, sottolineando che, insieme al cerchio, rappresenta uno dei domini più semplici per studiare problemi di questo tipo.

- **Motivazione**: L'idea è di analizzare prima questi due esempi concreti (cerchio e semipiano) per comprendere meglio le proprietà delle soluzioni, per poi passare allo studio di proprietà generali del problema di Dirichlet.
- **Trasformata di Fourier**: Per risolvere il problema di Replay nel semipiano, si farà uso della trasformata di Fourier.

### Richiami sulla trasformata di Fourier e teoremi di continuità e derivabilità degli integrali dipendenti da un parametro

#### Necessità di strumenti matematici

Per affrontare il problema di Replay nel semipiano, il professore introduce alcuni strumenti matematici necessari, in particolare teoremi riguardanti la continuità e la derivabilità di integrali dipendenti da un parametro. Questi strumenti sono essenziali per manipolare le formule integrali che si incontrano nella risoluzione di problemi di equazioni alle derivate parziali.

#### Motivazione

L'obiettivo è di giustificare operazioni come portare la derivata sotto il segno di integrale o calcolare limiti sotto il segno di integrale.

#### Setting generale

Si considera una funzione $u(x)$ definita come un integrale:

$$u(x) = \int_{\Omega} K(x, y) dy$$

dove:

- $x$ è un parametro scalare.
- $y$ è la variabile di integrazione.
- $\Omega$ è un sottoinsieme misurabile di $\mathbb{R}$.
- $K(x, y)$ è una funzione integranda.

#### Teorema di continuità

Il professore enuncia un teorema che fornisce condizioni sufficienti per la continuità di $u(x)$:

- **Ipotesi**:
    1. $K(x, y) \in L^1(\Omega)$ per ogni $x$ in un intervallo $I$. In altre parole, per ogni $x \in I$, la funzione $K(x, y)$ è integrabile rispetto a $y$ su $\Omega$.
    2. Esiste un $x_0 \in I$ e un intorno $(x_0 - \delta, x_0 + \delta)$ tale che, per quasi ogni $y \in \Omega$, la funzione $K(x, y)$ (vista come funzione di $x$) è continua in $x_0$.
    3. Esiste una funzione $g(y) \in L^1(\Omega)$ tale che $|K(x, y)| \leq g(y)$ per ogni $x$ nell'intorno $(x_0 - \delta, x_0 + \delta)$ e per quasi ogni $y \in \Omega$. La funzione $g(y)$ è una **dominante integrabile**.
- **Tesi**:
    - $u(x)$ è continua in $x_0$.

#### Idea della dimostrazione

La dimostrazione si basa sul teorema della convergenza dominata di Lebesgue. L'idea è di approssimare $x$ con una successione $x_n$ convergente a $x_0$, e quindi applicare il teorema della convergenza dominata per scambiare il limite con l'integrale.

#### Teorema di derivabilità

Il professore enuncia un teorema che fornisce condizioni sufficienti per la derivabilità di $u(x)$:

- **Ipotesi**:
    1. Esiste un intervallo $(x_0 - \delta, x_0 + \delta)$ e una funzione $g(y) \in L^1(\Omega)$ tale che $K(x, y) \in L^1(\Omega)$ per ogni $x$ in questo intervallo.
    2. Per quasi ogni $y \in \Omega$ e per ogni $x$ nell'intervallo $(x_0 - \delta, x_0 + \delta)$, esiste la derivata parziale di $K$ rispetto a $x$, denotata con $\frac{\partial K}{\partial x}(x, y)$.
    3. Esiste una funzione $g(y) \in L^1(\Omega)$ tale che $|\frac{\partial K}{\partial x}(x, y)| \leq g(y)$ per ogni $x$ nell'intorno $(x_0 - \delta, x_0 + \delta)$ e per quasi ogni $y \in \Omega$. La funzione $g(y)$ è una **dominante integrabile**.
- **Tesi**:
    - Esiste la derivata di $u(x)$ in $x_0$, e si può calcolare scambiando la derivata con l'integrale:
        
        $u'(x_0) = \int_{\Omega} \frac{\partial K}{\partial x}(x_0, y) dy$
        
- **Significato**: Questo teorema afferma che si può derivare sotto il segno di integrale se la derivata parziale dell'integranda esiste, è integrabile e ammette una dominante integrabile.

#### Osservazione

Il professore sottolinea che l'ipotesi cruciale è l'esistenza della **dominante integrabile** per la derivata parziale. Questa condizione garantisce una sorta di "uniformità" nella derivabilità, permettendo lo scambio tra derivata e integrale.

#### Applicazione

Questi teoremi sono fondamentali per verificare che le formule risolutive ottenute (ad esempio, tramite la formula integrale di Poisson) soddisfano effettivamente l'equazione alle derivate parziali. In particolare, permettono di giustificare il calcolo delle derivate necessarie per verificare che la soluzione proposta soddisfa l'equazione.

#### Trasformata di Fourier: definizione e proprietà

Il professore introduce la trasformata di Fourier, uno strumento essenziale per risolvere il problema di Replay nel semipiano.

- **Definizione**: Sia $f \in L^1(\mathbb{R}^n)$ (cioè, $f$ è una funzione integrabile su $\mathbb{R}^n$). La trasformata di Fourier di $f$, denotata con $\hat{f}$ o $F[f]$, è definita come:
    
    $\hat{f}(\xi) = \int_{\mathbb{R}^n} f(x) e^{-2\pi i x \cdot \xi} dx$
    
    dove $x \cdot \xi$ indica il prodotto scalare tra $x$ e $\xi$.
    
- **Osservazioni**:
    
    - La trasformata di Fourier trasforma una funzione nello spazio delle variabili originali ($x$) in una funzione nello spazio delle frequenze ($\xi$).
    - A volte, la trasformata di Fourier è definita senza il fattore $2\pi$ nell'esponenziale. In questo caso, la variabile $\xi$ ha un'interpretazione fisica diversa (non è direttamente la frequenza).
- **Proprietà fondamentali**:
    
    - **Ben definita**: Se $f \in L^1(\mathbb{R}^n)$, allora $\hat{f}$ è ben definita. Questo segue dal fatto che l'integrale che definisce $\hat{f}$ converge, poiché $|e^{-2\pi i x \cdot \xi}| = 1$.
        
    - **Limitata**: Se $f \in L^1(\mathbb{R}^n)$, allora $\hat{f}$ è limitata:
        
        $|\hat{f}(\xi)| \leq \int_{\mathbb{R}^n} |f(x)| dx = ||f||_{L^1}$
        
    - **Continua**: Se $f \in L^1(\mathbb{R}^n)$, allora $\hat{f}$ è continua. Questo può essere dimostrato applicando il teorema di continuità degli integrali dipendenti da un parametro.
        
- **Operatore lineare continuo**: L'operatore che associa a una funzione $f$ la sua trasformata di Fourier $\hat{f}$ è un operatore lineare continuo da $L^1(\mathbb{R}^n)$ allo spazio $C_0(\mathbb{R}^n)$ (funzioni continue che tendono a zero all'infinito). Inoltre, la norma dell'operatore è minore o uguale a 1. In simboli:
    
    $F: L^1(\mathbb{R}^n) \to C_0(\mathbb{R}^n)$
    
    $||\hat{f}||_{C_0(\mathbb{R}^n)} \leq ||f||_{L^1(\mathbb{R}^n)}$ 
#### References



