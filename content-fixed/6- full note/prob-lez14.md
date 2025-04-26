---
title: prob lez14
description: Appunto automatico
---

2025-04-08 15:51

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags:[[probabilità]]  [[sbobine]]

## prob-lez14


# Varianza di una Variabile Aleatoria

## Definizione di Varianza

Sia $X$ una variabile aleatoria tale che il valore [[atteso]] di $X^2$, indicato come $E[X^2]$, sia finito.

Si definisce **varianza** di $X$, indicata con $Var(X)$ o $\sigma_X^2$, il valore atteso di $(X - m)^2$, dove $m$ è il valore atteso di $X$, ovvero $m = E[X]$.

Matematicamente: $$Var(X) = E[(X - E[X])^2]$$

Questa definizione è valida sia per variabili aleatorie discrete che continue.

**Commento:** La varianza misura la dispersione dei valori di una variabile aleatoria attorno alla sua media. Rappresenta la media dei quadrati delle distanze tra ogni realizzazione della variabile aleatoria e la sua media.

## Momenti di una Variabile Aleatoria

### Momento k-esimo

Il **momento k-esimo** di una variabile aleatoria è definito come $E[X^k]$, se questo valore atteso esiste ed è finito, dove $k$ è un intero.

### Momento k-esimo assoluto

Il **momento k-esimo assoluto** di una variabile aleatoria è definito come $E[|X|^p]$, se questo valore atteso esiste ed è finito, dove $p$ è un numero reale maggiore o uguale a 0 ($p \ge 0$).

**Commento:** La definizione di varianza richiede l'esistenza del momento secondo finito ($E[X^2] < \infty$). Se il momento secondo è finito, allora anche la media (momento primo) è finita.
![[Pasted image 20250408162729.png]]
## Struttura Tipica degli Esami

Gli esami sono generalmente costituiti da:

- Domande a risposta multipla (solitamente due nel compitino).
- Domande a risposta aperta (una nel compitino, due nei compiti più lunghi).
- Esercizi.

**Esempio di domanda a risposta aperta da un compito passato:** Enunciare la definizione di varianza e dimostrare alcune sue proprietà.

## Proprietà della Varianza

### Proprietà 1: Non negatività

**Proposizione:** $Var(X) \ge 0$.

**Dimostrazione:** La varianza è definita come il valore atteso di $(X - m)^2$, dove $(X - m)^2$ è sempre una quantità non negativa (essendo un quadrato). Il valore atteso di una funzione non negativa è sempre non negativo per la proprietà di monotonia del valore atteso.

### Proprietà 2: Formula alternativa per la varianza

**Proposizione:** $Var(X) = E[X^2] - (E[X])^2$.

**Dimostrazione:** Partendo dalla definizione di varianza: $$Var(X) = E[(X - E[X])^2]$$ Svolgendo il quadrato: $$Var(X) = E[X^2 + (E[X])^2 - 2X E[X]]$$ Utilizzando la linearità del valore atteso: $$Var(X) = E[X^2] + E[(E[X])^2] - E[2X E[X]]$$ Poiché $E[X]$ è una costante, $(E[X])^2$ è anch'essa una costante, e $2E[X]$ è una costante. Quindi: $$Var(X) = E[X^2] + (E[X])^2 E - 2E[X] E[X]$$ Ricordando che $E = 1$: $$Var(X) = E[X^2] + (E[X])^2 - 2(E[X])^2$$ $$Var(X) = E[X^2] - (E[X])^2$$

**Commento:** Questa formula è spesso più comoda per calcolare la varianza, in quanto richiede il calcolo del valore atteso di $X^2$ e del quadrato del valore atteso di $X$.

**Errore comune da evitare:** Non scrivere che $Var(X) = E[X^2] - E[X]^2$ (senza le parentesi), in quanto $E[X^2]$ è generalmente diverso da $(E[X])^2$.
![[Pasted image 20250410120607.png]]
### Proprietà 3: Varianza di una trasformazione lineare

**Proposizione:** $Var(aX + b) = a^2 Var(X)$, per ogni $a, b \in \mathbb{R}$ (costanti).

**Dimostrazione:** Utilizzando la definizione di varianza: $$Var(aX + b) = E[((aX + b) - E[aX + b])^2]$$ Per la linearità del valore atteso, $E[aX + b] = aE[X] + b$. Sostituendo: $$Var(aX + b) = E[((aX + b) - (aE[X] + b))^2]$$ $$Var(aX + b) = E[(aX + b - aE[X] - b)^2]$$ $$Var(aX + b) = E[(aX - aE[X])^2]$$ $$Var(aX + b) = E[(a(X - E[X]))^2]$$ $$Var(aX + b) = E[a^2 (X - E[X])^2]$$ Poiché $a^2$ è una costante, può essere portata fuori dal valore atteso per la linearità: $$Var(aX + b) = a^2 E[(X - E[X])^2]$$ Riconoscendo che $E[(X - E[X])^2]$ è la definizione di $Var(X)$: $$Var(aX + b) = a^2 Var(X)$$

**Commento:** Questa proprietà mostra come la varianza viene scalata per trasformazioni lineari. L'aggiunta di una costante $b$ non influisce sulla varianza, mentre la moltiplicazione per una costante $a$ comporta una moltiplicazione della varianza per $a^2$.
![[Pasted image 20250410120707.png]]
### Proprietà 4: Varianza nulla

**Proposizione:** $Var(X) = 0$ se e solo se esiste una costante $c$ tale che $P(X = c) = 1$.

**Dimostrazione:** $(\Rightarrow)$ Se $Var(X) = 0$, allora $E[(X - E[X])^2] = 0$. Poiché $(X - E[X])^2$ è una variabile aleatoria non negativa, il suo valore atteso è zero se e solo se la variabile è zero con probabilità 1. Quindi, $P((X - E[X])^2 = 0) = 1$, il che implica $P(X - E[X] = 0) = 1$, ovvero $P(X = E[X]) = 1$. In questo caso, $c = E[X]$.

$(\Leftarrow)$ Se esiste una costante $c$ tale che $P(X = c) = 1$, allora $E[X] = c$. Quindi, $Var(X) = E[(X - c)^2]$. Poiché $X = c$ con probabilità 1, $(X - c)^2 = (c - c)^2 = 0$ con probabilità 1. Pertanto, $E[(X - c)^2] = E = 0$, quindi $Var(X) = 0$.

**Commento:** Una variabile aleatoria ha varianza zero solo se è degenere, cioè assume un singolo valore con probabilità 1.
![[Pasted image 20250410120022.png]]
## Finitudine dei Momenti

**Osservazione:** Se il momento $S$-esimo assoluto di $X$ è finito per $S > 0$ ($E[|X|^S] < \infty$), allora il momento $r$-esimo assoluto di $X$ è finito per ogni $0 < r < S$ ($E[|X|^r] < \infty$).

**Spiegazione:** Si considera la variabile aleatoria non negativa $|X|^r$. Si ha che $|X|^r \le 1 + |X|^S$. Applicando la linearità e la **monotonia** del valore atteso per variabili aleatorie positive (se $P(Y \le Z) = 1$, allora $E[Y] \le E[Z]$): $$E[|X|^r] \le E[1 + |X|^S] = E + E[|X|^S] = 1 + E[|X|^S]$$ Poiché $E[|X|^S]$ è finito per ipotesi, anche $1 + E[|X|^S]$ è finito. Pertanto, $E[|X|^r]$ è finito.

**Conseguenza:** Se il momento secondo è finito ($E[X^2] < \infty$), allora anche il momento primo assoluto (e quindi il momento primo) è finito ($E[|X|] < \infty$ e $E[X] < \infty$). Questo giustifica l'assunzione che il valore atteso $m = E[X]$ sia finito nella definizione di varianza.

![[Pasted image 20250410120409.png]]

## Standardizzazione di una Variabile Aleatoria

Sia $X$ una variabile aleatoria con valore atteso $m = E[X]$ e varianza finita $Var(X) = \sigma^2$, dove $\sigma = \sqrt{Var(X)}$ è la **deviazione standard** (assumendo $\sigma > 0$).

Si definisce la **standardizzazione** di $X$ una nuova variabile aleatoria $Y$ data da: $$Y = \frac{X - m}{\sigma}$$

### Proprietà della Variabile Aleatoria Standardizzata

#### Media di $Y$

$$E[Y] = E\left[\frac{X - m}{\sigma}\right] = E\left[\frac{1}{\sigma}X - \frac{m}{\sigma}\right]$$ Utilizzando la linearità del valore atteso: $$E[Y] = \frac{1}{\sigma}E[X] - \frac{m}{\sigma}E = \frac{1}{\sigma}m - \frac{m}{\sigma}(1) = \frac{m}{\sigma} - \frac{m}{\sigma} = 0$$ Quindi, la variabile aleatoria standardizzata $Y$ ha **media 0**.

#### Varianza di $Y$

$$Var(Y) = Var\left[\frac{X - m}{\sigma}\right] = Var\left[\frac{1}{\sigma}X - \frac{m}{\sigma}\right]$$ Utilizzando la proprietà $Var(aX + b) = a^2 Var(X)$ con $a = \frac{1}{\sigma}$ e $b = -\frac{m}{\sigma}$: $$Var(Y) = \left(\frac{1}{\sigma}\right)^2 Var(X) = \frac{1}{\sigma^2} \sigma^2 = 1$$ Quindi, la variabile aleatoria standardizzata $Y$ ha **varianza 1**.

**Commento:** La standardizzazione trasforma una variabile aleatoria in una con media zero e varianza unitaria. Questo è utile per confrontare variabili aleatorie con scale e medie diverse. La standardizzazione non richiede alcuna ipotesi sulla forma della distribuzione di $X$, ma solo che abbia varianza finita.
![[Pasted image 20250410121329.png]]
## Trasformazione Lineare di una Variabile Aleatoria (Modello Scala-Posizione)

Sia $X_0$ una variabile aleatoria con funzione di ripartizione $F_{X_0}(x_0)$. Definiamo una nuova variabile aleatoria $X$ come una trasformazione lineare di $X_0$: $$X = sX_0 + \mu$$ dove $\mu \in \mathbb{R}$ e $s > 0$ sono costanti. Questo tipo di modello è chiamato **modello scala-posizione**. $\mu$ rappresenta la traslazione (posizione), e $s$ rappresenta la dilatazione o contrazione (scala).

### Funzione di Ripartizione di $X$

**Proposizione:** La funzione di ripartizione di $X$, $F_X(x) = P(X \le x)$, è data da: $$F_X(x) = F_{X_0}\left(\frac{x - \mu}{s}\right)$$

**Dimostrazione:** $$F_X(x) = P(X \le x) = P(sX_0 + \mu \le x)$$ Sottraendo $\mu$ da entrambi i lati della disuguaglianza: $$F_X(x) = P(sX_0 \le x - \mu)$$ Dividendo per $s$ (ricordando che $s > 0$, quindi la direzione della disuguaglianza non cambia): $$F_X(x) = P\left(X_0 \le \frac{x - \mu}{s}\right)$$ Per definizione di funzione di ripartizione di $X_0$: $$F_X(x) = F_{X_0}\left(\frac{x - \mu}{s}\right)$$
![[Pasted image 20250410121726.png]]
### Funzione di Densità di $X$ (se $X_0$ è assolutamente continua)

**Proposizione:** Se $X_0$ è assolutamente continua con funzione di densità $f_{X_0}(x_0)$, allora anche $X$ è assolutamente continua e la sua funzione di densità $f_X(x)$ è data da: $$f_X(x) = \frac{1}{s} f_{X_0}\left(\frac{x - \mu}{s}\right)$$

**Dimostrazione (informale):** La funzione di densità è la derivata della funzione di ripartizione (dove esiste). Quindi: $$f_X(x) = \frac{d}{dx} F_X(x) = \frac{d}{dx} F_{X_0}\left(\frac{x - \mu}{s}\right)$$ Utilizzando la regola della catena: $$f_X(x) = f_{X_0}\left(\frac{x - \mu}{s}\right) \cdot \frac{d}{dx}\left(\frac{x - \mu}{s}\right)$$ $$\frac{d}{dx}\left(\frac{x - \mu}{s}\right) = \frac{1}{s} \frac{d}{dx}(x - \mu) = \frac{1}{s}(1 - 0) = \frac{1}{s}$$ Quindi: $$f_X(x) = \frac{1}{s} f_{X_0}\left(\frac{x - \mu}{s}\right)$$

**Commento:** Questa trasformazione mostra come la funzione di ripartizione e la funzione di densità cambiano sotto una trasformazione lineare. La divisione per $s$ nella funzione di densità assicura che l'integrale della densità di $X$ su tutto $\mathbb{R}$ sia ancora uguale a 1. La standardizzazione è un caso particolare di questa trasformazione con $s = \sigma$ e $\mu = m$.
![[Pasted image 20250410122100.png]]
## Esercizi e Materiali Aggiuntivi

Il professore ha caldamente invitato a fare gli esercizi, sia quelli svolti durante le esercitazioni di questa e della prossima settimana, sia quelli indicati nel materiale aggiuntivo fornito.

Nel materiale aggiuntivo è presente un riferimento puntuale agli esercizi e alle domande (sia teoriche che a risposta multipla) tratte dai compiti d'esame dell'anno scorso che si possono già svolgere con le conoscenze acquisite fino a questa lezione (inclusa la varianza). Questi esercizi rappresentano un buon esempio di ciò che potrebbe essere chiesto nel compitino.

**Esempio discusso dal professore:** Considerare una variabile aleatoria discreta $X$ che assume valori $k$ con probabilità proporzionale a $\frac{k}{k^c}$ per $k \ge 1$ (dove $c$ è una costante tale che la serie $\sum_{k=1}^\infty \frac{k}{k^c}$ converge). In questo caso, la probabilità che $X$ sia finita è 1, ma il valore atteso di $X$ potrebbe essere infinito (ad esempio, se $c \le 2$). Questo illustra che **avere probabilità 1 che una variabile sia finita non implica che il suo valore atteso sia finito**. La dimostrazione fornita era che $E[X] = \sum_{k} k \cdot P(X=k)$, e se $P(X=k) = \frac{C k}{k^c}$, allora $E[X] = \sum_{k} k \cdot \frac{C k}{k^c} = C \sum_{k} \frac{k^2}{k^c} = C \sum_{k} k^{2-c}$, che diverge se $2-c \ge -1$ (ovvero $c \le 3$). L'esempio più preciso fatto dal professore era con $P(X=k) \propto \frac{1}{k^c}$, e in quel caso $E[X] = \sum k \cdot \frac{C}{k^c} = C \sum k^{1-c}$, che diverge se $1-c \ge -1$ ($c \le 2$). **Errore nella trascrizione precedente, la proporzionalità era a $K/K^c$ e l'esempio fatto era che $E[X] = \sum K \cdot \frac{C K}{K^c} = C \sum K^{2-c}$ diverge se $2-c \ge -1$ ($c \le 3$)**. Tuttavia, il concetto chiave rimane: probabilità di essere finita uguale a 1 non implica valore atteso finito.

Il professore ha anche menzionato che nei prossimi giorni potrebbe essere fornito ulteriore materiale.

___


___
# Spiegazione dei Concetti Chiave sulle Variabili Aleatorie

## Densità e Funzione di Ripartizione

### Individuare la Densità e la Sua Verifica

Il professore spiega come, data una funzione di ripartizione $F(x)$, si possa ipotizzare la forma della densità $f(x)$. Il metodo suggerito è di "guardare in faccia" la funzione di ripartizione. Se la funzione di ripartizione è concreta, si può controllare se è possibile derivarla.

Formalmente, se si ha una funzione di ripartizione $F_X(x)$, si può tentare di trovare la densità $f_X(x)$ derivandola formalmente: $f_X(x) = \frac{d}{dx} F_X(x)$.

Tuttavia, il professore avverte che la derivata potrebbe non esistere in tutti i punti.

Una volta ottenuta una forma per la densità, è necessario verificarla. La verifica consiste nel calcolare l'integrale della densità così ottenuta tra $-\infty$ e $x$ e controllare se si ottiene la funzione di ripartizione originale: $F_X(x) = \int_{-\infty}^{x} f_X(t) dt$.

Questo processo di verifica è descritto come un cambio di variabili nell'integrale.

## Modello Scala Posizione

### Definizione e Vantaggi

Nel contesto di un modello scala posizione, si ha spesso una funzione di ripartizione o una densità assolutamente continua. La proprietà fondamentale di questo modello è che, a partire da una densità, si può costruire un'intera famiglia di densità tramite una trasformazione di scala e posizione.

### Esempio della Famiglia Gaussiana

Un esempio significativo di modello scala posizione è la famiglia delle distribuzioni Gaussiane (o Normali) al variare dei parametri $\mu$ (media) e $\sigma^2$ (varianza).

La densità di una variabile aleatoria $X$ Gaussiana con media $\mu$ e varianza $\sigma^2$ è data da: $$f_X(x) = \frac{1}{\sqrt{2 \pi \sigma^2}} e^{-\frac{(x - \mu)^2}{2 \sigma^2}}$$

Considerando una variabile aleatoria $X_0$ Gaussiana standard (con media 0 e varianza 1), la cui densità è: $f_{X_0}(x_0) = \frac{1}{\sqrt{2 \pi}} e^{-\frac{x_0^2}{2}}$.

Si può notare che la densità di $X$ può essere espressa in termini della densità di $X_0$: $f_X(x) = f_{X_0}\left(\frac{x - \mu}{\sigma}\right) \cdot \frac{1}{\sigma}$.

Questo dimostra che una variabile aleatoria Gaussiana con parametri $\mu$ e $\sigma^2$ può essere vista come un modello scala posizione a partire da una Gaussiana standard. In altre parole, $X$ può essere generata da $X_0$ tramite la trasformazione: $X = \sigma X_0 + \mu$.

Il professore sottolinea che questo è un modo comodo di pensare una Gaussiana con parametri $\mu$ e $\sigma^2$.
![[Pasted image 20250410122342.png]]
## Valore Atteso e Varianza in un Modello Scala Posizione

### Trasformazioni Lineari e Momenti

Considerando una trasformazione scala posizione di una variabile aleatoria $X_0$ con parametri $s$ (scala) e $\mu$ (posizione), definita come $X = sX_0 + \mu$.

Se la varianza di $X_0$ è finita, allora il valore atteso di $X$ è: $E[X] = E[sX_0 + \mu] = sE[X_0] + \mu$.

E la varianza di $X$ è: $Var(X) = Var(sX_0 + \mu) = s^2 Var(X_0)$.
![[Pasted image 20250410122530.png]]
### Dipendenza dai Momenti della Variabile Base

Il professore evidenzia che in un modello scala posizione, $\mu$ non è sempre la media di $X$ e $s$ non è sempre la varianza di $X$. Dipende dai valori della media e della varianza di $X_0$.

- Se $E[X_0] = 0$, allora $E[X] = \mu$.
- Se $Var(X_0) = 1$, allora $Var(X) = s^2$.

### Esempio della Gaussiana (Ritorno)

Nel caso della Gaussiana, se $X_0 \sim N(0, 1)$, allora $E[X_0] = 0$ e $Var(X_0) = 1$. Di conseguenza, se $X = \sigma X_0 + \mu$, allora $E[X] = \mu$ e $Var(X) = \sigma^2$. Questo giustifica perché $\mu$ e $\sigma^2$ sono chiamati rispettivamente media e varianza per la distribuzione Gaussiana.

### Modello Scala Posizione Senza Momenti Finiti: L'Esempio della Cauchy

Il professore menziona che si può avere un modello scala posizione anche per variabili aleatorie che non hanno varianza o media finita, come la distribuzione di Cauchy. Nella parametrizzazione del professore (indicata con $S$ e $M$), la distribuzione di Cauchy è un modello scala posizione nonostante non ammetta né media né varianza finita.

## Valore Atteso e Varianza della Gaussiana Standard

### Verifica della Media Nulla

Per verificare che una Gaussiana standard $X_0$ ha media nulla, si calcola il valore atteso: $E[X_0] = \int_{-\infty}^{+\infty} x f_{X_0}(x) dx = \int_{-\infty}^{+\infty} x \frac{1}{\sqrt{2 \pi}} e^{-\frac{x^2}{2}} dx$.

La funzione integranda $g(x) = x e^{-\frac{x^2}{2}}$ è una funzione dispari (simmetrica rispetto all'origine), cioè $g(-x) = -g(x)$. Pertanto, l'integrale su un intervallo simmetrico come $(-\infty, +\infty)$ è uguale a 0: $E[X_0] = 0$.

### Verifica della Varianza Unitaria

La varianza di $X_0$ è data da $Var(X_0) = E[X_0^2] - (E[X_0])^2$. Poiché $E[X_0] = 0$, si ha $Var(X_0) = E[X_0^2]$.

$Var(X_0) = \int_{-\infty}^{+\infty} x^2 f_{X_0}(x) dx = \int_{-\infty}^{+\infty} x^2 \frac{1}{\sqrt{2 \pi}} e^{-\frac{x^2}{2}} dx$.

Il professore lascia come esercizio verificare che questo integrale è uguale a 1.
![[Pasted image 20250410122713.png]]
## Disuguaglianze Basate sul Valore Atteso

### Introduzione

Il professore introduce il concetto di disuguaglianze costruite a partire dai valori attesi, tra cui la varianza, come strumenti per stimare quantità in probabilità.

### Disuguaglianza di Jensen

#### Enunciato

Sia $X$ una variabile aleatoria reale tale che $E[X]$ sia finito. Sia $g: \mathbb{R} \to \mathbb{R}$ una funzione convessa e supponiamo che $E[g(X)]$ sia ben definito e finito. Allora vale la disuguaglianza di Jensen: $g(E[X]) \le E[g(X)]$.

#### Funzioni Convesse

Una funzione $g(x)$ è convessa se, per ogni coppia di punti $x_1, x_2$ e per ogni $\lambda \in$, si ha: $g(\lambda x_1 + (1 - \lambda) x_2) \le \lambda g(x_1) + (1 - \lambda) g(x_2)$. Geometricamente, il segmento che congiunge due punti sul grafico della funzione sta sopra o sulla funzione stessa.

#### Esempi di Funzioni Convesse

Esempi tipici di funzioni convesse sono il quadrato ($g(x) = x^2$) e il modulo ($g(x) = |x|$).

#### Relazione con la Disuguaglianza del Modulo

Nel caso del modulo ($g(x) = |x|$), la disuguaglianza di Jensen diventa: $|E[X]| \le E[|X|]$. Questa è la disuguaglianza del modulo, che può aiutare a ricordare la direzione della disuguaglianza di Jensen per funzioni convesse.
![[Pasted image 20250410124841.png]]
### Disuguaglianza di Markov Generalizzata

#### Enunciato

Sia $h: \mathbb{R} \to [0, +\infty)$ una funzione misurabile non negativa tale che $E[h(X)] < +\infty$. Allora, per ogni $\epsilon > 0$, si ha: $$P(h(X) \ge \epsilon) \le \frac{E[h(X)]}{\epsilon}$$

#### Dimostrazione

Si definisce una variabile aleatoria $Y = h(X) \mathbb{1}_{{h(X) \ge \epsilon}}$, dove $\mathbb{1}_{{h(X) \ge \epsilon}}$ è la funzione indicatrice dell'evento ${h(X) \ge \epsilon}$.

- Se $h(X) < \epsilon$, allora $\mathbb{1}_{{h(X) \ge \epsilon}} = 0$, e $Y = h(X) \ge 0$.
- Se $h(X) \ge \epsilon$, allora $\mathbb{1}_{{h(X) \ge \epsilon}} = 1$, e $Y = h(X) \ge \epsilon$.

Quindi, $Y$ è una variabile aleatoria non negativa ($Y \ge 0$). Inoltre, $Y \ge \epsilon \mathbb{1}_{{h(X) \ge \epsilon}}$.

Prendendo il valore atteso di entrambi i lati e usando la linearità del valore atteso e il fatto che $E[\mathbb{1}_A] = P(A)$: $E[Y] \ge E[\epsilon \mathbb{1}_{{h(X) \ge \epsilon}}] = \epsilon E[\mathbb{1}_{{h(X) \ge \epsilon}}] = \epsilon P(h(X) \ge \epsilon)$.

D'altra parte, per definizione di $Y$: $E[Y] = E[h(X) \mathbb{1}_{{h(X) \ge \epsilon}}]$.

Poiché $h(X) \mathbb{1}_{{h(X) \ge \epsilon}} \le h(X)$ (essendo $\mathbb{1}$ o 0 o 1 e $h(X) \ge 0$), per la proprietà di monotonia del valore atteso: $E[Y] \le E[h(X)]$.

Combinando le due disuguaglianze per $E[Y]$: $\epsilon P(h(X) \ge \epsilon) \le E[Y] \le E[h(X)]$.

Dividendo per $\epsilon$ (che è positivo): $P(h(X) \ge \epsilon) \le \frac{E[h(X)]}{\epsilon}$.
![[Pasted image 20250410125451.png]]
### Disuguaglianza di Markov

La disuguaglianza di Markov è un caso particolare della disuguaglianza di Markov generalizzata. Sia $p > 0$ e supponiamo che $E[|X|^p] < +\infty$. Scegliendo $h(x) = |x|^p$ e $\epsilon = a^p$ (per $a > 0$) nella disuguaglianza di Markov generalizzata, si ottiene: $P(|X|^p \ge a^p) \le \frac{E[|X|^p]}{a^p}$.

Poiché $|X|^p \ge a^p$ è equivalente a $|X| \ge a$ per $p > 0$ e $a > 0$, la disuguaglianza di Markov è: $P(|X| \ge a) \le \frac{E[|X|^p]}{a^p}$.

Spesso la disuguaglianza di Markov viene usata con $p = 1$: $P(|X| \ge a) \le \frac{E[|X|]}{a}$.
![[Pasted image 20250410125544.png]]
### Disuguaglianza di Chebyshev

La disuguaglianza di Chebyshev è un altro caso particolare della disuguaglianza di Markov generalizzata. Supponiamo che la varianza di $X$, $Var(X) = \sigma^2$, sia finita. Si sceglie $h(x) = (x - E[X])^2$ e $\epsilon = \epsilon^2$ (usando $\epsilon$ per la distanza dalla media) nella disuguaglianza di Markov generalizzata.

$P((X - E[X])^2 \ge \epsilon^2) \le \frac{E[(X - E[X])^2]}{\epsilon^2}$.

L'evento $(X - E[X])^2 \ge \epsilon^2$ è equivalente a $|X - E[X]| \ge \epsilon$. Inoltre, $E[(X - E[X])^2] = Var(X)$. Quindi la disuguaglianza di Chebyshev è: $P(|X - E[X]| \ge \epsilon) \le \frac{Var(X)}{\epsilon^2}$.

Questa disuguaglianza fornisce un limite superiore alla probabilità che una variabile aleatoria si discosti dalla sua media di una quantità maggiore o uguale a $\epsilon$, in termini della sua varianza. Il professore commenta che se $\epsilon$ è piccolo, il limite potrebbe essere maggiore di 1 e quindi poco significativo, ma se la varianza è piccola, la probabilità di grandi deviazioni dalla media è limitata superiormente da un valore piccolo.
![[Pasted image 20250410130840.png]]
### Relazione tra Momenti Finiti

Il professore introduce brevemente la relazione tra momenti finiti di ordini diversi. Se il momento $s$-esimo di $|X|$ è finito ($E[|X|^s] < +\infty$) e $r \le s$, allora anche il momento $r$-esimo di $|X|$ è finito ($E[|X|^r] < +\infty$). Questa proprietà è stata dimostrata in precedenza utilizzando una disuguaglianza.

### Disuguaglianza di Lyapunov

La disuguaglianza di Lyapunov fornisce una relazione più precisa tra i momenti finiti. Se $E[|X|^s] < +\infty$ per $s > r \ge 0$, allora: $(E[|X|^r])^{1/r} \le (E[|X|^s])^{1/s}$.

Questa disuguaglianza implica che se il momento $s$-esimo è finito, allora anche tutti i momenti di ordine inferiore $r$ (con $r \ge 0$) sono finiti. La disuguaglianza di Lyapunov può essere dimostrata come conseguenza della disuguaglianza di Jensen. Il termine $(E[|X|^p])^{1/p}$ è chiamato norma $L^p$ di $X$. La disuguaglianza di Lyapunov afferma che la norma $L^p$ è una funzione crescente di $p$.

# Variabili Aleatorie con Momento $p$-esimo Finito e Spazi $L^p$

## Osservazioni Preliminari sulle Disuguaglianze di Probabilità

## Introduzione agli Spazi $L^p$

Si introduce l'argomento delle **variabili aleatorie con momento $p$-esimo finito**, che sono collegate agli **spazi $L^p$**. Il professore specifica che la trattazione sarà limitata al caso delle variabili aleatorie, senza approfondire la teoria generale degli spazi $L^p$ e della misura.

### Definizione di $L^p$

Si fissa $p > 0$. Dato uno spazio di probabilità $(\Omega, \mathcal{F}, P)$, si definisce $L^p = L^p(\Omega, \mathcal{F}, P)$ (a volte indicato anche come $L^p(\Omega)$ o semplicemente $L^p$) come l'insieme di tutte le variabili aleatorie $X$ a valori reali (borelliani) tali che il loro **momento $p$-esimo è finito**, ovvero $E[|X|^p] < \infty$.

### Proprietà degli Spazi $L^p$

Consideriamo due variabili aleatorie $X$ e $Y$ definite sullo stesso spazio di probabilità, tali che $X \in L^p$ e $Y \in L^p$, cioè entrambe hanno momento $p$-esimo finito.

#### Somma di Variabili Aleatorie in $L^p$

Una domanda naturale è cosa si può dire di $X + Y$.

- **Disuguaglianza Elementare per $|X + Y|^p$**: Si ricorda una disuguaglianza elementare:
    
    - Se $0 < p \le 1$, allora $|x + y|^p \le |x|^p + |y|^p$ per ogni $x, y \in \mathbb{R}$.
    - Se $p > 1$, allora esiste una costante $C_p$ (che dipende da $p$) tale che $|x + y|^p \le C_p (|x|^p + |y|^p)$ per ogni $x, y \in \mathbb{R}$. Questa disuguaglianza può essere dimostrata usando la proprietà di convessità della funzione $x \mapsto |x|^p$ per $p > 1$.
      ![[Pasted image 20250410131418.png]]
- **Chiusura di $L^p$ rispetto alla Somma**: Se $X_1 \in L^p$ e $X_2 \in L^p$, allora $X_1 + X_2 \in L^p$.
    
    - Per dimostrarlo, si considera il momento $p$-esimo di $|X_1 + X_2|$:
        - $E[|X_1 + X_2|^p] \le E[C_p (|X_1|^p + |X_2|^p)] = C_p E[|X_1|^p] + C_p E[|X_2|^p] < \infty$, dove $C_p = 1$ se $0 < p \le 1$ e $C_p = 2^{p-1}$ se $p > 1$ (quest'ultima non è esplicitamente menzionata nel testo, ma è una forma comune della costante).
    - Poiché $E[|X_1|^p] < \infty$ e $E[|X_2|^p] < \infty$, anche $E[|X_1 + X_2|^p]$ è finito, quindi $X_1 + X_2 \in L^p$.
- **Chiusura di $L^p$ rispetto alla Moltiplicazione per Scalare**: Se $X_1 \in L^p$ e $a \in \mathbb{R}$, allora $aX_1 \in L^p$.
    
    - $E[|aX_1|^p] = E[|a|^p |X_1|^p] = |a|^p E[|X_1|^p] < \infty$, dato che $E[|X_1|^p] < \infty$ e $|a|^p$ è una costante finita.
      ![[Pasted image 20250410131648.png]]

#### Relazione tra $L^p$ e $L^q$

Se $X \in L^p$, allora $X \in L^q$ per ogni $0 < q \le p$. Questo significa che se il momento di ordine $p$ è finito, allora tutti i momenti di ordine inferiore $q$ (con $q \le p$) sono anch'essi finiti. Di conseguenza, gli spazi $L^p$ sono "scatolati" uno dentro l'altro: più $p$ cresce, più l'insieme $L^p$ diventa "piccolo" (nel senso dell'inclusione).

#### $L^p$ come Spazio Lineare

Le proprietà di chiusura rispetto alla somma e alla moltiplicazione per scalare implicano che $L^p$ (sia la versione "storta" che quella "dritta", come verrà spiegato) è uno **spazio vettoriale** (o spazio lineare). Questo significa che combinazioni lineari di elementi in $L^p$ rimangono in $L^p$.

## Distinzione tra $L^p$ "storto" e $L^p$ "dritto"

Il professore introduce una sottigliezza riguardante la definizione precisa degli spazi $L^p$, distinguendo tra una notazione $L^p$ "piccolo" (o "storto") e una notazione $L^p$ "grande" (o "dritto").

### Il Problema di $L^p$ "storto"

Lo spazio $L^p$ "storto" è definito come l'insieme delle variabili aleatorie (funzioni da $\Omega$ a $\mathbb{R}$) con momento $p$-esimo finito. Il problema con questa definizione è che possono esistere due variabili aleatorie $X$ e $X'$ tali che $P(X(\omega) = X'(\omega)) = 1$ (sono uguali quasi certamente), ma $X(\omega) \neq X'(\omega)$ per qualche $\omega \in \Omega$. Considerate come funzioni, $X$ e $X'$ sono distinte, ma ai fini probabilistici (calcolo di probabilità e valori attesi) si comportano in modo identico.

### Spazi Vettoriali Normati e la Necessità di $L^p$ "dritto"

Una proprietà fondamentale degli spazi vettoriali normati è che se la norma di un elemento è zero, allora l'elemento deve essere l'elemento nullo. Si introduce l'idea di definire una **norma** sugli spazi $L^p$, chiamata **norma $p$**, definita come $||X||_p = (E[|X|^p])^{1/p}$ (per $p \ge 1$).

Il problema sorge con $L^p$ "storto" perché se $E[|X|^p] = 0$, ciò implica che $P(X = 0) = 1$, ma non necessariamente che $X(\omega) = 0$ per ogni $\omega \in \Omega$. Quindi, la norma $p$ potrebbe essere zero per una variabile aleatoria che non è identicamente nulla come funzione.

### Definizione di $L^p$ "dritto" tramite Classi di Equivalenza

Per ovviare a questo problema, si definisce $L^p$ "dritto" ($L^p$) come l'insieme delle **classi di equivalenza** di variabili aleatorie in $L^p$ "storto". La relazione di equivalenza è definita come: $X \sim X'$ se $P(X = X') = 1$ (uguaglianza quasi certa). Un elemento di $L^p$ "dritto" non è una singola funzione, ma un insieme di funzioni che sono tutte uguali quasi certamente. In questo modo, se la norma $p$ di una classe di equivalenza è zero, allora ogni rappresentante della classe è uguale a zero quasi certamente, e la classe di equivalenza è quella della variabile aleatoria identicamente nulla (quasi certamente).
![[Pasted image 20250410132241.png]]
### Disuguaglianza di Minkowski

Per $p \ge 1$, se $X_1 \in L^p$ e $X_2 \in L^p$, vale la **disuguaglianza di Minkowski**: $$(E[|X_1 + X_2|^p])^{1/p} \le (E[|X_1|^p])^{1/p} + (E[|X_2|^p])^{1/p}$$ Questa disuguaglianza implica che $L^p$ "dritto" è uno spazio normato rispetto alla norma $||X||_p = (E[|X|^p])^{1/p}$ per $p \ge 1$. La disuguaglianza triangolare per la norma deriva proprio dalla disuguaglianza di Minkowski.
![[Pasted image 20250410132501.png]]
### Osservazioni sulla Praticità

Il professore rassicura che per la maggior parte delle applicazioni del corso, non sarà necessario preoccuparsi eccessivamente della distinzione tra $L^p$ "storto" e $L^p$ "dritto". Spesso si continuerà a lavorare con le variabili aleatorie direttamente, tenendo presente che le uguaglianze e i limiti sono da intendersi quasi certamente. L'introduzione di $L^p$ "dritto" serve principalmente a fornire una base matematica rigorosa per definire gli spazi $L^p$ come spazi normati.
## La Proprietà Fondamentale degli Spazi Normati

In uno spazio normato, una proprietà essenziale è che la **norma di un elemento è zero se e solo se l'elemento è l'elemento nullo**. Matematicamente, questa proprietà si esprime come:

$|x| = 0 \iff x = 0$

dove $x$ è un elemento dello spazio normato e $0$ è l'elemento neutro rispetto all'addizione (l'elemento nullo).

Il professore sottolinea che questa affermazione **non può essere fatta direttamente** sullo spazio delle funzioni $L^p$ "storto" (riferendosi allo spazio delle variabili aleatorie con momento $p$-esimo finito) senza l'introduzione delle **classi di equivalenza**.

## Necessità delle Classi di Equivalenza in $L^p$

La necessità delle classi di equivalenza nasce dal fatto che in $L^p$, una variabile aleatoria può avere **norma zero senza essere la variabile aleatoria nulla** in senso stretto. Questo accade perché la norma in $L^p$ è definita in termini di valore atteso. Ad esempio, se il valore atteso di $|X|^p$ è zero ($E[|X|^p] = 0$), ciò implica che la **probabilità che $X$ sia uguale a zero è uno** ($P(X=0) = 1$). Tuttavia, questo non significa che la variabile aleatoria $X$ sia identicamente zero su tutto lo spazio campionario; potrebbe essere diversa da zero su un insieme di probabilità zero.

Per fare in modo che $L^p$ sia effettivamente uno spazio normato, è necessario considerare le **classi di equivalenza** di variabili aleatorie che sono **uguali quasi certamente**.

### Definizione di Classi di Equivalenza

Le classi di equivalenza sono definite a partire da una **relazione di equivalenza** su un insieme. Quozientare un insieme rispetto a una relazione di equivalenza significa che **un punto dello spazio quozientato rappresenta tutte le funzioni (o variabili aleatorie nel nostro caso) che sono equivalenti** secondo quella relazione.

Nel contesto di $L^p$, la relazione di equivalenza è l'uguaglianza **quasi certa**. Due variabili aleatorie $X$ e $Y$ sono equivalenti ($X \sim Y$) se $P(X = Y) = 1$. Una classe di equivalenza $[X]$ è quindi l'insieme di tutte le variabili aleatorie $Y$ tali che $Y \sim X$.
![[Pasted image 20250410133222.png]]
### Rappresentanti delle Classi di Equivalenza

All'interno di una classe di equivalenza, si può scegliere un **rappresentante**. Un rappresentante conveniente potrebbe essere la variabile aleatoria identicamente zero, ma la classe contiene anche altre variabili che sono zero quasi certamente ma non ovunque.

Il professore afferma che per la verifica che $L^p$ sia uno spazio vettoriale, non è strettamente necessario introdurre le classi di equivalenza. È sufficiente che la somma di due variabili aleatorie in $L^p$ appartenga ancora a $L^p$, e questo vale per la funzione che è la classe di equivalenza della somma.

## Il Significato di Uguaglianza in $L^p$: "Quasi Certamente"

In $L^p$, quando si afferma che due variabili aleatorie sono uguali ($X = Y$), spesso questa uguaglianza deve essere interpretata nel senso di **uguaglianza quasi certa** ($P(X = Y) = 1$).

Il professore fa notare che nel corso, spesso si incontreranno affermazioni come $X + Y = 0$, che in un contesto rigoroso di $L^p$ dovrebbero essere intese come $P(X + Y = 0) = 1$. Questa è una sottigliezza che emerge quando si lavora formalmente con gli spazi $L^p$ "dritti" (quozientati rispetto alle classi di equivalenza).

Un altro esempio menzionato è che se il valore atteso di una variabile aleatoria $X$ (in $L^1$) è finito, allora la variabile aleatoria è **quasi certamente finita**.

## Spazio Vettoriale $L^p$

Lo spazio $L^p$ è uno **spazio lineare**. Questo significa che se si prendono due variabili aleatorie $X$ e $Y$ appartenenti a $L^p$, e due scalari $a$ e $b$, allora la combinazione lineare $aX + bY$ appartiene ancora a $L^p$.

$X_1, X_2 \in L^p \implies aX_1 + bX_2 \in L^p, \quad a, b \in \mathbb{R}$

Il professore sottolinea che per dimostrare che $L^p$ è uno spazio lineare, **non è necessario introdurre le classi di equivalenza**.

## Spazio Normato $L^p$ e la Norma

Per definire una **norma** su $L^p$, e quindi fare di $L^p$ uno spazio normato, è necessario identificare le variabili aleatorie quasi certamente uguali, il che porta all'introduzione dello spazio $L^p$ "dritto" (delle classi di equivalenza).

La norma in $L^p$ è definita come:

$|X|_p = (E[|X|^p])^{1/p}$

Il professore specifica che per poter definire una norma in questo modo e avere le proprietà di una norma (in particolare la disuguaglianza triangolare), è necessario che **$p \ge 1$**. Se $p < 1$, si può ancora definire una metrica, ma lo spazio non sarà uno spazio normato.

## La Notazione $L^p$ "Storto" vs. $L^p$ "Dritto"

Il professore utilizza la notazione $L^p$ "storto" per riferirsi allo spazio delle **variabili aleatorie** con momento $p$-esimo finito, mentre $L^p$ "dritto" si riferisce allo spazio delle **classi di equivalenza** di tali variabili aleatorie, dove l'equivalenza è definita dall'uguaglianza quasi certa.

La ragione per introdurre $L^p$ "dritto" è principalmente per avere uno spazio che soddisfi rigorosamente la definizione di spazio normato, in particolare la proprietà che norma zero implica l'elemento nullo.

Tuttavia, il professore ammette che per la maggior parte delle applicazioni e concetti del corso, si può **ragionare direttamente sulle variabili aleatorie** senza necessariamente focalizzarsi sulle classi di equivalenza. Le affermazioni di uguaglianza dovranno essere interpretate tenendo conto che possono valere "quasi certamente".

## Esempio di Somma di Variabili Aleatorie con Momenti Infiniti
![[Pasted image 20250410133507.png]]
Il professore fornisce un esempio per illustrare che la somma di due variabili aleatorie che individualmente non hanno momento primo finito (e quindi non appartengono a $L^1$), può comunque avere momento primo finito.

Consideriamo due variabili aleatorie:

$X_1 = X_0 + \mu$ $X_2 = -X_0$

dove $E[|X_0|] = +\infty$ e $\mu$ è una costante. In questo caso, $E[|X_1|] = E[|X_0 + \mu|]$ e $E[|X_2|] = E[|-X_0|] = E[|X_0|]$ potrebbero essere infiniti.

Tuttavia, la somma delle due variabili aleatorie è:

$X_1 + X_2 = (X_0 + \mu) + (-X_0) = \mu$

Se $\mu$ è una costante finita, allora il suo valore atteso primo è finito ($E[|\mu|] = |\mu| < \infty$). Questo dimostra che **anche se singolarmente le variabili non appartengono a $L^1$, la loro somma può appartenervi**.

Il professore conclude che se una variabile aleatoria appartiene a $L^p$, la stessa cosa vale per la sua classe di equivalenza. Inoltre, se abbiamo due variabili in $L^p$, la loro somma sarà ancora in $L^p$, ma non è detto che se due variabili non sono in $L^p$, la loro somma non possa esserlo.

## Esercizi sulle Variabili Aleatorie

Il professore raccomanda di esercitarsi su variabili aleatorie di diversi tipi: **discrete, assolutamente continue e miste**. Suggerisce di considerare esercizi elementari che richiedono l'applicazione delle definizioni e il calcolo.

Esempi di esercizi menzionati:

- Massimo tra 0 e $X$ ($\max(0, X)$): analizzare quando questa variabile è assolutamente continua e quando non lo è.
- Funzione di ripartizione di $X + 3$, data la funzione di ripartizione di $X$.
- Funzione di ripartizione di $X^2$ e $|X|$, data la funzione di ripartizione di $X$.

È importante anche ripassare i concetti fondamentali di probabilità, come il **teorema di Bayes**, la probabilità elementare, il calcolo combinatorio, i valori attesi, i valori attesi di funzioni e le trasformazioni di variabili aleatorie.
#### References



