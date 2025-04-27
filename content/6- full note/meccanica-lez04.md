2025-03-01 21:03

_Status: #flashcard_zero  #riscritto_finito   #revisione_finita 

_Tags: [[sbobine]]   [[meccanica razionale]]

## meccanica-lez04

### Catalogo dei Moti

#### Moto Elicoidale

- **Definizione**: Il moto di un corpo rigido B è elicoidale se esiste una direzione solidale di orientazione invariante rispetto agli assi fissi tale che due punti qualsiasi del corpo hanno velocità parallela a tale direzione.
- **Formalmente**: Esiste una direzione r invariante tale che $\underline v_P \parallel r$    $\forall P \in r$.
- **Caratteristiche**:
	- ![[Pasted image 20250228135133.png]]
    - È un sotto-caso del moto rototraslatorio.
    - Possiede due gradi di libertà: l'angolo di rotazione e la traslazione lungo l'asse.
    - $k \parallel {r}$ e $k \parallel {K}$, dove $k$ è il versore dell'asse z solidale al corpo e $K$ è il versore dell'asse fisso.
- **Esempio**: Il moto di una vite che si avvita. ^jh7j0v

#### Moto Rotatorio

- **Definizione**: Il moto di un punto P è tale se esiste una direzione ${r}$ invariante rispetto agli assi fissi, tale che i punti su questa direzione hanno velocità nulla.
- **Formalmente**: Esiste una direzione ${R}$ invariante tale che ${v}_t = 0$ per ogni $t \in {R}$, dove ${R}$ è l'asse di rotazione.
- **Caratteristiche**:
    - Possiede un solo grado di libertà.
    - È un sotto-caso sia del moto rototraslatorio che del moto elicoidale.
- **Esempio**: Un cilindro che ruota attorno al suo asse Z. In questo caso, i punti sull'asse di rotazione sono fissi e hanno velocità nulla.
	- ![[Pasted image 20250228135332.png]] ^gjld8q

#### Esempio Complesso: Elicottero

Un esempio che combina diversi tipi di moto è quello di un elicottero.

- **Componenti**:
    - Carlinga (corpo principale)
    - Rotore principale
    - Rotore anti-coppia
    - ![[Pasted image 20250228135510.png]]
- **Moti**:
    - **Carlinga**: moto traslatorio In fase di decollo verticale, trasla senza cambiare orientazione rispetto agli assi fissi.
    - **Rotore principale**: Compie un moto elicoidale. I punti sull'asse del rotore hanno velocità verticale parallela all'asse.
    - **Rotore anti-coppia**: Esegue un moto rotatorio. L'asse del rotore anti-coppia è la direzione privilegiata. Il rotore anti-coppia serve per stabilizzare il volo della carlinga.

#### Moto Polare

- **Definizione**: Esiste un punto $\underline P$ fisso, tale che ${v}_P = 0$ e $P$ appartiene al corpo rigido.
- **Caratteristiche**:
    - Possiede tre gradi di libertà, rappresentati dagli angoli di Eulero.
    - Fissa i gradi di libertà traslazionali, lasciando solo quelli rotazionali.
- **Esempio**: Una trottola con un punto fisso. ^r694e0


___

### Teorema Fondamentale sulla Rigidità di un Sistema

**Enunciato:** Un sistema di _n_ punti materiali è rigido se e solo se la variazione della distanza tra due punti qualsiasi _a_ e _b_ del sistema rimane costante nel tempo.
$$\underline{V}_B \cdot (B - A) = \underline{V}_A \cdot (B - A) \quad
\forall A, B \in S \quad \forall t$$
la proiezione della velocità sulla congiungente di due punti devono essere uguali in modulo e in verso. 
![[Pasted image 20250228141209.png]]

#### Dimostrazione

1. **Punto di partenza:** La distanza al quadrato tra due punti _B_ e _A_ è costante se il corpo è rigido:
    
    $\frac{d}{dt} (B - A)^2 = \frac{d}{dt} |B - A|^2= 0$
    
2. **Espansione:** $(b - a)^2$ può essere scritto come il prodotto scalare di $(b - a)$ con se stesso:
    
    $(b - a)^2 = (b - a) \cdot (b - a)$
    
3. **Derivazione:** Derivando rispetto al tempo, si ottiene:
    
    $\frac{d}{dt} [(b - a) \cdot (b - a)] = 2 (b - a) \cdot \frac{d}{dt} (b - a) = 2 (b - a) \cdot (\dot{b} - \dot{a})$
    
4. **Conclusione:** Se la derivata è zero, allora:  
    
    $(b - a) \cdot (\dot{b} - \dot{a}) = 0$
    
    Questo implica che la proiezione della velocità relativa $(\dot{b} - \dot{a})$ lungo la congiungente $(b - a)$ è zero. In altre parole, le proiezioni delle velocità dei due punti lungo la congiungente devono essere uguali in modulo e verso.
    
5. **Reciproco:** Se vale la relazione $(b - a) \cdot (\dot{b} - \dot{a}) = 0$ per ogni _a_, _b_ e per ogni tempo _t_, allora $\frac {1}{2}\frac{d}{dt} (B - A)^2$
	-  il sistema _S_ è rigido o in moto rigido.
    

**Significato Fisico:** Questo teorema implica che, per  un corpo rigido, le variazioni delle velocità dei punti devono essere tali da non alterare le distanze relative tra i punti stessi.

#### Esempio Esplicativo

- **Caso Rigido:** Consideriamo due punti _A_ e _B_ su un corpo rigido. Se le proiezioni delle loro velocità lungo la congiungente _AB_ sono uguali (sia in modulo che in verso), allora il corpo è rigido.
- **Caso Non Rigido:** Se le proiezioni sono uguali in modulo ma opposte in verso, il corpo non è rigido. Ad esempio, se i due punti avessero velocità tali da allontanarsi o avvicinarsi lungo la linea che li congiunge, il corpo non manterrebbe la sua rigidità. ^whru5m

### Atto di Moto (ADM)

#### Definizione

L'atto di moto (ADM) di $\mathcal{B}$ è l'insieme delle velocità di tutti i punti $p_i \quad di \quad \mathcal{B}$ di un corpo rigido in un istante fissato $t_0$.
Formalmente, è il campo di velocità dei punti del corpo in quell'istante:

${ v_P(t_0)  \quad P \in B \quad \forall i=1,\cdots,N}$

dove $B$ rappresenta il corpo rigido.

- **Terminologia:** La definizione di "atto di moto" è attribuita a Maraldi. Nei testi in inglese, questa definizione potrebbe non essere presente.
- **Stato Cinetico:** L'atto di moto può essere interpretato come lo stato cinetico del corpo rigido all'istante $t_0$, ovvero la conoscenza delle velocità di tutti i suoi punti in quell'istante. ^gmy9yu

#### Distinzione tra Atto di Moto e Moto

È fondamentale distinguere tra "atto di moto" e "moto":

- **Atto di Moto:** Fornisce un'istantanea delle velocità. Non permette di determinare il moto completo del corpo.
- **Moto:** Descrive l'evoluzione temporale della posizione e dell'orientamento del corpo, fornendo una conoscenza completa del suo movimento.

**Analogia:** Per un punto materiale, l'atto di moto è analogo alla velocità istantanea, mentre il moto è analogo alla traiettoria completa del punto. Conoscere la velocità istantanea in un dato momento non permette di ricostruire l'intera traiettoria.

#### Utilità dell'Atto di Moto

La conoscenza dell'atto di moto in un intervallo di tempo, combinata con le condizioni iniziali, permette di ricostruire il moto del corpo. ^qh7oz3
### Tipi di Atto di Moto

Fondamentalmente, ci sono quattro tipi di atto di moto, ma nel caso del corpo rigido piano, si riducono a due:

1. **Atto di Moto Traslatorio**: In questo caso, tutti i punti del corpo hanno la stessa velocità in un dato istante. Ciò implica che la velocità angolare $\omega$ è uguale a zero.
    
    - Formalmente, $v_P= v_Q$ per ogni coppia di punti $P$ e $Q$ appartenenti al corpo.
    - Questo è possibile solo se $\omega = 0$.
    - Se un corpo ha un moto traslatorio, il suo atto di moto ha $\omega = 0$ in ogni istante.


2. **Atto di Moto Roto-Traslatorio**: È caratterizzato dalla legge di distribuzione delle velocità. l'atto di moto di B è tale se Esiste una direzione privilegiata $R_{\underline P}$ tale che ogni direzione $R$ parallela a $R_{\underline P}$ è luogo di punti con la stessa velocità.
    
    - Vale la legge di distribuzione delle velocità: $v_P = v_Q + \omega \wedge {P-Q}$, dove $\omega$ è la velocità angolare e ${P-Q}$ è il vettore che congiunge i punti $P$ e $Q$.
    - $\omega$ è parallela a $R_P$.
    - Se $P$ e $Q$ appartengono a una retta $R$ parallela a $R_P$, allora $v_P = v_Q + \omega \wedge {P-Q}$, allora con  ${P-Q} \in R$  si ha ${P-Q} // \omega$ e quindi $(\omega \wedge {P-Q}=0)$.
      
    - Quando si scrive $v_P = v_Q + \omega \wedge {P-Q}$, si dice che l'atto di moto è riferito al punto $Q$.
    - Per definire completamente l'atto di moto, è sufficiente conoscere $P-Q$ e $\omega$.
	    ##### teorema
	    un sistema S di N punti materiali (o anche un continuo) è in moto rigido se e solo se l'adm di S è rototraslatorio in ogni istante
	    - non c'è bisogno di dimostrarlo visto che si tratta della legge della distribuzione delle velocità


3. **Atto di Moto Elicoidale:** L'**atto di moto rototraslatorio** è tale se esiste una direzione $r_M$, detta **asse di Mozzi**, con $r_M$ parallela a $r_P$ (direzione privilegiata), i punti di questo asse hanno velocità parallela alla direzione preferenziale 
    $v_P$ // $r_P$  $\forall P \in r_M$.

    
4. **Atto di Moto Rotatorio**: È un caso particolare dell'atto di moto roto-traslatorio. Si riduce al rotatorio se esiste un asse di istantanea rotazione $R_I // R_p$ tale che i punti su $R_I$ hanno velocità nulla.
    
    - $v_P = 0$ per ogni punto $P$ appartenente a $R_I$.
    - L'asse di moto rotatorio è istantaneo e può cambiare nel tempo. Non è un asse di rotazione fisso per tutta l'eternità.
    - Avere un atto di moto rotatorio non implica che il moto sia rotatorio. Ad esempio, nel moto polare della trottola, esiste un asse di istantanea rotazione, ma non è fisso.
    - Se si prende come riferimento un punto sull'asse di istantanea rotazione, l'espressione della velocità si semplifica.
    - Se $P$ appartiene a $R$, allora $v_Q = \omega \times {P-Q}$. ^cykoq0


### Corpo Rigido Piano: Centro di Istantanea Rotazione

Nel caso di un corpo rigido piano $\mathcal{B}$, se l'atto di moto è rotatorio, esiste un punto $C$ chiamato **centro di istantanea rotazione**.

- $\omega$ è perpendicolare al piano e le velocità sono tutte contenute nel piano.
- Se si trova un punto con velocità nulla, l'atto di moto è rotatorio.
- L'asse di istantanea rotazione interseca il piano nel punto $C$, che è il centro di istantanea rotazione. Questo punto è anche detto "CIR".
	- $r_I \cap \pi = C$ con $r_I \perp \pi$ ($r_I // \underline{\omega}$)
- Se si conoscono le velocità di due punti diversi, l'atto di moto è rotatorio.
- È utile riferirsi al centro di istantanea rotazione quando si studia l'atto di moto, ma non è obbligatorio.

### Invariante Scalare Cinematico

- **Definizione:** L'invariante scalare cinematico è definito come il prodotto scalare tra la velocità di un punto $P$ del corpo rigido e la velocità angolare $\omega$:
    
    $$I = \underline v_P \cdot \underline\omega$$
    
- **Invarianza:** Questo valore è invariante rispetto alla scelta del punto $P$ sul corpo rigido:
    
    $v_P \cdot  = v_Q + \omega \times {Q-P}  \quad \forall \ P, Q \ \in B$
    
- **Dimostrazione:** Utilizzando la legge di distribuzione delle velocità, si ha:
    
    $v_P \cdot \omega = (v_Q + \omega \times {Q-P}) \cdot \omega = v_Q \cdot \omega + (\omega \times {Q-P}) \cdot \omega = v_Q \cdot \omega$
    
    Poiché il prodotto vettoriale $(\omega \times {Q-P})$ è perpendicolare a $\omega$, il loro prodotto scalare è zero.
     ^e1iu8n
**Teorema di Mozzi**: L'invariante scalare è utile per formulare il teorema di Mozzi, che afferma che l'atto di moto più generale per un corpo rigido è elicoidale, con asse coincidente con l'asse di Mozzi.

### Lemma di Calcolo Vettoriale

Per dimostrare il teorema di Mozzi, è utile un lemma di calcolo vettoriale.

**Enunciato**: Siano _$\underline a$_ e $\underline b$ vettori fissati non nulli, e sia _O_ l'origine. Si consideri l'equazione vettoriale:

$P-O \times a = b$

L'equazione ammette soluzione se e solo se $a \cdot b = 0$.

Se $a \cdot b = 0$, la soluzione ha la forma:

$P_{\lambda}-O = \lambda a + \frac{a \times b}{a^2}$

dove $\lambda \in {R}$ è arbitrario, e $a^2 = ||a||^2$ è il modulo quadro di _a_. I punti $P_{\lambda}$ descrivono una retta parallela al vettore _a_.

**Dimostrazione**:

1. **Necessità della condizione $a \cdot b = 0$**:
    
    Se esiste una soluzione _x_ = $P-O$ incognito tale che $x \times a = b$, allora facendo il prodotto scalare con _a_:
    
    $(P-O \wedge a) \cdot a = b \Longleftrightarrow(x \wedge a) \cdot a = b \cdot a$
    
    Ma $(x \times a) \cdot a = 0$ perché il prodotto vettoriale è ortogonale ad _a_. Quindi $a \cdot b = 0$.
    Soluzioni Quando $a \cdot b = 0$
    Si dimostra che se $a \cdot b = 0$, allora esistono soluzioni e si trova la loro forma generale.
2. 
	- Siano $P_1$ e $P_2$ due soluzioni dell'equazione, tali che $P_1 \wedge a = b$ e $p_2 \wedge a = b$.
	- Si sottraggano membro a membro le due equazioni: $(P_1 - P_2) \wedge a = 0$.
	- Questo implica che $P_1 - P_2$ è parallelo ad $a$, ovvero $P_1 - P_2 = \lambda a$ per qualche scalare $\lambda$.
	- Quindi, tutte le soluzioni differiscono per un multiplo di $a$, ovvero giacciono su una retta parallela ad $a$.
3. definiamo $P_0$   tale che $(P_0 - O) \perp \underline{a}$
	- consideriamo $$\underline{a} \wedge [(P_0 - O) \wedge \underline{a}]= \underline{a}^2 (P_0 - O) - (\underline{a} \cdot (P_0 - O)) \underline{a}$$
	- con $(\underline{a} \cdot (P_0 - O)) \underline{a}=0$

	- sia $(P_0 - O)$  una soluzione tale che $(P_0 - O) \wedge \underline{a} = \underline{b}$
		- allora vale vale $\underline{a}^2 (P_0 - O) = \underline{a} \wedge \underline{b}$


	- allora $$(P_0 - O) = \frac{\underline{a} \wedge \underline{b}}{a^2}$$
	- che è soluzione esplicita e lo si dimostra prchè vale (ricordando che $a \cdot b = 0$ per ipotesi )  $$\left( \frac{\underline{a} \wedge \underline{b}}{a^2} \right) \wedge \underline{a} = \frac{\underline{a} \wedge (\underline{b} \wedge \underline{a})}{a^2} = \frac{a^2 \underline{b} - (\underline{a} \cdot \underline{b}) \underline{a}}{a^2} = b$$
4. **Sufficienza e costruzione della soluzione**:
    
    Supponiamo che $a \cdot b = 0$. Cerchiamo una soluzione nella forma $P_{\lambda}-O = \lambda a + \frac{a \wedge b}{a^2}$.
    
    Verifichiamo che questa sia una soluzione:
    
    $$P_{\lambda}-O \wedge a = \left(\frac{a \wedge b} {a^2}\right) \wedge a = b$$ ^sdajn8
### 5. Interpretazione Geometrica
![[Pasted image 20250301204739.png]]
Si fornisce un'interpretazione geometrica delle soluzioni.

- Si consideri l'origine $O$, il vettore $a$, e la retta dei punti $p_\lambda = \lambda a + \frac{a \times b}{a^2}$.
- La retta è parallela ad $a$ e passa per il punto $P_o = \frac{a \times b}{a^2}$, che è il punto di minima distanza dall'origine sulla retta delle soluzioni.
- Ogni punto su questa retta rappresenta una soluzione dell'equazione originale.

In conclusione, il lemma è dimostrato mostrando che la condizione $a \cdot b = 0$ è necessaria e sufficiente per l'esistenza di soluzioni, e che la forma generale delle soluzioni è $x = \lambda a + \frac{a \times b}{a^2}$, dove $\lambda$ è un parametro reale arbitrario. 

#### References
[[meccanica-lez04_trascrizione]]


