function dessinerHisto(data) {
    if (data.length === 0) return "";

    const h_max = Math.max(...data);
    const l = 6;
    const graphe = [];

    
    for (let nv = 0; nv <= h_max; nv++) {
        const ligne = [];
        for (let val of data) {
            if (val >= h_max - nv) {
                if (nv === h_max - val) {
                    ligne.push(" ____ ");
                } else {
                    ligne.push("|    |");
                }
            } else {
                ligne.push("......");
            }
        }
        if (nv === 0) {
            graphe.push(" " + ligne.join(" ") + ` ^ ${h_max}`);
        } else {
            graphe.push("| " + ligne.join(" ") + ` | ${h_max - nv}`);
        }
    }

    //  ligne de base
    const ligneDeBase = "| " + data.map(() => " ____ ").join(" ") + " | 0";
    graphe.push(ligneDeBase);

   
    return graphe.join("\n");
}

// Test
const data = [10, 5, 3, 1, 4];
console.log(dessinerHisto(data));
