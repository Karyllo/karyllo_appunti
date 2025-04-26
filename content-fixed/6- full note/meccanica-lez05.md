---
title: meccanica lez05
description: Appunto automatico
---

2025-04-25 12:09

_Status: #flashcard_zero  #riscritto_zero  #revisione_zero 

_Tags: [[meccanica razionale]]  [[sbobine]]

## meccanica-lez05


**Enunciato del Teorema di Mozzi**

Il teorema di Mozzi afferma che: Se la velocità angolare $\Omega$ è diversa da zero ($\Omega \neq 0$) per un corpo rigido, l'atto di moto più generale è **elicoidale** con asse di moto (o asse di Mozzi).

**Equazione dell'Asse di Mozzi**

L'asse di moto ha equazione: $$ P(\lambda) - O = \lambda \Omega + \frac{\Omega \times V_O}{\Omega^2} $$ dove $P(\lambda)$ è un punto sull'asse di Mozzi, $O$ è un punto di riferimento (da cui si calcola $V_O$), $\Omega$ è il vettore velocità angolare, $V_O$ è la velocità del punto $O$, $\Omega^2$ è il modulo della velocità angolare al quadrato, e $\lambda$ è un parametro reale.
![[Pasted image 20250425123325.png]]
La velocità $V_P$ di un punto $P$ sull'asse di Mozzi è data da: $$ V_{P(\lambda)} = \frac{I}{\Omega^2} \Omega $$ dove $I$ è l'**invariante scalare** dell'atto di moto.

**L'Invariante Scalare**

[L'invariante scalare](obsidian://adv-uri?vault=obsidian%20Karyl&filepath=6-%20full%20note%2Fmeccanica-lez04.md&block=e1iu8n) $I$ è definito come il prodotto scalare tra la velocità angolare $\Omega$ e la velocità di un punto qualsiasi $V_P$, cioè $I = V_P \cdot \Omega$. Questo valore è lo stesso per tutti i punti del corpo rigido.

**Casi Particolari dell'Atto di Moto (se $\Omega \neq 0$)**

- **Atto di Moto Rotatorio**: Se e solo se l'invariante scalare $I$ è uguale a zero ($I=0$), l'atto di moto si riduce a un moto rotatorio. In questo caso, l'asse di Mozzi coincide con l'asse istantaneo di rotazione.
     ^3w61oq
- **Atto di Moto Traslatorio**: Se la velocità angolare $\Omega$ è uguale a zero ($\Omega = 0$), l'atto di moto è traslatorio. Questo caso è noto e non richiede il teorema di Mozzi. Il teorema si applica quando $\Omega \neq 0$ per descrivere l'atto di moto più generale.
    
![[Pasted image 20250425123449.png]]
**Dimostrazione del Teorema di Mozzi**

Il professore accenna che la dimostrazione presentata in aula è diversa da una dimostrazione costruttiva disponibile altrove (es. online), e che se ne potrà vedere anche una più sintetica. La dimostrazione in aula utilizza il metodo basato su un lemma visto il giorno precedente.

La dimostrazione procede come segue:

**1. Decomposizione della Velocità $V_P$**

Per ogni punto $P$ appartenente al corpo rigido, la velocità $V_P$ può essere scomposta in due componenti: una parallela a $\Omega$ e una perpendicolare a $\Omega$. $$ V_P = V_P^\parallel + V_P^\perp $$ dove $V_P^\parallel$ è parallelo a $\Omega$ e $V_P^\perp$ è perpendicolare a $\Omega$.
![[Pasted image 20250425123542.png]]
**Calcolo della Componente Parallela**

Per eseguire questa decomposizione, si introduce il versore $\hat{n}_\Omega$ parallelo a $\Omega$, ben definito poiché per ipotesi $\Omega \neq 0$. $$ \hat{n}_\Omega = \frac{\Omega}{|\Omega|} = \frac{\Omega}{\Omega_{modulo}} $$ La componente parallela $V_P^\parallel$ si ottiene proiettando $V_P$ sulla direzione di $\Omega$ e moltiplicando per il versore della direzione: $$ V_P^\parallel = (V_P \cdot \hat{n}_\Omega) \hat{n}_\Omega $$ Sostituendo la definizione di $\hat{n}_\Omega$: $$ V_P^\parallel = \left(V_P \cdot \frac{\Omega}{|\Omega|}\right) \frac{\Omega}{|\Omega|} = \frac{(V_P \cdot \Omega)}{|\Omega|^2} \Omega $$ Il termine $(V_P \cdot \Omega)$ è l'invariante scalare $I$. Quindi, la componente parallela è data da: $$ V_P^\parallel = \frac{I}{\Omega^2} \Omega $$ **Osservazione Importante:** Poiché l'invariante scalare $I$ è lo stesso per tutti i punti del corpo rigido, e $\Omega$ è la velocità angolare del corpo (unica), **tutti i punti del corpo rigido hanno la stessa componente di velocità parallela a $\Omega$**. Questa quantità non può essere ridotta a zero se $I \neq 0$; se un punto ha $V_P^\parallel \neq 0$, tutti i punti avranno la stessa componente non nulla. Se un punto ha $V_P^\parallel = 0$, allora l'invariante scalare $I$ deve essere zero, e quindi tutti i punti avranno $V_P^\parallel = 0$.
![[Pasted image 20250425123754.png]]

**Calcolo della Componente Perpendicolare**

La componente perpendicolare $V_P^\perp$ si ottiene per definizione sottraendo la componente parallela dalla velocità totale: $$ V_P^\perp = V_P - V_P^\parallel $$

**2. Definizione dell'Asse di Mozzi**

L'asse di Mozzi è definito come il luogo dei punti $P$ per i quali la componente di velocità perpendicolare a $\Omega$ è nulla ($V_P^\perp = 0$). Questo perché, parlando del moto elicoidale, i punti sull'asse hanno velocità solo parallela all'asse stesso (e quindi a $\Omega$).

**3. Ricerca dei Punti dell'Asse di Mozzi**

Consideriamo la legge di distribuzione delle velocità nel corpo rigido, riferita a un punto $O$: $$ V_P = V_O + \Omega \times (P - O) $$ ![[Pasted image 20250425124106.png]]
Scomponiamo le velocità $V_P$ e $V_O$ nelle loro componenti parallele e perpendicolari rispetto a $\Omega$: $$ V_P^\parallel + V_P^\perp = V_O^\parallel + V_O^\perp + \Omega \times (P - O) $$ Abbiamo osservato che le componenti parallele sono uguali per tutti i punti ($V_P^\parallel = V_O^\parallel = \frac{I}{\Omega^2} \Omega$). Quindi, possiamo semplificarle dall'equazione: $$ V_P^\perp = V_O^\perp + \Omega \times (P - O) $$ Imponiamo la condizione che $V_P^\perp = 0$ per i punti sull'asse di Mozzi: $$ 0 = V_O^\perp + \Omega \times (P - O) $$ Riorganizzando i termini per isolare il vettore posizione relativa $(P - O)$: $$ V_O^\perp = - \Omega \times (P - O) $$ Utilizzando la proprietà anti-commutativa del prodotto vettoriale ($\Omega \times (P-O) = - (P-O) \times \Omega$), l'equazione diventa: $$ V_O^\perp = (P - O) \times \Omega $$![[Pasted image 20250425124212.png]]

**4. [Applicazione del Lemma del Giorno Precedente](obsidian://adv-uri?vault=obsidian%20Karyl&filepath=6-%20full%20note%2Fmeccanica-lez04.md&block=sdajn8)**

Questa equazione $(P-O) \times \Omega = V_O^\perp$ ha la forma di un'equazione vettoriale lineare già studiata nel lemma precedente: $x \times a = b$, dove $x = P-O$, $a = \Omega$, e $b = V_O^\perp$. La soluzione di $x \times a = b$ con $a \neq 0$ e $a \cdot b = 0$ è $x = \lambda a + \frac{a \times b}{a^2}$, dove $\lambda$ è un parametro reale. Nel nostro caso, $a = \Omega$ e $b = V_O^\perp$. Per costruzione, $V_O^\perp$ è perpendicolare a $\Omega$, quindi il prodotto scalare $\Omega \cdot V_O^\perp = 0$ è soddisfatto. Applicando la formula del lemma, la soluzione per $P-O$ è: 
![[Pasted image 20250425124438.png]]
$$ P - O = \lambda \Omega + \frac{\Omega \times V_O^\perp}{\Omega^2} $$ Questa è l'equazione dell'asse di Mozzi.

**Riconciliazione delle Forme dell'Equazione dell'Asse**

Il professore nota che l'equazione ricavata ($P - O = \lambda \Omega + \frac{\Omega \times V_O^\perp}{\Omega^2}$) è formalmente diversa da quella enunciata all'inizio del teorema ($P - O = \lambda \Omega + \frac{\Omega \times V_O}{\Omega^2}$), ma descrivono la stessa retta. Questo perché nel prodotto vettoriale $\Omega \times V_O$, la componente parallela di $V_O$ non contribuisce.
 $$ \Omega \times V_O = \Omega \times (V_O^\parallel + V_O^\perp) = \Omega \times V_O^\parallel + \Omega \times V_O^\perp $$
 
  Dato che $V_O^\parallel$ è parallelo a $\Omega$, il loro prodotto vettoriale è zero ($\Omega \times V_O^\parallel = 0$). $$ \Omega \times V_O = \Omega \times V_O^\perp $$ Quindi, l'equazione può essere scritta indifferentemente usando $V_O$ o $V_O^\perp$: $$ P - O = \lambda \Omega + \frac{\Omega \times V_O}{\Omega^2} $$ oppure $$ P - O = \lambda \Omega + \frac{\Omega \times V_O^\perp}{\Omega^2} $$ Entrambe le forme descrivono la stessa retta tangente a $\Omega$ (cioè, con direzione parallela a $\Omega$). La forma con $V_O$ è spesso più comoda, specialmente nel caso di rotazione pura, dove $V_O^\parallel = 0$ per ogni punto $O$ scelto sull'asse.
![[Pasted image 20250425124734.png]]
**5. Verifica della Velocità dei Punti sull'Asse di Mozzi**

Si verifica che i punti che soddisfano l'equazione dell'asse di Mozzi hanno effettivamente solo la componente di velocità parallela a $\Omega$. La velocità di un punto $P$ è data dalla legge di distribuzione delle velocità $V_P = V_O + \Omega \times (P - O)$. Sostituiamo l'espressione per $P-O$ sull'asse di Mozzi: $$ V_P = V_O + \Omega \times \left(\lambda \Omega + \frac{\Omega \times V_O^\perp}{\Omega^2}\right) $$ Utilizziamo la linearità del prodotto vettoriale: $$ V_P = V_O + \Omega \times (\lambda \Omega) + \Omega \times \left(\frac{\Omega \times V_O^\perp}{\Omega^2}\right) $$ Il primo termine del prodotto vettoriale è zero perché $\Omega \times (\lambda \Omega) = \lambda (\Omega \times \Omega) = 0$. $$ V_P = V_O + \frac{1}{\Omega^2} \Omega \times (\Omega \times V_O^\perp) $$ Applichiamo l'identità del doppio prodotto vettoriale $\vec{a} \times (\vec{b} \times \vec{c}) = (\vec{a} \cdot \vec{c})\vec{b} - (\vec{a} \cdot \vec{b})\vec{c}$ con $\vec{a} = \Omega$, $\vec{b} = \Omega$, $\vec{c} = V_O^\perp$: $$ \Omega \times (\Omega \times V_O^\perp) = (\Omega \cdot V_O^\perp)\Omega - (\Omega \cdot \Omega)V_O^\perp $$ Poiché $V_O^\perp$ è perpendicolare a $\Omega$, $\Omega \cdot V_O^\perp = 0$. $$ \Omega \times (\Omega \times V_O^\perp) = (0)\Omega - (\Omega^2)V_O^\perp = - \Omega^2 V_O^\perp $$ Sostituiamo questo risultato nell'espressione per $V_P$: $$ V_P = V_O + \frac{1}{\Omega^2} (-\Omega^2 V_O^\perp) = V_O - V_O^\perp $$ Infine, ricordando che $V_O = V_O^\parallel + V_O^\perp$: $$ V_P = (V_O^\parallel + V_O^\perp) - V_O^\perp = V_O^\parallel $$ Abbiamo dimostrato che la velocità di un punto sull'asse di Mozzi è uguale alla componente parallela della velocità di un punto qualsiasi $O$. Poiché la componente parallela è la stessa per tutti i punti, la velocità di ogni punto sull'asse di Mozzi è: $$ V_P = V_O^\parallel = \frac{I}{\Omega^2} \Omega $$ Questa velocità è **parallela** a $\Omega$, come atteso per i punti sull'asse di un moto elicoidale.
![[Pasted image 20250425124922.png]]
**6. Relazione con l'Asse Istantaneo di Rotazione**

La seconda parte del teorema riguarda il caso in cui l'atto di moto è rotatorio, ovvero quando l'invariante scalare $I = 0$. Se $I = 0$, la velocità dei punti sull'asse di Mozzi diventa: $$ V_P = \frac{0}{\Omega^2} \Omega = 0 $$ Questo significa che se l'invariante scalare è zero, tutti i punti sull'asse di Mozzi hanno velocità nulla. L'asse di Mozzi diventa quindi l'**asse istantaneo di rotazione**, definito come il luogo dei punti con velocità nulla.

**Viceversa:** Se esiste un punto $Q$ con velocità nulla ($V_Q = 0$), allora $Q$ appartiene all'asse istantaneo di rotazione (se esiste). Applicando lo stesso ragionamento usato per l'asse di Mozzi, se $V_Q = 0$, allora la componente parallela di $V_Q$ deve essere zero: $$ V_Q^\parallel = \frac{I}{\Omega^2} \Omega = 0 $$ Poiché $\Omega \neq 0$, questo implica che l'invariante scalare $I$ deve essere zero. Se $I=0$, abbiamo visto che tutte le componenti parallele della velocità sono nulle per ogni punto del corpo rigido ($V_P^\parallel = 0$ per ogni $P$). In questo caso, tutte le velocità sono ortogonali a $\Omega$. L'equazione dell'asse istantaneo di rotazione (luogo dei punti con $V_P=0$) si ottiene dalla legge di distribuzione delle velocità ponendo $V_P=0$: $$ 0 = V_O + \Omega \times (P - O) $$ Riorganizzando: $$ \Omega \times (P - O) = - V_O $$ $$ (P - O) \times \Omega = V_O $$
![[Pasted image 20250425125753.png]] Questa è la stessa forma dell'equazione per l'asse di Mozzi, $(P-O) \times \Omega = V_O^\perp$, con la differenza che, essendo $I=0$, la velocità $V_O$ è essa stessa perpendicolare a $\Omega$ ($V_O = V_O^\perp$). La soluzione è data dal lemma: $$ P - O = \lambda \Omega + \frac{\Omega \times V_O}{\Omega^2} $$ Questa è l'equazione dell'asse istantaneo di rotazione quando esiste (cioè quando $I=0$).

Questo conclude la spiegazione basata sugli estratti forniti. ^qioiif
___

Certamente. Di seguito troverai la spiegazione tratta dalla fonte "flashcard", strutturata secondo le tue indicazioni. Ti informo che la mia risposta si basa esclusivamente sul testo fornito nella fonte "flashcard", poiché non sono stati forniti altri PDF a cui fare riferimento.

Ecco la trascrizione e l'organizzazione delle spiegazioni del professore:

**Introduzione al Moto dei Corpi Rigidi**

- L'**Asse Istantaneo di Rotazione (R)** esiste e svolge il suo compito. È possibile ricavarlo.

**L'Asse Istantaneo di Rotazione (R)**

- Per individuare l'Asse Istantaneo di Rotazione, è sufficiente trovare un punto del corpo rigido che abbia **velocità nulla**.
- Se si trova un punto con velocità nulla, si scopre che l'**Invariante Scalare ($I$)** è uguale a zero.
- L'invariante scalare $I$ è definito come il prodotto scalare tra il vettore velocità angolare $\boldsymbol{\omega}$ e il vettore velocità di un punto P qualsiasi ($\mathbf{v}_P$), ovvero $I = \boldsymbol{\omega} \cdot \mathbf{v}_P$.
- Dato che $I$ è un invariante (ha lo stesso valore per qualsiasi punto P del corpo rigido), se $I=0$ per un punto, è zero per tutti i punti.
- Un invariante scalare uguale a 0 significa che le velocità di **tutti i punti** del corpo rigido sono **ortogonali** al vettore $\boldsymbol{\omega}$.
- I punti che sono **fermi** (con velocità nulla) appartengono all'asse istantaneo di rotazione.
- L'asse istantaneo di rotazione esiste in quanto esiste l'**Asse di Mozzi** (dimostrato nella parte precedente non inclusa nella fonte fornita). L'Asse di Mozzi, per $I=0$, è costituito da punti con velocità (di modulo) 1 (probabilmente un lapsus, dovrebbe essere velocità di modulo minimo, e nel caso $I=0$ la velocità minima è 0).

**L'Asse di Mozzi: Luogo dei Punti con Velocità di Modulo Minimo**

- **Proposizione:** L'Asse di Mozzi è il luogo geometrico dei punti con velocità di **modulo minimo**.
- La dimostrazione di questa proposizione, dopo aver compreso il Teorema di Mozzi, è "banale" o una "semplice banale conseguenza".
- **Dimostrazione:**
    1. Si considera la velocità di un punto P qualsiasi, $\mathbf{v}_P$, e la si decompone in una componente parallela e una perpendicolare alla direzione di $\boldsymbol{\omega}$ (che definisce la direzione dell'Asse di Mozzi): $\mathbf{v}_P = \mathbf{v}_{P\parallel} + \mathbf{v}_{P\perp}$
    2. Si calcola il modulo quadrato della velocità di P: $|\mathbf{v}_P|^2 = |\mathbf{v}_{P\parallel}|^2 + |\mathbf{v}_{P\perp}|^2$
    3. Spiegazione del passaggio precedente: Quando si calcola il prodotto scalare di $\mathbf{v}_P$ con se stesso, i prodotti scalari delle componenti parallela e perpendicolare ($\mathbf{v}_{P\parallel} \cdot \mathbf{v}_{P\perp}$) sono nulli perché le due componenti sono ortogonali.
    4. Dall'espressione $|\mathbf{v}_P|^2 = |\mathbf{v}_{P\parallel}|^2 + |\mathbf{v}_{P\perp}|^2$, si osserva che il modulo quadrato della velocità di P è evidentemente **maggiore o uguale** al modulo quadrato della sola componente parallela: $|\mathbf{v}_P|^2 \ge |\mathbf{v}_{P\parallel}|^2$
    5. La componente parallela $\mathbf{v}_{P\parallel}$ (la velocità "di trascinamento" lungo l'asse di Mozzi) ha modulo costante per tutti i punti del corpo rigido e pari a $I/|\boldsymbol{\omega}|$. Il professore la indica con "$I \omega$ su $\omega^2$ al quadrato" che interpreta come $(I/|\boldsymbol{\omega}|)^2$.
    6. I punti che appartengono all'Asse di Mozzi hanno **solamente la velocità parallela** ($\mathbf{v}_{P\perp} = \mathbf{0}$ per punti sull'asse).
    7. Qualsiasi altro punto del corpo rigido che non appartenga all'Asse di Mozzi ha anche una componente di velocità perpendicolare non nulla ($\mathbf{v}_{P\perp} \ne \mathbf{0}$).
    8. Pertanto, per i punti non sull'asse, $|\mathbf{v}_P|^2 = |\mathbf{v}_{P\parallel}|^2 + |\mathbf{v}_{P\perp}|^2$ sarà strettamente maggiore di $|\mathbf{v}_{P\parallel}|^2$ (la velocità sull'asse).
    9. Questo dimostra che i punti dell'Asse di Mozzi hanno la velocità di modulo minimo.
![[Pasted image 20250425130327.png]]


**Il Caso Piano (Corpo Rigido Piano)**

- Il caso del corpo rigido piano è particolarmente interessante per gli esercizi.
    
- In questo caso, gli atti di moto possibili si riducono a due: traslatorio o rotatorio.
    
- **Teorema 1: Teorema di Eulero (per il caso piano)**
    
    - **Proposizione:** L'atto di moto di un corpo rigido piano, se non è traslatorio, è **rotatorio**.
    - In caso di moto rotatorio, esiste il **Centro di Istantanea Rotazione (C)**.
    - **Dimostrazione (come corollario di Mozzi):**
        1. Per un corpo rigido piano, il vettore velocità angolare $\boldsymbol{\omega}$ è **perpendicolare** al piano ($\pi$) in cui giace il corpo.
        2. La velocità $\mathbf{v}_P$ di qualsiasi punto P appartenente al corpo rigido piano è contenuta nel piano ($\pi$).
        3. Si calcola l'Invariante Scalare $I = \boldsymbol{\omega} \cdot \mathbf{v}_P$. Poiché $\boldsymbol{\omega}$ è perpendicolare al piano e $\mathbf{v}_P$ è nel piano, il loro prodotto scalare è sempre zero: $I = \boldsymbol{\omega} \cdot \mathbf{v}_P = 0$ per ogni punto P.
        4. Se $\boldsymbol{\omega} \ne \mathbf{0}$ e $I=0$, il Teorema di Mozzi implica che l'Asse Istantaneo di Rotazione R esiste.
           ![[Pasted image 20250425130645.png]]
        5. Poiché R è parallelo a $\boldsymbol{\omega}$, R è **perpendicolare al piano**.
        6. L'intersezione di questo asse R con il piano è un **punto unico**. Questo punto è il Centro di Istantanea Rotazione (C).
        7. Pertanto, se $\boldsymbol{\omega} \ne \mathbf{0}$, l'atto di moto è **rotatorio** attorno a C.
        8. Se $\boldsymbol{\omega} = \mathbf{0}$, l'atto di moto è banalmente **traslatorio**.
    - Questa dimostrazione è una "banalità" o un "teoremino utile" dopo aver visto il Teorema di Mozzi, semplicemente osservando la perpendicolarità di $\boldsymbol{\omega}$ al piano e la giacenza di $\mathbf{v}_P$ nel piano.
       ^4sbxfb
- **Teorema 2: Teorema di Chasles**
    
    - Questo teorema è molto semplice e molto utile per **individuare graficamente** il Centro di Istantanea Rotazione per il corpo piano. (Nota sulla pronuncia: "Scialle", le due 's' non si sentono).
    - **Proposizione:** Siano A e B due punti appartenenti a un corpo rigido piano tali che le loro velocità $\mathbf{v}_A$ e $\mathbf{v}_B$ **non siano parallele**.
    - Allora, il Centro di Istantanea Rotazione (C) si trova all'**intersezione** della retta $r_A$ passante per A e **perpendicolare a $\mathbf{v}_A$**, e della retta $r_B$ passante per B e **perpendicolare a $\mathbf{v}_B$**.
      ![[Pasted image 20250425131948.png]]
    - Questo metodo è utile per individuare C, anche se a volte può essere difficile.
    - Riferire l'atto di moto al CIR C è conveniente perché la velocità di C è nulla: $\mathbf{v}_P = \boldsymbol{\omega} \times (\mathbf{P} - \mathbf{C})$ dove $\mathbf{v}_C = \mathbf{0}$.
    - **Dimostrazione:**
        1. Si ipotizza che $\mathbf{v}_A$ non sia parallela a $\mathbf{v}_B$.
        2. Ciò implica che $\mathbf{v}_A$ è diversa da $\mathbf{v}_B$.
        3. L'atto di moto **non può essere traslatorio** (altrimenti le velocità sarebbero uguali).
        4. Per il Teorema di Eulero, l'atto di moto è **rotatorio**, il che significa che $\boldsymbol{\omega} \ne \mathbf{0}$ e che il Centro di Istantanea Rotazione (C) esiste.
           ![[Pasted image 20250425132110.png]]
        5. Si scrive l'atto di moto rotatorio riferito al punto C (anche se la posizione di C non è ancora nota), usando la formula fondamentale della cinematica dei corpi rigidi riferita a C: $\mathbf{v}_A = \mathbf{v}_C + \boldsymbol{\omega} \times (\mathbf{A} - \mathbf{C})$ $\mathbf{v}_B = \mathbf{v}_C + \boldsymbol{\omega} \times (\mathbf{B} - \mathbf{C})$
        6. Poiché C è il Centro di Istantanea Rotazione, la sua velocità è nulla: $\mathbf{v}_C = \mathbf{0}$
        7. Sostituendo $\mathbf{v}_C = \mathbf{0}$ nelle equazioni precedenti: $\mathbf{v}_A = \boldsymbol{\omega} \times (\mathbf{A} - \mathbf{C})$ $\mathbf{v}_B = \boldsymbol{\omega} \times (\mathbf{B} - \mathbf{C})$
        8. Si osservano le proprietà del prodotto vettoriale: il risultato $\boldsymbol{\omega} \times \mathbf{r}$ è perpendicolare a entrambi i vettori $\boldsymbol{\omega}$ e $\mathbf{r}$.
        9. Dall'equazione $\mathbf{v}_A = \boldsymbol{\omega} \times (\mathbf{A} - \mathbf{C})$, si deduce che $\mathbf{v}_A$ è **perpendicolare** al vettore $(\mathbf{A} - \mathbf{C})$.
        10. Il vettore $(\mathbf{A} - \mathbf{C})$ giace sulla retta che passa per A e C.
        11. Questo implica che il punto C deve giacere sulla retta che passa per A ed è **perpendicolare a $\mathbf{v}_A$**. Questa è la retta $r_A$ definita nella proposizione del teorema.
        12. Allo stesso modo, dall'equazione $\mathbf{v}_B = \boldsymbol{\omega} \times (\mathbf{B} - \mathbf{C})$, si deduce che $\mathbf{v}_B$ è **perpendicolare** al vettore $(\mathbf{B} - \mathbf{C})$.
        13. Il vettore $(\mathbf{B} - \mathbf{C})$ giace sulla retta che passa per B e C.
        ![[Pasted image 20250425132222.png]]
        14. Questo implica che il punto C deve giacere sulla retta che passa per B ed è **perpendicolare a $\mathbf{v}_B$**. Questa è la retta $r_B$ definita nella proposizione del teorema.
        15. Poiché C si trova sia sulla retta $r_A$ che sulla retta $r_B$, deve essere il loro punto di intersezione. L'intersezione è unica perché, essendo $\mathbf{v}_A$ e $\mathbf{v}_B$ non parallele, le rette $r_A$ e $r_B$ (a loro perpendicolari) non sono parallele.
    - Questo conclude la dimostrazione. ^q7q6t2

**Esempio Grafico (per il Teorema di Chasles)**

- Per chiarire le idee, si considera un esempio.
- Si prendono due punti A e B su un corpo rigido piano (immaginato con una certa sagoma).
- Si disegnano le velocità $\mathbf{v}_A$ e $\mathbf{v}_B$ dei punti A e B. È importante che rispettino le condizioni di rigidità (la proiezione di $\mathbf{v}_A$ e $\mathbf{v}_B$ sulla retta congiungente A e B deve essere uguale) e che **non siano parallele** per poter applicare il teorema di Chasles.
- **Passaggi grafici per trovare il CIR (C):**
    1. Tracciare la retta $r_A$ passante per il punto A e **perpendicolare** al vettore velocità $\mathbf{v}_A$.
    2. Tracciare la retta $r_B$ passante per il punto B e **perpendicolare** al vettore velocità $\mathbf{v}_B$. (Si indica con un angolo retto nel disegno).
    3. Il punto di **intersezione** delle rette $r_A$ e $r_B$ è il Centro di Istantanea Rotazione (C).
- Si sottolinea che esempi in cui le velocità $\mathbf{v}_A$ e $\mathbf{v}_B$ non rispettano le condizioni di rigidità o parallelismo non sono corretti per trovare il CIR in questo modo.<
![[Pasted image 20250425132439.png]]
  
  ___


**Introduzione ai Vincoli nel Moto dei Corpi Rigidi**

Il discorso sui vincoli segue la trattazione degli atti di moto e si rende necessario per affrontare gli esercizi che, nel caso del corpo rigido piano, implicano spesso la presenza di vincoli. I vincoli sono dispositivi che limitano il movimento accessibile a un sistema di punti materiali o a un corpo rigido. Il professore introduce una prima divisione in due classi principali di vincoli:

1. **Vincoli di Posizione**
2. **Vincoli di Mobilità** ^1y9m7i

**1. Vincoli di Posizione**

I vincoli di posizione sono dispositivi che **limitano le configurazioni accessibili** al sistema. Sono già stati visti esempi in precedenza. Anche il vincolo di rigidità di un corpo rigido è esso stesso un vincolo di posizione. Un esempio di vincolo di posizione è un anellino vincolato a una sbarra: l'anellino può muoversi solo lungo la sbarra, perdendo gradi di libertà perpendicolari ad essa e mantenendo una sola coordinata libera.
![[Pasted image 20250426160739.png]]

- **Rappresentazione Matematica dei Vincoli di Posizione**
    
    Dato un sistema generico di $n$ punti materiali, i vincoli di posizione possono essere imposti tramite $m$ funzioni $F_i$ che dipendono dalle posizioni dei punti ($x_1, \dots, x_n$) e potenzialmente dal tempo ($t$), e che devono essere nulle. Assumendo che questi $m$ vincoli siano indipendenti, la loro forma generale è: $$ F_1(x_1, x_2, \dots, x_n, t) = 0 $$ $$ F_2(x_1, x_2, \dots, x_n, t) = 0 $$ $$ \vdots $$ $$ F_m(x_1, x_2, \dots, x_n, t) = 0 $$ o, in forma più compatta: $$ F_i(x_1, \dots, x_n, t) = 0, \quad i = 1, \dots, m $$ dove $x_j$ rappresenta le coordinate del $j$-esimo punto, che possono essere vettoriali. $P_1, \dots, P_n$ potrebbe essere usato al posto di $x_1, \dots, x_n$.
    ![[Pasted image 20250426161447.png]]

**2. Vincoli di Mobilità**

I vincoli di mobilità sono dispositivi che **limitano le velocità accessibili** al sistema. Esempi specifici per il corpo rigido piano, come il puro rotolamento, rientrano in questa categoria e saranno visti più avanti, riducendosi, nel caso del corpo rigido piano visto dal professore, a vincoli positivi.
![[Pasted image 20250426160826.png]]

- **Relazione tra Vincoli di Posizione e Vincoli di Mobilità**
    
    Le due classi di vincoli, mobilità e posizione, hanno una intersezione non nulla. Si può ottenere un vincolo di mobilità a partire da un vincolo di posizione.
    
    - **Dimostrazione: Derivazione di un Vincolo di Mobilità da un Vincolo di Posizione**
        
        Consideriamo un singolo vincolo di posizione: $$ F(x_1, \dots, x_n, t) = 0 $$ Poiché questa funzione è identicamente uguale a zero per tutto il tempo in cui il vincolo è attivo, anche la sua derivata totale rispetto al tempo deve essere zero: $$ \frac{dF}{dt} = 0 $$ Espandendo la derivata totale tramite la regola della catena, ricordando che $x_i$ sono funzioni del tempo $t$ ($x_i(t)$), si ottiene: $$ \frac{dF}{dt} = \sum_{i=1}^n \frac{\partial F}{\partial x_i} \cdot \frac{dx_i}{dt} + \frac{\partial F}{\partial t} = 0 $$
        ![[Pasted image 20250426161840.png]]
		 Il professore utilizza una notazione in cui $\frac{df}{dx_i}$ sta per il gradiente di $F$ rispetto alle coordinate del punto $i$ (se $x_i$ è un vettore di coordinate) e $x.i$ sta per la velocità $\dot{x}_i$ (vettore velocità del punto $i$). Adattando la notazione del professore per un sistema di $n$ punti, dove $\mathbf{x}_i$ è la posizione vettoriale del punto $i$ e $\dot{\mathbf{x}}_i$ la sua velocità vettoriale: $$ \sum_{i=1}^n \nabla_{\mathbf{x}_i} F \cdot \dot{\mathbf{x}}_i + \frac{\partial F}{\partial t} = 0 $$
        
        - **Commento sui Passaggi:**
            - Partiamo dalla funzione del vincolo di posizione $F$ che è nulla.
            - La derivata totale $\frac{dF}{dt}$ è la variazione di $F$ seguendo il moto dei punti e tenendo conto dell'eventuale dipendenza esplicita dal tempo.
            - Questa derivata totale è zero perché $F$ è sempre zero.
            - La regola della catena ci dice come calcolare questa derivata totale: somma dei contributi dovuti al cambiamento di posizione dei punti (termini con $\dot{\mathbf{x}}_i$) più il contributo dovuto all'eventuale cambiamento esplicito nel tempo del vincolo ($\frac{\partial F}{\partial t}$).
            - I termini $\nabla_{\mathbf{x}_i} F \cdot \dot{\mathbf{x}}_i$ sono prodotti scalari tra il gradiente della funzione del vincolo rispetto alle coordinate del punto $i$ e la velocità del punto $i$. Il professore ha scritto $\frac{df}{dx_i}$ come notazione per il gradiente.
            - L'equazione risultante è una relazione che lega le velocità dei punti. Questo è un **vincolo di mobilità**.
        
        Il professore commenta che i vincoli di mobilità ottenuti in questo modo sono "farlocchi" (cioè, apparenti), nel senso che si riducono al vincolo di posizione originale. L'unico vincolo effettivo è quello di posizione.
        
- **Integrabilità dei Vincoli di Mobilità**
    
    Posta la domanda opposta: è sempre possibile ridurre un vincolo di mobilità a un vincolo di posizione?. Il professore spiega che per affrontare questa questione adeguatamente servono strumenti matematici che non si possiedono, in particolare il linguaggio delle forme differenziali. La possibilità di ridurre un vincolo di mobilità a uno di posizione dipende dalla sua **integrabilità**.
    
    - Se un vincolo di mobilità è **integrabile**, esso si riduce a un vincolo di posizione. Questi sono chiamati vincoli di mobilità integrabili.
    - Se un vincolo di mobilità **non è integrabile**, non può essere ridotto a un vincolo di posizione. Questi sono chiamati **vincoli di pura mobilità**. Dunque, i vincoli di posizione e i vincoli di pura mobilità rappresentano due classi di vincoli che non si intersecano e non sono riducibili l'una all'altra.
      ![[Pasted image 20250426162051.png]]
      ![[Pasted image 20250426162104.png]]
      

**3. Nomenclatura: Vincoli Olonomi e Anolonomi**

- **Definizione:**
    
    - I **vincoli di posizione** sono detti **olononomi**. Il professore aggiunge che si parlerà anche di olonomia del vincolo.
    - I **vincoli di pura mobilità** sono detti **anolonomi**. Questi sono considerati difficili da trattare. Il professore accennerà ad essi ma non ne mostrerà esempi all'opera.
      ![[Pasted image 20250426162248.png]]
- **Origine dei Termini:**
    
    - L'origine è greca.
    - **Olononomia** significa "conoscete per intero la legge che governa il vincolo".
    - **Anolonomia**, con l'alfa privativa, significa che "non conoscete per intero la legge".
- **Esempi Concreti di Vincoli di Pura Mobilità** Gli esempi più comuni di vincoli di pura mobilità (anolonomi) sono quelli di puro rotolamento.
    
    - La ruota della bicicletta che rotola senza strisciare.
    - Un disco che rotola senza strisciare sul piano.
    - La palla o il pallone da calcio che rotola senza strisciare. Questo significa che il punto di contatto è istantaneamente fermo e non striscia sul pavimento. Il professore riprenderà questi esempi in seguito.

**4. Ulteriore Classificazione: Vincoli Fissi e Vincoli Mobili**

Oltre alla divisione in posizione/mobilità (olononomi/anolonomi), i vincoli possono essere ulteriormente classificati in **vincoli fissi** e **vincoli mobili**. (Viene menzionata anche la divisione in unilateri e bilateri, ma verrà trattata dopo aver dato altre opzioni).

- **Vincoli Fissi**
    
    Sono i vincoli che **non hanno una dipendenza esplicita dal tempo** nella loro equazione che li definisce. La funzione $F$ dipende solo dalle posizioni: $F(x_1, \dots, x_n) = 0$.
    
    - **Esempio di Vincolo Fisso:** Un punto materiale $P$ che deve stare su una circonferenza di raggio $R$ costante. La posizione del punto può essere descritta in coordinate cartesiane $(x, y)$. Il vincolo è che la distanza dall'origine sia $R$. L'equazione del vincolo è: $$ x^2 + y^2 - R^2 = 0 $$ Questa è una funzione $F(x, y) = x^2 + y^2 - R^2 = 0$. Non c'è una dipendenza esplicita dal tempo $t$ in questa espressione. Questo è un vincolo fisso. Si può anche descrivere il punto con coordinate parametriche come $x(t) = R \cos(\theta(t))$ e $y(t) = R \sin(\theta(t))$, che mostrano una dipendenza dal tempo attraverso l'angolo $\theta(t)$, ma la funzione del vincolo $F$ non dipende esplicitamente da $t$.
      ![[Pasted image 20250426162359.png]]
- **Vincoli Mobili**
    
    Sono i vincoli che presentano una **dipendenza esplicita dal tempo** nella loro equazione. La funzione $F$ dipende dalle posizioni e dal tempo: $F(x_1, \dots, x_n, t) = 0$.
    
    - **Esempio di Vincolo Mobile:** Un punto materiale $P$ che deve stare su una circonferenza il cui raggio varia nel tempo, ad esempio $R(t) = vt$, dove $v$ è una costante con dimensioni di velocità. L'equazione del vincolo è: $$ x^2 + y^2 - (R(t))^2 = 0 $$ Sostituendo $R(t) = vt$: $$ x^2 + y^2 - (vt)^2 = 0 $$ Questa è una funzione $F(x, y, t) = x^2 + y^2 - (vt)^2 = 0$. C'è una dipendenza esplicita da $t$. Questo è un vincolo mobile.
	![[Pasted image 20250426162503.png]]
**Riassunto e Importanza** ^q2p5qy

Riassumendo, la prima divisione principale è tra vincoli di posizione (olononomi), che limitano le configurazioni, e vincoli di mobilità, che limitano le velocità. I vincoli di mobilità possono essere integrabili (e ridursi quindi a vincoli di posizione) o di pura mobilità (anolonomi). Una seconda suddivisione importante, ortogonale alla prima, è tra vincoli fissi (nessuna dipendenza esplicita dal tempo) e vincoli mobili (dipendenza esplicita dal tempo).

La distinzione tra vincoli fissi e mobili è particolarmente utile per le discussioni future sulla dinamica, sulle Lagrangiane e sulla conservazione dell'energia. La presenza di vincoli mobili cambia le cose rispetto alla presenza di soli vincoli fissi.
#### References
[[meccanica-lez06_trascrizione]]


