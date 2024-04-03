const nouvelleTache = document.getElementById("nouvelle-tache");
const ajouterTache = document.getElementById("ajouter-tache");
const listeTaches = document.getElementById("liste-taches");

ajouterTache.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = nouvelleTache.value;

  // Bouton de suppression
  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.innerText = "Supprimer";
  boutonSupprimer.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });

  li.appendChild(boutonSupprimer);
  listeTaches.appendChild(li);

  nouvelleTache.value = "";
});
